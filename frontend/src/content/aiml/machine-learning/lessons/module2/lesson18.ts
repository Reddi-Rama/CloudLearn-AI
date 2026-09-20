const lesson18 = {

  id: "lesson18",

  title: "Prediction Uncertainty and Supervised Learning Workflow",

  content: `

Lesson 18

Prediction Uncertainty and Supervised Learning Workflow


A machine learning model does not simply produce predictions.

A complete machine learning system must also answer important questions:

How reliable is the prediction?

How was the model trained?

How was it evaluated?

Does it generalize?

What happens when new data arrives?

How should the model be monitored?


This lesson brings together the major ideas from supervised learning and introduces the importance of prediction uncertainty and a complete workflow.


1. Prediction Is Not Certainty


Suppose a classifier predicts:


Class A


That prediction does not automatically mean the model is completely certain.


Many real-world observations lie near decision boundaries.


The model may have stronger confidence for some observations and weaker confidence for others.



2. Classification Probability


Some classifiers can provide probability estimates.


For example:


Class A = 0.90


Class B = 0.10


This indicates a high estimated probability for Class A under the model's probability interpretation.



3. Probability Is Not Automatically True Certainty


A predicted probability is a property of the model.


It is not automatically the true probability of the event.


A model that predicts:


0.90


should be evaluated for calibration if probability quality is important.



4. Confidence and Decision Boundaries


Consider a binary classifier.


An observation far from the decision boundary may receive a strong classification score.


An observation close to the boundary may be more ambiguous.


This distinction is important in applications where uncertain cases require additional review.



5. Logistic Regression Example


Logistic Regression can produce class probabilities.


Python


from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline


data = load_breast_cancer()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


model = make_pipeline(
    StandardScaler(),
    LogisticRegression(
        max_iter=2000
    )
)


model.fit(
    X_train,
    y_train
)


probabilities = model.predict_proba(
    X_test
)


print(
    probabilities[:5]
)


Output


The output contains estimated probabilities for each class.



6. Prediction Scores


Some models produce a decision score instead of a direct probability.


For example, an SVM can produce a decision function.


Python


from sklearn.svm import SVC


model = make_pipeline(
    StandardScaler(),
    SVC(
        kernel="linear"
    )
)


model.fit(
    X_train,
    y_train
)


scores = model.decision_function(
    X_test
)


print(
    scores[:5]
)


Output


The output contains decision scores.


The interpretation depends on the model and configuration.



7. Probability Calibration


A model can produce probability estimates that are systematically too high or too low.


Calibration evaluates whether predicted probabilities correspond reasonably well to observed frequencies.



8. Example of Calibration


Suppose a group of observations receives predicted probability:


0.80.


If the model is well calibrated, approximately 80% of comparable observations should belong to the positive class over a sufficiently large collection of cases.


Calibration is therefore different from classification accuracy.



9. Why Uncertainty Matters


Consider two predictions:


Prediction A:


Probability = 0.99


Prediction B:


Probability = 0.52


Both may produce the same class label.


However, the second prediction is much closer to an uncertain decision region.



10. Human Review


In some applications, uncertain predictions can be sent for additional review.


Conceptually:


Input


↓


Model


↓


Prediction


↓


Confidence/Uncertainty Check


↓


High Confidence → Automated Decision


Low Confidence → Additional Review



11. Important Warning


A probability threshold should not be chosen arbitrarily when the consequences of errors are important.


The threshold should reflect:


Application Requirements

Error Costs

Class Distribution

Validation Results.



12. Classification Threshold


Suppose a binary classifier produces:


P(Positive) = 0.65.


With a threshold of:


0.50


the prediction may be:


Positive.


If the threshold is:


0.70


the same observation may be:


Negative.


Changing the threshold changes the trade-off between different types of errors.



13. Precision and Recall Trade-Off


Increasing the positive-class threshold can reduce some false positives but may increase false negatives.


Lowering the threshold can increase recall but may also increase false positives.


The correct trade-off depends on the application.



14. Confusion Matrix


A binary classification confusion matrix contains:


True Positive


False Positive


True Negative


False Negative.


These values provide more information than accuracy alone.



15. Precision


Precision is:


Precision = TP / (TP + FP)


It answers:


Of the observations predicted positive, how many were actually positive?



16. Recall


Recall is:


Recall = TP / (TP + FN)


It answers:


Of the actual positive observations, how many were detected?



17. F1 Score


F1 Score combines precision and recall:


F1 = 2 × Precision × Recall / (Precision + Recall).


It can be useful when both precision and recall matter.



18. Choosing Metrics


Different applications require different metrics.


For balanced classification:


Accuracy may be useful.


For rare positive events:


Precision, Recall, F1, PR-AUC, or ROC-AUC may be more informative depending on the objective.


For regression:


MAE


MSE


RMSE


R²


may be considered.



19. Complete Supervised Learning Workflow


A robust supervised learning workflow is:


Problem Definition


↓


Data Collection


↓


Data Exploration


↓


Data Cleaning


↓


Feature Preparation


↓


Train/Validation/Test Split


↓


Baseline Model


↓


Model Training


↓


Validation


↓


Hyperparameter Tuning


↓


Final Test Evaluation


↓


Deployment


↓


Monitoring



20. Step 1: Problem Definition


Before writing code, define:


What should be predicted?


What is the target?


What observations are available?


What is the prediction time?


What mistakes are costly?



21. Step 2: Data Collection


Data can come from:


Databases


Files


Sensors


Applications


APIs


Human-generated records.


The data must represent the population where the model will eventually be used.



22. Step 3: Data Exploration


Explore:


Number of samples


Number of features


Data types


Missing values


Class distribution


Outliers


Potential leakage.


Exploration helps identify problems before training.



23. Step 4: Data Cleaning


Possible operations include:


Handling missing values


Correcting invalid values


Removing duplicates when appropriate


Standardizing representations


Handling unusual observations.



24. Step 5: Feature Preparation


Feature preparation may include:


Scaling


Encoding


Feature selection


Feature engineering


Transformation.



25. Step 6: Train/Validation/Test Split


A common conceptual split is:


Training Set


Used to fit the model.


Validation Set


Used to select models and hyperparameters.


Test Set


Used for final evaluation.



26. Why Keep a Test Set?


If the test set is repeatedly used during development, information about it gradually influences decisions.


It stops being an independent final evaluation.


Therefore, the test set should remain isolated until the final assessment whenever practical.



27. Step 7: Baseline Model


A baseline provides a reference point.


Examples:


Majority-class classifier


Mean prediction for regression


Simple Logistic Regression


Simple Decision Tree.


A complex model should demonstrate useful improvement over a reasonable baseline.



28. Step 8: Model Training


The training data is passed to the selected algorithm.


The algorithm learns parameters from the training data.



29. Step 9: Validation


Evaluate the model on validation data or through cross-validation.


Compare:


Performance


Complexity


Training Time


Interpretability.



30. Step 10: Hyperparameter Tuning


Hyperparameters are selected using validation strategies.


Examples:


Tree depth


Regularization strength


Number of trees


Learning rate


Number of neighbors


SVM C and gamma.



31. Step 11: Final Test Evaluation


After selecting the model, evaluate it once on the held-out test data.


This provides an estimate of generalization performance.



32. Step 12: Deployment


A trained model can be integrated into an application.


Conceptually:


Application


↓


Input


↓


Preprocessing


↓


Model


↓


Prediction


↓


Response.



33. Step 13: Monitoring


Deployment is not the end of machine learning.


Monitor:


Prediction Quality


Input Distributions


Missing Values


Latency


Errors


Data Drift.


A model can degrade when real-world data changes.



34. Data Drift


Suppose a model was trained on data from:


2025.


By:


2028.


User behaviour may have changed.


The distribution of input variables can shift.


This is one form of:


Data Drift.



35. Concept Drift


Concept drift occurs when the relationship between inputs and target changes.


For example:


The same customer behaviour may have a different relationship with purchasing decisions after a major market change.



36. Data Leakage


Data leakage occurs when information unavailable at prediction time is accidentally used during training.


Example:


Using a future outcome-related variable as an input.


This can produce unrealistically strong validation performance.



37. Pipeline


A machine learning pipeline can combine preprocessing and model training.


Python


from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression


pipeline = make_pipeline(
    StandardScaler(),
    LogisticRegression(
        max_iter=2000
    )
)


pipeline.fit(
    X_train,
    y_train
)


print(
    pipeline.score(
        X_test,
        y_test
    )
)


Output


A test score produced by the complete pipeline.



38. Why Pipelines Matter


A pipeline ensures preprocessing steps are applied consistently.


It also helps reduce leakage during cross-validation because preprocessing can be fitted within each training fold when the pipeline is evaluated correctly.



39. Cross-Validation


Cross-validation divides the training data into multiple folds.


For example:


5-Fold Cross-Validation.


The model is trained and validated multiple times using different folds.



40. Five-Fold Cross-Validation


Conceptually:


Fold 1 → Validation


Folds 2-5 → Training


Then:


Fold 2 → Validation


Folds 1,3,4,5 → Training


The process continues until every fold has been used for validation.



41. Python Cross-Validation


Python


from sklearn.model_selection import cross_val_score


scores = cross_val_score(
    pipeline,
    X_train,
    y_train,
    cv=5
)


print(
    "CV scores:",
    scores
)


print(
    "Mean CV score:",
    scores.mean()
)


Output


CV scores:


Multiple validation scores.


Mean CV score:


Average cross-validation performance.



42. Uncertainty in Regression


Regression predictions can also be uncertain.


Suppose a model predicts:


House Price = 500,000.


That prediction does not mean the true value is exactly:


500,000.


Prediction intervals or other uncertainty methods can provide additional information when supported by the modelling approach.



43. Error Analysis


After evaluating a model, inspect incorrect predictions.


Ask:


Which examples are difficult?


Are certain classes frequently confused?


Are errors concentrated in one subgroup?


Are there unusual inputs?


Is there a systematic pattern?



44. Error Analysis Example


Suppose a classifier has:


95% overall accuracy.


But:


Class A accuracy = 99%


Class B accuracy = 70%.


Overall accuracy hides the weaker performance on Class B.


This demonstrates why detailed evaluation matters.



45. Model Comparison


Models should be compared using:


The same data split or cross-validation strategy.


The same evaluation metric.


The same preprocessing assumptions.


The same test set for final evaluation.


Otherwise comparisons can become misleading.



46. Reproducibility


A machine learning experiment should record:


Dataset Version


Code Version


Random Seeds


Hyperparameters


Feature Processing


Model Version


Evaluation Metrics.


Reproducibility allows results to be checked and repeated.



47. Experiment


Create a supervised learning pipeline.


Compare:


Logistic Regression


Decision Tree


Random Forest


SVM


Gradient Boosting.


Use the same train/test split.


Evaluate using:


Accuracy


Precision


Recall


F1 Score.


Do not choose a model solely because it has the highest training score.



48. Experiment: Threshold


Train a binary classifier that produces probabilities.


Evaluate thresholds:


0.30


0.40


0.50


0.60


0.70.


Record:


Precision


Recall


F1 Score.


Observe how changing the threshold changes the classification trade-off.



49. Experiment: Error Analysis


Select incorrectly classified observations.


Inspect their:


Features


True Labels


Predicted Labels


Prediction Probability.


Look for patterns in the mistakes.



50. Common Mistakes


Mistake 1:


Evaluating only training performance.


Mistake 2:


Using the test set repeatedly during development.


Mistake 3:


Ignoring class imbalance.


Mistake 4:


Allowing data leakage.


Mistake 5:


Using inappropriate metrics.


Mistake 6:


Ignoring preprocessing consistency.


Mistake 7:


Deploying without monitoring.



51. Practice


1. What is prediction uncertainty?


2. Why are probability estimates not automatically guaranteed to be calibrated?


3. What is a classification threshold?


4. What is precision?


5. What is recall?


6. What is F1 Score?


7. Why is a test set kept separate?


8. What is data leakage?


9. What is data drift?


10. What is concept drift?


11. Why are pipelines useful?


12. Why is error analysis important?



52. Quick Check


Question 1


Why can two predictions with the same class label have different levels of uncertainty?


Answer


Their predicted probabilities or decision scores can be very different.


Question 2


What is data leakage?


Answer


Using information during training that would not legitimately be available when making the prediction.


Question 3


Why is cross-validation useful?


Answer


It provides multiple validation estimates and helps compare or tune models more reliably.


Question 4


Why should the test set remain isolated?


Answer


To preserve an approximately unbiased final estimate of generalization performance.


Question 5


What is data drift?


Answer


A change in the distribution of input data over time.



53. Summary


Supervised learning is more than fitting a model.


A complete workflow includes:


Problem Definition


Data Collection


Data Preparation


Train/Validation/Test Splitting


Baseline


Model Training


Validation


Hyperparameter Tuning


Final Evaluation


Deployment


Monitoring.


Prediction probabilities should not automatically be treated as perfectly calibrated certainty.


Thresholds affect precision and recall.


Error analysis helps identify systematic weaknesses.


Pipelines help combine preprocessing and modelling safely.


Data leakage must be prevented.


Data drift and concept drift should be monitored after deployment.



54. Extended Study


A machine learning model estimates a function:


f(x) → ŷ.


For classification:


f(x) → P(y | x)


may represent estimated class probabilities when the model provides probabilities.


The quality of a prediction can be considered from several perspectives:


Correctness


Calibration


Robustness


Generalization


Uncertainty.


A model with high accuracy can still be poorly calibrated.


A model with strong average performance can still fail on particular subgroups or input distributions.


Therefore, model evaluation should be multidimensional.



55. End-to-End Mental Model


The complete supervised learning process can be remembered as:


Understand the Problem


↓


Understand the Data


↓


Prepare the Data


↓


Build a Baseline


↓


Train Models


↓


Validate Models


↓


Tune Hyperparameters


↓


Evaluate Once on Test Data


↓


Analyze Errors


↓


Deploy


↓


Monitor


↓


Improve.



56. Reflection


Before deploying a supervised learning model, ask:


What exactly is being predicted?


What information is available at prediction time?


Could leakage exist?


Does the dataset represent the real population?


What metric matters?


How uncertain are predictions?


Which errors are most important?


How will the model be monitored?


What happens when the data changes?


How will the model be retrained?


These questions transform a machine learning experiment into a reliable machine learning system.

`

};

export default lesson18;