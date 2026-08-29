const lesson12 = {
  id: "lesson12",

  title: "String Manipulation Functions",

  content: `

# Lesson 12: String Manipulation Functions

---

## Introduction

C provides several functions in the standard library for working with strings.

These functions are available through:

#include <string.h>

They make common string operations easier instead of requiring us to write every operation manually.

Some important functions are:

strlen()  → Find string length

strcpy()  → Copy a string

strcmp()  → Compare strings

strcat()  → Concatenate strings

strchr()  → Search for a character

strstr()  → Search for a substring

---

# 1. strlen() — Find Length

The strlen() function returns the number of characters before the null character.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char word[] = "Hello";

    printf("%zu\\n", strlen(word));

    return 0;
}
\`\`\`

Output:

5

---

# 2. strcpy() — Copy a String

The strcpy() function copies one string into another.

\`\`\`c
char source[] = "Hello";
char destination[20];

strcpy(destination, source);
\`\`\`

Now:

destination → Hello

---

# 3. strcmp() — Compare Strings

The strcmp() function compares two strings.

\`\`\`c
if (strcmp(first, second) == 0)
{
    printf("Equal");
}
\`\`\`

A result of:

0 → Equal

< 0 → First comes before second

> 0 → First comes after second

---

# 4. strcat() — Join Strings

The strcat() function appends one string to another.

\`\`\`c
char first[30] = "Hello ";
char second[] = "World";

strcat(first, second);
\`\`\`

Result:

Hello World

---

# 5. strchr() — Find a Character

The strchr() function searches for the first occurrence of a character.

\`\`\`c
char text[] = "Computer";

char *result = strchr(text, 'p');

if (result != NULL)
{
    printf("Character found");
}
\`\`\`

If the character exists, result points to its first occurrence.

If it does not exist:

result == NULL

---

# 6. strstr() — Find a Substring

The strstr() function searches for a substring.

\`\`\`c
char text[] = "C Programming";

char *result = strstr(text, "Program");

if (result != NULL)
{
    printf("Substring found");
}
\`\`\`

If "Program" exists in the string, a pointer to its first occurrence is returned.

Otherwise:

NULL

is returned.

---

# 7. Header File

All these standard string functions are declared in:

#include <string.h>

Therefore, when using them, include:

\`\`\`c
#include <string.h>
\`\`\`

---

# 8. Combining Multiple String Functions

A program can use several string functions together.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[50] = "Hello";
    char second[] = "World";

    printf("Length of first: %zu\\n", strlen(first));

    strcat(first, " ");
    strcat(first, second);

    printf("Combined string: %s\\n", first);

    return 0;
}
\`\`\`

Output:

Length of first: 5

Combined string: Hello World

---

# 9. String Processing Example

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[50];
    char copy[50];

    printf("Enter name: ");

    fgets(name, sizeof(name), stdin);

    name[strcspn(name, "\\n")] = '\\0';

    strcpy(copy, name);

    printf("Name: %s\\n", name);
    printf("Length: %zu\\n", strlen(name));

    if (strcmp(name, copy) == 0)
    {
        printf("Copy matches original\\n");
    }

    return 0;
}
\`\`\`

---

# 10. strcspn() Function

We have already used:

strcspn()

to remove the newline from fgets() input.

Example:

\`\`\`c
name[strcspn(name, "\\n")] = '\\0';
\`\`\`

This finds the position of the first character from the specified set.

Here it is used to locate the newline.

If a newline exists, it is replaced with '\\0'.

---

# 11. Why Standard Functions Are Useful

Without library functions, a programmer would repeatedly write loops for:

- Finding length
- Copying characters
- Comparing characters
- Joining strings
- Searching characters
- Searching substrings

The standard functions provide ready-made operations for these common tasks.

---

# 12. Function Summary

strlen()

→ Finds string length

strcpy()

→ Copies a string

strcmp()

→ Compares two strings

strcat()

→ Concatenates strings

strchr()

→ Searches for a character

strstr()

→ Searches for a substring

strcspn()

→ Finds the first character matching a set

---

# 13. Practical Example — Text Analyzer

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[100];

    printf("Enter text: ");

    fgets(text, sizeof(text), stdin);

    text[strcspn(text, "\\n")] = '\\0';

    printf("\\nText: %s\\n", text);
    printf("Length: %zu\\n", strlen(text));

    if (strchr(text, 'a') != NULL)
    {
        printf("The text contains 'a'.\\n");
    }
    else
    {
        printf("The text does not contain 'a'.\\n");
    }

    return 0;
}
\`\`\`

---

# 14. Choosing the Correct Function

When working with strings, first identify what the program needs.

Need length?

↓

strlen()

Need a copy?

↓

strcpy()

Need comparison?

↓

strcmp()

Need to join?

↓

strcat()

Need a character?

↓

strchr()

Need a substring?

↓

strstr()

This makes string programming much easier.

---

# 15. Important Points

Remember that the standard string functions are declared in:

#include <string.h>

The most commonly used functions in this module are:

strlen()

strcpy()

strcmp()

strcat()

strchr()

strstr()

Always ensure that character arrays have sufficient space when storing or modifying strings.

---

# Lesson Summary

String manipulation functions provide convenient ways to process C strings.

The most important functions are:

strlen()

strcpy()

strcmp()

strcat()

strchr()

strstr()

Each function performs a specific operation, and together they form the basic toolkit for working with strings in C.

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

→ Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 12 Complete**

Next: **Lesson 13 — Array of Strings**

`,
};

export default lesson12;