const lesson13 = {

  id: "lesson13",

  title: "break Statement in Java",

  content: `

# break Statement in Java


## Introduction


Loops are used to execute a block of code repeatedly.


Normally, a loop continues execution until its condition becomes false.


However, sometimes a program needs to stop a loop immediately before the condition becomes false.


For example:


- Stop searching when the required item is found.
- Exit an ATM menu when the user chooses logout.
- Stop processing records after finding invalid data.



For these situations, Java provides the break statement.



# What is a break Statement?


The break statement is a jump statement used to terminate the execution of a loop or switch statement immediately.



When Java encounters a break statement:


- The current loop stops.
- Control moves to the statement after the loop.



Syntax:


break;



# How break Works


Execution flow:


Start Loop


↓


Check Condition


↓


Execute Statements


↓


break encountered?


↓


Yes → Exit Loop


↓


Continue Program



# break in for Loop


Example:


class BreakExample

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 10; i++)

        {

            if(i == 5)

            {

                break;

            }


            System.out.println(i);

        }

    }

}



Output:


1

2

3

4



Explanation:


When i becomes 5, the break statement terminates the loop.



# break in while Loop


Example:


class WhileBreakExample

{

    public static void main(String[] args)

    {

        int number = 1;


        while(number <= 10)

        {

            if(number == 6)

            {

                break;

            }


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



# break in do-while Loop


Example:


class DoWhileBreakExample

{

    public static void main(String[] args)

    {

        int count = 1;


        do

        {

            if(count == 4)

            {

                break;

            }


            System.out.println(count);


            count++;

        }

        while(count <= 10);

    }

}



Output:


1

2

3



# break in switch Statement


The break statement is commonly used inside switch statements.



Example:


class SwitchBreakExample

{

    public static void main(String[] args)

    {

        int choice = 2;


        switch(choice)

        {

            case 1:

                System.out.println("Option One");

                break;


            case 2:

                System.out.println("Option Two");

                break;


            default:

                System.out.println("Invalid Choice");

        }

    }

}



Output:


Option Two



# break in Nested Loops


When break is used inside nested loops, it terminates only the nearest loop.



Example:


class NestedBreakExample

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 3; i++)

        {

            for(int j = 1; j <= 3; j++)

            {

                if(j == 2)

                {

                    break;

                }


                System.out.println(i + " " + j);

            }

        }

    }

}



Output:


1 1

2 1

3 1



Explanation:


The inner loop stops when j becomes 2.


The outer loop continues.



# break Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        int attempts = 1;


        while(attempts <= 5)

        {

            System.out.println("Checking PIN Attempt");


            if(attempts == 3)

            {

                System.out.println("Access Granted");

                break;

            }


            attempts++;

        }

    }

}



Output:


Checking PIN Attempt

Checking PIN Attempt

Checking PIN Attempt

Access Granted



# break Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        int productId = 1;


        while(productId <= 10)

        {

            if(productId == 5)

            {

                System.out.println("Product Found");

                break;

            }


            productId++;

        }

    }

}



Output:


Product Found



# break Example: Student Management System


class StudentExample

{

    public static void main(String[] args)

    {

        int student = 1;


        while(student <= 10)

        {

            if(student == 6)

            {

                System.out.println("Student Found");

                break;

            }


            student++;

        }

    }

}



Output:


Student Found



# Difference Between break and continue



## break Statement


- Terminates the complete loop.
- Control moves outside the loop.
- Used when further execution is unnecessary.



## continue Statement


- Skips current iteration.
- Loop continues with the next iteration.
- Used when only one iteration should be ignored.



# Advantages of break Statement


Provides:


## Early Exit


Stops execution when the required result is found.



## Improves Efficiency


Avoids unnecessary iterations.



## Better Control


Provides control over loops and switch statements.



# Limitations of break Statement


- Excessive use can reduce readability.
- Incorrect placement may stop execution unexpectedly.
- Can make complex logic harder to understand.



# Common Mistakes



## Using break Outside Loop


break can only be used inside:


- Loops.
- switch statements.



## Breaking the Wrong Loop


In nested loops, normal break exits only the nearest loop.



# Best Practices


Follow these practices:


- Use break only when necessary.
- Keep loop logic simple.
- Use meaningful conditions.
- Avoid excessive breaks.
- Consider other approaches when possible.



# Real-World Applications


break statements are used in:


- Search operations.
- Menu programs.
- Authentication systems.
- Data processing.
- Game development.
- Transaction processing.



# Key Points


Remember:


- break immediately terminates a loop or switch.
- It transfers control outside the current structure.
- It improves efficiency by avoiding unnecessary execution.
- In nested loops, it exits only the nearest loop.
- It is commonly used with switch and loops.


The break statement gives Java programs control to stop execution when a required condition is reached.

`

};


export default lesson13;