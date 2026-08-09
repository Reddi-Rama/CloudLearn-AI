const lesson7 = {

  id: "lesson7",

  title: "Multiple Catch Blocks in Java",

  content: `

# Multiple Catch Blocks in Java


## Introduction


While developing applications, a single try block may produce different types of exceptions.



Example:


A program may have:


- Division operation.
- Array access.
- Number conversion.



Each operation can produce a different exception.



Java allows developers to handle different exceptions using multiple catch blocks.



This feature is called:


Multiple Catch Blocks



# What are Multiple Catch Blocks?


Multiple catch blocks allow a single try block to handle different types of exceptions separately.



Syntax:


try

{

    // risky code

}


catch(ExceptionType1 e)

{

    // handling code

}


catch(ExceptionType2 e)

{

    // handling code

}



# Why Do We Need Multiple Catch Blocks?


Different exceptions require different solutions.



Example:



Problem:


Array index error



Solution:


Show invalid index message.



Problem:


Number format error



Solution:


Ask user for valid number.



A single catch block cannot provide specific handling for every situation.



# Simple Multiple Catch Example


class Main

{

    public static void main(String[] args)

    {

        try

        {

            int array[] = new int[3];


            array[5];


            int value = Integer.parseInt("abc");

        }


        catch(ArrayIndexOutOfBoundsException e)

        {

            System.out.println("Invalid array position");

        }


        catch(NumberFormatException e)

        {

            System.out.println("Invalid number format");

        }

    }

}



Output:


Invalid array position



Explanation:


The first exception that occurs is handled.



# How Multiple Catch Blocks Work?


Execution flow:



try block starts


↓

Exception occurs


↓

JVM identifies exception type


↓

Searches matching catch block


↓

Executes matching catch


↓

Program continues



# Important Rule: Catch Order


The order of catch blocks is very important.



Specific exceptions must come before general exceptions.



Correct:


catch(ArithmeticException e)


catch(Exception e)



Wrong:


catch(Exception e)


catch(ArithmeticException e)



# Why Should Specific Come First?


Because exceptions follow inheritance.



Example:



ArithmeticException


↓

RuntimeException


↓

Exception



If Exception is caught first, it can handle ArithmeticException also.



The specific catch block becomes unreachable.



# Incorrect Multiple Catch Example


try

{

    int result = 10 / 0;

}


catch(Exception e)

{

    System.out.println("Exception");

}


catch(ArithmeticException e)

{

    System.out.println("Arithmetic Error");

}



Compilation Error:


Unreachable catch block



# Multiple Catch with Parent and Child Exceptions


Example:


try

{

    int result = 10 / 0;

}


catch(ArithmeticException e)

{

    System.out.println("Arithmetic Error");

}


catch(RuntimeException e)

{

    System.out.println("Runtime Error");

}


catch(Exception e)

{

    System.out.println("General Error");

}



Output:


Arithmetic Error



# Handling Different Exceptions Example


class Main

{

    public static void main(String[] args)

    {

        try

        {

            String text = null;


            System.out.println(text.length());

        }


        catch(NullPointerException e)

        {

            System.out.println("Object is null");

        }


        catch(Exception e)

        {

            System.out.println("Some error occurred");

        }

    }

}



Output:


Object is null



# Multiple Catch with finally


Multiple catch blocks can be combined with finally.



Example:


try

{

    int result = 10 / 0;

}


catch(ArithmeticException e)

{

    System.out.println("Division error");

}


catch(Exception e)

{

    System.out.println("Error");

}


finally

{

    System.out.println("Cleanup completed");

}



Output:


Division error

Cleanup completed



# Java 7 Multi-Catch Feature


Java 7 introduced a shorter way to handle multiple exceptions.



It is called:


Multi-Catch Statement



Syntax:


catch(ExceptionType1 | ExceptionType2 e)

{

}



# Multi-Catch Example


class Main

{

    public static void main(String[] args)

    {

        try

        {

            int number = Integer.parseInt("abc");

        }


        catch(NumberFormatException | ArithmeticException e)

        {

            System.out.println("Exception occurred");

        }

    }

}



Output:


Exception occurred



# Rules of Multi-Catch



## Rule 1


Exception types must be different.



Correct:


catch(IOException | SQLException e)



## Rule 2


Parent-child exceptions cannot be combined.



Wrong:


catch(Exception | IOException e)



Reason:


IOException is already included in Exception.



# Multiple Catch vs Multi-Catch



## Multiple Catch Blocks


Syntax:


Separate catch blocks.



Example:


catch(IOException e)


catch(SQLException e)



Advantages:


- Different handling for each exception.
- More control.



## Multi-Catch


Syntax:


One catch block with | operator.



Example:


catch(IOException | SQLException e)



Advantages:


- Less code.
- Same handling logic.



# Multiple Catch Example: Banking System


Scenario:


ATM Transaction



Possible exceptions:


- Invalid amount.
- Account not found.
- Database failure.



Example:



try

{

    processTransaction();

}


catch(InvalidAmountException e)

{

    System.out.println("Invalid amount");

}


catch(SQLException e)

{

    System.out.println("Database problem");

}



# Multiple Catch Example: E-Commerce System


Scenario:


Order Processing



Exceptions:


- Product unavailable.
- Payment failure.
- Database error.



Each exception can have different handling.



# Multiple Catch Example: Student Management System


Scenario:


Student Registration



Exceptions:


- Invalid marks.
- Duplicate ID.
- File error.



Each problem receives a specific message.



# Advantages of Multiple Catch Blocks



## Specific Error Handling


Each problem gets suitable handling.



## Better User Messages


Users receive meaningful information.



## Easier Debugging


The exact problem is identified.



## Cleaner Code


Exception handling becomes organized.



# Common Mistakes



## Wrong Catch Order


Parent exceptions before child exceptions.



## Too Many Catch Blocks


Creates unnecessary complexity.



## Same Handling for Different Problems


Use multi-catch instead.



# Best Practices


Follow these practices:


- Place specific catches first.
- Use multi-catch when handling is identical.
- Avoid unnecessary catch blocks.
- Catch only exceptions you can handle.
- Use meaningful messages.



# Interview Questions



## Can a try block have multiple catch blocks?


Yes.



## Which catch block executes?


The first matching catch block.



## Can parent exception catch child exception?


Yes.



## Can we use multiple exceptions in one catch block?


Yes, using multi-catch.



# Key Points


Remember:


- Multiple catch blocks handle different exceptions.
- Catch order follows inheritance rules.
- Specific exceptions come before general exceptions.
- Java 7 introduced multi-catch.
- Multi-catch uses the | operator.
- Proper exception handling improves application reliability.



# Summary


Multiple catch blocks allow Java programs to handle different problems separately and provide appropriate solutions.


They make exception handling more organized, readable, and effective in real-world applications.

`

};


export default lesson7;