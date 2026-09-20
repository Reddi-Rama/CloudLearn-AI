const lesson15 = {

  id: "lesson15",

  title: "Feature Engineering with Pipelines",

  content: `

Lesson 15

Feature Engineering with Pipelines


1. Introduction


A machine learning workflow often contains multiple preprocessing steps.


For example:


Missing-value handling.


Scaling.


Categorical encoding.


Feature creation.


Feature selection.


Model training.


Managing these steps separately can lead to errors.


A pipeline combines them into a reproducible workflow.



2. What Is a Pipeline?


A pipeline is a sequence of transformations followed by a final estimator.


Conceptually:


Input Data


→


Transformation 1


→


Transformation 2


→


Model.



3. Why Pipelines Matter


Pipelines help:


Keep preprocessing consistent.


Reduce data leakage.


Simplify training.


Simplify prediction.


Support cross-validation.



4. Simple Pipeline


Python


from sklearn.pipeline import Pipeline


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
            max_iter=2000
        )
    )

])



5. Training


Python


pipeline.fit(
    X_train,
    y_train
)



6. Prediction


Python


predictions = pipeline.predict(
    X_test
)



7. What Happens Internally?


During training:


X_train


→


StandardScaler.fit


→


StandardScaler.transform


→


LogisticRegression.fit.



8. During Prediction


X_test


→


StandardScaler.transform


→


LogisticRegression.predict.



9. Important Difference


The scaler is:


fitted


only during training.


During prediction, it is:


transformed,


not refitted.



10. Why This Prevents Leakage


The test set does not determine the scaling statistics.


The transformation learned from training data is reused.



11. Multiple Transformations


A pipeline can contain:


Feature creation.


Scaling.


Model.



12. Example


Python


pipeline = Pipeline([

    (
        "poly",
        PolynomialFeatures(
            degree=2,
            include_bias=False
        )
    ),

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        Ridge(alpha=1.0)
    )

])



13. Feature Engineering Inside Pipeline


The pipeline can automatically perform:


Polynomial expansion.


Scaling.


Regression.



14. Why This Is Useful


The same transformations are applied:


During training.


During validation.


During prediction.



15. ColumnTransformer


Real datasets often contain multiple data types.


For example:


Age.


Income.


City.


Subscription Plan.



16. Different Transformations


Numerical:


Scaling.


Categorical:


One-hot encoding.



17. ColumnTransformer


Python


from sklearn.compose import (
    ColumnTransformer
)


from sklearn.preprocessing import (
    StandardScaler,
    OneHotEncoder
)



18. Define Columns


Python


numeric_features = [

    "age",

    "income"

]


categorical_features = [

    "city",

    "plan"

]



19. Create Preprocessor


Python


preprocessor = ColumnTransformer([

    (
        "numeric",
        StandardScaler(),
        numeric_features
    ),

    (
        "categorical",
        OneHotEncoder(
            handle_unknown="ignore"
        ),
        categorical_features
    )

])



20. Combine with Model


Python


pipeline = Pipeline([

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



21. Training


Python


pipeline.fit(
    X_train,
    y_train
)



22. Prediction


Python


predictions = pipeline.predict(
    X_test
)



23. Why ColumnTransformer?


It allows different columns to receive different transformations.



24. Adding Imputation


Missing values can be handled before scaling or encoding.



25. Python


from sklearn.impute import (
    SimpleImputer
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



26. Categorical Pipeline


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



27. Complete Preprocessor


Python


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



28. Complete Model Pipeline


Python


pipeline = Pipeline([

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



29. Complete Workflow


Raw Dataset


↓

Train/Test Split


↓

Preprocessor


↓

Numerical Transformation


↓

Categorical Transformation


↓

Model


↓

Prediction.



30. Feature Engineering Pipeline


Feature engineering can be added before preprocessing.


For example:


Custom Feature Creation


→


ColumnTransformer


→


Model.



31. Custom Transformer


Python


from sklearn.base import (
    BaseEstimator,
    TransformerMixin
)


class AddRatio(

    BaseEstimator,

    TransformerMixin

):

    def __init__(
        self,
        numerator,
        denominator
    ):

        self.numerator = numerator

        self.denominator = denominator


    def fit(
        self,
        X,
        y=None
    ):

        return self


    def transform(
        self,
        X
    ):

        X = X.copy()

        X["ratio"] = (

            X[self.numerator]

            /

            X[self.denominator]

        )

        return X



32. Using the Custom Transformer


Python


pipeline = Pipeline([

    (
        "ratio",
        AddRatio(
            "income",
            "debt"
        )
    ),

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



33. Why Custom Transformers?


They allow project-specific feature engineering to become part of the same reproducible pipeline.



34. Avoiding Division Errors


A custom transformer should validate denominators before calculating ratios.



35. Improved Ratio Transformer


Python


class SafeRatio(

    BaseEstimator,

    TransformerMixin

):

    def __init__(
        self,
        numerator,
        denominator
    ):

        self.numerator = numerator

        self.denominator = denominator


    def fit(
        self,
        X,
        y=None
    ):

        return self


    def transform(
        self,
        X
    ):

        X = X.copy()

        denominator = (
            X[self.denominator]
        )

        X["ratio"] = np.where(

            denominator != 0,

            X[self.numerator]
            /
            denominator,

            np.nan

        )

        return X



36. Pipeline and Cross-Validation


Pipelines are especially important with cross-validation.


Each training fold can fit preprocessing only on its own training portion.



37. Example


Python


from sklearn.model_selection import (
    cross_val_score
)


scores = cross_val_score(

    pipeline,

    X,

    y,

    cv=5,

    scoring="accuracy"

)



38. Why This Is Better


Without a pipeline, it is easy to accidentally fit a scaler or encoder before cross-validation.


With a pipeline, each fold can apply the transformations appropriately.



39. Hyperparameter Tuning


Pipelines can be combined with:


GridSearchCV.


RandomizedSearchCV.



40. Grid Search


Python


from sklearn.model_selection import (
    GridSearchCV
)


search = GridSearchCV(

    pipeline,

    param_grid={

        "model__C": [
            0.1,
            1,
            10
        ]

    },

    cv=5

)



41. Important Naming Rule


Pipeline parameters are accessed using:


step_name__parameter_name.



42. Example


If the model step is:


model.


and the parameter is:


C.


The grid parameter is:


model__C.



43. Polynomial Pipeline Tuning


Python


pipeline = Pipeline([

    (
        "poly",
        PolynomialFeatures(
            include_bias=False
        )
    ),

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        Ridge()
    )

])


param_grid = {

    "poly__degree": [
        1,
        2,
        3
    ],

    "model__alpha": [

        0.1,

        1.0,

        10.0

    ]

}



44. Why Tune the Pipeline?


The search can evaluate:


Feature representation.


Preprocessing parameters.


Model parameters.


as one integrated workflow.



45. Pipeline and Test Data


The final test set should remain untouched until the model-development process is complete.



46. Correct Workflow


Training Data


→


Cross-Validation


→


Hyperparameter Selection


→


Final Training


→


Test Evaluation.



47. Pipeline Serialization


A trained pipeline can be saved for later use.


Possible tools include:


joblib.


pickle.


The exact deployment method depends on the application.



48. Why Save the Whole Pipeline?


Saving only the model is not enough if prediction requires:


Scaling.


Encoding.


Feature creation.



49. Example


Instead of saving:


Model only.


Save:


Feature Engineering


+


Preprocessing


+


Model.



50. Production Inference


New Data


→


Same Feature Engineering


→


Same Preprocessing


→


Model


→


Prediction.



51. Training/Inference Consistency


The transformation used during inference must match the transformation used during training.



52. Common Production Problem


Training code:


Income scaled.


Production code:


Income not scaled.


The model receives data in an unexpected representation.



53. Pipeline Solution


Store all required transformations in the pipeline.



54. Feature Names


Modern scikit-learn workflows can expose transformed feature names for many transformers.


For example:


Python


feature_names = (
    preprocessor
    .get_feature_names_out()
)



55. Why Feature Names Matter


They help with:


Debugging.


Interpretation.


Feature analysis.


Model documentation.



56. Experiment


Build a dataset containing:


Numerical columns.


Categorical columns.


Missing values.



57. Experiment Workflow


Create:


Numeric pipeline.


Categorical pipeline.


ColumnTransformer.


Final model pipeline.



58. Experiment 2


Compare:


Manual preprocessing.


Pipeline preprocessing.



59. Experiment 3


Use cross-validation:


Without pipeline.


With pipeline.


Observe how pipeline-based preprocessing reduces leakage risk.



60. Experiment 4


Add custom feature engineering:


Income / Debt.


Then place it inside the pipeline.



61. Experiment 5


Use GridSearchCV to tune:


Scaling-related choices.


Model hyperparameters.


Polynomial degree.



62. Common Mistakes


Mistake 1:


Fitting preprocessing before cross-validation.


Mistake 2:


Saving only the final model.


Mistake 3:


Using different preprocessing during prediction.


Mistake 4:


Applying transformations to the wrong columns.


Mistake 5:


Ignoring unseen categories.


Mistake 6:


Allowing future information into feature creation.



63. Practice


1. What is a pipeline?


2. Why are pipelines useful?


3. What is ColumnTransformer?


4. Why should preprocessing be fitted only on training data?


5. What is a custom transformer?


6. Why save the complete pipeline?



64. Quick Check


Question 1


What is the main purpose of a pipeline?


Answer


To combine preprocessing and modeling steps into one reproducible workflow.


Question 2


What does ColumnTransformer do?


Answer


It applies different transformations to different groups of columns.


Question 3


Why is a pipeline useful with cross-validation?


Answer


Each validation fold can fit preprocessing using only the corresponding training portion.



65. Summary


Pipelines combine:


Feature engineering.


Preprocessing.


Model training.


They help maintain consistency and reduce leakage.


Important tools include:


Pipeline.


ColumnTransformer.


SimpleImputer.


StandardScaler.


OneHotEncoder.


Custom transformers.


GridSearchCV.


A production model should generally preserve the complete transformation and prediction workflow.



66. Extended Study


A machine learning pipeline can be represented as:


ŷ


=


f(
φₙ(
φₙ₋₁(
...
φ₁(X)
...
)
)
).


Each transformation:


φᵢ


changes the representation before the next stage.


The final estimator:


f


produces the prediction.


This mathematical view explains why preprocessing is part of the model system rather than an unrelated preliminary step.



67. Reflection


Before finalizing a pipeline, ask:


Are all transformations inside the pipeline?


Are numerical and categorical columns handled correctly?


Can unknown categories appear?


Can missing values appear?


Could feature creation leak future information?


Will the exact same pipeline be used during inference?


Is the final test set untouched?

`

};

export default lesson15;