const lesson6 = {

  id: "lesson6",

  title: "Searching Elements in Arrays",

  content: `
# Searching Elements in Arrays


## Introduction

Searching is the process of finding a specific element inside an array.

Many real-world applications require searching operations.

Examples:

- Finding a student record.
- Searching a product in inventory.
- Locating a player's score.
- Finding customer information.


## Linear Search

The simplest searching technique is Linear Search.

In Linear Search, each element is checked one by one until the required element is found.


## Working Process

Steps:

1. Start from the first element.
2. Compare the element with the required value.
3. If the value matches, return the position.
4. Otherwise, continue checking remaining elements.
5. If the value is not found, report that it does not exist.


## Example

Array:

\`\`\`
10 20 30 40 50
\`\`\`

Searching for:

\`\`\`
30
\`\`\`

Process:

\`\`\`
10 → Not Found

20 → Not Found

30 → Found
\`\`\`


## C++ Example

\`\`\`cpp
#include<iostream>
using namespace std;

int main()
{
    int numbers[5] = {10,20,30,40,50};

    int searchValue = 30;

    bool found = false;


    for(int i = 0; i < 5; i++)
    {
        if(numbers[i] == searchValue)
        {
            cout<<"Element Found at Index "
                <<i;

            found = true;

            break;
        }
    }


    if(found == false)
    {
        cout<<"Element Not Found";
    }


    return 0;
}
\`\`\`


Output:

\`\`\`
Element Found at Index 2
\`\`\`


## Applications of Searching

Searching is used in:

- Database systems.
- Contact applications.
- E-commerce platforms.
- File systems.
- Information retrieval systems.


## Advantages of Linear Search

- Simple to implement.
- Works on unsorted arrays.
- Easy to understand.


## Limitations

- Slow for very large arrays.
- Requires checking many elements.


## Best Practice

For small datasets, Linear Search is effective.

For large sorted datasets, advanced techniques like Binary Search are preferred.


Searching is one of the most important operations in programming and forms the basis of many algorithms.
`

};

export default lesson6;