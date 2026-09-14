const lesson1 = {
  id: "lesson1",

  title: "What Is Machine Learning?",

  content: `
Lesson 01

What Is Machine Learning?

Machine Learning is a field of computing that focuses on learning useful patterns from data.

Instead of requiring a developer to describe every possible rule explicitly, a machine learning system can use examples to learn a relationship that can later be applied to new data.

A useful way to think about machine learning is:

Examples → Learning Process → Model → New Input → Prediction

The model is created from available data and is then used to produce predictions for inputs it has not previously seen.

1. Understanding Machine Learning

Suppose an online store wants to predict whether a customer is likely to purchase a product.

The system might have information about:

Previous purchases

Number of visits

Time spent on the website

Products viewed

Previous interactions

The desired result could be:

Likely to Purchase

or

Unlikely to Purchase

A machine learning system can learn patterns from historical examples and use those patterns when a new customer is encountered.

The important idea is that the system learns from examples instead of requiring a complete set of manually written decision rules.

2. Machine Learning as Knowledge Extraction

Machine learning can be viewed as a process of extracting useful information from data.

A dataset contains observations.

A learning algorithm searches for patterns in those observations.

The resulting model represents a useful relationship.

The model can then be applied to new observations.

The overall process is:

Data → Learning → Model → Prediction

Machine learning is therefore closely connected with data, statistics, and computer science.

3. Why Learn From Examples?

Some problems are easy to describe using rules.

For example:

If an order amount is greater than 5000, apply a discount.

This is a clearly defined rule.

Other problems are much harder to describe.

Consider identifying a face in a digital image.

An image contains many pixels.

The appearance of a face can change because of:

Lighting

Pose

Scale

Background

Expression

Image quality

Trying to manually describe every possible visual condition with rules becomes extremely difficult.

A learning-based approach can instead use many examples of faces and non-faces and learn useful characteristics from those examples.

4. From Examples to a Model

Suppose we provide the learning system with examples such as:

Input → Desired Output

Email A → Spam

Email B → Not Spam

Email C → Spam

Email D → Not Spam

The learning process uses these examples to construct a model.

Later, a new email is supplied:

New Email → Model → Prediction

The prediction might be:

Spam

or

Not Spam

The model has not necessarily seen the exact new email before. Its purpose is to use patterns learned from previous examples.

5. Supervised Learning

When training examples include both inputs and desired outputs, the problem is called supervised learning.

The structure is:

Input + Desired Output → Learning Algorithm → Model

After training:

New Input + Model → Prediction

For a spam detector:

Input:

Email content and related information

Desired Output:

Spam or Not Spam

Prediction:

Spam or Not Spam

The desired output provides supervision during learning.

6. Examples of Machine Learning Problems

Machine learning can be used for many different kinds of problems.

Recognizing handwritten digits

Input:

An image containing handwritten digits

Output:

The digit represented by the image

Medical image classification

Input:

A medical image

Output:

A predicted category

Fraud detection

Input:

Information about a financial transaction

Output:

Fraudulent or legitimate

Customer recommendation

Input:

Customer history and available products

Output:

Recommended products

These examples have different data collection requirements and different consequences when the predictions are wrong.

7. Unsupervised Learning

Not every machine learning problem has known desired outputs.

In unsupervised learning, the system receives input data without a predefined target for every example.

The basic idea is:

Input Data → Learning Algorithm → Structure or Pattern

For example, an online store may have customer records but no predefined customer groups.

A machine learning method can examine the records and discover groups of customers with similar behaviour.

Possible groups could represent customers with similar purchasing patterns.

8. Data Representation

Machine learning algorithms require data in a representation that a computer can process.

A useful representation is a table.

Each row represents one sample.

Each column represents a feature.

Example:

| Study Hours | Attendance | Previous Score |
|-------------|------------|----------------|
| 2 | 75 | 58 |
| 4 | 88 | 72 |
| 5 | 91 | 81 |

Each row describes one student.

The columns describe properties of the students.

The individual rows are samples.

The columns are features.

The choice of features is important because a machine learning algorithm cannot make a useful prediction from information that is not present in the data.

9. Samples

A sample is one individual data point.

For example:

| Study Hours | Attendance | Previous Score |
|-------------|------------|----------------|
| 4 | 88 | 72 |

This row represents one sample.

A dataset can contain:

10 samples

100 samples

10,000 samples

or many more.

The number of samples and the quality of those samples affect what the learning algorithm can discover.

10. Features

A feature describes some property of a sample.

For a student-performance problem, examples could include:

Study Hours

Attendance

Previous Score

Assignments Completed

Questions Attempted

For an image, features could represent pixel values.

For a transaction, features could include:

Transaction Amount

Transaction Time

Merchant Type

Location

The features should contain information relevant to the machine learning task.

11. Targets and Desired Outputs

In a supervised learning problem, each training example is associated with a desired output.

For example:

| Study Hours | Previous Score | Final Score |
|-------------|----------------|-------------|
| 2 | 55 | 61 |
| 3 | 62 | 68 |
| 4 | 72 | 79 |
| 5 | 81 | 87 |

The features are:

Study Hours

Previous Score

The target is:

Final Score

The model learns a relationship between the features and target values.

12. Knowing the Task and the Data

A good machine learning project begins with understanding the problem and the available data.

Before selecting an algorithm, consider:

What question needs to be answered?

Can the available data answer that question?

Is enough representative data available?

Which features have been extracted?

Will those features support the required prediction?

How will success be measured?

How will the machine learning component interact with the rest of the application?

The algorithm is only one part of the solution.

13. A Simple Mathematical View

A simple machine learning model can be represented as:

ŷ = f(x)

Here:

x represents the input

f represents the learned relationship

ŷ represents the predicted output

For multiple input features:

ŷ = f(x₁, x₂, ..., xₙ)

For example, a student-performance model could use:

x₁ = Study Hours

x₂ = Attendance

x₃ = Previous Score

The output could be:

ŷ = Predicted Final Score

14. A Simple Example

Suppose a model is trained using:

| Study Hours | Final Score |
|-------------|-------------|
| 1 | 48 |
| 2 | 56 |
| 3 | 64 |
| 4 | 72 |
| 5 | 81 |

A new student has:

Study Hours = 6

The trained model can use the relationship it learned from the examples to produce a predicted score.

The important concept is not that the model remembers one particular answer.

The important concept is that it attempts to learn a pattern that can be applied to new input.

15. Machine Learning vs Explicit Rules

Traditional programming can be represented as:

Data + Rules → Program → Output

A learning-based approach can be represented as:

Examples → Learning Algorithm → Model

Then:

New Data + Model → Prediction

Traditional programming puts the decision logic primarily in rules written by the developer.

Machine learning moves an important part of that relationship into a model learned from data.

16. Python Example

Python

def scholarship_status(score):
    if score >= 85:
        return "Eligible"
    return "Not Eligible"

print(scholarship_status(91))

Output

Eligible

This example uses a manually defined rule.

It is useful as a comparison because the developer already knows exactly how the decision should be made.

There is no need for machine learning when the rule is known and simple.

17. Small Machine Learning Example

A simple learning-based example can be built with scikit-learn.

Python

from sklearn.linear_model import LinearRegression

X = [[1], [2], [3], [4], [5]]
y = [48, 56, 64, 72, 81]

model = LinearRegression()

model.fit(X, y)

prediction = model.predict([[6]])

print("Predicted score:", prediction[0])

Output

The exact prediction depends on the fitted model.

The important steps are:

Load Examples

Train Model

Provide New Input

Generate Prediction

18. The Learning Process

A machine learning system can be understood as a pipeline:

Problem
↓
Data
↓
Features and Targets
↓
Learning Algorithm
↓
Model
↓
New Data
↓
Prediction
↓
Evaluation

Each stage has a specific purpose.

A poorly defined problem can produce a poor machine learning solution.

Poor data can produce poor predictions.

An inappropriate representation can prevent the model from learning useful patterns.

A model must therefore be considered as part of a complete system.

19. Why Data Matters

Machine learning depends heavily on the information contained in the data.

Suppose a model is asked to predict a student's final score but is given only the student's last name.

The last name does not contain enough relevant information to reliably predict academic performance.

Adding meaningful features can provide the model with useful information.

This leads to an important principle:

A machine learning model cannot learn useful information that is absent from its input data.

20. Real-World Machine Learning

Machine learning is used in many practical systems.

Examples include:

Recommendation systems

Image recognition

Speech processing

Fraud detection

Demand prediction

Search systems

Personalization

Medical analysis

Scientific research

The size of the application can vary significantly.

The same basic ideas apply whether the dataset contains a few hundred examples or millions of observations.

Experiment

Choose one real-world problem.

Identify:

The input

The desired output

The available examples

The features

The prediction

Then decide whether the problem would be easier to solve using manually written rules or learning from data.

Common Mistakes

Calling every automated program machine learning

Using machine learning when a simple rule is already known

Choosing an algorithm before understanding the problem

Ignoring the quality of the data

Using features that do not contain useful information

Confusing samples with features

Assuming a prediction is guaranteed to be correct

Thinking that the model is the entire application

Practice

Choose one of these applications:

Spam detection

House-price prediction

Student-performance prediction

Customer recommendation

Fraud detection

For your selected application, identify the input, output, samples, features, and whether labelled outputs would be available.

Quick Check

Question

What is the central idea of machine learning?

Answer

Machine learning uses examples and a learning process to build a model that can identify useful patterns and apply them to new inputs.

Summary

Machine learning focuses on extracting useful patterns and knowledge from data.

A learning algorithm uses examples to create a model.

The trained model can then process new inputs and produce predictions.

Supervised learning uses examples with desired outputs.

Unsupervised learning works with input data without predefined outputs.

Samples represent individual data points.

Features describe properties of those samples.

A good machine learning solution begins with understanding the problem and the data rather than immediately choosing an algorithm.

Extended Study

Machine learning can be viewed as the construction of a useful mapping between inputs and outputs.

For a supervised problem:

D = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}

Each pair contains an input and its corresponding target.

A model attempts to represent the relationship:

ŷ = fθ(x)

The parameter set θ determines the behaviour of the model.

Training uses available examples to estimate useful values of these parameters.

The goal is not simply to reproduce the training examples.

The model should learn a relationship that remains useful when new examples are provided.

This leads naturally to the concept of generalization, which becomes important throughout the rest of this module.

Reflection

Consider a problem where a system must predict whether a customer will purchase a product.

Think about:

What information would the system need?

Which values would be features?

What would the target represent?

What examples would be required?

Could the same problem be solved using fixed rules?

Would the rules become difficult to maintain as customer behaviour changes?

These questions provide the foundation for understanding why machine learning is useful.
`
};

export default lesson1;