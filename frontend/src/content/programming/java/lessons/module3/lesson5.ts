const lesson5 = {

  id: "lesson5",

  title: "Nested if Statement in Java",

  content: `

# Nested if Statement in Java


## Introduction


Decision-making is an important part of programming.


Sometimes a program needs to check multiple conditions one after another.


For example:


- A bank checks whether a user is logged in, then checks account balance.
- A college system checks eligibility, then checks required marks.
- An online shopping system checks membership, then applies discounts.



For handling multiple dependent conditions, Java provides the nested if statement.



# What is a Nested if Statement?


A nested if statement is an if statement placed inside another if statement.


In other words:


An if statement inside another if block is called nested if.



Syntax:


if(condition1)

{

    if(condition2)

    {

        statements;

    }

}



# How Nested if Works


Execution flow:


Start


↓


Check outer if condition


↓


If true


↓


Check inner if condition


↓


Execute inner block if true


↓


Continue program



If the outer condition is false, the inner condition will not be checked.



# Simple Nested if Example


class NestedIfExample

{

    public static void main(String[] args)

    {

        int age = 25;


        if(age >= 18)

        {

            if(age <= 60)

            {

                System.out.println("Adult");

            }

        }

    }

}



Output:


Adult



Explanation:


First condition checks whether age is at least 18.


Second condition checks whether age is below 60.



# Nested if with Multiple Conditions


Example:


class Example

{

    public static void main(String[] args)

    {

        int marks = 85;


        if(marks >= 35)

        {

            if(marks >= 75)

            {

                System.out.println("Distinction");

            }

        }

    }

}



Output:


Distinction



Explanation:


First condition checks whether the student passed.


Second condition checks whether marks are high enough for distinction.



# Nested if-else Statement


A nested if can also contain an else block.



Example:


class Example

{

    public static void main(String[] args)

    {

        int age = 65;


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


Senior Citizen



# Nested if Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        boolean login = true;

        double balance = 5000;


        if(login)

        {

            if(balance >= 1000)

            {

                System.out.println("Transaction Allowed");

            }

            else

            {

                System.out.println("Low Balance");

            }

        }

        else

        {

            System.out.println("Login Required");

        }

    }

}



Output:


Transaction Allowed



Explanation:


The system first checks login status.


After successful login, it checks account balance.



# Nested if Example: Student Management System


class StudentExample

{

    public static void main(String[] args)

    {

        int marks = 90;

        int attendance = 85;


        if(marks >= 35)

        {

            if(attendance >= 75)

            {

                System.out.println("Eligible for Exam");

            }

            else

            {

                System.out.println("Attendance Shortage");

            }

        }

        else

        {

            System.out.println("Failed");

        }

    }

}



Output:


Eligible for Exam



# Nested if Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        boolean member = true;

        int amount = 6000;


        if(member)

        {

            if(amount >= 5000)

            {

                System.out.println("Premium Discount Applied");

            }

        }

    }

}



Output:


Premium Discount Applied



# Difference Between if-else and Nested if



## if-else


Used when there are two possible outcomes.



Example:


Pass or Fail.



## Nested if


Used when one condition depends on another condition.



Example:


Login success → Check account balance.



# Advantages of Nested if


Nested if provides:


## Multiple Condition Checking


Allows checking conditions step by step.



## Better Control


Dependent decisions can be handled easily.



## Real-World Logic


Business rules can be represented accurately.



# Disadvantages of Nested if


Too many nested conditions can:


- Reduce readability.
- Make debugging difficult.
- Increase program complexity.



# Improving Nested if


Instead of creating very deep nesting:


Avoid:


if(condition1)

{

    if(condition2)

    {

        if(condition3)

        {

        }

    }

}



Prefer:


- Using logical operators.
- Using else-if ladder.
- Creating separate methods.



# Common Mistakes



## Incorrect Nesting


Always ensure braces are properly placed.



## Too Much Nesting


Deep nesting makes programs difficult to maintain.



## Missing Conditions


Every decision path should be handled properly.



# Best Practices


Follow these practices:


- Keep nesting levels minimum.
- Use meaningful conditions.
- Use logical operators when possible.
- Write readable code.
- Test every possible condition.



# Real-World Applications


Nested if statements are used in:


- Banking systems.
- Authentication systems.
- Healthcare applications.
- Shopping applications.
- Result processing systems.



# Key Points


Remember:


- Nested if means an if statement inside another if statement.
- Inner if executes only when outer if condition is true.
- It is useful for dependent conditions.
- Excessive nesting should be avoided.
- Logical operators can sometimes replace nested conditions.


Nested if statements help Java programs handle complex decision-making situations by checking conditions step by step.

`

};


export default lesson5;