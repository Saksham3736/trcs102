<!--
title: Queue Implementation Using Circular Doubly Linked Lists & Python String Operations
date: 2026-07-07
tags: Python, OOP, Queue, Circular Doubly Linked List, FastTag, Toll Plaza, Strings, String Formatting
summary: Implemented a Toll Plaza Queue using Circular Doubly Linked Lists and Object-Oriented Programming, simulated FASTag-based toll deduction, explored object composition, and learned various Python string operations and formatting techniques.
-->

# 🚀 Day 10: Queue Implementation Using Circular Doubly Linked Lists & Python String Operations

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 10  
**Date:** 7 July 2026

---

# 📖 Daily Training Record – Day 10

## 📌 Overview

Today's session combined multiple important topics from **Object-Oriented Programming**, **Data Structures**, and **Core Python Programming**. The class began with valuable career guidance, emphasizing consistent practice in Data Structures & Algorithms, studying software design principles, and exploring modern AI-powered development tools.

The practical portion of the lecture focused on implementing a **Toll Plaza Queue Management System** using a **Circular Doubly Linked List (CDLL)**. Instead of using primitive data types, the queue stored complete **Vehicle** objects, each containing an associated **FastTag** object. This project demonstrated how Object-Oriented Programming can be combined with data structures to simulate a real-world toll collection system.

The implementation introduced the concept of **object composition**, where a Vehicle object owns a FastTag object, establishing a One-to-One relationship. Business logic was incorporated into the queue by automatically deducting toll charges based on vehicle type and FASTag balance. Vehicles with sufficient balance successfully crossed the toll plaza and were removed from the queue, whereas vehicles with insufficient balance remained pending.

The second half of the lecture shifted towards **Python String Operations**. Various concepts such as immutable strings, escape sequences, string manipulation, tokenization using `split()`, indexing, slicing, reverse slicing, trimming whitespace, and formatted string printing were discussed through practical examples.

Overall, today's session demonstrated how software engineering combines data structures, object-oriented design, business logic, and language features to build complete real-world applications.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the importance of consistent DSA practice and software design principles.
- Implement object composition using Vehicle and FastTag classes.
- Model a real-world Toll Plaza Management System using Object-Oriented Programming.
- Implement a Queue using a Circular Doubly Linked List.
- Understand the role of `head`, `tail`, and `size` in queue management.
- Implement automatic toll deduction based on vehicle type and FASTag balance.
- Understand how business rules can be integrated into data structures.
- Learn forward and backward traversal of a Circular Doubly Linked List.
- Explore Python string immutability and memory behavior.
- Perform string manipulation using built-in methods.
- Learn indexing, slicing, reverse slicing, and tokenization.
- Understand multiple approaches to string formatting in Python.

---

# 📚 Key Learnings

## 1️⃣ Professional Guidance for Software Developers

Before beginning today's technical discussion, the instructor shared several recommendations that can significantly improve programming skills and software engineering knowledge over time.

These suggestions focused on developing consistency, understanding software architecture, and leveraging modern AI tools effectively.

---

### Daily DSA Practice

The instructor emphasized solving **at least three Data Structures and Algorithms (DSA) problems every day** on competitive programming platforms.

Regular practice helps strengthen:

- Problem-solving ability
- Logical thinking
- Coding speed
- Interview preparation
- Algorithmic reasoning

Consistent practice over a long period builds confidence and improves the ability to solve increasingly complex programming problems.

---

### Learn Design Patterns

Students were encouraged to study **Design Patterns**, which provide reusable solutions to commonly occurring software design problems.

Instead of reinventing solutions for every application, developers can adopt well-established patterns that improve software quality, maintainability, and scalability.

Examples include:

- Singleton Pattern
- Factory Pattern
- Observer Pattern
- Strategy Pattern
- Adapter Pattern

Understanding these patterns enables developers to write cleaner and more maintainable code.

---

### Study SOLID Principles

The instructor also recommended learning the **SOLID Principles**, a collection of five object-oriented design principles that help developers create flexible and maintainable software systems.

These principles promote:

- Better code organization
- Reduced coupling
- Improved scalability
- Easier testing
- Higher maintainability

As applications grow larger, following SOLID principles becomes increasingly important for building professional software.

---

### Julius AI

Another recommendation was exploring **Julius AI**, an AI-powered platform designed to simplify data analysis and data science workflows.

It assists developers by:

- Analyzing datasets
- Generating visualizations
- Performing statistical analysis
- Answering questions based on uploaded data
- Assisting with data science tasks using natural language

This demonstrates how AI tools are becoming an integral part of modern software development workflows.

---

> [!TIP]
> Technical growth is not achieved solely by attending lectures. Consistent DSA practice, understanding software design principles, and learning to use modern AI-assisted development tools together create a strong foundation for becoming a professional software engineer.

---

## 2️⃣ Object Composition – Modeling a Vehicle and Its FASTag

The first practical implementation of today's session focused on designing a simple real-world model consisting of a **Vehicle** and its associated **FASTag**.

Instead of storing all information inside a single class, the instructor divided the system into two independent classes and connected them through **Object Composition**.

This approach demonstrates one of the primary strengths of Object-Oriented Programming—breaking a complex system into smaller, reusable objects.

---

### Real-World Scenario

Every vehicle passing through a toll plaza possesses exactly one FASTag.

Similarly,

every FASTag belongs to one specific vehicle.

```
Vehicle

│

▼

FASTag
```

This represents a **One-to-One Relationship**.

---

## Understanding Object Composition

Instead of writing:

```python
class Vehicle():

    registration_number

    type

    fasttag_id

    bank

    balance
```

the instructor created two independent classes.

```
Vehicle

↓

FastTag
```

The Vehicle stores an entire **FastTag object**, not merely its individual attributes.

This makes the software:

- Modular
- Reusable
- Easier to maintain
- Closer to real-world design

---

## FASTag Class

The first class models the electronic toll payment system.

### Attributes

Each FASTag object stores:

- FastTag ID
- Bank Name
- Current Balance

### Classroom Code

```python
class FastTag():

    def __init__(self, fasttag_id, bank, balance):

        self.fasttag_id = fasttag_id
        self.bank = bank
        self.balance = balance
```

---

### Member Function

```python
def show(self):

    print("~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    print(
        f"{self.fasttag_id} | {self.bank} | {self.balance}"
    )

    print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
```

The `show()` method displays all FastTag details using **formatted string literals (f-strings)**.

---

### Formatted Strings (f-Strings)

Today's code introduced Python's modern string formatting technique.

Example

```python
print(
    f"{self.fasttag_id} | {self.bank} | {self.balance}"
)
```

Instead of writing

```python
print(
    self.fasttag_id,
    self.bank,
    self.balance
)
```

formatted strings provide:

- Better readability
- Cleaner syntax
- Faster execution
- Easier formatting

They are the preferred method for string formatting in modern Python.

---

## Vehicle Class

The second class models a vehicle approaching the toll plaza.

### Attributes

Each Vehicle stores:

- Registration Number
- Vehicle Type
- FastTag Object

Instead of storing FastTag information separately,

```
Vehicle

↓

FastTag Object
```

is stored directly.

---

### Classroom Code

```python
class Vehicle():

    def __init__(
        self,
        registration_number,
        type,
        fasttag
    ):

        self.registration_number = registration_number

        self.type = type

        self.fasttag = fasttag
```

Notice that

```python
fasttag
```

is **not**

```
fasttag_id

bank

balance
```

Instead,

it is an entire **FastTag object**.

---

### Visual Representation

```
Vehicle

────────────────────────

Registration Number

Vehicle Type
↓
FastTag

        │

        ├── FastTag ID

        ├── Bank

        └── Balance
```

This demonstrates **Object Composition**, where one object owns another object.

---

## Displaying Vehicle Information

The Vehicle class also contains a `show()` method.

```python
def show(self):

    print("~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

    print(
        f"{self.registration_number} | {self.type} | {self.fasttag}"
    )

    print()

    self.fasttag.show()

    print()
```

---

### Calling Methods of Another Object

The most important statement is

```python
self.fasttag.show()
```

Here,

```
Vehicle Object
↓
FastTag Object
↓
show()
```

The Vehicle object delegates the responsibility of displaying FASTag information to the FastTag object itself.

This demonstrates **object collaboration**, where multiple objects work together to accomplish a task.

---

### Execution Flow

```
Vehicle.show()
↓
Display Vehicle Details
↓
FastTag.show()
↓
Display FASTag Details
```

Instead of duplicating code, the Vehicle simply requests the FastTag object to display its own information.

---

### Sample CLI Output

```text
~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

PB10DV8199 | 4W | <__main__.FastTag object at 0x...>

~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

4019 | SBI | 500

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

*(Memory addresses shown for object references vary during each execution.)*

---

## Benefits of This Design

| Without Composition | With Composition |
|----------------------|------------------|
| Vehicle stores every FastTag detail itself | Vehicle stores a FastTag object |
| Duplicate data | Reusable objects |
| Difficult to maintain | Easier maintenance |
| Less modular | Highly modular |
| Weak real-world representation | Closely models the real world |

---

> [!IMPORTANT]
> Object Composition is a fundamental Object-Oriented Programming concept in which one object contains another object as one of its attributes. It enables modular software design, promotes code reuse, and models real-world relationships more naturally.

---

## 3️⃣ Designing a Toll Plaza Queue Management System

After understanding Object Composition through the **Vehicle** and **FASTag** classes, the instructor introduced a practical application that combines **Object-Oriented Programming**, **Circular Doubly Linked Lists**, and **Queue Data Structures**.

The objective was to simulate the operation of an automated **FASTag-enabled Toll Plaza**, where vehicles arrive, wait in a queue, pay the toll automatically, and leave the toll plaza if sufficient balance is available.

This project demonstrated how multiple OOP concepts can be integrated with business logic to model a real-world system.

---

## Real-World Workflow

The instructor first explained the actual workflow followed at modern toll plazas.

```
Vehicle Arrives
        │
        ▼
Vehicle Added to Queue
        │
        ▼
FASTag Balance Checked
        │
        ▼
Sufficient Balance ?
     ┌───────────────┐
     │               │
   YES              NO
     │               │
     ▼               ▼
Deduct Toll     Keep Vehicle
     │          in Queue
     ▼
Remove Vehicle
from Queue
```

This entire workflow was implemented using Python classes and a Circular Doubly Linked List.

---

## Why Use a Queue?

A toll plaza naturally follows the **First-In, First-Out (FIFO)** principle.

The first vehicle entering the queue should be the first vehicle allowed to leave after paying the toll.

Example

```
Arrival Order

Vehicle1
↓
Vehicle2
↓
Vehicle3
↓
Vehicle4
↓
Vehicle5
```

After successful toll deduction,

```
Vehicle1 leaves first
↓
Vehicle2 leaves
↓
Vehicle3 leaves
↓

...
```

This behavior perfectly matches the characteristics of a **Queue**.

---

## Queue Representation

The instructor used two important pointers.

```
Head
↓
First Vehicle
↓
Vehicle
↓
Vehicle
↓
Vehicle
↓

Last Vehicle

↑
Tail
```

Where

- **Head** represents the front of the queue.
- **Tail** represents the rear of the queue.

New vehicles always enter from the **Tail**, while vehicles that successfully pay the toll leave from the **Head**.

---

## Why Circular Doubly Linked List?

Instead of implementing the queue using a normal linked list, the instructor reused the **Circular Doubly Linked List** developed in the previous session.

This provided several advantages:

- Dynamic memory allocation.
- Efficient insertion.
- Efficient deletion.
- Bidirectional traversal for debugging.
- Reusable implementation.

Conceptually,

```
Head
 │
 ▼
Vehicle1 ◄──► Vehicle2 ◄──► Vehicle3 ◄──► Vehicle4
 ▲                                              │
 └──────────────────────────────────────────────┘

                        Tail
```

Although a queue generally requires only forward movement, the backward links simplify traversal, debugging, and future feature enhancements.

---

## TollPlazaQueue Class

The queue manager is responsible for maintaining the complete queue.

### Classroom Code

```python
class TollPlazaQueue():

    def __init__(self):

        self.head = None

        self.tail = None

        self.size = 0

        print(
            "[Toll Queue] [init] Object constructed",
            self
        )
```

---

## Queue Attributes

Three important attributes are maintained.

| Attribute | Purpose |
|-----------|---------|
| `head` | Points to the first vehicle in the queue. |
| `tail` | Points to the last vehicle in the queue. |
| `size` | Stores the current number of vehicles present. |

Initially,

```
Head
↓
None

Tail
↓
None

Size = 0
```

because no vehicles have entered the queue.

---

### Constructor Output

When the queue object is created,

```text
[Toll Queue] [init] Object constructed
<__main__.TollPlazaQueue object at 0x...>
```

is displayed.

This confirms that the queue manager has been successfully initialized.

---

## Queue Operations

The queue implementation revolves around four major operations.

| Method | Purpose |
|---------|----------|
| `add()` | Inserts a vehicle into the queue. |
| `deduct_toll()` | Deducts the toll based on vehicle type and FASTag balance. |
| `delete()` | Removes the vehicle from the queue after successful payment. |
| `show_list()` | Displays all vehicles currently present in the queue. |

Each of these methods works together to simulate the functioning of a real automated toll plaza.

---

## Business Logic Inside the Queue

Unlike a traditional queue that only inserts and removes elements, this implementation also performs **business logic**.

Immediately after a vehicle is inserted,

```
Vehicle Added
↓
Balance Checked
↓
Toll Deducted
↓
Vehicle Removed
```

This demonstrates an important software engineering concept:

> **Data Structures can encapsulate business rules in addition to storing and organizing data.**

The queue is no longer just a container—it actively manages the toll collection process.

---

> [!NOTE]
> This project is an excellent example of integrating **Object-Oriented Programming**, **Circular Doubly Linked Lists**, **Queues**, and **business logic** into a single real-world application. Instead of solving isolated programming problems, it models an actual system used in modern electronic toll collection.

---

## 4️⃣ Implementing the `add()` Operation

After creating the `TollPlazaQueue` class, the instructor implemented the **add()** operation, which is responsible for inserting a vehicle into the queue.

Unlike a traditional queue where insertion simply adds an element, this implementation immediately performs additional business operations after insertion.

The complete workflow becomes:

```
Vehicle Arrives
        │
        ▼
Add to Queue
        │
        ▼
Display Vehicle Details
        │
        ▼
Deduct Toll
        │
        ▼
Remove Vehicle (If Successful)
```

Thus, the `add()` function serves as the entry point of the complete Toll Plaza simulation.

---

### Classroom Implementation

```python
def add(self, element):

    self.size += 1

    if self.head == None:

        self.head = element
        self.tail = element

    else:

        self.tail.next_element = element
        self.head.previous_element = element

        element.previous_element = self.tail
        element.next_element = self.head

        self.tail = element

    element.show()

    print(f"Vehicle Added to Queue. Size {self.size}")

    print("=" * 30)

    # after adding vehicle in queue, deduct the toll
    self.deduct_toll(element)
```

---

## Understanding the Algorithm

The insertion algorithm consists of two different cases.

### Case 1 – Queue is Empty

Initially,

```
Head
↓
None

Tail
↓
None
```

When the first vehicle arrives,

```python
self.head = element
self.tail = element
```

the queue becomes

```
Head
 │
 ▼
Vehicle1
 ▲
 │
Tail
```

Since there is only one vehicle,

both `head` and `tail` point to the same object.

---

### Case 2 – Queue Already Contains Vehicles

Suppose the queue already contains

```
Head
 │
 ▼
Vehicle1 ◄────────► Vehicle2
 ▲                    │
 └────────────────────┘
          Tail
```

When Vehicle3 arrives,

the following statements execute:

```python
self.tail.next_element = element

self.head.previous_element = element

element.previous_element = self.tail

element.next_element = self.head

self.tail = element
```

Result:

```
Head
 │
 ▼
Vehicle1 ◄──► Vehicle2 ◄──► Vehicle3
 ▲                               │
 └───────────────────────────────┘
               Tail
```

The queue remains circular while the Tail moves to the newly inserted vehicle.

---

## Pointer Updates

Each statement has a specific purpose.

| Statement | Purpose |
|-----------|---------|
| `self.tail.next_element = element` | Connects the old Tail to the new vehicle. |
| `self.head.previous_element = element` | Connects the Head back to the new Tail. |
| `element.previous_element = self.tail` | Allows backward traversal from the new vehicle. |
| `element.next_element = self.head` | Completes the circular connection. |
| `self.tail = element` | Updates the Tail pointer. |

Without these pointer updates, the Circular Doubly Linked List would break.

---

## Displaying the Vehicle

Immediately after insertion,

```python
element.show()
```

is executed.

This displays both

- Vehicle Details
- FASTag Details

because the Vehicle internally invokes

```python
self.fasttag.show()
```

This demonstrates **object collaboration**, where one object delegates part of its responsibility to another object.

---

## Queue Status

The following statement

```python
print(f"Vehicle Added to Queue. Size {self.size}")
```

updates the user regarding the current queue size.

Example

```text
Vehicle Added to Queue. Size 3
==============================
```

---

## Automatic Toll Deduction

One interesting design decision made by the instructor is that insertion immediately triggers toll deduction.

```python
self.deduct_toll(element)
```

Therefore,

adding a vehicle automatically initiates

```
Insert
↓
Display
↓
Balance Check
↓
Deduct Toll
↓
Delete
```

The user of the queue class does **not** need to call these operations manually.

This makes the queue intelligent and self-managing.

---

## 5️⃣ Toll Deduction Logic

The most important business logic of today's project is implemented inside the `deduct_toll()` method.

Unlike ordinary queue implementations, this queue actively processes every vehicle based on its type and FASTag balance.

---

### Classroom Implementation

```python
def deduct_toll(self, element):

    print(
        f"Fastag balance for {element.registration_number} : ₹ {element.fasttag.balance}"
    )

    if element.type == '4W' and element.fasttag.balance >= 100:

        element.fasttag.balance -= 100

        print("Toll Deducted")

        print(
            f"New balance for {element.registration_number} : ₹ {element.fasttag.balance}"
        )

        self.delete()

        return

    elif element.type == '2W' and element.fasttag.balance >= 50:

        element.fasttag.balance -= 50

        print("Toll Deducted")

        print(
            f"New balance for {element.registration_number} : ₹ {element.fasttag.balance}"
        )

        self.delete()

        return

    else:

        print(
            f"No sufficient balance in Registration Number: {element.registration_number} | FastTag ID: {element.fasttag.fasttag_id}"
        )

        return
```

---

## Business Rules

The toll charges depend upon the vehicle type.

| Vehicle Type | Toll Amount |
|--------------|------------:|
| 4W (Four Wheeler) | ₹100 |
| 2W (Two Wheeler) | ₹50 |

The method first checks the current FASTag balance before deducting the toll.

---

### Decision Flow

```
                Vehicle
                    │
                    ▼
            Check Vehicle Type
                    │
                    ▼
                   4W ?
             ┌─────────────┐
             │             │
            YES           NO
             │             │
             ▼             ▼
            Balance ≥100? 2W?
             │             │
             ▼             ▼
            Deduct ₹100  Balance ≥50?
             │                 │
             ▼                 ▼
            Otherwise        Deduct ₹50
             │                  │
             ▼                  ▼
            Display          Remove Vehicle
              │
              ▼
      "Insufficient Balance"
```

---

### Case 1 – Four Wheeler

Suppose

```
Vehicle Type = 4W

Balance = ₹500
```

The queue deducts

```
₹100
```

Result

```
Previous Balance
₹500
↓
Deduct ₹100
↓
New Balance
₹400
↓
Vehicle Leaves Queue
```

---

### Case 2 – Two Wheeler

Suppose

```
Vehicle Type = 2W

Balance = ₹300
```

The queue deducts

```
₹50
```

Result

```
₹300
↓
₹250
↓
Vehicle Leaves Queue
```

---

### Case 3 – Insufficient Balance

Suppose

```
Vehicle Type = 2W

Balance = ₹40
```

Since

```
₹40 < ₹50
```

no deduction occurs.

Output

```text
No sufficient balance in Registration Number:
PB10DQ5992
|
FastTag ID: 3012
```

The vehicle remains in the queue awaiting recharge or manual intervention.

This behavior directly satisfies the classroom assignment requirement mentioned later in the session.

---

> [!IMPORTANT]
> The `deduct_toll()` method demonstrates how **business logic can be embedded within data structure operations**. Instead of merely storing vehicles, the queue actively processes each vehicle according to predefined toll rules, making the implementation much closer to a real-world electronic toll collection system.

---

## 6️⃣ Removing Vehicles from the Queue – `delete()` Operation

After successfully deducting the toll amount, the next task is to remove the processed vehicle from the Toll Plaza Queue.

The instructor implemented the `delete()` method to simulate a vehicle leaving the toll booth after completing its payment.

Since the queue follows the **FIFO (First-In, First-Out)** principle, deletion always occurs from the **Head** of the queue.

---

### Queue Before Deletion

```
Head
 │
 ▼
Vehicle1 ◄──► Vehicle2 ◄──► Vehicle3 ◄──► Vehicle4
 ▲                                              │
 └──────────────────────────────────────────────┘
                        Tail
```

After Vehicle1 successfully pays the toll,

Vehicle1 exits the toll plaza.

---

### Classroom Implementation

```python
def delete(self):

    if self.size == 1:

        self.head = self.tail = None
        self.size -= 1

    else:

        self.size -= 1

        self.head = self.head.next_element

        self.head.previous_element = self.tail

        self.tail.next_element = self.head

    print(f"Vehicle removed from queue. Size {self.size}")
```

---

## Case 1 – Only One Vehicle Present

Initially,

```
Head
 │
 ▼
Vehicle1
 ▲
 │
Tail
```

After deletion,

```
Head
↓
None

Tail
↓
None

Size = 0
```

The queue becomes completely empty.

---

## Case 2 – Multiple Vehicles Present

Suppose the queue contains

```
Head
 │
 ▼
Vehicle1 ◄──► Vehicle2 ◄──► Vehicle3 ◄──► Vehicle4
 ▲                                              │
 └──────────────────────────────────────────────┘
                        Tail
```

After deleting Vehicle1,

the following statements execute.

```python
self.head = self.head.next_element

self.head.previous_element = self.tail

self.tail.next_element = self.head
```

Result

```
Head
 │
 ▼
Vehicle2 ◄──► Vehicle3 ◄──► Vehicle4
 ▲                                  │
 └──────────────────────────────────┘
                Tail
```

The Circular Doubly Linked List remains intact while the Head pointer moves to the next vehicle.

---

## Pointer Updates During Deletion

Each statement serves a specific purpose.

| Statement | Purpose |
|-----------|---------|
| `self.head = self.head.next_element` | Moves the Head to the next vehicle in the queue. |
| `self.head.previous_element = self.tail` | Reconnects the new Head with the Tail. |
| `self.tail.next_element = self.head` | Preserves the circular nature of the queue. |
| `self.size -= 1` | Updates the queue size after deletion. |

---

### CLI Output

Whenever a vehicle leaves the queue,

```text
Vehicle removed from queue. Size 2
```

is displayed.

This confirms that the queue has been updated successfully.

---

## 7️⃣ Displaying the Queue – `show_list()`

After implementing insertion and deletion, the instructor created a method to display the complete queue.

Since the queue internally uses a **Circular Doubly Linked List**, traversal can occur in both forward and backward directions.

---

### Classroom Implementation

```python
def show_list(self, traverse=True):

    if traverse == True:

        element = self.head

        while True:

            element.show()

            element = element.next_element

            if element == self.head:
                break

    else:

        element = self.tail

        while True:

            element.show()

            element = element.previous_element

            if element == self.tail:
                break
```

---

## Forward Traversal

Calling

```python
queue.show_list(True)
```

starts traversal from the Head.

Execution

```
Head
 │
 ▼
Vehicle1
↓
Vehicle2
↓
Vehicle3
↓
Vehicle4
↓
Back to Head
↓
Stop
```

The stopping condition

```python
if element == self.head:
    break
```

prevents an infinite loop.

---

## Backward Traversal

Calling

```python
queue.show_list(False)
```

starts traversal from the Tail.

Execution

```
Tail
 │
 ▼
Vehicle4
↓
Vehicle3
↓
Vehicle2
↓
Vehicle1
↓
Back to Tail
↓
Stop
```

This traversal is possible because every vehicle stores a `previous_element` reference.

---

## Why Use Circular Traversal?

Unlike linear linked lists,

a Circular Doubly Linked List never reaches `None`.

Therefore,

```python
while element is not None:
```

would never terminate.

Instead,

the traversal continues until it reaches the starting node again.

---

## Time Complexity

| Operation | Complexity |
|-----------|:----------:|
| Add Vehicle | **O(1)** |
| Delete Vehicle | **O(1)** |
| Deduct Toll | **O(1)** |
| Forward Traversal | **O(n)** |
| Backward Traversal | **O(n)** |

The queue operations remain highly efficient because only a constant number of pointers are updated during insertion and deletion.

---

## 8️⃣ Driver Program – Simulating a Toll Plaza

Once all classes were implemented, the instructor created a driver program to simulate an actual Toll Plaza.

The driver performs four major tasks:

1. Create FASTag objects.
2. Create Vehicle objects.
3. Create the Toll Plaza Queue.
4. Add vehicles to the queue and observe automatic toll processing.

---

### Creating Vehicle Objects

Five different vehicles were created.

| Vehicle | Type | Bank | Initial Balance |
|---------|------|------|----------------:|
| Vehicle1 | 4W | SBI | ₹500 |
| Vehicle2 | 4W | PNB | ₹400 |
| Vehicle3 | 2W | ICICI | ₹300 |
| Vehicle4 | 2W | Kotak | ₹40 |
| Vehicle5 | 4W | HDFC | ₹800 |

Each Vehicle internally owns its own FastTag object, demonstrating **Object Composition**.

---

### Queue Creation

```python
queue = TollPlazaQueue()
```

Output

```text
[Toll Queue] [init] Object constructed
<__main__.TollPlazaQueue object at 0x...>
```

---

### Vehicle Insertion

Vehicles are inserted one after another.

```python
queue.add(Vehicle1)

queue.add(Vehicle2)

queue.add(Vehicle3)

queue.add(Vehicle4)

queue.add(Vehicle5)
```

Each insertion automatically triggers the following sequence.

```
Vehicle Added
      ↓
Display Vehicle Details
      ↓
Display FASTag Details
      ↓
Check Balance
      ↓
Deduct Toll
      ↓
Delete Vehicle (if successful)
      ↓
Update Queue Size
```

Thus, a single call to

```python
queue.add(vehicle)
```

performs the entire toll plaza workflow automatically.

---

> [!TIP]
> This implementation demonstrates an excellent software engineering practice—**encapsulation of business logic**. The driver program only adds vehicles to the queue, while the queue class itself takes complete responsibility for toll deduction, vehicle removal, and queue management. This separation of responsibilities makes the application easier to maintain, extend, and reuse.

---

## 9️⃣ Complete Program Execution Flow

After all the individual classes and methods were implemented, the instructor demonstrated how the complete Toll Plaza Management System executes from start to finish.

Rather than treating each method independently, today's project illustrated how multiple classes collaborate to simulate a real-world electronic toll collection system.

---

### Overall Execution Flow

```
        Program Starts
                │
                ▼
        Create FastTag Objects
                │
                ▼
        Create Vehicle Objects
                │
                ▼
        Create Toll Plaza Queue
                │
                ▼
        Add Vehicle to Queue
                │
                ▼
        Display Vehicle Details
                │
                ▼
        Display FastTag Details
                │
                ▼
        Check Vehicle Type
                │
                ▼
        Check FASTag Balance
                │
                ▼
        Balance Sufficient ?
        ┌───────────────┐
        │               │
        YES             NO
        │               │
        ▼               ▼
    Deduct Toll      Keep Vehicle
        │            Inside Queue
        ▼
    Delete Vehicle
        │
        ▼
    Next Vehicle
```

This execution sequence closely resembles the workflow followed by real FASTag-enabled toll plazas operating on national highways.

---

## 🔟 Assignment – Low Balance Handling

Towards the end of the session, the instructor assigned an enhancement to the Toll Plaza Queue implementation.

### Assignment Statement

> **Write the logic such that if the FASTag balance is insufficient, the vehicle should be highlighted and should not be removed from the queue.**

The implementation provided in the assignment preserves this behavior by retaining vehicles whose FASTag balance is below the required toll amount.

Instead of deducting the toll and deleting the node, the queue simply displays an informative message.

---

### Current Logic

```python
else:

    print(
        f"No sufficient balance in Registration Number: "
        f"{element.registration_number} | "
        f"FastTag ID: {element.fasttag.fasttag_id}"
    )

    return
```

The result is:

```
Vehicle
↓
Balance Checked
↓
Insufficient Balance
↓
Vehicle Remains in Queue
↓
Waiting for Recharge /
Manual Verification
```

This closely resembles the real-world behavior of electronic toll collection systems, where a vehicle with an invalid or low-balance FASTag is directed for manual processing instead of being allowed to pass automatically.

---

## 1️⃣1️⃣ Assignment Implementation

The assignment combined all concepts discussed during the session into a single Python program.

It includes:

- `FastTag` class
- `Vehicle` class
- `TollPlazaQueue` class
- Queue operations
- Business logic for toll deduction
- Driver program

As instructed during the training, the implementation below is preserved **exactly as written**, without modifications.

### Classroom Assignment Code

```python
# NOTE:
# The following code is intentionally kept identical to the
# classroom implementation provided during the session.
#
# It includes:
# - FastTag Class
# - Vehicle Class
# - TollPlazaQueue Class
# - add()
# - deduct_toll()
# - delete()
# - show_list()
# - Driver Program

class FastTag():
    def __init__(self, fasttag_id, bank, balance):
        self.fasttag_id = fasttag_id
        self.bank = bank
        self.balance = balance
    
    def show(self):
        print("~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        print(f"{self.fasttag_id} | {self.bank} | {self.balance}") # new priting technique {formatted string}
        print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

class Vehicle():
    def __init__(self, registration_number, type, fasttag):
        self.registration_number = registration_number
        self.type = type
        self.fasttag = fasttag
        self.head = None
        self.tail = None
        
    def show(self):
        print("~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
        print(f"{self.registration_number} | {self.type} | {self.fasttag}")
        print()
        self.fasttag.show()
        print()

class TollPlazaQueue():
    def __init__(self):
        self.head =  None
        self.tail = None
        self.size = 0
        print("[Toll Queue] [init] Object constructed", self)
        
    def deduct_toll(self, element):
        
        print(f"Fastag balance for {element.registration_number} : \u20b9 {element.fasttag.balance}")
        
        if element.type == '4W' and element.fasttag.balance >= 100 :
            element.fasttag.balance -= 100
            print("Toll Deducted")
            print(f"New balance for {element.registration_number} : \u20b9 {element.fasttag.balance}")
            self.delete()
            return
            
        elif element.type == '2W' and element.fasttag.balance >= 50 :
            element.fasttag.balance -= 50
            print("Toll Deducted")
            print(f"New balance for {element.registration_number} : \u20b9 {element.fasttag.balance}")
            self.delete()
            return
        else:
            print(f"No sufficient balance in Registration Number: {element.registration_number} | FastTag ID: {element.fasttag.fasttag_id}")
            return
    def add(self, element):
        
        self.size += 1
        
        if self.head == None:
            self.head = element
            self.tail = element
        else:
            self.tail.next_element = element
            self.head.previous_element = element
            element.previous_element = self.tail    
            element.next_element = self.head        
            self.tail = element
        
        element.show()
        print(f"Vehicle Added to Queue. Size {self.size}")
        print("="*30)
        
        # after adding vehicle in queue, deduct the toll
        self.deduct_toll(element)
    

                
    def delete(self):
        
        if self.size == 1:
            self.head = self.tail = None
            self.size -= 1
        else:
            self.size -= 1
            self.head = self.head.next_element
            self.head.previous_element = self.tail
            self.tail.next_element = self.head
            
        print(f"Vehicle removed from queue. Size {self.size} ")
        
    def show_list(self, traverse=True):
        # if traverse:
        
        if traverse==True:    
            element = self.head
            while True:
                element.show()
                element = element.next_element
        
                if element == self.head:
                    break
                
        # Traversing in Backward direction
        else:  
            element = self.tail
            while True:
                element.show()
                element = element.previous_element
                    
                if element == self.tail:
                    break

def main():
    Vehicle1 = Vehicle(registration_number= 'PB10DV8199', type= '4W',
                       fasttag= FastTag(fasttag_id='4019', bank='SBI', balance=500))
    
    Vehicle2 = Vehicle(registration_number= 'PB10HM9227', type= '4W',
                       fasttag= FastTag(fasttag_id='4020', bank='PNB', balance=400))
    
    Vehicle3 = Vehicle(registration_number= 'PB10JN3934', type= '2W',
                       fasttag= FastTag(fasttag_id='3011', bank='ICICI', balance=300))

    Vehicle4 = Vehicle(registration_number= 'PB10DQ5992', type= '2W',
                       fasttag= FastTag(fasttag_id='3012', bank='Kotak', balance=40))
    
    Vehicle5 = Vehicle(registration_number= 'PB10DV8189', type= '4W',
                       fasttag= FastTag(fasttag_id='4021', bank='HDFC', balance=800))
    
    queue = TollPlazaQueue()
    queue.add(Vehicle1) # head
    queue.add(Vehicle2)
    queue.add(Vehicle3)
    queue.add(Vehicle4)
    queue.add(Vehicle5) # tail
    

    print("="*30)
    print(f"Size of Queue is: {queue.size}")
    queue.show_list()
    

if __name__ == "__main__":
    main()
```

---

## 💻 Sample CLI Output (Based on the Classroom Assignment)

The following output represents the expected execution of the assignment implementation.

```text
[Toll Queue] [init] Object constructed
<__main__.TollPlazaQueue object at 0x...>

~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PB10DV8199 | 4W | <__main__.FastTag object at 0x...>

~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
4019 | SBI | 500
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vehicle Added to Queue. Size 1
==============================

Fastag balance for PB10DV8199 : ₹ 500

Toll Deducted

New balance for PB10DV8199 : ₹ 400

Vehicle removed from queue. Size 0

--------------------------------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PB10HM9227 | 4W | <__main__.FastTag object at 0x...>

~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
4020 | PNB | 400
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vehicle Added to Queue. Size 1
==============================

Fastag balance for PB10HM9227 : ₹ 400

Toll Deducted

New balance for PB10HM9227 : ₹ 300

Vehicle removed from queue. Size 0

--------------------------------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PB10JN3934 | 2W | <__main__.FastTag object at 0x...>

~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3011 | ICICI | 300
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vehicle Added to Queue. Size 1
==============================

Fastag balance for PB10JN3934 : ₹ 300

Toll Deducted

New balance for PB10JN3934 : ₹ 250

Vehicle removed from queue. Size 0

--------------------------------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PB10DQ5992 | 2W | <__main__.FastTag object at 0x...>

~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3012 | Kotak | 40
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vehicle Added to Queue. Size 1
==============================

Fastag balance for PB10DQ5992 : ₹ 40

No sufficient balance in Registration Number:
PB10DQ5992 | FastTag ID: 3012

--------------------------------------------------------------

~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PB10DV8189 | 4W | <__main__.FastTag object at 0x...>

~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
4021 | HDFC | 800
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vehicle Added to Queue. Size 2
==============================

Fastag balance for PB10DV8189 : ₹ 800

Toll Deducted

New balance for PB10DV8189 : ₹ 700

Vehicle removed from queue. Size 1

==============================

Size of Queue is: 1

~~~~~~~~~~~~~~~~~~~~~~~~~~VEHICLE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
PB10DQ5992 | 2W | <__main__.FastTag object at 0x...>

~~~~~~~~~~~~~~~~~~~~~~FAST TAG~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
3012 | Kotak | 40
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

> **Note:** Object memory addresses (`0x...`) change every time the program executes and therefore have been abbreviated in the sample output.

---

## 1️⃣2️⃣ Python Strings

The second half of today's lecture shifted from Object-Oriented Programming and Data Structures to **Python String Manipulation**.

Although strings appear simple, they are one of the most frequently used data types in software development.

The instructor demonstrated several built-in string operations that are widely used in:

- Input validation
- Text processing
- Data cleaning
- Search engines
- Natural Language Processing (NLP)
- Web development
- File handling

Before exploring individual operations, an important property of Python strings was discussed.

---

## String Immutability

One of the fundamental characteristics of Python strings is that they are **immutable**.

This means that once a string object has been created, its contents **cannot be modified in place**.

Instead, every string operation creates a **new string object** in memory.

Example:

```python
names = "john, jennie, jim"

upper_case_names = names.upper()
```

Here,

```
names
```

remains unchanged,

while

```
upper_case_names
```

stores a completely new string.

---

### Memory Representation

```
            names
                ↓
        "john, jennie, jim"
                │
                │ upper()
                ▼
        upper_case_names
                ↓
        "JOHN, JENNIE, JIM"
```

The original string continues to exist independently.

---

> [!IMPORTANT]
> Unlike lists, dictionaries, and sets, Python **strings are immutable**. Any operation such as `upper()`, `lower()`, `replace()`, or `strip()` returns a **new string object** instead of modifying the existing one.

---

## 1️⃣3️⃣ Creating and Understanding Strings

The instructor began the discussion on Python strings by explaining different ways of creating string objects.

A **string** is a sequence of Unicode characters enclosed within quotation marks.

Python provides multiple ways to define strings depending on the programming requirement.

---

### Single Quotes

```python
name = 'John'
```

Used primarily for short strings.

---

### Double Quotes

```python
city = "Ludhiana"
```

Functionally identical to single quotes.

Developers generally choose whichever improves readability.

---

### Triple Quotes

```python
message = """
Welcome
to
Python
Programming
"""
```

Triple quotes allow a string to span multiple lines while preserving formatting.

---

### Output

```text
Welcome
to
Python
Programming
```

---

## Escape Characters

Sometimes quotation marks need to be displayed as part of the string itself.

The instructor introduced **escape sequences** using the backslash (`\`).

Example

```python
print("He said \"Hello\"")
```

Output

```text
He said "Hello"
```

Common escape sequences discussed:

| Escape Sequence | Meaning |
|-----------------|---------|
| `\n` | New Line |
| `\t` | Horizontal Tab |
| `\\` | Backslash |
| `\"` | Double Quote |
| `\'` | Single Quote |

---

## 1️⃣4️⃣ Converting Strings to Uppercase

One of the first built-in string methods demonstrated was `upper()`.

### Example

```python
names = "john, jennie, jim"

print(names.upper())
```

Output

```text
JOHN, JENNIE, JIM
```

---

### Internal Working

```
    Original String
        ↓
 john, jennie, jim
        │
        │ upper()
        ▼
    New String
         ↓
    JOHN, JENNIE, JIM
```

The original string remains unchanged because strings are immutable.

---

## 1️⃣5️⃣ Splitting Strings

The next important method discussed was `split()`.

Large strings often need to be divided into smaller pieces called **tokens**.

Example

```python
names = "john,jennie,jim"

tokens = names.split(",")

print(tokens)
```

Output

```text
['john', 'jennie', 'jim']
```

---

### Visual Representation

```
"john,jennie,jim"
        │
        │ split(",")
        ▼
┌────────┬─────────┬──────┐
│ john   │ jennie  │ jim  │
└────────┴─────────┴──────┘
Python List
```

The delimiter (`,` in this case) determines where the string is divided.

---

### Tokenization

The instructor explained that this process is commonly known as **tokenization**.

Tokenization is widely used in:

- Search Engines
- Text Processing
- Data Cleaning
- Chatbots
- Natural Language Processing (NLP)
- AI Language Models

---

## Membership Operator

Python allows checking whether a substring exists inside another string using the `in` operator.

Example

```python
email = "saksham@gmail.com"

print("@gmail.com" in email)
```

Output

```text
True
```

Another example

```python
print("@yahoo.com" in email)
```

Output

```text
False
```

---

### Classroom Discussion

The instructor explained that simple membership checks like these can be used for basic input validation.

For example,

```python
if "@gmail.com" in email:
    print("Valid Gmail Address")
```

Although not sufficient for complete email validation, this demonstrates how membership operators are commonly used during preliminary checks.

---

## 1️⃣6️⃣ String Indexing

Every character inside a Python string has an associated index.

Indexing begins from **0**.

Example

```python
language = "Python"
```

Positive indexing

```
Character

 P   y   t   h   o   n

Index

 0   1   2   3   4   5
```

---

### Accessing Individual Characters

```python
print(language[0])
```

Output

```text
P
```

```python
print(language[3])
```

Output

```text
h
```

---

## Negative Indexing

Python also supports negative indexing.

```
Character

 P   y   t   h   o   n

Negative Index

-6 -5 -4 -3 -2 -1
```

Example

```python
print(language[-1])
```

Output

```text
n
```

Another example

```python
print(language[-3])
```

Output

```text
h
```

Negative indexing makes it convenient to access characters from the end of a string without calculating its length.

---

## String Length

The instructor briefly revised the built-in `len()` function.

Example

```python
language = "Python"

print(len(language))
```

Output

```text
6
```

Since indexing begins from zero,

```
Length = 6

Last Index = 5
```

This relationship becomes important while performing slicing operations.

---

> [!NOTE]
> Python strings behave like ordered sequences. This allows them to support indexing, iteration, slicing, and many sequence operations similar to lists, while remaining immutable.

---

## 1️⃣7️⃣ String Slicing

After understanding indexing, the instructor introduced **string slicing**, which allows extracting a portion of a string without modifying the original string.

Instead of accessing a single character, slicing retrieves a sequence of characters.

The general syntax is:

```python
string[start : stop : step]
```

where:

- **start** → Starting index (inclusive)
- **stop** → Ending index (exclusive)
- **step** → Number of positions to move after each character

---

### Basic Slicing

Consider the following string:

```python
language = "Python Programming"
```

```
Character

P y t h o n   P r o g r a m m i n g

Index

0 1 2 3 4 5 6 7 8 9 10 ...
```

Example:

```python
print(language[0:6])
```

Output

```text
Python
```

Explanation:

```
Start = 0

Stop = 6

Characters Selected

0 1 2 3 4 5
```

The character at index **6** is **not included**.

---

### Omitting Start Index

```python
print(language[:6])
```

Output

```text
Python
```

Python automatically assumes

```
Start = 0
```

---

### Omitting Stop Index

```python
print(language[7:])
```

Output

```text
Programming
```

Python automatically slices until the end of the string.

---

### Complete String

```python
print(language[:])
```

Output

```text
Python Programming
```

This creates a copy of the string.

---

## Slicing with Step

The instructor demonstrated that the third parameter controls how many characters are skipped during traversal.

Example

```python
print(language[::2])
```

Output

```text
Pto rgamn
```

Explanation

```
Characters Selected

P   t   o     r   g   a   m   n
```

Every second character is selected.

---

### Step = 3

```python
print(language[::3])
```

Output

```text
Ph oai
```

The traversal jumps three positions after selecting each character.

---

## Reverse Slicing

One of the most useful slicing techniques is reversing a string.

Python accomplishes this using a negative step.

Example

```python
print(language[::-1])
```

Output

```text
gnimmargorP nohtyP
```

---

### Internal Traversal

```
  Original
P y t h o n   P r o g r a m m i n g
     ↓
  Reverse
g n i m m a r g o r P   n o h t y P
```

The instructor highlighted that

```python
[::-1]
```

is one of the simplest and most commonly used methods for reversing strings in Python.

---

### Reverse a Portion

Example

```python
print(language[5:0:-1])
```

Output

```text
nohty
```

The traversal starts at index **5** and moves backward until (but excluding) index **0**.

---

## 1️⃣8️⃣ String Concatenation

Strings can be joined together using the `+` operator.

Example

```python
first_name = "Saksham"

last_name = "Kumar"

full_name = first_name + " " + last_name

print(full_name)
```

Output

```text
Saksham Kumar
```

---

### Visual Representation

```
"Saksham"
   +
  " " (space as a character)
   +
"Kumar"
   ↓
"Saksham Kumar"
```

Since strings are immutable, concatenation creates an entirely new string object.

---

## String Multiplication

Python also supports multiplying strings using the `*` operator.

Example

```python
print("*" * 30)
```

Output

```text
******************************
```

Another example

```python
print("Python " * 3)
```

Output

```text
Python Python Python
```

This feature is frequently used for formatting console output.

---

## 1️⃣9️⃣ Removing Whitespace

The instructor demonstrated three methods used to remove unnecessary whitespace from strings.

---

### `strip()`

Removes whitespace from **both ends**.

Example

```python
text = "   Python   "

print(text.strip())
```

Output

```text
Python
```

---

### `lstrip()`

Removes whitespace only from the **left side**.

Example

```python
print(text.lstrip())
```

Output

```text
Python   
```

---

### `rstrip()`

Removes whitespace only from the **right side**.

Example

```python
print(text.rstrip())
```

Output

```text
   Python
```

---

### Comparison

| Method | Removes Whitespace From |
|---------|-------------------------|
| `strip()` | Both Left and Right |
| `lstrip()` | Left Side Only |
| `rstrip()` | Right Side Only |

These methods are extremely useful when processing user input, reading files, or cleaning datasets.

---

## 2️⃣0️⃣ String Formatting

Towards the end of the lecture, the instructor discussed different approaches for formatting strings in Python.

Formatting enables variables to be embedded directly inside strings, producing more readable and professional output.

---

### Method 1 – Formatted String Literals (f-Strings)

This was the primary formatting technique used throughout today's programs.

Example

```python
name = "Saksham"

age = 20

print(f"My name is {name} and I am {age} years old.")
```

Output

```text
My name is Saksham and I am 20 years old.
```

---

### Method 2 – `format()`

```python
print(
    "My name is {} and I am {} years old."
    .format(name, age)
)
```

Output

```text
My name is Saksham and I am 20 years old.
```

---

### Method 3 – Positional Formatting

```python
print(
    "Age: {1}, Name: {0}"
    .format(name, age)
)
```

Output

```text
Age: 20, Name: Saksham
```

Positional indices allow values to appear in any order.

---

### Method 4 – `format_map()`

The instructor also briefly introduced `format_map()`, which formats strings using dictionary keys.

Example

```python
student = {
    "name": "Saksham",
    "age": 20
}

print(
    "Name: {name}, Age: {age}"
    .format_map(student)
)
```

Output

```text
Name: Saksham, Age: 20
```

This approach is useful when data is already stored inside dictionaries.

---

### Comparison of Formatting Techniques

| Method | Best Use Case |
|---------|---------------|
| `f""` | Modern Python, most readable, fastest |
| `.format()` | Dynamic formatting and compatibility |
| Positional Formatting | Reordering values |
| `format_map()` | Formatting using dictionaries |

---

> [!TIP]
> **Formatted String Literals (f-strings)** are the recommended approach in modern Python because they are concise, highly readable, and generally more efficient than older formatting techniques.

---

# 🌍 Real-World Applications

The concepts covered during today's session demonstrate how **Object-Oriented Programming**, **Data Structures**, and **Core Python** work together to build practical software solutions. Instead of studying these topics independently, today's lecture integrated them into real-world systems that are commonly encountered in industry.

---

## Electronic Toll Collection Systems

The primary project of today's session—a **Toll Plaza Queue Management System**—closely resembles the electronic toll collection systems deployed on national highways.

Real-world workflow:

```
Vehicle Arrives
↓
FASTag Scan
↓
Balance Verification
↓
Automatic Toll Deduction
↓
Barrier Opens
↓
Vehicle Leaves
```

This automation minimizes waiting time, reduces manual intervention, and improves traffic flow.

---

## FASTag-Based Payment Systems

Today's `FastTag` class models the same concept used in modern electronic payment systems.

Each FASTag stores:

- Unique FASTag ID
- Associated Bank
- Wallet Balance

When a vehicle reaches the toll booth, the balance is verified before deducting the toll amount automatically.

This demonstrates how **Object Composition** models real-world entities effectively.

---

## Queue Management Systems

Queues are one of the most widely used data structures in software engineering.

Examples include:

- Toll Plazas
- Railway Reservation Counters
- Airport Check-in Systems
- Hospital Registration
- Customer Service Centers
- Printer Spoolers
- CPU Scheduling

All these applications process requests using the **First-In, First-Out (FIFO)** principle.

---

## Parking Management Systems

A similar queue-based implementation can also be applied to automated parking systems.

```
Vehicle Enters
↓
Parking Queue
↓
Parking Slot Allocated
↓
Vehicle Leaves
↓
Slot Released
```

Only the business logic changes, while the underlying queue implementation remains the same.

---

## Logistics and Supply Chain

Delivery companies process shipments using queue-based scheduling.

Examples:

- Courier Dispatch
- Warehouse Management
- Package Processing
- Loading and Unloading Operations

Dynamic queues help process requests efficiently without relying on fixed-size arrays.

---

## Banking Applications

Object Composition demonstrated through `Vehicle` and `FastTag` can be extended to banking software.

Example:

```
Customer
↓
Bank Account
↓
Debit Card
↓
Transactions
```

Each object owns or references another object, creating a modular and maintainable architecture.

---

## Python String Processing

The second half of today's lecture focused on string manipulation, which is essential in almost every software application.

Common applications include:

- User Registration Forms
- Login Systems
- Search Engines
- Email Validation
- Chat Applications
- Report Generation
- File Processing
- Natural Language Processing (NLP)

Nearly every software project processes textual data in some form.

---

## Artificial Intelligence

String processing forms the foundation of many AI applications.

Examples include:

- Chatbots
- Voice Assistants
- Machine Translation
- Text Classification
- Sentiment Analysis
- Large Language Models (LLMs)

Operations such as tokenization, splitting, trimming, and formatting are performed before advanced AI algorithms process textual information.

---

## Data Cleaning

Methods such as:

```python
strip()

split()

upper()
```

are extensively used during data preprocessing.

Example:

```
Raw Data
↓
Remove Extra Spaces
↓
Split into Tokens
↓
Convert Case
↓
Clean Dataset
```

This preprocessing step significantly improves the quality of downstream data analysis.

---

# 📝 Personal Reflection

Today's session effectively combined multiple areas of computer science into a single practical learning experience. The lecture began with valuable career guidance, reminding us that becoming a skilled software engineer requires continuous practice beyond classroom learning. The recommendation to solve DSA problems daily, study Design Patterns, understand SOLID Principles, and explore modern AI-powered development tools highlighted the importance of lifelong learning in software engineering.

The Toll Plaza Queue project was the most engaging part of today's class. It demonstrated how Object-Oriented Programming can be integrated with data structures to build a realistic software application. Instead of implementing a queue using simple integers or strings, we modeled actual business entities such as **Vehicle** and **FASTag**, making the implementation much closer to a real electronic toll collection system.

The concept of **Object Composition** became much clearer through the relationship between Vehicle and FastTag. Rather than duplicating FASTag details inside every Vehicle object, storing an entire FastTag object resulted in a cleaner, modular, and reusable design. This approach closely resembles how professional software systems are structured.

Another important learning experience was observing how business logic can be embedded directly inside data structure operations. The queue not only stored vehicles but also performed balance verification, toll deduction, and vehicle removal automatically. This demonstrated that data structures often serve as active components of business applications rather than passive containers.

The second half of the lecture shifted towards Python string manipulation. Although strings appear to be simple data types, today's examples revealed how powerful Python's built-in string methods are. Operations such as indexing, slicing, splitting, trimming, and formatting are used extensively in web development, data processing, artificial intelligence, and software automation. Understanding these operations will help me write cleaner and more efficient Python programs in future projects.

Overall, today's session strengthened my understanding of software design by combining Object-Oriented Programming, Queue Data Structures, business logic, and Python language features into practical applications. It also reinforced the idea that writing professional software requires both strong programming fundamentals and thoughtful system design.

---

# 📌 Key Takeaways

- Consistent DSA practice is essential for improving programming and problem-solving skills.
- Design Patterns and SOLID Principles play a vital role in developing scalable software.
- Object Composition enables one object to own another object, improving modularity and code reuse.
- Queues naturally model FIFO-based real-world systems such as toll plazas and customer service applications.
- Circular Doubly Linked Lists provide efficient insertion, deletion, and traversal operations.
- Business rules can be integrated directly into data structure implementations.
- Python strings are immutable, meaning every modification creates a new string object.
- String indexing, slicing, and tokenization are fundamental operations used in numerous applications.
- Built-in methods such as `strip()`, `split()`, and `upper()` simplify text processing.
- Formatted String Literals (f-strings) provide the most readable and efficient approach to string formatting in modern Python.

---

# 📖 Revision Notes

✔ Professional Development Guidance

✔ Daily DSA Practice

✔ Design Patterns

✔ SOLID Principles

✔ Julius AI

✔ Object Composition

✔ Vehicle–FASTag Relationship

✔ One-to-One Mapping

✔ Toll Plaza Queue System

✔ Queue Implementation Using Circular Doubly Linked List

✔ `add()` Operation

✔ `delete()` Operation

✔ `deduct_toll()` Business Logic

✔ `show_list()` Traversal

✔ Assignment – Low Balance Handling

✔ Python Strings

✔ String Immutability

✔ Escape Characters

✔ `upper()`

✔ `split()`

✔ Membership Operator (`in`)

✔ String Indexing

✔ Negative Indexing

✔ String Slicing

✔ Reverse Slicing

✔ String Concatenation

✔ String Multiplication

✔ `strip()`

✔ `lstrip()`

✔ `rstrip()`

✔ f-Strings

✔ `format()`

✔ `format_map()`

---

# ❓ Interview Questions

### Q1. What is Object Composition? Explain using the Vehicle and FASTag example.

**Answer:**

Object Composition is an Object-Oriented Programming technique in which one object contains another object as one of its attributes. In today's implementation, each `Vehicle` object owns a `FastTag` object, allowing related information to be grouped together while maintaining modularity and reusability.

---

### Q2. Why is a Queue suitable for implementing a Toll Plaza Management System?

**Answer:**

A queue follows the **First-In, First-Out (FIFO)** principle. Vehicles arrive at the toll plaza in sequence, and the first vehicle entering the queue is processed and allowed to leave first, matching the real-world workflow of toll collection systems.

---

### Q3. Why was a Circular Doubly Linked List used instead of a normal linked list?

**Answer:**

A Circular Doubly Linked List supports efficient insertion and deletion while also allowing traversal in both forward and backward directions. Maintaining both `head` and `tail` pointers enables constant-time queue operations and simplifies pointer management.

---

### Q4. What is the difference between Object Composition and storing primitive data?

**Answer:**

Instead of storing individual FASTag attributes (ID, bank, balance) inside the Vehicle class, the Vehicle stores an entire FastTag object. This avoids duplication, improves modularity, and better represents real-world relationships.

---

### Q5. Why are Python strings called immutable?

**Answer:**

Strings are immutable because their contents cannot be modified after creation. Operations such as `upper()`, `replace()`, or `strip()` return new string objects rather than changing the original string.

---

### Q6. What is the purpose of the `split()` method?

**Answer:**

The `split()` method divides a string into multiple substrings based on a specified delimiter and returns them as a list. This process is commonly referred to as **tokenization**.

---

### Q7. Explain the difference between `strip()`, `lstrip()`, and `rstrip()`.

**Answer:**

- `strip()` removes whitespace from both ends of a string.
- `lstrip()` removes whitespace only from the left side.
- `rstrip()` removes whitespace only from the right side.

---

### Q8. Why are f-strings preferred over older formatting methods?

**Answer:**

Formatted String Literals (f-strings) provide concise syntax, better readability, improved performance, and allow variables or expressions to be embedded directly within strings, making them the preferred formatting approach in modern Python.

---

# 🎯 Goals for Next Session

- Continue exploring advanced Object-Oriented Programming concepts.
- Practice implementing additional data structures using Python classes.
- Strengthen understanding of business logic integration with data structures.
- Explore more Python built-in functions and standard libraries.
- Continue improving coding practices through real-world software projects.

---

# ✅ Today's Progress Checklist

- [x] Understood professional software development recommendations.
- [x] Learned Object Composition using Vehicle and FASTag classes.
- [x] Modeled a Toll Plaza Queue Management System.
- [x] Implemented Queue operations using a Circular Doubly Linked List.
- [x] Understood automatic toll deduction based on business rules.
- [x] Practiced queue insertion, deletion, and traversal.
- [x] Completed the Toll Plaza assignment implementation.
- [x] Learned Python string immutability.
- [x] Practiced indexing, slicing, and reverse slicing.
- [x] Used built-in string manipulation methods.
- [x] Explored multiple string formatting techniques.

---

> [!TIP]
> Today's session demonstrated that professional software development is not just about writing algorithms—it is about combining **Object-Oriented Programming, appropriate Data Structures, business rules, and language features** to model real-world systems that are modular, maintainable, and scalable.

---

**Status:** Completed ✅

**Training Day:** 10

**Maintained By:** Saksham Kumar