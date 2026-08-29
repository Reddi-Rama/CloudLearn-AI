const lesson1 = {
  id: "lesson1",
  title: "Introduction to Pointers",

  content: `
A pointer is a variable that stores the memory address of another variable.

Normally, a variable stores a value.

Example:

int number = 10;

Here:

number → 10

A pointer, instead of storing 10 directly, stores the address where 10 is located in memory.

number → 10
   ↑
   |
pointer → address of number

Pointers allow C programs to work directly with memory and are especially important when working with arrays, functions, strings, structures, and dynamic memory allocation.

1. Normal Variable

Consider:

int number = 10;

The variable number has:

Value   → 10
Address → Some memory location

The exact memory address is decided when the program runs.

2. What Is a Pointer?

A pointer is a variable capable of storing a memory address.

For example:

int *ptr;

Here:

int → Type of data the pointer points to
*   → Indicates that ptr is a pointer
ptr → Pointer variable

So:

int *ptr;

means:

ptr is a pointer to an integer.

3. Why Do We Need Pointers?

Pointers are useful when a program needs to:

• Access memory addresses
• Modify variables indirectly
• Work with arrays efficiently
• Pass data to functions
• Work with strings
• Handle dynamic memory
• Work with structures
• Build advanced data structures

Pointers become especially important when programs become larger and more complex.

4. Simple Pointer Example

#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;

    printf("Value: %d\\n", number);
    printf("Address: %p\\n", (void *)&number);
    printf("Pointer: %p\\n", (void *)ptr);

    return 0;
}

Example output:

Value: 10
Address: 0x7ffd1234
Pointer: 0x7ffd1234

The actual address will be different each time the program runs.

5. Understanding the Example

There are two important things here:

int number = 10;

stores the value:

number → 10

Then:

int *ptr = &number;

stores the address of number inside ptr.

Conceptually:

Memory

┌───────────┐
│    10     │
└───────────┘
      ↑
      │
   address
      │
┌───────────┐
│  address  │
└───────────┘
     ptr

6. Pointer Declaration

The general syntax is:

data_type *pointer_name;

Examples:

int *ptr;
float *ptr;
char *ptr;
double *ptr;

The pointer type should correspond to the type of data it points to.

For example:

int number = 10;
int *ptr = &number;

and:

float price = 25.5f;
float *ptr = &price;

7. Pointer and Data Type

Suppose:

int number = 10;

Use:

int *ptr;

For:

char grade = 'A';

use:

char *ptr;

For:

float marks = 85.5f;

use:

float *ptr;

The pointer type tells the compiler what type of object the pointer points to.

8. Pointer Stores an Address

Consider:

int number = 25;
int *ptr = &number;

The relationship is:

number
  │
  ├── value → 25
  │
  └── address → memory location

ptr
  │
  └── value → address of number

The actual address depends on the system and execution.

9. Address vs Value

Value means:

What is stored inside a variable.

Address means:

Where the variable is stored in memory.

For example:

int number = 50;

The value is:

50

Its address could be something like:

0x7ffd1234

A pointer can store that address.

10. Pointers Do Not Store the Original Value Directly

Consider:

int number = 20;
int *ptr = &number;

The pointer contains:

Address of number

not:

20

The pointer can later be used to access the value stored at that address.

11. Pointer Example With Different Variables

#include <stdio.h>

int main(void)
{
    int age = 20;
    int *ptr = &age;

    printf("Age: %d\\n", age);
    printf("Address of age: %p\\n", (void *)&age);
    printf("Value stored in ptr: %p\\n", (void *)ptr);

    return 0;
}

The address printed by &age and the value stored in ptr represent the same address.

12. Pointers and Memory

A simple way to visualize memory is:

┌───────────────┐
│ Memory Address│
├───────────────┤
│     Value     │
└───────────────┘

Suppose:

Address       Value

1000          25
1004          ...
1008          ...

If number is stored at address 1000:

number → 25

A pointer can contain:

ptr → 1000

So the pointer tells the program where number is located.

13. Pointer Initialization

A pointer should normally be initialized before it is used.

Example:

int number = 10;
int *ptr = &number;

This is a valid pointer because it points to an existing variable.

Avoid using an uninitialized pointer such as:

int *ptr;

until it has been given a valid address.

14. Example Program

#include <stdio.h>

int main(void)
{
    int number = 100;
    int *ptr = &number;

    printf("Number = %d\\n", number);
    printf("Address = %p\\n", (void *)ptr);

    return 0;
}

Output will look similar to:

Number = 100
Address = 0x7ffd1234

The address is system-dependent.

15. Important Points

Variable
↓
Stores a value

Pointer
↓
Stores an address

&
↓
Obtains the address of a variable

*
↓
Used when declaring a pointer
↓
Also used for dereferencing

The * operator's dereferencing use will be covered in detail later.

Lesson Summary

A pointer is a variable that stores the address of another variable.

Basic example:

int number = 10;
int *ptr = &number;

Here:

number → stores 10
ptr    → stores the address of number

Pointers provide direct access to memory and are fundamental to many advanced C programming concepts.
`,

  summary:
    "A pointer is a variable that stores the address of another variable. Pointers allow C programs to work directly with memory and are fundamental to arrays, functions, strings, structures, and dynamic memory.",

  keyPoints: [
    "A pointer stores a memory address.",
    "The * symbol is used when declaring a pointer.",
    "The & operator obtains the address of a variable.",
    "Pointer types correspond to the type of data they point to.",
    "Pointers should be initialized before they are used.",
  ],
};

export default lesson1;