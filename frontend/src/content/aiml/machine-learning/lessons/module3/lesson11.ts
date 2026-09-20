const lesson11 = {

  id: "lesson11",

  title: "Preprocessing Numerical Data",

  content: `

Lesson 11

Preprocessing Numerical Data


1. Introduction to Numerical Data Preprocessing


Machine learning algorithms usually require numerical input.


However, raw numerical data is often not immediately suitable for modeling.


Real datasets can contain:


Different units


Different scales


Missing values


Outliers


Skewed distributions


Invalid values


Extreme ranges.


Numerical preprocessing prepares these values for machine learning algorithms.



2. Example


Consider a dataset containing:


Age


Income


Account Balance


Transaction Count.


The values may have very different ranges.


Age:


18–80.


Income:


10,000–2,000,000.


Transaction Count:


0–500.


A distance-based algorithm may be strongly influenced by income because its numerical scale is much larger.



3. Why Scale Matters


Suppose two observations are:


A = (20, 100000)


B = (25, 120000).


The second feature can dominate Euclidean distance.


The algorithm may interpret income differences as much more important simply because the numbers are larger.



4. Numerical Preprocessing Pipeline


A common process is:


Raw Numerical Data


↓

Inspect


↓

Handle Missing Values


↓

Detect Outliers


↓

Transform


↓

Scale


↓

Validate


↓

Model.



5. Inspect Numerical Data


Python


import pandas as pd


df = pd.DataFrame({

    "age": [
        20,
        25,
        30,
        35,
        40
    ],

    "income": [
        25000,
        32000,
        45000,
        60000,
        80000
    ]

})


print(
    df
)



6. Check Data Types


Python


print(
    df.dtypes
)


Numerical features should normally have appropriate numerical data types.



7. Summary Statistics


Python


print(
    df.describe()
)


This provides information such as:


Count


Mean


Standard deviation


Minimum


Quartiles


Maximum.



8. Why Summary Statistics Matter


Summary statistics can reveal:


Unexpected ranges


Extreme values


Large differences between scales


Potential missing values.



9. Missing Values


A numerical dataset may contain missing observations.


For example:


Age


20


25


NaN


31.


Missing values need to be handled before many machine learning algorithms are applied.



10. Detect Missing Values


Python


print(
    df.isna().sum()
)


This counts missing values in each column.



11. Mean Imputation


One simple strategy is:


Replace missing values with the mean.


Python


from sklearn.impute import SimpleImputer


imputer = SimpleImputer(
    strategy="mean"
)


X_imputed = imputer.fit_transform(
    df
)



12. Median Imputation


Median can be more robust when extreme values exist.


Python


imputer = SimpleImputer(
    strategy="median"
)


X_imputed = imputer.fit_transform(
    df
)



13. Mean vs Median


Mean:


Sensitive to extreme values.


Median:


More robust to extreme values.


Therefore, the appropriate method depends on the distribution of the feature.



14. Scaling


Scaling changes the numerical range or distribution of features.


Two common approaches are:


Standardization


Min-Max Scaling.



15. Standardization


Standardization transforms a feature approximately according to:


z = (x - μ) / σ.


Where:


x


is the original value.


μ


is the feature mean.


σ


is the feature standard deviation.



16. StandardScaler


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)



17. Result of Standardization


After standardization, a feature generally has approximately:


Mean = 0


Standard deviation = 1.


The exact sample statistics depend on the implementation and data.



18. Why Standardization Helps


Standardization can be useful for:


k-Means


k-Nearest Neighbors


Support Vector Machines


PCA


Logistic Regression with regularization


Neural networks.


It is especially important for algorithms that depend on distances or feature magnitudes.



19. Min-Max Scaling


Min-Max scaling maps a feature into a selected interval.


A common formula is:


x' = (x - x_min)


/


(x_max - x_min).



20. MinMaxScaler


Python


from sklearn.preprocessing import MinMaxScaler


scaler = MinMaxScaler()


X_scaled = scaler.fit_transform(
    X
)



21. Typical Range


By default, MinMaxScaler transforms values approximately into:


0


to:


1.


This can be useful when a bounded numerical range is desirable.



22. Standardization vs Min-Max Scaling


Standardization:


Centers around zero.


Uses standard deviation.


Does not force values into a fixed range.


Min-Max:


Maps values into a selected range.


Depends on minimum and maximum values.



23. Robust Scaling


RobustScaler uses statistics that are less affected by extreme values.


It commonly uses:


Median


and:


Interquartile Range.


Python


from sklearn.preprocessing import RobustScaler


scaler = RobustScaler()


X_scaled = scaler.fit_transform(
    X
)



24. When Robust Scaling Can Help


Suppose a feature contains:


10


12


11


13


5000.


The extreme value:


5000


can strongly affect mean and standard deviation.


Robust scaling can reduce the influence of such extreme values during scaling.



25. Power Transformations


Some numerical variables are highly skewed.


A transformation can make their distribution more suitable for modeling.


scikit-learn provides:


PowerTransformer.



26. Log Transformation


For positive values, a logarithmic transformation can reduce right skew.


A common form is:


x' = log(1 + x).


The addition of:


1


allows zero values to be transformed.



27. Python Log Transformation


Python


import numpy as np


x_log = np.log1p(
    x
)


This can be useful for heavily right-skewed positive variables such as some income or count features.



28. Quantile Transformation


Another approach is:


QuantileTransformer.


It can transform a feature based on its empirical distribution.


This can make the resulting distribution closer to:


Uniform


or:


Normal.



29. Numerical Feature Distributions


Before choosing a transformation, inspect the distribution.


Python


import matplotlib.pyplot as plt


plt.hist(
    df["income"],
    bins=10
)


plt.xlabel(
    "Income"
)


plt.ylabel(
    "Frequency"
)


plt.title(
    "Income Distribution"
)


plt.show()



30. Skewness


A distribution is:


Right-skewed


when a long tail extends toward larger values.


It is:


Left-skewed


when a longer tail extends toward smaller values.



31. Why Skewness Matters


Strong skew can affect:


Distance calculations


Linear models


Optimization


Visualization.


Transformation can sometimes produce a more useful numerical representation.



32. Outliers


An outlier is an observation that is unusually distant from the majority of the data under some definition.


Example:


10


12


11


13


1000.


The value:


1000


may require investigation.



33. Outlier Detection with IQR


The interquartile range is:


IQR = Q3 - Q1.


A common rule identifies observations below:


Q1 - 1.5 × IQR


or above:


Q3 + 1.5 × IQR


as potential outliers.



34. Python IQR


Python


Q1 = df["income"].quantile(
    0.25
)


Q3 = df["income"].quantile(
    0.75
)


IQR = Q3 - Q1


lower = Q1 - 1.5 * IQR


upper = Q3 + 1.5 * IQR


print(
    "Lower:",
    lower
)


print(
    "Upper:",
    upper
)



35. Outlier Handling


Possible approaches include:


Investigate


Remove


Cap


Transform


Use robust methods.


The correct choice depends on why the observation exists.



36. Important Warning


An outlier is not automatically an error.


For example:


A very large transaction may be a legitimate transaction.


Removing it without understanding the domain can destroy useful information.



37. Numerical Feature Selection


Not every numerical column should necessarily be used.


Examples of columns that may need exclusion:


Identifiers


Transaction IDs


Row numbers.


An ID may contain numbers but have no meaningful numerical relationship to the target.



38. Example


Suppose:


customer_id


values are:


101


102


103.


Treating these values as continuous measurements would be incorrect.


The identifier is a label, not a meaningful numerical quantity.



39. Data Leakage


Preprocessing must be performed carefully.


For supervised learning:


Split data first.


Then fit preprocessing transformations using training data.


For example:


Train/Test Split


→


Fit Scaler on Training Data


→


Transform Train


→


Transform Test.



40. Incorrect Workflow


A problematic workflow is:


Complete Dataset


→


Fit Scaler


→


Train/Test Split.


The scaler has already seen information from the test set.



41. Correct Workflow


Use:


Train/Test Split


↓

Fit transformation on training data


↓

Transform training data


↓

Transform test data.


This keeps the test set independent during model development.



42. Pipeline


scikit-learn pipelines make this process easier.


Python


from sklearn.pipeline import Pipeline


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
    )

])


X_processed = pipeline.fit_transform(
    X_train
)



43. Complete Preprocessing


A typical numerical preprocessing sequence can be:


Missing Value Handling


→


Transformation


→


Scaling.


The exact order can depend on the transformation and application.



44. Example Dataset


Python


from sklearn.datasets import load_diabetes


data = load_diabetes()


X = data.data
y = data.target


print(
    X.shape
)



45. Standardize Diabetes Data


Python


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


print(
    X_scaled.mean()
)


print(
    X_scaled.std()
)


The overall mean and standard deviation across all entries should be near zero and one respectively, although feature-wise statistics are the important interpretation.



46. Feature-Wise Statistics


Python


print(
    X_scaled.mean(
        axis=0
    )
)


print(
    X_scaled.std(
        axis=0
    )


)


Each feature should be approximately centered and scaled.



47. Numerical Data and Distance


Consider:


k-NN.


It uses distances.


If one feature has a much larger scale, it can dominate the distance calculation.


Therefore:


Scaling


is often essential.



48. Numerical Data and PCA


PCA is also sensitive to feature scale.


If one feature has much larger variance simply because of its units, it may dominate the principal components.


Standardization is therefore commonly performed before PCA.



49. Numerical Data and Regularization


Regularized models such as:


Ridge


and:


Lasso


penalize coefficient magnitudes.


Feature scaling makes coefficient magnitudes more comparable and makes regularization behave more consistently across features.



50. Numerical Data and Tree Models


Decision trees split features using thresholds.


They generally do not require standardization in the same way distance-based models do.


This is an important example of why preprocessing should depend on the algorithm.



51. Comparison


Distance-Based Models:


Usually benefit strongly from scaling.


PCA:


Usually requires careful scaling.


Linear Regularized Models:


Usually benefit from scaling.


Tree-Based Models:


Usually do not require scaling.



52. Experiment


Create a dataset with two numerical features having very different scales.


Train:


k-NN


before scaling.


Then train:


k-NN


after scaling.


Compare the predictions and evaluation score.



53. Experiment: Different Scalers


Compare:


StandardScaler


MinMaxScaler


RobustScaler.


Use the same model and dataset.


Observe how the transformed values differ.



54. Experiment: Skewed Data


Create a highly right-skewed numerical feature.


Compare:


Raw


Log transformed.


Plot both distributions.



55. Experiment: Outliers


Create a dataset with an extreme observation.


Compare:


StandardScaler


and:


RobustScaler.


Observe the transformed values.



56. Common Mistakes


Mistake 1:


Scaling before train/test splitting.


Mistake 2:


Treating IDs as numerical features.


Mistake 3:


Removing every outlier automatically.


Mistake 4:


Using the same preprocessing strategy for every algorithm.


Mistake 5:


Ignoring skewed distributions.


Mistake 6:


Fitting preprocessing transformations on test data.


Mistake 7:


Ignoring missing values.



57. Practice


1. Why is numerical preprocessing important?


2. What is standardization?


3. What is min-max scaling?


4. What is robust scaling?


5. Why can median imputation be useful?


6. What is an outlier?


7. What is IQR?


8. Why should IDs usually not be treated as numerical features?


9. What is data leakage?


10. Why do tree-based models often require less scaling?



58. Quick Check


Question 1


What does StandardScaler approximately produce?


Answer


Features centered around zero with unit standard deviation.


Question 2


What does MinMaxScaler do?


Answer


It maps features into a selected numerical range, commonly 0 to 1.


Question 3


Why can RobustScaler help with outliers?


Answer


It uses robust statistics such as the median and interquartile range.


Question 4


Should a scaler be fitted using the test set?


Answer


No.


Question 5


Do decision trees generally require standardization?


Answer


No, not in the same way distance-based algorithms do.



59. Summary


Numerical preprocessing prepares raw numerical data for machine learning.


Important operations include:


Missing value handling


Scaling


Transformation


Outlier investigation


Feature selection.


Common scalers include:


StandardScaler


MinMaxScaler


RobustScaler.


Skewed data may benefit from transformations.


Preprocessing must avoid data leakage.


Pipelines help organize preprocessing safely.


The required preprocessing depends on the algorithm.



60. Extended Study


For a numerical feature:


x,


standardization is:


z = (x - μ) / σ.


For min-max scaling:


x' = (x - x_min)


/


(x_max - x_min).


For robust scaling, the general idea is to center using the median and scale according to the interquartile range.


These transformations change the representation of the data while preserving its row-level correspondence.



61. Reflection


Before preprocessing numerical features, ask:


What are the units?


Are features on different scales?


Are there missing values?


Are there outliers?


Is the distribution strongly skewed?


Is scaling required by the algorithm?


Could preprocessing leak information?


Are identifiers being treated incorrectly?


Would a pipeline make the workflow safer?



`

};

export default lesson11;