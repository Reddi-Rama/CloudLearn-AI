const lesson2 = {

  id: "lesson2",

  title: "Creating and Transforming Features",

  content: `

Lesson 02

Creating and Transforming Features


1. Introduction


Feature engineering often begins with two operations:


Creating new features.


Transforming existing features.


The purpose is to produce representations that contain useful information for the machine learning algorithm.



2. Feature Creation


Feature creation means constructing a new variable from existing information.


Examples:


Total Amount


Average Amount


Age


Ratio


Difference


Count


Indicator.



3. Simple Mathematical Feature


Suppose a dataset contains:


Length


Width.


We can create:


Area.


Formula:


Area = Length × Width.



4. Python Example


Python


import pandas as pd


df = pd.DataFrame({

    "length": [
        2,
        4,
        6
    ],

    "width": [
        3,
        5,
        7
    ]

})


df["area"] = (
    df["length"]
    *
    df["width"]
)


print(
    df
)



5. Feature Interpretation


The original features:


Length


Width.


The engineered feature:


Area.


The new feature represents a meaningful relationship between the original variables.



6. Addition and Difference


Suppose a financial dataset contains:


Revenue


Cost.


We can create:


Profit.


Formula:


Profit = Revenue - Cost.



7. Python


df["profit"] = (
    df["revenue"]
    -
    df["cost"]
)



8. Ratios


A ratio compares two quantities.


Examples:


Profit Margin


Debt-to-Income Ratio


Conversion Rate


Click-Through Rate.



9. Profit Margin


Formula:


Profit Margin


=


Profit / Revenue.


Python


df["profit_margin"] = (

    df["profit"]
    /
    df["revenue"]

)



10. Handling Zero Denominators


If revenue is zero, the calculation becomes invalid.


A safer implementation:


Python


import numpy as np


df["profit_margin"] = np.where(

    df["revenue"] != 0,

    df["profit"] / df["revenue"],

    np.nan

)



11. Indicator Features


An indicator converts a condition into a binary variable.


For example:


High Income.


Python


df["high_income"] = (
    df["income"] >= 100000
).astype(int)



12. Output


The feature contains:


0


or:


1.


It represents whether the condition is satisfied.



13. Why Indicator Features Help


A threshold can encode domain knowledge.


For example:


High temperature


High balance


Late payment


Weekend


Returning customer.



14. Threshold Features


Suppose:


Age ≥ 18.


We can create:


adult.


Python


df["adult"] = (
    df["age"] >= 18
).astype(int)



15. Multiple Thresholds


A continuous feature can be converted into categories.


Example:


Income:


Low


Medium


High.



16. Feature Binning


Binning divides numerical values into intervals.


For example:


0–20


21–40


41–60.


Binning is useful when ranges have meaningful interpretation.



17. Aggregated Features


Suppose transaction-level data contains:


Customer ID


Amount.


We can calculate:


Total spending per customer.



18. Python


customer_total = (
    df
    .groupby("customer_id")[
        "amount"
    ]
    .sum()
)


print(
    customer_total
)



19. Average Features


Python


customer_average = (
    df
    .groupby("customer_id")[
        "amount"
    ]
    .mean()
)



20. Count Features


Python


customer_count = (
    df
    .groupby("customer_id")[
        "amount"
    ]
    .count()
)



21. Aggregation Features


Common aggregations:


sum


mean


median


min


max


count


standard deviation.



22. Why Aggregation Matters


A customer may have hundreds of transactions.


A model may benefit from customer-level features such as:


Total spending.


Average transaction value.


Number of transactions.


Maximum purchase.



23. Recency Features


A useful behavioral feature is:


Days since last activity.


For example:


Today


minus


Last Purchase Date.



24. Frequency Features


Frequency measures how often an event occurs.


Examples:


Purchases per month.


Logins per week.


Orders per quarter.



25. Monetary Features


Monetary features describe spending.


Examples:


Total spending.


Average order value.


Maximum order.


Median order value.



26. RFM Concept


A common customer-analysis representation is:


Recency


Frequency


Monetary.


Recency:


How recently did the customer purchase?


Frequency:


How often did they purchase?


Monetary:


How much did they spend?



27. Transformation


Transformation changes an existing feature's representation.


Examples:


Log transformation.


Square root transformation.


Standardization.


Min-Max scaling.


Power transformations.



28. Log Transformation


For positive or non-negative data:


x' = log(1 + x).


Python


import numpy as np


df["log_income"] = np.log1p(
    df["income"]
)



29. Why Log Transformation?


It can:


Reduce right skew.


Compress large values.


Make distributions easier for some models to work with.



30. Example


Original values:


10


100


1000


10000.


After logarithmic transformation, the relative spacing between very large values is compressed.



31. Square Root Transformation


Another transformation is:


x' = √x.


Python


df["sqrt_amount"] = np.sqrt(
    df["amount"]
)



32. When Can It Help?


Square-root transformation can sometimes reduce skewness while being less aggressive than a logarithmic transformation.



33. Polynomial Transformation


A numerical feature can be expanded:


x


→


x²


→


x³.


Python


df["age_squared"] = (
    df["age"] ** 2
)



34. Why Polynomial Features?


They allow some models, especially linear models, to represent nonlinear relationships.



35. Interaction Features


Two features can be multiplied:


x₁ × x₂.


Python


df["income_age"] = (
    df["income"]
    *
    df["age"]
)



36. Interpretation


An interaction feature can represent situations where the effect of one variable depends on another.



37. Centering


A feature can be centered around its mean:


x' = x - μ.


Python


df["income_centered"] = (
    df["income"]
    -
    df["income"].mean()
)



38. Why Center?


Centering changes the reference point of a variable.


The transformed feature has a mean approximately equal to zero.



39. Standardization


Standardization transforms:


x


into:


z = (x - μ) / σ.



40. Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)



41. Min-Max Transformation


The common Min-Max transformation is:


x' = (x - min(x))


/


(max(x) - min(x)).



42. Python


from sklearn.preprocessing import MinMaxScaler


scaler = MinMaxScaler()


X_scaled = scaler.fit_transform(
    X
)



43. Transformation and Model Choice


Some transformations are especially useful for certain algorithms.


For example:


Distance-based models can be sensitive to scale.


Linear models may benefit from nonlinear feature construction.


Tree models are generally less sensitive to monotonic scaling.



44. Combining Features


Features can be combined in many ways.


Examples:


Total = A + B.


Difference = A - B.


Ratio = A / B.


Product = A × B.



45. Cumulative Features


For sequential data, cumulative statistics can be useful.


Examples:


Cumulative purchases.


Cumulative revenue.


Running average.



46. Rolling Features


For time-dependent data, rolling statistics can summarize recent behavior.


Examples:


7-day average.


30-day total.


14-day maximum.



47. Important Temporal Rule


When predicting at time:


t,


a rolling feature should only use information available at or before the prediction time, depending on the prediction setup.


Future observations must not be included.



48. Example


To predict tomorrow's sales:


Valid:


Previous 7-day average sales.


Invalid:


Average sales including tomorrow.



49. Feature Transformation with pandas


Pandas provides many operations:


assign


apply


map


replace


groupby


transform.


These can be combined to construct features.



50. Example Using assign


Python


df = df.assign(

    profit=lambda data:
        data["revenue"]
        -
        data["cost"],

    margin=lambda data:
        data["profit"]
        /
        data["revenue"]

)



51. Feature Mapping


Categorical values can sometimes be mapped to meaningful representations.


Python


education_map = {

    "School": 1,

    "College": 2,

    "Graduate": 3

}


df["education_level"] = (
    df["education"]
    .map(education_map)
)



52. Important Caution


Mapping categories to numbers is appropriate only when the numerical order represents meaningful order.


For nominal categories such as:


City,


arbitrary numeric codes can introduce misleading relationships.



53. Date Feature Creation


Python


df["date"] = pd.to_datetime(
    df["date"]
)


df["year"] = (
    df["date"].dt.year
)


df["month"] = (
    df["date"].dt.month
)


df["day"] = (
    df["date"].dt.day
)



54. Additional Date Features


Python


df["weekday"] = (
    df["date"].dt.dayofweek
)


df["quarter"] = (
    df["date"].dt.quarter
)


df["is_weekend"] = (
    df["weekday"] >= 5
).astype(int)



55. Why These Features Matter


A model may behave differently depending on:


Month.


Weekday.


Quarter.


Weekend.


Season.



56. Feature Creation from Text


Simple text features can include:


Character count.


Word count.


Number of digits.


Number of punctuation marks.



57. Word Count Example


Python


df["word_count"] = (
    df["text"]
    .fillna("")
    .str.split()
    .str.len()
)



58. Character Count


Python


df["char_count"] = (
    df["text"]
    .fillna("")
    .str.len()
)



59. Feature Creation from Categories


Possible features:


Category frequency.


Rare-category indicator.


Number of categories per entity.


Category combinations.



60. Frequency Encoding


Suppose:


City


contains:


Mumbai


Delhi


Chennai.


We can calculate how frequently each category occurs.


Python


frequency = (
    df["city"]
    .value_counts()
)


df["city_frequency"] = (
    df["city"]
    .map(frequency)
)



61. Important Leakage Consideration


When building a predictive model, frequency statistics should be calculated using the appropriate training data rather than blindly using the entire dataset.


Otherwise, information from evaluation data may influence the representation.



62. Feature Engineering and Pipelines


Feature creation can be placed into reusable transformations.


For example:


Custom Transformer


→


Scaling


→


Model.



63. Custom Transformer Concept


scikit-learn allows custom transformations using:


BaseEstimator


TransformerMixin.



64. Python


from sklearn.base import (
    BaseEstimator,
    TransformerMixin
)


class AddRatioFeature(
    BaseEstimator,
    TransformerMixin
):

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
            X["a"]
            /
            X["b"]
        )

        return X



65. Why Custom Transformers?


They allow feature engineering to become part of a reproducible machine learning pipeline.



66. Experiment


Create a dataset containing:


Revenue


Cost.


Engineer:


Profit.


Profit Margin.


Train a model:


Without engineered features.


With engineered features.


Compare the results.



67. Experiment: Date Features


Use a sales dataset containing:


Date


Sales.


Create:


Month


Weekday


Quarter


Weekend.



68. Experiment: Aggregation


Create transaction-level data.


Generate customer-level:


Total


Mean


Count


Maximum.


Compare the resulting representation.



69. Experiment: Log Transformation


Create a skewed numerical feature.


Compare:


Original.


Log transformed.


Plot both distributions.



70. Common Mistakes


Mistake 1:


Creating features without checking their meaning.


Mistake 2:


Using future information.


Mistake 3:


Dividing by zero.


Mistake 4:


Encoding nominal categories with arbitrary numbers.


Mistake 5:


Creating excessive features.


Mistake 6:


Calculating aggregate statistics using evaluation data.



71. Practice


1. What is feature creation?


2. What is feature transformation?


3. What is a ratio feature?


4. What is an indicator feature?


5. What is an aggregation feature?


6. What is a rolling feature?


7. Why can log transformation be useful?


8. Why can arbitrary category encoding be dangerous?



72. Quick Check


Question 1


What is a ratio feature?


Answer


A feature created by dividing one quantity by another meaningful quantity.


Question 2


What is a rolling feature?


Answer


A feature calculated over a moving window of observations, often in time-based data.


Question 3


Why are future observations dangerous?


Answer


They can introduce information that would not be available when the prediction is made.


Question 4


What does log1p(x) calculate?


Answer


log(1 + x).



73. Summary


Feature creation can use:


Mathematical operations


Aggregations


Thresholds


Ratios


Dates


Text


Categories.


Feature transformation changes the representation of existing values.


Useful transformations include:


Logarithm


Square root


Standardization


Min-Max scaling.


Every transformation should be validated for correctness and leakage.



74. Extended Study


A powerful feature-engineering workflow can combine several transformations:


X


→


Feature Creation


→


Feature Transformation


→


Feature Selection


→


Model.


For example:


Revenue


Cost


Date


Customer ID


can become:


Profit


Margin


Month


Customer-level spending


and transaction frequency.


The resulting representation may contain much more useful information than the original raw columns.



75. Reflection


Before creating or transforming a feature, ask:


What does it represent?


What information does it add?


Is it mathematically valid?


Can it contain extreme values?


Can it introduce leakage?


Can it be reproduced for new data?


Does it improve the model?

`

};

export default lesson2;