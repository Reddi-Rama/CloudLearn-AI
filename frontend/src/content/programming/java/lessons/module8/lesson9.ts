const lesson9 = {

id: "lesson9",

title: "Serialization",

content: `

# Serialization

## Introduction

So far, you have learned how to store:

- Characters.
- Strings.
- Text.
- Bytes.
- Binary data.



But Java applications also work heavily with objects.



For example:

\`\`\`java
Student student =
        new Student(
                101,
                "Alex",
                85);
\`\`\`



The object exists in memory while the program is running.



But what happens when the program ends?



Normally, the object in memory disappears.



What if we want to save the object's state and restore it later?



Java provides Serialization for this purpose.



# What is Serialization?

Serialization is the process of converting an object's state into a byte stream so that it can be stored or transmitted.



Simple flow:

Java Object

↓

Serialization

↓

Byte Stream

↓

File / Storage / Network



Later, the byte stream can be converted back into an object through Deserialization.



Byte Stream

↓

Deserialization

↓

Java Object



Deserialization will be covered in Lesson 10.



# Why Do We Need Serialization?

Suppose:

Student Object

│

├── ID = 101

├── Name = Alex

└── Marks = 85



The application terminates.



The object in memory is gone.



Serialization allows the object's state to be saved:



Student Object

↓

Serialization

↓

student.dat



Later:

student.dat

↓

Deserialization

↓

Student Object



# What is Object State?

An object's state is represented by the values stored in its instance fields.



For example:

\`\`\`java
class Student {

    int id;
    String name;
    int marks;

}
\`\`\`



An object might have:

\`\`\`text
id = 101
name = Alex
marks = 85
\`\`\`



These values form the object's state.



Serialization stores this state in a byte representation.



# Serializable Interface

To serialize an object using Java's standard object serialization mechanism, the class must implement:

Serializable



It belongs to:

java.io



Import:

\`\`\`java
import java.io.Serializable;
\`\`\`



# What is Serializable?

Serializable is a marker interface.



A marker interface does not require you to implement methods.



Example:

\`\`\`java
class Student implements Serializable {

}
\`\`\`



The interface tells Java that objects of the class are eligible for the standard serialization mechanism.



# Example 1: Serializable Class

\`\`\`java
import java.io.Serializable;

class Student implements Serializable {

    int id;
    String name;
    int marks;

    Student(int id, String name, int marks) {

        this.id = id;
        this.name = name;
        this.marks = marks;

    }

}
\`\`\`



Now objects of Student can be serialized using Java's object streams.



# ObjectOutputStream

Java provides:

ObjectOutputStream



for writing objects to an output stream.



Import:

\`\`\`java
import java.io.ObjectOutputStream;
\`\`\`



It is commonly combined with:

FileOutputStream



The structure is:



Java Object

↓

ObjectOutputStream

↓

FileOutputStream

↓

File



# Basic Syntax

\`\`\`java
ObjectOutputStream output =
        new ObjectOutputStream(
                new FileOutputStream(
                        "student.dat"));
\`\`\`



Then:

\`\`\`java
output.writeObject(student);
\`\`\`



# Example 2: Serializing an Object

\`\`\`java
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Student implements Serializable {

    int id;
    String name;
    int marks;

    Student(int id, String name, int marks) {

        this.id = id;
        this.name = name;
        this.marks = marks;

    }

}

public class SerializationExample1 {

    public static void main(String[] args) {

        Student student =
                new Student(
                        101,
                        "Alex",
                        85);

        try (ObjectOutputStream output =
                     new ObjectOutputStream(
                             new FileOutputStream(
                                     "student.dat"))) {

            output.writeObject(student);

            System.out.println(
                    "Object serialized successfully.");

        }

        catch (IOException e) {

            System.out.println(
                    "Serialization failed.");

        }

    }

}
\`\`\`



# What Happens Internally?

The flow is approximately:



Student Object

│

├── id = 101

├── name = Alex

└── marks = 85

       ↓

ObjectOutputStream

       ↓

Byte Stream

       ↓

student.dat



The file is not intended to be read as ordinary human-readable text.



# writeObject()

The important method is:

\`\`\`java
output.writeObject(student);
\`\`\`



It writes the serializable object's state to the underlying stream.



# Serializing Multiple Objects

You can write multiple objects to the same object stream.



Example:

\`\`\`java
output.writeObject(student1);
output.writeObject(student2);
output.writeObject(student3);
\`\`\`



The corresponding objects can later be read in the same order using an ObjectInputStream.



# Example 3: Multiple Objects

\`\`\`java
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

class Student implements Serializable {

    int id;
    String name;

    Student(int id, String name) {

        this.id = id;
        this.name = name;

    }

}

public class SerializationExample2 {

    public static void main(String[] args) {

        Student student1 =
                new Student(101, "Alex");

        Student student2 =
                new Student(102, "Priya");

        try (ObjectOutputStream output =
                     new ObjectOutputStream(
                             new FileOutputStream(
                                     "students.dat"))) {

            output.writeObject(student1);
            output.writeObject(student2);

            System.out.println(
                    "Objects serialized.");

        }

        catch (IOException e) {

            System.out.println(
                    "Serialization failed.");

        }

    }

}
\`\`\`



# serialVersionUID

Serializable classes can define a special field:

\`\`\`java
private static final long serialVersionUID = 1L;
\`\`\`



Example:

\`\`\`java
class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    int id;
    String name;

}
\`\`\`



This identifier is associated with the serialized form of the class.



It helps Java detect incompatible changes between the serialized data and the current class definition.



# Why Use serialVersionUID?

Suppose an object is serialized today.



Later, the class definition changes.



Java can use serialVersionUID to determine whether the serialized representation is compatible with the current class.



Example:

Version 1

↓

Serialize Object

↓

Saved File

↓

Class Changes

↓

Deserialize

↓

Compatibility Check



If the class's serialization version is incompatible, Java can throw:

InvalidClassException



# Example 4: Using serialVersionUID

\`\`\`java
import java.io.Serializable;

class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    int id;
    String name;
    int marks;

}
\`\`\`



Defining it explicitly makes the serialization version intentional rather than relying on Java's automatically calculated value.



# Transient Fields

Sometimes an object's fields should not be serialized.



Java provides the:

transient



keyword.



Example:

\`\`\`java
class Student implements Serializable {

    int id;
    String name;

    transient String password;

}
\`\`\`



The password field will not be included in the standard serialized state.



# Why Use transient?

It can be useful for fields such as:

- Temporary values.
- Derived values.
- Cached data.
- Sensitive information that should not be included in the serialized representation.



However, simply marking a field transient should not be treated as a complete security strategy.



# Example 5: Transient Field

\`\`\`java
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.io.Serializable;

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

public class SerializationExample3 {

    public static void main(String[] args) {

        User user =
                new User(
                        101,
                        "Alex",
                        "secret");

        try (ObjectOutputStream output =
                     new ObjectOutputStream(
                             new FileOutputStream(
                                     "user.dat"))) {

            output.writeObject(user);

            System.out.println(
                    "User object serialized.");

        }

        catch (IOException e) {

            System.out.println(
                    "Serialization failed.");

        }

    }

}
\`\`\`



The password field is excluded from the standard serialized state.



# Static Fields and Serialization

Static fields belong to the class rather than to individual objects.



Therefore, static fields are not serialized as part of an object's instance state.



Example:

\`\`\`java
class Student implements Serializable {

    int id;

    static String college =
            "ABC College";

}
\`\`\`



The id field is part of the object's state.



The college field belongs to the class.



# What Cannot Be Serialized?

A class can implement Serializable, but every non-transient object referenced from its serializable state must also be serializable.



For example:

\`\`\`java
class Student implements Serializable {

    Address address;

}
\`\`\`



If Address is not serializable and is not marked transient, serialization can fail with:

NotSerializableException



# Example 6: Serializable Object Reference

\`\`\`java
import java.io.Serializable;

class Address implements Serializable {

    private static final long serialVersionUID = 1L;

    String city;

    Address(String city) {

        this.city = city;

    }

}

class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    int id;
    String name;
    Address address;

    Student(
            int id,
            String name,
            Address address) {

        this.id = id;
        this.name = name;
        this.address = address;

    }

}
\`\`\`



Here both classes implement Serializable, so the referenced Address object can also be serialized.



# Serialization and Inheritance

If a class implements Serializable, its serializable subclass can also participate in serialization.



However, serialization has special rules for inherited state, especially when a superclass itself is not serializable.



For beginner-level usage, the important rule is:



The serialization process follows Java's object serialization rules for the class hierarchy, and non-serializable superclass state is handled differently from serializable subclass state.



This is one reason serialization should be understood carefully in larger applications.



# Serialization Workflow

Create Object

↓

Class Implements Serializable

↓

Create FileOutputStream

↓

Create ObjectOutputStream

↓

writeObject()

↓

Object Converted to Byte Representation

↓

Stored in File



# ObjectOutputStream Architecture

Java Object

↓

ObjectOutputStream

↓

FileOutputStream

↓

Binary File



The ObjectOutputStream handles the object-level serialization, while FileOutputStream provides the underlying byte output.



# Serialization vs Normal File Writing

| Normal File Writing | Serialization |
|---|---|
| Writes text/bytes explicitly | Writes object state |
| FileWriter / FileOutputStream | ObjectOutputStream |
| Developer formats data | Java serialization mechanism handles object structure |
| Good for files designed around explicit formats | Useful for Java object persistence in compatible contexts |



# Real-World Applications

Serialization can be used for:

- Saving object state.
- Temporary object persistence.
- Java-specific data transfer.
- Caching certain object structures.
- Sending objects through compatible Java-based systems.



However, modern applications frequently use formats such as JSON, XML, Protocol Buffers, or other explicit data formats when interoperability and long-term data compatibility are important.



# Important Security Consideration

Java native deserialization can be dangerous when processing untrusted serialized data.



Do not blindly deserialize arbitrary data received from unknown sources.



For production systems, carefully evaluate whether native Java serialization is appropriate.



This is an important professional security consideration.



# Common Mistakes

## 1. Forgetting Serializable

Incorrect:

\`\`\`java
class Student {

}
\`\`\`

and then:

\`\`\`java
output.writeObject(student);
\`\`\`



This can result in:

NotSerializableException



The class should implement Serializable when using standard Java object serialization.



## 2. Forgetting serialVersionUID

It is good practice to explicitly declare:

\`\`\`java
private static final long serialVersionUID = 1L;
\`\`\`

for serializable classes whose serialized form matters.



## 3. Assuming transient Means Encrypted

It does not.



transient simply excludes the field from the standard serialized state.



It does not encrypt or securely erase the value.



## 4. Deserializing Untrusted Data

Avoid accepting arbitrary serialized objects from untrusted sources.



# Best Practices

- Use Serializable only when appropriate.
- Define serialVersionUID intentionally.
- Use transient for fields that should not be part of the serialized state.
- Ensure referenced objects are serializable when necessary.
- Use Try-with-Resources.
- Handle IOException.
- Treat serialized files as binary data.
- Never blindly deserialize untrusted data.
- Consider JSON or other explicit formats when interoperability is required.



# Industry Perspective

Java native serialization is an important historical and technical part of Java, but it should not automatically be the first choice for modern application data exchange.



Modern systems often prefer explicit formats such as:

- JSON.
- XML.
- Protocol Buffers.
- Avro.



because they can provide better interoperability and clearer data contracts.



Nevertheless, understanding Java serialization is valuable because it teaches:

- Object persistence concepts.
- Object streams.
- Binary representation.
- Version compatibility.
- Transient state.
- Serialization security.



# Interview Tip

## Q: What is Serialization?

### Answer:

Serialization is the process of converting an object's state into a byte stream so that it can be stored or transmitted.



## Q: What is the purpose of Serializable?

### Answer:

Serializable is a marker interface that indicates that objects of a class can participate in Java's standard object serialization mechanism.



## Q: What is transient?

### Answer:

transient prevents a field from being included in the standard serialized state of an object.



## Q: Why is serialVersionUID used?

### Answer:

It identifies the version of a serializable class and helps Java detect incompatible changes when serialized data is later deserialized.



# Key Takeaways

After completing this lesson, you should be able to:

- Explain serialization.
- Understand object state.
- Use Serializable.
- Use ObjectOutputStream.
- Serialize objects to files.
- Serialize multiple objects.
- Understand serialVersionUID.
- Understand the transient keyword.
- Understand serialization of referenced objects.
- Recognize NotSerializableException.
- Understand serialization and inheritance at a high level.
- Explain serialization security risks.
- Compare serialization with ordinary file writing.
- Understand when explicit formats may be preferable.



The next lesson completes the serialization cycle by learning how to read the serialized bytes and reconstruct the original Java object.



# Next Lesson

## Lesson 10 — Deserialization

You will learn:

- What Deserialization means.
- ObjectInputStream.
- Reading serialized objects.
- Restoring object state.
- serialVersionUID.
- transient fields after deserialization.
- ClassNotFoundException.
- IOException.
- Reading multiple objects.
- Practical programs.
- Security considerations.
- Best Practices.
- Interview Tip.
- Key Takeaways.

`

};

export default lesson9;