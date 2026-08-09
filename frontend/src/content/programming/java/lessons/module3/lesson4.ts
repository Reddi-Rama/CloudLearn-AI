const lesson4 = {

  id: "lesson4",

  title: "if-else Statement in Java",

  content: `

# if-else Statement in Java


## Introduction


In programming, many situations require two different actions based on a condition.


For example:


- If the password is correct, allow login; otherwise reject login.
- If the account has enough balance, allow withdrawal; otherwise show insufficient balance.
- If marks are greater than or equal to passing marks, display Pass; otherwise display Fail.



The if statement can execute code only when a condition is true.


To handle both true and false situations, Java provides the if-else statement.



# What is an if-else Statement?


The if-else statement is a decision-making statement that executes one block of code when the condition is true and another block when the condition is false.



Syntax:


if(condition)

{

    statements when condition is true;

}

else

{

    statements when condition is false;

}



# How if-else Works


Execution flow:


Start


↓


Check condition


↓


Condition true?


↓


Yes → Execute if block


↓


No → Execute else block


↓


Continue program



Only one block executes at a time.



# Simple if-else Example


class IfElseExample

{

    public static void main(String[] args)

    {

        int age = 16;


        if(age >= 18)

        {

            System.out.println("Eligible to vote");

        }

        else

        {

            System.out.println("Not eligible to vote");

        }

    }

}



Output:


Not eligible to vote



Explanation:


The condition age >= 18 is false, so the else block executes.



# if-else with Variables


Example:


class Example

{

    public static void main(String[] args)

    {

        int marks = 40;


        if(marks >= 35)

        {

            System.out.println("Pass");

        }

        else

        {

            System.out.println("Fail");

        }

    }

}



Output:


Pass



# if-else with Relational Operators


Example:


class Example

{

    public static void main(String[] args)

    {

        int number = -5;


        if(number > 0)

        {

            System.out.println("Positive Number");

        }

        else

        {

            System.out.println("Negative Number");

        }

    }

}



Output:


Negative Number



# if-else with Logical Operators


Multiple conditions can be combined using logical operators.



Example:


class Example

{

    public static void main(String[] args)

    {

        int age = 20;

        boolean hasId = true;


        if(age >= 18 && hasId)

        {

            System.out.println("Access Granted");

        }

        else

        {

            System.out.println("Access Denied");

        }

    }

}



Output:


Access Granted



# if-else Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        double balance = 5000;

        double amount = 7000;


        if(balance >= amount)

        {

            System.out.println("Transaction Successful");

        }

        else

        {

            System.out.println("Insufficient Balance");

        }

    }

}



Output:


Insufficient Balance



Explanation:


The system checks whether the available balance is enough before processing withdrawal.



# if-else Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        int purchaseAmount = 3000;


        if(purchaseAmount >= 5000)

        {

            System.out.println("Discount Applied");

        }

        else

        {

            System.out.println("No Discount Available");

        }

    }

}



Output:


No Discount Available



# if-else Example: Student System


class StudentExample

{

    public static void main(String[] args)

    {

        int marks = 30;


        if(marks >= 35)

        {

            System.out.println("Student Passed");

        }

        else

        {

            System.out.println("Student Failed");

        }

    }

}



Output:


Student Failed



# Nested if-else


An if or else block can contain another if-else statement.


This is called nested if-else.



Example:


class NestedExample

{

    public static void main(String[] args)

    {

        int age = 20;


        if(age >= 18)

        {

            if(age >= 60)

            {

                System.out.println("Senior Citizen");

            }

            else

            {

                System.out.println("Adult");

            }

        }

        else

        {

            System.out.println("Minor");

        }

    }

}



Output:


Adult



# Difference Between if and if-else



## if Statement


- Executes code only when condition is true.
- Does nothing when condition is false.



Example:


if(age >= 18)

{

    System.out.println("Adult");

}



## if-else Statement


- Provides two execution paths.
- Executes either if block or else block.



Example:


if(age >= 18)

{

    System.out.println("Adult");

}

else

{

    System.out.println("Minor");

}



# Advantages of if-else Statement


Provides:


## Two-Way Decision


Allows programs to handle both true and false conditions.



## Better Program Logic


Applications can respond differently to situations.



## User-Friendly Applications


Programs can display proper messages.



# Common Mistakes



## Missing else Block Logic


Always ensure both situations are handled correctly.



## Incorrect Condition


Wrong conditions may produce unexpected output.



## Too Many Nested if-else Statements


Excessive nesting reduces readability.



# Best Practices


Follow these practices:


- Keep conditions simple.
- Use meaningful messages.
- Use braces for better readability.
- Avoid unnecessary nesting.
- Test both true and false cases.



# Real-World Applications


if-else statements are used in:


- Login authentication.
- Payment processing.
- Loan approval systems.
- Result generation.
- Security validation.
- Shopping discounts.



# Key Points


Remember:


- if-else provides two decision paths.
- if block executes when condition is true.
- else block executes when condition is false.
- Only one block executes.
- It is widely used in real-world applications.


The if-else statement allows Java programs to make decisions and handle both successful and unsuccessful conditions.

`

};


export default lesson4;