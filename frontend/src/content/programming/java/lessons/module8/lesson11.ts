const lesson11 = {

id: "lesson11",

title: "Directories",

content: `

# Directories

## Introduction

Until now, you have mainly worked with individual files.



But real applications rarely store every file in one location.



For example:

CloudLearn

│

├── courses

├── reports

├── certificates

├── users

└── logs



These folders are called directories.



Java provides APIs for creating, checking, listing, renaming, and deleting directories.



# What is a Directory?

A directory is a file-system structure used to organize files and other directories.



It is commonly called a folder.



For example:

Project

│

├── data.txt

├── report.txt

└── images

    ├── image1.jpg

    └── image2.jpg



Here:

Project

images



are directories.



And:

data.txt

report.txt

image1.jpg

image2.jpg



are files.



# Directory Structure

Directories can contain:

- Files.
- Subdirectories.



This creates a hierarchical structure.



Root

│

├── Folder A

│   ├── File 1

│   └── File 2

│

└── Folder B

    ├── Folder C

    │   └── File 3

    └── File 4



# Creating a Directory

The File class provides:

mkdir()



to create a directory.



Example:

\`\`\`java
File directory =
        new File("documents");

directory.mkdir();
\`\`\`



# mkdir()

The mkdir() method creates a single directory.



It returns:

true



if the directory was created successfully.



It returns:

false



if the directory could not be created.



# Example 1: Creating a Directory

\`\`\`java
import java.io.File;

public class DirectoryExample1 {

    public static void main(String[] args) {

        File directory =
                new File("documents");

        if (directory.mkdir()) {

            System.out.println(
                    "Directory created.");

        } else {

            System.out.println(
                    "Unable to create directory.");

        }

    }

}
\`\`\`



# Checking Whether a Directory Exists

Before creating a directory, you can check:

\`\`\`java
directory.exists()
\`\`\`



and:

\`\`\`java
directory.isDirectory()
\`\`\`



Example:

\`\`\`java
if (directory.exists()
        && directory.isDirectory()) {

    System.out.println(
            "Directory already exists.");

}
\`\`\`



# Example 2: Safe Directory Creation

\`\`\`java
import java.io.File;

public class DirectoryExample2 {

    public static void main(String[] args) {

        File directory =
                new File("documents");

        if (directory.exists()) {

            System.out.println(
                    "Directory already exists.");

        } else if (directory.mkdir()) {

            System.out.println(
                    "Directory created.");

        } else {

            System.out.println(
                    "Directory creation failed.");

        }

    }

}
\`\`\`



# Creating Nested Directories

Suppose you want:

project

└── data

    └── reports

        └── 2026



The parent directories may not exist.



Using:

mkdir()



for the deepest directory alone may fail if its parent directories are missing.



For nested directories, use:

mkdirs()



# mkdirs()

mkdirs() creates the required directory hierarchy.



Example:

\`\`\`java
File directory =
        new File(
                "data/reports/2026");

directory.mkdirs();
\`\`\`



It can create:

data

└── reports

    └── 2026



# Example 3: Creating Nested Directories

\`\`\`java
import java.io.File;

public class DirectoryExample3 {

    public static void main(String[] args) {

        File directory =
                new File(
                        "data/reports/2026");

        if (directory.mkdirs()) {

            System.out.println(
                    "Directories created.");

        } else {

            System.out.println(
                    "Directories already exist "
                    + "or creation failed.");

        }

    }

}
\`\`\`



# mkdir() vs mkdirs()

| mkdir() | mkdirs() |
|---|---|
| Creates one directory | Creates directory hierarchy |
| Parent must generally exist | Can create missing parents |
| Simple directory creation | Nested directory creation |



Example:

mkdir()



project

└── data



For:

project/data/reports/2026



if parent directories are missing, mkdirs() is more appropriate.



# Listing Directory Contents

The list() method returns the names of entries inside a directory.



Example:

\`\`\`java
File directory =
        new File("documents");

String[] files =
        directory.list();
\`\`\`



# Example 4: List Directory Contents

\`\`\`java
import java.io.File;

public class DirectoryExample4 {

    public static void main(String[] args) {

        File directory =
                new File("documents");

        String[] entries =
                directory.list();

        if (entries != null) {

            for (String entry : entries) {

                System.out.println(entry);

            }

        }

    }

}
\`\`\`



Possible Output:

\`\`\`text
report.txt
data.txt
images
notes.txt
\`\`\`



# Listing File Objects

The listFiles() method returns an array of File objects.



Example:

\`\`\`java
File[] entries =
        directory.listFiles();
\`\`\`



This is useful when you need more information about each entry.



# Example 5: File or Directory?

\`\`\`java
import java.io.File;

public class DirectoryExample5 {

    public static void main(String[] args) {

        File directory =
                new File("documents");

        File[] entries =
                directory.listFiles();

        if (entries != null) {

            for (File entry : entries) {

                if (entry.isFile()) {

                    System.out.println(
                            "File: "
                            + entry.getName());

                } else if (entry.isDirectory()) {

                    System.out.println(
                            "Directory: "
                            + entry.getName());

                }

            }

        }

    }

}
\`\`\`



Possible Output:

\`\`\`text
File: report.txt
File: data.txt
Directory: images
File: notes.txt
\`\`\`



# Getting the Directory Path

The same methods from the File class can be used for directories.



\`\`\`java
File directory =
        new File("documents");

System.out.println(
        directory.getPath());

System.out.println(
        directory.getAbsolutePath());
\`\`\`



# Checking Whether a Path Is a Directory

Use:

isDirectory()



Example:

\`\`\`java
if (directory.isDirectory()) {

    System.out.println(
            "This is a directory.");

}
\`\`\`



# Renaming a Directory

The renameTo() method can also rename directories.



Example:

\`\`\`java
File oldDirectory =
        new File("oldFolder");

File newDirectory =
        new File("newFolder");

if (oldDirectory.renameTo(
        newDirectory)) {

    System.out.println(
            "Directory renamed.");

}
\`\`\`



# Moving a Directory

Depending on the operating system and file-system conditions, renameTo() can also be used for certain move operations.



However, for modern Java applications, Java NIO's Files.move() provides a more expressive and controllable API and will be covered later in this module.



# Deleting a Directory

The delete() method can remove an empty directory.



Example:

\`\`\`java
File directory =
        new File("documents");

if (directory.delete()) {

    System.out.println(
            "Directory deleted.");

}
\`\`\`



# Important: Non-Empty Directories

Suppose:

documents

├── data.txt

└── report.txt



Calling:

\`\`\`java
directory.delete();
\`\`\`



will not recursively delete the directory and its contents.



The directory must generally be empty before File.delete() can remove it.



# Recursive Directory Deletion

If you need to delete a directory and everything inside it, you must process its contents first.



Conceptually:

Directory

↓

List Contents

↓

For Each Entry

↓

Is Directory?

┌──────┴──────┐

Yes            No

↓              ↓

Delete Its     Delete

Contents       File

↓

Delete Directory



# Example 6: Recursive Deletion

\`\`\`java
import java.io.File;

public class DirectoryDeleteExample {

    public static void deleteDirectory(
            File directory) {

        File[] entries =
                directory.listFiles();

        if (entries != null) {

            for (File entry : entries) {

                if (entry.isDirectory()) {

                    deleteDirectory(entry);

                } else {

                    entry.delete();

                }

            }

        }

        directory.delete();

    }

    public static void main(String[] args) {

        File directory =
                new File("temporary");

        deleteDirectory(directory);

        System.out.println(
                "Directory removed.");

    }

}
\`\`\`



This demonstrates the recursive concept.



In production applications, deletion should be performed carefully, with appropriate checks and error handling.



# Directory Information

You can display useful information about a directory:

\`\`\`java
File directory =
        new File("documents");

System.out.println(
        "Name: "
        + directory.getName());

System.out.println(
        "Path: "
        + directory.getPath());

System.out.println(
        "Absolute Path: "
        + directory.getAbsolutePath());

System.out.println(
        "Exists: "
        + directory.exists());

System.out.println(
        "Is Directory: "
        + directory.isDirectory());
\`\`\`



# Creating Files Inside Directories

Suppose:

documents



already exists.



You can create:

documents/report.txt



using:

\`\`\`java
File directory =
        new File("documents");

File file =
        new File(
                directory,
                "report.txt");
\`\`\`



Then:

\`\`\`java
file.createNewFile();
\`\`\`



This creates:

documents

└── report.txt



# Example 7: Directory + File

\`\`\`java
import java.io.File;
import java.io.IOException;

public class DirectoryExample6 {

    public static void main(String[] args) {

        File directory =
                new File("reports");

        if (!directory.exists()) {

            directory.mkdirs();

        }

        File file =
                new File(
                        directory,
                        "report.txt");

        try {

            if (file.createNewFile()) {

                System.out.println(
                        "Report file created.");

            } else {

                System.out.println(
                        "Report already exists.");

            }

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to create report.");

        }

    }

}
\`\`\`



# Directory Tree

A file-management application can represent a directory structure as:

File System

│

├── documents

│   ├── report.txt

│   └── notes.txt

│

├── images

│   ├── photo1.jpg

│   └── photo2.jpg

│

└── backups

    └── data.zip



Java can inspect this structure using File and later using the more powerful Java NIO APIs.



# Real-World Applications

## Document Management

Application

↓

Create User Folder

↓

Store Documents



## Report Generation

Reports

│

├── 2024

├── 2025

└── 2026



The application can automatically create the appropriate directories.



## Backup Systems

Backups

│

├── Daily

├── Weekly

└── Monthly



## Application Logs

logs

│

├── application.log

├── error.log

└── audit.log



# Common Mistakes

## 1. Using mkdir() for Deep Paths

If parent directories do not exist:

\`\`\`java
directory.mkdir();
\`\`\`



may fail.



Use:

\`\`\`java
directory.mkdirs();
\`\`\`



when creating a directory hierarchy.



## 2. Assuming delete() Is Recursive

It is not.



A non-empty directory cannot simply be removed recursively with one call to File.delete().



## 3. Not Checking list() Result

list() can return null, for example when the path does not represent an accessible directory.



Check the result before iterating.



## 4. Treating Every Entry as a File

A directory can contain both files and directories.



Use:

\`\`\`java
entry.isFile()
\`\`\`



and:

\`\`\`java
entry.isDirectory()
\`\`\`



when necessary.



# Best Practices

- Check whether directories already exist.
- Use mkdirs() for nested directory structures.
- Check return values of file-system operations.
- Distinguish files from directories.
- Handle failures gracefully.
- Be extremely careful with recursive deletion.
- Avoid hard-coded environment-specific paths.
- Prefer Java NIO for advanced production file-system operations.
- Do not delete user data without explicit and appropriate confirmation in real applications.



# Industry Perspective

Directories are fundamental to file organization.



Real applications use directory structures for:

- User uploads.
- Reports.
- Logs.
- Backups.
- Configuration.
- Temporary files.
- Generated documents.
- Media storage.



For basic directory operations, the File class is useful.



For modern production applications, Java NIO provides more powerful APIs for:

- Path handling.
- Directory traversal.
- File copying.
- Moving.
- Deleting.
- File attributes.



You will learn Java NIO in Lesson 12.



# Interview Tip

## Q: What is the difference between mkdir() and mkdirs()?

### Answer:

mkdir() creates a single directory, while mkdirs() can create the required parent directories as well as the final directory.



## Q: Can File.delete() delete a non-empty directory recursively?

### Answer:

No. File.delete() does not recursively delete the contents of a directory. The contents must be handled separately before deleting the directory.



## Q: What is the difference between list() and listFiles()?

### Answer:

list() returns the names of entries as strings, while listFiles() returns File objects representing those entries.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain what a directory is.
- Create directories using mkdir().
- Create nested directories using mkdirs().
- Check whether a directory exists.
- Check whether a path is a directory.
- List directory contents.
- Use listFiles().
- Distinguish files from directories.
- Rename directories.
- Delete empty directories.
- Understand recursive directory deletion.
- Create files inside directories.
- Understand directory organization in real applications.
- Recognize when Java NIO is more appropriate.



You have now learned how to work with both files and directories using the traditional File API.



# Next Lesson

## Lesson 12 — Java NIO (Files & Paths)

You will learn:

- Introduction to Java NIO.
- Path.
- Paths.
- Files.
- Creating files with NIO.
- Reading files with NIO.
- Writing files with NIO.
- Copying files.
- Moving files.
- Deleting files.
- Checking file attributes.
- Directory operations.
- Files.readString().
- Files.writeString().
- NIO vs traditional I/O.
- Practical examples.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson11;