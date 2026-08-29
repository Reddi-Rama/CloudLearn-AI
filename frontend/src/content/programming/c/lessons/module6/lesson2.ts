const lesson2 = {
  id: "lesson2",

  title: "Character Arrays and Strings",

  content: `

# Lesson 2: Character Arrays and Strings

---

## Introduction

In C, strings are closely connected with **character arrays**.

A character array is an array whose elements have the char data type:

char letters[5];

A string is stored in such an array and ends with the special null character:

'\\0'

Therefore, understanding character arrays is essential for understanding strings.

---

# 1. Character Array

A character array stores individual characters.

\`\`\`c
char letters[5] = {'A', 'B', 'C', 'D', 'E'};
\`\`\`

The array contains five characters.

There is no null character here because this is simply an array of five characters, not a valid C string.

---

# 2. Character Array Representing a String

To store a string:

\`\`\`c
char word[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
\`\`\`

Now the array contains:

Index:  0    1    2    3    4    5

         ┌────┬────┬────┬────┬────┬────┐
word:    │ H  │ e  │ l  │ l  │ o  │\\0  │
         └────┴────┴────┴────┴────┴────┘

Because the array ends with '\\0', it represents the string "Hello".

---

# 3. Using a String Literal

Instead of writing every character individually:

\`\`\`c
char word[6] = {'H', 'e', 'l', 'l', 'o', '\\0'};
\`\`\`

we can write:

\`\`\`c
char word[] = "Hello";
\`\`\`

The compiler automatically stores the terminating null character.

---

# 4. Character Array Size

Consider:

char word[6] = "Hello";

The word has five visible characters:

H e l l o

and one additional position is required for:

\\0

Therefore:

Characters = 5

Null character = 1

Required array size = 6

---

# 5. Accessing Characters

Since strings are character arrays, individual characters can be accessed using indexes.

\`\`\`c
char name[] = "Computer";
\`\`\`

For example:

\`\`\`c
printf("%c\\n", name[0]);
printf("%c\\n", name[1]);
printf("%c\\n", name[2]);
\`\`\`

Output:

\`\`\`text
C
o
m
\`\`\`

The %c format specifier is used for an individual character.

---

# 6. Displaying the Entire String

To display the complete string:

printf("%s", name);

Here %s tells printf() that the argument is a string.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[] = "Computer";

    printf("%s\\n", name);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Computer
\`\`\`

---

# 7. Character Array vs String

Consider these two declarations:

\`\`\`c
char a[5] = {'H', 'e', 'l', 'l', 'o'};
\`\`\`

and:

\`\`\`c
char b[6] = "Hello";
\`\`\`

The first is simply a character array.

The second is a string because it contains the terminating:

'\\0'

This distinction is important when using standard string functions.

---

# 8. Modifying a Character

Individual characters in a character array can be changed.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char word[] = "Hello";

    word[0] = 'J';

    printf("%s\\n", word);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Jello
\`\`\`

---

# 9. Traversing a String

A string can be traversed character by character.

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

The loop continues until it reaches the null character.

---

# 10. Why '\\0' Is Important

Suppose:

char word[] = "Hello";

The program needs to know where the string ends.

The null character provides that information:

H → e → l → l → o → \\0

When a string function reaches '\\0', it knows that there are no more characters in the string.

---

# 11. Character Array With a Larger Capacity

We can allocate more space than the current string requires.

\`\`\`c
char name[20] = "Ravi";
\`\`\`

The string occupies:

R a v i \\0

and the remaining positions are available within the array.

This can be useful when the array will later receive another string of suitable length.

---

# 12. Example — Changing a String Character

\`\`\`c
#include <stdio.h>

int main(void)
{
    char city[] = "Delhi";

    city[0] = 'P';

    printf("%s\\n", city);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Pelli
\`\`\`

Only the first character was modified.

---

# 13. Character Array Input

Individual characters can be read using %c.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char letters[5];

    for (int i = 0; i < 5; i++)
    {
        scanf(" %c", &letters[i]);
    }

    return 0;
}
\`\`\`

The space before %c helps ignore whitespace from previous input.

---

# 14. Practical Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[] = "Kalidasu";

    printf("Name: %s\\n", name);
    printf("First character: %c\\n", name[0]);
    printf("Last character: %c\\n", name[7]);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Name: Kalidasu
First character: K
Last character: u
\`\`\`

---

# 15. Important Points

Character array

↓

Array of char elements

↓

Can represent a string

↓

String must end with '\\0'

↓

Individual character → %c

Complete string → %s

---

# Lesson Summary

A string in C is stored as a character array terminated by '\\0'.

Example:

char word[] = "Hello";

is conceptually:

H e l l o \\0

Character arrays allow us to access and modify individual characters while string operations allow us to work with the complete text.

---

# Module 6 Progress

✓ Lesson 1 — Introduction to Strings

✓ Lesson 2 — Character Arrays and Strings

→ Lesson 3 — String Declaration and Initialization

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

**Lesson 2 Complete**

Next: **Lesson 3 — String Declaration and Initialization**

`,
};

export default lesson2;