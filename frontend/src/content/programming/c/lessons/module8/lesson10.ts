const lesson10 = {
  id: "lesson10",
  title: "Introduction to Unions",

  content: `
Introduction

A union is a user-defined data type in C that allows different members to share the same memory location.

A union is similar to a structure in syntax, but there is an important difference:

Structure
    ↓
Each member has separate memory

Union
    ↓
All members share the same memory

Because the members share memory, a union can store the value of one member at a time in the intended use.

---

1. Defining a Union

The union keyword is used to define a union.

union Data
{
    int number;
    float decimal;
    char character;
};

Here:

union     → keyword
Data      → union name
number    → member
decimal   → member
character → member

---

2. Creating a Union Variable

After defining the union, we can create a variable:

union Data data;

Now data can be used to access its members.

---

3. Assigning a Value to a Union Member

union Data data;

data.number = 10;

Now the union contains the value of number.

We can print it:

printf("%d\\n", data.number);

Output:

10

---

4. Example Program

#include <stdio.h>

union Data
{
    int number;
    float decimal;
    char character;
};

int main(void)
{
    union Data data;

    data.number = 10;

    printf("Number = %d\\n",
           data.number);

    return 0;
}

Output:

Number = 10

---

5. Assigning Another Member

We can assign another member:

data.decimal = 25.5f;

Now the union is being used to store a float.

printf("Decimal = %.2f\\n",
       data.decimal);

Output:

25.50

The important point is that the members share the same storage.

---

6. Structure vs Union Memory

Consider a structure:

struct Data
{
    int number;
    float decimal;
    char character;
};

Each member has its own storage.

Conceptually:

Structure
┌─────────────┐
│    number   │
├─────────────┤
│   decimal   │
├─────────────┤
│  character  │
└─────────────┘

For a union:

union Data
{
    int number;
    float decimal;
    char character;
};

The members share storage.

Conceptually:

Union
┌────────────────────┐
│   Shared memory    │
│                    │
│ number / decimal / │
│ character          │
└────────────────────┘

---

7. Size of a Union

The size of a union is sufficient to hold its largest member, subject to alignment requirements.

Example:

union Data
{
    int number;
    float decimal;
    char character;
};

We can check its size:

printf("%zu\\n",
       sizeof(union Data));

The exact size depends on the implementation and the sizes and alignment of its member types.

---

8. Initializing a Union

A union can be initialized when it is declared.

union Data data = {10};

The first member, number, is initialized.

For clarity, a designated initializer can be used:

union Data data = {.decimal = 25.5f};

---

9. Changing the Active Member

Consider:

union Data data;

data.number = 10;

The program is using the number member.

If we then write:

data.decimal = 20.5f;

the shared storage is updated for the decimal member.

Therefore, a union should be used with an understanding of which member currently represents the stored value.

---

10. Practical Example

#include <stdio.h>

union Value
{
    int number;
    float price;
};

int main(void)
{
    union Value value;

    value.number = 100;

    printf("Number: %d\\n",
           value.number);

    value.price = 99.50f;

    printf("Price: %.2f\\n",
           value.price);

    return 0;
}

Output:

Number:
100

Price:
99.50

The same memory is reused when the member is changed.

---

11. Why Use Unions?

Unions are useful when a program needs different possible representations that do not need to be stored simultaneously.

Common applications include:

- Memory-efficient data representation
- Variant data
- Hardware-related programming
- Embedded systems
- Protocol data
- Low-level programming

---

12. Union With a Structure

A union can also contain structures.

For example:

struct IntegerData
{
    int value;
};

struct FloatData
{
    float value;
};

union Data
{
    struct IntegerData integer;
    struct FloatData decimal;
};

This allows different types of data to share the same storage.

---

13. Union Variable With . Operator

Like structures, a union variable uses the dot operator:

data.number

or:

data.decimal

The syntax is similar to structures.

The major difference is how the members use memory.

---

14. Union With a Pointer

A pointer to a union can be created:

union Data data;

union Data *ptr = &data;

Members can then be accessed using:

ptr->number

The arrow operator is used because ptr is a pointer.

---

15. Important Points

union
    ↓
User-defined data type

Members
    ↓
Share the same memory

.
    ↓
Access member through union variable

->
    ↓
Access member through union pointer

sizeof(union)
    ↓
Based on the storage requirements of its members

---

Lesson Summary

A union is a user-defined data type in which all members share the same memory location.

Example:

union Data
{
    int number;
    float decimal;
    char character;
};

Unlike a structure, a union does not provide separate storage for every member.

Unions are useful when different types of information need to occupy the same memory area at different times.
`,

  summary:
    "A union is a user-defined data type in which all members share the same memory location.",

  keyPoints: [
    "A union is a user-defined data type.",
    "All members of a union share the same memory.",
    "The union keyword is used to define a union.",
    "A union variable uses the dot operator to access members.",
    "A pointer to a union uses the arrow operator.",
    "The size of a union is sufficient for its largest member, subject to alignment requirements.",
    "A union can be initialized when it is declared.",
    "Changing the member being used updates the shared storage.",
    "Unions are useful when different representations do not need to be stored simultaneously.",
    "Unions are used in memory-efficient, embedded, hardware-related, protocol, and low-level programming.",
  ],
};

export default lesson10;