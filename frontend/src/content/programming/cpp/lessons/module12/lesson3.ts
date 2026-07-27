const lesson3 = {

  id: "lesson3",

  title: "The throw Statement",

  content: `

# The throw Statement


## Introduction


Detecting an error is only the first step in exception handling.

After identifying an abnormal condition, the program needs a mechanism to report that an exception has occurred.


In C++, this is done using the throw statement.



## What is throw Statement?


The throw statement is used to generate an exception manually.


When throw is executed:


- Normal execution stops.
- Remaining statements inside the try block are skipped.
- Control moves to the matching catch block.



## Syntax


throw exceptionObject;



The value or object after throw represents the exception being generated.



## Example Program


#include<iostream>

using namespace std;


int main()

{

    int age;


    cout<<"Enter Age : ";

    cin>>age;


    try

    {

        if(age < 18)

        {

            throw age;

        }


        cout<<"Eligible for Voting";

    }


    catch(int invalidAge)

    {

        cout<<"Voting Not Allowed. Age Entered : "

            <<invalidAge;

    }


    return 0;

}



Output:


Enter Age : 16

Voting Not Allowed. Age Entered : 16



## Working of throw Statement


In this example:


The user enters an age.


If age is less than 18:


throw age;


creates an exception.


Execution immediately leaves the try block and moves to the catch block.



## Types of Values That Can Be Thrown


C++ allows throwing:


- Integer values.
- Floating-point values.
- Characters.
- Strings.
- Objects.
- Custom exception classes.



## Advantages of throw Statement


The throw statement provides:


### Clear Error Reporting

It identifies abnormal conditions.


### Safe Execution

Prevents invalid operations.


### Better Control Flow

Transfers execution to error-handling code.


### Improved Reliability

Helps applications recover safely.



## Real-World Applications


throw is used in:


### Banking Applications

Examples:

- Insufficient balance.
- Invalid account details.



### Authentication Systems

Examples:

- Invalid credentials.
- Unauthorized access.



### E-Commerce Applications

Examples:

- Product unavailable.
- Payment failure.



## Key Points


Remember:


- throw generates an exception.
- It transfers control to catch.
- Execution after throw is stopped.
- It can throw values or objects.


The throw statement is an essential part of the try → throw → catch exception handling mechanism in C++.

`

};


export default lesson3;