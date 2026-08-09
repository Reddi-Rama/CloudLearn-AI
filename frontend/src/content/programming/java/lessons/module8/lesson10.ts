const lesson10 = {

id: "lesson10",

title: "Deserialization",

content: `

# Deserialization

## Introduction

In the previous lesson, you learned about Serialization.

Serialization converts a Java object into a byte stream:

Java Object

↓

Serialization

↓

Byte Stream

↓

File



But saving an object is only half of the process.



If we want to use the saved object again, we need to convert the byte stream back into a Java object.



This process is called Deserialization.



# What is Deserialization?

Deserialization is the process of reconstructing a Java object from a previously serialized byte stream.



The basic flow is:

Serialized File

↓

Deserialization

↓

Java Object



Together:



Serialization:

Object

↓

Byte Stream

↓

File



Deserialization:

File

↓

Byte Stream

↓

Object



# Why Do We Need Deserialization?

Suppose an application creates:

Student Object

ID = 101

Name = Alex

Marks = 85



The object is serialized:

Student Object

↓

student.dat



Later, the application starts again.



The original object no longer exists in memory.



Deserialization allows the application to reconstruct it:

student.dat

↓

Deserialization

↓

Student Object



# ObjectInputStream

Java provides:

ObjectInputStream



for reading serialized objects.



It belongs to:

java.io



Import:

import java.io.ObjectInputStream;



It is commonly combined with:

FileInputStream



The structure is:

Serialized File

↓

FileInputStream

↓

ObjectInputStream

↓

Java Object



# Basic Syntax

\`\`\`java
ObjectInputStream input =
        new ObjectInputStream(
                new FileInputStream(
                        "student.dat"));
\`\`\`



Then:

\`\`\`java
Student student =
        (Student) input.readObject();
\`\`\`



# Example 1: Deserializing an Object

Suppose the file student.dat was created using the serialization example from Lesson 9.

\`\`\`java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;

class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    int id;
    String name;
    int marks;

}

public class DeserializationExample1 {

    public static void main(String[] args) {

        try (ObjectInputStream input =
                     new ObjectInputStream(
                             new FileInputStream(
                                     "student.dat"))) {

            Student student =
                    (Student) input.readObject();

            System.out.println(
                    "ID: " + student.id);

            System.out.println(
                    "Name: " + student.name);

            System.out.println(
                    "Marks: " + student.marks);

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to read object.");

        }

        catch (ClassNotFoundException e) {

            System.out.println(
                    "Class not found.");

        }

    }

}
\`\`\`



Possible Output:

\`\`\`text
ID: 101
Name: Alex
Marks: 85
\`\`\`



# Understanding readObject()

The most important method is:

\`\`\`java
input.readObject();
\`\`\`



It reads the next serialized object from the stream.



The return type is:

Object



Therefore, when you know the expected type, you commonly cast it:

\`\`\`java
Student student =
        (Student) input.readObject();
\`\`\`



# Why Is Casting Required?

readObject() returns an Object reference because the stream can contain objects of different classes.



For example:

\`\`\`java
Object object =
        input.readObject();
\`\`\`



If you know it is a Student:

\`\`\`java
Student student =
        (Student) object;
\`\`\`



Now you can access:

\`\`\`java
student.name
student.marks
\`\`\`



# Deserialization Workflow

Open Serialized File

↓

Create FileInputStream

↓

Create ObjectInputStream

↓

Call readObject()

↓

Cast to Expected Type

↓

Use Object

↓

Close Resources



With Try-with-Resources, the streams are closed automatically.



# ClassNotFoundException

readObject() can throw:

ClassNotFoundException



This can occur when the class information stored in the serialized data cannot be resolved by the current application.



Example:

\`\`\`java
try {

    Object object =
            input.readObject();

}

catch (ClassNotFoundException e) {

    System.out.println(
            "Required class was not found.");

}
\`\`\`



# IOException

Deserialization also involves file and stream operations, so it can throw:

IOException



For example:

\`\`\`java
try {

    Object object =
            input.readObject();

}

catch (IOException e) {

    System.out.println(
            "I/O operation failed.");

}
\`\`\`



# Important Exceptions

The common exceptions you should remember are:

Deserialization

│

├── IOException

│

└── ClassNotFoundException



# Example 2: Serialization and Deserialization Together

The complete process can be represented as:

\`\`\`java
Student student =
        new Student(
                101,
                "Alex",
                85);
\`\`\`



## Step 1 — Serialize

Student Object

↓

ObjectOutputStream

↓

student.dat



## Step 2 — Program Ends

Object in Memory

↓

No Longer Available



## Step 3 — Deserialize Later

student.dat

↓

ObjectInputStream

↓

Student Object



# Reading Multiple Objects

If multiple objects were written sequentially:

\`\`\`java
output.writeObject(student1);
output.writeObject(student2);
output.writeObject(student3);
\`\`\`



they can be read sequentially:

\`\`\`java
Student s1 =
        (Student) input.readObject();

Student s2 =
        (Student) input.readObject();

Student s3 =
        (Student) input.readObject();
\`\`\`



The reading order should match the writing order.



# Example 3: Reading Multiple Objects

\`\`\`java
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.Serializable;

class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    int id;
    String name;

    Student(int id, String name) {

        this.id = id;
        this.name = name;

    }

}

public class DeserializationExample2 {

    public static void main(String[] args) {

        try (ObjectInputStream input =
                     new ObjectInputStream(
                             new FileInputStream(
                                     "students.dat"))) {

            Student student1 =
                    (Student) input.readObject();

            Student student2 =
                    (Student) input.readObject();

            System.out.println(
                    student1.id + " "
                    + student1.name);

            System.out.println(
                    student2.id + " "
                    + student2.name);

        }

        catch (IOException e) {

            System.out.println(
                    "Unable to read objects.");

        }

        catch (ClassNotFoundException e) {

            System.out.println(
                    "Class not found.");

        }

    }

}
\`\`\`



# Reading Until the End of the File

When the number of serialized objects is not known in advance, you can continue reading until the stream reaches the end.



One approach is to handle:

EOFException



Example:

\`\`\`java
import java.io.EOFException;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;

public class ReadObjectsExample {

    public static void main(String[] args) {

        try (ObjectInputStream input =
                     new ObjectInputStream(
                             new FileInputStream(
                                     "students.dat"))) {

            while (true) {

                Object object =
                        input.readObject();

                System.out.println(object);

            }

        }

        catch (EOFException e) {

            System.out.println(
                    "All objects read.");

        }

        catch (IOException e) {

            System.out.println(
                    "I/O error occurred.");

        }

        catch (ClassNotFoundException e) {

            System.out.println(
                    "Class not found.");

        }

    }

}
\`\`\`



EOFException indicates that the end of the object stream was reached unexpectedly while attempting another read.



In this particular pattern, it can be used as the termination signal after all serialized objects have been read.



# Transient Fields During Deserialization

Recall from Lesson 9:

transient



prevents a field from being included in the standard serialized state.



Example:

\`\`\`java
class User implements Serializable {

    int id;
    String name;

    transient String password;

}
\`\`\`



Suppose:

Before Serialization:

id = 101

name = Alex

password = secret



After deserialization:

id = 101

name = Alex

password = null



For a reference-type field such as String, the default value after deserialization is null unless the class restores it through other mechanisms.



# Example 4: Transient Field

\`\`\`java
import java.io.*;

class User implements Serializable {

    private static final long serialVersionUID = 1L;

    int id;
    String name;
    transient String password;

    User(
            int id,
            String name,
            String password) {

        this.id = id;
        this.name = name;
        this.password = password;

    }

}

public class DeserializationExample3 {

    public static void main(String[] args) {

        try (ObjectInputStream input =
                     new ObjectInputStream(
                             new FileInputStream(
                                     "user.dat"))) {

            User user =
                    (User) input.readObject();

            System.out.println(
                    "ID: " + user.id);

            System.out.println(
                    "Name: " + user.name);

            System.out.println(
                    "Password: "
                    + user.password);

        }

        catch (IOException e) {

            System.out.println(
                    "I/O error.");

        }

        catch (ClassNotFoundException e) {

            System.out.println(
                    "Class not found.");

        }

    }

}
\`\`\`



The password is not restored from the serialized state.



# serialVersionUID

Deserialization uses the class's serialization version information.



Example:

\`\`\`java
private static final long serialVersionUID = 1L;
\`\`\`



Suppose an object was serialized using one compatible version of a class.



Later, the class changes.



During deserialization, Java checks the serialization compatibility information.



If the serialized data and current class are incompatible, an exception such as:

InvalidClassException



may occur.



# Example Situation

Class Version 1

↓

Serialize

↓

student.dat

↓

Class Changes

↓

Deserialize

↓

Compatibility Check



This is why serialVersionUID should be treated intentionally in serializable classes.



# Deserialization and Object State

Deserialization reconstructs the serialized state of the object.



For example:

Serialized Data

ID = 101

Name = Alex

Marks = 85

↓

Deserialization

↓

New Student Object

ID = 101

Name = Alex

Marks = 85



The object is reconstructed; it is not the exact same object instance that existed before serialization.



# Serialization vs Deserialization

| Serialization | Deserialization |
|---|---|
| Object → Byte Stream | Byte Stream → Object |
| Uses ObjectOutputStream | Uses ObjectInputStream |
| writeObject() | readObject() |
| Saves object state | Restores object state |
| Output operation | Input operation |



# Security Consideration

Native Java deserialization has important security risks.



You should not blindly deserialize untrusted serialized data.



For example:

Unknown Source

↓

Serialized Data

↓

Blind Deserialization

↓

Security Risk



In modern applications, use safer and more controlled data formats and validation strategies when data comes from untrusted sources.



# Common Mistakes

## 1. Using the Wrong Class

If the serialized object is a Student, casting it to an unrelated type is incorrect.



\`\`\`java
Student student =
        (Student) input.readObject();
\`\`\`



should match the actual serialized object type.



## 2. Forgetting ClassNotFoundException

readObject() can throw:

ClassNotFoundException



Handle or declare it.



## 3. Expecting Transient Fields to Be Restored

A transient field is not included in the standard serialized state.



## 4. Changing Classes Without Considering Compatibility

Changes to serializable classes can affect whether old serialized data can be read.



## 5. Deserializing Untrusted Data

Never blindly deserialize arbitrary serialized input.



# Best Practices

- Use Try-with-Resources.
- Handle IOException.
- Handle ClassNotFoundException.
- Define serialVersionUID intentionally.
- Understand which fields are transient.
- Ensure serialized classes remain compatible when old data must be supported.
- Never blindly deserialize untrusted data.
- Prefer explicit formats such as JSON when interoperability is required.



# Industry Perspective

Native Java deserialization is useful for understanding Java's object persistence mechanism, but modern distributed applications often use explicit data formats.



For example:

Java Application

↓

JSON

↓

REST API

↓

Another Application



This is more interoperable than Java's native object serialization.



Still, understanding ObjectInputStream and deserialization is important for:

- Legacy Java applications.
- Existing serialized data.
- Core Java interviews.
- Understanding object persistence.
- Understanding serialization security.



# Interview Tip

## Q: What is deserialization?

### Answer:

Deserialization is the process of reconstructing a Java object from a serialized byte stream.



## Q: Which class is used for deserialization?

### Answer:

ObjectInputStream is used to read serialized objects.



## Q: Which method reads an object?

### Answer:

readObject()



## Q: What does readObject() return?

### Answer:

It returns an Object reference, so it is commonly cast to the expected class type.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain deserialization.
- Use ObjectInputStream.
- Read serialized objects.
- Use readObject().
- Understand object casting.
- Deserialize multiple objects.
- Understand EOFException in sequential object reading.
- Understand the behavior of transient fields.
- Understand serialVersionUID during deserialization.
- Handle IOException.
- Handle ClassNotFoundException.
- Understand native deserialization security risks.
- Compare serialization and deserialization.



You have now completed the complete basic serialization cycle:

Java Object

↓

Serialization

↓

Byte Stream

↓

File

↓

Deserialization

↓

Java Object



# Next Lesson

## Lesson 11 — Directories

You will learn:

- What a directory is.
- Creating directories.
- mkdir().
- mkdirs().
- Checking directories.
- Listing files.
- Directory paths.
- Renaming directories.
- Deleting directories.
- Recursive directory operations.
- Practical examples.
- Real-world applications.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson10;