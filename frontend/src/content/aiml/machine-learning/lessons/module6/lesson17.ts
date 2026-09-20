const lesson17 = {

  id: "lesson17",

  title: "Handling Imbalanced Text Classification",

  content: `

Lesson 17

Handling Imbalanced Text Classification


1. Introduction


A classification dataset is imbalanced when some classes contain substantially more examples than others.



2. Example


Suppose a spam-detection dataset contains:


Normal messages:


9500.



Spam messages:


500.



3. Class Ratio


The dataset contains:


95% normal.


5% spam.



4. Why This Matters


A model that always predicts:


normal.



would achieve:


95% accuracy.



5. Problem


The model would identify:


0 spam messages.



6. Main Lesson


Accuracy alone can be misleading for imbalanced classification.



7. Minority Class


The less frequent class is often called the minority class.



8. Majority Class


The more frequent class is called the majority class.



9. Example Applications


Spam detection.


Fraud detection.


Abuse detection.


Rare-event support tickets.


Medical text classification.



10. First Step


Inspect the class distribution.



11. Python


Python


print(

    y.value_counts()

)



12. Proportions


Python


print(

    y.value_counts(

        normalize=True

    )

)



13. Stratified Splitting


Use stratification when creating train-test splits for classification.



14. Example


Python


from sklearn.model_selection import (

    train_test_split

)



15. Split


Python


X_train, X_test, y_train, y_test = (

    train_test_split(

        X,

        y,

        test_size=0.2,

        random_state=42,

        stratify=y

    )

)



16. Why Stratification?


It attempts to preserve class proportions across the split.



17. Evaluation Metrics


Useful metrics include:


Precision.


Recall.


F1-score.


Confusion matrix.


PR-AUC / Average Precision.



18. Recall


Recall answers:


Of the actual positive examples, how many did the model identify?



19. Formula


Recall


=


TP


/


(TP + FN).



20. Precision


Precision answers:


Of the examples predicted positive, how many were actually positive?



21. Formula


Precision


=


TP


/


(TP + FP).



22. F1


F1 combines precision and recall using their harmonic mean.



23. Formula


F1


=


2 × Precision × Recall


/


(Precision + Recall).



24. Why F1?


It is useful when both false positives and false negatives matter.



25. Precision-Recall Curve


For strongly imbalanced classification, precision-recall analysis can be especially informative.



26. Baseline


Always establish a simple baseline.



27. Dummy Classifier


Python


from sklearn.dummy import (

    DummyClassifier

)



28. Example


Python


baseline = DummyClassifier(

    strategy="most_frequent"

)



29. Fit


Python


baseline.fit(

    X_train,

    y_train

)



30. Compare


Compare the real model against the baseline using appropriate metrics.



31. Text Model


A common baseline is:


TF-IDF


+


Logistic Regression.



32. Example


Python


from sklearn.pipeline import Pipeline


from sklearn.feature_extraction.text import TfidfVectorizer


from sklearn.linear_model import LogisticRegression



33. Model


Python


model = Pipeline([

    (

        "tfidf",

        TfidfVectorizer(

            min_df=2

        )

    ),

    (

        "classifier",

        LogisticRegression(

            max_iter=1000

        )

    )

])



34. Class Weights


Some classifiers support:


class_weight="balanced".



35. Example


Python


LogisticRegression(

    class_weight="balanced",

    max_iter=1000

)



36. Meaning


The training objective gives more importance to underrepresented classes.



37. Important Warning


Class weighting does not automatically solve every imbalance problem.



38. Threshold


Many classifiers produce a score or probability.



39. Default Threshold


For binary logistic regression, a common default decision threshold is:


0.5.



40. Example


Python


probabilities = model.predict_proba(

    X_test

)[:, 1]



41. Custom Threshold


Python


threshold = 0.30


predictions = (

    probabilities >= threshold

).astype(int)



42. Lower Threshold


May increase recall while decreasing precision.



43. Higher Threshold


May increase precision while decreasing recall.



44. Important Principle


Threshold selection should be based on the cost of different errors.



45. Example


Spam Detection


False positive:


A legitimate message is classified as spam.



46. False Negative


A spam message reaches the user.



47. Trade-Off


The application must determine which error is more costly.



48. Oversampling


One approach is to increase the representation of the minority class in the training data.



49. Random Oversampling


Minority examples may be sampled more frequently.



50. Important Warning


Oversampling must be applied only to training data.



51. Why?


If oversampling occurs before the train-test split, duplicated minority examples may appear in both sets.



52. Undersampling


Another approach reduces the number of majority-class examples.



53. Benefit


Can make training more balanced.



54. Limitation


Potentially useful majority examples may be discarded.



55. Text-Specific Consideration


Synthetic oversampling methods designed for numerical feature spaces require careful consideration when applied to sparse text features.



56. Class Weights


For many text classifiers, class weighting is a simple first strategy.



57. Evaluation


Always compare multiple approaches using the same validation protocol.



58. Cross-Validation


Use stratified cross-validation for classification when appropriate.



59. Example


Python


from sklearn.model_selection import (

    StratifiedKFold,

    cross_validate

)



60. Cross-Validation


Python


cv = StratifiedKFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)



61. Evaluate


Python


results = cross_validate(

    model,

    X_train,

    y_train,

    cv=cv,

    scoring=[

        "precision",

        "recall",

        "f1"

    ]

)



62. Average


Inspect the mean and variation across folds.



63. Confusion Matrix


The confusion matrix provides detailed information about:


True positives.


True negatives.


False positives.


False negatives.



64. Example


Python


from sklearn.metrics import (

    confusion_matrix

)



65. Calculate


Python


cm = confusion_matrix(

    y_test,

    predictions

)



66. Interpretation


The matrix helps identify which type of mistake the model makes most often.



67. Macro vs Weighted Metrics


For multiclass classification, averaging strategy matters.



68. Macro Average


Computes the metric independently for each class and then gives each class equal weight.



69. Weighted Average


Weights each class according to its number of samples.



70. Important Difference


Weighted averages can hide poor performance on a minority class.



71. Example


A model may have:


weighted F1 = 0.95.



while:


minority-class F1 = 0.60.



72. Lesson


Always inspect class-level metrics when minority-class performance matters.



73. Multiclass Imbalance


The same principles apply when there are more than two classes.



74. Example


Support-ticket categories:


billing.


technical.


account.


security.



75. Distribution


One category may have many more examples than another.



76. Evaluation


Use:


Per-class precision.


Per-class recall.


Per-class F1.



77. Decision Thresholds


Binary classifiers make threshold adjustment straightforward.


Multiclass thresholding is more complex and depends on the model and decision strategy.



78. Data Quality


Imbalance may sometimes reflect the real world.



79. Important Point


Do not automatically force every dataset to contain equal class counts.



80. Example


If only a small percentage of transactions are fraudulent, that imbalance may reflect the actual problem.



81. Better Goal


Build a model that performs well under the real distribution and application costs.



82. Experiment 1


Create an imbalanced text dataset.



83. Baseline


Train a most-frequent classifier.



84. Model


Train Logistic Regression.



85. Compare


Accuracy.


Precision.


Recall.


F1.



86. Experiment 2


Train Logistic Regression with:


class_weight="balanced".



87. Compare


Minority-class recall.


Minority-class precision.


F1.



88. Experiment 3


Change the decision threshold.



89. Record


Precision and recall for:


0.20.


0.30.


0.40.


0.50.


0.60.


0.70.



90. Plot


Create a precision-recall trade-off graph.



91. Experiment 4


Use stratified cross-validation.



92. Compare


Mean and standard deviation of metrics.



93. Experiment 5


Inspect the confusion matrix.



94. Identify


Which errors are most common?



95. Experiment 6


Compare macro F1 with weighted F1.



96. Common Mistakes


Mistake 1:


Using accuracy as the only metric.


Mistake 2:


Ignoring the minority class.


Mistake 3:


Oversampling before splitting the dataset.


Mistake 4:


Changing the test-set distribution artificially.


Mistake 5:


Choosing thresholds using the test set.


Mistake 6:


Reporting only weighted averages.



97. Practice


1. What is class imbalance?


2. Why can accuracy be misleading?


3. What is minority-class recall?


4. What does class_weight="balanced" do?


5. Why should oversampling occur only on training data?


6. What is threshold tuning?


7. Why are precision and recall useful for imbalanced classification?


8. What is macro averaging?



98. Quick Check


Question 1


Can a 95% accuracy model be useless?


Answer:


Yes. If the majority class represents 95% of the data, always predicting the majority class can achieve 95% accuracy without detecting the minority class.



Question 2


What happens when the classification threshold is lowered?


Answer:


It often increases recall and can reduce precision, although the exact effect depends on the model and data.



Question 3


Should the test set be oversampled?


Answer:


No. The evaluation set should normally represent the intended real-world distribution.



99. Summary


Imbalanced text classification requires careful evaluation.


Important techniques include:


Stratified splitting.


Class weighting.


Threshold tuning.


Appropriate metrics.


Precision-recall analysis.


Confusion matrices.


Class-level evaluation.



100. Extended Study


The correct evaluation objective depends on the application.


For one system:


Recall may be critical.



For another:


Precision may be more important.



For another:


A balanced F1 score may be appropriate.



Therefore:


Metric selection should follow the real-world cost of errors.



101. Final Reflection


Imbalanced classification is not primarily about making classes equal.


It is about making model evaluation and decision-making meaningful under an uneven class distribution.


A strong workflow is:


Inspect distribution.


Create a baseline.


Use stratified evaluation.


Choose appropriate metrics.


Tune the model.


Tune the threshold when appropriate.


Analyze errors.


Validate on untouched data.

`

};

export default lesson17;