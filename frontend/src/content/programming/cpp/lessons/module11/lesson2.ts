const lesson2 = {

  id: "lesson2",

  title: "Function Templates",

  content: `

# Function Templates


## Introduction


A Function Template is the simplest and most commonly used type of template in C++.


It allows a single function to perform the same operation on different data types without rewriting the function multiple times.


Function templates are widely used in generic programming.



## Need for Function Templates


Consider a swapping operation.


Without templates, separate functions are required:


swap(int,int)


swap(float,float)


swap(double,double)



The logic remains the same, but the function must be rewritten for every data type.


Function templates solve this problem by creating a single generic function.



## Syntax


template <typename T>


returnType functionName(T value1, T value2)

{

    // Generic logic

}



Here:


T represents a generic data type.


The compiler replaces T with the actual data type during compilation.



## Example: Swapping Two Values


#include<iostream>

using namespace std;


template <typename T>


void swapValues(T &first, T &second)

{

    T temporary;


    temporary = first;

    first = second;

    second = temporary;

}



int main()

{

    int number1 = 25;

    int number2 = 50;


    swapValues(number1, number2);


    cout << number1 << " ";

    cout << number2;


    return 0;

}



Output:


50 25



## Working of Function Templates


When the function is called:


swapValues(number1, number2)



The compiler identifies the data type:


int


and creates:


swapValues(int,int)



For another call:


swapValues(double,double)



A separate version is generated automatically.



## Multiple Data Types


Function templates can work with:


- Integer values.
- Floating-point values.
- Characters.
- Strings.
- User-defined objects.



## Advantages of Function Templates


Function templates provide:


### Generic Programming

One function works with multiple data types.


### Code Reusability

The same implementation can be reused.


### Reduced Development Time

Less code needs to be written.


### Better Maintenance

Changes are easier to manage.


### Type Safety

Errors are detected during compilation.



## Applications of Function Templates


Function templates are used in:


### Mathematical Applications

Generic calculations.


### Sorting Algorithms

Sorting different data types.


### Searching Programs

Searching different collections.


### Scientific Software

Processing different numerical values.



## Function Template Overloading


C++ allows multiple function templates with different parameters.


Example:


template <typename T>

void display(T value)



template <typename T1, typename T2>

void display(T value1, T value2)



The compiler selects the appropriate version.



## Key Points


Remember:


- Function templates create generic functions.
- They reduce duplicate code.
- Compiler generates required versions automatically.
- They support different data types.


Function templates are an important foundation of generic programming in C++.

`

};


export default lesson2;