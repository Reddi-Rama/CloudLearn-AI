const lesson7 = {

  id: "lesson7",

  title: "switch Statement in Java",

  content: `

# switch Statement in Java


## Introduction


In programming, sometimes we need to execute different blocks of code based on a single value.


For example:


- A menu system selects an option based on user choice.
- A calculator performs operations based on selected operators.
- A day scheduler performs actions based on the day number.



Using multiple else-if conditions for such cases can make code lengthy and difficult to understand.


Java provides the switch statement to handle multiple choices efficiently.



# What is a switch Statement?


The switch statement is a decision-making statement that executes one block of code from multiple available options based on the value of an expression.



Syntax:


switch(expression)

{

    case value1:

        statements;

        break;


    case value2:

        statements;

        break;


    default:

        statements;

}



# Components of switch Statement



## Expression


The value that is compared with different cases.



Example:


switch(day)



## case


A case represents a possible value of the expression.



Example:


case 1:



## break


The break statement terminates the switch execution.



Without break, remaining cases may execute.



## default


The default block executes when no case matches.



# How switch Works


Execution flow:


Start


↓


Evaluate expression


↓


Compare value with cases


↓


Matching case found?


↓


Execute case block


↓


break statement exits switch


↓


Continue program execution



# Simple switch Example


class SwitchExample

{

    public static void main(String[] args)

    {

        int day = 2;


        switch(day)

        {

            case 1:

                System.out.println("Monday");

                break;


            case 2:

                System.out.println("Tuesday");

                break;


            case 3:

                System.out.println("Wednesday");

                break;


            default:

                System.out.println("Invalid Day");

        }

    }

}



Output:


Tuesday



# Importance of break Statement


The break statement stops execution after a matching case is completed.


Example without break:


switch(number)

{

    case 1:

        System.out.println("One");


    case 2:

        System.out.println("Two");

}



If number is 1:


Output:


One

Two



This happens because execution continues to the next cases.



# switch with String Values


Java allows String values in switch statements.



Example:


class StringSwitch

{

    public static void main(String[] args)

    {

        String role = "admin";


        switch(role)

        {

            case "admin":

                System.out.println("Administrator");

                break;


            case "user":

                System.out.println("Normal User");

                break;


            default:

                System.out.println("Unknown Role");

        }

    }

}



Output:


Administrator



# switch Example: Calculator


class Calculator

{

    public static void main(String[] args)

    {

        char operator = '+';


        int a = 10;

        int b = 5;


        switch(operator)

        {

            case '+':

                System.out.println(a + b);

                break;


            case '-':

                System.out.println(a - b);

                break;


            case '*':

                System.out.println(a * b);

                break;


            case '/':

                System.out.println(a / b);

                break;


            default:

                System.out.println("Invalid Operator");

        }

    }

}



Output:


15



# switch Example: Menu System


class MenuExample

{

    public static void main(String[] args)

    {

        int choice = 1;


        switch(choice)

        {

            case 1:

                System.out.println("View Account");

                break;


            case 2:

                System.out.println("Transfer Money");

                break;


            case 3:

                System.out.println("Logout");

                break;


            default:

                System.out.println("Invalid Choice");

        }

    }

}



Output:


View Account



# switch Supported Data Types


Java switch supports:


- byte.
- short.
- int.
- char.
- String.
- enum.



It does not support:


- float.
- double.
- boolean.



# switch vs else-if Ladder



## switch Statement


Best when:


- Comparing one expression with fixed values.
- Multiple choices exist.



Example:


Day selection.



## else-if Ladder


Best when:


- Conditions involve ranges.
- Different logical expressions are required.



Example:


Grade calculation.



# Advantages of switch Statement


## Better Readability


Multiple choices become easier to understand.



## Cleaner Code


Reduces lengthy else-if chains.



## Faster Execution


Java can optimize switch execution.



# Disadvantages of switch Statement


- Cannot handle complex conditions.
- Limited to specific data types.
- Not suitable for range checking.



# Real-World Applications



## Banking Systems


Used for:


- ATM menu options.
- Transaction selection.
- Account services.



## E-Commerce Systems


Used for:


- Payment options.
- Order status.
- User menu selection.



## Student Management Systems


Used for:


- Course selection.
- Menu operations.
- Grade categories.



# Common Mistakes



## Forgetting break


Without break, unwanted cases may execute.



## Duplicate Case Values


Each case value must be unique.



## Using Unsupported Data Types


float and double cannot be used directly in switch.



# Best Practices


Follow these practices:


- Always use break when required.
- Add a default case.
- Keep cases simple.
- Use switch only for fixed values.
- Prefer else-if for complex conditions.



# Key Points


Remember:


- switch selects one block from many choices.
- case defines possible values.
- break stops execution.
- default handles unmatched cases.
- switch improves readability for menu-based programs.


The switch statement provides an efficient way to handle multiple fixed choices in Java programs.

`

};


export default lesson7;