const lesson7 = {
  id: "lesson7",

  title: "String Length",

  content: `

# Lesson 7: String Length

---

## Introduction

The **length of a string** is the number of characters present in the string, excluding the terminating null character '\\0'.

For example:

char name[] = "Hello";

The string contains:

H   e   l   l   o   \\0

The string length is:

5

The '\\0' is used to mark the end of the string, but it is **not counted** as part of the string length.

---

# 1. Using strlen()

C provides the strlen() function to find the length of a string.

It is declared in:

#include <string.h>

Basic syntax:

strlen(string);

Example:

char name[] = "Hello";

int length = strlen(name);

Now:

length = 5

---

# 2. Complete Program

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[] = "Hello";

    printf("Length = %zu\\n", strlen(name));

    return 0;
}
\`\`\`

Output:

\`\`\`text
Length = 5
\`\`\`

strlen() returns a value of type size_t, so %zu is the appropriate format specifier for displaying it.

---

# 3. String Length With Spaces

Spaces are also characters in a string.

For:

char message[] = "Hello World";

the length is:

11

because:

Hello = 5

Space = 1

World = 5

Total = 11

Example:

printf("Length = %zu\\n", strlen(message));

---

# 4. String Length and '\\0'

Consider:

char word[] = "Hello";

The array contains:

H e l l o \\0

Therefore:

Array storage = 6 characters

String length = 5 characters

strlen() stops when it reaches '\\0'.

---

# 5. Finding Length Without strlen()

We can also calculate the length manually.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char word[] = "Hello";
    int length = 0;

    while (word[length] != '\\0')
    {
        length++;
    }

    printf("Length = %d\\n", length);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Length = 5
\`\`\`

The loop moves through the string until it reaches the null character.

---

# 6. How Manual Length Calculation Works

For:

Hello

the process is:

word[0] = H → length = 1

word[1] = e → length = 2

word[2] = l → length = 3

word[3] = l → length = 4

word[4] = o → length = 5

word[5] = \\0 → stop

---

# 7. Finding Length of User Input

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[50];

    printf("Enter your name: ");

    scanf("%49s", name);

    printf("Length = %zu\\n", strlen(name));

    return 0;
}
\`\`\`

Example:

\`\`\`text
Enter your name: Rahul
Length = 5
\`\`\`

---

# 8. Finding Length of a Full Line

Using fgets():

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char message[100];

    printf("Enter a message: ");

    fgets(message, sizeof(message), stdin);

    message[strcspn(message, "\\n")] = '\\0';

    printf("Length = %zu\\n", strlen(message));

    return 0;
}
\`\`\`

Removing the newline first ensures that the Enter key's newline is not included in the calculated length.

---

# 9. Empty String

Consider:

char word[] = "";

The string contains only:

\\0

Therefore:

strlen(word)

returns:

0

---

# 10. Practical Example — Student Name

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char name[50];

    printf("Enter student name: ");

    fgets(name, sizeof(name), stdin);

    name[strcspn(name, "\\n")] = '\\0';

    printf("Student Name: %s\\n", name);
    printf("Name Length: %zu\\n", strlen(name));

    return 0;
}
\`\`\`

Example:

\`\`\`text
Enter student name: Rahul Kumar
Student Name: Rahul Kumar
Name Length: 11
\`\`\`

---

# 11. Why String Length Is Useful

String length is useful when a program needs to:

- Check the size of a name.
- Validate user input.
- Count characters.
- Control loops.
- Process text.
- Compare text sizes.

For example:

\`\`\`c
if (strlen(name) > 20)
{
    printf("Name is too long");
}
\`\`\`

---

# 12. Important Difference

Do not confuse:

sizeof(name)

with:

strlen(name)

For:

char name[20] = "Hello";

typically:

sizeof(name) → 20

strlen(name) → 5

sizeof gives the size of the array in bytes in this context, while strlen gives the number of characters before '\\0'.

---

# 13. Important Points

strlen()

↓

Finds string length

↓

Declared in <string.h>

↓

Does not count '\\0'

↓

Counts spaces and other characters

---

# Lesson Summary

The standard way to find string length is:

strlen(name)

Example:

char name[] = "Computer";

printf("%zu", strlen(name));

Output:

8

Understanding string length is important for input validation and other string-processing operations.

---

# Module 6 Progress

✓ Lesson 1 — Introduction to Strings

✓ Lesson 2 — Character Arrays and Strings

✓ Lesson 3 — String Declaration and Initialization

✓ Lesson 4 — Null Character '\\0'

✓ Lesson 5 — Reading and Displaying Strings

✓ Lesson 6 — String Input Using fgets()

✓ Lesson 7 — String Length

→ Lesson 8 — Copying Strings

  Lesson 9 — Comparing Strings

  Lesson 10 — Concatenating Strings

  Lesson 11 — Searching in Strings

  Lesson 12 — String Manipulation Functions

  Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 7 Complete**

Next: **Lesson 8 — Copying Strings**

`,
};

export default lesson7;