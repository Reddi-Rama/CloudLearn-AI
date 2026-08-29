const lesson6 = {
  id: "lesson6",
  title: "Nested Structures",

  content: `
Introduction

A structure can contain another structure as one of its members.

When one structure is used inside another structure, it is called a nested structure.

This is useful when a record contains another group of related information.

For example, a student may have:

Student

├── Name
├── Roll Number
├── Marks
└── Date of Birth
    ├── Day
    ├── Month
    └── Year

The date can be represented using a separate Date structure.

---

1. Defining the Inner Structure

First define the Date structure:

struct Date
{
    int day;
    int month;
    int year;
};

Then use it inside another structure:

struct Student
{
    char name[50];
    int rollNumber;
    struct Date birthDate;
};

Here birthDate is itself a structure member.

---

2. Creating a Nested Structure Variable

struct Student student1;

Now the structure contains:

student1
│
├── name
├── rollNumber
└── birthDate
    ├── day
    ├── month
    └── year

---

3. Accessing Nested Members

We use two dot operators.

For example:

student1.birthDate.day

This means:

student1
    ↓
birthDate
    ↓
day

Similarly:

student1.birthDate.month

student1.birthDate.year

---

4. Complete Example

#include <stdio.h>

struct Date
{
    int day;
    int month;
    int year;
};

struct Student
{
    char name[50];
    int rollNumber;
    struct Date birthDate;
};

int main(void)
{
    struct Student student1;

    student1.rollNumber = 101;

    student1.birthDate.day = 15;
    student1.birthDate.month = 8;
    student1.birthDate.year = 2005;

    printf("Roll Number: %d\\n",
           student1.rollNumber);

    printf("Date of Birth: %d/%d/%d\\n",
           student1.birthDate.day,
           student1.birthDate.month,
           student1.birthDate.year);

    return 0;
}

Output:

Roll Number: 101
Date of Birth: 15/8/2005

---

5. Initializing a Nested Structure

A nested structure can be initialized during declaration.

struct Student student1 =
{
    "Rahul",
    101,
    {15, 8, 2005}
};

The values correspond to:

name       → Rahul
rollNumber → 101
birthDate  → {15, 8, 2005}

---

6. Designated Initialization

We can also use designated initializers.

struct Student student1 =
{
    .name = "Rahul",
    .rollNumber = 101,
    .birthDate =
    {
        .day = 15,
        .month = 8,
        .year = 2005
    }
};

This clearly shows which value belongs to which member.

---

7. Another Example — Employee

An employee may have an address.

struct Address
{
    char city[50];
    int pinCode;
};

struct Employee
{
    int id;
    char name[50];
    struct Address address;
};

Now:

struct Employee employee1;

contains:

employee1
│
├── id
├── name
└── address
    ├── city
    └── pinCode

---

8. Accessing the Employee Address

We can write:

employee1.address.pinCode

and:

employee1.address.city

Example:

employee1.address.pinCode = 532001;

---

9. Nested Structure Example

#include <stdio.h>
#include <string.h>

struct Address
{
    char city[50];
    int pinCode;
};

struct Employee
{
    int id;
    char name[50];
    struct Address address;
};

int main(void)
{
    struct Employee employee1;

    employee1.id = 101;

    strcpy(employee1.name, "Rahul");

    strcpy(employee1.address.city, "Chennai");

    employee1.address.pinCode = 600001;

    printf("ID: %d\\n", employee1.id);
    printf("Name: %s\\n", employee1.name);
    printf("City: %s\\n", employee1.address.city);
    printf("PIN Code: %d\\n",
           employee1.address.pinCode);

    return 0;
}

---

10. Array of Nested Structures

We can also create an array of structures containing nested structures.

struct Date
{
    int day;
    int month;
    int year;
};

struct Student
{
    char name[50];
    int rollNumber;
    struct Date birthDate;
};

struct Student students[3];

Now every student has its own birthDate.

For example:

students[0].birthDate.year

accesses the year of the first student's birth date.

---

11. Nested Structures and Functions

A nested structure can be passed to a function just like other structures.

#include <stdio.h>

struct Date
{
    int day;
    int month;
    int year;
};

void displayDate(struct Date date)
{
    printf("%d/%d/%d\\n",
           date.day,
           date.month,
           date.year);
}

int main(void)
{
    struct Date date = {15, 8, 2005};

    displayDate(date);

    return 0;
}

Output:

15/8/2005

---

12. Structure Containing Another Structure

Nested structures are useful when information naturally belongs to smaller groups.

For example:

Employee

│
├── Personal Information
│   ├── Name
│   └── Age
│
└── Address
    ├── City
    └── PIN

This makes complex records easier to organize.

---

13. More Than One Nested Structure

A structure can contain multiple structure members.

struct Date
{
    int day;
    int month;
    int year;
};

struct Address
{
    char city[50];
    int pinCode;
};

struct Student
{
    char name[50];
    int rollNumber;
    struct Date birthDate;
    struct Address address;
};

Now one Student contains both:

Date

Address

along with its own members.

---

14. Practical Example — Student Record

#include <stdio.h>

struct Date
{
    int day;
    int month;
    int year;
};

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
    struct Date birthDate;
};

int main(void)
{
    struct Student student =
    {
        "Rahul",
        101,
        85.5f,
        {15, 8, 2005}
    };

    printf("Name: %s\\n", student.name);

    printf("Roll Number: %d\\n",
           student.rollNumber);

    printf("Marks: %.2f\\n",
           student.marks);

    printf("Date of Birth: %d/%d/%d\\n",
           student.birthDate.day,
           student.birthDate.month,
           student.birthDate.year);

    return 0;
}

Output:

Name: Rahul
Roll Number: 101
Marks: 85.50
Date of Birth: 15/8/2005

---

15. Important Points

Nested structure

        ↓

Structure inside another structure

Access:

student.birthDate.day

First .:

student → birthDate

Second .:

birthDate → day

Nested structures are useful for organizing complex information into logical groups.

---

Lesson Summary

A nested structure is a structure that contains another structure as one of its members.

Example:

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

The nested member is accessed using:

student.birthDate.day
student.birthDate.month
student.birthDate.year

Nested structures are useful for representing complex records such as students with addresses, employees with personal information, products with manufacturing details, and many other real-world entities.
`,

  summary:
    "A nested structure is a structure that contains another structure as one of its members.",

  keyPoints: [
    "A structure can contain another structure as a member.",
    "The structure inside another structure is called a nested structure.",
    "Nested members are accessed using multiple dot operators.",
    "For example: student.birthDate.day.",
    "Nested structures can be initialized during declaration.",
    "Designated initializers can be used with nested structures.",
    "A structure can contain multiple nested structures.",
    "Arrays of structures can also contain nested structures.",
    "Nested structures help organize complex information into logical groups.",
  ],
};

export default lesson6;