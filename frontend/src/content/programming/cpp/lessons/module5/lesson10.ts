const lesson10 = {

  id: "lesson10",

  title: "Functions with Arguments and Return Value",

  content: `
# Functions with Arguments and Return Value

Functions with arguments and return values represent the most powerful and most frequently used category of functions in professional software development.

These functions accept information from the caller, process that information, and return meaningful results.


## Why Are These Functions Important?

This combination provides:

- Flexibility
- Reusability
- Better program organization
- Reduced code duplication


## Syntax

\`\`\`cpp
returnType functionName(parameters)
{
    statements;

    return value;
}
\`\`\`


## Example

Consider an online shopping application that calculates the final bill amount after applying discounts.

\`\`\`cpp
#include<iostream>
using namespace std;

double calculateFinalAmount(
    double price,
    int quantity,
    double discountPercentage)
{
    double totalAmount;

    double discount;

    double finalAmount;


    totalAmount = price * quantity;


    discount =
        totalAmount *
        discountPercentage / 100;


    finalAmount =
        totalAmount - discount;


    return finalAmount;
}


int main()
{
    double finalBill;


    finalBill =
        calculateFinalAmount(
            45000,
            2,
            10
        );


    cout<<"Final Bill Amount: "
        <<finalBill;


    return 0;
}
\`\`\`


## Working Process

The function:

1. Receives product price.
2. Receives quantity.
3. Receives discount percentage.
4. Calculates total amount.
5. Applies discount.
6. Returns the final result.


## Applications

These functions are extensively used in:

- Banking Applications
- Payroll Systems
- Inventory Management
- Financial Software
- Scientific Calculations


## Advantages

Functions with arguments and return values provide:

- Maximum code reuse.
- Better modularity.
- Easy testing.
- Clear data flow.


## Professional Usage

Most business logic in enterprise applications is implemented using this type of function because it provides maximum flexibility.

Well-designed functions make large software systems easier to develop and maintain.
`

};

export default lesson10;