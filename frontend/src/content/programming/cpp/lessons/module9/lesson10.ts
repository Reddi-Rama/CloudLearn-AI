const lesson10 = {

  id: "lesson10",

  title: "Static Data Members and Static Member Functions",

  content: `

# Static Data Members and Static Member Functions


## Introduction


In C++, normally every object of a class has its own copy of data members.


However, sometimes a value needs to be shared among all objects of a class.


For this purpose, C++ provides:

- Static Data Members.
- Static Member Functions.



## Static Data Members


A static data member is a class variable that is shared by all objects of the class.


Only one copy of a static data member exists in memory regardless of the number of objects created.


## Syntax


class ClassName

{

static dataType variableName;

};



## Example


class Student

{

public:


    static int count;

};


Here count is shared by all Student objects.



## Initializing Static Data Members


Static data members must be defined outside the class.


Example:


int Student::count = 0;



## Example Program


#include<iostream>

using namespace std;


class Student

{

public:


    static int count;


    Student()

    {

        count++;

    }


};


int Student::count = 0;



int main()

{

    Student student1;

    Student student2;

    Student student3;


    cout << Student::count;


    return 0;

}



Output:


3



## Advantages of Static Data Members


Static data members provide:


- Shared information among objects.
- Memory efficiency.
- Global class-level data storage.



## Real World Example


Consider an employee management system.


Static Data:


Total number of employees.


Each employee object increases the same count value.



## Static Member Functions


A static member function is a function that belongs to the class rather than individual objects.


It can access only static data members directly.



## Syntax


static returnType functionName()

{

}



## Example


class Student

{

public:


    static int count;


    static void displayCount()

    {

        cout << count;

    }

};



## Calling Static Functions


Static functions can be called using the class name.


Example:


Student::displayCount();



## Advantages of Static Member Functions


They provide:


- Access to static data.
- Class-level operations.
- Better memory management.



## Limitations


Static member functions cannot directly access:

- Non-static data members.
- Non-static member functions.



## Applications


Static members are used in:


- Counting objects.
- Managing shared resources.
- Configuration values.
- Utility operations.



## Key Points


Remember:


- Static members belong to the class.
- Only one copy exists.
- Static functions access static data.
- They can be called using the class name.


Static members are useful when information needs to be shared among all objects of a class.

`

};


export default lesson10;