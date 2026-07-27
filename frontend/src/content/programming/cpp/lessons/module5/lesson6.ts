const lesson6 = {

  id: "lesson6",

  title: "Types of Functions",

  content: `
# Types of Functions

As software systems become larger, not all functions behave in the same manner.

Some functions perform actions without receiving any information, while others process data and return calculated results.

C++ classifies functions based on:

- Whether they accept parameters.
- Whether they return values.


## Categories of Functions

C++ functions are generally divided into four categories:

- Functions with no arguments and no return value.
- Functions with arguments and no return value.
- Functions with no arguments and return value.
- Functions with arguments and return value.


## Function Without Arguments and Without Return Value

These functions do not receive information from the caller and do not send any result back.

Example:

\`\`\`cpp
void displayWelcome()
{
    cout<<"Welcome to C++";
}
\`\`\`

They are commonly used for:

- Displaying messages.
- Showing menus.
- Initializing components.


## Function With Arguments and Without Return Value

These functions receive information from the caller but do not return any result.

Example:

\`\`\`cpp
void displayStudent(string name)
{
    cout<<"Student Name: "<<name;
}
\`\`\`

They are useful for displaying or processing information.


## Function Without Arguments and With Return Value

These functions do not receive input but return a value.

Example:

\`\`\`cpp
int getYear()
{
    return 2026;
}
\`\`\`

They are commonly used for:

- Configuration values.
- Default settings.
- Generated information.


## Function With Arguments and Return Value

These are the most commonly used functions in professional software development.

Example:

\`\`\`cpp
double calculateTax(double income)
{
    return income * 0.18;
}
\`\`\`

They:

- Accept input.
- Process information.
- Return results.


## Importance of Function Types

Choosing the correct function type improves:

- Program design.
- Code readability.
- Reusability.
- Maintainability.


Most professional applications rely heavily on functions with arguments and return values because they provide maximum flexibility.
`

};

export default lesson6;