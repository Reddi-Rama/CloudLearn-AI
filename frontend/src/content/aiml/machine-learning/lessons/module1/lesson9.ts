const lesson9 = {
  id: "lesson9",

  title: "Generalization",

  content: `
Lesson 09

Generalization


A machine learning model is useful only when it can perform well beyond the examples it was trained on.

The objective of supervised learning is not simply to reproduce the training data.

The objective is to learn patterns that remain useful when the model receives new data.

This ability is called generalization.


1. What Is Generalization?

Generalization is the ability of a trained model to make accurate predictions on previously unseen data that is similar to the type of data used during training.

The basic idea is:

Training Data → Learn Patterns

New Data → Apply Learned Patterns


A model that generalizes well can use what it learned from the training examples when faced with new examples.


2. Training Data and Unseen Data

Suppose a model is trained on customer records.

The model sees:

Customer A

Customer B

Customer C

Customer D

The model is then given:

Customer E

Customer F

Customer G

The new customers were not part of the training process.

The model must use the patterns it learned rather than simply remembering the previous examples.


3. Why Training Performance Is Not Enough

Suppose a model gives perfect predictions on its training data.

That may look impressive, but the result does not automatically mean the model will work well in practice.

A sufficiently flexible model can sometimes fit the training data extremely closely.

The important question is:

How well does the model perform on data it has not seen?


4. Training Accuracy and Test Accuracy

A useful comparison is:

Training Performance

Measures how well the model fits the examples used during training.

Test Performance

Measures how well the model performs on examples kept aside for evaluation.

A model with strong generalization should perform well on both.

A very large difference between training and test performance can be a warning sign.


5. Example: Customer Purchase Prediction

Consider a dataset used to predict whether a customer will purchase a product.

The training data may contain:

| Age | Visits | Previous Purchases | Purchase |
|-----|--------|--------------------|----------|
| 22 | 3 | 0 | No |
| 27 | 5 | 1 | No |
| 35 | 7 | 3 | Yes |
| 42 | 8 | 4 | Yes |
| 51 | 9 | 5 | Yes |

The model learns from these examples.

Later it receives:

| Age | Visits | Previous Purchases |
|-----|--------|--------------------|
| 39 | 7 | 2 |

The model must predict the purchase outcome without having previously seen this exact customer.

This is where generalization matters.


6. Learning Patterns Instead of Memorizing Examples

A model should ideally learn a useful relationship.

Consider:

Training Example → Pattern → New Example

This is preferable to:

Training Example → Memorize Exact Case

Memorization can produce excellent results on training examples while performing poorly when the model encounters new cases.


7. A Simple Example of Memorization

Suppose the training data contains these values:

| Input | Output |
|-------|--------|
| 1 | 10 |
| 2 | 20 |
| 3 | 30 |
| 4 | 40 |

A model could simply memorize these pairs.

If the input is 2, it knows the stored answer.

But the real question is what it does for:

Input = 5

A useful model should have learned a relationship that can be applied to the new value.


8. Generalization and Test Data

The test set is useful because the model did not use those examples during training.

The process is:

Training Examples
↓
Model Training
↓
Trained Model
↓
Test Examples
↓
Predictions
↓
Compare With Known Targets


The test performance provides evidence about the model's ability to generalize.


9. The Iris Example

The Iris problem contains measurements of flower samples and known species labels.

The model is trained using part of the dataset.

The remaining examples are used to evaluate the model.

The important question is not:

Can the model classify the flowers it has already seen?

The important question is:

Can it correctly classify new flowers from the same problem setting?

This is the reason training and test data are separated.


10. Similarity Between Training and Test Data

Generalization is meaningful when the unseen examples have characteristics related to the training problem.

For example:

Training data contains flower measurements.

Test data also contains flower measurements from the same type of task.

If the training data contains one kind of information and the test data represents a completely different problem, the evaluation would not tell us whether the original model generalizes to its intended use.


11. Generalization Error

A model's predictions on unseen data may differ from the correct answers.

The resulting performance difference is related to generalization.

A useful conceptual view is:

Training Error

Error measured on examples used for learning.

Generalization Error

Error observed when the model is applied to unseen examples.


The goal is to reduce the error on new data, not merely the error on the training examples.


12. A Model That Generalizes Well

A well-generalized model typically:

Learns useful patterns

Avoids memorizing individual examples

Performs well on unseen data

Maintains similar behaviour on representative test examples

A model does not need to be perfect on every sample to be useful.

It needs to perform reliably for the intended application.


13. Example: Student Prediction

Suppose a model is trained using:

Study Hours

Attendance

Previous Score

It learns from 1,000 students.

The model is then evaluated on another group of students.

If the model performs similarly on both groups, this suggests that the learned relationship captures useful patterns.

If the training result is excellent but the new-student result is poor, the model may have learned details specific to the training data.


14. Generalization Is the Real Goal

The learning process can be summarized as:

Data
↓
Learn Pattern
↓
Model
↓
New Data
↓
Useful Prediction


The model is valuable because it can operate beyond the original examples.

Generalization is therefore one of the central goals of supervised machine learning.


15. Python Example

Python

from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

X = [
    [1], [2], [3], [4],
    [5], [6], [7], [8]
]

y = [
    0, 0, 0, 0,
    1, 1, 1, 1
]

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)

model = KNeighborsClassifier(n_neighbors=3)

model.fit(X_train, y_train)

train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)

print("Training score:", train_score)
print("Test score:", test_score)


Output

Training score:

A numerical score representing performance on the training examples.

Test score:

A numerical score representing performance on unseen examples.


The comparison between the two values is more informative than looking only at the training score.


16. Understanding the Result

Suppose a model produces:

Training Score = 1.00

Test Score = 0.75

The model performs perfectly on training data but less well on unseen examples.

This difference suggests that the model does not generalize as strongly as desired.

By contrast:

Training Score = 0.92

Test Score = 0.90

shows a smaller difference.

The exact acceptable values depend on the application, but the relationship between training and unseen-data performance is important.


17. What Generalization Does Not Mean

Generalization does not mean that a model will be correct for every possible future example.

It means that the model learned patterns that remain useful for new examples from the relevant problem setting.

Unexpected conditions can still produce errors.


18. Generalization and Data Quality

Generalization depends partly on the variety and quality of the examples used for training.

If training data represents only a narrow part of the problem, the model may have difficulty handling new situations.

A representative dataset provides broader information about the task.


19. Practical Experiment

Create a small classification dataset.

Split the data into training and test sets.

Train a model.

Record:

Training score

Test score

Then modify the model settings and observe how the two scores change.

The goal is to understand the difference between fitting known examples and performing well on unseen examples.


Common Mistakes

Using training performance as the only measure of model quality

Assuming perfect training accuracy means a perfect model

Forgetting that the model must work on new examples

Testing on data that has already been used for training

Using a test set that does not represent the intended problem

Ignoring the difference between training and test performance


Practice

Take a classification dataset.

Divide it into training and test sets.

Train a simple model.

Measure the training score and test score.

Explain which score provides evidence about generalization and why.


Quick Check

Question

What does generalization mean in machine learning?

Answer

Generalization is the ability of a trained model to perform accurately on relevant data that it did not see during training.


Summary

The goal of supervised learning is to learn patterns that can be applied to new data.

A model that performs well only on training examples is not necessarily useful.

Test data provides a way to examine performance on unseen examples.

Generalization describes the model's ability to transfer what it learned to new data.

Good generalization is one of the main goals of machine learning.


Extended Study

Suppose a model is trained on a dataset:

D_train

The resulting model is then evaluated on:

D_test

The training process attempts to find a model that fits the available examples.

The practical goal, however, is to minimize error on the relevant unseen data.

Conceptually:

Learn From D_train

Evaluate On D_test

A large difference between training and test performance can indicate that the model has learned details that do not transfer well to new examples.

This leads directly to the concepts of overfitting and underfitting.


Reflection

Imagine a model that achieves 100 percent accuracy on the training dataset.

Ask:

Does that guarantee good real-world performance?

What would happen if the model memorized individual examples?

Why is a separate test set necessary?

What characteristics should the test data have?

These questions form the basis for understanding overfitting and underfitting.
`
};

export default lesson9;