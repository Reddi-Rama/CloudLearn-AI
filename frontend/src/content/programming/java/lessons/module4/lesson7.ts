const lesson7 = {

  id: "lesson7",

  title: "Void Methods vs Non-Void Methods",

  content: `

# Void Methods vs Non-Void Methods in Java


## Introduction


Methods in Java perform different types of tasks.


Some methods perform an operation and do not return any value.


Some methods perform an operation and return a result back to the caller.



Based on whether a method returns a value or not, Java methods are classified into:


1. Void Methods


2. Non-Void Methods



# Void Methods in Java


## What is a Void Method?


A void method is a method that does not return any value after execution.



The keyword void is used as the return type.



Syntax:


returnType methodName()

{

    statements;

}



Example:


void display()

{

    System.out.println("Hello Java");

}



Here:


void indicates that the method returns nothing.



# Simple Void Method Example


class VoidExample

{

    static void message()

    {

        System.out.println("Learning Methods");

    }


    public static void main(String[] args)

    {

        message();

    }

}



Output:


Learning Methods



Explanation:


The method performs a task but does not send any value back.



# Void Method with Parameters


Void methods can accept parameters.



Example:


class Example

{

    static void greet(String name)

    {

        System.out.println("Hello " + name);

    }


    public static void main(String[] args)

    {

        greet("Java");

    }

}



Output:


Hello Java



# Void Method Example: Banking System


class BankingSystem

{

    static void deposit(double amount)

    {

        System.out.println("Deposited Amount: " + amount);

    }


    public static void main(String[] args)

    {

        deposit(5000);

    }

}



Output:


Deposited Amount: 5000



Explanation:


The method displays the transaction but does not return any value.



# Void Method Example: E-Commerce System


class ShoppingSystem

{

    static void placeOrder()

    {

        System.out.println("Order Placed Successfully");

    }


    public static void main(String[] args)

    {

        placeOrder();

    }

}



Output:


Order Placed Successfully



# Non-Void Methods in Java


## What is a Non-Void Method?


A non-void method is a method that returns a value after execution.



A non-void method must specify a return type.



Examples:


int


double


String


boolean



# Syntax of Non-Void Method


returnType methodName()

{

    return value;

}



Example:


int calculate()

{

    return 100;

}



# Simple Non-Void Method Example


class NonVoidExample

{

    static int getNumber()

    {

        return 50;

    }


    public static void main(String[] args)

    {

        int value = getNumber();


        System.out.println(value);

    }

}



Output:


50



Explanation:


The method returns an integer value which is stored in a variable.



# Non-Void Method with Parameters


Example:


class Example

{

    static int add(int a, int b)

    {

        return a + b;

    }


    public static void main(String[] args)

    {

        int result = add(10,20);


        System.out.println(result);

    }

}



Output:


30



# Non-Void Method Example: Banking System


class BankingSystem

{

    static double getBalance()

    {

        return 25000;

    }


    public static void main(String[] args)

    {

        double balance = getBalance();


        System.out.println(balance);

    }

}



Output:


25000.0



# Non-Void Method Example: E-Commerce System


class ShoppingSystem

{

    static double calculateBill(double price, int quantity)

    {

        return price * quantity;

    }


    public static void main(String[] args)

    {

        double total = calculateBill(200,5);


        System.out.println(total);

    }

}



Output:


1000.0



# Non-Void Method Example: Student Management System


class StudentSystem

{

    static String getGrade(int marks)

    {

        if(marks >= 90)

        {

            return "A";

        }


        return "B";

    }


    public static void main(String[] args)

    {

        String grade = getGrade(95);


        System.out.println(grade);

    }

}



Output:


A



# Difference Between Void and Non-Void Methods



## Void Method


Features:


- Does not return a value.
- Uses the keyword void.
- Mainly performs actions.
- Cannot be assigned to a variable.



Example:


void display()



Usage:


display();



## Non-Void Method


Features:


- Returns a value.
- Uses a specific return type.
- Result can be stored and reused.



Example:


int calculate()



Usage:


int result = calculate();



# Comparison Example



Void method:


static void printSum(int a, int b)

{

    System.out.println(a + b);

}



Non-void method:


static int getSum(int a, int b)

{

    return a + b;

}



Both perform addition, but their output handling is different.



# When to Use Void Methods?


Use void methods when:


- Only an action needs to be performed.
- No result is required.
- Output is directly displayed.



Examples:


printReport()


sendEmail()


displayMenu()



# When to Use Non-Void Methods?


Use non-void methods when:


- A result is needed.
- Data must be reused.
- Calculation results are required.



Examples:


calculateTotal()


getBalance()


findMaximum()



# Advantages of Void Methods


Provides:


## Simple Execution


Useful for performing direct actions.



## Better Organization


Separates tasks into methods.



## Code Reuse


Same action can be performed multiple times.



# Advantages of Non-Void Methods


Provides:


## Result Reusability


Returned values can be used anywhere.



## Better Data Processing


Calculations become modular.



## Improved Flexibility


Methods can provide information to other parts of the program.



# Common Mistakes



## Forgetting Return Statement


A non-void method must return a value.



## Wrong Return Type


Return value must match the declared type.



## Using Void When Result is Required


Choose the correct method type based on the requirement.



# Best Practices


Follow these practices:


- Use void for actions.
- Use non-void methods for calculations and results.
- Choose meaningful return types.
- Keep methods focused on one responsibility.



# Real-World Applications



## Banking Applications


Void methods:


deposit()


withdraw()



Non-void methods:


getBalance()


calculateInterest()



## E-Commerce Applications


Void methods:


placeOrder()


cancelOrder()



Non-void methods:


calculateBill()


getDiscount()



## Student Applications


Void methods:


displayResult()



Non-void methods:


calculateGrade()



# Key Points


Remember:


- Void methods do not return values.
- Non-void methods return values.
- Void uses the keyword void.
- Non-void methods require return statements.
- Choose the method type based on the task requirement.


Understanding the difference between void and non-void methods helps you design clean and efficient Java programs.

`

};


export default lesson7;