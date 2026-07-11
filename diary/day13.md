<!--
title: MongoDB Atlas Integration, PyMongo, Password Hashing & Database Abstraction
date: 2026-07-10
tags: MongoDB, MongoDB Atlas, NoSQL, PyMongo, SHA-256, File Handling, Backend Development, Database
summary: Learned the fundamentals of MongoDB Atlas, connected Python applications to a cloud database using PyMongo, implemented SHA-256 password hashing, stored user information in both CSV files and MongoDB collections, and designed a layered backend architecture using helper classes.
-->

# 🚀 Day 13: MongoDB Atlas, PyMongo & Secure User Data Management

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 13  
**Date:** 10 July 2026

---

# 📖 Daily Training Record – Day 13

## 📌 Overview

Today's session marked an important transition from local file-based applications to **cloud-based database development**. After learning File Handling and JSON in the previous session, today's lecture focused on integrating Python applications with **MongoDB Atlas**, enabling programs to permanently store structured data inside a cloud-hosted NoSQL database. :contentReference[oaicite:0]{index=0}

The session began with an introduction to **MongoDB Atlas**, where we learned the complete setup process required before connecting an application to the database. This included creating a cloud database cluster, configuring database users, setting appropriate access permissions, enabling IP whitelisting, creating databases and collections, and preparing the environment for application connectivity. While the classroom demonstration used actual connection credentials, these sensitive details are intentionally omitted from this diary for security reasons. :contentReference[oaicite:1]{index=1}

After completing the setup, we connected Python to MongoDB Atlas using the **PyMongo** library. The instructor demonstrated how to establish a secure connection with the cloud database, verify connectivity using a ping request, access databases and collections, and retrieve available collection names.

The second half of the session focused on building a small backend application using **Object-Oriented Programming**. A `User` class was created to represent user information such as name, phone number, email address, and password. Instead of storing passwords directly, the instructor introduced **SHA-256 hashing**, demonstrating how sensitive information should be transformed before being stored. This emphasized an important software security principle: user passwords should never be stored in plain text.

To improve software design, helper classes were introduced. A `FileHelper` class handled writing user information to CSV files, while a `DBHelper` class managed all interactions with MongoDB. Separating these responsibilities illustrated how layered software architecture improves modularity, maintainability, and code reuse.

Finally, a driver program combined all components into a complete workflow that accepted user input, hashed the password, converted the user object into different formats, stored the information in a CSV file, and inserted the same data into MongoDB Atlas as a document. This provided a practical introduction to backend application development using Python and cloud databases. :contentReference[oaicite:2]{index=2}

Overall, today's session connected Python programming with database systems, security practices, and professional software architecture, providing valuable insight into how modern backend applications manage user information securely.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the fundamentals of MongoDB and NoSQL databases.
- Learn the hierarchy of MongoDB Atlas, including clusters, databases, collections, and documents.
- Configure a MongoDB Atlas cloud database for application development.
- Connect Python applications to MongoDB Atlas using PyMongo.
- Verify database connectivity through a ping operation.
- Access databases and collections programmatically.
- Design a `User` class using Object-Oriented Programming.
- Understand why passwords should be hashed before storage.
- Implement password hashing using the SHA-256 algorithm.
- Convert objects into CSV and dictionary representations.
- Store data in both CSV files and MongoDB collections.
- Build reusable helper classes for file and database operations.
- Understand the advantages of layered software architecture.

---

# 📚 Key Learnings

## 1️⃣ Introduction to MongoDB

Today's technical session began with an introduction to **MongoDB**, one of the most widely used **NoSQL databases** in modern software development. Unlike traditional relational databases that organize data into tables and rows, MongoDB stores information as flexible **documents** inside **collections**, making it particularly suitable for applications that require scalable and dynamic data structures. :contentReference[oaicite:3]{index=3}

The instructor demonstrated how MongoDB Atlas allows developers to create cloud-hosted databases that can be accessed securely from anywhere through an Internet connection.

---

## What is MongoDB?

MongoDB is a **document-oriented NoSQL database** designed to store structured information in the form of JSON-like documents.

Instead of organizing data into tables,

MongoDB organizes information as:

```
Cluster
↓
Database
↓
Collection
↓
Documents
```

Each document contains related information represented as key-value pairs.

---

## Why MongoDB?

MongoDB has become one of the most popular databases because it provides several advantages:

- Flexible document structure.
- Easy scalability.
- High performance.
- Cloud-hosted deployments.
- Native JSON-like document format.
- Strong integration with modern web applications.

These features make MongoDB particularly suitable for applications with rapidly evolving data requirements.

---

## MongoDB Hierarchy

The instructor explained the hierarchical organization of MongoDB.

```
  MongoDB Atlas
        │
        ▼
     Cluster
        │
        ▼
    Database
        │
        ▼
    Collection
        │
        ▼
    Documents
```

Each level serves a specific purpose within the overall database architecture.

---

### Cluster

A **Cluster** is the highest-level container provided by MongoDB Atlas.

It contains one or more databases and represents the cloud database deployment.

---

### Database

A database stores related collections.

Examples:

```
Training

Employee

Hospital

College
```

Each application typically maintains its own database.

---

### Collection

A collection groups together similar documents.

It serves a role comparable to a table in relational databases.

Examples:

```
Users

Students

Products

Orders
```

Unlike relational tables, collections do not require every document to have an identical structure.

---

### Documents

A document is the smallest unit of data storage in MongoDB.

Example:

```json
{
    "name": "Saksham",
    "phone": "9876543210",
    "email": "example@email.com"
}
```

Each document stores information using **key-value pairs**.

---

## MongoDB vs Relational Databases

During the discussion, the instructor briefly compared MongoDB with traditional SQL databases.

| SQL Database | MongoDB |
|--------------|----------|
| Database | Database |
| Table | Collection |
| Row | Document |
| Column | Field |
| Fixed Schema | Flexible Schema |

One of MongoDB's biggest advantages is its ability to accommodate documents with varying structures without requiring schema modifications.

---

## MongoDB Atlas

Rather than installing MongoDB locally,

today's session used **MongoDB Atlas**, the official cloud platform for hosting MongoDB databases.

The setup process demonstrated in class included:

- Creating a MongoDB Atlas account.
- Provisioning a cloud cluster.
- Configuring database users.
- Assigning appropriate roles.
- Enabling network access.
- Creating databases and collections.
- Preparing the environment for Python connectivity.

For security reasons, all sensitive connection details such as usernames, passwords, connection URIs, and cluster identifiers are intentionally excluded from this diary, even though they were configured during the classroom demonstration. :contentReference[oaicite:4]{index=4}

---

> [!NOTE]
> MongoDB Atlas allows developers to host databases on cloud providers such as **AWS**, **Google Cloud Platform (GCP)**, and **Microsoft Azure**. Applications can securely access these databases over the Internet, making Atlas a popular choice for modern web, mobile, and cloud-native applications.

---

## 2️⃣ Setting Up MongoDB Atlas

Before a Python application can communicate with MongoDB, the database environment must be configured correctly. The instructor demonstrated the complete setup process using **MongoDB Atlas**, the cloud-hosted version of MongoDB. This setup allows applications to access databases securely over the Internet without installing MongoDB locally. :contentReference[oaicite:0]{index=0}

The classroom demonstration covered the essential configuration steps required before writing any Python code.

---

## MongoDB Atlas Setup Workflow

The complete setup process discussed during the session can be summarized as follows.

```
Create MongoDB Atlas Account
↓
Create Cloud Cluster
↓
Create Database User
↓
Assign Permissions
↓
Configure Network Access
↓
Create Database
↓
Create Collection
↓
Connect Python Application
```

Once these steps are completed, the application becomes ready to communicate with the cloud database.

---

## Creating a Cloud Cluster

The first step is creating a **Cluster**.

A cluster is the cloud infrastructure that hosts databases.

```
MongoDB Atlas
↓
Cluster
↓
Database Storage
```

Depending on the project requirements, different cloud providers can be selected.

Examples include:

- Amazon Web Services (AWS)
- Google Cloud Platform (GCP)
- Microsoft Azure

For learning purposes, the free-tier cluster is sufficient.

---

## Creating a Database User

After creating the cluster,

a dedicated **Database User** is created.

This user acts as the application's identity while connecting to MongoDB.

The user account contains:

- Username
- Password
- Access Permissions

Only authenticated users are allowed to access the database.

---

## Assigning Roles

The instructor demonstrated assigning the appropriate role to the database user.

Roles determine what actions a user is permitted to perform.

Examples include:

- Read Data
- Write Data
- Create Collections
- Delete Documents
- Administrative Operations

During today's demonstration, administrative permissions were assigned for development purposes. In production applications, however, developers generally follow the **Principle of Least Privilege**, granting only the permissions actually required by the application.

---

## Configuring Network Access

MongoDB Atlas also requires network access to be configured before allowing incoming connections.

The classroom demonstration included adding an IP entry to the Network Access (IP Whitelist) settings so that the development machine could communicate with the cloud database. :contentReference[oaicite:1]{index=1}

Conceptually,

```
Application
↓
Internet
↓
Allowed IP Address
↓
MongoDB Atlas
```

Only approved network addresses are permitted to establish database connections.

---

## Creating a Database and Collection

Once authentication and network access are configured,

the database structure is prepared.

Hierarchy

```
Cluster
↓
Database
↓
Collection
↓
Documents
```

Today's project created a database dedicated to the training application and a collection for storing user information. The actual database and collection names used during the classroom demonstration are omitted here because they are implementation-specific and not essential for understanding the concept. :contentReference[oaicite:2]{index=2}

---

## Installing PyMongo

To allow Python to communicate with MongoDB,

the instructor installed the official MongoDB driver.

Installation command:

```bash
pip install "pymongo[srv]==3.12"
```

The instructor also emphasized two important prerequisites:

- Ensure that the system has an active Internet connection.
- Ensure that the correct Python Virtual Environment is selected before installing packages.

After installation,

Python gains the ability to create database connections and perform CRUD operations.

---

## Important Password Note

While demonstrating the connection process,

the instructor highlighted an important practical issue.

Connection strings follow the **RFC 3986 URL standard**.

Special characters inside passwords (such as `@`, `#`, `%`, `&`, etc.) must therefore be **URL-encoded** before they are included in a MongoDB connection string.

Instead of placing passwords directly into the URI,

they should either be:

- Properly URL-encoded, or
- Safely handled through environment variables in production applications.

For security reasons, the actual classroom connection string and credentials are intentionally omitted from this diary. :contentReference[oaicite:3]{index=3}

---

## 3️⃣ Connecting Python to MongoDB Atlas

After completing the Atlas configuration,

the instructor demonstrated how Python establishes a connection with the cloud database using the **PyMongo** library.

The connection process consists of three major steps:

1. Create a MongoDB client.
2. Connect to the Atlas cluster.
3. Verify the connection.

---

### Classroom Code

```python
from pymongo import MongoClient
from pymongo.server_api import ServerApi

client = MongoClient(
    uri,
    server_api=ServerApi("1")
)
```

*(The actual URI used during the classroom session has been intentionally omitted for security reasons.)*

---

## Understanding `MongoClient`

`MongoClient` acts as the communication bridge between the Python application and MongoDB Atlas.

```
Python Application
        │
        ▼
    MongoClient
        │
        ▼
 MongoDB Atlas
```

All database operations are performed through this client object.

---

## Server API Version

The instructor also specified

```python
ServerApi("1")
```

This ensures that the application communicates using a stable MongoDB Server API version, improving compatibility across future database updates.

---

## Verifying the Connection

Once the client object has been created,

the application verifies that the connection is working correctly.

### Classroom Code

```python
try:

    client.admin.command("ping")

    print(
        "Pinged your deployment. "
        "You successfully connected to MongoDB!"
    )

except Exception as e:

    print(e)
```

---

### Execution Flow

```
Python
↓
MongoClient
↓
Send Ping
↓
MongoDB Atlas
↓
Connection Successful
```

If the server responds successfully,

the application confirms that communication has been established.

---

### Sample CLI Output

```text
Pinged your deployment.
You successfully connected to MongoDB!
```

If any configuration problem exists,

such as:

- Incorrect credentials
- Network restrictions
- Invalid connection string
- Internet connectivity issues

the exception block displays the corresponding error message.

---

## Why Perform a Ping?

The instructor explained that a **ping operation** is a simple way to verify connectivity before attempting any database operations.

Instead of discovering connection problems while inserting data,

the application checks the connection immediately after creating the client.

This simplifies debugging and improves reliability.

---

> [!IMPORTANT]
> Establishing a secure database connection requires more than just writing Python code. Proper authentication, network configuration, package installation, and connection verification are all essential steps. In professional applications, **database credentials should never be hardcoded** inside source code; they are typically stored securely using **environment variables or secret management services**.

---

## 4️⃣ Accessing Databases and Collections

Once the connection with MongoDB Atlas was successfully established, the instructor demonstrated how Python applications access databases and collections through the `MongoClient` object.

Unlike relational databases where SQL queries are written directly, MongoDB first requires selecting the appropriate database, followed by the desired collection.

---

## MongoDB Navigation

The navigation hierarchy follows:

```
MongoClient
↓
Database
↓
Collection
↓
Documents
```

Every database operation begins by selecting a database.

---

## Selecting a Database

### Classroom Code

```python
db = client["trcs102"]
```

This statement does **not** immediately create the database.

Instead,

it returns a reference to the database.

If the database already exists,

Python connects to it.

If it does not exist,

MongoDB automatically creates it when the first document is inserted.

---

### Internal Working

```
MongoClient
↓
"trcs102"
↓
Database Object
```

This database object becomes the entry point for all future operations.

---

## Listing Available Collections

After selecting the database,

the instructor demonstrated how to retrieve the names of all available collections.

### Classroom Code

```python
print(db.list_collection_names())
```

---

### Sample Output

```text
['users']
```

If multiple collections exist,

the output may look similar to:

```text
['users', 'students', 'products']
```

This method is useful for verifying whether the required collection already exists.

---

## Selecting a Collection

The next step is selecting the collection where user documents will be stored.

### Classroom Code

```python
collection = db["users"]
```

Again,

this statement simply creates a reference to the collection.

MongoDB creates the collection automatically when the first document is inserted.

---

### MongoDB Hierarchy

```
   MongoClient
        │
        ▼
    Database
        │
        ▼
    Collection
        │
        ▼
    Documents
```

Every document inserted later will become part of this collection.

---

## Automatic Collection Creation

One interesting feature of MongoDB discussed during the lecture is that developers usually do **not** need to manually create collections beforehand.

Example:

```python
collection = db["users"]
```

If

```
users
```

does not already exist,

MongoDB automatically creates it during the first insertion.

This behavior differs significantly from relational database systems where tables are generally created explicitly before storing data.

---

## MongoDB Document Structure

Each record stored inside the collection becomes a document.

Example

```json
{
    "name": "Saksham",
    "phone": "9876543210",
    "email": "example@email.com"
}
```

Unlike SQL,

different documents inside the same collection may contain different fields if required.

---

## 5️⃣ Designing the User Class

After connecting to MongoDB,

the instructor began building the application using **Object-Oriented Programming**.

The first class created was the `User` class.

Instead of directly storing dictionaries,

the application first models every user as an object.

---

## Purpose of the User Class

The User class represents a registered user inside the application.

Each object stores information such as:

- Name
- Phone Number
- Email Address
- Password

Later,

this object can be converted into multiple formats depending on the application's requirements.

---

### Object Lifecycle

```
User Input
↓
User Object
↓
CSV

OR

Dictionary
↓
MongoDB
```

The object serves as the central representation of user data.

---

## Classroom Constructor

```python
class User:

    def __init__(

        self,

        name,

        phone,

        email,

        password

    ):

        self.name = name

        self.phone = phone

        self.email = email

        self.password = password
```

---

## Constructor Responsibilities

The constructor performs the following tasks:

- Receives user information.
- Initializes object attributes.
- Stores the data inside memory.
- Creates a complete User object.

Example

```
Input
↓
"Saksham"
↓
User Object Created
```

---

## Memory Representation

```
User Object
│
├── name
├── phone
├── email
└── password
```

Every object maintains its own independent copy of these attributes.

---

## Collecting User Input

The instructor then demonstrated collecting input from the user.

Example

```python
name = input("Enter Name: ")

phone = input("Enter Phone: ")

email = input("Enter Email: ")

password = input("Enter Password: ")
```

Finally,

the object is created.

```python
user = User(

    name,

    phone,

    email,

    password

)
```

---

### Execution Flow

```
Keyboard
↓
Input()
↓
Constructor
↓
User Object
```

The object now becomes available for further processing.

---

## Why Use Classes?

Instead of storing unrelated variables,

Object-Oriented Programming groups related information together.

Without classes

```python
name

phone

email

password
```

With classes

```
User
│
├── name
├── phone
├── email
└── password
```

This improves:

- Readability
- Maintainability
- Reusability
- Extensibility

---

## Foundation for Future Operations

The instructor explained that the User object created today will later support multiple operations, including:

- Password hashing.
- CSV conversion.
- Dictionary conversion.
- Database insertion.

This demonstrates one of the strengths of Object-Oriented Programming—**one object can expose multiple behaviors while maintaining a single representation of the underlying data**.

---

> [!NOTE]
> Creating a dedicated `User` class instead of working directly with dictionaries or individual variables follows good software engineering practices. It provides a clear data model, simplifies future enhancements, and makes the application easier to maintain as additional features such as authentication, validation, or profile management are introduced.

---

## 6️⃣ Securing Passwords Using SHA-256 Hashing

After creating the `User` class, the instructor addressed one of the most important topics in backend development—**password security**.

Instead of storing passwords exactly as entered by the user, the application transforms them using the **SHA-256 hashing algorithm** before saving them.

This ensures that even if the database is compromised, the original passwords are not directly exposed. :contentReference[oaicite:0]{index=0}

---

## Why Not Store Plain Text Passwords?

Consider the following example.

```text
Name      : Saksham

Password  : mypassword123
```

If this information is stored directly inside the database,

anyone who gains access to the database can immediately view the user's password.

```
Database
↓
Name
↓
Password
↓
Visible to Anyone
```

This creates a major security risk.

---

## Hashing

To solve this problem,

the instructor introduced **SHA-256**, a cryptographic hashing algorithm.

Instead of storing

```
mypassword123
```

the application stores something similar to

```
ef92b778bafe771e89245b89ecbc...
```

The original password is transformed into a fixed-length hash value.

---

### Password Flow

```
User Password
↓SHA-256
↓Hash Value
↓Store in Database
```

Only the hash value is stored.

The original password is never saved.

---

## What is SHA-256?

SHA-256 stands for

**Secure Hash Algorithm – 256-bit**

It belongs to the SHA-2 family of cryptographic hash functions.

Some important characteristics are:

- Produces a fixed-length output.
- Deterministic (same input always produces the same hash).
- Extremely difficult to reverse.
- Designed to detect data modification.

It is widely used in:

- Password Storage
- Digital Signatures
- Blockchain
- Certificates
- Data Integrity Verification

---

## Classroom Code

```python
import hashlib

encrypted_password = hashlib.sha256(

    password.encode()

).hexdigest()
```

---

## Understanding Each Step

### Step 1 – Encode the Password

```python
password.encode()
```

Python strings must first be converted into bytes.

Example

```
"hello"
↓b'hello'
```

The SHA-256 algorithm operates on bytes rather than ordinary strings.

---

### Step 2 – Apply SHA-256

```python
hashlib.sha256(...)
```

The algorithm computes the cryptographic hash.

---

### Step 3 – Convert to Hexadecimal

```python
.hexdigest()
```

The resulting binary hash is converted into a readable hexadecimal string.

Example

```
Binary
↓Hexadecimal
↓2cf24dba5fb0a...
```

This hexadecimal representation is what gets stored.

---

## Internal Working

```
Password
↓encode()
↓Bytes
↓SHA-256
↓Binary Hash
↓hexdigest()
↓Hexadecimal String
```

---

## Important Property

The instructor emphasized an important concept:

```
Password
↓
Hash
↓
Store
```

The application **does not decrypt** the hash later.

Instead,

during login,

the entered password is hashed again.

```
Entered Password
↓
SHA-256
↓
Compare Hashes
↓
Login Success / Failure
```

If both hashes match,

the passwords are considered identical.

---

## Hashing vs Encryption

Although the classroom discussion referred to this process as "encryption," it is more accurately described as **hashing**.

| Encryption | Hashing |
|------------|---------|
| Can be decrypted using a key | Designed to be one-way |
| Used for confidential communication | Used for verification and password storage |
| Original data can be recovered | Original data is not intended to be recovered |

Modern authentication systems store **hashed passwords**, not encrypted passwords.

---

## 7️⃣ Converting Objects into Different Formats

After securing the password,

the instructor demonstrated how the same `User` object can be converted into multiple representations depending on where it needs to be stored.

Two helper methods were added:

- `to_csv()`
- `to_dictionary()`

This concept is often referred to as **object serialization**.

---

## Why Convert Objects?

The `User` object exists only in memory.

Different storage systems require different formats.

```
User Object
        │
        ├─────────────► CSV File
        │
        └─────────────► MongoDB
```

Therefore,

the object must first be transformed into an appropriate representation.

---

## Method 1 – `to_csv()`

The first helper method converts the object into a comma-separated string.

### Classroom Code

```python
def to_csv(self):

    return (

        f"{self.name},"

        f"{self.phone},"

        f"{self.email},"

        f"{self.password}\n"

    )
```

---

### Example Output

```text
Saksham,

9876543210,

example@email.com,

<hashed_password>
```

This format can be written directly into a CSV file.

---

### Conversion Flow

```
User Object
↓
CSV String
↓
users.csv
```

---

## Method 2 – `to_dictionary()`

MongoDB stores **documents**, which closely resemble Python dictionaries.

The instructor therefore added another helper method.

### Classroom Code

```python
def to_dictionary(self):

    return {

        "name": self.name,

        "phone": self.phone,

        "email": self.email,

        "password": self.password

    }
```

---

### Example Dictionary

```python
{

    "name": "Saksham",

    "phone": "9876543210",

    "email": "example@email.com",

    "password": "<hashed_password>"

}
```

This dictionary can now be inserted directly into MongoDB.

---

### MongoDB Flow

```
User Object
↓
Dictionary
↓
MongoDB Document
```

---

## Advantages of Object Serialization

By providing multiple conversion methods,

the same object can be reused in different parts of the application.

| Method | Output | Purpose |
|---------|--------|---------|
| `to_csv()` | CSV String | Store in text/CSV file |
| `to_dictionary()` | Dictionary | Store as MongoDB document |

Instead of rewriting conversion logic repeatedly,

the object itself becomes responsible for transforming its own data into the required format.

---

> [!IMPORTANT]
> Today's session introduced two essential backend development practices: **never store user passwords in plain text** and **separate object representation from storage format**. By hashing passwords with SHA-256 and providing dedicated serialization methods, the application becomes both more secure and easier to extend for multiple storage systems such as CSV files and MongoDB.

---

## 8️⃣ FileHelper Class – Managing File Operations

After designing the `User` class, the instructor introduced a separate helper class named **FileHelper**.

Instead of writing file-handling code directly inside the main program, all file-related operations were encapsulated within this dedicated class.

This follows one of the important software engineering principles:

> **Each class should have a single responsibility.**

In this case,

the responsibility of `FileHelper` is simply to manage file operations.

---

## Why Create a Helper Class?

Without a helper class,

the main program would look like:

```
User Input
↓
Hash Password
↓
Open File
↓
Write Data
↓
Close File
↓
Database Code
↓
Display Output
```

As the application grows,

the `main()` function becomes difficult to read and maintain.

Instead,

```
Main Program
↓
FileHelper
↓
File Operations
```

The main program only requests file operations,

while the helper class performs the implementation.

---

## Overall Architecture

```
Main Program
        │
        ├──────────────► FileHelper
        │                    │
        │                    ▼
        │               users.csv
        │
        └──────────────► DBHelper
                             │
                             ▼
                        MongoDB Atlas
```

This layered architecture keeps responsibilities separate.

---

## Constructor

The constructor opens the file.

### Classroom Code

```python
class FileHelper:

    def __init__(

        self,

        fileName="users.csv"

    ):

        self.file = open(

            fileName,

            "a"

        )
```

---

### What Happens?

When

```python
helper = FileHelper()
```

is executed,

Python automatically performs

```
Create Object
↓
Open users.csv
↓
Store File Object
↓
Ready to Write
```

The file remains available until it is explicitly closed.

---

## Why Append Mode?

The instructor intentionally opened the file using

```python
"a"
```

instead of

```python
"w"
```

because user registrations should **not overwrite previously stored records**.

Using append mode ensures that every newly registered user is added to the end of the file.

Example

Before

```text
John,...

Alice,...
```

After a new registration

```text
John,...

Alice,...

Saksham,...
```

The previous data remains intact.

---

## Writing Data

The next method writes data into the file.

### Classroom Code

```python
def write_in_file(

    self,

    data=None

):

    self.file.write(data)
```

---

### Execution Flow

```
CSV Data
↓
write_in_file()
↓
write()
↓
users.csv
```

The method accepts a CSV string generated by the `User` object and writes it directly into the file.

---

## Closing the File

Finally,

the instructor implemented

```python
def close_file(self):

    self.file.close()
```

---

### Why Close the File?

Closing the file ensures:

- Data is written successfully.
- Operating system resources are released.
- File corruption is avoided.
- Other applications can safely access the file.

Execution

```
Write Data
↓
Flush Buffer
↓
Close File
↓
Operation Complete
```

---

## Advantages of FileHelper

Separating file operations into a dedicated class provides several benefits.

- Cleaner code.
- Better readability.
- Easier maintenance.
- Reusable implementation.
- Reduced duplication.

If the storage mechanism changes in the future,

only the helper class needs modification.

The rest of the application remains unchanged.

---

## 9️⃣ DBHelper Class – Database Abstraction

After completing file handling,

the instructor designed another helper class called **DBHelper**.

Its purpose is to manage every interaction with MongoDB.

Instead of allowing the main program to communicate directly with the database,

all database-related operations are encapsulated inside this class.

---

## Why Database Abstraction?

Without abstraction,

every database operation would appear inside the main program.

```
Main
↓
Connect Database
↓
Select Collection
↓
Insert Data
↓
Handle Errors
↓
Close Connection
```

This quickly becomes difficult to maintain.

Instead,

```
Main Program
↓
DBHelper
↓
MongoDB
```

The main program simply requests operations,

while DBHelper performs the implementation.

---

## Constructor

The constructor creates the database connection.

### Classroom Code

```python
class DBHelper:

    def __init__(

        self,

        db_name="trcs102"

    ):

        self.client = MongoClient(...)

        self.db = self.client[db_name]

        print(

            "[DBHelper] Connection created"

        )
```

*(Sensitive connection details have been intentionally omitted.)*

---

### Execution Flow

```
Application Starts
↓
DBHelper Created
↓
MongoClient
↓
Database Selected
↓
Ready for Operations
```

The connection is created only once,

making future database operations much simpler.

---

## Selecting a Collection

The next method selects the collection.

### Classroom Code

```python
def select_collection(

    self,

    collection_name="users"

):

    self.collection = self.db[collection_name]

    print(

        "[DBHelper] Collection Selected:",

        collection_name

    )
```

---

### Internal Flow

```
Database
↓
Collection Name
↓
Collection Object
```

This collection object becomes the destination for all future insert operations.

---

## Saving Data

The final method inserts the document into MongoDB.

### Classroom Code

```python
def save_data(

    self,

    data

):

    inserted_data_id = (

        self.collection.insert_one(data)

    )

    print(

        "[DBHelper] Document Saved."

    )
```

---

### Data Flow

```
Python Dictionary
↓
insert_one()
↓
MongoDB
↓
Document Created
```

The instructor explained that `insert_one()` inserts exactly one document into the selected collection.

---

### Returned Value

MongoDB automatically generates a unique identifier for every document.

```
Insert Document
↓
MongoDB
↓
ObjectId Generated
↓
Returned to Python
```

This identifier uniquely distinguishes each stored document.

---

## Layered Backend Architecture

Combining both helper classes results in a clean backend design.

```
User
↓
User Object
        │
        ├────────────► FileHelper
        │                  ▼
        │              users.csv
        │
        └────────────► DBHelper
                           │
                           ▼
                     MongoDB Atlas
```

Every class now has a clearly defined responsibility.

| Class | Responsibility |
|--------|----------------|
| User | Store and transform user data |
| FileHelper | Handle file operations |
| DBHelper | Handle database operations |

This separation greatly improves software maintainability.

---

> [!TIP]
> Creating dedicated helper classes such as **FileHelper** and **DBHelper** is a common backend development practice. By separating file management and database communication from the main application logic, the code becomes modular, reusable, easier to test, and significantly simpler to maintain as the project grows.

---

## 🔟 Building the Complete User Registration Application

After implementing all the individual classes, the instructor combined them into a single backend application.

Instead of performing every task inside one large file, the application was divided into multiple modules, each responsible for a specific task.

This modular approach improves readability, maintainability, and scalability.

---

## Project Structure

The application consists of four major components.

```
session13.py

        │

        ├────────────► User

        │

        ├────────────► FileHelper

        │

        └────────────► DBHelper
```

Each module performs one dedicated responsibility.

---

## Responsibilities of Each Module

| Module | Responsibility |
|---------|----------------|
| `User` | Stores user information and converts it into different formats |
| `FileHelper` | Writes CSV data into a file |
| `DBHelper` | Connects to MongoDB and inserts documents |
| `main()` | Coordinates the complete application workflow |

This organization follows the principle of **Separation of Concerns**, where each module focuses on a single task.

---

## Step 1 – Creating the User Object

The application begins by creating a new `User` object.

### Classroom Code

```python
user = User()

user.input_details()

user.show()
```

---

### Execution Flow

```
Program Starts

↓

User Object Created

↓

User Enters Details

↓

Object Updated

↓

Display User Details
```

The user object now contains all the information entered from the keyboard.

---

## Step 2 – Password Hashing

During input,

the password is automatically transformed into its SHA-256 hash.

```
Keyboard

↓

Password

↓

SHA-256

↓

Hashed Password

↓

Stored in User Object
```

The original password is no longer retained inside the object.

This ensures that all future storage operations use the hashed value instead of plain text.

---

## Step 3 – Creating Multiple Representations

The same object is then converted into two different formats.

### CSV Representation

```python
csv_data = user.to_csv()
```

```
User Object

↓

CSV String
```

---

### Dictionary Representation

```python
user_data = user.to_dictionary()
```

```
User Object

↓

Python Dictionary
```

These two representations are used by different storage systems.

---

## Step 4 – Saving to CSV

The CSV representation is written into a file.

### Classroom Code

```python
file_helper = FileHelper()

file_helper.write_in_file(csv_data)

file_helper.close_file()
```

---

### Execution Flow

```
CSV String

↓

FileHelper

↓

users.csv
```

The registration details are now permanently stored inside the CSV file.

---

## Step 5 – Saving to MongoDB

Next,

the dictionary representation is inserted into MongoDB.

### Classroom Code

```python
db_helper = DBHelper()

db_helper.select_collection()

db_helper.save_data(user_data)
```

---

### Execution Flow

```
Dictionary

↓

DBHelper

↓

MongoDB Collection

↓

Document Created
```

The same information now exists inside both:

- CSV File
- MongoDB Collection

---

## Complete Backend Workflow

Combining every step gives the following application architecture.

```
               User
                ↓
            Enter Details
                ↓
            User Object
                ↓
            Hash Password
                ↓
──────────────────────────────
    │                        │
    ▼                        ▼
CSV String              Dictionary
    │                        │
    ▼                        ▼
FileHelper               DBHelper
    │                        │
    ▼                        ▼
users.csv              MongoDB Atlas
```

This demonstrates how a single object can be transformed into multiple formats and stored using different storage technologies.

---

## Advantages of This Design

Today's implementation follows several professional software engineering practices.

- Object-Oriented Programming
- Separation of Concerns
- Layered Architecture
- Code Reusability
- Database Abstraction
- Secure Password Storage
- Multiple Storage Backends

Instead of tightly coupling every operation,

each class performs only one responsibility.

This makes the project significantly easier to maintain and extend.

---

## Example Execution

A typical execution of the application follows this sequence.

```text
Enter your name:
Saksham

Enter your phone:
9876543210

Enter your email:
example@email.com

Enter your password:
********

========================================
---------User Details------
Name: Saksham
Phone: 9876543210
Email: example@email.com
========================================

[DBHelper] Connection created

[DBHelper] Collection Selected: users

[DBHelper] Document Saved.
```

The password is intentionally **not displayed** because it has already been converted into its SHA-256 hash before storage.

---

## Backend Architecture Summary

Today's project successfully integrates several concepts learned throughout the training.

```
Python OOP
        │
        ▼
User Object
        │
        ▼
SHA-256 Hashing
        │
        ▼
Object Serialization
        │
        ├────────────► CSV File
        │
        └────────────► MongoDB Atlas
```

Rather than treating each concept independently, the application combines them into a practical backend system that models a simple user registration workflow.

---

# 🌍 Real-World Applications

The concepts covered today form the foundation of many backend software systems and web applications.

---

## User Registration Systems

Almost every modern application requires user registration.

Examples include:

- Social Media Platforms
- Banking Applications
- E-commerce Websites
- Educational Portals
- Hospital Management Systems

General workflow:

```
User
↓
Registration Form
↓
Hash Password
↓
Database
↓
Account Created
```

Today's project follows this same architecture on a smaller scale.

---

## Authentication Systems

Password hashing is an essential component of authentication systems.

Typical login process:

```
User Password
↓
SHA-256
↓
Compare Stored Hash
↓
Authentication Result
```

The actual password never needs to be stored or retrieved.

---

## Cloud Databases

MongoDB Atlas demonstrates how applications can store data remotely.

Examples include:

- Mobile Applications
- SaaS Platforms
- E-commerce Systems
- AI Applications
- Content Management Systems

Cloud databases enable applications to access shared data from anywhere with proper authentication.

---

## Layered Backend Development

The helper classes introduced today reflect common backend architecture.

```
Presentation Layer
↓
Business Logic Layer
↓
Data Access Layer
↓
Database
```

Separating responsibilities improves code quality and simplifies future enhancements.

---

## Data Serialization

Converting objects into different formats is widely used in software development.

Examples:

- CSV Export
- JSON APIs
- Database Documents
- XML Files

The same object can be represented differently depending on the destination system.

---

## Security Practices

Hashing user passwords before storage is considered a basic security requirement.

Modern applications also extend this with:

- Password Salting
- Multi-Factor Authentication (MFA)
- Secure Token-Based Authentication
- Environment Variables for Secrets

Today's implementation provides a strong conceptual foundation for understanding these advanced security mechanisms.

---

> [!IMPORTANT]
> Today's session demonstrated how multiple software engineering concepts—**Object-Oriented Programming, cloud databases, secure password hashing, serialization, helper classes, and modular architecture**—can be combined to build a practical backend application. It also reinforced an important lesson shared during the session: **experience never comes from shortcuts**. Developing strong engineering skills requires understanding the underlying concepts rather than simply relying on generated code. This training has helped build that foundation, making it easier to understand, evaluate, and effectively use code generated by modern AI tools. :contentReference[oaicite:0]{index=0}

---

# 📝 Personal Reflection

Today's session provided one of the most practical introductions to backend development since the beginning of the training. Unlike previous sessions that focused primarily on programming concepts and data structures, today's lecture demonstrated how those concepts come together to build a real-world application capable of securely storing user information in both local files and a cloud-hosted database.

Learning MongoDB Atlas was particularly valuable because it introduced me to cloud databases for the first time. Understanding the relationship between clusters, databases, collections, and documents helped me realize how modern applications organize and manage data without relying on traditional relational database structures. Connecting Python to MongoDB using PyMongo also demonstrated how backend applications communicate with remote databases over the Internet.

One of the most important lessons from today's session was the discussion on password security. Although the implementation used SHA-256 hashing, the underlying principle was clear—**user passwords should never be stored in plain text**. This reinforced the importance of designing applications with security in mind from the very beginning rather than treating it as an afterthought.

The introduction of helper classes such as `FileHelper` and `DBHelper` also improved my understanding of software architecture. Instead of writing every operation inside the main program, responsibilities were divided among specialized classes. This modular approach produced cleaner code, improved maintainability, and demonstrated how professional backend applications are organized.

Another valuable takeaway was learning how the same object can be transformed into multiple representations. The `User` object existed only once in memory, yet it could be converted into both CSV format for file storage and dictionary format for MongoDB insertion. This highlighted the importance of serialization and reusable object-oriented design.

Perhaps the most inspiring lesson from today's session came from the instructor's observation that **experience never comes from shortcuts**. Modern AI tools can generate code rapidly, but understanding the logic behind that code is what ultimately makes someone a capable software engineer. Throughout this training, I have gradually realized that every concept—whether Object-Oriented Programming, Data Structures, File Handling, or Databases—contributes toward building the knowledge required to read, evaluate, debug, and improve AI-generated code rather than depending on it blindly. This perspective has significantly changed the way I approach learning software development. :contentReference[oaicite:0]{index=0}

---

# 📌 Key Takeaways

- MongoDB is a document-oriented NoSQL database designed for flexible and scalable applications.
- MongoDB Atlas provides a cloud-hosted environment for deploying and managing databases.
- PyMongo enables Python applications to communicate with MongoDB.
- Databases contain collections, and collections store documents.
- `MongoClient` acts as the bridge between Python and MongoDB.
- Passwords should always be hashed before being stored in a database.
- SHA-256 generates a fixed-length cryptographic hash suitable for password verification.
- Objects can be serialized into multiple formats such as CSV strings and Python dictionaries.
- Helper classes improve modularity by separating file operations and database operations.
- Layered architecture makes backend applications easier to maintain and extend.
- Backend development combines programming, security, databases, and software design into a unified system.
- Understanding the logic behind AI-generated code is more valuable than relying solely on automation.

---

# 📖 Revision Notes

✔ MongoDB

✔ NoSQL Database

✔ MongoDB Atlas

✔ Cloud Database

✔ Cluster

✔ Database

✔ Collection

✔ Document

✔ PyMongo

✔ `MongoClient`

✔ `ServerApi`

✔ Connection Verification

✔ `ping`

✔ Database Selection

✔ Collection Selection

✔ `list_collection_names()`

✔ User Class

✔ Object-Oriented Programming

✔ SHA-256 Hashing

✔ `hashlib`

✔ Password Security

✔ Object Serialization

✔ `to_csv()`

✔ `to_dictionary()`

✔ FileHelper

✔ DBHelper

✔ `insert_one()`

✔ CSV Storage

✔ MongoDB Document Insertion

✔ Layered Backend Architecture

✔ Separation of Concerns

---

# ❓ Interview Questions

### Q1. What is MongoDB, and how does it differ from relational databases?

**Answer:**

MongoDB is a document-oriented NoSQL database that stores data as flexible JSON-like documents inside collections. Unlike relational databases, MongoDB does not require a fixed schema, making it more adaptable to changing data structures.

---

### Q2. What is MongoDB Atlas?

**Answer:**

MongoDB Atlas is the official cloud platform for hosting MongoDB databases. It allows developers to create, manage, and access databases securely over the Internet without installing MongoDB locally.

---

### Q3. What is the role of `MongoClient` in PyMongo?

**Answer:**

`MongoClient` establishes the connection between a Python application and a MongoDB server or MongoDB Atlas cluster. All database operations are performed through this client object.

---

### Q4. Why should passwords never be stored in plain text?

**Answer:**

If a database is compromised, plain text passwords become immediately visible. Hashing passwords before storage protects user credentials by storing only a cryptographic hash instead of the original password.

---

### Q5. What is the difference between hashing and encryption?

**Answer:**

Encryption is reversible using a key, whereas hashing is designed as a one-way transformation. Passwords are typically hashed rather than encrypted because applications only need to verify passwords, not recover them.

---

### Q6. Why were `to_csv()` and `to_dictionary()` methods created?

**Answer:**

These methods convert the same `User` object into different representations. `to_csv()` prepares data for file storage, while `to_dictionary()` prepares data for insertion into MongoDB.

---

### Q7. What is the purpose of helper classes such as `FileHelper` and `DBHelper`?

**Answer:**

Helper classes separate specific responsibilities from the main application. `FileHelper` manages file operations, while `DBHelper` manages database operations, resulting in cleaner, modular, and reusable code.

---

### Q8. Why is layered architecture considered a good software engineering practice?

**Answer:**

Layered architecture separates responsibilities into different modules, improving maintainability, readability, testing, scalability, and code reuse while reducing coupling between different parts of the application.

---

# 🎯 Goals for Next Session

- Continue exploring backend development concepts.
- Learn additional MongoDB operations such as querying, updating, and deleting documents.
- Understand database relationships and schema design in NoSQL systems.
- Explore authentication and authorization techniques.
- Continue strengthening software architecture and secure coding practices.

---

# ✅ Today's Progress Checklist

- [x] Understood MongoDB fundamentals.
- [x] Learned MongoDB Atlas setup workflow.
- [x] Connected Python applications to MongoDB using PyMongo.
- [x] Verified database connectivity using a ping operation.
- [x] Explored databases, collections, and documents.
- [x] Designed a `User` class using Object-Oriented Programming.
- [x] Implemented SHA-256 password hashing.
- [x] Converted objects into CSV and dictionary formats.
- [x] Stored user data in CSV files.
- [x] Inserted user documents into MongoDB.
- [x] Built helper classes for file and database operations.
- [x] Understood layered backend architecture and modular software design.

---

> [!TIP]
> Today's session demonstrated that becoming a backend developer involves much more than writing code. It requires understanding **data modeling, secure password handling, cloud databases, modular architecture, and software engineering principles**. As emphasized during the training, **experience never comes from shortcuts**. AI tools can accelerate development, but genuine expertise comes from understanding the concepts behind the code, enabling developers to confidently analyze, improve, and build reliable software systems. :contentReference[oaicite:1]{index=1}

---

**Status:** Completed ✅

**Training Day:** 13

**Maintained By:** Saksham Kumar