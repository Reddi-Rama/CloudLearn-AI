const lesson21 = {

  id: "lesson21",

  title: "Model Selection, Validation Bias and Nested Cross-Validation",

  content: `

Lesson 21

Model Selection, Validation Bias and Nested Cross-Validation


1. Introduction


Model selection involves choosing:


A model family.


Hyperparameters.


Preprocessing choices.


Features.


Evaluation strategies.



2. The Selection Problem


Suppose many configurations are evaluated.


Even if all configurations are reasonable, selecting the highest validation score introduces selection effects.



3. Example


Suppose 100 configurations are evaluated.


One configuration may obtain an unusually high validation score partly because of sampling variation.



4. Important Question


Does the selected score accurately estimate future performance?


Not necessarily.



5. Validation Bias


When the same validation information is repeatedly used for model selection and performance estimation, the estimated performance can become optimistic.



6. Model Selection vs Model Evaluation


Model selection asks:


Which configuration should I use?



Model evaluation asks:


How well does the selected procedure generalize?



7. Why Separate Them?


The data used for choosing a model should not be treated as completely independent evidence of the selected model's final performance.



8. Simple Approach


Use:


Training set.


Validation through cross-validation.


Final held-out test set.



9. Workflow


Training data


↓


Cross-validation


↓


Model selection


↓


Final training


↓


Test set


↓


Final evaluation.



10. Nested Cross-Validation


Nested cross-validation introduces two validation loops.



11. Outer Loop


The outer loop estimates generalization performance.



12. Inner Loop


The inner loop performs model selection and hyperparameter tuning.



13. Structure


Outer training set


↓


Inner cross-validation


↓


Select hyperparameters


↓


Train selected model


↓


Outer validation set.


Repeat.



14. Why Two Loops?


The outer validation fold remains separate from the inner model-selection process.



15. Conceptual Diagram


Outer CV:


[ Train | Validation ]



Inside Train:


[ Inner Train | Inner Validation ]



16. Example


Suppose outer cross-validation uses:


5 folds.



17. Outer Fold 1


One portion is reserved as the outer validation set.



18. Inner Search


The remaining data undergoes hyperparameter tuning using inner cross-validation.



19. Evaluation


The selected model is evaluated on the untouched outer validation fold.



20. Repeat


The process continues for all outer folds.



21. Result


The outer scores provide an estimate of the performance of the complete model-selection procedure.



22. Important Distinction


Nested CV evaluates the entire selection process rather than only a fixed model.



23. When Useful


Nested cross-validation can be useful when:


Dataset size is limited.


Many configurations are being compared.


An unbiased performance estimate is important.



24. Computational Cost


Nested cross-validation can require many model fits.



25. Example


Outer folds:


5.


Inner folds:


5.


Hyperparameter configurations:


20.



26. Approximate Fits


20 × 5 × 5


=


500.


model fits.



27. Pipelines


Nested CV should still use pipelines when preprocessing is required.



28. Example


Python


from sklearn.pipeline import (
    Pipeline
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



29. Inner Search


Python


search = GridSearchCV(

    pipeline,

    param_grid,

    cv=5,

    scoring="f1"

)



30. Outer Evaluation


Python


outer_scores = cross_val_score(

    search,

    X,

    y,

    cv=5,

    scoring="f1"

)



31. Mean Outer Score


Python


print(

    outer_scores.mean()

)



32. Outer Variability


Python


print(

    outer_scores.std()

)



33. What Is Being Evaluated?


The object passed to cross_val_score is itself a model-selection procedure.



34. Why This Matters


The hyperparameters are selected separately inside each outer training fold.



35. Avoiding Information Leakage


The outer validation fold is not used when selecting the hyperparameters for that iteration.



36. Comparison With Simple CV


Simple CV:


Use CV to select the best configuration.


Then report its CV score.



37. Nested CV


Use inner CV to select.


Use outer CV to evaluate the selection process.



38. Potential Difference


The nested estimate may be lower than the best inner CV score.



39. Why?


The inner score is part of the selection process.


The outer score evaluates unseen validation data.



40. Example


Inner best score:


0.91.



Outer mean score:


0.87.



41. Interpretation


The difference does not automatically mean the model failed.


It can indicate that the selected configuration performed less strongly on data not used during selection.



42. Feature Selection


Nested validation is also relevant when feature selection is part of model selection.



43. Leakage Example


Suppose features are selected using the entire dataset before cross-validation.



44. Problem


The validation folds influenced feature selection.



45. Consequence


The validation score can become optimistic.



46. Correct Approach


Feature selection should occur inside the pipeline or inside the relevant training folds.



47. Pipeline Example


Python


from sklearn.feature_selection import (
    SelectKBest,
    f_classif
)


pipeline = Pipeline([

    (
        "select",
        SelectKBest(
            score_func=f_classif,
            k=10
        )
    ),

    (
        "model",
        LogisticRegression(
            max_iter=1000
        )
    )

])



48. Tuning Feature Selection


The number of selected features can itself be tuned.



49. Example


Python


param_grid = {

    "select__k": [

        5,

        10,

        20

    ]

}



50. Important Principle


Any operation that learns from the data should be included in the validation process appropriately.



51. Model Comparison


Nested CV can compare complete modeling procedures.



52. Example


Procedure A:


Scaling + Logistic Regression.



53. Procedure B:


Scaling + SVM.



54. Procedure C:


Feature Selection + Random Forest.



55. Evaluation


Each procedure can be evaluated using the same outer folds.



56. Computational Considerations


Nested CV may be expensive.


Possible strategies:


Reduce inner folds.


Reduce search space.


Use randomized search.


Use parallel computation when appropriate.



57. Reproducibility


Set random states where appropriate.



58. Example


Python


random_state=42



59. Reporting


A nested CV report should include:


Outer CV strategy.


Inner CV strategy.


Metric.


Search space.


Mean outer score.


Standard deviation.



60. Confidence Intervals


Repeated or fold-level results can sometimes be used to characterize uncertainty.


However, confidence intervals should be interpreted carefully because cross-validation folds are not fully independent observations.



61. Final Test Set


Even when nested CV is used, an independent final test set can be valuable when sufficient data is available.



62. Small Dataset


When the dataset is very small, researchers may use nested cross-validation to estimate performance while preserving as much data as possible for training.



63. Model Selection Bias


The more aggressively we search and select based on the same validation evidence, the more important it becomes to separate selection from final evaluation.



64. Experiment


Create a classification problem.



65. Candidate Models


Compare:


Logistic Regression.


Random Forest.



66. Inner Loop


Tune:


Regularization for Logistic Regression.


Tree depth for Random Forest.



67. Outer Loop


Use five-fold cross-validation.



68. Record


Record each outer fold score.



69. Calculate


Mean.


Standard deviation.



70. Compare


Compare nested CV results with the best inner CV score.



71. Experiment 2


Add feature selection to the pipeline.



72. Tune


Tune the number of selected features.



73. Observe


Determine whether the selected feature count remains stable across outer folds.



74. Common Mistakes


Mistake 1:


Using the same CV score as an unbiased final estimate after extensive model selection.


Mistake 2:


Performing feature selection before CV.


Mistake 3:


Scaling the complete dataset before validation.


Mistake 4:


Using the outer validation data during tuning.


Mistake 5:


Ignoring computational cost.



75. Practice


1. What is model selection?


2. What is validation bias?


3. What is nested cross-validation?


4. What does the inner loop do?


5. What does the outer loop do?


6. Why can nested CV be computationally expensive?


7. Why should feature selection be inside the pipeline?



76. Quick Check


Question 1


Which loop performs hyperparameter selection?


Answer:


The inner loop.



Question 2


Which loop estimates performance of the complete selection process?


Answer:


The outer loop.



Question 3


Why can the best inner CV score be optimistic?


Answer:


Because it was obtained while selecting among multiple configurations using the same validation evidence.



77. Summary


Nested cross-validation separates:


Model selection.


Performance estimation.



The inner loop:


Selects hyperparameters and modeling choices.



The outer loop:


Evaluates the selected procedure.



This helps reduce optimistic bias caused by extensive model selection.



78. Extended Study


Let:


S


represent the model-selection procedure.


For each outer fold:


S chooses a model using only the outer training data.


The selected model is then evaluated on the outer validation data.


The resulting outer scores estimate the performance of the entire selection procedure rather than the best observed inner score.



79. Final Reflection


The central principle is simple:


Do not use the same evidence both to aggressively choose a model and to claim that the selected model will perform exactly that well on unseen data.


Separating selection from evaluation produces a more trustworthy estimate.

`

};

export default lesson21;