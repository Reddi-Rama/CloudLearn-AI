const lesson12 = {
  id: "lesson12",
  title: "Random Access in Files",

  content: `
Introduction

Normally, when reading or writing a file, operations happen
sequentially from the current file position.

Random access allows a program to move the file position to a
particular location and then read or write data there.

The main functions are:

fseek()
    → Move the file position

ftell()
    → Find the current position

rewind()
    → Move back to the beginning

---

1. Sequential Access vs Random Access

Sequential Access

Data is processed in order:

Start
    ↓
Record 1
    ↓
Record 2
    ↓
Record 3
    ↓
Record 4

Random Access

The program can move directly to a desired position.

For example, it can move from one position directly to another
record without processing every record before it.

This is useful when a program needs to access a particular record
without processing every record before it.

---

2. fseek() Function

The fseek() function changes the current file position.

Syntax:

fseek(file, offset, origin);

The three arguments are:

file
    ↓
File pointer

offset
    ↓
Number of bytes to move

origin
    ↓
Starting reference position

---

3. File Position Origins

C provides three standard origins:

SEEK_SET
    ↓
Beginning of file

SEEK_CUR
    ↓
Current position

SEEK_END
    ↓
End of file

---

4. Moving to the Beginning

To move to the beginning:

fseek(file, 0, SEEK_SET);

This sets the file position to the beginning.

---

5. Moving Forward

We can move a specified number of bytes from the beginning.

Example:

fseek(file, 10, SEEK_SET);

This positions the stream at an offset of 10 bytes from the
beginning, subject to the rules of the stream and file mode.

---

6. Moving Relative to the Current Position

We can use:

fseek(file, 5, SEEK_CUR);

This moves the position forward by 5 bytes from the current position.

A negative offset can move backward where supported:

fseek(file, -5, SEEK_CUR);

---

7. Moving to the End

To move to the end of the file:

fseek(file, 0, SEEK_END);

This moves the file position to the end.

---

8. ftell() Function

The ftell() function returns the current file position.

Syntax:

long position;

position = ftell(file);

The returned value represents the current position in the stream.

---

9. Example Using ftell()

#include <stdio.h>

int main(void)
{
    FILE *file;
    long position;

    file = fopen("data.txt", "r");

    if (file == NULL)
    {
        return 1;
    }

    position = ftell(file);

    printf("Position: %ld\\n", position);

    fclose(file);

    return 0;
}

At the beginning of the file, the position is normally 0.

---

10. Moving and Checking the Position

A program can combine fseek() and ftell().

Example:

fseek(file, 10, SEEK_SET);

long position = ftell(file);

printf("Position: %ld\\n", position);

This moves to the specified position and then obtains the current
position.

---

11. rewind() Function

The rewind() function moves the file position back to the beginning.

Syntax:

rewind(file);

It is equivalent to moving to the beginning with fseek() while also
clearing the stream's error and end-of-file indicators.

---

12. Example Using rewind()

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

    printf("First read: %c\\n", ch);

    rewind(file);

    ch = fgetc(file);

    printf("After rewind: %c\\n", ch);

    fclose(file);

    return 0;
}

If the file starts with H, output is:

First read: H
After rewind: H

---

13. Random Access With Binary Records

Random access is especially useful with fixed-size binary records.

Suppose:

typedef struct
{
    int rollNumber;
    float marks;
} Student;

If the file contains several Student records, we can calculate the
position of a particular record.

For record number n:

(n - 1) * sizeof(Student)

can be used as an offset for a fixed-size binary record layout.

---

14. Example — Accessing a Specific Record

#include <stdio.h>

typedef struct
{
    int rollNumber;
    float marks;
} Student;

int main(void)
{
    FILE *file;
    Student student;
    int recordNumber = 3;

    file = fopen("students.dat", "rb");

    if (file == NULL)
    {
        return 1;
    }

    if (fseek(
            file,
            (recordNumber - 1) * sizeof(Student),
            SEEK_SET
        ) != 0)
    {
        fclose(file);
        return 1;
    }

    if (fread(
            &student,
            sizeof(Student),
            1,
            file
        ) == 1)
    {
        printf("Roll Number: %d\\n", student.rollNumber);
        printf("Marks: %.2f\\n", student.marks);
    }

    fclose(file);

    return 0;
}

This allows the program to jump directly to the third record rather
than reading the first two records into memory first.

---

15. Important Points

fseek()
    ↓
Move file position

ftell()
    ↓
Get current position

rewind()
    ↓
Return to beginning

SEEK_SET
    ↓
Beginning

SEEK_CUR
    ↓
Current position

SEEK_END
    ↓
End

---

Lesson Summary

Random access allows a C program to change the current file position.

The important functions are:

fseek()
ftell()
rewind()

For example:

fseek(file, 0, SEEK_SET);

moves to the beginning, while:

fseek(file, 0, SEEK_END);

moves to the end.

Random access is especially useful when working with fixed-size
binary records, because a particular record can be located directly
using its offset.
`,

  summary:
    "Random access allows a C program to move the file position using fseek(), determine the current position using ftell(), and return to the beginning using rewind().",

  keyPoints: [
    "fseek() changes the current file position.",
    "ftell() returns the current file position.",
    "rewind() moves the file position back to the beginning.",
    "SEEK_SET represents the beginning of the file.",
    "SEEK_CUR represents the current position.",
    "SEEK_END represents the end of the file.",
    "Random access is especially useful with fixed-size binary records."
  ],
};

export default lesson12;