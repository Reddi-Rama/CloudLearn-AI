const lesson6 = {
  id: "lesson6",
  title: "Reading From a File",

  content: `
Introduction

Reading from a file means retrieving data that has already been stored
in a file.

C provides several functions for reading:

fgetc()   → Read one character
fgets()   → Read a line/string
fscanf()  → Read formatted data
fread()   → Read binary data

The first three are commonly used with text files.

---

1. Opening a File for Reading

A file should normally be opened using "r" mode:

FILE *file;

file = fopen("data.txt", "r");

Always check whether the file was opened successfully:

if (file == NULL)
{
    printf("Unable to open file.\\n");
    return 1;
}

---

2. Reading One Character With fgetc()

The fgetc() function reads one character from a file.

Syntax:

int ch = fgetc(file);

Example:

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

If the file contains:

Hello

the output is:

H

---

3. Reading an Entire File Character by Character

We can repeatedly call fgetc().

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
        putchar(ch);
    }

    fclose(file);

    return 0;
}

If data.txt contains:

Hello
C
Welcome

the program displays:

Hello
C
Welcome

---

4. Why Use int for fgetc()?

Notice:

int ch;

rather than:

char ch;

fgetc() returns an int so that it can represent every possible unsigned
char value as well as the special value EOF.

Therefore, this pattern is recommended:

int ch;

while ((ch = fgetc(file)) != EOF)
{
    ...
}

---

5. Reading a Line With fgets()

The fgets() function reads a line or a specified number of characters
from a file.

Syntax:

fgets(buffer, size, file);

Example:

char line[100];

fgets(line, sizeof(line), file);

---

6. Example Using fgets()

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

The line read from the file is displayed.

---

7. Reading Multiple Lines With fgets()

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

8. Reading Formatted Data With fscanf()

The fscanf() function reads formatted data from a file.

Syntax:

fscanf(file, "format", &variables);

Example:

int number;
float value;

fscanf(file, "%d %f", &number, &value);

If the file contains:

100 85.5

the values are read into the variables.

---

9. Reading Student Data

Suppose the file contains:

101 85.50
102 91.00

Program:

#include <stdio.h>

int main(void)
{
    FILE *file;

    int rollNumber;
    float marks;

    file = fopen("students.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while (fscanf(file, "%d %f", &rollNumber, &marks) == 2)
    {
        printf("Roll Number: %d\\n", rollNumber);
        printf("Marks: %.2f\\n", marks);
    }

    fclose(file);

    return 0;
}

The program reads formatted student records from the file.

---

10. Reading Binary Data

The fread() function is used to read binary data.

Syntax:

fread(pointer, size, count, file);

Example:

fread(&number, sizeof(number), 1, file);

Binary file operations are covered in detail in Lesson 11.

---

11. Choosing the Reading Function

Need one character?
        ↓
fgetc()

Need a line?
        ↓
fgets()

Need formatted values?
        ↓
fscanf()

Need binary data?
        ↓
fread()

---

12. Reading and Displaying a File

A simple file-copy style program can read one character at a time:

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

This prints the complete contents of the file.

---

13. Reading With Different Functions

The appropriate function depends on the data.

Need one character?

    ↓

fgetc()

Need a line?

    ↓

fgets()

Need formatted values?

    ↓

fscanf()

Need binary data?

    ↓

fread()

---

14. Basic Reading Pattern

A typical text-file reading program follows:

Open file
    ↓
Check file
    ↓
Read data
    ↓
Process/display data
    ↓
Close file

Example:

FILE *file = fopen("data.txt", "r");

if (file == NULL)
{
    return 1;
}

/* Read data */

fclose(file);

---

15. Important Points

fgetc(file)
    ↓
Reads one character

fgets(buffer, size, file)
    ↓
Reads a line/string

fscanf(file, format, ...)
    ↓
Reads formatted data

fread()
    ↓
Reads binary data

For fgetc(), use an int variable when testing against EOF.

---

Lesson Summary

C provides several functions for reading data from files.

Character:

fgetc(file);

Line/String:

fgets(line, sizeof(line), file);

Formatted Data:

fscanf(file, "%d %f", &number, &value);

The file should first be opened in a reading-compatible mode, usually
"r", and closed after reading:

fclose(file);
`,

  summary:
    "C provides fgetc(), fgets(), fscanf(), and fread() for reading data from files. The appropriate function depends on whether the program needs a character, line, formatted values, or binary data.",

  keyPoints: [
    "fgetc() reads one character.",
    "fgets() reads a line or string.",
    "fscanf() reads formatted data.",
    "fread() reads binary data.",
    "The usual reading mode is 'r'.",
    "fgetc() should normally be stored in an int when checking against EOF.",
    "A file should be closed after reading."
  ],
};

export default lesson6;