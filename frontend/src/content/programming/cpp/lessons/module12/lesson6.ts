const lesson6 = {

  id: "lesson6",

  title: "Multiple catch Blocks",

  content: `

# Multiple catch Blocks


## Introduction


A program may generate different types of exceptions during execution.

For example:


- Integer errors.
- Floating-point errors.
- String errors.
- Custom object errors.


C++ allows multiple catch blocks to handle different types of exceptions separately.



## What are Multiple catch Blocks?


Multiple catch blocks are multiple exception handlers associated with a single try block.


Each catch block handles a specific exception type.



## Syntax


try

{

    // code that may throw exceptions

}


catch(type1)

{

    // handle type1 exception

}


catch(type2)

{

    // handle type2 exception

}



## Example Program


#include<iostream>

using namespace std;


int main()

{

    int choice;


    cout<<"Enter choice: ";

    cin>>choice;


    try

    {

        if(choice == 1)

        {

            throw 100;

        }


        else if(choice == 2)

        {

            throw 5.5;

        }


        else

        {

            throw 'A';

        }

    }


    catch(int value)

    {

        cout<<"Integer Exception: "<<value;

    }


    catch(double value)

    {

        cout<<"Double Exception: "<<value;

    }


    catch(char value)

    {

        cout<<"Character Exception: "<<value;

    }


    return 0;

}



Output:


Enter choice: 1

Integer Exception: 100



## Working of Multiple catch Blocks


The process:


1. try block executes.

2. Exception is thrown.

3. Compiler checks catch blocks from top to bottom.

4. Matching catch block executes.

5. Remaining catch blocks are skipped.



## Order of catch Blocks


Catch blocks should be arranged carefully.


Specific exceptions should come before general exceptions.



Example:


Correct:


catch(int)

{

}


catch(...)

{

}



Incorrect:


catch(...)

{

}


catch(int)

{

}



Because catch(...) handles everything first.



## Advantages of Multiple catch Blocks


They provide:


### Specific Error Handling

Different errors can have different solutions.


### Better Debugging

Errors are easier to identify.


### Improved Program Design

Exception handling becomes organized.



## Real-World Applications


Multiple catch blocks are used in:


### Banking Applications

Handling:

- Invalid amount.
- Account errors.
- Transaction failures.



### File Systems

Handling:

- File not found.
- Permission errors.



### Database Applications

Handling:

- Connection failure.
- Query errors.



## Key Points


Remember:


- Multiple catch blocks handle different exceptions.
- Each catch handles a specific type.
- The first matching catch executes.
- Order of catch blocks matters.


Multiple catch blocks make C++ exception handling more flexible and powerful.

`

};


export default lesson6;