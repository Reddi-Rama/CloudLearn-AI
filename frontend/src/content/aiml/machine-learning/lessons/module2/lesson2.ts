const lesson2 = {

  id: "lesson2",

  title: "Classification and Regression",

  content: `

Lesson 02

Classification and Regression


Supervised learning problems can be divided into several categories based on the type of target that the model is expected to predict.

Two of the most important types are:


Classification


and


Regression


Classification is used when the target represents a category or class.


Regression is used when the target represents a numerical quantity.


Understanding this distinction is important because the type of prediction determines the kind of model, loss function, evaluation metric, and interpretation that may be appropriate.



1. Understanding the Prediction Target


The first question in a supervised learning problem should be:


What exactly are we trying to predict?


Suppose an organization has information about customers and wants to predict whether a customer will purchase a product.


The target could be:


Purchase


or


No Purchase


These are categories.


Therefore, this is a classification problem.


Now suppose the organization wants to predict:


Amount spent by the customer


The output might be:


₹850


₹1,250


₹2,450


₹5,800


These are numerical values.


Therefore, the problem is regression.



2. Classification


Classification is a supervised learning problem in which the target belongs to one of a set of predefined classes.


The basic structure is:


Input Features → Classification Model → Class Prediction


For example:


Email Information


↓


Classification Model


↓


Spam / Not Spam


The model learns from previously labelled examples.



3. Classification Example


Consider a spam detection system.


Training examples could look like:


| Number of Links | Suspicious Words | Message Length | Target |
|-----------------|------------------|----------------|--------|
| 5 | 8 | 120 | Spam |
| 0 | 1 | 75 | Not Spam |
| 3 | 6 | 210 | Spam |
| 0 | 0 | 90 | Not Spam |


The first three columns are features.


The final column is the target.


The target contains categories.


Therefore, this is classification.



4. Binary Classification


Binary classification contains two possible classes.


Examples include:


Spam


or


Not Spam


Pass


or


Fail


Fraud


or


Legitimate


Purchase


or


No Purchase


Disease


or


No Disease


Conceptually:


Input


↓


Model


↓


Class A / Class B


The model learns a decision boundary or another rule that separates the available classes.



5. Multiclass Classification


Classification does not have to contain only two classes.


When there are more than two possible categories, the problem can be called multiclass classification.


For example, handwritten digit recognition has ten classes:


0


1


2


3


4


5


6


7


8


9


The input is an image.


The output is one of the ten possible digit classes.


Another example is flower classification.


Possible classes:


Setosa


Versicolor


Virginica


The model must select one class from the available categories.



6. Multilabel Classification


There is another situation where an observation can belong to more than one class simultaneously.


This is called multilabel classification.


For example, an image could contain:


Dog


Car


Tree


A single image can therefore have multiple labels.


The output might conceptually be:


[Dog, Car, Tree]


This is different from multiclass classification, where one observation normally receives one class from a set of mutually exclusive classes.



7. Classification Output


A classification model can produce a predicted class.


For example:


Input:


Customer Information


Output:


Likely to Purchase


A model may also provide a probability or confidence-related value depending on the algorithm.


For example:


Purchase Probability = 0.82


This can be interpreted as an estimated probability produced by the model, not as a guarantee that the customer will purchase.



8. Regression


Regression is a supervised learning problem in which the target is a numerical quantity.


The general structure is:


Input Features → Regression Model → Numerical Prediction


Examples include:


House Price Prediction


Temperature Prediction


Sales Prediction


Demand Prediction


Student Score Prediction


Travel Time Prediction


Electricity Consumption Prediction



9. Regression Example


Suppose we want to predict the price of a house.


The dataset may contain:


| Area | Bedrooms | Age | Price |
|------|----------|-----|-------|
| 900 | 2 | 10 | 45 |
| 1200 | 3 | 7 | 62 |
| 1500 | 3 | 5 | 78 |
| 2000 | 4 | 3 | 105 |


The features are:


Area


Bedrooms


Age


The target is:


Price


Because the target is numerical, the problem is regression.



10. Continuous Numerical Values


Regression targets can take many numerical values.


For example, a house-price model could produce:


₹45,00,000


₹52,50,000


₹67,80,000


₹91,25,000


The output is not a fixed category.


Instead, the model estimates a numerical quantity.



11. Classification vs Regression


The fundamental difference is the type of target.


Classification:


Target = Category


Regression:


Target = Numerical Value


Examples:


Spam Detection


→ Classification


House Price Prediction


→ Regression


Student Pass/Fail Prediction


→ Classification


Student Score Prediction


→ Regression


Fraud Detection


→ Classification


Sales Amount Prediction


→ Regression



12. A Simple Mathematical View of Classification


Suppose:


x


represents the input features.


A classifier can be represented as:


ŷ = f(x)


where:


ŷ


represents the predicted class.


For binary classification, the model may internally produce a score or probability.


For example:


P(y = 1 | x) = 0.82


The final class could be selected using a decision threshold.


For example:


If probability ≥ 0.5:


Class = 1


Otherwise:


Class = 0


The threshold can depend on the application.



13. A Simple Mathematical View of Regression


For regression, the prediction is numerical.


A simple linear model can be written as:


ŷ = w₁x₁ + w₂x₂ + ... + wₙxₙ + b


Here:


x₁, x₂, ..., xₙ


are input features.


w₁, w₂, ..., wₙ


are learned weights.


b


is the intercept.


ŷ


is the predicted numerical value.



14. Classification Decision Boundary


Consider a problem with two features:


Study Hours


and


Attendance


Suppose the target is:


Pass


or


Fail


A classifier may learn a boundary separating regions of the feature space.


Conceptually:


              Attendance


                   ↑


        Pass       |       Pass
                   |
-------------------|----------------→ Study Hours
                   |
        Fail       |       Fail
                   |


The actual decision boundary depends on the chosen model.



15. Regression Relationship


For a simple regression problem, we may have:


Study Hours → Examination Score


Suppose the observations are:


| Study Hours | Score |
|-------------|-------|
| 1 | 48 |
| 2 | 56 |
| 3 | 64 |
| 4 | 72 |
| 5 | 81 |


The model may learn an approximately increasing relationship.


A regression model could then estimate:


Study Hours = 6


→


Predicted Score ≈ 89


The prediction is an estimate based on the learned relationship.



16. Classification Evaluation


Classification can be evaluated using several metrics.


One simple metric is accuracy.


Accuracy is:


Accuracy = Correct Predictions / Total Predictions


Suppose:


90 predictions are correct


out of:


100 predictions


Then:


Accuracy = 90 / 100


Accuracy = 0.90


or:


90%


However, accuracy is not always sufficient.



17. Confusion Matrix


A confusion matrix summarizes classification predictions.


For binary classification, it contains:


True Positive


False Positive


True Negative


False Negative


Conceptually:


| | Predicted Positive | Predicted Negative |
|---|---|---|
| Actual Positive | True Positive | False Negative |
| Actual Negative | False Positive | True Negative |


These four values allow additional evaluation metrics to be calculated.



18. Precision


Precision measures how many predicted positive cases were actually positive.


The formula is:


Precision = TP / (TP + FP)


For example, in spam detection:


Among emails predicted as spam, how many were actually spam?


Precision becomes important when false positive predictions are costly.



19. Recall


Recall measures how many of the actual positive cases were correctly identified.


The formula is:


Recall = TP / (TP + FN)


For example, in fraud detection:


Among all truly fraudulent transactions, how many were detected?


Recall becomes especially important when missing positive cases is costly.



20. F1 Score


Precision and recall can be combined using the F1 score.


The formula is:


F1 = 2 × Precision × Recall / (Precision + Recall)


The F1 score provides a single measure that balances precision and recall.


It is particularly useful when both types of errors matter.



21. Regression Evaluation


Regression uses different evaluation measures.


One common metric is Mean Squared Error.


The formula is:


MSE = (1/n) Σ(yᵢ - ŷᵢ)²


where:


yᵢ = Actual value


ŷᵢ = Predicted value


n = Number of observations


Large errors receive greater weight because the errors are squared.



22. Mean Absolute Error


Another regression metric is Mean Absolute Error.


The formula is:


MAE = (1/n) Σ|yᵢ - ŷᵢ|


For example, suppose actual values are:


[100, 120, 150]


Predicted values are:


[90, 130, 145]


The absolute errors are:


10


10


5


Therefore:


MAE = (10 + 10 + 5) / 3


MAE = 25 / 3


MAE ≈ 8.33



23. R² Score


Another common regression measure is the coefficient of determination:


R²


R² compares the model's predictions with a baseline based on the mean target value.


A higher R² generally indicates that the model explains more of the variation in the target under the metric's assumptions.


However, R² should be interpreted in context rather than treated as a universal measure of model quality.



24. Choosing Between Classification and Regression


Ask:


What is the target?


If the target is a category:


Classification


If the target is a numerical quantity:


Regression


For example:


Predict whether a customer will buy:


Classification


Predict how much the customer will spend:


Regression


Predict whether a transaction is fraudulent:


Classification


Predict the transaction amount:


Regression



25. Python Example: Classification


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score


data = load_iris()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


model = LogisticRegression(max_iter=1000)


model.fit(X_train, y_train)


predictions = model.predict(X_test)


accuracy = accuracy_score(y_test, predictions)


print("Accuracy:", accuracy)


Output


Accuracy: 1.0


The exact result can depend on the data split and software environment.



26. Understanding the Classification Code


The Iris dataset contains:


Input features


and


Flower classes.


The feature matrix is stored in:


X


The target classes are stored in:


y


The data is divided into training and test sets.


The model is:


LogisticRegression()


The model learns using:


model.fit(X_train, y_train)


Predictions are generated using:


model.predict(X_test)


Finally, accuracy is calculated using:


accuracy_score(y_test, predictions)



27. Python Example: Regression


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error


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


model.fit(X_train, y_train)


predictions = model.predict(X_test)


mae = mean_absolute_error(y_test, predictions)


print("Mean Absolute Error:", mae)


Output


Mean Absolute Error: approximately 43


The exact value depends on the dataset and split.



28. Understanding the Regression Code


The Diabetes dataset contains numerical target values.


The target represents a quantitative measurement.


Therefore, regression is appropriate.


The model:


LinearRegression()


learns numerical coefficients.


Training occurs through:


model.fit(X_train, y_train)


Predictions are generated through:


model.predict(X_test)


The Mean Absolute Error measures the average absolute difference between predictions and actual values.



29. Comparing the Two Python Workflows


Classification:


Dataset


↓


Features + Class Labels


↓


Classification Model


↓


Class Prediction


↓


Classification Metric


Regression:


Dataset


↓


Features + Numerical Targets


↓


Regression Model


↓


Numerical Prediction


↓


Regression Metric


The overall workflow is similar, but the target type, model choices, and evaluation methods differ.



30. Real-World Application: Customer Prediction


Suppose an online store wants to understand customer behaviour.


Question 1:


Will the customer purchase?


Output:


Yes / No


This is classification.


Question 2:


How much will the customer spend?


Output:


₹2,500


This is regression.


Both problems may use similar input features:


Previous purchases


Website visits


Time spent


Products viewed


But the target changes.



31. Real-World Application: Education


Suppose a college wants to build predictive systems.


Problem A:


Predict whether a student will pass.


Target:


Pass / Fail


Classification.


Problem B:


Predict the student's final examination score.


Target:


Numerical score


Regression.


The same student dataset could therefore support different supervised-learning tasks.



32. Real-World Application: Healthcare


Suppose a healthcare system uses patient information.


Problem A:


Predict whether a condition is present.


Target:


Positive / Negative


Classification.


Problem B:


Predict a numerical measurement.


Target:


Numerical value


Regression.


The prediction type affects the model and evaluation process.



33. Real-World Application: Business


A business may want to predict:


Whether a customer will leave


→ Classification


Expected customer spending


→ Regression


Whether a transaction is fraudulent


→ Classification


Expected monthly sales


→ Regression


This demonstrates that the same business environment can contain both classification and regression problems.



34. Experiment


Create two machine learning problems based on the same domain.


For example:


Student Performance


Problem 1:


Predict Pass / Fail.


Problem 2:


Predict Final Score.


Identify:


Features


Target


Problem Type


Possible Model


Evaluation Metric


Complete the following:


| Problem | Target | Type | Example Metric |
|---------|--------|------|----------------|
| Pass Prediction | Pass/Fail | Classification | Accuracy |
| Score Prediction | Numerical Score | Regression | MAE |



35. Experiment: Compare Classification Metrics


Using the Iris classification example, calculate:


Accuracy


Precision


Recall


F1 Score


Use:


from sklearn.metrics import accuracy_score
from sklearn.metrics import precision_score
from sklearn.metrics import recall_score
from sklearn.metrics import f1_score


For multiclass classification, specify an appropriate averaging method such as:


average="weighted"


Observe how different metrics describe different aspects of model performance.



36. Experiment: Compare Regression Metrics


Using the Diabetes regression example, calculate:


MAE


MSE


R²


Use:


from sklearn.metrics import mean_absolute_error
from sklearn.metrics import mean_squared_error
from sklearn.metrics import r2_score


Compare the three metrics.


Ask:


What does each metric measure?


Which metric is easier to interpret in the original target units?


Which metric penalizes large errors more strongly?



37. Common Mistakes


Mistake 1:


Treating a category prediction as regression.


Example:


Predicting Spam / Not Spam using a regression formulation without considering the classification nature of the task.


Mistake 2:


Treating every numerical target as classification.


A numerical quantity such as price is generally a regression target.


Mistake 3:


Using accuracy as the only evaluation metric.


Accuracy can hide important error patterns.


Mistake 4:


Ignoring false positives and false negatives.


Some applications care much more about one type of error.


Mistake 5:


Comparing models using inappropriate metrics.


Classification and regression require appropriate evaluation measures.


Mistake 6:


Interpreting probabilities as guarantees.


A predicted probability is a model output, not certainty.



38. Practice


For each problem below, identify whether it is classification or regression.


1. Predict whether an email is spam.


2. Predict the price of a house.


3. Predict whether a customer will cancel a subscription.


4. Predict monthly electricity consumption.


5. Predict whether a transaction is fraudulent.


6. Predict the temperature tomorrow.


7. Predict whether a student will pass.


8. Predict the student's final score.


9. Predict the category of an image.


10. Predict the number of products a customer will purchase.



39. Practice: Explain Your Answer


For each problem, explain:


What is the target?


Is the target categorical or numerical?


Why is classification or regression appropriate?


What metric could be used?


What could make the prediction difficult?



40. Quick Check


Question 1


What is classification?


Answer


Classification is a supervised learning task where the model predicts a category or class.


Question 2


What is regression?


Answer


Regression is a supervised learning task where the model predicts a numerical quantity.


Question 3


Is spam detection classification or regression?


Answer


Classification.


Question 4


Is house-price prediction classification or regression?


Answer


Regression.


Question 5


What does precision measure?


Answer


Precision measures the proportion of predicted positive cases that are actually positive.


Question 6


What does recall measure?


Answer


Recall measures the proportion of actual positive cases that are correctly identified.



41. Summary


Classification predicts categories.


Binary classification contains two classes.


Multiclass classification contains more than two classes.


Multilabel classification allows multiple labels for one observation.


Regression predicts numerical quantities.


Accuracy measures the proportion of correct classification predictions.


Precision measures the correctness of positive predictions.


Recall measures how many actual positive cases are detected.


F1 combines precision and recall.


MAE measures average absolute regression error.


MSE gives greater influence to larger errors.


R² provides a measure related to explained variation.


Choosing the correct problem type is one of the first decisions in a supervised learning project.



42. Extended Study


Classification and regression are not merely different names for algorithms.


They represent different prediction structures.


In classification, the target belongs to a discrete output space.


For example:


Y = {Spam, Not Spam}


In regression, the target belongs to a numerical space.


For example:


Y ⊂ R


A supervised learning system therefore begins by identifying:


X → Input Space


Y → Target Space


The learning algorithm attempts to construct a mapping:


fθ : X → Y


For a new observation x:


ŷ = fθ(x)


The quality of this prediction must then be evaluated using a metric appropriate for the task.



43. Reflection


Think about an application that you would like to build.


Ask:


What exactly should the model predict?


Is the target a category?


Or is it a numerical quantity?


Could the same dataset be used for both classification and regression?


What would happen if the target were incorrectly defined?


Which errors would matter most?


Which evaluation metric would communicate performance most clearly?


Understanding these questions before selecting an algorithm is an important machine learning skill.

`

};

export default lesson2;