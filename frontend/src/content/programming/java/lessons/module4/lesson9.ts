const lesson9 = {

  id: "lesson9",

  title: "Recursive Methods in Java",

  content: `

# Recursive Methods in Java


## Introduction


Sometimes a problem can be solved by breaking it into smaller versions of the same problem.


For example:


- Finding factorial of a number.
- Calculating Fibonacci series.
- Searching through folders.
- Processing tree structures.



In such situations, a method can call itself to solve the smaller part of the problem.


This technique is called recursion.



# What is Recursion?


Recursion is a programming technique where a method calls itself repeatedly until a specific condition is reached.



A method that calls itself is called a recursive method.



Example:


method()

{

    method();

}



The method continues calling itself until the stopping condition is reached.



# Components of Recursion


Every recursive method contains two important parts:



## 1. Base Condition


The condition that stops the recursive calls.



Without a base condition, recursion continues forever and causes stack overflow.



Example:


if(number == 0)

{

    return;

}



## 2. Recursive Call


The method calling itself with a smaller or modified value.



Example:


method(number - 1);



# How Recursion Works


Execution process:


Method called


↓


Check base condition


↓


If condition is false


↓


Call method again


↓


Repeat process


↓


Base condition reached


↓


Return results back



# Simple Recursive Method Example


class RecursionExample

{

    static void display(int number)

    {

        if(number == 0)

        {

            return;

        }


        System.out.println(number);


        display(number - 1);

    }


    public static void main(String[] args)

    {

        display(5);

    }

}



Output:


5

4

3

2

1



Explanation:


The method calls itself until number becomes 0.



# Recursive Factorial Program


Factorial formula:


n! = n × (n-1) × (n-2) ... × 1



Example:


class FactorialExample

{

    static int factorial(int number)

    {

        if(number == 1)

        {

            return 1;

        }


        return number * factorial(number - 1);

    }


    public static void main(String[] args)

    {

        int result = factorial(5);


        System.out.println(result);

    }

}



Output:


120



Explanation:


factorial(5)


= 5 × factorial(4)


= 5 × 4 × factorial(3)


= 5 × 4 × 3 × factorial(2)


= 5 × 4 × 3 × 2 × factorial(1)


= 120



# Recursive Fibonacci Example


The Fibonacci series:


0 1 1 2 3 5 8...



Example:


class FibonacciExample

{

    static int fibonacci(int number)

    {

        if(number <= 1)

        {

            return number;

        }


        return fibonacci(number - 1) + fibonacci(number - 2);

    }


    public static void main(String[] args)

    {

        for(int i = 0; i < 6; i++)

        {

            System.out.print(fibonacci(i) + " ");

        }

    }

}



Output:


0 1 1 2 3 5



# Recursive Method Example: Banking System


class BankingSystem

{

    static void processTransaction(int count)

    {

        if(count == 0)

        {

            return;

        }


        System.out.println("Processing Transaction " + count);


        processTransaction(count - 1);

    }


    public static void main(String[] args)

    {

        processTransaction(3);

    }

}



Output:


Processing Transaction 3

Processing Transaction 2

Processing Transaction 1



# Recursive Method Example: E-Commerce System


class ShoppingSystem

{

    static void displayProducts(int product)

    {

        if(product == 0)

        {

            return;

        }


        System.out.println("Product " + product);


        displayProducts(product - 1);

    }


    public static void main(String[] args)

    {

        displayProducts(5);

    }

}



Output:


Product 5

Product 4

Product 3

Product 2

Product 1



# Recursive Method Example: Student Management System


class StudentSystem

{

    static void displayStudents(int student)

    {

        if(student == 0)

        {

            return;

        }


        System.out.println("Student " + student);


        displayStudents(student - 1);

    }


    public static void main(String[] args)

    {

        displayStudents(3);

    }

}



Output:


Student 3

Student 2

Student 1



# Recursion and Call Stack


Every recursive call creates a new stack frame in memory.



Example:


factorial(3)



Stack:


factorial(3)


factorial(2)


factorial(1)



When the base condition is reached, methods return one by one.



# Types of Recursion



## Direct Recursion


A method directly calls itself.



Example:


method()

{

    method();

}



## Indirect Recursion


A method calls another method that eventually calls the first method.



Example:


methodA()

{

    methodB();

}



methodB()

{

    methodA();

}



# Advantages of Recursion



## Simpler Code


Some complex problems become easier.



## Useful for Hierarchical Data


Works well with:


- Trees.
- File systems.
- Graphs.



## Reduces Code Length


Avoids complex loop structures.



# Disadvantages of Recursion



## Memory Usage


Each method call uses stack memory.



## Stack Overflow


Too many recursive calls can exceed memory.



## Performance Issues


Some recursive solutions may be slower than loops.



# Recursion vs Loop



## Recursion


- Method calls itself.
- Uses call stack.
- Suitable for hierarchical problems.



## Loop


- Repeats using conditions.
- Uses less memory.
- Suitable for simple repetition.



# Common Mistakes



## Missing Base Condition


Causes infinite recursion.



## Wrong Recursive Step


May never reach the base condition.



## Excessive Recursion


May cause stack overflow.



# Best Practices


Follow these practices:


- Always define a base condition.
- Ensure progress toward stopping condition.
- Use recursion only when it improves clarity.
- Avoid unnecessary recursive calls.
- Test with small inputs first.



# Real-World Applications



Recursion is used in:


- File directory traversal.
- Database searching.
- Artificial intelligence algorithms.
- Tree data structures.
- Sorting algorithms.
- Mathematical calculations.



# Key Points


Remember:


- Recursion is when a method calls itself.
- Every recursive method needs a base condition.
- Recursive calls solve smaller versions of the problem.
- Recursion uses the call stack.
- It is powerful for complex problems.


Recursive methods allow Java programs to solve problems by repeatedly breaking them into smaller and simpler subproblems.

`

};


export default lesson9;