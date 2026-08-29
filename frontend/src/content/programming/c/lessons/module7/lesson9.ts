const lesson9 = {
  id: "lesson9",
  title: "Pointers and Functions",

  content: `
Pointers become especially useful when working with functions.

Normally, when a variable is passed to a function, C passes its value.

If we want a function to modify the original variable, we can pass its address using a pointer.

This allows the function to work with the original data.

1. Passing a Normal Variable

Consider:

#include <stdio.h>

void change(int x)
{
    x = 100;
}

int main(void)
{
    int number = 10;

    change(number);

    printf("%d\\n", number);

    return 0;
}

Output:

10

The function changes only its local copy of number.

2. Passing a Pointer

Instead, we can pass the address:

#include <stdio.h>

void change(int *ptr)
{
    *ptr = 100;
}

int main(void)
{
    int number = 10;

    change(&number);

    printf("%d\\n", number);

    return 0;
}

Output:

100

The function receives the address of the original variable.

3. Understanding the Flow

The statement:

change(&number);

passes:

address of number

The function receives it:

void change(int *ptr)

Then:

*ptr = 100;

changes the value stored at that address.

So:

main()
   ↓
number
   ↓
&number
   ↓
function
   ↓
ptr
   ↓
*ptr
   ↓
original number

4. Function With a Pointer Parameter

General form:

return_type function_name(data_type *parameter)
{
    // statements
}

Example:

void update(int *value)
{
    *value = 50;
}

The parameter value is a pointer to an integer.

5. Swapping Two Numbers

Pointers are commonly used to swap two variables.

#include <stdio.h>

void swap(int *a, int *b)
{
    int temp = *a;

    *a = *b;
    *b = temp;
}

int main(void)
{
    int x = 10;
    int y = 20;

    printf("Before: x = %d, y = %d\\n", x, y);

    swap(&x, &y);

    printf("After: x = %d, y = %d\\n", x, y);

    return 0;
}

Output:

Before: x = 10, y = 20
After: x = 20, y = 10

6. Why Does the Swap Work?

Initially:

x = 10
y = 20

The function receives:

&a → address of x
&b → address of y

Then:

*a = *b;

and:

*b = temp;

modify the original variables.

7. Returning Multiple Results

A function can use pointer parameters to return more than one result.

Example:

#include <stdio.h>

void calculate(int a, int b, int *sum, int *difference)
{
    *sum = a + b;
    *difference = a - b;
}

int main(void)
{
    int sum;
    int difference;

    calculate(20, 5, &sum, &difference);

    printf("Sum = %d\\n", sum);
    printf("Difference = %d\\n", difference);

    return 0;
}

Output:

Sum = 25
Difference = 15

8. Passing Arrays to Functions

Arrays are commonly handled through pointers when passed to functions.

Example:

#include <stdio.h>

void display(int *numbers, int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%d ", numbers[i]);
    }
}

int main(void)
{
    int numbers[] = {10, 20, 30, 40, 50};

    display(numbers, 5);

    return 0;
}

Output:

10 20 30 40 50

9. Modifying an Array Through a Function

#include <stdio.h>

void doubleValues(int *numbers, int size)
{
    for (int i = 0; i < size; i++)
    {
        numbers[i] = numbers[i] * 2;
    }
}

int main(void)
{
    int numbers[] = {10, 20, 30};

    doubleValues(numbers, 3);

    for (int i = 0; i < 3; i++)
    {
        printf("%d ", numbers[i]);
    }

    return 0;
}

Output:

20 40 60

The original array was modified.

10. Pointer and Function Relationship

Consider:

void update(int *ptr)
{
    *ptr = 100;
}

and:

int number = 20;

update(&number);

The flow is:

number
   ↓
&number
   ↓
update()
   ↓
ptr
   ↓
*ptr
   ↓
changes number

11. Pointer to a Function Parameter

The pointer parameter:

int *ptr

does not create a new integer containing the original value.

It receives an address.

The dereference operator:

*ptr

then accesses the value stored at that address.

12. Practical Example — Updating Marks

#include <stdio.h>

void updateMarks(int *marks)
{
    *marks = 95;
}

int main(void)
{
    int marks = 75;

    printf("Before: %d\\n", marks);

    updateMarks(&marks);

    printf("After: %d\\n", marks);

    return 0;
}

Output:

Before: 75
After: 95

13. Pointer Parameters With Different Types

Pointers can be used with different data types.

Integer:

void update(int *value)

Float:

void update(float *value)

Character:

void update(char *value)

The pointer type should match the data being accessed.

14. Important Difference

Compare:

void change(int value)

with:

void change(int *value)

The first receives a value.

The second receives an address.

Therefore:

Normal parameter
↓
Function works with a copy

Pointer parameter
↓
Function can access the original variable

15. Important Points

Pass value:

function(number);

Pass address:

function(&number);

Pointer parameter:

void function(int *ptr)

Access original value:

*ptr

Pointers allow functions to modify variables outside their own local scope.

Lesson Summary

Pointers and functions work together to allow functions to access and modify original variables.

For example:

void change(int *ptr)
{
    *ptr = 100;
}

Call it with:

int number = 10;

change(&number);

After the function call:

number = 100

This technique is essential for swapping values, returning multiple results, modifying arrays, and many other practical C programming tasks.
`,

  summary:
    "Pointers allow functions to access and modify original variables by receiving their addresses. They are also useful for swapping values, modifying arrays, and returning multiple results.",

  keyPoints: [
    "A pointer can be passed as a function parameter.",
    "The address of a variable is passed using &.",
    "The function uses * to access the original value.",
    "Pointers can be used to swap two variables.",
    "Pointer parameters can be used to produce multiple results.",
    "Arrays can be passed to functions using pointers.",
  ],
};

export default lesson9;