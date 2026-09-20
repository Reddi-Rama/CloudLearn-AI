const lesson11 = {

  id: "lesson11",

  title: "Sentiment Analysis",

  content: `

Lesson 11

Sentiment Analysis


1. Introduction


Sentiment analysis is a text classification task that attempts to identify the expressed sentiment in text.


A common formulation is:


Positive.


Negative.



2. Example


Text:


"The product quality is excellent."



3. Sentiment


Positive.



4. Another Example


Text:


"The service was disappointing."



5. Sentiment


Negative.



6. Applications


Sentiment analysis can be used for:


Product reviews.


Customer feedback.


Survey responses.


Support messages.


Social media analysis.


Market research.



7. Text Classification Formulation


Input:


Text document.



Output:


Sentiment label.



8. Machine Learning Pipeline


Text


↓


Preprocessing


↓


TF-IDF


↓


Classifier


↓


Sentiment prediction.



9. Dataset


A supervised sentiment dataset contains:


Text.


Label.



10. Example


Text:


"Very useful product."



Label:


Positive.



11. Another


Text:


"Terrible experience."



Label:


Negative.



12. Data Quality


A sentiment model depends heavily on the quality of its labels.



13. Label Ambiguity


Consider:


"The product is okay."



14. Question


Is this:


Positive?


Neutral?


Negative?



15. Important Point


Human annotation can sometimes be subjective.



16. Binary Sentiment


A simple project may use:


0 = negative.


1 = positive.



17. Train-Test Split


Python


from sklearn.model_selection import (

    train_test_split

)


X_train, X_test, y_train, y_test = train_test_split(

    texts,

    labels,

    test_size=0.2,

    stratify=labels,

    random_state=42

)



18. TF-IDF


Python


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)



19. Logistic Regression


Python


from sklearn.linear_model import (

    LogisticRegression

)



20. Pipeline


Python


from sklearn.pipeline import Pipeline


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



21. Training


Python


pipeline.fit(

    X_train,

    y_train

)



22. Prediction


Python


predictions = pipeline.predict(

    X_test

)



23. Evaluation


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



24. Precision


Precision answers:


"Of the texts predicted as positive, how many were actually positive?"



25. Recall


Recall answers:


"Of the actual positive texts, how many did the model identify?"



26. F1


F1 combines precision and recall.



27. Confusion Matrix


Python


from sklearn.metrics import (

    confusion_matrix

)


cm = confusion_matrix(

    y_test,

    predictions

)


print(cm)



28. Interpretation


The confusion matrix separates:


True positives.


True negatives.


False positives.


False negatives.



29. Why Important?


A sentiment model may behave differently for:


Positive reviews.


Negative reviews.



30. Class Balance


Check:


How many positive examples?


How many negative examples?



31. Example


Positive:


8,000.



Negative:


2,000.



32. Problem


A classifier could achieve high accuracy by favoring the majority class.



33. Better Metrics


Use:


Precision.


Recall.


F1.



34. Baseline


Create a baseline using:


DummyClassifier.



35. Example


Python


from sklearn.dummy import (

    DummyClassifier

)


baseline = DummyClassifier(

    strategy="most_frequent"

)



36. Why?


The baseline tells us what a simple majority-class strategy can achieve.



37. Negation


Sentiment often depends on negation.



38. Example


"good"



39. Negative Form


"not good"



40. Feature Engineering


Bigrams can help represent:


not good.



41. Example


Python


TfidfVectorizer(

    ngram_range=(1, 2)

)



42. Compare


Unigram model.


Unigram + bigram model.



43. Question


Does the addition of bigrams improve validation F1?



44. Intensifiers


Words such as:


very.


extremely.


slightly.



45. Example


"very good"



46. N-Gram


The phrase can become a feature.



47. Punctuation


Repeated punctuation may contain sentiment information.



48. Example


"Excellent!!!"



49. Emoji


Emojis may carry sentiment information.



50. Example


"Great product 😊"



51. Preprocessing Decision


Automatically removing punctuation or emojis may remove useful sentiment signals.



52. Domain Shift


A model trained on movie reviews may not perform identically on product reviews.



53. Example


"unbelievable"



54. Meaning


It may be positive in one context and negative in another.



55. Important Principle


Sentiment is context-dependent.



56. Sarcasm


Sarcasm is especially difficult for simple text models.



57. Example


"Great, another broken update."



58. Surface Words


The word:


Great.


appears positive.



59. Intended Meaning


The complete sentence may express frustration.



60. Classical Model Limitation


TF-IDF-based models may struggle with this type of contextual interpretation.



61. Error Analysis


Inspect incorrect predictions.



62. Example


Text:


"Not bad at all."



63. Possible Error


The model may predict negative because:


bad.


is strongly associated with negative examples.



64. Improvement


N-grams can help capture:


not bad.



65. Model Confidence


For Logistic Regression:


predict_proba.



66. Example


Python


probabilities = pipeline.predict_proba(

    X_test

)



67. Threshold


A default threshold can be adjusted for operational requirements.



68. Threshold Experiment


Test:


0.30.


0.40.


0.50.


0.60.


0.70.



69. Record


Precision.


Recall.


F1.



70. Hyperparameter Tuning


Tune:


C.



71. Example


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



72. Grid Search


Python


search = GridSearchCV(

    pipeline,

    param_grid,

    cv=5,

    scoring="f1"

)



73. Fit


Python


search.fit(

    X_train,

    y_train

)



74. Best Parameters


Python


print(

    search.best_params_

)



75. Best Score


Python


print(

    search.best_score_

)



76. Test Evaluation


Python


final_predictions = search.predict(

    X_test

)



77. Important Principle


The final test set is used only after model development and selection.



78. Multiclass Sentiment


Sentiment can also be represented using:


Positive.


Neutral.


Negative.



79. Evaluation


Use:


Macro F1.


Weighted F1.


Class-specific precision and recall.



80. Example


A three-class classifier predicts:


positive.


neutral.


negative.



81. Macro F1


Each class receives equal importance when calculating the average.



82. Weighted F1


Each class contributes according to its support.



83. Sentiment and Real-World Deployment


A production sentiment system must handle:


New vocabulary.


Spelling mistakes.


Changing language.


Domain changes.


Different writing styles.



84. Monitoring


Track:


Prediction distribution.


Text length.


Vocabulary drift.


Class distribution.


Performance when labels become available.



85. Experiment 1


Build a binary sentiment classifier.



86. Experiment 2


Compare:


Unigrams.


Unigrams + bigrams.



87. Experiment 3


Compare:


Naive Bayes.


Logistic Regression.



88. Experiment 4


Tune:


C.



89. Experiment 5


Perform error analysis on at least:


20 incorrect predictions.



90. Questions


For every error ask:


What words appeared?


Was negation present?


Was sarcasm present?


Was the label ambiguous?


Was the example unusual?



91. Experiment 6


Create a threshold-performance table.



92. Experiment 7


Test the final pipeline on manually written examples.



93. Important Warning


Manual examples are useful for qualitative inspection but should not replace a proper held-out test set.



94. Common Mistakes


Mistake 1:


Assuming sentiment is determined by individual words only.


Mistake 2:


Removing negation.


Mistake 3:


Removing all punctuation.


Mistake 4:


Ignoring class imbalance.


Mistake 5:


Using only accuracy.


Mistake 6:


Tuning on the test set.


Mistake 7:


Assuming a model trained on one domain will automatically generalize to another.



95. Practice


1. What is sentiment analysis?


2. What is binary sentiment classification?


3. Why can class imbalance be a problem?


4. Why can bigrams help sentiment analysis?


5. Why can sarcasm be difficult?


6. Why should negation be preserved?


7. Why is F1 useful?


8. What is threshold tuning?


9. Why perform error analysis?



96. Quick Check


Question 1


Why can the phrase "not good" be difficult for a unigram model?


Answer:


The model sees "not" and "good" primarily as separate features rather than directly representing the phrase as one feature.



Question 2


Why can emojis be useful?


Answer:


They can contain sentiment information.



Question 3


Why should domain shift be considered?


Answer:


Language patterns and word meanings can change between domains.



97. Summary


Sentiment analysis is a practical application of text classification.


A typical system uses:


Text.


TF-IDF.


N-grams.


A classifier.


Classification metrics.



Important challenges include:


Negation.


Sarcasm.


Class imbalance.


Domain shift.


Ambiguous labels.



98. Extended Study


A binary sentiment classifier estimates:


P(y=1 | x).


For Logistic Regression:


P(y=1|x)


=


1 / (1 + e⁻(wᵀx+b)).



A threshold converts this probability into a class decision.


Changing the threshold changes the precision-recall trade-off.



99. Final Reflection


A useful sentiment system requires more than recognizing positive and negative words.


It requires:


Good labels.


Appropriate text representation.


Careful validation.


Meaningful metrics.


Error analysis.


Awareness of context and domain.



The objective is not to make the model understand language exactly like a human.


The objective is to build a system that produces useful and measurable predictions for the intended task.

`

};

export default lesson11;