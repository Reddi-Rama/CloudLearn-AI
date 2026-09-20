const lesson1 = {

  id: "lesson1",

  title: "Introduction to Supervised Learning",

  content: `

Lesson 01

Introduction to Supervised Learning


Supervised learning is one of the most important areas of machine learning.

In supervised learning, a machine learning system learns from examples where the desired output is already known.

Instead of giving the computer a collection of manually written rules, we provide examples containing inputs and their corresponding outputs.

The learning algorithm studies these examples and attempts to discover a useful relationship between them.


A useful way to think about supervised learning is:


Input Data + Known Output → Learning Algorithm → Model


After training:


New Input + Trained Model → Prediction


The central idea is that the model should learn a relationship that remains useful when it receives new data that was not present in the training examples.



1. What Is Supervised Learning?


Supervised learning is a machine learning approach in which an algorithm learns from labelled examples.


A labelled example contains:


Input


and


Known Desired Output


For example, suppose we want to build a system that predicts whether an email is spam.


We may provide examples such as:


Email A → Spam


Email B → Not Spam


Email C → Spam


Email D → Not Spam


The algorithm examines these examples and attempts to learn patterns that distinguish the two categories.


Later, when a new email is provided:


New Email → Model → Prediction


The model may produce:


Spam


or


Not Spam


The important point is that the model learned from previously labelled examples.



2. Why Is It Called "Supervised" Learning?


The word supervised refers to the presence of known answers during training.


The training data provides the algorithm with:


Input → Correct Output


The algorithm can compare its predictions with the known outputs and adjust its internal parameters during learning.


This is different from unsupervised learning, where the training data does not provide a predefined target for every example.


The basic structure of supervised learning is:


Training Examples

↓

Inputs

+

Known Targets

↓

Learning Algorithm

↓

Trained Model


The known targets provide the supervision.



3. Training Data


Training data is the collection of examples used to teach a machine learning model.


Suppose we want to predict whether a student will pass an examination.


Our dataset might contain:


| Study Hours | Attendance | Previous Score | Result |
|-------------|------------|----------------|--------|
| 2 | 70 | 55 | Fail |
| 3 | 78 | 61 | Pass |
| 5 | 88 | 75 | Pass |
| 1 | 60 | 48 | Fail |
| 6 | 92 | 82 | Pass |


Each row represents one training example.


The columns before the result represent input features.


The Result column represents the target.


The algorithm uses many such examples to learn a relationship between the features and the target.



4. Samples


A sample is one individual observation in a dataset.


For example:


| Study Hours | Attendance | Previous Score | Result |
|-------------|------------|----------------|--------|
| 5 | 88 | 75 | Pass |


This row represents one sample.


A dataset can contain:


10 samples


100 samples


1,000 samples


100,000 samples


or millions of samples.


The number of samples can influence how much information a model has available for learning.


However, more data is not automatically better.


The data should also be relevant, representative, and of sufficient quality.



5. Features


A feature is an input variable that describes some property of a sample.


For the student-performance example, possible features include:


Study Hours


Attendance


Previous Score


Assignments Completed


Questions Attempted


For a house-price prediction problem, features might include:


Area


Number of Bedrooms


Number of Bathrooms


Age of the Property


Location-related information


For a transaction:


Transaction Amount


Transaction Time


Merchant Type


Payment Method


The features provide the information from which the model attempts to make a prediction.



6. Targets


The target is the desired output that the model is expected to learn to predict.


For example:


Study Hours + Attendance + Previous Score → Final Result


Here:


Study Hours = Feature


Attendance = Feature


Previous Score = Feature


Final Result = Target


In another problem:


House Features → House Price


The target is:


House Price


In classification:


Customer Information → Purchase / No Purchase


The target is:


Purchase / No Purchase


The target therefore depends on the problem being solved.



7. Feature Matrix and Target Vector


In machine learning, input data is commonly represented using a feature matrix.


Suppose we have:


| Study Hours | Attendance | Previous Score |
|-------------|------------|----------------|
| 2 | 70 | 55 |
| 3 | 78 | 61 |
| 5 | 88 | 75 |
| 1 | 60 | 48 |
| 6 | 92 | 82 |


The feature matrix can be represented as:


X


Each row corresponds to one sample.


Each column corresponds to one feature.


The target values can be represented as:


y


For example:


y = [Fail, Pass, Pass, Fail, Pass]


A simplified representation is:


X → Input Features


y → Target


The model attempts to learn a relationship between X and y.



8. Supervised Learning as Function Learning


A supervised learning problem can be viewed as learning an unknown function.


Suppose the true relationship is:


y = f(x)


The machine learning algorithm does not usually know the exact function f.


Instead, it receives examples:


(x₁, y₁)


(x₂, y₂)


(x₃, y₃)


...


(xₙ, yₙ)


The learning algorithm attempts to construct an approximation:


ŷ = fθ(x)


Here:


x = input


y = actual target


ŷ = predicted target


fθ = learned model


θ = model parameters


The parameters are learned from the available training examples.



9. Training a Model


Training is the process through which the algorithm learns the parameters of a model.


The general process is:


Training Data

↓

Feature Representation

↓

Learning Algorithm

↓

Parameter Estimation

↓

Trained Model


For example, suppose a model predicts examination scores from study hours.


The training data may contain:


Study Hours → Score


1 → 48


2 → 56


3 → 64


4 → 72


5 → 81


The algorithm studies these examples and attempts to identify a relationship.


When a new value is provided:


Study Hours = 6


The model can produce a prediction.


The model does not simply memorize the value 6.


It attempts to generalize the relationship learned from the examples.



10. Prediction


Once a model has been trained, it can be used to make predictions.


The general process is:


New Input


↓


Trained Model


↓


Prediction


For example:


New Customer Data


↓


Purchase Prediction Model


↓


Likely to Purchase


The prediction is an estimate produced by the model.


It is not automatically guaranteed to be correct.



11. Classification Problems


Classification is a supervised learning problem where the target represents a category or class.


Examples include:


Spam Detection


Input:


Email information


Output:


Spam


or


Not Spam


Fraud Detection


Input:


Transaction information


Output:


Fraudulent


or


Legitimate


Image Classification


Input:


Image


Output:


Predicted Class


Classification can involve two classes or many classes.



12. Binary Classification


Binary classification contains two possible classes.


Examples:


Spam / Not Spam


Pass / Fail


Fraud / Legitimate


Disease / No Disease


Purchase / No Purchase


The model attempts to learn a decision boundary that separates the classes.


Conceptually:


Input Features

↓

Model

↓

Class 0 or Class 1


The actual model used can vary depending on the data and requirements.



13. Multiclass Classification


Multiclass classification contains more than two possible classes.


For example, consider handwritten digit recognition.


The possible outputs are:


0


1


2


3


4


5


6


7


8


9


The model receives an image as input and predicts one of the available classes.


Another example is flower classification:


Setosa


Versicolor


Virginica


The target contains more than two possible categories.



14. Regression Problems


Regression is another major type of supervised learning.


In regression, the target is usually a continuous numerical value.


Examples include:


House Price Prediction


Input:


House features


Output:


Predicted price


Temperature Prediction


Input:


Weather-related information


Output:


Predicted temperature


Student Score Prediction


Input:


Study-related information


Output:


Predicted score


Demand Prediction


Input:


Historical sales information


Output:


Predicted demand


The output is a numerical value rather than a discrete category.



15. Classification vs Regression


The basic distinction is:


Classification


Predicts categories.


Regression


Predicts numerical values.


For example:


Email → Spam / Not Spam


This is classification.


House → ₹75,00,000


This is regression.


Student → 82.5


This is regression.


Disease → Positive / Negative


This is classification.


Choosing the correct problem type is an important part of designing a machine learning system.



16. The Complete Supervised Learning Process


A supervised learning system can be represented as:


Problem Definition

↓

Data Collection

↓

Feature Identification

↓

Target Definition

↓

Data Preparation

↓

Training/Test Split

↓

Model Training

↓

Prediction

↓

Evaluation

↓

Improvement


Each stage is important.


A machine learning project is not simply:


Choose Algorithm → Train Model


The quality of the complete workflow matters.



17. Problem Definition


Before selecting a model, we should clearly define the problem.


Ask:


What needs to be predicted?


What information is available?


What should the output represent?


Who will use the prediction?


What happens if the prediction is wrong?


How will success be measured?


For example, instead of saying:


"Build an AI model for students."


A clearer problem could be:


"Predict whether a student is likely to pass the final examination using attendance, study hours, and previous academic performance."



18. Data Collection


After defining the problem, relevant data must be collected.


For student performance, possible data sources could include:


Attendance records


Previous examination scores


Assignment performance


Study hours


Practice test results


The data should represent the population for which predictions will eventually be made.


Poor or biased data can produce unreliable models.



19. Data Preparation


Raw data is rarely ready for direct model training.


Preparation may involve:


Handling missing values


Removing duplicate records


Correcting inconsistent values


Encoding categorical variables


Scaling numerical features


Handling unusual observations


Selecting useful features


Separating training and test data


These topics become increasingly important throughout the machine learning course.



20. Training and Test Data


The available dataset is commonly divided into separate portions.


A simplified structure is:


Complete Dataset

↓

Training Data + Test Data


Training data is used to learn the model.


Test data is reserved for evaluating the final approach on unseen examples.


For example:


80% → Training


20% → Testing


The exact split can vary depending on the dataset and project requirements.



21. Why Not Train on Everything?


Suppose a model is trained and evaluated on exactly the same examples.


The model has already seen those examples.


Therefore, a high training score does not necessarily mean that the model will perform well on new data.


The purpose of a separate test set is to provide evidence about generalization.


The key question is:


Can the model make useful predictions on examples it has not previously seen?



22. Generalization


Generalization is the ability of a model to perform well on new observations.


A good supervised learning model should not simply memorize the training examples.


Instead, it should learn patterns that are useful beyond those examples.


Conceptually:


Training Examples

↓

Learn General Pattern

↓

New Examples

↓

Useful Predictions


Generalization is one of the central ideas in machine learning.



23. Overfitting


Overfitting occurs when a model becomes too closely adapted to the training data.


A simplified pattern is:


Training Performance → Very High


Test Performance → Much Lower


The model may have learned noise or unusual details that do not generalize.


Overfitting becomes an important topic when studying model complexity.



24. Underfitting


Underfitting occurs when a model is too simple to capture important patterns in the data.


A simplified pattern is:


Training Performance → Low


Test Performance → Low


The model has not learned enough useful structure.


Therefore, machine learning involves finding an appropriate balance between model simplicity and model flexibility.



25. Mathematical View


A supervised learning dataset can be represented as:


D = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}


Each pair contains:


xᵢ → Input


yᵢ → Known Target


The learning algorithm attempts to construct:


ŷ = fθ(x)


where:


ŷ = Prediction


fθ = Learned function


θ = Parameters of the model


During training, the algorithm adjusts θ using the available examples.



26. Loss and Prediction Error


A model's prediction can differ from the actual target.


For example:


Actual Score = 80


Predicted Score = 75


The prediction error is:


80 - 75 = 5


Machine learning algorithms use objective or loss functions to quantify prediction error.


A simplified regression loss is mean squared error:


MSE = (1/n) Σ(yᵢ - ŷᵢ)²


Here:


yᵢ = Actual value


ŷᵢ = Predicted value


n = Number of examples


The training process attempts to find model parameters that produce useful predictions according to the chosen objective.



27. Python Example: A Simple Supervised Learning Problem


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
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


model = KNeighborsClassifier(n_neighbors=5)


model.fit(X_train, y_train)


predictions = model.predict(X_test)


print("First predictions:", predictions[:5])


print("Actual values:", y_test[:5])


print("Test accuracy:", model.score(X_test, y_test))


Output


First predictions: [1 0 2 1 1]


Actual values: [1 0 2 1 1]


Test accuracy: 0.9736842105263158


The exact prediction values depend on the dataset, split, and model configuration.



28. Understanding the Python Code


The first step is:


from sklearn.datasets import load_iris


This imports the Iris dataset.


Next:


iris = load_iris()


loads the dataset.


The feature matrix is:


X = iris.data


The target is:


y = iris.target


The dataset is then divided:


X_train, X_test, y_train, y_test = train_test_split(...)


The training data is used to fit the model.


The test data remains unseen during training.


Next:


model = KNeighborsClassifier(n_neighbors=5)


creates a k-Nearest Neighbors classification model.


The model is trained using:


model.fit(X_train, y_train)


Predictions are generated using:


model.predict(X_test)


Finally:


model.score(X_test, y_test)


calculates the model's test accuracy for this classifier.



29. Understanding Accuracy


For classification, accuracy is commonly defined as:


Accuracy = Correct Predictions / Total Predictions


Suppose a model correctly predicts:


95


out of:


100


examples.


Then:


Accuracy = 95 / 100


Accuracy = 0.95


or:


95%


Accuracy is useful, but it is not the only evaluation metric.


For some problems, precision, recall, F1-score, ROC-AUC, or other measures may be more appropriate.



30. Real-World Example: Spam Detection


Consider a spam detection system.


Training examples:


Email 1 → Spam


Email 2 → Not Spam


Email 3 → Spam


Email 4 → Not Spam


The model may use features such as:


Number of suspicious words


Message length


Presence of links


Sender information


Previous interactions


The model learns patterns associated with the labelled examples.


A new email is then provided:


New Email → Model → Prediction


The prediction could be:


Spam


or:


Not Spam


The system can then use the prediction as one part of a larger email-processing system.



31. Real-World Example: House Price Prediction


Suppose we want to predict the price of a house.


Possible features:


Area


Number of bedrooms


Number of bathrooms


Age


Location-related variables


Historical examples could look like:


| Area | Bedrooms | Age | Price |
|------|----------|-----|-------|
| 900 | 2 | 10 | 45 |
| 1200 | 3 | 7 | 62 |
| 1500 | 3 | 5 | 78 |
| 2000 | 4 | 3 | 105 |


The features are:


Area


Bedrooms


Age


The target is:


Price


Because the target is numerical, this is a regression problem.



32. Real-World Example: Fraud Detection


A financial institution may want to predict whether a transaction is fraudulent.


Possible features:


Transaction amount


Transaction time


Merchant category


Location


Device information


Previous transaction behaviour


Target:


Fraudulent


or:


Legitimate


This is a classification problem.


The consequences of incorrect predictions can be important, so model evaluation must consider more than a single accuracy value.



33. Real-World Example: Medical Classification


A medical system may use patient information or medical images to predict a category.


Input:


Patient or image features


Target:


Predicted category


For example:


Positive


or:


Negative


A machine learning system should not be treated as automatically correct.


The quality of the training data, validation process, model, and deployment environment all matter.



34. Experiment


Create your own small supervised learning experiment.


Choose one problem:


Spam Detection


Student Performance Prediction


House Price Prediction


Fraud Detection


Customer Purchase Prediction


For your chosen problem, identify:


1. Input


2. Features


3. Target


4. Training examples


5. New input


6. Prediction


7. Evaluation metric


Write the complete process as:


Data → Features → Target → Model → Prediction → Evaluation



35. Experiment: Change the Training/Test Split


Using the Iris example, change:


test_size=0.25


to:


test_size=0.20


Then:


test_size=0.30


Compare:


Training samples


Test samples


Test accuracy


Do not assume that a small change in one score automatically means one model is universally better.


The purpose of the experiment is to understand how the evaluation setup affects the observed result.



36. Common Mistakes


Mistake 1:


Calling every automated system machine learning.


Not every automated program uses machine learning.


Mistake 2:


Training and testing on exactly the same examples.


This can provide an overly optimistic estimate.


Mistake 3:


Choosing an algorithm before understanding the problem.


The problem should be defined first.


Mistake 4:


Ignoring the target definition.


A poorly defined target leads to an unclear learning task.


Mistake 5:


Using irrelevant features.


Features should contain information that can reasonably support the prediction task.


Mistake 6:


Assuming a prediction is guaranteed to be correct.


Machine learning models produce predictions, not certainty.


Mistake 7:


Ignoring data quality.


Poor data can lead to poor models.


Mistake 8:


Ignoring the difference between classification and regression.


The target type influences the algorithms and evaluation methods that are appropriate.



37. Practice


Choose one of the following:


Spam Detection


House Price Prediction


Student Performance Prediction


Fraud Detection


Customer Churn Prediction


For your selected problem, answer:


1. What is the input?


2. What are the features?


3. What is the target?


4. Is it classification or regression?


5. What training examples would be required?


6. What would a new input look like?


7. What would the model predict?


8. How would you evaluate the model?



38. Quick Check


Question 1


What makes a learning problem supervised?


Answer


The training examples contain inputs together with known desired outputs or targets.


Question 2


What is a feature?


Answer


A feature is an input variable that describes some property of a sample.


Question 3


What is a target?


Answer


A target is the desired output that the model is trained to predict.


Question 4


What is the difference between classification and regression?


Answer


Classification predicts categories, while regression predicts numerical values.


Question 5


Why is a test set useful?


Answer


It provides evidence about how the trained approach performs on previously unseen examples.



39. Summary


Supervised learning learns from labelled examples.


Each training example contains an input and a known target.


Features describe the input data.


The target represents the desired output.


Classification predicts categories.


Regression predicts numerical values.


Training data is used to learn the model.


Test data is used to evaluate behaviour on unseen examples.


Generalization is the ability to perform well on new data.


Overfitting occurs when a model becomes too closely adapted to training data.


Underfitting occurs when a model is too simple to capture useful patterns.


A machine learning project includes much more than choosing an algorithm.


Problem definition, data quality, feature representation, training, evaluation, and deployment all matter.



40. Extended Study


A supervised learning problem can be viewed as learning a mapping:


f: X → Y


where:


X represents the space of possible inputs.


Y represents the space of possible outputs.


For a training dataset:


D = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}


the learning algorithm attempts to find a parameterized function:


fθ(x)


that produces useful predictions.


The prediction is:


ŷ = fθ(x)


The model parameters θ are estimated using the available training examples.


The objective is not simply to reproduce the training targets.


Instead, the model should learn a relationship that generalizes to new observations.


This idea of generalization is one of the foundations of machine learning and becomes increasingly important when studying model complexity, regularization, cross-validation, and model evaluation.



41. Reflection


Think about a real problem that you would like to solve using machine learning.


Ask yourself:


What exactly needs to be predicted?


What data would be available?


Which values would become features?


What would the target represent?


How would labelled examples be created?


How would the model be evaluated?


What would happen if the training data did not represent future data?


Could a simple rule solve the problem instead?


If not, why might learning from examples be useful?


These questions form the foundation for designing practical supervised machine learning systems.

`

};

export default lesson1;