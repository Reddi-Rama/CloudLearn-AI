const lesson3 = {
  id: "lesson3",
  title: "Making API Requests with requests",
  previousLesson: "/lesson/python-development/module12/lesson2",
  nextLesson: "/lesson/python-development/module12/lesson4",
  content: `
# Making API Requests with requests

Python provides several ways to communicate with APIs, but the most popular and beginner-friendly library is **requests**.

The **requests** library allows Python programs to send HTTP requests to web servers and receive responses with just a few lines of code. It is simple, readable, and widely used in professional software development.

Most Python applications that work with APIs use this library.

---

# What is the requests Library?

The **requests** library is a third-party Python package used to send HTTP requests.

It supports various HTTP methods such as:

- GET
- POST
- PUT
- DELETE
- PATCH

It also provides features like:

- Handling headers
- Sending parameters
- Uploading files
- Processing JSON responses
- Managing sessions

The library simplifies API communication significantly.

---

# Installing requests

Before using the library, install it using pip.

Command:

pip install requests

After installation, import it into your Python program.

Example:

import requests

Now your application can communicate with web APIs.

---

# Making a GET Request

The simplest API request is a GET request.

Example:

import requests

response = requests.get(
    "https://api.example.com/courses"
)

print(response.status_code)

The request is sent to the server.

The server processes it and sends back a response.

---

# Understanding the Response Object

When an API responds, Python stores the result inside a **Response Object**.

The response object contains useful information such as:

- Status Code
- Headers
- Response Text
- JSON Data
- Cookies
- Request Information

Developers use this information to determine whether the request was successful.

---

# Reading Response Data

The response object provides several useful attributes.

Examples include:

response.status_code

Returns the HTTP status code.

response.text

Returns the response as plain text.

response.json()

Converts JSON data into Python objects.

These methods make it easy to process information returned by APIs.

---

# Common HTTP Status Codes

Status codes indicate the result of a request.

Some common codes include:

- 200 → Success
- 201 → Resource Created
- 400 → Bad Request
- 401 → Unauthorized
- 403 → Forbidden
- 404 → Not Found
- 500 → Internal Server Error

Checking the status code is one of the first steps after receiving a response.

---

# Real-World Example

Suppose you're building a currency converter.

Your application sends a request to an exchange rate API.

The API returns:

- Current exchange rates
- Supported currencies
- Last updated time

Your application then displays this information to the user.

Without APIs and the requests library, obtaining this data would be much more difficult.

---

# IMPORTANT

Never assume that an API request will always succeed.

External services may fail because of:

- Internet problems
- Server maintenance
- Invalid URLs
- Authentication failures
- Rate limits

Professional applications always check the response before using the returned data.

---

# Best Practices

Follow these best practices when making API requests:

- Always check the status code.
- Handle failed requests gracefully.
- Use HTTPS whenever possible.
- Read API documentation carefully.
- Avoid sending unnecessary requests.
- Validate response data before processing it.

These practices improve application reliability.

---

# Common Beginner Mistakes

Beginners often make mistakes such as:

- Forgetting to install the requests library.
- Ignoring status codes.
- Assuming every response contains valid data.
- Not handling network failures.
- Using incorrect API URLs.

Avoiding these mistakes will make your applications more robust.

---

# Key Points

- The requests library is the most popular Python library for working with APIs.
- Install it using pip.
- requests.get() sends a GET request.
- The response object contains important information.
- Always check the status code.
- APIs may fail, so applications should handle errors gracefully.
- The requests library is widely used in professional Python projects.
`,
  examples: [
    {
      title: "Example 1: Importing the requests Library",
      code: `import requests

print("requests library imported successfully.")`,
      output: `requests library imported successfully.`,
    },
    {
      title: "Example 2: Making a GET Request",
      code: `import requests

response = requests.get("https://api.example.com/courses")

print(response.status_code)`,
      output: `200`,
    },
    {
      title: "Example 3: Viewing Response Text",
      code: `import requests

response = requests.get("https://api.example.com/courses")

print(response.text)`,
      output: `{"courses":["Python","Machine Learning","Cybersecurity"]}`,
    },
    {
      title: "Example 4: Displaying Status Code and Response",
      code: `import requests

response = requests.get("https://api.example.com/courses")

print("Status Code:", response.status_code)
print("Response:", response.text)`,
      output: `Status Code: 200
Response: {"courses":["Python","Machine Learning","Cybersecurity"]}`,
    },
  ],
};

export default lesson3;