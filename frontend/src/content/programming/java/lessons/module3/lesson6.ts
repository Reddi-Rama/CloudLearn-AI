const lesson6 = {

  id: "lesson6",

  title: "else-if Ladder in Java",

  content: `

# else-if Ladder in Java


## Introduction


In programming, sometimes there are multiple conditions that need to be checked.


Using multiple independent if statements can make code difficult to understand.


For example:


A student grading system needs to check:


- Marks above 90 → Grade A.
- Marks above 75 → Grade B.
- Marks above 60 → Grade C.
- Marks above 35 → Grade D.
- Otherwise → Fail.



For handling multiple conditions, Java provides the else-if ladder.



# What is an else-if Ladder?


An else-if ladder is a decision-making structure where multiple conditions are checked one after another.


When one condition becomes true, its block executes and the remaining conditions are skipped.



Syntax:


if(condition1)

{

    statements;

}

else if(condition2)

{

    statements;

}

else if(condition3)

{

    statements;

}

else

{

    statements;

}



# How else-if Ladder Works


Execution flow:


Start


↓


Check first condition


↓


If true → Execute block


↓


If false → Check next condition


↓


Continue checking conditions


↓


If no condition is true → Execute else block



# Simple else-if Example


class ElseIfExample

{

    public static void main(String[] args)

    {

        int marks = 85;


        if(marks >= 90)

        {

            System.out.println("Grade A");

        }

        else if(marks >= 75)

        {

            System.out.println("Grade B");

        }

        else if(marks >= 60)

        {

            System.out.println("Grade C");

        }

        else

        {

            System.out.println("Fail");

        }

    }

}



Output:


Grade B



Explanation:


The first condition is false.


The second condition is true, so Grade B is printed.



# Important Rule of else-if Ladder


Once a condition becomes true:


- Its block executes.
- Remaining conditions are skipped.



Example:


if(condition1)

{

}


else if(condition2)

{

}



If condition1 is true, condition2 is not checked.



# else-if Ladder Example: Student Grading System


class GradeExample

{

    public static void main(String[] args)

    {

        int marks = 92;


        if(marks >= 90)

        {

            System.out.println("Grade A");

        }

        else if(marks >= 80)

        {

            System.out.println("Grade B");

        }

        else if(marks >= 70)

        {

            System.out.println("Grade C");

        }

        else if(marks >= 35)

        {

            System.out.println("Grade D");

        }

        else

        {

            System.out.println("Fail");

        }

    }

}



Output:


Grade A



# else-if Ladder Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        double balance = 50000;


        if(balance >= 100000)

        {

            System.out.println("Premium Account");

        }

        else if(balance >= 50000)

        {

            System.out.println("Gold Account");

        }

        else if(balance >= 10000)

        {

            System.out.println("Silver Account");

        }

        else

        {

            System.out.println("Basic Account");

        }

    }

}



Output:


Gold Account



# else-if Ladder Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        int amount = 8000;


        if(amount >= 10000)

        {

            System.out.println("20% Discount");

        }

        else if(amount >= 5000)

        {

            System.out.println("10% Discount");

        }

        else if(amount >= 2000)

        {

            System.out.println("5% Discount");

        }

        else

        {

            System.out.println("No Discount");

        }

    }

}



Output:


10% Discount



# Nested if vs else-if Ladder



## Nested if


Used when one condition depends on another condition.



Example:


Login successful → Check balance.



## else-if Ladder


Used when multiple alternative conditions exist.



Example:


Checking grades based on marks.



# Advantages of else-if Ladder


## Multiple Condition Handling


Allows checking many conditions easily.



## Better Readability


Cleaner than writing many independent if statements.



## Efficient Execution


Stops checking after finding a true condition.



# Disadvantages of else-if Ladder


Too many conditions can:


- Increase complexity.
- Reduce readability.
- Become difficult to maintain.



# Common Mistakes



## Incorrect Condition Order


Example:


if(marks >= 35)

{

    Pass

}

else if(marks >= 90)

{

    Grade A

}



The second condition will never execute.



Always write conditions from highest priority to lowest priority.



## Missing Final else


The final else is optional but useful for handling unexpected cases.



# Best Practices


Follow these practices:


- Arrange conditions in proper order.
- Keep conditions simple.
- Use meaningful messages.
- Avoid very long ladders.
- Use switch when conditions depend on fixed values.



# Real-World Applications


else-if ladders are used in:


- Grade calculation systems.
- Tax calculation systems.
- Banking categories.
- Discount systems.
- Authentication levels.
- Employee salary processing.



# Key Points


Remember:


- else-if ladder checks multiple conditions.
- Conditions execute from top to bottom.
- Only the first true condition executes.
- else executes when all conditions are false.
- It is useful for multiple alternative decisions.


The else-if ladder helps Java programs handle multiple choices efficiently and clearly.

`

};


export default lesson6;