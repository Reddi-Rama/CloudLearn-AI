const lesson7 = {

  id: "lesson7",

  title: "Installing Java Development Kit",

  content: `

# Installing Java Development Kit


## Introduction


To develop Java applications, a developer needs the Java Development Kit (JDK).


JDK provides all necessary tools required to:


- Write Java programs.
- Compile Java source code.
- Execute Java applications.
- Generate documentation.



## What is JDK?


JDK stands for Java Development Kit.


It is a software package that contains:


- Java compiler.
- Java Runtime Environment.
- JVM.
- Development tools.



## Why Install JDK?


JDK installation allows developers to:


- Create Java programs.
- Compile source code.
- Run Java applications.
- Use Java development tools.



# Steps to Install JDK



## Step 1: Download JDK


Download the latest Java Development Kit from the official Java distribution provider.


Choose the version according to your operating system.



Supported platforms:


- Windows.
- Linux.
- macOS.



## Step 2: Run Installer


After downloading:


1. Open the installer.
2. Accept the license agreement.
3. Select installation location.
4. Complete installation.



## Step 3: Verify Installation


Open command prompt or terminal.


Check Java version:


java -version



Example output:


java version "XX.X.X"



Check compiler version:


javac -version



Example output:


javac XX.X.X



## Setting JAVA_HOME


JAVA_HOME is an environment variable that points to the JDK installation directory.



Example:


JAVA_HOME = C:\\Program Files\\Java\\jdk



## Adding Java to PATH


Adding Java to PATH allows Java commands to run from any terminal location.



Required PATH entry:


JDK/bin



Example:


C:\\Program Files\\Java\\jdk\\bin



# JDK Directory Structure


A typical JDK installation contains:



## bin Folder


Contains executable tools:


- java.
- javac.
- javadoc.
- jar.



## lib Folder


Contains Java libraries and supporting files.



## include Folder


Contains header files used for native development.



# Testing Java Installation


Create a simple Java program:


class Test

{

    public static void main(String[] args)

    {

        System.out.println("Java Installed Successfully");

    }

}



Compile:


javac Test.java



Run:


java Test



Output:


Java Installed Successfully



# Common Installation Problems


## Java Command Not Found


Cause:


PATH variable is not configured correctly.



Solution:


Add JDK bin directory to PATH.



## Multiple Java Versions


Cause:


More than one JDK version installed.



Solution:


Configure JAVA_HOME correctly.



## Incorrect Installation Path


Cause:


JDK files are moved or deleted.


Solution:


Reinstall or update environment variables.



# Importance of Proper Setup


A correct Java environment provides:


- Smooth development.
- Error-free compilation.
- Easy execution.
- Better productivity.



# Real-World Development Environment


Professional Java developers use:


- JDK.
- IDEs like IntelliJ IDEA, Eclipse, or VS Code.
- Build tools.
- Version control systems.



# Key Points


Remember:


- JDK is required to develop Java applications.
- javac compiles Java programs.
- java runs Java applications.
- JAVA_HOME stores JDK location.
- PATH allows Java commands from terminal.


Installing JDK is the first practical step toward Java application development.

`

};


export default lesson7;