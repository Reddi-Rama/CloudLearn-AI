const lesson13 = {

  id: "lesson13",

  title: "Garbage Collection in Java",

  content: `

# Garbage Collection in Java


## Introduction


Memory management is an important part of programming.



When programs create objects, memory is allocated for those objects.



After objects are no longer needed, the memory should be released.



Java provides an automatic memory management system called:


Garbage Collection



The Garbage Collector automatically removes unused objects from memory.



# What is Garbage Collection?


Garbage Collection is the process of automatically identifying and removing objects that are no longer being used by a program.



In Java:


- Objects are created in heap memory.
- Unused objects are removed automatically.
- Memory is reused for new objects.



The programmer does not need to manually free memory.



# Why Do We Need Garbage Collection?


In languages like C and C++:


Programmers manually allocate and release memory.



Example:


malloc()


free()



Incorrect memory handling can cause:


- Memory leaks.
- Dangling pointers.
- Program crashes.



Java avoids these problems by automatically managing memory.



# Heap Memory and Garbage Collection


Objects are stored in heap memory.



Example:


Student student = new Student();



Memory:


Stack:


student reference



Heap:


Student object



When the object is no longer reachable:


The Garbage Collector removes it.



# Object Eligibility for Garbage Collection


An object becomes eligible for garbage collection when there are no active references pointing to it.



Example:


class Example

{

    public static void main(String[] args)

    {

        Example obj = new Example();


        obj = null;

    }

}



Explanation:


Initially:


obj points to the object.



After:


obj = null;



The object has no reference.



It becomes eligible for garbage collection.



# Ways an Object Becomes Eligible for Garbage Collection



## 1. Assigning null


Example:


Student student = new Student();


student = null;



The object loses its reference.



# 2. Reassigning Reference


Example:


Student student1 = new Student();


Student student2 = new Student();


student1 = student2;



The first object no longer has a reference.



# 3. Anonymous Objects


Example:


new Student();



If no reference is stored, the object becomes eligible.



# 4. Island of Isolation


When objects reference each other but cannot be accessed from the program, they become eligible.



Example:


class A

{

    B obj;

}


class B

{

    A obj;

}



If both objects lose external references, garbage collection can remove them.



# Garbage Collector


The Garbage Collector (GC) is a JVM component responsible for automatic memory cleanup.



Its responsibilities:


- Identify unused objects.
- Remove unused objects.
- Free heap memory.



# How Garbage Collection Works


The process involves:



## Step 1: Object Creation


Objects are created in heap memory.



## Step 2: Reference Tracking


JVM tracks object references.



## Step 3: Identify Unreachable Objects


Objects without references are identified.



## Step 4: Memory Cleanup


Garbage Collector removes those objects.



# Requesting Garbage Collection


Java provides methods to request garbage collection.



Example:


System.gc();



or


Runtime.getRuntime().gc();



Important:


These methods only request garbage collection.


The JVM decides when to actually perform it.



# finalize() Method


The finalize() method was used to perform cleanup before an object was destroyed.



Example:


class Example

{

    protected void finalize()

    {

        System.out.println("Object Removed");

    }

}



However, finalize() is deprecated in modern Java versions and should not be used for resource management.



# Garbage Collection Example


class GarbageExample

{

    public static void main(String[] args)

    {

        GarbageExample obj = new GarbageExample();


        obj = null;


        System.gc();

    }

}



Explanation:


The object becomes eligible for garbage collection after assigning null.



# Garbage Collection Example: Banking System


class BankAccount

{

    String accountHolder;


    public static void main(String[] args)

    {

        BankAccount account = new BankAccount();


        account = null;


        System.gc();

    }

}



Unused account object can be removed by GC.



# Garbage Collection Example: E-Commerce System


class Product

{

    String name;


    public static void main(String[] args)

    {

        Product product = new Product();


        product = null;


        System.gc();

    }

}



The unused product object becomes eligible.



# Garbage Collection Example: Student System


class Student

{

    String name;


    public static void main(String[] args)

    {

        Student student = new Student();


        student = null;


        System.gc();

    }

}



The JVM can remove the unused object.



# Advantages of Garbage Collection



## Automatic Memory Management


Developers do not need to manually release memory.



## Prevents Memory Leaks


Unused objects are removed.



## Improves Program Stability


Reduces memory-related errors.



## Simplifies Development


Programmers focus on application logic.



# Limitations of Garbage Collection



## No Guaranteed Timing


The programmer cannot control exactly when GC runs.



## Performance Overhead


Garbage collection requires CPU resources.



## Not Suitable for Manual Resource Control


External resources need proper handling.



# Garbage Collection and Memory Management


Java memory areas:


## Stack Memory


Stores:


- Local variables.
- References.
- Method calls.



## Heap Memory


Stores:


- Objects.
- Instance variables.



Garbage collection mainly works on heap memory.



# Common Mistakes



## Creating Too Many Objects


Unnecessary objects increase memory usage.



## Holding Unused References


Objects cannot be collected if references remain.



## Depending on System.gc()


GC timing is controlled by JVM.



# Best Practices


Follow these practices:


- Create objects only when needed.
- Remove unnecessary references.
- Avoid keeping unused objects.
- Use try-with-resources for external resources.
- Do not depend on finalize().



# Real-World Applications



## Banking Systems


Garbage collection manages:


- Temporary transaction objects.
- Report generation objects.
- Session data.



## E-Commerce Systems


Garbage collection manages:


- Cart objects.
- Temporary product searches.
- Order processing objects.



## Student Systems


Garbage collection manages:


- Temporary reports.
- Calculation objects.
- Data processing objects.



# Key Points


Remember:


- Garbage collection automatically removes unused objects.
- Objects are stored in heap memory.
- Objects without references become eligible for GC.
- System.gc() only requests garbage collection.
- JVM controls garbage collection execution.
- Garbage collection improves memory management.



# Summary


Garbage Collection is one of Java's most powerful features.


It automatically manages memory by removing unused objects, reducing memory errors, and helping developers build reliable applications.

`

};


export default lesson13;