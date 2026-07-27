const lesson9 = {

  id: "lesson9",

  title: "Pointers and Functions",

  content: `
# Pointers and Functions


## Introduction

Functions normally receive copies of values when arguments are passed.

However, sometimes a function needs to modify the original data.

Pointers allow functions to access and modify variables directly using their memory addresses.


## Passing Addresses to Functions

Instead of passing the actual value, we can pass the address of a variable.


Example:

\`\`\`cpp
functionName(&variable);
\`\`\`


The function receives the memory location and can access the original variable.


## Example: Modifying a Variable

\`\`\`cpp
#include<iostream>
using namespace std;


void updateValue(int *number)
{
    *number = 100;
}


int main()
{
    int value = 20;


    updateValue(&value);


    cout<<"Updated Value: "
        <<value;


    return 0;
}
\`\`\`


Output:

\`\`\`
Updated Value: 100
\`\`\`


## Explanation

Initially:

\`\`\`
value = 20
\`\`\`


The address of value is passed to the function.


Inside the function:

\`\`\`cpp
*number = 100;
\`\`\`


The original variable is modified.


Final result:

\`\`\`
value = 100
\`\`\`


## Swapping Values Using Pointers

Pointers are commonly used for swapping values.


Example:

\`\`\`cpp
#include<iostream>
using namespace std;


void swapNumbers(int *a, int *b)
{
    int temp;


    temp = *a;

    *a = *b;

    *b = temp;
}


int main()
{
    int x = 10;
    int y = 20;


    swapNumbers(&x,&y);


    cout<<x<<" "<<y;


    return 0;
}
\`\`\`


Output:

\`\`\`
20 10
\`\`\`


## Advantages of Using Pointers in Functions

Pointers provide:

- Modification of original variables.
- Efficient handling of large data.
- Reduced memory copying.
- Better performance.


## Passing Arrays to Functions

Arrays are automatically passed as addresses.

Example:

\`\`\`cpp
void display(int *numbers, int size)
{
    for(int i = 0; i < size; i++)
    {
        cout<<numbers[i];
    }
}
\`\`\`


The function receives the starting address of the array.


## Real World Applications

Pointers in functions are used in:

- Database systems.
- Operating systems.
- Game engines.
- Data structure implementations.
- Memory management.


## Pointer Parameters vs Normal Parameters

Normal parameter:

- Receives a copy.
- Original value remains unchanged.


Pointer parameter:

- Receives an address.
- Original value can be modified.


## Best Practices

While using pointer parameters:

- Validate pointers before use.
- Use nullptr checks.
- Avoid unnecessary modifications.
- Keep functions simple.


Pointers make functions more powerful by allowing direct communication with memory and original data.
`

};

export default lesson9;