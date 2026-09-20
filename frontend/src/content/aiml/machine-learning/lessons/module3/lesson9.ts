const lesson9 = {

  id: "lesson9",

  title: "PCA for Visualization",

  content: `

Lesson 09

PCA for Visualization


1. Why Visualization Matters


Machine learning datasets can contain many dimensions.


Humans, however, are much better at interpreting:


2D


or:


3D


visualizations than hundreds of dimensions.


PCA can help transform high-dimensional data into a smaller representation that can be visualized.



2. The Basic Workflow


A common visualization workflow is:


High-Dimensional Data


↓

Clean Data


↓

Scale Features


↓

Apply PCA


↓

Keep 2 Components


↓

Plot


↓

Interpret Patterns.



3. Example


The Iris dataset contains:


4 numerical features.


We can reduce the four-dimensional representation to:


2 principal components.


Then plot:


PC1


against:


PC2.



4. Load the Dataset


Python


from sklearn.datasets import load_iris


iris = load_iris()


X = iris.data
y = iris.target


print(
    X.shape
)


Output


The dataset has 150 observations and 4 numerical features.



5. Standardize


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


Standardization makes the feature scales more comparable before PCA.



6. Apply PCA


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


The new representation contains two columns:


PC1


PC2.



7. Visualize the Components


Python


import matplotlib.pyplot as plt


plt.scatter(
    X_pca[:, 0],
    X_pca[:, 1]
)


plt.xlabel(
    "Principal Component 1"
)


plt.ylabel(
    "Principal Component 2"
)


plt.title(
    "Iris Data in PCA Space"
)


plt.show()



8. Adding Labels for Exploration


Although PCA itself is unsupervised, we can use known labels to colour points in a visualization when the labels are available for interpretation.


Python


plt.scatter(
    X_pca[:, 0],
    X_pca[:, 1],
    c=y
)


plt.xlabel(
    "PC1"
)


plt.ylabel(
    "PC2"
)


plt.title(
    "PCA Visualization by Class"
)


plt.show()



9. Important Distinction


The labels:


y


were not used to calculate PCA.


PCA was fitted using:


X.


The labels are only being used to help interpret the visualization.



10. Why PCA Can Reveal Structure


Suppose four original features contain correlated information.


PCA can rotate the feature space so that important variation is concentrated into fewer dimensions.


This can make patterns easier to see.



11. Principal Components as Coordinates


After transformation, each observation receives coordinates:


PC1


and:


PC2.


These coordinates represent the observation in the reduced feature space.



12. Explained Variance


Always examine how much information the selected components represent.


Python


print(
    pca.explained_variance_ratio_
)


Example output might look conceptually like:


[0.73, 0.23].


This would mean:


PC1 = 73%


PC2 = 23%.



13. Total Variance Explained


Python


total_variance = (
    pca.explained_variance_ratio_.sum()
)


print(
    "Total explained variance:",
    total_variance
)



14. Why Variance Matters


If two components explain:


95%


of the variance,


the 2D visualization may preserve a large portion of the overall variation.


If they explain only:


35%,


important structure may have been lost.



15. Cumulative Explained Variance


Python


pca_full = PCA()


pca_full.fit(
    X_scaled
)


cumulative = (
    pca_full
    .explained_variance_ratio_
    .cumsum()
)


print(
    cumulative
)



16. Visualization of Explained Variance


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
    "PCA Variance Retention"
)


plt.grid()


plt.show()



17. Reading a PCA Scatter Plot


When examining a PCA plot, look for:


Clusters


Overlapping groups


Outliers


Gradients


Separation.


However, remember that the visualization is only a projection.



18. Cluster-Like Patterns


Suppose the PCA plot shows:


Group A


Group B


Group C.


This may indicate that the original high-dimensional data contains structure corresponding to these groups.


But a visual cluster does not automatically prove that a particular clustering algorithm will produce the same groups.



19. Overlapping Classes


Suppose two classes overlap heavily in PCA space.


This may indicate:


The first two components do not provide strong separation.


Other components may contain additional information.


PCA maximizes variance, not class separation.



20. PCA Is Not a Classification Algorithm


PCA does not attempt to maximize:


Class Accuracy.


It only finds directions of high variance.


Therefore, a class-separating direction may not necessarily be PC1 or PC2.



21. Example of High Variance vs Predictive Information


Suppose:


Feature A


has very large variance but is unrelated to the target.


Feature B


has small variance but strongly distinguishes classes.


PCA may prioritize Feature A.


This is why PCA should not automatically be considered a supervised feature selection technique.



22. Outliers in PCA


Outliers can strongly influence the principal components.


A single extreme observation may change the direction of maximum variance.


Therefore, inspect unusual observations before relying heavily on PCA.



23. Python Outlier Visualization


Python


plt.scatter(
    X_pca[:, 0],
    X_pca[:, 1]
)


plt.xlabel(
    "PC1"
)


plt.ylabel(
    "PC2"
)


plt.title(
    "PCA Projection"
)


plt.show()


Look for observations far away from the main cloud.



24. PCA Loadings


The component matrix can help interpret which original features contribute to each principal component.


Python


print(
    pca.components_
)



25. Loading Interpretation


Suppose PC1 has:


[0.60, 0.55, 0.10, -0.20].


The first two original features contribute strongly to PC1 under this component direction.


The signs indicate the direction of contribution.



26. Feature Names


For easier interpretation:


Python


import pandas as pd


loadings = pd.DataFrame(
    pca.components_,
    columns=iris.feature_names,
    index=[
        "PC1",
        "PC2"
    ]
)


print(
    loadings
)



27. Visualizing Loadings


A loading plot can show the contribution of original variables to principal components.


For example:


PC1


on the horizontal axis.


PC2


on the vertical axis.


Feature vectors can be drawn from the origin.


Such plots are useful for exploratory analysis but require careful interpretation.



28. PCA Visualization of a Larger Dataset


Consider a dataset with:


50 features.


Direct visualization is impossible in the original space.


PCA can produce:


PC1


and:


PC2.


This allows a two-dimensional overview.



29. Digits Dataset


The scikit-learn digits dataset contains:


8 × 8


images.


Each image therefore has:


64 pixel features.



30. Load Digits


Python


from sklearn.datasets import load_digits


digits = load_digits()


X = digits.data
y = digits.target


print(
    X.shape
)


Output


The dataset contains many observations represented using 64 numerical pixel features.



31. Scale Digits


Python


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)



32. Apply PCA


Python


pca = PCA(
    n_components=2
)


X_pca = pca.fit_transform(
    X_scaled
)


print(
    X_pca.shape
)



33. Visualize Digits


Python


plt.scatter(
    X_pca[:, 0],
    X_pca[:, 1],
    c=y,
    s=10
)


plt.xlabel(
    "PC1"
)


plt.ylabel(
    "PC2"
)


plt.title(
    "Digits Dataset in PCA Space"
)


plt.show()



34. What Can We Learn?


The PCA plot can show whether different digit classes appear:


Separated


Partially separated


Overlapping.


This is an exploratory visualization.


It does not itself classify the digits.



35. PCA Before Clustering Visualization


Suppose we perform clustering on a high-dimensional dataset.


We can visualize the cluster assignments in PCA space.


Workflow:


Original Data


↓

Scale


↓

Clustering


↓

PCA for Visualization


↓

Plot Cluster Labels.



36. Important Distinction


The PCA representation used only for visualization does not necessarily have to be the representation used for clustering.


For example:


Clustering can be performed in the original standardized feature space.


PCA can then be used only to visualize the resulting labels.



37. Example


Python


from sklearn.cluster import KMeans


kmeans = KMeans(
    n_clusters=3,
    random_state=42,
    n_init=10
)


clusters = kmeans.fit_predict(
    X_scaled
)


Then visualize:


Python


plt.scatter(
    X_pca[:, 0],
    X_pca[:, 1],
    c=clusters
)


plt.xlabel(
    "PC1"
)


plt.ylabel(
    "PC2"
)


plt.title(
    "Clusters Visualized Using PCA"
)


plt.show()



38. Why This Is Useful


The clustering algorithm may operate in:


64 dimensions.


But the visualization uses:


2 dimensions.


This provides a human-readable view of the high-dimensional clustering result.



39. PCA Before Clustering


Another possibility is:


Scale


↓

PCA


↓

Clustering.


This reduces the feature space before clustering.


However, the choice can affect results because PCA removes or compresses some information.



40. Compare Both Approaches


Experiment:


Approach A:


Scale → Cluster.


Approach B:


Scale → PCA → Cluster.


Compare:


Cluster assignments


Silhouette score


Visualization.



41. 3D PCA


PCA can also reduce data to:


3 components.


Python


pca = PCA(
    n_components=3
)


X_pca_3d = pca.fit_transform(
    X_scaled
)


print(
    X_pca_3d.shape
)



42. Why Use 3 Components?


Three dimensions can preserve more information than two.


However, 3D visualization is more difficult to interpret than a 2D plot.


For many educational and exploratory tasks, 2D remains useful.



43. Cumulative Variance and Visualization


When choosing two components, ask:


How much variance is retained?


If the answer is low, the 2D plot may provide only a partial view of the dataset.



44. PCA and Compression


Suppose:


64 original features.


We retain:


20 components.


The representation becomes:


20-dimensional.


This can reduce storage or computational requirements in some workflows.



45. Reconstruction Experiment


Python


pca = PCA(
    n_components=20
)


X_reduced = pca.fit_transform(
    X_scaled
)


X_reconstructed = pca.inverse_transform(
    X_reduced
)


error = np.mean(
    (
        X_scaled
        -
        X_reconstructed
    ) ** 2
)


print(
    "Reconstruction error:",
    error
)



46. Visualization of Reconstruction


For image data, reconstructed samples can be displayed.


The goal is to observe:


What information was retained?


What details were lost?



47. PCA and Interpretability


The original features are easy to name.


For example:


Pixel 1


Pixel 2


Pixel 3.


PCA transforms them into:


PC1


PC2.


The components are combinations of many original variables.


Therefore, interpretation requires examining loadings.



48. Common Mistakes


Mistake 1:


Thinking PC1 is automatically the most predictive component.


Mistake 2:


Ignoring feature scaling.


Mistake 3:


Assuming a 2D plot shows the complete dataset structure.


Mistake 4:


Ignoring explained variance.


Mistake 5:


Using target labels to fit PCA.


Mistake 6:


Interpreting visual separation as proof of causal structure.



49. Practice


1. Why is PCA useful for visualization?


2. What does PC1 represent?


3. What does explained variance mean?


4. Why should scaling often be applied?


5. Why can two classes overlap in PCA space?


6. Does PCA maximize class separation?


7. What are PCA loadings?


8. Why can outliers affect PCA?


9. How can PCA be used to visualize clustering?



50. Quick Check


Question 1


Why use PCA for visualization?


Answer


To project high-dimensional data into a small number of dimensions that can be plotted.


Question 2


Does PCA use class labels?


Answer


Standard PCA does not use target labels.


Question 3


What should be checked when interpreting a 2D PCA plot?


Answer


The explained variance and the fact that the plot is only a projection of the original data.


Question 4


Can PCA reveal clusters?


Answer


It can reveal visual structure, but it does not guarantee meaningful clusters.


Question 5


Can PCA be used with 64-dimensional image data?


Answer


Yes.



51. Summary


PCA can transform high-dimensional data into two or three dimensions for visualization.


Standardization is often useful before PCA.


PC1 and PC2 provide new coordinates.


Explained variance indicates how much variation the selected components capture.


PCA does not use target labels in its standard unsupervised form.


A PCA plot can reveal structure, overlap, and outliers.


PCA can also visualize clustering results.


The visualization should be interpreted as a projection rather than a complete representation of the original space.



52. Extended Study


Suppose the centered dataset is:


X.


PCA finds orthogonal directions:


w₁,w₂,...,wₚ.


The transformed representation is:


Z = XW.


The columns of W contain principal component directions.


The variance of the projection onto a component determines its eigenvalue.


Components are ordered:


λ₁ ≥ λ₂ ≥ ... ≥ λₚ.


Therefore, the first components capture the greatest variance.



53. Reflection


When using PCA for visualization, ask:


How many original dimensions exist?


How much variance do PC1 and PC2 explain?


Are features properly scaled?


Are there visible groups?


Are the groups actually separated in the original space?


Are outliers influencing the projection?


What do the component loadings mean?


Would a third component reveal additional information?


Could the visualization be misleading?



`

};

export default lesson9;