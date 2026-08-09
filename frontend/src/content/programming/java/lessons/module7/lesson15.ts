const lesson15 = {

  id: "lesson15",

  title: "Mini Project: Banking Transaction System Using Exception Handling",

  content: `

# Mini Project: Banking Transaction System Using Exception Handling


## Introduction


In this lesson, we will build a simple Banking Transaction System using Java Exception Handling concepts.



This project combines the important concepts learned in this module:



- try-catch.
- finally.
- throw.
- throws.
- Custom Exceptions.
- Exception Propagation.
- Logging concepts.
- Input Validation.



The goal is to understand how real-world applications handle unexpected situations safely.



# Project Objective


Create a banking system that can:



- Create bank accounts.
- Deposit money.
- Withdraw money.
- Validate transactions.
- Handle invalid operations.
- Display meaningful error messages.



# Problems We Need to Handle


A banking application can face many problems:



## Invalid Deposit Amount


Example:


Deposit amount = -500



Solution:


Throw custom exception.



## Insufficient Balance


Example:


Balance = 5000


Withdrawal = 10000



Solution:


Throw InsufficientBalanceException.



## Invalid Account


Example:


Account does not exist.



Solution:


Throw AccountNotFoundException.



## Database Failure


Example:


Unable to save transaction.



Solution:


Handle SQLException.



# OOP Design


The system contains:



Class:


BankAccount



Attributes:


- Account Number.
- Account Holder Name.
- Balance.



Methods:


- deposit().
- withdraw().
- displayDetails().



Custom Exceptions:


- InvalidAmountException.
- InsufficientBalanceException.



# Creating Custom Exceptions



## InvalidAmountException


This exception handles invalid transaction amounts.



Example:


class InvalidAmountException extends Exception

{

    InvalidAmountException(String message)

    {

        super(message);

    }

}



# InsufficientBalanceException


This exception handles low balance situations.



Example:


class InsufficientBalanceException extends Exception

{

    InsufficientBalanceException(String message)

    {

        super(message);

    }

}



# Creating BankAccount Class


The BankAccount class contains banking operations.



Example:


class BankAccount

{

    private int accountNumber;

    private String holderName;

    private double balance;



    BankAccount(int accountNumber, String holderName, double balance)

    {

        this.accountNumber = accountNumber;

        this.holderName = holderName;

        this.balance = balance;

    }

}



# Deposit Method


Deposit should not accept negative values.



Example:


void deposit(double amount) throws InvalidAmountException

{

    if(amount <= 0)

    {

        throw new InvalidAmountException(

        "Deposit amount must be positive");

    }


    balance += amount;

}



# Withdraw Method


Withdrawal should check balance.



Example:


void withdraw(double amount)

throws InvalidAmountException, InsufficientBalanceException

{

    if(amount <= 0)

    {

        throw new InvalidAmountException(

        "Invalid withdrawal amount");

    }


    if(amount > balance)

    {

        throw new InsufficientBalanceException(

        "Insufficient balance");

    }


    balance -= amount;

}



# Display Account Details


Example:


void displayDetails()

{

    System.out.println("Account Number: "

    + accountNumber);


    System.out.println("Holder Name: "

    + holderName);


    System.out.println("Balance: "

    + balance);

}



# Complete Banking Transaction System


class InvalidAmountException extends Exception

{

    InvalidAmountException(String message)

    {

        super(message);

    }

}



class InsufficientBalanceException extends Exception

{

    InsufficientBalanceException(String message)

    {

        super(message);

    }

}



class BankAccount

{

    private int accountNumber;

    private String holderName;

    private double balance;



    BankAccount(int accountNumber,

    String holderName,

    double balance)

    {

        this.accountNumber = accountNumber;

        this.holderName = holderName;

        this.balance = balance;

    }



    void deposit(double amount)

    throws InvalidAmountException

    {

        if(amount <= 0)

        {

            throw new InvalidAmountException(

            "Invalid deposit amount");

        }


        balance += amount;

    }



    void withdraw(double amount)

    throws InvalidAmountException,

    InsufficientBalanceException

    {

        if(amount <= 0)

        {

            throw new InvalidAmountException(

            "Invalid withdrawal amount");

        }


        if(amount > balance)

        {

            throw new InsufficientBalanceException(

            "Insufficient balance");

        }


        balance -= amount;

    }



    void displayDetails()

    {

        System.out.println(

        "Account Number: "

        + accountNumber);


        System.out.println(

        "Holder Name: "

        + holderName);


        System.out.println(

        "Balance: "

        + balance);

    }

}



class Main

{

    public static void main(String[] args)

    {

        BankAccount account =

        new BankAccount(101,

        "Alex",

        5000);



        try

        {

            account.deposit(2000);


            account.withdraw(1000);


            account.displayDetails();

        }


        catch(Exception e)

        {

            System.out.println(

            e.getMessage());

        }


        finally

        {

            System.out.println(

            "Transaction Completed");

        }

    }

}



Output:


Account Number: 101

Holder Name: Alex

Balance: 6000.0

Transaction Completed



# Project Explanation



## Custom Exceptions


Used to represent banking-specific problems.



Example:


InsufficientBalanceException



## throw Keyword


Used to manually create exceptions.



Example:


throw new InvalidAmountException();



## throws Keyword


Used to declare possible exceptions.



Example:


void withdraw()

throws Exception



## try-catch


Handles transaction failures safely.



## finally


Ensures completion message or cleanup operation.



# Exception Flow in Project



User Transaction


↓

Validate Amount


↓

Exception Check


↓

Transaction Process


↓

Success / Error Message


↓

Cleanup



# Adding Logging


In professional banking systems, exceptions are logged.



Example:


logger.log(

Level.SEVERE,

"Transaction Failed",

e);



Logs store:


- Error details.
- Time.
- Transaction information.



# Real Banking System Improvements


A real banking application can include:



## Database Integration


Store:


- Accounts.
- Transactions.
- Customer details.



## Authentication


Secure login system.



## Transaction History


Maintain previous transactions.



## Notifications


Send alerts after transactions.



## Fraud Detection


Detect suspicious activities.



# Exception Handling Used



Concept:


Usage:



try-catch:


Handle transaction errors.



finally:


Complete cleanup.



throw:


Create custom errors.



throws:


Pass exception responsibility.



Custom Exceptions:


Represent banking problems.



Logging:


Record failures.



# Advantages of This Design



## Reliability


System does not crash unexpectedly.



## Security


Errors are controlled safely.



## Maintainability


Problems are easier to identify.



## Scalability


New banking features can be added.



# Common Mistakes



## Not Validating Amounts


Can create incorrect transactions.



## Using Generic Exception Everywhere


Reduces clarity.



## Ignoring Transaction Failures


Can create financial problems.



## Not Logging Errors


Makes debugging difficult.



# Best Practices Used


This project follows:



- Meaningful custom exceptions.
- Proper exception propagation.
- Resource cleanup.
- Error logging.
- Clear error messages.
- Separation of logic.



# Interview Questions



## Why use custom exceptions in banking?


To represent business-specific errors.



## Why use finally?


To execute cleanup code.



## Difference between throw and throws?


throw creates an exception; throws declares exceptions.



## Why is logging important?


To track failures and debug systems.



# Key Points


Remember:


- Exception handling prevents system crashes.
- Custom exceptions represent business rules.
- throw creates exceptions manually.
- throws passes exception responsibility.
- finally performs cleanup.
- Logging helps production debugging.



# Module Completion Summary


In this module, you learned:



- Introduction to Exceptions.
- Types of Exceptions.
- Exception Hierarchy.
- try-catch-finally.
- throw and throws.
- Custom Exceptions.
- Multiple Catch Blocks.
- Nested try Blocks.
- Try-with-Resources.
- Exception Propagation.
- Checked vs Unchecked Exceptions.
- Exception Handling Best Practices.
- Logging Exceptions.
- Assertions.



This Banking Transaction System combines all exception handling concepts and prepares you for advanced Java topics:



- Collections Framework.
- Multithreading.
- JDBC.
- Spring Boot.
- Enterprise Application Development.



`

};


export default lesson15;