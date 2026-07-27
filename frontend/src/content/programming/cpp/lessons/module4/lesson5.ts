const lesson5 = {

  id: "lesson5",

  title: "else-if Ladder",

  previousLesson:
    "/lesson/cpp-development/module4/lesson4",

  nextLesson:
    "/lesson/cpp-development/module4/lesson6",


  content: `
# else-if Ladder

Many real-world problems involve more than two possible outcomes.

Examples:

- A grading system assigns different grades.
- A tax system applies different tax rates.
- An e-commerce platform provides different discounts.
- A shipping system calculates charges based on categories.

For such situations, the else-if ladder is used.



## What is else-if Ladder?

The else-if ladder allows a program to check multiple conditions one after another.

The compiler evaluates conditions from top to bottom.

When a condition becomes true, its block executes and the remaining conditions are skipped.



## Syntax

\`\`\`cpp
if(condition1)
{
    statements;
}
else if(condition2)
{
    statements;
}
else if(condition3)
{
    statements;
}
else
{
    statements;
}
\`\`\`



## How else-if Ladder Works?

Execution process:

1. First condition is checked.
2. If true, the corresponding block executes.
3. If false, the next condition is checked.
4. This continues until a true condition is found.
5. If no condition is true, the else block executes.



## Example: Grading System

\`\`\`cpp
int marks = 85;

if(marks >= 90)
{
    cout << "Grade A";
}
else if(marks >= 75)
{
    cout << "Grade B";
}
else if(marks >= 60)
{
    cout << "Grade C";
}
else
{
    cout << "Grade F";
}
\`\`\`

Output:

\`\`\`
Grade B
\`\`\`



## Importance of Condition Order

The order of conditions is very important.

Example:

\`\`\`cpp
if(marks >= 40)
{
    cout << "Pass";
}
else if(marks >= 90)
{
    cout << "Excellent";
}
\`\`\`

The second condition will never execute because 90 is already greater than 40.

Always place more specific conditions first.



## Real-World Applications

else-if ladder is used in:

- Grading systems.
- Salary calculations.
- Tax systems.
- Discount management.
- Loan processing.



## Advantages

The else-if ladder:

- Handles multiple choices.
- Keeps decision logic organized.
- Improves program flexibility.



## Best Practices

- Arrange conditions carefully.
- Avoid unnecessary conditions.
- Keep logic simple.
- Use meaningful conditions.



## Key Points

- else-if ladder checks multiple conditions.
- Execution stops after the first true condition.
- It is useful for multiple possible outcomes.



## Lesson Summary

The else-if ladder provides an efficient way to handle multiple decision paths in C++ programs.
`,


  examples: [

    {
      title: "Grade Calculation Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int marks = 78;

    if(marks >= 90)
    {
        cout << "Grade A";
    }
    else if(marks >= 75)
    {
        cout << "Grade B";
    }
    else if(marks >= 60)
    {
        cout << "Grade C";
    }
    else
    {
        cout << "Fail";
    }

    return 0;
}
`,

      output:
`
Grade B
`,
    },


  ],

};


export default lesson5;