const lesson10 = {

  id: "lesson10",

  title: "Confusion Matrix",

  content: `

Lesson 10

Confusion Matrix


1. Introduction


A confusion matrix is one of the most useful tools for understanding classification predictions.


Instead of reporting only one score, it shows how predictions are distributed across actual and predicted classes.



2. Binary Classification


For binary classification, there are four basic outcomes:


True Positive.


True Negative.


False Positive.


False Negative.



3. Matrix Structure


A binary confusion matrix can be represented as:


                 Predicted Positive


                 Predicted Negative


Actual Positive:


TP.


FN.


Actual Negative:


FP.


TN.



4. True Positive


Actual:


Positive.


Predicted:


Positive.



5. True Negative


Actual:


Negative.


Predicted:


Negative.



6. False Positive


Actual:


Negative.


Predicted:


Positive.



7. False Negative


Actual:


Positive.


Predicted:


Negative.



8. Example


Suppose a model predicts whether a transaction is fraudulent.


TP:


Fraud predicted as fraud.



9. TN


Legitimate transaction predicted as legitimate.



10. FP


Legitimate transaction predicted as fraud.



11. FN


Fraudulent transaction predicted as legitimate.



12. Why Confusion Matrices Matter


They reveal the types of errors made by the classifier.



13. Accuracy From Confusion Matrix


Accuracy:


(TP + TN)


/


(TP + TN + FP + FN).



14. Precision From Confusion Matrix


Precision:


TP


/


(TP + FP).



15. Recall From Confusion Matrix


Recall:


TP


/


(TP + FN).



16. Specificity


Specificity measures the proportion of actual negatives correctly identified.


Formula:


Specificity


=


TN


/


(TN + FP).



17. False Positive Rate


False Positive Rate:


FPR


=


FP


/


(FP + TN).



18. Relationship


FPR:


=


1 − Specificity.



19. False Negative Rate


False Negative Rate:


FNR


=


FN


/


(FN + TP).



20. Relationship


FNR:


=


1 − Recall.



21. Example Matrix


Suppose:


TP = 80.


TN = 850.


FP = 30.


FN = 40.



22. Total


Total:


80 + 850 + 30 + 40.


=


1000.



23. Accuracy


Accuracy:


(80 + 850) / 1000.


=


93%.



24. Precision


Precision:


80 / (80 + 30).


≈


72.7%.



25. Recall


Recall:


80 / (80 + 40).


≈


66.7%.



26. Specificity


Specificity:


850 / (850 + 30).


≈


96.6%.



27. Why Accuracy Can Hide Errors


Suppose negative observations are much more common than positive observations.


A model can produce high accuracy while still generating many false negatives.



28. Confusion Matrix Reveals This


The matrix makes FP and FN visible.



29. scikit-learn


Python


from sklearn.metrics import (
    confusion_matrix
)



30. Calculate


Python


cm = confusion_matrix(

    y_test,

    predictions

)



31. Print


Python


print(
    cm
)



32. Example Output


A binary confusion matrix may look like:


[[850, 30],
 [ 40, 80]]



33. Reading the Matrix


The first row corresponds to actual Class 0.


The second row corresponds to actual Class 1.



34. First Row


850:


Actual 0 predicted as 0.


30:


Actual 0 predicted as 1.



35. Second Row


40:


Actual 1 predicted as 0.


80:


Actual 1 predicted as 1.



36. Important Note


The exact orientation should be confirmed from the library documentation or implementation being used.


For scikit-learn:


Rows represent true classes.


Columns represent predicted classes.



37. Visualization


A confusion matrix can be displayed as a heatmap.



38. Python


import matplotlib.pyplot as plt


from sklearn.metrics import (
    ConfusionMatrixDisplay
)


ConfusionMatrixDisplay.from_predictions(

    y_test,

    predictions

)


plt.show()



39. Why Visualization Helps


A visual matrix makes large differences between correct and incorrect predictions easier to notice.



40. Normalized Confusion Matrix


The confusion matrix can also be normalized.



41. Python


ConfusionMatrixDisplay.from_predictions(

    y_test,

    predictions,

    normalize="true"

)


plt.show()



42. Meaning


With:


normalize="true"


each row is normalized relative to the actual class.



43. Why Normalize?


Normalization can make class-specific performance easier to compare when class counts are different.



44. Multiclass Classification


A confusion matrix can contain more than two classes.



45. Example


Classes:


Cat.


Dog.


Bird.



46. Matrix


The matrix becomes:


3 × 3.



47. Interpretation


Diagonal entries:


Correct predictions.



Off-diagonal entries:


Misclassifications.



48. Example


If:


Cat predicted as Dog.


this appears in the Cat row and Dog column.



49. Multiclass Accuracy


Total correct predictions:


Sum of diagonal entries.


Total observations:


Sum of all entries.



50. Python


cm = confusion_matrix(

    y_test,

    predictions

)


accuracy = (

    cm.diagonal().sum()

    /

    cm.sum()

)



51. Classification Report


The confusion matrix can be combined with:


Precision.


Recall.


F1.



52. Python


from sklearn.metrics import (
    classification_report
)


print(

    classification_report(

        y_test,

        predictions

    )

)



53. Error Analysis


A confusion matrix is useful for identifying:


Which classes are confused.


Which classes are recognized well.


Which classes produce many false positives.


Which classes produce many false negatives.



54. Example


Suppose:


Class A is frequently predicted as Class B.


This may indicate that the classes share similar features.



55. Feature Investigation


After observing confusion between two classes, investigate:


Feature distributions.


Data quality.


Class definitions.


Label quality.



56. Label Noise


A confusing matrix pattern may sometimes reflect incorrect or ambiguous labels rather than only a weak model.



57. Imbalanced Data


For imbalanced datasets, inspect:


Confusion matrix.


Per-class recall.


Per-class precision.


F1.



58. Threshold Effects


For probabilistic binary classifiers, changing the threshold changes the confusion matrix.



59. Example


Lower threshold:


More positive predictions.



60. Possible Effect


TP may increase.


FP may increase.


FN may decrease.


TN may decrease.


The exact changes depend on the score distribution.



61. Higher Threshold


Fewer positive predictions.


Potentially:


FP decreases.


FN increases.



62. Experiment


Train a logistic regression classifier.


Generate probability predictions.



63. Python


probabilities = (

    model.predict_proba(

        X_test

    )[:, 1]

)



64. Threshold 0.5


Python


pred_05 = (

    probabilities >= 0.5

).astype(int)



65. Threshold 0.7


Python


pred_07 = (

    probabilities >= 0.7

).astype(int)



66. Compare


Python


print(
    confusion_matrix(
        y_test,
        pred_05
    )
)


print(
    confusion_matrix(
        y_test,
        pred_07
    )
)



67. Interpretation


The two matrices can differ because the classification threshold changed.



68. Practical Application


Confusion matrices are useful in:


Fraud detection.


Medical classification.


Spam filtering.


Image classification.


Customer churn prediction.



69. Common Mistakes


Mistake 1:


Reading rows and columns in the wrong orientation.


Mistake 2:


Looking only at the diagonal.


Mistake 3:


Ignoring class imbalance.


Mistake 4:


Ignoring false negatives.


Mistake 5:


Ignoring false positives.


Mistake 6:


Comparing confusion matrices with different class orderings without checking labels.



70. Practice


1. What is a confusion matrix?


2. Define TP.


3. Define TN.


4. Define FP.


5. Define FN.


6. Write the accuracy formula.


7. Write the precision formula.


8. Write the recall formula.


9. What is specificity?


10. What do off-diagonal values represent?



71. Quick Check


Question 1


A model predicts positive for a negative observation.


What is this?


Answer:


False positive.



Question 2


A model predicts negative for a positive observation.


What is this?


Answer:


False negative.



Question 3


What do diagonal values generally represent in a multiclass confusion matrix?


Answer:


Correct predictions.



72. Summary


A confusion matrix provides a detailed view of classification behavior.


It contains:


TP.


TN.


FP.


FN.


From these values we can calculate:


Accuracy.


Precision.


Recall.


Specificity.


False positive rate.


False negative rate.



73. Extended Study


The confusion matrix is the foundation for many classification metrics.


For binary classification:


TP + FN


represents all actual positives.


TN + FP


represents all actual negatives.


TP + FP


represents all predicted positives.


TN + FN


represents all predicted negatives.


Understanding these quantities makes the major classification metrics easier to interpret.



74. Final Reflection


When a classification model performs unexpectedly, do not immediately retrain it.


First inspect the confusion matrix.


Ask:


Which classes are being confused?


Are false positives common?


Are false negatives common?


Is the problem concentrated in one class?


Does changing the threshold alter the error pattern?


Confusion-matrix analysis is an important part of model diagnosis.

`

};

export default lesson10;