const lesson6 = {

id: "lesson6",

title: "Appending Data",

content: `

# Appending Data

## Introduction

In the previous lesson, you learned how to write data into a file using FileWriter.

You also learned an important behavior:

\`new FileWriter("data.txt")\`

normally overwrites the existing contents.

But many applications need to add new information while preserving the old information.

For example, a log file may contain:

Application Started
User Logged In

Later, another event occurs.

We want:

Application Started
User Logged In
Transaction Completed

We do not want the previous entries to disappear.

This operation is called Appending.

---

# What is Appending?

Appending means adding new data to the end of an existing file without replacing its existing contents.

Simple flow:

Existing File

↓

Existing Data

↓

Append New Data

↓

Existing Data + New Data

---

# Append vs Overwrite

Suppose the file contains:

\`\`\`text
Java
Python
\`\`\`

## Overwrite

\`\`\`java
FileWriter writer =
        new FileWriter("data.txt");

writer.write("C++");
\`\`\`

Result:

\`\`\`text
C++
\`\`\`

The old content is replaced.

---

## Append

\`\`\`java
FileWriter writer =
        new FileWriter("data.txt", true);

writer.write("C++");
\`\`\`

Result:

\`\`\`text
Java
Python
C++
\`\`\`

The true argument enables append mode.

---

# FileWriter Append Mode

The FileWriter class provides a constructor that accepts an append parameter.

Syntax:

\`\`\`java
FileWriter writer =
        new FileWriter("data.txt", true);
\`\`\`

Here:

true

↓

Append Mode

Whereas:

\`\`\`java
new FileWriter("data.txt", false);
\`\`\`

uses normal overwrite behavior.

---

# Example 1: Basic Append

Suppose data.txt contains:

\`\`\`text
Java
Python
\`\`\`

Program:

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class AppendExample1 {

    public static void main(String[] args) {

        try (FileWriter writer =
                     new FileWriter(
                             "data.txt",
                             true)) {

            writer.write("C++");

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to append data.");

        }

    }

}
\`\`\`

After execution:

\`\`\`text
Java
Python
C++
\`\`\`

---

# Adding a New Line

If you append:

\`\`\`java
writer.write("C++");
\`\`\`

without a line separator, the new content may be joined directly to the previous content.

For example:

\`\`\`text
Java
PythonC++
\`\`\`

To add the new content on a separate line:

\`\`\`java
writer.write(
        System.lineSeparator()
        + "C++");
\`\`\`

Result:

\`\`\`text
Java
Python
C++
\`\`\`

---

# Example 2: Append Multiple Lines

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class AppendExample2 {

    public static void main(String[] args) {

        try (FileWriter writer =
                     new FileWriter(
                             "data.txt",
                             true)) {

            writer.write(
                    System.lineSeparator()
                    + "C++");

            writer.write(
                    System.lineSeparator()
                    + "JavaScript");

        }

        catch (IOException e) {

            System.out.println(
                    "Append operation failed.");

        }

    }

}
\`\`\`

Result:

\`\`\`text
Java
Python
C++
JavaScript
\`\`\`

---

# Better Approach for Multiple Lines

You can construct the complete text first:

\`\`\`java
String data =
        System.lineSeparator()
        + "C++"
        + System.lineSeparator()
        + "JavaScript";

writer.write(data);
\`\`\`

This makes the code easier to organize when multiple lines are being appended.

---

# Example 3: Appending User Data

Suppose an application needs to store user names.

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class AppendExample3 {

    public static void main(String[] args) {

        String name = "Alex";

        try (FileWriter writer =
                     new FileWriter(
                             "users.txt",
                             true)) {

            writer.write(
                    name
                    + System.lineSeparator());

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to save user.");

        }

    }

}
\`\`\`

Every execution adds another entry instead of replacing the existing data.

---

# Appending a Transaction

Suppose:

transactions.txt

\`\`\`text
Deposit: 500
Withdrawal: 200
\`\`\`

A new transaction occurs:

\`\`\`java
writer.write(
        "Deposit: 100"
        + System.lineSeparator());
\`\`\`

The file becomes:

\`\`\`text
Deposit: 500
Withdrawal: 200
Deposit: 100
\`\`\`

This is useful for transaction histories and activity records.

---

# Appending Log Messages

Log files are one of the most common uses of append mode.

Example:

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class AppendExample4 {

    public static void main(String[] args) {

        try (FileWriter writer =
                     new FileWriter(
                             "application.log",
                             true)) {

            writer.write(
                    "Application Started"
                    + System.lineSeparator());

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to write log.");

        }

    }

}
\`\`\`

Every execution adds another log entry.

---

# Append Mode with a Non-Existing File

What happens if the file does not exist?

\`\`\`java
new FileWriter(
        "newfile.txt",
        true);
\`\`\`

If the path is valid and the application has permission to create the file, the writer can create the file.

Then the data is written to it.

File Doesn't Exist

↓

FileWriter Append Mode

↓

File Created

↓

Data Written

---

# Append Mode with an Existing File

If the file exists:

Existing Data

↓

Append

↓

New Data

The existing content remains unchanged.

---

# Example 5: Appending Records

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class AppendExample5 {

    public static void main(String[] args) {

        String name = "Alex";
        int marks = 85;

        try (FileWriter writer =
                     new FileWriter(
                             "records.txt",
                             true)) {

            writer.write(
                    "Name: " + name
                    + System.lineSeparator());

            writer.write(
                    "Marks: " + marks
                    + System.lineSeparator());

            writer.write(
                    "----------------"
                    + System.lineSeparator());

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to save record.");

        }

    }

}
\`\`\`

Each execution adds another record.

---

# Append vs Write

| Operation | Normal FileWriter | Append Mode |
|---|---|---|
| Existing content | Replaced | Preserved |
| New content | Written | Added to end |
| Constructor | new FileWriter(file) | new FileWriter(file, true) |
| Common Use | Replacing a file | Logs, histories, records |

---

# Important: Append Does Not Mean Insert

Appending always adds data at the end of the file.

Suppose:

\`\`\`text
A
B
C
\`\`\`

Appending:

\`\`\`text
D
\`\`\`

produces:

\`\`\`text
A
B
C
D
\`\`\`

It does not insert D between A and B.

---

# Appending at the End

The basic model is:

Beginning

↓

Existing Content

↓

End

↓

New Content

---

# Using flush()

You can explicitly request that buffered output be written:

\`\`\`java
writer.write("New Data");

writer.flush();
\`\`\`

However, when using Try-with-Resources, closing the writer performs the final required flush.

---

# Try-with-Resources

Recommended:

\`\`\`java
try (FileWriter writer =
        new FileWriter(
                "data.txt",
                true)) {

    writer.write(
            "New Entry");

}
\`\`\`

The writer is automatically closed.

---

# Common Mistakes

## 1. Forgetting the true

Incorrect:

\`\`\`java
new FileWriter("data.txt");
\`\`\`

This normally overwrites the existing contents.

Correct:

\`\`\`java
new FileWriter(
        "data.txt",
        true);
\`\`\`

---

## 2. Forgetting the New Line

Incorrect:

\`\`\`java
writer.write("New Entry");
\`\`\`

This may join the new entry directly to the previous content.

Better:

\`\`\`java
writer.write(
        "New Entry"
        + System.lineSeparator());
\`\`\`

---

## 3. Assuming Append Can Modify Any Position

Append mode only adds data at the end.

For modifying content in the middle of a file, a different approach is required.

---

## 4. Ignoring IOException

File operations can fail.

Always handle or propagate the appropriate exception.

---

# Real-World Applications

## Application Logs

Application Event

↓

Append Log

↓

application.log

---

## Transaction History

Transaction

↓

Append

↓

Transaction History

---

## Attendance Records

Attendance

↓

Append

↓

attendance.txt

---

## Audit Records

System Event

↓

Append

↓

Audit File

---

# Best Practices

- Use append mode only when existing data must be preserved.
- Add appropriate line separators between records.
- Use Try-with-Resources.
- Handle IOException.
- Use meaningful file formats and record structures.
- Avoid repeatedly opening and closing files unnecessarily in high-volume applications.
- For concurrent production systems, use appropriate logging or storage mechanisms instead of relying on a plain text file.

---

# Industry Perspective

Appending is especially useful for data that grows over time.

Common examples include:

- Logs.
- Audit trails.
- Transaction histories.
- Activity records.
- Export files.

However, for high-volume or concurrent applications, specialized logging systems and databases are generally more appropriate than repeatedly appending to a single text file.

---

# Interview Tip

## Q: How do you append data to a file using FileWriter?

### Answer:

Use the FileWriter constructor with the append parameter set to true:

\`\`\`java
FileWriter writer =
        new FileWriter("data.txt", true);
\`\`\`

Then write the required data.

---

## Q: What is the difference between new FileWriter("data.txt") and new FileWriter("data.txt", true)?

### Answer:

The first normally overwrites existing content, while the second opens the file in append mode and preserves existing content.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Explain what appending means.
- Differentiate append mode from overwrite mode.
- Use FileWriter append mode.
- Add new lines to an existing file.
- Append records and log messages.
- Understand what happens when the target file does not exist.
- Use Try-with-Resources with append mode.
- Avoid common append-related mistakes.
- Identify real-world applications of append operations.

Appending allows applications to continuously add new information without destroying previously stored data. It is particularly useful for logs, histories, records, and audit information.

---

# Next Lesson

## Lesson 7 — BufferedReader & BufferedWriter

You will learn:

- Why buffering is needed.
- BufferedReader.
- readLine().
- BufferedWriter.
- write().
- newLine().
- Buffered vs unbuffered I/O.
- Performance considerations.
- Reading and writing large text files.
- Try-with-Resources.
- Practical programs.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson6;