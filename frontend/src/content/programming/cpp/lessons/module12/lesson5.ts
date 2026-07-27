const lesson5 = {

  id: "lesson5",

  title: "Exception Handling Workflow (try → throw → catch)",

  content: `

# Exception Handling Workflow (try → throw → catch)


## Introduction


Exception handling in C++ follows a specific workflow.

The complete process involves three main components:


1. try block

2. throw statement

3. catch block



Together, they provide a structured way to detect and handle runtime errors.



# Exception Handling Flow


The general flow is:


try

↓

Detect Error

↓

throw Exception

↓

catch Exception

↓

Continue Program Execution



## Step 1: try Block


The try block contains code that may generate an exception.


Example:


try

{

    risky operation;

}



The program monitors this section for possible errors.



## Step 2: throw Statement


When an abnormal condition is detected, the throw statement generates an exception.


Example:


throw errorValue;



After throw executes:

- Current execution stops.
- Control leaves the try block.
- Exception searching begins.



## Step 3: catch Block


The catch block receives the exception and handles it.


Example:


catch(int error)

{

    cout<<"Error handled";

}



It provides a suitable response.



## Complete Example Program


#include<iostream>

using namespace std;


int main()

{

    int balance = 500;

    int withdraw;


    cout<<"Enter withdrawal amount: ";

    cin>>withdraw;


    try

    {

        if(withdraw > balance)

        {

            throw withdraw;

        }


        cout<<"Transaction Successful";

    }


    catch(int amount)

    {

        cout<<"Insufficient Balance";

    }


    return 0;

}



Output:


Enter withdrawal amount: 700

Insufficient Balance



## Working Explanation


Step 1:


The withdrawal operation is placed inside the try block.


Step 2:


The program checks whether the withdrawal amount exceeds balance.


Step 3:


throw generates an exception.


Step 4:


catch receives the exception.


Step 5:


Error message is displayed.



## Advantages of Exception Workflow


This workflow provides:


### Separation of Logic

Normal code and error handling are separated.


### Better Program Control

Errors are handled systematically.


### Improved Reliability

Applications continue safely after errors.


### Easier Debugging

Problems can be located quickly.



## Real-World Example


Online Payment System:


try:


Process payment.


throw:


Payment failure detected.


catch:


Display payment failed message.



## Exception Handling vs Traditional Error Handling


Traditional Method:


- Uses return values.
- Requires many checks.
- Makes code complex.


Exception Handling:


- Separates error handling.
- Cleaner code.
- Better reliability.



## Key Points


Remember:


- try identifies risky code.
- throw generates exceptions.
- catch handles exceptions.
- Together they create complete exception handling.


The try → throw → catch workflow is the foundation of error management in C++.

`

};


export default lesson5;