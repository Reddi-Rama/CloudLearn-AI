const lesson10 = {

  id: "lesson10",

  title: "Variable-Length Arguments (Varargs) in Java",

  content: `

# Variable-Length Arguments (Varargs) in Java


## Introduction


Normally, when creating a method, we need to specify the exact number of parameters.


Example:


A method that adds three numbers requires three parameters.



But sometimes we do not know how many values will be passed to a method.


For example:


- Adding any number of values.
- Finding the average of multiple numbers.
- Processing multiple records.



Java provides variable-length arguments, also called varargs, to handle this situation.



# What is Varargs?


Varargs allows a method to accept a variable number of arguments.


A method can receive:


- Zero arguments.
- One argument.
- Multiple arguments.



Varargs was introduced in Java 5.



# Syntax of Varargs


Syntax:


returnType methodName(dataType... variableName)

{

    statements;

}



Example:


static void display(int... numbers)

{

}



The three dots (...) indicate a variable number of arguments.



# How Varargs Works


Internally, Java treats varargs as an array.



Example:


static void display(int... numbers)



is internally similar to:


static void display(int[] numbers)



# Simple Varargs Example


class VarargsExample

{

    static void display(int... numbers)

    {

        for(int number : numbers)

        {

            System.out.println(number);

        }

    }


    public static void main(String[] args)

    {

        display(10,20,30);

    }

}



Output:


10

20

30



Explanation:


The method accepts any number of integer values.



# Varargs with Multiple Arguments


Example:


class Example

{

    static void addNumbers(String name, int... numbers)

    {

        int sum = 0;


        for(int number : numbers)

        {

            sum += number;

        }


        System.out.println(name + " : " + sum);

    }


    public static void main(String[] args)

    {

        addNumbers("Total",10,20,30);

    }

}



Output:


Total : 60



# Calling Varargs Method


A varargs method can be called with different numbers of arguments.



Example:


display();



No arguments.



Example:


display(10);



One argument.



Example:


display(10,20,30,40);



Multiple arguments.



# Varargs with Return Value


Example:


class ReturnVarargsExample

{

    static int sum(int... numbers)

    {

        int total = 0;


        for(int number : numbers)

        {

            total += number;

        }


        return total;

    }


    public static void main(String[] args)

    {

        int result = sum(10,20,30);


        System.out.println(result);

    }

}



Output:


60



# Varargs Example: Banking System


class BankingSystem

{

    static double calculateTotal(double... transactions)

    {

        double total = 0;


        for(double amount : transactions)

        {

            total += amount;

        }


        return total;

    }


    public static void main(String[] args)

    {

        double result = calculateTotal(1000,2000,3000);


        System.out.println(result);

    }

}



Output:


6000.0



Explanation:


The method can process any number of transactions.



# Varargs Example: E-Commerce System


class ShoppingSystem

{

    static double calculateCart(double... prices)

    {

        double total = 0;


        for(double price : prices)

        {

            total += price;

        }


        return total;

    }


    public static void main(String[] args)

    {

        System.out.println(calculateCart(100,250,500));

    }

}



Output:


850.0



# Varargs Example: Student Management System


class StudentSystem

{

    static double calculateAverage(int... marks)

    {

        int total = 0;


        for(int mark : marks)

        {

            total += mark;

        }


        return total / marks.length;

    }


    public static void main(String[] args)

    {

        System.out.println(calculateAverage(80,90,70));

    }

}



Output:


80.0



# Rules of Varargs



## Only One Varargs Parameter


A method can have only one varargs parameter.



Correct:


void display(int... values)



Incorrect:


void display(int... a, int... b)



## Varargs Must Be Last Parameter


Example:


void method(String name, int... numbers)



Correct.



Incorrect:


void method(int... numbers, String name)



# Varargs and Method Overloading


Varargs methods can be overloaded.



Example:


class Example

{

    static void display(int number)

    {

        System.out.println("Integer");

    }


    static void display(int... numbers)

    {

        System.out.println("Varargs");

    }


    public static void main(String[] args)

    {

        display(10);

    }

}



Output:


Integer



# Advantages of Varargs



## Flexible Input


Methods can accept different numbers of values.



## Less Code


Avoids creating multiple overloaded methods.



## Better Reusability


One method handles many situations.



# Limitations of Varargs



## Performance Overhead


Java creates an array internally.



## Ambiguous Method Calls


Can create confusion with overloaded methods.



## Should Be Used Carefully


Not every method requires varargs.



# Varargs vs Array



## Array


Requires creating an array before passing values.



Example:


int[] numbers = {1,2,3};



## Varargs


Allows direct passing of values.



Example:


display(1,2,3);



# Common Mistakes



## Varargs Not at End


The varargs parameter must be the last parameter.



## Passing Wrong Data Type


Arguments must match the varargs type.



## Using Too Many Varargs Methods


Can reduce code clarity.



# Best Practices


Follow these practices:


- Use varargs when the number of arguments is unknown.
- Keep varargs as the last parameter.
- Avoid unnecessary use.
- Choose meaningful parameter names.
- Maintain readable method design.



# Real-World Applications



## Banking Applications


Used for:


- Multiple transactions.
- Multiple account operations.
- Report generation.



## E-Commerce Applications


Used for:


- Multiple products.
- Cart calculations.
- Discount processing.



## Student Applications


Used for:


- Multiple marks.
- Subject calculations.
- Performance analysis.



# Key Points


Remember:


- Varargs allows a method to accept multiple arguments.
- It uses three dots (...).
- Internally, it works using arrays.
- Only one varargs parameter is allowed.
- Varargs improves flexibility and code reuse.


Variable-length arguments make Java methods more flexible by allowing them to work with different numbers of inputs.

`

};


export default lesson10;