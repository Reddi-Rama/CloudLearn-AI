const lesson7 = {
  id: "lesson7",
  title: "Authentication and API Keys",
  previousLesson: "/lesson/python-development/module12/lesson6",
  nextLesson: "/lesson/python-development/module12/lesson8",
  content: `
# Authentication and API Keys

Not every API is freely accessible. Many APIs provide access to sensitive information such as user accounts, payment systems, cloud resources, and AI models. To protect this information, APIs require **authentication** before allowing access.

Authentication verifies the identity of the application or user making the request. Without authentication, anyone could access protected resources, leading to serious security risks.

One of the most common authentication methods is using **API Keys**.

---

# Why Do APIs Need Authentication?

Imagine an online banking system.

Without authentication, anyone could:

- View account information
- Transfer money
- Access transaction history
- Modify personal details

This would be a major security problem.

Authentication ensures that only authorized users or applications can access protected resources.

---

# What is an API Key?

An **API Key** is a unique string provided by an API service.

It identifies your application whenever it communicates with the API.

Think of an API key as an access card used to enter a secure building.

Example:

\`\`\`python
API_KEY = "abc123xyz789"
\`\`\`

Every request sent to the API includes this key so the server can verify the request.

---

# Sending an API Key

API keys are commonly sent through HTTP headers.

Example:

\`\`\`python
import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(
    "https://api.example.com/data",
    headers=headers
)
\`\`\`

The server checks the key before processing the request.

If the key is valid, access is granted.

Otherwise, the server returns an authentication error.

---

# Why Are API Keys Important?

API keys help service providers:

- Identify applications
- Track API usage
- Apply usage limits
- Prevent unauthorized access
- Detect misuse
- Monitor request statistics

Without API keys, managing secure access would be difficult.

---

# APIs That Use API Keys

Many popular services require authentication.

Examples include:

- OpenAI API
- Google Maps API
- Stripe API
- GitHub API
- Weather APIs
- AWS APIs
- Azure APIs
- Firebase APIs

Most professional APIs require authentication before allowing access.

---

# Protecting API Keys

API keys should always remain private.

If someone obtains your API key, they may:

- Use your account
- Consume your API quota
- Generate unexpected charges
- Access protected resources

For this reason, API keys should be treated like passwords.

---

# Real-World Example

Suppose you're building a weather application.

When your application requests weather information, it includes an API key with every request.

The weather service verifies the key and returns the requested data.

If the key is invalid or missing, the request is rejected.

---

# IMPORTANT

Never expose API keys publicly.

Avoid:

- Hardcoding API keys in source code.
- Uploading API keys to GitHub.
- Sharing API keys with others.
- Storing API keys in public files.

Instead, store them securely using environment variables or configuration files.

Protecting API credentials is one of the most important responsibilities of a developer.

---

# Best Practices

Follow these best practices while working with API authentication:

- Store API keys securely.
- Use environment variables whenever possible.
- Rotate compromised API keys immediately.
- Restrict API permissions when supported.
- Read API security guidelines carefully.
- Monitor API usage regularly.

These practices improve application security.

---

# Common Beginner Mistakes

New developers often make mistakes such as:

- Hardcoding API keys directly into programs.
- Uploading API keys to public repositories.
- Sharing API credentials with others.
- Ignoring authentication errors.
- Using expired or invalid API keys.

Avoiding these mistakes helps protect both your application and your users.

---

# Key Points

- Authentication verifies the identity of applications and users.
- API keys are commonly used for authentication.
- API keys uniquely identify your application.
- Many modern APIs require authentication.
- API keys should always be kept secret.
- Store API keys securely using environment variables.
- Protecting API credentials is essential for secure software development.
`,
  examples: [
    {
      title: "Example 1: Creating an API Key Variable",
      code: `API_KEY = "abc123xyz789"

print(API_KEY)`,
      output: `abc123xyz789`,
    },
    {
      title: "Example 2: Sending an API Key Using Headers",
      code: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

print(headers)`,
      output: `{'Authorization': 'Bearer YOUR_API_KEY'}`,
    },
    {
      title: "Example 3: Making an Authenticated Request",
      code: `import requests

headers = {
    "Authorization": "Bearer YOUR_API_KEY"
}

response = requests.get(
    "https://api.example.com/data",
    headers=headers
)

print(response.status_code)`,
      output: `200`,
    },
    {
      title: "Example 4: Checking for Unauthorized Access",
      code: `status_code = 401

if status_code == 401:
    print("Unauthorized Access")
else:
    print("Access Granted")`,
      output: `Unauthorized Access`,
    },
  ],
};

export default lesson7;