const lesson8 = {
  id: "lesson8",

  title: "Polymorphism",

  previousLesson: "/lesson/python-development/module8/lesson7",

  nextLesson: "/lesson/python-development/module8/lesson9",

  content: `
# Polymorphism

In the previous lesson, you learned about **Inheritance**, where one class can inherit the properties and methods of another class. Another important pillar of Object-Oriented Programming is **Polymorphism**.

The word **Polymorphism** comes from two Greek words:

- **Poly** = Many
- **Morph** = Forms

Therefore, polymorphism means **"many forms."**

In Python, polymorphism allows different objects to respond to the same method name in different ways.

## Why Do We Need Polymorphism?

Imagine an online payment system that supports:

- Credit Card
- UPI
- Net Banking

All of them perform the same operation—processing a payment—but each payment method works differently.

Instead of creating different method names, we can use a single method called **process_payment()**.

Each class implements this method according to its own behavior.

IMPORTANT: Polymorphism allows one interface with multiple implementations.

## What is Polymorphism?

Polymorphism is the ability of different classes to use the same method name while performing different tasks.

It improves flexibility and allows developers to write reusable code.

## Method Overriding

One of the most common forms of polymorphism is **Method Overriding**.

A child class overrides a method inherited from its parent class.

Example:

class Animal:

    def sound(self):
        print("Animal makes a sound")

class Dog(Animal):

    def sound(self):
        print("Dog barks")

dog = Dog()

dog.sound()

Output:

Dog barks

The Dog class overrides the sound() method of the Animal class.

## Polymorphism with Different Classes

Different classes can contain methods with the same name.

Example:

class EmailNotification:

    def send(self):
        print("Sending Email")

class SMSNotification:

    def send(self):
        print("Sending SMS")

email = EmailNotification()
sms = SMSNotification()

email.send()
sms.send()

Output:

Sending Email
Sending SMS

Although both classes use the same method name, the implementation is different.

## Why is Polymorphism Important?

Suppose a company later adds:

- WhatsApp Notifications
- Slack Notifications
- Push Notifications

Each new notification class only needs its own implementation of the send() method.

Existing code remains unchanged.

This makes software easier to extend and maintain.

IMPORTANT: Polymorphism allows developers to add new functionality with minimal changes to existing code.

## Real-World Applications

Polymorphism is used in:

- Payment gateways
- Notification systems
- Banking applications
- E-commerce websites
- Online learning platforms
- Game development
- Cloud computing
- Machine Learning libraries

For example, different payment methods such as Credit Card, UPI, and Wallet all implement the same payment interface.

## Advantages of Polymorphism

Using polymorphism provides several benefits:

- Improves flexibility.
- Encourages code reuse.
- Reduces duplicate code.
- Simplifies maintenance.
- Makes applications scalable.

## Common Beginner Mistakes

Some common mistakes include:

- Confusing inheritance with polymorphism.
- Using different method names for similar operations.
- Forgetting to override inherited methods.
- Writing duplicate code instead of overriding methods.

IMPORTANT: Override methods only when different behavior is required.

## Best Practices

Follow these guidelines:

- Use meaningful method names.
- Override methods only when necessary.
- Keep implementations simple.
- Design classes for future extension.
- Avoid unnecessary code duplication.

## Key Points

- Polymorphism means "many forms."
- Different classes can use the same method name.
- Method overriding is a common form of polymorphism.
- Polymorphism improves flexibility and scalability.
- Modern software applications heavily rely on polymorphism.

IMPORTANT: Polymorphism is one of the core principles of Object-Oriented Programming that helps developers build flexible, reusable, and maintainable software.
`,

  examples: [
    {
      title: "Example 1: Method Overriding",

      code: `class Animal:

    def sound(self):
        print("Animal makes a sound")

class Dog(Animal):

    def sound(self):
        print("Dog barks")

dog = Dog()

dog.sound()`,

      output: `Dog barks`,
    },

    {
      title: "Example 2: Different Notification Classes",

      code: `class EmailNotification:

    def send(self):
        print("Sending Email")

class SMSNotification:

    def send(self):
        print("Sending SMS")

email = EmailNotification()
sms = SMSNotification()

email.send()
sms.send()`,

      output: `Sending Email
Sending SMS`,
    },

    {
      title: "Example 3: Payment System",

      code: `class CreditCard:

    def process_payment(self):
        print("Credit Card Payment")

class UPI:

    def process_payment(self):
        print("UPI Payment")

credit = CreditCard()
upi = UPI()

credit.process_payment()
upi.process_payment()`,

      output: `Credit Card Payment
UPI Payment`,
    },

    {
      title: "Example 4: Different Vehicles",

      code: `class Car:

    def start(self):
        print("Car Started")

class Bike:

    def start(self):
        print("Bike Started")

car = Car()
bike = Bike()

car.start()
bike.start()`,

      output: `Car Started
Bike Started`,
    },
  ],
};

export default lesson8;