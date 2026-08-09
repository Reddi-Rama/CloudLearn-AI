const lesson8 = {

id: "lesson8",

title: "FileInputStream & FileOutputStream",

content: `

# FileInputStream & FileOutputStream

## Introduction

In the previous lessons, you worked with character-based file handling:

- FileReader.
- FileWriter.
- BufferedReader.
- BufferedWriter.

These classes are mainly designed for text.



But what if you want to work with:

- Images.
- Audio.
- Video.
- PDF files.
- ZIP files.
- Executable files.
- Other binary data.



For these files, Java provides byte streams.



The two important classes are:

FileInputStream

FileOutputStream



# What Are Byte Streams?

A byte stream processes data as individual bytes.



The main abstract classes are:

InputStream

OutputStream



Two commonly used implementations are:

FileInputStream

FileOutputStream



The basic structure is:



Input:

File

↓

FileInputStream

↓

Java Program



Output:

Java Program

↓

FileOutputStream

↓

File



# Why Use Byte Streams?

Byte streams are suitable for binary data.



Examples:

- Images.
- PDFs.
- Audio.
- Video.
- ZIP files.
- Executable files.



Binary files should generally be handled as raw bytes rather than characters.



# FileInputStream

FileInputStream is used to read raw bytes from a file.



It belongs to:

java.io



Import:

\`\`\`java
import java.io.FileInputStream;
\`\`\`



Basic syntax:

\`\`\`java
FileInputStream input =
        new FileInputStream("data.bin");
\`\`\`



# FileOutputStream

FileOutputStream is used to write raw bytes to a file.



Import:

\`\`\`java
import java.io.FileOutputStream;
\`\`\`



Basic syntax:

\`\`\`java
FileOutputStream output =
        new FileOutputStream("data.bin");
\`\`\`



# Reading One Byte

The read() method reads one byte at a time.



Example:

\`\`\`java
int data = input.read();
\`\`\`



The method returns:

- A byte value when data is available.
- -1 when the end of the file is reached.



# Example 1: Reading Bytes

Suppose data.txt contains:

\`\`\`text
ABC
\`\`\`



Program:

\`\`\`java
import java.io.FileInputStream;
import java.io.IOException;

public class FileInputStreamExample1 {

    public static void main(String[] args) {

        try (FileInputStream input =
                     new FileInputStream("data.txt")) {

            int data;

            while ((data = input.read()) != -1) {

                System.out.print(
                        (char) data);

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
ABC
\`\`\`



# Why Does read() Return an int?

You may wonder why we write:

\`\`\`java
int data = input.read();
\`\`\`

instead of:

\`\`\`java
byte data = input.read();
\`\`\`



The read() method returns an int so that it can represent every possible byte value as well as the special value:

-1



which indicates the end of the stream.



Therefore, the common pattern is:

\`\`\`java
int data;

while ((data = input.read()) != -1) {

    // Process byte

}
\`\`\`



# Converting a Byte to a Character

When you know that the input contains text, you can convert the returned value:

\`\`\`java
(char) data
\`\`\`



Example:

\`\`\`java
System.out.print((char) data);
\`\`\`



However, this does not make byte streams equivalent to proper character decoding.



For text with different character encodings, character-based APIs are generally more appropriate.



# Reading Using a Byte Array

Reading one byte at a time is simple, but it may involve many method calls.



A more efficient approach is to use a byte array.



Example:

\`\`\`java
byte[] buffer = new byte[1024];
\`\`\`



This creates a buffer capable of holding 1024 bytes.



# Example 2: Reading with a Byte Array

\`\`\`java
import java.io.FileInputStream;
import java.io.IOException;

public class FileInputStreamExample2 {

    public static void main(String[] args) {

        try (FileInputStream input =
                     new FileInputStream("data.bin")) {

            byte[] buffer = new byte[1024];

            int bytesRead;

            while ((bytesRead =
                    input.read(buffer)) != -1) {

                System.out.println(
                        "Bytes read: "
                        + bytesRead);

            }

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to read file.");

        }

    }

}
\`\`\`



# Understanding read(buffer)

The statement:

\`\`\`java
input.read(buffer)
\`\`\`



attempts to fill the buffer with available bytes.



It returns the number of bytes actually read.



For example:

Buffer Size = 1024 bytes



The final read might contain only:

350 bytes



The returned value will be:

350



When there is no more data:

-1



is returned.



# FileOutputStream

FileOutputStream writes raw bytes to a file.



Example:

\`\`\`java
FileOutputStream output =
        new FileOutputStream("data.bin");
\`\`\`



# Writing One Byte

The write() method can write a byte.



Example:

\`\`\`java
output.write(65);
\`\`\`



The value 65 corresponds to the byte representation of A in ASCII.



For binary data, the values should be treated as raw bytes rather than necessarily as text characters.



# Example 3: Writing Bytes

\`\`\`java
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutputStreamExample1 {

    public static void main(String[] args) {

        try (FileOutputStream output =
                     new FileOutputStream("data.bin")) {

            output.write(65);
            output.write(66);
            output.write(67);

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



The resulting bytes correspond to:

\`\`\`text
ABC
\`\`\`

when interpreted using the corresponding character encoding.



# Writing a Byte Array

You can write multiple bytes at once.



Example:

\`\`\`java
byte[] data = {
        65, 66, 67
};

output.write(data);
\`\`\`



# Example 4: Writing a Byte Array

\`\`\`java
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutputStreamExample2 {

    public static void main(String[] args) {

        byte[] data = {
                65, 66, 67, 68
        };

        try (FileOutputStream output =
                     new FileOutputStream("data.bin")) {

            output.write(data);

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to write data.");

        }

    }

}
\`\`\`



# Reading and Writing Binary Data

The most important application of these streams is handling binary files.



For example:



Image

↓

FileInputStream

↓

Bytes

↓

FileOutputStream

↓

Copied Image



The bytes are copied without interpreting them as characters.



# Example 5: Copying a Binary File

\`\`\`java
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;

public class FileCopyExample {

    public static void main(String[] args) {

        try (
            FileInputStream input =
                new FileInputStream("source.jpg");

            FileOutputStream output =
                new FileOutputStream("copy.jpg")
        ) {

            byte[] buffer = new byte[4096];

            int bytesRead;

            while ((bytesRead =
                    input.read(buffer)) != -1) {

                output.write(
                        buffer,
                        0,
                        bytesRead);

            }

            System.out.println(
                    "File copied successfully.");

        }

        catch (IOException e) {

            System.out.println(
                    "File copy failed.");

        }

    }

}
\`\`\`



# Understanding write(buffer, 0, bytesRead)

This is important.



Suppose:

Buffer size = 4096 bytes



but the final read contains only:

500 bytes



If you wrote the entire buffer:

\`\`\`java
output.write(buffer);
\`\`\`



you could write bytes that were not part of the current read.



Instead:

\`\`\`java
output.write(
        buffer,
        0,
        bytesRead);
\`\`\`



means:

Start position = 0

Number of bytes = bytesRead



Only the valid bytes from the current read are written.



# File Copy Workflow

Source File

↓

FileInputStream

↓

Byte Buffer

↓

FileOutputStream

↓

Destination File



Repeated until:

\`\`\`java
read() == -1
\`\`\`



# Append Mode with FileOutputStream

Like FileWriter, FileOutputStream also supports append mode.



Syntax:

\`\`\`java
FileOutputStream output =
        new FileOutputStream(
                "data.bin",
                true);
\`\`\`



Here:

true

↓

Append Mode



Existing data is preserved and new bytes are written at the end.



# Example 6: FileOutputStream Append Mode

\`\`\`java
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutputStreamExample3 {

    public static void main(String[] args) {

        byte[] data = {
                68, 69, 70
        };

        try (FileOutputStream output =
                     new FileOutputStream(
                             "data.bin",
                             true)) {

            output.write(data);

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to append data.");

        }

    }

}
\`\`\`



# FileInputStream vs FileOutputStream

| FileInputStream | FileOutputStream |
|---|---|
| Reads bytes | Writes bytes |
| Input operation | Output operation |
| Source → Program | Program → Destination |
| Uses read() | Uses write() |
| Useful for binary input | Useful for binary output |



# Byte Streams vs Character Streams

| Byte Streams | Character Streams |
|---|---|
| Work with bytes | Work with characters |
| InputStream / OutputStream | Reader / Writer |
| Binary data | Text data |
| Images, PDFs, audio | Text files |
| FileInputStream | FileReader |
| FileOutputStream | FileWriter |



# Important Example

Suppose you need to copy an image:

photo.jpg



Do not use:

\`\`\`java
FileReader
FileWriter
\`\`\`



Instead use:

\`\`\`java
FileInputStream
FileOutputStream
\`\`\`



because the image contains binary data.



# Buffer Size

The buffer size can affect performance.



Example:

\`\`\`java
byte[] buffer = new byte[4096];
\`\`\`



Other sizes can be used depending on the application.



There is no single buffer size that is optimal for every workload.



# Try-with-Resources

Both streams implement AutoCloseable through their stream hierarchy.



Therefore, this is recommended:

\`\`\`java
try (
    FileInputStream input =
        new FileInputStream("source.jpg");

    FileOutputStream output =
        new FileOutputStream("copy.jpg")
) {

    // File operations

}
\`\`\`



Both streams are automatically closed.



# Common Mistakes

## 1. Using Character Streams for Binary Files

Avoid:

\`\`\`java
FileReader
FileWriter
\`\`\`

for images, PDFs, audio, and other arbitrary binary files.



## 2. Writing the Entire Buffer

Avoid:

\`\`\`java
output.write(buffer);
\`\`\`

when the last read may contain fewer bytes than the buffer size.



Prefer:

\`\`\`java
output.write(
        buffer,
        0,
        bytesRead);
\`\`\`



## 3. Forgetting to Close Streams

Use Try-with-Resources.



## 4. Ignoring IOException

File operations can fail.



Always handle or propagate the exception appropriately.



# Real-World Applications

## Image Copying

Image

↓

InputStream

↓

Bytes

↓

OutputStream

↓

Copied Image



## PDF Processing

PDF

↓

Byte Stream

↓

Processing



## File Uploads

Uploaded File

↓

Byte Stream

↓

Storage



## Backup Systems

Original File

↓

Read Bytes

↓

Write Bytes

↓

Backup File



# Best Practices

- Use byte streams for binary data.
- Use a byte array for efficient bulk processing.
- Write only the number of bytes actually read.
- Use Try-with-Resources.
- Handle IOException.
- Choose an appropriate buffer size.
- Avoid converting arbitrary binary data into characters.
- Use character streams for ordinary text whenever appropriate.



# Industry Perspective

Byte streams are fundamental to many systems that process binary data.



They are relevant to:

- File upload systems.
- Image processing.
- Document management.
- Backup tools.
- Media processing.
- File transfer.
- Compression.
- Network communication.



Modern Java applications may also use NIO channels and higher-level APIs for specialized workloads, but understanding byte streams is essential for understanding Java I/O.



# Interview Tip

## Q: What is the difference between FileInputStream and FileReader?

### Answer:

FileInputStream reads raw bytes and is suitable for binary data, while FileReader reads character data and is designed for text files.



## Q: Why does read() return -1?

### Answer:

-1 indicates that the end of the input stream has been reached.



## Q: Why do we use write(buffer, 0, bytesRead) when copying files?

### Answer:

Because the last read may fill only part of the buffer. Writing only bytesRead bytes ensures that no stale or unused bytes from the buffer are written to the destination.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain byte streams.
- Use FileInputStream.
- Use FileOutputStream.
- Read individual bytes.
- Read bytes using a buffer.
- Write individual bytes.
- Write byte arrays.
- Copy binary files.
- Understand append mode.
- Differentiate byte streams from character streams.
- Use Try-with-Resources.
- Handle IOException.
- Understand why buffer length and bytesRead matter.



You have now learned both major stream categories:



Java I/O

│

├── Character Streams

│      ├── FileReader

│      ├── FileWriter

│      ├── BufferedReader

│      └── BufferedWriter

│

└── Byte Streams

       ├── FileInputStream

       └── FileOutputStream



# Next Lesson

## Lesson 9 — Serialization

You will learn:

- What Serialization means.
- Why objects need to be serialized.
- Serializable.
- ObjectOutputStream.
- Writing objects to files.
- serialVersionUID.
- transient.
- Object state.
- Practical programs.
- Real-world applications.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson8;