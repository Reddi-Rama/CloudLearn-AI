const lesson10 = {
  id: "lesson10",
  title: "Call by Reference",

  content: `
In C, function arguments are normally passed by value. This means the function receives a copy of the value.

If we want a function to modify the original variable, we can pass its address using a pointer.

This technique is commonly called call by reference in C programming.

For example:

int number = 10;

change(&number);

The function receives the address of number and can modify its original value through a pointer.

1. Call by Value

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

The function changes only its local copy.

2. Call by Reference Using Pointers

#include <stdio.h>

void change(int *x)
{
    *x = 100;
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

Here:

number
   ↓
&number
   ↓
function parameter x
   ↓
*x
   ↓
original number

3. Why Use Call by Reference?

It is useful when a function needs to:

• Modify the original variable
• Return multiple results
• Modify array elements
• Swap two values
• Avoid copying large amounts of data
• Work directly with existing data

4. Swapping Two Numbers

One of the most common examples is swapping two variables.

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

5. Returning Multiple Values

A function normally returns one value using return.

Pointers allow a function to modify multiple variables.

#include <stdio.h>

void calculate(int a, int b, int *sum, int *product)
{
    *sum = a + b;
    *product = a * b;
}

int main(void)
{
    int sum;
    int product;

    calculate(5, 4, &sum, &product);

    printf("Sum = %d\\n", sum);
    printf("Product = %d\\n", product);

    return 0;
}

Output:

Sum = 9
Product = 20

6. Call by Reference With Arrays

Arrays can be modified inside functions.

#include <stdio.h>

void update(int *numbers, int size)
{
    for (int i = 0; i < size; i++)
    {
        numbers[i] += 10;
    }
}

int main(void)
{
    int numbers[] = {10, 20, 30};

    update(numbers, 3);

    for (int i = 0; i < 3; i++)
    {
        printf("%d ", numbers[i]);
    }

    return 0;
}

Output:

20 30 40

7. Important Point About C

Strictly speaking, C itself uses pass-by-value.

When we use a pointer parameter, the address is passed by value.

For example:

change(&number);

passes a copy of the address to the function.

The function can then use that address to access the original variable.

This is why C textbooks often call this technique call by reference, even though the language mechanism is technically passing a pointer by value.

8. Call by Value vs Pointer-Based Reference

Call by Value:

• Passes a value
• Function works with a copy
• Original variable normally remains unchanged
• Example: function(x)
• Parameter: int x

Pointer-Based Reference:

• Passes an address
• Function can access original data
• Original variable can be modified
• Example: function(&x)
• Parameter: int *x

9. Practical Example — Update Marks

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

10. Important Points

Call by value
↓
Copy of value is passed

Pointer-based reference
↓
Address is passed

&variable
↓
Gets address

*pointer
↓
Accesses original value

Lesson Summary

Call by reference allows a function to modify the original variable by receiving its address.

Example:

void change(int *x)
{
    *x = 100;
}

Call:

change(&number);

This concept is especially useful for swapping values, modifying arrays, and returning multiple results.
`,

  summary:
    "C technically uses pass-by-value. Pointer-based function parameters allow a function to receive an address and modify the original variable, a technique commonly called call by reference.",

  keyPoints: [
    "C technically passes all function arguments by value.",
    "A pointer parameter receives a copy of an address.",
    "Passing an address allows a function to access the original variable.",
    "Call by reference is useful for swapping values.",
    "Pointers can be used to return multiple results.",
    "Arrays can be modified through pointer parameters.",
  ],
};

export default lesson10;