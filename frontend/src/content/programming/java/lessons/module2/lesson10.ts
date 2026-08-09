const lesson10 = {

  id: "lesson10",

  title: "Arithmetic Operators in Java",

  content: `

# Arithmetic Operators in Java


## Introduction


Operators are special symbols that perform operations on values and variables.


Arithmetic operators are used to perform mathematical calculations in Java programs.


They are commonly used in:


- Banking applications.
- Billing systems.
- Scientific applications.
- Student management systems.
- Data processing applications.



## What are Arithmetic Operators?


Arithmetic operators perform basic mathematical operations such as:


- Addition.
- Subtraction.
- Multiplication.
- Division.
- Modulus.



## Types of Arithmetic Operators


Java provides five basic arithmetic operators:


| Operator | Meaning |
|----------|---------|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |



# Addition Operator (+)


## Introduction


The addition operator adds two values together.



Example:


int a = 10;

int b = 20;

int result = a + b;



Output:


30



## Real-World Usage


Used for:


- Adding prices.
- Calculating total marks.
- Combining values.



Example:


double total = productPrice + tax;



# Subtraction Operator (-)


## Introduction


The subtraction operator subtracts one value from another.



Example:


int total = 100;

int spent = 40;


int remaining = total - spent;



Output:


60



## Real-World Usage


Used for:


- Balance calculation.
- Remaining quantity.
- Difference calculation.



# Multiplication Operator (*)


## Introduction


The multiplication operator multiplies two values.



Example:


int price = 50;

int quantity = 5;


int total = price * quantity;



Output:


250



## Real-World Usage


Used for:


- Billing calculations.
- Area calculation.
- Salary calculations.



# Division Operator (/)


## Introduction


The division operator divides one value by another.



Example:


int total = 100;

int people = 5;


int result = total / people;



Output:


20



## Integer Division


When two integer values are divided, Java returns only the integer part.



Example:


int result = 10 / 3;



Output:


3



The decimal value is removed.



## Decimal Division


If one value is decimal, the result contains decimals.



Example:


double result = 10.0 / 3;



Output:


3.333333



# Modulus Operator (%)


## Introduction


The modulus operator returns the remainder after division.



Example:


int remainder = 10 % 3;



Output:


1



## Real-World Usage


Used for:


- Checking even and odd numbers.
- Finding remaining values.
- Cyclic operations.



Example:


if(number % 2 == 0)

{

    System.out.println("Even");

}



# Arithmetic Operators Example Program


class ArithmeticExample

{

    public static void main(String[] args)

    {

        int a = 20;

        int b = 10;


        System.out.println(a + b);

        System.out.println(a - b);

        System.out.println(a * b);

        System.out.println(a / b);

        System.out.println(a % b);

    }

}



Output:


30

10

200

2

0



# Arithmetic Operators with Variables


Java allows arithmetic operations using variables.



Example:


int price = 500;

int quantity = 3;


int total = price * quantity;



Output:


1500



# Arithmetic Operators with Different Data Types


Java automatically performs type conversion during arithmetic operations.



Example:


int number = 10;

double value = 5.5;


double result = number + value;



Output:


15.5



# Operator Precedence in Arithmetic


When multiple arithmetic operators are used, Java follows operator precedence.



Order:


1. Multiplication (*)


2. Division (/)


3. Modulus (%)


4. Addition (+)


5. Subtraction (-)



Example:


int result = 10 + 5 * 2;



Calculation:


5 * 2 = 10


10 + 10 = 20



Output:


20



# Parentheses in Arithmetic Operations


Parentheses can change the order of execution.



Example:


int result = (10 + 5) * 2;



Calculation:


10 + 5 = 15


15 * 2 = 30



Output:


30



# Unary Arithmetic Operators


Java also provides unary arithmetic operators.



Operators:


+


-



Example:


int number = 10;


System.out.println(+number);


System.out.println(-number);



Output:


10

-10



# Increment and Decrement Operators


Java provides:


++ → Increment


-- → Decrement



Example:


int count = 5;


count++;



Output:


6



# Real-World Applications



## Banking System


Arithmetic operators are used for:


- Deposits.
- Withdrawals.
- Interest calculation.
- Balance updates.



## E-Commerce System


Used for:


- Total price calculation.
- Discounts.
- Tax calculation.



## Student Management System


Used for:


- Total marks.
- Average calculation.
- Percentage calculation.



# Common Mistakes



## Division by Zero


Example:


int result = 10 / 0;



This causes an ArithmeticException.



## Integer Division Mistake


Example:


int result = 5 / 2;



Output:


2



To get decimal result:


double result = 5.0 / 2;



# Best Practices


Follow these practices:


- Use proper data types.
- Check division values.
- Use parentheses for clarity.
- Avoid unnecessary calculations.



# Key Points


Remember:


- Arithmetic operators perform mathematical operations.
- Java provides +, -, *, /, and % operators.
- Integer division removes decimal values.
- Modulus returns the remainder.
- Operator precedence decides calculation order.
- Arithmetic operators are used in almost every application.


Arithmetic operators are essential for building Java programs that perform calculations and process real-world data.

`

};


export default lesson10;