const lesson5 = {
  id: "lesson5",
  title: "Sending Parameters in Requests",
  previousLesson: "/lesson/python-development/module12/lesson4",
  nextLesson: "/lesson/python-development/module12/lesson6",
  content: `
# Sending Parameters in Requests

Many APIs require additional information before they can process a request. This information is called **parameters**.

Parameters allow developers to customize API requests by sending values such as city names, user IDs, search keywords, page numbers, and many other types of data.

Instead of creating a separate API endpoint for every possible request, APIs accept parameters that make them flexible and powerful.

---

# Why Do APIs Use Parameters?

Imagine a weather application.

If you want to know the weather for different cities, creating separate URLs like these would be inefficient:

- /weather/mumbai
- /weather/delhi
- /weather/hyderabad

Instead, the API accepts a parameter.

Example:

\`\`\`
https://api.example.com/weather?city=Mumbai
\`\`\`

Changing the parameter changes the result without changing the API endpoint.

---

# What are Query Parameters?

Query parameters are values added to the end of a URL after a question mark (?).

Example:

\`\`\`
https://api.example.com/weather?city=Mumbai
\`\`\`

Here:

- weather → Endpoint
- city → Parameter name
- Mumbai → Parameter value

Multiple parameters are separated using the **&** symbol.

Example:

\`\`\`
https://api.example.com/weather?city=Mumbai&units=metric
\`\`\`

---

# Sending Parameters Using requests

The **requests** library provides the **params** argument to send query parameters.

Example:

\`\`\`python
import requests

parameters = {
    "city": "Mumbai"
}

response = requests.get(
    "https://api.example.com/weather",
    params=parameters
)
\`\`\`

Python automatically converts the dictionary into a query string.

Generated URL:

\`\`\`
https://api.example.com/weather?city=Mumbai
\`\`\`

---

# Sending Multiple Parameters

You can send multiple parameters together.

Example:

\`\`\`python
parameters = {
    "city": "Mumbai",
    "units": "metric"
}
\`\`\`

Generated URL:

\`\`\`
https://api.example.com/weather?city=Mumbai&units=metric
\`\`\`

This approach keeps the code clean and easy to maintain.

---

# Common Uses of Parameters

Many APIs rely on parameters to customize responses.

Examples include:

- City names for weather information
- User IDs for profile details
- Search keywords
- Product categories
- Page numbers
- Sort order
- Language preferences
- Date ranges

Parameters make APIs highly flexible.

---

# Real-World Example

Consider an online shopping website.

A user searches for **laptops**.

Instead of creating a separate API for every product, the application sends:

\`\`\`
https://api.example.com/products?search=laptop
\`\`\`

If the user searches for **phones**, only the parameter changes.

This allows one API endpoint to support millions of different searches.

---

# IMPORTANT

Avoid manually building query strings whenever possible.

Instead of writing:

\`\`\`
"https://api.example.com/weather?city=Mumbai"
\`\`\`

use the **params** argument provided by the **requests** library.

Python automatically formats and encodes the parameters correctly.

---

# Best Practices

Follow these best practices when sending parameters:

- Use dictionaries for parameters.
- Validate user input before sending requests.
- Let the requests library build query strings automatically.
- Avoid manually concatenating URLs.
- Read API documentation to understand supported parameters.

These practices make your code cleaner and less error-prone.

---

# Common Beginner Mistakes

New developers often make mistakes such as:

- Building query strings manually.
- Misspelling parameter names.
- Forgetting required parameters.
- Sending incorrect data types.
- Ignoring API documentation.

Avoiding these mistakes helps create reliable API requests.

---

# Key Points

- Parameters provide additional information to APIs.
- Query parameters appear after the **?** in a URL.
- Multiple parameters are separated using **&**.
- The **params** argument in the requests library automatically creates query strings.
- Parameters make APIs flexible and reusable.
- Always validate user input before sending requests.
- Using dictionaries for parameters improves code readability.
`,
  examples: [
    {
      title: "Example 1: Sending a Single Parameter",
      code: `import requests

parameters = {
    "city": "Mumbai"
}

response = requests.get(
    "https://api.example.com/weather",
    params=parameters
)

print(response.url)`,
      output: `https://api.example.com/weather?city=Mumbai`,
    },
    {
      title: "Example 2: Sending Multiple Parameters",
      code: `import requests

parameters = {
    "city": "Mumbai",
    "units": "metric"
}

response = requests.get(
    "https://api.example.com/weather",
    params=parameters
)

print(response.url)`,
      output: `https://api.example.com/weather?city=Mumbai&units=metric`,
    },
    {
      title: "Example 3: Using Search Parameters",
      code: `import requests

parameters = {
    "search": "python"
}

response = requests.get(
    "https://api.example.com/courses",
    params=parameters
)

print(response.url)`,
      output: `https://api.example.com/courses?search=python`,
    },
    {
      title: "Example 4: Using Pagination Parameters",
      code: `import requests

parameters = {
    "page": 2,
    "limit": 10
}

response = requests.get(
    "https://api.example.com/products",
    params=parameters
)

print(response.url)`,
      output: `https://api.example.com/products?page=2&limit=10`,
    },
  ],
};

export default lesson5;