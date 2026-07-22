const lesson10 = {
  id: "lesson10",
  title: "Best Practices for API Integration",
  previousLesson: "/lesson/python-development/module12/lesson9",
  nextLesson: "/lesson/python-development/module12/lesson11",
  content: `
# Best Practices for API Integration

Integrating APIs into an application involves much more than simply sending requests and receiving responses. Professional developers build applications that are reliable, secure, maintainable, and capable of handling unexpected situations.

Since APIs are external services, developers cannot control when they become unavailable, slow, or return unexpected data. Following best practices ensures that applications continue functioning smoothly even when external services encounter problems.

This lesson covers the most important best practices that every Python developer should follow while integrating APIs into real-world applications.

---

# Always Handle API Errors

One of the biggest mistakes beginners make is assuming that every API request succeeds.

In reality, requests can fail because of:

- Internet connection problems
- Server maintenance
- Authentication failures
- Invalid requests
- Missing resources
- Internal server errors

Instead of assuming success, always verify the response before using the returned data.

Example:

\`\`\`python
if response.status_code == 200:
    print("API Request Successful")
else:
    print("Request Failed")
\`\`\`

Proper error handling prevents applications from crashing and provides better feedback to users.

---

# Use Exception Handling

Network communication is unpredictable.

Your application should always be prepared to handle unexpected situations using **try-except** blocks.

Example:

\`\`\`python
import requests

try:
    response = requests.get("https://api.example.com/data")
    print(response.status_code)
except requests.exceptions.RequestException:
    print("Unable to connect to the API.")
\`\`\`

Using exception handling makes applications much more reliable.

---

# Set Timeouts

Sometimes an API server may stop responding.

Without a timeout, your application could wait forever for a response.

The **requests** library allows developers to specify a timeout value.

Example:

\`\`\`python
import requests

response = requests.get(
    "https://api.example.com/data",
    timeout=5
)
\`\`\`

If the server doesn't respond within five seconds, Python raises a timeout exception.

Timeouts prevent applications from hanging indefinitely.

---

# Validate Response Data

Never assume that every response contains the expected information.

Before using data, always verify that:

- Required fields exist.
- Values are not empty.
- Data types are correct.
- JSON is properly formatted.

Example:

\`\`\`python
if "temperature" in data:
    print(data["temperature"])
else:
    print("Temperature data unavailable")
\`\`\`

Validation prevents runtime errors and improves application stability.

---

# Protect API Keys

Many APIs require:

- API Keys
- Access Tokens
- Client IDs
- Client Secrets

These credentials should always remain private.

Never:

- Hardcode credentials inside source code.
- Upload API keys to GitHub.
- Share credentials publicly.
- Store secrets in public files.

Instead, use:

- Environment variables
- Configuration files
- Secret management services

Protecting credentials is essential for application security.

---

# Check HTTP Status Codes

Every API response includes an HTTP status code.

Some common status codes are:

- 200 → Success
- 201 → Resource Created
- 400 → Bad Request
- 401 → Unauthorized
- 403 → Forbidden
- 404 → Not Found
- 500 → Internal Server Error

Checking these status codes allows applications to respond appropriately instead of assuming success.

---

# Log API Errors

Logging is extremely useful for identifying issues in production applications.

Important events to log include:

- Failed requests
- Timeout exceptions
- Authentication failures
- Invalid responses
- Retry attempts
- Server errors

Example:

\`\`\`python
import logging

logging.error("Unable to connect to Weather API")
\`\`\`

Logs help developers diagnose and resolve problems much more quickly.

---
# Retry Failed Requests

Sometimes failures are temporary rather than permanent.

Instead of immediately stopping the program, applications can retry the request after a short delay.

Retries are useful when failures occur because of:

- Temporary network interruptions
- Server overload
- Connection timeouts
- Temporary service outages

However, retries should always be limited.

Retrying indefinitely may overload the server and create a poor user experience.

---

# Read API Documentation Carefully

Every professional API provides documentation that explains:

- Available endpoints
- HTTP methods
- Authentication requirements
- Request parameters
- Response formats
- Response status codes
- Rate limits
- Usage examples

Reading the documentation before writing code helps developers understand how an API works and prevents many common mistakes.

Professional developers always consult the documentation before integrating any API.

---

# Use Meaningful Variable Names

Good variable names make programs easier to understand and maintain.

Example:

\`\`\`python
weather_response = requests.get(url)
\`\`\`

Instead of:

\`\`\`python
r = requests.get(url)
\`\`\`

Meaningful names improve code readability, especially in large projects.

---

# Avoid Unnecessary API Requests

Every API request consumes:

- Network bandwidth
- Server resources
- Processing time
- API usage quota

Many APIs limit the number of requests that can be made within a certain period.

Avoid requesting the same information repeatedly if it has not changed.

Whenever appropriate, store frequently used data temporarily using caching techniques.

This improves both performance and efficiency.

---

# Real-World Example

Suppose you are developing an online shopping application.

Your application communicates with several APIs:

- Payment API
- Inventory API
- Shipping API
- Notification API

If the Payment API becomes temporarily unavailable, the application should:

- Display a meaningful error message.
- Record the failure in the application logs.
- Retry the request when appropriate.
- Prevent duplicate payments.
- Continue functioning wherever possible.

Professional applications never crash simply because one external service encounters a problem.

---

# IMPORTANT

External APIs are outside your control.

They may:

- Become unavailable.
- Respond slowly.
- Change response formats.
- Introduce new authentication methods.
- Apply rate limits.
- Return unexpected data.

Always design your application to handle these situations gracefully instead of assuming every request will always succeed.

---

# Best Practices Summary

Professional API integration includes:

- Checking HTTP status codes after every request.
- Handling exceptions using try-except.
- Setting timeout values.
- Validating API responses.
- Protecting API credentials.
- Logging important events.
- Reading API documentation.
- Using retries responsibly.
- Using meaningful variable names.
- Avoiding unnecessary API requests.

Following these practices helps create secure, reliable, and maintainable applications.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Assuming every request succeeds.
- Ignoring HTTP status codes.
- Forgetting to handle exceptions.
- Not setting timeout values.
- Hardcoding API keys.
- Uploading API credentials to GitHub.
- Not validating response data.
- Ignoring API documentation.
- Sending repeated unnecessary requests.
- Printing sensitive credentials while debugging.

Avoiding these mistakes helps build professional-quality applications.

---

# Key Points

- API integration involves much more than sending requests.
- Always check HTTP status codes.
- Handle network and server errors gracefully.
- Use try-except blocks for exception handling.
- Set timeout values for every request.
- Validate API responses before using data.
- Keep API keys and credentials secure.
- Log important events for debugging.
- Read API documentation carefully.
- Build applications that continue working even when external services fail.
`,
  examples: [
    {
      title: "Example 1: Checking the Status Code",
      code: `status_code = 200

if status_code == 200:
    print("API Request Successful")
else:
    print("API Request Failed")`,
      output: `API Request Successful`,
    },
    {
      title: "Example 2: Using Exception Handling",
      code: `import requests

try:
    response = requests.get("https://api.example.com/data")
    print("Connected Successfully")
except requests.exceptions.RequestException:
    print("Connection Failed")`,
      output: `Connected Successfully`,
    },
    {
      title: "Example 3: Validating API Response",
      code: `data = {
    "temperature": 28
}

if "temperature" in data:
    print("Temperature:", data["temperature"])
else:
    print("Temperature data unavailable")`,
      output: `Temperature: 28`,
    },
    {
      title: "Example 4: Logging an API Error",
      code: `import logging

logging.basicConfig(level=logging.ERROR)

logging.error("Unable to connect to Weather API")

print("Error logged successfully.")`,
      output: `ERROR:root:Unable to connect to Weather API
Error logged successfully.`,
    },
  ],
};

export default lesson10;