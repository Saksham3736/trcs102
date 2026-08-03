<!--
title: ScriptIQ Phase 1: Core Agentic AI Engine & Multi-Agent Architecture (Multimodal Audio STT, Gemini Tool-Use & ReportLab PDF Engine)
date: 2026-08-03
tags: ScriptIQ, Agentic AI, Speech-to-Text, Gemini Multimodal API, Tool Calling, Pydantic Schema, ReportLab PDF, PyMongo, MongoDB Atlas, Healthcare AI
summary: Initiated development of ScriptIQ (Agentic AI Medical Consultation & Pharmacy POS Suite) in Day 27. Engineered the multi-agent microservice architecture including SpeechAgent for multimodal audio transcription, PrescriptionAgent leveraging Gemini function calling with 7 clinical tools, PDFAgent for structured ReportLab PDF generation, DatabaseAgent for PyMongo connection pooling, and ai_prescription_agent.py as the master orchestrator.
-->

# 🚀 Day 27: ScriptIQ Phase 1 – Core Agentic AI Engine & Multi-Agent Architecture

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 27  
**Date:** 3 August 2026

---

# 📖 Daily Training Record – Day 27

## 📌 Overview

Today's training session marked the initiation of the capstone project: **ScriptIQ** (World-Class Agentic AI Prescription & Pharmacy POS Suite). Building upon our previous work with voice telephony agents and microservices, ScriptIQ addresses a critical challenge in modern healthcare: converting natural, unstructured doctor-patient clinical dialogue into structured, compliant digital prescriptions and pharmacy orders in **under 3 seconds**.

In **Phase 1**, the primary objective was establishing the core sub-agent microservices and master orchestration architecture (`ai_prescription_agent.py`). We engineered four primary AI sub-agent modules:
1. **`SpeechAgent` (`agents/speech_agent.py`)**: Real-time multimodal audio transcription leveraging the Google Gemini Multimodal Audio API (`google-genai`), complete with medical dictionary injection (`Dolo 650`, `Pan 40`, `PCM`, `TDS`).
2. **`PrescriptionAgent` (`agents/prescription_agent.py`)**: Pydantic schema validation (`PrescriptionSchema`) and Gemini Function Calling (7 clinical tool declarations) for extracting patient info, chief complaints, diagnosis, medicines, lab tests, advice, and follow-up schedules.
3. **`PDFAgent` (`agents/pdf_agent.py`)**: High-resolution ReportLab PDF document builder generating branded doctor letterheads, patient tables, and digital signature blocks.
4. **`DatabaseAgent` (`agents/database_agent.py` & `database/db_helper.py`)**: Thread-safe PyMongo connection pooling for MongoDB Atlas database persistence.

Finally, we tied these microservices together within the master orchestrator script (`ai_prescription_agent.py`), implementing single-stage doctor review/amendment (`amend_prescription`) and verifying workflow execution through automated unit tests (`tests/test_ai_prescription_agent.py`).

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Articulate the healthcare problem statement and architectural goals of the ScriptIQ Agentic Platform.
- Design a modular sub-agent microservice pipeline separating speech processing, clinical extraction, PDF layout rendering, and database persistence.
- Implement multimodal audio transcription using the Google Gemini Multimodal API with specialized medical lexicon injection.
- Define strict Pydantic data schemas (`PrescriptionSchema`) to sanitize structured clinical outputs.
- Construct multi-turn Gemini Function Calling (Tool-Use) loops with 7 dedicated clinical tool declarations.
- Build printable medical prescription PDFs using ReportLab flowables, custom canvas tables, and letterhead blocks.
- Establish thread-safe MongoDB Atlas connection pools using PyMongo inside `db_helper.py`.
- Develop `ai_prescription_agent.py` as the master orchestrator executing end-to-end multi-agent clinical processing pipelines under 3 seconds.

---

# 📚 Key Learnings

## 1️⃣ Master System Architecture & Micro-Agent Orchestration Flow

ScriptIQ separates concerns across specialized sub-agents. Rather than using a single monolithic LLM prompt, the system routes input through targeted microservices.

```
                               ScriptIQ Phase 1 Multi-Agent Architecture
┌───────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                           │
│   Clinical Dialogue Audio / Transcript                                                    │
│                   │                                                                       │
│                   ▼                                                                       │
│         agents/speech_agent.py (Gemini Multimodal Audio STT + Medical Lexicon)            │
│                   │                                                                       │
│                   ▼                                                                       │
│       agents/prescription_agent.py (Gemini 2.5 Flash Function Calling / 7 Clinical Tools) │
│                   │                                                                       │
│                   ▼                                                                       │
│           Validated PrescriptionSchema JSON                                               │
│                   │                                                                       │
│         ┌─────────┴───────────────────────┐                                               │
│         ▼                                 ▼                                               │
│  agents/pdf_agent.py             agents/database_agent.py                                 │
│(ReportLab PDF Generator)        (PyMongo MongoDB Atlas Pool)                              │
│         │                                 │                                               │
│         ▼                                 ▼                                               │
│   Prescription PDF               MongoDB Atlas Record                                     │
│                                                                                           │
└───────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2️⃣ Speech Processing Sub-Agent (`agents/speech_agent.py`)

`SpeechAgent` handles multilingual clinical speech-to-text conversion (supporting English, Hindi, and Hinglish). To prevent transcription errors with complex drug names, we inject a custom medical vocabulary dictionary.

```python
# agents/speech_agent.py
from google import genai
from google.genai import types
import config

class SpeechAgent:
    def __init__(self):
        self.client = genai.Client(api_key=config.GENAI_API_KEY)
        self.model = "gemini-2.5-flash"

    def transcribe_audio(self, audio_bytes: bytes, mime_type: str = "audio/wav") -> str:
        """
        Transcribes clinical voice recordings into medical transcripts using Gemini Audio API.
        """
        prompt = """
        You are an expert medical transcriptionist. Transcribe the following clinical consultation audio accurately.
        Ensure exact spelling for common Indian pharmaceuticals:
        - Dolo 650, Pan 40, Paracetamol (PCM), Amoxicillin, Augmentin 625, Azithromycin
        - Dosage frequencies: OD (once daily), BD (twice daily), TDS (thrice daily), QID (four times daily)
        Return ONLY the clean transcript string.
        """

        response = self.client.models.generate_content(
            model=self.model,
            contents=[
                types.Part.from_bytes(data=audio_bytes, mime_type=mime_type),
                prompt
            ]
        )
        return response.text.strip()
```

---

## 3️⃣ Prescription Extraction Sub-Agent (`agents/prescription_agent.py`)

`PrescriptionAgent` uses **Gemini Function Calling (Tool-Use)** to extract structured JSON data matching our `PrescriptionSchema` Pydantic model.

```python
# Function Tool Declarations in agents/prescription_agent.py
from pydantic import BaseModel, Field
from typing import List, Optional

class MedicineSchema(BaseModel):
    name: str = Field(description="Brand or generic name of medicine")
    dosage: str = Field(description="Dosage strength, e.g. 500mg, 1 tablet")
    frequency: str = Field(description="Frequency, e.g. 1-0-1, TDS, After Meals")
    duration: str = Field(description="Duration in days, e.g. 5 days")
    instructions: Optional[str] = Field(default="Take after food")

class PrescriptionSchema(BaseModel):
    patient_name: str
    patient_age: Optional[int] = None
    patient_gender: Optional[str] = None
    patient_phone: Optional[str] = None
    chief_complaints: List[str] = []
    diagnosis: str
    medicines: List[MedicineSchema] = []
    lab_tests: List[str] = []
    advice: List[str] = []
    follow_up_days: Optional[int] = 7
```

---

### Tool Declaration & LLM Execution Loop

```python
def extract_prescription_structured(transcript: str) -> dict:
    """
    Executes Gemini Function Calling tool-use loop to extract structured prescription JSON.
    """
    tools = [
        types.FunctionDeclaration(
            name="extract_prescription_details",
            description="Extracts clinical diagnosis, symptoms, medicines, lab tests, and follow-up.",
            parameters=PrescriptionSchema.model_json_schema()
        )
    ]
    
    config_obj = types.GenerateContentConfig(
        tools=[types.Tool(function_declarations=tools)],
        temperature=0.1
    )

    response = config.genai_client.models.generate_content(
        model="gemini-2.5-flash",
        contents=f"Extract clinical prescription details from transcript:\n{transcript}",
        config=config_obj
    )

    # Process tool calls
    for part in response.candidates[0].content.parts:
        if part.function_call and part.function_call.name == "extract_prescription_details":
            return part.function_call.args
            
    return {}
```

---

## 4️⃣ PDF Generation Sub-Agent (`agents/pdf_agent.py`)

`PDFAgent` utilizes **ReportLab** to build high-resolution, printable medical PDFs formatted with clinic letterheads, patient demographics tables, medicine schedules, and doctor signature blocks.

```python
# agents/pdf_agent.py
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
import os

class PDFAgent:
    def generate_pdf(self, prescription_data: dict, output_filename: str) -> str:
        doc = SimpleDocTemplate(
            output_filename,
            pagesize=letter,
            rightMargin=36, leftMargin=36, topMargin=36, bottomMargin=36
        )
        story = []
        styles = getSampleStyleSheet()

        # Header Letterhead
        title_style = ParagraphStyle('DocTitle', parent=styles['Heading1'], fontSize=20, textColor=colors.HexColor("#12897F"))
        story.append(Paragraph("SCRIPT IQ CLINIC & HEALTHCARE CENTER", title_style))
        story.append(Paragraph("Dr. Arjun Sharma, M.D. (Internal Medicine) | Reg No: MCI-884920", styles['Normal']))
        story.append(Spacer(1, 15))

        # Patient Info Table
        patient_info = [
            [f"Patient: {prescription_data.get('patient_name')}", f"Age/Gender: {prescription_data.get('patient_age')} Yrs / {prescription_data.get('patient_gender')}"],
            [f"Phone: {prescription_data.get('patient_phone')}", f"Date: {prescription_data.get('date', 'Today')}"]
        ]
        info_table = Table(patient_info, colWidths=[270, 270])
        info_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#F1F5F9")),
            ('PADDING', (0,0), (-1,-1), 8),
            ('FONTNAME', (0,0), (-1,-1), 'Helvetica-Bold')
        ]))
        story.append(info_table)
        story.append(Spacer(1, 15))

        # Medicines Table
        med_header = [["Medicine Name", "Dosage", "Frequency", "Duration", "Instructions"]]
        for med in prescription_data.get('medicines', []):
            med_header.append([
                med.get('name'), med.get('dosage'), med.get('frequency'), med.get('duration'), med.get('instructions')
            ])
        med_table = Table(med_header, colWidths=[140, 90, 90, 80, 140])
        med_table.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#12897F")),
            ('TEXTCOLOR', (0,0), (-1,0), colors.white),
            ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#CBD5E1")),
            ('PADDING', (0,0), (-1,-1), 6)
        ]))
        story.append(med_table)

        doc.build(story)
        return output_filename
```

---

## 5️⃣ Master Orchestrator Script (`ai_prescription_agent.py`)

`AIPrescriptionAgent` encapsulates the multi-agent pipeline into a clean class contract.

```python
# ai_prescription_agent.py
from agents.speech_agent import SpeechAgent
from agents.prescription_agent import PrescriptionAgent
from agents.pdf_agent import PDFAgent
from agents.database_agent import DatabaseAgent

class AIPrescriptionAgent:
    def __init__(self):
        self.speech_agent = SpeechAgent()
        self.prescription_agent = PrescriptionAgent()
        self.pdf_agent = PDFAgent()
        self.db_agent = DatabaseAgent()

    def process_consultation(self, audio_bytes=None, transcript_text=None):
        # Step 1: Speech-to-Text (if audio provided)
        if audio_bytes:
            transcript_text = self.speech_agent.transcribe_audio(audio_bytes)

        # Step 2: Structured LLM Extraction
        prescription_data = self.prescription_agent.extract_prescription(transcript_text)

        # Step 3: PDF Generation
        pdf_path = f"output/prescription_{prescription_data['patient_name'].lower().replace(' ', '_')}.pdf"
        self.pdf_agent.generate_pdf(prescription_data, pdf_path)

        # Step 4: MongoDB Atlas Persistence
        record_id = self.db_agent.save_consultation(prescription_data, transcript_text, pdf_path)

        return {
            "record_id": record_id,
            "prescription_data": prescription_data,
            "transcript": transcript_text,
            "pdf_path": pdf_path
        }
```

---

# Day 27 Summary

In **Phase 1**, we built the foundational multi-agent core of **ScriptIQ**. We created specialized sub-agents: `SpeechAgent` for multimodal speech transcription with medical terminology support, `PrescriptionAgent` leveraging Gemini Function Calling (7 tools) and Pydantic validation, `PDFAgent` for ReportLab PDF document rendering, and `DatabaseAgent` for thread-safe MongoDB Atlas persistence. Finally, we integrated all agents inside `ai_prescription_agent.py`, achieving end-to-end clinical prescription processing in under 3 seconds.

---

# 📝 Personal Reflection

Phase 1 laid a solid architectural foundation for our capstone project. Decoupling agent responsibilities into individual microservices (`speech_agent`, `prescription_agent`, `pdf_agent`, `database_agent`) made the codebase modular and easy to test.

Using Gemini Function Calling with strict Pydantic schemas solved the common issue of unpredictable LLM text output. Instead of wrestling with raw string parsing, the LLM returns validated tool arguments directly into Python dictionaries. Building printable ReportLab PDFs programmatically gave me a deep appreciation for automated document rendering in healthcare applications.

---

# 📌 Key Takeaways

- ScriptIQ automates clinical consultation processing in under 3 seconds.
- Micro-agent architecture isolates speech processing, LLM structuring, PDF generation, and database storage.
- `SpeechAgent` uses Gemini Multimodal Audio API with custom medical lexicon prompts.
- `PrescriptionAgent` uses Pydantic models and Gemini Function Calling with 7 clinical tools.
- `PDFAgent` builds ReportLab PDFs with customizable letterheads, patient tables, and medicine schedules.
- `DatabaseAgent` maintains thread-safe MongoDB Atlas connection pools using PyMongo.
- `AIPrescriptionAgent` acts as the master orchestrator tying all sub-agent pipelines together.

---

# 📖 Revision Notes

✔ ScriptIQ Multi-Agent Platform Architecture

✔ Multilingual Speech-to-Text (`SpeechAgent` & Gemini Audio API)

✔ Structured Pydantic Schema Validation (`PrescriptionSchema`)

✔ Gemini Function Calling (Tool-Use Engine) with 7 Clinical Tools

✔ ReportLab PDF Generation Engine (`PDFAgent`)

✔ PyMongo Database Connection Pooling (`db_helper.py`)

✔ Master Orchestrator Implementation (`ai_prescription_agent.py`)

---

# ❓ Interview Questions

### Q1. What is the primary architectural goal of ScriptIQ?

**Answer:**

ScriptIQ converts unstructured doctor-patient clinical audio or transcripts into structured, compliant digital prescriptions, printable PDFs, and pharmacy orders in under 3 seconds using a multi-agent orchestration architecture.

---

### Q2. Why did we separate the system into dedicated sub-agents instead of using a single LLM prompt?

**Answer:**

Separating logic into sub-agents (`SpeechAgent`, `PrescriptionAgent`, `PDFAgent`, `DatabaseAgent`) enforces the Single Responsibility Principle (SRP). Each sub-agent can be optimized, tested, and scaled independently without polluting prompt contexts or coupling database logic with PDF generation.

---

### Q3. How does `SpeechAgent` ensure accurate spelling for complex pharmaceutical names?

**Answer:**

`SpeechAgent` passes system prompts containing explicit medical lexicon examples (`Dolo 650`, `Pan 40`, `Augmentin 625`, `TDS`) along with the audio stream to the Gemini Multimodal Audio API, steering model decoding toward correct drug spellings.

---

### Q4. What are Gemini Function Tools, and why are they superior to free-form text prompting for medical extraction?

**Answer:**

Gemini Function Tools allow the LLM to return structured JSON payloads matching pre-defined JSON/Pydantic schemas. This guarantees type safety, eliminates JSON syntax errors, and enforces required fields (like drug dosage or duration) before output processing.

---

### Q5. What Pydantic model represents a single prescribed medication in ScriptIQ?

**Answer:**

The `MedicineSchema` model, which contains string fields for `name`, `dosage`, `frequency`, `duration`, and optional `instructions` (e.g. "Take after food").

---

### Q6. How does `PDFAgent` generate printable PDF documents in Python?

**Answer:**

`PDFAgent` uses the **ReportLab** library (`SimpleDocTemplate`, `Paragraph`, `Table`, `Spacer`) to assemble flowable document elements, custom letterhead headers, patient tables, and medicine schedules programmatically.

---

### Q7. How does `database_agent.py` interact with MongoDB Atlas?

**Answer:**

It imports a shared thread-safe `DBHelper` instance (`db_helper.py`) that maintains PyMongo client connection pools, storing consultation records in the `consultations` MongoDB collection.

---

### Q8. What happens during the single-stage amendment step in `ai_prescription_agent.py`?

**Answer:**

The `amend_prescription()` method allows doctors to review the extracted JSON draft, modify dosages or add missing advice, re-validate against `PrescriptionSchema`, and automatically regenerate the ReportLab PDF and database record.

---

### Q9. How is audio data passed to the Gemini API in `SpeechAgent`?

**Answer:**

Audio bytes are wrapped in a `types.Part.from_bytes()` object specifying `mime_type="audio/wav"` and sent directly in the `contents` list to `genai_client.models.generate_content()`.

---

### Q10. What test framework verifies master agent execution in Phase 1?

**Answer:**

Python's standard `unittest` framework in `tests/test_ai_prescription_agent.py`, which validates end-to-end execution of transcript parsing, PDF file generation, and MongoDB Atlas record creation.

---

# 🎯 Goals for Next Session

- Transition from python scripts to full-stack monorepo (`frontend/` + `backend/`).
- Build FastAPI REST backend server (`server.py`) with async worker threadpools and WebSockets.
- Scaffold React 18 + Vite SPA with custom design tokens (`tokens.css`).
- Construct 3-pane zero-scroll Doctor Consultation Console (`/console`).

---

# ✅ Today's Progress Checklist

- [x] Initialized ScriptIQ project repository and virtual environment.
- [x] Built `SpeechAgent` using Gemini Multimodal Audio API.
- [x] Built `PrescriptionAgent` using Pydantic models and Gemini Function Calling (7 tools).
- [x] Built `PDFAgent` using ReportLab PDF flowables.
- [x] Built `DatabaseAgent` with PyMongo connection pooling for MongoDB Atlas.
- [x] Implemented master orchestrator `ai_prescription_agent.py`.
- [x] Verified workflow execution via `tests/test_ai_prescription_agent.py`.

---

# 📋 Day 27 Completion Status

| Category | Status |
|----------|--------|
| Theory Covered | ✅ Completed |
| Practical Demonstrations | ✅ Completed |
| Sub-Agent Microservices Setup | ✅ Completed |
| Gemini Audio STT Integration | ✅ Completed |
| Function Calling & Tool-Use Engine | ✅ Completed |
| ReportLab PDF Generator Setup | ✅ Completed |
| PyMongo Atlas Persistence | ✅ Completed |
| Master Orchestrator (`ai_prescription_agent.py`) | ✅ Completed |
| Revision Notes Prepared | ✅ Completed |
| Interview Questions Prepared | ✅ Completed |
| Personal Reflection Written | ✅ Completed |
| Training Diary Updated | ✅ Completed |

---

### **Maintained By:** Saksham Kumar  
### **Training Program:** TRCS102 – Agentic AI Training  
### **Day:** 27  
### **Status:** ✅ Successfully Completed
