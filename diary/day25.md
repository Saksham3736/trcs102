<!--
title: Python Microservices with Flask Framework, Dynamic Routing & Google Cloud Firestore NoSQL Database Integration
date: 2026-07-29
tags: Flask, Python Microservices, Web APIs, Dynamic Routing, Jinja2 Templates, Google Cloud Firestore, Firebase Admin SDK, NoSQL Database, CRUD Operations
summary: Explored Python web application and microservices development using the Flask framework in Day 25. Built web APIs with static and dynamic URL routing, query parameter handling, and JSON responses. Integrated Google Cloud Firestore using the Firebase Admin SDK to perform full CRUD operations on hierarchical NoSQL document databases, and connected Flask POST endpoints to persist form inputs to Firestore.
-->

# 🚀 Day 25: Python Microservices with Flask Framework, Dynamic Routing & Google Cloud Firestore Integration

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 25  
**Date:** 29 July 2026

---

# 📖 Daily Training Record – Day 25

## 📌 Overview

Today's training session shifted focus toward web microservices development in Python and cloud-native NoSQL data persistence. While previous sessions utilized Streamlit for rapid AI agent interface prototyping, Day 25 explored building foundational web applications and RESTful HTTP APIs using **Flask**, alongside integrating **Google Cloud Firestore** (part of the Firebase ecosystem) as a flexible document database.

The session covered five core practical scripts (`session25.py`, `session25A.py`, `session25B.py`, `session25C.py`, and `session25D.py`). First, we examined Flask application creation, route definitions, dynamic URL parameters, HTTP query string parsing, and returning JSON payloads using `jsonify()`. Next, we learned template rendering using Flask's `render_template()` engine with Jinja2 placeholders. Then, we transitioned into cloud database integration by connecting to Google Firestore via `firebase_admin` and `service-account-key.json`, establishing a hierarchical NoSQL document collection structure. We implemented complete CRUD (Create, Read, Update, Delete) tasks on Firestore collections. Finally, we bound Flask HTTP POST endpoints to HTML registration forms, demonstrating end-to-end web request parsing and NoSQL database persistence.

These concepts form the technical backbone required to convert isolated Python AI agent scripts into scalable, enterprise-grade cloud microservices and web applications.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the ecosystem position of Flask compared to FastAPI and Django for building Python microservices.
- Initialize Flask application instances (`app = Flask('MyApp')`) and run local development servers in debug mode.
- Define static routes (`/about`, `/contact`) and dynamic URL variable rules (`/hello/<name>`).
- Parse HTTP GET query string parameters (`request.args.get('q')`) within Flask view functions.
- Format and return JSON HTTP responses using Flask's native `jsonify()` utility.
- Render server-side HTML templates using `render_template()` and configure Flask's `/templates` directory structure.
- Understand Google Cloud Firestore's hierarchical NoSQL document-store architecture (`collection/document/collection/document...`).
- Authenticate and initialize the Firebase Admin SDK using service account JSON key credentials.
- Execute full Firestore CRUD operations (`add()`, `stream()`, `where()`, `update()`, `delete()`).
- Process HTML form submissions (`request.form`) via Flask POST endpoints (`methods=['POST']`) and persist records to Firestore.

---

# 📚 Key Learnings

## 1️⃣ Session 25 – Flask Fundamentals: Routes, Dynamic Parameters & JSON APIs

Flask is a lightweight WSGI web application framework in Python designed to build fast web endpoints and microservices without requiring rigid boilerplate.

```
                  Python Web Framework Ecosystem
┌─────────────────────────────────────────────────────────────────┐
│  • Flask     ──► Lightweight, microservices, maximum flexibility │
│  • FastAPI   ──► High-performance, async-native, OpenAPI auto   │
│  • Django    ──► Enterprise-grade, full-stack ORM & admin suite │
└─────────────────────────────────────────────────────────────────┘
```

---

### Step 1 — Basic Flask App & HTML String Responses (`session25.py`)

```python
from flask import Flask, request, jsonify

# Create Flask app instance
app = Flask('MyApp')

@app.route('/')
def home():
    # Returning raw HTML markup over HTTP plain text
    return """
    <html>
        <body>
            <center><h1>Welcome to Flask Web App</h1></center>
        </body>
    </html>
    """

@app.route('/about')
def about():
    return 'Welcome to Agentic AI with Auribises'

@app.route('/contact')
def contact():
    return 'Contact Us at +91 99999 11111'
```

---

### Step 2 — Dynamic URL Rules & Query Parameters

Flask allows passing parameters directly through the URL path (`/hello/<name>`) or extracting URL query parameters via `request.args`.

```python
# Dynamic path parameter routing
@app.route('/hello/<name>')
def hello(name):
    # 'name' is captured dynamically from the URL path
    return f"Hello {name}"

# HTTP GET Query string handling
@app.route('/search')
def search():
    # URL Example: http://127.0.0.1:5000/search?q=auribises&city=ludhiana
    keyword = request.args.get('q')
    city = request.args.get('city')
    return f"You searched for keyword: '{keyword}' in city: '{city}'"

# JSON API Response Endpoint
@app.route('/weather')
def weather():
    weather_details = {
        'city': 'ludhiana',
        'temperature': '24 degrees',
        'rain': 75
    }
    # Converts dictionary payload into application/json HTTP response
    return jsonify(weather_details)

if __name__ == '__main__':
    app.run(debug=True)
```

---

## 2️⃣ Session 25A – Server-Side HTML Rendering (`render_template`)

For web applications returning structured UI views, hardcoding HTML strings inside Python files violates clean architecture. Flask provides `render_template()` to serve external HTML files stored inside a root `/templates` folder.

```python
# session25A.py
from flask import Flask, render_template

app = Flask('MyApp')

@app.route('/')
def home():
    # Renders templates/index.html and injects dynamic variables
    return render_template('index.html', name='Task Delegation Agent')

if __name__ == '__main__':
    app.run(debug=True)
```

```
Project Root Directory Structure:
├── session25A.py
└── templates/
    └── index.html
```

---

## 3️⃣ Session 25B – Google Cloud Firestore NoSQL Architecture

Firestore is a scalable, cloud-native NoSQL document database provided by Google Firebase. Unlike relational databases (SQL tables with fixed rows and columns), Firestore stores data in **hierarchical collections and JSON-like documents**.

### Firestore Hierarchical Data Model:

```
  /users (Collection)
     ├── john (Document)
     │     ├── name: "John"
     │     ├── email: "john@example.com"
     │     └── /orders (Sub-Collection)
     │            ├── o1 (Document)
     │            └── o2 (Document)
     └── jim (Document)
           └── name: "Jim"
```

---

### Connecting Firebase Admin SDK (`session25B.py`)

To authenticate with Firestore from Python, we load private service account credentials downloaded from the Firebase Console.

```python
# session25B.py
import firebase_admin
from firebase_admin import credentials, firestore

# Initialize Firebase Admin SDK using Service Account JSON key
cred = credentials.Certificate("service-account-key.json")
firebase_admin.initialize_app(cred)

# Initialize Firestore Client
db = firestore.client()
print('Firestore: DB Connection Created successfully...')
```

---

## 4️⃣ Session 25C – Complete Firestore CRUD Operations

In `session25C.py`, we built a complete data access layer managing task documents within Firestore.

```python
# session25C.py
import firebase_admin
from firebase_admin import credentials, firestore
import datetime

cred = credentials.Certificate("service-account-key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

# 1. CREATE Operation
def create_task(task_data):
    # Auto-generates a unique document ID in 'tasks' collection
    result = db.collection('tasks').add(task_data)
    print('Task Created with Document ID:', result[1].id)

# 2. READ Operation (Filtered Querying)
def get_all_tasks():
    # Query tasks where status equals 'pending'
    docs = db.collection('tasks').where('status', '==', 'pending').stream()
    for task in docs:
        print("Document ID:", task.id)
        print("Data:", task.to_dict())
        print('-----------------------------------------')

# 3. UPDATE Operation
def update_task(doc_id):
    updated_data = {
        'title': 'Email James',
        'description': 'Email James and ask status on bus ticketing solution',
        'status': 'completed',
        'priority': 'medium',
        'updated_at': datetime.datetime.now()
    }
    # Select specific document by ID and update fields
    db.collection('tasks').document(doc_id).update(updated_data)
    print('Task Document Updated successfully.')

# 4. DELETE Operation
def delete_task(doc_id):
    db.collection('tasks').document(doc_id).delete()
    print('Task Document Deleted.')
```

---

## 5️⃣ Session 25D – Integrating Flask POST Endpoints with Firestore DB

Finally, in `session25D.py`, we combined web request handling and database persistence by creating a user registration workflow.

```python
# session25D.py
from flask import Flask, request, render_template
import firebase_admin
from firebase_admin import credentials, firestore
import datetime

# Database Setup
cred = credentials.Certificate("service-account-key.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

app = Flask('MyApp')

@app.route('/')
def home():
    # Renders the registration form page
    return render_template('register-user.html')

@app.route('/save-user', methods=['POST'])
def save_user_in_db():
    # Extract HTTP POST form fields
    user_data = {
        'name': request.form['name'],
        'email': request.form['email'],
        'password': request.form['password'], # In production, hash using bcrypt/sha256
        'created_at': datetime.datetime.now()
    }

    # Persist user document into Firestore 'users' collection
    db.collection('users').add(user_data)

    # Render confirmation view with user's name
    return render_template('home.html', name=user_data['name'])

if __name__ == '__main__':
    app.run(debug=True)
```

---

## 🏛️ Flask & Firestore Web Application Flow

```
+-----------------------------------------------------------------------------------+
|                            Flask & Firestore Architecture                         |
+-----------------------------------------------------------------------------------+
|  Browser / Client                                                                 |
|       │                                                                           |
|       ├─► GET  /               ──► Renders register-user.html form                 |
|       │                                                                           |
|       └─► POST /save-user      ──► Transmits form payload (name, email, pass)      |
|                                            │                                      |
|                                            ▼                                      |
|  Flask Web Server (session25D.py)                                                 |
|       │                                                                           |
|       ├─► Extracts request.form data                                              |
|       └─► Invokes Firebase Admin SDK -> db.collection('users').add(...)           |
|                                            │                                      |
|                                            ▼                                      |
|  Google Cloud Firestore Database                                                  |
|       └── Appends new document in 'users' collection with auto-generated ID       |
|                                            │                                      |
|                                            ▼                                      |
|  Response                                                                         |
|       └── Renders home.html greeting view                                         |
+-----------------------------------------------------------------------------------+
```

---

> [!NOTE]
> Combining lightweight web servers like Flask with cloud-hosted NoSQL document stores like Firestore allows applications to scale horizontally without managing local database server hardware or maintaining rigid SQL schemas.

---

# Day 25 Summary

Today's session provided a practical foundation in Python web API development and cloud database integration. We explored **Flask framework** routing, URL parameter parsing, JSON API building, and HTML template rendering. We then mastered **Google Cloud Firestore**, learning its hierarchical document model, authenticating via service account credentials, executing full CRUD operations, and binding HTTP POST endpoints to persist user form inputs into Firestore.

---

# 📝 Personal Reflection

Learning Flask alongside Firestore demonstrated how simple it is to build flexible Python microservices. Transitioning from raw HTML string responses to modular template rendering clarified web server architecture.

Understanding Firestore's NoSQL model was particularly insightful. Compared to relational databases, storing nested objects and document streams in Firestore makes it simple to handle unstructured AI task logs and user telemetry. Connecting Flask form handlers to Firestore highlighted the fundamental flow of modern web applications.

---

# 📌 Key Takeaways

- Flask is a micro-framework ideal for lightweight web APIs and Python microservices.
- Routes can be configured with static paths, dynamic URL variables (`<name>`), or query arguments (`request.args`).
- `jsonify()` converts Python dictionaries into standard HTTP JSON responses.
- `render_template()` renders server-side HTML views from the `/templates` project directory.
- Firestore organizes data hierarchically in collections and documents (`collection/document/collection/document...`).
- Firebase Admin SDK requires `service-account-key.json` for server-side authentication.
- Firestore CRUD actions use `.add()`, `.stream()`, `.where()`, `.update()`, and `.delete()`.
- HTTP POST request data is accessed via `request.form` in Flask view functions.

---

# 📖 Revision Notes

✔ Flask Framework Setup (`app = Flask('MyApp')`)

✔ Dynamic Routing & URL Variables (`@app.route('/hello/<name>')`)

✔ HTTP GET Query Parameters (`request.args.get()`)

✔ JSON API Output (`jsonify()`)

✔ Template Engine Rendering (`render_template('index.html')`)

✔ Google Cloud Firestore NoSQL Architecture

✔ Firebase Admin SDK Initialization (`credentials.Certificate()`)

✔ Firestore Document CRUD Operations (`add`, `where`, `update`, `delete`)

✔ Form Processing (`request.form`) & HTTP POST Methods

---

# ❓ Interview Questions

### Q1. What is Flask, and how does it differ from FastAPI and Django?

**Answer:**

Flask is a lightweight WSGI micro-framework for Python focused on simplicity and flexibility without enforcing fixed project structures. Django is a full-stack battery-included framework with an ORM and admin suite. FastAPI is an asynchronous ASGI framework optimized for high-performance REST APIs with automatic OpenAPI doc generation.

---

### Q2. How are dynamic parameters passed in Flask routes?

**Answer:**

Dynamic parameters are specified in route decorators using angle brackets, such as `@app.route('/user/<username>')`. Flask passes the captured segment as a string keyword argument to the view function.

---

### Q3. How do you retrieve HTTP GET query string parameters in Flask?

**Answer:**

Query parameters (e.g. `?q=search_term`) are accessed via `request.args.get('key_name')`. If the key is absent, `get()` returns `None` or a specified default fallback value.

---

### Q4. What is the role of `jsonify()` in Flask?

**Answer:**

`jsonify()` serializes a Python dictionary or list into a JSON string and wraps it in a Flask `Response` object with the HTTP header `Content-Type: application/json`.

---

### Q5. Where must HTML files be placed when using Flask's `render_template()`?

**Answer:**

By default, Flask looks for HTML files inside a directory named `templates` located at the root of the project folder alongside the running Python application script.

---

### Q6. How does Google Cloud Firestore structure data differently from relational SQL databases?

**Answer:**

Relational databases store data in rigid tables with rows and columns. Firestore is a NoSQL document database that organizes data hierarchically into collections containing documents, which contain key-value fields or nested sub-collections.

---

### Q7. How do you authenticate a Python backend with Firestore using Firebase Admin SDK?

**Answer:**

Authentication requires downloading a Service Account JSON private key file from Firebase, loading credentials with `credentials.Certificate("service-account-key.json")`, and initializing the app via `firebase_admin.initialize_app(cred)`.

---

### Q8. How do you perform a filtered query in Firestore using Python?

**Answer:**

Filtered queries use the `.where()` method on a collection reference, e.g., `db.collection('tasks').where('status', '==', 'pending').stream()`, which returns an iterable stream of matching document snapshots.

---

### Q9. How do you capture HTML form submissions in Flask?

**Answer:**

Define the route to accept POST requests via `@app.route('/endpoint', methods=['POST'])`, and access submitted form key-value pairs through `request.form['field_name']`.

---

### Q10. What is the difference between `db.collection().add()` and `db.collection().document().set()` in Firestore?

**Answer:**

`.add(data)` automatically generates a unique alphanumeric document ID, whereas `.document(custom_id).set(data)` creates or overwrites a document at a specific, user-defined document path.

---

# 🎯 Goals for Next Session

- Explore containerization concepts with Docker for Flask microservices.
- Implement token-based authentication (JWT) for Flask REST endpoints.
- Build custom REST API endpoints exposing Firestore database queries.
- Connect AI agent logic directly to Flask web webhooks.

---

# ✅ Today's Progress Checklist

- [x] Initialized Flask app instances and ran local servers.
- [x] Configured static routes, dynamic URL variables, and query parameter handling.
- [x] Formatted JSON responses using `jsonify()`.
- [x] Rendered server-side HTML views using `render_template()`.
- [x] Connected to Google Cloud Firestore via Firebase Admin SDK.
- [x] Implemented Firestore task CRUD functions (`add`, `where`, `update`, `delete`).
- [x] Handled HTTP POST form submissions (`request.form`) and persisted entries to Firestore.

---

# 📋 Day 25 Completion Status

| Category | Status |
|----------|--------|
| Theory Covered | ✅ Completed |
| Practical Demonstrations | ✅ Completed |
| Flask App Setup & Routing | ✅ Completed |
| Dynamic & Query Parameters | ✅ Completed |
| JSON API Utilities | ✅ Completed |
| Template Rendering Setup | ✅ Completed |
| Firestore Admin SDK Integration | ✅ Completed |
| Firestore Document CRUD | ✅ Completed |
| Form Processing & Persistence | ✅ Completed |
| Revision Notes Prepared | ✅ Completed |
| Interview Questions Prepared | ✅ Completed |
| Personal Reflection Written | ✅ Completed |
| Training Diary Updated | ✅ Completed |

---

### **Maintained By:** Saksham Kumar  
### **Training Program:** TRCS102 – Agentic AI Training  
### **Day:** 25  
### **Status:** ✅ Successfully Completed
