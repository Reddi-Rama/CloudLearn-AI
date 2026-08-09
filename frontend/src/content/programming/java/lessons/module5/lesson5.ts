const lesson5 = {

  id: "lesson5",

  title: "Default Constructor and Parameterized Constructor in Java",

  content: `

# Default Constructor and Parameterized Constructor in Java


## Introduction


Constructors are special methods used to initialize objects in Java.


When an object is created, a constructor executes automatically.


Java provides different types of constructors:


- Default Constructor.
- Parameterized Constructor.



These constructors help developers create objects with default values or customized values.



# What is a Constructor?


A constructor is a special member of a class that initializes objects.



Characteristics:


- Constructor name must be the same as the class name.
- It does not have a return type.
- It is automatically called when an object is created.
- It initializes instance variables.



Example:


class Student

{

    Student()

    {

        System.out.println("Constructor Executed");

    }

}



# Types of Constructors


Java mainly supports two types of constructors:



## 1. Default Constructor


## 2. Parameterized Constructor



# Default Constructor


A constructor that does not contain any parameters is called a default constructor.



Syntax:


class ClassName

{

    ClassName()

    {

        statements;

    }

}



# Default Constructor Example


class Student

{

    String name;

    int marks;


    Student()

    {

        name = "Unknown";

        marks = 0;

    }


    void display()

    {

        System.out.println(name);

        System.out.println(marks);

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.display();

    }

}



Output:


Unknown

0



Explanation:


The constructor assigns default values when the object is created.



# How Default Constructor Works


Statement:


Student student = new Student();



Execution:


1. Memory is allocated for the object.


2. Default constructor is called.


3. Variables receive initial values.


4. Object becomes ready to use.



# Java Provided Default Constructor


If a class does not contain any constructor, Java automatically creates a default constructor.



Example:


class Student

{

    String name;

    int marks;

}



Java internally provides:


Student()

{

}



However, if we create any constructor manually, Java does not provide one automatically.



# Default Constructor Example: Banking System


class BankAccount

{

    String accountType;

    double balance;


    BankAccount()

    {

        accountType = "Savings";

        balance = 0;

    }


    void display()

    {

        System.out.println(accountType);

        System.out.println(balance);

    }

}



Output:


Savings

0.0



# Default Constructor Example: E-Commerce System


class Product

{

    String name;

    double price;


    Product()

    {

        name = "No Product";

        price = 0;

    }

}



A product object gets default information.



# Parameterized Constructor


A constructor that accepts parameters is called a parameterized constructor.



It allows objects to be created with specific values.



Syntax:


class ClassName

{

    ClassName(parameters)

    {

        statements;

    }

}



# Parameterized Constructor Example


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



Explanation:


Values are passed during object creation.



# Multiple Objects Using Parameterized Constructor


Example:


class Student

{

    String name;


    Student(String name)

    {

        this.name = name;

    }


    void display()

    {

        System.out.println(name);

    }


    public static void main(String[] args)

    {

        Student student1 = new Student("Alex");

        Student student2 = new Student("John");


        student1.display();

        student2.display();

    }

}



Output:


Alex

John



# Parameterized Constructor Example: Banking System


class Account

{

    String holderName;

    double balance;


    Account(String name, double amount)

    {

        holderName = name;

        balance = amount;

    }

}



Object creation:


Account account = new Account("Alex",10000);



Values are initialized during creation.



# Parameterized Constructor Example: E-Commerce System


class Product

{

    String productName;

    double price;


    Product(String name, double cost)

    {

        productName = name;

        price = cost;

    }

}



Object:


Product product = new Product("Laptop",60000);



# Parameterized Constructor Example: Student Management System


class Student

{

    String name;

    int rollNumber;


    Student(String studentName, int roll)

    {

        name = studentName;

        rollNumber = roll;

    }

}



Object:


Student student = new Student("Alex",101);



# Difference Between Default and Parameterized Constructor



## Default Constructor


- Has no parameters.
- Assigns default values.
- Created automatically if no constructor exists.
- Used when no initial data is required.



Example:


Student()



## Parameterized Constructor


- Accepts parameters.
- Assigns custom values.
- Created manually.
- Used when objects need specific data.



Example:


Student(String name)



# Constructor Overloading


Creating multiple constructors in the same class with different parameters is called constructor overloading.



Example:


class Student

{

    Student()

    {

    }


    Student(String name)

    {

    }


    Student(String name, int marks)

    {

    }

}



The compiler decides which constructor to call based on arguments.



# Using this Keyword


The this keyword refers to the current object.



Example:


class Student

{

    String name;


    Student(String name)

    {

        this.name = name;

    }

}



this.name:


Instance variable.



name:


Constructor parameter.



# Advantages of Constructors



## Automatic Initialization


Objects are initialized automatically.



## Cleaner Code


Values are assigned during creation.



## Better Object Control


Objects always start with valid data.



## Improved Maintainability


Classes become easier to manage.



# Common Mistakes



## Adding Return Type


Wrong:


void Student()



Correct:


Student()



## Wrong Constructor Name


Constructor name must match class name.



## Not Initializing Required Data


Use parameterized constructors when necessary.



# Best Practices


Follow these practices:


- Use default constructors for simple initialization.
- Use parameterized constructors for customized objects.
- Use this keyword for clarity.
- Keep constructors simple.
- Initialize objects with meaningful values.



# Real-World Applications



## Banking Applications


Default constructor:


Creates empty account.


Parameterized constructor:


Creates account with customer details.



## E-Commerce Applications


Default constructor:


Creates basic product.


Parameterized constructor:


Creates product with name and price.



## Student Applications


Default constructor:


Creates empty student object.


Parameterized constructor:


Creates student with complete details.



# Key Points


Remember:


- Default constructor has no parameters.
- Parameterized constructor accepts values.
- Constructors run automatically during object creation.
- Constructors initialize object data.
- Java supports multiple constructors through overloading.
- this keyword helps access current object variables.



# Summary


Default and parameterized constructors provide different ways to initialize objects.


Default constructors create objects with predefined values, while parameterized constructors allow developers to create objects with customized data.


Understanding constructors is essential for building effective Java object-oriented applications.

`

};


export default lesson5;