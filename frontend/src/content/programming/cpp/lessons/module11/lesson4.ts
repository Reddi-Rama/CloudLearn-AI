const lesson4 = {

  id: "lesson4",

  title: "Multiple Template Parameters",

  content: `

# Multiple Template Parameters


## Introduction


In real-world applications, a single data type is often not enough to represent complete information.


For example:


An employee record may contain:


- Employee ID as integer.
- Employee name as string.
- Salary as floating-point value.


A single template parameter cannot represent different types of data together.


To solve this problem, C++ allows templates to use multiple template parameters.



## What are Multiple Template Parameters?


Multiple template parameters allow a template to accept more than one generic data type.


Each parameter represents a placeholder for a data type.



## Syntax


template <typename T1, typename T2>


class ClassName

{

    // Generic members

};



Here:


T1 represents the first data type.


T2 represents the second data type.



## Example: Employee Record


#include<iostream>

using namespace std;


template <typename T1, typename T2>


class Employee

{

private:


    T1 employeeID;

    T2 employeeName;


public:


    Employee(T1 id, T2 name)

    {

        employeeID = id;

        employeeName = name;

    }


    void display()

    {

        cout << employeeID << endl;

        cout << employeeName;

    }

};



int main()

{

    Employee<int,string> employee1(

        101,

        "Rahul"

    );


    employee1.display();


    return 0;

}



Output:


101

Rahul



## Working of Multiple Parameters


In the example:


T1 becomes:


int


T2 becomes:


string



The compiler creates a class:


Employee<int,string>



The same template can support different combinations.



## More Than Two Parameters


C++ allows any number of template parameters.


Example:


template <typename T1, typename T2, typename T3>


class Student

{

};



A class can store:

- Roll number.
- Name.
- CGPA.



## Advantages of Multiple Template Parameters


They provide:


### Increased Flexibility

Different types can be combined.


### Code Reusability

One template can handle many combinations.


### Better Data Representation

Complex objects can be modeled easily.


### Reduced Duplicate Code

Separate classes are not required.



## Applications


Multiple template parameters are used in:


### Banking Systems


Customer records:

- Account number.
- Customer name.
- Balance.



### Payroll Systems


Employee details:

- ID.
- Name.
- Salary.



### Student Management Systems


Student details:

- Roll number.
- Name.
- Marks.



### Enterprise Applications


Large systems containing different types of information.



## Example Real-World Design


A product record may contain:


Product ID:

int


Product Name:

string


Price:

double



A template can represent all these values together.



## Key Points


Remember:


- Multiple template parameters allow multiple data types.
- Parameters are separated using commas.
- They improve flexibility and reusability.
- They are useful for complex data structures.


Multiple template parameters make C++ templates powerful enough to design professional and reusable software systems.

`

};


export default lesson4;