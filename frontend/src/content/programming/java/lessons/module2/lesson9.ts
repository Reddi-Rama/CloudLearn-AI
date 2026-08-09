const lesson9 = {

  id: "lesson9",

  title: "Automatic Type Promotion in Java",

  content: `

# Automatic Type Promotion in Java


## Introduction


When Java performs arithmetic operations between different data types, it automatically converts smaller data types into larger data types.


This process is called automatic type promotion.


Automatic type promotion helps Java perform calculations safely and prevents unnecessary data loss.



## What is Automatic Type Promotion?


Automatic type promotion is the process where Java automatically converts smaller primitive data types into larger compatible data types during expressions or calculations.



Example:


byte a = 10;

byte b = 20;

int result = a + b;



Here:


The byte values are automatically promoted to int before addition.



## Why Automatic Type Promotion is Needed


Java performs automatic promotion because:


- Small data types have limited range.
- Arithmetic operations require enough storage.
- It prevents overflow during calculations.
- It improves calculation accuracy.



# Rules of Automatic Type Promotion


Java follows specific rules during automatic promotion.



## Rule 1: byte, short, and char Become int


During arithmetic operations, the following types are automatically converted into int:


- byte.
- short.
- char.



Example:


byte a = 10;

byte b = 20;


int result = a + b;



The result is int.



## Rule 2: Larger Data Types Are Preserved


If one operand is larger, the smaller value is promoted to that type.



Example:


int number = 10;


double value = 5.5;


double result = number + value;



Here:


int is converted into double.



## Rule 3: Floating Point Types Have Higher Priority


The promotion order is:


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



A value is promoted toward the larger type.



# Automatic Promotion Examples



## Example 1: byte Promotion


class Example

{

    public static void main(String[] args)

    {

        byte a = 10;

        byte b = 20;


        int result = a + b;


        System.out.println(result);

    }

}



Output:


30



Explanation:


byte values are converted into int before addition.



# Example 2: int and double


class Example

{

    public static void main(String[] args)

    {

        int number = 100;

        double price = 50.5;


        double result = number + price;


        System.out.println(result);

    }

}



Output:


150.5



Explanation:


The int value is converted into double.



# Example 3: char Promotion


class Example

{

    public static void main(String[] args)

    {

        char letter = 'A';


        int value = letter + 1;


        System.out.println(value);

    }

}



Output:


66



Explanation:


The character is converted into its Unicode value.



# Promotion During Multiplication


Example:


byte value = 10;


int result = value * 5;



Here:


byte is promoted to int before multiplication.



# Promotion During Division


Example:


int a = 10;


double b = 2.0;


double result = a / b;



Output:


5.0



The integer value is converted into double.



# Promotion in Expressions


Java evaluates expressions by promoting operands.



Example:


short a = 10;


short b = 20;


short result = (short)(a + b);



Why casting is required:


The result of addition becomes int.



# Automatic Promotion and Data Loss


Automatic promotion prevents data loss because values move from smaller types to larger types.



Example:


int number = 100;


double value = number;



Output:


100.0



No information is lost.



# Difference Between Automatic Promotion and Type Casting



## Automatic Type Promotion


- Done automatically.
- Performed by Java compiler.
- Smaller type to larger type.
- No data loss.



Example:


int → double



## Type Casting


- Done manually.
- Performed by programmer.
- Larger type to smaller type.
- Possible data loss.



Example:


double → int



# Real-World Applications



## Banking Systems


Automatic promotion helps in:


- Interest calculations.
- Currency operations.
- Financial formulas.



## Scientific Applications


Used for:


- Decimal calculations.
- Measurements.
- Mathematical operations.



## Data Processing Systems


Used when:


- Different numeric types are combined.
- Large calculations are performed.



# Common Mistakes



## Assigning int Result to byte


Wrong:


byte a = 10;

byte b = 20;

byte result = a + b;



Reason:


The result becomes int.



Correct:


byte result = (byte)(a + b);



# Best Practices


Follow these practices:


- Understand promotion rules.
- Use proper result data types.
- Use casting only when required.
- Avoid unnecessary narrowing conversions.



# Key Points


Remember:


- Java automatically promotes smaller data types during calculations.
- byte, short, and char become int in arithmetic operations.
- Larger data types have higher priority.
- Automatic promotion prevents data loss.
- Arithmetic results may require casting when storing in smaller types.


Automatic type promotion allows Java programs to perform calculations safely and efficiently.

`

};


export default lesson9;