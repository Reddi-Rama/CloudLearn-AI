const lesson14 = {
  id: "lesson14",
  title: "File Management System",

  content: `
Introduction

In this lesson, we will combine the file-handling concepts learned
throughout the module to build a practical File Management System.

The project provides a menu-driven interface for managing files and
directories.

The File Management System will combine:

File creation
File reading
File writing
File appending
Directory creation
Directory listing
File copying
File moving
File deletion
File checking
Path handling
Java NIO
Exception handling

---

1. Purpose of the File Management System

A file management system allows a Java program to perform common
operations on files and directories.

The application can provide options such as:

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

This creates a practical application using the concepts learned in
the previous lessons.

---

2. File Creation

The application can create a new file.

Using the File class:

File file = new File("data.txt");

if (file.createNewFile())
{
    System.out.println("File created.");
}

The File object represents the pathname, while createNewFile()
actually attempts to create the physical file.

---

3. Writing to a File

The application can write information into a file.

Example:

FileWriter writer = new FileWriter("data.txt");

writer.write("Hello Java");

writer.close();

This stores text in the file.

For reliable resource management, Try-with-Resources can be used:

try (FileWriter writer = new FileWriter("data.txt"))
{
    writer.write("Hello Java");
}

Java automatically closes the resource when the try block ends.

---

4. Reading a File

The application should also be able to display the contents of a
file.

Example:

try (BufferedReader reader =
        new BufferedReader(new FileReader("data.txt")))
{
    String line;

    while ((line = reader.readLine()) != null)
    {
        System.out.println(line);
    }
}

The file is read line by line.

---

5. Appending Data

Appending allows new information to be added without replacing the
existing contents.

Example:

try (FileWriter writer =
        new FileWriter("data.txt", true))
{
    writer.write("New information\\n");
}

The second argument true enables append mode.

---

6. Creating a Directory

The application can create directories for organizing files.

Using File:

File directory = new File("documents");

if (directory.mkdir())
{
    System.out.println("Directory created.");
}

For creating multiple directory levels, mkdirs() can be used.

Example:

File directory =
        new File("documents/java/lessons");

directory.mkdirs();

---

7. Listing Directory Contents

The application can display the contents of a directory.

Example:

File directory = new File("documents");

String[] files = directory.list();

if (files != null)
{
    for (String name : files)
    {
        System.out.println(name);
    }
}

The list() method returns the names of files and directories.

The listFiles() method can be used when File objects are required.

---

8. Checking a File

The application can check whether a file exists.

Example:

File file = new File("data.txt");

if (file.exists())
{
    System.out.println("File exists.");
}
else
{
    System.out.println("File does not exist.");
}

The File class can also provide information such as:

File name

Path

Absolute path

File size

Read permission

Write permission

Directory status

---

9. Copying a File

Java NIO provides convenient operations for copying files.

Example:

Path source = Path.of("data.txt");
Path destination = Path.of("backup.txt");

Files.copy(
    source,
    destination
);

The source file is copied to the destination.

---

10. Moving a File

A file can also be moved to another location.

Example:

Path source = Path.of("data.txt");
Path destination = Path.of("documents/data.txt");

Files.move(
    source,
    destination
);

This moves the file from the source location to the destination.

---

11. Deleting a File

The application can delete a file using Java NIO.

Example:

Path path = Path.of("data.txt");

Files.delete(path);

The file is removed from the file system.

The program should handle exceptions because the operation can fail
if the file does not exist or cannot be deleted.

---

12. Checking Files Using Java NIO

Java NIO provides useful methods for checking paths.

Example:

Path path = Path.of("data.txt");

if (Files.exists(path))
{
    System.out.println("File exists.");
}

Other useful checks include:

Files.isRegularFile(path)

Files.isDirectory(path)

Files.isReadable(path)

Files.isWritable(path)

These methods help the application determine the state of a path.

---

13. Exception Handling

File operations can fail.

Possible problems include:

File does not exist

Permission denied

Invalid path

Directory does not exist

File cannot be opened

File cannot be copied

File cannot be moved

File cannot be deleted

These operations commonly require handling IOException.

Example:

try
{
    Files.copy(source, destination);
}
catch (IOException e)
{
    System.out.println("File operation failed.");
}

Exception handling prevents the program from terminating
unexpectedly when a file operation fails.

---

14. Menu-Driven Application

The File Management System can use a menu-driven approach.

Example:

===== FILE MANAGEMENT SYSTEM =====

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

The user selects an operation.

The program performs the selected file operation.

The menu can continue to appear until the user chooses Exit.

---

15. Concepts Used in the Project

The project combines the major concepts learned throughout the
module:

File

FileReader

FileWriter

BufferedReader

BufferedWriter

FileInputStream

FileOutputStream

Serializable

ObjectInputStream

ObjectOutputStream

Path

Paths

Files

Exception handling

Try-with-Resources

File and directory operations

---

Project Flow

User
    ↓
Menu
    ↓
Select Operation
    ↓
File / Directory Operation
    ↓
Handle Exception
    ↓
Display Result
    ↓
Return to Menu

---

Lesson Summary

The File Management System is a practical application that combines
the major concepts learned throughout the module.

The system supports:

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

The project helps demonstrate how individual Java I/O concepts work
together in a complete application.
`,

  summary:
    "Build a practical menu-driven File Management System using Java I/O, Java NIO, file and directory operations, and exception handling.",

  keyPoints: [
    "Create, read, write, and append files.",
    "Create and list directories.",
    "Copy, move, and delete files.",
    "Check files and paths.",
    "Use Java NIO for modern file-system operations.",
    "Handle file-related exceptions.",
    "Use Try-with-Resources for safe resource management.",
    "Combine the concepts into a menu-driven File Management System."
  ],
};

export default lesson14;