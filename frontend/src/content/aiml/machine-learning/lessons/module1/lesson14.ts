const lesson14 = {
  id: "lesson14",

  title: "Introduction to scikit-learn",

  content: `
Lesson 14

Introduction to scikit-learn


scikit-learn is an open-source Python library for machine learning.

It provides a broad collection of machine learning algorithms together with a consistent interface for training models, making predictions, and evaluating results.

The source describes scikit-learn as a major Python machine learning library with active development, documentation, and integration with the scientific Python ecosystem. :contentReference[oaicite:15]{index=15}


1. Why scikit-learn?

Building machine learning algorithms entirely from scratch would require implementing:

Mathematical operations

Optimization procedures

Prediction logic

Model training

Model evaluation

Data handling

scikit-learn provides implementations of many commonly used algorithms so developers can concentrate on applying them correctly to their problems.


2. The scikit-learn Ecosystem

A simple machine learning workflow is:

Data
↓
Estimator
↓
Fit
↓
Predict
↓
Evaluate

The same general pattern appears across many scikit-learn models.


3. Estimators

In scikit-learn, machine learning models are commonly represented by estimator objects.

Examples include:

LinearRegression

LogisticRegression

KNeighborsClassifier

DecisionTreeClassifier

RandomForestClassifier

These estimators provide methods for fitting models and making predictions.


4. The fit Method

The fit method is used to train a model.

Python

model.fit(X_train, y_train)

Here:

X_train contains training features.

y_train contains the corresponding targets.

The model learns from the provided examples.


5. The predict Method

After training, the predict method generates predictions.

Python

predictions = model.predict(X_test)

The model applies what it learned to the new input data.


6. The Basic scikit-learn Pattern

Python

model = SomeModel()

model.fit(X_train, y_train)

predictions = model.predict(X_test)

This pattern is used by many scikit-learn estimators.


7. Example With k-Nearest Neighbors

The source introduces k-nearest neighbors as a simple first classification model.

The basic idea is:

New Point
↓
Find Nearby Training Points
↓
Use Their Class Information
↓
Prediction

The model can therefore classify a new example by looking at nearby examples in the training data. :contentReference[oaicite:16]{index=16}


8. Creating a kNN Classifier

Python

from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier(n_neighbors=3)

The n_neighbors parameter determines how many nearby training examples are considered.


9. Training the Model

Python

model.fit(X_train, y_train)

The model receives:

X_train

y_train

The estimator is then ready to make predictions.


10. Making a Prediction

Python

prediction = model.predict(X_test)

The returned result contains the predicted class for each test sample.


11. Complete Small Example

Python

from sklearn.neighbors import KNeighborsClassifier

X_train = [
    [1, 1],
    [1, 2],
    [2, 1],
    [4, 4],
    [5, 4],
    [4, 5]
]

y_train = [0, 0, 0, 1, 1, 1]

X_test = [
    [2, 2],
    [5, 5]
]

model = KNeighborsClassifier(n_neighbors=3)

model.fit(X_train, y_train)

predictions = model.predict(X_test)

print("Predictions:", predictions)

Output

The model returns one predicted class for each test sample.


12. Understanding the Input Shape

scikit-learn generally expects the feature data to have two dimensions.

The standard structure is:

Number of Samples × Number of Features

For example:

100 samples × 4 features

The shape is:

100 × 4


13. Target Representation

The target is normally represented as a one-dimensional sequence.

Example:

y = [0, 1, 1, 0, 1]

There should be one target value for every training sample.


14. X and y Convention

A common convention in scikit-learn is:

X → Input Features

y → Target

The source explains this naming convention in the Iris example and connects it to the mathematical form of a function. :contentReference[oaicite:17]{index=17}


15. Training and Test Data

The model should be trained using training data.

The test data should remain separate.

The process is:

X_train + y_train
↓
model.fit()
↓
Trained Model

Then:

X_test
↓
model.predict()
↓
Predictions

The test targets are used afterward to evaluate the predictions.


16. Why scikit-learn Uses This Structure

A consistent interface makes it easier to switch between algorithms.

For example:

Python

model = KNeighborsClassifier()

model.fit(X_train, y_train)

predictions = model.predict(X_test)

A different model may follow almost the same workflow:

Python

model = LinearRegression()

model.fit(X_train, y_train)

predictions = model.predict(X_test)


The mathematical method changes, but the basic interaction remains familiar.


17. Loading the Iris Dataset

The source uses the Iris dataset as the first complete machine learning application.

The dataset contains:

150 samples

4 features

3 flower species

The features represent flower measurements, and the target represents the species. :contentReference[oaicite:18]{index=18}


18. Loading Iris With scikit-learn

Python

from sklearn.datasets import load_iris

iris = load_iris()

print("Feature names:")
print(iris.feature_names)

print("Target names:")
print(iris.target_names)

Output

The dataset provides feature information and target class information.


19. Inspecting the Data

Python

print("Data shape:", iris.data.shape)
print("Target shape:", iris.target.shape)

Output

Data shape: (150, 4)

Target shape: (150,)

This means:

150 samples

4 features

150 target values


20. Understanding the Target

The Iris target is encoded numerically.

A simplified representation is:

0 → Setosa

1 → Versicolor

2 → Virginica

The numerical values are class labels rather than continuous measurements. :contentReference[oaicite:19]{index=19}


21. Splitting the Dataset

Before training, separate the data into training and test portions.

Python

from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    iris.data,
    iris.target,
    random_state=0
)

The source uses this procedure and separates approximately 75 percent of the examples for training and 25 percent for testing. :contentReference[oaicite:20]{index=20}


22. Training the Iris Model

Python

from sklearn.neighbors import KNeighborsClassifier

model = KNeighborsClassifier(n_neighbors=3)

model.fit(X_train, y_train)

The model stores the training information needed to classify new flower measurements.


23. Making Predictions

Python

predictions = model.predict(X_test)

print(predictions)

The predictions contain the model's estimated species classes.


24. Evaluating the Model

A simple evaluation is:

Python

accuracy = model.score(X_test, y_test)

print("Test accuracy:", accuracy)

The score provides a numerical measure of performance on the test set.

The important point is that the evaluation uses data that was not used to train the model.


25. Making a Prediction for One New Flower

Suppose a new flower has these measurements:

Sepal length

Sepal width

Petal length

Petal width

The model can receive those four feature values.

Python

new_flower = [[5.1, 3.5, 1.4, 0.2]]

prediction = model.predict(new_flower)

print("Predicted class:", prediction[0])

The model returns the predicted class.


26. Complete Iris Workflow

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

accuracy = model.score(X_test, y_test)

print("Test accuracy:", accuracy)

Output

A numerical test accuracy is displayed.

The exact value can depend on the algorithm configuration and data split.


27. The scikit-learn Workflow

The complete beginner workflow is:

Load Dataset
↓
Separate Features and Target
↓
Split Data
↓
Create Estimator
↓
Fit Model
↓
Predict
↓
Evaluate


28. Why Evaluation Must Use Unseen Data

A model can appear highly successful when evaluated on examples it already saw during training.

This does not tell us whether the model will work on new examples.

The source emphasizes this point when introducing training and test data in the Iris example. :contentReference[oaicite:21]{index=21}


29. Model Parameters

Different estimators have parameters that control their behaviour.

For k-nearest neighbors:

Python

model = KNeighborsClassifier(n_neighbors=3)

Here:

n_neighbors = 3

This controls the number of nearby examples considered for classification.

Different algorithms have different parameters.


30. Scikit-learn Documentation

scikit-learn provides documentation for its algorithms and their parameters.

When learning an estimator, study:

What problem does it solve?

What data does it expect?

How does it learn?

What parameters can be configured?

How are predictions generated?

How is performance evaluated?

The source specifically recommends using the scikit-learn user guide and API documentation for additional details. :contentReference[oaicite:22]{index=22}


31. Practical Experiment

Use the Iris dataset.

Load the dataset.

Print the shape of X and y.

Split the data.

Create a KNeighborsClassifier.

Train it.

Predict the test data.

Calculate the test score.

Then change:

n_neighbors = 1

n_neighbors = 3

n_neighbors = 5

Compare the resulting performance.


Common Mistakes

Training the model before separating the test data

Passing target values as features

Using the wrong input shape

Forgetting to call fit before predict

Evaluating only on training examples

Misinterpreting class labels as continuous numbers

Changing model parameters without understanding their purpose


Practice

Build an Iris classifier using scikit-learn.

Print:

Number of samples

Number of features

Feature names

Target names

Training size

Test size

Test accuracy

Then predict the class of one new flower measurement.


Quick Check

Question

What are the two most important operations in the basic scikit-learn workflow?

Answer

The fit method is used to train the estimator, and the predict method is used to generate predictions for new input data.


Summary

scikit-learn is a major Python library for machine learning.

It provides many algorithms through a consistent interface.

X commonly represents feature data.

y commonly represents target data.

fit is used for training.

predict is used for prediction.

Models should be evaluated on data that was not used during training.

The Iris dataset provides a simple first example of a complete classification workflow.


Extended Study

A scikit-learn estimator can be viewed as a transformation from training data into a trained model.

The general pattern is:

X_train + y_train
↓
fit()
↓
Trained Estimator

Then:

X_new
↓
predict()
↓
Prediction

The interface remains similar across many algorithms, which makes scikit-learn especially useful for learning machine learning concepts.

The model itself is only one component of the complete process.

Reliable machine learning also requires:

Problem Definition

Data Preparation

Feature Representation

Training

Evaluation

Interpretation

Deployment


Reflection

Think about the Iris example.

Why is it important to separate training and test data?

What would happen if the model were evaluated using the same flowers it had already used for training?

Why is the fit and predict pattern useful when working with different machine learning algorithms?
`
};

export default lesson14;