const lesson7 = {
  id: "lesson7",
  title: "Character-Based File Operations",

  content: `
Introduction

Character-based file operations deal with reading and writing one
character at a time.

C provides two important functions for this:

fgetc()
    → Read one character

fputc()
    → Write one character

These functions are useful when a program needs to process a file
character by character.

---

1. fputc() Function

The fputc() function writes a single character to a file.

Syntax:

fputc(character, file);

Example:

fputc('A', file);

Here:

'A'
    → Character to write

file
    → File pointer

---

2. Writing Characters to a File

#include <stdio.h>

int main(void)
{
    FILE *file;

    file = fopen("data.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    fputc('H', file);
    fputc('e', file);
    fputc('l', file);
    fputc('l', file);
    fputc('o', file);

    fclose(file);

    return 0;
}

The file contains:

Hello

---

3. Writing a Newline

The newline character can also be written:

fputc('\\n', file);

Example:

fputc('H', file);
fputc('i', file);
fputc('\\n', file);
fputc('C', file);

The file contains:

Hi
C

---

4. fgetc() Function

The fgetc() function reads one character from a file.

Syntax:

int ch = fgetc(file);

It returns the next character as an int, or EOF when the end of the
stream is reached or a read error occurs.

---

5. Reading One Character

Suppose data.txt contains:

Hello

Program:

#include <stdio.h>

int main(void)
{
    FILE *file;
    int ch;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    ch = fgetc(file);

    printf("%c\\n", ch);

    fclose(file);

    return 0;
}

Output:

H

---

6. Reading Characters Until EOF

A program can repeatedly call fgetc() until EOF is reached.

#include <stdio.h>

int main(void)
{
    FILE *file;
    int ch;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while ((ch = fgetc(file)) != EOF)
    {
        printf("%c", ch);
    }

    fclose(file);

    return 0;
}

This displays the complete contents of the file.

---

7. Copying a File Character by Character

The fgetc() and fputc() functions can be used together to copy the
contents of one file into another.

#include <stdio.h>

int main(void)
{
    FILE *source;
    FILE *destination;
    int ch;

    source = fopen("source.txt", "r");
    destination = fopen("destination.txt", "w");

    if (source == NULL || destination == NULL)
    {
        if (source != NULL)
            fclose(source);

        if (destination != NULL)
            fclose(destination);

        return 1;
    }

    while ((ch = fgetc(source)) != EOF)
    {
        fputc(ch, destination);
    }

    fclose(source);
    fclose(destination);

    return 0;
}

The contents of source.txt are copied into destination.txt.

---

8. Counting Characters

Character-based reading can be used to count the number of characters.

#include <stdio.h>

int main(void)
{
    FILE *file;
    int ch;
    int count = 0;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while ((ch = fgetc(file)) != EOF)
    {
        count++;
    }

    printf("Characters: %d\\n", count);

    fclose(file);

    return 0;
}

---

9. Counting Specific Characters

We can count a particular character.

#include <stdio.h>

int main(void)
{
    FILE *file;
    int ch;
    int count = 0;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while ((ch = fgetc(file)) != EOF)
    {
        if (ch == 'a')
        {
            count++;
        }
    }

    printf("Number of 'a' characters: %d\\n", count);

    fclose(file);

    return 0;
}

---

10. Searching for a Character

Character-based reading can also be used to search for a particular
character.

#include <stdio.h>

int main(void)
{
    FILE *file;
    int ch;
    int found = 0;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while ((ch = fgetc(file)) != EOF)
    {
        if (ch == 'C')
        {
            found = 1;
            break;
        }
    }

    if (found)
    {
        printf("Character found.\\n");
    }
    else
    {
        printf("Character not found.\\n");
    }

    fclose(file);

    return 0;
}

---

11. Important Functions

fputc()
    ↓
Writes one character

fgetc()
    ↓
Reads one character

Together they can be used for:

File copying
Character counting
Searching characters
Text processing
Simple file transformations

---

12. Important Points

fputc(character, file)
        ↓
Write one character

fgetc(file)
        ↓
Read one character

EOF
        ↓
Indicates end of input stream
or a read error

---

13. Common Reading Pattern

int ch;

while ((ch = fgetc(file)) != EOF)
{
    /* Process character */
}

This is the common pattern for processing a file character by character.

---

14. Character-Based Processing

Character-based operations allow a program to inspect every character
individually.

For example, a program can:

Read a character
        ↓
Check the character
        ↓
Perform an operation
        ↓
Read the next character

This makes fgetc() and fputc() useful for simple text processing.

---

15. Lesson Summary

Character-based file operations allow a program to process files one
character at a time.

The two main functions are:

fputc('A', file);

and:

int ch = fgetc(file);

A common reading pattern is:

int ch;

while ((ch = fgetc(file)) != EOF)
{
    /* Process character */
}

EOF indicates the end of the input stream or a read error.

---

Module 9 Progress

✓ Lesson 1 — Introduction to File Handling

✓ Lesson 2 — File Pointers

✓ Lesson 3 — Opening and Closing Files

✓ Lesson 4 — File Opening Modes

✓ Lesson 5 — Writing to a File

✓ Lesson 6 — Reading From a File

✓ Lesson 7 — Character-Based File Operations

→ Lesson 8 — String-Based File Operations

  Lesson 9 — Formatted File I/O

  Lesson 10 — End-of-File (EOF)

  Lesson 11 — Binary Files

  Lesson 12 — Random Access in Files

  Lesson 13 — File Error Handling

  Lesson 14 — Practical File Handling Applications

  Lesson 15 — Mini Project — File-Based Student Record System
`,

  summary:
    "Character-based file operations process files one character at a time using fgetc() for reading and fputc() for writing.",

  keyPoints: [
    "fputc() writes one character to a file.",
    "fgetc() reads one character from a file.",
    "fgetc() returns EOF when the end of the stream is reached or a read error occurs.",
    "Use an int variable when testing fgetc() against EOF.",
    "fgetc() and fputc() can be used together for file copying.",
    "Character-based operations can be used for counting and searching characters."
  ],
};

export default lesson7;