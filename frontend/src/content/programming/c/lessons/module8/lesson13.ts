const lesson13 = {
  id: "lesson13",
  title: "typedef with Structures",

  content: `
Introduction

The typedef keyword is used to create an alternative name (alias) for an existing data type.

With structures, typedef can make declarations shorter and easier to read.

Without typedef:

struct Student student1;

With typedef:

Student student1;

This is especially useful when structures are used frequently in a program.

---

1. Basic typedef Syntax

The general syntax is:

typedef existing_type new_name;

For example:

typedef int Number;

Now:

Number age = 20;

is equivalent to:

int age = 20;

---

2. typedef With a Structure

Consider:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

Normally, we declare a variable using:

struct Student student1;

With typedef:

typedef struct
{
    char name[50];
    int rollNumber;
    float marks;
} Student;

Now we can write:

Student student1;

---

3. Complete Example

#include <stdio.h>

typedef struct
{
    char name[50];
    int rollNumber;
    float marks;
} Student;

int main(void)
{
    Student student1 =
    {
        "Rahul",
        101,
        85.5f
    };

    printf("Name: %s\\n", student1.name);
    printf("Roll Number: %d\\n", student1.rollNumber);
    printf("Marks: %.2f\\n", student1.marks);

    return 0;
}

Output:

Name: Rahul
Roll Number: 101
Marks: 85.50

---

4. typedef With a Named Structure

We can also keep the structure name:

typedef struct Student
{
    char name[50];
    int rollNumber;
    float marks;
} Student;

Now both of these refer to the same structure type:

struct Student student1;

and:

Student student2;

The second form is shorter.

---

5. Multiple Structure Variables

Once the alias is created:

typedef struct
{
    int id;
    float salary;
} Employee;

we can declare:

Employee employee1;
Employee employee2;
Employee employee3;

There is no need to repeatedly write:

struct Employee

---

6. typedef With Pointers

A structure alias can also be used with pointers.

typedef struct
{
    int id;
    float salary;
} Employee;

Now:

Employee employee;
Employee *ptr = &employee;

Members can be accessed using:

ptr->salary

---

7. typedef With Functions

It is also useful when passing structures to functions.

typedef struct
{
    int rollNumber;
    float marks;
} Student;

void displayStudent(Student student)
{
    printf("%d %.2f\\n",
           student.rollNumber,
           student.marks);
}

The function declaration becomes simpler and easier to read.

---

8. typedef With Arrays of Structures

We can create an array easily:

Student students[50];

instead of:

struct Student students[50];

This becomes especially convenient in larger programs.

---

9. Practical Example

#include <stdio.h>

typedef struct
{
    int id;
    char name[50];
    float salary;
} Employee;

void displayEmployee(Employee employee)
{
    printf("ID: %d\\n", employee.id);
    printf("Name: %s\\n", employee.name);
    printf("Salary: %.2f\\n", employee.salary);
}

int main(void)
{
    Employee employee =
    {
        101,
        "Rahul",
        35000.0f
    };

    displayEmployee(employee);

    return 0;
}

Output:

ID: 101
Name: Rahul
Salary: 35000.00

---

10. Why Use typedef?

typedef provides:

- Shorter declarations
- Better readability
- Cleaner function definitions
- Convenient structure aliases
- Easier-to-read programs

It does not create a completely new underlying type; it creates another name for an existing type.

---

11. Important Points

Without typedef:

struct Student student1;

With typedef:

typedef struct
{
    ...
} Student;

Student student1;

For pointers:

Student *ptr;

For arrays:

Student students[100];

---

Lesson Summary

typedef allows us to create a convenient alias for a structure.

Example:

typedef struct
{
    char name[50];
    int rollNumber;
    float marks;
} Student;

Now we can simply write:

Student student1;

instead of:

struct Student student1;
`,

  summary:
    "typedef creates a convenient alias for a structure, making declarations shorter and easier to read.",

  keyPoints: [
    "typedef creates an alternative name or alias for an existing data type.",
    "typedef can make structure declarations shorter.",
    "A structure alias can be used for variables, pointers, arrays, and functions.",
    "typedef improves readability.",
    "typedef does not create a completely new underlying type.",
    "Student student1; is shorter than struct Student student1;."
  ],
};

export default lesson13;