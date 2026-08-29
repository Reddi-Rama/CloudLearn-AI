const lesson4 = {
  id: "lesson4",

  title: "Null Character '\\0'",

  content: `

# Lesson 4: Null Character '\\0'

---

## Introduction

When working with strings in C, one character has a special purpose: the **null character**.

It is written as:

'\\0'

The null character marks the **end of a string**.

For example:

char name[] = "Hello";

is stored conceptually as:

Index:    0    1    2    3    4    5

          ┌────┬────┬────┬────┬────┬────┐
          │ H  │ e  │ l  │ l  │ o  │\\0  │
          └────┴────┴────┴────┴────┴────┘

The '\\0' tells C that the string ends after o.

---

# 1. Why the Null Character Is Needed

C does not store the length of a string separately.

Instead, string-processing functions continue reading characters until they encounter:

'\\0'

For example:

char word[] = "Hello";

The string is:

H → e → l → l → o → '\\0'

When '\\0' is reached, the string has ended.

---

# 2. Null Character and Array Size

The null character occupies one position in the character array.

For:

char word[6] = "Hello";

the five visible characters require five positions:

H e l l o

and one additional position is required for:

\\0

Therefore:

5 characters + 1 null character = 6 positions

---

# 3. Automatically Added by the Compiler

When a string literal is used:

char word[] = "Hello";

the compiler automatically adds the terminating null character.

It is equivalent in effect to:

\`\`\`c
char word[] = {'H', 'e', 'l', 'l', 'o', '\\0'};
\`\`\`

---

# 4. String vs Character Array

Consider:

\`\`\`c
char a[5] = {'H', 'e', 'l', 'l', 'o'};
\`\`\`

This is an array of characters, but it does not have space for a terminating null character.

Now consider:

\`\`\`c
char b[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
\`\`\`

This can represent the string "Hello".

---

# 5. Detecting the End of a String

We can use the null character while traversing a string.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char word[] = "Hello";

    for (int i = 0; word[i] != '\\0'; i++)
    {
        printf("%c\\n", word[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
H
e
l
l
o
\`\`\`

The loop stops when it reaches '\\0'.

---

# 6. Null Character Is Not the Same as '0'

These are different:

'\\0'

and:

'0'

'\\0' is the **null character**.

'0' is the character representing the digit zero.

They should not be confused.

---

# 7. Null Character and %s

When we write:

printf("%s", word);

printf() expects word to be a properly terminated string.

It reads characters until:

'\\0'

is encountered.

---

# 8. Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[] = "Ravi";

    printf("%s\\n", name);

    return 0;
}
\`\`\`

The stored sequence is:

R → a → v → i → \\0

Output:

\`\`\`text
Ravi
\`\`\`

---

# 9. Manually Adding the Null Character

We can create a string character by character:

\`\`\`c
#include <stdio.h>

int main(void)
{
    char word[6];

    word[0] = 'H';
    word[1] = 'e';
    word[2] = 'l';
    word[3] = 'l';
    word[4] = 'o';
    word[5] = '\\0';

    printf("%s\\n", word);

    return 0;
}
\`\`\`

Now word represents:

Hello

---

# 10. Empty String

An empty string contains no visible characters, but it still has a null character.

\`\`\`c
char name[] = "";
\`\`\`

Conceptually:

┌────┐
│ \\0 │
└────┘

Its string length is zero.

---

# 11. Changing the Null Character

Consider:

char word[] = "Hello";

If we write:

word[2] = '\\0';

the string now ends at index 2.

The array contains:

H e \\0 l o \\0

When printed as a string:

printf("%s", word);

only:

He

is considered the string.

This demonstrates why the null character is important.

---

# 12. String Length and '\\0'

Suppose:

char word[] = "Hello";

The visible characters are:

H e l l o

So the string length is:

5

The '\\0' is used to mark the end, but it is **not counted as part of the string's length**.

---

# 13. Practical Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    char message[] = "C Programming";

    for (int i = 0; message[i] != '\\0'; i++)
    {
        printf("%c", message[i]);
    }

    printf("\\n");

    return 0;
}
\`\`\`

Output:

\`\`\`text
C Programming
\`\`\`

---

# 14. Important Points

'\\0'

↓

Null character

↓

Marks the end of a C string

↓

Automatically added to string literals

↓

Not counted as a visible character

↓

String functions use it to detect the end

---

# 15. Common Mistake

A common beginner mistake is forgetting that the array needs **one extra position** for '\\0'.

For:

"Hello"

there are:

5 visible characters

+

1 null character

=

6 array positions

---

# Lesson Summary

The null character is one of the fundamental concepts of strings in C.

Example:

char name[] = "Hello";

is stored as:

H e l l o \\0

The '\\0' tells C where the string ends.

---

# Module 6 Progress

✓ Lesson 1 — Introduction to Strings

✓ Lesson 2 — Character Arrays and Strings

✓ Lesson 3 — String Declaration and Initialization

✓ Lesson 4 — Null Character '\\0'

→ Lesson 5 — Reading and Displaying Strings

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

**Lesson 4 Complete**

Next: **Lesson 5 — Reading and Displaying Strings**

`,
};

export default lesson4;