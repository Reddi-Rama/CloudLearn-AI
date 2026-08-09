const lesson12 = {

  id: "lesson12",

  title: "Encapsulation in Java",

  content: `

# Encapsulation in Java


## Introduction


Encapsulation is one of the four fundamental concepts of Object-Oriented Programming (OOP).



The four main OOP principles are:


- Encapsulation.
- Inheritance.
- Polymorphism.
- Abstraction.



Encapsulation focuses on:


- Protecting data.
- Controlling access.
- Combining data and methods together.



Java uses encapsulation to create secure and maintainable applications.



# What is Encapsulation?


Encapsulation is the process of wrapping data and methods into a single unit called a class.



In simple words:


Encapsulation means hiding the internal data of an object and allowing controlled access through methods.



Example:


A Bank Account object contains:


Data:


- Account number.
- Balance.



Methods:


- Deposit.
- Withdraw.
- Check balance.



The balance should not be directly changed by outside code.



# Why Do We Need Encapsulation?


Without encapsulation:


Any part of the program can directly modify object data.



Example:


account.balance = -5000;



This creates invalid data.



With encapsulation:


Data is protected and accessed through methods.



Example:


account.withdraw(500);



The method can validate the operation before changing data.



# How to Achieve Encapsulation in Java?


Encapsulation is achieved by:



## 1. Declaring Variables as private


Private variables cannot be accessed directly from outside the class.



## 2. Providing Public Getter and Setter Methods


Getter methods read data.


Setter methods modify data.



# Simple Encapsulation Example


class Student

{

    private int marks;


    public void setMarks(int marks)

    {

        this.marks = marks;

    }


    public int getMarks()

    {

        return marks;

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.setMarks(90);


        System.out.println(student.getMarks());

    }

}



Output:


90



Explanation:


marks is private.


Access is controlled through methods.



# Private Variables in Encapsulation


Private variables:


- Cannot be accessed directly.
- Can only be accessed inside the class.
- Protect object data.



Example:


class BankAccount

{

    private double balance;

}



Direct access:


account.balance = 5000;



is not allowed.



# Getter Methods


A getter method is used to read private data.



Syntax:


public dataType getVariableName()

{

    return variable;

}



Example:


public int getMarks()

{

    return marks;

}



# Setter Methods


A setter method is used to modify private data.



Syntax:


public void setVariableName(dataType value)

{

    variable = value;

}



Example:


public void setMarks(int marks)

{

    this.marks = marks;

}



# Encapsulation Example with Validation


class BankAccount

{

    private double balance;


    public void deposit(double amount)

    {

        if(amount > 0)

        {

            balance = balance + amount;

        }

    }


    public double getBalance()

    {

        return balance;

    }

}



Explanation:


The balance cannot be changed directly.


The deposit method controls how values are updated.



# Encapsulation Example: Banking System


class Account

{

    private double balance;


    public void deposit(double amount)

    {

        balance += amount;

    }


    public void withdraw(double amount)

    {

        if(amount <= balance)

        {

            balance -= amount;

        }

    }


    public double getBalance()

    {

        return balance;

    }

}



Benefits:


- Protects account balance.
- Prevents invalid transactions.
- Controls access.



# Encapsulation Example: E-Commerce System


class Product

{

    private double price;


    public void setPrice(double price)

    {

        if(price > 0)

        {

            this.price = price;

        }

    }


    public double getPrice()

    {

        return price;

    }

}



Benefits:


- Prevents negative prices.
- Maintains valid product data.



# Encapsulation Example: Student Management System


class Student

{

    private int marks;


    public void setMarks(int marks)

    {

        if(marks >= 0 && marks <= 100)

        {

            this.marks = marks;

        }

    }


    public int getMarks()

    {

        return marks;

    }

}



Benefits:


- Protects marks data.
- Allows validation.



# Advantages of Encapsulation



## Data Hiding


Sensitive information is protected from direct access.



## Security


Only authorized methods can modify data.



## Flexibility


Internal implementation can change without affecting users.



## Maintainability


Code becomes easier to manage.



## Better Control


Developers control how data is accessed.



# Encapsulation and Access Modifiers


Encapsulation commonly uses:


private:


For hiding data.



public:


For providing controlled access.



Example:


private int balance;


public int getBalance()



# Encapsulation vs Data Hiding



Encapsulation:


Wrapping data and methods together.



Data Hiding:


Restricting direct access to data.



Encapsulation uses data hiding to protect objects.



# Real-World Applications



## Banking Systems


Encapsulated data:


- Account balance.
- PIN.
- Transaction details.



Access through:


- Deposit method.
- Withdraw method.
- Balance checking method.



## E-Commerce Systems


Encapsulated data:


- Product price.
- Customer details.
- Payment information.



Access through controlled methods.



## Student Systems


Encapsulated data:


- Marks.
- Personal information.
- Grades.



Access through getter and setter methods.



# Common Mistakes



## Making Variables Public


This removes data protection.



## Creating Getters and Setters Without Validation


Invalid data can enter the system.



## Using Encapsulation Incorrectly


Not every variable requires unnecessary methods.



# Best Practices


Follow these practices:


- Keep fields private.
- Provide meaningful getter and setter methods.
- Validate data before updating.
- Expose only required operations.
- Protect sensitive information.



# Key Points


Remember:


- Encapsulation wraps data and methods together.
- Private variables provide data protection.
- Getters read data.
- Setters modify data.
- Encapsulation improves security and maintainability.
- It is one of the four pillars of OOP.



# Summary


Encapsulation is a core Java OOP concept that protects object data and provides controlled access.


By combining private variables with public methods, developers can create secure, reliable, and maintainable applications.

`

};


export default lesson12;