const lesson4 = {
  id: "lesson4",
  title: "Supervised vs Unsupervised Learning",

  content: `
Lesson 04

Supervised vs Unsupervised Learning

Machine learning problems are commonly divided according to the type of information available during learning.

The two fundamental approaches introduced here are supervised learning and unsupervised learning.

The main difference is whether the training data includes a known desired output.

Supervised Learning

Input + Known Output → Learning Algorithm → Model

Unsupervised Learning

Input Data → Learning Algorithm → Discovered Structure

1. Supervised Learning

In supervised learning, the training data contains examples of inputs together with their desired outputs.

The model learns a relationship between the input and the known output.

A simplified process is:

Training Examples
↓
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

Consider an email spam detector.

Training examples might contain:

| Email | Label |
|-------|-------|
| Message A | Spam |
| Message B | Not Spam |
| Message C | Spam |
| Message D | Not Spam |

The model learns from these examples.

When a new message arrives:

New Email → Trained Model → Spam / Not Spam

The output for a new email is predicted from patterns learned from the labelled examples.

3. Examples of Supervised Learning

Handwritten digit recognition

Input:

Image of a handwritten digit

Desired Output:

Correct digit

Medical image classification

Input:

Medical image

Desired Output:

Known diagnostic category

Fraud detection

Input:

Transaction information

Desired Output:

Fraudulent or legitimate

Student performance prediction

Input:

Study hours, previous marks, attendance and related information

Desired Output:

Predicted score or performance category

4. Creating a Supervised Dataset

A supervised dataset requires both the input information and the desired result.

Example:

| Study Hours | Previous Score | Final Score |
|-------------|----------------|-------------|
| 2 | 55 | 61 |
| 3 | 62 | 68 |
| 4 | 72 | 79 |
| 5 | 81 | 87 |

The first two columns are inputs.

The final column is the desired output.

The quality of the output labels matters because the model learns from the examples provided.

5. Advantages of Supervised Learning

Supervised learning is useful when the desired result can be defined clearly.

Its major advantages include:

The task is clearly specified.

The model can be trained using known outcomes.

Performance can be measured against known answers.

Many practical prediction problems can be formulated in this way.

The main challenge is obtaining reliable labelled data.

6. The Cost of Labelling Data

Creating labels can require significant human effort.

For handwritten digits, a person may identify the correct digit.

For medical images, expert knowledge may be required.

For fraud detection, transaction records may need reliable fraud labels.

The availability and quality of labels therefore affect whether supervised learning is practical.

7. Unsupervised Learning

In unsupervised learning, the algorithm receives input data without predefined desired outputs.

The objective is to discover useful structure or patterns within the data.

The basic process is:

Input Data
↓
Learning Algorithm
↓
Discovered Structure
↓
Interpretation

There is no target value supplied for each example.

8. Example of Unsupervised Learning

Suppose an online store has customer records but does not know which customers belong to which groups.

The available information might include:

Purchase frequency

Average order value

Products viewed

Number of visits

The learning algorithm can search for groups of customers with similar behaviour.

Possible groups may emerge from the data.

The groups were not provided beforehand.

9. Examples of Unsupervised Learning

Customer segmentation

Input:

Customer records

Desired discovery:

Groups of similar customers

Topic discovery

Input:

Collection of documents

Desired discovery:

Common themes or topics

Anomaly detection

Input:

Website access records

Desired discovery:

Patterns that differ strongly from normal behaviour

10. Supervised vs Unsupervised

| Aspect | Supervised Learning | Unsupervised Learning |
|--------|---------------------|-----------------------|
| Input data | Available | Available |
| Desired output | Known | Not predefined |
| Main goal | Predict an outcome | Discover structure |
| Labels | Required | Not required |
| Example | Spam classification | Customer grouping |

The distinction is based on the information available during learning.

11. The Role of Labels

A label is the known desired output associated with a training example in supervised learning.

For example:

Email → Spam

The word Spam is the label.

For an image classification problem:

Image → Cat

The category Cat is the label.

Unsupervised learning does not begin with such predefined labels.

12. Thinking About the Problem

Before choosing an algorithm, ask:

Do I know the desired output?

Do I have examples of the correct answer?

Can the output be measured?

Or am I trying to discover hidden groups or patterns?

These questions help determine whether supervised or unsupervised learning is appropriate.

13. A Practical Comparison

Suppose we have customer data.

Problem A:

Predict whether a customer will cancel a subscription.

Known historical outcomes:

Cancelled

Did Not Cancel

This is a supervised problem.

Problem B:

Discover groups of customers with similar purchasing behaviour.

No predefined customer groups exist.

This is an unsupervised problem.

14. Python Example

The following example represents a small labelled dataset.

Python

customers = [
    [2, 1500, 0],
    [5, 4200, 1],
    [3, 2100, 0],
    [7, 6200, 1]
]

for customer in customers:
    visits, spending, label = customer
    print(
        "Visits:", visits,
        "Spending:", spending,
        "Label:", label
    )

Output

Visits: 2 Spending: 1500 Label: 0
Visits: 5 Spending: 4200 Label: 1
Visits: 3 Spending: 2100 Label: 0
Visits: 7 Spending: 6200 Label: 1

The final value in each row is a known label.

This makes the dataset suitable for a supervised-learning formulation.

15. Python Example of Unlabelled Data

Python

customers = [
    [2, 1500],
    [5, 4200],
    [3, 2100],
    [7, 6200]
]

for customer in customers:
    print(customer)

Output

[2, 1500]
[5, 4200]
[3, 2100]
[7, 6200]

Here the data contains inputs but no known target.

An unsupervised method could be used to search for structure in these records.

16. A Key Difference

Supervised learning asks:

What should the model predict?

Unsupervised learning asks:

What structure or pattern can be discovered in the data?

This distinction is one of the most important foundations of machine learning.

17. Choosing Between the Two

Use supervised learning when:

A desired outcome is known.

Training examples can be labelled.

The task is prediction or classification.

Use unsupervised learning when:

Desired outcomes are not known.

The objective is to discover structure.

The data may contain natural groups or unusual patterns.

18. Real-World Data Can Be More Complicated

A real system may use both approaches.

For example, an online store may:

Use supervised learning to predict whether a customer will make a purchase.

Use unsupervised learning to discover customer segments.

The two methods can therefore serve different parts of the same product.

19. Experiment

Take a dataset from a familiar application.

Decide whether the problem is supervised or unsupervised.

Then explain:

What information is available?

Is a target known?

What should the model learn?

What would the result look like?

20. Common Mistakes

Confusing unlabeled data with incorrect labels.

Assuming unsupervised learning requires no useful structure in the data.

Thinking supervised learning always means classification.

Forgetting that supervised learning also includes regression.

Choosing a learning approach before defining the actual problem.

Quick Check

Question

What is the main difference between supervised and unsupervised learning?

Answer

Supervised learning uses examples with known desired outputs, while unsupervised learning works with input data without predefined outputs and attempts to discover useful structure.

Summary

Supervised learning learns from input and desired-output pairs.

Unsupervised learning works without predefined target outputs.

Classification and regression are major supervised-learning tasks.

Clustering and related methods are common unsupervised-learning tasks.

The correct choice depends on the problem, the available data, and whether reliable outputs are known.

Extended Study

A supervised dataset can be written as:

D = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}

The input x and known target y form each training example.

The learning algorithm uses these examples to estimate a model.

In an unsupervised setting, the dataset can be represented more simply as:

D = {x₁, x₂, ..., xₙ}

There is no predefined y for each example.

The learning algorithm must therefore discover some useful structure from the input data.

This difference has consequences for both development and evaluation.

Supervised systems can compare predictions with known targets.

Unsupervised systems often require different ways of judging whether the discovered structure is useful.

Reflection

Consider a student database.

Problem A:

Predict the final examination score.

Problem B:

Discover groups of students with similar study behaviour.

Determine which problem is supervised and which is unsupervised.

Then identify what information would be needed in each case.
`
};

export default lesson4;