
<!--
type: training-diary
training: TRCS101 - Agentic AI Training II
day: 5
date: 30/06/2026
title: Python Operators, Bitwise Operations and Conditional Constructs
description: Learned Python operators, bitwise and shift operations, conditional constructs, authentication systems, promo code validation, and controller-based problem solving through practical implementations.
tags:
- python
- operators
- arithmetic-operators
- assignment-operators
- comparison-operators
- logical-operators
- membership-operators
- bitwise-operators
- shift-operators
- conditional-statements
- nested-if
- authentication
- promo-code-system
- problem-solving
- beginner
reading-time: 15 min
completed: true
next: Day 6
-->
# Agentic AI Training – Daily Diary

**Name:** Saksham Kumar\
**Course:** B.Tech Computer Science & Engineering\
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana\
**Training Program:** Agentic AI Training (TRCS101)\
**Day:** 5\
**Date:** 30 June 2026

---

# Daily Training Record – Day 5

## Overview

The fifth day of the Agentic AI Training program focused on one of the most fundamental concepts in programming—**Operators and Conditional Constructs**. These concepts form the backbone of decision-making in software applications and are used extensively in real-world systems such as authentication platforms, payment gateways, navigation systems, and cybersecurity applications.

The session began with a brief discussion on the learning progression from **Model → View → Conditional**, where the instructor emphasized that the **Conditional** level is one of the most challenging stages for beginners. Since conditional thinking is essential for solving logical programming problems, students were advised to solve **at least three conditional programming problems every day** throughout their engineering journey. This consistent practice would gradually improve logical reasoning and problem-solving skills.

The class then explored the different categories of Python operators, including arithmetic, assignment, comparison, membership, logical, and bitwise operators. Each operator was explained with practical coding examples and real-world scenarios to demonstrate where these concepts are used in modern software development.

Special emphasis was placed on **Bitwise Operators** and **Shift Operations**, where their importance in encryption, decryption, and information security was discussed. The instructor also explained how technologies such as **Assisted GPS (A-GPS)** in smartphones make use of efficient low-level operations to improve navigation performance.

The latter half of the session introduced **Conditional Constructs** in Python, covering various decision-making structures such as `if`, `if-else`, `if-elif-else`, and nested `if` statements. Multiple real-world examples—including login authentication systems and promotional coupon validation—were implemented to demonstrate how conditional logic is applied in practical software systems.

Overall, the session provided a strong foundation in logical programming by connecting theoretical concepts with practical implementations, enabling students to understand not only **how** these constructs work but also **where** and **why** they are used in real-world applications.

---

## Learning Objectives

By the end of this session, I was able to:

* Understand the transition from Model to View and finally to Conditional programming.
* Learn the importance of regular practice for mastering conditional logic.
* Study different categories of Python operators and their practical applications.
* Differentiate between arithmetic, assignment, comparison, membership, logical, and bitwise operators.
* Understand Python's dynamic memory allocation and compare it with static memory allocation.
* Learn Python naming conventions such as **snake_case** and compare them with **camelCase**.
* Understand binary operations and the working of bitwise and shift operators.
* Explore the role of shift operations in encryption and decryption techniques.
* Implement decision-making using various conditional constructs.
* Develop practical programs such as login authentication and promotional coupon validation systems.
* Strengthen logical thinking required for solving controller-based programming problems.

---

# Model → View → Conditional

The instructor began the session by revisiting the programming learning roadmap discussed in the previous classes:

```
Model  →  View  →  Conditional
```

The primary focus of Day 5 was the **Conditional** stage, which serves as the foundation of logical programming. During the discussion, the instructor mentioned that this is one of the most challenging topics for beginners because it requires a programmer to think logically rather than simply write syntax.

A very important piece of advice shared during the session was:

> **Solve at least three conditional problems every day throughout your engineering journey.**

According to the instructor, consistent practice develops logical thinking and helps students become comfortable with writing decision-making algorithms. Over time, this habit significantly improves coding interviews, competitive programming performance, and software development skills.

---

# Operators

Before introducing conditional statements, the instructor explained that every condition is built using **operators**. Operators perform various operations on data and are essential for arithmetic calculations, comparisons, logical decisions, memory manipulation, and even cybersecurity-related applications.

Python provides several categories of operators:

* Arithmetic Operators
* Assignment Operators
* Comparison (Relational) Operators
* Membership Operators
* Logical Operators
* Bitwise Operators
* Shift Operators

Each category was discussed with practical examples to demonstrate its usage in real-world software systems.

---

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations on numerical values. These operators are among the most frequently used operators in programming because almost every software application performs some form of calculation.

The instructor demonstrated a simple **cab fare calculation**, where the total payable amount was calculated by adding GST to the original fare.

### Example Program

```python
# operators
# arithmetic: +, -, *, /, //, **
# assignment operator: =

cab_fare = 200
taxes = 0.18
amount_to_pay = cab_fare + cab_fare * taxes
print('amount to pay: ', amount_to_pay)

# snake_case : amount_to_pay (Python, JavaScript)
# camelCase : amountToPay (C++, Backend)

num1 = 10
num2 = 3

result = num1 / num2
print(result)

result_int = num1 // num2
print(result_int)

result_remainder = num1 % num2
print(result_remainder)

result_power = num1 ** num2
print(result_power)

# dynamic allocation
# int* number = new int(10)
# delete number

# Python performs dynamic memory allocation automatically.

# Static vs Dynamic Memory Allocation (Important Interview Question)
```

### Explanation

The following arithmetic operators were demonstrated:

| Operator | Purpose                 | Example             |
| -------- | ----------------------- | ------------------- |
| `+`      | Addition                | `10 + 5 = 15`       |
| `-`      | Subtraction             | `10 - 5 = 5`        |
| `*`      | Multiplication          | `10 * 5 = 50`       |
| `/`      | Floating-point Division | `10 / 3 = 3.333...` |
| `//`     | Floor Division          | `10 // 3 = 3`       |
| `%`      | Modulus (Remainder)     | `10 % 3 = 1`        |
| `**`     | Exponentiation          | `10 ** 3 = 1000`    |

---

## Naming Conventions

The instructor also explained commonly used variable naming conventions in programming languages.

### Snake Case

Snake case separates words using underscores.

Example:

```python
amount_to_pay
student_name
phone_number
```

Python and JavaScript developers commonly use this convention because it improves readability.

### Camel Case

Camel case starts with a lowercase letter, while every subsequent word begins with an uppercase letter.

Example:

```text
amountToPay
studentName
phoneNumber
```

Camel case is widely used in languages such as Java, C#, and in many backend frameworks.

---

## Static vs Dynamic Memory Allocation

During the discussion, the instructor compared Python's memory management with languages like C++.

In C++, memory often needs to be allocated and released manually using:

```cpp
int* number = new int(10);
delete number;
```

Failure to release allocated memory can result in **memory leaks**, making memory management an important responsibility for developers.

Python simplifies this process by performing **dynamic memory allocation** automatically. Objects are created dynamically when required, and unused memory is reclaimed through Python's garbage collection mechanism. This abstraction allows developers to focus more on application logic rather than manual memory management.

The instructor highlighted **Static vs Dynamic Memory Allocation** as an important interview topic that students should explore further.

---

## Assignment Operators

Assignment operators are used to assign values to variables and to update the existing value of a variable efficiently. Instead of writing long arithmetic expressions repeatedly, assignment operators combine arithmetic and assignment into a single operation, making the code cleaner and more readable.

The instructor demonstrated the following assignment operators:

* `=`
* `+=`
* `-=`
* `*=`
* `/=`
* `%=`

### Example Program

```python
# assignment operator: +=, -=, *=, /=, %=,

num1 = 10
num1 += 20      # num1 = num1 + 20

# No increment (++) and decrement (--) operators in Python

num2 = num1     # hashcode/reference of num1 is assigned to num2

num1 *= 2

print(num1)
print(num2)

# In a single-value container (immutable objects),
# modifying num1 does not modify num2.
```

### Explanation

Initially, `num1` stores the value `10`.

```python
num1 += 20
```

is internally interpreted as:

```python
num1 = num1 + 20
```

making the value of `num1` equal to `30`.

The next statement:

```python
num2 = num1
```

assigns the current value of `num1` to `num2`.

Afterward,

```python
num1 *= 2
```

updates only `num1`.

The output demonstrates that changing `num1` does not affect `num2` because integers in Python are **immutable objects**. When an immutable object is modified, Python creates a new object instead of changing the original one.

The instructor also mentioned that unlike languages such as C++, Java, and JavaScript, **Python does not provide increment (`++`) or decrement (`--`) operators**. Instead, compound assignment operators like `+=` and `-=` are used.

---

## Comparison (Relational) Operators

Comparison operators are used to compare two values. Every comparison produces a Boolean result, which is either:

* `True`
* `False`

These Boolean values become the foundation for writing conditional statements.

The operators discussed were:

| Operator | Meaning                  |
| -------- | ------------------------ |
| `<`      | Less than                |
| `>`      | Greater than             |
| `<=`     | Less than or equal to    |
| `>=`     | Greater than or equal to |
| `==`     | Equal to                 |
| `!=`     | Not equal to             |

The instructor emphasized that **conditional statements never return numbers—they always evaluate to either `True` or `False`.**

---

## Membership Operators

Membership operators determine whether a particular value exists inside a collection such as a list, tuple, string, or dictionary.

The operators covered were:

* `in`
* `not in`

### Example Program

```python
data = [10, 20, 30]

print(100 not in data)
```

### Explanation

The list contains only:

```
10
20
30
```

Since `100` is not present in the list,

```python
100 not in data
```

evaluates to:

```
True
```

Membership operators are frequently used for searching, validation, and access control in software applications.

---

## Identity Operators

The instructor also introduced **Identity Operators**, which compare the identity (memory reference) of two objects rather than their values.

The operators discussed were:

* `is`
* `is not`

### Example

```python
print(cab_fare is not wallet_amount)
```

Unlike the equality operator (`==`), which compares values, identity operators determine whether two variables refer to the **same object in memory**.

This distinction becomes particularly important while working with objects, lists, dictionaries, and custom classes.

---

## Logical Operators

Logical operators combine multiple conditions to produce a single Boolean result.

The following operators were discussed:

* `and`
* `or`

These operators are widely used in authentication systems, permission management, security mechanisms, and business logic.

### Example Program

```python
wallet_amount = 500
cab_fare = 300

print("Can I book the cab? :", (wallet_amount >= cab_fare))
```

Here, the comparison:

```python
wallet_amount >= cab_fare
```

returns:

```
True
```

because the available balance is sufficient to pay the fare.

---

### Real-World Example: GPS Navigation

The instructor explained that navigation applications require multiple conditions to be satisfied before providing directions.

```python
internet = True
gps = True

print("Can I navigate: ", internet and gps)
```

Both conditions must be `True`.

If either:

* Internet connectivity is unavailable, or
* GPS is disabled,

the navigation service cannot function properly.

This example demonstrated the practical use of the **logical AND (`and`)** operator.

---

### Real-World Example: Login Authentication

A login system generally requires both the email address and password to be correct.

```python
email = 'admin@example.com'
password = 'admin123'

user_email = input("Enter email to log in: ")
user_password = input("Enter password: ")

print(
    "Login success?: ",
    user_email == email and user_password == password
)
```

Here,

* the first condition verifies the email,
* the second verifies the password,

and the logical **AND** operator ensures that **both conditions must evaluate to `True`** before granting access.

---

## Additional Practical Examples Discussed

To connect programming concepts with real-life applications, the instructor shared several scenarios where conditional operators and logical decisions are commonly used.

### Face Recognition Systems

Modern payment applications increasingly use **face recognition** for authentication. Before approving a transaction, the system compares the captured facial data with the registered user's biometric information. Based on the comparison result (`True` or `False`), access is either granted or denied.

---

### Mobile Application Permissions

Whenever an application requests access to the microphone, camera, storage, or photo gallery, the operating system internally evaluates the user's response using conditional logic.

For example:

* Permission Granted → Access Allowed
* Permission Denied → Access Restricted

---

### Messaging Applications

Features such as:

* Seen
* Delivered
* Unread

are implemented using conditional statements. Depending on the message status and user activity, the application decides which indicator should be displayed to the user.

These examples illustrated how simple Boolean logic forms the basis of many everyday software systems.

---

# Bitwise Operators

After discussing the commonly used operators, the instructor introduced **Bitwise Operators**, one of the most powerful categories of operators in programming. Unlike arithmetic operators that work on decimal values, bitwise operators perform operations directly on the **binary representation (bits)** of integers.

Every integer stored in a computer's memory is represented using binary digits (`0` and `1`). Bitwise operators manipulate these bits individually, making them extremely fast and efficient. Because of this, they are widely used in operating systems, embedded systems, networking, graphics programming, compression algorithms, and cybersecurity.

The instructor emphasized an important question:

> **Why do we need Bitwise Operators?**

The answer lies in their efficiency. Since processors operate internally on binary data, bitwise operations require fewer computational resources than many arithmetic operations. They are commonly used whenever high performance or low-level hardware interaction is required.

The bitwise operators discussed during the session were:

* Bitwise AND (`&`)
* Bitwise OR (`|`)
* Bitwise XOR (`^`)
* Right Shift (`>>`)
* Left Shift (`<<`)

---

## Bitwise AND (`&`)

The AND operator compares corresponding bits of two numbers.

Rule:

| Bit 1 | Bit 2 | Result |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 0      |
| 1     | 0     | 0      |
| 1     | 1     | 1      |

Only when **both bits are 1** does the result become 1.

---

## Bitwise OR (`|`)

The OR operator compares corresponding bits.

Rule:

| Bit 1 | Bit 2 | Result |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 1      |
| 1     | 0     | 1      |
| 1     | 1     | 1      |

If either bit is **1**, the result becomes **1**.

---

## Bitwise XOR (`^`)

XOR stands for **Exclusive OR**.

Rule:

| Bit 1 | Bit 2 | Result |
| ----- | ----- | ------ |
| 0     | 0     | 0      |
| 0     | 1     | 1      |
| 1     | 0     | 1      |
| 1     | 1     | 0      |

The result is `1` only when the two bits are different.

---

## Example Program

```python
# bitwise operators: &, |, ^
# why bitwise operators are used and where they are used
# why we need these operators

num1 = 8      # 1 0 0 0
num2 = 4      # 0 1 0 0

result_and = num1 & num2
result_or  = num1 | num2
result_xor = num1 ^ num2

print("and:", result_and)
print("or :", result_or)
print("xor:", result_xor)
```

### Binary Calculation

The decimal values are first converted into binary.

```
8  = 00001000
4  = 00000100
```

### AND Operation

```
00001000
00000100
---------
00000000
```

Result:

```
0
```

---

### OR Operation

```
00001000
00000100
---------
00001100
```

Binary `00001100` equals:

```
12
```

---

### XOR Operation

```
00001000
00000100
---------
00001100
```

Since both numbers have different bits set at different positions, the XOR result is also:

```
12
```

---

# Shift Operators

The instructor then introduced **Shift Operators**, which move binary digits either towards the left or the right.

The two shift operators are:

* Right Shift (`>>`)
* Left Shift (`<<`)

Shift operations are computationally very efficient and are frequently used in:

* Encryption algorithms
* Decryption algorithms
* Data compression
* Embedded systems
* Networking
* Device drivers
* Performance optimization

The instructor specifically mentioned that **many security algorithms internally use shift and bitwise operations** because these operations are extremely fast and manipulate data at the binary level.

---

## Right Shift (`>>`)

A right shift moves every bit towards the right.

Every right shift by one position approximately divides the number by **2**.

### Example Program

```python
num3 = 8
num4 = 2

result_s1 = num3 >> num4

print(result_s1)
```

### Binary Explanation

Initial value:

```
8

00001000
```

Shift right by 2 positions:

```
00001000

↓

00000010
```

Binary:

```
00000010
```

Decimal:

```
2
```

Therefore,

```
8 >> 2 = 2
```

---

## Left Shift (`<<`)

A left shift moves every bit towards the left.

Every left shift by one position approximately multiplies the number by **2**.

### Example Program

```python
num3 = 8
num4 = 2

result_s2 = num3 << num4

print(result_s2)
```

### Binary Explanation

Original:

```
00001000
```

Shift left twice:

```
00100000
```

Binary:

```
00100000
```

Decimal:

```
32
```

Therefore,

```
8 << 2 = 32
```

---

## Data Transmission Example

The instructor demonstrated a simple example to show how data can be manipulated before transmission.

```python
data = 12
key = 2

send_data_to_fionna = data >> key

print("send_data_to_fionna", send_data_to_fionna)
```

Although this example is simplified for learning purposes, it illustrates how binary data can be transformed using shift operations before being transmitted or processed.

---

## Right Shift Example with Positive Number

```python
data = 11
data = 11 >> 3

print("result:", data)
```

### Step-by-Step Binary Calculation

Decimal:

```
11
```

Binary:

```
00001011
```

Right shift by three positions:

```
00001011

↓

00000001
```

Binary:

```
00000001
```

Decimal:

```
1
```

Therefore,

```
11 >> 3 = 1
```

---

## Right Shift Example with Negative Number

The instructor also demonstrated that shift operations behave differently with **negative numbers** because computers store signed integers using **Two's Complement Representation**.

```python
data = -13
data = (-13) >> 2

print("result:", data)
```

During the class, the complete binary calculation using two's complement representation was explained step by step to show how the sign bit is preserved during a right shift operation.

The final result obtained was:

```
-4
```

This example highlighted that shifting negative numbers is fundamentally different from shifting positive numbers because the sign bit is extended to preserve the number's sign.

---

# Real-World Applications of Shift Operators

To connect these concepts with practical software engineering, the instructor discussed several real-world applications.

### A-GPS (Assisted GPS)

Modern smartphones use **Assisted GPS (A-GPS)** to improve location accuracy and reduce the time required to determine the user's position.

Unlike traditional GPS, which relies solely on satellite communication, A-GPS combines satellite information with cellular network data. Low-level binary processing and efficient bit manipulation play an important role in processing navigation-related information quickly.

---

### Encryption and Decryption

One of the most important applications of shift operations is in **information security**.

Encryption algorithms frequently combine:

* Bitwise AND
* OR
* XOR
* Shift Operations

to transform plain data into encrypted data. During decryption, similar operations are applied in reverse to reconstruct the original information.

Although modern encryption algorithms are significantly more complex, these fundamental operations form some of their building blocks.

---

# Assignment for Self-Study

The instructor assigned students to explore modern cryptographic algorithms that make use of bitwise and shift operations.

The topics assigned were:

* AES (Advanced Encryption Standard)
* SHA-256
* Other security algorithms using bitwise and shift operations

This assignment aimed to help students understand how the low-level binary operations studied in class contribute to securing real-world digital communication and protecting sensitive information.

---

# Conditional Constructs

After completing the discussion on operators, the instructor introduced **Conditional Constructs**, one of the most important concepts in programming. Conditional statements allow a program to make decisions based on specific conditions. Almost every real-world application—from banking software to e-commerce platforms—uses conditional logic to determine the appropriate course of action.

The instructor emphasized that **proper use of conditional statements is the foundation of logical programming**, and mastering them is essential for becoming a good software developer.

The following conditional constructs were introduced during the session:

* `if`
* `if-else`
* `if-elif-else`
* Nested `if-else`

Another important point highlighted during the discussion was that **indentation is extremely important in Python**. Unlike many other programming languages that use braces (`{}`) to define code blocks, Python relies on consistent indentation. Incorrect indentation leads to syntax errors or unintended program behavior.

The instructor also referred students to his GitHub repository for learning how to write clean, readable, and effective Python code following good programming practices.

---

## The `if-else` Statement

The `if-else` statement is the simplest form of decision-making in Python. It evaluates a condition and executes one block of code if the condition is `True`; otherwise, it executes an alternative block.

### Example: Login Authentication System

The instructor demonstrated a basic login authentication system.

```python
# conditional constructs
# if else
# if elif else
# nested if else
# indentation is very important here

# link from sir repo to write effective code

email='admin@example.com'
password='admin123'

user_email=input("Ennter email to log in: ")
user_password= input("Enter password: ")

# normal usecase if else
# use in public domain
if user_email==email and user_password==password:
    print("Login is Successfull")
else:
    print("Invalid credentials, either email or password is incorrect")
```

### Explanation

The program stores the correct email address and password. It then asks the user to enter their login credentials.

The condition:

```python
user_email == email and user_password == password
```

checks whether both the email and password match the stored values.

If both conditions evaluate to `True`, the login is successful. Otherwise, a generic error message is displayed.

The instructor explained that this approach is commonly used in **public-facing applications**, where systems intentionally avoid revealing whether the email or password was incorrect. This prevents attackers from identifying valid user accounts and improves application security.

---

## Nested `if-else`

The instructor then demonstrated a more detailed authentication mechanism using **nested conditional statements**.

```python
# nested if-else
# better method so that we can tell user which is invalid
# use in protected environement

if user_email == email:
    if user_password==password:
        print("Login is success")
    else:
        print("Failed, invalid password")
else:
    print("Failed, invalid email")
```

### Explanation

Instead of checking both credentials together, this program first verifies the email address.

* If the email is incorrect, the program immediately informs the user that the email is invalid.
* If the email is correct, it proceeds to verify the password.
* If the password is also correct, login is successful.
* Otherwise, an "Invalid Password" message is displayed.

This layered verification process demonstrates the concept of **nested conditionals**, where one condition exists inside another.

---

## Choosing the Appropriate Conditional Structure

An important discussion during the session was not merely **how** to write conditional statements, but **when** to use a particular approach.

The instructor emphasized that different environments require different levels of information disclosure.

### Public Domain Applications

For applications that are accessible to the general public, such as social media platforms or public login portals, it is generally safer to display a generic error message such as:

```text
Invalid credentials.
```

This prevents malicious users from determining whether a particular email address is registered.

---

### Protected Environments

In internal enterprise applications, employee management systems, or other protected environments where users are already authenticated to some extent, more specific messages may improve usability.

For example:

* Invalid Email
* Invalid Password

Providing detailed feedback allows legitimate users to identify and correct their mistakes more easily.

The instructor stressed that **understanding the application's requirements is more important than simply knowing the syntax**. Selecting the appropriate conditional structure depends on the balance between **security**, **usability**, and **business requirements**.

---

## Key Learning

The login authentication examples demonstrated several important programming concepts simultaneously:

* Comparison operators
* Logical operators (`and`)
* Boolean expressions
* Conditional statements
* Nested conditional structures
* User input handling
* Decision-making based on multiple conditions

More importantly, these examples illustrated how relatively simple programming constructs can be combined to implement real-world authentication systems used in modern software applications.

---

# Practical Implementation: Promo Code Billing System

To demonstrate how multiple programming concepts work together in a real-world application, the instructor developed a **Promo Code Billing System** similar to those used by modern e-commerce platforms and food delivery applications.

This example combined several concepts learned during the session, including:

* Dictionaries
* Nested Dictionaries
* Membership Operators
* Arithmetic Operators
* Assignment Operators
* Conditional Statements
* Nested `if-else` Structures

Rather than hardcoding every discount individually, the instructor stored all promotional offers inside a dictionary, making the system scalable and easy to maintain.

---

## Program

```python
promo_codes={
    'BINGO':{
        'minimum_amount': 200,
        'discount': 0.50,
        'discount_upto': 200
    },
    'JUMBO':{
        'minimum_amount': 500,
        'discount': 0.30,
        'discount_upto': 0
    },
}

amount_in_cart= int(input("Enter amount: "))
promo_code = input("Enter promo code: ")

print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
print("You entered amount:", amount_in_cart)
print("you entered promo code:", promo_code)
print("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

if promo_code in promo_codes:
    print("Valid promo code:", promo_code)
    promo_code_rule=promo_codes[promo_code]
    print(promo_code_rule, type(promo_code_rule))

    if (amount_in_cart > promo_code_rule['minimum_amount']):
        print("Promo code can be applied successfully")

        if (promo_code_rule["discount_upto"]!=0):
            if (discount_calculated > promo_code_rule['discount_upto']):
                amount_to_pay = amount_in_cart - promo_code_rule['discount_upto']
            else:
                discount_calculated= (amount_in_cart*promo_code_rule['discount'])
                print("Discount Calculated: ₹", discount_calculated)
                amount_to_pay = amount_in_cart - discount_calculated
        else:
            discount_calculated= (amount_in_cart*promo_code_rule['discount'])
            print("Discount Calculated: ₹", discount_calculated)
            amount_to_pay = amount_in_cart - discount_calculated

        print("Promo code applied successfull")
        print("Please Pay: ₹", amount_to_pay)

    else:
        print("Promo code cannot be applied, enter items worth", promo_code_rule['minimum_amount'] - amount_in_cart, "more")


else:
    print("Invalid promo code")
```

---

## Understanding the Dictionary Structure

Instead of writing separate conditions for every promo code, all promotional offers were stored in a **nested dictionary**.

Each promo code contains three important pieces of information:

* **Minimum Purchase Amount** – the minimum cart value required to activate the offer.
* **Discount Percentage** – the percentage discount to be applied.
* **Discount Cap (`discount_upto`)** – the maximum discount allowed for that offer.

For example:

### BINGO

* Minimum Cart Value: ₹200
* Discount: 50%
* Maximum Discount: ₹200

### JUMBO

* Minimum Cart Value: ₹500
* Discount: 30%
* No upper discount limit (`discount_upto = 0`)

This approach makes the program highly maintainable. To introduce a new promotional offer, only another dictionary entry needs to be added without modifying the business logic.

---

## Step 1 – Reading User Input

The program first asks the customer to enter:

* Total cart amount
* Promo code

These values become the input for all subsequent validations.

---

## Step 2 – Promo Code Validation

The first validation checks whether the entered promo code actually exists.

```python
if promo_code in promo_codes:
```

This uses the **membership operator (`in`)** to search for the entered promo code within the dictionary.

If the promo code exists, the corresponding discount rules are retrieved:

```python
promo_code_rule = promo_codes[promo_code]
```

This eliminates the need to manually check every offer one by one.

If the promo code is not found, the program immediately displays:

```text
Invalid Promo Code
```

---

## Step 3 – Minimum Purchase Validation

After validating the promo code, the next condition checks whether the customer has added enough items to qualify for the offer.

```python
if amount_in_cart > promo_code_rule['minimum_amount']:
```

If the required minimum purchase amount has not been reached, the system informs the customer how much additional shopping is required before the offer becomes applicable.

This mirrors the behavior of many real-world shopping applications, which display messages such as:

> Add ₹120 more to unlock this offer.

---

## Step 4 – Discount Calculation

Once all validations are successful, the system calculates the discount.

```python
discount_calculated = amount_in_cart * promo_code_rule['discount']
```

For percentage-based offers, the payable amount is obtained by subtracting the calculated discount from the cart value.

---

## Step 5 – Discount Cap Validation

Some promotional campaigns impose a maximum discount limit.

For example:

> 50% OFF up to ₹200

Suppose:

* Cart Value = ₹1,000
* Discount = 50%

The calculated discount would be:

```text
₹500
```

However, the maximum permitted discount is only:

```text
₹200
```

Therefore, the billing system automatically limits the discount to ₹200 before calculating the final payable amount.

The instructor explained that such validations are common in commercial billing software and help businesses control promotional expenses while still offering attractive discounts.

---

## Business Logic Behind the Program

Although the example appears simple, it closely resembles the logic used in online shopping platforms.

The billing engine performs the following sequence of operations:

1. Read customer input.
2. Validate the promo code.
3. Retrieve the applicable offer rules.
4. Check the minimum purchase amount.
5. Calculate the discount.
6. Enforce the maximum discount limit (if applicable).
7. Compute the final payable amount.
8. Display the billing summary.

This step-by-step validation process ensures that only eligible customers receive promotional benefits while maintaining accurate billing.

---

# Alternative Approach Using `if-elif-else`

The instructor also demonstrated a simpler implementation for beginners.

```python
"""
    BINGO: Flat 100 off, min amount 200
    GET500: Flat 500 off, min amount 100
    JUMBO: Flat 300 off, min amount 500

"""

amount_in_cart = int(input('Enter Amount: '))
promo_code = input('Enter Promo Code: ')

if promo_code == 'BINGO':
    pass
elif promo_code == 'GET500':
    pass
elif promo_code == 'JUMBO':
    pass
else:
    print('Invalid Promo Code')
```

This approach relies entirely on an `if-elif-else` chain to identify the entered promo code.

While suitable for a small number of offers, the instructor pointed out that it becomes increasingly difficult to maintain as the number of promotional campaigns grows. Every new offer requires an additional `elif` block, making the program longer and less flexible.

In contrast, the dictionary-based implementation is more scalable and aligns better with real-world software engineering practices, where configuration data is separated from business logic.

---

# Controller-Based Assignment: Another Brick in the Wall

To conclude the session, the instructor assigned a controller-based programming problem that required students to combine the concepts learned throughout the day.

The assignment was designed to strengthen logical thinking by integrating:

* `for` loops
* Conditional statements (`if-else`)
* Arithmetic operators
* Assignment operators
* Variables
* Program flow control

Unlike the earlier examples, this problem required students to first analyze the sequence of events, manually trace the execution, and then convert their logic into code.

---

## Problem Statement

```
another brick in wall

customer - 13 bricks

iteration-1
john places 1 brick
jack places 2 bricks

iteration-2
john places 2 bricks
jack places 4 bricks

iteration-3
john places 3 bricks
jack places 6 bricks

Determine:

• Who placed the last brick?
• How many bricks were actually placed by the last worker?
```

The objective was to simulate the placement of bricks iteration by iteration until all bricks had been placed successfully.

---

# My Thought Process

Before writing the program, I manually traced every iteration to understand how the remaining bricks would decrease after each worker's turn. This dry run helped me identify the exact point where the final brick would be placed and made it easier to convert the logic into Python code.

```py
bricks = 13 
left = 13
placed = 0
extra=0
actual_placed=0
worker=['john', 'jack']
last_placed_by=worker[0]

# iteration 1

**john 1** 
left = 13

placed = 1  (iteration value) 

last_placed_by = worker[0]

if placed < left :
    left = left-placed  (13-1=12) 
else:
    actual_placed = left   
    extra = placed - left
    break    

**jack 2**

placed = 2 (2* iteration value)

last_placed_by = worker[1]

if placed < left :
    left = left-placed  (12-2=10) 
else:
    actual_placed = left
    extra = placed - left
    break    

# iteration 2
left = 10


**john 2** 

placed = 2  (iteration value)

last_placed_by = worker[0]

if placed < left :
    left = left-placed  (10-2=8) 
else:
    actual_placed = left
    extra = placed - left
    break    

**jack 4** 

placed = 4  (2* iteration value)

last_placed_by = worker[1]

if placed < left :
    left = left-placed  (8-4=4) 
else:
    actual_placed = left
    extra = placed - left
    break   

# iteration 3 
left = 4

**john 3** 

placed = 3  (iteration value)

last_placed_by = worker[0]

if placed < left :
    left = left-placed  ( 4-3=1)
else:
    actual_placed = left
    extra = placed - left
    break    


**jack 6** 

placed = 6  (2* iteration value)

last_placed_by = worker[1]

if placed < left :
    left = left-placed  
else:
    actual_placed = left
    extra = placed - left  (6 - 1 = 5)
    break 


print("Last brick placed by:", last_placed_by)
print("No of bricks placed:", actual_placed)
print("No of extra bricks: ", extra)
```

The dry run allowed me to visualize every iteration before implementing the algorithm. It also helped verify that the program would terminate correctly once all bricks had been placed.

---

# My Python Solution

After completing the manual dry run, I implemented the solution in Python.

```py
bricks = int(input("Enter no of bricks to be placed : "))

left = bricks
count = 0
size=0
if (bricks == 0 or bricks == 1):
    size=2
elif bricks < 0:
    print("Bricks cannot be in negative number")
else:
    size=bricks

placed = 0
actual_placed=0
worker=['john', 'jack']
last_placed_by=worker[0]

for i in range(1,size):
    print("iteration:", i)
    print("---------------------------------------------------")
    for j in range(2):

        if j==0:
            placed=i
            print(f"{worker[j]} can place {placed} bricks")

        else:
            placed=2*i
            print(f"{worker[j]} can place {placed} bricks")


        last_placed_by = worker[j]

        if placed < left:
            print(f"{worker[j]} placed {placed} bricks successfully")
            print()
            left = left-placed
            print("No of bricks to be placed yet:", left)
            print("---------------------------------------------------")
        else:
            actual_placed = left
            left = left-placed
            print(f"{worker[j]} placed {actual_placed} bricks successfully")
            print("---------------------------------------------------")
            break
    if left<=0:
        count=i
        break
print("---------------------------------------------------")
print("No of bricks to placed:", bricks)
print("No of iterations required:", count)
print("Last brick placed by:", last_placed_by)
print("No of bricks placed by last worker:", actual_placed)
print("---------------------------------------------------")
```

This assignment reinforced the importance of planning the solution before coding. Performing a manual dry run first made it easier to identify the program flow, manage the remaining bricks correctly, and determine the stopping condition for the loops.

---
# Output of above Solution
```
Enter no of bricks to be placed : 13
iteration: 1
---------------------------------------------------
john can place 1 bricks
john placed 1 bricks successfully

No of bricks to be placed yet: 12
---------------------------------------------------
jack can place 2 bricks
jack placed 2 bricks successfully

No of bricks to be placed yet: 10
---------------------------------------------------
iteration: 2
---------------------------------------------------
john can place 2 bricks
john placed 2 bricks successfully

No of bricks to be placed yet: 8
---------------------------------------------------
jack can place 4 bricks
jack placed 4 bricks successfully

No of bricks to be placed yet: 4
---------------------------------------------------
iteration: 3
---------------------------------------------------
john can place 3 bricks
john placed 3 bricks successfully

No of bricks to be placed yet: 1
---------------------------------------------------
jack can place 6 bricks
jack placed 1 bricks successfully
---------------------------------------------------
---------------------------------------------------
No of bricks to placed: 13
No of iterations required: 3
Last brick placed by: jack
No of bricks placed by last worker: 1
---------------------------------------------------
```

---
# Solution Explanation and Analysis

## Approach Used

Instead of trying to derive a mathematical formula to determine who would place the last brick, I chose to **simulate the complete brick placement process** exactly as described in the problem statement. This approach allowed me to visualize each iteration and verify the logic step by step before implementing it in Python.

The solution follows the actual sequence of events:

1. Read the total number of bricks from the user.
2. Initialize the number of bricks remaining to be placed.
3. Start each iteration.
4. John places bricks equal to the current iteration number.
5. Jack places twice the number of bricks placed by John.
6. After every placement, check whether enough bricks are still available.

   * If sufficient bricks remain, subtract the placed bricks from the remaining count.
   * Otherwise, place only the remaining bricks, record the last worker, and terminate the simulation.
7. Display the final results, including the total iterations, the last worker, and the number of bricks actually placed by the last worker.

---

## Logic Behind the Solution

The program uses **nested loops** to simulate the placement process.

* The **outer loop** represents each iteration.
* The **inner loop** represents the two workers, John and Jack.

For every iteration:

* John places `i` bricks.
* Jack places `2 × i` bricks.

After each placement, the program checks whether the worker can place all the intended bricks.

If the intended number of bricks is less than the remaining bricks, the placement is completed successfully and the remaining brick count is updated.

If fewer bricks remain than the worker intends to place, only the remaining bricks are placed, the last worker is recorded, and the program exits the loop.

This ensures that the simulation accurately reflects the real-world scenario without placing more bricks than are actually available.

---

## Dry Run Summary (13 Bricks)

| Iteration | Worker | Intended Placement | Actual Placement | Remaining Bricks |
| --------- | ------ | -----------------: | ---------------: | ---------------: |
| 1         | John   |                  1 |                1 |               12 |
| 1         | Jack   |                  2 |                2 |               10 |
| 2         | John   |                  2 |                2 |                8 |
| 2         | Jack   |                  4 |                4 |                4 |
| 3         | John   |                  3 |                3 |                1 |
| 3         | Jack   |                  6 |                1 |                0 |

**Final Result**

* Last Worker: **Jack**
* Bricks Actually Placed by the Last Worker: **1**
* Total Iterations Required: **3**

---

# Complexity Analysis

## Time Complexity

Let **n** be the number of bricks.

The outer loop executes at most **n** times, while the inner loop always runs exactly **two times** (once for John and once for Jack).

Therefore,

**Time Complexity:** **O(n)**

Although the inner loop executes twice per iteration, constant factors are ignored in asymptotic analysis.

---

## Space Complexity

The program uses only a fixed number of variables such as:

* `left`
* `placed`
* `actual_placed`
* `count`
* `worker`
* `last_placed_by`

No additional memory proportional to the input size is allocated.

Therefore,

**Space Complexity:** **O(1)** (Constant Space)

---

# Solution Analysis

This solution follows a **simulation-based approach**, making it easy to understand and closely aligned with the problem statement. Rather than relying on mathematical shortcuts, it demonstrates how loops and conditional statements can be combined to model a real-world process.

### Strengths

* Simulates the brick placement process exactly as described.
* Uses meaningful variable names, improving code readability.
* Demonstrates effective use of nested loops and conditional statements.
* Correctly handles the situation where the final worker cannot place all intended bricks.
* Includes validation for negative input values.
* Produces detailed console output, making debugging and verification easier.
* Reinforces logical thinking and controller-based programming concepts.

### Scope for Improvement

* The `size` variable could be simplified to make the loop structure more concise.
* After detecting a negative number of bricks, the program could terminate immediately instead of continuing execution.
* During the final placement, the remaining brick count becomes negative after subtraction; setting it directly to zero would improve clarity.
* The solution is designed specifically for two workers. A more generalized approach could be developed to support any number of workers with different placement rules.

---

# Overall Evaluation

This implementation successfully solves the assignment using a logical and systematic simulation approach. Although it is not mathematically optimized, it effectively demonstrates the concepts taught during the session, including loops, operators, conditional statements, nested control structures, and problem decomposition.

For a beginner-level controller-based programming assignment, this solution is efficient, easy to understand, and well-suited for building strong logical problem-solving skills.

---
# Key Learnings

The fifth day of the training significantly strengthened my understanding of logical programming and controller-based problem solving. The major takeaways from this session were:

* Learned different categories of Python operators and their practical applications.
* Understood the difference between arithmetic, assignment, comparison, membership, logical, and bitwise operators.
* Explored Python's automatic dynamic memory allocation and compared it with manual memory management in C++.
* Learned the importance of Python naming conventions such as **snake_case**.
* Understood binary operations, bitwise operators, and shift operators with detailed binary calculations.
* Learned how shift operations contribute to encryption, decryption, and information security.
* Studied various conditional constructs including `if`, `if-else`, `if-elif-else`, and nested `if-else`.
* Understood the importance of selecting different authentication strategies for public and protected environments.
* Implemented a practical billing system using nested dictionaries and conditional logic.
* Improved controller-based problem-solving skills by solving the "Another Brick in the Wall" assignment through manual analysis followed by implementation.

---

# Assignments for Self-Study

The instructor assigned the following topics for further exploration:

* Study **PEP (Python Enhancement Proposal)** and understand its role in defining Python standards and best practices.
* Explore **AES (Advanced Encryption Standard)** and understand how it utilizes bitwise and shift operations.
* Research **SHA-256** and learn how binary operations contribute to secure hashing algorithms.
* Explore other modern security algorithms that make use of bitwise manipulation and shift operations.
* Continue solving **at least three conditional programming problems every day** to strengthen logical thinking and improve programming proficiency.

