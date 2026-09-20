const lesson2 = {

  id: "lesson2",

  title: "Clustering and Similarity",

  content: `

Lesson 02

Clustering and Similarity


1. What Is Clustering?


Clustering is an unsupervised learning technique used to group observations according to similarity.


The basic idea is:


Similar Observations


→


Same Group.


Dissimilar Observations


→


Different Groups.


Unlike classification, the groups are not predefined during training.



2. Example


Suppose we have customers described by:


Age


Annual Spending.


A dataset might contain:


Customer A:


Age = 22


Spending = 2,000


Customer B:


Age = 24


Spending = 2,200


Customer C:


Age = 45


Spending = 9,000


Customer D:


Age = 48


Spending = 9,500.


Customers A and B are relatively similar.


Customers C and D are relatively similar.


A clustering algorithm may therefore discover two groups.



3. Similarity


Clustering requires a way to determine how similar two observations are.


For numerical data, similarity is often derived from:


Distance.


If two observations are close together, they can be considered more similar under the selected distance measure.



4. Distance


Distance measures how far apart observations are.


Common distance measures include:


Euclidean Distance


Manhattan Distance


Minkowski Distance.


The choice of distance measure can influence clustering results.



5. Euclidean Distance


For two-dimensional points:


A = (x₁,y₁)


B = (x₂,y₂)


Euclidean distance is:


d(A,B) = √[(x₁-x₂)² + (y₁-y₂)²].



6. Example of Euclidean Distance


Suppose:


A = (2,3)


B = (5,7).


Then:


d(A,B)


= √[(2-5)² + (3-7)²]


= √[(-3)² + (-4)²]


= √[9 + 16]


= √25


= 5.



7. Geometric Interpretation


In two dimensions, Euclidean distance is the straight-line distance between two points.


Imagine two points on a graph.


The distance is the length of the shortest straight line connecting them.



8. Euclidean Distance in Higher Dimensions


For:


x = (x₁,x₂,...,xₙ)


and:


y = (y₁,y₂,...,yₙ),


Euclidean distance is:


d(x,y) = √Σ(xᵢ-yᵢ)².



9. Manhattan Distance


Manhattan distance is:


d(x,y) = Σ|xᵢ-yᵢ|.


For two-dimensional points:


d = |x₁-y₁| + |x₂-y₂|.



10. Example


A = (2,3)


B = (5,7).


Manhattan distance:


d = |2-5| + |3-7|


d = 3 + 4


d = 7.



11. Euclidean vs Manhattan


Euclidean distance measures straight-line distance.


Manhattan distance measures the sum of coordinate-wise movements.


The choice can affect which observations are considered close.



12. Minkowski Distance


Minkowski distance generalizes several distance measures.


It can be written as:


d(x,y) = (Σ|xᵢ-yᵢ|ᵖ)¹⁄ᵖ.


When:


p = 1


it corresponds to Manhattan distance.


When:


p = 2


it corresponds to Euclidean distance.



13. Why Distance Matters


Many clustering algorithms depend on distance or a related concept.


If distance is poorly defined, clustering can be poor even when the algorithm itself is implemented correctly.



14. Feature Scaling


Consider:


Feature 1:


Age


Range:


18–80.


Feature 2:


Income


Range:


20,000–2,000,000.


Suppose two customers have similar ages but very different incomes.


The income difference can dominate Euclidean distance.



15. Example of Scale Problem


Customer A:


Age = 20


Income = 30,000.


Customer B:


Age = 30


Income = 100,000.


Raw Euclidean distance:


√[(20-30)² + (30,000-100,000)²].


The income difference dominates the calculation.



16. Standardization


A common solution is:


Standardization.


For a feature:


z = (x - μ) / σ


where:


μ = Mean


σ = Standard Deviation.



17. Standardized Features


After standardization:


Mean ≈ 0


Standard Deviation ≈ 1.


This puts numerical features on more comparable scales.



18. Python Standardization


Python


import pandas as pd


from sklearn.preprocessing import StandardScaler


data = pd.DataFrame({

    "Age": [20, 25, 30, 40, 45],

    "Income": [
        25000,
        40000,
        60000,
        120000,
        150000
    ]

})


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    data
)


print(
    X_scaled
)


Output


The output contains standardized values for Age and Income.



19. Why Scaling Before Clustering?


Scaling prevents a feature with a large numerical range from automatically dominating distance calculations.


However, scaling should not be applied blindly.


The appropriate transformation depends on the meaning and distribution of the variables.



20. Similarity Beyond Distance


Not all datasets are best represented using Euclidean distance.


For text data, for example, cosine similarity can be useful.


For binary features, other similarity measures may be appropriate.



21. Cosine Similarity


Cosine similarity measures the angle between two vectors.


It is commonly written as:


cos(θ) = (x · y) / (||x|| ||y||).


A value closer to:


1


indicates greater directional similarity.


This can be useful for high-dimensional text representations.



22. Example of Text Similarity


Suppose two documents contain similar words.


Their TF-IDF vectors may point in similar directions.


Cosine similarity can therefore identify them as similar even when their raw vector magnitudes differ.



23. Clustering Text


A typical workflow can be:


Documents


↓


Text Preprocessing


↓


TF-IDF


↓


Numerical Vectors


↓


Similarity / Clustering.


This demonstrates that preprocessing and unsupervised learning often work together.



24. Similarity Matrix


For n observations, we can calculate pairwise similarities or distances.


Conceptually:


Observation 1 ↔ Observation 2


Observation 1 ↔ Observation 3


Observation 2 ↔ Observation 3.


The resulting matrix can describe how close observations are.



25. Distance Matrix


A distance matrix contains pairwise distances.


For observations:


A


B


C


the matrix can look conceptually like:


        A    B    C

A       0   dAB  dAC

B      dBA   0   dBC

C      dCA  dCB   0.


The diagonal is zero because an observation has zero distance from itself.



26. Why Distance Matrices Matter


Hierarchical clustering can work with pairwise distances.


Distance matrices can also help analyze the geometry of a dataset.



27. Centroid


A centroid is the mean position of observations in a cluster.


Suppose a cluster contains:


(2,4)


(4,6)


(6,8).


The centroid is:


x = (2+4+6)/3 = 4.


y = (4+6+8)/3 = 6.


Centroid:


(4,6).



28. Why Centroids Matter


k-Means uses centroids to represent clusters.


Each observation is assigned to the closest centroid under the selected distance measure used by the algorithm.



29. Within-Cluster Distance


A good compact cluster contains observations that are relatively close to one another.


One measure of clustering quality is therefore related to:


Within-Cluster Variation.



30. Between-Cluster Separation


Good clustering often attempts to produce:


Small within-cluster distances.


and:


Large between-cluster separation.


This provides an intuitive definition of a useful grouping.



31. Compactness


Compactness describes how close observations are to one another within a cluster.


A highly compact cluster has small internal distances.



32. Separation


Separation describes how far clusters are from one another.


A useful clustering solution often has:


High separation


and:


High compactness.



33. Python Example: Creating Data


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



34. Calculate Euclidean Distance


Python


from sklearn.metrics import pairwise_distances


distances = pairwise_distances(
    X,
    metric="euclidean"
)


print(
    distances
)


Output


A matrix containing the pairwise Euclidean distances between observations.



35. Calculate Manhattan Distance


Python


distances = pairwise_distances(
    X,
    metric="manhattan"
)


print(
    distances
)



36. Compare Distance Metrics


Python


euclidean = pairwise_distances(
    X,
    metric="euclidean"
)


manhattan = pairwise_distances(
    X,
    metric="manhattan"
)


print(
    "Euclidean:"
)


print(
    euclidean
)


print(
    "Manhattan:"
)


print(
    manhattan
)


Different distance definitions can produce different numerical relationships.



37. k-Means and Distance


k-Means typically assigns each observation to a cluster according to its distance from cluster centers under its optimization formulation.


This means:


Feature Representation


and:


Feature Scaling


can strongly affect the result.



38. Clustering with Unscaled Data


Python


from sklearn.cluster import KMeans


model = KMeans(
    n_clusters=2,
    random_state=42,
    n_init=10
)


model.fit(
    data
)


labels = model.labels_


print(
    labels
)



39. Clustering with Scaled Data


Python


model = KMeans(
    n_clusters=2,
    random_state=42,
    n_init=10
)


model.fit(
    X_scaled
)


labels = model.labels_


print(
    labels
)


The assignments may differ because the geometry of the data has changed.



40. Why Results Can Change


Without scaling:


Large-scale features dominate.


With scaling:


Features contribute more comparably.


Therefore, clustering is not simply an algorithm choice.


It is also a representation choice.



41. Outliers and Distance


Distance-based algorithms can be sensitive to extreme observations.


Suppose most observations have:


Income between:


20,000 and 100,000.


One observation has:


Income = 10,000,000.


That observation can strongly affect distances and cluster structure.



42. Handling Outliers


Possible strategies include:


Investigate the observation.


Check whether it is an error.


Transform the variable.


Use robust preprocessing.


Use a clustering algorithm less sensitive to particular assumptions.


The correct strategy depends on the domain.



43. High-Dimensional Data


As the number of dimensions increases, distance-based intuition becomes more difficult.


This is related to:


The Curse of Dimensionality.



44. Curse of Dimensionality


In high-dimensional spaces:


Data becomes sparse.


Distances can become less discriminative.


The amount of data required to cover the space grows rapidly.


This can make nearest-neighbour and clustering methods more challenging.



45. Dimensionality Reduction


One approach is to reduce the number of dimensions before clustering.


For example:


100 Features


↓


PCA


↓


10 Components


↓


Clustering.



46. Important Caution


Dimensionality reduction can remove information.


Therefore, the reduced representation should be evaluated rather than assumed to be equivalent to the original feature space.



47. Clustering Evaluation


Because unsupervised learning does not always have labels, evaluation is different from supervised learning.


Possible internal evaluation measures include:


Inertia


Silhouette Score


Calinski-Harabasz Index


Davies-Bouldin Index.



48. Silhouette Score


Silhouette analysis considers:


How close an observation is to its own cluster


and:


How far it is from other clusters.


The score generally ranges from:


-1 to +1.


Higher values often indicate better separation and cohesion under the measure.



49. Python Silhouette Score


Python


from sklearn.metrics import silhouette_score


score = silhouette_score(
    X_scaled,
    labels
)


print(
    "Silhouette Score:",
    score
)


Output


A value between approximately -1 and 1.



50. Interpreting Silhouette Score


A relatively high score can indicate that observations are:


Close to their own cluster


and:


Far from neighbouring clusters.


A low or negative score may indicate overlapping or poorly separated groups.



51. Inertia


For k-Means, inertia measures the sum of squared distances from observations to their assigned cluster centers.


A simplified expression is:


Inertia = Σ||xᵢ - μcᵢ||².


Lower inertia indicates more compact clusters.


However, inertia generally decreases as the number of clusters increases.



52. Why Inertia Alone Is Not Enough


Suppose:


k = 2


produces some inertia.


Increasing to:


k = 10


will generally reduce the within-cluster error.


That does not automatically mean 10 clusters are meaningful.


Therefore, methods such as the elbow technique can be useful.



53. Elbow Method


Train k-Means for different values of:


k.


For example:


k = 1


2


3


4


5


6


7.


Plot:


k


against:


Inertia.


Look for a point where the improvement begins to diminish significantly.



54. Python Elbow Experiment


Python


inertias = []


for k in range(1, 8):

    model = KMeans(
        n_clusters=k,
        random_state=42,
        n_init=10
    )

    model.fit(
        X_scaled
    )

    inertias.append(
        model.inertia_
    )


plt.plot(
    range(1, 8),
    inertias,
    marker="o"
)


plt.xlabel(
    "Number of Clusters"
)


plt.ylabel(
    "Inertia"
)


plt.title(
    "Elbow Method"
)


plt.show()



55. Clustering Is an Exploratory Tool


A clustering result should lead to questions such as:


What characterizes each cluster?


Are the clusters stable?


Do they correspond to known business patterns?


Are they useful for decision-making?


Can domain experts interpret them?



56. Common Mistakes


Mistake 1:


Using raw features with wildly different scales.


Mistake 2:


Assuming Euclidean distance is always appropriate.


Mistake 3:


Ignoring outliers.


Mistake 4:


Using too many dimensions without considering geometry.


Mistake 5:


Treating a clustering algorithm's labels as ground truth.


Mistake 6:


Selecting k only because it produces a visually pleasing result.


Mistake 7:


Using inertia without considering the number of clusters.



57. Practice


1. What is clustering?


2. What is similarity?


3. What is Euclidean distance?


4. What is Manhattan distance?


5. What is Minkowski distance?


6. Why is scaling important?


7. What is a centroid?


8. What is compactness?


9. What is separation?


10. What is cosine similarity?


11. What is a distance matrix?


12. What is the curse of dimensionality?



58. Quick Check


Question 1


What does Euclidean distance measure?


Answer


Straight-line distance between points in the feature space.


Question 2


Why can feature scaling change clustering results?


Answer


Because scaling changes the geometry and therefore changes the distances between observations.


Question 3


What is a centroid?


Answer


The mean position of the observations assigned to a cluster.


Question 4


What is the Silhouette Score used for?


Answer


It provides an internal measure of cluster cohesion and separation.


Question 5


Why is inertia alone insufficient for choosing k?


Answer


Because inertia generally decreases as more clusters are added.



59. Summary


Clustering groups observations based on similarity.


Distance measures provide one way to define similarity.


Euclidean distance measures straight-line distance.


Manhattan distance sums absolute coordinate differences.


Minkowski distance generalizes several distance measures.


Feature scaling is often important for distance-based algorithms.


Centroids represent average positions in many clustering algorithms.


Compactness describes within-cluster similarity.


Separation describes differences between clusters.


Silhouette Score evaluates cohesion and separation.


Inertia measures within-cluster squared distances for k-Means.


The elbow method can help explore the number of clusters.



60. Extended Study


For a dataset:


X = {x₁,x₂,...,xₙ},


a clustering algorithm attempts to partition the observations:


C₁,C₂,...,Cₖ.


For k-Means, the objective is:


J = Σₖ Σxᵢ∈Cₖ ||xᵢ - μₖ||².


The algorithm attempts to minimize this objective.


This connects clustering directly to optimization.



61. Reflection


Before choosing a clustering method, ask:


What does similarity mean in my dataset?


Which distance measure is appropriate?


Do features require scaling?


Are there outliers?


How many dimensions exist?


Would dimensionality reduction help?


How many clusters might be meaningful?


How will I evaluate the grouping?


Can domain experts interpret the clusters?


Are the discovered groups useful for the actual problem?

`

};

export default lesson2;