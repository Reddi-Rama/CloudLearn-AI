const lesson7 = {
  id: "lesson7",

  title: "Variable Length Arguments",

  previousLesson: "/lesson/python-development/module5/lesson6",

  nextLesson: "/lesson/python-development/module5/lesson8",

  content: `# Variable Length Arguments

In the previous lesson, you learned how keyword arguments improve the readability of function calls. However, many real-world applications do not always know how many values a function will receive.

For example, an online shopping application may process two products in one order, five products in another order, and twenty products in a different order. Creating separate functions for each situation would be inefficient.

Python solves this problem using **Variable Length Arguments**, allowing a function to accept any number of arguments.

There are two types of variable length arguments:

- *args (Variable Positional Arguments)
- **kwargs (Variable Keyword Arguments)

These features make functions highly flexible and reusable.

## Why Do We Need Variable Length Arguments?

Sometimes the amount of information passed to a function is unknown.

Examples include:

- Processing shopping cart items.
- Calculating total marks of students.
- Handling multiple server names.
- Reading dynamic configuration values.
- Processing API request parameters.

Instead of creating many different functions, one function can handle all situations.

IMPORTANT: Variable length arguments allow a function to accept any number of values.

## Understanding *args

The **\*args** syntax allows a function to receive multiple positional arguments.

Syntax:

def function_name(*args):
    statements

Python automatically stores all received arguments inside a tuple.

Example:

def calculate_total(*prices):
    print(prices)

calculate_total(1200, 2500, 800)

Output:

(1200, 2500, 800)

Here, prices is a tuple containing all the values.

## Processing *args

Since *args is stored as a tuple, it can be processed using loops.

Example:

def calculate_total(*prices):
    total = 0

    for price in prices:
        total += price

    return total

print(calculate_total(1200, 2500, 800))

Output:

4500

Now the function can calculate the total for any number of prices.

## Understanding **kwargs

The **\*\*kwargs** syntax allows a function to receive multiple keyword arguments.

Syntax:

def function_name(**kwargs):
    statements

Python stores these values inside a dictionary.

Example:

def display_server_info(**details):
    print(details)

display_server_info(
    name="Auth-Service",
    region="Asia-South",
    status="Running"
)

Output:

{'name': 'Auth-Service', 'region': 'Asia-South', 'status': 'Running'}

Each keyword becomes a dictionary key.

## Accessing Keyword Arguments

Since **kwargs is stored as a dictionary, it can be accessed using loops.

Example:

def display_server_info(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

display_server_info(
    name="Auth-Service",
    region="Asia-South",
    status="Running"
)

Output:

name: Auth-Service
region: Asia-South
status: Running

## When Should We Use Variable Length Arguments?

Variable length arguments are useful when:

- The number of inputs is unknown.
- Building reusable utility functions.
- Creating Python libraries.
- Developing APIs.
- Processing configuration files.
- Building automation scripts.
- Handling dynamic user input.

IMPORTANT: Use *args for multiple positional values and **kwargs for multiple named values.

## Real-World Applications

Variable length arguments are widely used in:

- Shopping cart systems.
- Billing applications.
- Cloud deployment tools.
- Logging frameworks.
- Machine Learning libraries.
- Data processing pipelines.
- Web frameworks.
- REST APIs.

For example, an e-commerce application can calculate the total cost regardless of how many products a customer purchases.

## Advantages of Variable Length Arguments

Using variable length arguments provides several benefits:

- Makes functions highly flexible.
- Eliminates duplicate functions.
- Supports dynamic input.
- Improves code reusability.
- Simplifies application development.
- Reduces code complexity.

## Common Beginner Mistakes

Some common mistakes include:

- Confusing *args with **kwargs.
- Forgetting that *args is stored as a tuple.
- Forgetting that **kwargs is stored as a dictionary.
- Using variable length arguments when a fixed number of parameters is sufficient.

IMPORTANT: Choose variable length arguments only when the number of inputs cannot be determined beforehand.

## Best Practices

Follow these guidelines:

- Use *args for multiple positional arguments.
- Use **kwargs for multiple keyword arguments.
- Use meaningful variable names.
- Keep functions simple and readable.
- Avoid overusing variable length arguments.

## Key Points

- *args accepts multiple positional arguments.
- **kwargs accepts multiple keyword arguments.
- *args stores values in a tuple.
- **kwargs stores values in a dictionary.
- Variable length arguments make functions flexible and reusable.

IMPORTANT: Variable length arguments are widely used in professional Python libraries and frameworks because they allow functions to work with dynamic amounts of data.`,

  examples: [
    {
      title: "Example 1: Using *args",

      code: `def calculate_total(*prices):
    print(prices)

calculate_total(1200, 2500, 800)`,

      output: `(1200, 2500, 800)`,
    },

    {
      title: "Example 2: Processing *args",

      code: `def calculate_total(*prices):
    total = 0

    for price in prices:
        total += price

    return total

print(calculate_total(1200, 2500, 800))`,

      output: `4500`,
    },

    {
      title: "Example 3: Using **kwargs",

      code: `def display_server_info(**details):
    print(details)

display_server_info(
    name="Auth-Service",
    region="Asia-South",
    status="Running"
)`,

      output: `{'name': 'Auth-Service', 'region': 'Asia-South', 'status': 'Running'}`,
    },

    {
      title: "Example 4: Accessing **kwargs",

      code: `def display_server_info(**details):
    for key, value in details.items():
        print(f"{key}: {value}")

display_server_info(
    name="Auth-Service",
    region="Asia-South",
    status="Running"
)`,

      output: `name: Auth-Service
region: Asia-South
status: Running`,
    },
  ],
};

export default lesson7;