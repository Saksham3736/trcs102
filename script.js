/* ==========================================================================
   TRCS102 Agentic AI Training Diary JS Controller
   Autonomous Client-side Router, Search, Markdown Renderer & Stats Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const pageStartTime = Date.now();

    // --- Global Application State ---
    window.diaryState = {
        entries: [],          // Parsed from diary.json
        contentCache: {},     // Caches raw markdown content: { 'day1.md': '...' }
        wordsCache: {},       // Cache word counts: { 'day1.md': 450 }
        currentDay: null,     // Active day number when in reader view
        activeTheme: 'dark',  // Theme state: dark / light
        previousHash: '',     // Track hash navigation histories
        isInitialLoad: true   // Flag to handle initial loading screen
    };

    let activeScrollSpyHandler = null;

    // --- DOM Elements Cache ---
    const els = {
        themeToggle: document.getElementById('theme-toggle'),
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        sidebar: document.getElementById('app-sidebar'),
        sidebarOverlay: document.getElementById('sidebar-overlay'),
        sidebarDayList: document.getElementById('sidebar-day-list'),
        totalEntriesBadge: document.getElementById('total-entries-badge'),
        mainContentScroll: document.getElementById('main-content-scroll'),
        scrollProgressBar: document.getElementById('scroll-progress-bar'),
        scrollProgressContainer: document.getElementById('scroll-progress-container'),
        
        // Views
        viewHome: document.getElementById('view-home'),
        viewTimeline: document.getElementById('view-timeline'),
        viewReader: document.getElementById('view-reader'),
        viewSearch: document.getElementById('view-search'),
        
        // Navigation items
        navHome: document.getElementById('nav-item-home'),
        navTimeline: document.getElementById('nav-item-timeline'),
        
        // Dashboard
        progressPct: document.getElementById('progress-percentage'),
        progressRatio: document.getElementById('progress-days-ratio'),
        dashboardProgressFill: document.getElementById('dashboard-progress-fill'),
        statWords: document.getElementById('stat-words'),
        statReadTime: document.getElementById('stat-read-time'),
        statLongestEntry: document.getElementById('stat-longest-entry'),
        latestTitle: document.getElementById('latest-title'),
        latestDate: document.getElementById('latest-date'),
        latestSummary: document.getElementById('latest-summary'),
        latestLinkBtn: document.getElementById('latest-link-btn'),
        
        // Timeline
        timelineFlow: document.getElementById('timeline-flow'),
        
        // Search
        globalSearchInput: document.getElementById('global-search-input'),
        clearSearchBtn: document.getElementById('clear-search-btn'),
        searchQueryHeading: document.getElementById('search-query-heading'),
        searchResultsCount: document.getElementById('search-results-count'),
        searchResultsContainer: document.getElementById('search-results-container'),
        
        // Reader
        readerDayBadge: document.getElementById('reader-day-badge'),
        readerDate: document.getElementById('reader-date'),
        readerTitle: document.getElementById('reader-title'),
        readerReadTime: document.getElementById('reader-read-time'),
        readerWordCount: document.getElementById('reader-word-count'),
        readerTags: document.getElementById('reader-tags'),
        readerSkeletonLoader: document.getElementById('reader-skeleton-loader'),
        markdownContainer: document.getElementById('markdown-container'),
        btnPrevDay: document.getElementById('btn-prev-day'),
        btnNextDay: document.getElementById('btn-next-day'),
        prevDayTitle: document.getElementById('prev-day-title'),
        nextDayTitle: document.getElementById('next-day-title'),
        tocContainer: document.getElementById('toc-container'),
        globalPageLoader: document.getElementById('global-page-loader'),
        searchSuggestionsDropdown: document.getElementById('search-suggestions-dropdown'),
        
        // Engagement and Ratings
        engagementViews: document.getElementById('engagement-views'),
        ratingAvg: document.getElementById('rating-avg'),
        ratingCount: document.getElementById('rating-count'),
        interactiveStars: document.getElementById('interactive-stars'),
        ratingSuccessMsg: document.getElementById('rating-success-msg'),
        ratePromptText: document.getElementById('rate-prompt-text')
    };

    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // --- 1. Theme Configuration ---
    function initTheme() {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        
        els.themeToggle.addEventListener('click', () => {
            const nextTheme = window.diaryState.activeTheme === 'dark' ? 'light' : 'dark';
            setTheme(nextTheme);
        });
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        window.diaryState.activeTheme = theme;
        localStorage.setItem('theme', theme);
    }

    // --- 2. Mobile Drawer Navigation ---
    function initMobileMenu() {
        els.mobileMenuToggle.addEventListener('click', () => {
            els.sidebar.classList.toggle('open');
            els.sidebarOverlay.classList.toggle('active');
        });

        els.sidebarOverlay.addEventListener('click', closeMobileSidebar);
        
        // Close sidebar when clicking links on mobile
        els.sidebar.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('.sidebar-menu-item')) {
                closeMobileSidebar();
            }
        });
    }

    function closeMobileSidebar() {
        els.sidebar.classList.remove('open');
        els.sidebarOverlay.classList.remove('active');
    }

    // --- 2b. Desktop Sidebar Toggle ---
    function initDesktopSidebarToggle() {
        const toggleHandle = document.getElementById('sidebar-toggle-handle');
        const appLayout = document.querySelector('.app-layout');
        
        if (toggleHandle && appLayout) {
            toggleHandle.addEventListener('click', () => {
                const isCollapsed = appLayout.classList.toggle('sidebar-collapsed');
                toggleHandle.title = isCollapsed ? "Expand Sidebar" : "Collapse Sidebar";
            });
        }
    }

    // --- 3. Core Auto-Discovery & Front Matter Parser ---
    
    // Lazily fetch markdown content in background for full-text search without blocking page load
    async function loadSearchIndexInBackground() {
        for (const entry of window.diaryState.entries) {
            if (window.diaryState.contentCache[entry.file]) continue;
            try {
                const res = await fetch(`diary/${entry.file}?t=${Date.now()}`);
                if (res.ok) {
                    const text = await res.text();
                    const parsed = parseFrontMatter(text);
                    window.diaryState.contentCache[entry.file] = parsed.content;
                }
            } catch (err) {
                console.warn(`Background pre-fetch failed for ${entry.file}:`, err);
            }
            // Yield execution briefly to prevent visual frame drop
            await new Promise(resolve => setTimeout(resolve, 300));
        }
    }

    // Parse Jekyll/Obsidian-style YAML front matter or HTML comment front matter from markdown files
    function parseFrontMatter(text) {
        const result = {
            title: '',
            date: '',
            tags: [],
            summary: '',
            content: text || ''
        };
        
        if (!text) return result;
        
        // Match front matter block (either --- or <!--) with optional leading whitespace/newlines
        const fmRegex = /^\s*(?:---|<!--)\r?\n([\s\S]*?)\r?\n(?:---|-->)\r?\n/;
        const match = text.match(fmRegex);
        
        if (match) {
            const fmText = match[1];
            result.content = text.substring(match.index + match[0].length);
            
            const lines = fmText.split('\n');
            let currentKey = null;
            
            lines.forEach(line => {
                const trimmed = line.trim();
                if (!trimmed) return;
                
                // Support YAML list style for tags (e.g., "- python")
                if (trimmed.startsWith('-') && currentKey === 'tags') {
                    const val = trimmed.substring(1).trim().replace(/^["']|["']$/g, '');
                    if (val) result.tags.push(val);
                    return;
                }
                
                const colonIdx = line.indexOf(':');
                if (colonIdx !== -1) {
                    const key = line.substring(0, colonIdx).trim().toLowerCase();
                    const val = line.substring(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
                    currentKey = key;
                    
                    if (key === 'title') {
                        result.title = val;
                    } else if (key === 'date') {
                        result.date = val;
                    } else if (key === 'tags') {
                        if (val) {
                            const cleanVal = val.replace(/[\[\]]/g, '');
                            result.tags = cleanVal.split(',').map(t => t.trim().replace(/^["']|["']$/g, '')).filter(t => t.length > 0);
                        } else {
                            result.tags = [];
                        }
                    } else if (key === 'summary') {
                        result.summary = val;
                    }
                } else {
                    currentKey = null;
                }
            });
        }
        
        // Fallback for missing title: look for the first H1 in markdown
        if (!result.title) {
            const h1Match = result.content.match(/^#\s+(.*)$/m);
            if (h1Match) {
                result.title = h1Match[1].replace(/^Day\s+\d+:\s*/i, '').trim();
            }
        }
        
        // Fallback for missing summary: look for first paragraph, ignoring comments/lists/headings/quotes
        if (!result.summary) {
            const paragraphs = result.content.split('\n')
                .map(line => line.trim())
                .filter(line => line.length > 0 && !line.startsWith('#') && !line.startsWith('>') && !line.startsWith('-') && !line.startsWith('<') && !line.startsWith('-->'));
            if (paragraphs.length > 0) {
                result.summary = paragraphs[0].substring(0, 150) + (paragraphs[0].length > 150 ? '...' : '');
            }
        }
        
        return result;
    }

    async function initApp() {
        try {
            initTheme();
            initMobileMenu();
            initDesktopSidebarToggle();
            initScrollIndicator();
            initSearchEvents();
            
            // Load pre-compiled diary entries from directory.json
            const res = await fetch(`diary/directory.json?t=${Date.now()}`);
            if (!res.ok) throw new Error("Failed to load directory.json metadata index.");
            const data = await res.json();
            
            window.diaryState.entries = data.sort((a, b) => a.day - b.day);
            
            // Populate wordsCache immediately from pre-compiled directory data
            window.diaryState.entries.forEach(entry => {
                window.diaryState.wordsCache[entry.file] = entry.wordCount;
            });
            
            // Update total entry badges
            els.totalEntriesBadge.textContent = window.diaryState.entries.length;
            
            // Build navigation lists & timeline structures
            renderSidebarList();
            renderTimeline();
            
            // Update dashboard analytics immediately from pre-populated metadata
            calculateAnalytics();

            // Initialize views and ratings engagement card
            initEngagementCard();
            
            // Run Router once the configuration is loaded
            handleRouting();
            window.addEventListener('hashchange', handleRouting);
            
            // Hide the global page loader after ensuring at least 1.25 seconds of loading time
            const elapsed = Date.now() - pageStartTime;
            const remaining = Math.max(0, 1250 - elapsed);
            setTimeout(() => {
                if (els.globalPageLoader) {
                    els.globalPageLoader.classList.add('hidden');
                }
                window.diaryState.isInitialLoad = false;
                
                // Trigger lazy loading of search index in background after loading is complete
                loadSearchIndexInBackground();
            }, remaining);
            
        } catch (error) {
            console.error('App initialization error:', error);
            showGlobalError(error.message);
        }
    }

    // Dynamic sidebar day entries
    function renderSidebarList() {
        els.sidebarDayList.innerHTML = '';
        
        window.diaryState.entries.forEach(entry => {
            const item = document.createElement('div');
            item.className = 'sidebar-menu-item';
            item.id = `sidebar-day-${entry.day}`;
            item.dataset.day = entry.day;
            
            item.innerHTML = `
                <span class="sidebar-menu-day">Day ${entry.day}</span>
                <span class="sidebar-menu-title">${entry.title}</span>
            `;
            
            item.addEventListener('click', () => {
                window.location.hash = `#/day/${entry.day}`;
            });
            
            els.sidebarDayList.appendChild(item);
        });
    }

    // (Deprecated prefetchAndCalcStats - all metadata and word counts are loaded statically from directory.json)

    // Calculating dashboard stats
    function calculateAnalytics() {
        const totalDaysScheduled = 30; // Total duration of TRCS102 agentic training program
        const completedDays = window.diaryState.entries.length;
        const completionPct = Math.round((completedDays / totalDaysScheduled) * 100);
        
        // Progress Ratio
        els.progressPct.textContent = `${completionPct}%`;
        els.progressRatio.textContent = `${completedDays}/${totalDaysScheduled} Days`;
        els.dashboardProgressFill.style.transform = `scaleX(${completionPct / 100})`;
        
        // Total words written across all diary files
        let totalWords = 0;
        let longestWordCount = 0;
        let longestDay = null;
        
        window.diaryState.entries.forEach(entry => {
            const wc = window.diaryState.wordsCache[entry.file] || 0;
            totalWords += wc;
            if (wc > longestWordCount) {
                longestWordCount = wc;
                longestDay = entry;
            }
        });
        
        els.statWords.textContent = totalWords.toLocaleString();
        
        // Avg reading time (200 words per minute average reading speed)
        const readingTimeMin = Math.ceil(totalWords / 200);
        els.statReadTime.textContent = `${readingTimeMin}m`;
        
        // Longest entry tag
        if (longestDay) {
            els.statLongestEntry.textContent = `Day ${longestDay.day}`;
            els.statLongestEntry.title = `${longestDay.title} (${longestWordCount} words)`;
        } else {
            els.statLongestEntry.textContent = 'N/A';
        }
        
        // Latest Entry section
        const latestEntry = window.diaryState.entries[window.diaryState.entries.length - 1];
        if (latestEntry) {
            els.latestTitle.textContent = latestEntry.title;
            els.latestDate.textContent = formatDate(latestEntry.date);
            els.latestSummary.textContent = latestEntry.summary || "Click below to view today's logs.";
            els.latestLinkBtn.onclick = () => {
                window.location.hash = `#/day/${latestEntry.day}`;
            };
        }
    }

    // Custom human-readable date format (e.g. 2026-06-25 -> Jun 25, 2026 or 29/06/2026 -> Jun 29, 2026)
    function formatDate(dateString) {
        if (!dateString) return '-';
        let separator = '-';
        if (dateString.includes('/')) {
            separator = '/';
        }
        const parts = dateString.split(separator);
        if (parts.length !== 3) return dateString;
        
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let year, monthIdx, day;
        
        if (parts[0].length === 4) {
            // YYYY-MM-DD
            year = parts[0];
            monthIdx = parseInt(parts[1], 10) - 1;
            day = parseInt(parts[2], 10);
        } else {
            // DD-MM-YYYY or DD/MM/YYYY
            day = parseInt(parts[0], 10);
            monthIdx = parseInt(parts[1], 10) - 1;
            year = parts[2];
        }
        
        const month = months[monthIdx] || parts[1];
        return `${month} ${day}, ${year}`;
    }

    // Show app initialization error
    function showGlobalError(msg) {
        const errorHtml = `
            <div class="card" style="border-color: var(--color-accent); text-align: center; margin: 40px auto; max-width: 500px;">
                <i data-lucide="alert-octagon" style="width:48px; height:48px; color:var(--color-accent); margin:0 auto 16px;"></i>
                <h3 style="color:var(--text-primary);">Failed to load Training Diary</h3>
                <p style="color:var(--text-secondary); margin-bottom:16px;">${msg}</p>
                <button class="btn btn-primary" onclick="window.location.reload();">Retry Loading</button>
            </div>
        `;
        els.viewHome.innerHTML = errorHtml;
        if (window.lucide) window.lucide.createIcons();
    }

    // Helper to show full-screen global loader during view transitions
    function triggerTransitionLoader(callback) {
        if (els.globalPageLoader) {
            els.globalPageLoader.classList.remove('hidden');
            setTimeout(() => {
                if (callback) callback();
                els.globalPageLoader.classList.add('hidden');
            }, 1250);
        } else {
            if (callback) callback();
        }
    }

    // --- 4. Custom Client-side Router ---
    function handleRouting() {
        const hash = window.location.hash || '#home';
        window.diaryState.previousHash = hash;
        
        // Reset active sidebar highlights
        els.navHome.classList.remove('active');
        els.navTimeline.classList.remove('active');
        document.querySelectorAll('.sidebar-menu-item').forEach(el => el.classList.remove('active'));
        
        // Hide scroll progress indicator by default (re-enabled in reader view)
        els.scrollProgressContainer.style.display = 'none';

        // 1. Dashboard / Home Route
        if (hash === '#home' || hash === '#/home' || hash === '#view-home' || hash === '#/view-home' || hash === '') {
            if (window.diaryState.isInitialLoad) {
                showView(els.viewHome);
            } else {
                triggerTransitionLoader(() => {
                    showView(els.viewHome);
                });
            }
            els.navHome.classList.add('active');
            document.title = "TRCS102 – Agentic AI Training Dashboard";
            els.mainContentScroll.scrollTop = 0;
        } 
        
        // 2. Timeline Route
        else if (hash === '#timeline' || hash === '#/timeline' || hash === '#view-timeline' || hash === '#/view-timeline') {
            if (window.diaryState.isInitialLoad) {
                showView(els.viewTimeline);
                triggerTimelineAnimations();
            } else {
                triggerTransitionLoader(() => {
                    showView(els.viewTimeline);
                    triggerTimelineAnimations();
                });
            }
            els.navTimeline.classList.add('active');
            document.title = "TRCS102 – Training Timeline";
            els.mainContentScroll.scrollTop = 0;
        } 
        
        // 3. Search Route
        else if (hash.startsWith('#/search') || hash.startsWith('#search')) {
            const urlParams = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
            const query = urlParams.get('q') || '';
            
            const handleSearchAction = () => {
                showView(els.viewSearch);
                els.globalSearchInput.value = query;
                if (query) {
                    els.clearSearchBtn.classList.remove('hidden');
                    executeSearch(query);
                } else {
                    els.clearSearchBtn.classList.add('hidden');
                    els.searchResultsContainer.innerHTML = '<p class="section-desc">Type query in search bar above to look up technical concepts...</p>';
                }
            };

            if (window.diaryState.isInitialLoad) {
                handleSearchAction();
            } else {
                triggerTransitionLoader(handleSearchAction);
            }
        } 
        
        // 4. Reader/Day Route
        else if (hash.startsWith('#/day/') || hash.startsWith('#day/')) {
            const routePath = hash.substring(1); // e.g. "/day/1#overview-0" or "/day/1"
            const hashIndex = routePath.indexOf('#');
            
            const path = hashIndex !== -1 ? routePath.substring(0, hashIndex) : routePath;
            const anchor = hashIndex !== -1 ? routePath.substring(hashIndex + 1) : '';
            
            const dayNum = parseInt(path.split('/').pop(), 10);
            if (isNaN(dayNum)) {
                window.location.hash = '#home';
                return;
            }
            
            const handleReaderAction = () => {
                showView(els.viewReader);
                els.scrollProgressContainer.style.display = 'block';
                
                // Highlight current day in sidebar
                const sidebarItem = document.getElementById(`sidebar-day-${dayNum}`);
                if (sidebarItem) {
                    sidebarItem.classList.add('active');
                    // Scroll sidebar to active element smoothly if switching days
                    if (window.diaryState.currentDay !== dayNum) {
                        sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                }
                
                if (window.diaryState.currentDay === dayNum) {
                    // Already on the active day, scroll directly to target section
                    if (anchor) {
                        scrollToAnchor(anchor);
                    }
                } else {
                    loadAndRenderDay(dayNum, anchor);
                }
            };

            if (window.diaryState.isInitialLoad || window.diaryState.currentDay === dayNum) {
                handleReaderAction();
            } else {
                triggerTransitionLoader(handleReaderAction);
            }
        } 
        
        // Fallback
        else {
            window.location.hash = '#home';
        }
    }

    function showView(viewElement) {
        // Toggle hidden class
        els.viewHome.classList.add('hidden');
        els.viewTimeline.classList.add('hidden');
        els.viewReader.classList.add('hidden');
        els.viewSearch.classList.add('hidden');
        
        els.viewHome.classList.remove('active');
        els.viewTimeline.classList.remove('active');
        els.viewReader.classList.remove('active');
        els.viewSearch.classList.remove('active');
        
        viewElement.classList.remove('hidden');
        // Simple micro-task timeout for CSS transition animation triggers
        setTimeout(() => {
            viewElement.classList.add('active');
        }, 10);
    }

    // --- 5. Timeline Renderer ---
    function renderTimeline() {
        els.timelineFlow.innerHTML = '';
        
        window.diaryState.entries.forEach((entry, idx) => {
            const item = document.createElement('div');
            item.className = 'timeline-item';
            item.dataset.index = idx;
            
            // Build tags markup
            const tagsMarkup = entry.tags ? entry.tags.map(t => `<span class="tag">${t}</span>`).join('') : '';
            
            item.innerHTML = `
                <div class="timeline-dot"></div>
                <div class="timeline-card">
                    <div class="timeline-meta">
                        <span class="timeline-day">Day ${entry.day}</span>
                        <span class="timeline-date">${formatDate(entry.date)}</span>
                    </div>
                    <h3 class="timeline-title">${entry.title}</h3>
                    <p class="timeline-summary">${entry.summary || ''}</p>
                    <div class="timeline-tags">${tagsMarkup}</div>
                </div>
            `;
            
            // Click redirects to day reader view
            item.querySelector('.timeline-card').addEventListener('click', () => {
                window.location.hash = `#/day/${entry.day}`;
            });
            
            els.timelineFlow.appendChild(item);
        });
    }

    function triggerTimelineAnimations() {
        const items = els.timelineFlow.querySelectorAll('.timeline-item');
        
        // Instantly reveal nodes already visible
        const revealOnScroll = () => {
            const containerBottom = els.mainContentScroll.scrollTop + els.mainContentScroll.clientHeight;
            
            items.forEach(item => {
                const itemTop = item.offsetTop;
                if (itemTop < containerBottom - 40) {
                    item.classList.add('revealed');
                }
            });
        };
        
        // Hook to scroll listener of main container
        els.mainContentScroll.addEventListener('scroll', revealOnScroll);
        
        // Trigger initial check
        setTimeout(revealOnScroll, 100);
    }

    // --- 6. Markdown Fetching & Rendering Engine ---
    async function loadAndRenderDay(dayNum, anchor = '') {
        window.diaryState.currentDay = dayNum;
        
        const entry = window.diaryState.entries.find(e => e.day === dayNum);
        if (!entry) {
            showReaderError(`Day ${dayNum} metadata could not be found.`);
            return;
        }

        document.title = `Day ${dayNum}: ${entry.title} – Agentic AI Diary`;
        
        // Show Skeleton, Hide target container
        els.readerSkeletonLoader.style.display = 'flex';
        els.markdownContainer.classList.add('hidden');
        
        // Fill header tags
        els.readerDayBadge.textContent = `Day ${entry.day}`;
        els.readerDate.textContent = formatDate(entry.date);
        els.readerTitle.textContent = entry.title;
        
        // Render tags
        els.readerTags.innerHTML = '';
        if (entry.tags) {
            entry.tags.forEach(t => {
                const tagEl = document.createElement('span');
                tagEl.className = 'tag';
                tagEl.textContent = t;
                els.readerTags.appendChild(tagEl);
            });
        }
        
        // Pagination logic
        setupPagination(dayNum);
        
        try {
            let markdownText = '';
            
            // Read from cache or fetch
            if (window.diaryState.contentCache[entry.file]) {
                markdownText = window.diaryState.contentCache[entry.file];
            } else {
                const res = await fetch(`diary/${entry.file}?t=${Date.now()}`);
                if (!res.ok) throw new Error(`HTTP Error fetching: ${entry.file}`);
                const fullText = await res.text();
                const parsed = parseFrontMatter(fullText);
                markdownText = parsed.content;
                window.diaryState.contentCache[entry.file] = markdownText;
            }
            
            // Calculate word metrics
            const wc = markdownText.trim().split(/\s+/).filter(w => w.length > 0).length;
            window.diaryState.wordsCache[entry.file] = wc;
            
            els.readerWordCount.textContent = `${wc} words`;
            els.readerReadTime.textContent = `${Math.ceil(wc / 200)} min read`;
            
            // Pre-process markdown for GitHub-style Alerts support
            const processedMarkdown = preprocessAlerts(markdownText);
            
            // Render Markdown to HTML using Marked.js
            if (window.marked) {
                // Ensure marked parses checklists and tables properly (standard features in latest marked)
                const parsedHtml = window.marked.parse(processedMarkdown);
                els.markdownContainer.innerHTML = parsedHtml;
            } else {
                els.markdownContainer.innerHTML = `<p>Error: Markdown parser Marked.js library did not initialize.</p>`;
            }
            
            // Syntax Highlight decoration and Copy Buttons injection
            decorateCodeBlocks();
            
            // Generate Table of Contents (TOC)
            generateTOC();
            
            // Scroll to top of panel
            els.mainContentScroll.scrollTop = 0;
            
            // Reset reading scrollbar percentage
            updateScrollPercentage();
            
            // Fade-in Markdown contents, Hide skeleton loaders
            setTimeout(() => {
                els.readerSkeletonLoader.style.display = 'none';
                els.markdownContainer.classList.remove('hidden');
                if (window.lucide) window.lucide.createIcons();
                
                // Scroll to anchor section if present on initial load
                if (anchor) {
                    scrollToAnchor(anchor);
                }
            }, 50);
            
        } catch (error) {
            console.error('Reader rendering error:', error);
            showReaderError(`Failed to fetch markdown file: ${entry.file}`);
        }
    }

    function showReaderError(msg) {
        els.readerSkeletonLoader.style.display = 'none';
        els.markdownContainer.classList.remove('hidden');
        els.markdownContainer.innerHTML = `
            <div class="card" style="border-color: var(--color-accent); text-align: center; margin: 20px auto; padding: 24px;">
                <i data-lucide="alert-circle" style="width:36px; height:36px; color:var(--color-accent); margin:0 auto 12px;"></i>
                <h4>Unable to Read Logs</h4>
                <p style="color:var(--text-muted); font-size:0.9rem; margin-bottom:12px;">${msg}</p>
                <button class="btn btn-secondary" onclick="window.location.hash = '#home'">Back to Dashboard</button>
            </div>
        `;
        if (window.lucide) window.lucide.createIcons();
    }

    // Helper to translate GitHub syntax alert blocks into HTML containers
    function preprocessAlerts(text) {
        // Regex patterns for standard alerts: [!NOTE], [!WARNING], [!TIP], [!IMPORTANT], [!CAUTION]
        const alertPatterns = [
            { key: 'NOTE', class: 'alert-note' },
            { key: 'WARNING', class: 'alert-warning' },
            { key: 'TIP', class: 'alert-tip' },
            { key: 'IMPORTANT', class: 'alert-important' },
            { key: 'CAUTION', class: 'alert-caution' }
        ];
        
        let lines = text.split('\n');
        let inBlockquote = false;
        let currentAlertClass = '';
        
        for (let i = 0; i < lines.length; i++) {
            let trimLine = lines[i].trim();
            
            if (trimLine.startsWith('>')) {
                // Inside a blockquote block
                if (!inBlockquote) {
                    inBlockquote = true;
                    // Check if first line contains alert tags
                    const blockquoteContent = trimLine.substring(1).trim();
                    for (const pattern of alertPatterns) {
                        if (blockquoteContent.includes(`[!${pattern.key}]`)) {
                            currentAlertClass = pattern.class;
                            // Clean up the tag syntax
                            lines[i] = `> **${pattern.key}**: ` + blockquoteContent.replace(`[!${pattern.key}]`, '').trim();
                            break;
                        }
                    }
                } else if (currentAlertClass) {
                    // Subsequent blockquote lines, keep normal
                }
            } else {
                // Left the blockquote block
                if (inBlockquote) {
                    // If we had an alert class, we can decorate the lines retroactively by injecting a class marker,
                    // or let CSS handle simple styles since we prefixed the title. 
                    // To do it cleanly, let's wrap it in marked parsed post-processing or use classes.
                    // Actually, let's do a post-render check on DOM elements below! It is much cleaner and more reliable.
                    inBlockquote = false;
                    currentAlertClass = '';
                }
            }
        }
        
        return lines.join('\n');
    }

    // Post-rendering decoration of code blocks
    function decorateCodeBlocks() {
        const codeBlocks = els.markdownContainer.querySelectorAll('pre');
        
        codeBlocks.forEach(pre => {
            const code = pre.querySelector('code');
            if (!code) return;
            
            // Extract language identifier from class (e.g. language-python)
            let lang = 'text';
            const classes = code.className.split(' ');
            for (const cls of classes) {
                if (cls.startsWith('language-')) {
                    lang = cls.substring(9);
                    break;
                }
            }
            
            // Set HighlightJS triggering if not already done
            if (window.hljs) {
                window.hljs.highlightElement(code);
            }
            
            // Inject header with language label and "Copy Code" button
            const header = document.createElement('div');
            header.className = 'code-block-header';
            header.textContent = lang;
            
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-code-btn';
            copyBtn.innerHTML = `<i data-lucide="copy"></i><span>Copy</span>`;
            
            // Code text copying action
            copyBtn.addEventListener('click', () => {
                const codeText = code.textContent;
                navigator.clipboard.writeText(codeText).then(() => {
                    copyBtn.innerHTML = `<i data-lucide="check" style="color: var(--color-secondary);"></i><span style="color: var(--color-secondary);">Copied!</span>`;
                    setTimeout(() => {
                        copyBtn.innerHTML = `<i data-lucide="copy"></i><span>Copy</span>`;
                        if (window.lucide) window.lucide.createIcons();
                    }, 2000);
                    if (window.lucide) window.lucide.createIcons();
                }).catch(err => {
                    console.error('Clipboard copy failed: ', err);
                });
            });
            
            pre.appendChild(header);
            pre.appendChild(copyBtn);
        });

        // Post-process blockquotes to add Alert CSS classes (GitHub-style alerts decoration)
        const blockquotes = els.markdownContainer.querySelectorAll('blockquote');
        blockquotes.forEach(bq => {
            const firstPara = bq.querySelector('p, strong');
            if (!firstPara) return;
            
            const textContent = firstPara.textContent;
            
            if (textContent.startsWith('NOTE:') || textContent.startsWith('[!NOTE]')) {
                bq.classList.add('alert-note');
                firstPara.innerHTML = firstPara.innerHTML.replace('NOTE:', '<strong>NOTE</strong>');
            } else if (textContent.startsWith('WARNING:') || textContent.startsWith('[!WARNING]')) {
                bq.classList.add('alert-warning');
                firstPara.innerHTML = firstPara.innerHTML.replace('WARNING:', '<strong>WARNING</strong>');
            } else if (textContent.startsWith('TIP:') || textContent.startsWith('[!TIP]')) {
                bq.classList.add('alert-tip');
                firstPara.innerHTML = firstPara.innerHTML.replace('TIP:', '<strong>TIP</strong>');
            } else if (textContent.startsWith('IMPORTANT:') || textContent.startsWith('[!IMPORTANT]')) {
                bq.classList.add('alert-important');
                firstPara.innerHTML = firstPara.innerHTML.replace('IMPORTANT:', '<strong>IMPORTANT</strong>');
            } else if (textContent.startsWith('CAUTION:') || textContent.startsWith('[!CAUTION]')) {
                bq.classList.add('alert-caution');
                firstPara.innerHTML = firstPara.innerHTML.replace('CAUTION:', '<strong>CAUTION</strong>');
            }
        });
    }

    // --- 7. Table of Contents (TOC) Builder ---
    function generateTOC() {
        els.tocContainer.innerHTML = '';
        
        // Query headers from container
        const headings = els.markdownContainer.querySelectorAll('h2, h3');
        const readerLayout = els.viewReader ? els.viewReader.querySelector('.reader-layout') : null;
        
        // Limit: Require at least 3 headings to render the Table of Contents sidebar
        const TOC_LIMIT = 3;
        
        if (headings.length < TOC_LIMIT) {
            if (readerLayout) {
                readerLayout.classList.add('hide-toc');
            }
            // Clean up any active ScrollSpy handler since TOC sidebar is hidden
            if (activeScrollSpyHandler) {
                els.mainContentScroll.removeEventListener('scroll', activeScrollSpyHandler);
                activeScrollSpyHandler = null;
            }
            return;
        }
        
        // Restore layout state if threshold is reached
        if (readerLayout) {
            readerLayout.classList.remove('hide-toc');
        }
        
        headings.forEach((heading, index) => {
            // Slugify header text to build unique URL links
            const slug = heading.textContent.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-');
            
            const headingId = `${slug}-${index}`;
            heading.id = headingId;
            
            const link = document.createElement('a');
            link.href = `#${headingId}`;
            link.className = `toc-link ${heading.tagName === 'H3' ? 'indent-2' : ''}`;
            link.textContent = heading.textContent;
            
            // Add soft scroll click handler
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Route navigation without page reload via routing path + anchor
                window.location.hash = `#/day/${window.diaryState.currentDay}#${headingId}`;
            });
            
            els.tocContainer.appendChild(link);
        });
        
        // Configure ScrollSpy highlights
        initScrollSpy(headings);
    }

    // ScrollSpy highlighter logic
    function initScrollSpy(headings) {
        if (activeScrollSpyHandler) {
            els.mainContentScroll.removeEventListener('scroll', activeScrollSpyHandler);
        }
        
        activeScrollSpyHandler = () => {
            const containerRect = els.mainContentScroll.getBoundingClientRect();
            let activeHeadingId = null;
            
            // Find the last heading that is above the threshold (80px from top of container viewport)
            headings.forEach(heading => {
                const rect = heading.getBoundingClientRect();
                const relativeTop = rect.top - containerRect.top;
                if (relativeTop <= 80) {
                    activeHeadingId = heading.id;
                }
            });
            
            if (activeHeadingId) {
                els.tocContainer.querySelectorAll('.toc-link').forEach(link => {
                    // Extract anchor part from link href
                    const href = link.getAttribute('href');
                    if (href === `#${activeHeadingId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        };
        
        els.mainContentScroll.addEventListener('scroll', activeScrollSpyHandler);
        
        // Trigger once to highlight the initial active section on page load
        activeScrollSpyHandler();
    }

    // Dynamic offset scroll to active anchor helper
    function scrollToAnchor(anchorId) {
        const heading = document.getElementById(anchorId);
        if (heading) {
            const containerRect = els.mainContentScroll.getBoundingClientRect();
            const rect = heading.getBoundingClientRect();
            // Scroll offset leaves a 24px padding margin below any headers
            const targetScrollTop = els.mainContentScroll.scrollTop + (rect.top - containerRect.top) - 24;
            
            els.mainContentScroll.scrollTo({
                top: targetScrollTop,
                behavior: 'smooth'
            });
            
            // Explicitly force highlight update on active TOC link
            els.tocContainer.querySelectorAll('.toc-link').forEach(link => {
                if (link.getAttribute('href') === `#${anchorId}`) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
    }

    // Reader Pagination Toggles
    function setupPagination(dayNum) {
        const currentIndex = window.diaryState.entries.findIndex(e => e.day === dayNum);
        
        // Prev button config
        if (currentIndex > 0) {
            const prevEntry = window.diaryState.entries[currentIndex - 1];
            els.btnPrevDay.style.visibility = 'visible';
            els.prevDayTitle.textContent = `Day ${prevEntry.day}: ${prevEntry.title}`;
            els.btnPrevDay.onclick = () => {
                window.location.hash = `#/day/${prevEntry.day}`;
            };
        } else {
            els.btnPrevDay.style.visibility = 'hidden';
        }
        
        // Next button config
        if (currentIndex < window.diaryState.entries.length - 1) {
            const nextEntry = window.diaryState.entries[currentIndex + 1];
            els.btnNextDay.style.visibility = 'visible';
            els.nextDayTitle.textContent = `Day ${nextEntry.day}: ${nextEntry.title}`;
            els.btnNextDay.onclick = () => {
                window.location.hash = `#/day/${nextEntry.day}`;
            };
        } else {
            els.btnNextDay.style.visibility = 'hidden';
        }
    }

    // --- 8. Scroll Percentage Progress bar ---
    function initScrollIndicator() {
        els.mainContentScroll.addEventListener('scroll', updateScrollPercentage);
    }

    function updateScrollPercentage() {
        // Only update if reader view is active
        if (els.viewReader.classList.contains('hidden')) return;
        
        const container = els.mainContentScroll;
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        
        const scrollRange = scrollHeight - clientHeight;
        const scrollPercent = scrollRange > 0 ? (scrollTop / scrollRange) * 100 : 0;
        
        els.scrollProgressBar.style.width = `${scrollPercent}%`;
    }

    // --- 9. Real-time Live Search Engine ---
    function initSearchEvents() {
        // Trigger suggestions dropdown on input typing
        els.globalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query) {
                els.clearSearchBtn.classList.remove('hidden');
                showSearchSuggestions(query);
            } else {
                els.clearSearchBtn.classList.add('hidden');
                hideSearchSuggestions();
            }
        });
        
        // Handle keypress events for Enter (trigger search page) and Escape (close suggestions)
        els.globalSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = els.globalSearchInput.value.trim();
                hideSearchSuggestions();
                if (query) {
                    window.location.hash = `#/search?q=${encodeURIComponent(query)}`;
                } else {
                    window.location.hash = '#home';
                }
            } else if (e.key === 'Escape') {
                hideSearchSuggestions();
                els.globalSearchInput.blur();
            }
        });
        
        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-container')) {
                hideSearchSuggestions();
            }
        });
        
        // Clear search input button click
        els.clearSearchBtn.addEventListener('click', () => {
            els.globalSearchInput.value = '';
            els.clearSearchBtn.classList.add('hidden');
            hideSearchSuggestions();
            window.location.hash = '#home';
        });
    }

    function showSearchSuggestions(query) {
        if (!els.searchSuggestionsDropdown) return;
        const lowerQuery = query.toLowerCase();
        
        // Find matching entries (title, tags, or content)
        const matches = [];
        window.diaryState.entries.forEach(entry => {
            const content = window.diaryState.contentCache[entry.file] || '';
            const matchesTitle = entry.title.toLowerCase().includes(lowerQuery);
            const matchesTags = entry.tags && entry.tags.some(t => t.toLowerCase().includes(lowerQuery));
            const matchesContent = content.toLowerCase().includes(lowerQuery);
            
            if (matchesTitle || matchesTags || matchesContent) {
                let score = 0;
                if (matchesTitle) score += 50;
                if (matchesTags) score += 30;
                if (matchesContent) score += 10;
                matches.push({ entry, score });
            }
        });
        
        // Sort matches by relevance score
        matches.sort((a, b) => b.score - a.score);
        
        // Render all matching items as suggestions
        if (matches.length === 0) {
            els.searchSuggestionsDropdown.innerHTML = `
                <div style="padding: 12px 16px; font-size: 0.8rem; color: var(--text-muted); text-align: center;">
                    No recommendations found
                </div>
            `;
        } else {
            els.searchSuggestionsDropdown.innerHTML = '';
            matches.forEach(match => {
                const suggestionItem = document.createElement('div');
                suggestionItem.className = 'search-suggestion-item';
                suggestionItem.innerHTML = `
                    <span class="suggestion-day">Day ${match.entry.day}</span>
                    <span class="suggestion-title">${match.entry.title}</span>
                    <i data-lucide="chevron-right" style="width: 14px; height: 14px; color: var(--text-muted);"></i>
                `;
                
                suggestionItem.addEventListener('click', () => {
                    els.globalSearchInput.value = match.entry.title;
                    hideSearchSuggestions();
                    window.location.hash = `#/day/${match.entry.day}`;
                });
                
                els.searchSuggestionsDropdown.appendChild(suggestionItem);
            });
            
            if (window.lucide) window.lucide.createIcons();
        }
        
        els.searchSuggestionsDropdown.classList.remove('hidden');
    }

    function hideSearchSuggestions() {
        if (els.searchSuggestionsDropdown) {
            els.searchSuggestionsDropdown.classList.add('hidden');
        }
    }

    function executeSearch(query) {
        const lowerQuery = query.toLowerCase();
        els.searchQueryHeading.textContent = `Results for "${query}"`;
        
        const matches = [];
        
        window.diaryState.entries.forEach(entry => {
            let matchScore = 0;
            const content = window.diaryState.contentCache[entry.file] || '';
            
            // Check title
            if (entry.title.toLowerCase().includes(lowerQuery)) matchScore += 50;
            
            // Check tags
            if (entry.tags && entry.tags.some(t => t.toLowerCase().includes(lowerQuery))) matchScore += 30;
            
            // Check summary
            if (entry.summary && entry.summary.toLowerCase().includes(lowerQuery)) matchScore += 20;
            
            // Check full text body
            if (content.toLowerCase().includes(lowerQuery)) {
                matchScore += 10;
                // Add score based on occurrence counts
                const occurrences = (content.toLowerCase().match(new RegExp(escapeRegExp(lowerQuery), 'g')) || []).length;
                matchScore += occurrences * 2;
            }
            
            if (matchScore > 0) {
                // Find snippet context
                const snippet = findSearchSnippet(content, lowerQuery, entry.summary);
                matches.push({ entry, score: matchScore, snippet });
            }
        });
        
        // Sort results by match score
        matches.sort((a, b) => b.score - a.score);
        
        // Render matches
        els.searchResultsCount.textContent = `Found ${matches.length} matching entries`;
        els.searchResultsContainer.innerHTML = '';
        
        if (matches.length === 0) {
            els.searchResultsContainer.innerHTML = `
                <div class="card" style="text-align: center; padding: 32px; border-color: var(--border-color);">
                    <i data-lucide="search-code" style="width:40px; height:40px; color:var(--text-muted); margin:0 auto 12px;"></i>
                    <p style="color:var(--text-secondary);">No results matched your query. Try searching different keywords.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }
        
        matches.forEach(match => {
            const card = document.createElement('div');
            card.className = 'search-result-card';
            
            card.innerHTML = `
                <div class="search-result-header">
                    <span class="search-result-day">Day ${match.entry.day}</span>
                    <span class="search-result-date">${formatDate(match.entry.date)}</span>
                </div>
                <h3 class="search-result-title">${match.entry.title}</h3>
                <p class="search-result-snippet">${match.snippet}</p>
            `;
            
            card.addEventListener('click', () => {
                window.location.hash = `#/day/${match.entry.day}`;
            });
            
            els.searchResultsContainer.appendChild(card);
        });
    }

    // Find snippet matches inside markdown content text
    function findSearchSnippet(text, lowerQuery, fallbackSummary) {
        if (!text) return fallbackSummary || '';
        
        const lowerText = text.toLowerCase();
        const index = lowerText.indexOf(lowerQuery);
        
        if (index === -1) return fallbackSummary || '';
        
        // Gather roughly 60 chars before and 90 chars after
        const start = Math.max(0, index - 50);
        const end = Math.min(text.length, index + lowerQuery.length + 90);
        
        let snippet = text.substring(start, end);
        
        // Clean markdown characters from snippet preview for clean display
        snippet = snippet.replace(/[#*`_\[\]]/g, '');
        
        let prefix = start > 0 ? '...' : '';
        let suffix = end < text.length ? '...' : '';
        
        // Highlight query word in HTML
        const escapedQuery = escapeRegExp(lowerQuery);
        const highlightedSnippet = snippet.replace(new RegExp(`(${escapedQuery})`, 'gi'), '<mark style="background-color:rgba(139,92,246,0.3); color:var(--text-primary); border-radius:3px; padding:0 2px;">$1</mark>');
        
        return prefix + highlightedSnippet.trim() + suffix;
    }

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    // --- 7. Engagement & Ratings Configuration ---
    
    // Config keys for persistence
    const ENGAGEMENT_CONFIG = {
        appKey: "saksham3736_trcs102_diary",
        ratingKey: "diary_rating", // stores "sum-count" e.g., "413-86"
        viewsNamespace: "saksham3736_trcs102_views",
        viewsKey: "views",
        // Seed default fallback values
        seedViews: 248,
        seedSum: 413,
        seedCount: 86
    };

    function initEngagementCard() {
        if (!els.engagementViews) return;

        // 1. Increment and fetch Views
        incrementAndFetchViews();

        // 2. Fetch and render Ratings
        fetchAndRenderRatings();

        // 3. Set up interactive star elements
        setupInteractiveStars();
    }

    async function incrementAndFetchViews() {
        let views = ENGAGEMENT_CONFIG.seedViews;
        
        // Check if we already incremented in this session to avoid infinite incrementing on reload
        const sessionIncremented = sessionStorage.getItem('views_incremented');
        const apiEndpoint = `https://api.counterapi.dev/v1/${ENGAGEMENT_CONFIG.viewsNamespace}/${ENGAGEMENT_CONFIG.viewsKey}${sessionIncremented ? '' : '/up'}`;
        
        try {
            // Setup a controller to timeout after 2.5 seconds
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2500);

            const res = await fetch(apiEndpoint, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
                const data = await res.json();
                if (data && typeof data.count === 'number') {
                    views = data.count;
                    if (!sessionIncremented) {
                        sessionStorage.setItem('views_incremented', 'true');
                    }
                    localStorage.setItem('cached_views', views);
                }
            } else {
                throw new Error("API responded with error");
            }
        } catch (err) {
            console.warn("Failed to fetch views from API, falling back to cache/local:", err);
            // Local fallback
            const cachedViews = localStorage.getItem('cached_views');
            if (cachedViews) {
                views = parseInt(cachedViews, 10);
            }
            if (!sessionIncremented) {
                views += 1;
                sessionStorage.setItem('views_incremented', 'true');
                localStorage.setItem('cached_views', views);
            }
        }
        
        // Update UI
        els.engagementViews.textContent = views;
    }

    async function fetchAndRenderRatings(userRating = null) {
        let sum = ENGAGEMENT_CONFIG.seedSum;
        let count = ENGAGEMENT_CONFIG.seedCount;

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2500);
            
            const res = await fetch(`https://keyvalue.immanuel.co/api/KeyVal/GetValue/${ENGAGEMENT_CONFIG.appKey}/${ENGAGEMENT_CONFIG.ratingKey}`, {
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (res.ok) {
                const text = await res.json(); // keyvalue returns JSON string representing the value
                if (text && text.includes('-')) {
                    const parts = text.split('-');
                    const parsedSum = parseInt(parts[0], 10);
                    const parsedCount = parseInt(parts[1], 10);
                    if (!isNaN(parsedSum) && !isNaN(parsedCount)) {
                        sum = parsedSum;
                        count = parsedCount;
                        localStorage.setItem('cached_rating_sum', sum);
                        localStorage.setItem('cached_rating_count', count);
                    }
                }
            }
        } catch (err) {
            console.warn("Failed to fetch ratings from KeyValue API, using cache/local:", err);
            const cachedSum = localStorage.getItem('cached_rating_sum');
            const cachedCount = localStorage.getItem('cached_rating_count');
            if (cachedSum && cachedCount) {
                sum = parseInt(cachedSum, 10);
                count = parseInt(cachedCount, 10);
            }
        }

        const avg = count > 0 ? (sum / count).toFixed(1) : "0.0";
        els.ratingAvg.textContent = avg;
        els.ratingCount.textContent = count;

        // Render previous user rating state if it exists
        const savedRating = userRating || localStorage.getItem('user_diary_rating');
        if (savedRating) {
            const ratingVal = parseInt(savedRating, 10);
            els.interactiveStars.classList.add('disabled');
            els.ratePromptText.textContent = "Your Rating:";
            
            // Highlight stars up to rated value
            const stars = els.interactiveStars.querySelectorAll('.star-interactive');
            stars.forEach(star => {
                const val = parseInt(star.getAttribute('data-val'), 10);
                if (val <= ratingVal) {
                    star.classList.add('active');
                } else {
                    star.classList.remove('active');
                }
            });
        }
    }

    function setupInteractiveStars() {
        const stars = els.interactiveStars.querySelectorAll('.star-interactive');
        const savedRating = localStorage.getItem('user_diary_rating');

        if (savedRating) {
            // Already rated, highlight stars and return
            const ratingVal = parseInt(savedRating, 10);
            stars.forEach(star => {
                const val = parseInt(star.getAttribute('data-val'), 10);
                if (val <= ratingVal) {
                    star.classList.add('active');
                }
            });
            els.interactiveStars.classList.add('disabled');
            els.ratePromptText.textContent = "Your Rating:";
            return;
        }

        stars.forEach(star => {
            // Hover effect
            star.addEventListener('mouseenter', () => {
                const hoverVal = parseInt(star.getAttribute('data-val'), 10);
                stars.forEach(s => {
                    const val = parseInt(s.getAttribute('data-val'), 10);
                    if (val <= hoverVal) {
                        s.classList.add('hovered');
                    } else {
                        s.classList.remove('hovered');
                    }
                });
            });

            // Hover leave effect
            star.addEventListener('mouseleave', () => {
                stars.forEach(s => s.classList.remove('hovered'));
            });

            // Click submit effect
            star.addEventListener('click', async () => {
                const ratingVal = parseInt(star.getAttribute('data-val'), 10);
                if (isNaN(ratingVal)) return;

                // Disable ratings to prevent double submission
                els.interactiveStars.classList.add('disabled');
                
                // Show local success state immediately
                localStorage.setItem('user_diary_rating', ratingVal);
                els.ratingSuccessMsg.classList.remove('hidden');
                els.ratePromptText.textContent = "Your Rating:";
                
                // Fill clicked stars
                stars.forEach(s => {
                    const val = parseInt(s.getAttribute('data-val'), 10);
                    if (val <= ratingVal) {
                        s.classList.add('active');
                    }
                });

                // Update ratings globally
                await submitRating(ratingVal);
            });
        });
    }

    async function submitRating(userRating) {
        let sum = ENGAGEMENT_CONFIG.seedSum;
        let count = ENGAGEMENT_CONFIG.seedCount;

        // Read current cache first
        const cachedSum = localStorage.getItem('cached_rating_sum');
        const cachedCount = localStorage.getItem('cached_rating_count');
        if (cachedSum && cachedCount) {
            sum = parseInt(cachedSum, 10);
            count = parseInt(cachedCount, 10);
        }

        // Add the new rating
        sum += userRating;
        count += 1;

        // Save locally
        localStorage.setItem('cached_rating_sum', sum);
        localStorage.setItem('cached_rating_count', count);

        // Update UI immediately
        const avg = (sum / count).toFixed(1);
        els.ratingAvg.textContent = avg;
        els.ratingCount.textContent = count;

        // Try pushing to keyvalue server
        const payload = `${sum}-${count}`;
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            const res = await fetch(`https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/${ENGAGEMENT_CONFIG.appKey}/${ENGAGEMENT_CONFIG.ratingKey}/${payload}`, {
                method: 'POST',
                body: '',
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (res.ok) {
                console.log("Global rating updated successfully!");
            }
        } catch (err) {
            console.warn("Failed to push rating to server, will retry on reload:", err);
        }
    }

    // Launch Application
    initApp();
});
