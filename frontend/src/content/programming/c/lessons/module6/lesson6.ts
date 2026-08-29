const lesson6 = {
  id: "lesson6",

  title: "String Input Using fgets()",

  content: `

# Lesson 6: String Input Using fgets()

---

## Introduction

The **fgets()** function is commonly used to read a complete line of text into a character array.

Unlike:

scanf("%s", name);

fgets() can read spaces within the input.

For example, it can read:

Rahul Kumar

as one string.

---

# 1. Basic Syntax

The basic form is:

fgets(string, size, stdin);

For example:

char name[30];

fgets(name, sizeof(name), stdin);

Here:

name → destination array

sizeof(name) → size of the array

stdin → standard input

---

# 2. Complete Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[30];

    printf("Enter your name: ");

    fgets(name, sizeof(name), stdin);

    printf("Name: %s", name);

    return 0;
}
\`\`\`

If the user enters:

Rahul Kumar

the program can read the complete line.

---

# 3. Why fgets() Is Useful

Consider:

scanf("%29s", name);

Input:

Rahul Kumar

Only:

Rahul

is read.

With:

fgets(name, sizeof(name), stdin);

the complete line:

Rahul Kumar

can be stored.

---

# 4. The Newline Character

When the user presses Enter, fgets() may store the newline character '\\n' if there is room in the array.

For example, the input:

Hello

may be stored as:

H e l l o \\n \\0

Therefore, the newline may need to be removed when we want a clean string.

---

# 5. Removing the Newline

A common technique is:

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[30];

    printf("Enter your name: ");

    fgets(name, sizeof(name), stdin);

    name[strcspn(name, "\\n")] = '\\0';

    printf("Name: %s\\n", name);

    return 0;
}
\`\`\`

The strcspn() function is part of the standard string library.

It finds the position of the first character from the specified set.

Here it is used to locate the newline.

---

# 6. Using fgets() With a Sentence

\`\`\`c
#include <stdio.h>

int main(void)
{
    char message[100];

    printf("Enter a message: ");

    fgets(message, sizeof(message), stdin);

    printf("Message: %s", message);

    return 0;
}
\`\`\`

Input:

Welcome to C programming

The complete line can be read.

---

# 7. fgets() and Array Size

Suppose:

char name[20];

Then:

fgets(name, sizeof(name), stdin);

uses the size of the array to limit how much input is stored.

This helps prevent input from exceeding the available array storage.

---

# 8. Reading Student Names

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[50];

    printf("Enter student name: ");

    fgets(name, sizeof(name), stdin);

    name[strcspn(name, "\\n")] = '\\0';

    printf("Student Name: %s\\n", name);

    return 0;
}
\`\`\`

Example:

\`\`\`text
Enter student name: Rahul Kumar
Student Name: Rahul Kumar
\`\`\`

---

# 9. Reading an Address

fgets() is particularly useful for text containing spaces.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char address[100];

    printf("Enter address: ");

    fgets(address, sizeof(address), stdin);

    printf("Address: %s", address);

    return 0;
}
\`\`\`

Example input:

Main Road, Hyderabad

The complete line can be read.

---

# 10. scanf() vs fgets()

## scanf("%s")

- Reads one word.
- Stops when whitespace is encountered.
- Can use a field width to limit input.
- Not suitable for complete lines containing spaces.

## fgets()

- Can read spaces.
- Can read a complete line.
- Takes the array size as an argument.
- May store the newline character '\\n'.

For example:

Input:

Rahul Kumar

scanf("%s") → Rahul

fgets() → Rahul Kumar

---

# 11. Using fgets() After scanf()

One common issue occurs when mixing numeric input and fgets().

For example:

\`\`\`c
int age;
char name[30];

scanf("%d", &age);
fgets(name, sizeof(name), stdin);
\`\`\`

The newline left by scanf() may be consumed by fgets() instead of the intended name.

A common approach is to handle the leftover input before calling fgets().

One simple method is:

\`\`\`c
int c;

while ((c = getchar()) != '\\n' && c != EOF)
{
}
\`\`\`

Then:

fgets(name, sizeof(name), stdin);

---

# 12. Example With Integer Input

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    int age;
    char name[30];

    printf("Enter age: ");
    scanf("%d", &age);

    while (getchar() != '\\n')
    {
    }

    printf("Enter name: ");

    fgets(name, sizeof(name), stdin);

    name[strcspn(name, "\\n")] = '\\0';

    printf("\\nAge: %d\\n", age);
    printf("Name: %s\\n", name);

    return 0;
}
\`\`\`

---

# 13. Important Point About fgets()

fgets() does not automatically remove the newline character when it successfully reads one.

Therefore, if the newline matters to your program, you should handle it appropriately.

A common approach is:

name[strcspn(name, "\\n")] = '\\0';

---

# 14. Practical Example — Student Details

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[50];
    char course[50];

    printf("Enter student name: ");

    fgets(name, sizeof(name), stdin);
    name[strcspn(name, "\\n")] = '\\0';

    printf("Enter course name: ");

    fgets(course, sizeof(course), stdin);
    course[strcspn(course, "\\n")] = '\\0';

    printf("\\n--- Student Details ---\\n");
    printf("Name: %s\\n", name);
    printf("Course: %s\\n", course);

    return 0;
}
\`\`\`

Example:

\`\`\`text
Enter student name: Rahul Kumar
Enter course name: C Programming

--- Student Details ---
Name: Rahul Kumar
Course: C Programming
\`\`\`

---

# 15. Important Points

Remember:

fgets()

↓

Reads a line of text

↓

Can read spaces

↓

Uses a specified array size

↓

May store '\\n'

↓

Often requires newline handling

---

# Lesson Summary

The basic form of fgets() is:

fgets(name, sizeof(name), stdin);

It is particularly useful for reading strings that contain spaces.

For example:

Rahul Kumar

Welcome to C Programming

Hyderabad, Andhra Pradesh

can be read as complete lines.

---

# Module 6 Progress

✓ Lesson 1 — Introduction to Strings

✓ Lesson 2 — Character Arrays and Strings

✓ Lesson 3 — String Declaration and Initialization

✓ Lesson 4 — Null Character '\\0'

✓ Lesson 5 — Reading and Displaying Strings

✓ Lesson 6 — String Input Using fgets()

→ Lesson 7 — String Length

  Lesson 8 — Copying Strings

  Lesson 9 — Comparing Strings

  Lesson 10 — Concatenating Strings

  Lesson 11 — Searching in Strings

  Lesson 12 — String Manipulation Functions

  Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 6 Complete**

Next: **Lesson 7 — String Length**

`,
};

export default lesson6;