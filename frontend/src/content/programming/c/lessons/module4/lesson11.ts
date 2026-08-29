const lesson11 = {
  id: "lesson11",

  title: "Local and Global Variables",

  content: `

# Lesson 11: Local and Global Variables

## Introduction

Variables in C can be classified based on where they are declared and where they can be accessed.

Two important categories are:

- **Local variables**
- **Global variables**

The main difference is their **scope**, which determines where a variable can be accessed.

---

## 1. Local Variable

A local variable is declared inside a function or block.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    printf("%d", number);

    return 0;
}
\`\`\`

Here, \`number\` is a local variable because it is declared inside \`main()\`.

---

## 2. Local Variable Inside a Function

Example:

\`\`\`c
#include <stdio.h>

void display(void)
{
    int number = 25;

    printf("%d", number);
}

int main(void)
{
    display();

    return 0;
}
\`\`\`

The variable \`number\` belongs to the function \`display()\`.

It cannot be directly accessed from \`main()\`.

---

## 3. Local Variables in Different Functions

Different functions can have local variables with the same name.

Example:

\`\`\`c
#include <stdio.h>

void first(void)
{
    int number = 10;

    printf("First: %d\\n", number);
}

void second(void)
{
    int number = 20;

    printf("Second: %d\\n", number);
}

int main(void)
{
    first();
    second();

    return 0;
}
\`\`\`

### Output

\`\`\`text
First: 10
Second: 20
\`\`\`

The two \`number\` variables are separate local variables.

---

## 4. Global Variable

A global variable is declared outside all functions.

Example:

\`\`\`c
#include <stdio.h>

int number = 50;

int main(void)
{
    printf("%d", number);

    return 0;
}
\`\`\`

Here, \`number\` is a global variable.

---

## 5. Accessing a Global Variable

A global variable can generally be accessed by functions that appear after its declaration, subject to normal C scope rules.

Example:

\`\`\`c
#include <stdio.h>

int number = 100;

void display(void)
{
    printf("%d", number);
}

int main(void)
{
    display();

    return 0;
}
\`\`\`

### Output

\`\`\`text
100
\`\`\`

The function \`display()\` accesses the global variable.

---

## 6. Local vs Global

Consider:

\`\`\`c
int globalNumber = 100;

int main(void)
{
    int localNumber = 20;

    printf("%d\\n", globalNumber);
    printf("%d", localNumber);

    return 0;
}
\`\`\`

Here:

\`\`\`text
globalNumber → Global variable

localNumber → Local variable
\`\`\`

---

## 7. Same Variable Name

A local variable can have the same name as a global variable.

Example:

\`\`\`c
#include <stdio.h>

int number = 100;

int main(void)
{
    int number = 20;

    printf("%d", number);

    return 0;
}
\`\`\`

### Output

\`\`\`text
20
\`\`\`

The local variable hides the global variable within that scope.

---

## 8. Function Parameters Are Local

Function parameters are local to the function.

Example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

Here \`a\` and \`b\` are available within the function.

They are parameters with local scope.

---

## 9. Local Variables Inside Blocks

A variable can also be declared inside a block.

Example:

\`\`\`c
#include <stdio.h>

int main(void)
{
    int number = 10;

    if (number > 0)
    {
        int value = 20;

        printf("%d\\n", value);
    }

    return 0;
}
\`\`\`

The variable \`value\` belongs to the block created by the \`if\` statement.

---

## 10. Global Variables and Functions

Multiple functions can access the same global variable.

Example:

\`\`\`c
#include <stdio.h>

int count = 0;

void increase(void)
{
    count++;
}

void display(void)
{
    printf("Count = %d", count);
}

int main(void)
{
    increase();
    increase();

    display();

    return 0;
}
\`\`\`

### Output

\`\`\`text
Count = 2
\`\`\`

Both functions use the same global variable.

---

## 11. Advantages of Local Variables

Local variables:

- Limit data to the required scope.
- Reduce accidental changes from unrelated functions.
- Make functions easier to understand.
- Help keep data organized.

Example:

\`\`\`c
void calculate(void)
{
    int result;

    result = 10 + 20;

    printf("%d", result);
}
\`\`\`

The variable \`result\` is only needed inside the function.

---

## 12. Advantages and Disadvantages of Global Variables

Global variables can be useful when multiple functions need to share the same data.

However, excessive use of global variables can make programs harder to understand and maintain because many functions may modify the same data.

Example:

\`\`\`c
int total = 0;
\`\`\`

Many functions could access and modify \`total\`.

For larger programs, it is generally better to keep variables within the smallest appropriate scope.

---

## 13. Example Using Local and Global Variables

\`\`\`c
#include <stdio.h>

int total = 100;

void display(void)
{
    int value = 20;

    printf("Global = %d\\n", total);
    printf("Local = %d", value);
}

int main(void)
{
    display();

    return 0;
}
\`\`\`

### Output

\`\`\`text
Global = 100
Local = 20
\`\`\`

---

## 14. Important Points

Remember:

**Local Variable**

Declared inside a function or block.

Accessible only within its appropriate scope.

**Global Variable**

Declared outside all functions.

Can be accessed by functions within its scope.

Function parameters are also local to the function.

A local variable with the same name as a global variable can hide the global variable within the local scope.

---

## 15. Practical Example

\`\`\`c
#include <stdio.h>

int shared = 10;

void calculate(void)
{
    int local = 5;

    shared = shared + local;

    printf("Shared = %d\\n", shared);
}

int main(void)
{
    calculate();

    printf("Final shared value = %d", shared);

    return 0;
}
\`\`\`

### Output

\`\`\`text
Shared = 15
Final shared value = 15
\`\`\`

The global variable \`shared\` can be accessed by both \`calculate()\` and \`main()\`.

The local variable \`local\` exists only inside \`calculate()\`.

---

## Lesson Summary

Variables can have different scopes.

A **local variable** is declared inside a function or block and is accessible within that scope.

A **global variable** is declared outside all functions and can be accessed by functions within its scope.

Local variables are generally preferred when data does not need to be shared because they help keep programs organized and reduce unintended interactions.

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

✓ Lesson 11 — Local and Global Variables

→ Lesson 12 — Scope and Lifetime of Variables

  Lesson 13 — Recursive Functions

  Lesson 14 — Library Functions

  Lesson 15 — Mini Project — Calculator Using Functions

Lesson 11 Complete

`,
};

export default lesson11;