const lesson12 = {
  id: "lesson12",
  title: "Enumerations (enum)",

  content: `
Introduction

An enumeration, or enum, is a user-defined type that consists of a set of named integer constants.

It makes programs easier to read because we can use meaningful names instead of repeatedly using numeric values.

For example, instead of:

int status = 1;

we can write:

enum Status status = ACTIVE;

The second version clearly communicates what the value represents.

---

1. Defining an Enumeration

The basic syntax is:

enum EnumName
{
    CONSTANT1,
    CONSTANT2,
    CONSTANT3
};

Example:

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

---

2. Creating an Enum Variable

After defining the enumeration:

enum Day today;

Now today can be assigned one of the named enumeration constants.

today = MONDAY;

---

3. Complete Example

#include <stdio.h>

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY,
    THURSDAY,
    FRIDAY,
    SATURDAY,
    SUNDAY
};

int main(void)
{
    enum Day today = WEDNESDAY;

    printf("Day value = %d\\n",
           today);

    return 0;
}

Output:

Day value = 2

By default, enumeration constants begin at 0.

So:

MONDAY    → 0
TUESDAY   → 1
WEDNESDAY → 2
THURSDAY  → 3
...

---

4. Default Enumeration Values

Consider:

enum Color
{
    RED,
    GREEN,
    BLUE
};

The values are:

RED   → 0
GREEN → 1
BLUE  → 2

If no values are specified, each constant normally receives the previous value plus one, beginning from zero.

---

5. Assigning Specific Values

We can explicitly assign values.

enum Status
{
    OFF = 0,
    ON = 1
};

Now:

OFF → 0
ON  → 1

Example:

enum Status status = ON;

---

6. Enumeration With Custom Values

We can assign different integer values:

enum Level
{
    LOW = 10,
    MEDIUM = 20,
    HIGH = 30
};

Then:

LOW    → 10
MEDIUM → 20
HIGH   → 30

---

7. Mixing Explicit and Automatic Values

Consider:

enum Number
{
    FIRST = 5,
    SECOND,
    THIRD = 10,
    FOURTH
};

The values are:

FIRST  → 5
SECOND → 6
THIRD  → 10
FOURTH → 11

An unspecified enumerator continues from the previous enumerator's value.

---

8. Using enum With switch

Enumerations work well with switch statements.

#include <stdio.h>

enum Day
{
    MONDAY,
    TUESDAY,
    WEDNESDAY
};

int main(void)
{
    enum Day today = TUESDAY;

    switch (today)
    {
        case MONDAY:
            printf("Monday\\n");
            break;

        case TUESDAY:
            printf("Tuesday\\n");
            break;

        case WEDNESDAY:
            printf("Wednesday\\n");
            break;
    }

    return 0;
}

Output:

Tuesday

---

9. Why Use Enumerations?

Without enum, code might contain values like:

int status = 2;

It is not immediately clear what 2 means.

With an enumeration:

enum Status
{
    PENDING,
    APPROVED,
    REJECTED
};

enum Status status = APPROVED;

The meaning is much clearer.

---

10. Practical Example — Traffic Signal

#include <stdio.h>

enum Signal
{
    RED,
    YELLOW,
    GREEN
};

int main(void)
{
    enum Signal signal = GREEN;

    if (signal == GREEN)
    {
        printf("Go\\n");
    }

    return 0;
}

Output:

Go

---

11. Enumeration With Structures

An enumeration can be used as a structure member.

enum Status
{
    ACTIVE,
    INACTIVE
};

struct Employee
{
    int id;
    enum Status status;
};

Now an employee can have a named status:

struct Employee employee = {101, ACTIVE};

---

12. Enumeration Values Are Integer Constants

Enumeration constants have integer values.

For example:

enum Color
{
    RED = 1,
    GREEN = 2,
    BLUE = 3
};

We can print:

printf("%d\\n", RED);

Output:

1

The names make the code easier to understand, while the underlying values are integer constants.

---

13. Practical Example — Student Result

#include <stdio.h>

enum Result
{
    FAIL,
    PASS
};

struct Student
{
    int rollNumber;
    float marks;
    enum Result result;
};

int main(void)
{
    struct Student student =
    {
        101,
        75.0f,
        PASS
    };

    if (student.result == PASS)
    {
        printf("Student passed.\\n");
    }
    else
    {
        printf("Student failed.\\n");
    }

    return 0;
}

Output:

Student passed.

---

14. Important Difference

Compare:

int status = 1;

with:

enum Status
{
    INACTIVE,
    ACTIVE
};

enum Status status = ACTIVE;

The second version gives the value a meaningful name.

This improves:

- Readability
- Maintainability
- Program organization

---

15. Important Points

enum
    ↓
Enumeration keyword

Named constants
    ↓
Represent integer values

Default first value
    ↓
0

Next values
    ↓
Previous value + 1

Custom values
    ↓
Can be explicitly assigned

Example:

enum Status
{
    PENDING,
    APPROVED,
    REJECTED
};

This is much easier to understand than using unexplained numbers throughout a program.

---

Lesson Summary

An enumeration (enum) provides a set of named integer constants.

Example:

enum Status
{
    PENDING,
    APPROVED,
    REJECTED
};

We can then write:

enum Status status = APPROVED;

instead of using an unexplained numeric value.

Enumerations are especially useful for representing states, categories, modes, options, and other fixed sets of values.
`,

  summary:
    "An enumeration provides a set of named integer constants that make programs easier to read and understand.",

  keyPoints: [
    "enum is used to define an enumeration.",
    "An enumeration contains named integer constants.",
    "By default, the first enumeration constant begins at 0.",
    "The next unspecified constant normally receives the previous value plus one.",
    "Specific integer values can be assigned explicitly.",
    "Enumerations work well with switch statements.",
    "An enum can be used as a structure member.",
    "Enumeration constants have integer values.",
    "Enums improve readability and maintainability.",
    "Enums are useful for states, categories, modes, options, and other fixed sets of values."
  ],
};

export default lesson12;