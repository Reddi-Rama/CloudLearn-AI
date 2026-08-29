const lesson3 = {
  id: "lesson3",
  title: "Structure Members and Initialization",

  content: `
Introduction

Once a structure has been defined and a structure variable has been created, we need to work with its members.

Structure members can be initialized when the variable is created or assigned values later.

For example:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

We can create and initialize a student record using:

struct Student student1 =
{"Rahul", 101, 85.5f};

---

1. Initializing a Structure

A structure can be initialized when it is declared.

struct Student student1 =
{"Rahul", 101, 85.5f};

The values are assigned to members in their declaration order.

name       → "Rahul"
rollNumber → 101
marks      → 85.5

---

2. Structure Initialization Order

Consider:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

Then:

struct Student student1 =
{"Rahul", 101, 85.5f};

The values correspond to:

1st value → name
2nd value → rollNumber
3rd value → marks

The order matters when using positional initialization.

---

3. Example Program

#include <stdio.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1 =
    {"Rahul", 101, 85.5f};

    printf("Student initialized successfully.\\n");

    return 0;
}

---

4. Initializing Without Providing Every Member

If fewer initializers are provided, the remaining members are initialized to zero values appropriate to their type.

Example:

struct Student student1 =
{"Rahul"};

Conceptually:

name       → "Rahul"
rollNumber → 0
marks      → 0.0

For a character array, the string initializes the characters accordingly.

---

5. Zero Initialization

We can initialize all members to zero using:

struct Student student1 = {0};

For example:

name       → empty string
rollNumber → 0
marks      → 0.0

This is a useful way to start a structure with zero-initialized members.

---

6. Designated Initializers

C also supports designated initializers.

Example:

struct Student student1 =
{
    .rollNumber = 101,
    .marks = 85.5f,
    .name = "Rahul"
};

Here the members are explicitly named.

This makes the initialization easier to understand and does not require following the member declaration order.

---

7. Assigning Values After Declaration

A structure can also be declared first:

struct Student student1;

Then individual members can be assigned values.

For example:

student1.rollNumber = 101;
student1.marks = 85.5f;

For the character array:

strcpy(student1.name, "Rahul");

The <string.h> header is required for strcpy().

---

8. Complete Example

#include <stdio.h>
#include <string.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1;

    strcpy(student1.name, "Rahul");
    student1.rollNumber = 101;
    student1.marks = 85.5f;

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

9. Structure Assignment

Two structure variables of the same structure type can be assigned to each other.

struct Student student1 =
{"Rahul", 101, 85.5f};

struct Student student2;

student2 = student1;

Now student2 receives the values of all members of student1.

---

10. Example of Structure Assignment

#include <stdio.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1 =
    {"Rahul", 101, 85.5f};

    struct Student student2;

    student2 = student1;

    printf("Name: %s\\n", student2.name);
    printf("Roll Number: %d\\n", student2.rollNumber);
    printf("Marks: %.2f\\n", student2.marks);

    return 0;
}

Output:

Name: Rahul
Roll Number: 101
Marks: 85.50

---

11. Structure Members Can Be Different Types

Consider:

struct Product
{
    int id;
    char name[50];
    float price;
};

We can initialize it as:

struct Product product1 =
{101, "Laptop", 55000.0f};

The values correspond to:

id    → 101
name  → Laptop
price → 55000.0

---

12. Constant Structure Data

A structure variable can also be declared const:

const struct Student student1 =
{
    "Rahul",
    101,
    85.5f
};

The members of student1 should not be modified after initialization.

---

13. Structure Initialization With Nested Data

Suppose:

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

We can initialize:

struct Student student1 =
{
    "Rahul",
    {15, 8, 2005}
};

This will be useful when we study nested structures.

---

14. Important Difference: Array and Structure Assignment

Arrays cannot normally be assigned directly:

int a[3];
int b[3];

a = b;   // invalid

But structures of the same type can be assigned:

struct Student student1;
struct Student student2;

student2 = student1;

This is an important difference between arrays and structures.

---

15. Important Points

Structure initialization:

struct Student s = {"Rahul", 101, 85.5f};

Zero initialization:

struct Student s = {0};

Designated initialization:

struct Student s =
{
    .rollNumber = 101,
    .marks = 85.5f
};

Member assignment:

s.rollNumber = 101;

Structure variables of the same type can also be assigned:

student2 = student1;

---

Lesson Summary

Structure members can be initialized when the structure variable is created:

struct Student student1 =
{"Rahul", 101, 85.5f};

They can also be assigned individually after declaration:

student1.rollNumber = 101;
student1.marks = 85.5f;

C also supports designated initializers, which make larger structures easier to initialize clearly.
`,

  summary:
    "Structure members can be initialized when a structure variable is created or assigned individually after declaration.",

  keyPoints: [
    "A structure can be initialized when it is declared.",
    "Positional initialization follows member declaration order.",
    "Missing initializers give remaining members zero values appropriate to their type.",
    "A structure can be initialized with {0}.",
    "C supports designated initializers.",
    "Structure members can be assigned after declaration.",
    "Structures of the same type can be assigned to each other.",
    "Arrays cannot normally be assigned directly.",
  ],
};

export default lesson3;