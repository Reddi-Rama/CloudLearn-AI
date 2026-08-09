const lesson11 = {

  id: "lesson11",

  title: "Scope and Lifetime of Variables in Methods",

  content: `

# Scope and Lifetime of Variables in Methods


## Introduction


Variables are one of the most important parts of Java programming.


A variable stores data that can be used during program execution.


However, every variable has:


- A specific area where it can be accessed.
- A specific duration for which it exists.



These concepts are called:


1. Scope of a Variable


2. Lifetime of a Variable



Understanding scope and lifetime helps programmers write efficient and error-free Java programs.



# What is Scope of a Variable?


Scope defines the region of a program where a variable can be accessed or used.



In simple words:


Scope tells where a variable is visible.



Example:


A variable created inside a method cannot be accessed outside that method.



# Types of Variable Scope in Java


Java variables are mainly classified based on where they are declared:



1. Local Variables


2. Instance Variables


3. Static Variables



# 1. Local Variables


A local variable is a variable declared inside a method, constructor, or block.



Features:


- Accessible only inside the declared block.
- Created when the block starts execution.
- Destroyed when the block ends.



Example:


class LocalExample

{

    public static void main(String[] args)

    {

        int number = 10;


        System.out.println(number);

    }

}



Output:


10



Here:


number is a local variable.



# Local Variable Inside Method


Example:


class Example

{

    static void display()

    {

        int value = 100;


        System.out.println(value);

    }


    public static void main(String[] args)

    {

        display();

    }

}



Output:


100



Explanation:


value can only be accessed inside display().



# Accessing Local Variable Outside Method


Example:


class Example

{

    static void display()

    {

        int value = 100;

    }


    public static void main(String[] args)

    {

        System.out.println(value);

    }

}



This gives an error because value exists only inside display().



# 2. Instance Variables


Instance variables are variables declared inside a class but outside methods.



Features:


- Belong to objects.
- Each object has its own copy.
- Exist as long as the object exists.



Example:


class Student

{

    int marks;


    void display()

    {

        System.out.println(marks);

    }

}



# 3. Static Variables


Static variables are declared using the static keyword.



Features:


- Belong to the class.
- Shared by all objects.
- Exist throughout program execution.



Example:


class Example

{

    static int count = 0;

}



# What is Lifetime of a Variable?


Lifetime refers to the duration for which a variable exists in memory.



It answers:


"When is the variable created and when is it destroyed?"



# Lifetime of Local Variables


Local variables:


- Created when the method starts execution.
- Destroyed when the method finishes.



Example:


class Example

{

    static void display()

    {

        int number = 10;

    }


    public static void main(String[] args)

    {

        display();

    }

}



The variable number exists only during display() execution.



# Lifetime of Instance Variables


Instance variables:


- Created when an object is created.
- Destroyed when the object is removed from memory.



Example:


Student s = new Student();



The variables inside Student exist with the object.



# Lifetime of Static Variables


Static variables:


- Created when the class is loaded.
- Exist until the program ends or class is unloaded.



# Variable Scope Example


class ScopeExample

{

    static void calculate()

    {

        int value = 50;


        if(value > 0)

        {

            int result = 100;


            System.out.println(result);

        }


        System.out.println(value);

    }


    public static void main(String[] args)

    {

        calculate();

    }

}



Output:


100

50



Explanation:


value is available throughout the method.


result is available only inside the if block.



# Block Scope


Variables declared inside blocks have limited scope.



Example:


class BlockExample

{

    public static void main(String[] args)

    {

        {

            int number = 20;


            System.out.println(number);

        }

    }

}



The variable exists only inside the block.



# Variable Scope Example: Banking System


class BankingSystem

{

    double balance = 5000;


    void withdraw(double amount)

    {

        double remaining = balance - amount;


        System.out.println(remaining);

    }

}



Here:


balance:


Instance variable.



amount:


Method parameter.



remaining:


Local variable.



# Variable Scope Example: E-Commerce System


class ShoppingSystem

{

    double price = 1000;


    void calculateDiscount()

    {

        double discount = 100;


        System.out.println(price - discount);

    }

}



# Variable Scope Example: Student Management System


class StudentSystem

{

    int marks;


    void display()

    {

        int grade = 90;


        System.out.println(grade);

    }

}



# Scope and Method Parameters


Method parameters are local variables.



Example:


void calculate(int number)

{

}



number exists only during method execution.



# Variable Shadowing


When a local variable has the same name as an instance variable, it is called variable shadowing.



Example:


class Example

{

    int value = 50;


    void display(int value)

    {

        System.out.println(value);

    }

}



The parameter value hides the instance variable.



# Using this Keyword


The this keyword is used to access instance variables when names are the same.



Example:


class Example

{

    int value;


    Example(int value)

    {

        this.value = value;

    }

}



# Advantages of Understanding Scope and Lifetime



## Better Memory Management


Variables exist only when required.



## Avoid Naming Conflicts


Helps prevent variable-related errors.



## Better Code Organization


Improves program structure.



## Easier Debugging


Makes variable behavior predictable.



# Common Mistakes



## Accessing Local Variables Outside Scope


Not allowed.



## Forgetting Initialization


Local variables must be initialized before use.



## Confusing Instance and Local Variables


Understand where variables are declared.



# Best Practices


Follow these practices:


- Declare variables close to where they are used.
- Use meaningful variable names.
- Avoid unnecessary global variables.
- Keep variable scope as small as possible.
- Understand object and method lifetime.



# Real-World Applications



## Banking Systems


Variables:


account balance


transaction amount


temporary calculations



## E-Commerce Systems


Variables:


product price


discount


cart total



## Student Systems


Variables:


marks


grade


student details



# Key Points


Remember:


- Scope defines where a variable can be accessed.
- Lifetime defines how long a variable exists.
- Local variables exist inside methods or blocks.
- Instance variables belong to objects.
- Static variables belong to classes.
- Proper scope management improves program quality.


Understanding variable scope and lifetime helps you write clean, efficient, and maintainable Java programs.

`

};


export default lesson11;