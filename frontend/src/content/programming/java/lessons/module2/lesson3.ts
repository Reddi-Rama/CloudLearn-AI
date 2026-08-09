const lesson3 = {

  id: "lesson3",

  title: "Variables in Java",

  content: `

# Variables in Java


## Introduction


Variables are one of the most important concepts in programming.


Every application needs memory locations to store and process data.


A variable allows a program to store information temporarily during execution.


Examples:


- Student name.
- Account balance.
- Product price.
- User age.
- Login status.



## What is a Variable?


A variable is a named memory location used to store a value.


The value stored in a variable can change during program execution.



Example:


int age = 20;



Here:


int → Data type


age → Variable name


20 → Stored value



## Need for Variables


Without variables, programs cannot store information dynamically.


Example:


A banking application needs variables to store:


- Customer name.
- Account number.
- Balance.
- Transaction amount.



Variables make programs flexible and reusable.



# Declaring Variables


## Introduction


Before using a variable, it must be declared.


Variable declaration tells Java:


- Variable name.
- Type of data it can store.



## Syntax


dataType variableName;



Example:


int number;



Here:


int is the data type.


number is the variable name.



# Initializing Variables


## Introduction


Assigning a value to a variable is called initialization.



Example:


number = 100;



Declaration and initialization can also be done together.



Example:


int number = 100;



# Types of Variables in Java


Java mainly has three types of variables:


1. Local Variables.

2. Instance Variables.

3. Static Variables.



# Local Variables


## Introduction


A local variable is declared inside a method, constructor, or block.


It can only be accessed within that particular area.



Example:


class Example

{

    public static void main(String[] args)

    {

        int age = 20;


        System.out.println(age);

    }

}



Here:


age is a local variable.



## Characteristics of Local Variables


Local variables:


- Are created when a method starts execution.
- Are destroyed when the method ends.
- Must be initialized before use.
- Cannot have default values.



# Instance Variables


## Introduction


Instance variables are variables declared inside a class but outside methods.


They belong to objects.



Example:


class Student

{

    String name;

    int age;

}



Here:


name and age are instance variables.



## Characteristics of Instance Variables


Instance variables:


- Belong to objects.
- Have separate copies for each object.
- Receive default values automatically.
- Store object-related information.



Example:


Student student1 = new Student();


Student student2 = new Student();



Each object has its own copy of instance variables.



# Static Variables


## Introduction


Static variables are declared using the static keyword.


They belong to the class instead of individual objects.



Example:


class Student

{

    static String college = "ABC University";

}



## Characteristics of Static Variables


Static variables:


- Are shared by all objects.
- Are created when the class loads.
- Use the static keyword.
- Store common information.



Example:


All students belong to the same college.


Instead of storing college name for every object, a static variable can be used.



# Variable Naming Rules


Java variables must follow identifier rules.



Rules:


- Variable names cannot start with numbers.
- Spaces are not allowed.
- Keywords cannot be used.
- Names are case-sensitive.
- Meaningful names should be used.



Valid Examples:


studentName


totalMarks


accountBalance



Invalid Examples:


1student


student name


class



# Variable Naming Convention


Java follows camelCase for variables.



Examples:


firstName


totalAmount


studentMarks



Good naming improves:


- Readability.
- Maintenance.
- Understanding of code.



# Assigning Values to Variables


Example:


int marks = 90;


double price = 250.50;


char grade = 'A';


boolean result = true;



# Changing Variable Values


Variables can store new values during execution.



Example:


int count = 10;


count = 20;



The old value is replaced with the new value.



# Example Program


class VariableExample

{

    public static void main(String[] args)

    {

        String name = "Alex";

        int age = 20;

        double marks = 95.5;


        System.out.println(name);

        System.out.println(age);

        System.out.println(marks);

    }

}



## Output


Alex

20

95.5



# Default Values of Variables


Instance and static variables receive default values automatically.



Default values:


byte → 0


short → 0


int → 0


long → 0L


float → 0.0f


double → 0.0d


char → '\\u0000'


boolean → false


Reference variables → null



Local variables do not receive default values.



# Variable Scope


## Introduction


Scope defines where a variable can be accessed in a program.



Types of scope:


- Local scope.
- Instance scope.
- Class scope.



## Local Scope


A variable declared inside a method is available only inside that method.



## Instance Scope


Instance variables are available through objects.



## Class Scope


Static variables are available through the class.



# Memory Allocation of Variables


Primitive variables:


Store actual values.



Example:


int number = 10;



Reference variables:


Store object references.



Example:


Student s = new Student();



# Variables in Real-World Applications



## Banking System


Variables store:


- Account balance.
- Customer details.
- Transaction amount.



## E-Commerce System


Variables store:


- Product price.
- Quantity.
- Discount.



## Student Management System


Variables store:


- Name.
- Marks.
- Attendance.



# Best Practices


Follow these practices:


- Use meaningful variable names.
- Initialize variables properly.
- Avoid unnecessary variables.
- Follow Java naming conventions.
- Choose appropriate data types.



# Common Mistakes



## Using Uninitialized Local Variables


Wrong:


int age;

System.out.println(age);



Correct:


int age = 20;



## Using Confusing Names


Avoid:


int x;



Prefer:


int studentAge;



# Key Points


Remember:


- Variables store data values.
- Java has local, instance, and static variables.
- Local variables must be initialized.
- Instance variables belong to objects.
- Static variables belong to classes.
- Good variable names improve code quality.


Variables are the foundation of storing and manipulating information in Java applications.

`

};


export default lesson3;