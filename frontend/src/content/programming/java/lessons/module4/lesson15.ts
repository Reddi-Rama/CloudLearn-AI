const lesson15 = {

  id: "lesson15",

  title: "Mini Project: Building a Utility Library Using Methods",

  content: `

# Mini Project: Building a Utility Library Using Methods


## Introduction


In this lesson, we will combine everything learned about methods and create a simple Utility Library in Java.


A utility library is a collection of reusable methods that perform common tasks.



Professional software applications use utility classes to avoid writing the same logic repeatedly.



Examples:


- Mathematical calculations.
- String operations.
- Data validation.
- Formatting operations.



# Project Objective


Create a Java utility library that contains reusable methods for:


- Mathematical calculations.
- String processing.
- Data validation.



This project demonstrates:


- Method creation.
- Method calling.
- Parameters.
- Return values.
- Method overloading.
- Code organization.



# Project Structure


Our utility library contains:


UtilityLibrary class


Methods:


add()


subtract()


multiply()


divide()


findMaximum()


reverseString()


checkEven()



# Creating Utility Class


Example:


class UtilityLibrary

{

}



A utility class contains methods that can be reused by other programs.



# Mathematical Utility Methods


## Addition Method


Example:


static int add(int a, int b)

{

    return a + b;

}



This method accepts two numbers and returns their sum.



## Subtraction Method


Example:


static int subtract(int a, int b)

{

    return a - b;

}



## Multiplication Method


Example:


static int multiply(int a, int b)

{

    return a * b;

}



## Division Method


Example:


static double divide(double a, double b)

{

    return a / b;

}



# String Utility Methods


## Reverse String Method


Example:


static String reverseString(String text)

{

    String result = "";


    for(int i = text.length() - 1; i >= 0; i--)

    {

        result += text.charAt(i);

    }


    return result;

}



Explanation:


The method returns the reversed version of the given string.



# Data Validation Methods


## Check Even Number


Example:


static boolean checkEven(int number)

{

    return number % 2 == 0;

}



The method returns true if the number is even.



# Complete Utility Library Program


class UtilityLibrary

{

    static int add(int a, int b)

    {

        return a + b;

    }


    static int subtract(int a, int b)

    {

        return a - b;

    }


    static int multiply(int a, int b)

    {

        return a * b;

    }


    static double divide(double a, double b)

    {

        return a / b;

    }


    static boolean checkEven(int number)

    {

        return number % 2 == 0;

    }


    static String reverseString(String text)

    {

        String result = "";


        for(int i = text.length() - 1; i >= 0; i--)

        {

            result += text.charAt(i);

        }


        return result;

    }


    public static void main(String[] args)

    {

        System.out.println(add(10,20));


        System.out.println(subtract(20,10));


        System.out.println(multiply(5,4));


        System.out.println(divide(20,5));


        System.out.println(checkEven(8));


        System.out.println(reverseString("Java"));

    }

}



Output:


30

10

20

4.0

true

avaJ



# Applying Method Overloading


A utility library can use method overloading.



Example:


static int add(int a, int b)

{

    return a + b;

}



static int add(int a, int b, int c)

{

    return a + b + c;

}



Now the same method name handles different inputs.



# Utility Library Example: Banking System


A banking utility library may contain methods:


calculateInterest()


checkBalance()


calculateLoanAmount()



Example:


static double calculateInterest(double amount, double rate)

{

    return amount * rate / 100;

}



# Utility Library Example: E-Commerce System


An e-commerce utility library may contain:


calculateDiscount()


calculateTotal()


checkAvailability()



Example:


static double calculateDiscount(double price, double discount)

{

    return price - (price * discount / 100);

}



# Utility Library Example: Student Management System


A student utility library may contain:


calculateAverage()


calculateGrade()


checkPass()



Example:


static boolean checkPass(int marks)

{

    return marks >= 35;

}



# Advantages of Utility Libraries



## Code Reusability


Methods can be used in multiple programs.



## Better Organization


Related operations are grouped together.



## Easy Maintenance


Changes are required only in one place.



## Reduced Duplicate Code


Common logic is written once.



# Project Concepts Covered


This project uses:


## Methods


Creating reusable blocks of code.



## Parameters


Passing data to methods.



## Return Values


Sending results back.



## Method Overloading


Using the same method name with different parameters.



## Class Organization


Grouping related methods together.



# Common Mistakes



## Creating Too Many Responsibilities


A utility class should contain related methods only.



## Poor Method Names


Names should clearly describe the operation.



## Ignoring Input Validation


Methods should handle invalid inputs safely.



# Best Practices


Follow these practices:


- Create reusable methods.
- Use meaningful method names.
- Keep methods independent.
- Return results instead of printing whenever possible.
- Organize related methods together.



# Real-World Utility Libraries


Java applications commonly use utility classes for:


## Banking


- Currency formatting.
- Interest calculation.
- Validation.



## E-Commerce


- Price calculation.
- Discount processing.
- Product validation.



## Education


- Grade calculation.
- Result processing.
- Report generation.



# Key Points


Remember:


- Utility libraries contain reusable methods.
- Methods reduce duplicate code.
- Return values make methods flexible.
- Method overloading improves usability.
- Good utility classes improve application design.


Building utility libraries is an important step toward creating professional and maintainable Java applications.

`

};


export default lesson15;