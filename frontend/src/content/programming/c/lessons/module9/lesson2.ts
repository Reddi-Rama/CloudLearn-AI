const lesson2 = {
  id: "lesson2",
  title: "File Pointers",

  content: `
Introduction

A file pointer is a special pointer used by a C program to access an opened
file.

The basic declaration is:

FILE *file;

The FILE type is provided by:

#include <stdio.h>

The file pointer acts as the main connection between the C program and the
opened file.

---

1. What Is a File Pointer?

A file pointer is a pointer of type FILE *.

Example:

FILE *file;

Here:

FILE → File stream type
*    → Pointer
file → File pointer variable

The pointer is used with functions such as:

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

2. Declaring a File Pointer

The basic syntax is:

FILE *file;

Example:

#include <stdio.h>

int main(void)
{
    FILE *file;

    return 0;
}

The variable file can later be assigned the result of fopen().

---

3. Opening a File Using a File Pointer

Example:

FILE *file;

file = fopen("data.txt", "r");

Here:

fopen() opens the file.

The returned file stream pointer is stored in file.

Conceptually:

C Program
    ↓
FILE *file
    ↓
Opened File

---

4. Checking the File Pointer

Opening a file can fail.

Therefore, always check:

if (file == NULL)
{
    printf("Unable to open file.\\n");
    return 1;
}

If fopen() fails, it returns NULL.

---

5. Complete Example

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

    return 0;
}

The program opens data.txt, checks whether the operation succeeded, and
then closes the file.

---

6. File Pointer and fclose()

After the file operations are complete, the file pointer is passed to
fclose():

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

7. File Pointer With fgetc()

The file pointer is passed to fgetc() to read one character.

Example:

int ch;

ch = fgetc(file);

The function reads the next character from the file.

---

8. File Pointer With fputc()

The file pointer can also be passed to fputc() to write a character.

Example:

fputc('A', file);

Here:

'A'  → Character to write
file → File pointer

---

9. File Pointer With fgets()

A file pointer can be used with fgets() to read a line or string.

Example:

char line[100];

fgets(line, sizeof(line), file);

Here:

line → Character array used as the buffer
sizeof(line) → Maximum size of the buffer
file → File pointer

---

10. File Pointer With fputs()

The fputs() function writes a string to a file.

Example:

fputs("Hello C\\n", file);

Here:

"Hello C\\n" → String to write
file          → File pointer

---

11. File Pointer With fprintf()

Formatted data can be written using fprintf().

Example:

int number = 100;

fprintf(file, "%d\\n", number);

The file pointer tells fprintf() which file stream should receive the data.

---

12. File Pointer With fscanf()

Formatted data can be read using fscanf().

Example:

int number;

fscanf(file, "%d", &number);

The file pointer tells fscanf() which file stream should provide the data.

---

13. File Pointer With fread() and fwrite()

Binary data can be processed using fread() and fwrite().

Reading:

fread(&data, sizeof(data), 1, file);

Writing:

fwrite(&data, sizeof(data), 1, file);

The file pointer identifies the file stream being used.

---

14. Standard Streams

C also provides three predefined standard streams:

stdin
stdout
stderr

They are also associated with the FILE type.

stdin

Standard input, normally the keyboard.

stdout

Standard output, normally the terminal.

stderr

Standard error output, normally the terminal.

For example:

fprintf(stdout, "Hello\\n");

is another way of writing to standard output.

---

15. Important Points

FILE *file;

    ↓

Declare a file pointer

file = fopen(...);

    ↓

Open a file

if (file == NULL)

    ↓

Check for failure

fgetc(file)
fprintf(file, ...)

    ↓

Perform file operations

fclose(file);

    ↓

Close the file

The file pointer is the main connection between the C program and an opened
file.

---

Lesson Summary

A file pointer is declared using:

FILE *file;

It receives the result of:

fopen()

and is then passed to functions such as:

fgetc()
fputc()
fgets()
fputs()
fscanf()
fprintf()
fread()
fwrite()

The file should be closed using:

fclose(file);

A file pointer is therefore an essential part of C file handling.
`,

  summary:
    "A file pointer of type FILE * connects a C program to an opened file and is passed to file-handling functions.",

  keyPoints: [
    "A file pointer is declared using FILE *file.",
    "FILE is provided by stdio.h.",
    "fopen() returns a file pointer when a file is opened successfully.",
    "Always check whether the file pointer is NULL after fopen().",
    "The file pointer is passed to functions such as fgetc(), fputc(), fgets(), fputs(), fscanf(), fprintf(), fread(), and fwrite().",
    "The file should be closed using fclose(file).",
    "stdin, stdout, and stderr are predefined standard streams associated with FILE."
  ],
};

export default lesson2;