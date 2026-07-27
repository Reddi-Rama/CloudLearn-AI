const lesson8 = {

  id: "lesson8",

  title: "Functions with Arguments and No Return Value",

  content: `
# Functions with Arguments and No Return Value

Many functions require information in order to perform meaningful operations but do not need to return any results to the caller.

Such functions receive input values through parameters, perform their operations, and terminate after completing their task.


## Syntax

\`\`\`cpp
void functionName(parameters)
{
    statements;
}
\`\`\`


## Example

Consider an employee management system that displays employee information.

\`\`\`cpp
#include<iostream>
using namespace std;

void displayEmployeeDetails(
    int id,
    string name,
    double salary
)
{
    cout<<"Employee ID : "<<id<<endl;
    cout<<"Employee Name : "<<name<<endl;
    cout<<"Employee Salary : "<<salary<<endl;
}

int main()
{
    displayEmployeeDetails(
        1001,
        "Employee Name",
        75000
    );

    return 0;
}
\`\`\`


The function receives information through parameters and displays it.

No value is returned because the purpose of the function is only to present information.


## Characteristics

Functions with arguments and no return value:

- Accept data from the caller.
- Perform operations using received data.
- Do not send results back.


## Common Applications

These functions are frequently used in:

- Report generation systems.
- Data display operations.
- Notification services.
- Logging mechanisms.
- User interface modules.


## Advantages

They provide:

- Better program organization.
- Reduced code duplication.
- Separation of presentation logic and business logic.
- Improved readability.


## Real World Example

An application may use such functions to:

- Display customer details.
- Print invoices.
- Show employee information.
- Generate reports.


These functions are useful whenever a program needs to perform an action using external data without producing a return result.
`

};

export default lesson8;