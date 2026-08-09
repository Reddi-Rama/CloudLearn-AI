const lesson11 = {

  id: "lesson11",

  title: "Access Modifiers in Java",

  content: `

# Access Modifiers in Java


## Introduction


In Java, access control is an important concept used to control the visibility and accessibility of classes, variables, methods, and constructors.



Access modifiers define:


- Who can access a class member.
- Where a variable or method can be used.
- How data can be protected.



Java provides four types of access modifiers:


1. public


2. private


3. protected


4. default



These modifiers help implement data security and encapsulation.



# What are Access Modifiers?


Access modifiers are keywords in Java that control the access level of class members.



They can be applied to:


- Classes.
- Variables.
- Methods.
- Constructors.



Example:


public class Student

{

}



Here:


public controls the accessibility of the class.



# Types of Access Modifiers


Java provides four access levels:



## 1. public


## 2. private


## 3. protected


## 4. default (no keyword)



# 1. public Access Modifier


The public modifier provides the highest level of accessibility.



A public member can be accessed from anywhere.



Syntax:


public dataType variableName;


public returnType methodName()



Example:


public class Student

{

    public String name;


    public void display()

    {

        System.out.println(name);

    }

}



The name variable and display method can be accessed from any class.



# public Example


class Student

{

    public String name;


    public void display()

    {

        System.out.println(name);

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        student.name = "Alex";


        student.display();

    }

}



Output:


Alex



# 2. private Access Modifier


The private modifier provides the highest level of data protection.



A private member can only be accessed inside the same class.



Syntax:


private dataType variableName;



Example:


class Student

{

    private int marks;


    private void display()

    {

        System.out.println(marks);

    }

}



The marks variable cannot be accessed directly outside the class.



# Accessing Private Data


Private data is usually accessed using:


- Getter methods.
- Setter methods.



Example:


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

}



Here:


Private variable is protected.


Methods provide controlled access.



# 3. protected Access Modifier


The protected modifier allows access:


- Within the same package.
- Through inheritance outside the package.



Syntax:


protected dataType variableName;



Example:


class Parent

{

    protected int value;

}



A child class can access protected members.



# Protected Example


class Animal

{

    protected String name;

}



class Dog extends Animal

{

    void display()

    {

        System.out.println(name);

    }

}



The child class can access the protected variable.



# 4. Default Access Modifier


When no access modifier is specified, Java uses default access.



Default members are accessible only within the same package.



Example:


class Student

{

    String name;


    void display()

    {

        System.out.println(name);

    }

}



Here:


name and display() have default access.



# Access Modifier Visibility



public:


Accessible everywhere.



private:


Accessible only inside the same class.



protected:


Accessible in same package and subclasses.



default:


Accessible only inside the same package.



# Access Modifier Example: Banking System


class BankAccount

{

    private double balance;


    public void deposit(double amount)

    {

        balance += amount;

    }


    public double getBalance()

    {

        return balance;

    }

}



Explanation:


balance is private to protect account data.


Methods provide controlled access.



# Access Modifier Example: E-Commerce System


class Product

{

    private double price;


    public void setPrice(double price)

    {

        this.price = price;

    }


    public double getPrice()

    {

        return price;

    }

}



Price cannot be changed directly.



# Access Modifier Example: Student Management System


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

}



# Access Modifiers and Classes


For top-level classes, Java allows only:


- public.
- default.



Example:


public class Student

{

}



or


class Student

{

}



private and protected cannot be used for top-level classes.



# Access Modifiers and Encapsulation


Access modifiers support encapsulation.



Example:


private data


+


public methods



This protects data while allowing controlled access.



# Difference Between Access Modifiers



## public


Visibility:


Everywhere.



Usage:


General access.



## private


Visibility:


Same class only.



Usage:


Data hiding.



## protected


Visibility:


Same package + subclasses.



Usage:


Inheritance.



## default


Visibility:


Same package.



Usage:


Package-level access.



# Advantages of Access Modifiers



## Data Security


Sensitive information can be protected.



## Better Control


Developers decide who can access members.



## Supports Encapsulation


Helps create secure classes.



## Improved Maintenance


Changes can be made safely.



# Common Mistakes



## Making All Variables Public


This exposes data unnecessarily.



## Accessing Private Variables Directly


Private members require methods.



## Incorrect Use of Protected


Understand inheritance rules.



# Best Practices


Follow these practices:


- Keep variables private.
- Provide public methods for controlled access.
- Use meaningful access levels.
- Avoid unnecessary public members.
- Design classes with security in mind.



# Real-World Applications



## Banking Systems


Private:


- Account balance.
- PIN information.



Public:


- Deposit method.
- Withdraw method.



## E-Commerce Systems


Private:


- Product price.
- Customer details.



Public:


- Product display methods.



## Student Systems


Private:


- Marks.
- Personal information.



Public:


- Result display methods.



# Key Points


Remember:


- Access modifiers control visibility.
- Java has four access modifiers.
- public allows access everywhere.
- private provides maximum protection.
- protected supports inheritance.
- default provides package-level access.
- Access modifiers are important for encapsulation.



# Summary


Access modifiers are essential for creating secure and maintainable Java applications.


They control how classes, variables, methods, and constructors are accessed, allowing developers to design better object-oriented software.

`

};


export default lesson11;