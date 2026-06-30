<!--
title: Python Memory Management, Sets, Dictionaries & Chessboard Implementation
date: 2026-06-29
tags: Python, Memory Management, Hashing, Sets, Dictionaries, id(), __name__, Modules, Iteration, Nested Loops, Unicode, Chessboard
summary: Day 4 focused on Python memory management, object identity using id(), Sets and Dictionaries, the __name__ variable, module imports, iterations, nested loops, Unicode, and implementing a complete chessboard using optimized Python techniques.
-->

# Agentic AI Training – Daily Diary

**Name:** Saksham Kumar  
**Course:** B.Tech Computer Science & Engineering  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS101 – Agentic AI Training II  
**Day:** 4  
**Date:** 29/06/2026

---

# Daily Training Record – Day 4

## Overview - Python Memory Management & Chessboard Implementation

The fourth day of training focused on understanding Python's internal memory management and how different data structures are stored in memory. The session began with the internal working of **Sets** and **Dictionaries**, explaining how hashing is used for efficient storage and retrieval of data.

Later, we learned how Python's `main()` function works, the purpose of `__name__`, and why module imports behave differently from direct execution. The practical portion of today's session covered iterations, nested loops, and concluded with implementing a complete Unicode Chessboard using Python.

---

# Topics Covered

- Set Memory Representation
- Hashing in Python
- List to Set Conversion
- Dictionary Memory Structure
- Object Identity using `id()`
- Shared Immutable Objects

---

# 1. Set and Dictionary in Memory

The session started with understanding how Python stores a **Set** internally.

Unlike a list, a set stores only **unique values**. Python internally uses **hashing** to organize the elements of a set. Because of hashing, elements are **not stored according to indexing** but according to their calculated hash value.

## Code

```python
numbers={10,20,30,40,50,10,20}
print(numbers, type(numbers), id(numbers))

# set will produce unique values
```

## Sample Output

```text
{40, 10, 50, 20, 30} <class 'set'> 248748273648
```

> **Note:** The order of elements and the value returned by `id()` may differ on every execution.

---

## Memory Representation

During the session, the trainer explained the internal representation of a set.

### Stack Memory

```
numbers
```

The variable `numbers` is stored inside the stack frame.

### Heap Memory

The actual **Set object** is created inside heap memory.

Each element

```
10
20
30
40
50
```

is stored inside its own value container.

Instead of storing values by their position, Python stores references according to

```
hash(x)
```

where `x` is the element.

---

## Key Points

- Sets automatically remove duplicate values.
- Sets are unordered collections.
- Storage is based on hashing.
- Elements are **not indexed** like lists.
- Lookup operations are extremely fast because of hashing.

---

## Observation

Even though the values

```python
10
20
```

were inserted twice, they appeared only once inside the set.

---

## Real-Life Analogy

Imagine an online shopping cart.

If you add the same product twice, the cart does not create another separate product card. Instead, it simply increases its quantity.

Similarly, a Python set stores only one copy of every unique value.

---

# 2. Converting a List into a Set

Next, we learned how an existing list can be converted into a set.

## Code

```python
numbers=[10,20,30,40,50,10,20]

data=set(numbers)

print(data, type(data), id(data))

# here set() will always create a new set container
# and the id will change
```

---

## Sample Output

```text
{40, 10, 50, 20, 30} <class 'set'> 248748991200
```

---

## Explanation

The function

```python
set()
```

creates an entirely **new object**.

Although the values are copied from the list, the resulting set occupies a completely different memory location.

Therefore,

```python
id(numbers)
```

and

```python
id(data)
```

are always different.

---

## Key Points

- `set()` always creates a new object.
- The original list remains unchanged.
- Duplicate values are removed automatically.
- The newly created set receives a new memory address.

---

## Real-Life Analogy

Suppose a shopping application stores products in a list.

```
Shoes
Shoes
Shoes
Watch
```

When converting this into a shopping summary, duplicate products become

```
Shoes × 3
Watch × 1
```

Similarly, Python stores only one unique copy inside a set.

---

# 3. Dictionary Memory Structure

The next concept introduced how dictionaries are organized internally.

Unlike lists, dictionaries store information in **Key → Value** pairs.

## Code

```python
product={
    'code': 101,
    'name': 'Ultraboost',
    'brand': 'Addidas',
    'price': 8000,
    'category': 'shoe'
}

print(product, type(product), id(product))

print(product['code'], type(product['code']), id(product['code']))
print(product['code'], type(product['code']), id(product['code']))
print(product['category'], type(product['category']), id(product['category']))

# every key of dict stores single value container

# same id as value container is same
print(product['brand'], type(product['brand']), id(product['brand']))

shoe_name='Addidas'

print(shoe_name, type(shoe_name), id(shoe_name))
```

---

## Sample Output

```text
{'code': 101, 'name': 'Ultraboost', 'brand': 'Addidas', 'price': 8000, 'category': 'shoe'}
<class 'dict'>

101 <class 'int'> 140728......
101 <class 'int'> 140728......
shoe <class 'str'> 140729......
Addidas <class 'str'> 140730......
Addidas <class 'str'> 140730......
```

---

## Internal Working

Dictionary storage follows the structure

```
Dictionary

↓

Keys

↓

Hash Codes

↓

Value Containers

↓

Actual Values
```

Each key is first hashed.

The hash points to a value container, and the value container stores the actual data.

---

## Important Observation

The following two variables

```python
product["brand"]
```

and

```python
shoe_name
```

have the **same object ID** because both reference the same immutable string object.

---

## Key Points

- Dictionaries use hashing internally.
- Keys must be hashable.
- Every key points to a value container.
- Immutable objects having identical values can share memory.
- `id()` helps verify object identity.

---

## Summary of Today's Learning (Part 1)

By the end of this section, I understood:

- How Python stores Sets internally.
- Why duplicate values disappear in Sets.
- How hashing helps in faster lookup.
- Why `set()` creates a new object.
- How dictionaries organize data using keys and hashes.
- Why immutable objects can share the same memory location.

---

---

# 4. Understanding the `main()` Function in Python

After understanding Python's memory management, the session shifted towards one of the most common questions beginners ask:

> **Does Python have a `main()` function like C, C++, or Java?**

The trainer first compared how different programming languages define their entry point.

## C Language

```c
void main(){

}
```

or

```c
int main(){

    return 0;
}
```

---

## Java

```java
class MyApp{

    public static void main(String[] args){

    }

}
```

Both C/C++ and Java automatically begin execution from their respective `main()` functions.

---

## Python

Unlike these languages, Python does **not** automatically execute a function simply because its name is `main`.

It behaves just like any other user-defined function.

## Code

```python
def main():
    print("Hello World")

# main()    # we have to call main function as it is not automatically called

print("Hello")

# alternative

if __name__ == '__main__':
    main()
```

---

## Output

```text
Hello
Hello World
```

---

## Explanation

When Python reaches

```python
print("Hello")
```

it immediately executes it because it is written in the global scope.

The function

```python
main()
```

is **not executed automatically**.

It executes only because we explicitly called it inside

```python
if __name__ == "__main__":
```

---

## Key Points

- Python has no compulsory `main()` function.
- `main()` is simply a user-defined function.
- Execution starts from the top of the file.
- Functions execute only after being called.
- The recommended practice is using

```python
if __name__ == "__main__":
```

---

## Observation

Unlike C or Java, Python gives the programmer complete freedom to decide how execution should begin.

---

# 5. Variables Inside `main()`

The trainer then explained where local variables are stored when a function executes.

## Code

```python
def main():
    a = 10
    b = [10,20,30]

    print(a, type(a), id(a))      # id(a): hex(), oct(), bin()
    print(b, type(b), bin(id(b)))

if __name__ == '__main__':
    main()
```

---

## Sample Output

```text
10 <class 'int'> 140722989838672
[10, 20, 30] <class 'list'> 0b111111011101011010101...
```

---

## Explanation

When the function

```python
main()
```

is called, Python creates a **stack frame**.

Inside this frame,

```
a
```

and

```
b
```

are local variables.

The actual objects remain inside heap memory, while the variables store references to those objects.

---

## Additional Learning

The trainer also explained that the object ID can be represented in different formats.

Instead of

```python
id(x)
```

we can also write

```python
hex(id(x))
```

or

```python
oct(id(x))
```

or

```python
bin(id(x))
```

---

## Key Points

- Local variables belong to the function stack frame.
- Objects remain inside heap memory.
- `id()` returns the memory address.
- The address can be displayed in
  - Decimal
  - Hexadecimal
  - Octal
  - Binary

---

## Observation

Only variables are created inside the function frame.

The actual data always resides in heap memory.

---

# 6. Does the Function Name Have to Be `main()`?

One interesting question discussed during the session was:

> **Can we rename `main()`?**

The answer is **Yes.**

Python does not reserve the name `main`.

Any function name can become the program's entry point.

---

## Code

```python
def main():     # def my_agent():

    a = 10
    b = [10,20,30]

    print(a, type(a), id(a))
    print(b, type(b), bin(id(b)))

if __name__ == '__main__':
    main()      # my_agent()
```

---

### Modified Version

```python
def my_agent():

    a = 10
    b = [10,20,30]

    print(a, type(a), id(a))
    print(b, type(b), bin(id(b)))

if __name__ == '__main__':
    my_agent()
```

---

## Output

```text
10 <class 'int'> ...
[10, 20, 30] <class 'list'> ...
```

(The output remains exactly the same.)

---

## Explanation

The name

```python
main()
```

has no special meaning for Python.

Python simply executes whichever function is explicitly called.

Therefore,

```python
main()
```

can easily become

```python
my_agent()
```

or

```python
start()
```

or any other valid function name.

---

## Key Points

- `main()` is not a keyword.
- It is only a naming convention.
- Any function can become the entry point.
- The function must be called explicitly.

---

# 7. Understanding `__name__`

This was one of the most important concepts of today's session.

Every Python file contains a built-in variable called

```python
__name__
```

Its value changes depending on **how the file is executed**.

---

### Case 1

When the file is executed directly,

```python
python app.py
```

then

```python
__name__
```

becomes

```python
"__main__"
```

---

### Case 2

When the same file is imported into another program,

```python
import app
```

then

```python
__name__
```

becomes

```python
"app"
```

(the module name)

---

## Why is this useful?

It allows us to separate

- reusable functions
- executable code

This prevents unwanted code execution while importing modules.

---

## Key Points

- Every Python file has a built-in variable called `__name__`.
- Direct execution → `"__main__"`
- Importing → Module name.
- Used to protect executable code.

---

# Summary of Part 2

By the end of this section, I learned:

- Why Python's `main()` differs from C/C++ and Java.
- How local variables are stored during function execution.
- How to display memory addresses in different formats.
- Why `main()` can be renamed.
- The purpose of the `__name__` variable.
- Why `if __name__ == "__main__":` is considered a best practice in Python.

---

---

# 8. Understanding Python Modules and Import Statements

After learning about `main()` and `__name__`, the trainer demonstrated how Python behaves when one file imports another.

This concept is extremely important because Python executes every statement present in a file unless it is protected using

```python
if __name__ == "__main__":
```

The demonstration was performed using two files:

```
session4D.py
```

and

```
session4E.py
```

---

# Scenario 1 – Importing a Python File Without `main()`

The first example showed what happens when a Python file contains only executable statements.

## session4D.py

```python
print("This is awesome")
print("Session 4D")
```

---

## session4E.py

```python
import session4D

print("This is awesome")
print("Session 4E")
```

---

## Output

```text
This is awesome
Session 4D
This is awesome
Session 4E
```

---

## Explanation

When

```python
import session4D
```

is executed, Python first opens the file

```
session4D.py
```

and executes every statement written outside any function.

Only after completing that file does Python continue executing the remaining statements inside

```
session4E.py
```

This is why the output of **both files** appears on the screen.

---

## Key Points

- Importing a module executes all top-level statements.
- Python executes the imported file before returning to the current file.
- Any statement written outside a function executes immediately.

---

## Observation

Simply importing a file is enough to execute all code written outside functions.

---

# Scenario 2 – Protecting Code Using `__name__`

To prevent automatic execution, the trainer modified `session4D.py`.

## session4D.py

```python
def main():
    print("This is awesome")
    print("Session 4D")

if __name__ == "__main__":
    main()
```

---

## session4E.py

```python
import session4D

print("This is awesome")
print("Session 4E")
```

---

## Output

```text
This is awesome
Session 4E
```

---

## Explanation

Although

```python
session4D
```

was imported, its

```python
main()
```

function did not execute.

This happened because

```python
__name__
```

inside

```
session4D.py
```

was no longer equal to

```python
"__main__"
```

Instead,

```python
__name__
```

became

```python
"session4D"
```

Therefore, the condition

```python
if __name__ == "__main__":
```

evaluated to **False**.

---

## Key Points

- Importing does not execute protected code.
- Only reusable functions become available.
- This is considered the standard way to organize Python projects.

---

## Observation

This mechanism allows Python modules to act both as standalone programs and reusable libraries.

---

# Scenario 3 – Calling `main()` of Another File

The trainer then showed that although importing does not execute the protected code, we can still call it manually.

## session4D.py

```python
print("Outside main of session4D")

def main():
    print("This is awesome")
    print("Session 4D")

if __name__ == "__main__":
    main()
```

---

## session4E.py

```python
import session4D

print("This is awesome")
print("Session 4E")

def main():
    print("Inside main of session4E")

if __name__ == "__main__":
    main()
    session4D.main()
```

---

## Output

```text
Outside main of session4D
This is awesome
Session 4E
Inside main of session4E
This is awesome
Session 4D
```

---

## Explanation

The following statement executes immediately during import:

```python
print("Outside main of session4D")
```

because it is outside the `main()` function.

However,

```python
main()
```

inside `session4D.py` does **not** execute automatically.

Later, when

```python
session4D.main()
```

is explicitly called, the function finally executes.

---

## Key Points

- Importing a module does not automatically call its protected `main()`.
- Functions inside imported modules can still be accessed.
- Functions are called using

```python
module_name.function_name()
```

Example:

```python
session4D.main()
```

---

## Summary

The three demonstrations clearly explained how Python imports work.

| Situation | Behaviour |
|-----------|-----------|
| Code outside `main()` | Executes during import |
| Code inside `main()` | Does not execute automatically |
| `module.main()` | Executes only when called |

---

# 9. Iterations and Loops

After understanding Python modules, the session moved towards one of the most fundamental programming concepts:

> **Iteration**

Iteration simply means repeating a task multiple times.

Instead of writing

```python
print(data[0])
print(data[1])
print(data[2])
...
```

we use loops.

---

## Code

```python
data=[10,20,30,40,50]

# without iteration

# print(data[0])
# print(data[1])
# print(data[2])
# print(data[3])
# print(data[4])

# loop -> iterate

# for each/ enhanced for loop
# read only loop

for number in data:
    print(number)

# start with 0 and go till 4 i.e. less than 5

for i in range(0,5):
    print(data[i])

# large list data

for i in range(0,len(data)):
    print(data[i])

# step

for i in range(0,len(data),2):
    print(data[i])
```

---

## Output

### For-Each Loop

```text
10
20
30
40
50
```

---

### Using `range(0,5)`

```text
10
20
30
40
50
```

---

### Using `len(data)`

```text
10
20
30
40
50
```

---

### Using Step Size

```text
10
30
50
```

---

## Explanation

The trainer introduced different ways of traversing a list.

### 1. Enhanced For Loop

```python
for number in data:
```

Directly returns every element.

No indexing is required.

---

### 2. Index-Based Loop

```python
for i in range(...)
```

Returns indexes.

Useful whenever element positions are required.

---

### 3. Step Size

```python
range(start, stop, step)
```

The third parameter skips elements.

Example:

```python
range(0,len(data),2)
```

prints every alternate element.

---

## Key Points

- `for each` is a read-only loop.
- `range()` generates index values.
- `len()` helps iterate dynamically.
- Step size skips elements.

---

# 10. Iterating Over Different Data Structures

The trainer explained that every collection is not traversed in the same way.

## Code

```python
num={10,20,30}

# for i in range(0,len(num)):
#     print(num[i])      # will not work on set

for i in num:
    print(i)

# in case of dict

# for key in dict:
#     print(key)

# for key in dict:
#     print(key, product[key])
```

---

## Sample Output

```text
10
20
30
```

(The order may vary because sets are unordered.)

---

## Explanation

Lists support indexing.

Sets do not.

Therefore,

```python
num[i]
```

is invalid for sets.

Instead, sets are traversed directly using

```python
for item in set
```

Similarly, dictionaries return **keys** during iteration.

---

## Key Points

- Lists → Indexed.
- Sets → Not indexed.
- Dictionaries → Iterate over keys by default.
- Use direct iteration for unordered collections.

---

## Summary of Part 3

By the end of this session, I understood:

- How Python imports another module.
- Why code outside `main()` executes automatically.
- Why `if __name__ == "__main__":` prevents unwanted execution.
- How to call functions from imported modules.
- Different methods of iteration.
- Difference between iterating over Lists, Sets and Dictionaries.

---
---

# 11. Nested Loops

After understanding iterations, the trainer introduced **Nested Loops**, where one loop is placed inside another loop.

Nested loops are commonly used for solving problems involving:

- Matrices
- Tables
- Patterns
- Chessboards
- Games
- Graph Algorithms

The trainer also briefly introduced the concept of **Time Complexity** while discussing nested loops.

---

## Code

```python
data=[10,20,30,40,50]

# for outer_index in range(0, 5, 1):

# O(n)
# O(n*n)

for outer_index in range(5):

    print(outer_index)
    print("-----------------")

    for inner_index in range(3):
        print(inner_index)

    print("------------------------")

# if O(n*n), optimise to half of it,
# this should be goal after creating solutions

# least time and space complexity
```

---

## Output

```text
0
-----------------
0
1
2
------------------------

1
-----------------
0
1
2
------------------------

2
-----------------
0
1
2
------------------------

3
-----------------
0
1
2
------------------------

4
-----------------
0
1
2
------------------------
```

---

## Explanation

A nested loop means that for **every iteration of the outer loop**, the inner loop executes completely.

Execution Flow

```
Outer Loop

0
    Inner Loop
    0
    1
    2

1
    Inner Loop
    0
    1
    2

2
    Inner Loop
    0
    1
    2
```

The inner loop restarts every time the outer loop moves to the next iteration.

---

## Time Complexity

The trainer briefly introduced algorithm complexity.

Examples discussed

```
Single Loop

O(n)
```

```
Nested Loop

O(n²)
```

---

### Important Advice from the Trainer

> Once a solution works, always try to optimise it.

The objective should always be

- Less Time Complexity
- Less Space Complexity

---

## Key Points

- Nested loops are loops inside another loop.
- Used extensively in pattern problems.
- Time complexity usually increases.
- Optimisation should always be considered after obtaining a correct solution.

---

# Practical Task – Print a Chessboard

The practical assignment of today's session was to generate a chessboard using Python.

Initially, numbers (`0` and `1`) were printed.

Later, they were replaced with Unicode squares and finally with chess pieces.

---

# Method 1

The first solution checked even and odd rows separately.

## Code

```python
for i in range(8):

    for j in range(8):

        if i%2==0 and j%2!=0:
            print(1,end=" ")

        elif i%2!=0 and j%2==0:
            print(1,end=" ")

        else:
            print(0,end=" ")

    print()
```

---

## Output

```text
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
```

---

## Explanation

The program separately checks

- Even Rows
- Odd Rows

and then decides which value to print.

Although correct, this solution contains multiple conditions.

---

# Method 2

The same chessboard was generated using another conditional arrangement.

## Code

```python
for i in range(8):

    for j in range(8):

        if i%2==0 and j%2==0:
            print(0,end=" ")

        elif i%2!=0 and j%2!=0:
            print(0,end=" ")

        else:
            print(1,end=" ")

    print()
```

---

## Output

```text
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
```

---

## Observation

The output remained exactly the same.

Only the conditions changed.

---

# Method 3 (Optimised Solution)

Finally, the trainer introduced a much shorter and cleaner solution.

Instead of checking multiple conditions,

we simply check

```
(i + j) % 2
```

---

## Code

```python
for i in range(8):

    for j in range(8):

        if (i+j)%2==0:
            print(0,end=" ")

        else:
            print(1,end=" ")

    print()
```

---

## Output

```text
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
0 1 0 1 0 1 0 1
1 0 1 0 1 0 1 0
```

---

## Why This Method is Better

Instead of writing four separate conditions,

only one mathematical condition is needed.

```
(i+j)%2==0
```

This solution is

- Cleaner
- Easier to understand
- Easier to maintain

---

## Key Learning

Multiple conditions can often be simplified into one mathematical expression.

This is an example of writing cleaner code.

---

# Using Unicode Squares

After generating the chessboard using numbers,

the trainer replaced them with Unicode square characters.

---

## Unicode Characters

```
Black Square

\u25A0
```

```
White Square

\u25A1
```

---

## Code

```python
for i in range(8):

    for j in range(8):

        if i%2==0 and j%2==0:
            print("\u25A0",end=" ")

        elif i%2!=0 and j%2!=0:
            print("\u25A0",end=" ")

        else:
            print("\u25A1",end=" ")

    print()
```

---

## Output

```text
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
```

---

## Key Points

- Unicode allows printing graphical symbols directly.
- Python supports Unicode using escape sequences.
- This makes console applications much more interactive.

---

# Placing Pawns on the Chessboard

The next improvement was to place the pawns on the board.

---

## Unicode Characters

```
White Pawn

\u2659
```

```
Black Pawn

\u265F
```

---

## Code

```python
for i in range(8):

    for j in range(8):

        if i==1:
            print("\u2659",end=" ")

        elif i==6:
            print("\u265F",end=" ")

        elif (i+j)%2==0:
            print("\u25A0",end=" ")

        else:
            print("\u25A1",end=" ")

    print()
```

---

## Output

```text
■ □ ■ □ ■ □ ■ □
♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟
□ ■ □ ■ □ ■ □ ■
```

---

## Observation

The chessboard now looked much closer to an actual chessboard.

Only the remaining pieces were left to be added.

---

## Homework

The trainer assigned the following homework:

> Complete the entire chessboard by placing all remaining chess pieces.

The complete solution would include

- King
- Queen
- Bishop
- Knight
- Rook
- Pawn

using dictionaries and nested loops.

---

## Summary of Part 4

Today's practical session demonstrated how a simple nested loop can gradually evolve into a real-world application.

Starting from basic number patterns, we progressively enhanced the program by introducing mathematical optimisation, Unicode characters, and finally chess pieces. This exercise reinforced several Python concepts together, including loops, conditions, dictionaries, Unicode handling, and logical thinking.

---
---

# 12. Homework – Complete Unicode Chessboard

The final task assigned during today's training was to complete the entire chessboard by placing every chess piece in its correct position.

Unlike the previous examples, this implementation combined multiple concepts learned throughout the day, including:

- Dictionaries
- Nested Loops
- Conditional Statements
- Unicode Characters
- Pattern Logic

This assignment demonstrated how small programming concepts can be integrated to solve a real-world problem.

---

## Step 1 – Creating Dictionaries for Chess Pieces

Instead of directly printing Unicode characters everywhere, dictionaries were created for both white and black pieces.

### Code

```python
# white pieces
white={
    'pawn':"\u2659",
    'knight': "\u2658",
    'bishop': "\u2657",
    'rook': "\u2656",
    'queen': "\u2655",
    'king': "\u2654",
}

black={
    'pawn':"\u265F",
    'knight': "\u265E",
    'bishop': "\u265D",
    'rook': "\u265C",
    'queen': "\u265B",
    'king': "\u265A",
}

black_sq="\u25A0"
white_sq="\u25A1"
```

---

## Explanation

Two dictionaries were created.

One dictionary stores all **White Chess Pieces** while the other stores all **Black Chess Pieces**.

Instead of remembering every Unicode value, pieces can now be accessed using meaningful keys like

```python
white["king"]
```

or

```python
black["queen"]
```

This makes the code much more readable and easier to maintain.

---

## Key Points

- Dictionaries improve code readability.
- Unicode values are stored only once.
- Any chess piece can be accessed using its key.

---

# Step 2 – Printing the Complete Chessboard

The entire board was generated using two nested loops.

The outer loop represented **rows**, while the inner loop represented **columns**.

Different conditions were then used to determine whether to print

- Black Pieces
- White Pieces
- Black Square
- White Square

---

## Complete Code

```python
for outer in range(8):
    for inner in range(8):

        # black

        if outer==1:
            print(black["pawn"], end=" ")

        elif outer==0 and (inner==0 or inner==7):
            print(black["rook"], end=" ")

        elif outer==0 and (inner==1 or inner==6):
            print(black["knight"], end=" ")

        elif outer==0 and (inner==2 or inner==5):
            print(black["bishop"], end=" ")

        elif outer==0 and inner==3:
            print(black["queen"], end=" ")

        elif outer==0 and inner==4:
            print(black["king"], end=" ")

        # white

        elif outer==6:
            print(white["pawn"], end=" ")

        elif outer==7 and (inner==0 or inner==7):
            print(white["rook"], end=" ")

        elif outer==7 and (inner==1 or inner==6):
            print(white["knight"], end=" ")

        elif outer==7 and (inner==2 or inner==5):
            print(white["bishop"], end=" ")

        elif outer==7 and inner==3:
            print(white["queen"], end=" ")

        elif outer==7 and inner==4:
            print(white["king"], end=" ")

        elif (outer+inner)%2==0:
            print(black_sq, end=" ")

        else:
            print(white_sq, end=" ")

    print()
```

---

## Output

```text
♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜
♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖
```
---

## Explanation

The program first checks whether the current row belongs to the black pieces.

If yes, the corresponding chess piece is printed.

Next, it checks whether the row belongs to the white pieces.

If neither condition is true, it prints either a black square or a white square based on

```python
(outer + inner) % 2
```

This creates the alternating chessboard pattern.

---

---

# Alternate Solution (Method 2) – Using Lists to Store Major Chess Pieces

After completing the chessboard using multiple conditional statements, an alternate and more optimized solution was introduced.

Instead of checking every major chess piece individually using several `if-elif` conditions, the major pieces were first arranged inside two lists:

- `black_row`
- `white_row`

The program then used the column index (`inner`) to access the correct chess piece directly from the list.

This approach makes the code **shorter**, **cleaner**, and **easier to maintain**.

---

## Why Use Lists Here?

The arrangement of major chess pieces is fixed.

```
Rook → Knight → Bishop → Queen → King → Bishop → Knight → Rook
```

Since this order never changes, storing it inside a list allows us to retrieve the correct piece simply by using the column index.

For example,

```
inner = 0  → Rook
inner = 1  → Knight
inner = 2  → Bishop
...
inner = 7  → Rook
```

This completely removes the need for multiple conditional statements.

---

## Code

```python
white={
    'pawn':"\u2659",
    'knight': "\u2658",
    'bishop': "\u2657",
    'rook': "\u2656",
    'queen': "\u2655",
    'king': "\u2654",
}
black={
    'pawn':"\u265F",
    'knight': "\u265E",
    'bishop': "\u265D",
    'rook': "\u265C",
    'queen': "\u265B",
    'king': "\u265A",
}
black_sq="\u25A0"
white_sq="\u25A1"

black_row=[
    black["rook"],
    black["knight"],
    black["bishop"],
    black["queen"],
    black["king"],
    black["bishop"],
    black["knight"],
    black["rook"]
]

white_row=[
    white["rook"],
    white["knight"],
    white["bishop"],
    white["queen"],
    white["king"],
    white["bishop"],
    white["knight"],
    white["rook"]
]

for outer in range(8):
    for inner in range(8):

        if outer==0:
            print(black_row[inner], end=" ")

        elif outer==1:
            print(black["pawn"], end=" ")

        elif outer==6:
            print(white["pawn"], end=" ")

        elif outer==7:
            print(white_row[inner], end=' ')

        # blank spaces
        elif (outer+inner)%2==0:
            print(black_sq, end=" ")

        else:
            print(white_sq, end=" ")

    print()
```

---

## Output

```text
♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜
♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
■ □ ■ □ ■ □ ■ □
□ ■ □ ■ □ ■ □ ■
♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙
♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖
```

---

## Explanation

Two lists, `black_row` and `white_row`, were created to store the arrangement of the major chess pieces.

When the program reaches the first or last row of the chessboard, it simply prints the element at the current column index.

For example,

```python
black_row[0]
```

prints the black rook, while

```python
black_row[3]
```

prints the black queen.

Similarly,

```python
white_row[4]
```

prints the white king.

For the second and seventh rows, only pawns are printed, while the remaining rows display alternating black and white squares using the condition

```python
(outer + inner) % 2 == 0
```

---

## Advantages of This Approach

- Fewer `if-elif` conditions are required.
- The code becomes shorter and easier to understand.
- Major chess pieces are managed using lists, making the program more organized.
- If the arrangement ever changes, only the list needs to be updated instead of modifying multiple conditions.
- Demonstrates the effective use of both **lists** and **dictionaries** in a single program.

---

## Comparison with the Previous Method

| Previous Method | Alternate Method |
|-----------------|------------------|
| Multiple `if-elif` statements for each major piece | Uses two lists to store the complete arrangement |
| Longer code | More concise and readable |
| Piece positions checked individually | Pieces accessed directly using list indexing |
| Harder to maintain | Easier to modify and extend |

---

## Key Learnings

- Lists can be used to represent fixed sequences of data.
- List indexing can simplify complex conditional logic.
- Combining dictionaries with lists produces cleaner and more maintainable code.
- Choosing the right data structure can significantly improve code readability without changing the program's output.

---

### Observation

Although both implementations generate the exact same chessboard, this version is more elegant because it leverages Python's data structures effectively instead of relying on numerous conditional statements.

---

## Concepts Used

Throughout this single assignment, the following concepts were applied together:

- Variables
- Dictionaries
- Unicode Characters
- Nested Loops
- Conditional Statements
- Hash Lookup in Dictionary
- Pattern Generation
- Mathematical Conditions

This exercise served as an excellent revision of all concepts learned during the session.

---

# Overall Learning Outcomes

By the end of Day 4, I was able to understand:

- How Python stores Sets using hashing.
- Why duplicate values are removed automatically from Sets.
- How Dictionaries internally organize data.
- The significance of object identity using `id()`.
- How Python manages memory through Stack and Heap.
- The purpose of the `main()` function in Python.
- Why `if __name__ == "__main__"` is considered best practice.
- How importing modules works.
- Different methods of iterating through Lists, Sets, and Dictionaries.
- The concept of Nested Loops.
- Basic introduction to Time Complexity.
- Pattern generation using mathematical logic.
- Using Unicode characters inside Python.
- Combining multiple concepts into a real-world program.

---

# Key Takeaways

✅ Understood Hashing in Python.

✅ Learned internal memory representation of Sets.

✅ Explored Dictionary storage mechanism.

✅ Learned object identity using `id()`.

✅ Practiced writing reusable Python programs.

✅ Understood the importance of `__name__`.

✅ Learned module importing behaviour.

✅ Practiced different looping techniques.

✅ Introduced to algorithm optimisation.

✅ Created a complete Unicode Chessboard.

---

# Personal Reflection

Today's session was one of the most practical and concept-oriented classes so far. Rather than focusing only on syntax, we explored how Python manages data internally using hashing and memory references. Understanding the relationship between the stack, heap, object identity, and immutable objects provided a deeper insight into Python's working.

The chessboard assignment was particularly engaging because it combined almost every concept covered during the day. Starting from simple loops and progressing to a fully functional Unicode chessboard demonstrated how small programming concepts can be integrated to build meaningful applications. Completing this assignment strengthened my confidence in working with dictionaries, nested loops, and conditional logic.

---

# Tomorrow's Learning Plan

As discussed by the trainer, the next session will focus on:

- Operators
- Conditional Statements
- Searching Algorithms
- Sorting Algorithms
- Filtering Techniques

These topics will help in building stronger problem-solving skills and prepare the foundation for implementing real-world algorithms.

---

# End of Day 4

> **"Understanding how a language works internally is just as important as learning its syntax. Today's session transformed simple Python statements into a deeper understanding of memory, execution flow, and logical problem solving."**
