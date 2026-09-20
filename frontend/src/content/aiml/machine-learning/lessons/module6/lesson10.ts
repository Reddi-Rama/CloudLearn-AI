const lesson10 = {

  id: "lesson10",

  title: "Comparing Text Classification Models",

  content: `

Lesson 10

Comparing Text Classification Models


1. Introduction


Building one text classifier is only part of a machine learning workflow.


A practical project often requires comparing multiple models and representations.



2. Candidate Models


Common classical text classifiers include:


Naive Bayes.


Logistic Regression.


Linear Support Vector Machines.



3. Candidate Representations


Common representations include:


Bag-of-Words.


TF-IDF.


Word n-grams.


Character n-grams.



4. Model Comparison


A fair comparison requires a consistent evaluation procedure.



5. Important Principle


Do not compare models using different:


Datasets.


Splits.


Metrics.


Validation strategies.



6. Example


Suppose we compare:


MultinomialNB.


Logistic Regression.


LinearSVC.



7. Representation


Use:


TF-IDF.



8. Validation


Use:


Five-fold cross-validation.



9. Metric


Use:


F1-score.



10. Why F1?


F1 combines:


Precision.


Recall.



11. Model Pipeline


Each model can have its own pipeline.



12. Naive Bayes


Python


nb_pipeline = Pipeline([

    (

        "tfidf",

        TfidfVectorizer()

    ),

    (

        "model",

        MultinomialNB()

    )

])



13. Logistic Regression


Python


lr_pipeline = Pipeline([

    (

        "tfidf",

        TfidfVectorizer()

    ),

    (

        "model",

        LogisticRegression(

            max_iter=1000

        )

    )

])



14. LinearSVC


Python


svm_pipeline = Pipeline([

    (

        "tfidf",

        TfidfVectorizer()

    ),

    (

        "model",

        LinearSVC()

    )

])



15. Cross-Validation


Python


from sklearn.model_selection import (

    cross_val_score

)



16. Evaluate Naive Bayes


Python


nb_scores = cross_val_score(

    nb_pipeline,

    X,

    y,

    cv=5,

    scoring="f1_macro"

)



17. Logistic Regression


Python


lr_scores = cross_val_score(

    lr_pipeline,

    X,

    y,

    cv=5,

    scoring="f1_macro"

)



18. LinearSVC


Python


svm_scores = cross_val_score(

    svm_pipeline,

    X,

    y,

    cv=5,

    scoring="f1_macro"

)



19. Mean Scores


Python


print(

    nb_scores.mean()

)


print(

    lr_scores.mean()

)


print(

    svm_scores.mean()

)



20. Standard Deviation


Python


print(

    nb_scores.std()

)


print(

    lr_scores.std()

)


print(

    svm_scores.std()

)



21. Why Standard Deviation?


A model with a high mean score but very high variation may require additional investigation.



22. Model Comparison Table


Record:


Model.


Mean score.


Standard deviation.



23. Example


Model:


Naive Bayes.


Mean F1:


measured value.



24. Another


Logistic Regression.


Mean F1:


measured value.



25. Another


LinearSVC.


Mean F1:


measured value.



26. Important Principle


Do not fill comparison values with invented numbers.


Run the experiment and record the measured results.



27. Multiple Metrics


A model can be evaluated using several metrics.



28. Classification Metrics


Accuracy.


Precision.


Recall.


F1.



29. Example


Python


from sklearn.model_selection import (

    cross_validate

)



30. Multiple Scoring


Python


scoring = {

    "accuracy": "accuracy",

    "precision": "precision_macro",

    "recall": "recall_macro",

    "f1": "f1_macro"

}



31. Evaluate


Python


results = cross_validate(

    lr_pipeline,

    X,

    y,

    cv=5,

    scoring=scoring

)



32. Mean Results


Python


print(

    results["test_f1"].mean()

)



33. Training Time


cross_validate can also return timing information.



34. Example


Python


print(

    results["fit_time"].mean()

)



35. Prediction Time


Python


print(

    results["score_time"].mean()

)



36. Why Timing Matters?


A model that is slightly more accurate but much slower may have different practical requirements.



37. Representation Comparison


Models can also be compared using different text representations.



38. Experiment


Compare:


CountVectorizer.


TfidfVectorizer.



39. Model


Use:


Logistic Regression.



40. Pipeline A


Python


count_pipeline = Pipeline([

    (

        "features",

        CountVectorizer()

    ),

    (

        "model",

        LogisticRegression(

            max_iter=1000

        )

    )

])



41. Pipeline B


Python


tfidf_pipeline = Pipeline([

    (

        "features",

        TfidfVectorizer()

    ),

    (

        "model",

        LogisticRegression(

            max_iter=1000

        )

    )

])



42. Compare


Use:


Same folds.


Same metric.



43. N-Gram Comparison


Compare:


(1, 1)



with:


(1, 2).



44. Character Comparison


Compare:


Word TF-IDF.



with:


Character TF-IDF.



45. Hyperparameter Tuning


Model comparison should not necessarily stop with default settings.



46. Example


Tune Logistic Regression:


C = 0.01.


0.1.


1.


10.



47. Grid Search


Python


param_grid = {

    "model__C": [

        0.01,

        0.1,

        1,

        10

    ]

}



48. Search


Python


search = GridSearchCV(

    lr_pipeline,

    param_grid,

    cv=5,

    scoring="f1_macro"

)



49. Fit


Python


search.fit(

    X_train,

    y_train

)



50. Best Parameters


Python


print(

    search.best_params_

)



51. Best Score


Python


print(

    search.best_score_

)



52. Fair Comparison


If one model is heavily tuned and another uses default settings, the comparison may not answer the same question.



53. Comparison Questions


Ask:


Are we comparing algorithms?


Are we comparing tuned systems?


Are we comparing representations?



54. Important Principle


Define the comparison objective before running experiments.



55. Error Analysis


After selecting promising models, inspect incorrect predictions.



56. Example


Model predicts:


Positive.



True label:


Negative.



57. Question


What words or phrases contributed to the prediction?



58. Linear Model


Inspect feature weights.



59. Naive Bayes


Inspect class-related feature probabilities where appropriate.



60. Confusion Matrix


Python


from sklearn.metrics import (

    ConfusionMatrixDisplay

)


ConfusionMatrixDisplay.from_predictions(

    y_test,

    predictions

)



61. Class-Specific Performance


A model may perform differently across classes.



62. Example


Class A:


High recall.



Class B:


Low recall.



63. Why?


The dataset may be imbalanced or classes may overlap.



64. Confidence and Uncertainty


Different models provide different forms of scores or probabilities.



65. Logistic Regression


Provides probability estimates.



66. LinearSVC


Provides decision scores.



67. Naive Bayes


Provides probability estimates.



68. Threshold


For probability-based classifiers, the threshold can be changed.



69. Example


Default:


0.50.



70. Alternative


0.30.



71. Effect


Lowering the threshold can increase the number of positive predictions and may change precision and recall.



72. Model Stability


Repeat experiments when appropriate to determine whether conclusions depend heavily on one random split.



73. Reproducibility


Use:


random_state.



74. Experiment Record


For every experiment record:


Dataset.


Representation.


Model.


Hyperparameters.


Validation strategy.


Metric.


Mean score.


Standard deviation.


Runtime.



75. Experiment 1


Compare three models using TF-IDF.



76. Experiment 2


Compare CountVectorizer and TF-IDF using Logistic Regression.



77. Experiment 3


Compare unigram and unigram-bigram representations.



78. Experiment 4


Compare word and character features.



79. Experiment 5


Tune the strongest candidate.



80. Experiment 6


Perform error analysis.



81. Final Selection


Select the final candidate according to:


Validation evidence.


Relevant metrics.


Computational constraints.


Interpretability.


Application requirements.



82. Important Principle


The model with the largest numerical score is not automatically the best practical solution.



83. Common Mistakes


Mistake 1:


Using different splits.


Mistake 2:


Using different metrics.


Mistake 3:


Comparing tuned and untuned systems without documenting the difference.


Mistake 4:


Looking only at average score.


Mistake 5:


Ignoring runtime.


Mistake 6:


Ignoring class-specific errors.


Mistake 7:


Repeatedly checking the test set during experimentation.



84. Practice


1. Why compare multiple text classifiers?


2. Why use the same cross-validation folds?


3. Why record standard deviation?


4. Why compare representations?


5. What is the purpose of cross_validate?


6. Why record fit time?


7. Why perform error analysis?


8. What information can a confusion matrix provide?


9. Why can threshold selection matter?



85. Quick Check


Question 1


Can two models be compared fairly if one is evaluated with accuracy and the other with F1?


Answer:


Not directly. A consistent comparison should use an appropriate common evaluation framework.



Question 2


Why record fit time?


Answer:


Computational cost can matter in practical applications.



Question 3


Should the test set be repeatedly checked during model comparison?


Answer:


No. It should remain protected for final evaluation.



86. Summary


Reliable model comparison requires:


Consistent data.


Consistent validation.


Consistent metrics.


Documented preprocessing.


Comparable tuning procedures.



A complete comparison should examine:


Performance.


Stability.


Errors.


Runtime.


Practical requirements.



87. Extended Study


Model comparison can be viewed as comparing complete procedures:


Pipeline₁.


Pipeline₂.


Pipeline₃.



For each procedure:


Estimate validation performance.


Measure variability.


Analyze errors.


Measure computational requirements.



88. Final Reflection


The goal of model comparison is not simply to produce a leaderboard.


The goal is to understand how different modeling choices affect:


Predictive performance.


Generalization.


Interpretability.


Computational cost.


Practical usefulness.



A disciplined comparison process leads to better machine learning decisions.

`

};

export default lesson10;