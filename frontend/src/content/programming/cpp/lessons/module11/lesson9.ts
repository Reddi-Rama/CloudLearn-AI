const lesson9 = {

  id: "lesson9",

  title: "STL Containers",

  content: `

# STL Containers


## Introduction


Applications often need to store and manage large collections of data efficiently.


Examples:


- Banking systems storing customer records.
- E-commerce systems storing products.
- Hospital systems storing patient information.


Creating custom data structures for every application requires more time and effort.


To solve this problem, STL provides Containers.



## What are STL Containers?


A container is a template-based class used to store and organize collections of data.


STL containers automatically manage:

- Memory.
- Data storage.
- Common operations.



## Types of STL Containers


STL containers are divided into three major categories:


# 1. Sequence Containers


Sequence containers store elements in a linear order.


Examples:


## Vector


A dynamic array that can grow automatically.


Example:


vector<int> numbers;



## List


A doubly linked list that allows efficient insertion and deletion.


## Deque


A double-ended queue that allows insertion and deletion from both ends.



## Array


A fixed-size collection of elements.



# 2. Associative Containers


Associative containers store data using keys.


They provide fast searching operations.


Examples:


## Set


Stores unique values.


## Map


Stores key-value pairs.


Example:


Student ID → Student Name



## Multiset


Allows duplicate values.



## Multimap


Stores multiple values for the same key.



# 3. Unordered Containers


Unordered containers use hashing techniques.


They provide fast insertion and searching.


Examples:


- unordered_set.
- unordered_map.
- unordered_multiset.
- unordered_multimap.



## Example: Vector Container


#include<iostream>

#include<vector>

using namespace std;


int main()

{

    vector<int> marks;


    marks.push_back(85);

    marks.push_back(90);

    marks.push_back(75);


    for(int value : marks)

    {

        cout << value << " ";

    }


    return 0;

}



Output:


85 90 75



## Advantages of STL Containers


Containers provide:


### Automatic Memory Management

Memory allocation is handled automatically.


### Reusability

Same container works with different data types.


### Efficiency

STL containers are optimized for performance.


### Scalability

They can manage large amounts of data.



## Applications of STL Containers


STL containers are used in:


### Banking Applications

Customer records and transactions.


### Hospital Systems

Patient information management.


### E-Commerce

Products and orders.


### Artificial Intelligence

Data storage and processing.



## Choosing the Right Container


Use:

Vector:

When fast random access is required.


List:

When frequent insertion and deletion are needed.


Map:

When key-value storage is required.


Set:

When unique values are needed.



## Key Points


Remember:


- Containers store collections of data.
- STL provides different container types.
- Each container is designed for specific requirements.
- Containers are implemented using templates.


STL containers are the foundation of efficient data management in modern C++ programming.

`

};


export default lesson9;