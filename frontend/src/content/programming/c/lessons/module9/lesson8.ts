const lesson8 = {
  id: "lesson8",
  title: "String-Based File Operations",

  content: `
Introduction

String-based file operations allow us to work with strings and lines
of text instead of processing individual characters.

The two important functions are:

fputs()
    → Write a string to a file

fgets()
    → Read a string or line from a file

These functions are especially useful when working with text files.

---

1. fputs() Function

The fputs() function writes a string to a file.

Syntax:

fputs(string, file);

Example:

fputs("Hello C\\n", file);

---

2. Writing a String

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("data.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    fputs("Welcome to C Programming.\\n", file);

    fclose(file);

    return 0;
}

The file contains:

Welcome to C Programming.

---

3. Writing Multiple Strings

fputs("Line 1\\n", file);
fputs("Line 2\\n", file);
fputs("Line 3\\n", file);

The file contains:

Line 1
Line 2
Line 3

---

4. fputs() Does Not Automatically Add a Newline

Consider:

fputs("Hello", file);
fputs("World", file);

The file will contain:

HelloWorld

To create separate lines:

fputs("Hello\\n", file);
fputs("World\\n", file);

The file becomes:

Hello
World

---

5. fgets() Function

The fgets() function reads a line or a specified number of characters
from a file.

Syntax:

fgets(buffer, size, file);

Example:

char line[100];

fgets(line, sizeof(line), file);

---

6. Reading a Line Using fgets()

Suppose data.txt contains:

Hello C Programming

Program:

#include <stdio.h>

int main(void)
{
    FILE *file;
    char line[100];

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    if (fgets(line, sizeof(line), file) != NULL)
    {
        printf("%s", line);
    }

    fclose(file);

    return 0;
}

---

7. Reading Multiple Lines

fgets() can be used repeatedly to read a file line by line.

#include <stdio.h>

int main(void)
{
    FILE *file;
    char line[100];

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while (fgets(line, sizeof(line), file) != NULL)
    {
        printf("%s", line);
    }

    fclose(file);

    return 0;
}

This reads the file one line at a time.

---

8. fgets() and Newline

When fgets() reads a line, it may retain the newline character.

For example:

char line[100];

fgets(line, sizeof(line), file);

If the input line contains a newline, it may be stored in line.

---

9. Removing the Newline

The string.h library can be used to remove the newline.

Example:

#include <stdio.h>
#include <string.h>

int main(void)
{
    FILE *file;
    char line[100];

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while (fgets(line, sizeof(line), file) != NULL)
    {
        line[strcspn(line, "\\n")] = '\\0';
        printf("Line: %s\\n", line);
    }

    fclose(file);

    return 0;
}

---

10. Writing and Reading Strings

A program can first write strings to a file and then read them.

#include <stdio.h>

int main(void)
{
    FILE *file;
    char line[100];

    file = fopen("notes.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    fputs("C Programming\\n", file);
    fputs("File Handling\\n", file);
    fputs("String Operations\\n", file);

    fclose(file);

    file = fopen("notes.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while (fgets(line, sizeof(line), file) != NULL)
    {
        printf("%s", line);
    }

    fclose(file);

    return 0;
}

Output:

C Programming
File Handling
String Operations

---

11. Important Functions

fputs()
    ↓
Writes one string

fgets()
    ↓
Reads a line/string

Together they are useful for:

Writing text
Reading text
Processing lines
Working with text files

---

12. Difference Between fputc() and fputs()

fputc()
    ↓
Writes one character

fputs()
    ↓
Writes a string

Example:

fputc('A', file);

fputs("Hello", file);

---

13. Difference Between fgetc() and fgets()

fgetc()
    ↓
Reads one character

fgets()
    ↓
Reads a line/string

Example:

int ch = fgetc(file);

fgets(line, sizeof(line), file);

---

14. Reading a Complete Text File

A common pattern for reading a complete text file line by line is:

while (fgets(line, sizeof(line), file) != NULL)
{
    printf("%s", line);
}

This continues until fgets() returns NULL.

---

15. Important Points

fputs()
    ↓
Write a string

fgets()
    ↓
Read a line/string

fgets() may retain '\\n'

strcspn()
    ↓
Can be used to remove the newline

---

Lesson Summary

String-based file operations are useful for text files.

Writing:

fputs("Hello\\n", file);

Reading:

fgets(line, sizeof(line), file);

A common pattern for reading a complete text file line by line is:

while (fgets(line, sizeof(line), file) != NULL)
{
    printf("%s", line);
}
`,

  summary:
    "String-based file operations use fputs() to write strings and fgets() to read lines or strings from text files.",

  keyPoints: [
    "fputs() writes a string to a file.",
    "fgets() reads a line or specified number of characters.",
    "fputs() does not automatically add a newline.",
    "fgets() may retain the newline character.",
    "strcspn() can be used to remove the newline.",
    "fgets() can be used repeatedly to read a complete text file line by line."
  ],
};

export default lesson8;