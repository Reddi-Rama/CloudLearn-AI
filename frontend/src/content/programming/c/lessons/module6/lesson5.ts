



const lesson5 = {
  id: "lesson5",

  title: "Reading and Displaying Strings",

  content: `

# Lesson 5: Reading and Displaying Strings

---

## Introduction

A string is useful only when a program can **accept text from the user and display it when required**.

In C, strings can be read and displayed using functions such as:

scanf()

printf()

For basic string input, %s is commonly used with scanf().

---

# 1. Reading a String Using scanf()

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[20];

    printf("Enter your name: ");

    scanf("%19s", name);

    printf("Name: %s\\n", name);

    return 0;
}
\`\`\`

If the user enters:

Ravi

the output is:

\`\`\`text
Name: Ravi
\`\`\`

---

# 2. Why & Is Not Used With %s

For an integer:

scanf("%d", &number);

For a string:

scanf("%19s", name);

The array name already represents the address of its first element in this context, so we do not write:

&name

---

# 3. Reading a Single Word

scanf() with %s reads a sequence of characters until whitespace is encountered.

For example, if the input is:

Ravi

it reads:

Ravi

But if the input is:

Ravi Kumar

only the first word is read.

The remaining text is left in the input stream.

---

# 4. Why %s Does Not Read Spaces

Suppose:

char name[30];

scanf("%29s", name);

and the user enters:

Ravi Kumar

scanf() with %s stops when it encounters the space.

So it reads:

Ravi

For complete lines containing spaces, fgets() is a better choice. We will study it in Lesson 6.

---

# 5. Displaying a String With printf()

The %s format specifier displays a string.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[] = "Ravi";

    printf("Name: %s\\n", name);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Name: Ravi
\`\`\`

---

# 6. Reading and Displaying a String

\`\`\`c
#include <stdio.h>

int main(void)
{
    char city[30];

    printf("Enter city: ");

    scanf("%29s", city);

    printf("You entered: %s\\n", city);

    return 0;
}
\`\`\`

Example:

\`\`\`text
Enter city: Delhi
You entered: Delhi
\`\`\`

---

# 7. Why a Field Width Is Useful

It is better to limit how many characters scanf() reads.

For:

char name[20];

we can use:

scanf("%19s", name);

The 19 leaves one position for the terminating '\\0'.

This helps prevent writing beyond the array's capacity.

---

# 8. Reading Several Strings

A program can have multiple string variables.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char firstName[20];
    char city[30];

    printf("Enter first name: ");
    scanf("%19s", firstName);

    printf("Enter city: ");
    scanf("%29s", city);

    printf("\\nFirst Name: %s\\n", firstName);
    printf("City: %s\\n", city);

    return 0;
}
\`\`\`

---

# 9. Displaying Individual Characters

Although %s displays the entire string, %c can display individual characters.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char word[] = "Hello";

    printf("%c\\n", word[0]);
    printf("%c\\n", word[1]);
    printf("%c\\n", word[2]);

    return 0;
}
\`\`\`

Output:

\`\`\`text
H
e
l
\`\`\`

---

# 10. Reading a String Character by Character

A string can also be filled one character at a time.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char word[6];

    for (int i = 0; i < 5; i++)
    {
        scanf(" %c", &word[i]);
    }

    word[5] = '\\0';

    printf("%s\\n", word);

    return 0;
}
\`\`\`

If the characters entered are:

H e l l o

the resulting string is:

Hello

---

# 11. Example — Student Name

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[30];

    printf("Enter student name: ");

    scanf("%29s", name);

    printf("\\nStudent Name: %s\\n", name);

    return 0;
}
\`\`\`

Example:

\`\`\`text
Enter student name: Rahul

Student Name: Rahul
\`\`\`

---

# 12. Example — Product Name

\`\`\`c
#include <stdio.h>

int main(void)
{
    char product[40];

    printf("Enter product name: ");

    scanf("%39s", product);

    printf("Product: %s\\n", product);

    return 0;
}
\`\`\`

---

# 13. Difference Between %c and %s

## %c

Used for one character:

char ch = 'A';

printf("%c", ch);

Output:

A

## %s

Used for a string:

char word[] = "Apple";

printf("%s", word);

Output:

Apple

---

# 14. Important Input Limitation

This:

scanf("%19s", name);

is suitable for a **single word**.

It is not suitable when the input should contain spaces, such as:

Rahul Kumar

For complete lines, use:

fgets()

which we will study next.

---

# 15. Practical Example

\`\`\`c
#include <stdio.h>

int main(void)
{
    char name[30];
    char course[30];

    printf("Enter your name: ");
    scanf("%29s", name);

    printf("Enter course: ");
    scanf("%29s", course);

    printf("\\n--- Student Details ---\\n");
    printf("Name: %s\\n", name);
    printf("Course: %s\\n", course);

    return 0;
}
\`\`\`

Example output:

\`\`\`text
Enter your name: Rahul
Enter course: C

--- Student Details ---
Name: Rahul
Course: C
\`\`\`

---

# Common Beginner Mistakes

## Mistake 1 — Writing & With the String

Avoid:

scanf("%19s", &name);

Use:

scanf("%19s", name);

## Mistake 2 — Forgetting the Array Size

Avoid declaring an array that is too small for the required input.

Remember that one position is required for '\\0'.

## Mistake 3 — Expecting %s to Read Spaces

scanf("%29s", name);

reads one word, not a complete line.

---

# Lesson Summary

For basic single-word string input:

scanf("%19s", name);

For displaying a string:

printf("%s", name);

%s reads until whitespace when used with scanf(), so it is not suitable for complete sentences or names containing spaces. fgets() is better for that purpose.

---

# Module 6 Progress

✓ Lesson 1 — Introduction to Strings

✓ Lesson 2 — Character Arrays and Strings

✓ Lesson 3 — String Declaration and Initialization

✓ Lesson 4 — Null Character '\\0'

✓ Lesson 5 — Reading and Displaying Strings

→ Lesson 6 — String Input Using fgets()

  Lesson 7 — String Length

  Lesson 8 — Copying Strings

  Lesson 9 — Comparing Strings

  Lesson 10 — Concatenating Strings

  Lesson 11 — Searching in Strings

  Lesson 12 — String Manipulation Functions

  Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 5 Complete**

Next: **Lesson 6 — String Input Using fgets()**

`,
};

export default lesson5;