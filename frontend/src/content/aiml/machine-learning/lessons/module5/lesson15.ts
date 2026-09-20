const lesson15 = {

  id: "lesson15",

  title: "R² Score and Adjusted R²",

  content: `

Lesson 15

R² Score and Adjusted R²


1. Introduction


R² is one of the most commonly used evaluation metrics for regression.


It compares the model's squared prediction errors with the variation in the target around its mean.



2. What Is R²?


R² is commonly called:


Coefficient of Determination.



3. Basic Idea


R² asks:


How much better does the model perform compared with a baseline that predicts the target mean?



4. Mean Baseline


Suppose the target values are:


10.


20.


30.



5. Mean


The mean is:


20.



6. Baseline Predictions


A mean-prediction baseline predicts:


20.


for every observation.



7. Model Predictions


Suppose the model predicts:


12.


19.


29.



8. Comparison


The model predictions can be compared with:


The actual values.


and:


The mean baseline.



9. Total Sum of Squares


The total variation in the target is:


SS_tot


=


Σ(yᵢ − ȳ)².



10. Residual Sum of Squares


The model's squared prediction error is:


SS_res


=


Σ(yᵢ − ŷᵢ)².



11. R² Formula


R²


=


1 −


SS_res


/


SS_tot.



12. Interpretation


If:


SS_res


is much smaller than:


SS_tot.


then R² is relatively high.



13. Example


Suppose:


SS_tot = 100.


SS_res = 20.



14. R²


R²:


=


1 − 20 / 100.


=


0.80.



15. Interpretation


The model reduces squared error relative to the mean-prediction baseline by 80% under this R² formulation.



16. Important Clarification


R² is not:


percentage of predictions that are correct.



17. R² Is Not Accuracy


Accuracy is mainly used for classification.


R² is used for regression.



18. R² = 1


If:


SS_res = 0.


then:


R² = 1.



19. Meaning


The predictions exactly match the observed target values on that evaluation dataset.



20. R² = 0


If:


SS_res = SS_tot.


then:


R² = 0.



21. Meaning


The model performs no better in squared-error terms than the mean-prediction baseline.



22. Negative R²


R² can be less than zero.



23. Example


If:


SS_res > SS_tot.


then:


R² < 0.



24. Interpretation


The model performs worse than the mean-prediction baseline according to the R² calculation.



25. Why Negative R² Can Happen


A model may generalize poorly to unseen data.


Its predictions can have larger squared errors than the baseline.



26. Python


from sklearn.metrics import (
    r2_score
)


r2 = r2_score(

    y_test,

    predictions

)


print(
    "R2:",
    r2
)



27. R² and Training Data


A flexible model can achieve a very high training R².


This does not guarantee a high test R².



28. Example


Training R²:


0.98.


Test R²:


0.55.



29. Interpretation


The large difference suggests that the model's fit does not generalize equally well to unseen data.



30. R² and Feature Count


Adding features to an ordinary least-squares regression model can increase or leave unchanged the training R², even when the added features provide little useful information.



31. Problem


A model can therefore appear better according to training R² simply because more predictors were added.



32. Adjusted R²


Adjusted R² modifies R² by taking the number of predictors and observations into account.



33. Formula


Adjusted R²


=


1 −


(1 − R²)(n − 1)


/


(n − p − 1).



34. Variables


n:


Number of observations.


p:


Number of predictors.



35. Why Adjust R²?


It introduces a penalty for adding predictors.


A new predictor must provide enough improvement to compensate for the additional model complexity.



36. Important Distinction


R²:


Measures relative squared-error performance against the mean baseline.


Adjusted R²:


Adds a complexity-related adjustment based on the number of predictors.



37. Example


Suppose:


n = 100.


p = 5.


R² = 0.80.



38. Adjusted R²


Adjusted R²:


=


1 −


(1 − 0.80)(99)


/


(94).



39. Approximate Result


Adjusted R²:


≈


0.789.



40. Interpretation


The adjusted value is slightly lower because the model contains multiple predictors.



41. Adding a Useful Feature


Suppose a new feature substantially improves the model.


R² may increase.


Adjusted R² may also increase if the improvement is sufficient.



42. Adding a Weak Feature


Suppose an additional feature contributes very little.


R² may increase slightly.


Adjusted R² may decrease.



43. Why?


The adjustment penalizes the additional predictor.



44. Important Limitation


Adjusted R² is not a universal feature-selection method.


It should be considered alongside:


Cross-validation.


Domain knowledge.


Regularization.


Test performance.



45. R² and Units


R² is unitless.



46. Example


Changing the target from:


rupees.


to:


thousands of rupees.


does not change R² as long as the predictions are transformed consistently.



47. MAE vs R²


MAE answers:


How large are the absolute prediction errors?



48. R²


R² answers:


How does the model's squared-error performance compare with the mean baseline?



49. Example


Model A:


MAE = 5.


R² = 0.90.



Model B:


MAE = 4.


R² = 0.86.



50. Which Is Better?


There is no universal answer based only on these two values.


The metric should match the application.



51. R² and Correlation


In ordinary simple linear regression with an intercept under standard assumptions, R² has a relationship to the squared Pearson correlation between observed and fitted values.


However, R² and correlation are not interchangeable in every modeling situation.



52. R² Does Not Prove Causality


A high R² does not demonstrate that one variable causes another.



53. Example


Two variables may be strongly associated because of:


A third variable.


Time trends.


Shared external factors.



54. Residual Analysis


A high R² should still be accompanied by residual analysis.



55. Possible Issues


Nonlinear patterns.


Outliers.


Changing variance.


Autocorrelation.



56. Cross-Validation


R² can also be evaluated using cross-validation.



57. Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=5,

    scoring="r2"

)



58. Mean R²


Python


print(
    scores.mean()
)



59. Standard Deviation


Python


print(
    scores.std()
)



60. Calculate Adjusted R²


Python


def adjusted_r2(

    r2,

    n,

    p

):

    return (

        1

        -

        (

            (1 - r2)

            *

            (n - 1)

            /

            (n - p - 1)

        )

    )



61. Example


Python


value = adjusted_r2(

    r2=0.80,

    n=100,

    p=5

)


print(
    value
)



62. Important Requirement


The denominator:


n − p − 1


must be positive for the standard adjusted R² formula to be meaningful.



63. Experiment


Create a regression dataset.


Train a linear regression model.



64. Evaluate


Calculate:


Training R².


Test R².



65. Experiment 2


Add an informative feature.


Compare:


R².


Adjusted R².



66. Experiment 3


Add a random noise feature.


Observe:


Training R².


Adjusted R².



67. Experiment 4


Use cross-validation to determine whether the additional feature improves generalization.



68. Important Lesson


A feature that increases training R² is not necessarily useful for unseen data.



69. R² and Overfitting


A highly flexible model can obtain:


High training R².


Lower validation/test R².



70. Therefore


Always evaluate regression models on data that was not used to fit the model.



71. Common Mistakes


Mistake 1:


Calling R² accuracy.


Mistake 2:


Assuming R² = 0.90 means 90% prediction accuracy.


Mistake 3:


Assuming higher training R² always means a better model.


Mistake 4:


Ignoring negative R².


Mistake 5:


Using adjusted R² as the only feature-selection method.


Mistake 6:


Ignoring residual analysis.



72. Practice


1. What is R²?


2. Write the R² formula.


3. What is SS_res?


4. What is SS_tot?


5. What does R² = 1 mean?


6. What does R² = 0 mean?


7. Can R² be negative?


8. Why can adding predictors increase training R²?


9. What is adjusted R²?


10. Why does adjusted R² penalize additional predictors?



73. Quick Check


Question 1


What is the baseline used in the usual R² definition?


Answer:


A model that predicts the target mean.



Question 2


Can test R² be negative?


Answer:


Yes.



Question 3


Does R² = 0.90 mean 90% classification accuracy?


Answer:


No.



Question 4


Why can adjusted R² decrease when a feature is added?


Answer:


The feature may not improve the fit enough to compensate for the complexity penalty.



74. Summary


R² compares a regression model with a mean-prediction baseline using squared errors.


Formula:


R²


=


1 − SS_res / SS_tot.



Adjusted R² adds an adjustment based on:


Number of observations.


Number of predictors.



75. Extended Study


For:


n


observations.


and:


p


predictors.


Adjusted R² is:


1 −


[(1 − R²)(n − 1)]


/


[n − p − 1].



The adjustment becomes important when comparing models with different numbers of predictors.



76. Final Reflection


When interpreting R², ask:


What is the baseline?


Was R² measured on training or unseen data?


How many predictors are included?


What do the residuals look like?


Does the model actually meet the application's error requirements?


R² is useful, but it should be interpreted alongside MAE, RMSE, residual analysis, and validation performance.

`

};

export default lesson15;