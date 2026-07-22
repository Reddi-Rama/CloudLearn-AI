const lesson8 = {

  id: "lesson8",

  title: "Advanced String Formatting",

  content: `
# Advanced String Formatting

## Why Do We Need Advanced Formatting?

Professional applications rarely display raw values directly.

Instead, they generate readable and professional output for users, reports, dashboards, and logs.

For example:

Server: Authentication-Service

CPU Usage: 72.45%

Status: Running

Python provides powerful formatting tools to achieve this.


# Using f-Strings

The most recommended way to format strings in modern Python is using f-strings.

f-Strings allow variables and expressions to be placed directly inside strings using curly braces {}.


## Example

server_name = "Authentication-Service"

status = "Running"

print(f"Server: {server_name}")

print(f"Status: {status}")


## Output

Server: Authentication-Service

Status: Running



# Formatting Numbers

Python allows you to control how numbers are displayed.

You can specify the number of decimal places shown while displaying floating-point values.


## Example

cpu_usage = 72.45678

print(f"CPU Usage: {cpu_usage:.2f}%")



## Output

CPU Usage: 72.46%



The .2f means:

- Display the value as a floating-point number.

- Show exactly two digits after the decimal point.



# Formatting Large Numbers

Large numbers can become difficult to read.

Python allows numbers to be formatted using separators.


## Example

monthly_revenue = 12500000

print(f"Revenue: ₹{monthly_revenue:,}")



## Output

Revenue: ₹12,500,000



The comma separator improves readability and makes large values easier to understand.



# Formatting Expressions

f-Strings can evaluate expressions directly inside curly braces.

This allows calculations to be performed while creating output.


## Example

price = 1200

quantity = 3

print(f"Total Amount: ₹{price * quantity}")



## Output

Total Amount: ₹3600



# Real-World Example

Applications use formatting to display system information, reports, and dashboards.


Example:

application = "CloudLearn AI"

active_users = 15420

uptime = 99.98


print(f"Application: {application}")

print(f"Active Users: {active_users:,}")

print(f"Uptime: {uptime:.2f}%")



## Output

Application: CloudLearn AI

Active Users: 15,420

Uptime: 99.98%



# Best Practices

- Prefer f-strings over older formatting methods.

- Format numbers for better readability.

- Limit decimal places when displaying percentages and measurements.

- Use formatting to make reports and logs easier to understand.



# Lesson Summary

Advanced string formatting helps developers create clean, readable, and professional output.

f-Strings are the modern and recommended approach for formatting strings in Python.

Professional formatting improves user experience and makes applications look polished and reliable.
`,



  examples: [

    {
      title: "Basic f-String Example",

      code: `server_name = "Authentication-Service"

status = "Running"

print(f"Server: {server_name}")
print(f"Status: {status}")`,

      output: `Server: Authentication-Service
Status: Running`,
    },



    {
      title: "Decimal Formatting Example",

      code: `cpu_usage = 72.45678

print(f"CPU Usage: {cpu_usage:.2f}%")`,

      output: `CPU Usage: 72.46%`,
    },



    {
      title: "Large Number Formatting Example",

      code: `monthly_revenue = 12500000

print(f"Revenue: ₹{monthly_revenue:,}")`,

      output: `Revenue: ₹12,500,000`,
    },



    {
      title: "Expression Formatting Example",

      code: `price = 1200

quantity = 3

print(f"Total Amount: ₹{price * quantity}")`,

      output: `Total Amount: ₹3600`,
    },



    {
      title: "Real-World Dashboard Example",

      code: `application = "CloudLearn AI"

active_users = 15420

uptime = 99.98

print(f"Application: {application}")
print(f"Active Users: {active_users:,}")
print(f"Uptime: {uptime:.2f}%")`,

      output: `Application: CloudLearn AI
Active Users: 15,420
Uptime: 99.98%`,
    },

  ],

};


export default lesson8;