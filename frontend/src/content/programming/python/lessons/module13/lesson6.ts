const lesson6 = {
  id: "lesson6",
  title: "Web Automation",
  previousLesson: "/lesson/python-development/module13/lesson5",
  nextLesson: "/lesson/python-development/module13/lesson7",
  content: `
# Web Automation

Web automation is the process of using software to perform tasks on websites automatically instead of doing them manually. Python makes web automation simple by providing powerful libraries that can control web browsers, interact with web pages, fill forms, click buttons, and extract information.

Web automation is widely used in software testing, web scraping, online form submission, report generation, data collection, and repetitive browser tasks.

One of the most popular Python libraries for web automation is **Selenium**.

---

# What is Web Automation?

Web automation allows a computer program to interact with websites just like a human user.

Instead of manually opening a browser and clicking through pages, Python performs these actions automatically.

Examples include:

- Logging into websites.
- Filling online forms.
- Clicking buttons.
- Downloading reports.
- Searching for information.
- Uploading files.
- Taking screenshots.

Automation reduces repetitive work and increases efficiency.

---

# Why Use Web Automation?

Many tasks performed on websites are repetitive.

Web automation provides several benefits:

- Saves time.
- Reduces manual effort.
- Improves accuracy.
- Eliminates repetitive tasks.
- Performs tasks much faster.
- Supports automated testing.
- Collects information automatically.

These advantages make web automation valuable for developers and businesses.

---

# Selenium Library

**Selenium** is one of the most widely used Python libraries for browser automation.

It allows programs to control web browsers such as:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

Install Selenium using pip.

Example:

\`\`\`python
pip install selenium
\`\`\`

Import the library.

Example:

\`\`\`python
from selenium import webdriver
\`\`\`

---

# Launching a Browser

Selenium can automatically open a web browser.

Example:

\`\`\`python
from selenium import webdriver

driver = webdriver.Chrome()

driver.get("https://www.python.org")
\`\`\`

The browser opens the specified website automatically.

---

# Finding Web Elements

Before interacting with a webpage, Selenium must locate elements.

Elements include:

- Buttons
- Text boxes
- Images
- Links
- Checkboxes
- Drop-down menus

Example:

\`\`\`python
element = driver.find_element("id", "username")
\`\`\`

The element can then be used for further actions.

---

# Performing Actions

Once an element is located, Selenium can perform actions such as:

- Typing text.
- Clicking buttons.
- Selecting options.
- Uploading files.
- Clearing input fields.

Example:

\`\`\`python
element.send_keys("Python")

button.click()
\`\`\`

These actions simulate real user interactions.

---

# Closing the Browser

After completing automation, the browser should be closed.

Example:

\`\`\`python
driver.quit()
\`\`\`

Closing the browser releases system resources.

---

# Real-World Example

Suppose a company downloads daily reports from a website.

Instead of manually:

- Opening the browser.
- Logging in.
- Clicking download.
- Saving the report.

A Selenium program can perform all these steps automatically within seconds.

This saves time and reduces repetitive work.

---

# IMPORTANT

Some websites restrict automated access.

Before automating a website:

- Read its terms of service.
- Respect website policies.
- Avoid excessive requests.
- Protect login credentials.
- Use automation responsibly.

Improper automation may violate website rules.

---

# Best Practices

Follow these best practices while performing web automation:

- Wait for web pages to load completely.
- Handle exceptions properly.
- Use meaningful element names.
- Close browsers after automation.
- Test scripts on sample websites.
- Avoid hardcoding sensitive information.
- Keep automation scripts organized.

These practices improve reliability and maintainability.

---

# Common Beginner Mistakes

Many beginners make mistakes such as:

- Forgetting to close the browser.
- Assuming pages load instantly.
- Using incorrect element identifiers.
- Ignoring exceptions.
- Hardcoding login credentials.
- Running automation too quickly.
- Not testing scripts thoroughly.

Avoiding these mistakes helps build reliable automation programs.

---

# Key Points

- Web automation performs browser tasks automatically.
- Selenium is the most popular Python library for web automation.
- Selenium can control multiple web browsers.
- Web elements must be located before interaction.
- Automation saves time and improves productivity.
- Always follow website policies while automating.
- Close the browser after completing automation.
`,
  examples: [
    {
      title: "Example 1: Importing Selenium",
      code: `from selenium import webdriver

print("Selenium Imported Successfully")`,
      output: `Selenium Imported Successfully`,
    },
    {
      title: "Example 2: Opening a Website",
      code: `from selenium import webdriver

driver = webdriver.Chrome()

driver.get("https://www.python.org")

print("Website Opened Successfully")`,
      output: `Website Opened Successfully`,
    },
    {
      title: "Example 3: Finding a Web Element",
      code: `print("Finding element with ID: username")`,
      output: `Finding element with ID: username`,
    },
    {
      title: "Example 4: Closing the Browser",
      code: `print("Browser Closed Successfully")`,
      output: `Browser Closed Successfully`,
    },
  ],
};

export default lesson6;