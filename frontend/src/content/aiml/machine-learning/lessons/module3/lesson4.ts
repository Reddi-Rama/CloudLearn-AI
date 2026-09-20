const lesson4 = {

  id: "lesson4",

  title: "Choosing the Number of Clusters",

  content: `

Lesson 04

Choosing the Number of Clusters


1. Why Is Choosing k Important?


The k-Means algorithm requires us to specify:


k


the number of clusters.


For example:


k = 2


creates two clusters.


k = 5


creates five clusters.


The challenge is:


How do we know which value of k is appropriate?



2. There Is Usually No Universal Answer


The best number of clusters depends on:


Dataset Structure


Domain Knowledge


Business Requirements


Feature Representation


Clustering Algorithm


Evaluation Criteria.


Therefore, choosing k is partly a modelling and interpretation problem.



3. Too Few Clusters


Suppose the data naturally contains several groups.


If we choose:


k = 2,


the algorithm may merge distinct groups together.


This can produce:


Under-segmentation.



4. Too Many Clusters


If we choose:


k = 20


for a dataset containing only a few meaningful groups, the algorithm may divide natural groups into many small clusters.


This can produce:


Over-segmentation.



5. Visual Intuition


Imagine data containing three clear groups.


A reasonable clustering might be:


Cluster A


Cluster B


Cluster C.


Using:


k = 2


may merge two groups.


Using:


k = 10


may divide each natural group into multiple pieces.



6. The Main Methods


Common approaches for exploring k include:


Elbow Method


Silhouette Analysis


Domain Knowledge


Stability Analysis


Visualization.


These methods should be considered together rather than treated as automatic answers.



7. Elbow Method


The elbow method evaluates the k-Means:


Inertia.


Recall:


Inertia = Σ||xᵢ - μcᵢ||².


As k increases, the model has more centroids available.


Therefore, inertia generally decreases.



8. Why Does Inertia Decrease?


Suppose:


k = 1.


Every observation belongs to one cluster.


The centroid represents the entire dataset.


Now increase:


k = 2.


The observations can be divided between two centers.


This can only maintain or reduce the minimum within-cluster squared error.


The same principle continues as k increases.



9. Why Not Always Choose the Largest k?


Because eventually each cluster can become extremely small.


At the extreme:


k = number of observations.


Every observation can have its own cluster.


Inertia can become zero.


But such a solution is usually not useful for discovering meaningful structure.



10. Elbow Intuition


Plot:


Number of Clusters


against:


Inertia.


Initially, increasing k may produce large improvements.


Eventually, the improvement becomes smaller.


The point where the rate of improvement changes substantially can resemble an:


Elbow.



11. Python Elbow Method


Python


from sklearn.datasets import make_blobs
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt


X, _ = make_blobs(
    n_samples=400,
    centers=4,
    cluster_std=1.0,
    random_state=42
)


inertias = []


for k in range(1, 10):

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
    range(1, 10),
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



12. Interpreting the Elbow


Suppose the plot decreases rapidly from:


k = 1


to:


k = 4,


and then becomes much flatter.


k = 4


could be a candidate value.


However, the elbow is not always obvious.



13. Limitation of the Elbow Method


Some datasets do not produce a clear elbow.


The curve may gradually decrease without a strong change in slope.


In such situations, other evidence is required.



14. Silhouette Score


The silhouette score considers both:


Within-Cluster Cohesion


and:


Between-Cluster Separation.



15. Silhouette Formula


For an observation i:


s(i) = (b(i) - a(i)) / max(a(i), b(i))


where:


a(i)


is the average distance from observation i to other observations in its own cluster.


b(i)


is the smallest average distance from observation i to observations in another cluster.



16. Interpretation


If:


a(i)


is small,


the observation is close to its own cluster.


If:


b(i)


is large,


the observation is far from neighbouring clusters.


Therefore, a high silhouette score indicates a useful combination of cohesion and separation.



17. Range


The silhouette score generally ranges from:


-1


to:


+1.


Values closer to:


+1


usually indicate well-separated observations.


Values around:


0


can indicate overlapping clusters.


Negative values can indicate that observations may be assigned to an inappropriate cluster under the measure.



18. Python Silhouette Analysis


Python


from sklearn.metrics import silhouette_score


silhouette_scores = []


for k in range(2, 10):

    model = KMeans(
        n_clusters=k,
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

    silhouette_scores.append(
        score
    )


plt.plot(
    range(2, 10),
    silhouette_scores,
    marker="o"
)


plt.xlabel(
    "Number of Clusters"
)


plt.ylabel(
    "Silhouette Score"
)


plt.title(
    "Silhouette Analysis"
)


plt.show()



19. Choosing k with Silhouette Score


One possible approach is to compare silhouette scores for several candidate values of k.


A higher score can indicate stronger cluster separation and cohesion under the metric.


However, the highest score should not automatically override domain knowledge.



20. Elbow vs Silhouette


Elbow:


Uses inertia.


Focuses on within-cluster squared error.


Silhouette:


Considers both within-cluster and between-cluster relationships.


They answer somewhat different questions.



21. Domain Knowledge


Suppose a marketing department wants:


Three customer segments.


Even if an algorithm suggests:


k = 5,


the business requirement may make:


k = 3


more useful.


The clustering result must therefore be interpreted in context.



22. Example: Customer Segmentation


Suppose a company wants:


Budget Customers


Regular Customers


Premium Customers.


A three-cluster solution may be easier to communicate and act upon than a solution with many small clusters.



23. Visualization


For two-dimensional data, visualize candidate clusterings.


Python


for k in [2, 3, 4]:

    model = KMeans(
        n_clusters=k,
        random_state=42,
        n_init=10
    )

    labels = model.fit_predict(
        X
    )

    plt.figure()

    plt.scatter(
        X[:, 0],
        X[:, 1],
        c=labels
    )

    plt.title(
        "k = " + str(k)
    )

    plt.xlabel(
        "Feature 1"
    )

    plt.ylabel(
        "Feature 2"
    )

    plt.show()



24. Why Visualization Helps


A metric may suggest a particular value of k.


Visualization can reveal:


Overlapping clusters


Very small clusters


Outliers


Irregular shapes.


Visual inspection should complement quantitative evaluation.



25. Stability Analysis


A useful clustering solution should not change dramatically under small reasonable changes in the data or initialization.


Stability can be investigated by:


Changing random seeds.


Using bootstrap samples.


Repeating the clustering procedure.



26. Random Initialization


Run k-Means several times with different random states.


Compare:


Inertia


Cluster assignments


Centroid locations.


If results are highly unstable, the dataset may not contain a strong cluster structure under the chosen representation.



27. Python Stability Experiment


Python


from sklearn.cluster import KMeans


results = []


for seed in [0, 1, 2, 3, 4]:

    model = KMeans(
        n_clusters=3,
        random_state=seed,
        n_init=10
    )

    model.fit(
        X
    )

    results.append(
        model.inertia_
    )


print(
    results
)



28. Interpreting Stability


If the inertia values are very similar:


The solution may be relatively stable.


If they vary significantly:


The initialization or dataset structure may be causing instability.



29. Cluster Size


When selecting k, examine cluster sizes.


Python


model = KMeans(
    n_clusters=4,
    random_state=42,
    n_init=10
)


labels = model.fit_predict(
    X
)


import numpy as np


unique, counts = np.unique(
    labels,
    return_counts=True
)


print(
    dict(
        zip(
            unique,
            counts
        )
    )
)



30. Why Cluster Size Matters


Suppose:


Cluster 0 = 190 observations


Cluster 1 = 180 observations


Cluster 2 = 20 observations


Cluster 3 = 10 observations.


The last two clusters may be meaningful small groups.


But they could also represent:


Noise


Outliers


Over-segmentation.


Domain interpretation is required.



31. Silhouette Plot


Instead of calculating only the average silhouette score, individual silhouette values can be visualized.


This can reveal:


Poorly assigned observations


Weak clusters


Strong clusters.



32. Python Silhouette Visualization


Python


from sklearn.metrics import silhouette_samples


labels = model.fit_predict(
    X
)


sample_scores = silhouette_samples(
    X,
    labels
)


print(
    sample_scores[:10]
)



33. Choosing k in High-Dimensional Data


In high-dimensional datasets, visualization becomes difficult.


PCA can sometimes be used to create a lower-dimensional representation for visualization.


However, clustering should not automatically be performed only on the visualization dimensions.


The reduced representation may lose information.



34. PCA and Clustering


One possible workflow:


Original Features


↓

Scale


↓

PCA


↓

Explore 2D Visualization.


Another workflow is:


Original Features


↓

Scale


↓

PCA


↓

Clustering.


The second approach changes the feature representation used by clustering and should be evaluated carefully.



35. Internal vs External Evaluation


Internal evaluation uses only the data and cluster assignments.


Examples:


Silhouette Score


Inertia.


External evaluation uses known labels or external information.


For example, if ground-truth categories are available for evaluation only, metrics such as Adjusted Rand Index can be considered.



36. Adjusted Rand Index


Adjusted Rand Index:


ARI


compares clustering assignments with known reference labels while adjusting for chance agreement.


It can be useful when labels exist for evaluation but were not used to train the clustering algorithm.



37. Python ARI


Python


from sklearn.metrics import adjusted_rand_score


model = KMeans(
    n_clusters=4,
    random_state=42,
    n_init=10
)


predicted_labels = model.fit_predict(
    X
)


score = adjusted_rand_score(
    y,
    predicted_labels
)


print(
    "ARI:",
    score
)


Important:


y


is used here only for evaluation in this synthetic example, not for fitting k-Means.



38. External Labels in Real Projects


Sometimes a dataset contains labels that were created for another purpose.


Those labels should not automatically be treated as the correct clustering target.


The goal of unsupervised learning may be to discover a different structure.



39. Gap Between Mathematical and Practical Solutions


A clustering solution can be mathematically good according to a metric but practically useless.


For example:


Five clusters may maximize a metric.


But the business may only have resources to act on two customer segments.


Therefore:


Statistical Evaluation


and:


Practical Utility


should both be considered.



40. Cluster Interpretability


After selecting k, calculate descriptive statistics for each cluster.


Python


import pandas as pd


data = pd.DataFrame(
    X,
    columns=[
        "Feature1",
        "Feature2"
    ]
)


data["Cluster"] = labels


print(
    data.groupby(
        "Cluster"
    ).mean()
)



41. Interpreting Cluster Profiles


Suppose cluster means are:


Cluster 0:


Low Feature1


Low Feature2.


Cluster 1:


High Feature1


Low Feature2.


Cluster 2:


High Feature1


High Feature2.


These summaries help explain the characteristics of the groups.



42. Cluster Naming


After examining cluster characteristics, meaningful names can sometimes be assigned.


For example:


Cluster 0:


Low Activity.


Cluster 1:


Regular Activity.


Cluster 2:


High Activity.


The names are interpretations.


They are not generated automatically by k-Means.



43. Practical Decision Process


A practical k-selection workflow can be:


Generate Candidate k Values


↓

Calculate Inertia


↓

Calculate Silhouette Scores


↓

Visualize


↓

Check Stability


↓

Inspect Cluster Sizes


↓

Analyze Cluster Profiles


↓

Consider Domain Requirements


↓

Select a Useful k.



44. There Is No Perfect Metric


Different metrics can disagree.


For example:


Elbow suggests:


k = 4.


Silhouette suggests:


k = 3.


Domain experts prefer:


k = 3.


This is not necessarily a problem.


It means the analyst must understand what each evaluation method measures.



45. Experiment: Compare k


Use:


k = 2


3


4


5


6.


For each:


Calculate inertia.


Calculate silhouette score.


Calculate cluster sizes.


Visualize when possible.



46. Experiment: Stability


For each candidate k:


Run k-Means using several random states.


Record:


Inertia.


Compare the variability.



47. Experiment: Cluster Profiles


For the selected k:


Calculate mean feature values per cluster.


Calculate median values where appropriate.


Identify the characteristics that distinguish the clusters.



48. Experiment: Scaling


Repeat the k-selection analysis:


Before scaling.


After scaling.


Compare how the preferred k and cluster assignments change.



49. Common Mistakes


Mistake 1:


Treating the elbow as an exact mathematical answer.


Mistake 2:


Choosing the highest silhouette score without interpretation.


Mistake 3:


Ignoring cluster size.


Mistake 4:


Ignoring domain requirements.


Mistake 5:


Using the visualization alone.


Mistake 6:


Assuming every dataset has naturally separated clusters.


Mistake 7:


Ignoring stability.



50. Practice


1. Why must k be selected?


2. Why does inertia decrease as k increases?


3. What is the elbow method?


4. What is silhouette analysis?


5. What does a high silhouette score suggest?


6. What does a negative silhouette value suggest?


7. Why is domain knowledge useful?


8. What is clustering stability?


9. Why examine cluster sizes?


10. What is external evaluation?



51. Quick Check


Question 1


Why not simply choose the largest k?


Answer


Because more clusters always reduce or maintain within-cluster error, but excessive clusters may destroy useful grouping structure.


Question 2


What does the elbow method use?


Answer


Inertia across different values of k.


Question 3


What does the silhouette score consider?


Answer


Within-cluster cohesion and separation from other clusters.


Question 4


Can domain knowledge influence the choice of k?


Answer


Yes.


Question 5


Why should cluster stability be examined?


Answer


A highly unstable solution may not represent strong or reliable structure.



52. Summary


Choosing the number of clusters is an important modelling decision.


The elbow method examines inertia.


Silhouette analysis evaluates cohesion and separation.


Visualization can reveal structure not captured by a single metric.


Domain knowledge can make some cluster counts more useful than others.


Stability analysis checks whether results are sensitive to initialization or sampling.


Cluster sizes should be inspected.


Cluster profiles help interpret the resulting groups.


No single metric always provides the perfect answer.



53. Extended Study


The k-Means objective is:


J(k) = Σₖ Σxᵢ∈Cₖ ||xᵢ - μₖ||².


As k increases, the feasible set of cluster assignments becomes more flexible.


Therefore:


J(k+1) ≤ J(k)


for the optimal solutions under the standard objective.


This explains why inertia alone cannot determine the best k.


We need to consider the trade-off between:


Model Complexity


and:


Useful Structure.



54. Reflection


When selecting k, ask:


Does the data appear to contain distinct groups?


What does the elbow plot show?


What does silhouette analysis show?


Are the results stable?


Are the cluster sizes reasonable?


Can the clusters be interpreted?


Do they support the actual purpose of the analysis?


Would another clustering algorithm provide a better representation?


The goal is not simply to find a mathematical number.


The goal is to find a useful and interpretable representation of the data.

`

};

export default lesson4;