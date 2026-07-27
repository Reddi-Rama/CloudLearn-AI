const lesson8 = {

  id: "lesson8",

  title: "Nested try Blocks",

  content: `

# Nested try Blocks


## Introduction


A try block can be placed inside another try block.

Such a structure is called a Nested try Block.


Nested try blocks are useful when different sections of a program require separate exception handling.



## What are Nested try Blocks?


Nested try blocks are try blocks written inside another try block.


Structure:


try

{

    try

    {

        // inner risky code

    }


    catch()

    {

        // inner handler

    }

}


catch()

{

    // outer handler

}



## Why Use Nested try Blocks?


Nested try blocks help when:


- Different operations have different error conditions.
- Inner operations need special handling.
- Large applications require layered error management.



## Example Program


#include<iostream>

using namespace std;


int main()

{

    try

    {

        cout<<"Outer try block"<<endl;


        try

        {

            throw 10;

        }


        catch(int)

        {

            cout<<"Inner exception handled"<<endl;

        }


    }


    catch(int)

    {

        cout<<"Outer exception handled";

    }


    return 0;

}



Output:


Outer try block

Inner exception handled



## Working of Nested try Blocks


The execution flow:


1. Outer try block starts.

2. Inner try block executes.

3. Inner exception occurs.

4. Inner catch searches for matching handler.

5. If handled, execution continues.

6. If not handled, outer catch is checked.



## Exception Propagation


If an inner catch block cannot handle an exception, the exception moves outward.


This process is called exception propagation.



## Real-World Example


Consider an online shopping system.


Outer try:


Process order.


Inner try:


Process payment.


If payment fails:

Inner catch handles payment error.


If order processing fails:

Outer catch handles order error.



## Advantages of Nested try Blocks


They provide:


### Better Error Separation

Different errors can be handled separately.


### Improved Program Structure

Complex applications can divide error handling.


### Greater Control

Each operation can have its own handler.



## Limitations


Nested try blocks should not be overused because:


- Code becomes complex.
- Debugging becomes difficult.
- Program readability decreases.



## Best Practices


Use nested try blocks when:

- Different modules need different handling.
- Error recovery differs.


Avoid unnecessary nesting.



## Key Points


Remember:


- A try block can contain another try block.
- Inner catch handles inner exceptions first.
- Unhandled exceptions move to outer handlers.
- Used for complex error management.


Nested try blocks provide better control over exception handling in large C++ applications.

`

};


export default lesson8;