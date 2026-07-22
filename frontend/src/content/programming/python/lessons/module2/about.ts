const aboutModule2 = {

  id: "about",

  title: "Decision Making",

  content: `
# Welcome to Module 2: Decision Making

Congratulations on completing Module 1!

In the previous module, you learned the fundamentals of Python including variables, data types, operators, user input, strings, and basic programming concepts.

Now it's time to make your programs intelligent.


# What is Decision Making?

Imagine using an ATM machine.

If your PIN is correct, the ATM allows you to access your account.

If the PIN is incorrect, access is denied.

Similarly, consider an online shopping website.

If payment is successful, the order is placed.

Otherwise, the order is cancelled.

Programs constantly make decisions like these.

The ability of a program to choose different actions based on conditions is called Decision Making.


# Why is Decision Making Important?

Without decision making, every program would execute the same instructions every time.

Modern software must react differently depending on different situations.

Decision making allows software to:

• Verify user credentials.

• Approve or reject transactions.

• Generate certificates.

• Check attendance eligibility.

• Recommend products.

• Detect security threats.

• Validate user input.

• Control access to resources.

This makes applications interactive, reliable, and intelligent.


# Real-World Applications

Decision making is used in almost every software application.

Examples include:

• Login Systems

• ATM Machines

• Banking Applications

• Online Shopping Websites

• Hospital Management Systems

• School Management Systems

• Cybersecurity Software

• Cloud Computing Platforms

• AI Applications

• Mobile Applications


Every time software asks a question like "Is this condition true?", it is using decision making.


# What You Will Learn

In this module, you will learn:

• Introduction to Decision Making

• Boolean Values

• if Statement

• if else Statement

• if elif else Statement

• Nested if Statements

• Logical Operators

• Membership Operators

• Identity Operators

• Match Case Statement

• Introduction to Loops

• while Loop

• for Loop

• range() Function

• Nested Loops

• break Statement

• continue Statement

• pass Statement


# Skills You Will Gain

By the end of this module, you will be able to:

• Build Login Systems

• Create Attendance Checkers

• Develop Banking Applications

• Validate User Input

• Generate Certificates

• Create Grading Systems

• Build Inventory Management Systems

• Develop Access Control Systems

• Write Intelligent Python Programs

• Solve Real-World Decision Problems


# Industry Examples

Decision making is one of the most frequently used concepts in software development.

Companies like Amazon, Google, Microsoft, Netflix, Flipkart, Paytm, and banking organizations use decision-making logic millions of times every second.

Examples include:

• Verifying passwords

• Checking OTPs

• Detecting fraud

• Recommending products

• Approving online payments

• Filtering search results

• Showing personalized content


IMPORTANT:

Decision making is one of the foundations of programming.

Almost every program you build in the future will use the concepts learned in this module.

Take time to understand each lesson and practice every example.


# Prerequisites

Before starting this module, you should already know:

• Variables

• Data Types

• User Input

• Arithmetic Operators

• Comparison Operators

• Assignment Operators

• String Formatting

• Escape Characters


# Module Summary

In this module, you will transform your Python programs from simple scripts into intelligent applications that can think, compare conditions, and respond differently based on different situations.

Let's begin your journey into Decision Making.
`,



  examples: [

    {
      title: "ATM Decision",

      code: `pin_correct = True

if pin_correct:
    print("Access Granted")
else:
    print("Invalid PIN")`,

      output: `Access Granted`,
    },


    {
      title: "Course Certificate",

      code: `final_score = 82

if final_score >= 70:
    print("Certificate Generated")
else:
    print("Certificate Not Eligible")`,

      output: `Certificate Generated`,
    },


    {
      title: "Online Shopping",

      code: `payment_successful = True

if payment_successful:
    print("Order Placed")
else:
    print("Payment Failed")`,

      output: `Order Placed`,
    },


  ],


};


export default aboutModule2;