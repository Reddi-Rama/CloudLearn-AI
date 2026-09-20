const lesson3 = {

  id: "lesson3",

  title: "k-Means Clustering",

  content: `

Lesson 03

k-Means Clustering


1. Introduction to k-Means


k-Means is one of the most widely used clustering algorithms.

It is an unsupervised learning algorithm that divides observations into a predefined number of clusters.

The letter:


k


represents the number of clusters we want the algorithm to create.


For example:


k = 2


means we want two clusters.


k = 5


means we want five clusters.



2. Basic Idea


The main idea of k-Means is:


Choose k


↓

Initialize k cluster centers


↓

Assign observations to the nearest center


↓

Recalculate the centers


↓

Repeat


until the assignments or centers stabilize.



3. Example


Suppose we have customers represented by:


Age


Annual Spending.


The observations may naturally form groups.


We might choose:


k = 3.


The algorithm attempts to divide the customers into three groups based on their positions in feature space.



4. Cluster Centers


Each cluster is represented by a:


Centroid.


A centroid is the mean position of the observations assigned to that cluster.


For example, suppose a cluster contains:


(2,4)


(4,6)


(6,8).


The centroid is:


x = (2 + 4 + 6) / 3


x = 4


y = (4 + 6 + 8) / 3


y = 6.


Therefore:


Centroid = (4,6).



5. Why Are Centroids Important?


The centroid represents the center of a cluster.


k-Means assigns each observation to the cluster whose centroid is closest according to the distance used by the algorithm.



6. k-Means Algorithm


The standard iterative process can be described as:


Step 1:


Choose k.


Step 2:


Initialize k centroids.


Step 3:


Calculate the distance from every observation to every centroid.


Step 4:


Assign each observation to its closest centroid.


Step 5:


Recalculate each centroid.


Step 6:


Repeat Steps 3–5.


Step 7:


Stop when the algorithm reaches a stopping condition.



7. Initialization


The initial centroids can affect the final solution.


Different starting points can lead to different cluster assignments.


Modern implementations commonly use an initialization strategy such as:


k-means++


which attempts to choose initial centers more effectively than completely random selection.



8. k-means++


The purpose of k-means++ initialization is to choose initial centroids that are spread out in a useful way.


This can improve convergence and reduce the chance of obtaining a poor local solution.



9. Assignment Step


Suppose we have three centroids:


C1


C2


C3.


For each observation:


xᵢ,


calculate its distance to each centroid.


If:


d(xᵢ,C1)


is the smallest distance,


assign xᵢ to Cluster 1.



10. Update Step


After assigning observations to clusters, calculate the mean of each cluster.


For cluster C:


μ = (1/n) Σxᵢ.


This new mean becomes the updated centroid.



11. Repeat


The assignment and update steps continue:


Assign


→


Update


→


Assign


→


Update


until the algorithm converges or reaches the configured iteration limit.



12. Mathematical Objective


k-Means attempts to minimize the within-cluster sum of squared distances.


The objective can be written as:


J = Σₖ Σxᵢ∈Cₖ ||xᵢ - μₖ||².


where:


Cₖ = Cluster k


μₖ = Centroid of cluster k


xᵢ = Observation.



13. Understanding the Objective


The objective asks:


How close are observations to their assigned centroids?


If observations are close to their centroids:


J


is smaller.


If observations are far from their centroids:


J


is larger.



14. Inertia


In scikit-learn, the quantity corresponding to the k-Means objective is commonly exposed as:


inertia_.


It represents the sum of squared distances between observations and their assigned cluster centers.



15. Simple Example


Suppose one cluster contains points close to:


(5,5).


If the centroid is also near:


(5,5),


the squared distances are small.


Therefore, the cluster has low within-cluster variation.



16. Python Example


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



17. Train k-Means


Python


from sklearn.cluster import KMeans


model = KMeans(
    n_clusters=2,
    random_state=42,
    n_init=10
)


model.fit(
    X
)


print(
    model.labels_
)


Output


Each observation receives a cluster label such as:


0


or:


1.


The exact label numbers do not carry intrinsic meaning.



18. Cluster Centers


Python


print(
    model.cluster_centers_
)


Output


The output contains the coordinates of the two learned cluster centroids.



19. Inertia


Python


print(
    "Inertia:",
    model.inertia_
)


Output


A non-negative value representing within-cluster squared distance.



20. Visualizing k-Means


Python


import matplotlib.pyplot as plt


labels = model.labels_


centers = model.cluster_centers_


plt.scatter(
    X[:, 0],
    X[:, 1],
    c=labels
)


plt.scatter(
    centers[:, 0],
    centers[:, 1],
    marker="X",
    s=200
)


plt.xlabel(
    "Feature 1"
)


plt.ylabel(
    "Feature 2"
)


plt.title(
    "k-Means Clustering"
)


plt.show()



21. Interpreting the Plot


The observations are displayed according to their cluster assignments.


The large marker represents the centroid of each cluster.


The goal is to create groups whose observations are relatively close to their corresponding centroids.



22. Choosing k


One of the most important questions is:


How many clusters should be used?


The algorithm requires:


k


before training.


Possible approaches include:


Domain Knowledge


Elbow Method


Silhouette Analysis


Stability Analysis.



23. Elbow Method


Train models for different values of k.


For example:


k = 1


2


3


4


5


6.


Record:


Inertia.


Plot:


k


against:


Inertia.


Look for a point where adding another cluster provides substantially less improvement.



24. Python Elbow Method


Python


inertias = []


for k in range(1, 8):

    model = KMeans(
        n_clusters=k,
        random_state=42,
        n_init=10
    )

    model.fit(
        X
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



25. Silhouette Analysis


The silhouette score evaluates how well observations fit their own cluster compared with neighbouring clusters.


It considers:


Within-cluster similarity


and:


Between-cluster separation.



26. Python Silhouette Score


Python


from sklearn.metrics import silhouette_score


model = KMeans(
    n_clusters=3,
    random_state=42,
    n_init=10
)


labels = model.fit_predict(
    X
)


score = silhouette_score(
    X,
    labels
)


print(
    "Silhouette Score:",
    score
)



27. Interpreting the Silhouette Score


The score generally lies between:


-1


and:


+1.


Higher values generally indicate better-defined clusters under the measure.


Values near zero can indicate overlapping or weakly separated clusters.



28. Scaling Before k-Means


Because k-Means relies on distances, scaling can be important.


Consider:


Age


Income


If income has a much larger numerical range, it can dominate the distance calculations.



29. Python Scaling Example


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


model = KMeans(
    n_clusters=2,
    random_state=42,
    n_init=10
)


labels = model.fit_predict(
    X_scaled
)


print(
    labels
)



30. When Scaling Can Change the Result


Suppose:


Feature A:


0–1.


Feature B:


0–100,000.


Without scaling:


Feature B can dominate.


After standardization:


Both features contribute on a more comparable scale.



31. n_clusters


The parameter:


n_clusters


defines the requested number of clusters.


Example:


KMeans(
    n_clusters=3
)


creates three clusters.



32. n_init


The parameter:


n_init


controls how many initializations are attempted in configurations where multiple initial starts are evaluated.


Because different starting points can produce different solutions, multiple initializations can improve the chance of finding a good solution.



33. max_iter


The parameter:


max_iter


controls the maximum number of iterations for a single initialization.


Example:


KMeans(
    n_clusters=3,
    max_iter=300
)



34. random_state


The parameter:


random_state


controls reproducibility of the randomized initialization process.


Using the same value can make experiments easier to reproduce.



35. Cluster Labels


After fitting:


model.labels_


contains the cluster assignment for each training observation.


These labels are identifiers.


Cluster:


0


is not inherently better or worse than:


Cluster 1.



36. Predicting New Observations


After training, k-Means can assign new observations to the nearest learned centroid.


Python


new_points = np.array([

    [2, 2],

    [8, 9]

])


predictions = model.predict(
    new_points
)


print(
    predictions
)



37. Transforming Observations


k-Means can also calculate distances from observations to cluster centers.


Python


distances = model.transform(
    X
)


print(
    distances[:3]
)


The result contains distances from observations to the cluster centers.



38. k-Means Limitations


k-Means has important limitations.


It requires k to be specified.


It can be sensitive to initialization.


It is affected by feature scaling.


It can be affected by outliers.


It works best for certain cluster geometries.


It may perform poorly when clusters have irregular shapes or very different densities.



39. Cluster Shape


k-Means tends to work well when clusters are reasonably compact and separable around their centroids.


It can struggle with shapes such as:


Long curves


Nested circles


Irregular densities.



40. Example: Non-Circular Structure


Imagine two groups shaped like:


Two interlocking moons.


The groups may be clearly separated visually.


However, their centroids can make k-Means assign some observations incorrectly.


Density-based methods can be more appropriate for such structures.



41. Outliers


An extreme observation can pull a centroid toward itself.


For example:


Most observations:


(1,1) to (3,3).


One outlier:


(100,100).


The centroid can be strongly influenced by the extreme point.



42. Handling Outliers


Possible approaches:


Investigate the observation.


Check whether it is valid.


Transform the data.


Remove erroneous records.


Use a more robust clustering strategy.


The correct decision depends on the domain.



43. k-Means Complexity


For many practical datasets, k-Means can be computationally efficient.


However, computational cost grows with:


Number of observations


Number of features


Number of clusters


Number of iterations.


Large datasets may require specialized or scalable approaches.



44. Mini-Batch k-Means


Mini-Batch k-Means uses small batches of observations to update cluster centers.


This can reduce computation for large datasets.


It is useful when the complete dataset is expensive to process repeatedly.



45. Python Mini-Batch k-Means


Python


from sklearn.cluster import MiniBatchKMeans


model = MiniBatchKMeans(
    n_clusters=3,
    random_state=42,
    batch_size=32,
    n_init=10
)


model.fit(
    X
)


print(
    model.labels_
)



46. k-Means vs Classification


k-Means does not use known labels during training.


Classification algorithms such as Logistic Regression or SVM learn from known target labels.


Therefore:


k-Means:


Unsupervised.


Logistic Regression:


Supervised.



47. Real-World Example: Customer Segmentation


Features may include:


Annual Spending


Purchase Frequency


Average Order Value


Website Activity.


k-Means can identify groups such as:


Low Activity


Medium Activity


High Activity.


These names are assigned after examining the resulting clusters.



48. Real-World Example: Store Locations


Suppose a company has geographic coordinates for stores.


Clustering can identify groups of stores based on location.


This may help with:


Regional Analysis


Logistics


Resource Planning.



49. Real-World Example: Image Compression


Images can contain many pixel colours.


k-Means can group similar colours into a smaller number of representative colours.


Each pixel can then be represented using the nearest cluster center.


This can reduce the number of colours stored.



50. Experiment 1: Different Values of k


Try:


k = 2


k = 3


k = 4


k = 5.


For each value record:


Inertia


Silhouette Score.


Compare the results.



51. Experiment 2: Different Initializations


Train the same k-Means model with different:


random_state


values.


Compare the resulting inertia and cluster assignments.



52. Experiment 3: Scaling


Run k-Means:


Without scaling.


With StandardScaler.


Compare:


Cluster assignments


Inertia


Visualization.



53. Experiment 4: Outliers


Add an extreme observation to the dataset.


Train k-Means again.


Compare the centroid positions before and after adding the outlier.



54. Common Mistakes


Mistake 1:


Choosing k arbitrarily.


Mistake 2:


Forgetting feature scaling.


Mistake 3:


Assuming cluster labels have semantic meaning.


Mistake 4:


Ignoring outliers.


Mistake 5:


Using k-Means for irregular cluster shapes without checking its assumptions.


Mistake 6:


Using only inertia to evaluate clusters.


Mistake 7:


Assuming clustering automatically discovers real-world categories.



55. Practice


1. What is k-Means?


2. What does k represent?


3. What is a centroid?


4. What is the assignment step?


5. What is the update step?


6. What is inertia?


7. What is the elbow method?


8. What is the silhouette score?


9. Why can scaling affect k-Means?


10. What does n_init control?



56. Quick Check


Question 1


What does k represent?


Answer


The number of clusters requested.


Question 2


What is a centroid?


Answer


The mean position of observations assigned to a cluster.


Question 3


What does k-Means attempt to minimize?


Answer


Within-cluster squared distances.


Question 4


Why can multiple initializations be useful?


Answer


Different starting centroids can lead to different solutions.


Question 5


Can k-Means identify arbitrary cluster shapes well?


Answer


Not generally. It is most suitable for certain compact centroid-based cluster structures.



57. Summary


k-Means is a centroid-based unsupervised clustering algorithm.


It requires the number of clusters:


k.


The algorithm alternates between:


Assignment


and:


Centroid Update.


Its objective minimizes within-cluster squared distances.


Inertia measures this within-cluster error.


The elbow method can help explore k.


Silhouette analysis can evaluate cluster separation and cohesion.


Feature scaling is often important.


Initialization can affect results.


k-Means can struggle with irregular shapes and outliers.



58. Extended Study


The k-Means optimization problem is:


min Σₖ Σxᵢ∈Cₖ ||xᵢ - μₖ||².


The algorithm alternates between two operations.


Assignment:


cᵢ = argminₖ ||xᵢ - μₖ||².


Update:


μₖ = (1/|Cₖ|) Σxᵢ∈Cₖ xᵢ.


These two operations repeat until convergence or until the iteration limit is reached.



59. Reflection


Before using k-Means, ask:


Do I know or can I estimate a useful value of k?


Are the features appropriately scaled?


Are clusters likely to be compact?


Are there outliers?


Would another clustering algorithm be more suitable?


How will I evaluate the clusters?


Can the resulting groups be interpreted?



`

};

export default lesson3;