const lesson9 = {

  id: "lesson9",

  title: "Difference Between Structures and Unions",

  content: `
# Difference Between Structures and Unions


## Introduction

Structures and unions are both user-defined data types in C++.

They allow programmers to combine multiple variables under a single name.

Although they look similar, their memory behavior and usage are different.


## Structures

A structure allocates separate memory for each member.

Example:


\`\`\`cpp
struct Student
{
    int rollNumber;
    float marks;
    char grade;
};
\`\`\`


Memory is allocated for:

- rollNumber.
- marks.
- grade.


All members can store values simultaneously.


## Unions

A union stores all members in the same memory location.


Example:


\`\`\`cpp
union Data
{
    int number;
    float value;
    char grade;
};
\`\`\`


Only one member contains a valid value at a time.


## Memory Allocation Difference


### Structure


\`\`\`
rollNumber → Memory

marks → Memory

grade → Memory
\`\`\`


Each member has separate storage.


### Union


\`\`\`
number

value

grade

      |
      |
 Same Memory Location
\`\`\`


All members share the same memory.


## Accessing Members


Structure:


\`\`\`cpp
student.marks;
\`\`\`


Multiple members can be accessed together.


Union:


\`\`\`cpp
data.number;
\`\`\`


Only the latest assigned member should be accessed.


## Size Difference

Structure size:


The size is approximately the total size of all members.


Example:

\`\`\`cpp
struct Data
{
    int a;
    float b;
};
\`\`\`


Memory is allocated for both.


Union size:


The size is equal to the largest member.


Example:


\`\`\`cpp
union Data
{
    int a;
    double b;
};
\`\`\`


Memory is allocated only for double.


## Practical Example


### Structure Usage

Student record:


\`\`\`cpp
struct Student
{
    int id;
    string name;
    float marks;
};
\`\`\`


All information is required together.


### Union Usage

Sensor data:


\`\`\`cpp
union Sensor
{
    int temperature;
    float voltage;
};
\`\`\`


Only one value is needed at a time.


## Comparison Summary


Structure:

- Uses separate memory.
- Stores all members simultaneously.
- Requires more memory.
- Commonly used in applications.


Union:

- Shares memory among members.
- Stores one value at a time.
- Uses less memory.
- Used in memory-critical systems.


## When to Use Structures?

Use structures when:

- Multiple values are required together.
- Data represents a complete object.
- Memory usage is not the main concern.


Examples:

- Student records.
- Employee details.
- Product information.


## When to Use Unions?

Use unions when:

- Memory optimization is required.
- Only one value is needed at a time.
- Working with hardware-level data.


Examples:

- Embedded systems.
- Device drivers.
- Low-level programming.


## Key Points

Remember:

- Structures focus on organizing data.
- Unions focus on saving memory.
- Structures store all members.
- Unions share memory.


Understanding the difference between structures and unions helps developers choose the correct data representation for different programming situations.
`

};

export default lesson9;