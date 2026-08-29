const lesson15 = {
  id: "lesson15",
  title: "Mini Project — Dynamic Student Record System",

  content: `

# Lesson 15: Mini Project — Dynamic Student Record System

---

## Introduction

In this mini project, we will combine the dynamic memory concepts learned throughout this module to create a simple Student Record System.

The program will:

- Ask for the number of students.
- Dynamically allocate memory for student records.
- Store student details.
- Display the records.
- Calculate the average marks.
- Find the student with the highest marks.
- Release the dynamically allocated memory.

This project demonstrates how dynamic memory can be used in a practical C program.

---

# 1. Project Requirements

The Student Record System will store:

- Roll number
- Student name
- Marks

A structure can be used to represent a student.

\`\`\`c
struct Student
{
    int rollNumber;
    char name[50];
    float marks;
};
\`\`\`

---

# 2. Dynamic Allocation

The number of students is entered at runtime.

For example:

\`\`\`
Enter number of students: 5
\`\`\`

The program can then allocate memory for exactly five students.

\`\`\`c
students = malloc((size_t)n * sizeof(*students));
\`\`\`

---

# 3. Checking Allocation

Dynamic allocation can fail.

Therefore, the returned pointer should be checked.

\`\`\`c
students = malloc((size_t)n * sizeof(*students));

if (students == NULL)
{
    printf("Memory allocation failed.\\n");
    return 1;
}
\`\`\`

Only after successful allocation should the memory be accessed.

---

# 4. Entering Student Details

A loop can be used to enter the details of every student.

\`\`\`c
for (int i = 0; i < n; i++)
{
    printf("Enter roll number: ");
    scanf("%d", &students[i].rollNumber);

    printf("Enter name: ");
    scanf("%49s", students[i].name);

    printf("Enter marks: ");
    scanf("%f", &students[i].marks);
}
\`\`\`

The dynamically allocated array can be accessed just like a normal array.

---

# 5. Displaying Student Records

The records can be displayed using another loop.

\`\`\`c
for (int i = 0; i < n; i++)
{
    printf("\\nRoll Number: %d\\n",
           students[i].rollNumber);

    printf("Name: %s\\n",
           students[i].name);

    printf("Marks: %.2f\\n",
           students[i].marks);
}
\`\`\`

---

# 6. Calculating Average Marks

The marks of all students can be added and divided by the number of students.

\`\`\`c
float total = 0.0f;

for (int i = 0; i < n; i++)
{
    total += students[i].marks;
}

float average = total / n;
\`\`\`

The average can then be displayed:

\`\`\`c
printf("Average Marks: %.2f\\n", average);
\`\`\`

---

# 7. Finding the Highest Marks

We can keep track of the index of the student with the highest marks.

\`\`\`c
int highest = 0;

for (int i = 1; i < n; i++)
{
    if (students[i].marks > students[highest].marks)
    {
        highest = i;
    }
}
\`\`\`

Then display:

\`\`\`c
printf("Top Student: %s\\n",
       students[highest].name);

printf("Highest Marks: %.2f\\n",
       students[highest].marks);
\`\`\`

---

# 8. Complete Mini Project

\`\`\`c
#include <stdio.h>
#include <stdlib.h>

struct Student
{
    int rollNumber;
    char name[50];
    float marks;
};

int main(void)
{
    int n;
    struct Student *students;
    float total = 0.0f;
    int highest;

    printf("Enter number of students: ");
    scanf("%d", &n);

    if (n <= 0)
    {
        printf("Invalid number of students.\\n");
        return 1;
    }

    students = malloc((size_t)n * sizeof(*students));

    if (students == NULL)
    {
        printf("Memory allocation failed.\\n");
        return 1;
    }

    for (int i = 0; i < n; i++)
    {
        printf("\\nEnter details for student %d\\n",
               i + 1);

        printf("Roll number: ");
        scanf("%d", &students[i].rollNumber);

        printf("Name: ");
        scanf("%49s", students[i].name);

        printf("Marks: ");
        scanf("%f", &students[i].marks);
    }

    printf("\\n--- Student Records ---\\n");

    for (int i = 0; i < n; i++)
    {
        printf("\\nRoll Number: %d\\n",
               students[i].rollNumber);

        printf("Name: %s\\n",
               students[i].name);

        printf("Marks: %.2f\\n",
               students[i].marks);

        total += students[i].marks;
    }

    printf("\\nAverage Marks: %.2f\\n",
           total / n);

    highest = 0;

    for (int i = 1; i < n; i++)
    {
        if (students[i].marks > students[highest].marks)
        {
            highest = i;
        }
    }

    printf("\\n--- Top Student ---\\n");

    printf("Roll Number: %d\\n",
           students[highest].rollNumber);

    printf("Name: %s\\n",
           students[highest].name);

    printf("Marks: %.2f\\n",
           students[highest].marks);

    free(students);
    students = NULL;

    return 0;
}
\`\`\`

---

# 9. Example Output

\`\`\`
Enter number of students: 3

Enter details for student 1
Roll number: 101
Name: Arjun
Marks: 85

Enter details for student 2
Roll number: 102
Name: Meera
Marks: 92

Enter details for student 3
Roll number: 103
Name: Kiran
Marks: 78

--- Student Records ---

Roll Number: 101
Name: Arjun
Marks: 85.00

Roll Number: 102
Name: Meera
Marks: 92.00

Roll Number: 103
Name: Kiran
Marks: 78.00

Average Marks: 85.00

--- Top Student ---

Roll Number: 102
Name: Meera
Marks: 92.00
\`\`\`

---

# 10. How Dynamic Memory Is Used

The important part of this project is:

\`\`\`
Number of students
        ↓
malloc()
        ↓
Memory for Student records
        ↓
Store data
        ↓
Process records
        ↓
free()
\`\`\`

The program does not need to know the number of students when the program is written.

The required memory is determined while the program is running.

---

# 11. Why malloc() Is Useful Here

Suppose one user enters:

\`\`\`
5 students
\`\`\`

The program allocates memory for five records.

Another user might enter:

\`\`\`
100 students
\`\`\`

The program can allocate memory for 100 records.

This makes the program more flexible than declaring a fixed-size array.

---

# 12. Memory Management in the Project

The program performs these operations:

### Allocation

\`\`\`c
students = malloc((size_t)n * sizeof(*students));
\`\`\`

### Checking

\`\`\`c
if (students == NULL)
{
    return 1;
}
\`\`\`

### Using

\`\`\`c
students[i].rollNumber
students[i].name
students[i].marks
\`\`\`

### Releasing

\`\`\`c
free(students);
students = NULL;
\`\`\`

---

# 13. Concepts Used

This project combines several concepts:

- Structures
- Pointers
- malloc()
- NULL checking
- Dynamic arrays
- Array indexing
- Loops
- Conditional statements
- Arithmetic operations
- free()

This makes it a practical application of dynamic memory management.

---

# 14. Possible Improvements

The project can be extended with additional features.

For example:

- Search for a student by roll number.
- Update student details.
- Delete a student record.
- Sort students by marks.
- Find the lowest marks.
- Find students above the average.
- Increase the number of records using realloc().
- Store and load records using files.

These improvements can turn the basic project into a more complete student management system.

---

# 15. Project Flow

\`\`\`
             START
               │
               ▼
       Enter number of students
               │
               ▼
          Validate number
               │
               ▼
            malloc()
               │
               ▼
        Check allocation
               │
               ▼
       Enter student records
               │
               ▼
       Display student records
               │
               ▼
        Calculate average
               │
               ▼
        Find highest marks
               │
               ▼
          Display result
               │
               ▼
             free()
               │
               ▼
              END
\`\`\`

---

# Lesson Summary

The Dynamic Student Record System demonstrates how dynamically allocated memory can be used in a real C program.

The basic process is:

\`\`\`
Input size
   ↓
Allocate memory
   ↓
Check allocation
   ↓
Store records
   ↓
Process records
   ↓
Display results
   ↓
Free memory
\`\`\`

The most important principle is:

> Every dynamically allocated block should eventually be released when it is no longer needed.

---

# Module 10 Complete

✓ Lesson 1 — Introduction to Dynamic Memory

✓ Lesson 2 — Stack Memory vs Heap Memory

✓ Lesson 3 — malloc()

✓ Lesson 4 — calloc()

✓ Lesson 5 — malloc() vs calloc()

✓ Lesson 6 — realloc()

✓ Lesson 7 — free()

✓ Lesson 8 — Dynamic Arrays

✓ Lesson 9 — Dynamic Strings

✓ Lesson 10 — Dynamic Structures

✓ Lesson 11 — Dynamic Memory and Pointers

✓ Lesson 12 — Dynamic 2D Arrays

✓ Lesson 13 — Memory Leaks and Common Errors

✓ Lesson 14 — Practical Applications

✓ Lesson 15 — Mini Project — Dynamic Student Record System

---

# Module 10 Complete

You have now completed the Dynamic Memory module.

You should now understand how to allocate, use, resize, and release memory dynamically in C programs.

Next: Module 11.

`,
};

export default lesson15;