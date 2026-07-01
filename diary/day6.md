<!--
title: Python Functions, Debugging and Code Reusability
date: 2026-07-01
tags: Python, Functions, Debugging, VS Code, Recursion, *args, **kwargs, Return Statement, Code Reusability
summary: Day 6 focused on debugging Python programs in Visual Studio Code, understanding reusable functions, function parameters, default arguments, variable-length arguments, recursion, return statements, memory references, and best coding practices.
-->

# 🚀 Day 6: Python Functions, Debugging & Code Reusability

**Name:** Saksham Kumar  
**Course:** B.Tech CSE  
**Institute:** Guru Nanak Dev Engineering College (GNDEC), Ludhiana  
**Training Program:** TRCS102 – Agentic AI Training  
**Day:** 6  
**Date:** 01 July 2026

---

# 📖 Daily Training Record – Day 6

## 📌 Overview

The sixth day of the **TRCS102 – Agentic AI Training Program** focused on one of the most fundamental concepts in programming—**functions**. The session began with an introduction to debugging Python programs in **Visual Studio Code**, where we learned how the debugger helps trace program execution, inspect variable values, and identify logical errors more efficiently than relying solely on print statements.

After understanding the debugging workflow, the discussion shifted towards writing **reusable and maintainable code**. Through practical examples, we explored why repeating the same logic multiple times is considered poor programming practice and how functions provide an elegant solution by encapsulating reusable logic into a single, well-defined unit.

The session covered various aspects of Python functions, including function definition, function invocation, positional and keyword arguments, default parameter values, return statements, function objects, memory references, variable-length arguments (`*args`), keyword variable arguments (`**kwargs`), mutable objects, shallow and deep copying concepts, recursion, and the purpose of the `main()` function.

Alongside learning Python syntax, significant emphasis was placed on **writing readable code**, choosing descriptive variable names, understanding how Python manages function objects in memory, and developing programming practices commonly followed in professional software development.

---

# 🎯 Learning Objectives

By the end of today's session, I was able to:

- Understand the purpose and advantages of functions in Python.
- Learn how debugging works in Visual Studio Code.
- Identify why reusable code is preferred over duplicated logic.
- Create and invoke user-defined functions.
- Understand positional, keyword, and default arguments.
- Learn how Python stores function objects in memory.
- Differentiate between printing a value and returning a value.
- Work with variable-length arguments using `*args` and `**kwargs`.
- Understand how mutable objects behave when passed to functions.
- Learn the role of the `main()` function and the `if __name__ == "__main__"` construct.
- Get introduced to recursion and its execution flow.
- Develop cleaner, more maintainable Python programs following good coding practices.

---

# 📚 Key Learnings

---

## 1️⃣ Debugging Python Programs in Visual Studio Code

The session began with an introduction to **debugging**, one of the most essential skills for every software developer. Instead of repeatedly using `print()` statements to understand program execution, we learned how Visual Studio Code provides an interactive debugger that allows developers to observe the execution of a program line by line.

During debugging, execution can be paused at specific lines using **breakpoints**, enabling developers to inspect variable values, monitor memory changes, and understand how the control flows throughout the program.

### Debugging Workflow

- Set breakpoints at important lines of code.
- Run the program in Debug mode.
- Execute the program one statement at a time.
- Observe how variables change during execution.
- Identify logical mistakes and unexpected behavior.
- Resume execution after verifying program flow.

Rather than guessing where an error occurs, debugging provides complete visibility into the execution process, making it easier to locate and fix issues efficiently.

### Why Debugging is Important?

- Helps locate logical errors quickly.
- Reduces unnecessary print statements.
- Improves understanding of program execution.
- Allows inspection of variables during runtime.
- Saves development and testing time.

> [!NOTE]
> Professional developers spend a significant amount of time debugging applications. Learning to use a debugger effectively is just as important as learning to write code.

---

## 2️⃣ Why Functions are Required?

After understanding debugging, the discussion shifted towards one of the most important concepts in programming—**Functions**.

Initially, a program was written to find the maximum value in multiple lists such as `data`, `scores`, and `prices`. The same comparison logic was written repeatedly for each list.

Although the program worked correctly, repeating identical logic multiple times made the code lengthy, difficult to maintain, and prone to errors.

This demonstrated an important software engineering principle:

> **If a piece of logic is required multiple times, it should be converted into a reusable function.**

A function groups related statements into a single reusable unit that can be executed whenever required.

Instead of writing the same code repeatedly, the logic is written once and invoked multiple times with different inputs.

### Real-World Example

The instructor explained that modern software applications contain numerous features that are executed repeatedly.

Some examples include:

- Login authentication
- User registration
- Password validation
- OTP verification
- Payment processing
- Email notifications

Instead of rewriting these functionalities throughout the application, developers encapsulate them into reusable functions that can be called whenever needed.

This approach improves both productivity and code quality.

---

## 3️⃣ Creating a User-Defined Function

To eliminate duplicate code, a function named `find_maximum()` was created.

The function accepted a list as its input, compared every element, and determined the largest value present in that list.

Instead of creating separate programs for different datasets, the same function could now process multiple lists simply by passing different arguments.

The function was called using various lists, demonstrating that the same logic could be reused without modification.

Some examples included:

- Finding the maximum value from the `data` list.
- Finding the maximum value from the `scores` list.
- Finding the maximum value from the `prices` list.
- Passing a list directly while calling the function.

This highlighted one of the biggest strengths of functions—**generic programming**, where a single implementation works for multiple datasets.

### Function Components

A Python function consists of:

- **`def` keyword** – indicates the creation of a function.
- **Function name** – identifies the function.
- **Parameters** – receive input values.
- **Function body** – contains the executable logic.
- **Function call** – executes the function whenever required.

### Descriptive Variable Naming

Another important programming practice discussed during the session was the use of **descriptive variable names**.

Instead of choosing short or ambiguous names, variables should clearly indicate the data they represent.

Examples include:

- `numbers`
- `max_value`
- `scores`
- `prices`

Such naming conventions make programs easier to understand, especially when multiple developers collaborate on the same project.

> [!TIP]
> Readable code is often more valuable than shorter code. A descriptive variable name improves maintainability and helps other developers understand the program without additional explanation.

---

## 4️⃣ Function Parameters and Arguments

After understanding how functions are created, the session focused on **how data is passed to functions** through parameters and arguments.

A function becomes useful only when it can work with different inputs. Instead of hardcoding values inside a function, Python allows values to be supplied when the function is called.

For example, a function was created to add two numbers. Different values were passed during each function call, allowing the same function to produce different results without changing its internal logic.

This demonstrates one of the core principles of programming:

> **Functions should be generic so they can solve similar problems using different inputs.**

### Parameters vs Arguments

Although the terms are often used interchangeably, they represent different concepts.

| Term | Description |
|------|-------------|
| **Parameter** | Variable declared in the function definition to receive data. |
| **Argument** | Actual value supplied while calling the function. |

For example:

- `num1` and `num2` are **parameters**.
- `10` and `20` are **arguments** passed during execution.

Understanding this distinction is important because almost every programming language uses parameters and arguments extensively.

---

## 5️⃣ Default Parameters in Python

Python allows parameters to have **default values**.

If the caller does not provide a value for that parameter, Python automatically uses the predefined default value.

This feature makes functions more flexible while reducing unnecessary code.

For example, if a function defines:

- `num1` as a required parameter.
- `num2` with a default value.

Then calling the function with only one argument automatically assigns the default value to the second parameter.

### Benefits of Default Parameters

- Reduces repetitive function calls.
- Makes functions easier to use.
- Provides optional inputs.
- Improves code readability.
- Allows developers to simulate function overloading.

The instructor also discussed an important rule regarding default parameters.

### Important Rule

Parameters having default values **must always appear after normal parameters**.

Incorrect ordering leads to a syntax error because Python cannot determine how arguments should be assigned.

This is a common interview question asked while discussing Python functions.

> [!NOTE]
> Python does not support traditional function overloading like C++ or Java. Instead, similar behavior can often be achieved using default parameter values.

---

## 6️⃣ Positional and Keyword Arguments

Python provides multiple ways of passing arguments while calling a function.

### Positional Arguments

When arguments are passed according to the order of parameters defined in the function, they are called **positional arguments**.

Example:

- First value is assigned to the first parameter.
- Second value is assigned to the second parameter.

The order is extremely important.

---

### Keyword Arguments

Python also allows arguments to be passed using the parameter names.

This makes function calls much more readable.

An important advantage is that **the order of arguments no longer matters**, because Python assigns values based on parameter names instead of their positions.

For example, both of the following approaches produce identical results:

- Passing `num1` first and `num2` second.
- Passing `num2` first and `num1` second.

Python internally maps the supplied keywords to their corresponding parameters.

### Advantages of Keyword Arguments

- Improves readability.
- Eliminates dependency on parameter order.
- Reduces chances of assigning incorrect values.
- Makes large function calls easier to understand.

---

## 7️⃣ Functions are Objects in Python

One of the most interesting concepts covered during the session was that **functions themselves are objects**.

Using `id()` and `hex(id())`, we observed that every function occupies its own memory location.

Just like lists, dictionaries, or strings, functions also have their own identity inside Python's memory.

The instructor demonstrated that a function reference can be assigned to another variable.

Instead of creating a copy of the function, Python simply copies its **reference**.

Both variables then point to the same function object.

This explains why the following operations are possible:

- Assigning a function to another variable.
- Passing functions as arguments.
- Returning functions from other functions.
- Storing functions inside collections.

These capabilities form the foundation of many advanced Python concepts such as decorators, callbacks, and higher-order functions.

### Key Observation

When the memory addresses of both function variables were printed, they were identical.

This confirmed that **only the reference was copied, not the actual function object**.

> [!TIP]
> In Python, everything is treated as an object—including functions. This object-oriented design makes the language highly flexible and enables advanced programming techniques used in modern frameworks and libraries.

---

## 8️⃣ Function Redefinition in Python

The session also explored how Python handles **function redefinition**.

Unlike languages such as C++, Python does **not** support traditional function overloading based on different parameter lists.

Instead, whenever a function is defined again with the same name, the previous definition is replaced entirely by the new one.

During the demonstration, the function `add_numbers()` was defined multiple times with different parameters. After redefining the function, Python ignored the previous implementation and retained only the most recent definition.

This behavior highlights an important aspect of Python's execution model:

- A function name simply refers to a function object in memory.
- Redefining the function updates that reference to point to a newly created function object.
- The earlier definition is no longer accessible unless another reference to it was stored previously.

### Key Learnings

- Python allows function redefinition.
- The latest definition always replaces the previous one.
- Traditional compile-time function overloading is not supported.
- Default parameters are commonly used to provide flexibility instead of creating multiple overloaded functions.

> [!NOTE]
> In C++, redefining a function with the same signature results in a compilation error. Python, however, simply replaces the earlier definition with the latest one during execution.

---

## 9️⃣ Variable-Length Arguments using `*args`

Another powerful feature introduced during the session was **variable-length positional arguments**, represented by `*args`.

Normally, a function expects a fixed number of parameters. However, in many real-world situations, the number of inputs may not be known beforehand.

Python solves this problem through `*args`.

When a function parameter is prefixed with an asterisk (`*`), Python collects all positional arguments into a **tuple**.

Instead of defining separate functions for different numbers of inputs, one function can now process any number of values.

During the practical demonstration, multiple integers were passed to a single function, and Python automatically grouped them into a tuple.

The function then performed calculations such as finding the sum of all received values.

### Characteristics of `*args`

- Accepts any number of positional arguments.
- Stores received values inside a tuple.
- Eliminates the need for multiple function definitions.
- Makes functions highly reusable and scalable.

### Real-World Applications

`*args` is widely used in:

- Mathematical utility functions.
- Data processing libraries.
- Logging frameworks.
- Automation scripts.
- Framework APIs where the number of inputs may vary.

> [!TIP]
> Since tuples are immutable, Python uses them for `*args` because they are memory-efficient and suitable for read-only collections of data.

---

## 🔟 Keyword Variable Arguments using `**kwargs`

After learning about `*args`, we explored **keyword variable arguments**, represented by `**kwargs`.

While `*args` collects positional arguments, `**kwargs` collects all **named (keyword) arguments** into a dictionary.

Each keyword becomes the dictionary key, while its corresponding value becomes the dictionary value.

This enables a function to accept an unknown number of named inputs without explicitly defining each parameter.

During the session, different sets of information such as names, ages, cities, and countries were supplied as keyword arguments. Python automatically grouped these values into a dictionary.

This demonstrated how flexible Python functions can become.

### Characteristics of `**kwargs`

- Accepts any number of keyword arguments.
- Stores data in the form of a dictionary.
- Keys correspond to parameter names.
- Values correspond to supplied argument values.

### Advantages

- Makes functions extremely flexible.
- Useful when optional information may vary.
- Simplifies API development.
- Supports configuration-driven programming.

---

## 1️⃣1️⃣ Using `*args` and `**kwargs` Together

The instructor also demonstrated that a function can simultaneously accept both positional and keyword variable arguments.

In such cases:

- `*args` stores all positional values.
- `**kwargs` stores all keyword values.

This enables a single function to process a wide variety of inputs without knowing their number in advance.

Such flexibility is one of the reasons Python is extensively used in modern frameworks, automation tools, and Artificial Intelligence libraries.

An important rule discussed during the session was that **all positional arguments must appear before keyword arguments** while calling the function.

Violating this order results in an error because Python cannot correctly interpret the supplied values.

### Practical Importance

Many popular Python libraries internally make extensive use of `*args` and `**kwargs`, including:

- GUI development libraries
- Machine Learning frameworks
- Web development frameworks
- Automation tools
- Scientific computing libraries

Understanding these concepts is therefore essential for reading and writing professional Python code.

> [!NOTE]
> Questions related to `*args` and `**kwargs` are frequently asked during Python technical interviews because they demonstrate a developer's understanding of flexible function design.

---
## 1️⃣2️⃣ Mutable Objects and Passing Lists to Functions

One of the most important concepts discussed during today's session was how **mutable objects behave when passed to functions**.

A list containing several numbers was passed as an argument to a function responsible for squaring each element.

Instead of creating a new list, the function directly modified the elements of the original list.

After returning from the function, the changes were still visible in the original variable.

This demonstrated that Python does **not** create a new copy of a list by default when passing it to a function.

Instead, the function receives a **reference** to the same list object stored in memory.

As a result, both the caller and the function refer to the same object, meaning any modifications performed inside the function are reflected outside the function as well.

### Key Observations

- Lists are mutable objects.
- A reference to the original list is passed to the function.
- Changes made inside the function affect the original data.
- Both variables point to the same memory location.

This behavior is useful when large datasets need to be processed efficiently because Python avoids creating unnecessary duplicate objects.

---

## 1️⃣3️⃣ Shallow Copy and Deep Copy Concepts

While discussing mutable objects, the instructor introduced the concepts of **shallow copy** and **deep copy**.

When a list is directly assigned or passed to another variable, only its **reference** is copied.

Both variables therefore point to the same object in memory.

This behavior is commonly referred to as a **shallow copy** (or reference copy in the context of the classroom discussion).

As a result, modifying one variable also modifies the original object.

To prevent this, a completely new list must be created, and every element should be copied into it.

Such an independent object is known as a **deep copy**, where the copied data has its own memory location.

### Comparison

| Shallow Copy | Deep Copy |
|--------------|-----------|
| Copies only the reference. | Creates a completely new object. |
| Shares the same memory location. | Uses a different memory location. |
| Changes affect the original object. | Changes remain independent. |
| Faster because no new object is created. | Slightly slower because a new object is allocated. |

### Practical Importance

Understanding these concepts is extremely important while working with:

- Lists
- Dictionaries
- Nested data structures
- Machine Learning datasets
- Data preprocessing pipelines

Choosing between shallow and deep copying depends on whether the original data should remain unchanged.

> [!NOTE]
> Accidentally modifying shared data is a common source of bugs in software applications. Developers must understand object references before manipulating mutable data structures.

---

## 1️⃣4️⃣ Understanding `main()` and the `__name__` Variable

The session also covered the purpose of the **`main()` function** and the special Python statement:

```python
if __name__ == "__main__":
```

Although Python does not require a `main()` function, it is considered a professional programming practice to organize the execution flow inside one.

The instructor explained that a program generally consists of different types of statements, such as:

- Creation statements
- Calling statements
- View (output) statements
- Computation statements

Keeping these statements inside `main()` makes the program easier to read, maintain, and debug.

The condition:

```python
if __name__ == "__main__":
```

ensures that the `main()` function executes **only when the file is run directly**.

If the same file is imported into another Python program, the code inside this block does not execute automatically.

This mechanism enables developers to write reusable modules without triggering unintended execution.

### Advantages of Using `main()`

- Improves program organization.
- Separates execution logic from function definitions.
- Supports modular programming.
- Prevents accidental execution during imports.
- Enhances readability and maintainability.

> [!TIP]
> Almost every professional Python project follows the `main()` convention because it clearly separates reusable code from executable code.

---

## 1️⃣5️⃣ Return Statement in Python

Towards the end of the session, the instructor explained the difference between **printing a value** and **returning a value**.

A function may calculate a result internally, but unless that value is returned, it cannot be used elsewhere in the program.

Using the `return` statement sends the computed value back to the caller, allowing it to be stored in a variable, passed to another function, or used in further calculations.

It was also explained that if a function does not explicitly contain a `return` statement, Python automatically returns `None`.

Understanding this behavior is essential because many beginners confuse displaying output with actually returning data.

### `print()` vs `return`

| `print()` | `return` |
|------------|-----------|
| Displays output on the screen. | Sends a value back to the caller. |
| Used for visualization and debugging. | Used for further computation. |
| Output cannot be directly reused. | Returned value can be stored and reused. |
| Does not end function execution by itself. | Immediately terminates the function after returning the value. |

### Importance of Return Statements

- Enables function chaining.
- Supports modular programming.
- Allows reuse of computed results.
- Makes functions independent and testable.
- Improves overall software design.

> [!NOTE]
> A well-designed function should generally return data instead of printing it directly. Returning values makes the function reusable in larger applications.

---

# 💡 Important Concepts Learned

| Topic | Learning |
|--------|----------|
| Debugging | Used Visual Studio Code's debugger to inspect program execution, monitor variables, and identify logical errors efficiently. |
| Functions | Functions encapsulate reusable logic, reducing code duplication and improving maintainability. |
| Code Reusability | Common logic should be written once and reused multiple times instead of being repeated throughout a program. |
| Parameters & Arguments | Parameters receive input inside a function, while arguments are the actual values supplied during function calls. |
| Default Parameters | Allow optional inputs and provide flexibility while simulating function overloading in Python. |
| Positional Arguments | Arguments are assigned according to the order of parameters. |
| Keyword Arguments | Arguments are assigned using parameter names, making function calls more readable and independent of order. |
| Function Objects | Functions are first-class objects in Python and possess their own memory address and identity. |
| Function Aliasing | A function reference can be assigned to another variable without creating a duplicate function object. |
| Function Redefinition | The latest function definition replaces the previous one since Python does not support traditional function overloading. |
| `*args` | Collects multiple positional arguments into a tuple, allowing functions to accept a variable number of inputs. |
| `**kwargs` | Collects keyword arguments into a dictionary, enabling flexible and configurable function interfaces. |
| Mutable Objects | Lists are mutable, so modifications inside a function affect the original object when passed by reference. |
| Object References | Python passes references to mutable objects rather than creating copies automatically. |
| Shallow Copy | Copies only the object reference, causing multiple variables to share the same memory location. |
| Deep Copy | Creates an entirely independent object, preventing unintended modifications to the original data. |
| `main()` Function | Organizes program execution and separates executable statements from reusable function definitions. |
| `if __name__ == "__main__"` | Ensures program execution only when the file is run directly, supporting modular programming. |
| Return Statement | Sends computed results back to the caller, enabling reuse in further computations. |
| `print()` vs `return` | `print()` displays information, whereas `return` provides data for future processing. |
| Recursion | A function can call itself repeatedly until a terminating condition (base case) is reached. |
| Descriptive Naming | Meaningful variable and function names improve readability, collaboration, and long-term maintainability. |

---

# 🌍 Real-World Applications

The concepts covered during today's session form the foundation of almost every modern software application.

Functions are extensively used to organize business logic into reusable modules. Whether developing web applications, mobile apps, desktop software, or AI systems, developers rely on functions to reduce code duplication and improve maintainability.

Some common real-world applications include:

- User authentication and login systems.
- Registration and profile management.
- Password validation and encryption workflows.
- OTP generation and verification.
- Payment gateway integration.
- Email and SMS notification services.
- Data validation before database storage.
- Report generation and analytics.
- REST API development.
- Artificial Intelligence and Machine Learning pipelines.

Variable-length arguments (`*args` and `**kwargs`) are widely used in professional Python libraries such as web frameworks, automation tools, and AI libraries because they allow developers to build flexible and configurable APIs.

Understanding mutable objects, references, and copying techniques is essential while working with large datasets, data science applications, machine learning models, and enterprise software, where unintended data modification can introduce difficult-to-trace bugs.

Recursion is commonly applied in solving problems involving hierarchical or repetitive structures, including:

- Tree traversal algorithms.
- Directory and file system navigation.
- Divide-and-conquer algorithms.
- Mathematical computations.
- Graph traversal techniques.
- Dynamic programming problems.

Similarly, debugging plays a crucial role throughout the software development lifecycle by enabling developers to inspect execution flow, analyze variable states, and resolve logical issues efficiently before deploying applications.

---

# 📝 Personal Reflection

Today's session significantly strengthened my understanding of one of the most fundamental concepts in Python—**functions**. Initially, I viewed functions simply as reusable blocks of code, but today's practical demonstrations helped me understand their broader role in software engineering, including modularity, maintainability, and scalability.

The examples involving repeated logic clearly illustrated why professional developers avoid code duplication and instead organize applications into small, reusable functions. I also found it interesting to learn that functions themselves are objects in Python and possess their own memory identity, making the language highly flexible.

The discussion on `*args`, `**kwargs`, mutable objects, and object references provided valuable insights into Python's internal working. These concepts not only improve programming skills but also help prevent common mistakes related to shared data and unintended modifications.

Learning the purpose of the `main()` function and the `if __name__ == "__main__"` statement gave me a better understanding of how professional Python projects are structured. Finally, the introduction to recursion sparked my curiosity, and I am looking forward to exploring recursive problem-solving techniques in the upcoming session.

Overall, today's class enhanced both my coding knowledge and my understanding of professional programming practices. The concepts learned today will serve as an important foundation for building larger Python applications and developing AI-powered solutions in the future.

---

# 📌 Key Takeaways

- Functions eliminate duplicate code and promote reusability.
- Debugging is an essential skill for identifying logical errors efficiently.
- Descriptive variable names improve readability and collaboration.
- Python functions are objects that can be assigned, passed, and redefined.
- Default parameters provide flexibility and simplify function calls.
- `*args` and `**kwargs` allow functions to handle dynamic inputs.
- Lists are mutable and are passed by reference, making object references important to understand.
- Shallow and deep copying determine whether data is shared or independently duplicated.
- The `main()` function improves program organization and supports modular development.
- The `return` statement makes functions reusable by passing computed values back to the caller.
- Recursion enables elegant solutions to repetitive and hierarchical problems.

---

# 📖 Revision Notes

✔ Understood the debugging workflow in Visual Studio Code.

✔ Learned how breakpoints help inspect program execution.

✔ Studied the importance of writing reusable code using functions.

✔ Learned the syntax of defining functions using the `def` keyword.

✔ Understood the difference between function definition and function invocation.

✔ Learned the difference between parameters and arguments.

✔ Explored positional arguments and keyword arguments.

✔ Learned how default parameters make functions more flexible.

✔ Understood that Python functions are first-class objects.

✔ Observed function memory addresses using `id()` and `hex(id())`.

✔ Learned function aliasing by assigning one function reference to another variable.

✔ Understood that Python replaces previous function definitions during redefinition.

✔ Learned how `*args` collects variable positional arguments into a tuple.

✔ Learned how `**kwargs` collects keyword arguments into a dictionary.

✔ Understood how `*args` and `**kwargs` can be used together.

✔ Learned why tuples are preferred for immutable collections of variable arguments.

✔ Explored mutable and immutable objects in Python.

✔ Understood that lists are passed by reference to functions.

✔ Learned the concepts of shallow copy and deep copy.

✔ Understood how modifying mutable objects inside a function affects the original object.

✔ Learned the purpose of the `main()` function.

✔ Understood the importance of `if __name__ == "__main__"` in modular programming.

✔ Learned the difference between `print()` and `return`.

✔ Observed that Python automatically returns `None` when no return statement is provided.

✔ Received an introduction to recursion and recursive function calls.

---

# ❓ Interview Questions

### Q1. Why are functions used in programming?

**Answer:**

Functions are used to organize reusable logic into a single unit. They eliminate code duplication, improve readability, simplify maintenance, and promote modular programming.

---

### Q2. What is the difference between parameters and arguments?

**Answer:**

Parameters are variables declared in the function definition to receive input values, whereas arguments are the actual values supplied when the function is called.

---

### Q3. What are default parameters in Python?

**Answer:**

Default parameters allow predefined values to be assigned to function parameters. If an argument is not supplied during the function call, Python automatically uses the default value.

---

### Q4. What is the difference between positional arguments and keyword arguments?

**Answer:**

Positional arguments assign values according to the order of parameters, whereas keyword arguments assign values using parameter names, making the order of arguments independent.

---

### Q5. Does Python support function overloading?

**Answer:**

Python does not support traditional function overloading based on different parameter lists. Redefining a function with the same name replaces the previous definition. Similar flexibility can be achieved using default parameters or variable-length arguments.

---

### Q6. What are `*args` in Python?

**Answer:**

`*args` allows a function to accept any number of positional arguments. Python stores these values inside a tuple.

---

### Q7. What are `**kwargs` in Python?

**Answer:**

`**kwargs` allows a function to accept any number of keyword arguments. Python stores these values as key-value pairs inside a dictionary.

---

### Q8. What is the difference between a mutable and an immutable object?

**Answer:**

Mutable objects can be modified after creation, whereas immutable objects cannot. Lists are mutable, while tuples, strings, and integers are immutable.

---

### Q9. Explain shallow copy and deep copy.

**Answer:**

A shallow copy copies only the object reference, causing both variables to share the same object. A deep copy creates an entirely new object with its own memory location, allowing independent modifications.

---

### Q10. Why is the `main()` function used?

**Answer:**

The `main()` function organizes the execution flow of a program by separating executable statements from reusable function definitions, making programs easier to maintain.

---

### Q11. What is the purpose of `if __name__ == "__main__"`?

**Answer:**

It ensures that the program executes only when the file is run directly. If the file is imported as a module, the code inside this block does not execute automatically.

---

### Q12. What is the difference between `print()` and `return`?

**Answer:**

`print()` displays output on the screen, whereas `return` sends a value back to the caller so it can be reused in further computations.

---

### Q13. What is recursion?

**Answer:**

Recursion is a programming technique in which a function calls itself repeatedly until a terminating condition, known as the base case, is reached.

---

# 🎯 Goals for Next Session

- Revise all concepts related to Python functions and parameter passing.
- Practice writing reusable functions for different problem statements.
- Solve programming questions using `return` statements instead of direct printing.
- Gain a deeper understanding of recursion and recursive execution flow.
- Learn how recursive functions use the call stack.
- Strengthen debugging skills by practicing with breakpoints and variable inspection.
- Continue improving code readability by following descriptive naming conventions.

---

# ✅ Today's Progress Checklist

- [x] Learned debugging in Visual Studio Code.
- [x] Understood the importance of reusable code.
- [x] Created user-defined Python functions.
- [x] Practiced function calling with different argument types.
- [x] Learned default parameters.
- [x] Understood positional and keyword arguments.
- [x] Explored function objects and memory references.
- [x] Learned function aliasing and redefinition.
- [x] Practiced using `*args` and `**kwargs`.
- [x] Understood mutable objects and reference passing.
- [x] Learned shallow copy and deep copy concepts.
- [x] Understood the role of `main()` and `if __name__ == "__main__"`.
- [x] Learned the importance of the `return` statement.
- [x] Received an introduction to recursion.

---

> [!TIP]
> Writing a function is only the beginning of good programming. The real skill lies in designing functions that are reusable, readable, and independent. As programs grow larger, well-structured functions, meaningful variable names, and systematic debugging become essential for building reliable and maintainable software.

---

**Status:** Completed ✅

**Training Day:** 6

**Maintained By:** Saksham Kumar

