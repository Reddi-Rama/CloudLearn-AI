const lesson2 = {
  id: "lesson2",
  title: "Understanding HTTP Methods",
  previousLesson: "/lesson/python-development/module12/lesson1",
  nextLesson: "/lesson/python-development/module12/lesson3",
  content: `
# Understanding HTTP Methods

Whenever an application communicates with an API, it sends an **HTTP request**. The type of request tells the server what action should be performed.

HTTP stands for **HyperText Transfer Protocol**. It is the standard communication protocol used by websites, web applications, and APIs across the internet.

Every API request uses an HTTP method to indicate whether data should be retrieved, created, updated, or deleted.

Understanding HTTP methods is one of the first steps toward learning API development.

---

# What is HTTP?

HTTP is a communication protocol that allows clients and servers to exchange information.

For example:

- A web browser requests a webpage.
- A mobile application requests weather data.
- An online shopping application requests product details.
- A chatbot requests AI-generated responses.

All these interactions happen through HTTP requests.

---

# Why Do HTTP Methods Matter?

Imagine an online shopping website.

The application may need to:

- View products
- Create an order
- Update shipping information
- Cancel an order

Using the same request for every action would create confusion.

Instead, HTTP provides different methods, each with a specific purpose.

---

# GET Method

The **GET** method is used to retrieve data from a server.

It does not modify any information.

Example:

GET /courses

Possible Response:

- Python Development
- Machine Learning
- Cybersecurity

GET requests are safe because they only retrieve information.

---

# POST Method

The **POST** method is used to send new data to a server.

It is commonly used when creating new records.

Example:

POST /students

Possible actions:

- Register a student
- Place an online order
- Submit a contact form
- Upload user information

POST requests create new resources.

---

# PUT Method

The **PUT** method updates existing information.

Example:

PUT /courses/101

Possible actions:

- Update course title
- Modify student details
- Change profile information
- Update delivery address

PUT replaces or updates existing resources.

---

# DELETE Method

The **DELETE** method removes information from the server.

Example:

DELETE /students/50

Possible actions:

- Delete a student record
- Remove an order
- Delete a comment
- Remove a file

DELETE requests permanently remove resources if permitted.

---

# Summary of HTTP Methods

The four most common HTTP methods are:

- GET → Retrieve data
- POST → Create new data
- PUT → Update existing data
- DELETE → Remove data

These methods form the foundation of REST APIs.

---

# Real-World Example

Consider an online shopping application.

Different actions require different HTTP methods:

- View products → GET
- Place an order → POST
- Update shipping address → PUT
- Cancel an order → DELETE

Using appropriate HTTP methods makes APIs easier to understand and maintain.

---

# IMPORTANT

Choosing the correct HTTP method is extremely important.

Using incorrect methods may:

- Produce unexpected results
- Cause server errors
- Create duplicate records
- Delete important information

Always read the API documentation before sending requests.

---

# Best Practices

Follow these best practices when working with HTTP methods:

- Use GET only for retrieving data.
- Use POST when creating new resources.
- Use PUT when updating existing information.
- Use DELETE carefully because it removes data.
- Follow API documentation consistently.

Using standard HTTP methods improves application reliability and readability.

---

# Common Beginner Mistakes

New developers often make mistakes such as:

- Using GET to modify data.
- Using POST for every request.
- Forgetting that DELETE permanently removes data.
- Ignoring API documentation.
- Confusing POST and PUT.

Learning the purpose of each method helps avoid these issues.

---

# Key Points

- HTTP stands for HyperText Transfer Protocol.
- HTTP methods tell the server what action to perform.
- GET retrieves data.
- POST creates new resources.
- PUT updates existing resources.
- DELETE removes resources.
- Proper use of HTTP methods is essential for API communication.
`,
  examples: [
    {
      title: "Example 1: Simulating a GET Request",
      code: `method = "GET"

print("Request Method:", method)
print("Retrieving course data...")`,
      output: `Request Method: GET
Retrieving course data...`,
    },
    {
      title: "Example 2: Simulating a POST Request",
      code: `method = "POST"

print("Request Method:", method)
print("Creating a new student record...")`,
      output: `Request Method: POST
Creating a new student record...`,
    },
    {
      title: "Example 3: Simulating a PUT Request",
      code: `method = "PUT"

print("Request Method:", method)
print("Updating student details...")`,
      output: `Request Method: PUT
Updating student details...`,
    },
    {
      title: "Example 4: Simulating a DELETE Request",
      code: `method = "DELETE"

print("Request Method:", method)
print("Deleting course record...")`,
      output: `Request Method: DELETE
Deleting course record...`,
    },
  ],
};

export default lesson2;