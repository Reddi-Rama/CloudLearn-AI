const lesson5 = {
  id: "lesson5",

  title: "Default Arguments",

  previousLesson: "/lesson/python-development/module5/lesson4",

  nextLesson: "/lesson/python-development/module5/lesson6",

  content: `# Default Arguments

In the previous lesson, you learned how functions can return values using the return statement. However, many functions can still perform their tasks even if some information is not provided by the user.

For example, a cloud deployment system may deploy applications to the **Development** environment unless another environment is specified.

Python provides **default arguments** to handle such situations.

A default argument is a parameter that already has a predefined value. If the user does not provide an argument while calling the function, Python automatically uses the default value.

## Why Do We Need Default Arguments?

In real-world applications, certain information is optional.

Examples include:

- A logging system may use the default log level as **INFO**.
- An application may use **Development** as the default deployment environment.
- An online shopping website may use **Standard Delivery** unless Express Delivery is selected.
- A report generator may create a report for the current month by default.

Without default arguments, developers would need to provide these values every time they call the function.

IMPORTANT: Default arguments make functions simpler, more flexible, and easier to use.

## What are Default Arguments?

A default argument is a parameter that has a predefined value assigned during function creation.

Syntax:

def function_name(parameter=value):
    statements

If no argument is passed during the function call, Python automatically uses the default value.

Example:

def deploy_application(environment="Development"):
    print(f"Deploying to {environment}")

deploy_application()

Output:

Deploying to Development

Since no argument was provided, Python used the default value.

## Overriding Default Values

Although a parameter has a default value, you can still provide your own value while calling the function.

Example:

def deploy_application(environment="Development"):
    print(f"Deploying to {environment}")

deploy_application("Production")

Output:

Deploying to Production

Here, the provided argument replaces the default value.

## Multiple Default Arguments

A function can contain multiple default arguments.

Example:

def create_user(role="User", status="Active"):
    print(f"Role: {role}")
    print(f"Status: {status}")

create_user()

Output:

Role: User
Status: Active

Each parameter uses its predefined value because no arguments were supplied.

## Mixing Required and Default Arguments

A function can contain both required parameters and default parameters.

Example:

def create_backup(server_name, backup_type="Incremental"):
    print(f"Server: {server_name}")
    print(f"Backup Type: {backup_type}")

create_backup("Database-01")

Output:

Server: Database-01
Backup Type: Incremental

The required parameter must always receive an argument, while the default parameter is optional.

IMPORTANT: Parameters with default values must always come after required parameters.

Correct:

def create_backup(server_name, backup_type="Incremental"):
    pass

Incorrect:

def create_backup(backup_type="Incremental", server_name):
    pass

The incorrect example produces a syntax error.

## Real-World Applications

Default arguments are widely used in:

- Logging systems
- Cloud deployment tools
- Backup utilities
- Banking applications
- Report generation
- Email notification systems
- Machine Learning applications
- Web applications
- Automation scripts

For example, a logging function may automatically use the **INFO** level unless another level such as **ERROR** or **WARNING** is specified.

## Advantages of Default Arguments

Using default arguments provides several benefits:

- Makes functions easier to call.
- Reduces unnecessary code.
- Supports optional information.
- Improves readability.
- Makes programs more flexible.
- Simplifies application development.

## Common Beginner Mistakes

Some common mistakes include:

- Placing default parameters before required parameters.
- Forgetting that supplied arguments replace default values.
- Using unclear default values.
- Assuming every parameter must receive an argument.

IMPORTANT: If an argument is supplied during the function call, Python ignores the default value and uses the supplied argument instead.

## Best Practices

Follow these guidelines while using default arguments:

- Use meaningful default values.
- Place default parameters after required parameters.
- Keep default values simple and predictable.
- Use default arguments only for optional information.
- Write readable and maintainable functions.

## Key Points

- Default arguments have predefined values.
- They are used when no argument is provided.
- Supplied arguments override default values.
- Required parameters should come before default parameters.
- Default arguments improve flexibility and reduce repetitive code.

IMPORTANT: Default arguments allow developers to create flexible functions that work correctly even when optional information is not provided.`,

  examples: [
    {
      title: "Example 1: Using a Default Argument",

      code: `def deploy_application(environment="Development"):
    print(f"Deploying to {environment}")

deploy_application()`,

      output: `Deploying to Development`,
    },

    {
      title: "Example 2: Overriding the Default Value",

      code: `def deploy_application(environment="Development"):
    print(f"Deploying to {environment}")

deploy_application("Production")`,

      output: `Deploying to Production`,
    },

    {
      title: "Example 3: Multiple Default Arguments",

      code: `def create_user(role="User", status="Active"):
    print(f"Role: {role}")
    print(f"Status: {status}")

create_user()`,

      output: `Role: User
Status: Active`,
    },

    {
      title: "Example 4: Real-World Logging System",

      code: `def generate_log(message, level="INFO"):
    print(f"[{level}] {message}")

generate_log("Server Started")
generate_log("Database Connection Failed", "ERROR")`,

      output: `[INFO] Server Started
[ERROR] Database Connection Failed`,
    },
  ],
};

export default lesson5;