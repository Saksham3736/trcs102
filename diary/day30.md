<!--
title: ScriptIQ Phase 4: In-House Pharmacy POS, Thermal Printing, Cloud Production Deployment & Training Program Capstone
date: 2026-08-06
tags: ScriptIQ, Pharmacy POS, Thermal Printing, Letterhead Customizer, Memory Optimization, Render, Vercel, Cloud Deployment, Capstone Project, GitHub
summary: Completed Phase 4 and the capstone release of ScriptIQ on Day 30. Built the In-House Pharmacy POS workspace with 80mm thermal printing and UPI QR codes, standalone official letterhead receipt views (/receipt/:orderId), letterhead settings customizer, and achieved an 87% backend memory reduction (550MB down to ~70MB RAM) for cloud compatibility. Successfully deployed backend microservices on Render and frontend SPA on Vercel, with ongoing development hosted at https://github.com/Saksham3736/scriptiq.
-->

# 🚀 Day 30: ScriptIQ Phase 4 – In-House Pharmacy POS, Cloud Deployment & Capstone Completion

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 30  
**Date:** 6 August 2026

---

# 📖 Daily Training Record – Day 30

## 📌 Overview

Today marks **Day 30**—the grand culmination of our 30-day **Agentic AI Training Program (TRCS102)**. In today's final session, we completed **Phase 4** of our capstone platform, **ScriptIQ**: implementing point-of-sale pharmacy billing, isolated thermal receipt printing, backend memory optimization, and dual-platform production cloud deployment on **Vercel** and **Render**.

The session was structured around five key milestones:
1. **In-House Pharmacy POS & 80mm Thermal Printing Suite (`ReceiptsManagementPage.tsx` & `PharmacyAgent`)**: Building a complete POS billing workspace with itemized medicine carts, 5% GST tax calculation, 0–50% discount overrides, 1-Click `⚡ Load Recent Prescription` pre-loading, dynamic Indian UPI QR code generation, and scoped 80mm thermal receipt printing via `@media print` CSS element isolation.
2. **Standalone Official Receipt View (`ReceiptViewPage.tsx` / `/receipt/:orderId`)**: Creating a branded receipt view URL featuring hospital letterhead, doctor credentials, system verification stamp, authorized doctor signature, and scoped A4 print isolation (`?autoprint=true`).
3. **Official Receipts History & Letterhead Customizer (`OfficialReceiptsPage.tsx` & `SettingsPage.tsx`)**: Building a PDF letterhead settings API (`/api/settings/letterhead`) with live canvas previews, allowing doctors to customize accent colors, header alignments, and clinic branding.
4. **Backend Memory Optimization (87% RAM Reduction)**: Eliminating heavy local ML dependencies (`faster-whisper`, `sounddevice`, `numpy`) in favor of 100% cloud-driven **Gemini Multimodal Audio API (`google-genai`)**, slashing backend memory consumption from ~550 MB down to **~70 MB RAM** to ensure smooth execution on Render's Free/Starter hosting tier.
5. **Dual-Platform Production Cloud Deployment & Capstone Release**: Deploying the React 18 frontend SPA onto **Vercel** and the FastAPI backend server onto **Render**, while establishing the primary GitHub production repository at [https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq).

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Build `PharmacyAgent` (`agents/pharmacy_agent.py`) for automated stock verification, itemized pricing, and bill calculation.
- Develop `ReceiptsManagementPage.tsx` featuring POS billing carts, 5% GST calculations, discount overrides, and UPI QR codes.
- Implement `@media print` CSS element isolation to hide surrounding UI elements when printing 80mm thermal receipts.
- Create `ReceiptViewPage.tsx` (`/receipt/:orderId`) for rendering official branded patient receipts with `autoprint=true` support.
- Build custom PDF letterhead settings APIs (`/api/settings/letterhead`) and live canvas preview controls in `SettingsPage.tsx`.
- Perform deep backend memory optimization, cutting RAM usage by **87%** (from ~550 MB down to **~70 MB**) for cloud PaaS compatibility.
- Configure `frontend/vercel.json` SPA client-side routing rewrites and `backend/render.yaml` service blueprints.
- Deploy ScriptIQ to live cloud environments on Vercel and Render.
- Publish the production codebase to GitHub ([https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq)) and outline the roadmap for future enhancements.

---

# 📚 Key Learnings

## 1️⃣ In-House Pharmacy POS & 80mm Thermal Print Engine

The Pharmacy POS workspace (`ReceiptsManagementPage.tsx`) bridges clinical prescription output directly with pharmacy fulfillment. Pharmacists can click **`⚡ Load Recent Prescription`** to instantly hydrate the billing cart from the doctor's latest approved consultation.

```
                      Prescription-to-Pharmacy POS Velocity Flow
┌───────────────────────────────────────────────────────────────────────────┐
│                           Doctor Console Workspace                        │
│                           Doctor Approves Prescription                    │
│                                       │                                   │
│                                       ▼                                   │
│                           Auto-Bridge Engine                              │
│                   PharmacyAgent.generate_pharmacy_order()                 │
│                                       │                                   │
│                                       ▼                                   │
│                     POS Billing & Receipts Workspace                      │
│                           (/receipts Management Page)                     │
│                                       │                                   │
│          ┌────────────────────────────┼────────────────────────────┐      │
│          ▼                            ▼                            ▼      │
│   5% GST & Discount Cart       Dynamic UPI QR Generator    80mm Thermal   │
│   Calculations                 (Indian UPI QR Code)        Print Engine   │
│                                                                    │      │
│                                                                    ▼      │
│                                                      Official Receipt View│
│                                                      (/receipt/:orderId)  │
└───────────────────────────────────────────────────────────────────────────┘
```

---

### Isolated 80mm Thermal Print CSS Rule (`@media print`)

```css
/* Print Isolation CSS inside ReceiptsManagementPage.tsx */
@media print {
    /* Hide all application UI shell elements during printing */
    body * {
        visibility: hidden;
    }
    
    /* Display ONLY the 80mm thermal receipt container */
    #thermal-receipt, #thermal-receipt * {
        visibility: visible;
    }
    
    #thermal-receipt {
        position: absolute;
        left: 0;
        top: 0;
        width: 80mm;
        padding: 4mm;
        margin: 0;
    }
}
```

---

## 2️⃣ Standalone Official Receipt Page (`/receipt/:orderId`)

`ReceiptViewPage.tsx` provides a standalone URL route (`/receipt/:orderId`) for viewing official patient receipts formatted with hospital letterheads, doctor credentials, system verification stamps, and authorized signatures.

```python
# REST API Endpoint in backend/server.py
@app.get("/api/pharmacy/receipts")
def get_pharmacy_receipt_endpoint(q: str):
    """
    Fetches pharmacy receipt by order ID or patient name.
    """
    receipt = agent_orchestrator.db_agent.get_pharmacy_order(q)
    if not receipt:
        raise HTTPException(status_code=404, detail="Receipt not found")
    return receipt
```

---

## 3️⃣ Render Backend Memory Optimization (87% RAM Reduction)

Initial cloud testing on Render's Free/Starter tier (512 MB RAM cap) triggered "Memory Limit Exceeded" crashes due to local PyTorch and Whisper C++ libraries consuming ~550 MB – 1 GB+ RAM.

We refactored `SpeechAgent` to rely 100% on the cloud-native **Gemini Multimodal Audio API (`google-genai`)** and removed heavy local ML packages (`faster-whisper`, `sounddevice`, `numpy`) from `requirements.txt`.

```
                    Render Memory Optimization Impact
┌───────────────────────────────────────────────────────────────────────────┐
│  Before Optimization (Local PyTorch + Whisper):                            │
│  ████████████████████████████████████████ (~550 MB – 1 GB RAM) -> [OOM]   │
│                                                                           │
│  After Optimization (100% Gemini Cloud Audio API):                        │
│  █████ (~70 MB RAM) -> [87% RAM Reduction - Smooth Cloud Performance]    │
└───────────────────────────────────────────────────────────────────────────┘
```

---

## 4️⃣ Live Production Cloud Deployments & Repository Links

ScriptIQ is fully deployed and accessible across live production endpoints:

- 🌐 **Frontend SPA (Vercel)**: [https://scriptiq-sk.vercel.app](https://scriptiq-sk.vercel.app)
- ⚡ **Backend REST API (Render)**: [https://scriptiq-backend.onrender.com](https://scriptiq-backend.onrender.com)
- 🔗 **Interactive Swagger API Docs**: [https://scriptiq-backend.onrender.com/docs](https://scriptiq-backend.onrender.com/docs)
- 🐙 **GitHub Production Repository**: [https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq)

---

### Vercel SPA Client-Side Routing Configuration (`frontend/vercel.json`)

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

### Render Service Blueprint (`backend/render.yaml`)

```yaml
services:
  - type: web
    name: scriptiq-backend
    env: python
    region: singapore
    buildCommand: pip install -r requirements.txt
    startCommand: uvicorn server:app --host 0.0.0.0 --port $PORT
    envVars:
      - key: PYTHON_VERSION
        value: 3.11.0
```

---

## 🚀 Ongoing Development & Future Enhancement Roadmap

> [!IMPORTANT]
> ScriptIQ is an active open-source enterprise project. While Phase 4 completes our training program milestone, **further improvements and feature enhancements will continue to be actively developed**. All upcoming releases, features, and optimizations will be pushed directly to the official GitHub repository:
> 
> 🔗 **Official GitHub Repository:** [https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq)

### Planned Future Roadmap Enhancements:
- 📱 **Native Mobile App (React Native)**: Dedicated iOS and Android mobile apps for doctors on rounds.
- 🧪 **ICD-10 Diagnostic Auto-Coding**: Automatic mapping of clinical diagnoses to international ICD-10 medical billing codes.
- 💊 **Drug-Drug Interaction Database Integration**: Full integration with National Drug Code (NDC) interaction databases for real-time allergy alerts.
- 📊 **Advanced Analytics Dashboard**: Multi-clinic operational analytics, patient demographic charts, and revenue reporting.

---

# Day 30 Summary

On **Day 30**, we completed **Phase 4** and successfully launched **ScriptIQ**. We built the In-House Pharmacy POS workspace with 80mm thermal receipt printing and UPI QR generation, created standalone official receipt view pages (`/receipt/:orderId`), built custom PDF letterhead settings APIs, and achieved an **87% memory reduction** (~70 MB RAM footprint) on our backend server. Finally, we deployed the frontend onto Vercel, the backend onto Render, and published the production codebase to GitHub ([https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq)).

---

# 🎓 30-Day Agentic AI Training Program Summary & Reflection

Over the past 30 days of **TRCS102 – Agentic AI Training**, I have progressed from Python fundamentals and data structures to building complex, autonomous, multi-agent AI platforms:

- **Days 1–7:** Python Fundamentals, Memory Architecture, Bitwise Operations, and MVC Design Patterns.
- **Days 8–14:** Advanced OOP, Design Patterns, Data Analysis with Pandas & NumPy, SQLite, and PyMongo.
- **Days 15–20:** Generative AI Fundamentals, Google GenAI SDK, Prompt Engineering, ElevenLabs Voice AI, and Streamlit interfaces.
- **Days 21–24:** DelegatAI Voice Task Delegation Platform with ElevenLabs Telephony and MongoDB Atlas.
- **Days 25–26:** Flask Web Microservices, Google Cloud Firestore NoSQL, and Deployment Evolution (Bare-Metal ➔ VMs ➔ Docker ➔ Kubernetes).
- **Days 27–30:** **ScriptIQ Capstone Platform** — Multi-agent clinical speech-to-prescription extraction, 3-pane React console, 3-tier PDF password encryption, dual-port Gmail SMTP, Web Push notifications, Pharmacy POS billing, and dual-platform Vercel + Render cloud deployment.

---

# 📌 Key Takeaways

- Pharmacy POS workspace integrates 1-Click `⚡ Load Recent Prescription`, 5% GST calculations, UPI QR codes, and 80mm thermal printing.
- `@media print` CSS rules isolate printing to thermal receipts without rendering surrounding web application navigation elements.
- Recommending 100% cloud Gemini Multimodal STT over local PyTorch/Whisper models reduced backend RAM by **87%** (down to ~70 MB).
- ScriptIQ frontend SPA is deployed live on Vercel ([https://scriptiq-sk.vercel.app](https://scriptiq-sk.vercel.app)).
- ScriptIQ backend API is deployed live on Render ([https://scriptiq-backend.onrender.com](https://scriptiq-backend.onrender.com)).
- Continued improvements and feature upgrades are actively maintained at [https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq).

---

# 📖 Revision Notes

✔ In-House Pharmacy POS Workspace (`ReceiptsManagementPage.tsx` & `PharmacyAgent`)

✔ Scoped 80mm Thermal Receipt Print Engine (`@media print`)

✔ Standalone Official Patient Receipt Page (`ReceiptViewPage.tsx` & `/receipt/:orderId`)

✔ PDF Letterhead Customizer API (`/api/settings/letterhead`) & Live Preview Engine

✔ Backend Cloud Memory Optimization (87% RAM Reduction, ~70 MB Footprint)

✔ Vercel Frontend SPA Deployment (`frontend/vercel.json`)

✔ Render Backend Web Service Blueprint (`backend/render.yaml`)

✔ Live GitHub Repository & Open Source License ([https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq))

✔ Complete 30-Day Agentic AI Training Program Capstone Release

---

# ❓ Interview Questions

### Q1. How does `ReceiptsManagementPage.tsx` achieve scoped 80mm thermal receipt printing?

**Answer:**

It uses `@media print` CSS rules to set `visibility: hidden` for all body elements while enforcing `visibility: visible`, fixed `width: 80mm`, and absolute positioning for the `#thermal-receipt` container when the browser's print dialog opens.

---

### Q2. How does `ReceiptViewPage.tsx` support automatic printing upon URL loading?

**Answer:**

It checks for the `?autoprint=true` URL query parameter on mount. Once receipt details are fetched successfully from the backend API, it automatically triggers `window.print()`.

---

### Q3. Why was local Whisper PyTorch STT replaced with Gemini Multimodal Audio API on Render?

**Answer:**

Local Whisper required loading PyTorch binaries and model weights, consuming ~550 MB – 1 GB+ RAM and exceeding Render's 512 MB Free tier limit. Switching to Gemini Cloud Audio API reduced memory consumption by **87%** down to **~70 MB RAM**.

---

### Q4. How does `frontend/vercel.json` ensure single-page application (SPA) client-side routing works on Vercel?

**Answer:**

It configures a rewrite rule mapping all request paths (`/(.*)`) to `/index.html`, allowing React Router to handle client-side URLs (`/console`, `/receipts`, `/settings`) without returning 404 errors.

---

### Q5. What build command and start command are configured in `backend/render.yaml` for Render deployment?

**Answer:**

Build command: `pip install -r requirements.txt`. Start command: `uvicorn server:app --host 0.0.0.0 --port $PORT`.

---

### Q6. What calculations are performed automatically in the POS billing cart?

**Answer:**

Itemized drug subtotal, 5% GST tax addition, dynamic discount deduction (0–50%), and final net bill total calculation.

---

### Q7. How does the POS billing workspace generate Indian UPI QR codes?

**Answer:**

It generates standard UPI payment strings (`upi://pay?pa=clinic@upi&pn=ScriptIQ&am=TOTAL`) rendered dynamically into QR code images using client-side SVG/Canvas libraries.

---

### Q8. Where can developers access the interactive Swagger API documentation for ScriptIQ?

**Answer:**

At the public Render backend URL endpoint: [https://scriptiq-backend.onrender.com/docs](https://scriptiq-backend.onrender.com/docs).

---

### Q9. What repository hosts the official source code for ScriptIQ?

**Answer:**

The public GitHub production repository located at [https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq).

---

### Q10. What is the overall significance of completing the ScriptIQ capstone project?

**Answer:**

ScriptIQ demonstrates a complete end-to-end production AI platform—combining speech recognition, LLM tool-use reasoning, PDF generation, security encryption, multi-channel delivery, POS billing, and dual-platform cloud deployment into a unified, high-performance healthcare solution.

---

# 🎯 Future Roadmap & Beyond Day 30

- Expand ICD-10 diagnostic auto-coding and NDC drug interaction alerts.
- Develop dedicated iOS and Android mobile companion applications in React Native.
- Maintain continuous feature releases on GitHub ([https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq)).

---

# ✅ Today's Progress Checklist

- [x] Built In-House Pharmacy POS workspace with 5% GST, discounts, and UPI QR codes.
- [x] Implemented isolated 80mm thermal receipt printing (`@media print`).
- [x] Created standalone Official Receipt view page (`ReceiptViewPage.tsx` / `/receipt/:orderId`).
- [x] Built PDF letterhead customizer API (`/api/settings/letterhead`) and live preview.
- [x] Executed backend memory optimization (87% RAM reduction down to ~70 MB).
- [x] Deployed React SPA frontend onto Vercel ([https://scriptiq-sk.vercel.app](https://scriptiq-sk.vercel.app)).
- [x] Deployed FastAPI backend onto Render ([https://scriptiq-backend.onrender.com](https://scriptiq-backend.onrender.com)).
- [x] Published official repository to GitHub ([https://github.com/Saksham3736/scriptiq](https://github.com/Saksham3736/scriptiq)).
- [x] Completed 30-Day Agentic AI Training Program capstone release.

---

# 📋 Day 30 Completion Status & Program Final Review

| Category | Status |
|----------|--------|
| Theory Covered | ✅ Completed |
| Practical Demonstrations | ✅ Completed |
| Pharmacy POS & UPI QR Generator | ✅ Completed |
| 80mm Thermal Printing Engine | ✅ Completed |
| Standalone Official Receipt View | ✅ Completed |
| Letterhead Customizer Suite | ✅ Completed |
| Render Memory Optimization (87% Reduction) | ✅ Completed |
| Vercel Frontend SPA Deployment | ✅ Completed |
| Render Backend Web Service Deployment | ✅ Completed |
| GitHub Repository Published | ✅ Completed |
| Revision Notes Prepared | ✅ Completed |
| Interview Questions Prepared | ✅ Completed |
| Personal Reflection Written | ✅ Completed |
| 30-Day Training Diary Completed | ✅ Successfully Finished |

---

### **Maintained By:** Saksham Kumar  
### **Training Program:** TRCS102 – Agentic AI Training  
### **Day:** 30  
### **Status:** 🎓 Capstone Completed & Live in Production!
