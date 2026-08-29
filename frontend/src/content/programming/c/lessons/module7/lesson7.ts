const lesson7 = {
  id: "lesson7",
  title: "Pointers and Arrays",

  content: `
Pointers and arrays are closely related in C.

The name of an array represents the address of its first element in most expressions.

For example:

int numbers[5] = {10, 20, 30, 40, 50};

The expression:

numbers

refers to the address of the first element.

So we can use a pointer to traverse and access the elements of an array.

1. Array Name and Pointer

Consider:

int numbers[] = {10, 20, 30};

We can create a pointer:

int *ptr = numbers;

Now:

ptr → numbers[0]

Therefore:

*ptr

gives:

10

2. Accessing Array Elements Through a Pointer

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30};
    int *ptr = numbers;

    printf("%d\\n", *ptr);
    printf("%d\\n", *(ptr + 1));
    printf("%d\\n", *(ptr + 2));

    return 0;
}

Output:

10
20
30

3. Array Indexing and Pointers

There is an important relationship:

numbers[i]

is equivalent to:

*(numbers + i)

For example:

numbers[2]

and:

*(numbers + 2)

both access the third element.

4. Traversing an Array With a Pointer

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

5. Modifying Array Elements Through a Pointer

A pointer can also modify array elements.

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30};
    int *ptr = numbers;

    *ptr = 100;

    printf("%d\\n", numbers[0]);

    return 0;
}

Output:

100

The first element was changed through the pointer.

6. Moving the Pointer

int *ptr = numbers;

Initially:

ptr → numbers[0]

After:

ptr++;

the pointer points to:

numbers[1]

Another:

ptr++;

moves it to:

numbers[2]

7. Pointer and Array Example

#include <stdio.h>

int main(void)
{
    int marks[] = {75, 80, 85, 90, 95};
    int *ptr = marks;

    for (int i = 0; i < 5; i++)
    {
        printf("Mark: %d\\n", *(ptr + i));
    }

    return 0;
}

Output:

Mark: 75
Mark: 80
Mark: 85
Mark: 90
Mark: 95

8. Finding the Sum Using a Pointer

#include <stdio.h>

int main(void)
{
    int numbers[] = {10, 20, 30, 40, 50};
    int *ptr = numbers;
    int sum = 0;

    for (int i = 0; i < 5; i++)
    {
        sum += *ptr;
        ptr++;
    }

    printf("Sum = %d\\n", sum);

    return 0;
}

Output:

Sum = 150

9. Important Points

Array name
↓
Address of first element

Pointer
↓
Can store that address

ptr + i
↓
Moves i elements forward

*(ptr + i)
↓
Accesses the element

Lesson Summary

Arrays and pointers work very closely together.

The most important relationship is:

numbers[i]

and:

*(numbers + i)

Both access the same element.

Pointers make it possible to traverse and modify array elements efficiently.
`,

  summary:
    "Pointers and arrays are closely related in C. A pointer can store the address of the first array element and can be used to access, traverse, and modify array elements.",

  keyPoints: [
    "An array name represents the address of its first element in most expressions.",
    "A pointer can store the address of the first array element.",
    "numbers[i] and *(numbers + i) access the same array element.",
    "Pointers can be incremented to traverse an array.",
    "Array elements can be modified through a pointer.",
  ],
};

export default lesson7;