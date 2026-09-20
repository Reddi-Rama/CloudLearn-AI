const practice = {

  id: "practice",

  title: "Module 3 Practice",

  content: `

Module 3

Unsupervised Learning & Data Preprocessing

Practice


1. Practice Overview


This practice section covers the major concepts from the complete module.


The exercises move from:


Conceptual Understanding


→


Data Preparation


→


Clustering


→


Dimensionality Reduction


→


Preprocessing


→


Complete Workflows.



2. Conceptual Questions


1. What is unsupervised learning?


2. How is unsupervised learning different from supervised learning?


3. What is clustering?


4. What is similarity?


5. Why is feature representation important in clustering?


6. What is the difference between nominal and ordinal categorical variables?


7. What is dimensionality reduction?



3. k-Means Questions


1. What is the objective of k-Means?


2. What is a centroid?


3. Why does k-Means require the number of clusters?


4. What is inertia?


5. What is the elbow method?


6. Why can k-Means be affected by feature scaling?


7. Why can k-Means struggle with irregular cluster shapes?



4. Hierarchical Clustering Questions


1. What is hierarchical clustering?


2. What is agglomerative clustering?


3. What is linkage?


4. What does a dendrogram represent?


5. Compare:


Single linkage


Complete linkage


Average linkage


Ward linkage.



5. DBSCAN Questions


1. What does DBSCAN stand for?


2. What is eps?


3. What is min_samples?


4. What is a core point?


5. What is a border point?


6. What is a noise point?


7. Why can DBSCAN identify irregular shapes?


8. Why can DBSCAN struggle with different cluster densities?



6. Clustering Comparison


Create a comparison of:


k-Means


Hierarchical Clustering


DBSCAN.


For each algorithm identify:


Whether k is required.


Whether noise can be explicitly identified.


Whether irregular shapes can be handled.


Main parameters.


Main limitations.



7. PCA Questions


1. What is PCA?


2. What is a principal component?


3. What is PC1?


4. What is explained variance?


5. What is explained variance ratio?


6. What is covariance?


7. What are eigenvectors?


8. What are eigenvalues?


9. Why is scaling often performed before PCA?



8. PCA Visualization Practice


Load the Iris dataset.


Perform:


StandardScaler


PCA with 2 components.


Create a scatter plot.


Then answer:


How much variance is explained?


Do the observations appear separated?


Which classes overlap?



9. PCA Compression Practice


Use the digits dataset.


Try:


5 components


10 components


20 components


30 components.


For each configuration calculate:


Explained variance.


Reconstruction error.


Compression ratio.



10. Numerical Preprocessing


Answer the following:


1. What is standardization?


2. What is min-max scaling?


3. What is robust scaling?


4. When is median imputation useful?


5. What is an outlier?


6. What is IQR?


7. Why should identifiers usually be excluded?



11. Scaling Experiment


Create a dataset containing:


Age


Income.


Use:


StandardScaler


MinMaxScaler


RobustScaler.


Compare the transformed values.


Explain how each method changes the representation.



12. Missing Value Practice


Create a DataFrame with:


Age


Income


Spending.


Insert several missing values.


Apply:


Mean imputation.


Median imputation.


Compare the resulting datasets.



13. Missing Indicator Practice


Use:


SimpleImputer


with:


add_indicator=True.


Determine how many additional columns are created.



14. Categorical Encoding


Create a dataset with:


City


Payment Method


Education Level.


Identify which variables are:


Nominal


Ordinal.



15. One-Hot Encoding


Apply:


OneHotEncoder.


Use:


handle_unknown="ignore".


Introduce a category that was not present during fitting.


Observe the transformed representation.



16. Ordinal Encoding


Create:


Low


Medium


High.


Use:


OrdinalEncoder.


Verify that the ordering is preserved.



17. Mixed Data Preprocessing


Create a dataset containing:


Age


Income


City


Payment Method.


Build:


Numeric Pipeline:


Median Imputation


StandardScaler.


Categorical Pipeline:


Most Frequent Imputation


OneHotEncoder.



18. ColumnTransformer Practice


Combine the numerical and categorical pipelines using:


ColumnTransformer.


Inspect:


Number of resulting features.


Generated feature names.



19. Pipeline Practice


Build a complete pipeline:


Preprocessing


→


Logistic Regression.


Train the model.


Evaluate the test data.



20. Feature Selection


Compare:


SelectKBest


RFE


Lasso-based selection


Tree-based feature importance.


Explain how each approach selects features.



21. SelectKBest Exercise


Use:


SelectKBest


with:


f_classif.


Try:


k = 3


k = 5


k = 10.


Compare model performance.



22. RFE Exercise


Use:


LogisticRegression


with:


RFE.


Select:


3


5


10


features.


Compare the selected feature sets.



23. Lasso Exercise


Train:


Lasso.


Try several:


alpha


values.


Record:


Number of zero coefficients.


Number of non-zero coefficients.



24. Tree Feature Importance


Train:


RandomForestClassifier.


Extract:


feature_importances_.


Sort the features.


Visualize the top features.



25. Correlation Exercise


Calculate a correlation matrix.


Identify highly correlated numerical feature pairs.


Discuss:


Which features might be redundant?


Should one be removed?


What additional evidence would be required?



26. Complete Clustering Exercise


Choose a dataset.


Perform:


Data inspection


Missing-value analysis


Feature selection


Scaling


k-Means.


Test:


k = 2


k = 3


k = 4


k = 5.


Record:


Inertia


Silhouette Score.



27. DBSCAN Exercise


Run DBSCAN using several values of:


eps.


Record:


Number of clusters


Number of noise points.


Explain how the results change.



28. Hierarchical Exercise


Apply:


AgglomerativeClustering.


Compare:


Ward


Complete


Average


linkage.


Observe how the resulting clusters differ.



29. Algorithm Comparison


Use one dataset and compare:


k-Means


Hierarchical Clustering


DBSCAN.


Record:


Cluster count


Noise count


Silhouette Score


Interpretability.



30. PCA + Clustering


Perform:


Scaling


→


PCA


→


k-Means.


Compare with:


Scaling


→


k-Means.


Explain how PCA changes the representation.



31. Real-World Scenario


A company wants to segment customers.


Available features:


Age


Income


Purchase Frequency


Average Order Value


City


Payment Method.


Design a complete preprocessing and clustering workflow.



32. Real-World Scenario


A company wants to group documents by topic.


The data contains:


Text documents.


Design a workflow using:


TF-IDF


Clustering


PCA visualization.



33. Real-World Scenario


A factory wants to identify unusual sensor behavior.


Features:


Temperature


Pressure


Humidity


Vibration.


Explain whether you would use:


Clustering


Anomaly Detection


or:


Both.



34. Debugging Exercise


A student performs:


StandardScaler.fit_transform(
    complete_dataset
)


before:


train_test_split.


Explain why this can create information leakage.



35. Debugging Exercise


A student encodes:


Mumbai = 0


Delhi = 1


Chennai = 2.


They then use k-Means.


Explain why the numerical distances between these categories can be misleading.



36. Debugging Exercise


A student performs PCA before train/test splitting.


Explain the potential leakage problem.


Describe how a Pipeline can solve it.



37. Debugging Exercise


A DBSCAN model produces:


labels:


[0, 0, 0, 1, 1, -1].


What does:


-1


represent?



38. Mathematical Practice


Given:


x = 80


μ = 50


σ = 10.


Calculate:


z = (x - μ) / σ.



39. Mathematical Practice


Given:


x = 50


x_min = 10


x_max = 90.


Calculate the Min-Max scaled value.



40. Mathematical Practice


Given two features:


x₁ = 2


x₂ = 1000.


Explain why raw Euclidean distance may allow x₂ to dominate.



41. PCA Reasoning


Suppose PCA produces:


PC1 = 50%


PC2 = 30%


PC3 = 10%


PC4 = 10%.


How much variance is retained by:


2 components?


3 components?



42. Cluster Evaluation


Explain the difference between:


Inertia


Silhouette Score


Calinski-Harabasz


Davies-Bouldin.



43. Stability Exercise


Run k-Means multiple times with different random seeds.


Compare the resulting cluster assignments.


Explain what stable and unstable results mean.



44. Final Practical Exercise


Choose any suitable dataset and produce a complete notebook containing:


1. Problem Definition


2. Dataset Description


3. Data Inspection


4. Missing Value Analysis


5. Feature Preparation


6. Scaling


7. Algorithm Selection


8. Parameter Experiments


9. Evaluation


10. Visualization


11. Cluster Profiling


12. Interpretation


13. Limitations.


The final notebook should contain both code and explanations.



45. Final Reflection


Answer:


What type of unsupervised problem interests you most?


Clustering?


Dimensionality reduction?


Anomaly detection?


Data preprocessing?


What type of dataset would you like to analyze?


What features would you use?


What preprocessing would be required?


What algorithm would you try first?


How would you evaluate the result?



`

};

export default practice;