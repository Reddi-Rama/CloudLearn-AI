const lesson4 = {

  id: "lesson4",

  title: "Method Parameters and Arguments",

  content: `

# Method Parameters and Arguments in Java


## Introduction


Methods become more powerful when they can receive data from outside.


For example:


A calculator method needs numbers to perform addition.


A banking method needs an amount to withdraw.


A student method needs marks to calculate grades.



To provide data to methods, Java uses parameters and arguments.



# What are Parameters?


Parameters are variables declared inside the method definition that receive values when the method is called.



Parameters act as input variables for a method.



Syntax:


returnType methodName(dataType parameterName)

{

    statements;

}



Example:


static void greet(String name)

{

    System.out.println(name);

}



Here:


name is a parameter.



# What are Arguments?


Arguments are the actual values passed to a method when calling it.



Example:


greet("Java");



Here:


"Java" is an argument.



# Difference Between Parameters and Arguments



## Parameters


- Declared during method creation.
- Act as placeholders for values.
- Exist inside method declaration.



Example:


void display(String message)



message is a parameter.



## Arguments


- Passed during method calling.
- Provide actual values.
- Exist during method invocation.



Example:


display("Hello");



"Hello" is an argument.



# Simple Example


class ParameterExample

{

    static void display(String name)

    {

        System.out.println("Hello " + name);

    }


    public static void main(String[] args)

    {

        display("Java");

    }

}



Output:


Hello Java



Explanation:


name receives the value "Java".



# Method with Multiple Parameters


A method can have multiple parameters.



Example:


class MultipleParameterExample

{

    static void add(int a, int b)

    {

        int sum = a + b;


        System.out.println(sum);

    }


    public static void main(String[] args)

    {

        add(10, 20);

    }

}



Output:


30



Explanation:


a receives 10.


b receives 20.



# Parameter Types in Java


Parameters can be of any valid Java data type.



Examples:


## Integer Parameter


void calculate(int value)



## Decimal Parameter


void calculate(double price)



## String Parameter


void display(String name)



## Boolean Parameter


void check(boolean status)



# Method with Return Value and Parameters


Example:


class ReturnParameterExample

{

    static int multiply(int a, int b)

    {

        return a * b;

    }


    public static void main(String[] args)

    {

        int result = multiply(5, 4);


        System.out.println(result);

    }

}



Output:


20



# Parameter Passing Example: Banking System


class BankingSystem

{

    static void withdraw(double amount)

    {

        System.out.println("Withdraw Amount: " + amount);

    }


    public static void main(String[] args)

    {

        withdraw(5000);

    }

}



Output:


Withdraw Amount: 5000



Explanation:


The amount value is passed as an argument.



# Parameter Passing Example: E-Commerce System


class ShoppingSystem

{

    static double calculateBill(double price, int quantity)

    {

        return price * quantity;

    }


    public static void main(String[] args)

    {

        double bill = calculateBill(250, 4);


        System.out.println(bill);

    }

}



Output:


1000.0



# Parameter Passing Example: Student Management System


class StudentSystem

{

    static void displayMarks(String name, int marks)

    {

        System.out.println(name);

        System.out.println(marks);

    }


    public static void main(String[] args)

    {

        displayMarks("Student", 90);

    }

}



Output:


Student

90



# Number of Arguments


The number of arguments must match the number of parameters.



Correct:


add(10,20);



Method:


add(int a, int b)



Incorrect:


add(10);



Because one argument is missing.



# Order of Arguments


Arguments are assigned to parameters according to their order.



Example:


calculate(100, 5);



Method:


calculate(double price, int quantity)



100 goes to price.


5 goes to quantity.



# Type Matching


Argument types should match parameter types.



Example:


static void display(int number)



Correct:


display(10);



Incorrect:


display("10");



# Passing Variables as Arguments


Instead of direct values, variables can also be passed.



Example:


class Example

{

    static void display(int value)

    {

        System.out.println(value);

    }


    public static void main(String[] args)

    {

        int number = 50;


        display(number);

    }

}



Output:


50



# Advantages of Parameters and Arguments


## Reusability


Methods can work with different data values.



## Flexibility


The same method can perform operations on different inputs.



## Better Organization


Data processing becomes easier.



## Reduced Code Duplication


Same logic can be reused.



# Common Mistakes



## Wrong Number of Arguments


Method parameters and arguments must match.



## Wrong Data Type


Argument types must be compatible.



## Changing Parameter Names Unnecessarily


Use meaningful names for better understanding.



# Best Practices


Follow these practices:


- Use meaningful parameter names.
- Keep the number of parameters reasonable.
- Pass only required data.
- Maintain correct data types.
- Avoid unnecessary parameters.



# Real-World Applications



## Banking Systems


Parameters:


account number


amount


transaction type



## E-Commerce Systems


Parameters:


product name


price


quantity



## Student Systems


Parameters:


student name


marks


course details



# Key Points


Remember:


- Parameters receive data inside methods.
- Arguments provide values during method calls.
- Parameters are placeholders.
- Arguments are actual values.
- Number and type of arguments must match parameters.
- Parameters make methods reusable and flexible.


Method parameters and arguments allow Java methods to communicate with other parts of a program and process dynamic data.

`

};


export default lesson4;