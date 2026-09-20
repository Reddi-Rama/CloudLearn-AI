const lesson3 = {

  id: "lesson3",

  title: "Feature Scaling and Transformation",

  content: `

Lesson 03

Feature Scaling and Transformation


1. Introduction


Machine learning datasets often contain features measured on very different scales.


For example:


Age:


18–70.


Income:


20,000–500,000.


Annual transactions:


1–200.


Temperature:


10–40.


If an algorithm uses numerical distance or magnitude, these different scales can strongly affect the model.



2. What Is Feature Scaling?


Feature scaling transforms numerical features so that their values are represented on a more comparable scale.


Common approaches include:


Standardization


Min-Max Scaling


Robust Scaling.



3. Why Scaling Matters


Consider two features:


Age


Income.


Suppose two customers differ by:


Age:


5 units.


Income:


100,000 units.


A distance-based algorithm may consider the income difference much more strongly because its numerical magnitude is larger.



4. Euclidean Distance


For two observations:


x = (x₁, x₂)


and:


y = (y₁, y₂),


Euclidean distance is:


d(x,y)


=


√[
(x₁-y₁)²


+


(x₂-y₂)²
].



5. Scale Problem


Suppose:


Age difference = 5.


Income difference = 100,000.


Then:


100,000²


can dominate:


5².


The resulting distance is mostly determined by income.



6. Algorithms Sensitive to Scale


Scaling is particularly important for:


k-Nearest Neighbors


k-Means


DBSCAN


Support Vector Machines


PCA.


It can also be useful for:


Linear models with regularization


Neural networks.



7. Algorithms Less Sensitive to Scaling


Tree-based algorithms generally do not depend on distance in the same way.


Examples:


Decision Trees


Random Forests


Gradient Boosting Trees.



8. Standardization


Standardization transforms a feature using:


z = (x - μ) / σ.


Where:


x = original value.


μ = mean.


σ = standard deviation.



9. Interpretation


After standardization:


Mean is approximately:


0.


Standard deviation is approximately:


1.


A value of:


z = 2


means the observation is approximately two standard deviations above the mean under the standardization calculation.



10. Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)



11. Example


Suppose:


Mean = 50.


Standard deviation = 10.


Value = 70.


Then:


z = (70 - 50) / 10


= 2.



12. StandardScaler Behavior


The scaler learns:


Mean.


Standard deviation.


from the fitting data.


Then it uses those statistics to transform observations.



13. Train/Test Rule


Do not calculate scaling statistics using the entire dataset before splitting.


Correct:


Train/Test Split


→


Fit scaler on training data


→


Transform training data


→


Transform test data.



14. Python


from sklearn.model_selection import train_test_split


X_train, X_test, y_train, y_test = (
    train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )
)


scaler = StandardScaler()


X_train_scaled = (
    scaler.fit_transform(
        X_train
    )
)


X_test_scaled = (
    scaler.transform(
        X_test
    )
)



15. Why This Matters


The test data represents unseen information.


If test statistics are used to calculate the transformation, information from the test set influences preprocessing.



16. Min-Max Scaling


Min-Max scaling transforms values into a specified range.


For the common range:


0 to 1,


the formula is:


x' =


(x - x_min)


/


(x_max - x_min).



17. Python


from sklearn.preprocessing import MinMaxScaler


scaler = MinMaxScaler()


X_scaled = scaler.fit_transform(
    X
)



18. Example


Suppose:


Minimum = 10.


Maximum = 90.


Value = 50.


Then:


x'


=


(50 - 10)


/


(90 - 10)


=


40 / 80


=


0.5.



19. Min-Max Interpretation


The smallest training value maps approximately to:


0.


The largest training value maps approximately to:


1.


Other values are placed between them under the chosen range.



20. Important Limitation


Min-Max scaling depends on minimum and maximum values.


Extreme outliers can strongly affect these values.



21. Robust Scaling


RobustScaler uses statistics based on:


Median


and:


Interquartile Range.


This can make it more resistant to extreme observations.



22. IQR


The interquartile range is:


IQR = Q3 - Q1.


Where:


Q1 = first quartile.


Q3 = third quartile.



23. Robust Transformation


A simplified representation is:


x'


=


(x - median)


/


IQR.



24. Python


from sklearn.preprocessing import RobustScaler


scaler = RobustScaler()


X_scaled = scaler.fit_transform(
    X
)



25. When RobustScaler Can Help


Robust scaling can be useful when:


Features contain substantial outliers.


The median and IQR provide a more stable representation than mean and standard deviation.



26. Comparing Scaling Methods


StandardScaler:


Centers using mean.


Scales using standard deviation.


MinMaxScaler:


Uses minimum and maximum.


RobustScaler:


Uses median and IQR.



27. Example Dataset


Consider:


Income:


20,000


30,000


40,000


50,000


1,000,000.


The final value is an extreme observation.



28. Standard Scaling


The extreme value can strongly influence:


Mean.


Standard deviation.



29. Min-Max Scaling


The extreme value strongly affects:


Minimum.


Maximum.


This can compress most other observations into a narrow range.



30. Robust Scaling


The median and IQR are less influenced by a single extreme observation.


Therefore, the majority of observations may remain more spread out.



31. Log Transformation


Scaling and transformation are related but different.


A logarithmic transformation changes the distribution:


x'


=


log(1 + x).



32. Python


import numpy as np


X_log = np.log1p(
    X
)



33. Why Log Before Scaling?


A highly skewed feature can first be transformed:


Raw


→


Log


→


Standardize.


This can reduce skewness before scaling.



34. Power Transformations


scikit-learn provides:


PowerTransformer.


It can transform data toward a more Gaussian-like distribution under its chosen method.



35. Python


from sklearn.preprocessing import PowerTransformer


transformer = PowerTransformer()


X_transformed = transformer.fit_transform(
    X
)



36. Quantile Transformation


QuantileTransformer maps values according to their empirical distribution.


It can transform features into:


Uniform


or:


Normal-like


distributions depending on configuration.



37. Python


from sklearn.preprocessing import QuantileTransformer


transformer = QuantileTransformer(
    output_distribution="normal",
    random_state=42
)


X_transformed = transformer.fit_transform(
    X
)



38. Important Caution


Aggressive transformations can change the interpretation of a feature.


Always inspect:


Distribution


Outliers


Model performance.


Do not transform features simply because a technique exists.



39. Scaling and PCA


PCA is based on variance and covariance.


If one feature has a much larger scale, it can dominate the variance structure.


Therefore, standardization is commonly considered before PCA when features are measured on different scales.



40. Python PCA Workflow


from sklearn.preprocessing import StandardScaler


from sklearn.decomposition import PCA


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


pca = PCA(
    n_components=2
)


X_pca = pca.fit_transform(
    X_scaled
)



41. Scaling and k-Means


k-Means uses distances to centroids.


Therefore, feature scale can significantly affect cluster assignments.



42. Scaling and k-NN


k-Nearest Neighbors uses distances between observations.


If features have different scales, large-scale variables can dominate neighbor selection.



43. Scaling and SVM


SVM optimization depends on the geometry of the feature space.


Scaling is generally important for many SVM workflows.



44. Scaling and Neural Networks


Neural networks often train more effectively when numerical inputs have suitable scales.


Standardized inputs can help optimization behave more consistently.



45. Scaling Categorical Data


Categorical variables should not simply be scaled as though arbitrary integer codes represent continuous quantities.


For example:


City:


Mumbai = 0


Delhi = 1


Chennai = 2.


The numerical differences do not represent meaningful distances.



46. Correct Categorical Representation


Categorical variables often require:


One-Hot Encoding.


Then numerical scaling can be applied to appropriate numerical columns separately.



47. ColumnTransformer


Python


from sklearn.compose import ColumnTransformer


from sklearn.preprocessing import (
    StandardScaler,
    OneHotEncoder
)


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



48. Scaling Inside a Pipeline


Python


from sklearn.pipeline import Pipeline


from sklearn.linear_model import LogisticRegression


pipeline = Pipeline([

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



49. Why Use Pipelines?


The pipeline ensures:


Training data determines scaling.


Test data receives the same learned transformation.


Cross-validation can fit scaling separately inside each fold.



50. Scaling and Cross-Validation


Suppose:


5-fold cross-validation.


For each fold:


Fit scaler on training portion.


Transform training portion.


Transform validation portion.


Train model.


Evaluate.



51. Experiment


Create a dataset with:


Age


Income.


Train k-Means:


Without scaling.


With StandardScaler.


Compare the cluster assignments.



52. Experiment: Scaling Methods


Compare:


StandardScaler


MinMaxScaler


RobustScaler.


Use the same model and dataset.


Compare the resulting performance or clustering structure.



53. Experiment: Outliers


Add an extreme value to a numerical feature.


Compare:


StandardScaler


MinMaxScaler


RobustScaler.


Inspect how the ordinary observations are transformed.



54. Experiment: PCA


Apply PCA:


Without scaling.


With scaling.


Compare:


Explained variance.


Principal components.


Visualization.



55. Common Mistakes


Mistake 1:


Fitting the scaler on the complete dataset.


Mistake 2:


Scaling categorical variables represented by arbitrary numbers.


Mistake 3:


Assuming every algorithm requires scaling.


Mistake 4:


Ignoring outliers when choosing a scaler.


Mistake 5:


Applying a transformation without checking its meaning.


Mistake 6:


Using different transformations during training and inference.



56. Practice


1. What is feature scaling?


2. Why is scaling important for k-Means?


3. What is standardization?


4. What is Min-Max scaling?


5. What is RobustScaler?


6. What is IQR?


7. Why can outliers affect Min-Max scaling?


8. Why should scaling be inside a pipeline?



57. Quick Check


Question 1


What does StandardScaler do?


Answer


It centers features using the mean and scales them using the standard deviation calculated from the fitting data.


Question 2


What range does ordinary Min-Max scaling commonly produce?


Answer


Approximately 0 to 1 for values within the training range.


Question 3


Which scaler uses median and IQR?


Answer


RobustScaler.


Question 4


Why is scaling important for k-Means?


Answer


Because k-Means relies on distances, which are affected by feature magnitude.



58. Summary


Feature scaling makes numerical features more comparable.


Important methods include:


StandardScaler


MinMaxScaler


RobustScaler.


Other transformations include:


Log transformation


Power transformation


Quantile transformation.


Scaling is particularly important for:


Distance-based algorithms


PCA


SVM.


The scaler must be fitted using the appropriate training data and then reused for new data.



59. Extended Study


Scaling changes the geometry of the feature space.


Suppose:


X = [x₁, x₂,...,xₚ].


A scaling transformation creates:


X' = T(X).


Distance calculations are then performed using:


d(X',Y').


Therefore, scaling can change which observations appear close to each other.


This explains why preprocessing is part of the modeling process rather than merely a cosmetic step.



60. Reflection


Before selecting a transformation, ask:


What are the feature units?


Does the model depend on distance?


Are there extreme values?


Is the distribution highly skewed?


Would StandardScaler be appropriate?


Would RobustScaler be safer?


Would a logarithmic transformation help?


Am I fitting the transformer only on appropriate training data?


Will the exact same transformation be used on new observations?

`

};

export default lesson3;