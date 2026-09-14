const lesson11 = {
  id: "lesson11",

  title: "Model Complexity and Dataset Size",

  content: `
Lesson 11

Model Complexity and Dataset Size


Model complexity and dataset size are closely connected.

A flexible model can represent complicated relationships, but it also has more opportunities to fit details that are specific to the training examples.

A larger and more varied dataset can provide more information about the underlying problem and can make it safer to use a more complex model.


1. What Is Model Complexity?

Model complexity describes how flexible a model is.

A simple model can represent only a limited range of relationships.

A complex model can represent a much wider range of relationships.

Conceptually:

Simple Model → Limited Patterns

Complex Model → More Possible Patterns


More flexibility is not automatically better.

The useful level of complexity depends on the amount and variety of information available.


2. Complexity and Training Data

Suppose a model is trained on a very small dataset.

The model sees only a few examples.

A highly flexible model may fit those examples extremely closely.

This can lead to overfitting.

The same model may behave more reliably when it is trained on a much broader collection of representative examples.


3. Dataset Size

Dataset size refers to the number of examples available for learning.

For example:

100 samples

1,000 samples

10,000 samples

100,000 samples

As the number of useful examples increases, the model can receive more information about the problem.


4. Variety Matters

The number of examples is not the only important factor.

The examples should also contain meaningful variation.

Consider:

Dataset A

1,000 copies of essentially the same example

Dataset B

1,000 different examples representing many situations

Dataset B generally provides much more useful information for learning a broader pattern.

Simply duplicating the same data does not provide the same benefit as adding new representative information.


5. Example: Customer Data

Suppose a customer model has only twelve examples.

The model observes a narrow set of customer behaviour.

A very complex rule may appear to work perfectly on those twelve examples.

Now imagine that the dataset contains thousands of additional customers covering a broad range of:

Age

Purchasing behaviour

Spending levels

Visit frequency

Product preferences

The larger and more varied dataset provides stronger evidence about which patterns are actually common.


6. Small Dataset and Complex Model

The relationship can be viewed as:

Small Dataset
↓
Limited Information
↓
Complex Model
↓
Higher Risk of Overfitting


The model may learn accidental details because there is not enough information to distinguish general patterns from noise or unusual cases.


7. Larger and More Varied Dataset

The opposite situation is:

Larger Dataset
↓
More Variation
↓
More Information
↓
Complex Model Can Be Better Supported


This does not guarantee good performance.

Data quality and relevance still matter.


8. Why More Data Can Help

A larger dataset can expose the model to:

More examples

More variation

More edge cases

More combinations of features

More representative situations


The model can therefore learn a broader description of the problem.


9. Important Warning

More data is useful only when it adds meaningful information.

Suppose we have:

100 examples

Then we copy each example ten times.

We now have:

1,000 rows

But we have not added 900 new situations.

The amount of information has not increased in the same way that it would if those rows represented new customers, new transactions, or new conditions.


10. Model Complexity and Generalization

The goal is:

Choose Complexity
+
Provide Enough Information
=
Strong Generalization


A model that is too complex for the dataset may overfit.

A model that is too simple may underfit.

The appropriate balance depends on both the model and the dataset.


11. Relationship Between Complexity and Performance

Consider a sequence of models:

Model 1

Very simple

Model 2

Moderately complex

Model 3

Highly complex


As complexity increases:

Training performance often improves.

Test performance may improve initially.

After a certain point, test performance may decline.

This creates a useful conceptual curve:

Underfitting
↓
Best Generalization
↓
Overfitting


12. The Dataset Changes the Curve

Suppose the dataset becomes larger and more varied.

The model may be able to support a higher level of complexity before overfitting begins.

Conceptually:

Small Dataset

Complexity → Overfitting Earlier


Larger Dataset

Complexity → More Flexibility Can Be Supported


The position of the useful complexity region depends on the available information.


13. Example With Customer Prediction

Dataset A:

50 customer records

Features:

Age

Visits

Spending

Purchase history


Dataset B:

5,000 customer records

The larger dataset contains many more combinations of these features.

A flexible model may have more opportunity to distinguish meaningful relationships from accidental patterns when trained on Dataset B.


14. Example Table

| Dataset | Number of Samples | Variety | Risk With Complex Model |
|---------|-------------------|---------|--------------------------|
| A | 20 | Very Low | High |
| B | 200 | Moderate | Lower |
| C | 2,000 | High | Lower still |

These values are illustrative.

The key idea is that useful variety gives the model more information.


15. Python Experiment

Python

from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline

X = [[1], [2], [3], [4], [5], [6]]
y = [2, 5, 10, 17, 26, 37]

for degree in [1, 2, 4]:

    model = make_pipeline(
        PolynomialFeatures(degree=degree),
        LinearRegression()
    )

    model.fit(X, y)

    print(
        "Degree:",
        degree,
        "Training score:",
        model.score(X, y)
    )


Output

The more flexible model can fit the small training dataset more closely.

The experiment should therefore be followed by evaluation on unseen data before deciding which model is better.


16. More Data and Better Models

Suppose a model performs poorly because the dataset contains only a few examples.

Possible improvements include:

Collecting additional representative data

Adding informative features

Improving data quality

Reducing inappropriate model complexity

Trying another model


The correct solution depends on the reason for poor performance.


17. The Power of Representative Data

Representative data should cover the situations that the model is expected to encounter.

For example, a student-performance model should not be trained only on one type of student or one narrow academic situation if the final system will be used much more broadly.

The training examples should provide information relevant to the intended use.


18. Data Quality Before Model Complexity

It is tempting to spend time tuning the model.

But sometimes collecting better data can provide more value than making the model more complicated.

A useful development mindset is:

Understand the Problem
↓
Improve the Data
↓
Choose Appropriate Complexity
↓
Evaluate Generalization


19. Complexity, Data and the Learning Problem

The relationship can be summarized as:

Model Complexity
+
Dataset Size
+
Dataset Variety
→
Generalization Behaviour


All three should be considered together.

A highly complex model does not automatically become good simply because it is mathematically powerful.

The model needs sufficient information to support the complexity.


20. Practical Experiment

Create two datasets for the same prediction problem.

Dataset A:

A small number of examples with limited variation.

Dataset B:

A larger number of examples with broader variation.

Train models with increasing complexity on both datasets.

Compare:

Training performance

Test performance

Generalization behaviour

Observe how the amount and variety of data affect the useful level of model complexity.


Common Mistakes

Assuming a larger row count always means more information

Duplicating data and treating it as new information

Using a complex model with very little data

Ignoring data variety

Assuming more data automatically guarantees better predictions

Focusing only on model tuning when the real problem is insufficient data


Practice

Suppose you have:

Dataset A = 100 similar records

Dataset B = 100 records covering many different situations

Dataset C = 10,000 diverse records

Rank them according to how much information they may provide for learning a general pattern.

Then explain why row count alone is not enough.


Quick Check

Question

Why can a larger and more varied dataset support a more complex model?

Answer

A larger and more varied dataset provides more information about the underlying problem, making it easier for the model to distinguish general patterns from details specific to a small set of training examples.


Summary

Model complexity describes how flexible a model is.

Complex models can represent more patterns but can also overfit.

Small datasets provide limited information and can make complex models risky.

Larger datasets can provide more examples and more variation.

Simply duplicating existing observations does not provide the same benefit as collecting new representative examples.

The useful level of model complexity depends on both the model and the available data.


Extended Study

Consider a sequence of models with increasing complexity.

For a small dataset:

Simple → Moderate → Complex

The complex model may begin overfitting quickly.

For a larger and more varied dataset:

Simple → Moderate → Complex → More Complex

The model may be able to use greater flexibility without losing generalization as quickly.

This does not mean that unlimited complexity is desirable.

A model still needs to be evaluated on unseen data.

The central relationship is:

More Representative Data
→
More Information
→
Potentially More Supported Model Complexity
→
Better Generalization Opportunities


Reflection

Imagine that a prediction model performs poorly on new data.

Before changing the algorithm, ask:

Do we have enough examples?

Are the examples varied?

Are we duplicating existing records?

Are important situations missing?

Is the current model too complex for the information available?

Could collecting better data improve the result more than adding model complexity?

These questions connect data quality, model complexity, and generalization into one practical machine learning workflow.
`
};

export default lesson11;