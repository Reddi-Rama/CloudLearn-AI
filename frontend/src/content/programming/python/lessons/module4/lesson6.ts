const lesson6 = {
  id: "lesson6",

  title: "String Replacement",

  previousLesson: "/lesson/python-development/module4/lesson5",

  nextLesson: "/lesson/python-development/module4/lesson7",

  content: `# String Replacement

String replacement is the process of replacing one part of a string with another. It is commonly used when information needs to be updated, corrected, standardized, or cleaned before it is displayed or processed.

Python provides the built-in replace() method, which makes replacing text simple and efficient.

Since strings are immutable in Python, the replace() method creates and returns a new string instead of modifying the original string.

## Why Do We Need String Replacement?

In real-world applications, text often needs to be modified before it is used.

Some common examples include:

- Updating server status messages.
- Replacing old domain names with new ones.
- Correcting spelling mistakes.
- Cleaning user input.
- Standardizing log messages.
- Updating product information.
- Transforming text before analysis.

Instead of manually changing characters, the replace() method performs these updates quickly and accurately.

IMPORTANT: The replace() method returns a new string. The original string remains unchanged.

## Syntax of replace()

The syntax of the replace() method is:

string.replace(old_value, new_value)

Python searches for every occurrence of the old value and replaces it with the new value.

Example:

status_message = "Server Offline"

updated_status = status_message.replace("Offline", "Online")

print(updated_status)

Output:

Server Online

## Replacing Multiple Occurrences

By default, the replace() method replaces all matching occurrences.

Example:

log_data = "ERROR ERROR WARNING ERROR"

updated_log = log_data.replace("ERROR", "ALERT")

print(updated_log)

Output:

ALERT ALERT WARNING ALERT

This feature is useful when all occurrences need to be updated.

## Limiting the Number of Replacements

You can limit the number of replacements by providing a third argument.

Syntax:

string.replace(old_value, new_value, count)

Example:

log_data = "ERROR ERROR WARNING ERROR"

updated_log = log_data.replace("ERROR", "ALERT", 1)

print(updated_log)

Output:

ALERT ERROR WARNING ERROR

Only the first matching occurrence is replaced.

IMPORTANT: The optional third parameter controls the maximum number of replacements to perform.

## Real-World Applications

String replacement is widely used in:

- Data cleaning
- Report generation
- Email processing
- Log file analysis
- Cloud monitoring systems
- Website migration
- Search and replace tools
- Text transformation applications

For example, when a company changes its domain name, all employee email addresses can be updated using the replace() method.

## Advantages of String Replacement

Using the replace() method provides several benefits:

- Quickly updates textual information.
- Simplifies text processing.
- Improves code readability.
- Reduces manual editing.
- Supports data cleaning and standardization.

## Common Beginner Mistakes

Some common mistakes include:

- Assuming replace() modifies the original string.
- Forgetting to store the returned string.
- Replacing the wrong substring.
- Ignoring case sensitivity while replacing text.

IMPORTANT: Because strings are immutable, replace() always returns a new string. Store the returned value if you want to keep the changes.

## Best Practices

- Store the returned string in a variable.
- Replace only meaningful values.
- Use descriptive variable names.
- Verify replacement results before further processing.
- Keep replacement operations simple and readable.

## Key Points

- replace() substitutes one substring with another.
- It returns a new string.
- All occurrences are replaced by default.
- The number of replacements can be limited.
- It is widely used in text processing and data cleaning.

IMPORTANT: String replacement is an essential technique for updating, cleaning, and transforming textual data in modern Python applications.`,

  examples: [
    {
      title: "Example 1: Replacing Server Status",

      code: `status_message = "Server Offline"

updated_status = status_message.replace("Offline", "Online")

print(updated_status)`,

      output: `Server Online`,
    },

    {
      title: "Example 2: Replacing Multiple Occurrences",

      code: `log_data = "ERROR ERROR WARNING ERROR"

updated_log = log_data.replace("ERROR", "ALERT")

print(updated_log)`,

      output: `ALERT ALERT WARNING ALERT`,
    },

    {
      title: "Example 3: Limiting Replacements",

      code: `log_data = "ERROR ERROR WARNING ERROR"

updated_log = log_data.replace("ERROR", "ALERT", 1)

print(updated_log)`,

      output: `ALERT ERROR WARNING ERROR`,
    },

    {
      title: "Example 4: Updating Company Domain",

      code: `email = "support@oldcompany.com"

new_email = email.replace("oldcompany.com", "newcompany.com")

print(new_email)`,

      output: `support@newcompany.com`,
    },
  ],
};

export default lesson6;