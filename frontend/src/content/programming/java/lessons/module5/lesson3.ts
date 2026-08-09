const lesson3 = {

  id: "lesson3",

  title: "Fields (Instance Variables) and Methods in Java",

  content: `

# Fields (Instance Variables) and Methods in Java


## Introduction


In Object-Oriented Programming, objects contain:


- Data.
- Behavior.



Data represents the properties or characteristics of an object.



Behavior represents the actions that an object can perform.



In Java:


Fields store data.


Methods define behavior.



Example:


A Student object:


Fields:


- name.
- rollNumber.
- marks.



Methods:


- calculateGrade().
- displayDetails().



# What are Fields?


Fields are variables declared inside a class but outside any method, constructor, or block.



Fields represent the state or properties of an object.



Syntax:


class ClassName

{

    dataType fieldName;

}



Example:


class Student

{

    String name;

    int marks;

}



Here:


name and marks are fields of Student class.



# Types of Fields in Java


Java mainly has two types of fields:



## 1. Instance Variables


## 2. Static Variables



# Instance Variables


Instance variables are fields that belong to individual objects.



Each object gets its own copy of instance variables.



Example:


class Student

{

    String name;

    int marks;

}



Creating objects:


Student student1 = new Student();


Student student2 = new Student();



Memory:


student1


name = "Alex"


marks = 90



student2


name = "John"


marks = 85



Both objects have separate copies.



# Features of Instance Variables



- Declared inside a class.
- Outside methods.
- Belong to objects.
- Each object has separate values.
- Stored in heap memory with objects.



# Default Values of Instance Variables


Java automatically assigns default values.



Examples:


int:


0



double:


0.0



boolean:


false



String/Object:


null



Example:


class Example

{

    int number;


    public static void main(String[] args)

    {

        Example obj = new Example();


        System.out.println(obj.number);

    }

}



Output:


0



# Accessing Instance Variables


Instance variables are accessed using objects.



Syntax:


objectName.variableName



Example:


student1.name;


student1.marks;



# What are Methods?


Methods are blocks of code that define the behavior of an object.



Methods perform operations using object data.



Syntax:


returnType methodName(parameters)

{

    statements;

}



Example:


void display()

{

    System.out.println("Student Details");

}



# Components of a Method



A method contains:



## Method Name


The identifier used to call the method.



Example:


display()



## Return Type


Defines what value the method returns.



Examples:


int


double


String


void



## Parameters


Values passed into the method.



Example:


calculate(int marks)



## Method Body


Contains the statements executed by the method.



# Simple Method Example


class Student

{

    String name;


    void display()

    {

        System.out.println(name);

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.name = "Alex";


        student.display();

    }

}



Output:


Alex



# Instance Methods


Methods that operate on object data are called instance methods.



They require an object to access them.



Example:


class Student

{

    int marks;


    void showMarks()

    {

        System.out.println(marks);

    }

}



Calling:


student.showMarks();



# Methods with Return Values


A method can return data.



Example:


class Calculator

{

    int add(int a, int b)

    {

        return a + b;

    }


    public static void main(String[] args)

    {

        Calculator calc = new Calculator();


        int result = calc.add(10,20);


        System.out.println(result);

    }

}



Output:


30



# Methods with Parameters


Parameters allow methods to receive values.



Example:


class Student

{

    void display(String name)

    {

        System.out.println(name);

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.display("Alex");

    }

}



Output:


Alex



# Combining Fields and Methods


Fields store object information.


Methods use that information.



Example:


class BankAccount

{

    String accountHolder;

    double balance;


    void deposit(double amount)

    {

        balance = balance + amount;

    }


    void display()

    {

        System.out.println(accountHolder);

        System.out.println(balance);

    }

}



Here:


Fields:


accountHolder


balance



Methods:


deposit()


display()



# Real-World Example: Banking System


Class:


BankAccount



Fields:


- Account number.
- Account holder name.
- Balance.



Methods:


- Deposit money.
- Withdraw money.
- Check balance.



Object:


Customer account.



# Real-World Example: E-Commerce System


Class:


Product



Fields:


- Product name.
- Price.
- Quantity.



Methods:


- Calculate total price.
- Apply discount.
- Display product.



# Real-World Example: Student Management System


Class:


Student



Fields:


- Name.
- Roll number.
- Marks.



Methods:


- Calculate grade.
- Display result.
- Update marks.



# Field and Method Example Program


class Student

{

    String name;

    int marks;


    void display()

    {

        System.out.println(name);

        System.out.println(marks);

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.name = "Alex";

        student.marks = 95;


        student.display();

    }

}



Output:


Alex

95



# Difference Between Fields and Methods



Fields:


- Store data.
- Represent object state.
- Variables inside class.



Methods:


- Perform actions.
- Represent object behavior.
- Contain executable code.



# Advantages of Fields and Methods



## Better Organization


Data and behavior stay together.



## Reusability


Methods can be reused by multiple objects.



## Data Management


Objects maintain their own information.



## Easy Maintenance


Changes can be made easily.



# Common Mistakes



## Declaring Fields Inside Methods


Fields must belong to the class.



## Accessing Instance Variables Without Objects


Instance variables require objects.



## Making All Variables Static


Not every variable should be shared.



# Best Practices


Follow these practices:


- Use meaningful field names.
- Keep fields private when possible.
- Use methods to control data access.
- Keep methods focused on one task.
- Avoid unnecessary fields.



# Key Points


Remember:


- Fields store object data.
- Methods define object behavior.
- Instance variables belong to objects.
- Instance methods operate on object data.
- Objects combine fields and methods.
- Fields and methods together create meaningful objects.



# Summary


Fields and methods are the building blocks of Java classes.


Fields define what an object has, while methods define what an object can do.


Together they allow developers to create powerful object-oriented applications.

`

};


export default lesson3;