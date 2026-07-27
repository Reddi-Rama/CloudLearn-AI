const lesson13 = {

  id: "lesson13",

  title: "Call by Reference",

  content: `
# Call by Reference

While Call by Value protects original data, some situations require a function to directly modify the variables provided by the caller.

Examples include:

- Swapping two values.
- Updating account balances.
- Modifying inventory quantities.
- Updating employee records.


## What is Call by Reference?

In Call by Reference, the function receives a reference to the original variable instead of creating a copy.

Therefore, changes made inside the function directly affect the original variable.


## Reference Operator

References are created using the & symbol.


## Syntax

\`\`\`cpp
void functionName(dataType &variable)
{
    statements;
}
\`\`\`


## Example

Consider a banking transaction where money is deposited into an account.

\`\`\`cpp
#include<iostream>
using namespace std;


void deposit(
    double &balance,
    double amount
)
{
    balance = balance + amount;
}


int main()
{
    double accountBalance = 25000;


    deposit(accountBalance,5000);


    cout<<"Updated Balance: "
        <<accountBalance;


    return 0;
}
\`\`\`


## Output

\`\`\`
Updated Balance: 30000
\`\`\`


## How Does It Work?

In Call by Reference:

1. The function receives the original variable.
2. No separate copy is created.
3. Changes directly modify the original data.


## Advantages of Call by Reference

It provides:

- Avoids unnecessary copying.
- Better performance for large data.
- Ability to modify original variables.
- Reduced memory usage.


## Call by Value vs Call by Reference

Call by Value:

- Creates a copy.
- Original value remains unchanged.
- Safer for data protection.


Call by Reference:

- Works with original data.
- Changes affect the original variable.
- Useful when modification is required.


## Real World Applications

Call by Reference is commonly used in:

- Banking systems.
- Inventory management.
- Object manipulation.
- Large data processing applications.


Modern C++ applications frequently use references because they improve efficiency and provide better control over data.
`

};


export default lesson13;