const lesson15 = {
  id: "lesson15",

  title: "Your First Machine Learning Model",

  content: `
Lesson 15

Your First Machine Learning Model


In this lesson, we build a complete machine learning application from beginning to end.

We will use the Iris dataset to:

Load the dataset

Understand the features and targets

Inspect the data

Split the data into training and test sets

Build a k-nearest neighbors classifier

Train the model

Make predictions

Evaluate the model

The complete workflow is:

Dataset
↓
Inspect Data
↓
Split Data
↓
Build Model
↓
Train Model
↓
Predict
↓
Evaluate


1. The Iris Dataset

The Iris dataset contains measurements of iris flowers.

Each flower has four numerical measurements:

Sepal length

Sepal width

Petal length

Petal width

The target identifies the flower species.

The three species are:

Setosa

Versicolor

Virginica

The problem is therefore a multiclass classification problem.


2. Loading the Dataset

Python

from sklearn.datasets import load_iris

iris = load_iris()

print(iris)

Output

The dataset object contains the feature data, target values, feature names, target names, and other information required for the example.


3. Inspecting Feature Names

Python

print(iris.feature_names)

Output

The feature names identify the four measurements stored in the dataset.


4. Inspecting Target Names

Python

print(iris.target_names)

Output

The target names identify the three flower species.


5. Inspecting the Dataset Shape

Python

print("Data shape:", iris.data.shape)
print("Target shape:", iris.target.shape)

Output

Data shape: (150, 4)

Target shape: (150,)

This means the dataset contains:

150 samples

4 features

150 target values

The number of target values matches the number of samples.


6. Understanding the Feature Matrix

The feature data can be represented as:

X = iris.data

The shape is:

150 × 4

Each row represents one flower.

Each column represents one measurement.


7. Understanding the Target

The target can be represented as:

y = iris.target

The target contains numerical class labels.

The encoding is:

0 → Setosa

1 → Versicolor

2 → Virginica


8. Inspecting the First Samples

Python

print(X[:5])

Output

The first five rows of the feature matrix are displayed.

Each row contains four measurements for one flower.


9. Inspecting the First Targets

Python

print(y[:5])

Output

The target values corresponding to the first samples are displayed.


10. Understanding the Problem

The machine learning problem can now be defined as:

Input:

Four flower measurements

Target:

Flower species

Learning Type:

Supervised Learning

Problem Type:

Multiclass Classification


11. Splitting the Dataset

The complete dataset should not be used for both training and evaluation.

We divide it into:

Training Set

Test Set

The training set is used to build the model.

The test set is used to evaluate how well the model works on unseen examples.

The source uses a 75 percent training and 25 percent test split for the Iris example. :contentReference[oaicite:2]{index=2}


12. Performing the Split

Python

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    iris.data,
    iris.target,
    random_state=0
)

print("Training data:", X_train.shape)
print("Test data:", X_test.shape)

Output

Training data: (112, 4)

Test data: (38, 4)


13. Why Shuffle the Data?

The Iris samples are ordered by their target classes.

If we simply selected the final portion of the dataset as the test set, it would not provide a useful representation of all three classes.

The train_test_split function shuffles the data before dividing it.

A fixed random_state makes the split reproducible. :contentReference[oaicite:3]{index=3}


14. Inspecting the Training Data

Python

print("X_train shape:", X_train.shape)
print("y_train shape:", y_train.shape)

Output

X_train shape: (112, 4)

y_train shape: (112,)


15. Inspecting the Test Data

Python

print("X_test shape:", X_test.shape)
print("y_test shape:", y_test.shape)

Output

X_test shape: (38, 4)

y_test shape: (38,)


16. Looking at the Data

Before training, it is useful to examine whether the features contain visible patterns.

A scatter plot can show the relationship between two features.

A pair plot can show relationships between multiple feature pairs.

The source uses visualization to inspect the Iris feature relationships and observes that the classes are relatively well separated in the feature space. :contentReference[oaicite:4]{index=4}


17. Building the First Model

For the first model, we use k-nearest neighbors.

The basic idea is:

New Flower
↓
Find Nearby Training Flowers
↓
Look at Their Classes
↓
Assign a Class to the New Flower

The source chooses k-nearest neighbors because it provides an easy-to-understand first classification model. :contentReference[oaicite:5]{index=5}


18. Creating the Classifier

Python

from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier(n_neighbors=3)

The value 3 specifies that three nearby training examples are considered when making a prediction.


19. Training the Model

Python

model.fit(X_train, y_train)

The model is now trained using:

Training Features

Training Targets


20. Making Predictions

Python

predictions = model.predict(X_test)

print(predictions)

Output

The model returns one predicted class for each test sample.


21. Comparing Predictions With Actual Values

Python

print("Predictions:", predictions)
print("Actual:", y_test)

Output

The predicted class values can be compared with the actual test labels.


22. Evaluating Accuracy

Python

accuracy = model.score(X_test, y_test)

print("Test accuracy:", accuracy)

Output

Test accuracy:

A numerical value representing the proportion of correctly classified test samples.


23. Complete First Model

Python

from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier

iris = load_iris()

X_train, X_test, y_train, y_test = train_test_split(
    iris.data,
    iris.target,
    random_state=0
)

model = KNeighborsClassifier(n_neighbors=3)

model.fit(X_train, y_train)

predictions = model.predict(X_test)

accuracy = model.score(X_test, y_test)

print("Predictions:", predictions)
print("Actual:", y_test)
print("Test accuracy:", accuracy)

Output

Predictions:

The predicted classes for the test flowers.

Actual:

The known classes of the test flowers.

Test accuracy:

The accuracy achieved on the unseen test set.


24. Predicting a New Flower

Suppose a new flower has these measurements:

Sepal length = 5.1

Sepal width = 3.5

Petal length = 1.4

Petal width = 0.2

Python

new_flower = [[5.1, 3.5, 1.4, 0.2]]

prediction = model.predict(new_flower)

print("Predicted class:", prediction[0])

Output

Predicted class:

The numerical class predicted by the model.


25. Converting the Prediction Into a Species Name

Python

prediction = model.predict(new_flower)

print(
    "Predicted species:",
    iris.target_names[prediction[0]]
)

Output

Predicted species:

The species name corresponding to the predicted class.


26. Complete Prediction Example

Python

new_flower = [[6.1, 2.9, 4.7, 1.4]]

prediction = model.predict(new_flower)

species = iris.target_names[prediction[0]]

print("Predicted species:", species)

Output

Predicted species:

The model selects one of the three Iris species.


27. Understanding the Complete Pipeline

The application now performs:

Load Dataset
↓
Inspect Dataset
↓
Separate Features and Target
↓
Split Training and Test Data
↓
Create kNN Model
↓
Train Model
↓
Predict Test Data
↓
Evaluate Model
↓
Predict New Data


28. What We Have Learned

This single application introduced several foundational machine learning concepts.

Dataset

Samples

Features

Targets

Training Data

Test Data

Model

Training

Prediction

Evaluation

Classification

Generalization


29. Why This Is a Machine Learning Application

The program is not based on manually writing rules such as:

If petal length is this value, choose this species.

Instead, the model receives labelled examples and learns a way to classify new measurements.

The model can then make predictions for flower measurements that were not part of its training examples.


30. Understanding the Role of the Model

The model is not the entire application.

The complete application also contains:

Data Loading

Data Preparation

Training

Prediction

Evaluation

User or application input

Result Presentation

The model is one important component within the larger workflow.


31. Changing the Number of Neighbors

The kNN model has a parameter:

n_neighbors

For example:

Python

KNeighborsClassifier(n_neighbors=1)

Python

KNeighborsClassifier(n_neighbors=3)

Python

KNeighborsClassifier(n_neighbors=5)

Different values can produce different predictions and different test performance.


32. Experiment With Model Complexity

Create models using:

1 neighbor

3 neighbors

5 neighbors

10 neighbors

Evaluate every model on the same test data.

Compare the results.

This experiment introduces the relationship between model settings, model behaviour, and generalization.


33. Inspecting the Results

Create a simple comparison:

| Number of Neighbors | Test Accuracy |
|---------------------|---------------|
| 1 | Record result |
| 3 | Record result |
| 5 | Record result |
| 10 | Record result |

The purpose is to understand that changing a model's configuration can change its performance.


34. Common Mistakes

Training on the entire dataset before creating a test set

Evaluating the model on training data only

Forgetting to separate X and y

Using the wrong shape for a new prediction

Forgetting to train the model before prediction

Changing model settings without evaluating the result

Assuming the model will always predict correctly


35. Practical Exercise

Build the Iris classification application independently.

Your program should:

Load the Iris dataset

Print the feature names

Print the target names

Print the dataset shape

Split the data

Create a kNN classifier

Train the model

Predict the test data

Calculate test accuracy

Predict the class of one new flower


36. Extension Exercise

Modify the program to allow the user to enter four flower measurements.

The program should:

Read four values

Create a prediction input

Pass the values to the trained model

Display the predicted species


37. Quick Check

Question

What dataset is used for the first machine learning application?

Answer

The Iris flower dataset.

Question

What algorithm is used for the first classification model?

Answer

k-nearest neighbors.

Question

Why is the test set kept separate?

Answer

To evaluate how well the trained model performs on data that it did not see during training.


Summary

The Iris dataset provides a simple example of a complete machine learning workflow.

The dataset contains 150 samples, 4 numerical features, and 3 target classes. :contentReference[oaicite:6]{index=6}

The data is divided into training and test sets.

A k-nearest neighbors classifier is trained using the training data.

The trained model predicts the classes of unseen test samples.

The predictions are evaluated using the known test targets.

The same model can then be used to classify new flower measurements.


Extended Study

The complete machine learning workflow can be represented mathematically as:

X_train + y_train
↓
Learning Algorithm
↓
Model
↓
X_new
↓
Prediction

For the Iris problem:

X represents flower measurements.

y represents flower species.

The model learns a relationship between the measurements and the species labels.

The objective is not simply to reproduce the training labels.

The objective is to make accurate predictions for new flower measurements.

This is the foundation of supervised machine learning.


Reflection

The Iris example is small, but it demonstrates the same fundamental workflow used in much larger machine learning systems.

Think about a real application such as fraud detection, recommendation, or medical classification.

What would represent X?

What would represent y?

What examples would be used for training?

What information would be held back for testing?

How would the final prediction be evaluated?
`
};

export default lesson15;