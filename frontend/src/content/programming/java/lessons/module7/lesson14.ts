const lesson14 = {

  id: "lesson14",

  title: "Assertions in Java",

  content: `

# Assertions in Java


## Introduction


While developing software, programmers often need to check whether certain conditions are true.



For example:



- A value should never be negative.
- A user object should always exist.
- A calculation result should follow a rule.



Java provides a feature called:



Assertions



Assertions are mainly used to identify programming mistakes during development and testing.



# What is an Assertion?


An assertion is a statement used to test assumptions made by programmers.



If the assumption is true:


Program continues.



If the assumption is false:


Java throws an AssertionError.



# Why Do We Need Assertions?


Assertions help developers find logical mistakes early.



Example:



Assumption:


Account balance should never be negative.



If balance becomes negative:


Assertion detects the problem.



# Syntax of Assertions


Java provides two forms of assertions.



## Simple Assertion


assert condition;



Example:


assert age >= 18;



## Assertion with Message


assert condition : message;



Example:


assert age >= 18 : "Age must be greater than 18";



# Simple Assertion Example


class Main

{

    public static void main(String[] args)

    {

        int age = 10;


        assert age >= 18;


        System.out.println("Program continues");

    }

}



Output:


If assertions are enabled:


Exception in thread "main" java.lang.AssertionError



# Assertion with Message Example


class Main

{

    public static void main(String[] args)

    {

        int marks = -5;


        assert marks >= 0 : "Marks cannot be negative";


        System.out.println(marks);

    }

}



Output:


java.lang.AssertionError: Marks cannot be negative



# How Assertions Work?


Execution flow:



Program starts


↓

Assertion condition checked


↓

Condition true?


↓

Continue execution



Condition false?


↓

Throw AssertionError



# Enabling Assertions in Java


By default, assertions are disabled.



To enable assertions, use:



java -ea ClassName



or:



java -enableassertions ClassName



# Example:


java -ea Main



Now assertions become active.



# Disabling Assertions


Assertions can be disabled using:



java -da ClassName



or:



java -disableassertions ClassName



# Why Are Assertions Disabled by Default?


Assertions are mainly for development and testing.



They are not meant for handling normal application errors.



Production applications usually use:


- Exception Handling.
- Logging.
- Validation.



# Assertions vs Exceptions


Both detect problems, but they have different purposes.



# Assertions


Used for:


- Developer assumptions.
- Programming errors.
- Internal checks.



Example:


assert balance >= 0;



# Exceptions


Used for:


- Runtime problems.
- User input errors.
- External failures.



Example:


Invalid file.


Database failure.



# Difference Between Assertions and Exceptions



## Assertions


Purpose:


Check programmer assumptions.



Handled by:


Developer during testing.



Enabled:


Optional.



Error type:


AssertionError.



Example:


assert x > 0;



---



## Exceptions


Purpose:


Handle runtime problems.



Handled by:


Application.



Enabled:


Always active.



Error type:


Exception classes.



Example:


IOException.



# AssertionError


When an assertion fails, Java throws:



AssertionError



It belongs to:



java.lang.Error



Example:


assert false;



Output:


java.lang.AssertionError



# Where Should Assertions Be Used?


Assertions are useful for:



## Internal Program Conditions


Example:


A method should receive a valid object.



## Debugging


Finding logic mistakes.



## Testing


Checking expected behavior.



# Where Should Assertions NOT Be Used?



## User Input Validation


Wrong:



assert age > 0;



Users can provide invalid input.



Use exceptions instead.



## Security Checks


Never use assertions for:



- Password validation.
- Permission checking.
- Authentication.



## Normal Error Handling


Do not replace exceptions with assertions.



# Assertion Example: Banking System


Scenario:



Bank account balance should not be negative.



Example:


class Account

{

    double balance;


    void checkBalance()

    {

        assert balance >= 0 :

        "Invalid balance";

    }

}



Used to verify internal rules.



# Assertion Example: E-Commerce System


Scenario:



Product price should be positive.



Example:


assert price > 0 :

"Invalid product price";



# Assertion Example: Student Management System


Scenario:



Marks should be within range.



Example:


assert marks >= 0 && marks <= 100 :

"Invalid marks";



# Assertions in Development Process



Developer writes code


↓

Enable assertions


↓

Run tests


↓

Find logical errors


↓

Fix problems


↓

Deploy application



# Advantages of Assertions



## Finds Programming Errors


Detects incorrect assumptions.



## Improves Code Quality


Helps verify logic.



## Useful During Testing


Supports debugging.



## Documents Assumptions


Shows expected conditions.



# Limitations of Assertions



## Disabled by Default


They may not run in production.



## Not For User Errors


Use exceptions instead.



## Cannot Replace Exception Handling


Different purposes.



# Common Mistakes



## Using Assertions for Validation


Incorrect:


Checking user input.



## Forgetting to Enable Assertions


They will not execute.



## Using Assertions in Production Logic


Can create unreliable behavior.



# Best Practices


Follow these practices:


- Use assertions for internal assumptions.
- Use exceptions for runtime problems.
- Enable assertions during testing.
- Do not use assertions for security.
- Keep assertion conditions simple.



# Interview Questions



## What is an assertion?


A statement used to check programmer assumptions.



## Which error is thrown when assertion fails?


AssertionError.



## Are assertions enabled by default?


No.



## How to enable assertions?


Using -ea option.



## Difference between assertion and exception?


Assertions test developer assumptions; exceptions handle runtime problems.



# Key Points


Remember:


- Assertions check assumptions.
- They are mainly for debugging.
- Disabled by default.
- Failure causes AssertionError.
- Enable using -ea.
- Do not use assertions for user validation.



# Summary


Assertions are a useful Java feature for detecting programming mistakes during development and testing.


They help developers verify assumptions, improve code quality, and identify logical errors early, but they should not replace proper exception handling.

`

};


export default lesson14;