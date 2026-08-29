const lesson6 = {
  id: "lesson6",
  title: "Pointer Arithmetic",

  content: `
Pointers can be used in arithmetic operations.

Pointer arithmetic is especially useful when working with arrays, because array elements are stored in consecutive memory locations.

The main pointer arithmetic operations are:

Increment       ++
Decrement       --
Addition        +
Subtraction     -
Difference      between two pointers

However, pointer arithmetic behaves differently from ordinary integer arithmetic.

1. Incrementing a Pointer

Suppose:

int numbers[] = {10, 20, 30};
int *ptr = numbers;

If we write:

ptr++;

the pointer moves from the first element to the next element.

Conceptually:

Before:

ptr
 ↓
10   20   30

After ptr++:

     ptr
      ↓
10   20   30

2. Pointer Arithmetic Depends on Data Type

Suppose:

int *ptr;

When ptr is incremented:

ptr++;

it moves to the next int object, not simply one raw byte forward.

Similarly:

char *ptr;

moves to the next char object.

The compiler uses the size of the pointed-to type when performing pointer arithmetic.

3. Example With an Array

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30};
    int *ptr = numbers;

    printf("%d\\n", *ptr);

    ptr++;

    printf("%d\\n", *ptr);

    ptr++;

    printf("%d\\n", *ptr);

    return 0;
}

Output:

10
20
30

4. Pointer Increment

Consider:

int numbers[] = {10, 20, 30};
int *ptr = numbers;

Initially:

ptr → numbers[0]

After:

ptr++;

we have:

ptr → numbers[1]

After another:

ptr++;

we have:

ptr → numbers[2]

5. Pointer Decrement

We can also move backwards.

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30};
    int *ptr = &numbers[2];

    printf("%d\\n", *ptr);

    ptr--;

    printf("%d\\n", *ptr);

    return 0;
}

Output:

30
20

6. Adding an Integer to a Pointer

We can write:

ptr + 2

This moves the pointer two elements forward.

Example:

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, 40};
    int *ptr = numbers;

    printf("%d\\n", *(ptr + 2));

    return 0;
}

Output:

30

Here:

ptr + 2 → address of numbers[2]
*(ptr + 2) → value 30

7. Pointer and Array Indexing

There is an important relationship:

numbers[i]

is equivalent in meaning to:

*(numbers + i)

For example:

numbers[2]

and:

*(numbers + 2)

both access the third element.

8. Example

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, 40};

    printf("%d\\n", numbers[2]);
    printf("%d\\n", *(numbers + 2));

    return 0;
}

Output:

30
30

9. Pointer Subtraction

Two pointers pointing into the same array can be subtracted.

Example:

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, 40, 50};

    int *p1 = &numbers[1];
    int *p2 = &numbers[4];

    printf("Difference: %td\\n", p2 - p1);

    return 0;
}

Output:

Difference: 3

The difference tells us how many elements apart the pointers are.

10. Comparing Pointers

Pointers can also be compared when they point into the same array or otherwise have a meaningful ordering relationship.

For example:

if (p1 < p2)
{
    printf("p1 comes before p2\\n");
}

This is useful when traversing arrays with pointers.

11. Traversing an Array Using a Pointer

Instead of using an index:

for (int i = 0; i < 5; i++)
{
    printf("%d\\n", numbers[i]);
}

we can use a pointer:

int *ptr = numbers;

for (int i = 0; i < 5; i++)
{
    printf("%d\\n", *(ptr + i));
}

12. Pointer-Based Traversal

Another approach is:

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, 40, 50};
    int *ptr = numbers;

    for (int i = 0; i < 5; i++)
    {
        printf("%d\\n", *ptr);
        ptr++;
    }

    return 0;
}

Output:

10
20
30
40
50

13. Important Difference: *ptr++

Consider:

*ptr++;

Because of operator precedence, this is interpreted as:

*(ptr++);

It moves the pointer after accessing the current value.

If we want to increment the value pointed to by the pointer, write:

(*ptr)++;

These are different operations.

14. Pointer Arithmetic Should Stay Within the Same Array

Pointer arithmetic is normally meaningful when working within the same array.

For example:

int numbers[5];
int *ptr = numbers;

ptr++;

is valid.

But using pointer arithmetic to move beyond the valid range and then dereferencing it is not valid.

A pointer may be positioned one past the last element for certain calculations, but that pointer must not be dereferenced.

15. Practical Example

#include <stdio.h>

int main(void)
{
    int marks[] = {75, 80, 85, 90, 95};
    int *ptr = marks;

    for (int i = 0; i < 5; i++)
    {
        printf("Marks: %d\\n", *ptr);
        ptr++;
    }

    return 0;
}

Output:

Marks: 75
Marks: 80
Marks: 85
Marks: 90
Marks: 95

Pointer Arithmetic Summary

ptr++       → Move to next element
ptr--       → Move to previous element
ptr + n     → Move n elements forward
ptr - n     → Move n elements backward
p2 - p1     → Number of elements between pointers
*(ptr + n)  → Access element n positions away

Lesson Summary

Pointer arithmetic is closely connected with arrays.

The important relationship is:

array[i]

and:

*(array + i)

Both access the same array element.

Pointer arithmetic allows arrays and other contiguous data structures to be processed efficiently.
`,

  summary:
    "Pointer arithmetic allows pointers to move through elements of an array. Operations such as ++, --, +, -, and subtraction between pointers are useful for array traversal.",

  keyPoints: [
    "ptr++ moves a pointer to the next element.",
    "ptr-- moves a pointer to the previous element.",
    "ptr + n moves the pointer n elements forward.",
    "ptr - n moves the pointer n elements backward.",
    "array[i] and *(array + i) access the same array element.",
    "Two pointers within the same array can be subtracted to find their element distance.",
    "A one-past-the-end pointer may be used for calculations but must not be dereferenced.",
  ],
};

export default lesson6;