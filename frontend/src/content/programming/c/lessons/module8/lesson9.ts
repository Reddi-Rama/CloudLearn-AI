const lesson9 = {
  id: "lesson9",
  title: "Dynamic Structures",

  content: `
Introduction

A structure can be created dynamically using dynamic memory allocation.

Instead of deciding the number of structure objects at compile time, memory can be allocated while the program is running.

Pointers are used to access dynamically allocated structures.

The main functions used for dynamic memory allocation are:

malloc()
calloc()
realloc()
free()

---

1. Why Dynamic Structures?

Suppose we need to store student records.

If the number of students is fixed:

struct Student students[100];

But if the number of students is known only while the program is running, dynamic memory can be used.

For example:

User enters number of students
        ↓
Program allocates required memory
        ↓
Student records are stored

---

2. Using malloc()

The malloc() function allocates a block of memory.

Example:

struct Student *student;

student = malloc(sizeof(struct Student));

We should include:

#include <stdlib.h>

---

3. Complete Example

#include <stdio.h>
#include <stdlib.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student *student;

    student = malloc(sizeof(struct Student));

    if (student == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    student->rollNumber = 101;
    student->marks = 85.5f;

    printf("Roll Number: %d\\n",
           student->rollNumber);

    printf("Marks: %.2f\\n",
           student->marks);

    free(student);

    return 0;
}

Output:

Roll Number: 101
Marks: 85.50

---

4. Why Use ->?

The variable:

student

is a pointer to a structure.

Therefore, members are accessed using:

student->rollNumber
student->marks

not:

student.rollNumber

The dot operator is used for a structure variable, while the arrow operator is used for a pointer to a structure.

---

5. Checking malloc()

Memory allocation can fail.

Therefore, after:

student = malloc(sizeof(struct Student));

we should check:

if (student == NULL)
{
    printf("Memory allocation failed.\\n");
    return 1;
}

A NULL result means the allocation was not successful.

---

6. Releasing the Memory

When dynamically allocated memory is no longer required, use:

free(student);

This releases the allocated memory.

A typical pattern is:

malloc()
   ↓
Use memory
   ↓
free()

---

7. Dynamic Array of Structures

We can allocate memory for multiple structures.

Suppose the user enters the number of students:

int n;

printf("Enter number of students: ");
scanf("%d", &n);

Then:

struct Student *students;

students = malloc(n * sizeof(struct Student));

Now students can hold n student structures.

---

8. Example — Dynamic Student Array

#include <stdio.h>
#include <stdlib.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

int main(void)
{
    int n;

    printf("Enter number of students: ");
    scanf("%d", &n);

    struct Student *students =
        malloc(n * sizeof(struct Student));

    if (students == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        printf("Enter roll number: ");
        scanf("%d", &students[i].rollNumber);

        printf("Enter marks: ");
        scanf("%f", &students[i].marks);
    }

    for (int i = 0; i < n; i++)
    {
        printf("\\nRoll Number: %d\\n",
               students[i].rollNumber);

        printf("Marks: %.2f\\n",
               students[i].marks);
    }

    free(students);

    return 0;
}

---

9. Using calloc()

calloc() can also allocate memory for multiple structures.

Example:

struct Student *students;

students = calloc(n, sizeof(struct Student));

Unlike malloc(), calloc() initializes the allocated bytes to zero.

The memory should still be checked before use:

if (students == NULL)
{
    printf("Memory allocation failed.\\n");
    return 1;
}

---

10. malloc() vs calloc()

malloc():

- Allocates a block of memory.
- Takes one size argument.
- Memory is not initialized.
- Syntax:

malloc(size)

Example:

malloc(n * sizeof(struct Student));

calloc():

- Allocates space for multiple elements.
- Takes number of elements and element size.
- Allocated bytes are initialized to zero.
- Syntax:

calloc(count, size)

Example:

calloc(n, sizeof(struct Student));

---

11. Resizing a Dynamic Structure Array

Suppose we initially allocate space for 3 students:

students = malloc(3 * sizeof(struct Student));

Later, we may need space for more students.

realloc() can resize the allocation:

students = realloc(
    students,
    5 * sizeof(struct Student)
);

In production code, the result should be handled carefully so that an allocation failure does not lose the original pointer.

---

12. Dynamic Structure and Functions

A dynamically allocated structure can be passed to a function.

void displayStudent(struct Student *student)
{
    printf("Roll Number: %d\\n",
           student->rollNumber);

    printf("Marks: %.2f\\n",
           student->marks);
}

Call:

displayStudent(student);

Since student is already a pointer, we do not use & here.

---

13. Dynamic Structure Example

#include <stdio.h>
#include <stdlib.h>

struct Student
{
    int rollNumber;
    float marks;
};

void displayStudent(struct Student *student)
{
    printf("Roll Number: %d\\n",
           student->rollNumber);

    printf("Marks: %.2f\\n",
           student->marks);
}

int main(void)
{
    struct Student *student;

    student = malloc(sizeof(struct Student));

    if (student == NULL)
    {
        return 1;
    }

    student->rollNumber = 101;
    student->marks = 90.0f;

    displayStudent(student);

    free(student);

    return 0;
}

Output:

Roll Number: 101
Marks: 90.00

---

14. Important Memory Rules

When using dynamically allocated structures:

Allocate
   ↓
Check allocation
   ↓
Use the memory
   ↓
Free the memory

For example:

struct Student *student;

student = malloc(sizeof(struct Student));

if (student != NULL)
{
    student->marks = 90.0f;

    free(student);
}

After free(student), the pointer should not be dereferenced.

A common practice is:

free(student);
student = NULL;

This makes it clear that the pointer no longer refers to the allocated object.

---

15. Important Points

malloc()
    ↓
Dynamically allocates memory

calloc()
    ↓
Allocates and zero-initializes memory

realloc()
    ↓
Changes the size of an allocation

free()
    ↓
Releases allocated memory

struct Student *ptr
    ↓
Pointer to dynamically allocated structure

ptr->member
    ↓
Access structure member

---

Lesson Summary

Dynamic structures allow memory for structure objects to be allocated during program execution.

Example:

struct Student *student;

student = malloc(sizeof(struct Student));

After checking the allocation, members can be accessed using:

student->marks

When the memory is no longer needed:

free(student);

Dynamic structures are an important foundation for more advanced concepts such as linked lists, trees, and other dynamic data structures.
`,

  summary:
    "Dynamic structures allow memory for structure objects to be allocated during program execution using functions such as malloc(), calloc(), realloc(), and free().",

  keyPoints: [
    "Dynamic structures use dynamic memory allocation.",
    "malloc() dynamically allocates memory.",
    "calloc() allocates and zero-initializes memory.",
    "realloc() changes the size of an allocation.",
    "free() releases allocated memory.",
    "A dynamically allocated structure is accessed using a structure pointer.",
    "The -> operator is used to access members through a structure pointer.",
    "Memory allocation should be checked for NULL.",
    "Dynamic arrays of structures can be created when the required size is known at runtime.",
    "Dynamic structures are a foundation for linked lists, trees, and other dynamic data structures.",
  ],
};

export default lesson9;