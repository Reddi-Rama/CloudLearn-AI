const lesson8 = {

  id: "lesson8",

  title: "Nested try Blocks in Java",

  content: `

# Nested try Blocks in Java


## Introduction


In Java exception handling, a try block can be placed inside another try block.



This concept is called:


Nested try Block



Nested try blocks are used when a program contains multiple operations where each operation may generate different exceptions.



They allow developers to handle exceptions at different levels of a program.



# What is a Nested try Block?


A nested try block is a try block written inside another try block.



Syntax:


try

{

    // outer try code


    try

    {

        // inner try code

    }


    catch(Exception e)

    {

        // inner exception handling

    }

}


catch(Exception e)

{

    // outer exception handling

}



# Why Do We Need Nested try Blocks?


Large applications perform many operations.



Example:


Banking Application:



Main Transaction


|

|-- Validate Account


|

|-- Check Balance


|

|-- Transfer Amount



Each operation may have different errors.



Nested try blocks allow each part to handle its own exceptions.



# Simple Nested try Example


class Main

{

    public static void main(String[] args)

    {

        try

        {

            System.out.println("Outer try block");


            try

            {

                int result = 10 / 0;


                System.out.println(result);

            }


            catch(ArithmeticException e)

            {

                System.out.println("Inner catch: Division error");

            }

        }


        catch(Exception e)

        {

            System.out.println("Outer catch");

        }

    }

}



Output:


Outer try block

Inner catch: Division error



Explanation:


The inner catch handles the exception.



The outer catch is not executed.



# How Nested try Works?


Execution flow:



Outer try starts


↓

Inner try starts


↓

Exception occurs


↓

Search inner catch


↓

If found, handle exception


↓

Continue outer try



# Inner Catch Handles Exception


Example:


try

{

    try

    {

        int value = 10 / 0;

    }


    catch(ArithmeticException e)

    {

        System.out.println("Handled inside");

    }

}


catch(Exception e)

{

    System.out.println("Handled outside");

}



Output:


Handled inside



# When Outer Catch Executes?


If the inner try does not handle the exception, the exception moves to the outer catch.



Example:


class Main

{

    public static void main(String[] args)

    {

        try

        {

            try

            {

                int array[] = new int[3];


                array[5];

            }


            catch(ArithmeticException e)

            {

                System.out.println("Inner catch");

            }

        }


        catch(ArrayIndexOutOfBoundsException e)

        {

            System.out.println("Outer catch handles array error");

        }

    }

}



Output:


Outer catch handles array error



Explanation:


The inner catch cannot handle ArrayIndexOutOfBoundsException.



So the outer catch handles it.



# Multiple Levels of Nested try


Java allows multiple levels of nesting.



Example:


try

{

    try

    {

        try

        {

            // code

        }

        catch(Exception e)

        {

        }

    }

    catch(Exception e)

    {

    }

}

catch(Exception e)

{

}



However, excessive nesting should be avoided.



# Nested try with Multiple Catch Blocks


Example:


try

{

    try

    {

        int value = Integer.parseInt("abc");

    }


    catch(NumberFormatException e)

    {

        System.out.println("Invalid number");

    }


}


catch(Exception e)

{

    System.out.println("General exception");

}



Output:


Invalid number



# Nested try Example: File Handling


A file operation may contain multiple risky operations.



Example:



Outer try:


Open file



Inner try:


Read file content



Handling:


File opening error


and


Reading error



# Nested try Example: Banking System


Scenario:


Money Transfer



Flow:



Outer try:


Start transaction



Inner try:


Check account balance



Another inner try:


Transfer amount



Exceptions:


- Invalid account.
- Insufficient balance.
- Database failure.



Each level can handle specific problems.



# Example Banking Structure


try

{

    startTransaction();


    try

    {

        checkBalance();


        try

        {

            transferMoney();

        }


        catch(Exception e)

        {

            System.out.println("Transfer failed");

        }

    }


    catch(Exception e)

    {

        System.out.println("Balance error");

    }

}


catch(Exception e)

{

    System.out.println("Transaction error");

}



# Nested try Example: E-Commerce System


Scenario:


Order Placement



Outer try:


Create order



Inner try:


Process payment



Another inner try:


Update inventory



Possible exceptions:


- Payment failure.
- Product unavailable.
- Database error.



# Nested try Example: Student Management System


Scenario:


Student Registration



Outer try:


Register student



Inner try:


Validate marks



Another inner try:


Save data



Possible exceptions:


- Invalid marks.
- File error.
- Duplicate ID.



# Difference Between Multiple Catch and Nested try



## Multiple Catch


Used when:


One try block can produce different exceptions.



Structure:


try

{

}


catch(Exception1 e)

{

}


catch(Exception2 e)

{

}



## Nested try


Used when:


Different parts of code need separate exception handling.



Structure:


try

{

    try

    {

    }

}



# Advantages of Nested try Blocks



## Local Exception Handling


Each section handles its own errors.



## Better Control


Different levels can manage different failures.



## Organized Large Applications


Complex workflows become easier to manage.



## Flexible Error Recovery


Specific operations can recover independently.



# Disadvantages of Nested try Blocks



## Complex Code


Too much nesting reduces readability.



## Difficult Maintenance


Deep nesting is harder to debug.



## Possible Duplicate Handling


Similar handling may be repeated.



# Common Mistakes



## Excessive Nesting


Avoid unnecessary nested blocks.



## Wrong Catch Placement


Place handlers where they make sense.



## Ignoring Inner Exceptions


Every risky operation should have proper handling.



# Best Practices


Follow these practices:


- Use nested try only when required.
- Keep nesting levels minimum.
- Prefer separate methods for complex operations.
- Handle exceptions close to their source.
- Use meaningful error messages.



# Interview Questions



## What is a nested try block?


A try block inside another try block.



## Can try blocks be nested in Java?


Yes.



## Which catch block executes first?


The nearest matching catch block.



## Can we have multiple nested try blocks?


Yes.



# Key Points


Remember:


- Nested try means try inside another try.
- Inner catch gets the first chance to handle exceptions.
- If inner catch fails, exception moves to outer catch.
- Useful for complex applications.
- Avoid excessive nesting.



# Summary


Nested try blocks provide a way to handle exceptions at different levels of a program.


They are useful in complex applications where multiple operations require separate error handling, but they should be used carefully to maintain readable and maintainable code.

`

};


export default lesson8;