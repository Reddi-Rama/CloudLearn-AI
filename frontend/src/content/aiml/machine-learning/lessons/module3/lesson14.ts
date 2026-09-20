const lesson14 = {

  id: "lesson14",

  title: "Missing Values and Imputation",

  content: `

Lesson 14

Missing Values and Imputation


1. Introduction to Missing Values


Real-world datasets are rarely complete.


A dataset may contain values that are:


Missing


Unknown


Not recorded


Not applicable


Unavailable.


These are commonly represented as:


NaN


None


Null.


Machine learning algorithms often require a complete numerical matrix, so missing values usually need to be handled before training.



2. Example


Consider a customer dataset:


Age


20


25


NaN


31


40.


The third observation has no recorded age.


A model cannot simply assume that the missing value has a specific meaning without an appropriate preprocessing strategy.



3. Why Missing Values Matter


Missing values can affect:


Model training


Statistical calculations


Distance calculations


Feature scaling


Predictions.


Different algorithms handle missing values differently.


Therefore, missing-value handling should be deliberate.



4. Types of Missingness


Missing data can occur for different reasons.


Three commonly discussed categories are:


MCAR


MAR


MNAR.



5. MCAR


MCAR means:


Missing Completely At Random.


The probability that a value is missing is unrelated to observed or unobserved variables under the MCAR assumption.


This is a strong assumption.



6. MAR


MAR means:


Missing At Random.


The missingness may be related to other observed variables.


For example:


Income may be missing more often for observations belonging to a particular observed age group.



7. MNAR


MNAR means:


Missing Not At Random.


The probability of missingness may depend on the missing value itself or unobserved information.


For example:


People with unusually high expenses may be less likely to report them.


The reason for missingness matters when selecting an appropriate strategy.



8. Detecting Missing Values


Pandas provides useful tools.


Python


import pandas as pd


df = pd.DataFrame({

    "age": [
        20,
        25,
        None,
        35,
        40
    ],

    "income": [
        25000,
        None,
        45000,
        60000,
        80000
    ]

})


print(
    df.isna()
)



9. Count Missing Values


Python


print(
    df.isna().sum()
)


Output


Each column's missing-value count is displayed.



10. Missing Percentage


Python


missing_percentage = (
    df.isna().mean() * 100
)


print(
    missing_percentage
)


This shows the percentage of observations missing in each column.



11. Why Count Missing Values?


Before choosing an imputation method, determine:


How many values are missing?


Which columns contain missing values?


Are missing values concentrated in certain groups?


Is the missingness meaningful?



12. Dropping Rows


One possible strategy is to remove observations containing missing values.


Python


df_clean = df.dropna()


This is simple, but it may remove a significant amount of useful data.



13. When Dropping Rows Can Be Problematic


Suppose:


1000 observations.


200 contain missing income.


Dropping all 200 rows removes:


20%


of the dataset.


This may reduce the amount of information available to the model.



14. Dropping Columns


If a feature has an extremely high proportion of missing values, removing the feature may sometimes be reasonable.


Python


df_reduced = df.drop(
    columns=[
        "income"
    ]
)


However, the decision should depend on:


Missingness


Domain importance


Predictive usefulness.



15. Mean Imputation


For numerical data, one simple method is:


Mean imputation.


Suppose the observed values are:


20


30


40.


Mean:


(20 + 30 + 40) / 3


=


30.


The missing value can be replaced with:


30.



16. SimpleImputer


Python


from sklearn.impute import SimpleImputer


imputer = SimpleImputer(
    strategy="mean"
)


X_imputed = imputer.fit_transform(
    X
)



17. Median Imputation


Median imputation replaces missing values with the feature median.


Suppose:


10


12


15


100.


The median is:


13.5.


This can be more robust to extreme values than the mean.



18. Python Median Imputation


Python


imputer = SimpleImputer(
    strategy="median"
)


X_imputed = imputer.fit_transform(
    X
)



19. Mean vs Median


Mean:


Sensitive to extreme observations.


Median:


More robust to extreme observations.


For skewed numerical data, median imputation can often be a useful baseline.



20. Most Frequent Imputation


For categorical features, a common strategy is:


Most frequent category.


Python


imputer = SimpleImputer(
    strategy="most_frequent"
)


X_imputed = imputer.fit_transform(
    X
)



21. Constant Imputation


Another strategy is replacing missing values with a constant.


Python


imputer = SimpleImputer(
    strategy="constant",
    fill_value=0
)


X_imputed = imputer.fit_transform(
    X
)


For categorical variables, a value such as:


"Missing"


can sometimes be used.



22. Missing Indicator


Sometimes the fact that a value was missing is itself informative.


A missing indicator creates an additional feature showing whether the original value was missing.


For example:


Original:


Income = NaN.


Indicator:


Income_missing = 1.



23. Python Missing Indicator


Python


imputer = SimpleImputer(
    strategy="median",
    add_indicator=True
)


X_imputed = imputer.fit_transform(
    X
)



24. Why Missingness Can Be Informative


Suppose customers who do not provide a particular financial detail behave differently from customers who provide it.


Replacing the missing value alone may remove information about the missingness pattern.


A missing indicator can preserve that signal.



25. Multivariate Imputation


Simple imputation uses one feature's values to fill its own missing entries.


More advanced approaches use relationships between multiple features.


For example:


Income


Age


Occupation


Education.


The other features can help estimate missing income.



26. KNN Imputation


KNNImputer estimates missing values using nearby observations.


Python


from sklearn.impute import KNNImputer


imputer = KNNImputer(
    n_neighbors=5
)


X_imputed = imputer.fit_transform(
    X
)



27. KNN Imputation Intuition


Suppose an observation is missing:


Income.


Find similar observations using other available features.


Then use their income values to estimate the missing value.


This is more adaptive than simply using the global mean.



28. Iterative Imputation


Iterative imputation repeatedly models one feature using other features.


Python


from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer


imputer = IterativeImputer(
    random_state=42
)


X_imputed = imputer.fit_transform(
    X
)



29. Iterative Imputation Intuition


Suppose:


Age


Income


Education


Experience.


If income is missing, the algorithm can estimate it using:


Age


Education


Experience.


The process can be repeated for other incomplete features.



30. Choosing an Imputation Strategy


Simple approaches:


Mean


Median


Most Frequent


Constant.


More advanced approaches:


KNN


Iterative.


The correct choice depends on:


Data type


Missingness pattern


Dataset size


Computational resources


Domain knowledge.



31. Numerical Data


For numerical features:


Mean


Median


KNN


Iterative methods


may be considered.



32. Categorical Data


For categorical features:


Most frequent


Constant "Missing"


or other carefully designed categorical strategies.


Avoid treating nominal categories as continuous numerical values.



33. Imputation and Scaling


A common numerical pipeline is:


Imputation


→


Scaling.


Python


from sklearn.pipeline import Pipeline


from sklearn.preprocessing import StandardScaler


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



34. Why Imputation Before Scaling?


Scaling requires numerical values.


If missing values remain, many scaling operations cannot be performed normally.


Therefore, missing values are commonly handled before scaling.



35. Imputation and Train/Test Split


Never calculate imputation statistics using the complete dataset before splitting.


Incorrect:


Complete Dataset


→


Calculate Median


→


Train/Test Split.



36. Correct Workflow


Dataset


→


Train/Test Split.


Then:


Fit imputer on training data.


Transform training data.


Transform test data.



37. Python Example


Python


from sklearn.model_selection import train_test_split


X_train, X_test, y_train, y_test = train_test_split(

    X,
    y,
    test_size=0.2,
    random_state=42

)


imputer = SimpleImputer(
    strategy="median"
)


X_train_imputed = imputer.fit_transform(
    X_train
)


X_test_imputed = imputer.transform(
    X_test
)



38. Why This Matters


The test set should represent unseen data.


If its values influence the imputation statistics, the evaluation can become optimistic or otherwise biased.



39. Imputation Inside a Pipeline


Python


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


The pipeline learns preprocessing from the training data during fitting.



40. Missing Values in Categorical Features


A categorical pipeline can use:


Most Frequent Imputation


followed by:


OneHotEncoder.


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



41. Missing Values as a Category


Sometimes missingness itself has meaning.


Instead of replacing missing categories with the most common category, a separate category such as:


"Missing"


can be created.


This preserves the distinction between:


Observed category


and:


Missing category.



42. Missing Indicator with Numeric Features


Python


imputer = SimpleImputer(
    strategy="median",
    add_indicator=True
)


X_train_processed = imputer.fit_transform(
    X_train
)


The output contains:


Imputed features


plus:


Missingness indicators.



43. When Not to Impute Automatically


Do not automatically replace every missing value.


First investigate:


Why is it missing?


How much is missing?


Could missingness be informative?


Will imputation distort the distribution?



44. Distribution Changes


Suppose a feature has:


10


20


30


40


and many missing values.


Replacing every missing value with:


25


creates many identical observations.


This can reduce natural variability.



45. Imputation Bias


Different imputation strategies can introduce different assumptions.


Mean imputation can:


Reduce variance.


Create artificial concentration.


Change correlations.


Therefore, imputation should be evaluated rather than treated as a neutral operation.



46. Experiment


Create a dataset with missing numerical values.


Compare:


Mean


Median


KNN.


Calculate the resulting feature statistics.



47. Experiment: Missing Percentage


Create datasets with:


5% missing.


20% missing.


40% missing.


Compare the effect of different imputation strategies.



48. Experiment: Outliers


Create a feature with an extreme value.


Compare:


Mean imputation.


Median imputation.


Observe how the chosen replacement value changes.



49. Experiment: Missing Indicator


Train a model:


Without missing indicators.


With missing indicators.


Compare the evaluation results.



50. Common Mistakes


Mistake 1:


Dropping every row containing a missing value.


Mistake 2:


Using mean imputation without checking skewness.


Mistake 3:


Fitting the imputer on the complete dataset.


Mistake 4:


Ignoring whether missingness itself contains information.


Mistake 5:


Treating categorical variables as continuous numerical features.


Mistake 6:


Assuming imputation recreates the true missing value.



51. Practice


1. What is a missing value?


2. What is imputation?


3. What is MCAR?


4. What is MAR?


5. What is MNAR?


6. When is median imputation useful?


7. What is KNN imputation?


8. What is a missing indicator?


9. Why should the imputer be fitted only on training data?


10. Why can imputation change the data distribution?



52. Quick Check


Question 1


What is mean imputation?


Answer


Replacing missing numerical values with the feature mean calculated from the fitting data.


Question 2


Why can median imputation be useful?


Answer


It is less sensitive to extreme values than the mean.


Question 3


What does SimpleImputer do?


Answer


It provides common strategies for replacing missing values.


Question 4


Should test data determine the imputation statistic?


Answer


No.


Question 5


Can missingness itself contain useful information?


Answer


Yes, depending on the data-generating process.



53. Summary


Missing values are common in real-world datasets.


They can be represented using values such as NaN.


Common strategies include:


Dropping


Mean imputation


Median imputation


Most frequent imputation


Constant imputation.


More advanced methods include:


KNNImputer


IterativeImputer.


Missing indicators can preserve information about missingness.


Imputation must be fitted only on training data in supervised workflows.


Pipelines provide a safe way to combine imputation with other preprocessing steps.



54. Extended Study


Let a feature contain observations:


x₁,x₂,...,xₙ.


If some values are missing, mean imputation estimates the missing entries using:


μ = (1 / m) Σxᵢ


where m is the number of observed values.


Median imputation instead uses the middle value of the observed distribution.


The important point is that imputation creates an estimated value rather than recovering the unknown true value.



55. Reflection


Before imputing missing values, ask:


How much data is missing?


Why is it missing?


Is the feature numerical or categorical?


Are there extreme values?


Is missingness informative?


Should rows be removed?


Would a missing indicator help?


Could imputation introduce bias?


Is the imputer fitted only on training data?


Should the complete process be placed inside a pipeline?

`

};

export default lesson14;