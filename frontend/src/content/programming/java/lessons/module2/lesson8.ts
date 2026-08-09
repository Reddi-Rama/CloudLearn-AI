const lesson8 = {

  id: "lesson8",

  title: "Type Casting in Java",

  content: `

# Type Casting in Java


## Introduction


Type casting is the process of converting one data type into another data type.


In Java, different situations require converting values from one type to another.


Examples:


- Converting decimal values into integers.
- Converting characters into numbers.
- Converting larger data types into smaller data types.



## Why Type Casting is Needed


Type casting is required when:


- Different data types are used together.
- A programmer needs a specific data type.
- Data needs to be converted manually.
- Mathematical operations require conversion.



## Types of Type Casting


Java supports two types of type casting:


1. Widening Casting.


2. Narrowing Casting.



# Widening Casting


## Introduction


Widening casting converts a smaller data type into a larger data type.


It is also called:


- Automatic casting.
- Implicit conversion.



The conversion happens automatically by the Java compiler.



## Widening Conversion Order


byte

↓

short

↓

int

↓

long

↓

float

↓

double



A smaller data type can be converted into a larger data type safely.



## Example


class WideningExample

{

    public static void main(String[] args)

    {

        int number = 100;


        double value = number;


        System.out.println(value);

    }

}



Output:


100.0



## Explanation


The integer value is automatically converted into double.


No data is lost because double can store larger values.



# Narrowing Casting


## Introduction


Narrowing casting converts a larger data type into a smaller data type.


It is also called:


- Explicit casting.
- Manual conversion.



The programmer must specify the conversion.



## Syntax


(dataType) value



Example:


double price = 99.99;


int amount = (int) price;



## Example Program


class NarrowingExample

{

    public static void main(String[] args)

    {

        double value = 99.99;


        int number = (int)value;


        System.out.println(number);

    }

}



Output:


99



## Explanation


The decimal part is removed during narrowing conversion.



# Difference Between Widening and Narrowing Casting



## Widening Casting


Characteristics:


- Automatic conversion.
- Smaller type to larger type.
- No data loss.
- Done by compiler.



Example:


int to double



## Narrowing Casting


Characteristics:


- Manual conversion.
- Larger type to smaller type.
- Possible data loss.
- Done by programmer.



Example:


double to int



# Type Casting with Primitive Data Types


Java allows casting between primitive data types.



Example:


int number = 50;


double value = number;



Here:


The integer value is converted into double.



Example:


double salary = 50000.75;


int amount = (int)salary;



Here:


The decimal value is converted into integer.



# Character Type Casting


Characters can be converted into integer values.


Java uses Unicode values for characters.



Example:


char letter = 'A';


int value = letter;



Output:


65



Explanation:


The Unicode value of A is 65.



# Integer to Character Conversion


Integer values can be converted into characters.



Example:


int number = 66;


char letter = (char)number;



Output:


B



# Type Casting in Expressions


Java automatically converts values during expressions.



Example:


int a = 10;


double b = 5.5;


double result = a + b;



Explanation:


The int value is converted into double before addition.



# Type Casting Example Program


class TypeCastingExample

{

    public static void main(String[] args)

    {

        int number = 25;


        double value = number;


        System.out.println(value);


        double price = 99.99;


        int amount = (int)price;


        System.out.println(amount);

    }

}



Output:


25.0

99



# Data Loss During Type Casting


Narrowing conversion may cause data loss.



Example:


double value = 10.75;


int number = (int)value;



Output:


10



The decimal part is removed.



# Boolean Type Casting


Boolean values cannot be converted into numeric data types.



Example:


boolean status = true;



Invalid:


int value = (int)status;



Java does not allow this conversion.



# Real-World Applications



## Banking Applications


Type casting is used for:


- Currency conversion.
- Interest calculations.
- Financial operations.



## E-Commerce Applications


Used for:


- Price calculations.
- Discount processing.
- Tax calculations.



## Data Processing Applications


Used for:


- Data transformation.
- Format conversion.
- Mathematical operations.



# Best Practices


Follow these practices:


- Prefer widening conversion whenever possible.
- Use narrowing conversion carefully.
- Check possible data loss.
- Choose suitable data types.



# Common Mistakes



## Losing Decimal Values


Example:


double value = 15.99;


int number = (int)value;



Result:


15



The decimal part is lost.



## Incorrect Casting


Always ensure the conversion is valid before casting.



# Key Points


Remember:


- Type casting converts one data type into another.
- Widening casting is automatic.
- Narrowing casting is manual.
- Narrowing conversion may lose data.
- Casting uses the data type inside parentheses.
- Java does not support boolean casting.


Type casting gives programmers control over data conversion and helps Java applications handle different data types efficiently.

`

};


export default lesson8;