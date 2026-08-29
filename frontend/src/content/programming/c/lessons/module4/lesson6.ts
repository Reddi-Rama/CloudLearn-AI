const lesson6 = {
  id: "lesson6",

  title: "Parameters and Arguments",

  content: `

# Lesson 6: Parameters and Arguments

## Introduction

Functions can receive data from the calling part of a program.

The values supplied to a function are called **arguments**, while the variables that receive those values inside the function are called **parameters**.

For example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

When we call:

\`\`\`c
add(10, 20);
\`\`\`

\`a\` and \`b\` are parameters, while \`10\` and \`20\` are arguments.

---

## 1. What Is a Parameter?

A **parameter** is a variable listed in a function definition.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Here:

\`\`\`text
a → Parameter
b → Parameter
\`\`\`

Parameters receive values when the function is called.

---

## 2. What Is an Argument?

An **argument** is a value or expression supplied when calling a function.

Example:

\`\`\`c
add(10, 20);
\`\`\`

Here:

\`\`\`text
10 → Argument
20 → Argument
\`\`\`

The values are passed to the corresponding parameters.

---

## 3. Parameter and Argument Relationship

Consider:

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

The relationship is:

\`\`\`text
Argument       Parameter

10      →      a
20      →      b
\`\`\`

The function then calculates:

\`\`\`text
a + b
↓
10 + 20
↓
30
\`\`\`

---

## 4. Function With One Parameter

A function can accept one parameter.

Example:

\`\`\`c
int square(int number)
{
    return number * number;
}
\`\`\`

Call:

\`\`\`c
square(5);
\`\`\`

Here:

\`\`\`text
5 → number
\`\`\`

The returned value is:

\`\`\`text
25
\`\`\`

---

## 5. Function With Multiple Parameters

A function can accept multiple parameters.

Example:

\`\`\`c
int add(int a, int b, int c)
{
    return a + b + c;
}
\`\`\`

Call:

\`\`\`c
add(10, 20, 30);
\`\`\`

The values are assigned as:

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

## 6. Complete Example

\`\`\`c
#include <stdio.h>

int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    int result;

    result = add(15, 25);

    printf("Sum = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Sum = 40
\`\`\`

---

## 7. Passing Variables as Arguments

Arguments do not have to be constant values.

Variables can also be passed.

Example:

\`\`\`c
#include <stdio.h>

int multiply(int a, int b)
{
    return a * b;
}

int main(void)
{
    int x = 6;
    int y = 5;
    int result;

    result = multiply(x, y);

    printf("Product = %d", result);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Product = 30
\`\`\`

Here:

\`\`\`text
x → a
y → b
\`\`\`

---

## 8. Passing Expressions as Arguments

Expressions can also be used as arguments.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Call:

\`\`\`c
int result = add(5 + 2, 10 - 3);
\`\`\`

The arguments are evaluated before being passed.

Therefore:

\`\`\`text
5 + 2 → 7
10 - 3 → 7
\`\`\`

The function receives:

\`\`\`text
a = 7
b = 7
\`\`\`

and returns:

\`\`\`text
14
\`\`\`

---

## 9. Matching Parameters and Arguments

The arguments should correspond appropriately to the parameters.

Example:

\`\`\`c
float calculate(float price, float tax)
{
    return price + tax;
}
\`\`\`

Call:

\`\`\`c
calculate(100.0f, 18.0f);
\`\`\`

The values are passed as:

\`\`\`text
100.0 → price
18.0  → tax
\`\`\`

---

## 10. Parameters Are Local to the Function

Parameters behave like local variables within the function.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

The variables \`a\` and \`b\` belong to the function's execution.

They are available inside the function body.

---

## 11. Function With Different Parameter Types

A function can have parameters of different types.

Example:

\`\`\`c
float calculate(float price, int quantity)
{
    return price * quantity;
}
\`\`\`

Call:

\`\`\`c
float total = calculate(25.50f, 4);
\`\`\`

The values are:

\`\`\`text
25.50 → price
4     → quantity
\`\`\`

The result is:

\`\`\`text
102.00
\`\`\`

---

## 12. No Parameters

A function does not always need parameters.

Example:

\`\`\`c
void display(void)
{
    printf("Welcome");
}
\`\`\`

Call:

\`\`\`c
display();
\`\`\`

There are no arguments because the function has no parameters.

---

## 13. Parameters With Return Values

Parameters and return values can be used together.

Example:

\`\`\`c
int maximum(int a, int b)
{
    if (a > b)
    {
        return a;
    }

    return b;
}
\`\`\`

Call:

\`\`\`c
int result = maximum(25, 40);
\`\`\`

The function receives two arguments and returns the larger value.

Result:

\`\`\`text
40
\`\`\`

---

## 14. Important Difference

Remember:

**Parameter**

A variable declared in the function definition.

Example:

\`\`\`c
int add(int a, int b)
\`\`\`

**Argument**

A value supplied during the function call.

Example:

\`\`\`c
add(10, 20);
\`\`\`

Therefore:

\`\`\`text
Function Definition
        ↓
    Parameters

Function Call
        ↓
    Arguments
\`\`\`

---

## 15. Complete Example

\`\`\`c
#include <stdio.h>

int calculateTotal(int price, int quantity)
{
    return price * quantity;
}

int main(void)
{
    int price = 50;
    int quantity = 4;
    int total;

    total = calculateTotal(price, quantity);

    printf("Total = %d", total);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Total = 200
\`\`\`

The flow is:

\`\`\`text
price = 50
quantity = 4
       ↓
calculateTotal(price, quantity)
       ↓
price × quantity
       ↓
50 × 4
       ↓
200
\`\`\`

---

## Lesson Summary

A **parameter** is a variable declared in a function definition.

An **argument** is a value supplied during a function call.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Here \`a\` and \`b\` are parameters.

When called:

\`\`\`c
add(10, 20);
\`\`\`

\`10\` and \`20\` are arguments.

Parameters allow functions to receive data and perform reusable operations on that data.

---

# Module 4 Progress

✓ Lesson 1 — Introduction to Functions

✓ Lesson 2 — Need and Advantages of Functions

✓ Lesson 3 — Function Declaration

✓ Lesson 4 — Function Definition

✓ Lesson 5 — Function Calling

✓ Lesson 6 — Parameters and Arguments

→ Lesson 7 — Return Values

  Lesson 8 — Types of Functions

  Lesson 9 — Function Prototypes

  Lesson 10 — Passing Arguments to Functions

  Lesson 11 — Local and Global Variables

  Lesson 12 — Scope and Lifetime of Variables

  Lesson 13 — Recursive Functions

  Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 6 Complete

`,
};

export default lesson6;