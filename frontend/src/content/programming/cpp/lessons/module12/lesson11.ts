const lesson11 = {

  id: "lesson11",

  title: "User-Defined Exceptions",

  content: `

# User-Defined Exceptions


## Introduction


C++ provides built-in exception handling features, but sometimes applications require custom error types based on specific requirements.


User-defined exceptions allow programmers to create their own exception classes to represent application-specific errors.



## What are User-Defined Exceptions?


User-defined exceptions are custom exception classes created by programmers.


They help represent errors that are meaningful for a particular application.


Examples:


- Invalid account operation.
- Age restriction error.
- Payment failure.
- Insufficient balance.



## Creating a Custom Exception Class


A user-defined exception is usually created by defining a class.


Example:


class MyException

{

};



Objects of this class can be thrown using the throw statement.



## Example Program


#include<iostream>

using namespace std;


class AgeException

{

public:


    void message()

    {

        cout<<"Age is not valid";

    }

};



int main()

{

    int age = 15;


    try

    {

        if(age < 18)

        {

            throw AgeException();

        }

    }


    catch(AgeException exception)

    {

        exception.message();

    }


    return 0;

}



Output:


Age is not valid



## Working of User-Defined Exceptions


The process:


1. Create a custom exception class.

2. Detect an error condition.

3. Create an object of the exception class.

4. Throw the exception object.

5. Catch and handle the exception.



## Inheriting from Standard Exception Class


C++ allows custom exceptions to inherit from the standard exception class.


Example:


class CustomError : public exception

{

};



This provides standard exception features.



## Advantages of User-Defined Exceptions


They provide:


### Meaningful Error Messages

Errors can be described according to application requirements.


### Better Code Organization

Application-specific errors remain separate.


### Improved Maintainability

Large programs become easier to manage.



## Real-World Applications


User-defined exceptions are used in:


### Banking Systems


Examples:

- Invalid withdrawal.
- Account not found.


### E-Commerce Systems


Examples:

- Product unavailable.
- Payment rejected.


### Authentication Systems


Examples:

- Invalid user access.
- Permission denied.



## Best Practices


While creating custom exceptions:


- Use meaningful class names.
- Store useful error information.
- Keep exception classes simple.
- Inherit from standard exception classes when appropriate.



## Key Points


Remember:


- User-defined exceptions are custom error classes.
- They represent application-specific problems.
- Objects of exception classes can be thrown and caught.
- They improve error handling design.


User-defined exceptions help developers create professional and reliable C++ applications.

`

};


export default lesson11;