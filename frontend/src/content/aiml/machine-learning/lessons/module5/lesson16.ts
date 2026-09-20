const lesson16 = {

  id: "lesson16",

  title: "Baseline Models and Dummy Estimators",

  content: `

Lesson 16

Baseline Models and Dummy Estimators


1. Introduction


Before building a sophisticated machine learning model, it is useful to establish a simple baseline.


A baseline provides a reference point against which more complex models can be evaluated.


Without a baseline, it can be difficult to determine whether a machine learning model is actually providing useful predictive performance.



2. What Is a Baseline?


A baseline is a simple prediction strategy that provides a reference level of performance.



3. Example


Suppose we want to predict whether a customer will purchase a product.


A simple baseline could always predict:


No Purchase.



4. Why Use a Baseline?


Suppose the baseline achieves:


82% accuracy.


A machine learning model achieves:


83% accuracy.



5. Interpretation


The machine learning model improves accuracy by only one percentage point.


The improvement may or may not justify the additional complexity.



6. Baseline Questions


Before evaluating a model, ask:


What can a very simple strategy achieve?


Does the trained model perform better?


How much improvement does it provide?



7. Classification Baselines


Common classification baselines include:


Most frequent class.


Prior class distribution.


Uniform random predictions.



8. Regression Baselines


Common regression baselines include:


Mean target.


Median target.



9. DummyClassifier


scikit-learn provides:


DummyClassifier.



10. Python


from sklearn.dummy import (
    DummyClassifier
)



11. Most Frequent Strategy


Python


baseline = DummyClassifier(

    strategy="most_frequent"

)



12. Train


Python


baseline.fit(

    X_train,

    y_train

)



13. Predict


Python


baseline_predictions = (

    baseline.predict(

        X_test

    )

)



14. Accuracy


Python


from sklearn.metrics import (
    accuracy_score
)


accuracy = accuracy_score(

    y_test,

    baseline_predictions

)


print(
    accuracy
)



15. Compare With a Real Model


Python


model.fit(

    X_train,

    y_train

)


predictions = model.predict(

    X_test

)


model_accuracy = accuracy_score(

    y_test,

    predictions

)



16. Interpretation


Compare:


Baseline accuracy.


Model accuracy.



17. Important Warning


A higher accuracy does not automatically mean the model is useful.


The comparison should also consider:


Class balance.


Precision.


Recall.


F1-score.


Operational requirements.



18. DummyClassifier Strategies


DummyClassifier supports several strategies.


Examples include:


most_frequent.


prior.


stratified.


uniform.



19. Most Frequent


The classifier always predicts the most frequent class.



20. Example


If:


Class 0 = 80%.


Class 1 = 20%.


The most-frequent classifier always predicts:


Class 0.



21. Prior


The prior strategy predicts according to the class distribution observed during training.



22. Stratified


The stratified strategy generates predictions according to the training class distribution while incorporating randomness.



23. Uniform


The uniform strategy randomly selects classes with equal probability.



24. Why Compare Strategies?


Different baselines answer different questions about how much predictive information the model is actually learning.



25. Regression Baseline


For regression, scikit-learn provides:


DummyRegressor.



26. Python


from sklearn.dummy import (
    DummyRegressor
)



27. Mean Strategy


Python


baseline = DummyRegressor(

    strategy="mean"

)



28. Fit


Python


baseline.fit(

    X_train,

    y_train

)



29. Predict


Python


baseline_predictions = (

    baseline.predict(

        X_test

    )

)



30. Evaluate


Python


from sklearn.metrics import (
    mean_absolute_error
)


mae = mean_absolute_error(

    y_test,

    baseline_predictions

)


print(
    mae
)



31. Median Baseline


Python


baseline = DummyRegressor(

    strategy="median"

)



32. Why Median?


The median can provide a useful baseline when the target distribution contains extreme values.



33. Example


Suppose target values are:


10.


11.


12.


13.


1000.



34. Mean


The mean is strongly affected by:


1000.



35. Median


The median is:


12.



36. Baseline Selection


The appropriate baseline depends on:


Target distribution.


Metric.


Application.



37. Baseline and Imbalanced Classification


Suppose:


Class 0 = 95%.


Class 1 = 5%.



38. Most Frequent Baseline


Predicting Class 0 every time gives:


95% accuracy.



39. Model Evaluation


Suppose a model achieves:


96% accuracy.



40. Important Question


Does the model meaningfully improve:


Minority-class recall?


Minority-class precision?


F1?


Business outcomes?



41. Baseline With F1


Python


from sklearn.metrics import (
    f1_score
)


baseline_f1 = f1_score(

    y_test,

    baseline_predictions,

    zero_division=0

)



42. Why This Is Useful


The baseline may have high accuracy but very poor positive-class performance.



43. Baseline and Cross-Validation


A baseline should ideally be evaluated using the same validation procedure as the actual model.



44. Python


from sklearn.model_selection import (
    cross_val_score
)


scores = cross_val_score(

    baseline,

    X,

    y,

    cv=5,

    scoring="accuracy"

)



45. Mean Score


Python


print(
    scores.mean()
)



46. Compare Fairly


Use:


Same dataset.


Same folds.


Same metric.


Same preprocessing assumptions.


when comparing baseline and candidate models.



47. Baseline Pipeline


A baseline can also be included in a pipeline.



48. Example


Python


from sklearn.pipeline import (
    Pipeline
)


pipeline = Pipeline([

    (
        "model",
        baseline
    )

])



49. Why Simple Baselines Matter


They help detect situations where:


The dataset is too difficult.


Features contain little predictive information.


The evaluation procedure is flawed.


The model is not learning useful patterns.



50. Baseline and Data Leakage


If a sophisticated model performs extremely well but the baseline is unexpectedly poor or the evaluation is inconsistent, inspect the data pipeline for leakage.



51. Example


Suppose:


Baseline accuracy = 50%.


Model accuracy = 99%.



52. Question


Is the model genuinely excellent?


Or is information from the target leaking into the features?



53. Baseline as a Sanity Check


A baseline is therefore a useful sanity check.



54. Experiment


Create a binary classification dataset.



55. Train Baseline


Use:


DummyClassifier.


Calculate:


Accuracy.


Precision.


Recall.


F1.



56. Train Model


Use:


Logistic Regression.



57. Compare


Create a comparison containing:


Metric.


Baseline.


Logistic Regression.



58. Experiment 2


Create an imbalanced dataset.


Compare:


Most frequent baseline.


Logistic Regression.



59. Experiment 3


Create a regression dataset.


Compare:


Mean baseline.


Linear Regression.



60. Experiment 4


Compare:


Mean baseline.


Median baseline.



61. Common Mistakes


Mistake 1:


Skipping the baseline.


Mistake 2:


Using different datasets for baseline and model.


Mistake 3:


Comparing different metrics.


Mistake 4:


Using only accuracy on imbalanced data.


Mistake 5:


Assuming any improvement is practically meaningful.



62. Practice


1. What is a baseline model?


2. Why should a baseline be established?


3. What does DummyClassifier do?


4. What is the most-frequent classification strategy?


5. What does DummyRegressor do?


6. Why can a majority-class baseline achieve high accuracy?


7. Why should baselines use the same validation procedure as candidate models?



63. Quick Check


Question 1


A majority-class baseline achieves 90% accuracy.


A model achieves 91% accuracy.


What should you investigate?


Answer:


Whether the one-percentage-point improvement is meaningful and whether other metrics show a more substantial improvement.



Question 2


What is a common regression baseline?


Answer:


Predicting the training target mean.



64. Summary


Baseline models provide simple reference points.


Classification baselines can use:


Most frequent class.


Class priors.


Randomized strategies.



Regression baselines can use:


Mean.


Median.


Other simple strategies.



A strong model should be evaluated relative to an appropriate baseline.



65. Extended Study


The baseline represents a simple hypothesis:


"The available features do not provide enough information to improve substantially over a simple prediction rule."


A useful machine learning model should provide evidence that it can learn predictive structure beyond that baseline.



66. Final Reflection


Before celebrating a model score, ask:


What does a simple baseline achieve?


Does my model actually beat it?


Does the improvement hold under cross-validation?


Does it improve the metric that matters?


Is the improvement practically meaningful?


Baseline evaluation is one of the simplest ways to keep machine learning experiments grounded.

`

};

export default lesson16;