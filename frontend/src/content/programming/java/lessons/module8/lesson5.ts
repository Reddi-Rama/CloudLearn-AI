const lesson5 = {

id: "lesson5",

title: "Writing Files",

content: `

# Writing Files

## Introduction

In the previous lesson, you learned how to read data from files.



Now we will learn the opposite operation:

Writing data into files.



Suppose a Java application receives:

Name: Alex
Age: 20
Course: Java



The program can save this information into:

student.txt



The basic flow is:



Java Program

↓

Write Data

↓

File



# What is File Writing?

File Writing is the process of transferring data from a Java application into a file.



For example:

Java Program

"Hello Java"

↓

hello.txt

"Hello Java"



# Why Do We Need File Writing?

File writing allows applications to store information for later use.



Examples:

- Saving user information.
- Generating reports.
- Creating logs.
- Exporting data.
- Saving application settings.
- Creating invoices.
- Storing temporary information.



# FileWriter

For writing character-based text data, Java provides:

FileWriter



It belongs to:

java.io



Import:

\`\`\`java
import java.io.FileWriter;
\`\`\`



# Basic Syntax

\`\`\`java
FileWriter writer =
        new FileWriter("data.txt");
\`\`\`



Then:

\`\`\`java
writer.write("Hello Java");
\`\`\`



Finally:

\`\`\`java
writer.close();
\`\`\`



# Example 1: Writing Text to a File

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample1 {

    public static void main(String[] args) {

        try (FileWriter writer =
                     new FileWriter("data.txt")) {

            writer.write("Hello Java");

            System.out.println(
                    "Data written successfully.");

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to write file.");

        }

    }

}
\`\`\`



After execution:

data.txt

\`\`\`text
Hello Java
\`\`\`



# Understanding the Program

The statement:

\`\`\`java
new FileWriter("data.txt")
\`\`\`



opens the file for writing.



Then:

\`\`\`java
writer.write("Hello Java");
\`\`\`



writes the text.



Try-with-Resources automatically closes the writer.



# File Writing Workflow

Create FileWriter

↓

Open File

↓

Write Data

↓

Flush / Close

↓

File Updated



# Writing Multiple Lines

You can write multiple strings.



\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample2 {

    public static void main(String[] args) {

        try (FileWriter writer =
                     new FileWriter("data.txt")) {

            writer.write("Name: Alex\n");
            writer.write("Age: 20\n");
            writer.write("Course: Java\n");

        }

        catch (IOException e) {

            System.out.println(
                    "Writing failed.");

        }

    }

}
\`\`\`



File Content:

\`\`\`text
Name: Alex
Age: 20
Course: Java
\`\`\`



# New Line

You can use:

\`\`\`text
\n
\`\`\`



to insert a new line.



Example:

\`\`\`java
writer.write("Line 1\n");
writer.write("Line 2\n");
\`\`\`



Result:

\`\`\`text
Line 1
Line 2
\`\`\`



For platform-independent line separators, Java also provides:

\`\`\`java
System.lineSeparator()
\`\`\`



Example:

\`\`\`java
writer.write(
        "Line 1"
        + System.lineSeparator());

writer.write(
        "Line 2");
\`\`\`



# Writing a Character

FileWriter can write characters.



Example:

\`\`\`java
writer.write('A');
\`\`\`



The file becomes:

\`\`\`text
A
\`\`\`



# Writing a String

You can also write a complete string.



\`\`\`java
writer.write(
        "Java File Handling");
\`\`\`



# Writing Multiple Strings

Example:

\`\`\`java
writer.write("Java");
writer.write(" ");
writer.write("Programming");
\`\`\`



Result:

\`\`\`text
Java Programming
\`\`\`



# Overwriting Existing Content

By default:

\`\`\`java
new FileWriter("data.txt")
\`\`\`



opens the file for writing in a way that replaces its existing contents.



Suppose the file contains:

\`\`\`text
Old Data
\`\`\`



Then:

\`\`\`java
writer.write("New Data");
\`\`\`



results in:

\`\`\`text
New Data
\`\`\`



The old content is replaced.



This distinction is important because later we will learn how to append instead of overwrite.



# Example 3: Overwriting

Before:

data.txt

\`\`\`text
Java
Python
C++
\`\`\`



Program:

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample3 {

    public static void main(String[] args) {

        try (FileWriter writer =
                     new FileWriter("data.txt")) {

            writer.write("JavaScript");

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to write.");

        }

    }

}
\`\`\`



After execution:

data.txt

\`\`\`text
JavaScript
\`\`\`



The previous content has been replaced.



# Writing Data from Variables

File writing becomes much more useful when data comes from variables.



\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample4 {

    public static void main(String[] args) {

        String name = "Alex";
        int age = 20;
        String course = "Java";

        try (FileWriter writer =
                     new FileWriter("student.txt")) {

            writer.write("Name: " + name
                    + System.lineSeparator());

            writer.write("Age: " + age
                    + System.lineSeparator());

            writer.write("Course: " + course);

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to save data.");

        }

    }

}
\`\`\`



File Content:

\`\`\`text
Name: Alex
Age: 20
Course: Java
\`\`\`



This is the basic foundation for storing application data in text files.



# Writing an Array to a File

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample5 {

    public static void main(String[] args) {

        String[] languages = {
                "Java",
                "Python",
                "C++",
                "JavaScript"
        };

        try (FileWriter writer =
                     new FileWriter("languages.txt")) {

            for (String language : languages) {

                writer.write(
                        language
                        + System.lineSeparator());

            }

        }

        catch (IOException e) {

            System.out.println(
                    "Writing failed.");

        }

    }

}
\`\`\`



File Content:

\`\`\`text
Java
Python
C++
JavaScript
\`\`\`



# Handling IOException

Writing to a file can fail because of:

- Invalid path.
- Permission problems.
- Storage errors.
- File-system failures.
- Other I/O problems.



Therefore, FileWriter operations can throw:

IOException



Example:

\`\`\`java
try {

    FileWriter writer =
            new FileWriter("data.txt");

}

catch (IOException e) {

    System.out.println(
            "File writing failed.");

}
\`\`\`



# Using throws

Instead of handling the exception inside the method:

\`\`\`java
public static void saveData()
        throws IOException {

    FileWriter writer =
            new FileWriter("data.txt");

    writer.write("Hello");

    writer.close();

}
\`\`\`



The exception can be propagated to the caller.



However, for resource management, Try-with-Resources is generally preferable.



# Try-with-Resources

Recommended:

\`\`\`java
try (FileWriter writer =
        new FileWriter("data.txt")) {

    writer.write("Hello Java");

}
\`\`\`



The writer is automatically closed.



This reduces the chance of resource leaks.



# flush()

A writer may internally buffer data before sending it to the underlying destination.



The flush() method requests that buffered data be written out.



Example:

\`\`\`java
writer.write("Hello");

writer.flush();
\`\`\`



When using Try-with-Resources, closing the writer also performs the necessary final flushing.



In most simple programs, you do not need to call flush() manually before the resource is closed.



# Writing a Complete Report

\`\`\`java
import java.io.FileWriter;
import java.io.IOException;

public class WriteFileExample6 {

    public static void main(String[] args) {

        try (FileWriter writer =
                     new FileWriter("report.txt")) {

            writer.write(
                    "===== Report ====="
                    + System.lineSeparator());

            writer.write(
                    "Total Users: 150"
                    + System.lineSeparator());

            writer.write(
                    "Active Users: 120"
                    + System.lineSeparator());

            writer.write(
                    "Inactive Users: 30");

            System.out.println(
                    "Report generated.");

        }

        catch (IOException e) {

            System.out.println(
                    "Report generation failed.");

        }

    }

}
\`\`\`



File Content:

\`\`\`text
===== Report =====
Total Users: 150
Active Users: 120
Inactive Users: 30
\`\`\`



# FileWriter and File Creation

You do not always need to call:

\`\`\`java
createNewFile();
\`\`\`



before using FileWriter.



For example:

\`\`\`java
FileWriter writer =
        new FileWriter("data.txt");
\`\`\`



If the target file does not exist, FileWriter can create it.



Therefore:

File Doesn't Exist

↓

FileWriter

↓

File Created

↓

Data Written



This is different from createNewFile(), which only creates the empty file.



# FileWriter vs createNewFile()

| createNewFile() | FileWriter |
|---|---|
| Creates an empty file | Writes character data |
| Does not write content | Can create and write |
| Returns boolean | Used as a writer |
| Part of File | Part of java.io |



# Writing Empty Content

You can create a file without writing content:

\`\`\`java
File file =
        new File("empty.txt");

file.createNewFile();
\`\`\`



With FileWriter, you can also open a file and simply close it without writing anything.



# Real-World Applications

## Student Records

Student Data

↓

Java Program

↓

student.txt



## Banking Reports

Transactions

↓

Java Program

↓

transaction-report.txt



## Application Logs

Application Event

↓

Logger

↓

Log File



## Invoice Generation

Order Data

↓

Java Program

↓

Invoice File



# Common Mistakes

## 1. Forgetting to Close the Writer

Avoid:

\`\`\`java
FileWriter writer =
        new FileWriter("data.txt");

writer.write("Hello");
\`\`\`



without closing or otherwise properly managing the resource.



Prefer Try-with-Resources.



## 2. Assuming write() Automatically Adds a New Line

This:

\`\`\`java
writer.write("Java");
writer.write("Python");
\`\`\`



may produce:

\`\`\`text
JavaPython
\`\`\`



If you need separate lines:

\`\`\`java
writer.write("Java"
        + System.lineSeparator());

writer.write("Python");
\`\`\`



## 3. Accidentally Overwriting Existing Data

Remember:

\`\`\`java
new FileWriter("data.txt")
\`\`\`



normally replaces the existing contents.



Use append mode when you want to preserve existing data.



You will learn append mode in Lesson 6.



## 4. Ignoring IOException

File writing can fail.



Always handle or propagate the appropriate exception.



# Best Practices

- Use Try-with-Resources.
- Handle IOException.
- Use meaningful file names.
- Use System.lineSeparator() for platform-independent line breaks.
- Be aware that normal FileWriter usage overwrites existing contents.
- Use buffering when writing large amounts of text.
- Avoid hard-coded environment-specific paths.
- Keep file-writing responsibilities separate from unrelated business logic.



# Industry Perspective

Text file writing is commonly used for:

- Reports.
- Configuration files.
- Exported data.
- Logs.
- Temporary processing.
- Application-generated documents.



For larger amounts of text data, buffered writers such as BufferedWriter can improve efficiency by reducing the number of direct write operations.



You will learn BufferedWriter in Lesson 7.



# Interview Tip

## Q: What is FileWriter used for?

### Answer:

FileWriter is a character stream used to write character-based data such as text into a file.



## Q: Does FileWriter overwrite existing content?

### Answer:

Yes. When created using the standard constructor, FileWriter opens the file for writing and replaces existing contents. Append mode can be enabled using the appropriate constructor.



## Q: Do you need to call createNewFile() before using FileWriter?

### Answer:

No. FileWriter can create the target file if it does not already exist, provided the path is valid and the application has the required permissions.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain file writing in Java.
- Use FileWriter.
- Write characters and strings.
- Write multiple lines.
- Write data stored in variables and arrays.
- Understand overwriting behavior.
- Use System.lineSeparator().
- Understand flush().
- Handle IOException.
- Use Try-with-Resources.
- Understand the difference between createNewFile() and FileWriter.
- Recognize when buffering is useful.



File writing allows Java applications to persist generated information outside the program's memory.



In the next lesson, you will learn how to append new data to an existing file without deleting its previous contents.



# Next Lesson

## Lesson 6 — Appending Data

You will learn:

- What appending means.
- Append vs overwrite.
- FileWriter append mode.
- Adding new lines.
- Updating existing files.
- Log-file use cases.
- Practical programs.
- Real-world applications.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson5;