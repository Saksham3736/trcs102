<!--
title: Object-Oriented Programming with Circular Doubly Linked Lists
date: 2026-07-06
tags: Python, OOP, Circular Doubly Linked List, Linked List, Objects, Classes, Data Structures, Dynamic Programming
summary: Continued Object-Oriented Programming by implementing Circular Doubly Linked Lists using Song objects, explored dynamic object management, forward and backward traversal, and developed a Movie Recommendation Scroller as a practical application.
-->

# 🚀 Day 9: Object-Oriented Programming with Circular Doubly Linked Lists

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 9  
**Date:** 6 July 2026

---

# 📖 Daily Training Record – Day 9

## 📌 Overview

Today's session continued our journey into **Object-Oriented Programming (OOP)** by extending the concepts learned in the previous class and applying them to one of the most important data structures—**Circular Doubly Linked Lists (CDLL)**.

The session began with revisiting Python classes, constructors, instance methods, and object manipulation using a simple **User** class. The discussion then shifted towards understanding how real-world entities can be interconnected using pointers, leading to the implementation of linked data structures.

To demonstrate these concepts, the instructor designed a **Song** object containing references to both the next and previous songs. Initially, different types of linked lists—including **Singly Linked Lists**, **Circular Singly Linked Lists**, **Doubly Linked Lists**, and **Circular Doubly Linked Lists**—were constructed manually to build a clear conceptual understanding of pointer relationships.

After understanding the hardcoded implementation, the session progressed towards building a reusable and dynamic **SongList** class capable of automatically managing song insertion and traversal. Concepts such as **head**, **tail**, **size**, forward traversal, backward traversal, and dynamic node insertion were thoroughly discussed.

Finally, the day's learning culminated in a practical homework assignment where the same Circular Doubly Linked List concepts were applied to create a **Movie Recommendation Scroller**. This project demonstrated how generic data structures can be adapted to solve different real-world problems simply by changing the object being stored.

Overall, today's session strengthened my understanding of how Object-Oriented Programming and Data Structures complement each other in designing scalable and reusable software systems.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Revise Object-Oriented Programming concepts using Python classes.
- Understand instance methods and object manipulation.
- Differentiate between hardcoded and dynamic implementations.
- Learn the structure of a Song object in a linked data structure.
- Understand the architecture of Singly, Circular Singly, Doubly, and Circular Doubly Linked Lists.
- Implement forward and backward traversal in a Circular Doubly Linked List.
- Design a reusable `SongList` class to manage linked objects dynamically.
- Understand the purpose of `head`, `tail`, and `size` in linked lists.
- Learn how dynamic insertion simplifies linked list management.
- Build a practical Movie Recommendation Scroller using Circular Doubly Linked Lists.
- Appreciate how generic data structures can be reused across different real-world applications.

---

# 📚 Key Learnings

---

## 1️⃣ Revisiting Object-Oriented Programming

The session began by revisiting the Object-Oriented Programming concepts introduced in the previous class. Before moving towards implementing complex data structures, the instructor emphasized strengthening the understanding of **classes**, **objects**, **constructors**, and **instance methods**.

A simple **User** class was used to demonstrate how data and behavior are encapsulated inside an object.

Unlike the previous session where most attributes were initialized through constructors, today's example also introduced the concept of modifying object data using dedicated member functions.

---

### User Class

```python
class User():

    def __init__(self, name=None, phone=None, email=None):
        self.name = name
        self.phone = phone
        self.email = email

    def input_user_details(self):
        self.name = input("Enter name: ")
        self.phone = input("Enter phone: ")
        self.email = input("Enter email: ")

    def show_user_details(self):
        print("~~~~~~~~~~~~~~~~~~~~~~~~~~")
        print(self.name, self.phone, self.email)
        print("~~~~~~~~~~~~~~~~~~~~~~~~~~")
```

The class contains:

- Three attributes
    - Name
    - Phone
    - Email

- Two member functions
    - `input_user_details()`
    - `show_user_details()`

---

### Purpose of Instance Methods

Instead of directly modifying object attributes from outside the class, the instructor demonstrated how methods can encapsulate object behavior.

```
User Object

│

├── Data
│     ├── Name
│     ├── Phone
│     └── Email
│
└── Behavior
      ├── Input Details
      └── Show Details
```

This illustrates one of the key ideas behind OOP—**objects contain both data and the operations that manipulate that data**.

---

### Dynamic vs Hardcoded Data

One important discussion during the class was the difference between **hardcoded values** and **dynamic user input**.

#### Hardcoded

```python
user = User(
    "John",
    "9999999999",
    "john@example.com"
)
```

Advantages:

- Faster for testing.
- Useful while debugging.
- Predictable output.

Disadvantages:

- Fixed values.
- Cannot be reused for different users.

---

#### Dynamic Input

```python
user = User()

user.input_user_details()
```

Advantages:

- Accepts user input during execution.
- Reusable.
- Suitable for real-world applications.

---

### Inspecting a Class Using `vars()`

The instructor also demonstrated:

```python
print(vars(User))
```

Unlike

```python
vars(user)
```

which displays the attributes of an object,

```python
vars(User)
```

returns the internal namespace of the class itself.

A simplified representation looks like:

```text
{
    '__module__': '__main__',

    '__init__': <function User.__init__>,

    'input_user_details':
        <function User.input_user_details>,

    'show_user_details':
        <function User.show_user_details>,

    '__dict__': ...,

    '__weakref__': ...,

    '__doc__': None
}
```

This demonstrates that **classes themselves are also objects in Python**, containing constructors, methods, and metadata.

---

> [!NOTE]
> `vars(ClassName)` displays information about the **class**, whereas `vars(object)` displays the **attributes stored inside a specific object instance**.

---

## 2️⃣ Modeling a Song Object

After revising OOP fundamentals, the session shifted towards designing an object that could later be used to implement different types of linked lists.

The instructor introduced a **Song** object, where each song stores not only its own information but also references to neighboring songs.

This design becomes the foundation of a **Circular Doubly Linked List**.

---

### Song Attributes

Each Song object contains:

- Title
- Artist
- Duration
- Reference to the Next Song
- Reference to the Previous Song

These references (pointers) enable one song to connect with another, forming a linked sequence.

---

### Song Class

```python
class Song():

    def __init__(self, title, artist, duration):

        self.title = title
        self.artist = artist
        self.duration = duration

        self.next_song = None
        self.previous_song = None
```

Unlike previous classes where attributes only stored primitive data, this class introduces **reference attributes**.

Initially,

```
next_song = None

previous_song = None
```

because no connections have yet been established.

---

### Visual Representation

Immediately after object construction:

```
┌──────────────────────────┐
│ Song                     │
├──────────────────────────┤
│ Title                    │
│ Artist                   │
│ Duration                 │
│ next_song      → None    │
│ previous_song  → None    │
└──────────────────────────┘
```

As songs become linked together, these `None` references are replaced with references to other Song objects.

---

### Displaying Song Details

The instructor also implemented a helper method.

```python
def show_song(self):

    print("Title:", self.title)

    print("Artist:", self.artist)

    print("Duration:", self.duration)

    print("Hashcode:", self)

    print("Next Song:", self.next_song)

    print("Previous Song:", self.previous_song)
```

Besides displaying song information, this method also prints:

- Current object's hashcode.
- Reference of the next song.
- Reference of the previous song.

These outputs become extremely useful while debugging linked data structures.

---

### Creating Song Objects

Five Song objects were created.

```python
song1

song2

song3

song4

song5
```

At this stage,

```
song1
|
↓
next = None

previous = None
```

The same applies to every other song because they have not yet been linked together.

---

> [!TIP]
> A linked list is **not created simply by creating multiple objects**. It is formed only when those objects are connected using reference variables such as `next_song` and `previous_song`.

---


## 3️⃣ Understanding Different Types of Linked Lists

Before implementing a **Circular Doubly Linked List**, the instructor revised the evolution of linked lists by constructing each variation manually.

Instead of directly jumping to Circular Doubly Linked Lists, we first observed how different pointer arrangements create different linked list structures.

This approach made it much easier to understand why additional pointers are introduced and how traversal changes with each implementation.

---

### Singly Linked List (SLL)

A **Singly Linked List** is the simplest linked data structure.

Each node stores:

- Data
- Reference to the next node

There is **no backward connection**.

```
Head
 |
 │
 |
 |
 ▼
Song1 ───► Song2 ───► Song3 ───► Song4 ───► Song5 ───► None
```

---

### Hardcoded Implementation

```python
song1.next_song = song2
song2.next_song = song3
song3.next_song = song4
song4.next_song = song5
song5.next_song = None
```

---

### Characteristics

- Forward traversal only.
- Last node points to `None`.
- Simple implementation.
- Less memory usage.

---

## Circular Singly Linked List (CSLL)

The instructor then modified the previous structure by connecting the last node back to the first node.

Instead of ending with `None`, the list forms a continuous loop.

```
 ┌───────────────────────────────────┐
 │                                   │
 |                                   │
 ▼                                   |
Song1 ─► Song2 ─► Song3 ─► Song4 ─► Song5
 ▲                                   │
 └───────────────────────────────────┘
```

---

### Hardcoded Implementation

```python
song1.next_song = song2
song2.next_song = song3
song3.next_song = song4
song4.next_song = song5
song5.next_song = song1
```

---

### Characteristics

- Infinite circular traversal.
- No `None` at the end.
- Efficient for cyclic applications.
- Backward traversal is still not possible.

---

## Doubly Linked List (DLL)

The next variation introduced an additional pointer.

Every node now stores:

- Next Node
- Previous Node

allowing movement in both directions.

```
None
 |
 │
 |
 ▼

Song1 ◄──► Song2 ◄──► Song3 ◄──► Song4 ◄──► Song5 ──┐
                                                    |
                                                    │
                                                    ▼
                                                   None
```

---

### Hardcoded Implementation

```python
song1.next_song = song2
song2.next_song = song3
song3.next_song = song4
song4.next_song = song5
song5.next_song = None

song1.previous_song = None
song2.previous_song = song1
song3.previous_song = song2
song4.previous_song = song3
song5.previous_song = song4
```

---

### Characteristics

- Forward traversal.
- Backward traversal.
- Easier deletion operations.
- Additional memory required because every node stores two references.

---

## Circular Doubly Linked List (CDLL)

Finally, the instructor demonstrated the data structure that became the primary focus of today's session.

A **Circular Doubly Linked List** combines the advantages of both:

- Circular Linked Lists
- Doubly Linked Lists

Every node contains:

- Previous pointer
- Next pointer

while simultaneously ensuring that:

- First node points back to the last node.
- Last node points forward to the first node.

This creates an infinite bidirectional loop.

---

### Structure

```
 Head
  |
  │
  |
  |
  ▼
Song1 ◄──► Song2 ◄──► Song3 ◄──► Song4 ◄──► Song5
 ▲                                             |
 |                                             │
 |                                             |
 └─────────────────────────────────────────────┘
                          |
                        Tail
```

---

### Hardcoded Implementation

```python
song1.next_song = song2
song2.next_song = song3
song3.next_song = song4
song4.next_song = song5
song5.next_song = song1

song1.previous_song = song5
song2.previous_song = song1
song3.previous_song = song2
song4.previous_song = song3
song5.previous_song = song4
```

---

### Why Every Pointer is Required

Each pointer assignment serves a specific purpose.

| Statement | Purpose |
|-----------|---------|
| `song1.next_song = song2` | Connects Song 1 to Song 2. |
| `song2.next_song = song3` | Maintains forward traversal. |
| `song5.next_song = song1` | Makes the list circular. |
| `song1.previous_song = song5` | Connects the first node back to the last node. |
| `song2.previous_song = song1` | Enables backward traversal. |
| `song5.previous_song = song4` | Maintains reverse linkage. |

Without any one of these assignments, the Circular Doubly Linked List would become incomplete.

---

### Comparison of Linked Lists

| Feature | SLL | CSLL | DLL | CDLL |
|---------|:---:|:----:|:---:|:----:|
| Forward Traversal | ✅ | ✅ | ✅ | ✅ |
| Backward Traversal | ❌ | ❌ | ✅ | ✅ |
| Circular Structure | ❌ | ✅ | ❌ | ✅ |
| Two-Way Navigation | ❌ | ❌ | ✅ | ✅ |
| Memory Usage | Low | Low | Medium | Highest |

---

> [!IMPORTANT]
> A **Circular Doubly Linked List** is ideal when an application requires continuous navigation in both forward and backward directions without encountering a terminating `None` node. This makes it highly suitable for music players, image galleries, browser tabs, media playlists, and recommendation systems.

---

## 4️⃣ Traversing a Circular Doubly Linked List

After constructing the Circular Doubly Linked List manually, the next objective was to traverse the connected nodes.

Unlike arrays, where elements are accessed using indices, linked lists are traversed using node references.

The instructor demonstrated traversal in **both forward and backward directions**, taking advantage of the `next_song` and `previous_song` pointers stored in each node.

---

### Forward Traversal

Forward traversal begins from the **Head** node and repeatedly follows the `next_song` reference until it returns back to the Head.

### Classroom Implementation

```python
song = song1

while True:

    song.show_song()

    song = song.next_song

    if song == song1:
        break
```

---

### Execution Flow

```
Head
 │
 ▼
Song1
↓
Song2
↓
Song3
↓
Song4
↓
Song5
↓
Back to Song1
↓
Stop
```

The stopping condition

```python
if song == song1:
    break
```

prevents an infinite loop because a Circular Linked List never reaches `None`.

---

### Sample CLI Output

```text
~~~~~~~~~~~~~~~~~~~~~~~~~~
Title: 1. Jaan se guzarte hai
Artist: Shaswat Sachdev, Khan Saab, Irshad Kamil
Duration: 4.5
Hashcode: <Song object at 0x...>
Next Song: <Song object at 0x...>
Previous Song: <Song object at 0x...>
~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~~~~
Title: 2. Deewana Deewana
Artist: A. R. Rahman, Irshid Kamil
Duration: 3.5
...
~~~~~~~~~~~~~~~~~~~~~~~~~~

...

~~~~~~~~~~~~~~~~~~~~~~~~~~
Title: 5. Jaiye sajana
Artist: ABC
Duration: 5.5
...
~~~~~~~~~~~~~~~~~~~~~~~~~~
```

*(Memory addresses vary on each execution.)*

---

## Backward Traversal

The biggest advantage of a Doubly Linked List is that traversal can also occur in the reverse direction.

Instead of starting from the Head, traversal begins from the Tail and repeatedly follows the `previous_song` pointer.

---

### Classroom Implementation

```python
song = song5

while True:

    song.show_song()

    song = song.previous_song

    if song == song5:
        break
```

---

### Execution Flow

```
Tail
 │
 ▼
Song5
↓
Song4
↓
Song3
↓
Song2
↓
Song1
↓
Back to Song5
↓
Stop
```

This demonstrates how the `previous_song` pointer enables efficient reverse traversal without requiring additional computation.

---

### Why a `while True` Loop?

Since a Circular Doubly Linked List has **no terminating `None` node**, using a condition such as:

```python
while song is not None:
```

would never terminate.

Instead, traversal continues until the traversal pointer reaches the starting node again.

This is the standard traversal strategy for all circular linked data structures.

---

> [!NOTE]
> In a Circular Linked List, the stopping condition is **returning to the starting node**, not encountering `None`.

---

## 5️⃣ From Hardcoded to Dynamic Linked Lists

Although manually connecting song objects helped visualize pointer relationships, the instructor explained that this approach is not practical for real-world software.

Imagine a music application containing:

- 500 songs
- 5,000 songs
- 50,000 songs

Writing statements such as:

```python
song1.next_song = song2

song2.next_song = song3

song3.next_song = song4
```

for every song would be impossible to maintain.

Therefore, the next step was to design a reusable data structure capable of automatically managing these connections.

This led to the creation of the **SongList** class.

---

## 6️⃣ Designing the `SongList` Class

Instead of storing songs independently, the SongList class acts as a manager responsible for maintaining the complete Circular Doubly Linked List.

---

### Core Attributes

```python
class SongList:

    def __init__(self):

        self.head = None
        self.tail = None
        self.size = 0
```

Three important attributes are maintained.

| Attribute | Purpose |
|-----------|---------|
| `head` | Stores the first song in the playlist. |
| `tail` | Stores the last song in the playlist. |
| `size` | Tracks the total number of songs currently present. |

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

because the playlist is empty.

---

### Constructor

```python
print("[Song List] [init] Object constructed", self)
```

This log statement helps verify that the SongList object has been successfully created.

---

### Sample CLI Output

```text
[Song List] [init] Object constructed
<__main__.SongList object at 0x0000020E31A5F610>
```

---

## 7️⃣ Dynamically Adding Songs

The heart of the implementation lies inside the `add()` method.

Instead of manually assigning pointers, the method automatically updates all required references whenever a new song is inserted.

---

### Method

```python
def add(self, song):

    self.size += 1

    if self.head is None:

        self.head = song
        self.tail = song

    else:

        self.tail.next_song = song

        self.head.previous_song = song

        song.previous_song = self.tail

        song.next_song = self.head

        self.tail = song
```

The method intelligently handles two different scenarios.

---

### Case 1 — First Song

When the playlist is empty,

```
Head = None

Tail = None
```

adding the first song produces:

```
Head
 │
 ▼
Song1
 ▲
 │
Tail
```

Since there is only one song, both `head` and `tail` point to the same node.

---

### Case 2 — Second Song Onwards

When additional songs are inserted, the Circular Doubly Linked List is automatically maintained.

For example, after adding Song 2,

```
Head
 |
 │
 |
 ▼
Song1 ◄────────► Song2
 ▲                │
 |                |
 └────────────────┘
          ▲
          |
        Tail
```

After adding Song 3,

```
Head
 |
 │
 |
 |
 ▼
Song1 ◄──► Song2 ◄──► Song3
 ▲                     | 
 |                     │
 |                     |
 └─────────────────────┘
          ▲
          |
        Tail
```

Every insertion updates only a few pointers while preserving the circular structure.

---

> [!TIP]
> One of the biggest advantages of encapsulating insertion logic inside the `SongList` class is that the rest of the program never needs to worry about pointer manipulation. The list manages itself, making the implementation reusable, scalable, and much less error-prone.

---


## 8️⃣ Dynamic Forward and Backward Traversal

Once songs are dynamically added to the playlist, the next requirement is to display them.

Instead of writing separate traversal code outside the class every time, the instructor encapsulated the traversal logic inside a dedicated `show()` member function.

This follows one of the fundamental principles of Object-Oriented Programming—**behavior should remain inside the object that owns the data**.

---

### The `show()` Method

```python
def show(self, traverse=True):

    if traverse == True:

        song = self.head

        while True:

            song.show_song()

            song = song.next_song

            if song == self.head:
                break

    else:

        song = self.tail

        while True:

            song.show_song()

            song = song.previous_song

            if song == self.tail:
                break
```

The method accepts a Boolean parameter named `traverse`.

Instead of creating two separate functions such as:

- `show_forward()`
- `show_backward()`

a single function is reused for both directions.

---

### Forward Traversal

Calling

```python
song_list.show(True)
```

starts traversal from the Head.

```
Head
 │
 ▼
Song1
↓
Song2
↓
Song3
↓
Song4
↓
Song5
↓
Head
```

---

### Backward Traversal

Calling

```python
song_list.show(False)
```

starts traversal from the Tail.

```
Tail
 │
 ▼
Song5
↓
Song4
↓
Song3
↓
Song2
↓
Song1
↓
Tail
```

---

### Why Use a Boolean Parameter?

Instead of writing duplicate code, the Boolean flag controls the traversal direction.

| Parameter | Traversal |
|-----------|-----------|
| `True` | Head → Tail |
| `False` | Tail → Head |

This makes the implementation cleaner and easier to maintain.

---

## 9️⃣ Driver Program – Building the Playlist

After implementing the `Song` and `SongList` classes, the instructor demonstrated how they are used together.

The driver program is responsible for:

- Creating the playlist.
- Creating Song objects.
- Adding them to the playlist.
- Displaying the playlist.

---

### Creating the Playlist

```python
song_list = SongList()

print(vars(song_list))
```

Initially,

```text
{
    'head': None,
    'tail': None,
    'size': 0
}
```

The playlist is empty.

---

### Creating Song Objects

Each song is constructed independently.

```python
song1 = Song(
    title="1. Jaan se guzarte hai",
    artist="Shaswat Sachdev, Khan Saab, Irshad Kamil",
    duration=4.5
)
```

Every object construction automatically executes

```python
__init__()
```

producing logs similar to

```text
[Song] [init] Object constructed
<__main__.Song object at 0x...>
```

---

### Adding Songs

The songs are inserted dynamically.

```python
song_list.add(song1)

song_list.add(song2)

song_list.add(song3)
```

After each insertion,

- `size` increases.
- `head` remains unchanged.
- `tail` moves to the newest song.
- Required circular links are updated automatically.

---

### Observing Internal State

The instructor frequently used

```python
print(vars(song_list))

print(vars(song1))

print(vars(song2))
```

to observe how pointers changed after every insertion.

This debugging technique makes linked lists much easier to understand because the internal references become visible.

---

### Sample CLI Output

After inserting the first song,

```text
{
    'head': <Song object>,
    'tail': <Song object>,
    'size': 1
}
```

After inserting the second song,

```text
{
    'head': <Song object>,
    'tail': <Song object>,
    'size': 2
}
```

After inserting the third song,

```text
{
    'head': <Song object>,
    'tail': <Song object>,
    'size': 3
}
```

The exact memory addresses differ with every execution.

---

## 🔟 Constructor Chaining Through Inline Object Creation

Towards the end of the implementation, the instructor demonstrated a cleaner way of constructing objects.

Instead of writing

```python
song1 = Song(...)

song_list.add(song1)
```

the object can be created directly while calling `add()`.

---

### Inline Object Construction

```python
song_list.add(

    song=Song(
        title="1. Jaan se guzarte hai",
        artist="Shaswat Sachdev, Khan Saab, Irshad Kamil",
        duration=4.5
    )

)
```

The same approach was repeated for all remaining songs.

---

### Execution Flow

```
Song(...)
↓
__init__()
↓
Returns Song Object
↓
add()
↓
Pointers Updated
↓
Song Added
```

This technique eliminates unnecessary temporary variables and results in cleaner, more concise code.

---

### Displaying the Playlist

Finally,

```python
song_list.show(True)

song_list.show(False)
```

produced complete forward and backward traversals of the Circular Doubly Linked List.

This demonstrated that the playlist could now be navigated seamlessly in both directions without any manual pointer manipulation.

---

> [!IMPORTANT]
> The transition from a **hardcoded linked list** to a **dynamic `SongList` class** is a significant milestone in Object-Oriented Programming. Instead of connecting objects manually, the data structure itself becomes responsible for maintaining node relationships, making the implementation reusable, scalable, and suitable for real-world software development.

---

## 1️⃣1️⃣ Homework – Implementing Additional Circular Doubly Linked List Operations

To strengthen our understanding of Circular Doubly Linked Lists, the instructor assigned a homework exercise that extended the functionality of the existing `SongList` implementation.

Instead of supporting only insertion at the end, we were asked to design additional operations that are commonly required in real-world linked list implementations.

The objective was to understand how pointer manipulation changes for different insertion and deletion scenarios.

---

### Homework Questions

```python
def add_in_front(self, element):
    pass

def add_in_between(self, element, element1, element2):
    pass

def delete_last():
    pass

def delete_front():
    pass

def delete(element):
    pass
```

The instructor further suggested implementing these operations using **any real-world object** such as:

- Flight
- Chat Message
- Movie
- Book
- Product

instead of Songs.

This reinforces the idea that **linked lists are generic data structures** and can manage any type of object.

---

## 1️⃣2️⃣ Homework Solution – Movie Recommendation Scroller

### Code:

```py movie.hw.py
# Movie recommendation scroller 

"""
movie 1 
name = "1. Iron Man", hero = "Robert Downey Jr.", duration = 2.5

movie 2 
name = "2. Man of Steel:, hero = "Henry Cavil", duration = 2

movie 3 
name = "3. Captian America - the first avenger", hero = "Chris Evans", duration = 2

movie 4
name = "4. Spiderman - No Way Home", hero = "Tom Holland", duration = 2.5

movie 5
name = "5. Thor", hero = "Chris Hemsworth", duration = 2
"""


class Movie():
    def __init__(self, name, hero, duration):
        self.name = name
        self.hero = hero
        self.duration = duration
        self.next_movie = None
        self.previous_movie = None
        print("[Movie] [Init] Object Created ", self)
        
    def show_movie(self):
        print("---------------------------------------------------------------")
        print("[SELF CODE]:",self)
        print("Movie Name:", self.name)
        print("Movie Hero:", self.hero)
        print("Movie Duration:", self.duration)
        print("Next Movie:", self.next_movie)
        print("Previous Movie:", self.previous_movie)
        print("---------------------------------------------------------------")



class Movie_List():
    def __init__(self):
        self.head = None
        self.tail = None
        self.size = 0
        print("[MOVIE LIST] [Init] ", self)
        
    def add_in_last(self, movie):
        
        self.size += 1
        
        if self.size == 1:
            self.head = movie
            self.tail = movie
        else:
            self.tail.next_movie = movie
            self.head.previous_movie = movie
            movie.next_movie = self.head
            movie.previous_movie = self.tail
            self.tail = movie
    
    def add_in_front(self, movie):
        
        self.size += 1
        
        if self.size == 1:
            self.head = self.tail = movie
        else:
            movie.next_movie = self.head
            movie.previous_movie = self.tail
            self.head.previous_movie = movie
            self.tail.next_movie = movie
            self.head = movie
            
    def add_in_between(self, movie, movie_before, movie_after):
        
        self.size += 1
        
        if self.size == 1:
            self.head = self.tail = movie
        else:
            movie_before.next_movie = movie
            movie_after.previous_movie = movie
            movie.next_movie = movie_after
            movie.previous_movie = movie_before
    
    def delete_last(self):
        if self.size == 1:
            self.head = self.tail = None
        else:
            self.head.previous_movie = self.tail.previous_movie
            self.tail.previous_movie.next_movie = self.tail.next_movie
            self.tail = self.tail.previous_movie
        self.size -= 1
    
    def delete_front(self):
        if self.size == 1:
            self.head = self.tail = None
        else:
            self.tail.next_movie = self.head.next_movie
            self.head.next_movie.previous_movie = self.head.previous_movie
            self.head = self.head.next_movie
        self.size -= 1
    
    def delete_movie(self,movie):
        if self.size == 1:
            self.head = self.tail = None
        else:
            movie.next_movie.previous_movie = movie.previous_movie
            movie.previous_movie.next_movie = movie.next_movie
        self.size -= 1
                
    def show(self, traverse=True):
        print("Current Size: ", self.size)
        if traverse:
            movie = self.head
            while True:
                movie.show_movie()
                movie = movie.next_movie
                if movie == self.head:
                    break
        else:
            movie = self.tail
            while True:
                movie.show_movie()
                movie = movie.previous_movie
                if movie == self.tail:
                    break         
movie_list = Movie_List()
print(vars(movie_list))

# movie_list.add_movie_last(movie = Movie(name = "1. Iron Man", hero = "Robert Downey Jr.", duration = 2.5))
# movie_list.add_movie_last(movie = Movie(name = "2. Man of Steel", hero = "Henry Cavil", duration = 2))
# movie_list.add_movie_last(movie = Movie(name = "3. Captian America - the first avenger", hero = "Chris Evans", duration = 2))
# movie_list.add_movie_last(movie = Movie(name = "4. Spiderman - No Way Home", hero = "Tom Holland", duration = 2.5))
# movie_list.add_movie_last(movie = Movie(name = "5. Thor", hero = "Chris Hemsworth", duration = 2))

movie_1 = Movie(name = "1. Iron Man", hero = "Robert Downey Jr.", duration = 2.5)
movie_2 = Movie(name = "2. Man of Steel", hero = "Henry Cavil", duration = 2)

movie_3 = Movie(name = "3. Captian America - the first avenger", hero = "Chris Evans", duration = 2)

movie_4 = Movie(name = "4. Spiderman - No Way Home", hero = "Tom Holland", duration = 2.5)
movie_5 = Movie(name = "5. Thor", hero = "Chris Hemsworth", duration = 2)

movie_list.add_in_last(movie_1)
movie_list.add_in_last(movie_2)
movie_list.add_in_last(movie_3)
movie_list.add_in_front(movie_4)
movie_list.add_in_between(movie_5,movie_2, movie_3)

movie_list.delete_last()
movie_list.delete_front()
movie_list.delete_movie(movie_2)
movie_list.show()
print(vars(movie_list))
```

### Output:
```
> python movie.hw.py
[MOVIE LIST] [Init]  <__main__.Movie_List object at 0x000002D7D9E98440>
{'head': None, 'tail': None, 'size': 0}
[Movie] [Init] Object Created  <__main__.Movie object at 0x000002D7D9E98590>
[Movie] [Init] Object Created  <__main__.Movie object at 0x000002D7D9E74410>
[Movie] [Init] Object Created  <__main__.Movie object at 0x000002D7D9E74550>
[Movie] [Init] Object Created  <__main__.Movie object at 0x000002D7D9C62780>
[Movie] [Init] Object Created  <__main__.Movie object at 0x000002D7D9C62B10>
Current Size:  2
---------------------------------------------------------------
[SELF CODE]: <__main__.Movie object at 0x000002D7D9E98590>
Movie Name: 1. Iron Man
Movie Hero: Robert Downey Jr.
Movie Duration: 2.5
Next Movie: <__main__.Movie object at 0x000002D7D9C62B10>
Previous Movie: <__main__.Movie object at 0x000002D7D9C62B10>
---------------------------------------------------------------
---------------------------------------------------------------
[SELF CODE]: <__main__.Movie object at 0x000002D7D9C62B10>
Movie Name: 5. Thor
Movie Hero: Chris Hemsworth
Movie Duration: 2
Next Movie: <__main__.Movie object at 0x000002D7D9E98590>
Previous Movie: <__main__.Movie object at 0x000002D7D9E98590>
---------------------------------------------------------------
```
As a practical implementation of the homework, a **Movie Recommendation Scroller** was developed using the same Circular Doubly Linked List principles.

Instead of storing Song objects, the linked list now stores **Movie objects**, demonstrating the reusability of Object-Oriented Design.

This project closely resembles the recommendation carousels commonly seen on streaming platforms and entertainment applications.

---

### Movie Object

Each movie stores both its own information and references to neighboring movies.

```python
class Movie():

    def __init__(self, name, hero, duration):

        self.name = name
        self.hero = hero
        self.duration = duration

        self.next_movie = None
        self.previous_movie = None
```

---

### Movie Attributes

Each Movie object contains:

- Movie Name
- Lead Actor (Hero)
- Duration
- Reference to Next Movie
- Reference to Previous Movie

Initially,

```
next_movie = None

previous_movie = None
```

until the movie is inserted into the linked list.

---

### Movie List Manager

A dedicated `Movie_List` class was created to manage the complete Circular Doubly Linked List.

```python
class Movie_List():

    def __init__(self):

        self.head = None
        self.tail = None
        self.size = 0
```

Like the SongList implementation, this manager stores:

- Head
- Tail
- Current Size

and automatically updates pointers whenever movies are inserted or removed.

---

## 1️⃣3️⃣ Insertion Operations

The homework implemented three different insertion operations.

---

### Adding a Movie at the End

```python
movie_list.add_in_last(movie)
```

This operation inserts a new movie after the current tail.

```
Head
 │
 ▼
Movie1 ◄──► Movie2 ◄──► Movie3
 ▲                        │
 └────────────────────────┘
             Tail
```

Complexity

```
O(1)
```

because only a few pointers are updated.

---

### Adding a Movie at the Front

```python
movie_list.add_in_front(movie)
```

The new movie becomes the Head while maintaining circular connectivity.

Before

```
Head
  ↓
Movie1
  ↓
Movie2
```

After

```
Head
  ↓
Movie0
  ↓
Movie1
  ↓
Movie2
```

The Tail automatically points back to the new Head.

---

### Adding Between Two Movies

```python
movie_list.add_in_between(
    movie,
    movie_before,
    movie_after
)
```

This operation inserts a movie between two existing nodes.

Example

Before

```
Movie2
  ↓
Movie3
```

After

```
Movie2
  ↓
Movie5
  ↓
Movie3
```

Only four pointers require modification, making insertion efficient.

---

## 1️⃣4️⃣ Deletion Operations

The homework also implemented several deletion operations.

---

### Delete Last Movie

```python
movie_list.delete_last()
```

Removes the Tail.

Before

```
Movie1
 ↓
Movie2
 ↓
Movie3
 ↓
Movie4 (Tail)
```

After

```
Movie1
   ↓
Movie2
   ↓
Movie3 (Tail)
```

Complexity

```
O(1)
```

---

### Delete First Movie

```python
movie_list.delete_front()
```

Removes the Head.

Before

```
Head
 ↓
Movie1
 ↓
Movie2
```
After

```
Head
 ↓
Movie2
```

Again, only a few pointers change.

---

### Delete Any Movie

```python
movie_list.delete_movie(movie)
```

The specified movie is removed by reconnecting its neighboring nodes.

Before

```
Movie1
↓
Movie2
↓
Movie3

```
Delete
```
Movie2
```
After
```
Movie1
↓
Movie3
```

This demonstrates one of the major advantages of Doubly Linked Lists—nodes can be removed efficiently once their reference is known.

---

## 1️⃣5️⃣ Driver Program

The driver program demonstrated the complete functionality of the Movie Recommendation Scroller.

Movies created:

- Iron Man
- Man of Steel
- Captain America: The First Avenger
- Spider-Man: No Way Home
- Thor

Operations performed:

1. Add at Last
2. Add at Last
3. Add at Last
4. Add at Front
5. Add Between
6. Delete Last
7. Delete Front
8. Delete Specific Movie
9. Display Remaining Movies

This sequence verified that every insertion and deletion operation correctly maintained the Circular Doubly Linked List.

---

### Sample CLI Output

```text
[MOVIE LIST] [Init]
<__main__.Movie_List object at 0x...>

[Movie] [Init] Object Created
<__main__.Movie object at 0x...>

[Movie] [Init] Object Created
<__main__.Movie object at 0x...>

...

Current Size: 2

---------------------------------------------------------------
Movie Name: Captain America - The First Avenger
Movie Hero: Chris Evans
Movie Duration: 2
---------------------------------------------------------------

---------------------------------------------------------------
Movie Name: Thor
Movie Hero: Chris Hemsworth
Movie Duration: 2
---------------------------------------------------------------
```

*(Memory addresses vary with each execution.)*

---

### Complexity Summary

| Operation | Time Complexity |
|-----------|:---------------:|
| Add Last | O(1) |
| Add Front | O(1) |
| Add Between *(node references available)* | O(1) |
| Delete Last | O(1) |
| Delete Front | O(1) |
| Delete Specific Node *(reference available)* | O(1) |
| Forward Traversal | O(n) |
| Backward Traversal | O(n) |

---

# 💡 Important Concepts Learned

| Topic | Learning |
|--------|----------|
| Instance Methods | Encapsulate behavior inside objects rather than manipulating attributes externally. |
| `vars(Class)` | Displays the namespace of a class, including methods and metadata. |
| `vars(Object)` | Displays the attributes stored inside an object instance. |
| Song Object | Demonstrated how objects can store both data and references to other objects. |
| Linked Lists | Explored Singly, Circular Singly, Doubly, and Circular Doubly Linked Lists. |
| Circular Doubly Linked List | Supports continuous traversal in both forward and backward directions. |
| Head & Tail | Maintain the entry and exit points of the linked list. |
| Dynamic Linked Lists | Automatically manage pointer relationships during insertion and deletion. |
| Traversal | Implemented efficient forward and backward navigation. |
| Movie Recommendation Scroller | Applied Circular Doubly Linked List concepts to a real-world application. |

---

# 🌍 Real-World Applications

The concepts covered during today's session are widely used in modern software systems where data needs to be stored dynamically and traversed efficiently in both directions. By combining **Object-Oriented Programming** with **Circular Doubly Linked Lists**, developers can build highly reusable and scalable applications.

---

### Music Streaming Applications

The Song Playlist developed during today's session closely resembles the architecture used by popular music streaming platforms.

Typical features include:

- Next Song
- Previous Song
- Repeat Playlist
- Shuffle Songs
- Recently Played
- Favorite Songs

Since the playlist is circular, the user can continuously navigate through songs without reaching the end of the collection.

Examples:

- Spotify
- YouTube Music
- Apple Music
- Gaana
- JioSaavn

---

### Movie Recommendation Systems

The homework implementation demonstrated how the same Circular Doubly Linked List can be adapted for a Movie Recommendation Scroller.

Applications include:

- Netflix
- Amazon Prime Video
- Disney+ Hotstar
- Sony LIV

Users can continuously browse recommended movies in both forward and backward directions.

---

### Image Galleries

Modern gallery applications allow users to navigate between images using swipe gestures.

```
Image 1
  ↓
Image 2
  ↓
Image 3
  ↓
Image 4
  ↓
Back to Image 1
```

A Circular Doubly Linked List provides an efficient way to implement such navigation.

---

### Browser Navigation

Web browsers internally maintain navigation history.

```
Current Page

← Previous Page

→ Next Page
```

Backward and forward navigation is conceptually similar to traversing previous and next pointers in a Doubly Linked List.

---

### Undo and Redo Systems

Applications such as:

- Microsoft Word
- Adobe Photoshop
- Visual Studio Code

allow users to move backward and forward through previous actions.

A Doubly Linked List efficiently supports these operations by maintaining references to both previous and next states.

---

### Messaging Applications

Chat applications can also benefit from linked structures.

Example:

```
Message 1
↓
Message 2
↓
Message 3
```

Messages may be inserted, deleted, or traversed dynamically without requiring contiguous memory.

---

### Generic Data Structure Reusability

One of the biggest lessons from today's session is that **the data structure remains the same while only the stored object changes**.

Today we used:

- Song

Homework used:

- Movie

The same implementation can also manage:

- Flights
- Students
- Employees
- Books
- Products
- Chat Messages
- Notifications

This demonstrates the power of abstraction and reusability in Object-Oriented Programming.

---

# 📝 Personal Reflection

Today's session provided a practical bridge between **Object-Oriented Programming** and **Data Structures**. While previous classes focused on designing objects and modeling real-world entities, today's lecture demonstrated how these objects can be interconnected to build dynamic and reusable data structures.

Revisiting the **User** class helped reinforce important OOP concepts such as constructors, instance methods, and object encapsulation. The comparison between hardcoded values and dynamic user input also highlighted the importance of designing flexible applications capable of handling real-world user interactions.

The most interesting part of today's class was understanding how different linked list structures evolve from one another. Starting with Singly Linked Lists, progressing through Circular Singly and Doubly Linked Lists, and finally arriving at the Circular Doubly Linked List made the learning process much more intuitive. Visualizing how every pointer contributes to the overall structure greatly improved my understanding of linked data structures.

Another major takeaway was the transition from manually connecting objects to designing a reusable **SongList** class. Encapsulating insertion and traversal logic inside dedicated methods demonstrated how Object-Oriented Programming simplifies complex pointer management and produces cleaner, more maintainable code.

The homework assignment further reinforced these concepts by applying the same Circular Doubly Linked List implementation to a completely different domain—a Movie Recommendation Scroller. This exercise clearly demonstrated that once a generic data structure is designed, it can easily be reused for multiple real-world applications by simply replacing the underlying object type.

Overall, today's session strengthened both my Object-Oriented Programming skills and my understanding of linked data structures. It also helped me appreciate how software engineering focuses on building reusable components rather than rewriting similar logic for different applications.

---

# 📌 Key Takeaways

- Object-Oriented Programming and Data Structures complement each other in designing scalable software.
- Classes encapsulate both data and behavior through instance methods.
- `vars(Class)` displays class-level information, while `vars(Object)` displays instance attributes.
- Linked Lists are formed by connecting objects through reference variables.
- Circular Doubly Linked Lists support continuous traversal in both forward and backward directions.
- `head`, `tail`, and `size` are essential components of dynamic linked list implementations.
- Encapsulating insertion and traversal logic inside a manager class improves code reusability.
- Inline object construction simplifies object creation and insertion.
- The same linked list implementation can manage different object types without changing the underlying algorithm.
- Generic data structures form the basis of reusable software engineering practices.

---

# 📖 Revision Notes

✔ Revision of Object-Oriented Programming

✔ User Class Implementation

✔ Dynamic vs Hardcoded Data

✔ `vars(Class)` vs `vars(Object)`

✔ Song Object Design

✔ Singly Linked List

✔ Circular Singly Linked List

✔ Doubly Linked List

✔ Circular Doubly Linked List

✔ Forward Traversal

✔ Backward Traversal

✔ SongList Class

✔ Dynamic Song Insertion

✔ Head, Tail, and Size

✔ Driver Program

✔ Inline Object Construction

✔ Movie Recommendation Scroller

✔ Insertion Operations

✔ Deletion Operations

✔ Time Complexity Analysis

---

# ❓ Interview Questions

### Q1. What is the difference between a Singly Linked List and a Doubly Linked List?

**Answer:**

A Singly Linked List stores only a reference to the next node, allowing traversal only in the forward direction. A Doubly Linked List stores references to both the next and previous nodes, enabling traversal in both directions and making insertion and deletion operations more efficient.

---

### Q2. Why is a Circular Doubly Linked List preferred for playlist applications?

**Answer:**

A Circular Doubly Linked List allows continuous navigation through songs without reaching a terminating node. Users can move seamlessly to both the next and previous songs, making it ideal for media players and playlist management.

---

### Q3. What are the responsibilities of the `head` and `tail` pointers?

**Answer:**

The `head` pointer references the first node in the linked list, while the `tail` pointer references the last node. Together they enable efficient insertion, deletion, and traversal operations.

---

### Q4. Why is the `SongList` class considered a better design than manually connecting song objects?

**Answer:**

The `SongList` class encapsulates all pointer manipulation within reusable methods such as insertion and traversal. This reduces code duplication, improves maintainability, and allows the data structure to scale dynamically.

---

### Q5. What is the purpose of the `show()` method accepting a Boolean parameter?

**Answer:**

The Boolean parameter determines the traversal direction. Passing `True` performs forward traversal from the Head, while `False` performs backward traversal from the Tail, eliminating the need for separate traversal methods.

---

### Q6. Explain the difference between `vars(Class)` and `vars(Object)`.

**Answer:**

`vars(Class)` returns the namespace of the class, including methods and metadata, whereas `vars(Object)` returns the dictionary of attributes stored inside a specific object instance.

---

### Q7. Why are linked lists considered dynamic data structures?

**Answer:**

Unlike arrays, linked lists do not require contiguous memory allocation. Nodes are created dynamically and connected through references, allowing efficient insertion and deletion without shifting existing elements.

---

### Q8. What is the time complexity of adding a node at the end of a Circular Doubly Linked List when the tail pointer is maintained?

**Answer:**

The operation takes **O(1)** time because the new node can be directly connected to the current tail, and only a few pointers need to be updated.

---

# 🎯 Goals for Next Session

- Explore advanced operations on Circular Doubly Linked Lists.
- Implement searching and deletion algorithms more efficiently.
- Learn additional Object-Oriented Programming principles and best practices.
- Practice building reusable data structures using different real-world objects.
- Strengthen debugging skills by visualizing pointer updates and object relationships.

---

# ✅ Today's Progress Checklist

- [x] Revised Object-Oriented Programming concepts.
- [x] Implemented instance methods inside classes.
- [x] Understood hardcoded versus dynamic object creation.
- [x] Designed a Song object with bidirectional references.
- [x] Studied Singly, Circular Singly, Doubly, and Circular Doubly Linked Lists.
- [x] Implemented forward and backward traversal.
- [x] Designed the `SongList` class.
- [x] Learned dynamic insertion into a Circular Doubly Linked List.
- [x] Understood the role of `head`, `tail`, and `size`.
- [x] Used inline object construction.
- [x] Implemented a Movie Recommendation Scroller using the same data structure.
- [x] Practiced insertion and deletion operations on a Circular Doubly Linked List.

---

> [!TIP]
> One of the strongest principles in software engineering is **reusability**. Today's session demonstrated that once a well-designed data structure is built, it can manage virtually any type of object—from songs and movies to flights, products, or chat messages—without changing its core logic.

---

**Status:** Completed ✅

**Training Day:** 9

**Maintained By:** Saksham Kumar