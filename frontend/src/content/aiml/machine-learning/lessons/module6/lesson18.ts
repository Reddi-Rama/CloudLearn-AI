const lesson18 = {

  id: "lesson18",

  title: "Building End-to-End Text ML Pipelines",

  content: `

Lesson 18

Building End-to-End Text ML Pipelines


1. Introduction


A real text machine learning system is more than a trained classifier.


It usually contains several stages:


Raw text.


Preprocessing.


Feature extraction.


Model training.


Evaluation.


Prediction.



2. Why Pipelines Matter


When these stages are managed separately, it becomes easier to:


Accidentally leak information.


Apply inconsistent preprocessing.


Forget a transformation.


Deploy different logic from the training logic.



3. Pipeline Concept


A machine learning pipeline connects multiple processing steps into one workflow.



4. Basic Structure


Raw text


↓


TF-IDF


↓


Classifier


↓


Prediction.



5. scikit-learn Pipeline


Python


from sklearn.pipeline import Pipeline



6. Example


Python


from sklearn.feature_extraction.text import TfidfVectorizer


from sklearn.linear_model import LogisticRegression



7. Build Pipeline


Python


model = Pipeline([

    (

        "tfidf",

        TfidfVectorizer(

            stop_words="english"

        )

    ),

    (

        "classifier",

        LogisticRegression(

            max_iter=1000

        )

    )

])



8. Fit


Python


model.fit(

    X_train,

    y_train

)



9. Predict


Python


predictions = model.predict(

    X_test

)



10. Why This Is Useful


The vectorizer and classifier become part of one object.



11. Cross-Validation


Pipelines are especially useful with cross-validation.



12. Important Principle


The vectorizer should be fitted separately inside each training fold rather than using information from the complete dataset.



13. Cross-Validation Example


Python


from sklearn.model_selection import (

    cross_validate

)



14. Evaluate


Python


results = cross_validate(

    model,

    X_train,

    y_train,

    cv=5,

    scoring="f1_macro"

)



15. Multiple Metrics


Python


results = cross_validate(

    model,

    X_train,

    y_train,

    cv=5,

    scoring=[

        "accuracy",

        "precision_macro",

        "recall_macro",

        "f1_macro"

    ]

)



16. Preprocessing


Text preprocessing can also be included in the pipeline.



17. Example


A custom preprocessing transformer may:


Normalize text.


Remove selected patterns.


Create normalized text.



18. Custom Transformer


Python


from sklearn.base import (

    BaseEstimator,

    TransformerMixin

)



19. Example


Python


class TextCleaner(

    BaseEstimator,

    TransformerMixin

):

    def fit(

        self,

        X,

        y=None

    ):

        return self



20. Transform


Python


    def transform(self, X):

        return [

            text.lower()

            for text in X

        ]



21. Pipeline


Python


model = Pipeline([

    (

        "cleaner",

        TextCleaner()

    ),

    (

        "tfidf",

        TfidfVectorizer()

    ),

    (

        "classifier",

        LogisticRegression(

            max_iter=1000

        )

    )

])



22. Important Warning


Custom preprocessing should be deterministic and carefully tested.



23. Hyperparameter Tuning


Pipeline parameters can be tuned using:


GridSearchCV.


RandomizedSearchCV.



24. Import


Python


from sklearn.model_selection import (

    GridSearchCV

)



25. Parameter Grid


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



26. Grid Search


Python


search = GridSearchCV(

    model,

    param_grid,

    cv=5,

    scoring="f1_macro",

    n_jobs=-1

)



27. Fit


Python


search.fit(

    X_train,

    y_train

)



28. Best Parameters


Python


print(

    search.best_params_

)



29. Best Score


Python


print(

    search.best_score_

)



30. Final Evaluation


Python


test_predictions = search.predict(

    X_test

)



31. Important Principle


Do not select the final model using the test set.



32. Test Set


The test set should be used after model development is complete.



33. Classification Report


Python


from sklearn.metrics import (

    classification_report

)



34. Evaluate


Python


print(

    classification_report(

        y_test,

        test_predictions

    )

)



35. Confusion Matrix


Python


from sklearn.metrics import (

    confusion_matrix

)



36. Calculate


Python


cm = confusion_matrix(

    y_test,

    test_predictions

)



37. Pipeline with Class Weights


Python


classifier = LogisticRegression(

    class_weight="balanced",

    max_iter=1000

)



38. Pipeline


Python


model = Pipeline([

    (

        "tfidf",

        TfidfVectorizer()

    ),

    (

        "classifier",

        classifier

    )

])



39. Combining Text and Metadata


Real datasets may contain both:


Text.


Structured features.



40. Example


Text:


Customer support message.



Metadata:


Priority.


Customer type.


Channel.



41. Challenge


Text and numerical/categorical features require different preprocessing.



42. ColumnTransformer


scikit-learn provides:


ColumnTransformer.



43. Example Concept


Text column


→


TF-IDF.



44. Numeric columns


→


Scaling or imputation.



45. Categorical columns


→


One-hot encoding.



46. Structure


Text


→


TfidfVectorizer.



Numeric


→


StandardScaler.



Categorical


→


OneHotEncoder.



47. Example


Python


from sklearn.compose import (

    ColumnTransformer

)


from sklearn.preprocessing import (

    OneHotEncoder,

    StandardScaler

)



48. Conceptual Preprocessor


Python


preprocessor = ColumnTransformer([

    (

        "text",

        TfidfVectorizer(),

        "text"

    ),

    (

        "numeric",

        StandardScaler(),

        ["age"]

    ),

    (

        "category",

        OneHotEncoder(

            handle_unknown="ignore"

        ),

        ["channel"]

    )

])



49. Final Model


Python


from sklearn.pipeline import Pipeline



50. Pipeline


Python


model = Pipeline([

    (

        "preprocessor",

        preprocessor

    ),

    (

        "classifier",

        LogisticRegression(

            max_iter=1000

        )

    )

])



51. Benefit


The complete preprocessing and model logic can be trained together.



52. Unknown Categories


Production data may contain categories not seen during training.



53. Solution


OneHotEncoder can be configured with:


handle_unknown="ignore".



54. Important Principle


Production input is rarely identical to training input.



55. Serialization


A trained pipeline can be saved for later use.



56. Example


Python


import joblib



57. Save


Python


joblib.dump(

    model,

    "text_model.joblib"

)



58. Load


Python


loaded_model = joblib.load(

    "text_model.joblib"

)



59. Prediction


Python


prediction = loaded_model.predict(

    [

        "The service was excellent"

    ]

)



60. Important Warning


The saved model must be used with input data that follows the expected schema.



61. Reproducibility


Record:


Dataset version.


Random seeds.


Library versions.


Hyperparameters.


Evaluation metrics.



62. Example


Python


import sklearn


print(

    sklearn.__version__

)



63. Model Card


A production model should have documentation describing:


Purpose.


Training data.


Evaluation data.


Metrics.


Limitations.


Known risks.



64. Error Analysis


After evaluation, inspect incorrect predictions.



65. Example


Python


errors = X_test[

    y_test != test_predictions

]



66. Better Analysis


Store:


Text.


True label.


Predicted label.


Prediction confidence.



67. Error Categories


Look for patterns such as:


Sarcasm.


Negation.


Rare words.


Spelling errors.


Ambiguous language.


Domain-specific terminology.



68. Monitoring


After deployment, performance can change as text changes.



69. Data Drift


The distribution of incoming text may change.



70. Example


A support system trained on one year's terminology may encounter new product names later.



71. Concept Drift


The relationship between text and target labels may also change.



72. Monitoring Signals


Possible signals include:


Input volume.


Text length.


Vocabulary changes.


Class distribution.


Prediction distribution.


Feedback labels.



73. Retraining


A model may need retraining when performance degrades or the underlying data changes.



74. End-to-End Workflow


Collect data.


↓


Validate.


↓


Split.


↓


Build preprocessing.


↓


Vectorize.


↓


Train.


↓


Cross-validate.


↓


Tune.


↓


Evaluate.


↓


Analyze errors.


↓


Serialize.


↓


Deploy.


↓


Monitor.



75. Experiment 1


Build a TF-IDF + Logistic Regression pipeline.



76. Experiment 2


Add:


n-grams.



77. Experiment 3


Tune:


C.



78. Experiment 4


Tune:


min_df.



79. Experiment 5


Compare:


Logistic Regression.


LinearSVC.


Naive Bayes.



80. Experiment 6


Add class weighting and compare minority-class metrics.



81. Experiment 7


Create a combined text + metadata pipeline.



82. Experiment 8


Save and reload the complete pipeline.



83. Verify


Predictions before and after serialization should match for the same input.



84. Common Mistakes


Mistake 1:


Fitting TF-IDF before cross-validation.


Mistake 2:


Using test data for hyperparameter tuning.


Mistake 3:


Saving only the classifier and forgetting the vectorizer.


Mistake 4:


Using inconsistent preprocessing during deployment.


Mistake 5:


Ignoring unknown categories.


Mistake 6:


Failing to document the training dataset.



85. Practice


1. What is a machine learning pipeline?


2. Why should vectorization be part of the pipeline?


3. How does Pipeline help prevent leakage?


4. What is ColumnTransformer?


5. Why is serialization useful?


6. What information should be documented for a production model?


7. What is data drift?



86. Quick Check


Question 1


Why is a Pipeline useful during cross-validation?


Answer:


It ensures learned preprocessing steps are fitted within each training fold.



Question 2


Why should the test set not be used for GridSearchCV?


Answer:


Using it for model selection would make the final evaluation optimistic.



Question 3


Why save the vectorizer together with the classifier?


Answer:


The production system must apply the same learned feature transformation used during training.



87. Summary


An end-to-end text ML pipeline combines:


Preprocessing.


Vectorization.


Model training.


Evaluation.


Prediction.



A production-oriented workflow adds:


Hyperparameter tuning.


Serialization.


Documentation.


Error analysis.


Monitoring.



88. Extended Study


The most important principle is consistency.


Training:


Raw input


→


preprocessing


→


features


→


model.



Production:


New input


→


the same preprocessing


→


the same feature representation


→


the same model.



89. Final Reflection


A model is only one component of a machine learning system.


Reliable text ML requires the entire workflow to be reproducible, testable, and consistent from raw input to production prediction.

`

};

export default lesson18;