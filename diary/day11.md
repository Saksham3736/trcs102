<!--
title: Python File Handling, JSON Processing, Virtual Environments & REST API Integration
date: 2026-07-08
tags: Python, File Handling, File I/O, JSON, Virtual Environment, Requests, REST API, News API
summary: Explored Python File Handling using text files, learned File Input/Output streams, implemented file reading and writing operations, generated CSV reports, introduced JSON serialization and deserialization, configured Python Virtual Environments, and consumed a REST API using the Requests library.
-->

# 🚀 Day 11: Python File Handling, JSON Processing & REST API Integration

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 11  
**Date:** 8 July 2026

---

# 📖 Daily Training Record – Day 11

## 📌 Overview

Today's session introduced one of the most practical aspects of Python programming—**File Handling**. Until now, all the programs developed during the training stored data only in memory, meaning that all information was lost once the program terminated. Today's lecture demonstrated how Python programs can permanently store and retrieve data using files.

The session began with the fundamentals of **File Input/Output (File I/O)**, explaining how programs communicate with external files through input and output streams. Different approaches to reading files, including `read()`, `readline()`, and `readlines()`, were demonstrated, followed by proper techniques for opening and closing files. The instructor also introduced Python's **context manager (`with open`)**, highlighting why it is considered the preferred approach for safe and automatic resource management.

The practical exercises then focused on writing data into files using different file modes such as **read (`r`)**, **write (`w`)**, and **append (`a`)**. Through a simple Quote Saver application, we observed how writing mode replaces existing content while append mode preserves previously stored data.

Building upon these concepts, a more practical exercise demonstrated how Python programs can read another Python source file, count occurrences of specific objects, and automatically generate a **CSV (Comma-Separated Values)** report. This illustrated how file handling can be used to automate repetitive programming tasks.

The second half of the session introduced **JSON (JavaScript Object Notation)**, the most widely used format for exchanging structured data between applications. We learned how Python dictionaries can be converted into JSON strings using `json.dumps()` and restored back into dictionaries using `json.loads()`, demonstrating the concepts of **serialization** and **deserialization**.

Finally, the lecture explored **Virtual Environments** and third-party Python libraries. After understanding why isolated project environments are important, the instructor demonstrated how to install external packages using `pip` and consume data from an online **REST API** using the `requests` library. A News API example illustrated how HTTP responses containing JSON data can be parsed and displayed using Python.

Overall, today's session connected Python with external files, structured data formats, and web services, providing a strong foundation for developing real-world software applications.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the concept of File Input/Output (File I/O).
- Learn how Python interacts with files using input and output streams.
- Read text files using `read()`, `readline()`, and `readlines()`.
- Understand the purpose of file objects and the importance of closing files.
- Use the `with open()` context manager for automatic file handling.
- Differentiate between file modes such as `r`, `w`, and `a`.
- Write and append data to text files.
- Generate CSV files programmatically using Python.
- Understand the concepts of serialization and deserialization.
- Convert Python dictionaries to JSON strings using `json.dumps()`.
- Convert JSON strings back into Python dictionaries using `json.loads()`.
- Learn the purpose of Python Virtual Environments.
- Install external Python libraries using `pip`.
- Consume REST APIs using the `requests` library.
- Parse JSON responses received from web APIs.

---

# 📚 Key Learnings

## 1️⃣ Introduction to File Handling

The session began with an introduction to **File Handling**, one of the most important features of any programming language.

Until now, all the programs executed during training stored their data only in **RAM (main memory)**. Once the program terminated, every variable and object created during execution was automatically destroyed.

To preserve information permanently, programs must interact with **secondary storage devices** such as hard disks or SSDs through files.

Python provides built-in support for reading and writing files, allowing applications to store, retrieve, and update information even after the program has finished executing.

---

### Why File Handling?

Without files:

```
Program Starts
    ↓
Variables Created
    ↓
Program Ends
    ↓
Data Lost
```

With file handling:

```
Program
    ↓
Write Data
    ↓
Text File
    ↓
Program Ends
    ↓
Data Still Available
```

This ability to permanently store information makes file handling essential for real-world software development.

---

### Common Uses of File Handling

Python file handling is widely used for:

- Saving application data.
- Reading configuration files.
- Maintaining log files.
- Processing CSV datasets.
- Storing reports.
- Reading source code.
- Creating backups.
- Exporting program output.

Almost every desktop, web, or enterprise application performs file operations in some form.

---

## 2️⃣ Understanding File Objects

Before reading or writing any file, Python first creates a **File Object**.

The instructor demonstrated this using the built-in `open()` function.

### Classroom Code

```python
file = open("awesome.txt", "r")

print(type(file))
```

The `open()` function does **not** immediately return the contents of the file.

Instead, it returns a **file object**, which acts as a communication channel between the Python program and the physical file stored on disk.

---

### Visual Representation

```
   awesome.txt
        ▲
        │
   File Object
        ▲
        │
  Python Program
```

The file object provides methods that allow the program to perform various operations such as reading, writing, seeking, and closing the file.

---

### File Object Type

Executing

```python
print(type(file))
```

produces output similar to:

```text
<class '_io.TextIOWrapper'>
```

This indicates that Python has created a **Text Input Stream** for reading textual data.

---

> [!NOTE]
> The file object does not store the contents of the file itself. Instead, it manages the connection between the Python program and the file, providing methods to access or modify its contents efficiently.

---

## 3️⃣ Reading Data from Files

After understanding file objects, the instructor demonstrated different techniques for reading data from a text file.

The example used throughout the session was a file named:

```
awesome.txt
```

whose contents were:

```text
this is awesome
this is lovely
this is excellent
this is good
this is correct
```

The objective was to understand how Python retrieves data stored inside external files.

---

## The `read()` Method

The simplest way to read an entire file is by using the `read()` method.

### Example

```python
file = open("awesome.txt", "r")

data = file.read()

print(type(data))

print(data)

file.close()
```

---

### Output

```text
<class 'str'>

this is awesome
this is lovely
this is excellent
this is good
this is correct
```

---

### How It Works

```
awesome.txt
↓
read()
↓
Entire File Contents
↓
Python String
```

The important observation made during the class was that **`read()` returns one complete string**, not a list.

This makes it suitable when the entire file needs to be processed at once.

---

## The `readline()` Method

The instructor then introduced another method:

```python
readline()
```

Unlike `read()`, this method retrieves **only one line at a time**.

Example

```python
file = open("awesome.txt", "r")

line = file.readline()

print(line)
```

Output

```text
this is awesome
```

Calling

```python
file.readline()
```

again returns

```text
this is lovely
```

because the file pointer automatically moves to the next line after every read.

---

### Internal Flow

```
Line 1
 ↓
readline()
 ↓
Pointer Moves
 ↓
Line 2
 ↓
readline()
 ↓
Pointer Moves
 ↓
Line 3
```

This method is useful when processing large files sequentially.

---

## The `readlines()` Method

The third method discussed during the lecture was

```python
readlines()
```

Instead of returning one string,

it returns **a list of strings**, where each list element represents one line of the file.

---

### Classroom Code

```python
file = open("awesome.txt", "r")

lines = file.readlines()

print(type(lines))

print(len(lines))
```

---

### Output

```text
<class 'list'>

5
```

The instructor highlighted that

```python
lines
```

contains

```python
[
    "this is awesome\n",
    "this is lovely\n",
    "this is excellent\n",
    "this is good\n",
    "this is correct"
]
```

Each line is stored as an independent string.

---

### Iterating Through the File

Once the list is obtained,

a simple loop can process every line.

```python
for line in lines:

    print(line)
```

---

### CLI Output

```text
this is awesome

this is lovely

this is excellent

this is good

this is correct
```

---

### Comparison of Reading Methods

| Method | Return Type | Best Use Case |
|---------|-------------|---------------|
| `read()` | String | Read the complete file at once |
| `readline()` | String | Read one line at a time |
| `readlines()` | List | Process each line individually |

---

## Closing the File

Once all file operations are complete,

the instructor emphasized calling

```python
file.close()
```

This releases the operating system resources associated with the file.

Complete example:

```python
file = open("awesome.txt", "r")

lines = file.readlines()

for line in lines:

    print(line)

file.close()
```

---

### Why Close the File?

Closing a file ensures that:

- Resources are released.
- Data is written correctly (for output files).
- File corruption is avoided.
- Other applications can safely access the file.

Neglecting to close files can lead to unnecessary resource consumption and file-locking issues.

---

## 4️⃣ Understanding File Input/Output (File I/O)

While discussing file handling, the instructor introduced the concept of **File Input/Output**, commonly abbreviated as **File I/O**.

File I/O describes how a program exchanges data with files stored on secondary storage.

Rather than accessing the file directly, Python communicates through **streams**.

---

## What is a Stream?

A **stream** is simply a continuous flow of data between two entities.

Depending on the operation being performed,

the data may travel:

- From the file to the program.
- From the program to the file.

Streams may carry either:

- Characters (Text Files)
- Bytes (Binary Files)

---

### Input Stream

Reading data from a file uses an **Input Stream**.

```
   Text File
        │
        ▼
   Input Stream
        │
        ▼
  Python Program
```

The data flows **from the file into the program**.

Examples:

```python
read()

readline()

readlines()
```

---

### Output Stream

Writing data to a file uses an **Output Stream**.

```
Python Program
        │
        ▼
  Output Stream
        │
        ▼
    Text File
```

The data flows **from the program into the file**.

Examples:

```python
write()
```

---

### File I/O

Combining both operations gives us

```
Input Stream
    ↓
Python Program
    ↓
Output Stream
```

This complete process is known as

**File Input/Output (File I/O).**

---

## Character Stream vs Byte Stream

The instructor briefly mentioned that streams can transfer two different types of information.

| Stream Type | Data Transferred |
|-------------|------------------|
| Character Stream | Text characters |
| Byte Stream | Binary data such as images, audio, videos, PDFs, executables |

Today's examples focused entirely on **Character Streams**, since all files were plain text files.

---

## Runtime Errors and Compile-Time Errors

During the discussion, the instructor also differentiated between two common categories of programming errors.

### Compile-Time Errors

These errors occur before the program starts executing.

Examples include:

- Incorrect syntax
- Missing brackets
- Indentation mistakes
- Invalid keywords

Such errors prevent the Python interpreter from executing the program.

---

### Runtime Errors

Runtime errors occur **while the program is executing**.

Examples:

- File Not Found
- Division by Zero
- Invalid User Input
- Network Failure

Example

```python
file = open("missing.txt")
```

Output

```text
FileNotFoundError
```

The program starts successfully but terminates when the file cannot be located.

---

### Exception Handling

The instructor briefly introduced **Exception Handling** as the mechanism used to handle runtime errors gracefully.

Instead of abruptly terminating the program,

Python allows developers to catch exceptions and continue execution using appropriate error-handling constructs, which will be discussed in greater detail in future sessions.

---

> [!IMPORTANT]
> A common interview question is the difference between **Compile-Time Errors** and **Runtime Errors**. Compile-time errors prevent program execution due to syntax issues, whereas runtime errors occur after the program has started executing because of exceptional situations such as missing files, invalid operations, or unavailable resources.

---

## 5️⃣ Context Managers – Using `with open()`

After discussing the traditional approach of opening and closing files manually, the instructor introduced a safer and more Pythonic technique for handling files using a **Context Manager**.

Instead of writing

```python
file = open("awesome.txt")

...

file.close()
```

Python provides the `with` statement, which automatically manages file resources.

---

### Classroom Code

```python
with open("awesome.txt") as file:

    lines = file.readlines()

    for line in lines:

        print(line)

file.close()

print("[PROGRAM] >> Program Finished...")
```

---

### Understanding the Workflow

When the `with` statement is executed:

```
    Open File
        │
        ▼
    Read Data
        │
        ▼
   Execute Block
        │
        ▼
Automatically Close File
```

Unlike the previous approach, the programmer does not need to remember to close the file manually.

Once the execution leaves the `with` block, Python automatically closes the file.

---

### Why is `with open()` Better?

Using a context manager provides several advantages:

- Automatically closes the file.
- Prevents resource leaks.
- Produces cleaner code.
- Handles exceptions safely.
- Recommended in professional Python development.

---

### Traditional Approach vs Context Manager

#### Traditional Method

```python
file = open("awesome.txt")

lines = file.readlines()

file.close()
```

The programmer is responsible for remembering to close the file.

If `close()` is forgotten, the file remains open until Python eventually releases the resource.

---

#### Context Manager

```python
with open("awesome.txt") as file:

    lines = file.readlines()
```

Python automatically performs:

```
Open
↓
Execute
↓
Close
```

without any additional statements.

---

### Program Output

Executing today's example produces:

```text
this is awesome

this is lovely

this is excellent

this is good

this is correct

[PROGRAM] >> Program Finished...
```

---

### Internal Execution

Conceptually,

Python performs something similar to:

```
Acquire Resource
↓
Use Resource
↓
Release Resource
```

This resource-management pattern is applicable not only to files but also to:

- Database connections
- Network sockets
- Locks
- External resources

---

## 6️⃣ Writing Data to Files

After learning how to read files, the instructor demonstrated how Python writes data to external files.

Unlike reading, writing transfers data

```
Program
↓
Output Stream
↓
File
```

This permanently stores program output on secondary storage.

---

## Write Mode (`w`)

The first file-writing mode introduced was:

```python
"w"
```

which stands for **Write Mode**.

---

### Classroom Code

```python
file = open("quotes.txt", "w")

quote = input("Enter a Quote: ")

file.write(quote)

file.close()

print("Quote Saved....")
```

---

### Execution Flow

```
User Input
↓
Python Program
↓
write()
↓
quotes.txt
```

---

### Sample CLI Output

```text
Enter a Quote:
Search the candle rather than cursing the darkness

Quote Saved....
```

Contents of

```
quotes.txt
```

become

```text
Search the candle rather than cursing the darkness
```

---

### Important Observation

The instructor pointed out an important behavior of **Write Mode**.

Suppose the file initially contains:

```text
Hello

Python
```

Running the same program again with

```
Be exceptional
```

produces

```text
Be exceptional
```

The previous contents disappear completely.

---

### Why?

Write mode always performs:

```
Open File
↓
Delete Existing Contents
↓
Write New Data
↓
Close File
```

Therefore,

```python
"w"
```

is suitable when old data should be replaced entirely.

---

## 7️⃣ Append Mode (`a`)

To preserve previously stored data,

the instructor introduced **Append Mode**.

---

### Classroom Code

```python
file = open("quotes.txt", "a")

quote = input("Enter a Quote: ")

file.write(quote + "\n")

file.close()

print("Quote Saved....")
```

---

### Execution Flow

```
Existing File
↓
Move Cursor
↓
End of File
↓
Write New Quote
```

Unlike Write Mode,

Append Mode never removes existing data.

---

### Sample CLI Output

First execution

```text
Enter a Quote:
Search the candle rather than cursing the darkness

Quote Saved....
```

Second execution

```text
Enter a Quote:
Be exceptional

Quote Saved....
```

---

### Resulting File

```text
Search the candle rather than cursing the darkness

Be exceptional
```

Each new quote is appended to the end of the file.

The statement

```python
quote + "\n"
```

ensures that every quote is written on a separate line.

Without

```python
"\n"
```

all quotes would appear on a single line.

---

## File Modes Comparison

| Mode | Purpose | Existing Data |
|------|---------|---------------|
| `"r"` | Read a file | Preserved |
| `"w"` | Write a file | Deleted before writing |
| `"a"` | Append to a file | Preserved; new data added at the end |

These three modes form the foundation of most file-handling operations in Python.

---

> [!TIP]
> Use **Write Mode (`w`)** when creating or replacing an entire file, and **Append Mode (`a`)** when maintaining logs, reports, or records where existing data must be preserved. In professional applications such as log files, audit trails, and transaction histories, **append mode** is generally the preferred choice because it avoids accidental data loss.

---

## 8️⃣ Practical Exercise – Counting Objects from a Python Source File

After understanding file reading and writing, the instructor demonstrated a practical application that combined **File Handling**, **Dictionaries**, and **Automation**.

Instead of manually counting objects inside a Python program, a new script was developed that automatically reads another Python source file, searches for specific object creations, counts their occurrences, and finally stores the results in a CSV file.

This exercise illustrated how Python can analyze source code and generate reports automatically.

---

## Objective

The program performs the following tasks:

1. Open an existing Python source file.
2. Read it line by line.
3. Search for object creation statements.
4. Count each object type.
5. Store the results inside a CSV file.

This is a simple example of **Source Code Analysis**.

---

## Classroom Code

```python
objects = {
    'Vehicle': 0,
    'FastTag': 0,
    'Queue': 0
}

with open("DAY 10/session10B.py") as file:

    lines = file.readlines()

    for line in lines:

        if "Vehicle(" in line:

            objects["Vehicle"] += 1

        elif "FastTag(" in line:

            objects["FastTag"] += 1

        elif "TollPlazaQueue(" in line:

            objects["Queue"] += 1
```

---

## Step 1 – Creating the Dictionary

The program first initializes a dictionary.

```python
objects = {

    "Vehicle": 0,

    "FastTag": 0,

    "Queue": 0
}
```

Initially,

```
Vehicle → 0

FastTag → 0

Queue → 0
```

This dictionary stores the count of every object encountered during file analysis.

---

## Step 2 – Reading the Python File

The following statement opens the previously created Toll Plaza program.

```python
with open("DAY 10/session10B.py") as file:
```

The complete source file is then loaded.

```python
lines = file.readlines()
```

Result

```
Python Source File
↓
List of Strings
↓
Each Line Processed Individually
```

---

## Step 3 – Searching the Source Code

The instructor then used simple string searching.

Example

```python
if "Vehicle(" in line:
```

Whenever Python encounters

```python
Vehicle(
```

the corresponding counter increases.

Similarly,

```python
FastTag(
```

increments the FastTag count.

Finally,

```python
TollPlazaQueue(
```

increments the Queue counter.

---

### Execution Flow

```
   Read One Line
        ↓
Contains "Vehicle(" ?
        │
        ▼
       YES
        ↓
     Vehicle Count +1
        ↓
     Next Line
        ↓
      Repeat
```

The same logic executes for every line in the source file.

---

## Dictionary After Processing

After scanning the file,

the dictionary becomes approximately

```python
{

    "Vehicle": 5,

    "FastTag": 5,

    "Queue": 1

}
```

because the previous Toll Plaza program creates

- Five Vehicle objects.
- Five FastTag objects.
- One TollPlazaQueue object.

---

## 9️⃣ Generating a CSV Report

After counting all objects,

the instructor demonstrated how to generate a **CSV (Comma-Separated Values)** report automatically.

---

### Classroom Code

```python
file = open("Objects_count.csv", "a")

for key in objects:

    file.write(

        f"{key},{objects[key]}\n"

    )

file.close()

print("Data created successfully")
```

---

### Writing Process

```
Dictionary
    ↓
CSV Formatter
    ↓
Objects_count.csv
```

Each dictionary entry becomes one line inside the CSV file.

---

### Generated CSV File

```text
Vehicle,5

FastTag,5

Queue,1
```

Each row contains

```
Object Name,

Count
```

making the output suitable for spreadsheets and reporting tools.

---

### CLI Output

```text
Data created successfully
```

---

## Why Use CSV?

CSV (Comma-Separated Values) is one of the simplest formats for storing structured data.

Unlike a plain text file,

```
Vehicle: 5
```

a CSV file stores

```
Vehicle,5
```

where each comma separates individual fields.

This allows software such as

- Microsoft Excel
- Google Sheets
- LibreOffice Calc

to import the data automatically into rows and columns.

---

### CSV Representation

```
Object,Count

Vehicle,5

FastTag,5

Queue,1
```

---

### TXT vs CSV

| Text File | CSV File |
|-----------|----------|
| Stores unstructured text | Stores structured tabular data |
| Difficult to analyze automatically | Easily imported into spreadsheets and databases |
| Used for notes and logs | Used for reports and datasets |

---

## 🔟 Source Code Analysis

Although today's program is relatively small,

the instructor explained that similar techniques are used in professional software development.

Large organizations automatically analyze thousands of source files to determine:

- Number of classes
- Number of functions
- Object creation statistics
- Coding standards
- Documentation coverage
- Code quality metrics

This process is known as **Static Source Code Analysis**.

Today's exercise serves as a simple introduction to this broader concept.

---

> [!IMPORTANT]
> This practical demonstrated that Python is not limited to reading ordinary text files—it can also process **source code files**. By combining file handling with dictionaries and string searching, repetitive software analysis tasks can be automated efficiently, making Python an excellent language for scripting and developer tooling.

---

## 1️⃣1️⃣ Introduction to JSON (JavaScript Object Notation)

After exploring text files and CSV files, the instructor introduced **JSON (JavaScript Object Notation)**, one of the most widely used data-interchange formats in modern software development.

Although JSON originated from JavaScript, it has become a universal data format supported by almost every programming language.

Today, JSON is extensively used for communication between:

- Web Applications
- Mobile Applications
- REST APIs
- Cloud Services
- Databases
- Artificial Intelligence Applications

---

## What is JSON?

JSON is a lightweight text-based format used to represent structured data.

It stores information as **key-value pairs**, making it very similar to Python dictionaries.

Example JSON

```json
{
    "name": "Saksham",
    "age": 20,
    "city": "Ludhiana"
}
```

Notice that every value is associated with a key.

---

### JSON Structure

```
{

    "key" : value,

    "key" : value,

    ...

}
```

This structure makes JSON both human-readable and machine-readable.

---

## Python Dictionary vs JSON

The instructor explained that Python dictionaries closely resemble JSON objects.

Python Dictionary

```python
student = {

    "name": "Saksham",

    "age": 20,

    "city": "Ludhiana"

}
```

Equivalent JSON

```json
{
    "name": "Saksham",
    "age": 20,
    "city": "Ludhiana"
}
```

Although they look similar, they are **not identical**.

| Python Dictionary | JSON |
|-------------------|------|
| Python Object | Text Representation |
| Exists in Memory | Used for Data Exchange |
| Mutable | Plain Text |

---

## Why JSON?

JSON has become the standard data format because it is:

- Lightweight
- Easy to Read
- Easy to Write
- Language Independent
- Easily Parsed
- Supported by almost every modern programming language

This makes it ideal for transferring information between applications.

---

## 1️⃣2️⃣ Serialization – `json.dumps()`

The instructor then introduced the concept of **Serialization**.

Serialization is the process of converting a Python object into a JSON string.

---

### Classroom Code

```python
import json

student = {

    "name": "Saksham",

    "age": 20,

    "city": "Ludhiana"

}

json_data = json.dumps(student)

print(type(json_data))

print(json_data)
```

---

### Output

```text
<class 'str'>

{"name": "Saksham", "age": 20, "city": "Ludhiana"}
```

---

### Internal Working

```
Python Dictionary
        │
        │ json.dumps()
        ▼
    JSON String
```

Notice that the resulting object is **a string**, not a dictionary.

---

### Why is it Called Serialization?

Serialization converts complex in-memory objects into a format that can be:

- Saved to files
- Sent across networks
- Stored in databases
- Transmitted through APIs

Without serialization,

Python objects cannot be transmitted directly over the Internet.

---

## 1️⃣3️⃣ Deserialization – `json.loads()`

After serialization,

the instructor demonstrated the reverse operation.

**Deserialization** converts a JSON string back into a Python object.

---

### Classroom Code

```python
python_object = json.loads(json_data)

print(type(python_object))

print(python_object)
```

---

### Output

```text
<class 'dict'>

{

    'name': 'Saksham',

    'age': 20,

    'city': 'Ludhiana'

}
```

---

### Internal Working

```
    JSON String
        │
        │ json.loads()
        ▼
Python Dictionary
```

The JSON string is reconstructed into a normal Python dictionary that can be manipulated programmatically.

---

## Serialization vs Deserialization

| Serialization | Deserialization |
|--------------|-----------------|
| Python Object → JSON | JSON → Python Object |
| `json.dumps()` | `json.loads()` |
| Used Before Sending Data | Used After Receiving Data |

---

### Complete Data Flow

```
Python Dictionary
        │
        │ dumps()
        ▼
    JSON String
        │
        │ Internet / File / API
        ▼
    JSON String
        │
        │ loads()
        ▼
Python Dictionary
```

This complete cycle is performed continuously by modern web applications.

---

## 1️⃣4️⃣ Virtual Environments

After discussing JSON, the instructor introduced **Python Virtual Environments**, an essential tool for professional Python development.

A Virtual Environment creates an **isolated Python workspace** for each project.

Instead of installing every library globally,

each project maintains its own independent set of packages.

---

### Why Use Virtual Environments?

Suppose two projects require different versions of the same library.

```
Project A
↓
requests 2.25

----------------------

Project B
↓
requests 2.32
```

Installing both versions globally would create conflicts.

A Virtual Environment solves this problem by isolating dependencies.

---

### Creating a Virtual Environment

The instructor demonstrated the following command:

```bash
python -m venv .venv
```

Execution

```
Python
↓
Create Virtual Environment
↓
.venv Folder
```

The generated folder contains:

- Python Interpreter
- Installed Packages
- Scripts
- Configuration Files

---

### Activating the Environment

Windows

```bash
.venv\Scripts\activate
```

Linux / macOS

```bash
source .venv/bin/activate
```

Once activated,

all package installations occur **inside the project** instead of affecting the global Python installation.

---

### Installing Packages

The instructor then demonstrated package installation using **pip**.

Example

```bash
pip install requests
```

Execution

```
Internet
↓
PyPI Repository
↓
Download Package
↓
Install into .venv
```

The `requests` package will now be available only within the activated Virtual Environment.

---

### Benefits of Virtual Environments

- Prevent dependency conflicts.
- Isolate project libraries.
- Improve project portability.
- Enable reproducible development environments.
- Simplify collaboration among developers.

Today, Virtual Environments are considered a standard practice in professional Python development.

---

> [!IMPORTANT]
> **Serialization**, **Virtual Environments**, and **package management** are foundational concepts for modern Python applications. Before communicating with web services, Python objects are serialized into JSON, transmitted over a network, deserialized upon receipt, and processed using external libraries installed within isolated Virtual Environments.

---

## 1️⃣5️⃣ Working with REST APIs Using the `requests` Library

After learning how Python stores data in JSON format, the instructor demonstrated how Python applications can retrieve real-time information from the Internet using **REST APIs**.

Instead of reading data from a local file, today's program requested information from an online News API and displayed the latest news articles.

This introduced the concept of communication between a Python application and an external web service.

---

## What is an API?

An **API (Application Programming Interface)** is a mechanism through which two software applications communicate with each other.

Instead of directly accessing another application's database,

a request is sent to the API,

which processes the request and returns the required data.

---

### Communication Flow

```
Python Program
        │
        ▼
HTTP Request
        │
        ▼
REST API Server
        │
        ▼
JSON Response
        │
        ▼
Python Program
```

This communication model is used by almost every modern application.

---

## Why APIs?

APIs allow developers to access:

- Weather Information
- Stock Market Data
- Maps
- News
- Social Media
- Payment Gateways
- AI Models
- Cloud Services

without building these services from scratch.

---

## Installing the `requests` Library

Since API communication is not included in Python's basic file handling functionality,

an external package named **requests** was installed.

### Installation Command

```bash
pip install requests
```

After successful installation,

the library becomes available for import.

```python
import requests
```

---

## Sending an HTTP GET Request

The instructor demonstrated the simplest API request using

```python
requests.get()
```

---

### Classroom Code

```python
import requests

response = requests.get(url)

print(response)
```

---

### Output

```text
<Response [200]>
```

---

## Understanding the Response Object

The object returned by

```python
requests.get()
```

contains all the information received from the server.

Examples include:

- Status Code
- Response Body
- Headers
- Cookies
- Encoding Information

Today's discussion primarily focused on the response body containing JSON data.

---

## HTTP Status Code

The instructor briefly explained that

```text
200
```

means

```
Request Successful
```

The server successfully processed the request and returned the requested information.

Some common status codes include:

| Status Code | Meaning |
|-------------|---------|
| 200 | Request Successful |
| 201 | Resource Created |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Resource Not Found |
| 500 | Internal Server Error |

---

## Reading the Response

The response returned by the API can be accessed in multiple ways.

### Raw Text

```python
print(response.text)
```

Output

```text
{
    "status":"ok",
    ...
}
```

The returned value is simply a long JSON string.

---

## Parsing JSON Automatically

Instead of manually calling

```python
json.loads()
```

the `requests` library provides a convenient method.

```python
data = response.json()
```

This automatically converts the JSON response into a Python dictionary.

---

### Data Flow

```
REST API
    ↓
JSON Response
    ↓
response.json()
    ↓
Python Dictionary
```

This allows the returned information to be processed using normal dictionary operations.

---

## 1️⃣6️⃣ News API Practical

The final practical of today's session involved consuming a **News API**.

The API returns the latest news articles in JSON format.

The instructor demonstrated how Python retrieves this information and displays selected details.

---

### Overall Workflow

```
Python Program
    ↓
requests.get()
    ↓
News API
    ↓
JSON Response
    ↓
Dictionary
    ↓
Extract Articles
    ↓
Display News
```

---

### Classroom Code

```python
import requests

response = requests.get(url)

data = response.json()

articles = data["articles"]

for article in articles:

    print(article["title"])

    print(article["description"])

    print("-" * 60)
```

---

## Understanding the JSON Structure

The API returns a dictionary similar to:

```python
{

    "status": "ok",

    "totalResults": 20,

    "articles": [

        {

            "title": "...",

            "description": "...",

            "author": "...",

            "url": "..."

        }

    ]

}
```

The important key for today's program is

```python
articles
```

which stores a **list of dictionaries**.

---

### Visual Representation

```
Dictionary
│
├── status
├── totalResults
└── articles
        │
        ▼
        List
        │
        ├── Article 1
        ├── Article 2
        ├── Article 3
        └── ...
```

Each article is itself a dictionary.

---

## Accessing Individual Articles

The instructor iterated over the list using a `for` loop.

```python
for article in articles:
```

Each iteration retrieves one dictionary.

Example

```python
article["title"]

article["description"]
```

Output

```text
Headline of News

Short Description

------------------------------------------------------------
```

The loop continues until every article has been displayed.

---

## Why JSON Makes APIs Easy

Because JSON maps naturally to Python dictionaries,

developers can access nested information very easily.

Example

```python
data["articles"][0]["title"]
```

retrieves the title of the first news article.

No complicated parsing logic is required.

---

## Complete API Execution Flow

```
Python Program
        │
        ▼
HTTP GET Request
        │
        ▼
News API Server
        │
        ▼
Generate JSON
        │
        ▼
Send Response
        │
        ▼
response.json()
        │
        ▼
Python Dictionary
        │
        ▼
Loop Through Articles
        │
        ▼
Display News Headlines
```

This workflow demonstrates how modern applications communicate with online services and process structured data returned over the Internet.

---

> [!TIP]
> REST APIs are one of the most important technologies in modern software development. Mobile apps, web applications, AI services, payment gateways, weather platforms, and cloud systems all communicate through APIs, with **JSON** serving as the standard data exchange format and libraries like **`requests`** making HTTP communication simple and efficient in Python.

---

# 🌍 Real-World Applications

Today's session demonstrated how Python extends beyond writing algorithms to interacting with files, processing structured data, and communicating with external services. Nearly every modern software application performs some form of file handling, JSON processing, or API communication.

---

## File Handling in Desktop Applications

Most desktop applications continuously read from and write to files.

Examples include:

- Microsoft Word
- Notepad
- Adobe Photoshop
- Visual Studio Code
- IntelliJ IDEA

Typical workflow:

```
User Creates Data
    ↓
Program
    ↓
Write to File
    ↓
Save on Disk
```

Whenever a document is reopened, the application reads the stored data back into memory.

---

## Log File Management

Professional applications continuously generate log files.

Example:

```
Application Starts
    ↓
Generate Events
    ↓
Append to Log File
    ↓
logs.txt
```

Instead of overwriting previous logs, applications use **append mode (`a`)** so that historical records remain available for debugging and auditing.

---

## CSV Reports

The object-counting program demonstrated today resembles reporting systems used in organizations.

Examples include:

- Employee Reports
- Sales Reports
- Attendance Records
- Student Results
- Inventory Reports

CSV files can be directly imported into:

- Microsoft Excel
- Google Sheets
- LibreOffice Calc

making them one of the most widely used formats for tabular data exchange.

---

## Source Code Analysis Tools

Today's practical of counting objects from a Python file introduced a simplified version of **Static Source Code Analysis**.

Professional tools analyze source code to calculate:

- Number of classes
- Number of methods
- Code complexity
- Documentation coverage
- Coding standards
- Security vulnerabilities

Examples include:

- SonarQube
- Pylint
- Flake8
- ESLint

The same principle used in today's exercise can be expanded to build sophisticated developer tools.

---

## JSON in Modern Applications

JSON has become the universal format for exchanging structured information.

Common applications include:

- Web APIs
- Mobile Applications
- Cloud Platforms
- Microservices
- AI Services
- Configuration Files

Typical communication:

```
Application A
    ↓
JSON
    ↓
Application B
```

Because JSON is language-independent, applications written in different programming languages can communicate seamlessly.

---

## REST APIs

REST APIs are used extensively in software development to access remote services.

Examples include:

- Weather APIs
- Maps APIs
- Payment APIs
- News APIs
- AI APIs
- Social Media APIs

General workflow:

```
Python Program
    ↓
HTTP Request
    ↓
API Server
    ↓
JSON Response
    ↓
Python Dictionary
    ↓
Display Information
```

The News API demonstrated in today's session follows this exact communication pattern.

---

## Virtual Environments

Virtual Environments are a standard practice in professional software development.

Every independent project maintains its own isolated environment containing only the packages it requires.

Benefits include:

- No dependency conflicts
- Easier collaboration
- Reproducible environments
- Cleaner package management

This becomes especially important when working with multiple Python projects simultaneously.

---

## Artificial Intelligence Applications

Many AI systems combine all the topics discussed today.

Typical workflow:

```
Read Dataset
    ↓
Process File
    ↓
Convert to JSON
    ↓
Send API Request
    ↓
Receive AI Response
    ↓
Store Output
```

Whether interacting with language models, image-generation services, or machine learning platforms, developers frequently work with files, JSON, HTTP requests, and APIs.

---

# 📝 Personal Reflection

Today's session significantly expanded my understanding of how Python interacts with the outside world. Until now, most of the programs developed during training worked entirely with data stored in memory. Learning File Handling demonstrated how applications can permanently store and retrieve information using external files, making software much more practical and useful.

Understanding the differences between `read()`, `readline()`, and `readlines()` clarified how Python processes files depending on the application's requirements. The introduction of the `with open()` context manager was particularly valuable because it showed a safer and more professional way to manage system resources automatically.

The practical exercise of reading a Python source file and generating a CSV report was one of the most interesting parts of today's class. It demonstrated that Python can automate repetitive development tasks by analyzing source code and producing structured reports. This exercise also reinforced the usefulness of dictionaries and file operations working together.

Another important concept introduced today was JSON. Although JSON appears very similar to Python dictionaries, understanding serialization and deserialization made it clear how applications exchange structured data over networks. This knowledge forms the foundation of modern web development and API integration.

The discussion on Virtual Environments highlighted the importance of isolating project dependencies. Rather than installing every package globally, maintaining separate environments for different projects is a professional practice that prevents version conflicts and simplifies collaboration.

Finally, consuming a News API using the `requests` library demonstrated how Python applications communicate with web services. Seeing JSON responses automatically converted into Python dictionaries made the relationship between APIs and Python much easier to understand. Overall, today's lecture connected local file handling with web technologies, providing a strong foundation for building practical software applications.

---

# 📌 Key Takeaways

- File Handling enables programs to permanently store and retrieve data.
- Python creates a file object to communicate with external files.
- `read()`, `readline()`, and `readlines()` serve different file-reading requirements.
- `with open()` automatically manages file resources and is the preferred approach for file handling.
- Write mode (`w`) replaces existing file contents, whereas Append mode (`a`) preserves previous data.
- CSV files provide a simple format for storing structured tabular information.
- Dictionaries can be used effectively for counting and organizing data.
- JSON is the standard format for exchanging structured information between applications.
- `json.dumps()` performs serialization, while `json.loads()` performs deserialization.
- Virtual Environments isolate project dependencies and improve package management.
- The `requests` library simplifies HTTP communication with REST APIs.
- JSON responses from APIs can be directly converted into Python dictionaries for further processing.

---

# 📖 Revision Notes

✔ File Handling

✔ File Objects

✔ `open()`

✔ `read()`

✔ `readline()`

✔ `readlines()`

✔ File Closing

✔ `with open()`

✔ Context Managers

✔ File Input/Output (File I/O)

✔ Character Streams

✔ Byte Streams

✔ Runtime Errors

✔ Compile-Time Errors

✔ Write Mode (`w`)

✔ Append Mode (`a`)

✔ Quote Saver Program

✔ Object Counter Program

✔ CSV File Generation

✔ Python Dictionaries

✔ JSON

✔ Serialization

✔ Deserialization

✔ `json.dumps()`

✔ `json.loads()`

✔ Virtual Environments

✔ `pip`

✔ Installing Packages

✔ `requests` Library

✔ HTTP GET Requests

✔ REST APIs

✔ News API

✔ JSON Parsing

---

# ❓ Interview Questions

### Q1. What is the purpose of File Handling in Python?

**Answer:**

File Handling allows Python programs to permanently store, retrieve, and update data using external files, enabling information to persist even after program execution ends.

---

### Q2. Explain the difference between `read()`, `readline()`, and `readlines()`.

**Answer:**

- `read()` returns the entire file as a single string.
- `readline()` returns one line at a time.
- `readlines()` returns all lines as a list of strings.

---

### Q3. Why is `with open()` preferred over manually calling `open()` and `close()`?

**Answer:**

The `with open()` statement automatically closes the file after execution, even if an exception occurs. It simplifies resource management and prevents file leaks.

---

### Q4. What is the difference between Write Mode (`w`) and Append Mode (`a`)?

**Answer:**

Write mode overwrites the existing contents of a file before writing new data, whereas Append mode preserves existing contents and adds new data to the end of the file.

---

### Q5. What is JSON, and why is it widely used?

**Answer:**

JSON (JavaScript Object Notation) is a lightweight, text-based format for exchanging structured data. It is language-independent, human-readable, and supported by almost all modern programming languages and web services.

---

### Q6. Explain serialization and deserialization.

**Answer:**

Serialization converts a Python object into a JSON string using `json.dumps()`, while deserialization converts a JSON string back into a Python object using `json.loads()`.

---

### Q7. Why are Virtual Environments important?

**Answer:**

Virtual Environments isolate project dependencies, prevent version conflicts between projects, and create reproducible development environments.

---

### Q8. What role does the `requests` library play in Python?

**Answer:**

The `requests` library enables Python programs to send HTTP requests to web servers, receive responses, and interact with REST APIs using a simple and intuitive interface.

---

# 🎯 Goals for Next Session

- Continue exploring Python's standard and third-party libraries.
- Build more real-world automation scripts using file handling and APIs.
- Practice working with larger JSON datasets.
- Learn additional networking concepts and API integration techniques.
- Strengthen software development skills by combining Python with external services.

---

# ✅ Today's Progress Checklist

- [x] Understood File Handling fundamentals.
- [x] Learned different methods for reading files.
- [x] Practiced using the `with open()` context manager.
- [x] Explored File Input/Output streams.
- [x] Learned Write and Append file modes.
- [x] Implemented a Quote Saver application.
- [x] Built an object-counting utility using file analysis.
- [x] Generated CSV reports programmatically.
- [x] Learned JSON serialization and deserialization.
- [x] Understood the purpose of Virtual Environments.
- [x] Installed external packages using `pip`.
- [x] Consumed a REST API using the `requests` library.
- [x] Parsed JSON responses and displayed structured information.

---

> [!TIP]
> Today's session marked an important transition from writing standalone Python programs to building applications that interact with **files, structured data, and online services**. Mastering File Handling, JSON, Virtual Environments, and REST APIs provides the foundation for developing professional software, web backends, automation tools, and AI-powered applications.

---

**Status:** Completed ✅

**Training Day:** 11

**Maintained By:** Saksham Kumar