const lesson17 = {

  id: "lesson17",

  title: "Cross-Validation for Model Comparison",

  content: `

Lesson 17

Cross-Validation for Model Comparison


1. Introduction


Machine learning often involves comparing several candidate models.


For example:


Logistic Regression.


Decision Tree.


Random Forest.


Support Vector Machine.



2. The Goal


The goal is not simply to find the model with the highest score on one validation split.


We want an estimate of how each model is likely to perform on unseen data.



3. Why One Split Can Be Misleading


Suppose two models are evaluated using one train-test split.


Model A:


Accuracy = 91%.


Model B:


Accuracy = 92%.



4. Question


Is Model B truly better?


Not necessarily.


The difference may be influenced by the particular observations placed in the validation set.



5. Cross-Validation


Cross-validation evaluates models across multiple train-validation splits.



6. Basic Idea


For each model:


Split the data.


Train the model.


Evaluate it.


Repeat.


Aggregate the scores.



7. Five-Fold Example


Five-fold cross-validation produces five validation scores.



8. Model A


Scores:


0.89.


0.93.


0.91.


0.90.


0.92.



9. Mean


Mean score:


(0.89 + 0.93 + 0.91 + 0.90 + 0.92) / 5.


=


0.91.



10. Model B


Scores:


0.90.


0.92.


0.91.


0.91.


0.92.



11. Mean


Mean:


0.912.



12. Important Point


The mean score is useful, but the spread of the scores is also important.



13. Standard Deviation


Calculate:


Standard deviation of validation scores.



14. Python


import numpy as np


mean_score = np.mean(
    scores
)


std_score = np.std(
    scores
)



15. Why Standard Deviation?


A large standard deviation indicates that model performance varies considerably across folds.



16. Comparing Models


For each candidate model, record:


Mean score.


Standard deviation.



17. Same Folds


When comparing models, it is useful to use the same cross-validation splits so that differences are not caused by different fold assignments.



18. Example


Python


from sklearn.model_selection import (
    KFold
)


cv = KFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)



19. Model A


Python


scores_a = cross_val_score(

    model_a,

    X,

    y,

    cv=cv,

    scoring="accuracy"

)



20. Model B


Python


scores_b = cross_val_score(

    model_b,

    X,

    y,

    cv=cv,

    scoring="accuracy"

)



21. Compare Means


Python


print(
    scores_a.mean()
)


print(
    scores_b.mean()
)



22. Compare Variability


Python


print(
    scores_a.std()
)


print(
    scores_b.std()
)



23. Classification


For classification, choose an appropriate metric such as:


Accuracy.


F1.


ROC-AUC.


Average Precision.



24. Regression


For regression, use metrics such as:


MAE.


RMSE.


R².



25. Example


Suppose three classifiers are being compared.


Model A:


Mean F1 = 0.81.


Model B:


Mean F1 = 0.84.


Model C:


Mean F1 = 0.79.



26. Interpretation


Model B has the highest observed mean F1 in this experiment.


However, the comparison should also consider:


Variability.


Dataset size.


Computational cost.


Model complexity.


The intended deployment scenario.



27. Avoid Single-Split Decisions


Cross-validation reduces dependence on one particular train-validation split.



28. Paired Fold Results


When the same folds are used, each model produces a score for each fold.


This creates paired observations:


Fold 1:


Model A.


Model B.



Fold 2:


Model A.


Model B.



29. Why Pairing Helps


The models are being evaluated on the same validation observations in each fold.



30. Difference Per Fold


Calculate:


Difference = Score A − Score B.



31. Example


Fold 1:


A = 0.90.


B = 0.88.


Difference:


0.02.



32. Fold 2


A = 0.87.


B = 0.91.


Difference:


−0.04.



33. Interpretation


One model does not necessarily outperform the other on every fold.



34. Cross-Validation and Pipelines


When models require preprocessing, put preprocessing and model training inside a pipeline.



35. Example


Python


from sklearn.pipeline import (
    Pipeline
)


from sklearn.preprocessing import (
    StandardScaler
)


from sklearn.linear_model import (
    LogisticRegression
)


pipeline = Pipeline([

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        LogisticRegression(
            max_iter=1000
        )
    )

])



36. Evaluate


Python


scores = cross_val_score(

    pipeline,

    X,

    y,

    cv=cv,

    scoring="accuracy"

)



37. Multiple Models


Create pipelines for:


Logistic Regression.


Support Vector Machine.


K-Nearest Neighbors.



38. Compare


Evaluate all using:


The same X.


The same y.


The same cv.


The same metric.



39. Cross-Validation and Hyperparameters


Model comparison often occurs before or during hyperparameter tuning.



40. Example


For a decision tree:


max_depth = 3.


max_depth = 5.


max_depth = 10.



41. Evaluate Each


Cross-validation can estimate the performance associated with each configuration.



42. Grid Search


Instead of manually evaluating configurations, scikit-learn provides:


GridSearchCV.



43. Important Distinction


Cross-validation is an evaluation strategy.


Hyperparameter search is a model-selection process that can use cross-validation.



44. Nested Evaluation


When model selection itself must be evaluated without optimistic bias, nested cross-validation can be used.



45. Basic Idea


Outer loop:


Estimate generalization performance.



46. Inner loop


Select hyperparameters.



47. Why?


The same validation information should not be repeatedly reused to both select the model and estimate its final performance.



48. Model Comparison Table


A useful experiment can record:


Model.


Mean score.


Standard deviation.


Training time.



49. Example


Model:


Logistic Regression.


Mean F1:


0.81.


Std:


0.03.



50. Another Model


Random Forest.


Mean F1:


0.84.


Std:


0.02.



51. Interpretation


The observed cross-validation results provide evidence about comparative performance.


They do not guarantee identical performance after deployment.



52. Statistical Caution


Small score differences may be caused by:


Sampling variation.


Dataset size.


Fold composition.



53. Confidence


Cross-validation estimates are not exact guarantees of future performance.



54. Repeated Cross-Validation


For some experiments, repeated cross-validation can provide additional information about variability.



55. Example


Repeated five-fold cross-validation:


Run five-fold splitting multiple times with different random partitions.



56. When Useful


Repeated cross-validation can be useful when:


The dataset is relatively small.


The estimated score is sensitive to the split.



57. Computational Cost


More repetitions mean:


More model fits.



58. Model Comparison Workflow


Step 1:


Define the target metric.



59. Step 2


Choose an appropriate cross-validation strategy.



60. Step 3


Build pipelines where preprocessing is required.



61. Step 4


Evaluate each candidate model.



62. Step 5


Calculate mean and variability.



63. Step 6


Investigate errors and practical requirements.



64. Step 7


Perform final evaluation on a held-out test set when appropriate.



65. Experiment


Choose three classification algorithms.



66. Example


Use:


Logistic Regression.


Decision Tree.


Random Forest.



67. Evaluation


Use:


StratifiedKFold.



68. Metric


Use:


F1-score.



69. Record


For every model:


Mean F1.


Standard deviation.



70. Experiment 2


Repeat the comparison using:


ROC-AUC.



71. Experiment 3


Compare whether the model ordering changes between metrics.



72. Why?


Different metrics measure different aspects of model performance.



73. Common Mistakes


Mistake 1:


Comparing models using different folds.


Mistake 2:


Using different metrics.


Mistake 3:


Preprocessing outside the cross-validation pipeline.


Mistake 4:


Choosing a model based only on one split.


Mistake 5:


Ignoring score variability.


Mistake 6:


Repeatedly using the final test set during model selection.



74. Practice


1. Why use cross-validation for model comparison?


2. Why should models use the same folds?


3. What does the mean cross-validation score represent?


4. Why examine standard deviation?


5. Why should preprocessing be inside a pipeline?


6. What is nested cross-validation?


7. Why should the final test set remain separate from model selection?



75. Quick Check


Question 1


Two models are compared using different folds.


Why is this undesirable?


Answer:


The score difference may partly reflect differences in the validation observations rather than differences between the models.



Question 2


Why calculate both mean and standard deviation?


Answer:


The mean summarizes average performance while the standard deviation describes variation across folds.



76. Summary


Cross-validation provides a structured method for comparing candidate models.


Good model comparison uses:


The same folds.


The same metric.


The same dataset.


Appropriate preprocessing pipelines.


Mean and variability.


A final independent evaluation when appropriate.



77. Extended Study


Suppose model m produces fold scores:


s₁, s₂, ..., s_k.


The mean is:


s̄ = 1/k Σsᵢ.



The empirical standard deviation summarizes variation around that mean.


Comparing models using the same folds creates paired score differences that can be examined during analysis.



78. Final Reflection


Model comparison is not simply:


"Which model has the largest score?"


A careful comparison asks:


Was the validation strategy appropriate?


Were the models evaluated on the same folds?


Is the metric appropriate?


How variable are the results?


Does the result generalize?


Does the model satisfy practical requirements?

`

};

export default lesson17;