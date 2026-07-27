const lesson13 = {

  id: "lesson13",

  title: "Object Arrays",

  content: `

# Object Arrays


## Introduction


In C++, an object array is an array that stores multiple objects of the same class.


Just like arrays store multiple values of the same data type, object arrays store multiple objects created from a class.


Object arrays are useful when applications need to manage many similar objects.


Examples:


- Multiple students.
- Multiple employees.
- Multiple products.
- Multiple accounts.



## Creating Object Arrays


The syntax for creating an object array is:


ClassName arrayName[size];


Example:


Student students[50];



Here:

- Student is the class.
- students is an array of objects.
- 50 objects can be stored.



## Accessing Object Array Elements


Individual objects are accessed using indexes.


Example:


students[0].display();


students[1].display();



Each array element represents a separate object.



## Example Program


#include<iostream>

using namespace std;


class Student

{

public:


    int rollNumber;


    string name;


    void display()

    {

        cout << rollNumber << endl;

        cout << name << endl;

    }

};



int main()

{

    Student students[2];


    students[0].rollNumber = 101;

    students[0].name = "Alex";


    students[1].rollNumber = 102;

    students[1].name = "John";


    students[0].display();


    students[1].display();


    return 0;

}



Output:


101

Alex

102

John



## Using Constructors with Object Arrays


When an object array is created, constructors are called for every object.


Example:


Student students[5];


The constructor executes five times.



## Object Arrays with Input


Object arrays can store user data using loops.


Example:


for(int i = 0; i < 5; i++)

{

    cin >> students[i].name;

}



## Applications of Object Arrays


Object arrays are used in:


### Student Management Systems


Objects:

- Student1
- Student2
- Student3


### Employee Management Systems


Objects:

- Employee records.


### Banking Applications


Objects:

- Multiple accounts.



## Advantages of Object Arrays


Object arrays provide:


- Easy management of multiple objects.
- Organized storage.
- Simple processing using loops.
- Better program structure.



## Object Array vs Normal Array


Normal Array:


Stores values of the same data type.


Example:


int marks[10];



Object Array:


Stores multiple objects of a class.


Example:


Student students[10];



## Key Points


Remember:


- Object arrays store multiple objects.
- Each object has separate memory.
- Constructors execute for each object.
- Objects are accessed using indexes.


Object arrays are widely used in real-world applications where multiple objects of the same type must be managed efficiently.

`

};


export default lesson13;