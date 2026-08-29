const lesson2 = {
  id: "lesson2",

  title: "Need and Advantages of Arrays",

  content: `

# Lesson 2: Need and Advantages of Arrays

---

## Introduction

When a program needs to work with many related values, using separate variables for every value is not a practical approach.

Arrays provide a convenient way to store and process a collection of values using a **single variable name**.

For example, suppose we need to store the marks of five students.

Without an array:

\`\`\`c
int mark1 = 80;
int mark2 = 75;
int mark3 = 90;
int mark4 = 65;
int mark5 = 85;
\`\`\`

With an array:

\`\`\`c
int marks[5] = {80, 75, 90, 65, 85};
\`\`\`

The array makes the data easier to organize and process.

---

# 1. Need for Arrays

Suppose a program needs to store 100 numbers.

Without an array, we would need variables such as:

\`\`\`text
number1
number2
number3
...
number100
\`\`\`

This would make the program difficult to write and maintain.

Instead:

\`\`\`c
int numbers[100];
\`\`\`

stores all 100 values under one array name.

---

# 2. Storing Multiple Values

An array allows multiple values of the same type to be stored together.

Example:

\`\`\`c
int marks[5] = {80, 75, 90, 65, 85};
\`\`\`

The values can be represented as:

\`\`\`text
Index       0    1    2    3    4

            ┌────┬────┬────┬────┬────┐
marks       │ 80 │ 75 │ 90 │ 65 │ 85 │
            └────┴────┴────┴────┴────┘
\`\`\`

All five values belong to the same array.

---

# 3. Reduces the Number of Variables

Without an array:

\`\`\`c
int mark1;
int mark2;
int mark3;
int mark4;
int mark5;
\`\`\`

With an array:

\`\`\`c
int marks[5];
\`\`\`

One array name represents the entire collection.

This makes the program shorter and easier to manage.

---

# 4. Easy Access to Data

Each array element can be accessed using its index.

For:

\`\`\`c
int marks[5] = {80, 75, 90, 65, 85};
\`\`\`

we can access:

\`\`\`text
marks[0]
marks[1]
marks[2]
marks[3]
marks[4]
\`\`\`

For example:

\`\`\`c
printf("%d", marks[2]);
\`\`\`

prints:

\`\`\`text
90
\`\`\`

---

# 5. Easy Processing With Loops

One of the biggest advantages of arrays is that loops can process all elements.

Example:

\`\`\`c
int marks[5] = {80, 75, 90, 65, 85};

for (int i = 0; i < 5; i++)
{
    printf("%d\\n", marks[i]);
}
\`\`\`

Output:

\`\`\`text
80
75
90
65
85
\`\`\`

The loop automatically moves through each index.

---

# 6. Finding the Sum

Arrays make it easy to calculate the sum of many values.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int numbers[5] = {10, 20, 30, 40, 50};
    int sum = 0;

    for (int i = 0; i < 5; i++)
    {
        sum += numbers[i];
    }

    printf("Sum = %d\\n", sum);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Sum = 150
\`\`\`

---

# 7. Finding the Average

Once the sum is available, we can calculate the average.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks[5] = {80, 70, 90, 60, 100};
    int sum = 0;
    float average;

    for (int i = 0; i < 5; i++)
    {
        sum += marks[i];
    }

    average = sum / 5.0f;

    printf("Average = %.2f\\n", average);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Average = 80.00
\`\`\`

---

# 8. Searching Data

Arrays can be searched to determine whether a particular value exists.

Example:

\`\`\`c
int numbers[5] = {10, 20, 30, 40, 50};
\`\`\`

We can use a loop to search for 30.

\`\`\`c
for (int i = 0; i < 5; i++)
{
    if (numbers[i] == 30)
    {
        printf("Found\\n");
        break;
    }
}
\`\`\`

Arrays therefore provide a convenient structure for search operations.

---

# 9. Sorting Data

Arrays can also be rearranged into a particular order.

For example:

Before:

\`\`\`text
40 10 30 20 50
\`\`\`

After sorting:

\`\`\`text
10 20 30 40 50
\`\`\`

Sorting algorithms such as **bubble sort** can be applied to arrays.

We will study sorting in detail later in this module.

---

# 10. Comparing Values

An array allows us to compare its elements.

For example, we can find the largest value:

\`\`\`c
int numbers[5] = {25, 70, 45, 90, 30};
\`\`\`

A loop can compare the elements and determine:

\`\`\`text
Maximum = 90
\`\`\`

Similarly, the smallest value can also be found.

---

# 11. Organized Storage

Arrays are useful when values are naturally related.

Examples include:

\`\`\`text
Student marks
Daily temperatures
Product prices
Employee salaries
Exam scores
Monthly sales
\`\`\`

For example:

\`\`\`c
float temperature[7];
\`\`\`

can represent the temperatures recorded over seven days.

---

# 12. Efficient Data Processing

Consider processing 100 marks.

With separate variables, we would have to write separate statements for each variable.

With an array:

\`\`\`c
int marks[100];
\`\`\`

we can process all elements using:

\`\`\`c
for (int i = 0; i < 100; i++)
{
    /* process marks[i] */
}
\`\`\`

This is much more convenient.

---

# 13. Arrays Make Programs Easier to Maintain

Suppose a program initially stores five marks:

\`\`\`c
int marks[5];
\`\`\`

If the program needs to store ten marks, the array size can be changed:

\`\`\`c
int marks[10];
\`\`\`

The processing can continue using loops.

This is much easier than maintaining many separate variables.

---

# 14. Arrays and Functions

Arrays can also be used with functions.

For example:

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
    int numbers[5] = {10, 20, 30, 40, 50};

    display(numbers, 5);

    return 0;
}
\`\`\`

Output:

\`\`\`text
10 20 30 40 50
\`\`\`

This allows array-processing tasks to be separated into functions.

---

# 15. Main Advantages of Arrays

## 1. Store Multiple Values

A single array can hold many values of the same type.

## 2. Easy Access

Elements can be accessed using indexes.

## 3. Easy Traversal

Loops can process every element.

## 4. Reduced Code

One array replaces many separate variables.

## 5. Organized Data

Related values can be stored together.

## 6. Useful for Algorithms

Searching, sorting, and mathematical operations can be performed on arrays.

## 7. Works Well With Functions

Arrays can be passed to functions for processing.

---

# Practical Example

Consider a program that stores five student marks and calculates their total.

\`\`\`c
#include <stdio.h>

int main(void)
{
    int marks[5] = {80, 75, 90, 85, 70};
    int total = 0;

    for (int i = 0; i < 5; i++)
    {
        total += marks[i];
    }

    printf("Total Marks = %d\\n", total);

    return 0;
}
\`\`\`

Output:

\`\`\`text
Total Marks = 400
\`\`\`

The array allows all five marks to be processed using the same loop.

---

# Lesson Summary

Arrays are needed when a program has to work with a collection of related values.

Instead of:

\`\`\`text
mark1
mark2
mark3
mark4
mark5
\`\`\`

we can use:

\`\`\`c
int marks[5];
\`\`\`

The major advantages are:

\`\`\`text
Arrays
   ↓
Multiple values
   ↓
Single variable name
   ↓
Indexed access
   ↓
Easy loop processing
   ↓
Searching and sorting
   ↓
Better program organization
\`\`\`

Arrays become especially powerful when combined with **loops and functions**.

---

# Module 5 Progress

✓ Lesson 1 — Introduction to Arrays  
✓ Lesson 2 — Need and Advantages of Arrays  
→ Lesson 3 — Array Declaration  
  Lesson 4 — Array Initialization  
  Lesson 5 — Accessing Array Elements  
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

Lessons 1 & 2 Complete

Next: Lesson 3 — Array Declaration.

`,
};

export default lesson2;