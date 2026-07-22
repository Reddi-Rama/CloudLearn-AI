const lesson2 = {
  id: "lesson2",
  title: "Creating Your Own Modules",
  previousLesson: "/lesson/python-development/module10/lesson1",
  nextLesson: "/lesson/python-development/module10/lesson3",

  content: `# Creating Your Own Modules

One of the greatest advantages of Python is that creating your own module is extremely simple. Every Python file you create automatically becomes a module that can be reused in other programs.

Instead of writing the same code repeatedly, developers place commonly used functions, classes, and variables inside modules and import them whenever needed.

---

# What is a Custom Module?

A custom module is a Python file created by the developer that contains reusable code.

For example, if you create a file named:

discount.py

Python automatically treats it as a module.

You can then use the functions inside this file from any other Python program.

---

# Creating Your First Module

Suppose you create a file named:

discount.py

Inside the file, you write:

- A function to calculate discounts
- A function to calculate tax
- A function to generate invoices

The file becomes a reusable module.

Instead of copying these functions into multiple projects, you simply import the module whenever needed.

---

# Using a Custom Module

Once the module is created, it can be imported into another Python file using the **import** keyword.

Python performs the following steps automatically:

1. Searches for the module.
2. Loads it into memory.
3. Makes its contents available for use.

This allows developers to reuse code without duplication.

---

# What Can a Module Contain?

A module is not limited to functions.

It can contain:

- Variables
- Functions
- Classes
- Constants
- Executable statements

This flexibility makes modules suitable for organizing almost any type of code.

---

# Why Create Custom Modules?

Imagine building an online shopping application.

Instead of placing everything inside one file, different modules can be created for different responsibilities.

Examples:

- payment.py
- invoice.py
- customer.py
- products.py
- shipping.py

Each module performs one specific task.

This organization improves readability and makes debugging much easier.

---

# Real-World Example

Consider a payment processing system.

A payment module may include:

- Payment validation
- Tax calculation
- Currency conversion
- Invoice generation

Whenever another part of the application needs payment functionality, it simply imports the payment module instead of rewriting the code.

Professional software systems are built using hundreds or even thousands of such reusable modules.

---

# Benefits of Creating Your Own Modules

## Code Reusability

Write code once and use it in multiple projects.

---

## Better Organization

Related functionality stays together inside a single file.

---

## Easier Maintenance

Updating a function inside the module automatically updates every application that uses it.

---

## Reduced Code Duplication

Developers avoid copying and pasting the same code repeatedly.

---

# How Python Finds Custom Modules

When Python encounters an import statement, it searches for the module in several locations.

Typically, Python first checks:

- The current project directory
- Installed packages
- Standard library modules

If the module is found, Python loads it automatically.

---

# IMPORTANT

Creating reusable modules is one of the first steps toward writing professional-quality Python applications.

Well-designed modules reduce development time, improve code quality, and make applications easier to maintain.

---

# Common Beginner Mistakes

- Placing unrelated functions inside one module.
- Using unclear file names.
- Copying code instead of creating reusable modules.
- Creating extremely large modules.
- Forgetting to save the module before importing it.

---

# Best Practices

- Keep related functionality together.
- Use meaningful module names.
- Design modules for reuse.
- Keep modules small and focused.
- Follow the Single Responsibility Principle.

---

# Real-World Applications

Custom modules are commonly used in:

- Banking Systems
- E-commerce Applications
- Learning Platforms
- Hospital Management Systems
- Cloud Applications
- Machine Learning Projects
- Data Science Applications
- Enterprise Software

Every large Python application uses custom modules to organize its codebase.

---

# Key Points

- Every Python (.py) file is a module.
- Custom modules allow code reuse.
- Modules can contain variables, functions, classes, and executable code.
- Importing modules prevents code duplication.
- Professional applications are built from many reusable modules.
`,

  examples: [
    {
      title: "Example 1: Creating a Simple Module",
      code: `# discount.py

def calculate_discount(price):
    return price * 0.10`,
      output: `Custom module created successfully.`,
    },
    {
      title: "Example 2: Importing a Custom Module",
      code: `import discount

value = discount.calculate_discount(5000)
print(value)`,
      output: `500.0`,
    },
    {
      title: "Example 3: Module with Multiple Functions",
      code: `# utility.py

def calculate_discount(price):
    return price * 0.10

def calculate_tax(price):
    return price * 0.18

def generate_invoice():
    print("Invoice Generated")`,
      output: `Module containing multiple reusable functions.`,
    },
    {
      title: "Example 4: Real-World Project Structure",
      code: `shopping_app/

payment.py
customer.py
products.py
invoice.py
main.py`,
      output: `Well-organized application using custom modules.`,
    },
  ],
};

export default lesson2;