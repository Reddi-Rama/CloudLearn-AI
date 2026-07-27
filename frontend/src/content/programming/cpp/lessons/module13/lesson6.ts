const lesson6 = {

  id: "lesson6",

  title: "Reading Data from Files",

  content: `

# Reading Data from Files


## Introduction


Reading data from files means retrieving stored information from a file and using it inside a program.


C++ provides the ifstream class to perform reading operations.



## ifstream Class


ifstream stands for Input File Stream.


It is used for:


- Opening files for reading.
- Extracting data from files.
- Processing stored information.



## Steps for Reading Data


The general process is:


1. Include the fstream header.

2. Create an ifstream object.

3. Open the file.

4. Read data using extraction operators.

5. Close the file.



## Syntax


ifstream file;


file.open("filename");


file>>data;


file.close();



## Example Program


#include<iostream>

#include<fstream>

using namespace std;


int main()

{

    ifstream file;


    string name;


    file.open("student.txt");


    file>>name;


    file.close();


    cout<<"Student Name : "<<name;


    return 0;

}



## Output


Student Name : Rahul



## Reading Complete Lines


The getline() function is used to read complete lines from a file.


Example:


getline(file, line);



It reads spaces and full sentences correctly.



## Example Using getline()


#include<iostream>

#include<fstream>

using namespace std;


int main()

{

    ifstream file;


    string data;


    file.open("message.txt");


    while(getline(file, data))

    {

        cout<<data<<endl;

    }


    file.close();


    return 0;

}



## Checking File Availability


Before reading, always check whether the file exists.


Example:


if(!file)

{

    cout<<"File cannot be opened";

}



## Advantages of Reading Files


Reading files provides:


- Access to stored information.
- Data processing capability.
- Record retrieval.
- Permanent data usage.



## Real-World Applications


Reading files is used in:


### Banking Applications


Retrieving customer details.


### Hospital Systems


Loading patient records.


### Library Systems


Accessing book information.


### Business Applications


Reading reports and data files.



## Key Points


Remember:


- ifstream is used for reading files.
- getline() reads complete lines.
- Always check file opening status.
- close() should be used after reading.


Reading files allows programs to retrieve and process stored information efficiently.

`

};


export default lesson6;