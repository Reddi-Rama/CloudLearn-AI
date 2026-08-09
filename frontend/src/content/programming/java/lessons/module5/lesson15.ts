const lesson15 = {

  id: "lesson15",

  title: "Mini Project: Student Management System Using OOP",

  content: `

# Mini Project: Student Management System Using OOP


## Introduction


In this lesson, we will build a simple Student Management System using Object-Oriented Programming concepts.



This project combines the important OOP concepts learned in this module:


- Classes.
- Objects.
- Constructors.
- Instance variables.
- Static members.
- Encapsulation.
- Methods.
- Packages.



The purpose of this project is to understand how real-world applications are designed using objects.



# Project Objective


Create a Student Management System that can:


- Store student information.
- Display student details.
- Calculate grades.
- Track the total number of students.



# OOP Concepts Used


This project demonstrates:



## Class


Used to create the blueprint for students.



## Objects


Used to represent individual students.



## Constructors


Used to initialize student data.



## Encapsulation


Used to protect student information.



## Static Members


Used to maintain common data.



## Methods


Used to define student behavior.



# Project Design


Our system contains:



Class:


Student



Fields:


- Name.
- Roll Number.
- Marks.
- Total Students Count.



Methods:


- Display Details.
- Calculate Grade.



# Creating Student Class


Example:


class Student

{

}



The Student class represents a real-world student entity.



# Adding Instance Variables


Instance variables store individual student information.



Example:


class Student

{

    private String name;

    private int rollNumber;

    private int marks;

}



Each object has its own values.



# Adding Static Variable


A static variable stores shared information.



Example:


static int totalStudents = 0;



This variable stores the total number of student objects created.



# Creating Constructor


A constructor initializes student objects.



Example:


Student(String name, int rollNumber, int marks)

{

    this.name = name;

    this.rollNumber = rollNumber;

    this.marks = marks;

    totalStudents++;

}



Whenever a student object is created, the count increases.



# Adding Getter Methods


Getter methods provide controlled access to private data.



Example:


public String getName()

{

    return name;

}



# Adding Setter Methods


Setter methods modify private data safely.



Example:


public void setMarks(int marks)

{

    if(marks >= 0 && marks <= 100)

    {

        this.marks = marks;

    }

}



# Calculate Grade Method


The method calculates student grade based on marks.



Example:


public String calculateGrade()

{

    if(marks >= 90)

    {

        return "A";

    }

    else if(marks >= 75)

    {

        return "B";

    }

    else if(marks >= 50)

    {

        return "C";

    }

    else

    {

        return "Fail";

    }

}



# Display Student Details


Example:


public void displayDetails()

{

    System.out.println(name);

    System.out.println(rollNumber);

    System.out.println(marks);

    System.out.println(calculateGrade());

}



# Complete Student Management System


class Student

{

    private String name;

    private int rollNumber;

    private int marks;


    static int totalStudents = 0;



    Student(String name, int rollNumber, int marks)

    {

        this.name = name;

        this.rollNumber = rollNumber;

        this.marks = marks;

        totalStudents++;

    }



    public String getName()

    {

        return name;

    }



    public void setMarks(int marks)

    {

        if(marks >= 0 && marks <= 100)

        {

            this.marks = marks;

        }

    }



    public String calculateGrade()

    {

        if(marks >= 90)

        {

            return "A";

        }

        else if(marks >= 75)

        {

            return "B";

        }

        else if(marks >= 50)

        {

            return "C";

        }

        else

        {

            return "Fail";

        }

    }



    public void displayDetails()

    {

        System.out.println("Name: " + name);

        System.out.println("Roll Number: " + rollNumber);

        System.out.println("Marks: " + marks);

        System.out.println("Grade: " + calculateGrade());

    }



    public static void displayTotalStudents()

    {

        System.out.println("Total Students: " + totalStudents);

    }

}



class Main

{

    public static void main(String[] args)

    {

        Student student1 = new Student("Alex",101,95);


        Student student2 = new Student("John",102,82);



        student1.displayDetails();


        System.out.println();


        student2.displayDetails();


        System.out.println();


        Student.displayTotalStudents();

    }

}



Output:


Name: Alex

Roll Number: 101

Marks: 95

Grade: A


Name: John

Roll Number: 102

Marks: 82

Grade: B


Total Students: 2



# Explanation of Project


## Class


Student class represents student entities.



## Objects


student1 and student2 represent individual students.



## Encapsulation


Private variables protect student data.



## Constructor


Initializes student information.



## Static Variable


Tracks total number of students.



## Methods


Perform student operations.



# Improving the Project Using Packages


Large applications separate classes into packages.



Example:


studentmanagement


|

|-- Student.java


|-- Main.java



This improves organization.



# Real-World Extension Ideas


This project can be expanded by adding:



## Database Integration


Store student information permanently.



## Login System


Add user authentication.



## Attendance Management


Track student attendance.



## Course Management


Connect students with courses.



## Report Generation


Generate student reports.



# Advantages of This Design



## Reusable


Student class can be used in different applications.



## Secure


Data is protected using encapsulation.



## Maintainable


Changes can be made easily.



## Scalable


New features can be added later.



# Common Mistakes



## Making Variables Public


Removes data protection.



## Putting Everything in One Class


Reduces maintainability.



## Ignoring Object Design


Creates poor application structure.



# Best Practices Used


This project follows:


- Private fields.
- Public methods.
- Meaningful names.
- Constructor initialization.
- Static data for shared information.
- Object-based design.



# Key Points


Remember:


- Real applications are built using classes and objects.
- Constructors initialize objects.
- Encapsulation protects data.
- Static members store shared information.
- Methods define object behavior.
- Good OOP design creates maintainable software.



# Module Completion Summary


In this module, you learned:


- Introduction to OOP.
- Classes and objects.
- Fields and methods.
- Constructors.
- this keyword.
- Instance and static members.
- Packages.
- Access modifiers.
- Encapsulation.
- Garbage collection.
- OOP design practices.



This Student Management System combines all these concepts and prepares you for advanced Java topics:


- Inheritance.
- Polymorphism.
- Abstraction.
- Interfaces.



`

};


export default lesson15;