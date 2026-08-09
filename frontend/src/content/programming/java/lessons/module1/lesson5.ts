const lesson5 = {

  id: "lesson5",

  title: "JVM, JRE, and JDK",

  content: `

# JVM, JRE, and JDK


## Introduction


One of the most important concepts in Java is understanding JVM, JRE, and JDK.


These three components are responsible for developing, compiling, and executing Java applications.


They work together to make Java platform independent.



# JVM (Java Virtual Machine)


## What is JVM?


JVM stands for Java Virtual Machine.


It is a software-based virtual machine that executes Java bytecode.


The JVM converts bytecode into machine-level instructions that the computer can understand.



## Role of JVM


JVM is responsible for:


- Executing Java bytecode.
- Providing platform independence.
- Managing memory.
- Performing garbage collection.
- Providing runtime security.



## How JVM Works


The execution process:


Java Source Code

↓

Java Compiler

↓

Bytecode (.class file)

↓

JVM

↓

Machine Code

↓

Program Output



## JVM Architecture


JVM contains several components:


### Class Loader


Loads required class files into memory.



### Bytecode Verifier


Checks bytecode security before execution.



### Runtime Memory Area


Stores:


- Classes.
- Objects.
- Variables.
- Method information.



### Execution Engine


Executes bytecode instructions.



### Garbage Collector


Automatically removes unused objects from memory.



# JRE (Java Runtime Environment)


## What is JRE?


JRE stands for Java Runtime Environment.


It provides the environment required to run Java applications.


JRE contains:


- JVM.
- Java class libraries.
- Supporting files.



## Purpose of JRE


JRE allows users to execute Java applications without developing them.



Example:


A user who only wants to run a Java application needs JRE.



# JDK (Java Development Kit)


## What is JDK?


JDK stands for Java Development Kit.


It is a complete package used by developers to create Java applications.


JDK contains:


- JRE.
- JVM.
- Development tools.



## Tools Provided by JDK


Important tools include:


### javac


Java compiler used to convert source code into bytecode.



Example:


javac Program.java



### java


Used to execute Java programs.


Example:


java Program



### javadoc


Generates documentation from Java source code.



### jar


Creates and manages Java archive files.



# Relationship Between JVM, JRE, and JDK


The relationship is:


JDK

↓

JRE

↓

JVM



JDK contains JRE.


JRE contains JVM.



# Difference Between JVM, JRE, and JDK



## JVM


Purpose:


Execute Java bytecode.


Used by:


Java runtime environment.



## JRE


Purpose:


Run Java applications.


Contains:


JVM + Libraries.



## JDK


Purpose:


Develop Java applications.


Contains:


JRE + Development tools.



# Example


When creating a Java application:


1. Developer writes Java code.


2. JDK compiles the code.


3. Bytecode is generated.


4. JRE provides runtime environment.


5. JVM executes the bytecode.



# Importance of JVM


JVM provides:


- Platform independence.
- Security.
- Memory management.
- Portability.



# Real-World Applications


JVM technology is used in:


- Enterprise applications.
- Android development.
- Cloud applications.
- Banking systems.
- Web servers.



# Key Points


Remember:


- JVM executes Java bytecode.
- JRE provides environment to run Java applications.
- JDK provides tools to develop Java applications.
- JDK contains JRE.
- JRE contains JVM.
- JVM makes Java platform independent.


Understanding JVM, JRE, and JDK is essential for every Java developer because they form the foundation of Java execution.

`

};


export default lesson5;