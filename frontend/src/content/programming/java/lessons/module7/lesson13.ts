const lesson13 = {

  id: "lesson13",

  title: "Logging Exceptions in Java",

  content: `

# Logging Exceptions in Java


## Introduction


In real-world applications, simply displaying an error message is not enough.



Large applications need a way to record:


- What error occurred.
- When it occurred.
- Where it occurred.
- Why it occurred.
- Which user or process caused it.



This process is called:


Exception Logging



Logging is an important part of professional exception handling.



# What is Logging?


Logging is the process of recording application events, errors, warnings, and information messages into a log file or monitoring system.



Example:



Application Error


↓

Logger Records Details


↓

Developer Reviews Logs


↓

Problem Fixed



# Why Do We Need Exception Logging?


Consider an online banking application.



A customer reports:


"My money transfer failed."



The developer needs to know:


- Transaction time.
- Error type.
- Database status.
- Network condition.



Without logs:


Finding the problem is difficult.



With logs:


The exact failure can be identified.



# Difference Between Printing and Logging



## System.out.println()



Used for:


- Simple testing.
- Learning programs.



Example:


System.out.println("Error occurred");



Problems:


- No severity levels.
- No file storage.
- Difficult production debugging.



## Logging



Used in:


- Enterprise applications.
- Production systems.



Advantages:


- Stores history.
- Provides error details.
- Supports monitoring.



# Java Logging API


Java provides a built-in logging framework called:



java.util.logging



It provides classes for:


- Creating logs.
- Setting log levels.
- Recording exceptions.



# Logger Class


The main class used for logging is:



Logger



Package:


java.util.logging.Logger



# Creating a Logger Object


Example:


import java.util.logging.Logger;


class Main

{

    static Logger logger = Logger.getLogger(Main.class.getName());

}



The logger object records application information.



# Log Levels in Java


Java provides different levels of importance.



Hierarchy:



SEVERE


↓

WARNING


↓

INFO


↓

CONFIG


↓

FINE


↓

FINER


↓

FINEST



# SEVERE Level


Used for serious errors.



Example:


logger.severe("Database connection failed");



# WARNING Level


Used for possible problems.



Example:


logger.warning("Memory usage is high");



# INFO Level


Used for general information.



Example:


logger.info("Application started");



# FINE Level


Used for detailed debugging information.



Example:


logger.fine("Processing user request");



# Simple Logging Example


import java.util.logging.Logger;



class Main

{

    static Logger logger = Logger.getLogger(Main.class.getName());


    public static void main(String[] args)

    {

        logger.info("Program started");


        try

        {

            int result = 10 / 0;

        }


        catch(Exception e)

        {

            logger.severe("Exception occurred");

        }

    }

}



Output:


INFO: Program started

SEVERE: Exception occurred



# Logging Exception Details


Instead of only logging a message, we should record the exception object.



Example:


catch(Exception e)

{

    logger.severe(e.getMessage());

}



This gives information about the error.



# Using printStackTrace()


Example:


catch(Exception e)

{

    e.printStackTrace();

}



It displays:


- Exception type.
- Message.
- Error location.



However, logging is preferred in production applications.



# Logging with Exception Object


Example:


catch(Exception e)

{

    logger.log(Level.SEVERE, "Operation failed", e);

}



This records complete exception details.



# Logging in Real Applications



## Banking System


Possible errors:


- Transaction failure.
- Database error.
- Authentication failure.



Logs store:


- Transaction ID.
- Error details.
- Time.



# E-Commerce System


Possible errors:


- Payment failure.
- Inventory error.
- Order processing issue.



Logs help developers track failures.



# Student Management System


Possible errors:


- File loading failure.
- Invalid data.
- Database problems.



Logs help maintain records.



# Logging Frameworks Used in Industry


Professional Java applications often use advanced logging libraries.



Examples:



## Log4j


Popular Java logging framework.



## Logback


High-performance logging framework.



## SLF4J


Provides a common logging interface.



# Logging Levels in SLF4J


Common levels:



ERROR


WARN


INFO


DEBUG


TRACE



# Exception Logging Best Practices



## 1. Always Log Important Exceptions


Critical failures should be recorded.



Example:


Database failure.



# 2. Include Context Information


Bad:


"Error"



Good:


"Payment failed for order ID 1024"



# 3. Do Not Log Sensitive Data


Never log:


- Passwords.
- Bank details.
- Personal secrets.



# 4. Use Appropriate Log Levels


Example:



Database crash:


ERROR



Application start:


INFO



# 5. Avoid Duplicate Logging


Do not log the same exception at every layer.



# 6. Keep Logs Manageable


Too many logs reduce usefulness.



# Exception Logging Flow



Application


↓

Exception Occurs


↓

Catch Block


↓

Logger Records Details


↓

Log File / Monitoring System


↓

Developer Analysis



# Logging Example: Banking System


Scenario:


Transaction failure.



Code:


try

{

    transferMoney();

}


catch(Exception e)

{

    logger.log(Level.SEVERE,

    "Transaction failed",

    e);

}



# Logging Example: E-Commerce System


Scenario:


Payment failure.



Log:


Payment processing failed


+

Exception details



# Logging Example: Student System


Scenario:


File reading failure.



Log:


Unable to load student records



# Advantages of Exception Logging



## Faster Debugging


Developers quickly find problems.



## Better Monitoring


Application health can be tracked.



## Error History


Previous failures can be analyzed.



## Production Support


Teams can solve user issues remotely.



# Common Mistakes



## Using Only Print Statements


Not suitable for production.



## Logging Without Context


Difficult to understand problems.



## Logging Sensitive Information


Creates security risks.



## Too Many Logs


Creates unnecessary storage usage.



# Best Practices


Follow these practices:


- Use logging frameworks.
- Record complete exception details.
- Select proper log levels.
- Avoid sensitive information.
- Maintain useful log messages.



# Interview Questions



## Why is logging important?


It helps track and debug application failures.



## Difference between printing and logging?


Printing is temporary; logging stores structured records.



## Which class is used for Java logging?


Logger.



## What is the highest Java log level?


SEVERE.



# Key Points


Remember:


- Logging records application events.
- Logger is used in Java logging.
- Log levels define importance.
- Exception details should be logged.
- Professional applications use logging frameworks.
- Never log sensitive information.



# Summary


Exception logging is an essential part of professional Java development.


It helps developers understand failures, debug applications, monitor systems, and maintain reliable software in real-world environments.

`

};


export default lesson13;