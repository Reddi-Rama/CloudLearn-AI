const lesson11 = {

  id: "lesson11",

  title: "The Object Class in Java",

  content: `

# The Object Class in Java


## Introduction


In Java, every class is connected to a special class called:


Object



The Object class is the root class of the Java class hierarchy.



It is available in the:


java.lang package



Since java.lang is automatically imported, every Java class can use Object methods directly.



# What is the Object Class?


The Object class is the parent class of all classes in Java.



If a class does not explicitly extend another class, Java automatically makes it a subclass of Object.



Example:


class Student

{

}



Internally, Java treats it as:



class Student extends Object

{

}



Therefore, every class inherits Object class methods.



# Why Do We Need Object Class?


The Object class provides common functionality that every Java object needs.



It provides methods for:


- Object comparison.
- Object representation.
- Runtime information.
- Thread communication.
- Object cloning.



# Methods of Object Class


The Object class provides several important methods:



1. toString()


2. equals()


3. hashCode()


4. getClass()


5. clone()


6. finalize()


7. wait()


8. notify()


9. notifyAll()



# 1. toString() Method


The toString() method returns a string representation of an object.



Syntax:


public String toString()



By default, it returns:


ClassName@HashCode



Example:


class Student

{

    String name = "Alex";


    public static void main(String[] args)

    {

        Student student = new Student();


        System.out.println(student.toString());

    }

}



Output:


Student@15db9742



The output contains class name and hash code.



# Overriding toString()


Usually, developers override toString() to display meaningful information.



Example:


class Student

{

    String name = "Alex";


    public String toString()

    {

        return name;

    }


    public static void main(String[] args)

    {

        Student student = new Student();


        System.out.println(student);

    }

}



Output:


Alex



# toString() Example: Banking System


class Account

{

    String holderName;


    public String toString()

    {

        return holderName;

    }

}



The account object displays meaningful details.



# 2. equals() Method


The equals() method compares two objects.



Syntax:


public boolean equals(Object obj)



By default, equals() compares object references.



Example:


Student s1 = new Student();


Student s2 = new Student();



System.out.println(s1.equals(s2));



Output:


false



Because both objects are different.



# Overriding equals()


Developers override equals() to compare object data.



Example:


class Student

{

    int rollNumber;


    Student(int roll)

    {

        rollNumber = roll;

    }


    public boolean equals(Object obj)

    {

        Student s = (Student)obj;


        return rollNumber == s.rollNumber;

    }

}



Now objects can be compared based on values.



# equals() Example: Banking System


Two account objects can be compared using:


- Account number.
- Customer ID.



# equals() Example: E-Commerce System


Two products can be compared using:


- Product ID.
- Product code.



# 3. hashCode() Method


The hashCode() method returns an integer value representing an object.



Syntax:


public int hashCode()



Hash codes are mainly used in:


- HashMap.
- HashSet.
- HashTable.



Example:


Student student = new Student();


System.out.println(student.hashCode());



# Relationship Between equals() and hashCode()


Important rule:


If two objects are equal using equals(), they must have the same hashCode().



Example:


If:


student1.equals(student2)



is true,



then:


student1.hashCode() == student2.hashCode()



must also be true.



# 4. getClass() Method


The getClass() method returns runtime information about an object.



Syntax:


public final Class getClass()



Example:


class Student

{

    public static void main(String[] args)

    {

        Student student = new Student();


        System.out.println(student.getClass());

    }

}



Output:


class Student



# Uses of getClass()


It is used for:


- Runtime type checking.
- Reflection.
- Framework development.



# 5. clone() Method


The clone() method creates a copy of an object.



Syntax:


protected Object clone()



To use clone(), a class must implement:


Cloneable interface



Example:


class Student implements Cloneable

{

    public Object clone() throws CloneNotSupportedException

    {

        return super.clone();

    }

}



# Object Cloning


Cloning creates another object with the same values.



Example:


Original Object:


Student 1



Cloned Object:


Student 2



Both contain the same data.



# 6. finalize() Method


The finalize() method was used before garbage collection to perform cleanup operations.



Example:


protected void finalize()

{

    System.out.println("Cleanup");

}



However:


finalize() is deprecated in modern Java.



It should not be used for resource management.



# 7. wait() Method


The wait() method pauses the execution of a thread until another thread sends notification.



It is used in:


Multithreading.



Example:


object.wait();



# 8. notify() Method


The notify() method wakes one waiting thread.



Example:


object.notify();



# 9. notifyAll() Method


The notifyAll() method wakes all waiting threads.



Example:


object.notifyAll();



# Object Class and Inheritance


Every class inherits Object methods.



Example:


class Student

{

}



Student automatically gets:


toString()


equals()


hashCode()


getClass()



# Object Class Example: Student Management System


class Student

{

    String name;


    public String toString()

    {

        return name;

    }

}



The object displays student information clearly.



# Object Class Example: E-Commerce System


class Product

{

    String productName;


    public String toString()

    {

        return productName;

    }

}



# Object Class Example: Banking System


class Account

{

    int accountNumber;


    public boolean equals(Object obj)

    {

        return true;

    }

}



# Advantages of Object Class



## Common Functionality


Provides methods for every object.



## Code Reuse


Classes automatically inherit useful methods.



## Supports Collections


hashCode() and equals() help collection classes.



## Runtime Information


getClass() provides object details.



# Common Mistakes



## Comparing Objects Using ==


== compares references.



Use equals() for logical comparison.



## Not Overriding hashCode() with equals()


Can create collection problems.



## Using finalize()


Avoid because it is deprecated.



# Best Practices


Follow these practices:


- Override toString() for meaningful output.
- Override equals() for logical comparison.
- Override hashCode() with equals().
- Use clone carefully.
- Understand inherited Object methods.



# Real-World Applications



## Banking Systems


Object methods help compare:


- Accounts.
- Customers.



## E-Commerce Systems


Object methods help compare:


- Products.
- Orders.



## Student Systems


Object methods help compare:


- Student records.
- Course objects.



# Key Points


Remember:


- Object is the root class of Java.
- Every class inherits Object.
- toString() represents objects.
- equals() compares objects.
- hashCode() supports collections.
- getClass() gives runtime information.
- clone() creates object copies.



# Summary


The Object class is the foundation of Java inheritance.


Understanding its methods helps developers create better classes, compare objects correctly, represent objects clearly, and build professional Java applications.

`

};


export default lesson11;