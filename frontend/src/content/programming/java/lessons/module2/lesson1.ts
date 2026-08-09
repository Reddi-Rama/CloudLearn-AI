const lesson1 = {

  id: "lesson1",

  title: "Primitive Data Types in Java",

  content: `

# Primitive Data Types in Java


## Introduction


Data is the foundation of every programming language.


Every application stores and processes different types of information such as:


- Numbers.
- Characters.
- Decimal values.
- Logical values.


Java uses data types to define the type of data a variable can store.



## What are Data Types?


A data type specifies:


- The type of value a variable can store.
- The amount of memory required.
- The operations that can be performed.


Example:


int age = 20;


Here:


int is the data type.

age is the variable name.

20 is the stored value.



## Types of Data Types in Java


Java data types are divided into two categories:


1. Primitive Data Types

2. Non-Primitive Data Types



## What are Primitive Data Types?


Primitive data types are predefined data types provided by Java.


They store simple values directly in memory.


Java provides eight primitive data types:


- byte
- short
- int
- long
- float
- double
- char
- boolean



# Integer Data Types


Integer data types store whole numbers without decimal values.


They are used for:


- Age.
- Count.
- Quantity.
- IDs.



## byte Data Type


byte is the smallest integer data type in Java.


Memory Size:


8 bits


Range:


-128 to 127


Example:


byte age = 25;


Usage:


Used when memory optimization is required.



## short Data Type


short stores medium-sized integer values.


Memory Size:


16 bits


Range:


-32,768 to 32,767


Example:


short year = 2026;



## int Data Type


int is the most commonly used integer data type.


Memory Size:


32 bits


Example:


int marks = 95;


Real-world usage:


- Student marks.
- Employee ID.
- Product quantity.
- Age.



## long Data Type


long stores very large integer values.


Memory Size:


64 bits


Example:


long population = 1400000000L;


Used for:


- Large database IDs.
- Population values.
- Large calculations.



# Floating Point Data Types


Floating point types store decimal values.



## float Data Type


float stores decimal values with single precision.


Memory Size:


32 bits


Example:


float price = 99.99f;


The suffix f represents a float value.



## double Data Type


double stores decimal values with higher precision.


Memory Size:


64 bits


Example:


double salary = 50000.50;


Used for:


- Banking calculations.
- Scientific calculations.
- Financial applications.



# Character Data Type


## char Data Type


char stores a single character.


Characters are written inside single quotes.


Memory Size:


16 bits


Example:


char grade = 'A';


Used for:


- Letters.
- Symbols.
- Characters.



# Boolean Data Type


## boolean Data Type


boolean stores logical values.


It can store only two values:


true


false


Example:


boolean isActive = true;


Used for:


- Login status.
- Payment status.
- Validation results.



# Example Program


class PrimitiveExample

{

    public static void main(String[] args)

    {

        int age = 20;

        double salary = 50000.50;

        char grade = 'A';

        boolean status = true;


        System.out.println(age);

        System.out.println(salary);

        System.out.println(grade);

        System.out.println(status);

    }

}



## Output


20

50000.50

A

true



# Default Values of Primitive Data Types


Instance variables receive default values automatically.


byte → 0


short → 0


int → 0


long → 0L


float → 0.0f


double → 0.0d


char → '\\u0000'


boolean → false



Local variables must be initialized before use.



# Primitive Data Types in Real Applications


## Banking Systems


Used for:


- Account balance.
- Transaction amounts.
- Customer information.



## Student Management Systems


Used for:


- Marks.
- Grades.
- Attendance.



## E-Commerce Applications


Used for:


- Product price.
- Quantity.
- Discount calculations.



# Best Practices


Follow these practices:


- Choose the correct data type.
- Use meaningful variable names.
- Avoid unnecessary large data types.
- Use double when precision is required.



# Common Mistakes


## Incorrect Float Declaration


Wrong:


float value = 10.5;


Correct:


float value = 10.5f;



## Using Small Data Types for Large Values


Choosing an incorrect data type may cause overflow and data loss.



# Key Points


Remember:


- Java provides eight primitive data types.
- Primitive types store simple values directly.
- int is the most commonly used integer type.
- double is used for accurate decimal values.
- char stores a single character.
- boolean stores true or false values.


Primitive data types are the foundation for storing and processing information in Java programs.

`

};


export default lesson1;