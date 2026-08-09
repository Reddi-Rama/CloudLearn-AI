const lesson14 = {

  id: "lesson14",

  title: "Unary Operators in Java",

  content: `

# Unary Operators in Java


## Introduction


Unary operators are operators that work on only one operand.


Unlike arithmetic operators that require two values, unary operators perform operations on a single value or variable.



Examples:


- Increasing a value by one.
- Decreasing a value by one.
- Changing positive value to negative.
- Reversing a boolean value.



## What are Unary Operators?


Unary operators are special operators that perform operations on a single operand.



Example:


int number = 10;


number++;



Here:


++ operates on only one variable.



# Types of Unary Operators


Java provides different unary operators:


- Unary plus (+).
- Unary minus (-).
- Increment operator (++).


- Decrement operator (--).


- Logical NOT operator (!).



# Unary Plus Operator (+)


## Introduction


Unary plus operator indicates that a value is positive.


It does not change the value.



Example:


int number = 10;


System.out.println(+number);



Output:


10



## Usage


It is rarely used because positive values are default in Java.



# Unary Minus Operator (-)


## Introduction


Unary minus operator changes the sign of a value.



Example:


int number = 10;


System.out.println(-number);



Output:


-10



## Example Program


class UnaryExample

{

    public static void main(String[] args)

    {

        int value = 20;


        System.out.println(-value);

    }

}



Output:


-20



# Increment Operator (++)


## Introduction


The increment operator increases a variable value by one.



Example:


int count = 5;


count++;



New value:


6



## Types of Increment Operators


Java provides two types:


1. Post Increment.

2. Pre Increment.



# Post Increment (value++)


## Introduction


In post increment, the current value is used first, then increased by one.



Example:


int number = 10;


int result = number++;



Execution:


First:


result = 10


Then:


number becomes 11



## Example Program


class PostIncrement

{

    public static void main(String[] args)

    {

        int number = 5;


        System.out.println(number++);

        System.out.println(number);

    }

}



Output:


5

6



# Pre Increment (++value)


## Introduction


In pre increment, the value is increased first, then used.



Example:


int number = 10;


int result = ++number;



Execution:


First:


number becomes 11


Then:


result = 11



## Example Program


class PreIncrement

{

    public static void main(String[] args)

    {

        int number = 5;


        System.out.println(++number);

    }

}



Output:


6



# Decrement Operator (--)


## Introduction


The decrement operator decreases a variable value by one.



Example:


int count = 10;


count--;



New value:


9



## Types of Decrement Operators


Java provides:


1. Post Decrement.


2. Pre Decrement.



# Post Decrement (value--)


## Introduction


The current value is used first, then decreased.



Example:


int number = 10;


int result = number--;



Result:


result = 10


number = 9



# Pre Decrement (--value)


## Introduction


The value is decreased first, then used.



Example:


int number = 10;


int result = --number;



Result:


number = 9


result = 9



# Logical NOT Operator (!)


## Introduction


The NOT operator reverses a boolean value.



Example:


boolean status = true;


System.out.println(!status);



Output:


false



## Truth Table


true becomes false.


false becomes true.



# Unary Operators Example Program


class UnaryOperators

{

    public static void main(String[] args)

    {

        int number = 10;


        System.out.println(++number);

        System.out.println(--number);


        boolean status = true;


        System.out.println(!status);

    }

}



Output:


11

10

false



# Difference Between Pre and Post Operators



## Pre Increment


Syntax:


++value



Process:


1. Increase value.

2. Use value.



Example:


++number



## Post Increment


Syntax:


value++



Process:


1. Use value.

2. Increase value.



Example:


number++



# Unary Operators in Real Applications



## Banking Systems


Used for:


- Increasing transaction counters.
- Updating attempts.
- Managing values.



Example:


transactionCount++;



## Games


Used for:


- Increasing scores.
- Decreasing lives.
- Updating levels.



Example:


score++;



## Student Management Systems


Used for:


- Counting students.
- Updating attempts.
- Managing records.



# Common Mistakes



## Confusing Pre and Post Increment


Example:


int a = 5;


System.out.println(a++);



Output:


5



Not:


6



Because the value is used before incrementing.



## Using Unary Operators Incorrectly


Always understand the order of execution.



# Best Practices


Follow these practices:


- Use increment and decrement carefully.
- Avoid complex expressions.
- Prefer readable code.
- Understand execution order.



# Key Points


Remember:


- Unary operators work on one operand.
- + represents positive value.
- - changes the sign.
- ++ increases value by one.
- -- decreases value by one.
- ! reverses boolean values.
- Pre operators modify value before use.
- Post operators use value before modification.


Unary operators help Java programs update values efficiently and perform quick operations.

`

};


export default lesson14;