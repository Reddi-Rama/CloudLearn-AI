const lesson6 = {
  id: "lesson6",

  title: "Keyword Arguments",

  previousLesson: "/lesson/python-development/module5/lesson5",

  nextLesson: "/lesson/python-development/module5/lesson7",

  content: `# Keyword Arguments

In the previous lesson, you learned how default arguments make functions more flexible by providing predefined values. However, when a function has multiple parameters, remembering the correct order of arguments can become difficult.

Python solves this problem by allowing arguments to be passed using the parameter names instead of their positions. These are called **Keyword Arguments**.

Keyword arguments improve code readability, reduce mistakes, and make function calls easier to understand.

## Why Do We Need Keyword Arguments?

Suppose a function creates a virtual machine in a cloud platform.

Without keyword arguments:

create_virtual_machine("Analytics-VM", "Asia-South")

Although the function works correctly, it is not immediately obvious which value represents the virtual machine name and which represents the region.

Using keyword arguments makes the function call much clearer.

IMPORTANT: Keyword arguments make programs more readable and easier to maintain.

## What are Keyword Arguments?

Keyword arguments are arguments passed using the parameter names during a function call.

Syntax:

function_name(parameter=value)

Python matches each value with the corresponding parameter name instead of relying on its position.

Example:

def create_virtual_machine(name, region):
    print(f"VM Name: {name}")
    print(f"Region: {region}")

create_virtual_machine(
    region="Asia-South",
    name="Analytics-VM"
)

Output:

VM Name: Analytics-VM
Region: Asia-South

Notice that the order of the arguments does not matter because parameter names are used.

## Positional Arguments vs Keyword Arguments

Positional arguments are matched according to their order.

Example:

def create_user(name, role):
    print(name)
    print(role)

create_user("Alex", "Administrator")

Output:

Alex
Administrator

Keyword arguments are matched using parameter names.

Example:

create_user(role="Administrator", name="Alex")

Output:

Alex
Administrator

Both approaches produce the same result, but keyword arguments improve readability.

## Combining Positional and Keyword Arguments

Python allows positional and keyword arguments to be used together.

Example:

def deploy_service(service_name, region, replicas):
    print(service_name)
    print(region)
    print(replicas)

deploy_service(
    "Payment-Service",
    region="Asia-South",
    replicas=3
)

Output:

Payment-Service
Asia-South
3

This is valid because positional arguments appear before keyword arguments.

IMPORTANT: Positional arguments must always come before keyword arguments.

## Incorrect Usage

The following example is incorrect:

deploy_service(
    region="Asia-South",
    "Payment-Service",
    replicas=3
)

Python produces an error because a positional argument appears after a keyword argument.

Always place positional arguments first.

## Real-World Applications

Keyword arguments are widely used in:

- Cloud deployment systems.
- Web applications.
- Machine Learning libraries.
- REST APIs.
- Database operations.
- Automation scripts.
- Configuration management.
- Enterprise software.

For example, cloud deployment tools often use keyword arguments because they make deployment settings easier to understand.

## Advantages of Keyword Arguments

Using keyword arguments provides several benefits:

- Improves readability.
- Reduces mistakes.
- Makes function calls self-explanatory.
- Allows arguments to be passed in any order.
- Simplifies maintenance of large applications.

## Common Beginner Mistakes

Some common mistakes include:

- Placing positional arguments after keyword arguments.
- Misspelling parameter names.
- Assuming keyword arguments are mandatory.
- Mixing argument types incorrectly.

IMPORTANT: When combining positional and keyword arguments, always provide positional arguments first.

## Best Practices

Follow these guidelines:

- Use keyword arguments when functions have many parameters.
- Prefer keyword arguments for optional values.
- Use meaningful parameter names.
- Keep function calls clean and readable.
- Avoid unnecessary mixing of argument styles.

## Key Points

- Keyword arguments use parameter names during function calls.
- They improve readability and reduce errors.
- The order of keyword arguments does not matter.
- Positional arguments must come before keyword arguments.
- Keyword arguments are widely used in professional Python applications.

IMPORTANT: Keyword arguments make function calls more descriptive, helping developers understand code quickly and reducing the likelihood of mistakes.`,

  examples: [
    {
      title: "Example 1: Using Keyword Arguments",

      code: `def create_virtual_machine(name, region):
    print(f"VM Name: {name}")
    print(f"Region: {region}")

create_virtual_machine(
    region="Asia-South",
    name="Analytics-VM"
)`,

      output: `VM Name: Analytics-VM
Region: Asia-South`,
    },

    {
      title: "Example 2: Positional Arguments",

      code: `def create_user(name, role):
    print(name)
    print(role)

create_user("Alex", "Administrator")`,

      output: `Alex
Administrator`,
    },

    {
      title: "Example 3: Combining Positional and Keyword Arguments",

      code: `def deploy_service(service_name, region, replicas):
    print(service_name)
    print(region)
    print(replicas)

deploy_service(
    "Payment-Service",
    region="Asia-South",
    replicas=3
)`,

      output: `Payment-Service
Asia-South
3`,
    },

    {
      title: "Example 4: Scheduling a Backup",

      code: `def schedule_backup(server_name, backup_time, compressed):
    print(f"Server: {server_name}")
    print(f"Backup Time: {backup_time}")
    print(f"Compressed: {compressed}")

schedule_backup(
    server_name="Database-01",
    backup_time="02:00 AM",
    compressed=True
)`,

      output: `Server: Database-01
Backup Time: 02:00 AM
Compressed: True`,
    },
  ],
};

export default lesson6;