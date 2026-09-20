const lesson13 = {

  id: "lesson13",

  title: "Regression Evaluation Metrics",

  content: `

Lesson 13

Regression Evaluation Metrics


1. Introduction


Regression problems predict continuous numerical values.


Examples:


House prices.


Sales.


Temperature.


Demand.


Delivery time.


Energy consumption.



2. Regression Prediction


Suppose:


Actual house price:


₹50,00,000.


Predicted price:


₹47,00,000.



3. Prediction Error


Error:


Actual − Predicted.


Therefore:


₹50,00,000 − ₹47,00,000


=


₹3,00,000.



4. Why Evaluation Matters


A regression model may produce predictions that are close to the actual values or very far away.


Evaluation metrics quantify these errors.



5. Common Regression Metrics


Important metrics include:


Mean Absolute Error.


Mean Squared Error.


Root Mean Squared Error.


R².



6. Mean Absolute Error


MAE measures the average absolute difference between actual and predicted values.


Formula:


MAE


=


1/n Σ|yᵢ − ŷᵢ|.



7. Interpretation


MAE is expressed in the same units as the target.



8. Example


Actual values:


100.


200.


300.



Predictions:


90.


220.


280.



9. Errors


Absolute errors:


10.


20.


20.



10. MAE


MAE:


(10 + 20 + 20) / 3.


=


16.67.



11. Mean Squared Error


MSE averages squared prediction errors.


Formula:


MSE


=


1/n Σ(yᵢ − ŷᵢ)².



12. Why Square Errors?


Squaring makes large errors contribute disproportionately more to the total.



13. Example


Absolute errors:


10.


20.


20.



14. Squared Errors


100.


400.


400.



15. MSE


MSE:


(100 + 400 + 400) / 3.


=


300.



16. Root Mean Squared Error


RMSE is:


√MSE.



17. Example


MSE:


300.


RMSE:


√300.


≈


17.32.



18. Why RMSE?


RMSE returns the metric to the original target units while retaining the stronger influence of large errors inherited from MSE.



19. R²


R² compares the model's squared prediction error with the variation around the target mean.


A common formula is:


R²


=


1 −


SS_res


/


SS_tot.



20. Residual Sum of Squares


SS_res:


Σ(yᵢ − ŷᵢ)².



21. Total Sum of Squares


SS_tot:


Σ(yᵢ − ȳ)².



22. Interpretation


R² can be interpreted as the proportion of variation explained relative to predicting every observation using the target mean as a baseline.



23. Baseline Model


A simple baseline for regression predicts:


Mean(y_train).



24. Why Baseline?


A useful model should generally provide predictive value beyond a simple baseline.



25. R² Example


Suppose:


R² = 0.80.


This means the model's squared-error performance is 80% better than the mean-prediction baseline in the particular R² formulation.



26. Important Warning


R² should not be interpreted as:


"The model is 80% accurate."



27. Negative R²


R² can be negative on unseen data.



28. Meaning


A negative R² indicates that the model performs worse than the mean-prediction baseline under the R² calculation.



29. Example


R²:


−0.20.


This means the model's predictions have larger squared error than the baseline that predicts the appropriate reference mean.



30. MAE vs MSE


MAE:


Uses absolute errors.



MSE:


Uses squared errors.



31. Sensitivity to Large Errors


MSE is more sensitive to large errors.


MAE gives errors a linear contribution.



32. Example


Errors:


1.


1.


10.



33. MAE


MAE:


(1 + 1 + 10) / 3.


=


4.



34. MSE


MSE:


(1 + 1 + 100) / 3.


=


34.



35. RMSE


RMSE:


√34.


≈


5.83.



36. Interpretation


The large error of 10 has a much stronger influence on MSE and RMSE than on MAE.



37. Choosing MAE


MAE can be useful when:


Interpretability in original units matters.


Large errors should not dominate as strongly.



38. Choosing RMSE


RMSE can be useful when:


Large errors should receive stronger emphasis.



39. Choosing MSE


MSE can be useful for:


Optimization.


Mathematical analysis.


Situations where squared errors are appropriate.



40. Choosing R²


R² can be useful for:


Comparing explanatory performance relative to a baseline.


Understanding variance explained in a regression setting.



41. Metric Scale


MAE:


Original units.



MSE:


Squared units.



RMSE:


Original units.



R²:


Unitless.



42. Example


Target:


Daily sales in units.



MAE:


15.


Interpretation:


Average absolute prediction error is approximately 15 units.



43. MSE


MSE:


225.


Units are squared.



44. RMSE


RMSE:


15 units.



45. Python Metrics


Python


from sklearn.metrics import (

    mean_absolute_error,

    mean_squared_error,

    r2_score

)



46. Calculate MAE


Python


mae = mean_absolute_error(

    y_test,

    predictions

)



47. Calculate MSE


Python


mse = mean_squared_error(

    y_test,

    predictions

)



48. Calculate RMSE


Python


rmse = mse ** 0.5



49. Calculate R²


Python


r2 = r2_score(

    y_test,

    predictions

)



50. Print


Python


print(
    "MAE:",
    mae
)


print(
    "MSE:",
    mse
)


print(
    "RMSE:",
    rmse
)


print(
    "R2:",
    r2
)



51. Residuals


A residual is:


yᵢ − ŷᵢ.



52. Example


Actual:


100.


Prediction:


92.


Residual:


8.



53. Negative Residual


Actual:


92.


Prediction:


100.


Residual:


−8.



54. Absolute Error


Both:


8.


and:


−8.


have absolute error:


8.



55. Squared Error


Both have squared error:


64.



56. Residual Analysis


Evaluation should not always stop at one metric.


Inspecting residuals can reveal:


Systematic errors.


Nonlinear patterns.


Changing variance.


Outliers.



57. Residual Plot


Python


import matplotlib.pyplot as plt


residuals = (

    y_test

    -

    predictions

)


plt.scatter(

    predictions,

    residuals

)


plt.axhline(
    0
)


plt.xlabel(
    "Predicted"
)


plt.ylabel(
    "Residual"
)


plt.show()



58. Ideal Residual Pattern


A useful residual plot often shows:


No obvious systematic structure.


Residuals distributed around zero.



59. Residual Pattern


If residuals form a curve, the model may be missing nonlinear structure.



60. Heteroscedasticity


If residual spread increases as predictions increase, the error variance may not be constant.



61. Outliers


Very large residuals may indicate:


Outliers.


Data quality problems.


Missing features.


Incorrect labels.


Model limitations.



62. Cross-Validation


Regression metrics can be used with cross-validation.



63. Python


from sklearn.model_selection import (
    cross_val_score
)


scores = cross_val_score(

    model,

    X,

    y,

    cv=5,

    scoring="neg_mean_absolute_error"

)



64. Why Negative?


scikit-learn uses a convention where greater scores are better.


Therefore error metrics are often represented as negative values.



65. Convert


Python


mae_scores = -scores


print(
    mae_scores.mean()
)



66. RMSE with Cross-Validation


A suitable scoring configuration can also be used for squared-error based evaluation.



67. Experiment


Create a regression dataset.


Train:


Linear Regression.



68. Evaluate


Calculate:


MAE.


MSE.


RMSE.


R².



69. Experiment 2


Add a large artificial prediction error.


Observe:


MAE.


MSE.


RMSE.



70. Experiment 3


Plot residuals against predictions.



71. Experiment 4


Compare:


Linear Regression.


Ridge.


Random Forest Regressor.



72. Compare Metrics


Record:


MAE.


RMSE.


R².



73. Important Observation


Different models may rank differently depending on the metric.



74. Common Mistakes


Mistake 1:


Calling R² "accuracy."


Mistake 2:


Comparing MAE and MSE as if they have the same units.


Mistake 3:


Ignoring large errors when they matter.


Mistake 4:


Using only one metric.


Mistake 5:


Ignoring residual patterns.


Mistake 6:


Interpreting negative R² incorrectly.



75. Practice


1. What is regression?


2. What does MAE measure?


3. What does MSE measure?


4. What is RMSE?


5. What is R²?


6. Why does MSE emphasize large errors?


7. Which metric is expressed in the original target units?


8. Can R² be negative?


9. What is a residual?


10. Why inspect residual plots?



76. Quick Check


Question 1


Which metric gives large errors greater influence?


Answer:


MSE and therefore RMSE.



Question 2


Which common error metric is easiest to interpret in the target's original units?


Answer:


MAE.



Question 3


Can R² be negative?


Answer:


Yes, especially when evaluated on unseen data.



77. Summary


Regression evaluation measures how close numerical predictions are to actual values.


Important metrics include:


MAE.


MSE.


RMSE.


R².



MAE:


Linear penalty.


MSE:


Squared penalty.


RMSE:


Square root of MSE.


R²:


Performance relative to a mean-prediction baseline.



78. Extended Study


Let:


eᵢ = yᵢ − ŷᵢ.


Then:


MAE = 1/n Σ|eᵢ|.


MSE = 1/n Σeᵢ².


RMSE = √MSE.


R² = 1 − Σeᵢ² / Σ(yᵢ − ȳ)².



79. Final Reflection


When evaluating regression models, ask:


How large are typical errors?


Are large errors especially costly?


What units should the metric have?


Does the model outperform a baseline?


Are residuals systematic?


Which metric matches the real objective?


A strong regression evaluation combines numerical metrics with residual analysis and problem-specific reasoning.

`

};

export default lesson13;