const lesson14 = {

  id: "lesson14",

  title: "continue Statement in Java",

  content: `

# continue Statement in Java


## Introduction


Loops are used to execute a block of code repeatedly.


Sometimes, while executing a loop, a program needs to skip the current iteration and move to the next iteration without stopping the complete loop.


For example:


- Skip invalid records while processing data.
- Ignore unavailable products in a shopping system.
- Skip specific numbers while printing values.



For these situations, Java provides the continue statement.



# What is a continue Statement?


The continue statement is a jump statement that skips the current iteration of a loop and moves control to the next iteration.



When Java encounters continue:


- Remaining statements of the current iteration are skipped.
- The next iteration starts.



Syntax:


continue;



# How continue Works


Execution flow:


Start Loop


↓


Check Condition


↓


Execute Loop Body


↓


continue encountered?


↓


Yes → Skip remaining statements


↓


Go to next iteration


↓


Loop continues



# continue in for Loop


Example:


class ContinueExample

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 5; i++)

        {

            if(i == 3)

            {

                continue;

            }


            System.out.println(i);

        }

    }

}



Output:


1

2

4

5



Explanation:


When i becomes 3, continue skips that iteration.



# continue in while Loop


Example:


class WhileContinueExample

{

    public static void main(String[] args)

    {

        int number = 0;


        while(number < 5)

        {

            number++;


            if(number == 3)

            {

                continue;

            }


            System.out.println(number);

        }

    }

}



Output:


1

2

4

5



# continue in do-while Loop


Example:


class DoWhileContinueExample

{

    public static void main(String[] args)

    {

        int number = 0;


        do

        {

            number++;


            if(number == 2)

            {

                continue;

            }


            System.out.println(number);

        }

        while(number < 5);

    }

}



Output:


1

3

4

5



# Difference Between break and continue



## break Statement


break:


- Terminates the complete loop.
- Control moves outside the loop.
- No further iterations execute.



Example:


Stop searching after finding a product.



## continue Statement


continue:


- Skips only the current iteration.
- Loop continues with the next iteration.
- Remaining iterations execute.



Example:


Skip unavailable products but continue checking others.



# continue with Conditional Statements


continue is commonly used with if conditions.



Example:


class Example

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 10; i++)

        {

            if(i % 2 == 0)

            {

                continue;

            }


            System.out.println(i);

        }

    }

}



Output:


1

3

5

7

9



Explanation:


Even numbers are skipped.



# continue Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        int transaction = 1;


        while(transaction <= 5)

        {

            if(transaction == 3)

            {

                transaction++;

                continue;

            }


            System.out.println(

            "Processing Transaction " + transaction);


            transaction++;

        }

    }

}



Output:


Processing Transaction 1

Processing Transaction 2

Processing Transaction 4

Processing Transaction 5



Explanation:


Transaction 3 is skipped.



# continue Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        for(int product = 1; product <= 5; product++)

        {

            if(product == 2)

            {

                continue;

            }


            System.out.println(

            "Processing Product " + product);

        }

    }

}



Output:


Processing Product 1

Processing Product 3

Processing Product 4

Processing Product 5



# continue Example: Student Management System


class StudentExample

{

    public static void main(String[] args)

    {

        for(int student = 1; student <= 5; student++)

        {

            if(student == 3)

            {

                continue;

            }


            System.out.println(

            "Student " + student);

        }

    }

}



Output:


Student 1

Student 2

Student 4

Student 5



# continue in Nested Loops


When continue is used inside nested loops, it affects the loop where it is written.



Example:


class NestedContinueExample

{

    public static void main(String[] args)

    {

        for(int i = 1; i <= 3; i++)

        {

            for(int j = 1; j <= 3; j++)

            {

                if(j == 2)

                {

                    continue;

                }


                System.out.println(i + " " + j);

            }

        }

    }

}



Output:


1 1

1 3

2 1

2 3

3 1

3 3



# Advantages of continue Statement



## Skips Unnecessary Operations


Avoids executing unwanted code.



## Improves Efficiency


Allows programs to ignore invalid cases quickly.



## Better Loop Control


Provides more flexibility in loops.



# Limitations of continue Statement


- Excessive use can reduce readability.
- Incorrect placement may skip required operations.
- Complex loops become harder to understand.



# Common Mistakes



## Infinite Loop with continue


Example:


while(number <= 5)

{

    if(number == 3)

    {

        continue;

    }

}



The update statement may never execute.



## Using continue Outside Loop


continue can only be used inside loops.



# Best Practices


Follow these practices:


- Use continue only when required.
- Keep conditions clear.
- Update loop variables properly.
- Avoid unnecessary skipping.
- Maintain readable logic.



# Real-World Applications


continue statements are used in:


- Data filtering.
- Record processing.
- Search operations.
- Report generation.
- Validation systems.



# Key Points


Remember:


- continue skips the current loop iteration.
- It does not terminate the complete loop.
- The next iteration starts automatically.
- It is commonly used with if conditions.
- It provides better control over repeated execution.


The continue statement helps Java programs ignore unnecessary operations while allowing the remaining loop execution to continue.

`

};


export default lesson14;