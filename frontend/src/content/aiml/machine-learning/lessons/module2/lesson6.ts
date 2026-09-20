const lesson6 = {

  id: "lesson6",

  title: "Working with Sample Datasets",

  content: `

Lesson 06

Working with Sample Datasets


Machine learning is fundamentally based on data.

Before building a model, we need to understand the data that will be used for learning and evaluation.

A dataset contains observations about a problem.

Each observation usually contains:


Features


and:


Target


Working with sample datasets is an important practical skill because it allows us to understand the complete machine learning workflow before working with large real-world datasets.



1. What Is a Dataset?


A dataset is a collection of observations.


For example, suppose we want to predict whether a student will pass an examination.


A dataset might contain:


| Study Hours | Attendance | Assignment Score | Result |
|-------------|------------|------------------|--------|
| 2 | 65 | 55 | Fail |
| 4 | 75 | 68 | Pass |
| 6 | 82 | 76 | Pass |
| 1 | 58 | 42 | Fail |
| 8 | 91 | 88 | Pass |


Each row represents one observation.


The columns contain information about the observation.



2. Samples


A sample is one observation from a dataset.


For example:


Study Hours = 4


Attendance = 75


Assignment Score = 68


Result = Pass


This complete row represents one sample.



3. Features


Features are the input variables used by a model to make predictions.


In the student dataset:


Study Hours


Attendance


Assignment Score


are features.


We can represent the feature vector as:


x = [4, 75, 68]


Features are sometimes also called:


Input Variables


Predictor Variables


Attributes


Independent Variables



4. Target


The target is the value that the model is expected to predict.


In the student example:


Result


is the target.


The target can also be called:


Label


Output


Response Variable


Dependent Variable


For classification:


Target = Class


For regression:


Target = Numerical Value



5. Feature Matrix


When multiple observations are stored together, the features form a matrix.


Suppose:


X =


| 2 | 65 | 55 |
| 4 | 75 | 68 |
| 6 | 82 | 76 |
| 1 | 58 | 42 |
| 8 | 91 | 88 |


Each row represents a sample.


Each column represents a feature.


If there are:


n samples


and:


p features


then the feature matrix has:


n × p


elements.



6. Target Vector


The corresponding targets can be represented as:


y =


[Fail, Pass, Pass, Fail, Pass]


For numerical regression:


y =


[45, 60, 72, 81, 95]


The target vector contains one target value for each sample.



7. X and y Convention


In Python machine learning libraries, the common convention is:


X


for features.


y


for target.


Therefore:


X = Input Features


y = Target


A model is trained using:


model.fit(X, y)


The model learns a relationship between X and y.



8. Sample Datasets in scikit-learn


scikit-learn provides several datasets that are useful for learning machine learning.


Examples include:


Iris


Diabetes


Breast Cancer


Digits


Wine


These datasets allow us to experiment without first collecting our own real-world data.



9. The Iris Dataset


The Iris dataset is one of the most commonly used introductory machine learning datasets.


It contains measurements of iris flowers.


The features include:


Sepal Length


Sepal Width


Petal Length


Petal Width


The target represents the flower species.



10. Iris Classes


The dataset contains three classes:


Setosa


Versicolor


Virginica


Therefore, predicting the species is a multiclass classification problem.



11. Loading the Iris Dataset


Python


from sklearn.datasets import load_iris


iris = load_iris()


print(iris)


Output


The output contains the dataset object, including:


Data


Target


Feature Names


Target Names


Description


and other metadata.



12. Examining the Data


Python


from sklearn.datasets import load_iris


iris = load_iris()


print("Shape:", iris.data.shape)


print("Feature names:")
print(iris.feature_names)


print("Target names:")
print(iris.target_names)


Output


Shape:


(150, 4)


Feature names:


sepal length (cm)


sepal width (cm)


petal length (cm)


petal width (cm)


Target names:


['setosa' 'versicolor' 'virginica']



13. Understanding the Shape


The expression:


iris.data.shape


returns:


(150, 4)


This means:


150 samples


and:


4 features


Therefore, the feature matrix has:


150 × 4


elements.



14. Inspecting Samples


Python


print(iris.data[:5])


Output


The output contains the first five observations.


Each row contains four feature values.


For example, conceptually:


Sample 1:


[5.1, 3.5, 1.4, 0.2]


The exact values come from the sample dataset.



15. Inspecting Targets


Python


print(iris.target[:10])


Output


The target values are represented using numerical class labels.


For example:


[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


The numerical labels correspond to target names.



16. Mapping Target Numbers to Names


The target names can be inspected using:


print(iris.target_names)


The mapping is conceptually:


0 → setosa


1 → versicolor


2 → virginica


This allows numerical target values to be interpreted as class names.



17. Dataset Metadata


A dataset often contains more than just X and y.


Useful information can include:


Feature names


Target names


Description


Units


Source information


Number of samples


Number of features


Understanding metadata is important before modeling.



18. Describing a Dataset


Before training a model, ask:


How many samples are present?


How many features exist?


What are the feature names?


What type of target is present?


Are there missing values?


Are the classes balanced?


What are the units?


What population does the dataset represent?



19. Regression Dataset


scikit-learn also provides datasets for regression.


One example is:


Diabetes dataset


It contains numerical measurements and a quantitative target.


Therefore, it can be used to demonstrate regression.



20. Loading the Diabetes Dataset


Python


from sklearn.datasets import load_diabetes


diabetes = load_diabetes()


print("Shape:", diabetes.data.shape)


print("Target shape:", diabetes.target.shape)


Output


Shape:


(442, 10)


Target shape:


(442,)


The exact output corresponds to the standard dataset provided by scikit-learn.



21. Understanding the Regression Dataset


The feature matrix contains:


442 samples


and:


10 features.


The target contains one numerical value for each sample.


Therefore:


X.shape = (442, 10)


y.shape = (442,)


This is a regression dataset.



22. Train-Test Split


A dataset should normally be divided before evaluating a model.


A common approach is:


Training Set


and:


Test Set


For example:


75% Training


25% Test


The training set is used to fit the model.


The test set is used to evaluate performance on unseen observations.



23. Python Train-Test Split


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split


iris = load_iris()


X = iris.data
y = iris.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


print("Training samples:", X_train.shape[0])


print("Test samples:", X_test.shape[0])


Output


Training samples:


112


Test samples:


38


The exact number follows from 150 total samples and a 25% test split.



24. Why Use random_state?


The train-test split involves randomness.


The parameter:


random_state


controls the random number generation.


Using a fixed value makes the split reproducible.


For example:


random_state=42


means that running the same code again produces the same split under the same software conditions.



25. Why Use stratify?


For classification problems, we often want the training and test sets to maintain similar class proportions.


The parameter:


stratify=y


helps preserve the class distribution during splitting.


This is especially useful when classes are not perfectly balanced.



26. Data Exploration Before Modeling


Before selecting a model, explore the dataset.


Important questions include:


What are the feature ranges?


Are features numerical or categorical?


Are values missing?


Are there outliers?


Are classes balanced?


Are some features strongly related?


Does the target have unusual values?



27. Using NumPy


Many machine learning datasets are represented using NumPy arrays.


For example:


import numpy as np


X = np.array([
    [2, 5],
    [4, 8],
    [6, 12]
])


y = np.array([
    0,
    1,
    1
])


print(X.shape)


Output


(3, 2)


This means:


3 samples


2 features.



28. Using Pandas


Pandas is useful when datasets are stored in tabular form.


Python


import pandas as pd


data = {
    "StudyHours": [2, 4, 6, 8],
    "Attendance": [65, 75, 82, 91],
    "Result": ["Fail", "Pass", "Pass", "Pass"]
}


df = pd.DataFrame(data)


print(df)


Output


The DataFrame contains three columns:


StudyHours


Attendance


Result



29. Separating Features and Target


Suppose:


df


contains:


StudyHours


Attendance


Result


We can create:


X = df[["StudyHours", "Attendance"]]


y = df["Result"]


Now:


X


contains the features.


y


contains the target.



30. Inspecting DataFrame Information


Python


print(df.info())


This provides information about:


Number of rows


Column names


Data types


Non-null values


Memory usage



31. Descriptive Statistics


Pandas provides:


df.describe()


This can show:


Count


Mean


Standard Deviation


Minimum


Quartiles


Maximum


These statistics provide a quick numerical summary.



32. Missing Values


Real-world datasets may contain missing values.


For example:


| Age | Income | Score |
|-----|--------|-------|
| 21 | 30000 | 75 |
| 24 | | 82 |
| 22 | 28000 | 69 |


The second row has a missing income value.


Before training, missing values should be handled appropriately.



33. Checking Missing Values


Python


print(df.isnull().sum())


Output


The output shows the number of missing values in each column.



34. Why Missing Values Matter


Many machine learning algorithms cannot directly work with missing values in their standard form.


Possible approaches include:


Removing observations


Removing features


Imputing values


Using algorithms that support missing values


The correct approach depends on the dataset and application.



35. Feature Scaling


Different features can have very different numerical ranges.


For example:


Age:


18 to 60


Income:


20,000 to 500,000


Distance:


1 to 100


Some algorithms are sensitive to feature scale.


Scaling transforms features into a more comparable numerical range.



36. Standardization


A common transformation is:


z = (x - μ) / σ


where:


x = Original value


μ = Mean


σ = Standard deviation


After standardization, a feature has approximately:


Mean = 0


Standard Deviation = 1


when computed over the data used to fit the scaler.



37. StandardScaler


Python


from sklearn.preprocessing import StandardScaler


scaler = StandardScaler()


X_train_scaled = scaler.fit_transform(X_train)


X_test_scaled = scaler.transform(X_test)


The scaler is fitted only using the training data.


The same transformation is then applied to the test data.



38. Why Fit Only on Training Data?


Suppose we calculate the mean and standard deviation using:


Training + Test Data


The test set would influence preprocessing.


This introduces information from the test set into the training process.


Therefore:


Training:


fit_transform()


Test:


transform()



39. Sample Dataset Workflow


A practical workflow is:


Load Dataset


↓


Inspect Dataset


↓


Understand Features


↓


Understand Target


↓


Check Data Quality


↓


Split Data


↓


Preprocess Training Data


↓


Train Model


↓


Evaluate on Test Data



40. Python Example: Complete Dataset Workflow


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier


iris = load_iris()


X = iris.data
y = iris.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


scaler = StandardScaler()


X_train_scaled = scaler.fit_transform(X_train)


X_test_scaled = scaler.transform(X_test)


model = KNeighborsClassifier(
    n_neighbors=5
)


model.fit(
    X_train_scaled,
    y_train
)


accuracy = model.score(
    X_test_scaled,
    y_test
)


print("Test accuracy:", accuracy)


Output


Test accuracy:


A value between 0 and 1 determined by the fitted model and test split.



41. Understanding the Complete Example


Step 1:


Load the dataset.


Step 2:


Separate X and y.


Step 3:


Create training and test sets.


Step 4:


Fit the scaler using training data.


Step 5:


Transform training and test data.


Step 6:


Create the model.


Step 7:


Train the model.


Step 8:


Evaluate using the test data.



42. Sample Dataset vs Real Dataset


Sample datasets are useful for:


Learning


Experimentation


Algorithm comparison


Debugging


Teaching


Real-world datasets are usually more complicated.


They may contain:


Missing values


Duplicates


Incorrect labels


Categorical variables


Outliers


Noise


Large numbers of features


Data collection biases



43. Dataset Documentation


When using a dataset, document:


Where it came from


What each feature means


What the target means


Units


Collection period


Population


Known limitations


Preprocessing steps


This improves reproducibility and helps prevent incorrect interpretation.



44. Dataset Bias


A dataset may not represent the population accurately.


For example, a model trained only on data from one geographic region may not generalize to another region.


Bias can enter through:


Sampling


Data collection


Labeling


Measurement


Historical decisions


Therefore, dataset inspection is part of responsible machine learning.



45. Feature Names and Interpretation


Never assume that a numerical column is automatically meaningful.


For example:


Feature 0


does not explain what the feature represents.


Good machine learning practice requires understanding the meaning of each feature.



46. Target Leakage


A dataset may contain a feature that directly or indirectly reveals the target.


For example:


Suppose we want to predict:


Whether a loan will default.


A feature:


Recovery Amount


may only be known after the default event.


Using it during training can create leakage.



47. Dataset Splitting and Leakage


The general principle is:


Split first.


Then fit preprocessing using training data.


Then train the model.


Then evaluate on untouched test data.


This preserves the purpose of the test set.



48. Experiment


Load the Iris dataset.


Perform the following tasks:


1. Print the dataset shape.


2. Print feature names.


3. Print target names.


4. Display the first five samples.


5. Display the first ten target values.


6. Create a train-test split.


7. Print the training and test sizes.



49. Experiment: Explore the Diabetes Dataset


Load:


load_diabetes()


Print:


Shape


Feature names


First five observations


First five target values


Target statistics


Then answer:


How many samples are present?


How many features?


Is the target categorical or numerical?



50. Experiment: Pandas Dataset


Create a DataFrame containing:


Student


StudyHours


Attendance


AssignmentScore


Result


Add at least:


10 observations.


Then:


Display the DataFrame.


Calculate descriptive statistics.


Check missing values.


Separate X and y.



51. Common Mistakes


Mistake 1:


Starting model training without understanding the dataset.


Mistake 2:


Confusing features with the target.


Mistake 3:


Scaling before splitting the dataset.


Mistake 4:


Fitting preprocessing using test data.


Mistake 5:


Ignoring missing values.


Mistake 6:


Ignoring class imbalance.


Mistake 7:


Not checking feature meanings.


Mistake 8:


Using a dataset without understanding its limitations.



52. Practice


1. What is a dataset?


2. What is a sample?


3. What is a feature?


4. What is a target?


5. What do X and y commonly represent?


6. What is the shape of a feature matrix?


7. Why do we split data into training and test sets?


8. What does random_state do?


9. Why is stratify useful?


10. Why should preprocessing be fitted only on training data?



53. Quick Check


Question 1


What is X?


Answer


X commonly represents the input feature matrix.


Question 2


What is y?


Answer


y commonly represents the target values.


Question 3


How many features are present in Iris?


Answer


Four features.


Question 4


How many samples are present in Iris?


Answer


150 samples.


Question 5


What type of problem is the Iris species prediction?


Answer


Multiclass classification.



54. Summary


A dataset contains observations.


Each observation is a sample.


Features are input variables.


The target is the value the model predicts.


X commonly represents the feature matrix.


y commonly represents the target.


The Iris dataset is a classification dataset.


The Diabetes dataset is a regression dataset.


Train-test splitting separates learning data from evaluation data.


random_state provides reproducibility.


stratify can preserve class proportions.


Pandas is useful for tabular data exploration.


NumPy provides numerical array structures.


Feature scaling can be important for some algorithms.


Preprocessing should be fitted using training data only.


Dataset quality and documentation are essential for reliable machine learning.



55. Extended Study


A dataset can be viewed mathematically as:


D = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}


where:


xᵢ


is the feature vector for sample i.


yᵢ


is its target.


The learning algorithm receives:


X = [x₁, x₂, ..., xₙ]


and:


y = [y₁, y₂, ..., yₙ]


and attempts to learn:


f(X) → y


The quality of this learning process depends strongly on the information represented in the dataset.



56. Dataset Size and Feature Dimension


Suppose:


n = Number of samples


p = Number of features


Then the feature matrix has shape:


n × p


For example:


n = 150


p = 4


Therefore:


X.shape = (150, 4)


Understanding these dimensions helps prevent many programming errors.



57. Dataset as the Foundation of Machine Learning


A sophisticated algorithm cannot compensate for completely unsuitable data.


If the dataset:


contains incorrect labels,


misses important populations,


contains leakage,


has severe measurement errors,


or does not represent deployment conditions,


then model performance can be misleading.


Therefore:


Data Understanding


comes before:


Model Selection.



58. Reflection


Choose a dataset you would like to use for a machine learning project.


Ask:


What does one row represent?


What does each feature mean?


What is the target?


How many observations are available?


Are there missing values?


Are the classes balanced?


Could there be leakage?


Does the dataset represent the environment where the model will be used?


Answering these questions is the beginning of practical machine learning.

`

};

export default lesson6;