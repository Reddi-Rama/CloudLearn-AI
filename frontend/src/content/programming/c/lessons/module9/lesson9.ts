const lesson9 = {
  id: "lesson9",
  title: "Formatted File I/O",

  content: `
Introduction

Formatted file I/O allows a C program to write and read structured
data using format specifiers.

The two main functions are:

fprintf()
    → Write formatted data

fscanf()
    → Read formatted data

They work similarly to:

printf()
    → Output to standard output

scanf()
    → Input from standard input

but operate on a specified file stream.

---

1. fprintf() Function

The fprintf() function writes formatted data to a file.

Syntax:

fprintf(file, "format", values);

Example:

fprintf(file, "Age: %d\\n", age);

---

2. Writing Integer Data

#include <stdio.h>

int main(void)
{
    FILE *file;
    int number = 100;

    file = fopen("data.txt", "w");

    if (file == NULL)
    {
        return 1;
    }

    fprintf(file, "%d\\n", number);

    fclose(file);

    return 0;
}

The file contains:

100

---

3. Writing Multiple Data Types

fprintf() can write different types of data.

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

4. Writing Strings With fprintf()

fprintf() can also write strings.

Example:

char name[] = "Student";

fprintf(file, "Name: %s\\n", name);

The file contains:

Name: Student

---

5. Writing Multiple Values

Multiple values can be written using one fprintf() statement.

Example:

int rollNumber = 101;
float marks = 85.5f;

fprintf(file, "%d %.2f\\n", rollNumber, marks);

The file contains:

101 85.50

---

6. fscanf() Function

The fscanf() function reads formatted data from a file.

Syntax:

fscanf(file, "format", &variables);

Example:

int number;
float value;

fscanf(file, "%d %f", &number, &value);

---

7. Reading Integer Data

Suppose data.txt contains:

100

Program:

#include <stdio.h>

int main(void)
{
    FILE *file;
    int number;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    fscanf(file, "%d", &number);

    printf("Number: %d\\n", number);

    fclose(file);

    return 0;
}

Output:

Number: 100

---

8. Reading Multiple Data Types

Suppose student.txt contains:

101 85.50

Program:

#include <stdio.h>

int main(void)
{
    FILE *file;

    int rollNumber;
    float marks;

    file = fopen("student.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    fscanf(file, "%d %f", &rollNumber, &marks);

    printf("Roll Number: %d\\n", rollNumber);
    printf("Marks: %.2f\\n", marks);

    fclose(file);

    return 0;
}

Output:

Roll Number: 101
Marks: 85.50

---

9. Reading Multiple Records

Suppose the file contains:

101 Rahul 85.50
102 Kiran 91.00

Program:

#include <stdio.h>

int main(void)
{
    FILE *file;

    int rollNumber;
    char name[50];
    float marks;

    file = fopen("students.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    while (fscanf(file, "%d %49s %f",
                  &rollNumber, name, &marks) == 3)
    {
        printf("Roll Number: %d\\n", rollNumber);
        printf("Name: %s\\n", name);
        printf("Marks: %.2f\\n", marks);
    }

    fclose(file);

    return 0;
}

---

10. Format Specifiers

Common format specifiers include:

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

fprintf(file, "%d %s %.2f\\n", rollNumber, name, marks);

---

11. fprintf() vs printf()

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

12. fscanf() vs scanf()

scanf()
    ↓
Reads formatted input from standard input

fscanf()
    ↓
Reads formatted input from a specified file stream

Example:

scanf("%d", &number);

reads from standard input.

While:

fscanf(file, "%d", &number);

reads from the file.

---

13. Checking Formatted Operations

The return value of fscanf() can be checked.

For example:

if (fscanf(file, "%d", &number) == 1)
{
    printf("Data read successfully.\\n");
}

For multiple values:

if (fscanf(file, "%d %f", &number, &value) == 2)
{
    printf("Both values were read.\\n");
}

---

14. Formatted File Processing

Formatted file I/O is useful for structured records.

For example:

Student Record

Roll Number
Name
Marks

The data can be stored using:

fprintf(file, "%d %s %.2f\\n",
        rollNumber, name, marks);

and read using:

fscanf(file, "%d %s %f",
       &rollNumber, name, &marks);

---

15. Important Points

fprintf()
    ↓
Write formatted data

fscanf()
    ↓
Read formatted data

printf()
    ↓
Standard output

scanf()
    ↓
Standard input

fprintf() and fscanf()
    ↓
Specified file stream

---

Lesson Summary

Formatted file I/O allows a C program to write and read structured data
using format specifiers.

Writing:

fprintf(file, "Marks: %.2f\\n", marks);

Reading:

fscanf(file, "%d %f", &number, &value);

fprintf() is used for formatted output to a file and fscanf() is used
for formatted input from a file.
`,

  summary:
    "Formatted file I/O uses fprintf() to write structured data and fscanf() to read formatted data from a file.",

  keyPoints: [
    "fprintf() writes formatted data to a file.",
    "fscanf() reads formatted data from a file.",
    "fprintf() is similar to printf(), but writes to a specified stream.",
    "fscanf() is similar to scanf(), but reads from a specified stream.",
    "Format specifiers such as %d, %f, %c, and %s are used.",
    "The return value of fscanf() can be checked to determine how many values were successfully read."
  ],
};

export default lesson9;