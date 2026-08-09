const lesson4 = {

  id: "lesson4",

  title: "try, catch, and finally Blocks in Java",

  content: `

# try, catch, and finally Blocks in Java


## Introduction


In Java, exception handling is performed using special blocks called:


- try
- catch
- finally



These blocks control what happens when an exception occurs during program execution.



The main purpose of these blocks is:


- Detect errors.
- Handle errors.
- Continue program execution safely.
- Perform cleanup operations.



# Exception Handling Flow


The basic flow is:



try Block


↓

Exception Occurs


↓

catch Block Handles Exception


↓

finally Block Executes



# The try Block


## Definition


The try block contains code that may produce an exception.



Any risky operation should be placed inside a try block.



Syntax:


try

{

    // risky code

}



Example:


try

{

    int result = 10 / 0;

}



Here:


Division by zero is a risky operation.



# Rules of try Block



## Rule 1


A try block must be followed by:


- catch block


or


- finally block



Example:


try

{

}



catch(Exception e)

{

}



or



try

{

}

finally

{

}



## Rule 2


A try block cannot exist alone.



Invalid:


try

{

    // code

}



# The catch Block


## Definition


The catch block handles the exception thrown by the try block.



It contains the code that executes when an exception occurs.



Syntax:


catch(ExceptionType variable)

{

    // handling code

}



Example:


catch(ArithmeticException e)

{

    System.out.println("Cannot divide by zero");

}



# Simple try-catch Example


class Main

{

    public static void main(String[] args)

    {

        try

        {

            int result = 10 / 0;

        }


        catch(ArithmeticException e)

        {

            System.out.println("Division is not possible");

        }


        System.out.println("Program continues");

    }

}



Output:


Division is not possible

Program continues



Explanation:


The exception is caught and execution continues.



# How try-catch Works Internally?


Example:


try

{

    int value = 10 / 0;

}



Execution:



Step 1:


JVM executes try block.



Step 2:


Exception occurs.



Step 3:


JVM creates ArithmeticException object.



Step 4:


JVM searches matching catch block.



Step 5:


catch block executes.



Step 6:


Program continues.



# Multiple catch Blocks


A try block can have multiple catch blocks.



Example:


try

{

    int array[] = new int[3];


    array[5];

}


catch(ArrayIndexOutOfBoundsException e)

{

    System.out.println("Invalid index");

}


catch(Exception e)

{

    System.out.println("General exception");

}



Output:


Invalid index



# Specific Catch Before General Catch


Important rule:



Specific exceptions should come before general exceptions.



Correct:


catch(ArithmeticException e)


catch(Exception e)



Wrong:


catch(Exception e)


catch(ArithmeticException e)



Reason:


Parent exception catches child exception first.



# The finally Block


## Definition


The finally block contains code that always executes whether an exception occurs or not.



It is mainly used for cleanup operations.



Syntax:


finally

{

    // cleanup code

}



# finally Example


class Main

{

    public static void main(String[] args)

    {

        try

        {

            int result = 10 / 2;


            System.out.println(result);

        }


        catch(Exception e)

        {

            System.out.println("Error");

        }


        finally

        {

            System.out.println("Finally executed");

        }

    }

}



Output:


5

Finally executed



# finally with Exception


Example:


try

{

    int result = 10 / 0;

}


catch(Exception e)

{

    System.out.println("Exception handled");

}


finally

{

    System.out.println("Cleanup completed");

}



Output:


Exception handled

Cleanup completed



# Why Do We Need finally?


Some operations must happen regardless of success or failure.



Examples:


- Closing files.
- Closing database connections.
- Releasing resources.
- Disconnecting networks.



# Complete try-catch-finally Example


class Main

{

    public static void main(String[] args)

    {

        try

        {

            int number = 10 / 0;


            System.out.println(number);

        }


        catch(ArithmeticException e)

        {

            System.out.println("Arithmetic exception occurred");

        }


        finally

        {

            System.out.println("Execution completed");

        }

    }

}



Output:


Arithmetic exception occurred

Execution completed



# Nested try-catch


A try block can exist inside another try block.



Example:


try

{

    try

    {

        int value = 10 / 0;

    }


    catch(ArithmeticException e)

    {

        System.out.println("Inner exception");

    }

}


catch(Exception e)

{

    System.out.println("Outer exception");

}



# try-catch-finally in File Handling


Example:


File Opening


↓

Read File


↓

Exception Possible


↓

Close File in finally



# try-catch-finally in Banking System


Example:



Transaction Start


↓

Try Transfer Money


↓

Exception


↓

Catch Transaction Failure


↓

Finally Close Connection



# try-catch-finally in E-Commerce System


Example:



Payment Request


↓

Try Payment Processing


↓

Payment Exception


↓

Show Failure Message


↓

Finally Release Resources



# try-catch-finally in Student Management System


Example:



Read Student Marks


↓

Invalid Input


↓

Catch Input Exception


↓

Finally Save State



# Difference Between try, catch, and finally



## try


Purpose:


Contains risky code.



Execution:


Runs first.



## catch


Purpose:


Handles exception.



Execution:


Runs only when exception occurs.



## finally


Purpose:


Cleanup code.



Execution:


Usually always runs.



# finally Execution Cases



## Case 1: No Exception


try executes.


finally executes.



## Case 2: Exception Handled


try executes.


catch executes.


finally executes.



## Case 3: Exception Not Handled


try executes.


finally executes.


Program terminates.



# Can finally Block Fail?


Yes, in rare situations.



Examples:


- JVM shutdown.
- System crash.
- Power failure.



# Advantages of try-catch-finally



## Prevents Program Crashes


Errors are handled safely.



## Resource Management


Cleanup operations are guaranteed.



## Better User Experience


Meaningful messages can be shown.



## Cleaner Code


Error handling is separated from logic.



# Common Mistakes



## Empty Catch Block


Example:


catch(Exception e)

{

}



Problems are hidden.



## Catching Too General Exception


Reduces debugging ability.



## Forgetting Resource Cleanup


Can cause memory or connection problems.



# Best Practices


Follow these practices:


- Keep try blocks small.
- Catch specific exceptions.
- Use finally for cleanup.
- Provide meaningful messages.
- Do not ignore exceptions.



# Interview Questions



## Can we use try without catch?


Yes, if finally is used.



## Can finally exist without catch?


Yes.



## Does finally always execute?


Usually yes, except JVM termination situations.



## Can we have multiple catch blocks?


Yes.



# Key Points


Remember:


- try contains risky code.
- catch handles exceptions.
- finally performs cleanup.
- try must have catch or finally.
- Specific catch blocks come before general ones.
- finally executes after exception handling.



# Summary


The try, catch, and finally blocks form the foundation of Java exception handling.


They allow developers to detect errors, handle unexpected situations, and perform cleanup operations, resulting in reliable and professional applications.

`

};


export default lesson4;