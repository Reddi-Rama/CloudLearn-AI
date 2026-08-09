const lesson3 = {

  id: "lesson3",

  title: "Calling (Invoking) Methods",

  content: `

# Calling (Invoking) Methods in Java


## Introduction


Creating a method only defines what the method should do.


The code inside a method does not execute automatically.


To execute a method, we need to call or invoke it.



Method calling means requesting Java to execute the instructions inside a particular method.



Example:


A method calculateBill() may be created to calculate a shopping bill.


The calculation happens only when calculateBill() is called.



# What is Method Calling?


Method calling is the process of executing a method by using its name followed by parentheses.



Syntax:


methodName();



Example:


display();



When Java sees this statement, it transfers control to the method, executes the code, and returns back.



# Creating and Calling a Method


Example:


class MethodCallExample

{

    static void display()

    {

        System.out.println("Hello Java");

    }


    public static void main(String[] args)

    {

        display();

    }

}



Output:


Hello Java



Explanation:


display() method is created first.


Inside main(), display() is called.


The statements inside display() execute.



# Method Calling Flow


The execution process is:


Step 1:


Program execution starts from main().



Step 2:


Java finds the method call.



Step 3:


Control moves to the called method.



Step 4:


Method statements execute.



Step 5:


Control returns back to the calling method.



# Calling Static Methods


Static methods belong to the class.


They can be called directly using the method name.



Example:


class StaticMethodExample

{

    static void message()

    {

        System.out.println("Static Method Called");

    }


    public static void main(String[] args)

    {

        message();

    }

}



Output:


Static Method Called



# Calling Non-Static Methods


Non-static methods belong to objects.


An object must be created before calling them.



Example:


class NonStaticExample

{

    void display()

    {

        System.out.println("Non Static Method Called");

    }


    public static void main(String[] args)

    {

        NonStaticExample obj = new NonStaticExample();


        obj.display();

    }

}



Output:


Non Static Method Called



# Calling Methods with Parameters


Methods can receive values during calling.



Example:


class ParameterCallExample

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



Explanation:


The value "Java" is passed as an argument to the method.



# Calling Methods with Return Values


A method that returns a value can be called and stored in a variable.



Example:


class ReturnCallExample

{

    static int add()

    {

        return 10 + 20;

    }


    public static void main(String[] args)

    {

        int result = add();


        System.out.println(result);

    }

}



Output:


30



# Calling Multiple Methods


A program can call multiple methods.



Example:


class MultipleMethodExample

{

    static void login()

    {

        System.out.println("Login Successful");

    }


    static void logout()

    {

        System.out.println("Logout Successful");

    }


    public static void main(String[] args)

    {

        login();

        logout();

    }

}



Output:


Login Successful

Logout Successful



# Method Calling Example: Banking System


class BankingSystem

{

    static void checkBalance()

    {

        System.out.println("Balance Checked");

    }


    static void transferMoney()

    {

        System.out.println("Money Transferred");

    }


    public static void main(String[] args)

    {

        checkBalance();

        transferMoney();

    }

}



Output:


Balance Checked

Money Transferred



Explanation:


Each banking operation is separated into different methods.



# Method Calling Example: E-Commerce System


class ShoppingSystem

{

    static void addProduct()

    {

        System.out.println("Product Added");

    }


    static void placeOrder()

    {

        System.out.println("Order Placed");

    }


    public static void main(String[] args)

    {

        addProduct();

        placeOrder();

    }

}



Output:


Product Added

Order Placed



# Method Calling Example: Student Management System


class StudentSystem

{

    static void calculateResult()

    {

        System.out.println("Result Generated");

    }


    public static void main(String[] args)

    {

        calculateResult();

    }

}



Output:


Result Generated



# Calling Methods from Another Method


One method can call another method.



Example:


class Example

{

    static void first()

    {

        second();

    }


    static void second()

    {

        System.out.println("Second Method");

    }


    public static void main(String[] args)

    {

        first();

    }

}



Output:


Second Method



# Method Call Types


Java supports:


## Direct Method Call


Calling a method using its name.



Example:


display();



## Object Method Call


Calling a non-static method using an object.



Example:


object.display();



## Class Method Call


Calling a static method using class name.



Example:


ClassName.methodName();



# Common Mistakes



## Calling Method Without Creating Object


Non-static methods require objects.



## Incorrect Arguments


The number and type of arguments must match parameters.



## Forgetting Return Value


Returned values should be stored or used properly.



# Best Practices


Follow these practices:


- Call methods with meaningful logic.
- Avoid unnecessary method calls.
- Pass correct arguments.
- Use objects correctly.
- Keep method responsibilities clear.



# Key Points


Remember:


- A method executes only when it is called.
- Static methods can be called directly.
- Non-static methods require objects.
- Arguments provide values to methods.
- Returned values can be stored and reused.


Method calling allows Java programs to execute reusable blocks of code and build organized, modular applications.

`

};


export default lesson3;