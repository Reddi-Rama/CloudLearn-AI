const lesson10 = {

  id: "lesson10",

  title: "Structure of a Java Program",

  content: `

# Structure of a Java Program


## Introduction


Every Java program follows a specific structure that defines how code is organized and executed.


Understanding Java program structure helps developers write clean, readable, and maintainable applications.


A basic Java program contains:


- Package declaration.
- Import statements.
- Class declaration.
- Variables.
- Methods.
- Main method.



## Basic Structure of Java Program


Example:


package example;


import java.util.Scanner;


public class Main

{

    public static void main(String[] args)

    {

        System.out.println("Hello Java");

    }

}



## Components of Java Program Structure



# Package Declaration


A package is used to group related classes and interfaces.


It helps organize Java applications.



Example:


package mypackage;



Package declaration is optional.



## Import Statement


Import statements allow a program to use predefined classes from Java libraries.



Example:


import java.util.Scanner;



The Scanner class is imported from the Java utility package.



## Class Declaration


Every Java program contains at least one class.


The class contains variables and methods.



Example:


class Student

{

}



The class name usually starts with an uppercase letter.



## Main Method


The main method is the entry point of Java program execution.



Syntax:


public static void main(String[] args)

{

}



The JVM searches for this method to start execution.



## Variables


Variables store data values used by the program.



Example:


int age = 20;



Variables can be declared inside:


- Classes.
- Methods.
- Blocks.



## Methods


Methods contain instructions that perform specific tasks.



Example:


void display()

{

    System.out.println("Java");

}



Methods improve:


- Code reuse.
- Program organization.
- Maintainability.



## Statements


Statements are instructions executed by the program.



Example:


System.out.println("Hello");



Every statement usually ends with a semicolon.



## Comments


Comments provide explanations inside the program.


Types:


Single-line comment:


// This is a comment



Multi-line comment:


/*

This is a comment

*/



## Complete Java Program Example


public class Main

{

    public static void main(String[] args)

    {

        int number = 10;


        System.out.println(number);

    }

}



## Execution Flow of Java Program


The execution process is:



Source Code

↓

Compiler

↓

Bytecode

↓

JVM

↓

Output



## Naming Rules in Java


Java follows naming conventions:


Class names:


Use PascalCase.


Example:


StudentDetails



Variables and methods:


Use camelCase.


Example:


studentName



Constants:


Use uppercase letters.


Example:


MAX_VALUE



## Importance of Java Program Structure


A proper structure provides:


- Better readability.
- Easy debugging.
- Code organization.
- Easy maintenance.
- Professional programming style.



## Real-World Applications


Java program structure is used in:


### Enterprise Applications


Large software systems.


### Banking Systems


Transaction processing applications.


### Web Applications


Server-side programs.



## Key Points


Remember:


- Java programs are organized using classes and methods.
- main() method is the starting point.
- Packages organize related classes.
- Import statements access libraries.
- Proper structure improves code quality.


Understanding Java program structure helps developers create professional Java applications.

`

};


export default lesson10;