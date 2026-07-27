const lesson7 = {

  id: "lesson7",

  title: "Finding Maximum and Minimum Values in Arrays",

  content: `
# Finding Maximum and Minimum Values in Arrays


## Introduction

Arrays often contain numerical data where we need to identify the largest or smallest value.

Examples:

- Highest student mark.
- Lowest product price.
- Maximum player score.
- Minimum temperature value.


## Finding Maximum Value

The maximum value is the largest element present in an array.


Example:

Array:

\`\`\`
25 40 10 60 30
\`\`\`

Maximum value:

\`\`\`
60
\`\`\`


## Algorithm to Find Maximum

Steps:

1. Assume the first element is the maximum.
2. Compare it with every remaining element.
3. If a larger value is found, update the maximum.
4. Continue until the array ends.


## C++ Example

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int numbers[5] = {25,40,10,60,30};

    int maximum = numbers[0];


    for(int i = 1; i < 5; i++)
    {
        if(numbers[i] > maximum)
        {
            maximum = numbers[i];
        }
    }


    cout<<"Maximum Value = "
        <<maximum;


    return 0;
}
\`\`\`


Output:

\`\`\`
Maximum Value = 60
\`\`\`


## Finding Minimum Value

The minimum value is the smallest element present in an array.


Example:

Array:

\`\`\`
25 40 10 60 30
\`\`\`

Minimum value:

\`\`\`
10
\`\`\`


## C++ Example

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int numbers[5] = {25,40,10,60,30};

    int minimum = numbers[0];


    for(int i = 1; i < 5; i++)
    {
        if(numbers[i] < minimum)
        {
            minimum = numbers[i];
        }
    }


    cout<<"Minimum Value = "
        <<minimum;


    return 0;
}
\`\`\`


Output:

\`\`\`
Minimum Value = 10
\`\`\`


## Real World Applications

Finding maximum and minimum values is used in:

- Examination systems.
- Sales analysis.
- Weather monitoring.
- Sports applications.
- Financial applications.


## Importance

These operations help transform raw data into meaningful information.

Examples:

- Highest marks indicate top performance.
- Lowest price helps customers find cheaper products.
- Maximum sales identifies successful products.


## Best Practices

While finding maximum or minimum:

- Initialize with the first array element.
- Traverse the complete array.
- Use appropriate data types.
- Avoid assuming fixed values.


Finding maximum and minimum values is a fundamental array operation used in many real-world applications.
`

};

export default lesson7;