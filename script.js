/* ==========================================================================
   TRCS102 Agentic AI Training Diary JS Controller
   Autonomous Client-side Router, Search, Markdown Renderer & Stats Engine
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // --- Global Application State ---
    window.diaryState = {
        entries: [],          // Parsed from diary.json
        contentCache: {},     // Caches raw markdown content: { 'day1.md': '...' }
        wordsCache: {},       // Cache word counts: { 'day1.md': 450 }
        currentDay: null,     // Active day number when in reader view
        activeTheme: 'dark',  // Theme state: dark / light
        previousHash: ''      // Track hash navigation histories
    };

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
        tocContainer: document.getElementById('toc-container')
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

    // --- 3. Core Auto-Discovery & Front Matter Parser ---
    
    // Probe the /diary folder sequentially for dayN.md files
    async function discoverEntries() {
        const discovered = [];
        let consecutiveMisses = 0;
        let day = 1;
        const maxConsecutiveMisses = 3; // Allow minor gaps (e.g. day 1, 2, 3, skipped 4, day 5)
        const maxDaysToProbe = 100;
        
        while (consecutiveMisses < maxConsecutiveMisses && day <= maxDaysToProbe) {
            const fileName = `day${day}.md`;
            try {
                // Use HEAD request to check if file exists quickly without downloading it
                const res = await fetch(`diary/${fileName}`, { method: 'HEAD' });
                if (res.ok) {
                    consecutiveMisses = 0;
                    discovered.push({
                        day: day,
                        file: fileName,
                        title: `Day ${day}`, // Fallback title
                        date: '',
                        tags: [],
                        summary: ''
                    });
                } else {
                    consecutiveMisses++;
                }
            } catch (err) {
                consecutiveMisses++;
            }
            day++;
        }
        return discovered;
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
            initScrollIndicator();
            initSearchEvents();
            
            // Automatically discover diary entries in /diary directory
            const data = await discoverEntries();
            window.diaryState.entries = data.sort((a, b) => a.day - b.day);
            
            // Update total entry badges
            els.totalEntriesBadge.textContent = window.diaryState.entries.length;
            
            // Build navigation lists & timeline structures
            renderSidebarList();
            renderTimeline();
            
            // Pre-fetch markdown contents in background for statistics calculations and instant full-text search
            await prefetchAndCalcStats();
            
            // Run Router once the configuration is loaded
            handleRouting();
            window.addEventListener('hashchange', handleRouting);
            
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

    // Prefetch markdown files in background to compute exact word counts and build index
    async function prefetchAndCalcStats() {
        const fetchPromises = window.diaryState.entries.map(async (entry) => {
            try {
                const res = await fetch(`diary/${entry.file}`);
                if (res.ok) {
                    const text = await res.text();
                    
                    // Parse YAML front matter and extract metadata
                    const parsed = parseFrontMatter(text);
                    window.diaryState.contentCache[entry.file] = parsed.content;
                    
                    // Override metadata on entry object
                    entry.title = parsed.title || entry.title;
                    entry.date = parsed.date || entry.date;
                    entry.tags = parsed.tags.length > 0 ? parsed.tags : entry.tags;
                    entry.summary = parsed.summary || entry.summary;
                    
                    // Simple word count regex
                    const wordCount = parsed.content.trim().split(/\s+/).filter(w => w.length > 0).length;
                    window.diaryState.wordsCache[entry.file] = wordCount;
                } else {
                    console.warn(`Could not prefetch: diary/${entry.file}`);
                    window.diaryState.wordsCache[entry.file] = 0;
                }
            } catch (err) {
                console.error(err);
                window.diaryState.wordsCache[entry.file] = 0;
            }
        });
        
        await Promise.all(fetchPromises);
        
        // Filter out entries that are empty (e.g. 0-byte placeholder files)
        window.diaryState.entries = window.diaryState.entries.filter(entry => {
            const wc = window.diaryState.wordsCache[entry.file] || 0;
            return wc > 0;
        });

        // Update total entry badge count dynamically
        els.totalEntriesBadge.textContent = window.diaryState.entries.length;
        
        // Re-render list & timeline with full metadata from files
        renderSidebarList();
        renderTimeline();
        
        // Update home dashboard analytics dynamically
        calculateAnalytics();
    }

    // Calculating dashboard stats
    function calculateAnalytics() {
        const totalDaysScheduled = 30; // Total duration of TRCS102 agentic training program
        const completedDays = window.diaryState.entries.length;
        const completionPct = Math.round((completedDays / totalDaysScheduled) * 100);
        
        // Progress Ratio
        els.progressPct.textContent = `${completionPct}%`;
        els.progressRatio.textContent = `${completedDays}/${totalDaysScheduled} Days`;
        els.dashboardProgressFill.style.width = `${completionPct}%`;
        
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

    // Custom human-readable date format (e.g. 2026-06-25 -> Jun 25, 2026)
    function formatDate(dateString) {
        if (!dateString) return '-';
        const parts = dateString.split('-');
        if (parts.length !== 3) return dateString;
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = parts[0];
        const month = months[parseInt(parts[1], 10) - 1];
        const day = parseInt(parts[2], 10);
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
        if (hash === '#home' || hash === '#/home' || hash === '') {
            showView(els.viewHome);
            els.navHome.classList.add('active');
            document.title = "TRCS102 – Agentic AI Training Dashboard";
            els.mainContentScroll.scrollTop = 0;
        } 
        
        // 2. Timeline Route
        else if (hash === '#timeline' || hash === '#/timeline') {
            showView(els.viewTimeline);
            els.navTimeline.classList.add('active');
            document.title = "TRCS102 – Training Timeline";
            els.mainContentScroll.scrollTop = 0;
            triggerTimelineAnimations();
        } 
        
        // 3. Search Route
        else if (hash.startsWith('#/search') || hash.startsWith('#search')) {
            showView(els.viewSearch);
            // Parse search query
            const urlParams = new URLSearchParams(hash.includes('?') ? hash.split('?')[1] : '');
            const query = urlParams.get('q') || '';
            els.globalSearchInput.value = query;
            if (query) {
                els.clearSearchBtn.classList.remove('hidden');
                executeSearch(query);
            } else {
                els.clearSearchBtn.classList.add('hidden');
                els.searchResultsContainer.innerHTML = '<p class="section-desc">Type query in search bar above to look up technical concepts...</p>';
            }
        } 
        
        // 4. Reader/Day Route
        else if (hash.startsWith('#/day/') || hash.startsWith('#day/')) {
            const dayNum = parseInt(hash.split('/').pop(), 10);
            if (isNaN(dayNum)) {
                window.location.hash = '#home';
                return;
            }
            
            showView(els.viewReader);
            els.scrollProgressContainer.style.display = 'block';
            
            // Highlight current day in sidebar
            const sidebarItem = document.getElementById(`sidebar-day-${dayNum}`);
            if (sidebarItem) {
                sidebarItem.classList.add('active');
                // Scroll sidebar to active element smoothly
                sidebarItem.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
            
            loadAndRenderDay(dayNum);
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
    async function loadAndRenderDay(dayNum) {
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
                const res = await fetch(`diary/${entry.file}`);
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
            }, 150);
            
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
        
        if (headings.length === 0) {
            els.tocContainer.innerHTML = '<span class="toc-link" style="font-style:italic; color:var(--text-muted);">No sections found.</span>';
            return;
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
                heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
                // Highlight clicked active state manually
                els.tocContainer.querySelectorAll('.toc-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
            
            els.tocContainer.appendChild(link);
        });
        
        // Configure ScrollSpy highlights
        initScrollSpy(headings);
    }

    // ScrollSpy highlighter logic
    function initScrollSpy(headings) {
        const spyScrollHandler = () => {
            const scrollPos = els.mainContentScroll.scrollTop + 80;
            let activeHeadingId = null;
            
            headings.forEach(heading => {
                const top = heading.offsetTop;
                if (scrollPos >= top) {
                    activeHeadingId = heading.id;
                }
            });
            
            if (activeHeadingId) {
                els.tocContainer.querySelectorAll('.toc-link').forEach(link => {
                    if (link.getAttribute('href') === `#${activeHeadingId}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        };
        
        els.mainContentScroll.removeEventListener('scroll', spyScrollHandler);
        els.mainContentScroll.addEventListener('scroll', spyScrollHandler);
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
        // Trigger search on input typing
        els.globalSearchInput.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query) {
                els.clearSearchBtn.classList.remove('hidden');
                // Debounce search update to avoid constant hash updates
                updateSearchHash(query);
            } else {
                els.clearSearchBtn.classList.add('hidden');
                // Return to dashboard when search cleared
                window.location.hash = '#home';
            }
        });
        
        // Clear search input button click
        els.clearSearchBtn.addEventListener('click', () => {
            els.globalSearchInput.value = '';
            els.clearSearchBtn.classList.add('hidden');
            window.location.hash = '#home';
        });
    }

    // Debouncer helper
    let searchDebounceTimeout;
    function updateSearchHash(query) {
        clearTimeout(searchDebounceTimeout);
        searchDebounceTimeout = setTimeout(() => {
            window.location.hash = `#/search?q=${encodeURIComponent(query)}`;
        }, 300);
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

    // Launch Application
    initApp();
});
