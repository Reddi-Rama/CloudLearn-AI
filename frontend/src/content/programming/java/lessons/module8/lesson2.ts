const lesson2 = {

id: "lesson2",

title: "File Class",

content: `

# File Class

## Introduction

In the previous lesson, you learned:

- What File Handling is.
- Why persistent storage is needed.
- Text and binary files.
- Java I/O.
- Input and Output.
- Streams.
- Byte Streams.
- Character Streams.
- Basic file operations.



Now we will work with one of the fundamental classes used in Java file handling:

File



The File class allows you to represent the path of a file or directory and perform operations such as:

- Checking whether a file exists.
- Getting file information.
- Creating files.
- Renaming files.
- Deleting files.
- Checking permissions.
- Working with directories.



# What is the File Class?

The File class belongs to:

java.io



It is represented as:

java.io.File



Simple definition:



The File class represents a file or directory pathname and provides methods for interacting with the file system.



# Importing File

Before using the class, import it:

\`\`\`java
import java.io.File;
\`\`\`



# Creating a File Object

Creating a File object does not automatically create a physical file.



It only creates an object representing a pathname.



Example:

\`\`\`java
File file = new File("data.txt");
\`\`\`



Here:

File Object

↓

"data.txt"

↓

Represents a Path



The actual file may or may not exist.



# Important Concept

This statement:

\`\`\`java
File file = new File("data.txt");
\`\`\`



does not create data.txt.



It only creates a File object.



To actually create the file, you can use:

\`\`\`java
file.createNewFile();
\`\`\`



This distinction is very important.



# Example 1: Creating a File Object

\`\`\`java
import java.io.File;

public class FileExample1 {

    public static void main(String[] args) {

        File file = new File("data.txt");

        System.out.println(
                "File object created.");

    }

}
\`\`\`



Output:

\`\`\`text
File object created.
\`\`\`



At this point, the File object exists, but the physical file may not exist.



# Checking Whether a File Exists

The exists() method checks whether the specified file or directory exists.



Syntax:

\`\`\`java
file.exists();
\`\`\`



It returns:

true



or:

false



# Example 2: exists()

\`\`\`java
import java.io.File;

public class FileExample2 {

    public static void main(String[] args) {

        File file = new File("data.txt");

        if (file.exists()) {

            System.out.println(
                    "File exists.");

        } else {

            System.out.println(
                    "File does not exist.");

        }

    }

}
\`\`\`



Possible Output:

\`\`\`text
File exists.
\`\`\`



or:

\`\`\`text
File does not exist.
\`\`\`



# Getting the File Name

The getName() method returns the name of the file or directory represented by the File object.



Example:

\`\`\`java
File file =
        new File("documents/data.txt");

System.out.println(file.getName());
\`\`\`



Output:

\`\`\`text
data.txt
\`\`\`



# Example 3: getName()

\`\`\`java
import java.io.File;

public class FileExample3 {

    public static void main(String[] args) {

        File file =
                new File("documents/data.txt");

        System.out.println(
                "File Name: "
                + file.getName());

    }

}
\`\`\`



Output:

\`\`\`text
File Name: data.txt
\`\`\`



# Getting the Path

The getPath() method returns the path used when the File object was created.



Example:

\`\`\`java
File file =
        new File("documents/data.txt");

System.out.println(file.getPath());
\`\`\`



Possible Output:

\`\`\`text
documents\\data.txt
\`\`\`



The exact separator can vary depending on the operating system.



# Getting the Absolute Path

The getAbsolutePath() method returns the complete absolute path.



Example:

\`\`\`java
File file =
        new File("data.txt");

System.out.println(
        file.getAbsolutePath());
\`\`\`



Possible Output:

\`\`\`text
C:\\Users\\User\\Project\\data.txt
\`\`\`



The exact path depends on where your program is running.



# Relative Path vs Absolute Path

## Relative Path

A relative path describes a location relative to the program's current working directory.



Example:

\`\`\`text
data.txt
\`\`\`



or:

\`\`\`text
files/data.txt
\`\`\`



## Absolute Path

An absolute path specifies the complete location.



Example:

\`\`\`text
C:\\Users\\User\\Project\\data.txt
\`\`\`



## Comparison

| Feature | Relative Path | Absolute Path |
|---|---|---|
| Location | Relative to working directory | Complete location |
| Length | Usually shorter | Usually longer |
| Portability | More portable | Can be environment-specific |
| Usage | Common in applications | Useful when exact location is required |



# Checking Whether It Is a File

The isFile() method determines whether the pathname represents an existing file.



Example:

\`\`\`java
File file =
        new File("data.txt");

if (file.isFile()) {

    System.out.println(
            "It is a file.");

}
\`\`\`



# Checking Whether It Is a Directory

The isDirectory() method checks whether the pathname represents an existing directory.



Example:

\`\`\`java
File file =
        new File("documents");

if (file.isDirectory()) {

    System.out.println(
            "It is a directory.");

}
\`\`\`



# Example 4: File or Directory?

\`\`\`java
import java.io.File;

public class FileExample4 {

    public static void main(String[] args) {

        File path =
                new File("documents");

        if (path.isFile()) {

            System.out.println(
                    "It is a file.");

        } else if (path.isDirectory()) {

            System.out.println(
                    "It is a directory.");

        } else {

            System.out.println(
                    "Path does not exist.");

        }

    }

}
\`\`\`



# Getting File Size

The length() method returns the size of a file in bytes.



Example:

\`\`\`java
File file =
        new File("data.txt");

System.out.println(
        file.length());
\`\`\`



Possible Output:

\`\`\`text
125
\`\`\`



This means the file contains approximately 125 bytes of data.



For directories, the result of length() should not be treated as a meaningful directory size.



# Example 5: File Information

\`\`\`java
import java.io.File;

public class FileExample5 {

    public static void main(String[] args) {

        File file =
                new File("data.txt");

        if (file.exists()) {

            System.out.println(
                    "Name: "
                    + file.getName());

            System.out.println(
                    "Path: "
                    + file.getPath());

            System.out.println(
                    "Absolute Path: "
                    + file.getAbsolutePath());

            System.out.println(
                    "Size: "
                    + file.length()
                    + " bytes");

            System.out.println(
                    "Is File: "
                    + file.isFile());

            System.out.println(
                    "Is Directory: "
                    + file.isDirectory());

        }

    }

}
\`\`\`



# Checking Read Permission

The canRead() method checks whether the application can read the file.



Example:

\`\`\`java
if (file.canRead()) {

    System.out.println(
            "File can be read.");

}
\`\`\`



# Checking Write Permission

The canWrite() method checks whether the application can write to the file.



Example:

\`\`\`java
if (file.canWrite()) {

    System.out.println(
            "File can be written.");

}
\`\`\`



# Checking Execute Permission

The canExecute() method checks whether the application has execute permission for the specified path.



Example:

\`\`\`java
if (file.canExecute()) {

    System.out.println(
            "Execute permission available.");

}
\`\`\`



The exact behavior of file permissions depends on the operating system and file system.



# Example 6: Checking Permissions

\`\`\`java
import java.io.File;

public class FileExample6 {

    public static void main(String[] args) {

        File file =
                new File("data.txt");

        if (file.exists()) {

            System.out.println(
                    "Readable: "
                    + file.canRead());

            System.out.println(
                    "Writable: "
                    + file.canWrite());

            System.out.println(
                    "Executable: "
                    + file.canExecute());

        }

    }

}
\`\`\`



# Renaming a File

The renameTo() method can be used to rename or move a file.



Example:

\`\`\`java
File oldFile =
        new File("old.txt");

File newFile =
        new File("new.txt");

boolean result =
        oldFile.renameTo(newFile);
\`\`\`



The method returns:

true



if the operation succeeds.



Otherwise:

false



# Example 7: Renaming a File

\`\`\`java
import java.io.File;

public class FileExample7 {

    public static void main(String[] args) {

        File oldFile =
                new File("old.txt");

        File newFile =
                new File("new.txt");

        if (oldFile.renameTo(newFile)) {

            System.out.println(
                    "File renamed successfully.");

        } else {

            System.out.println(
                    "Unable to rename file.");

        }

    }

}
\`\`\`



# Deleting a File

The delete() method removes a file or an empty directory.



Example:

\`\`\`java
File file =
        new File("data.txt");

if (file.delete()) {

    System.out.println(
            "File deleted.");

}
\`\`\`



# Example 8: Deleting a File

\`\`\`java
import java.io.File;

public class FileExample8 {

    public static void main(String[] args) {

        File file =
                new File("data.txt");

        if (file.delete()) {

            System.out.println(
                    "File deleted successfully.");

        } else {

            System.out.println(
                    "Unable to delete file.");

        }

    }

}
\`\`\`



For a non-empty directory, delete() will not recursively remove its contents.



# Listing Directory Contents

The list() method returns the names of files and directories inside a directory.



Example:

\`\`\`java
File directory =
        new File("documents");

String[] files =
        directory.list();
\`\`\`



# Example 9: Listing Files

\`\`\`java
import java.io.File;

public class FileExample9 {

    public static void main(String[] args) {

        File directory =
                new File("documents");

        String[] files =
                directory.list();

        if (files != null) {

            for (String name : files) {

                System.out.println(name);

            }

        }

    }

}
\`\`\`



Possible Output:

\`\`\`text
notes.txt
report.txt
images
data.csv
\`\`\`



# Important File Class Methods

| Method | Purpose |
|---|---|
| exists() | Checks whether path exists |
| getName() | Returns file/directory name |
| getPath() | Returns pathname |
| getAbsolutePath() | Returns absolute pathname |
| isFile() | Checks whether it is a file |
| isDirectory() | Checks whether it is a directory |
| length() | Returns file size in bytes |
| canRead() | Checks read permission |
| canWrite() | Checks write permission |
| canExecute() | Checks execute permission |
| renameTo() | Renames or moves a path |
| delete() | Deletes a file or empty directory |
| list() | Lists directory contents |



# File Class Workflow

Create File Object

↓

Check Exists

↓

Identify File / Directory

↓

Get Information

↓

Read / Write / Rename / Delete

↓

Operation Completed



# Important Concept: File Class vs File Contents

The File class primarily provides information and operations related to paths and file-system entries.



It is not the main API for reading the actual contents of a text file.



For example:

\`\`\`java
File file =
        new File("data.txt");
\`\`\`



can tell you:

- Does it exist?
- What is its name?
- What is its path?
- How large is it?



To read the contents, you will use classes such as:

- FileReader.
- BufferedReader.
- Scanner.
- Files.



These will be covered in later lessons.



# Real-World Application

Suppose you are building a File Management System.



The File class can help you display:

\`\`\`text
File Management System

Name: report.txt
Type: File
Size: 2048 bytes
Path: documents/report.txt
Readable: true
Writable: true
\`\`\`



This is the foundation for the final File Management System project.



# Advantages of the File Class

- Simple API for file-system operations.
- Easy to check file properties.
- Supports both files and directories.
- Provides path information.
- Supports basic rename and delete operations.
- Useful for learning and basic file management.



# Limitations

The File class is useful for basic file-system operations, but modern Java applications often prefer Java NIO for more advanced operations.



For example:

File

↓

Basic File Operations



Path + Files

↓

Modern File Operations



You will learn Java NIO later in this module.



# Best Practices

- Check exists() before performing operations when appropriate.
- Check the return value of methods such as delete() and renameTo().
- Avoid hard-coded absolute paths when possible.
- Prefer portable path handling.
- Do not assume a path is a file; check isFile() or isDirectory().
- Do not use length() as a reliable way to determine directory size.
- Use Java NIO for more advanced file operations.



# Industry Perspective

The File class is an important foundation for understanding Java file handling.



Modern applications frequently use the Java NIO API for production file operations, but understanding File remains valuable because:

- Existing Java applications may use it.
- Many introductory Java programs use it.
- It provides a simple model for understanding paths.
- It helps you understand the transition from traditional I/O to NIO.



# Interview Tip

## Q: Does creating a File object create a physical file?

### Answer:

No. Creating a File object only creates an object representing a pathname. It does not create the physical file. To create a new physical file, methods such as createNewFile() can be used.



## Q: What is the difference between getPath() and getAbsolutePath()?

### Answer:

getPath() returns the pathname used to create the File object, while getAbsolutePath() returns the complete absolute pathname of that file or directory.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain the purpose of the File class.
- Create File objects.
- Understand that a File object does not automatically create a physical file.
- Check whether a file exists.
- Get file names and paths.
- Obtain absolute paths.
- Determine whether a path represents a file or directory.
- Get file size.
- Check read, write, and execute permissions.
- Rename files.
- Delete files and empty directories.
- List directory contents.
- Understand the difference between file-system information and file contents.
- Recognize when Java NIO is a better choice.



The File class provides the foundation for interacting with the file system in Java.



In the next lesson, you will move from examining files to actually creating, reading, writing, and modifying file contents.



# Next Lesson

## Lesson 3 — Creating Files

You will learn:

- How to create a physical file.
- createNewFile().
- Checking whether a file already exists.
- Relative and absolute paths.
- Handling IOException.
- Safe file creation.
- Practical programs.
- Real-world applications.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson2;