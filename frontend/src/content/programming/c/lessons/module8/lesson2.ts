const lesson2 = {
  id: "lesson2",
  title: "Structure Declaration and Definition",

  content: `
Introduction

Before using a structure, we need to understand how it is declared and defined.

The struct keyword is used to create a structure type.

A structure definition describes:

- The name of the structure
- The members it contains
- The data type of each member

---

1. Basic Structure Definition

The general syntax is:

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

The semicolon after the closing } is required.

---

2. Understanding the Definition

Consider:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

Here:

struct
    ↓
Keyword

Student
    ↓
Structure name

name
rollNumber
marks
    ↓
Structure members

---

3. Structure Definition Does Not Create a Variable

This is an important point.

When we write:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

we have defined the structure type.

We have not yet created a student variable.

To create one:

struct Student student1;

Now student1 is a structure variable.

---

4. Creating Multiple Structure Variables

We can create several variables from the same structure.

struct Student student1;
struct Student student2;
struct Student student3;

All three variables have the same structure:

student1
├── name
├── rollNumber
└── marks

student2
├── name
├── rollNumber
└── marks

student3
├── name
├── rollNumber
└── marks

---

5. Declaration Along With Definition

We can declare structure variables at the end of the structure definition.

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
} student1, student2;

Here:

Student
    ↓
Structure type

student1
student2
    ↓
Structure variables

---

6. Structure Variable Declaration

Another common form is:

struct Student student1;

This tells the compiler:

Create a variable named student1 of type struct Student.

We can then work with its individual members.

---

7. Structure Definition With Different Types

A structure can contain many different data types.

struct Employee
{
    int id;
    char name[50];
    float salary;
};

Here:

id
    → int

name
    → char array

salary
    → float

---

8. Example Program

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

The program defines an Employee structure and creates one variable called employee1.

---

9. Structure Variables in a Single Declaration

Multiple variables can be declared together:

struct Student student1, student2, student3;

This is equivalent to:

struct Student student1;
struct Student student2;
struct Student student3;

---

10. Structure Definition Inside a Function

A structure type can also be defined inside a function:

int main(void)
{
    struct Student
    {
        int rollNumber;
        float marks;
    };

    struct Student student1;

    return 0;
}

However, this structure definition is limited to that scope.

For structures that need to be used throughout a program, the definition is commonly placed outside functions.

---

11. Structure Definition Outside Functions

A common style is:

#include <stdio.h>

struct Student
{
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1;

    return 0;
}

The structure can then be used by functions defined later in the same source file.

---

12. Structure Naming

Structure names should clearly describe the type of data being represented.

Good examples:

struct Student
struct Employee
struct Product
struct Book
struct Account

Clear names make programs easier to understand.

---

13. Structure With Character Arrays

Strings are commonly stored inside structures using character arrays.

struct Student
{
    char name[50];
    int rollNumber;
};

The name member can store a string.

---

14. Structure With Another Structure Type

A structure can contain another structure type as a member.

For example:

struct Date
{
    int day;
    int month;
    int year;
};

struct Student
{
    char name[50];
    struct Date birthDate;
};

This is called a nested structure and will be covered in more detail later.

---

15. Important Points

Structure definition
    ↓
Describes the structure type

Structure variable
    ↓
Actual variable created from that type

struct Student
    ↓
Structure type

struct Student student1;
    ↓
Structure variable

Remember the semicolon:

struct Student
{
    int rollNumber;
    float marks;
};

The ; after } is required.

---

Lesson Summary

A structure is defined using the struct keyword:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

A variable is then created using:

struct Student student1;

The definition describes the structure, while the structure variable represents an actual record.
`,

  summary:
    "Structure declaration and definition describe a structure type and allow variables to be created from that type.",

  keyPoints: [
    "The struct keyword is used to define a structure.",
    "A structure definition describes its name and members.",
    "The structure definition does not itself create a variable.",
    "Structure variables are created using the structure type.",
    "Multiple structure variables can be declared.",
    "A structure can be defined inside or outside a function.",
    "The semicolon after the closing brace of a structure definition is required.",
    "A structure can contain character arrays and another structure type.",
  ],
};

export default lesson2;