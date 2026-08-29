const lesson2 = {
  id: "lesson2",
  title: "Memory Addresses and the & Operator",

  content: `
Every variable created by a C program occupies a location in memory.

That location has a memory address.

The address can be obtained using the address-of operator:

&

For example:

int number = 25;

We can find its address using:

&number

1. What Is a Memory Address?

When a variable is stored in memory, the computer assigns it a location.

For example, imagine:

Address       Value

1000          25
1004          ...
1008          ...

If number is stored at address 1000:

number
   ↓
address: 1000
value:   25

The actual address in a real program will normally be represented in hexadecimal.

2. The Address-of Operator &

The & operator returns the address of a variable.

Example:

int number = 25;

printf("%p\\n", (void *)&number);

The result might look like:

0x7ffd1234

The exact value is different depending on the system and execution.

3. Why %p Is Used

Memory addresses should be printed using the %p format specifier.

Example:

printf("%p\\n", (void *)&number);

The cast to (void *) is the standard form for passing a pointer to printf() with %p.

4. Complete Example

#include <stdio.h>

int main(void)
{
    int number = 25;

    printf("Value: %d\\n", number);
    printf("Address: %p\\n", (void *)&number);

    return 0;
}

Example output:

Value: 25
Address: 0x7ffd1234

5. Different Variables Have Different Addresses

Consider:

int a = 10;
int b = 20;

We can display both addresses:

printf("Address of a: %p\\n", (void *)&a);
printf("Address of b: %p\\n", (void *)&b);

The two variables normally occupy different memory locations.

6. Address of Different Data Types

The & operator works with different types of variables.

int age = 20;
float price = 25.5f;
char grade = 'A';

Their addresses can be obtained using:

&age
&price
&grade

Example:

printf("%p\\n", (void *)&age);
printf("%p\\n", (void *)&price);
printf("%p\\n", (void *)&grade);

7. Address Stored in a Pointer

The real purpose of obtaining an address is often to store it in a pointer.

int number = 25;
int *ptr = &number;

Here:

&number
   ↓
Address of number
   ↓
stored inside ptr

So:

number → 25
ptr    → address of number

8. Example

#include <stdio.h>

int main(void)
{
    int number = 50;
    int *ptr;

    ptr = &number;

    printf("Number: %d\\n", number);
    printf("Address of number: %p\\n", (void *)&number);
    printf("Address stored in ptr: %p\\n", (void *)ptr);

    return 0;
}

The last two addresses represent the same memory location.

9. Address of a Character

The & operator can also be used with a character variable.

char grade = 'A';

printf("Grade: %c\\n", grade);
printf("Address: %p\\n", (void *)&grade);

The address is simply the memory location where grade is stored.

10. Address of a Float

float price = 99.5f;

printf("Price: %.2f\\n", price);
printf("Address: %p\\n", (void *)&price);

Again, &price gives the memory address.

11. Address and Pointer Relationship

Consider:

int number = 100;
int *ptr = &number;

The relationship is:

MEMORY

┌─────────────┐
│     100     │
└─────────────┘
       ↑
       │
  &number
       │
┌─────────────┐
│   address   │
└─────────────┘
      ptr

The pointer stores the address obtained using &.

12. Address Does Not Mean Value

These are different:

number

and:

&number

For:

int number = 100;

number
  ↓
100

while:

&number
  ↓
Address of number

So:

printf("%d", number);

prints the value.

Whereas:

printf("%p", (void *)&number);

prints the address.

13. Address Operator With Pointers

Suppose:

int number = 10;
int *ptr = &number;

Then:

&number

is the address of number.

And:

ptr

contains that same address.

But:

&ptr

is something different.

It is the address of the pointer variable itself.

This distinction becomes important when we study pointers to pointers.

14. Practical Example

#include <stdio.h>

int main(void)
{
    int marks = 85;
    int *ptr = &marks;

    printf("Marks: %d\\n", marks);
    printf("Marks address: %p\\n", (void *)&marks);
    printf("Pointer value: %p\\n", (void *)ptr);
    printf("Pointer address: %p\\n", (void *)&ptr);

    return 0;
}

Here:

marks
↓
stores 85

ptr
↓
stores address of marks

&ptr
↓
address of ptr itself

15. Important Points

&variable
↓
Returns the address of the variable

variable
↓
Returns its stored value

pointer = &variable
↓
Pointer stores the variable's address

Remember:

int number = 10;
int *ptr = &number;

This is the basic relationship between a variable, its address, and a pointer.

Lesson Summary

Every variable occupies a location in memory.

The & operator allows us to obtain that location:

&number

A pointer can then store that address:

int *ptr = &number;

Memory addresses are normally displayed using %p.
`,

  summary:
    "Every variable occupies a location in memory. The & operator obtains the memory address of a variable, and that address can be stored in a pointer.",

  keyPoints: [
    "Every variable has a memory address.",
    "The & operator obtains the address of a variable.",
    "Memory addresses are normally printed using %p.",
    "A pointer can store the address obtained using &.",
    "The address of a pointer itself can be obtained using &ptr.",
  ],
};

export default lesson2;