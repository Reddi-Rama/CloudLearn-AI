const lesson1 = {

  id: "lesson1",

  title: "Introduction to Unsupervised Learning",

  content: `

Lesson 01

Introduction to Unsupervised Learning


1. What Is Unsupervised Learning?


In supervised learning, the training dataset contains both:


Input Features


and:


Target Values.


The model learns a relationship between the inputs and known targets.


For example:


House Features

↓

House Price


The target:


House Price


is already known in the training data.


Unsupervised learning is different.


In unsupervised learning, we usually receive:


Input Data


without a predefined target.


The goal is to discover useful structure within the data.



2. Basic Idea


The basic process is:


Data


↓

Find Patterns


↓

Discover Structure


↓

Interpret Results.


The algorithm is not directly told:


"This observation belongs to Class A."


Instead, it attempts to identify relationships based on the information contained in the input data.



3. Why Do We Need Unsupervised Learning?


Many real-world datasets do not contain labels.


Consider an online shopping company.


It may have information about customers:


Age


Purchase Frequency


Average Order Value


Number of Orders


Website Activity.


But it may not already know which customers belong to which behavioural group.


Unsupervised learning can help identify groups of customers with similar characteristics.



4. Supervised vs Unsupervised Learning


Supervised Learning:


Features


+


Target


↓

Learn Relationship


↓

Predict Target.


Unsupervised Learning:


Features


↓

Discover Structure.


The major difference is the availability of a known target.



5. Types of Unsupervised Learning


Important unsupervised learning tasks include:


Clustering


Dimensionality Reduction


Density Estimation


Representation Learning.


This module focuses particularly on:


Clustering


and:


Dimensionality Reduction.



6. Clustering


Clustering groups similar observations together.


Suppose we have customers represented by:


Annual Spending


and:


Number of Purchases.


The observations may naturally form several groups.


A clustering algorithm attempts to identify these groups.



7. Example of Customer Clustering


Imagine the following customers:


Customer A


Low spending


Few purchases.


Customer B


Low spending


Few purchases.


Customer C


High spending


Many purchases.


Customer D


High spending


Many purchases.


A clustering algorithm may identify:


Cluster 1


Low-activity customers.


Cluster 2


High-activity customers.


The algorithm did not receive these labels beforehand.



8. What Does Similarity Mean?


Clustering requires some concept of similarity.


Two observations may be considered similar when they are close according to a selected mathematical measure.


For numerical data, one common measure is:


Euclidean Distance.



9. Euclidean Distance


For two points:


x = (x₁, x₂)


and:


y = (y₁, y₂),


the Euclidean distance is:


d(x,y) = √[(x₁-y₁)² + (x₂-y₂)²].


For example:


Point A = (2,3)


Point B = (5,7).


Distance:


d = √[(2-5)² + (3-7)²]


d = √[9 + 16]


d = √25


d = 5.



10. Higher-Dimensional Distance


For n features:


d(x,y) = √Σ(xᵢ-yᵢ)².


Each feature contributes to the total distance.


This becomes important when datasets contain many features.



11. Why Feature Scale Matters


Suppose we have:


Age


and:


Income.


Age might range from:


18 to 80.


Income might range from:


20,000 to 2,000,000.


If Euclidean distance is calculated directly, income can dominate the distance because of its much larger numerical scale.


Therefore, scaling is often important before distance-based algorithms.



12. Similarity vs Distance


Distance measures how far two observations are.


Similarity measures how alike they are.


A small distance generally corresponds to greater similarity in many distance-based methods.


The exact relationship depends on the similarity measure.



13. Unsupervised Learning Does Not Automatically Mean "Correct Groups"


A clustering algorithm can always produce some grouping structure.


That does not mean the groups automatically represent meaningful real-world categories.


The analyst must interpret the results.


For example:


Cluster 1


Cluster 2


Cluster 3.


We still need to determine:


Why are these observations grouped together?


What characteristics define each group?



14. Discovering Hidden Structure


Unsupervised learning can reveal:


Natural groupings


Unusual observations


Lower-dimensional structure


Relationships between variables.


This can be useful during exploratory data analysis.



15. Clustering vs Classification


Classification:


The categories are known during training.


Example:


Spam


Not Spam.


Clustering:


The categories are not predefined.


The algorithm attempts to discover groups.



16. Example


Suppose a dataset contains:


Customer Age


Annual Spending.


Classification would require known labels such as:


Budget Customer


Premium Customer.


Clustering can attempt to discover groups without these labels.



17. Unsupervised Learning Workflow


A typical workflow is:


Collect Data


↓

Explore Data


↓

Clean Data


↓

Select Features


↓

Scale if Appropriate


↓

Apply Unsupervised Algorithm


↓

Visualize Results


↓

Interpret Structure.


The interpretation stage is particularly important.



18. Exploratory Data Analysis


Before applying clustering, inspect the data.


Python


import pandas as pd


data = pd.DataFrame({

    "Age": [20, 22, 25, 40, 42, 45],

    "Spending": [
        2000,
        2200,
        2500,
        8000,
        8500,
        9000
    ]

})


print(
    data
)


Output


A small dataset containing age and spending values.



19. Visualizing the Data


Python


import matplotlib.pyplot as plt


plt.scatter(
    data["Age"],
    data["Spending"]
)


plt.xlabel(
    "Age"
)


plt.ylabel(
    "Spending"
)


plt.title(
    "Customer Data"
)


plt.show()


The visualization can help us inspect whether visible groups exist.



20. Applying a Simple Clustering Algorithm


One of the first algorithms we will study is:


k-Means.


Suppose we want to identify:


2 clusters.



21. k-Means Example


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


Output


The output contains a cluster label for each observation.



22. Understanding Cluster Labels


Suppose the output is:


[1, 1, 1, 0, 0, 0]


This means the algorithm assigned:


First three observations → Cluster 1


Last three observations → Cluster 0.


The numerical labels themselves do not automatically mean:


0 = Bad


1 = Good.


Cluster numbers are identifiers.



23. Visualizing Clusters


Python


plt.scatter(
    data["Age"],
    data["Spending"],
    c=labels
)


plt.xlabel(
    "Age"
)


plt.ylabel(
    "Spending"
)


plt.title(
    "Cluster Assignments"
)


plt.show()


The plot allows us to see how observations were grouped.



24. Unsupervised Learning and Visualization


Visualization is especially useful for unsupervised learning because there may be no target labels to compare against.


Plots can help answer:


Are groups separated?


Are clusters overlapping?


Are there unusual observations?



25. Clustering Does Not Always Produce Circular Groups


Some clustering algorithms work best under particular assumptions.


For example, basic k-Means tends to work well when clusters can be represented reasonably by compact regions around centroids.


Real-world data can contain:


Irregular Shapes


Different Densities


Noise.


Other algorithms may be better suited to those structures.



26. Density-Based Thinking


Consider observations concentrated in several dense regions.


A density-based algorithm attempts to identify these regions rather than simply assigning every point to a cluster.


DBSCAN is an important example.



27. Hierarchical Thinking


Another approach is to build a hierarchy of groups.


Instead of immediately deciding:


3 clusters,


a hierarchical algorithm can build a tree-like structure of relationships.


This structure can later be cut at different levels.



28. Dimensionality Reduction


Unsupervised learning also includes methods for reducing the number of dimensions.


Suppose:


100 features


need to be represented using:


2 dimensions.


A dimensionality reduction technique can create a lower-dimensional representation.



29. Principal Component Analysis


PCA is one of the most important dimensionality reduction techniques.


It identifies directions in the data that capture large amounts of variance.


The original features are transformed into:


Principal Components.



30. Why Reduce Dimensions?


Dimensionality reduction can help with:


Visualization


Noise Reduction


Computational Efficiency


Storage


Feature Representation.


It can also make very high-dimensional datasets easier to explore.



31. Unsupervised Learning and Machine Learning


Unsupervised learning is often used before supervised learning.


For example:


Raw Dataset


↓

Explore Clusters


↓

Understand Data


↓

Engineer Features


↓

Train Supervised Model.



32. Customer Segmentation


One of the most common applications is:


Customer Segmentation.


A company can use:


Purchase Frequency


Average Spending


Website Activity


Product Categories.


Clustering can help discover groups of customers with similar behaviour.



33. Document Grouping


Suppose thousands of documents are represented using numerical features.


Clustering can group documents according to similarity.


Possible groups might correspond to topics such as:


Technology


Sports


Finance


Education.


The algorithm does not necessarily know these topic names beforehand.



34. Image Analysis


Images can be converted into numerical feature representations.


Unsupervised learning can then help discover groups of similar images.


This can be useful for exploratory image analysis.



35. Anomaly Detection


Some unsupervised methods can help identify observations that differ significantly from the majority.


For example:


Most network activity may look normal.


A small number of observations may behave differently.


These unusual observations can be investigated further.



36. Important Limitation


Unsupervised learning does not automatically tell us:


Why a pattern exists.


It identifies mathematical structure.


Human interpretation is still required.



37. Python Example: Scaling Before Clustering


Python


from sklearn.preprocessing import StandardScaler


X = data[
    [
        "Age",
        "Spending"
    ]
]


scaler = StandardScaler()


X_scaled = scaler.fit_transform(
    X
)


print(
    X_scaled[:3]
)


Output


The features are transformed into standardized numerical values.



38. Clustering Scaled Data


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


Scaling can change the geometry of the problem and therefore can change clustering results.



39. Why Scaling Changes Clustering


Suppose:


Feature A


ranges from:


0 to 1.


Feature B


ranges from:


0 to 100,000.


Without scaling, Feature B can dominate distance calculations.


After standardization, both features contribute on a more comparable scale.



40. Choosing Features


Not every feature should automatically be included.


Irrelevant variables can introduce noise.


Highly redundant variables can distort distance calculations.


Therefore, feature selection remains important in unsupervised learning.



41. Experiment


Create a synthetic dataset.


Python


from sklearn.datasets import make_blobs


X, y = make_blobs(
    n_samples=300,
    centers=3,
    cluster_std=1.0,
    random_state=42
)


The variable:


X


contains the observations.


The variable:


y


contains generated labels.


In a true unsupervised experiment, the algorithm should not use y during clustering.



42. Apply k-Means


Python


model = KMeans(
    n_clusters=3,
    random_state=42,
    n_init=10
)


model.fit(
    X
)


labels = model.labels_


print(
    labels[:20]
)



43. Visualize the Result


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
    "k-Means Clustering"
)


plt.show()



44. Common Mistakes


Mistake 1:


Assuming cluster numbers have inherent meaning.


Mistake 2:


Ignoring feature scale.


Mistake 3:


Using irrelevant features.


Mistake 4:


Assuming every cluster is meaningful.


Mistake 5:


Choosing the number of clusters without analysis.


Mistake 6:


Treating clustering output as ground truth.


Mistake 7:


Ignoring visualization and interpretation.



45. Practice


1. What is unsupervised learning?


2. How is it different from supervised learning?


3. What is clustering?


4. What is similarity?


5. What is Euclidean distance?


6. Why can feature scaling matter?


7. What is k-Means?


8. What is hierarchical clustering?


9. What is DBSCAN?


10. What is PCA?


11. Why is visualization useful?


12. Why must clustering results be interpreted?



46. Quick Check


Question 1


Does unsupervised learning require a target variable?


Answer


No.


Question 2


What is the main goal of clustering?


Answer


To identify groups of similar observations.


Question 3


Why can scaling be important?


Answer


Because distance-based algorithms can be strongly affected by feature scale.


Question 4


Do cluster labels such as 0 and 1 have inherent meaning?


Answer


No. They are identifiers assigned by the algorithm.


Question 5


What is PCA mainly used for?


Answer


Dimensionality reduction and representation of data using principal components.



47. Summary


Unsupervised learning works with data where a target is generally not provided.


Its goal is to discover useful structure.


Clustering groups similar observations.


Distance measures can define similarity for numerical data.


Feature scaling can strongly affect distance-based methods.


k-Means is a centroid-based clustering algorithm.


Hierarchical clustering builds a hierarchy of groups.


DBSCAN identifies dense regions and can identify noise.


PCA reduces dimensionality by transforming the feature space.


Visualization and interpretation are essential parts of unsupervised learning.



48. Extended Study


For a dataset:


X = {x₁, x₂, ..., xₙ}


an unsupervised algorithm attempts to identify structure without using predefined target values.


For clustering, one possible objective is to minimize distances between observations and their assigned cluster representations.


For k-Means, the objective can be written as:


J = Σ ||xᵢ - μcᵢ||²


where:


xᵢ


is an observation.


μcᵢ


is the centroid of its assigned cluster.


The algorithm attempts to find cluster assignments and centroids that reduce this objective.



49. Reflection


Before applying an unsupervised algorithm, ask:


What structure am I trying to discover?


What does similarity mean for this dataset?


Are the features on comparable scales?


Are irrelevant variables included?


Could clustering actually represent a meaningful business or scientific concept?


Should I visualize the data first?


Would k-Means be appropriate?


Would a density-based or hierarchical method be more suitable?


How will I interpret the resulting groups?



`

};

export default lesson1;