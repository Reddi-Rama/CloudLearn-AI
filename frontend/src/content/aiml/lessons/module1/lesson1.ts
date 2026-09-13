export const lesson1 = {
  id: "aiml-module1-lesson1",

  lessonNumber: 1,

  title: "What Is Artificial Intelligence?",

  moduleTitle: "Introduction to Artificial Intelligence",

  courseId: "aiml",

  moduleId: "module1",

  navigation: {
    courseId: "aiml",

    moduleId: "module1",

    currentLesson: 1,

    totalLessons: 10,

    previous: null,

    next: {
      label: "Lesson 02",
      href: "/lesson/aiml/module1/lesson2",
    },

    backToModule: {
      label: "Module 01",
      href: "/lesson/aiml/module1/about",
    },

    courseOverview: {
      label: "Course Overview",
      href: "/courses/aiml",
    },

    courseRoadmap: {
      label: "Course Roadmap",
      href: "/courses/aiml/roadmap",
    },
  },

  content: String.raw`
# What Is Artificial Intelligence?

Artificial Intelligence (AI) is the field of computing concerned with building systems that can perform tasks that normally require capabilities such as perception, reasoning, learning, planning, prediction, decision making, language processing, or generation.

The important point is that AI is not a single algorithm and it is not simply "using a library".

AI is an engineering discipline for building systems that can make useful decisions or produce useful outputs from information.

---

## 1. Start With the Problem

Instead of memorizing a definition, start with a practical problem.

Imagine a learning platform wants to recommend what a student should study next.

The system could receive:

- Previous quiz scores
- Topics already studied
- Recent mistakes
- Time available
- Current learning goal

It could then produce:

- Recommended topic
- Recommended difficulty
- Recommended practice activity

A simplified system looks like:

\`\`\`
Input
  ↓
Information Processing
  ↓
Reasoning / Computation
  ↓
Decision
  ↓
Output / Action
\`\`\`

This pattern appears throughout AI.

---

## 2. The Intelligent-System Loop

Many AI systems continuously interact with their environment.

A useful mental model is:

\`\`\`
Observe
   ↓
Interpret
   ↓
Decide
   ↓
Act
   ↓
Observe Again
\`\`\`

For example, a navigation system can:

1. Observe road information.
2. Interpret possible routes.
3. Decide which route is preferable.
4. Recommend the route.
5. Receive updated traffic information.
6. Recalculate when necessary.

This is more useful than memorizing one definition of AI.

---

## 3. Major Capabilities of AI

AI systems can perform many different types of tasks.

### Classification

Assign an input to a category.

Examples:

- Spam or not spam
- Fraud or legitimate
- Cat or dog
- Positive or negative review

### Prediction

Estimate an unknown or future value.

Examples:

- Demand prediction
- Price prediction
- Risk estimation

### Recommendation

Select or rank useful alternatives.

Examples:

- Movies
- Products
- Courses
- Search results

### Search

Explore possible states or solutions.

Examples:

- Maze solving
- Route finding
- Game moves

### Planning

Determine a sequence of actions required to reach a goal.

### Perception

Extract useful information from:

- Images
- Audio
- Video
- Sensors
- Documents

### Reasoning

Use available information to reach conclusions.

### Language Processing

Analyze or generate human language.

### Generation

Produce new content such as:

- Text
- Code
- Images
- Audio

---

## 4. AI as a Problem-Solving Discipline

Before writing AI code, define the problem.

Ask:

1. What problem are we solving?
2. Who uses the system?
3. What inputs are available?
4. What output is required?
5. What is the objective?
6. What constraints exist?
7. How will success be measured?
8. What happens if the system is wrong?

For example:

### Weak problem statement

"Build an AI education application."

This is too broad.

### Better problem statement

"Given a learner's recent quiz results and topic history, recommend the next topic that should be practiced."

Now we can identify:

\`\`\`
Input:
Quiz scores + topic history

Processing:
Analyze learner performance

Output:
Next recommended topic

Goal:
Improve learning efficiency
\`\`\`

This is the beginning of AI engineering.

---

## 5. Intelligent Agents

An intelligent agent observes an environment and selects actions to achieve a goal.

A simplified architecture is:

\`\`\`
Environment
     ↓
Percepts
     ↓
Agent
     ↓
Actions
     ↓
Environment
\`\`\`

A software agent might receive information from:

- Users
- Sensors
- Databases
- APIs
- Files
- Other software systems

The agent then chooses an action.

---

## 6. AI Does Not Always Mean Machine Learning

This is one of the most important ideas in this course.

A system can be intelligent without learning from data.

For example:

\`\`\`
IF temperature > 35
THEN recommend hydration
\`\`\`

This is a rule-based system.

It can be useful, explainable, and automated.

Machine learning becomes useful when the system needs to learn patterns from examples rather than relying entirely on manually written rules.

Therefore:

\`\`\`
AI
├── Rule-Based Systems
├── Search
├── Planning
├── Optimization
├── Machine Learning
├── Deep Learning
└── Generative AI
\`\`\`

These approaches can also be combined.

---

## 7. First Python Experiment

Let's build a very small intelligent decision system.

\`\`\`python
def temperature_advisor(temperature):

    if temperature >= 35:
        return "High temperature: stay hydrated."

    elif temperature >= 25:
        return "Warm conditions: normal activity may be suitable."

    else:
        return "Cool conditions: consider a light layer."


temperatures = [18, 28, 37]

for temperature in temperatures:
    decision = temperature_advisor(temperature)

    print(
        f"{temperature}°C -> {decision}"
    )
\`\`\`

### Expected Output

\`\`\`
18°C -> Cool conditions: consider a light layer.
28°C -> Warm conditions: normal activity may be suitable.
37°C -> High temperature: stay hydrated.
\`\`\`

This is not machine learning.

But it demonstrates an important AI engineering pattern:

\`\`\`
Input → Decision Logic → Output
\`\`\`

---

## 8. Make the System More Intelligent

Now introduce another input.

\`\`\`python
def activity_advisor(temperature, rain):

    if rain and temperature < 25:
        return "Consider an indoor activity."

    if temperature >= 35:
        return "Stay hydrated and avoid excessive outdoor activity."

    if temperature >= 25:
        return "Outdoor activity may be suitable."

    return "Consider a light outdoor activity."


print(activity_advisor(20, True))
print(activity_advisor(30, False))
print(activity_advisor(38, False))
\`\`\`

The system now uses multiple pieces of information.

This demonstrates why problem representation matters.

---

## 9. Experiment: Add More Inputs

Try adding:

- Humidity
- Wind speed
- Time of day
- Activity type

For example:

\`\`\`python
def activity_advisor(
    temperature,
    rain,
    humidity
):
    if rain:
        return "Consider an indoor activity."

    if temperature >= 35:
        return "Avoid intense outdoor activity."

    if humidity >= 80:
        return "Prefer a shorter activity."

    return "Normal outdoor activity may be suitable."
\`\`\`

Notice what happens as more rules are added.

The program becomes harder to maintain.

This is an important engineering lesson:

**A simple rule-based approach works well for small, clearly defined problems, but large problems often require more advanced techniques.**

---

## 10. Python Tools for AI Development

At this stage, use:

### Python

The main programming language for the AI learning path.

### VS Code

Useful for:

- Writing Python programs
- Managing projects
- Debugging
- Running scripts

### Jupyter Notebook

Useful for:

- Experiments
- Data exploration
- Visual explanations
- Step-by-step AI learning

We will introduce NumPy, Pandas, Matplotlib, and scikit-learn later when they solve specific problems.

Do not learn libraries by memorizing functions.

Learn:

\`\`\`
Problem
  ↓
Concept
  ↓
Implementation
  ↓
Library
  ↓
Experiment
\`\`\`

---

## 11. Common Mistakes

### Mistake 1

Calling every automated program AI.

Automation and AI are related but not identical.

### Mistake 2

Assuming AI always requires machine learning.

It does not.

### Mistake 3

Starting with a library before understanding the problem.

Libraries are tools. They do not replace problem formulation.

### Mistake 4

Ignoring failure conditions.

A useful AI engineer asks:

"What happens when the input is unexpected?"

---

## 12. Practical Exercise

Create a Python program called:

\`\`\`
study_advisor.py
\`\`\`

The program should accept:

- Available study hours
- Exam proximity
- Preparation level

Then produce a recommendation.

Example:

\`\`\`
Available hours: 3
Exam near: yes
Preparation: low

Recommendation:
Focus on revision and practice.
\`\`\`

Try at least five different inputs.

---

## 13. Challenge

Extend the program so that it also produces an explanation.

Instead of:

\`\`\`
Recommendation: Revise
\`\`\`

produce:

\`\`\`
Recommendation: Revise

Reason:
The exam is near and preparation is currently low.
\`\`\`

This introduces an important idea that will appear repeatedly in AI:

**An output is often more useful when the system can explain how it arrived at the decision.**

---

## Quick Check

### Question

Is a rule-based decision program automatically machine learning?

### Answer

No.

A rule-based system follows explicitly programmed rules. Machine learning systems learn patterns or relationships from data.

---

## Key Takeaways

- AI is a field of intelligent computational systems.
- AI is broader than machine learning.
- AI starts with problem formulation.
- Intelligent systems receive information and produce decisions or actions.
- Rule-based systems are one possible AI approach.
- Python can be used to build simple intelligent systems.
- Libraries should be learned when they solve a real problem.
- Good AI engineering includes testing, validation, explanation, and failure analysis.
`,

  practice: [
    "Run every Python example.",
    "Modify at least one condition in each example.",
    "Create five different test cases.",
    "Add an explanation to every decision.",
    "Write one real-world problem that could benefit from AI.",
  ],

  quickCheck: [
    {
      question: "Is AI the same as Machine Learning?",
      answer:
        "No. Machine Learning is one approach within the broader field of AI.",
    },
    {
      question: "What should happen before selecting an AI algorithm?",
      answer:
        "The problem, inputs, outputs, objectives, constraints, and success criteria should be understood.",
    },
  ],
};