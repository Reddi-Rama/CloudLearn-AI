const lesson4 = {
  id: "lesson4",
  title: "Dereferencing and the * Operator",

  content: `
In the previous lessons, we learned that a pointer stores the address of another variable.

For example:

int number = 25;
int *ptr = &number;

Here:

number → 25
ptr    → address of number

But how can we use ptr to access the value stored at that address?

This is where the dereference operator * is used.

1. What Is Dereferencing?

Dereferencing means accessing the value stored at the memory address held by a pointer.

If:

int number = 25;
int *ptr = &number;

then:

*ptr

gives:

25

So:

ptr  → address of number
*ptr → value stored at that address

2. The * Operator

The * symbol has two important uses in pointer programming.

During declaration:

int *ptr;

It declares ptr as a pointer to an integer.

During dereferencing:

*ptr

It accesses the value stored at the address contained in ptr.

3. Simple Example

#include <stdio.h>

int main(void)
{
    int number = 25;
    int *ptr = &number;

    printf("Number: %d\\n", number);
    printf("Value through pointer: %d\\n", *ptr);

    return 0;
}

Output:

Number: 25
Value through pointer: 25

Both number and *ptr refer to the same stored value.

4. Understanding the Relationship

Consider:

int number = 50;
int *ptr = &number;

Conceptually:

        ┌──────────────┐
        │      50      │
        └──────────────┘
               ↑
               │
          address stored
               │
        ┌──────────────┐
ptr ──► │   address    │
        └──────────────┘

Therefore:

number

means:

value of number

while:

ptr

means:

address stored in ptr

and:

*ptr

means:

value at that address

5. Changing a Value Through a Pointer

One of the most useful features of pointers is that we can modify a variable through its pointer.

#include <stdio.h>

int main(void)
{
    int number = 10;
    int *ptr = &number;

    *ptr = 50;

    printf("Number: %d\\n", number);

    return 0;
}

Output:

Number: 50

The statement:

*ptr = 50;

changes the value of number.

6. Why Did number Change?

Initially:

number = 10

and:

ptr → address of number

When we write:

*ptr = 50;

we are saying:

Store 50 at the memory location pointed to by ptr.

Since ptr points to number, number becomes:

number = 50

7. Reading and Modifying Through a Pointer

#include <stdio.h>

int main(void)
{
    int marks = 75;
    int *ptr = &marks;

    printf("Before: %d\\n", *ptr);

    *ptr = 90;

    printf("After: %d\\n", *ptr);
    printf("Marks: %d\\n", marks);

    return 0;
}

Output:

Before: 75
After: 90
Marks: 90

8. Dereferencing a Character Pointer

Pointers are not limited to integers.

#include <stdio.h>

int main(void)
{
    char grade = 'B';
    char *ptr = &grade;

    printf("Grade: %c\\n", *ptr);

    return 0;
}

Output:

Grade: B

9. Dereferencing a Float Pointer

#include <stdio.h>

int main(void)
{
    float price = 99.5f;
    float *ptr = &price;

    printf("Price: %.2f\\n", *ptr);

    return 0;
}

Output:

Price: 99.50

10. Pointer and Dereference

The difference is important:

ptr

gives the address stored in the pointer.

*ptr

gives the value stored at that address.

For example:

number = 100

ptr  → address of number
*ptr → 100

11. Using & and * Together

Consider:

int number = 25;

The address is:

&number

If:

int *ptr = &number;

then:

*ptr

gives the original value.

Conceptually:

&number → address
ptr     → same address
*ptr    → number

Therefore:

*(&number)

evaluates to the value of number.

12. Example

#include <stdio.h>

int main(void)
{
    int number = 25;

    printf("Value: %d\\n", *(&number));

    return 0;
}

Output:

Value: 25

Although this works, writing simply:

number

is clearer in normal code.

13. Multiple Pointers to the Same Variable

Several pointers can point to the same variable.

#include <stdio.h>

int main(void)
{
    int number = 100;

    int *p1 = &number;
    int *p2 = &number;

    *p1 = 200;

    printf("Number: %d\\n", number);
    printf("Through p2: %d\\n", *p2);

    return 0;
}

Output:

Number: 200
Through p2: 200

Both pointers refer to the same variable.

14. Important Rule

A pointer should point to a valid object before it is dereferenced.

This is valid:

int number = 10;
int *ptr = &number;

printf("%d", *ptr);

But this is unsafe:

int *ptr;

printf("%d", *ptr);

because ptr has not been initialized with a valid address.

15. Important Points

*ptr
↓
Dereference pointer
↓
Access value stored at the pointed-to address

Remember:

&variable
    ↓
  address

ptr
    ↓
stored address

*ptr
    ↓
stored value

Lesson Summary

Dereferencing allows a pointer to access the value stored at its target address.

Example:

int number = 10;
int *ptr = &number;

printf("%d\\n", *ptr);

Output:

10

We can also modify the original variable:

*ptr = 50;

After this:

number = 50

Pointers become much more useful once we understand this relationship between address and value.
`,

  summary:
    "Dereferencing allows a pointer to access or modify the value stored at its target address. The * operator is used to access that value.",

  keyPoints: [
    "Dereferencing a pointer means accessing the value at its stored address.",
    "The * operator is used for dereferencing.",
    "*ptr reads the value pointed to by ptr.",
    "*ptr = value can modify the original variable.",
    "A pointer must point to a valid object before it is dereferenced.",
    "&variable gives an address, while *ptr accesses the value at that address.",
  ],
};

export default lesson4;