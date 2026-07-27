const lesson10 = {

  id: "lesson10",

  title: "Binary File Handling",

  content: `

# Binary File Handling


## Introduction


Files can store data in two main formats:

- Text format.
- Binary format.


Text files store data in human-readable form, while binary files store data in machine-readable format.


Binary file handling is useful when applications require faster processing and efficient storage.



## What are Binary Files?


Binary files store information as raw bytes instead of characters.


The data is stored exactly as it exists in computer memory.


Examples:


- Images.
- Videos.
- Database records.
- Executable files.



## Advantages of Binary Files


Binary files provide:


### Faster Processing


Data can be read and written quickly because no conversion is required.


### Reduced Storage Size


Binary data generally occupies less space.


### Accurate Data Representation


Data is stored in its original format.


### Efficient Object Storage


Complete objects can be stored directly.



## Binary File Streams


Binary files are opened using the ios::binary mode.


Example:


file.open("data.dat", ios::binary);



## Writing Data to Binary Files


The write() function is used to store binary data.


Syntax:


file.write((char*)&object, sizeof(object));



## Reading Data from Binary Files


The read() function retrieves binary data.


Syntax:


file.read((char*)&object, sizeof(object));



## Example Program


#include<iostream>

#include<fstream>

using namespace std;


struct Student

{

    int rollNumber;

    char name[30];

};


int main()

{

    Student student = {101,"Rahul"};


    ofstream file("student.dat", ios::binary);


    file.write((char*)&student, sizeof(student));


    file.close();


    cout<<"Binary File Created Successfully";


    return 0;

}



## Output


Binary File Created Successfully



## Applications of Binary Files


Binary files are used in:


### Banking Software


For storing financial records.


### Database Systems


For efficient data storage.


### Multimedia Applications


For images, audio, and video files.


### Game Development


For storing game data and resources.



## Text File vs Binary File


Text File:


- Human-readable.
- Larger size.
- Slower processing.


Binary File:


- Machine-readable.
- Smaller size.
- Faster processing.



## Key Points


Remember:


- Binary files store raw bytes.
- ios::binary is used for binary operations.
- write() stores data.
- read() retrieves data.
- Binary files improve performance.


Binary file handling is important for applications where speed and storage efficiency are required.

`

};


export default lesson10;