const lesson14 = {

  id: "lesson14",

  title: "Recursive Functions",

  content: `
# Recursive Functions

Most functions perform their work by calling other functions.

However, C++ allows a function to call itself.

This technique is known as recursion, and a function that calls itself is called a recursive function.


## What is Recursion?

Recursion is a programming technique where a problem is solved by breaking it into smaller versions of the same problem.

It is useful for problems that have a repetitive structure.


## Applications of Recursion

Recursion is commonly used in:

- Factorial calculations.
- Tree traversal.
- Directory processing.
- Divide and conquer algorithms.
- Mathematical sequences.


## Components of a Recursive Function

Every recursive function contains two important parts:

### Base Case

The condition that stops the recursion.

Without a base case, the function will continue calling itself indefinitely.


### Recursive Case

The part where the function calls itself with a smaller problem.


## Example: Factorial Calculation

Mathematically:

5! = 5 × 4 × 3 × 2 × 1


It can also be represented as:

5! = 5 × 4!

4! = 4 × 3!

3! = 3 × 2!


## C++ Example

\`\`\`cpp
#include<iostream>
using namespace std;


int factorial(int number)
{
    if(number == 1)
    {
        return 1;
    }

    return number * factorial(number - 1);
}


int main()
{
    int result;

    result = factorial(5);

    cout<<"Factorial = "
        <<result;

    return 0;
}
\`\`\`


## Working Process

For factorial(5):

1. factorial(5) calls factorial(4).
2. factorial(4) calls factorial(3).
3. factorial(3) calls factorial(2).
4. factorial(2) calls factorial(1).
5. Base case returns the result.


## Advantages of Recursion

Recursion provides:

- Simple solutions for complex problems.
- Cleaner code for hierarchical problems.
- Natural implementation of mathematical algorithms.


## Disadvantages of Recursion

Recursion may:

- Consume more memory.
- Be slower than loops in some cases.
- Cause stack overflow if the base case is missing.


## Real World Applications

Recursion is used in:

- File system navigation.
- Artificial intelligence algorithms.
- Searching algorithms.
- Data structure operations.


Recursion is one of the most important concepts in computer science and forms the foundation of many advanced algorithms and data structures.
`

};

export default lesson14;