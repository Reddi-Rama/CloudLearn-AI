const lesson6 = {

  id: "lesson6",

  title: "Structures with Functions",

  content: `
# Structures with Functions


## Introduction

Structures are used to group related data together.

However, in real-world applications, data alone is not enough.

Programs also need operations that can process this data.

C++ allows structures to work with functions so that data can be processed efficiently.


## Passing Structure Members to Functions

Individual structure members can be passed to functions like normal variables.


Example:


\`\`\`cpp
#include<iostream>
using namespace std;


struct Student
{
    int rollNumber;
    float marks;
};


void display(int roll, float marks)
{
    cout<<"Roll Number: "
        <<roll
        <<endl;

    cout<<"Marks: "
        <<marks;
}


int main()
{
    Student student1;


    student1.rollNumber = 101;

    student1.marks = 95.5;


    display(
        student1.rollNumber,
        student1.marks
    );


    return 0;
}
\`\`\`


Output:


\`\`\`
Roll Number: 101

Marks: 95.5
\`\`\`


## Passing Entire Structure to a Function

Instead of passing individual members, the complete structure can be passed as an argument.


Syntax:


\`\`\`cpp
functionName(structureVariable);
\`\`\`


Example:


\`\`\`cpp
void display(Student student1)
{
    cout<<student1.name;
}
\`\`\`


The function receives a copy of the complete structure.


## Example Program


\`\`\`cpp
#include<iostream>
using namespace std;


struct Employee
{
    int id;
    string name;
    double salary;
};


void displayEmployee(Employee employee)
{
    cout<<"ID : "
        <<employee.id
        <<endl;


    cout<<"Name : "
        <<employee.name
        <<endl;


    cout<<"Salary : "
        <<employee.salary;
}


int main()
{
    Employee employee1;


    employee1.id = 101;

    employee1.name = "Ravi";

    employee1.salary = 55000;


    displayEmployee(employee1);


    return 0;
}
\`\`\`


Output:


\`\`\`
ID : 101

Name : Ravi

Salary : 55000
\`\`\`


## Returning Structures from Functions

Functions can also return complete structures.


Example:


\`\`\`cpp
Student createStudent()
{
    Student s;

    return s;
}
\`\`\`


This is useful when functions create and return records.


## Advantages of Using Structures with Functions

Structures with functions provide:

- Better code organization.
- Reusable operations.
- Easier maintenance.
- Improved readability.


## Applications

Used in:

- Banking software.
- Employee management.
- Student systems.
- Inventory applications.


## Best Practices

While using structures with functions:

- Pass only required data.
- Use meaningful function names.
- Keep functions focused on one task.
- Use references for large structures.


Structures combined with functions create a strong foundation for designing modular C++ applications.
`

};

export default lesson6;