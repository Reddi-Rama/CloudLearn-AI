const lesson15 = {
  id: "lesson15",
  title: "Mini Project — Student Record Manager",

  content: `
In this mini project, we will combine the pointer concepts learned throughout Module 7 to build a simple Student Record Manager.

The program will store student information and use pointers to:

• Read student details
• Modify student marks
• Display records
• Search for a student
• Work with structures
• Pass data to functions

This project brings together pointers, arrays, strings, structures, and functions.

1. Problem Statement

Create a C program that stores information about students.

Each student will have:

• Name
• Roll Number
• Marks

The program should:

1. Read student information
2. Display student records
3. Search for a student
4. Update marks using a pointer

2. Creating the Student Structure

We can represent a student using a structure:

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

Each student now contains three pieces of information.

3. Creating Student Records

We can create an array of students:

struct Student students[5];

This gives us space for five student records.

4. Using a Pointer to a Structure

We can create a pointer to a student:

struct Student *ptr;

Then make it point to a particular student:

ptr = &students[0];

Now ptr points to the first student.

5. Accessing Structure Members

Using a normal structure variable:

students[0].marks

Using a pointer:

ptr->marks

The -> operator is used to access structure members through a pointer.

6. Reading Student Information

#include <stdio.h>
#include <string.h>

void readStudent(struct Student *student)
{
    printf("Enter name: ");

    fgets(student->name, sizeof(student->name), stdin);

    student->name[strcspn(student->name, "\\n")] = '\\0';

    printf("Enter roll number: ");
    scanf("%d", &student->rollNumber);

    printf("Enter marks: ");
    scanf("%f", &student->marks);

    while (getchar() != '\\n')
    {
    }
}

The function receives a pointer to the student structure.

7. Displaying Student Information

void displayStudent(struct Student *student)
{
    printf("Name: %s\\n", student->name);
    printf("Roll Number: %d\\n", student->rollNumber);
    printf("Marks: %.2f\\n", student->marks);
}

The pointer allows the function to access the student's data.

8. Updating Marks Using a Pointer

We can create a separate function:

void updateMarks(float *marks)
{
    printf("Enter new marks: ");
    scanf("%f", marks);
}

Notice:

scanf("%f", marks);

marks already contains the address of the original marks variable, so we do not use &marks.

9. Searching for a Student

We can search the array using the roll number.

int searchStudent(struct Student *students, int size, int rollNumber)
{
    for (int i = 0; i < size; i++)
    {
        if ((students + i)->rollNumber == rollNumber)
        {
            return i;
        }
    }

    return -1;
}

Here:

(students + i)

points to the ith student.

10. Complete Mini Project

#include <stdio.h>
#include <string.h>

struct Student
{
    char name[50];
    int rollNumber;
    float marks;
};

void readStudent(struct Student *student)
{
    printf("Enter name: ");

    fgets(student->name, sizeof(student->name), stdin);

    student->name[strcspn(student->name, "\\n")] = '\\0';

    printf("Enter roll number: ");
    scanf("%d", &student->rollNumber);

    printf("Enter marks: ");
    scanf("%f", &student->marks);

    while (getchar() != '\\n')
    {
    }
}

void displayStudent(struct Student *student)
{
    printf("Name: %s\\n", student->name);
    printf("Roll Number: %d\\n", student->rollNumber);
    printf("Marks: %.2f\\n", student->marks);
}

void updateMarks(float *marks)
{
    printf("Enter new marks: ");
    scanf("%f", marks);
}

int searchStudent(
    struct Student *students,
    int size,
    int rollNumber
)
{
    for (int i = 0; i < size; i++)
    {
        if ((students + i)->rollNumber == rollNumber)
        {
            return i;
        }
    }

    return -1;
}

int main(void)
{
    struct Student students[3];

    int searchRoll;
    int position;

    printf("--- Enter Student Details ---\\n\\n");

    for (int i = 0; i < 3; i++)
    {
        printf("Student %d\\n", i + 1);

        readStudent(&students[i]);

        printf("\\n");
    }

    printf("--- Student Records ---\\n");

    for (int i = 0; i < 3; i++)
    {
        printf("\\nStudent %d\\n", i + 1);

        displayStudent(&students[i]);
    }

    printf("\\nEnter roll number to search: ");
    scanf("%d", &searchRoll);

    position = searchStudent(students, 3, searchRoll);

    if (position != -1)
    {
        printf("\\nStudent found!\\n");

        displayStudent(&students[position]);

        printf("\\nUpdate marks\\n");

        updateMarks(&students[position].marks);

        printf("\\nUpdated Record\\n");

        displayStudent(&students[position]);
    }
    else
    {
        printf("\\nStudent not found.\\n");
    }

    return 0;
}

11. Sample Input

--- Enter Student Details ---

Student 1

Enter name: Rahul
Enter roll number: 101
Enter marks: 82

Student 2

Enter name: Kiran
Enter roll number: 102
Enter marks: 91

Student 3

Enter name: Anil
Enter roll number: 103
Enter marks: 76

12. Displayed Records

The program displays:

--- Student Records ---

Student 1

Name: Rahul
Roll Number: 101
Marks: 82.00

Student 2

Name: Kiran
Roll Number: 102
Marks: 91.00

Student 3

Name: Anil
Roll Number: 103
Marks: 76.00

13. Searching for a Student

Suppose the user enters:

Enter roll number to search: 102

The program searches through the array.

It finds:

Student found!

Name: Kiran
Roll Number: 102
Marks: 91.00

14. Updating Marks Through a Pointer

The program then asks:

Update marks

Enter new marks: 95

The function receives:

&students[position].marks

and changes the original marks through:

scanf("%f", marks);

The updated record becomes:

Name: Kiran
Roll Number: 102
Marks: 95.00

15. Pointer Concepts Used in the Project

Pointer to Structure

struct Student *student

Structure Pointer Operator

student->marks

Pointer to an Array

struct Student *students

Pointer Arithmetic

(students + i)

Passing Addresses

readStudent(&students[i]);

Modifying Data Through a Pointer

updateMarks(&students[position].marks);

String Handling

fgets()
strcspn()

Module 7 — Final Review

POINTERS

├── Address
│   └── &
│
├── Pointer
│   └── int *ptr
│
├── Dereferencing
│   └── *ptr
│
├── Pointer Arithmetic
│   ├── ++
│   ├── --
│   ├── +
│   └── -
│
├── Arrays
│   └── *(array + index)
│
├── Strings
│   └── char *ptr
│
├── Functions
│   └── Pointer Parameters
│
├── Call by Reference
│   └── Pass Address
│
├── Pointer to Pointer
│   └── **
│
├── NULL Pointers
│   └── NULL
│
├── Practical Applications
│   ├── Arrays
│   ├── Strings
│   ├── Structures
│   └── Dynamic Memory
│
└── Mini Project
    └── Student Record Manager

Module 7 Final Review

✓ Lesson 1 — Introduction to Pointers
✓ Lesson 2 — Memory Addresses and the & Operator
✓ Lesson 3 — Pointer Declaration and Initialization
✓ Lesson 4 — Dereferencing and the * Operator
✓ Lesson 5 — Accessing Variables Through Pointers
✓ Lesson 6 — Pointer Arithmetic
✓ Lesson 7 — Pointers and Arrays
✓ Lesson 8 — Pointers and Strings
✓ Lesson 9 — Pointers and Functions
✓ Lesson 10 — Call by Reference
✓ Lesson 11 — Pointer to Pointer
✓ Lesson 12 — NULL Pointers
✓ Lesson 13 — Common Pointer Mistakes
✓ Lesson 14 — Practical Pointer Applications
✓ Lesson 15 — Mini Project — Student Record Manager

Module 7 Complete

You have now completed the Pointers in C module, from basic memory addresses and dereferencing to pointers with arrays, strings, functions, structures, and a practical student record project.
`,

  summary:
    "The Student Record Manager combines pointers, structures, arrays, strings, and functions to read, display, search, and update student records.",

  keyPoints: [
    "A structure can store student information.",
    "A structure pointer can access members using the -> operator.",
    "Pointers can be passed to functions to modify original data.",
    "Pointer arithmetic can be used to access structure array elements.",
    "fgets() can be used to read a student's name.",
    "A pointer can be used to update student marks.",
    "The project combines the major pointer concepts learned in Module 7.",
  ],
};

export default lesson15;