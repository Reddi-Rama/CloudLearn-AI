const lesson3 = {
  id: "lesson3",

  title: "Types of Machine Learning",

  content: `
Lesson 03

Types of Machine Learning

Machine learning problems can be approached in different ways depending on what information is available during learning.

The introductory material in the source distinguishes two major approaches:

Supervised Learning

Unsupervised Learning

The key difference is whether the desired output is known for the training examples.

Supervised Learning

Known Inputs + Known Outputs

Unsupervised Learning

Known Inputs + No Known Outputs

1. Supervised Learning

In supervised learning, the algorithm receives examples containing both the input and the desired output.

The learning process can be represented as:

Input + Desired Output
↓
Learning Algorithm
↓
Model
↓
New Input
↓
Prediction

The desired output acts as supervision during learning.

2. Example of Supervised Learning

Suppose we want to identify whether an email is spam.

Training data could look like:

| Email | Label |
|------|-------|
| Email A | Spam |
| Email B | Not Spam |
| Email C | Spam |
| Email D | Not Spam |

The input is the email.

The desired output is the label.

The model learns patterns from these examples.

For a new email:

New Email → Model → Spam / Not Spam

3. Why It Is Called Supervised Learning

The training data contains the answer for each example.

The algorithm receives:

Input

Desired Output

The desired outputs act like a teacher providing the information required during learning.

This makes it possible to compare the model's prediction with the known result.

4. Common Supervised Learning Problems

The source gives several examples of supervised learning.

Handwritten digit recognition

Input:

A scanned image containing handwritten digits

Output:

The correct digit or digits

Medical image classification

Input:

A medical image

Output:

A known diagnostic category

Fraud detection

Input:

A transaction record

Output:

Fraudulent or legitimate

In each case, the training examples contain information about the expected result.

5. Classification

A supervised learning problem is often a classification problem when the desired output is one of several categories.

Examples:

Spam or Not Spam

Fraudulent or Legitimate

Digit 0, 1, 2, and so on

The possible categories are the classes.

A model learns to assign new examples to one of those classes.

6. Unsupervised Learning

In unsupervised learning, the algorithm receives input data but does not receive a known desired output for every example.

The process is:

Input Data
↓
Learning Algorithm
↓
Discovered Structure or Pattern

The algorithm attempts to find useful structure within the data.

There is no predefined answer attached to each training example.

7. Example of Unsupervised Learning

Suppose an online store has customer records.

The available information may include:

Age

Purchase frequency

Average spending

Number of products purchased

However, the business has not already defined customer groups.

An unsupervised learning method can examine the data and discover groups of customers with similar characteristics.

Possible groups might correspond to different patterns of purchasing behaviour.

8. Identifying Topics in Text

Another unsupervised example is discovering topics within a collection of documents.

Suppose a website has thousands of articles.

The system receives:

Article 1

Article 2

Article 3

Article 4

No topic labels are provided.

An unsupervised method can search for recurring patterns and help identify groups of related documents or common themes.

The important point is that the topics were not supplied as known answers.

9. Detecting Abnormal Behaviour

Unsupervised learning can also be useful when abnormal behaviour is not already labelled.

Consider website access records.

The system receives information about normal traffic patterns.

Known labels for every abnormal event may not exist.

An unsupervised method can search for patterns that differ significantly from the normal structure.

The process is:

Observed Data → Learn Normal Structure → Identify Unusual Patterns

10. Supervised vs Unsupervised Learning

| Property | Supervised Learning | Unsupervised Learning |
|----------|---------------------|-----------------------|
| Input data | Available | Available |
| Desired output | Known | Not known |
| Learning goal | Predict known target | Discover structure |
| Typical use | Classification | Grouping |
| Evaluation | Usually easier | Often more difficult |

The most important distinction is the availability of known outputs.

11. Data Representation

Both supervised and unsupervised learning require data to be represented in a useful form.

A common representation is a table.

Example:

| Age | Purchase Count | Average Order |
|-----|----------------|---------------|
| 21 | 4 | 1200 |
| 29 | 8 | 2400 |
| 35 | 3 | 950 |
| 42 | 10 | 3100 |

Each row represents one sample.

Each column represents one feature.

For supervised learning, another column may contain the target.

For unsupervised learning, the available table may contain only the input features.

12. Samples and Features

A sample is one individual data point.

A feature is one property describing that sample.

For example:

| Age | Visits | Spending |
|-----|--------|----------|
| 21 | 12 | 1800 |

The row is one sample.

Age, Visits, and Spending are features.

The same basic representation can be used for many kinds of machine learning data.

13. Supervised Learning Data

Suppose we want to predict whether a customer will purchase a product.

Our dataset might contain:

| Visits | Time on Site | Previous Purchases | Purchase |
|--------|--------------|--------------------|----------|
| 3 | 5.2 | 1 | Yes |
| 8 | 12.4 | 3 | Yes |
| 2 | 2.1 | 0 | No |
| 5 | 6.7 | 1 | No |

Features:

Visits

Time on Site

Previous Purchases

Target:

Purchase

The target is already known for the training examples.

14. Unsupervised Learning Data

Suppose instead that we want to discover groups of customers.

The dataset could be:

| Visits | Time on Site | Previous Purchases |
|--------|--------------|--------------------|
| 3 | 5.2 | 1 |
| 8 | 12.4 | 3 |
| 2 | 2.1 | 0 |
| 5 | 6.7 | 1 |

There is no predefined target column.

The learning method searches for structure within the available features.

15. The Role of Labels

In supervised learning, the desired output is commonly called a label when the task is classification.

For example:

Email → Spam

Email → Not Spam

The labels allow the algorithm to learn a relationship between input examples and known outcomes.

In unsupervised learning, there are no predefined labels for the structure being discovered.

16. Comparing the Learning Process

Supervised learning:

Training Examples
↓
Input + Known Output
↓
Learning Algorithm
↓
Model
↓
Prediction

Unsupervised learning:

Input Data
↓
Learning Algorithm
↓
Discovered Structure

The two approaches therefore begin with different kinds of information.

17. Choosing Between the Two

A useful question is:

Do I know the desired output for my training examples?

If yes, a supervised learning formulation may be appropriate.

If no, an unsupervised learning approach may be appropriate.

But the choice should also consider the actual goal, available data, and how the result will be evaluated.

18. Data Collection Considerations

Supervised learning often requires labelled examples.

Creating those labels can be expensive or time-consuming.

For example, medical image classification may require expert judgement to determine the correct outcomes.

Unsupervised learning does not require predefined labels, but its results can be more difficult to interpret and evaluate.

Therefore, the availability of labels is an important engineering consideration.

19. Why Understanding the Data Matters

A learning algorithm cannot recover information that is absent from the input representation.

Suppose a system must predict customer preferences but has only a customer identifier.

The model has very little useful information to work with.

Adding meaningful features such as purchase history, browsing behaviour, and spending patterns can make the task more informative.

This principle applies to both supervised and unsupervised learning.

20. Practical Example

Consider a shopping website.

Problem A

Predict whether a customer will purchase a product.

Known output:

Purchase or No Purchase

This can be formulated as supervised learning.

Problem B

Discover groups of customers with similar shopping behaviour.

Known output:

No predefined groups

This can be formulated as unsupervised learning.

The same business domain can therefore contain both supervised and unsupervised machine learning problems.

21. Python Example

A supervised-learning dataset can be represented using Python lists.

Python

X = [
    [3, 5.2, 1],
    [8, 12.4, 3],
    [2, 2.1, 0],
    [5, 6.7, 1]
]

y = [
    "Yes",
    "Yes",
    "No",
    "No"
]

print("Features:", X)
print("Labels:", y)

Output

The features contain the input information.

The labels contain the known desired outputs.

This is the basic structure of a supervised learning problem.

22. Unsupervised Data Representation

For an unsupervised problem, we can use the same feature data without the target labels.

Python

X = [
    [3, 5.2, 1],
    [8, 12.4, 3],
    [2, 2.1, 0],
    [5, 6.7, 1]
]

print("Input data:", X)

Output

The algorithm receives the input data and attempts to discover structure from it.

Common Mistakes

Thinking supervised learning means the model is manually programmed

Assuming every machine learning problem has a known target

Confusing classification labels with input features

Assuming unsupervised learning has no useful output

Ignoring the difficulty of collecting labelled data

Choosing supervised or unsupervised learning without defining the actual task

Assuming an unsupervised group automatically represents a meaningful real-world category

Practice

For each problem, decide whether supervised or unsupervised learning is more appropriate.

Email spam detection

Customer grouping

Fraud detection with labelled transactions

Discovering topics in documents

Detecting unusual website traffic

For every answer, identify whether a known desired output is available.

Quick Check

Question

What is the main difference between supervised and unsupervised learning?

Answer

Supervised learning uses input examples together with known desired outputs, while unsupervised learning uses input data without predefined outputs and attempts to discover useful structure or patterns.

Summary

Machine learning problems can be approached using different learning strategies.

Supervised learning uses known input and output examples.

Unsupervised learning uses input data without known desired outputs.

Classification is a common supervised learning task in which the model predicts a category.

Unsupervised methods can be used to discover groups, patterns, topics, or unusual behaviour.

Samples represent individual data points.

Features describe properties of those samples.

The availability of labelled data is an important factor when selecting a learning approach.

Extended Study

The distinction between supervised and unsupervised learning is fundamentally about what information is available during training.

For supervised learning, the training data can be represented as:

D = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}

Each input x is paired with a known target y.

The learning algorithm attempts to learn a relationship between them.

For unsupervised learning, the dataset may instead contain only:

D = {x₁, x₂, ..., xₙ}

The algorithm receives the observations without predefined target values and searches for useful structure.

These two approaches support different kinds of problems.

The supervised approach is useful when a target can be defined and labelled examples can be collected.

The unsupervised approach is useful when the goal is to discover patterns or structure that is not already labelled.

A practical machine learning engineer must therefore understand the data before selecting the learning method.

Reflection

Consider an online shopping platform with customer data.

Problem 1:

Predict whether a customer will purchase a product.

Problem 2:

Discover groups of customers with similar behaviour.

Problem 3:

Find unusual customer activity.

Think about which of these problems has known desired outputs and which requires the system to discover structure.

This distinction will help you understand the algorithms introduced later in the course.
`
};

export default lesson3;