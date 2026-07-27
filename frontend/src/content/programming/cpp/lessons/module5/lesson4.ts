const lesson4 = {

  id: "lesson4",

  title: "Function Parameters and Arguments",

  content: `
# Function Parameters and Arguments

Most functions need information in order to perform useful operations.

For example:

- A salary calculation function requires employee details.
- A tax calculation function requires income information.
- A billing function requires product price and quantity.


Parameters and arguments allow information to be passed to functions.


## Parameters

Parameters are variables declared inside the function definition.

Example:

\`\`\`cpp
int calculateTotal(int price, int quantity)
{
    return price * quantity;
}
\`\`\`

Here:

- price and quantity are parameters.


## Arguments

Arguments are the actual values supplied during a function call.

Example:

\`\`\`cpp
calculateTotal(500, 3);
\`\`\`

Here:

- 500 and 3 are arguments.


## Difference Between Parameters and Arguments

Parameters:

- Defined inside the function.
- Act as placeholders for incoming values.


Arguments:

- Passed during function calling.
- Provide actual data to the function.


## Example

Consider an inventory management system.

\`\`\`cpp
#include<iostream>
using namespace std;

void displayStock(string productName, int quantity)
{
    cout<<"Product : "<<productName<<endl;
    cout<<"Available Stock : "<<quantity<<endl;
}

int main()
{
    displayStock("Laptop",25);
    displayStock("Keyboard",150);
    displayStock("Mouse",300);

    return 0;
}
\`\`\`


The same function can process different products by passing different arguments.


## Advantages of Parameters and Arguments

They provide:

- Code reusability.
- Flexible function behavior.
- Reduced code duplication.
- Better program organization.


## Real World Applications

Parameters and arguments are commonly used in:

- Banking applications.
- E-commerce systems.
- Hospital management systems.
- Employee management software.


Using parameters allows a single function to handle different types of data without rewriting code.
`

};

export default lesson4;