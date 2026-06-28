<!--
title: Python Data Structures, Hashing & Reference Copy
date: 2026-06-27
tags: Python, Hashing, Data Structures, Lists, Sets, Dictionaries, Reference Copy, Assignments
summary: Day 3 focused on understanding hashing, shallow/reference copy, Python collections (List, Set, Dictionary), Unicode, nested data structures, and implementing real-world datasets using dictionaries and lists through practical assignments.
-->

# 🚀 Day 3: Python Data Structures, Hashing & Reference Copy

**Name:** Saksham Kumar\
**Course:** B.Tech CSE\
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana\
**Training Program:** TRCS102 – Agentic AI Training\
**Day:** 3\
**Date:** 27 June 2026

---

# 📖 Daily Training Record – Day 3

## 📌 Overview

The third day of the **TRCS102 – Agentic AI Training Program** primarily focused on understanding Python's built-in data structures and how they are implemented internally using hashing techniques.

The session began with an introduction to **Open Hashing**, explaining how data is converted into hash codes and stored inside buckets for efficient lookup. We also discussed how strings are hashed by converting individual characters into their ASCII values before applying a hash function.

After understanding hashing, the discussion shifted towards **reference variables**, **shallow (reference) copying**, **single-value and multi-value containers**, and how Python manages objects in memory.

The second half of the session introduced the four major Python collection data types—**Lists, Sets, Tuples, and Dictionaries**—along with nested dictionaries and practical real-world implementations such as product catalogs, promo code management systems, restaurant menus, flight booking systems, and movie ticket booking systems.

The class concluded with two practical assignments where we designed data structures similar to **MakeMyTrip** and **BookMyShow** using nested dictionaries and lists.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

* Understand the concept of hashing.
* Learn how Open Hashing stores data.
* Understand hash functions.
* Learn how strings are converted into hash values.
* Differentiate between value copy and reference copy.
* Understand Python reference variables.
* Learn Lists, Sets, Tuples, and Dictionaries.
* Create nested dictionaries for real-world applications.
* Design structured datasets using Python collections.
* Apply loops for better code reusability.

---

# 📚 Key Learnings

---

## 1️⃣ Open Hashing

The session started with the concept of **Open Hashing**.

Hashing is a technique used to convert data into a unique integer called a **Hash Code**.

This hash code helps determine the location where data should be stored inside memory.

### Hash Function

```
hash(x) = x % n
```

Where,

* **x** → Data after conversion
* **n** → Number of buckets

The computed value represents the bucket index where the data is stored.

---

### Example: How is "CAT" Stored?

Instead of directly hashing the word,

Each character is converted into its ASCII value.

```
C = 67
A = 65
T = 84
```

Total

```
67 + 65 + 84 = 216
```

Suppose there are **10 buckets**

```
Hash = 216 % 10
     = 6
```

Therefore,

The word **CAT** will be stored inside **Bucket 6**.

---

### Bucket Visualization

> **[Space Reserved for Open Hashing Diagram]**

---

### Important Note

> [!NOTE]
> Sir emphasized that algorithms become much easier to understand through visualizations rather than memorizing theory. Using diagrams while learning data structures and algorithms improves conceptual understanding.

---

## 2️⃣ Reference Variables & Shallow Copy

The next topic discussed was Python's memory model.

Python variables do not directly store values.

Instead, they store **references** to objects.

---

### Single Value Containers

Example

```python
# single value containers
a=10
b=a # shallow copy

print("Value of a:", a, id(a), type(a))
print("Value of b:", b, id(b), type(b))

b=1000

print("Value of a:", a, id(a), type(a))
print("Value of b:", b, id(b), type(b))
```

### Observation

Initially,

```
a = 10
b = a
```

Both variables point to the same integer object.

Therefore,

```
id(a) == id(b)
```

After

```
b = 1000
```

Python creates a new integer object.

Now,

```
id(a) != id(b)
```

---

### Multi Value Containers

```python
# multi value containers
phone_whats_app=['Hi', 'Hello', 'How are you?']
laptop_whats_app=phone_whats_app  # shallow copy

print("Value of phone_whats_app:", phone_whats_app, id(phone_whats_app), type(phone_whats_app))
print("Value of laptop_whats_app:", laptop_whats_app, id(laptop_whats_app), type(laptop_whats_app))


laptop_whats_app[0]='Hey'

print("Value of phone_whats_app:", phone_whats_app, id(phone_whats_app), type(phone_whats_app))
print("Value of laptop_whats_app:", laptop_whats_app, id(laptop_whats_app), type(laptop_whats_app))

#identify the use cases of reference copy (in real life)
```

### Observation

Both variables reference the **same list object**.

Changing one automatically changes the other.

This behavior is called **Reference Copy (Shallow Copy).**

---

### Real-Life Example

Imagine opening WhatsApp on your phone and laptop.

Both applications synchronize the same chat database.

If a message changes on one device,

it instantly reflects on the other because both reference the same underlying data.

---

### Memory Visualization

> **[Space Reserved for Stack & Reference Variable Diagram]**

---

## 3️⃣ Reference Variables

Sir compared Python reference variables to **void pointers** in C/C++.

Unlike statically typed languages,

Python reference variables do not have a fixed data type.

They can point to integers, strings, lists, dictionaries, sets, tuples, or any other object.

---

## 4️⃣ Lists

Lists are ordered collections.

Characteristics

* Supports indexing
* Supports duplicate values
* Mutable
* Ordered

Example

```python
# indexing
#     0   1  2  3  4  5    6
data=[10,20,30,40,50, 10, 20]
print(data)
print(data[0], data[len(data)-2])


# list supports duplicates


# Set -> works on hashing (does not use indexing, hence cannot access a single element)
# Set -> unordered collection of unique elements
data={10,20,30,40,50, 10, 20}
print(data, id(data), type(data)) # output will be unordered due to hashing and will not have duplicates
```

---

## 5️⃣ Sets

Sets internally use **hashing**.

Characteristics

* Unordered
* No indexing
* Unique elements only
* Duplicate values automatically removed

Since hashing determines storage location,

elements cannot be accessed using indexes.

---

## 6️⃣ Dictionaries

Dictionary stores

```
Key → Value
```

Properties

* Keys must be unique.
* Values may be duplicated.
* Extremely efficient lookup using hashing.

Example

```python
# dict-> key will be unique, value can be duplicate
# dict -> unordered collection of key-value pairs

students={
    101: 'Saksham',
    201: 'Dhruv',
    301: 'Isha',
    401: 'Aryan',
    501: 'Saksham',
    201:'Dhruv Jain'
}

print(students, id(students), type(students))

# product catalog
product={
    1011123: {
        'name': 'Laptop',
        'brand': 'HP',
    },
    1011124: {
       'name': 'Mobile',
       'brand': 'Samsung',
    }

}

# chat catalog
chat_messages={
    1011123: {
        'Hi': 'Hello',
        'How are you?': 'I am fine'
    },

}



# # promo code catalog
promo_codes={
    1011101:{
        'promo_code': 'SUMMER2024',
        'discount': 20,
        'offered_by': 'Flipkart',
        'conditon': 'Minimum purchase of 1000',
        'remaining_time': '10 days',
        'payment mode': 'Credit Card'
    },
    1011102:{
        'promo_code': 'WINTER2024',
        'discount': 25,
        'offered_by': 'Amazon',
        'conditon': 'Minimum purchase of 1500',
        'remaining_time': '15 days',
        'payment mode': 'Credit Card'
    },
    1011103:{
        'promo_code': 'FESTIVE2024',
        'discount': 30,
        'offered_by': 'Myntra',
        'conditon': 'Minimum purchase of 2000',
        'remaining_time': '20 days',
        'payment mode': 'Credit Card'
    }
}

for key, value in promo_codes.items():
    print(f"Promo Code ID: {key}")
    for inner_key, inner_value in value.items():
        print(f"{inner_key}: {inner_value}")
    print()
```

---

## 7️⃣ Creating Empty Containers

Python provides two different ways to create containers.

```python
# ref_var=() tuple
# ref_var=[] list
# ref_var={} dict


# ref_var= set()
# ref_var= tuple()
# ref_var= list()
# ref_var= dict()


print(ref_var, type(ref_var), id(ref_var))
```

---

## 8️⃣ Restaurant Menu Example

A restaurant menu was created using nested dictionaries.

The purpose was to understand how structured data is represented in real-world software applications.

```python
dishes={
    101:{
        'name': 'Pizza',
        'price': 500,
    },
    201:{
        'name': 'Burger',
        'price': 200,
    },
    301:{
        'name': 'Pasta',
        'price': 300,
    },
    401:{
        'name': 'Sandwich',
        'price': 150,
    },
    501:{
        'name': 'Fries',
        'price': 100
    }
}

print(dishes, id(dishes), type(dishes)) # not good view

# Menu
# \u20b9 -> unicode for rupee symbol (UNI CODES)
print("-----------------------Menu--------------------------")
print("-----------------------------------------------------")
print(dishes[101]['name'], "\t \u20b9" ,dishes[101]['price'])
print("-----------------------------------------------------")
print(dishes[201]['name'], "\t \u20b9" ,dishes[201]['price'])
print("-----------------------------------------------------")
print(dishes[301]['name'], "\t \u20b9" ,dishes[301]['price'])
print("-----------------------------------------------------")
print(dishes[401]['name'], "\t \u20b9" ,dishes[401]['price'])
print("-----------------------------------------------------")
print(dishes[501]['name'], "\t \u20b9" ,dishes[501]['price'])

print("-----------------------End-----------------------")

# problem: we have to rewrrite things many times
# to avoid use iterations (loops) and avoid rewriting things many times, we can use for loop



# how to identify which laguage is used in a file ( by checking the range of uni codes)

# Assignemnt 1:
# to print flight details in list and dict data structure ( list of flights)

# Assignment 2:
# to print seating details in list and dict data structure of bookmyshow ( dict of list of dicts)
```

---

## 9️⃣ Practical Assignments

### Assignment 1

Develop a **MakeMyTrip Flight Details System** using nested dictionaries.

The application stores airline details, source and destination airports, timings, and ticket prices.

> **Complete Assignment Code:**

```py
# Flight details of Makemytrip
flight_details = {
    'F101001': {
        'F_name': {
            'airline': 'Indigo',
            'flight_model': 'A320'
        },
        'F_from': {
            'city': 'Bangalore',
            'airport': 'Kempegowda International Airport'
        },
        'F_to': {
            'city': 'Delhi',
            'airport': 'Indira Gandhi International Airport'
        },
        'F_time': {
            'departure': '10:00 AM',
            'arrival': '1:00 PM'
        },
        'F_price': {
            'economy': 5000,
            'business': 10000
        }
    },
    'F101002': {
        'F_name': {
            'airline': 'Air India',
            'flight_model': 'B737'
        },
        'F_from': {
            'city': 'Kolkata',
            'airport': 'Netaji Subhas Chandra Bose International Airport'
        },
        'F_to': {
            'city': 'Delhi',
            'airport': 'Indira Gandhi International Airport'
        },
        'F_time': {
            'departure': '11:00 AM',
            'arrival': '2:00 PM'
        },
        'F_price': {
            'economy': 6000,
            'business': 12000
        }
    }
}
print()
print("-----------------------Flight Details--------------------------")
# flight 1 details

#flight name and model
print("Flight Name:", flight_details['F101001']['F_name']['airline'], "\t \t Flight Model:", flight_details['F101001']['F_name']['flight_model'])

#flight 'From' details
print("From:", flight_details['F101001']['F_from']['city'], "\t \t Airport:", flight_details['F101001']['F_from']['airport'])

#flight 'To' details
print("To: ", flight_details['F101001']['F_to']['city'], "\t \t Airport:", flight_details['F101001']['F_to']['airport'])

#flight departure and arrival time
print("Departure Time: ", flight_details['F101001']['F_time']['departure'], "\t \t Arrival Time: ", flight_details['F101001']['F_time']['arrival'])

#flight price details
print("Economy Price: \u20b9", flight_details['F101001']['F_price']['economy'], "\t \t Business Price: \u20b9", flight_details['F101001']['F_price']['business'])

print()
print("-----------------------------------------------------")
print()

# flight 2 details

# flight name and model
print("Flight Name:", flight_details['F101002']['F_name']['airline'], "\t \t Flight Model:", flight_details['F101002']['F_name']['flight_model'])

# flight 'From' details
print("From:", flight_details['F101002']['F_from']['city'], "\t \t Airport:", flight_details['F101002']['F_from']['airport'])

# flight 'To' details
print("To: ", flight_details['F101002']['F_to']['city'], "\t \t Airport:", flight_details['F101002']['F_to']['airport'])

# flight departure and arrival time
print("Departure Time: ", flight_details['F101002']['F_time']['departure'], "\t \t Arrival Time: ", flight_details['F101002']['F_time']['arrival'])

# flight price details
print("Economy Price: \u20b9", flight_details['F101002']['F_price']['economy'], "\t \t Business Price: \u20b9", flight_details['F101002']['F_price']['business'])

print("-----------------------------------------------------")


```

> **Output:**

```

-----------------------Flight Details--------------------------

Flight Name: Indigo           Flight Model: A320
From: Bangalore               Airport: Kempegowda International Airport
To: Delhi                     Airport: Indira Gandhi International Airport
Departure Time: 10:00 AM      Arrival Time: 1:00 PM
Economy Price: ₹ 5000         Business Price: ₹ 10000

-----------------------------------------------------

Flight Name: Air India        Flight Model: B737
From: Kolkata                 Airport: Netaji Subhas Chandra Bose International Airport
To: Delhi                     Airport: Indira Gandhi International Airport
Departure Time: 11:00 AM      Arrival Time: 2:00 PM
Economy Price: ₹ 6000         Business Price: ₹ 12000

-----------------------------------------------------
```
---

### Assignment 2

Develop a **BookMyShow Movie Hall Management System** using dictionaries and lists.

The application stores movie details, seating arrangements, premium and standard seats, and ticket prices.

> **Complete Assignment Code:**

```py
# Assignment-2 
# bookmyshow movie hall details
movie_hall_details = {
    'MH01001': {
        'movie_name': 'Carry On Jatta 4',
        'hall_name': 'PVR Cinemas',
        'hall_number': 1,
        'row_number': [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        'seat_number': ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'],
        'premium_seat': ['S01', 'S02', 'S03', 'S04', 'S05'],
        'standard_seat': ['S06', 'S07', 'S08', 'S09', 'S10'],
        'price': {
            'standard': 200,
            'premium': 400
        }
    },
    'MH01002': {
        'movie_name': 'Carry On Jatta 4',
        'hall_name': 'INOX Cinemas',
        'hall_number': 3,
        'row_number': [1, 2, 3, 4, 5, 6, 7, 8],
        'seat_number': ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10'],
        'premium_seat': ['S01', 'S02', 'S03', 'S04', 'S05'],
        'standard_seat': ['S06', 'S07', 'S08', 'S09', 'S10'],
        'price': {
            'standard': 250,
            'premium': 450
        }
    }
    
}
print()
print("----------------------------------Movie Hall Details-------------------------------------")
print()
# printing movie name and hall  details of MH01001
print("Movie Name:", movie_hall_details['MH01001']['movie_name'])
print("Theater: ", movie_hall_details['MH01001']['hall_name'], "\t \t Hall Number: ", movie_hall_details['MH01001']['hall_number'])
print("----------------------------------------------------------------------------------------")
# printing row number along with seats in each row 
print(movie_hall_details['MH01001']['row_number'][0], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][1], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][2], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][3], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][4], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][5], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][6], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][7], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][8], "\t \t", movie_hall_details['MH01001']['seat_number'])
print(movie_hall_details['MH01001']['row_number'][9], "\t \t", movie_hall_details['MH01001']['seat_number'])
print("----------------------------------------------------------------------------------------")
print("Premium Seats: ", movie_hall_details['MH01001']['premium_seat'], "\t \t Price of each seat: ", movie_hall_details['MH01001']['price']['premium'])
print("Standard Seats: ", movie_hall_details['MH01001']['standard_seat'], "\t \t Price of each seat: ", movie_hall_details['MH01001']['price']['standard'])
print("----------------------------------------------------------------------------------------")

print()

# printing movie name and hall details of MH01002
print("Movie Name:", movie_hall_details['MH01002']['movie_name'])
print("Theater: ", movie_hall_details['MH01002']['hall_name'], "\t \t Hall Number: ", movie_hall_details['MH01002']['hall_number'])
print("----------------------------------------------------------------------------------------")
# printing row number along with seats in each row 
print(movie_hall_details['MH01002']['row_number'][0], "\t \t", movie_hall_details['MH01002']['seat_number'])
print(movie_hall_details['MH01002']['row_number'][1], "\t \t", movie_hall_details['MH01002']['seat_number'])
print(movie_hall_details['MH01002']['row_number'][2], "\t \t", movie_hall_details['MH01002']['seat_number'])
print(movie_hall_details['MH01002']['row_number'][3], "\t \t", movie_hall_details['MH01002']['seat_number'])
print(movie_hall_details['MH01002']['row_number'][4], "\t \t", movie_hall_details['MH01002']['seat_number'])
print(movie_hall_details['MH01002']['row_number'][5], "\t \t", movie_hall_details['MH01002']['seat_number'])
print(movie_hall_details['MH01002']['row_number'][6], "\t \t", movie_hall_details['MH01002']['seat_number'])
print(movie_hall_details['MH01002']['row_number'][7], "\t \t", movie_hall_details['MH01002']['seat_number'])
print("----------------------------------------------------------------------------------------")
print("Premium Seats: ", movie_hall_details['MH01002']['premium_seat'], "\t \t Price of each seat: ", movie_hall_details['MH01002']['price']['premium'])
print("Standard Seats: ", movie_hall_details['MH01002']['standard_seat'], "\t \t Price of each seat: ", movie_hall_details['MH01002']['price']['standard'])
print("----------------------------------------------------------------------------------------")

```

> **Output:**

```

----------------------------------Movie Hall Details-------------------------------------

Movie Name: Carry On Jatta 4
Theater:  PVR Cinemas          Hall Number:  1
----------------------------------------------------------------------------------------
1          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
2          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
3          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
4          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
5          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
6          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
7          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
8          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
9          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
10         ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
----------------------------------------------------------------------------------------
Premium Seats:  ['S01', 'S02', 'S03', 'S04', 'S05']          Price of each seat:  400
Standard Seats: ['S06', 'S07', 'S08', 'S09', 'S10']          Price of each seat:  200
----------------------------------------------------------------------------------------

Movie Name: Carry On Jatta 4
Theater:  INOX Cinemas          Hall Number:  3
----------------------------------------------------------------------------------------
1          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
2          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
3          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
4          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
5          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
6          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
7          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
8          ['S01', 'S02', 'S03', 'S04', 'S05', 'S06', 'S07', 'S08', 'S09', 'S10']
----------------------------------------------------------------------------------------
Premium Seats:  ['S01', 'S02', 'S03', 'S04', 'S05']          Price of each seat:  450
Standard Seats: ['S06', 'S07', 'S08', 'S09', 'S10']          Price of each seat:  250
----------------------------------------------------------------------------------------
```


---

# 💡 Important Concepts Learned

| Topic               | Learning                                            |
| ------------------- | --------------------------------------------------- |
| Open Hashing        | Stores data efficiently using buckets               |
| Hash Function       | Computes bucket index using `hash(x)=x%n`           |
| ASCII Encoding      | Strings are hashed after conversion to ASCII values |
| Reference Variables | Store object references instead of values           |
| Shallow Copy        | Multiple variables reference the same object        |
| Lists               | Ordered, indexed, duplicates allowed                |
| Sets                | Unordered, unique elements, hashing based           |
| Dictionaries        | Key-value storage with fast lookup                  |
| Nested Dictionaries | Used for real-world structured datasets             |
| Unicode             | Used to represent symbols like ₹                    |

---

# 🌍 Real-World Applications

The concepts covered today are widely used in:

* Search engines
* Database indexing
* Python dictionaries
* Python sets
* Cache systems
* WhatsApp chat synchronization
* E-commerce product catalogs
* Airline booking systems
* Movie ticket booking platforms
* Restaurant management software

---

# 📝 Personal Reflection

Today's session strengthened my understanding of Python's internal working, especially how data structures store and manage information efficiently. Learning about hashing gave me insight into why dictionaries and sets provide fast access to data. The explanation of reference variables and shallow copying also helped me understand how Python handles objects in memory.

The practical examples based on restaurant menus, promo codes, flight booking systems, and movie ticket booking platforms made the concepts much easier to relate to real-world software development. I also realized the importance of using loops to avoid repetitive code and improve maintainability. Overall, today's session enhanced both my theoretical understanding and practical implementation skills.

---

# 📌 Key Takeaways

* Hashing enables efficient data storage and retrieval.
* Strings can be hashed using their ASCII values.
* Reference variables point to objects in memory.
* Lists support duplicates and indexing.
* Sets store only unique elements using hashing.
* Dictionaries are ideal for structured real-world data.
* Nested data structures are widely used in software development.
* Loops help eliminate repetitive code.

---

# 📖 Revision Notes

✔ Open Hashing

✔ Hash Function

✔ ASCII Values

✔ Reference Variables

✔ Shallow Copy

✔ Lists

✔ Sets

✔ Dictionaries

✔ Nested Dictionaries

✔ Unicode

✔ Flight Booking Assignment

✔ Movie Hall Assignment

---

# ❓ Interview Questions

### Q1. What is hashing?

**Answer:**
Hashing is the process of converting data into a fixed-size hash value that helps store and retrieve data efficiently.

---

### Q2. Why do sets not support indexing?

**Answer:**
Because sets are implemented using hashing, their elements are not stored in sequential order, making indexing impossible.

---

### Q3. What is the difference between value copy and reference copy?

**Answer:**
In a value copy, a new independent object is created. In a reference copy, multiple variables point to the same object, so changes through one reference are visible through the others.

---

### Q4. Why are dictionaries so fast?

**Answer:**
Dictionaries use hashing internally, allowing average constant-time (`O(1)`) lookup, insertion, and deletion.

---

# 🎯 Goals for Next Session

* Learn loops in greater depth.
* Practice nested data structures.
* Explore iteration techniques.
* Implement real-world applications using loops.
* Improve Python programming skills through practical exercises.

---

# ✅ Today's Progress Checklist

* [x] Understood Open Hashing
* [x] Learned hash functions
* [x] Understood ASCII-based hashing
* [x] Learned reference variables
* [x] Practiced shallow copy
* [x] Explored Lists, Sets, and Dictionaries
* [x] Created nested dictionaries
* [x] Completed Flight Details assignment
* [x] Completed Movie Hall assignment

---

> [!TIP]
> While learning data structures and algorithms, always visualize how data is stored in memory. Understanding the internal working of data structures makes programming concepts much easier to grasp than simply memorizing syntax.

---

**Status:** Completed ✅

**Training Day:** 3

**Maintained By:** Saksham Kumar
