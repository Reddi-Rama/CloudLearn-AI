const lesson4 = {

  id: "lesson4",

  title: "Logical Operators",

  previousLesson:
    "/lesson/cpp-development/module3/lesson3",

  nextLesson:
    "/lesson/cpp-development/module3/lesson5",


  content: `
# Logical Operators

Many real-world decisions depend on multiple conditions.

For example:

A student receives a scholarship only if:

- Attendance is above 75%.
- Marks are above 85%.

Such situations require logical operators.



## What are Logical Operators?

Logical operators combine multiple conditions and produce a boolean result.

They are mainly used with relational expressions.



## Logical Operators in C++

C++ provides three logical operators:

| Operator | Meaning |
|----------|---------|
| && | Logical AND |
| || | Logical OR |
| ! | Logical NOT |



## Logical AND (&&)

The AND operator returns true only when all conditions are true.

Example:

\`\`\`cpp
(age >= 18) && (citizen == true)
\`\`\`

Both conditions must be satisfied.



Truth Table:

| Condition 1 | Condition 2 | Result |
|---|---|---|
| true | true | true |
| true | false | false |
| false | true | false |
| false | false | false |



## Logical OR (||)

The OR operator returns true if at least one condition is true.

Example:

\`\`\`cpp
(marks >= 90) || (sportsQuota == true)
\`\`\`



Truth Table:

| Condition 1 | Condition 2 | Result |
|---|---|---|
| true | true | true |
| true | false | true |
| false | true | true |
| false | false | false |



## Logical NOT (!)

The NOT operator reverses the logical value.

Example:

\`\`\`cpp
!isLoggedIn
\`\`\`

If:

\`\`\`
isLoggedIn = true
\`\`\`

Result:

\`\`\`
false
\`\`\`



## Applications of Logical Operators

Logical operators are used in:

- Authentication systems.
- Access control.
- Validation rules.
- Business applications.
- Security systems.



## Real-World Example

A banking application may check:

\`\`\`cpp
(balance > 0) && (accountActive == true)
\`\`\`

before allowing a transaction.



## Importance of Logical Operators

They allow programs to:

- Combine conditions.
- Make complex decisions.
- Control program execution.



## Best Practices

- Use parentheses for clarity.
- Avoid very complex conditions.
- Use meaningful variable names.
- Keep conditions readable.



## Key Points

- Logical operators combine conditions.
- && requires all conditions to be true.
- || requires at least one condition to be true.
- ! reverses a condition.



## Lesson Summary

Logical operators allow C++ programs to make intelligent decisions by combining multiple conditions.
`,



  examples: [

    {
      title: "AND Operator Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    int age = 20;

    bool citizen = true;

    cout << ((age >= 18) && citizen);

    return 0;
}
`,

      output:
`
1
`,
    },


    {
      title: "OR Operator Example",

      code: `
#include <iostream>

using namespace std;

int main()
{
    bool admin = false;

    bool manager = true;

    cout << (admin || manager);

    return 0;
}
`,

      output:
`
1
`,
    },

  ],

};


export default lesson4;