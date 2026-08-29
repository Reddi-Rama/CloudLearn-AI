const lesson13 = {
  id: "lesson13",

  title: "Array of Strings",

  content: `

# Lesson 13: Array of Strings

---

## Introduction

In many programs, we need to store **multiple strings** instead of just one.

For example, a student management program may need to store:

Ravi

Kiran

Anil

Suresh

Instead of creating separate variables:

char name1[20];
char name2[20];
char name3[20];
char name4[20];

we can use an **array of strings**.

An array of strings is commonly represented as a **two-dimensional character array**.

char names[4][20];

Here:

4 → Number of strings

20 → Maximum storage for each string

---

# 1. Declaring an Array of Strings

The general form is:

char array_name[number_of_strings][maximum_length];

Example:

char names[5][30];

This can store five strings, with up to 29 characters per string plus the terminating '\\0'.

---

# 2. Initializing an Array of Strings

We can initialize it during declaration:

\`\`\`c
char names[3][20] =
{
    "Ravi",
    "Kiran",
    "Anil"
};
\`\`\`

The strings are stored as:

names[0] → Ravi

names[1] → Kiran

names[2] → Anil

---

# 3. Accessing Individual Strings

An individual string can be accessed using the first index.

\`\`\`c
printf("%s\\n", names[0]);
\`\`\`

Output:

Ravi

Similarly:

\`\`\`c
printf("%s\\n", names[1]);
\`\`\`

Output:

Kiran

---

# 4. Accessing Individual Characters

Both indexes can be used to access a particular character.

names[0][0]

means:

First string → First character

For:

\`\`\`c
char names[3][20] =
{
    "Ravi",
    "Kiran",
    "Anil"
};
\`\`\`

we have:

names[0][0] → 'R'

names[1][0] → 'K'

names[2][0] → 'A'

---

# 5. Displaying All Strings

A loop can be used to display every string.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char names[3][20] =
    {
        "Ravi",
        "Kiran",
        "Anil"
    };

    for (int i = 0; i < 3; i++)
    {
        printf("%s\\n", names[i]);
    }

    return 0;
}
\`\`\`

Output:

Ravi

Kiran

Anil

---

# 6. Taking Input for Multiple Strings

We can use a loop with scanf():

\`\`\`c
#include <stdio.h>

int main(void)
{
    char names[3][20];

    for (int i = 0; i < 3; i++)
    {
        printf("Enter name %d: ", i + 1);
        scanf("%19s", names[i]);
    }

    printf("\\nNames:\\n");

    for (int i = 0; i < 3; i++)
    {
        printf("%s\\n", names[i]);
    }

    return 0;
}
\`\`\`

---

# 7. Using fgets() for Multiple Strings

If names can contain spaces, fgets() is more suitable.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char names[3][50];

    for (int i = 0; i < 3; i++)
    {
        printf("Enter name %d: ", i + 1);

        fgets(names[i], sizeof(names[i]), stdin);

        names[i][strcspn(names[i], "\\n")] = '\\0';
    }

    printf("\\nNames:\\n");

    for (int i = 0; i < 3; i++)
    {
        printf("%s\\n", names[i]);
    }

    return 0;
}
\`\`\`

---

# 8. Comparing Strings in an Array

We can use strcmp() to compare individual strings.

\`\`\`c
if (strcmp(names[0], names[1]) == 0)
{
    printf("Names are equal\\n");
}
\`\`\`

The strings are compared based on their contents.

---

# 9. Searching an Array of Strings

Suppose:

\`\`\`c
char names[4][20] =
{
    "Ravi",
    "Kiran",
    "Anil",
    "Suresh"
};
\`\`\`

We can search for "Anil":

\`\`\`c
for (int i = 0; i < 4; i++)
{
    if (strcmp(names[i], "Anil") == 0)
    {
        printf("Name found at index %d\\n", i);
        break;
    }
}
\`\`\`

Output:

Name found at index 2

---

# 10. Sorting an Array of Strings

An array of strings can also be sorted.

For example, strcmp() can be used to compare two names and strcpy() can be used for swapping.

\`\`\`c
if (strcmp(names[j], names[j + 1]) > 0)
{
    char temp[20];

    strcpy(temp, names[j]);
    strcpy(names[j], names[j + 1]);
    strcpy(names[j + 1], temp);
}
\`\`\`

This can be placed inside a sorting algorithm.

---

# 11. Practical Example — Student Names

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char names[5][30];

    for (int i = 0; i < 5; i++)
    {
        printf("Enter student %d name: ", i + 1);

        fgets(names[i], sizeof(names[i]), stdin);

        names[i][strcspn(names[i], "\\n")] = '\\0';
    }

    printf("\\n--- Student Names ---\\n");

    for (int i = 0; i < 5; i++)
    {
        printf("Student %d: %s\\n", i + 1, names[i]);
    }

    return 0;
}
\`\`\`

---

# 12. Understanding the Two Dimensions

Consider:

char names[3][20];

The first dimension identifies the **string**:

names[0]

names[1]

names[2]

The second dimension identifies the **character position**:

names[0][0]

names[0][1]

names[0][2]

...

So:

First index → Which string?

Second index → Which character?

---

# 13. Applications

Arrays of strings are useful for storing:

- Student names
- City names
- Product names
- Course names
- Menu options
- Employee names
- Commands
- Categories

---

# 14. Important Points

Array of strings

↓

Two-dimensional character array

↓

First index → String

Second index → Character

↓

strcmp() → Compare

strcpy() → Copy

---

# 15. Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    char subjects[4][30] =
    {
        "C Programming",
        "Data Structures",
        "Database Systems",
        "Computer Networks"
    };

    for (int i = 0; i < 4; i++)
    {
        printf("%s\\n", subjects[i]);
    }

    return 0;
}
\`\`\`

Output:

C Programming

Data Structures

Database Systems

Computer Networks

---

# Lesson Summary

An array of strings allows a program to store multiple strings using a two-dimensional character array.

Example:

char names[5][30];

The first index selects the string, while the second index selects a character within that string.

Arrays of strings are very useful in practical programs such as student management systems, menus, and search programs.

---

# Module 6 Progress

✓ Lesson 1 — Introduction to Strings

✓ Lesson 2 — Character Arrays and Strings

✓ Lesson 3 — String Declaration and Initialization

✓ Lesson 4 — Null Character '\\0'

✓ Lesson 5 — Reading and Displaying Strings

✓ Lesson 6 — String Input Using fgets()

✓ Lesson 7 — String Length

✓ Lesson 8 — Copying Strings

✓ Lesson 9 — Comparing Strings

✓ Lesson 10 — Concatenating Strings

✓ Lesson 11 — Searching in Strings

✓ Lesson 12 — String Manipulation Functions

✓ Lesson 13 — Array of Strings

→ Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 13 Complete**

Next: **Lesson 14 — Common String Mistakes**

`,
};

export default lesson13;