const lesson5 = {

  id: "lesson5",

  title: "Hierarchical Clustering",

  content: `

Lesson 05

Hierarchical Clustering


1. Introduction


Hierarchical clustering is an unsupervised learning technique that creates a hierarchy of groups.


Unlike k-Means, hierarchical clustering does not require us to start by selecting one final number of clusters.


Instead, it builds a hierarchy that can be represented using a:


Dendrogram.



2. Basic Idea


The process can be visualized as:


Individual Observations


↓

Small Groups


↓

Larger Groups


↓

One Large Group.


The hierarchy can then be cut at a chosen level to obtain a particular number of clusters.



3. Why Is It Called Hierarchical?


The algorithm creates relationships between groups at different levels.


At one level:


Many small clusters.


At another level:


Fewer larger clusters.


At the top:


All observations belong to one group.



4. Dendrogram


A dendrogram is a tree-like visualization of the hierarchical clustering process.


It shows:


Which observations or clusters were joined.


The distance or dissimilarity at which they were joined.



5. Agglomerative Clustering


One of the most common approaches is:


Agglomerative Hierarchical Clustering.


It is a bottom-up method.



6. Bottom-Up Process


Initially:


Every observation is its own cluster.


Then:


Merge the two closest clusters.


Then:


Merge another pair.


Continue until all observations belong to one cluster.



7. Example


Suppose we have:


A


B


C


D.


Initially:


{A}


{B}


{C}


{D}.


If A and B are closest:


{A,B}


Then:


{C}


{D}.


If C and D are next closest:


{A,B}


{C,D}.


Finally:


{A,B,C,D}.



8. Agglomerative Algorithm


Step 1:


Start with each observation as its own cluster.


Step 2:


Calculate distances between clusters.


Step 3:


Find the closest pair.


Step 4:


Merge them.


Step 5:


Recalculate cluster distances.


Step 6:


Repeat until one cluster remains.



9. Cluster Distance


Once clusters contain multiple observations, we need to define:


Distance between clusters.


This is where:


Linkage


becomes important.



10. Linkage


Linkage determines how the distance between two clusters is calculated.


Common linkage methods include:


Single Linkage


Complete Linkage


Average Linkage


Ward Linkage.



11. Single Linkage


Single linkage defines the distance between two clusters using the closest pair of observations.


Conceptually:


Distance between clusters


=


Minimum pairwise distance.



12. Single Linkage Example


Cluster A:


A1


A2.


Cluster B:


B1


B2.


If the smallest distance between any observation in A and any observation in B is:


2,


then the single-linkage distance is:


2.



13. Effect of Single Linkage


Single linkage can connect clusters through chains of nearby observations.


This can be useful for certain irregular structures.


However, it can also produce:


Chaining.



14. Complete Linkage


Complete linkage uses the largest pairwise distance between observations in the two clusters.


Conceptually:


Cluster Distance


=


Maximum pairwise distance.



15. Effect of Complete Linkage


Complete linkage tends to prefer more compact groups because it considers the farthest points between clusters.



16. Average Linkage


Average linkage uses the average of pairwise distances between observations in the two clusters.


It provides a compromise between:


Single Linkage


and:


Complete Linkage.



17. Ward Linkage


Ward linkage attempts to merge clusters while minimizing the increase in within-cluster variance.


It is commonly used with Euclidean distances.


It often produces relatively compact clusters.



18. Comparing Linkages


Single:


Minimum pairwise distance.


Complete:


Maximum pairwise distance.


Average:


Average pairwise distance.


Ward:


Variance-based merging criterion.



19. Dendrogram Interpretation


Consider a dendrogram.


The vertical axis represents the distance or linkage value at which merges occur.


A low merge:


Observations are relatively similar.


A high merge:


Clusters are relatively dissimilar.



20. Cutting a Dendrogram


Suppose the dendrogram contains:


Many branches.


Draw a horizontal line across the dendrogram.


The number of branches intersected by the line corresponds to the resulting number of clusters.


This allows us to explore different cluster counts.



21. Example


Suppose a dendrogram can be cut at:


Distance = 5.


This may produce:


3 clusters.


If we cut at:


Distance = 10,


we might obtain:


2 clusters.



22. Hierarchical Clustering vs k-Means


k-Means:


Requires k before fitting.


Uses centroids.


Iteratively assigns observations.


Hierarchical:


Builds a hierarchy.


Does not require the final k at the beginning.


Can visualize the hierarchy using a dendrogram.



23. Python Example


Python


import numpy as np


X = np.array([

    [1, 2],

    [1.5, 2.5],

    [2, 3],

    [8, 8],

    [8.5, 8.5],

    [9, 9]

])


print(
    X
)



24. Agglomerative Clustering


Python


from sklearn.cluster import AgglomerativeClustering


model = AgglomerativeClustering(
    n_clusters=2,
    linkage="ward"
)


labels = model.fit_predict(
    X
)


print(
    labels
)


Output


Each observation receives a cluster label.



25. Number of Clusters


The parameter:


n_clusters


controls the final number of clusters returned by the fitted model.


For example:


n_clusters=3


creates three final groups.



26. Different Linkages


Python


model = AgglomerativeClustering(
    n_clusters=2,
    linkage="complete"
)


labels = model.fit_predict(
    X
)


print(
    labels
)


The linkage strategy can influence the final clusters.



27. Single Linkage


Python


model = AgglomerativeClustering(
    n_clusters=2,
    linkage="single"
)


labels = model.fit_predict(
    X
)


print(
    labels
)



28. Average Linkage


Python


model = AgglomerativeClustering(
    n_clusters=2,
    linkage="average"
)


labels = model.fit_predict(
    X
)


print(
    labels
)



29. Visualizing Clusters


Python


import matplotlib.pyplot as plt


plt.scatter(
    X[:, 0],
    X[:, 1],
    c=labels
)


plt.xlabel(
    "Feature 1"
)


plt.ylabel(
    "Feature 2"
)


plt.title(
    "Agglomerative Clustering"
)


plt.show()



30. Dendrogram with SciPy


A dendrogram can be generated using:


SciPy.


Python


from scipy.cluster.hierarchy import (
    dendrogram,
    linkage
)


Z = linkage(
    X,
    method="ward"
)


plt.figure(
    figsize=(8, 5)
)


dendrogram(
    Z
)


plt.xlabel(
    "Observations"
)


plt.ylabel(
    "Distance"
)


plt.title(
    "Hierarchical Clustering Dendrogram"
)


plt.show()



31. Understanding the Linkage Matrix


The:


linkage


function returns information describing the hierarchical merging process.


The matrix contains information about:


Which clusters were merged.


The distance at which they were merged.


The number of observations contained in the newly formed cluster.



32. Dendrogram Labels


Python


dendrogram(
    Z,
    labels=[
        "A",
        "B",
        "C",
        "D",
        "E",
        "F"
    ]
)


Labels can make the dendrogram easier to interpret.



33. Cutting the Dendrogram


The hierarchy can be converted into cluster assignments using a chosen distance threshold.


Python


from scipy.cluster.hierarchy import (
    fcluster
)


labels = fcluster(
    Z,
    t=2,
    criterion="maxclust"
)


print(
    labels
)


Here:


t=2


requests a maximum number of clusters under this criterion.



34. Scaling


Hierarchical clustering can also be sensitive to feature scale when distance-based linkage is used.


Standardization may therefore be appropriate for numerical variables.


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


model = AgglomerativeClustering(
    n_clusters=2,
    linkage="ward"
)


labels = model.fit_predict(
    X_scaled
)


print(
    labels
)



35. Why Scaling Matters


Suppose one feature has a much larger range than another.


Distances between observations can then be dominated by that feature.


Scaling can make the features contribute more comparably.



36. Ward Linkage and Scaling


Ward linkage uses variance-related calculations.


Feature scale can therefore strongly influence the result.


Standardization is often important when features have different units or scales.



37. Computational Considerations


Hierarchical clustering can require substantial computation and memory for large datasets because relationships between observations or clusters must be considered repeatedly.


It is often more practical for small or medium-sized datasets.



38. Strength: Hierarchical Structure


One important advantage is that the algorithm provides a hierarchy rather than only one final partition.


The dendrogram can show relationships at multiple levels.



39. Strength: No Need to Commit Immediately


With k-Means, we must select:


k.


With hierarchical clustering, we can first build the hierarchy and later inspect different cuts.


This can be useful during exploratory analysis.



40. Limitation: Sensitivity to Linkage


Different linkage methods can produce substantially different results.


Therefore, linkage selection matters.



41. Limitation: Irreversible Merges


In standard agglomerative clustering, once two clusters are merged, that merge is not undone later.


An early poor merge can therefore influence the final hierarchy.



42. Limitation: Scaling


Like other distance-based methods, hierarchical clustering can be strongly affected by feature scale.



43. Limitation: Large Datasets


Hierarchical clustering can become expensive as the number of observations grows.


For very large datasets, other methods may be more practical.



44. Real-World Example: Biological Data


Hierarchical clustering can be used to explore relationships between:


Genes


Samples


Proteins.


The resulting dendrogram can show groups of observations with similar patterns.



45. Real-World Example: Customer Segmentation


Customers can be represented using:


Spending


Frequency


Recency.


Hierarchical clustering can reveal nested customer groups.



46. Real-World Example: Document Analysis


Documents can be represented using numerical vectors.


Hierarchical clustering can organize similar documents into a hierarchy.


The hierarchy can then be explored at different levels.



47. k-Means vs Hierarchical Clustering


k-Means:


Centroid-based.


Requires k.


Iterative.


Usually efficient for many large datasets.


Hierarchical:


Hierarchy-based.


Dendrogram.


Linkage-dependent.


Can be computationally expensive for large datasets.



48. Experiment: Compare Linkages


Train models using:


single


complete


average


ward.


Compare:


Cluster assignments.


Visualization.


Silhouette score.



49. Python Linkage Experiment


Python


from sklearn.metrics import silhouette_score


for method in [
    "single",
    "complete",
    "average",
    "ward"
]:

    model = AgglomerativeClustering(
        n_clusters=3,
        linkage=method
    )

    labels = model.fit_predict(
        X
    )

    score = silhouette_score(
        X,
        labels
    )

    print(
        method,
        score
    )



50. Experiment: Number of Clusters


Try:


n_clusters = 2


3


4


5.


For each value calculate:


Silhouette Score.


Also visualize the resulting groups when possible.



51. Experiment: Scaling


Compare hierarchical clustering:


Without scaling.


With StandardScaler.


Observe how the dendrogram and cluster assignments change.



52. Experiment: Dendrogram


Create a dendrogram.


Identify large vertical gaps.


Test horizontal cuts through those gaps.


Compare the resulting cluster counts.



53. Common Mistakes


Mistake 1:


Ignoring feature scaling.


Mistake 2:


Using only one linkage method.


Mistake 3:


Treating the dendrogram as an automatic answer.


Mistake 4:


Ignoring computational cost.


Mistake 5:


Assuming an early merge can be corrected later.


Mistake 6:


Choosing clusters without inspecting their characteristics.



54. Practice


1. What is hierarchical clustering?


2. What is agglomerative clustering?


3. What is a dendrogram?


4. What is linkage?


5. What is single linkage?


6. What is complete linkage?


7. What is average linkage?


8. What is Ward linkage?


9. How does hierarchical clustering differ from k-Means?


10. Why can scaling matter?



55. Quick Check


Question 1


What is the main output of hierarchical clustering?


Answer


A hierarchy of relationships between observations or clusters, often visualized with a dendrogram.


Question 2


What is agglomerative clustering?


Answer


A bottom-up method that starts with individual observations and repeatedly merges clusters.


Question 3


What does linkage determine?


Answer


How the distance between clusters is calculated.


Question 4


What is a dendrogram?


Answer


A tree-like visualization of the hierarchical merging process.


Question 5


Can hierarchical clustering explore different numbers of clusters?


Answer


Yes. The hierarchy can be cut at different levels.



56. Summary


Hierarchical clustering creates a hierarchy of groups.


Agglomerative clustering starts with individual observations and repeatedly merges clusters.


A dendrogram visualizes the hierarchy.


Linkage determines how distances between clusters are measured.


Single linkage uses the closest pair.


Complete linkage uses the farthest pair.


Average linkage uses average pairwise distance.


Ward linkage attempts to control within-cluster variance.


Feature scaling can be important.


Hierarchical clustering is useful for exploratory analysis but can become computationally expensive for large datasets.



57. Extended Study


Let the initial clusters be:


C₁ = {x₁}


C₂ = {x₂}


...


Cₙ = {xₙ}.


At each step, the algorithm selects two clusters according to the chosen linkage criterion and merges them.


After n-1 merges, a single cluster contains all observations.


The dendrogram records these merges and their associated distances.



58. Reflection


Before applying hierarchical clustering, ask:


How many observations are there?


Which distance measure is appropriate?


Which linkage should be used?


Do the features need scaling?


Would a dendrogram provide useful insight?


Are the clusters interpretable?


Would k-Means be more efficient?


Would DBSCAN be more appropriate for irregular shapes?


How will the final grouping be evaluated?

`

};

export default lesson5;