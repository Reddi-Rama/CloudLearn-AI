const lesson8 = {
  id: "lesson8",
  title: "Pointers and Strings",

  content: `
Strings in C are stored as arrays of characters.

For example:

char name[] = "Ravi";

The characters are stored as:

R  a  v  i  \\0

Since arrays and pointers are closely related, we can use a character pointer to access the characters of a string.

1. Pointer to a String

#include <stdio.h>

int main(void)
{
    char name[] = "Ravi";
    char *ptr = name;

    printf("%s\\n", ptr);

    return 0;
}

Output:

Ravi

The pointer points to the first character of the string.

2. Accessing Characters Through a Pointer

#include <stdio.h>

int main(void)
{
    char name[] = "Ravi";
    char *ptr = name;

    printf("%c\\n", *ptr);
    printf("%c\\n", *(ptr + 1));
    printf("%c\\n", *(ptr + 2));
    printf("%c\\n", *(ptr + 3));

    return 0;
}

Output:

R
a
v
i

3. Traversing a String With a Pointer

We can use a pointer and stop when the null character is reached.

#include <stdio.h>

int main(void)
{
    char name[] = "Ravi";
    char *ptr = name;

    while (*ptr != '\\0')
    {
        printf("%c\\n", *ptr);
        ptr++;
    }

    return 0;
}

Output:

R
a
v
i

4. Printing a String Using a Pointer

A pointer to the first character can be passed to %s.

#include <stdio.h>

int main(void)
{
    char message[] = "Hello C";
    char *ptr = message;

    printf("%s\\n", ptr);

    return 0;
}

Output:

Hello C

5. Modifying Characters Through a Pointer

Because message is a character array, its characters can be modified.

#include <stdio.h>

int main(void)
{
    char word[] = "Hello";
    char *ptr = word;

    *ptr = 'Y';

    printf("%s\\n", word);

    return 0;
}

Output:

Yello

The first character was changed through the pointer.

6. Moving Through a String

char word[] = "Computer";
char *ptr = word;

Initially:

ptr → C

After:

ptr++;

it points to:

o

After another:

ptr++;

it points to:

m

This continues until the null character is reached.

7. Finding String Length Using a Pointer

#include <stdio.h>

int main(void)
{
    char text[] = "Programming";
    char *ptr = text;
    int length = 0;

    while (*ptr != '\\0')
    {
        length++;
        ptr++;
    }

    printf("Length = %d\\n", length);

    return 0;
}

Output:

Length = 11

8. Pointer and strlen()

We can also use the standard library:

#include <stdio.h>
#include <string.h>

int main(void)
{
    char text[] = "Programming";
    char *ptr = text;

    printf("Length = %zu\\n", strlen(ptr));

    return 0;
}

Here ptr points to the beginning of the string.

9. Pointer to a String Literal

We may see:

const char *message = "Hello";

Here message points to a string literal that should not be modified.

The const indicates that the characters should be treated as read-only.

Do not attempt:

message[0] = 'Y';

Instead, if you need a modifiable string, use:

char message[] = "Hello";

10. Comparing Strings Through Pointers

String functions can also receive pointers to strings.

#include <stdio.h>
#include <string.h>

int main(void)
{
    char first[] = "Hello";
    char second[] = "Hello";

    char *p1 = first;
    char *p2 = second;

    if (strcmp(p1, p2) == 0)
    {
        printf("Strings are equal\\n");
    }

    return 0;
}

Output:

Strings are equal

11. Copying Strings Using Pointers

The standard strcpy() function works with character pointers.

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

Output:

Hello

12. Practical Example

#include <stdio.h>

int main(void)
{
    char text[] = "C Programming";
    char *ptr = text;

    printf("Characters:\\n");

    while (*ptr != '\\0')
    {
        printf("%c ", *ptr);
        ptr++;
    }

    return 0;
}

Output:

Characters:
C P r o g r a m m i n g

13. Pointer and String Relationship

For:

char text[] = "Hello";
char *ptr = text;

we can think of:

ptr

↓

H → e → l → l → o → \\0

Each increment moves the pointer to the next character.

14. Important Difference

These are different:

char text[] = "Hello";

and:

const char *text = "Hello";

The first creates a modifiable character array.

The second points to a string literal that should be treated as read-only.

15. Important Points

String
↓
Character array

char *ptr = string;
↓
Pointer to first character

*ptr
↓
Current character

ptr++
↓
Next character

*ptr != '\\0'
↓
Continue until end of string

Lesson Summary

Pointers can be used to access and traverse strings because strings are stored as character arrays.

Example:

char text[] = "Hello";
char *ptr = text;

Then:

*ptr

accesses the current character, while:

ptr++

moves to the next character.

This connection between pointers and strings is very important for understanding how many C string operations work internally.
`,

  summary:
    "Pointers can be used to access, traverse, and modify character arrays that represent strings. A character pointer can move through a string until it reaches the null character.",

  keyPoints: [
    "C strings are stored as character arrays ending with '\\0'.",
    "A char pointer can point to the first character of a string.",
    "*ptr accesses the current character.",
    "ptr++ moves to the next character.",
    "A string can be traversed until *ptr becomes '\\0'.",
    "String literals should not be modified through a pointer.",
  ],
};

export default lesson8;