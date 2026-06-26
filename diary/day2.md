<!--
title: Python Fundamentals, Memory Management & MVC Architecture
date: 2026-06-26
tags: Python, Memory Management, Process, Thread, MVC, Lists, Tuples, Object References
summary: Learned Python setup, execution model, processes, threads, memory architecture, MVC design pattern, Python object references, memory management concepts, and core data structures.
-->

# 🚀 Day 2: Python Fundamentals, Memory Management & MVC Architecture

**Name:** Saksham Kumar
**Course:** B.Tech Computer Science & Engineering
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana
**Training Program:** TRCS102 – Agentic AI Training
**Day:** 2
**Date:** 26 June 2026

---

# 📖 Daily Training Record – Day 2

## 📌 Overview

The second day of the Agentic AI Training focused on building a strong conceptual foundation in Python. Rather than learning only the language syntax, today's session explained how Python programs execute inside an operating system, how memory is managed, how variables reference objects, and how software applications are structured using the MVC (Model–View–Controller) architecture.

These concepts form the backbone of Python programming and will be extremely useful while developing AI applications, automation scripts, and scalable software systems.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

* Install and configure the Python development environment.
* Understand Python's execution model.
* Learn how processes and threads work.
* Understand stack and heap memory.
* Learn the MVC software architecture.
* Understand Python object references using `id()`.
* Differentiate between Lists and Tuples.
* Learn memory management concepts like shallow copy, deep copy, and garbage collection.

---

# 📚 Topics Covered

## 1️⃣ Python Installation & Development Environment

### Topics Learned

* Installing Python
* Configuring Environment Variables
* Installing VS Code
* Python Extension
* Integrated Terminal
* Running Python files

### Why VS Code?

* Lightweight
* Fast startup
* Integrated terminal
* Excellent debugging support
* Rich extension ecosystem
* Git integration

> [!TIP]
> A properly configured development environment improves productivity and makes debugging significantly easier.

---

## 2️⃣ Understanding `__name__`

```python
if __name__ == "__main__":
    print("Program executed directly")
```

### Purpose

* Distinguishes between direct execution and module import.
* Prevents unnecessary code execution when importing modules.
* Encourages reusable Python programs.

---

## 3️⃣ Process & Thread

### Process

A process is an independent program running in memory.

```
Windows
   │
Python Interpreter
   │
Process
```

Each process contains:

* Program Code
* Heap Memory
* Stack Memory
* Threads

### Thread

A thread is the smallest execution unit inside a process.

```
Process

├── Main Thread
├── Thread 1
├── Thread 2
└── Thread 3
```

### Real-World Example

WhatsApp performs multiple tasks simultaneously:

* Sending Messages
* Downloading Images
* Uploading Videos
* Notifications
* Voice Calls

Each operation executes using separate threads while sharing the same process.

### Process vs Thread

| Process                    | Thread                  |
| -------------------------- | ----------------------- |
| Independent execution unit | Smallest execution unit |
| Own memory space           | Shares process memory   |
| More resource-intensive    | Lightweight             |
| Slower creation            | Faster creation         |

---

## 4️⃣ Memory Architecture

```
RAM

Process
│
├── Stack Memory
│     ├── Function Calls
│     └── Local Variables
│
└── Heap Memory
      ├── Objects
      ├── Lists
      ├── Strings
      └── Dictionaries
```

### Stack Memory

* Stores local variables
* Stores function calls
* Automatically managed

### Heap Memory

* Stores dynamically created objects
* Shared by references
* Managed by Python's Garbage Collector

---

## 5️⃣ MVC Architecture

```
User
   │
 View
   │
Controller
   │
 Model
   │
Database / Objects
```

### Model

Represents application data.

Examples:

* Username
* Email
* Shopping Cart
* Student Records

### View

Responsible for displaying information and receiving user input.

Examples:

* Console
* Website
* Mobile App

### Controller

Acts as the brain of the application.

Responsibilities:

* Process user requests
* Execute business logic
* Coordinate between Model and View

> [!NOTE]
> MVC separates data, business logic, and presentation, making applications easier to maintain and scale.

---

## 6️⃣ Python Objects & References

```python
username = "saksham"
age = 20

print(id(username))
print(id(age))
```

### Key Concepts

* Variables store references, not raw values.
* Every Python object has a unique identity.
* `id()` returns the object's memory identity.
* Immutable objects create new references when modified.

Example:

```python
username = "saksham123"
```

A new object is created, and the variable points to the new object.

---

## 7️⃣ Memory Management

### Deleting References

```python
del username
```

Deleting a variable removes only its reference.

The object remains alive until no references exist.

### Garbage Collection

Python automatically frees objects that are no longer referenced.

---

## 8️⃣ Shallow Copy vs Deep Copy

### Shallow Copy

* Copies only the outer object.
* Nested objects remain shared.

### Deep Copy

* Creates completely independent copies.
* Safe for nested data structures.

---

## 9️⃣ Lists

```python
marks = [70, 80, 90]
```

Characteristics:

* Ordered
* Mutable
* Dynamic
* Heterogeneous

Common Operations

* Indexing
* Slicing
* Updating
* Appending
* Removing
* Sorting

---

## 🔟 Tuples

```python
marks = (70, 80, 90)
```

Characteristics:

* Ordered
* Immutable
* Faster than lists
* Suitable for constant data

### List vs Tuple

| Feature     | List                     | Tuple      |
| ----------- | ------------------------ | ---------- |
| Mutable     | ✅                        | ❌          |
| Dynamic     | ✅                        | ❌          |
| Performance | Moderate                 | Faster     |
| Best Use    | Frequently changing data | Fixed data |

---

# 💻 Code Practiced Today

```python
if __name__ == "__main__":
    age = int(input("Enter age: "))
    print(age)
```

---

# 📝 Homework

* Explore Nested Lists.
* Learn list traversal.
* Practice matrices using nested lists.
* Understand practical applications of multidimensional lists.

---

# 🌍 Real-World Applications

Today's concepts are widely used in:

* AI Agents
* Backend Development
* Game Engines
* Mobile Applications
* Automation Scripts
* Data Science
* Machine Learning

---

# 💡 Key Takeaways

* Python variables are references.
* Every program runs inside a process.
* Threads enable concurrent execution.
* Heap stores objects; Stack stores function calls.
* MVC improves software organization.
* Lists are mutable; Tuples are immutable.
* Python automatically manages memory using Garbage Collection.

---

# 📖 Revision Notes

✔ Python Installation

✔ VS Code Setup

✔ `__name__`

✔ Process vs Thread

✔ Stack vs Heap

✔ MVC Architecture

✔ Object Identity

✔ Memory Management

✔ Lists

✔ Tuples

---

# ❓ Interview Questions

### 1. What is the difference between a Process and a Thread?

### 2. Why is `if __name__ == "__main__"` used?

### 3. What does `id()` return?

### 4. Difference between Stack and Heap Memory?

### 5. Explain MVC Architecture.

### 6. Difference between List and Tuple.

### 7. What is a Shallow Copy?

### 8. What is a Deep Copy?

---

# 🎯 Goals for Day 3

* Practice Python programs.
* Learn Nested Lists in detail.
* Solve basic Python problems.
* Strengthen understanding of object references.

---

# ✅ Today's Checklist

* [x] Installed Python
* [x] Configured VS Code
* [x] Learned Process & Thread
* [x] Understood Stack & Heap
* [x] Studied MVC Architecture
* [x] Learned Object References
* [x] Practiced Lists & Tuples
* [x] Completed Homework Assignment

---

# 💭 Personal Reflection

Today's session shifted the focus from writing Python code to understanding how Python actually works internally. Learning about processes, threads, object references, memory allocation, and MVC architecture helped me understand the principles behind software development rather than just the syntax. These concepts will provide a strong foundation for future topics in Agentic AI, automation, and system design.

---

> [!TIP]
> Great programmers don't just know how to write code—they understand how their code executes inside the computer. Today's concepts are fundamental for becoming an efficient software engineer and AI developer.

---

**Status:** Completed ✅

**Training Day:** 2

**Maintained By:** Saksham Kumar
