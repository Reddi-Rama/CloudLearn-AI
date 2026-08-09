const lesson10 = {

  id: "lesson10",

  title: "do-while Loop in Java",

  content: `

# do-while Loop in Java


## Introduction


Loops are used to execute a block of code repeatedly.


Java provides different types of loops:


- while loop.
- do-while loop.
- for loop.



Sometimes, a program needs to execute a block of code at least one time before checking the condition.


For such situations, Java provides the do-while loop.



# What is a do-while Loop?


A do-while loop is a control flow statement that executes a block of code first and checks the condition afterward.



Because the condition is checked after execution, the loop body executes at least once.



# Syntax of do-while Loop


do

{

    statements;

}

while(condition);



# How do-while Loop Works


Execution flow:


Start


↓


Initialize variable


↓


Execute loop body


↓


Update variable


↓


Check condition


↓


Condition true?


↓


Repeat loop


↓


Condition false?


↓


Exit loop



# Difference Between while and do-while


## while Loop


- Condition is checked before execution.
- May execute zero times.
- It is an entry-controlled loop.



Example:


while(condition)

{

    statements;

}



## do-while Loop


- Condition is checked after execution.
- Executes at least one time.
- It is an exit-controlled loop.



Example:


do

{

    statements;

}

while(condition);



# Simple do-while Example


class DoWhileExample

{

    public static void main(String[] args)

    {

        int number = 1;


        do

        {

            System.out.println(number);

            number++;

        }

        while(number <= 5);

    }

}



Output:


1

2

3

4

5



Explanation:


The loop body executes first.


After execution, Java checks the condition.



# do-while Executes At Least Once


Example:


class Example

{

    public static void main(String[] args)

    {

        int number = 10;


        do

        {

            System.out.println("Executed");

        }

        while(number < 5);

    }

}



Output:


Executed



Explanation:


Although the condition is false, the loop executes once because the condition is checked later.



# do-while with User Menu


do-while loops are commonly used in menu-driven applications.



Example:


class MenuExample

{

    public static void main(String[] args)

    {

        int choice = 1;


        do

        {

            System.out.println("Menu Displayed");


            choice--;


        }

        while(choice > 0);

    }

}



Output:


Menu Displayed



# do-while Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        int attempts = 1;


        do

        {

            System.out.println("Enter PIN");


            attempts++;


        }

        while(attempts <= 3);

    }

}



Output:


Enter PIN

Enter PIN

Enter PIN



Explanation:


The system allows three PIN attempts.



# do-while Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        int items = 1;


        do

        {

            System.out.println("Processing Order Item");


            items++;


        }

        while(items <= 5);

    }

}



Output:


Processing Order Item

Processing Order Item

Processing Order Item

Processing Order Item

Processing Order Item



# do-while Example: Student Management System


class StudentExample

{

    public static void main(String[] args)

    {

        int student = 1;


        do

        {

            System.out.println("Student " + student);


            student++;


        }

        while(student <= 3);

    }

}



Output:


Student 1

Student 2

Student 3



# Infinite do-while Loop


An infinite loop occurs when the condition never becomes false.



Example:


do

{

    System.out.println("Running");

}

while(true);



This loop continues forever.



# Avoiding Infinite Loops


Always ensure:


- The loop variable changes.
- The condition eventually becomes false.



Example:


int count = 1;


do

{

    System.out.println(count);

    count++;

}

while(count <= 5);



# Real-World Applications



## Banking Applications


do-while loops are used for:


- ATM menu systems.
- Repeated user operations.
- Multiple transaction handling.



Example:


Show ATM menu until user exits.



## E-Commerce Applications


Used for:


- Repeating shopping operations.
- Cart processing.
- Order confirmation.



## Student Applications


Used for:


- Menu-based systems.
- Repeated record entry.
- Data processing.



# Advantages of do-while Loop


## Guaranteed Execution


The loop executes at least once.



## Useful for Menus


Perfect for programs requiring initial display.



## Simple Structure


Easy to understand and implement.



# Limitations of do-while Loop


- Executes once even when condition is false.
- Requires careful condition handling.
- Can create infinite loops.



# Common Mistakes



## Missing while Condition


Wrong:


do

{

    statements;

}



Correct:


do

{

    statements;

}

while(condition);



## Incorrect Update


Not updating loop variables may create infinite loops.



# Best Practices


Follow these practices:


- Use do-while when one execution is required.
- Keep conditions simple.
- Update variables properly.
- Avoid unnecessary use of do-while.



# Key Points


Remember:


- do-while checks the condition after execution.
- It executes at least once.
- It is an exit-controlled loop.
- It is useful for menu-driven programs.
- It requires a while condition at the end.


The do-while loop is useful when Java programs need to perform an operation first and decide whether to repeat afterward.

`

};


export default lesson10;