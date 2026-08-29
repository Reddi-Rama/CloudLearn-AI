const lesson9 = {
  id: "lesson9",
  title: "Dynamic Strings",

  content: `

# Lesson 9: Dynamic Strings

---

## Introduction

A string in C is a sequence of characters terminated by a null character '\\0'.

Strings can also be stored in dynamically allocated memory.

Dynamic strings are useful when the required amount of memory is determined during program execution.

---

# 1. Static Character Array

A normal character array can be declared as:

\`\`\`c
char name[50];
\`\`\`

Here, memory for 50 characters is reserved.

If the actual string contains only a few characters, some of the allocated space may not be needed.

---

# 2. Dynamically Allocating a String

A string can be allocated using malloc():

\`\`\`c
char *name;

name = malloc(20 * sizeof(*name));
\`\`\`

The pointer name refers to dynamically allocated memory capable of storing characters.

---

# 3. Null Character

Every C string must end with:

\`\`\`c
'\\0'
\`\`\`

For example:

\`\`\`
H e l l o \\0
\`\`\`

Therefore, when dynamically allocating memory for a string, space for the null character must also be considered.

For a string containing 10 characters, at least 11 characters of storage are required.

---

# 4. Example

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    char *name;

    name = malloc(20 * sizeof(*name));

    if (name == NULL)
    {
        return 1;
    }

    strcpy(name, "Alex");

    printf("Name: %s\\n", name);

    free(name);

    return 0;
}
\`\`\`

Output:

\`\`\`
Name: Alex
\`\`\`

---

# 5. Allocating According to String Length

Instead of allocating an unnecessarily large fixed amount, memory can be allocated according to the required string length.

For example:

\`\`\`c
const char *text = "Computer";

char *copy;

copy = malloc(strlen(text) + 1);

if (copy == NULL)
{
    return 1;
}

strcpy(copy, text);
\`\`\`

The +1 provides space for the null character.

---

# 6. Dynamic String From User Input

One approach is to first read into a temporary array and then allocate the exact amount of memory required.

\`\`\`c
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main(void)
{
    char buffer[100];
    char *text;

    printf("Enter a string: ");
    fgets(buffer, sizeof(buffer), stdin);

    buffer[strcspn(buffer, "\\n")] = '\\0';

    text = malloc(strlen(buffer) + 1);

    if (text == NULL)
    {
        return 1;
    }

    strcpy(text, buffer);

    printf("String: %s\\n", text);

    free(text);

    return 0;
}
\`\`\`

---

# 7. Dynamic String With realloc()

A dynamically allocated string can also be resized.

For example, if more memory is required:

\`\`\`c
char *temp;

temp = realloc(text, new_size);

if (temp != NULL)
{
    text = temp;
}
\`\`\`

As with dynamic arrays, using a temporary pointer helps preserve the original allocation if realloc() fails.

---

# 8. Dynamic String Memory Flow

\`\`\`
Determine required size
        ↓
      malloc()
        ↓
    Store string
        ↓
      realloc()
        ↓
Resize if required
        ↓
       free()
        ↓
 Memory released
\`\`\`

---

# 9. Dynamic String With calloc()

calloc() can also be used:

\`\`\`c
char *text;

text = calloc(20, sizeof(*text));

if (text == NULL)
{
    return 1;
}
\`\`\`

The allocated bytes are initially zeroed.

---

# 10. Important Precautions

When working with dynamic strings:

- Allocate enough space for '\\0'.
- Check whether allocation succeeded.
- Do not write beyond the allocated memory.
- Do not access the string after free().
- Release the memory using free().

---

# Lesson Summary

Dynamic strings store character data in dynamically allocated memory.

Basic allocation:

\`\`\`c
char *text = malloc(strlen(source) + 1);
\`\`\`

Copy the string:

\`\`\`c
strcpy(text, source);
\`\`\`

Release the memory:

\`\`\`c
free(text);
\`\`\`

The null character '\\0' is essential because it marks the end of a C string.

---

# Module 10 Progress

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

✓ Lesson 4 — calloc()

✓ Lesson 5 — malloc() vs calloc()

✓ Lesson 6 — realloc()

✓ Lesson 7 — free()

✓ Lesson 8 — Dynamic Arrays

✓ Lesson 9 — Dynamic Strings

→ Lesson 10 — Dynamic Structures

  Lesson 11 — Dynamic Memory and Pointers

  Lesson 12 — Dynamic 2D Arrays

  Lesson 13 — Memory Leaks and Common Errors

  Lesson 14 — Practical Applications

  Lesson 15 — Mini Project — Dynamic Student Record System

---

# Lesson 9 Complete

`,
};

export default lesson9;