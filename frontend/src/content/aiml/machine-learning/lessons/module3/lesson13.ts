const lesson13 = {

  id: "lesson13",

  title: "Encoding Categorical Data",

  content: `

Lesson 13

Encoding Categorical Data


1. Introduction to Categorical Data


Machine learning algorithms generally operate on numerical representations.


However, real datasets often contain categorical variables.


Examples include:


Gender


City


Product Type


Payment Method


Department


Education Level.


These values represent categories rather than continuous numerical quantities.



2. Example


Suppose a dataset contains:


City:


Mumbai


Delhi


Chennai


Bengaluru.


A machine learning algorithm cannot directly perform numerical calculations on these text labels.


They need to be represented numerically.



3. What Is Encoding?


Encoding converts categorical values into numerical representations.


For example:


City


Mumbai


Delhi


Chennai


could become:


Encoded representation.


The encoding strategy depends on the type of categorical variable.



4. Types of Categorical Variables


Two important categories are:


Nominal


Ordinal.



5. Nominal Variables


Nominal categories do not have a natural ordering.


Examples:


City


Color


Browser


Payment Method.


For example:


Mumbai


Delhi


Chennai.


There is no meaningful statement such as:


Mumbai > Delhi.



6. Ordinal Variables


Ordinal categories have an inherent order.


Examples:


Low


Medium


High.


Another example:


Beginner


Intermediate


Advanced.



7. Why the Difference Matters


If categories are ordinal, the order contains information.


If categories are nominal, assigning numerical values may incorrectly imply an order.


Therefore, encoding must respect the meaning of the variable.



8. Label Encoding


Suppose:


Low


Medium


High.


We could represent them as:


Low = 0


Medium = 1


High = 2.


This can be appropriate when the numerical ordering reflects the actual category ordering.



9. Python Ordinal Encoding


Python


from sklearn.preprocessing import OrdinalEncoder


encoder = OrdinalEncoder(
    categories=[
        [
            "Low",
            "Medium",
            "High"
        ]
    ]
)


X_encoded = encoder.fit_transform(
    [
        ["Low"],
        ["Medium"],
        ["High"]
    ]
)


print(
    X_encoded
)



10. Output


The categories become values representing their specified order.


For example:


Low → 0


Medium → 1


High → 2.



11. Problem with Arbitrary Numeric Encoding


Suppose:


Red = 0


Blue = 1


Green = 2.


This may cause a model to interpret:


Green > Blue > Red.


For a nominal variable, that ordering has no real meaning.



12. One-Hot Encoding


One-hot encoding creates a separate binary column for each category.


Suppose:


Color:


Red


Blue


Green.


The encoded representation can be:


Red   Blue   Green


1      0      0


0      1      0


0      0      1.



13. Why One-Hot Encoding Works


Each category receives its own indicator.


There is no numerical ordering between categories.


Therefore:


Red


does not become numerically greater than:


Blue.



14. Python OneHotEncoder


Python


from sklearn.preprocessing import OneHotEncoder


encoder = OneHotEncoder(
    handle_unknown="ignore"
)


X_encoded = encoder.fit_transform(
    [
        ["Red"],
        ["Blue"],
        ["Green"]
    ]
)


print(
    X_encoded.toarray()
)



15. Inspect Feature Names


Python


print(
    encoder.get_feature_names_out(
        ["color"]
    )
)


The resulting names identify the generated binary columns.



16. One-Hot Encoding Multiple Features


Suppose the dataset contains:


City


Payment Method.


Python


data = [

    ["Mumbai", "Card"],

    ["Delhi", "Cash"],

    ["Chennai", "UPI"]

]


encoder = OneHotEncoder(
    handle_unknown="ignore"
)


X_encoded = encoder.fit_transform(
    data
)


print(
    X_encoded.toarray()
)



17. handle_unknown


A very useful option is:


handle_unknown="ignore".


Suppose the training data contains:


Mumbai


Delhi.


Later, a new observation contains:


Hyderabad.


If unknown categories are not handled correctly, the transformation can fail.


With:


handle_unknown="ignore",


the unseen category can be represented using zeros for the learned category columns.



18. Why Unknown Categories Occur


Production data can contain categories that were not present during training.


For example:


Training:


Mumbai


Delhi


Chennai.


Production:


Bengaluru.


The encoding system must handle this safely.



19. Pandas get_dummies


Pandas also provides:


get_dummies.


Python


import pandas as pd


df = pd.DataFrame({

    "city": [
        "Mumbai",
        "Delhi",
        "Chennai"
    ]

})


encoded = pd.get_dummies(
    df,
    columns=[
        "city"
    ]
)


print(
    encoded
)



20. One-Hot Encoding with Drop


In some linear-model settings, one category can be dropped to avoid perfect linear dependence among the one-hot columns.


Python


encoder = OneHotEncoder(
    drop="first",
    handle_unknown="ignore"
)


The exact handling should depend on the model and workflow.



21. Dummy Variable Trap


Suppose:


Red


Blue


Green.


If every category column is included together with an intercept in some linear-model formulations, one column can be mathematically redundant because the category indicators sum to one.


Dropping a reference category can remove this perfect redundancy.


Modern libraries and models can handle some forms of redundancy, so dropping categories should be a deliberate choice rather than an automatic rule.



22. OrdinalEncoder vs OneHotEncoder


OrdinalEncoder:


Represents categories using numerical codes.


Useful when categories have meaningful order.


OneHotEncoder:


Creates separate binary indicators.


Usually appropriate for nominal categories.



23. Example


Education Level:


School


Bachelor


Master


PhD.


There is a meaningful order.


Ordinal encoding can represent this ordering if the ordering is explicitly specified.



24. Example of Nominal Encoding


Payment Method:


Cash


Card


UPI.


There is no natural ranking.


One-hot encoding is generally more appropriate.



25. Encoding and Tree Models


Tree-based models can sometimes work with encoded categories, but the encoding strategy can affect how the tree interprets the values.


For nominal categories, one-hot encoding can avoid imposing arbitrary numeric ordering.



26. Encoding and Linear Models


Linear models can work naturally with one-hot encoded features.


Each category gets its own coefficient relative to a reference or according to the chosen encoding scheme.



27. Encoding and k-NN


Distance-based models require careful encoding.


If arbitrary numerical codes are assigned to nominal categories:


Cash = 0


Card = 1


UPI = 2,


the distance between categories becomes artificially meaningful.


One-hot encoding avoids this particular ordering assumption, although the resulting geometry still needs interpretation.



28. Encoding and k-Means


k-Means is designed for numerical feature spaces and Euclidean distance.


Using arbitrary category codes with k-Means can create misleading distances.


One-hot encoding can be used as a basic representation for some mixed-data problems, but k-Means is not inherently designed for categorical variables.



29. Encoding and Scaling


One-hot columns contain:


0


or:


1.


If numerical and categorical features are combined, preprocessing may need to treat the groups differently.


For example:


Numerical:


StandardScaler.


Categorical:


OneHotEncoder.



30. ColumnTransformer


A common scikit-learn solution is:


ColumnTransformer.


Python


from sklearn.compose import ColumnTransformer


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
    "payment"
]


preprocessor = ColumnTransformer([

    (
        "num",
        StandardScaler(),
        numeric_features
    ),

    (
        "cat",
        OneHotEncoder(
            handle_unknown="ignore"
        ),
        categorical_features
    )

])



31. Why ColumnTransformer?


It allows different preprocessing operations to be applied to different columns.


For example:


Numerical columns:


Scale.


Categorical columns:


One-hot encode.


This creates a consistent preprocessing workflow.



32. Complete Pipeline


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



33. Fit the Pipeline


Python


pipeline.fit(
    X_train,
    y_train
)



34. Predict


Python


predictions = pipeline.predict(
    X_test
)


The preprocessing and model are applied consistently.



35. Why Pipeline Matters


The pipeline prevents common workflow mistakes.


It ensures that:


Training preprocessing


and:


Testing preprocessing


use the same learned transformation.


It also integrates naturally with cross-validation.



36. Data Leakage with Encoding


A common mistake is fitting an encoder on the complete dataset before splitting.


For example:


Complete Dataset


→


Fit OneHotEncoder


→


Train/Test Split.


The encoder has now observed the test categories.


A safer approach is:


Train/Test Split


→


Fit encoder on training data.


Then transform both training and test data.



37. Rare Categories


Some categorical features contain many categories.


For example:


Product ID


may contain thousands of unique values.


One-hot encoding can create thousands of columns.


This can increase:


Memory


Computation


Model complexity.



38. High-Cardinality Categories


High-cardinality means:


Many unique categories.


Examples:


ZIP Code


Product ID


User ID


Merchant ID.


These features require careful consideration.



39. Alternatives for High Cardinality


Possible strategies include:


Grouping rare categories


Frequency encoding


Target encoding


Hashing.


Each technique has different assumptions and leakage risks.



40. Grouping Rare Categories


Suppose a city column contains:


1000 different cities.


Very rare cities can sometimes be grouped into:


Other.


This reduces the number of categories.


However, grouping should be based on domain requirements rather than arbitrary removal.



41. Frequency Encoding


A category can be represented using its frequency.


For example:


Mumbai appears 500 times.


Delhi appears 300 times.


Chennai appears 100 times.


Frequency encoding represents categories using these counts or proportions.



42. Warning About Frequency Encoding


The frequency calculation must be performed carefully in supervised workflows.


If the encoding is computed using information from validation or test data, leakage can occur.


A pipeline or fold-aware implementation is preferable.



43. Target Encoding


Target encoding replaces a category with information derived from the target.


For example:


City


→


Average target value.


This can be powerful but is highly susceptible to target leakage if performed incorrectly.



44. Missing Categorical Values


Categorical columns can also contain missing values.


Possible approaches:


Most frequent category


Explicit "Missing" category.


Python


from sklearn.impute import SimpleImputer


imputer = SimpleImputer(
    strategy="most_frequent"
)



45. Categorical Pipeline


A common approach is:


Missing Value Imputation


→


One-Hot Encoding.


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



46. Numerical + Categorical Pipeline


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



47. ColumnTransformer with Pipelines


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



48. Complete Model Pipeline


Python


model = Pipeline([

    (
        "preprocessing",
        preprocessor
    ),

    (
        "classifier",
        LogisticRegression(
            max_iter=2000
        )
    )

])


model.fit(
    X_train,
    y_train
)



49. Feature Names


After one-hot encoding, it is useful to inspect generated feature names.


Python


feature_names = (
    model
    .named_steps[
        "preprocessing"
    ]
    .get_feature_names_out()
)


print(
    feature_names
)



50. Why Feature Names Matter


Generated names help explain:


Which category each feature represents.


For example:


cat__city_Mumbai


cat__city_Delhi


cat__payment_Card.


This is useful for debugging and model interpretation.



51. Encoding Boolean Values


Boolean values:


True


False.


can often be represented as:


1


0.


The appropriate handling depends on the library and model.



52. Binary Categories


For a category with only two values:


Yes


No.


A simple binary representation can be:


Yes = 1


No = 0.


However, consistency with the preprocessing pipeline remains important.



53. Encoding Text Categories


Text categories should not be passed directly into algorithms expecting numerical matrices.


For example:


"Premium"


"Standard"


"Basic".


Choose an encoding strategy based on whether the order is meaningful.



54. Experiment


Create a dataset containing:


Age


Income


City


Payment Method.


Build a preprocessing pipeline:


Numerical:


Median Imputation


StandardScaler.


Categorical:


Most Frequent Imputation


OneHotEncoder.



55. Experiment: Unknown Category


Train using:


Mumbai


Delhi.


Then transform a test observation containing:


Chennai.


Use:


handle_unknown="ignore".


Observe the resulting encoded representation.



56. Experiment: Ordinal Data


Create:


Low


Medium


High.


Compare:


OrdinalEncoder


and:


OneHotEncoder.


Explain why ordinal encoding preserves ordering information.



57. Experiment: High Cardinality


Create a categorical column with:


100 unique values.


One-hot encode it.


Observe the number of resulting features.



58. Common Mistakes


Mistake 1:


Using arbitrary numeric labels for nominal categories.


Mistake 2:


Ignoring category ordering.


Mistake 3:


Fitting encoders before train/test splitting.


Mistake 4:


Not handling unknown categories.


Mistake 5:


Creating extremely large one-hot matrices.


Mistake 6:


Ignoring missing categorical values.


Mistake 7:


Performing target encoding without leakage protection.



59. Practice


1. What is categorical data?


2. What is nominal data?


3. What is ordinal data?


4. What is encoding?


5. What is one-hot encoding?


6. When is ordinal encoding appropriate?


7. Why can arbitrary numeric labels be dangerous?


8. What does handle_unknown="ignore" do?


9. What is high-cardinality categorical data?


10. Why is ColumnTransformer useful?



60. Quick Check


Question 1


Which encoding is commonly used for nominal categories?


Answer


One-hot encoding.


Question 2


Which encoding can preserve a meaningful category order?


Answer


Ordinal encoding.


Question 3


Why should nominal categories not usually be encoded as 0, 1, 2?


Answer


Because that can introduce an artificial numerical ordering.


Question 4


What does handle_unknown="ignore" help with?


Answer


Categories that were not present when the encoder was fitted.


Question 5


Why use ColumnTransformer?


Answer


To apply different preprocessing operations to different groups of columns.



61. Summary


Categorical data represents discrete groups or categories.


Nominal categories have no inherent order.


Ordinal categories have meaningful order.


OneHotEncoder creates binary indicator columns.


OrdinalEncoder can represent ordered categories.


ColumnTransformer allows numerical and categorical preprocessing to be combined.


Pipelines help prevent inconsistent transformations and data leakage.


Unknown categories should be handled carefully.


High-cardinality categorical features require special consideration.



62. Extended Study


For a categorical variable with categories:


C₁,C₂,...,Cₖ,


one-hot encoding represents each observation using a vector:


[0,0,...,1,...,0].


Exactly one position corresponds to the category for a standard single-label categorical variable.


For example:


City = Mumbai.


The vector may be:


[1,0,0].


City = Delhi:


[0,1,0].


City = Chennai:


[0,0,1].


This representation avoids imposing an ordinal relationship among nominal categories.



63. Reflection


Before encoding categorical data, ask:


Is the variable nominal or ordinal?


Does category order have meaning?


How many unique categories exist?


Could one-hot encoding create too many columns?


Can unknown categories appear later?


Are missing categories present?


Could the encoding introduce data leakage?


Should rare categories be grouped?


Should numerical and categorical features use different preprocessing?

`

};

export default lesson13;