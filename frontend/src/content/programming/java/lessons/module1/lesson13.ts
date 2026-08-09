const lesson13 = {

  id: "lesson13",

  title: "Variables in Java",

  content: `

# Variables in Java


## Introduction


Variables are one of the most important concepts in programming.


A variable is a named memory location used to store data values that can be changed during program execution.


Java variables allow programs to store and process information dynamically.



## What is a Variable?


A variable is a container that stores a value in computer memory.


Example:


int age = 20;



Here:


int → Data type

age → Variable name

20 → Stored value



## Declaring Variables


Before using a variable, it must be declared.


Syntax:


dataType variableName;



Example:


int number;



## Initializing Variables


Assigning a value to a variable is called initialization.



Example:


number = 10;



Declaration and initialization can be combined:


int number = 10;



# Types of Variables in Java


Java mainly has three types of variables:


- Local variables.
- Instance variables.
- Static variables.



# Local Variables


## Introduction


A local variable is declared inside a method, constructor, or block.


It can only be accessed within that specific area.



Example:


void display()

{

    int age = 20;

}



## Characteristics


- Created when method execution starts.
- Destroyed after method execution ends.
- Must be initialized before use.



# Instance Variables


## Introduction


Instance variables are declared inside a class but outside methods.


They belong to objects.



Example:


class Student

{

    int age;

}



## Characteristics


- Each object has its own copy.
- Stored inside object memory.
- Can have default values.



# Static Variables


## Introduction


Static variables are declared using the static keyword.


They belong to the class rather than individual objects.



Example:


class Student

{

    static String collegeName;

}



## Characteristics


- Shared among all objects.
- Created when class loads.
- Used for common data.



# Variable Naming Rules


Java variables follow identifier rules.


Rules:


- Must begin with a letter, underscore, or dollar symbol.
- Cannot contain spaces.
- Cannot use keywords.
- Are case-sensitive.



Valid:


studentAge


totalMarks


_count



Invalid:


2value


student name


class



# Variable Initialization


Variables can store different types of values.



Example:


int marks = 95;


double price = 250.5;


char grade = 'A';


boolean result = true;



# Default Values of Variables


Instance and static variables receive default values automatically.



Examples:


int → 0


double → 0.0


boolean → false


reference → null



Local variables do not receive default values.



# Example Program


class VariableExample

{

    public static void main(String[] args)

    {

        int age = 20;

        String name = "Java";


        System.out.println(name);

        System.out.println(age);

    }

}



Output:


Java

20



# Memory Allocation of Variables


Variables are stored in memory based on their type.


Primitive variables store actual values.


Reference variables store object references.



# Importance of Variables


Variables help programs to:


- Store information.
- Process data.
- Perform calculations.
- Control program execution.



# Real-World Applications


Variables are used in:


### Banking Applications


Storing account balance and customer details.


### E-Commerce Systems


Storing product price and quantity.


### Student Management Systems


Storing student information.



# Best Practices


Follow these practices:


- Use meaningful variable names.
- Initialize variables properly.
- Avoid unnecessary variables.
- Follow naming conventions.



# Key Points


Remember:


- Variables store data values.
- Java has local, instance, and static variables.
- Variables must follow naming rules.
- Local variables need initialization.
- Static variables are shared among objects.


Variables are the foundation for storing and manipulating data in Java programs.

`

};


export default lesson13;