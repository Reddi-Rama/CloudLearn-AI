const lesson5 = {

  id: "lesson5",

  title: "Modifying Variables Using Pointers",

  content: `
# Modifying Variables Using Pointers


## Introduction

One of the powerful features of pointers is the ability to modify variables directly through their memory addresses.

Normally, variables are modified by using their names.

Pointers provide another way to access and update the same data.


## Modifying Variables Through Pointers

When a pointer stores the address of a variable, changing the value using the pointer changes the original variable.


Example:


\`\`\`cpp
#include<iostream>
using namespace std;


int main()
{
    int balance = 5000;


    int *ptr = &balance;


    *ptr = 8000;


    cout<<"Balance: "
        <<balance;


    return 0;
}
\`\`\`


Output:

\`\`\`
Balance: 8000
\`\`\`


The value of balance changes because ptr points to the same memory location.


## Relationship Between Variable and Pointer

Example:


\`\`\`cpp
int number = 10;

int *ptr = &number;
\`\`\`


Initially:


\`\`\`
number = 10
ptr → address of number
\`\`\`


After:


\`\`\`cpp
*ptr = 50;
\`\`\`


The result becomes:


\`\`\`
number = 50
\`\`\`


## Example: Updating Employee Salary

\`\`\`cpp
#include<iostream>
using namespace std;


void increaseSalary(int *salary)
{
    *salary = *salary + 5000;
}


int main()
{
    int employeeSalary = 40000;


    increaseSalary(&employeeSalary);


    cout<<"Updated Salary: "
        <<employeeSalary;


    return 0;
}
\`\`\`


Output:

\`\`\`
Updated Salary: 45000
\`\`\`


The function modifies the original variable because it receives its address.


## Pointers and Functions

Pointers are commonly used with functions because they allow functions to modify original data.

Advantages:

- Avoid unnecessary copying.
- Allow multiple values to be modified.
- Improve performance.


## Swapping Two Values Using Pointers

Example:


\`\`\`cpp
#include<iostream>
using namespace std;


void swapNumbers(int *a, int *b)
{
    int temp;

    temp = *a;

    *a = *b;

    *b = temp;
}


int main()
{
    int x = 10;
    int y = 20;


    swapNumbers(&x,&y);


    cout<<x<<" "<<y;


    return 0;
}
\`\`\`


Output:

\`\`\`
20 10
\`\`\`


## Applications

Modifying variables using pointers is used in:

- Banking applications.
- Data structure implementations.
- Memory management.
- System programming.


## Advantages

Pointers provide:

- Direct memory access.
- Faster data modification.
- Efficient function communication.
- Better control over resources.


## Best Practices

While modifying variables using pointers:

- Ensure pointers contain valid addresses.
- Avoid modifying data unexpectedly.
- Use nullptr checks.
- Keep pointer usage clear and readable.


Pointers provide powerful control over data by allowing programs to directly access and modify memory.
`

};

export default lesson5;