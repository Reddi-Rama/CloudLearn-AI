const lesson11 = {
  id: "lesson11",
  title: "Pointer to Pointer",

  content: `
A pointer to pointer is a pointer that stores the address of another pointer.

For example:

int number = 10;
int *ptr = &number;
int **pptr = &ptr;

Here we have three levels:

number
  ↓
10

ptr
  ↓
address of number

pptr
  ↓
address of ptr

1. Declaring a Pointer to Pointer

The syntax is:

data_type **pointer_name;

Example:

int **pptr;

This means:

pptr is a pointer to a pointer to an integer.

2. Basic Example

#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;
    int **pptr = &ptr;

    printf("Number: %d\\n", number);
    printf("Through ptr: %d\\n", *ptr);
    printf("Through pptr: %d\\n", **pptr);

    return 0;
}

Output:

Number: 10
Through ptr: 10
Through pptr: 10

3. Understanding *ptr and **pptr

Suppose:

int number = 10;
int *ptr = &number;
int **pptr = &ptr;

Then:

number
  ↓
10

ptr
  ↓
address of number

pptr
  ↓
address of ptr

Therefore:

*ptr

gives:

10

while:

*pptr

gives:

address stored in ptr

and:

**pptr

gives:

10

4. Changing the Original Variable

A pointer to pointer can also be used to modify the original variable.

#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;
    int **pptr = &ptr;

    **pptr = 50;

    printf("Number: %d\\n", number);

    return 0;
}

Output:

Number: 50

5. Three Levels of Access

For:

int number = 25;
int *ptr = &number;
int **pptr = &ptr;

we have:

number
  ↓
25

*ptr
  ↓
25

**pptr
  ↓
25

All three expressions ultimately access the same value.

6. Changing a Pointer Through a Pointer to Pointer

A pointer to pointer can change what another pointer points to.

#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 20;

    int *ptr = &a;
    int **pptr = &ptr;

    printf("Before: %d\\n", *ptr);

    *pptr = &b;

    printf("After: %d\\n", *ptr);

    return 0;
}

Output:

Before: 10
After: 20

The statement:

*pptr = &b;

changes ptr so that it points to b.

7. Pointer to Pointer With Functions

Pointer-to-pointer parameters can be useful when a function needs to modify a pointer itself.

#include <stdio.h>

void changePointer(int **ptr, int *newAddress)
{
    *ptr = newAddress;
}

int main(void)
{
    int a = 10;
    int b = 20;

    int *ptr = &a;

    changePointer(&ptr, &b);

    printf("%d\\n", *ptr);

    return 0;
}

Output:

20

8. Why Do We Need Pointer to Pointer?

Pointer-to-pointer concepts are useful for:

• Changing a pointer inside a function
• Dynamic memory management
• Working with arrays of pointers
• Managing dynamically allocated data
• Building linked data structures
• Working with command-line arguments

9. Pointer Levels

C allows multiple levels of pointers.

For example:

int *p;
int **p;
int ***p;

Conceptually:

int
 ↑
int *
 ↑
int **
 ↑
int ***

Each additional * represents another level of indirection.

10. Practical Example

#include <stdio.h>

int main(void)
{
    int value = 100;

    int *p = &value;
    int **pp = &p;

    printf("Value: %d\\n", value);
    printf("Using p: %d\\n", *p);
    printf("Using pp: %d\\n", **pp);

    return 0;
}

Output:

Value: 100
Using p: 100
Using pp: 100

11. Understanding the Memory Relationship

Conceptually:

┌─────────────┐
│    value    │
│     100     │
└─────────────┘
       ↑
       │
       p
       │
┌─────────────┐
│ address of  │
│    value    │
└─────────────┘
       ↑
       │
       pp
       │
┌─────────────┐
│ address of  │
│      p      │
└─────────────┘

Therefore:

*p
  → value

*pp
  → p

**pp
  → value

12. Important Difference

These are not the same:

int *ptr;

and:

int **ptr;

The first is:

Pointer to int

The second is:

Pointer to pointer to int

The number of * symbols indicates the level of indirection.

13. Common Use With Dynamic Memory

Pointer-to-pointer concepts become particularly useful when dynamically allocated memory needs to be managed through a function.

For example, a function may receive:

void create(int **ptr)

so that it can change the caller's pointer.

Dynamic memory will be covered in a later module.

14. Practical Example — Changing a Pointer

#include <stdio.h>

void setPointer(int **ptr, int *target)
{
    *ptr = target;
}

int main(void)
{
    int first = 10;
    int second = 20;

    int *ptr = &first;

    printf("Before: %d\\n", *ptr);

    setPointer(&ptr, &second);

    printf("After: %d\\n", *ptr);

    return 0;
}

Output:

Before: 10
After: 20

15. Important Points

int *p
  ↓
Pointer to int

int **p
  ↓
Pointer to pointer to int

*p
  ↓
Value pointed to by p

**p
  ↓
Value reached through two levels

Pointer to pointer is mainly about multiple levels of indirection.

Lesson Summary

A pointer to pointer stores the address of another pointer.

Example:

int number = 10;
int *ptr = &number;
int **pptr = &ptr;

Then:

ptr     → address of number
*ptr    → number
pptr    → address of ptr
*pptr   → ptr
**pptr  → number

This concept becomes important when working with functions that need to modify pointers, dynamic memory, and advanced data structures.
`,

  summary:
    "A pointer to pointer stores the address of another pointer. Using ** allows a program to access the value through two levels of indirection.",

  keyPoints: [
    "A pointer to pointer is declared using two * symbols.",
    "int **pptr means pptr is a pointer to a pointer to an int.",
    "*pptr accesses the pointer stored at the second level.",
    "**pptr accesses the final value through two levels of indirection.",
    "Pointer-to-pointer parameters can allow functions to modify pointers.",
    "Pointer to pointer is useful in dynamic memory and advanced data structures.",
  ],
};

export default lesson11;