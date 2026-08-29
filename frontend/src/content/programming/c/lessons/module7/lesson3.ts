const lesson3 = {
  id: "lesson3",
  title: "Pointer Declaration and Initialization",

  content: `
Before using a pointer, we need to declare it and give it a valid address.

A pointer declaration tells the compiler that a variable will store the address of another object of a particular type.

The general form is:

data_type *pointer_name;

For example:

int *ptr;

means ptr is a pointer to an int.

1. Basic Pointer Declaration

int *ptr;

Here:

int   → Type of data being pointed to
*     → Pointer declaration operator
ptr   → Name of pointer

Other examples:

char *ptr;
float *ptr;
double *ptr;

2. Pointer Initialization

A pointer can be initialized with the address of a variable.

int number = 10;
int *ptr = &number;

Now:

number → 10
ptr    → address of number

This is the normal way to initialize a pointer to an existing variable.

3. Declaration First, Initialization Later

We can also declare a pointer first:

int number = 10;
int *ptr;

ptr = &number;

After the assignment:

ptr → address of number

Both of these approaches are valid:

int *ptr = &number;

or:

int *ptr;
ptr = &number;

4. Pointer Type Should Match

Suppose:

int number = 10;

A suitable pointer is:

int *ptr = &number;

For:

float price = 25.5f;

use:

float *ptr = &price;

For:

char grade = 'A';

use:

char *ptr = &grade;

The pointer type describes the type of object it points to.

5. Complete Example

#include <stdio.h>

int main(void)
{
    int number = 50;
    int *ptr = &number;

    printf("Number: %d\\n", number);
    printf("Address: %p\\n", (void *)ptr);

    return 0;
}

Output will look similar to:

Number: 50
Address: 0x7ffd1234

The actual address depends on the system.

6. Pointer Declaration With Multiple Variables

Be careful with declarations such as:

int *p, q;

This means:

p → pointer to int
q → ordinary int variable

It does not mean both p and q are pointers.

If both should be pointers, write:

int *p, *q;

This is a common beginner mistake.

7. Pointer to Different Data Types

Integer Pointer:

int number = 100;
int *ptr = &number;

Float Pointer:

float price = 20.5f;
float *ptr = &price;

Character Pointer:

char grade = 'A';
char *ptr = &grade;

8. Pointer Initialization With NULL

If a pointer does not currently point to a valid object, it can be initialized to NULL.

int *ptr = NULL;

This means the pointer currently represents no valid target object.

We will study NULL pointers in more detail later in the module.

9. Uninitialized Pointer

Avoid using:

int *ptr;

before assigning it a valid address.

An uninitialized automatic pointer contains an indeterminate value.

Using it incorrectly can lead to undefined behavior.

Instead:

int number = 10;
int *ptr = &number;

or, if it should not point anywhere yet:

int *ptr = NULL;

10. Pointer to a Variable

Consider:

int age = 20;
int *ptr = &age;

The relationship is:

age
│
├── Value: 20
└── Address: some memory location

        ↑
        │
       ptr

The pointer does not contain the value 20 directly.

It contains the address of age.

11. Multiple Pointers

More than one pointer can point to the same variable.

int number = 100;

int *p1 = &number;
int *p2 = &number;

Both pointers contain the address of number.

Conceptually:

        ┌─────────┐
p1 ────►│         │
        │   100   │
p2 ────►│         │
        └─────────┘
          number

This becomes useful when different parts of a program need access to the same data.

12. Changing the Pointer's Target

A pointer can be made to point to another variable of the appropriate type.

int a = 10;
int b = 20;

int *ptr = &a;

ptr = &b;

Initially:

ptr → a

After:

ptr = &b;

the pointer becomes:

ptr → b

13. Example

#include <stdio.h>

int main(void)
{
    int a = 10;
    int b = 20;

    int *ptr = &a;

    printf("Pointer address: %p\\n", (void *)ptr);

    ptr = &b;

    printf("New pointer address: %p\\n", (void *)ptr);

    return 0;
}

The pointer first stores the address of a, then the address of b.

14. Pointer Size

The size of a pointer depends on the system and architecture.

For example:

printf("%zu\\n", sizeof(ptr));

On many modern 64-bit systems, pointers commonly occupy 8 bytes, but the exact size is implementation-dependent.

The important point is that a pointer's size is not necessarily the same as the size of the data it points to.

For example:

int *ptr;

does not mean the pointer must have the same size as an int.

15. Important Points

Pointer declaration:

int *ptr;

Pointer initialization:

int number = 10;
int *ptr = &number;

Pointer with no target:

int *ptr = NULL;

Multiple pointers:

int *p, *q;

Remember:

Pointer
↓
Stores an address

Pointer type
↓
Describes the type of object being pointed to
`,

  summary:
    "A pointer is declared using data_type *pointer_name. It should be initialized with a valid address or NULL before it is used.",

  keyPoints: [
    "Declare a pointer using data_type *pointer_name.",
    "Initialize a pointer with the address of a suitable variable.",
    "The pointer type should match the type of object being pointed to.",
    "An uninitialized automatic pointer contains an indeterminate value.",
    "A pointer can be initialized to NULL when it has no valid target.",
    "Multiple pointers can point to the same variable.",
  ],
};

export default lesson3;