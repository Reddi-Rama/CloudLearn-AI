// lesson2.ts

export const lesson2 = {
  id: "aiml-module1-lesson2",

  lessonNumber: 2,

  title: "AI vs Traditional Programming",

  moduleTitle: "Introduction to Artificial Intelligence",

  courseId: "aiml",

  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",
    currentLesson: 2,
    totalLessons: 10,

    previous: {
      label: "Lesson 01",
      href: "/lesson/aiml/module1/lesson1",
    },

    next: {
      label: "Lesson 03",
      href: "/lesson/aiml/module1/lesson3",
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
# AI vs Traditional Programming

A common beginner mistake is to assume that every program that makes a
decision is Artificial Intelligence.

That is not correct.

A traditional program can make decisions using explicitly written rules.
An AI system can also make decisions, but the way those decisions are
produced can involve search, reasoning, optimization, prediction,
perception, learning, or generation.

Understanding this difference is one of the most important foundations
for AI engineering.

---

# 1. Traditional Programming

Traditional programming generally follows this model:

\`\`\`
Input + Explicit Rules
          ↓
       Program
          ↓
        Output
\`\`\`

The programmer determines the logic.

For example:

\`\`\`python
price = 500
quantity = 3

total = price * quantity

print(total)
\`\`\`

Expected output:

\`\`\`
1500
\`\`\`

The computer does not need to discover anything.

The programmer already knows the mathematical relationship:

\`\`\`
total = price × quantity
\`\`\`

---

# 2. Decision-Based Traditional Programs

Traditional programs can also make decisions.

Consider a grading system:

\`\`\`python
def grade(score):

    if score >= 90:
        return "A"

    elif score >= 80:
        return "B"

    elif score >= 70:
        return "C"

    elif score >= 60:
        return "D"

    else:
        return "F"


print(grade(86))
\`\`\`

Expected output:

\`\`\`
B
\`\`\`

This program makes a decision.

However, it is not learning.

The developer explicitly created the boundaries.

---

# 3. Rule-Based Systems

A rule-based system can be represented as:

\`\`\`
IF condition
THEN action
\`\`\`

Example:

\`\`\`
IF temperature > 35
THEN recommend hydration
\`\`\`

Python implementation:

\`\`\`python
temperature = 38

if temperature > 35:
    print("Stay hydrated.")
\`\`\`

The rule is explicitly provided by the programmer.

---

# 4. Why Rules Work Well for Some Problems

Rules are extremely useful when:

- the rules are known,
- the number of rules is manageable,
- the behavior must be predictable,
- exact decisions are required,
- the domain logic is clearly defined.

Examples include:

- tax calculations,
- password validation,
- form validation,
- permission checks,
- database constraints,
- simple business workflows,
- traffic-light control logic.

There is no reason to use machine learning simply because a program
contains an IF statement.

---

# 5. Where Rules Become Difficult

Consider image recognition.

Suppose we want to determine whether an image contains a cat.

A naive rule-based approach might try to say:

\`\`\`
IF two eyes exist
AND two ears exist
AND fur exists
AND shape looks like a cat
THEN cat
\`\`\`

But real images vary.

The cat could be:

- large or small,
- partially hidden,
- facing another direction,
- sitting,
- standing,
- photographed in darkness,
- photographed in bright light,
- different in color,
- different in breed,
- surrounded by complex objects.

Writing rules for every possible situation becomes extremely difficult.

This is where data-driven approaches become valuable.

---

# 6. Traditional Programming vs Machine Learning

A simplified comparison is:

Traditional programming:

\`\`\`
Rules + Input
     ↓
   Program
     ↓
   Output
\`\`\`

Machine learning:

\`\`\`
Examples / Data
      ↓
Learning Algorithm
      ↓
     Model
      ↓
New Input
      ↓
  Prediction
\`\`\`

The fundamental difference is where the behavior comes from.

In traditional programming, the developer explicitly specifies the rules.

In machine learning, the algorithm uses examples to learn parameters or
patterns that can be used for new inputs.

---

# 7. Example: Spam Detection

Suppose we want to detect spam emails.

A simple traditional system might use:

\`\`\`
IF message contains "WIN MONEY"
THEN spam
\`\`\`

Another rule:

\`\`\`
IF message contains many suspicious links
THEN spam
\`\`\`

This may work for obvious examples.

But spam messages can change.

A machine-learning system can instead be trained using examples:

\`\`\`
Historical Emails
       ↓
Labels
       ↓
Learning Algorithm
       ↓
Model
       ↓
New Email
       ↓
Spam Probability / Classification
\`\`\`

The model can learn statistical patterns from the examples.

The actual machine-learning implementation will be covered later in this
course.

---

# 8. A Practical Rule Explosion Experiment

Let's start with a small classifier.

\`\`\`python
def classify_temperature(temperature):

    if temperature < 10:
        return "Very Cold"

    elif temperature < 20:
        return "Cold"

    elif temperature < 30:
        return "Moderate"

    elif temperature < 40:
        return "Hot"

    else:
        return "Very Hot"


temperatures = [5, 15, 25, 35, 45]

for value in temperatures:
    print(value, "->", classify_temperature(value))
\`\`\`

Expected output:

\`\`\`
5 -> Very Cold
15 -> Cold
25 -> Moderate
35 -> Hot
45 -> Very Hot
\`\`\`

This is perfectly reasonable.

Now imagine that the decision also depends on:

- humidity,
- wind,
- time,
- location,
- season,
- activity,
- weather condition.

The number of possible combinations can grow rapidly.

This is sometimes called a rule explosion problem.

---

# 9. Multiple Inputs

Let's create a slightly more complex system.

\`\`\`python
def activity_advisor(temperature, rain, humidity):

    if rain:
        return "Consider an indoor activity."

    if temperature >= 35:
        return "Avoid intense outdoor activity."

    if humidity >= 80:
        return "Prefer a shorter outdoor activity."

    return "Normal outdoor activity may be suitable."


print(activity_advisor(30, False, 50))
print(activity_advisor(30, True, 50))
print(activity_advisor(38, False, 60))
print(activity_advisor(28, False, 85))
\`\`\`

The system now considers several variables.

This is still a rule-based program.

---

# 10. Rule Priority

An important practical issue is that more than one rule can be true.

For example:

\`\`\`python
def advisor(temperature, rain):

    if temperature >= 35:
        return "Very hot."

    if rain:
        return "Rainy."

    return "Normal."


print(advisor(38, True))
\`\`\`

Both conditions are true:

- temperature >= 35
- rain == True

But only the first result is returned.

Therefore rule ordering matters.

The first matching rule wins.

This can create bugs if rules are poorly ordered.

---

# 11. Structured Rule Representation

Instead of putting every rule directly into one large function, we can
represent rules as data.

\`\`\`python
rules = [
    {
        "name": "high_temperature",
        "condition": lambda data: data["temperature"] >= 35,
        "result": "Very hot conditions."
    },

    {
        "name": "rain",
        "condition": lambda data: data["rain"],
        "result": "Consider an indoor activity."
    }
]
\`\`\`

Now the rules themselves are stored separately.

This approach becomes useful when a system grows.

---

# 12. Building a Simple Rule Engine

\`\`\`python
rules = [
    {
        "name": "high_temperature",
        "condition": lambda data:
            data["temperature"] >= 35,
        "result": "Very hot conditions."
    },

    {
        "name": "rain",
        "condition": lambda data:
            data["rain"],
        "result": "Consider an indoor activity."
    },

    {
        "name": "high_humidity",
        "condition": lambda data:
            data["humidity"] >= 80,
        "result": "Prefer a shorter activity."
    }
]


def decision_engine(data):

    for rule in rules:

        if rule["condition"](data):
            return {
                "rule": rule["name"],
                "result": rule["result"]
            }

    return {
        "rule": "default",
        "result": "Normal conditions."
    }


weather = {
    "temperature": 38,
    "rain": False,
    "humidity": 60
}

result = decision_engine(weather)

print(result)
\`\`\`

The system now has three conceptual parts:

\`\`\`
Input
  ↓
Rule Engine
  ↓
Decision
\`\`\`

---

# 13. Explainable Decisions

A useful improvement is to tell the user which rule produced the decision.

\`\`\`python
print("Selected rule:", result["rule"])
print("Recommendation:", result["result"])
\`\`\`

This produces something like:

\`\`\`
Selected rule: high_temperature
Recommendation: Very hot conditions.
\`\`\`

This is a simple example of explainability.

In real AI systems, explainability can be much more complicated, especially
for complex machine-learning models.

---

# 14. Input Validation

Real applications cannot assume that every input is valid.

Bad:

\`\`\`python
temperature = "hot"
\`\`\`

If the program expects a number, this can cause errors or incorrect
behavior.

A simple validator:

\`\`\`python
def validate_temperature(value):

    if not isinstance(value, (int, float)):
        return False

    if value < -100 or value > 100:
        return False

    return True


print(validate_temperature(30))
print(validate_temperature("hot"))
print(validate_temperature(500))
\`\`\`

Expected output:

\`\`\`
True
False
False
\`\`\`

Input validation is a software-engineering requirement, not an optional
extra.

---

# 15. Traditional Programming Is Still Essential in AI

Modern AI applications are not usually composed entirely of machine-learning
code.

An AI application may contain:

\`\`\`
User Interface
      ↓
Input Validation
      ↓
Application Logic
      ↓
AI Model
      ↓
Post-processing
      ↓
Database / API
      ↓
Output
\`\`\`

Traditional programming is responsible for many of these components.

Therefore an AI engineer must be comfortable with ordinary programming too.

---

# 16. Hybrid Systems

Real applications can combine different approaches.

For example:

\`\`\`
User Input
    ↓
Validation Rules
    ↓
Machine Learning Model
    ↓
Business Rules
    ↓
Final Decision
\`\`\`

Suppose a machine-learning model predicts a transaction as suspicious.

A business rule might still require additional verification before taking
action.

This is a hybrid system.

AI does not mean abandoning conventional software engineering.

---

# 17. When Should You Use AI?

Ask these questions.

### Question 1

Can the rules be explicitly defined?

If yes, traditional programming may be sufficient.

### Question 2

Does the problem require exploring many possible states?

Search may be appropriate.

### Question 3

Is there an objective that must be optimized?

Optimization may be appropriate.

### Question 4

Are useful patterns available in historical data?

Machine learning may be appropriate.

### Question 5

Does the problem involve complex images, audio, language, or other
unstructured information?

Advanced machine-learning or deep-learning methods may be appropriate.

---

# 18. Practical Decision Exercise

Consider these problems.

### Problem A

Calculate the total cost of five products.

Approach:

Traditional programming.

### Problem B

Find a path through a maze.

Approach:

Search.

### Problem C

Predict house prices from historical data.

Approach:

Machine learning.

### Problem D

Generate a paragraph explaining a topic.

Approach:

Generative AI.

### Problem E

Check whether a password satisfies fixed security rules.

Approach:

Traditional programming.

The lesson is not to use AI everywhere.

The lesson is to choose the correct computational approach.

---

# 19. Python Experiment — Approach Selector

Let's create a simple educational decision tool.

\`\`\`python
def choose_approach(
    rules_known,
    search_space,
    optimization_goal,
    data_available
):

    if rules_known:
        return "Traditional / Rule-Based Programming"

    if search_space:
        return "Search"

    if optimization_goal:
        return "Optimization"

    if data_available:
        return "Machine Learning"

    return "Further Problem Analysis Required"


print(
    choose_approach(
        True,
        False,
        False,
        False
    )
)

print(
    choose_approach(
        False,
        True,
        False,
        False
    )
)

print(
    choose_approach(
        False,
        False,
        False,
        True
    )
)
\`\`\`

This program itself is not an AI model.

It is an educational example demonstrating how engineers can reason about
approach selection.

---

# 20. Industry Perspective

In real software development, the question is rarely:

"Can we use AI?"

The better question is:

"Should we use AI for this problem?"

Companies consider:

- development cost,
- data availability,
- accuracy,
- latency,
- infrastructure,
- maintainability,
- security,
- privacy,
- explainability,
- reliability,
- business value.

An AI system that is technically impressive but unnecessary can be worse
than a simple reliable program.

---

# Common Mistakes

### Mistake 1: Every IF statement is AI

False.

IF statements are basic programming constructs.

### Mistake 2: AI always means Machine Learning

False.

AI includes search, reasoning, planning, optimization, and other approaches.

### Mistake 3: More advanced means better

Not necessarily.

A simple rule system may be the best solution for a clearly defined problem.

### Mistake 4: Ignoring data

Machine-learning systems require appropriate data.

### Mistake 5: Ignoring traditional programming

AI applications are still software systems.

---

# Practical Tasks

1. Build a grade classifier.
2. Build a temperature classifier.
3. Build a study recommendation system.
4. Add multiple inputs to your system.
5. Add input validation.
6. Add rule names.
7. Add explanations.
8. Create at least ten test cases.
9. Identify conflicting rules.
10. Explain whether your system is traditional programming, AI, or a
   combination.

---

# Challenge

Build a Device Troubleshooting Assistant.

Inputs:

- device_power
- internet_connected
- error_message
- battery_level

The system should provide recommendations using at least eight rules.

The output should contain:

- selected rule,
- recommendation,
- explanation.

Example:

\`\`\`
Selected Rule:
internet_connection_problem

Recommendation:
Check the network connection.

Explanation:
The device is powered on but no internet connection was detected.
\`\`\`

---

# Quick Check

### Question 1

Does a traditional program need to learn from data?

Answer:

No.

Traditional programs can operate entirely using explicitly programmed
instructions and rules.

### Question 2

Why can manually written rules become difficult?

Answer:

Real-world problems can contain many possible situations and combinations,
making the rule set difficult to create and maintain.

### Question 3

What is the main idea behind machine learning?

Answer:

A machine-learning system uses data and learning algorithms to produce a
model that can make predictions or decisions for new inputs.

---

# Key Takeaways

- Traditional programs follow explicitly defined logic.
- Rule-based systems are useful for clearly defined problems.
- AI is broader than machine learning.
- Machine learning learns useful patterns from data.
- Rules can become difficult to maintain as complexity increases.
- Traditional programming remains essential inside AI applications.
- Hybrid systems can combine rules and learned models.
- AI should be selected because it solves a problem effectively, not simply
  because it is technologically advanced.
`,

  practice: [
    "Implement the temperature classifier.",
    "Create a grade classification system.",
    "Create a rule-based recommendation system.",
    "Add multiple inputs.",
    "Add input validation.",
    "Add explanations to decisions.",
    "Create at least ten test cases.",
    "Identify conflicting rules and fix their ordering.",
  ],

  quickCheck: [
    {
      question: "Is every program containing an IF statement an AI system?",
      answer:
        "No. IF statements are ordinary programming constructs. AI depends on the broader problem-solving approach being used.",
    },
    {
      question: "When can machine learning be useful?",
      answer:
        "Machine learning can be useful when meaningful patterns can be learned from available data.",
    },
    {
      question: "Can an AI application use traditional programming?",
      answer:
        "Yes. AI applications commonly combine conventional software logic with AI models or algorithms.",
    },
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson1",
    next: "/lesson/aiml/module1/lesson3",
    backToModule: "/lesson/aiml/module1/about",
  },
};


// lesson3.ts

export const lesson3 = {
  id: "aiml-module1-lesson3",

  lessonNumber: 3,

  title: "History and Evolution of AI",

  moduleTitle: "Introduction to Artificial Intelligence",

  courseId: "aiml",

  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",
    currentLesson: 3,
    totalLessons: 10,

    previous: {
      label: "Lesson 02",
      href: "/lesson/aiml/module1/lesson2",
    },

    next: {
      label: "Lesson 04",
      href: "/lesson/aiml/module1/lesson4",
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
# History and Evolution of Artificial Intelligence

Artificial Intelligence did not appear suddenly with modern chatbots or
Generative AI.

Today's AI systems are the result of decades of research involving:

- mathematics,
- logic,
- computer science,
- statistics,
- neuroscience,
- cognitive science,
- optimization,
- data,
- algorithms,
- hardware.

Understanding the history of AI helps us understand why different
approaches exist today.

---

# 1. The Fundamental Question

One of the central questions behind AI is:

"Can aspects of intelligent behavior be represented and performed by a
machine?"

This question connects AI with:

- reasoning,
- problem solving,
- language,
- perception,
- learning,
- planning,
- decision making.

Different generations of researchers answered this question using different
computational approaches.

---

# 2. Foundations of AI

AI developed from several disciplines.

## Mathematics

Mathematics provides tools for:

- probability,
- statistics,
- optimization,
- linear algebra,
- logic.

These become extremely important later in Machine Learning and Deep Learning.

## Logic

Logic provides formal ways to represent relationships and reason about
statements.

## Computer Science

Computer science provides:

- algorithms,
- data structures,
- programming languages,
- computational complexity,
- systems.

## Neuroscience and Cognitive Science

These fields contributed ideas about perception, learning, memory, and
intelligence.

AI therefore developed as an interdisciplinary field.

---

# 3. Symbolic AI

Early AI research heavily explored symbolic representations.

The basic idea was:

\`\`\`
Knowledge
   +
Rules
   ↓
Reasoning
   ↓
Decision
\`\`\`

For example:

Facts:

\`\`\`
The machine is overheating.
The machine is producing unusual noise.
\`\`\`

Rules:

\`\`\`
IF overheating AND unusual noise
THEN recommend inspection.
\`\`\`

The computer reasons over explicitly represented information.

---

# 4. A Tiny Symbolic Reasoning System

We can implement a simple version in Python.

\`\`\`python
facts = {
    "overheating": True,
    "unusual_noise": True
}


def diagnose(facts):

    if (
        facts["overheating"]
        and facts["unusual_noise"]
    ):
        return "Inspection recommended."

    return "No predefined recommendation."


print(diagnose(facts))
\`\`\`

This is a very small example of symbolic reasoning.

The system does not learn.

It applies rules to facts.

---

# 5. Search as an AI Approach

Some problems cannot be solved using one direct rule.

Consider a maze.

The system may need to explore:

\`\`\`
Start
 ├── Path A
 │    ├── Path A1
 │    └── Path A2
 │
 └── Path B
      ├── Path B1
      └── Path B2
\`\`\`

The system searches through possible states until it finds a solution.

Search became an important AI technique for:

- puzzles,
- games,
- route finding,
- planning,
- scheduling.

Module 2 will study search algorithms in detail.

---

# 6. State-Space Thinking

A useful AI concept is the state space.

A state represents a possible situation.

For example, in a maze:

\`\`\`
State = current position
Action = move up/down/left/right
Goal = reach destination
\`\`\`

The problem becomes:

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

This idea is fundamental to classical AI problem solving.

---

# 7. Expert Systems

Another important stage in AI was the development of expert systems.

Expert systems attempted to encode specialized knowledge into software.

A simplified architecture:

\`\`\`
              User
                ↓
         User Information
                ↓
        Inference Engine
                ↓
          Knowledge Base
                ↓
          Recommendation
\`\`\`

The knowledge base contained domain knowledge.

The inference engine used that knowledge to produce conclusions.

---

# 8. Python Mini Expert System

\`\`\`python
knowledge_base = {
    "fever": True,
    "cough": True,
    "fatigue": True
}


def recommendation(data):

    if (
        data["fever"]
        and data["cough"]
        and data["fatigue"]
    ):
        return "Consider seeking professional medical advice."

    return "No predefined recommendation."


print(recommendation(knowledge_base))
\`\`\`

This example is purely educational.

It demonstrates knowledge representation and rule-based reasoning.

It should not be treated as a medical diagnostic system.

---

# 9. Why Rule-Based AI Has Limitations

Imagine building thousands of rules manually.

You might eventually encounter:

- conflicting rules,
- missing rules,
- duplicate rules,
- difficult maintenance,
- unexpected situations,
- expensive knowledge collection.

Real-world environments contain enormous variation.

This motivated researchers to explore approaches where systems could learn
patterns from data.

---

# 10. The Rise of Machine Learning

Machine learning changed the approach.

Instead of:

\`\`\`
Human
 ↓
Write Every Rule
 ↓
Program
\`\`\`

the idea became:

\`\`\`
Data
 ↓
Learning Algorithm
 ↓
Model
\`\`\`

The model can then process new inputs.

This does not mean that programmers disappear.

Programmers still decide:

- what data to use,
- how to represent data,
- what algorithm to use,
- how to evaluate the model,
- how to deploy the system.

---

# 11. Statistics and Data

Machine learning relies heavily on mathematical and statistical ideas.

For example, suppose we have:

\`\`\`
Hours Studied    Exam Score
2                45
4                55
6                68
8                78
10               91
\`\`\`

We may notice a relationship between study time and score.

A machine-learning algorithm can attempt to learn a mathematical relationship
from examples.

Later modules will implement this process using Python libraries.

---

# 12. A Simple Data Experiment in Python

We can represent data using lists.

\`\`\`python
hours = [2, 4, 6, 8, 10]
scores = [45, 55, 68, 78, 91]

for h, s in zip(hours, scores):
    print(
        f"Hours: {h}, Score: {s}"
    )
\`\`\`

At this stage we are only inspecting the data.

Later, NumPy and Pandas will provide much more powerful ways to work with
datasets.

---

# 13. Deep Learning

Deep learning is a branch of machine learning based primarily on neural
networks with multiple layers.

It became particularly important for problems involving complex data such
as:

- images,
- speech,
- text,
- video.

A simplified conceptual structure is:

\`\`\`
Input
 ↓
Layer
 ↓
Layer
 ↓
Layer
 ↓
Output
\`\`\`

The mathematical details belong to the Deep Learning course.

---

# 14. Why Deep Learning Became Powerful

The success of modern deep learning is associated with several factors.

### More Data

Large datasets became available.

### More Computing Power

GPUs and other hardware made large-scale computation practical.

### Better Algorithms

Training methods and architectures improved.

### Better Software

Modern frameworks made large neural models easier to develop.

The combination is important.

It is not simply:

"Deep learning became popular because neural networks existed."

Neural networks had existed for decades.

The surrounding ecosystem changed dramatically.

---

# 15. Modern AI

Modern AI systems can combine:

- large datasets,
- machine-learning models,
- deep neural networks,
- specialized hardware,
- cloud infrastructure,
- APIs,
- databases,
- software applications.

This creates a distinction between:

\`\`\`
AI Model
\`\`\`

and:

\`\`\`
AI Application
\`\`\`

A model is one component.

An application may contain many components around it.

---

# 16. Generative AI

Generative AI systems can produce new content.

Examples include:

- text,
- code,
- images,
- audio,
- video.

A simplified architecture is:

\`\`\`
User
 ↓
Prompt
 ↓
Generative Model
 ↓
Generated Output
\`\`\`

Modern generative systems can involve large neural networks trained on
massive datasets.

Detailed topics such as:

- tokenization,
- embeddings,
- attention,
- transformers,
- LLM inference,
- RAG,
- agents,
- fine-tuning

belong to later specialized courses.

---

# 17. AI Evolution as a Pattern

A useful conceptual progression is:

\`\`\`
Symbolic Reasoning
       ↓
Search & Problem Solving
       ↓
Expert Systems
       ↓
Statistical Learning
       ↓
Machine Learning
       ↓
Deep Learning
       ↓
Foundation Models
       ↓
Generative AI
       ↓
AI Applications & Agents
\`\`\`

This does not mean that older approaches disappeared.

Modern systems often combine them.

---

# 18. Hybrid AI

A modern application might contain:

\`\`\`
Rules
  +
Search
  +
Machine Learning
  +
Generative Model
  +
Traditional Software
\`\`\`

For example, an AI assistant may use:

- rules for safety constraints,
- retrieval for external information,
- an ML model for prediction,
- a language model for generation,
- traditional programming for application logic.

AI engineering is increasingly about combining components effectively.

---

# 19. Practical Timeline Program

Let's represent the evolution using Python.

\`\`\`python
ai_evolution = [
    "Symbolic AI",
    "Search",
    "Expert Systems",
    "Machine Learning",
    "Deep Learning",
    "Foundation Models",
    "Generative AI"
]


for stage in ai_evolution:
    print(stage)
\`\`\`

Now add numbering:

\`\`\`python
for number, stage in enumerate(
    ai_evolution,
    start=1
):
    print(f"{number}. {stage}")
\`\`\`

This is a simple programming exercise, but it teaches an important habit:
representing conceptual information as structured data.

---

# 20. Practical Experiment — Compare Approaches

Create a Python dictionary:

\`\`\`python
approaches = {
    "Symbolic AI": "Explicit knowledge and rules",
    "Search": "Explore possible states",
    "Machine Learning": "Learn patterns from data",
    "Deep Learning": "Learn representations using neural networks",
    "Generative AI": "Generate new content"
}


for approach, description in approaches.items():
    print(
        f"{approach}: {description}"
    )
\`\`\`

Now add your own descriptions.

---

# 21. Engineering Lesson From AI History

The history of AI teaches an important engineering principle:

**No single AI approach solves every problem.**

A technique becomes useful because it matches a problem.

For example:

\`\`\`
Fixed business rule
→ Traditional programming

Maze
→ Search

Prediction from historical data
→ Machine learning

Complex image recognition
→ Deep learning

Text generation
→ Generative AI
\`\`\`

Understanding the problem comes before choosing the technology.

---

# Common Mistakes

### Mistake 1

Thinking modern AI appeared suddenly.

Modern AI builds on decades of research.

### Mistake 2

Thinking older AI approaches are useless.

Rules and search are still useful.

### Mistake 3

Thinking machine learning replaced programming.

Machine learning is implemented inside software systems.

### Mistake 4

Thinking deep learning is the same thing as all AI.

Deep learning is a specific machine-learning approach.

### Mistake 5

Thinking Generative AI is the entire AI field.

Generative AI is one important area within modern AI.

---

# Practical Tasks

1. Create a Python timeline of AI approaches.
2. Implement a simple rule-based knowledge system.
3. Represent AI approaches in a dictionary.
4. Explain why search is useful for maze solving.
5. Explain why machine learning became useful when manually written rules
   became difficult.
6. Compare symbolic reasoning and learning from data.
7. Identify which approach could be used for five real-world problems.

---

# Challenge

Choose one real-world application.

Examples:

- recommendation system,
- fraud detection,
- navigation,
- education assistant,
- image recognition.

Create a short technical history showing how the problem could be approached
using:

1. Traditional programming
2. Rules
3. Search or optimization where applicable
4. Machine learning
5. Deep learning where applicable
6. Modern AI

Explain why each approach may or may not be appropriate.

---

# Quick Check

### Question 1

Why did AI researchers move beyond purely rule-based systems?

Answer:

Because many real-world problems contain too much variation and complexity
to represent effectively using manually written rules alone.

### Question 2

What made modern deep learning practical at large scale?

Answer:

The combination of large datasets, increased computational power, improved
algorithms, and better software infrastructure.

### Question 3

Did older AI approaches disappear?

Answer:

No. Search, rules, optimization, and other classical techniques are still
useful and can be combined with modern AI.

---

# Key Takeaways

- AI evolved through multiple approaches.
- Symbolic AI focused on explicit knowledge and reasoning.
- Search explores possible solutions.
- Expert systems encoded specialized knowledge.
- Machine learning introduced learning from data.
- Deep learning uses multilayer neural networks.
- Generative AI produces new content.
- Modern AI applications combine models with software and infrastructure.
- Older AI techniques remain useful.
- The correct approach depends on the problem.
`,

  practice: [
    "Create a Python timeline of AI approaches.",
    "Implement a simple knowledge-based rule system.",
    "Represent AI approaches using dictionaries and lists.",
    "Compare rule-based reasoning with machine learning.",
    "Analyze the evolution of one real-world AI application.",
  ],

  quickCheck: [
    {
      question: "What is symbolic AI?",
      answer:
        "An AI approach that represents knowledge explicitly using symbols, facts, rules, and reasoning.",
    },
    {
      question: "Why did machine learning become important?",
      answer:
        "It provided a way to learn useful patterns from data rather than manually specifying every possible rule.",
    },
    {
      question: "Is Generative AI separate from the history of AI?",
      answer:
        "No. Generative AI is a modern development within the broader evolution of AI.",
    },
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson2",
    next: "/lesson/aiml/module1/lesson4",
    backToModule: "/lesson/aiml/module1/about",
  },
};


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

When people say "AI", they may be talking about very different systems.

A navigation system, spam detector, recommendation engine, image classifier,
language model, and industrial robot can all be described as AI systems, but
their capabilities are very different.

Therefore, it is useful to understand AI from more than one perspective.

---

# 1. Two Ways to Think About AI Types

AI can be discussed based on:

1. Scope or level of intelligence.
2. Capability or task performed.

These are different classifications.

---

# 2. Narrow AI

Narrow AI refers to systems designed for specific tasks or limited groups
of related tasks.

Examples:

- spam detection,
- recommendation systems,
- image classification,
- speech recognition,
- navigation,
- fraud detection.

A system can be extremely powerful at its intended task while still being
specialized.

For example, a chess-playing system can be extremely strong at chess without
being a general-purpose intelligence.

---

# 3. General AI

Artificial General Intelligence (AGI) is a hypothetical concept referring to
a system with broad general-purpose intellectual capabilities across many
different types of tasks.

The important distinction is:

\`\`\`
Narrow AI
→ Specialized capability

AGI
→ Broad general-purpose capability
\`\`\`

AGI should not be treated as simply another name for a modern application
that performs several related tasks.

---

# 4. Artificial Superintelligence

Artificial Superintelligence is a hypothetical concept describing an
intelligence that would substantially exceed human intellectual capabilities
across a broad range of domains.

It is mainly discussed in:

- AI research,
- philosophy,
- future studies,
- AI safety discussions.

It is important to distinguish this concept from currently deployed
specialized AI systems.

---

# 5. Capability-Based Classification

A more practical engineering question is:

**What can the AI system actually do?**

Common capabilities include:

- classification,
- prediction,
- recommendation,
- search,
- optimization,
- perception,
- language processing,
- reasoning,
- planning,
- anomaly detection,
- generation,
- decision support.

This way of thinking is extremely useful when designing applications.

---

# 6. Classification

Classification means assigning an input to one or more categories.

Examples:

\`\`\`
Email
 ↓
Spam / Not Spam
\`\`\`

\`\`\`
Image
 ↓
Cat / Dog / Bird
\`\`\`

\`\`\`
Transaction
 ↓
Normal / Suspicious
\`\`\`

Classification is one of the major machine-learning tasks.

It will be implemented later using scikit-learn.

---

# 7. Prediction

Prediction estimates an unknown value or future outcome.

Examples:

- house price,
- demand,
- travel time,
- energy consumption,
- customer churn probability.

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

---

# 8. Recommendation

Recommendation systems select or rank items that may be useful to a user.

Examples:

- movies,
- products,
- music,
- courses,
- articles,
- search results.

A recommendation system may consider:

- previous interactions,
- preferences,
- item characteristics,
- similar users,
- context.

A simple conceptual workflow is:

\`\`\`
User Information
       ↓
Candidate Items
       ↓
Ranking
       ↓
Recommendations
\`\`\`

---

# 9. Search

Search systems explore possible solutions.

Examples:

- maze solving,
- route finding,
- game playing,
- puzzle solving.

A search problem can be represented using:

\`\`\`
Initial State
     ↓
Actions
     ↓
Possible States
     ↓
Goal
\`\`\`

Search will be covered extensively in Module 2.

---

# 10. Optimization

Optimization attempts to find a solution that is best according to an
objective.

Examples:

### Logistics

Minimize delivery distance.

### Manufacturing

Maximize production efficiency.

### Scheduling

Minimize conflicts.

### Network Routing

Minimize latency or cost.

A simplified formulation is:

\`\`\`
Possible Solutions
       ↓
Objective Function
       ↓
Compare Solutions
       ↓
Select Good Solution
\`\`\`

---

# 11. Perception

Perception involves extracting useful information from sensory or
unstructured input.

Examples:

- image recognition,
- object detection,
- speech recognition,
- document understanding,
- sensor interpretation.

For an image system:

\`\`\`
Image
 ↓
Processing
 ↓
Features / Representation
 ↓
Prediction
\`\`\`

Modern perception systems often use machine learning and deep learning.

---

# 12. Language Processing

AI systems can process human language.

Capabilities include:

- classification,
- summarization,
- question answering,
- translation,
- information extraction,
- generation,
- conversational interaction.

Natural Language Processing will later be studied as a dedicated course.

---

# 13. Generation

Generative systems produce new content.

Examples:

\`\`\`
Prompt
 ↓
Generative Model
 ↓
Text
\`\`\`

or:

\`\`\`
Prompt
 ↓
Generative Model
 ↓
Image
\`\`\`

Generation is different from simply classifying an existing input.

---

# 14. Anomaly Detection

Anomaly detection attempts to identify observations that differ significantly
from expected patterns.

Examples:

- unusual financial transactions,
- abnormal network activity,
- machine failures,
- unexpected sensor readings.

Conceptually:

\`\`\`
Normal Patterns
      ↓
Learn / Define Expected Behavior
      ↓
New Input
      ↓
Normal or Anomalous
\`\`\`

---

# 15. Decision Support

AI can support humans in making decisions.

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

The AI does not necessarily need to make the final decision.

This is important for high-impact applications.

---

# 16. One Application Can Have Multiple Capabilities

Consider an online learning platform.

It could contain:

\`\`\`
Student Activity
      ↓
Prediction
      ↓
Performance Estimate

Student History
      ↓
Recommendation
      ↓
Next Topic

Student Question
      ↓
Language Processing
      ↓
Generated Explanation
\`\`\`

Therefore, asking:

"What type of AI is this?"

may be less useful than asking:

"What capabilities does this application require?"

---

# 17. Practical Python — AI Capability Registry

Let's represent AI systems as structured data.

\`\`\`python
ai_systems = {
    "spam_detector": {
        "capabilities": ["classification"]
    },

    "movie_recommender": {
        "capabilities": ["recommendation"]
    },

    "route_planner": {
        "capabilities": [
            "search",
            "optimization"
        ]
    },

    "voice_assistant": {
        "capabilities": [
            "speech_processing",
            "language_processing",
            "generation"
        ]
    }
}


for system, details in ai_systems.items():

    print(system)

    for capability in details["capabilities"]:
        print("  -", capability)
\`\`\`

This teaches an important software-development concept:

AI concepts can be represented as structured data.

---

# 18. Capability Lookup

Let's make the system searchable.

\`\`\`python
def find_systems_by_capability(
    systems,
    target
):

    results = []

    for name, details in systems.items():

        if target in details["capabilities"]:
            results.append(name)

    return results


print(
    find_systems_by_capability(
        ai_systems,
        "recommendation"
    )
)
\`\`\`

Expected output:

\`\`\`
['movie_recommender']
\`\`\`

Try:

\`\`\`python
print(
    find_systems_by_capability(
        ai_systems,
        "generation"
    )
)
\`\`\`

---

# 19. Build Your Own AI Capability Map

Create:

\`\`\`python
applications = {
    "education_assistant": [],
    "fraud_detector": [],
    "navigation_system": [],
    "shopping_recommender": [],
    "image_classifier": []
}
\`\`\`

Now fill in the capabilities.

For example:

\`\`\`python
applications["fraud_detector"] = [
    "classification",
    "anomaly_detection"
]
\`\`\`

---

# 20. Capability vs Technology

This distinction is extremely important.

A capability is:

\`\`\`
"What does the system need to do?"
\`\`\`

A technology is:

\`\`\`
"How can we implement it?"
\`\`\`

For example:

\`\`\`
Capability:
Image classification

Possible technology:
Machine learning / Deep learning
\`\`\`

Another:

\`\`\`
Capability:
Route finding

Possible technology:
Search algorithms
\`\`\`

Another:

\`\`\`
Capability:
Text generation

Possible technology:
Generative model / Language model
\`\`\`

Do not confuse the problem with the technology.

---

# 21. Practical Engineering Workflow

When designing an AI application:

\`\`\`
Problem
  ↓
Required Capability
  ↓
Data / Input
  ↓
Possible Approach
  ↓
Algorithm / Model
  ↓
Implementation
  ↓
Evaluation
  ↓
Deployment
\`\`\`

This workflow will appear repeatedly throughout the CloudLearn AI learning
path.

---

# 22. Capability Selection Exercise

Consider a delivery application.

Requirements:

1. Find the best route.
2. Estimate delivery time.
3. Detect suspicious orders.
4. Recommend delivery options.

Possible mapping:

\`\`\`
Route
→ Search / Optimization

Delivery time
→ Prediction

Suspicious order
→ Classification / Anomaly Detection

Delivery option
→ Recommendation
\`\`\`

One application can therefore contain several AI subsystems.

---

# 23. Combining Capabilities

A larger system could look like:

\`\`\`
                 Delivery Application
                         |
        ┌────────────────┼────────────────┐
        ↓                ↓                ↓
    Prediction       Optimization    Classification
        ↓                ↓                ↓
 Delivery Time       Route         Risk Detection
                         |
                         ↓
                   Final Application
\`\`\`

This is closer to how real AI products are engineered.

---

# 24. Practical Experiment — Capability Analyzer

Create a simple function:

\`\`\`python
def describe_system(name, capabilities):

    print(f"System: {name}")
    print("Capabilities:")

    for capability in capabilities:
        print(f"- {capability}")


describe_system(
    "Learning Assistant",
    [
        "recommendation",
        "prediction",
        "language_processing"
    ]
)
\`\`\`

Extend it to accept:

- data sources,
- expected outputs,
- users,
- objectives.

---

# 25. Industry Perspective

In professional AI engineering, teams often break a large application into
smaller capabilities.

For example, instead of saying:

"We are building an AI banking system."

They might define:

\`\`\`
Fraud Detection
Risk Prediction
Customer Recommendation
Document Processing
Conversational Support
\`\`\`

Each component can have different:

- data,
- algorithms,
- models,
- evaluation metrics,
- infrastructure,
- risks.

This makes the overall system easier to design and maintain.

---

# Common Mistakes

### Mistake 1

Thinking Narrow AI means weak technology.

A narrow system can be extremely sophisticated.

### Mistake 2

Confusing capability with technology.

"Recommendation" is a capability.

"Machine learning" is an approach that can implement it.

### Mistake 3

Thinking one application uses only one AI technique.

Modern applications frequently combine multiple capabilities.

### Mistake 4

Treating AGI as simply a more advanced chatbot.

AGI is a hypothetical concept involving broad general-purpose intelligence.

### Mistake 5

Using AI terminology without defining the actual problem.

Always start with the capability and problem.

---

# Practical Tasks

1. Identify the capabilities of five AI applications.
2. Build a Python AI capability dictionary.
3. Write a function that searches applications by capability.
4. Identify multiple capabilities in a modern application.
5. Map capabilities to possible computational approaches.
6. Design a capability map for an education application.
7. Design a capability map for a delivery application.

---

# Challenge

Design an AI-powered education platform.

Identify at least six capabilities.

For each capability determine:

- required input,
- expected output,
- possible AI approach,
- possible data,
- possible risk.

Represent the resulting system architecture using Python dictionaries.

---

# Quick Check

### Question 1

What is Narrow AI?

Answer:

AI designed for a specific task or limited range of related tasks.

### Question 2

What is the difference between a capability and a technology?

Answer:

A capability describes what the system needs to do, while a technology or
algorithm describes how that capability may be implemented.

### Question 3

Can one AI application contain multiple AI capabilities?

Answer:

Yes. Modern AI applications commonly combine multiple capabilities and
approaches.

---

# Key Takeaways

- AI systems can be classified by scope and capabilities.
- Narrow AI is specialized.
- AGI is a hypothetical broad general-purpose intelligence concept.
- Superintelligence is a hypothetical intelligence beyond human capabilities.
- Practical AI engineering focuses heavily on capabilities.
- Important capabilities include classification, prediction, recommendation,
  search, optimization, perception, language processing, generation,
  anomaly detection, and decision support.
- One application can contain multiple AI capabilities.
- Capability selection should happen before technology selection.
- Real AI applications are usually combinations of multiple software and AI
  components.
`,

  practice: [
    "Create a Python capability registry.",
    "Build a capability-search function.",
    "Analyze five real-world AI applications.",
    "Identify the input and output for each capability.",
    "Map capabilities to possible AI approaches.",
    "Design a multi-capability AI application.",
  ],

  quickCheck: [
    {
      question: "What is Narrow AI?",
      answer:
        "An AI system designed for a specific task or limited set of related tasks.",
    },
    {
      question: "What is an AI capability?",
      answer:
        "A capability describes what an AI system can do, such as classify, predict, recommend, search, or generate.",
    },
    {
      question: "Can one application use multiple AI capabilities?",
      answer:
        "Yes. Modern AI applications frequently combine multiple capabilities and approaches.",
    },
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson3",
    next: "/lesson/aiml/module1/lesson5",
    backToModule: "/lesson/aiml/module1/about",
  },
};