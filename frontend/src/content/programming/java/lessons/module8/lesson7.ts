const lesson7 = {

id: "lesson7",

title: "BufferedReader & BufferedWriter",

content: `

# BufferedReader & BufferedWriter

## Introduction

In the previous lessons, you learned how to:

- Create files.
- Read files.
- Write files.
- Append data.

You used classes such as:

- File.
- FileReader.
- FileWriter.
- Scanner.

These APIs are useful, but when working with larger text files, performing many individual read or write operations can be inefficient.

Java provides buffered I/O to improve efficiency.

The two important classes are:

- BufferedReader.
- BufferedWriter.

---

# What is Buffering?

A buffer is a temporary area of memory used to hold data while it is being transferred between a program and an external resource such as a file.

Instead of repeatedly accessing the file system for every small piece of data, a buffer allows data to be processed in larger chunks.

---

# Simple Analogy

Imagine carrying books from a library.

Without buffering:

Library

↓

Carry 1 Book

↓

Library

↓

Carry 1 Book

↓

Library

↓

Carry 1 Book

This requires many trips.

With buffering:

Library

↓

Collect Several Books

↓

Carry Together

↓

Destination

Fewer trips generally mean better efficiency.

---

# Buffered I/O

The basic concept is:

File

↓

Buffer

↓

Java Program

For writing:

Java Program

↓

Buffer

↓

File

---

# BufferedReader

BufferedReader is a character-stream class used for efficiently reading text.

It belongs to:

java.io

Import:

\`\`\`java
import java.io.BufferedReader;
\`\`\`

It is commonly used together with:

FileReader

---

# Basic Syntax

\`\`\`java
BufferedReader reader =
        new BufferedReader(
                new FileReader("data.txt"));
\`\`\`

Here:

File

↓

FileReader

↓

BufferedReader

↓

Java Program

FileReader provides the underlying character stream, while BufferedReader adds buffering and convenient line-based reading.

---

# readLine()

One of the most useful methods of BufferedReader is:

\`\`\`java
readLine()
\`\`\`

It reads one complete line of text.

Example:

\`\`\`java
String line = reader.readLine();
\`\`\`

When the end of the file is reached, readLine() returns:

\`\`\`text
null
\`\`\`

---

# Example 1: Reading a File Line by Line

Suppose data.txt contains:

\`\`\`text
Java
Python
C++
JavaScript
\`\`\`

Program:

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderExample1 {

    public static void main(String[] args) {

        try (BufferedReader reader =
                     new BufferedReader(
                             new FileReader(
                                     "data.txt"))) {

            String line;

            while ((line = reader.readLine())
                    != null) {

                System.out.println(line);

            }

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to read file.");

        }

    }

}
\`\`\`

Output:

\`\`\`text
Java
Python
C++
JavaScript
\`\`\`

---

# Understanding the Loop

The important statement is:

\`\`\`java
while ((line = reader.readLine()) != null)
\`\`\`

It means:

1. Read a line.
2. Store it in line.
3. Check whether it is null.
4. If not null, process it.
5. Continue until the end of the file.

---

# Reading Flow

Open File

↓

Create FileReader

↓

Create BufferedReader

↓

readLine()

↓

Process Line

↓

readLine()

↓

...

↓

null

↓

End

---

# BufferedWriter

BufferedWriter is a character-stream class used for efficiently writing text.

It belongs to:

java.io

Import:

\`\`\`java
import java.io.BufferedWriter;
\`\`\`

It is commonly used together with:

FileWriter

---

# Basic Syntax

\`\`\`java
BufferedWriter writer =
        new BufferedWriter(
                new FileWriter("data.txt"));
\`\`\`

Flow:

Java Program

↓

BufferedWriter

↓

FileWriter

↓

File

---

# write()

The write() method writes characters or strings.

Example:

\`\`\`java
writer.write("Hello Java");
\`\`\`

---

# newLine()

BufferedWriter provides:

\`\`\`java
newLine()
\`\`\`

to write a line separator.

Example:

\`\`\`java
writer.write("Java");
writer.newLine();
writer.write("Python");
\`\`\`

Result:

\`\`\`text
Java
Python
\`\`\`

This is convenient when writing multiple lines.

---

# Example 2: Writing with BufferedWriter

\`\`\`java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedWriterExample1 {

    public static void main(String[] args) {

        try (BufferedWriter writer =
                     new BufferedWriter(
                             new FileWriter(
                                     "data.txt"))) {

            writer.write("Java");
            writer.newLine();

            writer.write("Python");
            writer.newLine();

            writer.write("C++");

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to write file.");

        }

    }

}
\`\`\`

File Content:

\`\`\`text
Java
Python
C++
\`\`\`

---

# BufferedWriter Append Mode

BufferedWriter can also work with a FileWriter opened in append mode.

Example:

\`\`\`java
try (BufferedWriter writer =
        new BufferedWriter(
            new FileWriter(
                "data.txt",
                true))) {

    writer.write("JavaScript");
    writer.newLine();

}
\`\`\`

The new data is added to the existing file.

---

# Example 3: Buffered Append

Suppose:

data.txt

\`\`\`text
Java
Python
\`\`\`

Program:

\`\`\`java
import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedWriterExample2 {

    public static void main(String[] args) {

        try (BufferedWriter writer =
                     new BufferedWriter(
                             new FileWriter(
                                     "data.txt",
                                     true))) {

            writer.write("C++");
            writer.newLine();

        }

        catch (IOException e) {

            System.out.println(
                    "Append failed.");

        }

    }

}
\`\`\`

Result:

\`\`\`text
Java
Python
C++
\`\`\`

---

# BufferedReader vs Scanner

Both can read text files.

| Feature | Scanner | BufferedReader |
|---|---|---|
| Reading lines | Yes | Yes |
| Token parsing | Yes | No direct token parsing |
| readLine() | No | Yes |
| Performance for large text | Generally slower | Generally faster |
| Simplicity | Very easy | Easy |
| Common Use | Simple parsing | Efficient text reading |

Scanner is convenient when you need token parsing or simple input handling.

BufferedReader is often preferred for efficient line-oriented text processing.

---

# BufferedReader vs FileReader

| Feature | FileReader | BufferedReader |
|---|---|---|
| Type | Character stream | Buffered character stream |
| Reads characters | Yes | Yes |
| Reads lines directly | No | Yes |
| Buffering | No additional buffering | Yes |
| readLine() | No | Yes |

A common pattern is:

\`\`\`java
BufferedReader reader =
        new BufferedReader(
                new FileReader("data.txt"));
\`\`\`

---

# BufferedWriter vs FileWriter

| Feature | FileWriter | BufferedWriter |
|---|---|---|
| Writes characters | Yes | Yes |
| Buffering | No additional buffering | Yes |
| newLine() | No | Yes |
| Large text writing | Less efficient for many small writes | Better suited |
| Common Use | Simple writing | Efficient text writing |

A common pattern is:

\`\`\`java
BufferedWriter writer =
        new BufferedWriter(
                new FileWriter("data.txt"));
\`\`\`

---

# Why Use Buffering?

Without buffering:

Write Character

↓

File System

Write Character

↓

File System

Write Character

↓

File System

With buffering:

Write Data

↓

Buffer

↓

Larger Write

↓

File System

Reducing the number of underlying I/O operations can improve performance, especially when processing large amounts of text.

---

# Buffer Size

A buffer has a limited capacity.

When the buffer becomes full, its contents can be transferred to the underlying stream.

Conceptually:

Program

↓

Buffer

│

├── Data

├── Data

├── Data

└── Data

↓

Underlying File

Java chooses a default buffer size, and custom buffer sizes can also be specified when appropriate.

---

# flush()

BufferedWriter may hold data in memory before writing it to the underlying writer.

You can explicitly request that buffered data be written:

\`\`\`java
writer.flush();
\`\`\`

Example:

\`\`\`java
writer.write("Hello");
writer.flush();
\`\`\`

When using Try-with-Resources, closing the writer performs the final flush automatically.

---

# Example 4: Counting Lines

BufferedReader makes line-based processing simple.

\`\`\`java
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class BufferedReaderExample3 {

    public static void main(String[] args) {

        int count = 0;

        try (BufferedReader reader =
                     new BufferedReader(
                             new FileReader(
                                     "data.txt"))) {

            while (reader.readLine() != null) {

                count++;

            }

            System.out.println(
                    "Number of Lines: "
                    + count);

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to read file.");

        }

    }

}
\`\`\`

---

# Example 5: Copying Text Using Buffered Streams

A text file can be copied line by line.

\`\`\`java
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class BufferedCopyExample {

    public static void main(String[] args) {

        try (
            BufferedReader reader =
                new BufferedReader(
                    new FileReader(
                        "source.txt"));

            BufferedWriter writer =
                new BufferedWriter(
                    new FileWriter(
                        "copy.txt"))
        ) {

            String line;

            while ((line = reader.readLine())
                    != null) {

                writer.write(line);
                writer.newLine();

            }

            System.out.println(
                    "File copied.");

        }

        catch (IOException e) {

            System.out.println(
                    "Copy operation failed.");

        }

    }

}
\`\`\`

This example is suitable for text files.

Binary files should instead be handled using byte streams such as FileInputStream and FileOutputStream, which you will learn in Lesson 8.

---

# Reading Large Text Files

Suppose a file contains millions of lines.

Instead of attempting to store the entire file in memory:

Huge File

↓

Read One Line

↓

Process

↓

Read Next Line

↓

Process

BufferedReader is well suited for this line-oriented processing model.

---

# Real-World Applications

## Log Analysis

Large Log File

↓

BufferedReader

↓

Read Line

↓

Analyze

---

## Report Generation

Application Data

↓

BufferedWriter

↓

Report File

---

## CSV Processing

CSV File

↓

BufferedReader

↓

Process Records

---

## Data Export

Application

↓

BufferedWriter

↓

Export File

---

# Common Mistakes

## 1. Forgetting to Close the Reader or Writer

Prefer:

\`\`\`java
try (BufferedReader reader =
        new BufferedReader(
            new FileReader("data.txt"))) {

}
\`\`\`

---

## 2. Forgetting null Check

Incorrect:

\`\`\`java
while (reader.readLine() != null) {

}
\`\`\`

This works for simply counting lines, but if you need the line content, store it:

\`\`\`java
String line;

while ((line = reader.readLine()) != null) {

    System.out.println(line);

}
\`\`\`

---

## 3. Forgetting newLine()

Incorrect:

\`\`\`java
writer.write("Java");
writer.write("Python");
\`\`\`

Possible result:

\`\`\`text
JavaPython
\`\`\`

Use:

\`\`\`java
writer.write("Java");
writer.newLine();
writer.write("Python");
\`\`\`

---

## 4. Using Character Streams for Binary Files

Do not use FileReader and BufferedReader for binary data such as images or PDFs.

Use byte streams instead.

---

# Best Practices

- Use BufferedReader for efficient line-oriented text reading.
- Use BufferedWriter for efficient text writing.
- Use Try-with-Resources.
- Handle IOException.
- Use readLine() when processing text line by line.
- Use newLine() instead of manually inserting platform-specific line characters when writing lines.
- Do not use character streams for binary files.
- Process large files incrementally rather than unnecessarily loading everything into memory.

---

# Industry Perspective

Buffered I/O is an important concept in production software because applications often process files that are much larger than the available memory.

Examples include:

- Server logs.
- CSV datasets.
- Reports.
- Configuration files.
- Export files.
- Batch-processing input.

Modern Java applications may also use Java NIO, streams, asynchronous APIs, or specialized libraries depending on the workload.

However, understanding BufferedReader and BufferedWriter gives you a strong foundation for efficient character-based file processing.

---

# Interview Tip

## Q: Why is BufferedReader preferred over FileReader for many text-reading tasks?

### Answer:

BufferedReader adds buffering and provides convenient line-oriented reading through readLine(). This can reduce the number of underlying I/O operations and is generally more efficient for reading large text files.

---

## Q: What does readLine() return at the end of a file?

### Answer:

It returns null.

---

## Q: What is the purpose of BufferedWriter.newLine()?

### Answer:

It writes a line separator, allowing the program to move to the next line in a platform-independent way.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain buffering.
- Understand why buffered I/O can improve performance.
- Use BufferedReader.
- Use readLine().
- Understand the null return value at the end of a file.
- Use BufferedWriter.
- Use write().
- Use newLine().
- Use append mode with buffered writing.
- Compare Scanner, FileReader, and BufferedReader.
- Compare FileWriter and BufferedWriter.
- Process large text files line by line.
- Use Try-with-Resources.
- Understand why character streams should not be used for binary files.

Buffered I/O provides a more efficient and convenient way to process text files. With BufferedReader and BufferedWriter, you are now ready to move from basic text-file operations to byte-based file processing, which is essential for working with images, PDFs, audio, and other binary data.

---

# Next Lesson

## Lesson 8 — FileInputStream & FileOutputStream

You will learn:

- Byte Streams.
- FileInputStream.
- FileOutputStream.
- Reading bytes.
- Writing bytes.
- Binary files.
- Byte arrays.
- Copying images and other binary files.
- read().
- write().
- Performance considerations.
- Practical programs.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson7;