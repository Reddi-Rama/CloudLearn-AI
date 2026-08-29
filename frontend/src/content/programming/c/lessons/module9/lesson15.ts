const lesson15 = {
  id: "lesson15",
  title: "Module Review & Assessment",

  content: `
Introduction

This lesson reviews the complete File Handling & Java I/O module.

The assessment is designed to test your understanding of the
concepts learned throughout the module.

You will be tested through:

Multiple-choice questions

Practical programming questions

Scenario-based questions

A final module challenge

---

1. Module Overview

The module began with basic file handling and gradually introduced
more advanced file and directory operations.

The learning progression was:

Basic File Handling
    ↓
Reading & Writing
    ↓
Appending Data
    ↓
Buffered I/O
    ↓
Byte Streams
    ↓
Serialization
    ↓
Deserialization
    ↓
Directories
    ↓
Java NIO
    ↓
Best Practices
    ↓
File Management System
    ↓
Assessment

Each lesson builds on the concepts learned in the previous lessons.

---

2. Basic File Handling Review

File handling allows a Java program to store and retrieve
information from the file system.

Important concepts include:

File

Path

Input

Output

Reading

Writing

Appending

Files and directories

Java I/O

Java NIO

---

3. File Class Review

The File class belongs to:

java.io

It represents a file or directory pathname.

Important methods include:

exists()

createNewFile()

getName()

getPath()

getAbsolutePath()

isFile()

isDirectory()

canRead()

canWrite()

mkdir()

mkdirs()

list()

listFiles()

delete()

The File object represents a pathname. Creating a File object does
not automatically create the physical file.

---

4. Reading and Writing Review

Common character-based classes include:

FileReader

FileWriter

BufferedReader

BufferedWriter

FileReader can be used to read text.

FileWriter can be used to write text.

BufferedReader allows text to be processed efficiently, commonly
line by line.

BufferedWriter can be used for buffered text output.

---

5. Appending Review

Appending means adding new information to an existing file without
replacing its previous contents.

Example:

FileWriter writer =
        new FileWriter("data.txt", true);

The true argument enables append mode.

---

6. Byte Streams Review

Byte streams work with raw binary data.

Important classes include:

FileInputStream

FileOutputStream

They are useful for data such as:

Images

Audio

Video

PDF files

Other binary files

---

7. Serialization Review

Serialization converts a Java object into a byte stream so that it
can be stored.

Important concepts include:

Serializable

ObjectOutputStream

The object must implement Serializable.

Conceptually:

Java Object
    ↓
Serialization
    ↓
Byte Stream
    ↓
File

---

8. Deserialization Review

Deserialization converts serialized data back into a Java object.

Important class:

ObjectInputStream

Conceptually:

File
    ↓
Byte Stream
    ↓
Deserialization
    ↓
Java Object

Serialization and deserialization allow object data to be stored and
restored.

---

9. Directory Review

Java can work with directories as well as files.

Important operations include:

Create directory

Inspect directory

List directory contents

Rename directory

Delete directory

The File class provides methods such as:

mkdir()

mkdirs()

list()

listFiles()

---

10. Java NIO Review

Java NIO provides a modern approach to file-system operations.

Important classes are:

Path

Paths

Files

Path represents a location in the file system.

Files provides operations for working with files and directories.

Common operations include:

Read

Write

Copy

Move

Delete

Check existence

Directory traversal

---

11. Exception Handling Review

File operations can fail.

Possible causes include:

File does not exist

Permission denied

Invalid path

Storage unavailable

File cannot be opened

Java provides exceptions for these situations.

One important exception is:

IOException

File-handling programs should handle exceptions appropriately.

---

12. Try-with-Resources Review

File resources should be closed after use.

Try-with-Resources makes resource management easier.

Example:

try (FileReader reader =
        new FileReader("data.txt"))
{
    // Read file
}

When execution leaves the try block, Java automatically closes the
resource.

This helps prevent resource leaks.

---

13. Best Practices Review

Important file-handling practices include:

Always close file resources properly.

Prefer Try-with-Resources for closeable resources.

Handle IOException appropriately.

Use character streams for text.

Use byte streams for binary data.

Use meaningful file names.

Avoid hard-coded environment-specific paths.

Check whether files exist when necessary.

Be careful with file permissions.

Avoid storing sensitive information in plain-text files.

---

14. Practical Assessment Questions

Question 1

Write a Java program to create a file named data.txt.

Question 2

Write a Java program to write text into a file.

Question 3

Write a Java program to read a file line by line.

Question 4

Write a Java program to append information to an existing file.

Question 5

Write a Java program to create a directory and list its contents.

Question 6

Write a Java program using Java NIO to copy a file.

Question 7

Write a Java program using Java NIO to move a file.

Question 8

Write a Java program to delete a file.

Question 9

Write a Java program to check whether a file exists.

Question 10

Write a program that handles IOException when a file operation
fails.

---

15. Final Module Challenge

Build a complete File Management System.

The application should provide a menu-driven interface.

Required operations:

Create File

Write File

Read File

Append File

Create Directory

List Directory

Copy File

Move File

Delete File

Check File

The application should also:

Use appropriate Java I/O or Java NIO APIs.

Handle file-related exceptions.

Manage resources safely.

Use meaningful paths.

Provide useful messages to the user.

---

Module Review

After completing the module, you should understand:

Java File Handling

File class

File creation

File reading

File writing

Appending

Buffered I/O

Byte streams

Serialization

Deserialization

Directories

Java NIO

Path

Paths

Files

Copying

Moving

Deleting

Directory traversal

Exception handling

Try-with-Resources

File-handling best practices

File Management System

---

Assessment Structure

The assessment will test:

1. Multiple-choice questions

2. Practical programming questions

3. Scenario-based questions

4. Final module challenge

The assessment tests both conceptual understanding and practical
programming ability.

---

Module Completion

After successfully completing the assessment, you will have completed
the File Handling & Java I/O module.

You should be able to work confidently with files and directories in
Java.

You should also be able to choose an appropriate I/O API depending
on:

The type of data

The size of the data

The required operation

Whether the data is text or binary

Whether object persistence is required

---

Final Outcome

By completing this module, you should be able to build Java
applications that can:

Create
    ↓
Read
    ↓
Write
    ↓
Append
    ↓
Copy
    ↓
Move
    ↓
Organize
    ↓
Delete
    ↓
Manage Files & Directories

You will then be ready to continue to:

Module 9 — Collections Framework
`,

  summary:
    "Review and assess the complete File Handling & Java I/O module through conceptual, practical, scenario-based, and final challenge questions.",

  keyPoints: [
    "Understand Java File Handling and I/O.",
    "Work with the File class.",
    "Create, read, write, and append files.",
    "Use BufferedReader and BufferedWriter.",
    "Work with byte streams.",
    "Serialize and deserialize Java objects.",
    "Create and manage directories.",
    "Use Java NIO Files and Paths.",
    "Copy, move, and delete files.",
    "Handle file-related exceptions.",
    "Manage resources safely.",
    "Build a practical File Management System."
  ],
};

export default lesson15;