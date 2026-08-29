const lesson13 = {
  id: "lesson13",
  title: "Common Pointer Mistakes",

  content: `
Pointers are powerful, but they must be handled carefully. A small mistake with a pointer can cause incorrect results, crashes, or undefined behavior.

The most common pointer mistakes involve:

• Uninitialized pointers
• NULL pointers
• Invalid addresses
• Incorrect dereferencing
• Wrong pointer types
• Going outside array boundaries
• Incorrect pointer arithmetic

Understanding these mistakes is an important part of learning pointers.

1. Using an Uninitialized Pointer

This is a common mistake:

int *ptr;

*ptr = 10;

The pointer has not been given a valid address.

It may contain an indeterminate value.

A better approach is:

int number;

int *ptr = &number;

*ptr = 10;

Now ptr points to a valid variable.

2. Dereferencing a NULL Pointer

Consider:

int *ptr = NULL;

printf("%d\\n", *ptr);

This is invalid because ptr does not point to a valid object.

Instead:

if (ptr != NULL)
{
    printf("%d\\n", *ptr);
}

Always ensure that a pointer is valid before dereferencing it.

3. Using the Wrong Address

Suppose:

int number = 10;

int *ptr;

This is incorrect:

ptr = 10;

A pointer should receive an appropriate address:

ptr = &number;

Then:

printf("%d\\n", *ptr);

can access number.

4. Confusing & and *

Remember:

&number

means:

Address of number

while:

*ptr

means:

Value stored at the address held by ptr

Example:

int number = 20;
int *ptr = &number;

Relationship:

number
  ↓
20

&number
  ↓
address of number

ptr
  ↓
address of number

*ptr
  ↓
20

5. Dereferencing the Wrong Pointer

Consider:

int *ptr = NULL;

This is not safe:

*ptr = 50;

because the pointer has no valid target.

A valid example is:

int number = 20;
int *ptr = &number;

*ptr = 50;

Now:

number → 50

6. Going Outside an Array

Consider:

int numbers[3] = {10, 20, 30};

Valid elements are:

numbers[0]
numbers[1]
numbers[2]

A pointer should not be dereferenced outside the array:

int *ptr = numbers;

ptr += 3;

printf("%d\\n", *ptr);

The pointer may point one past the last element for certain comparisons or calculations, but it must not be dereferenced there.

7. Incorrect Pointer Arithmetic

Pointer arithmetic should be performed carefully.

For example:

int numbers[] = {10, 20, 30};
int *ptr = numbers;

ptr++;

moves to the next int.

It does not simply mean "move one byte."

The compiler accounts for the size of the pointed-to type.

8. Confusing ptr++ and (*ptr)++

These are different:

ptr++;

moves the pointer to another element.

While:

(*ptr)++;

increments the value being pointed to.

Example:

int numbers[] = {10, 20};
int *ptr = numbers;

(*ptr)++;

Now:

numbers[0] → 11

But:

ptr++;

makes ptr point to:

numbers[1]

9. Incorrect Pointer Type

Suppose:

float price = 25.5f;

A suitable pointer is:

float *ptr = &price;

Using an incompatible pointer type without a valid reason can result in incorrect interpretation or alignment problems.

Use pointer types that match the objects they point to.

10. Returning the Address of a Local Variable

Consider:

int *getNumber(void)
{
    int number = 10;
    return &number;
}

This is incorrect.

number is a local variable whose lifetime ends when the function returns.

Returning its address leaves the caller with a pointer that no longer points to a valid object.

Avoid returning addresses of local automatic variables.

11. Using a Pointer After Its Target's Lifetime Ends

A pointer can become invalid when the object it points to no longer exists.

For example:

int *ptr;

{
    int number = 10;
    ptr = &number;
}

After the block ends, number no longer exists.

Using:

*ptr

after that point is invalid.

12. Confusing a Pointer With the Value

Suppose:

int number = 50;
int *ptr = &number;

Then:

printf("%p\\n", (void *)ptr);

prints the address.

While:

printf("%d\\n", *ptr);

prints:

50

Remember:

ptr
  ↓
address

*ptr
  ↓
value

13. Incorrect Use of String Pointers

This is unsafe:

char *name = "Example";

name[0] = 'K';

A string literal should not be modified.

If modification is required, use a character array:

char name[] = "Example";

name[0] = 'K';

Now name contains:

Kxample

14. Losing a Pointer to Dynamically Allocated Memory

When dynamically allocated memory is involved, losing the only pointer to that memory can prevent the program from freeing it properly.

For example:

int *ptr = malloc(5 * sizeof(int));

ptr = NULL;

The allocated memory is now no longer reachable through ptr.

Dynamic memory management will be studied in a later module.

15. Pointer Safety Checklist

Before using a pointer, ask:

✓ Has the pointer been initialized?

✓ Does it point to a valid object?

✓ Could it be NULL?

✓ Am I dereferencing it safely?

✓ Am I staying within array boundaries?

✓ Is the pointer type appropriate?

✓ Is the object still alive?

✓ Am I using pointer arithmetic correctly?

✓ Am I modifying something that can legally be modified?

Lesson Summary

The most common pointer mistakes are caused by using invalid addresses or dereferencing pointers incorrectly.

Remember:

Uninitialized pointer
        ↓
Dangerous

NULL pointer
        ↓
Do not dereference

Valid pointer
        ↓
Can safely access its target

Pointer arithmetic
        ↓
Stay within valid bounds

Good pointer programming begins with careful control of where a pointer points and when it is safe to use it.
`,

  summary:
    "Common pointer mistakes include using uninitialized or NULL pointers, invalid pointer arithmetic, accessing outside array boundaries, using incorrect pointer types, and using pointers after their target objects no longer exist.",

  keyPoints: [
    "Always initialize pointers before using them.",
    "Never dereference a NULL pointer.",
    "Use & to obtain an address and * to dereference a pointer.",
    "Do not dereference a pointer outside an array's valid elements.",
    "Use appropriate pointer types.",
    "Do not return the address of a local automatic variable.",
    "Do not use a pointer after the object it points to has ceased to exist.",
    "Do not modify string literals.",
    "Be careful when managing dynamically allocated memory.",
  ],
};

export default lesson13;