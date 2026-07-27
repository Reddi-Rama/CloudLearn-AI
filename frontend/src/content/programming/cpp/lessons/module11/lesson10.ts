const lesson10 = {

  id: "lesson10",

  title: "STL Iterators",

  content: `

# STL Iterators


## Introduction


Iterators are one of the important components of the Standard Template Library.

They provide a way to access and traverse elements stored inside STL containers.


Iterators work similar to pointers and help algorithms communicate with containers.



## What are Iterators?


An iterator is an object that points to an element inside a container.


It is used to:

- Access container elements.
- Move through elements.
- Perform operations on data.



## Need for Iterators


Different containers have different internal structures.


For example:


Vector:

Stores elements continuously.


List:

Stores elements as linked nodes.


Iterators provide a common method to access elements regardless of the container type.



## Syntax of Iterator


containerType<dataType>::iterator iteratorName;



Example:


vector<int>::iterator it;



## Example Program Using Iterator


#include<iostream>

#include<vector>

using namespace std;


int main()

{

    vector<int> numbers;


    numbers.push_back(10);

    numbers.push_back(20);

    numbers.push_back(30);


    vector<int>::iterator it;


    for(it = numbers.begin(); it != numbers.end(); it++)

    {

        cout << *it << " ";

    }


    return 0;

}



Output:


10 20 30



## Important Iterator Functions


### begin()


Returns an iterator pointing to the first element.


Example:


numbers.begin();



### end()


Returns an iterator pointing after the last element.


Example:


numbers.end();



### advance()


Moves an iterator forward by a specific number of positions.



### next()


Returns the next position iterator.



### prev()


Returns the previous position iterator.



## Types of Iterators


C++ provides different types of iterators:


### Input Iterator

Used for reading data.


### Output Iterator

Used for writing data.


### Forward Iterator

Moves only in forward direction.


### Bidirectional Iterator

Moves forward and backward.


### Random Access Iterator

Allows direct movement to any position.



## Advantages of Iterators


Iterators provide:


- Common access method for containers.
- Better compatibility with algorithms.
- Easy traversal of data.
- Improved code flexibility.



## Applications


Iterators are used in:


### Data Processing

Traversing large collections.


### Searching Algorithms

Finding elements inside containers.


### Sorting Operations

Applying STL algorithms.



## Key Points


Remember:


- Iterators access container elements.
- They work similar to pointers.
- begin() and end() are commonly used.
- STL algorithms depend on iterators.


Iterators make STL containers flexible and easy to use in C++ programs.

`

};


export default lesson10;