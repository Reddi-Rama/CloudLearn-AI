const lesson3 = {

  id: "lesson3",

  title: "Exception Hierarchy in Java",

  content: `

# Exception Hierarchy in Java


## Introduction


Java uses a well-organized hierarchy to represent exceptions and errors.



All exceptions and errors in Java are derived from a common class called:



Throwable



Understanding the exception hierarchy helps developers:


- Know relationships between exceptions.
- Catch exceptions correctly.
- Design custom exceptions.
- Understand JVM exception handling.



# Java Exception Hierarchy


The basic hierarchy is:



Object

   |

   ↓

Throwable

   |

   |----------------|

   ↓                ↓

 Error          Exception

                  |

                  ↓

          RuntimeException



# The Throwable Class


Throwable is the root class for all exceptions and errors in Java.



Package:


java.lang



It represents any problem that can be thrown and caught.



Throwable has two main subclasses:



1. Error


2. Exception



# Throwable Class


Structure:


class Throwable

{

    // exception information

}



It provides important methods:



- getMessage()
- printStackTrace()
- toString()



# Methods of Throwable



## getMessage()


Returns the description of the exception.



Example:


try

{

    int result = 10 / 0;

}

catch(Exception e)

{

    System.out.println(e.getMessage());

}



Output:


/ by zero



# printStackTrace()


Displays complete information about an exception.



It shows:


- Exception type.
- Error message.
- Location where exception occurred.



Example:


e.printStackTrace();



# toString()


Returns exception name and message.



Example:


System.out.println(e.toString());



# Error Class


Error represents serious problems that usually cannot be handled by applications.



It is a subclass of Throwable.



Hierarchy:



Throwable

   |

   ↓

 Error



# Common Error Types



## OutOfMemoryError


Occurs when JVM does not have enough memory.



Example:


Creating millions of objects.



## StackOverflowError


Occurs when stack memory is exhausted.



Example:


Infinite recursion.



## VirtualMachineError


Occurs due to JVM failures.



# Exception Class


Exception represents problems that applications can handle.



Hierarchy:



Throwable

   |

   ↓

 Exception



Exception is divided into:



1. Checked Exceptions


2. Unchecked Exceptions



# Checked Exception Hierarchy


Structure:



Exception

   |

   |----------------|

   ↓                ↓

IOException     SQLException



# IOException


Occurs during input/output operations.



Examples:


- Reading files.
- Writing files.
- Network operations.



# SQLException


Occurs while working with databases.



Examples:


- Database connection failure.
- SQL query problems.



# RuntimeException Class


RuntimeException represents unchecked exceptions.



Hierarchy:



Exception

   |

   ↓

RuntimeException



These exceptions occur during program execution.



# Common Runtime Exceptions



## ArithmeticException


Example:


int result = 10 / 0;



## NullPointerException


Example:


String name = null;


name.length();



## ArrayIndexOutOfBoundsException


Example:


int array[] = new int[3];


array[5];



## NumberFormatException


Example:


Integer.parseInt("abc");



# Complete Exception Hierarchy Example


Throwable

|

|---- Error

|       |

|       |---- OutOfMemoryError

|       |

|       |---- StackOverflowError

|

|---- Exception

        |

        |---- IOException

        |

        |---- SQLException

        |

        |---- RuntimeException

                |

                |---- ArithmeticException

                |

                |---- NullPointerException



# How JVM Uses Exception Hierarchy?


When an exception occurs:



Step 1:


Problem occurs.



Step 2:


JVM creates an exception object.



Step 3:


JVM identifies exception type.



Step 4:


JVM searches for matching catch block.



Step 5:


Handler executes.



# Example of Exception Matching


Example:


try

{

    int value = 10 / 0;

}


catch(ArithmeticException e)

{

    System.out.println("Arithmetic Error");

}


catch(Exception e)

{

    System.out.println("General Error");

}



Output:


Arithmetic Error



Explanation:


ArithmeticException is more specific, so it is handled first.



# Parent and Child Exception Relationship


Because exceptions follow inheritance:



ArithmeticException extends RuntimeException


RuntimeException extends Exception


Exception extends Throwable



Therefore:


An ArithmeticException is also an Exception.



# Catching Parent Exception


Example:


try

{

    int value = 10 / 0;

}


catch(Exception e)

{

    System.out.println("Exception handled");

}



Output:


Exception handled



Explanation:


Exception is the parent of ArithmeticException.



# Catch Block Order


Specific exceptions must come before general exceptions.



Correct:


catch(ArithmeticException e)


catch(Exception e)



Wrong:


catch(Exception e)


catch(ArithmeticException e)



The second catch block becomes unreachable.



# Custom Exception and Hierarchy


Developers can create their own exception classes.



Example:


class InvalidAgeException extends Exception

{

}



Hierarchy:



Throwable


|

Exception


|

InvalidAgeException



# Exception Hierarchy in Banking System


Example:



Throwable


|

Exception


|

SQLException


|

DatabaseConnectionException



A banking system can create specific exceptions for different failures.



# Exception Hierarchy in E-Commerce System


Example:



Exception


|

PaymentException


|

PaymentFailedException



Different payment failures can have separate exception classes.



# Exception Hierarchy in Student Management System


Example:



Exception


|

StudentException


|

InvalidMarksException



Custom exceptions make applications easier to manage.



# Advantages of Exception Hierarchy



## Organized Error Handling


Related exceptions are grouped together.



## Code Reusability


Parent exception handling can handle child exceptions.



## Better Design


Developers can create meaningful exception structures.



## Flexible Catching


Specific or general handling is possible.



# Common Mistakes



## Catching Parent First


Specific exceptions become unreachable.



## Not Understanding Inheritance


Exceptions follow class inheritance rules.



## Creating Too Many Custom Exceptions


Makes code complicated.



# Best Practices


Follow these practices:


- Understand exception relationships.
- Catch specific exceptions first.
- Use parent exceptions only when needed.
- Design meaningful custom exceptions.
- Avoid unnecessary exception classes.



# Interview Questions



## What is the root class of all exceptions?


Throwable.



## Difference between Error and Exception?


Error represents serious JVM problems; Exception represents application problems.



## What is RuntimeException?


A class representing unchecked exceptions.



## Why is catch order important?


Because child exceptions must be handled before parent exceptions.



# Key Points


Remember:


- Throwable is the root class.
- Error and Exception extend Throwable.
- RuntimeException represents unchecked exceptions.
- Checked exceptions extend Exception.
- Exception hierarchy follows inheritance.
- Catch blocks follow hierarchy rules.



# Summary


The Java exception hierarchy provides a structured way to represent and handle problems.


By understanding Throwable, Error, Exception, and RuntimeException relationships, developers can write effective exception handling code and design better applications.

`

};


export default lesson3;