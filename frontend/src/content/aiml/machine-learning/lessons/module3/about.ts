const about = {

  id: "about",

  title: "Module 3 — Unsupervised Learning & Data Preprocessing",

  content: `

Module 3

Unsupervised Learning & Data Preprocessing


Module Overview


Machine learning does not always require a target variable.

In supervised learning, we learned from examples where the desired output was known.

For example:


Input Features

↓

Known Target

↓

Learn Model

↓

Predict Target


But many real-world datasets do not contain a target.

We may have thousands or millions of observations without predefined labels.

In such situations, we can use:

Unsupervised Learning.


Unsupervised learning attempts to discover useful structure, patterns, relationships, or representations directly from the input data.


1. What You Will Learn


This module introduces the major ideas behind unsupervised learning and practical data preprocessing.


You will learn:


Unsupervised Learning


Similarity and Distance


Clustering


k-Means


Choosing the Number of Clusters


Hierarchical Clustering


DBSCAN


Clustering Evaluation


Principal Component Analysis


Dimensionality Reduction


Data Scaling


Standardization


Categorical Encoding


Missing-Value Handling


Imputation


Pipelines


ColumnTransformer


Feature Selection


Real-World Unsupervised Learning Workflows.



2. Why Unsupervised Learning Matters


Many datasets do not come with labels.


Examples:


Customer transaction records


Website activity


Sensor measurements


Product descriptions


Image features


Network activity


User behaviour.


Suppose a company has:


100,000 customers.


But it does not know which customers have similar behaviour.


A clustering algorithm can attempt to discover groups of customers based on their characteristics.



3. Supervised vs Unsupervised Learning


Supervised Learning:


Input


+


Known Target


↓


Model


↓


Prediction


Unsupervised Learning:


Input


↓


Discover Structure


↓


Groups / Representations / Patterns.



4. Major Topics in This Module


The module can be divided into two major areas.


Part 1:


Unsupervised Learning


Part 2:


Data Preprocessing.


Unsupervised learning includes:


Clustering


Dimensionality Reduction.


Preprocessing includes:


Scaling


Encoding


Missing Values


Feature Selection


Pipelines.



5. Clustering


Clustering attempts to divide observations into groups according to similarity.


For example:


Customers


↓

Cluster 1


Cluster 2


Cluster 3.


The algorithm does not receive predefined customer categories.


It discovers groups from the data.



6. k-Means


k-Means is one of the most commonly taught clustering algorithms.


Its basic idea is:


Choose k clusters


↓

Assign observations to clusters


↓

Calculate cluster centers


↓

Update assignments


↓

Repeat


until the solution stabilizes or a stopping condition is reached.



7. Hierarchical Clustering


Hierarchical clustering builds a hierarchy of groups.


It can be represented using a:


Dendrogram.


This allows different numbers of clusters to be explored from the same hierarchical structure.



8. DBSCAN


DBSCAN is a density-based clustering algorithm.


It identifies dense regions of observations.


It can also identify observations that do not belong to sufficiently dense regions.


These observations may be treated as:


Noise.



9. Dimensionality Reduction


Datasets can contain hundreds or thousands of features.


High-dimensional data can be difficult to:


Visualize


Store


Process


Interpret.


Dimensionality reduction attempts to represent the data using fewer dimensions while preserving useful information.



10. Principal Component Analysis


PCA is a widely used dimensionality reduction technique.


It transforms the original features into a new set of directions called:


Principal Components.


The first principal component captures the largest possible amount of variance under the standard PCA formulation.



11. Data Preprocessing


Real-world datasets are rarely ready for machine learning algorithms.


Data may contain:


Different numerical scales


Missing values


Categorical variables


Outliers


Irrelevant features


Inconsistent representations.


Preprocessing converts raw data into a form that machine learning algorithms can use effectively.



12. Scaling


Suppose a dataset contains:


Age:


18–80


Income:


20,000–2,000,000.


The numerical scales are very different.


Some algorithms are sensitive to these differences.


Scaling can transform features into more comparable numerical ranges.



13. Encoding


Machine learning algorithms generally require numerical representations.


A categorical variable such as:


City


may contain:


Mumbai


Delhi


Chennai


Hyderabad.


Encoding converts categories into numerical representations.



14. Missing Values


Real-world datasets often contain missing observations.


For example:


Age = 21


Income = Missing


City = Mumbai.


Machine learning algorithms may require missing values to be handled before training.



15. Imputation


Imputation replaces missing values using an appropriate strategy.


Examples:


Mean


Median


Most Frequent


Constant


More advanced approaches can also be used.



16. Pipelines


A preprocessing pipeline can combine multiple operations.


For example:


Raw Data


↓

Scaling


↓

Encoding


↓

Model.


Pipelines help keep preprocessing consistent between training and prediction.



17. ColumnTransformer


Different columns often require different preprocessing.


For example:


Numerical Columns


→


StandardScaler


Categorical Columns


→


OneHotEncoder.


ColumnTransformer allows these transformations to be applied to different groups of columns.



18. Feature Selection


Not every feature is useful.


Some features may be:


Redundant


Irrelevant


Noisy.


Feature selection attempts to retain useful features while removing unnecessary ones.



19. Module Learning Goals


By the end of this module, you should be able to:


Explain unsupervised learning.


Understand clustering.


Implement k-Means.


Understand hierarchical clustering.


Implement DBSCAN.


Compare clustering methods.


Explain PCA.


Apply dimensionality reduction.


Scale numerical features.


Encode categorical variables.


Handle missing values.


Build preprocessing pipelines.


Use ColumnTransformer.


Perform basic feature selection.



20. Tools Used


The primary language will be:


Python.


Important libraries include:


NumPy


Pandas


Matplotlib


scikit-learn.


Some experiments may use:


Seaborn.


The focus remains on understanding the algorithms rather than simply calling library functions.



21. Mathematical Intuition


This module introduces several mathematical ideas.


Important concepts include:


Distance


Similarity


Centroids


Variance


Covariance


Eigenvectors


Eigenvalues


Optimization


Density.


The mathematics will be explained gradually alongside practical Python examples.



22. Practical Learning Approach


For each major algorithm, follow this process:


Understand the Problem


↓

Understand the Intuition


↓

Understand the Mathematics


↓

Implement in Python


↓

Visualize Results


↓

Experiment with Parameters


↓

Analyze Limitations.



23. Real-World Applications


Unsupervised learning and preprocessing are used in:


Customer Segmentation


Recommendation Systems


Anomaly Detection


Image Analysis


Document Analysis


Market Research


Network Analysis


Fraud Investigation


Bioinformatics


Data Exploration.



24. Final Module Project


The module will conclude with a practical project involving:


Data Exploration


Preprocessing


Scaling


Clustering


Dimensionality Reduction


Visualization


Cluster Analysis.


The goal is to transform an unstructured dataset into useful insights.



25. Expected Outcome


After completing Module 3, you should understand that machine learning is not only about training predictive models.


A large part of practical machine learning involves:


Understanding data


Preparing data


Finding structure


Reducing complexity


Selecting useful representations.


These skills form the foundation for more advanced machine learning and data science work.

`

};

export default about;