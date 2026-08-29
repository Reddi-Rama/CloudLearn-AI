const lesson3 = {
  id: "lesson3",

  title: "String Declaration and Initialization",

  content: `

# Lesson 3: String Declaration and Initialization

---

## Introduction

Before using a string, we need to create storage for it.

In C, strings are declared using **character arrays**.

The basic form is:

char string_name[size];

The string can then be initialized with characters or a string literal.

---

# 1. Basic String Declaration

char name[20];

This creates a character array named name with space for 20 characters.

It can be used to store a string of appropriate length, including its terminating '\\0'.

---

# 2. Declaration and Initialization Together

A string can be declared and initialized in one statement:

char name[5] = "Ravi";

The actual storage is:

R   a   v   i   \\0

The array requires five positions:

4 characters + 1 null character = 5

---

# 3. Omitting the Size

The array size can be omitted when a string literal is used for initialization.

char name[] = "Ravi";

The compiler determines the required size automatically.

The required size is:

4 characters + 1 null character = 5

---

# 4. Another Example

char language[] = "C Programming";

The compiler calculates the size needed for all the characters plus '\\0'.

This is often convenient when the string content is already known.

---

# 5. Initializing With Individual Characters

A string can also be initialized character by character.

\`\`\`c
char word[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
\`\`\`

This is equivalent to:

\`\`\`c
char word[] = "Hello";
\`\`\`

The string literal form is generally easier to read.

---

# 6. Important Difference Between Quotes

A single character uses single quotes:

char ch = 'A';

A string uses double quotes:

char word[] = "A";

Therefore:

'A' → Character

"A" → String

The first stores one character.

The second stores the character A followed by the null character.

---

# 7. String With Spaces

Spaces can be included inside a string literal.

\`\`\`c
char message[] = "Welcome to C";
\`\`\`

The string contains:

Welcome to C

The space between the words is also part of the string.

---

# 8. String Size and Null Character

Suppose:

char city[6] = "Delhi";

Delhi contains five visible characters:

D e l h i

The sixth position is needed for:

\\0

Therefore:

Visible characters = 5

Null character = 1

Total = 6

---

# 9. Larger Character Array

We can provide more storage than the current string requires.

\`\`\`c
char name[30] = "Ravi";
\`\`\`

The string is still:

Ravi

The larger array simply provides additional storage capacity.

---

# 10. Initializing an Empty String

A character array can be initialized to an empty string:

\`\`\`c
char name[20] = "";
\`\`\`

This creates a string whose first character is the null character.

Conceptually:

\\0

The array has storage for additional characters.

---

# 11. String Declaration Without Initialization

We can declare a character array without immediately assigning a string:

\`\`\`c
char name[30];
\`\`\`

Later, the program can place characters into the array, for example by reading input.

---

# 12. Multiple Strings

A program can contain several string variables:

\`\`\`c
char firstName[20];
char lastName[20];
char city[30];
char message[100];
\`\`\`

Each array stores a separate string.

---

# 13. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[] = "Rahul";
    char city[] = "Hyderabad";

    printf("Name: %s\\n", name);
    printf("City: %s\\n", city);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Name: Rahul
City: Hyderabad
\`\`\`

---

# 14. Modifying an Initialized String

When a string is stored in a character array, individual characters can be modified.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char word[] = "Hello";

    word[0] = 'Y';

    printf("%s\\n", word);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Yello
\`\`\`

The character at index 0 was changed.

---

# 15. Important Rules

Remember:

1. Strings are stored in char arrays.

2. A string must have room for '\\0'.

3. String literals use double quotes.

4. Individual characters use single quotes.

5. The size can be specified explicitly.

6. The compiler can determine the size when [] is omitted during initialization.

---

# Lesson Summary

The general declaration is:

char name[size];

Initialization can be done as:

char name[5] = "Ravi";

or:

char name[] = "Ravi";

A string literal automatically includes the terminating null character.

Understanding declaration and initialization is essential before performing operations such as reading, copying, comparing, and concatenating strings.

---

# Module 6 Progress

✓ Lesson 1 — Introduction to Strings

✓ Lesson 2 — Character Arrays and Strings

✓ Lesson 3 — String Declaration and Initialization

→ Lesson 4 — Null Character '\\0'

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

**Lesson 3 Complete**

Next: **Lesson 4 — Null Character '\\0'**

`,
};

export default lesson3;