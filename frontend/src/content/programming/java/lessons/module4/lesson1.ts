const lesson1 = {

  id: "lesson1",

  title: "Introduction to Methods",

  content: `

# Introduction to Methods in Java


## Introduction


As Java programs become larger and more complex, writing all the code inside the main() method becomes difficult to manage.


Imagine building a banking application with thousands of lines of code:


- Account creation.
- Money transfer.
- Balance checking.
- Loan calculation.
- Transaction history.


If all the logic is written inside one method, the program becomes:


- Difficult to understand.
- Difficult to debug.
- Difficult to modify.
- Difficult to reuse.



To solve this problem, Java provides methods.



# What is a Method?


A method is a block of code that performs a specific task.


Instead of writing the same logic repeatedly, we can create a method once and call it whenever required.



Example:


A method named calculateTotal() can calculate the total price of products.


A method named checkBalance() can check account balance.



# Why Do We Need Methods?


Methods help programmers divide large programs into smaller manageable parts.



Without methods:


- Code becomes lengthy.
- Repeated code increases.
- Maintenance becomes difficult.



With methods:


- Code becomes organized.
- Logic can be reused.
- Debugging becomes easier.
- Programs become modular.



# Real-World Example


Consider an online shopping application.



Without methods:


All operations are written together:


- Login verification.
- Product search.
- Cart calculation.
- Payment processing.
- Order confirmation.



With methods:


Each task can have its own method:


login()


searchProduct()


calculateCart()


processPayment()


confirmOrder()



Each method performs one specific responsibility.



# Method Concept


A method contains:


1. Method Name


A unique name used to identify the method.



Example:


calculateSalary



2. Method Body


The set of instructions that execute when the method is called.



3. Parameters


Values passed to a method for processing.



4. Return Value


The result returned by a method after execution.



# Basic Structure of a Method


returnType methodName()

{

    statements;

}



Example:


void displayMessage()

{

    System.out.println("Welcome to Java");

}



Explanation:


void:


The method does not return any value.



displayMessage:


The name of the method.



Method body:


Contains the code to execute.



# Simple Method Example


class MethodExample

{

    static void display()

    {

        System.out.println("Learning Java Methods");

    }


    public static void main(String[] args)

    {

        display();

    }

}



Output:


Learning Java Methods



Explanation:


The display() method contains the print statement.


The main() method calls display() to execute it.



# Method Execution Flow


When a method is called:


Step 1:


Program reaches the method call.



Step 2:


Control moves to the method body.



Step 3:


Method statements execute.



Step 4:


Control returns back to the calling location.



# Methods and Code Reusability


One of the biggest advantages of methods is code reuse.



Example:


class Example

{

    static void greet()

    {

        System.out.println("Hello");

    }


    public static void main(String[] args)

    {

        greet();

        greet();

        greet();

    }

}



Output:


Hello

Hello

Hello



The same method is reused multiple times.



# Types of Methods in Java


Java methods can be classified into different types:



## Predefined Methods


Methods already provided by Java libraries.



Examples:


Math.sqrt()


String.length()



## User-Defined Methods


Methods created by programmers.



Example:


calculateTotal()



# Method Example: Banking System


class BankingSystem

{

    static void checkBalance()

    {

        System.out.println("Displaying Account Balance");

    }


    public static void main(String[] args)

    {

        checkBalance();

    }

}



Output:


Displaying Account Balance



# Method Example: Student Management System


class StudentSystem

{

    static void displayResult()

    {

        System.out.println("Displaying Student Result");

    }


    public static void main(String[] args)

    {

        displayResult();

    }

}



Output:


Displaying Student Result



# Method Example: E-Commerce System


class ShoppingSystem

{

    static void calculateBill()

    {

        System.out.println("Calculating Bill");

    }


    public static void main(String[] args)

    {

        calculateBill();

    }

}



Output:


Calculating Bill



# Advantages of Methods


## Code Reusability


A method can be called multiple times without rewriting code.



## Modularity


Large programs can be divided into smaller parts.



## Easy Debugging


Errors can be identified easily.



## Better Maintenance


Changes can be made in one place.



## Improved Readability


Programs become easier to understand.



# Methods in Professional Software Development


Real-world applications are divided into multiple methods.



Examples:


Banking Application:


createAccount()


transferMoney()


generateStatement()



E-Commerce Application:


addProduct()


calculatePrice()


placeOrder()



Healthcare Application:


registerPatient()


generateReport()


scheduleAppointment()



# Common Mistakes


## Writing Everything Inside main()


Large programs should not contain all logic inside main().



## Creating Very Large Methods


A method should perform one specific task.



## Poor Method Names


Avoid names like:


method1()


abc()



Use meaningful names:


calculateTotal()


validateUser()



# Best Practices


Follow these practices:


- Give meaningful method names.
- Keep methods focused on one task.
- Avoid duplicate code.
- Reuse methods whenever possible.
- Keep methods short and readable.



# Key Points


Remember:


- A method is a reusable block of code.
- Methods improve program organization.
- Methods reduce code duplication.
- Methods make debugging easier.
- Every professional Java application uses methods.


Methods are the foundation of modular programming in Java and are essential for building clean, scalable applications.

`

};


export default lesson1;