const lesson1 = {
  id: "lesson1",
  title: "Introduction to APIs",
  previousLesson: "/lesson/python-development/module12/about",
  nextLesson: "/lesson/python-development/module12/lesson2",
  content: `
# Introduction to APIs

Modern software applications constantly exchange information with other applications. Whether you're checking today's weather, making an online payment, logging in with Google, or asking an AI assistant a question, APIs make this communication possible.

An **API (Application Programming Interface)** is a set of rules that allows different software applications to communicate with each other.

Rather than directly accessing another application's internal code or database, an application sends a request to an API and receives a response containing the required information.

APIs are one of the most important technologies in modern software development.

---

# What is an API?

Think of an API as a messenger between two applications.

It receives requests from one application, sends them to another system, and returns the response.

The applications never communicate directly—they communicate through the API.

For example:

1. A mobile app requests weather information.
2. The API sends the request to the weather server.
3. The server processes the request.
4. The API returns the weather details to the mobile app.

The API acts as a bridge between both systems.

---

# Restaurant Analogy

Imagine visiting a restaurant.

The process looks like this:

1. You choose food from the menu.
2. You tell the waiter your order.
3. The waiter delivers the order to the kitchen.
4. The chef prepares the food.
5. The waiter brings the food back.

You never enter the kitchen.

Similarly:

- Customer → Application
- Waiter → API
- Kitchen → Server
- Food → Response

The API works exactly like the waiter.

---

# Why Do We Need APIs?

Without APIs, developers would need to build every service themselves.

For example, if you wanted to create a weather application without using an API, you would need:

- Weather stations
- Satellite systems
- Climate models
- Forecasting software
- Massive databases

Instead, developers simply connect to a weather API and receive weather information instantly.

APIs save enormous amounts of development time.

---

# Where Are APIs Used?

APIs are everywhere.

Examples include:

- Online Banking
- Google Maps
- Food Delivery Apps
- Ride Booking Apps
- Social Media
- AI Chatbots
- Online Shopping
- Payment Gateways
- Video Streaming Platforms
- Cloud Computing Services

Almost every modern application depends on APIs.

---

# Common Real-World APIs

Some popular APIs include:

- Google Maps API
- OpenAI API
- GitHub API
- Stripe API
- PayPal API
- Weather APIs
- YouTube API
- Spotify API
- Firebase API

Each API provides specialized functionality that developers can integrate into their own applications.

---

# Advantages of APIs

Using APIs provides many benefits:

- Faster development
- Code reusability
- Easy integration
- Better scalability
- Improved security
- Standard communication
- Reduced development cost
- Access to powerful external services

This is why APIs have become the foundation of modern software development.

---

# IMPORTANT

APIs belong to external services.

Sometimes they may:

- Respond slowly
- Become temporarily unavailable
- Return unexpected data
- Require authentication
- Reject invalid requests

Professional applications always prepare for these situations.

Never assume an API will always work perfectly.

---

# Real-World Example

Suppose you're building an online learning platform.

Instead of creating your own payment gateway, map service, email service, and AI assistant, you can simply integrate:

- Stripe API for payments
- Google Maps API for locations
- Gmail API for email
- OpenAI API for AI features

Your application becomes much more powerful with very little additional code.

---

# Best Practices

Follow these best practices while working with APIs:

- Read API documentation carefully.
- Understand request and response formats.
- Handle failures gracefully.
- Validate received data.
- Keep API keys secure.
- Never expose sensitive credentials publicly.

These practices help build reliable and secure applications.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Assuming every request succeeds
- Ignoring API documentation
- Hardcoding sensitive API keys
- Not handling failed responses
- Trusting every response without validation

Avoiding these mistakes will make your applications more professional.

---

# Key Points

- API stands for Application Programming Interface.
- APIs allow software applications to communicate.
- APIs act as intermediaries between systems.
- Modern applications heavily depend on APIs.
- APIs save development time by providing reusable services.
- External APIs should always be treated as potentially unreliable.
- Understanding APIs is an essential skill for every Python developer.
`,
  examples: [
    {
      title: "Example 1: Printing an API URL",
      code: `api_url = "https://api.example.com"

print(api_url)`,
      output: `https://api.example.com`,
    },
    {
      title: "Example 2: Storing an API Endpoint",
      code: `endpoint = "/courses"

print(endpoint)`,
      output: `/courses`,
    },
    {
      title: "Example 3: Building a Complete API URL",
      code: `base_url = "https://api.example.com"
endpoint = "/students"

print(base_url + endpoint)`,
      output: `https://api.example.com/students`,
    },
    {
      title: "Example 4: Simulating an API Request",
      code: `print("Sending request...")
print("Receiving response...")
print("Request completed successfully.")`,
      output: `Sending request...
Receiving response...
Request completed successfully.`,
    },
  ],
};

export default lesson1;