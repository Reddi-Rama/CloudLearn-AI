const lesson6 = {

  id: "lesson6",

  title: "Binning and Discretization",

  content: `

Lesson 06

Binning and Discretization


1. Introduction


Many numerical features are continuous.


For example:


Age.


Income.


Temperature.


Distance.


Sometimes a model or application benefits from representing these continuous values as ranges or categories.


This process is called:


Binning.


It is also known as:


Discretization.



2. What Is Binning?


Binning divides a continuous numerical variable into intervals called:


Bins.


For example, age can be divided into:


0–17


18–30


31–45


46–60


61+.



3. Example


Suppose ages are:


12


19


25


38


52.


After binning:


12 → Child.


19 → Young Adult.


25 → Young Adult.


38 → Adult.


52 → Mature Adult.



4. Why Use Binning?


Binning can:


Simplify continuous variables.


Represent meaningful ranges.


Reduce sensitivity to small numerical differences.


Introduce domain-specific categories.



5. Continuous vs Discrete Representation


Continuous:


Age = 27.4.


Discretized:


Age Group = 20–30.


The original numerical detail is reduced in exchange for a simpler representation.



6. Important Trade-Off


Binning can lose information.


For example:


Age 21


and:


Age 29


may both belong to the same bin.


Their exact difference is no longer represented by the bin label.



7. When Binning Makes Sense


Binning can be useful when:


Ranges have meaningful interpretation.


The relationship with the target changes by ranges.


Domain experts use categories.


Small numerical variations are not important.



8. Equal-Width Binning


Equal-width binning divides the numerical range into intervals of equal size.


Suppose values range from:


0 to 100.


Using five bins gives:


0–20


20–40


40–60


60–80


80–100.



9. Equal-Frequency Binning


Equal-frequency binning attempts to place a similar number of observations into each bin.


The numerical width of each bin can therefore differ.



10. Example


Suppose values are concentrated around:


10–20.


Equal-width bins may contain very different numbers of observations.


Equal-frequency bins try to balance the number of observations across bins.



11. pandas.cut


pandas provides:


cut.


It is useful for fixed numerical intervals.



12. Python


import pandas as pd


df = pd.DataFrame({

    "age": [
        12,
        19,
        25,
        38,
        52,
        67
    ]

})


df["age_group"] = pd.cut(

    df["age"],

    bins=[
        0,
        18,
        30,
        45,
        60,
        100
    ],

    labels=[
        "Child",
        "Young Adult",
        "Adult",
        "Mature Adult",
        "Senior"
    ],

    include_lowest=True

)


print(
    df
)



13. Output Concept


The dataset now contains:


age


age_group.


The continuous age value remains available, while an additional categorical representation has been created.



14. Why Keep the Original Feature?


Keeping the original feature can preserve numerical information.


The model can then potentially use:


Exact Age


and:


Age Group.


However, adding redundant features should be justified and evaluated.



15. pandas.qcut


pandas provides:


qcut.


It creates bins based approximately on quantiles.



16. Python


df["age_quantile"] = pd.qcut(

    df["age"],

    q=3,

    labels=[
        "Low",
        "Medium",
        "High"
    ]

)



17. Difference Between cut and qcut


cut:


Uses explicit or equal-width intervals.


qcut:


Uses quantiles to divide observations into groups with approximately similar frequencies.



18. Example


Suppose:


Income values range from:


20,000


to:


1,000,000.


Equal-width bins may produce:


Low:


20,000–346,667.


Medium:


346,667–673,334.


High:


673,334–1,000,000.


If most observations are near the lower end, the groups may be very unbalanced.



19. Quantile Binning


Quantile binning can create more balanced groups.


However, the resulting numerical ranges may be less intuitive.



20. Discretization with scikit-learn


scikit-learn provides:


KBinsDiscretizer.



21. Python


from sklearn.preprocessing import KBinsDiscretizer


discretizer = KBinsDiscretizer(

    n_bins=4,

    encode="onehot-dense",

    strategy="quantile"

)


X_binned = (
    discretizer.fit_transform(
        X
    )
)



22. Strategies


KBinsDiscretizer supports strategies such as:


uniform


quantile


kmeans.



23. Uniform Strategy


uniform divides the feature range into equally sized intervals.



24. Quantile Strategy


quantile creates bins based on quantiles.



25. K-Means Strategy


kmeans uses clustering-style centers to determine intervals.


The resulting bins depend on the data distribution.



26. Encoding Options


The discretizer can produce:


Ordinal-style representations.


One-hot representations.


The encoding choice depends on the model and intended interpretation.



27. Ordinal Representation


Suppose bins are:


Low


Medium


High.


They can be represented as:


0


1


2.


However, this representation implies an ordering.



28. One-Hot Representation


Instead of:


0, 1, 2,


we can create:


Low


Medium


High.


For one observation:


Low = 1


Medium = 0


High = 0.



29. Why One-Hot Can Be Safer


One-hot encoding avoids implying that the numerical difference between categories represents a meaningful quantity.



30. Binning and Linear Models


Binning can allow a linear model to represent different effects across ranges.


For example:


Age Group = Young.


Age Group = Adult.


Age Group = Senior.



31. Example


A linear model might learn:


Different coefficients for different age groups.


This can approximate a nonlinear relationship.



32. Binning and Decision Trees


Decision trees naturally create threshold-based regions.


For example:


Age < 30.


Age ≥ 30.


Therefore, explicit binning may be less necessary for tree models.



33. Binning and Distance-Based Models


Binning changes continuous values into categorical or discrete representations.


This can alter the geometry of the feature space.


Therefore, it should be used carefully with distance-based algorithms.



34. Binning and Interpretability


One advantage of binning is interpretability.


Instead of:


Income = 72,450,


we may communicate:


Income Group = High.



35. Business Example


A bank may classify customers into:


Low income.


Middle income.


High income.


The categories may be easier to communicate to non-technical stakeholders.



36. Medical Example


A measurement might be categorized into:


Low.


Normal.


High.


However, domain-specific thresholds should come from appropriate subject-matter guidance rather than arbitrary choices.



37. Important Principle


Do not choose bins only because they look convenient.


Bin boundaries should have a reason.


Possible sources include:


Domain knowledge.


Business rules.


Statistical analysis.



38. Binning and Information Loss


Suppose:


Age values:


20


21


22


23.


If all are assigned to:


20–30,


the exact differences disappear from the binned representation.



39. Binning Can Reduce Noise


If tiny numerical differences are not meaningful, grouping nearby values can reduce sensitivity to those differences.



40. Binning and Overfitting


Too many bins can make the representation highly specific.


For example:


One bin for almost every small numerical interval.


This can reduce the benefit of discretization and may increase model complexity.



41. Too Few Bins


Too few bins can remove useful information.


Therefore, the number of bins should be selected carefully.



42. Choosing Number of Bins


Possible approaches:


Domain-defined ranges.


Validation.


Quantiles.


Model performance.


Visualization.



43. Visualization


A histogram can help understand how values are distributed before choosing bins.


Python


import matplotlib.pyplot as plt


plt.hist(
    df["age"],
    bins=10
)


plt.xlabel(
    "Age"
)


plt.ylabel(
    "Count"
)


plt.title(
    "Age Distribution"
)


plt.show()



44. Inspecting Bin Counts


Python


print(
    df["age_group"].value_counts(
        sort=False
    )
)



45. Why Check Counts?


Some bins may contain very few observations.


Such bins may be unstable or uninformative.



46. Binning with Missing Values


Missing values should be considered before or during discretization.


A missing value does not automatically belong to a numerical interval.



47. Example


Suppose:


Age = NaN.


It should not automatically be assigned:


0–18.


Instead, missingness can be handled separately.



48. Missing Indicator


A separate feature can represent whether the value was missing:


age_missing.


Python


df["age_missing"] = (
    df["age"]
    .isna()
    .astype(int)
)



49. Binning and Pipelines


Binning can be included in a machine learning pipeline.


Python


from sklearn.pipeline import Pipeline


from sklearn.preprocessing import (
    KBinsDiscretizer,
    OneHotEncoder
)



50. Example Pipeline


Python


pipeline = Pipeline([

    (
        "binning",
        KBinsDiscretizer(
            n_bins=5,
            encode="onehot-dense",
            strategy="quantile"
        )
    )

])



51. Train/Test Consideration


Bin boundaries must be learned appropriately from training data.


Do not determine bins using the complete dataset before evaluation.



52. Why?


The test dataset represents unseen information.


Using its distribution to define preprocessing can introduce information leakage.



53. Binning and Cross-Validation


When using cross-validation, binning should be fitted separately inside each training fold.


A pipeline helps automate this process.



54. Experiment


Create a dataset containing:


Age.


Compare three representations:


Raw age.


Fixed age groups.


Quantile age groups.



55. Experiment 2


Train a classification model:


Without binning.


With binning.


Compare validation performance.



56. Experiment 3


Compare:


3 bins.


5 bins.


10 bins.


Observe how model complexity and performance change.



57. Experiment 4


Use:


KBinsDiscretizer.


Compare:


uniform.


quantile.


kmeans.



58. Common Mistakes


Mistake 1:


Choosing arbitrary bin boundaries.


Mistake 2:


Creating too many bins.


Mistake 3:


Creating too few bins.


Mistake 4:


Ignoring information loss.


Mistake 5:


Using test data to determine bin boundaries.


Mistake 6:


Treating unordered categories as meaningful numbers.



59. Practice


1. What is binning?


2. What is discretization?


3. What is equal-width binning?


4. What is quantile binning?


5. What is the difference between cut and qcut?


6. Why can binning lose information?


7. Why should bin boundaries be learned using training data?



60. Quick Check


Question 1


What does binning do?


Answer


It divides a continuous numerical variable into intervals.


Question 2


What does qcut generally use?


Answer


Quantiles.


Question 3


Why can too many bins be problematic?


Answer


They can create unnecessary complexity and reduce the usefulness of the discretization.


Question 4


Why can too few bins be problematic?


Answer


They can remove important numerical information.



61. Summary


Binning converts continuous numerical values into intervals.


Important approaches include:


Equal-width binning.


Equal-frequency or quantile binning.


Data-driven discretization.


Useful tools include:


pandas.cut.


pandas.qcut.


KBinsDiscretizer.


Binning can improve interpretability and represent range-based relationships, but it can also lose numerical information.



62. Extended Study


Discretization can be viewed as a mapping:


x


→


b(x).


Instead of providing the exact numerical value, the model receives information about which interval contains the value.


This can be useful when the prediction relationship changes primarily between ranges rather than smoothly across the entire numerical scale.



63. Reflection


Before using binning, ask:


Are the ranges meaningful?


How much information will be lost?


How many bins should be used?


Should the bins be equal-width or quantile-based?


Would a continuous representation be better?


Will the boundaries be learned only from training data?


Does validation show that binning helps?

`

};

export default lesson6;