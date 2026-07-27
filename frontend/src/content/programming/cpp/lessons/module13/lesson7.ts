const lesson7 = {

  id: "lesson7",

  title: "Using getline() Function",

  content: `

# Using getline() Function


## Introduction


When reading data from files, the extraction operator (>>) reads data only until it finds a whitespace character.


For reading complete lines containing spaces, C++ provides the getline() function.


The getline() function is commonly used with file streams to read full lines of text.



## What is getline()?


getline() is a function used to read an entire line from an input stream.


It reads characters until it reaches the newline character.



## Syntax


getline(fileObject, variable);



Where:


fileObject:

The file stream object.


variable:

String variable used to store the read data.



## Example Program


#include<iostream>

#include<fstream>

using namespace std;


int main()

{

    ifstream file;


    string line;


    file.open("message.txt");


    while(getline(file, line))

    {

        cout << line << endl;

    }


    file.close();


    return 0;

}



## Output


Displays all lines stored inside message.txt



## Difference Between >> and getline()


Extraction Operator (>>):


- Reads one word at a time.
- Stops at spaces.
- Suitable for single values.



getline():


- Reads complete lines.
- Includes spaces.
- Suitable for sentences and paragraphs.



## Reading Multiple Lines


getline() is often used with loops to read the complete file.


Example:


while(getline(file,line))

{

    cout<<line;

}



The loop continues until the end of the file.



## Advantages of getline()


getline() provides:


- Complete line reading.
- Support for spaces.
- Easy text processing.
- Better file reading control.



## Real-World Applications


getline() is used in:


### Text Processing Applications


Reading documents and reports.


### Log Management Systems


Reading complete log messages.


### Configuration Files


Loading settings and information.



## Key Points


Remember:


- getline() reads complete lines.
- It can read spaces inside text.
- It is commonly used with ifstream.
- It helps process text files efficiently.


The getline() function is an essential tool for reading text data from files in C++.

`

};


export default lesson7;