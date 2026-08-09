const lesson15 = {

  id: "lesson15",

  title: "Student Record Management System",

  content: `

# Student Record Management System

## Introduction

In this lesson, you will build a Student Record Management System using the Java Collections Framework.

This project brings together the concepts covered throughout Module 9:

- ArrayList.
- LinkedList.
- HashSet.
- LinkedHashSet.
- TreeSet.
- Searching.
- Sorting.
- Removing duplicates.
- Collection algorithms.
- Iteration.
- Custom objects.

The goal is to create a small but practical Java application for storing and managing records.

---

# Project Objective

The system will allow you to:

1. Add a record.
2. Display all records.
3. Search for a record.
4. Remove a record.
5. Sort records.
6. Prevent duplicate IDs.
7. Display unique courses.
8. Count records.
9. Find minimum and maximum marks.
10. Exit the application.

---

# Project Structure

The project will contain a Student class and a main application.

\`\`\`text
StudentRecordManagement
│
├── Student.java
│
└── StudentRecordManagement.java
\`\`\`

For simplicity, both classes can also be placed in a single Java file while learning.

---

# Step 1: Create the Student Class

Create a class named:

\`\`\`java
class Student {

    int id;
    String name;
    String course;
    double marks;

    Student(
            int id,
            String name,
            String course,
            double marks) {

        this.id = id;
        this.name = name;
        this.course = course;
        this.marks = marks;

    }

}
\`\`\`

The class stores four pieces of information:

ID

Name

Course

Marks

---

# Step 2: Add a Constructor

The constructor initializes the record.

\`\`\`java
Student(
        int id,
        String name,
        String course,
        double marks) {

    this.id = id;
    this.name = name;
    this.course = course;
    this.marks = marks;

}
\`\`\`

Example:

\`\`\`java
Student student =
        new Student(
                101,
                "Alex",
                "Java",
                87.5);
\`\`\`

---

# Step 3: Override toString()

A toString() method makes the record easier to display.

\`\`\`java
@Override
public String toString() {

    return "ID: " + id
            + ", Name: " + name
            + ", Course: " + course
            + ", Marks: " + marks;

}
\`\`\`

Now printing:

\`\`\`java
System.out.println(student);
\`\`\`

produces readable output.

---

# Step 4: Create the Record List

The main application can use an ArrayList to store records.

\`\`\`java
List<Student> students =
        new ArrayList<>();
\`\`\`

Why ArrayList?

Because the application needs:

- Ordered records.
- Dynamic size.
- Easy iteration.
- Easy sorting.
- Access to records as a list.

---

# Step 5: Prevent Duplicate IDs

A separate HashSet can keep track of IDs.

\`\`\`java
Set<Integer> studentIds =
        new HashSet<>();
\`\`\`

Before adding a record:

\`\`\`java
if (studentIds.contains(id)) {

    System.out.println(
            "ID already exists.");

} else {

    studentIds.add(id);

}
\`\`\`

This demonstrates how different collections can work together.

---

# Step 6: Add a Record

Create a method:

\`\`\`java
static void addStudent(
        List<Student> students,
        Set<Integer> studentIds,
        Set<String> courses,
        Student student) {

    if (studentIds.contains(
            student.id)) {

        System.out.println(
                "Student ID already exists.");

        return;

    }

    students.add(student);
    studentIds.add(student.id);
    courses.add(student.course);

    System.out.println(
            "Record added successfully.");

}
\`\`\`

The method:

1. Checks whether the ID exists.
2. Adds the student to the ArrayList.
3. Adds the ID to the HashSet.
4. Adds the course to the LinkedHashSet.
5. Displays a success message.

---

# Step 7: Display Records

Create a method:

\`\`\`java
static void displayStudents(
        List<Student> students) {

    if (students.isEmpty()) {

        System.out.println(
                "No records available.");

        return;

    }

    for (Student student :
            students) {

        System.out.println(student);

    }

}
\`\`\`

This method demonstrates iteration through an ArrayList.

---

# Step 8: Search for a Record

Create a method:

\`\`\`java
static Student findStudent(
        List<Student> students,
        int id) {

    for (Student student :
            students) {

        if (student.id == id) {

            return student;

        }

    }

    return null;

}
\`\`\`

The method searches the list using the student ID.

---

# Searching Example

Suppose the records are:

\`\`\`text
ID: 101, Name: Alex
ID: 102, Name: Jordan
ID: 103, Name: Taylor
\`\`\`

Search:

\`\`\`text
Enter ID to search: 102
\`\`\`

The application finds:

\`\`\`text
ID: 102
Name: Jordan
\`\`\`

---

# Step 9: Remove a Record

When removing an element while traversing a collection, an Iterator can be used.

\`\`\`java
static boolean removeStudent(
        List<Student> students,
        Set<Integer> studentIds,
        int id) {

    Iterator<Student> iterator =
            students.iterator();

    while (iterator.hasNext()) {

        Student student =
                iterator.next();

        if (student.id == id) {

            iterator.remove();
            studentIds.remove(id);

            return true;

        }

    }

    return false;

}
\`\`\`

The Iterator safely removes the matching record from the list.

---

# Step 10: Display Courses

The application uses a LinkedHashSet for courses.

\`\`\`java
static void displayCourses(
        Set<String> courses) {

    System.out.println(
            "\\nAvailable Courses:");

    for (String course :
            courses) {

        System.out.println(course);

    }

}
\`\`\`

Because LinkedHashSet is used, unique courses are maintained in insertion order.

---

# Step 11: Display Statistics

The application can use Collections.min() and Collections.max().

\`\`\`java
static void displayStatistics(
        List<Student> students) {

    if (students.isEmpty()) {

        System.out.println(
                "No records available.");

        return;

    }

    Student minimum =
            Collections.min(
                    students,
                    Comparator.comparingDouble(
                            student ->
                                    student.marks));

    Student maximum =
            Collections.max(
                    students,
                    Comparator.comparingDouble(
                            student ->
                                    student.marks));

    System.out.println(
            "Total Records: "
            + students.size());

    System.out.println(
            "Lowest Marks: "
            + minimum);

    System.out.println(
            "Highest Marks: "
            + maximum);

}
\`\`\`

---

# Step 12: Main Application

The main method creates the required collections.

\`\`\`java
Scanner scanner =
        new Scanner(System.in);

List<Student> students =
        new ArrayList<>();

Set<Integer> studentIds =
        new HashSet<>();

Set<String> courses =
        new LinkedHashSet<>();
\`\`\`

The application then displays a menu continuously.

---

# Application Menu

\`\`\`text
===== Student Record Management =====

1. Add Record
2. Display Records
3. Search Record
4. Remove Record
5. Sort by Name
6. Sort by Marks
7. Display Courses
8. Statistics
9. Exit

Enter your choice:
\`\`\`

---

# Complete Java Implementation

\`\`\`java
import java.util.ArrayList;
import java.util.Comparator;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.List;
import java.util.Scanner;
import java.util.Set;
import java.util.Collections;

class Student {

    int id;
    String name;
    String course;
    double marks;

    Student(
            int id,
            String name,
            String course,
            double marks) {

        this.id = id;
        this.name = name;
        this.course = course;
        this.marks = marks;

    }

    @Override
    public String toString() {

        return "ID: " + id
                + ", Name: " + name
                + ", Course: " + course
                + ", Marks: " + marks;

    }

}

public class StudentRecordManagement {

    static void addStudent(
            List<Student> students,
            Set<Integer> studentIds,
            Set<String> courses,
            Student student) {

        if (studentIds.contains(
                student.id)) {

            System.out.println(
                    "Student ID already exists.");

            return;

        }

        students.add(student);
        studentIds.add(student.id);
        courses.add(student.course);

        System.out.println(
                "Record added successfully.");

    }

    static void displayStudents(
            List<Student> students) {

        if (students.isEmpty()) {

            System.out.println(
                    "No records available.");

            return;

        }

        for (Student student :
                students) {

            System.out.println(student);

        }

    }

    static Student findStudent(
            List<Student> students,
            int id) {

        for (Student student :
                students) {

            if (student.id == id) {

                return student;

            }

        }

        return null;

    }

    static boolean removeStudent(
            List<Student> students,
            Set<Integer> studentIds,
            int id) {

        Iterator<Student> iterator =
                students.iterator();

        while (iterator.hasNext()) {

            Student student =
                    iterator.next();

            if (student.id == id) {

                iterator.remove();
                studentIds.remove(id);

                return true;

            }

        }

        return false;

    }

    static void displayCourses(
            Set<String> courses) {

        System.out.println(
                "\\nAvailable Courses:");

        for (String course :
                courses) {

            System.out.println(course);

        }

    }

    static void displayStatistics(
            List<Student> students) {

        if (students.isEmpty()) {

            System.out.println(
                    "No records available.");

            return;

        }

        Student minimum =
                Collections.min(
                        students,
                        Comparator.comparingDouble(
                                student ->
                                        student.marks));

        Student maximum =
                Collections.max(
                        students,
                        Comparator.comparingDouble(
                                student ->
                                        student.marks));

        System.out.println(
                "Total Records: "
                + students.size());

        System.out.println(
                "Lowest Marks: "
                + minimum);

        System.out.println(
                "Highest Marks: "
                + maximum);

    }

    public static void main(String[] args) {

        Scanner scanner =
                new Scanner(System.in);

        List<Student> students =
                new ArrayList<>();

        Set<Integer> studentIds =
                new HashSet<>();

        Set<String> courses =
                new LinkedHashSet<>();

        while (true) {

            System.out.println(
                    "\\n===== Student Record Management =====");

            System.out.println(
                    "1. Add Record");

            System.out.println(
                    "2. Display Records");

            System.out.println(
                    "3. Search Record");

            System.out.println(
                    "4. Remove Record");

            System.out.println(
                    "5. Sort by Name");

            System.out.println(
                    "6. Sort by Marks");

            System.out.println(
                    "7. Display Courses");

            System.out.println(
                    "8. Statistics");

            System.out.println(
                    "9. Exit");

            System.out.print(
                    "Enter your choice: ");

            int choice =
                    scanner.nextInt();

            scanner.nextLine();

            switch (choice) {

                case 1:

                    System.out.print(
                            "Enter ID: ");

                    int id =
                            scanner.nextInt();

                    scanner.nextLine();

                    System.out.print(
                            "Enter Name: ");

                    String name =
                            scanner.nextLine();

                    System.out.print(
                            "Enter Course: ");

                    String course =
                            scanner.nextLine();

                    System.out.print(
                            "Enter Marks: ");

                    double marks =
                            scanner.nextDouble();

                    scanner.nextLine();

                    Student student =
                            new Student(
                                    id,
                                    name,
                                    course,
                                    marks);

                    addStudent(
                            students,
                            studentIds,
                            courses,
                            student);

                    break;

                case 2:

                    displayStudents(
                            students);

                    break;

                case 3:

                    System.out.print(
                            "Enter ID to search: ");

                    int searchId =
                            scanner.nextInt();

                    Student result =
                            findStudent(
                                    students,
                                    searchId);

                    if (result != null) {

                        System.out.println(
                                result);

                    } else {

                        System.out.println(
                                "Record not found.");

                    }

                    break;

                case 4:

                    System.out.print(
                            "Enter ID to remove: ");

                    int removeId =
                            scanner.nextInt();

                    if (removeStudent(
                            students,
                            studentIds,
                            removeId)) {

                        System.out.println(
                                "Record removed.");

                    } else {

                        System.out.println(
                                "Record not found.");

                    }

                    break;

                case 5:

                    students.sort(
                            Comparator.comparing(
                                    student ->
                                            student.name));

                    System.out.println(
                            "Records sorted by name.");

                    displayStudents(
                            students);

                    break;

                case 6:

                    students.sort(
                            Comparator.comparingDouble(
                                    student ->
                                            student.marks));

                    System.out.println(
                            "Records sorted by marks.");

                    displayStudents(
                            students);

                    break;

                case 7:

                    displayCourses(
                            courses);

                    break;

                case 8:

                    displayStatistics(
                            students);

                    break;

                case 9:

                    scanner.close();

                    System.out.println(
                            "Application closed.");

                    return;

                default:

                    System.out.println(
                            "Invalid choice.");

            }

        }

    }

}
\`\`\`

---

# How the Collections Work Together

This project uses different collections for different requirements.

ArrayList

↓

Stores complete student records


HashSet

↓

Ensures student IDs are unique


LinkedHashSet

↓

Stores unique courses

while preserving insertion order

This is an important software-design idea:

**Choose a collection based on the behavior you need.**

---

# Why Not Use One Collection for Everything?

Different collections solve different problems.

Need duplicates?

↓

List


Need uniqueness?

↓

Set


Need insertion-order uniqueness?

↓

LinkedHashSet


Need sorted uniqueness?

↓

TreeSet


Need queue behavior?

↓

Queue


Need priority processing?

↓

PriorityQueue

Using the correct collection makes the program easier to understand and maintain.

---

# Features Demonstrated

The project demonstrates:

## ArrayList

\`\`\`java
List<Student> students =
        new ArrayList<>();
\`\`\`

Used for storing student records.

---

## HashSet

\`\`\`java
Set<Integer> studentIds =
        new HashSet<>();
\`\`\`

Used to prevent duplicate IDs.

---

## LinkedHashSet

\`\`\`java
Set<String> courses =
        new LinkedHashSet<>();
\`\`\`

Used to store unique courses while preserving insertion order.

---

## Collection Algorithms

\`\`\`java
students.sort(...);

Collections.min(...);

Collections.max(...);
\`\`\`

Used for sorting and statistics.

---

# Example Execution

Suppose you add:

\`\`\`text
ID: 101
Name: Alex
Course: Java
Marks: 85
\`\`\`

Then:

\`\`\`text
ID: 102
Name: Jordan
Course: Python
Marks: 91
\`\`\`

Then:

\`\`\`text
ID: 103
Name: Taylor
Course: Java
Marks: 78
\`\`\`

Displaying records gives the stored records.

The courses set contains:

\`\`\`text
Java
Python
\`\`\`

because Java was entered twice but is stored only once.

---

# Searching

Search:

\`\`\`text
Enter ID to search: 102
\`\`\`

The application finds:

\`\`\`text
ID: 102
Name: Jordan
Course: Python
Marks: 91
\`\`\`

---

# Sorting by Marks

After selecting:

\`\`\`text
6. Sort by Marks
\`\`\`

The records are ordered from lowest to highest marks.

For example:

\`\`\`text
78
85
91
\`\`\`

---

# Statistics

The statistics option can display:

\`\`\`text
Total Records: 3

Lowest Marks:
78

Highest Marks:
91
\`\`\`

---

# Concepts Practiced

This project combines the most important concepts from Module 9:

Collections

↓

List

↓

ArrayList

↓

Set

↓

HashSet

↓

LinkedHashSet

↓

Sorting

↓

Comparators

↓

Collections Algorithms

↓

Custom Objects

---

# Important Design Lesson

Do not choose a collection simply because it is familiar.

Instead, ask:

What behavior do I need?

↓

Do I need duplicates?

↓

Do I need insertion order?

↓

Do I need sorted order?

↓

Do I need fast membership checking?

↓

Do I need queue behavior?

↓

Then select the appropriate collection.

---

# Possible Improvements

The current project is intentionally focused on the Collections Framework.

A production application could later add:

- Update record.
- Input validation.
- File storage.
- Database storage.
- Better error handling.
- More advanced searching.
- User authentication.
- Graphical user interface.

These improvements are outside the main focus of this lesson.

---

# Best Practices

Follow these practices:

- Use interfaces such as List and Set for variable declarations when possible.
- Select collections according to the required behavior.
- Use HashSet for uniqueness when order is not important.
- Use LinkedHashSet when insertion order matters.
- Use TreeSet when sorted uniqueness is required.
- Use Comparator for custom sorting.
- Use Iterator when removing elements safely during traversal.
- Keep individual methods focused on one responsibility.
- Validate input in production applications.
- Keep the collection choice intentional and documented.

---

# Interview Questions

## Q1. Why is ArrayList used for student records?

Because the project needs an ordered, dynamically sized collection of student objects.

---

## Q2. Why is HashSet used for student IDs?

Because IDs must be unique, and HashSet is designed to store unique elements.

---

## Q3. Why is LinkedHashSet used for courses?

Because courses should be unique while their insertion order should be preserved.

---

## Q4. Why is Iterator used when removing a record?

An iterator provides a safe way to remove an element from a collection while traversing it.

---

## Q5. How are records sorted?

A Comparator is used with the list's sort() method.

---

## Q6. How can the project prevent duplicate IDs?

The ID is checked using:

\`\`\`java
studentIds.contains(id);
\`\`\`

before the record is added.

---

## Q7. Which collection would you use if courses had to be sorted automatically?

A TreeSet would be appropriate.

---

## Q8. Which collection would you use if records needed FIFO processing?

A Queue would be appropriate.

---

# Key Takeaways

After completing this lesson, you should be able to:

- Build a practical Java application using collections.
- Create custom objects.
- Store objects using ArrayList.
- Prevent duplicates using HashSet.
- Maintain unique insertion-ordered data using LinkedHashSet.
- Search records.
- Remove records safely using Iterator.
- Sort records using Comparator.
- Find minimum and maximum values.
- Use Collections algorithms.
- Combine multiple collection types in one application.
- Choose collections based on application requirements.

---

# Module Progress

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

✓ Lesson 3 — List Interface

✓ Lesson 4 — ArrayList

✓ Lesson 5 — LinkedList

✓ Lesson 6 — Vector & Stack

✓ Lesson 7 — Queue

✓ Lesson 8 — PriorityQueue

✓ Lesson 9 — Deque

✓ Lesson 10 — Set Interface

✓ Lesson 11 — HashSet

✓ Lesson 12 — LinkedHashSet

✓ Lesson 13 — TreeSet

✓ Lesson 14 — Collection Algorithms

✓ Lesson 15 — Student Record Management System

---

# Module 9 Final Summary

You have now completed the main concepts of the Java Collections Framework.

✓ Lesson 1 — Introduction to Collections

✓ Lesson 2 — Collection Interfaces

✓ Lesson 3 — List Interface

✓ Lesson 4 — ArrayList

✓ Lesson 5 — LinkedList

✓ Lesson 6 — Vector & Stack

✓ Lesson 7 — Queue

✓ Lesson 8 — PriorityQueue

✓ Lesson 9 — Deque

✓ Lesson 10 — Set Interface

✓ Lesson 11 — HashSet

✓ Lesson 12 — LinkedHashSet

✓ Lesson 13 — TreeSet

✓ Lesson 14 — Collection Algorithms

✓ Lesson 15 — Student Record Management System

---

# Module 9 Learning Outcomes

After completing this module, you should be able to:

- Explain the Java Collections Framework.
- Understand collection interfaces.
- Work with List.
- Use ArrayList.
- Use LinkedList.
- Understand Vector and Stack.
- Work with Queue.
- Use PriorityQueue.
- Work with Deque.
- Understand Set.
- Use HashSet.
- Use LinkedHashSet.
- Use TreeSet.
- Remove duplicates.
- Preserve insertion order when required.
- Maintain sorted collections.
- Use collection algorithms.
- Sort collections using comparators.
- Search collections.
- Build practical applications using multiple collection types.

---

# Module 9 Complete

## Java Collections Framework

You now have the foundation required to work with Java's major collection types and select the right collection for different programming problems.

The next module in the course is:

# Module 10

## Maps & Generics

It will introduce:

- Map.
- HashMap.
- LinkedHashMap.
- TreeMap.
- Hashtable.
- Generic classes.
- Generic methods.
- Bounded generics.
- Wildcards.
- Comparable.
- Comparator.
- Sorting objects.
- Immutable collections.
- Inventory Management System.

---

# Next Module

## Module 10 — Maps & Generics

You will now move from collections such as List and Set into:

Key → Value

data structures and reusable type-safe programming using Generics.

`
};

export default lesson15;