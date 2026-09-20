const lesson9 = {

  id: "lesson9",

  title: "Linear Regression",

  content: `

Lesson 09

Linear Regression


Linear Regression is one of the most fundamental algorithms in machine learning.

It is used to predict a numerical target by learning a relationship between input features and the target.

The central idea is simple:


Find a mathematical relationship that describes the target as a function of the input features.


For a single feature, this relationship can be represented by a straight line.


For multiple features, it becomes a linear equation involving several variables.



1. What Is Linear Regression?


Linear regression is a supervised learning algorithm used primarily for regression problems.


The target is numerical.


Examples include:


House Price


Sales


Temperature


Demand


Salary


Energy Consumption


Travel Time



2. Simple Linear Regression


Suppose there is one input feature:


x


and one target:


y.


The model can be written as:


ŷ = wx + b


where:


x = Input feature


w = Weight or slope


b = Intercept


ŷ = Predicted target



3. Understanding the Slope


The parameter:


w


controls how strongly the prediction changes when x changes.


Suppose:


w = 5.


If x increases by 1:


Prediction increases by approximately 5,


assuming the model contains only this one feature.



4. Understanding the Intercept


The parameter:


b


is the predicted value when:


x = 0.


For example:


ŷ = 4x + 10


When:


x = 0


we get:


ŷ = 10.


Therefore, the intercept is:


10.



5. Example


Suppose:


ŷ = 3x + 20


For:


x = 5:


ŷ = 3(5) + 20


ŷ = 15 + 20


ŷ = 35.


The model predicts:


35.



6. Visual Interpretation


For one feature, linear regression attempts to fit a straight line through the data.


Conceptually:


y


↑


|        •


|      •


|    •


|  •


|________________→ x


The line attempts to capture the overall relationship between x and y.



7. Multiple Linear Regression


Real-world problems usually contain multiple features.


Suppose we predict house price using:


Area


Bedrooms


Age


Then the model can be written as:


ŷ = w₁x₁ + w₂x₂ + w₃x₃ + b


More generally:


ŷ = w₁x₁ + w₂x₂ + ... + wₚxₚ + b



8. Meaning of the Weights


Each weight describes the contribution of a feature to the prediction within the fitted linear model.


For example:


ŷ = 50x₁ + 10x₂ - 3x₃ + 20


The coefficients are:


w₁ = 50


w₂ = 10


w₃ = -3


The sign and magnitude must be interpreted with care because feature units and correlations affect coefficient interpretation.



9. Matrix Representation


Multiple linear regression can be written compactly as:


ŷ = Xw + b


where:


X = Feature matrix


w = Weight vector


b = Intercept


ŷ = Prediction vector



10. Residuals


A residual is the difference between the actual and predicted value.


Residual:


eᵢ = yᵢ - ŷᵢ


For example:


Actual = 80


Predicted = 75


Residual:


80 - 75 = 5.



11. Least Squares


Linear regression commonly uses the:


Least Squares


principle.


The goal is to minimize the sum of squared residuals.


The objective can be written as:


Σ(yᵢ - ŷᵢ)²


This means large errors receive greater influence because they are squared.



12. Mean Squared Error


The mean squared error is:


MSE = (1/n) Σ(yᵢ - ŷᵢ)²


Linear regression can be trained by minimizing a squared-error objective.



13. Why Square the Errors?


If we simply added positive and negative errors:


(+5) + (-5) = 0


the errors could cancel each other.


Squaring gives:


5² = 25


(-5)² = 25


Both contribute positively.


Squaring also penalizes larger errors more strongly.



14. Ordinary Least Squares


Ordinary Least Squares, or OLS, estimates the coefficients that minimize the sum of squared residuals.


For a simple linear model:


ŷ = wx + b


the algorithm finds values of:


w


and:


b


that provide the best fit under the squared-error objective.



15. Example Dataset


Suppose:


| Study Hours | Score |
|-------------|-------|
| 1 | 45 |
| 2 | 52 |
| 3 | 61 |
| 4 | 68 |
| 5 | 77 |


Linear regression attempts to learn a relationship between:


Study Hours


and:


Score.



16. Python Example


Python


import numpy as np
from sklearn.linear_model import LinearRegression


X = np.array([
    [1],
    [2],
    [3],
    [4],
    [5]
])


y = np.array([
    45,
    52,
    61,
    68,
    77
])


model = LinearRegression()


model.fit(
    X,
    y
)


print("Coefficient:", model.coef_[0])


print("Intercept:", model.intercept_)


Output


Coefficient:


A value learned from the data.


Intercept:


A value learned from the data.



17. Making Predictions


Suppose we want to predict the score for:


Study Hours = 6.


Python


prediction = model.predict(
    [[6]]
)


print("Predicted score:", prediction[0])


Output


Predicted score:


A numerical prediction produced by the fitted model.



18. Understanding fit


The method:


model.fit(X, y)


estimates the model parameters from the training data.


After fitting, the model contains learned values such as:


coef_


and:


intercept_



19. The coef_ Attribute


For a one-feature model:


model.coef_


contains the learned slope.


For a multiple-feature model, it contains one coefficient for each feature.



20. The intercept_ Attribute


The expression:


model.intercept_


contains the learned intercept.


The prediction can therefore be represented as:


ŷ = Xw + b.



21. Train-Test Split


As with other supervised learning problems, linear regression should normally be evaluated on unseen data.


Python


from sklearn.model_selection import train_test_split


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)


The model is trained using:


X_train


and:


y_train.


The test set is used for evaluation.



22. Linear Regression with the Diabetes Dataset


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression


data = load_diabetes()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)


model = LinearRegression()


model.fit(
    X_train,
    y_train
)


predictions = model.predict(
    X_test
)


print(
    "First five predictions:",
    predictions[:5]
)


Output


First five predictions:


The values are numerical predictions for the first five test observations.



23. Evaluating Linear Regression


Common regression metrics include:


MAE


MSE


RMSE


R²


These metrics can be used to compare the predicted values with the actual test values.



24. Python Evaluation


Python


from sklearn.metrics import mean_absolute_error
from sklearn.metrics import mean_squared_error
from sklearn.metrics import r2_score
import numpy as np


mae = mean_absolute_error(
    y_test,
    predictions
)


mse = mean_squared_error(
    y_test,
    predictions
)


rmse = np.sqrt(mse)


r2 = r2_score(
    y_test,
    predictions
)


print("MAE:", mae)


print("MSE:", mse)


print("RMSE:", rmse)


print("R²:", r2)


Output


The exact metric values depend on the dataset split and environment.



25. Interpreting MAE


MAE measures the average absolute error.


If:


MAE = 40


the average absolute prediction difference is approximately:


40 target units.


Because MAE is expressed in target units, it can be easy to interpret.



26. Interpreting RMSE


RMSE is also expressed in target units.


However, because the underlying errors are squared before averaging, larger errors receive more influence.



27. Interpreting R²


R² compares the model's predictions with a baseline related to the mean target.


An R² closer to 1 can indicate strong predictive performance relative to that baseline in the evaluated dataset.


R² should always be interpreted in context.



28. Multiple Features


Linear regression can use multiple features.


Python


from sklearn.datasets import load_diabetes
from sklearn.linear_model import LinearRegression


data = load_diabetes()


X = data.data
y = data.target


model = LinearRegression()


model.fit(
    X,
    y
)


print("Coefficients:")
print(model.coef_)


print("Intercept:")
print(model.intercept_)


Output


The coefficients contain one learned value for each feature.



29. Interpreting Multiple Coefficients


Suppose:


ŷ = 2x₁ + 5x₂ - 3x₃ + 10


Holding the other features constant:


A one-unit increase in x₁ changes the prediction by 2 units.


A one-unit increase in x₂ changes the prediction by 5 units.


A one-unit increase in x₃ changes the prediction by -3 units.


However, interpretation depends on the units, scaling, feature relationships, and model assumptions.



30. Feature Correlation


If two features contain very similar information, their coefficients can become difficult to interpret independently.


For example:


House Area


and:


Number of Rooms


may be related.


Strong feature correlation can make coefficient estimates unstable or difficult to interpret.



31. Linear Regression Assumptions


Classical linear regression is associated with assumptions such as:


A suitable linear relationship between predictors and target.


Independent observations under the modeling design.


Appropriate error behaviour.


Reasonable treatment of influential observations.


For statistical inference, additional assumptions may be important.



32. Linearity


The model assumes that the expected target can be represented as a linear combination of the features.


For one feature:


E[Y|X] = wx + b


If the real relationship is strongly nonlinear, simple linear regression may underfit.



33. Residual Analysis


Residuals can provide information about model fit.


If:


Residual = Actual - Prediction


then residuals can be examined for patterns.


Ideally, residuals should not show obvious systematic structure that the model has failed to capture.



34. Example of Residuals


Suppose:


Actual:


[50, 60, 70]


Predicted:


[48, 63, 68]


Residuals:


2


-3


2


The residuals show the prediction errors for the observations.



35. Linear Regression and Outliers


Because squared errors are used, large residuals can have strong influence on the fitted model.


An extreme outlier may therefore pull the regression line toward itself.


Outliers should be investigated rather than automatically removed.



36. Linear Regression and Feature Scaling


Basic ordinary least squares regression does not require feature scaling for mathematical fitting in the same way that k-NN does.


However, scaling can still be useful when:


Comparing coefficient magnitudes


Combining regression with regularization


Using numerical pipelines


Working with algorithms that depend on feature scales.



37. Polynomial Features


Linear regression can also be combined with transformed features.


For example:


x


x²


x³


These features allow the model to represent nonlinear relationships in the original input.


The model remains linear in its learned coefficients.



38. Python Example: Polynomial Regression


Python


from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline


model = make_pipeline(
    PolynomialFeatures(degree=2),
    LinearRegression()
)


model.fit(
    X_train,
    y_train
)


predictions = model.predict(
    X_test
)


print(
    "Predictions:",
    predictions[:5]
)


Output


The model produces numerical predictions.



39. Linear Regression vs k-NN Regression


Linear Regression:


Learns a global mathematical relationship.


k-NN Regression:


Uses local neighbouring observations.


Linear Regression:


Usually has relatively few learned parameters.


k-NN:


Stores training observations.


Linear Regression:


Often computationally inexpensive during prediction.


k-NN:


Prediction can become expensive as the training dataset grows.



40. Advantages of Linear Regression


Advantages include:


Simple.


Fast.


Easy to implement.


Easy to interpret in many settings.


Works well when relationships are approximately linear.


Provides a strong baseline for regression problems.



41. Limitations of Linear Regression


Limitations include:


May underfit nonlinear relationships.


Sensitive to influential observations.


Coefficients can be difficult to interpret when features are strongly correlated.


Performance depends on feature representation.


A linear model cannot automatically capture arbitrary nonlinear patterns.



42. Experiment


Use the Diabetes dataset.


Train:


LinearRegression


Evaluate:


MAE


MSE


RMSE


R²


Record the results.



43. Experiment: Feature Subsets


Train one model using:


All features.


Then train models using selected feature subsets.


Compare:


MAE


RMSE


R²


Ask:


Does adding every feature always improve test performance?



44. Experiment: Polynomial Degree


Try polynomial degrees:


1


2


3


5


Evaluate each using validation or cross-validation.


Observe:


Training error


Validation error


Model complexity



45. Common Mistakes


Mistake 1:


Assuming every regression problem is linear.


Mistake 2:


Evaluating only on training data.


Mistake 3:


Ignoring outliers.


Mistake 4:


Interpreting coefficients without considering feature units.


Mistake 5:


Assuming a high R² always means the model is appropriate.


Mistake 6:


Adding polynomial degree without validation.


Very flexible polynomial models can overfit.



46. Practice


1. What is linear regression?


2. What is the equation of simple linear regression?


3. What does the slope represent?


4. What is the intercept?


5. What is a residual?


6. What is least squares?


7. What is MSE?


8. What is R²?


9. Why can correlated features make coefficient interpretation difficult?


10. What happens when a linear model is applied to a strongly nonlinear relationship?



47. Quick Check


Question 1


What does linear regression predict?


Answer


It predicts a numerical target.


Question 2


What is the equation for simple linear regression?


Answer


ŷ = wx + b.


Question 3


What does w represent?


Answer


The slope or coefficient associated with the feature.


Question 4


What does b represent?


Answer


The intercept.


Question 5


What is the goal of least squares?


Answer


To minimize the sum of squared residuals.



48. Summary


Linear regression is a supervised regression algorithm.


A simple linear model has the form:


ŷ = wx + b.


Multiple linear regression uses multiple features.


The model learns coefficients and an intercept.


Residuals are differences between actual and predicted values.


Least squares minimizes squared residuals.


MAE, MSE, RMSE, and R² can evaluate performance.


Linear regression is useful when relationships are approximately linear.


Polynomial features can extend a linear model to represent nonlinear relationships.


Outliers can strongly influence squared-error fitting.


Feature correlation can make coefficient interpretation difficult.



49. Extended Study


In matrix notation, the linear regression model can be represented as:


ŷ = Xw + b.


If an intercept is included as an additional feature, the expression can also be written:


ŷ = Xw.


The ordinary least-squares objective is:


min_w Σ(yᵢ - xᵢᵀw)².


For certain settings, the closed-form solution can be written using matrix operations.


However, practical implementations use numerical methods and optimized linear algebra techniques as appropriate.



50. Reflection


Consider a numerical prediction problem.


Ask:


Is the relationship approximately linear?


Would a global relationship make sense?


Are there important nonlinear patterns?


Are there influential outliers?


Are the features highly correlated?


Would polynomial features help?


How will the model be evaluated?


Would linear regression provide a useful baseline?


Understanding these questions helps determine when linear regression is appropriate.

`

};

export default lesson9;