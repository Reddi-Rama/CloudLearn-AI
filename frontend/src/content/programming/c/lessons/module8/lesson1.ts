const lesson1 = {
  id: "lesson1",
  title: "Introduction to Structures",

  content: `
Introduction

A structure is a user-defined data type in C that allows us to group different types of related data under a single name.

For example, information about a student may contain:

Name        → string
Roll Number → integer
Marks       → float

These are different data types, but they all describe one student.

A structure allows us to keep them together.

---

1. Why Do We Need Structures?

Suppose we want to store information about a student.

Without a structure, we might write:

char name[50];
int rollNumber;
float marks;

For one student, this is manageable.

But suppose we need to store information about 100 students.

We would need to manage:

100 names
100 roll numbers
100 marks

Structures make this much easier by combining the related information into one record.

---

2. Basic Structure Example

A structure can be defined using the struct keyword:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

Here:

struct      → keyword
Student     → structure name
name        → structure member
rollNumber  → structure member
marks       → structure member

---

3. Structure Members

The variables declared inside a structure are called members.

For example:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

The members are:

name
rollNumber
marks

Each member can have a different data type.

---

4. Creating a Structure Variable

Defining a structure does not itself create a student record.

We need to create a variable of that structure type.

struct Student student1;

Now student1 can store:

Name
Roll Number
Marks

---

5. Structure Variable Example

#include <stdio.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1;

    return 0;
}

Here:

struct Student
        ↓
Structure type

student1
        ↓
Structure variable

---

6. Structure as a Record

A structure can be thought of as a single record containing related information.

For example:

Student
│
├── Name
├── Roll Number
└── Marks

One structure variable represents one student record.

student1
│
├── name
├── rollNumber
└── marks

---

7. Different Data Types in One Structure

One of the main advantages of structures is that members can have different types.

Example:

struct Employee
{
    int id;
    char name[50];
    float salary;
};

Here:

id     → int
name   → char array
salary → float

All three belong to the same Employee structure.

---

8. Example — Employee Structure

#include <stdio.h>

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main(void)
{
    struct Employee employee1;

    return 0;
}

Now employee1 represents one employee record.

---

9. Structure With Multiple Variables

We can create multiple variables of the same structure type.

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1;
    struct Student student2;
    struct Student student3;

    return 0;
}

Each variable has its own members.

student1 → name, rollNumber, marks
student2 → name, rollNumber, marks
student3 → name, rollNumber, marks

---

10. Structure Definition and Variable Declaration Together

A structure variable can also be declared immediately after the structure definition.

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
} student1;

Here, student1 is declared as a structure variable.

However, keeping the structure definition separate is often clearer:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

struct Student student1;

---

11. Structure Example

#include <stdio.h>

struct Book
{
    char title[100];
    char author[50];
    float price;
};

int main(void)
{
    struct Book book1;

    return 0;
}

The structure represents one book.

It contains:

Title
Author
Price

---

12. Structure and Array Difference

An array normally stores elements of the same data type.

For example:

int marks[5];

All elements are integers.

A structure can contain different data types.

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

So:

Array
    ↓
Collection of similar elements

Structure
    ↓
Collection of related members that may have different types

---

13. Structure and Real-World Data

Structures are useful for representing real-world entities.

Examples:

Student
├── name
├── rollNumber
└── marks

Employee
├── id
├── name
└── salary

Book
├── title
├── author
└── price

Product
├── id
├── name
└── price

This makes programs easier to organize.

---

14. Important Points

struct
    ↓
Keyword used to define a structure

Structure name
    ↓
Name of the user-defined type

Members
    ↓
Variables declared inside the structure

Structure variable
    ↓
Variable created from the structure type

Example:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

struct Student student1;

---

Lesson Summary

A structure is a user-defined data type used to group related data, even when the data has different types.

Basic syntax:

struct StructureName
{
    data_type member1;
    data_type member2;
    data_type member3;
};

Example:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

Structures are widely used for representing records and real-world entities in C programs.
`,

  summary:
    "A structure is a user-defined data type used to group related data of different types under one name.",

  keyPoints: [
    "Structures group related data together.",
    "Structure members can have different data types.",
    "The struct keyword is used to define a structure.",
    "A structure definition describes the structure type.",
    "A structure variable represents an actual record.",
    "Structures are useful for representing real-world entities.",
    "Arrays store similar elements, while structures can contain related members of different types.",
  ],
};

export default lesson1;