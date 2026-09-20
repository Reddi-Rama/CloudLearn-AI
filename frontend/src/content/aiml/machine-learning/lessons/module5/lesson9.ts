const lesson9 = {

  id: "lesson9",

  title: "Classification Metrics: Precision, Recall & F1",

  content: `

Lesson 09

Classification Metrics: Precision, Recall & F1


1. Introduction


Classification models predict categories.


Examples:


Spam or not spam.


Fraud or legitimate.


Disease or no disease.


Positive or negative sentiment.



2. Correct and Incorrect Predictions


For binary classification, predictions can be divided into four categories:


True Positive.


True Negative.


False Positive.


False Negative.



3. True Positive


A true positive occurs when:


Actual class = Positive.


Predicted class = Positive.



4. True Negative


A true negative occurs when:


Actual class = Negative.


Predicted class = Negative.



5. False Positive


A false positive occurs when:


Actual class = Negative.


Predicted class = Positive.



6. False Negative


A false negative occurs when:


Actual class = Positive.


Predicted class = Negative.



7. Example


Suppose a model predicts fraud.


Actual:


Fraud.


Prediction:


Fraud.


This is a true positive.



8. False Positive Example


Actual:


Legitimate.


Prediction:


Fraud.


This is a false positive.



9. False Negative Example


Actual:


Fraud.


Prediction:


Legitimate.


This is a false negative.



10. Confusion Matrix


The four outcomes can be summarized as:


                 Predicted Positive


                 Predicted Negative


Actual Positive:


TP.


FN.


Actual Negative:


FP.


TN.



11. Precision


Precision measures the reliability of positive predictions.


Formula:


Precision


=


TP


/


(TP + FP).



12. Interpretation


Among all observations predicted as positive:


What fraction are actually positive?



13. Example


Suppose:


TP = 80.


FP = 20.



14. Precision


Precision:


= 80 / (80 + 20).


= 0.80.


= 80%.



15. High Precision


High precision means that positive predictions are usually correct.



16. Low Precision


Low precision means that many positive predictions are false positives.



17. Recall


Recall measures how many actual positive observations were successfully identified.


Formula:


Recall


=


TP


/


(TP + FN).



18. Interpretation


Among all observations that are actually positive:


What fraction did the model identify?



19. Example


Suppose:


TP = 80.


FN = 20.



20. Recall


Recall:


= 80 / (80 + 20).


= 0.80.



21. High Recall


High recall means the model misses relatively few actual positive observations.



22. Low Recall


Low recall means the model misses many positive observations.



23. Precision vs Recall


Precision focuses on:


The quality of positive predictions.



Recall focuses on:


The coverage of actual positive observations.



24. Example


Suppose a fraud detector flags 100 transactions.


80 are actually fraudulent.


20 are legitimate.


Precision:


80%.



25. Recall Example


Suppose there are 100 fraudulent transactions in total.


The model identifies 80.


Recall:


80%.



26. F1-Score


F1-score combines precision and recall.



27. Formula


F1


=


2 × Precision × Recall


/


(Precision + Recall).



28. Why Harmonic Mean?


The harmonic mean strongly reflects a low value.


If one of precision or recall is very low, the F1-score also tends to be low.



29. Example


Precision:


0.80.


Recall:


0.80.


F1:


0.80.



30. Example 2


Precision:


1.00.


Recall:


0.20.



31. F1


F1:


=


2 × 1.00 × 0.20


/


1.20.


≈


0.333.



32. Interpretation


Perfect precision does not compensate completely for very poor recall.



33. Precision-Recall Trade-Off


Increasing the classification threshold often makes the model more selective about positive predictions.



34. Possible Effect


Higher threshold:


Fewer positive predictions.


Potentially higher precision.


Potentially lower recall.



35. Lower Threshold


Lower threshold:


More positive predictions.


Potentially higher recall.


Potentially lower precision.



36. Important Note


The exact relationship depends on the model and data.



37. Binary Classification Example


Suppose:


TP = 70.


TN = 800.


FP = 50.


FN = 80.



38. Accuracy


Accuracy:


=


(70 + 800)


/


(70 + 800 + 50 + 80)


=


870 / 1000.


=


87%.



39. Precision


Precision:


=


70 / (70 + 50).


≈


58.3%.



40. Recall


Recall:


=


70 / (70 + 80).


≈


46.7%.



41. F1


F1:


≈


51.9%.



42. Important Observation


Accuracy is relatively high.


But precision, recall, and F1 are much lower.


This demonstrates why one metric can hide important model behavior.



43. scikit-learn


Python


from sklearn.metrics import (

    precision_score,

    recall_score,

    f1_score

)



44. Precision


Python


precision = precision_score(

    y_test,

    predictions

)



45. Recall


Python


recall = recall_score(

    y_test,

    predictions

)



46. F1


Python


f1 = f1_score(

    y_test,

    predictions

)



47. Print


Python


print(
    "Precision:",
    precision
)


print(
    "Recall:",
    recall
)


print(
    "F1:",
    f1
)



48. Zero-Division


If the model predicts no positive observations, precision can involve division by zero.


scikit-learn provides the zero_division parameter to control this behavior.



49. Example


Python


precision = precision_score(

    y_test,

    predictions,

    zero_division=0

)



50. Weighted and Macro Averages


For multiclass classification, precision, recall, and F1 can be aggregated using different averaging strategies.



51. Macro Average


Macro averaging calculates the metric independently for each class and then takes the unweighted average.



52. Weighted Average


Weighted averaging calculates the metric for each class and weights it according to class support.



53. Example


Python


f1_macro = f1_score(

    y_test,

    predictions,

    average="macro"

)



54. Weighted F1


Python


f1_weighted = f1_score(

    y_test,

    predictions,

    average="weighted"

)



55. Why Does This Matter?


If classes are imbalanced, macro and weighted averages can provide different views of performance.



56. Multiclass Example


Classes:


Cat.


Dog.


Bird.



57. Macro F1


Calculate F1 separately for:


Cat.


Dog.


Bird.


Then average the three values equally.



58. Weighted F1


Give more influence to classes containing more observations.



59. Classification Report


scikit-learn provides a convenient classification report.



60. Python


from sklearn.metrics import (
    classification_report
)


print(

    classification_report(

        y_test,

        predictions

    )

)



61. Typical Information


The report includes:


Precision.


Recall.


F1-score.


Support.



62. Support


Support is the number of true observations belonging to each class.



63. Why Support Matters


A metric calculated from only a very small number of observations can be less stable than one calculated from a large number of observations.



64. Precision-Recall Curve


Instead of evaluating only one classification threshold, we can examine performance across many thresholds.



65. Python


from sklearn.metrics import (
    precision_recall_curve
)


precision, recall, thresholds = (

    precision_recall_curve(

        y_test,

        probabilities

    )

)



66. Probabilities


The model should provide a probability or decision score rather than only hard class labels.



67. Logistic Regression


Python


probabilities = (

    model.predict_proba(

        X_test

    )[:, 1]

)



68. Threshold Experiment


Suppose:


Threshold = 0.5.


Then classify:


probability >= 0.5


as positive.



69. Custom Threshold


Python


custom_predictions = (

    probabilities >= 0.7

).astype(int)



70. Evaluate


Python


print(

    precision_score(

        y_test,

        custom_predictions

    )

)


print(

    recall_score(

        y_test,

        custom_predictions

    )

)



71. Interpretation


Changing the threshold changes the classification behavior.


The appropriate threshold depends on the application.



72. Experiment


Train a binary classifier.


Record:


Precision.


Recall.


F1.



73. Experiment 2


Evaluate thresholds:


0.3.


0.5.


0.7.



74. Experiment 3


Create a table containing:


Threshold.


Precision.


Recall.


F1.



75. Experiment 4


Identify how precision and recall change as the threshold changes.



76. Common Mistakes


Mistake 1:


Confusing precision and recall.


Mistake 2:


Using accuracy for severe class imbalance without further analysis.


Mistake 3:


Ignoring false positives.


Mistake 4:


Ignoring false negatives.


Mistake 5:


Using a fixed threshold without considering the application.


Mistake 6:


Comparing F1 values without checking class averaging.



77. Practice


1. Define true positive.


2. Define true negative.


3. Define false positive.


4. Define false negative.


5. Write the precision formula.


6. Write the recall formula.


7. Write the F1 formula.


8. Explain precision in words.


9. Explain recall in words.


10. Why does threshold selection affect precision and recall?



78. Quick Check


Question 1


A model predicts 100 positive cases.


80 are actually positive.


What is precision?


Answer:


80 / 100 = 80%.



Question 2


There are 200 actual positive cases.


The model identifies 150.


What is recall?


Answer:


150 / 200 = 75%.



Question 3


Why can F1 be useful?


Answer:


It combines precision and recall into a single harmonic-mean measure.



79. Summary


Precision measures the correctness of positive predictions.


Recall measures the coverage of actual positive observations.


F1 combines precision and recall.


Threshold changes can alter these metrics.


For multiclass classification, macro and weighted averages provide different aggregation strategies.



80. Extended Study


Precision:


P = TP / (TP + FP).


Recall:


R = TP / (TP + FN).


F1:


F1 = 2PR / (P + R).


These metrics describe different aspects of classification behavior.


A complete evaluation should therefore consider the confusion matrix and the application's error costs rather than relying on a single number.



81. Final Reflection


When evaluating a classifier, ask:


How many positive predictions were correct?


How many actual positives were found?


How many positives were missed?


How many negatives were incorrectly flagged?


Does the application prioritize precision, recall, or a balance?

`

};

export default lesson9;