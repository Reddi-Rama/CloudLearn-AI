const lesson4 = {
  id: "lesson4",
  title: "Email Automation",
  previousLesson: "/lesson/python-development/module13/lesson3",
  nextLesson: "/lesson/python-development/module13/lesson5",
  content: `
# Email Automation

Email is one of the most common methods of communication used by individuals, businesses, schools, and organizations. Sending emails manually can become repetitive, especially when the same message needs to be sent to many recipients.

Python allows developers to automate email-related tasks such as sending notifications, reports, reminders, alerts, invoices, and newsletters automatically.

One of the most commonly used modules for email automation is **smtplib**.

---

# What is Email Automation?

Email automation is the process of sending emails automatically using software instead of sending them manually.

Python programs can send emails whenever a specific event occurs or at scheduled times.

Examples include:

- Sending daily reports.
- Sending attendance notifications.
- Sending password reset emails.
- Sending order confirmations.
- Sending payment receipts.
- Sending examination results.

Automation makes email communication faster and more efficient.

---

# The smtplib Module

Python provides the built-in **smtplib** module for sending emails using the Simple Mail Transfer Protocol (SMTP).

SMTP is the standard protocol used for sending emails over the Internet.

Example:

\`\`\`python
import smtplib
\`\`\`

This module allows Python programs to connect to an email server and send messages.

---

# SMTP Server

An SMTP server is responsible for sending emails from one computer to another.

Popular SMTP servers include:

- Gmail SMTP
- Outlook SMTP
- Yahoo SMTP
- Office365 SMTP

Each email provider supplies its own SMTP server address and port number.

---

# Connecting to an SMTP Server

Before sending an email, Python must establish a connection with the SMTP server.

Example:

\`\`\`python
import smtplib

server = smtplib.SMTP("smtp.gmail.com", 587)
\`\`\`

The server object is then used to send emails.

---

# Logging In

Most email providers require authentication before allowing emails to be sent.

Example:

\`\`\`python
server.login("example@gmail.com", "password")
\`\`\`

After successful authentication, the program can send emails.

---

# Sending an Email

The **sendmail()** method sends an email.

Example:

\`\`\`python
server.sendmail(
    "sender@gmail.com",
    "receiver@gmail.com",
    "Hello from Python!"
)
\`\`\`

The email is transmitted through the SMTP server to the recipient.

---

# Closing the Connection

Once the email has been sent, the SMTP connection should be closed.

Example:

\`\`\`python
server.quit()
\`\`\`

Closing the connection releases system resources.

---

# Real-World Example

Suppose a college wants to send examination results to thousands of students.

Instead of sending each email manually, a Python program can:

- Read student email addresses.
- Generate personalized messages.
- Send emails automatically.
- Record successful deliveries.
- Report failed deliveries.

This saves significant time and reduces manual effort.

---

# IMPORTANT

Never store your email password directly inside your Python program.

Instead:

- Use environment variables.
- Use application-specific passwords when supported.
- Protect login credentials.
- Never upload passwords to GitHub.
- Test email scripts using your own account first.

Keeping credentials secure is essential for protecting your email account.

---

# Best Practices

Follow these best practices while automating emails:

- Validate email addresses before sending.
- Handle connection errors using try-except.
- Protect login credentials.
- Send professional email messages.
- Test scripts before sending bulk emails.
- Avoid sending duplicate emails.
- Log successful and failed email deliveries.

These practices help create reliable email automation programs.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Hardcoding passwords.
- Forgetting to close the SMTP connection.
- Sending emails without testing.
- Ignoring authentication errors.
- Sending duplicate emails.
- Not validating recipient addresses.
- Ignoring exceptions.

Avoiding these mistakes helps build secure and reliable email automation systems.

---

# Key Points

- Email automation sends emails automatically.
- Python uses the smtplib module for email automation.
- SMTP is the standard protocol for sending emails.
- Authentication is required before sending emails.
- Always protect email credentials.
- Close the SMTP connection after sending emails.
- Email automation saves time and improves productivity.
`,
  examples: [
    {
      title: "Example 1: Importing smtplib",
      code: `import smtplib

print("SMTP Module Imported Successfully")`,
      output: `SMTP Module Imported Successfully`,
    },
    {
      title: "Example 2: Connecting to an SMTP Server",
      code: `import smtplib

server = smtplib.SMTP("smtp.gmail.com", 587)

print("Connected to SMTP Server")`,
      output: `Connected to SMTP Server`,
    },
    {
      title: "Example 3: Sending a Simple Email",
      code: `sender = "sender@example.com"
receiver = "receiver@example.com"

print(f"Email sent from {sender} to {receiver}")`,
      output: `Email sent from sender@example.com to receiver@example.com`,
    },
    {
      title: "Example 4: Closing the SMTP Connection",
      code: `print("SMTP Connection Closed Successfully")`,
      output: `SMTP Connection Closed Successfully`,
    },
  ],
};

export default lesson4;