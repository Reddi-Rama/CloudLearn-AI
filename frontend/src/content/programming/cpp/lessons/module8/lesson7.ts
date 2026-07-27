const lesson7 = {

  id: "lesson7",

  title: "Passing Structures by Reference",

  content: `
# Passing Structures by Reference


## Introduction

When a structure is passed to a function normally, a copy of the structure is created.

For small structures, this may not create a problem.

However, large structures containing many members require more memory and processing time.


C++ provides passing structures by reference to avoid unnecessary copying.


## What is Passing by Reference?

Passing by reference means the function receives the original structure instead of creating a copy.


The function works directly with the original data.


Syntax:


\`\`\`cpp
returnType functionName(structureName &variable)
{
}
\`\`\`


The ampersand (&) indicates a reference.


## Example Without Reference


\`\`\`cpp
void display(Student student)
{
}
\`\`\`


A copy of the structure is created.


Changes inside the function do not affect the original structure.


## Example Using Reference


\`\`\`cpp
void update(Student &student)
{
}
\`\`\`


The original structure is modified directly.


## Example Program


\`\`\`cpp
#include<iostream>
using namespace std;


struct Student
{
    int rollNumber;
    float marks;
};


void updateMarks(Student &student)
{
    student.marks = 98.5;
}


int main()
{
    Student student1;


    student1.rollNumber = 101;

    student1.marks = 85.5;


    updateMarks(student1);


    cout<<"Updated Marks: "
        <<student1.marks;


    return 0;
}
\`\`\`


Output:


\`\`\`
Updated Marks: 98.5
\`\`\`


## Advantages of Passing Structures by Reference

Passing structures by reference provides:

- Faster execution.
- Less memory usage.
- Ability to modify original data.
- Better performance for large structures.


## Constant Reference

If a function should not modify the structure, a constant reference can be used.


Example:


\`\`\`cpp
void display(const Student &student)
{
}
\`\`\`


This prevents accidental changes.


## Example: Employee Update System


\`\`\`cpp
struct Employee
{
    int id;
    double salary;
};


void increaseSalary(Employee &employee)
{
    employee.salary += 5000;
}
\`\`\`


The original employee record is updated.


## Applications

Passing structures by reference is used in:

- Database systems.
- Banking applications.
- Large software projects.
- Enterprise applications.


## Best Practices

While passing structures:

- Use references for large structures.
- Use const references when modification is not required.
- Avoid unnecessary copying.
- Keep functions clear.


## Key Points

Remember:

- Normal passing creates a copy.
- Reference passing works with original data.
- & is used for references.
- It improves efficiency.


Passing structures by reference is an important technique for writing efficient and professional C++ programs.
`

};

export default lesson7;