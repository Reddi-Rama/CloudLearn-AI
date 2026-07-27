const lesson5 = {

  id: "lesson5",

  title: "Finding Sum and Average of Array Elements",

  content: `
# Finding Sum and Average of Array Elements


## Introduction

Arrays are commonly used for storing collections of numerical data.

One of the most common operations performed on arrays is calculating:

- Sum of elements.
- Average of elements.


## Finding Sum of Array Elements

The sum of an array is obtained by adding all elements together.

Example:

Array:

\`\`\`
10 20 30 40 50
\`\`\`

Sum:

\`\`\`
10 + 20 + 30 + 40 + 50 = 150
\`\`\`


## Algorithm

To calculate the sum:

1. Create a variable to store the total.
2. Initialize it with zero.
3. Traverse the array.
4. Add every element to the total.
5. Display the result.


## C++ Example

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int numbers[5] = {10,20,30,40,50};

    int sum = 0;

    for(int i = 0; i < 5; i++)
    {
        sum = sum + numbers[i];
    }

    cout<<"Sum = "<<sum;

    return 0;
}
\`\`\`


Output:

\`\`\`
Sum = 150
\`\`\`


## Finding Average

Average represents the total value divided by the number of elements.


Formula:

\`\`\`
Average = Sum / Number of Elements
\`\`\`


Example:

\`\`\`
Average = 150 / 5

Average = 30
\`\`\`


## C++ Example

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int marks[5] = {85,90,78,88,92};

    int sum = 0;

    for(int i = 0; i < 5; i++)
    {
        sum += marks[i];
    }

    float average;

    average = sum / 5.0;

    cout<<"Average Marks = "
        <<average;

    return 0;
}
\`\`\`


## Real World Applications

Sum and average calculations are used in:

- Student result systems.
- Financial analysis.
- Sales reports.
- Scientific calculations.
- Data processing.


## Importance

Calculating sum and average helps convert raw data into meaningful information.

For example:

- Total sales from daily transactions.
- Average marks of students.
- Average temperature measurements.


## Best Practices

When calculating values from arrays:

- Initialize variables properly.
- Use appropriate data types.
- Traverse the complete array.
- Avoid integer division mistakes.


Array calculations are the foundation for many advanced data processing operations.
`

};

export default lesson5;