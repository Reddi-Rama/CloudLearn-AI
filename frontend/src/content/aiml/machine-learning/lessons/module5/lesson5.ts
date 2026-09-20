const lesson5 = {

  id: "lesson5",

  title: "Leave-One-Out Cross-Validation",

  content: `

Lesson 05

Leave-One-Out Cross-Validation


1. Introduction


Leave-One-Out Cross-Validation, commonly called LOOCV, is a special form of cross-validation.


If the dataset contains N observations, LOOCV creates N validation rounds.


In each round:


One observation is used for validation.


All remaining observations are used for training.



2. Basic Idea


Suppose the dataset contains:


5 observations.


LOOCV creates:


5 rounds.



3. Round 1


Training:


Observations 2, 3, 4, 5.


Validation:


Observation 1.



4. Round 2


Training:


Observations 1, 3, 4, 5.


Validation:


Observation 2.



5. Round 3


Training:


Observations 1, 2, 4, 5.


Validation:


Observation 3.



6. Round 4


Training:


Observations 1, 2, 3, 5.


Validation:


Observation 4.



7. Round 5


Training:


Observations 1, 2, 3, 4.


Validation:


Observation 5.



8. General Rule


For N observations:


Number of training rounds = N.


Training size per round = N − 1.


Validation size per round = 1.



9. Mathematical View


Let:


D = {x₁, x₂, ..., xₙ}.


For observation i:


Training set:


D \ {xᵢ}.


Validation set:


{xᵢ}.



10. LOOCV Score


If the loss for observation i is:


Lᵢ.


Then the LOOCV estimate can be written as:


LOOCV = 1/N ΣLᵢ.



11. Classification Example


Suppose there are:


100 observations.


LOOCV performs:


100 model fits.



12. Larger Dataset


If there are:


10,000 observations.


LOOCV requires:


10,000 model fits.


This can become computationally expensive.



13. Why Use LOOCV?


LOOCV has one important characteristic:


Each training round uses almost the entire dataset.



14. Training Proportion


For N observations:


Training proportion:


(N − 1) / N.


For N = 100:


99 / 100.


=


99%.



15. Small Dataset


LOOCV can be attractive when the dataset is very small because removing one observation leaves most of the data available for training.



16. Example


Suppose a dataset contains:


20 observations.


Each LOOCV model trains on:


19 observations.



17. Comparison With Five-Fold


For 20 observations and five-fold cross-validation:


Each model trains on approximately:


16 observations.


LOOCV trains on:


19 observations.



18. Computational Trade-Off


LOOCV uses more observations for training in each round.


However, it also requires many more model fits.



19. scikit-learn


Python


from sklearn.model_selection import (
    LeaveOneOut
)



20. Create LOOCV


Python


cv = LeaveOneOut()



21. Example Dataset


Python


from sklearn.datasets import (
    load_iris
)


data = load_iris()


X = data.data


y = data.target



22. Model


Python


from sklearn.linear_model import (
    LogisticRegression
)


model = LogisticRegression(
    max_iter=1000
)



23. Cross-Validation


Python


from sklearn.model_selection import (
    cross_val_score
)


scores = cross_val_score(

    model,

    X,

    y,

    cv=cv,

    scoring="accuracy"

)



24. Number of Scores


Python


print(
    len(scores)
)



25. Interpretation


For N observations:


len(scores)


should equal:


N.



26. Why Can LOOCV Be Slow?


Suppose:


N = 5,000.


The model must be trained approximately:


5,000 times.



27. Model Complexity


If one model fit is expensive, LOOCV can become impractical.



28. Example


Suppose one model fit takes:


0.5 seconds.


For 5,000 observations:


approximately:


2,500 seconds.


This is more than:


40 minutes.


Actual runtime can vary considerably.



29. Advantages


LOOCV provides:


Nearly all observations for training in each round.


A systematic validation procedure.


A useful option for very small datasets.



30. Disadvantages


LOOCV can be:


Computationally expensive.


Sensitive to individual observations.


Less practical for large datasets.



31. Variance Intuition


Each validation set contains only one observation.


Therefore, the individual validation results are:


0 or 1


for simple classification accuracy.



32. Example


Suppose:


9 observations are correctly classified.


1 observation is incorrectly classified.


LOOCV accuracy:


9 / 10.


=


90%.



33. Single Observation Influence


Because each validation fold contains one observation, unusual observations can have a noticeable influence on the overall result.



34. LOOCV and Outliers


If one observation is unusual, its individual validation result can strongly affect the overall estimate.



35. LOOCV and Classification


LOOCV does not automatically preserve class proportions in each validation fold.


Each validation fold contains only one observation.



36. Imbalanced Classification


For strongly imbalanced classification problems, other validation strategies may be more informative.



37. LOOCV and Preprocessing


Preprocessing should still be fitted inside each training iteration.



38. Incorrect


Fit:


StandardScaler.


on the entire dataset.


Then perform LOOCV.



39. Correct


For every LOOCV round:


Take N−1 training observations.


Fit preprocessing on them.


Transform training data.


Transform the single validation observation.


Train model.


Evaluate.



40. Pipeline Solution


Python


from sklearn.pipeline import (
    Pipeline
)


from sklearn.preprocessing import (
    StandardScaler
)


pipeline = Pipeline([

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        LogisticRegression(
            max_iter=1000
        )
    )

])



41. LOOCV


Python


scores = cross_val_score(

    pipeline,

    X,

    y,

    cv=LeaveOneOut(),

    scoring="accuracy"

)



42. Regression


LOOCV can also be used for regression.



43. Regression Example


Python


from sklearn.linear_model import (
    LinearRegression
)


model = LinearRegression()



44. Regression Metric


Use a suitable regression metric such as:


MAE.


MSE.


RMSE.



45. Example


Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=LeaveOneOut(),

    scoring="neg_mean_absolute_error"

)



46. Why Negative MAE?


Some scikit-learn scoring functions are expressed so that larger values represent better scores.


Therefore error metrics such as MAE may be returned as negative values in cross-validation scoring.



47. Convert to Positive Error


Python


mae = -scores.mean()


print(
    mae
)



48. LOOCV vs K-Fold


LOOCV:


Number of folds = N.


Validation size = 1.


Training size = N−1.


Computational cost = high for large N.



49. Five-Fold


Five-fold:


Number of folds = 5.


Validation size ≈ N/5.


Training size ≈ 4N/5.



50. Ten-Fold


Ten-fold:


Number of folds = 10.


Validation size ≈ N/10.


Training size ≈ 9N/10.



51. Practical Choice


For many practical machine learning workflows, five-fold or ten-fold cross-validation can provide a useful balance between computational cost and evaluation stability.



52. When LOOCV Can Be Useful


Consider LOOCV when:


The dataset is very small.


Training on nearly all available observations matters.


Model training is inexpensive.



53. When LOOCV Can Be Inconvenient


Avoid relying on LOOCV simply because it uses almost all observations for training.


Consider computational cost and the structure of the problem.



54. Experiment


Create a small regression dataset.


Compare:


Five-fold CV.


LOOCV.



55. Python


from sklearn.datasets import (
    make_regression
)


X, y = make_regression(

    n_samples=30,

    n_features=5,

    noise=10,

    random_state=42

)



56. Model


Python


model = LinearRegression()



57. Five-Fold


Python


from sklearn.model_selection import (
    KFold
)


cv5 = KFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)


scores5 = cross_val_score(

    model,

    X,

    y,

    cv=cv5,

    scoring="neg_mean_absolute_error"

)



58. LOOCV


Python


cv_loo = LeaveOneOut()


scores_loo = cross_val_score(

    model,

    X,

    y,

    cv=cv_loo,

    scoring="neg_mean_absolute_error"

)



59. Compare


Python


print(
    "5-fold MAE:",
    -scores5.mean()
)


print(
    "LOOCV MAE:",
    -scores_loo.mean()
)



60. Interpretation


The values may differ because the validation procedures use different partitions.


Neither procedure should be selected solely because its numerical score is larger or smaller without considering the evaluation design.



61. Common Mistakes


Mistake 1:


Using LOOCV on a huge dataset without considering computational cost.


Mistake 2:


Fitting preprocessing on the complete dataset first.


Mistake 3:


Assuming LOOCV automatically handles class imbalance.


Mistake 4:


Ignoring unusual observations.


Mistake 5:


Treating LOOCV as universally better than k-fold cross-validation.



62. Practice


1. What is LOOCV?


2. How many validation rounds occur for N observations?


3. How many observations are in each validation fold?


4. How many observations are used for training?


5. Why can LOOCV be computationally expensive?


6. Why can an unusual observation have a strong influence?


7. How does LOOCV differ from five-fold CV?


8. Why should preprocessing still occur inside each fold?



63. Quick Check


Question 1


A dataset has 50 observations.


How many LOOCV rounds occur?


Answer:


50.



Question 2


How many observations are used for training in each round?


Answer:


49.



Question 3


What is the main computational disadvantage?


Answer:


The model must be trained once for every observation.



64. Summary


Leave-One-Out Cross-Validation uses one observation as validation and all remaining observations as training data.


For N observations:


N rounds.


N−1 training observations per round.


1 validation observation per round.


LOOCV can be useful for small datasets but can become expensive as the dataset grows.



65. Extended Study


LOOCV can be expressed as:


CV_LOO


=


1/N Σ L(yᵢ, f⁽⁻ⁱ⁾(xᵢ)).


Here:


f⁽⁻ⁱ⁾


represents the model trained without observation i.


The prediction for xᵢ is therefore generated by a model that did not train on xᵢ.



66. Final Reflection


LOOCV demonstrates an important evaluation principle:


A validation observation should not be used to fit the model that evaluates it.


The procedure is simple conceptually, but the computational cost becomes significant as the dataset grows.

`

};

export default lesson5;