const lesson2 = {

  id: "lesson2",

  title: "File Streams (ifstream, ofstream, fstream)",

  content: `

# File Streams (ifstream, ofstream, fstream)


## Introduction


C++ performs file operations using special classes called File Streams.


These classes are available in the fstream header and provide the required functionality for reading and writing files.


A stream represents the flow of data between a program and a file.



## File Stream Header


File stream classes are provided by:


fstream


This header contains classes required for file handling operations.



## Types of File Streams


C++ provides three main file stream classes.



# 1. ifstream


ifstream stands for Input File Stream.


It is used to read data from files.


Syntax:


ifstream inputFile;



Example usage:


Reading student records from a file.



# 2. ofstream


ofstream stands for Output File Stream.


It is used to write data into files.


Syntax:


ofstream outputFile;



Example usage:


Creating reports and storing information.



# 3. fstream


fstream supports both reading and writing operations.


Syntax:


fstream file;



Example usage:


Updating existing file information.



## Example Program


#include<iostream>

#include<fstream>

using namespace std;


int main()

{

    ofstream outputFile;


    outputFile.open("student.txt");


    outputFile<<"Student Name : Rahul Kumar"<<endl;

    outputFile<<"Roll Number : 101"<<endl;


    outputFile.close();


    cout<<"File Created Successfully";


    return 0;

}



## Output


File Created Successfully



## Content Stored in student.txt


Student Name : Rahul Kumar

Roll Number : 101



## Advantages of File Streams


File streams provide:


- Easy file management.
- Organized reading and writing.
- Automatic buffering.
- Better program efficiency.
- Support for text and binary files.



## Real-World Applications


File streams are used in:


### Banking Applications


For storing account information.


### Educational Systems


For maintaining student records.


### Business Applications


For generating reports and invoices.



## Key Points


Remember:


- ifstream is used for reading files.
- ofstream is used for writing files.
- fstream supports both operations.
- File streams are the foundation of C++ file handling.


Understanding file streams is necessary before performing advanced file operations.

`

};


export default lesson2;