const lesson4 = {
  id: "lesson4",

  title: "Return Statement",

  previousLesson: "/lesson/python-development/module5/lesson3",

  nextLesson: "/lesson/python-development/module5/lesson5",

  content: `# Return Statement

In the previous lessons, you learned how to create functions and pass information to them using parameters and arguments.

So far, our functions have displayed results using the **print()** function. While printing values is useful, real-world applications often need functions to send results back to the program so they can be stored, processed, or used in further calculations.

This is accomplished using the **return** statement.

The return statement is one of the most important concepts in Python because it allows functions to communicate with the rest of the program.

## Why Do We Need the Return Statement?

Consider a billing application that calculates the total cost of an order.

If the function only prints the result, other parts of the application cannot reuse that value.

Instead, the function should return the calculated amount so it can be stored, displayed, or used for additional calculations.

Functions that return values are much more useful and flexible than functions that only display output.

IMPORTANT: Use **return** whenever the result of a function needs to be used elsewhere in the program.

## What is the Return Statement?

The **return** statement sends a value back from a function to the place where the function was called.

Syntax:

def function_name():
    return value

Once Python executes the return statement:

- The function immediately stops execution.
- The specified value is returned.
- Control goes back to the calling statement.

## Returning a Simple Value

Example:

def calculate_storage():
    return 500

storage = calculate_storage()

print(storage)

Output:

500

The function returns the value **500**, which is stored inside the variable **storage**.

## Returning Calculated Values

Functions often perform calculations before returning the result.

Example:

def calculate_total_cost(price, quantity):
    return price * quantity

total = calculate_total_cost(1500, 3)

print(total)

Output:

4500

The function calculates the total cost and returns the answer instead of printing it directly.

## Difference Between print() and return()

Both **print()** and **return** may appear similar, but they serve different purposes.

Using print():

def display_message():
    print("Server Running")

This only displays information on the screen.

Using return:

def get_server_status():
    return "Running"

status = get_server_status()

print(status)

The returned value can now be stored, processed, or passed to another function.

IMPORTANT: **print()** displays information, whereas **return** sends information back to the calling program.

## Returning Multiple Values

Python allows a function to return multiple values at the same time.

Example:

def get_server_metrics():
    cpu_usage = 72
    memory_usage = 64

    return cpu_usage, memory_usage

cpu, memory = get_server_metrics()

print(cpu)
print(memory)

Output:

72
64

Python automatically returns the values as a tuple.

## Real-World Applications

Return statements are used in almost every software application.

Examples include:

- Calculating invoice totals.
- Processing employee salaries.
- Banking transactions.
- API responses.
- Data analysis.
- Machine Learning predictions.
- Shopping cart calculations.
- Authentication systems.
- Cloud monitoring dashboards.

For example, an online payment gateway returns the transaction status so that the application can decide whether the payment was successful.

## Advantages of Using Return

Using return statements provides several benefits:

- Makes functions reusable.
- Allows further processing of results.
- Reduces dependency on print().
- Improves modular programming.
- Makes applications more flexible.
- Simplifies testing and debugging.

## Common Beginner Mistakes

Some common mistakes include:

- Using print() instead of return().
- Forgetting to store the returned value.
- Writing statements after return expecting them to execute.
- Returning unnecessary values.

Example:

def test():
    return "Completed"
    print("Done")

The print() statement never executes because the function ends immediately after return.

IMPORTANT: Any statement written after **return** inside the same block will not execute.

## Best Practices

Follow these guidelines while using return statements:

- Return meaningful values.
- Use return when results are needed later.
- Avoid unnecessary print() statements inside reusable functions.
- Keep returned values simple and predictable.
- Design each function to return one logical result whenever possible.

## Key Points

- The return statement sends values back from a function.
- A function stops executing immediately after return.
- Returned values can be stored in variables.
- Functions can return single or multiple values.
- Return statements make functions reusable and modular.

IMPORTANT: The return statement allows different parts of a program to work together by passing information between functions, making it one of the most essential concepts in Python programming.`,

  examples: [
    {
      title: "Example 1: Returning a Simple Value",

      code: `def calculate_storage():
    return 500

storage = calculate_storage()

print(storage)`,

      output: `500`,
    },

    {
      title: "Example 2: Returning a Calculated Value",

      code: `def calculate_total_cost(price, quantity):
    return price * quantity

total = calculate_total_cost(1500, 3)

print(total)`,

      output: `4500`,
    },

    {
      title: "Example 3: Returning Multiple Values",

      code: `def get_server_metrics():
    cpu_usage = 72
    memory_usage = 64

    return cpu_usage, memory_usage

cpu, memory = get_server_metrics()

print(cpu)
print(memory)`,

      output: `72
64`,
    },

    {
      title: "Example 4: Real-World Example",

      code: `def calculate_api_cost(requests):
    return requests * 0.05

cost = calculate_api_cost(2000)

print(f"Total Cost: $ {cost}")`,

      output: `Total Cost: $ 100.0`,
    },
  ],
};

export default lesson4;