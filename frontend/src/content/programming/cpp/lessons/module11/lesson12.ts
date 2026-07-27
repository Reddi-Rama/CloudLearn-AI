const lesson12 = {

  id: "lesson12",

  title: "Lambda Expressions",

  content: `

# Lambda Expressions


## Introduction


Lambda expressions are a feature introduced in modern C++ that allows programmers to create small anonymous functions.


They are mainly used with STL algorithms for short operations.



## What is a Lambda Expression?


A lambda expression is an unnamed function that can be defined directly inside another function.


It is useful when a function is needed only for a short operation.



## Syntax


[capture](parameters)

{

    function body

};



The parts are:


Capture:

Defines variables from the outside scope that the lambda can access.


Parameters:

Input values for the lambda.


Body:

Contains the execution code.



## Simple Lambda Example


#include<iostream>

using namespace std;


int main()

{

    auto display = []()

    {

        cout<<"Hello C++";

    };


    display();


    return 0;

}



Output:


Hello C++



## Lambda with Parameters


Example:


auto add = [](int a, int b)

{

    return a + b;

};



Calling:


add(10,20);



Output:


30



## Lambda with STL Algorithms


Lambda expressions are commonly used with STL algorithms.


Example:


sort(numbers.begin(), numbers.end(),

[](int a, int b)

{

    return a > b;

}

);



This sorts elements in descending order.



## Advantages of Lambda Expressions


Lambda expressions provide:


### Shorter Code

Small functions can be written directly.


### Better Readability

Logic stays close to where it is used.


### Easy STL Integration

They work well with algorithms.



## Applications


Lambda expressions are used in:


### Sorting


Custom sorting rules.


### Filtering


Selecting required data.


### Data Processing


Applying operations to collections.



## Lambda Capture Types


Common capture methods:


Capture by Value:


Copies variables.


Capture by Reference:


Uses original variables.


Capture All:


Captures all required variables.



## Example with Capture


#include<iostream>

using namespace std;


int main()

{

    int value = 10;


    auto display = [&]()

    {

        cout << value;

    };


    display();


    return 0;

}



Output:


10



## Lambda Expressions in Modern C++


Lambda expressions are widely used in:


- C++11 and later versions.
- STL algorithms.
- Functional programming style.
- Modern software development.



## Key Points


Remember:


- Lambda expressions create anonymous functions.
- They improve code readability.
- They are widely used with STL algorithms.
- They are an important feature of modern C++.


Lambda expressions make C++ programs shorter, cleaner, and more expressive.

`

};


export default lesson12;