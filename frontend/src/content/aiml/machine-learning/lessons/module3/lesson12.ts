const lesson12 = {

  id: "lesson12",

  title: "Scaling and Standardization",

  content: `

Lesson 12

Scaling and Standardization


1. Introduction


Feature scaling changes the numerical representation of features so that their magnitudes are more comparable.


This is especially important for algorithms that depend on:


Distance


Dot products


Gradient optimization


Regularization.


Two major approaches are:


Standardization


Min-Max Scaling.



2. Why Scaling Is Necessary


Consider two features:


Age:


18–70.


Annual Income:


20,000–2,000,000.


If an algorithm calculates Euclidean distance, the income feature can dominate simply because its numerical values are much larger.



3. Distance Example


The Euclidean distance between two observations is:


d(x,y)


=


√


Σ(xᵢ - yᵢ)².


If one feature has much larger numerical differences, its squared difference can dominate the total distance.



4. Example


Observation A:


Age = 20


Income = 30,000.


Observation B:


Age = 25


Income = 50,000.


Differences:


Age difference = 5.


Income difference = 20,000.


The income difference is numerically much larger.



5. Scaling Changes the Representation


After scaling, the two features can have more comparable numerical magnitudes.


This does not mean they become equally important.


It means the algorithm no longer treats raw units as an unintended source of dominance.



6. Standardization


Standardization transforms:


x


into:


z = (x - μ) / σ.


Where:


x = original value.


μ = feature mean.


σ = feature standard deviation.



7. Interpretation


If:


z = 0,


the observation is at the feature mean.


If:


z = 1,


the observation is one standard deviation above the mean.


If:


z = -2,


the observation is two standard deviations below the mean.



8. StandardScaler


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)



9. Inspect the Transformation


Python


print(
    X_scaled[:5]
)


The transformed values are centered around zero at the feature level.



10. Feature-Wise Mean


Python


print(
    X_scaled.mean(
        axis=0
    )
)


The values should be close to:


0.


Small floating-point differences can occur.



11. Feature-Wise Standard Deviation


Python


print(
    X_scaled.std(
        axis=0
    )
)


The values should be close to:


1.



12. Min-Max Scaling


Min-Max scaling transforms values into a specified range.


The common formula for the range 0 to 1 is:


x' = (x - x_min)


/


(x_max - x_min).



13. MinMaxScaler


Python


from sklearn.preprocessing import MinMaxScaler


scaler = MinMaxScaler()


X_minmax = scaler.fit_transform(
    X
)



14. Inspect Min-Max Values


Python


print(
    X_minmax.min(
        axis=0
    )
)


print(
    X_minmax.max(
        axis=0
    )
)


For the standard 0 to 1 range, the feature minimums and maximums should be approximately 0 and 1.



15. Choosing a Different Range


MinMaxScaler can use another range.


Python


scaler = MinMaxScaler(
    feature_range=(-1, 1)
)


X_scaled = scaler.fit_transform(
    X
)



16. Standardization vs Min-Max Scaling


Standardization:


Uses mean and standard deviation.


Centers features around zero.


Does not constrain values to a fixed interval.


Min-Max:


Uses minimum and maximum.


Maps values to a specified range.


Can be strongly affected by extreme values.



17. RobustScaler


RobustScaler uses:


Median


and:


Interquartile Range.


Python


from sklearn.preprocessing import RobustScaler


scaler = RobustScaler()


X_robust = scaler.fit_transform(
    X
)



18. Why Robust Scaling?


Suppose:


Feature values:


10


12


11


13


5000.


The value:


5000


can strongly affect the mean and standard deviation.


Median and IQR are less sensitive to such an extreme value.



19. Comparison Example


Python


import numpy as np


X = np.array([

    [10],
    [12],
    [11],
    [13],
    [5000]

])


standard = StandardScaler()


robust = RobustScaler()


X_standard = standard.fit_transform(
    X
)


X_robust = robust.fit_transform(
    X
)


print(
    "Standardized:"
)


print(
    X_standard
)


print(
    "Robust:"
)


print(
    X_robust
)



20. When to Use Standardization


Standardization is often appropriate when:


Features have different units.


The model assumes or benefits from centered numerical features.


Regularization is being used.


PCA is being applied.


Distance-based algorithms are being used.



21. When to Use Min-Max Scaling


Min-Max scaling can be useful when:


A bounded range is desirable.


Features need to be mapped into a common interval.


A model or application benefits from a fixed range.



22. When to Use Robust Scaling


Robust scaling can be useful when:


Outliers are present.


Median and IQR provide a more stable description of the feature.



23. Algorithms Sensitive to Scaling


Scaling is especially important for:


k-Nearest Neighbors


k-Means


Support Vector Machines


PCA.


Many gradient-based models can also benefit from appropriate scaling.



24. k-Nearest Neighbors


k-NN calculates distances between observations.


Therefore, unscaled features can distort neighbourhood relationships.


Scaling can significantly change which observations are considered nearest neighbours.



25. k-Means


k-Means minimizes distances from observations to cluster centroids.


Therefore, feature scale directly affects the clustering result.



26. PCA


PCA identifies directions of variance.


If one feature has much larger variance because of its units, it can dominate the principal components.


Scaling can therefore be important before PCA.



27. Support Vector Machines


SVMs rely on distances, margins, and inner products.


Feature scaling can therefore influence the geometry of the optimization problem.



28. Regularization


Suppose a linear model contains:


Feature A


and:


Feature B.


If Feature B uses much larger units, its coefficient magnitude may become much smaller.


Regularization penalties can then behave unevenly across features.


Scaling helps make coefficient magnitudes more comparable.



29. Tree-Based Models


Decision trees select thresholds such as:


Income < 50000.


Changing the numerical scale usually does not change the ordering of observations.


Therefore, tree-based models generally do not require standardization.



30. Scaling Does Not Change Ordering


Suppose:


10


20


30.


After a monotonic transformation such as standardization or min-max scaling, the ordering remains:


First


Second


Third.


This helps explain why threshold-based tree models are generally less sensitive to feature scaling.



31. Train/Test Scaling


A crucial rule:


Never fit the scaler using the test set.



32. Incorrect


Dataset


→


Fit Scaler


→


Train/Test Split.


The scaler has observed the complete dataset.



33. Correct


Dataset


→


Train/Test Split.


Then:


Fit scaler on training data.


Transform training data.


Transform test data.



34. Python Example


Python


from sklearn.model_selection import train_test_split


X_train, X_test, y_train, y_test = train_test_split(

    X,
    y,
    test_size=0.2,
    random_state=42

)


Then:


Python


scaler = StandardScaler()


X_train_scaled = scaler.fit_transform(
    X_train
)


X_test_scaled = scaler.transform(
    X_test
)



35. Why transform Instead of fit_transform on Test?


The test set should be transformed using the statistics learned from training data.


Therefore:


Training:


fit_transform.


Test:


transform.



36. Pipeline


Python


from sklearn.pipeline import make_pipeline


pipeline = make_pipeline(

    StandardScaler(),

    LogisticRegression(
        max_iter=2000
    )

)


pipeline.fit(
    X_train,
    y_train
)



37. Cross-Validation


Pipelines are particularly important during cross-validation.


Each training fold should determine the preprocessing parameters for that fold.


This prevents information from validation folds from influencing the transformation.



38. Scaling and Cross-Validation


Correct:


Fold Training Data


→


Fit Scaler


→


Transform Fold Training Data


→


Transform Validation Fold.


Repeat for every fold.



39. Scaling and Outliers


StandardScaler does not remove outliers.


It changes the scale.


If extreme observations exist, they can still strongly influence mean and standard deviation.



40. Scaling Is Not Outlier Removal


These are different operations:


Scaling:


Changes numerical representation.


Outlier handling:


Investigates or modifies unusual observations.


Do not assume scaling automatically solves outlier problems.



41. Log Transformation Before Scaling


For strongly skewed positive features, a possible workflow is:


Log Transformation


→


Scaling.


Example:


Python


X_log = np.log1p(
    X
)


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X_log
)



42. Scaling Multiple Columns


Suppose:


Age


Income


Balance.


All can be scaled using the same scaler when they are numerical and represented in the feature matrix.


For mixed data types, use a:


ColumnTransformer.



43. ColumnTransformer Preview


Python


from sklearn.compose import ColumnTransformer


preprocessor = ColumnTransformer([

    (
        "numeric",
        StandardScaler(),
        numeric_columns
    )

])


This becomes especially useful when categorical variables are present.



44. Scaling Sparse Data


Some preprocessing transformations can affect sparsity.


When working with sparse matrices, choose transformations carefully.


The representation and memory requirements should be considered.



45. Scaling New Data


After a scaler has been fitted, new observations should be transformed using the same scaler.


Python


new_scaled = scaler.transform(
    new_data
)


Do not fit a new scaler on every individual prediction.



46. Why Reusing the Scaler Matters


Suppose training data has:


Mean = 50.


A new observation should be interpreted relative to that training distribution.


Fitting a new scaler would change the reference statistics.


That could produce an inconsistent representation.



47. Scaling Example with Iris


Python


from sklearn.datasets import load_iris


iris = load_iris()


X = iris.data


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


print(
    X_scaled[:5]
)



48. Compare Original and Scaled


Python


print(
    "Original:"
)


print(
    X[:5]
)


print(
    "Scaled:"
)


print(
    X_scaled[:5]
)



49. Visualizing a Feature Before and After Scaling


Python


import matplotlib.pyplot as plt


plt.hist(
    X[:, 0],
    bins=15
)


plt.title(
    "Original Feature"
)


plt.show()


Then plot the scaled feature separately.



50. Experiment: k-NN


Train a k-NN classifier:


Without scaling.


With StandardScaler.


Compare:


Accuracy


Confusion Matrix.


Observe how scaling affects neighbourhood relationships.



51. Experiment: k-Means


Run k-Means:


Without scaling.


With scaling.


Compare:


Cluster assignments


Centroids


Inertia.


The resulting clusters can change because the distance geometry has changed.



52. Experiment: PCA


Run PCA:


Without scaling.


With scaling.


Compare:


Explained variance


Principal components.


This demonstrates why scaling is commonly used before PCA.



53. Common Mistakes


Mistake 1:


Calling fit_transform on test data.


Mistake 2:


Fitting a new scaler for every new prediction.


Mistake 3:


Assuming scaling removes outliers.


Mistake 4:


Using scaling without understanding the algorithm.


Mistake 5:


Ignoring data leakage during cross-validation.


Mistake 6:


Applying transformations inconsistently between training and production data.



54. Practice


1. What is feature scaling?


2. What is standardization?


3. What is min-max scaling?


4. What is robust scaling?


5. Why does k-NN need scaling?


6. Why does k-Means need scaling?


7. Why is PCA sensitive to scaling?


8. Why do tree models generally need less scaling?


9. Why should test data use transform instead of fit_transform?



55. Quick Check


Question 1


What formula is used for standardization?


Answer


z = (x - μ) / σ.


Question 2


What range does default MinMaxScaler use?


Answer


0 to 1.


Question 3


Which scaler uses median and IQR?


Answer


RobustScaler.


Question 4


Should a scaler be fitted separately on the test set?


Answer


No.


Question 5


Does scaling automatically remove outliers?


Answer


No.



56. Summary


Feature scaling makes numerical feature magnitudes more comparable.


Standardization uses mean and standard deviation.


Min-Max scaling maps values into a selected interval.


RobustScaler uses median and IQR.


Scaling is especially important for distance-based algorithms and PCA.


Tree-based algorithms generally require less scaling.


The scaler must be fitted using training data only.


The same fitted transformation should be reused for validation, test, and new data.



57. Extended Study


Scaling can be understood as a coordinate transformation.


For standardization:


z = (x - μ) / σ.


This translates the feature by subtracting its center and rescales it using its spread.


For min-max scaling:


x' = (x - x_min)


/


(x_max - x_min).


This maps the feature into a bounded interval.


The choice of transformation changes the geometry of the feature space and can therefore influence distance-based algorithms.



58. Reflection


Before selecting a scaler, ask:


Are the features measured in different units?


Are there strong outliers?


Does the algorithm depend on distance?


Does the algorithm use regularization?


Is PCA being applied?


Is a bounded range useful?


Could preprocessing leak information?


Will the same transformation be used for future data?



`

};

export default lesson12;