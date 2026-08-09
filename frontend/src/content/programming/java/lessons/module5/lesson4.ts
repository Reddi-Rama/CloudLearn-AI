const lesson4 = {

  id: "lesson4",

  title: "Constructors in Java",

  content: `

# Constructors in Java


## Introduction


When an object is created in Java, it often requires initial values.


For example:


A Student object may need:


- Name.
- Roll number.
- Marks.



A BankAccount object may need:


- Account holder name.
- Account number.
- Initial balance.



Constructors are used to initialize objects when they are created.



# What is a Constructor?


A constructor is a special method used to initialize objects.



A constructor is automatically called when an object is created.



Example:


Student student = new Student();



When this statement executes, the constructor of Student class runs automatically.



# Features of Constructors



Constructors:


- Have the same name as the class.
- Do not have a return type.
- Are called automatically.
- Initialize object data.
- Execute when objects are created.



# Constructor Syntax


Syntax:


class ClassName

{

    ClassName()

    {

        statements;

    }

}



Example:


class Student

{

    Student()

    {

        System.out.println("Constructor Called");

    }

}



# Simple Constructor Example


class Student

{

    Student()

    {

        System.out.println("Student Object Created");

    }


    public static void main(String[] args)

    {

        Student student = new Student();

    }

}



Output:


Student Object Created



Explanation:


When the object is created:


Student student = new Student();



The constructor executes automatically.



# Why Do We Need Constructors?


Without constructors:


We create objects first.


Then assign values separately.



Example:


Student student = new Student();


student.name = "Alex";


student.marks = 90;



With constructors:


Values are assigned during object creation.



Example:


Student student = new Student("Alex",90);



This makes code cleaner and safer.



# Types of Constructors in Java


Java constructors are mainly:


1. Default Constructor


2. Parameterized Constructor



# Default Constructor


A constructor without parameters is called a default constructor.



Example:


class Student

{

    Student()

    {

        System.out.println("Default Constructor");

    }


    public static void main(String[] args)

    {

        Student student = new Student();

    }

}



Output:


Default Constructor



# Default Constructor Provided by Java


If a class does not contain any constructor, Java automatically provides a default constructor.



Example:


class Student

{

    String name;

}



Java internally creates:


Student()

{

}



# Parameterized Constructor


A constructor that accepts parameters is called a parameterized constructor.



It is used to initialize objects with specific values.



Example:


class Student

{

    String name;

    int marks;


    Student(String studentName, int studentMarks)

    {

        name = studentName;

        marks = studentMarks;

    }


    void display()

    {

        System.out.println(name);

        System.out.println(marks);

    }


    public static void main(String[] args)

    {

        Student student = new Student("Alex",95);


        student.display();

    }

}



Output:


Alex

95



# Constructor Overloading


Creating multiple constructors with different parameters is called constructor overloading.



Example:


class Student

{

    String name;

    int marks;


    Student()

    {

        name = "Unknown";

        marks = 0;

    }


    Student(String name)

    {

        this.name = name;

    }


    Student(String name, int marks)

    {

        this.name = name;

        this.marks = marks;

    }

}



The class has three constructors.



# Using this Keyword in Constructors


The this keyword refers to the current object.



It is commonly used when constructor parameters and instance variables have the same name.



Example:


class Student

{

    String name;


    Student(String name)

    {

        this.name = name;

    }

}



Here:


this.name:


Instance variable.



name:


Constructor parameter.



# Constructor Example: Banking System


class BankAccount

{

    String accountHolder;

    double balance;


    BankAccount(String holder, double amount)

    {

        accountHolder = holder;

        balance = amount;

    }


    void display()

    {

        System.out.println(accountHolder);

        System.out.println(balance);

    }

}



Object creation:


BankAccount account = new BankAccount("Alex",5000);



Constructor initializes:


accountHolder


balance



# Constructor Example: E-Commerce System


class Product

{

    String productName;

    double price;


    Product(String name, double cost)

    {

        productName = name;

        price = cost;

    }


    void display()

    {

        System.out.println(productName);

        System.out.println(price);

    }

}



Object:


Product product = new Product("Laptop",60000);



# Constructor Example: Student Management System


class Student

{

    String name;

    int rollNumber;


    Student(String studentName, int roll)

    {

        name = studentName;

        rollNumber = roll;

    }


    void display()

    {

        System.out.println(name);

        System.out.println(rollNumber);

    }

}



# Constructor Execution Order


When an object is created:


1. Memory is allocated.


2. Constructor is called.


3. Instance variables are initialized.


4. Object becomes ready for use.



Example:


Student student = new Student();



Execution:


Allocate memory


↓

Call constructor


↓

Initialize data


↓

Object available



# Constructor vs Method



Constructor:


- Same name as class.
- No return type.
- Called automatically.
- Initializes objects.



Method:


- Any valid name.
- Has return type or void.
- Called manually.
- Performs operations.



# Advantages of Constructors



## Object Initialization


Objects start with valid values.



## Cleaner Code


No need to assign values separately.



## Data Consistency


Objects are created in a controlled way.



## Better Object Design


Classes become easier to use.



# Common Mistakes



## Giving Return Type


Incorrect:


void Student()



Correct:


Student()



## Different Constructor Name


Constructor name must match class name.



## Forgetting Parameters


Use appropriate constructors for required data.



# Best Practices


Follow these practices:


- Initialize objects properly.
- Use parameterized constructors when required.
- Use this keyword for clarity.
- Avoid unnecessary constructors.
- Keep constructors simple.



# Real-World Applications



## Banking Applications


Constructors initialize:


- Account details.
- Customer information.
- Initial balance.



## E-Commerce Applications


Constructors initialize:


- Product details.
- Price.
- Category.



## Student Applications


Constructors initialize:


- Student name.
- Roll number.
- Marks.



# Key Points


Remember:


- Constructors initialize objects.
- They have the same name as the class.
- They do not return values.
- They execute automatically.
- Java supports constructor overloading.
- Parameterized constructors provide customized object creation.



# Summary


Constructors are essential in Java OOP because they prepare objects for use.


They provide a clean way to initialize object data and create reliable object-oriented applications.

`

};


export default lesson4;