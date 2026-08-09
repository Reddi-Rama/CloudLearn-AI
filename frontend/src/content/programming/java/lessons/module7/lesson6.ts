const lesson6 = {

  id: "lesson6",

  title: "Custom Exceptions in Java",

  content: `

# Custom Exceptions in Java


## Introduction


Java provides many built-in exceptions such as:


- ArithmeticException.
- NullPointerException.
- IOException.
- SQLException.



However, real-world applications often have their own business rules and requirements.



Examples:


Banking System:


- Insufficient balance.
- Invalid account number.
- Withdrawal limit exceeded.



E-Commerce System:


- Product unavailable.
- Invalid coupon.
- Payment failed.



Student System:


- Invalid marks.
- Invalid registration details.



For these situations, developers can create their own exceptions called:



Custom Exceptions



# What is a Custom Exception?


A custom exception is a user-defined exception created by extending existing exception classes.



Developers create custom exceptions when built-in exceptions do not clearly describe a specific problem.



# Why Do We Need Custom Exceptions?


Built-in exceptions are general.



Example:


Exception


does not clearly explain:


"Insufficient bank balance"



A custom exception provides meaningful information.



Example:


InsufficientBalanceException



This makes applications:


- Easier to understand.
- Easier to debug.
- More maintainable.



# Creating Custom Exceptions


Custom exceptions are created by extending:



1. Exception


or


2. RuntimeException



# Types of Custom Exceptions


Custom exceptions can be:



## 1. Checked Custom Exception


Created by extending:


Exception



The compiler forces handling.



Example:


class InvalidAgeException extends Exception

{

}



## 2. Unchecked Custom Exception


Created by extending:


RuntimeException



Handling is optional.



Example:


class InvalidInputException extends RuntimeException

{

}



# Creating a Checked Custom Exception


Example:


class InvalidAgeException extends Exception

{

    InvalidAgeException(String message)

    {

        super(message);

    }

}



Explanation:


The exception extends Exception, so it becomes a checked exception.



# Using Custom Exception


Example:


class VotingSystem

{

    void checkAge(int age) throws InvalidAgeException

    {

        if(age < 18)

        {

            throw new InvalidAgeException("Not eligible for voting");

        }


        System.out.println("Eligible");

    }

}



# Complete Custom Exception Example


class InvalidAgeException extends Exception

{

    InvalidAgeException(String message)

    {

        super(message);

    }

}



class Main

{

    static void checkAge(int age) throws InvalidAgeException

    {

        if(age < 18)

        {

            throw new InvalidAgeException("Age must be 18 or above");

        }


        System.out.println("Eligible");

    }


    public static void main(String[] args)

    {

        try

        {

            checkAge(15);

        }


        catch(InvalidAgeException e)

        {

            System.out.println(e.getMessage());

        }

    }

}



Output:


Age must be 18 or above



# Custom Exception with RuntimeException


Unchecked custom exceptions extend RuntimeException.



Example:


class InvalidAmountException extends RuntimeException

{

    InvalidAmountException(String message)

    {

        super(message);

    }

}



# Using Runtime Custom Exception


Example:


class Bank

{

    void withdraw(double amount)

    {

        if(amount <= 0)

        {

            throw new InvalidAmountException("Invalid withdrawal amount");

        }

    }

}



# Custom Exception Constructor


Custom exceptions usually contain constructors.



Example:


class PaymentException extends Exception

{

    PaymentException(String message)

    {

        super(message);

    }

}



The message is passed to the parent Exception class.



# Custom Exception with Additional Data


Custom exceptions can store extra information.



Example:


class InsufficientBalanceException extends Exception

{

    double balance;


    InsufficientBalanceException(double balance)

    {

        this.balance = balance;

    }

}



The exception can store the current balance.



# Custom Exceptions in Banking System


Example:



Exception:


InsufficientBalanceException



Scenario:


Account balance:


5000



Withdrawal request:


10000



Exception:


Insufficient balance



Code:


if(amount > balance)

{

    throw new InsufficientBalanceException();

}



# Custom Exceptions in E-Commerce System


Example:



Exception:


ProductNotAvailableException



Scenario:


Product stock:


0



User tries to purchase.



Code:


if(stock == 0)

{

    throw new ProductNotAvailableException("Product unavailable");

}



# Custom Exceptions in Student Management System


Example:



Exception:


InvalidMarksException



Scenario:


Marks:


-10



Code:


if(marks < 0)

{

    throw new InvalidMarksException("Marks cannot be negative");

}



# Custom Exception Hierarchy


Example:



Throwable


|

Exception


|

ApplicationException


|

InvalidAmountException



Custom exceptions become part of Java's exception hierarchy.



# Advantages of Custom Exceptions



## Meaningful Error Messages


Errors clearly describe the problem.



Example:


Instead of:


Exception



Use:


InsufficientBalanceException



## Better Debugging


Developers quickly identify the issue.



## Business Rule Handling


Application-specific rules can be enforced.



## Cleaner Code


Exception names explain the purpose.



# Custom Exception vs Built-in Exception



## Built-in Exception


Created by Java.



Examples:


IOException


ArithmeticException



## Custom Exception


Created by developers.



Examples:


InvalidPasswordException


PaymentFailedException



# When Should We Create Custom Exceptions?


Create custom exceptions when:



## Business Logic Requires It


Example:


Minimum account balance rule.



## Existing Exceptions Are Not Clear


Example:


Instead of generic Exception.



## Application Needs Specific Handling


Example:


Different responses for different failures.



# Common Mistakes



## Creating Too Many Exceptions


Do not create unnecessary exception classes.



## Using Generic Names


Avoid names like:


MyException



Use meaningful names.



## Extending Wrong Class


Choose Exception or RuntimeException correctly.



# Best Practices


Follow these practices:


- Use descriptive exception names.
- Include useful messages.
- Add constructors.
- Create exceptions for business rules.
- Document when exceptions occur.
- Keep exception hierarchy simple.



# Interview Questions



## What is a custom exception?


A user-defined exception created by extending Exception classes.



## Why create custom exceptions?


To represent application-specific errors.



## Difference between Exception and RuntimeException?


Exception creates checked exceptions; RuntimeException creates unchecked exceptions.



## Can custom exceptions have constructors?


Yes.



# Key Points


Remember:


- Custom exceptions are user-defined exceptions.
- They extend Exception or RuntimeException.
- They represent application-specific problems.
- They improve readability and debugging.
- They are commonly used in enterprise applications.



# Summary


Custom exceptions allow developers to create meaningful error handling for real-world applications.


By creating application-specific exceptions, Java programs become easier to understand, maintain, and debug.

`

};


export default lesson6;