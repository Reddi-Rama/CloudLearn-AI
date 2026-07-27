const lesson12 = {

  id: "lesson12",

  title: "Reading and Writing Objects to Binary Files",

  content: `

# Reading and Writing Objects to Binary Files


## Introduction


Many real-world applications need to store complete objects instead of individual variables.


Examples:


- Student records.
- Employee details.
- Customer information.


C++ allows complete objects to be written directly into binary files.



## Why Store Objects?


Storing objects provides:


- Faster data processing.
- Simplified record management.
- Efficient storage.
- Easy retrieval of complete information.



## Writing Objects to Binary Files


The write() function is used to store objects.


Syntax:


file.write((char*)&object, sizeof(object));



The object is converted into bytes and stored in the file.



## Reading Objects from Binary Files


The read() function retrieves stored objects.


Syntax:


file.read((char*)&object, sizeof(object));



The stored bytes are converted back into an object.



## Example Program


#include<iostream>

#include<fstream>

using namespace std;


class Student

{

public:


    int rollNumber;

    char name[30];

};


int main()

{

    Student student = {101,"Rahul"};


    ofstream outputFile("student.dat", ios::binary);


    outputFile.write(

        (char*)&student,

        sizeof(student)

    );


    outputFile.close();


    Student result;


    ifstream inputFile("student.dat", ios::binary);


    inputFile.read(

        (char*)&result,

        sizeof(result)

    );


    cout<<"Roll Number : "

        <<result.rollNumber<<endl;


    cout<<"Name : "

        <<result.name;


    inputFile.close();


    return 0;

}



## Output


Roll Number : 101

Name : Rahul



## Advantages


Object-based binary storage provides:


- Faster processing.
- Efficient storage.
- Reduced programming effort.
- Simple record management.



## Applications


This technique is used in:


### Banking Software


Storing customer account objects.


### Library Systems


Storing book records.


### Hospital Applications


Storing patient objects.


### Payroll Systems


Storing employee records.



## Key Points


Remember:


- Objects can be stored directly in binary files.
- write() stores objects.
- read() retrieves objects.
- Binary object storage improves efficiency.


Reading and writing objects to binary files is an important technique for developing data-driven C++ applications.

`

};


export default lesson12;