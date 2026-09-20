const practice = {

  id: "practice",

  title: "Module 5 Practice",

  content: `

Module 5 Practice

Model Evaluation, Tuning & Pipelines


1. Practice Overview


This practice section reviews the complete Model Evaluation, Tuning and Pipelines module.


The questions progress from fundamental concepts to practical machine learning workflow design.



2. Conceptual Questions


1. What is the difference between a parameter and a hyperparameter?


2. Why is a baseline model useful?


3. Why should the final test set remain separate from model selection?


4. What is cross-validation?


5. Why is stratification useful in classification?


6. When should GroupKFold be used?


7. When should TimeSeriesSplit be used?


8. What is validation bias?


9. What is nested cross-validation?


10. What is the purpose of the inner loop in nested cross-validation?


11. What is the purpose of the outer loop?


12. Why should preprocessing be included in a pipeline?


13. What is GridSearchCV?


14. What is RandomizedSearchCV?


15. Why can grid search become computationally expensive?


16. What does n_iter control?


17. Why can logarithmic search spaces be useful?


18. What is successive halving?


19. What is model selection?


20. What is error analysis?



3. Evaluation Metric Questions


1. When can accuracy be misleading?


2. When is precision especially important?


3. When is recall especially important?


4. Why is F1 useful?


5. What does ROC-AUC measure?


6. What does Average Precision summarize?


7. Why can PR curves be useful for imbalanced classification?


8. What does MAE measure?


9. What does MSE measure?


10. Why is RMSE expressed in the same units as the target?


11. What does R² represent?


12. What is adjusted R²?



4. Cross-Validation Questions


1. Explain five-fold cross-validation.


2. Why should candidate models use the same folds during comparison?


3. Why report mean and standard deviation?


4. What can a large standard deviation across folds indicate?


5. Why should preprocessing be fitted separately within each training fold?


6. What is repeated cross-validation?


7. What is nested cross-validation?


8. What is the difference between inner and outer cross-validation?



5. Hyperparameter Tuning Questions


1. What is hyperparameter tuning?


2. Explain grid search.


3. Explain random search.


4. Compare grid search and random search.


5. What is a parameter grid?


6. How are pipeline parameters named in GridSearchCV?


7. What does best_params_ return?


8. What does best_score_ represent?


9. What does best_estimator_ return?


10. What information can cv_results_ provide?



6. Pipeline Questions


1. What is a machine learning pipeline?


2. Why combine preprocessing and a model?


3. What is ColumnTransformer?


4. Why might numerical and categorical features require different preprocessing?


5. Why use OneHotEncoder?


6. Why use SimpleImputer?


7. Why use StandardScaler?


8. Why should preprocessing not be fitted on the complete dataset before cross-validation?



7. Practical Coding Task 1


Build a binary classification workflow.


Requirements:


Load a dataset.


Separate X and y.


Create train/test sets.


Use stratification.


Build a DummyClassifier baseline.


Calculate F1-score.


Create a Logistic Regression pipeline.


Use five-fold stratified cross-validation.


Calculate mean and standard deviation.



8. Practical Coding Task 2


Compare three classification models.


Use:


Logistic Regression.


Decision Tree.


Random Forest.



For each model:


Build a pipeline.


Use the same cross-validation folds.


Calculate:


Accuracy.


Precision.


Recall.


F1.



9. Practical Coding Task 3


Create a hyperparameter search for a Decision Tree.


Tune:


max_depth.


min_samples_split.


min_samples_leaf.



Use:


GridSearchCV.



Record:


Best parameters.


Best cross-validation score.



10. Practical Coding Task 4


Create a RandomizedSearchCV experiment.


Tune at least:


n_estimators.


max_depth.



Set:


n_iter.


random_state.



Compare the result with a smaller grid search.



11. Practical Coding Task 5


Build a preprocessing pipeline using ColumnTransformer.


Use:


Numerical features.


Categorical features.



For numerical features:


Median imputation.


Standard scaling.



For categorical features:


Most-frequent imputation.


One-hot encoding.



12. Practical Coding Task 6


Perform feature selection inside a pipeline.


Use:


SelectKBest.



Tune:


k.



Use cross-validation to evaluate the pipeline.



13. Practical Coding Task 7


Demonstrate data leakage.


Create one experiment where scaling is performed before cross-validation.


Create another experiment using Pipeline.



Compare the methodology.


Explain why the pipeline approach is safer.



14. Practical Coding Task 8


Create a confusion matrix for the final classifier.



Explain:


True positives.


True negatives.


False positives.


False negatives.



15. Practical Coding Task 9


Experiment with classification thresholds.


Obtain predicted probabilities.



Evaluate thresholds such as:


0.30.


0.40.


0.50.


0.60.


0.70.



Record:


Precision.


Recall.


F1.



16. Practical Coding Task 10


Build a regression workflow.


Use:


DummyRegressor.


Linear Regression.



Compare:


MAE.


RMSE.


R².



17. Practical Coding Task 11


Create a regression hyperparameter search.



Tune a suitable model.



Use cross-validation.



Record:


Best parameters.


Mean validation score.


Final test metrics.



18. Practical Coding Task 12


Perform nested cross-validation on a classification problem.



Inner loop:


Hyperparameter tuning.



Outer loop:


Performance estimation.



Report:


Outer fold scores.


Mean.


Standard deviation.



19. Practical Coding Task 13


Create a complete model comparison report.



Include:


Model.


Validation strategy.


Metric.


Mean CV score.


CV standard deviation.


Training time.



20. Practical Coding Task 14


Save the complete selected pipeline using joblib.



Load it again.



Use the loaded pipeline to make predictions on new observations.



21. Practical Coding Task 15


Create an evaluation report.



Include:


Problem definition.


Dataset description.


Preprocessing.


Baseline.


Candidate models.


Cross-validation.


Hyperparameter tuning.


Final test performance.


Error analysis.



22. Debugging Practice


Identify and correct the following issues.


Problem A:


The scaler is fitted on the complete dataset before cross-validation.



Problem B:


The test set is used repeatedly to select hyperparameters.



Problem C:


A time-series dataset is randomly shuffled before validation.



Problem D:


A grouped dataset contains the same group in training and validation folds.



Problem E:


Accuracy is used as the only metric for a highly imbalanced classification problem.



23. Analytical Practice


Suppose a classifier produces:


Accuracy = 0.94.


Precision = 0.60.


Recall = 0.95.



Question:


What does this combination tell you about the classifier?



24. Analytical Practice 2


Suppose:


Model A:


Mean CV F1 = 0.84.


Std = 0.02.



Model B:


Mean CV F1 = 0.85.


Std = 0.10.



Question:


What additional information should be considered before selecting a model?



25. Analytical Practice 3


Suppose:


Baseline F1 = 0.42.


Model F1 = 0.78.



Question:


Why is the baseline comparison useful?



26. Analytical Practice 4


Suppose a grid contains:


4 values for A.


5 values for B.


3 values for C.



Question:


How many configurations exist?



27. Analytical Practice 5


Each configuration uses ten-fold cross-validation.


Question:


How many model fits are required?



28. Mini Project


Build an end-to-end machine learning evaluation system.



Project Requirements:


1. Select a real or educational dataset.


2. Define the prediction problem.


3. Separate training and test data.


4. Establish a baseline.


5. Identify numerical and categorical features.


6. Build preprocessing pipelines.


7. Compare at least three models.


8. Use appropriate cross-validation.


9. Evaluate multiple metrics.


10. Tune at least one model.


11. Evaluate on the untouched test set.


12. Generate an error analysis.


13. Save the final pipeline.



29. Required Deliverables


Submit:


Python notebook or Python project.


Dataset description.


Model comparison table.


Hyperparameter search results.


Final evaluation results.


Confusion matrix or regression error analysis.


Short conclusion.



30. Final Practice Checklist


Before considering the project complete, verify:


[ ] Problem is clearly defined.


[ ] Test set is separated.


[ ] Metric is appropriate.


[ ] Validation strategy is appropriate.


[ ] Baseline exists.


[ ] Preprocessing is inside the pipeline.


[ ] Multiple models were compared.


[ ] Hyperparameters were tuned using validation data.


[ ] Test set was not used for tuning.


[ ] Final metrics were calculated.


[ ] Errors were analyzed.


[ ] Pipeline was saved.


[ ] Experiment was documented.



31. Final Reflection


A good machine learning practitioner does not ask only:


"What score did my model achieve?"


A better question is:


"How was that score obtained, how reliable is the estimate, and how will the model behave on unseen data?"

`

};

export default practice;