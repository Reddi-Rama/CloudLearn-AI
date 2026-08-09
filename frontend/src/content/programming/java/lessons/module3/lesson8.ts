const lesson8 = {

  id: "lesson8",

  title: "Enhanced switch in Java",

  content: `

# Enhanced switch in Java


## Introduction


Java introduced an improved version of the traditional switch statement to make code shorter, cleaner, and easier to understand.


This improved version is called the enhanced switch.


Enhanced switch was introduced as a preview feature in Java 12 and became a standard feature in Java 14.



It provides:


- Cleaner syntax.
- Less boilerplate code.
- Better readability.
- Support for returning values from switch expressions.



# What is Enhanced switch?


Enhanced switch is an updated form of the traditional switch statement that uses a simpler syntax and supports switch expressions.



Traditional switch:


switch(value)

{

    case 1:

        statement;

        break;

}



Enhanced switch:


switch(value)

{

    case 1 -> statement;

}



The arrow operator removes the need for break statements.



# Need for Enhanced switch


Traditional switch statements have some limitations:


- Required break statements.
- More lines of code.
- Possibility of accidental fall-through.
- Difficult readability with many cases.



Enhanced switch solves these problems by providing a simpler approach.



# Arrow Syntax (->)


The arrow operator is used to define case actions.



Syntax:


case value -> statement;



Example:


class EnhancedSwitchExample

{

    public static void main(String[] args)

    {

        int day = 3;


        switch(day)

        {

            case 1 -> System.out.println("Monday");

            case 2 -> System.out.println("Tuesday");

            case 3 -> System.out.println("Wednesday");

            default -> System.out.println("Invalid Day");

        }

    }

}



Output:


Wednesday



# No Need for break Statement


In traditional switch:


case 1:

    statement;

    break;



In enhanced switch:


case 1 -> statement;



The arrow syntax automatically prevents fall-through.



# Multiple Statements in Enhanced switch


When multiple statements are required, curly braces can be used.



Example:


class Example

{

    public static void main(String[] args)

    {

        int option = 1;


        switch(option)

        {

            case 1 ->

            {

                System.out.println("Account");

                System.out.println("Details");

            }


            case 2 ->

            {

                System.out.println("Payment");

            }


            default ->

            {

                System.out.println("Invalid Option");

            }

        }

    }

}



Output:


Account

Details



# switch Expressions


Enhanced switch can return values.


This feature allows switch to be used as an expression.



Example:


class SwitchExpressionExample

{

    public static void main(String[] args)

    {

        int day = 2;


        String result = switch(day)

        {

            case 1 -> "Monday";

            case 2 -> "Tuesday";

            case 3 -> "Wednesday";

            default -> "Invalid Day";

        };


        System.out.println(result);

    }

}



Output:


Tuesday



# yield Keyword


When a switch case contains multiple statements and needs to return a value, the yield keyword is used.



Example:


class YieldExample

{

    public static void main(String[] args)

    {

        int number = 1;


        String result = switch(number)

        {

            case 1 ->

            {

                String value = "One";

                yield value;

            }


            default -> "Unknown";

        };


        System.out.println(result);

    }

}



Output:


One



# Enhanced switch with String


Enhanced switch supports String values.



Example:


class RoleExample

{

    public static void main(String[] args)

    {

        String role = "admin";


        switch(role)

        {

            case "admin" -> System.out.println("Administrator");

            case "user" -> System.out.println("User");

            default -> System.out.println("Guest");

        }

    }

}



Output:


Administrator



# Enhanced switch Example: Banking System


class BankingExample

{

    public static void main(String[] args)

    {

        int choice = 2;


        String action = switch(choice)

        {

            case 1 -> "Check Balance";

            case 2 -> "Transfer Money";

            case 3 -> "Withdraw Cash";

            default -> "Invalid Choice";

        };


        System.out.println(action);

    }

}



Output:


Transfer Money



# Enhanced switch Example: E-Commerce System


class ShoppingExample

{

    public static void main(String[] args)

    {

        String status = "paid";


        switch(status)

        {

            case "paid" -> System.out.println("Order Confirmed");

            case "pending" -> System.out.println("Payment Pending");

            case "cancelled" -> System.out.println("Order Cancelled");

            default -> System.out.println("Unknown Status");

        }

    }

}



Output:


Order Confirmed



# Traditional switch vs Enhanced switch



## Traditional switch


Features:


- Uses case and break.
- Longer syntax.
- Can accidentally cause fall-through.
- Available in older Java versions.



## Enhanced switch


Features:


- Uses arrow syntax.
- No break required.
- Cleaner code.
- Supports returning values.



# Advantages of Enhanced switch


Provides:


## Better Readability


Code becomes shorter and easier to understand.



## Safer Execution


No accidental fall-through between cases.



## Expression Support


Switch can directly return values.



## Less Code


Reduces unnecessary break statements.



# Limitations


Enhanced switch:


- Requires modern Java versions.
- Cannot replace complex conditional logic.
- Works best with fixed values.



# Real-World Applications



## Banking Systems


Used for:


- ATM menu operations.
- Transaction selections.
- Account services.



## E-Commerce Systems


Used for:


- Order status.
- Payment methods.
- User options.



## Application Development


Used for:


- Menu navigation.
- User choices.
- Configuration handling.



# Best Practices


Follow these practices:


- Use enhanced switch for fixed choices.
- Use meaningful case values.
- Prefer switch expressions when returning values.
- Avoid complex logic inside cases.



# Key Points


Remember:


- Enhanced switch is the modern version of switch.
- It uses the arrow operator.
- break statements are not required.
- It supports switch expressions.
- yield returns values from blocks.
- It improves code readability.


Enhanced switch makes Java decision-making cleaner, safer, and easier to maintain.

`

};


export default lesson8;