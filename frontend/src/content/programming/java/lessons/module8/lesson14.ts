const lesson14 = {

id: "lesson14",

title: "File Management System Project",

content: `

# File Management System Project

## Project Overview

You have learned the major concepts of Java file handling.



Now it is time to combine them into one practical application.



In this project, you will build a:

File Management System



The application will allow you to perform common file and directory operations from a menu-driven Java program.



# Project Objectives

The application should allow you to:

- Create files.
- Write data.
- Read data.
- Append data.
- Create directories.
- List directory contents.
- Copy files.
- Move files.
- Delete files.
- Check whether a file exists.
- Handle file-related exceptions.



The project will primarily use Java NIO because it provides a modern API for file-system operations.



# Project Structure

The application can provide the following menu:

================================

      FILE MANAGEMENT SYSTEM

================================

1. Create File
2. Write File
3. Read File
4. Append File
5. Create Directory
6. List Directory
7. Copy File
8. Move File
9. Delete File
10. Check File
11. Exit

Enter your choice:



# Technologies Used

Java

Java NIO

Path

Files

StandardCopyOption

IOException

Scanner



The project demonstrates concepts from the entire module.



# Step 1 — Import Required Classes

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

import java.util.Scanner;
\`\`\`



# Step 2 — Create the Main Class

\`\`\`java
public class FileManagementSystem {

    public static void main(String[] args) {

        Scanner scanner =
                new Scanner(System.in);

        // Application logic

        scanner.close();

    }

}
\`\`\`



# Step 3 — Display the Menu

Create a loop so that the application continues running until the user chooses Exit.

\`\`\`java
while (true) {

    System.out.println();
    System.out.println(
            "================================");

    System.out.println(
            "      FILE MANAGEMENT SYSTEM");

    System.out.println(
            "================================");

    System.out.println(
            "1. Create File");

    System.out.println(
            "2. Write File");

    System.out.println(
            "3. Read File");

    System.out.println(
            "4. Append File");

    System.out.println(
            "5. Create Directory");

    System.out.println(
            "6. List Directory");

    System.out.println(
            "7. Copy File");

    System.out.println(
            "8. Move File");

    System.out.println(
            "9. Delete File");

    System.out.println(
            "10. Check File");

    System.out.println(
            "11. Exit");

    System.out.print(
            "Enter your choice: ");

    int choice =
            scanner.nextInt();

    scanner.nextLine();

    // Process choice

}
\`\`\`



# Step 4 — Create a File

Use:

\`\`\`java
Files.createFile(path);
\`\`\`



Example:

\`\`\`java
System.out.print(
        "Enter file name: ");

String fileName =
        scanner.nextLine();

Path path =
        Path.of(fileName);

try {

    if (Files.notExists(path)) {

        Files.createFile(path);

        System.out.println(
                "File created successfully.");

    } else {

        System.out.println(
                "File already exists.");

    }

}

catch (IOException e) {

    System.out.println(
            "Unable to create file.");

}
\`\`\`



# Step 5 — Write to a File

Use:

\`\`\`java
Files.writeString();
\`\`\`



Example:

\`\`\`java
System.out.print(
        "Enter file name: ");

String fileName =
        scanner.nextLine();

System.out.print(
        "Enter content: ");

String content =
        scanner.nextLine();

Path path =
        Path.of(fileName);

try {

    Files.writeString(
            path,
            content);

    System.out.println(
            "Data written successfully.");

}

catch (IOException e) {

    System.out.println(
            "Unable to write file.");

}
\`\`\`



Remember:

Files.writeString()

↓

Existing content can be replaced



# Step 6 — Read a File

Use:

\`\`\`java
Files.readString();
\`\`\`



Example:

\`\`\`java
System.out.print(
        "Enter file name: ");

String fileName =
        scanner.nextLine();

Path path =
        Path.of(fileName);

try {

    String content =
            Files.readString(path);

    System.out.println();
    System.out.println(
            "----- FILE CONTENT -----");

    System.out.println(content);

}

catch (IOException e) {

    System.out.println(
            "Unable to read file.");

}
\`\`\`



# Step 7 — Append Data

Use:

\`\`\`java
StandardOpenOption.APPEND
\`\`\`



Example:

\`\`\`java
import static java.nio.file.StandardOpenOption.APPEND;
\`\`\`



Then:

\`\`\`java
System.out.print(
        "Enter file name: ");

String fileName =
        scanner.nextLine();

System.out.print(
        "Enter content: ");

String content =
        scanner.nextLine();

Path path =
        Path.of(fileName);

try {

    Files.writeString(
            path,
            System.lineSeparator()
            + content,
            APPEND);

    System.out.println(
            "Data appended successfully.");

}

catch (IOException e) {

    System.out.println(
            "Unable to append data.");

}
\`\`\`



# Step 8 — Create a Directory

Use:

\`\`\`java
Files.createDirectories();
\`\`\`



Example:

\`\`\`java
System.out.print(
        "Enter directory path: ");

String directoryName =
        scanner.nextLine();

Path path =
        Path.of(directoryName);

try {

    Files.createDirectories(path);

    System.out.println(
            "Directory created successfully.");

}

catch (IOException e) {

    System.out.println(
            "Unable to create directory.");

}
\`\`\`



createDirectories() is useful because it can create missing parent directories.



# Step 9 — List Directory Contents

Use:

\`\`\`java
Files.list();
\`\`\`



Example:

\`\`\`java
System.out.print(
        "Enter directory path: ");

String directoryName =
        scanner.nextLine();

Path path =
        Path.of(directoryName);

try (var entries =
        Files.list(path)) {

    System.out.println(
            "----- DIRECTORY CONTENTS -----");

    entries.forEach(
            entry ->
                    System.out.println(entry));

}

catch (IOException e) {

    System.out.println(
            "Unable to list directory.");

}
\`\`\`



# Step 10 — Copy a File

Use:

\`\`\`java
Files.copy();
\`\`\`



Example:

\`\`\`java
System.out.print(
        "Enter source file: ");

String sourceName =
        scanner.nextLine();

System.out.print(
        "Enter destination file: ");

String destinationName =
        scanner.nextLine();

Path source =
        Path.of(sourceName);

Path destination =
        Path.of(destinationName);

try {

    Files.copy(
            source,
            destination,
            REPLACE_EXISTING);

    System.out.println(
            "File copied successfully.");

}

catch (IOException e) {

    System.out.println(
            "Unable to copy file.");

}
\`\`\`



# Step 11 — Move a File

Use:

\`\`\`java
Files.move();
\`\`\`



Example:

\`\`\`java
System.out.print(
        "Enter source path: ");

String sourceName =
        scanner.nextLine();

System.out.print(
        "Enter destination path: ");

String destinationName =
        scanner.nextLine();

Path source =
        Path.of(sourceName);

Path destination =
        Path.of(destinationName);

try {

    Files.move(
            source,
            destination,
            REPLACE_EXISTING);

    System.out.println(
            "File moved successfully.");

}

catch (IOException e) {

    System.out.println(
            "Unable to move file.");

}
\`\`\`



Moving can also be used for renaming when the destination is in the same directory.



# Step 12 — Delete a File

Use:

\`\`\`java
Files.deleteIfExists();
\`\`\`



Example:

\`\`\`java
System.out.print(
        "Enter file name: ");

String fileName =
        scanner.nextLine();

Path path =
        Path.of(fileName);

try {

    if (Files.deleteIfExists(path)) {

        System.out.println(
                "File deleted successfully.");

    } else {

        System.out.println(
                "File does not exist.");

    }

}

catch (IOException e) {

    System.out.println(
            "Unable to delete file.");

}
\`\`\`



# Step 13 — Check a File

The application can check:

Files.exists()

Files.isRegularFile()

Files.isDirectory()



Example:

\`\`\`java
System.out.print(
        "Enter path: ");

String name =
        scanner.nextLine();

Path path =
        Path.of(name);

if (!Files.exists(path)) {

    System.out.println(
            "Path does not exist.");

} else if (Files.isRegularFile(path)) {

    System.out.println(
            "The path is a file.");

} else if (Files.isDirectory(path)) {

    System.out.println(
            "The path is a directory.");

}
\`\`\`



# Complete Project

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Scanner;

import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;
import static java.nio.file.StandardOpenOption.APPEND;

public class FileManagementSystem {

    public static void main(String[] args) {

        Scanner scanner =
                new Scanner(System.in);

        while (true) {

            System.out.println();
            System.out.println(
                    "================================");

            System.out.println(
                    "      FILE MANAGEMENT SYSTEM");

            System.out.println(
                    "================================");

            System.out.println(
                    "1. Create File");

            System.out.println(
                    "2. Write File");

            System.out.println(
                    "3. Read File");

            System.out.println(
                    "4. Append File");

            System.out.println(
                    "5. Create Directory");

            System.out.println(
                    "6. List Directory");

            System.out.println(
                    "7. Copy File");

            System.out.println(
                    "8. Move File");

            System.out.println(
                    "9. Delete File");

            System.out.println(
                    "10. Check File");

            System.out.println(
                    "11. Exit");

            System.out.print(
                    "Enter your choice: ");

            int choice =
                    scanner.nextInt();

            scanner.nextLine();

            try {

                switch (choice) {

                    case 1:

                        System.out.print(
                                "Enter file name: ");

                        Path createPath =
                                Path.of(
                                        scanner.nextLine());

                        if (Files.notExists(
                                createPath)) {

                            Files.createFile(
                                    createPath);

                            System.out.println(
                                    "File created.");

                        } else {

                            System.out.println(
                                    "File already exists.");

                        }

                        break;


                    case 2:

                        System.out.print(
                                "Enter file name: ");

                        Path writePath =
                                Path.of(
                                        scanner.nextLine());

                        System.out.print(
                                "Enter content: ");

                        String content =
                                scanner.nextLine();

                        Files.writeString(
                                writePath,
                                content);

                        System.out.println(
                                "Data written.");

                        break;


                    case 3:

                        System.out.print(
                                "Enter file name: ");

                        Path readPath =
                                Path.of(
                                        scanner.nextLine());

                        String data =
                                Files.readString(
                                        readPath);

                        System.out.println();
                        System.out.println(
                                "----- FILE CONTENT -----");

                        System.out.println(data);

                        break;


                    case 4:

                        System.out.print(
                                "Enter file name: ");

                        Path appendPath =
                                Path.of(
                                        scanner.nextLine());

                        System.out.print(
                                "Enter content: ");

                        String appendData =
                                scanner.nextLine();

                        Files.writeString(
                                appendPath,
                                System.lineSeparator()
                                + appendData,
                                APPEND);

                        System.out.println(
                                "Data appended.");

                        break;


                    case 5:

                        System.out.print(
                                "Enter directory path: ");

                        Path directory =
                                Path.of(
                                        scanner.nextLine());

                        Files.createDirectories(
                                directory);

                        System.out.println(
                                "Directory created.");

                        break;


                    case 6:

                        System.out.print(
                                "Enter directory path: ");

                        Path directoryPath =
                                Path.of(
                                        scanner.nextLine());

                        try (var entries =
                                Files.list(
                                        directoryPath)) {

                            System.out.println(
                                    "----- CONTENTS -----");

                            entries.forEach(
                                    System.out::println);
                        }

                        break;


                    case 7:

                        System.out.print(
                                "Enter source file: ");

                        Path source =
                                Path.of(
                                        scanner.nextLine());

                        System.out.print(
                                "Enter destination: ");

                        Path destination =
                                Path.of(
                                        scanner.nextLine());

                        Files.copy(
                                source,
                                destination,
                                REPLACE_EXISTING);

                        System.out.println(
                                "File copied.");

                        break;


                    case 8:

                        System.out.print(
                                "Enter source path: ");

                        Path moveSource =
                                Path.of(
                                        scanner.nextLine());

                        System.out.print(
                                "Enter destination path: ");

                        Path moveDestination =
                                Path.of(
                                        scanner.nextLine());

                        Files.move(
                                moveSource,
                                moveDestination,
                                REPLACE_EXISTING);

                        System.out.println(
                                "File moved.");

                        break;


                    case 9:

                        System.out.print(
                                "Enter file path: ");

                        Path deletePath =
                                Path.of(
                                        scanner.nextLine());

                        if (Files.deleteIfExists(
                                deletePath)) {

                            System.out.println(
                                    "Deleted successfully.");

                        } else {

                            System.out.println(
                                    "Path does not exist.");

                        }

                        break;


                    case 10:

                        System.out.print(
                                "Enter path: ");

                        Path checkPath =
                                Path.of(
                                        scanner.nextLine());

                        if (!Files.exists(
                                checkPath)) {

                            System.out.println(
                                    "Path does not exist.");

                        } else if (
                                Files.isRegularFile(
                                        checkPath)) {

                            System.out.println(
                                    "It is a file.");

                        } else if (
                                Files.isDirectory(
                                        checkPath)) {

                            System.out.println(
                                    "It is a directory.");
                        }

                        break;


                    case 11:

                        System.out.println(
                                "Exiting File Management System.");

                        scanner.close();

                        return;


                    default:

                        System.out.println(
                                "Invalid choice.");

                }

            }

            catch (IOException e) {

                System.out.println(
                        "File operation failed.");

            }

        }

    }

}
\`\`\`



# Project Flow

Start

↓

Display Menu

↓

Choose Operation

↓

Perform File Operation

↓

Handle Exception

↓

Return to Menu

↓

Exit?

├── No → Display Menu

└── Yes

      ↓

     End



# Concepts Used

This project combines almost everything you learned in Module 8.



File Handling

│

├── Create

├── Read

├── Write

├── Append

├── Directory Creation

├── Directory Listing

├── Copy

├── Move

├── Delete

├── File Checking

├── Path

├── Files

└── Exception Handling



# Possible Improvements

After completing the basic project, you can extend it with:



## Search Files

Search for files by name.



## File Information

Display:

- File size.
- Last modified time.
- Absolute path.
- File type.



## Rename

Add a dedicated rename operation.



## Recursive Directory Listing

Display an entire directory tree.



## File Count

Display the number of files and directories.



## Text Search

Search for a particular word inside a text file.



## File Statistics

Calculate:

- Number of lines.
- Number of words.
- Number of characters.



# Mini Challenge

Extend the project with:

12. Rename File

13. File Information

14. Search File

15. Count Files

16. Exit



Try implementing these features yourself before looking for a solution.



# Real-World Skills Practiced

This project teaches practical skills used in:

- File management tools.
- Backup applications.
- Document management.
- Log management.
- Data processing.
- Report generation.
- Desktop utilities.



# Best Practices

- Use Path instead of manually concatenating path strings.
- Use Files for modern file operations.
- Handle IOException.
- Use Try-with-Resources for streams.
- Check whether paths exist before destructive operations.
- Be careful with REPLACE_EXISTING.
- Avoid unsafe recursive deletion.
- Validate paths if they come from external input.
- Keep the application logic organized as the project grows.



# Interview Tip

## Q: Why is Path used in this project instead of directly using strings for file locations?

### Answer:

Path provides a structured representation of a file-system location and provides useful methods such as resolve(), getFileName(), getParent(), and toAbsolutePath().



## Q: Why is Files useful?

### Answer:

Files provides convenient static methods for creating, reading, writing, copying, moving, deleting, and inspecting files and directories.



# Key Takeaways

After completing this project, you should be able to:

- Build a menu-driven file-management application.
- Create files programmatically.
- Read and write text files.
- Append data.
- Create directories.
- List directory contents.
- Copy files.
- Move files.
- Delete files.
- Check file and directory types.
- Use Path and Files.
- Handle file-related exceptions.
- Combine multiple file-handling concepts into one application.



# Project Completion

You have now completed the practical project for Module 8 — File Handling & Java I/O.



The next lesson will consolidate the complete module through revision and assessment.



# Next Lesson

## Lesson 15 — Module 8 Review & Assessment

You will review:

- File Handling.
- File Class.
- Reading Files.
- Writing Files.
- Appending Data.
- Buffered I/O.
- Byte Streams.
- Serialization.
- Deserialization.
- Directories.
- Java NIO.
- Important Exceptions.
- Try-with-Resources.
- Text vs Binary.
- Traditional I/O vs NIO.
- Assessment Questions.
- Practical Questions.
- Scenario-Based Questions.
- Final Module Challenge.

`

};

export default lesson14;