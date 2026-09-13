const lesson2 = {
  title: "Problem Definition for AI Projects",

  content: `
# Problem Definition for AI Projects

## What You Will Learn

In this lesson, you will learn:

- How to convert a real-world problem into an AI problem.
- How to define a clear AI objective.
- How to identify inputs and outputs.
- How to determine whether AI is actually appropriate.
- How to define measurable success criteria.
- How to formulate an AI problem mathematically.
- How to define the unit of prediction.
- How to write a professional AI problem statement.
- How problem definition affects later data and model decisions.

The central transformation is:

Real-World Problem
       ↓
Specific Objective
       ↓
AI Task
       ↓
Inputs + Output
       ↓
Data + Model
       ↓
Success Criteria

---

# 1. Why Problem Definition Comes First

Before collecting data or selecting a model, we need to understand what problem we are actually trying to solve.

Consider:

"We want to build an AI system for a college."

This is not a sufficiently defined AI problem.

There are many possibilities:

- Predict student performance.
- Detect students at risk of dropping a course.
- Recommend learning resources.
- Answer student questions.
- Detect unusual examination behavior.

Each of these problems requires different:

- Data
- Inputs
- Outputs
- Models
- Evaluation metrics

Therefore:

Good AI Solution
        ↓
Good Problem Definition

A technically correct model can still solve the wrong problem if the original problem was poorly defined.

---

# 2. Real-World Problem vs AI Problem

A real-world problem usually starts as a broad requirement.

For example:

"Students are struggling to identify which topics they need to study."

This describes a real-world difficulty.

We can transform it into an AI problem:

"Predict the topics in which a student is likely to have difficulty using their previous learning performance."

Now the problem is specific enough to design a system.

We can identify:

Inputs:

- Previous scores
- Practice performance
- Topic completion
- Quiz results

Output:

Predicted difficult topics

The transformation becomes:

Real-World Problem
        ↓
Specific Objective
        ↓
AI Task
        ↓
Inputs + Output
        ↓
Data + Model

---

# 3. Define the Objective

An AI project should have a precise objective.

A weak objective is:

"Use AI to improve education."

This does not tell us what the system must actually do.

A better objective is:

"Predict whether a student is likely to struggle with an upcoming topic."

An even more specific objective is:

"Use a student's previous quiz scores, practice performance, and topic completion history to predict whether the student will require additional support for the next topic."

The more clearly the objective is defined, the easier it becomes to design:

- The dataset
- The features
- The target
- The model
- The evaluation metric

---

# 4. Identify the AI Task

Different objectives correspond to different AI tasks.

## Classification

Classification predicts a category.

Example:

Student Data
     ↓
Model
     ↓
Needs Support / Does Not Need Support

Mathematically:

f(X) → C

where:

C

represents a class.

---

# 5. Regression

Regression predicts a numerical value.

Example:

Student Data
     ↓
Model
     ↓
Predicted Score

Mathematically:

f(X) → y

For example:

Study Hours
Attendance
Previous Score
       ↓
Regression Model
       ↓
Predicted Score = 82.4

---

# 6. Clustering

Clustering finds groups or patterns without predefined target labels.

Example:

Student Data
       ↓
Clustering Algorithm
       ↓
Student Groups

The algorithm attempts to organize similar observations according to its objective.

There is no supplied target such as:

"Group A"

or:

"Group B"

during the learning process.

---

# 7. Generation

Generation creates new content from an input.

Example:

Question
   ↓
AI Model
   ↓
Generated Explanation

Examples include systems that generate:

- Text
- Explanations
- Images
- Code
- Other forms of content

The task should still be clearly defined before choosing a model.

---

# 8. Why Task Identification Matters

Suppose the goal is:

Predict the price of a house.

This is a numerical target.

Therefore:

Regression

is appropriate as the problem family.

Suppose the goal is:

Predict whether an email is spam.

The output is a category.

Therefore:

Classification

is appropriate.

Suppose the goal is:

Find natural groups of customers without predefined segments.

That suggests:

Clustering.

The problem determines the approach.

---

# 9. Identify Inputs

Inputs are the information available to the AI system.

For house-price prediction:

X = [
    Area,
    Bedrooms,
    Age,
    Location
]

For spam detection:

X = [
    Text,
    Sender Information,
    Message Features
]

The inputs should contain information that is reasonably relevant to the prediction or decision.

---

# 10. Feature Vector Intuition

For one house:

Area = 1200

Bedrooms = 3

Age = 5

Suppose location has already been converted into a numerical representation.

The input can be represented as:

x =
[
1200,
3,
5,
location_features
]

This is a feature vector.

For multiple houses, the vectors form a feature matrix:

X =
[
x1
x2
x3
...
xn
]

If there are:

n

observations

and:

d

features,

then:

X ∈ R^(n × d)

This connects problem definition directly to the mathematical representation used by machine-learning models.

---

# 11. Identify the Output

The output is what the AI system is expected to produce.

Examples:

Input → House Features

Output → Predicted Price

Input → Email

Output → Spam / Not Spam

Input → Image

Output → Predicted Class

Input → User Activity

Output → Recommended Product

A clear problem definition should always specify:

What goes in?

What comes out?

---

# 12. Unit of Prediction

An important question is:

What exactly are we making a prediction about?

For a student-performance system, the unit could be:

- One student
- One student-course combination
- One student-topic combination
- One assignment

These are different prediction problems.

Suppose:

X_i → y_i

might mean:

Features of student i

→

Predicted final score of student i.

But:

student-topic

would represent a different unit.

Being precise about the unit of prediction prevents confusion when designing the dataset.

---

# 13. Why Unit of Prediction Matters

Suppose the system predicts:

"Whether a student needs support."

Does this mean:

One prediction per student?

Or:

One prediction per topic for each student?

These produce different datasets.

For example:

Student A → Needs Support

is one target.

But:

Student A + Topic 1 → Needs Support

Student A + Topic 2 → Does Not Need Support

creates multiple prediction units.

Therefore the prediction unit must be defined before constructing the dataset.

---

# 14. Define Success

An AI project needs measurable success criteria.

We cannot simply say:

"The model should work well."

A better definition is:

"The system should correctly classify most previously unseen examples while keeping important false predictions within an acceptable range."

The exact metric depends on the problem.

For regression, possible metrics include:

MAE

MSE

RMSE

For classification:

Accuracy

Precision

Recall

F1-score

The key principle is:

Success Criteria = Measurable

---

# 15. Why Choose the Metric Early?

The metric affects how we interpret model quality.

Suppose a fraud detector has:

99% accuracy

That sounds excellent.

But suppose fraud represents only 1% of the data.

A system that predicts:

"Not Fraud"

for everything may still reach approximately 99% accuracy.

Therefore the project might instead emphasize:

Recall

Precision

F1-score

or another appropriate metric.

The metric should reflect the actual goal.

---

# 16. Model Success vs System Success

A model metric is not always the same as real-world success.

Suppose a recommendation model achieves excellent offline accuracy.

But users do not find the recommendations useful.

Then the AI system has not necessarily solved the intended problem.

Therefore consider:

Model-Level Success

How well does the model perform according to selected metrics?

System-Level Success

Does the complete AI solution actually solve the intended problem?

For a recommendation system:

Model Accuracy
       +
Useful Recommendations
       +
Good User Experience
       =
Better AI System

---

# 17. Determine Whether AI Is Necessary

Not every problem requires AI.

Suppose a college wants:

"Calculate the total marks of every student."

Ordinary programming can perform:

total = mark1 + mark2 + mark3

There is no need for machine learning.

But suppose the requirement is:

"Predict which students may struggle based on historical patterns."

Now learning from data may be useful.

A useful question is:

Does the problem require learning patterns from data, dealing with uncertainty, perception, language, or complex decision-making?

If not, conventional software may be simpler.

---

# 18. Rule-Based vs AI Approach

Consider an email filtering system.

A simple rule can be:

IF sender is blocked
THEN mark as spam

This is deterministic.

An AI system can learn patterns:

Email Features
      ↓
Training Data
      ↓
Machine-Learning Model
      ↓
Spam Probability

Neither approach is automatically better.

The correct approach depends on:

- Problem complexity
- Data availability
- Reliability requirements
- Explainability requirements
- Cost
- Maintenance

---

# 19. Mathematical Formulation

A basic supervised-learning problem can be represented as:

D = {
    (x_i, y_i)
}_(i=1)^n

where:

D = dataset

x_i = input features for example i

y_i = target output

n = number of examples

The model learns a function:

f_theta(x)

where:

theta

represents model parameters.

The prediction is:

y_hat = f_theta(x)

The aim is to learn parameters that allow useful predictions.

---

# 20. Mathematical Intuition

The problem-definition stage determines:

What is:

x?

What is:

y?

What should:

f_theta

produce?

For example:

x =
[
Area,
Bedrooms,
Age,
Location
]

y =
Price

Then:

f_theta(x)
=
Predicted Price

So the first mathematical decision is not optimization.

It is deciding:

What does the input represent?

What does the output represent?

---

# 21. House-Price Example

Real-world problem:

Buyers and sellers need an estimate of the expected price of a house.

Objective:

Predict estimated house price.

Inputs:

X = [
Area,
Bedrooms,
Age,
Location
]

Output:

y = Predicted Price

AI Task:

Regression

Possible Data:

Historical house sales

Success Metric:

MAE

Complete Definition:

Historical House Data
        ↓
Area, Bedrooms, Age, Location
        ↓
Regression Model
        ↓
Predicted Price
        ↓
Compare With Actual Price
        ↓
Evaluate Error

Now the problem is sufficiently defined.

---

# 22. Spam-Detection Example

Real-world problem:

Users receive unwanted emails.

Objective:

Automatically classify incoming emails.

Input:

Email content and relevant features.

Output:

Spam

or:

Not Spam

AI Task:

Classification

Training Data:

Previously labeled emails.

Success:

Evaluate the classifier on unseen emails using appropriate classification metrics.

This is more precise than:

"Build an AI spam detector."

---

# 23. Professional AI Problem Statement

A professional problem statement can follow this structure:

## Problem

What real-world problem exists?

## Objective

What should the system accomplish?

## Inputs

What information will the system use?

## Output

What should it produce?

## AI Task

Is it classification, regression, clustering, generation, recommendation, or another task?

## Data

What examples are required?

## Success Criteria

How will we determine whether the solution works?

---

# 24. Example Professional Problem Statement

Problem:

Students may struggle with different topics during a course, but identifying these difficulties manually can be difficult at scale.

Objective:

Develop an AI system that predicts whether a student is likely to require additional support for a topic.

Inputs:

- Previous quiz scores
- Practice performance
- Topic completion
- Related learning activity

Output:

Predicted support requirement

AI Task:

Classification

Evaluation:

Use appropriate classification metrics on previously unseen data.

This definition is sufficiently structured to move into later stages of an AI project.

---

# 25. Python Representation

We can represent the problem using a simple dataset.

~~~python
import pandas as pd

data = pd.DataFrame({
    "quiz_score": [
        85,
        60,
        45,
        90,
        55
    ],

    "practice_score": [
        90,
        65,
        40,
        95,
        50
    ],

    "completion": [
        100,
        80,
        60,
        100,
        70
    ],

    "needs_support": [
        0,
        0,
        1,
        0,
        1
    ]
})

print(data)
~~~

Here:

quiz_score

is an input feature.

practice_score

is an input feature.

completion

is an input feature.

needs_support

is the target.

Conceptually:

X = [
    quiz,
    practice,
    completion
]

y = needs_support

This is the beginning of converting a real-world problem into machine-readable data.

---

# 26. Feature and Target Separation

In code:

~~~python
X = data[
    [
        "quiz_score",
        "practice_score",
        "completion"
    ]
]

y = data[
    "needs_support"
]

print("Features:")
print(X)

print("Target:")
print(y)
~~~

The important relationship is:

X

→ model inputs

y

→ desired output

---

# 27. Problem Definition as a Contract

You can think of the problem definition as a contract between:

Real-World Requirement

and:

Technical System.

It defines:

Input:

What information is allowed?

Output:

What must be produced?

Objective:

What should the system accomplish?

Evaluation:

How will we judge it?

Constraints:

What limitations must be respected?

This contract makes later engineering decisions more consistent.

---

# 28. Prediction-Time Thinking

Suppose the target is:

Whether a customer will cancel next month.

A valid input might be:

Previous Usage

Current Plan

Support Calls

But:

Cancellation Date

may be invalid if it becomes known only after cancellation.

Therefore problem definition should include:

When is the prediction made?

This prevents future information from accidentally entering the model.

---

# 29. Assumptions

A well-defined AI problem may also contain assumptions.

Example:

We assume:

- Historical data represents the intended population reasonably well.
- Input data is available before the prediction.
- Labels are sufficiently reliable.
- The target definition remains meaningful.
- The deployment environment is similar enough to the development environment.

Making assumptions explicit helps identify later risks.

---

# 30. Constraints

Real AI projects can have constraints.

Examples:

Latency

Memory

Cost

Privacy

Interpretability

Availability

Regulatory requirements

For example:

An application may require:

Prediction < 100 ms

Even if a more complex model gives slightly better accuracy, it may not satisfy the latency constraint.

Therefore:

Objective
+
Constraints

define the actual engineering problem.

---

# 31. From Problem to Dataset

The problem-definition process can be viewed as:

Real-World Problem
       ↓
Objective
       ↓
Prediction Unit
       ↓
Inputs
       ↓
Output
       ↓
AI Task
       ↓
Required Data
       ↓
Success Criteria
       ↓
Constraints

Only after this structure is clear should detailed data collection and model design begin.

---

# Practice Task

Choose one of:

- Spam detection
- House-price prediction
- Student performance prediction
- Movie recommendation
- Image classification

Define:

1. Real-world problem
2. Objective
3. Inputs
4. Output
5. AI task
6. Required data
7. Success criteria
8. Why AI is appropriate

Then write your problem mathematically.

---

# Challenge

Take this vague requirement:

"Build an AI system to improve college education."

Transform it into three different AI problems.

For each problem, specify:

Problem

Objective

Inputs

Output

AI Task

Data

Success Criteria

Then explain which of the three would be the most practical to build and why.

---

# Common Mistakes

## Starting With Technology

Do not begin with:

"Which AI model should we use?"

Begin with:

"What problem are we solving?"

## Defining an Overly Broad Problem

"Improve education using AI"

is too broad.

## Not Defining the Output

Without a clear output, the dataset and model cannot be designed properly.

## Using AI Unnecessarily

Some problems are better solved using ordinary programming.

## Choosing the Metric Too Late

Success criteria should be considered during problem definition.

## Confusing Model Performance With Real-World Usefulness

A good model metric does not automatically guarantee a useful AI product.

## Ignoring Prediction Time

Features that are unavailable at prediction time can cause leakage.

---

# Quick Check

1. Why is problem definition the first stage of an AI project?

2. What is the difference between a real-world problem and an AI problem?

3. What are inputs and outputs?

4. What is the unit of prediction?

5. How do classification and regression differ?

6. What is clustering?

7. Why does every AI project need measurable success criteria?

8. Why is AI not necessary for every software problem?

9. What does f_theta(x) represent?

10. Why should model success and real-world success both be considered?

11. Why is prediction time important?

12. What should a professional AI problem statement contain?

---

# Key Takeaways

A strong AI project starts with a well-defined problem, not with a model or library.

The fundamental transformation is:

Real-World Problem
→
AI Objective
→
Inputs
→
Output
→
AI Task
→
Data
→
Success Criteria

A mathematical supervised-learning problem can be represented as:

D = {
(x_i, y_i)
}_(i=1)^n

with:

y_hat = f_theta(x)

Problem definition determines:

What enters the system.

What the system produces.

What the system is trying to accomplish.

How success will be measured.

Whether AI is actually necessary.

A good problem definition therefore acts as the foundation for the entire AI project lifecycle.

The next stage is to determine what data is required and how that data will be collected.
`,
};

export default lesson2;