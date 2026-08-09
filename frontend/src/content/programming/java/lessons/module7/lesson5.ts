const lesson5 = {

  id: "lesson5",

  title: "throw and throws Keywords in Java",

  content: `

# throw and throws Keywords in Java


## Introduction


Java provides two important keywords for handling exceptions manually:



- throw
- throws



Both are related to exception handling, but they are used for different purposes.



The main difference:



throw:


Used to explicitly create and throw an exception.



throws:


Used to declare that a method may produce exceptions.



# The throw Keyword


## Definition


The throw keyword is used to manually throw an exception from a program.



It allows developers to create exceptions based on their own conditions.



Syntax:


throw new ExceptionType("message");



Example:


throw new ArithmeticException("Invalid calculation");



# Why Do We Need throw?


Sometimes Java cannot automatically detect business rule violations.



Example:



Banking System:


Withdrawal amount = 0



Java does not consider this an error.



But the application rule says:


Withdrawal amount must be greater than zero.



The programmer can manually throw an exception.



# Simple throw Example


class Main

{

    public static void main(String[] args)

    {

        int age = 15;


        if(age < 18)

        {

            throw new ArithmeticException("Age is not valid");

        }


        System.out.println("Eligible");

    }

}



Output:


Exception in thread "main" java.lang.ArithmeticException: Age is not valid



Explanation:


The programmer manually created and threw the exception.



# throw with try-catch


A thrown exception can be handled using catch.



Example:


class Main

{

    public static void main(String[] args)

    {

        try

        {

            throw new ArithmeticException("Invalid operation");

        }


        catch(ArithmeticException e)

        {

            System.out.println(e.getMessage());

        }

    }

}



Output:


Invalid operation



# Throwing Checked Exceptions


The throw keyword can also throw checked exceptions.



Example:


import java.io.IOException;


class Main

{

    public static void main(String[] args) throws IOException

    {

        throw new IOException("File error");

    }

}



# Custom Exception Using throw


Developers often use throw with custom exceptions.



Example:


class InvalidAmountException extends Exception

{

    InvalidAmountException(String message)

    {

        super(message);

    }

}



class Bank

{

    void withdraw(double amount) throws InvalidAmountException

    {

        if(amount <= 0)

        {

            throw new InvalidAmountException("Invalid amount");

        }

    }

}



# The throws Keyword


## Definition


The throws keyword is used in a method declaration to indicate that the method may throw one or more exceptions.



Syntax:


returnType methodName() throws ExceptionType

{

}



Example:


void readFile() throws IOException

{

}



# Why Do We Need throws?


Some methods may generate exceptions but do not handle them internally.



Instead, they inform the caller that handling is required.



Example:


A file reading method:



readFile()



may generate:


IOException



The method declares:


throws IOException



# Simple throws Example


import java.io.IOException;


class FileManager

{

    void openFile() throws IOException

    {

        throw new IOException("File not found");

    }

}



The caller must handle the exception.



# Handling a Method with throws


Example:


class Main

{

    public static void main(String[] args)

    {

        FileManager file = new FileManager();


        try

        {

            file.openFile();

        }


        catch(Exception e)

        {

            System.out.println(e.getMessage());

        }

    }

}



Output:


File not found



# Multiple Exceptions Using throws


A method can declare multiple exceptions.



Syntax:


method() throws IOException, SQLException

{

}



Example:


void connectDatabase() throws IOException, SQLException

{

}



# Difference Between throw and throws



## throw


Purpose:


Used to throw an exception manually.



Location:


Inside method body.



Example:


throw new Exception();



Number of exceptions:


Only one exception at a time.



## throws


Purpose:


Used to declare possible exceptions.



Location:


Method declaration.



Example:


void test() throws Exception



Number of exceptions:


Multiple exceptions can be declared.



# throw vs throws Example



throw:



void checkAge()

{

    if(age < 18)

    {

        throw new Exception();

    }

}



throws:



void readData() throws IOException

{

}



# Exception Propagation with throws


When a method declares throws, the exception moves to the calling method.



Example:



main()


↓

method1()


↓

method2()



If method2 throws an exception:



method2()

throws exception


↓

method1()

receives exception


↓

main()

handles exception



# throws Example with Method Chain


class Test

{

    void method3() throws Exception

    {

        throw new Exception("Error");

    }


    void method2() throws Exception

    {

        method3();

    }


    void method1() throws Exception

    {

        method2();

    }

}



The exception moves upward.



# throw Example: Banking System


Scenario:


Withdraw money



Rule:


Balance cannot become negative.



Code logic:


if(balance < amount)

{

    throw new Exception("Insufficient Balance");

}



The application creates its own exception.



# throws Example: Banking System


A database method:



void saveTransaction() throws SQLException

{

}



The method informs callers about possible database errors.



# throw Example: E-Commerce System


Scenario:


Product stock is unavailable.



Code:


if(stock == 0)

{

    throw new Exception("Product unavailable");

}



# throws Example: E-Commerce System


Payment method:



void processPayment() throws PaymentException

{

}



The caller handles payment failure.



# throw Example: Student Management System


Scenario:


Marks cannot be negative.



Code:


if(marks < 0)

{

    throw new InvalidMarksException();

}



# throws Example: Student Management System


Method:



void loadStudentData() throws IOException

{

}



The caller handles file errors.



# Advantages of throw



## Custom Error Control


Developers can create meaningful exceptions.



## Business Rule Validation


Application-specific rules can be enforced.



## Better Error Messages


Users receive clear information.



# Advantages of throws



## Method Communication


It informs callers about possible problems.



## Cleaner Code


Methods can delegate handling responsibility.



## Exception Propagation


Errors can move through method calls.



# Common Mistakes



## Using throw Without Exception Object


Wrong:


throw ArithmeticException;



Correct:


throw new ArithmeticException();



## Forgetting to Handle throws


Checked exceptions must be handled.



## Confusing throw and throws


Remember:


throw = create exception


throws = declare exception



# Best Practices


Follow these practices:


- Use throw for business validations.
- Use meaningful exception messages.
- Use throws for methods that cannot handle exceptions.
- Prefer custom exceptions for application rules.
- Do not throw generic exceptions unnecessarily.



# Interview Questions



## What is throw?


A keyword used to manually throw an exception.



## What is throws?


A keyword used to declare exceptions in method signatures.



## Difference between throw and throws?


throw creates an exception; throws declares possible exceptions.



## Can throws declare multiple exceptions?


Yes.



# Key Points


Remember:


- throw is used inside methods.
- throws is used in method declarations.
- throw creates exceptions manually.
- throws passes responsibility to the caller.
- Both help control exception handling.



# Summary


The throw and throws keywords provide advanced control over exception handling in Java.


throw allows developers to create exceptions manually, while throws allows methods to communicate possible exceptions to their callers.


Together, they help build reliable and well-structured Java applications.

`

};


export default lesson5;