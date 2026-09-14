const lesson5 = {
  id: "lesson5",
  title: "Classification vs Regression",

  content: `
Lesson 05

Classification vs Regression

Classification and regression are the two major types of supervised machine learning problems.

Both use examples containing inputs and desired outputs.

The difference is the kind of output the model must predict.

Classification

Input → Model → Class

Regression

Input → Model → Continuous Number

1. Classification

In classification, the goal is to predict a class label chosen from a predefined set of possible categories.

Examples:

Spam or Not Spam

Pass or Fail

Fraudulent or Legitimate

Setosa, Versicolor or Virginica

The possible outputs are discrete categories.

2. Binary Classification

Binary classification involves exactly two classes.

A simple representation is:

Input → Model → Class A / Class B

Example:

Email → Model → Spam / Not Spam

The question can be expressed as a yes-or-no decision:

Is this email spam?

The two classes can be described as positive and negative classes depending on the problem.

3. Examples of Binary Classification

Credit-card transaction:

Fraudulent / Legitimate

Medical screening:

Positive / Negative

Student support:

Needs Support / Does Not Need Support

Customer activity:

Will Churn / Will Not Churn

In every case, the possible outputs come from a predefined list of categories.

4. Multiclass Classification

Multiclass classification contains more than two possible classes.

Example:

An iris flower can belong to:

Setosa

Versicolor

Virginica

The model selects one class from the available set.

The process is:

Input Measurements → Model → One of Several Classes

5. Example of Multiclass Classification

Suppose a system identifies the language of a webpage.

Possible classes could include:

English

French

German

Spanish

The output is one of a predefined collection of categories.

There is no natural intermediate category between two languages in the way there are intermediate numerical values in a continuous quantity.

6. Classification Example

Consider a student performance classifier.

Possible classes:

At Risk

Needs Improvement

Ready to Advance

The features might include:

Study Hours

Attendance

Previous Score

The model receives the feature values and predicts one of the predefined categories.

7. Regression

Regression predicts a continuous numerical value.

Examples include:

House price

Annual income

Temperature

Sales volume

Crop yield

The predicted result can take many possible numerical values within a range.

The process is:

Input → Model → Numerical Prediction

8. Regression Example

Suppose a system predicts house prices.

Features might include:

Area

Number of bedrooms

Location score

Property age

The target could be:

House Price

A model may predict:

₹4,850,000

Another house may receive:

₹5,120,000

The outputs are numerical values rather than predefined classes.

9. Continuous Output

One useful way to distinguish regression from classification is to ask whether the output has continuity.

Consider annual income.

A person may earn:

₹400,000

₹400,001

₹400,002

There are many possible numerical values.

This is a continuous output.

Therefore predicting annual income is a regression problem.

10. Classification Has Discrete Outputs

Now consider website language.

Possible outputs might be:

English

French

German

Spanish

A webpage belongs to one of the defined categories.

There is no continuous numerical scale between the categories.

This makes language identification a classification problem.

11. Classification vs Regression

| Aspect | Classification | Regression |
|--------|----------------|------------|
| Output | Class label | Numerical value |
| Possible outcomes | Predefined categories | Continuous range |
| Example | Spam detection | House-price prediction |
| Question | Which category? | What value? |
| Typical target | Category | Number |

12. A Quick Decision Rule

Ask:

Is the desired output a category?

Classification

Is the desired output a continuous numerical value?

Regression

This simple question can often identify the type of supervised-learning problem.

13. Python Example — Classification

Python

from sklearn.linear_model import LogisticRegression

X = [
    [1],
    [2],
    [3],
    [4],
    [5],
    [6]
]

y = [
    0,
    0,
    0,
    1,
    1,
    1
]

model = LogisticRegression()

model.fit(X, y)

prediction = model.predict([[4.5]])

print("Predicted class:", prediction[0])

Output

Predicted class: 1

The model predicts one of the predefined classes.

The numerical values 0 and 1 are class encodings.

They do not represent a continuous quantity.

14. Python Example — Regression

Python

from sklearn.linear_model import LinearRegression

X = [
    [1],
    [2],
    [3],
    [4],
    [5]
]

y = [
    48,
    56,
    65,
    73,
    81
]

model = LinearRegression()

model.fit(X, y)

prediction = model.predict([[6]])

print("Predicted value:", prediction[0])

Output

Predicted value: A numerical prediction

The model predicts a numerical target rather than selecting a category.

15. The Same Input Type Can Produce Different Problems

Suppose student information is available.

The same features can be used for different supervised-learning tasks.

Problem A:

Predict the final score.

Target:

Numerical score

Type:

Regression

Problem B:

Predict whether the student needs additional support.

Target:

Support / No Support

Type:

Classification

The type of target determines the problem type.

16. Real-World Examples

Classification

Email spam detection

Disease category prediction

Fraud detection

Image category recognition

Customer churn prediction

Regression

House-price prediction

Sales forecasting

Temperature prediction

Income prediction

Demand forecasting

17. Why the Distinction Matters

Classification and regression require different models, evaluation methods, and interpretations.

A classification system should be judged by how well it identifies the correct categories.

A regression system should be judged by how close its numerical predictions are to the actual values.

Choosing the correct formulation is therefore an important step before model selection.

18. Classification and Regression in the Iris Problem

The Iris dataset contains measurements of flowers.

Features include:

Sepal length

Sepal width

Petal length

Petal width

The target is the flower species.

Possible classes:

Setosa

Versicolor

Virginica

Because the output is one of three categories, the problem is a multiclass classification problem.

19. Regression Example from Agriculture

Suppose an agricultural system predicts crop yield.

Available information:

Previous yield

Weather information

Number of workers

Other relevant measurements

Target:

Crop yield

The output can take many numerical values.

Therefore this is a regression problem.

20. Understanding the Target

The easiest way to classify a supervised-learning problem is to examine the target.

Target:

Spam / Not Spam

Classification

Target:

Setosa / Versicolor / Virginica

Classification

Target:

House Price

Regression

Target:

Annual Income

Regression

21. Experiment

Create two small datasets.

Dataset A:

Design a classification problem with two or three categories.

Dataset B:

Design a regression problem with a numerical target.

For each dataset identify:

Features

Target

Possible outputs

Problem type

22. Common Mistakes

Treating class numbers as continuous numerical values.

Calling every prediction problem regression.

Assuming classification always means binary classification.

Forgetting that multiclass classification contains more than two categories.

Choosing an algorithm before identifying the target type.

Comparing classification and regression using the same evaluation approach.

Quick Check

Question

What is the main difference between classification and regression?

Answer

Classification predicts a predefined class or category, while regression predicts a continuous numerical value.

Summary

Classification predicts discrete categories.

Binary classification has two classes.

Multiclass classification has more than two classes.

Regression predicts a continuous numerical value.

The target type determines whether a supervised problem is classification or regression.

The distinction is important because different problem types require different models, evaluation methods, and interpretations.

Extended Study

A classification model can be viewed as learning a mapping:

x → class

For binary classification:

x → class 0 or class 1

For multiclass classification:

x → one of K classes

A regression model learns a numerical mapping:

x → y

where y represents a numerical target.

The distinction can therefore be expressed as:

Classification → Discrete Output

Regression → Continuous Output

Consider annual income as a regression target.

Small differences in the predicted amount can often be tolerated within the context of the application.

Now consider language classification.

The system must choose among predefined categories.

This illustrates why continuity of the output is a useful intuition when deciding between classification and regression.

Case Study

Consider a student analytics system.

Task A:

Predict the student's final examination mark.

Target:

Final Examination Mark

Problem type:

Regression

Task B:

Predict whether the student requires additional academic support.

Target:

Support Required / Support Not Required

Problem type:

Classification

Both problems may use similar input features.

The difference comes from what the system is asked to predict.

Reflection

Take five real-world prediction problems and decide whether each is classification or regression.

For every problem, identify the target and explain whether its possible outputs are predefined categories or continuous numerical values.
`
};

export default lesson5;