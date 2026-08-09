const lesson6 = {

  id: "lesson6",

  title: "Literals in Java",

  content: `

# Literals in Java


## Introduction


Literals are one of the basic building blocks of Java programs.


Whenever we write a fixed value directly inside a program, it is called a literal.


Examples:


int age = 20;


double price = 99.99;


char grade = 'A';



Here:


20, 99.99, and 'A' are literals.



## What are Literals?


A literal is a constant value that is directly written in a Java program.


The compiler treats literals as fixed values.



Example:


int number = 100;



Here:


number is a variable.


100 is a literal.



## Importance of Literals


Literals are used to:


- Assign values to variables.
- Represent fixed data.
- Perform calculations.
- Create meaningful programs.



# Types of Literals in Java


Java supports different types of literals:


1. Integer Literals.

2. Floating Point Literals.

3. Character Literals.

4. String Literals.

5. Boolean Literals.

6. Null Literal.



# 1. Integer Literals


## Introduction


Integer literals represent whole numbers without decimal values.



Examples:


10


500


-25



## Decimal Integer Literals


Decimal literals use base 10 numbers.



Example:


int number = 100;



## Binary Literals


Binary literals represent numbers in base 2.


They start with:


0b or 0B



Example:


int binary = 0b1010;



The value represents:


10 in decimal.



## Octal Literals


Octal literals use base 8 numbers.


They start with:


0



Example:


int octal = 012;



## Hexadecimal Literals


Hexadecimal literals use base 16 numbers.


They start with:


0x or 0X



Example:


int hex = 0xFF;



# 2. Floating Point Literals


## Introduction


Floating point literals represent decimal values.



Examples:


10.5


99.99


3.14



Java provides two floating point types:


- float.
- double.



## Float Literals


Float values must end with:


f or F



Example:


float price = 99.99f;



## Double Literals


Double is the default type for decimal values.



Example:


double salary = 50000.50;



# 3. Character Literals


## Introduction


Character literals represent a single character.


They are enclosed inside single quotes.



Examples:


'A'


'5'


'@'



## Example


char grade = 'A';



## Escape Characters


Java supports special character literals using escape sequences.



Examples:


\\n → New line


\\t → Tab


\\' → Single quote


\\\\ → Backslash



Example:


char symbol = '\\n';



# 4. String Literals


## Introduction


String literals represent a sequence of characters.


They are enclosed inside double quotes.



Examples:


"Java"


"CloudLearn"


"Hello World"



## Example


String message = "Welcome to Java";



## Usage


Strings are used for:


- Names.
- Messages.
- Addresses.
- User information.



# 5. Boolean Literals


## Introduction


Boolean literals represent logical values.



Java has only two boolean literals:


true


false



Example:


boolean isAvailable = true;



## Usage


Used in:


- Conditions.
- Decision making.
- Validation.



# 6. Null Literal


## Introduction


null represents the absence of an object reference.



Example:


String name = null;



Here:


name does not refer to any object.



# Literal Example Program


class LiteralExample

{

    public static void main(String[] args)

    {

        int number = 100;

        double price = 250.50;

        char grade = 'A';

        String language = "Java";

        boolean status = true;


        System.out.println(number);

        System.out.println(price);

        System.out.println(grade);

        System.out.println(language);

        System.out.println(status);

    }

}



Output:


100

250.50

A

Java

true



# Difference Between Variables and Literals



## Variables


- Store values.
- Values can change.
- Have names.
- Occupy memory.



Example:


int age = 20;



## Literals


- Represent fixed values.
- Directly written in code.
- Do not have names.



Example:


int age = 20;



Here:


20 is the literal.



# Type of Literal and Data Type


Java automatically assigns suitable data types to literals.



Examples:


10 → int


10L → long


10.5 → double


10.5f → float


'A' → char


true → boolean



# Underscore in Numeric Literals


Java allows underscores to improve readability of large numbers.



Example:


int population = 1_400_000_000;



The compiler ignores underscores.



# Real-World Applications



## Banking Applications


Literals represent:


- Interest rates.
- Fixed charges.
- Limits.



## E-Commerce Applications


Literals represent:


- Tax percentage.
- Discount values.
- Product categories.



## Scientific Applications


Literals represent:


- Measurements.
- Mathematical values.
- Constants.



# Best Practices


Follow these practices:


- Use meaningful values.
- Use underscores for large numbers.
- Use correct suffixes.
- Avoid unnecessary hard-coded values.



# Common Mistakes



## Missing Float Suffix


Wrong:


float value = 10.5;



Correct:


float value = 10.5f;



## Invalid Character Literal


Wrong:


char letter = "A";



Correct:


char letter = 'A';



# Key Points


Remember:


- Literals are fixed values written directly in code.
- Java supports different types of literals.
- Integer literals store whole numbers.
- Floating literals store decimal values.
- Character literals store single characters.
- String literals store text.
- Boolean literals store true or false values.


Literals help Java programs represent fixed information clearly and efficiently.

`

};


export default lesson6;