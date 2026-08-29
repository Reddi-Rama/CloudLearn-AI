const lesson9 = {
  id: "lesson9",

  title: "Comparing Strings",

  content: `

# Lesson 9: Comparing Strings

---

## Introduction

When working with strings, we often need to determine whether two strings are:

- Equal
- Different
- In a particular alphabetical or lexicographical order

C provides the **strcmp()** function for comparing strings.

It is declared in:

#include <string.h>

---

# 1. Why == Should Not Be Used

A common beginner mistake is:

if (name1 == name2)

This does not compare the characters of two strings in the way beginners usually expect.

For string contents, use:

strcmp(name1, name2)

---

# 2. strcmp() Function

Basic syntax:

strcmp(string1, string2);

Example:

char first[] = "Apple";
char second[] = "Apple";

int result = strcmp(first, second);

If both strings contain the same characters, result is:

0

---

# 3. Return Value of strcmp()

The important results are:

strcmp() == 0

→ Strings are equal

strcmp() < 0

→ First string comes before second string

strcmp() > 0

→ First string comes after second string

You should normally check the **sign** of the result rather than depending on a particular nonzero value.

---

# 4. Comparing Equal Strings

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[] = "Hello";
    char second[] = "Hello";

    if (strcmp(first, second) == 0)
    {
        printf("Strings are equal\\n");
    }

    return 0;
}
\`\`\`

Output:

Strings are equal

---

# 5. Comparing Different Strings

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[] = "Hello";
    char second[] = "World";

    if (strcmp(first, second) == 0)
    {
        printf("Strings are equal\\n");
    }
    else
    {
        printf("Strings are different\\n");
    }

    return 0;
}
\`\`\`

Output:

Strings are different

---

# 6. Comparing User Input

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char password[30];

    printf("Enter password: ");

    scanf("%29s", password);

    if (strcmp(password, "admin") == 0)
    {
        printf("Match found\\n");
    }
    else
    {
        printf("No match\\n");
    }

    return 0;
}
\`\`\`

The comparison is between the contents of the strings.

---

# 7. Lexicographical Comparison

strcmp() can also indicate ordering.

For example:

strcmp("Apple", "Banana")

returns a value less than zero because "Apple" comes before "Banana" in lexicographical comparison.

Similarly:

strcmp("Orange", "Apple")

returns a value greater than zero.

---

# 8. Example

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[] = "Apple";
    char second[] = "Banana";

    int result = strcmp(first, second);

    if (result == 0)
    {
        printf("Both strings are equal\\n");
    }
    else if (result < 0)
    {
        printf("First string comes before second\\n");
    }
    else
    {
        printf("First string comes after second\\n");
    }

    return 0;
}
\`\`\`

Output:

First string comes before second

---

# 9. Case Sensitivity

strcmp() is case-sensitive.

For example:

"Apple"

"apple"

are different strings.

Example:

strcmp("Apple", "apple")

does not return zero.

Uppercase and lowercase characters are treated as different character values.

---

# 10. Comparing Student Names

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name1[30];
    char name2[30];

    printf("Enter first name: ");
    scanf("%29s", name1);

    printf("Enter second name: ");
    scanf("%29s", name2);

    if (strcmp(name1, name2) == 0)
    {
        printf("Both names are the same\\n");
    }
    else
    {
        printf("Names are different\\n");
    }

    return 0;
}
\`\`\`

---

# 11. Comparing Strings Read With fgets()

When using fgets(), remember that the newline may be stored.

Therefore, remove it before comparing:

name[strcspn(name, "\\n")] = '\\0';

Then:

strcmp(name1, name2)

can be used normally.

---

# 12. Example With fgets()

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[50];
    char second[50];

    printf("Enter first string: ");
    fgets(first, sizeof(first), stdin);

    printf("Enter second string: ");
    fgets(second, sizeof(second), stdin);

    first[strcspn(first, "\\n")] = '\\0';
    second[strcspn(second, "\\n")] = '\\0';

    if (strcmp(first, second) == 0)
    {
        printf("Strings are equal\\n");
    }
    else
    {
        printf("Strings are different\\n");
    }

    return 0;
}
\`\`\`

---

# 13. Manual String Comparison

The basic idea behind string comparison can also be implemented manually.

\`\`\`c
int i = 0;

while (first[i] != '\\0' &&
       second[i] != '\\0' &&
       first[i] == second[i])
{
    i++;
}

if (first[i] == second[i])
{
    printf("Strings are equal\\n");
}
else
{
    printf("Strings are different\\n");
}
\`\`\`

This compares corresponding characters until a difference or the end of a string is reached.

---

# 14. Practical Example — Checking a Name

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[30];

    printf("Enter name: ");
    scanf("%29s", name);

    if (strcmp(name, "Rahul") == 0)
    {
        printf("Name matched\\n");
    }
    else
    {
        printf("Name did not match\\n");
    }

    return 0;
}
\`\`\`

---

# 15. Important Points

strcmp()

↓

Compares two strings

↓

0 → Equal

< 0 → First comes before second

> 0 → First comes after second

Remember:

strcmp(first, second)

is used to compare **string contents**.

Do not use:

first == second

for ordinary C-string content comparison.

---

# Lesson Summary

The standard function for comparing strings is:

strcmp(string1, string2);

Example:

if (strcmp(name1, name2) == 0)
{
    printf("Equal");
}

String comparison is useful for checking names, commands, user input, categories, and many other forms of text.

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

→ Lesson 10 — Concatenating Strings

  Lesson 11 — Searching in Strings

  Lesson 12 — String Manipulation Functions

  Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 9 Complete**

Next: **Lesson 10 — Concatenating Strings**

`,
};

export default lesson9;