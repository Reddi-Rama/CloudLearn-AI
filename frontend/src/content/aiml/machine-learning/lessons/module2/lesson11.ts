const lesson11 = {

  id: "lesson11",

  title: "Logistic Regression",

  content: `

Lesson 11

Logistic Regression


Logistic Regression is one of the most important algorithms for classification.

Despite its name, Logistic Regression is primarily used for predicting categorical outcomes.

It is especially useful for:


Binary Classification


and can also be extended to:


Multiclass Classification.


The central idea is to combine input features linearly and then transform the result into a value that can be interpreted as a probability.



1. What Is Logistic Regression?


Logistic Regression is a supervised learning algorithm used to predict the probability of a class.


For binary classification, the target can be represented as:


0


or:


1


Examples include:


Spam / Not Spam


Fraud / Not Fraud


Pass / Fail


Disease / No Disease


Purchase / No Purchase



2. Why Not Use Linear Regression?


Suppose we use linear regression for a binary target.


The model could produce:


-0.4


0.7


1.3


2.5


But probabilities should normally lie between:


0 and 1.


Linear regression does not naturally constrain predictions to this interval.


Logistic Regression solves this problem using a special function.



3. The Sigmoid Function


The central function in Logistic Regression is the:


Sigmoid Function.


It is defined as:


σ(z) = 1 / (1 + e⁻ᶻ)


The sigmoid function converts any real-valued input into a value between:


0 and 1.



4. Shape of the Sigmoid Function


When:


z → -∞


the sigmoid approaches:


0.


When:


z = 0


the sigmoid is:


0.5.


When:


z → +∞


the sigmoid approaches:


1.


Conceptually:


Probability


1 |                 ______
  |              __/
  |           __/
0.5|---------/
  |       _/
  |    __/
0 |___/________________→ z



5. Linear Score


Before applying the sigmoid function, Logistic Regression calculates a linear score.


The score is:


z = w₁x₁ + w₂x₂ + ... + wₚxₚ + b


Then:


p = σ(z)


Therefore:


p = 1 / (1 + e⁻ᶻ)



6. Interpreting the Probability


Suppose the model produces:


p = 0.82


This means the model estimates a probability of approximately:


82%


for the modeled positive class.


A classification threshold can then be used to convert the probability into a class.



7. Classification Threshold


A common threshold is:


0.5


For example:


If p ≥ 0.5:


Predict class 1.


If p < 0.5:


Predict class 0.


The threshold does not have to be 0.5 in every application.



8. Example


Suppose:


p = 0.78


Using a threshold of:


0.5


we predict:


Class 1.


Suppose:


p = 0.31


Then:


Class 0.



9. Why Threshold Choice Matters


Suppose a fraud detection system produces:


Fraud Probability = 0.42.


If the threshold is:


0.5


the model predicts:


Not Fraud.


If the threshold is:


0.3


the model predicts:


Fraud.


Therefore, changing the threshold changes the classification behaviour.



10. Binary Logistic Regression


For binary classification:


y ∈ {0, 1}


The model estimates:


P(y = 1 | x)


using the sigmoid function.


The decision rule can be written as:


ŷ = 1 if p ≥ threshold


otherwise:


ŷ = 0.



11. Odds


Probability can be related to odds.


Odds are:


p / (1-p)


For example, if:


p = 0.8


then:


Odds = 0.8 / 0.2


= 4.


The odds are:


4 to 1.



12. Log-Odds


The logarithm of the odds is called:


Logit.


The relationship is:


log(p / (1-p)) = z


where:


z = w₁x₁ + ... + wₚxₚ + b.


Therefore, Logistic Regression assumes that the log-odds are a linear function of the input features.



13. Logistic Regression Example


Suppose we want to predict whether a student passes.


Features:


Study Hours


Attendance


The model learns:


z = w₁(Study Hours) + w₂(Attendance) + b


Then:


p = σ(z)


The probability is converted into:


Pass


or:


Fail.



14. Python Example: Logistic Regression


Python


from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression


data = load_breast_cancer()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


model = LogisticRegression(
    max_iter=5000
)


model.fit(
    X_train,
    y_train
)


accuracy = model.score(
    X_test,
    y_test
)


print("Test accuracy:", accuracy)


Output


Test accuracy:


A value between 0 and 1 determined by the dataset split and fitted model.



15. Understanding the Code


The Breast Cancer dataset contains numerical features and a binary target.


The data is divided into training and test sets.


LogisticRegression is created.


The model learns its coefficients using:


model.fit()


Predictions can then be generated for unseen observations.



16. Making Predictions


Python


predictions = model.predict(
    X_test
)


print(
    "First 10 predictions:",
    predictions[:10]
)


Output


First 10 predictions:


The output contains predicted class labels.



17. Predicting Probabilities


Logistic Regression can also produce probabilities.


Python


probabilities = model.predict_proba(
    X_test
)


print(
    probabilities[:5]
)


Output


Each row contains the estimated probability for each class.



18. Understanding predict_proba


Suppose one observation produces:


[0.12, 0.88]


This means the model estimates:


Class 0 probability = 0.12


Class 1 probability = 0.88


The predicted class would normally be:


Class 1.



19. Logistic Regression and Feature Scaling


Scaling is often useful for Logistic Regression, particularly when features have very different ranges and regularization is being used.


Python


from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler


model = make_pipeline(
    StandardScaler(),
    LogisticRegression(
        max_iter=5000
    )
)


model.fit(
    X_train,
    y_train
)


print(
    "Test accuracy:",
    model.score(
        X_test,
        y_test
    )
)


Output


Test accuracy:


A value determined by the fitted model.



20. Why Use a Pipeline?


The pipeline combines:


StandardScaler


and:


LogisticRegression.


The scaler is fitted using training data.


The same transformation is then applied to test data.


This helps prevent preprocessing leakage.



21. Logistic Regression Coefficients


The model learns coefficients:


w₁, w₂, ..., wₚ.


Each coefficient influences the linear score:


z.


A positive coefficient increases the score as the corresponding feature increases, while a negative coefficient decreases it, holding other features fixed.



22. Coefficient Interpretation


Suppose:


z = 2x₁ - 1.5x₂ + 0.3x₃ + b.


Then:


x₁ has a positive coefficient.


x₂ has a negative coefficient.


x₃ has a smaller positive coefficient.


The exact practical interpretation depends on feature units, scaling, correlations, and the modeling context.



23. Regularization


Logistic Regression implementations commonly use regularization.


Regularization helps control coefficient magnitude and can reduce overfitting.


The strength of regularization is controlled through model parameters such as:


C


In scikit-learn.



24. Understanding C


In scikit-learn LogisticRegression:


C


is the inverse of regularization strength.


Smaller C:


Stronger regularization.


Larger C:


Weaker regularization.


The best value should be selected using validation or cross-validation.



25. Python Experiment: Different C Values


Python


from sklearn.model_selection import cross_val_score


for C in [0.01, 0.1, 1, 10, 100]:

    model = make_pipeline(
        StandardScaler(),
        LogisticRegression(
            C=C,
            max_iter=5000
        )
    )

    scores = cross_val_score(
        model,
        X,
        y,
        cv=5
    )

    print(
        "C:",
        C,
        "Mean CV Accuracy:",
        scores.mean()
    )


Output


The exact values depend on the dataset and software environment.



26. Logistic Regression for Multiclass Classification


Logistic Regression can also be used for multiclass classification.


For example:


Iris


contains:


Setosa


Versicolor


Virginica.


scikit-learn can handle multiclass classification using supported strategies internally.



27. Python Example: Multiclass Logistic Regression


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression


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


model = LogisticRegression(
    max_iter=1000
)


model.fit(
    X_train,
    y_train
)


print(
    "Test accuracy:",
    model.score(
        X_test,
        y_test
    )
)


Output


Test accuracy:


A value determined by the fitted model and data split.



28. Confusion Matrix


Classification should not always be evaluated using accuracy alone.


Python


from sklearn.metrics import confusion_matrix


predictions = model.predict(
    X_test
)


cm = confusion_matrix(
    y_test,
    predictions
)


print(cm)


Output


The confusion matrix shows how observations from each actual class were classified.



29. Classification Report


Python


from sklearn.metrics import classification_report


print(
    classification_report(
        y_test,
        predictions
    )
)


Output


The report contains:


Precision


Recall


F1 Score


Support



30. Advantages of Logistic Regression


Advantages include:


Simple.


Fast.


Easy to train.


Provides probabilities.


Works well as a baseline classifier.


Coefficients can be inspected.


Works well when the decision relationship is approximately linear in feature space.



31. Limitations


Limitations include:


May struggle with strongly nonlinear decision boundaries.


Can be affected by irrelevant features.


Coefficient interpretation becomes difficult with correlated variables.


Performance depends on feature representation.


Strongly complex relationships may require nonlinear models.



32. Logistic Regression vs Linear Regression


Linear Regression:


Predicts numerical values.


Output is not naturally restricted to 0 and 1.


Usually trained using squared-error objectives.


Logistic Regression:


Predicts class probabilities.


Uses a sigmoid or multiclass extension.


Uses a classification-oriented likelihood/loss objective.



33. Experiment


Use the Breast Cancer dataset.


Train Logistic Regression.


Calculate:


Accuracy


Precision


Recall


F1 Score


Confusion Matrix.


Then interpret each metric.



34. Experiment: Threshold


Use:


predict_proba()


to obtain probabilities.


Try thresholds:


0.3


0.4


0.5


0.6


0.7


For each threshold, calculate:


Precision


Recall


F1


Observe how changing the threshold affects the classification results.



35. Common Mistakes


Mistake 1:


Calling Logistic Regression a regression algorithm for numerical prediction.


It is primarily a classification algorithm.


Mistake 2:


Assuming 0.5 must always be the best threshold.


Mistake 3:


Ignoring feature scaling when appropriate.


Mistake 4:


Using only accuracy on an imbalanced dataset.


Mistake 5:


Choosing C using the test set.


Mistake 6:


Interpreting coefficients without considering feature scaling and correlations.



36. Practice


1. What is Logistic Regression?


2. Why is the sigmoid function used?


3. What range does the sigmoid produce?


4. What is a classification threshold?


5. What does predict_proba return?


6. What does C control in scikit-learn?


7. What happens when C becomes smaller?


8. Can Logistic Regression handle multiclass classification?


9. Why is scaling sometimes useful?


10. What is the difference between Linear and Logistic Regression?



37. Quick Check


Question 1


What does Logistic Regression predict?


Answer


It predicts class probabilities and can be used to classify observations.


Question 2


What is the sigmoid function?


Answer


It is a function that maps a real-valued score into a value between 0 and 1.


Question 3


What happens when probability exceeds the chosen threshold?


Answer


The corresponding positive class is predicted.


Question 4


What does C represent in scikit-learn?


Answer


C is the inverse of regularization strength.


Question 5


Can Logistic Regression produce probabilities?


Answer


Yes, using predict_proba when supported by the classifier.



38. Summary


Logistic Regression is a supervised classification algorithm.


It commonly handles binary classification.


The sigmoid function converts a linear score into a value between 0 and 1.


The resulting probability can be converted into a class using a threshold.


Logistic Regression can also handle multiclass problems.


Regularization controls model complexity.


In scikit-learn, C controls the inverse regularization strength.


Accuracy, precision, recall, F1, and confusion matrices can evaluate classification performance.



39. Extended Study


For binary Logistic Regression:


z = wᵀx + b


The probability is:


p = σ(z)


where:


σ(z) = 1 / (1 + e⁻ᶻ).


The model can be trained by maximizing the likelihood of the observed labels or equivalently minimizing the negative log-likelihood.


For one observation, the binary cross-entropy loss can be written as:


L = -[y log(p) + (1-y)log(1-p)].


This loss strongly penalizes confident incorrect predictions.



40. Reflection


Consider a binary classification problem.


Ask:


What are the two classes?


What features are available?


Would a linear decision boundary be appropriate?


Do probabilities matter?


What threshold should be used?


Which errors are more costly?


Would regularization help?


Which evaluation metrics should be reported?


Thinking about these questions helps turn Logistic Regression into a practical classification tool.

`

};

export default lesson11;