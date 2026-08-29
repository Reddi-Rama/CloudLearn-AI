const lesson10 = {
  id: "lesson10",

  title: "Passing Arguments to Functions",

  content: `

# Lesson 10: Passing Arguments to Functions

## Introduction

When a function is called, values can be passed to its parameters.

This process is called **passing arguments to a function**.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Function call:

\`\`\`c
int result = add(10, 20);
\`\`\`

Here:

\`\`\`text
10 → a
20 → b
\`\`\`

The function uses these values to perform its operation.

---

## 1. Arguments and Parameters

Consider:

\`\`\`c
int multiply(int x, int y)
{
    return x * y;
}
\`\`\`

Here \`x\` and \`y\` are parameters.

When calling:

\`\`\`c
multiply(5, 4);
\`\`\`

\`5\` and \`4\` are arguments.

Therefore:

\`\`\`text
Parameters → Variables in function definition

Arguments → Values supplied during function call
\`\`\`

---

## 2. Passing Constant Values

Direct values can be passed as arguments.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}

int result = add(10, 20);
\`\`\`

The function receives:

\`\`\`text
a = 10
b = 20
\`\`\`

The returned result is:

\`\`\`text
30
\`\`\`

---

## 3. Passing Variables

Variables can also be passed as arguments.

Example:

\`\`\`c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int x = 10;
    int y = 20;
    int result;

    result = add(x, y);

    printf("Result = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Result = 30
\`\`\`

The values stored in \`x\` and \`y\` are passed to the function.

---

## 4. Passing Expressions

Expressions can also be passed.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Call:

\`\`\`c
int result = add(5 + 5, 20 - 10);
\`\`\`

The expressions produce:

\`\`\`text
5 + 5  → 10
20 - 10 → 10
\`\`\`

The function receives:

\`\`\`text
a = 10
b = 10
\`\`\`

and returns:

\`\`\`text
20
\`\`\`

---

## 5. Passing Multiple Arguments

A function can receive several arguments.

Example:

\`\`\`c
int sum(int a, int b, int c)
{
    return a + b + c;
}
\`\`\`

Call:

\`\`\`c
int result = sum(10, 20, 30);
\`\`\`

The values are passed in order:

\`\`\`text
10 → a
20 → b
30 → c
\`\`\`

The result is:

\`\`\`text
60
\`\`\`

---

## 6. Arguments Are Passed in Order

The first argument corresponds to the first parameter, the second argument to the second parameter, and so on.

Example:

\`\`\`c
int calculate(int a, int b)
{
    return a - b;
}
\`\`\`

Call:

\`\`\`c
calculate(20, 5);
\`\`\`

The function receives:

\`\`\`text
a = 20
b = 5
\`\`\`

Result:

\`\`\`text
15
\`\`\`

---

## 7. Passing Different Data Types

Functions can receive parameters of different types.

Example:

\`\`\`c
float calculateTotal(float price, int quantity)
{
    return price * quantity;
}
\`\`\`

Call:

\`\`\`c
float total = calculateTotal(25.5f, 4);
\`\`\`

The values are:

\`\`\`text
25.5 → price
4    → quantity
\`\`\`

The result is:

\`\`\`text
102.00
\`\`\`

---

## 8. Passing a Character

A character can be passed to a function.

Example:

\`\`\`c
#include <stdio.h>

void displayGrade(char grade)
{
    printf("Grade = %c", grade);
}

int main(void)
{
    displayGrade('A');

    return 0;
}
\`\`\`

### Output

\`\`\`text
Grade = A
\`\`\`

---

## 9. Passing an Array

Arrays can also be passed to functions.

Example:

\`\`\`c
#include <stdio.h>

void display(int numbers[], int size)
{
    for (int i = 0; i < size; i++)
    {
        printf("%d ", numbers[i]);
    }
}

int main(void)
{
    int numbers[] = {10, 20, 30, 40};

    display(numbers, 4);

    return 0;
}
\`\`\`

### Output

\`\`\`text
10 20 30 40
\`\`\`

The array and its size are passed to the function.

---

## 10. Passing a Pointer

A pointer can also be passed to a function.

Example:

\`\`\`c
#include <stdio.h>

void displayValue(int *ptr)
{
    printf("Value = %d", *ptr);
}

int main(void)
{
    int number = 25;

    displayValue(&number);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Value = 25
\`\`\`

Here:

\`\`\`text
&number → address passed to function
ptr     → receives the address
*ptr    → accesses the value
\`\`\`

---

## 11. Modifying a Variable Using a Pointer

Passing a pointer allows a function to modify the original variable.

Example:

\`\`\`c
#include <stdio.h>

void increase(int *number)
{
    (*number)++;
}

int main(void)
{
    int value = 10;

    increase(&value);

    printf("Value = %d", value);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Value = 11
\`\`\`

The function receives the address of \`value\` and changes the value stored there.

---

## 12. Pass-by-Value

C normally passes function arguments **by value**.

This means the function receives a copy of the argument.

Example:

\`\`\`c
#include <stdio.h>

void change(int number)
{
    number = 100;
}

int main(void)
{
    int value = 10;

    change(value);

    printf("Value = %d", value);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Value = 10
\`\`\`

The original variable is unchanged because the function received a copy.

---

## 13. Using Pointers to Modify Original Data

To modify the original variable, pass its address.

Example:

\`\`\`c
#include <stdio.h>

void change(int *number)
{
    *number = 100;
}

int main(void)
{
    int value = 10;

    change(&value);

    printf("Value = %d", value);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Value = 100
\`\`\`

This uses a pointer to access the original variable.

---

## 14. Important Points

Arguments can be:

- Constant values.
- Variables.
- Expressions.
- Characters.
- Arrays.
- Pointers.

Example:

\`\`\`c
add(10, 20);
add(x, y);
add(x + 5, y * 2);
\`\`\`

For ordinary parameters, C passes arguments by value.

Pointers can be used when a function needs to modify data in the caller.

---

## 15. Complete Example

\`\`\`c
#include <stdio.h>

int calculate(int a, int b)
{
    return a * b;
}

void doubleValue(int *number)
{
    *number = *number * 2;
}

int main(void)
{
    int x = 5;
    int y = 4;
    int result;

    result = calculate(x, y);

    printf("Product = %d\\n", result);

    doubleValue(&x);

    printf("Doubled x = %d", x);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Product = 20
Doubled x = 10
\`\`\`

---

## Lesson Summary

Arguments allow data to be passed from the calling code to a function.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Call:

\`\`\`c
add(10, 20);
\`\`\`

C normally passes arguments by value.

When a function needs to modify the original data, a pointer can be passed:

\`\`\`c
change(&value);
\`\`\`

Understanding argument passing is essential for creating useful and reusable functions.

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

→ Lesson 11 — Local and Global Variables

  Lesson 12 — Scope and Lifetime of Variables

  Lesson 13 — Recursive Functions

  Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 10 Complete

`,
};

export default lesson10;