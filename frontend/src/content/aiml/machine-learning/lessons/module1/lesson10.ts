const lesson10 = {
  id: "lesson10",

  title: "Overfitting and Underfitting",

  content: `
Lesson 10

Overfitting and Underfitting


A machine learning model should learn patterns that generalize to new data.

Two common problems occur when the model is not appropriate for the available information.

Overfitting

The model is too closely fitted to the training data.

Underfitting

The model is too simple to capture important patterns in the data.


1. Overfitting

Overfitting occurs when a model learns the training examples too closely, including details that do not represent the broader pattern.

The model may perform very well on training data but poorly on unseen data.

The basic pattern is:

Complex Model
↓
Very Good Training Performance
↓
Poor Unseen-Data Performance


2. Why Overfitting Happens

A model with too much flexibility can adapt to individual training examples.

Instead of learning the general relationship, it begins to model details that are specific to the training set.

This can produce:

High Training Performance

Lower Test Performance


3. Example of an Overly Specific Rule

Suppose a small customer dataset contains examples of customers who purchased a boat.

A researcher creates an extremely complicated rule involving:

Age

Number of children

Marital status

House ownership

Dog ownership

Other customer properties

The rule may classify every example in the small training table correctly.

But the rule may depend too heavily on unusual details found in only a few examples.

It may therefore perform poorly when new customers are introduced.

This is the key idea behind overfitting.


4. Memorizing Training Data

A model can sometimes effectively memorize the training examples.

For example, suppose the training data contains:

| Age | Purchase |
|-----|----------|
| 24 | No |
| 31 | No |
| 46 | Yes |
| 53 | Yes |
| 61 | Yes |

A model could create highly specific decisions that fit these exact rows.

But if a new customer is 47 years old, the model must produce a useful prediction rather than search for an exact memorized example.


5. Underfitting

Underfitting is the opposite problem.

The model is too simple to capture important relationships in the data.

The model may perform poorly even on the training examples.

The basic pattern is:

Too Simple Model
↓
Important Patterns Missed
↓
Poor Training Performance
↓
Poor Test Performance


6. Example of Underfitting

Suppose customer purchase behaviour depends on several useful variables.

A model uses only one extremely simple rule:

Everyone with a house purchases a boat.

This rule may be easy to understand.

But the real data may contain many customers who own houses but do not purchase boats.

The model is too simple to capture the variability in the data.

This is underfitting.


7. Finding the Useful Middle Ground

The goal is not to make the model as simple as possible or as complex as possible.

The goal is to find an appropriate level of complexity.

The relationship can be represented as:

Too Simple
↓
Underfitting
↓
Useful Complexity
↓
Good Generalization
↓
Too Complex
↓
Overfitting


8. Model Complexity

Model complexity describes how flexible the model is and how many different patterns it can represent.

A simple model may represent only broad relationships.

A highly flexible model may represent very detailed relationships.

As flexibility increases:

Training performance generally becomes easier to improve.

But excessive flexibility can reduce generalization.


9. Training and Test Performance

Consider these examples.

Case A

Training Performance = 60%

Test Performance = 58%

The model may be too simple.

Case B

Training Performance = 99%

Test Performance = 70%

The model may be fitting the training data too closely.

Case C

Training Performance = 92%

Test Performance = 90%

The model may have found a more useful balance.

The exact numbers are illustrative.

The key idea is the relationship between training and unseen-data performance.


10. The Sweet Spot

A useful model lies between the two extremes.

The conceptual relationship is:

Underfitting → Good Generalization → Overfitting

The middle region represents a model that captures useful structure without fitting individual training examples too closely.


11. Complexity and Accuracy

As model complexity increases, training performance can continue to improve.

However, test performance may eventually reach a point where increasing complexity makes it worse.

This creates a typical pattern:

Model Complexity → Increasing

Training Performance → Generally Increasing

Test Performance → Improves Then May Decline


The point where test performance is strongest is the region we want to identify.


12. Example: Polynomial Model

Consider a simple relationship between input and output.

A very low-degree polynomial may fail to represent the relationship.

A moderate-degree polynomial may fit the pattern well.

A very high-degree polynomial may pass through many individual training points while behaving badly between them or outside the training examples.

This illustrates the trade-off between simplicity and flexibility.


13. Python Example

Python

from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline

X = [[1], [2], [3], [4], [5], [6]]
y = [2, 5, 10, 17, 26, 37]

for degree in [1, 2, 5]:

    model = make_pipeline(
        PolynomialFeatures(degree=degree),
        LinearRegression()
    )

    model.fit(X, y)

    train_score = model.score(X, y)

    print(
        "Degree:",
        degree,
        "Training score:",
        train_score
    )


Output

Degree: 1

Training score: A lower score may occur because the model is too simple.

Degree: 2

Training score: A stronger fit may occur.

Degree: 5

Training score: The model may fit the small training dataset extremely closely.


The experiment demonstrates that increasing flexibility can make it easier to fit the training data.


14. Why Training Score Alone Is Dangerous

Suppose a more complex model achieves:

Training Score = 1.00

That result alone does not prove that it is the best model.

A simpler model might perform slightly worse on training data but better on unseen data.

The real objective is generalization.


15. Overfitting and Test Data

A practical comparison is:

| Model | Training Score | Test Score |
|-------|-----------------|------------|
| Model A | 0.70 | 0.68 |
| Model B | 0.91 | 0.89 |
| Model C | 1.00 | 0.71 |

Model C has the highest training score.

Model B has better test performance.

Therefore Model B is more useful for this simplified example.


16. How to Reduce Overfitting

Common strategies include:

Use more representative training data.

Reduce unnecessary model complexity.

Select useful features.

Use appropriate regularization when available.

Evaluate on unseen data.

Use cross-validation during model development.

The appropriate strategy depends on the algorithm and problem.


17. How to Address Underfitting

Possible strategies include:

Use a more expressive model.

Add informative features.

Reduce excessive constraints.

Allow the model to capture more of the actual relationship.

Improve the representation of the data.


18. Data and Model Complexity

A highly complex model requires enough varied information to support that complexity.

A complex model trained on a tiny and repetitive dataset can easily fit accidental details.

A broader dataset may provide enough variation to support a more flexible model.

This relationship becomes the focus of the next lesson.


19. Practical Experiment

Create a small dataset.

Train:

A simple model

A moderately complex model

A highly flexible model

Compare training performance and test performance.

Observe which model provides the best unseen-data performance.


Common Mistakes

Choosing a model because it has the highest training score

Assuming a more complex model is always better

Assuming a simpler model is always better

Ignoring test performance

Using too many irrelevant features

Treating memorization as learning


Practice

Build three models with different complexity levels.

For each model record:

Training score

Test score

Model complexity

Then identify which model appears to generalize best.


Quick Check

Question

What is overfitting?

Answer

Overfitting occurs when a model fits the training data too closely, including details that do not generalize well to new data.


Question

What is underfitting?

Answer

Underfitting occurs when a model is too simple to capture important patterns in the data and therefore performs poorly even on the training examples.


Summary

Overfitting means the model is too closely fitted to the training data.

Underfitting means the model is too simple to capture important structure.

Increasing model complexity usually makes fitting the training set easier.

Too much complexity can reduce performance on new data.

Too little complexity can prevent the model from capturing useful patterns.

The objective is to find a useful level of complexity that provides strong generalization.


Extended Study

Consider a sequence of increasingly complex models.

At low complexity:

The model may fail to capture important relationships.

At moderate complexity:

The model may capture the main structure.

At very high complexity:

The model may begin fitting individual training examples.

Conceptually:

Complexity
→
Underfitting
→
Useful Model
→
Overfitting

The best model is generally found in the region where performance on unseen data is strongest.

This is why model evaluation must be based on more than training performance.


Reflection

Suppose two models are available.

Model A:

Training Score = 95%

Test Score = 82%

Model B:

Training Score = 90%

Test Score = 88%

Which model would you prefer for making predictions on new data?

Explain why training performance alone is not enough.
`
};

export default lesson10;