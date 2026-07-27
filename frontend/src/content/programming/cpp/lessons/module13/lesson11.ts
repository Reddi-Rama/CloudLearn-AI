const lesson11 = {

  id: "lesson11",

  title: "Random File Access and File Pointer Operations",

  content: `

# Random File Access and File Pointer Operations


## Introduction


In many applications, reading an entire file to access one specific record is inefficient.


For example:


- A bank system may need only one customer's account details.
- A library system may need one specific book record.


To solve this problem, C++ provides Random File Access.



## What is Random File Access?


Random file access allows a program to directly move to any position inside a file without reading all previous data.


It improves performance and reduces processing time.



## File Pointers


When a file is opened, C++ maintains positions called file pointers.


There are two main file pointers:



## Get Pointer


The get pointer represents the current reading position.


Functions:


- seekg()
- tellg()



## Put Pointer


The put pointer represents the current writing position.


Functions:


- seekp()
- tellp()



## Important Functions



## seekg()


Moves the input pointer to a specific location.


Syntax:


file.seekg(position);



## seekp()


Moves the output pointer.


Syntax:


file.seekp(position);



## tellg()


Returns the current reading position.


Syntax:


file.tellg();



## tellp()


Returns the current writing position.


Syntax:


file.tellp();



## Example Program


#include<iostream>

#include<fstream>

using namespace std;


int main()

{

    ifstream file("student.txt");


    file.seekg(5);


    char character;


    file.get(character);


    cout<<"Character : "<<character;


    file.close();


    return 0;

}



## Output


Character depends on file content.



## Advantages of Random File Access


It provides:


- Direct record access.
- Faster data retrieval.
- Efficient file updates.
- Reduced processing time.



## Real-World Applications


Random file access is used in:


### Banking Systems


Accessing individual customer records.


### Library Systems


Updating specific book information.


### Payroll Applications


Modifying employee details.


### Reservation Systems


Updating specific booking records.



## Key Points


Remember:


- Random access avoids reading the complete file.
- seekg() controls reading position.
- seekp() controls writing position.
- tellg() and tellp() return current positions.


Random file access makes file operations faster and more efficient in professional applications.

`

};


export default lesson11;