const lesson15 = {
  id: "lesson15",
  title: "Mini Project — Linked List Based Student Records",

  content: `

# MODULE 11 — DATA STRUCTURES IN C

# Lesson 15: Mini Project — Linked List Based Student Records

---

# Introduction

In this final lesson, we will combine the linked-list concepts learned throughout the module to create a small **Student Record Management System**.

The program will store student information using dynamically allocated linked-list nodes.

Each student record contains:

- Roll number
- Student name
- Marks
- Pointer to the next student

The linked list allows us to store multiple student records dynamically.

---

# 1. Student Node

We can define the node as:

    typedef struct Student
    {
        int rollNo;
        char name[50];
        float marks;
        struct Student *next;
    } Student;

Each node contains:

    Roll Number
    Name
    Marks
    Next Pointer

---

# 2. Linked List Structure

Suppose we have three students:

    head
     ↓
    [101 | Student A | 85]
              ↓
    [102 | Student B | 78]
              ↓
    [103 | Student C | 91]
              ↓
            NULL

Each node points to the next student record.

---

# 3. Creating a Student Node

A function can be used to create a new student node.

    Student *createStudent(int rollNo,
                           const char *name,
                           float marks)
    {
        Student *newStudent;

        newStudent = malloc(sizeof(*newStudent));

        if (newStudent == NULL)
        {
            return NULL;
        }

        newStudent->rollNo = rollNo;

        snprintf(newStudent->name,
                 sizeof(newStudent->name),
                 "%s",
                 name);

        newStudent->marks = marks;
        newStudent->next = NULL;

        return newStudent;
    }

The function allocates memory dynamically and initializes the student record.

---

# 4. Adding a Student

A new student can be added at the end of the list.

    void addStudent(Student **head,
                    int rollNo,
                    const char *name,
                    float marks)
    {
        Student *newStudent;
        Student *current;

        newStudent = createStudent(rollNo, name, marks);

        if (newStudent == NULL)
        {
            printf("Memory allocation failed\\n");
            return;
        }

        if (*head == NULL)
        {
            *head = newStudent;
            return;
        }

        current = *head;

        while (current->next != NULL)
        {
            current = current->next;
        }

        current->next = newStudent;
    }

---

# 5. Displaying Student Records

To display all records, traverse the linked list.

    void displayStudents(Student *head)
    {
        Student *current = head;

        if (current == NULL)
        {
            printf("No student records found.\\n");
            return;
        }

        while (current != NULL)
        {
            printf("Roll No: %d\\n",
                   current->rollNo);

            printf("Name: %s\\n",
                   current->name);

            printf("Marks: %.2f\\n",
                   current->marks);

            printf("--------------------\\n");

            current = current->next;
        }
    }

---

# 6. Searching for a Student

We can search for a student using the roll number.

    Student *searchStudent(Student *head,
                           int rollNo)
    {
        Student *current = head;

        while (current != NULL)
        {
            if (current->rollNo == rollNo)
            {
                return current;
            }

            current = current->next;
        }

        return NULL;
    }

If the roll number is found, the corresponding node is returned.

Otherwise:

    NULL

is returned.

---

# 7. Updating Student Marks

Suppose we want to update the marks of a student.

    int updateMarks(Student *head,
                    int rollNo,
                    float newMarks)
    {
        Student *student;

        student = searchStudent(head, rollNo);

        if (student == NULL)
        {
            return 0;
        }

        student->marks = newMarks;

        return 1;
    }

The student record is modified directly.

---

# 8. Deleting a Student

We can also remove a student using the roll number.

    int deleteStudent(Student **head,
                      int rollNo)
    {
        Student *current;
        Student *previous;

        if (*head == NULL)
        {
            return 0;
        }

        if ((*head)->rollNo == rollNo)
        {
            current = *head;
            *head = (*head)->next;

            free(current);

            return 1;
        }

        previous = *head;
        current = (*head)->next;

        while (current != NULL)
        {
            if (current->rollNo == rollNo)
            {
                previous->next = current->next;

                free(current);

                return 1;
            }

            previous = current;
            current = current->next;
        }

        return 0;
    }

---

# 9. Freeing the Entire List

Before the program ends, dynamically allocated memory should be released.

    void freeStudents(Student *head)
    {
        Student *current = head;
        Student *next;

        while (current != NULL)
        {
            next = current->next;

            free(current);

            current = next;
        }
    }

This releases every student node.

---

# 10. Complete Mini Project

    #include <stdio.h>
    #include <stdlib.h>

    typedef struct Student
    {
        int rollNo;
        char name[50];
        float marks;
        struct Student *next;
    } Student;

    Student *createStudent(int rollNo,
                           const char *name,
                           float marks)
    {
        Student *newStudent;

        newStudent = malloc(sizeof(*newStudent));

        if (newStudent == NULL)
        {
            return NULL;
        }

        newStudent->rollNo = rollNo;

        snprintf(newStudent->name,
                 sizeof(newStudent->name),
                 "%s",
                 name);

        newStudent->marks = marks;
        newStudent->next = NULL;

        return newStudent;
    }

    void addStudent(Student **head,
                    int rollNo,
                    const char *name,
                    float marks)
    {
        Student *newStudent;
        Student *current;

        newStudent = createStudent(rollNo, name, marks);

        if (newStudent == NULL)
        {
            printf("Memory allocation failed\\n");
            return;
        }

        if (*head == NULL)
        {
            *head = newStudent;
            return;
        }

        current = *head;

        while (current->next != NULL)
        {
            current = current->next;
        }

        current->next = newStudent;
    }

    void displayStudents(Student *head)
    {
        Student *current = head;

        if (current == NULL)
        {
            printf("No student records found.\\n");
            return;
        }

        while (current != NULL)
        {
            printf("Roll No: %d\\n",
                   current->rollNo);

            printf("Name: %s\\n",
                   current->name);

            printf("Marks: %.2f\\n",
                   current->marks);

            printf("--------------------\\n");

            current = current->next;
        }
    }

    Student *searchStudent(Student *head,
                           int rollNo)
    {
        Student *current = head;

        while (current != NULL)
        {
            if (current->rollNo == rollNo)
            {
                return current;
            }

            current = current->next;
        }

        return NULL;
    }

    int updateMarks(Student *head,
                    int rollNo,
                    float newMarks)
    {
        Student *student;

        student = searchStudent(head, rollNo);

        if (student == NULL)
        {
            return 0;
        }

        student->marks = newMarks;

        return 1;
    }

    int deleteStudent(Student **head,
                      int rollNo)
    {
        Student *current;
        Student *previous;

        if (*head == NULL)
        {
            return 0;
        }

        if ((*head)->rollNo == rollNo)
        {
            current = *head;
            *head = (*head)->next;

            free(current);

            return 1;
        }

        previous = *head;
        current = (*head)->next;

        while (current != NULL)
        {
            if (current->rollNo == rollNo)
            {
                previous->next = current->next;

                free(current);

                return 1;
            }

            previous = current;
            current = current->next;
        }

        return 0;
    }

    void freeStudents(Student *head)
    {
        Student *current = head;
        Student *next;

        while (current != NULL)
        {
            next = current->next;

            free(current);

            current = next;
        }
    }

    int main(void)
    {
        Student *head = NULL;
        Student *student;

        addStudent(&head, 101, "Student A", 85.5f);
        addStudent(&head, 102, "Student B", 78.0f);
        addStudent(&head, 103, "Student C", 91.0f);

        printf("Student Records:\\n");
        displayStudents(head);

        student = searchStudent(head, 102);

        if (student != NULL)
        {
            printf("Student found: %s\\n",
                   student->name);
        }

        updateMarks(head, 102, 88.0f);

        printf("\\nAfter updating marks:\\n");
        displayStudents(head);

        deleteStudent(&head, 101);

        printf("\\nAfter deleting Roll No 101:\\n");
        displayStudents(head);

        freeStudents(head);

        return 0;
    }

---

# 11. Concepts Used in the Project

This project combines several concepts learned in this module.

## Structures

Student information is grouped using a structure.

## Pointers

Pointers connect one student node to another.

## Dynamic Memory Allocation

Memory is allocated using:

    malloc()

and released using:

    free()

## Linked Lists

Student records are connected through:

    next

## Traversal

The list is traversed using:

    current = current->next;

## Searching

A student can be found using the roll number.

## Updating

Existing student information can be modified.

## Deletion

A student node can be removed from the linked list.

---

# 12. Working of the Project

The program starts with:

    head = NULL

Then student records are added.

After adding three students:

    head
     ↓
    101 → 102 → 103 → NULL

Searching for:

    102

returns the second node.

Updating its marks changes only that node.

Deleting:

    101

changes the list to:

    head
     ↓
    102 → 103 → NULL

Finally, all dynamically allocated memory is released.

---

# 13. Why Linked Lists Are Useful Here

The number of student records does not have to be known in advance.

With a fixed array, we might have:

    Student students[100];

which provides a fixed capacity.

With a linked list, new nodes can be created dynamically as required.

This makes linked lists useful for data whose size can change during program execution.

---

# 14. Complexity

For this implementation:

    Add at end       → O(n)

    Search           → O(n)

    Update           → O(n)

    Delete           → O(n)

    Display          → O(n)

The operations may need to traverse the linked list.

---

# 15. Final Module Review

In this module, we learned about important data structures and their implementation in C.

We started with the concept of data structures.

Then we learned:

    Structures
       ↓
    Self-referential structures
       ↓
    Linked lists
       ↓
    Traversal
       ↓
    Insertion
       ↓
    Deletion
       ↓
    Searching
       ↓
    Updating
       ↓
    Stacks
       ↓
    Queues
       ↓
    Mini Project

The concepts are connected and form the foundation for more advanced data structures.

---

# 16. Key Concepts to Remember

Linked List:

    Node → Node → Node → NULL

Stack:

    LIFO
    Last In, First Out

Queue:

    FIFO
    First In, First Out

Dynamic memory:

    malloc()
    free()

Linked-list traversal:

    current = current->next;

---

# Course Completion

Congratulations! You have successfully completed the **Data Structures in C** course.

You have learned the fundamental concepts of data structures, linked lists, stacks, queues, dynamic memory allocation, and practical implementation through a mini project.

**Keep practicing, keep building programs, and continue exploring more advanced data structures. Your journey in Data Structures has just begun!**

---

# MODULE 11 — COURSE COMPLETED ✓

`,
};

export default lesson15;