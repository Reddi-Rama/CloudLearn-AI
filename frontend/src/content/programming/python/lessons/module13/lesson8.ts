const lesson8 = {
  id: "lesson8",
  title: "Logging and Monitoring Scripts",
  previousLesson: "/lesson/python-development/module13/lesson7",
  nextLesson: "/lesson/python-development/module13/lesson9",
  content: `
# Logging and Monitoring Scripts

As automation programs become larger and more complex, it becomes difficult to identify what happened while the program was running. Professional software does not rely only on messages displayed on the screen. Instead, it records important events in log files so developers can review them later.

This process is called **logging**.

Monitoring means continuously observing a program to ensure that it is running correctly, detecting failures, measuring performance, and notifying administrators when problems occur.

Python provides a built-in module called **logging** that makes it easy to record application events.

---

# What is Logging?

Logging is the process of recording information generated while a program is running.

Instead of displaying messages only on the screen, logging stores them permanently so they can be reviewed later.

Logs may contain:

- Program startup information.
- Successful operations.
- Warning messages.
- Error messages.
- Debugging information.
- User activities.
- Task completion reports.

Logs help developers understand exactly what happened during program execution.

---

# Why is Logging Important?

Logging provides many advantages.

It helps developers:

- Find errors quickly.
- Debug applications.
- Track user activities.
- Record important events.
- Monitor long-running programs.
- Analyze system performance.
- Maintain production software.

Almost every professional application uses logging.

---

# The logging Module

Python includes a built-in module named **logging**.

Import it using:

\`\`\`python
import logging
\`\`\`

Unlike print(), logging provides different levels of messages based on their importance.

---

# Logging Levels

Python supports several logging levels.

These include:

- DEBUG – Detailed information used while developing applications.
- INFO – General information about program execution.
- WARNING – Indicates a possible problem.
- ERROR – Indicates that an operation failed.
- CRITICAL – Indicates a serious error that may stop the program.

Choosing the appropriate logging level makes logs easier to understand.

---

# Writing Log Messages

The logging module provides different functions for recording messages.

Example:

\`\`\`python
import logging

logging.warning("Low Disk Space")

logging.error("File Not Found")
\`\`\`

These messages help developers identify problems quickly.

---

# Saving Logs to a File

Instead of displaying logs only on the screen, they can also be stored inside a file.

Example:

\`\`\`python
import logging

logging.basicConfig(
    filename="application.log",
    level=logging.INFO
)

logging.info("Application Started")
\`\`\`

The message is automatically written into **application.log**.

Log files make it easy to review previous program executions.

---

# What is Monitoring?

Monitoring means continuously observing a running application.

Monitoring helps answer questions such as:

- Is the program still running?
- Did the scheduled task complete?
- Were any errors generated?
- How long did execution take?
- Is the system performing normally?

Monitoring helps administrators detect problems before they become serious.

---

# Monitoring Automation Scripts

Automation scripts should be monitored regularly.

Developers commonly monitor:

- Task completion.
- Execution time.
- Memory usage.
- CPU usage.
- Network connectivity.
- Failed operations.
- Error logs.

Monitoring improves the reliability of automation systems.

---

# Real-World Example

Suppose a company performs automatic database backups every night.

The automation script records:

- Backup started.
- Backup completed.
- Backup size.
- Execution time.
- Errors encountered.

Every morning, the system administrator checks the log file to verify that the backup completed successfully.

Without logging, identifying failures would be much more difficult.

---

# IMPORTANT

Logs are extremely useful, but they should never contain confidential information.

Never record:

- Passwords.
- API Keys.
- Credit card numbers.
- Authentication tokens.
- Personal user information.

Sensitive information should always remain protected.

---
# Best Practices

Follow these best practices while using logging and monitoring:

- Use appropriate logging levels.
- Write meaningful log messages.
- Save logs to files instead of relying only on the console.
- Review log files regularly.
- Log only important events.
- Protect confidential information.
- Monitor long-running automation scripts.
- Handle exceptions properly.

These practices improve software reliability and simplify maintenance.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Using print() instead of logging.
- Ignoring warning messages.
- Logging passwords or API keys.
- Writing unclear log messages.
- Never checking log files.
- Logging excessive unnecessary information.
- Ignoring exceptions.

Avoiding these mistakes helps create professional automation programs.

---

# Key Points

- Logging records important program events.
- Monitoring observes program execution.
- Python provides the built-in logging module.
- Logging levels organize messages by importance.
- Log files help identify problems quickly.
- Monitoring improves application reliability.
- Never store confidential information inside log files.
`,
  examples: [
    {
      title: "Example 1: Importing the Logging Module",
      code: `import logging

print("Logging Module Imported Successfully")`,
      output: `Logging Module Imported Successfully`,
    },
    {
      title: "Example 2: Writing an Information Log",
      code: `import logging

logging.basicConfig(level=logging.INFO)

logging.info("Application Started")`,
      output: `INFO:root:Application Started`,
    },
    {
      title: "Example 3: Writing an Error Log",
      code: `import logging

logging.basicConfig(level=logging.ERROR)

logging.error("Database Connection Failed")`,
      output: `ERROR:root:Database Connection Failed`,
    },
    {
      title: "Example 4: Saving Logs to a File",
      code: `import logging

logging.basicConfig(
    filename="application.log",
    level=logging.INFO
)

logging.info("Backup Completed")

print("Log Saved Successfully")`,
      output: `Log Saved Successfully`,
    },
  ],
};

export default lesson8;