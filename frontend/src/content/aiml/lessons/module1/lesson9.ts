export const lesson9 = {
  id: "aiml-module1-lesson9",
  lessonNumber: 9,
  title: "AI Problem-Solving Approaches",
  moduleTitle: "Introduction to Artificial Intelligence",
  courseId: "aiml",
  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",
    currentLesson: 9,
    totalLessons: 10,

    previous: {
      label: "Lesson 08",
      href: "/lesson/aiml/module1/lesson8",
    },

    next: {
      label: "Lesson 10",
      href: "/lesson/aiml/module1/lesson10",
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
# AI Problem-Solving Approaches

Artificial Intelligence is fundamentally concerned with solving problems.

An AI system receives some form of input, represents the problem, applies
an appropriate method, and produces a useful result.

A simplified view is:

\`\`\`
Problem
   ↓
Problem Representation
   ↓
AI Approach
   ↓
Search / Rules / Learning / Optimization
   ↓
Solution
   ↓
Evaluation
\`\`\`

The most important idea in this lesson is that there is no single method
for solving every AI problem.

Different problems require different approaches.

For example:

\`\`\`
Deterministic Decision
        ↓
Rules

Path Finding
        ↓
Search

Prediction from Data
        ↓
Machine Learning

Content Generation
        ↓
Generative AI

Finding the Best Configuration
        ↓
Optimization
\`\`\`

An AI engineer must first understand the problem and then select an
appropriate approach.

---

# 1. What Is an AI Problem?

An AI problem is a problem where a system must perform some form of
intelligent behavior.

This may involve:

- deciding,
- predicting,
- searching,
- planning,
- recognizing,
- classifying,
- recommending,
- optimizing,
- understanding language,
- generating content.

For example:

\`\`\`
Problem:
Find the shortest route between two locations.
\`\`\`

This can be represented as a search or optimization problem.

Another example:

\`\`\`
Problem:
Predict whether a transaction is suspicious.
\`\`\`

This can be represented as a classification or anomaly-detection
problem.

---

# 2. Problem Definition Comes First

Before selecting an algorithm, define the problem clearly.

A useful process is:

\`\`\`
What is the problem?
        ↓
What is the input?
        ↓
What is the desired output?
        ↓
What constraints exist?
        ↓
What data is available?
        ↓
How will success be measured?
\`\`\`

This prevents technology-first decision making.

For example, saying:

\`\`\`
"We should use Machine Learning."
\`\`\`

is not a complete engineering decision.

A better statement is:

\`\`\`
"We need to predict product demand from historical sales data,
so a supervised learning approach may be appropriate."
\`\`\`

---

# 3. Input and Output

Every AI problem should have a clearly defined input and output.

For example:

\`\`\`
Input:
Customer transaction

Output:
Risk classification
\`\`\`

Another:

\`\`\`
Input:
Image

Output:
Object classification
\`\`\`

Another:

\`\`\`
Input:
User question

Output:
Generated response
\`\`\`

Representing the problem this way makes system design easier.

---

# 4. State, Action and Goal

Many classical AI problems can be described using:

- State
- Action
- Goal

A state represents the current situation.

An action represents something the system can do.

A goal represents the desired final situation.

For example, in a pathfinding problem:

\`\`\`
State:
Current location

Action:
Move to a neighboring location

Goal:
Reach destination
\`\`\`

This creates a structured representation of the problem.

---

# 5. Example — Route Planning

Suppose an application must find a route from location A to location B.

The problem can be represented as:

\`\`\`
Initial State:
Location A

Actions:
Move between connected locations

Goal:
Location B

Cost:
Distance or travel time
\`\`\`

The system can then search through possible routes.

This is a classical AI problem-solving approach.

---

# 6. Search as Problem Solving

Search means exploring possible solutions until a suitable solution is
found.

A simplified representation is:

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

Search is useful when the system must determine a sequence of actions.

Examples include:

- pathfinding,
- puzzles,
- planning,
- route selection,
- game decision systems.

The detailed search algorithms will be studied in Module 02.

---

# 7. Rule-Based Problem Solving

Some problems can be solved using explicit rules.

For example:

\`\`\`
IF temperature > 30
THEN turn fan ON
\`\`\`

Another:

\`\`\`
IF account is locked
THEN request verification
\`\`\`

Rule-based systems are useful when the relationship between conditions
and actions is clearly defined.

The basic structure is:

\`\`\`
Input
 ↓
Condition
 ↓
Rule
 ↓
Action
\`\`\`

---

# 8. Practical Python — Rule-Based Decision

\`\`\`python
def recommend_action(temperature):

    if temperature > 30:
        return "Turn fan ON"

    return "Turn fan OFF"


print(recommend_action(35))
print(recommend_action(25))
\`\`\`

Output:

\`\`\`
Turn fan ON
Turn fan OFF
\`\`\`

This is a simple deterministic problem-solving approach.

---

# 9. Machine Learning as Problem Solving

Machine Learning approaches problems differently.

Instead of manually specifying every rule, the system learns patterns
from examples.

Traditional programming:

\`\`\`
Rules + Input
     ↓
Output
\`\`\`

Machine Learning:

\`\`\`
Data + Expected Outputs
          ↓
        Learning
          ↓
         Model
          ↓
     New Input
          ↓
      Prediction
\`\`\`

This makes Machine Learning useful when the required relationships are
difficult to describe manually.

---

# 10. Example — Classification

Suppose we want to classify emails.

Possible inputs include:

- message length,
- sender information,
- word patterns,
- links,
- previous examples.

The desired output might be:

\`\`\`
Spam
or
Not Spam
\`\`\`

The problem can be represented as:

\`\`\`
Email Data
    ↓
Features
    ↓
Machine Learning Model
    ↓
Classification
\`\`\`

---

# 11. Example — Prediction

Suppose we want to predict product demand.

Input:

\`\`\`
Historical Sales
Price
Season
Promotions
\`\`\`

Output:

\`\`\`
Expected Demand
\`\`\`

The workflow becomes:

\`\`\`
Historical Data
      ↓
Learning
      ↓
Model
      ↓
Future Inputs
      ↓
Demand Prediction
\`\`\`

This is a predictive problem.

---

# 12. Optimization as Problem Solving

Optimization focuses on finding a good or best solution according to
some objective.

For example:

\`\`\`
Find the shortest route.
\`\`\`

or:

\`\`\`
Minimize delivery cost.
\`\`\`

or:

\`\`\`
Maximize production efficiency.
\`\`\`

An optimization problem can be represented as:

\`\`\`
Possible Solutions
       ↓
Evaluate Solutions
       ↓
Objective Function
       ↓
Best / Suitable Solution
\`\`\`

Optimization is different from simply predicting an output.

---

# 13. Search vs Optimization

Search explores possible states or solutions.

Optimization adds an objective that allows solutions to be compared.

For example:

\`\`\`
Search:
Find a route from A to B.
\`\`\`

Optimization:

\`\`\`
Find the shortest route from A to B.
\`\`\`

The second problem introduces an objective:

\`\`\`
Minimize Distance
\`\`\`

Other objectives could include:

\`\`\`
Minimize Time
Minimize Cost
Minimize Energy
Maximize Profit
\`\`\`

---

# 14. Probabilistic Reasoning

Many real-world problems involve uncertainty.

Instead of saying:

\`\`\`
The event WILL happen.
\`\`\`

a system may estimate:

\`\`\`
Probability of event = 0.75
\`\`\`

Probability provides a mathematical framework for reasoning about
uncertain events.

Examples include:

- weather prediction,
- risk estimation,
- medical decision support,
- fraud detection,
- recommendation.

The important distinction is:

\`\`\`
Probability
≠
Certainty
\`\`\`

---

# 15. Practical Python — Simple Probability

Suppose a system estimates the probability of an event.

\`\`\`python
probability = 0.75

if probability >= 0.80:
    print("High confidence")
elif probability >= 0.50:
    print("Moderate confidence")
else:
    print("Low confidence")
\`\`\`

Output:

\`\`\`
Moderate confidence
\`\`\`

This is a simplified example of using probability in decision logic.

A real AI model requires proper statistical interpretation and
calibration.

---

# 16. Recommendation as Problem Solving

Recommendation systems solve the problem of selecting useful items for a
user.

Examples:

- courses,
- products,
- videos,
- articles,
- music.

A simplified workflow is:

\`\`\`
User Information
      ↓
Candidate Items
      ↓
Scoring
      ↓
Ranking
      ↓
Recommendation
\`\`\`

The system is not simply predicting one class.

It is selecting and ranking possible choices.

---

# 17. Planning as Problem Solving

Planning involves determining a sequence of actions that achieves a goal.

For example:

\`\`\`
Goal:
Deliver all packages.
\`\`\`

The system may need to determine:

\`\`\`
Which vehicle?
Which locations?
What order?
Which route?
When should each action occur?
\`\`\`

A simplified planning problem is:

\`\`\`
Initial State
      ↓
Possible Actions
      ↓
Future States
      ↓
Goal
\`\`\`

Planning is closely related to search and optimization.

---

# 18. Constraint-Based Problem Solving

Some problems contain constraints.

For example:

\`\`\`
Classroom Scheduling
\`\`\`

Constraints might include:

- one teacher cannot teach two classes simultaneously,
- one room cannot host two classes simultaneously,
- a class requires a specific room,
- certain subjects must occur at specific times.

The system must find a schedule that satisfies the constraints.

Conceptually:

\`\`\`
Requirements
     ↓
Constraints
     ↓
Possible Solutions
     ↓
Valid Solution
\`\`\`

---

# 19. Practical Python — Simple Constraint Check

\`\`\`python
def is_valid_schedule(room_available, teacher_available):

    if room_available and teacher_available:
        return True

    return False


print(is_valid_schedule(True, True))
print(is_valid_schedule(True, False))
\`\`\`

Output:

\`\`\`
True
False
\`\`\`

This simple example demonstrates how constraints can be represented
programmatically.

---

# 20. Knowledge-Based Problem Solving

Some AI systems use explicit knowledge.

Knowledge can be represented using:

- facts,
- rules,
- relationships,
- structured information.

For example:

\`\`\`
Fact:
Birds have wings.

Fact:
Sparrow is a bird.

Rule:
If something is a bird,
it belongs to the bird category.
\`\`\`

A knowledge-based system can reason over such information.

This approach was especially important in symbolic AI and expert systems.

---

# 21. Expert Systems

An expert system attempts to reproduce parts of expert decision-making
using structured knowledge and rules.

A simplified architecture is:

\`\`\`
Knowledge Base
      ↓
Inference Engine
      ↓
Decision
      ↓
Explanation
\`\`\`

The knowledge base contains information.

The inference engine applies reasoning rules.

Expert systems were an important stage in the history of AI.

Modern systems often combine symbolic methods with Machine Learning.

---

# 22. Generative AI as Problem Solving

Generative AI can solve problems involving content generation and
transformation.

Examples include:

- generating explanations,
- summarizing documents,
- generating code,
- transforming text,
- creating structured responses.

A simplified workflow is:

\`\`\`
User Input
    ↓
Context
    ↓
Generative Model
    ↓
Generated Output
    ↓
Validation
\`\`\`

Generative AI is different from classical search and rule-based systems.

The detailed architecture of Generative AI will be studied in the
Generative AI & LLM Engineering course.

---

# 23. Hybrid Problem Solving

Modern AI systems often combine several approaches.

For example:

\`\`\`
User Request
      ↓
Input Validation
      ↓
Rule-Based Filtering
      ↓
Machine Learning
      ↓
Retrieval
      ↓
Generative AI
      ↓
Output Validation
      ↓
Final Response
\`\`\`

Each component solves a different part of the problem.

This is common in modern AI applications.

---

# 24. Choosing the Right Approach

A useful decision process is:

\`\`\`
Start
  ↓
Is the problem deterministic?
  ↓
Yes → Rules / Traditional Programming
  ↓
No
  ↓
Does it require finding a sequence of actions?
  ↓
Yes → Search / Planning
  ↓
No
  ↓
Is there an objective to optimize?
  ↓
Yes → Optimization
  ↓
No
  ↓
Can patterns be learned from data?
  ↓
Yes → Machine Learning
  ↓
No
  ↓
Does the problem require content generation?
  ↓
Yes → Generative AI
\`\`\`

This is a conceptual decision framework, not a strict rule.

Real systems can combine multiple approaches.

---

# 25. Problem Representation

A problem must be represented in a form that the computer can process.

Different problems require different representations.

Examples:

\`\`\`
Pathfinding
    ↓
Graph

Classification
    ↓
Features + Labels

Text Generation
    ↓
Tokens / Context

Scheduling
    ↓
Variables + Constraints

Optimization
    ↓
Variables + Objective Function
\`\`\`

The representation strongly influences which algorithms can be used.

---

# 26. Graph Representation

Many AI problems can be represented using graphs.

A graph contains:

- nodes,
- edges.

For example:

\`\`\`
A ─── B
│     │
│     │
C ─── D
\`\`\`

Nodes can represent states or locations.

Edges can represent possible actions or connections.

Graphs are useful for:

- route planning,
- search,
- networks,
- state spaces,
- relationships.

Detailed graph-based search will be studied in Module 02.

---

# 27. Feature Representation

Machine Learning systems often represent an object using features.

For example, a product could be represented using:

\`\`\`
Price
Rating
Category
Sales
Discount
\`\`\`

Mathematically, this can be represented as a vector:

\`\`\`
x = [price, rating, sales, discount]
\`\`\`

The model uses these numerical representations to learn patterns.

---

# 28. Practical Python — Feature Representation

\`\`\`python
product = {
    "price": 500,
    "rating": 4.5,
    "sales": 1200,
    "discount": 10
}

features = [
    product["price"],
    product["rating"],
    product["sales"],
    product["discount"]
]

print(features)
\`\`\`

Output:

\`\`\`
[500, 4.5, 1200, 10]
\`\`\`

This demonstrates a basic transition from structured information to a
feature representation.

---

# 29. Objective Functions

Optimization problems require an objective.

Suppose we want to minimize delivery cost.

We can define:

\`\`\`
Objective = Delivery Cost
\`\`\`

The system searches for a solution that reduces this value.

For example:

\`\`\`
Route A → Cost 100
Route B → Cost 80
Route C → Cost 120
\`\`\`

The preferred solution is:

\`\`\`
Route B
\`\`\`

because it has the lowest cost.

---

# 30. Practical Python — Simple Optimization

\`\`\`python
routes = {
    "Route A": 100,
    "Route B": 80,
    "Route C": 120
}

best_route = min(
    routes,
    key=routes.get
)

print("Best route:", best_route)
print("Cost:", routes[best_route])
\`\`\`

Output:

\`\`\`
Best route: Route B
Cost: 80
\`\`\`

This is a very simple optimization example.

Real optimization problems can involve many variables and constraints.

---

# 31. Learning vs Searching

Search and Machine Learning solve problems differently.

Search:

\`\`\`
Known Problem Structure
       ↓
Explore Possible Solutions
       ↓
Find Solution
\`\`\`

Machine Learning:

\`\`\`
Examples / Data
       ↓
Learn Pattern
       ↓
Model
       ↓
Predict New Case
\`\`\`

A system can also combine both.

For example:

\`\`\`
Machine Learning
      ↓
Estimate Useful Choices
      ↓
Search
      ↓
Select Final Action
\`\`\`

---

# 32. Rules vs Machine Learning

Rules:

\`\`\`
IF condition
THEN action
\`\`\`

Machine Learning:

\`\`\`
Examples
   ↓
Learning
   ↓
Model
   ↓
Prediction
\`\`\`

Rules are useful when logic is explicit.

Machine Learning is useful when patterns are difficult to manually encode
and sufficient data is available.

---

# 33. Search vs Machine Learning

Search can operate without learning from historical examples.

For example:

\`\`\`
Find a path through a known graph.
\`\`\`

Machine Learning can learn from historical data.

For example:

\`\`\`
Predict travel time from historical traffic data.
\`\`\`

A real transportation system may use both:

\`\`\`
ML → Predict Travel Time
       ↓
Search / Optimization → Select Route
\`\`\`

---

# 34. Practical Python — Combining Prediction and Selection

A simple educational example:

\`\`\`python
predicted_times = {
    "Route A": 40,
    "Route B": 30,
    "Route C": 50
}

best_route = min(
    predicted_times,
    key=predicted_times.get
)

print("Recommended route:", best_route)
print(
    "Predicted time:",
    predicted_times[best_route]
)
\`\`\`

Output:

\`\`\`
Recommended route: Route B
Predicted time: 30
\`\`\`

Here, prediction and selection are separate stages.

---

# 35. AI Problem-Solving Pipeline

A general AI problem-solving pipeline is:

\`\`\`
1. Problem Definition
        ↓
2. Input Identification
        ↓
3. Output Definition
        ↓
4. Problem Representation
        ↓
5. Approach Selection
        ↓
6. Implementation
        ↓
7. Evaluation
        ↓
8. Deployment
        ↓
9. Monitoring
\`\`\`

This connects the ideas from the previous lessons.

---

# 36. Step 1 — Define the Problem

A strong problem definition should explain:

- what needs to be solved,
- who needs the solution,
- what input is available,
- what output is required,
- what constraints exist.

Example:

\`\`\`
Problem:
Predict whether a product will have high demand next week.
\`\`\`

This is clearer than:

\`\`\`
Build an AI system for the store.
\`\`\`

---

# 37. Step 2 — Identify Inputs

Identify what information the system can use.

For demand prediction:

\`\`\`
Historical Sales
Price
Promotion
Season
Day of Week
\`\`\`

Inputs should be relevant to the problem.

More data is not automatically better.

---

# 38. Step 3 — Define the Output

The output should be measurable.

Examples:

\`\`\`
Classification:
Spam / Not Spam

Regression:
Expected Sales = 450

Recommendation:
Top 5 Courses

Search:
Selected Path

Generation:
Generated Explanation
\`\`\`

A clearly defined output makes evaluation easier.

---

# 39. Step 4 — Choose the Representation

The representation depends on the problem.

Examples:

\`\`\`
Search Problem
→ State Space / Graph

ML Problem
→ Features + Labels

Optimization Problem
→ Variables + Objective + Constraints

Generative AI Problem
→ Input + Context + Output Structure
\`\`\`

Good representation makes the problem easier to solve.

---

# 40. Step 5 — Select the Approach

Ask:

\`\`\`
Can rules solve it?
Can search solve it?
Is optimization required?
Can data-driven learning solve it?
Is generation required?
Should multiple approaches be combined?
\`\`\`

Choose based on requirements rather than popularity.

---

# 41. Step 6 — Implement

Implementation converts the selected approach into software.

This may involve:

- Python,
- NumPy,
- Pandas,
- Matplotlib,
- scikit-learn,
- APIs,
- databases,
- application logic.

In this course, Python is the main programming language used for
AI-oriented experimentation.

---

# 42. Step 7 — Evaluate

Evaluation determines whether the solution works.

For example:

\`\`\`
Prediction
    ↓
Compare with Actual Result
    ↓
Calculate Metric
    ↓
Analyze Errors
\`\`\`

Evaluation must be connected to the original objective.

A model can have high accuracy but still be unsuitable if accuracy is not
the correct business or technical objective.

---

# 43. Step 8 — Deploy

A useful AI solution must eventually operate inside an application.

A simplified architecture is:

\`\`\`
User
 ↓
Application
 ↓
Backend
 ↓
AI System
 ↓
Result
 ↓
Application
 ↓
User
\`\`\`

The deployment process will be explored in more depth in later courses.

---

# 44. Step 9 — Monitor

After deployment, the system should be monitored.

Monitor:

- performance,
- errors,
- data quality,
- latency,
- availability,
- changing data patterns.

A deployed AI system is not necessarily finished.

It may require continuous improvement.

---

# 45. Practical Python — Complete Problem-Solving Example

Consider a simple product classification problem.

\`\`\`python
products = [
    {"name": "Laptop", "price": 70000},
    {"name": "Mouse", "price": 800},
    {"name": "Monitor", "price": 15000}
]


def classify_product(price):

    if price >= 50000:
        return "Premium"

    if price >= 10000:
        return "Mid-range"

    return "Budget"


for product in products:

    category = classify_product(
        product["price"]
    )

    print(
        product["name"],
        "->",
        category
    )
\`\`\`

Output:

\`\`\`
Laptop -> Premium
Mouse -> Budget
Monitor -> Mid-range
\`\`\`

This example demonstrates:

\`\`\`
Input Data
    ↓
Problem Representation
    ↓
Decision Logic
    ↓
Output
\`\`\`

---

# 46. Improving the Example

Suppose the store wants to classify products using multiple features.

We might use:

\`\`\`
Price
Rating
Sales
Discount
\`\`\`

The problem now becomes more complex.

Instead of manually writing every rule, a Machine Learning model could
potentially learn patterns from labeled examples.

The conceptual transition is:

\`\`\`
Manual Rules
     ↓
More Complex Relationships
     ↓
Training Data
     ↓
Machine Learning
\`\`\`

This is one reason Machine Learning is useful.

---

# 47. A General AI Decision Framework

When facing a new problem, ask these questions:

### Question 1

What exactly needs to be solved?

### Question 2

What are the inputs?

### Question 3

What should the output look like?

### Question 4

Is the problem deterministic?

### Question 5

Does it require searching through possibilities?

### Question 6

Does it require optimization?

### Question 7

Is sufficient data available for learning?

### Question 8

Does the system need generation?

### Question 9

What constraints exist?

### Question 10

How will success be evaluated?

### Question 11

What happens if the system is wrong?

### Question 12

Does the system require human oversight?

These questions help transform a vague idea into an engineering problem.

---

# 48. Practical Task — Classify the Problem

For each problem, identify the most appropriate primary approach.

### Problem A

Turn a light ON when motion is detected.

Possible approach:

Traditional programming / rules.

### Problem B

Find the shortest route between two locations.

Possible approach:

Search / optimization.

### Problem C

Predict house prices from historical data.

Possible approach:

Machine Learning.

### Problem D

Recommend courses based on learner activity.

Possible approach:

Recommendation / Machine Learning.

### Problem E

Generate a summary of a document.

Possible approach:

Generative AI.

Do not assume that only one technology is possible.

---

# 49. Practical Task — Problem Decomposition

Choose a real-world application and divide it into smaller problems.

Example:

\`\`\`
Smart Store
     ↓
Demand Prediction
     ↓
Machine Learning

Inventory Rules
     ↓
Traditional Programming

Restocking Selection
     ↓
Optimization

Product Explanation
     ↓
Generative AI
\`\`\`

Explain why each approach is appropriate.

---

# 50. Practical Task — Build a Decision Matrix in Python

Create a Python list containing different AI problems.

Each item should contain:

\`\`\`
problem
input
output
approach
reason
\`\`\`

Example:

\`\`\`python
problems = [
    {
        "problem": "Find shortest route",
        "input": "Graph",
        "output": "Path",
        "approach": "Search",
        "reason": "Multiple possible paths exist"
    },
    {
        "problem": "Predict sales",
        "input": "Historical sales",
        "output": "Future demand",
        "approach": "Machine Learning",
        "reason": "Patterns can be learned from data"
    }
]
\`\`\`

Write a program that prints the problem and selected approach.

---

# 51. Challenge — AI Problem Solver

Build a Python program that accepts an AI problem description.

Represent at least five problem types:

\`\`\`
rule_based
search
optimization
machine_learning
generative_ai
\`\`\`

Create a function that recommends a primary approach based on the
problem type.

Example:

\`\`\`python
def recommend_approach(problem_type):

    approaches = {
        "rule_based": "Traditional Programming / Rules",
        "search": "Search",
        "optimization": "Optimization",
        "machine_learning": "Machine Learning",
        "generative_ai": "Generative AI"
    }

    return approaches.get(
        problem_type,
        "Needs further analysis"
    )


print(
    recommend_approach("search")
)

print(
    recommend_approach("machine_learning")
)
\`\`\`

Output:

\`\`\`
Search
Machine Learning
\`\`\`

Extend the program so that it also explains why the approach was chosen.

---

# 52. Challenge Extension — Hybrid AI Planner

Design a system that combines multiple approaches.

Example:

\`\`\`
Problem:
Smart Delivery Platform
\`\`\`

Required components:

\`\`\`
Demand Prediction
      ↓
Machine Learning

Route Selection
      ↓
Search / Optimization

Delivery Rules
      ↓
Traditional Programming

Customer Explanation
      ↓
Generative AI
\`\`\`

Create a Python representation of this architecture.

Then explain:

- what each component does,
- what input it receives,
- what output it produces,
- how components interact.

---

# Common Mistakes

## Mistake 1 — Choosing Technology Before Defining the Problem

Do not start with:

\`\`\`
Which AI model should I use?
\`\`\`

Start with:

\`\`\`
What problem am I solving?
\`\`\`

---

## Mistake 2 — Assuming Every Problem Requires Machine Learning

Some problems are better solved using rules, search, or optimization.

---

## Mistake 3 — Confusing Prediction With Decision

A model can provide a prediction while another component makes the final
decision.

For example:

\`\`\`
ML Prediction
      ↓
Decision Rules
      ↓
Final Action
\`\`\`

---

## Mistake 4 — Ignoring Constraints

Real-world problems often have limitations involving:

- time,
- cost,
- resources,
- capacity,
- privacy,
- security.

A solution must respect these constraints.

---

## Mistake 5 — Ignoring Evaluation

A solution is not complete simply because it produces an output.

The output must be evaluated against the objective.

---

## Mistake 6 — Assuming One Technique Must Solve Everything

Modern AI applications often combine multiple approaches.

---

## Mistake 7 — Ignoring Failure Conditions

Ask:

\`\`\`
What happens if the prediction is wrong?
\`\`\`

This question becomes increasingly important as system risk increases.

---

# Quick Check

### Question 1

What should an AI engineer do before selecting an algorithm?

Answer:

Clearly define the problem, inputs, outputs, constraints, available data,
and evaluation criteria.

### Question 2

What are state, action, and goal?

Answer:

State describes the current situation, action describes something the
system can do, and goal describes the desired final state.

### Question 3

What is search?

Answer:

Search explores possible states or solutions to find a path or solution
that satisfies the problem requirements.

### Question 4

When are rules useful?

Answer:

Rules are useful when the relationship between conditions and actions is
explicit and deterministic.

### Question 5

How does Machine Learning differ from rule-based programming?

Answer:

Rule-based programming explicitly defines rules, while Machine Learning
learns patterns from examples or data.

### Question 6

What is optimization?

Answer:

Optimization attempts to find a good or best solution according to an
objective while considering relevant constraints.

### Question 7

What is probabilistic reasoning?

Answer:

Probabilistic reasoning uses probability to represent and reason about
uncertainty.

### Question 8

What is planning?

Answer:

Planning involves determining a sequence of actions that can achieve a
desired goal.

### Question 9

What is a hybrid AI system?

Answer:

A hybrid AI system combines multiple approaches such as rules, search,
Machine Learning, optimization, retrieval, or Generative AI.

### Question 10

Why is problem representation important?

Answer:

The representation determines how the problem can be processed and
which algorithms or approaches are suitable.

### Question 11

Does every AI problem require Machine Learning?

Answer:

No. Rules, search, optimization, planning, probabilistic reasoning, and
other approaches may be more appropriate depending on the problem.

### Question 12

What is the central principle of AI problem solving?

Answer:

Understand the problem first, represent it appropriately, select a
suitable approach, implement it, evaluate it, and monitor the resulting
system.

---

# Key Takeaways

- AI is fundamentally concerned with solving problems.
- A problem should be clearly defined before selecting a technology.
- Inputs, outputs, constraints, and evaluation criteria should be
  identified.
- State, action, and goal are important concepts in classical AI
  problem-solving.
- Search explores possible states or solutions.
- Rules are useful for deterministic decision-making.
- Machine Learning learns patterns from data.
- Optimization searches for good or best solutions according to an
  objective.
- Probabilistic reasoning helps represent uncertainty.
- Recommendation systems select and rank useful choices.
- Planning determines sequences of actions that achieve goals.
- Constraint-based problems require solutions that satisfy specified
  limitations.
- Knowledge-based systems use facts and rules to support reasoning.
- Generative AI can solve content-generation and transformation tasks.
- Modern applications often combine multiple approaches.
- Problem representation is fundamental to algorithm selection.
- Graphs are useful representations for search and state-space problems.
- Features provide structured representations for Machine Learning.
- Optimization requires an objective and may require constraints.
- Search and Machine Learning can work together.
- Prediction and decision-making are not necessarily the same operation.
- AI systems should be evaluated against their actual objectives.
- Production systems require deployment, monitoring, and improvement.
- The best AI solution is not necessarily the most complicated one.

The complete problem-solving mindset is:

\`\`\`
Problem
   ↓
Definition
   ↓
Inputs + Outputs
   ↓
Constraints
   ↓
Representation
   ↓
Approach Selection
   ↓
Implementation
   ↓
Evaluation
   ↓
Deployment
   ↓
Monitoring
   ↓
Improvement
\`\`\`

The next lesson will bring the concepts of this module together by
building a simple rule-based intelligent system and understanding how a
complete AI problem can be converted into working software.
`,

  practice: [
    "Choose five real-world problems and classify each as primarily rule-based, search, optimization, Machine Learning, Generative AI, or hybrid.",
    "Define the state, actions, goal, and cost for a simple route-planning problem.",
    "Build a Python rule-based decision system for a practical application.",
    "Create a Python program that represents an AI problem using input, output, constraints, approach, and reason.",
    "Represent a small optimization problem in Python and identify the best solution according to an objective.",
    "Create a simple probability-based decision example and explain why probability does not mean certainty.",
    "Represent a real-world application as multiple smaller AI problems and select an approach for each.",
    "Create a Python feature representation for a small dataset.",
    "Compare search, rules, Machine Learning, optimization, and Generative AI for different problem types.",
    "Design a hybrid AI application that combines traditional programming with one or more AI approaches.",
  ],

  quickCheck: [
    {
      question: "What should an AI engineer do before selecting an algorithm?",
      answer:
        "Clearly define the problem, inputs, outputs, constraints, available data, and evaluation criteria.",
    },
    {
      question: "What are state, action, and goal?",
      answer:
        "State describes the current situation, action describes something the system can do, and goal describes the desired final state.",
    },
    {
      question: "What is search?",
      answer:
        "Search explores possible states or solutions to find a path or solution that satisfies the problem requirements.",
    },
    {
      question: "When are rules useful?",
      answer:
        "Rules are useful when the relationship between conditions and actions is explicit and deterministic.",
    },
    {
      question: "How does Machine Learning differ from rule-based programming?",
      answer:
        "Rule-based programming explicitly defines rules, while Machine Learning learns patterns from examples or data.",
    },
    {
      question: "What is optimization?",
      answer:
        "Optimization attempts to find a good or best solution according to an objective while considering relevant constraints.",
    },
    {
      question: "What is probabilistic reasoning?",
      answer:
        "Probabilistic reasoning uses probability to represent and reason about uncertainty.",
    },
    {
      question: "What is planning?",
      answer:
        "Planning involves determining a sequence of actions that can achieve a desired goal.",
    },
    {
      question: "What is a hybrid AI system?",
      answer:
        "A hybrid AI system combines multiple approaches such as rules, search, Machine Learning, optimization, retrieval, or Generative AI.",
    },
    {
      question: "Why is problem representation important?",
      answer:
        "The representation determines how the problem can be processed and which algorithms or approaches are suitable.",
    },
    {
      question: "Does every AI problem require Machine Learning?",
      answer:
        "No. Rules, search, optimization, planning, probabilistic reasoning, and other approaches may be more appropriate depending on the problem.",
    },
    {
      question: "What is the central principle of AI problem solving?",
      answer:
        "Understand the problem first, represent it appropriately, select a suitable approach, implement it, evaluate it, and monitor the resulting system.",
    },
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson8",
    next: "/lesson/aiml/module1/lesson10",
    backToModule: "/lesson/aiml/module1/about",
  },
};