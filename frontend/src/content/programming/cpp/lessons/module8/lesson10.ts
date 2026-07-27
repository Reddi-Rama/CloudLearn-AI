const lesson10 = {

  id: "lesson10",

  title: "Anonymous Structures and Typedef",

  content: `
# Anonymous Structures and Typedef


## Introduction

C++ provides several ways to make structures easier to use and manage.

Two important concepts are:

- Anonymous Structures.
- typedef with Structures.


These features improve code readability and reduce repetition.


# Anonymous Structures


## What is an Anonymous Structure?

An anonymous structure is a structure without a name.

It is used when only a single structure variable is required.


Example:


\`\`\`cpp
struct
{
    int id;
    string name;

} student;
\`\`\`


Here:

- The structure has no name.
- student is the only variable created.


## Example Program


\`\`\`cpp
#include<iostream>
using namespace std;


struct
{
    int id;
    string name;

} student;


int main()
{
    student.id = 101;

    student.name = "Kiran";


    cout<<"ID : "
        <<student.id
        <<endl;


    cout<<"Name : "
        <<student.name;


    return 0;
}
\`\`\`


Output:


\`\`\`
ID : 101

Name : Kiran
\`\`\`


## Limitations of Anonymous Structures

Anonymous structures have limitations:

- Cannot create multiple variables of the same type.
- Cannot reuse the structure.
- Not suitable for large applications.


For reusable designs, named structures are preferred.


# typedef with Structures


## What is typedef?

typedef creates an alternative name for an existing data type.


It allows programmers to create shorter and simpler names.


Syntax:


\`\`\`cpp
typedef existingType newName;
\`\`\`


## typedef with Structures

Normally, a structure variable is created as:


\`\`\`cpp
struct Student
{
    int id;
};


struct Student student1;
\`\`\`


Using typedef:


\`\`\`cpp
typedef struct
{
    int id;

} Student;


Student student1;
\`\`\`


The keyword struct is no longer required while creating variables.


## Example Program


\`\`\`cpp
#include<iostream>
using namespace std;


typedef struct
{
    int rollNumber;
    string name;

} Student;


int main()
{
    Student student1;


    student1.rollNumber = 101;

    student1.name = "Rahul";


    cout<<"Roll Number : "
        <<student1.rollNumber
        <<endl;


    cout<<"Name : "
        <<student1.name;


    return 0;
}
\`\`\`


Output:


\`\`\`
Roll Number : 101

Name : Rahul
\`\`\`


## Advantages of typedef

typedef provides:

- Shorter structure names.
- Improved readability.
- Cleaner code.
- Easier maintenance.


## Applications

typedef structures are commonly used in:

- Large software projects.
- System programming.
- Data models.
- Library development.


## Modern C++ Alternative

Modern C++ usually uses:


\`\`\`cpp
struct Student
{
    int id;
};
\`\`\`


because C++ automatically allows:


\`\`\`cpp
Student student1;
\`\`\`


without requiring typedef.


## Key Points

Remember:

- Anonymous structures are used for single-use structures.
- typedef creates alternative names.
- Named structures are preferred for reusable designs.
- typedef improves code readability.


Anonymous structures and typedef are useful techniques for organizing and simplifying structure-based programs.
`

};

export default lesson10;