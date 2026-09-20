const lesson7 = {

  id: "lesson7",

  title: "Comparing Clustering Algorithms",

  content: `

Lesson 07

Comparing Clustering Algorithms


1. Why Compare Clustering Algorithms?


There is no single clustering algorithm that works best for every dataset.


Different algorithms make different assumptions about:


Cluster Shape


Density


Distance


Noise


Number of Clusters.


Therefore, selecting a clustering method requires understanding the structure of the data.



2. Main Algorithms


This module has introduced:


k-Means


Hierarchical Clustering


DBSCAN.


Each uses a different idea.


k-Means:


Centroids.


Hierarchical:


Hierarchy and linkage.


DBSCAN:


Density.



3. k-Means


k-Means attempts to divide observations into:


k


clusters.


It represents each cluster using a centroid.



4. k-Means Strengths


It is:


Simple


Fast for many datasets


Easy to implement


Easy to visualize in low dimensions.


It can work well when clusters are compact and reasonably separated.



5. k-Means Limitations


It:


Requires k.


Can be sensitive to scaling.


Can be affected by outliers.


Can struggle with irregular shapes.


Can produce poor results when clusters have very different structures.



6. Hierarchical Clustering


Hierarchical clustering creates a hierarchy of observations and clusters.


Agglomerative clustering begins with individual observations and repeatedly merges clusters.



7. Hierarchical Strengths


It:


Produces a hierarchy.


Can be visualized using dendrograms.


Allows exploration of multiple cluster levels.


Can be useful for exploratory analysis.



8. Hierarchical Limitations


It:


Can be computationally expensive.


Is sensitive to linkage choice.


Can be affected by feature scale.


Makes early merges difficult to undo.



9. DBSCAN


DBSCAN identifies dense regions.


It can discover clusters without requiring k beforehand.


It can also label noise.



10. DBSCAN Strengths


It:


Can identify irregular shapes.


Can detect noise.


Does not require k.


Can be useful when cluster density is meaningful.



11. DBSCAN Limitations


It can struggle with:


Different cluster densities


High-dimensional data


Poor eps selection.


Distance-based scaling issues can also be important.



12. Comparing Assumptions


k-Means assumes a useful centroid representation.


Hierarchical clustering depends on linkage.


DBSCAN assumes meaningful density relationships.


Therefore, algorithm selection should follow the structure of the problem.



13. Synthetic Dataset


Synthetic datasets are useful for comparing algorithms because their structures can be controlled.


Python


from sklearn.datasets import make_blobs


X, y = make_blobs(
    n_samples=400,
    centers=3,
    cluster_std=1.0,
    random_state=42
)


This creates a dataset with approximately compact groups.



14. k-Means on Blobs


Python


from sklearn.cluster import KMeans


kmeans = KMeans(
    n_clusters=3,
    random_state=42,
    n_init=10
)


kmeans_labels = kmeans.fit_predict(
    X
)



15. Hierarchical Clustering on Blobs


Python


from sklearn.cluster import AgglomerativeClustering


hierarchical = AgglomerativeClustering(
    n_clusters=3,
    linkage="ward"
)


hierarchical_labels = hierarchical.fit_predict(
    X
)



16. DBSCAN on Blobs


Python


from sklearn.cluster import DBSCAN


dbscan = DBSCAN(
    eps=0.8,
    min_samples=5
)


dbscan_labels = dbscan.fit_predict(
    X
)



17. Visual Comparison


Python


import matplotlib.pyplot as plt


plt.figure(
    figsize=(15, 4)
)


plt.subplot(
    1,
    3,
    1
)


plt.scatter(
    X[:, 0],
    X[:, 1],
    c=kmeans_labels
)


plt.title(
    "k-Means"
)


plt.subplot(
    1,
    3,
    2
)


plt.scatter(
    X[:, 0],
    X[:, 1],
    c=hierarchical_labels
)


plt.title(
    "Hierarchical"
)


plt.subplot(
    1,
    3,
    3
)


plt.scatter(
    X[:, 0],
    X[:, 1],
    c=dbscan_labels
)


plt.title(
    "DBSCAN"
)


plt.show()



18. Why Visualization Matters


The numerical metrics may be similar.


However, visualization can reveal:


Different cluster boundaries


Noise


Small clusters


Incorrect assignments.


For low-dimensional data, visualization is especially valuable.



19. Two-Moons Dataset


Now create a dataset with curved structure.


Python


from sklearn.datasets import make_moons


X, y = make_moons(
    n_samples=400,
    noise=0.08,
    random_state=42
)



20. k-Means on Two Moons


Python


kmeans = KMeans(
    n_clusters=2,
    random_state=42,
    n_init=10
)


kmeans_labels = kmeans.fit_predict(
    X
)



21. DBSCAN on Two Moons


Python


dbscan = DBSCAN(
    eps=0.2,
    min_samples=5
)


dbscan_labels = dbscan.fit_predict(
    X
)



22. Compare Results


Python


plt.figure(
    figsize=(10, 4)
)


plt.subplot(
    1,
    2,
    1
)


plt.scatter(
    X[:, 0],
    X[:, 1],
    c=kmeans_labels
)


plt.title(
    "k-Means"
)


plt.subplot(
    1,
    2,
    2
)


plt.scatter(
    X[:, 0],
    X[:, 1],
    c=dbscan_labels
)


plt.title(
    "DBSCAN"
)


plt.show()



23. Interpretation


The two algorithms use different assumptions.


k-Means searches for centroid-based groups.


DBSCAN searches for dense connected regions.


Therefore, DBSCAN can represent certain curved structures more naturally.



24. Evaluation


Clustering can be evaluated using internal metrics.


Common examples:


Inertia


Silhouette Score


Calinski-Harabasz Score


Davies-Bouldin Score.



25. Silhouette Score


The silhouette score considers:


Similarity within the assigned cluster.


Distance from other clusters.


Higher values generally indicate better-defined groups under the metric.



26. Calinski-Harabasz Index


The Calinski-Harabasz index compares:


Between-cluster dispersion


with:


Within-cluster dispersion.


Higher values generally indicate better separation and compactness under this measure.



27. Python Calinski-Harabasz


Python


from sklearn.metrics import calinski_harabasz_score


score = calinski_harabasz_score(
    X,
    kmeans_labels
)


print(
    "Calinski-Harabasz:",
    score
)



28. Davies-Bouldin Index


The Davies-Bouldin index evaluates the similarity between clusters.


Lower values are generally better under this metric.



29. Python Davies-Bouldin


Python


from sklearn.metrics import davies_bouldin_score


score = davies_bouldin_score(
    X,
    kmeans_labels
)


print(
    "Davies-Bouldin:",
    score
)



30. Important Evaluation Warning


Internal clustering metrics are mathematical summaries.


They do not guarantee that clusters are useful for a business or scientific problem.


A mathematically strong clustering can still be practically meaningless.



31. External Evaluation


If reference labels are available only for evaluation, we can compare clustering assignments with them.


Possible metrics include:


Adjusted Rand Index


Adjusted Mutual Information.


However, these labels should not be used to fit the unsupervised model if the goal is genuinely unsupervised learning.



32. Adjusted Rand Index


Python


from sklearn.metrics import adjusted_rand_score


score = adjusted_rand_score(
    y,
    kmeans_labels
)


print(
    "ARI:",
    score
)



33. Comparing Cluster Counts


Different algorithms may produce different numbers of clusters.


For example:


k-Means:


3 clusters.


DBSCAN:


4 clusters + noise.


This is not necessarily an error.


The algorithms are using different definitions of structure.



34. Noise Handling


k-Means generally assigns every observation to a cluster.


DBSCAN can assign:


-1


for noise.


This difference is important in anomaly-heavy datasets.



35. Scaling Comparison


Create features with very different scales.


Then compare:


Raw Data


vs:


Standardized Data.


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


Run the algorithms on both versions.



36. Algorithm Selection Guide


If the dataset has:


Compact, reasonably separated groups:


Consider k-Means.


If you want:


A hierarchy:


Consider hierarchical clustering.


If the dataset contains:


Irregular dense structures and noise:


Consider DBSCAN.



37. But This Is Not a Rule


These recommendations are starting points.


Real datasets can violate assumptions.


Therefore, always experiment and evaluate.



38. Cluster Stability


A clustering solution should ideally be reasonably stable.


Test:


Different random seeds.


Different samples.


Slight parameter changes.


If tiny changes produce completely different structures, interpretation should be cautious.



39. Bootstrap Stability Idea


A possible experiment:


Sample the dataset.


Cluster the sample.


Repeat.


Compare the resulting cluster structures.


This helps investigate robustness.



40. Parameter Sensitivity


k-Means:


Main parameter:


k.


Hierarchical:


n_clusters


and:


linkage.


DBSCAN:


eps


and:


min_samples.


Understanding parameter sensitivity is essential.



41. Real-World Example: Customer Segmentation


Suppose the dataset contains:


Recency


Frequency


Monetary Value.


Possible approaches:


k-Means


for compact customer groups.


Hierarchical clustering


for exploring nested segments.


DBSCAN


for identifying dense customer groups and unusual observations.



42. Real-World Example: Geographic Analysis


If observations are geographic:


DBSCAN may be useful for dense hotspots.


Hierarchical clustering may reveal nested regional structures.


k-Means can be useful when compact geographic groups are appropriate.



43. Real-World Example: Biological Data


Hierarchical clustering can be useful when researchers want a tree-like relationship structure.


k-Means can provide compact groups.


DBSCAN can identify dense regions or unusual observations under suitable feature representations.



44. Experiment: Algorithm Comparison


Choose one dataset.


Run:


k-Means


Hierarchical Clustering


DBSCAN.


Record:


Number of clusters


Noise count


Silhouette Score


Calinski-Harabasz Score


Davies-Bouldin Score.



45. Comparison Table


Create a table such as:


Model


Clusters


Noise


Silhouette


Calinski-Harabasz


Davies-Bouldin.


Do not choose the final algorithm based on one metric alone.



46. Experiment: Different Dataset Shapes


Test the algorithms on:


Blobs


Two Moons


Circles.


Observe which algorithms can represent the structures effectively.



47. Python Dataset Comparison


Python


from sklearn.datasets import (
    make_blobs,
    make_moons,
    make_circles
)


datasets = [

    make_blobs(
        n_samples=300,
        centers=3,
        random_state=42
    ),

    make_moons(
        n_samples=300,
        noise=0.08,
        random_state=42
    ),

    make_circles(
        n_samples=300,
        factor=0.5,
        noise=0.05,
        random_state=42
    )

]


Each dataset provides a different geometric structure.



48. Why Dataset Shape Matters


Blobs:


Often suitable for centroid-based clustering.


Moons:


Require algorithms capable of following curved structures.


Circles:


Challenge algorithms that assume compact centroid-based groups.


This demonstrates why algorithm assumptions matter.



49. Common Mistakes


Mistake 1:


Assuming one clustering algorithm is universally best.


Mistake 2:


Comparing models without using the same representation.


Mistake 3:


Ignoring feature scaling.


Mistake 4:


Comparing only one metric.


Mistake 5:


Ignoring noise.


Mistake 6:


Ignoring cluster interpretability.


Mistake 7:


Assuming more clusters means better clustering.



50. Practice


1. What are the main differences between k-Means and DBSCAN?


2. What is the main advantage of hierarchical clustering?


3. What does a dendrogram represent?


4. Which algorithm explicitly identifies noise?


5. Which algorithm requires k?


6. Why does cluster shape matter?


7. What is the silhouette score?


8. What is the Calinski-Harabasz index?


9. What is the Davies-Bouldin index?


10. Why should multiple metrics be considered?



51. Quick Check


Question 1


Which algorithm uses centroids?


Answer


k-Means.


Question 2


Which algorithm can explicitly label noise?


Answer


DBSCAN.


Question 3


Which algorithm produces a dendrogram?


Answer


Hierarchical clustering.


Question 4


Which algorithm requires the number of clusters before fitting?


Answer


k-Means and standard agglomerative clustering when configured with n_clusters require a requested final cluster count, although hierarchical methods can also be explored through a dendrogram.


Question 5


Can one algorithm be best for every dataset?


Answer


No.



52. Summary


k-Means is centroid-based.


Hierarchical clustering builds a hierarchy.


DBSCAN is density-based.


Different algorithms make different assumptions.


Cluster shape strongly influences algorithm performance.


Feature scaling can affect all distance-based methods.


Internal metrics include:


Silhouette


Calinski-Harabasz


Davies-Bouldin.


External metrics can be used when reference labels are available for evaluation.


Visualization and domain interpretation remain important.



53. Extended Study


Clustering can be viewed as a representation problem.


The algorithm is not simply finding numbers.


It is defining:


Which observations belong together.


Different algorithms define "together" differently.


k-Means:


Close to the same centroid.


Hierarchical:


Close according to linkage relationships.


DBSCAN:


Connected through dense regions.


Therefore, changing the algorithm changes the mathematical definition of similarity and structure.



54. Reflection


When comparing clustering algorithms, ask:


What does similarity mean?


What shapes are present?


Are clusters compact?


Are densities similar?


Are there outliers?


Do I need a hierarchy?


Do I need explicit noise detection?


Which metrics support the interpretation?


Are the clusters stable?


Can domain experts understand them?


Does the clustering actually help solve the problem?

`

};

export default lesson7;