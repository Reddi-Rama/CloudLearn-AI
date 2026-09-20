const lesson1 = {

  id: "lesson1",

  title: "Why Model Evaluation Matters",

  content: `

Lesson 01

Why Model Evaluation Matters


1. Introduction


Training a machine learning model is not enough.


After training, we need to determine whether the model has actually learned useful patterns.


A model can perform extremely well on the data used during training while performing poorly on new data.


Model evaluation helps us measure this difference.


The central question is:


How well will this model perform on unseen data?



2. What Is Model Evaluation?


Model evaluation is the process of measuring the performance of a trained machine learning model using appropriate data and evaluation metrics.


Evaluation helps us:


Measure performance.


Compare models.


Detect overfitting.


Choose useful features.


Tune hyperparameters.


Estimate generalization.



3. Training Performance


Suppose a classifier is trained on 1,000 observations.


After training:


Training accuracy = 98%.


This tells us how well the model predicts the observations it learned from.


It does not automatically tell us how well it will predict new observations.



4. Unseen Data


Suppose the same model produces:


Test accuracy = 72%.


There is a large difference between training and test performance.


This can indicate that the model has learned patterns that do not generalize well.



5. Generalization


Generalization means performing well on previously unseen observations.


A useful model should learn relationships that extend beyond the exact examples present in the training dataset.



6. Mathematical Intuition


Let:


D_train


represent the training dataset.


The model learns parameters from:


D_train.


We then evaluate the learned model using:


D_test.


The goal is not:


minimize error only on D_train.


The broader goal is:


perform well on observations drawn from the same underlying problem but not used for learning.



7. Training Error


Training error can be represented as:


E_train = 1/n Σ L(yᵢ, ŷᵢ)


where:


n = number of training observations.


yᵢ = actual target.


ŷᵢ = model prediction.


L = loss function.



8. Generalization Error


The error on unseen observations is often called generalization error.


Conceptually:


E_generalization


is the expected error when the model is applied to new data from the relevant population.



9. Why Training Error Is Not Enough


A sufficiently flexible model can memorize training examples.


It may then achieve very low training error.


However, memorization does not guarantee useful predictions on new observations.



10. Overfitting


Overfitting occurs when a model learns the training data too specifically and fails to generalize well.


Typical pattern:


Training performance:


Very high.


Validation/test performance:


Much lower.



11. Underfitting


Underfitting occurs when the model is too limited to capture important patterns in the data.


Typical pattern:


Training performance:


Poor.


Validation/test performance:


Also poor.



12. Desired Situation


The desired situation is:


Good training performance.


Good validation performance.


Good test performance.


with a relatively small generalization gap.



13. Generalization Gap


The difference between training performance and unseen-data performance can be called the generalization gap.


For accuracy:


Generalization gap


=


Training accuracy


−


Test accuracy.



14. Example


Suppose:


Training accuracy = 96%.


Test accuracy = 91%.


Then:


Generalization gap = 5 percentage points.



15. Another Example


Training accuracy = 99%.


Test accuracy = 61%.


The large difference is a warning sign that requires investigation.



16. Train, Validation, and Test Data


A common workflow divides the dataset into:


Training set.


Validation set.


Test set.



17. Training Set


The training set is used to learn model parameters.



18. Validation Set


The validation set is used during development to:


Compare models.


Choose hyperparameters.


Compare feature representations.


Select preprocessing approaches.



19. Test Set


The test set should be kept separate from development decisions.


It is used to estimate final performance after the model and workflow have been selected.



20. Why Not Use the Test Set During Tuning?


Suppose we repeatedly evaluate many models on the test set.


Eventually, our decisions can become influenced by the test results.


The test set then stops behaving like an independent final evaluation.



21. Simple Workflow


Dataset


↓

Training Set


↓

Model Training


↓

Validation Set


↓

Model Selection


↓

Final Model


↓

Test Set


↓

Final Evaluation.



22. Example Dataset


Suppose a dataset contains:


10,000 observations.


One possible split is:


Training:


7,000.


Validation:


1,500.


Test:


1,500.



23. Important Point


There is no single universally correct split ratio.


The appropriate strategy depends on:


Dataset size.


Problem type.


Data availability.


Temporal structure.


Evaluation requirements.



24. Random Train-Test Split


For many independent observations, a random split can be appropriate.



25. Python


from sklearn.model_selection import (
    train_test_split
)


X_train, X_test, y_train, y_test = (

    train_test_split(

        X,

        y,

        test_size=0.2,

        random_state=42

    )

)



26. Why random_state?


random_state controls the random split.


Using a fixed value makes the experiment reproducible.



27. Classification and Stratification


For classification, the target distribution should often be preserved between splits.


This can be achieved with stratification.



28. Python


X_train, X_test, y_train, y_test = (

    train_test_split(

        X,

        y,

        test_size=0.2,

        random_state=42,

        stratify=y

    )

)



29. Example


Suppose:


Class A = 90%.


Class B = 10%.


A poorly constructed split could contain very few Class B observations in one subset.


Stratification helps maintain approximately similar class proportions.



30. Evaluation Metrics


A model cannot be evaluated without defining what "good performance" means.


Different metrics measure different aspects of performance.



31. Accuracy


For classification:


Accuracy


=


Correct Predictions


/


Total Predictions.



32. Example


Suppose:


100 predictions.


92 are correct.


Accuracy:


0.92.


or:


92%.



33. Accuracy Limitation


Accuracy can be misleading for imbalanced datasets.



34. Imbalanced Example


Suppose:


950 observations belong to Class 0.


50 observations belong to Class 1.


A model predicts Class 0 for every observation.


Accuracy:


950 / 1000


=


95%.



35. Is the Model Useful?


Although accuracy is 95%, the model completely fails to identify Class 1.


This demonstrates why metric selection matters.



36. Classification Metrics


Depending on the problem, we may examine:


Precision.


Recall.


F1-score.


ROC-AUC.



37. Regression Metrics


For regression:


MAE.


MSE.


RMSE.


R².



38. Metric Selection


The metric should reflect the actual objective of the problem.



39. Example


Suppose a medical screening system must identify as many positive cases as possible.


Missing a positive case may be more costly than generating an additional false alarm.


Recall may therefore be particularly important.



40. Another Example


Suppose a system automatically approves expensive transactions.


False positives may be costly.


Precision may therefore become important.



41. Business Metric


Sometimes the most useful metric is not a standard machine learning metric.


For example:


Revenue.


Cost.


Customer retention.


Conversion rate.


Operational time.



42. Model Comparison


Suppose we have:


Model A.


Model B.


Model C.


We need an evaluation procedure that compares them fairly.



43. Fair Comparison


Models should generally be evaluated:


On the same data.


Using the same metric.


Under the same evaluation procedure.



44. Example


Model A:


Accuracy = 88%.


Model B:


Accuracy = 91%.


This provides a direct comparison only if the same evaluation conditions were used.



45. Evaluation Variability


Performance measured on one random split can depend on the particular observations selected.


Another split may produce a different score.



46. Why This Matters


Suppose:


Split 1:


Accuracy = 91%.


Split 2:


Accuracy = 84%.


The difference suggests that the single split may not provide a stable estimate.



47. Cross-Validation


Cross-validation addresses this issue by evaluating the model over multiple train-validation splits.


Cross-validation is the subject of the next lesson.



48. Experiment


Create a small classification dataset.


Train a simple model.


Compare:


Training accuracy.


Test accuracy.



49. Python


from sklearn.datasets import (
    load_iris
)


from sklearn.model_selection import (
    train_test_split
)


from sklearn.linear_model import (
    LogisticRegression
)


from sklearn.metrics import (
    accuracy_score
)


data = load_iris()


X = data.data


y = data.target


X_train, X_test, y_train, y_test = (

    train_test_split(

        X,

        y,

        test_size=0.2,

        random_state=42,

        stratify=y

    )

)


model = LogisticRegression(
    max_iter=1000
)


model.fit(
    X_train,
    y_train
)


train_predictions = (
    model.predict(X_train)
)


test_predictions = (
    model.predict(X_test)
)


train_accuracy = accuracy_score(

    y_train,

    train_predictions

)


test_accuracy = accuracy_score(

    y_test,

    test_predictions

)


print(
    "Training accuracy:",
    train_accuracy
)


print(
    "Test accuracy:",
    test_accuracy
)



50. Expected Output


Training accuracy:


approximately 0.97


Test accuracy:


approximately 0.97


The exact values can vary depending on the split and software version.



51. What Does This Tell Us?


The training and test performance are similar in this example.


That suggests the model is not showing a large generalization gap under this particular split.



52. Important Limitation


A single train-test split is only one evaluation experiment.


It should not automatically be treated as a perfect estimate of real-world performance.



53. Common Mistakes


Mistake 1:


Evaluating only training performance.


Mistake 2:


Using the test set repeatedly during model selection.


Mistake 3:


Using an inappropriate metric.


Mistake 4:


Ignoring class imbalance.


Mistake 5:


Comparing models using different evaluation conditions.


Mistake 6:


Assuming one split represents every possible dataset split.



54. Practice


1. What is model evaluation?


2. Why is training accuracy alone insufficient?


3. What is generalization?


4. What is overfitting?


5. What is underfitting?


6. What is a generalization gap?


7. What is the purpose of a validation set?


8. Why should the test set be protected?


9. Why can accuracy be misleading?


10. Give two examples where precision or recall may matter.



55. Quick Check


Question 1


A model has 99% training accuracy and 60% test accuracy.


What should you investigate?


Answer


A large generalization gap and possible overfitting.



Question 2


Why should the test set not be repeatedly used for tuning?


Answer


Repeated decisions based on test performance can make the final test estimate less independent.



Question 3


Why can accuracy be misleading?


Answer


It may hide poor performance on an important minority class.



Question 4


What is generalization?


Answer


The ability of a model to perform well on unseen data.



56. Summary


Model evaluation determines whether a machine learning model is useful beyond its training examples.


Important ideas include:


Training performance.


Validation performance.


Test performance.


Generalization.


Overfitting.


Underfitting.


Evaluation metrics.


Model comparison.



57. Extended Study


A machine learning model can be viewed as a function:


fθ(X).


The parameters:


θ


are learned using training data.


Evaluation asks how well the resulting function performs on new observations.


Therefore, the central goal is not simply:


minimize training error.


Instead, the goal is to obtain a model whose learned patterns generalize to the target population.



58. Final Reflection


Whenever you train a machine learning model, ask:


How was the model evaluated?


Which data was used?


Which metric was used?


Was the metric appropriate?


Was the test set protected?


How stable is the measured performance?


These questions form the foundation of reliable machine learning evaluation.

`

};

export default lesson1;