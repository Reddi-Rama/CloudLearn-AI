const lesson12 = {
  id: "lesson12",

  title: "Tokens in C",

  content: `

# Lesson 12: Tokens in C

## Introduction

A C program is written using characters, but the compiler does not analyze the entire source file as one continuous sequence of characters.

It breaks the source into meaningful units called **tokens**.

A token is the smallest meaningful unit recognized by the C compiler during lexical analysis.

Consider:

\`\`\`c
int total = 25;
\`\`\`

This can be broken into:

\`\`\`text
int
total
=
25
;
\`\`\`

Each of these has a specific role in the language.

Understanding tokens makes it much easier to understand C syntax.

---

# 1. Main Categories of Tokens

The commonly studied categories of C tokens are:

- Keywords
- Identifiers
- Constants
- String Literals
- Operators
- Punctuators

A useful representation is:

\`\`\`text
                C Tokens
                    │
        ┌───────────┼───────────┐
        ↓           ↓           ↓
    Keywords   Identifiers   Constants
        ↓           ↓           ↓
    Operators  String Literals  Punctuators
\`\`\`

---

# 2. Keywords

Keywords are reserved words that already have a defined meaning in C.

Examples:

\`\`\`text
int
char
float
if
else
for
while
return
struct
void
\`\`\`

For example:

\`\`\`c
int number;
\`\`\`

Here:

\`\`\`text
int
\`\`\`

is a keyword.

You cannot normally use a keyword as the name of a variable or function.

---

# 3. Identifiers

Identifiers are names given to program elements.

For example:

\`\`\`c
int student_count;
\`\`\`

Here:

\`\`\`text
student_count
\`\`\`

is an identifier.

Other examples include:

\`\`\`c
int total;
float average;
\`\`\`

where:

\`\`\`text
total
average
\`\`\`

are identifiers.

The rules for identifiers were covered in Lesson 10.

---

# 4. Constants

A constant represents a fixed value.

For example:

\`\`\`c
int age = 20;
\`\`\`

The value:

\`\`\`text
20
\`\`\`

is an integer constant.

Other examples include:

\`\`\`text
10
25
3.14
'A'
\`\`\`

Different forms of constants will become clearer when we study data types and literals.

---

# 5. Integer Constants

Integer constants represent whole-number values.

Examples:

\`\`\`text
0
10
25
100
-50
\`\`\`

For example:

\`\`\`c
int number = 100;
\`\`\`

The value 100 is an integer constant.

C also supports different integer representations, such as hexadecimal and octal constants.

For example:

\`\`\`c
int decimal = 25;
int hexadecimal = 0x19;
\`\`\`

Both represent the same numeric value.

---

# 6. Floating-Point Constants

Floating-point constants represent numbers containing a fractional part.

Examples:

\`\`\`text
3.14
10.5
0.25
\`\`\`

For example:

\`\`\`c
float temperature = 36.5;
\`\`\`

Here:

\`\`\`text
36.5
\`\`\`

is a floating-point constant.

---

# 7. Character Constants

A character constant is written inside single quotation marks.

Examples:

\`\`\`text
'A'
'B'
'7'
'+'
\`\`\`

For example:

\`\`\`c
char grade = 'A';
\`\`\`

Here 'A' is a character constant.

Remember:

\`\`\`text
'A'
\`\`\`

and:

\`\`\`text
"A"
\`\`\`

are not the same kind of token.

---

# 8. String Literals

A sequence of characters enclosed in double quotation marks is a string literal.

Example:

\`\`\`c
printf("Hello");
\`\`\`

Here:

\`\`\`text
"Hello"
\`\`\`

is a string literal.

Another example:

\`\`\`c
char message[] = "Welcome";
\`\`\`

The string literal is:

\`\`\`text
"Welcome"
\`\`\`

String literals are especially important when working with text.

---

# 9. Operators

Operators tell the compiler to perform an operation.

For example:

\`\`\`c
int result = a + b;
\`\`\`

The + symbol is an arithmetic operator.

Common categories include:

- Arithmetic
- Relational
- Logical
- Assignment
- Increment / Decrement
- Bitwise
- Conditional

Examples:

\`\`\`text
+
-
*
/
%
==
!=
<
>
<=
>=
&&
||
=
+=
-=
++
--
&
|
^
~
<<
>>
\`\`\`

Operators will be studied in much greater detail in Module 2.

---

# 10. Punctuators

Punctuators are symbols that organize and separate parts of a C program.

Examples include:

\`\`\`text
(
)
[
]
{
}
,
;
:
.
...
\`\`\`

For example:

\`\`\`c
int numbers[5];
\`\`\`

contains:

\`\`\`text
[
]
;
\`\`\`

And:

\`\`\`c
if (x > 0)
{
    printf("Positive");
}
\`\`\`

contains:

\`\`\`text
(
)
{
}
;
\`\`\`

These symbols help define the structure of the program.

---

# 11. A Complete Example

Consider:

\`\`\`c
int total = price + 10;
\`\`\`

We can identify the tokens:

\`\`\`text
int
total
=
price
+
10
;
\`\`\`

Their categories are:

\`\`\`text
int      → keyword
total    → identifier
=        → operator
price    → identifier
+        → operator
10       → integer constant
;        → punctuator
\`\`\`

This is the basic idea behind lexical analysis.

---

# 12. Another Example

Consider:

\`\`\`c
printf("Total = %d\\n", total);
\`\`\`

Important tokens include:

\`\`\`text
printf
(
"Total = %d\\n"
,
total
)
;
\`\`\`

Here:

\`\`\`text
printf
\`\`\`

is an identifier naming a function.

\`\`\`text
"Total = %d\\n"
\`\`\`

is a string literal.

\`\`\`text
(
)
,
;
\`\`\`

are punctuators.

---

# 13. Tokens and Whitespace

Whitespace can separate tokens.

For example:

\`\`\`c
int total = 10;
\`\`\`

is easy to read because spaces separate the different pieces.

The compiler can generally recognize the same tokens even when some whitespace is changed:

\`\`\`text
int     total     =     10;
\`\`\`

However, whitespace can matter when it is needed to separate two tokens.

For example, writing:

\`\`\`text
inttotal
\`\`\`

does not mean:

\`\`\`text
int
total
\`\`\`

Instead, inttotal is treated as one identifier.

---

# 14. Tokens and Comments

Comments are not tokens that become part of the executable program.

For example:

\`\`\`c
int total = 10; // Store total
\`\`\`

The comment:

\`\`\`text
// Store total
\`\`\`

is removed or ignored during preprocessing.

The meaningful program tokens are:

\`\`\`text
int
total
=
10
;
\`\`\`

---

# 15. Lexical Analysis

The stage in which source characters are grouped into tokens is called **lexical analysis**.

A simplified view is:

\`\`\`text
Source Characters
       ↓
Lexical Analysis
       ↓
Tokens
       ↓
Syntax Analysis
       ↓
Program Structure
\`\`\`

A compiler performs this work before generating the final executable.

You do not normally perform lexical analysis yourself, but understanding it explains how the compiler reads your program.

---

# 16. Token vs Character

This distinction is important.

Consider:

\`\`\`c
total = 25;
\`\`\`

The characters include:

\`\`\`text
t o t a l = 2 5 ;
\`\`\`

But the tokens are:

\`\`\`text
total
=
25
;
\`\`\`

So:

\`\`\`text
Characters
   ↓
Grouped into
   ↓
Tokens
\`\`\`

The compiler works with these meaningful units rather than treating every character as a separate instruction.

---

# 17. Long Operators

Some operators contain more than one character.

For example:

\`\`\`text
==
!=
<=
>=
&&
||
++
--
\`\`\`

Consider:

\`\`\`c
if (a == b)
\`\`\`

The == is one equality operator.

It should not be thought of as two independent assignment operators.

Similarly:

\`\`\`c
a++
\`\`\`

contains the increment operator ++.

---

# 18. Keywords, Identifiers, and Constants Together

Consider:

\`\`\`c
unsigned int count = 100;
\`\`\`

The tokens are:

\`\`\`text
unsigned
int
count
=
100
;
\`\`\`

Their categories are:

\`\`\`text
unsigned → keyword
int      → keyword
count    → identifier
=        → operator
100      → integer constant
;        → punctuator
\`\`\`

Once you can identify these categories, reading C syntax becomes much easier.

---

# 19. Why Tokens Matter

Suppose the compiler sees:

\`\`\`c
int total = price + tax;
\`\`\`

It needs to understand that:

\`\`\`text
int
\`\`\`

introduces a type,

\`\`\`text
total
\`\`\`

is a name,

\`\`\`text
=
\`\`\`

is an assignment operator,

\`\`\`text
price
\`\`\`

and:

\`\`\`text
tax
\`\`\`

are identifiers,

and:

\`\`\`text
+
\`\`\`

represents addition.

The compiler can then analyze how these tokens are arranged according to C's syntax rules.

---

# 20. Tokens and Syntax

Tokens are the building blocks from which expressions and statements are formed.

For example:

\`\`\`text
Tokens
  ↓
Expression
  ↓
Statement
  ↓
Function
  ↓
Program
\`\`\`

Consider:

\`\`\`c
total = price + tax;
\`\`\`

The individual tokens form an expression and then a complete statement.

This is why the next lesson on **syntax rules** follows naturally from tokens.

---

# Practical Exercise

Take the following statement:

\`\`\`c
float average = total / count;
\`\`\`

Try to identify each token.

The answer is:

\`\`\`text
float     → keyword
average   → identifier
=         → operator
total     → identifier
/         → operator
count     → identifier
;         → punctuator
\`\`\`

Now try this yourself:

\`\`\`c
int result = number1 * number2;
\`\`\`

Break it into tokens and classify each one.

---

# Lesson Summary

You should now understand:

- A token is a meaningful lexical unit in a C program.
- Keywords are reserved words.
- Identifiers are programmer-defined names.
- Constants represent fixed values.
- String literals represent sequences of characters.
- Operators perform operations.
- Punctuators structure the program.
- Lexical analysis groups source characters into tokens.
- Comments are not part of the executable token stream.
- Tokens form the building blocks of expressions and statements.

A useful mental model is:

\`\`\`text
Characters
    ↓
Tokens
    ↓
Expressions
    ↓
Statements
    ↓
Functions
    ↓
Complete Program
\`\`\`

---

# Module 1 Progress

✓ Lesson 1 — Introduction to C Programming

✓ Lesson 2 — History of C

✓ Lesson 3 — Features of C

✓ Lesson 4 — C Program Structure

✓ Lesson 5 — Compilation Process

✓ Lesson 6 — Compiler and IDE Setup

✓ Lesson 7 — First C Program

✓ Lesson 8 — main() Function

✓ Lesson 9 — Comments

✓ Lesson 10 — Keywords and Identifiers

✓ Lesson 11 — Character Set

✓ Lesson 12 — Tokens in C

→ Lesson 13 — Syntax Rules

  Lesson 14 — Command Line Compilation

  Lesson 15 — Mini Project — Simple Calculator

`,
};

export default lesson12;