const lesson3 = {

  id: "lesson3",

  title: "Generalization",

  content: `

Lesson 03

Generalization


A machine learning model is not useful simply because it can reproduce the examples that it was trained on.


The more important question is:


Can the model make useful predictions when it receives new data?


This ability is called:


Generalization


Generalization is one of the most important concepts in machine learning.


A model that generalizes well can learn useful patterns from training data and apply those patterns to previously unseen observations.



1. What Is Generalization?


Generalization refers to how well a trained machine learning model performs on new data that was not used during training.


Suppose we train a model using:


Training Examples


A


B


C


D


After training, we provide:


New Example E


The model should be able to make a useful prediction for E.


Conceptually:


Training Data


↓


Learning


↓


Model


↓


New Data


↓


Prediction


If the model performs well on new data, we say that it generalizes well.



2. Why Is Generalization Important?


Imagine a student preparing for an examination.


Suppose the student memorizes the exact answers to ten questions.


If the examination contains exactly those ten questions, the student may perform well.


But if the examination contains new questions that require understanding, memorization may not be sufficient.


Machine learning can face a similar problem.


A model may memorize specific characteristics of the training examples without learning the underlying pattern.


The purpose of machine learning is therefore not:


"Memorize the training data."


The goal is:


"Learn patterns that remain useful for new data."



3. Training Data and Unseen Data


Suppose a dataset contains:


1,000 samples.


We may divide it into:


800 training samples


and


200 test samples.


The model learns from the 800 training examples.


The 200 test examples are not used during the initial fitting process.


The workflow is:


Complete Dataset


↓


Training Set + Test Set


↓


Training Set → Model


↓


Test Set → Evaluation


This allows us to estimate how the trained model behaves on unseen examples.



4. Training Performance


Training performance measures how well the model performs on the examples it used during learning.


For classification, we might calculate:


Training Accuracy


For regression, we might calculate:


Training MAE


Training MSE


Training R²


A high training score means that the model fits the training data well.


However:


High Training Performance ≠ Guaranteed Generalization



5. Test Performance


Test performance measures how well the trained model performs on examples that were not used during training.


For example:


Training Accuracy = 99%


Test Accuracy = 94%


The difference suggests that the model performs slightly better on training data than on unseen data.


This difference is not automatically a problem.


Some difference between training and test performance is normal.


The important question is whether the model generalizes sufficiently for the application.



6. Generalization Gap


The difference between training and test performance can be called a generalization gap.


For example:


Training Accuracy = 98%


Test Accuracy = 90%


The gap is:


98% - 90% = 8 percentage points


A large gap can indicate that the model is fitting training-specific patterns too strongly.


However, the meaning of the gap depends on:


Dataset size


Noise


Model complexity


Data distribution


Evaluation metric


Application requirements



7. A Simple Example


Suppose we train three models.


Model A:


Training Accuracy = 75%


Test Accuracy = 73%


Model B:


Training Accuracy = 99%


Test Accuracy = 90%


Model C:


Training Accuracy = 100%


Test Accuracy = 65%


Model A has a small gap.


Model B has a larger gap.


Model C has a very large gap.


The third model may have learned training-specific details that do not transfer well to unseen data.


This is a typical motivation for studying overfitting.



8. Generalization and Learning Patterns


Suppose we have the following observations:


| Study Hours | Score |
|-------------|-------|
| 1 | 48 |
| 2 | 56 |
| 3 | 64 |
| 4 | 72 |
| 5 | 81 |


A model could learn:


More study hours are generally associated with higher scores.


That relationship may be useful for predicting a new student.


For example:


Study Hours = 6


The model may predict:


Score ≈ 89


The exact prediction depends on the chosen model.



9. Memorization vs Generalization


Consider a dataset containing:


Student A


Student B


Student C


Student D


Suppose the model simply memorizes each student's training score.


It may perform perfectly on those students.


But if a new student appears:


Student E


The model may not know what to do.


A generalizing model instead learns relationships between useful features and the target.


For example:


Study Hours


Attendance


Previous Score


Assignments


The model attempts to use these features to predict outcomes for new students.



10. The Role of Features


Generalization depends partly on the quality of the information supplied to the model.


Suppose we want to predict house prices.


If the only feature is:


House Owner Name


there may be little useful information for predicting price.


A better feature set could include:


Area


Number of Bedrooms


Location


Age


Number of Bathrooms


The model can only learn relationships that are represented in its input data.



11. Training Data Distribution


Generalization also depends on whether training data resembles the data encountered later.


Suppose a model is trained using images captured in bright daylight.


If the model is later used mostly on dark nighttime images, performance may decrease.


The training data and future data may have different distributions.


Conceptually:


Training Distribution


P_train(x)


and


Future Distribution


P_test(x)


Ideally, the evaluation data should provide a meaningful representation of the situations in which the model will eventually be used.



12. Representative Data


Representative data contains examples that reasonably reflect the population or situations where the model will operate.


For a student-performance model, representative data might include students with:


Different study habits


Different attendance levels


Different academic backgrounds


Different learning environments


If the training dataset contains only one narrow group, the model may not generalize to other groups.



13. Generalization and Data Quantity


The number of training examples can influence generalization.


Suppose we have:


10 training examples.


The model has limited evidence.


Now suppose we have:


10,000 relevant examples.


The model has substantially more information from which to learn.


However, quantity alone does not guarantee generalization.


Poor-quality or irrelevant data can remain problematic even when the dataset is large.



14. Generalization and Noise


Real-world datasets often contain noise.


Noise can come from:


Measurement errors


Incorrect labels


Data-entry mistakes


Sensor errors


Random variation


Suppose the actual relationship is approximately:


Score = 10 × Study Hours + 40


but some observations contain measurement errors.


A flexible model might try to fit every noisy observation.


A more appropriate model may learn the underlying relationship instead.



15. Mathematical View


Suppose the training dataset is:


D_train = {(x₁, y₁), ..., (xₙ, yₙ)}


The model is trained using these examples.


We can represent the learned model as:


fθ


For a new input x:


ŷ = fθ(x)


The important question is how well:


ŷ


approximates the actual:


y


for observations that were not used during training.



16. Expected Prediction Error


Conceptually, machine learning is interested in prediction error on future observations.


A simplified expected error can be written as:


E[(Y - fθ(X))²]


for a squared-error setting.


The training dataset provides only a finite sample from the larger population.


Therefore, a model that minimizes training error does not automatically minimize future prediction error.



17. Empirical Risk


Suppose the loss function is:


L(y, ŷ)


The average loss on training examples can be written as:


R_train(f) = (1/n) Σ L(yᵢ, f(xᵢ))


This is the empirical training risk.


A model can achieve a very small training risk by becoming highly flexible.


But the model we actually want is one that also performs well on unseen examples.



18. Generalization Error


The error on unseen data is often described as generalization error.


Conceptually:


Training Error


↓


Measured on training examples


Generalization Error


↓


Expected performance on new examples


The two quantities can differ.



19. The Importance of a Test Set


A test set provides an independent set of examples for evaluating a trained model.


The process is:


Dataset


↓


Training Set


↓


Train Model


↓


Test Set


↓


Evaluate


The test set should not be repeatedly used to make decisions during model development.


If we repeatedly adjust the model based on test results, the test set can gradually become part of the development process.



20. Validation Data


For more careful model development, data may be divided into:


Training Set


Validation Set


Test Set


The workflow becomes:


Training Set


↓


Train Model


↓


Validation Set


↓


Choose or Tune Model


↓


Final Test Set


↓


Final Evaluation


The validation set helps with model selection and parameter tuning.


The final test set is reserved for an unbiased final estimate of the chosen approach.



21. Cross-Validation


When the dataset is not very large, cross-validation can provide a more efficient way to estimate model performance.


In k-fold cross-validation:


The dataset is divided into k parts.


For each round:


One part → Validation


Remaining parts → Training


This process is repeated so that each part is used for validation.


Conceptually:


Fold 1 → Validation


Fold 2 → Validation


Fold 3 → Validation


...


The results can then be combined.



22. k-Fold Cross-Validation


Suppose:


k = 5


The dataset is divided into five folds.


Round 1:


Fold 1 → Validation


Folds 2-5 → Training


Round 2:


Fold 2 → Validation


Folds 1,3,4,5 → Training


This continues until every fold has served as the validation set.



23. Why Cross-Validation Helps


A single train/test split can sometimes produce a result that depends strongly on which examples happened to be selected.


Cross-validation uses multiple splits.


This can provide a more stable estimate of model performance.


However, cross-validation does not eliminate problems caused by:


Poor data


Data leakage


Non-representative samples


Incorrect evaluation design



24. Python Example: Train/Test Evaluation


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier


data = load_iris()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


model = KNeighborsClassifier(n_neighbors=5)


model.fit(X_train, y_train)


train_score = model.score(X_train, y_train)
test_score = model.score(X_test, y_test)


print("Training accuracy:", train_score)
print("Test accuracy:", test_score)


Output


Training accuracy: 0.9642857142857143


Test accuracy: 1.0


The exact result can depend on the data split and software environment.



25. Understanding the Result


The training accuracy tells us how well the model predicts examples used during fitting.


The test accuracy tells us how well the trained model predicts examples it did not use during fitting.


In this particular split, the test accuracy can be higher than the training accuracy.


This is possible because the test set is only one sample of possible future data.


Therefore, we should not interpret one split as a universal truth.



26. Python Example: Cross-Validation


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsClassifier


data = load_iris()


X = data.data
y = data.target


model = KNeighborsClassifier(n_neighbors=5)


scores = cross_val_score(
    model,
    X,
    y,
    cv=5
)


print("Fold scores:", scores)


print("Mean score:", scores.mean())


Output


Fold scores: [0.96666667 1.         0.93333333 0.96666667 1.        ]


Mean score: 0.9733333333333334


The exact values can depend on the library version and cross-validation configuration.



27. Understanding Cross-Validation Code


The function:


cross_val_score()


performs cross-validation.


The parameter:


cv=5


requests five folds.


The result:


scores


contains the score from each fold.


The mean can be calculated using:


scores.mean()


This provides a summary of performance across the folds.



28. Generalization and Model Complexity


Model complexity refers to how flexible a model is.


A very simple model may not capture enough structure.


A very complex model may fit noise and training-specific details.


Conceptually:


Underly Simple


→


Appropriate Complexity


→


Overly Complex


This leads to the concepts:


Underfitting


and


Overfitting



29. Underfitting and Generalization


Underfitting occurs when the model is too simple to capture important patterns.


For example:


Training Score = 65%


Test Score = 63%


Both scores are relatively low.


The model may need:


More useful features


A more flexible model


Better preprocessing


A different algorithm


or


Better data



30. Overfitting and Generalization


Overfitting occurs when training performance becomes much better than performance on unseen data.


For example:


Training Accuracy = 100%


Test Accuracy = 72%


The large gap suggests that the model may have learned patterns specific to the training examples.



31. A Conceptual Comparison


Model A:


Training = 75%


Test = 73%


Model B:


Training = 96%


Test = 92%


Model C:


Training = 100%


Test = 70%


The third model has the largest generalization gap.


The second model has stronger observed performance on both training and test data in this example.


However, model comparison should consider the evaluation design, data, metric, and application requirements.



32. Generalization and Regularization


Regularization is a technique used to control model complexity.


Instead of minimizing only prediction error, an objective can include a complexity penalty.


Conceptually:


Objective = Prediction Loss + Complexity Penalty


For example, Ridge regression uses:


Loss + α Σwᵢ²


The penalty discourages very large coefficients.


Regularization can therefore help reduce overfitting in appropriate models.



33. Generalization and Feature Selection


Using every available feature is not always beneficial.


Some features may:


Contain noise


Be redundant


Be irrelevant


Be strongly related to data collection artifacts


Feature selection attempts to retain useful information while reducing unnecessary complexity.



34. Generalization and Data Leakage


Data leakage occurs when information that should not be available during training becomes available to the model.


For example:


Suppose a feature is created using the final examination result.


Then the model is given information that directly depends on the target.


The resulting evaluation may appear extremely strong.


But the model would not have access to that information at prediction time.



35. A Simple Leakage Example


Suppose we want to predict:


Loan Default


But one input feature contains:


Final Recovery Status


The recovery status may only become known after the loan default process.


Using it during training would create leakage.


The model may appear highly accurate during evaluation but would not be usable in the intended real-world setting.



36. Preventing Data Leakage


A good workflow is:


Raw Data


↓


Train/Test Split


↓


Fit preprocessing using training data only


↓


Transform training data


↓


Transform test data using the same fitted transformation


↓


Train model


↓


Evaluate


This principle becomes especially important when using scaling, imputation, feature selection, and other preprocessing methods.



37. Python Example: Avoiding Preprocessing Leakage


Python


from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression


data = load_breast_cancer()


X_train, X_test, y_train, y_test = train_test_split(
    data.data,
    data.target,
    test_size=0.25,
    random_state=42,
    stratify=data.target
)


scaler = StandardScaler()


X_train_scaled = scaler.fit_transform(X_train)


X_test_scaled = scaler.transform(X_test)


model = LogisticRegression(max_iter=5000)


model.fit(X_train_scaled, y_train)


print("Test accuracy:", model.score(X_test_scaled, y_test))


Output


Test accuracy: a value determined by the fitted model and environment.


The important point is:


fit_transform()


is used on the training data.


transform()


is used on the test data.



38. Why fit and transform Are Different


When a scaler is fitted, it calculates statistics from the training data.


For StandardScaler, these include:


Mean


and


Standard Deviation


The test data should not be used to calculate those statistics.


Therefore:


Training:


fit_transform()


Test:


transform()


This prevents information from the test set from influencing preprocessing.



39. Generalization in Real-World Systems


Suppose a company builds a customer churn model.


The model is trained using historical customer records.


Later, the model is used on current customers.


The real question is:


Does the model continue to perform well on current customer behaviour?


Customer behaviour can change because of:


New products


Pricing changes


Economic conditions


Competitor actions


Marketing campaigns


Technology changes


Therefore, generalization is not only a training-time concept.


It also matters after deployment.



40. Distribution Shift


Sometimes the relationship between training data and future data changes.


This can be described as distribution shift.


For example:


Training Data:


Customers from 2024


Future Data:


Customers from 2026


Customer behaviour may have changed.


A model that worked well historically may require monitoring and retraining.



41. Experiment


Use the Iris dataset and compare several values of:


n_neighbors


Try:


1


3


5


7


15


For each value, record:


Training Accuracy


Test Accuracy


Cross-Validation Mean


Create a table:


| k | Training Accuracy | Test Accuracy | CV Mean |
|---|-------------------|---------------|---------|
| 1 | | | |
| 3 | | | |
| 5 | | | |
| 7 | | | |
| 15 | | | |


Then answer:


Which value gives the largest training score?


Which gives the best test score?


Which gives the best cross-validation result?



42. Experiment: Observe Overfitting


Use a DecisionTreeClassifier.


Try:


max_depth = 1


max_depth = 2


max_depth = 4


max_depth = 8


max_depth = None


For each model, calculate:


Training Accuracy


Test Accuracy


Observe what happens as tree complexity increases.



43. Experiment: Cross-Validation


Use:


cross_val_score()


with:


cv=5


Then change:


cv=10


Compare the average scores.


Ask:


Did the mean score change?


Did the individual fold scores change?


Why might different splits produce different results?



44. Common Mistakes


Mistake 1:


Assuming training performance represents future performance.


Training performance only measures fit to the training examples.


Mistake 2:


Using the test set repeatedly during model development.


This can gradually turn the test set into part of the development process.


Mistake 3:


Ignoring data leakage.


Leakage can produce unrealistic evaluation results.


Mistake 4:


Assuming more data automatically solves every problem.


Data quality and representativeness matter.


Mistake 5:


Ignoring distribution changes.


Future data may differ from historical data.


Mistake 6:


Choosing a model only because it has the highest training score.


A high training score can occur with overfitting.



45. Practice


Answer the following:


1. What is generalization?


2. Why is unseen data important?


3. What is the difference between training performance and test performance?


4. What is a generalization gap?


5. What is overfitting?


6. What is underfitting?


7. Why is representative data important?


8. What is data leakage?


9. Why should preprocessing be fitted only on training data?


10. What is cross-validation?



46. Quick Check


Question 1


What is generalization?


Answer


Generalization is the ability of a trained model to perform well on new observations that were not used during training.


Question 2


Does high training accuracy guarantee good generalization?


Answer


No.


A model can achieve very high training accuracy while performing poorly on unseen data.


Question 3


What is overfitting?


Answer


Overfitting occurs when a model learns training-specific patterns too strongly and performs substantially worse on unseen data.


Question 4


Why do we use a test set?


Answer


To evaluate the trained approach on data that was not used to fit the model.


Question 5


What is data leakage?


Answer


Data leakage occurs when information that should not be available during model training becomes available to the learning process.



47. Summary


Generalization is the ability of a model to perform well on unseen data.


Training performance measures fit to the training examples.


Test performance measures behaviour on held-out examples.


A generalization gap is the difference between training and test performance.


Overfitting occurs when a model fits training-specific details too strongly.


Underfitting occurs when a model is too simple to capture useful structure.


Representative data is important for reliable generalization.


Cross-validation provides multiple validation estimates.


Data leakage can make evaluation unrealistically optimistic.


Preprocessing should be fitted using training data and then applied to unseen data.


Regularization can help control model complexity.


Generalization remains important even after deployment because future data can differ from historical data.



48. Extended Study


A central goal of supervised learning can be expressed as minimizing expected prediction error on future observations.


Suppose the true data distribution is:


P(X, Y)


A model:


fθ(X)


produces predictions.


The expected loss can be represented as:


R(fθ) = E[L(Y, fθ(X))]


In practice, the complete population distribution is not available.


Instead, we have a finite training dataset.


The empirical risk is:


R_train(fθ) = (1/n) Σ L(yᵢ, fθ(xᵢ))


A model that minimizes empirical risk may not necessarily minimize expected future risk.


This difference is one reason generalization is fundamental to machine learning.



49. Bias and Variance Intuition


Generalization can also be discussed using the ideas of:


Bias


and


Variance


A highly constrained model may have high bias because it cannot represent enough structure.


A highly flexible model may have high variance because its learned behaviour can change substantially with the training sample.


Conceptually:


Too Simple


→ High Bias


Appropriate Complexity


→ Better Balance


Too Flexible


→ High Variance


This provides another way to understand why model complexity matters.



50. Learning Curves


A learning curve shows how model performance changes as the amount of training data increases.


For example:


Training Samples


10


50


100


500


1000


We can observe training and validation performance at each point.


Learning curves can help diagnose:


High bias


High variance


Insufficient training data


Potential benefits from collecting more data



51. Generalization After Deployment


A model may initially perform well.


However, real-world conditions can change.


Examples:


Customer behaviour changes.


New products are introduced.


Sensors are replaced.


Fraud patterns evolve.


Economic conditions change.


Therefore, deployed machine learning systems often require:


Monitoring


Evaluation


Data quality checks


Drift detection


Periodic retraining


The machine learning lifecycle continues after model training.



52. Reflection


Think about a machine learning model you would like to build.


Ask yourself:


What data will the model learn from?


Will future data resemble training data?


How will you create the test set?


Could there be information leakage?


What would overfitting look like?


What would underfitting look like?


How would you measure generalization?


Would cross-validation be useful?


What changes in the real world could cause the model's performance to decrease?


The ability to ask these questions is just as important as knowing how to call a machine learning library.

`

};

export default lesson3;