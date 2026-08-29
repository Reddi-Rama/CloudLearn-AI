const lesson5 = {
  id: "lesson5",
  title: "Array of Structures",

  content: `
Introduction

An array of structures allows a program to store multiple records of the same structure type.

For example, instead of creating separate structure variables for many students, we can create an array of Student structures.

---

1. Declaring an Array of Structures

The general syntax is:

struct Student students[3];

This creates an array containing three Student structures.

Each element of the array is a complete structure.

---

2. Example

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

struct Student students[3];

Here:

students[0] → first Student structure
students[1] → second Student structure
students[2] → third Student structure

---

3. Initializing an Array of Structures

An array of structures can be initialized during declaration.

struct Student students[3] =
{
    {"Rahul", 101, 85.5f},
    {"Kiran", 102, 91.0f},
    {"Anil", 103, 76.5f}
};

Each set of values represents one structure.

---

4. Accessing Elements

Individual structure elements are accessed using the array index.

For example:

students[0]

represents the first structure.

To access a member:

students[0].rollNumber

students[1].marks

students[2].name

The array index selects the structure, and the dot operator selects the member.

---

5. Example Program

#include <stdio.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student students[3] =
    {
        {"Rahul", 101, 85.5f},
        {"Kiran", 102, 91.0f},
        {"Anil", 103, 76.5f}
    };

    for (int i = 0; i < 3; i++)
    {
        printf("Name: %s\\n", students[i].name);
        printf("Roll Number: %d\\n", students[i].rollNumber);
        printf("Marks: %.2f\\n\\n", students[i].marks);
    }

    return 0;
}

---

6. Reading Array of Structures

We can also read values into each structure using a loop.

Example:

for (int i = 0; i < 3; i++)
{
    printf("Enter roll number: ");
    scanf("%d", &students[i].rollNumber);

    printf("Enter marks: ");
    scanf("%f", &students[i].marks);
}

The index i identifies which structure is being modified.

---

7. Accessing Members Using a Loop

Consider:

for (int i = 0; i < 3; i++)
{
    printf("%d\\n", students[i].rollNumber);
}

Here:

students[i]

represents one Student structure.

students[i].rollNumber

represents the rollNumber member of that structure.

---

8. Modifying an Array Element

Individual members can be modified.

For example:

students[1].marks = 95.0f;

This changes the marks of the second student.

---

9. Searching an Array of Structures

An array of structures can be searched using a loop.

For example:

int searchRoll = 102;

for (int i = 0; i < 3; i++)
{
    if (students[i].rollNumber == searchRoll)
    {
        printf("Student Found\\n");
        printf("Name: %s\\n", students[i].name);
        printf("Marks: %.2f\\n", students[i].marks);
    }
}

The loop checks each structure until a matching record is found.

---

10. Calculating Data From Structures

We can perform calculations using structure members.

For example:

float total = 0;

for (int i = 0; i < 3; i++)
{
    total += students[i].marks;
}

The marks of all students are added together.

---

11. Displaying Employee Records

Arrays of structures are not limited to students.

For example:

struct Employee
{
    int id;
    char name[50];
    float salary;
};

struct Employee employees[3] =
{
    {101, "Rahul", 35000.0f},
    {102, "Kiran", 42000.0f},
    {103, "Anil", 38000.0f}
};

The records can be displayed using a loop.

---

12. Complete Employee Example

#include <stdio.h>

struct Employee
{
    int id;
    char name[50];
    float salary;
};

int main(void)
{
    struct Employee employees[3] =
    {
        {101, "Rahul", 35000.0f},
        {102, "Kiran", 42000.0f},
        {103, "Anil", 38000.0f}
    };

    for (int i = 0; i < 3; i++)
    {
        printf("ID: %d\\n", employees[i].id);
        printf("Name: %s\\n", employees[i].name);
        printf("Salary: %.2f\\n\\n", employees[i].salary);
    }

    return 0;
}

---

13. Array Size

The number of elements can be determined using:

sizeof(students) / sizeof(students[0])

Example:

size_t count =
sizeof(students) / sizeof(students[0]);

This is useful when the array size is known at compile time.

---

14. Important Difference

A single structure variable:

struct Student student;

stores one record.

An array of structures:

struct Student students[100];

stores 100 records.

Conceptually:

students
│
├── [0] → Student
├── [1] → Student
├── [2] → Student
├── ...
└── [99] → Student

---

15. Important Points

struct Student students[3];

        ↓

Array containing 3 Student structures

students[i]

        ↓

One structure

students[i].marks

        ↓

One member of that structure

for loop

        ↓

Process multiple records

---

Lesson Summary

An array of structures allows a program to store multiple records of the same structure type.

Example:

struct Student students[3] =
{
    {"Rahul", 101, 85.5f},
    {"Kiran", 102, 91.0f},
    {"Anil", 103, 76.5f}
};

Members are accessed using:

students[i].member

This is commonly used for student records, employee records, product lists, customer data, and many other applications.
`,

  summary:
    "An array of structures allows a program to store multiple records of the same structure type.",

  keyPoints: [
    "An array of structures stores multiple records of the same structure type.",
    "Each array element is a complete structure.",
    "The array index selects a structure.",
    "The dot operator selects a member.",
    "Members are accessed using students[i].member.",
    "Loops can be used to process multiple records.",
    "Arrays of structures can be searched and modified.",
    "The size can be determined using sizeof(students) / sizeof(students[0]).",
  ],
};

export default lesson5;