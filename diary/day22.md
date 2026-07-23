<!--
title: DelegatAI Multi-Page Navigation & Agentic Task Save with GenAI Function Tools
date: 2026-07-23
tags: Streamlit, Multi-Page Navigation, Agentic AI, GenAI Function Tools, MongoDB, DelegatAI, SRP, Software Architecture, AI Agent
summary: Continued building the DelegatAI project by implementing multi-page Streamlit navigation using st.navigation, setting up environment variables for API keys, separating AI agent logic into a dedicated module, and integrating GenAI function tool calling with MongoDB for agentic task saving.
-->

# 🚀 Day 22: DelegatAI Multi-Page Navigation & Agentic Task Save with GenAI Function Tools

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 22  
**Date:** 23 July 2026

---

# 📖 Daily Training Record – Day 22

## 📌 Overview

Today's training session was a direct continuation of the **DelegatAI** (Task Delegation Agent) project initiated on Day 21. Having completed the foundational project setup, configuration module, and database helper layer in the previous session, today we moved into building the actual application interface and integrating the AI agent with function calling capabilities.

The session was divided into two major segments. In **Session 4**, the focus was on constructing a multi-page Streamlit user interface. We learned how to create separate Python files for each page, import them into the main `app.py`, and use Streamlit's `st.navigation` function to build a navigable multi-page application. The instructor also emphasized the **Single Responsibility Principle (SRP)** as the guiding design philosophy behind separating concerns across files. In **Session 5**, we reviewed the agentic chat implementation from Session 16 (`session16C.py`), split the AI agent logic from the Streamlit UI, moved the database save operations and GenAI function tool declarations into a dedicated `aiagent.py` file, and placed the agentic chat UI into `pages/save_tasks.py`.

These two sessions transformed the project from a static setup into a functional, navigable application with an AI-powered task saving interface backed by MongoDB.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Build multi-page Streamlit applications using `st.navigation`.
- Create separate page functions in individual Python files.
- Import page modules into the main `app.py` entry point.
- Configure Streamlit's navigation system for page routing.
- Understand and apply the Single Responsibility Principle (SRP).
- Set up the `.env` file with all required API keys.
- Review and adapt existing agentic chat code (`session16C.py`).
- Split AI agent logic from the Streamlit UI layer.
- Move function tool declarations and database save logic into `aiagent.py`.
- Build the agentic task-saving UI inside `pages/save_tasks.py`.
- Integrate GenAI function calling with MongoDB for agentic task storage.

---

# 📚 Key Learnings

## 1️⃣ Session 4 – Agentic Save for Task: Multi-Page Streamlit UI

The first major segment of today's session focused on

building a professional, multi-page Streamlit application.

---

## What is a Multi-Page Streamlit App?

A multi-page Streamlit app is an application

where each screen or feature is implemented in a separate Python file

and connected through a central navigation system.

```
Single Page App:

app.py
↓
All Features
↓
One Long File

─────────────────

Multi-Page App:

app.py
↓
Navigation
↓
Page 1 → pages/save_tasks.py
Page 2 → pages/execute_calls.py
Page 3 → pages/dashboard.py
```

---

## Why Use Multiple Pages?

A single-file application becomes unmanageable

as features are added.

Splitting the application into pages provides:

- **Separation of Concerns:** Each page handles one feature.
- **Readability:** Smaller files are easier to understand.
- **Maintainability:** Changes to one feature do not affect others.
- **Collaboration:** Multiple developers can work on different pages.

---

## Step 1 — Create Separate Page Functions

The instructor explained that each page

should be defined as a function inside its own Python file

within the `pages/` directory.

---

### Example: `pages/save_tasks.py`

```python
import streamlit as st

def save_tasks_page():
    st.title("Save Tasks")
    st.write("This page handles agentic task saving.")
```

---

### Example: `pages/execute_calls.py`

```python
import streamlit as st

def execute_calls_page():
    st.title("Execute Calls")
    st.write("This page handles phone call execution.")
```

---

### Example: `pages/dashboard.py`

```python
import streamlit as st

def dashboard_page():
    st.title("Dashboard")
    st.write("This page displays analytics and charts.")
```

---

## Architecture of Page Files

```
pages/
│
├── save_tasks.py
│   └── save_tasks_page()
│
├── execute_calls.py
│   └── execute_calls_page()
│
└── dashboard.py
    └── dashboard_page()
```

Each file contains a single function

that renders the content for that page.

---

## Step 2 — Import Pages into `app.py`

After creating the individual page files,

the instructor imported them into the main application entry point.

```python
from pages.save_tasks import save_tasks_page
from pages.execute_calls import execute_calls_page
from pages.dashboard import dashboard_page
```

```
app.py
↓
Import save_tasks_page
↓
Import execute_calls_page
↓
Import dashboard_page
```

---

## Step 3 — Setup Navigation Using `st.navigation`

The instructor then introduced Streamlit's `st.navigation` function

to create a navigation-based multi-page application.

```python
import streamlit as st

from pages.save_tasks import save_tasks_page
from pages.execute_calls import execute_calls_page
from pages.dashboard import dashboard_page

pages = {
    "Save Tasks": save_tasks_page,
    "Execute Calls": execute_calls_page,
    "Dashboard": dashboard_page,
}

st.navigation(pages)
```

---

## How `st.navigation` Works

```
User Opens App
↓
st.navigation()
↓
Render Sidebar Menu
↓
User Selects Page
↓
Call Corresponding Function
↓
Page Content Displayed
```

The `st.navigation` function accepts a dictionary

where keys are page names (displayed in the sidebar)

and values are the corresponding page functions.

When the user clicks a page name,

Streamlit calls the associated function

and renders that page's content.

---

## Complete `app.py` Architecture

```
app.py
│
├── Import page functions
│
├── Define pages dictionary
│   ├── "Save Tasks" → save_tasks_page
│   ├── "Execute Calls" → execute_calls_page
│   └── "Dashboard" → dashboard_page
│
└── st.navigation(pages)
    ↓
    Sidebar Navigation
    ↓
    Dynamic Page Rendering
```

---

## Step 4 — Setup Environment File with API Keys

Before connecting the AI agent,

the instructor configured the `.env` file

with all the required API credentials.

```text
GOOGLE_API_KEY=your_google_api_key_here
ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
MONGODB_USERNAME=your_mongodb_username
MONGODB_PASSWORD=your_mongodb_password
```

```
.env File
↓
GOOGLE_API_KEY
↓
ELEVENLABS_API_KEY
↓
MONGODB Credentials
↓
Loaded by config.py
```

---

## Single Responsibility Principle (SRP)

The instructor emphasized the **Single Responsibility Principle** throughout this session.

---

### What is SRP?

The Single Responsibility Principle states that

every module, class, or function should have

**one and only one reason to change**.

```
SRP Applied:

config.py → Only manages configuration
database.py → Only manages database operations
aiagent.py → Only manages AI agent logic
app.py → Only manages navigation
pages/save_tasks.py → Only manages task saving UI
```

---

### Why SRP Matters

```
Without SRP:

app.py
↓
Configuration + Database + AI + UI
↓
One Change Breaks Everything

──────────────────────

With SRP:

config.py → Change API Key
database.py → Change Database
aiagent.py → Change AI Model
app.py → Change Navigation
↓
Changes Are Isolated
```

By following SRP,

each file can be modified independently

without risking unintended side effects in other parts of the application.

---

> [!NOTE]
> Streamlit's `st.navigation` function provides built-in sidebar navigation for multi-page applications. Each page is a separate Python function imported into the main `app.py`, following the Single Responsibility Principle. This architecture makes the application modular, scalable, and easy to maintain.

---

## 2️⃣ Session 5 – Agentic Save: Setup Agentic Chat & GenAI Function Tools

The second major segment focused on

integrating the AI agent with GenAI function calling

and connecting it to the database for agentic task saving.

---

## Starting Point: Review `session16C.py`

The instructor asked us to review `session16C.py`,

the agentic chat implementation developed during Session 16.

This file contained:

- Streamlit chat UI.
- Google GenAI SDK initialization.
- Function tool declarations.
- Database save operations.
- Agentic conversation loop.

```
session16C.py (Before):

Streamlit UI
+
GenAI Client
+
Function Tools
+
Database Operations
+
Conversation Logic
↓
All in One File
```

---

## Problem with the Monolithic Approach

Having everything in one file violates SRP

and makes the code difficult to maintain.

```
session16C.py
↓
UI Code + AI Logic + DB Operations
↓
Hard to Debug
↓
Hard to Extend
↓
Hard to Test
```

---

## Solution: Split AI Agent from Streamlit UI

The instructor demonstrated how to separate

the AI agent logic from the Streamlit interface.

```
Before (session16C.py):

One File
↓
Everything Mixed

──────────────────

After (DelegatAI):

aiagent.py → AI Logic + Function Tools + DB Save
pages/save_tasks.py → Streamlit Chat UI
```

---

## Step 1 — Create `aiagent.py`

The `aiagent.py` file was created to contain

all AI agent-related logic.

---

### What Goes into `aiagent.py`?

The instructor moved the following components into this file:

1. **Function Tool Declarations** — GenAI function definitions that the LLM can call.
2. **Database Save Logic** — Code that saves extracted task data to MongoDB.
3. **Agentic Conversation Handler** — The core loop that processes LLM responses and executes function calls.

```
aiagent.py
│
├── Function Tool Declarations
│   └── GenAI Tool Definitions
│
├── Database Save Functions
│   └── save_task_to_db()
│
└── Agentic Chat Handler
    └── process_agent_response()
```

---

### Architecture of `aiagent.py`

```
User Input (from UI)
↓
aiagent.py
↓
Send to LLM (GenAI)
↓
LLM Response
├── Text Response → Return to UI
│
└── Function Call
    ↓
    Execute Tool
    ↓
    Save to MongoDB
    ↓
    Return Result to LLM
    ↓
    Final Response → Return to UI
```

---

## Step 2 — Setup `pages/save_tasks.py` with Agentic UI

The Streamlit chat interface was moved into

the `pages/save_tasks.py` file.

---

### What Goes into `pages/save_tasks.py`?

This file handles:

1. **Chat UI Rendering** — Displaying the chat interface using `st.chat_message`.
2. **User Input Handling** — Capturing user messages via `st.chat_input`.
3. **Calling the AI Agent** — Importing and invoking functions from `aiagent.py`.
4. **Displaying Results** — Showing the agent's responses in the chat.

```
pages/save_tasks.py
│
├── Streamlit Chat UI
│   ├── st.chat_message()
│   └── st.chat_input()
│
├── Import from aiagent.py
│   └── process_agent_response()
│
└── Display Agent Results
```

---

### How the Split Works Together

```
User Types Message
↓
pages/save_tasks.py
↓
Captures Input
↓
Calls aiagent.py
↓
aiagent.py Sends to LLM
↓
LLM Returns Response
├── Text → Display in Chat
│
└── Function Call
    ↓
    aiagent.py Executes Tool
    ↓
    Saves Task to MongoDB
    ↓
    Returns Confirmation
    ↓
    Display in Chat
```

---

## GenAI Function Tools Recap

Function tools allow the LLM

to call predefined Python functions

based on the user's natural language input.

---

### How Function Calling Works

```
User: "Save a task for Amandeep to review the report by Friday"
↓
LLM Analyzes Input
↓
LLM Selects Tool: save_task
↓
LLM Extracts Parameters:
├── assignee: "Amandeep"
├── task: "Review the report"
└── deadline: "Friday"
↓
Python Executes save_task()
↓
Task Saved to MongoDB
↓
LLM Generates Confirmation
↓
"Task has been saved for Amandeep."
```

---

### Tool Declaration Structure

```
Function Tool
│
├── Name → "save_task"
│
├── Description → "Saves a task to the database"
│
└── Parameters
    ├── assignee (string)
    ├── task (string)
    └── deadline (string)
```

The LLM reads these declarations

and decides when to call each tool

based on the user's intent.

---

## Complete Application Architecture After Day 22

```
DelegatAI Application
│
├── .env → API Keys & Credentials
│
├── config.py → Load Environment & Initialize Clients
│
├── database.py → DBHelper Class (MongoDB CRUD)
│
├── aiagent.py → AI Agent Logic + Function Tools + DB Save
│
├── app.py → Main Entry Point + st.navigation
│
└── pages/
    ├── save_tasks.py → Agentic Chat UI
    ├── execute_calls.py → Phone Call Execution
    └── dashboard.py → Analytics Dashboard
```

---

## Data Flow Through the Application

```
User Opens App
↓
app.py → st.navigation
↓
User Selects "Save Tasks"
↓
pages/save_tasks.py
↓
User Types Task Description
↓
aiagent.py
↓
GenAI LLM (Function Calling)
↓
Tool Execution
↓
database.py → DBHelper
↓
MongoDB Atlas
↓
Confirmation Displayed
```

---

> [!IMPORTANT]
> Splitting the AI agent logic (`aiagent.py`) from the Streamlit UI (`pages/save_tasks.py`) follows the Single Responsibility Principle. The agent module handles all LLM interactions, function tool declarations, and database operations, while the page module only manages the user interface. This separation allows the AI agent to be tested, modified, or replaced independently of the UI layer.

---

# Day 22 Summary

Today's training session advanced the **DelegatAI** project from a configured workspace into a functional multi-page application with AI-powered task saving capabilities. In Session 4, we built a multi-page Streamlit application by creating separate page functions, importing them into `app.py`, and wiring them together using `st.navigation`. The Single Responsibility Principle was emphasized as the core architectural guideline. In Session 5, we reviewed the monolithic agentic chat from Session 16, identified the need to split concerns, moved the AI agent logic and function tool declarations into `aiagent.py`, and placed the chat UI into `pages/save_tasks.py`. This refactoring transformed the application into a clean, modular system where the AI agent, database operations, and user interface are all independently maintainable.

---

# 📝 Personal Reflection

Today's session really drove home the importance of software architecture in AI projects. It was easy to keep everything in one file when building prototypes, but seeing how quickly a monolithic file becomes unmanageable made the case for modular design very clear. The process of taking `session16C.py` and splitting it into `aiagent.py` and `pages/save_tasks.py` was an excellent exercise in refactoring.

Learning about `st.navigation` was exciting because it immediately made the application feel professional. Instead of a single scrolling page, we now have a sidebar with distinct sections, which is how real-world applications are structured. I also appreciated the emphasis on SRP — understanding that each file should have "one reason to change" is a principle I will carry into all future projects.

---

# 📌 Key Takeaways

- Built a multi-page Streamlit application using `st.navigation`.
- Created separate page functions in individual Python files within the `pages/` directory.
- Imported page modules into `app.py` for centralized navigation routing.
- Applied the Single Responsibility Principle across all project modules.
- Configured the `.env` file with all required API keys for the project.
- Reviewed and adapted the agentic chat code from Session 16 (`session16C.py`).
- Split the AI agent logic from the Streamlit UI into separate files.
- Moved function tool declarations and database save operations into `aiagent.py`.
- Placed the agentic chat interface into `pages/save_tasks.py`.
- Understood the complete data flow from user input through LLM to MongoDB storage.

---

# 📖 Revision Notes

✔ Multi-Page Streamlit Application

✔ `st.navigation` Function

✔ Page Functions in `pages/` Directory

✔ Import Page Modules into `app.py`

✔ Single Responsibility Principle (SRP)

✔ Environment File Configuration

✔ Review of `session16C.py`

✔ Splitting AI Agent from UI

✔ `aiagent.py` — Function Tools + DB Save

✔ `pages/save_tasks.py` — Agentic Chat UI

✔ GenAI Function Tool Declarations

✔ Agentic Conversation Loop

✔ Database Integration with Function Calling

✔ Modular Application Architecture

---

# ❓ Interview Questions

### Q1. What is the Single Responsibility Principle (SRP) and how does it apply to software architecture?

**Answer:**

The Single Responsibility Principle states that every module, class, or function should have one and only one reason to change. In software architecture, this means separating configuration, database logic, AI agent code, and UI code into distinct files. Each file can then be modified, tested, and maintained independently without affecting other components.

---

### Q2. How does `st.navigation` work in Streamlit?

**Answer:**

`st.navigation` accepts a dictionary where keys are page names and values are page functions. It renders a sidebar navigation menu, and when a user selects a page, Streamlit calls the corresponding function to render that page's content dynamically.

---

### Q3. Why should the AI agent logic be separated from the Streamlit UI?

**Answer:**

Separating AI agent logic from the UI follows SRP. The agent module (`aiagent.py`) handles LLM interactions, function tool declarations, and database operations, while the UI module (`pages/save_tasks.py`) handles only rendering and user input. This allows either component to be modified or replaced without affecting the other.

---

### Q4. What is function calling (tool use) in the context of LLMs?

**Answer:**

Function calling allows an LLM to select and invoke predefined Python functions based on the user's natural language input. The LLM analyzes the user's request, matches it to a declared tool, extracts the required parameters, and returns a structured function call that the application then executes programmatically.

---

### Q5. How do you create a multi-page Streamlit application?

**Answer:**

1. Create separate Python files in a `pages/` directory, each containing a page function.
2. Import these functions into the main `app.py`.
3. Define a dictionary mapping page names to their functions.
4. Pass this dictionary to `st.navigation()` to enable sidebar-based page routing.

---

### Q6. What components should be placed in `aiagent.py`?

**Answer:**

The `aiagent.py` file should contain:
- GenAI function tool declarations that define what tools the LLM can call.
- Database save functions that persist extracted task data to MongoDB.
- The agentic conversation handler that processes LLM responses and executes function calls.

---

### Q7. What is the benefit of reviewing and refactoring existing code (like `session16C.py`)?

**Answer:**

Reviewing existing code helps identify design problems such as mixed responsibilities, code duplication, and tight coupling. Refactoring the code into separate modules improves readability, testability, and maintainability. It also reinforces software engineering best practices like SRP and modular architecture.

---

### Q8. How does the data flow from user input to MongoDB in the DelegatAI application?

**Answer:**

1. The user types a task description in `pages/save_tasks.py`.
2. The input is sent to `aiagent.py`, which forwards it to the GenAI LLM.
3. The LLM analyzes the input and returns a function call with extracted parameters.
4. `aiagent.py` executes the function, which calls `database.py`'s `DBHelper`.
5. `DBHelper` saves the task to MongoDB Atlas.
6. A confirmation is returned through the chain and displayed in the chat UI.

---

### Q9. Why is it important to configure all API keys in the `.env` file before building the agent?

**Answer:**

API keys are required for services like Google GenAI, ElevenLabs, and MongoDB Atlas. Configuring them in the `.env` file before building the agent ensures that `config.py` can load and initialize all clients correctly. Without valid credentials, the agent cannot connect to the LLM or the database.

---

### Q10. What is the difference between a monolithic application and a modular application?

**Answer:**

A monolithic application keeps all code in a single file, making it hard to maintain, debug, and scale. A modular application separates code into independent files, each with a specific responsibility. Changes to one module do not affect others, enabling parallel development, easier testing, and better code organization.

---

# 🎯 Goals for Next Session

- Implement the complete agentic chat flow with live GenAI function calling.
- Build the phone call execution feature using ElevenLabs and Twilio.
- Create the dashboard page with task analytics and charts.
- Test end-to-end task delegation from natural language input to database storage.
- Implement error handling and validation in the agent pipeline.
- Explore session state management for persistent chat history.

---

# ✅ Today's Progress Checklist

- [x] Built multi-page Streamlit UI with separate page functions.
- [x] Imported page modules into `app.py`.
- [x] Configured `st.navigation` for sidebar page routing.
- [x] Set up `.env` file with all required API keys.
- [x] Understood and applied the Single Responsibility Principle (SRP).
- [x] Reviewed agentic chat implementation from `session16C.py`.
- [x] Split AI agent logic from Streamlit UI.
- [x] Created `aiagent.py` with function tools and database save logic.
- [x] Created `pages/save_tasks.py` with agentic chat UI.
- [x] Understood end-to-end data flow from user input to MongoDB.

---

> [!TIP]
> Today's session demonstrated how to transform a prototype into a professionally structured application. By applying the Single Responsibility Principle and splitting the AI agent from the UI, the DelegatAI project now has a clean, modular architecture where each file has a single, well-defined purpose. This approach is essential for building scalable, maintainable AI applications in production environments.

---

# 📋 Day 22 Completion Status

| Category | Status |
|----------|--------|
| Theory Covered | ✅ Completed |
| Practical Demonstrations | ✅ Completed |
| Multi-Page Streamlit Setup | ✅ Completed |
| st.navigation Configuration | ✅ Completed |
| SRP Application | ✅ Completed |
| Environment Variable Setup | ✅ Completed |
| session16C.py Code Review | ✅ Completed |
| AI Agent / UI Separation | ✅ Completed |
| aiagent.py Implementation | ✅ Completed |
| Agentic Chat UI Setup | ✅ Completed |
| Revision Notes Prepared | ✅ Completed |
| Interview Questions Prepared | ✅ Completed |
| Personal Reflection Written | ✅ Completed |
| Training Diary Updated | ✅ Completed |

---

### **Maintained By:** Saksham Kumar  
### **Training Program:** TRCS102 – Agentic AI Training  
### **Day:** 22  
### **Status:** ✅ Successfully Completed
