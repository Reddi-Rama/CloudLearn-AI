const lesson5 = {

  id: "lesson5",

  title: "Writing Data into Files",

  content: `

# Writing Data into Files


## Introduction


Writing data into files means storing information permanently on secondary storage devices.


C++ provides the ofstream class to perform write operations on files.


Data written into files remains available even after the program terminates.



## ofstream Class


ofstream stands for Output File Stream.


It is mainly used for:


- Creating files.
- Writing data.
- Storing program output.



## Steps for Writing Data


The general process is:


1. Include the fstream header.

2. Create an ofstream object.

3. Open the file.

4. Write data using insertion operator.

5. Close the file.



## Syntax


ofstream file;


file.open("filename");


file<<"Data";


file.close();



## Example Program


#include<iostream>

#include<fstream>

using namespace std;


int main()

{

    ofstream file;


    file.open("student.txt");


    file<<"Name : Rahul Kumar"<<endl;

    file<<"Age : 20"<<endl;

    file<<"Course : C++ Programming";


    file.close();


    cout<<"Data Written Successfully";


    return 0;

}



## Output


Data Written Successfully



## Content of student.txt


Name : Rahul Kumar

Age : 20

Course : C++ Programming



## Writing Multiple Data Items


Multiple values can be written into a file using:


- Insertion operator.
- Multiple statements.
- Loops.



Example:


file<<"Value 1";

file<<"Value 2";



## Append Mode Writing


If existing data should not be removed, use:


ios::app



Example:


file.open("student.txt", ios::app);



New data will be added at the end.



## Advantages of Writing Files


Writing files provides:


- Permanent data storage.
- Easy record management.
- Data sharing.
- Backup capability.



## Real-World Applications


Writing data into files is used in:


### Banking Applications


Saving transaction records.


### Payroll Systems


Saving employee details.


### Inventory Systems


Saving product information.


### Educational Applications


Saving student records.



## Key Points


Remember:


- ofstream is used for writing files.
- Data is stored permanently.
- close() should be called after writing.
- ios::app adds data without deleting previous content.


Writing files is one of the most common operations in C++ applications.

`

};


export default lesson5;