const lesson10 = {

  id: "lesson10",

  title: "Categorical Feature Engineering",

  content: `

Lesson 10

Categorical Feature Engineering


1. Introduction


Many real-world datasets contain categorical variables.


Examples:


City.


Gender category.


Product type.


Payment method.


Education level.


Device type.


Customer segment.


Unlike continuous numerical variables, categorical values represent groups or labels.



2. What Is a Categorical Feature?


A categorical feature takes values from a set of categories.


For example:


Payment Method:


Cash.


Card.


UPI.


Each value represents a category.



3. Nominal Categories


Nominal categories do not have an inherent order.


Examples:


City.


Color.


Browser.


Payment method.



4. Ordinal Categories


Ordinal categories have a meaningful order.


Examples:


Low.


Medium.


High.


Beginner.


Intermediate.


Advanced.



5. Why Encoding Is Required


Many machine learning algorithms expect numerical inputs.


Therefore:


Category


→


Numerical Representation.



6. One-Hot Encoding


One-hot encoding creates a separate binary feature for each category.



7. Example


Original:


City.


Mumbai.


Delhi.


Chennai.



8. One-Hot Representation


Mumbai:


1 or 0.


Delhi:


1 or 0.


Chennai:


1 or 0.



9. Python


import pandas as pd


df = pd.DataFrame({

    "city": [

        "Mumbai",

        "Delhi",

        "Chennai",

        "Mumbai"

    ]

})


encoded = pd.get_dummies(
    df,
    columns=["city"]
)


print(
    encoded
)



10. Why One-Hot Encoding Is Useful


It avoids implying numerical ordering.


For example:


Mumbai = 0.


Delhi = 1.


Chennai = 2.


would incorrectly suggest that Chennai is numerically greater than Delhi.



11. scikit-learn OneHotEncoder


Python


from sklearn.preprocessing import (
    OneHotEncoder
)


encoder = OneHotEncoder(
    handle_unknown="ignore"
)


X_encoded = encoder.fit_transform(
    df[["city"]]
)



12. handle_unknown


During prediction, new categories may appear.


For example:


Training categories:


Mumbai.


Delhi.


Prediction category:


Pune.



13. Why handle_unknown Matters


With:


handle_unknown="ignore",


an unseen category can be handled without causing the transformation to fail.



14. Dense vs Sparse Output


One-hot encoding can produce many mostly-zero values.


A sparse representation can store this efficiently.



15. Dense Output


Python:


encoder = OneHotEncoder(
    sparse_output=False,
    handle_unknown="ignore"
)



16. Sparse Output


The default configuration in many scikit-learn versions may return a sparse matrix.


The exact parameter behavior can depend on the installed scikit-learn version.



17. Ordinal Encoding


When categories have a meaningful order, an ordinal representation may be appropriate.


Example:


Beginner = 1.


Intermediate = 2.


Advanced = 3.



18. Python


from sklearn.preprocessing import (
    OrdinalEncoder
)


encoder = OrdinalEncoder()


X_encoded = encoder.fit_transform(
    df[["level"]]
)



19. Important Caution


Ordinal encoding should not be used merely because categories can be assigned numbers.


The order must actually have meaning.



20. Example of Wrong Ordinal Encoding


City:


Mumbai = 1.


Delhi = 2.


Chennai = 3.


There is no meaningful mathematical ordering here.



21. Binary Categories


Some categorical variables contain only two values.


Example:


Subscribed:


Yes.


No.



22. Binary Mapping


Python:


df["subscribed_binary"] = (
    df["subscribed"]
    .map({
        "No": 0,
        "Yes": 1
    })
)



23. Why Binary Mapping Works


The two categories can naturally be represented as:


0.


1.



24. Frequency Encoding


A category can be represented by how often it appears in the dataset.


Example:


Mumbai:


500 observations.


Delhi:


350 observations.


Chennai:


200 observations.



25. Python


frequency = (
    df["city"]
    .value_counts()
)


df["city_frequency"] = (
    df["city"]
    .map(frequency)
)



26. Why Frequency Encoding?


It converts categories into numerical values while preserving information about category frequency.



27. Important Caution


Frequency encoding must be performed carefully to avoid using information from validation or test data during training.



28. Target Encoding


A category can be represented using statistics related to the target.


For example:


Average target value for each category.



29. Example


Suppose:


City = Mumbai.


Average target for Mumbai = 0.72.


Then Mumbai could receive a representation related to 0.72.



30. Leakage Risk


Target encoding can easily cause leakage if the target statistics are calculated using the same observations being evaluated.


Therefore, target encoding requires careful cross-validation or out-of-fold strategies.



31. Category Grouping


Rare categories can sometimes be grouped into:


Other.


For example:


Mumbai.


Delhi.


Chennai.


Other.



32. Why Group Rare Categories?


Rare categories can:


Increase feature dimensionality.


Create unstable estimates.


Produce sparse representations.



33. Rare Category Example


Suppose:


City:


Mumbai = 10,000.


Delhi = 8,000.


SmallTownA = 3.


SmallTownB = 2.


SmallTownC = 1.


The rare categories may be grouped depending on the problem.



34. Frequency Threshold


A category can be considered rare if its frequency is below a chosen threshold.


The threshold should be selected using the dataset and application context.



35. Combining Categories


Sometimes two categories can be combined when they represent similar behavior.


This should be supported by domain reasoning or analysis.



36. Hierarchical Categories


Some categorical variables have hierarchical structure.


Example:


Location:


Country.


State.


City.



37. Feature Creation


We can derive:


State.


Region.


Metro vs Non-Metro.


depending on the application.



38. Category Interaction


Two categorical variables can be combined.


For example:


Device Type.


Subscription Plan.



39. Combined Category


Possible feature:


Mobile + Premium.



40. Python


df["device_plan"] = (

    df["device"]
    + "_"
    + df["plan"]

)



41. One-Hot After Combination


The combined category can then be one-hot encoded.



42. Why Combine Categories?


Some outcomes may depend on a specific combination.


For example:


Premium users on mobile devices may behave differently from premium users on desktop.



43. Categorical Feature Validation


After encoding, inspect:


Number of categories.


Rare categories.


Unknown categories.


Missing categories.


Encoded feature count.



44. Missing Categories


Missing categorical values can be represented as:


Missing.


Unknown.


Other.


depending on the problem.



45. Python


df["city"] = (
    df["city"]
    .fillna("Unknown")
)



46. Missingness as Information


Sometimes the fact that a category is missing itself carries information.


A separate missing indicator can therefore be useful.



47. High Cardinality


A categorical variable with many unique values is called:


High-cardinality.


Examples:


Customer ID.


Product ID.


Thousands of postal codes.



48. Why High Cardinality Is Difficult


One-hot encoding a feature with thousands of categories can create thousands of columns.



49. Example


Customer ID:


C001.


C002.


C003.


...


C100000.


One-hot encoding would create an enormous feature space.



50. Identifier Warning


Identifiers often do not contain meaningful predictive information.


They should not automatically be treated as ordinary categorical features.



51. High-Cardinality Alternatives


Possible approaches include:


Frequency encoding.


Target encoding with leakage-safe methods.


Feature hashing.


Domain-specific aggregation.


Learned embeddings.



52. Feature Hashing


Feature hashing maps categories into a fixed number of numerical dimensions.



53. Why Hashing?


It can prevent the number of columns from growing directly with the number of unique categories.



54. Category Embeddings


Neural networks can learn dense representations of categories.


These are often called:


Embeddings.



55. Example


Instead of:


City → one-hot vector,


a model can learn:


City → dense vector.


Similar categories can potentially develop similar representations.



56. Categorical Features and Tree Models


Tree-based models can work with encoded categorical features, although the exact handling depends on the algorithm and implementation.



57. Categorical Features and Linear Models


Linear models commonly use:


One-hot encoding.


Ordinal encoding can be used only when order is meaningful.



58. ColumnTransformer


A dataset may contain:


Numerical features.


Categorical features.



59. Python


from sklearn.compose import (
    ColumnTransformer
)


from sklearn.preprocessing import (
    StandardScaler,
    OneHotEncoder
)


numeric_features = [
    "age",
    "income"
]


categorical_features = [
    "city",
    "plan"
]


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



60. Complete Pipeline


Python


from sklearn.pipeline import Pipeline


from sklearn.linear_model import LogisticRegression


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



61. Training


Python:


pipeline.fit(
    X_train,
    y_train
)



62. Prediction


Python:


predictions = pipeline.predict(
    X_test
)



63. Why This Architecture Helps


The preprocessing rules are stored with the model workflow.


This helps maintain consistency between:


Training.


Validation.


Testing.


Production prediction.



64. Categorical Feature Engineering Workflow


Understand Categories


↓

Check Cardinality


↓

Handle Missing Values


↓

Choose Representation


↓

Encode


↓

Validate


↓

Train Model.



65. Choosing Encoding


Use:


One-Hot Encoding


for nominal categories.


Use:


Ordinal Encoding


when order is meaningful.


Use:


Frequency Encoding


when category frequency is informative.


Use:


Target Encoding


only with leakage-safe procedures.



66. Experiment


Create a classification dataset containing:


City.


Device.


Subscription Plan.


Compare:


One-hot encoding.


Frequency encoding.



67. Experiment 2


Create an ordinal variable:


Education Level.


Compare:


Ordinal encoding.


One-hot encoding.



68. Experiment 3


Create a high-cardinality category.


Compare:


One-hot encoding.


Frequency encoding.


Observe feature count and model behavior.



69. Experiment 4


Create a combined category:


Device × Plan.


Compare model performance:


Without interaction.


With interaction.



70. Common Mistakes


Mistake 1:


Encoding nominal categories as arbitrary integers.


Mistake 2:


Ignoring unseen categories.


Mistake 3:


One-hot encoding huge identifier columns.


Mistake 4:


Using target encoding without leakage protection.


Mistake 5:


Ignoring rare categories.


Mistake 6:


Forgetting missing categorical values.



71. Practice


1. What is a categorical feature?


2. What is one-hot encoding?


3. What is ordinal encoding?


4. When is ordinal encoding appropriate?


5. What is frequency encoding?


6. What is high cardinality?


7. Why can target encoding cause leakage?



72. Quick Check


Question 1


Why is one-hot encoding useful?


Answer


It represents categories without introducing an artificial numerical ordering.


Question 2


When is ordinal encoding appropriate?


Answer


When the categories have a meaningful order.


Question 3


Why is handle_unknown useful?


Answer


It allows the transformer to handle categories that were not present during training.



73. Summary


Categorical feature engineering converts category information into useful numerical representations.


Important methods include:


One-hot encoding.


Ordinal encoding.


Binary encoding.


Frequency encoding.


Target encoding.


Category grouping.


Category combinations.


High-cardinality strategies.


The correct representation depends on:


Category type.


Cardinality.


Model.


Domain.



74. Extended Study


A categorical feature can be viewed as a mapping:


c


→


φ(c).


One-hot encoding produces a sparse indicator vector.


Frequency encoding maps the category to its frequency.


Target encoding maps the category to target-related statistics.


Embeddings map the category to a learned dense vector.


Each representation exposes different information to the model.



75. Reflection


Before encoding a categorical feature, ask:


Is it nominal or ordinal?


How many unique categories exist?


Are categories missing?


Could new categories appear during prediction?


Is one-hot encoding practical?


Could frequency information be useful?


Could target encoding leak information?


Is this actually an identifier rather than a meaningful feature?

`

};

export default lesson10;