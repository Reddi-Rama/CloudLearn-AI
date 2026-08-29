const lesson3 = {
  id: "lesson3",
  title: "Opening and Closing Files",

  content: `
Introduction

Before reading from or writing to a file, the file needs to be opened.

In C, the fopen() function is used to open a file.

After finishing the required operations, the file should be closed using
fclose().

The basic pattern is:

Open
  ↓
Read / Write
  ↓
Close

---

1. The fopen() Function

The basic syntax is:

FILE *fopen(const char *filename, const char *mode);

In normal use:

FILE *file;

file = fopen("data.txt", "r");

The two important arguments are:

Filename
    ↓
"data.txt"

Mode
    ↓
"r"

---

2. Opening a File for Reading

The "r" mode opens an existing file for reading.

Example:

FILE *file;

file = fopen("data.txt", "r");

If the file does not exist, the operation fails.

Therefore:

if (file == NULL)
{
    printf("File could not be opened.\\n");
}

is important.

---

3. Opening a File for Writing

The "w" mode opens a file for writing.

Example:

FILE *file;

file = fopen("data.txt", "w");

If the file does not exist, it can be created.

If it already exists, opening it in "w" mode generally discards its
previous contents and starts a new file.

Therefore, "w" should be used carefully.

---

4. Opening a File for Appending

The "a" mode opens a file for appending.

Example:

FILE *file;

file = fopen("data.txt", "a");

New data is written at the end of the existing file.

If the file does not exist, it can be created.

---

5. Checking fopen()

A good file-opening pattern is:

FILE *file;

file = fopen("data.txt", "r");

if (file == NULL)
{
    printf("Unable to open file.\\n");
    return 1;
}

This prevents the program from attempting to use an invalid file stream.

---

6. Closing a File With fclose()

After completing file operations:

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

7. Why Should We Close a File?

Closing a file is important because it releases the associated resources
and ensures buffered output is properly handled.

After completing the required operations, the file should normally be
closed.

---

8. Simple File Program

The following program opens a file and then closes it.

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("data.txt", "w");

    if (file == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("File opened successfully.\\n");

    fclose(file);

    return 0;
}

Output:

File opened successfully.

A file named data.txt will be created or opened according to the selected
mode.

---

9. What Is FILE *?

FILE is a type defined by the C standard library.

A variable of type:

FILE *

is used as a file pointer.

Example:

FILE *file;

The file pointer is used to communicate with the opened file.

---

10. Basic File Opening Process

The normal process is:

Declare file pointer
        ↓
Open file using fopen()
        ↓
Check for NULL
        ↓
Perform file operation
        ↓
Close file using fclose()

---

11. Opening and Closing Example

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    printf("File opened successfully.\\n");

    fclose(file);

    printf("File closed successfully.\\n");

    return 0;
}

The program opens the file, checks whether it was opened successfully,
and then closes it.

---

12. fopen() Return Value

The fopen() function returns a file pointer when the file is opened
successfully.

If the operation fails, fopen() returns NULL.

Therefore:

file = fopen("data.txt", "r");

if (file == NULL)
{
    printf("Unable to open file.\\n");
}

---

13. Different File Operations

After opening a file, the file pointer can be used with functions such as:

fgetc()
    → Read a character

fputc()
    → Write a character

fgets()
    → Read a string

fputs()
    → Write a string

fscanf()
    → Read formatted data

fprintf()
    → Write formatted data

fread()
    → Read binary data

fwrite()
    → Write binary data

---

14. Complete File Handling Pattern

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("data.txt", "w");

    if (file == NULL)
    {
        printf("Unable to open file.\\n");
        return 1;
    }

    /* Perform file operations */

    fclose(file);

    return 0;
}

This is the basic pattern used in C file handling.

---

15. Important Points

fopen()
    ↓
Open a file

fclose()
    ↓
Close a file

"r"
    ↓
Read an existing file

"w"
    ↓
Write to a file

"a"
    ↓
Append data to the end

file == NULL
    ↓
Opening failed

A file should normally be closed after the required operations are
complete.

---

Lesson Summary

Before reading from or writing to a file, the file must be opened using
fopen().

After completing the file operations, the file should be closed using
fclose().

A good program checks whether fopen() returned NULL before using the file.

The basic pattern is:

Open
  ↓
Check
  ↓
Read / Write
  ↓
Close

The file pointer is used to access the opened file.
`,

  summary:
    "fopen() is used to open a file and fclose() is used to close it. The file pointer should be checked against NULL before use.",

  keyPoints: [
    "fopen() is used to open a file.",
    "fclose() is used to close a file.",
    "fopen() returns NULL when opening fails.",
    "The file pointer should be checked before performing file operations.",
    "The basic file process is open, perform operations, and close.",
    "The 'r' mode opens an existing file for reading.",
    "The 'w' mode opens a file for writing and can discard existing contents.",
    "The 'a' mode opens a file for appending."
  ],
};

export default lesson3;