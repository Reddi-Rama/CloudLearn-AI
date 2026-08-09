const lesson2 = {

  id: "lesson2",

  title: "Method Declaration and Syntax",

  content: `

# Method Declaration and Syntax in Java


## Introduction


In Java, before using a method, we need to define its structure.


The process of creating a method with its name, return type, parameters, and body is called method declaration.


A proper method declaration tells Java:


- What the method does.
- What type of value it returns.
- What information it requires.
- How it should execute.



# What is Method Declaration?


Method declaration is the process of defining a method by specifying:


- Access modifier.
- Return type.
- Method name.
- Parameters.
- Method body.



General syntax:


accessModifier returnType methodName(parameters)

{

    statements;

}



# Components of Method Declaration



## 1. Access Modifier


Access modifiers define the visibility of a method.



Common access modifiers:


public


private


protected


default



Example:


public void display()



Meaning:


The method can be accessed from anywhere.



# 2. Return Type


The return type specifies what value a method returns after execution.



Examples:


int


double


String


boolean


void



Example:


int calculate()



If a method does not return any value, we use void.



Example:


void display()



# 3. Method Name


The method name identifies the method.


Rules for method names:


- Should be meaningful.
- Cannot contain spaces.
- Cannot start with a number.
- Should follow camelCase convention.



Examples:


calculateTotal()


checkBalance()


displayResult()



# 4. Parameters


Parameters are variables that receive values when a method is called.



Example:


void add(int a, int b)



Here:


a and b are parameters.



# 5. Method Body


The method body contains the statements that execute when the method is called.



Example:


{

    System.out.println("Hello Java");

}



# Complete Method Example


class MethodExample

{

    public static void display()

    {

        System.out.println("Java Programming");

    }


    public static void main(String[] args)

    {

        display();

    }

}



Output:


Java Programming



# Method Declaration with Return Value


Example:


class ReturnExample

{

    public static int add()

    {

        int a = 10;

        int b = 20;


        return a + b;

    }


    public static void main(String[] args)

    {

        int result = add();


        System.out.println(result);

    }

}



Output:


30



Explanation:


The method returns an integer value using the return statement.



# Method Declaration with Parameters


Example:


class ParameterExample

{

    public static void greet(String name)

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


The value "Java" is passed as an argument to the parameter name.



# Static Method Declaration


A static method belongs to the class instead of an object.



Example:


class StaticExample

{

    static void message()

    {

        System.out.println("Static Method");

    }


    public static void main(String[] args)

    {

        message();

    }

}



Output:


Static Method



# Non-Static Method Declaration


A non-static method belongs to an object.


Example:


class Example

{

    void display()

    {

        System.out.println("Non Static Method");

    }


    public static void main(String[] args)

    {

        Example obj = new Example();


        obj.display();

    }

}



Output:


Non Static Method



# Method Declaration Example: Banking System


class BankingSystem

{

    public void withdraw(double amount)

    {

        System.out.println("Withdraw Amount: " + amount);

    }


    public static void main(String[] args)

    {

        BankingSystem bank = new BankingSystem();


        bank.withdraw(5000);

    }

}



Output:


Withdraw Amount: 5000



# Method Declaration Example: E-Commerce System


class ShoppingSystem

{

    public double calculateBill(double price, int quantity)

    {

        return price * quantity;

    }


    public static void main(String[] args)

    {

        ShoppingSystem shop = new ShoppingSystem();


        double total = shop.calculateBill(100, 3);


        System.out.println(total);

    }

}



Output:


300.0



# Method Declaration Example: Student Management System


class StudentSystem

{

    public String getGrade(int marks)

    {

        if(marks >= 90)

        {

            return "A";

        }


        return "B";

    }


    public static void main(String[] args)

    {

        StudentSystem student = new StudentSystem();


        System.out.println(student.getGrade(95));

    }

}



Output:


A



# Rules for Declaring Methods


Follow these rules:


- A method must have a return type.
- Method name must follow naming conventions.
- Parameters must have data types.
- Method body must be enclosed in braces.
- A method cannot be declared inside another method.



# Common Mistakes



## Missing Return Type


Wrong:


calculate()



Correct:


void calculate()



## Invalid Method Name


Wrong:


1method()



Correct:


method1()



## Missing Return Statement


If a method has a return type, it must return a value.



# Best Practices


Follow these practices:


- Use meaningful method names.
- Keep methods small.
- Choose correct return types.
- Avoid unnecessary parameters.
- Write readable method logic.



# Key Points


Remember:


- Method declaration defines the structure of a method.
- Return type specifies the output type.
- Parameters receive input values.
- Method name identifies the method.
- Method body contains execution logic.


Understanding method declaration is the first step toward creating reusable and professional Java programs.

`

};


export default lesson2;