const lesson8 = {
  id: "lesson8",
  title: "Pointers to Structures",

  content: `
Introduction

A pointer can point to a structure variable just like it can point to an ordinary variable.

For example:

struct Student student1;

struct Student *ptr = &student1;

Here, ptr stores the address of student1.

Pointers to structures are especially useful when structures are passed to functions or when working with dynamic memory.

---

1. Declaring a Structure Pointer

The general form is:

struct StructureName *pointer;

Example:

struct Student *ptr;

We can make it point to a structure:

ptr = &student1;

---

2. Accessing Members Through a Pointer

Suppose:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

struct Student student1;

struct Student *ptr = &student1;

We can access members using the -> operator:

ptr->rollNumber

ptr->marks

---

3. The -> Operator

The arrow operator is used to access a structure member through a pointer.

Instead of:

(*ptr).marks

we normally write:

ptr->marks

These two expressions are equivalent:

ptr->marks

and:

(*ptr).marks

---

4. Example

#include <stdio.h>

struct Student
{
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1;

    struct Student *ptr = &student1;

    ptr->rollNumber = 101;
    ptr->marks = 85.5f;

    printf("Roll Number: %d\\n",
           ptr->rollNumber);

    printf("Marks: %.2f\\n",
           ptr->marks);

    return 0;
}

Output:

Roll Number: 101
Marks: 85.50

---

5. Dot vs Arrow Operator

This is important.

For a normal structure variable:

student1.marks

For a pointer to a structure:

ptr->marks

So:

Normal structure variable
        ↓
        .

Structure pointer
        ↓
        ->

---

6. Equivalent Expressions

These are equivalent:

ptr->marks

and:

(*ptr).marks

The parentheses are important in the second expression.

Without them:

*ptr.marks

does not mean the same thing.

---

7. Passing a Structure Pointer to a Function

This is one of the most common uses.

#include <stdio.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

void displayStudent(struct Student *student)
{
    printf("Name: %s\\n", student->name);
    printf("Roll Number: %d\\n", student->rollNumber);
    printf("Marks: %.2f\\n", student->marks);
}

int main(void)
{
    struct Student student1 =
    {
        "Rahul",
        101,
        85.5f
    };

    displayStudent(&student1);

    return 0;
}

Output:

Name: Rahul
Roll Number: 101
Marks: 85.50

---

8. Modifying a Structure Through a Pointer

A function can modify the original structure through a pointer.

void updateMarks(struct Student *student)
{
    student->marks = 95.0f;
}

Call:

updateMarks(&student1);

The original student1 is modified.

---

9. Pointer to an Array of Structures

Suppose:

struct Student students[3];

We can create:

struct Student *ptr = students;

Now ptr points to the first element.

We can access the first student:

ptr->marks

The next student can be accessed using:

(ptr + 1)->marks

---

10. Traversing an Array Using a Structure Pointer

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

    struct Student *ptr = students;

    for (int i = 0; i < 3; i++)
    {
        printf("%s - %.2f\\n",
               (ptr + i)->name,
               (ptr + i)->marks);
    }

    return 0;
}

Output:

Rahul - 85.50
Kiran - 91.00
Anil - 76.50

---

11. Structure Pointer and Nested Structures

Pointers can also access nested structure members.

For example:

ptr->birthDate.year

Here:

ptr
 ↓
Student
 ↓
birthDate
 ↓
year

---

12. Why Use Structure Pointers?

Structure pointers are useful because they allow us to:

- Modify structures through functions
- Avoid copying large structures
- Process arrays of structures
- Work with dynamically allocated structures
- Build linked data structures

They become particularly important when dynamic memory and linked lists are introduced.

---

13. Practical Example

#include <stdio.h>

struct Product
{
    int id;
    char name[50];
    float price;
};

void increasePrice(struct Product *product)
{
    product->price += 500;
}

int main(void)
{
    struct Product product =
    {
        101,
        "Laptop",
        50000.0f
    };

    printf("Before: %.2f\\n",
           product.price);

    increasePrice(&product);

    printf("After: %.2f\\n",
           product.price);

    return 0;
}

Output:

Before: 50000.00
After: 50500.00

---

14. Important Relationship

For:

struct Student student;

struct Student *ptr = &student;

we have:

student.rollNumber

and:

ptr->rollNumber

Both access the same member.

---

15. Important Points

struct Student *ptr;

        ↓

Pointer to Student structure

ptr = &student;

        ↓

Store address of structure

ptr->marks

        ↓

Access marks through pointer

(*ptr).marks

        ↓

Same as ptr->marks

---

Lesson Summary

A pointer to a structure stores the address of a structure variable.

Example:

struct Student student;

struct Student *ptr = &student;

The arrow operator is then used:

ptr->marks

It is equivalent to:

(*ptr).marks

Structure pointers are heavily used with functions, arrays, dynamic memory, and data structures.
`,

  summary:
    "A pointer to a structure stores the address of a structure variable and uses the -> operator to access its members.",

  keyPoints: [
    "A structure pointer stores the address of a structure variable.",
    "A structure pointer is declared using struct StructureName *pointer.",
    "The address of a structure is obtained using &.",
    "The -> operator accesses a structure member through a pointer.",
    "ptr->marks is equivalent to (*ptr).marks.",
    "Structure pointers can be passed to functions.",
    "A function can modify the original structure through a structure pointer.",
    "Structure pointers can be used to traverse arrays of structures.",
    "Structure pointers are useful with dynamic memory and data structures.",
  ],
};

export default lesson8;