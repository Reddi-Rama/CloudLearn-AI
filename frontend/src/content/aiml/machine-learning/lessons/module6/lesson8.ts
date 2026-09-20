const lesson8 = {

  id: "lesson8",

  title: "Text Classification with Naive Bayes",

  content: `

Lesson 08

Text Classification with Naive Bayes


1. Introduction


Text classification is the task of assigning one or more predefined categories to a text document.


Examples include:


Spam detection.


Sentiment analysis.


News classification.


Support-ticket routing.


Language identification.



2. Example


Input:


"Your account has won a free prize."



3. Prediction


Spam.



4. Another Example


Input:


"The delivery was excellent."



5. Prediction


Positive.



6. Text Classification Pipeline


Raw Text


↓


Text preprocessing


↓


Feature extraction


↓


Numerical vectors


↓


Classifier


↓


Predicted class.



7. Naive Bayes


Naive Bayes is a family of probabilistic classification algorithms.


It is particularly useful as a baseline for many text classification problems.



8. Why Naive Bayes for Text?


Text datasets often contain:


Many features.


Sparse vectors.


Large vocabularies.



Naive Bayes can work efficiently with this type of representation.



9. Bayes' Theorem


The fundamental idea comes from Bayes' theorem:


P(C | X)


=


P(X | C) P(C)


/


P(X)



10. Symbols


C:


Class.



X:


Observed features.



P(C | X):


Probability of class C given the observed features.



P(X | C):


Probability of observing X given class C.



P(C):


Prior probability of the class.



P(X):


Probability of observing X.



11. Classification Decision


A classifier can select the class with the highest posterior probability.



12. Example


Suppose a message contains words associated with:


spam.



The model estimates:


P(spam | message)



and:


P(not spam | message)



13. Prediction


Choose the class with the larger estimated probability.



14. Why "Naive"?


Naive Bayes makes a simplifying conditional-independence assumption about features given the class.



15. Simplified Idea


Given a class, the model treats individual features as conditionally independent for the probability calculation.



16. Text Example


Suppose the document contains:


"free"


and:


"offer".



17. Naive Assumption


The model approximates their joint contribution using individual conditional probabilities.



18. Multinomial Naive Bayes


For word-count or TF-IDF style text features, a common choice is:


MultinomialNB.



19. Import


Python


from sklearn.naive_bayes import (

    MultinomialNB

)



20. Example Data


Python


texts = [

    "free prize now",

    "claim your free offer",

    "team meeting tomorrow",

    "project meeting today"

]



21. Labels


Python


labels = [

    "spam",

    "spam",

    "work",

    "work"

]



22. Text Vectorization


Python


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)


vectorizer = TfidfVectorizer()



23. Transform


Python


X = vectorizer.fit_transform(

    texts

)



24. Train Model


Python


model = MultinomialNB()


model.fit(

    X,

    labels

)



25. Predict


Python


new_text = [

    "free offer"

]


new_X = vectorizer.transform(

    new_text

)


prediction = model.predict(

    new_X

)


print(

    prediction

)



26. Pipeline


A better workflow combines vectorization and classification.



27. Python


from sklearn.pipeline import Pipeline


pipeline = Pipeline([

    (

        "tfidf",

        TfidfVectorizer()

    ),

    (

        "model",

        MultinomialNB()

    )

])



28. Fit


Python


pipeline.fit(

    texts,

    labels

)



29. Predict


Python


prediction = pipeline.predict(

    [

        "claim free prize"

    ]

)



30. Why Pipeline?


The vectorizer and classifier are treated as one modeling workflow.



31. Cross-Validation


Python


from sklearn.model_selection import (

    cross_val_score

)


scores = cross_val_score(

    pipeline,

    texts,

    labels,

    cv=5,

    scoring="f1_macro"

)



32. Macro F1


Macro F1 calculates the F1-score for each class and then averages the class scores.



33. Why Macro F1?


It gives each class equal weight, which can be useful when class frequencies differ.



34. Multinomial Model


MultinomialNB is particularly associated with discrete feature counts, although TF-IDF representations are also commonly used with it in practical text classification.



35. Alpha


MultinomialNB includes a smoothing parameter:


alpha.



36. Why Smoothing?


A word may not appear in the training examples of a particular class.



37. Problem Without Smoothing


A zero probability for one feature can cause the entire probability product to become zero.



38. Smoothing Idea


Smoothing prevents zero-frequency problems.



39. Example


Python


model = MultinomialNB(

    alpha=1.0

)



40. Different Alpha


Python


model = MultinomialNB(

    alpha=0.1

)



41. Hyperparameter Tuning


Alpha can be tuned using cross-validation.



42. Example


Python


from sklearn.model_selection import (

    GridSearchCV

)


param_grid = {

    "model__alpha": [

        0.01,

        0.1,

        0.5,

        1.0,

        2.0

    ]

}



43. Search


Python


search = GridSearchCV(

    pipeline,

    param_grid,

    cv=5,

    scoring="f1_macro"

)



44. Fit


Python


search.fit(

    texts,

    labels

)



45. Best Parameters


Python


print(

    search.best_params_

)



46. Best Score


Python


print(

    search.best_score_

)



47. Class Probabilities


Naive Bayes can provide estimated class probabilities.



48. Python


probabilities = pipeline.predict_proba(

    [

        "free offer"

    ]

)



49. Interpretation


The output contains estimated probabilities for the available classes.



50. Important Warning


These probabilities should not automatically be interpreted as perfectly calibrated probabilities.



51. Complement Naive Bayes


scikit-learn also provides:


ComplementNB.



52. Why?


It was designed to address some issues that can arise with imbalanced text classification.



53. Import


Python


from sklearn.naive_bayes import (

    ComplementNB

)



54. Example


Python


model = ComplementNB()



55. Bernoulli Naive Bayes


Another variant is:


BernoulliNB.



56. Import


Python


from sklearn.naive_bayes import (

    BernoulliNB

)



57. Difference


BernoulliNB is designed around binary-valued features.


MultinomialNB is designed around count-like feature information.



58. Text Classification Comparison


Possible models include:


MultinomialNB.


ComplementNB.


Logistic Regression.


Linear SVM.



59. Why Compare?


No single algorithm is guaranteed to perform best on every dataset.



60. Imbalanced Data


Suppose:


Class A = 90%.


Class B = 10%.



61. Accuracy


A classifier predicting Class A frequently may obtain high accuracy.



62. Better Evaluation


Also inspect:


Precision.


Recall.


F1.



63. Confusion Matrix


Python


from sklearn.metrics import (

    confusion_matrix

)


cm = confusion_matrix(

    y_test,

    predictions

)



64. Classification Report


Python


from sklearn.metrics import (

    classification_report

)


print(

    classification_report(

        y_test,

        predictions

    )

)



65. Naive Bayes Assumption


The conditional-independence assumption is rarely literally true for natural language.



66. Why Can It Still Work?


The simplifying assumption can still produce useful decision boundaries despite being an approximation.



67. Strengths


Naive Bayes is:


Fast.


Simple.


Easy to train.


Suitable for high-dimensional sparse features.



68. Limitations


It may struggle when:


Feature relationships are important.


Context matters strongly.


Word order is critical.



69. Example


"The movie was not good."



70. Challenge


The model may separately see:


not.


good.



71. Improvement


N-gram features can provide the phrase:


not good.



72. Experiment 1


Build a sentiment classifier using:


TF-IDF.


MultinomialNB.



73. Experiment 2


Compare:


Unigrams.


Unigrams + bigrams.



74. Experiment 3


Tune:


alpha.



75. Experiment 4


Compare:


MultinomialNB.


ComplementNB.



76. Experiment 5


Compare Naive Bayes with:


Logistic Regression.



77. Metrics


Measure:


Accuracy.


Precision.


Recall.


F1.



78. Common Mistakes


Mistake 1:


Using accuracy only.


Mistake 2:


Ignoring class imbalance.


Mistake 3:


Fitting the vectorizer before cross-validation.


Mistake 4:


Assuming the independence assumption is literally true.


Mistake 5:


Ignoring smoothing.


Mistake 6:


Treating probabilities as perfectly calibrated.



79. Practice


1. What is text classification?


2. What is Bayes' theorem?


3. What is the Naive Bayes assumption?


4. Why is Naive Bayes useful for text?


5. What is MultinomialNB?


6. What is alpha?


7. Why is smoothing needed?


8. What is ComplementNB?


9. What is BernoulliNB?


10. Why should Naive Bayes be compared with other classifiers?



80. Quick Check


Question 1


Why is Naive Bayes called "naive"?


Answer:


Because it makes a simplifying conditional-independence assumption about features given the class.



Question 2


What does alpha control in MultinomialNB?


Answer:


The smoothing strength used to reduce zero-frequency problems.



Question 3


Why can n-grams help Naive Bayes?


Answer:


They can represent short word sequences such as "not good" rather than treating each word completely independently.



81. Summary


Naive Bayes provides a fast probabilistic approach to text classification.


Important concepts include:


Bayes' theorem.


Conditional probabilities.


MultinomialNB.


ComplementNB.


BernoulliNB.


Smoothing.


TF-IDF.


Cross-validation.



82. Extended Study


For a class c and feature vector x, Naive Bayes estimates:


P(c | x)


∝


P(c)


Π P(xᵢ | c).


The independence assumption allows the joint likelihood to be approximated as a product of individual feature likelihoods.



83. Final Reflection


Naive Bayes is an excellent algorithm to understand because it demonstrates how:


Probability.


Feature representation.


Classification.


Smoothing.


and


Statistical assumptions


combine to create a practical text machine learning system.

`

};

export default lesson8;