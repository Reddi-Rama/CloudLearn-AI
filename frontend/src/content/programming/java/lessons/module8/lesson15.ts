const lesson15 = {

id: "lesson15",

title: "Module 8 Review & Assessment",

content: `

# Module 8 Review & Assessment

## Module 8 Review

You have completed the complete File Handling & Java I/O module.



The goal of this lesson is to review the important concepts and test your understanding.



# Complete Module Map

Module 8 — File Handling & Java I/O

        │

        ├── File Handling Basics

        ├── File Class

        ├── Creating Files

        ├── Reading Files

        ├── Writing Files

        ├── Appending Data

        ├── Buffered I/O

        ├── Byte Streams

        ├── Serialization

        ├── Deserialization

        ├── Directories

        ├── Java NIO

        ├── Best Practices

        └── File Management System



# 1. File Handling

File handling allows a Java application to interact with data stored outside the program's memory.



Common operations:

Create

Read

Write

Append

Copy

Move

Delete



# 2. File Class

The traditional File class represents file-system paths and provides operations such as:

- exists()
- isFile()
- isDirectory()
- mkdir()
- mkdirs()
- list()
- listFiles()
- delete()
- renameTo()



# 3. Reading Text Files

Important classes:

- FileReader.
- BufferedReader.
- Scanner.



For example:

\`\`\`java
BufferedReader reader =
        new BufferedReader(
                new FileReader("data.txt"));
\`\`\`



The important method is:

\`\`\`java
readLine()
\`\`\`



It returns:

String → when a line exists

null   → end of file



# 4. Writing Text Files

Important classes:

- FileWriter.
- BufferedWriter.



Example:

\`\`\`java
try (FileWriter writer =
        new FileWriter("data.txt")) {

    writer.write("Hello Java");

}
\`\`\`



# 5. Appending Data

Append mode can be enabled with:

\`\`\`java
new FileWriter(
        "data.txt",
        true);
\`\`\`



The true parameter means:

Preserve existing content

+

Add new content



# 6. Buffered I/O

Important classes:

- BufferedReader.
- BufferedWriter.



Advantages include:

- Efficient text processing.
- Convenient line-based reading.
- Convenient line writing.
- Reduced underlying I/O operations.



Example:

\`\`\`java
String line;

while ((line =
        reader.readLine()) != null) {

    System.out.println(line);

}
\`\`\`



# 7. Byte Streams

Important classes:

- FileInputStream.
- FileOutputStream.



Use byte streams for binary data such as:

- Images.
- PDFs.
- Audio.
- Video.
- ZIP files.



Common pattern:

\`\`\`java
byte[] buffer =
        new byte[4096];

int bytesRead;

while ((bytesRead =
        input.read(buffer)) != -1) {

    output.write(
            buffer,
            0,
            bytesRead);
}
\`\`\`



# 8. Serialization

Serialization converts:

Object

↓

Byte Stream



Important classes:

- Serializable.
- ObjectOutputStream.



Example:

\`\`\`java
output.writeObject(object);
\`\`\`



# 9. Deserialization

Deserialization converts:

Byte Stream

↓

Object



Important class:

ObjectInputStream



Example:

\`\`\`java
Object object =
        input.readObject();
\`\`\`



Important concepts:

- serialVersionUID.
- transient.
- ClassNotFoundException.



# 10. Directories

Traditional directory operations include:

- mkdir()
- mkdirs()
- list()
- listFiles()



Remember:

mkdir()

↓

One directory



mkdirs()

↓

Directory hierarchy



# 11. Java NIO

The two most important concepts are:

Path

Files



Example:

\`\`\`java
Path path =
        Path.of("data.txt");

String data =
        Files.readString(path);
\`\`\`



Common NIO operations:

- createFile()
- createDirectory()
- createDirectories()
- readString()
- writeString()
- copy()
- move()
- delete()
- deleteIfExists()
- list()
- walk()
- exists()



# 12. Important Exceptions

Remember these:

IOException

→ General I/O failure



FileNotFoundException

→ File could not be opened/found



EOFException

→ Unexpected end of input



ClassNotFoundException

→ Class could not be found during deserialization



NotSerializableException

→ Object/class cannot be serialized



InvalidClassException

→ Serialization compatibility problem



SecurityException

→ Operation is not permitted by the environment



# 13. Try-with-Resources

One of the most important patterns:

\`\`\`java
try (BufferedReader reader =
        new BufferedReader(
            new FileReader("data.txt"))) {

    // File operations

}
\`\`\`



Resources are automatically closed.



# 14. Text vs Binary

Remember this distinction:



Text

↓

Character Streams

↓

Reader / Writer



and:



Binary

↓

Byte Streams

↓

InputStream / OutputStream



# 15. Traditional I/O vs NIO

Traditional:

File

FileReader

FileWriter

FileInputStream

FileOutputStream



NIO:

Path

Files



NIO provides a modern and powerful API for many file-system operations.



# Quick Revision

Requirement → Common API

Represent path → Path

Create file → Files.createFile()

Create directory → Files.createDirectory()

Create nested directories → Files.createDirectories()

Read text → Files.readString()

Write text → Files.writeString()

Append text → APPEND

Copy → Files.copy()

Move → Files.move()

Delete → Files.delete()

List directory → Files.list()

Traverse tree → Files.walk()

Read text efficiently → BufferedReader

Write text efficiently → BufferedWriter

Read binary data → FileInputStream

Write binary data → FileOutputStream

Serialize object → ObjectOutputStream

Deserialize object → ObjectInputStream



# Assessment — Multiple Choice Questions

## Question 1

Which class represents a file-system path in modern Java?

A. FileReader

B. Path

C. Scanner

D. FileWriter



Answer: B



## Question 2

Which method reads an entire text file into a String?

A. Files.read()

B. Files.readString()

C. Files.readText()

D. Files.getString()



Answer: B



## Question 3

Which class is commonly used for efficient line-by-line text reading?

A. BufferedReader

B. FileOutputStream

C. ObjectOutputStream

D. File



Answer: A



## Question 4

Which class is appropriate for reading binary data?

A. FileReader

B. BufferedReader

C. FileInputStream

D. FileWriter



Answer: C



## Question 5

What does the true parameter mean here?

\`\`\`java
new FileWriter(
        "data.txt",
        true);
\`\`\`



A. Read-only mode

B. Binary mode

C. Append mode

D. Encryption mode



Answer: C



## Question 6

Which interface is used for standard Java serialization?

A. Cloneable

B. Serializable

C. Readable

D. ExternalFile



Answer: B



## Question 7

Which class is used to serialize objects?

A. ObjectInputStream

B. ObjectOutputStream

C. BufferedWriter

D. FileOutputStream



Answer: B



## Question 8

Which class is used to deserialize objects?

A. ObjectInputStream

B. ObjectOutputStream

C. FileReader

D. Scanner



Answer: A



## Question 9

What does readLine() return at the end of a file?

A. 0

B. -1

C. false

D. null



Answer: D



## Question 10

Which method creates nested directories?

A. mkdir()

B. mkdirs()

C. createFolder()

D. createDirectoriesOnly()



Answer: B



## Question 11

Which NIO method copies a file?

A. Files.clone()

B. Files.copy()

C. Files.duplicate()

D. Files.transfer()



Answer: B



## Question 12

Which NIO method moves a file?

A. Files.move()

B. Files.shift()

C. Files.transfer()

D. Files.renameFile()



Answer: A



## Question 13

Which keyword prevents a field from being included in the standard serialized state?

A. static

B. final

C. transient

D. private



Answer: C



## Question 14

What does -1 indicate when returned by InputStream.read()?

A. Error

B. Empty buffer

C. End of stream

D. Invalid file



Answer: C



## Question 15

Which class is used to write raw bytes to a file?

A. FileWriter

B. FileOutputStream

C. BufferedWriter

D. ObjectInputStream



Answer: B



# Practical Questions

## Question 1

Write a program that creates:

\`\`\`text
reports/2026
\`\`\`

using Java NIO.



## Question 2

Write a program that:

1. Creates data.txt.
2. Writes three lines.
3. Reads the file.
4. Displays the contents.



## Question 3

Write a program that copies:

\`\`\`text
source.txt
\`\`\`

to:

\`\`\`text
backup.txt
\`\`\`

using Java NIO.



## Question 4

Write a program that appends:

\`\`\`text
New Record
\`\`\`

to an existing text file.



## Question 5

Write a program that lists all entries inside a directory.



## Question 6

Write a program that determines whether a supplied path is:

File

Directory

Does not exist



## Question 7

Write a program that serializes a Student object.



## Question 8

Write a program that deserializes the previously saved object and displays its fields.



# Scenario-Based Questions

## Scenario 1

You need to copy a JPG image.



Which API would you choose?



### Answer:

Use byte-oriented I/O such as:

FileInputStream

FileOutputStream



or an appropriate NIO file-copy operation.



## Scenario 2

You need to process a very large text log line by line.



Which approach is appropriate?



### Answer:

Use a streaming approach such as:

BufferedReader



or an appropriate NIO streaming API.



## Scenario 3

You need to create:

\`\`\`text
reports/2026/january
\`\`\`

where none of the directories exist.



Which method is appropriate?



### Answer:

\`\`\`java
Files.createDirectories(path);
\`\`\`



## Scenario 4

You need to add a new log entry without deleting previous entries.



What should you use?



### Answer:

Append mode, such as:

\`\`\`java
Files.writeString(
        path,
        content,
        APPEND);
\`\`\`



## Scenario 5

You receive a serialized object from an unknown external source.



Should you blindly deserialize it?



### Answer:

No.



Native Java deserialization can introduce serious security risks when processing untrusted data.



# Final Module Challenge

Build a complete File Management System with:

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
11. File Information
12. Search File
13. Rename File
14. Exit



# Additional Requirements

Your application should:

- Use Path and Files.
- Handle IOException.
- Use Try-with-Resources where appropriate.
- Validate paths.
- Avoid accidental overwrites where possible.
- Display meaningful error messages.
- Keep the program organized.



# Module 8 Final Checklist

Before moving to Module 9, make sure you can explain:

✓ File

✓ Path

✓ Files

✓ FileReader

✓ FileWriter

✓ BufferedReader

✓ BufferedWriter

✓ FileInputStream

✓ FileOutputStream

✓ Serializable

✓ ObjectOutputStream

✓ ObjectInputStream

✓ Serialization

✓ Deserialization

✓ transient

✓ serialVersionUID

✓ mkdir()

✓ mkdirs()

✓ readString()

✓ writeString()

✓ copy()

✓ move()

✓ delete()

✓ list()

✓ walk()

✓ Try-with-Resources

✓ IOException



# Module 8 Final Takeaways

- Java provides multiple APIs for working with files and directories.
- Use character-oriented APIs for text.
- Use byte-oriented APIs for binary data.
- Buffered I/O is useful for efficient text processing.
- Serialization converts object state into a byte stream.
- Deserialization reconstructs an object from serialized data.
- Path represents a file-system location.
- Files provides modern file-system operations.
- Try-with-Resources should be used to manage closeable resources.
- Large files should generally be processed incrementally.
- File paths supplied externally should be validated.
- Native Java deserialization should never blindly process untrusted data.



# Module 8 Completed

Module 8 — File Handling & Java I/O

↓

COMPLETE ✓

↓

Module 9

↓

Collections Framework



You are now ready to move to Module 9 — Collections Framework.



# Next Module

## Module 9 — Collections Framework

You will learn:

- Introduction to Collections.
- Collection Interfaces.
- List.
- ArrayList.
- LinkedList.
- Vector and Stack.
- Queue.
- PriorityQueue.
- Deque.
- Set.
- HashSet.
- LinkedHashSet.
- TreeSet.
- Collection Algorithms.
- Student Record Management System.
- Assessment.

`

};

export default lesson15;