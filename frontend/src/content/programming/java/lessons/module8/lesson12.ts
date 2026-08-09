const lesson12 = {

id: "lesson12",

title: "Java NIO — Files & Paths",

content: `

# Java NIO — Files & Paths

## Introduction

In the previous lessons, you learned traditional Java file handling using classes such as:

- File.
- FileReader.
- FileWriter.
- BufferedReader.
- BufferedWriter.
- FileInputStream.
- FileOutputStream.



Java also provides a modern file-handling API called:

NIO



NIO stands for:

New I/O



Java NIO provides more powerful and convenient APIs for working with files and directories.



The most important classes are:

- Path.
- Paths.
- Files.



# Why Java NIO?

Traditional I/O:

File

↓

FileReader

↓

BufferedReader



Java NIO:

Path

↓

Files

↓

File Operation



NIO provides convenient methods for:

- Creating files.
- Creating directories.
- Reading files.
- Writing files.
- Copying files.
- Moving files.
- Deleting files.
- Checking file existence.
- Working with paths.
- Traversing directories.



# The Path Interface

Path represents the location of a file or directory.



Import:

\`\`\`java
import java.nio.file.Path;
\`\`\`



Example:

\`\`\`java
Path path =
        Path.of("data.txt");
\`\`\`



A Path does not itself read or write the file.



It represents where the file or directory is located.



# Creating a Path

Modern Java commonly uses:

\`\`\`java
Path path =
        Path.of("data.txt");
\`\`\`



You can also create paths using:

\`\`\`java
Paths.get("data.txt");
\`\`\`



from:

\`\`\`java
java.nio.file.Paths
\`\`\`



# Example 1: Working with a Path

\`\`\`java
import java.nio.file.Path;

public class PathExample {

    public static void main(String[] args) {

        Path path =
                Path.of("data.txt");

        System.out.println(
                "Path: " + path);

        System.out.println(
                "File Name: "
                + path.getFileName());

    }

}
\`\`\`



Output:

\`\`\`text
Path: data.txt
File Name: data.txt
\`\`\`



# Absolute and Relative Paths

A relative path is interpreted relative to the application's current working directory.



Example:

\`\`\`java
Path path =
        Path.of("data.txt");
\`\`\`



An absolute path specifies the complete location.



Example:

\`\`\`text
C:\\Projects\\CloudLearn\\data.txt
\`\`\`



You can obtain an absolute path using:

\`\`\`java
path.toAbsolutePath();
\`\`\`



# Path Methods

Some useful methods are:

- getFileName().
- getParent().
- getRoot().
- toAbsolutePath().
- normalize().
- resolve().



# getFileName()

Returns the final file or directory name.



Example:

\`\`\`java
Path path =
        Path.of("reports/data.txt");

System.out.println(
        path.getFileName());
\`\`\`



Output:

\`\`\`text
data.txt
\`\`\`



# getParent()

Returns the parent path.



Example:

\`\`\`java
Path path =
        Path.of("reports/data.txt");

System.out.println(
        path.getParent());
\`\`\`



Output:

\`\`\`text
reports
\`\`\`



# getRoot()

Returns the root component when the path has one.



For example, an absolute Windows path may have:

\`\`\`text
C:\\
\`\`\`

as its root.



# toAbsolutePath()

Example:

\`\`\`java
Path path =
        Path.of("data.txt");

System.out.println(
        path.toAbsolutePath());
\`\`\`



This displays the complete path based on the current working directory.



# normalize()

Normalization removes unnecessary path components such as:

.

..



Example:

\`\`\`java
Path path =
        Path.of(
                "reports/2026/../2025");

System.out.println(
        path.normalize());
\`\`\`



Conceptually:

\`\`\`text
reports/2026/../2025
            ↓
reports/2025
\`\`\`



# resolve()

resolve() combines paths.



Example:

\`\`\`java
Path directory =
        Path.of("reports");

Path file =
        directory.resolve(
                "report.txt");

System.out.println(file);
\`\`\`



Output:

\`\`\`text
reports/report.txt
\`\`\`



This is useful for building paths without manually concatenating path separators.



# The Files Class

The Files class provides static methods for performing file-system operations.



Import:

\`\`\`java
import java.nio.file.Files;
\`\`\`



Common operations include:

- createFile().
- createDirectory().
- createDirectories().
- exists().
- readString().
- writeString().
- copy().
- move().
- delete().
- deleteIfExists().



# Creating a File with NIO

Example:

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NIOFileExample1 {

    public static void main(String[] args) {

        Path path =
                Path.of("data.txt");

        try {

            if (Files.notExists(path)) {

                Files.createFile(path);

                System.out.println(
                        "File created.");

            } else {

                System.out.println(
                        "File already exists.");

            }

        }

        catch (IOException e) {

            System.out.println(
                    "File creation failed.");

        }

    }

}
\`\`\`



# Creating Directories

For a single directory:

\`\`\`java
Files.createDirectory(
        Path.of("reports"));
\`\`\`



For nested directories:

\`\`\`java
Files.createDirectories(
        Path.of(
                "reports/2026/january"));
\`\`\`



createDirectories() creates missing parent directories when necessary.



# Example 2: Creating Nested Directories

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NIODirectoryExample {

    public static void main(String[] args) {

        Path path =
                Path.of(
                        "reports/2026/january");

        try {

            Files.createDirectories(path);

            System.out.println(
                    "Directories created.");

        }

        catch (IOException e) {

            System.out.println(
                    "Directory creation failed.");

        }

    }

}
\`\`\`



# Checking Whether a File Exists

Use:

\`\`\`java
Files.exists(path)
\`\`\`



Example:

\`\`\`java
Path path =
        Path.of("data.txt");

if (Files.exists(path)) {

    System.out.println(
            "File exists.");

}
\`\`\`



You can also check:

\`\`\`java
Files.notExists(path)
\`\`\`



# Reading a Text File

One of the convenient NIO methods is:

\`\`\`java
Files.readString(path)
\`\`\`



Example:

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NIOReadExample {

    public static void main(String[] args) {

        Path path =
                Path.of("data.txt");

        try {

            String content =
                    Files.readString(path);

            System.out.println(content);

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to read file.");

        }

    }

}
\`\`\`



# Writing a Text File

You can use:

\`\`\`java
Files.writeString()
\`\`\`



Example:

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NIOWriteExample {

    public static void main(String[] args) {

        Path path =
                Path.of("data.txt");

        try {

            Files.writeString(
                    path,
                    "Hello Java");

            System.out.println(
                    "Data written.");

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to write file.");

        }

    }

}
\`\`\`



If the file does not exist, writeString() can create it under normal conditions.



# Writing Multiple Lines

\`\`\`java
String content =
        "Java"
        + System.lineSeparator()
        + "Python"
        + System.lineSeparator()
        + "C++";

Files.writeString(
        path,
        content);
\`\`\`



The resulting file contains:

\`\`\`text
Java
Python
C++
\`\`\`



# Appending with NIO

NIO supports file-open options.



Import:

\`\`\`java
import static java.nio.file.StandardOpenOption.APPEND;
\`\`\`



Example:

\`\`\`java
Files.writeString(
        path,
        "New Entry"
        + System.lineSeparator(),
        APPEND);
\`\`\`



This adds the new content to the existing file.



# Example 3: Append Using NIO

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import static java.nio.file.StandardOpenOption.APPEND;

public class NIOAppendExample {

    public static void main(String[] args) {

        Path path =
                Path.of("data.txt");

        try {

            Files.writeString(
                    path,
                    "New Entry"
                    + System.lineSeparator(),
                    APPEND);

            System.out.println(
                    "Data appended.");

        }

        catch (IOException e) {

            System.out.println(
                    "Append failed.");

        }

    }

}
\`\`\`



# Reading All Lines

NIO also provides:

\`\`\`java
Files.readAllLines(path)
\`\`\`



Example:

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class NIOReadLinesExample {

    public static void main(String[] args) {

        Path path =
                Path.of("data.txt");

        try {

            List<String> lines =
                    Files.readAllLines(path);

            for (String line : lines) {

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



This is convenient for relatively manageable text files.



For very large files, streaming approaches can be more appropriate.



# Copying a File

NIO provides:

\`\`\`java
Files.copy()
\`\`\`



Example:

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NIOCopyExample {

    public static void main(String[] args) {

        Path source =
                Path.of("data.txt");

        Path destination =
                Path.of("backup.txt");

        try {

            Files.copy(
                    source,
                    destination);

            System.out.println(
                    "File copied.");

        }

        catch (IOException e) {

            System.out.println(
                    "Copy failed.");

        }

    }

}
\`\`\`



# Replacing an Existing File During Copy

If the destination already exists, you can use:

\`\`\`java
StandardCopyOption.REPLACE_EXISTING
\`\`\`



Example:

\`\`\`java
import static java.nio.file.StandardCopyOption.REPLACE_EXISTING;

Files.copy(
        source,
        destination,
        REPLACE_EXISTING);
\`\`\`



# Moving a File

Use:

\`\`\`java
Files.move()
\`\`\`



Example:

\`\`\`java
Files.move(
        source,
        destination);
\`\`\`



This can be used to move or rename files depending on the paths provided and the file-system capabilities.



# Example 4: Moving a File

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NIOMoveExample {

    public static void main(String[] args) {

        Path source =
                Path.of("old.txt");

        Path destination =
                Path.of("new.txt");

        try {

            Files.move(
                    source,
                    destination);

            System.out.println(
                    "File moved.");

        }

        catch (IOException e) {

            System.out.println(
                    "Move failed.");

        }

    }

}
\`\`\`



# Deleting a File

Use:

\`\`\`java
Files.delete(path);
\`\`\`



Example:

\`\`\`java
try {

    Files.delete(path);

}

catch (IOException e) {

    System.out.println(
            "Delete failed.");

}
\`\`\`



# deleteIfExists()

If you don't want an exception simply because the file does not exist, you can use:

\`\`\`java
Files.deleteIfExists(path);
\`\`\`



Example:

\`\`\`java
Files.deleteIfExists(
        Path.of("temporary.txt"));
\`\`\`



# Checking File Type

You can use:

\`\`\`java
Files.isRegularFile(path)
\`\`\`



and:

\`\`\`java
Files.isDirectory(path)
\`\`\`



Example:

\`\`\`java
if (Files.isRegularFile(path)) {

    System.out.println(
            "Regular file.");

}
\`\`\`



# Listing a Directory

NIO provides:

\`\`\`java
Files.list(path)
\`\`\`



Example:

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NIOListExample {

    public static void main(String[] args) {

        Path directory =
                Path.of("documents");

        try (var entries =
                     Files.list(directory)) {

            entries.forEach(
                    System.out::println);

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to list directory.");

        }

    }

}
\`\`\`



The returned stream should be closed, which is why Try-with-Resources is used.



# Walking a Directory Tree

NIO also provides:

\`\`\`java
Files.walk()
\`\`\`



This can traverse a directory and its subdirectories.



Example:

\`\`\`java
try (var paths =
        Files.walk(
                Path.of("project"))) {

    paths.forEach(
            System.out::println);

}
\`\`\`



Conceptually:

\`\`\`text
project
├── src
│   ├── Main.java
│   └── Utils.java
├── data
│   └── data.txt
└── README.md
\`\`\`



The traversal can visit entries throughout the tree.



# NIO vs Traditional I/O

| Traditional I/O | Java NIO |
|---|---|
| File | Path |
| FileReader | Files methods / NIO readers |
| FileWriter | Files methods / NIO writers |
| FileInputStream | NIO file APIs/channels |
| FileOutputStream | NIO file APIs/channels |
| Older API style | Modern API style |
| Useful for existing code | Powerful for modern file operations |



# Complete NIO Example

\`\`\`java
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class NIOCompleteExample {

    public static void main(String[] args) {

        Path path =
                Path.of("notes.txt");

        try {

            Files.writeString(
                    path,
                    "Java NIO");

            String content =
                    Files.readString(path);

            System.out.println(content);

        }

        catch (IOException e) {

            System.out.println(
                    "File operation failed.");

        }

    }

}
\`\`\`



Output:

\`\`\`text
Java NIO
\`\`\`



# Real-World Applications

Java NIO is commonly useful for:

- File management systems.
- Document processing.
- Backup systems.
- Log processing.
- Directory traversal.
- Configuration management.
- Batch processing.
- File uploads and downloads.



# Common Mistakes

## 1. Confusing Path and Files

Path represents a location.



Files performs operations on that location.



Path

↓

Represents location



Files

↓

Performs operation



## 2. Forgetting IOException

Many NIO file operations can throw:

IOException



Handle or declare it appropriately.



## 3. Not Closing Directory Streams

Methods such as:

\`\`\`java
Files.list()
\`\`\`

and:

\`\`\`java
Files.walk()
\`\`\`

return streams that should be properly closed.



Use Try-with-Resources.



## 4. Loading Huge Files with readAllLines()

readAllLines() loads the lines into memory.



For very large files, consider streaming approaches instead.



# Best Practices

- Prefer Path and Files for modern file-system operations.
- Use Path.resolve() instead of manually concatenating path strings.
- Handle IOException.
- Use Try-with-Resources for file and directory streams.
- Use streaming APIs for very large files.
- Use appropriate copy and move options.
- Validate paths when accepting external input.
- Avoid hard-coded machine-specific paths.



# Industry Perspective

Java NIO is widely used in modern Java applications because it provides a cleaner and more powerful API for file-system operations.



The most important concepts to remember are:

Path

↓

Represents a location



Files

↓

Performs operations



Once you understand these two concepts, many common file operations become much simpler.



# Interview Tip

## Q: What is Java NIO?

### Answer:

Java NIO is Java's newer I/O API that provides powerful abstractions and APIs for file, directory, path, channel, and other I/O operations.



## Q: What is the difference between Path and Files?

### Answer:

Path represents the location of a file or directory, while Files provides static methods for performing operations on those paths.



## Q: What does Files.readString() do?

### Answer:

It reads the contents of a text file into a String.



## Q: What is the purpose of Files.walk()?

### Answer:

It provides a stream that can be used to traverse a directory tree.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain Java NIO.
- Use Path.
- Use Files.
- Create files and directories.
- Check file existence.
- Read text using readString().
- Write text using writeString().
- Append data using open options.
- Copy files.
- Move files.
- Delete files.
- List directories.
- Walk directory trees.
- Compare traditional I/O with NIO.
- Use Try-with-Resources with NIO streams.



You have now learned the major Java file-handling APIs needed for this module.



# Next Lesson

## Lesson 13 — Best Practices & File Handling Exceptions

You will learn:

- Common file-handling exceptions.
- Exception handling strategies.
- Resource management.
- Try-with-Resources.
- File path best practices.
- Text vs binary I/O.
- NIO best practices.
- Security considerations.
- Performance considerations.
- Practical examples.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson12;