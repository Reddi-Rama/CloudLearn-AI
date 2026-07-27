const lesson12 = {

  id: "lesson12",

  title: "Call by Value",

  content: `
# Call by Value

When arguments are passed to a function, C++ provides different methods for transferring values.

The simplest and most commonly used method is called Call by Value.


## What is Call by Value?

In Call by Value, the function receives a copy of the original variable.

Any changes made inside the function affect only the copied value and do not modify the original variable.


## Syntax

\`\`\`cpp
void functionName(dataType variable)
{
    statements;
}
\`\`\`


## Example

Consider a banking system that processes an employee bonus.

\`\`\`cpp
#include<iostream>
using namespace std;


void processBonus(double salary)
{
    salary = salary + 5000;

    cout<<"Updated Salary Inside Function: "
        <<salary<<endl;
}


int main()
{
    double employeeSalary = 50000;


    processBonus(employeeSalary);


    cout<<"Original Salary Outside Function: "
        <<employeeSalary;


    return 0;
}
\`\`\`


## Output

\`\`\`
Updated Salary Inside Function: 55000
Original Salary Outside Function: 50000
\`\`\`


## How Does It Work?

When the function is called:

1. A copy of the variable is created.
2. The function works with the copied value.
3. Changes affect only the copy.
4. The original variable remains unchanged.


## Advantages of Call by Value

Call by Value provides:

- Data protection.
- Prevention of accidental modification.
- Simple implementation.
- Easy understanding.


## When To Use Call by Value?

It is preferred when:

- Original data should remain unchanged.
- Only calculations are required.
- Temporary processing is needed.
- Data safety is important.


## Real World Applications

Call by Value is commonly used in:

- Mathematical calculations.
- Data analysis.
- Utility functions.
- Temporary processing operations.


Call by Value is beginner-friendly and is one of the safest ways to pass information to functions.
`

};


export default lesson12;