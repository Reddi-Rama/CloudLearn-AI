const lesson7 = {

  id: "lesson7",

  title: "Type Conversion in Java",

  content: `

# Type Conversion in Java


## Introduction


In programming, data often needs to be converted from one type to another.


For example:


- Converting an integer into a decimal value.
- Converting a smaller data type into a larger data type.
- Converting user input from String into numbers.


Java provides type conversion mechanisms to handle these situations.



## What is Type Conversion?


Type conversion is the process of converting a value from one data type into another data type.


It allows different types of data to work together in a program.



Example:


int number = 10;

double value = number;



Here:


The integer value is converted into a double value.



## Types of Type Conversion in Java


Java supports two main types of conversion:


1. Implicit Type Conversion.

2. Explicit Type Conversion.



# 1. Implicit Type Conversion


## Introduction


Implicit type conversion is the automatic conversion performed by Java compiler.


It is also called:


- Widening conversion.
- Automatic conversion.



It happens when a smaller data type is converted into a larger data type.



## Widening Conversion Order


The conversion follows this order:


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



A smaller type can automatically convert into a larger type.



## Example


int number = 100;


double value = number;



Output:


100.0



Here:


The int value is automatically converted into double.



## Widening Conversion Example


class ConversionExample

{

    public static void main(String[] args)

    {

        int number = 50;


        double value = number;


        System.out.println(value);

    }

}



Output:


50.0



## Advantages of Implicit Conversion


It provides:


- No data loss.
- Easy conversion.
- Compiler support.
- Safer operations.



# 2. Explicit Type Conversion


## Introduction


Explicit type conversion is the conversion performed manually by the programmer.


It is also called:


- Narrowing conversion.
- Type casting.



It converts a larger data type into a smaller data type.



## Syntax


(dataType) value;



Example:


double price = 99.99;


int value = (int) price;



Here:


double is converted into int.



## Narrowing Conversion Example


class CastingExample

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



The decimal part is removed.



# Difference Between Widening and Narrowing Conversion



## Widening Conversion


Characteristics:


- Automatic conversion.
- Smaller type to larger type.
- No data loss.
- Done by compiler.



Example:


int → double



## Narrowing Conversion


Characteristics:


- Manual conversion.
- Larger type to smaller type.
- Possible data loss.
- Done by programmer.



Example:


double → int



# Type Conversion Between Numeric Types


Java allows conversion between numeric data types.



Example:


byte value = 10;


int number = value;


long result = number;



# Conversion Between char and int


Characters can be converted into integer values using ASCII/Unicode values.



Example:


char letter = 'A';


int value = letter;



Output:


65



# String Conversion


Java also provides conversion between String and primitive values.



## String to Integer


Example:


String value = "100";


int number = Integer.parseInt(value);



## String to Double


Example:


String price = "99.5";


double amount = Double.parseDouble(price);



# Primitive to String Conversion


Example:


int number = 100;


String value = String.valueOf(number);



# Automatic Type Promotion


During calculations, Java automatically promotes smaller data types.



Example:


byte a = 10;


byte b = 20;


int result = a + b;



The result becomes int.



# Example Program


class TypeConversionExample

{

    public static void main(String[] args)

    {

        int number = 25;


        double value = number;


        System.out.println(value);


        double price = 50.75;


        int amount = (int)price;


        System.out.println(amount);

    }

}



Output:


25.0

50



# Real-World Applications



## Banking Systems


Used for:


- Currency calculations.
- Interest calculation.
- Data processing.



## E-Commerce Applications


Used for:


- Price conversion.
- Discount calculations.
- Tax processing.



## Data Processing Applications


Used for:


- Converting input data.
- Formatting values.
- Mathematical operations.



# Common Mistakes



## Data Loss During Narrowing


Example:


double value = 10.99;


int number = (int)value;



Output:


10



The decimal part is lost.



## Incorrect Conversion


Trying invalid conversions can cause errors.



# Best Practices


Follow these practices:


- Use widening conversion whenever possible.
- Use casting carefully.
- Check possible data loss.
- Choose appropriate data types.



# Key Points


Remember:


- Type conversion changes one data type into another.
- Implicit conversion is automatic.
- Explicit conversion requires casting.
- Widening conversion avoids data loss.
- Narrowing conversion may lose information.
- String conversion uses parsing methods.


Type conversion helps Java programs handle different types of data efficiently.

`

};


export default lesson7;