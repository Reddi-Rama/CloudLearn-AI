const lesson5 = {

  id: "lesson5",

  title: "Return Type and Return Statement",

  content: `
# Return Type and Return Statement

Some functions perform operations and produce results that must be sent back to the calling function.

This process is handled using return values.


## Return Type

The return type specifies the type of value that a function sends back after execution completes.

Example:

\`\`\`cpp
double calculateSalary(double basicSalary, double allowance)
{
    return basicSalary + allowance;
}
\`\`\`

Here:

- double is the return type.
- The function returns a decimal value.


## Return Statement

The return statement sends a value back to the calling function.

It also immediately terminates the function execution.


Example:

\`\`\`cpp
int add(int a, int b)
{
    return a + b;
}
\`\`\`

The result of the calculation is returned to the place where the function was called.


## Complete Example

\`\`\`cpp
#include<iostream>
using namespace std;

double calculateTotalAmount(double price, int quantity)
{
    return price * quantity;
}

int main()
{
    double total;

    total = calculateTotalAmount(49999.99,2);

    cout<<"Total Bill Amount : "
        <<total;

    return 0;
}
\`\`\`


## Types of Values Returned

Functions can return:

- Integer values.
- Floating point values.
- Characters.
- Boolean values.
- Objects.


## Importance of Return Values

Return values create communication between functions.

One function can perform a task and provide the result to another part of the program.


## Real World Applications

Return values are commonly used in:

- Banking calculations.
- Billing systems.
- Scientific applications.
- Data processing systems.
- Financial software.


## Best Practice

Choose the correct return type because it defines what information a function can provide to the rest of the program.

Functions with proper return values make programs more modular and reusable.
`

};

export default lesson5;