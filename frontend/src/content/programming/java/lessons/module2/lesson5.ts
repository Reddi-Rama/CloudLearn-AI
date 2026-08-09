const lesson5 = {

  id: "lesson5",

  title: "Constants in Java",

  content: `

# Constants in Java


## Introduction


In programming, some values should not change during the execution of a program.


Examples:


- Mathematical values like PI.
- Tax rates.
- Maximum limits.
- Configuration values.
- Company policies.


For storing values that should remain unchanged, Java provides constants.



## What is a Constant?


A constant is a variable whose value cannot be modified after it is initialized.


In Java, constants are created using the final keyword.



## Syntax


final dataType CONSTANT_NAME = value;



Example:


final double PI = 3.14159;



Here:


final → Makes the variable constant.


double → Data type.


PI → Constant name.


3.14159 → Fixed value.



# final Keyword in Java


## Introduction


The final keyword is used to restrict modification.


When a variable is declared as final, its value can be assigned only once.



Example:


final int MAX_VALUE = 100;



Trying to change the value:


MAX_VALUE = 200;



will cause a compilation error.



# Declaring Constants


## Declaration and Initialization


A constant should normally be declared and initialized at the same time.



Example:


final int DAYS_IN_WEEK = 7;



## Declaring Without Initialization


A final variable can also be initialized later.


Example:


final int number;


number = 10;



But after assigning a value, it cannot be changed.



# Naming Convention for Constants


Java follows standard naming rules for constants.



## Uppercase Letters


Constants are usually written using uppercase letters.



Example:


MAX_SPEED


TOTAL_AMOUNT



## Multiple Words


Underscore is used to separate words.



Example:


MAXIMUM_VALUE


DEFAULT_SIZE



# Types of Constants


Java constants can store different types of values.



## Integer Constants


Stores whole numbers.



Example:


final int MAX_USERS = 100;



## Floating Point Constants


Stores decimal values.



Example:


final double TAX_RATE = 18.5;



## Character Constants


Stores a single character.



Example:


final char GRADE = 'A';



## String Constants


Stores text values.



Example:


final String COMPANY_NAME = "CloudLearn";



## Boolean Constants


Stores true or false values.



Example:


final boolean IS_ACTIVE = true;



# Example Program


class ConstantExample

{

    public static void main(String[] args)

    {

        final double PI = 3.14159;

        final int DAYS = 7;


        System.out.println(PI);

        System.out.println(DAYS);

    }

}



## Output


3.14159

7



# Local Constants


A constant declared inside a method is called a local constant.



Example:


class Example

{

    public static void main(String[] args)

    {

        final int VALUE = 50;


        System.out.println(VALUE);

    }

}



# Instance Constants


A final variable declared inside a class but outside methods is called an instance constant.



Example:


class Student

{

    final int ID = 101;

}



# Static Constants


A constant shared by all objects is declared using static final.



Example:


class Company

{

    static final String NAME = "CloudLearn";

}



## static final Combination


static final creates class-level constants.


They are:


- Shared by all objects.
- Created only once.
- Accessed using class name.



Example:


System.out.println(Company.NAME);



# Difference Between Variable and Constant



## Variable


- Value can change.
- Declared normally.
- Used for changing data.



Example:


int age = 20;


age = 21;



## Constant


- Value cannot change.
- Declared using final.
- Used for fixed values.



Example:


final int MAX_AGE = 100;



# Why Use Constants?


Constants provide:


- Better readability.
- Reduced programming errors.
- Easy maintenance.
- Data protection.
- Consistent values throughout programs.



# Real-World Applications



## Banking Applications


Constants store:


- Interest rates.
- Transaction limits.
- Currency values.



## E-Commerce Applications


Constants store:


- Tax percentage.
- Discount rules.
- Maximum order limits.



## Game Development


Constants store:


- Maximum score.
- Game levels.
- Player limits.



# Common Mistakes



## Changing Final Variable


Wrong:


final int VALUE = 10;


VALUE = 20;



Reason:


Final values cannot be modified.



## Poor Constant Naming


Avoid:


final int x = 100;



Prefer:


final int MAX_USERS = 100;



# Best Practices


Follow these practices:


- Use uppercase names for constants.
- Use meaningful names.
- Use final keyword.
- Use static final for shared constants.
- Avoid unnecessary constants.



# Key Points


Remember:


- Constants are fixed values.
- final keyword creates constants.
- Constant values cannot be changed.
- Constants improve readability and safety.
- static final is used for class-level constants.


Constants help developers create reliable and maintainable Java applications.

`

};


export default lesson5;