<!--
title: ScriptIQ Phase 2: Full-Stack Production Architecture & React/Vite Clinical Console UI (FastAPI Server, Design Tokens, 3-Pane Console & RBAC Auth)
date: 2026-08-04
tags: ScriptIQ, Full-Stack Monorepo, FastAPI, React 18, Vite, TypeScript, Zustand, Design Tokens, JWT Auth, RBAC, Doctor Console
summary: Transitioned ScriptIQ into a full-stack production monorepo in Day 28. Built an asynchronous FastAPI REST backend server (server.py) with worker threadpools, WebSockets, and JWT authentication. Scaffolded a React 18 + Vite SPA frontend featuring custom design tokens (tokens.css), Light/Dark ThemeProvider, Zustand state management, and a 3-pane zero-scroll Doctor Consultation Console (/console) with DOB patient intake and real-time age auto-calculation.
-->

# 🚀 Day 28: ScriptIQ Phase 2 – Full-Stack Monorepo & React/Vite Clinical Console UI

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 28  
**Date:** 4 August 2026

---

# 📖 Daily Training Record – Day 28

## 📌 Overview

Today's training session was dedicated to **Phase 2** of the **ScriptIQ** project: transforming our CLI/Python scripts into a production-grade **Full-Stack Monorepo architecture** featuring an asynchronous **FastAPI** backend and a modern **React 18 + Vite + TypeScript** single-page application (SPA).

The session focused on building four core pillars of the ScriptIQ web application:
1. **Asynchronous FastAPI Server Layer (`server.py`)**: Wrapping our 6 sub-agents in worker threadpools (`def` routes) to prevent blocking Uvicorn's asyncio event loop, mounting static ReportLab PDF routes (`/pdfs/`), and establishing WebSockets (`/ws/transcript`, `/ws/master_agent`).
2. **Design System & Theme Tokens (`tokens.css` & `ThemeProvider.tsx`)**: Constructing a complete CSS design token library supporting Light & Dark modes, typography scale (`Space Grotesk`, `Plus Jakarta Sans`, `IBM Plex Mono`), and WCAG AA accessibility rings.
3. **3-Pane Zero-Scroll Doctor Console (`/console` / `DoctorConsolePage.tsx`)**: Designing an ergonomic clinical workspace featuring `WaveformSpine.tsx` (signature recording rail), `LiveTranscriptPanel.tsx` (scrolling audio transcript stream), `DraftPanel.tsx` (editable JSON prescription draft), and `PatientIntakeSpace.tsx` with Date-of-Birth (DOB) intake & instant age auto-calculation (`calculateAgeFromDOB`).
4. **JWT Authentication & RBAC Route Protection (`auth.py` & `RequireRole.tsx`)**: Building standard HMAC-SHA256 JWT authentication, salted password hashing, and role-based route guards for `doctor`, `admin`, and `patient` accounts.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Structure a production monorepo layout separating `backend/` Python microservices and `frontend/` React Vite SPA.
- Build non-blocking FastAPI route handlers using worker threadpools to handle heavy Gemini LLM processing.
- Mount static file servers and configure CORS middleware policies in FastAPI.
- Build a centralized CSS custom property token system (`tokens.css`) for Light and Dark theme modes.
- Implement Zustand global state stores (`authStore.ts`, `draftStore.ts`, `recordingStore.ts`, `uiStore.ts`).
- Construct a 3-pane zero-scroll clinical console view in `DoctorConsolePage.tsx`.
- Develop `PatientIntakeSpace.tsx` supporting Date-of-Birth (DOB) intake with real-time age auto-calculation (`calculateAgeFromDOB`).
- Implement the Boneyard shimmer skeleton loading system (`boneyard.css` & `Boneyard.tsx`).
- Enforce HMAC-SHA256 JWT authentication and role-based access control (RBAC) via `<RequireRole>`.

---

# 📚 Key Learnings

## 1️⃣ Full-Stack Monorepo Architecture & FastAPI Server Layer

To serve our React frontend, we built `server.py` using FastAPI and Uvicorn. Long-running AI operations (LLM generation, PDF rendering) are defined using standard `def` handlers so FastAPI automatically delegates them to worker threadpools without freezing async request handlers.

```
                            ScriptIQ Monorepo System Layout
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                           │
│   frontend/ (React 18 + Vite + TS)             backend/ (FastAPI + Python Uvicorn)        │
│   ├── src/pages/ (Workspaces)                  ├── server.py (REST APIs & WebSockets)     │
│   │     ├── DoctorConsolePage.tsx (/console)   ├── config.py (ENV Settings & Keys)        │
│   │     ├── HistoryPage.tsx (/history)         ├── auth.py (JWT Authentication Engine)    │
│   │     └── SettingsPage.tsx (/settings)       ├── agents/ (Sub-Agent Microservices)      │
│   ├── src/store/ (Zustand State)               │     ├── speech_agent.py                  │
│   │     ├── draftStore.ts                      │     ├── prescription_agent.py            │
│   │     └── authStore.ts                       │     ├── pdf_agent.py                     │
│   └── src/styles/tokens.css                    │     └── database_agent.py                │
│                                                └── database/db_helper.py (PyMongo Pool)   │
│                                                                                           │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### Key Server Endpoints in `backend/server.py`

```python
# backend/server.py
from fastapi import FastAPI, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
import os, config
from ai_prescription_agent import AIPrescriptionAgent

app = FastAPI(title="ScriptIQ Backend API", version="2.0.0")

# CORS Middleware Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mount Static Directory for Generated PDF Downloads
os.makedirs("output", exist_ok=True)
app.mount("/pdfs", StaticFiles(directory="output"), name="pdfs")

agent_orchestrator = AIPrescriptionAgent()

@app.post("/api/consultation/process")
def process_consultation_endpoint(payload: dict):
    """
    Worker threadpool route processing clinical transcript into structured prescription JSON.
    """
    transcript = payload.get("transcript", "")
    result = agent_orchestrator.process_consultation(transcript_text=transcript)
    return result

@app.post("/api/prescription/approve")
def approve_prescription_endpoint(prescription_data: dict):
    """
    Finalizes prescription, generates password-protected PDF, and persists to MongoDB.
    """
    pdf_path = agent_orchestrator.pdf_agent.generate_pdf(
        prescription_data, 
        f"output/prescription_{prescription_data.get('patient_name', 'patient').lower()}.pdf"
    )
    db_id = agent_orchestrator.db_agent.save_consultation(prescription_data, "", pdf_path)
    return {"status": "approved", "db_id": db_id, "pdf_url": f"/pdfs/{os.path.basename(pdf_path)}"}
```

---

## 2️⃣ Centralized Design Tokens & Theme Provider Context

To ensure consistent design across Light and Dark modes, we built `tokens.css` with CSS custom properties and created a `ThemeProvider` context.

```css
/* frontend/src/styles/tokens.css */
:root {
    --font-heading: 'Space Grotesk', sans-serif;
    --font-body: 'Plus Jakarta Sans', sans-serif;
    --font-mono: 'IBM Plex Mono', monospace;

    /* Light Theme Tokens */
    --color-bg-app: #F8FAFC;
    --color-bg-surface: #FFFFFF;
    --color-border: #E2E8F0;
    --color-primary: #12897F;
    --color-text-main: #0F172A;
}

[data-theme="dark"] {
    /* Dark Theme Tokens */
    --color-bg-app: #090D16;
    --color-bg-surface: #101726;
    --color-border: #1E293B;
    --color-primary: #14B8A6;
    --color-text-main: #F8FAFC;
}
```

---

## 3️⃣ 3-Pane Zero-Scroll Doctor Console (`DoctorConsolePage.tsx`)

The Doctor Consultation Console (`/console`) features a zero-scroll 100vh viewport layout split into 3 distinct functional panes:
1. **Left Rail (`WaveformSpine.tsx`)**: Visual recording spine animating during active microphone stream.
2. **Middle Pane (`LiveTranscriptPanel.tsx`)**: Real-time scrolling transcript bubble stream and audio recording FAB controls.
3. **Right Pane (`DraftPanel.tsx`)**: Interactive prescription review form displaying extracted symptoms, diagnosis, medicine rows, and the 1-click **Confirm & Send** approval CTA button.

```
+-----------------------------------------------------------------------------------------------+
|                               Doctor Console Viewport Layout                                  |
+---------------+-----------------------------------------------+-------------------------------+
| WaveformSpine | LiveTranscriptPanel                           | DraftPanel                    |
| (Left Rail)   | (Middle Pane)                                 | (Right Pane)                  |
|               |                                               |                               |
| [~~ Wave ~~]  | 🎙️ Audio Recording Stream                     | 👤 Patient Intake (DOB / Age) |
|               | "Patient reports high fever for 2 days..."    | 📝 Diagnosis: Viral Fever     |
|               |                                               | 💊 Medicines (Dolo 650, Pan)  |
|               | --------------------------------------------- | ----------------------------- |
|               | [Record FAB Button]                           | [🚀 Confirm & Send Button]   |
+---------------+-----------------------------------------------+-------------------------------+
```

---

### Real-Time Patient DOB & Age Calculation Engine

```typescript
// frontend/src/utils/validators.ts
export function calculateAgeFromDOB(dobString: string): number | null {
    if (!dobString) return null;
    const dob = new Date(dobString);
    if (isNaN(dob.getTime())) return null;

    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age >= 0 ? age : null;
}
```

---

## 4️⃣ JWT Authentication & Role-Based Access Control (`RequireRole.tsx`)

We implemented HMAC-SHA256 JWT security in `auth.py` and wrapped protected React routes with `<RequireRole>`.

```typescript
// frontend/src/components/auth/RequireRole.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';

interface RequireRoleProps {
    children: React.ReactNode;
    allowedRoles: Array<'doctor' | 'admin' | 'patient'>;
}

export const RequireRole: React.FC<RequireRoleProps> = ({ children, allowedRoles }) => {
    const { user, isAuthenticated } = useAuthStore();

    if (!isAuthenticated || !user) {
        return <Navigate to="/login" replace />;
    }

    if (!allowedRoles.includes(user.role)) {
        return (
            <div className="p-8 text-center">
                <h2 className="text-xl font-bold text-red-500">Access Denied</h2>
                <p>You do not have permission to view this workspace.</p>
            </div>
        );
    }

    return <>{children}</>;
};
```

---

# Day 28 Summary

In **Phase 2**, we elevated **ScriptIQ** into a full-stack monorepo application. We built an asynchronous FastAPI backend server (`server.py`) using worker threadpools, static PDF file hosting, and WebSockets. On the frontend, we scaffolded a React 18 + Vite SPA powered by a centralized design token system (`tokens.css`), Light/Dark theme context, and Zustand state stores. We built the 3-pane Doctor Consultation Console (`/console`) featuring `PatientIntakeSpace.tsx` with DOB age auto-calculation (`calculateAgeFromDOB`), and secured all routes using JWT authentication and RBAC guards (`RequireRole.tsx`).

---

# 📝 Personal Reflection

Building the full-stack architecture for ScriptIQ was a major milestone. Using FastAPI worker threadpools ensured that heavy Gemini LLM extractions and ReportLab PDF builds executed smoothly without blocking Uvicorn's event loop.

Designing the 3-pane zero-scroll Doctor Console in React was extremely rewarding. Doctors can observe their voice transcript streaming in the middle pane while watching the AI populate structured prescription fields in real time on the right. Implementing dynamic DOB age calculation (`calculateAgeFromDOB`) eliminated manual data entry errors.

---

# 📌 Key Takeaways

- ScriptIQ is structured as a full-stack monorepo (`backend/` FastAPI + `frontend/` React Vite SPA).
- FastAPI handles CPU-heavy LLM operations using worker threadpools to keep the asyncio event loop responsive.
- Static file serving routes ReportLab PDF downloads directly via `/pdfs/`.
- `tokens.css` provides CSS custom properties supporting seamless Light and Dark theme switching.
- The Doctor Consultation Console features a zero-scroll 3-pane layout (`WaveformSpine`, `LiveTranscriptPanel`, `DraftPanel`).
- `calculateAgeFromDOB` automatically calculates patient age in years whenever DOB is entered.
- `<RequireRole>` guards protected routes using JWT token validation and role checks (`doctor`, `admin`, `patient`).

---

# 📖 Revision Notes

✔ Monorepo Directory Architecture (`frontend/` + `backend/`)

✔ Asynchronous FastAPI Server Layer (`server.py`)

✔ Worker Threadpool Execution for LLM Tasks

✔ Static PDF File Hosting (`/pdfs/`) & CORS Policies

✔ CSS Design Tokens System (`tokens.css`) & Light/Dark ThemeProvider

✔ Zustand Global Stores (`authStore.ts`, `draftStore.ts`, `recordingStore.ts`)

✔ 3-Pane Zero-Scroll Doctor Consultation Console (`DoctorConsolePage.tsx`)

✔ Patient DOB Intake & Real-Time Age Auto-Calculation (`calculateAgeFromDOB`)

✔ HMAC-SHA256 JWT Auth Engine (`auth.py`) & RBAC Route Guards (`RequireRole.tsx`)

---

# ❓ Interview Questions

### Q1. Why did we use worker threadpools (`def` handlers) for LLM routes in FastAPI?

**Answer:**

Standard `async def` routes in FastAPI execute on the main asyncio event loop thread. Since Gemini LLM HTTP generation and ReportLab PDF generation involve blocking I/O, using standard `def` routes instructs FastAPI to automatically run them inside separate worker threadpools, preventing Uvicorn's main loop from blocking.

---

### Q2. How does `tokens.css` enable Light and Dark theme toggling?

**Answer:**

`tokens.css` defines CSS custom variables (e.g. `--color-bg-app`, `--color-bg-surface`) under `:root` for Light mode and overrides them under `[data-theme="dark"]`. Toggling the `data-theme` attribute on `document.documentElement` dynamically re-skins the entire application instantly.

---

### Q3. What are the 3 main panes of `DoctorConsolePage.tsx`?

**Answer:**

1. **Left Rail (`WaveformSpine.tsx`)**: Visual recording spine.
2. **Middle Pane (`LiveTranscriptPanel.tsx`)**: Audio stream controls and scrolling transcript text.
3. **Right Pane (`DraftPanel.tsx`)**: Editable JSON prescription draft and 1-click approval button.

---

### Q4. How does `calculateAgeFromDOB()` compute patient age?

**Answer:**

It parses a `YYYY-MM-DD` date string, calculates the year difference against today's date, and adjusts for month/day boundaries to ensure exact age in completed years.

---

### Q5. How does `<RequireRole>` protect React SPA routes?

**Answer:**

It checks `useAuthStore()` for active user authentication and role authority. If unauthenticated, it redirects to `/login`. If the user's role is not listed in `allowedRoles`, it renders an Access Denied view.

---

### Q6. What library manages frontend global state in ScriptIQ?

**Answer:**

**Zustand**, which provides lightweight, un-boilerplate state stores (`authStore`, `draftStore`, `recordingStore`, `uiStore`) with persistent `localStorage` support.

---

### Q7. How does FastAPI serve generated ReportLab PDF files to the frontend?

**Answer:**

FastAPI mounts static directories via `app.mount("/pdfs", StaticFiles(directory="output"), name="pdfs")`, exposing output PDF files directly over HTTP.

---

### Q8. What is the role of `boneyard.css` in ScriptIQ?

**Answer:**

It provides a shimmer skeleton loading engine (`bone-line`, `bone-circle`, `bone-card`) that displays animated skeleton UI placeholders while Gemini extracts prescription data.

---

### Q9. How does `apiClient.ts` attach JWT credentials to outgoing HTTP requests?

**Answer:**

It intercepts fetch calls and automatically injects an `Authorization: Bearer <token>` HTTP header using the active token stored in `authStore`.

---

### Q10. What React component handles unhandled runtime errors in ScriptIQ?

**Answer:**

`ErrorBoundary.tsx`, which catches JavaScript runtime crashes, displays a fallback error screen with stack trace details, and provides a page reload CTA.

---

# 🎯 Goals for Next Session

- Implement 3-Tier Fallback PDF Password Encryption (`DOB` ➔ `Phone-Last-4` ➔ `1234`).
- Build dual-port Gmail SMTP TLS Email Dispatcher (`EmailAgent`) with PDF password callout banners.
- Build Web Push Notification Engine (`PushAgent`) using VAPID keys.
- Enable Master Agent Zero-Touch Auto-Pilot Mode with sidebar live telemetry.

---

# ✅ Today's Progress Checklist

- [x] Scaffolded full-stack monorepo (`frontend/` + `backend/`).
- [x] Built FastAPI REST backend server (`server.py`) with worker threadpool routing.
- [x] Configured static PDF file hosting `/pdfs/` and CORS policies.
- [x] Built design token system (`tokens.css`) and Light/Dark `ThemeProvider`.
- [x] Built Zustand global state stores (`authStore`, `draftStore`, `recordingStore`, `uiStore`).
- [x] Built 3-pane Doctor Consultation Console (`DoctorConsolePage.tsx`).
- [x] Implemented DOB intake & real-time age calculation (`calculateAgeFromDOB`).
- [x] Enforced HMAC-SHA256 JWT auth and RBAC route protection (`RequireRole.tsx`).

---

# 📋 Day 28 Completion Status

| Category | Status |
|----------|--------|
| Theory Covered | ✅ Completed |
| Practical Demonstrations | ✅ Completed |
| Full-Stack Monorepo Setup | ✅ Completed |
| FastAPI Server (`server.py`) | ✅ Completed |
| CSS Design Tokens & Themes | ✅ Completed |
| Zustand Global State Stores | ✅ Completed |
| 3-Pane Doctor Console Layout | ✅ Completed |
| DOB Intake & Age Auto-Calculation | ✅ Completed |
| JWT Authentication & RBAC | ✅ Completed |
| Revision Notes Prepared | ✅ Completed |
| Interview Questions Prepared | ✅ Completed |
| Personal Reflection Written | ✅ Completed |
| Training Diary Updated | ✅ Completed |

---

### **Maintained By:** Saksham Kumar  
### **Training Program:** TRCS102 – Agentic AI Training  
### **Day:** 28  
### **Status:** ✅ Successfully Completed
