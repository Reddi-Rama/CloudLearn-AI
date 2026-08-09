const lesson5 = {

  id: "lesson5",

  title: "Pass by Value in Java",

  content: `

# Pass by Value in Java


## Introduction


When a method is called, data needs to be passed from the calling method to the called method.


Java uses a mechanism called pass by value to transfer data between methods.



Understanding pass by value is important because it explains:


- How variables are passed to methods.
- Why changes inside methods do not affect original variables.
- How Java handles primitive and reference data.



# What is Pass by Value?


Pass by value means that a copy of the actual value is passed to the method.


The method receives a duplicate value, not the original variable.



Any changes made to the copied value inside the method do not affect the original variable.



# How Pass by Value Works


Execution process:


Step 1:


A variable is created with a value.



Step 2:


The method is called.



Step 3:


A copy of the variable value is created.



Step 4:


The copied value is passed to the method.



Step 5:


Changes inside the method affect only the copy.



# Pass by Value with Primitive Data Types


Primitive data types store actual values.


Examples:


- int
- float
- double
- char
- boolean



When passed to a method, their values are copied.



Example:


class PassByValueExample

{

    static void changeValue(int number)

    {

        number = 100;

    }


    public static void main(String[] args)

    {

        int value = 50;


        changeValue(value);


        System.out.println(value);

    }

}



Output:


50



Explanation:


The method receives a copy of value.


Changing number inside the method does not change value.



# Memory Representation


Before method call:


value → 50



During method call:


value → 50


number → 50



The variable number is a separate copy.



# Pass by Value with Objects


Java does not pass objects directly.


Java passes the value of the object reference.



This means:


- The reference is copied.
- Both references point to the same object.
- Object data can be modified through the copied reference.



Example:


class Student

{

    int marks;

}



class ObjectExample

{

    static void update(Student s)

    {

        s.marks = 90;

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.marks = 50;


        update(student);


        System.out.println(student.marks);

    }

}



Output:


90



Explanation:


The reference is copied, but both references point to the same object.



# Changing Object Reference


Changing the reference itself does not affect the original reference.



Example:


class Example

{

    static void change(Student s)

    {

        s = new Student();

        s.marks = 100;

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.marks = 50;


        change(student);


        System.out.println(student.marks);

    }

}



Output:


50



Explanation:


The method receives a copy of the reference.


Changing that copied reference does not change the original reference.



# Primitive vs Object Passing



## Primitive Values


Example:


int number = 10;



Passed:


Copy of value.



Original variable changes?


No.



## Objects


Example:


Student obj;



Passed:


Copy of reference.



Object data changes?


Yes, if modified through the reference.



# Pass by Value Example: Banking System


class BankingSystem

{

    static void updateBalance(double balance)

    {

        balance = balance + 1000;

    }


    public static void main(String[] args)

    {

        double accountBalance = 5000;


        updateBalance(accountBalance);


        System.out.println(accountBalance);

    }

}



Output:


5000.0



Explanation:


Only a copy of balance is modified.



# Pass by Value Example: Student Management System


class StudentSystem

{

    static void updateMarks(int marks)

    {

        marks = 100;

    }


    public static void main(String[] args)

    {

        int studentMarks = 70;


        updateMarks(studentMarks);


        System.out.println(studentMarks);

    }

}



Output:


70



# Pass by Value Example: E-Commerce System


class ShoppingSystem

{

    static void updatePrice(double price)

    {

        price = price - 100;

    }


    public static void main(String[] args)

    {

        double productPrice = 1000;


        updatePrice(productPrice);


        System.out.println(productPrice);

    }

}



Output:


1000.0



# Common Misunderstanding


Many programmers say:


"Java is pass by reference for objects."



This is incorrect.



Java is always pass by value.



For objects:


The value being passed is the reference.



# Advantages of Pass by Value


Provides:


## Data Safety


Original variables cannot be changed accidentally.



## Predictable Behavior


Methods work with their own copies.



## Easier Debugging


Changes are controlled inside methods.



# Common Mistakes



## Assuming Primitive Values Change


Changes inside methods do not affect original variables.



## Confusing Reference Passing


Java passes object references by value, not objects directly.



## Modifying Objects Without Understanding References


Object data can change through copied references.



# Best Practices


Follow these practices:


- Understand variable copying.
- Avoid unnecessary object modifications.
- Use return values when updating primitive data.
- Write clear method logic.



# Key Points


Remember:


- Java always uses pass by value.
- Primitive values are copied.
- Object references are copied.
- Changing primitive copies does not affect originals.
- Object data can change through copied references.
- Changing a copied reference does not affect the original reference.


Understanding pass by value helps you correctly predict how data behaves when passed between Java methods.

`

};


export default lesson5;