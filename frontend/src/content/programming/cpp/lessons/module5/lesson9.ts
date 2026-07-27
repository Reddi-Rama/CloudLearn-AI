const lesson9 = {

  id: "lesson9",

  title: "Functions with No Arguments and Return Value",

  content: `
# Functions with No Arguments and Return Value

In some situations, a function generates information internally and returns the result to the calling function without requiring any external input.

These functions are useful when the required data is already available inside the function or can be generated automatically.


## Syntax

\`\`\`cpp
returnType functionName()
{
    statements;

    return value;
}
\`\`\`


## Example

Consider a function that returns the current bonus percentage used by an organization.

\`\`\`cpp
#include<iostream>
using namespace std;

double getBonusPercentage()
{
    return 12.5;
}

int main()
{
    double bonus;

    bonus = getBonusPercentage();

    cout<<"Current Bonus Percentage: "
        <<bonus<<"%";

    return 0;
}
\`\`\`


The function receives no information from the caller but provides useful information through its return value.


## Characteristics

Functions with no arguments and return value:

- Do not accept input.
- Generate information internally.
- Return a result to the caller.


## Common Applications

These functions are commonly used for:

- Configuration values.
- System settings.
- Default parameters.
- Generated information.
- Utility operations.


## Advantages

They provide:

- Code reuse.
- Better organization.
- Simple access to commonly required values.
- Improved readability.


## Real World Applications

Examples include:

- Getting application version information.
- Returning default system settings.
- Providing fixed configuration values.
- Generating predefined results.


## Best Practice

Use this type of function when the required information does not depend on external input but still needs to be shared with other parts of the program.


These functions act as information providers inside software applications.
`

};

export default lesson9;