const lesson2 = {
  id: "lesson2",

  title: "Why Machine Learning?",

  content: `
Lesson 02

Why Machine Learning?

Machine learning is useful because many real-world decisions are difficult to describe with a complete collection of manually written rules.

In traditional software, a developer studies the problem and writes instructions that determine what the program should do.

For some problems this works extremely well.

For other problems, especially those involving complex patterns in images, text, transactions, or user behaviour, writing all the necessary rules becomes extremely difficult.

Machine learning provides another approach.

Instead of describing every rule manually, we can provide examples and allow an algorithm to discover useful patterns.

1. Hand-Coded Rules

Early intelligent applications often relied on manually written rules.

A simple system might follow:

Input → Hand-Written Rules → Decision

Consider a basic spam filter.

A developer could create rules such as:

Message contains a suspicious word → Mark as spam

Message comes from a known suspicious address → Mark as spam

Message contains unusual formatting → Mark as spam

This approach can work when the behaviour is simple and well understood.

2. The Limitations of Hand-Coded Rules

There are two important limitations.

First, the logic is usually specific to one task.

Changing the problem can require substantial changes to the rules.

Second, designing the rules requires detailed knowledge of how the decision should be made.

For simple business processes, this may be reasonable.

For complex pattern-recognition problems, it becomes difficult.

3. Example: Detecting Faces in Images

Image recognition provides a good example of the difference between human understanding and computer representation.

A human can look at a photograph and immediately recognize a face.

A computer does not receive the same visual understanding.

An image is represented through numerical pixel information.

The appearance of a face can change because of:

Lighting

Position

Scale

Background

Pose

Image quality

Trying to describe every possible face using explicit rules would be extremely difficult.

Machine learning offers a different approach.

Instead of manually specifying every visual rule, a learning algorithm can be given many examples and can learn useful characteristics from those examples.

4. Learning From Examples

The basic machine learning idea is:

Examples → Learning Algorithm → Model

The resulting model can then be applied to new input:

New Input → Model → Prediction

This is the fundamental reason machine learning is useful.

The system does not need a developer to describe every possible situation.

It can learn a relationship from representative examples.

5. Example: Spam Detection

Suppose we collect many email messages.

For every message, we also know whether it is spam.

The dataset can be represented as:

| Email | Desired Result |
|------|----------------|
| Email A | Spam |
| Email B | Not Spam |
| Email C | Spam |
| Email D | Not Spam |

The learning algorithm uses these examples to learn patterns associated with spam and legitimate messages.

When a new email arrives:

New Email → Trained Model → Spam / Not Spam

The model produces a prediction for an email it has not previously seen.

6. Why Rules Become Difficult

A manually written rule system may begin with a few simple conditions.

As more situations are considered, more rules must be added.

For example:

Message contains suspicious word

Message contains suspicious link

Message contains unusual formatting

Message comes from a suspicious source

Message contains several suspicious characteristics

As the number of cases increases, maintaining the rules becomes difficult.

A learning-based approach can instead learn useful patterns from examples.

7. Machine Learning Automates Decision Making

One of the most useful applications of machine learning is automating decisions by generalizing from known examples.

The idea is:

Known Examples → Learn Pattern → Apply to New Example

The important word is generalize.

The model should not merely remember the training examples.

It should be able to use what it learned when a new example is presented.

8. What Machine Learning Can Solve

The source describes several examples of problems that can be formulated using machine learning.

Handwritten digit recognition

Input:

An image of handwritten digits

Desired result:

The actual digit or sequence of digits

Medical image classification

Input:

A medical image

Desired result:

A diagnostic category determined using appropriate labelled data

Fraud detection

Input:

A transaction record

Desired result:

Fraudulent or legitimate

These problems look different, but they share an important property.

Examples can be collected together with useful desired outcomes.

9. Data Collection Is Part of the Problem

Machine learning is not only about choosing an algorithm.

The data collection process can be difficult.

Consider three examples:

Handwritten digit recognition requires many examples of handwriting with their correct answers.

Medical image problems may require expert-labelled data and can involve substantial cost, privacy, and ethical considerations.

Fraud detection may rely on transaction records and reports of fraudulent activity.

Therefore, before choosing a machine learning method, it is important to ask whether the required data can actually be obtained.

10. When Machine Learning Is a Good Choice

Machine learning is particularly useful when:

The problem contains patterns that are difficult to describe manually.

Representative examples are available.

A desired outcome can be defined or useful structure can be discovered.

The system needs to work with new examples rather than only predefined cases.

There is a practical way to evaluate the quality of the result.

11. When Traditional Programming Is Better

Machine learning is not automatically the best solution.

A fixed rule may be preferable when the behaviour is already known.

For example:

If the temperature is greater than 35 degrees, display a warning.

This is deterministic.

Python

def temperature_warning(temperature):
    if temperature > 35:
        return "High temperature"
    return "Normal temperature"

print(temperature_warning(38))

Output

High temperature

The rule is simple, transparent, and easy to test.

Training a model to discover this already-known rule would add unnecessary complexity.

12. Machine Learning vs Rule-Based Systems

Rule-Based System

Input → Explicit Rules → Output

Machine Learning System

Examples → Learning Algorithm → Model

Using the Model

New Input → Model → Prediction

The important difference is where the decision logic comes from.

In a rule-based system, the developer writes the logic.

In a machine learning system, an algorithm learns useful patterns from examples.

13. The Importance of Generalization

Suppose a spam detector correctly identifies every email in its training dataset.

That alone does not prove that it is useful.

The real question is whether it can classify new messages correctly.

This gives us:

Training Examples → Learn

Unseen Examples → Test Generalization

A useful machine learning system must perform beyond the examples it was given during learning.

Generalization will become a major topic later in this module.

14. Machine Learning Is Part of a Larger System

A machine learning model is only one component of a complete application.

A practical system may look like:

Data Collection
↓
Data Preparation
↓
Machine Learning Model
↓
Prediction
↓
Evaluation
↓
Application

The surrounding software may handle:

Data storage

User interfaces

Business rules

Security

Logging

Monitoring

The model is part of the larger solution.

15. Example: Customer Recommendation

Suppose an online store wants to recommend products.

A rule-based approach might manually specify recommendations:

If customer bought a laptop → Recommend laptop accessories

If customer bought a camera → Recommend camera accessories

As the number of products and customer behaviours increases, manually maintaining all combinations becomes difficult.

A machine learning system can instead learn patterns from historical interactions.

Possible data includes:

| Customer | Product Viewed | Product Purchased |
|----------|----------------|-------------------|
| Customer A | Laptop | Laptop Bag |
| Customer B | Camera | Memory Card |
| Customer C | Laptop | Mouse |

The goal is to learn relationships that can help recommend useful products to future customers.

16. Why Data Representation Matters

Machine learning algorithms require information in a representation that a computer can process.

A useful starting point is a table.

Each row represents one data point.

Each column represents a property of that data point.

For example:

| Age | Purchase Count | Average Order |
|-----|----------------|---------------|
| 21 | 4 | 1200 |
| 29 | 8 | 2400 |
| 35 | 3 | 950 |

The rows are samples.

The columns are features.

Choosing useful features is critical because a learning algorithm cannot recover information that is not contained in the available representation.

17. A Problem With Missing Information

Suppose a model is asked to predict a customer's favourite product category.

Available information:

Customer ID only

This provides almost no useful information about preferences.

Adding useful features could include:

Previous purchases

Products viewed

Search history

Purchase frequency

The quality of a machine learning solution therefore depends not only on the learning algorithm but also on the information provided to it.

18. Understanding the Task Before Choosing the Algorithm

Before building a machine learning solution, ask:

What question am I trying to answer?

Can the available data answer that question?

Do I have enough examples?

Which features should be extracted?

How will success be measured?

How will the model interact with the rest of the application?

Randomly selecting an algorithm and applying it to a dataset is not a good development strategy.

The problem and data should be understood first.

19. The Engineering Perspective

Machine learning should be treated as one part of a larger problem-solving process.

A useful workflow is:

Problem
↓
Data
↓
Representation
↓
Learning Method
↓
Model
↓
Prediction
↓
Evaluation

A complicated machine learning model is not useful if it solves the wrong problem.

A simple and well-designed model can be more valuable than a complicated model applied to poorly understood data.

20. Practical Example

Consider a college system that wants to predict whether a student needs additional practice.

Possible information:

Recent quiz scores

Number of attempted questions

Study activity

Previous performance

The machine learning task is:

Input Data → Learning System → Prediction

The prediction might be:

Needs Additional Practice

or

Ready to Advance

The important first step is not choosing an algorithm.

It is deciding whether the available data contains enough useful information to support that prediction.

21. Simple Python Demonstration

The following program shows a manually defined decision system.

Python

def classify_score(score):
    if score >= 90:
        return "Excellent"
    elif score >= 75:
        return "Good"
    elif score >= 50:
        return "Pass"
    return "Needs Improvement"

scores = [95, 82, 61, 43]

for score in scores:
    print(score, "->", classify_score(score))

Output

95 -> Excellent
82 -> Good
61 -> Pass
43 -> Needs Improvement

This works because the rules are simple and clearly known.

As additional variables and exceptions are introduced, the rule system may become harder to maintain.

22. Small Experiment

Start with a simple rule-based classifier.

Then add:

Attendance

Assignment completion

Previous performance

Exam proximity

Observe how quickly the number of possible combinations increases.

The purpose of the experiment is to see why learning from examples can become attractive when manually written rules grow too complex.

Common Mistakes

Using machine learning simply because a problem sounds advanced

Ignoring whether representative data is available

Choosing an algorithm before understanding the task

Assuming more complexity automatically produces a better solution

Forgetting that feature representation matters

Ignoring data collection costs

Evaluating a model only on examples it already saw

Thinking that machine learning replaces ordinary software engineering

Practice

Choose one problem:

Spam detection

Fraud detection

Product recommendation

Student performance prediction

Handwritten digit recognition

For your chosen problem, write:

The input

The desired output

The type of examples required

The features that might be useful

One reason manually written rules could become difficult

Quick Check

Question

Why is machine learning useful when manually written rules become difficult?

Answer

Machine learning can use examples to learn useful patterns and apply them to new inputs, reducing the need to manually specify every possible case.

Summary

Machine learning is useful when important patterns are difficult to describe using explicit rules.

Hand-coded systems work well for clearly defined and stable behaviour.

Complex recognition and prediction tasks can require large numbers of rules.

Machine learning uses examples and a learning algorithm to construct a model.

The resulting model can be used to make predictions for new inputs.

The quality of the data and its representation is extremely important.

A good machine learning project begins by understanding the task and the available data.

Extended Study

The central difference between rule-based programming and learning-based systems is how the relationship between input and output is obtained.

A rule-based system provides the relationship directly:

Input → Rules → Output

A machine learning system estimates the relationship from examples:

Examples → Learning → Model

The model can then be applied to new data:

New Data → Model → Prediction

This does not mean that machine learning removes the need for programming.

A practical machine learning system still requires code for data handling, preprocessing, training, evaluation, application logic, and deployment.

The learning algorithm is only one part of the complete solution.

Reflection

Think about a problem such as detecting fraudulent transactions.

Ask:

Could a small collection of rules solve the problem?

What happens when fraud patterns change?

Could historical examples help the system identify new patterns?

What data would be required?

How would incorrect predictions affect users?

These questions help determine whether machine learning is appropriate.

`
};

export default lesson2;