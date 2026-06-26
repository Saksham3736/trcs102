# 📘 TRCS102 – Agentic AI Training Diary

A premium-quality, glassmorphic documentation website and learning diary built with **HTML5, CSS3, and Vanilla JavaScript**. Completely client-side and fully optimized for hosting on **GitHub Pages**.

---

## 📂 Project Structure

```
TRCS102-Diary/
├── index.html          # Main HTML structure & layout
├── style.css           # Modern design tokens, glassmorphism, responsive grid
├── script.js           # Client-side router, search indexer, stats calculator, auto-discovery
├── README.md           # Documentation (this file)
├── assets/             # Generated media files
│   ├── logo.png        # Brand logo icon
│   ├── cover.jpg       # Landing page hero cover banner
│   └── background.jpg  # Subtle dark ambient background texture
└── diary/              # Markdown diary logs
    ├── day1.md         # Day 1 learning notes
    ├── day2.md         # Day 2 learning notes
    └── day3.md         # Day 3 learning notes
```

---

## 🚀 How to Add New Diary Entries

The website is engineered to be completely **automated**. You can add new days without touching any index config, HTML, or CSS files.

### Create the Markdown File
Simply create a new Markdown file inside the `/diary` directory.
- Filename pattern: `dayN.md` (e.g., `day4.md`, `day5.md`).
- At the top of the file, include **YAML Front Matter** containing the entry's metadata:

Example content structure (`diary/day4.md`):
```markdown
---
title: Custom LLM Tools and APIs
date: 2026-06-30
tags: Tools, APIs, Python
summary: Building custom functional tools for LLM agent selection and parsing external API responses.
---
# Day 4: Custom LLM Tools and APIs

Today we focused on integrating external APIs as executable tools for our agents...

## ⚙️ Core Setup
- [x] Register tool definitions
- [ ] Connect agent executor loop

```python
def web_search(query: str) -> str:
    # Custom API integration code
    return f"Results for: {query}"
```
```

### How it works
The application automatically probes the `/diary` folder sequentially for files starting from `day1.md`.
- It will parse your YAML front matter at the top to display details (title, date, tags, summary) in the timeline, dashboard, and search engine.
- If you don't include front matter, it will automatically fall back to extract the first `#` heading as the title, and the first paragraph as the summary.
- The sidebar navigation, dashboard statistics (word count, reading time, completion ratio), search indexing, and timeline will **automatically update** on page load!

---

## 🎨 Writing Premium Markdown Content

The custom markdown engine supports GitHub Flavored Markdown (GFM). Use these styles to make your notes look premium:

### 1. GitHub-style Alert Callouts
Use markdown blockquotes starting with standard tags to render colored glassmorphic callouts:

```markdown
> [!NOTE]
> General background context, helpful insights, or minor explanations.

> [!WARNING]
> Critical warnings, programming gotchas, or safety considerations.

> [!TIP]
> Best practices, performance optimizations, or helpful tips.
```

### 2. Task Checklists
Track your day's tasks using standard markdown brackets:
```markdown
- [x] Completed item
- [ ] In-progress/Uncompleted item
```

### 3. Syntax Highlighted Code
Specify the language identifier (e.g., `python`, `bash`, `js`, `html`) next to triple backticks:
```python
# Code will automatically get syntax highlighting and a "Copy Code" button.
print("Hello Agentic World")
```

---

## 💻 Local Preview & Testing

To preview the website locally and bypass CORS restrictions (required for local `fetch()` requests), run a local static server from the workspace root directory:

**Using Python:**
```bash
python -m http.server 8000
```
Then open: `http://localhost:8000`

**Using Node (npx):**
```bash
npx serve .
```
Then open: `http://localhost:3000`

---

## 🌐 Publishing to GitHub Pages

1. Create a repository on GitHub (e.g., `TRCS102-Diary`).
2. Push this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Agentic AI diary"
   git remote add origin https://github.com/your-username/TRCS102-Diary.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub, navigate to **Settings** ➔ **Pages** tab.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Set branch to `main` (or `/root`) and click **Save**.
6. Your diary will be live at `https://your-username.github.io/TRCS102-Diary/` in a few minutes!
