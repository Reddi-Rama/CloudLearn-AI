const lesson3 = {

  id: "lesson3",

  title: "Opening and Closing Files",

  content: `

# Opening and Closing Files


## Introduction


Before performing any file operation, a program must establish a connection with the file.


This process is called opening a file.


After completing all operations, the connection should be terminated safely using the close() function.



## Opening a File


A file can be opened using the open() function.


Syntax:


fileObject.open("filename");



When a file is opened:


- The program creates a connection with the file.
- Reading or writing operations become possible.



## Closing a File


After completing file operations, the file should be closed.


Syntax:


fileObject.close();



Closing a file:


- Releases system resources.
- Saves buffered data.
- Prevents data corruption.



## Example Program


#include<iostream>

#include<fstream>

using namespace std;


int main()

{

    ofstream file;


    file.open("employee.txt");


    file<<"Employee ID : 101"<<endl;

    file<<"Employee Name : Rahul Kumar"<<endl;


    file.close();


    cout<<"Employee File Saved Successfully";


    return 0;

}



## Output


Employee File Saved Successfully



## Content of employee.txt


Employee ID : 101

Employee Name : Rahul Kumar



## Importance of Opening and Closing Files


Proper file handling:


- Prevents data corruption.
- Releases system resources.
- Improves application stability.
- Ensures complete data storage.
- Supports safe operations.



## Best Practice


Professional developers always close files after completing operations.


This ensures that all data is properly written to storage before the program terminates.



## Real-World Applications


Opening and closing files are used in:


### Banking Systems

Managing customer records.


### Payroll Software

Saving employee information.


### Library Systems

Maintaining book records.


### Inventory Applications

Updating product information.



## Key Points


Remember:


- Files must be opened before use.
- open() creates a connection with a file.
- close() terminates the connection.
- Proper closing prevents data loss.


Opening and closing files correctly is a fundamental practice in professional C++ development.

`

};


export default lesson3;