const lesson9 = {
  id: "lesson9",
  title: "Understanding REST APIs",
  previousLesson: "/lesson/python-development/module12/lesson8",
  nextLesson: "/lesson/python-development/module12/lesson10",
  content: `
# Understanding REST APIs

Most modern web applications communicate using **REST APIs**. Whether you're using a banking app, shopping online, watching videos, or interacting with an AI chatbot, chances are the application is communicating with a REST API.

REST has become the industry standard for designing web services because it is simple, scalable, and easy to understand.

Learning REST APIs is an essential skill for every Python developer.

---

# What is REST?

**REST** stands for **Representational State Transfer**.

It is an architectural style used for designing APIs that communicate over HTTP.

Rather than being a programming language or framework, REST provides a set of principles that developers follow when building web APIs.

Most public APIs available today follow REST principles.

---

# What is a REST API?

A REST API exposes **resources** that clients can access using HTTP methods.

Examples of resources include:

- Courses
- Students
- Products
- Orders
- Employees
- Books

Each resource is identified using a unique URL called an **endpoint**.

Example:

\`\`\`
/courses
/students
/products
/orders
\`\`\`

Applications send HTTP requests to these endpoints to retrieve or modify information.

---

# Resources in REST APIs

Everything in a REST API is treated as a resource.

For example, consider an online learning platform.

Possible resources include:

- Courses
- Students
- Instructors
- Certificates
- Assignments

Each resource has its own endpoint.

Example:

\`\`\`
/courses
/students
/instructors
/certificates
\`\`\`

This structure keeps APIs organized and easy to understand.

---

# HTTP Methods in REST

REST APIs use standard HTTP methods.

| Method | Purpose |
|---------|---------|
| GET | Retrieve data |
| POST | Create new data |
| PUT | Update existing data |
| DELETE | Remove data |

Example:

\`\`\`
GET /courses
POST /courses
PUT /courses/10
DELETE /courses/10
\`\`\`

Each request performs a different operation on the same resource.

---

# Why REST Became Popular

REST provides several advantages:

- Simplicity
- Scalability
- Standardization
- Language independence
- Better performance
- Easy integration

Because of these advantages, REST has become the most widely used API architecture.

---

# Real-World Examples

REST APIs power countless applications, including:

- Social Media Platforms
- Online Shopping Websites
- Banking Systems
- Food Delivery Apps
- Ride Booking Applications
- Cloud Services
- AI Platforms
- Mobile Applications

Almost every modern software system uses REST APIs.

---

# IMPORTANT

REST APIs should be designed around **resources**, not actions.

Good endpoint examples:

- /students
- /courses
- /payments

Poor endpoint examples:

- /getStudents
- /createCourse
- /deletePayment

The HTTP method already describes the action, so endpoint names should focus on the resource.

---

# Best Practices

When working with REST APIs:

- Use meaningful resource names.
- Follow standard HTTP methods.
- Keep endpoints simple.
- Return consistent response formats.
- Use proper status codes.
- Read API documentation carefully.

These practices improve API usability and maintainability.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Using incorrect HTTP methods.
- Naming endpoints after actions instead of resources.
- Ignoring HTTP status codes.
- Mixing unrelated resources together.
- Designing inconsistent API URLs.

Following REST principles helps create clean and scalable APIs.

---

# Key Points

- REST stands for Representational State Transfer.
- REST is an architectural style for designing APIs.
- REST APIs communicate using HTTP.
- Resources are accessed through endpoints.
- GET retrieves data.
- POST creates data.
- PUT updates data.
- DELETE removes data.
- REST APIs are widely used in modern software development.
`,
  examples: [
    {
      title: "Example 1: GET Request for a Resource",
      code: `endpoint = "/courses"

print("GET", endpoint)`,
      output: `GET /courses`,
    },
    {
      title: "Example 2: Creating a Resource",
      code: `endpoint = "/students"

print("POST", endpoint)`,
      output: `POST /students`,
    },
    {
      title: "Example 3: Updating a Resource",
      code: `course_id = 10

print(f"PUT /courses/{course_id}")`,
      output: `PUT /courses/10`,
    },
    {
      title: "Example 4: Deleting a Resource",
      code: `student_id = 25

print(f"DELETE /students/{student_id}")`,
      output: `DELETE /students/25`,
    },
  ],
};

export default lesson9;