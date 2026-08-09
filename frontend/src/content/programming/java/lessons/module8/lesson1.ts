const lesson1 = {

id: "lesson1",

title: "Introduction to File Handling",

content: `

# Introduction to File Handling

## Introduction

In previous modules, you learned how Java programs work with:

- Variables.
- Data Types.
- Operators.
- Control Flow Statements.
- Methods.
- Classes and Objects.
- Inheritance.
- Polymorphism.
- Interfaces.
- Exception Handling.



Your programs can now perform many useful operations.



But there is an important limitation.



Data stored in variables normally exists only while the program is running.



For example:

int age = 20;

String name = "Alex";



These values are stored in memory.



When the program terminates:

Program Running

↓

Data Stored in Memory

↓

Program Ends

↓

Data Lost



So, how can we store information permanently?



One of the simplest solutions is:

File Handling



File Handling allows Java programs to create, read, write, update, and manage files stored on the computer.



# What is File Handling?

File Handling is the process of creating, reading, writing, updating, and deleting files using a programming language.



In Java, file handling is mainly provided through:

- Java I/O.
- Java NIO.



In simple words:



File Handling allows a Java program to store and retrieve information from the file system.



# Why Do We Need File Handling?

Imagine a banking application.



During execution:

Account Created

↓

Balance = 5000

↓

Program Running



If the application closes:

Program Ends

↓

Data in Memory Lost



A real banking application cannot work this way.



The information must remain available even after the application stops.



Therefore:

Java Application

↓

File

↓

Stored Information

↓

Available Later



This is the purpose of persistent file storage.



# Temporary Data vs Persistent Data

There are two important concepts.

## Temporary Data

Temporary data is information stored in memory while a program is running.



Example:

int age = 20;



The value exists while the application is running.



When the application terminates, the program can no longer access that variable.



## Persistent Data

Persistent data is information stored in a permanent storage location.



Examples:

- Text files.
- Binary files.
- Databases.



A file can preserve information even after the application terminates.



# File Handling Operations

Java programs can perform several operations on files.



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

Rename

↓

Delete



These operations form the foundation of file management.



# Creating a File

Creating a file means creating a new physical file on the file system.



Example:

Java Program

↓

Create

↓

data.txt



After creation:

data.txt



The file can later be used to store information.



# Reading a File

Reading means retrieving information from an existing file.



Suppose a file contains:

data.txt

↓

Name: Alex

Age: 20

Course: Java



A Java program can read this information.



File

↓

Read

↓

Java Program

↓

Process Data



Reading is useful when an application needs to retrieve previously stored information.



# Writing to a File

Writing means storing information in a file.



Example:

Java Program

↓

Name: Alex

Age: 20

↓

data.txt



The information is now stored in the file.



Writing allows data to remain available after the program terminates.



# Appending Data

Appending means adding new information to an existing file without removing the existing content.



Before:

data.txt

↓

Alex



Append:

Priya



After:

data.txt

↓

Alex

Priya



Appending is commonly useful for:

- Log files.
- Transaction histories.
- Activity records.
- Reports.



# Copying a File

A Java program can create a copy of an existing file.



Example:

original.txt

↓

Copy

↓

backup.txt



The original file remains available.



Copying is commonly used for:

- Backups.
- Data duplication.
- File transfer.



# Moving a File

A file can be moved from one location to another.



Example:

Folder A

↓

file.txt

↓

Move

↓

Folder B



The file changes its location.



# Renaming a File

A Java program can change the name of a file.



Example:

old.txt

↓

Rename

↓

new.txt



The file remains, but its name changes.



# Deleting a File

A Java program can remove a file when it is no longer required.



Example:

data.txt

↓

Delete

↓

File Removed



Deletion should be performed carefully because the file may contain important information.



# Types of Files

Files can broadly be divided into two categories:



Files

│

├── Text Files

│

└── Binary Files



# Text Files

Text files store information using characters that can normally be read by humans.



Examples:

- .txt
- .csv
- .xml
- .json



Example content:

Name: Alex

Age: 20

Course: Java



A normal text editor can open and display this information.



# Binary Files

Binary files store data in binary form.



Examples:

- Images.
- Audio.
- Video.
- PDF files.
- Executable files.
- Serialized objects.



Binary files are generally not intended to be read directly as normal text.



# Text Files vs Binary Files

| Feature | Text File | Binary File |
|---|---|---|
| Data Representation | Characters | Binary data |
| Human Readable | Usually Yes | Usually No |
| Examples | .txt, .csv | .jpg, .pdf |
| Java API | Character Streams | Byte Streams |
| Typical Use | Text data | Images, audio, video, binary data |



# What is Java I/O?

Java provides APIs for performing input and output operations.



I/O stands for:

Input / Output



Input means receiving data.



Output means sending or storing data.



# Input

When information moves into a Java program, it is called input.



Example:

File

↓

Java Program



The program reads information from the file.



# Output

When information moves from a Java program to another destination, it is called output.



Example:

Java Program

↓

File



The program writes information into the file.



# Java I/O

Java I/O provides classes and interfaces that allow programs to communicate with external resources.



These resources can include:

- Files.
- Console.
- Network connections.
- Other input/output sources.



For this module, we will mainly focus on file handling.



# What is a Stream?

A Stream represents a flow of data between a source and a destination.



Think of a stream as a pipeline through which data travels.



Source

↓

Stream

↓

Destination



For input:

File

↓

Input Stream

↓

Java Program



For output:

Java Program

↓

Output Stream

↓

File



Streams are an important foundation of Java I/O.



# Types of Streams

Java I/O mainly provides two important categories of streams:



Streams

│

├── Byte Streams

│

└── Character Streams



# Byte Streams

Byte streams work with raw binary data.



The main base classes are:

- InputStream.
- OutputStream.



Common classes include:

- FileInputStream.
- FileOutputStream.



Byte streams are useful for:

- Images.
- Audio.
- Video.
- PDF files.
- Other binary data.



Example:

Image File

↓

FileInputStream

↓

Java Program



# Character Streams

Character streams work with character-based data.



The main base classes are:

- Reader.
- Writer.



Common classes include:

- FileReader.
- FileWriter.
- BufferedReader.
- BufferedWriter.



Character streams are useful for:

- Text files.
- CSV files.
- Other character-based data.



# Byte Streams vs Character Streams

| Feature | Byte Streams | Character Streams |
|---|---|---|
| Base Classes | InputStream, OutputStream | Reader, Writer |
| Data | Bytes | Characters |
| Common Use | Binary files | Text files |
| Examples | Images, audio, PDF | .txt, .csv |
| Common Classes | FileInputStream | FileReader |



# Java File Handling APIs

Java provides several APIs for file handling.



## File Class

The File class is used for basic file and directory operations.



It can be used to:

- Check whether a file exists.
- Get file information.
- Rename files.
- Delete files.
- Work with directories.



## FileReader

FileReader is used for reading character-based files.



## FileWriter

FileWriter is used for writing character-based data.



## FileInputStream

FileInputStream is used for reading byte-based data.



## FileOutputStream

FileOutputStream is used for writing byte-based data.



## BufferedReader

BufferedReader provides buffered character input and is useful for reading text efficiently, including line-by-line reading.



## BufferedWriter

BufferedWriter provides buffered character output and is useful for writing text efficiently.



# Java NIO

Java also provides a modern file-handling API called:

Java NIO



NIO stands for:

New I/O



Important classes include:

- Path.
- Paths.
- Files.



These APIs provide modern operations for working with files and directories.



You will learn Java NIO later in this module.



# File Handling and Exceptions

File operations can fail for many reasons.



Examples:

- A file does not exist.
- Permission is denied.
- The specified directory is invalid.
- Storage is unavailable.
- A file cannot be opened.
- An invalid path is provided.



Java provides exceptions for these situations.



One important exception is:

IOException



IOException represents many input/output-related failures.



# Example Situation

Suppose a Java program tries to read:

data.txt



but the file does not exist.



The operation may fail:

Java Program

↓

Open data.txt

↓

File Does Not Exist

↓

Exception



A common exception involved in file reading is:

FileNotFoundException



This is why file handling is closely connected with Exception Handling.



You learned about Exception Handling in the previous module.



# Try-with-Resources

File resources should be closed after use.



Java provides a feature called:

Try-with-Resources



It allows resources to be closed automatically.



Example:

try (FileReader reader =
        new FileReader("data.txt")) {

    // Read file

}



When execution leaves the try block, Java automatically closes the resource.



This helps prevent resource leaks.



Try-with-Resources is especially useful when working with:

- Files.
- Streams.
- Database resources.
- Other closeable resources.



# File Handling Workflow

A typical file operation follows this process:



Identify File

↓

Open File

↓

Read / Write

↓

Process Data

↓

Close Resource



With Try-with-Resources:

Create Resource

↓

try Block

↓

Read / Write

↓

Automatic Close



This makes resource management safer and easier.



# File Handling in Real Applications

File handling is used in many types of software.



## Banking Applications

Transaction

↓

Store Transaction Details

↓

Transaction File

↓

Read Later



## Hospital Management

Patient Information

↓

Patient Record

↓

File Storage

↓

Retrieve Information



## E-Commerce

Order Created

↓

Generate Invoice

↓

Save Invoice File



## Logging Systems

Application Event

↓

Log Information

↓

Log File



## Configuration

Application Settings

↓

Configuration File

↓

Java Application



## Data Processing

Input File

↓

Java Program

↓

Process Data

↓

Output File



# Advantages of File Handling

File handling provides several benefits.



## Persistent Storage

Data can remain available after the program terminates.



## Simple Storage

Files provide a simple way to store information.



## Data Exchange

Files can be used to exchange information between applications.



## Logging

Applications can store events and errors in log files.



## Configuration

Applications can store settings in configuration files.



## Backup

Files can be used to create backups of information.



# Limitations of File Storage

Files are useful, but they are not always the best solution.



For small applications:

Small Application

↓

File Storage



For large applications:

Large Application

↓

Database



Databases are generally more suitable for:

- Large amounts of structured data.
- Concurrent access.
- Complex queries.
- Transaction management.



The appropriate storage method depends on the application's requirements.



# File Handling vs Database

File Storage

↓

Simple

↓

Small Applications

↓

Reports

↓

Logs

↓

Configuration



Database

↓

Structured Data

↓

Large Applications

↓

Queries

↓

Transactions

↓

Concurrent Access



File handling and databases serve different purposes.



# Common File Handling Operations

Throughout this module, you will learn how to:

- Create files.
- Read files.
- Write files.
- Append data.
- Copy files.
- Move files.
- Rename files.
- Delete files.
- Create directories.
- List directory contents.
- Work with file paths.
- Serialize objects.
- Deserialize objects.



These concepts will eventually be combined into a practical project.



# Module Project

At the end of this module, you will build:

File Management System



The system will allow you to perform operations such as:

Create File

↓

Read File

↓

Write File

↓

Append File

↓

Copy File

↓

Move File

↓

Delete File

↓

Manage Directories



This project will combine the concepts learned throughout the module.



# Best Practices

Follow these practices when working with files:

- Always close file resources properly.
- Prefer Try-with-Resources for closeable resources.
- Handle IOException appropriately.
- Use character streams for text data.
- Use byte streams for binary data.
- Use meaningful file names.
- Avoid unnecessary hard-coded absolute paths.
- Check whether files exist when necessary.
- Be careful with file permissions.
- Avoid storing sensitive information in plain-text files.



# Industry Importance

File handling remains important even when applications use databases and cloud storage.



Enterprise applications commonly use files for:

- Configuration.
- Logging.
- Reports.
- Data imports.
- Data exports.
- Temporary processing.
- Backups.
- Batch processing.
- File uploads.
- File downloads.



Understanding Java I/O provides the foundation for working with these systems effectively.



# Interview Points

## What is File Handling?

File Handling is the process of creating, reading, writing, updating, and managing files using programming APIs.



## What is Java I/O?

Java I/O is a set of APIs used to perform input and output operations.



## What is a Stream?

A stream represents the flow of data between a source and a destination.



## What are the two main types of streams?

The two main types are:

- Byte Streams.
- Character Streams.



## When are byte streams used?

Byte streams are commonly used for binary data such as images, audio, video, and PDF files.



## When are character streams used?

Character streams are commonly used for text-based data.



## What is Java NIO?

Java NIO is the modern I/O API that provides classes such as Path and Files for file-system operations.



# Key Points

Remember:

- File Handling provides persistent storage.
- Java provides File I/O and Java NIO APIs.
- Input means receiving data.
- Output means sending or storing data.
- Streams represent the flow of data.
- Byte streams work with binary data.
- Character streams work with character data.
- File operations can generate exceptions.
- IOException is important in file handling.
- Try-with-Resources automatically manages resources.
- Java NIO provides modern file-handling APIs.
- Files can be used for storage, logging, configuration, and data exchange.



# Summary

File Handling is an essential Java skill.



Programs often need to store information permanently instead of keeping everything only in memory.



Java provides powerful APIs for working with files through:

- Java I/O.
- Streams.
- File APIs.
- Java NIO.



By learning file handling, you will be able to create applications that can store, retrieve, update, and manage information on the file system.



In the next lesson, you will learn about the File class and how Java represents files and directories using File objects.

`

};

export default lesson1;