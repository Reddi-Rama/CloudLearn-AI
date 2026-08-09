const lesson15 = {

  id: "lesson15",

  title: "Labeled break and continue in Java",

  content: `

# Labeled break and continue in Java


## Introduction


Java provides break and continue statements to control loop execution.


In simple loops:


- break terminates the current loop.
- continue skips the current iteration.



However, when working with nested loops, sometimes we need to control an outer loop directly from an inner loop.


For this purpose, Java provides labeled break and labeled continue statements.



# What is a Label in Java?


A label is a name given to a block of code or loop.


Syntax:


labelName:

loop



Example:


outerLoop:

for(int i = 1; i <= 3; i++)

{

}



The label helps Java identify a specific loop.



# Labeled break Statement


## Introduction


A labeled break statement terminates a specific labeled loop instead of only the nearest loop.



Syntax:


labelName:

{

    break labelName;

}



or


labelName:

for(...)

{

    break labelName;

}



# How Labeled break Works


Execution flow:


Outer Loop Starts


↓


Inner Loop Starts


↓


break label encountered


↓


Specified labeled loop terminates


↓


Execution continues after labeled loop



# Example Without Labeled break


class Example

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


Normal break only terminates the inner loop.



# Example Using Labeled break


class LabeledBreakExample

{

    public static void main(String[] args)

    {

        outerLoop:

        for(int i = 1; i <= 3; i++)

        {

            for(int j = 1; j <= 3; j++)

            {

                if(j == 2)

                {

                    break outerLoop;

                }


                System.out.println(i + " " + j);

            }

        }

    }

}



Output:


1 1



Explanation:


The labeled break terminates the outer loop completely.



# Labeled break Example: Searching Data


class SearchExample

{

    public static void main(String[] args)

    {

        int[][] data =

        {

            {1,2,3},

            {4,5,6},

            {7,8,9}

        };


        int target = 5;


        search:

        for(int i = 0; i < 3; i++)

        {

            for(int j = 0; j < 3; j++)

            {

                if(data[i][j] == target)

                {

                    System.out.println("Found");

                    break search;

                }

            }

        }

    }

}



Output:


Found



# Labeled continue Statement


## Introduction


A labeled continue statement skips the current iteration of a specific labeled loop and continues with the next iteration of that loop.



Syntax:


labelName:

for(...)

{

    continue labelName;

}



# How Labeled continue Works


Execution flow:


Outer loop starts


↓


Inner loop executes


↓


continue label encountered


↓


Current iteration of labeled loop is skipped


↓


Next iteration of labeled loop starts



# Example Using Labeled continue


class LabeledContinueExample

{

    public static void main(String[] args)

    {

        outerLoop:

        for(int i = 1; i <= 3; i++)

        {

            for(int j = 1; j <= 3; j++)

            {

                if(j == 2)

                {

                    continue outerLoop;

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


When j becomes 2, the current iteration of the outer loop is skipped.



# Difference Between break and continue



## break


Purpose:


Stops execution completely.



Example:


Exit a loop after finding required data.



## continue


Purpose:


Skips current iteration only.



Example:


Ignore invalid data and continue processing.



# Difference Between Normal and Labeled Statements



## Normal break


- Exits nearest loop.
- Used in simple loops.



## Labeled break


- Exits a specific outer loop.
- Used mainly with nested loops.



## Normal continue


- Skips current iteration of nearest loop.



## Labeled continue


- Skips current iteration of a specific labeled loop.



# Real-World Applications



## Banking Systems


Used for:


- Searching transactions.
- Stopping processing after finding required records.
- Handling multiple accounts.



Example:


Find a transaction and stop searching.



## E-Commerce Systems


Used for:


- Searching products.
- Skipping unavailable items.
- Processing categories and products.



Example:


Find a product inside multiple categories.



## Student Management Systems


Used for:


- Searching student records.
- Processing classes and students.
- Skipping invalid records.



# Advantages of Labeled Statements


Provides:


## Better Control


Allows control over specific loops.



## Efficient Searching


Stops processing immediately when required data is found.



## Useful for Nested Loops


Simplifies complex loop control.



# Disadvantages


Excessive use may:


- Reduce readability.
- Make code harder to maintain.
- Increase complexity.



# Common Mistakes



## Using Incorrect Label


The label name must exactly match the loop label.



## Overusing Labels


Avoid labels when simple break or continue is enough.



## Poor Naming


Use meaningful label names.



# Best Practices


Follow these practices:


- Use labels only with nested loops.
- Prefer simple loops when possible.
- Use meaningful label names.
- Avoid unnecessary complexity.
- Keep code readable.



# Key Points


Remember:


- A label gives a name to a loop.
- Labeled break exits a specific loop.
- Labeled continue skips an iteration of a specific loop.
- They are mainly useful in nested loops.
- Use them carefully to maintain readability.


Labeled break and continue statements provide advanced control over nested loops and help Java programs handle complex looping situations efficiently.

`

};


export default lesson15;