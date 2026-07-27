const lesson1 = {

  id: "lesson1",

  title: "Introduction to Templates",

  content: `

# Introduction to Templates


## Introduction


As software applications become larger, programmers often face situations where the same logic needs to be implemented for different data types.


For example, a program may need to find the larger value between:

- Two integers.
- Two floating-point numbers.
- Two characters.
- Two strings.


Writing separate functions for every data type increases:

- Code duplication.
- Development effort.
- Maintenance complexity.


To overcome this problem, C++ provides Templates.


## What are Templates?


A template is a powerful feature in C++ that allows programmers to write generic code that works with multiple data types.


Instead of creating separate versions of the same function or class, a single template can generate the required version automatically during compilation.



## Why Templates are Needed


Without templates, programmers need to create different functions for different data types.


Example:


Function for integers:


findMaximum(int a, int b)


Function for floating values:


findMaximum(float a, float b)


Function for characters:


findMaximum(char a, char b)



Although the logic is identical, the code must be rewritten multiple times.


Templates eliminate this repetition by providing one generic implementation.



## General Syntax


template <typename T>


returnType functionName(T value1, T value2)

{

    // Generic code

}



The keyword typename can also be replaced with class.


Example:


template <class T>


Both forms have the same meaning.



## Example of Function Template


#include<iostream>

using namespace std;


template <typename T>


T findMaximum(T value1, T value2)

{

    if(value1 > value2)

        return value1;


    return value2;

}



int main()

{

    cout << findMaximum(25,18) << endl;


    cout << findMaximum(15.5,20.8) << endl;


    cout << findMaximum('A','Z');


    return 0;

}



Output:


25

20.8

Z



## How Templates Work


When a template function is called, the compiler automatically creates the required version based on the data type.


For example:


findMaximum(25,18)


Compiler creates:


findMaximum(int,int)



findMaximum(15.5,20.8)


Compiler creates:


findMaximum(double,double)



## Advantages of Templates


Templates provide:


### Code Reusability

The same logic can work with different data types.


### Reduced Code Duplication

Multiple versions of the same function are avoided.


### Better Maintenance

Changes are required only once.


### Improved Flexibility

Programs can support multiple data types easily.



## Applications of Templates


Templates are used in:


- Standard Template Library.
- Data structures.
- Mathematical libraries.
- Sorting algorithms.
- Searching algorithms.
- Enterprise applications.



## Key Points


Remember:


- Templates support generic programming.
- They work with multiple data types.
- The compiler generates required versions automatically.
- They reduce duplicate code.


Templates are one of the most important features of modern C++ programming.

`

};


export default lesson1;