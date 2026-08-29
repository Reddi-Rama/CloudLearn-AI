const lesson5 = {
  id: "lesson5",
  title: "Writing to a File",

  content: `
Introduction

Writing to a file means storing data from a C program into a file.

C provides several functions for writing data:

fputc()   → Write one character
fputs()   → Write a string
fprintf() → Write formatted data
fwrite()  → Write binary data

The first three are commonly used with text files.

---

1. Writing With fprintf()

fprintf() works similarly to printf().

The main difference is that fprintf() can write formatted output to a file.

Syntax:

fprintf(file, "format", values);

Example:

fprintf(file, "Hello C\\n");

---

2. Simple Writing Example

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

    fprintf(file, "Hello C Programming\\n");

    fclose(file);

    return 0;
}

After execution, data.txt contains:

Hello
C Programming

---

3. Writing Multiple Lines

We can use multiple fprintf() statements:

fprintf(file, "Line 1\\n");
fprintf(file, "Line 2\\n");
fprintf(file, "Line 3\\n");

The file will contain:

Line 1
Line 2
Line 3

---

4. Writing Variables

fprintf() can write variable values.

#include <stdio.h>

int main(void)
{
    FILE *file;

    int rollNumber = 101;
    float marks = 85.5f;

    file = fopen("student.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    fprintf(file, "Roll Number: %d\\n", rollNumber);
    fprintf(file, "Marks: %.2f\\n", marks);

    fclose(file);

    return 0;
}

The file contains:

Roll Number: 101
Marks: 85.50

---

5. Writing a String

The fputs() function writes a string to a file.

Syntax:

fputs(string, file);

Example:

fputs("Welcome to C\\n", file);

---

6. Example Using fputs()

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("message.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    fputs("Welcome to C Programming.\\n", file);
    fputs("This text is stored in a file.\\n", file);

    fclose(file);

    return 0;
}

The file contains:

Welcome to C Programming.
This text is stored in a file.

---

7. Writing a Single Character

The fputc() function writes one character.

Syntax:

fputc(character, file);

Example:

fputc('A', file);

---

8. Example Using fputc()

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("characters.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    fputc('H', file);
    fputc('i', file);
    fputc('\\n', file);

    fclose(file);

    return 0;
}

The file contains:

Hi

---

9. Writing a String Character by Character

A string can be written one character at a time.

#include <stdio.h>

int main(void)
{
    FILE *file;

    char text[] = "Hello";

    file = fopen("data.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    for (int i = 0; text[i] != '\\0'; i++)
    {
        fputc(text[i], file);
    }

    fclose(file);

    return 0;
}

The string is written to the file character by character.

---

10. Appending Data

The "a" mode can be used when new data should be added to the end
of an existing file.

Example:

FILE *file;

file = fopen("records.txt", "a");

if (file == NULL)
{
    return 1;
}

fprintf(file, "New record\\n");

fclose(file);

The previous contents are preserved and the new record is added at
the end.

---

11. Writing Formatted Student Data

#include <stdio.h>

int main(void)
{
    FILE *file;

    int rollNumber = 101;
    float marks = 85.5f;

    file = fopen("students.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    fprintf(file, "%d %.2f\\n", rollNumber, marks);

    fclose(file);

    return 0;
}

The file contains:

101 85.50

---

12. Writing Different Data Types

fprintf() can write different types of data using format specifiers.

%d
    → Integer

%f
    → Floating-point value

%.2f
    → Floating-point value with two decimal places

%c
    → Character

%s
    → String

Example:

fprintf(file, "Name: %s\\n", name);
fprintf(file, "Age: %d\\n", age);
fprintf(file, "Marks: %.2f\\n", marks);

---

13. Checking Write Operations

Many output functions return a value that can be checked for errors.

For example, fputc() returns the character written as an unsigned char
converted to int, or EOF if an error occurs.

Example:

int result = fputc('A', file);

if (result == EOF)
{
    printf("Write error.\\n");
}

For many simple programs, the main error check is ensuring that fopen()
succeeded.

---

14. printf() vs fprintf()

The difference is:

printf()
    ↓
Writes to standard output

fprintf()
    ↓
Writes formatted output to a specified stream

Example:

printf("Hello\\n");

writes to the terminal.

While:

fprintf(file, "Hello\\n");

writes to the opened file.

---

15. Important Points

fputc()
    ↓
Write one character

fputs()
    ↓
Write a string

fprintf()
    ↓
Write formatted data

fwrite()
    ↓
Write binary data

For text files, a common pattern is:

fopen("file.txt", "w")
        ↓
fprintf() / fputs() / fputc()
        ↓
fclose()

---

Lesson Summary

C provides several ways to write data to a file.

Character:

fputc('A', file);

String:

fputs("Hello\\n", file);

Formatted data:

fprintf(file, "Marks: %.2f\\n", marks);

The file must first be opened in a suitable writing mode, such as
"w" or "a", and should be closed after the operation.
`,

  summary:
    "C provides fputc(), fputs(), fprintf(), and fwrite() for writing data to files. Text files commonly use fputc(), fputs(), and fprintf().",

  keyPoints: [
    "fputc() writes one character.",
    "fputs() writes a string.",
    "fprintf() writes formatted data.",
    "fwrite() writes binary data.",
    "The file must be opened in a suitable writing mode.",
    "The file should be closed using fclose() after writing.",
    "The 'a' mode preserves existing contents and adds new data at the end."
  ],
};

export default lesson5;