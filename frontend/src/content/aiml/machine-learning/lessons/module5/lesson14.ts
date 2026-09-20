const lesson14 = {

  id: "lesson14",

  title: "Mean Absolute Error, MSE and RMSE",

  content: `

Lesson 14

Mean Absolute Error, MSE and RMSE


1. Introduction


Three of the most widely used regression error metrics are:


Mean Absolute Error.


Mean Squared Error.


Root Mean Squared Error.



2. Prediction Error


For one observation:


Actual value:


y.


Predicted value:


ŷ.



3. Error


The signed prediction error is:


e = y − ŷ.



4. Example


Actual:


100.


Prediction:


90.


Error:


10.



5. Opposite Error


Actual:


90.


Prediction:


100.


Error:


−10.



6. Why Transform Errors?


If we simply average signed errors, positive and negative errors can cancel each other.


Therefore:


Absolute values.


or:


Squares.


are commonly used.



7. Mean Absolute Error


MAE is:


MAE


=


1/n Σ|yᵢ − ŷᵢ|.



8. Absolute Value


The absolute value removes the sign.



9. Example


Errors:


10.


−10.


20.



10. Absolute Errors


10.


10.


20.



11. MAE


MAE:


(10 + 10 + 20) / 3.


=


13.33.



12. Interpretation


MAE measures the average magnitude of prediction errors.



13. MAE Units


If the target is:


₹.


MAE is also:


₹.



14. Example


If:


MAE = ₹25,000.


The average absolute prediction error is approximately ₹25,000 under the evaluation conditions.



15. Mean Squared Error


MSE:


MSE


=


1/n Σ(yᵢ − ŷᵢ)².



16. Squaring


Squaring removes the sign and increases the influence of large errors.



17. Example


Errors:


2.


5.


10.



18. Squared Errors


4.


25.


100.



19. MSE


MSE:


(4 + 25 + 100) / 3.


=


43.



20. Large Error Effect


The error:


10


contributes:


100.


to the squared-error total.



21. RMSE


RMSE:


=


√MSE.



22. Example


MSE:


43.


RMSE:


√43.


≈


6.56.



23. RMSE Units


RMSE has the same units as the target.



24. MAE vs RMSE


MAE:


Less sensitive to large errors.


RMSE:


More sensitive to large errors.



25. Why?


MAE grows linearly with error magnitude.


RMSE grows according to squared error before taking the square root.



26. Example


Compare two models.


Model A errors:


2.


2.


2.


20.



Model B errors:


5.


5.


5.


5.



27. Model A MAE


MAE:


(2 + 2 + 2 + 20) / 4.


=


6.5.



28. Model B MAE


MAE:


(5 + 5 + 5 + 5) / 4.


=


5.



29. Model A MSE


MSE:


(4 + 4 + 4 + 400) / 4.


=


103.



30. Model B MSE


MSE:


(25 + 25 + 25 + 25) / 4.


=


25.



31. RMSE


Model A:


√103.


≈


10.15.



Model B:


√25.


=


5.



32. Interpretation


Model A has one very large error.


RMSE penalizes that error much more strongly than MAE.



33. When MAE Is Useful


MAE can be useful when:


Typical error magnitude matters.


Interpretability matters.


Extreme errors should not dominate as strongly.



34. When RMSE Is Useful


RMSE can be useful when:


Large errors are particularly undesirable.



35. When MSE Is Useful


MSE is useful when:


Squared-error optimization is desired.


Large errors should receive strong emphasis.



36. Relationship


RMSE:


√MSE.



37. Important Consequence


Because square root is a monotonic transformation for nonnegative values, models can often be compared using MSE and RMSE with the same ordering.


However, their units differ.



38. MSE Units


If target is measured in:


meters.


MSE is measured in:


square meters.



39. RMSE Units


RMSE is measured in:


meters.



40. MAE Units


MAE is measured in:


meters.



41. Python


from sklearn.metrics import (

    mean_absolute_error,

    mean_squared_error

)



42. MAE


Python


mae = mean_absolute_error(

    y_test,

    predictions

)



43. MSE


Python


mse = mean_squared_error(

    y_test,

    predictions

)



44. RMSE


Python


rmse = mse ** 0.5



45. Print


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



46. Example


Suppose:


MAE = 4.2.


RMSE = 7.8.



47. Interpretation


The model's typical absolute error is around:


4.2 target units.


The larger RMSE indicates that some larger errors are contributing significantly to the squared-error measure.



48. Error Distribution


Two models can have the same MAE but different RMSE values.



49. Example


Model A:


Errors:


4.


4.


4.


4.



Model B:


Errors:


0.


0.


0.


16.



50. MAE


Model A:


4.



Model B:


4.



51. RMSE


Model A:


4.



Model B:


8.



52. Interpretation


Both models have the same MAE.


Model B has a much larger RMSE because its errors are concentrated into one large error.



53. This Is Useful


MAE and RMSE together can reveal different aspects of error distribution.



54. MSE and Optimization


Many regression algorithms use squared-error based objectives because they are mathematically convenient and differentiable.


However, the evaluation metric and training objective do not always have to be identical.



55. Outliers


Large target errors can strongly influence MSE and RMSE.



56. Example


If one prediction has an error of:


100.


its squared contribution is:


10,000.



57. MAE Contribution


Its MAE contribution is:


100.



58. Difference


The squared metric gives the large error much greater relative influence.



59. Residuals


Residual:


eᵢ = yᵢ − ŷᵢ.



60. MAE


MAE:


1/n Σ|eᵢ|.



61. MSE


MSE:


1/n Σeᵢ².



62. RMSE


RMSE:


√(1/n Σeᵢ²).



63. Example Calculation


Actual:


[10, 20, 30].


Prediction:


[12, 18, 33].



64. Errors


−2.


2.


−3.



65. Absolute Errors


2.


2.


3.



66. MAE


MAE:


7 / 3.


≈


2.33.



67. Squared Errors


4.


4.


9.



68. MSE


MSE:


17 / 3.


≈


5.67.



69. RMSE


RMSE:


√5.67.


≈


2.38.



70. Comparing MAE and RMSE


MAE:


≈ 2.33.


RMSE:


≈ 2.38.



71. Interpretation


The error distribution is relatively moderate.


There is no extremely large error in this small example.



72. Cross-Validation


MAE can be used in cross-validation.



73. Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=5,

    scoring="neg_mean_absolute_error"

)


mae_scores = -scores



74. RMSE Cross-Validation


Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=5,

    scoring="neg_root_mean_squared_error"

)


rmse_scores = -scores



75. Compare


Python


print(
    mae_scores.mean()
)


print(
    rmse_scores.mean()
)



76. Experiment


Create a regression dataset.


Train a model.


Calculate:


MAE.


MSE.


RMSE.



77. Experiment 2


Introduce one extreme prediction error.



78. Experiment 3


Recalculate:


MAE.


MSE.


RMSE.



79. Observe


Determine which metric changes most strongly.



80. Experiment 4


Create two models:


One with many moderate errors.


One with mostly small errors and one very large error.



81. Compare


MAE.


RMSE.



82. Common Mistakes


Mistake 1:


Treating MAE and MSE as having the same units.


Mistake 2:


Forgetting to take the square root when calculating RMSE manually.


Mistake 3:


Calling RMSE an average absolute error.


Mistake 4:


Ignoring large-error sensitivity.


Mistake 5:


Using only one metric without understanding the error distribution.



83. Practice


1. Define MAE.


2. Define MSE.


3. Define RMSE.


4. Why does MAE use absolute values?


5. Why does MSE square errors?


6. Why does RMSE use a square root?


7. Which metric is more sensitive to large errors?


8. Which metrics are in the target's original units?


9. Why can two models have the same MAE but different RMSE?



84. Quick Check


Question 1


Errors are:


2, 2, 6.


What is MAE?


Answer:


(2 + 2 + 6) / 3 = 3.33.



Question 2


What happens to a squared error when the error doubles?


Answer:


The squared error becomes four times as large.



Question 3


Why is RMSE easier to interpret than MSE?


Answer:


RMSE is expressed in the original target units.



85. Summary


MAE measures average absolute error.


MSE measures average squared error.


RMSE is the square root of MSE.


MAE provides a linear treatment of errors.


MSE and RMSE emphasize large errors more strongly.



86. Extended Study


The loss functions can be viewed as:


L₁(e) = |e|.


L₂(e) = e².


MAE:


average L₁ loss.


MSE:


average L₂ loss.


RMSE:


square root of average L₂ loss.



87. Final Reflection


When choosing between MAE and RMSE, ask:


Do large errors deserve extra emphasis?


How interpretable should the metric be?


Are outliers meaningful or erroneous?


What type of error is most costly?


The correct metric depends on the prediction problem rather than a universal rule.

`

};

export default lesson14;