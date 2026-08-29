const lesson1 = {
  id: "lesson1",
  title: "Introduction to File Handling",

  content: `
Introduction

So far, most of the C programs we have written store data in memory while
the program is running.

For example:

int marks = 85;

The value 85 is stored in memory while the program executes.

When the program ends, that data is no longer available unless we save it
somewhere.

File handling allows a C program to store data in files so that the
information can be used again later.

---

1. What Is a File?

A file is a collection of data stored on a storage device.

Examples include:

students.txt
employees.txt
marks.dat
records.bin

A C program can perform operations such as:

Create a file
Open a file
Read from a file
Write to a file
Append data
Close a file

---

2. Why Do We Need File Handling?

Consider a student management program.

Without file handling:

Program starts
    ↓
Student data entered
    ↓
Data stored in memory
    ↓
Program ends
    ↓
Data is lost

With file handling:

Program starts
    ↓
Student data entered
    ↓
Data stored in a file
    ↓
Program ends
    ↓
Data remains in the file
    ↓
Program starts again
    ↓
Data can be read

This is called persistent storage.

---

3. Types of Files

In C programming, files are commonly classified into:

Text Files
Binary Files

Text File

Stores information in a human-readable form.

Example:

Name: Rahul
Roll Number: 101
Marks: 85

Binary File

Stores data in binary form.

Binary files are generally not intended to be read directly as ordinary
text.

Binary files will be covered in detail later in the module.

---

4. File Handling Functions

C provides several standard library functions for file operations.

Some important ones are:

fopen()   → Open a file
fclose()  → Close a file
fprintf() → Write formatted data
fscanf()  → Read formatted data
fputc()   → Write a character
fgetc()   → Read a character
fputs()   → Write a string
fgets()   → Read a string
fread()   → Read binary data
fwrite()  → Write binary data

These functions are available through:

#include <stdio.h>

---

5. The Basic File Handling Process

A typical file operation follows this sequence:

Start
    ↓
Open File
    ↓
Perform Operation
    ↙       ↘
  Read     Write
    ↘       ↙
Close File
    ↓
End

The file should normally be closed after the required operations are complete.

---

6. Including the Header File

File handling functions are provided by the standard input/output header:

#include <stdio.h>

Example:

#include <stdio.h>

int main(void)
{
    FILE *file;

    return 0;
}

The stdio.h header provides the declarations required for standard file
operations.

---

7. File Pointer

A file is accessed through a file pointer.

The basic declaration is:

FILE *file;

FILE is a type defined by the C standard library.

The pointer connects the program to an opened file stream.

---

8. Opening a File

The fopen() function is used to open a file.

Example:

FILE *file;

file = fopen("data.txt", "r");

Here:

data.txt → File name
"r"      → Opening mode

The opening modes will be studied in more detail later.

---

9. Checking Whether a File Opened Successfully

A file operation can fail.

Therefore, the returned file pointer should be checked.

Example:

FILE *file;

file = fopen("data.txt", "r");

if (file == NULL)
{
    printf("Unable to open file.\\n");
    return 1;
}

If fopen() fails, it returns NULL.

---

10. Closing a File

After completing file operations, the file should be closed.

Use:

fclose(file);

Example:

FILE *file;

file = fopen("data.txt", "r");

if (file == NULL)
{
    return 1;
}

/* File operations */

fclose(file);

---

11. Persistent Storage

One of the main advantages of file handling is persistent storage.

Memory-based data:

Program starts
    ↓
Data stored in memory
    ↓
Program ends
    ↓
Data is lost

File-based data:

Program starts
    ↓
Data stored in file
    ↓
Program ends
    ↓
Data remains
    ↓
Program starts again
    ↓
Data can be retrieved

This makes file handling useful for applications that need to preserve
information.

---

12. Text File Example

A text file can contain information such as:

Name: Rahul
Roll Number: 101
Marks: 85

A C program can later open the file and read this information.

Text files are useful when the stored information should be human-readable.

---

13. Binary File Example

Binary files store information in binary form.

They are useful when programs need to store data in a format intended for
programmatic processing rather than direct human reading.

Binary file operations will be discussed later in this module.

---

14. Common File Operations

The main file operations are:

Create
    ↓
Open
    ↓
Read / Write / Append
    ↓
Close

Some commonly used functions are:

fopen()
fclose()
fgetc()
fputc()
fgets()
fputs()
fscanf()
fprintf()
fread()
fwrite()

---

15. Important Points

File handling allows programs to store data permanently.

File:

    ↓

Collection of stored data

fopen():

    ↓

Opens a file

fclose():

    ↓

Closes a file

FILE *:

    ↓

File pointer used to access a file

Text file:

    ↓

Human-readable data

Binary file:

    ↓

Binary-form data

---

Lesson Summary

File handling allows a C program to store data in files and retrieve it
later.

The main operations are:

Create
Open
Read
Write
Append
Close

The standard file functions are provided through:

#include <stdio.h>

File handling is important because it provides persistent storage, allowing
data to remain available after a program ends.
`,

  summary:
    "File handling allows C programs to store data permanently in files and retrieve it later.",

  keyPoints: [
    "A file is a collection of data stored on a storage device.",
    "File handling provides persistent storage.",
    "C commonly works with text files and binary files.",
    "File operations include creating, opening, reading, writing, appending, and closing files.",
    "File handling functions are provided through stdio.h.",
    "FILE * is used as a file pointer.",
    "fopen() opens a file and fclose() closes it.",
    "A file pointer should be checked against NULL after fopen()."
  ],
};

export default lesson1;