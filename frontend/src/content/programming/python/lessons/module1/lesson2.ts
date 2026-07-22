const lesson2 = {
  id: "lesson2",

  title: "Running Python Programs",

  previousLesson:
    "/lesson/python-development/module1/lesson1",

  nextLesson:
    "/lesson/python-development/module1/lesson3",

  content: `
# What Does It Mean to Run a Program?

Writing code in a file does not make it useful.

A program becomes useful only when it is executed.

Running a Python program means giving your instructions to Python so that it can read and perform the requested actions.

# How Python Executes Code

IMPORTANT:

Python executes code line by line from top to bottom.

This is called Sequential Execution.

Python follows the exact order in which instructions are written.

# Why Execution Order Matters

Consider an online shopping application.

Correct order:

1. Customer places order.
2. Payment is verified.
3. Product is packed.
4. Product is shipped.

If the product is shipped before payment verification, the system fails.

Similarly, Python programs depend on the correct sequence of instructions.

# The Python Interpreter

Computers cannot understand Python directly.

They only understand machine language.

The Python Interpreter acts as a translator between Python code and the computer.

Python Code → Interpreter → Computer

The interpreter reads your code and executes it line by line.

# Interactive Mode and Script Mode

Python programs can be executed in two ways.

## Interactive Mode

Commands are executed immediately.

This mode is useful for testing small pieces of code.

## Script Mode

Programs are written inside .py files and executed as a complete application.

This is how real-world applications are developed.

# Common Beginner Mistake

Python stops execution as soon as it encounters an error.

# Summary

• What it means to run a Python program.
• How Python executes instructions.
• The role of the Python Interpreter.
• Interactive Mode and Script Mode.
• Why execution order matters.

# Remember

Understanding how Python runs programs helps us understand how real software systems operate.
`,

  examples: [
    {
      title: "Example",
      code: `print("Inventory System Started Successfully")`,
      output: `Inventory System Started Successfully`,
    },

    {
      title: "Sequential Execution Example",
      code: `print("Connecting to Database")
print("Loading Customer Records")
print("Generating Report")
print("Report Generated Successfully")`,
      output: `Connecting to Database
Loading Customer Records
Generating Report
Report Generated Successfully`,
    },

    {
      title: "Interactive Mode Example",
      code: `>>> 25 + 75`,
      output: `100`,
    },

    {
      title: "Script Mode Example",
      code: `print("Checking Payment Status")
print("Payment Verified")
print("Generating Invoice")`,
      output: `Checking Payment Status
Payment Verified
Generating Invoice`,
    },

    {
      title: "Common Beginner Mistake",
      code: `print("Application Started")
print(server_status)
print("Application Ready")`,
      output: `Application Started
NameError: name 'server_status' is not defined`,
    },
  ],
};

export default lesson2;