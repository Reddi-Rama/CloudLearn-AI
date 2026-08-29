const lesson14 = {
  id: "lesson14",
  title: "Practical Applications",

  content: `
Introduction

Structures, unions, enumerations, and typedef are not just language features. They are used to organize data in real C programs.

Structures are particularly useful for representing records, while unions can represent different possible data formats. Enumerations are useful for fixed sets of states or categories.

---

1. Student Records

A student record can be represented using a structure:

typedef struct
{
    int rollNumber;
    char name[50];
    float marks;
} Student;

Multiple students can then be stored:

Student students[100];

This is useful for:

- Student management systems
- College applications
- Result processing
- Attendance systems

---

2. Employee Records

An employee can have:

Employee
├── ID
├── Name
├── Salary
└── Department

Example:

typedef struct
{
    int id;
    char name[50];
    float salary;
    int department;
} Employee;

An array can store multiple employees:

Employee employees[100];

---

3. Product Information

A product can be represented as:

typedef struct
{
    int id;
    char name[50];
    float price;
    int quantity;
} Product;

This can be used in:

- Inventory systems
- Billing programs
- Shopping applications
- Stock management

---

4. Using enum for Status

Suppose an order can have different states:

enum OrderStatus
{
    PENDING,
    CONFIRMED,
    SHIPPED,
    DELIVERED
};

Now an order can contain a status:

typedef struct
{
    int orderId;
    float amount;
    enum OrderStatus status;
} Order;

Example:

Order order = {101, 2500.0f, SHIPPED};

This is much clearer than storing unexplained numbers.

---

5. Address Information

An address is naturally represented by a separate structure:

typedef struct
{
    char city[50];
    char state[50];
    int pinCode;
} Address;

Another structure can contain it:

typedef struct
{
    char name[50];
    Address address;
} Customer;

Now:

Customer customer;

contains both customer and address information.

---

6. Combining Structures and Enumerations

A larger record can combine multiple concepts.

enum AccountStatus
{
    ACTIVE,
    BLOCKED,
    CLOSED
};

typedef struct
{
    int accountNumber;
    char name[50];
    float balance;
    enum AccountStatus status;
} Account;

Example:

Account account =
{
    1001,
    "Rahul",
    25000.0f,
    ACTIVE
};

---

7. Using Pointers With Structures

Structure pointers are useful when functions need to modify records.

void updateBalance(Account *account)
{
    account->balance += 1000;
}

Call:

updateBalance(&account);

The original structure is modified.

---

8. Searching Records

Suppose we have:

Student students[100];

We can search by roll number:

int searchStudent(Student students[],
                  int size,
                  int rollNumber)
{
    for (int i = 0; i < size; i++)
    {
        if (students[i].rollNumber ==
            rollNumber)
        {
            return i;
        }
    }

    return -1;
}

The function returns the index of the matching student.

---

9. Processing Records

Structures make it easy to perform calculations on records.

For example, calculating the average marks:

float averageMarks(Student students[], int size)
{
    float total = 0;

    for (int i = 0; i < size; i++)
    {
        total += students[i].marks;
    }

    return total / size;
}

This can be used with:

Student students[5];

---

10. Sorting Records

Structures can also be sorted based on a particular member.

For example, students could be sorted according to marks:

Before sorting:

Rahul → 65
Kiran → 90
Anil  → 75

After sorting:

Kiran → 90
Anil  → 75
Rahul → 65

The complete sorting implementation depends on the algorithm being used.

---

11. Using Unions for Alternative Data

A union is useful when a field can represent different types of data.

Example:

union Value
{
    int integerValue;
    float decimalValue;
};

A structure can combine a type indicator with the union:

enum ValueType
{
    INTEGER,
    DECIMAL
};

typedef struct
{
    enum ValueType type;

    union
    {
        int integerValue;
        float decimalValue;
    } value;
} Data;

This is a common pattern for representing different possible values.

---

12. Dynamic Records

If the number of records is not known beforehand, dynamic memory can be used.

Student *students;

students = malloc(n * sizeof(Student));

After using the allocated memory:

free(students);

This allows the program to allocate memory according to the number of records required.

---

13. Real-World Data Organization

A larger application may organize information like this:

Application
│
├── Student
│   ├── Personal Information
│   ├── Address
│   └── Academic Information
│
├── Course
│   ├── Course ID
│   ├── Course Name
│   └── Credits
│
└── Result
    ├── Student ID
    ├── Course ID
    └── Marks

Structures allow these relationships to be represented directly in C.

---

14. Practical Design Pattern

A common approach is:

Structure
    ↓
Represents the data

enum
    ↓
Represents fixed states

typedef
    ↓
Provides convenient names

Functions
    ↓
Process the data

Pointers
    ↓
Allow efficient modification

These features can work together in the same program.

---

15. Example Combining Multiple Concepts

#include <stdio.h>

enum Status
{
    ACTIVE,
    INACTIVE
};

typedef struct
{
    int id;
    char name[50];
    float balance;
    enum Status status;
} Account;

void displayAccount(Account *account)
{
    printf("ID: %d\\n",
           account->id);

    printf("Name: %s\\n",
           account->name);

    printf("Balance: %.2f\\n",
           account->balance);

    if (account->status == ACTIVE)
    {
        printf("Status: Active\\n");
    }
    else
    {
        printf("Status: Inactive\\n");
    }
}

int main(void)
{
    Account account =
    {
        1001,
        "Rahul",
        25000.0f,
        ACTIVE
    };

    displayAccount(&account);

    return 0;
}

Output:

ID: 1001
Name: Rahul
Balance: 25000.00
Status: Active

This example combines:

- typedef
- struct
- enum
- structure pointer
- function

---

Lesson Summary

The concepts learned in Module 8 can be combined to build organized C programs.

The main applications include:

- Student records
- Employee records
- Product and inventory systems
- Customer information
- Account management
- Result processing
- Status management
- Dynamic records
- Data processing

Structures organize related information, enumerations represent fixed choices, unions provide shared storage for alternative representations, and typedef makes declarations easier to read.
`,

  summary:
    "Structures, unions, enums, typedef, functions, pointers, and dynamic memory can be combined to organize real-world C programs.",

  keyPoints: [
    "Structures can represent student, employee, product, customer, and account records.",
    "Arrays of structures can store multiple records.",
    "Enums can represent fixed states such as order or account status.",
    "Structures can contain other structures.",
    "Structure pointers allow functions to modify records.",
    "Structures can be searched, processed, and sorted.",
    "Unions can represent alternative types of data.",
    "Dynamic memory can be used when the number of records is not known beforehand.",
    "typedef provides convenient names for structures.",
    "Multiple C features can be combined to build organized real-world programs."
  ],
};

export default lesson14;