const lesson1 = {
  id: "lesson1",

  title: "Introduction to Strings",

  content: `

# Lesson 1: Introduction to Strings

---

## Introduction

A **string** is a sequence of characters used to represent text.

Examples of strings include:

"Hello"

"Computer"

"Welcome to C"

"Programming"

In C, there is no separate built-in string data type. Strings are represented using **arrays of characters**.

For example:

char name[20];

This creates a character array that can be used to store a string.

---

# 1. What Is a String?

A string is a sequence of characters stored in consecutive memory locations and terminated by a special character called the **null character**.

For example:

char name[] = "Hello";

The characters are stored conceptually as:

H   e   l   l   o   \\0

The '\\0' marks the end of the string.

---

# 2. Strings and Character Arrays

Consider:

char word[6] = "Hello";

The array contains:

Index:    0    1    2    3    4    5

          ┌────┬────┬────┬────┬────┬────┐
word:     │ H  │ e  │ l  │ l  │ o  │\\0  │
          └────┴────┴────┴────┴────┴────┘

There are five visible characters, but the array requires **six positions** because of the terminating '\\0'.

---

# 3. Declaring a String

A string can be declared using a character array:

char name[20];

This provides space for characters.

If the string contains fewer characters, the remaining space is available within the array.

---

# 4. Initializing a String

A string can be initialized using a string literal:

char name[] = "Ravi";

The compiler automatically includes the null character.

Conceptually:

R   a   v   i   \\0

---

# 5. String Literals

A sequence of characters enclosed in double quotation marks is called a **string literal**.

Examples:

"Hello"

"Programming"

"C Language"

"Good Morning"

String literals use:

" "

whereas a single character uses:

' '

For example:

char ch = 'A';

is a character.

char name[] = "A";

is a string containing the character A and the terminating null character.

---

# 6. Displaying a String

The %s format specifier is used with printf() to display a string.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[] = "Ravi";

    printf("%s\\n", name);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Ravi
\`\`\`

---

# 7. Accessing Individual Characters

Since a string is stored as a character array, individual characters can be accessed using indexes.

char name[] = "Ravi";

Then:

name[0] → 'R'

name[1] → 'a'

name[2] → 'v'

name[3] → 'i'

The null character is stored after the last character.

---

# 8. Modifying Characters

Individual characters can be changed.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[] = "Ravi";

    name[0] = 'K';

    printf("%s\\n", name);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Kavi
\`\`\`

The character at index 0 was changed from R to K.

---

# 9. String With Spaces

A string can contain spaces.

For example:

char message[] = "Welcome to C";

It contains:

Welcome to C

The space is also a character in the string.

---

# 10. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    char course[] = "C Programming";

    printf("Course: %s\\n", course);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Course: C Programming
\`\`\`

---

# 11. Why Strings Are Important

Strings are used whenever a program needs to work with text.

Examples include:

- Student names
- City names
- Messages
- File names
- Product names
- User input
- Addresses
- Course names

For example:

char studentName[30];

char city[30];

char message[100];

---

# 12. String Length

The number of visible characters in a string is called its **length**.

For:

char word[] = "Hello";

the length is:

5

The null character '\\0' is not counted as part of the string length.

We will learn how to calculate string length in detail in Lesson 7.

---

# 13. String Compared With Character

It is important to distinguish between a character and a string.

## Character

char grade = 'A';

## String

char grade[] = "A";

The first stores one character.

The second stores:

A   \\0

---

# 14. Practical Example — Student Name

\`\`\`c
#include <stdio.h>

int main(void)
{
    char studentName[] = "Rahul";

    printf("Student Name: %s\\n", studentName);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Student Name: Rahul
\`\`\`

---

# 15. Important Points

Remember these basic rules:

1. C does not have a separate string data type.

2. Strings are stored using character arrays.

3. Strings are terminated by '\\0'.

4. String literals are written inside double quotes.

5. %s is commonly used to display a string.

6. Individual characters can be accessed using indexes.

---

# Lesson Summary

A string is a sequence of characters stored in a character array.

Example:

char name[] = "Ravi";

Conceptually, it is stored as:

R   a   v   i   \\0

Strings are essential for handling text in C and form the foundation for many practical programs.

---

# Module 6 Progress

✓ Lesson 1 — Introduction to Strings

→ Lesson 2 — Character Arrays and Strings

  Lesson 3 — String Declaration and Initialization

  Lesson 4 — Null Character '\\0'

  Lesson 5 — Reading and Displaying Strings

  Lesson 6 — String Input Using fgets()

  Lesson 7 — String Length

  Lesson 8 — Copying Strings

  Lesson 9 — Comparing Strings

  Lesson 10 — Concatenating Strings

  Lesson 11 — Searching in Strings

  Lesson 12 — String Manipulation Functions

  Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 1 Complete**

Next: **Lesson 2 — Character Arrays and Strings**

`,
};

export default lesson1;