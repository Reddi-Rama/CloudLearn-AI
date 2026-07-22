const lesson3 = {
  id: "lesson3",

  title: "String Slicing",

  previousLesson: "/lesson/python-development/module4/lesson2",

  nextLesson: "/lesson/python-development/module4/lesson4",

  content: `# String Slicing

String slicing is a technique used to extract a portion of a string instead of accessing a single character. It allows you to retrieve multiple characters from a string by specifying a starting index and an ending index.

String slicing is one of the most useful features in Python because many real-world applications need only a part of the available text rather than the entire string.

For example, you may need to extract a username from an email address, obtain a file extension from a filename, or retrieve the year from a date.

## Why Do We Need String Slicing?

Many applications work with large amounts of textual data.

Instead of processing the entire string, slicing allows developers to extract only the required portion.

Some common examples include:

- Extracting usernames from email addresses.
- Retrieving file extensions.
- Extracting department codes.
- Reading date components.
- Processing product codes.
- Parsing log files.

Using slicing makes text processing simpler, faster, and more efficient.

IMPORTANT: String slicing extracts a part of a string without modifying the original string.

## Syntax of String Slicing

The basic syntax is:

string[start:end]

Python starts extracting characters from the **start** index and stops **before** the **end** index.

Example:

language = "Python"

print(language[0:4])

Output:

Pyth

Notice that the character at index 4 is not included.

## Omitting the Start Index

If the start index is omitted, Python automatically starts from the beginning of the string.

Example:

service_name = "Authentication"

print(service_name[:6])

Output:

Authen

This is useful when extracting characters from the beginning of a string.

## Omitting the End Index

If the end index is omitted, Python extracts characters until the end of the string.

Example:

service_name = "Authentication"

print(service_name[6:])

Output:

tication

This technique is commonly used when the remaining portion of a string is required.

## Using Negative Indexes

Negative indexes can also be used while slicing.

Example:

filename = "backup.zip"

print(filename[-3:])

Output:

zip

Negative slicing is especially useful for extracting file extensions and values located near the end of a string.

IMPORTANT: Negative indexes count from the end of the string, making reverse extraction simple and efficient.

## Using Step Values

Python allows you to specify how many positions to move after each character using a step value.

Syntax:

string[start:end:step]

Example:

transaction_id = "TXN20260015"

print(transaction_id[::2])

Output:

TN0601

The step value skips characters according to the specified interval.

## Real-World Applications

String slicing is widely used in:

- Email processing.
- File management systems.
- Database applications.
- Cybersecurity tools.
- Cloud monitoring systems.
- Report generation.
- Data analysis.
- Web development.

For example, an application can extract the ".pdf" extension from a filename to determine the file type.

## Advantages of String Slicing

Using slicing provides several benefits:

- Quickly extracts required text.
- Reduces unnecessary processing.
- Improves code readability.
- Simplifies text manipulation.
- Supports flexible extraction using indexes.

## Common Beginner Mistakes

Some common mistakes include:

- Assuming the ending index is included.
- Confusing indexing with slicing.
- Using indexes outside the string length.
- Forgetting that negative indexes count from the end.

IMPORTANT: The ending index is never included in the sliced result.

## Best Practices

- Use slicing instead of extracting characters one by one.
- Use meaningful variable names.
- Combine slicing with indexing when required.
- Use negative indexes for values near the end of a string.
- Keep slicing expressions simple and readable.

## Key Points

- String slicing extracts a portion of a string.
- The ending index is excluded.
- Start and end indexes are optional.
- Negative indexes can also be used.
- Step values allow extraction at specific intervals.

IMPORTANT: String slicing is one of the most powerful text manipulation techniques in Python and is widely used in data processing, automation, web development, and cybersecurity.`,

  examples: [
    {
      title: "Example 1: Basic String Slicing",

      code: `language = "Python"

print(language[0:4])`,

      output: `Pyth`,
    },

    {
      title: "Example 2: Omitting Start and End Indexes",

      code: `service_name = "Authentication"

print(service_name[:6])
print(service_name[6:])`,

      output: `Authen
tication`,
    },

    {
      title: "Example 3: Using Negative Slicing",

      code: `filename = "backup.zip"

print(filename[-3:])`,

      output: `zip`,
    },

    {
      title: "Example 4: Using Step Values",

      code: `transaction_id = "TXN20260015"

print(transaction_id[::2])`,

      output: `TN0601`,
    },
  ],
};

export default lesson3;