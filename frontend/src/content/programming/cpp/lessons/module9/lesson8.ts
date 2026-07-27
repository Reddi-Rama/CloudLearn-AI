const lesson8 = {

  id: "lesson8",

  title: "Destructors",

  content: `

# Destructors


## Introduction


A destructor is a special member function of a class that is automatically called when an object is destroyed.


The main purpose of a destructor is to release resources used by an object.


Resources may include:

- Dynamic memory.
- Files.
- Network connections.
- Database connections.


## Characteristics of Destructors


A destructor:

- Has the same name as the class.
- Starts with a tilde (~) symbol.
- Does not return any value.
- Does not accept parameters.
- Executes automatically.



## Syntax of Destructor


class ClassName

{

public:


    ~ClassName()

    {

    }


};



Example:


class Student

{

public:


    ~Student()

    {

        cout<<"Destructor Called";

    }

};



## Example Program


#include<iostream>

using namespace std;


class Student

{

public:


    Student()

    {

        cout<<"Constructor Called"<<endl;

    }


    ~Student()

    {

        cout<<"Destructor Called";

    }

};


int main()

{

    Student student1;


    return 0;

}



Output:


Constructor Called

Destructor Called



## When is Destructor Called?


A destructor is called automatically when:


- An object goes out of scope.
- A local object is destroyed.
- A program finishes execution.
- Dynamic memory is released using delete.



## Destructor with Dynamic Memory


When memory is allocated dynamically using new, the destructor can release that memory.


Example:


class Data

{

private:


    int *value;


public:


    Data()

    {

        value = new int;

    }


    ~Data()

    {

        delete value;

    }

};



The destructor prevents memory leaks.



## Constructor and Destructor Relationship


Constructor:

- Creates an object.
- Allocates resources.
- Initializes data.


Destructor:

- Destroys an object.
- Releases resources.
- Cleans memory.



## Applications of Destructors


Destructors are used in:


### File Handling


Closing files automatically.


### Memory Management


Releasing dynamically allocated memory.


### Database Applications


Closing database connections.



## Advantages of Destructors


Destructors provide:


- Automatic cleanup.
- Better memory management.
- Prevention of memory leaks.
- Resource control.



## Important Points


Remember:


- Destructor name begins with ~.
- Only one destructor exists in a class.
- Destructor cannot be overloaded.
- It executes automatically.



Destructors are an important part of resource management in C++ and help create efficient and reliable programs.

`

};


export default lesson8;