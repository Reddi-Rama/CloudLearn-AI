const lesson15 = {

  id: "lesson15",

  title: "Mini Project: Employee Management System Using OOP",

  content: `

# Mini Project: Employee Management System Using OOP


## Introduction


In this lesson, we will build a simple Employee Management System using Object-Oriented Programming concepts.



This project combines the important concepts learned in this module:


- Inheritance.
- Polymorphism.
- Abstract Classes.
- Method Overriding.
- Encapsulation.
- Constructors.
- Object-oriented design.



The purpose of this project is to understand how real-world applications are designed using inheritance and polymorphism.



# Project Objective


Create an Employee Management System that can:


- Store employee information.
- Handle different employee types.
- Calculate salaries differently.
- Display employee details.
- Demonstrate runtime polymorphism.



# OOP Concepts Used


This project demonstrates:



## Encapsulation


Employee data is protected using private variables.



## Inheritance


Different employee types inherit common employee features.



## Abstract Class


A common Employee blueprint is created.



## Method Overriding


Different employees calculate salary differently.



## Polymorphism


A parent reference can represent different employee objects.



# Project Design


The system contains:



Abstract Class:


Employee



Fields:


- Name.
- Employee ID.
- Base Salary.



Methods:


- Display Details.
- Calculate Salary.



Child Classes:


- FullTimeEmployee.
- PartTimeEmployee.
- ContractEmployee.



# Creating Employee Abstract Class


The Employee class represents common features of all employees.



Example:


abstract class Employee

{

}



# Adding Variables


Common employee information is stored in the parent class.



Example:


abstract class Employee

{

    private String name;

    private int employeeId;

    protected double salary;

}



# Creating Constructor


The constructor initializes employee information.



Example:


Employee(String name, int employeeId, double salary)

{

    this.name = name;

    this.employeeId = employeeId;

    this.salary = salary;

}



# Creating Abstract Method


Different employees calculate salary differently.



Therefore, we create an abstract method.



Example:


abstract double calculateSalary();



Each child class provides its own implementation.



# Display Employee Details Method


The parent class contains common display functionality.



Example:


public void displayDetails()

{

    System.out.println(name);

    System.out.println(employeeId);

}



# Full-Time Employee Class


A full-time employee receives a fixed salary.



Example:


class FullTimeEmployee extends Employee

{

    FullTimeEmployee(String name, int id, double salary)

    {

        super(name,id,salary);

    }


    double calculateSalary()

    {

        return salary;

    }

}



# Part-Time Employee Class


A part-time employee salary depends on working hours.



Example:


class PartTimeEmployee extends Employee

{

    int hours;


    PartTimeEmployee(String name, int id, double salary, int hours)

    {

        super(name,id,salary);

        this.hours = hours;

    }


    double calculateSalary()

    {

        return salary * hours;

    }

}



# Contract Employee Class


Contract employees receive contract-based payments.



Example:


class ContractEmployee extends Employee

{

    double contractAmount;


    ContractEmployee(String name, int id, double amount)

    {

        super(name,id,amount);

        contractAmount = amount;

    }


    double calculateSalary()

    {

        return contractAmount;

    }

}



# Complete Employee Management System


abstract class Employee

{

    private String name;

    private int employeeId;

    protected double salary;


    Employee(String name, int employeeId, double salary)

    {

        this.name = name;

        this.employeeId = employeeId;

        this.salary = salary;

    }


    public void displayDetails()

    {

        System.out.println("Name: " + name);

        System.out.println("Employee ID: " + employeeId);

    }


    abstract double calculateSalary();

}



class FullTimeEmployee extends Employee

{

    FullTimeEmployee(String name, int id, double salary)

    {

        super(name,id,salary);

    }


    double calculateSalary()

    {

        return salary;

    }

}



class PartTimeEmployee extends Employee

{

    int hours;


    PartTimeEmployee(String name, int id, double salary, int hours)

    {

        super(name,id,salary);

        this.hours = hours;

    }


    double calculateSalary()

    {

        return salary * hours;

    }

}



class Main

{

    public static void main(String[] args)

    {

        Employee employee1 = new FullTimeEmployee("Alex",101,50000);


        Employee employee2 = new PartTimeEmployee("John",102,500,40);



        employee1.displayDetails();

        System.out.println("Salary: " + employee1.calculateSalary());



        employee2.displayDetails();

        System.out.println("Salary: " + employee2.calculateSalary());

    }

}



Output:


Name: Alex

Employee ID: 101

Salary: 50000



Name: John

Employee ID: 102

Salary: 20000



# Explanation of Project



## Abstract Class


Employee defines common employee behavior.



## Inheritance


Employee types reuse employee properties.



## Method Overriding


Each employee calculates salary differently.



## Polymorphism


Employee reference stores different employee objects.



Example:


Employee employee = new FullTimeEmployee();



# Runtime Polymorphism Demonstration


Example:


Employee employee;



employee = new FullTimeEmployee();


employee.calculateSalary();



employee = new PartTimeEmployee();


employee.calculateSalary();



The same method call produces different results.



# Improving the Project Using Packages


Large applications separate classes into packages.



Structure:


employeeManagement


|


|-- Employee.java


|-- FullTimeEmployee.java


|-- PartTimeEmployee.java


|-- Main.java



This improves organization.



# Real-World Extensions


This project can be expanded by adding:



## Database Integration


Store employee records permanently.



## Login System


Add employee authentication.



## Attendance Management


Track employee attendance.



## Leave Management


Manage employee leave requests.



## Payroll Generation


Generate salary reports.



# Advantages of This Design



## Code Reusability


Common employee features are written once.



## Flexibility


New employee types can be added easily.



## Maintainability


Each class has a clear responsibility.



## Scalability


The system can grow with new features.



# Common Mistakes



## Creating Separate Classes Without Inheritance


Creates duplicate code.



## Not Using Polymorphism


Reduces flexibility.



## Making Data Public


Removes security.



# Best Practices Used


This project follows:


- Encapsulation.
- Abstract classes.
- Inheritance.
- Method overriding.
- Polymorphism.
- Clean object-oriented design.



# Key Points


Remember:


- Abstract classes define common behavior.
- Child classes provide specialized behavior.
- Method overriding enables different implementations.
- Parent references can represent child objects.
- OOP principles help build scalable applications.



# Module Completion Summary


In this module, you learned:


- Introduction to inheritance.
- Types of inheritance.
- extends keyword.
- Method overriding.
- super keyword.
- Polymorphism.
- Upcasting and downcasting.
- final keyword.
- Abstract classes.
- Interfaces.
- Object class.
- instanceof operator.
- Nested classes.
- Object cloning.



This Employee Management System combines all these concepts and prepares you for advanced Java topics:


- Exception Handling.
- Collections Framework.
- Multithreading.
- JDBC.
- Spring Boot.



`

};


export default lesson15;