const lesson13 = {

  id: "lesson13",

  title: "Assignment Operators in Java",

  content: `

# Assignment Operators in Java


## Introduction


Assignment operators are used to assign values to variables.


They store values in variables and also provide shorthand ways to update existing values.


Assignment operators are commonly used in:


- Calculations.
- Data processing.
- Counter operations.
- Updating values in applications.



## What is an Assignment Operator?


An assignment operator assigns a value to a variable.



The basic assignment operator is:


=



Example:


int number = 10;



Here:


The value 10 is assigned to the variable number.



# Basic Assignment Operator (=)


## Introduction


The equal symbol is used to assign values to variables.



Example:


int age = 20;



Explanation:


A value is stored inside the variable.



## Example Program


class AssignmentExample

{

    public static void main(String[] args)

    {

        int number = 50;


        System.out.println(number);

    }

}



Output:


50



# Compound Assignment Operators


Java provides shorthand assignment operators that combine:


- Assignment.
- Arithmetic operations.



Types:


- +=
- -=
- *=
- /=
- %=



# Addition Assignment Operator (+=)


## Introduction


The += operator adds a value to the existing variable value.



Example:


int number = 10;


number += 5;



Equivalent to:


number = number + 5;



Output:


15



## Example Program


class Example

{

    public static void main(String[] args)

    {

        int total = 100;


        total += 50;


        System.out.println(total);

    }

}



Output:


150



## Real-World Usage


Used for:


- Increasing account balance.
- Adding scores.
- Updating totals.



# Subtraction Assignment Operator (-=)


## Introduction


The -= operator subtracts a value from the existing variable value.



Example:


int number = 20;


number -= 5;



Equivalent to:


number = number - 5;



Output:


15



## Real-World Usage


Used for:


- Reducing inventory.
- Deducting payments.
- Updating counters.



# Multiplication Assignment Operator (*=)


## Introduction


The *= operator multiplies the existing value.



Example:


int number = 10;


number *= 5;



Equivalent to:


number = number * 5;



Output:


50



## Usage


Used for:


- Calculations.
- Scaling values.
- Mathematical operations.



# Division Assignment Operator (/=)


## Introduction


The /= operator divides the existing value.



Example:


int number = 100;


number /= 10;



Equivalent to:


number = number / 10;



Output:


10



## Usage


Used for:


- Average calculation.
- Splitting values.
- Data processing.



# Modulus Assignment Operator (%=)


## Introduction


The %= operator stores the remainder value.



Example:


int number = 20;


number %= 6;



Equivalent to:


number = number % 6;



Output:


2



## Usage


Used for:


- Finding remainders.
- Checking even and odd numbers.
- Cyclic operations.



# Assignment Operators Example Program


class AssignmentOperators

{

    public static void main(String[] args)

    {

        int value = 10;


        value += 5;

        System.out.println(value);


        value -= 3;

        System.out.println(value);


        value *= 2;

        System.out.println(value);


        value /= 4;

        System.out.println(value);


        value %= 3;

        System.out.println(value);

    }

}



Output:


15

12

24

6

0



# Assignment Operators with Different Data Types


Assignment operators work with different data types.



Example:


double price = 100.5;


price += 50.5;



Output:


151.0



# Assignment and Type Conversion


Java automatically performs type conversion during assignment operations.



Example:


int number = 10;


double value = number;



Here:


The integer value is converted into double.



# Difference Between = and ==



## Assignment Operator (=)


Used to assign values.



Example:


int age = 20;



## Equality Operator (==)


Used to compare values.



Example:


age == 20



# Real-World Applications



## Banking Systems


Assignment operators are used for:


- Updating account balance.
- Adding deposits.
- Deducting withdrawals.



Example:


balance += deposit;



## E-Commerce Applications


Used for:


- Updating cart quantity.
- Calculating total price.
- Applying discounts.



Example:


total += productPrice;



## Student Management Systems


Used for:


- Updating marks.
- Calculating totals.
- Maintaining scores.



Example:


totalMarks += marks;



# Common Mistakes



## Using Equality Instead of Assignment


Wrong:


int value == 10;



Correct:


int value = 10;



## Division by Zero


Example:


number /= 0;



This causes an error.



# Best Practices


Follow these practices:


- Use compound operators when appropriate.
- Write readable expressions.
- Avoid unnecessary calculations.
- Check values before division.



# Key Points


Remember:


- Assignment operators assign values to variables.
- = is the basic assignment operator.
- Compound operators combine calculation and assignment.
- += adds and assigns.
- -= subtracts and assigns.
- *= multiplies and assigns.
- /= divides and assigns.
- %= stores remainder and assigns.


Assignment operators make Java programs shorter, cleaner, and easier to maintain.

`

};


export default lesson13;