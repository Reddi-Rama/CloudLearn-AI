const lesson10 = {
  id: "lesson10",

  title: "Concatenating Strings",

  content: `

# Lesson 10: Concatenating Strings

---

## Introduction

**String concatenation** means joining two or more strings together to form a single string.

For example:

"Hello" + "World"

produces:

HelloWorld

In C, the standard library provides the strcat() function for concatenating strings.

It is declared in:

#include <string.h>

---

# 1. strcat() Function

The basic syntax is:

strcat(destination, source);

The contents of source are appended to the end of destination.

Example:

char first[30] = "Hello ";
char second[] = "World";

strcat(first, second);

Now:

first → Hello World

---

# 2. Complete Program

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[30] = "Hello ";
    char second[] = "World";

    strcat(first, second);

    printf("%s\\n", first);

    return 0;
}
\`\`\`

Output:

Hello World

---

# 3. How strcat() Works

Before concatenation:

first:

H e l l o   \\0

second:

W o r l d \\0

After:

strcat(first, second);

the destination becomes:

H e l l o   W o r l d \\0

The original terminating '\\0' of first is replaced by the first character of second, and a new '\\0' is placed at the end.

---

# 4. Destination Must Have Enough Space

The destination array must have enough room for the combined string.

For example:

char first[30] = "Hello ";
char second[] = "World";

strcat(first, second);

is suitable because first has enough storage for:

Hello World + '\\0'

Do not use a destination array that is too small.

---

# 5. Joining First Name and Last Name

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char firstName[50] = "Rahul ";
    char lastName[] = "Kumar";

    strcat(firstName, lastName);

    printf("Full Name: %s\\n", firstName);

    return 0;
}
\`\`\`

Output:

Full Name: Rahul Kumar

---

# 6. Adding a Space

If the first string does not already contain a space, we can add one separately.

\`\`\`c
char fullName[50] = "Rahul";

strcat(fullName, " ");
strcat(fullName, "Kumar");
\`\`\`

Result:

Rahul Kumar

---

# 7. Concatenating User Input

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char firstName[50];
    char lastName[50];

    printf("Enter first name: ");
    scanf("%49s", firstName);

    printf("Enter last name: ");
    scanf("%49s", lastName);

    strcat(firstName, " ");
    strcat(firstName, lastName);

    printf("Full Name: %s\\n", firstName);

    return 0;
}
\`\`\`

The destination array must have enough capacity for the combined result.

---

# 8. Concatenating Strings Using fgets()

For names containing spaces, fgets() can be used.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char firstName[100];
    char lastName[100];

    printf("Enter first name: ");
    fgets(firstName, sizeof(firstName), stdin);

    printf("Enter last name: ");
    fgets(lastName, sizeof(lastName), stdin);

    firstName[strcspn(firstName, "\\n")] = '\\0';
    lastName[strcspn(lastName, "\\n")] = '\\0';

    strcat(firstName, " ");
    strcat(firstName, lastName);

    printf("Full Name: %s\\n", firstName);

    return 0;
}
\`\`\`

---

# 9. Concatenating More Than Two Strings

Several strings can be joined one after another.

\`\`\`c
char message[100] = "Welcome ";

strcat(message, "to ");
strcat(message, "C ");
strcat(message, "Programming");
\`\`\`

Result:

Welcome to C Programming

---

# 10. Manual Concatenation

The basic idea of concatenation can also be implemented using loops.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char first[30] = "Hello ";
    char second[] = "World";

    int i = 0;
    int j = 0;

    while (first[i] != '\\0')
    {
        i++;
    }

    while (second[j] != '\\0')
    {
        first[i] = second[j];
        i++;
        j++;
    }

    first[i] = '\\0';

    printf("%s\\n", first);

    return 0;
}
\`\`\`

Output:

Hello World

---

# 11. Practical Example

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char course[100] = "C Programming";
    char topic[] = " - Strings";

    strcat(course, topic);

    printf("%s\\n", course);

    return 0;
}
\`\`\`

Output:

C Programming - Strings

---

# 12. Important Difference

C does not support string concatenation using +.

This is not the normal way to join C strings:

first + second

Instead, use:

strcat(first, second);

---

# 13. Common Mistake

This can be dangerous:

\`\`\`c
char first[10] = "Hello";
char second[] = " Programming";

strcat(first, second);
\`\`\`

The destination array may not have enough space for the combined string.

Always make sure the destination can hold the complete result.

---

# 14. Practical Application

String concatenation is useful for creating:

- Full names
- Complete addresses
- Messages
- File paths
- Descriptions
- Formatted text

For example:

First Name + Last Name

↓

Full Name

---

# 15. Important Points

strcat()

↓

Joins two strings

↓

Source is appended to destination

↓

Declared in <string.h>

↓

Destination must have enough space

---

# Lesson Summary

The standard function for concatenating strings is:

strcat(destination, source);

Example:

char message[50] = "Hello ";
char name[] = "Ravi";

strcat(message, name);

Result:

Hello Ravi

String concatenation is useful whenever separate pieces of text need to be combined.

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

→ Lesson 11 — Searching in Strings

  Lesson 12 — String Manipulation Functions

  Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 10 Complete**

Next: **Lesson 11 — Searching in Strings**

`,
};

export default lesson10;