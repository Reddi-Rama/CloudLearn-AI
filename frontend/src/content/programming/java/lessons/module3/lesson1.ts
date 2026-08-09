const lesson1 = {

  id: "lesson1",

  title: "Introduction to Control Flow",

  content: `

# Introduction to Control Flow


## Introduction


A Java program normally executes statements from top to bottom.


This execution process is called sequential execution.


Example:


Statement 1


Statement 2


Statement 3



The program executes every statement in the same order.


However, real-world applications cannot work only with sequential execution.


Programs need to make decisions, repeat tasks, and change execution order based on different situations.



For example:


- A bank application checks whether the account balance is sufficient before withdrawal.
- A login system checks whether the username and password are correct.
- An online shopping application applies discounts based on purchase amount.
- A game repeats actions until the player wins or loses.



To handle these situations, Java provides Control Flow Statements.



# What is Control Flow?


Control flow refers to the order in which statements are executed in a program.


It controls:


- Which statement should execute.
- When a statement should execute.
- How many times a statement should execute.



By default, Java follows sequential execution.


Control flow statements allow developers to change this normal execution flow.



# Need for Control Flow Statements


Without control flow:


- Programs cannot make decisions.
- Programs cannot repeat operations.
- Programs cannot respond to user input.
- Complex applications cannot be created.



With control flow:


- Programs become intelligent.
- Different actions can be performed for different situations.
- Repetitive tasks can be automated.
- Application logic becomes flexible.



# Types of Control Flow Statements in Java


Java provides three major categories of control flow statements:



## 1. Decision Making Statements


Decision-making statements allow programs to choose between different paths.



Examples:


- if
- if-else
- else-if ladder
- switch



Example:


If marks are greater than or equal to 35, display Pass.



## 2. Looping Statements


Looping statements execute a block of code repeatedly until a condition becomes false.



Examples:


- while
- do-while
- for



Example:


Printing numbers from 1 to 10.



## 3. Jump Statements


Jump statements change the normal flow of loops or execution.



Examples:


- break
- continue
- labeled break
- labeled continue



# Sequential Execution


## Introduction


Sequential execution is the default execution method in Java.


Statements execute one after another in the order they are written.



Example:


class SequentialExample

{

    public static void main(String[] args)

    {

        System.out.println("Start");

        System.out.println("Processing");

        System.out.println("End");

    }

}



Output:


Start

Processing

End



# Control Flow Example


Without control flow:


class Example

{

    public static void main(String[] args)

    {

        System.out.println("Welcome");

        System.out.println("Checking details");

        System.out.println("Completed");

    }

}



The program always executes all statements.



With control flow:


class Example

{

    public static void main(String[] args)

    {

        int age = 20;


        if(age >= 18)

        {

            System.out.println("Eligible");

        }

    }

}



Output:


Eligible



Here:


The program makes a decision using the condition.



# Control Flow in Real-World Applications



## Banking System


Control flow is used for:


- Checking account balance.
- Verifying PIN.
- Approving transactions.



Example:


If balance is sufficient:


Allow withdrawal.



Otherwise:


Reject transaction.



## E-Commerce System


Used for:


- Checking product availability.
- Applying discounts.
- Processing orders.



Example:


If purchase amount is greater than a limit:


Apply discount.



## Student Management System


Used for:


- Checking pass or fail.
- Calculating grades.
- Generating results.



Example:


If marks are greater than 35:


Student passes.



# Benefits of Control Flow


Control flow provides:


## Decision Making


Programs can choose different actions based on conditions.



## Code Reusability


Loops reduce repeated code.



## Better Program Logic


Applications can handle complex situations.



## Improved Efficiency


Unnecessary execution can be avoided.



# Control Flow Diagram


Program Start


        ↓


Statements


        ↓


Condition Check


        ↓


Decision


        ↓


Execute Required Block


        ↓


Program End



# Best Practices


Follow these practices:


- Keep conditions simple.
- Avoid unnecessary nesting.
- Use meaningful variable names.
- Choose the correct control statement.
- Avoid infinite loops.



# Common Mistakes


## Incorrect Conditions


Wrong conditions may execute unexpected code.



## Infinite Loops


A loop without a proper stopping condition may never end.



## Excessive Nesting


Too many nested conditions reduce readability.



# Key Points


Remember:


- Control flow controls program execution order.
- Java normally executes statements sequentially.
- Decision statements choose different execution paths.
- Loops repeat code execution.
- Jump statements modify normal execution.
- Control flow is essential for building real-world applications.


Control flow statements make Java programs dynamic, flexible, and capable of handling real-world problems.

`

};


export default lesson1;