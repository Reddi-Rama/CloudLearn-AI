const lesson4 = {
  id: "lesson4",
  title: "Accessing Structure Members",

  content: `
Introduction

After creating a structure variable, we need a way to access the individual members stored inside it.

For a normal structure variable, C provides the dot (.) operator.

For example:

student1.rollNumber

means:

Access the rollNumber member of student1.

---

1. The Dot Operator

The general syntax is:

structure_variable.member

Example:

struct Student student1;

student1.rollNumber = 101;

Here:

student1
    → structure variable

.
    → member access operator

rollNumber
    → structure member

---

2. Example

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

    student1.rollNumber = 101;
    student1.marks = 85.5f;

    printf("Roll Number: %d\\n",
           student1.rollNumber);

    printf("Marks: %.2f\\n",
           student1.marks);

    return 0;
}

Output:

Roll Number: 101
Marks: 85.50

---

3. Accessing a Character Array Member

If a structure contains a character array:

struct Student
{
    char name[50];
    int rollNumber;
};

we can access it using:

student1.name

For example:

printf("Name: %s\\n", student1.name);

---

4. Complete Example

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

5. Reading Structure Members From the User

Structure members can also be used with scanf().

#include <stdio.h>

struct Student
{
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1;

    printf("Enter roll number: ");
    scanf("%d", &student1.rollNumber);

    printf("Enter marks: ");
    scanf("%f", &student1.marks);

    printf("\\nRoll Number: %d\\n",
           student1.rollNumber);

    printf("Marks: %.2f\\n",
           student1.marks);

    return 0;
}

Notice:

&student1.rollNumber

The & operator obtains the address of the particular structure member.

---

6. Modifying Structure Members

Structure members can be changed just like ordinary variables.

student1.marks = 90.0f;

For example:

#include <stdio.h>

struct Student
{
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student1 =
    {101, 75.0f};

    printf("Before: %.2f\\n",
           student1.marks);

    student1.marks = 90.0f;

    printf("After: %.2f\\n",
           student1.marks);

    return 0;
}

Output:

Before: 75.00
After: 90.00

---

7. Accessing Members of Multiple Structure Variables

Suppose:

struct Student student1;
struct Student student2;

We can access their members separately:

student1.rollNumber
student2.rollNumber

For example:

student1.marks = 80.0f;
student2.marks = 90.0f;

Each structure variable has its own copy of the members.

---

8. Structure Member Expressions

A structure expression can be used anywhere an appropriate value is expected.

For example:

int total =
student1.rollNumber + student2.rollNumber;

Or:

if (student1.marks > 50)
{
    printf("Pass\\n");
}

---

9. Accessing Nested Structure Members

Suppose we have:

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

We can access the nested members using multiple dot operators:

student1.birthDate.day
student1.birthDate.month
student1.birthDate.year

For example:

student1.birthDate.year = 2005;

---

10. Structure Member and Assignment

We can copy one member to another variable:

float marks;

marks = student1.marks;

We can also assign one compatible member value to another structure member:

student2.marks =
student1.marks;

---

11. Structure Member in Expressions

Members can participate in normal expressions.

float average;

average =
(student1.marks + student2.marks) / 2;

The structure itself is not being used in the calculation; its individual members are.

---

12. Structure Pointer Preview

If we have a pointer to a structure:

struct Student *ptr =
&student1;

we can access members using:

ptr->marks

instead of:

student1.marks

The -> operator will be covered in detail in Lesson 8.

---

13. Important Difference

For a normal structure variable:

student1.marks

For a pointer to a structure:

ptr->marks

Remember:

Normal structure variable → .

Structure pointer → ->

---

14. Practical Example

#include <stdio.h>

struct Product
{
    int id;
    char name[50];
    float price;
};

int main(void)
{
    struct Product product =
    {101, "Laptop", 55000.0f};

    printf("Product ID: %d\\n",
           product.id);

    printf("Product Name: %s\\n",
           product.name);

    printf("Product Price: %.2f\\n",
           product.price);

    return 0;
}

Output:

Product ID: 101
Product Name: Laptop
Product Price: 55000.00

---

15. Important Points

structure.member
    ↓
Access a member of a structure variable

&structure.member
    ↓
Address of a structure member

structure.member = value;
    ↓
Modify a member

structure1.member =
structure2.member;
    ↓
Copy one member's value

---

Lesson Summary

The dot operator (.) is used to access members of a structure variable.

Example:

struct Student student1;

student1.rollNumber = 101;
student1.marks = 85.5f;

For a normal structure variable, use the dot operator:

student1.marks

For a structure pointer, the arrow operator is used:

ptr->marks
`,

  summary:
    "The dot operator (.) is used to access and modify members of a normal structure variable.",

  keyPoints: [
    "The dot (.) operator accesses structure members.",
    "The general syntax is structure_variable.member.",
    "The & operator can obtain the address of a structure member.",
    "Structure members can be modified like ordinary variables.",
    "Different structure variables have their own copies of members.",
    "Nested structure members can be accessed using multiple dot operators.",
    "Structure members can participate in expressions.",
    "A structure pointer uses the -> operator.",
  ],
};

export default lesson4;