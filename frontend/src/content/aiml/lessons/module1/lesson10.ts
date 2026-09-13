export const lesson10 = {
  id: "aiml-module1-lesson10",
  lessonNumber: 10,
  title: "Building a Simple Rule-Based Intelligent System",
  moduleTitle: "Introduction to Artificial Intelligence",
  courseId: "aiml",
  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",
    currentLesson: 10,
    totalLessons: 10,

    previous: {
      label: "Lesson 09",
      href: "/lesson/aiml/module1/lesson9"
    },

    next: {
      label: "Module 01 Practice",
      href: "/lesson/aiml/module1/practice"
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
# Lesson 10 — Building a Simple Rule-Based Intelligent System

## What You Will Learn

In this lesson, you will move from understanding AI problem-solving approaches to actually building a small intelligent system.

You will learn:

- What makes a software system behave intelligently
- The architecture of a rule-based intelligent system
- Facts, rules, conditions, actions, and decisions
- Knowledge bases and rule engines
- How rule matching works
- Forward chaining
- The basic idea of backward chaining
- Rule priority and conflict resolution
- How to handle unknown and invalid inputs
- How to make a rule-based system explain its decisions
- How to implement a rule-based intelligent system in Python
- How to structure rules so that the system can be extended
- The strengths and limitations of rule-based AI
- How rule-based systems connect to modern hybrid AI systems

The goal is not only to write Python code.

The goal is to understand how an AI system can represent knowledge, reason over that knowledge, produce a decision, and explain why that decision was made.

---

# 1. From AI Concepts to an Intelligent System

In the previous lessons, you learned that Artificial Intelligence is not one single algorithm.

AI systems can use:

- Rules
- Search
- Optimization
- Machine Learning
- Probability
- Knowledge representation
- Generative models
- Hybrid approaches

A rule-based system is one of the simplest ways to build an AI system.

Instead of learning rules from data, we explicitly provide the knowledge and decision logic.

A simple rule can look like:

\`\`\`
IF condition is true
THEN perform an action
\`\`\`

For example:

\`\`\`
IF temperature > 35
THEN recommendation = "Drink more water"
\`\`\`

The system checks the condition and produces the corresponding action.

This is simple, but it introduces an important AI idea:

> The system uses represented knowledge to make a decision.

---

# 2. What Makes a System "Intelligent"?

A normal program may simply execute a fixed sequence of instructions.

An intelligent system generally has to do more than blindly execute instructions.

It should be able to:

1. Receive information
2. Represent relevant information
3. Apply knowledge or reasoning
4. Produce a decision or prediction
5. Take an action or recommendation
6. Explain or evaluate the result when appropriate

A simple intelligent-system flow is:

\`\`\`
Input
  ↓
Representation
  ↓
Knowledge
  ↓
Reasoning
  ↓
Decision
  ↓
Action
  ↓
Feedback
\`\`\`

For a rule-based system:

\`\`\`
User Input
    ↓
Facts
    ↓
Rule Matching
    ↓
Rule Engine
    ↓
Decision
    ↓
Response
\`\`\`

This is one of the simplest AI architectures you can build.

---

# 3. Rule-Based Artificial Intelligence

A rule-based AI system represents knowledge using explicit rules.

A rule normally contains:

- Conditions
- An action or conclusion

General structure:

\`\`\`
IF condition
THEN action
\`\`\`

Example:

\`\`\`
IF battery_level < 20
THEN action = "Charge the device"
\`\`\`

Another example:

\`\`\`
IF network_status == "offline"
THEN action = "Check network connection"
\`\`\`

The system does not learn these rules automatically.

A developer, domain expert, or knowledge engineer defines them.

---

# 4. Facts

A fact is a piece of information currently known by the system.

For example:

\`\`\`
temperature = 38
weather = "hot"
battery_level = 15
network_status = "offline"
\`\`\`

Facts represent the current state of the problem.

For example:

\`\`\`
battery_level = 15
\`\`\`

can be interpreted as:

"The current battery level is 15%."

A rule can use this fact to make a decision.

---

# 5. Conditions

A condition is a logical requirement that must be satisfied before a rule can be activated.

Example:

\`\`\`
battery_level < 20
\`\`\`

If:

\`\`\`
battery_level = 15
\`\`\`

then:

\`\`\`
15 < 20
\`\`\`

is true.

Therefore, the corresponding rule can be triggered.

Conditions can use:

- Equality
- Inequality
- Greater than
- Less than
- Logical AND
- Logical OR
- NOT

Example:

\`\`\`
IF battery_level < 20 AND charger_available == True
THEN action = "Charge the device"
\`\`\`

Both conditions must be satisfied.

---

# 6. Actions and Conclusions

When a rule matches, the system produces an action or conclusion.

Example:

\`\`\`
IF temperature > 35
THEN recommendation = "Stay hydrated"
\`\`\`

Here:

- Condition → temperature > 35
- Action → Stay hydrated

The result can be:

- A recommendation
- A classification
- A warning
- A decision
- A command
- A diagnosis-like conclusion
- A next step

The output depends on the problem being solved.

---

# 7. Knowledge Base

A collection of rules and relevant domain knowledge is commonly called a knowledge base.

For example:

\`\`\`
Rule 1:
IF battery_level < 20
THEN action = "Charge the device"

Rule 2:
IF battery_level >= 20 AND battery_level <= 80
THEN action = "Battery level is normal"

Rule 3:
IF battery_level > 80
THEN action = "Battery level is high"
\`\`\`

The knowledge base represents what the system knows about the decision problem.

A larger system may contain hundreds or thousands of rules.

---

# 8. Rule Engine

The rule engine is the part of the system responsible for applying rules to the current facts.

Conceptually:

\`\`\`
Facts + Rules
     ↓
Rule Engine
     ↓
Matched Rules
     ↓
Decision
\`\`\`

For example:

Facts:

\`\`\`
temperature = 38
\`\`\`

Rule:

\`\`\`
IF temperature > 35
THEN recommendation = "Stay hydrated"
\`\`\`

The rule engine evaluates:

\`\`\`
38 > 35
\`\`\`

The condition is true.

Therefore:

\`\`\`
recommendation = "Stay hydrated"
\`\`\`

---

# 9. Basic Rule-Based Architecture

A simple rule-based intelligent system can contain five important components.

## 9.1 Input

Receives information from the user, sensors, files, or another application.

Example:

\`\`\`
temperature = 38
\`\`\`

## 9.2 Working Memory

Stores the current facts.

Example:

\`\`\`
{
    "temperature": 38,
    "weather": "hot"
}
\`\`\`

## 9.3 Knowledge Base

Contains the rules.

Example:

\`\`\`
IF temperature > 35
THEN recommendation = "Stay hydrated"
\`\`\`

## 9.4 Rule Engine

Matches facts against rules.

## 9.5 Output

Returns the decision or recommendation.

Complete architecture:

\`\`\`
Input
  ↓
Working Memory
  ↓
Knowledge Base + Rule Engine
  ↓
Decision
  ↓
Output
\`\`\`

---

# 10. A First Rule-Based Example

Consider a simple battery assistant.

Input:

\`\`\`
battery_level = 15
\`\`\`

Rule:

\`\`\`
IF battery_level < 20
THEN "Charge the device"
\`\`\`

Reasoning:

\`\`\`
battery_level = 15

15 < 20
True

Therefore:
"Charge the device"
\`\`\`

This is deterministic reasoning.

The same input and same rules produce the same result.

---

# 11. Implementing the First Rule in Python

A simple implementation can use an if statement.

\`\`\`
battery_level = 15

if battery_level < 20:
    recommendation = "Charge the device"
else:
    recommendation = "Battery level is sufficient"

print(recommendation)
\`\`\`

Output:

\`\`\`
Charge the device
\`\`\`

This is already a rule.

However, writing many independent if statements becomes difficult to maintain.

That is why we should learn how to represent rules separately from the reasoning engine.

---

# 12. Representing Rules as Data

Instead of writing every rule directly inside the decision logic, we can represent rules using dictionaries.

Example:

\`\`\`
rules = [
    {
        "condition": "low_battery",
        "action": "Charge the device"
    },
    {
        "condition": "normal_battery",
        "action": "Battery level is sufficient"
    }
]
\`\`\`

The rules are now represented as data.

This separation is useful because:

\`\`\`
Knowledge
    ≠
Reasoning Engine
\`\`\`

The knowledge describes what the system knows.

The reasoning engine determines how that knowledge is applied.

---

# 13. Building a Simple Rule Engine

Consider this example.

\`\`\`
def check_battery(battery_level):
    if battery_level < 20:
        return "Charge the device"

    if battery_level <= 80:
        return "Battery level is normal"

    return "Battery level is high"


battery = 15

result = check_battery(battery)

print(result)
\`\`\`

Output:

\`\`\`
Charge the device
\`\`\`

The function represents a simple rule engine.

It:

1. Receives a fact
2. Checks conditions
3. Finds the applicable rule
4. Produces an action

---

# 14. Multiple Conditions

Real decision systems often require more than one condition.

For example:

\`\`\`
IF battery_level < 20
AND charger_available == True
THEN "Charge the device"
\`\`\`

Python:

\`\`\`
battery_level = 15
charger_available = True

if battery_level < 20 and charger_available:
    print("Charge the device")
else:
    print("No charging action required")
\`\`\`

Output:

\`\`\`
Charge the device
\`\`\`

The logical AND operator requires both conditions to be true.

---

# 15. Using OR Conditions

Rules can also contain OR conditions.

Example:

\`\`\`
IF weather == "rainy"
OR weather == "stormy"
THEN "Carry an umbrella"
\`\`\`

Python:

\`\`\`
weather = "rainy"

if weather == "rainy" or weather == "stormy":
    recommendation = "Carry an umbrella"
else:
    recommendation = "No umbrella required"

print(recommendation)
\`\`\`

Output:

\`\`\`
Carry an umbrella
\`\`\`

---

# 16. Rule Matching

Rule matching is the process of determining which rules apply to the current facts.

Suppose the system has:

Facts:

\`\`\`
temperature = 38
weather = "hot"
\`\`\`

Rules:

\`\`\`
Rule 1:
IF temperature > 35
THEN "Stay hydrated"

Rule 2:
IF temperature < 10
THEN "Wear warm clothing"

Rule 3:
IF weather == "rainy"
THEN "Carry an umbrella"
\`\`\`

The system evaluates each rule.

Rule 1:

\`\`\`
38 > 35
True
\`\`\`

Rule 2:

\`\`\`
38 < 10
False
\`\`\`

Rule 3:

\`\`\`
"hot" == "rainy"
False
\`\`\`

Only Rule 1 matches.

Therefore:

\`\`\`
"Stay hydrated"
\`\`\`

is selected.

---

# 17. Forward Chaining

Forward chaining starts with known facts and applies rules to derive new conclusions.

The process is:

\`\`\`
Known Facts
    ↓
Find Matching Rules
    ↓
Apply Rule
    ↓
New Fact / Conclusion
    ↓
Check Again
\`\`\`

Example:

Fact:

\`\`\`
battery_level = 10
\`\`\`

Rule:

\`\`\`
IF battery_level < 20
THEN battery_status = "low"
\`\`\`

The system derives:

\`\`\`
battery_status = "low"
\`\`\`

Another rule:

\`\`\`
IF battery_status == "low"
THEN recommendation = "Charge the device"
\`\`\`

The system can now derive:

\`\`\`
recommendation = "Charge the device"
\`\`\`

This creates a chain of reasoning.

---

# 18. Forward Chaining Example

Consider:

\`\`\`
Fact:
network_connected = False

Rule 1:
IF network_connected == False
THEN network_status = "offline"

Rule 2:
IF network_status == "offline"
THEN action = "Check the network connection"
\`\`\`

Reasoning:

\`\`\`
network_connected = False
        ↓
network_status = "offline"
        ↓
action = "Check the network connection"
\`\`\`

The first rule creates information that allows another rule to fire.

This is forward chaining.

---

# 19. Basic Forward-Chaining Implementation

A simplified implementation can repeatedly evaluate rules.

\`\`\`
facts = {
    "network_connected": False
}

rules = [
    {
        "if": lambda f: f.get("network_connected") is False,
        "then": lambda f: f.update({"network_status": "offline"})
    },
    {
        "if": lambda f: f.get("network_status") == "offline",
        "then": lambda f: f.update({
            "action": "Check the network connection"
        })
    }
]

changed = True

while changed:
    changed = False

    for rule in rules:
        before = facts.copy()

        if rule["if"](facts):
            rule["then"](facts)

        if facts != before:
            changed = True

print(facts)
\`\`\`

The idea is more important than the implementation details.

The system repeatedly applies rules until no new information is produced.

---

# 20. Backward Chaining

Backward chaining works in the opposite direction.

Instead of starting with facts and deriving conclusions, it starts with a desired conclusion and asks:

"What facts would be required to prove this?"

For example, suppose the system wants to determine:

\`\`\`
Should the device be charged?
\`\`\`

It looks for a rule:

\`\`\`
IF battery_level < 20
THEN charge_device
\`\`\`

Now it asks whether:

\`\`\`
battery_level < 20
\`\`\`

is true.

If:

\`\`\`
battery_level = 15
\`\`\`

the conclusion is supported.

Conceptually:

\`\`\`
Goal
 ↓
Find Rule
 ↓
Check Required Conditions
 ↓
Check Facts
 ↓
Prove or Reject Goal
\`\`\`

Backward chaining is especially useful when the system is focused on proving a particular goal.

---

# 21. Forward vs Backward Chaining

Forward chaining:

\`\`\`
Facts → Rules → Conclusions
\`\`\`

Backward chaining:

\`\`\`
Goal → Rules → Required Facts
\`\`\`

Forward chaining is useful when:

- Many possible conclusions need to be discovered
- New facts continuously arrive
- The system should react to changing conditions

Backward chaining is useful when:

- A specific goal must be investigated
- Only relevant rules need to be explored
- The system is trying to prove a particular conclusion

Both approaches are important ideas in symbolic AI.

---

# 22. When Multiple Rules Match

A realistic system may have multiple rules that match the same input.

Example:

\`\`\`
Rule 1:
IF temperature > 30
THEN "Weather is hot"

Rule 2:
IF temperature > 35
THEN "Weather is extremely hot"
\`\`\`

For:

\`\`\`
temperature = 38
\`\`\`

both rules match.

The system needs a way to decide what to do.

This is called conflict resolution.

---

# 23. Rule Priority

One simple solution is to assign priorities.

Example:

\`\`\`
Rule 1:
condition: temperature > 30
priority: 1

Rule 2:
condition: temperature > 35
priority: 2
\`\`\`

The system can select the highest-priority matching rule.

Python representation:

\`\`\`
rules = [
    {
        "name": "Hot",
        "priority": 1
    },
    {
        "name": "Extremely Hot",
        "priority": 2
    }
]
\`\`\`

Higher priority rules can represent more specific or more important situations.

---

# 24. Specific Rules vs General Rules

Consider:

\`\`\`
Rule A:
IF temperature > 30
THEN "Hot"

Rule B:
IF temperature > 40
THEN "Very Hot"
\`\`\`

Rule B is more specific.

If:

\`\`\`
temperature = 42
\`\`\`

both conditions are true.

A well-designed system should have a clear policy for choosing between them.

Possible strategies include:

- Priority
- Specificity
- Rule ordering
- Explicit conflict resolution
- Returning multiple conclusions

There is no universal strategy.

The correct approach depends on the application.

---

# 25. Explainable Decisions

One major advantage of rule-based systems is that their reasoning can be made explicit.

Instead of only returning:

\`\`\`
Charge the device
\`\`\`

the system can return:

\`\`\`
Decision:
Charge the device.

Reason:
Battery level is below 20%.
\`\`\`

This is useful because users can understand why the system reached its conclusion.

Example:

\`\`\`
battery_level = 15

if battery_level < 20:
    print("Decision: Charge the device.")
    print("Reason: Battery level is below 20%.")
\`\`\`

Output:

\`\`\`
Decision: Charge the device.
Reason: Battery level is below 20%.
\`\`\`

This creates a basic explanation mechanism.

---

# 26. Handling Unknown Inputs

An intelligent system should not assume that every input is valid.

Suppose the user enters:

\`\`\`
battery_level = "unknown"
\`\`\`

A comparison such as:

\`\`\`
battery_level < 20
\`\`\`

would not be meaningful.

The system should validate the input.

Example:

\`\`\`
battery_input = "unknown"

try:
    battery_level = float(battery_input)

    if battery_level < 20:
        print("Charge the device")
    else:
        print("Battery level is sufficient")

except ValueError:
    print("Invalid battery level.")
\`\`\`

A robust AI system must account for unexpected input.

---

# 27. Handling Missing Information

Suppose a rule requires:

\`\`\`
battery_level < 20
AND charger_available == True
\`\`\`

But the system only knows:

\`\`\`
battery_level = 15
\`\`\`

It does not know whether a charger is available.

The system should not automatically assume:

\`\`\`
charger_available = True
\`\`\`

Instead, it can respond:

\`\`\`
More information is required.
\`\`\`

This is an important principle:

> Unknown information should not automatically be treated as false or true unless the system explicitly defines that behavior.

---

# 28. A Structured Rule Engine

Now we can build a more reusable rule engine.

\`\`\`
def evaluate_rules(facts, rules):
    matches = []

    for rule in rules:
        if rule["condition"](facts):
            matches.append(rule)

    if not matches:
        return {
            "decision": "No rule matched",
            "reason": "The current facts do not satisfy any rule."
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

This separates:

- Facts
- Rules
- Rule evaluation
- Rule selection
- Explanation

That is much closer to a reusable AI component.

---

# 29. Building the Rule Set

Example:

\`\`\`
rules = [
    {
        "name": "Critical Battery",
        "priority": 3,
        "condition": lambda f: f["battery"] < 10,
        "action": "Charge the device immediately",
        "reason": "Battery level is critically low."
    },
    {
        "name": "Low Battery",
        "priority": 2,
        "condition": lambda f: f["battery"] < 20,
        "action": "Charge the device soon",
        "reason": "Battery level is below 20%."
    },
    {
        "name": "Normal Battery",
        "priority": 1,
        "condition": lambda f: f["battery"] >= 20,
        "action": "Battery level is normal",
        "reason": "Battery level is at least 20%."
    }
]
\`\`\`

Facts:

\`\`\`
facts = {
    "battery": 8
}
\`\`\`

Evaluation:

\`\`\`
result = evaluate_rules(facts, rules)

print(result)
\`\`\`

The highest-priority matching rule is selected.

---

# 30. Complete Simple Intelligent System

Here is a complete example.

\`\`\`
def evaluate_rules(facts, rules):
    matches = []

    for rule in rules:
        try:
            if rule["condition"](facts):
                matches.append(rule)
        except (KeyError, TypeError):
            continue

    if not matches:
        return {
            "decision": "Unable to make a decision",
            "reason": "No applicable rule was found.",
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


rules = [
    {
        "name": "Critical Battery",
        "priority": 3,
        "condition": lambda f: f["battery"] < 10,
        "action": "Charge the device immediately",
        "reason": "Battery level is critically low."
    },
    {
        "name": "Low Battery",
        "priority": 2,
        "condition": lambda f: f["battery"] < 20,
        "action": "Charge the device soon",
        "reason": "Battery level is below 20%."
    },
    {
        "name": "Normal Battery",
        "priority": 1,
        "condition": lambda f: f["battery"] >= 20,
        "action": "Battery level is normal",
        "reason": "Battery level is at least 20%."
    }
]


facts = {
    "battery": 8
}

result = evaluate_rules(facts, rules)

print("Decision:", result["decision"])
print("Reason:", result["reason"])
print("Rule:", result["rule"])
\`\`\`

Output:

\`\`\`
Decision: Charge the device immediately
Reason: Battery level is critically low.
Rule: Critical Battery
\`\`\`

This is a small but complete rule-based intelligent system.

---

# 31. Building a More Practical Decision Assistant

Now consider a slightly more realistic problem.

We want to build an assistant that recommends what action should be taken based on:

- Urgency
- Available time
- Task difficulty

Input:

\`\`\`
urgency = "high"
available_time = 1
difficulty = "high"
\`\`\`

Possible rules:

\`\`\`
IF urgency is high
AND available time is low
AND difficulty is high
THEN "Break the task into smaller steps"
\`\`\`

Another:

\`\`\`
IF urgency is low
AND available time is high
THEN "Plan the task before starting"
\`\`\`

This demonstrates how several pieces of information can influence one decision.

---

# 32. Practical Python Decision Assistant

\`\`\`
def decision_assistant(urgency, available_time, difficulty):
    if (
        urgency == "high"
        and available_time <= 1
        and difficulty == "high"
    ):
        return {
            "decision": "Break the task into smaller steps",
            "reason": (
                "The task is urgent, difficult, "
                "and there is limited time."
            )
        }

    if (
        urgency == "high"
        and available_time > 1
    ):
        return {
            "decision": "Start with the highest-priority part",
            "reason": (
                "The task is urgent and sufficient time "
                "is available to begin immediately."
            )
        }

    if (
        urgency == "low"
        and available_time >= 2
    ):
        return {
            "decision": "Plan the task before starting",
            "reason": (
                "The task is not urgent and sufficient "
                "time is available for planning."
            )
        }

    return {
        "decision": "Review the task requirements",
        "reason": "The current situation does not match a specific rule."
    }


result = decision_assistant(
    urgency="high",
    available_time=1,
    difficulty="high"
)

print("Decision:", result["decision"])
print("Reason:", result["reason"])
\`\`\`

Output:

\`\`\`
Decision: Break the task into smaller steps
Reason: The task is urgent, difficult, and there is limited time.
\`\`\`

This example demonstrates the complete idea:

\`\`\`
Input
 ↓
Facts
 ↓
Rules
 ↓
Reasoning
 ↓
Decision
 ↓
Explanation
\`\`\`

---

# 33. Improving the System Architecture

Instead of placing everything inside one function, we can separate the components.

A better design is:

\`\`\`
Input Layer
     ↓
Validation Layer
     ↓
Fact Representation
     ↓
Knowledge Base
     ↓
Rule Engine
     ↓
Conflict Resolution
     ↓
Decision
     ↓
Explanation
     ↓
Output
\`\`\`

Each component has a separate responsibility.

This makes the system easier to:

- Understand
- Test
- Modify
- Extend
- Debug

---

# 34. Rule-Based AI as a Software Architecture

A rule-based AI application can be thought of as:

\`\`\`
                ┌─────────────────┐
                │      Input      │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │   Validation    │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │      Facts      │
                └────────┬────────┘
                         ↓
          ┌────────────────────────────┐
          │       Rule Engine          │
          │                            │
          │  Knowledge Base + Rules    │
          └──────────────┬─────────────┘
                         ↓
                ┌─────────────────┐
                │     Decision    │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │   Explanation   │
                └────────┬────────┘
                         ↓
                ┌─────────────────┐
                │     Output      │
                └─────────────────┘
\`\`\`

This architecture is useful beyond simple classroom examples.

Many production systems contain explicit rules somewhere in their architecture, even when they also use machine learning.

---

# 35. Rule-Based Systems in Industry

Rule-based reasoning can be useful when decisions have clearly defined policies.

Examples include:

- Eligibility checks
- Business rules
- Configuration systems
- Workflow automation
- Access-control logic
- Validation systems
- Alert systems
- Troubleshooting systems
- Decision support
- Compliance checks
- Routing logic

For example, an application might contain:

\`\`\`
IF account_status == "inactive"
THEN deny_transaction
\`\`\`

Another rule could be:

\`\`\`
IF required_document_missing == True
THEN request_document
\`\`\`

These decisions do not necessarily require machine learning.

---

# 36. Rule-Based AI vs Machine Learning

Rule-based AI:

\`\`\`
Human-defined knowledge
        ↓
Explicit rules
        ↓
Decision
\`\`\`

Machine Learning:

\`\`\`
Data
 ↓
Learning algorithm
 ↓
Model
 ↓
Prediction
\`\`\`

The major difference is where the decision logic comes from.

In a rule-based system:

\`\`\`
Rules are explicitly defined.
\`\`\`

In machine learning:

\`\`\`
Patterns are learned from data.
\`\`\`

Both approaches can be useful.

---

# 37. Strengths of Rule-Based Systems

Rule-based systems have several advantages.

## Explainability

The system can show which rule produced the decision.

## Predictability

The same facts and rules generally produce the same result.

## Transparency

The decision logic can be inspected directly.

## Easy to Start

Small rule systems are simple to implement.

## No Training Dataset Required

A rule-based system does not need a dataset to learn its rules.

## Useful for Explicit Policies

Rules are appropriate when the domain contains clear and stable requirements.

---

# 38. Limitations of Rule-Based Systems

Rule-based systems also have important limitations.

## Rule Explosion

As the number of conditions increases, the number of rules can grow rapidly.

## Maintenance

Someone must update the rules when the domain changes.

## Brittleness

A rule may fail when an unexpected situation occurs.

## No Automatic Learning

The system does not automatically discover new patterns from data.

## Limited Generalization

A rule written for one situation may not work well in a different situation.

## Complex Conflict Resolution

Large systems may have many rules that match simultaneously.

---

# 39. Rule Explosion

Suppose a system considers:

- Weather
- Temperature
- Location
- Time
- User type
- Device type

Each variable may have multiple possible values.

The number of possible combinations can become very large.

Instead of:

\`\`\`
5 rules
\`\`\`

the system may eventually require:

\`\`\`
hundreds or thousands of rules
\`\`\`

This is one reason modern AI systems often combine rules with other techniques.

---

# 40. Hybrid AI

A modern AI application does not have to choose only one technique.

It can combine:

\`\`\`
Rules
+
Machine Learning
+
Search
+
Optimization
+
Generative AI
\`\`\`

For example:

\`\`\`
User Input
     ↓
Rule-Based Validation
     ↓
Machine Learning Prediction
     ↓
Rule-Based Safety Check
     ↓
Generative AI Explanation
     ↓
Final Output
\`\`\`

This is a hybrid AI system.

The correct technique depends on the problem.

---

# 41. Example of Hybrid Reasoning

Suppose an application predicts whether a transaction is suspicious.

A machine learning model could produce:

\`\`\`
risk_score = 0.91
\`\`\`

A rule system could then apply business constraints:

\`\`\`
IF risk_score > 0.90
THEN require_additional_verification
\`\`\`

The ML model identifies a pattern.

The rule system applies an explicit policy.

This combination can be more useful than either component alone.

---

# 42. Why This Lesson Matters

You have now moved through the first module from:

\`\`\`
What is AI?
     ↓
How AI differs from traditional programming
     ↓
History of AI
     ↓
AI types and capabilities
     ↓
AI, ML and DL
     ↓
Modern AI systems
     ↓
AI applications
     ↓
AI limitations
     ↓
AI problem-solving approaches
     ↓
Building an intelligent system
\`\`\`

This final lesson connects concepts with implementation.

You are no longer only describing AI.

You are building a small AI system.

---

# 43. A Complete Mental Model

When you face an AI problem, ask:

### Step 1 — What is the problem?

Clearly define what needs to be solved.

### Step 2 — What information is available?

Identify the inputs and facts.

### Step 3 — What decision is required?

Define the output.

### Step 4 — Can explicit rules solve it?

If the logic is clear and stable, rules may be appropriate.

### Step 5 — Does the problem require learning?

If patterns must be learned from data, machine learning may be more appropriate.

### Step 6 — Does the problem require search?

If the system must explore possible states or paths, search may be useful.

### Step 7 — Does the problem require optimization?

If the goal is to find the best solution under an objective or constraints, optimization may be appropriate.

### Step 8 — Should multiple approaches be combined?

Many real AI systems are hybrid systems.

---

# 44. Mini Experiment

Modify the decision assistant so that it receives:

\`\`\`
urgency
available_time
difficulty
\`\`\`

Create at least five rules.

For example:

\`\`\`
Rule 1:
High urgency + little time
→ Start with the most important part

Rule 2:
High urgency + enough time
→ Create a short execution plan

Rule 3:
Low urgency + enough time
→ Plan and schedule the task

Rule 4:
High difficulty + little time
→ Break the task into smaller steps

Rule 5:
Low difficulty
→ Complete the task directly
\`\`\`

Then test the system with different inputs.

Observe which rules match.

---

# 45. Practice: Build a Rule-Based Assistant

Build a small assistant for one of these problems:

- Device troubleshooting
- Study planning
- Weather recommendation
- Basic shopping decision
- Network troubleshooting
- Task prioritization
- Simple system diagnostics

Your system should contain:

1. Input
2. Validation
3. Facts
4. At least five rules
5. Rule matching
6. Decision
7. Explanation
8. Unknown-input handling

Do not simply write one large if-else block.

Try to separate the knowledge from the reasoning engine.

---

# 46. Practice: Add Rule Priority

Create three rules where more than one rule can match.

Example:

\`\`\`
Rule A:
temperature > 30

Rule B:
temperature > 35

Rule C:
temperature > 40
\`\`\`

Assign different priorities.

Test:

\`\`\`
temperature = 42
\`\`\`

Determine which rule should win.

Then explain why.

---

# 47. Practice: Add Forward Chaining

Create a small system in which one rule creates a fact that activates another rule.

Example:

\`\`\`
Fact:
internet_connected = False

Rule 1:
internet_connected == False
→ network_status = "offline"

Rule 2:
network_status == "offline"
→ action = "Check network connection"
\`\`\`

Implement the chain in Python.

---

# 48. Practice: Add Explanations

Modify your system so every decision contains:

\`\`\`
Decision
Reason
Rule Used
\`\`\`

Example:

\`\`\`
Decision: Check network connection
Reason: The device is not connected to the internet.
Rule Used: Offline Network Rule
\`\`\`

This will make your system easier to understand and debug.

---

# 49. Common Mistakes

## Mistake 1: Putting Every Rule Inside One Huge Function

This becomes difficult to maintain.

Prefer separating rules from the rule engine.

---

## Mistake 2: Ignoring Invalid Inputs

Real users do not always provide valid values.

Always validate important inputs.

---

## Mistake 3: Treating Unknown as False

Missing information and false information are not necessarily the same.

Handle unknown values deliberately.

---

## Mistake 4: Ignoring Conflicting Rules

If multiple rules can match, define how the system selects a result.

---

## Mistake 5: Writing Rules Without Understanding the Problem

Rules should represent meaningful domain knowledge.

Do not add random conditions just to increase the number of rules.

---

## Mistake 6: Assuming Rules Are Machine Learning

A rule-based system does not learn parameters from training data.

Explicit rules and learned models are different approaches.

---

## Mistake 7: Returning Only a Decision

Whenever possible, provide a useful explanation of why the rule fired.

---

# 50. Industry Perspective

A professional AI engineer does not ask:

"What is the most advanced AI technology I can use?"

The better question is:

"What is the simplest reliable approach that solves the problem?"

Sometimes the answer is:

\`\`\`
Rules
\`\`\`

Sometimes:

\`\`\`
Search
\`\`\`

Sometimes:

\`\`\`
Machine Learning
\`\`\`

Sometimes:

\`\`\`
Deep Learning
\`\`\`

Sometimes:

\`\`\`
Generative AI
\`\`\`

And sometimes:

\`\`\`
Rules + ML + Search + GenAI
\`\`\`

Good AI engineering is about choosing the right approach.

---

# 51. Connection to the Module Project

The concepts from this lesson directly prepare you for the Module 01 project:

**AI Decision Assistant**

The project should go beyond a single if statement.

It should demonstrate:

- Problem definition
- Inputs
- Facts
- Knowledge representation
- Multiple rules
- Rule matching
- Decision logic
- Priority or conflict handling
- Explanation
- Input validation
- Testing
- Clear output

The lesson provides the foundation.

The project is where you apply and extend it.

---

# 52. From Rule-Based AI to Machine Learning

This lesson gives you a baseline for understanding learning systems.

Rule-based system:

\`\`\`
Human
 ↓
Defines rules
 ↓
System applies rules
 ↓
Decision
\`\`\`

Machine learning system:

\`\`\`
Human
 ↓
Provides data
 ↓
Learning algorithm
 ↓
Model learns patterns
 ↓
Prediction
\`\`\`

Later in this course, you will learn how data, features, models, training, inference, and evaluation change this architecture.

---

# 53. Key Takeaways

You should now understand that:

- A rule-based system represents knowledge using explicit rules.
- Facts describe the current state.
- Conditions determine whether a rule applies.
- Actions or conclusions represent the result of a rule.
- A knowledge base stores domain rules.
- A rule engine evaluates rules against facts.
- Forward chaining starts from facts and derives conclusions.
- Backward chaining starts from a goal and checks supporting facts.
- Multiple matching rules require conflict resolution.
- Priority and specificity can help select between rules.
- Rule-based systems can provide transparent explanations.
- Input validation is important for reliable systems.
- Rule-based AI is deterministic when its rules and inputs are fixed.
- Rule-based systems do not automatically learn from data.
- Rule explosion and maintenance are major limitations.
- Rules can be combined with ML, search, optimization, and Generative AI.
- AI engineering is about selecting the right approach for the problem.

The most important mental model is:

\`\`\`
Problem
  ↓
Input
  ↓
Facts
  ↓
Knowledge
  ↓
Reasoning
  ↓
Decision
  ↓
Explanation
  ↓
Action
\`\`\`

You have now completed the conceptual and implementation foundation of Module 01.

The next step is to practice these ideas and build the **AI Decision Assistant** project.
`,

  practice: [
    {
      id: "aiml-module1-lesson10-practice-1",
      question: "What are the main components of a simple rule-based intelligent system?",
      type: "conceptual"
    },
    {
      id: "aiml-module1-lesson10-practice-2",
      question: "Write three rules for a simple device troubleshooting assistant.",
      type: "implementation"
    },
    {
      id: "aiml-module1-lesson10-practice-3",
      question: "Implement a Python rule engine that evaluates multiple rules and selects the highest-priority matching rule.",
      type: "coding"
    },
    {
      id: "aiml-module1-lesson10-practice-4",
      question: "Create a rule chain in which one rule generates a fact that activates another rule.",
      type: "coding"
    },
    {
      id: "aiml-module1-lesson10-practice-5",
      question: "Modify your rule-based system so that it returns a decision, reason, and rule name.",
      type: "coding"
    }
  ],

  quickCheck: [
    {
      question: "What is a rule in a rule-based AI system?",
      options: [
        "A training dataset",
        "A condition-action or condition-conclusion statement",
        "A neural network layer",
        "A database table"
      ],
      answer: 1
    },
    {
      question: "What does a fact represent?",
      options: [
        "A current piece of known information",
        "A machine learning optimizer",
        "A programming language",
        "A visualization"
      ],
      answer: 0
    },
    {
      question: "What is the main responsibility of a rule engine?",
      options: [
        "Train a neural network",
        "Generate random data",
        "Match rules against current facts",
        "Create a database"
      ],
      answer: 2
    },
    {
      question: "Which reasoning approach starts with known facts and derives conclusions?",
      options: [
        "Backward chaining",
        "Forward chaining",
        "Gradient descent",
        "Clustering"
      ],
      answer: 1
    },
    {
      question: "Which approach starts with a goal and searches for facts that support it?",
      options: [
        "Forward chaining",
        "Backward chaining",
        "Vectorization",
        "Normalization"
      ],
      answer: 1
    },
    {
      question: "Why is rule priority useful?",
      options: [
        "It trains the system automatically",
        "It helps resolve situations where multiple rules match",
        "It removes the need for facts",
        "It converts rules into neural networks"
      ],
      answer: 1
    },
    {
      question: "Which is a major limitation of rule-based systems?",
      options: [
        "They always require GPUs",
        "They cannot contain conditions",
        "Rule explosion and maintenance complexity",
        "They always require training data"
      ],
      answer: 2
    },
    {
      question: "What is one advantage of rule-based AI?",
      options: [
        "Automatic learning from unlimited data",
        "Transparent and explicit decision logic",
        "Perfect generalization",
        "No need for domain knowledge"
      ],
      answer: 1
    }
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson9",
    next: "/lesson/aiml/module1/practice",
    backToModule: "/lesson/aiml/module1/about"
  }
};