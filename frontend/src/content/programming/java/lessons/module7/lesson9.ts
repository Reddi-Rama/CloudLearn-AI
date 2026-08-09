const lesson9 = {

  id: "lesson9",

  title: "Try-with-Resources in Java",

  content: `

# Try-with-Resources in Java


## Introduction


In real-world applications, programs frequently use external resources.



Examples:


- Files.
- Database connections.
- Network connections.
- Streams.
- Readers and Writers.



These resources must be properly closed after use.



If resources are not closed properly, applications may face:


- Memory leaks.
- Resource wastage.
- Performance problems.



Java provides a feature called:


Try-with-Resources



to automatically close resources after use.



# What is Try-with-Resources?


Try-with-resources is a special form of try statement that automatically closes resources after execution.



It was introduced in:


Java 7



It works with objects that implement:


AutoCloseable interface



# Syntax of Try-with-Resources


try(Resource declaration)

{

    // code using resource

}


catch(Exception e)

{

}



Example:


try(FileReader file = new FileReader("data.txt"))

{

    // read file

}



The file is automatically closed.



# Why Do We Need Try-with-Resources?


Before Java 7, developers had to close resources manually.



Example:


File open

↓

Use file

↓

Close file



If an exception occurred before closing:


File remains open.



Try-with-resources solves this problem.



# Traditional Resource Handling


Example:


FileReader file = null;


try

{

    file = new FileReader("data.txt");

}


catch(Exception e)

{

}


finally

{

    file.close();

}



Problems:


- More code.
- Manual closing.
- Possible errors while closing.



# Try-with-Resources Example


import java.io.FileReader;


class Main

{

    public static void main(String[] args)

    {

        try(FileReader file = new FileReader("data.txt"))

        {

            System.out.println("File opened");

        }


        catch(Exception e)

        {

            System.out.println("Error occurred");

        }

    }

}



Output:


File opened



The file closes automatically.



# AutoCloseable Interface


Try-with-resources works because resources implement:



AutoCloseable



Interface:


public interface AutoCloseable

{

    void close() throws Exception;

}



Any class implementing AutoCloseable can be used in try-with-resources.



# How Try-with-Resources Works Internally?


Example:


try(FileReader file = new FileReader("data.txt"))

{

}



Internally Java performs:



Step 1:


Creates resource object.



Step 2:


Executes try block.



Step 3:


Calls close() automatically.



Step 4:


Handles exceptions if required.



# Multiple Resources


Try-with-resources can manage multiple resources.



Syntax:


try(Resource1 r1 = new Resource1();

    Resource2 r2 = new Resource2())

{

}



Resources are closed in reverse order.



# Multiple Resource Example


import java.io.*;


class Main

{

    public static void main(String[] args)

    {

        try(

            FileReader reader = new FileReader("data.txt");

            BufferedReader buffer = new BufferedReader(reader)

        )

        {

            System.out.println(buffer.readLine());

        }


        catch(Exception e)

        {

            System.out.println(e);

        }

    }

}



Both resources are automatically closed.



# Resource Closing Order


If multiple resources are used:



Resource 1

↓

Resource 2

↓

Resource 3



Closing happens:



Resource 3

↓

Resource 2

↓

Resource 1



Because the last opened resource closes first.



# Try-with-Resources and finally


Try-with-resources automatically performs cleanup.



Example:



Without try-with-resources:


try

{

}

finally

{

    close();

}



With try-with-resources:


try(resource)

{

}



Java automatically calls close().



# Creating Custom AutoCloseable Resource


Example:


class Connection implements AutoCloseable

{

    public void close()

    {

        System.out.println("Connection closed");

    }

}



Using it:



try(Connection c = new Connection())

{

    System.out.println("Using connection");

}



Output:


Using connection

Connection closed



# Try-with-Resources Example: File Handling


Scenario:



Open file


↓

Read data


↓

Close file automatically



Code:


try(FileReader file = new FileReader("student.txt"))

{

    // reading data

}



# Try-with-Resources Example: Database System


Database operations require:



- Connection.
- Statement.
- ResultSet.



Example:


try(Connection connection = database.getConnection())

{

    // database operations

}



Connection closes automatically.



# Try-with-Resources Example: Banking System


Bank transaction:



Open database connection


↓

Process transaction


↓

Close connection



Example:


try(DatabaseConnection db = new DatabaseConnection())

{

    transferMoney();

}



The connection is automatically released.



# Try-with-Resources Example: E-Commerce System


Order processing:



Open payment connection


↓

Process payment


↓

Close connection



Resources are safely managed.



# Try-with-Resources Example: Student Management System


Student records:



Open file


↓

Read student data


↓

Automatically close file



# Advantages of Try-with-Resources



## Automatic Resource Management


Resources close automatically.



## Less Code


No need for finally blocks.



## Prevents Resource Leaks


Resources are always released.



## Better Readability


Code becomes cleaner.



## Safer Applications


Reduces resource handling errors.



# Difference Between try-finally and try-with-resources



## try-finally


Resource closing:


Manual



Code:


More



Risk:


Higher



## try-with-resources


Resource closing:


Automatic



Code:


Less



Risk:


Lower



# Common Mistakes



## Using Resources Without AutoCloseable


Try-with-resources works only with AutoCloseable resources.



## Forgetting Exception Handling


Resource operations can still throw exceptions.



## Creating Too Many Resources


Use only required resources.



# Best Practices


Follow these practices:


- Use try-with-resources for external resources.
- Prefer it over manual closing.
- Keep resource scope small.
- Handle exceptions properly.
- Use AutoCloseable for custom resources.



# Interview Questions



## What is try-with-resources?


A Java feature that automatically closes resources.



## When was it introduced?


Java 7.



## Which interface does it use?


AutoCloseable.



## Can multiple resources be used?


Yes.



## In what order are resources closed?


Reverse order of creation.



# Key Points


Remember:


- Try-with-resources automatically closes resources.
- Introduced in Java 7.
- Works with AutoCloseable.
- Reduces resource leaks.
- Replaces many finally blocks.
- Multiple resources close in reverse order.



# Summary


Try-with-resources is an important Java feature for safe resource management.


It simplifies code, automatically releases resources, and helps developers build reliable applications with fewer resource-related problems.

`

};


export default lesson9;