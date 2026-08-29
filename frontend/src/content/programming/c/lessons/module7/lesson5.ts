const lesson5 = {
  id: "lesson5",
  title: "Accessing Variables Through Pointers",

  content: `
A pointer becomes useful when we use it to access and modify the variable it points to.

Suppose:

int number = 20;
int *ptr = &number;

We can access number directly:

number

or indirectly through the pointer:

*ptr

Both refer to the same stored value.

1. Accessing a Value Through a Pointer

#include <stdio.h>

int main(void)
{
    int number = 20;
    int *ptr = &number;

    printf("Number: %d\\n", *ptr);

    return 0;
}

Output:

Number: 20

2. Modifying a Variable Through a Pointer

#include <stdio.h>

int main(void)
{
    int number = 20;
    int *ptr = &number;

    *ptr = 40;

    printf("Number: %d\\n", number);

    return 0;
}

Output:

Number: 40

The pointer provides indirect access to number.

3. Direct vs Indirect Access

Consider:

int number = 50;
int *ptr = &number;

Direct access:

number = 100;

Indirect access:

*ptr = 100;

Both modify the same variable.

4. Example

#include <stdio.h>

int main(void)
{
    int marks = 75;
    int *ptr = &marks;

    printf("Before: %d\\n", marks);

    *ptr = 85;

    printf("After: %d\\n", marks);

    return 0;
}

Output:

Before: 75
After: 85

5. Reading Through a Pointer

A pointer can be used to read a value without directly referring to the variable.

int age = 20;
int *ptr = &age;

printf("Age = %d\\n", *ptr);

Here *ptr accesses the value stored in age.

6. Writing Through a Pointer

A pointer can also be used to assign a new value.

int age = 20;
int *ptr = &age;

*ptr = 25;

Now:

age = 25

7. Multiple Changes Through a Pointer

#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;

    *ptr = 20;
    printf("%d\\n", number);

    *ptr = 30;
    printf("%d\\n", number);

    *ptr = 40;
    printf("%d\\n", number);

    return 0;
}

Output:

20
30
40

8. Pointer With a Character

#include <stdio.h>

int main(void)
{
    char grade = 'B';
    char *ptr = &grade;

    printf("Grade: %c\\n", *ptr);

    *ptr = 'A';

    printf("New Grade: %c\\n", grade);

    return 0;
}

Output:

Grade: B
New Grade: A

9. Pointer With a Float

#include <stdio.h>

int main(void)
{
    float price = 50.5f;
    float *ptr = &price;

    printf("Price: %.2f\\n", *ptr);

    *ptr = 75.5f;

    printf("New Price: %.2f\\n", price);

    return 0;
}

10. Pointer Can Be Used in Expressions

The dereferenced value can participate in calculations.

#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;

    int result = *ptr + 5;

    printf("Result: %d\\n", result);

    return 0;
}

Output:

Result: 15

11. Incrementing a Value Through a Pointer

Be careful about the meaning of:

(*ptr)++;

This increments the value pointed to by ptr.

Example:

#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;

    (*ptr)++;

    printf("%d\\n", number);

    return 0;
}

Output:

11

12. Difference Between (*ptr)++ and ptr++

These are completely different operations.

(*ptr)++;

means:

Increase the value pointed to by ptr.

Whereas:

ptr++;

means:

Move the pointer to another memory location according to its pointer type.

Pointer arithmetic will be discussed in Lesson 6.

13. Using a Pointer With Two Variables

A pointer can be redirected from one variable to another.

#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 20;
    int *ptr = &a;

    printf("Value: %d\\n", *ptr);

    ptr = &b;

    printf("Value: %d\\n", *ptr);

    return 0;
}

Output:

Value: 10
Value: 20

Initially:

ptr → a

After:

ptr = &b;

the pointer becomes:

ptr → b

14. Practical Example — Updating Marks

#include <stdio.h>

int main(void)
{
    int marks = 65;
    int *ptr = &marks;

    printf("Original Marks: %d\\n", marks);

    *ptr = 90;

    printf("Updated Marks: %d\\n", marks);

    return 0;
}

Output:

Original Marks: 65
Updated Marks: 90

This is a simple example of modifying data indirectly through a pointer.

15. Important Points

Direct access:

number

Indirect access:

*ptr

Read through pointer:

value = *ptr;

Modify through pointer:

*ptr = newValue;

The pointer and the variable refer to the same memory location.

Lesson Summary

Pointers allow variables to be accessed indirectly.

For example:

int number = 20;
int *ptr = &number;

Then:

*ptr

reads number, while:

*ptr = 50;

changes number to 50.

This indirect access is one of the main reasons pointers are so important in C.
`,

  summary:
    "Pointers allow variables to be accessed and modified indirectly. The expression *ptr can read the value of the pointed-to variable or modify it through assignment.",

  keyPoints: [
    "A pointer can read a variable's value using dereferencing.",
    "A pointer can modify a variable using *ptr = value.",
    "Direct access uses the variable name, while indirect access uses the pointer.",
    "(*ptr)++ increments the pointed-to value.",
    "ptr++ moves the pointer according to its pointer type.",
    "A pointer can be redirected to another variable of the appropriate type.",
  ],
};

export default lesson5;