const lesson2 = {

  id: "lesson2",

  title: "Decision Making in Java",

  content: `

# Decision Making in Java


## Introduction


Programs often need to make decisions based on different situations.


In real-world applications, a program should not execute the same code every time.


It should choose different actions depending on conditions.


Examples:


- A bank checks whether a customer has enough balance before withdrawal.
- A website checks whether login credentials are correct.
- A shopping application applies discounts based on purchase amount.
- A student system checks whether marks are enough to pass.



To handle these situations, Java provides decision-making statements.



# What is Decision Making?


Decision making is the process of choosing a particular block of code for execution based on a condition.


A condition is an expression that returns:


true


or


false



Example:


age >= 18



If the condition is true:


Execute one block of code.



If the condition is false:


Execute another block or skip execution.



# Need for Decision Making Statements


Without decision-making statements:


- Programs cannot react to different situations.
- Every user would get the same output.
- Complex applications cannot be developed.



With decision-making statements:


- Programs become intelligent.
- Different actions can be performed for different inputs.
- Business logic can be implemented easily.



# Types of Decision Making Statements in Java


Java provides the following decision-making statements:


1. if Statement


2. if-else Statement


3. nested if Statement


4. else-if Ladder


5. switch Statement



# How Decision Making Works


The general flow of decision making:


Start


↓


Check Condition


↓


Condition True?


↓


Execute Required Block


↓


Continue Program Execution



# Conditions in Java


Decision statements use relational and logical operators to create conditions.



Examples:


## Relational Conditions


marks >= 35


age < 18


salary == 50000



## Logical Conditions


age >= 18 && hasId


marks >= 40 || attendance >= 75



# Simple Decision Example


class DecisionExample

{

    public static void main(String[] args)

    {

        int marks = 80;


        if(marks >= 35)

        {

            System.out.println("Pass");

        }

    }

}



Output:


Pass



Explanation:


The condition marks >= 35 is true, so the statement inside the if block executes.



# Decision Making Flow


A decision statement contains:


## Condition


A logical expression that returns true or false.



## Statement Block


The code executed when the condition is satisfied.



Example:


if(condition)

{

    statements;

}



# Real-World Applications of Decision Making



## Banking System


Decision making is used for:


- Checking account balance.
- Verifying transactions.
- Approving loans.



Example:


If balance is greater than withdrawal amount:


Allow withdrawal.



Otherwise:


Reject transaction.



## E-Commerce System


Used for:


- Applying discounts.
- Checking product availability.
- Verifying payments.



Example:


If purchase amount is greater than 5000:


Apply discount.



## Student Management System


Used for:


- Checking pass or fail.
- Assigning grades.
- Calculating results.



Example:


If marks are greater than or equal to 35:


Pass.



# Decision Making with Boolean Variables


Boolean values can also be used as conditions.



Example:


class Example

{

    public static void main(String[] args)

    {

        boolean isLoggedIn = true;


        if(isLoggedIn)

        {

            System.out.println("Welcome User");

        }

    }

}



Output:


Welcome User



# Multiple Conditions


Java allows multiple conditions using logical operators.



Example:


class Example

{

    public static void main(String[] args)

    {

        int age = 25;

        boolean idAvailable = true;


        if(age >= 18 && idAvailable)

        {

            System.out.println("Access Granted");

        }

    }

}



Output:


Access Granted



# Advantages of Decision Making


Decision statements provide:


## Flexibility


Programs can respond differently to different inputs.



## Better User Experience


Applications can provide appropriate responses.



## Efficient Execution


Only required code blocks are executed.



## Real-World Logic


Business rules can be implemented easily.



# Common Mistakes



## Using Assignment Instead of Comparison


Wrong:


if(age = 18)



Correct:


if(age == 18)



## Incorrect Conditions


A wrong condition can produce unexpected results.



## Missing Braces


Braces improve readability and avoid errors.



# Best Practices


Follow these practices:


- Write clear conditions.
- Use meaningful variable names.
- Avoid very complex conditions.
- Use parentheses for clarity.
- Test different possible inputs.



# Key Points


Remember:


- Decision making allows programs to choose different paths.
- Conditions always produce true or false results.
- Java provides if, if-else, nested if, else-if, and switch.
- Relational and logical operators are used to create conditions.
- Decision statements are essential for real-world applications.


Decision-making statements make Java programs intelligent by allowing them to respond differently based on situations.

`

};


export default lesson2;