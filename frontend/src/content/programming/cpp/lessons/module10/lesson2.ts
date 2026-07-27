const lesson2 = {

  id: "lesson2",

  title: "Types of Inheritance",

  content: `

# Types of Inheritance


## Introduction


Inheritance can be implemented in different ways depending on the relationship between classes.

C++ supports different inheritance structures that help programmers model real-world relationships effectively.


The major types of inheritance are:


- Single Inheritance
- Multiple Inheritance
- Multilevel Inheritance
- Hierarchical Inheritance
- Hybrid Inheritance



# Single Inheritance


## Definition


Single inheritance occurs when one derived class inherits from one base class.


Structure:


Person


 |


Student



Example:


class Person

{

};


class Student : public Person

{

};



## Applications


Used when one class extends another class.


Examples:

- Person → Student
- Vehicle → Car



# Multiple Inheritance


## Definition


Multiple inheritance occurs when one derived class inherits from more than one base class.


Structure:


Teacher       Researcher


      \       /


      Professor



Example:


class Professor : public Teacher, public Researcher

{

};



## Applications


Used when a class requires features from multiple classes.


Examples:

- Professor as Teacher + Researcher.
- Smart Device as Phone + Camera.



# Multilevel Inheritance


## Definition


Multilevel inheritance occurs when a derived class becomes the base class for another class.


Structure:


Person


 |


Employee


 |


Manager



Example:


class Employee : public Person

{

};


class Manager : public Employee

{

};



## Applications


Used when relationships form a hierarchy.


Examples:

- Person → Employee → Manager
- Vehicle → Car → SportsCar



# Hierarchical Inheritance


## Definition


Hierarchical inheritance occurs when multiple derived classes inherit from one base class.


Structure:


        Person

       /   |   \


 Student Teacher Staff



Example:


class Student : public Person

{

};


class Teacher : public Person

{

};



## Applications


Used when multiple objects share common features.


Examples:

- College management systems.
- Banking systems.
- Hospital systems.



# Hybrid Inheritance


## Definition


Hybrid inheritance is a combination of two or more types of inheritance.


It combines structures like:


- Multiple inheritance.
- Multilevel inheritance.
- Hierarchical inheritance.



Example Structure:


          Person

         /     \

   Employee   Student

        |

    Manager



## Applications


Hybrid inheritance is used in complex software systems:


- ERP applications.
- Banking software.
- Enterprise systems.
- Large management applications.



## Comparison of Inheritance Types


Single Inheritance:

- One base class.
- One derived class.
- Simple structure.


Multiple Inheritance:

- Multiple base classes.
- One derived class.
- Combines features.


Multilevel Inheritance:

- Chain of inheritance.
- Multiple levels.


Hierarchical Inheritance:

- One base class.
- Multiple derived classes.


Hybrid Inheritance:

- Combination of different inheritance types.
- Used for complex systems.



## Advantages of Different Inheritance Types


They provide:


- Code reuse.
- Better organization.
- Real-world relationship modeling.
- Reduced duplication.
- Easier software expansion.



## Key Points


Remember:


- Single inheritance has one parent and one child.
- Multiple inheritance has multiple parents.
- Multilevel inheritance creates a chain.
- Hierarchical inheritance has multiple children.
- Hybrid inheritance combines different models.


Understanding inheritance types helps developers design efficient and scalable object-oriented applications.

`

};


export default lesson2;