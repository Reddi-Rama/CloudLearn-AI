const project = {

  id: "project",

  title: "Module 2 Project: Supervised Learning Model Comparison System",

  content: `

Module 2 Project

Supervised Learning Model Comparison System


Project Type:

End-to-End Machine Learning Project


Difficulty:

Intermediate


Domain:

Supervised Machine Learning


Main Goal:


Build a complete machine learning system that compares multiple supervised learning algorithms on the same dataset and identifies how model choice, preprocessing, hyperparameters, and evaluation metrics affect performance.



1. Project Overview


In this project, you will build an end-to-end supervised learning workflow.


The project will demonstrate the complete process:


Dataset


↓


Data Understanding


↓


Data Preparation


↓


Train/Test Split


↓


Baseline


↓


Multiple Models


↓


Cross-Validation


↓


Hyperparameter Tuning


↓


Final Evaluation


↓


Error Analysis


↓


Conclusion.



2. Problem Statement


Create a machine learning system that predicts a target variable from a real-world dataset.


The system must compare multiple supervised learning algorithms rather than relying on only one model.


The final project should explain:


Which models were tested.


How the data was prepared.


Which metrics were used.


How cross-validation was performed.


How hyperparameters were selected.


How the final model was evaluated.


What types of errors were observed.



3. Recommended Dataset


Use a classification dataset.


Recommended option:


Breast Cancer Wisconsin dataset available through scikit-learn.


It contains numerical features and a binary classification target.


You may also use another suitable public dataset if your instructor permits it.



4. Project Objectives


By completing this project, you should be able to:


Understand a real supervised learning dataset.


Separate features and target.


Perform exploratory analysis.


Prepare training and testing data.


Create a baseline model.


Train multiple supervised learning algorithms.


Use pipelines.


Perform cross-validation.


Tune hyperparameters.


Evaluate classification performance.


Analyze incorrect predictions.


Compare model behaviour.



5. Algorithms


Implement at least:


1. Logistic Regression


2. k-Nearest Neighbors


3. Decision Tree


4. Random Forest


5. Support Vector Machine


6. Gradient Boosting.


Optional:


Neural Network.



6. Project Structure


A clean project can use:


supervised-learning-project/


    data/


    notebooks/


    src/


        data_preparation.py


        models.py


        evaluation.py


        experiments.py


    results/


    README.md


    requirements.txt


    main.py



7. Required Libraries


Python


pandas


numpy


matplotlib


scikit-learn


Optional:


seaborn



8. Installation


Python


pip install numpy pandas matplotlib scikit-learn seaborn


Use a virtual environment when appropriate.



9. Step 1: Import Libraries


Python


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


from sklearn.datasets import load_breast_cancer


from sklearn.model_selection import (
    train_test_split,
    cross_val_score
)


from sklearn.pipeline import make_pipeline


from sklearn.preprocessing import StandardScaler


from sklearn.linear_model import LogisticRegression


from sklearn.neighbors import KNeighborsClassifier


from sklearn.tree import DecisionTreeClassifier


from sklearn.ensemble import (
    RandomForestClassifier,
    GradientBoostingClassifier
)


from sklearn.svm import SVC


from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    classification_report
)



10. Step 2: Load the Dataset


Python


data = load_breast_cancer()


X = pd.DataFrame(
    data.data,
    columns=data.feature_names
)


y = pd.Series(
    data.target,
    name="target"
)


print(
    X.head()
)


print(
    y.head()
)



11. Step 3: Understand the Dataset


Python


print(
    "Shape:",
    X.shape
)


print(
    "Number of features:",
    X.shape[1]
)


print(
    "Missing values:",
    X.isnull().sum().sum()
)


print(
    "Class distribution:"
)


print(
    y.value_counts()
)


This step establishes the basic structure of the dataset.



12. Step 4: Exploratory Analysis


Investigate:


Number of observations.


Number of features.


Feature ranges.


Target distribution.


Missing values.


Potential outliers.


Feature correlations.


Example:


Python


print(
    X.describe()
)


print(
    y.value_counts(normalize=True)
)



13. Step 5: Train/Test Split


Python


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.20,
    random_state=42,
    stratify=y
)


The test set should remain isolated until final evaluation.



14. Step 6: Build a Baseline


A simple baseline establishes a reference.


For example:


Python


from sklearn.dummy import DummyClassifier


baseline = DummyClassifier(
    strategy="most_frequent"
)


baseline.fit(
    X_train,
    y_train
)


baseline_predictions = baseline.predict(
    X_test
)


print(
    "Baseline accuracy:",
    accuracy_score(
        y_test,
        baseline_predictions
    )
)


The purpose of the baseline is comparison.



15. Step 7: Logistic Regression


Because the features have different numerical scales, use a pipeline.


Python


logistic_model = make_pipeline(
    StandardScaler(),
    LogisticRegression(
        max_iter=2000
    )
)


logistic_model.fit(
    X_train,
    y_train
)


logistic_predictions = logistic_model.predict(
    X_test
)



16. Step 8: k-Nearest Neighbors


Python


knn_model = make_pipeline(
    StandardScaler(),
    KNeighborsClassifier(
        n_neighbors=5
    )
)


knn_model.fit(
    X_train,
    y_train
)


knn_predictions = knn_model.predict(
    X_test
)



17. Step 9: Decision Tree


Python


tree_model = DecisionTreeClassifier(
    max_depth=5,
    random_state=42
)


tree_model.fit(
    X_train,
    y_train
)


tree_predictions = tree_model.predict(
    X_test
)



18. Step 10: Random Forest


Python


forest_model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)


forest_model.fit(
    X_train,
    y_train
)


forest_predictions = forest_model.predict(
    X_test
)



19. Step 11: SVM


Python


svm_model = make_pipeline(
    StandardScaler(),
    SVC(
        kernel="rbf",
        C=1.0
    )
)


svm_model.fit(
    X_train,
    y_train
)


svm_predictions = svm_model.predict(
    X_test
)



20. Step 12: Gradient Boosting


Python


boosting_model = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.05,
    max_depth=2,
    random_state=42
)


boosting_model.fit(
    X_train,
    y_train
)


boosting_predictions = boosting_model.predict(
    X_test
)



21. Step 13: Evaluation Function


Create a reusable evaluation function.


Python


def evaluate_model(
    name,
    y_true,
    predictions
):

    accuracy = accuracy_score(
        y_true,
        predictions
    )

    precision = precision_score(
        y_true,
        predictions
    )

    recall = recall_score(
        y_true,
        predictions
    )

    f1 = f1_score(
        y_true,
        predictions
    )

    return {
        "Model": name,
        "Accuracy": accuracy,
        "Precision": precision,
        "Recall": recall,
        "F1": f1
    }



22. Step 14: Compare Models


Python


results = []


results.append(
    evaluate_model(
        "Logistic Regression",
        y_test,
        logistic_predictions
    )
)


results.append(
    evaluate_model(
        "k-NN",
        y_test,
        knn_predictions
    )
)


results.append(
    evaluate_model(
        "Decision Tree",
        y_test,
        tree_predictions
    )
)


results.append(
    evaluate_model(
        "Random Forest",
        y_test,
        forest_predictions
    )
)


results.append(
    evaluate_model(
        "SVM",
        y_test,
        svm_predictions
    )
)


results.append(
    evaluate_model(
        "Gradient Boosting",
        y_test,
        boosting_predictions
    )
)


results_df = pd.DataFrame(
    results
)


print(
    results_df
)



23. Cross-Validation


Do not rely only on one train/test split when comparing models during development.


Use cross-validation on the training data.


Example:


Python


models = {

    "Logistic Regression": logistic_model,

    "k-NN": knn_model,

    "Decision Tree": tree_model,

    "Random Forest": forest_model,

    "SVM": svm_model,

    "Gradient Boosting": boosting_model

}


cv_results = []


for name, model in models.items():

    scores = cross_val_score(
        model,
        X_train,
        y_train,
        cv=5,
        scoring="f1"
    )

    cv_results.append({
        "Model": name,
        "Mean F1": scores.mean(),
        "Std F1": scores.std()
    })


cv_df = pd.DataFrame(
    cv_results
)


print(
    cv_df
)



24. Why Cross-Validation?


Cross-validation helps estimate how consistently a model performs across different training/validation partitions.


It is useful for:


Model comparison.


Hyperparameter selection.


Understanding performance variability.



25. Hyperparameter Tuning


Select one or more models for deeper tuning.


For example, Random Forest.


Python


from sklearn.model_selection import GridSearchCV


parameter_grid = {

    "n_estimators": [100, 200],

    "max_depth": [None, 5, 10],

    "min_samples_leaf": [1, 2, 5]

}


search = GridSearchCV(
    RandomForestClassifier(
        random_state=42
    ),
    parameter_grid,
    cv=5,
    scoring="f1"
)


search.fit(
    X_train,
    y_train
)


print(
    "Best parameters:",
    search.best_params_
)



26. Final Model


After selecting the model and hyperparameters:


best_model = search.best_estimator_


Do not repeatedly tune using the test set.



27. Final Test Evaluation


Python


final_predictions = best_model.predict(
    X_test
)


print(
    classification_report(
        y_test,
        final_predictions
    )
)


This is the final evaluation on the held-out test data.



28. Confusion Matrix


Python


cm = confusion_matrix(
    y_test,
    final_predictions
)


print(
    cm
)



29. Visualizing the Confusion Matrix


Python


plt.figure(
    figsize=(6, 5)
)


plt.imshow(
    cm
)


plt.title(
    "Confusion Matrix"
)


plt.xlabel(
    "Predicted Label"
)


plt.ylabel(
    "True Label"
)


plt.colorbar()


plt.show()



30. Error Analysis


Identify incorrect predictions.


Python


incorrect = (
    y_test.to_numpy()
    != final_predictions
)


print(
    "Number of incorrect predictions:",
    incorrect.sum()
)


Inspect these observations and ask:


Are the examples unusual?


Are they close to a decision boundary?


Do certain classes create more errors?



31. Feature Importance


For tree-based models:


Python


importance = pd.Series(
    best_model.feature_importances_,
    index=X.columns
)


importance = importance.sort_values(
    ascending=False
)


print(
    importance.head(10)
)



32. Important Note About Pipelines


If the selected model is a pipeline such as:


StandardScaler


→


SVM


then:


feature_importances_


may not exist.


Feature interpretation depends on the final estimator and pipeline structure.


Always inspect the model before attempting model-specific interpretation.



33. Model Comparison Visualization


Python


results_df.plot(
    x="Model",
    y=[
        "Accuracy",
        "Precision",
        "Recall",
        "F1"
    ],
    kind="bar",
    figsize=(12, 6)
)


plt.ylabel(
    "Score"
)


plt.title(
    "Supervised Learning Model Comparison"
)


plt.xticks(
    rotation=45
)


plt.tight_layout()


plt.show()



34. Project Questions


Answer these questions in the project report:


1. Which models were evaluated?


2. Why was a baseline created?


3. Which models required feature scaling?


4. Why was cross-validation used?


5. Which evaluation metrics were selected?


6. Which model performed consistently during cross-validation?


7. What happened during hyperparameter tuning?


8. How did the final model perform on the held-out test set?


9. What errors did the final model make?


10. What limitations remain?



35. Required Report Structure


Your report should contain:


1. Project Title


2. Problem Statement


3. Dataset Description


4. Dataset Statistics


5. Feature Description


6. Data Preprocessing


7. Baseline Model


8. Models Evaluated


9. Cross-Validation Strategy


10. Hyperparameter Tuning


11. Evaluation Metrics


12. Model Comparison


13. Confusion Matrix


14. Error Analysis


15. Final Evaluation


16. Limitations


17. Future Improvements


18. Conclusion.



36. Suggested Visualizations


Include useful visualizations such as:


Class Distribution


Feature Distributions


Correlation Visualization


Model Comparison


Confusion Matrix


Feature Importance


Cross-Validation Results.



37. Extension 1: Add Neural Network


Add:


MLPClassifier.


Use:


StandardScaler.


Compare its performance with the other models.



38. Extension 2: Threshold Analysis


Use a classifier that provides probabilities.


Evaluate multiple thresholds.


Compare:


Precision


Recall


F1 Score.



39. Extension 3: Model Persistence


After finalizing the model, save it using an appropriate serialization approach such as:


joblib.


Example:


Python


import joblib


joblib.dump(
    best_model,
    "supervised_model.joblib"
)


The saved model can later be loaded for inference.



40. Extension 4: Prediction Function


Create a reusable function.


Python


def predict_sample(
    model,
    sample
):

    prediction = model.predict(
        sample
    )

    return prediction



41. Extension 5: Simple Prediction Interface


Build a simple interface where a user enters feature values.


The application should:


Receive input.


Validate input.


Apply the same preprocessing.


Run the trained model.


Display the prediction.


If probability estimates are available, display them carefully as model estimates rather than guaranteed certainty.



42. Extension 6: Experiment Tracking


For each experiment record:


Model Name


Hyperparameters


Cross-Validation Score


Test Score


Training Time


Notes.


This creates a reproducible experiment history.



43. Final Deliverables


Your final project should contain:


Python source code.


Dataset or dataset-loading instructions.


README file.


requirements.txt.


Exploratory analysis.


Model comparison.


Cross-validation results.


Final evaluation.


Confusion matrix.


Error analysis.


Project report.



44. Final Learning Outcomes


After completing this project, you should be able to:


Load and understand a real dataset.


Define a supervised learning problem.


Prepare data correctly.


Create training and test sets.


Build a baseline.


Train multiple models.


Use preprocessing pipelines.


Perform cross-validation.


Tune hyperparameters.


Evaluate classification models.


Analyze errors.


Compare models systematically.


Build an end-to-end machine learning workflow.



45. Final Reflection


A successful machine learning project is not simply:


Train a model


and:


Print accuracy.


A reliable workflow requires:


Understanding the problem.


Understanding the data.


Preventing leakage.


Using appropriate preprocessing.


Choosing meaningful metrics.


Comparing models fairly.


Validating hyperparameters.


Keeping the test set isolated.


Analyzing errors.


Documenting experiments.


Thinking about deployment and monitoring.


This project brings together the supervised learning concepts covered throughout Module 2.

`

};

export default project;