const lesson6 = {

  id: "lesson6",

  title: "Polymorphism in Java",

  content: `

# Polymorphism in Java


## Introduction


Polymorphism is one of the four fundamental concepts of Object-Oriented Programming.



The word polymorphism comes from two words:


Poly:


Many



Morph:


Forms



Therefore, polymorphism means:


"One thing having many forms."



In Java, polymorphism allows a single method, object, or interface to behave differently in different situations.



# What is Polymorphism?


Polymorphism is the ability of an object to take multiple forms and perform different behaviors depending on the situation.



Example:


A person can have different roles:


- Student.
- Employee.
- Teacher.



The same person object can behave differently based on the role.



# Why Do We Need Polymorphism?


Without polymorphism:


Different method names are required for different behaviors.



Example:


calculateStudentSalary()


calculateEmployeeSalary()


calculateManagerSalary()



This makes code difficult to manage.



With polymorphism:


A common method name can be used:



calculateSalary()



Each class provides its own implementation.



# Types of Polymorphism in Java


Java supports two types of polymorphism:



## 1. Compile-Time Polymorphism


## 2. Runtime Polymorphism



# 1. Compile-Time Polymorphism


Compile-time polymorphism is achieved using:


Method Overloading



The compiler decides which method to execute during compilation.



# Method Overloading Example


class Calculator

{

    int add(int a, int b)

    {

        return a + b;

    }


    double add(double a, double b)

    {

        return a + b;

    }


    public static void main(String[] args)

    {

        Calculator calculator = new Calculator();


        System.out.println(calculator.add(10,20));


        System.out.println(calculator.add(10.5,20.5));

    }

}



Output:


30


31.0



Explanation:


The compiler selects the correct method based on parameters.



# Rules of Method Overloading



Methods must have:


- Same method name.
- Different parameters.



Difference can be:


- Number of parameters.
- Type of parameters.
- Order of parameters.



Return type alone cannot create overloading.



# 2. Runtime Polymorphism


Runtime polymorphism is achieved using:


Method Overriding



The JVM decides which method to execute during program execution.



# Runtime Polymorphism Example


class Animal

{

    void sound()

    {

        System.out.println("Animal Sound");

    }

}



class Dog extends Animal

{

    @Override

    void sound()

    {

        System.out.println("Dog Bark");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Animal animal = new Dog();


        animal.sound();

    }

}



Output:


Dog Bark



Explanation:


Reference type:


Animal



Object type:


Dog



The JVM executes Dog's sound() method.



# Important Concept: Reference and Object


Example:


Animal animal = new Dog();



Left side:


Reference type.



Right side:


Actual object.



Method execution depends on the object type.



# Polymorphism Using Parent Reference


A parent reference can store a child object.



Example:


Animal animal;


animal = new Dog();


animal.sound();



This provides flexibility.



# Real-World Example: Banking System


Parent Class:


Account



Method:


calculateInterest()



Child Classes:


SavingsAccount


CurrentAccount



Each class calculates interest differently.



Example:


Account account = new SavingsAccount();



The same method behaves differently.



# Banking Example Program


class Account

{

    void calculateInterest()

    {

        System.out.println("General Interest");

    }

}



class SavingsAccount extends Account

{

    @Override

    void calculateInterest()

    {

        System.out.println("Savings Interest");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Account account = new SavingsAccount();


        account.calculateInterest();

    }

}



Output:


Savings Interest



# Real-World Example: E-Commerce System


Parent Class:


Payment



Child Classes:


CreditCardPayment


UPIPayment



Method:


processPayment()



Each payment method works differently.



# Real-World Example: Student Management System


Parent Class:


Person



Child Classes:


Student


Teacher



Method:


displayRole()



Each class provides different output.



# Advantages of Polymorphism



## Code Flexibility


The same code can work with different objects.



## Easy Extension


New classes can be added without changing existing code.



## Code Reusability


Common interfaces can be reused.



## Better Maintenance


Changes are easier to manage.



# Polymorphism and Inheritance


Polymorphism depends on inheritance.



Example:


Parent:


Animal



Children:


Dog


Cat



Both override:


sound()



The same method behaves differently.



# Polymorphism and Interfaces


Interfaces provide another way to achieve polymorphism.



Example:


interface Payment

{

    void pay();

}



Classes:


CreditCard


UPI



Both implement payment differently.



# Example Using Interface


interface Payment

{

    void pay();

}



class CardPayment implements Payment

{

    public void pay()

    {

        System.out.println("Card Payment");

    }

}



class Main

{

    public static void main(String[] args)

    {

        Payment payment = new CardPayment();


        payment.pay();

    }

}



Output:


Card Payment



# Difference Between Overloading and Overriding



## Method Overloading


- Compile-time polymorphism.
- Same class.
- Different parameters.
- Decided by compiler.



## Method Overriding


- Runtime polymorphism.
- Parent-child relationship.
- Same method signature.
- Decided by JVM.



# Common Mistakes



## Confusing Overloading and Overriding


They are different concepts.



## Using Child-Specific Methods Through Parent Reference


Only overridden methods are accessible.



## Incorrect Inheritance Design


Polymorphism requires proper relationships.



# Best Practices


Follow these practices:


- Program to parent types.
- Use interfaces where possible.
- Keep methods meaningful.
- Use overriding for specialized behavior.
- Avoid unnecessary complexity.



# Real-World Applications



## Banking Applications


Different accounts:


SavingsAccount


LoanAccount



Same operation:


calculateInterest()



Different behavior.



## E-Commerce Applications


Different payments:


UPI


Card


Net Banking



Same method:


pay()



## Education Applications


Different users:


Student


Teacher



Same method:


displayDetails()



# Key Points


Remember:


- Polymorphism means many forms.
- Java supports compile-time and runtime polymorphism.
- Overloading provides compile-time polymorphism.
- Overriding provides runtime polymorphism.
- Parent references can hold child objects.
- Polymorphism improves flexibility and scalability.



# Summary


Polymorphism allows Java programs to use a common interface while providing different implementations.


It is one of the most powerful OOP concepts because it enables flexible, reusable, and maintainable software design.

`

};


export default lesson6;