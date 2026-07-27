const lesson6 = {

  id: "lesson6",

  title: "Template Instantiation",

  content: `

# Template Instantiation


## Introduction


When a template is created, it does not immediately generate executable code.

Instead, it acts as a blueprint that the compiler uses to create actual functions or classes when required.


The process of generating a specific version of a template is called Template Instantiation.



## What is Template Instantiation?


Template instantiation is the process where the compiler creates a concrete version of a template for a particular data type.


Example:


A function template:


findMaximum(T value1, T value2)


When called with integers:


findMaximum(10,20)


The compiler creates:


findMaximum(int,int)



When called with double values:


findMaximum(5.5,8.5)


The compiler creates:


findMaximum(double,double)



## Automatic Instantiation


In most cases, the compiler automatically creates template versions when they are used.


Example:


findMaximum(20,40);


findMaximum(15.5,25.5);


findMaximum('A','Z');



The compiler generates separate versions for:

- int
- double
- char



## Explicit Instantiation


Programmers can also request template generation manually.

This is called Explicit Instantiation.


Syntax:


template class ClassName<dataType>;



Example:


template class Calculator<int>;

template class Calculator<double>;



This tells the compiler to generate those specific versions.



## Example Program


#include<iostream>

using namespace std;


template <typename T>


T square(T number)

{

    return number * number;

}



int main()

{

    cout << square(8) << endl;


    cout << square(5.5);


    return 0;

}



Output:


64

30.25



## Working Behind the Scenes


When the program is compiled:


For integer value:


square(8)


Compiler creates:


square(int)



For decimal value:


square(5.5)


Compiler creates:


square(double)



The programmer does not manually write these functions.



## Advantages of Template Instantiation


Template instantiation provides:


### Automatic Code Generation

Compiler creates required versions automatically.


### Type Safety

Data type checking happens during compilation.


### Better Performance

Generated code is optimized by the compiler.


### Reduced Programmer Effort

No need to write separate implementations.



## Applications


Template instantiation is used in:


### STL Containers


Examples:

- vector<int>
- vector<string>


### Mathematical Libraries


Generic calculations.


### Software Frameworks


Reusable components.



## Template Instantiation and Compilation


Templates are processed during compilation.

The compiler determines:

- Required data types.
- Required template versions.
- Generated code.



## Key Points


Remember:


- Template instantiation creates actual template code.
- It happens during compilation.
- It can be automatic or explicit.
- It improves code reuse and efficiency.


Template instantiation is the mechanism that makes generic programming possible in C++.

`

};


export default lesson6;