const lesson8 = {

  id: "lesson8",

  title: "The final Keyword in Java",

  content: `

# The final Keyword in Java


## Introduction


Java provides several keywords that control how classes, methods, and variables behave.



One important keyword is:


final



The final keyword is used to restrict modification.



It prevents:


- Changing values.
- Overriding methods.
- Inheriting classes.



The final keyword helps create secure and predictable programs.



# What is the final Keyword?


The final keyword is a non-access modifier used to restrict changes.



It can be applied to:


1. Variables


2. Methods


3. Classes



# Uses of final Keyword



## 1. final Variables


A final variable cannot be changed after initialization.



It becomes a constant.



## 2. final Methods


A final method cannot be overridden by child classes.



## 3. final Classes


A final class cannot be inherited.



# 1. final Variables in Java


A variable declared with final is called a final variable.



Syntax:


final dataType variableName = value;



Example:


class Example

{

    public static void main(String[] args)

    {

        final int number = 100;


        System.out.println(number);

    }

}



Output:


100



The value cannot be changed.



# Changing final Variable


Example:


final int value = 10;


value = 20;



Output:


Compilation Error



Reason:


Final variables cannot be reassigned.



# final Variables as Constants


Constants are values that never change.



Example:


class MathConstants

{

    final double PI = 3.14159;

}



PI value remains fixed.



# Naming Convention for final Variables


Java convention:


Use uppercase letters.



Example:


final double TAX_RATE = 18.0;


final int MAX_SIZE = 100;



# Blank final Variables


A final variable can be initialized later.



Example:


class Student

{

    final int rollNumber;


    Student(int roll)

    {

        rollNumber = roll;

    }

}



The value is assigned only once.



# final Instance Variables


A final instance variable must be initialized:



- During declaration.


or


- Inside constructor.



Example:


class Employee

{

    final int employeeId;


    Employee(int id)

    {

        employeeId = id;

    }

}



# final Reference Variables


A final reference cannot point to another object.



Example:


final Student student = new Student();



This is not allowed:


student = new Student();



However, object data can still change.



Example:


student.name = "Alex";



The reference is fixed, not the object.



# 2. final Methods in Java


A method declared with final cannot be overridden.



Syntax:


final returnType methodName()

{

}



Example:


class Animal

{

    final void sound()

    {

        System.out.println("Animal Sound");

    }

}



class Dog extends Animal

{

    // Cannot override sound()

}



# Why Use final Methods?


final methods are used when:


- The implementation should not change.
- Security is important.
- Behavior must remain consistent.



# final Method Example


class BankAccount

{

    final void calculateInterest()

    {

        System.out.println("Fixed Interest Calculation");

    }

}



Child classes cannot modify this behavior.



# 3. final Classes in Java


A class declared with final cannot be inherited.



Syntax:


final class ClassName

{

}



Example:


final class Vehicle

{

}



This class cannot have child classes.



# final Class Example


final class SecuritySystem

{

    void access()

    {

        System.out.println("Secure Access");

    }

}



Invalid:


class AdminSystem extends SecuritySystem

{

}



Compilation error.



# Why Use final Classes?


final classes are used when:


- Preventing inheritance.
- Protecting implementation.
- Creating immutable classes.



Examples in Java:


String class is final.



No class can extend String.



# final Keyword Example: Banking System


final class BankSecurity

{

    final String bankCode = "ABC001";


    final void verifyAccount()

    {

        System.out.println("Verification Completed");

    }

}



Security rules cannot be changed.



# final Keyword Example: E-Commerce System


class Product

{

    final int productId;


    Product(int id)

    {

        productId = id;

    }

}



Product ID cannot be changed after creation.



# final Keyword Example: Student Management System


class Student

{

    final int rollNumber;


    Student(int roll)

    {

        rollNumber = roll;

    }

}



A student's roll number remains fixed.



# Difference Between final, finally, and finalize



## final


Keyword.


Used for:


- Variables.
- Methods.
- Classes.



Example:


final int value;



## finally


Block used in exception handling.



Example:


try

{

}

finally

{

}



## finalize


Method related to garbage collection.



Example:


protected void finalize()

{

}



# final Keyword and Inheritance


final affects inheritance in three ways:



final variable:


Cannot change value.



final method:


Cannot override.



final class:


Cannot extend.



# Advantages of final Keyword



## Data Protection


Prevents unwanted changes.



## Security


Important behavior cannot be modified.



## Better Design


Creates predictable code.



## Supports Immutability


Objects can remain unchanged.



# Common Mistakes



## Changing final Variables


Not allowed.



## Extending final Classes


Not allowed.



## Overriding final Methods


Not allowed.



# Best Practices


Follow these practices:


- Use final for constant values.
- Use final methods when behavior should remain fixed.
- Use final classes when inheritance is unnecessary.
- Use meaningful constant names.
- Avoid unnecessary final usage.



# Real-World Applications



## Banking Systems


final:


- Bank codes.
- Security rules.
- Transaction limits.



## E-Commerce Systems


final:


- Product IDs.
- Tax constants.
- System rules.



## Student Systems


final:


- Roll numbers.
- Registration IDs.



# Key Points


Remember:


- final prevents modification.
- final variables cannot change.
- final methods cannot be overridden.
- final classes cannot be inherited.
- final is used for security and stability.
- String is an example of a final class.



# Summary


The final keyword helps developers create stable and secure Java programs by preventing unwanted changes to variables, methods, and classes.


It is an important concept for writing reliable object-oriented applications.

`

};


export default lesson8;