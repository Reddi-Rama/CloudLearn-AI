export const practice = {
  id: "aiml-module1-practice",
  title: "Module 01 Practice",
  moduleTitle: "Introduction to Artificial Intelligence",
  courseId: "aiml",
  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",

    previous: {
      label: "Lesson 10",
      href: "/lesson/aiml/module1/lesson10"
    },

    next: {
      label: "Module 01 Project",
      href: "/lesson/aiml/module1/project"
    },

    backToModule: {
      label: "Module 01",
      href: "/lesson/aiml/module1/about"
    },

    courseOverview: {
      label: "Course Overview",
      href: "/courses/aiml"
    },

    courseRoadmap: {
      label: "Course Roadmap",
      href: "/courses/aiml/roadmap"
    }
  },

  content: String.raw`
# Module 01 Practice — Introduction to Artificial Intelligence

## Practice Overview

This practice section is designed to reinforce everything you learned in Module 01.

You have studied:

- Artificial Intelligence fundamentals
- Traditional programming and AI
- History and evolution of AI
- Types and capabilities of AI
- AI, Machine Learning, and Deep Learning
- Generative AI and modern AI systems
- AI applications
- Strengths, limitations, and challenges
- AI problem-solving approaches
- Rule-based intelligent systems

The purpose of this practice is not memorization.

You should be able to:

- Explain AI concepts clearly
- Identify suitable AI approaches
- Represent simple AI problems
- Analyze AI systems
- Write Python implementations
- Build rule-based reasoning systems
- Explain decisions produced by an intelligent system
- Recognize limitations and responsible-AI concerns

---

# Part 1 — AI Fundamentals

## Practice 1 — Define Artificial Intelligence

Explain Artificial Intelligence in your own words.

Your answer should cover:

- What an AI system does
- How AI systems use information
- How AI can make decisions or produce outputs
- Why intelligence in software is different from simply executing instructions

Do not copy a textbook definition.

Construct your own explanation using a practical example.

---

## Practice 2 — Identify AI Behavior

For each situation, decide whether the system demonstrates an AI-related capability.

### Situation A

A calculator receives:

\`\`\`
25 + 30
\`\`\`

and returns:

\`\`\`
55
\`\`\`

### Situation B

A recommendation system analyzes previous user interactions and recommends products.

### Situation C

A program checks:

\`\`\`
if temperature > 35:
    print("High temperature")
\`\`\`

### Situation D

A system analyzes images and identifies objects.

For each situation, explain:

- What the system is doing
- Whether it represents an AI capability
- Which capability is involved, if applicable

---

# Part 2 — AI vs Traditional Programming

## Practice 3 — Traditional Programming

Suppose you need to build a program that determines whether a number is even or odd.

Write the Python program.

\`\`\`
number = int(input("Enter a number: "))

if number % 2 == 0:
    print("Even")
else:
    print("Odd")
\`\`\`

Now explain:

- What the input is
- What rule is being used
- What the output is
- Why this is traditional rule-based programming

---

## Practice 4 — Rule Explosion

Imagine a system that determines whether a customer receives a discount.

The rules depend on:

- Customer type
- Purchase amount
- Membership status
- Season
- Product category

Explain why the number of rules can become difficult to manage as conditions increase.

Then describe one situation where machine learning might be more suitable than manually writing every rule.

---

# Part 3 — History and Evolution of AI

## Practice 5 — AI Timeline

Create a short timeline containing these stages:

- Early symbolic AI
- Search-based AI
- Expert systems
- Statistical machine learning
- Deep learning
- Modern foundation models
- Generative AI

For each stage, write:

- Main idea
- Typical capability
- One representative application

---

## Practice 6 — Evolution Analysis

Explain why AI moved from systems based heavily on explicitly programmed knowledge toward systems that learn patterns from data.

Your answer should discuss:

- Increasing data availability
- Computational power
- Machine learning
- Neural networks
- Large-scale datasets
- Modern AI models

---

# Part 4 — Types and Capabilities of AI

## Practice 7 — Capability Identification

Identify the main AI capability in each example.

### Example A

A system predicts next month's product demand.

### Example B

A system recommends movies.

### Example C

A system detects objects in an image.

### Example D

A system converts speech into text.

### Example E

A system generates a paragraph from a prompt.

### Example F

A system searches possible routes and selects one.

Use capability names such as:

- Prediction
- Recommendation
- Perception
- Natural Language Processing
- Generation
- Search

Then explain your choices.

---

## Practice 8 — Capability vs Technology

Explain why the following are not equivalent concepts:

\`\`\`
AI capability
AI technique
AI model
AI application
\`\`\`

Give one example of each.

---

# Part 5 — AI, Machine Learning and Deep Learning

## Practice 9 — Explain the Relationship

Explain the relationship between:

\`\`\`
Artificial Intelligence
        ↓
Machine Learning
        ↓
Deep Learning
\`\`\`

Your explanation should clarify that these terms describe related but different levels of concepts.

---

## Practice 10 — Model vs Application

Consider a spam detection application.

Explain the difference between:

\`\`\`
Model
\`\`\`

and:

\`\`\`
Application
\`\`\`

Your answer should include:

- Input
- Model
- Prediction
- Application logic
- Final output

---

# Part 6 — Modern AI Systems

## Practice 11 — Generative AI

Explain the difference between:

\`\`\`
Prediction
\`\`\`

and:

\`\`\`
Generation
\`\`\`

Give one example of each.

Then explain why a Generative AI system can produce new content rather than simply selecting one predefined response.

---

## Practice 12 — Foundation Models

Explain what a foundation model is and why foundation models are important to modern AI applications.

Then describe how one model can support multiple applications.

---

## Practice 13 — AI Application Pipeline

Design a basic architecture for a Generative AI application.

Your architecture should contain:

\`\`\`
User Input
↓
Validation
↓
Context
↓
AI Model
↓
Output Validation
↓
Application Response
\`\`\`

Explain the purpose of each stage.

---

# Part 7 — AI Applications

## Practice 14 — Application Analysis

Choose any three industries:

- Healthcare
- Finance
- Education
- Retail
- Manufacturing
- Transportation
- Agriculture
- Cybersecurity
- Software Development

For each industry, identify:

- Problem
- AI capability
- Possible technique
- Input data
- Expected output
- Human role

---

## Practice 15 — Problem → Capability → Technique

Complete the reasoning process for this problem:

\`\`\`
A retail store wants to predict how many units of a product
it may sell next week.
\`\`\`

Determine:

\`\`\`
Problem
↓
AI Capability
↓
Possible Technique
↓
Input Data
↓
Output
↓
Evaluation
\`\`\`

Do not simply name a technology.

Explain why the selected approach fits the problem.

---

# Part 8 — Strengths and Limitations of AI

## Practice 16 — Strength Analysis

Choose three strengths of AI from:

- Automation
- Speed
- Scalability
- Pattern detection
- Consistency
- Personalization
- Decision support

For each strength, provide a practical example.

---

## Practice 17 — Limitation Analysis

Explain the following AI limitations:

- Data dependence
- Bias
- Generalization problems
- Overfitting
- Distribution shift
- Hallucination
- Uncertainty
- Explainability challenges

For each limitation, describe one possible consequence.

---

## Practice 18 — Confidence vs Truth

Consider an AI system that produces:

\`\`\`
Prediction:
90% confidence
\`\`\`

Explain why high confidence does not necessarily mean that the prediction is correct.

Give an example of how an AI system can be confidently wrong.

---

# Part 9 — AI Problem-Solving Approaches

## Practice 19 — Choose the Approach

Choose a suitable AI approach for each problem.

### Problem A

Find the shortest path through a map.

### Problem B

Predict house prices from historical data.

### Problem C

Generate a natural-language explanation.

### Problem D

Apply a fixed company policy.

### Problem E

Find the best solution under multiple constraints.

Possible approaches:

- Search
- Machine Learning
- Generative AI
- Rule-Based Reasoning
- Optimization

Explain your reasoning for each answer.

---

## Practice 20 — Problem Representation

Represent this problem formally:

\`\`\`
A robot must move from a starting location
to a target location while avoiding obstacles.
\`\`\`

Identify:

- Initial state
- Actions
- State space
- Goal state
- Constraints
- Possible search approach

---

# Part 10 — Python for AI

## Practice 21 — Basic Python Decision System

Write a Python program that receives a temperature and prints:

- "Cold" when temperature < 15
- "Moderate" when temperature is between 15 and 30
- "Hot" when temperature > 30

Your program should validate the input.

---

## Practice 22 — Functions

Create a function:

\`\`\`
classify_temperature(temperature)
\`\`\`

The function should return a classification instead of directly printing it.

Test the function with at least five values.

---

## Practice 23 — Structured Facts

Represent the following information using a Python dictionary:

\`\`\`
temperature = 34
weather = hot
humidity = 70
location = city
\`\`\`

Expected structure:

\`\`\`
facts = {
    "temperature": 34,
    "weather": "hot",
    "humidity": 70,
    "location": "city"
}
\`\`\`

Then write code that reads values from the dictionary.

---

# Part 11 — Rule-Based Intelligent Systems

## Practice 24 — Create Rules

Build at least five rules for a simple troubleshooting assistant.

Your rules should use facts such as:

\`\`\`
internet_connected
wifi_enabled
signal_strength
router_power
\`\`\`

Each rule should produce:

- Decision
- Reason

---

## Practice 25 — Rule Engine

Create a Python rule engine that:

1. Receives facts
2. Checks multiple rules
3. Finds matching rules
4. Selects the highest-priority rule
5. Returns the decision
6. Returns the reason
7. Returns the rule name

Use this structure as a starting point:

\`\`\`
def evaluate_rules(facts, rules):
    matches = []

    for rule in rules:
        if rule["condition"](facts):
            matches.append(rule)

    if not matches:
        return None

    matches.sort(
        key=lambda rule: rule.get("priority", 0),
        reverse=True
    )

    return matches[0]
\`\`\`

Extend it to provide a complete explanation.

---

# Part 12 — Forward Chaining

## Practice 26 — Build a Rule Chain

Create a system with the following logic:

\`\`\`
Fact:
battery = 10

Rule 1:
IF battery < 20
THEN battery_status = "low"

Rule 2:
IF battery_status == "low"
THEN action = "charge"
\`\`\`

Implement this in Python.

The final facts should contain the newly derived information.

---

## Practice 27 — Explain the Chain

Given:

\`\`\`
Fact A
 ↓
Rule 1
 ↓
Fact B
 ↓
Rule 2
 ↓
Fact C
\`\`\`

Explain how forward chaining works in this example.

---

# Part 13 — Responsible AI

## Practice 28 — Identify Risks

Consider an AI application used to make decisions about people.

Identify possible risks related to:

- Bias
- Fairness
- Privacy
- Explainability
- Human oversight
- Incorrect predictions

For each risk, describe one way the system could reduce it.

---

## Practice 29 — Human Oversight

Explain why some AI systems should keep a human involved in the decision-making process.

Give two examples where human review can be important.

---

# Part 14 — Integrated AI Reasoning

## Practice 30 — End-to-End Analysis

Consider this problem:

\`\`\`
A college wants to build an intelligent system that helps
students decide which learning activity they should complete next.
\`\`\`

Design the system using the following structure:

\`\`\`
Problem
↓
Objective
↓
Inputs
↓
Facts
↓
AI Capability
↓
Approach
↓
Reasoning
↓
Output
↓
Evaluation
↓
Human Oversight
\`\`\`

Explain every stage.

---

# Coding Challenge

## Challenge — Build an AI Decision Assistant

Build a complete Python-based rule-driven AI Decision Assistant.

The assistant should accept:

- Urgency
- Available time
- Difficulty

Example:

\`\`\`
urgency = "high"
available_time = 1
difficulty = "high"
\`\`\`

Create at least five rules.

Example situations:

\`\`\`
High urgency + little time + high difficulty
→ Break the task into smaller steps

High urgency + enough time
→ Start with the highest-priority part

Low urgency + enough time
→ Plan the task

Low difficulty
→ Complete the task directly
\`\`\`

Your implementation should include:

### 1. Input Validation

Reject invalid values.

### 2. Fact Representation

Store the current situation as structured facts.

### 3. Knowledge Base

Store the rules separately from the main reasoning logic.

### 4. Rule Matching

Determine which rules apply.

### 5. Conflict Resolution

Use priority when multiple rules match.

### 6. Decision

Return the selected action.

### 7. Explanation

Return:

\`\`\`
Decision
Reason
Rule Used
\`\`\`

### 8. Testing

Test at least five different situations.

### 9. Unknown Situation

Handle a situation where no rule matches.

---

# Challenge Extension

Extend the AI Decision Assistant so that it can produce a reasoning trace.

Example:

\`\`\`
Input received:
Urgency = high
Available time = 1 hour
Difficulty = high

Checking Rule 1...
Matched.

Checking Rule 2...
Not matched.

Checking Rule 3...
Not matched.

Selected Rule:
High Urgency + Low Time + High Difficulty

Decision:
Break the task into smaller steps.

Reason:
The task is urgent, difficult, and there is limited time.
\`\`\`

This introduces the idea of making AI reasoning observable and debuggable.

---

# Module Practice Checklist

Before moving to the Module 01 project, make sure you can:

- Explain Artificial Intelligence
- Distinguish AI from traditional programming
- Explain major stages in AI history
- Distinguish AI, ML, and DL
- Explain Generative AI
- Identify common AI capabilities
- Identify AI applications across industries
- Explain AI strengths and limitations
- Distinguish confidence from correctness
- Choose suitable AI problem-solving approaches
- Represent states, actions, and goals
- Write basic Python decision logic
- Use Python functions and dictionaries
- Represent facts
- Create explicit rules
- Implement a basic rule engine
- Explain forward chaining
- Understand backward chaining
- Resolve conflicting rules
- Provide explanations for decisions
- Validate inputs
- Identify responsible-AI concerns
- Design a simple intelligent system

---

# Preparation for Module Project

After completing this practice, you are ready to build:

## AI Decision Assistant

The project should transform the concepts from this module into a working intelligent application.

You should be able to demonstrate:

\`\`\`
Problem Definition
        ↓
Input
        ↓
Facts
        ↓
Knowledge
        ↓
Rules
        ↓
Reasoning
        ↓
Decision
        ↓
Explanation
        ↓
Testing
\`\`\`

The project should not be treated as a collection of unrelated Python conditions.

The goal is to demonstrate the complete idea of an intelligent system.

---

# Final Reflection

Answer these questions before starting the project:

1. What makes an AI system different from a normal program?

2. When is a rule-based approach appropriate?

3. When would machine learning be more suitable?

4. Why does problem representation matter?

5. What is the difference between a fact and a rule?

6. What does a rule engine do?

7. What is forward chaining?

8. Why can rule-based systems become difficult to maintain?

9. Why is explanation useful in an intelligent system?

10. Why should AI systems be designed with limitations and responsible-AI considerations in mind?

If you can answer these questions and complete the coding challenge independently, you have established the practical foundation required for the Module 01 project.
`,

  practice: [
    {
      id: "aiml-module1-practice-01",
      title: "AI Fundamentals",
      description: "Explain AI, identify intelligent behavior, and distinguish AI capabilities from traditional computation.",
      tasks: [
        "Define Artificial Intelligence in your own words.",
        "Identify AI-related capabilities in practical situations.",
        "Explain what makes a software system intelligent."
      ]
    },
    {
      id: "aiml-module1-practice-02",
      title: "AI vs Traditional Programming",
      description: "Analyze explicit rules and understand the limitations of manually programmed decision logic.",
      tasks: [
        "Implement a traditional programming example.",
        "Analyze rule-based decision logic.",
        "Explain the concept of rule explosion."
      ]
    },
    {
      id: "aiml-module1-practice-03",
      title: "AI Evolution",
      description: "Connect major stages in the evolution of AI with their capabilities and applications.",
      tasks: [
        "Create an AI timeline.",
        "Explain the transition from symbolic AI to learning-based systems.",
        "Connect modern AI systems with earlier AI approaches."
      ]
    },
    {
      id: "aiml-module1-practice-04",
      title: "AI Capabilities and Applications",
      description: "Identify appropriate AI capabilities and connect them to real-world problems.",
      tasks: [
        "Identify capabilities from application scenarios.",
        "Analyze AI applications across industries.",
        "Map problems to capabilities and techniques."
      ]
    },
    {
      id: "aiml-module1-practice-05",
      title: "Python AI Computing",
      description: "Use Python to implement basic decision logic and structured fact representation.",
      tasks: [
        "Write Python decision programs.",
        "Create reusable functions.",
        "Represent AI facts using dictionaries."
      ]
    },
    {
      id: "aiml-module1-practice-06",
      title: "Rule-Based Intelligence",
      description: "Build and reason with explicit rules using Python.",
      tasks: [
        "Create a rule set.",
        "Implement a rule engine.",
        "Use rule priorities.",
        "Implement forward chaining.",
        "Generate explanations."
      ]
    },
    {
      id: "aiml-module1-practice-07",
      title: "Responsible AI",
      description: "Analyze basic fairness, privacy, explainability, and human-oversight concerns.",
      tasks: [
        "Identify AI risks.",
        "Suggest mitigation strategies.",
        "Explain the importance of human oversight."
      ]
    },
    {
      id: "aiml-module1-practice-08",
      title: "Integrated AI Reasoning",
      description: "Design an end-to-end intelligent solution for a practical problem.",
      tasks: [
        "Define an AI problem.",
        "Select an appropriate approach.",
        "Design the input-to-output pipeline.",
        "Define evaluation and oversight."
      ]
    },
    {
      id: "aiml-module1-practice-09",
      title: "Coding Challenge",
      description: "Build the AI Decision Assistant using structured facts, rules, rule matching, priorities, and explanations.",
      tasks: [
        "Implement input validation.",
        "Represent facts.",
        "Create a knowledge base.",
        "Implement rule matching.",
        "Resolve conflicting rules.",
        "Return decisions and explanations.",
        "Test multiple scenarios."
      ]
    }
  ],

  quickCheck: [
    {
      question: "What is the primary purpose of a rule-based intelligent system?",
      options: [
        "To learn neural-network parameters",
        "To apply explicit knowledge and rules to current facts",
        "To generate random predictions",
        "To replace all software logic"
      ],
      answer: 1
    },
    {
      question: "Which component stores the current information available to a rule engine?",
      options: [
        "Working memory or facts",
        "Compiler",
        "Optimizer",
        "Visualization layer"
      ],
      answer: 0
    },
    {
      question: "Which sequence represents forward chaining?",
      options: [
        "Goal → Facts → Rules",
        "Facts → Rules → Conclusions",
        "Model → Dataset → Facts",
        "Output → Input → Rules"
      ],
      answer: 1
    },
    {
      question: "What is one major advantage of rule-based AI?",
      options: [
        "It automatically learns from every new input",
        "Its decision logic can be explicit and explainable",
        "It never requires maintenance",
        "It always generalizes to unknown situations"
      ],
      answer: 1
    },
    {
      question: "Which approach is generally appropriate when patterns must be learned from historical data?",
      options: [
        "Machine Learning",
        "Only fixed rules",
        "Manual sorting",
        "Static output formatting"
      ],
      answer: 0
    },
    {
      question: "Why is input validation important?",
      options: [
        "It guarantees perfect AI predictions",
        "It prevents invalid or unexpected inputs from producing unreliable behavior",
        "It automatically trains a model",
        "It removes the need for testing"
      ],
      answer: 1
    },
    {
      question: "What should happen when multiple rules match?",
      options: [
        "The system should always select the first rule without consideration",
        "The system should use a defined conflict-resolution strategy",
        "The system should delete all matching rules",
        "The system should ignore all facts"
      ],
      answer: 1
    },
    {
      question: "Which sequence best represents an AI problem-solving process?",
      options: [
        "Problem → Input → Representation → Approach → Decision → Evaluation",
        "Output → Problem → Random Rule → Deployment",
        "Code → Delete Data → Output",
        "Model → Problem → Input → Ignore Evaluation"
      ],
      answer: 0
    }
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson10",
    next: "/lesson/aiml/module1/project",
    backToModule: "/lesson/aiml/module1/about"
  }
};