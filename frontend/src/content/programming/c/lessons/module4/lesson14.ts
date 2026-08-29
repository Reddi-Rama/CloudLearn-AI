const lesson14 = {
  id: "lesson14",

  title: "Library Functions",

  content: `

# Lesson 14: Library Functions

## Introduction

C provides many **library functions** that programmers can use to perform common operations.

These functions are provided through standard C libraries.

Examples include:

- \`printf()\`
- \`scanf()\`
- \`strlen()\`
- \`strcpy()\`
- \`strcat()\`
- \`strcmp()\`
- \`sqrt()\`
- \`pow()\`
- \`toupper()\`
- \`tolower()\`

Different functions are provided by different header files.

---

# 1. What Is a Library Function?

A **library function** is a predefined function provided by a C library.

For example:

\`\`\`c
printf("Hello");
\`\`\`

\`printf()\` is a standard library function used to display output.

Programmers can use library functions instead of implementing common operations themselves.

---

# 2. Header Files

Header files contain declarations for functions and other definitions provided by libraries.

For example:

\`\`\`c
#include <stdio.h>
\`\`\`

The \`stdio.h\` header provides declarations for standard input and output functions.

Some commonly used headers are:

\`\`\`text
stdio.h
string.h
math.h
ctype.h
stdlib.h
\`\`\`

---

# 3. stdio.h

The \`stdio.h\` header provides standard input and output functions.

Common functions include:

\`\`\`text
printf()
scanf()
getchar()
putchar()
\`\`\`

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    printf("Hello C");

    return 0;
}
\`\`\`

Output:

\`\`\`text
Hello C
\`\`\`

---

# 4. scanf()

The \`scanf()\` function is used to read formatted input.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number;

    printf("Enter a number: ");
    scanf("%d", &number);

    printf("Number = %d\\n", number);

    return 0;
}
\`\`\`

The address operator \`&\` is used to provide the address where the input value should be stored.

---

# 5. getchar()

The \`getchar()\` function reads one character from standard input.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    char ch;

    ch = getchar();

    printf("Character = %c\\n", ch);

    return 0;
}
\`\`\`

---

# 6. putchar()

The \`putchar()\` function writes one character to standard output.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    char ch = 'A';

    putchar(ch);

    return 0;
}
\`\`\`

Output:

\`\`\`text
A
\`\`\`

---

# 7. string.h

The \`string.h\` header provides functions for working with strings.

Common functions include:

\`\`\`text
strlen()
strcpy()
strcat()
strcmp()
\`\`\`

These functions are useful when working with character arrays that contain strings.

---

# 8. strlen()

The \`strlen()\` function calculates the length of a string.

Example:

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[] = "Hello";

    printf("Length = %zu\\n", strlen(text));

    return 0;
}
\`\`\`

Output:

\`\`\`text
Length = 5
\`\`\`

The terminating null character is not included in the returned length.

---

# 9. strcpy()

The \`strcpy()\` function copies a string into another character array.

Example:

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char source[] = "Hello";
    char destination[20];

    strcpy(destination, source);

    printf("%s\\n", destination);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Hello
\`\`\`

The destination array must have enough space for the copied string and its terminating null character.

---

# 10. strcat()

The \`strcat()\` function appends one string to another.

Example:

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[30] = "Hello ";
    char second[] = "World";

    strcat(first, second);

    printf("%s\\n", first);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Hello World
\`\`\`

The destination array must have enough space for the resulting string.

---

# 11. strcmp()

The \`strcmp()\` function compares two strings.

Example:

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[] = "apple";
    char second[] = "apple";

    if (strcmp(first, second) == 0)
    {
        printf("Strings are equal\\n");
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
Strings are equal
\`\`\`

A result of zero means that the strings contain the same sequence of characters.

---

# 12. math.h

The \`math.h\` header provides mathematical functions.

Common examples include:

\`\`\`text
sqrt()
pow()
ceil()
floor()
\`\`\`

These functions are useful for mathematical calculations.

---

# 13. sqrt()

The \`sqrt()\` function calculates the square root of a number.

Example:

\`\`\`c
#include <stdio.h>
#include <math.h>

int main(void)
{
    double result;

    result = sqrt(25.0);

    printf("Square root = %.2f\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Square root = 5.00
\`\`\`

---

# 14. pow()

The \`pow()\` function calculates a number raised to a power.

Example:

\`\`\`c
#include <stdio.h>
#include <math.h>

int main(void)
{
    double result;

    result = pow(2.0, 3.0);

    printf("Result = %.2f\\n", result);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Result = 8.00
\`\`\`

---

# 15. ctype.h

The \`ctype.h\` header provides functions for character classification and conversion.

Examples include:

\`\`\`text
toupper()
tolower()
isdigit()
isalpha()
\`\`\`

Example:

\`\`\`c
#include <stdio.h>
#include <ctype.h>

int main(void)
{
    char ch = 'a';

    printf("%c\\n", toupper((unsigned char)ch));

    return 0;
}
\`\`\`

Output:

\`\`\`text
A
\`\`\`

---

# 16. Using Multiple Library Functions

A program can use functions from several standard libraries.

Example:

\`\`\`c
#include <stdio.h>
#include <string.h>
#include <math.h>

int main(void)
{
    char text[] = "C Programming";

    printf("Length = %zu\\n", strlen(text));
    printf("Square root = %.2f\\n", sqrt(49.0));

    return 0;
}
\`\`\`

Output:

\`\`\`text
Length = 13
Square root = 7.00
\`\`\`

---

# 17. Why Library Functions Are Useful

Library functions:

- Save development time.
- Reduce the amount of code.
- Provide commonly required operations.
- Make programs easier to develop.
- Provide standardized functionality.
- Allow programmers to focus on solving the actual problem.

---

# 18. Choosing the Correct Header

Some commonly used headers are:

\`\`\`text
stdio.h
    ↓
Input and output

string.h
    ↓
String operations

math.h
    ↓
Mathematical operations

ctype.h
    ↓
Character operations
\`\`\`

The appropriate header should be included when using the corresponding library functions.

---

# 19. Library Function Example

\`\`\`c
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <ctype.h>

int main(void)
{
    char text[] = "programming";

    printf("Length = %zu\\n", strlen(text));

    printf("Square root = %.2f\\n", sqrt(64.0));

    printf("Uppercase = %c\\n",
           toupper((unsigned char)'c'));

    return 0;
}
\`\`\`

Output:

\`\`\`text
Length = 11
Square root = 8.00
Uppercase = C
\`\`\`

---

# 20. Important Points

Remember:

- Library functions are predefined functions provided by C libraries.
- Header files provide their declarations.
- \`stdio.h\` is used for standard input and output.
- \`string.h\` provides string-related functions.
- \`math.h\` provides mathematical functions.
- \`ctype.h\` provides character-related functions.
- The appropriate header should be included when using a library function.
- Library functions reduce the amount of code that programmers need to write.

---

# Lesson Summary

C provides many standard library functions for common programming tasks.

Some important examples are:

\`\`\`text
printf()
scanf()

strlen()
strcpy()
strcat()
strcmp()

sqrt()
pow()

toupper()
tolower()
\`\`\`

Learning library functions helps programmers write C programs more efficiently and avoid unnecessarily rewriting common functionality.

---

# Module 4 Progress

✓ Lesson 1 — Introduction to Functions

✓ Lesson 2 — Need and Advantages of Functions

✓ Lesson 3 — Function Declaration

✓ Lesson 4 — Function Definition

✓ Lesson 5 — Function Calling

✓ Lesson 6 — Parameters and Arguments

✓ Lesson 7 — Return Values

✓ Lesson 8 — Types of Functions

✓ Lesson 9 — Function Prototypes

✓ Lesson 10 — Passing Arguments to Functions

✓ Lesson 11 — Local and Global Variables

✓ Lesson 12 — Scope and Lifetime of Variables

✓ Lesson 13 — Recursive Functions

✓ Lesson 14 — Library Functions

→ Lesson 15 — Mini Project — Calculator Using Functions

Lesson 14 Complete

`,
};

export default lesson14;