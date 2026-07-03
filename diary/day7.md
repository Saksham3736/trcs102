<!--
title: Recursion, Searching Algorithms & Sorting Techniques
date: 2026-07-03
tags: Python, Recursion, Linear Search, Bubble Sort, Algorithms, Time Complexity, Flight Management, Data Structures
summary: Explored recursion through recursive algorithms, implemented linear search using multiple approaches, understood Bubble Sort, and built a flight management system supporting search, sorting, and filtering operations.
-->

# 🚀 Day 7: Recursion, Searching Algorithms & Sorting Techniques

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 7  
**Date:** 3 July 2026

---

# 📖 Daily Training Record – Day 7

## 📌 Overview

Today's session focused on one of the most fundamental concepts in computer science—**Recursion**. Rather than solving problems using repetitive loops, we learned how a function can solve a problem by calling itself until a terminating condition is reached. The class emphasized understanding the **base case**, **recursive case**, and how function calls are managed internally using the **Call Stack**.

To strengthen recursive thinking, we implemented programs for finding the **maximum element of a list** and calculating the **product of all elements** recursively. Alongside recursion, we shifted our focus to **algorithmic problem solving**, beginning with **Linear Search** and exploring different implementation styles in Python, including normal functions, variable-length arguments (`*args`), and keyword arguments (`**kwargs`).

The second half of the session introduced **Bubble Sort**, where we observed how adjacent elements are repeatedly compared and swapped until the collection becomes sorted. We also started developing a miniature **Flight Management System** using a list of dictionaries, implementing searching functionality and discussing how sorting and filtering can be applied to real-world datasets.

Overall, today's class connected theoretical concepts with practical programming, demonstrating how recursion and basic algorithms form the building blocks of efficient software development.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the concept of recursion and recursive thinking.
- Differentiate between the base case and recursive case.
- Learn how recursive function calls are stored in the Call Stack.
- Implement recursive algorithms to solve mathematical and list-based problems.
- Understand Linear Search and its time complexity.
- Explore multiple ways of passing function arguments using Python.
- Learn the working principle of Bubble Sort.
- Understand the optimization of nested loops in Bubble Sort.
- Work with complex data structures such as a list of dictionaries.
- Build search operations on structured datasets.
- Understand how sorting and filtering are applied in real-world applications like flight booking systems.

---

# 📚 Key Learnings

---

## 1️⃣ Understanding Recursion

The session began with an introduction to **Recursion**, one of the most important problem-solving techniques in programming. Recursion is a process in which a function solves a problem by calling itself repeatedly until it reaches a condition where no further recursive calls are required.

Unlike iterative approaches that rely on loops, recursion breaks a large problem into smaller sub-problems of the same nature. Each recursive call works on a smaller portion of the original problem until the **base case** is reached. Once the base case returns a value, the recursive calls begin returning one by one, eventually producing the final result.

A recursive function generally consists of two essential parts:

- **Base Case** – Stops further recursive calls.
- **Recursive Case** – Calls the same function with a smaller input.

Without a proper base case, recursion never terminates and eventually results in a **RecursionError (Stack Overflow)** because the call stack continues growing.

---

### General Structure of a Recursive Function

```python
def recursive_function(problem):
    if base_condition:
        return solution
    else:
        return recursive_function(smaller_problem)
```

---

### Components of Recursion

| Component | Purpose |
|-----------|---------|
| Base Case | Terminates recursion and prevents infinite function calls. |
| Recursive Case | Reduces the problem size and invokes the same function again. |
| Call Stack | Stores every recursive function call until execution begins returning. |
| Return Phase | Returns computed values from the deepest recursive call back to the original caller. |

---

> [!NOTE]
> Every recursive problem should become **smaller** after each recursive call. If the problem size does not reduce, the recursion will never terminate.

---

## 2️⃣ Finding the Maximum Element Using Recursion

To understand recursion practically, we solved the problem of finding the **largest element in a list**.

The instructor first explained how the logic changes as the list size increases.

### Case 1 — List contains one element

```
[10]

Maximum = 10
```

Since only one element exists, that element is automatically the maximum.

---

### Case 2 — List contains two elements

```
[10, 20]

Compare

10 > 20 ?

No

Maximum = 20
```

With two elements, only one comparison is required.

---

### Case 3 — General Recursive Solution

Instead of writing separate logic for lists of different sizes, recursion allows the same algorithm to work for **any number of elements**.

The algorithm follows these steps:

1. Find the maximum among the first **n−1** elements.
2. Store that value.
3. Compare it with the last element.
4. Return the larger value.

This approach divides the problem into progressively smaller sub-problems until only one element remains.

---

### Recursive Implementation

```python
def Get_max(numbers, length):
    if length == 1:
        return numbers[0]

    previous = Get_max(numbers, length - 1)
    current = numbers[length - 1]

    if previous > current:
        return previous
    else:
        return current


data = [10, 40, 30, 50, 20]

result = Get_max(data, len(data))
print(f"Max value is: {result}")
```

---

### CLI Output

```text
Max value is: 50
```

---

### Dry Run

Given the list:

```
[10, 40, 30, 50, 20]
```

Recursive execution proceeds as:

```
Get_max(5)

↓

Get_max(4)

↓

Get_max(3)

↓

Get_max(2)

↓

Get_max(1)

↓

Returns 10

↓

Compare 10 and 40 → 40

↓

Compare 40 and 30 → 40

↓

Compare 40 and 50 → 50

↓

Compare 50 and 20 → 50
```

Final Answer:

```
50
```

---

### Time & Space Complexity

| Complexity | Value |
|------------|-------|
| Time Complexity | O(n) |
| Space Complexity | O(n) (Call Stack) |

---

> [!TIP]
> Although recursion makes the solution elegant and easier to understand, it consumes additional stack memory. For very large datasets, an iterative approach may be more memory efficient.

---

## 3️⃣ Product of List Elements Using Recursion

After understanding how recursion can be used to find the maximum value, we implemented another recursive algorithm to calculate the **product of all elements in a list**.

This example demonstrated how recursion can progressively reduce the size of a problem until no elements remain. Unlike the previous example, where comparisons were performed, this algorithm multiplies each element with the result returned from the previous recursive call.

---

### Algorithm

The recursive logic follows these steps:

1. If the list contains no elements, return **1**.
2. Otherwise:
   - Recursively calculate the product of the first **n−1** elements.
   - Multiply the returned value with the current element.
3. Return the computed product.

The value **1** is used as the base case because it is the multiplicative identity.

---

### Recursive Implementation

```python
def product(numbers, length):
    if length == 0:
        return 1
    else:
        previous = product(numbers, length - 1)
        current = numbers[length - 1]
        return current * previous


data = [2, 3, 8]

result = product(data, len(data))
print("Result is:", result)
```

---

### CLI Output

```text
Result is: 48
```

---

### Dry Run

Input List

```
[2, 3, 8]
```

Execution

```
product(3)

↓

product(2)

↓

product(1)

↓

product(0)

↓

returns 1

↓

2 × 1 = 2

↓

3 × 2 = 6

↓

8 × 6 = 48
```

Final Output

```
48
```

---

## 🧠 Understanding the Call Stack

While discussing recursion, special emphasis was given to understanding the **Call Stack**, which is responsible for storing every function invocation.

Whenever a recursive function calls itself, Python creates a **new stack frame** containing:

- Local variables
- Function parameters
- Return address
- Execution state

These stack frames continue accumulating until the **base case** is reached.

Once the base case returns, Python removes one stack frame at a time (Last In, First Out), gradually returning control to the original function call.

---

### Recursive Call Stack

For the product example:

```
product([2,3,8],3)

↓

product([2,3,8],2)

↓

product([2,3,8],1)

↓

product([2,3,8],0)

↓

returns 1

↓

returns 2

↓

returns 6

↓

returns 48
```

---

### Stack vs Heap Memory

During the discussion, we also briefly differentiated between **Stack Memory** and **Heap Memory**, as recursion heavily depends on stack allocation.

| Stack Memory | Heap Memory |
|--------------|-------------|
| Stores function calls | Stores dynamically created objects |
| Automatically managed | Managed by Python's memory manager |
| Uses LIFO order | No fixed order |
| Faster access | Comparatively slower |
| Limited memory | Larger memory area |

---

> [!IMPORTANT]
> Every recursive function consumes stack memory for each function call. Deep recursion without an appropriate base condition eventually exhausts the available stack space, resulting in a **RecursionError**.

---

## 4️⃣ Introduction to Algorithmic Problem Solving

After completing recursion, the session shifted towards **Algorithm Design**, where we explored two of the most fundamental operations performed on data structures:

- **Searching**
- **Sorting**

These algorithms are the foundation of almost every software application, from search engines and databases to e-commerce platforms and operating systems.

The instructor explained that whenever data is stored in memory, developers generally perform one or more of the following operations:

- Search for a specific element.
- Sort the data according to a criterion.
- Filter records based on user preferences.
- Insert or delete data.
- Update existing records.

Understanding these basic algorithms is essential because more advanced data structures and optimization techniques build upon these same principles.

---


## 5️⃣ Linear Search Algorithm

The first algorithm discussed was **Linear Search**, also known as **Sequential Search**. It is one of the simplest searching techniques in computer science and is suitable for small or unsorted datasets.

The basic idea behind Linear Search is straightforward:

- Start from the first element.
- Compare it with the target value.
- If the values match, stop searching.
- Otherwise, continue comparing until either the element is found or the entire collection has been traversed.

Since every element may need to be inspected, the worst-case time complexity is **O(n)**.

---

### Basic Algorithm

```
Start

↓

Take the first element

↓

Compare with target

↓

Found?

 ├── Yes → Return Result
 │
 └── No
      ↓
Move to next element

↓

Repeat until list ends

↓

Not Found
```

---

### Time Complexity Analysis

| Case | Complexity |
|------|------------|
| Best Case | O(1) |
| Average Case | O(n) |
| Worst Case | O(n) |

---

## 6️⃣ Different Implementations of Linear Search in Python

Instead of learning only one implementation, today's session demonstrated multiple ways of writing the same search algorithm using different Python features.

This highlighted Python's flexibility in function design and parameter passing.

---

### Method 1 — Traditional Function

The simplest implementation accepts a list and the value to be searched.

```python
def search(numbers, number_to_search):
    for num in numbers:
        print(f"Comparing: {num} with {number_to_search}")

        if num == number_to_search:
            print(f"Number found: {num}")
            break
        else:
            print("Not found")


search([10,20,30,40,50],
       int(input("Enter Number to Search: ")))
```

---

### Sample CLI Output

```text
Enter Number to Search: 30

Comparing: 10 with 30
Not found

Comparing: 20 with 30
Not found

Comparing: 30 with 30
Number found: 30
```

---

### Method 2 — Using Variable-Length Positional Arguments (`*args`)

The instructor then introduced Python's `*args`, which allows a function to accept **any number of positional arguments**.

Instead of passing an entire list, individual numbers can be supplied directly.

```python
def search(*numbers, number_to_search):

    for num in numbers:

        print(f"Comparing: {num} with {number_to_search}")

        if num == number_to_search:
            print(f"Number found: {num}")
            break
        else:
            print("Not found")


search(10,20,30,40,50,number_to_search=int(input("Enter Number to Search: ")))
```

---

### Sample CLI Output

```text
Enter Number to Search: 40

Comparing: 10 with 40
Not found

Comparing: 20 with 40
Not found

Comparing: 30 with 40
Not found

Comparing: 40 with 40
Number found: 40
```

---

### Method 3 — Using Keyword Arguments (`**kwargs`)

Finally, the search algorithm was implemented using `**kwargs`, where the search key is passed as a keyword argument.

This approach demonstrates how Python stores keyword arguments inside a dictionary.

```python
def search(*numbers, **number_to_search):

    for number in numbers:

        print(
            "Comparing:",
            number,
            "with",
            number_to_search["key"]
        )

        if number == number_to_search["key"]:
            print(f"Number found: {number}")
            break
        else:
            print("Not found")


search(10,20,30,40,50,key=int(input("Enter Number to Search: ")))
```

---

### Sample CLI Output

```text
Enter Number to Search: 50

Comparing: 10 with 50
Not found

Comparing: 20 with 50
Not found

Comparing: 30 with 50
Not found

Comparing: 40 with 50
Not found

Comparing: 50 with 50
Number found: 50
```

---

### Understanding the Three Approaches

| Implementation | Purpose | Advantage |
|---------------|---------|-----------|
| Normal Function | Accepts a list as input | Easy to understand and commonly used |
| `*args` | Accepts multiple positional arguments | Flexible number of inputs without creating a list |
| `**kwargs` | Accepts keyword arguments as a dictionary | Useful when functions require named parameters and configurable inputs |

---

> [!NOTE]
> Although the syntax changes between these implementations, the underlying **Linear Search algorithm remains exactly the same**. Only the way data is passed into the function changes, demonstrating Python's versatility in handling function parameters.

---


## 7️⃣ Bubble Sort Algorithm

After understanding searching techniques, the session moved towards **Sorting Algorithms**, beginning with one of the simplest comparison-based sorting techniques—**Bubble Sort**.

Sorting is the process of arranging data in a specific order, such as:

- Ascending Order
- Descending Order
- Alphabetical Order
- Chronological Order

Efficient sorting improves searching performance and simplifies data processing in real-world software systems.

Bubble Sort repeatedly compares **adjacent elements** and swaps them whenever they are in the wrong order. After each complete pass through the list, the largest unsorted element "bubbles up" to its correct position, which gives the algorithm its name.

---

### Bubble Sort Algorithm

```
Pass 1

Compare

A[0] ↔ A[1]

↓

Swap if needed

↓

A[1] ↔ A[2]

↓

Swap if needed

↓

Continue until end

↓

Largest element reaches last position

------------------------------------

Pass 2

Repeat for remaining elements

------------------------------------

Continue

↓

List becomes completely sorted
```

---

### Classroom Implementation

```python
def sort(data):

    for i in range(len(data)):

        for j in range(len(data)-1-i):

            print(
                "i:", i,
                "j:", j,
                "| data[j]:", data[j],
                "data[j+1]:", data[j+1]
            )

            if data[j] > data[j+1]:

                c = data[j]
                data[j] = data[j+1]
                data[j+1] = c

                print(
                    "Swapped:",
                    data[j],
                    data[j+1]
                )

        print()


numbers = [10,20,30,5,15]

sort(numbers)

print("Numbers:", numbers)
```

---

### Sample CLI Output

```text
i: 0 j: 0 | data[j]: 10 data[j+1]: 20
i: 0 j: 1 | data[j]: 20 data[j+1]: 30
i: 0 j: 2 | data[j]: 30 data[j+1]: 5
Swapped: 5 30
i: 0 j: 3 | data[j]: 30 data[j+1]: 15
Swapped: 15 30

i: 1 j: 0 | data[j]: 10 data[j+1]: 20
i: 1 j: 1 | data[j]: 20 data[j+1]: 5
Swapped: 5 20
i: 1 j: 2 | data[j]: 20 data[j+1]: 15
Swapped: 15 20

...

Numbers: [5, 10, 15, 20, 30]
```

---

### Why is `len(data)-1-i` Used?

One of the important implementation details discussed during the session was the expression:

```python
range(len(data)-1-i)
```

Each part has a specific purpose.

| Expression | Reason |
|------------|--------|
| `len(data)` | Total number of elements in the list. |
| `-1` | Prevents accessing an index beyond the list boundary while comparing `data[j]` and `data[j+1]`. |
| `-i` | After every pass, the largest element reaches its correct position, so that portion of the list no longer needs to be compared. |

As the outer loop (`i`) increases, the inner loop automatically performs fewer comparisons, reducing unnecessary work.

---

### Bubble Sort Visualization

Initial List

```
[10, 20, 30, 5, 15]
```

After Pass 1

```
[10, 20, 5, 15, 30]
```

After Pass 2

```
[10, 5, 15, 20, 30]
```

After Pass 3

```
[5, 10, 15, 20, 30]
```

After Pass 4

```
[5, 10, 15, 20, 30]
```

Sorted List

```
[5, 10, 15, 20, 30]
```

---

### Complexity Analysis

| Case | Time Complexity |
|------|-----------------|
| Best Case *(Optimized Version)* | O(n) |
| Average Case | O(n²) |
| Worst Case | O(n²) |
| Space Complexity | O(1) |

---

> [!TIP]
> Bubble Sort is easy to understand and ideal for learning comparison-based sorting. However, due to its quadratic time complexity, it is generally inefficient for large datasets. In practical applications, algorithms such as **Merge Sort**, **Quick Sort**, or Python's built-in **Timsort** are preferred.

---

## 8️⃣ Mini Project – Flight Management System

To apply searching and sorting concepts in a practical scenario, we began building a **Flight Management System** using Python.

Instead of working with simple lists of integers, the project introduced a **list of dictionaries**, where each dictionary represented the details of a flight.

This exercise demonstrated how real-world applications organize structured information and perform operations such as:

- Searching flights by flight code.
- Sorting flights based on fare or duration.
- Filtering flights according to user preferences.
- Managing multiple records efficiently.

---

### Flight Dataset

Each flight record stores multiple attributes.

```python
flight = {
    "code": "AI1236",
    "carrier": "airindia",
    "source": "delhi",
    "destination": "bengaluru",
    "fare": 3000,
    "duration": 3
}
```

Multiple flight dictionaries are stored inside a single list.

```python
flights = [
    flight1,
    flight2,
    flight3,
    flight4,
    flight5
]
```

This structure allows each flight to be treated as an individual object while still enabling iteration over the complete dataset.

---

### Operations Planned

The instructor discussed three core operations that would gradually build the Flight Management System:

1. **Search** a flight using its flight code.
2. **Sort** flights based on fare or duration.
3. **Filter** flights according to carrier or price range.

These operations closely resemble the backend logic used in airline booking platforms and travel websites, making this project an excellent real-world application of the searching and sorting algorithms learned during the session.

---


## 9️⃣ Implementing Flight Search

After creating the flight dataset, the first operation implemented was **searching a flight using its unique flight code**.

Each flight is represented as a dictionary containing information such as carrier, source, destination, fare, and duration. Since every flight has a unique flight code, it serves as an ideal key for searching.

The algorithm simply iterates through the list of flight dictionaries and compares each flight's code with the user-provided code.

If a matching record is found, the complete flight details are displayed. Otherwise, an appropriate message is shown.

---

### Classroom Implementation

```python
flight1 = {
    'code': '6E6673',
    'carrier': 'indigo',
    'source': 'delhi',
    'destination': 'bengaluru',
    'fare': 5000,
    'duration': 3.5
}

flight2 = {
    'code': 'AI1234',
    'carrier': 'airindia',
    'source': 'bengaluru',
    'destination': 'kolkata',
    'fare': 6000,
    'duration': 4.5
}

flight3 = {
    'code': '6E6675',
    'carrier': 'indigo',
    'source': 'chandigarh',
    'destination': 'kolkata',
    'fare': 7000,
    'duration': 5.5
}

flight4 = {
    'code': '6E6678',
    'carrier': 'indigo',
    'source': 'delhi',
    'destination': 'hyderabad',
    'fare': 4000,
    'duration': 2.5
}

flight5 = {
    'code': 'AI1236',
    'carrier': 'airindia',
    'source': 'delhi',
    'destination': 'bengaluru',
    'fare': 3000,
    'duration': 3
}

flights = [flight1, flight2, flight3, flight4, flight5]


def search(flights, code):

    for flight in flights:

        if flight['code'] == code:
            print(flight)
            break

    else:
        print("No matching flight found.")


def main():
    search(flights, "AI1236")


if __name__ == "__main__":
    main()
```

---

### Sample CLI Output

```text
{
 'code': 'AI1236',
 'carrier': 'airindia',
 'source': 'delhi',
 'destination': 'bengaluru',
 'fare': 3000,
 'duration': 3
}
```

---

### Algorithm Analysis

| Operation | Complexity |
|-----------|------------|
| Best Case | O(1) |
| Average Case | O(n) |
| Worst Case | O(n) |
| Space Complexity | O(1) |

Since the flight records are not sorted by flight code, each record may need to be examined before finding the desired flight.

---

## 🔧 Improving the Flight Sorting Implementation

During the session, we started implementing **sorting for flight records**, but the comparison logic remained incomplete because dictionaries cannot be compared directly using relational operators.

The classroom implementation attempted:

```python
if flights[j] > flights[j+1]:
```

However, this results in a **TypeError**, since Python cannot determine how two dictionaries should be compared.

Instead, we must compare a specific field, such as **fare** or **duration**.

---

### Improved Bubble Sort (Sorting by Fare)

```python
from session7E import flights


def sort(flights):

    for i in range(len(flights)):

        for j in range(len(flights) - 1 - i):

            if flights[j]["fare"] > flights[j + 1]["fare"]:

                flights[j], flights[j + 1] = (
                    flights[j + 1],
                    flights[j]
                )


sort(flights)

for flight in flights:

    print(flight)
    print("~" * 40)
```

---

### Sample CLI Output

```text
{
 'code': 'AI1236',
 'carrier': 'airindia',
 'source': 'delhi',
 'destination': 'bengaluru',
 'fare': 3000,
 'duration': 3
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

{
 'code': '6E6678',
 'carrier': 'indigo',
 'source': 'delhi',
 'destination': 'hyderabad',
 'fare': 4000,
 'duration': 2.5
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

{
 'code': '6E6673',
 'carrier': 'indigo',
 'source': 'delhi',
 'destination': 'bengaluru',
 'fare': 5000,
 'duration': 3.5
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

{
 'code': 'AI1234',
 'carrier': 'airindia',
 'source': 'bengaluru',
 'destination': 'kolkata',
 'fare': 6000,
 'duration': 4.5
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

{
 'code': '6E6675',
 'carrier': 'indigo',
 'source': 'chandigarh',
 'destination': 'kolkata',
 'fare': 7000,
 'duration': 5.5
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
```

---

### Why This Improvement Was Necessary

The original classroom code compared complete dictionaries, which Python does not support.

By explicitly comparing:

```python
flight["fare"]
```

we define the exact criterion for sorting.

Similarly, changing the comparison field allows sorting by different attributes:

```python
flight["duration"]
```

or

```python
flight["carrier"]
```

making the same Bubble Sort implementation reusable for multiple requirements.

---

> [!NOTE]
> This improvement preserves the Bubble Sort algorithm taught during class while adapting it to work correctly with real-world structured datasets consisting of dictionaries rather than primitive values.

---


## 🔍 Homework Implementation – Flight Filtering System

As a continuation of the Flight Management System, today's homework focused on implementing **filtering operations**. Unlike searching, which returns a single matching record, filtering retrieves **all records** satisfying a particular condition.

The objective was to allow users to filter available flights based on:

- Airline Carrier
- Fare (Price Range)

This exercise demonstrated how conditional statements and iteration can be combined to build user-driven filtering functionality commonly found in airline reservation systems and travel portals.

---

### Classroom Implementation

```python
flight1 = {
    'code': '6E6673',
    'carrier': 'indigo',
    'source': 'delhi',
    'destination': 'bengaluru',
    'fare': 5000,
    'duration': 3.5
}

flight2 = {
    'code': 'AI1234',
    'carrier': 'airindia',
    'source': 'bengaluru',
    'destination': 'kolkata',
    'fare': 6000,
    'duration': 4.5
}

flight3 = {
    'code': '6E6675',
    'carrier': 'indigo',
    'source': 'chandigarh',
    'destination': 'kolkata',
    'fare': 7000,
    'duration': 5.5
}

flight4 = {
    'code': '6E6678',
    'carrier': 'indigo',
    'source': 'delhi',
    'destination': 'hyderabad',
    'fare': 4000,
    'duration': 2.5
}

flight5 = {
    'code': 'AI1236',
    'carrier': 'airindia',
    'source': 'delhi',
    'destination': 'bengaluru',
    'fare': 3000,
    'duration': 3
}

flights = [
    flight1,
    flight2,
    flight3,
    flight4,
    flight5
]


def filter_carrier(flights, preference_carrier):

    for flight in flights:

        if flight["carrier"] == preference_carrier:
            print(flight)


def filter_fare(flights, preference_fare):

    for flight in flights:

        if flight["fare"] < preference_fare:
            print(flight)

        else:
            print(f"Below {preference_fare} fare, no flight is available")


preference_type = input(
    "Enter filter preference (fare or carrier): "
)

if preference_type == "carrier":

    preference_carrier = input(
        "Enter carrier preference (airindia, indigo): "
    )

    filter_carrier(flights, preference_carrier)

elif preference_type == "fare":

    preference_fare = int(
        input(
            "Enter price below which you are looking for a flight: "
        )
    )

    filter_fare(flights, preference_fare)

else:
    print("Invalid preference")
```

---

## 💻 CLI Output — Carrier Filter

### Input

```text
Enter filter preference (fare or carrier): carrier

Enter carrier preference (airindia, indigo): indigo
```

### Output

```text
{
 'code': '6E6673',
 'carrier': 'indigo',
 'source': 'delhi',
 'destination': 'bengaluru',
 'fare': 5000,
 'duration': 3.5
}

{
 'code': '6E6675',
 'carrier': 'indigo',
 'source': 'chandigarh',
 'destination': 'kolkata',
 'fare': 7000,
 'duration': 5.5
}

{
 'code': '6E6678',
 'carrier': 'indigo',
 'source': 'delhi',
 'destination': 'hyderabad',
 'fare': 4000,
 'duration': 2.5
}
```

---

## 💻 CLI Output — Fare Filter

### Input

```text
Enter filter preference (fare or carrier): fare

Enter price below which you are looking for a flight: 5000
```

### Output

```text
{
 'code': '6E6678',
 'carrier': 'indigo',
 'source': 'delhi',
 'destination': 'hyderabad',
 'fare': 4000,
 'duration': 2.5
}

{
 'code': 'AI1236',
 'carrier': 'airindia',
 'source': 'delhi',
 'destination': 'bengaluru',
 'fare': 3000,
 'duration': 3
}
```

---

## 💻 CLI Output — Invalid Preference

### Input

```text
Enter filter preference (fare or carrier): duration
```

### Output

```text
Invalid preference
```

---

## 📌 Observation on the Current Implementation

While implementing the homework, one small issue became apparent.

Inside the `filter_fare()` function, the message:

```text
Below <price> fare, no flight is available
```

is printed for **every flight that does not satisfy the condition**.

As a result, if multiple flights have fares above the specified amount, the same message is displayed repeatedly, making the output cluttered.

A more efficient implementation would:

- keep track of whether any matching flight was found,
- print all matching flights,
- display **"No flight found."** only once if no record satisfies the user's criteria.

This is a common optimization used in production software to improve the user experience.

---

# 💡 Important Concepts Learned

| Topic | Learning |
|--------|----------|
| Recursion | Solves problems by repeatedly calling the same function with a smaller input until reaching a base case. |
| Base Case | Prevents infinite recursion and terminates recursive execution. |
| Call Stack | Stores every recursive function invocation and returns results in LIFO order. |
| Linear Search | Sequentially compares each element until the target is found or the collection ends. |
| `*args` | Allows functions to accept any number of positional arguments. |
| `**kwargs` | Accepts named keyword arguments as a dictionary, increasing function flexibility. |
| Bubble Sort | Sorts data by repeatedly swapping adjacent elements into the correct order. |
| List of Dictionaries | Represents structured real-world records efficiently in Python. |
| Flight Search | Demonstrated searching records using a unique identifier. |
| Flight Sorting | Applied Bubble Sort to structured datasets by comparing dictionary fields. |
| Flight Filtering | Retrieved multiple records satisfying user-defined conditions. |

---

# 🌍 Real-World Applications

The concepts covered during today's session form the foundation of numerous software systems and are extensively used in both academia and industry.

### Recursion

Recursion is widely used in situations where a problem can naturally be divided into smaller sub-problems.

Applications include:

- File and directory traversal
- Tree and Graph traversals (DFS)
- Divide and Conquer algorithms
- Dynamic Programming
- Backtracking problems
- Parsing mathematical expressions
- Artificial Intelligence search techniques

---

### Linear Search

Although simple, Linear Search is still useful when:

- The dataset is small.
- Data is unsorted.
- Records are accessed sequentially.
- Quick implementation is preferred over optimization.

Common examples include:

- Searching contacts in a small phonebook
- Finding products in a temporary list
- Searching log files
- Searching configuration records

---

### Bubble Sort

Bubble Sort is rarely used in production for large datasets because of its quadratic time complexity. However, it remains valuable for:

- Learning sorting algorithms
- Educational demonstrations
- Small datasets
- Understanding comparison-based sorting techniques

---

### Flight Management Systems

The mini-project introduced today closely resembles the backend logic used in airline reservation systems.

Typical operations include:

- Searching flights by flight number
- Sorting flights by fare
- Sorting flights by duration
- Filtering by airline
- Filtering by price range
- Displaying matching records
- Managing structured datasets using dictionaries and lists

The same concepts can also be applied to:

- Railway Reservation Systems
- Hotel Booking Platforms
- E-commerce Product Catalogues
- Student Management Systems
- Employee Record Management
- Hospital Information Systems

---

# 📝 Personal Reflection

Today's session was highly practical because it connected fundamental programming concepts with real-world problem solving.

The introduction to **Recursion** helped me understand a completely different way of thinking about algorithms. Initially, recursive functions appear more complex than iterative solutions, but after analyzing the recursive execution flow and understanding the role of the **base case** and **call stack**, the logic became much clearer. I realized that recursion is not simply about a function calling itself—it is about reducing a problem into smaller, manageable sub-problems until a solution naturally emerges.

The discussion on **Linear Search** reinforced the importance of understanding algorithmic complexity. Although the implementation was simple, experimenting with standard parameters, `*args`, and `**kwargs` demonstrated how Python provides multiple approaches to designing flexible and reusable functions without changing the underlying algorithm.

Learning **Bubble Sort** further strengthened my understanding of nested loops and comparison-based sorting. Visualizing how the largest element moves to its correct position after every pass made the algorithm much easier to comprehend. Analyzing why the inner loop decreases after each iteration also helped me appreciate the optimization built into the algorithm.

The most interesting part of today's session was the **Flight Management System**. Instead of working with simple numerical lists, we worked with structured data represented as dictionaries inside a list. Implementing search, sorting, and filtering on real-world records demonstrated how these basic algorithms directly translate into practical software applications such as airline reservation systems, travel portals, and booking platforms.

Overall, today's class significantly improved my algorithmic thinking and showed how fundamental programming concepts serve as the building blocks for larger software systems. It also motivated me to practice more recursive problems and implement additional searching and sorting algorithms to strengthen my problem-solving skills.

---

# 📌 Key Takeaways

- Recursion solves complex problems by breaking them into smaller sub-problems.
- Every recursive function must contain a well-defined base case.
- The Call Stack stores recursive function calls until execution begins returning.
- Linear Search performs sequential comparisons and is suitable for small or unsorted datasets.
- Python's `*args` and `**kwargs` provide flexible ways of accepting function arguments.
- Bubble Sort repeatedly compares adjacent elements and swaps them until the collection becomes sorted.
- Bubble Sort gradually reduces unnecessary comparisons after every iteration.
- Lists of dictionaries provide an effective way to model structured real-world data.
- Searching, sorting, and filtering operations are core components of many software applications.
- Small improvements to classroom code can make programs more robust, reusable, and production-ready.

---

# 📖 Revision Notes

✔ Recursion Fundamentals

✔ Base Case vs Recursive Case

✔ Recursive Maximum Element Algorithm

✔ Recursive Product of List

✔ Stack Memory & Heap Memory

✔ Call Stack Execution

✔ Linear Search

✔ Function Parameters (`*args`, `**kwargs`)

✔ Bubble Sort Algorithm

✔ Bubble Sort Complexity

✔ Flight Search

✔ Flight Sorting

✔ Flight Filtering

✔ Algorithm Analysis

---

# ❓ Interview Questions

### Q1. What is recursion, and why is a base case important?

**Answer:**

Recursion is a programming technique in which a function calls itself to solve a smaller version of the same problem. The base case provides the terminating condition that prevents infinite recursive calls and ensures the algorithm eventually returns a result.

---

### Q2. Explain the difference between Stack Memory and Heap Memory.

**Answer:**

Stack Memory stores function calls, local variables, and execution context using the Last In, First Out (LIFO) principle. Heap Memory stores dynamically allocated objects and is managed automatically by Python's memory manager.

---

### Q3. What is the time complexity of Linear Search?

**Answer:**

- Best Case: **O(1)**
- Average Case: **O(n)**
- Worst Case: **O(n)**

---

### Q4. Why is Bubble Sort called "Bubble Sort"?

**Answer:**

Because during every pass, the largest unsorted element gradually moves—or "bubbles"—towards the end of the list through repeated adjacent swaps.

---

### Q5. What is the purpose of `*args` and `**kwargs` in Python?

**Answer:**

`*args` allows a function to accept any number of positional arguments, while `**kwargs` accepts keyword arguments as a dictionary, making functions more flexible and reusable.

---

### Q6. Why can't dictionaries be compared directly using `>` in Python?

**Answer:**

Dictionaries contain multiple key-value pairs and do not have a natural ordering. Therefore, comparisons such as `dict1 > dict2` are invalid. Instead, a specific field (for example, `fare` or `duration`) must be selected as the comparison criterion.

---

# 🎯 Goals for Next Session

- Practice additional recursion-based programming problems.
- Explore Binary Search and understand its advantages over Linear Search.
- Learn more efficient sorting algorithms such as Selection Sort and Insertion Sort.
- Improve the Flight Management System by adding advanced filtering and sorting options.
- Continue strengthening algorithmic thinking through hands-on coding practice.

---

# ✅ Today's Progress Checklist

- [x] Understood recursion and recursive thinking.
- [x] Implemented recursive algorithms.
- [x] Learned recursive maximum element computation.
- [x] Implemented recursive product calculation.
- [x] Understood Call Stack execution.
- [x] Learned Linear Search.
- [x] Explored `*args` and `**kwargs`.
- [x] Implemented Bubble Sort.
- [x] Understood Bubble Sort optimization.
- [x] Built Flight Search functionality.
- [x] Improved Flight Sorting implementation.
- [x] Implemented Flight Filtering homework.
- [x] Connected algorithms with real-world software systems.

---

> [!TIP]
> Mastering algorithms is not about memorizing code—it is about understanding the logic behind every step. Once the reasoning becomes clear, implementing the solution in any programming language becomes significantly easier.

---

**Status:** Completed ✅

**Training Day:** 7

**Maintained By:** Saksham Kumar