const lesson8 = {

  id: "lesson8",

  title: "Method Overloading",

  content: `

# Method Overloading in Java


## Introduction


In Java, sometimes we need multiple methods that perform similar operations but work with different types or numbers of inputs.


For example:


A calculator application needs addition operations:


- Add two numbers.
- Add three numbers.
- Add decimal values.



Instead of creating different method names:


addTwoNumbers()


addThreeNumbers()


addDecimalNumbers()



Java allows us to create multiple methods with the same name but different parameters.



This concept is called method overloading.



# What is Method Overloading?


Method overloading is a feature in Java that allows a class to have multiple methods with the same name but different parameter lists.



The difference can be based on:


- Number of parameters.
- Type of parameters.
- Order of parameters.



Method overloading is also called compile-time polymorphism.



# Syntax of Method Overloading


methodName(parameter list)


Multiple methods can have the same name:



Example:


add(int a, int b)


add(int a, int b, int c)



# Rules of Method Overloading


For methods to be overloaded:


- Method name must be the same.
- Parameters must be different.
- Return type alone cannot differentiate methods.



# Method Overloading Based on Number of Parameters


Example:


class AdditionExample

{

    static int add(int a, int b)

    {

        return a + b;

    }


    static int add(int a, int b, int c)

    {

        return a + b + c;

    }


    public static void main(String[] args)

    {

        System.out.println(add(10,20));


        System.out.println(add(10,20,30));

    }

}



Output:


30

60



Explanation:


Both methods have the same name.


The number of parameters is different.



# Method Overloading Based on Data Type


Example:


class Example

{

    static int calculate(int a, int b)

    {

        return a + b;

    }


    static double calculate(double a, double b)

    {

        return a + b;

    }


    public static void main(String[] args)

    {

        System.out.println(calculate(10,20));


        System.out.println(calculate(10.5,20.5));

    }

}



Output:


30

31.0



# Method Overloading Based on Parameter Order


The order of parameter types can also be different.



Example:


class OrderExample

{

    static void display(int number, String name)

    {

        System.out.println(number + " " + name);

    }


    static void display(String name, int number)

    {

        System.out.println(name + " " + number);

    }


    public static void main(String[] args)

    {

        display(1,"Java");


        display("Java",1);

    }

}



Output:


1 Java

Java 1



# Invalid Method Overloading


Changing only return type is not allowed.



Wrong:


int calculate()

{

}


double calculate()

{

}



Why?


Java cannot decide which method to call.



# Method Overloading Example: Banking System


class BankingSystem

{

    static void deposit(int amount)

    {

        System.out.println("Deposited Cash: " + amount);

    }


    static void deposit(double amount)

    {

        System.out.println("Deposited Online Amount: " + amount);

    }


    public static void main(String[] args)

    {

        deposit(5000);


        deposit(2500.50);

    }

}



Output:


Deposited Cash: 5000

Deposited Online Amount: 2500.5



# Method Overloading Example: E-Commerce System


class ShoppingSystem

{

    static double calculateBill(double price)

    {

        return price;

    }


    static double calculateBill(double price, int quantity)

    {

        return price * quantity;

    }


    public static void main(String[] args)

    {

        System.out.println(calculateBill(500));


        System.out.println(calculateBill(100,5));

    }

}



Output:


500.0

500.0



# Method Overloading Example: Student Management System


class StudentSystem

{

    static void displayResult(String name)

    {

        System.out.println(name);

    }


    static void displayResult(String name, int marks)

    {

        System.out.println(name + " " + marks);

    }


    public static void main(String[] args)

    {

        displayResult("Student");


        displayResult("Student",90);

    }

}



Output:


Student

Student 90



# Advantages of Method Overloading



## Code Readability


Same operation can use the same meaningful method name.



Example:


calculate()



instead of:


calculateInteger()


calculateDouble()



## Code Reusability


Similar operations can be grouped together.



## Easy Maintenance


Program structure becomes cleaner.



## Compile-Time Polymorphism


Method selection happens during compilation.



# Method Overloading and Constructors


Constructors can also be overloaded.



Example:


class Student

{

    Student()

    {

        System.out.println("Default Constructor");

    }


    Student(String name)

    {

        System.out.println(name);

    }

}



# Difference Between Method Overloading and Method Overriding



## Method Overloading


- Same class.
- Same method name.
- Different parameters.
- Compile-time polymorphism.



## Method Overriding


- Parent-child classes.
- Same method signature.
- Runtime polymorphism.



# Common Mistakes



## Changing Only Return Type


Not valid.



## Same Parameters


Methods with identical parameters cannot be overloaded.



## Confusing Overloading and Overriding


They are different concepts.



# Best Practices


Follow these practices:


- Use meaningful common method names.
- Keep overloaded methods related.
- Avoid too many overloaded versions.
- Maintain consistent behavior.



# Real-World Applications



## Banking Systems


Overloading can handle:


deposit(int)


deposit(double)



## E-Commerce Systems


Overloading can handle:


searchProduct(String)


searchProduct(String, String)



## Student Systems


Overloading can handle:


calculateGrade(int)


calculateGrade(int, int)



# Key Points


Remember:


- Method overloading allows multiple methods with the same name.
- Parameters must be different.
- Return type alone cannot overload methods.
- It provides compile-time polymorphism.
- It improves code readability and reuse.


Method overloading allows Java programmers to create flexible methods that perform similar tasks with different inputs.

`

};


export default lesson8;