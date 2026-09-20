const lesson9 = {

  id: "lesson9",

  title: "Linear Models for Text Classification",

  content: `

Lesson 09

Linear Models for Text Classification


1. Introduction


Linear models are among the most important classical approaches for text classification.


They are especially effective when text is represented using:


Bag-of-Words.


TF-IDF.


N-grams.



2. Why Linear Models?


Text representations can contain:


Thousands.


Hundreds of thousands.


or even millions.


of sparse features.



3. Linear Models


A linear classifier computes a weighted combination of features.



4. Basic Mathematical Form


For a binary classification problem:


z = w₁x₁ + w₂x₂ + ... + wₙxₙ + b



5. Symbols


xᵢ:


Feature value.



wᵢ:


Learned feature weight.



b:


Bias term.



6. Decision


The model uses the resulting score to determine the predicted class.



7. Text Interpretation


Each word or n-gram can receive a learned weight.



8. Example


Suppose features include:


excellent.


poor.


fast.


slow.



9. Learned Weights


The model might learn positive weights for:


excellent.


fast.



10. Negative Weights


It might learn negative weights for:


poor.


slow.



11. Important Point


The exact weights depend on the training data.



12. Logistic Regression


Logistic Regression is a widely used linear classifier.



13. Import


Python


from sklearn.linear_model import (

    LogisticRegression

)



14. Text Pipeline


Python


from sklearn.pipeline import Pipeline


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)


pipeline = Pipeline([

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



15. Fit


Python


pipeline.fit(

    X_train,

    y_train

)



16. Predict


Python


predictions = pipeline.predict(

    X_test

)



17. Probabilities


Logistic Regression can provide probability estimates.



18. Python


probabilities = pipeline.predict_proba(

    X_test

)



19. Decision Function


Linear models can also expose a decision score.



20. Mathematical Intuition


Logistic Regression converts the linear score into a probability using the logistic function.



21. Logistic Function


σ(z)


=


1 / (1 + e⁻ᶻ)



22. Interpretation


The output lies between:


0.


and:


1.



23. Classification


A threshold can be applied to the probability to obtain a class prediction.



24. Regularization


Text datasets often contain many features.


Regularization helps control model complexity.



25. Logistic Regression Parameter


C.



26. Important Interpretation


In scikit-learn's LogisticRegression:


larger C


means weaker regularization.



27. Smaller C


means stronger regularization.



28. Example


Python


model = LogisticRegression(

    C=0.1,

    max_iter=1000

)



29. Tuning C


Python


param_grid = {

    "model__C": [

        0.01,

        0.1,

        1,

        10

    ]

}



30. Grid Search


Python


search = GridSearchCV(

    pipeline,

    param_grid,

    cv=5,

    scoring="f1"

)



31. Linear Support Vector Machine


Another strong text-classification approach is:


LinearSVC.



32. Import


Python


from sklearn.svm import (

    LinearSVC

)



33. Pipeline


Python


pipeline = Pipeline([

    (

        "tfidf",

        TfidfVectorizer()

    ),

    (

        "model",

        LinearSVC()

    )

])



34. Fit


Python


pipeline.fit(

    X_train,

    y_train

)



35. Predict


Python


predictions = pipeline.predict(

    X_test

)



36. Decision Function


LinearSVC provides decision scores through:


decision_function.



37. Example


Python


scores = pipeline.decision_function(

    X_test

)



38. Logistic Regression vs LinearSVC


Both can work well with sparse text features.


They use different optimization and prediction approaches.



39. Logistic Regression


Provides:


Class probabilities.


Decision scores.



40. LinearSVC


Provides:


Decision scores.



41. Linear Models and Sparse Data


Linear models can operate efficiently on sparse matrices.



42. Why?


They do not require dense feature representations for basic training and prediction.



43. Feature Weights


For binary Logistic Regression, coefficients can be inspected.



44. Example


Python


vectorizer = pipeline.named_steps[

    "tfidf"

]


model = pipeline.named_steps[

    "model"

]



45. Feature Names


Python


features = vectorizer.get_feature_names_out()



46. Coefficients


Python


coefficients = model.coef_[0]



47. Pair Features and Weights


Python


feature_weights = list(

    zip(

        features,

        coefficients

    )

)



48. Sort


Python


feature_weights = sorted(

    feature_weights,

    key=lambda x: x[1]

)



49. Most Negative


The beginning of the sorted list contains features with the most negative weights.



50. Most Positive


The end contains features with the most positive weights.



51. Why Useful?


This provides a basic form of model interpretation.



52. Example


A positive feature weight means that, all else equal, increasing that feature contributes toward the positive side of the linear decision function.



53. Important Caution


Feature weights are not automatically causal explanations.



54. N-Grams


Linear models can use:


Unigrams.


Bigrams.


Trigrams.



55. Example


Python


TfidfVectorizer(

    ngram_range=(1, 2)

)



56. Why?


The model can learn weights for phrases such as:


not good.


very useful.


poor service.



57. Feature Scaling


TF-IDF already produces a normalized text representation by default.


Additional scaling is often unnecessary for the sparse text features themselves.



58. Class Imbalance


Linear classifiers can use class weights.



59. Example


Python


LogisticRegression(

    class_weight="balanced",

    max_iter=1000

)



60. Meaning


The training procedure adjusts the influence of classes based on their frequencies.



61. LinearSVC


Python


LinearSVC(

    class_weight="balanced"

)



62. When Useful?


Class weighting can be useful when minority-class performance is important.



63. Evaluation


Use:


Precision.


Recall.


F1.


Confusion matrix.



64. Cross-Validation


Python


scores = cross_val_score(

    pipeline,

    X,

    y,

    cv=5,

    scoring="f1"

)



65. Why Pipeline?


TF-IDF vocabulary and statistics are learned independently inside each fold.



66. Hyperparameter Search


Possible parameters include:


C.


ngram_range.


min_df.


max_df.



67. Pipeline Parameter Example


Python


param_grid = {

    "tfidf__ngram_range": [

        (1, 1),

        (1, 2)

    ],

    "model__C": [

        0.1,

        1,

        10

    ]

}



68. Search


Python


search = GridSearchCV(

    pipeline,

    param_grid,

    cv=5,

    scoring="f1"

)



69. Fit


Python


search.fit(

    X_train,

    y_train

)



70. Best Configuration


Python


print(

    search.best_params_

)



71. Best Score


Python


print(

    search.best_score_

)



72. Model Comparison


Compare:


Naive Bayes.


Logistic Regression.


LinearSVC.



73. Same Evaluation


Use:


Same folds.


Same metric.


Same dataset.



74. Example Comparison


Model A:


MultinomialNB.



Model B:


Logistic Regression.



Model C:


LinearSVC.



75. Question


Which model performs best on the validation procedure?



76. Important Principle


Do not assume that one algorithm will always outperform another.



77. Training Time


Record:


Training time.


Prediction time.



78. Feature Count


Record:


Number of generated features.



79. Model Complexity


Consider:


Number of features.


Regularization.


Training cost.



80. Experiment 1


Train:


Logistic Regression + TF-IDF.



81. Experiment 2


Train:


LinearSVC + TF-IDF.



82. Experiment 3


Train:


MultinomialNB + TF-IDF.



83. Compare


F1.


Accuracy.


Training time.



84. Experiment 4


Tune:


C.



85. Experiment 5


Tune:


ngram_range.



86. Experiment 6


Compare:


class_weight=None.


class_weight="balanced".



87. Common Mistakes


Mistake 1:


Using training accuracy as the main metric.


Mistake 2:


Ignoring regularization.


Mistake 3:


Comparing models using different validation folds.


Mistake 4:


Inspecting test performance repeatedly during tuning.


Mistake 5:


Interpreting coefficients as causal effects.



88. Practice


1. What is a linear classifier?


2. What does Logistic Regression calculate?


3. What is the logistic function?


4. What does C control?


5. What happens when C becomes smaller?


6. What is LinearSVC?


7. Why are linear models effective for sparse text features?


8. How can feature weights help interpret a text classifier?


9. What is class_weight="balanced"?


10. Why use pipelines?



89. Quick Check


Question 1


What does a linear classifier compute?


Answer:


A weighted combination of input features plus a bias term.



Question 2


In Logistic Regression, what does a smaller C generally mean?


Answer:


Stronger regularization.



Question 3


Why can linear models work well with TF-IDF?


Answer:


They can efficiently learn from high-dimensional sparse feature vectors.



90. Summary


Linear models are powerful classical approaches for text classification.


Important models include:


Logistic Regression.


LinearSVC.



Important concepts include:


Linear decision functions.


Logistic probabilities.


Regularization.


Feature weights.


Class weighting.


N-gram features.



91. Extended Study


A linear classifier computes:


z = wᵀx + b.



Logistic Regression converts this score into a probability:


P(y=1|x)


=


1 / (1 + e⁻ᶻ).



The learned weight vector:


w


determines how strongly each feature contributes to the decision function.



92. Final Reflection


Text classification does not always require complicated neural networks.


A well-designed combination of:


TF-IDF.


N-grams.


Regularization.


Linear models.


Cross-validation.


can provide a strong and interpretable baseline for many real-world text problems.

`

};

export default lesson9;