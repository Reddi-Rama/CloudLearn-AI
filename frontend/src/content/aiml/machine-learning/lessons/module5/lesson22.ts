const lesson22 = {

  id: "lesson22",

  title: "Complete Model Evaluation, Tuning and Pipeline Workflow",

  content: `

Lesson 22

Complete Model Evaluation, Tuning and Pipeline Workflow


1. Introduction


This lesson combines the major ideas from the Model Evaluation, Tuning and Pipelines module.


A complete machine learning workflow should connect:


Data preparation.


Validation.


Baseline modeling.


Model comparison.


Hyperparameter tuning.


Final evaluation.


Error analysis.


Reproducibility.



2. The Complete Workflow


The overall process is:


Define problem.


Understand data.


Separate test data.


Select metric.


Choose validation strategy.


Build baseline.


Build preprocessing pipeline.


Compare models.


Tune hyperparameters.


Select final model.


Evaluate test set.


Analyze errors.


Document results.



3. Step 1 — Define the Problem


Clearly specify:


Input.


Target.


Prediction task.


Prediction horizon.


Success metric.



4. Example


Task:


Predict whether a customer will cancel a subscription.



5. Target


Binary:


0 = stays.


1 = cancels.



6. Evaluation Question


If cancellation cases are relatively rare, accuracy may not be sufficient.



7. Step 2 — Understand Data


Inspect:


Shape.


Columns.


Data types.


Missing values.


Categorical variables.


Numerical variables.


Target distribution.



8. Step 3 — Separate the Test Set


Python


from sklearn.model_selection import (
    train_test_split
)


X_train, X_test, y_train, y_test = train_test_split(

    X,

    y,

    test_size=0.2,

    stratify=y,

    random_state=42

)



9. Important Principle


The test set is reserved for final evaluation.



10. Step 4 — Choose Validation


For classification with independent observations:


StratifiedKFold.


may be appropriate.



11. Python


from sklearn.model_selection import (
    StratifiedKFold
)


cv = StratifiedKFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)



12. Step 5 — Establish Baseline


Python


from sklearn.dummy import (
    DummyClassifier
)


baseline = DummyClassifier(

    strategy="most_frequent"

)



13. Evaluate Baseline


Python


baseline_scores = cross_val_score(

    baseline,

    X_train,

    y_train,

    cv=cv,

    scoring="f1"

)



14. Record


Mean baseline F1.


Standard deviation.



15. Step 6 — Identify Feature Types


Suppose the dataset contains:


Age.


Income.


AccountAge.


Region.


PlanType.



16. Numerical Features


Python


numeric_features = [

    "Age",

    "Income",

    "AccountAge"

]



17. Categorical Features


Python


categorical_features = [

    "Region",

    "PlanType"

]



18. Step 7 — Build Preprocessing


Python


from sklearn.compose import (
    ColumnTransformer
)


from sklearn.impute import (
    SimpleImputer
)


from sklearn.preprocessing import (
    StandardScaler,
    OneHotEncoder
)


numeric_pipeline = Pipeline([

    (
        "imputer",
        SimpleImputer(
            strategy="median"
        )
    ),

    (
        "scaler",
        StandardScaler()
    )

])



19. Categorical Pipeline


Python


categorical_pipeline = Pipeline([

    (
        "imputer",
        SimpleImputer(
            strategy="most_frequent"
        )
    ),

    (
        "encoder",
        OneHotEncoder(
            handle_unknown="ignore"
        )
    )

])



20. ColumnTransformer


Python


preprocessor = ColumnTransformer([

    (
        "num",
        numeric_pipeline,
        numeric_features
    ),

    (
        "cat",
        categorical_pipeline,
        categorical_features
    )

])



21. Why Use ColumnTransformer?


Different feature types can receive appropriate preprocessing.



22. Step 8 — Create Candidate Pipelines


Candidate 1:


Logistic Regression.



23. Python


logistic_pipeline = Pipeline([

    (
        "preprocessor",
        preprocessor
    ),

    (
        "model",
        LogisticRegression(
            max_iter=1000
        )
    )

])



24. Candidate 2


Random Forest.



25. Python


forest_pipeline = Pipeline([

    (
        "preprocessor",
        preprocessor
    ),

    (
        "model",
        RandomForestClassifier(
            random_state=42
        )
    )

])



26. Candidate 3


Another suitable classifier can be included according to the problem.



27. Step 9 — Compare Models


Python


logistic_scores = cross_val_score(

    logistic_pipeline,

    X_train,

    y_train,

    cv=cv,

    scoring="f1"

)



28. Random Forest


Python


forest_scores = cross_val_score(

    forest_pipeline,

    X_train,

    y_train,

    cv=cv,

    scoring="f1"

)



29. Record Results


For every candidate:


Mean F1.


Standard deviation.



30. Step 10 — Select Promising Models


Use cross-validation results to identify promising candidates.


Do not use the final test set for this decision.



31. Step 11 — Tune Hyperparameters


Example:


Random Forest.


Parameters:


n_estimators.


max_depth.


min_samples_leaf.



32. Parameter Grid


Python


param_grid = {

    "model__n_estimators": [

        100,

        200

    ],

    "model__max_depth": [

        None,

        5,

        10

    ],

    "model__min_samples_leaf": [

        1,

        2,

        5

    ]

}



33. Grid Search


Python


search = GridSearchCV(

    forest_pipeline,

    param_grid,

    cv=cv,

    scoring="f1",

    n_jobs=-1

)



34. Fit


Python


search.fit(

    X_train,

    y_train

)



35. Best Parameters


Python


print(
    search.best_params_
)



36. Best CV Score


Python


print(
    search.best_score_
)



37. Step 12 — Inspect Search Results


Python


results = pd.DataFrame(

    search.cv_results_

)



38. Important Columns


Inspect:


params.


mean_test_score.


std_test_score.


rank_test_score.



39. Step 13 — Final Estimator


Python


final_model = search.best_estimator_



40. Step 14 — Final Test Evaluation


Python


test_predictions = final_model.predict(

    X_test

)



41. Classification Metrics


Python


from sklearn.metrics import (

    accuracy_score,

    precision_score,

    recall_score,

    f1_score

)



42. Calculate


Python


accuracy = accuracy_score(

    y_test,

    test_predictions

)


precision = precision_score(

    y_test,

    test_predictions,

    zero_division=0

)


recall = recall_score(

    y_test,

    test_predictions,

    zero_division=0

)


f1 = f1_score(

    y_test,

    test_predictions,

    zero_division=0

)



43. Step 15 — Confusion Matrix


Python


from sklearn.metrics import (
    confusion_matrix
)


cm = confusion_matrix(

    y_test,

    test_predictions

)


print(
    cm
)



44. Step 16 — Error Analysis


Inspect:


False positives.


False negatives.



45. Business Context


Ask:


Which type of error is more costly?


Can predictions be reviewed by humans?


Should thresholds change?



46. Prediction Threshold


Many classifiers produce probabilities or decision scores.


The default classification threshold is not always the best operational threshold.



47. Example


Python


probabilities = final_model.predict_proba(

    X_test

)[:, 1]



48. Custom Threshold


Python


threshold = 0.40


custom_predictions = (

    probabilities >= threshold
).astype(int)



49. Compare


Evaluate:


Precision.


Recall.


F1.



50. Important Principle


Changing the threshold changes the precision-recall trade-off.



51. Step 17 — Calibration


A model's predicted probabilities may not always correspond closely to observed frequencies.



52. Calibration Question


If a group of predictions has probability:


0.8.


approximately how often should the positive outcome occur for well-calibrated predictions?


Approximately:


80%.



53. Step 18 — Regression Workflow


For regression, the same overall structure applies.



54. Metrics


Use:


MAE.


RMSE.


R².



55. Baseline


Use:


DummyRegressor.



56. Step 19 — Reproducibility


Record:


Random states.


Dataset version.


Library versions.


Feature definitions.


Hyperparameters.



57. Example


Python


import sklearn


print(

    sklearn.__version__

)



58. Step 20 — Save the Model


A trained pipeline can be serialized for later use.



59. Example


Python


import joblib


joblib.dump(

    final_model,

    "model.joblib"

)



60. Load


Python


loaded_model = joblib.load(

    "model.joblib"

)



61. Why Save the Pipeline?


Saving the complete pipeline preserves:


Preprocessing.


Encoding.


Feature transformations.


Model.



62. Production Inference


New data should be passed through the same pipeline.



63. Example


Python


prediction = loaded_model.predict(

    new_data

)



64. Step 21 — Monitor


After deployment, performance can change.


Possible causes:


Data drift.


Concept drift.


Changes in user behavior.


Changes in data collection.



65. Monitoring


Track:


Input distributions.


Missing-value rates.


Prediction distributions.


Performance when labels become available.



66. Step 22 — Retraining


Retraining should be based on:


Observed performance.


Data changes.


Business requirements.



67. Complete Workflow Diagram


Raw Data


↓


Problem Definition


↓


Train/Test Split


↓


Validation Strategy


↓


Baseline


↓


Preprocessing Pipeline


↓


Candidate Models


↓


Cross-Validation


↓


Hyperparameter Search


↓


Selected Model


↓


Final Test


↓


Error Analysis


↓


Serialization


↓


Deployment


↓


Monitoring.



68. Final Project Experiment


Build a complete machine learning workflow from beginning to end.



69. Project Dataset


Use a classification dataset containing:


Numerical features.


Categorical features.


Missing values.



70. Required Components


The project must include:


Train/test split.


Baseline.


Preprocessing pipeline.


At least three candidate models.


Cross-validation.


Model comparison.


Hyperparameter tuning.


Final test evaluation.


Confusion matrix.


Error analysis.



71. Required Metrics


Report:


Accuracy.


Precision.


Recall.


F1.



72. Required Analysis


Explain:


Why the metric was selected.


Why the validation strategy was selected.


Why the final model was selected.



73. Common Mistakes


Mistake 1:


Using the test set during tuning.


Mistake 2:


Preprocessing the complete dataset before CV.


Mistake 3:


Ignoring class imbalance.


Mistake 4:


Reporting only accuracy.


Mistake 5:


Saving only the model without preprocessing.


Mistake 6:


Not recording the final configuration.



74. Practice


1. Describe the complete model evaluation workflow.


2. Why is a baseline important?


3. Why should preprocessing be included in a pipeline?


4. Why should the test set remain untouched?


5. What is hyperparameter tuning?


6. Why compare multiple candidate models?


7. What is error analysis?


8. Why might a classification threshold be changed?


9. Why save the complete pipeline?


10. What should be monitored after deployment?



75. Quick Check


Question 1


Where should hyperparameter tuning occur?


Answer:


Inside the training/validation process, without using the final test set for selection.



Question 2


Why use ColumnTransformer?


Answer:


To apply appropriate preprocessing to different feature types.



Question 3


Why save the complete pipeline?


Answer:


So the same preprocessing and prediction process can be applied consistently to future data.



76. Summary


A complete machine learning workflow connects:


Problem definition.


Data understanding.


Train/test separation.


Validation.


Baseline modeling.


Preprocessing.


Model comparison.


Hyperparameter tuning.


Final evaluation.


Error analysis.


Serialization.


Monitoring.



77. Extended Study


A production machine learning system can be viewed as a lifecycle:


Data collection


→


Data validation


→


Feature processing


→


Model training


→


Model evaluation


→


Deployment


→


Monitoring


→


Retraining.



78. Final Reflection


A high-quality machine learning project is not defined only by its model.


It is defined by the entire experimental process.


The strongest workflow protects against:


Data leakage.


Invalid validation.


Metric mismatch.


Overfitting.


Selection bias.


Reproducibility problems.


Deployment inconsistencies.



A well-designed pipeline makes the transition from experimentation to practical prediction much safer and more reproducible.

`

};

export default lesson22;