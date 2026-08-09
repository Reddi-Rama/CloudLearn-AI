const lesson3 = {

  id: "lesson3",

  title: "if Statement in Java",

  content: `

# if Statement in Java


## Introduction


Decision making is one of the most important concepts in programming.


Programs often need to execute certain instructions only when a particular condition is satisfied.


Java provides the if statement to perform simple decision making.



Example:


A banking application should allow withdrawal only when the account has sufficient balance.


A student system should display "Pass" only when marks are greater than or equal to the passing mark.



# What is an if Statement?


The if statement is a decision-making statement that executes a block of code only when the given condition is true.



If the condition evaluates to:


true → Execute the code block.


false → Skip the code block.



# Syntax of if Statement


if(condition)

{

    statements;

}



Explanation:


condition:


A boolean expression that returns true or false.



statements:


The code that executes when the condition is true.



# How if Statement Works


Execution flow:


Start


↓


Check condition


↓


Is condition true?


↓


Yes → Execute if block


↓


Continue program


If condition is false:


Skip the if block and continue execution.



# Simple if Statement Example


class IfExample

{

    public static void main(String[] args)

    {

        int age = 20;


        if(age >= 18)

        {

            System.out.println("Eligible to vote");

        }

    }

}



Output:


Eligible to vote



Explanation:


The condition age >= 18 is true, so the statement inside the if block executes.



# if Statement with Variables


Example:


class Example

{

    public static void main(String[] args)

    {

        int marks = 90;


        if(marks >= 35)

        {

            System.out.println("Student Passed");

        }

    }

}



Output:


Student Passed



# if Statement with Relational Operators


The if statement commonly uses relational operators.



Example:


class Example

{

    public static void main(String[] args)

    {

        int number = 10;


        if(number > 0)

        {

            System.out.println("Positive Number");

        }

    }

}



Output:


Positive Number



# if Statement with Logical Operators


Multiple conditions can be combined using logical operators.



Example:


class Example

{

    public static void main(String[] args)

    {

        int age = 25;

        boolean id = true;


        if(age >= 18 && id)

        {

            System.out.println("Access Allowed");

        }

    }

}



Output:


Access Allowed



# Nested Statements Inside if


An if block can contain multiple statements.



Example:


class Example

{

    public static void main(String[] args)

    {

        int number = 10;


        if(number > 0)

        {

            System.out.println("Number is positive");

            System.out.println("Condition is true");

        }

    }

}



Output:


Number is positive

Condition is true



# Multiple if Statements


Java allows multiple independent if statements.



Example:


class Example

{

    public static void main(String[] args)

    {

        int number = 10;


        if(number > 0)

        {

            System.out.println("Positive");

        }


        if(number < 20)

        {

            System.out.println("Less than 20");

        }

    }

}



Output:


Positive

Less than 20



# if Statement Example: Banking System


class BankExample

{

    public static void main(String[] args)

    {

        double balance = 5000;


        double withdrawal = 2000;


        if(balance >= withdrawal)

        {

            System.out.println("Withdrawal Successful");

        }

    }

}



Output:


Withdrawal Successful



# if Statement Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        int amount = 6000;


        if(amount >= 5000)

        {

            System.out.println("Discount Applied");

        }

    }

}



Output:


Discount Applied



# if Statement Example: Student System


class StudentExample

{

    public static void main(String[] args)

    {

        int marks = 75;


        if(marks >= 35)

        {

            System.out.println("Pass");

        }

    }

}



Output:


Pass



# Advantages of if Statement


The if statement provides:


## Decision Making


Programs can execute code based on conditions.



## Better Control


Only required code executes.



## Simple Logic


Easy to understand and implement.



## Real-World Usage


Used in almost every application.



# Common Mistakes



## Using Wrong Comparison Operator


Wrong:


if(age = 18)



Correct:


if(age == 18)



## Missing Braces


Although braces are optional for single statements, using them improves readability.



## Incorrect Condition


Always test conditions with different values.



# Best Practices


Follow these practices:


- Use meaningful conditions.
- Keep if blocks simple.
- Use braces always.
- Avoid deeply nested conditions.
- Write readable code.



# Key Points


Remember:


- The if statement executes code only when the condition is true.
- Conditions must return boolean values.
- if statements use relational and logical operators.
- The code block is skipped when the condition is false.
- if is the foundation of decision making in Java.


The if statement allows Java programs to make simple decisions and execute actions based on conditions.

`

};


export default lesson3;