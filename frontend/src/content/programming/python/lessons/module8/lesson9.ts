const lesson9 = {
  id: "lesson9",

  title: "Abstraction",

  previousLesson: "/lesson/python-development/module8/lesson8",

  nextLesson: "/lesson/python-development/module8/lesson10",

  content: `# Abstraction

In the previous lesson, you learned about **Polymorphism**, where different objects can respond differently to the same method. Another important pillar of Object-Oriented Programming is **Abstraction**.

Abstraction is the process of hiding unnecessary implementation details and exposing only the essential functionality to the user. Instead of worrying about how something works internally, users only need to know how to use it.

Abstraction makes software easier to understand, use, and maintain.

## Why Do We Need Abstraction?

Imagine driving a car.

To drive the car, you only need to know how to use:

- Steering Wheel
- Accelerator
- Brake Pedal
- Gear Lever

You do not need to understand:

- Engine Combustion
- Fuel Injection
- Transmission System
- Cooling Mechanism

The complex internal implementation is hidden from the driver.

Programming follows the same principle.

IMPORTANT: Abstraction hides complexity and shows only the necessary functionality.

## What is Abstraction?

Abstraction is the process of hiding implementation details while exposing only the important features.

In simple words:

- Show **what** an object does.
- Hide **how** it does it.

This allows developers to use complex systems without understanding every internal detail.

## Why is Abstraction Important?

As applications become larger:

- Internal logic becomes more complex.
- Developers should not access every implementation detail.
- Software becomes difficult to maintain.

Abstraction solves these problems by providing a clear interface while hiding unnecessary complexity.

This makes software:

- Easier to use.
- Easier to maintain.
- Easier to extend.

## Creating an Abstract Class

Python provides the **abc** (Abstract Base Class) module for creating abstract classes.

Example:

from abc import ABC, abstractmethod

class PaymentGateway(ABC):

    @abstractmethod
    def process_payment(self):
        pass

The abstract class defines what every payment gateway should do without specifying how it should do it.

## Implementing an Abstract Class

A child class provides the actual implementation.

Example:

from abc import ABC, abstractmethod

class PaymentGateway(ABC):

    @abstractmethod
    def process_payment(self):
        pass

class CreditCardPayment(PaymentGateway):

    def process_payment(self):
        print("Processing Credit Card Payment")

payment = CreditCardPayment()

payment.process_payment()

Output:

Processing Credit Card Payment

The abstract class defines the interface, while the child class defines the implementation.

IMPORTANT: Abstract methods must be implemented by child classes.

## Advantages of Abstraction

Using abstraction provides several benefits:

- Reduces complexity.
- Improves code readability.
- Encourages standardization.
- Makes software easier to extend.
- Simplifies maintenance.

Large applications rely heavily on abstraction because different teams can work independently without exposing internal implementation details.

## Real-World Applications

Abstraction is widely used in:

- Payment gateways.
- Database drivers.
- Cloud computing services.
- REST APIs.
- Machine Learning libraries.
- Operating systems.
- Web frameworks.

For example, when sending an online payment, users simply click **Pay Now**. The complex verification, encryption, and transaction processing happen behind the scenes.

## Common Beginner Mistakes

Some common mistakes include:

- Confusing abstraction with encapsulation.
- Exposing unnecessary implementation details.
- Forgetting to implement abstract methods.
- Creating abstract classes when they are not required.

IMPORTANT: Encapsulation protects data, while abstraction hides complexity.

## Best Practices

Follow these guidelines while using abstraction:

- Expose only essential functionality.
- Hide internal implementation details.
- Keep interfaces simple.
- Use meaningful method names.
- Design reusable abstract classes.

## Key Points

- Abstraction hides implementation details.
- It exposes only essential functionality.
- Python supports abstraction using the abc module.
- Abstract methods must be implemented by child classes.
- Abstraction improves maintainability and scalability.

IMPORTANT: Abstraction allows developers to build large and complex applications while keeping the code simple and easy to use.`,

  examples: [
    {
      title: "Example 1: Creating an Abstract Class",

      code: `from abc import ABC, abstractmethod

class PaymentGateway(ABC):

    @abstractmethod
    def process_payment(self):
        pass`,

      output: `Abstract class created successfully.`,
    },

    {
      title: "Example 2: Implementing an Abstract Method",

      code: `from abc import ABC, abstractmethod

class PaymentGateway(ABC):

    @abstractmethod
    def process_payment(self):
        pass

class CreditCardPayment(PaymentGateway):

    def process_payment(self):
        print("Processing Credit Card Payment")

payment = CreditCardPayment()

payment.process_payment()`,

      output: `Processing Credit Card Payment`,
    },

    {
      title: "Example 3: Online Payment System",

      code: `class UPIPayment(PaymentGateway):

    def process_payment(self):
        print("Processing UPI Payment")

payment = UPIPayment()

payment.process_payment()`,

      output: `Processing UPI Payment`,
    },

    {
      title: "Example 4: Cloud Storage",

      code: `class CloudStorage(ABC):

    @abstractmethod
    def upload(self):
        pass

class GoogleDrive(CloudStorage):

    def upload(self):
        print("Uploading File")

drive = GoogleDrive()

drive.upload()`,

      output: `Uploading File`,
    },
  ],
};

export default lesson9;