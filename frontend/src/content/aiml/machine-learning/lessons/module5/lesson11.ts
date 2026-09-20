const lesson11 = {

  id: "lesson11",

  title: "ROC Curve and AUC",

  content: `

Lesson 11

ROC Curve and AUC


1. Introduction


Many classification models produce a probability or decision score rather than an immediate yes-or-no decision.


For example:


Positive probability = 0.82.



2. Classification Threshold


To convert a probability into a class prediction, a threshold is used.


A common threshold is:


0.50.



3. Example


Probability:


0.82.


Threshold:


0.50.


Prediction:


Positive.



4. Changing the Threshold


Suppose the threshold becomes:


0.90.


The same probability:


0.82.


would now produce:


Negative.



5. Why Thresholds Matter


Changing the threshold changes:


True positives.


False positives.


True negatives.


False negatives.



6. ROC Curve


The Receiver Operating Characteristic curve, or ROC curve, evaluates classifier behavior across different classification thresholds.



7. ROC Axes


The ROC curve plots:


True Positive Rate.


against:


False Positive Rate.



8. True Positive Rate


True Positive Rate is another name for:


Recall.


Formula:


TPR


=


TP


/


(TP + FN).



9. False Positive Rate


Formula:


FPR


=


FP


/


(FP + TN).



10. Interpretation


TPR asks:


How many actual positives are detected?


FPR asks:


How many actual negatives are incorrectly classified as positive?



11. Threshold Movement


When the threshold changes, TPR and FPR change.



12. ROC Points


Each classification threshold produces a point:


(FPR, TPR).



13. ROC Curve


Connecting these points creates the ROC curve.



14. Ideal Behavior


A model with strong class separation tends to achieve:


High TPR.


while maintaining:


Low FPR.



15. Random Classification


A random classifier has an expected ROC curve near the diagonal line.



16. Diagonal


The diagonal represents approximately:


TPR = FPR.



17. AUC


AUC means:


Area Under the ROC Curve.



18. ROC-AUC


ROC-AUC summarizes the area under the ROC curve.



19. Range


ROC-AUC generally lies between:


0 and 1.



20. Interpretation


A value near:


1.


indicates strong ranking/separation behavior.


A value near:


0.5.


is consistent with approximately random ranking in many binary settings.



21. Important Note


ROC-AUC is not the same thing as classification accuracy.



22. Ranking Interpretation


ROC-AUC can be interpreted in terms of ranking positive examples above negative examples.


Under common assumptions, it corresponds to the probability that a randomly selected positive receives a higher score than a randomly selected negative.



23. Example


Suppose:


ROC-AUC = 0.90.


This indicates strong ability to rank positive observations above negative observations under that interpretation.



24. Threshold Independence


Unlike accuracy at one threshold, ROC-AUC considers model scores across many thresholds.



25. Why This Can Be Useful


It allows us to evaluate the ranking quality of a probabilistic classifier without committing to one specific classification threshold.



26. scikit-learn


Python


from sklearn.metrics import (
    roc_curve,
    roc_auc_score
)



27. Probability Predictions


Use probability estimates or decision scores.



28. Logistic Regression


Python


probabilities = (

    model.predict_proba(

        X_test

    )[:, 1]

)



29. ROC-AUC


Python


auc = roc_auc_score(

    y_test,

    probabilities

)


print(
    "ROC-AUC:",
    auc
)



30. ROC Curve


Python


fpr, tpr, thresholds = (

    roc_curve(

        y_test,

        probabilities

    )

)



31. Plot


Python


import matplotlib.pyplot as plt


plt.plot(
    fpr,
    tpr
)


plt.xlabel(
    "False Positive Rate"
)


plt.ylabel(
    "True Positive Rate"
)


plt.title(
    "ROC Curve"
)


plt.show()



32. Baseline


A random classifier is represented by approximately:


TPR = FPR.



33. Plotting the Baseline


Python


plt.plot(

    [0, 1],

    [0, 1],

    linestyle="--"

)



34. Complete Plot


Python


plt.plot(
    fpr,
    tpr,
    label="Model"
)


plt.plot(

    [0, 1],

    [0, 1],

    linestyle="--",

    label="Random"

)


plt.xlabel(
    "False Positive Rate"
)


plt.ylabel(
    "True Positive Rate"
)


plt.legend()


plt.show()



35. Threshold Array


roc_curve returns threshold values associated with the ROC points.



36. Why Thresholds Matter


A threshold determines which scores are converted into positive predictions.



37. High Threshold


A high threshold usually means:


Fewer positive predictions.



38. Potential Effect


TPR may decrease.


FPR may decrease.



39. Low Threshold


A low threshold usually means:


More positive predictions.



40. Potential Effect


TPR may increase.


FPR may increase.



41. Trade-Off


The ROC curve visualizes this trade-off.



42. Example


Suppose a fraud detector has:


Threshold = 0.2.


Many transactions are flagged.


This may produce:


High recall.


Higher false positive rate.



43. Higher Threshold


Threshold = 0.8.


Fewer transactions are flagged.


This may produce:


Lower recall.


Lower false positive rate.



44. Choosing a Threshold


ROC-AUC does not automatically determine the operational threshold.


The threshold should be chosen based on:


Application requirements.


Error costs.


Available resources.



45. ROC-AUC and Imbalanced Data


ROC-AUC can remain informative under class imbalance because it considers TPR and FPR.


However, it should not automatically be treated as the only metric for highly imbalanced problems.



46. Precision-Recall Curve


For strongly imbalanced classification, a precision-recall curve can sometimes provide a more informative view of positive-class performance.



47. Important Distinction


ROC-AUC evaluates ranking/separation across thresholds.


Precision and recall describe positive-class behavior at a selected threshold.



48. Example


A model may have:


High ROC-AUC.


but an operational threshold may still produce an undesirable precision-recall balance.



49. ROC-AUC vs Accuracy


Accuracy:


Requires a classification threshold.


ROC-AUC:


Uses the ranking of prediction scores across thresholds.



50. ROC-AUC vs F1


F1:


Evaluates precision and recall at a selected threshold.


ROC-AUC:


Summarizes ranking behavior across thresholds.



51. Multiclass ROC-AUC


ROC-AUC can also be extended to multiclass classification.


However, the averaging strategy must be specified.



52. Common Strategies


One-vs-rest approaches can produce class-specific scores that are then aggregated.



53. Example


Python


roc_auc_score(

    y_test,

    probabilities,

    multi_class="ovr"

)



54. Important Note


The exact input format depends on the number of classes and the probability matrix supplied.



55. Experiment


Train a logistic regression classifier on a binary dataset.



56. Generate Probabilities


Python


probabilities = (

    model.predict_proba(

        X_test

    )[:, 1]

)



57. Calculate AUC


Python


auc = roc_auc_score(

    y_test,

    probabilities

)



58. Generate Curve


Python


fpr, tpr, thresholds = (

    roc_curve(

        y_test,

        probabilities

    )

)



59. Plot


Create the ROC curve and inspect its shape.



60. Compare Models


Train:


Logistic Regression.


Decision Tree.


Random Forest.



61. Calculate AUC


Python


for name, model in models.items():

    model.fit(

        X_train,

        y_train

    )

    probabilities = (

        model.predict_proba(

            X_test

        )[:, 1]

    )

    auc = roc_auc_score(

        y_test,

        probabilities

    )

    print(

        name,

        auc

    )



62. Important Evaluation Principle


Use the same test data and evaluation procedure when comparing models.



63. Cross-Validation AUC


ROC-AUC can also be used as a cross-validation scoring metric.



64. Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=5,

    scoring="roc_auc"

)



65. Mean AUC


Python


print(
    scores.mean()
)



66. Standard Deviation


Python


print(
    scores.std()
)



67. Probability Calibration


ROC-AUC does not require perfectly calibrated probabilities.


It mainly evaluates ranking.


A model can have good ROC-AUC while its probability estimates are poorly calibrated.



68. Example


A model might rank:


A > B > C.


correctly.


But its predicted probabilities might still be:


0.99.


0.95.


0.90.


even if the actual probabilities are much lower.



69. Important Distinction


Ranking quality and probability calibration are different concepts.



70. Common Mistakes


Mistake 1:


Using class labels instead of probabilities for ROC-AUC.


Mistake 2:


Interpreting ROC-AUC as accuracy.


Mistake 3:


Assuming high ROC-AUC guarantees good precision at the chosen threshold.


Mistake 4:


Ignoring class imbalance.


Mistake 5:


Choosing an operational threshold solely from ROC-AUC.


Mistake 6:


Using test data repeatedly to choose the threshold.



71. Practice


1. What is a ROC curve?


2. What does the x-axis represent?


3. What does the y-axis represent?


4. Define TPR.


5. Define FPR.


6. What is AUC?


7. What does ROC-AUC approximately 0.5 represent?


8. Why are probabilities used instead of hard class labels?


9. How does changing the threshold affect TPR and FPR?


10. Why might precision-recall analysis be useful for highly imbalanced problems?



72. Quick Check


Question 1


What is plotted on the ROC y-axis?


Answer:


True Positive Rate.



Question 2


What is plotted on the ROC x-axis?


Answer:


False Positive Rate.



Question 3


What does ROC-AUC summarize?


Answer:


The area under the ROC curve, representing classification ranking/separation performance across thresholds.



Question 4


Does ROC-AUC automatically choose the production threshold?


Answer:


No.



73. Summary


The ROC curve evaluates classifier behavior across thresholds.


Its axes are:


True Positive Rate.


False Positive Rate.


ROC-AUC summarizes the area under this curve.


It evaluates ranking/separation rather than performance at only one classification threshold.



74. Extended Study


For a threshold t, define:


ŷᵢ(t)


as the predicted class produced using threshold t.


Then:


TPR(t)


=


TP(t)


/


(TP(t) + FN(t)).



Similarly:


FPR(t)


=


FP(t)


/


(FP(t) + TN(t)).



The ROC curve traces:


(FPR(t), TPR(t))


as t changes.



75. Final Reflection


When using ROC-AUC, ask:


Am I using prediction scores?


Is the problem binary or multiclass?


Is class imbalance significant?


Do I also need precision-recall analysis?


What threshold will be used operationally?


Does the selected threshold reflect the real cost of errors?


ROC-AUC is a useful evaluation tool, but it should be interpreted alongside other metrics and the actual requirements of the machine learning problem.

`

};

export default lesson11;