const lesson12 = {

  id: "lesson12",

  title: "Handling Outliers",

  content: `

Lesson 12

Handling Outliers


1. Introduction


Real-world datasets often contain observations that are unusually large or unusually small compared with most other observations.


These observations are commonly called:


Outliers.


Examples:


A transaction worth far more than typical transactions.


An unusually high sensor reading.


An extremely long delivery time.


A very large income value.



2. What Is an Outlier?


An outlier is an observation that differs substantially from the general pattern of the data.


There is no single universal definition of an outlier.


Whether a value is considered unusual depends on:


The dataset.


The domain.


The measurement process.


The modeling objective.



3. Example


Suppose the following transaction values are:


100


120


110


130


125


5000.


The value:


5000


is much larger than the other observations.


It may be an outlier.



4. Important Question


An unusual value is not automatically an error.


It may represent:


A data-entry mistake.


A measurement problem.


A rare legitimate event.


A genuinely important observation.



5. Why Outliers Matter


Outliers can affect:


Mean.


Variance.


Scaling.


Regression models.


Distance calculations.


Clustering.


Visualization.



6. Mean Sensitivity


Suppose:


10


20


30.


Mean:


20.


Now add:


1000.


The mean changes dramatically.


This shows that the mean is sensitive to extreme values.



7. Median


The median is generally more resistant to extreme observations.


This makes it useful when describing data containing unusual values.



8. Outliers and StandardScaler


StandardScaler uses:


Mean.


Standard deviation.


Therefore, extreme values can influence the scaling parameters.



9. Outliers and MinMaxScaler


MinMaxScaler uses:


Minimum.


Maximum.


An extreme observation can strongly affect the resulting scale.



10. RobustScaler


RobustScaler uses:


Median.


Interquartile Range.


This makes it less sensitive to extreme values.



11. Interquartile Range


The interquartile range is:


IQR = Q3 - Q1.


Where:


Q1 = first quartile.


Q3 = third quartile.



12. IQR Outlier Rule


A common statistical rule identifies potential outliers using:


Lower Boundary


=


Q1 - 1.5 × IQR.


Upper Boundary


=


Q3 + 1.5 × IQR.



13. Important Interpretation


Values outside these boundaries are:


Potential outliers.


They are not automatically incorrect observations.



14. Python


Q1 = df["income"].quantile(
    0.25
)


Q3 = df["income"].quantile(
    0.75
)


IQR = Q3 - Q1


lower = (
    Q1 - 1.5 * IQR
)


upper = (
    Q3 + 1.5 * IQR
)


outliers = df[

    (df["income"] < lower)

    |

    (df["income"] > upper)

]


print(
    outliers
)



15. Boxplot


A boxplot is a useful visual tool for identifying potentially unusual observations.



16. Python


import matplotlib.pyplot as plt


plt.boxplot(
    df["income"].dropna()
)


plt.ylabel(
    "Income"
)


plt.title(
    "Income Distribution"
)


plt.show()



17. What a Boxplot Shows


A boxplot commonly displays:


Median.


First quartile.


Third quartile.


Whiskers.


Potential extreme observations.



18. Z-Score Approach


Another approach is based on standard deviation.


The standardized value is:


z = (x - μ) / σ.



19. Example


Suppose:


Mean = 50.


Standard deviation = 10.


Value = 90.


Then:


z = (90 - 50) / 10


= 4.



20. Interpretation


A large absolute z-score indicates that the observation is far from the mean in standard-deviation units.



21. Important Caution


The z-score approach itself depends on:


Mean.


Standard deviation.


Both can be influenced by extreme observations.


Therefore, it should not be treated as a universal outlier detector.



22. Domain-Based Detection


Domain rules can be more meaningful than generic statistical rules.


For example:


A temperature sensor may have a physically valid range.


A person's age cannot reasonably be negative.


A product quantity may have a known operational limit.



23. Example


Suppose:


Age = -20.


This is not merely statistically unusual.


It is logically invalid under the intended definition of age.



24. Data Error vs Rare Event


Suppose an e-commerce order contains:


Quantity = 10,000.


It may be:


A data-entry error.


A wholesale order.


A legitimate bulk transaction.


The domain determines the correct interpretation.



25. Approaches to Outliers


Common approaches include:


Keep.


Remove.


Cap.


Transform.


Use robust methods.


Create an indicator.



26. Keeping Outliers


Sometimes the best approach is:


Do nothing.


If the observation is valid and important, removing it can destroy useful information.



27. Removing Outliers


Outliers may be removed when:


They are confirmed data errors.


They come from corrupted measurements.


They are impossible under the domain rules.



28. Example


If a sensor records:


Temperature = 900°C


when the device can only measure:


-40°C to 125°C,


the value may represent a sensor error.



29. Capping


Capping replaces extreme values with selected boundaries.


For example:


Values above the 99th percentile


→


99th percentile.



30. Python


upper_limit = (
    df["income"]
    .quantile(0.99)
)


df["income_capped"] = (
    df["income"]
    .clip(
        upper=upper_limit
    )
)



31. Lower Capping


Python


lower_limit = (
    df["income"]
    .quantile(0.01)
)


df["income_capped"] = (
    df["income"]
    .clip(
        lower=lower_limit,
        upper=upper_limit
    )
)



32. Why Cap?


Capping reduces the influence of extreme values while retaining the observation itself.



33. Drawback of Capping


Capping changes the original values.


Therefore, it should be documented and justified.



34. Log Transformation


For suitable non-negative variables, a logarithmic transformation can reduce the influence of very large values.


Formula:


x' = log(1 + x).



35. Python


import numpy as np


df["log_income"] = np.log1p(
    df["income"]
)



36. Why Log Transformation?


It compresses large values.


For example:


The difference between:


100


and:


1000


becomes less extreme after transformation.



37. Robust Scaling


Instead of changing the original values, a robust scaler can reduce the influence of outliers on scaling parameters.



38. Python


from sklearn.preprocessing import (
    RobustScaler
)


scaler = RobustScaler()


X_scaled = scaler.fit_transform(
    X
)



39. Outlier Indicator


Sometimes the fact that an observation is unusual is itself useful.


We can create:


is_outlier.


Python


df["is_income_outlier"] = (

    (

        df["income"] < lower

    )

    |

    (

        df["income"] > upper

    )

).astype(int)



40. Why Use an Outlier Indicator?


The model can receive both:


Original value.


Outlier status.



41. Winsorization


Winsorization replaces values beyond selected percentile limits.


For example:


Below 1st percentile


→


1st percentile.


Above 99th percentile


→


99th percentile.



42. When to Use Robust Methods


Robust methods can be useful when:


Outliers are legitimate.


The distribution is heavy-tailed.


Extreme observations should not dominate preprocessing.



43. Outliers in Linear Regression


Ordinary least-squares regression can be sensitive to unusual observations because large errors are squared.



44. Squared Error


The loss contains terms such as:


(y - ŷ)².


A large error therefore receives disproportionately large influence.



45. Robust Regression


Some regression methods use losses that are less sensitive to extreme residuals.


These methods can be useful when outliers are expected and meaningful.



46. Outliers and k-Means


k-Means uses distances to centroids.


An extreme observation can pull a centroid toward itself.



47. Outliers and DBSCAN


DBSCAN explicitly identifies some observations as:


Noise.


This makes it useful for certain datasets containing unusual points.



48. Outliers and PCA


PCA is based on variance and covariance.


Extreme observations can strongly affect the estimated directions of maximum variance.



49. Outliers and Distance-Based Models


Distance-based algorithms can be strongly influenced by extreme values because distances depend on numerical magnitudes.



50. Outlier Detection vs Outlier Treatment


Detection:


Identify unusual observations.


Treatment:


Decide what to do with them.



51. Important Principle


Do not automatically:


Detect


→


Delete.


The correct workflow is:


Detect


→


Investigate


→


Understand


→


Choose treatment.



52. Missing Values


Outlier handling can interact with missing-value handling.


For example:


An invalid measurement may be converted into:


NaN.


The missing value can then be processed through an imputation strategy.



53. Train/Test Consideration


Outlier thresholds should be determined using appropriate training data when they become part of a predictive preprocessing pipeline.



54. Why?


Using evaluation data to determine clipping thresholds or distribution statistics can introduce information leakage.



55. Pipeline Approach


Outlier handling can be implemented as a reusable transformation.


For example:


Custom Transformer


→


Scaling


→


Model.



56. Custom Transformer Concept


A custom transformer can:


Learn thresholds during fit.


Apply the same thresholds during transform.



57. Experiment


Create a dataset containing:


Normal values.


Several extreme values.


Compare:


Original.


Capped.


Log-transformed.


Robust-scaled.



58. Experiment 2


Train a regression model:


With outliers.


After removing confirmed errors.


After capping.


Compare validation metrics.



59. Experiment 3


Train k-Means:


Without outlier treatment.


With appropriate outlier handling.


Compare cluster centers.



60. Experiment 4


Apply PCA:


Before handling extreme values.


After using an appropriate robust strategy.


Compare the resulting components.



61. Common Mistakes


Mistake 1:


Deleting every unusual observation.


Mistake 2:


Assuming statistical outliers are errors.


Mistake 3:


Ignoring domain knowledge.


Mistake 4:


Calculating thresholds using evaluation data.


Mistake 5:


Capping values without documenting the rule.


Mistake 6:


Ignoring the effect of outliers on the selected algorithm.



62. Practice


1. What is an outlier?


2. Why can outliers affect the mean?


3. What is the IQR?


4. What is the 1.5 × IQR rule?


5. Why should outliers not automatically be removed?


6. What is capping?


7. Why can RobustScaler help?



63. Quick Check


Question 1


Is every outlier an error?


Answer


No. An outlier can be a valid and important observation.


Question 2


What does IQR represent?


Answer


The difference between the third and first quartiles.


Question 3


Why can k-Means be sensitive to outliers?


Answer


Because it uses distances and centroids can be influenced by extreme observations.



64. Summary


Outliers are unusual observations whose interpretation depends on the context.


Common detection approaches include:


IQR.


Z-scores.


Boxplots.


Domain rules.


Treatment options include:


Keep.


Remove confirmed errors.


Cap.


Transform.


Use robust methods.


Create indicators.


The most important principle is:


Investigate before changing the data.



65. Extended Study


Outlier handling is fundamentally a modeling decision.


The same observation can be:


Useful for one task.


Problematic for another.


For example, an unusually large transaction may be exactly the observation a fraud-detection system needs to identify.


Therefore, the goal is not to make every dataset look perfectly normal.


The goal is to produce a representation appropriate for the prediction problem.



66. Reflection


When you find an unusual value, ask:


Is it valid?


Is it physically possible?


Is it a measurement error?


Is it a data-entry error?


Could it represent an important rare event?


Does my model depend strongly on extreme values?


Should I transform, cap, remove, or retain it?


Can the decision be reproduced during prediction?

`

};

export default lesson12;