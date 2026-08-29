const lesson4 = {
  id: "lesson4",

  title: "Variable Scope",

  content: `

# Lesson 4: Variable Scope

## Introduction

In the previous lesson, we learned how to create and use variables.

But a variable cannot always be accessed from every part of a program.

For example, a variable declared inside a function may be available only inside that function.

The region of a program where an identifier can be accessed is called its scope.

Understanding scope is important because it determines:

- Where a variable can be used
- Where a variable cannot be used
- How long its declaration remains visible
- How different parts of a program interact with variables

---

# 1. What Is Scope?

Scope is the portion of a program in which an identifier can be directly referenced.

Consider:

\`\`\`c
int main(void)
{
    int age = 20;

    printf("%d\\n", age);

    return 0;
}
\`\`\`

The variable:

\`\`\`text
age
\`\`\`

is declared inside main().

Therefore, its scope is limited to the block in which it is declared.

A simple way to remember this is:

\`\`\`text
Declaration
     ↓
Scope begins
     ↓
Variable can be used
     ↓
Scope ends
\`\`\`

---

# 2. Why Is Scope Important?

Suppose a large program contains hundreds of variables.

If every variable could be accessed from every part of the program, it would become difficult to determine:

- Which part of the program changed a value
- Which variable a name refers to
- Whether one function is accidentally modifying another function's data

Scope provides boundaries.

It allows different parts of a program to have their own variables.

---

# 3. Block Scope

A variable declared inside a block has block scope.

A block is generally enclosed by:

\`\`\`text
{
    ...
}
\`\`\`

For example:

\`\`\`c
int main(void)
{
    int number = 10;

    printf("%d\\n", number);

    return 0;
}
\`\`\`

The variable number has block scope.

It can be used within the block where it is declared.

---

# 4. Nested Blocks

Blocks can exist inside other blocks.

For example:

\`\`\`c
int main(void)
{
    int outer = 10;

    {
        int inner = 20;

        printf("%d\\n", outer);
        printf("%d\\n", inner);
    }

    return 0;
}
\`\`\`

Here:

\`\`\`text
outer
\`\`\`

is declared in the outer block.

The variable:

\`\`\`text
inner
\`\`\`

is declared in the inner block.

The inner block can access outer because outer is declared in an enclosing scope.

---

# 5. Scope Moves From Outer to Inner

Consider:

\`\`\`c
int main(void)
{
    int a = 10;

    {
        int b = 20;

        printf("%d\\n", a);
        printf("%d\\n", b);
    }
}
\`\`\`

Inside the inner block, both variables are accessible:

\`\`\`text
a → outer block
b → inner block
\`\`\`

The inner block can access names declared in enclosing blocks, provided they are visible there.

---

# 6. Outer Blocks Cannot Access Inner Variables

Now consider:

\`\`\`c
int main(void)
{
    {
        int number = 10;
    }

    printf("%d\\n", number);
}
\`\`\`

This is invalid.

Why?

Because number was declared inside the inner block.

Its scope ends when that block ends.

Conceptually:

\`\`\`text
Outer Block
│
├── Inner Block
│     └── number
│
└── number is not visible here
\`\`\`

---

# 7. Function Scope

Labels used with goto have a special kind of scope called function scope.

For example:

\`\`\`c
void test(void)
{
    goto end;

end:
    printf("Finished\\n");
}
\`\`\`

The label end can be referenced throughout the function in which it is declared.

Ordinary variables do not have function scope.

They have block scope or file scope depending on where they are declared.

---

# 8. File Scope

An identifier declared outside all functions has file scope.

For example:

\`\`\`c
#include <stdio.h>

int count = 10;

int main(void)
{
    printf("%d\\n", count);

    return 0;
}
\`\`\`

Here:

\`\`\`text
count
\`\`\`

is declared outside main().

Its declaration has file scope.

It is visible from its declaration to the end of the source file, subject to other language rules such as linkage and hiding by declarations in inner scopes.

---

# 9. Local Variables

A variable declared inside a function or block is commonly called a local variable.

For example:

\`\`\`c
int main(void)
{
    int age = 20;

    printf("%d\\n", age);

    return 0;
}
\`\`\`

age is local to the block containing its declaration.

A different function cannot directly refer to that local variable.

For example:

\`\`\`c
void display(void)
{
    printf("%d\\n", age);
}
\`\`\`

would be invalid if age was declared only inside main().

---

# 10. Global Variables

Variables declared outside all functions are commonly called global variables.

For example:

\`\`\`c
#include <stdio.h>

int count = 100;

void display(void)
{
    printf("%d\\n", count);
}

int main(void)
{
    display();

    return 0;
}
\`\`\`

Here count has file scope and can be referenced by functions in the same translation unit after its declaration, subject to visibility and linkage rules.

Global variables can be useful, but they should be used carefully.

---

# 11. Scope and Lifetime Are Different

A very important distinction is:

\`\`\`text
Scope
↓
Where a name can be accessed

Lifetime
↓
How long the object exists
\`\`\`

These are not the same thing.

For example:

\`\`\`c
void function(void)
{
    int number = 10;
}
\`\`\`

The name number has block scope.

Its object has automatic storage duration, so its lifetime is associated with execution of the block.

Scope describes visibility of the name, while lifetime describes existence of the object.

---

# 12. Scope of Function Parameters

Function parameters have block scope.

For example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}
\`\`\`

The parameters:

\`\`\`text
a
b
\`\`\`

are available inside the function body.

They cannot be directly accessed from another function.

For example:

\`\`\`c
int add(int a, int b)
{
    return a + b;
}

int main(void)
{
    printf("%d\\n", a);
}
\`\`\`

is invalid because a belongs to the scope of add().

---

# 13. Scope in Loops

Variables declared in a for loop can have scope limited to the loop.

For example:

\`\`\`c
for (int i = 0; i < 5; i++)
{
    printf("%d\\n", i);
}
\`\`\`

The variable i is declared as part of the for statement.

Its scope is limited to the appropriate part of that for statement and its associated body.

It cannot normally be used after the loop:

\`\`\`c
for (int i = 0; i < 5; i++)
{
    printf("%d\\n", i);
}

printf("%d\\n", i);
\`\`\`

The final printf() cannot access i.

---

# 14. Same Name in Different Scopes

C allows an identifier in an inner scope to hide an identifier with the same name in an outer scope.

For example:

\`\`\`c
int main(void)
{
    int number = 10;

    {
        int number = 20;

        printf("%d\\n", number);
    }

    printf("%d\\n", number);

    return 0;
}
\`\`\`

Output:

\`\`\`text
20
10
\`\`\`

Inside the inner block, the inner number hides the outer number.

After leaving the inner block, the outer number becomes visible again.

---

# 15. Shadowing

The situation where an inner declaration hides an outer declaration is commonly called shadowing.

Example:

\`\`\`c
int value = 100;

int main(void)
{
    int value = 50;

    printf("%d\\n", value);

    return 0;
}
\`\`\`

The local value hides the file-scope value within main().

Although shadowing is allowed, excessive use of the same names can make code confusing.

---

# 16. Scope in Functions

Different functions can use the same local variable name without interfering with one another.

For example:

\`\`\`c
void first(void)
{
    int value = 10;

    printf("%d\\n", value);
}

void second(void)
{
    int value = 20;

    printf("%d\\n", value);
}
\`\`\`

Both functions have a variable named value.

They are separate objects because each declaration belongs to a different block scope.

---

# 17. Practical Example

\`\`\`c
#include <stdio.h>

int total = 100;

void display(void)
{
    int local = 50;

    printf("Global = %d\\n", total);
    printf("Local = %d\\n", local);
}

int main(void)
{
    int number = 10;

    display();

    printf("Number = %d\\n", number);

    return 0;
}
\`\`\`

Here:

\`\`\`text
total
↓
File scope

local
↓
Block scope inside display()

number
↓
Block scope inside main()
\`\`\`

Each variable has a different scope.

---

# 18. Why Local Variables Are Usually Preferred

Local variables provide better separation between different parts of a program.

For example:

\`\`\`c
void calculate(void)
{
    int total = 0;

    /* calculation */
}
\`\`\`

The function manages its own total.

Another function can have:

\`\`\`c
void display(void)
{
    int total = 100;

    /* display */
}
\`\`\`

The two variables do not automatically interfere with each other.

This makes programs easier to organize.

---

# 19. Scope and Program Organization

Good use of scope helps create modular programs.

A useful pattern is:

\`\`\`text
main()
  ↓
Function A
  ↓
Function B
\`\`\`

Each function can have its own local variables.

This reduces unnecessary dependence between different parts of the program.

As programs become larger, this becomes increasingly important.

---

# Common Beginner Mistakes

## Mistake 1 — Using a Local Variable Outside Its Scope

Incorrect:

\`\`\`c
int main(void)
{
    int number = 10;
}

printf("%d\\n", number);
\`\`\`

number is not visible outside its block.

---

## Mistake 2 — Confusing Scope With Lifetime

A variable's scope describes where its name can be used.

Its lifetime describes how long the object exists.

These concepts should not be treated as identical.

---

## Mistake 3 — Accidentally Shadowing a Variable

For example:

\`\`\`c
int count = 10;

int main(void)
{
    int count = 20;

    printf("%d\\n", count);
}
\`\`\`

The local count hides the outer declaration.

This is valid, but it can be confusing if used unnecessarily.

---

# Lesson Summary

In this lesson, you learned:

- Scope determines where an identifier can be accessed.
- Variables declared inside blocks have block scope.
- Nested blocks can access names from enclosing scopes.
- Outer blocks cannot access variables declared only inside inner blocks.
- Function parameters have block scope.
- Identifiers declared outside functions have file scope.
- Labels have function scope.
- Local variables generally provide better separation between functions.
- An inner declaration can hide an outer declaration.
- This hiding is commonly called shadowing.
- Scope and lifetime are different concepts.

The basic idea is:

\`\`\`text
Outer Scope
    ↓
Inner Scope
    ↓
More specific declarations
\`\`\`

And remember:

\`\`\`text
Scope
↓
Where the name is visible

Lifetime
↓
How long the object exists
\`\`\`

---

# Module 2 Progress

✓ Module 1 — C Fundamentals Complete

✓ Lesson 1 — Primitive Data Types
✓ Lesson 2 — Non-Primitive Data Types
✓ Lesson 3 — Variables
→ Lesson 4 — Variable Scope
  Lesson 5 — Constants
  Lesson 6 — Literals
  Lesson 7 — Type Conversion
  Lesson 8 — Type Casting
  Lesson 9 — Arithmetic Operators
  Lesson 10 — Relational Operators
  Lesson 11 — Logical Operators
  Lesson 12 — Assignment Operators
  Lesson 13 — Unary Operators
  Lesson 14 — Bitwise Operators
  Lesson 15 — Operator Precedence

Lesson 4 Complete

Next: Lesson 5 — Constants.

`,
};

export default lesson4;