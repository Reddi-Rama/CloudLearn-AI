const lesson4 = {

id: "lesson4",

title: "Reading Files",

content: `

# Reading Files

## Introduction

In the previous lesson, you learned how to create physical files using:

createNewFile()



Creating a file is only the beginning.



In real applications, you also need to retrieve the information stored inside a file.



For example:

data.txt

Name: Alex
Age: 20
Course: Java



A Java program should be able to read this information and process it.



This process is called:

File Reading



# What is File Reading?

File Reading is the process of retrieving data from a file into a Java program.



Simple flow:



File

↓

Read

↓

Java Program

↓

Process Data



# Why Do We Need File Reading?

File reading is useful when an application needs to retrieve previously stored information.



Examples:

- Reading configuration files.
- Reading reports.
- Loading saved records.
- Reading CSV data.
- Reading log files.
- Processing text files.



# Common Java File-Reading APIs

Java provides several ways to read files.



File Reading

     │

     ├── Scanner

     │

     ├── FileReader

     │

     ├── BufferedReader

     │

     └── Files (Java NIO)



In this lesson, we will focus on:

- Scanner.
- FileReader.



BufferedReader and Java NIO will be covered in later lessons.



# Reading a File Using Scanner

The Scanner class can read text from a file.



Import:

\`\`\`java
import java.util.Scanner;
\`\`\`



and:

\`\`\`java
import java.io.File;
\`\`\`



# Example 1: Reading a File Using Scanner

Suppose data.txt contains:

\`\`\`text
Hello Java
File Handling
CloudLearn AI
\`\`\`



Program:

\`\`\`java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileExample1 {

    public static void main(String[] args) {

        File file = new File("data.txt");

        try (Scanner scanner = new Scanner(file)) {

            while (scanner.hasNextLine()) {

                String line = scanner.nextLine();

                System.out.println(line);

            }

        }

        catch (FileNotFoundException e) {

            System.out.println(
                    "File not found.");

        }

    }

}
\`\`\`



Output:

\`\`\`text
Hello Java
File Handling
CloudLearn AI
\`\`\`



# Understanding the Program

The important statement is:

\`\`\`java
Scanner scanner = new Scanner(file);
\`\`\`



It creates a Scanner connected to the file.



Then:

\`\`\`java
scanner.hasNextLine()
\`\`\`



checks whether another line is available.



And:

\`\`\`java
scanner.nextLine()
\`\`\`



reads the next line.



# Reading Flow

Open File

↓

Create Scanner

↓

Check hasNextLine()

↓

Read nextLine()

↓

Process Data

↓

Repeat

↓

Close Scanner



Because we used Try-with-Resources, the Scanner is automatically closed.



# Reading Words Instead of Lines

Scanner can also read individual tokens.



Suppose:

data.txt

\`\`\`text
Java Python C++
\`\`\`



Program:

\`\`\`java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileExample2 {

    public static void main(String[] args) {

        File file = new File("data.txt");

        try (Scanner scanner = new Scanner(file)) {

            while (scanner.hasNext()) {

                String word = scanner.next();

                System.out.println(word);

            }

        }

        catch (FileNotFoundException e) {

            System.out.println(
                    "File not found.");

        }

    }

}
\`\`\`



Output:

\`\`\`text
Java
Python
C++
\`\`\`



# next() vs nextLine()

| Method | Purpose |
|---|---|
| next() | Reads the next token |
| nextLine() | Reads the complete current line |



Example:

\`\`\`text
Java File Handling
\`\`\`



Using:

\`\`\`java
scanner.next();
\`\`\`



reads:

\`\`\`text
Java
\`\`\`



Using:

\`\`\`java
scanner.nextLine();
\`\`\`



reads:

\`\`\`text
Java File Handling
\`\`\`



This difference is very important when reading text files.



# Reading a File Using FileReader

FileReader is a character stream used for reading text files.



Import:

\`\`\`java
import java.io.FileReader;
\`\`\`



# Example 2: FileReader

\`\`\`java
import java.io.FileReader;
import java.io.IOException;

public class ReadFileExample3 {

    public static void main(String[] args) {

        try (FileReader reader =
                     new FileReader("data.txt")) {

            int character;

            while ((character = reader.read()) != -1) {

                System.out.print(
                        (char) character);

            }

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to read file.");

        }

    }

}
\`\`\`



# Understanding read()

The read() method reads one character at a time.



It returns:

- The character value when a character is available.
- -1 when the end of the file is reached.



Flow:

Read Character

↓

End of File?

   ↓       ↓

  No      Yes

  ↓        ↓

Process   Stop



# Why Convert to char?

read() returns an integer.



For example:

\`\`\`java
int character = reader.read();
\`\`\`



The integer represents the character.



Therefore:

\`\`\`java
(char) character
\`\`\`



converts it into a character.



# Example 3: Reading Characters

Suppose:

\`\`\`text
ABC
\`\`\`



The program may internally process:

A → integer value

B → integer value

C → integer value



Then:

\`\`\`java
(char) character
\`\`\`



converts those values back to:

A

B

C



# Scanner vs FileReader

| Feature | Scanner | FileReader |
|---|---|---|
| Package | java.util | java.io |
| Reading Style | Tokens or lines | Characters |
| Ease of Use | Easy | Low-level |
| Common Use | Simple text reading | Character-based I/O |
| Exception | FileNotFoundException | IOException |



# Handling FileNotFoundException

When using:

\`\`\`java
new Scanner(file)
\`\`\`



the specified file may not exist.



Java can throw:

FileNotFoundException



Example:

\`\`\`java
try {

    Scanner scanner =
            new Scanner(file);

}

catch (FileNotFoundException e) {

    System.out.println(
            "File does not exist.");

}
\`\`\`



# FileNotFoundException Hierarchy

Object

↓

Throwable

↓

Exception

↓

IOException

↓

FileNotFoundException



FileNotFoundException is a checked exception.



Therefore, it must be handled or declared.



# Handling IOException

FileReader operations can throw IOException.



Example:

\`\`\`java
try {

    FileReader reader =
            new FileReader("data.txt");

}

catch (IOException e) {

    System.out.println(
            "I/O operation failed.");

}
\`\`\`



# Reading an Empty File

Suppose:

data.txt

[empty]



When the program reaches the end immediately:

\`\`\`java
scanner.hasNextLine()
\`\`\`



returns:

false



The loop does not execute.



# Reading a Large File

For large text files, repeatedly processing small pieces of data is generally better than loading the entire file into memory at once.



For example:

Large File

↓

Read Portion

↓

Process

↓

Read Next Portion

↓

Process



Later, BufferedReader will provide a more suitable approach for efficient line-oriented reading.



# Try-with-Resources

File readers should be closed after use.



Instead of:

\`\`\`java
FileReader reader =
        new FileReader("data.txt");

try {

    // Read

}

finally {

    reader.close();

}
\`\`\`



you can use:

\`\`\`java
try (FileReader reader =
        new FileReader("data.txt")) {

    // Read

}
\`\`\`



Java automatically closes the reader.



# Reading Multiple Lines

Suppose:

students.txt

\`\`\`text
Alex
Priya
Rahul
Ananya
\`\`\`



Using Scanner:

\`\`\`java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileExample4 {

    public static void main(String[] args) {

        File file =
                new File("students.txt");

        try (Scanner scanner =
                     new Scanner(file)) {

            while (scanner.hasNextLine()) {

                System.out.println(
                        scanner.nextLine());

            }

        }

        catch (FileNotFoundException e) {

            System.out.println(
                    "Unable to locate file.");

        }

    }

}
\`\`\`



# Reading Numeric Data

Scanner can also convert tokens into primitive types.



Suppose:

marks.txt

\`\`\`text
80
75
92
88
\`\`\`



Program:

\`\`\`java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileExample5 {

    public static void main(String[] args) {

        File file =
                new File("marks.txt");

        try (Scanner scanner =
                     new Scanner(file)) {

            while (scanner.hasNextInt()) {

                int marks =
                        scanner.nextInt();

                System.out.println(
                        marks);

            }

        }

        catch (FileNotFoundException e) {

            System.out.println(
                    "File not found.");

        }

    }

}
\`\`\`



Output:

\`\`\`text
80
75
92
88
\`\`\`



# Reading File and Counting Lines

\`\`\`java
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class ReadFileExample6 {

    public static void main(String[] args) {

        File file =
                new File("data.txt");

        int count = 0;

        try (Scanner scanner =
                     new Scanner(file)) {

            while (scanner.hasNextLine()) {

                scanner.nextLine();

                count++;

            }

            System.out.println(
                    "Number of Lines: "
                    + count);

        }

        catch (FileNotFoundException e) {

            System.out.println(
                    "File not found.");

        }

    }

}
\`\`\`



# Real-World Applications

## Configuration Files

Application

↓

Read Configuration File

↓

Load Settings



## Logs

Log File

↓

Read

↓

Analyze Errors



## CSV Processing

CSV File

↓

Read Data

↓

Process Records



## Reports

Saved Report

↓

Read File

↓

Display Information



# Common Mistakes

## 1. Forgetting to Handle FileNotFoundException

Incorrect:

\`\`\`java
Scanner scanner =
        new Scanner(file);
\`\`\`



without handling the checked exception.



## 2. Using next() When You Need a Whole Line

If the file contains:

\`\`\`text
Java File Handling
\`\`\`



next() reads only:

\`\`\`text
Java
\`\`\`



Use:

\`\`\`java
nextLine()
\`\`\`



when you need the complete line.



## 3. Forgetting to Close Resources

Prefer:

\`\`\`java
try (Scanner scanner =
        new Scanner(file)) {

}
\`\`\`



## 4. Reading Huge Files Carelessly

Avoid loading extremely large files completely into memory without considering their size and processing requirements.



# Best Practices

- Use Try-with-Resources.
- Handle file-related exceptions.
- Choose the appropriate reading API.
- Use nextLine() for line-based text.
- Use next() for token-based reading.
- Process large files incrementally.
- Use BufferedReader for efficient line-oriented reading of large text files.
- Validate the file path when appropriate.



# Industry Perspective

File reading is fundamental to many Java applications.



Developers commonly read:

- Configuration files.
- CSV files.
- Log files.
- Reports.
- Imported datasets.
- Text documents.



For simple files, Scanner can be convenient.



For efficient line-based processing, BufferedReader is generally more appropriate.



For modern file operations, Java NIO provides the Files API.



# Interview Tip

## Q: What is the difference between Scanner and FileReader?

### Answer:

Scanner provides convenient token- and line-based reading and can also parse primitive data types.



FileReader is a character stream designed for reading text characters from a file.



## Q: What does FileReader.read() return at the end of a file?

### Answer:

It returns -1 when the end of the file is reached.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain file reading in Java.
- Read files using Scanner.
- Use next() and nextLine().
- Read character data using FileReader.
- Understand the read() method.
- Handle FileNotFoundException.
- Handle IOException.
- Use Try-with-Resources.
- Read multiple lines and numeric data.
- Understand basic approaches for processing large files.
- Choose an appropriate file-reading API.



File reading allows Java applications to retrieve stored information and process it.



In the next lesson, you will learn how to write data into files using FileWriter.



# Next Lesson

## Lesson 5 — Writing Files

You will learn:

- Writing data to files.
- FileWriter.
- Writing characters.
- Writing strings.
- Writing multiple lines.
- Overwriting existing content.
- Handling IOException.
- Try-with-Resources.
- Practical programs.
- Real-world applications.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson4;