const lesson8 = {

  id: "lesson8",

  title: "Choosing the Right Evaluation Metric",

  content: `

Lesson 08

Choosing the Right Evaluation Metric


1. Introduction


A machine learning model needs a way to measure its performance.


This measurement is called an evaluation metric.


However, there is no single metric that is appropriate for every machine learning problem.


The correct metric depends on:


The type of problem.


The target variable.


The cost of different errors.


Class balance.


Business requirements.


Scientific objectives.



2. Why Metric Selection Matters


Suppose a classification model achieves:


95% accuracy.


At first glance, this may appear excellent.


But suppose:


95% of the observations belong to Class 0.


5% belong to Class 1.


A model that always predicts Class 0 can achieve approximately:


95% accuracy.


Yet it completely misses Class 1.



3. The Main Question


Instead of asking:


"Which metric is the most popular?"


Ask:


"What type of model behavior matters for this problem?"



4. Classification Metrics


Common classification metrics include:


Accuracy.


Precision.


Recall.


F1-score.


ROC-AUC.


PR-AUC.



5. Regression Metrics


Common regression metrics include:


MAE.


MSE.


RMSE.


R².



6. Accuracy


Accuracy measures the proportion of predictions that are correct.


Formula:


Accuracy


=


(TP + TN)


/


(TP + TN + FP + FN).



7. Accuracy Works Well When


Accuracy can be useful when:


Classes are reasonably balanced.


False positives and false negatives have similar importance.


A simple overall correctness measure is appropriate.



8. Accuracy Can Fail When


Classes are highly imbalanced.


One class is much more important than another.


Different error types have different costs.



9. Precision


Precision answers:


"Among the observations predicted as positive, how many were actually positive?"



10. Precision Formula


Precision


=


TP


/


(TP + FP).



11. Recall


Recall answers:


"Among the observations that are actually positive, how many did the model identify?"



12. Recall Formula


Recall


=


TP


/


(TP + FN).



13. F1-Score


F1-score combines precision and recall using their harmonic mean.


Formula:


F1


=


2 × Precision × Recall


/


(Precision + Recall).



14. ROC-AUC


ROC-AUC summarizes the model's ability to distinguish positive and negative observations across classification thresholds.



15. Regression Metrics


For regression, predictions are continuous values.


Examples:


Predicted house price.


Predicted temperature.


Predicted sales.



16. MAE


Mean Absolute Error:


MAE


=


1/n Σ|yᵢ − ŷᵢ|.



17. Interpretation


MAE represents the average absolute prediction error in the same units as the target.



18. Example


Actual:


100.


Prediction:


90.


Absolute error:


10.



19. MSE


Mean Squared Error:


MSE


=


1/n Σ(yᵢ − ŷᵢ)².



20. Why Square Errors?


Squaring gives larger errors greater influence.



21. RMSE


Root Mean Squared Error:


RMSE


=


√MSE.



22. R²


R² measures the proportion of variation explained by the model relative to a baseline based on the target mean.



23. Metric Selection by Problem


Classification:


Accuracy.


Precision.


Recall.


F1.


ROC-AUC.



Regression:


MAE.


MSE.


RMSE.


R².



24. False Positive Cost


Suppose a system flags transactions as suspicious.


A false positive means:


A legitimate transaction is flagged.



25. False Negative Cost


A false negative means:


A fraudulent transaction is missed.



26. Which Error Matters?


If missing fraud is especially costly, recall may be important.


If unnecessary investigations are especially costly, precision may be important.


The appropriate balance depends on the application.



27. Medical Screening Example


Suppose a model identifies patients who may require additional screening.


A false negative means:


A potentially positive case is not flagged.



28. Recall


If missing positive cases is especially costly, recall can be an important metric.



29. Spam Filtering Example


Suppose an email classifier labels messages as spam.


A false positive means:


A legitimate email is classified as spam.



30. Precision


If incorrectly blocking legitimate messages is costly, precision can be important.



31. Search Ranking Example


Suppose a search system returns:


10 results.


Only 7 are relevant.


Precision:


7 / 10.


=


70%.



32. Information Retrieval


Precision and recall are particularly useful when evaluating systems that retrieve relevant items from a larger collection.



33. Imbalanced Classification


Suppose:


Class 0 = 98%.


Class 1 = 2%.



34. Accuracy


An always-Class-0 model can achieve:


98% accuracy.



35. Recall


However:


Recall for Class 1:


0%.



36. Lesson


Always inspect the target distribution before deciding which metric to use.



37. Thresholds


Many classifiers produce a score or probability.


A threshold converts that score into a class prediction.



38. Example


Suppose:


Predicted probability = 0.80.


Threshold = 0.50.


Prediction:


Positive.



39. Changing the Threshold


Threshold = 0.90.


The same probability:


0.80.


would now be classified as:


Negative.



40. Metric Trade-Off


Changing the classification threshold can change:


Precision.


Recall.


F1-score.



41. Business Requirements


Metric selection should reflect:


Operational cost.


Risk.


User experience.


Safety requirements.


Resource constraints.



42. Multiple Metrics


Sometimes one metric is insufficient.


A model may be evaluated using:


Precision.


Recall.


F1.


ROC-AUC.



43. Example


A fraud system might report:


Precision = 0.80.


Recall = 0.72.


F1 = 0.76.



44. Why Report Multiple Metrics?


Different metrics answer different questions.


No single value completely describes model behavior.



45. Regression Metric Selection


Suppose prediction errors are:


1.


2.


3.


20.



46. MAE


MAE treats errors according to their absolute magnitude.



47. MSE


MSE gives the large error of 20 much greater influence because:


20² = 400.



48. When Large Errors Matter


If large errors are particularly costly, squared-error metrics can be useful.



49. When Interpretability Matters


MAE is often easy to interpret because it remains in the original target units.



50. Example


House-price prediction:


MAE = ₹50,000.


This can be interpreted as an average absolute error of approximately ₹50,000 under the evaluation conditions.



51. Scale


MSE is expressed in squared target units.


RMSE returns the metric to the original target units.



52. R² Limitation


R² should not be interpreted as a universal measure of practical usefulness.


A model can have a positive R² while still having errors that are unacceptable for the application.



53. Metric and Dataset


The same model can appear different depending on the chosen metric.



54. Example


Model A:


High precision.


Moderate recall.



Model B:


Moderate precision.


High recall.



55. Which Is Better?


There is no universal answer.


The appropriate choice depends on the problem objective.



56. scikit-learn Metrics


Python


from sklearn.metrics import (

    accuracy_score,

    precision_score,

    recall_score,

    f1_score

)



57. Example


Python


accuracy = accuracy_score(

    y_test,

    predictions

)


precision = precision_score(

    y_test,

    predictions

)


recall = recall_score(

    y_test,

    predictions

)


f1 = f1_score(

    y_test,

    predictions

)



58. Print Metrics


Python


print(
    "Accuracy:",
    accuracy
)


print(
    "Precision:",
    precision
)


print(
    "Recall:",
    recall
)


print(
    "F1:",
    f1
)



59. Regression Metrics in Python


Python


from sklearn.metrics import (

    mean_absolute_error,

    mean_squared_error,

    r2_score

)



60. Example


Python


mae = mean_absolute_error(

    y_test,

    predictions

)


mse = mean_squared_error(

    y_test,

    predictions

)


rmse = mse ** 0.5


r2 = r2_score(

    y_test,

    predictions

)



61. Experiment


Train a classification model.


Evaluate it using:


Accuracy.


Precision.


Recall.


F1-score.



62. Experiment 2


Modify the classification threshold.


Observe how:


Precision.


Recall.


F1.


change.



63. Experiment 3


Create an imbalanced classification dataset.


Compare:


Accuracy.


F1.



64. Experiment 4


Train a regression model.


Compare:


MAE.


MSE.


RMSE.



65. Common Mistakes


Mistake 1:


Using accuracy automatically.


Mistake 2:


Ignoring class imbalance.


Mistake 3:


Using precision without considering recall.


Mistake 4:


Using recall without considering false positives.


Mistake 5:


Comparing models using different metrics.


Mistake 6:


Ignoring the business meaning of errors.


Mistake 7:


Interpreting R² as a universal quality score.



66. Practice


1. What is an evaluation metric?


2. When is accuracy useful?


3. Why can accuracy be misleading?


4. What does precision measure?


5. What does recall measure?


6. What is F1-score?


7. What does MAE measure?


8. Why does MSE emphasize large errors?


9. Why is RMSE easier to interpret than MSE?


10. Why should metric selection depend on the application?



67. Quick Check


Question 1


A model has 99% accuracy on a dataset where 99% of observations belong to Class 0.


What should you investigate?


Answer:


Performance on the minority class and metrics such as precision, recall, and F1.



Question 2


What does recall measure?


Answer:


The proportion of actual positive observations that are correctly identified.



Question 3


What does MAE represent?


Answer:


Average absolute prediction error in the target's original units.



68. Summary


Evaluation metrics provide different perspectives on model performance.


Classification:


Accuracy.


Precision.


Recall.


F1.


ROC-AUC.



Regression:


MAE.


MSE.


RMSE.


R².



The correct metric depends on:


Class balance.


Error costs.


Business objectives.


Prediction type.



69. Extended Study


Metric selection can be understood as choosing a loss or measurement function that reflects the consequences of prediction errors.


A model can therefore be evaluated not only by:


"What percentage of predictions are correct?"


but also:


"Which errors are occurring?"


"How large are the errors?"


"Which errors are more costly?"


"What behavior does the application require?"



70. Final Reflection


Before evaluating a model, ask:


What kind of problem is this?


What errors can occur?


Which errors matter most?


Is the dataset imbalanced?


What does success mean?


Which metric measures that definition of success?

`

};

export default lesson8;