const lesson14 = {
  id: "lesson14",

  title: "Common String Mistakes",

  content: `

# Lesson 14: Common String Mistakes

---

## Introduction

Strings are one of the areas where beginners often make small mistakes that can lead to incorrect output or unexpected program behavior.

Most problems come from:

- Incorrect array size
- Missing '\\0'
- Incorrect input handling
- Using the wrong format specifier
- Comparing strings incorrectly
- Insufficient destination space

Understanding these mistakes helps us write reliable C programs.

---

# 1. Forgetting the Null Character

Consider:

\`\`\`c
char word[5] = {'H', 'e', 'l', 'l', 'o'};
\`\`\`

This is an array of five characters, but it does not contain:

'\\0'

Therefore, it should not be treated as a normal C string.

A correct version is:

\`\`\`c
char word[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
\`\`\`

or simply:

\`\`\`c
char word[] = "Hello";
\`\`\`

---

# 2. Not Leaving Space for '\\0'

Suppose:

\`\`\`c
char name[5] = "Ravi";
\`\`\`

This can fit because:

R a v i \\0

requires five positions.

But:

\`\`\`c
char name[4] = "Ravi";
\`\`\`

does not provide room for the terminating null character.

Always account for '\\0'.

---

# 3. Using == to Compare Strings

This is a common mistake:

\`\`\`c
if (name1 == name2)
\`\`\`

For comparing C-string contents, use:

\`\`\`c
if (strcmp(name1, name2) == 0)
\`\`\`

strcmp() compares the characters stored in the strings.

---

# 4. Using %c for a String

This is incorrect:

\`\`\`c
printf("%c", name);
\`\`\`

%c is used for one character.

For a complete string, use:

\`\`\`c
printf("%s", name);
\`\`\`

---

# 5. Using %s for a Single Character

If:

\`\`\`c
char ch = 'A';
\`\`\`

use:

\`\`\`c
printf("%c", ch);
\`\`\`

not:

\`\`\`c
printf("%s", ch);
\`\`\`

---

# 6. Forgetting the Array Size

A declaration such as:

\`\`\`c
char name[];
\`\`\`

without an initializer does not provide a complete array size.

Instead, specify a size:

\`\`\`c
char name[50];
\`\`\`

or initialize it:

\`\`\`c
char name[] = "Ravi";
\`\`\`

---

# 7. Using scanf("%s") for a Sentence

Consider:

\`\`\`c
char message[100];

scanf("%99s", message);
\`\`\`

If the user enters:

Welcome to C

only:

Welcome

is read.

For complete lines, use:

\`\`\`c
fgets(message, sizeof(message), stdin);
\`\`\`

---

# 8. Forgetting the Newline From fgets()

Suppose:

\`\`\`c
fgets(name, sizeof(name), stdin);
\`\`\`

The input may contain:

"Rahul\\n"

If we need to remove the newline:

\`\`\`c
name[strcspn(name, "\\n")] = '\\0';
\`\`\`

Remember to include:

\`\`\`c
#include <string.h>
\`\`\`

---

# 9. Not Providing Enough Space for strcpy()

This is unsafe:

\`\`\`c
char source[] = "Programming";
char destination[5];

strcpy(destination, source);
\`\`\`

The destination is too small.

A suitable destination must have enough room for the copied characters and '\\0'.

For example:

\`\`\`c
char destination[20];
\`\`\`

---

# 10. Not Providing Enough Space for strcat()

Similarly:

\`\`\`c
char first[10] = "Hello";
char second[] = " Programming";

strcat(first, second);
\`\`\`

may exceed the capacity of first.

The destination must have enough room for the entire combined string.

---

# 11. Accessing Outside the Array

Suppose:

\`\`\`c
char name[10];
\`\`\`

Valid indexes are:

0 to 9

Trying to access:

\`\`\`c
name[10]
\`\`\`

is outside the array.

Always stay within valid indexes.

---

# 12. Modifying a String Literal

Do not attempt to modify a string literal.

For example:

\`\`\`c
char *name = "Ravi";
\`\`\`

The characters of the string literal should not be modified through name.

If you need a modifiable string, use a character array:

\`\`\`c
char name[] = "Ravi";
\`\`\`

Now individual characters can be changed:

\`\`\`c
name[0] = 'K';
\`\`\`

---

# 13. Forgetting <string.h>

If you use functions such as:

strlen()

strcpy()

strcmp()

strcat()

strchr()

strstr()

include:

\`\`\`c
#include <string.h>
\`\`\`

This provides the declarations for the standard string functions.

---

# 14. Common Mistake With Input

When mixing:

scanf()

and:

fgets()

the newline left by previous input can cause unexpected behavior.

Input handling should be planned carefully when these functions are combined.

For example, after reading an integer:

\`\`\`c
scanf("%d", &age);
\`\`\`

the remaining newline may need to be consumed before:

\`\`\`c
fgets(name, sizeof(name), stdin);
\`\`\`

One approach is:

\`\`\`c
int c;

while ((c = getchar()) != '\\n' && c != EOF)
{
}
\`\`\`

---

# 15. String Safety Checklist

Before using a string, check:

✓ Is the array large enough?

✓ Is there space for '\\0'?

✓ Am I using %s or %c correctly?

✓ Should I use scanf() or fgets()?

✓ Did I remove the newline from fgets() if needed?

✓ Am I using strcmp() instead of ==?

✓ Does the destination have enough space?

✓ Am I staying within array bounds?

✓ Did I include <string.h>?

---

# Lesson Summary

Most string problems in C can be avoided by understanding:

- Array size
- Null character
- Input functions
- Format specifiers
- String functions
- Array bounds

The most important rule is to always make sure that the character array has enough storage for the string and its terminating '\\0'.

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

✓ Lesson 14 — Common String Mistakes

→ Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 14 Complete**

Next: **Lesson 15 — Mini Project — Student Name and Grade Manager**

`,
};

export default lesson14;