<!--
title: Regular Expressions & Multi-Page Agentic AI Application using Streamlit
date: 2026-07-20
tags: Python, Regular Expressions, Regex, Streamlit, Agentic AI, MongoDB Atlas, Function Calling, Gemma, UI Development
summary: Learned Python Regular Expressions for searching, extracting, and validating data. Built a multi-page Streamlit application integrated with MongoDB Atlas and Google's Gemma model using Function Calling to create an Agentic AI Task Management system.
-->

# 🚀 Day 19: Regular Expressions & Agentic AI Application Development

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 19  
**Date:** 20 July 2026

---

# 📖 Daily Training Record – Day 19

## 📌 Overview

Today's session was divided into two major parts. The first half introduced **Regular Expressions (Regex)** in Python, a powerful mechanism for searching, validating, and extracting patterns from textual data. The instructor demonstrated how the `re` module enables developers to locate words, validate structured inputs such as phone numbers, PAN numbers, and vehicle registration numbers, and automatically extract important information like email addresses and contact numbers from unstructured text. These techniques form the foundation of many real-world applications including data validation, web scraping, form verification, and Natural Language Processing (NLP). :contentReference

The second half of the session focused on building a **multi-page Streamlit application** integrated with **Google's Gemma Large Language Model (LLM)** and **MongoDB Atlas**. Instead of creating a traditional chatbot, the instructor demonstrated how an LLM can invoke Python functions through **Function Calling**, enabling the AI model to perform real actions such as saving tasks into a database. This transformed the chatbot into an **Agentic AI application** capable of understanding user requests, extracting structured information, and executing backend operations automatically.

The application was organized into multiple Streamlit pages including a **Home Dashboard**, an **AI Chat interface**, and a **Patients page**. The Home page displayed hospital metrics, charts, and departmental information using Streamlit widgets and Pandas DataFrames. The AI Chat page managed conversation history through **Session State**, registered callable functions with the LLM, processed tool calls returned by the model, and stored tasks in MongoDB Atlas. Finally, the Patients page demonstrated how structured healthcare records can be presented interactively using tabular data.

One of the most valuable lessons from today's lecture was understanding the complete execution flow of an Agentic AI system—from accepting user input, sending it to an LLM, receiving a structured function call, executing Python code, storing results in a database, and finally displaying the response back to the user. This architecture closely resembles real-world AI assistants and modern enterprise software.

Overall, today's lecture combined **text processing**, **Artificial Intelligence**, **frontend development**, **database integration**, and **LLM tool calling**, providing practical exposure to technologies that are widely used in modern AI products and production-grade software systems. :contentReference

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the purpose of Python Regular Expressions.
- Perform text searching using `re.search()`.
- Extract information using `re.findall()`.
- Validate structured inputs using `re.fullmatch()`.
- Learn commonly used Regex patterns and symbols.
- Extract phone numbers, email addresses, and vehicle numbers from text.
- Build a multi-page Streamlit application.
- Configure Streamlit page navigation.
- Create dashboards using Streamlit widgets.
- Understand Session State management in Streamlit.
- Register callable tools using Google's Function Calling API.
- Integrate Google's Gemma model into a Python application.
- Parse structured JSON responses returned by the LLM.
- Execute Python functions dynamically based on LLM output.
- Save AI-generated tasks into MongoDB Atlas.
- Build a complete Agentic AI workflow using frontend, backend, database, and LLM integration.

---

# 📚 Key Learnings

## 1️⃣ Introduction to Regular Expressions (Regex)

The first topic covered today was **Regular Expressions**, commonly known as **Regex**.

A Regular Expression is a sequence of characters that defines a search pattern. Instead of searching for exact text manually, Regex allows developers to identify, validate, and extract information based on predefined patterns.

Regex is one of the most widely used technologies in modern software development because large amounts of real-world data exist in the form of **unstructured text**. Using Regex, developers can automatically locate phone numbers, email addresses, identification numbers, URLs, dates, passwords, and many other structured patterns hidden inside text documents.

---

## Why Do We Need Regular Expressions?

Imagine a hospital receives thousands of online appointment requests every day.

Each request may contain information such as:

- Patient Name
- Phone Number
- Email Address
- Vehicle Number
- Medical ID

Instead of searching each request manually,

Regex can automatically extract the required information.

Example:

```
Patient Message
↓
Regex Engine
↓
Phone Number
↓
Email
↓
Vehicle Number
```

This automation saves both time and computational effort.

---

## Python Regex Module

Python provides a dedicated module named **`re`** for working with Regular Expressions.

### Classroom Code (session19.py)

```python
# Regex module in Python

import re
```

This single import statement provides access to dozens of functions for:

- Searching
- Matching
- Validation
- Extraction
- Replacement
- Splitting

through pattern-based text processing.

---

## What Does the `re` Module Do?

Conceptually,

```
Input Text
↓
Regex Pattern
↓
Regex Engine
↓
Pattern Matching
↓
Output
```

The Regex engine scans the given text and determines whether the specified pattern exists.

Depending on the function used, it may:

- Return the first match
- Return every match
- Validate the entire text
- Replace matching patterns
- Split the text

---

## Regex vs Normal String Search

Traditional searching:

```python
if "easy" in text:
    ...
```

Regular Expression searching:

```python
re.search(pattern, text)
```

Although both can locate text, Regex is significantly more powerful because it supports **dynamic patterns** rather than fixed words.

For example,

instead of searching for only:

```
9888478606
```

Regex can search for:

```
Any 10-digit phone number
```

without knowing the actual number beforehand.

---

## Real-World Applications of Regex

Regular Expressions are extensively used in:

- Login form validation
- Email verification
- Password validation
- PAN verification
- Aadhaar validation
- Vehicle registration verification
- Log analysis
- Web scraping
- Search engines
- Chatbots
- Artificial Intelligence preprocessing
- Natural Language Processing (NLP)
- Data cleaning
- Information extraction from documents

Nearly every modern software application uses Regex at some stage of text processing.

---

## Learning Flow for Today's Session

The instructor organized today's Regex topics in the following sequence.

```
Regular Expressions
↓
Search Patterns
↓
Find Multiple Matches
↓
Validate Input
↓
Extract Information
↓
Agentic AI Integration
```

These concepts later became useful while building the AI-powered Streamlit application.

---

## Why Regex is Important for AI?

Large Language Models frequently receive unstructured human language.

Before storing information inside databases,

important fields often need to be extracted.

Example:

```
"I need to call +919876512345 and send an email to john@example.com regarding vehicle PB10AL2937."
```

Regex can automatically identify:

```
Phone
↓
+919876512345
-----------------
Email
↓
john@example.com
-----------------
Vehicle Number
↓
PB10AL2937
```

This structured data can then be passed to databases, APIs, or AI agents.

---

> [!NOTE]
> **Regular Expressions (Regex)** are one of the most powerful text-processing tools available in Python. They enable developers to search, validate, and extract structured information from unstructured text using concise patterns. Regex plays a vital role in backend development, web applications, Artificial Intelligence, Natural Language Processing, cybersecurity, and data engineering, making it an essential skill for every Python developer.

---


# 2️⃣ Searching Text using `re.search()`

After understanding the purpose of Regular Expressions, the instructor introduced the first and one of the most commonly used Regex functions:

```python
re.search()
```

The `search()` function scans an entire string and returns the **first occurrence** of the specified pattern. If the pattern is found, it returns a **Match Object**; otherwise, it returns `None`. This makes `re.search()` extremely useful for determining whether a particular piece of information exists within a large body of text. :contentReference

---

## Classroom Code (session19.py)

```python
import re

text = "Python is easy to learn"

result = re.search("easy", text)

print("result:", result)

if result:
    print("easy searched and found")
else:
    print("Cannot find easy")
```

---

## Step-by-Step Code Explanation

### Step 1 — Import the Regex Module

```python
import re
```

The `re` module provides Python's built-in Regular Expression engine.

Without importing this module, none of the Regex functions such as:

- `search()`
- `findall()`
- `fullmatch()`
- `sub()`
- `split()`

can be used.

---

### Step 2 — Create the Text

```python
text = "Python is easy to learn"
```

This string becomes the data that the Regex engine will inspect.

Internally,

```
Memory
↓
text
↓
"Python is easy to learn"
```

---

### Step 3 — Search the Pattern

```python
result = re.search("easy", text)
```

Python now performs the following operations:

```
Text
↓
Python is easy to learn
↓
Regex Engine
↓
Pattern
↓
"easy"
↓
Scan Entire String
↓
Pattern Found
↓
Match Object
```

Unlike normal searching,

Regex examines the string through its pattern matching engine.

---

### Internal Working

Character-by-character scanning:

```
Python is easy to learn

^

No Match
↓
y
↓
t
↓
...
↓
easy
↓
Pattern Matched
```

The moment the first match is found,

the search stops.

---

## What is Returned?

Instead of returning `True` or `False`,

`re.search()` returns a **Match Object**.

Example:

```text
<re.Match object; span=(10,14), match='easy'>
```

Meaning:

```
Match Object
│
├── Matched Text
├── Starting Position
├── Ending Position
└── Additional Metadata
```

This object can later be used to obtain:

- matched text
- starting index
- ending index
- captured groups

---

## Conditional Checking

The instructor then verified whether a match exists.

```python
if result:
    print("easy searched and found")
else:
    print("Cannot find easy")
```

Execution Flow:

```
Match Object
↓
Exists ?
↓
Yes
↓
Print Success
```

If the pattern is not found,

```
None
↓
False
↓
Print Failure
```

---

## Expected Output

```text
result: <re.Match object ...>

easy searched and found
```

If we searched for

```python
re.search("java", text)
```

Output:

```text
result: None

Cannot find easy
```

---

# Difference Between Normal Search and Regex Search

Traditional Python search:

```python
if "easy" in text:
    print("Found")
```

Regex search:

```python
re.search("easy", text)
```

Comparison:

| Normal Search | Regex Search |
|--------------|--------------|
| Searches exact text | Searches patterns |
| Returns Boolean | Returns Match Object |
| Cannot use wildcards | Supports complex patterns |
| Limited flexibility | Extremely powerful |

---

# Why Use `re.search()`?

Although both approaches can locate words,

Regex becomes essential when the exact value is unknown.

Example:

Searching for

```
9888478606
```

requires the exact number.

Instead,

Regex can search for

```
Any phone number
↓
\d{10}
```

without knowing the digits beforehand.

---

# Real-World Example

Hospital chatbot receives:

```text
Hello Doctor,

My name is John.

I have fever.
```

To determine whether the patient mentioned the word:

```
fever
```

Python performs:

```
Patient Message
↓
Regex Engine
↓
Search
↓
"fever"
↓
Match Found
```

The chatbot can now automatically trigger disease-related recommendations.

---

# Advantages of `re.search()`

- Searches the complete string.
- Returns only the **first occurrence**.
- Produces a Match Object with useful metadata.
- Supports advanced Regex patterns.
- Frequently used in text analysis and validation.

---

# Interview Note

One of the most common Python interview questions is:

> **What is the difference between `re.search()` and the `in` operator?**

Answer:

- `in` checks only for an exact substring and returns a Boolean.
- `re.search()` uses the Regex engine, supports pattern matching, and returns a Match Object containing detailed information about the match.

---

# Complete Classroom Code

```python
import re

text = "Python is easy to learn"

result = re.search("easy", text)

print("result:", result)

if result:
    print("easy searched and found")
else:
    print("Cannot find easy")
```

---

> [!IMPORTANT]
> `re.search()` is the most fundamental Regex function in Python. It scans an entire string and returns the **first matching occurrence** as a Match Object. Unlike ordinary string searching, it supports powerful pattern matching, making it ideal for searching dynamic text such as emails, phone numbers, dates, identifiers, and other structured information within unstructured documents.

---


# 3️⃣ Extracting Information using `re.findall()`

After learning how to search for the first occurrence using `re.search()`, the instructor introduced another extremely powerful Regex function:

```python
re.findall()
```

Unlike `re.search()`, which stops after finding the first match, `re.findall()` scans the **entire input string** and returns **every matching occurrence** as a Python list.

This function is widely used for **information extraction**, allowing developers to collect all matching patterns from unstructured text. It is commonly used for extracting phone numbers, email addresses, IDs, dates, URLs, and other structured information hidden inside documents. :contentReference

---

# Classroom Code 1 – Extracting Numbers

```python
text = "Order id 101 costs 2500 inr"

result = re.findall(r"\d+", text)

print(result)
```

---

## Step-by-Step Code Explanation

### Step 1 — Create the Text

```python
text = "Order id 101 costs 2500 inr"
```

This sentence contains both alphabets and numbers.

```
Order

id

101

costs

2500

inr
```

Our objective is to extract **only the numeric values**.

---

### Step 2 — Apply `findall()`

```python
result = re.findall(r"\d+", text)
```

Execution Flow:

```
Input Text
↓
Regex Engine
↓
\d+
↓
Find Every Match
↓
Store in List
```

Unlike `search()`,

the Regex engine **does not stop after the first match**.

It continues scanning until the end of the string.

---

## Understanding the Pattern

### Raw String (`r`)

```python
r"..."
```

The letter **`r`** stands for **Raw String**.

It tells Python to treat backslashes literally instead of interpreting them as escape characters.

Without a raw string,

```python
"\d"
```

may not always behave as expected.

Using

```python
r"\d"
```

is considered the best practice when writing Regex.

---

### Symbol: `\d`

```text
\d
```

Meaning:

```
Digit

↓

0–9
```

Matches:

```
0
1
2
...

9
```

---

### Symbol: `+`

The plus sign means:

```
One

or

More
```

Conceptually,

```
\d+
↓
One Digit
↓
or Many Digits
```

Matches:

```
7

25

101

2500

9876543210
```

Does NOT match:

```
ABC

@

#
```

---

## Internal Execution

Regex scans the sentence.

```
Order id 101 costs 2500 inr
↓
Order
×
↓
id
×
↓
101
✓
↓
2500
✓
↓
inr
×
```

Every successful match is collected.

---

## Output

```python
['101', '2500']
```

Notice something important.

Even though the pattern matches numbers,

the returned values are still **strings**.

```
'101'
↓
String
----------------
'2500'
↓
String
```

If numerical calculations are required,

they must first be converted using:

```python
int()
```

---

# Classroom Code 2 – Extracting Email Addresses

The instructor then demonstrated how Regular Expressions can automatically locate email addresses.

```python
text = """
this is awesome
john@example.com
we are learning regular expressions in python
admin@finlo.in
hello@gmail.com
"""

result = re.findall(r"\S+@\S+", text)

print(result)
```

---

## Step-by-Step Explanation

The input contains both ordinary text and email addresses.

```
Paragraph
↓
john@example.com
↓
admin@finlo.in
↓
hello@gmail.com
```

Instead of manually searching,

Regex automatically extracts every email.

---

## Understanding the Pattern

```text
\S+@\S+
```

Let's break it down.

---

### `\S`

Means:

```
Any Non-Whitespace Character
```

Examples:

```
a

A

1

@

.

_

$
```

Everything except:

```
Space

Tab

New Line
```

---

### First `\S+`

```
Username
↓
john

admin

hello
```

---

### `@`

Matches the email separator.

```
john

@

example.com
```

---

### Second `\S+`

Matches the remaining portion.

```
example.com

gmail.com

finlo.in
```

---

## Complete Pattern

```
\S+
↓
Username
↓
@
↓
Domain
↓
\S+
↓
Complete Email
```

---

## Internal Working

Regex scans line by line.

```
this is awesome
×
↓
john@example.com
✓
↓
learning regex
×
↓
admin@finlo.in
✓
↓
hello@gmail.com
✓
```

Every email is stored.

---

## Output

```python
['john@example.com','admin@finlo.in','hello@gmail.com']
```

The returned object is again a Python List.

---

# Difference Between `search()` and `findall()`

| `re.search()` | `re.findall()` |
|---------------|----------------|
| Returns first match | Returns all matches |
| Returns Match Object | Returns Python List |
| Stops after first match | Scans complete string |
| Used for checking existence | Used for extraction |

---

# Real-World Applications

`re.findall()` is one of the most widely used Regex functions.

It can automatically extract:

- Email addresses
- Phone numbers
- Aadhaar numbers
- PAN numbers
- URLs
- Dates
- Product IDs
- Invoice numbers
- OTPs
- Vehicle numbers

Example:

```
Customer Complaint
↓
Regex Engine
↓
Phone
↓
Email
↓
Invoice ID
↓
Structured Data
```

This structured data can then be stored inside databases or passed to AI agents for further processing.

---

# Interview Note

A common interview question is:

> **Why does `re.findall()` return a list while `re.search()` returns a Match Object?**

**Answer:**

`re.search()` is designed to locate only the **first occurrence**, so a Match Object is sufficient. `re.findall()` is intended for **extracting every occurrence** from the input text, therefore it returns a list containing all matching strings.

---

# Complete Classroom Code

```python
import re

text = "Order id 101 costs 2500 inr"

result = re.findall(r"\d+", text)

print(result)

text = """
this is awesome
john@example.com
we are learning regular expressions in python
admin@finlo.in
hello@gmail.com
"""

result = re.findall(r"\S+@\S+", text)

print(result)
```

---

> [!IMPORTANT]
> `re.findall()` scans the **entire input string** and returns **every occurrence** that matches a given Regular Expression pattern. Unlike `re.search()`, which returns only the first match, `findall()` is ideal for extracting structured information such as phone numbers, email addresses, identifiers, dates, URLs, and other repeating patterns from large amounts of unstructured text.

---


# 4️⃣ Understanding Common Regular Expression Symbols

Before moving to data validation, the instructor explained the most frequently used **Regular Expression (Regex) symbols**. These symbols act as the building blocks of every Regex pattern and are used to define what kind of text should be searched, extracted, or validated.

Instead of searching for fixed words, Regex allows us to describe **patterns**, making it possible to work with dynamic data such as phone numbers, email addresses, PAN numbers, dates, and many other structured formats. The examples used throughout today's session rely heavily on these symbols. :contentReference

---

# Why Learn Regex Symbols?

Suppose we need to validate:

```
9888478606
```

Writing the exact number is not useful because every user enters a different phone number.

Instead, we define a **pattern**.

```
\d{10}
```

Meaning:

```
Any

10 Digits
```

This is the real power of Regular Expressions.

---

# 1. `\d` — Digit

Symbol:

```text
\d
```

Meaning:

```
Any Digit
↓
0–9
```

Matches:

```
0

1

2

...

9
```

Example

```python
re.findall(r"\d", "ABC123")
```

Output

```text
['1', '2', '3']
```

---

# 2. `\w` — Word Character

Symbol

```text
\w
```

Matches:

- Alphabets
- Digits
- Underscore (`_`)

Examples

```
A

b

7

_
```

Does NOT match:

```
@

#

$

Space
```

Example

```python
re.findall(r"\w", "John_101")
```

Output

```text
['J','o','h','n','_','1','0','1']
```

The instructor initially experimented with this symbol while creating an email matching pattern.

---

# 3. `\S` — Non-Whitespace Character

Symbol

```text
\S
```

Meaning

```
Anything

Except

Whitespace
```

Matches:

```
A

9

@

.

_
```

Does NOT match:

```
Space

Tab

New Line
```

Example

```python
re.findall(r"\S+", text)
```

This symbol was used in today's email extraction example because email addresses never contain spaces.

---

# 4. `+` — One or More

The plus operator indicates repetition.

```
+
↓
One
or
More Times
```

Example

```
\d+
```

Matches

```
5

25

101

2500

9876543210
```

Does NOT match

```
Nothing
```

This symbol appeared multiple times in today's Regex examples.

---

# 5. `*` — Zero or More

Meaning

```
Zero

or

More
```

Unlike `+`,

the character may or may not exist.

Example

```
ab*
```

Matches

```
a

ab

abb

abbbbb
```

---

# 6. `?` — Zero or One

Meaning

```
Optional Character
```

Example

```
colour
↓
u Optional
```

Pattern

```
colou?r
```

Matches

```
color

colour
```

---

# 7. `{}` — Quantifier

Curly braces specify the exact number of repetitions.

Example

```
\d{10}
```

Execution

```
Digit
↓
Exactly

10 Times
```

Matches

```
9888478606
```

Does NOT match

```
123

987654

12345678901
```

Today's lecture used this operator extensively while validating phone numbers.

---

# 8. `[]` — Character Class

Square brackets define a set of acceptable characters.

Example

```
[A-Z]
```

Meaning

```
Any Capital Letter
```

Matches

```
A

B

C

...

Z
```

Example

```
[0-9]
```

Matches

```
Digits Only
```

Today's PAN validation used:

```text
[A-Z]{5}
```

meaning

```
Five Capital Letters
```

---

# 9. `.` — Any Character

The dot matches almost any single character.

Example

```
a.c
```

Matches

```
abc

a9c

a-c
```

The email example shown in class also contained the `.` character while matching domain names.

---

# 10. `^` — Start of String

Represents

```
Beginning

of

Text
```

Example

```
^Hello
```

Matches

```
Hello World
```

Does NOT match

```
Say Hello
```

---

# 11. `$` — End of String

Represents

```
End

of

Text
```

Example

```
World$
```

Matches

```
Hello World
```

Does NOT match

```
World Hello
```

---

# 12. `()` — Grouping

Parentheses are used to group multiple expressions together.

Example

```
(abc)+
```

Matches

```
abc

abcabc

abcabcabc
```

Grouping becomes especially useful while creating large validation patterns.

---

# Summary of Common Regex Symbols

| Symbol | Meaning | Example |
|---------|---------|---------|
| `\d` | Digit | `\d+` |
| `\w` | Word character | `\w+` |
| `\S` | Non-whitespace | `\S+` |
| `+` | One or more | `\d+` |
| `*` | Zero or more | `ab*` |
| `?` | Zero or one | `colou?r` |
| `{}` | Exact repetition | `\d{10}` |
| `[]` | Character class | `[A-Z]` |
| `.` | Any character | `a.c` |
| `^` | Start of string | `^Hello` |
| `$` | End of string | `World$` |
| `()` | Grouping | `(abc)+` |

---

# How Today's Regex Patterns Were Built

The instructor combined these symbols to create practical validation patterns.

### Phone Number

```text
\d{10}
```

Meaning

```
Digit
↓
Exactly 10 Times
```

---

### PAN Number

```text
[A-Z]{5}[0-9]{4}[A-Z]
```

Meaning

```
5 Capital Letters
↓
4 Digits
↓
1 Capital Letter
```

---

### Email

```text
\S+@\S+
```

Meaning

```
Username
↓
@
↓
Domain
```

These building blocks will be used throughout the remaining sections of today's diary.

---

# Real-World Applications

Regex symbols help validate and extract:

- Phone numbers
- Email addresses
- PAN numbers
- Aadhaar numbers
- Vehicle registration numbers
- Passport numbers
- URLs
- Dates
- Product IDs
- Invoice numbers
- OTPs
- Usernames
- Passwords

Without these symbols, developers would need to write lengthy manual validation logic.

---

# Interview Note

A frequently asked interview question is:

> **Why are Regular Expressions considered more powerful than ordinary string methods?**

**Answer:**

String methods search for fixed text, whereas Regular Expressions search for **patterns**. Using symbols such as `\d`, `\w`, `{}`, `[]`, and `+`, Regex can validate and extract dynamic information like phone numbers, email addresses, dates, and identifiers without knowing their exact values in advance.

---

> [!IMPORTANT]
> Regular Expression symbols are the **fundamental building blocks** of pattern matching. Understanding operators such as **`\d`**, **`\w`**, **`\S`**, **`+`**, **`*`**, **`?`**, **`[]`**, and **`{}`** allows developers to construct powerful search and validation rules capable of processing large amounts of unstructured textual data efficiently.

---


# 5️⃣ Validating Structured Data using `re.fullmatch()`

After learning how to search and extract information using Regular Expressions, the instructor demonstrated how Regex can also be used for **validation**.

Validation ensures that the **entire input** follows a predefined format before it is accepted by an application. Instead of checking whether a pattern merely exists somewhere in the text, validation verifies that **the complete string matches the specified pattern**.

For this purpose, Python provides the function:

```python
re.fullmatch()
```

Throughout today's lecture, the instructor validated three commonly used real-world identifiers:

- Phone Number
- PAN Number
- Vehicle Registration Number

These examples closely resemble the validation systems used in banking applications, government portals, healthcare systems, and enterprise software. 

---

# What is `re.fullmatch()`?

`re.fullmatch()` compares the **entire input string** with the given Regular Expression.

Execution Flow

```
Input
↓
Regex Pattern
↓
Entire String Compared
↓
Match ?
↓
Match Object / None
```

Unlike `search()`,

which looks for a match anywhere,

`fullmatch()` accepts the input **only if every character satisfies the pattern**.

---

# Example 1 — Phone Number Validation

## Classroom Code

```python
phone = "9888478606"

result = re.fullmatch(r"\d{10}", phone)

print(result)

if result:
    print("Phone Number searched and found")
else:
    print("Cannot find number")
```

---

## Step-by-Step Explanation

### Step 1

Create the phone number.

```python
phone = "9888478606"
```

```
phone
↓
9888478606
```

---

### Step 2

Apply the validation pattern.

```python
re.fullmatch(r"\d{10}", phone)
```

Pattern Analysis

```
\d
↓
Digit

-----------------

{10}
↓
Exactly

10 Times
```

Meaning

```
Exactly

10 Digits

Nothing More

Nothing Less
```

---

## Internal Working

```
9888478606

↓

1

2

3

4

5

6

7

8

9

10 Digits
↓
Pattern Satisfied
↓
Match Object
```

---

## Valid Examples

```
9876543210

9988776655

9123456789
```

---

## Invalid Examples

```
987654321
↓
9 Digits

-----------------

98765432101
↓
11 Digits

-----------------

98765AB210
↓
Contains Letters
```

All these return

```python
None
```

---

## Expected Output

```text
<re.Match object ...>

Phone Number searched and found
```

---

# Example 2 — PAN Number Validation

The instructor next validated an Indian PAN Number.

## Classroom Code

```python
pan = "BBVPK2144K"

result = re.fullmatch(r"[A-Z]{5}[0-9]{4}[A-Z]", pan)

print(result)

if result:
    print("Perfect Pan Number searched and found")
else:
    print("Cannot find pan number")
```

---

## Understanding the Pattern

```
[A-Z]{5}
↓
Five Capital Letters

-----------------

[0-9]{4}
↓
Four Digits

-----------------

[A-Z]
↓
One Capital Letter
```

Overall Structure

```
AAAAA

9999

A
```

---

## Example

```
BBVPK2144K
↓
BBVPK
↓
2144
↓
K
```

Every section satisfies the required format.

---

## Internal Validation

```
Input
↓
First 5 Characters
↓
Capital Letters ?
↓
Next 4 Characters
↓
Digits ?
↓
Last Character
↓
Capital Letter ?
↓
Valid PAN
```

---

## Valid PAN Examples

```
ABCDE1234F

PQRSX6789L

BBVPK2144K
```

---

## Invalid PAN Examples

```
ABCD1234F
↓
Only Four Letters

-----------------

ABCDE123F
↓
Only Three Digits

-----------------

abcde1234F
↓
Lowercase Letters
```

---

# Example 3 — Vehicle Registration Number Validation

The instructor then demonstrated validation of an Indian vehicle registration number.

## Classroom Code

```python
vehicle_number = "PB10AL2937"

result = re.fullmatch(

    r"[A-Z]{2}[0-9]{2}[A-Z]{2}\d{4}",

    vehicle_number

)

print(result)

if result:
    print("Vehicle number is valid")
else:
    print("Invalid vehicle number")
```

---

## Pattern Breakdown

```
[A-Z]{2}
↓
State Code

-----------------

[0-9]{2}
↓
District Code

-----------------

[A-Z]{2}
↓
Series

-----------------

\d{4}
↓
Vehicle Number
```

---

## Example

```
PB10AL2937
↓
PB
↓
10
↓
AL
↓
2937
```

Each section follows the required government format.

---

## Internal Working

```
Vehicle Number
↓
PB
↓
State Code
↓
10
↓
District
↓
AL
↓
Series
↓
2937
↓
Registration Number
↓
Valid
```

---

## Valid Examples

```
PB10AL2937

DL01AB1234

HR26DK5678
```

---

## Invalid Examples

```
PB1AL2937
↓
One Digit District Code

-----------------

PB10A2937
↓
Missing Letter

-----------------

PB10AL293
↓
Only Three Digits
```

---

# Why Use `fullmatch()` Instead of `search()`?

Suppose the input is

```
My Phone Number is

9888478606
```

Using

```python
re.search()
```

will successfully locate the number.

However,

```python
re.fullmatch()
```

fails because the entire sentence is **not** a phone number.

Comparison

| `search()` | `fullmatch()` |
|------------|---------------|
| Finds pattern anywhere | Validates entire input |
| Partial matching | Complete matching |
| Used for searching | Used for validation |

---

# Real-World Applications

Validation using `fullmatch()` is widely used in:

- Mobile number verification
- PAN verification
- Aadhaar validation
- Passport numbers
- Vehicle registration
- Employee IDs
- Roll numbers
- Product IDs
- Customer IDs
- License numbers
- Banking forms
- Government portals

Nearly every registration form on the internet performs similar validation before accepting user input.

---

# Complete Classroom Code

```python
import re

phone = "9888478606"

result = re.fullmatch(r"\d{10}", phone)

print(result)

if result:
    print("Phone Number searched and found")
else:
    print("Cannot find number")


pan = "BBVPK2144K"

result = re.fullmatch(
    r"[A-Z]{5}[0-9]{4}[A-Z]",
    pan
)

print(result)

if result:
    print("Perfect Pan Number searched and found")
else:
    print("Cannot find pan number")


vehicle_number = "PB10AL2937"

result = re.fullmatch(
    r"[A-Z]{2}[0-9]{2}[A-Z]{2}\d{4}",
    vehicle_number
)

print(result)

if result:
    print("Vehicle number is valid")
else:
    print("Invalid vehicle number")
```

---

> [!IMPORTANT]
> `re.fullmatch()` is specifically designed for **input validation**. Unlike `re.search()`, which locates a pattern anywhere within a string, `fullmatch()` ensures that the **entire input** conforms exactly to the required format. This makes it the preferred choice for validating structured information such as phone numbers, PAN numbers, vehicle registration numbers, employee IDs, and other standardized identifiers in production applications.

---


# 6️⃣ Extracting Multiple Data Types from Unstructured Text

After learning how Regular Expressions can **search**, **extract**, and **validate** information, the instructor demonstrated one of the most practical applications of Regex—**Information Extraction**.

In real-world software, users rarely provide data in a structured format. Instead, they write complete sentences or paragraphs containing phone numbers, email addresses, addresses, IDs, and other important information.

Using Regular Expressions, Python can automatically identify and extract these individual pieces of information from a large block of text without any manual intervention. This concept is widely used in chatbots, AI assistants, customer support systems, document processing, and Natural Language Processing (NLP). :contentReference
---

# Classroom Code (session19.py)

```python
text = """
I want to place a call +919876512345 and send an email to
john@example.com as my vehicle PB10AL2937 is having a flat tyre.
I need help immediately
"""

phone_no = re.findall(r"[+]+\d{12}", text)

email = re.findall(r"\S+@\S+", text)

vehicle_no = re.findall(
    r"[A-Z]{2}[0-9]{2}[A-Z]{2}\d{4}",
    text
)

print(
    f"phone number = {phone_no[0]}, "
    f"email = {email[0]}, "
    f"vehicle number = {vehicle_no[0]}"
)
```

---

# Understanding the Problem

Consider the following user message.

```text
I want to place a call +919876512345 and send an email to
john@example.com as my vehicle PB10AL2937 is having a flat tyre.
```

Humans can immediately identify:

- Phone Number
- Email Address
- Vehicle Number

However,

for a computer,

this is simply one long string.

```
Raw Text
↓
Characters
↓
Letters
↓
Numbers
↓
Symbols
```

Regex helps transform this unstructured information into structured data.

---

# Overall Execution Flow

```
User Message
↓
Regex Engine
↓
Phone Pattern
↓
Phone Number

----------------

Email Pattern
↓
Email

----------------

Vehicle Pattern
↓
Vehicle Number
↓
Structured Information
```

---

# Step 1 — Store the Input Text

```python
text = """
I want to place a call +919876512345 ...
"""
```

The complete paragraph is stored inside a single string variable.

Internally,

```
Memory
↓
text
↓
Entire Paragraph
```

---

# Step 2 — Extract Phone Number

## Classroom Code

```python
phone_no = re.findall(r"[+]+\d{12}", text)
```

---

## Pattern Breakdown

```
[+]
↓
Plus Symbol

----------------

+
↓
One or More

----------------

\d
↓
Digit

----------------

{12}
↓
Exactly

12 Digits
```

Combined,

```
[+]+\d{12}
```

matches

```
+919876512345
```

---

## Internal Working

```
Paragraph
↓
Read Character
↓
+
↓
Found
↓
Next
12 Digits
↓
Match Complete
↓
Store
```

---

## Output

```python
['+919876512345']
```

Notice that `findall()` still returns a **list**, even if only one match exists.

---

# Step 3 — Extract Email Address

## Classroom Code

```python
email = re.findall(r"\S+@\S+", text)
```

---

## Pattern Breakdown

```
\S+
↓
Username
↓
@
↓
Domain
↓
\S+
```

Regex scans the paragraph.

```
john@example.com
↓
Username
↓
@
↓
example.com
↓
Valid Email
```

---

## Output

```python
['john@example.com']
```

---

# Step 4 — Extract Vehicle Number

## Classroom Code

```python
vehicle_no = re.findall(r"[A-Z]{2}[0-9]{2}[A-Z]{2}\d{4}", text)
```

---

## Pattern Breakdown

```
PB
↓
State Code

----------------

10
↓
District

----------------

AL
↓
Series

----------------

2937
↓
Registration Number
```

Regex validates every section before accepting the match.

---

## Output

```python
['PB10AL2937']
```

---

# Step 5 — Display the Results

## Classroom Code

```python
print(
    f"phone number = {phone_no[0]}, "
    f"email = {email[0]}, "
    f"vehicle number = {vehicle_no[0]}"
)
```

---

## Why `[0]`?

Remember,

`findall()` always returns a list.

Example

```python
phone_no
```

contains

```python
['+919876512345']
```

To retrieve the actual value,

the instructor accessed the first element.

```python
phone_no[0]
```

Similarly,

```python
email[0]

vehicle_no[0]
```

return the extracted strings.

---

# Expected Output

```text
phone number = +919876512345

email = john@example.com

vehicle number = PB10AL2937
```

---

# Data Transformation

Before Regex

```
Paragraph
↓
One Long String
```

After Regex

```
Phone
↓
+919876512345

----------------

Email
↓
john@example.com

----------------

Vehicle
↓
PB10AL2937
```

The information is now structured and ready for further processing.

---

# Why is Information Extraction Important?

Imagine an AI-powered roadside assistance chatbot.

A customer writes:

```text
Hello,

My car PB10AL2937 has broken down.

Please call me at +919876512345.

My email is john@example.com.
```

Instead of asking the customer to fill separate fields,

the AI automatically extracts:

```
Customer Message
↓
Regex Engine
↓
Phone
↓
Email
↓
Vehicle Number
↓
Database
↓
Support Team
```

No manual data entry is required.

---

# Real-World Applications

Information extraction using Regex is widely used in:

- AI Chatbots
- Hospital Management Systems
- CRM Software
- Customer Support Automation
- Banking Applications
- Insurance Portals
- Logistics Systems
- OCR Document Processing
- Resume Parsing
- Invoice Processing
- Email Automation
- Natural Language Processing (NLP)

These systems receive unstructured text but require structured information for further processing.

---

# Interview Note

A common interview question is:

> **Why is `re.findall()` preferred for information extraction?**

**Answer:**

`re.findall()` scans the entire input and returns **all matching occurrences** as a list. This makes it ideal for extracting structured information such as phone numbers, email addresses, URLs, IDs, and registration numbers from large blocks of unstructured text.

---

# Complete Classroom Code

```python
import re

text = """
I want to place a call +919876512345 and send an email to
john@example.com as my vehicle PB10AL2937 is having a flat tyre.
I need help immediately
"""

phone_no = re.findall(r"[+]+\d{12}", text)

email = re.findall(r"\S+@\S+", text)

vehicle_no = re.findall(r"[A-Z]{2}[0-9]{2}[A-Z]{2}\d{4}", text)

print(
    f"phone number = {phone_no[0]}, "
    f"email = {email[0]}, "
    f"vehicle number = {vehicle_no[0]}"
)
```

---

> [!IMPORTANT]
> Information extraction is one of the most practical applications of **Regular Expressions**. By combining carefully designed patterns with `re.findall()`, Python can automatically identify and extract structured information—such as **phone numbers**, **email addresses**, and **vehicle registration numbers**—from unstructured text. This capability forms the foundation of many modern AI assistants, document processing systems, chatbots, and enterprise automation solutions.

---


# 7️⃣ Building a Multi-Page Streamlit Application

After completing the Regular Expressions module, the instructor shifted the focus towards **frontend development** using **Streamlit**.

Until now, most Python programs executed in the terminal (console). However, real-world AI applications require an interactive graphical interface where users can click buttons, view dashboards, enter text, upload files, and interact with AI systems.

To achieve this, the instructor introduced **Streamlit**, a Python framework that enables developers to build modern web applications without writing HTML, CSS, or JavaScript. Today's project demonstrated how to create a **multi-page Agentic AI application** consisting of a Home page, AI Chat page, and Patients page. :contentReference

---

# What is Streamlit?

**Streamlit** is an open-source Python framework for creating interactive web applications.

Instead of manually developing frontend interfaces,

developers simply write Python code.

Execution Flow

```
Python Code
↓
Streamlit
↓
Web Interface
↓
Browser
```

This makes Streamlit one of the fastest frameworks for building:

- AI applications
- Dashboards
- Data Science tools
- Machine Learning interfaces
- Internal business applications

---

# Why Streamlit?

Without Streamlit,

building a frontend usually requires:

```
HTML
↓
CSS
↓
JavaScript
↓
Backend
↓
Database
```

With Streamlit,

everything can be written in Python.

```
Python
↓
Streamlit
↓
Complete Web Application
```

This significantly reduces development time.

---

# Classroom Code (session19A.py)

```python
import streamlit as st

# st -> alias of streamlit

# streamlit helps to create a frontend

st.title("Agentic UI Demo")

# Page(Mention the name of page, title on sidebar, icon)

home_page = st.Page(
    "Session19B.py",
    title="Home",
    icon="🏠"
)

chat_page = st.Page(
    "Session19C.py",
    title="AI Chat"
)

patients_page = st.Page(
    "Session19D.py",
    title="Patients"
)

pg = st.navigation([
    home_page,
    chat_page,
    patients_page
])

pg.run()
```

---

# Step 1 — Import Streamlit

```python
import streamlit as st
```

The instructor imported the Streamlit library and assigned it the alias:

```python
st
```

This makes every Streamlit function shorter and easier to use.

Instead of writing

```python
streamlit.title()
```

we write

```python
st.title()
```

---

## Internal Architecture

```
Python
↓
import streamlit
↓
st
↓
Streamlit Functions
```

---

# Step 2 — Creating the Application Title

## Classroom Code

```python
st.title("Agentic UI Demo")
```

Execution

```
Python
↓
st.title()
↓
Browser
↓
Large Heading
```

Output

```
Agentic UI Demo
```

This title appears at the top of the application and gives users an overview of the project.

---

# Step 3 — Creating Individual Pages

The instructor then created three independent application pages.

---

## Home Page

```python
home_page = st.Page(
    "Session19B.py",
    title="Home",
    icon="🏠"
)
```

Explanation

```
Page File
↓
Session19B.py
↓
Sidebar Title
↓
Home
↓
Icon
↓
🏠
```

Whenever the user clicks **Home**, Streamlit executes `Session19B.py`.

---

## AI Chat Page

```python
chat_page = st.Page(
    "Session19C.py",
    title="AI Chat"
)
```

This page contains the Agentic AI chatbot.

Execution

```
Sidebar
↓
AI Chat
↓
Session19C.py
```

---

## Patients Page

```python
patients_page = st.Page(
    "Session19D.py",
    title="Patients"
)
```

Execution

```
Sidebar
↓
Patients
↓
Session19D.py
```

This page displays patient information in tabular form.

---

# Step 4 — Navigation

After defining the pages,

the instructor connected them using

```python
pg = st.navigation([
    home_page,
    chat_page,
    patients_page
])
```

Execution Flow

```
Home Page
↓
AI Chat
↓
Patients
↓
Navigation Menu
```

The navigation object stores every page of the application.

---

# Application Architecture

```
Agentic UI Demo

│
├── 🏠 Home
│      │
│      ├── Dashboard
│      ├── Charts
│      └── Statistics
│
├── AI Chat
│      │
│      ├── Gemini / Gemma
│      ├── Function Calling
│      └── MongoDB
│
└── Patients
       │
       ├── Patient Records
       └── Data Table
```

This architecture separates different responsibilities into dedicated modules, making the application easier to maintain and extend.

---

# Step 5 — Running the Application

Finally,

the instructor executed

```python
pg.run()
```

Execution

```
Navigation Object
↓
Run
↓
Open Selected Page
↓
Render Browser
```

Whenever the user clicks another page,

Streamlit automatically loads the corresponding Python file.

---

# Internal Working of Multi-Page Streamlit

```
Browser
↓
Sidebar
↓
User Clicks
↓
Navigation
↓
Corresponding Python File
↓
Execute
↓
Render Page
```

Notice that only the selected page executes,

making the application efficient and modular.

---

# Why Use Multiple Pages?

Imagine a hospital management application.

Keeping every feature inside one Python file would quickly become difficult to maintain.

Instead,

the application is divided into independent modules.

```
Application

│
├── Dashboard
├── Chatbot
├── Patients
├── Doctors
├── Billing
├── Reports
└── Settings
```

Each module has its own dedicated file.

This approach follows modern software engineering practices.

---

# Advantages of Multi-Page Applications

- Better code organization.
- Easier maintenance.
- Independent modules.
- Faster development.
- Improved scalability.
- Professional application structure.
- Easier collaboration among developers.

---

# Real-World Applications

Multi-page Streamlit applications are commonly used for:

- Hospital Management Systems
- AI Assistants
- Data Analytics Dashboards
- Business Intelligence Portals
- Banking Applications
- Inventory Management Systems
- CRM Platforms
- Machine Learning Dashboards
- Internal Enterprise Tools

---

# Complete Classroom Code

```python
import streamlit as st

# st -> alias of streamlit

# streamlit helps to create a frontend

st.title("Agentic UI Demo")

home_page = st.Page(
    "Session19B.py",
    title="Home",
    icon="🏠"
)

chat_page = st.Page(
    "Session19C.py",
    title="AI Chat"
)

patients_page = st.Page(
    "Session19D.py",
    title="Patients"
)

pg = st.navigation([
    home_page,
    chat_page,
    patients_page
])

pg.run()
```

---

> [!IMPORTANT]
> Streamlit enables developers to build **interactive web applications entirely in Python**. By organizing an application into multiple pages using `st.Page()` and `st.navigation()`, developers can create modular, scalable, and maintainable software. This architecture is widely used in modern AI dashboards, healthcare systems, enterprise tools, and data-driven applications where different functionalities are separated into independent modules.

---


# 8️⃣ Building the Home Dashboard using Streamlit

After creating the multi-page navigation system, the instructor developed the **Home Dashboard** of the Agentic AI application.

The Home page acts as the landing page of the application and presents important hospital-related information using **metrics**, **charts**, **tables**, and **responsive layouts**.

Instead of writing HTML, CSS, and JavaScript, Streamlit provides built-in widgets that automatically generate professional-looking dashboards using only Python code. Today's dashboard demonstrated how to organize information into columns, display key performance indicators (KPIs), visualize patient statistics using charts, and present departmental information in tabular form.
---

# Classroom Code (session19B.py)

```python
import pandas as pd
import streamlit as st

st.title("Home Page")

st.write("Welcome to Home Page")

st.divider()

col1, col2, col3, col4 = st.columns(4)

col1.metric("Patients:", 326)
col2.metric("Doctors:", 21)
col3.metric("Appointments:", 54)
col4.metric("Revenue:", "12.5 Lakhs")

st.divider()

left, right = st.columns([2,1])

with left:

    st.subheader("Monthly Patients")

    chart = pd.DataFrame({

        'Month': ['Jan','Feb','Mar','Apr','May','Jun'],

        'Patients': [120,140,180,170,210,250]

    })

    st.line_chart(
        chart.set_index("Month")
    )

with right:

    st.subheader("Departments")

    departments = pd.DataFrame({

        "Department":

        ["Cardiology","Dental","Neuro","Ortho"],

        "Doctors":[5,4,7,8]

    })

    st.dataframe(
        departments,
        use_container_width=True
    )

st.divider()
```

---

# Dashboard Architecture

```
Home Page
│
├── Title
├── Welcome Message
├── KPI Cards
│      │
│      ├── Patients
│      ├── Doctors
│      ├── Appointments
│      └── Revenue
│
├── Monthly Patients Chart
│
└── Department Table
```

This layout resembles many professional healthcare dashboards.

---

# Step 1 — Import Required Libraries

## Classroom Code

```python
import pandas as pd

import streamlit as st
```

---

### Why Pandas?

Pandas is used to create **DataFrames**.

Execution

```
Raw Data
↓
Pandas
↓
DataFrame
↓
Chart

or

Table
```

Without Pandas,

creating structured tables becomes difficult.

---

### Why Streamlit?

Streamlit converts Python code into an interactive web interface.

```
Python
↓
Streamlit
↓
Browser
```

---

# Step 2 — Creating the Page Title

## Classroom Code

```python
st.title("Home Page")
```

Execution

```
Python
↓
st.title()
↓
Large Heading
```

Output

```
Home Page
```

---

# Step 3 — Displaying Text

## Classroom Code

```python
st.write("Welcome to Home Page")
```

The instructor mentioned that

```python
st.write()
```

and

```python
st.markdown()
```

can both display text.

Execution

```
Python
↓
write()
↓
Browser Text
```

---

# Step 4 — Adding Dividers

## Classroom Code

```python
st.divider()
```

Execution

```
Content
↓
Divider
↓
Horizontal Line
```

Dividers improve readability by separating different dashboard sections.

---

# Step 5 — Creating KPI Cards

The instructor divided the page into four equal columns.

## Classroom Code

```python
col1, col2, col3, col4 = st.columns(4)
```

Execution

```
Dashboard
↓
4 Equal Columns
```

Layout

```
┌───────┬───────┬───────┬───────┐
│ Col 1 │ Col 2 │ Col 3 │ Col 4 │
└───────┴───────┴───────┴───────┘
```

---

# Step 6 — Displaying Metrics

## Classroom Code

```python
col1.metric("Patients:",326)

col2.metric("Doctors:",21)

col3.metric("Appointments:",54)

col4.metric("Revenue:","12.5 Lakhs")
```

Each metric creates a professional KPI card.

Execution

```
Value
↓
Metric Widget
↓
Dashboard Card
```

Output

```
Patients

326

----------------

Doctors

21

----------------

Appointments

54

----------------

Revenue

12.5 Lakhs
```

These widgets are commonly used in business dashboards.

---

# Step 7 — Creating Responsive Layout

The instructor next created columns of different widths.

## Classroom Code

```python
left, right = st.columns([2,1])
```

Explanation

```
Total Width
↓
3 Parts
↓
Left: 2 Parts
↓
Right: 1 Part
```

Visually

```
┌───────────────────────┬───────────┐
│        Left           │   Right   │
└───────────────────────┴───────────┘
```

The left section becomes wider because charts require more space.

---

# Step 8 — Creating the Monthly Patients Chart

Inside the left column,

the instructor displayed a line chart.

---

## Classroom Code

```python
with left:

    st.subheader("Monthly Patients")
```

Execution

```
Left Column
↓
Subheading
↓
Monthly Patients
```

---

## Creating the DataFrame

```python
chart = pd.DataFrame({

    "Month":

    ["Jan","Feb","Mar","Apr","May","Jun"],

    "Patients":

    [120,140,180,170,210,250]

})
```

Execution

```
Python Dictionary
↓
Pandas
↓
DataFrame
```

Result

| Month | Patients |
|--------|----------|
| Jan | 120 |
| Feb | 140 |
| Mar | 180 |
| Apr | 170 |
| May | 210 |
| Jun | 250 |

---

## Creating the Line Chart

### Classroom Code

```python
st.line_chart(
    chart.set_index("Month")
)
```

Execution

```
DataFrame
↓
Month
↓
Index
↓
Line Chart
↓
Browser
```

The months become the X-axis,

while patient count becomes the Y-axis.

Conceptually,

```
Patients

250 │                       ●
210 │                  ●
180 │             ●
170 │         ●
140 │     ●
120 │  ●
    └────────────────────────────
      Jan Feb Mar Apr May Jun
```

This visual representation allows users to identify patient trends instantly.

---

# Step 9 — Department Table

Inside the right column,

the instructor displayed departmental information.

---

## Classroom Code

```python
with right:

    st.subheader("Departments")
```

---

## Creating Department Data

```python
departments = pd.DataFrame({

    "Department":

    [

    "Cardiology",

    "Dental",

    "Neuro",

    "Ortho"

    ],

    "Doctors":[5,4,7,8]

})
```

Execution

```
Dictionary
↓
DataFrame
```

---

## Displaying the Table

```python
st.dataframe(

    departments,

    use_container_width=True

)
```

Execution

```
DataFrame
↓
Interactive Table
↓
Browser
```

Output

| Department | Doctors |
|------------|---------|
| Cardiology | 5 |
| Dental | 4 |
| Neuro | 7 |
| Ortho | 8 |

Unlike ordinary printing,

`st.dataframe()` creates an interactive table with scrolling, resizing, and sorting capabilities.

---

# Internal Working of the Dashboard

```
Python
↓
Pandas
↓
DataFrame
↓
Streamlit Widgets
↓
Browser Dashboard
↓
User
```

Everything is rendered dynamically whenever the application runs.

---

# Why Use Dashboards?

Hospital administrators need a quick overview of important information.

Instead of reading lengthy reports,

they can immediately observe:

- Number of Patients
- Number of Doctors
- Revenue
- Monthly Trends
- Department Statistics

through visual widgets.

---

# Real-World Applications

Dashboards built using Streamlit are widely used in:

- Hospital Management Systems
- AI Analytics Platforms
- Sales Dashboards
- Business Intelligence
- Banking Systems
- Inventory Management
- Student Management Systems
- Manufacturing Monitoring
- Data Science Projects
- Machine Learning Applications

---

# Complete Classroom Code

```python
import pandas as pd
import streamlit as st

st.title("Home Page")

st.write("Welcome to Home Page")

st.divider()

col1, col2, col3, col4 = st.columns(4)

col1.metric("Patients:", 326)
col2.metric("Doctors:", 21)
col3.metric("Appointments:", 54)
col4.metric("Revenue:", "12.5 Lakhs")

st.divider()

left, right = st.columns([2,1])

with left:

    st.subheader("Monthly Patients")

    chart = pd.DataFrame({
        "Month": ["Jan","Feb","Mar","Apr","May","Jun"],
        "Patients": [120,140,180,170,210,250]
    })

    st.line_chart(
        chart.set_index("Month")
    )

with right:

    st.subheader("Departments")

    departments = pd.DataFrame({
        "Department": ["Cardiology","Dental","Neuro","Ortho"],
        "Doctors": [5,4,7,8]
    })

    st.dataframe(
        departments,
        use_container_width=True
    )

st.divider()
```

---

> [!IMPORTANT]
> Streamlit dashboards enable developers to build **interactive data visualization interfaces** using only Python. Widgets such as **`st.metric()`**, **`st.columns()`**, **`st.line_chart()`**, and **`st.dataframe()`** make it easy to present key performance indicators (KPIs), trends, and structured datasets in a professional web interface. Such dashboards are widely used in healthcare, finance, analytics, AI, and enterprise management systems.

---

# 9️⃣ Building the Agentic AI Chat Page – Project Architecture & Initialization

The most important part of today's session was building an **Agentic AI Chat Interface** using **Streamlit**, **Google Gemma**, **MongoDB Atlas**, and **Function Calling**.

Unlike a traditional chatbot that only generates text, this application can **understand user requests, invoke Python functions, interact with a database, and perform real-world actions**. This is the fundamental idea behind an **Agentic AI System**.

Before implementing Function Calling, the instructor first initialized all the required libraries, configured the Streamlit page, connected to MongoDB Atlas, initialized the Large Language Model (LLM), and prepared the application's session state. These initialization steps provide the foundation upon which the rest of the Agentic AI workflow is built.{index=0}

---

# Overall Architecture of the Agentic AI System

Before diving into the code, it is important to understand the complete system architecture.

```
User
↓
Streamlit Chat UI
↓
Gemma LLM
↓
Function Calling
↓
Python Function
↓
MongoDB Atlas
↓
Response
↓
User
```

Today's lecture focused on building this complete pipeline.

---

# Classroom Code (Initialization Section)

```python
import streamlit as st
import time
import datetime
import json

from dbhelper import DBHelper

from google import genai
from google.genai import types
```

---

# Step 1 — Import Streamlit

```python
import streamlit as st
```

The Streamlit library is responsible for creating the complete frontend interface.

Execution

```
Python
↓
Streamlit
↓
Web Application
```

Using the alias

```python
st
```

makes every Streamlit function shorter.

Example

```python
st.title()

st.chat_input()

st.chat_message()
```

---

# Step 2 — Import Time Module

```python
import time
```

The instructor later used this module to create a **typing animation**.

Instead of displaying the entire AI response instantly,

characters appear one by one.

Execution

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

# Step 3 — Import Datetime

```python
import datetime
```

Every task stored inside MongoDB receives a timestamp.

Execution

```
Task
↓
Current Date
↓
Current Time
↓
Database
```

This helps track when a task was created.

---

# Step 4 — Import JSON

```python
import json
```

Google's LLM returns structured responses.

Those responses must be converted into Python dictionaries.

Execution

```
LLM Response
↓
JSON
↓
Python Dictionary
```

Without JSON parsing,

Python cannot access the returned function arguments.

---

# Step 5 — Import Database Helper

```python
from dbhelper import DBHelper
```

The project uses a custom helper class.

Instead of writing MongoDB code repeatedly,

all database operations are centralized.

Architecture

```
Python
↓
DBHelper
↓
MongoDB Atlas
```

This follows good software engineering practices.

---

# Step 6 — Import Google's AI SDK

```python
from google import genai

from google.genai import types
```

These libraries enable communication with Google's Large Language Models.

Execution

```
Python
↓
Google SDK
↓
Gemma Model
```

The `types` module is particularly important because it contains the classes required for **Function Calling**, such as:

- `FunctionDeclaration`
- `Tool`
- `GenerateContentConfig`

These will be used later in the project.

---

# Helper Function

The instructor created a helper function for formatting task information.

## Classroom Code

```python
def task_to_string(task):

    return "Title: {title}, Description: {description}".format_map(task)
```

---

## Purpose

Database records are dictionaries.

Example

```python
{
    "title": "Call Doctor",
    "description": "Discuss patient report"
}
```

Instead of printing the dictionary directly,

the function converts it into a readable sentence.

Execution

```
Dictionary
↓
Formatting
↓
Readable String
```

Output

```
Title: Call Doctor,
Description: Discuss patient report
```

---

# Configuring the Streamlit Page

## Classroom Code

```python
st.set_page_config(page_title="Agentic Chat UI")

st.subheader("Write a task to save in database")
```

---

## `st.set_page_config()`

This function configures the browser page.

Execution

```
Browser
↓
Page Configuration
↓
Title
↓
Agentic Chat UI
```

Users now see a professional browser title instead of a generic Python application.

---

## `st.subheader()`

```python
st.subheader("Write a task to save in database")
```

Execution

```
Browser
↓
Subheading
↓
Instruction
```

The user immediately understands the purpose of the page.

---

# Database Initialization

The instructor then established a connection with MongoDB Atlas.

## Classroom Code

```python
db_helper = DBHelper()

db_helper.select_collection(collection_name="tasks")
```

---

## Step 1

```python
DBHelper()
```

Creates an object responsible for handling database operations.

Execution

```
Python
↓
DBHelper Object
↓
Database Connection
```

---

## Step 2

```python
select_collection("tasks")
```

Execution

```
MongoDB
↓
Database
↓
tasks Collection
```

All future operations are performed on this collection.

---

# LLM Initialization

The instructor initialized Google's Gemma model.

## Classroom Code

```python
my_api_key = ""

client = genai.Client(
    api_key=my_api_key
)
```

---

## Execution

```
Python
↓
API Key
↓
Gemma Client
↓
LLM Ready
```

The `client` object will later communicate with the model.

---

# Session State

One of the most important concepts introduced today was **Session State**.

## Classroom Code

```python
if "messages" not in st.session_state:

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

---

## Internal Working

```
Browser
↓
Session
↓
messages
↓
Conversation History
```

The conversation now remains available throughout the user's session.

---

# Display Existing Messages

## Classroom Code

```python
for message in st.session_state.messages:

    with st.chat_message(message["role"]):

        st.markdown(
            message["content"]
        )
```

---

## Execution Flow

```
Session State
↓
Messages
↓
Loop
↓
Display
↓
Browser
```

Each stored message is rendered again whenever the page reloads.

This gives the impression of a continuous conversation.

---

# Why Session State is Important?

Without Session State,

```
Refresh
↓
Chat Lost
```

With Session State,

```
Refresh
↓
Conversation Restored
```

This is essential for every chatbot application.

---

# Complete Initialization Code

```python
import streamlit as st
import time
import datetime
import json

from dbhelper import DBHelper
from google import genai
from google.genai import types


def task_to_string(task):
    return "Title: {title}, Description: {description}".format_map(task)


st.set_page_config(
    page_title="Agentic Chat UI"
)

st.subheader(
    "Write a task to save in database"
)

db_helper = DBHelper()
db_helper.select_collection(
    collection_name="tasks"
)

my_api_key = ""
client = genai.Client(
    api_key=my_api_key
)

if "messages" not in st.session_state:
    st.session_state.messages = []

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])
```

---

# Real-World Applications

This initialization pattern is commonly used in:

- AI Chatbots
- Customer Support Assistants
- Healthcare AI Systems
- CRM Platforms
- Banking Assistants
- Agentic AI Applications
- Enterprise Automation Tools
- Task Management Systems
- Personal AI Assistants

---

> [!IMPORTANT]
> Initialization is the foundation of every **Agentic AI application**. Before an AI agent can understand user requests or execute functions, the application must configure the user interface, establish database connectivity, initialize the Large Language Model (LLM), and maintain conversation history through **Session State**. These initialization steps ensure that the AI system is reliable, interactive, and capable of maintaining context across user interactions.

---


# 🔟 Understanding Streamlit Chat Interface and User Input

After initializing the application, connecting the database, and configuring the Large Language Model (LLM), the instructor implemented the **interactive chat interface**.

This section is responsible for accepting user messages, displaying them inside the chat window, storing them in the session history, and preparing them to be sent to the AI model.

This forms the **first stage** of the Agentic AI workflow.

> **User → Chat Interface → LLM**

Everything that follows (AI reasoning, function calling, database operations) depends on this initial interaction.

---

# Agentic Chat Flow

```
User
↓
Types Message
↓
Chat Input
↓
Session State
↓
Display Message
↓
Send to LLM
```

This is the first interaction between the user and the AI system.

---

# Classroom Code

```python
if prompt := st.chat_input("Write here"):

    st.session_state.messages.append({

        "role":"user",

        "content":prompt

    })

    with st.chat_message("user"):

        st.markdown(prompt)
```

---

# Understanding `st.chat_input()`

The function

```python
st.chat_input()
```

creates a chat input box similar to modern AI applications such as ChatGPT, Gemini, and Claude.

Execution

```
Browser
↓
Input Box
↓
User Types
↓
Enter
↓
Python
```

Instead of using

```python
st.text_input()
```

Streamlit provides a dedicated chat widget for conversational interfaces.

---

# The Walrus Operator (`:=`)

The instructor used

```python
if prompt := st.chat_input("Write here"):
```

This syntax uses Python's **Walrus Operator** (`:=`).

---

## Without Walrus Operator

```python
prompt = st.chat_input("Write here")

if prompt:
    ...
```

---

## With Walrus Operator

```python
if prompt := st.chat_input("Write here"):
```

Both versions perform the same task.

However,

the Walrus Operator combines **assignment** and **condition checking** into a single statement.

Execution

```
User Input
↓
Assign to prompt
↓
Check Empty ?
↓
Execute Block
```

If the user presses **Enter** without typing anything,

the block does not execute.

---

# Internal Working

Suppose the user enters

```
Add a meeting tomorrow
```

Internally,

```
Chat Box
↓
"Add a meeting tomorrow"
↓
prompt Variable
```

Now

```python
prompt
```

contains

```text
Add a meeting tomorrow
```

---

# Saving the Message

The instructor immediately stored the user message inside Session State.

## Classroom Code

```python
st.session_state.messages.append({

    "role":"user",

    "content":prompt

})
```

---

# Why Store Messages?

A chatbot should remember previous conversations.

Instead of displaying only the latest message,

every interaction is stored.

Execution

```
User Message
↓
Dictionary
↓
Session State List
```

Example

```
[
    {
        "role":"user",
        "content":"Hello"
    }
]
```

After another message

```
[
    {
        "role":"user",
        "content":"Hello"
    },
    {
        "role":"assistant",
        "content":"Hi!"
    }
]
```

The conversation gradually grows.

---

# Message Architecture

Every chat message follows the same structure.

```
{
role
↓
user

assistant
----------------

content
↓
Actual Message

}
```

This structure is similar to the message format used by many LLM APIs.

---

# Displaying the User Message

After storing the message,

the instructor displayed it inside the chat window.

## Classroom Code

```python
with st.chat_message("user"):

    st.markdown(prompt)
```

---

# Understanding `st.chat_message()`

Execution

```
Role
↓
user
↓
Chat Bubble
↓
Browser
```

If the role changes,

the bubble also changes.

Example

```
User
↓
Right Side

----------------

Assistant
↓
Left Side
```

This creates a natural conversational interface.

---

# Understanding `st.markdown()`

Inside the chat bubble,

the instructor displayed the actual message.

```python
st.markdown(prompt)
```

Execution

```
prompt
↓
Markdown
↓
Browser
```

If

```python
prompt
```

contains

```
Create a reminder
```

The user immediately sees

```
👤

Create a reminder
```

inside the chat interface.

---

# Complete Execution Flow

Suppose the user types

```
Schedule a meeting tomorrow.
```

Execution

```
User
↓
Chat Input
↓
prompt Variable
↓
Session State
↓
Chat Bubble
↓
Browser
↓
Ready for AI
```

Notice that the message is now stored permanently for the current session.

---

# Internal Architecture

```
Browser
↓
st.chat_input()
↓
prompt
↓
Session State
↓
st.chat_message()
↓
Display User Message
↓
LLM Processing
```

The AI model has not yet generated a response.

This section only handles **user interaction**.

---

# Why Not Use `print()`?

Using

```python
print(prompt)
```

would display the message only in the terminal.

Example

```
Console
↓
Hello
```

The user would never see it in the browser.

Using

```python
st.chat_message()
```

renders it directly inside the web application.

---

# Why Session State Matters Here

Without Session State,

```
User
↓
Message
↓
Refresh
↓
Message Lost
```

With Session State,

```
User
↓
Message
↓
Refresh
↓
Conversation Still Available
```

This allows the chatbot to maintain conversational context.

---

# Real-World Applications

This chat interface pattern is used in:

- ChatGPT
- Google Gemini
- Claude AI
- Customer Support Bots
- Hospital AI Assistants
- HR Chatbots
- Banking Assistants
- Educational Tutors
- Personal AI Assistants
- Enterprise AI Systems

Almost every conversational AI application follows a similar workflow.

---

# Complete Classroom Code

```python
if prompt := st.chat_input("Write here"):

    st.session_state.messages.append({

        "role":"user",

        "content":prompt

    })

    with st.chat_message("user"):

        st.markdown(prompt)
```

---

> [!IMPORTANT]
> The combination of **`st.chat_input()`**, **`st.chat_message()`**, and **`st.session_state`** provides the foundation for building conversational AI applications in Streamlit. User messages are captured, stored, and immediately displayed in the interface, ensuring that the conversation remains persistent throughout the session. This pattern is widely used in modern AI chatbots before forwarding user input to the Large Language Model (LLM) for processing.

---


# 1️⃣1️⃣ Connecting the User with Google Gemma LLM

After building the chat interface, the instructor connected the application with **Google's Gemma Large Language Model (LLM)**.

Until now, the application could only accept user messages and display them on the screen. It had **no intelligence** of its own.

In this section, the instructor demonstrated how the user message is sent to the LLM, how the model receives additional instructions (System Prompt), how tools are attached for **Function Calling**, and how the model prepares a response.

This is the point where the application transforms from a simple chat interface into an **Agentic AI System** capable of reasoning and deciding whether to answer normally or invoke a Python function. 
---

# Overall Communication Flow

```
User
↓
Chat Interface
↓
Gemma LLM
↓
System Prompt
+
Tools
↓
Reasoning
↓
Response
```

This forms the intelligence layer of the application.

---

# Classroom Code

```python
response = client.models.generate_content(

    model="gemma-3-27b-it",

    contents=prompt,

    config=types.GenerateContentConfig(

        system_instruction="""
        You are a task management assistant.

        Use tools whenever needed.
        """,

        tools=[tool]

    )

)
```

---

# Step 1 — Calling the Model

The instructor used

```python
client.models.generate_content()
```

Execution

```
Python
↓
Gemma Client
↓
Google Servers
↓
Gemma Model
```

This function sends the user's request to the Large Language Model.

---

# Why `generate_content()`?

Unlike a normal Python function,

the model does not simply execute instructions.

Instead,

it performs reasoning.

```
Input
↓
Reasoning
↓
Decision
↓
Response
```

The output depends upon both:

- User Prompt
- System Instructions

---

# Step 2 — Selecting the Model

## Classroom Code

```python
model="gemma-3-27b-it"
```

---

The instructor selected the **Gemma 3 27B Instruction-Tuned Model**.

Meaning

```
Gemma
↓
3rd Generation
↓
27 Billion Parameters
↓
Instruction Tuned
```

Instruction-Tuned models are specifically optimized for following human instructions.

---

# Why Choose an Instruction Model?

Suppose the user writes

```
Save a reminder

for tomorrow.
```

A normal language model might simply explain reminders.

An instruction-tuned model understands that

```
User
↓
Instruction
↓
Action
```

and can therefore decide whether to call a function.

---

# Step 3 — Sending User Content

## Classroom Code

```python
contents=prompt
```

The variable

```python
prompt
```

contains the user's message.

Example

```text
Add a meeting tomorrow.
```

Execution

```
Browser
↓
prompt
↓
Gemma Model
```

The model now understands the user's request.

---

# Step 4 — Generate Content Configuration

Instead of sending only the prompt,

the instructor attached an additional configuration.

```python
config=types.GenerateContentConfig(...)
```

Execution

```
Prompt
↓
Configuration
↓
Gemma
↓
Reasoning
```

The configuration tells the model **how it should behave**.

---

# Step 5 — System Instructions

## Classroom Code

```python
system_instruction="""

You are a task management assistant.

Use tools whenever needed.

"""
```

---

## What is a System Prompt?

The **System Prompt** defines the AI's role before any user message is processed.

Architecture

```
System Prompt
↓
AI Personality
↓
User Prompt
↓
Response
```

Instead of allowing the model to answer freely,

the instructor constrained it.

The AI now understands:

- It is a task management assistant.
- It should use available tools whenever appropriate.

---

# Why is the System Prompt Important?

Suppose two different system prompts are used.

---

### Prompt 1

```
You are a doctor.
```

User

```
I have fever.
```

AI

```
Provides medical guidance.
```

---

### Prompt 2

```
You are a programmer.
```

Same user input

```
I have fever.
```

The response changes because the AI has a different role.

Thus,

the System Prompt greatly influences model behaviour.

---

# Step 6 — Attaching Tools

## Classroom Code

```python
tools=[tool]
```

This is the most important line in today's lecture.

Execution

```
Gemma
↓
Available Tools
↓
Decision
↓
Call Function ?
↓
Yes / No
```

Without tools,

the model can only generate text.

With tools,

the model gains the ability to trigger Python functions.

---

# Internal Architecture

```
Gemma
│
├── Knowledge
│
├── Reasoning
│
└── Available Tools
        │
        ├── Save Task
        ├── Retrieve Task
        ├── Delete Task
        └── Others
```

The LLM examines the user's request and determines whether one of the available tools should be used.

---

# What Happens Internally?

Suppose the user types

```
Save

Buy medicines tomorrow.
```

Execution

```
User
↓
Gemma
↓
Read Prompt
↓
Understand Intent
↓
Check Available Tools
↓
Function Calling
↓
Python Function
```

Instead of replying with plain text,

the model prepares a structured function call.

---

# Why Attach Tools?

Without tools

```
User
↓
Gemma
↓
Text Response
```

With tools

```
User
↓
Gemma
↓
Python Function
↓
Database
↓
Response
```

This is the core concept of **Agentic AI**.

---

# Complete LLM Request Pipeline

```
User
↓
Chat Interface
↓
Prompt
↓
System Prompt
↓
Available Tools
↓
Gemma
↓
Reasoning
↓
Function Call
or
Text Response
```

Every request follows this sequence before the AI generates a response.

---

# Real-World Applications

This architecture is widely used in:

- AI Task Managers
- Hospital Assistants
- Banking Chatbots
- Travel Booking Systems
- Personal AI Assistants
- Customer Support Bots
- CRM Platforms
- Enterprise Automation
- Smart Scheduling Systems
- AI Workflow Automation

Modern AI assistants combine LLM reasoning with external tools to perform real-world tasks.

---

# Complete Classroom Code

```python
response = client.models.generate_content(

    model="gemma-3-27b-it",

    contents=prompt,

    config=types.GenerateContentConfig(

        system_instruction="""
        You are a task management assistant.

        Use tools whenever needed.
        """,

        tools=[tool]
    )
)
```

---

> [!IMPORTANT]
> Connecting an application to an **Instruction-Tuned Large Language Model (LLM)** enables the AI to understand user intent, follow predefined system instructions, and decide whether external tools should be used. By combining a **System Prompt**, **user input**, and **Function Calling tools**, the application evolves from a simple chatbot into an **Agentic AI system** capable of reasoning and executing real-world actions instead of generating text alone.

---


# 1️⃣2️⃣ Understanding Function Calling in Agentic AI

The most powerful concept introduced in today's session was **Function Calling**.

A traditional Large Language Model (LLM) generates text based on the user's input. However, it **cannot directly execute Python code**, access databases, or perform external actions.

Function Calling bridges this gap by allowing the LLM to **request the execution of predefined Python functions**. The model does not execute the code itself—instead, it decides **which function should be called** and **what arguments should be passed**, while Python performs the actual execution.

This capability transforms a chatbot into an **Agentic AI System**, enabling it to interact with databases, APIs, files, and external services. 

---

# Traditional Chatbot vs Agentic AI

## Traditional Chatbot

```
User
↓
LLM
↓
Text Response
```

The conversation ends after generating text.

---

## Agentic AI

```
User
↓
LLM
↓
Function Calling
↓
Python Function
↓
Database / API
↓
Result
↓
LLM
↓
User
```

The AI can now perform real-world actions.

---

# What is Function Calling?

Function Calling allows an LLM to decide:

- Which function should be executed.
- What parameters are required.
- When a function is necessary.
- When normal text is sufficient.

The actual Python function is executed **outside the model**.

---

# Overall Architecture

```
User
↓
Prompt
↓
Gemma
↓
Reasoning
↓
Function Decision
↓
Python
↓
Database
↓
Response
```

The LLM never directly modifies the database.

Instead,

it asks Python to do so.

---

# Classroom Code (Processing Function Calls)

```python
parts = response.candidates[0].content.parts

if len(parts) > 1 and parts[1].function_call:

    function_call = parts[1].function_call

    function_name = function_call.name

    function_args = function_call.args
```

---

# Step 1 — Receive the Model Response

After sending the prompt,

Gemma returns a structured response.

Instead of only returning text,

it may also include

- Normal message
- Function Call
- Function Arguments

Execution

```
Gemma
↓
Structured Response
↓
Python
```

---

# Step 2 — Extract Response Parts

## Classroom Code

```python
parts = response.candidates[0].content.parts
```

---

### Why "parts"?

A single LLM response can contain multiple sections.

Example

```
Part 1
↓
Text

----------------

Part 2
↓
Function Call

----------------

Part 3
↓
Metadata
```

The instructor extracted all parts for inspection.

---

# Internal Structure

Conceptually,

```
response
↓
candidate
↓
content
↓
parts
```

Each part may represent a different component of the AI response.

---

# Step 3 — Checking for Function Calls

## Classroom Code

```python
if len(parts) > 1 and parts[1].function_call:
```

---

### Why this Condition?

Not every prompt requires a function.

Example

User

```
Hello
```

Gemma replies

```
Hello!

How can I help?
```

No function is required.

---

Another example

User

```
Save

Buy Medicines
```

Gemma decides

```
Call

save_task()
```

Therefore,

the program first checks whether a function call exists.

Execution

```
Gemma Response
↓
Function Present?
↓
Yes
↓
Execute

-------------

No
↓
Display Text
```

---

# Step 4 — Extracting the Function

## Classroom Code

```python
function_call = parts[1].function_call
```

This object contains all the information required to execute the function.

Internally,

```
Function Object
│
├── Name
├── Arguments
└── Metadata
```

---

# Step 5 — Function Name

## Classroom Code

```python
function_name = function_call.name
```

Suppose the model decides

```
save_task
```

Then

```python
function_name
```

contains

```text
save_task
```

Execution

```
Function Object
↓
Name
↓
save_task
```

---

# Step 6 — Function Arguments

## Classroom Code

```python
function_args = function_call.args
```

Example

```
{

"title":"Buy Medicines",

"description":"Purchase after office"

}
```

Execution

```
Gemma
↓
Arguments
↓
Python Dictionary
```

Python can now pass these values to the corresponding function.

---

# Decision Flow

```
User
↓
Gemma
↓
Should I Call Function?
↓
Yes
↓
Function Name
↓
Arguments
↓
Python
```

---

# Executing the Correct Function

The instructor then used conditional statements to execute the appropriate function.

Example

```python
if function_name == "save_task":

    db_helper.insert(function_args)
```

Conceptually,

```
Function Name
↓
save_task
↓
Insert Data
↓
MongoDB
```

Similarly,

other functions such as retrieving or deleting tasks can be handled using additional conditions.

---

# Returning the Result

After Python finishes executing the function,

the application prepares a response for the user.

Execution

```
Python
↓
Database Result
↓
Assistant Message
↓
Browser
```

The user experiences this as a seamless conversation, even though several components worked together behind the scenes.

---

# Complete Agentic Execution Flow

Suppose the user writes:

```text
Add a task:
Buy medicines tomorrow.
```

Complete execution:

```
User
↓
Chat Interface
↓
Gemma
↓
Reasoning
↓
Function Call
↓
save_task()
↓
MongoDB Atlas
↓
Success Message
↓
Assistant
↓
User
```

This entire workflow happens within seconds.

---

# Why is Function Calling Important?

Without Function Calling:

```
User
↓
LLM
↓
Text Only
```

The AI cannot actually save a task.

---

With Function Calling:

```
User
↓
LLM
↓
Python Function
↓
Database
↓
Task Saved
```

The AI becomes capable of performing useful actions.

---

# Real-World Applications

Function Calling is widely used in:

- Hospital Management Systems
- Appointment Booking
- Banking Applications
- CRM Software
- Inventory Management
- Smart Home Automation
- AI Email Assistants
- Customer Support Systems
- Travel Booking Platforms
- Enterprise Workflow Automation

Nearly every modern AI assistant uses a similar mechanism to connect the LLM with external tools and services.

---

# Key Concepts Learned

| Concept | Purpose |
|----------|---------|
| `response.candidates` | Accesses the model's generated responses |
| `content.parts` | Breaks the response into individual components |
| `function_call` | Represents the function suggested by the LLM |
| `function_call.name` | Retrieves the function's name |
| `function_call.args` | Retrieves the arguments for the function |
| Python `if` statements | Executes the correct backend function |

---

> [!IMPORTANT]
> **Function Calling** is one of the core technologies behind modern **Agentic AI systems**. Rather than directly executing code, the LLM analyzes the user's request, determines whether a predefined function is needed, and returns the function name along with its required arguments. The Python application then executes the function, interacts with databases or external services, and sends the result back to the user. This separation of reasoning (LLM) and execution (Python) enables AI systems to safely perform real-world tasks while maintaining control over backend operations.

---

# 1️⃣3️⃣ Building the Patients Page using Streamlit DataFrames

The final component of today's Agentic AI application was the **Patients Page**.

After implementing the Home Dashboard and the AI Chat interface, the instructor demonstrated how to display structured patient information in an interactive table using **Pandas** and **Streamlit**.

This page represents a simple version of a **Hospital Management System (HMS)** where patient records are presented in a clean, searchable, and scrollable format. Although the dataset used in the classroom was small, the same approach can be extended to thousands of patient records stored in databases such as MongoDB, MySQL, or PostgreSQL. 

---

# Overall Architecture

```
Patient Data
↓
Pandas DataFrame
↓
Streamlit
↓
Interactive Table
↓
Browser
```

This architecture separates the data layer from the presentation layer.

---

# Classroom Code

```python
import pandas as pd
import streamlit as st

st.title("Patients")

patients = pd.DataFrame({

    "Patient ID":[101,102,103,104],

    "Name":[
        "Rahul",
        "Priya",
        "Aman",
        "Sneha"
    ],

    "Age":[24,31,45,28],

    "Disease":[
        "Fever",
        "Diabetes",
        "Hypertension",
        "Migraine"
    ]

})

st.dataframe(
    patients,
    use_container_width=True
)
```

---

# Step 1 — Import Required Libraries

## Classroom Code

```python
import pandas as pd

import streamlit as st
```

---

### Why Pandas?

Pandas is responsible for creating structured tabular data.

Execution

```
Raw Data
↓
Pandas
↓
DataFrame
```

---

### Why Streamlit?

Streamlit converts the DataFrame into an interactive web table.

Execution

```
DataFrame
↓
Streamlit
↓
Browser
```

---

# Step 2 — Creating the Page Title

## Classroom Code

```python
st.title("Patients")
```

Execution

```
Python
↓
st.title()
↓
Patients
```

This heading identifies the current page inside the multi-page application.

---

# Step 3 — Creating the Patient Data

The instructor created the patient records using a Python dictionary.

## Classroom Code

```python
patients = pd.DataFrame({

    "Patient ID":[101,102,103,104],

    "Name":[
        "Rahul",
        "Priya",
        "Aman",
        "Sneha"
    ],

    "Age":[24,31,45,28],

    "Disease":[
        "Fever",
        "Diabetes",
        "Hypertension",
        "Migraine"
    ]

})
```

---

## Understanding the Data Structure

Each key becomes a column.

```
Dictionary
↓
Column
↓
Values
↓
Rows
```

Internally,

```
Patient ID
↓
101

102

103

104

----------------

Name
↓
Rahul

Priya

Aman

Sneha
```

The DataFrame organizes all related information into a tabular format.

---

# Generated DataFrame

| Patient ID | Name | Age | Disease |
|------------|------|----:|----------|
| 101 | Rahul | 24 | Fever |
| 102 | Priya | 31 | Diabetes |
| 103 | Aman | 45 | Hypertension |
| 104 | Sneha | 28 | Migraine |

This structure allows Streamlit to render the data efficiently.

---

# Step 4 — Displaying the Data

## Classroom Code

```python
st.dataframe(

    patients,

    use_container_width=True

)
```

Execution

```
DataFrame
↓
Streamlit
↓
Interactive Table
↓
Browser
```

Unlike printing data in the terminal,

`st.dataframe()` creates an interactive component.

---

# Understanding `use_container_width=True`

Normally,

the table occupies only the required width.

```
Small Table
```

With

```python
use_container_width=True
```

the table automatically expands to fit the available page width.

Execution

```
Browser Width
↓
Adjust Table Width
↓
Better Readability
```

This improves the appearance of dashboards on different screen sizes.

---

# Internal Working

```
Patient Records
↓
Pandas DataFrame
↓
Streamlit Widget
↓
HTML Table
↓
Browser
```

The conversion from Python objects to a web interface is handled automatically by Streamlit.

---

# Why Use DataFrames?

Without a DataFrame,

developers would need to manually format every row and column.

```
Python Lists
↓
Manual Formatting
↓
Complex Code
```

With Pandas,

```
Python Dictionary
↓
DataFrame
↓
Streamlit Table
```

The implementation becomes much simpler and easier to maintain.

---

# Extending This Page

Although today's example used hardcoded data,

the same page can easily display records retrieved from a database.

Future architecture:

```
MongoDB Atlas
↓
Patient Collection
↓
DBHelper
↓
Pandas DataFrame
↓
Streamlit
↓
Patients Page
```

This is the typical architecture used in real Hospital Management Systems.

---

# Real-World Applications

Interactive data tables are commonly used in:

- Hospital Management Systems
- Electronic Health Records (EHR)
- Student Management Systems
- Banking Dashboards
- Inventory Management
- CRM Applications
- HR Management Systems
- Sales Reporting
- Logistics Platforms
- Government Portals

Nearly every enterprise application displays structured records using similar table components.

---

# Complete Classroom Code

```python
import pandas as pd
import streamlit as st

st.title("Patients")

patients = pd.DataFrame({

    "Patient ID":[101,102,103,104],

    "Name":[
        "Rahul",
        "Priya",
        "Aman",
        "Sneha"
    ],

    "Age":[24,31,45,28],

    "Disease":[
        "Fever",
        "Diabetes",
        "Hypertension",
        "Migraine"
    ]

})

st.dataframe(
    patients,
    use_container_width=True
)
```

---

# Day 19 Summary

Today's session combined two major topics:

### Regular Expressions

- Introduction to Regular Expressions
- Searching using `re.search()`
- Extracting data using `re.findall()`
- Input validation using `re.fullmatch()`
- Information extraction from unstructured text

### Streamlit & Agentic AI

- Multi-page Streamlit applications
- Home dashboard creation
- Interactive charts and metrics
- Agentic AI chat interface
- Google Gemma LLM integration
- Session State management
- Function Calling
- MongoDB integration
- Patient management page

Together, these concepts demonstrated how to build a simple **Agentic AI application** that combines a user-friendly interface, intelligent reasoning through an LLM, backend function execution, and structured data presentation.

---

> [!IMPORTANT]
> Day 19 marked the transition from learning individual Python concepts to building a complete **Agentic AI application**. By combining **Regular Expressions**, **Streamlit**, **Google Gemma**, **Function Calling**, **MongoDB**, and **Pandas**, the instructor demonstrated how modern AI systems integrate frontend interfaces, backend logic, databases, and Large Language Models into a single intelligent workflow. These concepts form the foundation for developing scalable AI-powered applications in healthcare, business automation, and enterprise software.

---


---

# 📝 Personal Reflection

Today's training session introduced me to one of the most practical areas of Python and AI application development—**Regular Expressions (Regex), Streamlit-based AI interfaces, and Function Calling with Large Language Models (LLMs)**. Unlike previous sessions that mainly focused on Python fundamentals and data structures, today's lecture emphasized how these concepts are applied while building intelligent applications. I realized that understanding regular expressions is essential for validating user inputs, extracting meaningful information from unstructured text, and automating repetitive text-processing tasks. These capabilities are widely used in web applications, backend services, data analysis, cybersecurity, and AI-powered systems.

One of the most interesting topics for me was **Regular Expressions**. Before this session, I considered searching text as a simple operation using Python strings. However, today's lecture demonstrated how Regex provides a much more powerful and flexible approach for pattern matching. I learned how different metacharacters, character classes, quantifiers, anchors, and predefined symbols can be combined to validate formats such as email addresses, phone numbers, PIN codes, and passwords. The practical demonstrations helped me understand how a single expression can replace multiple conditional statements, making programs shorter, cleaner, and easier to maintain.

The second major learning area was the development of an **AI-powered Streamlit application** integrated with the **Gemma Large Language Model**. Unlike traditional console-based Python programs, this application provided an interactive graphical interface where users could enter prompts and receive AI-generated responses. I observed how Streamlit simplifies the development of modern AI applications by providing ready-to-use components such as text inputs, buttons, chat interfaces, sidebars, and session state management. The instructor also demonstrated how multiple pages can be organized within a single application, improving project modularity and maintainability.

Another significant concept introduced today was **Function Calling**. Until now, I believed that language models only generated textual responses. Today's session changed that understanding by showing how an LLM can intelligently determine when to invoke predefined Python functions based on a user's query. This mechanism enables AI systems to interact with databases, perform calculations, retrieve patient records, generate reports, or execute backend logic without requiring users to manually specify each function. I realized that Function Calling is one of the core technologies behind modern AI agents and autonomous applications.

Overall, today's lecture strengthened my understanding of how Python programming, regular expressions, user interfaces, and artificial intelligence work together to build real-world software systems. The practical examples demonstrated that backend programming is no longer limited to writing algorithms—it also involves integrating AI models, handling structured and unstructured data, and designing intelligent workflows. These concepts will be extremely valuable while developing future projects such as AI assistants, healthcare management systems, intelligent chatbots, and automation platforms.

---

# 📌 Key Takeaways

- Learned the fundamentals of Regular Expressions (Regex).
- Understood the importance of pattern matching in Python.
- Explored commonly used Regex symbols and metacharacters.
- Practiced searching, extracting, and validating text using the `re` module.
- Learned how `re.search()`, `re.findall()`, and `re.fullmatch()` work.
- Understood the concept of information extraction from unstructured text.
- Learned how to develop multi-page applications using Streamlit.
- Explored Streamlit chat components for AI applications.
- Understood how Gemma integrates with Python applications.
- Learned the workflow of LLM Function Calling.
- Observed how AI agents invoke backend functions automatically.
- Understood the architecture of AI-powered healthcare applications.
- Learned how session management improves Streamlit applications.
- Recognized the importance of modular AI application development.
- Connected Regex, Streamlit, and LLMs to real-world software engineering.

---

# 📖 Revision Notes

Before the next training session, I should revise the following topics:

- Python `re` module
- Regular Expression syntax
- Character classes
- Quantifiers
- Anchors
- Escape characters
- `re.search()`
- `re.findall()`
- `re.fullmatch()`
- Information extraction
- Streamlit fundamentals
- Multi-page Streamlit applications
- Streamlit chat interface
- Session State
- AI Agent workflow
- Function Calling
- Gemma LLM integration
- Backend function execution
- MongoDB connectivity
- Python project architecture

---

# ❓ Interview Questions & Answers

## Q1. What is a Regular Expression?

**Answer:**
A Regular Expression (Regex) is a sequence of characters that defines a search pattern. It is used to search, validate, replace, and extract text from strings efficiently.

---

## Q2. Why are Regular Expressions used?

**Answer:**
Regular Expressions are used for pattern matching, validating user input, extracting information, searching text, replacing patterns, and preprocessing data in applications such as web development, AI, cybersecurity, and data analysis.

---

## Q3. What is the difference between `re.search()` and `re.findall()`?

**Answer:**

- `re.search()` returns the first matching occurrence.
- `re.findall()` returns a list containing every match found in the string.

---

## Q4. What does `re.fullmatch()` do?

**Answer:**

`re.fullmatch()` checks whether the **entire string** matches the given regular expression. If even one extra character exists, the match fails.

---

## Q5. What are metacharacters in Regular Expressions?

**Answer:**

Metacharacters are special symbols that provide additional meaning in Regex patterns, such as:

- `.`
- `*`
- `+`
- `?`
- `^`
- `$`
- `[]`
- `()`
- `{}`

They control pattern matching behavior rather than representing literal characters.

---

## Q6. Why is Regex important in Artificial Intelligence?

**Answer:**

Regex helps AI systems preprocess text by cleaning data, extracting entities, validating formats, filtering unwanted content, and preparing datasets before Natural Language Processing (NLP) tasks.

---

## Q7. What is Streamlit?

**Answer:**

Streamlit is an open-source Python framework used to build interactive web applications for Machine Learning and Artificial Intelligence without requiring frontend technologies like HTML, CSS, or JavaScript.

---

## Q8. Why is Session State used in Streamlit?

**Answer:**

Session State stores variables during a user's interaction with the application, allowing chat history, user preferences, and application data to persist between reruns.

---

## Q9. What is Function Calling in Large Language Models?

**Answer:**

Function Calling allows an LLM to identify when a user's request requires executing predefined backend functions instead of generating only text, enabling interaction with databases, APIs, and external services.

---

## Q10. What are AI Agents?

**Answer:**

AI Agents are intelligent software systems capable of understanding user requests, making decisions, invoking tools or functions, and completing tasks autonomously using Large Language Models.

---

## Q11. Why are Multi-page Streamlit applications useful?

**Answer:**

They organize applications into separate modules, making projects more scalable, maintainable, and easier to navigate.

---

## Q12. What is Information Extraction?

**Answer:**

Information Extraction is the process of identifying structured information such as names, phone numbers, dates, or email addresses from unstructured text using techniques like Regular Expressions.

---

## Q13. How does an LLM decide to call a function?

**Answer:**

The LLM analyzes the user's prompt, identifies whether a predefined function can satisfy the request, generates the appropriate function call with parameters, executes it, and uses the returned data to formulate its response.

---

## Q14. Give some real-world applications of Regex.

**Answer:**

- Email validation
- Phone number validation
- Password validation
- Log analysis
- Web scraping
- Search engines
- Data cleaning
- NLP preprocessing
- Cybersecurity
- Input validation

---

## Q15. How are Streamlit and LLMs used together?

**Answer:**

Streamlit provides the user interface, while the LLM processes user prompts, generates responses, invokes functions when required, and returns intelligent outputs, resulting in an interactive AI-powered application.

---

# 🎯 Goals for Next Session

- Strengthen my understanding of advanced Regular Expressions.
- Explore more Streamlit components and layouts.
- Learn advanced Function Calling workflows.
- Understand AI agent orchestration in greater detail.
- Practice integrating databases with AI applications.
- Improve modular project organization for larger applications.
- Continue building intelligent healthcare and automation projects using Python and LLMs.

---

# ✅ Today's Progress Checklist

- [x] Understood the fundamentals of Regular Expressions.
- [x] Practiced pattern matching using Python's `re` module.
- [x] Learned Regex search and extraction techniques.
- [x] Explored information extraction from text.
- [x] Developed understanding of Streamlit applications.
- [x] Learned multi-page Streamlit architecture.
- [x] Built AI chat interface concepts.
- [x] Understood Session State management.
- [x] Learned Gemma model integration.
- [x] Explored Function Calling architecture.
- [x] Understood backend function execution.
- [x] Studied AI Agent workflow.
- [x] Observed healthcare AI application architecture.
- [x] Improved understanding of practical AI software development.

---

> [!TIP]
> Today's session demonstrated how **Regular Expressions**, **Streamlit**, and **Large Language Models** complement each other in modern AI development. Regex enables efficient text processing, Streamlit simplifies user interface creation, and Function Calling allows LLMs to interact with backend systems intelligently. Together, these technologies form the foundation of many real-world AI applications, including chatbots, healthcare assistants, document processing systems, intelligent automation tools, and enterprise software solutions.

---

# 📋 Day 19 Completion Status

| Category | Status |
|----------|--------|
| Theory Covered | ✅ Completed |
| Practical Demonstrations | ✅ Completed |
| Classroom Code Studied | ✅ Completed |
| Regex Concepts | ✅ Completed |
| Information Extraction | ✅ Completed |
| Streamlit Development | ✅ Completed |
| Multi-page Applications | ✅ Completed |
| AI Chat Interface | ✅ Completed |
| Gemma Integration | ✅ Completed |
| Function Calling | ✅ Completed |
| Agent Workflow | ✅ Completed |
| Revision Notes Prepared | ✅ Completed |
| Interview Questions Prepared | ✅ Completed |
| Personal Reflection Written | ✅ Completed |
| Training Diary Updated | ✅ Completed |

---

### **Maintained By:** Saksham Kumar  
### **Training Program:** TRCS102 – Agentic AI Training  
### **Day:** 19  
### **Status:** ✅ Successfully Completed