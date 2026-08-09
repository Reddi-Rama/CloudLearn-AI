const lesson8 = {

  id: "lesson8",

  title: "Static Methods and Static Variables in Java",

  content: `

# Static Methods and Static Variables in Java


## Introduction


In Java, some data and behaviors are common for all objects of a class.


For example:


A company name is common for all employees.


A college name is common for all students.


A bank name is common for all accounts.



Instead of creating separate copies for every object, Java provides the static keyword.



Static members belong to the class rather than individual objects.



# What is a Static Variable?


A static variable is a variable declared using the static keyword.



It belongs to the class and is shared by all objects of that class.



Syntax:


static dataType variableName;



Example:


class Student

{

    String name;

    static String college = "ABC College";

}



Here:


name:


Instance variable.



college:


Static variable.



# Features of Static Variables


Static variables:


- Belong to the class.
- Have only one copy in memory.
- Are shared by all objects.
- Are created when the class is loaded.
- Can be accessed using the class name.



# Static Variable Example


class Student

{

    String name;

    static String college = "ABC College";


    void display()

    {

        System.out.println(name);

        System.out.println(college);

    }


    public static void main(String[] args)

    {

        Student student1 = new Student();

        Student student2 = new Student();


        student1.name = "Alex";

        student2.name = "John";


        student1.display();

        student2.display();

    }

}



Output:


Alex

ABC College

John

ABC College



Explanation:


The college variable is shared by both objects.



# Memory Representation of Static Variables


Instance variable:


Each object gets separate memory.



Example:


student1:


name



student2:


name



Static variable:


Only one shared copy.



Example:


college



# Modifying Static Variables


If one object changes a static variable, the change affects all objects.



Example:


class Student

{

    static String college = "ABC College";


    public static void main(String[] args)

    {

        Student student1 = new Student();

        Student student2 = new Student();


        student1.college = "XYZ College";


        System.out.println(student2.college);

    }

}



Output:


XYZ College



Explanation:


Both objects share the same static variable.



# What is a Static Method?


A static method is a method declared using the static keyword.



It belongs to the class instead of objects.



Syntax:


static returnType methodName()

{

    statements;

}



Example:


class Calculator

{

    static int add(int a, int b)

    {

        return a + b;

    }

}



# Calling Static Methods


Static methods can be called using the class name.



Example:


Calculator.add(10,20);



No object creation is required.



# Static Method Example


class Calculator

{

    static int multiply(int a, int b)

    {

        return a * b;

    }


    public static void main(String[] args)

    {

        int result = Calculator.multiply(5,4);


        System.out.println(result);

    }

}



Output:


20



# Rules of Static Methods



Static methods:


- Belong to the class.
- Can directly access static members.
- Cannot directly access instance members.
- Cannot use this keyword.
- Can be called without objects.



# Static Method Accessing Static Variable


Example:


class Counter

{

    static int count = 0;


    static void increase()

    {

        count++;

    }


    public static void main(String[] args)

    {

        increase();

        increase();


        System.out.println(count);

    }

}



Output:


2



# Static Method Cannot Access Instance Variable


Example:


class Example

{

    int number = 10;


    static void display()

    {

        System.out.println(number);

    }

}



Error:


Non-static variable cannot be referenced from a static context.



Reason:


Instance variables belong to objects.



# Static Block


A static block is used to initialize static variables.



Syntax:


static

{

    statements;

}



Example:


class Example

{

    static int number;


    static

    {

        number = 100;

    }


    public static void main(String[] args)

    {

        System.out.println(number);

    }

}



Output:


100



# Execution Order of Static Members


When a Java class runs:


1. Static variables are initialized.


2. Static blocks execute.


3. main() method starts.



# Static Method Example: Banking System


class Bank

{

    static String bankName = "ABC Bank";


    static void displayBank()

    {

        System.out.println(bankName);

    }


    public static void main(String[] args)

    {

        Bank.displayBank();

    }

}



Output:


ABC Bank



# Static Method Example: E-Commerce System


class ShoppingSystem

{

    static double tax = 18;


    static void displayTax()

    {

        System.out.println(tax);

    }


    public static void main(String[] args)

    {

        ShoppingSystem.displayTax();

    }

}



Output:


18.0



# Static Method Example: Student Management System


class Student

{

    static String university = "XYZ University";


    static void displayUniversity()

    {

        System.out.println(university);

    }


    public static void main(String[] args)

    {

        Student.displayUniversity();

    }

}



Output:


XYZ University



# Utility Classes Using Static Methods


Many Java utility classes use static methods.



Examples:


Math class:


Math.sqrt()


Math.max()



Arrays class:


Arrays.sort()



These methods are static because they do not need object-specific data.



# Example Utility Class


class MathUtility

{

    static int square(int number)

    {

        return number * number;

    }


    public static void main(String[] args)

    {

        System.out.println(MathUtility.square(5));

    }

}



Output:


25



# Difference Between Static Variable and Instance Variable



## Static Variable


- Belongs to class.
- Shared by all objects.
- One copy exists.
- Accessed using class name.



Example:


companyName



## Instance Variable


- Belongs to object.
- Separate copy for each object.
- Accessed using object reference.



Example:


employeeName



# Difference Between Static Method and Instance Method



Static Method:


- Belongs to class.
- Called without object.
- Accesses static members directly.



Instance Method:


- Belongs to object.
- Requires object creation.
- Accesses instance data.



# Advantages of Static Members



## Memory Efficiency


Only one copy of static variables exists.



## Easy Access


Static methods can be called using class names.



## Code Organization


Common functionality can be grouped together.



## Reusability


Utility methods can be reused easily.



# Common Mistakes



## Making Everything Static


Only shared data should be static.



## Accessing Instance Members in Static Methods


Not directly allowed.



## Using Static for Object Data


Object-specific data should not be static.



# Best Practices


Follow these practices:


- Use static variables for shared information.
- Use static methods for independent operations.
- Avoid unnecessary static members.
- Keep object-specific data as instance members.
- Use class names to access static members.



# Real-World Applications



## Banking Applications


Static:


- Bank name.
- Interest rate.



Instance:


- Account holder.
- Account balance.



## E-Commerce Applications


Static:


- Company name.
- Tax percentage.



Instance:


- Product name.
- Product price.



## Student Applications


Static:


- University name.
- Course information.



Instance:


- Student name.
- Marks.



# Key Points


Remember:


- Static members belong to classes.
- Static variables have one shared copy.
- Static methods can be called without objects.
- Static methods cannot directly access instance members.
- Static blocks initialize static data.
- Utility classes commonly use static methods.



# Summary


Static variables and methods allow Java programs to manage shared data and common operations efficiently.


They are essential for creating utility classes, configuration values, and class-level functionality in professional Java applications.

`

};


export default lesson8;