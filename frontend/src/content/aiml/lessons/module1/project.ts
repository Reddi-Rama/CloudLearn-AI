export const project = {
  id: "aiml-module1-project",
  title: "AI Decision Assistant",
  moduleTitle: "Introduction to Artificial Intelligence",
  courseId: "aiml",
  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",

    previous: {
      label: "Module 01 Practice",
      href: "/lesson/aiml/module1/practice"
    },

    next: {
      label: "Module 02",
      href: "/lesson/aiml/module2/about"
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
# Module 01 Project — AI Decision Assistant

## Project Overview

In this project, you will build a practical rule-based intelligent system that receives a situation, analyzes the available information, applies a knowledge base of rules, and produces an explainable decision.

The purpose of this project is to bring together the core concepts from Module 01:

\`\`\`
Artificial Intelligence
        ↓
Problem Definition
        ↓
Problem Representation
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
Evaluation
\`\`\`

You are not simply creating a collection of if-else statements.

You are designing a small intelligent system.

---

# 1. Project Title

## AI Decision Assistant

Build a Python-based rule-driven decision assistant that analyzes a task situation and recommends an appropriate action.

The system should use explicit knowledge represented through rules.

---

# 2. Project Objective

The objective is to build an intelligent decision-support application that can:

- Accept structured user input
- Validate the input
- Represent the current situation as facts
- Store decision knowledge as rules
- Match rules against facts
- Resolve multiple matching rules
- Produce a decision
- Explain why the decision was produced
- Handle unknown situations
- Evaluate the behavior of the system using test cases

The project should demonstrate the complete lifecycle of a simple rule-based AI system.

---

# 3. Problem Statement

People often face multiple tasks with different levels of:

- Urgency
- Available time
- Difficulty

A simple decision assistant can use these factors to recommend what the user should do next.

For example:

\`\`\`
Urgency = High
Available Time = 1 hour
Difficulty = High
\`\`\`

The system may determine:

\`\`\`
Decision:
Break the task into smaller steps.

Reason:
The task is urgent, difficult, and there is limited time.
\`\`\`

The system must determine the recommendation from its knowledge base rather than using one hard-coded response.

---

# 4. Core AI Concept

The project is based on:

## Rule-Based Reasoning

The basic structure is:

\`\`\`
IF condition
THEN action
\`\`\`

Example:

\`\`\`
IF urgency == "high"
AND available_time <= 1
AND difficulty == "high"

THEN

"Break the task into smaller steps"
\`\`\`

The system evaluates the current facts against the rules.

---

# 5. Project Architecture

Your application should follow this architecture:

\`\`\`
                 ┌────────────────────┐
                 │     User Input     │
                 └─────────┬──────────┘
                           ↓
                 ┌────────────────────┐
                 │  Input Validation  │
                 └─────────┬──────────┘
                           ↓
                 ┌────────────────────┐
                 │  Fact Generation   │
                 └─────────┬──────────┘
                           ↓
                 ┌────────────────────┐
                 │   Knowledge Base   │
                 │      + Rules       │
                 └─────────┬──────────┘
                           ↓
                 ┌────────────────────┐
                 │    Rule Engine     │
                 └─────────┬──────────┘
                           ↓
                 ┌────────────────────┐
                 │ Conflict Resolution│
                 └─────────┬──────────┘
                           ↓
                 ┌────────────────────┐
                 │     Decision       │
                 └─────────┬──────────┘
                           ↓
                 ┌────────────────────┐
                 │    Explanation     │
                 └─────────┬──────────┘
                           ↓
                 ┌────────────────────┐
                 │      Output        │
                 └────────────────────┘
\`\`\`

---

# 6. Functional Requirements

Your system must contain the following components.

## Requirement 1 — User Input

The system should collect:

\`\`\`
Urgency
Available Time
Difficulty
\`\`\`

Suggested values:

### Urgency

\`\`\`
low
medium
high
\`\`\`

### Difficulty

\`\`\`
low
medium
high
\`\`\`

### Available Time

A non-negative numeric value representing hours.

Example:

\`\`\`
0.5
1
2
4
8
\`\`\`

---

# 7. Requirement 2 — Input Validation

The system must validate user input.

Examples of invalid inputs:

\`\`\`
urgency = "extreme"
difficulty = "very hard"
available_time = -2
available_time = "abc"
\`\`\`

The system should not crash.

Instead, it should provide a useful message.

Example:

\`\`\`
Invalid urgency.
Choose one of:
low, medium, high
\`\`\`

---

# 8. Requirement 3 — Fact Representation

After validation, represent the current situation as structured facts.

Example:

\`\`\`
facts = {
    "urgency": "high",
    "available_time": 1,
    "difficulty": "high"
}
\`\`\`

These facts become the input to the reasoning engine.

---

# 9. Requirement 4 — Knowledge Base

Create a separate collection of rules.

Each rule should contain:

- Rule name
- Priority
- Condition
- Action
- Reason

Suggested structure:

\`\`\`
{
    "name": "Urgent Difficult Task",
    "priority": 5,
    "condition": ...,
    "action": "Break the task into smaller steps",
    "reason": "The task is urgent, difficult, and time is limited."
}
\`\`\`

The knowledge base should be separate from the main program logic.

---

# 10. Minimum Rule Set

Your system must contain at least five meaningful rules.

Use the following rules as a starting point.

## Rule 1 — Urgent and Difficult

Condition:

\`\`\`
urgency == "high"
AND available_time <= 1
AND difficulty == "high"
\`\`\`

Action:

\`\`\`
Break the task into smaller steps
\`\`\`

Reason:

\`\`\`
The task is urgent, difficult, and there is limited time.
\`\`\`

---

## Rule 2 — Urgent with Enough Time

Condition:

\`\`\`
urgency == "high"
AND available_time > 1
\`\`\`

Action:

\`\`\`
Start with the highest-priority part
\`\`\`

Reason:

\`\`\`
The task is urgent and sufficient time is available.
\`\`\`

---

## Rule 3 — Low Urgency with Enough Time

Condition:

\`\`\`
urgency == "low"
AND available_time >= 2
\`\`\`

Action:

\`\`\`
Plan the task before starting
\`\`\`

Reason:

\`\`\`
The task is not urgent and enough time is available for planning.
\`\`\`

---

## Rule 4 — Easy Task

Condition:

\`\`\`
difficulty == "low"
AND available_time > 0
\`\`\`

Action:

\`\`\`
Complete the task directly
\`\`\`

Reason:

\`\`\`
The task has low difficulty and can be completed directly.
\`\`\`

---

## Rule 5 — Difficult Task with Limited Time

Condition:

\`\`\`
difficulty == "high"
AND available_time <= 2
\`\`\`

Action:

\`\`\`
Divide the task into smaller manageable parts
\`\`\`

Reason:

\`\`\`
The task is difficult and the available time is limited.
\`\`\`

---

# 11. Additional Rules

To make the project more meaningful, add additional rules.

Possible examples:

## Rule 6

\`\`\`
IF urgency == "medium"
AND difficulty == "medium"
AND available_time >= 2

THEN

"Create a short plan and begin the task"
\`\`\`

## Rule 7

\`\`\`
IF urgency == "low"
AND available_time < 1

THEN

"Schedule the task for a suitable time"
\`\`\`

## Rule 8

\`\`\`
IF urgency == "high"
AND available_time < 0.5

THEN

"Identify the single most important action"
\`\`\`

Do not add rules only to increase the count.

Every rule should represent meaningful decision knowledge.

---

# 12. Requirement 5 — Rule Matching

The system must evaluate every relevant rule.

Conceptually:

\`\`\`
Current Facts
      ↓
Check Rule 1
      ↓
Check Rule 2
      ↓
Check Rule 3
      ↓
...
      ↓
Matching Rules
\`\`\`

For example:

\`\`\`
facts = {
    "urgency": "high",
    "available_time": 1,
    "difficulty": "high"
}
\`\`\`

Possible matching rules:

\`\`\`
Urgent and Difficult
Difficult Task with Limited Time
\`\`\`

Both rules may match.

Therefore, the system must continue to the next stage.

---

# 13. Requirement 6 — Conflict Resolution

When multiple rules match, the system must select an appropriate rule.

Use priority.

Example:

\`\`\`
Rule A
priority = 3

Rule B
priority = 5
\`\`\`

If both rules match:

\`\`\`
Rule B
\`\`\`

should be selected.

The rule with the highest priority wins.

This introduces an important AI reasoning concept:

\`\`\`
Multiple Valid Rules
        ↓
Conflict Resolution
        ↓
Selected Rule
\`\`\`

---

# 14. Requirement 7 — Decision

After selecting a rule, the system should produce the corresponding action.

Example:

\`\`\`
Decision:
Break the task into smaller steps
\`\`\`

The decision should come from the selected rule.

---

# 15. Requirement 8 — Explanation

The system must explain its decision.

The output should contain:

\`\`\`
Decision
Reason
Rule Used
\`\`\`

Example:

\`\`\`
Decision:
Break the task into smaller steps

Reason:
The task is urgent, difficult, and there is limited time.

Rule Used:
Urgent and Difficult
\`\`\`

This makes the system explainable.

---

# 16. Requirement 9 — Unknown Situation

Not every situation must match a rule.

For example:

\`\`\`
urgency = "medium"
available_time = 1.3
difficulty = "medium"
\`\`\`

If no rule matches, the system should not produce a random recommendation.

Instead:

\`\`\`
Decision:
No specific recommendation available.

Reason:
The current situation does not match any defined rule.

Suggested Action:
Review the task requirements and make a manual decision.
\`\`\`

This is safer and more transparent.

---

# 17. Requirement 10 — Testing

The system must be tested with multiple scenarios.

At minimum, create five test cases.

Example:

## Test Case 1

\`\`\`
Urgency = high
Available Time = 1
Difficulty = high
\`\`\`

Expected:

\`\`\`
Break the task into smaller steps
\`\`\`

---

## Test Case 2

\`\`\`
Urgency = high
Available Time = 4
Difficulty = medium
\`\`\`

Expected:

\`\`\`
Start with the highest-priority part
\`\`\`

---

## Test Case 3

\`\`\`
Urgency = low
Available Time = 5
Difficulty = medium
\`\`\`

Expected:

\`\`\`
Plan the task before starting
\`\`\`

---

## Test Case 4

\`\`\`
Urgency = medium
Available Time = 3
Difficulty = low
\`\`\`

Expected:

\`\`\`
Complete the task directly
\`\`\`

---

## Test Case 5

\`\`\`
Urgency = medium
Available Time = 1.3
Difficulty = medium
\`\`\`

Expected:

\`\`\`
No specific recommendation available
\`\`\`

The exact output may vary depending on your final rule set.

---

# 18. Suggested Project Structure

Organize the Python project into logical components.

A simple version can use:

\`\`\`
ai_decision_assistant/
│
├── main.py
├── rules.py
├── engine.py
├── validation.py
└── tests.py
\`\`\`

## main.py

Responsible for:

- User interaction
- Collecting input
- Calling validation
- Calling the rule engine
- Displaying the result

## rules.py

Responsible for:

- Knowledge base
- Rule definitions
- Rule priorities
- Rule actions
- Rule explanations

## engine.py

Responsible for:

- Rule matching
- Conflict resolution
- Selecting the rule
- Producing the result

## validation.py

Responsible for:

- Input validation
- Type checking
- Allowed-value checking
- Invalid-input handling

## tests.py

Responsible for:

- Automated test cases
- Checking expected behavior

For a beginner implementation, you may initially place everything in one file and refactor it into multiple files after the logic works.

---

# 19. Suggested Core Function

Your rule engine can follow this conceptual structure:

\`\`\`
def evaluate_rules(facts, rules):
    matches = []

    for rule in rules:
        if rule["condition"](facts):
            matches.append(rule)

    if not matches:
        return {
            "decision": "No specific recommendation available.",
            "reason": "No defined rule matched the current situation.",
            "rule": None
        }

    matches.sort(
        key=lambda rule: rule.get("priority", 0),
        reverse=True
    )

    selected = matches[0]

    return {
        "decision": selected["action"],
        "reason": selected["reason"],
        "rule": selected["name"]
    }
\`\`\`

This is a starting point.

You should adapt and improve it rather than simply copying it.

---

# 20. Suggested Validation Function

A validation layer can follow this structure:

\`\`\`
def validate_input(urgency, available_time, difficulty):
    valid_urgency = {"low", "medium", "high"}
    valid_difficulty = {"low", "medium", "high"}

    if urgency not in valid_urgency:
        return False, "Invalid urgency."

    if difficulty not in valid_difficulty:
        return False, "Invalid difficulty."

    if available_time < 0:
        return False, "Available time cannot be negative."

    return True, "Input is valid."
\`\`\`

Improve the implementation so that non-numeric time values are handled safely.

---

# 21. Suggested Output Format

Your application should produce a clear result.

Example:

\`\`\`
========================================
       AI DECISION ASSISTANT
========================================

Input
----------------------------------------
Urgency        : High
Available Time : 1 hour
Difficulty     : High

Decision
----------------------------------------
Break the task into smaller steps

Reason
----------------------------------------
The task is urgent, difficult,
and there is limited time.

Rule Used
----------------------------------------
Urgent and Difficult

========================================
\`\`\`

The interface does not need to be complex.

The intelligence and reasoning architecture are the main focus.

---

# 22. Optional Reasoning Trace

For an advanced version, display the rules evaluated by the system.

Example:

\`\`\`
Reasoning Trace
----------------------------------------

Checking: Urgent and Difficult
Result: MATCH

Checking: Urgent with Enough Time
Result: NO MATCH

Checking: Low Urgency with Enough Time
Result: NO MATCH

Checking: Easy Task
Result: NO MATCH

Checking: Difficult Task with Limited Time
Result: MATCH

Selecting highest-priority rule...

Selected:
Urgent and Difficult
\`\`\`

This makes the internal reasoning process easier to inspect.

---

# 23. Data Flow

The complete data flow should look like:

\`\`\`
User
 ↓
Input
 ↓
Validation
 ↓
Facts
 ↓
Knowledge Base
 ↓
Rule Matching
 ↓
Matching Rules
 ↓
Priority Selection
 ↓
Decision
 ↓
Explanation
 ↓
User
\`\`\`

Every stage should have a clear purpose.

---

# 24. Project Development Steps

## Step 1 — Define the Problem

Write a short description of what the assistant solves.

---

## Step 2 — Define Inputs

Identify:

\`\`\`
urgency
available_time
difficulty
\`\`\`

---

## Step 3 — Define Possible Values

For example:

\`\`\`
urgency:
low
medium
high

difficulty:
low
medium
high
\`\`\`

---

## Step 4 — Create Facts

Convert the validated input into a structured representation.

---

## Step 5 — Design the Knowledge Base

Create meaningful rules.

Start with five rules.

Then add more if necessary.

---

## Step 6 — Implement the Rule Engine

The engine should:

- Iterate through rules
- Evaluate conditions
- Store matches
- Resolve conflicts
- Select a rule

---

## Step 7 — Add Explanations

Return:

\`\`\`
Decision
Reason
Rule Used
\`\`\`

---

## Step 8 — Handle Unknown Cases

Make sure the system does not fail when no rule matches.

---

## Step 9 — Test the System

Create multiple test scenarios.

Test both valid and invalid inputs.

---

## Step 10 — Refactor

Separate:

\`\`\`
Input
Validation
Knowledge
Reasoning
Output
Testing
\`\`\`

into clean components.

---

# 25. Testing Requirements

Your testing should cover several categories.

## Normal Cases

Test common combinations of inputs.

## Boundary Cases

Test values such as:

\`\`\`
available_time = 0
available_time = 1
available_time = 2
\`\`\`

## Invalid Cases

Test:

\`\`\`
urgency = "extreme"
difficulty = "unknown"
available_time = -1
available_time = "abc"
\`\`\`

## No-Match Cases

Provide a valid situation that does not match a specific rule.

## Multiple-Match Cases

Provide an input that activates multiple rules and verify that priority works correctly.

---

# 26. Evaluation Criteria

Your project will be evaluated based on the quality of the intelligent-system design.

## Problem Understanding

The problem should be clearly defined.

## Input Design

Inputs should be relevant to the decision.

## Knowledge Representation

Rules should represent meaningful knowledge.

## Rule Engine

The system should correctly evaluate conditions.

## Conflict Resolution

Multiple matching rules should be handled correctly.

## Explainability

The system should explain its decision.

## Validation

Invalid inputs should be handled safely.

## Testing

The system should be tested with different scenarios.

## Code Quality

The implementation should be readable and logically organized.

## AI Understanding

The project should demonstrate actual understanding of rule-based reasoning rather than only basic conditional programming.

---

# 27. Minimum Deliverables

Your project submission should contain:

### 1. Source Code

Complete Python implementation.

### 2. Rule Knowledge Base

Clearly defined rules.

### 3. Test Cases

At least five meaningful test scenarios.

### 4. Output Demonstration

Show example inputs and outputs.

### 5. Project Explanation

Explain:

- Problem
- Inputs
- Rules
- Rule engine
- Conflict resolution
- Decision
- Explanation
- Limitations

### 6. README

Include:

- Project title
- Objective
- Features
- Architecture
- How to run
- Example usage
- Limitations
- Future improvements

---

# 28. Project Report Structure

Use the following structure for your project documentation.

## 1. Introduction

Explain the purpose of the AI Decision Assistant.

## 2. Problem Statement

Describe the decision problem.

## 3. Objectives

List what the system should accomplish.

## 4. System Architecture

Show the input-to-output architecture.

## 5. Knowledge Representation

Explain facts and rules.

## 6. Rule Engine

Explain how rules are evaluated.

## 7. Conflict Resolution

Explain priority handling.

## 8. Implementation

Explain the Python components.

## 9. Testing

Show different test scenarios.

## 10. Results

Explain the observed behavior.

## 11. Limitations

Discuss limitations of rule-based reasoning.

## 12. Future Improvements

Describe how the system could evolve.

## 13. Conclusion

Summarize what was achieved.

---

# 29. Limitations to Discuss

Your project should explicitly recognize its limitations.

## Fixed Knowledge

The system depends on manually defined rules.

## No Learning

The system does not learn new rules automatically.

## Rule Explosion

Adding many conditions can create a large number of rules.

## Limited Generalization

The system may not handle situations that were not considered during rule design.

## Maintenance

Rules must be updated manually when requirements change.

## Simplified Decision Model

The project considers only a small number of factors.

These limitations are important because understanding when an AI approach fails is part of AI engineering.

---

# 30. Future Improvements

After completing the basic project, you can propose improvements such as:

### More Inputs

Add:

\`\`\`
task type
deadline
importance
energy level
dependencies
\`\`\`

### Larger Knowledge Base

Add more domain-specific rules.

### User Interface

Build a web interface for entering the situation.

### Database

Store decisions and user interactions.

### Machine Learning

Replace or supplement some explicit rules with a learned model.

### Hybrid AI

Combine:

\`\`\`
Rules
+
Machine Learning
\`\`\`

### Explanation System

Generate more detailed reasoning traces.

### Monitoring

Track incorrect or unexpected decisions.

---

# 31. AI Engineering Perspective

The project demonstrates an important principle:

> The most advanced AI technique is not always the best solution.

A rule-based approach is appropriate when:

- The rules are clear
- The domain is well-defined
- Decisions need to be transparent
- Policies are explicit
- The number of rules is manageable

Machine learning becomes more attractive when:

- Patterns are difficult to manually specify
- Sufficient data is available
- The relationship between inputs and outputs is complex
- The system needs to generalize from examples

This distinction will become increasingly important as you progress through Machine Learning and later AI courses.

---

# 32. Extension: Hybrid Decision Assistant

After completing the rule-based version, design a conceptual future architecture:

\`\`\`
User Input
     ↓
Validation
     ↓
Rule-Based Checks
     ↓
Machine Learning Model
     ↓
Decision Layer
     ↓
Rule-Based Safety / Policy Checks
     ↓
Explanation
     ↓
Output
\`\`\`

You do not need to implement machine learning for this project.

The purpose is to understand how different AI techniques can work together.

---

# 33. Final Project Challenge

Once the required implementation is complete, improve your system so that it supports:

- At least 8 rules
- Rule priorities
- Multiple matching rules
- Input validation
- No-match handling
- Explanation generation
- Reasoning trace
- Automated tests
- Clean separation of knowledge and reasoning

Then test the assistant using at least ten different scenarios.

---

# 34. Final Questions

Before submitting the project, make sure you can answer:

1. What problem does the AI Decision Assistant solve?

2. What are the inputs?

3. How are inputs represented as facts?

4. What is the knowledge base?

5. What is a rule?

6. How does the rule engine work?

7. What happens when multiple rules match?

8. How is priority used?

9. How does the system explain its decision?

10. What happens when no rule matches?

11. How are invalid inputs handled?

12. Why is this considered a simple intelligent system?

13. Why is this not machine learning?

14. What are the limitations of this approach?

15. How could the system become a hybrid AI application?

---

# 35. Expected Learning Outcome

After completing this project, you should be able to move beyond describing AI concepts and actually construct a small intelligent application.

You should understand the complete process:

\`\`\`
Identify Problem
       ↓
Define Inputs
       ↓
Represent Facts
       ↓
Represent Knowledge
       ↓
Create Rules
       ↓
Build Rule Engine
       ↓
Match Rules
       ↓
Resolve Conflicts
       ↓
Produce Decision
       ↓
Explain Decision
       ↓
Test System
       ↓
Analyze Limitations
\`\`\`

This project completes the practical portion of:

## Module 01 — Introduction to Artificial Intelligence

The next module will move from explicit rule-based reasoning toward formal AI problem solving, state-space representation, search trees, graph search, heuristics, and A* search.
`,

  requirements: [
    {
      id: "requirement-01",
      title: "User Input",
      description: "Collect urgency, available time, and difficulty."
    },
    {
      id: "requirement-02",
      title: "Input Validation",
      description: "Validate values and safely handle invalid input."
    },
    {
      id: "requirement-03",
      title: "Fact Representation",
      description: "Represent the current situation as structured facts."
    },
    {
      id: "requirement-04",
      title: "Knowledge Base",
      description: "Create a separate collection of meaningful rules."
    },
    {
      id: "requirement-05",
      title: "Rule Matching",
      description: "Evaluate the current facts against the available rules."
    },
    {
      id: "requirement-06",
      title: "Conflict Resolution",
      description: "Use rule priority when multiple rules match."
    },
    {
      id: "requirement-07",
      title: "Decision",
      description: "Return the action associated with the selected rule."
    },
    {
      id: "requirement-08",
      title: "Explanation",
      description: "Return the decision, reason, and rule used."
    },
    {
      id: "requirement-09",
      title: "Unknown Situation",
      description: "Handle situations where no defined rule matches."
    },
    {
      id: "requirement-10",
      title: "Testing",
      description: "Test normal, boundary, invalid, no-match, and multiple-match scenarios."
    }
  ],

  milestones: [
    {
      id: "milestone-01",
      title: "Problem Definition",
      description: "Define the decision problem and project objective."
    },
    {
      id: "milestone-02",
      title: "Input and Facts",
      description: "Implement validated inputs and structured facts."
    },
    {
      id: "milestone-03",
      title: "Knowledge Base",
      description: "Create and organize the rule set."
    },
    {
      id: "milestone-04",
      title: "Rule Engine",
      description: "Implement rule matching and conflict resolution."
    },
    {
      id: "milestone-05",
      title: "Explainable Output",
      description: "Produce decisions with reasons and rule information."
    },
    {
      id: "milestone-06",
      title: "Testing",
      description: "Test multiple valid, invalid, boundary, and no-match scenarios."
    },
    {
      id: "milestone-07",
      title: "Refinement",
      description: "Improve code organization, readability, and reasoning trace."
    }
  ],

  deliverables: [
    "Complete Python source code",
    "Separate or clearly organized rule knowledge base",
    "At least five meaningful rules",
    "Input validation",
    "Rule matching",
    "Conflict resolution",
    "Explainable decisions",
    "At least five test scenarios",
    "Project documentation",
    "Example outputs"
  ],

  evaluation: [
    {
      criterion: "Problem Understanding",
      description: "The problem and objective are clearly defined."
    },
    {
      criterion: "Input Design",
      description: "Inputs are relevant and properly validated."
    },
    {
      criterion: "Knowledge Representation",
      description: "Rules represent meaningful decision knowledge."
    },
    {
      criterion: "Rule Engine",
      description: "Rules are evaluated correctly against current facts."
    },
    {
      criterion: "Conflict Resolution",
      description: "Multiple matching rules are handled using a defined priority strategy."
    },
    {
      criterion: "Explainability",
      description: "The system provides a useful explanation for its decision."
    },
    {
      criterion: "Testing",
      description: "The system is tested across different situations."
    },
    {
      criterion: "Code Quality",
      description: "The implementation is readable, organized, and maintainable."
    },
    {
      criterion: "AI Understanding",
      description: "The project demonstrates understanding of rule-based intelligent reasoning."
    }
  ],

  practice: [
    {
      id: "aiml-module1-project-practice-01",
      title: "Design the Knowledge Base",
      description: "Create at least five meaningful rules and assign appropriate priorities."
    },
    {
      id: "aiml-module1-project-practice-02",
      title: "Implement the Rule Engine",
      description: "Build the rule matching and conflict-resolution logic."
    },
    {
      id: "aiml-module1-project-practice-03",
      title: "Add Explainability",
      description: "Return the selected decision, reason, and rule name."
    },
    {
      id: "aiml-module1-project-practice-04",
      title: "Test Multiple Scenarios",
      description: "Test normal, invalid, boundary, multiple-match, and no-match situations."
    },
    {
      id: "aiml-module1-project-practice-05",
      title: "Add Reasoning Trace",
      description: "Show which rules were checked and which rules matched."
    }
  ],

  quickCheck: [
    {
      question: "What is the primary AI approach used in this project?",
      options: [
        "Deep learning",
        "Rule-based reasoning",
        "Reinforcement learning",
        "Computer vision"
      ],
      answer: 1
    },
    {
      question: "What represents the current situation given to the rule engine?",
      options: [
        "Facts",
        "Optimizer",
        "Neural layers",
        "Compiler instructions"
      ],
      answer: 0
    },
    {
      question: "Why are priorities used in the project?",
      options: [
        "To train the system",
        "To resolve multiple matching rules",
        "To collect more data",
        "To generate images"
      ],
      answer: 1
    },
    {
      question: "What should the system do when no rule matches?",
      options: [
        "Return a random decision",
        "Crash",
        "Provide a no-match response",
        "Delete the facts"
      ],
      answer: 2
    },
    {
      question: "Which information should an explainable result contain?",
      options: [
        "Only the final decision",
        "Decision, reason, and rule used",
        "Only the input",
        "Only the rule priority"
      ],
      answer: 1
    },
    {
      question: "Does the project automatically learn new rules from data?",
      options: [
        "Yes",
        "No"
      ],
      answer: 1
    }
  ],

  completion: {
    previous: "/lesson/aiml/module1/practice",
    next: "/lesson/aiml/module2/about",
    backToModule: "/lesson/aiml/module1/about"
  }
};