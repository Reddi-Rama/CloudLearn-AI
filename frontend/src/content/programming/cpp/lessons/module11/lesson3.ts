const lesson3 = {

  id: "lesson3",

  title: "Class Templates",

  content: `

# Class Templates


## Introduction


Function templates allow programmers to create generic functions.

However, many situations require entire classes to work with different data types.


For example:

A stack may store:

- Integers in one application.
- Floating-point values in another application.
- Strings in another application.


Creating separate classes for every data type increases code duplication.


To solve this problem, C++ provides Class Templates.



## What is a Class Template?


A class template allows programmers to create a generic class that can work with different data types.


The compiler generates the required class version when an object is created.



## Syntax


template <typename T>


class ClassName

{

    // Generic members

};



Here:

T represents a generic data type.



## Example: Generic Calculator


#include<iostream>

using namespace std;


template <typename T>


class Calculator

{

private:


    T number1;

    T number2;


public:


    Calculator(T first, T second)

    {

        number1 = first;

        number2 = second;

    }


    void addition()

    {

        cout << number1 + number2;

    }

};



int main()

{

    Calculator<int> integerCalculator(20,30);


    integerCalculator.addition();


    return 0;

}



Output:


50



## Creating Objects of Class Templates


While creating objects, the data type is specified inside angle brackets.


Example:


Calculator<int> object1;


Calculator<double> object2;



The compiler creates separate versions of the class.



## Working of Class Templates


Example:


Calculator<int>


Compiler generates:


Class for integer values



Calculator<double>


Compiler generates:


Class for double values



The original template remains unchanged.



## Advantages of Class Templates


Class templates provide:


### Generic Class Design

One class can support multiple data types.


### Code Reusability

The same implementation can be reused.


### Reduced Maintenance

Changes are required only once.


### Better Scalability

Applications can easily support new data types.



## Applications of Class Templates


Class templates are used in:


### Data Structures


Examples:

- Stack.
- Queue.
- Linked List.



### Standard Template Library


STL containers such as:

- Vector.
- List.
- Map.



### Enterprise Applications


Used for reusable software components.



## Real-World Example


A storage system can store:


Integer data:

Storage<int>


Decimal data:

Storage<double>


String data:

Storage<string>



The same class design works for all types.



## Key Points


Remember:


- Class templates create generic classes.
- They support multiple data types.
- The compiler generates required versions.
- STL is built using class templates.


Class templates are essential for creating reusable and flexible C++ software components.

`

};


export default lesson3;