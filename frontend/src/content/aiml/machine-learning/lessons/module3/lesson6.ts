const lesson6 = {

  id: "lesson6",

  title: "DBSCAN Clustering",

  content: `

Lesson 06

DBSCAN Clustering


1. Introduction to DBSCAN


DBSCAN stands for:


Density-Based Spatial Clustering of Applications with Noise.


It is an unsupervised clustering algorithm that identifies groups based on the density of observations.


Unlike k-Means, DBSCAN does not require the number of clusters to be specified beforehand.


It can also identify observations that do not belong to sufficiently dense regions.



2. The Main Idea


The central idea is:


Dense Region


→


Cluster


Sparse Region


→


Potential Boundary or Noise.


DBSCAN therefore focuses on:


How many observations are close together?


rather than:


Where is the centroid?



3. Why Density-Based Clustering?


Some datasets contain clusters with irregular shapes.


For example:


Curved groups


Circular groups


Long connected regions.


Centroid-based algorithms such as k-Means may struggle with these structures.


Density-based methods can sometimes handle them more naturally.



4. Example


Imagine two crescent-shaped groups:


Moon A


and:


Moon B.


The groups may not have simple circular shapes.


k-Means may divide the data using centroid-based regions.


DBSCAN instead attempts to identify dense connected regions.



5. Important DBSCAN Parameters


Two important parameters are:


eps


and:


min_samples.



6. eps


The parameter:


eps


represents the neighbourhood radius.


For a given observation, DBSCAN examines other observations within this distance.



7. min_samples


The parameter:


min_samples


defines how many observations must be present in an eps-neighbourhood for the region to be considered sufficiently dense.



8. Core Point


A point is considered a:


Core Point


when its eps-neighbourhood contains at least the required number of observations according to min_samples.


The exact counting convention includes the point itself in scikit-learn's implementation.



9. Border Point


A:


Border Point


is not itself a core point, but it lies within the neighbourhood of a core point.


It can therefore belong to a cluster.



10. Noise Point


A point can be classified as:


Noise


when it does not belong to a sufficiently dense region and is not reachable from a core point under the DBSCAN rules.



11. Three Important Concepts


DBSCAN therefore distinguishes:


Core Points


Border Points


Noise Points.



12. Density-Based Intuition


Imagine observations represented as dots.


A dense region may look like:


••••••••


••••••••


••••••••


A sparse region may look like:


•


      •


           •


                •.


DBSCAN attempts to identify the dense region as a cluster.



13. DBSCAN Workflow


The general process is:


Select an unvisited observation.


↓

Find its eps-neighbourhood.


↓

Check whether enough observations exist.


↓

If dense enough, create or expand a cluster.


↓

Continue expanding through reachable core points.


↓

Mark isolated observations as noise.



14. Density Reachability


Clusters can grow through connected core points.


Suppose:


A


is a core point.


B


is within A's neighbourhood.


B


is also a core point.


Then the cluster can expand from A through B.


This allows DBSCAN to discover connected dense regions.



15. Why DBSCAN Does Not Need k


DBSCAN does not ask:


How many clusters should I create?


Instead, it asks:


What counts as a dense region?


The parameters:


eps


and:


min_samples


control this definition.



16. Python Example


Python


import numpy as np


from sklearn.datasets import make_moons


X, y = make_moons(
    n_samples=300,
    noise=0.08,
    random_state=42
)


print(
    X.shape
)



17. Visualize the Dataset


Python


import matplotlib.pyplot as plt


plt.scatter(
    X[:, 0],
    X[:, 1]
)


plt.xlabel(
    "Feature 1"
)


plt.ylabel(
    "Feature 2"
)


plt.title(
    "Two-Moons Dataset"
)


plt.show()


The two groups have curved shapes.



18. Apply DBSCAN


Python


from sklearn.cluster import DBSCAN


model = DBSCAN(
    eps=0.25,
    min_samples=5
)


labels = model.fit_predict(
    X
)


print(
    labels[:20]
)



19. Visualize DBSCAN


Python


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
    "DBSCAN Clustering"
)


plt.show()



20. Noise Label


In scikit-learn:


-1


represents:


Noise.


For example:


[0, 0, 0, 1, 1, -1]


means:


Cluster 0


Cluster 1


Noise.



21. Count Noise Points


Python


import numpy as np


noise_count = np.sum(
    labels == -1
)


print(
    "Noise points:",
    noise_count
)



22. Number of Clusters


Python


unique_labels = set(
    labels
)


n_clusters = len(
    unique_labels - {-1}
)


print(
    "Number of clusters:",
    n_clusters
)



23. Effect of eps


If:


eps


is too small:


Many points may be treated as noise.


Clusters may fragment.


If:


eps


is too large:


Different groups may become connected.


Separate clusters may merge.



24. Experiment with eps


Python


for eps in [
    0.10,
    0.15,
    0.20,
    0.25,
    0.30
]:

    model = DBSCAN(
        eps=eps,
        min_samples=5
    )

    labels = model.fit_predict(
        X
    )

    clusters = len(
        set(labels) - {-1}
    )

    noise = np.sum(
        labels == -1
    )

    print(
        "eps:",
        eps,
        "clusters:",
        clusters,
        "noise:",
        noise
    )



25. Effect of min_samples


The parameter:


min_samples


controls how many nearby observations are needed to establish sufficient density.


Increasing it:


Requires denser regions.


May classify more observations as noise.


Decreasing it:


Allows less dense regions to form clusters.



26. Experiment with min_samples


Python


for min_samples in [
    3,
    5,
    10,
    15
]:

    model = DBSCAN(
        eps=0.25,
        min_samples=min_samples
    )

    labels = model.fit_predict(
        X
    )

    clusters = len(
        set(labels) - {-1}
    )

    noise = np.sum(
        labels == -1
    )

    print(
        "min_samples:",
        min_samples,
        "clusters:",
        clusters,
        "noise:",
        noise
    )



27. Feature Scaling


DBSCAN relies on distances.


Therefore, feature scaling can be very important.


Suppose:


Age


and:


Income.


Income may dominate the neighbourhood calculation if raw values are used.



28. Standardization


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


model = DBSCAN(
    eps=0.5,
    min_samples=5
)


labels = model.fit_predict(
    X_scaled
)


print(
    labels[:20]
)



29. Choosing eps


Selecting eps is one of the most important DBSCAN decisions.


A useful technique is to examine:


k-distance.


For example, if:


min_samples = 5,


calculate the distance to the fifth-nearest neighbour for each observation.



30. k-Distance Plot


The idea is:


For each point:


Calculate distance to its kth nearest neighbour.


Sort the distances.


Plot them.


A noticeable change in slope can provide a candidate eps value.



31. Python k-Distance Example


Python


from sklearn.neighbors import NearestNeighbors
import numpy as np
import matplotlib.pyplot as plt


neighbors = NearestNeighbors(
    n_neighbors=5
)


neighbors.fit(
    X_scaled
)


distances, indices = neighbors.kneighbors(
    X_scaled
)


k_distances = np.sort(
    distances[:, -1]
)


plt.plot(
    k_distances
)


plt.xlabel(
    "Points"
)


plt.ylabel(
    "5th Nearest Neighbor Distance"
)


plt.title(
    "k-Distance Plot"
)


plt.show()



32. Interpreting the k-Distance Plot


Look for a region where the curve begins to rise sharply.


A value around this transition can sometimes provide a useful starting point for eps.


This is not an automatic guarantee of the correct parameter.



33. DBSCAN vs k-Means


k-Means:


Requires k.


Uses centroids.


Sensitive to cluster geometry.


Generally assigns every observation to a cluster.


DBSCAN:


Does not require k.


Uses density.


Can find irregular shapes.


Can identify noise.



34. DBSCAN vs Hierarchical Clustering


Hierarchical:


Builds a hierarchy.


Uses linkage.


Produces a dendrogram.


DBSCAN:


Uses density.


Does not produce a dendrogram.


Can identify noise explicitly.



35. Strength: Irregular Shapes


One of DBSCAN's major strengths is its ability to discover certain non-convex cluster structures.


Examples:


Curves


Rings


Connected dense regions.



36. Strength: Noise Detection


DBSCAN can identify observations that do not belong to sufficiently dense regions.


This is useful when outliers or noise are meaningful parts of the problem.



37. Limitation: Varying Density


DBSCAN can struggle when different clusters have substantially different densities.


A single:


eps


value may not work well for every region.



38. Limitation: High Dimensions


Distance-based density estimation becomes more difficult as dimensionality increases.


The curse of dimensionality can make neighbourhood relationships less informative.



39. Limitation: Parameter Selection


DBSCAN depends strongly on:


eps


and:


min_samples.


Poor choices can produce:


Too many clusters


Too few clusters


Too much noise.



40. Real-World Example: Geographic Data


Suppose observations represent:


GPS coordinates.


DBSCAN can identify geographically dense regions.


Potential applications include:


Location Analysis


Hotspot Detection


Urban Activity Analysis.



41. Real-World Example: Network Activity


Network events can be represented using numerical features.


Dense regions may correspond to normal patterns.


Sparse unusual observations may deserve investigation.



42. Real-World Example: Customer Behaviour


Customer observations can be represented using:


Spending


Frequency


Recency.


DBSCAN may discover dense customer groups and identify unusual customers.



43. Clustering Evaluation


For DBSCAN, silhouette score can sometimes be used when more than one cluster exists.


However, evaluation should account for:


Noise


Cluster shape


Application goals.



44. Silhouette Score Example


Python


from sklearn.metrics import silhouette_score


mask = labels != -1


if len(
    set(labels[mask])
) > 1:

    score = silhouette_score(
        X_scaled[mask],
        labels[mask]
    )

    print(
        "Silhouette Score:",
        score
    )



45. Why Exclude Noise?


Noise points are not assigned to a normal cluster.


If they are included without consideration, internal cluster metrics may become harder to interpret.


The correct evaluation strategy depends on the application.



46. Experiment


Use the two-moons dataset.


Compare:


DBSCAN


and:


k-Means.


Visualize both results.


Explain why one algorithm may represent the curved structure differently.



47. Experiment: Scaling


Create a dataset with features on different scales.


Run DBSCAN:


Before scaling.


After scaling.


Compare the results.



48. Experiment: Density


Generate clusters with different densities.


Try different:


eps


and:


min_samples.


Observe where DBSCAN succeeds and where it struggles.



49. Common Mistakes


Mistake 1:


Choosing eps without examining the data.


Mistake 2:


Ignoring feature scaling.


Mistake 3:


Assuming -1 represents a normal cluster.


Mistake 4:


Using DBSCAN without considering varying densities.


Mistake 5:


Ignoring high dimensionality.


Mistake 6:


Treating the number of clusters as the only evaluation criterion.



50. Practice


1. What does DBSCAN stand for?


2. What is density-based clustering?


3. What is eps?


4. What is min_samples?


5. What is a core point?


6. What is a border point?


7. What is a noise point?


8. Why can DBSCAN identify irregular shapes?


9. Why can DBSCAN struggle with varying densities?


10. What does -1 represent in scikit-learn DBSCAN?



51. Quick Check


Question 1


Does DBSCAN require the number of clusters beforehand?


Answer


No.


Question 2


What does eps control?


Answer


The neighbourhood radius used when determining local density.


Question 3


What does min_samples control?


Answer


The minimum neighbourhood density required for a point to qualify as a core point.


Question 4


What does -1 mean?


Answer


Noise.


Question 5


Why can DBSCAN be useful for irregular shapes?


Answer


Because it groups connected dense regions rather than relying on centroid-based geometry.



52. Summary


DBSCAN is a density-based clustering algorithm.


It does not require the number of clusters to be specified directly.


Important parameters include:


eps


and:


min_samples.


Points can be:


Core


Border


Noise.


DBSCAN can discover irregular cluster shapes.


It can explicitly identify noise.


Feature scaling can be important.


Parameter selection requires experimentation.


DBSCAN can struggle with varying densities and high-dimensional data.



53. Extended Study


DBSCAN defines a neighbourhood:


Nε(x) = {y | d(x,y) ≤ ε}.


A point can be considered core when:


|Nε(x)| ≥ MinPts.


Clusters are then formed through density-connected observations.


This provides a fundamentally different perspective from centroid-based algorithms such as k-Means.



54. Reflection


Before using DBSCAN, ask:


What does density mean in this dataset?


Are distances meaningful?


Do the features need scaling?


Are cluster densities similar?


How should eps be selected?


How should min_samples be selected?


Are noise observations important?


Would k-Means or hierarchical clustering be more appropriate?


Can the resulting clusters be interpreted?

`

};

export default lesson6;