<!--
title: Building Conversational AI with ElevenLabs & Streamlit
date: 2026-07-21
tags: ElevenLabs, Conversational AI, Streamlit, API Integration, Guardrails, Knowledge Base, Twilio, Python, Agentic AI, Session State
summary: Explored the ElevenLabs Conversational AI platform, understood Guardrails and Knowledge Base concepts, created and configured an AI agent, generated API credentials, and built a Streamlit-based chat interface that communicates with an ElevenLabs agent using the Python SDK and callback functions.
-->

# 🚀 Day 20: Building Conversational AI with ElevenLabs & Streamlit

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 20  
**Date:** 21 July 2026

---

# 📖 Daily Training Record – Day 20

## 📌 Overview

Today's training session introduced **ElevenLabs Conversational AI**, a platform that enables developers to build intelligent conversational agents capable of interacting with users through natural text and voice conversations. Unlike traditional chatbots where developers manage every aspect of conversation handling within their Python code, ElevenLabs provides a cloud-hosted platform where agents are configured with custom instructions, safety rules, and documentation.

The instructor began by explaining the fundamental concepts behind the ElevenLabs ecosystem, starting with **Guardrails**, which are safety thresholds that prevent the AI from performing operations outside predefined limits. We also explored the **Knowledge Base** feature, which allows developers to upload project documentation so that the agent can answer queries using organization-specific information.

After understanding these concepts, we explored the **ElevenLabs Developer Dashboard**, created our own conversational agent, generated an **API Key**, and noted the **Agent ID**. The instructor also briefly introduced **Twilio** integration, which allows AI agents to communicate with users over standard telephone connections.

The practical portion of the session involved building a **Streamlit chat interface** that communicates with the ElevenLabs agent using its Python SDK. We learned how to initialize the client, configure text-only conversations, manage session state, register callback functions, and handle user messages. The instructor demonstrated two implementations: a basic version (`session20.py`) and a simplified standalone configuration (`session20A.py`).

Overall, today's session combined **Conversational AI**, **API Integration**, **Streamlit Development**, **Session Management**, and **Callback Functions** into a practical development workflow that reflects the architecture used in modern AI assistants and enterprise software.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the purpose and capabilities of ElevenLabs Conversational AI.
- Define what Guardrails are and why they are important.
- Understand how a Knowledge Base enhances AI agent responses.
- Explore the ElevenLabs Developer Dashboard.
- Create and configure a Conversational AI agent.
- Generate and manage API Keys for secure communication.
- Understand the purpose of Agent IDs.
- Learn how Twilio phone numbers can be integrated with AI agents.
- Build a Streamlit-based chat interface.
- Configure conversations in Text-Only Mode using `ConversationInitiationData`.
- Initialize the ElevenLabs Python SDK.
- Understand callback functions for handling AI responses.
- Manage conversation history using Streamlit Session State.
- Send user prompts to the AI agent.
- Receive and display AI-generated responses.

---

# 📚 Key Learnings

## 1️⃣ Introduction to ElevenLabs Conversational AI

The first topic covered during today's session was **ElevenLabs Conversational AI**.

ElevenLabs is a cloud platform that enables developers to build and deploy intelligent conversational agents.

Instead of implementing every conversational feature from scratch inside a Python script,

developers can create an AI agent on the ElevenLabs platform,

configure its behavior,

provide additional knowledge,

define safety rules,

and then communicate with that agent programmatically from their applications.

---

## Why Use ElevenLabs?

Building a complete conversational AI system from scratch requires developers to manage multiple components.

These include:

- Prompt Engineering
- LLM Communication
- Context Management
- Session Handling
- Memory
- API Authentication
- Response Processing
- Safety Controls

ElevenLabs provides these capabilities through a managed platform.

This allows developers to focus on building their applications

instead of recreating the entire conversational infrastructure.

---

## Traditional Chatbot vs ElevenLabs Architecture

Traditional chatbot architecture:

```
User
↓
Application Logic
↓
LLM API
↓
Response
```

ElevenLabs architecture:

```
User
↓
Streamlit Application
↓
ElevenLabs Agent
↓
Instructions
↓
Knowledge Base
↓
Guardrails
↓
LLM
↓
Response
```

The second architecture is significantly more modular

because most conversational capabilities are managed by the ElevenLabs platform.

---

## Components of an ElevenLabs Agent

During the exploration of the ElevenLabs platform,

the instructor introduced several important components.

These include:

- Agent Instructions
- Knowledge Base
- Guardrails
- Conversation Settings
- API Key
- Agent ID
- Voice Configuration
- External Integrations

Each component contributes to making the AI agent more reliable and suitable for production environments.

---

## Real-World Applications

Conversational AI platforms like ElevenLabs are widely used in:

- AI Customer Support
- Hospital Virtual Assistants
- Banking Chatbots
- Appointment Booking Systems
- Educational Tutors
- Technical Support Systems
- HR Automation
- Business Helpdesks
- Sales Assistants
- Voice-based AI Receptionists

These applications demonstrate how hosted conversational AI platforms can simplify the development of intelligent software systems.

---

> [!NOTE]
> Unlike traditional chatbot development where developers manage every aspect of the conversation manually, platforms such as **ElevenLabs** provide a managed conversational ecosystem that includes agent configuration, conversation management, safety mechanisms, knowledge integration, and API connectivity. This allows developers to build sophisticated AI-powered applications much more efficiently while focusing on application logic rather than low-level conversational infrastructure.

---

## 2️⃣ Understanding AI Guardrails

After introducing the ElevenLabs platform,

the instructor explained one of the most important concepts in modern Conversational AI systems—**Guardrails**.

The instructor described Guardrails as a **threshold or limit beyond which the Large Language Model is not allowed to perform any action**.

---

## What are Guardrails?

Guardrails are predefined constraints that regulate the behaviour of an AI agent.

They determine:

- What questions the AI should answer.
- Which requests should be rejected.
- What type of information can be shared.
- Which actions require restrictions.

---

## Why Do We Need Guardrails?

Large Language Models are capable of answering questions on a wide variety of topics.

However,

in production environments,

organizations rarely want an AI assistant to answer **every possible question**.

For example,

a hospital chatbot should provide information about:

- Appointments
- Doctors
- Departments
- Medical Services

but it should **not** answer requests such as:

- Financial investment advice
- Illegal activities
- Harmful instructions
- Confidential internal information

Guardrails ensure that the AI remains focused on its intended purpose.

---

## Internal Working of Guardrails

Conceptually,

every user request passes through a validation layer before reaching the language model.

```
User Query
↓
Guardrails Check
↓
Allowed ?
├── Yes
│     ↓
│   LLM
│     ↓
│   Generate Response
│     ↓
│   User
│
└── No
      ↓
   Reject
      ↓
   Safe Response
```

Only requests that satisfy the predefined safety policies are forwarded to the AI model.

---

## Threshold Concept

The instructor described Guardrails as a **threshold**.

A threshold represents a boundary beyond which the AI system should not proceed.

```
Allowed Requests
─────────────────
Hospital Information
Doctor Availability
Appointment Booking
Patient Guidance

══════ Guardrail Threshold ══════

Restricted Requests
─────────────────
Unauthorized Data Access
Illegal Activities
Sensitive Operations
Out-of-Scope Questions
```

Whenever a user request crosses this predefined boundary,

the AI agent is instructed to refuse the request

or provide an alternative safe response.

---

## Benefits of Guardrails

Implementing Guardrails provides several advantages:

- Improves AI safety.
- Prevents harmful responses.
- Restricts out-of-domain conversations.
- Protects sensitive information.
- Maintains business policies.
- Increases reliability.
- Builds user trust.
- Reduces operational risks.

---

> [!IMPORTANT]
> **Guardrails** are one of the most important safety mechanisms in modern AI systems. They establish clear operational boundaries that determine what an AI agent can and cannot do. By validating user requests before they reach the Large Language Model, Guardrails improve security, maintain organizational policies, reduce the risk of inappropriate responses, and ensure that conversational AI systems remain safe, reliable, and focused on their intended purpose.

---

## 3️⃣ Understanding Knowledge Base

After learning about Guardrails,

the instructor introduced another important feature available in the ElevenLabs platform—the **Knowledge Base**.

The instructor explained that developers can upload documents related to their projects or organizations,

allowing the AI agent to answer questions using project-specific information

rather than relying only on its pre-trained knowledge.

---

## What is a Knowledge Base?

A **Knowledge Base** is a collection of documents, files, or reference materials that an AI agent can access while generating responses.

The uploaded content may include:

- Project Documentation
- User Manuals
- Company Policies
- FAQs
- Product Specifications
- Technical Documentation

---

## Why Do We Need a Knowledge Base?

Large Language Models are trained on publicly available information.

However,

they usually do **not** know private or project-specific data.

For example,

suppose a software company has developed a Hospital Management System.

The AI model naturally does **not** know:

- Internal project architecture
- API documentation
- Company workflows
- Custom business rules

Uploading these documents into the Knowledge Base

allows the AI assistant to answer questions related to the project

without requiring developers to include all this information inside every prompt.

---

## Internal Working

```
User Question
↓
AI Agent
↓
Search Knowledge Base
↓
Relevant Information Found
↓
Retrieve Context
↓
Large Language Model
↓
Generate Context-Aware Response
↓
User
```

Instead of relying solely on the language model's memory,

the AI first searches the uploaded documents

before generating a response.

---

## Knowledge Base vs Normal Prompting

Without a Knowledge Base:

```
User
↓
Prompt
↓
LLM
↓
General Knowledge
```

With a Knowledge Base:

```
User
↓
AI Agent
↓
Knowledge Base
↓
Relevant Context
↓
LLM
↓
Project-Specific Response
```

The second approach produces responses that are far more accurate for organization-specific applications.

---

## Benefits of Using a Knowledge Base

- Improves response accuracy.
- Enables project-specific conversations.
- Reduces prompt size.
- Makes AI responses more consistent.
- Simplifies maintenance.
- Supports enterprise-scale applications.

---

> [!IMPORTANT]
> A **Knowledge Base** extends the capabilities of a conversational AI system by providing access to project-specific or organization-specific information. Instead of depending only on the pre-trained knowledge of a Large Language Model, the AI retrieves relevant information from uploaded documents and incorporates that context into its responses. This approach significantly improves accuracy, consistency, and reliability in enterprise AI applications.

---

## 4️⃣ Exploring the ElevenLabs Developer Dashboard

After understanding the concepts of **Guardrails** and **Knowledge Base**,

the instructor guided us through the **ElevenLabs Developer Dashboard**.

---

## Purpose of the Developer Dashboard

The ElevenLabs Developer Dashboard acts as a centralized control panel for managing AI agents.

From this dashboard, developers can:

- Create new conversational agents.
- Configure agent instructions.
- Upload a Knowledge Base.
- Define Guardrails.
- Generate API Keys.
- View Agent IDs.
- Configure voice settings.
- Test conversations.
- Integrate third-party services.

---

## Creating a New AI Agent

The instructor demonstrated the process of creating a new conversational agent.

Steps:

1. Open the ElevenLabs Dashboard.
2. Navigate to the **Conversational AI** section.
3. Create a new agent.
4. Assign a name.
5. Configure the initial instructions.
6. Save the agent.

After creation,

the platform automatically generated a unique **Agent ID**.

---

## API Key Generation

To allow our Python application to communicate securely with ElevenLabs,

we generated an **API Key**.

An API Key acts as a secure authentication token.

Without this key,

the application cannot access the hosted AI agent.

```
Python Application
↓
API Key Authentication
↓
ElevenLabs Cloud
↓
AI Agent
```

> API Keys are sensitive credentials and should never be exposed publicly or committed to version control systems.

---

## Understanding the Agent ID

The **Agent ID** identifies the specific conversational agent that should process the request.

```python
agent_id = "agent_xxxxxxxxxxxxxxxxx"
```

Whenever the application starts a conversation,

this Agent ID tells the ElevenLabs platform exactly which AI agent should respond.

---

## API Key vs Agent ID

| Feature | API Key | Agent ID |
|---------|---------|----------|
| Purpose | Authenticates the developer | Identifies the AI agent |
| Usage | Secure communication | Select correct agent |
| Confidentiality | Must remain confidential | Can be referenced in code |
| Generation | Developer Settings | Agent creation |

Understanding this distinction is essential when integrating the ElevenLabs SDK.

---

## Twilio Integration

The instructor also briefly introduced **Twilio**,

a cloud communication platform that provides programmable communication services.

Within ElevenLabs,

Twilio can be connected to an AI agent

so that users interact with the assistant through a real phone number.

```
Customer
↓
Twilio Phone Number
↓
ElevenLabs AI Agent
↓
Generated Response
```

This architecture allows organizations to deploy AI-powered virtual receptionists

and customer support systems.

---

> [!IMPORTANT]
> The **ElevenLabs Developer Dashboard** is the primary interface for creating and managing conversational AI agents. It enables developers to configure agent behaviour, upload Knowledge Bases, define Guardrails, generate API credentials, and integrate communication services such as Twilio. During today's practical session, the dashboard played a central role in preparing the AI agent for integration with our Python Streamlit application.

---

## 5️⃣ Practical Task – Building a Streamlit Chat Interface

After exploring the ElevenLabs platform,

the instructor assigned our first hands-on practical task.

The objective was to build a **Streamlit-based web application** capable of communicating with an ElevenLabs Conversational AI Agent through the official Python SDK.

---

## Overall Architecture

The complete execution flow of today's application:

```
User
↓
Streamlit Web Interface
↓
Python Application
↓
ElevenLabs SDK
↓
API Authentication
↓
Hosted AI Agent
↓
LLM + Knowledge Base + Guardrails
↓
Generated Response
↓
Streamlit Interface
↓
User
```

---

## Technologies Used

- Python
- Streamlit
- ElevenLabs Python SDK
- Conversational AI API
- Callback Functions
- Session State

---

## Application Structure

```
Streamlit Application
│
├── Import Required Libraries
│
├── Initialize Variables
│
├── Configure Streamlit Page
│
├── Initialize ElevenLabs Client
│
├── Create Callback Functions
│
├── Configure Conversation (Text-Only)
│
├── Create Conversation Object
│
├── Manage Session State
│
├── Display Chat History
│
├── Accept User Input
│
└── Send Messages to Agent
```

Each component executes sequentially whenever the application starts.

---

> [!NOTE]
> In today's practical session, the Python application did **not** implement the intelligence of the AI itself. Instead, it acted as a communication layer between the Streamlit interface and the hosted ElevenLabs Conversational AI agent. All conversational reasoning, safety validation, and response generation were handled by the ElevenLabs platform, while the Streamlit application focused on user interaction and API communication.

---

## 6️⃣ Understanding the Classroom Code (session20.py)

After understanding the architecture,

the instructor began explaining the actual Python code.

---

## Classroom Code (session20.py)

```python
# Elvenlabs integration
import time
import streamlit as st
from elevenlabs.client import ElevenLabs
from elevenlabs.conversational_ai.conversation import (
    Conversation,
    ConversationInitiationData,
)

result = 'Sorry, I cannot help you'

st.set_page_config(page_title="ElevenLabs Agentic Chat")
st.title("Eleven Labs Agentic View")
st.subheader("Coverse with Eleven labs Agent") 


agent_id = 'agent_6701ky1gbps2fg7rgrybxne1y62g'
api_key = 'sk_485932fcf64dbfcb4b3939a6ba59f2034f28d4a6ae98b4b8'
client = ElevenLabs(api_key=api_key)




def get_response(response):
    st.markdown("CallBack Response Received:", response)   
    update_ui(response)

def update_ui(response):
    global result
    response = result
    if result:
        print("Result Captured:",True)



config = ConversationInitiationData(
    conversation_config_override={
        "conversation": {
            "text_only": True
        }
    }
)

if "conversation" not in st.session_state:
    st.session_state.conversation = Conversation(    
    client,
    agent_id,
    requires_auth=True,
    config=config,
    callback_agent_response = get_response
)
    st.session_state.conversation.start_session()



if 'messages' not in st.session_state:
        st.session_state.messages = []

for message in st.session_state.messages:
    with st.chat_message(message['role']):
        st.markdown(message['content'])


user_input = st.chat_input("Start your Conversation")


if user_input:
        
    message = {
        'role': 'user', 
        'content': user_input
    }

    st.session_state.messages.append(message)
        
    with st.chat_message(message['role']):
        st.markdown(message['content'])
        
    st.session_state.conversation.send_user_message(user_input)
```

---

## 7️⃣ Step-by-Step Code Explanation – Importing Libraries

The first section of the program imports all required libraries.

---

## Import 1 — `time`

```python
import time
```

The **time** module provides access to time-related functions.

In today's project,

it was originally intended for creating a **typing animation** effect.

Instead of displaying the entire AI response instantly,

characters would appear one by one.

```
Message
↓
Character
↓
Delay
↓
Character
↓
Delay
↓
Typing Effect
```

This improves user experience.

---

## Import 2 — `streamlit`

```python
import streamlit as st
```

This imports the **Streamlit** framework.

Streamlit is responsible for creating the graphical web interface.

Using `st`,

developers can create:

- Titles
- Buttons
- Text boxes
- Chat messages
- Status indicators

Example:

```python
st.title("ElevenLabs Chatbot")
```

Without Streamlit,

today's application would run only as a command-line program.

---

## Import 3 — ElevenLabs Client

```python
from elevenlabs.client import ElevenLabs
```

This statement imports the official ElevenLabs client.

The client acts as the communication gateway between our Python application and the ElevenLabs cloud platform.

```
Python Program
↓
ElevenLabs Client
↓
Cloud AI Platform
```

Every request sent to the hosted AI agent passes through this client.

---

## Import 4 — Conversation and ConversationInitiationData

```python
from elevenlabs.conversational_ai.conversation import (
    Conversation,
    ConversationInitiationData,
)
```

This import provides two important classes.

---

### `Conversation`

The `Conversation` class manages the complete communication session.

Its responsibilities include:

- Starting conversations
- Sending user messages
- Receiving AI responses
- Maintaining the active session
- Handling callbacks

```
User
↓
Conversation Object
↓
ElevenLabs Agent
```

---

### `ConversationInitiationData`

This class stores the configuration used when starting a new conversation.

During today's session,

it was used to configure the interaction in **Text-Only Mode**.

---

## Dependency Relationship

```
Application
│
├── time
│     └── Typing Animation
│
├── Streamlit
│     └── User Interface
│
└── ElevenLabs SDK
      │
      ├── Client
      ├── Conversation
      └── Configuration
```

Each library has a clearly defined responsibility.

---

> [!IMPORTANT]
> Although the import section is usually the shortest part of a Python program, it establishes the foundation of the entire application. Every imported library provides a specific capability—such as user interface creation, cloud communication, or conversation handling. Understanding the purpose of each import is essential for building, debugging, and maintaining professional AI applications.

---

## 8️⃣ Step-by-Step Code Explanation – Variable Initialization

After importing libraries,

the instructor initialized a default response variable.

---

## Classroom Code

```python
result = 'Sorry, I cannot help you'
```

---

## Purpose

This variable acts as a **fallback message**.

If the AI agent does not generate a response,

the application displays this default message.

```
AI Response ?
├── Yes
│     ↓
│   Display Response
│
└── No
      ↓
   Display Fallback
      ↓
   "Sorry, I cannot help you"
```

This prevents the application from displaying a blank screen

when the agent fails to respond.

---

## Why Use a Default Value?

In production applications,

network errors,

server timeouts,

or misconfigurations can prevent responses.

Having a default fallback ensures:

- Application does not crash.
- User always receives feedback.
- Better user experience.
- Easier debugging.

---

## 9️⃣ Step-by-Step Code Explanation – Streamlit Page Configuration

The instructor then configured the Streamlit page.

---

## Classroom Code

```python
st.set_page_config(page_title="ElevenLabs Agentic Chat")

st.title("Eleven Labs Agentic View")

st.subheader("Coverse with Eleven labs Agent") 
```

---

## `st.set_page_config()`

This function configures the browser page.

```
Browser
↓
Page Configuration
↓
Title
↓
ElevenLabs Agentic Chat
```

Users now see a professional browser title

instead of a generic Python application.

---

## `st.title()`

```python
st.title("Eleven Labs Agentic View")
```

This displays a large heading on the page.

```
Browser
↓
Title
↓
"Eleven Labs Agentic View"
```

---

## `st.subheader()`

```python
st.subheader("Coverse with Eleven labs Agent")
```

This displays a smaller heading below the title.

```
Browser
↓
Subheading
↓
"Coverse with Eleven labs Agent"
```

The user immediately understands the purpose of the page.

---

## 🔟 Step-by-Step Code Explanation – Client Initialization

The instructor then initialized the ElevenLabs client.

---

## Classroom Code

```python
agent_id = 'agent_6701ky1gbps2fg7rgrybxne1y62g'

api_key = 'sk_485932fcf64dbfcb4b3939a6ba59f2034f28d4a6ae98b4b8'

client = ElevenLabs(api_key=api_key)
```

---

## Step 1 — Setting the Agent ID

```python
agent_id = 'agent_6701ky1gbps2fg7rgrybxne1y62g'
```

This stores the unique identifier of the AI agent.

```
ElevenLabs Platform
↓
Multiple Agents
↓
Agent ID
↓
Selected Agent
```

The Agent ID tells the platform exactly which agent should handle the conversation.

---

## Step 2 — Setting the API Key

```python
api_key = 'sk_485932fcf64dbfcb4b3939a6ba59f2034f28d4a6ae98b4b8'
```

This stores the authentication token.

The API Key verifies that the request originates from an authorized developer.

> In production applications, API keys should be stored inside `.env` files and never hardcoded.

---

## Step 3 — Creating the ElevenLabs Client

```python
client = ElevenLabs(api_key=api_key)
```

This creates the communication gateway.

```
Python Application
↓
API Key
↓
ElevenLabs Client
↓
Authenticated Connection
↓
Ready for Conversation
```

Without an initialized client,

the application would have no way to communicate with ElevenLabs servers.

---

## Authentication Workflow

```
Python Application
↓
API Request
↓
API Key Attached
↓
ElevenLabs Server
↓
Authentication
├── Valid Key
│     ↓
│   Process Request
│
└── Invalid Key
      ↓
   Authentication Error
```

This mechanism ensures that only authorized applications can access the hosted AI services.

---

## 1️⃣1️⃣ Step-by-Step Code Explanation – Callback Functions

The instructor then created callback functions.

---

## What is a Callback Function?

A **Callback Function** is a function that is **not executed immediately**.

Instead,

it is registered with another component

and is automatically invoked whenever a specific event occurs.

---

## Traditional vs Event-Driven Programming

Traditional execution:

```
Instruction 1
↓
Instruction 2
↓
Instruction 3
↓
Program Ends
```

Event-driven execution:

```
Program Running
↓
Wait for Event
↓
Event Occurs
↓
Callback Function Executes
↓
Return to Waiting
```

---

## Classroom Code

```python
def get_response(response):
    st.markdown("CallBack Response Received:", response)   
    update_ui(response)
```

---

## Purpose

This function is called **automatically** whenever the AI agent generates a response.

```
AI Agent
↓
Response Generated
↓
SDK Detects Event
↓
get_response() Called
↓
Display Response
```

---

## Step-by-Step Working

### Step 1

The function receives the AI's response as a parameter.

```python
def get_response(response):
```

---

### Step 2

It displays a confirmation message.

```python
st.markdown("CallBack Response Received:", response)
```

---

### Step 3

It calls another function to update the interface.

```python
update_ui(response)
```

---

## Second Callback Function

```python
def update_ui(response):
    global result
    response = result
    if result:
        print("Result Captured:",True)
```

---

## Purpose

This function updates the global `result` variable

with the AI's response.

```
Response Received
↓
Global Variable Updated
↓
Result Captured
```

The `global` keyword allows the function to modify a variable defined outside its scope.

---

## Why Use Callbacks?

Instead of continuously checking whether the AI has responded,

the application simply registers a callback.

```
Register Callback
↓
AI Generates Response
↓
Callback Automatically Executes
```

The callback is invoked **only when needed**,

making the application far more efficient.

---

> [!NOTE]
> A callback function is a function that is registered to execute automatically when a specific event occurs. Instead of continuously checking for changes, the application reacts only when the event is triggered, making event handling more efficient, responsive, and scalable.

---

## 1️⃣2️⃣ Step-by-Step Code Explanation – Conversation Configuration

After creating callback functions,

the instructor configured how the conversation should operate.

---

## Classroom Code

```python
config = ConversationInitiationData(
    conversation_config_override={
        "conversation": {
            "text_only": True
        }
    }
)
```

---

## Step 1 — Creating the Configuration Dictionary

```python
"conversation": {
    "text_only": True
}
```

This tells the ElevenLabs platform that the conversation should be conducted entirely through text.

This means:

- No microphone input.
- No speech recognition.
- No voice synthesis.
- Only text messages.

---

## Step 2 — Creating the Configuration Object

```python
config = ConversationInitiationData(
    conversation_config_override={...}
)
```

This converts the dictionary into a structured configuration object.

```
Python Dictionary
↓
ConversationInitiationData
↓
Configuration Object
```

---

## Why Text-Only Mode?

For today's Streamlit application,

voice interaction was unnecessary.

```
Text-Only:

User
↓
Type Message
↓
AI Agent
↓
Generate Text
↓
User
```

```
Voice:

User
↓
Speak
↓
Speech Recognition
↓
AI Agent
↓
Generate Response
↓
Text-to-Speech
↓
Voice Output
```

Today's classroom implementation follows the first workflow.

---

## 1️⃣3️⃣ Step-by-Step Code Explanation – Creating the Conversation Object

This was the most important part of the application.

---

## Classroom Code

```python
if "conversation" not in st.session_state:
    st.session_state.conversation = Conversation(    
    client,
    agent_id,
    requires_auth=True,
    config=config,
    callback_agent_response = get_response
)
    st.session_state.conversation.start_session()
```

---

## Step 1 — Check Session State

```python
if "conversation" not in st.session_state:
```

This checks whether a conversation already exists.

```
Session State
↓
conversation key exists ?
├── Yes
│     ↓
│   Skip
│
└── No
      ↓
   Create New Conversation
```

Without this check,

Streamlit would create a new conversation on every page refresh.

---

## Step 2 — Create the Conversation Object

```python
st.session_state.conversation = Conversation(    
    client,
    agent_id,
    requires_auth=True,
    config=config,
    callback_agent_response = get_response
)
```

---

## Understanding Each Parameter

### `client`

The authenticated ElevenLabs client.

```
Application
↓
ElevenLabs Client
↓
Cloud Platform
```

---

### `agent_id`

The unique identifier of the target AI agent.

```
Developer Account
├── Agent A
├── Agent B
└── Selected Agent
```

---

### `requires_auth=True`

Instructs the SDK that authentication is required.

```
Application
↓
API Key
↓
Authentication
↓
Session Starts
```

---

### `config=config`

Supplies the Text-Only configuration.

```
config
↓
Text-Only Mode
↓
No Voice
```

---

### `callback_agent_response = get_response`

Registers the callback function.

```
AI Response
↓
get_response() Called
↓
Update Interface
```

---

## Step 3 — Start the Session

```python
st.session_state.conversation.start_session()
```

This starts the active conversation session with the ElevenLabs platform.

```
Conversation Object
↓
Start Session
↓
Connection Established
↓
Ready for Messages
```

---

## Complete Initialization Flow

```
Application Starts
↓
Check Session State
↓
Conversation Exists ?
├── Yes → Skip
│
└── No
      ↓
   Create Conversation
      ↓
   Start Session
      ↓
   Connection Active
```

---

> [!IMPORTANT]
> The `Conversation` object is the core component of today's Streamlit application. It integrates the authenticated ElevenLabs client, the selected AI agent, conversation configuration, and callback functions into a single communication layer. Once initialized, it continuously manages the interaction between the user and the hosted AI agent, allowing the application to support seamless conversations.

---

## 1️⃣4️⃣ Step-by-Step Code Explanation – Session State & Chat History

After creating the conversation,

the instructor managed chat history using Session State.

---

## Classroom Code

```python
if 'messages' not in st.session_state:
        st.session_state.messages = []
```

---

## Why Session State?

Normally,

whenever a Streamlit application refreshes,

every variable disappears.

```
Run
↓
Variables
↓
Refresh
↓
Variables Lost
```

Session State prevents this problem.

```
Run
↓
Variables
↓
Session State
↓
Refresh
↓
Variables Preserved
```

---

## Initialization

```python
if 'messages' not in st.session_state:
    st.session_state.messages = []
```

This creates an empty list to store all messages.

```
Session State
↓
messages
↓
[]
```

The list will grow as the user sends messages and the AI responds.

---

## Displaying Existing Messages

```python
for message in st.session_state.messages:
    with st.chat_message(message['role']):
        st.markdown(message['content'])
```

---

## Step-by-Step Working

### Step 1

The loop iterates through every saved message.

```
messages
↓
Message 1
↓
Message 2
↓
Message 3
```

---

### Step 2

For each message,

a chat bubble is created.

```python
st.chat_message(message['role'])
```

The role determines the position:

```
Role
├── user
│     ↓
│   Right-aligned bubble
│
└── assistant
      ↓
   Left-aligned bubble
```

---

### Step 3

The content is displayed inside the bubble.

```python
st.markdown(message['content'])
```

This renders the text using Markdown formatting.

---

## 1️⃣5️⃣ Step-by-Step Code Explanation – User Input & Message Sending

The final section handles user input.

---

## Classroom Code

```python
user_input = st.chat_input("Start your Conversation")


if user_input:
        
    message = {
        'role': 'user', 
        'content': user_input
    }

    st.session_state.messages.append(message)
        
    with st.chat_message(message['role']):
        st.markdown(message['content'])
        
    st.session_state.conversation.send_user_message(user_input)
```

---

## Step 1 — Chat Input

```python
user_input = st.chat_input("Start your Conversation")
```

This creates an input box at the bottom of the page.

```
Browser
↓
Chat Input Box
↓
"Start your Conversation"
```

---

## Step 2 — Check if Input Exists

```python
if user_input:
```

Only execute the following code when the user has actually submitted a message.

---

## Step 3 — Create Message Dictionary

```python
message = {
    'role': 'user', 
    'content': user_input
}
```

The message is structured as a dictionary.

```
Message
│
├── role → "user"
│
└── content → "User's text"
```

---

## Step 4 — Save to Session State

```python
st.session_state.messages.append(message)
```

```
Session State
↓
messages
↓
Append New Message
```

This ensures the message persists across page refreshes.

---

## Step 5 — Display User Message

```python
with st.chat_message(message['role']):
    st.markdown(message['content'])
```

The user's message appears on the screen immediately.

---

## Step 6 — Send to AI Agent

```python
st.session_state.conversation.send_user_message(user_input)
```

```
User Message
↓
Conversation Object
↓
ElevenLabs SDK
↓
Cloud AI Agent
↓
Processing
↓
Response via Callback
```

The application itself does not generate the response.

Instead,

it forwards the request to the hosted conversational agent.

When the agent responds,

the `get_response()` callback function is automatically triggered.

---

## Complete Message Flow

```
User Types Message
↓
st.chat_input()
↓
Create Dictionary
↓
Append to Session State
↓
Display in Chat Bubble
↓
send_user_message()
↓
ElevenLabs Cloud
↓
AI Processes Request
↓
Callback Triggered
↓
get_response()
↓
update_ui()
↓
Result Captured
```

---

## 1️⃣6️⃣ Simplified Conversation Setup (session20A.py)

The instructor also demonstrated a simplified standalone version

that configures and starts a conversation without Streamlit.

---

## Classroom Code (session20A.py)

```python
from elevenlabs.client import ElevenLabs
from elevenlabs.conversational_ai.conversation import Conversation, ConversationInitiationData

# Configure for text-only mode with proper structure
conversation_override = {
    "conversation": {
        "text_only": True
    }
}

config = ConversationInitiationData(
    conversation_config_override=conversation_override
)
agent_id = 'agent_6701ky1gbps2fg7rgrybxne1y62g'
api_key = 'sk_485932fcf64dbfcb4b3939a6ba59f2034f28d4a6ae98b4b8'
elevenLabs = ElevenLabs(api_key=api_key)
 
conversation = Conversation(
    elevenLabs,
    agent_id,
    requires_auth=True,
    config=config,
    # Important: Ensure agent_response callback is set
    callback_agent_response=lambda response: print(f"Agent: {response}"),
    callback_user_transcript=lambda transcript: print(f"User: {transcript}"),
)

conversation.start_session()
```

---

## Step 1 — Import Libraries

```python
from elevenlabs.client import ElevenLabs

from elevenlabs.conversational_ai.conversation import Conversation, ConversationInitiationData
```

Only two imports are needed:

- The client for authentication.
- The conversation classes for session management.

---

## Step 2 — Create Configuration

```python
conversation_override = {
    "conversation": {
        "text_only": True
    }
}

config = ConversationInitiationData(
    conversation_config_override=conversation_override
)
```

The configuration is created as a dictionary

and converted into a `ConversationInitiationData` object.

```
Dictionary
↓
ConversationInitiationData
↓
Text-Only Configuration
```

---

## Step 3 — Set Credentials

```python
agent_id = 'agent_6701ky1gbps2fg7rgrybxne1y62g'

api_key = 'sk_485932fcf64dbfcb4b3939a6ba59f2034f28d4a6ae98b4b8'

elevenLabs = ElevenLabs(api_key=api_key)
```

The client is initialized with the API key.

```
API Key
↓
ElevenLabs Client
↓
Authenticated Connection
```

---

## Step 4 — Create Conversation with Lambda Callbacks

```python
conversation = Conversation(
    elevenLabs,
    agent_id,
    requires_auth=True,
    config=config,
    callback_agent_response=lambda response: print(f"Agent: {response}"),
    callback_user_transcript=lambda transcript: print(f"User: {transcript}"),
)
```

Instead of creating separate named functions,

this version uses **lambda expressions** as callbacks.

A lambda function is a single-line anonymous function.

```
callback_agent_response
↓
lambda response: print(f"Agent: {response}")
↓
Print AI Response

callback_user_transcript
↓
lambda transcript: print(f"User: {transcript}")
↓
Print User Transcript
```

---

## Step 5 — Start Session

```python
conversation.start_session()
```

```
Conversation Object
↓
Start Session
↓
Connection Established
↓
Ready for Messages
```

The session begins and the application can exchange messages with the AI agent.

---

## Difference Between session20.py and session20A.py

| Feature | session20.py | session20A.py |
|---------|-------------|---------------|
| UI Framework | Streamlit | Console/Terminal |
| Callbacks | Named Functions | Lambda Functions |
| Session State | Uses `st.session_state` | Not used |
| Chat Display | Chat Bubbles | Terminal Print |
| Complexity | Higher | Lower |
| Purpose | Full UI Application | Simplified Configuration Demo |

---

> [!IMPORTANT]
> The `session20A.py` file demonstrates the minimum configuration required to establish a conversation session with an ElevenLabs agent. By using lambda callbacks instead of named functions and removing the Streamlit interface, it shows how the core ElevenLabs SDK works independently. This simplified example is valuable for understanding the SDK before integrating it into more complex applications.

---

# Day 20 Summary

Today's training session was dedicated to understanding and integrating **ElevenLabs Conversational AI** within Python applications. We explored the cloud-hosted AI agent platform, looking at how to configure behavior, set up safety **Guardrails**, and utilize a **Knowledge Base** for contextual response generation. The instructor introduced the **Developer Dashboard**, demonstrated agent creation, API key generation, and briefly covered **Twilio** integration for voice-based conversations.

The practical component focused on building a web-based chat interface using **Streamlit** to interact with our hosted ElevenLabs agent. This involved initializing the `ElevenLabs` client using API credentials, configuring the conversation session in **Text-Only Mode** using `ConversationInitiationData`, registering callback functions for handling AI responses, and managing conversation history through Streamlit Session State. The instructor demonstrated two implementations: a full Streamlit application (`session20.py`) and a simplified standalone configuration (`session20A.py`) using lambda callbacks.

---

# 📝 Personal Reflection

Today's training marked a significant shift in my understanding of building AI applications. Until now, we had been calling raw LLM endpoints like Google's Gemma, managing the prompt engineering and conversation context ourselves in code. Working with ElevenLabs showed me a different, highly modular architecture: delegating conversational intelligence, safety boundaries (Guardrails), and contextual data (Knowledge Base) to a cloud platform, and focusing the client application on user interface rendering and secure API integration.

Learning how to use callback functions was particularly valuable. Instead of continuously polling the AI agent for responses, the application simply registers a function that executes automatically when the agent responds. This event-driven approach is widely used in professional software development and is essential for building responsive, real-time applications. The comparison between the full Streamlit application and the simplified console version also helped me understand which parts of the code are essential for ElevenLabs integration versus which parts are specific to the Streamlit framework.

---

# 📌 Key Takeaways

- Explored the ElevenLabs Conversational AI platform for cloud-hosted AI assistants.
- Configured conversational agents with instructions, custom safety Guardrails, and Knowledge Bases.
- Generated API Keys and extracted unique Agent IDs.
- Built a Streamlit-based web dashboard for chatting with ElevenLabs agents.
- Initialized the ElevenLabs client and configured conversations in Text-Only Mode.
- Developed callback functions to process AI responses asynchronously.
- Preserved conversation sessions across page reruns using Streamlit Session State.
- Learned about Twilio integration for voice-based conversational AI systems.
- Studied a simplified standalone configuration using lambda callbacks.

---

# 📖 Revision Notes

✔ ElevenLabs Conversational AI

✔ Cloud-Hosted AI Agents

✔ AI Guardrails

✔ Knowledge Base

✔ Developer Dashboard

✔ API Key vs Agent ID

✔ Twilio Integration

✔ Streamlit Chat Interface

✔ ElevenLabs Python SDK

✔ ConversationInitiationData

✔ Text-Only Mode

✔ Callback Functions

✔ Session State

✔ Lambda Callbacks

✔ Event-Driven Programming

✔ send_user_message()

✔ start_session()

---

# ❓ Interview Questions

### Q1. What is ElevenLabs Conversational AI?

**Answer:**

ElevenLabs Conversational AI is a cloud platform for building intelligent agents with built-in voice capabilities, safety guardrails, and knowledge integration. Unlike traditional LLM integration where developers manually handle prompting, history, and session memory, ElevenLabs manages these capabilities in the cloud.

---

### Q2. What are AI Guardrails?

**Answer:**

Guardrails are safety boundaries and operational thresholds configured on AI agents. They define what the AI is allowed and not allowed to do, preventing the generation of inappropriate, harmful, off-topic, or unauthorized responses.

---

### Q3. What is a Knowledge Base in ElevenLabs?

**Answer:**

A Knowledge Base is a collection of project-specific documents uploaded to an AI agent so it can retrieve and use that information while answering questions, instead of relying solely on its pre-trained general knowledge.

---

### Q4. What is the difference between an API Key and an Agent ID?

**Answer:**

- **API Key**: A secret authentication token used to verify the developer's account and grant permission to communicate with the ElevenLabs platform.
- **Agent ID**: A unique identifier that specifies which hosted conversational agent should receive and process the conversation session.

---

### Q5. What is Twilio?

**Answer:**

Twilio is a cloud communication platform that provides APIs for phone calls, SMS, and WhatsApp. It can be integrated with hosted AI agents to enable users to interact with conversational AI systems through standard phone calls.

---

### Q6. What is `ConversationInitiationData`?

**Answer:**

`ConversationInitiationData` is a class used to specify initialization overrides such as enabling Text-Only mode when starting a new conversation session with the conversational agent.

---

### Q7. What is a Callback Function?

**Answer:**

A callback function is a function registered to execute automatically when a specific event occurs. Instead of continuously checking for changes, the application reacts only when the event is triggered.

---

### Q8. Why is Session State important in Streamlit?

**Answer:**

Session State stores variables during a user's interaction, allowing chat history, conversation objects, and application data to persist between page reruns.

---

### Q9. What does `send_user_message()` do?

**Answer:**

This method sends the user's text message from the Streamlit application to the ElevenLabs hosted agent through the SDK for processing.

---

### Q10. What is the difference between `session20.py` and `session20A.py`?

**Answer:**

`session20.py` is a full Streamlit application with a graphical chat interface and named callback functions. `session20A.py` is a simplified console-based version that uses lambda callbacks and demonstrates the minimum SDK configuration required to start a conversation with an ElevenLabs agent.

---

### Q11. Why should API keys be stored securely?

**Answer:**

API keys authenticate access to cloud services. If exposed publicly, unauthorized users can access the platform, potentially incurring charges, accessing private data, or misusing the AI agent.

---

### Q12. What is the purpose of `start_session()`?

**Answer:**

`start_session()` establishes the active conversation session between the application and the hosted ElevenLabs agent, enabling message exchange.

---

### Q13. Why is Text-Only Mode used?

**Answer:**

Text-Only Mode is configured to restrict the session to text messages, avoiding speech-to-text and text-to-speech overhead. It simplifies development for chatbot interfaces where voice is not needed.

---

### Q14. What is Event-Driven Programming?

**Answer:**

Event-driven programming is a paradigm where the application waits for events to occur and responds through registered callback functions, rather than executing instructions sequentially.

---

### Q15. What are some real-world applications of ElevenLabs Conversational AI?

**Answer:**

- AI Customer Support
- Hospital Virtual Assistants
- Banking Chatbots
- Educational Tutors
- HR Automation
- Voice-based AI Receptionists
- Business Helpdesks
- Appointment Booking Systems

---

# 🎯 Goals for Next Session

- Study structural project setup and clean architecture for complex AI agents.
- Explore database integrations (MongoDB) for tracking agent activities and user history.
- Implement structured config modules and centralized database helper connections.
- Learn about secure credential management using environment variables.
- Continue improving dashboard interfaces for displaying metrics, charts, and agent logs.

---

# ✅ Today's Progress Checklist

- [x] Explored ElevenLabs Conversational AI platform.
- [x] Understood AI Guardrails and threshold concepts.
- [x] Learned about Knowledge Base integration.
- [x] Explored the ElevenLabs Developer Dashboard.
- [x] Generated API Key and extracted Agent ID.
- [x] Learned about Twilio integration.
- [x] Built a Streamlit chatbot interface.
- [x] Initialized the ElevenLabs client.
- [x] Configured Text-Only Mode.
- [x] Implemented callback functions.
- [x] Managed conversation sessions using Session State.
- [x] Studied simplified standalone configuration.
- [x] Understood event-driven programming concepts.

---

> [!TIP]
> Today's session demonstrated how **ElevenLabs Conversational AI**, **Streamlit**, and **Python SDK integration** complement each other in modern AI development. ElevenLabs provides managed conversational intelligence including Guardrails and Knowledge Bases, Streamlit simplifies user interface creation, and callback functions enable efficient event-driven communication. Together, these technologies form the foundation of many real-world AI applications, including chatbots, virtual assistants, and enterprise software solutions.

---

# 📋 Day 20 Completion Status

| Category | Status |
|----------|--------|
| Theory Covered | ✅ Completed |
| Practical Demonstrations | ✅ Completed |
| Classroom Code Studied | ✅ Completed |
| Conversational AI Concepts | ✅ Completed |
| Guardrails & Knowledge Base | ✅ Completed |
| Developer Dashboard | ✅ Completed |
| Streamlit Development | ✅ Completed |
| Callback Function Integration | ✅ Completed |
| Session State Management | ✅ Completed |
| Simplified SDK Demo | ✅ Completed |
| Revision Notes Prepared | ✅ Completed |
| Interview Questions Prepared | ✅ Completed |
| Personal Reflection Written | ✅ Completed |
| Training Diary Updated | ✅ Completed |

---

### **Maintained By:** Saksham Kumar  
### **Training Program:** TRCS102 – Agentic AI Training  
### **Day:** 20  
### **Status:** ✅ Successfully Completed