const project = {

  id: "project",

  title: "Module 3 Project",

  content: `

Module 3

Unsupervised Learning & Data Preprocessing

Final Project


Project Title


Customer Segmentation and Behavioral Pattern Discovery


1. Project Overview


Build an end-to-end unsupervised machine learning system that discovers meaningful customer groups from behavioral and demographic information.


The project should demonstrate the complete concepts learned in Module 3:


Data preprocessing


Missing-value handling


Categorical encoding


Feature scaling


Clustering


PCA


Cluster evaluation


Feature interpretation.


The objective is not simply to run a clustering algorithm.


The objective is to build a complete, explainable workflow.



2. Problem Statement


A business has a customer dataset but does not have predefined customer segment labels.


The business wants to understand whether customers naturally form groups based on:


Age


Income


Purchase Frequency


Average Spending


Other available behavioral features.


Your task is to discover these groups and describe their characteristics.



3. Project Objectives


The project should:


1. Understand the dataset.


2. Identify numerical and categorical variables.


3. Analyze missing values.


4. Handle missing values appropriately.


5. Encode categorical variables.


6. Scale numerical features.


7. Select useful features.


8. Compare clustering approaches.


9. Evaluate cluster quality.


10. Visualize the discovered structure.


11. Profile the resulting clusters.


12. Explain limitations.



4. Dataset Requirements


You may use:


A suitable public customer dataset.


A classroom dataset.


A synthetic customer dataset.


The dataset should contain multiple observations and several useful features.


Recommended variables include:


Age


Income


Purchase Frequency


Average Spending


City


Payment Method.



5. Data Understanding


Begin by reporting:


Number of rows


Number of columns


Feature names


Data types


Missing values


Unique categorical values.


Python


print(
    df.shape
)


print(
    df.dtypes
)


print(
    df.head()
)


print(
    df.isna().sum()
)



6. Data Cleaning


Investigate:


Duplicate rows


Invalid values


Impossible numerical ranges.


Examples:


Negative age


Negative income


Invalid category values.


Do not remove observations without explaining why.



7. Missing Value Analysis


Calculate:


Missing count.


Missing percentage.


Determine whether missingness is concentrated in particular features.



8. Missing Value Strategy


For numerical variables, consider:


Median imputation.


For categorical variables, consider:


Most frequent imputation.


You may choose another strategy if you justify it.



9. Feature Selection


Remove columns that are not useful for clustering.


Examples:


Customer ID


Transaction ID.


Explain why each removed feature was excluded.



10. Categorical Encoding


Use:


OneHotEncoder.


Set:


handle_unknown="ignore".


This ensures unseen categories can be handled during later transformations.



11. Numerical Scaling


Use:


StandardScaler.


Explain why scaling is important for distance-based clustering algorithms.



12. Preprocessing Architecture


Build:


Numerical Pipeline


→


Imputation


→


Scaling.


Categorical Pipeline


→


Imputation


→


One-Hot Encoding.


Then combine them with:


ColumnTransformer.



13. Clustering Algorithms


Implement at least:


k-Means


Hierarchical Clustering


DBSCAN.



14. k-Means Experiment


Test several values:


k = 2


k = 3


k = 4


k = 5


k = 6.


Record:


Inertia


Silhouette Score.



15. Elbow Curve


Create an elbow plot.


The x-axis should contain:


Number of Clusters.


The y-axis should contain:


Inertia.



16. Silhouette Analysis


Calculate the silhouette score for each candidate value of k.


Do not rely on the score alone.


Also examine:


Cluster sizes


Visualization


Interpretability.



17. Hierarchical Clustering


Apply:


AgglomerativeClustering.


Experiment with suitable linkage strategies where appropriate.



18. DBSCAN


Apply:


DBSCAN.


Experiment with:


eps


and:


min_samples.


Record:


Number of clusters


Number of noise points.



19. Algorithm Comparison


Create a comparison such as:


Algorithm


Parameters


Clusters


Noise


Silhouette


Interpretability.


Use the table to discuss the differences rather than selecting a model solely by one numerical metric.



20. PCA Visualization


Apply:


PCA.


Reduce the processed feature space to:


2 components.


Plot:


PC1


vs


PC2.



21. PCA Explained Variance


Report:


PC1 variance.


PC2 variance.


Total variance retained.


Explain whether the two-dimensional visualization captures a substantial portion of the variation.



22. Cluster Visualization


Color the PCA scatter plot using the cluster labels.


This provides an interpretable two-dimensional view of the discovered structure.



23. Cluster Profiling


Add cluster labels to the original dataset.


Then calculate:


Mean age


Mean income


Mean spending


Mean purchase frequency.


For categorical variables, inspect category distributions by cluster.



24. Example Profile Questions


For each cluster ask:


Are customers younger or older?


Is income relatively high or low?


Is spending high or low?


How frequently do they purchase?


Which cities are common?


Which payment methods are common?



25. Cluster Naming


Do not use only:


Cluster 0


Cluster 1.


After profiling, you may describe groups using neutral descriptive names such as:


High-Frequency Customers


Occasional Customers


Higher-Spending Customers.


The names should be based on observed feature patterns rather than assumptions.



26. Stability Analysis


Repeat the clustering experiment.


For k-Means:


Use different random seeds.


For DBSCAN:


Try nearby parameter values.


Compare whether the discovered structure remains reasonably stable.



27. Feature Selection Experiment


Train clustering models:


Using all selected features.


Then using a reduced feature set.


Compare:


Silhouette


Cluster sizes


Interpretability.



28. Scaling Experiment


Run k-Means:


Without scaling.


With scaling.


Compare the cluster assignments.


Explain why the distance geometry changes.



29. Missing-Value Experiment


Compare:


Median imputation.


Mean imputation.


Evaluate whether the clustering structure changes.



30. Final Model


Choose a final workflow based on:


Data structure


Evaluation


Stability


Interpretability.


Do not choose the model solely because it has the highest single metric.



31. Final Workflow


The final implementation should resemble:


Raw Dataset


↓

Data Inspection


↓

Cleaning


↓

Feature Selection


↓

Missing Value Handling


↓

Encoding


↓

Scaling


↓

Clustering


↓

Evaluation


↓

PCA Visualization


↓

Cluster Profiling


↓

Interpretation.



32. Recommended Project Structure


project/


    data/


        customers.csv


    notebooks/


        customer_segmentation.ipynb


    src/


        preprocessing.py


        clustering.py


        evaluation.py


        visualization.py


    README.md



33. Notebook Structure


Section 1:


Project Introduction.


Section 2:


Problem Definition.


Section 3:


Dataset Understanding.


Section 4:


Data Cleaning.


Section 5:


Missing Values.


Section 6:


Preprocessing.


Section 7:


k-Means.


Section 8:


Hierarchical Clustering.


Section 9:


DBSCAN.


Section 10:


PCA.


Section 11:


Evaluation.


Section 12:


Cluster Profiling.


Section 13:


Final Interpretation.


Section 14:


Limitations.



34. Expected Visualizations


Create:


1. Feature distributions.


2. Missing-value summary.


3. Correlation matrix for suitable numerical features.


4. Elbow curve.


5. Silhouette comparison.


6. PCA scatter plot.


7. Cluster size chart.


8. Optional cluster profile charts.



35. Evaluation


Report:


Inertia for k-Means.


Silhouette Score.


Cluster counts.


Noise count for DBSCAN.


PCA explained variance.


Stability observations.



36. Business Interpretation


For every discovered group, provide:


Characteristics.


Important features.


Approximate size.


Potential interpretation.


Limitations.


Avoid claiming that the clusters are objectively true customer categories.


They are patterns discovered under the selected representation and algorithm.



37. Example Final Interpretation


A final report might state:


The analysis identified several customer groups based on the selected behavioral and demographic features.


The groups differed primarily in spending frequency and average spending.


The PCA visualization provided a two-dimensional view of the structure.


However, the PCA projection did not represent the complete feature space.


The discovered segments should therefore be treated as exploratory and validated against business requirements before operational use.



38. Limitations


Discuss:


No ground-truth segment labels.


Dependence on preprocessing.


Dependence on scaling.


Dependence on selected features.


Sensitivity to algorithm parameters.


Possible influence of outliers.


Potential instability.


Information loss from PCA visualization.



39. Extension 1: Customer Dashboard


Create a dashboard showing:


Cluster sizes


Cluster profiles


PCA visualization.


A dashboard can help non-technical users understand the discovered groups.



40. Extension 2: New Customer Assignment


For a k-Means solution, implement a workflow that:


Accepts a new customer.


Applies the saved preprocessing.


Transforms the customer.


Uses the trained clustering model.


Returns the nearest cluster assignment.



41. Extension 3: Save the Workflow


Save the preprocessing and model using:


joblib.


Example:


Python


import joblib


joblib.dump(
    final_model,
    "customer_segmentation_pipeline.joblib"
)



42. Extension 4: Monitoring


Create a simple monitoring report that tracks:


Cluster sizes over time.


Changes in feature distributions.


Missing-value rates.


New categorical values.



43. Extension 5: Alternative Dataset


Repeat the complete workflow on another dataset such as:


Mall customer data.


Retail transaction data.


Online shopping data.


The goal is to test whether the workflow generalizes to a different dataset.



44. Deliverables


Submit:


1. Jupyter Notebook.


2. Dataset or dataset source.


3. README.


4. Visualizations.


5. Final analysis report.



45. README Requirements


The README should contain:


Project title.


Problem statement.


Dataset description.


Technologies.


Preprocessing steps.


Algorithms.


Evaluation metrics.


Main findings.


Limitations.


How to run the project.



46. Final Report Structure


Title


Introduction


Problem Statement


Dataset


Data Preparation


Preprocessing


Clustering Experiments


PCA


Evaluation


Cluster Profiles


Interpretation


Limitations


Conclusion


Future Work.



47. Technical Requirements


Use Python.


Recommended libraries:


pandas


numpy


matplotlib


scikit-learn.


Use reproducible random states where applicable.



48. Learning Outcomes


After completing the project, you should be able to:


Understand an unsupervised learning problem.


Prepare numerical and categorical data.


Handle missing values.


Scale features.


Encode categories.


Build clustering models.


Compare clustering algorithms.


Apply PCA.


Evaluate cluster structure.


Interpret discovered groups.


Build a reproducible preprocessing workflow.



49. Final Challenge


Extend the project so that the user can provide a new customer record.


The system should:


Validate the input.


Apply the same preprocessing.


Transform the observation.


Assign it to a discovered k-Means cluster.


Display the cluster profile.


Explain the cluster using its original feature characteristics.



50. Final Reflection


Answer:


What preprocessing step had the greatest effect?


Which clustering algorithm produced the most interpretable structure?


How sensitive were the clusters to parameter changes?


How much variance did PCA retain?


Which features differentiated the groups?


What limitations remain?


What additional data would improve the analysis?


How could the system be validated in a real business environment?

`

};

export default project;