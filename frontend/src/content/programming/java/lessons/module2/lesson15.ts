const lesson15 = {

  id: "lesson15",

  title: "Bitwise Operators in Java",

  content: `

# Bitwise Operators in Java


## Introduction


Bitwise operators are operators that perform operations directly on individual bits of integer values.


Computers store numbers internally in binary format.


For example:


Decimal:


10


Binary:


1010



Bitwise operators work on these binary representations.



## What are Bitwise Operators?


Bitwise operators perform operations at the bit level.


They are mainly used with integer data types:


- byte.
- short.
- int.
- long.
- char.



## Types of Bitwise Operators


Java provides the following bitwise operators:


| Operator | Meaning |
|----------|---------|
| & | Bitwise AND |
| | | Bitwise OR |
| ^ | Bitwise XOR |
| ~ | Bitwise Complement |
| << | Left Shift |
| >> | Right Shift |
| >>> | Unsigned Right Shift |



# Bitwise AND Operator (&)


## Introduction


The AND operator compares each bit of two numbers.


The result bit is 1 only when both bits are 1.



## Truth Table


Bit A | Bit B | Result


0 | 0 | 0


0 | 1 | 0


1 | 0 | 0


1 | 1 | 1



## Example


int a = 5;


int b = 3;


int result = a & b;



Binary:


5 = 0101


3 = 0011


Result:


0001



Output:


1



## Usage


Used in:


- Permission systems.
- Masking operations.
- Low-level programming.



# Bitwise OR Operator (|)


## Introduction


The OR operator compares bits of two numbers.


The result bit is 1 if at least one bit is 1.



## Example


int a = 5;


int b = 3;


int result = a | b;



Binary:


5 = 0101


3 = 0011


Result:


0111



Output:


7



## Usage


Used for:


- Combining flags.
- Setting bits.



# Bitwise XOR Operator (^)


## Introduction


XOR returns 1 when both bits are different.



## Truth Table


Bit A | Bit B | Result


0 | 0 | 0


0 | 1 | 1


1 | 0 | 1


1 | 1 | 0



## Example


int a = 5;


int b = 3;


int result = a ^ b;



Binary:


0101


0011


Result:


0110



Output:


6



## Usage


Used for:


- Data encryption.
- Swapping values.
- Bit manipulation.



# Bitwise Complement Operator (~)


## Introduction


The complement operator reverses all bits.


0 becomes 1.


1 becomes 0.



Example:


int number = 5;


System.out.println(~number);



Output:


-6



## Explanation


Java uses two's complement representation for negative numbers.



# Left Shift Operator (<<)


## Introduction


The left shift operator moves bits to the left.


Zeros are added on the right side.



Example:


int number = 5;


int result = number << 1;



Binary:


0101


After shift:


1010



Output:


10



## Usage


Used for:


- Fast multiplication by powers of two.
- Bit manipulation.



# Right Shift Operator (>>)


## Introduction


The right shift operator moves bits to the right.


The left side is filled based on the sign bit.



Example:


int number = 8;


int result = number >> 1;



Output:


4



## Usage


Used for:


- Fast division by powers of two.
- Binary processing.



# Unsigned Right Shift Operator (>>>)


## Introduction


Unsigned right shift fills the left side with zeros regardless of sign.



Example:


int number = -8;


int result = number >>> 1;



It is mainly used in low-level programming.



# Bitwise Operators Example Program


class BitwiseExample

{

    public static void main(String[] args)

    {

        int a = 5;

        int b = 3;


        System.out.println(a & b);

        System.out.println(a | b);

        System.out.println(a ^ b);

        System.out.println(~a);

    }

}



Output:


1

7

6

-6



# Difference Between Logical and Bitwise Operators



## Logical Operators


Work with:


boolean values.



Examples:


&&

||

!



Used for:


- Conditions.
- Decision making.



## Bitwise Operators


Work with:


binary values.



Examples:


&

|

^



Used for:


- Bit manipulation.
- Low-level programming.



# Real-World Applications



## Security Systems


Used for:


- Permission management.
- Access control.



Example:


User privileges stored as bits.



## Networking


Used for:


- IP address processing.
- Data transmission.



## Embedded Systems


Used for:


- Hardware control.
- Memory optimization.



# Common Mistakes



## Confusing Logical AND and Bitwise AND


Logical AND:


&&



Bitwise AND:


&



They are used for different purposes.



## Using Bitwise Operators Without Understanding Binary


Always understand binary representation before using bit operations.



# Best Practices


Follow these practices:


- Use bitwise operators when bit-level control is required.
- Understand binary values.
- Avoid unnecessary bit operations.
- Use comments for complex expressions.



# Key Points


Remember:


- Bitwise operators work on individual bits.
- Java provides AND, OR, XOR, complement, and shift operators.
- They are used in system-level programming.
- Bitwise operations are faster for certain calculations.
- They are important in networking and security applications.


Bitwise operators give Java programmers control over data at the binary level.

`

};


export default lesson15;