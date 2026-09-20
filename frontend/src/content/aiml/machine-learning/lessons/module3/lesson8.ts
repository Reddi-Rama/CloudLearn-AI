const lesson8 = {

  id: "lesson8",

  title: "Principal Component Analysis (PCA)",

  content: `

Lesson 08

Principal Component Analysis (PCA)


1. Introduction to PCA


Principal Component Analysis is commonly abbreviated as:


PCA.


It is one of the most widely used dimensionality reduction techniques.


PCA transforms a dataset containing many potentially correlated features into a smaller set of new variables called:


Principal Components.



2. Why Dimensionality Reduction?


Suppose a dataset contains:


100 features.


Working directly with all 100 features can make the data:


Hard to visualize


Computationally expensive


Difficult to interpret


Potentially redundant.


Dimensionality reduction attempts to represent the important structure using fewer dimensions.



3. Example


Suppose we have:


Height


Weight


Arm Length


Leg Length.


These variables may be correlated.


A large part of the information may be represented using fewer underlying directions.


PCA attempts to find those directions mathematically.



4. Original Feature Space


Suppose each observation is:


x = (x₁,x₂,x₃,...,xₙ).


The dataset exists in an:


n-dimensional feature space.


PCA finds new axes through this space.



5. Principal Components


The new directions are called:


Principal Components.


The first principal component:


PC1


captures the largest possible amount of variance under the standard PCA formulation.


The second component:


PC2


captures the largest remaining variance subject to being orthogonal to PC1.


The process continues for additional components.



6. Variance


Variance measures how much a variable or direction varies across observations.


A direction with high variance captures a large amount of variation in the dataset.



7. PCA Intuition


Imagine a cloud of points in two dimensions.


The points may form an elongated diagonal shape.


The original axes are:


X


and:


Y.


PCA can rotate the coordinate system so that:


PC1


points along the direction of greatest spread.


PC2


points perpendicular to PC1.



8. Why Rotation Helps


The original features may not be the most informative directions.


PCA finds directions that better represent the variation in the data.


This can allow:


2D visualization


using:


2 principal components.



9. Covariance


PCA is closely related to covariance.


Covariance describes how two variables change together.


If two variables increase together, covariance tends to be positive.


If one increases while the other tends to decrease, covariance tends to be negative.



10. Covariance Matrix


For multiple features, covariance values can be organized into a:


Covariance Matrix.


For two variables:


X


and:


Y,


the covariance matrix can be represented as:


[ Var(X)   Cov(X,Y) ]


[ Cov(Y,X) Var(Y) ].



11. Diagonal Elements


The diagonal contains:


Variances.


For example:


Cov(X,X)


is:


Var(X).



12. Off-Diagonal Elements


The off-diagonal entries contain:


Covariances.


They describe relationships between different variables.



13. Eigenvectors


PCA finds directions related to the:


Eigenvectors


of the covariance matrix.


These eigenvectors define the principal component directions.



14. Eigenvalues


Each eigenvector has an associated:


Eigenvalue.


The eigenvalue represents the amount of variance associated with that principal component under the covariance-based interpretation.



15. Principal Component Ordering


Components are ordered by decreasing explained variance.


Therefore:


PC1


explains the most variance.


PC2


explains the next largest amount.


and so on.



16. Explained Variance


The proportion of variance explained by a component can be expressed as:


Explained Variance Ratio


=


Component Variance


/


Total Variance.



17. Example


Suppose:


PC1 explains:


60%.


PC2 explains:


25%.


PC3 explains:


10%.


PC4 explains:


5%.


Then the first two components explain:


60% + 25%


= 85%.


Therefore, two dimensions retain 85% of the variance under this PCA representation.



18. PCA and Scaling


PCA is sensitive to feature scale.


Suppose:


Feature A


has variance:


1.


Feature B


has variance:


1,000,000.


Without scaling, Feature B can dominate the principal components.


Therefore, standardization is often performed before PCA when features have different units or scales.



19. StandardScaler + PCA


A common workflow is:


Raw Data


↓

StandardScaler


↓

PCA


↓

Reduced Representation.



20. Python Example


Python


from sklearn.datasets import load_iris


iris = load_iris()


X = iris.data
y = iris.target


print(
    X.shape
)


Output


The Iris dataset contains four numerical features.



21. Standardize the Data


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


print(
    X_scaled.shape
)



22. Apply PCA


Python


from sklearn.decomposition import PCA


pca = PCA(
    n_components=2
)


X_pca = pca.fit_transform(
    X_scaled
)


print(
    X_pca.shape
)


The original four-dimensional representation has been reduced to two dimensions.



23. Explained Variance Ratio


Python


print(
    pca.explained_variance_ratio_
)


Output


The output contains the proportion of variance explained by each selected component.



24. Total Explained Variance


Python


print(
    pca.explained_variance_ratio_.sum()
)


This tells us how much total variance is represented by the selected components.



25. Visualizing PCA


Python


import matplotlib.pyplot as plt


plt.scatter(
    X_pca[:, 0],
    X_pca[:, 1],
    c=y
)


plt.xlabel(
    "Principal Component 1"
)


plt.ylabel(
    "Principal Component 2"
)


plt.title(
    "PCA Projection"
)


plt.show()



26. Important Interpretation


PCA components are not automatically:


Feature 1


Feature 2.


They are combinations of the original features.


For example:


PC1


might be approximately:


0.5 × Feature1


+


0.4 × Feature2


-


0.3 × Feature3


+


0.7 × Feature4.



27. Components


The component weights can be inspected using:


components_.


Python


print(
    pca.components_
)


Output


Each row represents a principal component.


Each column corresponds to an original feature.



28. Understanding Components


Suppose:


PC1:


[0.50, 0.45, -0.20, 0.70].


This means PC1 is a weighted combination of the original features.


The signs and magnitudes indicate how each original feature contributes to that component direction.



29. PCA Transformation


PCA transforms:


X


into:


Z.


Conceptually:


Z = XW


after the appropriate centering and preprocessing.


Here:


W


contains the principal component directions.



30. Centering


PCA generally centers the data by subtracting the mean of each feature.


For feature x:


x_centered = x - mean(x).



31. Why Centering Matters


Without centering, the location of the dataset relative to the origin can affect the analysis.


Centering makes PCA focus on variation around the feature means.



32. PCA and Correlated Features


Suppose:


Feature A


and:


Feature B


are highly correlated.


PCA may represent much of their shared variation using one principal component.


This can reduce redundancy.



33. Dimensionality Reduction


Suppose:


Original features = 100.


We choose:


n_components = 10.


PCA creates:


10 principal components.


The resulting representation is much smaller.



34. Choosing Number of Components


Possible approaches include:


Fixed Number


Explained Variance Threshold


Visualization


Downstream Model Performance.



35. Explained Variance Threshold


scikit-learn can select the number of components required to preserve a specified fraction of variance.


Example:


Python


pca = PCA(
    n_components=0.95
)


X_reduced = pca.fit_transform(
    X_scaled
)


This requests enough components to explain approximately:


95%


of the variance.



36. Inspect Number of Components


Python


print(
    pca.n_components_
)


This shows how many components were retained.



37. Cumulative Explained Variance


Python


pca_full = PCA()


pca_full.fit(
    X_scaled
)


cumulative = pca_full.explained_variance_ratio_.cumsum()


print(
    cumulative
)



38. Plot Cumulative Variance


Python


plt.plot(
    range(
        1,
        len(cumulative) + 1
    ),
    cumulative,
    marker="o"
)


plt.xlabel(
    "Number of Components"
)


plt.ylabel(
    "Cumulative Explained Variance"
)


plt.title(
    "PCA Explained Variance"
)


plt.grid()


plt.show()



39. PCA for Visualization


A common application is:


High-Dimensional Data


↓

PCA


↓

2 Dimensions


↓

Visualization.


This can help us inspect whether observations form visible patterns or groups.



40. PCA Before Clustering


A possible workflow is:


Scale


↓

PCA


↓

Clustering.


However, PCA changes the representation.


Therefore, clustering results should be compared with and without PCA when practical.



41. PCA and Noise


Some low-variance directions may contain relatively little useful signal.


Removing those dimensions can sometimes reduce noise.


However, low variance does not automatically mean:


Unimportant.


A low-variance feature can still be predictive for a particular target.



42. PCA Is Unsupervised


Standard PCA does not use target labels.


It identifies directions of variance in the input data.


Therefore, a component explaining high variance is not necessarily the component most useful for prediction.



43. PCA vs Feature Selection


Feature Selection:


Keeps a subset of original features.


PCA:


Creates new transformed features.


For example:


Feature Selection:


Age


Income


Experience.


PCA:


PC1


PC2


PC3.



44. Interpretability


Original features usually have direct meanings.


Principal components are combinations of features.


Therefore, PCA can reduce interpretability.



45. Reconstruction


PCA can approximately reconstruct the original data from a limited number of components.


If too few components are retained:


More information is lost.


If more components are retained:


Reconstruction improves.



46. Python Reconstruction


Python


pca = PCA(
    n_components=2
)


X_pca = pca.fit_transform(
    X_scaled
)


X_reconstructed = pca.inverse_transform(
    X_pca
)


print(
    X_reconstructed.shape
)



47. Reconstruction Error


The difference between:


Original Representation


and:


Reconstructed Representation


can be used to quantify information loss.


Python


import numpy as np


error = np.mean(
    (
        X_scaled
        -
        X_reconstructed
    ) ** 2
)


print(
    "Reconstruction Error:",
    error
)



48. PCA for Image Data


An image can contain thousands of pixel values.


For example:


64 × 64


grayscale image:


64 × 64 = 4096


pixel values.


PCA can represent the images using fewer dimensions.



49. PCA for Text


Text represented using thousands of numerical features can sometimes be reduced using dimensionality reduction methods.


However, sparse text representations require careful consideration of preprocessing and the choice of dimensionality reduction technique.



50. PCA and Clustering


PCA can help visualize clustering results.


Example:


Features


↓


StandardScaler


↓


PCA to 2 Components


↓


Plot clusters.



51. Experiment: Number of Components


Try:


n_components = 1


2


3.


Record:


Explained Variance.


Visualize the first two components.



52. Experiment: Scaling


Apply PCA:


Without scaling.


With StandardScaler.


Compare:


Components


Explained Variance


Visualization.



53. Experiment: Variance Threshold


Use:


0.80


0.90


0.95


0.99.


Record the number of components required for each threshold.



54. Common Mistakes


Mistake 1:


Applying PCA without considering feature scale.


Mistake 2:


Assuming PC1 is the most predictive feature.


Mistake 3:


Treating principal components as original variables.


Mistake 4:


Choosing components without measuring information retention.


Mistake 5:


Using PCA blindly when interpretability is essential.


Mistake 6:


Fitting PCA on the complete dataset before cross-validation, causing potential information leakage.



55. PCA and Data Leakage


If PCA is part of a supervised machine learning workflow, it should be fitted only on the training data.


A pipeline is useful:


StandardScaler


→


PCA


→


Model.


During cross-validation, the transformations are fitted within each training fold.



56. Python Pipeline


Python


from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LogisticRegression


pipeline = make_pipeline(
    StandardScaler(),
    PCA(n_components=2),
    LogisticRegression(
        max_iter=2000
    )
)


pipeline.fit(
    X_train,
    y_train
)


print(
    pipeline.score(
        X_test,
        y_test
    )
)



57. Common Applications


PCA is used for:


Visualization


Compression


Noise Reduction


Exploratory Data Analysis


Feature Representation


Preprocessing for some machine learning models.



58. Practice


1. What is PCA?


2. What is dimensionality reduction?


3. What is a principal component?


4. What is variance?


5. What is covariance?


6. What is an eigenvector?


7. What is an eigenvalue?


8. Why is scaling important before PCA?


9. What is explained variance ratio?


10. How is PCA different from feature selection?



59. Quick Check


Question 1


What does PC1 represent?


Answer


The direction capturing the largest variance under the standard PCA formulation.


Question 2


Why are features often standardized before PCA?


Answer


Because PCA is sensitive to feature scale.


Question 3


Does PCA select original features?


Answer


No. It creates new components that are combinations of original features.


Question 4


What does explained variance ratio represent?


Answer


The proportion of total variance represented by a principal component.


Question 5


Can PCA be used for visualization?


Answer


Yes.



60. Summary


PCA is a dimensionality reduction technique.


It transforms original features into principal components.


PC1 captures the greatest variance.


Subsequent components capture remaining variance under orthogonality constraints.


PCA is related to covariance matrices and eigenvectors.


Scaling is often important.


Explained variance helps determine how many components to retain.


PCA can help with visualization and compression.


PCA creates transformed features rather than selecting original features.


PCA can reduce interpretability.



61. Extended Study


Let centered data be represented by:


X.


PCA searches for a direction:


w


such that the projected variance:


Var(Xw)


is maximized subject to:


||w|| = 1.


This leads to the eigenvalue problem:


Σw = λw


where:


Σ


is the covariance matrix.


The eigenvectors:


w


represent principal directions.


The corresponding eigenvalues:


λ


represent the variance captured along those directions.



62. Reflection


Before using PCA, ask:


How many features exist?


Are the features on comparable scales?


Are many variables correlated?


Is visualization needed?


How much variance should be retained?


Is interpretability important?


Would feature selection be better?


Could PCA introduce information leakage?


Should PCA be included inside a pipeline?


How will the reduced representation be evaluated?

`

};

export default lesson8;