const lesson12 = {

  id: "lesson12",

  title: "Nested Loops in Java",

  content: `

# Nested Loops in Java


## Introduction


Loops are used to execute a block of code repeatedly.


Sometimes a program needs to perform repeated operations inside another repeated operation.


For example:


- Printing patterns.
- Processing tables.
- Working with matrices.
- Handling multiple records.
- Comparing multiple values.



For these situations, Java provides nested loops.



# What are Nested Loops?


A nested loop is a loop placed inside another loop.


The inner loop executes completely for every single execution of the outer loop.



Syntax:


for(initialization; condition; update)

{

    for(initialization; condition; update)

    {

        statements;

    }

}



# Types of Nested Loops


Any loop can be placed inside another loop.


Examples:


- Nested for loop.
- Nested while loop.
- Nested do-while loop.
- Combination of different loops.



# How Nested Loops Work


Execution flow:


Start


↓


Outer loop starts


↓


Inner loop starts


↓


Inner loop completes all iterations


↓


Outer loop updates


↓


Inner loop starts again


↓


Outer loop ends



# Simple Nested for Loop Example


class NestedLoopExample

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 3; i++)

        {

            for(int j = 1; j <= 3; j++)

            {

                System.out.println(i + " " + j);

            }

        }

    }

}



Output:


1 1

1 2

1 3

2 1

2 2

2 3

3 1

3 2

3 3



Explanation:


The outer loop runs 3 times.


For each outer loop execution, the inner loop runs 3 times.



# Nested Loop Execution Example


Outer loop:


i = 1


Inner loop:


j = 1, 2, 3



Outer loop:


i = 2


Inner loop:


j = 1, 2, 3



Outer loop:


i = 3


Inner loop:


j = 1, 2, 3



# Printing Patterns Using Nested Loops


Nested loops are commonly used to create patterns.



Example:


class PatternExample

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 5; i++)

        {

            for(int j = 1; j <= i; j++)

            {

                System.out.print("* ");

            }


            System.out.println();

        }

    }

}



Output:


*


* *


* * *


* * * *


* * * * *



# Nested Loop with while Loop


Example:


class NestedWhileExample

{

    public static void main(String[] args)

    {

        int i = 1;


        while(i <= 3)

        {

            int j = 1;


            while(j <= 3)

            {

                System.out.println(i + " " + j);


                j++;

            }


            i++;

        }

    }

}



# Nested Loop Example: Student Management System


class StudentExample

{

    public static void main(String[] args)

    {

        for(int classRoom = 1; classRoom <= 2; classRoom++)

        {

            for(int student = 1; student <= 3; student++)

            {

                System.out.println(

                "Class " + classRoom +

                " Student " + student);

            }

        }

    }

}



Output:


Class 1 Student 1

Class 1 Student 2

Class 1 Student 3

Class 2 Student 1

Class 2 Student 2

Class 2 Student 3



# Nested Loop Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        for(int category = 1; category <= 2; category++)

        {

            for(int product = 1; product <= 3; product++)

            {

                System.out.println(

                "Category " + category +

                " Product " + product);

            }

        }

    }

}



# Nested Loop Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        for(int account = 1; account <= 2; account++)

        {

            for(int transaction = 1; transaction <= 3; transaction++)

            {

                System.out.println(

                "Account " + account +

                " Transaction " + transaction);

            }

        }

    }

}



# Nested Loop with Arrays


Nested loops are frequently used with two-dimensional arrays.



Example:


class MatrixExample

{

    public static void main(String[] args)

    {

        int matrix[][] =

        {

            {1,2},

            {3,4}

        };


        for(int i = 0; i < 2; i++)

        {

            for(int j = 0; j < 2; j++)

            {

                System.out.println(matrix[i][j]);

            }

        }

    }

}



Output:


1

2

3

4



# Time Complexity of Nested Loops


Nested loops increase the number of executions.


Example:


Outer loop runs n times.


Inner loop runs n times.



Total executions:


n × n = n²



This is called quadratic complexity.



# Advantages of Nested Loops


Nested loops provide:


## Handling Complex Data


Useful for tables, matrices, and patterns.



## Better Organization


Makes repeated operations easier.



## Data Processing


Useful for comparing multiple values.



# Limitations of Nested Loops


Nested loops may:


- Increase execution time.
- Consume more resources.
- Become difficult to understand.



# Common Mistakes



## Incorrect Loop Conditions


Wrong conditions may create infinite loops.



## Too Many Nested Levels


Deep nesting reduces readability.



## Incorrect Variable Usage


Using the same variable incorrectly can cause errors.



# Best Practices


Follow these practices:


- Keep nesting levels minimum.
- Use meaningful loop variables.
- Avoid unnecessary nested loops.
- Optimize complex operations.
- Add comments for difficult logic.



# Real-World Applications


Nested loops are used in:


- Matrix operations.
- Image processing.
- Database searching.
- Game development.
- Pattern generation.
- Data analysis.



# Key Points


Remember:


- Nested loops contain one loop inside another loop.
- Inner loop completes all iterations for every outer loop cycle.
- They are useful for complex repeated tasks.
- They are commonly used with arrays and patterns.
- Excessive nesting should be avoided.


Nested loops allow Java programs to handle multi-level repetition and complex data processing efficiently.

`

};


export default lesson12;