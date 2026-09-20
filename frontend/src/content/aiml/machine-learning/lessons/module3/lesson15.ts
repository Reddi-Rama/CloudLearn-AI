const lesson15 = {

  id: "lesson15",

  title: "Pipelines and ColumnTransformer",

  content: `

Lesson 15

Pipelines and ColumnTransformer


1. Introduction


Real machine learning projects rarely involve only:


Raw Data


→


Model.


A realistic workflow may contain:


Missing value handling


Scaling


Categorical encoding


Feature transformation


Dimensionality reduction


Model training.


Managing these operations separately can lead to errors.


scikit-learn provides:


Pipeline


and:


ColumnTransformer


to organize preprocessing and modeling into a consistent workflow.



2. The Basic Idea of a Pipeline


A pipeline connects multiple processing steps.


For example:


Raw Data


↓

Imputation


↓

Scaling


↓

Model.


Instead of manually executing each step, the pipeline represents the complete workflow.



3. Why Pipelines Matter


Pipelines help:


Keep preprocessing consistent.


Reduce repeated code.


Prevent data leakage.


Integrate preprocessing with cross-validation.


Make model deployment easier.



4. Simple Pipeline


Python


from sklearn.pipeline import Pipeline


from sklearn.impute import SimpleImputer


from sklearn.preprocessing import StandardScaler


from sklearn.linear_model import LogisticRegression


pipeline = Pipeline([

    (
        "imputer",
        SimpleImputer(
            strategy="median"
        )
    ),

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        LogisticRegression(
            max_iter=2000
        )
    )

])



5. Pipeline Steps


The pipeline contains named steps:


imputer


scaler


model.


Each step has a purpose.



6. Fitting the Pipeline


Python


pipeline.fit(
    X_train,
    y_train
)


The pipeline learns the required preprocessing parameters from the training data and then fits the final estimator.



7. Prediction


Python


predictions = pipeline.predict(
    X_test
)


The same learned preprocessing is automatically applied to:


X_test.


Then the model generates predictions.



8. Why This Is Safer


Without a pipeline, a developer may accidentally:


Fit the scaler on test data.


Fit an imputer on the complete dataset.


Apply transformations inconsistently.


A pipeline reduces these risks.



9. Pipeline Sequence


Conceptually:


X


→


Imputer


→


Scaler


→


Model.


If:


X_train


is provided to:


fit,


each transformation learns its parameters from training data.



10. Transformations vs Estimator


Most intermediate pipeline steps must provide:


fit


and:


transform.


The final step is generally an estimator that provides:


fit.


It may also provide:


predict.



11. Example


Python


pipeline.fit(
    X_train,
    y_train
)


Internally:


Imputer.fit


→


Imputer.transform


→


Scaler.fit


→


Scaler.transform


→


Model.fit.



12. Prediction Flow


During prediction:


X_test


→


Imputer.transform


→


Scaler.transform


→


Model.predict.



13. ColumnTransformer


Real datasets often contain both:


Numerical features


and:


Categorical features.


These feature groups usually require different preprocessing.


ColumnTransformer allows different transformations to be applied to different columns.



14. Example Dataset


Suppose:


Numerical:


age


income


Categorical:


city


payment_method.



15. Numerical Processing


Numerical features might use:


Median Imputation


StandardScaler.



16. Categorical Processing


Categorical features might use:


Most Frequent Imputation


OneHotEncoder.



17. Create Numeric Pipeline


Python


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



18. Create Categorical Pipeline


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



19. ColumnTransformer


Python


from sklearn.compose import ColumnTransformer


numeric_features = [
    "age",
    "income"
]


categorical_features = [
    "city",
    "payment_method"
]


preprocessor = ColumnTransformer([

    (
        "numeric",
        numeric_pipeline,
        numeric_features
    ),

    (
        "categorical",
        categorical_pipeline,
        categorical_features
    )

])



20. What ColumnTransformer Does


It takes the input dataset and:


Selects numerical columns.


Applies numerical preprocessing.


Selects categorical columns.


Applies categorical preprocessing.


Then combines the resulting feature representations.



21. Complete Model Pipeline


Python


from sklearn.ensemble import RandomForestClassifier


model = Pipeline([

    (
        "preprocessor",
        preprocessor
    ),

    (
        "classifier",
        RandomForestClassifier(
            n_estimators=200,
            random_state=42
        )
    )

])



22. Fit the Complete Workflow


Python


model.fit(
    X_train,
    y_train
)


All preprocessing is learned from the training data.



23. Predict


Python


predictions = model.predict(
    X_test
)


No manual preprocessing of X_test is required.



24. Evaluate


Python


score = model.score(
    X_test,
    y_test
)


print(
    "Accuracy:",
    score
)



25. Why This Design Is Powerful


The complete workflow becomes one object:


Input


→


Preprocessing


→


Model.


This makes experimentation and deployment much easier.



26. Feature Names


After preprocessing, the number of features may increase because of one-hot encoding.


For example:


City:


Mumbai


Delhi


Chennai.


This can become:


city_Mumbai


city_Delhi


city_Chennai.



27. Inspect Transformed Feature Names


Python


feature_names = (
    model
    .named_steps[
        "preprocessor"
    ]
    .get_feature_names_out()
)


print(
    feature_names
)



28. Access Pipeline Steps


Python


print(
    model.named_steps
)


This allows us to inspect the individual components.



29. Access the Preprocessor


Python


preprocessor_fitted = (
    model.named_steps[
        "preprocessor"
    ]
)


The fitted preprocessor can then be inspected or used as needed.



30. Hyperparameter Tuning


Pipeline parameters can be tuned using:


GridSearchCV


or:


RandomizedSearchCV.



31. Parameter Names


Pipeline parameters use:


step_name__parameter_name.


For example:


classifier__n_estimators.



32. Grid Search Example


Python


from sklearn.model_selection import GridSearchCV


param_grid = {

    "classifier__n_estimators": [
        100,
        200
    ],

    "classifier__max_depth": [
        None,
        10,
        20
    ]

}


search = GridSearchCV(

    model,

    param_grid,

    cv=5,

    scoring="accuracy"

)


search.fit(
    X_train,
    y_train
)



33. Best Parameters


Python


print(
    search.best_params_
)



34. Why Pipeline + Grid Search Matters


Without a pipeline, preprocessing can accidentally occur outside cross-validation.


With a pipeline:


Each training fold learns its own preprocessing parameters.


This produces a more reliable evaluation.



35. Cross-Validation


Suppose:


5-fold cross-validation.


For each fold:


Training portion


→


Fit preprocessing


→


Train model


→


Validation portion


→


Transform using training preprocessing


→


Evaluate.



36. Preventing Leakage


This is one of the most important benefits of pipelines.


Any learned transformation should be fitted using only the training portion available at that stage.



37. Pipeline with PCA


PCA can also be included.


Python


from sklearn.decomposition import PCA


pipeline = Pipeline([

    (
        "scaler",
        StandardScaler()
    ),

    (
        "pca",
        PCA(
            n_components=0.95
        )
    ),

    (
        "model",
        LogisticRegression(
            max_iter=2000
        )
    )

])



38. Pipeline with Feature Selection


Feature selection can also be included.


Example:


Imputation


→


Scaling


→


Feature Selection


→


Model.



39. Pipeline with Different Models


The same preprocessor can be combined with:


Logistic Regression


Random Forest


SVM


KNN.


This makes model comparison easier.



40. Reusing the Preprocessor


Suppose a project contains:


Numerical features


Categorical features.


The same preprocessing logic can be reused across several candidate models.



41. Example Model Comparison


Python


from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier


logistic_model = Pipeline([

    (
        "preprocessor",
        preprocessor
    ),

    (
        "model",
        LogisticRegression(
            max_iter=2000
        )
    )

])


forest_model = Pipeline([

    (
        "preprocessor",
        preprocessor
    ),

    (
        "model",
        RandomForestClassifier(
            n_estimators=200,
            random_state=42
        )
    )

])



42. Why Consistent Preprocessing Matters


If one model receives:


Scaled numerical data


and another receives:


Raw numerical data,


the comparison may not be fair when the algorithms have different preprocessing requirements.


A shared preprocessing strategy makes experimentation more controlled.



43. Pipeline for Regression


Pipelines are not limited to classification.


Example:


Python


from sklearn.linear_model import Ridge


regression_pipeline = Pipeline([

    (
        "preprocessor",
        preprocessor
    ),

    (
        "model",
        Ridge()
    )

])



44. Pipeline for Clustering


Pipelines can also be useful for preprocessing before some unsupervised algorithms.


For example:


Scaling


→


PCA.


Then the transformed data can be passed to a clustering algorithm.



45. Transforming Data


If the final estimator does not provide the desired transformation interface, inspect the pipeline steps individually.


For example, the preprocessor can be used to transform data before applying another analysis.



46. Saving a Pipeline


A trained pipeline can be serialized so that the same preprocessing and model are reused later.


Python


import joblib


joblib.dump(
    model,
    "model_pipeline.joblib"
)



47. Loading a Pipeline


Python


loaded_model = joblib.load(
    "model_pipeline.joblib"
)


predictions = loaded_model.predict(
    X_new
)



48. Why Saving the Pipeline Helps


Without the pipeline, you might need to separately save:


Imputer


Scaler


Encoder


Model.


Saving them together helps ensure the same preprocessing is applied during inference.



49. Production Workflow


Training:


Raw Data


→


Pipeline.fit


→


Saved Pipeline.


Prediction:


New Data


→


Saved Pipeline.predict.


The same preprocessing logic is reused.



50. Experiment


Create a mixed dataset containing:


Numerical:


age


income.


Categorical:


city


payment.


Build:


Numeric Pipeline


Categorical Pipeline


ColumnTransformer


Classifier Pipeline.



51. Experiment: Compare Models


Use the same preprocessor with:


Logistic Regression


Random Forest.


Evaluate both using cross-validation.



52. Experiment: Hyperparameters


Use GridSearchCV to tune:


Classifier parameters.


Compare the resulting cross-validation scores.



53. Experiment: PCA Pipeline


Add:


StandardScaler


PCA


Classifier.


Compare:


Without PCA.


With PCA.



54. Common Mistakes


Mistake 1:


Preprocessing outside cross-validation.


Mistake 2:


Fitting transformations on the complete dataset.


Mistake 3:


Applying different preprocessing during prediction.


Mistake 4:


Forgetting step names in hyperparameter search.


Mistake 5:


Using the wrong columns in ColumnTransformer.


Mistake 6:


Saving only the model but not the preprocessing.



55. Practice


1. What is a Pipeline?


2. Why are pipelines useful?


3. What is ColumnTransformer?


4. Why do numerical and categorical columns need different preprocessing?


5. What does handle_unknown="ignore" do?


6. What is data leakage?


7. How does GridSearchCV work with a pipeline?


8. What does step__parameter mean?


9. Why should preprocessing be inside cross-validation?



56. Quick Check


Question 1


What is the purpose of Pipeline?


Answer


To connect preprocessing and modeling steps into a consistent workflow.


Question 2


What is ColumnTransformer used for?


Answer


To apply different transformations to different groups of columns.


Question 3


Why use a pipeline during cross-validation?


Answer


To ensure each fold learns preprocessing only from its training portion.


Question 4


How do you refer to a pipeline parameter in GridSearchCV?


Answer


Using the step and parameter separated by double underscores.


Question 5


Why save the entire pipeline?


Answer


So the same preprocessing and model are applied consistently during inference.



57. Summary


Pipeline connects preprocessing and modeling steps.


ColumnTransformer applies different transformations to different columns.


Together they provide a powerful way to build reproducible machine learning workflows.


Pipelines help prevent data leakage.


They integrate naturally with cross-validation and hyperparameter tuning.


They can contain:


Imputation


Scaling


Encoding


PCA


Feature Selection


Models.


Saving the complete pipeline helps preserve preprocessing during deployment.



58. Extended Study


A pipeline can be viewed mathematically as a composition of transformations:


f(x)


=


model(
    transform(
        x
    )
).


For example:


f(x)


=


classifier(
    PCA(
        StandardScaler(
            x
        )
    )
).


With ColumnTransformer, different subsets of features can follow different transformation paths before being combined into the final representation.



59. Reflection


Before building a machine learning workflow, ask:


Which columns are numerical?


Which are categorical?


Which features contain missing values?


Which transformations should be learned?


Could preprocessing leak information?


Will the same transformations be used during deployment?


Can everything be represented as one pipeline?


Should hyperparameters be tuned through cross-validation?


Can the complete pipeline be saved?

`

};

export default lesson15;