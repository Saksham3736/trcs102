---
title: Introduction & Agentic AI Fundamentals
date: 2026-06-25
tags: Agentic AI, Setup, Python, Overview
summary: Introduction to the TRCS102 training and foundational concepts of Agentic AI. Set up Python environment and packages.
---
# Day 1: Introduction & Agentic AI Fundamentals

Welcome to Day 1 of the **TRCS102 Agentic AI Training** at **Auribises Technologies Pvt. Ltd.** Today's focus is on setting up our development environment and understanding the core shift from standard chatbots to autonomous agents.

---

## 💡 What is Agentic AI?

Standard LLMs are passive: they receive a prompt and output a response. **Agentic AI** represents a paradigm shift where models are given:
1. **Autonomy:** The ability to decide on a course of action.
2. **Tools:** Access to external APIs, calculators, search engines, and databases.
3. **Planning:** Ability to decompose complex goals into smaller sub-tasks.
4. **Memory:** Short-term (in-context) and long-term (vector databases) storage.

> [!NOTE]
> Agentic AI moves the LLM from a "thinking engine" to an "actuator" that interacts with the real world.

---

## 🛠️ Environment Setup

To build agents, we need a robust Python workspace. Below is the step-by-step setup we completed today.

### Setup Progress
- [x] Install Python 3.11+
- [x] Initialize virtual environment
- [x] Configure standard libraries and packages
- [ ] Connect to external LLM providers (API keys)

### 1. Creating the Virtual Environment
First, let's open the terminal and create a isolated Python environment to avoid version conflicts:

```bash
# Navigate to workspace
cd TRCS102-Diary

# Create virtual environment
python -m venv .venv

# Activate the virtual environment
# On Windows (PowerShell):
.venv\Scripts\Activate.ps1
# On Linux/macOS:
source .venv/bin/activate
```

### 2. Installing Core Packages
We install key libraries for agentic workflows:

```bash
pip install --upgrade pip
pip install openai langchain-core langchain-community python-dotenv
```

---

## 💻 Writing Our First Script

Here is the simple script we wrote to verify our OpenAI client configuration and retrieve response headers:

```python
import os
from openai import OpenAI
from dotenv import load_dotenv

# Load API keys from environment file
load_dotenv()

client = OpenAI(
    api_key=os.environ.get("OPENAI_API_KEY")
)

def query_simple_llm(prompt: str) -> str:
    """Sends a basic prompt to GPT-4o-mini and returns the content."""
    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        return response.choices[0].message.content
    except Exception as e:
        return f"An error occurred: {str(e)}"

if __name__ == "__main__":
    test_prompt = "Define 'Agentic AI' in one concise sentence."
    print(f"Prompt: {test_prompt}")
    print(f"Response: {query_simple_llm(test_prompt)}")
```

---

## 📊 Package Matrix

The table below lists the libraries installed and their primary functions in our architecture:

| Library | Primary Use-Case | Category |
| :--- | :--- | :--- |
| `openai` | Accessing base models and embeddings | LLM Gateway |
| `langchain-core` | Interface for building runnables and prompt templates | Orchestration |
| `langchain-community` | Integrations with third-party systems | Integrations |
| `python-dotenv` | Loading sensitive API keys from `.env` | Configuration |

---

## 🎯 Key Takeaways

1. **Agent Loop:** The basic loop is **Observe ➔ Think ➔ Act ➔ Repeat**.
2. **Deterministic vs. Stochastic:** Balancing hard-coded rules (Python) with LLM flexibility.
3. **Environment Security:** Always store API credentials in a `.env` file; never hard-code them in scripts.
