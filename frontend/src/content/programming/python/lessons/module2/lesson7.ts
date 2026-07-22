const lesson7 = {
  id: "lesson7",

  title: "Logical Operators",

  previousLesson:
    "/lesson/python-development/module2/lesson6",

  nextLesson:
    "/lesson/python-development/module2/lesson8",

  content: `
# Learning Objectives

After completing this lesson, you will be able to:

• Understand why logical operators are required.

• Learn the three logical operators in Python.

• Use the and operator.

• Use the or operator.

• Use the not operator.

• Combine multiple conditions in decision-making programs.

# Why Do We Need Logical Operators?

Sometimes a single condition is not enough to make a decision.

Real-world applications often require checking multiple conditions before performing an action.

For example:

• A student should attend the final examination only if attendance is at least 75% and assignments are submitted.

• A server should generate an alert if CPU usage is high or memory usage is high.

• A request should be blocked if the IP address is not trusted.

To combine or modify conditions, Python provides Logical Operators.

# What are Logical Operators?

Logical operators combine or reverse Boolean expressions.

Python provides three logical operators:

• and

• or

• not

These operators are widely used in authentication systems, banking software, cloud applications, AI systems, and security platforms.

# The and Operator

The and operator returns True only when all conditions are True.

If even one condition becomes False, the entire expression becomes False.

This operator is useful when every condition must be satisfied before an action is performed.

# The or Operator

The or operator returns True if at least one condition is True.

It returns False only when every condition is False.

This operator is useful whenever one successful condition is sufficient.

# The not Operator

The not operator reverses a Boolean value.

True becomes False.

False becomes True.

This operator is commonly used when checking negative conditions.

# Combining Multiple Conditions

Logical operators can be combined to create powerful decision-making programs.

Programs can verify multiple requirements before allowing access or performing important operations.

# Real-World Example: Examination System

A student is allowed to attend the final examination only if:

• Attendance is at least 75%.

• Assignment submission is complete.

Both conditions must be satisfied.

# Real-World Example: Cloud Monitoring

A cloud monitoring application generates an alert whenever:

• CPU usage becomes critical.

OR

• Memory usage becomes critical.

Only one condition is required to trigger the alert.

# Real-World Example: Maintenance Mode

A website should be available only when maintenance mode is disabled.

The not operator makes this condition easy to express.

# Truth Table

For the and operator:

• True and True → True

• True and False → False

• False and True → False

• False and False → False

For the or operator:

• True or True → True

• True or False → True

• False or True → True

• False or False → False

For the not operator:

• not True → False

• not False → True

IMPORTANT:

Logical operators work with Boolean values.

Always make sure each condition returns either True or False before combining them.

# Best Practices

• Use and when every condition must be satisfied.

• Use or when any one condition is enough.

• Use not only when it improves readability.

• Keep conditions simple and meaningful.

• Avoid writing unnecessarily complex expressions.

# Lesson Summary

In this lesson, you learned:

• Why logical operators are required.

• The and operator.

• The or operator.

• The not operator.

• How to combine multiple conditions.

Logical operators are widely used in authentication systems, monitoring systems, filtering systems, banking software, cloud platforms, and access control mechanisms.
`,

  examples: [
    {
      title: "Example 1: Using and Operator",

      code: `attendance = 82
assignment_submitted = True

if attendance >= 75 and assignment_submitted:
    print("Eligible for Final Examination")`,

      output: `Eligible for Final Examination`,
    },

    {
      title: "Example 2: Banking Verification",

      code: `logged_in = True
otp_verified = True

if logged_in and otp_verified:
    print("Transaction Allowed")`,

      output: `Transaction Allowed`,
    },

    {
      title: "Example 3: Using or Operator",

      code: `cpu_usage = 92
memory_usage = 65

if cpu_usage > 90 or memory_usage > 90:
    print("System Alert Generated")`,

      output: `System Alert Generated`,
    },

    {
      title: "Example 4: Emergency Alert",

      code: `fire_detected = False
gas_leak = True

if fire_detected or gas_leak:
    print("Emergency Alarm Activated")`,

      output: `Emergency Alarm Activated`,
    },

    {
      title: "Example 5: Using not Operator",

      code: `maintenance_mode = False

if not maintenance_mode:
    print("Application Available")`,

      output: `Application Available`,
    },

    {
      title: "Example 6: Library Access",

      code: `library_closed = False

if not library_closed:
    print("Library Open")`,

      output: `Library Open`,
    },

    {
      title: "Example 7: Combining Multiple Conditions",

      code: `api_running = True
database_connected = True

if api_running and database_connected:
    print("System Operational")`,

      output: `System Operational`,
    },

    {
      title: "Example 8: Online Shopping",

      code: `payment_successful = True
address_verified = True

if payment_successful and address_verified:
    print("Order Confirmed")`,

      output: `Order Confirmed`,
    },
  ],
};

export default lesson7;