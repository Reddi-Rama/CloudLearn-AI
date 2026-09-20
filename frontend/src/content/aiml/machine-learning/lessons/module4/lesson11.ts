const lesson11 = {

  id: "lesson11",

  title: "Numerical Feature Engineering",

  content: `

Lesson 11

Numerical Feature Engineering


1. Introduction


Numerical variables are among the most common inputs in machine learning.


Examples:


Age.


Income.


Temperature.


Distance.


Price.


Quantity.


Balance.


Sensor measurements.


Numerical feature engineering transforms these variables into representations that may be more useful for learning.



2. Understanding Numerical Features


Before transforming a numerical feature, inspect:


Range.


Mean.


Median.


Variance.


Standard deviation.


Distribution.


Missing values.


Outliers.



3. Python


print(
    df["income"].describe()
)



4. Distribution


A numerical feature can have different shapes:


Symmetric.


Right-skewed.


Left-skewed.


Multimodal.


Heavy-tailed.



5. Why Distribution Matters


Different distributions may respond differently to:


Scaling.


Log transformation.


Power transformation.


Binning.



6. Central Tendency


Common measures include:


Mean.


Median.


Mode.



7. Mean


The mean is:


μ


=


(Σxᵢ) / n.



8. Median


The median is the middle value after sorting the observations.



9. Mean vs Median


Suppose:


10.


20.


30.


40.


1000.


The mean is strongly influenced by:


1000.


The median is more resistant to this extreme value.



10. Spread


Important measures include:


Range.


Variance.


Standard deviation.


Interquartile range.



11. Variance


Variance measures average squared deviation from the mean.


σ²


=


(Σ(xᵢ - μ)²) / n.


The exact denominator convention can differ depending on whether population or sample variance is being calculated.



12. Standard Deviation


Standard deviation is:


σ = √σ².



13. Range


Range:


Maximum - Minimum.



14. Interquartile Range


IQR:


Q3 - Q1.


It represents the spread of the middle portion of the data.



15. Numerical Feature Transformation


Common transformations include:


Log.


Square root.


Power transformation.


Standardization.


Min-Max scaling.


Robust scaling.



16. Log Transformation


A common transformation for non-negative skewed values is:


x' = log(1 + x).



17. Python


import numpy as np


df["log_income"] = np.log1p(
    df["income"]
)



18. Why Log Transform?


It can:


Reduce right skew.


Compress large values.


Reduce the influence of very large magnitudes.



19. Example


Suppose:


Income values:


20,000.


50,000.


100,000.


1,000,000.


The log transformation reduces the numerical gap between the large values.



20. Square Root Transformation


Python:


df["sqrt_income"] = np.sqrt(
    df["income"]
)



21. When Useful?


Square-root transformation can sometimes reduce skewness while preserving more of the original scale than a logarithm.



22. Reciprocal Transformation


A reciprocal transformation is:


x' = 1/x.


This is only appropriate when the denominator is valid.


Zero values require special handling.



23. Ratio Features


Ratios compare two numerical variables.


Examples:


Debt / Income.


Revenue / Customers.


Distance / Time.



24. Example


Python:


df["revenue_per_customer"] = (

    df["revenue"]

    /

    df["customers"]

)



25. Safe Ratio


Python:


df["revenue_per_customer"] = np.where(

    df["customers"] > 0,

    df["revenue"] /
    df["customers"],

    np.nan

)



26. Difference Features


Differences represent changes between variables.


Examples:


Current Balance - Previous Balance.


Current Temperature - Previous Temperature.



27. Python


df["temperature_change"] = (

    df["current_temperature"]

    -

    df["previous_temperature"]

)



28. Percentage Change


A percentage change can be represented as:


(New - Old) / Old.



29. Python


df["percentage_change"] = (

    (

        df["new_value"]

        -

        df["old_value"]

    )

    /

    df["old_value"]

)



30. Zero Denominator


If:


old_value = 0,


the percentage change is undefined.


Always check denominator values.



31. Clipping


Clipping limits extreme values to specified boundaries.


For example:


Values below 1 → 1.


Values above 99 → 99.



32. Python


df["income_clipped"] = (
    df["income"]
    .clip(
        lower=10000,
        upper=500000
    )
)



33. Why Clip?


Clipping can reduce the influence of extreme values.


However, it changes the original data and should be justified.



34. Winsorization Concept


Winsorization replaces extreme observations with selected percentile boundaries.


It is related to limiting extreme values.



35. Important Caution


Outlier handling should be based on the problem.


An extreme value may be:


An error.


A legitimate observation.


A rare but important case.



36. Quantile Features


A numerical value can be converted into a percentile or quantile position.



37. Example


A customer whose income is in the 90th percentile is higher than approximately 90% of the observations in the reference distribution.



38. Binning


Numerical features can also be converted into ranges.


Example:


Age.


18–30.


31–45.


46–60.



39. Polynomial Features


A numerical variable can generate:


x.


x².


x³.



40. Interaction Features


Two numerical variables can be multiplied:


x₁x₂.



41. Aggregation


Numerical values can be aggregated by an entity.


Examples:


Customer total spending.


Average transaction value.


Maximum purchase.



42. Grouped Statistics


Python:


customer_stats = (
    df.groupby("customer_id")
      ["amount"]
      .agg([
          "mean",
          "sum",
          "min",
          "max",
          "count"
      ])
)



43. Why Grouped Features?


They transform multiple transaction-level observations into summary-level information.



44. Normalization


Normalization is sometimes used to refer broadly to scaling values.


However, terminology can vary.


Always identify the actual mathematical transformation being applied.



45. Standardization


Standardization uses:


z = (x - μ) / σ.



46. Min-Max Scaling


Min-Max scaling uses:


x'


=


(x - x_min)


/


(x_max - x_min).



47. Robust Scaling


Robust scaling uses median and IQR-based statistics.



48. Feature Ratios and Units


Ratios can produce meaningful units.


Example:


Distance / Time


produces:


Distance per unit time.



49. Unit Consistency


Feature engineering should respect units.


For example:


Distance in kilometers.


Time in hours.


Then:


Distance / Time


produces:


km/hour.



50. Why Units Matter


Mixing:


meters


with:


hours


when kilometers were expected


can produce misleading values.



51. Feature Normalization by Entity


A value can sometimes be normalized relative to a group.


Example:


Customer spending.


A transaction can be divided by the customer's historical average.



52. Relative Features


Examples:


Current spending / Average spending.


Current temperature / Historical average temperature.


Current price / Typical price.



53. Rolling Numerical Features


For time-dependent data:


Rolling mean.


Rolling median.


Rolling maximum.


Rolling minimum.



54. Python


df["rolling_mean"] = (

    df["value"]
    .rolling(7)
    .mean()

)



55. Lag-Based Numerical Features


Python:


df["previous_value"] = (
    df["value"].shift(1)
)



56. Numerical Feature Validation


After transformation, check:


Missing values.


Infinite values.


Minimum.


Maximum.


Mean.


Median.



57. Python


print(
    df["feature"].describe()
)


print(
    df["feature"].isna().sum()
)



58. Checking Infinite Values


Python:


print(
    np.isinf(
        df["feature"]
    ).sum()
)



59. Why Infinity Matters


Operations such as:


1 / x


or:


log(x)


can produce invalid numerical values if inputs are not appropriate.



60. Log Domain


For:


log(x),


x must be positive.


Using:


log1p(x),


requires:


x ≥ -1,


although for many feature-engineering applications the feature is non-negative.



61. Feature Scaling After Transformation


A common workflow is:


Transform skewed feature


→


Scale feature.


For example:


Log


→


StandardScaler.



62. Example


Python:


df["log_income"] = np.log1p(
    df["income"]
)


scaler = StandardScaler()


df["log_income_scaled"] = (
    scaler.fit_transform(
        df[["log_income"]]
    )
)



63. Important Pipeline Rule


For production workflows, preprocessing should be placed inside a pipeline when possible.



64. Numerical Pipeline


Python:


from sklearn.pipeline import Pipeline


from sklearn.preprocessing import (
    StandardScaler
)


from sklearn.linear_model import Ridge


pipeline = Pipeline([

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        Ridge(alpha=1.0)
    )

])



65. Numerical Features and Models


Different models respond differently to numerical representations.


Distance-based models:


Usually sensitive to scale.


Linear models:


Can benefit from meaningful transformations.


Tree models:


Generally less dependent on feature scaling.



66. Feature Transformation and Distribution


A useful transformation may make the relationship between feature and target easier to model.


For example:


log(x)


can make a multiplicative relationship more linear in some contexts.



67. Multiplicative Relationship


Suppose:


y = a × xᵇ.


Taking logarithms gives:


log(y)


=


log(a)


+


b log(x).


This converts a power relationship into a linear relationship in log space.



68. Important Caution


Mathematical transformation does not guarantee a better model.


Always validate empirically.



69. Experiment


Create a skewed numerical feature.


Compare:


Raw.


Log transformed.


Square-root transformed.



70. Experiment 2


Compare:


StandardScaler.


MinMaxScaler.


RobustScaler.



71. Experiment 3


Add an extreme observation.


Compare the effect of:


StandardScaler.


MinMaxScaler.


RobustScaler.



72. Experiment 4


Create:


Ratio.


Difference.


Percentage change.


Compare their usefulness in a prediction task.



73. Experiment 5


Create grouped statistics:


Mean.


Median.


Sum.


Count.


Compare a model with and without these features.



74. Common Mistakes


Mistake 1:


Applying log to invalid values.


Mistake 2:


Ignoring division by zero.


Mistake 3:


Ignoring units.


Mistake 4:


Treating every extreme value as an error.


Mistake 5:


Creating features without validation.


Mistake 6:


Fitting transformations using evaluation data.



75. Practice


1. What is numerical feature engineering?


2. Why can log transformation help?


3. What is standardization?


4. What is robust scaling?


5. What is a ratio feature?


6. Why must units be considered?


7. Why should transformed features be validated?



76. Quick Check


Question 1


Why can log transformation be useful?


Answer


It can reduce skewness and compress large numerical values.


Question 2


What is a ratio feature?


Answer


A feature created by dividing one meaningful quantity by another.


Question 3


Why should extreme values not automatically be removed?


Answer


Because an extreme observation may be a legitimate and important part of the underlying problem.



77. Summary


Numerical feature engineering includes:


Transformations.


Ratios.


Differences.


Percent changes.


Aggregations.


Clipping.


Binning.


Polynomial features.


Interactions.


Scaling.


Good numerical features should:


Have a meaningful interpretation.


Be mathematically valid.


Avoid leakage.


Be available during prediction.


Be validated on appropriate data.



78. Extended Study


A numerical feature transformation can be represented as:


z = φ(x).


Examples:


φ(x) = log(1+x).


φ(x) = √x.


φ(x) = x².


φ(x) = (x-μ)/σ.


Feature engineering searches for representations that make useful patterns easier for a model to learn.



79. Reflection


Before transforming a numerical feature, ask:


What is its distribution?


Are there outliers?


Are there zeros?


Are there negative values?


Does a log transformation make sense?


Would scaling help?


Can I create a meaningful ratio?


Can I create a useful difference?


Does the transformation preserve information needed for prediction?

`

};

export default lesson11;