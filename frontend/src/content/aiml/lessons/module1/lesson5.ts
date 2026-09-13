// lesson5.ts

export const lesson5 = {
  id: "aiml-module1-lesson5",
  lessonNumber: 5,
  title: "AI, Machine Learning & Deep Learning",
  moduleTitle: "Introduction to Artificial Intelligence",
  courseId: "aiml",
  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",
    currentLesson: 5,
    totalLessons: 10,

    previous: {
      label: "Lesson 04",
      href: "/lesson/aiml/module1/lesson4",
    },

    next: {
      label: "Lesson 06",
      href: "/lesson/aiml/module1/lesson6",
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
# AI, Machine Learning & Deep Learning

Artificial Intelligence, Machine Learning, and Deep Learning are closely
related concepts, but they are not interchangeable.

Understanding their relationship is essential before learning machine
learning algorithms, neural networks, and modern AI systems.

The basic conceptual relationship is:

\`\`\`
Artificial Intelligence
        │
        └── Machine Learning
                │
                └── Deep Learning
\`\`\`

AI is the broadest field.

Machine Learning is one major approach used to build AI systems.

Deep Learning is a specialized area within Machine Learning.

Modern Generative AI systems often use Deep Learning, but Generative AI,
Deep Learning, and Machine Learning are not identical concepts.

---

# 1. What Is Artificial Intelligence?

Artificial Intelligence is the broad field concerned with building
computational systems capable of performing tasks associated with
intelligent behavior.

These tasks can include:

- reasoning,
- problem solving,
- planning,
- learning,
- perception,
- language processing,
- prediction,
- recommendation,
- decision making,
- generation.

AI is therefore a broad problem-solving field.

Different AI systems can use different techniques.

For example:

\`\`\`
Artificial Intelligence
│
├── Rule-Based Systems
├── Search
├── Planning
├── Optimization
├── Machine Learning
└── Generative Systems
\`\`\`

Therefore, an AI system does not necessarily need to use Machine Learning.

---

# 2. What Is Machine Learning?

Machine Learning is a major approach within AI in which algorithms learn
useful patterns or relationships from data.

Instead of manually writing every possible rule, examples are provided to
a learning algorithm.

The algorithm uses those examples to construct a model.

A simplified workflow is:

\`\`\`
Data
  ↓
Learning Algorithm
  ↓
Model
  ↓
New Input
  ↓
Prediction
\`\`\`

For example, suppose we want to predict whether a customer will purchase
a product.

We could have historical data:

\`\`\`
Age    Visits    Purchased
22       2           No
25       5           Yes
31       7           Yes
20       1           No
40       8           Yes
\`\`\`

A machine-learning algorithm can learn relationships between the input
features and the target output.

---

# 3. What Is Deep Learning?

Deep Learning is a specialized area of Machine Learning that primarily
uses neural networks containing multiple layers.

A simplified representation is:

\`\`\`
Input
  ↓
Layer 1
  ↓
Layer 2
  ↓
Layer 3
  ↓
Output
\`\`\`

Deep-learning systems can learn complex representations from data.

They are particularly important for problems involving:

- images,
- audio,
- speech,
- natural language,
- video,
- other high-dimensional data.

---

# 4. The Relationship Between AI, ML and DL

The relationship can be represented as:

\`\`\`
┌─────────────────────────────────────────┐
│       ARTIFICIAL INTELLIGENCE           │
│                                         │
│   ┌─────────────────────────────────┐   │
│   │       MACHINE LEARNING          │   │
│   │                                 │   │
│   │    ┌───────────────────────┐    │   │
│   │    │     DEEP LEARNING    │    │   │
│   │    │                       │    │   │
│   │    │  Neural Networks      │    │   │
│   │    └───────────────────────┘    │   │
│   └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
\`\`\`

Mathematically, the conceptual relationship can be written as:

\`\`\`
Deep Learning ⊂ Machine Learning ⊂ Artificial Intelligence
\`\`\`

This means:

- Deep Learning is within Machine Learning.
- Machine Learning is within the broader field of AI.
- AI also contains approaches that are not Machine Learning.

---

# 5. AI Without Machine Learning

Consider a rule-based system.

\`\`\`python
def access_decision(role):

    if role == "admin":
        return "Access granted"

    if role == "student":
        return "Limited access"

    return "Access denied"


print(access_decision("admin"))
\`\`\`

Output:

\`\`\`
Access granted
\`\`\`

The program makes a decision, but it does not learn from historical
examples.

The behavior is explicitly defined by the developer.

Therefore:

\`\`\`
AI ≠ Machine Learning
\`\`\`

Machine Learning is one approach to building AI systems.

---

# 6. Rule-Based AI

A rule-based system follows predefined logic.

The general structure is:

\`\`\`
Input
 ↓
Rules
 ↓
Decision
 ↓
Output
\`\`\`

Example:

\`\`\`python
def recommendation(weather):

    if weather == "rainy":
        return "Carry an umbrella"

    if weather == "sunny":
        return "Outdoor activities are suitable"

    return "Check the weather conditions"


print(recommendation("rainy"))
\`\`\`

Output:

\`\`\`
Carry an umbrella
\`\`\`

This can be useful when the rules are clear and predictable.

However, manually writing rules becomes difficult when the number of
possible situations becomes very large.

---

# 7. Machine Learning Changes the Approach

Instead of manually defining every decision:

\`\`\`
Human
 ↓
Rules
 ↓
Program
 ↓
Decision
\`\`\`

Machine Learning uses examples:

\`\`\`
Examples
 ↓
Learning Algorithm
 ↓
Model
 ↓
New Input
 ↓
Prediction
\`\`\`

The model attempts to learn useful patterns from the training data.

---

# 8. Machine Learning Is Not Only Neural Networks

Machine Learning includes many different approaches.

Examples include:

- Linear Regression,
- Logistic Regression,
- Decision Trees,
- Random Forests,
- Support Vector Machines,
- Nearest Neighbor methods,
- Clustering,
- Neural Networks.

A simplified structure is:

\`\`\`
Machine Learning
│
├── Linear Models
├── Tree-Based Models
├── Distance-Based Methods
├── Support Vector Methods
├── Clustering
└── Neural Networks
        │
        └── Deep Neural Networks
\`\`\`

Therefore:

\`\`\`
Machine Learning ≠ Deep Learning
\`\`\`

Deep Learning is one specialized part of Machine Learning.

---

# 9. A Simple Mathematical Model

Consider a simple linear model:

\`\`\`
y = wx + b
\`\`\`

where:

- x = input,
- y = predicted output,
- w = model parameter,
- b = model parameter.

Suppose:

\`\`\`
x = 10
w = 2
b = 5
\`\`\`

Then:

\`\`\`
y = wx + b

y = (2 × 10) + 5

y = 25
\`\`\`

Python implementation:

\`\`\`python
def predict(x, weight, bias):
    return weight * x + bias


x = 10
weight = 2
bias = 5

prediction = predict(x, weight, bias)

print(prediction)
\`\`\`

Output:

\`\`\`
25
\`\`\`

At this stage, the parameters were manually selected.

Machine Learning can later learn suitable parameter values from data.

---

# 10. Prediction Is Not Learning

The following function performs prediction:

\`\`\`python
def predict(x, weight, bias):
    return weight * x + bias
\`\`\`

But this function does not learn.

Learning requires a process that determines suitable parameter values from
training data.

Conceptually:

\`\`\`
Training Data
     ↓
Learning Algorithm
     ↓
Learn Parameters
     ↓
Trained Model
     ↓
Prediction
\`\`\`

This distinction is fundamental to Machine Learning.

---

# 11. Training

Training is the process through which a model learns from data.

A simplified workflow is:

\`\`\`
Training Data
      ↓
Initial Parameters
      ↓
Make Predictions
      ↓
Calculate Error
      ↓
Update Parameters
      ↓
Repeat
      ↓
Trained Model
\`\`\`

The exact learning procedure depends on the algorithm.

Different algorithms use different mathematical techniques to learn
parameters.

---

# 12. Prediction Error

Suppose:

\`\`\`
Actual Value = 100
Prediction   = 90
\`\`\`

A simple absolute error is:

\`\`\`
Error = |Actual - Prediction|
\`\`\`

Therefore:

\`\`\`
Error = |100 - 90|
      = 10
\`\`\`

Python:

\`\`\`python
actual = 100
prediction = 90

error = abs(actual - prediction)

print(error)
\`\`\`

Output:

\`\`\`
10
\`\`\`

This introduces the basic idea of measuring model performance.

---

# 13. Mathematical Intuition of Learning

A learning system attempts to find parameters that produce useful
predictions.

Conceptually:

\`\`\`
Parameters
    ↓
Prediction
    ↓
Error
    ↓
Parameter Update
    ↓
Improved Prediction
\`\`\`

This creates a feedback process.

The goal is to find parameters that allow the model to perform well on
appropriate data.

The detailed mathematics of optimization will be studied later.

---

# 14. Traditional Programming vs Machine Learning

Traditional programming generally follows:

\`\`\`
Rules + Input Data
       ↓
    Program
       ↓
     Output
\`\`\`

Machine Learning generally follows:

\`\`\`
Training Data
      +
Learning Algorithm
      ↓
    Model
      ↓
  New Input
      ↓
  Prediction
\`\`\`

The major difference is where the decision logic comes from.

In traditional programming, the developer explicitly defines the logic.

In Machine Learning, the learning process derives patterns from examples.

---

# 15. Example: Spam Detection

Suppose we want to identify spam messages.

A rule-based approach could use:

\`\`\`
IF message contains "free money"
THEN spam
\`\`\`

But real messages can contain many different patterns.

A Machine Learning system can learn from examples:

\`\`\`
Historical Messages
        ↓
Labels
        ↓
Learning Algorithm
        ↓
Spam Detection Model
        ↓
New Message
        ↓
Prediction
\`\`\`

The model can learn statistical relationships from the training data.

---

# 16. Deep Learning and Neural Networks

Deep Learning commonly uses neural networks.

A simplified neural network can be represented as:

\`\`\`
Input Layer
     ↓
Hidden Layer
     ↓
Hidden Layer
     ↓
Output Layer
\`\`\`

Each layer performs transformations on the data.

The network contains parameters that are adjusted during training.

A simplified view is:

\`\`\`
Input
 ↓
Weighted Computation
 ↓
Activation
 ↓
Next Layer
 ↓
...
 ↓
Output
\`\`\`

The detailed mathematics of neural networks will be studied in the
Deep Learning course.

---

# 17. Why Multiple Layers Matter

Consider an image-recognition problem.

A simplified conceptual progression could be:

\`\`\`
Pixels
 ↓
Edges
 ↓
Shapes
 ↓
Parts
 ↓
Objects
 ↓
Class
\`\`\`

The actual internal representations learned by a neural network are much
more complex than this simplified diagram.

The important idea is that multiple layers can transform input into
increasingly useful representations.

---

# 18. Traditional Machine Learning and Feature Engineering

A traditional Machine Learning workflow may involve manually creating
useful features.

For example, consider house-price prediction.

\`\`\`
Raw House Information
        ↓
Feature Engineering
        ↓
Size
Bedrooms
Location Score
Age
        ↓
ML Model
        ↓
Price Prediction
\`\`\`

Feature engineering can strongly affect model performance.

This is one of the reasons understanding data is important before
building models.

---

# 19. Deep Learning and Representation Learning

Deep-learning systems can learn useful representations through their
network layers.

Conceptually:

\`\`\`
Input
 ↓
Deep Neural Network
 ↓
Learned Representation
 ↓
Prediction
\`\`\`

For image data:

\`\`\`
Image
 ↓
Learned Visual Representation
 ↓
Classification
\`\`\`

For language:

\`\`\`
Text
 ↓
Learned Language Representation
 ↓
Prediction / Generation
\`\`\`

This ability to learn representations is one reason deep learning is
effective for complex data.

---

# 20. Machine Learning vs Deep Learning

Machine Learning is the broader category.

Deep Learning is a specialized area inside Machine Learning.

A simplified comparison:

\`\`\`
Machine Learning
│
├── Linear Regression
├── Logistic Regression
├── Decision Trees
├── Random Forests
├── Support Vector Machines
├── Clustering
└── Neural Networks
        │
        └── Deep Neural Networks
\`\`\`

Therefore:

\`\`\`
Deep Learning is Machine Learning

but

Machine Learning is not necessarily Deep Learning.
\`\`\`

---

# 21. Generative AI

Generative AI refers to systems capable of generating new content.

Examples include:

- text,
- source code,
- images,
- audio,
- video,
- structured information.

A simplified workflow is:

\`\`\`
Input / Prompt
      ↓
Generative Model
      ↓
Generated Output
\`\`\`

Many modern Generative AI systems use Deep Learning.

However:

\`\`\`
Generative AI ≠ Deep Learning
\`\`\`

Deep Learning describes a learning approach.

Generative AI describes a capability and family of AI systems.

---

# 22. Capability vs Technique

This distinction is important.

Consider:

\`\`\`
Classification
Prediction
Recommendation
Generation
Detection
Planning
\`\`\`

These describe tasks or capabilities.

Now consider:

\`\`\`
Rules
Search
Machine Learning
Deep Learning
Generative Models
\`\`\`

These describe approaches or techniques.

One capability can sometimes be implemented using different approaches.

For example:

\`\`\`
Classification
    ↓
 ┌──┼──────────┐
 ↓  ↓          ↓
Rules ML   Deep Learning
\`\`\`

The correct approach depends on the problem and its requirements.

---

# 23. Training vs Inference

Training:

\`\`\`
Training Data
      ↓
Learning Process
      ↓
Trained Model
\`\`\`

Inference:

\`\`\`
New Input
    ↓
Trained Model
    ↓
Prediction / Output
\`\`\`

For example, during training a model may process many examples.

During inference, the trained model processes new input.

These are different stages of an AI system.

---

# 24. Why Training and Inference Matter

Training may require:

- datasets,
- preprocessing,
- computational resources,
- experiments,
- evaluation,
- model storage.

Inference may require:

- APIs,
- application integration,
- low latency,
- scaling,
- monitoring,
- security.

Therefore an AI application must consider more than the model itself.

---

# 25. Model vs AI Application

A model is not the same as a complete AI application.

A model may perform:

\`\`\`
Input
 ↓
Prediction
\`\`\`

A complete AI application may contain:

\`\`\`
User Interface
      ↓
Input Validation
      ↓
Application Logic
      ↓
Data Processing
      ↓
AI Model
      ↓
Output Validation
      ↓
Response
\`\`\`

Therefore:

\`\`\`
AI Model
+
Software
+
Data
+
Infrastructure
=
AI Application
\`\`\`

This distinction becomes increasingly important in AI engineering.

---

# 26. Modern AI Applications

A modern AI application can combine several techniques.

For example:

\`\`\`
User
 ↓
Application
 ↓
Business Rules
 ↓
Search / Retrieval
 ↓
Machine Learning
 ↓
Generative AI
 ↓
Validation
 ↓
Response
\`\`\`

Not every application needs every component.

The architecture should be selected according to the problem.

---

# 27. Example: Educational Platform

Consider an AI-powered learning platform.

Traditional programming can handle:

\`\`\`
Authentication
Course Access
Navigation
Completion Rules
Permissions
\`\`\`

Machine Learning can handle:

\`\`\`
Course Recommendation
Prediction
Learner Analytics
\`\`\`

Deep Learning can potentially handle:

\`\`\`
Language Understanding
Speech Processing
Image Processing
\`\`\`

Generative AI can handle:

\`\`\`
Explanations
Summaries
Practice Questions
Content Generation
\`\`\`

This demonstrates that a single application can combine multiple
technologies.

---

# 28. Example: Customer Support

A modern customer-support application could use:

\`\`\`
Customer Message
       ↓
Classification
       ↓
Knowledge Retrieval
       ↓
Generative AI
       ↓
Response Validation
       ↓
Customer
\`\`\`

Different components perform different tasks.

For example:

- classification determines the issue category,
- retrieval finds relevant information,
- generation creates a response,
- validation checks the result.

---

# 29. Choosing the Appropriate Approach

An AI engineer should not start by asking:

\`\`\`
"Which model should I use?"
\`\`\`

A better process is:

\`\`\`
Understand the Problem
        ↓
Identify the Task
        ↓
Understand Available Data
        ↓
Determine Requirements
        ↓
Select an Approach
        ↓
Build
        ↓
Evaluate
\`\`\`

Possible approaches include:

- rules,
- search,
- optimization,
- machine learning,
- deep learning,
- generative AI,
- hybrid systems.

---

# 30. When Rules Are Appropriate

Rules are useful when:

- logic is clearly defined,
- behavior is deterministic,
- requirements are stable,
- explicit control is required,
- explainability is important.

Example:

\`\`\`
IF balance < 0
THEN display warning
\`\`\`

There is no need for Machine Learning to implement this rule.

---

# 31. When Machine Learning Is Appropriate

Machine Learning can be useful when:

- historical data is available,
- patterns exist in the data,
- manually writing rules is difficult,
- prediction is required.

Examples include:

- demand prediction,
- customer classification,
- fraud detection,
- recommendation,
- forecasting.

---

# 32. When Deep Learning Is Appropriate

Deep Learning can be particularly useful when:

- data is complex,
- representations are difficult to design manually,
- large datasets are available,
- neural networks are appropriate for the task.

Examples include:

- image recognition,
- speech recognition,
- language processing,
- complex perception tasks,
- many modern generative applications.

However, Deep Learning is not automatically the best solution.

Engineering constraints must also be considered.

---

# 33. Practical Python — Approach Classifier

We can create a small educational classifier.

\`\`\`python
def describe_approach(
    uses_rules,
    learns_from_data,
    uses_neural_network
):

    if uses_neural_network:
        return "Deep Learning"

    if learns_from_data:
        return "Machine Learning"

    if uses_rules:
        return "Rule-Based AI"

    return "Further analysis required"


print(
    describe_approach(
        True,
        False,
        False
    )
)

print(
    describe_approach(
        False,
        True,
        False
    )
)

print(
    describe_approach(
        False,
        True,
        True
    )
)
\`\`\`

Output:

\`\`\`
Rule-Based AI
Machine Learning
Deep Learning
\`\`\`

This is an educational representation.

Real AI systems can combine several approaches.

---

# 34. Practical Python — Represent the Hierarchy

The conceptual hierarchy can be represented using dictionaries.

\`\`\`python
ai_hierarchy = {
    "Artificial Intelligence": [
        "Rule-Based AI",
        "Search",
        "Machine Learning"
    ],

    "Machine Learning": [
        "Regression",
        "Classification",
        "Clustering",
        "Deep Learning"
    ],

    "Deep Learning": [
        "Neural Networks",
        "Computer Vision",
        "Language Models"
    ]
}


for category, approaches in ai_hierarchy.items():

    print(category)

    for approach in approaches:
        print("  -", approach)
\`\`\`

Output:

\`\`\`
Artificial Intelligence
  - Rule-Based AI
  - Search
  - Machine Learning

Machine Learning
  - Regression
  - Classification
  - Clustering
  - Deep Learning

Deep Learning
  - Neural Networks
  - Computer Vision
  - Language Models
\`\`\`

This demonstrates how a conceptual structure can also be represented
programmatically.

---

# 35. Practical Python — Prediction and Error

Let's create a simple prediction experiment.

\`\`\`python
def predict(x, weight, bias):
    return weight * x + bias


def absolute_error(actual, predicted):
    return abs(actual - predicted)


weight = 2
bias = 5

data = [
    (10, 25),
    (15, 35),
    (20, 45),
]


for x, actual in data:

    prediction = predict(x, weight, bias)

    error = absolute_error(
        actual,
        prediction
    )

    print(
        "Input:",
        x,
        "Prediction:",
        prediction,
        "Actual:",
        actual,
        "Error:",
        error
    )
\`\`\`

This experiment demonstrates:

- input,
- model parameters,
- prediction,
- actual value,
- error.

Later, Machine Learning will replace manually selected parameters with
actual learning procedures.

---

# 36. Practical Experiment — Change the Parameters

Using the previous program, change:

\`\`\`
weight = 2
bias = 5
\`\`\`

to:

\`\`\`
weight = 3
bias = 2
\`\`\`

Run the program again.

Observe how the predictions change.

This demonstrates that model parameters directly influence predictions.

---

# 37. Practical Task — AI, ML and DL Classification

Classify the following systems:

### System A

A program grants access based on user roles.

### System B

A model predicts product demand from historical sales.

### System C

A neural network identifies objects in images.

### System D

A system generates a product description.

### System E

A program searches possible paths through a maze.

For each system, identify:

- task,
- approach,
- whether learning is involved,
- whether Deep Learning is involved.

---

# 38. Practical Task — Build a Concept Map

Create a Python structure representing:

\`\`\`
AI
├── Rule-Based AI
├── Search
├── Machine Learning
│   ├── Regression
│   ├── Classification
│   └── Deep Learning
└── Generative AI
\`\`\`

Then write a program that prints the structure.

---

# 39. Practical Task — Prediction Experiment

Create a Python program that:

1. defines a prediction function,
2. accepts multiple input values,
3. produces predictions,
4. stores actual values,
5. calculates absolute errors,
6. displays the results.

Then modify the parameters and compare the results.

---

# 40. Practical Task — AI Approach Analyzer

Create an analyzer that accepts:

\`\`\`
application_name
task
uses_rules
learns_from_data
uses_neural_network
generates_content
\`\`\`

The program should identify:

- likely approach,
- capability,
- whether learning is involved,
- whether Deep Learning is involved,
- whether generation is involved.

Example:

\`\`\`
Application:
Customer Message Classifier

Capability:
Classification

Learns From Data:
Yes

Deep Learning:
Possible

Generation:
No
\`\`\`

---

# 41. Challenge — AI System Classifier

Build a Python program that analyzes at least five AI applications.

Each application should contain:

\`\`\`
name
task
data_type
uses_rules
learns_from_data
uses_neural_network
generates_content
\`\`\`

The program should produce a summary such as:

\`\`\`
Application: Fraud Detection

Task: Classification

Primary Approach: Machine Learning

Learns From Data: Yes

Deep Learning: No

Generation: No
\`\`\`

For applications using multiple techniques, explain why multiple
approaches may be required.

---

# Common Mistakes

## Mistake 1 — AI and Machine Learning Are Synonyms

Incorrect.

Machine Learning is one major approach within AI.

---

## Mistake 2 — Every AI System Must Learn

Incorrect.

Rule-based, search-based, and planning systems can operate without
Machine Learning.

---

## Mistake 3 — Machine Learning Means Deep Learning

Incorrect.

Machine Learning includes many methods that are not Deep Learning.

---

## Mistake 4 — Deep Learning Means Generative AI

Incorrect.

Deep Learning is a learning approach.

Generative AI describes systems capable of generating content.

---

## Mistake 5 — Prediction and Learning Are the Same

Incorrect.

A prediction function can use fixed parameters without performing any
learning.

Learning requires a process for obtaining or updating model parameters.

---

## Mistake 6 — Training and Inference Are the Same

Incorrect.

Training learns model parameters.

Inference uses the trained model to process new input.

---

## Mistake 7 — The Most Advanced Technique Is Always the Best

Incorrect.

The appropriate approach depends on:

- problem,
- data,
- accuracy,
- cost,
- latency,
- interpretability,
- deployment constraints,
- security,
- other requirements.

---

## Mistake 8 — A Model Is a Complete AI Application

Incorrect.

A complete AI application requires surrounding software, data handling,
validation, testing, security, and infrastructure.

---

# Quick Check

### Question 1

What is the broadest concept among AI, ML, and DL?

Answer:

Artificial Intelligence.

---

### Question 2

What is Machine Learning?

Answer:

Machine Learning is a major AI approach in which algorithms learn useful
patterns or relationships from data.

---

### Question 3

What is Deep Learning?

Answer:

Deep Learning is a specialized area of Machine Learning that primarily
uses multilayer neural networks.

---

### Question 4

Is every AI system a Machine Learning system?

Answer:

No.

AI also includes approaches such as rules, search, planning, and
optimization.

---

### Question 5

Is every Machine Learning system a Deep Learning system?

Answer:

No.

Deep Learning is one specialized area within Machine Learning.

---

### Question 6

What is the difference between training and inference?

Answer:

Training learns or updates model parameters using data, while inference
uses the trained model to produce outputs for new inputs.

---

### Question 7

What is Generative AI?

Answer:

Generative AI refers to AI systems capable of generating new content such
as text, code, images, audio, video, or structured information.

---

### Question 8

Is Generative AI the same as Deep Learning?

Answer:

No.

Many modern Generative AI systems use Deep Learning, but the concepts
are different.

---

### Question 9

What is the difference between a capability and an approach?

Answer:

A capability describes what a system does, such as classification or
generation. An approach describes how the system may accomplish the task,
such as rules, Machine Learning, or Deep Learning.

---

### Question 10

Why should an AI engineer not automatically choose Deep Learning?

Answer:

Because the correct approach depends on the problem, available data,
accuracy requirements, cost, latency, interpretability, deployment
constraints, and other engineering requirements.

---

# Key Takeaways

- Artificial Intelligence is the broadest concept.
- Machine Learning is a major approach within AI.
- Deep Learning is a specialized area within Machine Learning.
- AI does not always require Machine Learning.
- Machine Learning learns useful patterns from data.
- Deep Learning primarily uses multilayer neural networks.
- Machine Learning includes many techniques besides Deep Learning.
- Training and inference are different stages.
- A model is not the same as a complete AI application.
- Generative AI focuses on generating new content.
- Generative AI and Deep Learning are related but not identical concepts.
- Capabilities and implementation approaches should not be confused.
- Rules are useful for deterministic and explicitly defined decisions.
- Machine Learning is useful when patterns need to be learned from data.
- Deep Learning is useful for many complex data and representation-learning
  problems.
- Modern AI applications can combine traditional programming, search,
  Machine Learning, Deep Learning, and Generative AI.
- AI engineering requires understanding both models and the surrounding
  software system.
- The correct AI approach should be selected based on the problem and
  system requirements.

The next lesson will examine real-world AI applications and how different
AI techniques are used across industries.
`,

  practice: [
    "Build a Python program representing the AI → Machine Learning → Deep Learning hierarchy.",
    "Create a rule-based AI system and explain why it does not require Machine Learning.",
    "Implement a simple mathematical prediction function using y = wx + b.",
    "Calculate absolute prediction errors for multiple examples.",
    "Modify model parameters and observe how predictions change.",
    "Classify five real-world systems as rule-based AI, search, Machine Learning, Deep Learning, or Generative AI.",
    "Create a capability-to-approach mapping using Python dictionaries.",
    "Build an AI Approach Analyzer that identifies the likely approach used by an application.",
    "Explain the difference between model training and inference.",
    "Design a conceptual architecture for an AI application combining traditional programming and AI techniques.",
  ],

  quickCheck: [
    {
      question: "What is the broadest concept among AI, ML, and DL?",
      answer: "Artificial Intelligence.",
    },
    {
      question: "What is Machine Learning?",
      answer:
        "Machine Learning is a major AI approach in which algorithms learn useful patterns or relationships from data.",
    },
    {
      question: "What is Deep Learning?",
      answer:
        "Deep Learning is a specialized area of Machine Learning that primarily uses multilayer neural networks.",
    },
    {
      question: "Is every AI system a Machine Learning system?",
      answer:
        "No. AI also includes approaches such as rules, search, planning, and optimization.",
    },
    {
      question: "Is every Machine Learning system a Deep Learning system?",
      answer:
        "No. Deep Learning is one specialized area within Machine Learning.",
    },
    {
      question: "What is the difference between training and inference?",
      answer:
        "Training learns or updates model parameters using data, while inference uses the trained model to produce outputs for new inputs.",
    },
    {
      question: "What is Generative AI?",
      answer:
        "Generative AI refers to AI systems capable of generating new content such as text, code, images, audio, video, or structured information.",
    },
    {
      question: "Is Generative AI the same as Deep Learning?",
      answer:
        "No. Many modern Generative AI systems use Deep Learning, but the concepts are different.",
    },
    {
      question: "What is the difference between a capability and an approach?",
      answer:
        "A capability describes what a system does, such as classification or generation. An approach describes how the system may accomplish the task, such as rules, Machine Learning, or Deep Learning.",
    },
    {
      question: "Why should an AI engineer not automatically choose Deep Learning?",
      answer:
        "Because the correct approach depends on the problem, available data, accuracy requirements, cost, latency, interpretability, deployment constraints, and other engineering requirements.",
    },
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson4",
    next: "/lesson/aiml/module1/lesson6",
    backToModule: "/lesson/aiml/module1/about",
  },
};