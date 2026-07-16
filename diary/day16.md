<!--
title: Building an LLM-Powered Agent using Function Calling, Google GenAI SDK & MongoDB
date: 2026-07-15
tags: Agentic AI, Function Calling, Google GenAI, Gemini, Gemma, MongoDB, Streamlit, Tools
summary: Learned the architecture of AI Agents, integrated Google's GenAI SDK, introduced LLM function calling (tool use), dynamically executed Python functions selected by the LLM, and built an Agentic Task Management application using Streamlit and MongoDB Atlas.
-->

# 🚀 Day 16: Agentic AI with Function Calling, Google GenAI SDK & Streamlit

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 16  
**Date:** 15 July 2026

---

# 📖 Daily Training Record – Day 16

## 📌 Overview

Today's session marked one of the most significant milestones of the entire training. Unlike the previous session, where the chatbot relied on manually programmed keyword matching, today's application introduced **LLM-powered function calling**, allowing the language model itself to determine which Python function should be executed based on the user's natural language request. This transformed the chatbot into a much more intelligent **Agentic AI system**. :contentReference

The lecture began by discussing the architecture of an **AI Agent**, explaining that every intelligent agent is built upon three essential components: **Memory**, **Tools**, and a **Large Language Model (LLM)**. Memory enables the agent to remember information, tools allow it to perform real-world actions, and the LLM provides reasoning and decision-making capabilities. Together, these components enable an agent to understand requests, plan actions, and execute tasks rather than merely generating conversational responses.

The instructor then introduced the **Google GenAI SDK**, demonstrating how Python applications communicate with Google's language models using an API key. A simple program was developed that initialized a client, selected a model, sent a prompt, and displayed the generated response. This served as the foundation for understanding how applications integrate with modern Large Language Models. :contentReference

The central topic of today's lecture was **Function Calling (Tool Calling)**. Instead of hardcoding application logic such as checking whether the user's message contains specific keywords, the LLM receives a formal description of the available Python functions. Based on the user's request, the model automatically decides which function should be executed and returns both the function name and the required arguments. The Python application then invokes the selected function dynamically, allowing natural language instructions to control real software functionality.

To demonstrate this concept, a task management application was enhanced using **Google's FunctionDeclaration API**. A `save_task()` function was registered as an available tool, complete with parameter definitions describing the expected task fields. When the user requested a task such as assigning work to a contact, the language model extracted the necessary information, generated a structured function call, and returned the task details to Python. The application then stored the resulting task directly inside MongoDB Atlas.

Finally, all of these concepts were integrated into a Streamlit chat application, replacing the rule-based chatbot developed previously. Instead of manually parsing user commands, the LLM interpreted natural language, selected the appropriate function, executed it through Python, and displayed the result back to the user using a conversational interface.

Overall, today's session introduced the practical foundation of modern **Agentic AI**, demonstrating how Large Language Models, software tools, cloud databases, and web interfaces work together to create intelligent applications capable of performing real-world tasks rather than simply generating text. :contentReference

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the architecture of an AI Agent.
- Identify the three core components of an Agent: Memory, Tools, and LLM.
- Integrate Google's GenAI SDK into Python applications.
- Initialize and communicate with Google's language models.
- Understand the concept of Function Calling (Tool Calling).
- Define callable Python functions for AI agents.
- Describe tools using `FunctionDeclaration`.
- Configure tools using `GenerateContentConfig`.
- Allow an LLM to select functions dynamically.
- Parse JSON responses returned by the language model.
- Execute Python functions using LLM-generated arguments.
- Integrate Streamlit, MongoDB, and LLM function calling into a complete Agentic AI application.

---

# 📚 Key Learnings

## 1️⃣ What is an AI Agent?

Today's session began by discussing the architecture of an **AI Agent**. Unlike traditional programs that execute predefined instructions, an AI Agent combines reasoning, memory, and external tools to understand user requests and perform meaningful actions. Instead of simply generating text, an agent can interact with databases, call APIs, execute functions, and automate workflows. :contentReference[oaicite:3]{index=3}

The instructor explained that a modern AI Agent is composed of three fundamental building blocks.

---

## Core Components of an Agent

```
                AI Agent
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
     Memory       Tools        LLM
```

Each component has a specific responsibility within the overall system.

---

## Memory

Memory allows the agent to retain information that may be required while performing tasks.

Examples include:

- Previous conversations.
- User preferences.
- Task history.
- Stored documents.
- Knowledge embeddings.

The instructor mentioned common storage systems such as:

- MongoDB
- Vector Databases

Conceptually,

```
User
↓
Memory
↓
Previous Information
```

Instead of forgetting every interaction,

an agent can retrieve previously stored information whenever required.

---

## Tools

Tools enable the agent to interact with the external world.

Without tools,

an LLM can only generate text.

With tools,

it can perform actions such as:

- Saving tasks.
- Reading databases.
- Sending emails.
- Calling APIs.
- Executing Python functions.
- Managing calendars.

Today's application introduced a tool that saves tasks into MongoDB.

Conceptually,

```
LLM
↓
Tool
↓
Python Function
↓
Database
```

The tool becomes the bridge between reasoning and execution.

---

## Large Language Model (LLM)

The **Large Language Model (LLM)** acts as the reasoning engine of the agent.

Its responsibilities include:

- Understanding user intent.
- Interpreting natural language.
- Choosing the correct tool.
- Extracting structured information.
- Generating responses.

During today's session, Google's language models were accessed through the **Google GenAI SDK**, using models from the Gemini ecosystem and Gemma family as demonstrated in the classroom examples. :contentReference[oaicite:4]{index=4}

---

## Complete Agent Architecture

The instructor summarized the interaction as follows.

```
User
↓
AI Agent
├── Memory
├── Tools
└── LLM
    ↓
    Action
    ↓
    Response
```

Instead of responding with plain text,

the agent may perform one or more real operations before generating its reply.

---

## Traditional Chatbot vs AI Agent

A useful comparison discussed during the session is shown below.

### Traditional Chatbot

```
User
↓
Question
↓
Generated Text
↓
Response
```

The interaction typically ends after generating an answer.

---

### AI Agent

```
User
↓
Reasoning
↓
Select Tool
↓
Execute Action
↓
Collect Result
↓
Generate Response
```

The agent performs actions before replying.

---

## Why Are All Three Components Necessary?

Each component solves a different problem.

| Component | Responsibility |
|-----------|----------------|
| Memory | Stores and retrieves information |
| Tools | Performs external actions |
| LLM | Understands requests and decides what to do |

Removing any one of these components significantly reduces the capabilities of the agent.

---

## Real-World Examples

Modern AI agents commonly combine these components in applications such as:

- Personal AI Assistants.
- Customer Support Systems.
- Coding Assistants.
- Task Management Platforms.
- Research Assistants.
- Workflow Automation Tools.

These systems rely on memory, reasoning, and external tool execution to complete user requests.

---

> [!NOTE]
> A **Large Language Model alone is not an AI Agent**. An LLM becomes an agent only when it is combined with **memory** for retaining information and **tools** that allow it to perform actions in the real world. Today's session introduced this architectural distinction and laid the foundation for building practical Agentic AI systems.

---

## 2️⃣ Getting Started with the Google GenAI SDK

After introducing the architecture of an AI Agent, the instructor demonstrated how Python applications can communicate with Google's Large Language Models using the **Google GenAI SDK**. This SDK acts as the bridge between a Python application and Google's AI models, allowing developers to send prompts, receive responses, and later enable advanced capabilities such as **Function Calling**. :contentReference[oaicite:0]{index=0}

---

## Why Use an SDK?

An SDK (Software Development Kit) provides ready-made libraries that simplify communication with external services.

Instead of manually constructing HTTP requests,

developers simply write Python code.

```
Python
↓
Google GenAI SDK
↓
Google AI Models
↓
Generated Response
```

The SDK handles authentication, request formatting, and response processing internally.

---

## Importing the Library

The first step is importing the SDK.

### Classroom Code

```python
from google import genai
```

This makes Google's AI client available within the application.

---

## Creating the Client

The instructor then demonstrated creating a client object.

### Classroom Code

```python
client = genai.Client(

    api_key="<YOUR_API_KEY>"

)
```

*(The actual API key has been intentionally omitted for security.)*

---

## Why is the Client Needed?

The client represents the application's authenticated connection to Google's AI services.

Conceptually,

```
Python Application
↓
Client
↓
Google AI Platform
```

All future requests pass through this client object.

---

## Selecting a Model

After creating the client,

a model is selected while sending the request.

Example used during the session:

```python
model = "gemma-3-4b-it"
```

The instructor also discussed Google's Gemini ecosystem while demonstrating the SDK, highlighting how different models can be used depending on the application's requirements.
---

## Sending a Prompt

The application sends user instructions to the model.

### Classroom Code

```python
response = client.models.generate_content(

    model=model,

    contents="Explain AI in simple words."

)
```

---

## Execution Flow

```
User Prompt
↓
Python
↓
Google GenAI SDK
↓
Selected Model
↓
Generated Response
```

The model processes the prompt and returns a structured response.

---

## Reading the Response

After generation,

the application extracts the generated text.

### Classroom Code

```python
print(response.text)
```

---

### Sample Output

```text
Artificial Intelligence is the ability of computers to perform tasks that normally require human intelligence, such as learning, reasoning, and decision-making.
```

The returned text can then be displayed to the user or processed further.

---

## Request Lifecycle

Every interaction with the model follows the same sequence.

```
Python
↓
Create Client
↓
Choose Model
↓
Send Prompt
↓
Model Processes Request
↓
Receive Response
```

This forms the foundation for all later interactions with the LLM.

---

# 3️⃣ Understanding Function Calling

The most significant topic introduced today was **Function Calling**, also known as **Tool Calling**.

Unlike the chatbot developed during the previous session—which relied on manually checking keywords such as:

```python
if "create task" in user_input:
```

—the application now allows the **LLM itself** to decide which Python function should be executed. :contentReference[oaicite:2]{index=2}

This represents a major shift from rule-based programming to **LLM-driven decision making**.

---

## Traditional Rule-Based Chatbot

Previously,

the chatbot followed logic similar to:

```
User Message
↓
Keyword Matching
↓
if / elif
↓
Python Function
↓
Database
```

Every possible command had to be programmed manually.

---

## LLM-Based Function Calling

Today's workflow is significantly different.

```
User Prompt
↓
LLM
↓
Understand Intent
↓
Select Function
↓
Generate Arguments
↓
Python Function
↓
Database
```

The developer no longer decides which function to call.

Instead,

the language model makes that decision.

---

## Why Function Calling?

Large Language Models are excellent at understanding natural language,

but they cannot directly interact with databases, files, or external systems.

Function Calling bridges this gap.

The LLM can:

- Understand the user's request.
- Select an appropriate function.
- Generate structured arguments.
- Ask Python to execute the function.

Python performs the actual operation.

---

## Example

User enters:

```text
Create a task to call Rahul tomorrow regarding the project.
```

Instead of searching for keywords,

the workflow becomes:

```
User Request
↓
LLM
↓
save_task()
↓
Arguments Generated
↓
Python Executes
↓
MongoDB
```

The model extracts all required information automatically.

---

## Rule-Based vs Function Calling

| Rule-Based Chatbot | LLM Function Calling |
|--------------------|----------------------|
| Manual keyword detection | Natural language understanding |
| Long `if-elif` chains | Model selects function automatically |
| Developer parses text | Model generates structured arguments |
| Difficult to scale | Easy to extend with new tools |

Function Calling significantly reduces application complexity as the number of supported operations grows.

---

## Overall Workflow

Today's application introduces the following architecture.

```
User
↓
Prompt
↓
Large Language Model
↓
Function Selection
↓
Python Function
↓
MongoDB
↓
Result
↓
Assistant Response
```

The language model becomes the decision-maker,

while Python remains responsible for performing the actual work.

---

## Why This is Important

This architecture forms the basis of many modern AI systems.

Examples include:

- AI Coding Assistants
- Personal Productivity Agents
- Customer Support Automation
- Research Assistants
- Workflow Automation Platforms

Instead of merely generating text,

these systems use **LLM reasoning** to determine which software tools should be executed.

---

> [!IMPORTANT]
> **Function Calling** is one of the defining capabilities of modern Agentic AI systems. Rather than relying on manually written keyword-matching logic, developers expose a set of available tools to the language model. The LLM interprets the user's intent, selects the appropriate function, generates the required arguments, and delegates the actual execution to Python, enabling intelligent software systems to perform real-world actions beyond simple text generation.

---


## 4️⃣ Defining Tools for the AI Agent

After understanding the concept of Function Calling, the instructor demonstrated how an LLM learns about the functions available inside a Python application.

Unlike ordinary Python functions,

an AI model cannot automatically discover application code.

Instead,

developers must explicitly describe every callable function by defining its **name, purpose, and expected parameters**.

This description is known as a **Function Declaration**. :contentReference[oaicite:0]{index=0}

---

## Why Does the LLM Need Tool Definitions?

Consider the following function.

```python
def save_task(...):
    ...
```

Although Python understands this function,

the language model has **no knowledge** of its existence.

Therefore,

the application must provide a structured description.

Conceptually,

```
Python Function
↓
Function Declaration
↓
LLM Understands Tool
```

Only after receiving this description can the LLM decide whether the function should be used.

---

## Function Declaration

The instructor introduced

```python
types.FunctionDeclaration()
```

to describe application tools.

Conceptually,

```python
types.FunctionDeclaration(

    name=...,

    description=...,

    parameters=...

)
```

This declaration acts as a contract between Python and the language model.

---

## Function Name

The first attribute is the function name.

Example:

```python
name="save_task"
```

This is the identifier returned by the LLM when it decides to invoke the function.

---

## Description

Next,

a natural-language description explains the purpose of the function.

Example:

```python
description=

"Save a task into MongoDB."
```

The LLM reads this description while deciding which tool best matches the user's request.

---

## Parameters

The third component describes the expected input.

Instead of free-form text,

parameters are defined using a structured schema.

Conceptually,

```
Function
↓
Parameters
↓
Properties
↓
Required Fields
```

This allows the model to generate properly structured arguments.

---

## Parameter Schema

Today's tool defines fields such as:

- title
- description
- action
- contact_name
- contact_phone

Each field includes:

- Data type
- Description

allowing the model to understand exactly what information should be extracted from the user's request.

---

## Overall Structure

```
Function Declaration
│
├── Name
├── Description
└── Parameters
        │
        ├── Properties
        └── Required
```

Together,

these components provide enough information for the LLM to call the function correctly.

---

## Why is a Schema Important?

Without a schema,

the LLM might return inconsistent or incomplete information.

A structured definition ensures:

- Consistent arguments.
- Correct field names.
- Required inputs.
- Reliable function execution.

This makes AI-powered applications significantly more dependable.

---

# 5️⃣ Registering Tools with the Language Model

After defining the function,

the instructor demonstrated how it is registered with the model.

Simply declaring a function is **not sufficient**.

The declaration must be wrapped inside a **Tool** object before it can be supplied to the LLM.

---

## Creating a Tool

Conceptually,

```python
tool = types.Tool(

    function_declarations=[

        save_task_function

    ]

)
```

A tool is essentially a collection of one or more function declarations.

---

## Tool Architecture

```
Tool
│
└── Function Declarations
        │
        ├── save_task()
        ├── update_task()
        ├── list_tasks()
        └── delete_task()
```

Today's implementation registers only the task-saving function,

but the same mechanism supports multiple tools.

---

## Configuring the Model

The tool is then supplied through the generation configuration.

Conceptually,

```python
config = types.GenerateContentConfig(

    tools=[tool]

)
```

---

## Why Use a Configuration Object?

The configuration informs the model about the environment in which it is operating.

Besides tools,

it may also contain:

- Temperature
- Safety Settings
- Generation Parameters
- Candidate Count
- Tool Definitions

Today's focus is on exposing callable tools.

---

## Tool Registration Workflow

```
Python Function
↓
Function Declaration
↓
Tool
↓
GenerateContentConfig
↓
Large Language Model
```

After this process,

the LLM becomes aware of every function that it is allowed to invoke.

---

## What Happens Internally?

When the user submits a prompt,

the model first reasons about the request.

Instead of immediately generating text,

it checks whether one of the registered tools can satisfy the request.

```
User Prompt
↓
LLM
↓
Available Tools
↓
Best Match?
↓
Generate Function Call
```

If an appropriate tool exists,

the model produces a structured function call instead of ordinary text.

---

## Advantages of Tool Registration

Providing structured tool definitions offers several benefits.

- Natural language understanding.
- Reliable argument generation.
- Reduced manual parsing.
- Easier application expansion.
- Cleaner backend architecture.

Developers simply register new functions instead of writing lengthy keyword-matching logic.

---

## From Rule-Based to Tool-Based AI

The evolution from Day 15 to Day 16 can be summarized as:

### Day 15

```
User
↓
Keyword Detection
↓
if / elif
↓
Python Function
```

---

### Day 16

```
User
↓
LLM
↓
Available Tools
↓
Function Selection
↓
Python Function
```

The responsibility for deciding **which function to execute** shifts from handwritten application logic to the language model itself.

---

> [!IMPORTANT]
> **Function Declarations** and **Tool Registration** form the bridge between Large Language Models and real software systems. Instead of hardcoding every conversational workflow, developers expose well-defined tools to the model. The LLM interprets user intent, selects the appropriate function, generates structured arguments, and allows Python to perform real-world operations such as database access, API calls, or task automation.

---

## 6️⃣ Sending Prompts to the LLM with Available Tools

After registering the available tools, the instructor demonstrated how to send a user prompt to the language model. Unlike ordinary text generation, today's request includes both the user's message and the list of available functions, allowing the model to decide whether a function should be executed instead of simply generating text. :contentReference[oaicite:0]{index=0}

This marks the beginning of a true **Agentic AI workflow**.

---

## Traditional Prompt

Normally,

a prompt is sent as:

```
User Prompt
↓
LLM
↓
Generated Text
```

The interaction ends after text generation.

---

## Prompt with Tools

Today's architecture is different.

```
User Prompt
↓
LLM
↓
Available Tools
↓
Reasoning
↓
Function Call
↓
Python
```

Instead of replying immediately,

the model first determines whether one of the registered tools should be used.

---

## Sending the Request

Conceptually,

the application performs:

```python
response = client.models.generate_content(

    model=model,

    contents=user_prompt,

    config=config

)
```

Three important inputs are supplied:

- Selected Model
- User Prompt
- Tool Configuration

The configuration contains every function that the model is allowed to call.

---

## Request Lifecycle

```
User
↓
Prompt
↓
Google GenAI SDK
↓
Gemma / Gemini Model
↓
Available Tools
↓
Reasoning
↓
Response
```

The model now has enough information to either:

- Generate normal text, or
- Produce a function call.

---

## How the LLM Thinks

Suppose the user writes:

```text
Create a task to call Rahul tomorrow regarding the project.
```

The model internally performs reasoning similar to:

```
Understand User Intent
↓
Need Database?
↓
Yes
↓
Available Tool?
↓
save_task()
↓
Generate Arguments
```

Rather than asking Python to search for keywords,

the LLM performs semantic understanding.

---

## Advantages

Compared with the previous day's implementation,

the new workflow provides several improvements.

| Day 15 | Day 16 |
|---------|---------|
| Keyword matching | Natural language understanding |
| Manual parsing | Automatic argument extraction |
| Fixed command syntax | Flexible user prompts |
| Developer chooses function | LLM chooses function |

This greatly improves usability and scalability.

---

# 7️⃣ Understanding the LLM Response

After processing the request,

the language model returns a structured response.

Unlike previous examples where only plain text was returned,

today's response may contain a **Function Call**.

The instructor demonstrated how this information is represented internally.

---

## Response Structure

Conceptually,

```
LLM Response
│
├── Candidates
│
└── Content
        │
        └── Parts
                │
                ├── Text
                └── Function Call
```

If the model decides that a tool should be executed,

the function call appears inside the response.

---

## Converting the Response

The instructor converted the response into JSON for easier processing.

Conceptually,

```python
response.model_dump_json()
```

returns a JSON representation of the entire model response.

---

## Why Convert to JSON?

The returned response is a complex Python object.

Converting it into JSON makes it easier to inspect and extract important information.

Execution flow:

```
LLM Response Object
↓
JSON
↓
Python Dictionary
↓
Function Information
```

This allows the application to access deeply nested values.

---

## Parsing the JSON

The instructor then demonstrated converting the JSON string into a Python dictionary.

Conceptually,

```python
json.loads(...)
```

Execution becomes:

```
JSON String
↓
json.loads()
↓
Dictionary
```

The response can now be accessed using standard dictionary indexing.

---

## Navigating the Response

The application traverses several nested levels.

Conceptually,

```
Response
↓
Candidates
↓
Content
↓
Parts
↓
Function Call
```

Each level reveals more information about the model's decision.

---

## Extracting the Function

Once the function call section is reached,

the application retrieves:

- Function Name
- Arguments

Conceptually,

```
Function Call
│
├── Name
└── Arguments
```

Example:

```
save_task

↓

{

    title

    description

    action

    contact_name

    contact_phone

}
```

These arguments are generated directly by the language model based on the user's natural language request.

---

## Why is Structured Output Important?

Instead of returning a paragraph such as:

> "I think you should save a task..."

the model returns structured data.

Benefits include:

- Easy automation.
- Reliable parsing.
- Direct function execution.
- Minimal manual processing.

This structured representation is one of the key strengths of modern Function Calling systems.

---

## Overall Parsing Workflow

```
LLM
↓
Structured Response
↓
JSON
↓
Dictionary
↓
Function Name
↓
Arguments
```

The application now possesses everything required to execute the selected Python function.

---

> [!IMPORTANT]
> The language model does **not** execute Python code directly. Instead, it returns a structured **Function Call** containing the function name and the extracted arguments. The Python application parses this response, validates the information, and then decides whether to execute the corresponding function. This separation ensures that the LLM performs reasoning while Python remains responsible for executing real-world actions securely.

---


## 8️⃣ Dynamic Function Execution

After extracting the function name and arguments from the LLM's response, the instructor demonstrated the final step of the Agentic AI workflow—**executing the selected Python function dynamically**.

Unlike the chatbot developed in the previous session, where the application manually decided which function to execute using multiple `if-elif` statements, today's implementation allows the **LLM to make that decision**. Python simply validates the response and executes the corresponding function. :contentReference[oaicite:0]{index=0}

---

## Previous Approach (Day 15)

The rule-based chatbot followed logic similar to:

```python
if "create task" in user_input:
    save_task()

elif "update task" in user_input:
    update_task()

elif "delete task" in user_input:
    delete_task()
```

Execution flow:

```
User Message
↓
Keyword Matching
↓
if / elif
↓
Python Function
```

The developer was responsible for deciding every possible workflow.

---

## New Agentic Approach

Today's implementation changes the architecture completely.

```
User Prompt
↓
LLM
↓
Function Name
↓
Arguments
↓
Python
↓
Execute Function
```

The responsibility of deciding **which function should run** now belongs to the language model.

---

## Extracting Function Information

After parsing the response,

the application obtains:

```
Function Call
│
├── Function Name
└── Arguments
```

Example:

```
Function
↓
save_task

Arguments
↓
title

description

action

contact_name

contact_phone
```

The application now knows both **what** should be executed and **which data** should be supplied.

---

## Executing the Function

The instructor demonstrated checking the returned function name before executing it.

Conceptually,

```python
if function_name == "save_task":

    save_task(**arguments)
```

The extracted arguments are passed directly into the Python function.

---

## Execution Flow

```
LLM
↓
Function Name
↓
Python
↓
save_task()
↓
MongoDB
```

The function behaves exactly like any normal Python function,

except that its arguments originate from the language model.

---

## Inside `save_task()`

The previously implemented helper function performs the remaining work.

Conceptually,

```
Arguments
↓
Add Status
↓
Add created_at
↓
Dictionary
↓
MongoDB
```

The function enriches the task with additional information before storing it.

---

## Automatic Metadata

The instructor enhanced the task by automatically adding fields such as:

```python
status = "pending"
```

and

```python
created_at = datetime.now()
```

Resulting document:

```python
{

    "title": "...",

    "description": "...",

    "action": "...",

    "contact_name": "...",

    "contact_phone": "...",

    "status": "pending",

    "created_at": ...
}
```

This ensures that every newly created task follows a consistent structure.

---

## Why Dynamic Execution Matters

Instead of writing application logic for every possible command,

developers only expose functions.

The LLM handles:

- Intent recognition.
- Parameter extraction.
- Function selection.

Python handles:

- Validation.
- Execution.
- Database interaction.

This division of responsibility greatly simplifies backend development.

---

## Overall Workflow

```
User
↓
Natural Language
↓
LLM
↓
Function Call
↓
Python Function
↓
MongoDB
↓
Success
```

This workflow represents one of the core patterns used in modern AI agent frameworks.

---

# 9️⃣ Integrating the Agent with Streamlit

After successfully implementing function calling,

the instructor integrated the entire workflow into a Streamlit application.

Instead of using the keyword-based chatbot from Day 15,

the Streamlit interface now communicates directly with the language model.

---

## Complete Application Architecture

```
Browser
↓
Streamlit
↓
Google GenAI SDK
↓
LLM
↓
Function Calling
↓
Python
↓
MongoDB
```

Every user interaction now passes through the language model before reaching the backend.

---

## Chat Workflow

The complete conversation follows these steps.

```
User
↓
Chat Input
↓
Gemma / Gemini
↓
Reasoning
↓
Function Selection
↓
Python Function
↓
MongoDB
↓
Assistant Reply
```

Compared with the previous day's chatbot,

the only major change is the replacement of **manual intent detection** with **LLM reasoning**.

---

## Streamlit User Interface

The Streamlit interface continues using the same chat components introduced earlier.

Conceptually,

```python
st.chat_input()

st.chat_message()
```

The frontend remains largely unchanged.

The intelligence now resides inside the LLM rather than the application code.

---

## Reusing Previous Components

One important observation from today's implementation is that many components developed during earlier sessions were reused.

Examples include:

- `DBHelper`
- MongoDB Atlas
- Streamlit Chat UI
- Session State
- Typing Animation

Only the decision-making layer changed.

---

## Evolution of the Architecture

The training has gradually evolved over several days.

### Day 14

```
Streamlit
↓
CRUD
↓
MongoDB
```

---

### Day 15

```
Streamlit
↓
Keyword Detection
↓
CRUD
↓
MongoDB
```

---

### Day 16

```
Streamlit
↓
LLM
↓
Function Calling
↓
CRUD
↓
MongoDB
```

Each session built upon the previous one while introducing a more advanced architecture.

---

## Advantages of the New Design

Compared with keyword-based programming,

LLM-powered function calling provides several benefits.

- Natural language understanding.
- Flexible user prompts.
- Reduced application complexity.
- Easier scalability.
- Better maintainability.
- Improved user experience.

Developers can continue adding new tools without rewriting large sections of chatbot logic.

---

## Foundation for Modern AI Agents

Today's architecture resembles many modern AI frameworks.

Conceptually,

```
User
↓
LLM
↓
Tool Selection
↓
Tool Execution
↓
Memory
↓
Response
```

As additional tools are added,

the agent becomes increasingly capable of solving complex real-world problems.

---

> [!IMPORTANT]
> Today's implementation represents the transition from a **rule-based chatbot** to an **LLM-powered AI Agent**. Rather than manually interpreting commands, the language model understands the user's intent, selects the appropriate tool, generates structured arguments, and delegates execution to Python. This architecture forms the foundation of many modern Agentic AI systems, coding assistants, workflow automation platforms, and intelligent software agents.

---

# 🌍 Real-World Applications

Today's session introduced one of the most important capabilities of modern Artificial Intelligence systems—**LLM Function Calling**. Instead of generating only conversational responses, Large Language Models can now invoke external software tools to perform meaningful actions. This capability forms the backbone of modern AI assistants and autonomous software agents.

---

## AI Coding Assistants

Modern coding assistants use function calling extensively.

Examples include:

- GitHub Copilot
- Cursor AI
- ChatGPT
- Gemini Code Assist

Typical workflow:

```
Developer
↓
Natural Language Request
↓
LLM
↓
Tool Selection
↓
Generate / Modify Code
↓
Result
```

Rather than simply answering programming questions, these systems actively interact with development environments.

---

## Personal AI Assistants

Modern AI assistants can perform actions beyond conversation.

Examples include:

- Managing calendars
- Sending emails
- Creating reminders
- Scheduling meetings
- Searching documents
- Managing tasks

General workflow:

```
User
↓
Request
↓
LLM
↓
Function Calling
↓
External Service
↓
Confirmation
```

Today's task management application follows this same architectural pattern.

---

## Customer Support Automation

Businesses increasingly deploy AI agents capable of interacting with backend systems.

Examples:

- Creating support tickets.
- Updating customer records.
- Checking order status.
- Scheduling appointments.

Instead of providing static answers, the AI agent performs actual business operations.

---

## Enterprise Workflow Automation

Large organizations use AI agents to automate repetitive tasks.

Examples include:

- Employee onboarding
- Invoice processing
- CRM updates
- Report generation
- Document approval

Architecture:

```
Employee
↓
AI Agent
↓
Business Tools
↓
Database
↓
Workflow Completed
```

The AI acts as an intelligent coordinator rather than a simple chatbot.

---

## Function Calling Platforms

Today's architecture is representative of many modern AI frameworks.

Examples include:

- OpenAI Function Calling
- Google GenAI Tool Calling
- Anthropic Tool Use
- LangChain Agents
- LangGraph Workflows

Although implementation details differ, the overall workflow remains similar.

---

## Agentic AI Systems

Today's project also introduces the foundation of multi-agent systems.

Conceptually,

```
User
↓
Coordinator Agent
↓
Available Tools
↓
Task Execution
↓
Final Response
```

Future Agentic AI systems extend this architecture by allowing multiple specialized agents to collaborate while sharing memory and external tools.

---

## Intelligent Productivity Applications

The concepts learned today can be applied to:

- AI Project Managers
- CRM Assistants
- Hospital Management Systems
- Banking Automation
- HR Management
- Smart Scheduling Systems
- Educational Assistants

Each application combines reasoning with external tool execution.

---

# 📝 Personal Reflection

Today's session completely changed my understanding of how modern AI applications are built. Until now, I believed that a chatbot simply received a prompt and generated a response. However, today's lecture demonstrated that real AI agents are capable of much more—they can understand user intent, choose appropriate software tools, and execute real-world operations instead of merely generating text. This shift from passive conversation to active task execution represents one of the most significant concepts introduced during the entire training. :contentReference[oaicite:0]{index=0}

Learning about the three core components of an AI Agent—**Memory, Tools, and Large Language Models**—helped me understand the architecture behind many modern AI systems. I realized that an LLM alone is only responsible for reasoning, while memory provides context and tools enable interaction with external systems such as databases, APIs, or applications.

The introduction of **Function Calling** was particularly fascinating because it eliminated the need for manually written keyword-based logic. Instead of programming every possible command using `if-elif` statements, the language model itself determines which function should be executed and generates structured arguments automatically. This greatly simplifies application development while making interactions much more flexible and natural.

Another valuable lesson was understanding how the language model never executes Python code directly. Instead, it produces a structured function call, leaving Python responsible for validation and execution. This separation between reasoning and execution not only improves software architecture but also enhances application security and reliability.

Looking back over the previous sessions, I can clearly see the progression of the training—from Object-Oriented Programming and MongoDB integration to CRUD operations, Streamlit applications, conversational chatbots, and finally LLM-powered Agentic AI. Each topic built naturally upon the previous one, culminating in today's intelligent task management application. This gradual progression has significantly improved my understanding of modern AI application development and provided a strong foundation for exploring more advanced autonomous agents in the future.

---

# 📌 Key Takeaways

- AI Agents combine **Memory**, **Tools**, and **Large Language Models**.
- The Google GenAI SDK enables Python applications to communicate with Google's AI models.
- Function Calling allows LLMs to invoke Python functions through structured tool definitions.
- `FunctionDeclaration` describes callable functions using names, descriptions, and parameter schemas.
- Tool registration enables the language model to understand available application functions.
- The LLM returns structured function calls rather than executing code directly.
- Python remains responsible for validating and executing the selected functions.
- Dynamic function execution removes the need for extensive keyword-based programming.
- Streamlit can be integrated with LLMs to build intelligent conversational interfaces.
- Today's architecture forms the basis of modern Agentic AI applications.

---

# 📖 Revision Notes

✔ AI Agent

✔ Memory

✔ Tools

✔ Large Language Model (LLM)

✔ Google GenAI SDK

✔ API Client

✔ Model Selection

✔ Prompt Generation

✔ Function Calling

✔ Tool Calling

✔ `FunctionDeclaration`

✔ Tool Registration

✔ `GenerateContentConfig`

✔ Structured Parameters

✔ JSON Response

✔ `model_dump_json()`

✔ `json.loads()`

✔ Function Name Extraction

✔ Argument Extraction

✔ Dynamic Function Execution

✔ Streamlit Integration

✔ MongoDB Atlas

✔ Agentic AI Workflow

---

# ❓ Interview Questions

### Q1. What are the three fundamental components of an AI Agent?

**Answer:**

An AI Agent consists of **Memory**, **Tools**, and a **Large Language Model (LLM)**. Memory stores information, tools perform external actions, and the LLM understands requests and decides which actions should be taken.

---

### Q2. What is Function Calling in Large Language Models?

**Answer:**

Function Calling allows a language model to select predefined application functions, generate structured arguments, and request Python to execute those functions instead of generating only conversational text.

---

### Q3. Why is a `FunctionDeclaration` required?

**Answer:**

The LLM cannot automatically understand Python functions. A `FunctionDeclaration` provides the function name, description, and parameter schema, enabling the model to determine when and how the function should be called.

---

### Q4. Does the LLM execute Python code directly?

**Answer:**

No. The LLM only generates a structured function call containing the function name and arguments. Python validates the response and performs the actual execution.

---

### Q5. What advantages does Function Calling provide over keyword-based chatbots?

**Answer:**

Function Calling enables natural language understanding, automatic parameter extraction, easier scalability, cleaner code, reduced manual parsing, and more flexible user interactions.

---

### Q6. Why is structured JSON output important?

**Answer:**

Structured JSON responses make it easier for applications to reliably extract function names and arguments, enabling automated execution without complex text parsing.

---

### Q7. How did today's architecture improve upon the chatbot developed previously?

**Answer:**

The previous chatbot relied on manually programmed keyword matching, whereas today's application delegates intent recognition and function selection to the LLM, resulting in a more intelligent and extensible Agentic AI system.

---

### Q8. What role does Python play after the LLM generates a function call?

**Answer:**

Python validates the generated function name and arguments, executes the corresponding application function, interacts with databases or external systems, and returns the execution result to the user.

---

# 🎯 Goals for Next Session

- Explore more advanced multi-tool AI agents.
- Learn how to integrate multiple callable functions with an LLM.
- Improve conversational reasoning using larger toolsets.
- Understand autonomous workflow planning.
- Continue building increasingly capable Agentic AI applications.

---

# ✅ Today's Progress Checklist

- [x] Understood the architecture of an AI Agent.
- [x] Learned the roles of Memory, Tools, and LLMs.
- [x] Integrated the Google GenAI SDK into a Python application.
- [x] Generated responses using Google's language models.
- [x] Understood the concept of Function Calling.
- [x] Defined callable tools using `FunctionDeclaration`.
- [x] Registered tools using `GenerateContentConfig`.
- [x] Sent tool-enabled prompts to the LLM.
- [x] Parsed structured function-call responses.
- [x] Executed Python functions dynamically using LLM-generated arguments.
- [x] Built a Streamlit application powered by LLM function calling.
- [x] Understood the architectural evolution from rule-based chatbots to Agentic AI systems.

---

> [!TIP]
> Today's session demonstrated one of the defining capabilities of modern AI systems: **reasoning combined with action**. A Large Language Model no longer serves only as a text generator—it becomes the decision-making engine of an intelligent agent that can understand goals, select appropriate tools, generate structured function calls, and delegate execution to software systems. This architecture underpins many of today's advanced AI assistants, coding tools, and workflow automation platforms.

---

**Status:** Completed ✅

**Training Day:** 16

**Maintained By:** Saksham Kumar