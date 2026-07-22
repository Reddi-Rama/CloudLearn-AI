const lesson5 = {
  id: "lesson5",

  title: "String Searching",

  previousLesson: "/lesson/python-development/module4/lesson4",

  nextLesson: "/lesson/python-development/module4/lesson6",

  content: `# String Searching

String searching is the process of finding specific characters, words, or patterns within a string. Almost every modern application searches text in some form, whether it is locating a keyword in a document, verifying an email address, checking a file extension, or detecting prohibited words in a chat application.

Python provides several built-in methods that make string searching simple, efficient, and easy to understand.

## Why is String Searching Important?

Many software applications need to locate specific information before performing further operations.

Some common examples include:

- Checking whether an email belongs to a company domain.
- Searching for keywords inside log files.
- Verifying file extensions.
- Detecting prohibited words in chat applications.
- Searching customer records.
- Validating URLs and website addresses.

Without string searching, processing textual data would become slow and complicated.

IMPORTANT: String searching allows applications to quickly locate important information inside text without manually checking every character.

## find()

The find() method searches for a substring inside a string and returns its index position.

Syntax:

string.find(value)

If the value is found, Python returns its starting index.

If the value is not found, Python returns **-1**.

Example:

email = "admin@cloudlearn.ai"

print(email.find("@"))

Output:

5

Example when the value is not found:

message = "System Running"

print(message.find("Error"))

Output:

-1

The find() method is commonly used for locating symbols, keywords, and identifiers.

## count()

The count() method returns the number of times a substring appears inside a string.

Syntax:

string.count(value)

Example:

log_data = "ERROR ERROR WARNING ERROR"

print(log_data.count("ERROR"))

Output:

3

This method is useful for analytics, log monitoring, and text analysis.

## startswith()

The startswith() method checks whether a string begins with a specified value.

Syntax:

string.startswith(value)

Example:

filename = "report.pdf"

print(filename.startswith("report"))

Output:

True

This method returns either **True** or **False**.

It is commonly used for validating file names, URLs, and prefixes.

## endswith()

The endswith() method checks whether a string ends with a specified value.

Syntax:

string.endswith(value)

Example:

filename = "report.pdf"

print(filename.endswith(".pdf"))

Output:

True

This method is useful when validating file extensions and document formats.

IMPORTANT: startswith() and endswith() return Boolean values (True or False), making them useful in decision-making statements.

## Real-World Applications

String searching is widely used in:

- Email validation
- File extension verification
- Log file analysis
- Search engines
- Chat applications
- Cybersecurity tools
- Cloud monitoring systems
- Data analysis
- Web development

For example, a cybersecurity application may search server logs for the keyword "ERROR" to detect system failures.

## Advantages of String Searching

Using string searching methods provides several benefits:

- Quickly locates important information.
- Simplifies text processing.
- Improves program efficiency.
- Supports validation and filtering.
- Makes code easier to read and maintain.

## Common Beginner Mistakes

Some common mistakes include:

- Assuming find() returns True or False.
- Forgetting that find() returns -1 when a value is not found.
- Ignoring case sensitivity while searching.
- Confusing count() with find().

IMPORTANT: The find() method returns the position of a substring, whereas count() returns how many times it appears.

## Best Practices

- Use find() when you need the position of a substring.
- Use count() to count occurrences.
- Use startswith() and endswith() for validation.
- Consider case sensitivity while searching.
- Use meaningful variable names for better readability.

## Key Points

- String searching helps locate information inside text.
- find() returns the position of a substring.
- count() returns the number of occurrences.
- startswith() checks the beginning of a string.
- endswith() checks the ending of a string.

IMPORTANT: String searching is one of the most commonly used operations in Python because modern applications constantly search, validate, and process textual information.`,

  examples: [
    {
      title: "Example 1: Using find()",

      code: `email = "admin@cloudlearn.ai"

print(email.find("@"))

message = "System Running"

print(message.find("Error"))`,

      output: `5
-1`,
    },

    {
      title: "Example 2: Using count()",

      code: `log_data = "ERROR ERROR WARNING ERROR"

print(log_data.count("ERROR"))`,

      output: `3`,
    },

    {
      title: "Example 3: Using startswith()",

      code: `filename = "report.pdf"

print(filename.startswith("report"))

website = "https://cloudlearn.ai"

print(website.startswith("https"))`,

      output: `True
True`,
    },

    {
      title: "Example 4: Using endswith()",

      code: `filename = "report.pdf"

print(filename.endswith(".pdf"))

image = "photo.png"

print(image.endswith(".jpg"))`,

      output: `True
False`,
    },
  ],
};

export default lesson5;