const lesson4 = {
  id: "lesson4",

  title: "Array Initialization",

  content: `

# Lesson 4: Array Initialization

---

## Introduction

**Array initialization** means assigning initial values to the elements of an array.

An array can be initialized at the time of declaration.

\`\`\`c
int marks[5] = {80, 75, 90, 65, 85};
\`\`\`

The values are stored according to their index:

\`\`\`text
Index:     0    1    2    3    4

           ┌────┬────┬────┬────┬────┐
marks:     │ 80 │ 75 │ 90 │ 65 │ 85 │
           └────┴────┴────┴────┴────┘
\`\`\`

---

# 1. Initialization With Size

\`\`\`c
int numbers[5] = {10, 20, 30, 40, 50};
\`\`\`

Here:

\`\`\`text
numbers[0] = 10
numbers[1] = 20
numbers[2] = 30
numbers[3] = 40
numbers[4] = 50
\`\`\`

---

# 2. Initialization Without Specifying the Size

The compiler can determine the size from the number of elements.

\`\`\`c
int numbers[] = {10, 20, 30, 40, 50};
\`\`\`

Since there are five values, the array contains five elements.

---

# 3. Partial Initialization

An array can be initialized with fewer values than its declared size.

\`\`\`c
int numbers[5] = {10, 20, 30};
\`\`\`

The remaining elements are initialized to zero.

Conceptually:

\`\`\`text
Index:       0    1    2    3    4

             ┌────┬────┬────┬────┬────┐
numbers:     │ 10 │ 20 │ 30 │  0 │  0 │
             └────┴────┴────┴────┴────┘
\`\`\`

---

# 4. Initializing All Elements to Zero

A common technique is:

\`\`\`c
int numbers[5] = {0};
\`\`\`

This initializes all elements to zero.

\`\`\`text
numbers[0] = 0
numbers[1] = 0
numbers[2] = 0
numbers[3] = 0
numbers[4] = 0
\`\`\`

---

# 5. Character Array Initialization

Character arrays can also be initialized.

\`\`\`c
char letters[5] = {'A', 'B', 'C', 'D', 'E'};
\`\`\`

The elements are:

\`\`\`text
letters[0] = 'A'
letters[1] = 'B'
letters[2] = 'C'
letters[3] = 'D'
letters[4] = 'E'
\`\`\`

---

# 6. Assigning Values After Declaration

An array can be declared first and initialized element by element later.

\`\`\`c
int numbers[5];

numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;
\`\`\`

This is useful when values are obtained during program execution.

---

# 7. Example Program

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks[5] = {80, 75, 90, 85, 70};

    for (int i = 0; i < 5; i++)
    {
        printf("marks[%d] = %d\\n", i, marks[i]);
    }

    return 0;
}
\`\`\`

Output:

\`\`\`text
marks[0] = 80
marks[1] = 75
marks[2] = 90
marks[3] = 85
marks[4] = 70
\`\`\`

---

# 8. Important Points

- Initialization assigns starting values to array elements.
- Values are assigned from index 0 onward.
- The compiler can determine the size when the size is omitted.
- If fewer initializers are provided, the remaining elements are initialized to zero.
- {0} is commonly used to initialize all elements to zero.

---

# Lesson Summary

Basic array initialization:

\`\`\`c
int numbers[5] = {10, 20, 30, 40, 50};
\`\`\`

Without specifying size:

\`\`\`c
int numbers[] = {10, 20, 30, 40, 50};
\`\`\`

Partial initialization:

\`\`\`c
int numbers[5] = {10, 20, 30};
\`\`\`

All zeros:

\`\`\`c
int numbers[5] = {0};
\`\`\`

Array initialization provides the starting values that an array contains when the program begins using it.

---

# Module 5 Progress

✓ Lesson 1 — Introduction to Arrays  
✓ Lesson 2 — Need and Advantages of Arrays  
✓ Lesson 3 — Array Declaration  
✓ Lesson 4 — Array Initialization  
→ Lesson 5 — Accessing Array Elements  
  Lesson 6 — One-Dimensional Arrays  
  Lesson 7 — Input and Output of Arrays  
  Lesson 8 — Traversing an Array  
  Lesson 9 — Finding Sum and Average  
  Lesson 10 — Finding Maximum and Minimum  
  Lesson 11 — Searching in an Array  
  Lesson 12 — Sorting an Array  
  Lesson 13 — Two-Dimensional Arrays  
  Lesson 14 — Multidimensional Arrays  
  Lesson 15 — Mini Project — Student Marks Analyzer

Lesson 4 Complete

Next: Lesson 5 — Accessing Array Elements.

`,
};

export default lesson4;