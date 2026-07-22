const lesson8 = {
  id: "lesson8",
  title: "Sending POST Requests",
  previousLesson: "/lesson/python-development/module12/lesson7",
  nextLesson: "/lesson/python-development/module12/lesson9",
  content: `
# Sending POST Requests

In the previous lessons, you learned how to retrieve information from APIs using **GET** requests. However, many applications also need to **send data** to a server. This is where **POST requests** are used.

A **POST request** sends data to a server so that new information can be created. It is one of the most commonly used HTTP methods in web development and API integration.

Examples include registering users, placing orders, submitting forms, creating blog posts, and processing payments.

---

# What is a POST Request?

A POST request is an HTTP request used to **create new resources** on a server.

Unlike GET requests, which retrieve information, POST requests send data inside the **request body**.

For example:

- Registering a new user
- Creating a student record
- Placing an online order
- Uploading customer information
- Submitting a feedback form

Whenever new information needs to be stored, a POST request is usually used.

---

# Sending Data with requests

The **requests** library provides the **post()** method for sending POST requests.

Example:

\`\`\`python
import requests

data = {
    "name": "Alex",
    "course": "Python Development"
}

response = requests.post(
    "https://api.example.com/students",
    json=data
)

print(response.status_code)
\`\`\`

The dictionary is automatically converted into JSON before being sent to the server.

---

# Request Body

Unlike GET requests, POST requests usually send information inside the **request body**.

Example data:

\`\`\`json
{
    "name": "Alex",
    "course": "Python Development"
}
\`\`\`

The API receives this information and stores it in its database.

---

# Server Response

After successfully creating a resource, the server usually returns:

- **201 Created**

This indicates that the request was processed successfully and the new resource has been created.

Other possible responses include:

- 200 → Success
- 400 → Bad Request
- 401 → Unauthorized
- 404 → Not Found
- 500 → Internal Server Error

Checking the response helps confirm whether the request succeeded.

---

# Common Uses of POST Requests

POST requests are widely used in modern applications.

Examples include:

- User Registration
- Login Systems
- Payment Processing
- Online Shopping
- Contact Forms
- Uploading Files
- Booking Tickets
- Creating Blog Posts

Most interactive web applications rely heavily on POST requests.

---

# Real-World Example

Suppose you're developing an online learning platform.

When a student signs up for a course, the application sends a POST request containing:

- Student name
- Email address
- Selected course

The server stores this information and creates a new student record.

Without POST requests, users would not be able to submit new information to the system.

---

# IMPORTANT

Always validate data before sending a POST request.

Incorrect or incomplete data may:

- Cause validation errors
- Create incorrect records
- Produce unexpected server responses

Also, never assume that a POST request is always successful.

Always check the server's response after sending data.

---

# Best Practices

Follow these best practices while sending POST requests:

- Validate user input.
- Send data in the correct format.
- Check response status codes.
- Handle server errors gracefully.
- Read API documentation carefully.
- Protect sensitive information during transmission.

These practices help build reliable applications.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Sending incomplete data.
- Forgetting to validate input.
- Ignoring server responses.
- Using GET instead of POST for creating data.
- Assuming every request succeeds.

Avoiding these mistakes will make your applications more secure and reliable.

---

# Key Points

- POST requests send data to a server.
- POST is mainly used to create new resources.
- Data is usually sent as JSON in the request body.
- The requests library provides the post() method.
- Successful creation often returns status code 201.
- Always validate data before sending it.
- Check server responses after every POST request.
`,
  examples: [
    {
      title: "Example 1: Sending a Basic POST Request",
      code: `import requests

data = {
    "name": "Alex"
}

response = requests.post(
    "https://api.example.com/students",
    json=data
)

print(response.status_code)`,
      output: `201`,
    },
    {
      title: "Example 2: Sending Multiple Values",
      code: `import requests

student = {
    "name": "Alex",
    "course": "Python Development",
    "age": 22
}

response = requests.post(
    "https://api.example.com/students",
    json=student
)

print(response.status_code)`,
      output: `201`,
    },
    {
      title: "Example 3: Displaying the Server Response",
      code: `import requests

data = {
    "title": "Python APIs"
}

response = requests.post(
    "https://api.example.com/posts",
    json=data
)

print(response.text)`,
      output: `{"message":"Resource created successfully."}`,
    },
    {
      title: "Example 4: Checking if the Request Was Successful",
      code: `status_code = 201

if status_code == 201:
    print("Student record created successfully.")
else:
    print("Failed to create student record.")`,
      output: `Student record created successfully.`,
    },
  ],
};

export default lesson8;