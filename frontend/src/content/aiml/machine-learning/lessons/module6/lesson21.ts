const lesson21 = {

  id: "lesson21",

  title: "Complete Text Machine Learning Workflow",

  content: `

Lesson 21

Complete Text Machine Learning Workflow


1. Introduction


This lesson brings together the major concepts covered throughout the Text Machine Learning module.


The objective is to understand how to approach a text ML problem from raw data through evaluation and production.



2. Complete Workflow


Problem Definition


↓


Data Collection


↓


Data Exploration


↓


Text Preparation


↓


Train-Test Split


↓


Feature Engineering


↓


Model Training


↓


Evaluation


↓


Tuning


↓


Error Analysis


↓


Deployment


↓


Monitoring



3. Step 1: Define the Problem


Before writing code, clearly define:


Input.


Output.


Prediction task.


Success metric.



4. Example


Problem:


Classify customer messages into support categories.



5. Input


Customer message.



6. Output


Category such as:


billing.


technical.


account.



7. Machine Learning Task


Multiclass text classification.



8. Success Metric


Possible metrics:


Macro F1.


Per-class recall.



9. Why Define the Metric First?


The metric influences:


Model selection.


Thresholds.


Evaluation.


Business decisions.



10. Step 2: Collect Data


Collect representative examples.



11. Example


Each record may contain:


message.


category.



12. Important Questions


Where did the data come from?


How was it labeled?


Does it represent the intended users?



13. Step 3: Explore the Dataset


Inspect:


Rows.


Columns.


Missing values.


Duplicates.


Class distribution.


Text lengths.



14. Example


Python


import pandas as pd


df = pd.read_csv(

    "support_tickets.csv"

)



15. Shape


Python


print(df.shape)



16. Missing Values


Python


print(

    df.isna().sum()

)



17. Labels


Python


print(

    df["category"].value_counts()

)



18. Text Length


Python


df["length"] = (

    df["message"]

    .str.len()

)



19. Step 4: Clean the Dataset


Handle:


Missing values.


Duplicates.


Invalid labels.



20. Important Principle


Do not perform unnecessary preprocessing just because it is common in text tutorials.



21. Step 5: Split the Data


Separate training and test data.



22. Example


Python


from sklearn.model_selection import (

    train_test_split

)



23. Split


Python


X_train, X_test, y_train, y_test = (

    train_test_split(

        df["message"],

        df["category"],

        test_size=0.2,

        random_state=42,

        stratify=df["category"]

    )

)



24. Important Principle


Keep the test set untouched during model development.



25. Step 6: Build a Baseline


A baseline provides a reference point.



26. Example


DummyClassifier.



27. Why?


A complex model should demonstrate value beyond a simple baseline.



28. Step 7: Choose Representation


Possible text representations include:


Bag-of-Words.


TF-IDF.


Word n-grams.


Character n-grams.


Embeddings.



29. Classical Starting Point


TF-IDF is often a useful baseline for classical text classification.



30. Step 8: Choose a Model


Possible models include:


Naive Bayes.


Logistic Regression.


Linear SVM.



31. Baseline Pipeline


Python


from sklearn.pipeline import Pipeline


from sklearn.feature_extraction.text import TfidfVectorizer


from sklearn.linear_model import LogisticRegression



32. Pipeline


Python


model = Pipeline([

    (

        "tfidf",

        TfidfVectorizer(

            ngram_range=(1, 2),

            min_df=2

        )

    ),

    (

        "classifier",

        LogisticRegression(

            max_iter=1000

        )

    )

])



33. Step 9: Train


Python


model.fit(

    X_train,

    y_train

)



34. Step 10: Evaluate


Python


predictions = model.predict(

    X_test

)



35. Classification Report


Python


from sklearn.metrics import (

    classification_report

)



36. Print


Python


print(

    classification_report(

        y_test,

        predictions

    )

)



37. Confusion Matrix


Python


from sklearn.metrics import (

    confusion_matrix

)



38. Calculate


Python


cm = confusion_matrix(

    y_test,

    predictions

)



39. Step 11: Cross-Validation


Instead of relying on one training split, use cross-validation on the training data.



40. Example


Python


from sklearn.model_selection import (

    StratifiedKFold,

    cross_validate

)



41. Cross-Validation


Python


cv = StratifiedKFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)



42. Evaluate


Python


results = cross_validate(

    model,

    X_train,

    y_train,

    cv=cv,

    scoring="f1_macro"

)



43. Mean Score


Python


print(

    results["test_score"].mean()

)



44. Step 12: Tune the Model


Tune parameters such as:


ngram_range.


min_df.


max_features.


regularization strength.



45. Grid Search


Python


from sklearn.model_selection import (

    GridSearchCV

)



46. Parameter Grid


Python


param_grid = {

    "tfidf__ngram_range": [

        (1, 1),

        (1, 2)

    ],

    "tfidf__min_df": [

        1,

        2,

        5

    ],

    "classifier__C": [

        0.1,

        1,

        10

    ]

}



47. Search


Python


search = GridSearchCV(

    model,

    param_grid,

    cv=cv,

    scoring="f1_macro",

    n_jobs=-1

)



48. Fit


Python


search.fit(

    X_train,

    y_train

)



49. Best Parameters


Python


print(

    search.best_params_

)



50. Step 13: Compare Models


Compare multiple algorithms using the same evaluation protocol.



51. Example


Naive Bayes.


Logistic Regression.


LinearSVC.



52. Important Principle


Do not change the dataset split or metric between models just to obtain a preferred result.



53. Step 14: Error Analysis


Find incorrect predictions.



54. Example


Python


final_predictions = search.predict(

    X_test

)



55. Inspect Errors


Python


for text, actual, predicted in zip(

    X_test,

    y_test,

    final_predictions

):

    if actual != predicted:

        print("TEXT:", text)

        print("TRUE:", actual)

        print("PRED:", predicted)

        print()



56. Look for Patterns


Possible issues:


Ambiguous text.


Rare terms.


Spelling errors.


Mixed topics.


Negation.


Short messages.



57. Step 15: Improve Representation


Depending on the errors, consider:


Bigrams.


Character n-grams.


Additional metadata.


Better normalization.



58. Step 16: Re-Evaluate


Every change should be evaluated using the same reliable procedure.



59. Step 17: Final Test


After model selection is complete, evaluate once on the untouched test set.



60. Example


Python


best_model = search.best_estimator_



61. Prediction


Python


test_predictions = best_model.predict(

    X_test

)



62. Evaluation


Python


print(

    classification_report(

        y_test,

        test_predictions

    )

)



63. Step 18: Save Model


Python


import joblib



64. Save


Python


joblib.dump(

    best_model,

    "text_classifier.joblib"

)



65. Step 19: Load Model


Python


loaded_model = joblib.load(

    "text_classifier.joblib"

)



66. Step 20: Production Prediction


Python


new_messages = [

    "I cannot access my account"

]



67. Predict


Python


prediction = loaded_model.predict(

    new_messages

)



68. Step 21: Monitor


After deployment, monitor:


Input distribution.


Prediction distribution.


Latency.


Error rate.


Model performance when labels become available.



69. Step 22: Feedback


Collect appropriate feedback from real-world use.



70. Example


A support agent may correct a model's predicted category.



71. Use Feedback


Validated feedback can become future training data.



72. Important Warning


Feedback should be reviewed before automatically adding it to the training dataset.



73. Full System


Raw text


↓


Validation


↓


Cleaning


↓


Split


↓


TF-IDF


↓


Classifier


↓


Cross-validation


↓


Hyperparameter tuning


↓


Final evaluation


↓


Error analysis


↓


Serialization


↓


Deployment


↓


Monitoring


↓


Feedback.



74. Mathematical View


A text ML system can be viewed as a composition of functions.



75. Text Representation


φ(x)



maps raw text x into a feature vector.



76. Model


f(φ(x))



maps the feature representation to a prediction.



77. Complete Prediction


ŷ


=


f(φ(x)).



78. Important Idea


The model depends on both:


The representation.


and:


The learned prediction function.



79. Evaluation


Suppose the evaluation metric is:


F1.



80. Model Selection


Choose the model and configuration using training/validation data according to the predefined evaluation procedure.



81. Final Test


The test set estimates performance on unseen data after development is complete.



82. Error Analysis Loop


Prediction


↓


Incorrect example


↓


Understand error


↓


Form hypothesis


↓


Modify data/features/model


↓


Re-evaluate.



83. Why This Loop Matters


Model improvement should be driven by observed evidence rather than random parameter changes.



84. Common Mistakes


Mistake 1:


Starting with a complex model before establishing a baseline.


Mistake 2:


Using the test set repeatedly.


Mistake 3:


Fitting vectorizers on all data.


Mistake 4:


Ignoring class imbalance.


Mistake 5:


Changing evaluation metrics during experimentation.


Mistake 6:


Ignoring error analysis.


Mistake 7:


Saving only the classifier.


Mistake 8:


Deploying without monitoring.



85. Practice


1. What should be defined before training a model?


2. Why create a baseline?


3. Why should the test set remain untouched?


4. What is cross-validation?


5. Why use a Pipeline?


6. What is hyperparameter tuning?


7. What is error analysis?


8. Why save the complete pipeline?


9. What should be monitored after deployment?



86. Quick Check


Question 1


What is the first major step in a text ML project?


Answer:


Define the problem, including the input, output, prediction objective, and evaluation criteria.



Question 2


Why should a baseline be created?


Answer:


It provides a reference point against which more complex approaches can be compared.



Question 3


When should the final test set be used?


Answer:


After model development and selection are complete.



87. Summary


A complete text machine learning workflow connects:


Problem definition.


Data.


Preprocessing.


Representation.


Modeling.


Evaluation.


Tuning.


Error analysis.


Deployment.


Monitoring.



88. Final Checklist


Before training:


Define objective.


Inspect data.


Check labels.



During development:


Use training data for model selection.


Use appropriate cross-validation.


Compare baselines.



Before deployment:


Evaluate on untouched test data.


Inspect errors.


Save the complete pipeline.



After deployment:


Monitor.


Collect validated feedback.


Detect drift.


Retrain when necessary.



89. Extended Study


The complete workflow is iterative.


A practical ML project rarely moves perfectly from:


Step 1


to:


Step 10.



Instead, teams repeatedly move between:


Data.


Features.


Models.


Evaluation.


Error analysis.



90. Final Reflection


The most important skill in text machine learning is not memorizing individual algorithms.


It is learning how to build a reliable process:


Understand the problem.


Understand the data.


Represent the text.


Build a baseline.


Evaluate correctly.


Analyze mistakes.


Improve systematically.


Deploy carefully.


Monitor continuously.



91. Module Connection


This lesson connects the concepts studied throughout Module 6:


Text representation.


Tokenization.


Bag-of-Words.


TF-IDF.


N-grams.


Naive Bayes.


Linear models.


Sentiment analysis.


Topic modeling.


Similarity.


Clustering.


Real-world datasets.


Imbalanced classification.


Pipelines.


Interpretation.


Production.



92. Final Module Takeaway


Text machine learning transforms unstructured language into representations that algorithms can analyze.


The strongest workflows do not stop at:


"Train a model."


They continue through:


Evaluation.


Interpretation.


Deployment.


Monitoring.


And continuous improvement.

`

};

export default lesson21;