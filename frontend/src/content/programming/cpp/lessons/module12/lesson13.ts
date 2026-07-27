const lesson13 = {

  id: "lesson13",

  title: "Stack Unwinding",

  content: `

# Stack Unwinding


## Introduction


When an exception is thrown, C++ searches for a matching catch block.


During this process, the program moves back through the function calls and removes local objects from memory.


This process is called Stack Unwinding.



## What is Stack Unwinding?


Stack unwinding is the process of destroying local objects and removing function calls from the stack until a suitable exception handler is found.



## Normal Function Execution


Normally:


main()

↓

function A()

↓

function B()



Each function call creates a stack frame.



## Exception During Function Call


If function B throws an exception:


function B()

↓

function A()

↓

main()



The program searches for a matching catch block.



## Example Program


#include<iostream>

using namespace std;


void functionB()

{

    throw 100;

}



void functionA()

{

    functionB();

}



int main()

{

    try

    {

        functionA();

    }


    catch(int)

    {

        cout<<"Exception handled";

    }


    return 0;

}



Output:


Exception handled



## Working of Stack Unwinding


Steps:


1. Exception occurs in functionB.

2. FunctionB has no matching catch block.

3. FunctionB is removed from stack.

4. Control moves to functionA.

5. FunctionA is removed from stack.

6. Main function catch block handles the exception.



## Destructor Execution During Unwinding


During stack unwinding:


- Local objects are destroyed automatically.
- Destructors are called.


This helps release resources properly.



## Importance of Stack Unwinding


Stack unwinding provides:


### Automatic Cleanup

Resources are released safely.


### Memory Management

Prevents resource leaks.


### Reliable Exception Handling

Allows exceptions to travel through functions.



## Real-World Example


File Processing System:


A file object is created.


An exception occurs while processing.


During stack unwinding:


- File object destructor executes.
- File is closed automatically.



## Best Practices


To use stack unwinding effectively:


- Release resources using destructors.
- Use RAII techniques.
- Avoid throwing exceptions from destructors.



## Key Points


Remember:


- Stack unwinding happens when exceptions move through functions.
- Local objects are destroyed during unwinding.
- Destructors are automatically called.
- It ensures safe resource management.


Stack unwinding is an important mechanism that makes C++ exception handling reliable and efficient.

`

};


export default lesson13;