const lesson6 = {
  id: "lesson6",
  title: "Handling API Errors",
  previousLesson: "/lesson/python-development/module12/lesson5",
  nextLesson: "/lesson/python-development/module12/lesson7",
  content: `
# Handling API Errors

When working with APIs, developers should never assume that every request will be successful. APIs communicate over the internet, and many factors can prevent a request from completing successfully.

Network problems, invalid requests, authentication failures, and server issues can all cause API requests to fail.

Professional applications are designed to detect these situations and respond gracefully instead of crashing.

---

# Why Do API Errors Occur?

API requests may fail for several reasons, including:

- No internet connection
- Invalid API URL
- Incorrect request parameters
- Authentication failures
- Server maintenance
- Network timeout
- Rate limiting
- Internal server errors

Understanding these situations helps developers build reliable applications.

---

# Using Exception Handling

Python provides the **try-except** statement to handle runtime errors.

When making API requests, the request can be placed inside a **try** block.

If an error occurs, Python immediately executes the **except** block.

Example:

\`\`\`python
import requests

try:
    response = requests.get(
        "https://api.example.com/data"
    )

    response.raise_for_status()

except requests.exceptions.RequestException:
    print("Unable to connect to API.")
\`\`\`

Instead of crashing, the program displays a meaningful message.

---

# What is raise_for_status()?

The **raise_for_status()** method checks whether the server returned an error status code.

If the response is successful (200 OK), nothing happens.

If the response contains an error such as 404 or 500, Python raises an exception.

This makes error handling much easier.

---

# Common API Status Codes

Some frequently encountered status codes include:

- 200 → Success
- 201 → Created
- 400 → Bad Request
- 401 → Unauthorized
- 403 → Forbidden
- 404 → Not Found
- 500 → Internal Server Error

Checking the status code helps determine whether a request succeeded.

---

# Common Request Exceptions

The **requests** library provides several exceptions for different situations.

Examples include:

- ConnectionError
- Timeout
- HTTPError
- TooManyRedirects
- RequestException

Catching these exceptions allows applications to recover gracefully from failures.

---

# Real-World Example

Imagine an online shopping application communicating with a payment gateway.

If the payment API becomes temporarily unavailable, the application should display:

**"Payment service is temporarily unavailable. Please try again later."**

Instead of crashing, the application informs the user and continues running.

This creates a much better user experience.

---

# IMPORTANT

Never ignore API failures.

External services are beyond your control and may fail unexpectedly.

Always:

- Check the response status code.
- Handle exceptions properly.
- Display meaningful error messages.
- Log important failures.
- Allow users to retry requests when appropriate.

These practices improve application reliability.

---

# Best Practices

Follow these best practices while handling API errors:

- Always use try-except blocks.
- Call **raise_for_status()** after sending requests.
- Check status codes before processing data.
- Show meaningful error messages.
- Log important failures for debugging.
- Retry temporary failures when appropriate.

These habits help create robust applications.

---

# Common Beginner Mistakes

Beginners often make mistakes such as:

- Ignoring failed requests.
- Not using exception handling.
- Assuming every API returns valid data.
- Displaying technical error messages directly to users.
- Forgetting to check status codes.

Avoiding these mistakes leads to more reliable software.

---

# Key Points

- API requests can fail for many reasons.
- Use **try-except** blocks to handle exceptions.
- **raise_for_status()** detects HTTP errors automatically.
- Always check response status codes.
- Display meaningful messages to users.
- Log important failures for troubleshooting.
- Proper error handling is an essential skill for professional API development.
`,
  examples: [
    {
      title: "Example 1: Basic Exception Handling",
      code: `import requests

try:
    response = requests.get(
        "https://api.example.com/data"
    )
    print("Request Successful")

except requests.exceptions.RequestException:
    print("Unable to connect to API.")`,
      output: `Request Successful`,
    },
    {
      title: "Example 2: Using raise_for_status()",
      code: `import requests

try:
    response = requests.get(
        "https://api.example.com/data"
    )

    response.raise_for_status()

    print("Data Retrieved Successfully")

except requests.exceptions.HTTPError:
    print("HTTP Error Occurred")`,
      output: `Data Retrieved Successfully`,
    },
    {
      title: "Example 3: Handling a Timeout",
      code: `import requests

try:
    response = requests.get(
        "https://api.example.com/data",
        timeout=3
    )

except requests.exceptions.Timeout:
    print("The request timed out.")`,
      output: `The request timed out.`,
    },
    {
      title: "Example 4: Handling Any Request Exception",
      code: `import requests

try:
    response = requests.get(
        "https://invalid-api-url.com"
    )

except requests.exceptions.RequestException as error:
    print("API Error:", error)`,
      output: `API Error: <error message>`,
    },
  ],
};

export default lesson6;