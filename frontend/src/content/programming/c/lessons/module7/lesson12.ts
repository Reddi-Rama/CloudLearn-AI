const lesson12 = {
  id: "lesson12",
  title: "NULL Pointers",

  content: `
A pointer should always have a meaningful value before it is dereferenced.

Sometimes, however, we want to declare a pointer without making it point to a valid object yet.

For this situation, C provides the NULL pointer.

Example:

int *ptr = NULL;

This means:

ptr currently does not point to a valid object.

1. What Is NULL?

NULL is a null pointer constant used to represent a pointer that does not point to a valid object or function.

Example:

int *ptr = NULL;

Conceptually:

ptr
  ↓
no valid target

2. Why Initialize a Pointer to NULL?

Suppose we declare:

int *ptr;

If this is an automatic local variable, it has an indeterminate value.

Using it before initialization can cause undefined behavior.

Instead:

int *ptr = NULL;

gives the pointer a known state.

3. Checking for NULL

We can check whether a pointer is null:

if (ptr == NULL)
{
    printf("Pointer is NULL\\n");
}

Example:

#include <stdio.h>

int main(void)
{
    int *ptr = NULL;

    if (ptr == NULL)
    {
        printf("Pointer is NULL\\n");
    }

    return 0;
}

Output:

Pointer is NULL

4. Do Not Dereference a NULL Pointer

This is unsafe:

int *ptr = NULL;

printf("%d\\n", *ptr);

A null pointer does not point to a valid object that can be dereferenced.

Always check the pointer before dereferencing when it may be null.

5. Assigning a Valid Address

A NULL pointer can later be assigned a valid address.

#include <stdio.h>

int main(void)
{
    int number = 50;
    int *ptr = NULL;

    ptr = &number;

    printf("%d\\n", *ptr);

    return 0;
}

Output:

50

The pointer changes from:

NULL

to:

address of number

6. Setting a Pointer Back to NULL

After a pointer is no longer intended to point to an object, it can be set to NULL.

int number = 10;
int *ptr = &number;

ptr = NULL;

Now:

ptr → no valid target

This can make the pointer's state clear.

7. NULL Pointer in a Function

A function can check whether a pointer argument is valid.

#include <stdio.h>

void display(int *ptr)
{
    if (ptr == NULL)
    {
        printf("No value provided\\n");
        return;
    }

    printf("Value: %d\\n", *ptr);
}

int main(void)
{
    int number = 25;

    display(&number);
    display(NULL);

    return 0;
}

Output:

Value: 25
No value provided

8. NULL and Pointer Validation

Suppose a function receives:

void process(int *ptr)

Before doing:

*ptr

we can check:

if (ptr == NULL)
{
    return;
}

This prevents the function from dereferencing a null pointer.

9. NULL Pointer vs Uninitialized Pointer

These are very different.

Uninitialized:

int *ptr;

The pointer contains an indeterminate value.

NULL pointer:

int *ptr = NULL;

The pointer has been deliberately given a known null state.

So:

Uninitialized pointer
↓
Unknown / indeterminate state

NULL pointer
↓
Known "points to no valid object" state

10. NULL Pointer vs Valid Pointer

Example:

int number = 10;

int *p1 = NULL;
int *p2 = &number;

Then:

p1 → NULL
p2 → address of number

Only p2 can safely be dereferenced in this example.

11. Example With Conditional Checking

#include <stdio.h>

int main(void)
{
    int number = 100;
    int *ptr = &number;

    if (ptr != NULL)
    {
        printf("Value = %d\\n", *ptr);
    }

    return 0;
}

Output:

Value = 100

12. NULL After Pointer Operations

When working with pointers, setting them to NULL can help indicate that they no longer point to a valid object.

For example:

int *ptr = NULL;

can be used as an initial state before a valid target is assigned.

This is especially useful in larger programs where pointer state needs to be tracked.

13. NULL in Searching

Pointer-returning functions often use NULL to indicate that something was not found.

For example:

char *result = strchr(text, 'x');

if (result == NULL)
{
    printf("Character not found\\n");
}

If the character is found, result points to its location.

If it is not found, result is NULL.

14. Practical Example

#include <stdio.h>

int findValue(int *ptr)
{
    if (ptr == NULL)
    {
        return -1;
    }

    return *ptr;
}

int main(void)
{
    int number = 50;

    printf("Result: %d\\n", findValue(&number));
    printf("Result: %d\\n", findValue(NULL));

    return 0;
}

Output:

Result: 50
Result: -1

15. Important Points

int *ptr = NULL;
        ↓
Pointer currently has no valid target

ptr == NULL
        ↓
Check whether pointer is null

ptr != NULL
        ↓
Pointer is not null

*ptr
        ↓
Only use when ptr points to a valid object

A NULL check does not prove that every non-NULL pointer is valid in every situation, but it is an important basic safety check.

Lesson Summary

A NULL pointer represents a pointer that does not currently point to a valid object.

Example:

int *ptr = NULL;

Before dereferencing a pointer that may be NULL:

if (ptr != NULL)
{
    printf("%d", *ptr);
}

Understanding NULL pointers is essential for writing safer C programs and avoiding invalid memory access.
`,

  summary:
    "A NULL pointer represents a pointer that does not currently point to a valid object. Pointers that may be NULL should be checked before dereferencing.",

  keyPoints: [
    "A NULL pointer does not point to a valid object.",
    "A pointer can be initialized using NULL.",
    "A NULL pointer must not be dereferenced.",
    "Pointers can be checked using ptr == NULL.",
    "An uninitialized pointer is different from a NULL pointer.",
    "A NULL pointer can later be assigned a valid address.",
    "Pointer-returning functions can use NULL to indicate that something was not found.",
  ],
};

export default lesson12;