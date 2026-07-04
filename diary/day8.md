<!--
title: Object-Oriented Programming Fundamentals & Object Modeling
date: 2026-07-04
tags: Python, OOP, Object-Oriented Programming, Classes, Objects, Constructors, MVC, SaaS, Object Modeling
summary: Learned the fundamentals of Object-Oriented Programming (OOP), object modeling through real-world case studies, relationship mapping, constructors, object references, and implemented an Employee Management System using Python classes.
-->

# 🚀 Day 8: Object-Oriented Programming Fundamentals & Object Modeling

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 8  
**Date:** 4 July 2026

---

# 📖 Daily Training Record – Day 8

## 📌 Overview

Today's session marked the beginning of **Object-Oriented Programming (OOP)**, one of the most widely adopted programming paradigms in modern software engineering. Rather than focusing solely on writing functions and algorithms, the discussion emphasized **analyzing real-world systems**, identifying the entities involved, and representing them as software objects.

The instructor explained how every software application begins with understanding the problem domain. Before writing code, developers must identify the **objects**, determine their **attributes**, establish relationships among them, and finally convert these conceptual models into classes capable of creating real objects in memory.

To reinforce this design-first approach, several practical case studies were discussed, including a **Food Delivery Application** and an **Employee Management Portal for Startups**. These examples demonstrated how real-world entities such as restaurants, menus, users, employees, teams, and startups can be modeled using Object-Oriented principles.

The session also introduced the concept of **constructors (`__init__`)**, the purpose of the **`self` reference**, object creation in memory, reference variables, object relationships, and Python's dynamic attribute assignment. Finally, we implemented multiple OOP examples, culminating in a complete Employee Management System that modeled organizational hierarchy through interconnected objects.

Overall, today's class shifted the focus from writing individual programs to designing scalable software architectures using Object-Oriented Programming concepts.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the philosophy of Object-Oriented Programming.
- Differentiate between Objects and Classes.
- Relate real-world entities to software objects.
- Learn the process of object identification and object modeling.
- Perform qualitative and quantitative analysis before implementation.
- Understand object relationships such as One-to-One, One-to-Many, and Many-to-Many.
- Learn the foundation of the **Model** layer in the MVC architecture.
- Create classes and instantiate objects in Python.
- Understand constructors (`__init__`) and their role during object creation.
- Learn the significance of the `self` reference variable.
- Understand how objects are stored in Heap Memory while reference variables reside in Stack Memory.
- Explore object references, shallow copying, and dynamic attribute creation.
- Build a real-world Employee Management System using interconnected Python classes.

---

# 📚 Key Learnings

---

## 1️⃣ Introduction to Object-Oriented Programming (OOP)

Today's session began with the introduction of **Object-Oriented Programming (OOP)**, a programming paradigm that models software around **objects** rather than individual functions or procedures.

Unlike procedural programming, where the focus is primarily on writing functions to manipulate data, OOP emphasizes identifying real-world entities, representing them as objects, and organizing them into reusable and scalable software components.

The instructor highlighted that modern software systems such as social media platforms, banking applications, e-commerce websites, food delivery services, and enterprise management systems are predominantly developed using Object-Oriented principles because they closely resemble real-world scenarios.

---

### What is Object-Oriented Programming?

Object-Oriented Programming is a methodology in which software is designed by identifying **objects**, defining their **properties (attributes)** and **behaviors (methods)**, and describing them using **classes**.

Instead of thinking about individual variables and functions, developers think in terms of real-world entities.

For example:

- A User
- A Restaurant
- A Vehicle
- A Student
- A Bank Account

Each of these can be represented as an object in software.

---

### Why OOP?

Object-Oriented Programming provides several advantages over traditional procedural programming.

- Better organization of code
- Reusability
- Scalability
- Easier maintenance
- Real-world representation
- Reduced code duplication
- Modular software architecture

These characteristics make OOP the preferred paradigm for building large-scale software systems.

---

## 2️⃣ Objects and Classes

The instructor explained that everything in Object-Oriented Programming revolves around **Objects** and **Classes**.

Although these terms are often used together, they represent different concepts.

---

### Object

An **Object** is any entity that exists and occupies memory.

In the real world, objects include:

- Mango
- Car
- Fan
- Mobile Phone
- Human
- Restaurant

In computer science, an object is a **container in memory** that stores related data and, optionally, associated behavior.

Each object possesses:

- Identity
- State (attributes)
- Behavior (methods)

---

### Class

A **Class** is a blueprint or textual representation describing how an object should be created.

It specifies:

- What attributes the object will contain.
- What operations the object can perform.
- How memory will be allocated when the object is instantiated.

A class itself does not occupy meaningful application data until objects are created from it.

---

### Object vs Class

| Object | Class |
|---------|-------|
| Real entity | Blueprint of an entity |
| Occupies memory | Defines object structure |
| Stores actual data | Describes data members and methods |
| Multiple objects can exist | One class can generate many objects |
| Created during runtime | Written during software development |

---

### Real World vs Computer Science

The instructor drew an interesting analogy between real-world objects and software objects.

| Real World | Computer Science |
|------------|------------------|
| Object → Physical entity (Car, Fan, Human) | Object → Memory container holding data |
| Class → Architectural drawing or blueprint | Class → Textual representation of an object in code |

This comparison made it easier to understand why classes are often called **blueprints** while objects are considered their **instances**.

---

> [!NOTE]
> A class only describes an object. The actual object comes into existence **only after object construction**, when memory is allocated during program execution.

---

## 3️⃣ Principles Followed Before Writing OOP Code

One of the most valuable lessons from today's session was that **software design begins long before coding**.

The instructor introduced a systematic approach that software engineers follow while designing object-oriented systems.

### OOP Design Workflow

```
Think of a Problem

↓

Identify the Objects

↓

Visualize / Draw the Objects

↓

Identify Attributes

↓

Identify Relationships

↓

Represent Each Object as a Class

↓

Create Objects in Memory

↓

Build the Complete Software
```

This approach ensures that developers understand the problem domain before implementing the solution.

Rather than immediately writing Python code, the focus is first placed on **analysis, planning, and modeling**, which ultimately leads to cleaner and more maintainable software.

---

### Key Principles Discussed

1. Think of the object.
2. Draw or represent the object.
3. Convert the representation into a class.
4. Create real objects from that class.
5. Establish relationships between objects.
6. Build the complete application around these interconnected objects.

---

> [!TIP]
> Experienced software engineers spend a significant amount of time analyzing the problem before writing code. A well-designed model often reduces development time and minimizes future maintenance efforts.

---


## 4️⃣ Software Analysis Before Development

The instructor emphasized that successful software development does not begin with programming—it begins with **understanding the problem**.

Before implementing any application, software engineers perform two important types of analysis:

- **Qualitative Analysis**
- **Quantitative Analysis**

These analyses help developers identify business requirements, system entities, and their relationships before converting them into software.

---

### Qualitative Analysis

Qualitative analysis focuses on understanding **what the system should do** from a business perspective.

Instead of discussing code, it answers questions such as:

- What problem are we solving?
- Who are the users?
- What services will the application provide?
- How will different users interact with the system?

To explain this concept, the instructor used a **Food Delivery Application** as an example.

---

### Food Delivery Application Scenario

The workflow of a typical food delivery platform can be summarized as follows:

```
Customer

↓

Browse Menu

↓

Select Dishes

↓

Place Order

↓

Restaurant Receives Order

↓

Order Appears on Admin Panel

↓

Food Preparation

↓

Delivery Agent Picks Order

↓

Customer Receives Food
```

Although this appears to be a simple workflow, several independent objects collaborate behind the scenes to complete a single order.

---

### Quantitative Analysis

Once the business requirements are understood, developers move towards **Quantitative Analysis**, where they identify every object involved in the system and represent it in a structured manner.

The instructor explained the following workflow:

```
Identify Objects

↓

Visualize Objects

↓

Relate Objects

↓

Represent Objects as Classes

↓

Create Objects in Memory

↓

Build the Software
```

This process forms the foundation of Object-Oriented Design.

---

## 5️⃣ Object Identification – Food Delivery Application

Using the Food Delivery Application as a case study, we identified the primary objects involved in the system.

Rather than thinking in terms of screens or buttons, the focus was placed on identifying **real-world entities**.

---

### Restaurant

The Restaurant object stores all information related to a restaurant.

**Possible Attributes**

- Name
- Phone Number
- Email
- Address
- Operating Hours
- Rating
- Price Per Person
- Menu

---

### Menu

A Menu represents the collection of dishes offered by a restaurant.

**Attributes**

- Menu Name
- Menu Type
- Collection of Dishes

```
Menu

↓

Dish

↓

Dish

↓

Dish

↓

...
```

---

### Dish

Every menu consists of multiple dishes.

Each Dish may contain:

- Name
- Image
- Price
- Category

Examples:

- Paneer Butter Masala
- Veg Biryani
- Cheese Pizza
- Cold Coffee

---

### User

The User object represents the customer using the application.

Attributes include:

- Name
- Phone Number
- Email
- Multiple Addresses
- Gender
- Profile Image

Since a customer may save multiple delivery locations, the **Address** itself becomes another independent object.

---

### Address

Instead of storing an address as plain text, it is modeled as a separate object.

Attributes:

- Address Line
- City
- State
- PIN Code
- Tag (Home, Office, Hostel)

This approach improves modularity and allows multiple addresses to be associated with a single user.

---

### Delivery Agent

The Delivery Agent represents the individual responsible for delivering customer orders.

Attributes:

- Name
- Phone Number
- Email
- Vehicle
- Driving License
- Working Hours

---

### Vehicle

Rather than storing vehicle details inside the Delivery Agent object, the vehicle is modeled independently.

Attributes:

- Registration Number
- Brand
- Model
- Year of Registration
- Color

This allows vehicle information to be reused and managed independently.

---

### Order

The Order object acts as the central entity connecting users, restaurants, dishes, and delivery agents.

Typical attributes include:

- Order ID
- Order Amount
- Ordered Dishes
- Date
- Time
- Payment Details
- Delivery Status

The instructor intentionally left some fields open-ended to encourage students to think about additional attributes that would be required in a production-ready system.

---

## 6️⃣ Relationship Mapping Between Objects

After identifying the objects, the next step was to understand **how these objects interact with one another**.

This process is known as **Relationship Mapping**, and it plays a crucial role in designing scalable software systems and databases.

Three primary types of relationships were discussed.

---

### One-to-One (1 : 1)

In a One-to-One relationship, one object is associated with exactly one other object.

Example:

```
Startup

────────►

Startup Owner
```

Each startup has one owner.

---

### One-to-Many (1 : M)

In this relationship, one object can be associated with multiple objects.

Example:

```
Restaurant

↓

Menu

↓

Dish

Dish

Dish

Dish
```

Similarly,

```
Startup

↓

Team 1

Team 2

Team 3
```

One Startup can have multiple Teams.

---

### Many-to-Many (M : M)

Many-to-Many relationships occur when multiple objects are associated with multiple other objects.

The instructor explained this using the concept of **Software as a Service (SaaS)**.

Example:

```
Restaurant A ─┐

Restaurant B ─┼────► Shared SaaS Platform

Restaurant C ─┘
```

A SaaS platform may manage menus for thousands of restaurants simultaneously.

Likewise, a restaurant management platform serves multiple restaurants while each restaurant uses the same software solution.

---

> [!IMPORTANT]
> Correctly identifying relationships is one of the most critical stages of software design because it directly influences class structures, database schemas, API design, and system scalability.

---


## 7️⃣ Foundation of MVC Architecture – Model

While discussing Object-Oriented Design, the instructor connected today's concepts with the **MVC (Model–View–Controller)** architectural pattern.

The primary focus was on understanding the **Model** layer, which serves as the foundation of every data-driven application.

Rather than immediately developing user interfaces or writing business logic, software engineers first create the **Model**, which represents all real-world entities involved in the system.

---

### What is the Model?

A **Model** is a software representation of a real-world object.

It defines:

- What data the object contains.
- How that data is organized.
- How different objects are related.
- How the object is stored in memory.

Every object identified during system analysis eventually becomes a Model (Class).

---

### MVC Overview

```
                User

                  │

                  ▼

          ┌──────────────┐
          │     View     │
          │ (UI / Screen)│
          └──────┬───────┘
                 │
                 ▼
          ┌──────────────┐
          │  Controller  │
          │ Business Flow│
          └──────┬───────┘
                 │
                 ▼
          ┌──────────────┐
          │    Model     │
          │ Objects/Data │
          └──────────────┘
```

Today's session concentrated entirely on the **Model**, which forms the backbone of applications regardless of the frontend technology being used.

---

> [!NOTE]
> Before building APIs, databases, or user interfaces, developers generally spend considerable time designing the **Model**, since every other component depends upon it.

---

## 8️⃣ Case Study – Employee Management Portal for Startups

To reinforce object modeling concepts, the instructor introduced another real-world example: an **Employee Management Portal** for startups.

The objective was to identify all entities involved in managing a startup and convert them into software objects.

Instead of beginning with classes, the problem was first analyzed conceptually.

---

### Startup

The Startup object represents the organization itself.

**Attributes**

- Name
- Email
- Address
- Logo
- Domain Name
- Business Domain
- Startup Owner

---

### Startup Owner

The Startup Owner manages the organization.

Possible attributes include:

- Name
- Email
- Gender
- Experience
- Teams Managed

---

### Team

Each startup contains multiple development teams.

Typical attributes include:

- Team ID
- Team Name
- Team Leader
- Working Domain
- Employee List

---

### Employee

Every employee represents an independent object.

Attributes include:

- Employee ID
- Name
- Login Email
- Login Credentials
- Phone Number
- Address
- Designation
- Salary
- Bank Account
- Working Hours

---

### Relationship Diagram

The instructor demonstrated how these objects relate to one another.

```
Startup

    │
    │ 1 : 1
    ▼

Startup Owner

    │
    │ 1 : M
    ▼

Teams

 ├───────────────┐
 │               │
 ▼               ▼

Frontend      Backend

 │               │

 ▼               ▼

Employees    Employees
```

This hierarchy illustrates how object relationships are mapped before implementation.

---

## 9️⃣ Creating Classes in Python

Once the analysis phase was completed, the next step was converting each identified object into a Python class.

Initially, empty classes were created using the `pass` keyword.

The purpose was not to implement functionality immediately but to establish the software structure.

---

### Initial Class Definitions

```python
class Startup():
    pass


class Startup_owner():
    pass


class Team():
    pass


class Project():
    pass


class Employee():
    pass
```

The `pass` statement acts as a placeholder, allowing Python to recognize the class while postponing its implementation.

---

### Creating Objects

Objects were then instantiated from these classes.

```python
startup = Startup()

owner = Startup_owner()

team1 = Team()
team2 = Team()
team3 = Team()
```

Each object occupies its own memory location and exists independently, even though all were created from the same class definitions.

---

### Displaying Objects

```python
print("Startup:", startup)

print("Startup Owner:", owner)

print("Team 1:", team1)

print("Team 2:", team2)

print("Team 3:", team3)
```

---

### Sample CLI Output

```text
Startup: <__main__.Startup object at 0x000001F3A2C4BFD0>

Startup Owner: <__main__.Startup_owner object at 0x000001F3A2C58160>

Team 1: <__main__.Team object at 0x000001F3A2C58250>

Team 2: <__main__.Team object at 0x000001F3A2C58340>

Team 3: <__main__.Team object at 0x000001F3A2C58430>
```

*(Memory addresses will vary on every execution.)*

---

### Dynamically Adding Attributes

Python allows attributes to be added dynamically after an object has been created.

Example:

```python
startup.name = "Auribises"
```

This creates a new attribute named `name` inside the object at runtime.

Unlike languages such as Java or C++, Python objects are highly dynamic and permit runtime attribute creation unless restrictions are explicitly imposed.

---

## 🔍 Understanding `vars()`

To inspect an object's internal attributes, the instructor introduced the built-in `vars()` function.

Example:

```python
print(vars(startup))
```

Output:

```text
{'name': 'Auribises'}
```

Similarly,

```python
print(vars(team1))
```

returns

```text
{}
```

because no attributes have yet been assigned.

The `vars()` function is extremely useful while debugging, as it displays an object's attribute dictionary in a readable format.

---

> [!TIP]
> Creating empty classes first and gradually adding attributes is a common learning approach in OOP. Once the object model is fully understood, constructors and methods can be introduced to standardize object creation.

---

## 🔟 Building Relationships Between Objects in Code

After creating individual classes and objects, the next step was to establish relationships among them.

The instructor demonstrated that simply creating objects is not enough; the real power of Object-Oriented Programming lies in connecting these objects to accurately represent real-world systems.

Instead of storing unrelated pieces of information, one object can contain references to other objects, forming a complete hierarchy.

---

### Creating Team Objects

Three development teams were created.

```python
team1 = Team()
team1.team_id = "T101"
team1.team_name = "Frontend"
team1.team_leader = "Raj"
team1.employee = []

team2 = Team()
team2.team_id = "T102"
team2.team_name = "Backend"
team2.team_leader = "Varun"
team2.employee = []

team3 = Team()
team3.team_id = "T103"
team3.team_name = "Database"
team3.team_leader = "Alex"
team3.employee = []
```

Each object stores its own independent state while sharing the same blueprint (`Team` class).

---

### Establishing Object Relationships

The instructor then connected these objects using references.

```python
Teams = [team1, team2, team3]

owner = Startup_owner()

owner.name = "Ishant Kumar"
owner.email = "ishantkumar@auribises.com"
owner.teams = Teams

startup = Startup()

startup.name = "Auribises"
startup.owner = owner
```

The hierarchy now becomes:

```
Startup

│

▼

Startup Owner

│

▼

Teams

├──────────────┐

│              │

▼              ▼

Frontend    Backend    Database
```

Instead of duplicating data, Python objects reference one another, creating a structured object graph.

---

### Inspecting Object Data

The instructor used `vars()` to inspect the internal dictionary of each object.

```python
print(vars(startup))

print(vars(owner))

print(vars(team1))
```

---

### Sample CLI Output

```text
data in startup:

{
    'name': 'Auribises',
    'owner': <__main__.Startup_owner object at 0x...>
}

data in Startup Owner:

{
    'name': 'Ishant Kumar',
    'email': 'ishantkumar@auribises.com',
    'teams': [
        <__main__.Team object at 0x...>,
        <__main__.Team object at 0x...>,
        <__main__.Team object at 0x...>
    ]
}

data in Team 1:

{
    'team_id': 'T101',
    'team_name': 'Frontend',
    'team_leader': 'Raj',
    'employee': []
}
```

*(Memory addresses differ on every execution.)*

---

### Understanding the Mapping

This implementation demonstrates two important relationship types.

| Relationship | Example |
|--------------|---------|
| One-to-One | Startup → Startup Owner |
| One-to-Many | Startup Owner → Teams |

This mirrors the analysis phase discussed earlier and shows how conceptual diagrams are translated into executable Python code.

---

## 1️⃣1️⃣ Constructors (`__init__`) in Python

Until now, object attributes were created manually after object construction.

Although this approach works, it is prone to inconsistencies because different objects may end up with different sets of attributes.

To solve this problem, Python provides a special method called the **constructor**.

---

### What is a Constructor?

A constructor is a special method that executes **automatically** whenever a new object is created.

In Python, the constructor is represented by:

```python
__init__()
```

Its primary responsibilities are:

- Initializing object attributes.
- Assigning default values.
- Standardizing object creation.
- Preparing the object for immediate use.

---

### Classroom Example

```python
class User():

    def __init__(self, name):

        print("[LOG] __init__ | Self:", self)

        self.name = name
```

Creating an object

```python
user = User("John")
```

automatically invokes the constructor without explicitly calling `__init__()`.

---

### Execution Flow

```
Object Construction

↓

Memory Allocated

↓

__init__() Called Automatically

↓

Attributes Initialized

↓

Object Ready
```

---

## 1️⃣2️⃣ Understanding `self`

One of the most important concepts introduced today was the **`self` reference variable**.

The instructor explained that every instance method in Python receives `self` as its first parameter.

`self` refers to **the current object** that is invoking the method.

---

### Purpose of `self`

`self` enables Python to distinguish between attributes belonging to different objects created from the same class.

Example

```python
class User:

    def __init__(self, name):

        self.name = name
```

Here,

```
self.name
```

creates an attribute inside the current object.

Without `self`, Python would not know which object's attribute should be modified.

---

### `self` vs Constructor Parameter

```python
self.name = name
```

| Left Side | Right Side |
|------------|------------|
| Object Attribute | Parameter passed by the programmer |

Thus,

```
self.name
```

belongs to the object,

while

```
name
```

exists only during constructor execution.

---

### `self` Across Languages

| Language | Keyword |
|-----------|---------|
| Python | `self` |
| Java | `this` |
| C++ | `this` |

Although the keyword differs, the underlying concept remains the same.

---

> [!NOTE]
> `self` is **not a reserved keyword** in Python. It is simply the widely accepted naming convention used by developers. Technically, another identifier could be used, but doing so is discouraged because it reduces code readability.

---

## 1️⃣3️⃣ Object Construction, Memory Allocation, and Reference Variables

The instructor explained how objects are created internally when an object construction statement is executed.

Consider the following statement:

```python
user1 = User(
    kuchbhi="John",
    phone="+91 99990 11110",
    email="john@example.com",
    age=20,
    gender="Male",
    address="Redwood Shores"
)
```

Although it appears to be a single line of code, multiple operations occur internally.

### Internal Execution Flow

```
Object Construction Statement

↓

Memory Allocated in Heap

↓

Constructor (__init__) Executes

↓

Attributes Initialized

↓

Reference Variable Stores Object Address

↓

Object Ready for Use
```

The instructor emphasized that the object itself resides in **Heap Memory**, while the reference variable (`user1`) exists in **Stack Memory** and stores the address (reference) of the object.

---

### Stack vs Heap During Object Creation

```
Stack Memory                    Heap Memory

┌────────────┐               ┌────────────────────────┐
│ user1      │──────────────►│ User Object            │
│            │               │ name = "John"          │
└────────────┘               │ phone = "+91..."       │
                             │ email = "john@..."     │
                             │ age = 20               │
                             │ gender = "Male"        │
                             │ address = "Redwood..." │
                             └────────────────────────┘
```

This separation between reference variables and actual objects is fundamental to understanding object manipulation in Python.

---

## 1️⃣4️⃣ Object References and Reference Copy

One of the most interesting demonstrations involved assigning one object reference to another variable.

```python
user3 = user1
```

Many beginners assume this creates a new object, but in reality **no new object is created**.

Instead, both variables point to the **same object** in memory.

```
Stack

user1 ───────┐

             │

user3 ───────┘

              │

              ▼

Heap

┌─────────────────────┐
│ User Object         │
│ name = "John"       │
│ age = 20            │
└─────────────────────┘
```

Both reference variables now access the same object.

---

### Demonstration

```python
user3 = user1

user1.status = "Online"
```

Since both variables refer to the same object,

```python
print(vars(user3))
```

also displays

```text
{
    'name': 'John',
    'phone': '+91 99990 11110',
    'email': 'john@example.com',
    'age': 20,
    'gender': 'Male',
    'address': 'Redwood Shores',
    'status': 'Online'
}
```

because there is only **one object** in memory.

---

### Deleting an Attribute

The instructor also demonstrated:

```python
del user3.address
```

Although the deletion appears to occur through `user3`, the attribute is actually removed from the shared object.

Consequently,

```python
print(vars(user1))
```

no longer contains the `address` field because both references point to the same object.

---

> [!IMPORTANT]
> Assignment between objects copies the **reference**, not the object itself. To create an independent copy, techniques such as shallow copy or deep copy must be used.

---

## 1️⃣5️⃣ Inspecting Objects Using `id()`, `hex()`, and `vars()`

To better understand object identity, the instructor introduced three useful built-in functions.

### `vars()`

Displays all attributes stored inside an object.

```python
print(vars(user1))
```

Example Output

```text
{
    'name': 'John',
    'phone': '+91 99990 11110',
    'email': 'john@example.com',
    'age': 20,
    'gender': 'Male'
}
```

---

### `id()`

Returns the unique identity of an object during program execution.

```python
print(id(user1))
```

Example

```text
140363347808912
```

---

### `hex(id())`

Since memory addresses are easier to interpret in hexadecimal form, the instructor converted the object identity using:

```python
print(hex(id(user1)))
```

Example Output

```text
0x7fd56e34f190
```

This hexadecimal value represents the memory identity of the object.

---

### Classroom Observation

When executed,

```python
print(user1, hex(id(user1)))

print(user3, hex(id(user3)))
```

both produced the **same hexadecimal address**, confirming that both variables referenced the exact same object.

---

## 1️⃣6️⃣ Constructor Parameters and Attribute Standardization

Initially, object attributes were assigned manually after object creation.

Example:

```python
user1.name = "Saksham"

user2.full_name = "Saksham Kumar"

user3.age = 20
```

This approach creates inconsistency because every object may end up containing different attribute names.

To standardize object creation, the instructor redesigned the constructor to accept all required information during object initialization.

---

### Standardized Constructor

```python
class User:

    def __init__(
        self,
        kuchbhi,
        phone,
        email,
        age,
        gender,
        address
    ):

        self.name = kuchbhi
        self.phone = phone
        self.email = email
        self.age = age
        self.gender = gender
        self.address = address
```

Now every newly created object automatically contains the same set of attributes.

---

### Creating Objects

```python
user1 = User(
    kuchbhi="John",
    phone="+91 99990 11110",
    email="john@example.com",
    age=20,
    gender="Male",
    address="Redwood Shores"
)
```

This approach ensures consistency and significantly reduces programming errors.

---

## 1️⃣7️⃣ Constructor Overloading in Python

Towards the end of the discussion, an important language-specific behavior was explained.

Unlike languages such as **C++** and **Java**, Python **does not support constructor overloading**.

For example,

```python
class User:

    def __init__(self, name):
        pass

    def __init__(self, name, phone):
        pass
```

Only the **second constructor** exists.

The first definition is completely replaced.

---

### Why?

Python identifies methods only by their names.

When another method with the same name is defined, the previous implementation is overwritten.

Therefore,

```
No Constructor Overloading

✓ Constructor Redefinition
```

---

> [!NOTE]
> If multiple constructor behaviors are required in Python, developers generally use **default parameter values**, `*args`, `**kwargs`, or **class methods** instead of constructor overloading.

---

### Homework Discussion

The session concluded with a homework assignment to independently design and implement an **Object-Oriented Employee Management Portal**.

The objective was to apply everything learned during the class:

- Identifying real-world objects.
- Creating appropriate classes.
- Using constructors for initialization.
- Establishing One-to-One and One-to-Many relationships.
- Creating interconnected objects representing a startup organization.

This assignment served as a comprehensive exercise in translating software analysis into a structured Object-Oriented implementation before moving on to more advanced OOP concepts.

---

## 1️⃣8️⃣ Homework Solution – Employee Management Portal for Startups

To reinforce the concepts discussed throughout the session, the instructor assigned a comprehensive Object-Oriented Programming exercise.

The objective was to design and implement an **Employee Management Portal for Startups** by identifying real-world entities, converting them into Python classes, establishing relationships among them, and finally creating actual objects in memory.

This assignment brought together almost every concept introduced during today's lecture, including:

- Object identification
- Class design
- Constructors
- Object instantiation
- Object relationships
- One-to-One mapping
- One-to-Many mapping
- Real-world software modeling

---

### Class Structure

Five major classes were designed.

```
Startup

│

├── Startup Owner

│       │

│       └── Teams

│              │

│              └── Employees
```

Each class represented a real-world entity with its own attributes.

---

### Class Responsibilities

| Class | Responsibility |
|--------|----------------|
| Startup | Represents the organization. |
| Startup Owner | Stores owner details and manages teams. |
| Team | Represents an individual development team. |
| Employee | Represents an employee working in the startup. |

---

### Complete Homework Implementation

The following implementation was created to model the complete startup hierarchy.

```python
# HW
# Employee management portal for startups

class Startup():
    def __init__(self, name, email, address, domain,
                 domain_name, startup_owner):
        self.name = name
        self.email = email
        self.address = address
        self.domain = domain
        self.domain_name = domain_name
        self.startup_owner = startup_owner


class Startup_owner():
    def __init__(self, owner_name, owner_email,
                 gender, teams):
        self.owner_name = owner_name
        self.owner_email = owner_email
        self.gender = gender
        self.teams = teams


class Team():
    def __init__(self, team_id, team_name,
                 team_leader,
                 team_working_domain,
                 employees):

        self.team_id = team_id
        self.team_name = team_name
        self.team_leader = team_leader
        self.team_working_domain = team_working_domain
        self.employees = employees


class Employee():
    def __init__(self,
                 emp_id,
                 emp_name,
                 login_email,
                 login_password,
                 phone_number,
                 emp_address,
                 designation,
                 salary,
                 working_hours):

        self.emp_id = emp_id
        self.emp_name = emp_name
        self.login_email = login_email
        self.login_password = login_password
        self.phone_number = phone_number
        self.emp_address = emp_address
        self.designation = designation
        self.salary = salary
        self.working_hours = working_hours
```

---

### Creating Employee Objects

Five employee objects were created.

```
Employee 1 → Rahul

Employee 2 → Ravi

Employee 3 → Fionna

Employee 4 → Dhruv

Employee 5 → Saksham
```

Each employee stores:

- Employee ID
- Name
- Login Email
- Login Password
- Phone Number
- Address
- Designation
- Salary
- Working Hours

---

### Creating Teams

Two development teams were formed.

```
WEB Team

↓

Rahul

Ravi

Saksham

-------------------------

APP Team

↓

Fionna

Dhruv

Saksham
```

This demonstrates that an employee can participate in multiple teams depending on project requirements.

---

### Creating Startup Owner

```
Owner

↓

Ishant Kumar

↓

WEB Team

APP Team
```

The owner object stores references to all development teams.

---

### Creating Startup Object

Finally, the Startup object was created.

```
Auribises Technologies Pvt. Ltd.

↓

Startup Owner

↓

Development Teams

↓

Employees
```

This completed the entire object hierarchy.

---

## 💻 Sample CLI Output

### Object Creation

```text
Startup:
<__main__.Startup object at 0x0000025E8C91F820>

Startup Owner:
<__main__.Startup_owner object at 0x0000025E8C91F940>

Team 1:
<__main__.Team object at 0x0000025E8C91FA00>

Team 2:
<__main__.Team object at 0x0000025E8C91FB20>

Employee 1:
<__main__.Employee object at 0x0000025E8C91FC40>

Employee 2:
<__main__.Employee object at 0x0000025E8C91FD60>

Employee 3:
<__main__.Employee object at 0x0000025E8C91FE80>

Employee 4:
<__main__.Employee object at 0x0000025E8C91FFA0>

Employee 5:
<__main__.Employee object at 0x0000025E8C920100>
```

*(The hexadecimal memory addresses shown above are representative. Actual addresses vary with each execution.)*

---

### Output Using `vars()`

```text
Startup:

{
    'name': 'Auribises Technologies Pvt. Ltd.',
    'email': 'admin@auribises.com',
    'address': 'PAU Road',
    'domain': 'HealthTech and FinTech',
    'domain_name': 'auribises.com',
    'startup_owner': <Startup_owner object>
}

----------------------------------------------------

Startup Owner:

{
    'owner_name': 'Ishant Kumar',
    'owner_email': 'IshantKumar@auribises.com',
    'gender': 'Male',
    'teams': [
        <Team object>,
        <Team object>
    ]
}

----------------------------------------------------

Team 1:

{
    'team_id': 'T101',
    'team_name': 'WEB',
    'team_leader': 'Saksham',
    'team_working_domain': 'FinTech',
    'employees': [
        Employee1,
        Employee2,
        Employee5
    ]
}

----------------------------------------------------

Team 2:

{
    'team_id': 'T102',
    'team_name': 'APP',
    'team_leader': 'Saksham',
    'team_working_domain': 'HealthTech',
    'employees': [
        Employee3,
        Employee4,
        Employee5
    ]
}
```

---

### Learning Outcome

This assignment clearly demonstrated how a real-world business can be modeled using interconnected Python objects.

Instead of storing unrelated variables, every entity becomes an independent object with clearly defined responsibilities, making the software:

- Modular
- Scalable
- Easy to maintain
- Closer to real-world architecture

---

# 💡 Important Concepts Learned

| Topic | Learning |
|--------|----------|
| Object-Oriented Programming | Models software using real-world objects and their relationships. |
| Object | A runtime instance that stores actual data in memory. |
| Class | A blueprint that defines the structure and behavior of objects. |
| Qualitative Analysis | Understands business requirements before implementation. |
| Quantitative Analysis | Identifies objects, attributes, and relationships. |
| Object Modeling | Converts real-world entities into software classes. |
| Relationship Mapping | Defines One-to-One, One-to-Many, and Many-to-Many associations. |
| MVC – Model | Represents business entities and forms the foundation of application architecture. |
| Constructor (`__init__`) | Automatically initializes objects during creation. |
| `self` | Refers to the current object and its attributes. |
| Reference Variables | Store object references rather than actual objects. |
| `vars()` | Displays all attributes stored inside an object. |
| `id()` | Returns the unique identity of an object. |
| `hex(id())` | Displays the object's identity in hexadecimal form. |
| Constructor Redefinition | Python replaces earlier constructors instead of supporting constructor overloading. |
| Employee Management System | Demonstrated complete real-world object modeling using Python classes. |

---

# 🌍 Real-World Applications

The concepts introduced during today's session form the backbone of modern software engineering. Almost every large-scale software application, whether web-based, mobile, or enterprise-level, relies heavily on Object-Oriented Programming and proper object modeling.

---

### Enterprise Software Development

Companies rarely build applications by writing random functions. Instead, they begin by identifying business entities and representing them as classes.

Examples include:

- Employee Management Systems
- Hospital Management Systems
- Banking Applications
- Inventory Management Systems
- College Management Portals

Each of these applications consists of interconnected objects representing real-world entities.

---

### Food Delivery Platforms

The Food Delivery example discussed during the session closely resembles commercial platforms such as:

- Restaurants
- Menus
- Dishes
- Customers
- Delivery Partners
- Orders
- Payments

Every entity exists as an independent object with clearly defined responsibilities and relationships.

---

### Software as a Service (SaaS)

One of the important discussions today revolved around **Software as a Service (SaaS)**.

Instead of developing software for a single organization, SaaS products are designed to serve multiple clients through a shared platform.

Examples include:

- HR Management Platforms
- CRM Software
- Learning Management Systems
- Restaurant Management Systems
- Employee Management Portals

In these applications, multiple organizations use the same software while maintaining their own independent data.

---

### MVC-Based Web Applications

Today's discussion also laid the foundation for the **Model** layer of MVC architecture.

Modern frameworks such as:

- Django
- Flask
- Spring Boot
- ASP.NET
- Laravel

all require developers to first create models representing business entities before implementing APIs or user interfaces.

---

### Database Design

The object relationships discussed today directly translate into database design.

Examples:

```
Startup

↓

Owner

↓

Teams

↓

Employees
```

becomes

- Startup Table
- Owner Table
- Team Table
- Employee Table

connected using foreign keys and relationship mappings.

---

### Artificial Intelligence Applications

Even AI-powered applications rely on Object-Oriented Programming.

Examples include:

- AI Assistants
- Autonomous Agents
- Customer Support Bots
- Recommendation Systems
- Workflow Automation Platforms

Each component (Agent, Tool, Memory, User, Task, Conversation) is typically represented as an object.

---

# 📝 Personal Reflection

Today's session completely changed the way I think about software development. Until now, most of my focus had been on writing programs that solved individual problems. However, today's class demonstrated that professional software engineering begins much earlier—with **analysis, planning, and designing real-world objects** before writing a single line of business logic.

The distinction between **Objects** and **Classes** became much clearer through the examples of restaurants, food delivery systems, startups, and employee management portals. Instead of viewing classes merely as syntax, I now understand them as blueprints that describe how real-world entities should exist in memory. Creating objects from these blueprints made the transition from conceptual design to executable code much easier to visualize.

The discussion on **relationship mapping** was particularly insightful. Understanding One-to-One, One-to-Many, and Many-to-Many relationships helped me appreciate how complex systems are structured internally. These relationships are not limited to Python classes—they also form the basis of database design, API architecture, and enterprise software development.

Another important takeaway was learning how Python handles **constructors**, **`self`**, and **reference variables**. Observing how multiple variables can point to the same object clarified many concepts related to object identity, memory allocation, and dynamic attribute management. The demonstrations using `vars()`, `id()`, and `hex(id())` provided a practical understanding of how objects exist and are referenced during program execution.

The Employee Management Portal assignment was the highlight of today's session. It transformed theoretical OOP concepts into a realistic software model by connecting startups, owners, teams, and employees through object relationships. This exercise reinforced the importance of designing software around business entities rather than isolated functions.

Overall, today's class provided a strong foundation for Object-Oriented Programming and software architecture. I now have a much better understanding of how real-world systems are analyzed, modeled, and implemented using Python classes. These concepts will be extremely valuable as I continue building full-stack applications and larger software projects.

---

# 📌 Key Takeaways

- Object-Oriented Programming models software using real-world entities.
- A **Class** acts as a blueprint, while an **Object** is its runtime instance.
- Proper software development begins with analysis before implementation.
- Qualitative and Quantitative Analysis simplify complex business problems.
- Relationship Mapping helps design scalable software architectures.
- Constructors standardize object initialization.
- The `self` reference allows each object to maintain its own state.
- Objects reside in Heap Memory, while reference variables are stored in Stack Memory.
- Assigning one object reference to another does not create a new object.
- Python supports constructor redefinition but does not support constructor overloading.
- Object modeling forms the foundation of the **Model** layer in MVC architecture.
- Real-world business systems can be represented effectively using interconnected Python objects.

---

# 📖 Revision Notes

✔ Introduction to Object-Oriented Programming

✔ Objects and Classes

✔ Real World vs Computer Science Representation

✔ OOP Design Workflow

✔ Qualitative Analysis

✔ Quantitative Analysis

✔ Food Delivery Application Modeling

✔ Startup Employee Management System

✔ Relationship Mapping (1:1, 1:M, M:M)

✔ SaaS Concept

✔ MVC – Model Layer

✔ Creating Classes Using `pass`

✔ Object Creation

✔ Dynamic Attribute Assignment

✔ `vars()` Function

✔ Constructors (`__init__`)

✔ `self` Reference Variable

✔ Stack vs Heap Memory

✔ Object References

✔ `id()` and `hex(id())`

✔ Constructor Redefinition

✔ Employee Management Portal Implementation

---

# ❓ Interview Questions

### Q1. What is Object-Oriented Programming?

**Answer:**

Object-Oriented Programming (OOP) is a programming paradigm that organizes software around objects, which encapsulate data (attributes) and behavior (methods). It helps build modular, reusable, and scalable applications.

---

### Q2. Differentiate between an Object and a Class.

**Answer:**

| Class | Object |
|-------|--------|
| Blueprint or template | Instance of a class |
| Defines structure | Stores actual data |
| Created during development | Created at runtime |
| No real data | Contains actual values |

---

### Q3. What is the purpose of the `self` keyword in Python?

**Answer:**

`self` refers to the current object invoking the method. It is used to access and modify the object's own attributes and methods.

---

### Q4. Why is the `__init__()` method called a constructor?

**Answer:**

The `__init__()` method executes automatically when an object is created and is responsible for initializing the object's attributes.

---

### Q5. Explain One-to-One and One-to-Many relationships with examples.

**Answer:**

- **One-to-One (1:1):** One Startup has one Startup Owner.
- **One-to-Many (1:M):** One Startup Owner manages multiple Teams.

These relationships help organize objects and define how they interact within a software system.

---

### Q6. Why does Python not support constructor overloading?

**Answer:**

Python identifies methods only by their names. Defining another constructor with the same name replaces the previous one, so only the latest `__init__()` definition remains active.

---

### Q7. What is the purpose of the `vars()` function?

**Answer:**

The `vars()` function returns the attribute dictionary (`__dict__`) of an object, making it useful for debugging and inspecting object state.

---

### Q8. What is Object Relational Mapping (ORM)?

**Answer:**

Object Relational Mapping (ORM) is a technique that maps objects in an Object-Oriented Programming language to records in a relational database, allowing developers to interact with databases using objects instead of SQL queries directly.

---

# 🎯 Goals for Next Session

- Explore the remaining principles of Object-Oriented Programming, such as Encapsulation, Inheritance, Polymorphism, and Abstraction.
- Practice designing more real-world software models using classes and objects.
- Learn how methods define the behavior of objects in addition to their attributes.
- Strengthen understanding of object relationships and memory management.
- Continue improving software design skills through practical OOP implementations.

---

# ✅ Today's Progress Checklist

- [x] Understood the fundamentals of Object-Oriented Programming.
- [x] Differentiated between Objects and Classes.
- [x] Learned the software design workflow.
- [x] Performed qualitative and quantitative analysis.
- [x] Modeled a Food Delivery Application.
- [x] Understood relationship mapping.
- [x] Learned the basics of SaaS architecture.
- [x] Studied the Model layer of MVC.
- [x] Created Python classes and objects.
- [x] Used constructors (`__init__`) for object initialization.
- [x] Understood the purpose of `self`.
- [x] Explored object references and memory concepts.
- [x] Used `vars()`, `id()`, and `hex(id())` for object inspection.
- [x] Implemented an Employee Management Portal using OOP.

---

> [!TIP]
> Great software is built by modeling the real world before writing code. When you clearly identify objects, define their relationships, and organize them into well-designed classes, the implementation becomes significantly easier, more maintainable, and scalable.

---

**Status:** Completed ✅

**Training Day:** 8

**Maintained By:** Saksham Kumar