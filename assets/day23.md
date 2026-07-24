<!--
title: DelegatAI Caller Agent Setup: ElevenLabs AI Outbound Call Integration & Conversation Status Dashboard
date: 2026-07-24
tags: ElevenLabs API, Outbound Calls, Caller Agent, Streamlit, MongoDB, DelegatAI, ElevenLabs SDK, Conversation Tracking, Dashboard, Telephony Integration
summary: Continued building the DelegatAI project by implementing the caller agent module with ElevenLabs Conversational AI outbound call integration, centralizing database name configurations in config.py, storing collection references in database.py, updating task schemas to include recipient contact names, creating execute_pending_calls() using ElevenLabs API, binding the UI to trigger automated calls, storing conversation IDs in MongoDB, and building real-time status fetching for the analytics dashboard.
-->

# 🚀 Day 23: DelegatAI Caller Agent Setup – ElevenLabs AI Outbound Call Integration & Conversation Status Dashboard

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 23  
**Date:** 24 July 2026

---

# 📖 Daily Training Record – Day 23

## 📌 Overview

Today's training session was a direct continuation of the **DelegatAI** (Task Delegation Agent) project initiated on Day 21 and expanded on Day 22. Having completed the multi-page Streamlit navigation framework, environment variable setup, and agentic task saving module with GenAI function tools in the previous session, today we moved into enabling autonomous voice communication and real-time execution telemetry.

The session was divided into two major segments. In **Session 6**, the focus was on setting up the **Caller Agent module (`calleragent.py`)** and integrating ElevenLabs Conversational AI for outbound calls. We placed database configurations in `config.py` (`DB_NAME = 'trcs102'`), created explicit MongoDB database and collection variable references in `database.py`, modified `aiagent.py` to extract recipient contact names (`name`) alongside task descriptions, rendered this contact name on the UI, implemented `execute_pending_calls()` using ElevenLabs' Outbound Call API, bound the UI (`pages/execute_calls.py`) with the caller agent to place automated phone calls, and validated that generated `conversation_id` tokens were persisted in MongoDB. In **Session 7**, we extended `calleragent.py` by implementing status-fetching functions (`fetch_conversation_status()`), allowing the system to query live call execution outcomes from ElevenLabs asynchronously and project live metrics, status badges, call durations, and conversation details onto the Streamlit `dashboard.py` interface.

These two sessions transformed DelegatAI from a task management system into a fully closed-loop agentic application capable of understanding user instructions, persisting structured tasks, making real AI outbound phone calls, and tracking call statuses in real time.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Centralize database configuration by creating `DB_NAME = 'trcs102'` inside `config.py`.
- Establish explicit MongoDB database and collection reference variables within `database.py`.
- Update AI agent function tool declarations in `aiagent.py` to capture recipient contact `name` parameters.
- Display recipient contact names dynamically across the Streamlit task creation and execution UI.
- Create the dedicated `calleragent.py` module to isolate telephony and voice agent logic.
- Construct the `execute_pending_calls()` function using ElevenLabs API integration.
- Utilize ElevenLabs Outbound Call API specs (via Twilio bridge) for programmatically placing calls.
- Store and track ElevenLabs `conversation_id` tokens within MongoDB task documents.
- Bind `pages/execute_calls.py` UI with `calleragent.py` to trigger calls via user button interactions.
- Validate database records in MongoDB Atlas to verify saved conversation IDs and call states.
- Build status-polling functions in `calleragent.py` to fetch conversation outcomes from ElevenLabs.
- Integrate call status metrics, status badges, and conversation summaries into `pages/dashboard.py`.

---

# 📚 Key Learnings

## 1️⃣ Session 6 – Setup Caller Agent: ElevenLabs Agent Integration

The first major segment of today's session focused on

building the caller agent infrastructure

and integrating ElevenLabs Conversational AI for automated outbound calling.

---

## Step 1 — Create `DB_NAME = 'trcs102'` in `config.py`

The instructor explained that hardcoding database names across multiple files

creates maintenance issues and violates configuration standards.

To follow best practices, we added `DB_NAME` to `config.py`.

```python
import os
from dotenv import load_dotenv

load_dotenv()

GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY")
ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
ELEVENLABS_AGENT_ID = os.getenv("ELEVENLABS_AGENT_ID")
MONGODB_URI = os.getenv("MONGODB_URI")

# Centralized Database Name
DB_NAME = 'trcs102'
```

```
config.py
↓
DB_NAME = 'trcs102'
↓
Imported by database.py
```

---

## Step 2 — Place MongoDB Configurations & Reference Variables in `database.py`

Next, we updated `database.py` to create explicit variables

referencing our database and specific collections.

```python
import pymongo
from config import MONGODB_URI, DB_NAME

class DBHelper:
    def __init__(self):
        self.client = pymongo.MongoClient(MONGODB_URI)
        self.db = self.client[DB_NAME]
        
        # Explicit collection reference variables
        self.contacts_collection = self.db['contacts']
        self.tasks_collection = self.db['tasks']
        self.conversations_collection = self.db['conversations']

db_helper = DBHelper()
```

```
database.py Architecture:

DBHelper Class
│
├── self.client (PyMongo Client)
│
├── self.db (db['trcs102'])
│
├── self.contacts_collection (contacts)
├── self.tasks_collection (tasks)
└── self.conversations_collection (conversations)
```

---

## Step 3 — Added 'name' in Task Schema (`aiagent.py`) & UI Display

When delegating a task (e.g. *"Call Rahul and ask for the report"*),

the AI agent must extract the recipient's **name**

so the system can look up their contact details in MongoDB.

---

### Updating `aiagent.py` Tool Declaration

```python
save_task_tool = {
    "name": "save_task",
    "description": "Saves a delegated task to MongoDB for call execution.",
    "parameters": {
        "type": "OBJECT",
        "properties": {
            "name": {
                "type": "STRING",
                "description": "Full name of the contact person to call (e.g. Rahul, Amandeep)"
            },
            "task_description": {
                "type": "STRING",
                "description": "Detailed task instructions to be delivered during the call"
            },
            "deadline": {
                "type": "STRING",
                "description": "Task deadline or time constraint"
            }
        },
        "required": ["name", "task_description"]
    }
}
```

---

### Extracting & Displaying Contact Name on UI

```
User Prompt: "Ask Rahul to send the sales report by 4 PM"
│
▼
aiagent.py (GenAI Function Tool)
│
▼
Extracted Data:
├── name: "Rahul"
├── task_description: "Send the sales report"
└── deadline: "4 PM"
│
▼
Saved to MongoDB Tasks Collection
│
▼
Displayed on UI (pages/save_tasks.py & pages/execute_calls.py)
```

---

## Step 4 — Create `calleragent.py` & `execute_pending_calls()`

The core feature of Session 6 was creating `calleragent.py`

and implementing the `execute_pending_calls()` function.

```
calleragent.py
│
├── Imports config & database
│
├── Defines ElevenLabs Outbound API Endpoint
│
└── execute_pending_calls()
    ├── Query pending tasks from MongoDB
    ├── Lookup contact phone number
    ├── POST request to ElevenLabs Outbound API
    └── Save conversation_id back to MongoDB
```

---

## Step 5 — Reference ElevenLabs Twilio Outbound Call API

According to the official [ElevenLabs Twilio Outbound Call API Documentation](https://elevenlabs.io/docs/api-reference/twilio/outbound-call),

making an outbound AI call requires an HTTP POST request

with the ElevenLabs API key in headers and target parameters in JSON body.

```
API Endpoint:
https://api.elevenlabs.io/v1/convai/twilio/outbound-call

Headers:
xi-api-key: <ELEVENLABS_API_KEY>
Content-Type: application/json
```

---

### Implementation of `execute_pending_calls()`

```python
# calleragent.py
import requests
from config import ELEVENLABS_API_KEY, ELEVENLABS_AGENT_ID
from database import db_helper

ELEVENLABS_OUTBOUND_URL = "https://api.elevenlabs.io/v1/convai/twilio/outbound-call"

def execute_pending_calls():
    """
    Fetches pending tasks from MongoDB, matches recipient phone numbers,
    and places outbound AI phone calls via ElevenLabs API.
    """
    # 1. Fetch pending tasks from database
    pending_tasks = list(db_helper.tasks_collection.find({"status": "pending"}))
    results = []

    headers = {
        "xi-api-key": ELEVENLABS_API_KEY,
        "Content-Type": "application/json"
    }

    for task in pending_tasks:
        contact_name = task.get("name")
        
        # Look up contact phone number from contacts collection
        contact = db_helper.contacts_collection.find_one(
            {"name": {"$regex": f"^{contact_name}$", "$options": "i"}}
        )

        if not contact or "phone" not in contact:
            results.append({
                "task_id": str(task["_id"]),
                "status": "failed",
                "reason": f"Phone number for '{contact_name}' not found"
            })
            continue

        # 2. Build ElevenLabs API Payload
        payload = {
            "agent_id": ELEVENLABS_AGENT_ID,
            "to_phone_number": contact["phone"],
            "conversation_config_override": {
                "agent": {
                    "prompt": {
                        "prompt": f"You are DelegatAI assistant calling on behalf of Saksham. Speak to {contact_name} and inform them: {task.get('task_description')}. Deadline is {task.get('deadline', 'ASAP')}."
                    }
                }
            }
        }

        # 3. Send Outbound Call Request
        response = requests.post(ELEVENLABS_OUTBOUND_URL, headers=headers, json=payload)

        if response.status_code == 200:
            res_data = response.json()
            conversation_id = res_data.get("conversation_id")

            # 4. Update task record in database with conversation_id
            db_helper.tasks_collection.update_one(
                {"_id": task["_id"]},
                {
                    "$set": {
                        "status": "initiated",
                        "conversation_id": conversation_id,
                        "called_at": "2026-07-24"
                    }
                }
            )

            results.append({
                "task_id": str(task["_id"]),
                "name": contact_name,
                "status": "initiated",
                "conversation_id": conversation_id
            })
        else:
            results.append({
                "task_id": str(task["_id"]),
                "status": "error",
                "details": response.text
            })

    return results
```

---

### Outbound Call Execution Flow

```
execute_pending_calls()
↓
Query MongoDB (status == 'pending')
↓
Lookup Contact Phone Number
↓
POST to ElevenLabs Outbound API
↓
Receive conversation_id
↓
Update MongoDB (status = 'initiated', conversation_id)
```

---

## Step 6 — Bind UI (`pages/execute_calls.py`) with `calleragent.py`

In `pages/execute_calls.py`, we created the user interface

to view pending task queues and trigger call execution.

```python
# pages/execute_calls.py
import streamlit as st
from database import db_helper
from calleragent import execute_pending_calls

def execute_calls_page():
    st.title("📞 Execute Pending Calls")
    st.write("Trigger automated AI phone calls via ElevenLabs.")

    # Fetch pending tasks
    pending_tasks = list(db_helper.tasks_collection.find({"status": "pending"}))

    if not pending_tasks:
        st.info("🎉 No pending calls in the queue!")
        return

    st.subheader(f"Pending Tasks ({len(pending_tasks)})")

    # Display pending task cards
    for task in pending_tasks:
        with st.container(border=True):
            st.write(f"👤 **Contact Name:** {task.get('name', 'N/A')}")
            st.write(f"📝 **Task:** {task.get('task_description')}")
            st.write(f"⏰ **Deadline:** {task.get('deadline', 'N/A')}")
            st.write(f"📌 **Status:** `:orange[{task.get('status')}]`")

    st.markdown("---")

    # Button to trigger call execution
    if st.button("🚀 Trigger Outbound Calls", type="primary"):
        with st.spinner("Placing phone calls via ElevenLabs Agent..."):
            results = execute_pending_calls()
            st.success("Calls initiated successfully!")
            st.json(results)
            st.rerun()
```

---

## Step 7 — Validate Database & Save `conversation_id`

After triggering calls from the UI,

we navigate to MongoDB Atlas / MongoDB Compass

to validate that the database records updated successfully.

```json
{
  "_id": {"$oid": "66a12b3f4f1e8a9b12345678"},
  "name": "Rahul",
  "task_description": "Send the sales report",
  "deadline": "4 PM",
  "status": "initiated",
  "conversation_id": "conv_9921ab45678c",
  "called_at": "2026-07-24"
}
```

---

> [!NOTE]
> Saving the `conversation_id` returned by ElevenLabs in the MongoDB task document is essential. It serves as the unique identifier required to query ElevenLabs' status APIs and retrieve call outcomes, durations, and conversation transcripts.

---

## 2️⃣ Session 7 – Setup Caller Agent to Fetch Status Calls/Tasks & Dashboard Integration

The second major segment focused on

enabling real-time conversation status tracking

and building the execution dashboard interface.

---

## Step 1 — Create Function in `calleragent.py` to Fetch Status of Conversations

Because phone calls take time to complete,

the call status changes asynchronously over time.

We added `fetch_conversation_status()` and `update_all_call_statuses()` to `calleragent.py`.

---

### Implementation of Status Fetching Logic

```python
# calleragent.py (Session 7 Addition)
import requests
from config import ELEVENLABS_API_KEY
from database import db_helper

ELEVENLABS_CONVERSATION_URL = "https://api.elevenlabs.io/v1/convai/conversations"

def fetch_conversation_status(conversation_id):
    """
    Queries ElevenLabs API for the status of a specific conversation_id.
    """
    headers = {"xi-api-key": ELEVENLABS_API_KEY}
    url = f"{ELEVENLABS_CONVERSATION_URL}/{conversation_id}"

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        data = response.json()
        raw_status = data.get("status")  # 'done', 'in_progress', 'processing'
        metadata = data.get("metadata", {})
        duration = metadata.get("call_duration_secs", 0)

        # Standardize status
        mapped_status = "completed" if raw_status in ["done", "completed"] else raw_status

        # Sync result to MongoDB
        db_helper.tasks_collection.update_one(
            {"conversation_id": conversation_id},
            {
                "$set": {
                    "status": mapped_status,
                    "duration_seconds": duration,
                    "last_checked_at": "2026-07-24"
                }
            }
        )
        return {"conversation_id": conversation_id, "status": mapped_status, "duration": duration}
    else:
        return {"conversation_id": conversation_id, "error": response.text}

def update_all_call_statuses():
    """
    Polls status for all active tasks that have a conversation_id.
    """
    active_tasks = list(db_helper.tasks_collection.find({
        "status": {"$in": ["initiated", "in_progress"]},
        "conversation_id": {"$exists": True}
    }))

    updates = []
    for task in active_tasks:
        res = fetch_conversation_status(task["conversation_id"])
        updates.append(res)

    return updates
```

---

### Status Polling Architecture

```
User Clicks 'Refresh' on Dashboard
↓
update_all_call_statuses()
↓
Find tasks with status == 'initiated'
↓
GET https://api.elevenlabs.io/v1/convai/conversations/{conversation_id}
↓
Receive Call Status & Duration
↓
Update MongoDB Document
↓
Refresh Dashboard UI
```

---

## Step 2 — Bring Status Results to Dashboard UI (`pages/dashboard.py`)

In `pages/dashboard.py`, we created an executive monitoring dashboard

that displays task metrics, status breakdown counts, and detailed tables.

```python
# pages/dashboard.py
import streamlit as st
import pandas as pd
from database import db_helper
from calleragent import update_all_call_statuses

def dashboard_page():
    st.title("📊 DelegatAI Task & Call Dashboard")
    st.write("Real-time telemetry and call status metrics.")

    # Refresh Button
    if st.button("🔄 Sync Live Call Statuses"):
        with st.spinner("Fetching latest call states from ElevenLabs..."):
            update_all_call_statuses()
            st.success("Synced with ElevenLabs successfully!")
            st.rerun()

    # Query all tasks from database
    tasks = list(db_helper.tasks_collection.find({}))

    if not tasks:
        st.warning("No task records found.")
        return

    df = pd.DataFrame(tasks)

    # Top Metrics Bar
    col1, col2, col3, col4 = st.columns(4)
    col1.metric("Total Tasks", len(df))
    col2.metric("Pending Queue", len(df[df["status"] == "pending"]))
    col3.metric("Calls Initiated", len(df[df["status"].isin(["initiated", "in_progress"])]))
    col4.metric("Completed Calls", len(df[df["status"] == "completed"]))

    st.markdown("---")
    st.subheader("📋 Task Execution Directory")

    # Clean display columns
    display_cols = ["name", "task_description", "deadline", "status"]
    if "conversation_id" in df.columns:
        display_cols.append("conversation_id")
    if "duration_seconds" in df.columns:
        display_cols.append("duration_seconds")

    st.dataframe(df[display_cols], use_container_width=True)
```

---

## Complete DelegatAI Application Architecture (Day 23)

```
                              DelegatAI System Architecture
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                         │
│   .env File ──> config.py (DB_NAME='trcs102', GOOGLE_KEY, ELEVENLABS_KEY)                │
│                     │                                                                   │
│                     ▼                                                                   │
│               database.py (DBHelper: contacts, tasks, conversations)                     │
│                     │                                                                   │
│       ┌─────────────┴─────────────┬───────────────────────────┐                         │
│       ▼                           ▼                           ▼                         │
│   aiagent.py              calleragent.py                 app.py                         │
│ (GenAI Tool Call)       (Outbound Calls &          (st.navigation)                      │
│                           Status Sync)                        │                         │
│       │                           │                           │                         │
│       ▼                           ▼                           ▼                         │
│ pages/save_tasks.py    pages/execute_calls.py        pages/dashboard.py                   │
│  (Task Saving UI)       (Call Execution UI)        (Analytics & Metrics)                │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Complete End-to-End Data Flow

```
1. User enters natural language task into pages/save_tasks.py
                  │
                  ▼
2. aiagent.py parses name ("Rahul"), task, deadline via GenAI Function Tools
                  │
                  ▼
3. Task written to MongoDB `tasks` collection with status = "pending"
                  │
                  ▼
4. User clicks "Trigger Outbound Calls" on pages/execute_calls.py
                  │
                  ▼
5. calleragent.py looks up Rahul's phone number in `contacts` collection
                  │
                  ▼
6. POST request to ElevenLabs Outbound Call API (Twilio integration)
                  │
                  ▼
7. ElevenLabs returns `conversation_id`; status updated to "initiated" in MongoDB
                  │
                  ▼
8. User clicks "Sync Live Call Statuses" on pages/dashboard.py
                  │
                  ▼
9. calleragent.py GET request to ElevenLabs Conversation API fetches completion status
                  │
                  ▼
10. Dashboard renders updated status badges, metrics, and call duration!
```

---

> [!IMPORTANT]
> The architectural separation between task creation (`save_tasks.py`), call execution (`execute_calls.py`), call automation logic (`calleragent.py`), and analytics visualization (`dashboard.py`) adheres strictly to the Single Responsibility Principle (SRP). Every component operates independently through standard database contracts and clean API signatures.

---

# Day 23 Summary

Today's training session successfully transformed **DelegatAI** into an autonomous, voice-enabled AI task delegation system. In **Session 6**, we centralized our database configurations in `config.py` (`DB_NAME = 'trcs102'`), declared global MongoDB collection references in `database.py`, updated `aiagent.py` to capture contact names, and developed `calleragent.py`. Using the ElevenLabs Outbound Call API, we implemented `execute_pending_calls()` to initiate real outbound phone calls, storing generated `conversation_id` tokens inside MongoDB task records and binding the process to `pages/execute_calls.py`. In **Session 7**, we added status-tracking logic (`fetch_conversation_status()`) to query call states asynchronously from ElevenLabs and integrated this telemetry directly into `pages/dashboard.py` via metrics widgets and dataframes.

---

# 📝 Personal Reflection

Today's session was one of the most exciting days of the entire training program. Seeing an AI system transition from generating text responses in a Streamlit chat to actually picking up a virtual phone and placing real-world outbound voice calls was incredible.

Integrating ElevenLabs' Conversational AI API taught me how modern voice agents operate under the hood—combining speech recognition, LLM reasoning, speech synthesis, and telephony bridging via Twilio. I also gained a much deeper appreciation for asynchronous status management. Because phone calls take real human time to complete, updating database records asynchronously via conversation IDs and polling endpoints is an essential design pattern for enterprise AI applications.

---

# 📌 Key Takeaways

- Centralized database configuration in `config.py` using `DB_NAME = 'trcs102'`.
- Created structured collection handlers (`contacts`, `tasks`, `conversations`) in `database.py`.
- Updated GenAI function declarations in `aiagent.py` to extract contact `name` alongside tasks.
- Created the dedicated `calleragent.py` module to isolate telephony and voice AI logic.
- Implemented `execute_pending_calls()` leveraging the ElevenLabs Outbound Call API.
- Parsed and stored ElevenLabs `conversation_id` inside MongoDB task records.
- Bound `pages/execute_calls.py` UI controls to trigger automated batch phone calls.
- Validated database documents in MongoDB Atlas to confirm accurate status persistence.
- Implemented status polling logic via `fetch_conversation_status()` in `calleragent.py`.
- Connected ElevenLabs GET Conversation API endpoints to sync call status, duration, and transcripts.
- Designed an interactive executive dashboard in `pages/dashboard.py` with real-time refresh controls.
- Applied the Single Responsibility Principle across all five core application modules.

---

# 📖 Revision Notes

✔ Centralized Database Configuration (`DB_NAME = 'trcs102'`)

✔ PyMongo Collection References (`database.py`)

✔ Contact Name Extraction in GenAI Tool Calling (`aiagent.py`)

✔ `calleragent.py` Module Creation

✔ ElevenLabs Outbound Call API Integration

✔ Telephony Bridge (Twilio + ElevenLabs Conversational AI)

✔ `execute_pending_calls()` Logic

✔ ElevenLabs `conversation_id` Tracking & Database Updates

✔ Streamlit UI Binding (`pages/execute_calls.py`)

✔ MongoDB Atlas Call Verification

✔ Asynchronous Call Status Polling (`fetch_conversation_status()`)

✔ ElevenLabs GET Conversation Telemetry API

✔ Live Metrics & Telemetry Dashboard (`pages/dashboard.py`)

---

# ❓ Interview Questions

### Q1. How does ElevenLabs Conversational AI place outbound phone calls using Twilio integration?

**Answer:**

ElevenLabs provides an outbound call API endpoint (`/v1/convai/twilio/outbound-call`) that accepts an `agent_id`, recipient phone number (`to_phone_number`), and optional dynamic variable overrides. When triggered, ElevenLabs connects to a configured Twilio telephony trunk, dials the target number, and initiates a real-time WebSocket connection between the recipient's phone stream and the ElevenLabs conversational voice agent.

---

### Q2. Why is it important to store the `conversation_id` in MongoDB after initiating an outbound call?

**Answer:**

Outbound phone calls execute asynchronously over telecommunication networks. The initial POST request to ElevenLabs returns immediately with a unique `conversation_id` while the call is still dialing or in progress. Storing `conversation_id` in the local MongoDB task record links our database entry with ElevenLabs' telemetry logs, enabling downstream status polling, call duration calculation, and transcript retrieval.

---

### Q3. How does `aiagent.py` handle contact lookup for task delegation?

**Answer:**

The GenAI function tool in `aiagent.py` is configured with a JSON schema that requires the LLM to extract a recipient `name` parameter from natural language user prompts (e.g. *"Call Rahul"*). When `save_task` executes, the extracted `name` is stored in the task record. Later, `calleragent.py` uses regex queries on the `contacts` MongoDB collection to match `name` with the contact's registered phone number.

---

### Q4. What is the difference between synchronous and asynchronous operations in voice agent workflows?

**Answer:**

Saving a task or generating an AI text response is synchronous—the system completes the operation and returns a response immediately. Placing an outbound call is asynchronous—the call initiation returns an ID immediately, but the actual phone conversation occurs over an extended timeframe. The application must handle call status updates via periodic status polling or webhook call-backs.

---

### Q5. How does `pages/dashboard.py` stay updated with real-time call execution states?

**Answer:**

`pages/dashboard.py` includes a manual or automated refresh trigger that invokes `update_all_call_statuses()` from `calleragent.py`. This function queries MongoDB for active tasks (status `initiated` or `in_progress`), calls ElevenLabs' GET Conversation API endpoint using their `conversation_id`, updates the task status and duration in MongoDB, and re-renders Streamlit metric widgets and dataframes.

---

### Q6. Why did we centralize `DB_NAME` in `config.py` instead of specifying database strings in multiple files?

**Answer:**

Centralizing `DB_NAME = 'trcs102'` in `config.py` adheres to the Single Responsibility Principle and DRY (Don't Repeat Yourself) principle. If the database name or connection settings change in the future, updating a single line in `config.py` updates the entire application across all modules, preventing hardcoded configuration mismatches and maintenance bugs.

---

### Q7. What are the key parameters required in an ElevenLabs outbound call payload?

**Answer:**

1. `agent_id`: Identifies the specific AI voice agent configured in ElevenLabs.
2. `to_phone_number`: The target recipient's phone number formatted in E.164 standard.
3. `conversation_config_override`: Custom prompt variables, agent instructions, or dynamic task descriptions passed to the agent context for that specific call.

---

### Q8. What happens if a contact's phone number is not found in the `contacts` collection during call execution?

**Answer:**

If `calleragent.py` cannot find a matching contact record or phone number in MongoDB, `execute_pending_calls()` flags that specific task as `failed` with a reason string (e.g. *"Phone number for 'Rahul' not found"*), appends the result to the call log, and proceeds to process the remaining pending tasks without crashing the execution pipeline.

---

### Q9. How are ElevenLabs conversation status responses mapped to internal database task statuses?

**Answer:**

ElevenLabs API returns raw conversation status values such as `done`, `in_progress`, or `processing`. In `fetch_conversation_status()`, we standardize these values by mapping `done` and `completed` to our internal status `'completed'`, while preserving intermediate states like `'initiated'` and `'in_progress'`.

---

### Q10. What are the benefits of decoupling `calleragent.py` from `pages/execute_calls.py`?

**Answer:**

Decoupling the caller agent logic from the Streamlit UI follows SRP. `calleragent.py` handles API HTTP requests, database reads/writes, and response parsing, while `pages/execute_calls.py` handles layout rendering and button clicks. This allows `calleragent.py` to be executed as a background worker, cron job, or CLI script without relying on the Streamlit web server.

---

# 🎯 Goals for Next Session

- Integrate real-time webhook callbacks for instant status updates without polling.
- Implement sentiment analysis on ElevenLabs call transcripts.
- Build automated retry mechanisms for failed outbound calls.
- Enhance the Streamlit dashboard with interactive charts and export options.
- Add multi-tenant support for managing multiple AI voice agents.
- Prepare the DelegatAI capstone project for final presentation and deployment.

---

# ✅ Today's Progress Checklist

- [x] Placed `DB_NAME = 'trcs102'` in `config.py`.
- [x] Created explicit MongoDB collection references in `database.py`.
- [x] Updated `aiagent.py` to extract contact `name` in task schema.
- [x] Rendered contact names across Streamlit task creation UI.
- [x] Created `calleragent.py` to handle voice agent execution logic.
- [x] Implemented `execute_pending_calls()` with ElevenLabs API.
- [x] Stored ElevenLabs `conversation_id` in MongoDB task documents.
- [x] Bound `pages/execute_calls.py` to trigger outbound calls.
- [x] Validated database records in MongoDB Atlas.
- [x] Implemented `fetch_conversation_status()` for asynchronous status tracking.
- [x] Integrated call status metrics and tables into `pages/dashboard.py`.

---

> [!TIP]
> Integrating outbound voice agents requires designing for asynchronous state transitions. Because phone calls take real human time to complete, saving remote conversation IDs in MongoDB and updating call statuses via polling or webhooks ensures the application UI remains responsive and telemetry stays perfectly synced.

---

# 📋 Day 23 Completion Status

| Category | Status |
|----------|--------|
| Theory Covered | ✅ Completed |
| Practical Demonstrations | ✅ Completed |
| Centralized DB Config Setup | ✅ Completed |
| Database Helper References | ✅ Completed |
| Contact Name Extraction | ✅ Completed |
| calleragent.py Module Setup | ✅ Completed |
| ElevenLabs API Outbound Calls | ✅ Completed |
| conversation_id Tracking | ✅ Completed |
| Execute Calls UI Binding | ✅ Completed |
| MongoDB Database Validation | ✅ Completed |
| Conversation Status Polling | ✅ Completed |
| Live Dashboard Integration | ✅ Completed |
| Revision Notes Prepared | ✅ Completed |
| Interview Questions Prepared | ✅ Completed |
| Personal Reflection Written | ✅ Completed |
| Training Diary Updated | ✅ Completed |

---

### **Maintained By:** Saksham Kumar  
### **Training Program:** TRCS102 – Agentic AI Training  
### **Day:** 23  
### **Status:** ✅ Successfully Completed
