const project = {

  id: "project",

  title: "Module 4 Project — End-to-End Feature Engineering System",

  content: `

Module 4 Final Project

End-to-End Feature Engineering System


1. Project Overview


In this project, you will build a complete feature-engineering workflow for a customer purchase prediction problem.


The project combines the major concepts from Module 4:


Feature creation.


Numerical transformations.


Polynomial features.


Interaction features.


Date features.


Categorical encoding.


Outlier handling.


Domain knowledge.


Feature selection.


Pipelines.


Validation.



2. Project Objective


Build a machine learning system that predicts:


Whether a customer will make a purchase.


The objective is not simply to train a model.


The main objective is to construct a high-quality feature representation.



3. Dataset


Create or use a dataset containing:


customer_id


age


income


city


membership


purchase_date


previous_purchases


total_spending


average_order_value


target_purchase.



4. Target


The target is:


target_purchase.


Example:


0 = No purchase.


1 = Purchase.



5. Data Generation


If a real dataset is unavailable, generate a synthetic dataset for learning.



6. Example Python


import numpy as np


import pandas as pd


rng = np.random.default_rng(
    42
)


n = 1000


df = pd.DataFrame({

    "customer_id": np.arange(n),

    "age": rng.integers(
        18,
        70,
        n
    ),

    "income": rng.integers(
        20000,
        200000,
        n
    ),

    "city": rng.choice(

        [
            "Mumbai",
            "Delhi",
            "Chennai",
            "Pune"
        ],

        n

    ),

    "membership": rng.choice(

        [
            "Basic",
            "Premium"
        ],

        n

    ),

    "previous_purchases": rng.integers(
        0,
        20,
        n
    ),

    "total_spending": rng.uniform(
        0,
        100000,
        n
    ),

    "average_order_value": rng.uniform(
        500,
        10000,
        n
    )

})



7. Generate Purchase Dates


Python


df["purchase_date"] = pd.date_range(

    start="2025-01-01",

    periods=n,

    freq="D"

)



8. Create a Target


For a learning project, the target can be generated using a simple rule with controlled randomness.


Python


probability = (

    0.2

    +

    0.002 * df["previous_purchases"]

    +

    0.000002 * df["total_spending"]

)


probability = np.clip(
    probability,
    0,
    0.95
)


df["target_purchase"] = (

    rng.random(n)
    < probability

).astype(int)



9. Important Note


A synthetic target is created only for demonstration.


In a real project, the target should come from actual historical outcomes.



10. Step 1 — Inspect the Data


Check:


Shape.


Columns.


Data types.


Missing values.


Duplicate rows.



11. Python


print(
    df.shape
)


print(
    df.dtypes
)


print(
    df.isna().sum()
)



12. Step 2 — Identify Feature Types


Numerical:


age.


income.


previous_purchases.


total_spending.


average_order_value.



13. Categorical


city.


membership.



14. Date


purchase_date.



15. Identifier


customer_id.



16. Step 3 — Remove or Exclude Identifiers


Customer ID is primarily an identifier.


Do not automatically use it as a predictive feature.



17. Step 4 — Create Domain Features


Create:


Spending per purchase.


Purchase activity.


Income-adjusted spending.



18. Spending per Purchase


Formula:


Total Spending


/


Previous Purchases.



19. Safe Implementation


Python


df["spending_per_purchase"] = np.where(

    df["previous_purchases"] > 0,

    df["total_spending"]

    /

    df["previous_purchases"],

    0

)



20. Income-Adjusted Spending


Python


df["spending_income_ratio"] = np.where(

    df["income"] > 0,

    df["total_spending"]

    /

    df["income"],

    0

)



21. Step 5 — Date Features


Create:


Month.


Weekday.


Quarter.


Weekend.



22. Python


df["month"] = (
    df["purchase_date"].dt.month
)


df["weekday"] = (
    df["purchase_date"].dt.dayofweek
)


df["quarter"] = (
    df["purchase_date"].dt.quarter
)


df["is_weekend"] = (

    df["weekday"] >= 5

).astype(int)



23. Step 6 — Cyclical Month Features


Create:


month_sin.


month_cos.



24. Python


df["month_sin"] = np.sin(

    2
    *
    np.pi
    *
    df["month"]
    /
    12

)


df["month_cos"] = np.cos(

    2
    *
    np.pi
    *
    df["month"]
    /
    12

)



25. Step 7 — Interaction Feature


Create:


income × previous purchases.



26. Python


df["income_purchase_interaction"] = (

    df["income"]

    *

    df["previous_purchases"]

)



27. Step 8 — Numerical Transformation


Income may be right-skewed in real datasets.


Create:


log_income.



28. Python


df["log_income"] = np.log1p(
    df["income"]
)



29. Step 9 — Outlier Investigation


Inspect:


income.


total_spending.


average_order_value.



30. Python


print(
    df[
        [
            "income",
            "total_spending",
            "average_order_value"
        ]
    ].describe()
)



31. Step 10 — Create a Baseline


Build a baseline using:


Numerical features.


Categorical features.



32. Baseline Features


Use:


age.


income.


previous_purchases.


total_spending.


average_order_value.


city.


membership.



33. Step 11 — Preprocessing


Numerical pipeline:


Median imputation.


StandardScaler.



34. Categorical Pipeline


Most-frequent imputation.


OneHotEncoder.



35. Python


from sklearn.compose import (
    ColumnTransformer
)


from sklearn.pipeline import Pipeline


from sklearn.impute import (
    SimpleImputer
)


from sklearn.preprocessing import (
    StandardScaler,
    OneHotEncoder
)


from sklearn.linear_model import (
    LogisticRegression
)



36. Define Columns


Python


numeric_features = [

    "age",

    "income",

    "previous_purchases",

    "total_spending",

    "average_order_value"

]


categorical_features = [

    "city",

    "membership"

]



37. Numerical Pipeline


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



38. Categorical Pipeline


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



39. Preprocessor


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



40. Baseline Model


Python


baseline_model = Pipeline([

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



41. Step 12 — Train/Test Split


Python


from sklearn.model_selection import (
    train_test_split
)


target = df[
    "target_purchase"
]


features = df.drop(
    columns=[
        "target_purchase",
        "customer_id"
    ]
)


X_train, X_test, y_train, y_test = (

    train_test_split(

        features,

        target,

        test_size=0.2,

        random_state=42,

        stratify=target

    )

)



42. Step 13 — Train Baseline


Python


baseline_model.fit(

    X_train,

    y_train

)



43. Baseline Evaluation


Python


baseline_score = (
    baseline_model.score(
        X_test,
        y_test
    )
)


print(
    baseline_score
)



44. Step 14 — Build Engineered Dataset


Add:


spending_per_purchase.


spending_income_ratio.


month.


weekday.


quarter.


is_weekend.


month_sin.


month_cos.


income_purchase_interaction.


log_income.



45. Step 15 — Create Feature List


Numerical engineered features can include:


age.


income.


previous_purchases.


total_spending.


average_order_value.


spending_per_purchase.


spending_income_ratio.


month_sin.


month_cos.


income_purchase_interaction.


log_income.



46. Categorical


city.


membership.



47. Step 16 — Engineered Pipeline


Build a second pipeline using the engineered feature set.



48. Important Design Choice


Feature creation should ideally be reproducible inside the pipeline or preprocessing system rather than manually performed differently for training and prediction.



49. Step 17 — Cross-Validation


Evaluate the baseline using:


5-fold cross-validation.



50. Python


from sklearn.model_selection import (
    cross_val_score
)


baseline_scores = cross_val_score(

    baseline_model,

    features,

    target,

    cv=5,

    scoring="accuracy"

)



51. Step 18 — Compare Feature Sets


Compare:


Baseline features.


Engineered features.



52. Metrics


For classification, examine:


Accuracy.


Precision.


Recall.


F1-score.


ROC-AUC.


Choose metrics appropriate to the problem.



53. Step 19 — Feature Inspection


Inspect transformed feature names.


Python


feature_names = (

    engineered_model

    .named_steps[

        "preprocessor"

    ]

    .get_feature_names_out()

)


print(
    feature_names
)



54. Step 20 — Check Feature Count


Python


print(
    len(feature_names)
)



55. Step 21 — Check for Invalid Values


Before training, inspect:


NaN.


Infinity.



56. Python


print(
    np.isinf(
        df.select_dtypes(
            include="number"
        )
    ).sum()
)



57. Step 22 — Feature Selection


If the engineered representation becomes large, investigate:


Low-variance features.


Highly redundant features.


Weak features.


Potentially leaking features.



58. Step 23 — Model Comparison


Compare at least:


Logistic Regression.


Decision Tree.


Random Forest.



59. Why Compare Models?


Feature engineering can interact differently with different model families.



60. Step 24 — Final Pipeline


Select the final representation and model based on validation evidence.



61. Step 25 — Final Test Evaluation


Only after development is complete:


Evaluate once on the untouched test set.



62. Step 26 — Save Pipeline


Python


import joblib


joblib.dump(

    final_model,

    "feature_engineering_pipeline.joblib"

)



63. Step 27 — Test New Data


Create a new customer observation.


The pipeline should apply:


Feature creation.


Preprocessing.


Encoding.


Scaling.


Prediction.



64. Production Architecture


New Customer Data


↓

Feature Engineering


↓

Preprocessing


↓

Model


↓

Purchase Prediction.



65. Step 28 — Document Features


Create a feature dictionary.


For every engineered feature record:


Name.


Formula.


Meaning.


Source.


Unit.


Availability.



66. Example


Feature:


spending_income_ratio.


Formula:


total_spending / income.


Meaning:


Spending relative to income.



67. Step 29 — Leakage Audit


For every feature ask:


Was any future information used?


Was the target used?


Was evaluation data used to calculate statistics?



68. Step 30 — Robustness Test


Test:


Missing values.


Unknown city.


Extreme income.


Zero previous purchases.


Very large spending.



69. Example


Unknown city:


"Pune"


when training data contained only:


Mumbai.


Delhi.


Chennai.



70. Expected Behavior


The one-hot encoder should handle the unseen category when configured with:


handle_unknown="ignore".



71. Zero Previous Purchases


The ratio:


spending / previous_purchases


must not generate infinity.



72. Extreme Values


Investigate whether extreme values should be:


Kept.


Transformed.


Capped.


Handled using robust methods.



73. Final Experiment


Compare:


Baseline.


Engineered features.


Engineered + interaction.


Engineered + nonlinear features.



74. Final Analysis


Record:


Feature count.


Validation score.


Test score.


Training time.


Model complexity.



75. Questions to Answer


1. Which engineered feature was most useful?


2. Did date features help?


3. Did ratio features help?


4. Did interactions help?


5. Did transformations help?


6. Did the model become more complex?


7. Did validation performance improve?



76. Final Deliverables


Submit:


Python source code.


Dataset.


Feature dictionary.


Pipeline.


Evaluation results.


Short project report.



77. Project Report Structure


1. Problem Statement.


2. Dataset.


3. Data Analysis.


4. Baseline.


5. Feature Engineering.


6. Preprocessing.


7. Model.


8. Validation.


9. Results.


10. Feature Analysis.


11. Leakage Audit.


12. Final Pipeline.


13. Conclusion.



78. Final Learning Outcomes


After completing the project, you should be able to:


Understand raw data.


Create meaningful features.


Transform numerical data.


Encode categorical data.


Extract date features.


Create interactions.


Handle outliers.


Use domain knowledge.


Build preprocessing pipelines.


Compare feature representations.


Avoid leakage.


Evaluate generalization.


Deploy a reproducible feature pipeline.



79. Final Reflection


Feature engineering is the bridge between:


Raw Information


and:


Machine Learning Representation.


A model cannot learn directly from information that has not been represented appropriately.


The strongest workflow is:


Understand


→


Engineer


→


Validate


→


Evaluate


→


Deploy


→


Monitor.



`

};

export default project;