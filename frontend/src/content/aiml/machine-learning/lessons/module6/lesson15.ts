const lesson15 = {

  id: "lesson15",

  title: "Document Clustering",

  content: `

Lesson 15

Document Clustering


1. Introduction


Clustering is an unsupervised learning technique that groups similar observations together.


When the observations are documents, the process is called document clustering.



2. Main Idea


Given a collection of documents:


Find groups of documents that are similar to each other.



3. No Labels Required


Unlike supervised classification, clustering does not require predefined target labels.



4. Example


Suppose a news dataset contains:


Sports articles.


Technology articles.


Business articles.



5. Clustering


An algorithm may discover groups corresponding roughly to:


Sports.


Technology.


Business.



6. Important Warning


The algorithm does not know these human topic names.


The groups are mathematical structures.



7. Text Clustering Pipeline


Documents


↓


Text representation


↓


Vector space


↓


Clustering algorithm


↓


Clusters


↓


Human interpretation.



8. Text Representation


Common representations include:


Bag-of-Words.


TF-IDF.



9. Why TF-IDF?


TF-IDF provides numerical features while reducing the influence of very common terms.



10. K-Means


K-Means is a popular clustering algorithm.



11. Main Idea


K-Means divides observations into a predefined number of clusters.



12. Parameter


k.



13. Example


k = 3.



14. Meaning


The algorithm attempts to create:


3 clusters.



15. Basic K-Means Process


Choose k.


↓


Initialize cluster centers.


↓


Assign observations to nearest center.


↓


Update centers.


↓


Repeat until convergence.



16. Text Example


Suppose each document is represented as a TF-IDF vector.



17. Clustering


Documents with similar vector representations may be assigned to the same cluster.



18. Import


Python


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)


from sklearn.cluster import (

    KMeans

)



19. Documents


Python


documents = [

    "football match team player",

    "football player scored goal",

    "basketball team championship",

    "python programming software",

    "software development programming",

    "database sql query software"

]



20. TF-IDF


Python


vectorizer = TfidfVectorizer(

    stop_words="english"

)


X = vectorizer.fit_transform(

    documents

)



21. K-Means


Python


kmeans = KMeans(

    n_clusters=2,

    random_state=42,

    n_init=10

)



22. Fit


Python


kmeans.fit(X)



23. Cluster Labels


Python


labels = kmeans.labels_



24. Interpretation


Each document receives a cluster number.



25. Example


Possible output:


[0, 0, 0, 1, 1, 1]



26. Important Point


The numbers:


0.


1.


do not represent meaningful category names by themselves.



27. Inspect Documents


Python


for cluster_id in range(2):

    print(

        "Cluster:",

        cluster_id

    )



    for index, label in enumerate(labels):

        if label == cluster_id:

            print(

                documents[index]

            )



28. Topic Interpretation


After viewing the documents, humans can interpret the cluster.



29. Example


If most documents contain:


football.


player.


team.



30. Possible Label


Sports.



31. Choosing k


The number of clusters is an important decision.



32. Elbow Method


One common approach is to inspect the clustering objective as k changes.



33. K-Means Inertia


Inertia measures the sum of squared distances of samples to their closest cluster center.



34. Python


inertias = []



35. Experiment


Python


for k in range(2, 8):

    model = KMeans(

        n_clusters=k,

        random_state=42,

        n_init=10

    )

    model.fit(X)

    inertias.append(

        model.inertia_

    )



36. Plot


Python


import matplotlib.pyplot as plt


plt.plot(

    range(2, 8),

    inertias,

    marker="o"

)


plt.xlabel("Number of clusters")


plt.ylabel("Inertia")


plt.show()



37. Elbow


The curve may contain a point where additional clusters produce diminishing reductions in inertia.



38. Important Warning


The elbow is not always obvious.



39. Silhouette Score


Another clustering evaluation measure is the silhouette score.



40. Formula Intuition


For a sample:


a:


Average distance to points in the same cluster.



b:


Lowest average distance to points in another cluster.



41. Silhouette


s


=


(b - a)


/


max(a,b)



42. Range


The silhouette score generally ranges from:


-1.


to:


1.



43. Interpretation


Higher values generally indicate that observations are more separated from other clusters and closer to their own cluster.



44. Python


from sklearn.metrics import (

    silhouette_score

)



45. Calculate


Python


score = silhouette_score(

    X,

    labels

)



46. Print


Python


print(score)



47. Important Warning


A high clustering score does not automatically mean the clusters are meaningful for the business or research objective.



48. Cluster Centers


K-Means produces cluster centers.



49. Feature Interpretation


For text data, cluster centers can be inspected to identify important terms.



50. Example


Python


order_centroids = kmeans.cluster_centers_.argsort()[:, ::-1]



51. Feature Names


Python


terms = vectorizer.get_feature_names_out()



52. Display


Python


for cluster_id in range(

    kmeans.n_clusters

):

    top_terms = [

        terms[index]

        for index in order_centroids[cluster_id][:5]

    ]

    print(

        cluster_id,

        top_terms

    )



53. Interpretation


The top terms can help describe the theme of each cluster.



54. Limitations of K-Means


K-Means assumes cluster centers are meaningful representatives.


Text data is high-dimensional and sparse.



55. Important Consideration


K-Means can still provide useful exploratory results, but the assumptions should be understood.



56. Cosine Similarity


Text data is often naturally compared using cosine similarity.



57. K-Means Distance


Standard K-Means uses Euclidean distance in its objective.



58. Practical Point


The choice of clustering method should consider the geometry of the text representation.



59. MiniBatchKMeans


For larger datasets, MiniBatchKMeans can reduce computational cost.



60. Import


Python


from sklearn.cluster import (

    MiniBatchKMeans

)



61. Example


Python


model = MiniBatchKMeans(

    n_clusters=5,

    random_state=42,

    batch_size=256,

    n_init=10

)



62. Fit


Python


model.fit(X)



63. Why MiniBatch?


It updates the model using smaller batches of observations.



64. Benefit


It can be faster for large datasets.



65. Agglomerative Clustering


Another approach is hierarchical clustering.



66. Basic Idea


Start with individual observations.


Then repeatedly merge similar groups.



67. Hierarchical Structure


The result can be represented using a dendrogram.



68. Example Import


Python


from sklearn.cluster import (

    AgglomerativeClustering

)



69. Important Consideration


AgglomerativeClustering may require careful handling when working with large sparse text matrices and depends on the chosen configuration.



70. DBSCAN


DBSCAN is another clustering method that identifies dense regions and can mark some points as noise.



71. Challenge


High-dimensional sparse text data can make density-based clustering difficult.



72. Clustering Evaluation


Possible approaches include:


Silhouette score.


Cluster inspection.


Domain validation.


External labels when available.



73. External Labels


Suppose a dataset contains known categories that are intentionally hidden during clustering.



74. Evaluation


The known categories can be used afterward to study whether the clusters correspond to them.



75. Important Principle


External labels should not be used to train the unsupervised clustering algorithm if the goal is to evaluate it as an unsupervised method.



76. Duplicate Documents


Duplicate documents can strongly affect clustering.



77. Example


If the same article appears hundreds of times, the cluster structure may be dominated by those duplicates.



78. Data Cleaning


Check for:


Duplicates.


Near duplicates.


Very short documents.


Extremely long documents.



79. Stop Words


Very common words can dominate feature representations.



80. TF-IDF


Can reduce the influence of common terms.



81. Feature Limits


Use:


min_df.


max_df.


max_features.



82. Example


Python


vectorizer = TfidfVectorizer(

    min_df=2,

    max_df=0.9,

    max_features=10000

)



83. Experiment 1


Create a document collection containing several themes.



84. Vectorize


Use TF-IDF.



85. Cluster


Try:


k = 2.



86. Repeat


Try:


k = 3.


k = 4.


k = 5.



87. Compare


Inertia.


Silhouette score.


Cluster interpretability.



88. Experiment 2


Inspect the top terms for every cluster.



89. Experiment 3


Compare:


KMeans.


MiniBatchKMeans.



90. Experiment 4


Compare different feature configurations.



91. Example


Unigrams.


Unigrams + bigrams.



92. Experiment 5


Remove or retain stop words and compare clustering behavior.



93. Experiment 6


Create a two-dimensional visualization using dimensionality reduction.



94. Example


PCA or another appropriate dimensionality-reduction method.



95. Important Warning


A two-dimensional visualization is an approximation and may hide information present in the original feature space.



96. Cluster Assignment for New Documents


A fitted KMeans model can assign new vectors to existing clusters.



97. Example


Python


new_documents = [

    "football player match"

]


new_X = vectorizer.transform(

    new_documents

)


new_labels = kmeans.predict(

    new_X

)



98. Interpretation


The new document is assigned to the nearest learned cluster center.



99. Applications


Document clustering can support:


News organization.


Customer feedback exploration.


Document management.


Research analysis.


Support-ticket discovery.



100. Common Mistakes


Mistake 1:


Assuming cluster numbers have semantic meaning.


Mistake 2:


Choosing k arbitrarily.


Mistake 3:


Using only one clustering metric.


Mistake 4:


Ignoring duplicate documents.


Mistake 5:


Ignoring extremely common terms.


Mistake 6:


Assuming a two-dimensional visualization represents the full feature space.


Mistake 7:


Treating clusters as ground truth categories.



101. Practice


1. What is document clustering?


2. How is clustering different from classification?


3. What does k represent in K-Means?


4. What is inertia?


5. What is the elbow method?


6. What is silhouette score?


7. Why can duplicate documents affect clustering?


8. What does MiniBatchKMeans do?


9. Why should cluster numbers not be interpreted as category names?



102. Quick Check


Question 1


Does K-Means require labeled documents?


Answer:


No.



Question 2


What does k control?


Answer:


The number of clusters created by K-Means.



Question 3


What does a cluster label such as 0 or 1 mean?


Answer:


Only that the document belongs to that learned cluster. The numeric label itself has no inherent semantic meaning.



103. Summary


Document clustering groups similar text documents without requiring predefined labels.


A common workflow is:


Documents


↓


TF-IDF


↓


K-Means


↓


Cluster assignments


↓


Cluster interpretation.



Important concepts include:


K-Means.


Inertia.


Elbow method.


Silhouette score.


MiniBatchKMeans.


Cluster interpretation.



104. Extended Study


Given document vectors:


x₁, x₂, ..., xₙ,



K-Means attempts to find:


k


cluster centers:


μ₁, μ₂, ..., μₖ.



The objective is to minimize:


Σᵢ ||xᵢ - μcᵢ||².



Here:


cᵢ


is the cluster assigned to observation i.



105. Final Reflection


Document clustering is primarily an exploratory technique.


The algorithm can reveal patterns that may not have been known beforehand.


However, useful clustering requires more than running an algorithm.


A strong workflow combines:


Good text representation.


Appropriate preprocessing.


Reasonable cluster selection.


Quantitative evaluation.


Human interpretation.


Domain validation.



`

};

export default lesson15;