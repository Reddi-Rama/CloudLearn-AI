const lesson15 = {
  id: "lesson15",
  title: "Mini Project — Student Management System",

  content: `
Introduction

In this mini project, we will build a simple Student Management System using the concepts learned throughout Module 8.

The project will use:

- Structures
- Arrays
- Functions
- Pointers
- typedef
- enum
- String handling
- Searching

The program will maintain student records and provide basic operations for managing them.

---

1. Project Requirements

The program should allow us to:

1. Add student records
2. Display student records
3. Search for a student
4. Update marks
5. Display the result status

Each student will have:

- Roll Number
- Name
- Marks
- Result Status

---

2. Creating the Result Enumeration

We can represent the result using an enumeration:

enum Result
{
    FAIL,
    PASS
};

This is clearer than using:

0 → Fail
1 → Pass

---

3. Creating the Student Structure

Using typedef:

typedef struct
{
    int rollNumber;
    char name[50];
    float marks;
    enum Result result;
} Student;

Now we can simply write:

Student student;

instead of:

struct Student student;

---

4. Reading Student Information

We can create a function:

void readStudent(Student *student)

The pointer allows the function to modify the original student record.

---

5. Calculating the Result

The result can be determined from the marks.

For example:

if (student->marks >= 40)
{
    student->result = PASS;
}
else
{
    student->result = FAIL;
}

---

6. Displaying Student Information

A function can display the record:

void displayStudent(const Student *student)

Inside the function:

printf("%d", student->rollNumber);
printf("%s", student->name);
printf("%.2f", student->marks);

---

7. Searching for a Student

The program can search using the roll number.

int searchStudent(Student students[],
                  int size,
                  int rollNumber)
{
    for (int i = 0; i < size; i++)
    {
        if (students[i].rollNumber ==
            rollNumber)
        {
            return i;
        }
    }

    return -1;
}

---

8. Updating Marks

The marks of a student can be updated using a structure pointer.

void updateMarks(Student *student, float marks)
{
    student->marks = marks;

    if (student->marks >= 40)
    {
        student->result = PASS;
    }
    else
    {
        student->result = FAIL;
    }
}

---

9. Complete Mini Project

#include <stdio.h>
#include <string.h>

enum Result
{
    FAIL,
    PASS
};

typedef struct
{
    int rollNumber;
    char name[50];
    float marks;
    enum Result result;
} Student;

void readStudent(Student *student)
{
    printf("Enter Roll Number: ");
    scanf("%d", &student->rollNumber);

    printf("Enter Name: ");
    scanf("%49s", student->name);

    printf("Enter Marks: ");
    scanf("%f", &student->marks);

    if (student->marks >= 40)
    {
        student->result = PASS;
    }
    else
    {
        student->result = FAIL;
    }
}

void displayStudent(const Student *student)
{
    printf("\\nRoll Number: %d\\n",
           student->rollNumber);

    printf("Name: %s\\n",
           student->name);

    printf("Marks: %.2f\\n",
           student->marks);

    if (student->result == PASS)
    {
        printf("Result: PASS\\n");
    }
    else
    {
        printf("Result: FAIL\\n");
    }
}

int searchStudent(Student students[],
                  int size,
                  int rollNumber)
{
    for (int i = 0; i < size; i++)
    {
        if (students[i].rollNumber ==
            rollNumber)
        {
            return i;
        }
    }

    return -1;
}

void updateMarks(Student *student, float marks)
{
    student->marks = marks;

    if (student->marks >= 40)
    {
        student->result = PASS;
    }
    else
    {
        student->result = FAIL;
    }
}

int main(void)
{
    Student students[100];
    int count = 0;
    int choice;
    int rollNumber;
    int index;
    float marks;

    do
    {
        printf("\\n--- Student Management System ---\\n");
        printf("1. Add Student\\n");
        printf("2. Display Students\\n");
        printf("3. Search Student\\n");
        printf("4. Update Marks\\n");
        printf("5. Exit\\n");

        printf("Enter choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
            case 1:
                if (count < 100)
                {
                    readStudent(&students[count]);
                    count++;
                    printf("Student added successfully.\\n");
                }
                else
                {
                    printf("Student limit reached.\\n");
                }
                break;

            case 2:
                for (int i = 0; i < count; i++)
                {
                    displayStudent(&students[i]);
                }
                break;

            case 3:
                printf("Enter Roll Number: ");
                scanf("%d", &rollNumber);

                index = searchStudent(
                    students,
                    count,
                    rollNumber
                );

                if (index != -1)
                {
                    displayStudent(&students[index]);
                }
                else
                {
                    printf("Student not found.\\n");
                }
                break;

            case 4:
                printf("Enter Roll Number: ");
                scanf("%d", &rollNumber);

                index = searchStudent(
                    students,
                    count,
                    rollNumber
                );

                if (index != -1)
                {
                    printf("Enter new marks: ");
                    scanf("%f", &marks);

                    updateMarks(
                        &students[index],
                        marks
                    );

                    printf("Marks updated successfully.\\n");
                }
                else
                {
                    printf("Student not found.\\n");
                }
                break;

            case 5:
                printf("Exiting program...\\n");
                break;

            default:
                printf("Invalid choice.\\n");
        }

    } while (choice != 5);

    return 0;
}

---

10. Concepts Used in the Project

The project combines several concepts learned in Module 8:

Structures
    ↓
Store student information

Arrays
    ↓
Store multiple students

typedef
    ↓
Create the Student alias

enum
    ↓
Represent PASS and FAIL

Functions
    ↓
Perform different operations

Pointers
    ↓
Modify student records

String handling
    ↓
Store student names

Searching
    ↓
Find students using roll number

---

Lesson Summary

The Student Management System demonstrates how the concepts learned in Module 8 can be combined into a practical C program.

The project uses:

- Structures
- Arrays
- Functions
- Pointers
- typedef
- enum
- String handling
- Searching
- Updating records

The system can add students, display records, search for students, update marks, and determine the result status.
` 
};

export default lesson15;