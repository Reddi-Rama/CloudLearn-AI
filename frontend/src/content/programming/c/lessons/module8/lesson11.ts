const lesson11 = {
  id: "lesson11",
  title: "Structures vs Unions",

  content: `
Introduction

Structures and unions are both user-defined data types in C.

Their syntax is similar, but their memory organization and purpose are different.

The main difference is:

Structure
    ↓
Each member has separate storage

Union
    ↓
All members share the same storage

---

1. Structure Example

struct Data
{
    int number;
    float decimal;
    char character;
};

A structure provides storage for all three members.

Conceptually:

Structure
┌─────────────┐
│    number   │
├─────────────┤
│   decimal   │
├─────────────┤
│  character  │
└─────────────┘

The structure can contain meaningful values for all its members simultaneously.

---

2. Union Example

union Data
{
    int number;
    float decimal;
    char character;
};

The members share storage.

Conceptually:

Union
┌──────────────────┐
│  Shared Storage  │
│                  │
│ number / decimal │
│ / character      │
└──────────────────┘

---

3. Memory Difference

Consider:

struct Data
{
    int number;
    float decimal;
    char character;
};

The structure needs storage for its members, plus any padding required by the implementation.

For:

union Data
{
    int number;
    float decimal;
    char character;
};

the union needs enough storage for its largest member, subject to alignment requirements.

Therefore, a union can use less memory when the alternatives do not need to exist simultaneously.

---

4. Example Using sizeof

#include <stdio.h>

struct Data
{
    int number;
    float decimal;
    char character;
};

union DataUnion
{
    int number;
    float decimal;
    char character;
};

int main(void)
{
    printf("Structure size: %zu\\n",
           sizeof(struct Data));

    printf("Union size: %zu\\n",
           sizeof(union DataUnion));

    return 0;
}

The exact values depend on the C implementation because structure padding and alignment can affect the size.

---

5. Data Storage

Structure

struct Student
{
    int rollNumber;
    float marks;
};

Both values can be stored at the same time:

rollNumber → 101
marks      → 85.5

Union

union Data
{
    int number;
    float decimal;
};

The same storage is used by both members.

The program should keep track of which member represents the current value.

---

6. Structure Example

#include <stdio.h>

struct Student
{
    int rollNumber;
    float marks;
};

int main(void)
{
    struct Student student;

    student.rollNumber = 101;
    student.marks = 85.5f;

    printf("Roll Number: %d\\n",
           student.rollNumber);

    printf("Marks: %.2f\\n",
           student.marks);

    return 0;
}

Output:

Roll Number: 101
Marks: 85.50

Both members are available.

---

7. Union Example

#include <stdio.h>

union Data
{
    int number;
    float decimal;
};

int main(void)
{
    union Data data;

    data.number = 101;

    printf("Number: %d\\n",
           data.number);

    data.decimal = 85.5f;

    printf("Decimal: %.2f\\n",
           data.decimal);

    return 0;
}

Here the same storage is reused when decimal is assigned.

---

8. Syntax Difference

Structure:

struct Data
{
    int number;
    float decimal;
};

Union:

union Data
{
    int number;
    float decimal;
};

The main syntax difference is:

struct

vs

union

---

9. Accessing Members

Both use the dot operator when working with an ordinary variable.

Structure:

student.marks

Union:

data.number

Pointers to either type use the arrow operator:

studentPtr->marks
dataPtr->number

---

10. When to Use a Structure

Use a structure when all the members represent information that should exist together.

Examples:

Student
├── name
├── rollNumber
└── marks

Employee
├── id
├── name
└── salary

Product
├── id
├── name
└── price

All these pieces of information belong to the same record.

---

11. When to Use a Union

Use a union when a value can have different possible representations and those alternatives do not need separate storage at the same time.

For example:

union Value
{
    int number;
    float decimal;
    char character;
};

A program may choose which member represents the current value.

---

12. Comparison

Feature:

Structure:
- Keyword: struct
- Member storage: Separate
- Members available simultaneously: Yes
- Size: Sum of member storage plus possible padding
- Memory usage: Usually higher
- Main purpose: Group related data

Union:
- Keyword: union
- Member storage: Shared
- Members available simultaneously: One active representation at a time
- Size: Based on largest member plus alignment
- Memory usage: Often lower
- Main purpose: Represent alternatives using shared storage

---

13. Real-World Example

Suppose a product record needs:

Product ID
Product Name
Price

A structure is appropriate:

struct Product
{
    int id;
    char name[50];
    float price;
};

All three values are needed together.

But if a field can represent either an integer or a floating-point value, a union may be appropriate:

union Value
{
    int integerValue;
    float floatValue;
};

Only one representation may be needed at a time.

---

14. Structure Containing a Union

A structure can contain a union.

For example:

struct Data
{
    int type;

    union
    {
        int number;
        float decimal;
    } value;
};

Here:

struct Data
├── type
└── value
    ├── number
    └── decimal

This pattern is useful for representing a value whose type can vary.

---

15. Important Points

STRUCTURE
    ↓
Separate memory for members
    ↓
All members can hold values simultaneously

UNION
    ↓
Shared memory
    ↓
Different members use the same storage

The choice depends on whether the data represents:

A group of information
        ↓
Structure

Different possible representations
        ↓
Union

---

Lesson Summary

Both structures and unions allow programmers to create custom data types, but they handle memory differently.

A structure stores each member separately.

A union makes its members share the same storage.

Use:

struct

when related values need to exist together.

Use:

union

when different possible representations can share the same memory.
`,

  summary:
    "Structures store each member separately, while unions make their members share the same storage.",

  keyPoints: [
    "Structures and unions are user-defined data types in C.",
    "A structure gives each member separate storage.",
    "A union makes all members share the same storage.",
    "Structure members can hold values simultaneously.",
    "A union is intended for alternative representations using shared storage.",
    "The size of a structure includes its members and possible padding.",
    "The size of a union is based on its largest member and alignment requirements.",
    "Use a structure to group related information.",
    "Use a union when different possible representations can share the same memory.",
    "Both structure and union variables use the dot operator, while pointers use the arrow operator."
  ],
};

export default lesson11;