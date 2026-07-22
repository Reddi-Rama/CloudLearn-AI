const lesson10 = {
  id: "lesson10",

  title: "Real World Decision Systems",

  previousLesson:
    "/lesson/python-development/module2/lesson9",

  nextLesson:
    "/lesson/python-development/module3/about",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand how decision-making concepts work together.

• Apply Boolean values, conditional statements, and operators in real-world programs.

• Build simple decision-making systems.

• Identify real-world applications of decision-making.

• Write intelligent Python programs.

# Bringing Everything Together

In this module, you have learned several important decision-making concepts.

These concepts work together to help software make intelligent decisions.

The concepts include:

• Boolean Values

• if Statements

• if else Statements

• if elif else Statements

• Nested if Statements

• Logical Operators

• Membership Operators

• Identity Operators

Using these concepts together allows developers to build powerful applications that can respond to different situations.

# What is a Real World Decision System?

A Real World Decision System is a program that makes decisions based on one or more conditions.

Instead of performing the same task every time, the program analyzes information and chooses the correct action.

Almost every software application uses decision-making.

# Real-World Example: Data Center Alert System

Cloud platforms continuously monitor server health.

If CPU usage becomes very high, the monitoring system generates a critical alert.

If CPU usage is moderately high, a warning message is displayed.

Otherwise, the server is considered healthy.

This helps administrators respond before failures occur.

# Real-World Example: File Access Permission

Organizations allow access only to authorized users.

When a user requests access, the system checks whether the username exists in the list of authorized users.

If the username exists, access is granted.

Otherwise, access is denied.

# Real-World Example: Subscription Verification

Streaming platforms provide premium features only to active subscribers.

The application verifies:

• Subscription status

• Payment verification

Only after both conditions become True are premium features enabled.

# Real-World Example: Smart Traffic Control

Traffic signals automatically guide vehicles.

The system checks the current signal.

Green allows vehicles to proceed.

Yellow instructs drivers to prepare to stop.

Red requires vehicles to stop.

# More Applications of Decision Systems

Decision making is used in almost every software application, including:

• Authentication Systems

• Banking Software

• ATM Machines

• Online Shopping Websites

• Hospital Management Systems

• Student Management Systems

• Cloud Monitoring Platforms

• Cybersecurity Applications

• Fraud Detection Systems

• Smart Home Devices

• Autonomous Vehicles

• AI-Based Recommendation Systems

# Why Decision Making is Important

Without decision making, software would simply execute instructions without understanding different situations.

Decision-making enables applications to:

• Validate user input.

• Protect sensitive information.

• Automate business processes.

• Detect unusual activities.

• Improve user experience.

• Increase system reliability.

# Best Practices

• Keep conditions simple and readable.

• Use meaningful variable names.

• Avoid unnecessary nested conditions.

• Test both True and False scenarios.

• Write clean and maintainable code.

IMPORTANT:

Decision-making is one of the most important concepts in programming.

Almost every application you build in the future will use these concepts repeatedly.

Understanding them thoroughly will make learning loops, functions, object-oriented programming, and advanced Python much easier.

# Module Summary

Congratulations!

You have successfully completed Module 2: Decision Making.

In this module, you learned:

• Boolean Values

• if Statements

• if else Statements

• if elif else Statements

• Nested if Statements

• Logical Operators

• Membership Operators

• Identity Operators

• Real World Decision Systems

These concepts form the foundation for writing intelligent programs.

In the next module, you will learn Functions, which allow you to organize, reuse, and simplify Python programs.
`,

  examples: [
    {
      title: "Example 1: Data Center Alert System",

      code: `cpu_usage = 92

if cpu_usage >= 90:
    print("Critical Alert")
elif cpu_usage >= 70:
    print("Warning")
else:
    print("System Healthy")`,

      output: `Critical Alert`,
    },

    {
      title: "Example 2: File Access Permission",

      code: `authorized_users = ["admin", "manager", "auditor"]

username = "manager"

if username in authorized_users:
    print("Access Granted")
else:
    print("Access Denied")`,

      output: `Access Granted`,
    },

    {
      title: "Example 3: Subscription Verification",

      code: `subscription_active = True
payment_verified = True

if subscription_active and payment_verified:
    print("Premium Features Enabled")
else:
    print("Upgrade Required")`,

      output: `Premium Features Enabled`,
    },

    {
      title: "Example 4: Smart Traffic Control",

      code: `traffic_signal = "Green"

if traffic_signal == "Green":
    print("Proceed")
elif traffic_signal == "Yellow":
    print("Prepare to Stop")
else:
    print("Stop")`,

      output: `Proceed`,
    },

    {
      title: "Example 5: ATM Withdrawal",

      code: `balance = 12000
withdraw = 5000

if balance >= withdraw:
    print("Transaction Successful")
else:
    print("Insufficient Balance")`,

      output: `Transaction Successful`,
    },

    {
      title: "Example 6: Login Authentication",

      code: `username = "admin"
password = "Python123"

if username == "admin" and password == "Python123":
    print("Login Successful")
else:
    print("Invalid Credentials")`,

      output: `Login Successful`,
    },

    {
      title: "Example 7: Email Validation",

      code: `email = "student@example.com"

if "@" in email:
    print("Valid Email")
else:
    print("Invalid Email")`,

      output: `Valid Email`,
    },

    {
      title: "Example 8: API Response Check",

      code: `response = None

if response is None:
    print("No Response Received")
else:
    print("Processing Data")`,

      output: `No Response Received`,
    },
  ],
};

export default lesson10;