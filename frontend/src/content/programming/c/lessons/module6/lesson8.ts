const lesson8 = {
  id: "lesson8",

  title: "Copying Strings",

  content: `

# Lesson 8: Copying Strings

---

## Introduction

Sometimes a program needs to **copy the contents of one string into another string**.

For example:

char source[] = "Hello";

char destination[20];

We may want destination to contain the same text as source.

C provides the strcpy() function for this purpose.

---

# 1. strcpy() Function

The strcpy() function is declared in:

#include <string.h>

Basic syntax:

strcpy(destination, source);

Example:

char source[] = "Hello";

char destination[20];

strcpy(destination, source);

After the operation:

source → Hello

destination → Hello

---

# 2. Complete Program

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char source[] = "Hello";
    char destination[20];

    strcpy(destination, source);

    printf("Source      : %s\\n", source);
    printf("Destination : %s\\n", destination);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Source      : Hello
Destination : Hello
\`\`\`

---

# 3. How strcpy() Works

Suppose:

source:

H e l l o \\0

After:

strcpy(destination, source);

the destination contains:

destination:

H e l l o \\0

The null character is also copied.

---

# 4. Destination Must Have Enough Space

Consider:

char source[] = "Programming";

char destination[20];

strcpy(destination, source);

This is suitable because the destination has enough storage for the string and its terminating '\\0'.

The destination must have sufficient capacity.

---

# 5. Copying a User-Entered String

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char source[50];
    char destination[50];

    printf("Enter a word: ");

    scanf("%49s", source);

    strcpy(destination, source);

    printf("Copied string: %s\\n", destination);

    return 0;
}
\`\`\`

Example:

\`\`\`text
Enter a word: Computer
Copied string: Computer
\`\`\`

---

# 6. Copying a Full Line

strcpy() also works with strings read using fgets().

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char source[100];
    char destination[100];

    printf("Enter a message: ");

    fgets(source, sizeof(source), stdin);

    source[strcspn(source, "\\n")] = '\\0';

    strcpy(destination, source);

    printf("Original : %s\\n", source);
    printf("Copied   : %s\\n", destination);

    return 0;
}
\`\`\`

---

# 7. Copying an Empty String

This is valid:

char source[] = "";

char destination[20];

strcpy(destination, source);

The destination becomes an empty string.

---

# 8. Copying One String Over Another

Suppose:

char first[20] = "Apple";

char second[20] = "Orange";

We can write:

strcpy(first, second);

Now:

first → Orange

second → Orange

The original contents of first are replaced.

---

# 9. Copying Does Not Mean Sharing Storage

When:

strcpy(destination, source);

is used, the characters are copied into the destination array.

The two arrays remain separate.

For example:

source → H e l l o \\0

destination → H e l l o \\0

Changing a character in destination does not automatically change the corresponding character in source.

---

# 10. Example of Independent Arrays

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char source[] = "Hello";
    char destination[20];

    strcpy(destination, source);

    destination[0] = 'J';

    printf("Source      : %s\\n", source);
    printf("Destination : %s\\n", destination);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Source      : Hello
Destination : Jello
\`\`\`

---

# 11. Manual String Copy

We can also copy a string character by character.

\`\`\`c
#include <stdio.h>

int main(void)
{
    char source[] = "Hello";
    char destination[20];

    int i = 0;

    while (source[i] != '\\0')
    {
        destination[i] = source[i];
        i++;
    }

    destination[i] = '\\0';

    printf("%s\\n", destination);

    return 0;
}
\`\`\`

The final:

destination[i] = '\\0';

is important because the destination must be a properly terminated string.

---

# 12. strcpy() vs Manual Copy

## Using strcpy()

strcpy(destination, source);

Short and convenient.

## Manual copying

while (source[i] != '\\0')
{
    destination[i] = source[i];
    i++;
}

destination[i] = '\\0';

This is useful for understanding how string copying works.

---

# 13. Practical Example — Student Details

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char originalName[50];
    char copiedName[50];

    printf("Enter student name: ");

    fgets(originalName, sizeof(originalName), stdin);

    originalName[strcspn(originalName, "\\n")] = '\\0';

    strcpy(copiedName, originalName);

    printf("\\nOriginal Name: %s\\n", originalName);
    printf("Copied Name: %s\\n", copiedName);

    return 0;
}
\`\`\`

---

# 14. Important Rule

Before using:

strcpy(destination, source);

make sure the destination array is large enough.

For example:

char source[] = "Hello";

char destination[6];

strcpy(destination, source);

The destination needs enough space for:

5 characters + '\\0'

---

# 15. Important Points

strcpy()

↓

Copies one string into another

↓

Declared in <string.h>

↓

Copies the terminating '\\0'

↓

Destination must have enough storage

---

# Lesson Summary

The standard string-copying function is:

strcpy(destination, source);

Example:

char source[] = "Hello";

char destination[20];

strcpy(destination, source);

After copying:

source → Hello

destination → Hello

String copying is commonly used when a program needs a separate copy of text.

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

→ Lesson 9 — Comparing Strings

  Lesson 10 — Concatenating Strings

  Lesson 11 — Searching in Strings

  Lesson 12 — String Manipulation Functions

  Lesson 13 — Array of Strings

  Lesson 14 — Common String Mistakes

  Lesson 15 — Mini Project — Student Name and Grade Manager

**Lesson 8 Complete**

Next: **Lesson 9 — Comparing Strings**

`,
};

export default lesson8;