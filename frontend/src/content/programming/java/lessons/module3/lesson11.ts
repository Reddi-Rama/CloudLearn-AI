const lesson11 = {

  id: "lesson11",

  title: "for Loop in Java",

  content: `

# for Loop in Java


## Introduction


Loops are used to execute a block of code repeatedly.


In programming, many tasks require repetition:


- Printing numbers.
- Processing records.
- Iterating through data.
- Performing calculations repeatedly.



Java provides different looping statements:


- while loop.
- do-while loop.
- for loop.



The for loop is commonly used when the number of repetitions is already known.



# What is a for Loop?


A for loop is a control flow statement that repeatedly executes a block of code for a specific number of times.



Syntax:


for(initialization; condition; update)

{

    statements;

}



# Components of for Loop


A for loop contains three important parts:



## Initialization


Initialization creates and assigns the starting value of the loop variable.



Example:


int i = 1



It executes only once.



## Condition


The condition determines whether the loop continues.



Example:


i <= 5



The loop executes while the condition is true.



## Update


The update changes the loop variable after every iteration.



Example:


i++



# How for Loop Works


Execution flow:


Start


↓


Initialization


↓


Check condition


↓


Condition true?


↓


Execute loop body


↓


Update variable


↓


Check condition again


↓


Condition false → Exit loop



# Simple for Loop Example


class ForExample

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 5; i++)

        {

            System.out.println(i);

        }

    }

}



Output:


1

2

3

4

5



Explanation:


The loop starts from 1 and continues until i becomes 5.



# Printing Numbers in Reverse


Example:


class ReverseExample

{

    public static void main(String[] args)

    {

        for(int i = 5; i >= 1; i--)

        {

            System.out.println(i);

        }

    }

}



Output:


5

4

3

2

1



# for Loop with Multiple Statements


A for loop can contain multiple statements inside its block.



Example:


class Example

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 3; i++)

        {

            System.out.println("Java");

            System.out.println(i);

        }

    }

}



# Nested for Loop


A for loop inside another for loop is called a nested for loop.



Example:


class NestedForExample

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



# Infinite for Loop


An infinite loop is a loop that never ends.



Example:


for(;;)

{

    System.out.println("Running");

}



The loop continues forever.



# for Loop with User Data


Example:


class Example

{

    public static void main(String[] args)

    {

        int total = 0;


        for(int i = 1; i <= 5; i++)

        {

            total = total + i;

        }


        System.out.println(total);

    }

}



Output:


15



# for Loop Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        for(int transaction = 1; transaction <= 5; transaction++)

        {

            System.out.println("Processing Transaction " + transaction);

        }

    }

}



Output:


Processing Transaction 1

Processing Transaction 2

Processing Transaction 3

Processing Transaction 4

Processing Transaction 5



# for Loop Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        int products = 5;


        for(int i = 1; i <= products; i++)

        {

            System.out.println("Product " + i);

        }

    }

}



Output:


Product 1

Product 2

Product 3

Product 4

Product 5



# for Loop Example: Student Management System


class StudentExample

{

    public static void main(String[] args)

    {

        for(int student = 1; student <= 3; student++)

        {

            System.out.println("Student " + student);

        }

    }

}



Output:


Student 1

Student 2

Student 3



# Different Forms of for Loop


Java allows different ways to write for loops.



## Empty Initialization


Example:


int i = 1;


for(; i <= 5; i++)

{

    System.out.println(i);

}



## Empty Update


Example:


for(int i = 1; i <= 5;)

{

    System.out.println(i);

    i++;

}



## Multiple Variables


Example:


for(int i = 0, j = 5; i < j; i++, j--)

{

    System.out.println(i);

}



# Difference Between while and for Loop



## while Loop


- Used when number of iterations is unknown.
- Initialization and update are written separately.



## for Loop


- Used when number of iterations is known.
- Initialization, condition, and update are written together.



# Advantages of for Loop


Provides:


## Compact Syntax


All loop controls are written in one place.



## Better Readability


Easy to understand for fixed repetitions.



## Efficient Iteration


Useful for counting and processing data.



# Limitations of for Loop


- Less suitable when repetitions are unknown.
- Complex conditions can reduce readability.



# Real-World Applications



## Banking Systems


Used for:


- Processing transactions.
- Generating reports.
- Calculating repeated operations.



## E-Commerce Systems


Used for:


- Displaying products.
- Processing cart items.
- Generating bills.



## Data Processing


Used for:


- Reading records.
- Performing calculations.
- Searching data.



# Common Mistakes



## Wrong Loop Condition


A wrong condition may skip execution or create infinite loops.



## Incorrect Update


Missing update can create an infinite loop.



## Modifying Loop Variable Incorrectly


Can produce unexpected results.



# Best Practices


Follow these practices:


- Use for loops when iterations are known.
- Keep loop conditions simple.
- Use meaningful variable names.
- Avoid unnecessary complexity.
- Check loop boundaries carefully.



# Key Points


Remember:


- for loop repeats code a fixed number of times.
- It contains initialization, condition, and update.
- It is an entry-controlled loop.
- It is commonly used for counting and iteration.
- Nested for loops handle complex repetition.


The for loop is one of the most widely used looping statements in Java and is essential for building efficient applications.

`

};


export default lesson11;