const lesson2 = {

  id: "lesson2",

  title: "The try Block",

  content: `

# The try Block


## Introduction


The try block is the first component of exception handling in C++.


It contains the statements that may generate an exception during program execution.


Instead of allowing risky code to terminate the program unexpectedly, it is placed inside a try block so that errors can be detected and handled.



## Purpose of try Block


The try block is responsible for:


- Identifying risky code.
- Monitoring possible runtime errors.
- Transferring control to a catch block when an exception occurs.


The try block itself does not handle the exception.

It only detects the area where an exception may occur.



## Syntax


try

{

    // Statements that may generate exceptions

}



## Working of try Block


The execution process is:


1. Program enters the try block.

2. Statements inside the try block execute.

3. If no exception occurs, execution continues normally.

4. If an exception occurs, control moves to the matching catch block.



## Example Program


#include<iostream>

using namespace std;


int main()

{

    int totalAmount = 5000;

    int transactions = 0;


    try

    {

        if(transactions == 0)

        {

            throw transactions;

        }


        cout << totalAmount / transactions;

    }


    catch(int)

    {

        cout << "Error : Division by Zero is not allowed.";

    }


    return 0;

}



Output:


Error : Division by Zero is not allowed.



## Explanation


In this example:


The division operation may cause an error because transactions value is zero.


The risky code is placed inside the try block.


When the exception occurs, control transfers to the catch block.



## Advantages of try Block


The try block provides:


### Error Detection

Identifies code that may produce exceptions.


### Better Organization

Separates normal execution from error handling.


### Improved Readability

Makes risky sections clear.


### Easier Debugging

Helps locate possible error areas.



## Real-World Applications


try blocks are commonly used in:


### Banking Systems

Protecting transaction operations.


### File Handling

Handling missing files.


### Database Applications

Managing connection failures.


### Network Applications

Handling communication errors.



## Key Points


Remember:


- try block contains risky code.
- It does not handle exceptions itself.
- Exceptions are transferred to catch blocks.
- Every exception handling process starts with try.


The try block forms the foundation of exception handling in C++.

`

};


export default lesson2;