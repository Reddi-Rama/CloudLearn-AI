// lesson4.ts

export const lesson4 = {
  id: "aiml-module1-lesson4",

  lessonNumber: 4,

  title: "Types and Capabilities of AI",

  moduleTitle: "Introduction to Artificial Intelligence",

  courseId: "aiml",

  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",
    currentLesson: 4,
    totalLessons: 10,

    previous: {
      label: "Lesson 03",
      href: "/lesson/aiml/module1/lesson3",
    },

    next: {
      label: "Lesson 05",
      href: "/lesson/aiml/module1/lesson5",
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
# Types and Capabilities of Artificial Intelligence

When people use the word "AI", they may be referring to very different
systems.

A spam detector, recommendation engine, navigation system, image
classifier, language model, and industrial robot can all be described
as AI systems, but they do not have the same capabilities.

For an AI engineer, it is important to understand both:

- the scope of an AI system,
- the capabilities that the system provides.

This lesson develops that understanding and connects it with practical
software design.

---

# 1. Why Classify AI Systems?

Classification helps us answer questions such as:

- How broad is the system?
- What kind of tasks can it perform?
- What inputs does it process?
- What outputs can it produce?
- What type of algorithm may be appropriate?
- What kind of data may be required?

A useful engineering principle is:

\`\`\`
Problem
   ↓
Required Capability
   ↓
Possible Approach
   ↓
Technology
   ↓
Implementation
\`\`\`

We should not start with technology.

We should first understand the problem.

---

# 2. Two Important Ways to Classify AI

AI can be discussed from two different perspectives.

## Perspective 1 — Scope

This asks:

**How broad is the system's intelligence?**

Common concepts include:

- Narrow AI
- Artificial General Intelligence
- Artificial Superintelligence

## Perspective 2 — Capability

This asks:

**What can the system actually do?**

Examples include:

- classification,
- prediction,
- recommendation,
- search,
- optimization,
- perception,
- language processing,
- anomaly detection,
- generation,
- decision support.

These two classifications should not be confused.

---

# 3. Narrow AI

Narrow AI refers to an AI system designed for a specific task or a limited
set of related tasks.

Examples include:

- spam detection,
- product recommendation,
- image classification,
- speech recognition,
- route planning,
- fraud detection,
- demand prediction.

A narrow AI system can be highly sophisticated while still being specialized.

For example:

\`\`\`
Chess AI
   ↓
Very strong chess capability
\`\`\`

does not automatically mean:

\`\`\`
Chess AI
   ↓
General human-level intelligence
\`\`\`

The system is specialized for its intended problem.

---

# 4. Narrow Does Not Mean Simple

The word "narrow" describes scope, not quality.

A specialized AI system can involve:

- large datasets,
- complex mathematical models,
- advanced algorithms,
- specialized hardware,
- large-scale infrastructure.

For example, a production recommendation system may need to process
millions of interactions.

It is still narrow in scope because its primary purpose is recommendation.

---

# 5. Artificial General Intelligence

Artificial General Intelligence, commonly abbreviated as AGI, is a
hypothetical concept describing an AI system with broad general-purpose
intellectual capabilities.

The distinction can be simplified as:

\`\`\`
Narrow AI
    ↓
Specialized capabilities

AGI
    ↓
Broad general-purpose capabilities
\`\`\`

AGI is a research and philosophical concept rather than something that
should simply be assumed to describe every modern AI application.

---

# 6. Artificial Superintelligence

Artificial Superintelligence is a hypothetical concept describing an
intelligence that would substantially exceed human intellectual abilities
across a broad range of domains.

A simplified conceptual hierarchy is:

\`\`\`
Narrow AI
    ↓
AGI
    ↓
Artificial Superintelligence
\`\`\`

The latter two concepts involve hypothetical future systems.

They should therefore be distinguished from currently deployed
specialized AI systems.

---

# 7. Capability-Based Thinking

For practical AI engineering, capability-based thinking is often more
useful.

Instead of asking:

"What type of AI is this?"

ask:

**"What does this system need to do?"**

For example:

\`\`\`
Email
 ↓
Spam or Not Spam
\`\`\`

The required capability is:

**Classification**

Another example:

\`\`\`
Historical Sales
 ↓
Future Demand
\`\`\`

The required capability is:

**Prediction**

Another:

\`\`\`
User Preferences
 ↓
Recommended Products
\`\`\`

The required capability is:

**Recommendation**

---

# 8. Classification

Classification means assigning an input to a category or class.

Examples:

\`\`\`
Email
 ↓
Spam
\`\`\`

or:

\`\`\`
Image
 ↓
Cat
\`\`\`

or:

\`\`\`
Transaction
 ↓
Suspicious
\`\`\`

Classification can involve:

- binary classes,
- multiple classes,
- multiple labels.

A simplified workflow is:

\`\`\`
Input
  ↓
Features / Representation
  ↓
Classifier
  ↓
Class
\`\`\`

Machine-learning classification will be implemented later using
scikit-learn.

---

# 9. Binary Classification

Binary classification has two possible classes.

Example:

\`\`\`
Transaction
     ↓
Normal / Suspicious
\`\`\`

Another example:

\`\`\`
Email
 ↓
Spam / Not Spam
\`\`\`

A simplified Python example:

\`\`\`python
def classify_message(message):

    suspicious_words = [
        "winner",
        "prize",
        "urgent"
    ]

    for word in suspicious_words:

        if word in message.lower():
            return "Suspicious"

    return "Normal"


print(
    classify_message(
        "You are an urgent prize winner!"
    )
)
\`\`\`

Expected output:

\`\`\`
Suspicious
\`\`\`

This is a rule-based classifier, not a trained machine-learning model.

---

# 10. Prediction

Prediction involves estimating an unknown value, category, probability,
or future outcome.

Examples include:

- house-price estimation,
- demand forecasting,
- travel-time estimation,
- energy consumption,
- customer churn prediction.

For numerical prediction:

\`\`\`
Input Data
    ↓
Model
    ↓
Predicted Value
\`\`\`

For example:

\`\`\`
House Features
      ↓
Prediction Model
      ↓
Estimated Price
\`\`\`

The mathematical and machine-learning details will be developed in later
modules.

---

# 11. Recommendation

A recommendation system selects or ranks items that may be useful to
a user.

Examples include:

- movies,
- products,
- music,
- courses,
- articles,
- search results.

A simplified workflow is:

\`\`\`
User Information
       ↓
Candidate Items
       ↓
Ranking
       ↓
Recommendations
\`\`\`

The system may consider:

- previous interactions,
- preferences,
- item properties,
- similarity,
- context.

---

# 12. Search

Search explores possible states or solutions.

Examples include:

- maze solving,
- route finding,
- puzzle solving,
- game playing,
- planning.

A simplified search problem is:

\`\`\`
Initial State
      ↓
Possible Actions
      ↓
New States
      ↓
More Actions
      ↓
Goal State
\`\`\`

Search is one of the classical AI approaches and will be studied
extensively in Module 02.

---

# 13. Optimization

Optimization attempts to find a good or best solution according to
an objective.

Suppose a delivery company wants to reduce total travel distance.

The problem can be represented as:

\`\`\`
Possible Routes
      ↓
Calculate Cost
      ↓
Compare Routes
      ↓
Select Better Route
\`\`\`

Mathematically, we can think of an objective function:

\`\`\`
minimize f(x)
\`\`\`

or:

\`\`\`
maximize f(x)
\`\`\`

where:

- x represents a candidate solution,
- f(x) represents the objective value.

Optimization will appear repeatedly in later AI topics.

---

# 14. Perception

Perception involves extracting useful information from sensory or
unstructured inputs.

Examples include:

- image recognition,
- object detection,
- speech recognition,
- document understanding,
- sensor interpretation.

A simplified vision workflow:

\`\`\`
Image
 ↓
Processing
 ↓
Representation
 ↓
Model
 ↓
Prediction
\`\`\`

Modern perception systems frequently use machine learning and
deep learning.

---

# 15. Language Processing

AI systems can process human language.

Capabilities include:

- classification,
- translation,
- summarization,
- question answering,
- information extraction,
- text generation,
- conversational interaction.

For example:

\`\`\`
Text
 ↓
Language Processing
 ↓
Information
\`\`\`

Natural Language Processing will be studied as a dedicated course
later in the CloudLearn AI curriculum.

---

# 16. Generation

Generative AI systems can produce new content.

Examples include:

- text,
- code,
- images,
- audio,
- video.

A simplified workflow:

\`\`\`
Input / Prompt
      ↓
Generative Model
      ↓
Generated Output
\`\`\`

Generation is different from simply classifying an existing input.

For example:

\`\`\`
Input:
"This email is spam."

Output:
Spam
\`\`\`

is classification.

Whereas:

\`\`\`
Input:
"Write an email about a project meeting."

Output:
New email content
\`\`\`

is generation.

---

# 17. Anomaly Detection

Anomaly detection attempts to identify observations that differ from
expected behavior.

Examples:

- unusual transactions,
- abnormal network activity,
- machine failures,
- unusual sensor readings.

A simplified workflow:

\`\`\`
Historical Behavior
        ↓
Expected Pattern
        ↓
New Observation
        ↓
Compare
        ↓
Normal / Anomaly
\`\`\`

The important concept is that an anomaly is defined relative to some
notion of expected behavior.

---

# 18. Decision Support

AI does not always have to make the final decision.

It can support a human decision maker.

For example:

\`\`\`
Data
 ↓
Analysis
 ↓
Prediction
 ↓
Recommendation
 ↓
Human Decision
\`\`\`

This approach can be useful when human judgment remains important.

The AI provides information or recommendations while a person retains
responsibility for the final decision.

---

# 19. Planning

Planning involves determining a sequence of actions that can achieve
a desired objective.

For example:

\`\`\`
Current State
     ↓
Possible Actions
     ↓
Future States
     ↓
Goal
\`\`\`

A delivery system may need to determine:

\`\`\`
Warehouse
   ↓
Delivery Point A
   ↓
Delivery Point B
   ↓
Delivery Point C
\`\`\`

The exact planning and optimization methods can vary depending on the
problem.

---

# 20. Multiple Capabilities in One Application

A modern application may require several capabilities.

Consider an intelligent education platform.

It might include:

\`\`\`
Student Activity
       ↓
Performance Prediction
\`\`\`

\`\`\`
Student History
       ↓
Course Recommendation
\`\`\`

\`\`\`
Student Question
       ↓
Language Processing
       ↓
Generated Explanation
\`\`\`

Therefore, one application may combine:

- prediction,
- recommendation,
- language processing,
- generation.

---

# 21. Practical Python — Capability Registry

We can represent AI applications using Python dictionaries.

\`\`\`python
ai_systems = {

    "spam_detector": {
        "capabilities": [
            "classification"
        ]
    },

    "movie_recommender": {
        "capabilities": [
            "recommendation"
        ]
    },

    "route_planner": {
        "capabilities": [
            "search",
            "optimization"
        ]
    },

    "voice_assistant": {
        "capabilities": [
            "language_processing",
            "generation"
        ]
    },

    "fraud_detector": {
        "capabilities": [
            "classification",
            "anomaly_detection"
        ]
    }
}


for system, details in ai_systems.items():

    print(system)

    for capability in details["capabilities"]:
        print("  -", capability)
\`\`\`

This is a useful programming pattern:

**Representing system knowledge as structured data.**

---

# 22. Searching the Capability Registry

Let's create a function that finds systems providing a particular capability.

\`\`\`python
def find_systems_by_capability(
    systems,
    target_capability
):

    results = []

    for name, details in systems.items():

        if target_capability in details["capabilities"]:
            results.append(name)

    return results


print(
    find_systems_by_capability(
        ai_systems,
        "classification"
    )
)
\`\`\`

Expected output:

\`\`\`
['spam_detector', 'fraud_detector']
\`\`\`

Try another capability:

\`\`\`python
print(
    find_systems_by_capability(
        ai_systems,
        "generation"
    )
)
\`\`\`

Expected output:

\`\`\`
['voice_assistant']
\`\`\`

---

# 23. Building an Application Capability Map

Now create your own application.

\`\`\`python
applications = {

    "education_platform": [
        "prediction",
        "recommendation",
        "language_processing"
    ],

    "delivery_platform": [
        "search",
        "optimization",
        "prediction"
    ],

    "banking_platform": [
        "classification",
        "anomaly_detection",
        "prediction"
    ]
}


for application, capabilities in applications.items():

    print(
        f"Application: {application}"
    )

    print("Capabilities:")

    for capability in capabilities:
        print(
            f"  - {capability}"
        )

    print()
\`\`\`

This is the beginning of thinking about AI applications as systems
rather than isolated algorithms.

---

# 24. Capability vs Technology

This distinction is extremely important.

A capability answers:

**What should the system do?**

A technology or approach answers:

**How might we implement it?**

For example:

\`\`\`
Capability:
Image Classification

Possible approaches:
Machine Learning
Deep Learning
\`\`\`

Another:

\`\`\`
Capability:
Route Finding

Possible approaches:
Search
Optimization
\`\`\`

Another:

\`\`\`
Capability:
Text Generation

Possible approach:
Generative Model
\`\`\`

The capability should normally be identified before selecting the
implementation technology.

---

# 25. Capability-to-Approach Mapping

We can represent this using Python.

\`\`\`python
capability_map = {

    "classification": [
        "machine_learning",
        "deep_learning"
    ],

    "prediction": [
        "machine_learning",
        "statistical_methods"
    ],

    "recommendation": [
        "machine_learning",
        "ranking_methods"
    ],

    "search": [
        "search_algorithms"
    ],

    "optimization": [
        "optimization_algorithms"
    ],

    "generation": [
        "generative_models"
    ],

    "language_processing": [
        "natural_language_processing"
    ]
}


for capability, approaches in capability_map.items():

    print(
        f"{capability}:"
    )

    for approach in approaches:
        print(
            f"  - {approach}"
        )
\`\`\`

This is still a conceptual mapping.

A real system may use several technologies simultaneously.

---

# 26. Designing an AI System

Suppose we want to build a smart delivery platform.

First identify the requirements.

### Requirement 1

Find an efficient delivery route.

Capability:

\`\`\`
Search / Optimization
\`\`\`

### Requirement 2

Estimate delivery time.

Capability:

\`\`\`
Prediction
\`\`\`

### Requirement 3

Detect suspicious orders.

Capability:

\`\`\`
Classification / Anomaly Detection
\`\`\`

### Requirement 4

Recommend delivery options.

Capability:

\`\`\`
Recommendation
\`\`\`

The application now has several AI components.

---

# 27. System-Level Architecture

A simplified architecture could be:

\`\`\`
                 Delivery Application
                         |
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
    Prediction       Optimization    Classification
        ↓                ↓                ↓
 Delivery Time        Route          Risk Detection
                         |
                         ↓
                  Recommendation
                         |
                         ↓
                    User Output
\`\`\`

The important idea is that AI applications are often systems of
multiple components.

---

# 28. Practical Experiment — Capability Analyzer

Create a reusable function.

\`\`\`python
def describe_system(
    name,
    capabilities
):

    print(
        f"System: {name}"
    )

    print("Capabilities:")

    for capability in capabilities:

        print(
            f"- {capability}"
        )


describe_system(
    "Learning Assistant",
    [
        "prediction",
        "recommendation",
        "language_processing",
        "generation"
    ]
)
\`\`\`

Expected output:

\`\`\`
System: Learning Assistant
Capabilities:
- prediction
- recommendation
- language_processing
- generation
\`\`\`

---

# 29. Extending the Capability Analyzer

We can include inputs and outputs.

\`\`\`python
learning_system = {

    "name": "Learning Assistant",

    "inputs": [
        "student_activity",
        "student_questions",
        "course_progress"
    ],

    "capabilities": [
        "prediction",
        "recommendation",
        "language_processing",
        "generation"
    ],

    "outputs": [
        "performance_estimate",
        "course_recommendation",
        "generated_explanation"
    ]
}


print(
    "System:",
    learning_system["name"]
)

print(
    "Inputs:",
    learning_system["inputs"]
)

print(
    "Capabilities:",
    learning_system["capabilities"]
)

print(
    "Outputs:",
    learning_system["outputs"]
)
\`\`\`

This provides a simple system specification.

---

# 30. From Capability to Implementation

A professional AI workflow can be represented as:

\`\`\`
Business Problem
       ↓
Problem Definition
       ↓
Required Capability
       ↓
Input / Data Requirements
       ↓
Possible Approaches
       ↓
Algorithm / Model
       ↓
Implementation
       ↓
Evaluation
       ↓
Deployment
       ↓
Monitoring
\`\`\`

This workflow will appear repeatedly throughout the AI and Machine
Learning curriculum.

---

# 31. Why Capability Thinking Matters

Suppose someone says:

"We need AI for our application."

That statement is incomplete.

An engineer should ask:

- What problem are we solving?
- What capability is required?
- What input is available?
- What output is expected?
- What data is available?
- What accuracy is required?
- What constraints exist?
- What risks exist?

Only then can the team select an appropriate approach.

---

# 32. Industry Example — Banking

Consider a banking platform.

It may use:

\`\`\`
Transaction Data
      ↓
Fraud Detection
      ↓
Classification / Anomaly Detection
\`\`\`

It may also use:

\`\`\`
Customer Data
      ↓
Risk Prediction
      ↓
Prediction
\`\`\`

And:

\`\`\`
Customer Activity
      ↓
Product Recommendation
      ↓
Recommendation
\`\`\`

One organization can therefore use many different AI capabilities.

---

# 33. Industry Example — Education

An education platform could contain:

### Student Performance

\`\`\`
Activity Data
 ↓
Prediction Model
 ↓
Performance Estimate
\`\`\`

### Course Recommendation

\`\`\`
Student History
 ↓
Recommendation System
 ↓
Next Course
\`\`\`

### Question Understanding

\`\`\`
Student Question
 ↓
Language Processing
 ↓
Answer / Explanation
\`\`\`

### Content Generation

\`\`\`
Topic
 ↓
Generative System
 ↓
Practice Material
\`\`\`

These are separate capabilities even though they exist inside one
application.

---

# 34. Practical Design Exercise

Design an AI-powered education platform.

Start with these capabilities:

\`\`\`
1. Performance Prediction
2. Course Recommendation
3. Question Classification
4. Language Processing
5. Content Generation
6. Anomaly Detection
\`\`\`

For each capability identify:

- input,
- output,
- possible approach,
- required data,
- evaluation method,
- potential risk.

Represent your design using Python dictionaries.

---

# Common Mistakes

## Mistake 1 — Narrow Means Weak

False.

Narrow describes the scope of a system, not its technical sophistication.

---

## Mistake 2 — AI Means One Algorithm

False.

AI is a broad field containing many approaches and capabilities.

---

## Mistake 3 — Capability and Technology Are the Same

They are not.

For example:

\`\`\`
Recommendation
\`\`\`

is a capability.

\`\`\`
Machine Learning
\`\`\`

is one possible approach.

---

## Mistake 4 — One Application Uses One AI Technique

Modern applications commonly combine multiple AI components.

---

## Mistake 5 — Starting With Technology

Starting with:

"Let's use a neural network."

is often the wrong engineering process.

Start with:

"What problem are we solving?"

---

## Mistake 6 — Treating AGI as an Ordinary Product Category

AGI is a hypothetical concept concerning broad general-purpose
intelligence.

It should not simply be used as a label for every advanced AI product.

---

# Practical Tasks

### Task 1

Create a Python dictionary containing five AI systems.

### Task 2

Assign capabilities to each system.

### Task 3

Write a function that searches systems by capability.

### Task 4

Create a capability-to-approach mapping.

### Task 5

Design the capabilities of an education platform.

### Task 6

Design the capabilities of a delivery platform.

### Task 7

Design the capabilities of a banking platform.

### Task 8

For each capability, identify:

- input,
- output,
- possible approach,
- data requirement.

---

# Challenge

Build an **AI Application Capability Analyzer**.

The program should accept an application specification containing:

\`\`\`
name
inputs
outputs
capabilities
\`\`\`

It should display:

\`\`\`
Application Name
        ↓
Inputs
        ↓
Capabilities
        ↓
Possible AI Approaches
        ↓
Outputs
\`\`\`

For example:

\`\`\`
Application: Smart Education Platform

Inputs:
- Student activity
- Course progress
- Student questions

Capabilities:
- Prediction
- Recommendation
- Language Processing
- Generation

Outputs:
- Performance estimate
- Recommended course
- Generated explanation
\`\`\`

Add at least five applications to your analyzer.

---

# Quick Check

### Question 1

What is Narrow AI?

Answer:

Narrow AI is an AI system designed for a specific task or limited set
of related tasks.

---

### Question 2

Does narrow AI mean that the system is simple?

Answer:

No. A narrow AI system can be highly sophisticated while remaining
specialized.

---

### Question 3

What is AGI?

Answer:

AGI is a hypothetical concept describing broad general-purpose
intellectual capabilities.

---

### Question 4

What is classification?

Answer:

Classification assigns an input to one or more categories or classes.

---

### Question 5

What is prediction?

Answer:

Prediction estimates an unknown value, outcome, category, probability,
or future event based on available information.

---

### Question 6

What is the difference between capability and technology?

Answer:

A capability describes what the system needs to do, while an approach
or technology describes how that capability may be implemented.

---

### Question 7

Can one AI application have multiple capabilities?

Answer:

Yes. Modern AI applications commonly combine multiple capabilities
and approaches.

---

# Key Takeaways

- AI can be classified by scope and by capability.
- Narrow AI is specialized but can be extremely sophisticated.
- AGI is a hypothetical concept involving broad general-purpose
  intelligence.
- Artificial Superintelligence is a hypothetical concept involving
  intelligence beyond human capabilities across broad domains.
- Practical AI engineering focuses heavily on required capabilities.
- Important AI capabilities include:
  - classification,
  - prediction,
  - recommendation,
  - search,
  - optimization,
  - perception,
  - language processing,
  - planning,
  - anomaly detection,
  - generation,
  - decision support.
- One application can contain multiple AI capabilities.
- A capability should not be confused with a technology.
- Problem definition should come before technology selection.
- Modern AI applications are usually combinations of models,
  algorithms, software, data, and infrastructure.
`,

  practice: [
    "Create a Python AI capability registry.",
    "Add at least five AI applications to the registry.",
    "Assign multiple capabilities to selected applications.",
    "Write a function to search applications by capability.",
    "Create a capability-to-approach mapping.",
    "Design the capability architecture of an education platform.",
    "Design the capability architecture of a delivery platform.",
    "Design the capability architecture of a banking platform.",
  ],

  quickCheck: [
    {
      question: "What is Narrow AI?",
      answer:
        "An AI system designed for a specific task or limited set of related tasks.",
    },
    {
      question: "Does narrow AI mean simple AI?",
      answer:
        "No. Narrow AI can be highly sophisticated while remaining specialized.",
    },
    {
      question: "What is AGI?",
      answer:
        "AGI is a hypothetical concept describing broad general-purpose intellectual capabilities.",
    },
    {
      question: "What is classification?",
      answer:
        "Classification assigns an input to one or more categories or classes.",
    },
    {
      question: "What is prediction?",
      answer:
        "Prediction estimates an unknown value, outcome, probability, category, or future event.",
    },
    {
      question: "What is the difference between capability and technology?",
      answer:
        "A capability describes what the system needs to do, while an approach or technology describes how it may be implemented.",
    },
    {
      question: "Can one AI application contain multiple capabilities?",
      answer:
        "Yes. Modern AI applications commonly combine multiple capabilities and approaches.",
    },
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson3",
    next: "/lesson/aiml/module1/lesson5",
    backToModule: "/lesson/aiml/module1/about",
  },
};