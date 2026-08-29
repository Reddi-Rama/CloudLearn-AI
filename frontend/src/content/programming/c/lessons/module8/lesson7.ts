const lesson7 = {
  id: "lesson7",
  title: "Structures and Functions",

  content: `
Introduction

Structures can be passed to functions just like other variables.

A structure can be:

- Passed to a function by value
- Passed using a pointer
- Returned from a function

Using functions with structures helps divide a large program into smaller and easier-to-manage parts.

---

1. Passing a Structure to a Function

Consider:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

We can pass a structure variable to a function:

displayStudent(student1);

The function can receive it as:

void displayStudent(struct Student student)

---

2. Example

#include <stdio.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

void displayStudent(struct Student student)
{
    printf("Name: %s\\n", student.name);
    printf("Roll Number: %d\\n", student.rollNumber);
    printf("Marks: %.2f\\n", student.marks);
}

int main(void)
{
    struct Student student1 =
    {
        "Rahul",
        101,
        85.5f
    };

    displayStudent(student1);

    return 0;
}

Output:

Name: Rahul
Roll Number: 101
Marks: 85.50

---

3. Structure Passed by Value

In the previous example, the structure is passed by value.

displayStudent(student1);

The function receives a copy of the structure.

Changes made to the parameter do not change the original structure.

---

4. Modifying a Structure Through a Function

If we want a function to modify the original structure, we can pass its address.

void updateMarks(struct Student *student)
{
    student->marks = 95.0f;
}

Call it using:

updateMarks(&student1);

---

5. Example With a Structure Pointer

#include <stdio.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

void updateMarks(struct Student *student)
{
    student->marks = 95.0f;
}

int main(void)
{
    struct Student student1 =
    {
        "Rahul",
        101,
        85.5f
    };

    updateMarks(&student1);

    printf("Marks: %.2f\\n", student1.marks);

    return 0;
}

Output:

Marks: 95.00

---

6. Passing an Array of Structures

An array of structures can also be passed to a function.

void displayStudents(struct Student students[], int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%s - %.2f\\n",
               students[i].name,
               students[i].marks);
    }
}

Call:

displayStudents(students, 3);

---

7. Returning a Structure From a Function

A function can return a structure.

struct Student createStudent(void)
{
    struct Student student =
    {
        "Rahul",
        101,
        85.5f
    };

    return student;
}

Then:

struct Student student1 = createStudent();

The returned structure is assigned to student1.

---

8. Complete Example

#include <stdio.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

struct Student createStudent(void)
{
    struct Student student =
    {
        "Rahul",
        101,
        85.5f
    };

    return student;
}

int main(void)
{
    struct Student student1;

    student1 = createStudent();

    printf("Name: %s\\n", student1.name);
    printf("Roll Number: %d\\n", student1.rollNumber);
    printf("Marks: %.2f\\n", student1.marks);

    return 0;
}

---

9. Why Use Functions With Structures?

This combination is useful for:

- Reading records
- Displaying records
- Updating records
- Searching records
- Sorting records
- Calculating results
- Creating records

For example:

main()
    ↓
readStudent()
    ↓
updateStudent()
    ↓
displayStudent()

This keeps the program organized.

---

10. Important Points

Pass structure by value:

    function(student);

Pass structure by address:

    function(&student);

Structure pointer parameter:

    struct Student *student

Access through pointer:

    student->marks

---

Lesson Summary

Structures can be used with functions in several ways.

A structure can be passed by value:

displayStudent(student1);

or by address:

updateStudent(&student1);

Passing a pointer is especially useful when the function needs to modify the original structure.
`,

  summary:
    "Structures can be passed to functions by value, passed using a pointer, or returned from a function.",

  keyPoints: [
    "A structure can be passed to a function by value.",
    "A structure can be passed to a function using a pointer.",
    "A function can return a structure.",
    "Passing a structure by value gives the function a copy.",
    "Passing a pointer allows the function to modify the original structure.",
    "An array of structures can also be passed to a function.",
    "Functions help divide a large program into smaller and easier-to-manage parts.",
  ],
};

export default lesson7;