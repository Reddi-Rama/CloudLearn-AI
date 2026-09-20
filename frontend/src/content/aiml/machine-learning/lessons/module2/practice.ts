const practice = {

  id: "practice",

  title: "Module 2 Practice",

  content: `

Module 2 Practice

Supervised Learning


This practice section reviews the major supervised learning concepts covered throughout Module 2.

The goal is not only to remember definitions, but also to understand when and why different algorithms should be used.


1. Conceptual Questions


1. What is supervised learning?


2. What is the difference between a feature and a target?


3. What is the difference between classification and regression?


4. What is generalization?


5. What is overfitting?


6. What is underfitting?


7. Why is model complexity important?


8. Why should a dataset be divided into training and test data?


9. What is cross-validation?


10. Why should the test set not be repeatedly used for model selection?



2. k-Nearest Neighbors


1. How does k-NN make a prediction?


2. What does k represent?


3. Why is feature scaling important for k-NN?


4. What happens when k is very small?


5. What happens when k is very large?


6. What is the curse of dimensionality?


7. How is k-NN regression different from k-NN classification?



3. Linear Regression


1. What is the basic equation of linear regression?


2. What does a coefficient represent?


3. What is an intercept?


4. What is residual error?


5. What is mean squared error?


6. What is R²?


7. What assumptions or data conditions can affect linear regression?



4. Ridge and Lasso


1. Why is regularization used?


2. What is Ridge Regression?


3. What is Lasso Regression?


4. What is the difference between L1 and L2 regularization?


5. Why can Lasso produce zero coefficients?


6. What happens when regularization becomes too strong?



5. Logistic Regression


1. What problem does Logistic Regression solve?


2. What is the sigmoid function?


3. Why is the sigmoid function useful for binary classification?


4. What are odds?


5. What are log-odds?


6. What does a classification threshold do?


7. How can Logistic Regression be extended to multiclass classification?



6. Naive Bayes


1. What is Bayes' theorem?


2. What assumption does Naive Bayes make?


3. Why is the conditional independence assumption called naive?


4. What is Gaussian Naive Bayes?


5. What is Multinomial Naive Bayes?


6. What is Bernoulli Naive Bayes?


7. Why can Naive Bayes work well for text classification?



7. Decision Trees


1. What is a decision tree?


2. What is a root node?


3. What is a leaf node?


4. What is a decision rule?


5. What is Gini impurity?


6. What is entropy?


7. What is information gain?


8. What is max_depth?


9. Why can unrestricted trees overfit?



8. Random Forests


1. What is an ensemble?


2. How does a Random Forest combine trees?


3. What is bootstrap sampling?


4. Why are random subsets of features used?


5. What is an out-of-bag sample?


6. Why are Random Forests generally more stable than a single tree?


7. What does n_estimators control?



9. Gradient Boosting


1. What is Gradient Boosting?


2. How is it different from Random Forest?


3. Why are trees built sequentially?


4. What is a weak learner?


5. What does learning_rate control?


6. What does n_estimators control?


7. Why can Gradient Boosting overfit?


8. What is early stopping?



10. Support Vector Machines


1. What is an SVM?


2. What is a hyperplane?


3. What is a margin?


4. What are support vectors?


5. What does C control?


6. What is a kernel?


7. What is the RBF kernel?


8. What does gamma control?


9. Why is feature scaling important for SVM?



11. Neural Networks


1. What is a neuron?


2. What is a weight?


3. What is a bias?


4. Why are activation functions required?


5. What is ReLU?


6. What is sigmoid?


7. What is softmax?


8. What is forward propagation?


9. What is backpropagation?


10. What is gradient descent?


11. What is an epoch?


12. What is a batch?



12. Model Evaluation


1. What is accuracy?


2. What is precision?


3. What is recall?


4. What is F1 Score?


5. What is a confusion matrix?


6. When can accuracy be misleading?


7. Why should multiple evaluation metrics sometimes be used?



13. Uncertainty


1. What is prediction uncertainty?


2. Why is a probability estimate not automatically perfectly calibrated?


3. What is a classification threshold?


4. How can changing the threshold affect precision and recall?


5. Why might uncertain predictions be sent for additional review?



14. Data Leakage


Consider a model predicting whether a customer will cancel a subscription.


The dataset contains:


Customer Age


Subscription Type


Monthly Usage


Support Calls


Cancellation Date


Question:


Should Cancellation Date be used as an input when predicting cancellation before it happens?


Explain why or why not.



15. Model Selection Scenario


Suppose you have:


10,000 training observations.


30 numerical features.


A binary classification target.


The classes are somewhat imbalanced.


You are considering:


Logistic Regression


k-NN


Decision Tree


Random Forest


SVM


Gradient Boosting.


Tasks:


1. Explain how you would create a baseline.


2. Explain how you would split the data.


3. Explain which preprocessing steps may be required.


4. Select suitable evaluation metrics.


5. Explain how cross-validation could be used.


6. Explain how hyperparameters could be tuned.



16. Coding Practice


Task 1


Load the Iris dataset.


Split it into training and test data.


Train:


Logistic Regression


Random Forest


SVM.


Compare test accuracy.


Do not select the model using the test set repeatedly.


Instead, use cross-validation on the training data for model comparison.



17. Coding Practice: k-NN


Load the Iris dataset.


Build a pipeline:


StandardScaler


→


KNeighborsClassifier.


Try:


k = 1


3


5


7


11.


Compare cross-validation accuracy.



18. Coding Practice: Decision Tree


Train Decision Trees with:


max_depth = 1


2


3


5


10.


Compare training and validation performance.


Explain what happens as tree complexity increases.



19. Coding Practice: Random Forest


Train Random Forest models using:


n_estimators = 10


50


100


200.


Compare cross-validation performance.



20. Coding Practice: Gradient Boosting


Try:


learning_rate = 0.01


0.05


0.1.


Combine each with different values of:


n_estimators.


Record validation performance.



21. Coding Practice: SVM


Create an SVM pipeline using:


StandardScaler


→


SVC.


Try different values of:


C


and:


gamma.


Use cross-validation.



22. Coding Practice: Neural Network


Use:


MLPClassifier.


Compare:


hidden_layer_sizes=(10,)


hidden_layer_sizes=(50,)


hidden_layer_sizes=(50, 25).


Record:


Training Accuracy


Validation Accuracy.



23. Evaluation Practice


Create a confusion matrix for a binary classifier.


Calculate:


Accuracy


Precision


Recall


F1 Score.


Explain why the four values may tell different stories.



24. Threshold Practice


Train a binary classifier that supports probability predictions.


Generate probabilities.


Evaluate thresholds:


0.20


0.30


0.40


0.50


0.60


0.70


0.80.


Create a table containing:


Threshold


Precision


Recall


F1 Score.



25. Mathematical Practice


Question 1


For the linear model:


ŷ = 2x₁ + 3x₂ + 5


calculate the prediction when:


x₁ = 4


x₂ = 2.


Answer:


ŷ = 2(4) + 3(2) + 5


ŷ = 8 + 6 + 5


ŷ = 19.



Question 2


Calculate the sigmoid value approximately for:


z = 0.


Answer:


σ(0) = 0.5.



Question 3


For a regression problem, actual values are:


10, 20, 30.


Predictions are:


12, 18, 27.


Calculate the residuals.


Answer:


-2, 2, 3.


Depending on the residual convention, residual may be defined as:


Actual - Prediction.



26. Scenario Practice


Scenario:


A company wants to predict customer churn.


Available features:


Age


Tenure


Monthly Charge


Contract Type


Support Calls


Usage


Question 1:


Is this classification or regression?


Question 2:


What is the target?


Question 3:


What preprocessing may be needed?


Question 4:


Which metrics could be useful?


Question 5:


How would you prevent data leakage?


Question 6:


How would you compare models?



27. Scenario Practice: House Prices


A dataset contains:


Area


Bedrooms


Age


Location


Parking


Target:


House Price.


Questions:


1. Is this classification or regression?


2. Which metric could be useful?


3. Which models from Module 2 could be used?


4. Why might a tree ensemble capture nonlinear relationships?



28. Scenario Practice: Spam Detection


Input:


Email Text.


Target:


Spam / Not Spam.


Questions:


1. Is this classification or regression?


2. How can text become numerical features?


3. Which classical models could be considered?


4. Why can Naive Bayes work well for this problem?


5. Why can linear SVM also be useful?



29. Scenario Practice: Fraud Detection


Suppose fraud represents only:


1%


of transactions.


Question:


Why could accuracy be misleading?


Consider a model that predicts every transaction as:


Not Fraud.


It could achieve high accuracy while detecting:


Zero


fraudulent transactions.


This demonstrates why precision, recall, F1, PR-AUC, or other appropriate metrics may be more informative depending on the objective.



30. Final Practice Challenge


Build a complete supervised learning experiment.


Requirements:


1. Load a real dataset.


2. Explore the data.


3. Identify the target.


4. Check missing values.


5. Split the data.


6. Build a baseline.


7. Train at least three models.


8. Use cross-validation.


9. Tune at least one model.


10. Evaluate on the held-out test set.


11. Create a confusion matrix if classification is used.


12. Perform error analysis.


13. Explain the model selection process.



31. Final Reflection


After completing the practice exercises, you should be able to explain:


What supervised learning is.


How classification differs from regression.


How models generalize.


Why overfitting occurs.


How regularization helps.


How k-NN works.


How linear and logistic regression work.


How Naive Bayes works.


How decision trees split data.


How Random Forests combine trees.


How Gradient Boosting learns sequentially.


How SVMs use margins and kernels.


How neural networks learn through gradient-based optimization.


How to evaluate models.


How to build a complete supervised learning workflow.



`

};

export default practice;