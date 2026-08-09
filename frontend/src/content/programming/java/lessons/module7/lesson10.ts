const lesson10 = {

  id: "lesson10",

  title: "Exception Propagation in Java",

  content: `

# Exception Propagation in Java


## Introduction


In Java, when an exception occurs inside a method and that method does not handle the exception, the exception is passed to the calling method.



This process is called:



Exception Propagation



Exception propagation allows exceptions to move through the method call hierarchy until they are handled.



# What is Exception Propagation?


Exception propagation is the process of transferring an exception from one method to another method in the call stack.



In simple words:



If a method cannot handle an exception, it sends the exception to its caller.



# Why Do We Need Exception Propagation?


Large applications contain many methods.



Example:



main()


↓

processPayment()


↓

validateCard()


↓

connectDatabase()



If an error occurs in connectDatabase(), it may be handled by a higher-level method.



This avoids writing exception handling code everywhere.



# Method Call Stack


Java stores active method calls in a structure called:



Stack



Example:



main()


calls


method1()


calls


method2()



Stack:


method2()

↓

method1()

↓

main()



# How Exception Propagation Works?


Steps:



1. Exception occurs inside a method.


2. JVM creates an exception object.


3. JVM checks current method for handler.


4. If no handler exists, exception moves to caller.


5. Process continues until handler is found.


6. If no handler exists, JVM terminates the program.



# Simple Exception Propagation Example


class Main

{

    static void method3()

    {

        int result = 10 / 0;

    }


    static void method2()

    {

        method3();

    }


    static void method1()

    {

        method2();

    }


    public static void main(String[] args)

    {

        method1();

    }

}



Output:


ArithmeticException



Explanation:


Exception occurs in method3.



method3 does not handle it.



Exception moves to method2.



method2 does not handle it.



Moves to method1.



Finally reaches main().



# Handling Propagated Exception


Example:


class Main

{

    static void method3()

    {

        int result = 10 / 0;

    }


    static void method2()

    {

        method3();

    }


    public static void main(String[] args)

    {

        try

        {

            method2();

        }


        catch(ArithmeticException e)

        {

            System.out.println("Exception handled");

        }

    }

}



Output:


Exception handled



# Exception Propagation with throws


The throws keyword is commonly used with propagation.



Example:


void method1() throws Exception

{

    method2();

}



The method informs its caller about possible exceptions.



# Propagation Flow with throws



method3()


throws Exception


↓

method2()


throws Exception


↓

method1()


throws Exception


↓

main()


handles exception



# Checked Exception Propagation


Checked exceptions must be handled or declared.



Example:


import java.io.IOException;


class Test

{

    void readFile() throws IOException

    {

        throw new IOException();

    }


    void process() throws IOException

    {

        readFile();

    }

}



The exception moves upward.



# Unchecked Exception Propagation


Unchecked exceptions automatically propagate.



Example:


class Main

{

    static void divide()

    {

        int value = 10 / 0;

    }


    static void calculate()

    {

        divide();

    }


    public static void main(String[] args)

    {

        calculate();

    }

}



The JVM propagates the exception automatically.



# Exception Propagation Flow Diagram


Example:



main()

 |

 |

process()

 |

 |

validate()

 |

 |

Exception Occurs



Propagation:


validate()


↓

process()


↓

main()



# Exception Propagation Example: Banking System


Scenario:



Transfer Money



Flow:



main()


↓

transferAmount()


↓

checkBalance()


↓

databaseConnection()



If databaseConnection() fails:



SQLException occurs



↓

Moves upward



↓

transferAmount handles it



or



main handles it



# Banking Example


void transferMoney() throws SQLException

{

    checkAccount();

}



void checkAccount() throws SQLException

{

    connectDatabase();

}



The database exception propagates upward.



# Exception Propagation Example: E-Commerce System


Scenario:



Place Order



Flow:



placeOrder()


↓

processPayment()


↓

paymentGateway()



Payment failure:


PaymentException



moves upward until handled.



# Exception Propagation Example: Student Management System


Scenario:



Register Student



Flow:



registerStudent()


↓

validateDetails()


↓

saveStudent()



Database error:


SQLException



propagates upward.



# Exception Propagation and finally Block


finally executes before the exception leaves the method.



Example:


class Main

{

    static void test()

    {

        try

        {

            int x = 10 / 0;

        }


        finally

        {

            System.out.println("Finally executed");

        }

    }

}



Output:


Finally executed

ArithmeticException



# Exception Propagation vs Exception Handling



## Exception Handling


Exception is handled in the same method.



Example:


try-catch inside method.



## Exception Propagation


Exception moves to another method.



Example:


throws to caller.



# Advantages of Exception Propagation



## Centralized Handling


Exceptions can be handled at higher levels.



## Cleaner Code


Methods focus on their main responsibility.



## Better Application Design


Large systems can manage errors effectively.



## Reduced Duplicate Code


Avoids repeated handling logic.



# Common Mistakes



## Ignoring Checked Exceptions


Compiler requires handling.



## Propagating Everything


Not every exception should move upward.



## Handling Too Late


Important errors should be handled at suitable levels.



# Best Practices


Follow these practices:


- Handle exceptions where recovery is possible.
- Use throws when callers should decide handling.
- Avoid unnecessary propagation.
- Maintain meaningful exception messages.
- Log exceptions at appropriate layers.



# Interview Questions



## What is exception propagation?


Moving an exception from one method to another method.



## How does exception propagation happen?


Through the method call stack.



## Which keyword is used for propagation?


throws.



## What happens if nobody handles the exception?


JVM terminates the program.



# Key Points


Remember:


- Exceptions can move between methods.
- Propagation follows the call stack.
- throws supports exception propagation.
- Checked exceptions must be declared or handled.
- Unchecked exceptions propagate automatically.
- Finally executes before propagation continues.



# Summary


Exception propagation allows Java applications to transfer exceptions through method calls until an appropriate handler is found.


It helps create clean application architecture by separating error detection from error handling responsibilities.

`

};


export default lesson10;