const lesson11 = {

  id: "lesson11",

  title: "Relational Operators in Java",

  content: `

# Relational Operators in Java


## Introduction


Relational operators are used to compare two values or expressions.


They check the relationship between values and return a boolean result.


The result of a relational operation is always:


true


or


false



Relational operators are commonly used in:


- Decision making.
- Conditional statements.
- Loops.
- Validation systems.



## What are Relational Operators?


Relational operators compare two operands and determine their relationship.


Example:


int age = 20;


age >= 18



Here:


Java checks whether age is greater than or equal to 18.



## Types of Relational Operators


Java provides six relational operators:


| Operator | Meaning |
|----------|---------|
| == | Equal to |
| != | Not equal to |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal to |
| <= | Less than or equal to |



# Equal To Operator (==)


## Introduction


The equal to operator checks whether two values are equal.



Example:


int a = 10;

int b = 10;


System.out.println(a == b);



Output:


true



## Usage


Used for:


- Comparing values.
- Checking conditions.
- Validating information.



Example:


password == enteredPassword



# Not Equal To Operator (!=)


## Introduction


The not equal operator checks whether two values are different.



Example:


int a = 10;

int b = 20;


System.out.println(a != b);



Output:


true



## Usage


Used for:


- Checking invalid values.
- Comparing different conditions.



# Greater Than Operator (>)


## Introduction


The greater than operator checks whether the left value is larger than the right value.



Example:


int marks = 90;


System.out.println(marks > 50);



Output:


true



## Usage


Used for:


- Checking eligibility.
- Comparing values.



# Less Than Operator (<)


## Introduction


The less than operator checks whether the left value is smaller than the right value.



Example:


int age = 15;


System.out.println(age < 18);



Output:


true



# Greater Than or Equal To Operator (>=)


## Introduction


This operator checks whether a value is greater than or equal to another value.



Example:


int marks = 40;


System.out.println(marks >= 35);



Output:


true



## Usage


Used for:


- Pass criteria.
- Minimum requirements.
- Limits.



# Less Than or Equal To Operator (<=)


## Introduction


This operator checks whether a value is less than or equal to another value.



Example:


int age = 18;


System.out.println(age <= 18);



Output:


true



# Relational Operators Example Program


class RelationalExample

{

    public static void main(String[] args)

    {

        int a = 20;

        int b = 10;


        System.out.println(a == b);

        System.out.println(a != b);

        System.out.println(a > b);

        System.out.println(a < b);

        System.out.println(a >= b);

        System.out.println(a <= b);

    }

}



Output:


false

true

true

false

true

false



# Relational Operators with if Statement


Relational operators are commonly used with decision-making statements.



Example:


class Example

{

    public static void main(String[] args)

    {

        int age = 20;


        if(age >= 18)

        {

            System.out.println("Eligible");

        }

    }

}



Output:


Eligible



# Comparing Characters


Characters can also be compared using relational operators.



Example:


char a = 'A';


char b = 'B';


System.out.println(a < b);



Output:


true



Java compares characters using Unicode values.



# Comparing Floating Point Values


Relational operators can compare decimal values.



Example:


double price1 = 100.5;


double price2 = 200.5;


System.out.println(price1 < price2);



Output:


true



# Relational Operators in Real Applications



## Banking Systems


Used for:


- Checking account balance.
- Validating transaction limits.
- Comparing loan amounts.



Example:


balance >= minimumBalance



## E-Commerce Applications


Used for:


- Checking product availability.
- Applying discounts.
- Comparing prices.



Example:


quantity > 0



## Student Management Systems


Used for:


- Checking pass or fail.
- Comparing marks.
- Calculating grades.



Example:


marks >= 35



# Difference Between Assignment and Equality Operators



## Assignment Operator (=)


Used to assign values.



Example:


int age = 20;



## Equality Operator (==)


Used to compare values.



Example:


age == 20



# Common Mistakes



## Using = Instead of ==


Wrong:


if(age = 18)



Correct:


if(age == 18)



## Comparing Strings Using ==


For strings, == compares references.


Use equals() method for content comparison.



# Best Practices


Follow these practices:


- Use relational operators carefully.
- Understand the difference between = and ==.
- Use meaningful conditions.
- Avoid unnecessary comparisons.



# Key Points


Remember:


- Relational operators compare values.
- They always return boolean results.
- Java provides six relational operators.
- They are mainly used in conditions and loops.
- == checks equality.
- != checks inequality.
- >, <, >=, <= compare relationships.


Relational operators help Java programs make decisions by comparing different values.

`

};


export default lesson11;