<!--
title: Processes, Threads & Concurrency
date: 2026-06-26
tags: Concurrency, OS, Python, Multithreading
summary: Deep dive into OS processes, kernel vs user threads, context switching, and executing multithreaded operations in Python.
-->
# Day 2: Processes, Threads & Concurrency

On Day 2 of our **Agentic AI training** at **Auribises Technologies**, we focused on system-level concurrency. Since agents must query multiple APIs, search databases, and perform reasoning tasks concurrently, understanding the difference between **Processes** and **Threads** is critical.

---

## 🔀 Processes vs. Threads

Every application we launch is a Process, and within that process, we can run multiple Threads.

> [!WARNING]
> In Python, threads are subject to the **Global Interpreter Lock (GIL)**, meaning only one thread can execute Python bytecode at a time. This makes multithreading excellent for I/O-bound tasks but ineffective for CPU-bound tasks.

### Core Differences Table

| Feature | Process | Thread |
| :--- | :--- | :--- |
| **Memory Space** | Has its own independent address space. | Shares memory with the parent process. |
| **Creation Cost** | High (involves OS resource allocation). | Low (lightweight to spawn). |
| **Crash Safety** | Isolation: If one crashes, others keep running. | Shared: If a thread causes a segfault, the process dies. |
| **Concurrency** | True parallel execution on multiple cores. | Coordinated execution (subject to GIL in Python). |
| **Communication** | Requires IPC (Inter-Process Communication). | Can read/write shared variables directly. |

---

## 🛠️ Concurrency in Python

### 1. I/O-Bound Task: Multithreading
Since agents querying APIs are waiting for network responses, they are **I/O-bound**. We can speed up API calls by running them in separate threads:

```python
import threading
import time
import requests

def fetch_api_data(url: str, result_list: list):
    print(f"[Thread {threading.current_thread().name}] Fetching: {url}")
    response = requests.get(url)
    result_list.append(response.status_code)
    print(f"[Thread {threading.current_thread().name}] Finished.")

if __name__ == "__main__":
    urls = [
        "https://httpbin.org/delay/2",
        "https://httpbin.org/delay/1",
        "https://httpbin.org/delay/2"
    ]
    results = []
    threads = []
    
    start_time = time.time()
    for i, url in enumerate(urls):
        t = threading.Thread(target=fetch_api_data, args=(url, results), name=f"Fetcher-{i}")
        threads.append(t)
        t.start()
        
    # Wait for all threads to finish
    for t in threads:
        t.join()
        
    duration = time.time() - start_time
    print(f"Fetched {len(results)} pages in {duration:.2f} seconds.")
```

### 2. CPU-Bound Task: Multiprocessing
For parsing large chunks of text, calculating token distributions, or running heavy local algorithms, we bypass the GIL using `multiprocessing`:

```python
import time
from multiprocessing import Pool

def square_number(number: int) -> int:
    # CPU-bound computation
    return sum(i * i for i in range(number))

if __name__ == "__main__":
    numbers = [8000000, 9000000, 10000000, 11000000]
    
    # Measure sequential execution
    start = time.time()
    seq_results = [square_number(n) for n in numbers]
    print(f"Sequential took: {time.time() - start:.2f} seconds")
    
    # Measure parallel execution using a pool
    start = time.time()
    with Pool() as pool:
        pool_results = pool.map(square_number, numbers)
    print(f"Multiprocessing took: {time.time() - start:.2f} seconds")
```

---

## 🚦 Thread Synchronization & Race Conditions

When multiple threads access shared resources, they can corrupt data. We use `threading.Lock` to synchronize state:

```python
import threading

balance = 0
lock = threading.Lock()

def update_balance(amount: int):
    global balance
    # Acquire lock to ensure thread safety
    with lock:
        current = balance
        current += amount
        balance = current
```

---

## 🎯 Key Takeaways

- **GIL Limitation:** Python's GIL limits multithreading to I/O operations.
- **Multiprocessing Overheads:** Spawning a new process copies the environment and imports modules again, incurring system overhead.
- **Agent Integration:** When building an AI Agent platform, we run tool-calling networks inside threads and heavy local inference/analysis inside subprocesses.
