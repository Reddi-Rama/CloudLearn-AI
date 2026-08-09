const lesson9 = {

  id: "lesson9",

  title: "while Loop in Java",

  content: `

# while Loop in Java


## Introduction


In programming, many tasks need to be repeated multiple times.


For example:


- Printing numbers from 1 to 100.
- Processing multiple customer records.
- Reading data until the end of a file.
- Repeating a game until the player wins.



Writing the same code repeatedly is inefficient.


To solve this problem, Java provides looping statements.



# What is a Loop?


A loop is a control flow statement that repeatedly executes a block of code until a given condition becomes false.



A loop contains:


- Initialization.
- Condition.
- Execution block.
- Update statement.



# What is a while Loop?


The while loop is an entry-controlled loop that executes a block of code repeatedly as long as the condition is true.



Syntax:


while(condition)

{

    statements;

}



# How while Loop Works


Execution flow:


Start


↓


Initialize variable


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



# Simple while Loop Example


class WhileExample

{

    public static void main(String[] args)

    {

        int number = 1;


        while(number <= 5)

        {

            System.out.println(number);

            number++;

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


The loop starts with number = 1.


It continues until number becomes greater than 5.



# Components of while Loop



## Initialization


The starting value of the loop variable.



Example:


int count = 1;



## Condition


The condition decides whether the loop continues.



Example:


count <= 10



## Update


The update changes the loop variable value.



Example:


count++



# while Loop with User Input


Example:


class UserInputExample

{

    public static void main(String[] args)

    {

        int number = 5;


        while(number > 0)

        {

            System.out.println(number);

            number--;

        }

    }

}



Output:


5

4

3

2

1



# Infinite while Loop


An infinite loop is a loop that never ends because its condition always remains true.



Example:


while(true)

{

    System.out.println("Running");

}



This loop continues forever.



# Avoiding Infinite Loops


Always ensure that:


- The condition eventually becomes false.
- The loop variable is updated properly.



Example:


int count = 1;


while(count <= 5)

{

    System.out.println(count);

    count++;

}



# while Loop Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        int attempts = 3;


        while(attempts > 0)

        {

            System.out.println("Enter PIN");


            attempts--;

        }

    }

}



Output:


Enter PIN

Enter PIN

Enter PIN



Explanation:


The system allows three attempts.



# while Loop Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        int items = 5;


        while(items > 0)

        {

            System.out.println("Processing Item");


            items--;

        }

    }

}



Output:


Processing Item

Processing Item

Processing Item

Processing Item

Processing Item



# while Loop Example: Student Management System


class StudentExample

{

    public static void main(String[] args)

    {

        int student = 1;


        while(student <= 3)

        {

            System.out.println("Student " + student);


            student++;

        }

    }

}



Output:


Student 1

Student 2

Student 3



# while Loop with Multiple Statements


A while loop can contain multiple statements.



Example:


class Example

{

    public static void main(String[] args)

    {

        int count = 1;


        while(count <= 3)

        {

            System.out.println("Count: " + count);

            System.out.println("Learning Java");


            count++;

        }

    }

}



# Difference Between while and if



## if Statement


- Executes once.
- Used for decision making.



Example:


Check whether a student passed.



## while Loop


- Executes repeatedly.
- Used for repetition.



Example:


Print all student records.



# while Loop Advantages


## Code Reusability


Avoids writing repeated code.



## Easy Repetition


Useful for tasks with unknown number of repetitions.



## Better Program Structure


Makes programs shorter and cleaner.



# Limitations of while Loop


- Requires proper condition management.
- Can create infinite loops.
- May be difficult to debug in complex cases.



# Real-World Applications



## Banking Systems


while loops are used for:


- Multiple transaction processing.
- Retry attempts.
- Menu repetition.



## E-Commerce Systems


Used for:


- Processing cart items.
- Searching products.
- Handling multiple orders.



## Data Processing


Used for:


- Reading files.
- Processing records.
- Repeating calculations.



# Common Mistakes



## Forgetting Update Statement


Example:


int count = 1;


while(count <= 5)

{

    System.out.println(count);

}



This creates an infinite loop.



## Wrong Condition


Incorrect conditions may skip execution or run forever.



# Best Practices


Follow these practices:


- Always initialize loop variables.
- Update variables correctly.
- Avoid infinite loops.
- Keep loop conditions simple.
- Use comments for complex loops.



# Key Points


Remember:


- while loop repeats code while a condition is true.
- It is an entry-controlled loop.
- Condition is checked before execution.
- Initialization and update are important.
- It is useful when the number of repetitions is not fixed.


The while loop helps Java programs perform repeated tasks efficiently and is widely used in real-world applications.

`

};


export default lesson9;