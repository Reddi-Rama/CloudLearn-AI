const lesson13 = {

  id: "lesson13",

  title: "Built-in (Predefined) Methods in Java",

  content: `

# Built-in (Predefined) Methods in Java


## Introduction


Java provides many ready-made methods that developers can use directly without creating them from scratch.


These methods are called built-in methods or predefined methods.



Built-in methods are already available in Java libraries and help programmers perform common operations easily.



Examples:


- Finding square root of a number.
- Finding length of a string.
- Converting data types.
- Manipulating arrays.
- Performing mathematical operations.



# What are Built-in Methods?


Built-in methods are methods provided by Java API libraries that perform commonly required operations.



They are already implemented, tested, and ready to use.



Example:


Math.sqrt(25)



Here:


sqrt() is a predefined method provided by Java.



# Java API


Java API (Application Programming Interface) is a collection of predefined classes and methods provided by Java.



Examples of Java API classes:


- Math
- String
- Arrays
- Collections
- Scanner
- System



# Using Built-in Methods


To use a built-in method:


1. Import required package if needed.


2. Call the method using class name or object.



Example:


Math.max(10,20)



# Built-in Methods of Math Class


The Math class provides mathematical operations.



## Math.sqrt()


Used to find square root.



Example:


class MathExample

{

    public static void main(String[] args)

    {

        double result = Math.sqrt(25);


        System.out.println(result);

    }

}



Output:


5.0



## Math.max()


Returns the larger value.



Example:


class Example

{

    public static void main(String[] args)

    {

        System.out.println(Math.max(10,20));

    }

}



Output:


20



## Math.min()


Returns the smaller value.



Example:


System.out.println(Math.min(10,20));



Output:


10



## Math.pow()


Returns power of a number.



Example:


System.out.println(Math.pow(2,3));



Output:


8.0



# Built-in String Methods


The String class provides methods for handling text.



## length()


Returns the number of characters in a string.



Example:


class StringExample

{

    public static void main(String[] args)

    {

        String name = "Java";


        System.out.println(name.length());

    }

}



Output:


4



## toUpperCase()


Converts text into uppercase.



Example:


String text = "java";


System.out.println(text.toUpperCase());



Output:


JAVA



## toLowerCase()


Converts text into lowercase.



Example:


String text = "JAVA";


System.out.println(text.toLowerCase());



Output:


java



## charAt()


Returns character at a specific position.



Example:


String text = "Java";


System.out.println(text.charAt(0));



Output:


J



## equals()


Compares two strings.



Example:


String a = "Java";

String b = "Java";


System.out.println(a.equals(b));



Output:


true



# Built-in Array Methods


The Arrays class provides methods for array operations.



Example:


import java.util.Arrays;


class ArrayExample

{

    public static void main(String[] args)

    {

        int numbers[] = {5,2,8,1};


        Arrays.sort(numbers);


        System.out.println(Arrays.toString(numbers));

    }

}



Output:


[1, 2, 5, 8]



# Built-in Methods of Scanner Class


Scanner provides methods to read user input.



Examples:


nextInt()


nextDouble()


nextLine()


next()



Example:


import java.util.Scanner;


class InputExample

{

    public static void main(String[] args)

    {

        Scanner input = new Scanner(System.in);


        int number = input.nextInt();


        System.out.println(number);

    }

}



# Built-in Methods Example: Banking System


class BankingSystem

{

    public static void main(String[] args)

    {

        double amount = 2500.75;


        double rounded = Math.round(amount);


        System.out.println(rounded);

    }

}



Output:


2501



Explanation:


Math.round() is a predefined method used for rounding values.



# Built-in Methods Example: E-Commerce System


class ShoppingSystem

{

    public static void main(String[] args)

    {

        String product = "Laptop";


        System.out.println(product.length());

        System.out.println(product.toUpperCase());

    }

}



Output:


6

LAPTOP



# Built-in Methods Example: Student Management System


class StudentSystem

{

    public static void main(String[] args)

    {

        String studentName = "Student";


        System.out.println(studentName.length());

    }

}



Output:


7



# Advantages of Built-in Methods



## Saves Development Time


No need to rewrite common operations.



## Tested Functionality


Java provides reliable implementations.



## Improves Code Readability


Method names clearly describe operations.



## Reduces Errors


Predefined methods reduce manual mistakes.



# Commonly Used Built-in Methods



## Math Class


sqrt()


pow()


max()


min()


abs()



## String Class


length()


charAt()


equals()


substring()


replace()



## Arrays Class


sort()


binarySearch()


toString()



## Collections Class


sort()


reverse()


max()



# Difference Between Built-in and User-Defined Methods



## Built-in Methods


- Provided by Java.
- Already implemented.
- Ready to use.



Examples:


Math.sqrt()


String.length()



## User-Defined Methods


- Created by programmers.
- Designed for application-specific tasks.



Examples:


calculateBill()


checkBalance()



# Common Mistakes



## Forgetting Imports


Some classes require importing packages.



## Using Wrong Method Name


Method names are case-sensitive.



## Incorrect Parameters


Methods require correct input types.



# Best Practices


Follow these practices:


- Understand available Java API methods.
- Use predefined methods whenever possible.
- Avoid rewriting existing functionality.
- Read method documentation.
- Choose appropriate methods.



# Real-World Applications



## Banking Systems


Built-in methods help with:


- Calculations.
- Data formatting.
- Validation.



## E-Commerce Systems


Used for:


- String processing.
- Price calculations.
- Sorting products.



## Student Systems


Used for:


- Processing marks.
- Formatting reports.
- Data handling.



# Key Points


Remember:


- Built-in methods are provided by Java.
- They are available through Java API classes.
- They save development time.
- Common classes include Math, String, Arrays, and Scanner.
- They make programs shorter and more reliable.


Built-in methods help Java developers create powerful applications quickly by using ready-made functionality.

`

};


export default lesson13;