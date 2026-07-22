const lesson6 = {
  id: "lesson6",

  title: "Nested if Statements",

  previousLesson:
    "/lesson/python-development/module2/lesson5",

  nextLesson:
    "/lesson/python-development/module2/lesson7",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand what nested if statements are.

• Learn why nested conditions are required.

• Understand how Python executes nested if statements.

• Implement multiple levels of decision making.

• Apply nested if statements in real-world applications.

# What are Nested if Statements?

A nested if statement is an if statement placed inside another if statement.

The inner if statement executes only if the outer if statement evaluates to True.

Nested conditions are useful when a decision depends on multiple levels of validation instead of a single condition.

# Why Do We Need Nested if Statements?

In many real-world applications, one condition alone is not enough.

A program often needs to verify several conditions one after another before allowing an action.

For example:

• A user must first log in successfully.

• Then the system verifies administrator privileges.

• Only then is access granted to administrative features.

This layered decision-making process is implemented using nested if statements.

# Syntax of Nested if Statement

The basic syntax is:

if condition1:
    statement(s)

    if condition2:
        statement(s)

The inner if statement is written inside the outer if block using proper indentation.

# How Nested if Statements Work

Step 1

Python evaluates the outer if condition.

Step 2

If the outer condition is True, Python enters the outer block.

Step 3

Python then evaluates the inner if condition.

Step 4

If the inner condition is also True, the inner block executes.

Step 5

If the outer condition is False, Python skips the entire nested block.

# Understanding the Flow

The execution always begins with the outer condition.

The inner condition is checked only after the outer condition becomes True.

If the outer condition is False, Python never reaches the inner if statement.

# Real-World Example: Secure Server Access

A company server first checks whether the user is authenticated.

Only after successful authentication does it verify whether the user has administrator privileges.

If both conditions are satisfied, access to server settings is granted.

# Real-World Example: Online Banking

A banking application first verifies whether the customer is logged in.

Then it checks whether the customer has sufficient account balance.

Only after both conditions are satisfied is the transaction processed.

# Real-World Example: Examination Portal

An examination portal first checks whether the student has completed registration.

Next, it verifies whether the examination fee has been paid.

Only then is the student allowed to attend the examination.

# When Should You Use Nested if Statements?

Nested if statements are useful when:

• One condition depends on another.

• Multiple levels of verification are required.

• Authentication systems are implemented.

• Security checks are performed sequentially.

• Access control systems are developed.

# Common Mistakes

• Incorrect indentation.

• Forgetting the colon (:).

• Writing unnecessary nested conditions.

• Making the nesting too deep.

IMPORTANT:

The inner if statement executes only when the outer if condition is True.

If the outer condition is False, Python skips the entire nested block.

# Best Practices

• Avoid excessive nesting because deeply nested code becomes difficult to read.

• Use meaningful variable names.

• Keep the logic simple and organized.

• If nesting becomes too deep, consider using logical operators instead.

# Lesson Summary

In this lesson, you learned:

• What nested if statements are.

• How nested if statements work.

• Why multiple levels of validation are important.

• Real-world applications of nested if statements.

Nested if statements allow programs to make more sophisticated decisions and are commonly used in authentication systems, permission systems, banking software, and enterprise applications.
`,

  examples: [
    {
      title: "Example 1: Secure Server Access",

      code: `authenticated = True
admin_access = True

if authenticated:
    print("User authenticated.")

    if admin_access:
        print("Access to server settings granted.")`,

      output: `User authenticated.
Access to server settings granted.`,
    },

    {
      title: "Example 2: Banking System",

      code: `logged_in = True
sufficient_balance = True

if logged_in:
    print("Login Successful")

    if sufficient_balance:
        print("Transaction Approved")`,

      output: `Login Successful
Transaction Approved`,
    },

    {
      title: "Example 3: Examination Portal",

      code: `registration_completed = True
fee_paid = False

if registration_completed:
    print("Registration Verified")

    if fee_paid:
        print("Eligible for Examination")`,

      output: `Registration Verified`,
    },

    {
      title: "Example 4: Online Shopping",

      code: `logged_in = True
payment_successful = True

if logged_in:
    print("User Logged In")

    if payment_successful:
        print("Order Confirmed")`,

      output: `User Logged In
Order Confirmed`,
    },

    {
      title: "Example 5: Cloud Server",

      code: `server_running = True
database_connected = True

if server_running:
    print("Server Online")

    if database_connected:
        print("Application Started")`,

      output: `Server Online
Application Started`,
    },

    {
      title: "Example 6: College Admission",

      code: `application_submitted = True
documents_verified = True

if application_submitted:
    print("Application Received")

    if documents_verified:
        print("Admission Confirmed")`,

      output: `Application Received
Admission Confirmed`,
    },

    {
      title: "Example 7: Login Failure",

      code: `authenticated = False
admin_access = True

if authenticated:
    print("User Authenticated")

    if admin_access:
        print("Access Granted")`,

      output: `No Output`,
    },

    {
      title: "Example 8: Employee Access",

      code: `employee_verified = True
department_head = False

if employee_verified:
    print("Employee Verified")

    if department_head:
        print("Management Portal Access")`,

      output: `Employee Verified`,
    },
  ],
};

export default lesson6;