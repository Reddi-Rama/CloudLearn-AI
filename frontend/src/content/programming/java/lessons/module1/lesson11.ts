const lesson11 = {

  id: "lesson11",

  title: "Java Tokens",

  content: `

# Java Tokens


## Introduction


Tokens are the smallest individual elements of a Java program that are meaningful to the compiler.


The Java compiler reads source code by identifying different tokens.


Every Java program is made up of different types of tokens.



## Types of Java Tokens


Java provides six main types of tokens:


- Keywords.
- Identifiers.
- Literals.
- Operators.
- Separators.
- Comments.



# 1. Keywords


Keywords are reserved words that have predefined meanings in Java.


They cannot be used as names for variables, classes, or methods.



Examples:


class

public

static

void

int

if

while



Example:


class Student

{

}



Here, class is a keyword.



# 2. Identifiers


Identifiers are names given to program elements.


Examples:


- Classes.
- Variables.
- Methods.
- Packages.



Example:


int age;



Here:


age is an identifier.



## Rules for Identifiers


Identifiers:


- Can contain letters, digits, underscore, and dollar symbol.
- Cannot start with a digit.
- Cannot contain spaces.
- Cannot be a keyword.
- Are case-sensitive.



Valid identifiers:


studentName

totalMarks

_count



Invalid identifiers:


1student

class

student name



# 3. Literals


Literals are fixed values assigned directly in a program.



Examples:


10

25.5

'A'

"Java"



Example:


int number = 10;



Here:


10 is a literal.



## Types of Literals


Java supports:


- Integer literals.
- Floating-point literals.
- Character literals.
- String literals.
- Boolean literals.



# 4. Operators


Operators perform operations on values and variables.



Examples:


Arithmetic operators:


+

-

*

/



Example:


a + b



Logical operators:


&&

||

!



# 5. Separators


Separators are symbols used to organize Java code.



Examples:


Parentheses:


()



Braces:


{ }



Semicolon:


;



Comma:


,



Example:


System.out.println("Java");



# 6. Comments


Comments are notes written inside programs.


They are ignored by the compiler.



Types:


## Single Line Comment


Example:


// Display message



## Multi-Line Comment


Example:


/*

Java Program

*/



## Example Program Using Tokens


public class Example

{

    public static void main(String[] args)

    {

        int number = 10;

        System.out.println(number);

    }

}



Tokens used:


Keyword:


class, public, int



Identifier:


Example, number



Literal:


10



Operator:


=



Separator:


{}, (), ;



## Importance of Tokens


Understanding tokens helps:


- Write correct Java syntax.
- Understand compiler behavior.
- Avoid programming errors.
- Improve coding skills.



## Real-World Applications


Tokens are the foundation of:


- Java applications.
- Enterprise software.
- Android applications.
- Cloud systems.



## Key Points


Remember:


- Tokens are the smallest elements of Java programs.
- Java has six types of tokens.
- Keywords have predefined meanings.
- Identifiers are programmer-defined names.
- Literals represent fixed values.
- Operators perform operations.


Java tokens form the basic building blocks of every Java program.

`

};


export default lesson11;