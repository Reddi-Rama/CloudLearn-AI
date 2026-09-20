const lesson12 = {

  id: "lesson12",

  title: "Precision-Recall Curve and Average Precision",

  content: `

Lesson 12

Precision-Recall Curve and Average Precision


1. Introduction


Classification models often produce a probability or decision score rather than only a final class label.


For example:


Customer A:


Probability of positive class = 0.91.


Customer B:


Probability of positive class = 0.62.


Customer C:


Probability of positive class = 0.18.



2. Classification Threshold


A threshold converts prediction scores into class labels.


For example:


Threshold = 0.50.



3. Example


Probability:


0.72.


Threshold:


0.50.


Prediction:


Positive.



4. Changing the Threshold


If the threshold becomes:


0.80.


The same probability:


0.72.


would be classified as:


Negative.



5. Why Threshold Matters


Changing the threshold changes:


True positives.


False positives.


True negatives.


False negatives.


Therefore, it also changes:


Precision.


Recall.



6. Precision


Precision measures the proportion of predicted positive observations that are actually positive.


Formula:


Precision


=


TP


/


(TP + FP).



7. Recall


Recall measures the proportion of actual positive observations that are identified by the model.


Formula:


Recall


=


TP


/


(TP + FN).



8. Precision-Recall Relationship


Changing the threshold can produce different precision and recall values.


A precision-recall curve shows this relationship across different thresholds.



9. Precision-Recall Curve


The precision-recall curve plots:


Recall.


against:


Precision.



10. Axes


Typically:


x-axis:


Recall.


y-axis:


Precision.



11. Why Use the Curve?


Instead of evaluating one threshold, we can examine model behavior across many thresholds.



12. High Recall


High recall means:


Most actual positive observations are detected.



13. High Precision


High precision means:


Most observations predicted as positive are actually positive.



14. Threshold Trade-Off


Lowering the threshold often causes:


More positive predictions.


Higher recall.


Potentially lower precision.



15. Increasing the Threshold


Increasing the threshold often causes:


Fewer positive predictions.


Potentially higher precision.


Potentially lower recall.



16. Important Note


The exact relationship depends on the model's score distribution.



17. Why Precision-Recall Can Be Useful


Precision-recall analysis is particularly informative when the positive class is relatively rare.



18. Imbalanced Example


Suppose:


10,000 observations.


9,800 negative.


200 positive.



19. Accuracy Problem


A model predicting every observation as negative obtains:


9,800 / 10,000


=


98% accuracy.



20. But Recall


Positive recall:


0%.



21. Precision-Recall View


Precision and recall focus directly on the positive class.


This can make them useful for analyzing rare-event classification.



22. Example Applications


Fraud detection.


Spam detection.


Rare disease screening.


Defect detection.


Security alerts.



23. Precision-Recall Curve vs ROC Curve


ROC curve:


TPR vs FPR.



Precision-recall curve:


Precision vs Recall.



24. False Positives


ROC uses:


False Positive Rate.


Precision directly reflects:


False Positives among predicted positives.



25. When Positives Are Rare


A small number of false positives can have a large effect on precision when positive predictions are relatively uncommon.



26. Example


Suppose:


TP = 90.


FP = 10.


Precision:


90 / 100.


=


90%.



27. More False Positives


Suppose:


TP = 90.


FP = 90.


Precision:


90 / 180.


=


50%.



28. Recall


If there are:


100 actual positives.


and:


90 are detected.


Recall:


90%.



29. Average Precision


Average Precision, commonly abbreviated AP, summarizes the precision-recall relationship across thresholds.



30. Important Idea


AP is not simply:


(Precision + Recall) / 2.



31. Average Precision and Ranking


Average Precision evaluates how well positive observations are ranked ahead of negative observations while considering the precision-recall relationship.



32. scikit-learn


Python


from sklearn.metrics import (

    precision_recall_curve,

    average_precision_score

)



33. Generate Probabilities


Python


probabilities = (

    model.predict_proba(

        X_test

    )[:, 1]

)



34. Precision-Recall Values


Python


precision, recall, thresholds = (

    precision_recall_curve(

        y_test,

        probabilities

    )

)



35. Average Precision


Python


ap = average_precision_score(

    y_test,

    probabilities

)


print(
    "Average Precision:",
    ap
)



36. Plot the Curve


Python


import matplotlib.pyplot as plt


plt.plot(

    recall,

    precision

)


plt.xlabel(
    "Recall"
)


plt.ylabel(
    "Precision"
)


plt.title(
    "Precision-Recall Curve"
)


plt.show()



37. Baseline Precision


For a binary classification problem, the prevalence of the positive class provides an important baseline for precision-recall analysis.



38. Example


If only:


5%


of observations are positive, the positive-class prevalence is:


0.05.



39. Why This Matters


A precision of:


0.10


has a different meaning when positive prevalence is:


0.01


than when it is:


0.50.



40. Average Precision Interpretation


A larger AP generally indicates better precision-recall ranking behavior.


However, AP values should be interpreted in the context of class prevalence and the application.



41. Threshold Selection


A precision-recall curve can help explore possible thresholds.



42. Example Requirement


Suppose a system requires:


Recall ≥ 0.90.


We can inspect thresholds that provide approximately that recall and examine the corresponding precision.



43. Another Requirement


Suppose the system requires:


Precision ≥ 0.95.


The curve can help identify thresholds that satisfy that requirement, subject to the model's available scores.



44. Operational Threshold


The final threshold should reflect:


Error costs.


Available resources.


Business requirements.



45. Precision at a Selected Threshold


Python


predictions = (

    probabilities >= 0.6

).astype(int)



46. Evaluate


Python


from sklearn.metrics import (

    precision_score,

    recall_score

)


print(

    precision_score(

        y_test,

        predictions

    )

)


print(

    recall_score(

        y_test,

        predictions

    )

)



47. Compare Thresholds


Python


for threshold in [

    0.3,

    0.5,

    0.7

]:

    predictions = (

        probabilities >= threshold

    ).astype(int)

    precision = precision_score(

        y_test,

        predictions,

        zero_division=0

    )

    recall = recall_score(

        y_test,

        predictions

    )

    print(

        threshold,

        precision,

        recall

    )



48. Interpretation


The output demonstrates how changing the threshold can change precision and recall.



49. Cross-Validation with Average Precision


Average Precision can also be used as a cross-validation scoring metric.



50. Python


from sklearn.model_selection import (
    cross_val_score
)


scores = cross_val_score(

    model,

    X,

    y,

    cv=5,

    scoring="average_precision"

)



51. Mean AP


Python


print(
    scores.mean()
)



52. Standard Deviation


Python


print(
    scores.std()
)



53. ROC-AUC vs Average Precision


ROC-AUC evaluates:


TPR vs FPR.



Average Precision evaluates:


Precision-recall behavior.



54. Important Difference


A model can have a strong ROC-AUC while its precision at an operational threshold is not sufficient for a highly imbalanced application.



55. Choosing Between Metrics


Use the metric that reflects the actual evaluation objective.


For rare positive events, precision-recall analysis may provide particularly useful information.



56. Experiment


Create an imbalanced classification dataset.


Train a logistic regression model.



57. Evaluate


Calculate:


Accuracy.


ROC-AUC.


Average Precision.


Precision.


Recall.



58. Experiment 2


Plot:


ROC curve.


Precision-recall curve.



59. Experiment 3


Compare thresholds:


0.2.


0.4.


0.6.


0.8.



60. Experiment 4


Record:


Threshold.


Precision.


Recall.



61. Experiment 5


Identify a threshold that satisfies a chosen recall requirement.


Then examine the resulting precision.



62. Common Mistakes


Mistake 1:


Using hard class predictions to calculate the precision-recall curve.


Mistake 2:


Confusing AP with average precision and recall values.


Mistake 3:


Ignoring positive-class prevalence.


Mistake 4:


Choosing a threshold without considering application requirements.


Mistake 5:


Using ROC-AUC alone for a severely imbalanced problem.


Mistake 6:


Evaluating thresholds repeatedly on the final test set.



63. Practice


1. What is a precision-recall curve?


2. What is plotted on its axes?


3. What happens to recall when the classification threshold is lowered?


4. What is Average Precision?


5. Why can precision-recall analysis be useful for imbalanced data?


6. How is a PR curve different from an ROC curve?


7. Why should prediction probabilities be used to generate the curve?


8. What is positive-class prevalence?



64. Quick Check


Question 1


What does precision measure?


Answer:


The proportion of predicted positives that are actually positive.



Question 2


What does recall measure?


Answer:


The proportion of actual positives that are correctly identified.



Question 3


Why can PR analysis be useful for rare positive events?


Answer:


It focuses directly on precision and recall for the positive class.



65. Summary


The precision-recall curve evaluates classification behavior across thresholds.


It focuses on:


Precision.


Recall.



Average Precision summarizes precision-recall ranking behavior across thresholds.


PR analysis is particularly useful when the positive class is relatively rare.



66. Extended Study


For threshold t:


Precision(t)


=


TP(t)


/


TP(t) + FP(t).



Recall(t)


=


TP(t)


/


TP(t) + FN(t).



The precision-recall curve traces:


(Recall(t), Precision(t))


as the threshold changes.



67. Final Reflection


When positive events are rare, ask:


How many positive predictions are correct?


How many actual positives are detected?


How many false alarms are generated?


What threshold provides an acceptable trade-off?


A good classification evaluation should connect these measurements to the real-world objective.

`

};

export default lesson12;