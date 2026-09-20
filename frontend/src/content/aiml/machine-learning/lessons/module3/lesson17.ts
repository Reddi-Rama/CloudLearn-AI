const lesson17 = {

  id: "lesson17",

  title: "Unsupervised Learning in Real-World Problems",

  content: `

Lesson 17

Unsupervised Learning in Real-World Problems


1. Introduction


Unsupervised learning is useful when a dataset does not have a target label that directly tells us the correct answer.


Instead, the objective may be to discover:


Groups


Patterns


Structure


Relationships


Anomalies


Lower-dimensional representations.



2. Real-World Challenge


Real datasets are rarely as clean as classroom examples.


They can contain:


Missing values


Categorical variables


Different scales


Outliers


High dimensionality


Noise.


Therefore, successful unsupervised learning requires more than simply calling a clustering algorithm.



3. General Workflow


A practical workflow can be:


Problem Definition


↓

Data Collection


↓

Data Inspection


↓

Cleaning


↓

Feature Selection


↓

Preprocessing


↓

Scaling


↓

Dimensionality Reduction if needed


↓

Unsupervised Algorithm


↓

Evaluation


↓

Interpretation


↓

Iteration.



4. Step 1: Define the Problem


Before choosing an algorithm, ask:


What structure are we trying to discover?


Examples:


Customer segments


Geographic hotspots


Document groups


Product groups


Sensor patterns.



5. Customer Segmentation


Suppose a company has customer information:


Age


Income


Purchase Frequency


Average Spending.


There is no predefined customer segment.


Clustering can be used to explore naturally occurring groups.



6. Preparing Customer Data


Possible workflow:


Handle missing values.


Select meaningful behavioral features.


Scale numerical features.


Apply clustering.



7. k-Means Example


Python


from sklearn.preprocessing import StandardScaler


from sklearn.cluster import KMeans


X_scaled = StandardScaler().fit_transform(
    X
)


model = KMeans(
    n_clusters=4,
    random_state=42,
    n_init=10
)


labels = model.fit_predict(
    X_scaled
)


The resulting labels represent discovered groups.



8. Interpreting Customer Clusters


After clustering, calculate summary statistics for each cluster.


For example:


Average income


Average spending


Purchase frequency.


The goal is to understand what makes the clusters different.



9. Cluster Profiling


Python


df["cluster"] = labels


profile = df.groupby(
    "cluster"
).mean(
    numeric_only=True
)


print(
    profile
)


This creates a summary of numerical characteristics for each cluster.



10. Important Warning


A cluster number does not have an inherent meaning.


Cluster:


0


is not automatically better or worse than:


Cluster 1.


The meaning must be interpreted from the feature profiles.



11. Geographic Hotspot Detection


Suppose observations contain:


Latitude


Longitude.


Dense regions may indicate:


Shopping activity


Traffic incidents


Service requests


Public events.



12. DBSCAN for Geographic Data


DBSCAN can be useful when the goal is to identify dense geographic regions and potentially separate noise.


However, geographic distance requires careful treatment.


Raw latitude and longitude should not automatically be interpreted using ordinary Euclidean distance for every geographic scale or application.



13. Document Clustering


Text documents can be represented numerically using:


Bag-of-Words


TF-IDF


Embedding vectors.


Then clustering can identify groups of documents with similar representations.



14. TF-IDF Representation


A text collection can be transformed into numerical vectors.


Python


from sklearn.feature_extraction.text import TfidfVectorizer


documents = [

    "machine learning algorithms",

    "deep learning neural networks",

    "database systems and SQL",

    "SQL database management"

]


vectorizer = TfidfVectorizer()


X_text = vectorizer.fit_transform(
    documents
)


print(
    X_text.shape
)



15. Clustering Text


A simple workflow is:


Text


↓

TF-IDF


↓

Clustering.


For example:


Python


from sklearn.cluster import KMeans


model = KMeans(
    n_clusters=2,
    random_state=42,
    n_init=10
)


labels = model.fit_predict(
    X_text
)


print(
    labels
)



16. Important Text Consideration


Text matrices can contain many features and are often sparse.


Avoid unnecessarily converting very large sparse matrices to dense arrays.



17. Image Data


Images can also be represented as numerical feature vectors.


For example:


Pixels


or:


Learned embeddings.


Clustering can then identify groups of visually similar observations.



18. PCA for Image Visualization


A high-dimensional image representation can be reduced using PCA.


Workflow:


Image Features


↓

Scaling or suitable preprocessing


↓

PCA


↓

2D Visualization.



19. Sensor Data


Suppose a factory contains many sensors.


Each observation may contain:


Temperature


Pressure


Humidity


Vibration.


Unsupervised learning can identify operating states or unusual patterns.



20. Sensor Clustering


Possible workflow:


Clean missing readings.


Scale features.


Cluster observations.


Profile each cluster.


Investigate unusual clusters.



21. Network Data


Network observations may contain:


Packet counts


Connection duration


Bytes transferred


Port information.


Clustering can help explore patterns of network behavior.


However, feature engineering and domain knowledge are essential.



22. Anomaly-Oriented Use Cases


Some unsupervised methods can help identify unusual observations.


Examples:


DBSCAN noise


Distance-based anomaly detection


Isolation Forest.


Anomaly detection is related to, but not identical to, clustering.



23. Isolation Forest


Python


from sklearn.ensemble import IsolationForest


model = IsolationForest(
    contamination=0.05,
    random_state=42
)


predictions = model.fit_predict(
    X
)


The output commonly uses:


1


for observations considered normal.


-1


for observations considered anomalous.



24. Clustering vs Anomaly Detection


Clustering:


Find groups.


Anomaly detection:


Find unusual observations.


A dataset can require both.



25. Dimensionality Reduction in Real Projects


High-dimensional data can be difficult to visualize.


PCA can reduce the representation.


Example:


100 features


→


2 components.


The result can be plotted for exploratory analysis.



26. Important Limitation


A 2D PCA visualization does not contain all information from the original dataset.


It is a projection.


Therefore, visible separation or overlap should be interpreted carefully.



27. Feature Scaling


Scaling is particularly important for many distance-based methods.


For example:


k-Means


DBSCAN


k-NN based approaches.


Without scaling, large-unit features can dominate the distance.



28. Missing Values


Many clustering algorithms do not directly accept missing values.


A preprocessing strategy may therefore be:


Imputation


→


Scaling


→


Clustering.



29. Categorical Features


If the dataset contains categories:


City


Product Type


Payment Method,


they require suitable encoding or an algorithm designed for mixed data.


Blindly assigning arbitrary integer codes can create misleading distances.



30. Mixed-Type Data


A dataset may contain:


Numerical


Categorical.


A preprocessing pipeline can transform each group differently.


For example:


Numerical:


Median Imputation + StandardScaler.


Categorical:


Most Frequent Imputation + OneHotEncoder.



31. ColumnTransformer


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



32. Evaluation


Unsupervised learning does not always have ground-truth labels.


Therefore, evaluation can be difficult.


Possible approaches include:


Silhouette Score


Calinski-Harabasz Index


Davies-Bouldin Index


Cluster stability


Domain interpretation.



33. Silhouette Score


A silhouette value considers:


Cohesion within a cluster.


Separation from other clusters.


Higher values generally indicate more clearly separated clusters under the metric.



34. Domain Evaluation


Suppose customer clusters are mathematically distinct.


Business experts may still ask:


Are the segments actionable?


Can they be described clearly?


Do they correspond to useful strategies?


This is why domain interpretation matters.



35. Stability


A useful clustering should ideally not change completely when:


Random seed changes.


A small number of observations are removed.


Parameters change slightly.


Stability testing can provide additional evidence.



36. Experiment: Customer Segmentation


Create or load a customer dataset.


Features:


Age


Income


Spending


Frequency.


Process:


Inspect.


Handle missing values.


Scale.


Run k-Means.


Try several values of k.


Evaluate.


Profile clusters.



37. Experiment: DBSCAN


Use the same dataset.


Try:


Different eps.


Different min_samples.


Record:


Clusters


Noise count.


Compare the resulting segments.



38. Experiment: PCA Visualization


After clustering:


Apply PCA to two components.


Plot:


PC1


against:


PC2.


Color observations according to cluster label.



39. Experiment: Feature Selection


Remove obviously irrelevant features.


Run clustering again.


Compare:


Cluster stability


Silhouette score


Interpretability.



40. Experiment: Scaling


Run clustering:


Without scaling.


With scaling.


Compare the results.


Explain why the cluster assignments changed.



41. Real-World Case Study Structure


A strong unsupervised project can be organized as:


Problem


Dataset


Data Understanding


Preprocessing


Algorithm Selection


Parameter Selection


Results


Evaluation


Interpretation


Limitations


Recommendations for further analysis.



42. Example Case Study


Problem:


Identify groups of customers based on behavior.


Data:


Age


Income


Purchase Frequency


Average Order Value.


Preprocessing:


Handle missing values.


Scale numerical features.


Model:


k-Means.


Evaluation:


Silhouette score.


Interpretation:


Profile each cluster using feature averages.



43. Case Study: Document Organization


Problem:


Automatically group documents by topic.


Data:


Text documents.


Preprocessing:


TF-IDF.


Model:


k-Means.


Evaluation:


Silhouette score plus manual topic inspection.


Visualization:


PCA or another dimensionality reduction technique.



44. Case Study: Geographic Hotspots


Problem:


Identify dense geographic regions.


Data:


Location coordinates.


Preprocessing:


Validate coordinates.


Choose an appropriate distance representation.


Model:


DBSCAN.


Evaluation:


Cluster density and domain usefulness.



45. Case Study: Manufacturing


Problem:


Identify machine operating states.


Data:


Sensor readings.


Preprocessing:


Missing-value handling.


Scaling.


Potential PCA.


Model:


Clustering.


Interpretation:


Profile each discovered operating state.



46. Common Mistakes


Mistake 1:


Starting with an algorithm instead of a problem.


Mistake 2:


Ignoring feature scaling.


Mistake 3:


Using arbitrary category codes.


Mistake 4:


Ignoring missing values.


Mistake 5:


Choosing the number of clusters without evaluation.


Mistake 6:


Treating every cluster as automatically meaningful.


Mistake 7:


Using PCA without understanding information loss.


Mistake 8:


Ignoring domain interpretation.



47. Practice


1. Give three real-world applications of clustering.


2. Why is preprocessing important in unsupervised learning?


3. Why can scaling affect clustering?


4. How can PCA help with high-dimensional data?


5. How is anomaly detection different from clustering?


6. Why is domain interpretation important?


7. What is cluster profiling?


8. Why should cluster stability be examined?



48. Quick Check


Question 1


Can unsupervised learning work without target labels?


Answer


Yes.


Question 2


Why might scaling be necessary?


Answer


Distance-based algorithms can be strongly affected by feature magnitude.


Question 3


Can clustering automatically tell us what a cluster means?


Answer


No. The discovered groups require interpretation.


Question 4


Can PCA be used to visualize clusters?


Answer


Yes.


Question 5


Is anomaly detection exactly the same as clustering?


Answer


No.



49. Summary


Unsupervised learning can discover structure without predefined target labels.


Real-world workflows require:


Problem definition


Data inspection


Cleaning


Preprocessing


Algorithm selection


Evaluation


Interpretation.


Applications include:


Customer segmentation


Document organization


Geographic hotspot analysis


Sensor analysis


Image analysis.


Scaling, missing-value handling, and categorical encoding can strongly affect results.


Evaluation should combine mathematical metrics with domain interpretation.



50. Extended Study


A useful way to think about unsupervised learning is:


Data


→


Representation


→


Similarity


→


Structure.


The algorithm depends heavily on how the data is represented.


For example:


Raw numerical features


may produce one structure.


Scaled features


may produce another.


PCA features


may produce another.


Therefore, preprocessing is part of the modeling decision rather than merely a preliminary technical step.



51. Reflection


Before deploying an unsupervised learning workflow, ask:


What problem am I solving?


What does similarity mean?


Are the features meaningful?


Are they scaled appropriately?


Are missing values handled?


Are categories encoded correctly?


Which algorithm assumptions match the data?


How will clusters be evaluated?


Are the clusters stable?


Can domain experts interpret them?


What action will be taken from the discovered structure?

`

};

export default lesson17;