const lesson6 = {

  id: "lesson6",

  title: "return Statement and Returning Values",

  content: `

# return Statement and Returning Values in Java


## Introduction


Methods are used to perform specific tasks in Java.


Sometimes a method needs to send a result back to the place where it was called.


For example:


- A calculator method returns the sum of two numbers.
- A banking method returns account balance.
- A shopping method returns the total bill amount.



Java provides the return statement to send values back from a method.



# What is a return Statement?


The return statement is used to:


- Return a value from a method.
- Terminate method execution.
- Transfer control back to the calling method.



Syntax:


return value;



Example:


return total;



# Why Do We Need return?


Without return values:


- Methods cannot provide results.
- Calculations cannot be reused.
- Data cannot be transferred back to the caller.



With return values:


- Methods become reusable.
- Results can be stored.
- Complex operations become easier.



# Return Type and return Statement


The return type of a method defines what type of value the method sends back.



Example:


static int add()

{

    return 10 + 20;

}



Here:


int is the return type.


The method returns an integer value.



# Method with return Value


Example:


class ReturnExample

{

    static int getNumber()

    {

        return 100;

    }


    public static void main(String[] args)

    {

        int value = getNumber();


        System.out.println(value);

    }

}



Output:


100



Explanation:


The getNumber() method returns 100.


The returned value is stored in the variable value.



# Returning Different Data Types


A method can return different types of values.



## Returning int


Example:


static int getAge()

{

    return 20;

}



## Returning double


Example:


static double getPrice()

{

    return 500.50;

}



## Returning String


Example:


static String getName()

{

    return "Java";

}



## Returning boolean


Example:


static boolean check()

{

    return true;

}



# return Statement in Conditional Statements


A method can return values based on conditions.



Example:


class ConditionReturnExample

{

    static String checkResult(int marks)

    {

        if(marks >= 35)

        {

            return "Pass";

        }


        return "Fail";

    }


    public static void main(String[] args)

    {

        System.out.println(checkResult(80));

    }

}



Output:


Pass



# return Without Value


A return statement without a value is used in void methods.



Example:


class VoidReturnExample

{

    static void display()

    {

        System.out.println("Hello");


        return;

    }


    public static void main(String[] args)

    {

        display();

    }

}



Output:


Hello



Explanation:


The return statement stops method execution.



# Returning Objects from Methods


Methods can return objects.



Example:


class Student

{

    String name;

}



class ObjectReturnExample

{

    static Student createStudent()

    {

        Student s = new Student();


        s.name = "Java";


        return s;

    }


    public static void main(String[] args)

    {

        Student student = createStudent();


        System.out.println(student.name);

    }

}



Output:


Java



# Returning Values Example: Banking System


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



# Returning Values Example: E-Commerce System


class ShoppingSystem

{

    static double calculateBill(double price, int quantity)

    {

        return price * quantity;

    }


    public static void main(String[] args)

    {

        double total = calculateBill(200, 5);


        System.out.println(total);

    }

}



Output:


1000.0



# Returning Values Example: Student Management System


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



# Rules of return Statement


Follow these rules:


- Return value type must match method return type.
- A non-void method must return a value.
- return must be the last executed statement in a path.
- A void method can use return without a value.



# Difference Between print and return



## print()


- Displays output on screen.
- Cannot send data back.



Example:


System.out.println(result);



## return


- Sends data back to the caller.
- Can be stored and reused.



Example:


int value = calculate();



# Advantages of return Values


Provides:


## Code Reusability


Returned results can be used multiple times.



## Better Data Flow


Methods can communicate with other parts of the program.



## Modular Programming


Each method can perform one task and return the result.



# Common Mistakes



## Missing return Statement


Wrong:


int calculate()

{

}



Correct:


int calculate()

{

    return 10;

}



## Wrong Return Type


Wrong:


int method()

{

    return "Java";

}



Correct:


String method()

{

    return "Java";

}



## Unreachable Code After return


Example:


return value;


System.out.println("Hello");



The statement after return will not execute.



# Best Practices


Follow these practices:


- Use meaningful return values.
- Return only necessary data.
- Keep methods focused.
- Avoid unnecessary printing inside methods.
- Use return values for calculations.



# Real-World Applications


return statements are used in:


## Banking Systems


Returning:


- Account balance.
- Transaction status.
- Loan amount.



## E-Commerce Systems


Returning:


- Product price.
- Discount amount.
- Total bill.



## Student Systems


Returning:


- Grades.
- Results.
- Performance status.



# Key Points


Remember:


- return sends a value back from a method.
- Return type defines the value type.
- void methods do not return values.
- return ends method execution.
- Returned values can be stored and reused.


The return statement allows Java methods to communicate results and build powerful, reusable applications.

`

};


export default lesson6;