const lesson11 = {
  id: "lesson11",

  title: "Searching in Strings",

  content: `

# Lesson 11: Searching in Strings

---

## Introduction

Searching in a string means looking for a particular **character or sequence of characters** within the string.

For example:

char text[] = "C Programming";

We may want to find:

P

or determine whether the string contains:

"Program"

C provides standard functions such as:

strchr()

strstr()

for these tasks.

---

# 1. Searching for a Character

The strchr() function searches for the first occurrence of a character.

It is declared in:

#include <string.h>

Syntax:

strchr(string, character);

---

# 2. Basic Example

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[] = "Programming";

    char *result = strchr(text, 'g');

    if (result != NULL)
    {
        printf("Character found\\n");
    }
    else
    {
        printf("Character not found\\n");
    }

    return 0;
}
\`\`\`

Output:

Character found

---

# 3. Finding the Position

The returned pointer points to the first matching character.

We can calculate its index:

int position = result - text;

Example:

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[] = "Programming";

    char *result = strchr(text, 'g');

    if (result != NULL)
    {
        printf("Found at index %ld\\n", result - text);
    }
    else
    {
        printf("Character not found\\n");
    }

    return 0;
}
\`\`\`

The first g occurs at index:

3

---

# 4. Searching for a Character Entered by the User

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[100];
    char ch;

    printf("Enter a string: ");
    fgets(text, sizeof(text), stdin);

    printf("Enter character to search: ");
    scanf(" %c", &ch);

    char *result = strchr(text, ch);

    if (result != NULL)
    {
        printf("Character found at index %ld\\n",
               result - text);
    }
    else
    {
        printf("Character not found\\n");
    }

    return 0;
}
\`\`\`

---

# 5. Searching for a Substring

A **substring** is a smaller string contained within another string.

For example:

Main string:

C Programming

Substring:

Program

The strstr() function searches for a substring.

Syntax:

strstr(string, substring);

---

# 6. Basic strstr() Example

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[] = "C Programming";

    char *result = strstr(text, "Program");

    if (result != NULL)
    {
        printf("Substring found\\n");
    }
    else
    {
        printf("Substring not found\\n");
    }

    return 0;
}
\`\`\`

Output:

Substring found

---

# 7. Finding the Substring Position

The returned pointer points to the beginning of the matching substring.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[] = "C Programming";

    char *result = strstr(text, "Program");

    if (result != NULL)
    {
        printf("Substring found at index %ld\\n",
               result - text);
    }
    else
    {
        printf("Substring not found\\n");
    }

    return 0;
}
\`\`\`

Output:

Substring found at index 2

---

# 8. Searching for a Word

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char sentence[] = "I am learning C programming";

    if (strstr(sentence, "C") != NULL)
    {
        printf("Word or text found\\n");
    }
    else
    {
        printf("Not found\\n");
    }

    return 0;
}
\`\`\`

---

# 9. strchr() vs strstr()

## strchr()

Searches for a **character**.

Example:

strchr(text, 'a');

searches for:

a

## strstr()

Searches for a **substring**.

Example:

strstr(text, "apple");

searches for:

apple

---

# 10. Searching for Multiple Occurrences

strchr() returns the first occurrence from the specified starting position.

We can continue searching from the returned position plus one.

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[] = "banana";
    char *position = text;

    while ((position = strchr(position, 'a')) != NULL)
    {
        printf("Found at index %ld\\n",
               position - text);

        position++;
    }

    return 0;
}
\`\`\`

Output:

Found at index 1

Found at index 3

Found at index 5

---

# 11. Searching a Student Name

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[50];

    printf("Enter student name: ");

    fgets(name, sizeof(name), stdin);

    if (strchr(name, 'a') != NULL)
    {
        printf("The name contains the character 'a'.\\n");
    }
    else
    {
        printf("The character 'a' was not found.\\n");
    }

    return 0;
}
\`\`\`

---

# 12. Searching a Sentence

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char sentence[100];

    printf("Enter a sentence: ");

    fgets(sentence, sizeof(sentence), stdin);

    if (strstr(sentence, "C programming") != NULL)
    {
        printf("The phrase was found.\\n");
    }
    else
    {
        printf("The phrase was not found.\\n");
    }

    return 0;
}
\`\`\`

---

# 13. Case Sensitivity

The standard functions discussed here are case-sensitive.

For example:

"Computer"

"computer"

are different strings.

Searching for:

strstr(text, "computer");

does not automatically match:

Computer

---

# 14. Practical Applications

String searching is useful for:

- Finding a character
- Checking whether a word exists
- Searching messages
- Finding keywords
- Processing user input
- Searching text data

For example, a program can check whether a message contains a particular keyword.

---

# 15. Important Points

strchr()

↓

Searches for a character

strstr()

↓

Searches for a substring

NULL

↓

Indicates that the requested item was not found

---

# Lesson Summary

For a character:

char *result = strchr(text, 'a');

For a substring:

char *result = strstr(text, "C");

Always check whether the returned pointer is NULL before using it.

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

→ Lesson 12 — String Manipulation Functions

  Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 11 Complete**

Next: **Lesson 12 — String Manipulation Functions**

`,
};

export default lesson11;