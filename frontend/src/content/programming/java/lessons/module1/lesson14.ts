const lesson14 = {

  id: "lesson14",

  title: "Constants and Literals",

  content: `

# Constants and Literals


## Introduction


Constants and literals are important concepts in Java programming.


A constant represents a value that cannot be changed during program execution, while a literal represents a fixed value directly written in a program.


They help developers write reliable and understandable programs.



# Constants in Java


## What is a Constant?


A constant is a variable whose value cannot be modified after initialization.


In Java, constants are created using the final keyword.



## Syntax


final dataType CONSTANT_NAME = value;



## Example


final double PI = 3.14159;



Here:


PI is a constant value that cannot be changed.



# final Keyword


The final keyword is used to make a variable constant.



Example:


final int MAX_VALUE = 100;



Trying to change the value:


MAX_VALUE = 200;



will produce a compilation error.



# Rules for Constants


Constants follow specific naming conventions.



## Use Uppercase Letters


Example:


MAX_SIZE


TOTAL_AMOUNT



## Use Underscore for Multiple Words


Example:


MAXIMUM_VALUE


DEFAULT_PASSWORD



## Initialize Only Once


A constant can receive a value only one time.



# Types of Constants


Java constants can store different types of values:



## Integer Constants


Whole numbers are integer constants.


Examples:


10

500

1000



## Floating Point Constants


Numbers containing decimal values.


Examples:


10.5

3.14



## Character Constants


Single characters enclosed in single quotes.


Examples:


'A'

'Z'



## String Constants


Sequence of characters enclosed in double quotes.


Examples:


"Java"

"CloudLearn"



## Boolean Constants


Boolean constants contain:


true

false



# Literals in Java


## What are Literals?


Literals are fixed values directly written inside a Java program.


They represent actual values assigned to variables.



Example:


int age = 20;



Here:


20 is a literal.



# Types of Literals


Java supports different types of literals.



## Integer Literals


Used to represent whole numbers.



Examples:


100

500

-50



Different formats:


Decimal:


100


Binary:


0b1010


Octal:


012


Hexadecimal:


0xFF



## Floating Point Literals


Used for decimal values.



Examples:


10.5

3.14

2.5f



## Character Literals


Represent a single character.



Examples:


'A'

'b'

'1'



## String Literals


Represent a group of characters.



Examples:


"Java Programming"


"Hello World"



## Boolean Literals


Only two values exist:


true


false



# Example Program


class ConstantExample

{

    public static void main(String[] args)

    {

        final double TAX_RATE = 18.5;


        int price = 1000;


        System.out.println(price);

        System.out.println(TAX_RATE);

    }

}



Output:


1000

18.5



# Difference Between Constants and Literals



## Constants


- Stored in variables.
- Value cannot be changed.
- Created using final keyword.
- Have a name.



Example:


final int SIZE = 50;



## Literals


- Direct values written in code.
- Do not have names.
- Represent actual values.



Example:


int number = 50;



# Importance of Constants and Literals


They provide:


- Better code readability.
- Reduced errors.
- Easy maintenance.
- Meaningful values.



# Real-World Applications


Constants are used in:


### Banking Systems


Interest rates and fixed limits.


### E-Commerce Systems


Tax rates and discount values.


### Scientific Applications


Mathematical constants.



# Key Points


Remember:


- Constants cannot be modified after initialization.
- final keyword creates constants.
- Literals are fixed values written directly in code.
- Java supports different types of literals.
- Constants improve program reliability.


Constants and literals help developers create organized and maintainable Java applications.

`

};


export default lesson14;