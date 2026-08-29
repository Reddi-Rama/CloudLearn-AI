const lesson11 = {
  id: "lesson11",
  title: "Binary Files",

  content: `
Introduction

Binary files store data in a binary representation rather than as
human-readable text.

C provides two important functions for binary file operations:

fread()
    → Read binary data

fwrite()
    → Write binary data

Binary files are useful when storing data such as structures or other
blocks of bytes.

---

1. Text Files vs Binary Files

Text File

Data is stored as characters.

For example, the number:

100

is represented as text characters:

'1' '0' '0'

Binary File

The value is stored in its binary representation.

Conceptually:

Text file
100 → characters '1' '0' '0'

Binary file
100 → binary representation of the integer

---

2. Opening a Binary File

Binary mode uses b in the file mode.

Example:

FILE *file;

file = fopen("data.bin", "wb");

Common binary modes include:

"rb"
    → Read binary

"wb"
    → Write binary

"ab"
    → Append binary

"rb+"
    → Read and write binary

"wb+"
    → Read and write binary, replacing existing contents

"ab+"
    → Read and append binary

---

3. Writing Binary Data With fwrite()

The basic syntax is:

fwrite(pointer, size, count, file);

The arguments represent:

pointer
    ↓
Address of data

size
    ↓
Size of each item

count
    ↓
Number of items

file
    ↓
File pointer

---

4. Writing an Integer

#include <stdio.h>

int main(void)
{
    FILE *file;
    int number = 100;

    file = fopen("data.bin", "wb");

    if (file == NULL)
    {
        return 1;
    }

    fwrite(&number, sizeof(number), 1, file);

    fclose(file);

    return 0;
}

The integer is written to the binary file using its in-memory
representation.

---

5. Reading Binary Data With fread()

The basic syntax is:

fread(pointer, size, count, file);

Example:

#include <stdio.h>

int main(void)
{
    FILE *file;
    int number;

    file = fopen("data.bin", "rb");

    if (file == NULL)
    {
        return 1;
    }

    if (fread(&number, sizeof(number), 1, file) == 1)
    {
        printf("Number: %d\\n", number);
    }

    fclose(file);

    return 0;
}

Output:

Number: 100

---

6. Writing a Structure to a Binary File

Binary files are particularly useful for storing structures.

Example:

#include <stdio.h>

typedef struct
{
    int rollNumber;
    float marks;
} Student;

int main(void)
{
    Student student =
    {
        101,
        85.5f
    };

    FILE *file;

    file = fopen("student.dat", "wb");

    if (file == NULL)
    {
        return 1;
    }

    fwrite(
        &student,
        sizeof(Student),
        1,
        file
    );

    fclose(file);

    return 0;
}

---

7. Reading a Structure From a Binary File

#include <stdio.h>

typedef struct
{
    int rollNumber;
    float marks;
} Student;

int main(void)
{
    Student student;
    FILE *file;

    file = fopen("student.dat", "rb");

    if (file == NULL)
    {
        return 1;
    }

    if (fread(&student, sizeof(Student), 1, file) == 1)
    {
        printf("Roll Number: %d\\n", student.rollNumber);
        printf("Marks: %.2f\\n", student.marks);
    }

    fclose(file);

    return 0;
}

---

8. Writing Multiple Records

A binary file can contain multiple records.

Example:

Student students[3] =
{
    {101, 85.5f},
    {102, 91.0f},
    {103, 76.5f}
};

The array can be written using:

fwrite(
    students,
    sizeof(Student),
    3,
    file
);

This writes three Student records.

---

9. Reading Multiple Records

Multiple records can be read using fread().

Example:

Student students[3];

fread(
    students,
    sizeof(Student),
    3,
    file
);

The data is read into the array.

---

10. Checking fread()

fread() returns the number of complete items successfully read.

Example:

if (fread(&student, sizeof(Student), 1, file) == 1)
{
    printf("Record read successfully.\\n");
}

The return value should be checked when reading binary data.

---

11. Checking fwrite()

fwrite() returns the number of complete items successfully written.

Example:

if (fwrite(&student, sizeof(Student), 1, file) == 1)
{
    printf("Record written successfully.\\n");
}

This allows the program to detect a failed write operation.

---

12. Binary File Example

#include <stdio.h>

typedef struct
{
    int id;
    float price;
} Product;

int main(void)
{
    Product product =
    {
        101,
        2500.50f
    };

    FILE *file;

    file = fopen("product.dat", "wb");

    if (file == NULL)
    {
        return 1;
    }

    if (fwrite(&product, sizeof(Product), 1, file) == 1)
    {
        printf("Product saved.\\n");
    }

    fclose(file);

    return 0;
}

Output:

Product saved.

---

13. Important Portability Consideration

Writing a C structure directly to a binary file is convenient, but
the resulting file can depend on the implementation.

Differences can arise from:

Structure padding

Alignment

Size of data types

Byte order

Therefore, binary files containing raw C structures are not
automatically portable across all systems or program versions.

---

14. Practical Binary File Flow

Create data
    ↓
Open binary file
    ↓
fwrite()
    ↓
Close file

Later:

Open binary file
    ↓
fread()
    ↓
Process data
    ↓
Close file

---

15. Important Points

Binary file
    ↓
Stores binary representation of data

fwrite()
    ↓
Write binary data

fread()
    ↓
Read binary data

"rb"
    ↓
Read binary

"wb"
    ↓
Write binary

"ab"
    ↓
Append binary

---

Lesson Summary

Binary files store data in a binary representation rather than a
human-readable text format.

The main functions are:

fwrite()

fread()

Writing:

fwrite(
    &student,
    sizeof(Student),
    1,
    file
);

Reading:

fread(
    &student,
    sizeof(Student),
    1,
    file
);

Binary files are particularly useful when a program needs to store
and retrieve blocks of structured data efficiently.
`,

  summary:
    "Binary files store data in binary representation and use fwrite() for writing and fread() for reading.",

  keyPoints: [
    "Binary files store data in binary representation.",
    "Use rb to read binary data.",
    "Use wb to write binary data.",
    "Use ab to append binary data.",
    "fwrite() writes binary data.",
    "fread() reads binary data.",
    "Binary files are useful for storing structures and blocks of data.",
    "The return values of fread() and fwrite() should be checked."
  ],
};

export default lesson11;