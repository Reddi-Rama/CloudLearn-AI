const lesson5 = {

  id: "lesson5",

  title: "Encapsulation",

  content: `

# Encapsulation


## Introduction


Encapsulation is one of the fundamental principles of Object-Oriented Programming.


It means combining:

- Data members.
- Member functions.


inside a single unit called a class.


Encapsulation also provides controlled access to data.



## Need for Encapsulation


In real-world applications, important data should not be directly accessible.


Example:


Bank account information:


Data:

- Account Balance
- PIN


These details should be protected.


Instead of allowing direct access, the class provides functions to safely interact with the data.



## Example Without Encapsulation


class Account

{

public:

    double balance;

};


Anyone can directly modify:


account.balance = -5000;



This can create invalid data.



## Example With Encapsulation


class Account

{

private:


    double balance;


public:


    void setBalance(double amount)

    {

        balance = amount;

    }


    double getBalance()

    {

        return balance;

    }

};



The data is protected and accessed through functions.



## Complete Example


#include<iostream>

using namespace std;


class BankAccount

{

private:


    double balance;


public:


    void deposit(double amount)

    {

        balance = balance + amount;

    }


    double getBalance()

    {

        return balance;

    }

};


int main()

{

    BankAccount account;


    account.deposit(10000);


    cout << account.getBalance();


    return 0;

}



Output:


10000



## Advantages of Encapsulation


### Data Security


Important information is hidden from direct access.



### Controlled Access


Functions decide how data can be modified.



### Better Maintenance


Internal implementation can be changed without affecting users.



### Code Organization


Data and operations remain together.



## Encapsulation Using Getters and Setters


Getter:

A function used to read private data.


Example:


getBalance();



Setter:

A function used to modify private data.


Example:


setBalance();



## Real World Example


Student Management System:


Private Data:

- Marks
- Personal information


Public Functions:

- UpdateMarks()
- DisplayDetails()



The data is controlled through functions.



## Encapsulation and Access Specifiers


Encapsulation is achieved using:


private:

Used to hide data.


public:

Used to provide controlled access.



## Applications


Encapsulation is used in:


Banking Systems:

Protecting account details.


Healthcare Systems:

Protecting patient information.


E-Commerce:

Protecting payment details.



## Key Points


Remember:


- Encapsulation combines data and functions.
- Private members protect data.
- Public functions provide controlled access.
- It improves security and maintainability.


Encapsulation is one of the most important concepts that makes object-oriented programming powerful and secure.

`

};


export default lesson5;