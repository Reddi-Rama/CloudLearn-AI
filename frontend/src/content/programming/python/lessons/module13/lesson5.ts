const lesson5 = {
  id: "lesson5",
  title: "Task Scheduling",
  previousLesson: "/lesson/python-development/module13/lesson4",
  nextLesson: "/lesson/python-development/module13/lesson6",
  content: `
# Task Scheduling

Many computer tasks need to be performed repeatedly at specific times. Instead of running programs manually every day, Python allows developers to schedule tasks so they execute automatically.

Task scheduling is widely used in businesses, servers, cloud systems, and personal applications to automate repetitive work such as creating backups, generating reports, sending emails, and monitoring systems.

Python provides libraries such as **schedule** that make task scheduling simple and efficient.

---

# What is Task Scheduling?

Task scheduling is the process of executing a program automatically at a predetermined time or at regular intervals.

Instead of manually starting a program, the scheduler runs it according to a defined schedule.

Examples include:

- Daily data backup.
- Weekly report generation.
- Monthly invoice creation.
- Sending reminder emails.
- Updating databases.
- Monitoring servers.
- Running security scans.

Automation ensures these tasks are completed on time without human intervention.

---

# Why Use Task Scheduling?

Scheduling tasks provides many benefits.

These include:

- Saves time.
- Eliminates repetitive manual work.
- Improves consistency.
- Reduces human errors.
- Increases productivity.
- Ensures tasks run on time.
- Supports continuous automation.

Task scheduling is an essential feature in modern software systems.

---

# The schedule Library

The **schedule** library allows Python programs to execute functions automatically at specified intervals.

Install it using:

\`\`\`python
pip install schedule
\`\`\`

Import the library:

\`\`\`python
import schedule
\`\`\`

This library provides a simple way to automate recurring tasks.

---

# Scheduling a Task

Tasks are assigned to a function.

Example:

\`\`\`python
import schedule

def greet():
    print("Hello!")

schedule.every().minute.do(greet)
\`\`\`

The function will execute every minute.

---

# Running the Scheduler

The scheduler continuously checks whether any scheduled task should be executed.

Example:

\`\`\`python
import time

while True:
    schedule.run_pending()
    time.sleep(1)
\`\`\`

The loop keeps the scheduler running and executes pending tasks at the appropriate time.

---

# Scheduling at Specific Times

Tasks can also be scheduled at specific times.

Example:

\`\`\`python
schedule.every().day.at("09:00").do(greet)
\`\`\`

This runs the function every day at 9:00 AM.

Other schedules include:

- Every hour
- Every day
- Every Monday
- Every week
- Every month (using external schedulers)

---

# Real-World Example

Suppose a company creates daily sales reports.

Instead of generating reports manually every evening, a Python scheduler can:

- Collect sales data.
- Generate the report.
- Save it as an Excel file.
- Email it to managers.
- Store a backup copy.

All these tasks happen automatically at the scheduled time.

---

# IMPORTANT

Task scheduling only determines **when** a program runs.

It does not guarantee that the task will complete successfully.

Always:

- Handle exceptions.
- Log task execution.
- Verify successful completion.
- Monitor scheduled programs.
- Test schedules before deployment.

These precautions help ensure reliable automation.

---

# Best Practices

Follow these best practices while scheduling tasks:

- Keep scheduled tasks lightweight.
- Log task execution.
- Handle exceptions properly.
- Avoid overlapping scheduled jobs.
- Test schedules before deployment.
- Monitor task performance.
- Use meaningful function names.

These practices improve reliability and maintainability.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Forgetting to keep the scheduler running.
- Ignoring exceptions.
- Scheduling the same task multiple times.
- Running long tasks too frequently.
- Not testing scheduled programs.
- Forgetting to log execution results.
- Assuming scheduled tasks always succeed.

Avoiding these mistakes helps build dependable automation systems.

---

# Key Points

- Task scheduling executes programs automatically.
- Python provides the schedule library for scheduling tasks.
- Tasks can run at fixed intervals or specific times.
- Scheduling saves time and improves productivity.
- Always monitor scheduled tasks.
- Handle errors and log execution results.
- Test schedules before using them in production.
`,
  examples: [
    {
      title: "Example 1: Importing the Schedule Library",
      code: `import schedule

print("Schedule Library Imported Successfully")`,
      output: `Schedule Library Imported Successfully`,
    },
    {
      title: "Example 2: Scheduling a Function",
      code: `import schedule

def greet():
    print("Hello!")

schedule.every().minute.do(greet)

print("Task Scheduled")`,
      output: `Task Scheduled`,
    },
    {
      title: "Example 3: Scheduling a Daily Task",
      code: `import schedule

def backup():
    print("Backup Completed")

schedule.every().day.at("09:00").do(backup)

print("Daily Backup Scheduled")`,
      output: `Daily Backup Scheduled`,
    },
    {
      title: "Example 4: Running the Scheduler",
      code: `import schedule

print("Scheduler Running...")

# schedule.run_pending() is normally placed inside a loop.`,
      output: `Scheduler Running...`,
    },
  ],
};

export default lesson5;