const lesson7 = {

  id: "lesson7",

  title: "Instance Members vs Static Members in Java",

  content: `

# Instance Members vs Static Members in Java


## Introduction


In Java classes, members are the variables and methods defined inside a class.



Class members are mainly divided into two categories:


1. Instance Members


2. Static Members



The main difference between them is:


Instance members belong to objects.


Static members belong to the class.



Understanding this difference is important for designing efficient Java applications.



# What are Instance Members?


Instance members are variables and methods that belong to individual objects of a class.



Every object gets its own copy of instance members.



Example:


class Student

{

    String name;

    int marks;


    void display()

    {

        System.out.println(name);

        System.out.println(marks);

    }

}



Here:


name and marks are instance variables.



display() is an instance method.



# Features of Instance Members



Instance members:


- Belong to objects.
- Require object creation to access.
- Have separate copies for each object.
- Store object-specific information.
- Exist as long as the object exists.



# Instance Variable Example


class Student

{

    String name;


    public static void main(String[] args)

    {

        Student student1 = new Student();

        Student student2 = new Student();


        student1.name = "Alex";

        student2.name = "John";


        System.out.println(student1.name);

        System.out.println(student2.name);

    }

}



Output:


Alex

John



Explanation:


Each object has its own copy of name.



# Instance Method Example


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



The method works on object data.



# What are Static Members?


Static members are variables and methods declared using the static keyword.



They belong to the class instead of individual objects.



Example:


class Student

{

    static String college = "ABC College";

}



Here:


college is a static variable.



# Features of Static Members



Static members:


- Belong to the class.
- Are shared by all objects.
- Exist only once in memory.
- Can be accessed without creating objects.
- Are created when the class is loaded.



# Static Variable Example


class Student

{

    String name;

    static String college = "ABC College";


    public static void main(String[] args)

    {

        Student student1 = new Student();

        Student student2 = new Student();


        System.out.println(student1.college);

        System.out.println(student2.college);

    }

}



Output:


ABC College

ABC College



Explanation:


Both objects share the same static variable.



# Static Method Example


class Calculator

{

    static int add(int a, int b)

    {

        return a + b;

    }


    public static void main(String[] args)

    {

        int result = Calculator.add(10,20);


        System.out.println(result);

    }

}



Output:


30



No object is required because add() is static.



# Accessing Instance and Static Members



## Instance Members


Accessed using object reference.



Example:


student.display();



## Static Members


Accessed using class name.



Example:


Student.college;



# Difference Between Instance and Static Members



## Instance Members


Belong to:


Object



Memory:


Created separately for each object.



Access:


Using object name.



Usage:


Object-specific data.



Example:


studentName


marks



## Static Members


Belong to:


Class



Memory:


Only one copy exists.



Access:


Using class name.



Usage:


Common data shared by objects.



Example:


collegeName


companyName



# Instance and Static Members Together


Example:


class Student

{

    String name;

    int marks;


    static String college = "ABC College";


    void display()

    {

        System.out.println(name);

        System.out.println(marks);

        System.out.println(college);

    }

}



Here:


name and marks:


Instance members.



college:


Static member.



# Static Variable Example: Banking System


class BankAccount

{

    String accountHolder;

    double balance;


    static String bankName = "ABC Bank";

}



Here:


accountHolder and balance:


Different for every account.



bankName:


Same for all accounts.



# Static Variable Example: E-Commerce System


class Product

{

    String productName;

    double price;


    static String company = "Online Store";

}



company is shared by all products.



# Static Variable Example: Student Management System


class Student

{

    String name;

    int marks;


    static String university = "XYZ University";

}



All students belong to the same university.



# Static Block


A static block is used to initialize static data.



Example:


class Example

{

    static int number;


    static

    {

        number = 100;

    }

}



The static block executes when the class loads.



# Static Members and Memory


Instance members:


Each object gets separate memory.



Example:


Object 1:


name


marks



Object 2:


name


marks



Static members:


Only one shared memory location.



Example:


college



# Why Use Static Members?


Static members are useful for data that is common for all objects.



Examples:


- Company name.
- College name.
- Bank name.
- Configuration values.



# Why Use Instance Members?


Instance members are useful when every object has different data.



Examples:


- Customer name.
- Account balance.
- Product price.
- Student marks.



# Advantages of Instance Members



## Object-Specific Data


Each object maintains its own values.



## Better Representation


Represents real-world entities accurately.



## Supports Object Behavior


Methods can work with object data.



# Advantages of Static Members



## Memory Efficiency


Only one copy is created.



## Easy Access


Can be accessed using class name.



## Shared Information


Useful for common values.



# Common Mistakes



## Accessing Instance Members from Static Methods


Static methods cannot directly access instance members.



Example:


class Example

{

    int value;


    static void display()

    {

        System.out.println(value);

    }

}



This causes an error.



## Making Everything Static


Not all data should be shared.



## Confusing Class and Object Data


Understand whether data belongs to object or class.



# Best Practices


Follow these practices:


- Use instance members for object-specific data.
- Use static members for shared information.
- Avoid unnecessary static variables.
- Access static members using class names.
- Keep class design clear.



# Real-World Applications



## Banking Systems


Instance:


- Account holder.
- Balance.



Static:


- Bank name.
- Interest rules.



## E-Commerce Systems


Instance:


- Product name.
- Product price.



Static:


- Company name.
- Tax percentage.



## Student Systems


Instance:


- Student name.
- Marks.



Static:


- University name.
- Course information.



# Key Points


Remember:


- Instance members belong to objects.
- Static members belong to classes.
- Instance variables have separate copies.
- Static variables have one shared copy.
- Instance methods require objects.
- Static methods can be called using class names.
- Choose instance or static based on data requirements.



# Summary


Instance and static members help developers decide how data and behavior should be organized in Java programs.


Instance members represent individual objects, while static members represent information shared by all objects.


Understanding this difference is essential for designing efficient object-oriented Java applications.

`

};


export default lesson7;