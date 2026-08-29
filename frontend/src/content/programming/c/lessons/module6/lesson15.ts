const lesson15 = {
  id: "lesson15",

  title: "Mini Project — Student Name and Grade Manager",

  content: `

# Lesson 15: Mini Project — Student Name and Grade Manager

---

## Introduction

In this mini project, we will combine the string concepts learned throughout Module 6 to create a simple **Student Name and Grade Manager**.

The program will store student names and their grades and then display a simple report.

This project brings together:

- Character arrays
- Strings
- Array of strings
- String input
- String comparison
- String length
- Loops
- Functions

---

# 1. Problem Statement

Write a C program that stores the names and grades of five students.

The program should:

1. Read student names
2. Read their grades
3. Display all student details
4. Search for a student
5. Display the student's grade

---

# 2. Declaring the Arrays

We need an array of strings for student names:

char names[5][50];

We can use a character array for grades:

char grades[5];

The structure is:

Student 1 → names[0] → grades[0]

Student 2 → names[1] → grades[1]

Student 3 → names[2] → grades[2]

Student 4 → names[3] → grades[3]

Student 5 → names[4] → grades[4]

---

# 3. Reading Student Names

We can use fgets() so that names containing spaces can be accepted.

\`\`\`c
for (int i = 0; i < 5; i++)
{
    printf("Enter student %d name: ", i + 1);

    fgets(names[i], sizeof(names[i]), stdin);

    names[i][strcspn(names[i], "\\n")] = '\\0';
}
\`\`\`

---

# 4. Reading Grades

Grades can be read using %c.

\`\`\`c
for (int i = 0; i < 5; i++)
{
    printf("Enter grade for %s: ", names[i]);

    scanf(" %c", &grades[i]);

    while (getchar() != '\\n')
    {
    }
}
\`\`\`

The space before %c helps skip whitespace left in the input stream.

---

# 5. Displaying the Student Details

\`\`\`c
printf("\\n--- Student Report ---\\n");

for (int i = 0; i < 5; i++)
{
    printf("%d. %s - Grade: %c\\n",
           i + 1, names[i], grades[i]);
}
\`\`\`

---

# 6. Searching for a Student

We can ask the user for a name:

\`\`\`c
char searchName[50];

printf("\\nEnter name to search: ");

fgets(searchName, sizeof(searchName), stdin);

searchName[strcspn(searchName, "\\n")] = '\\0';
\`\`\`

Then compare it with each stored name using strcmp().

---

# 7. Search Logic

\`\`\`c
int found = 0;

for (int i = 0; i < 5; i++)
{
    if (strcmp(names[i], searchName) == 0)
    {
        printf("Student found!\\n");
        printf("Name: %s\\n", names[i]);
        printf("Grade: %c\\n", grades[i]);

        found = 1;
        break;
    }
}

if (!found)
{
    printf("Student not found.\\n");
}
\`\`\`

---

# 8. Complete Mini Project

\`\`\`c
#include <stdio.h>
#include <string.h>

int main(void)
{
    char names[5][50];
    char grades[5];
    char searchName[50];

    /* Read student names and grades */

    for (int i = 0; i < 5; i++)
    {
        printf("Enter student %d name: ", i + 1);

        fgets(names[i], sizeof(names[i]), stdin);

        names[i][strcspn(names[i], "\\n")] = '\\0';

        printf("Enter grade for %s: ", names[i]);

        scanf(" %c", &grades[i]);

        while (getchar() != '\\n')
        {
        }
    }

    /* Display report */

    printf("\\n--- Student Report ---\\n");

    for (int i = 0; i < 5; i++)
    {
        printf("%d. %s - Grade: %c\\n",
               i + 1, names[i], grades[i]);
    }

    /* Search for a student */

    printf("\\nEnter name to search: ");

    fgets(searchName, sizeof(searchName), stdin);

    searchName[strcspn(searchName, "\\n")] = '\\0';

    int found = 0;

    for (int i = 0; i < 5; i++)
    {
        if (strcmp(names[i], searchName) == 0)
        {
            printf("\\nStudent found!\\n");
            printf("Name: %s\\n", names[i]);
            printf("Grade: %c\\n", grades[i]);

            found = 1;
            break;
        }
    }

    if (!found)
    {
        printf("\\nStudent not found.\\n");
    }

    return 0;
}
\`\`\`

---

# 9. Sample Input

Enter student 1 name: Rahul Kumar

Enter grade for Rahul Kumar: A

Enter student 2 name: Anil

Enter grade for Anil: B

Enter student 3 name: Kiran

Enter grade for Kiran: A

Enter student 4 name: Suresh

Enter grade for Suresh: C

Enter student 5 name: Ravi

Enter grade for Ravi: B

---

# 10. Sample Report

--- Student Report ---

1. Rahul Kumar - Grade: A

2. Anil - Grade: B

3. Kiran - Grade: A

4. Suresh - Grade: C

5. Ravi - Grade: B

---

# 11. Searching for a Student

Suppose the user enters:

Kiran

The program compares:

Rahul Kumar → Not equal

Anil → Not equal

Kiran → Match

Output:

Student found!

Name: Kiran

Grade: A

---

# 12. Searching for a Name That Does Not Exist

If the user enters:

Ramesh

and the name is not present, the loop completes without a match.

Output:

Student not found.

---

# 13. String Concepts Used

This project uses several string operations from the module.

## Array of Strings

char names[5][50];

## String Input

fgets(names[i], sizeof(names[i]), stdin);

## Removing Newline

names[i][strcspn(names[i], "\\n")] = '\\0';

## String Comparison

strcmp(names[i], searchName)

## Character Array

char grades[5];

---

# 14. Possible Improvements

The project can be extended with additional features:

- Add student marks
- Calculate average marks
- Find highest grade
- Find lowest grade
- Count students by grade
- Sort students by name
- Display name length
- Search by partial name
- Add more students

For example, the length of a student's name can be displayed using:

\`\`\`c
printf("Name length: %zu\\n", strlen(names[i]));
\`\`\`

---

# 15. Module 6 Skills Check

After completing this project, you should be comfortable with:

✓ Character arrays

✓ String declaration

✓ String initialization

✓ Null character

✓ String input

✓ fgets()

✓ strlen()

✓ strcpy()

✓ strcmp()

✓ strcat()

✓ strchr()

✓ strstr()

✓ Arrays of strings

✓ String searching

✓ Basic string manipulation

---

# Mini Project Summary

The **Student Name and Grade Manager** demonstrates how strings can be used in a practical C program.

The basic structure is:

Student Names

↓

Array of Strings

↓

Read and Store

↓

Student Grades

↓

Display Report

↓

Search Student

↓

Compare Strings

↓

Display Result

This project brings together the major string concepts covered in Module 6.

---

# Module 6 — COMPLETED

✓ Lesson 1 — Introduction to Strings

✓ Lesson 2 — Character Arrays and Strings

✓ Lesson 3 — String Declaration and Initialization

✓ Lesson 4 — Null Character '\\0'

✓ Lesson 5 — Reading and Displaying Strings

✓ Lesson 6 — String Input Using fgets()

✓ Lesson 7 — String Length

✓ Lesson 8 — Copying Strings

✓ Lesson 9 — Comparing Strings

✓ Lesson 10 — Concatenating Strings

✓ Lesson 11 — Searching in Strings

✓ Lesson 12 — String Manipulation Functions

✓ Lesson 13 — Array of Strings

✓ Lesson 14 — Common String Mistakes

✓ Lesson 15 — Mini Project — Student Name and Grade Manager

**🎉 Module 6 Complete**

You have now completed the **Strings in C** module, including character arrays, string input, standard string functions, string searching, arrays of strings, common mistakes, and a practical mini project.

**Congratulations! You have successfully completed Module 6 — Strings in C. You are now ready to move on to the next module and build on these string-handling skills.**

`,
};

export default lesson15;