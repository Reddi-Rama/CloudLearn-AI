const practice = {

  id: "practice",

  title: "Module 6 Practice",

  content: `

Module 6

Text Machine Learning Practice


1. Practice Overview


This practice section reviews the major concepts from the complete Text Machine Learning module.


The exercises progress from fundamental concepts to practical machine learning workflows.



2. Concept Questions


1. What is text machine learning?


2. What is a corpus?


3. What is a document?


4. What is a vocabulary?


5. What is tokenization?


6. Why is text converted into numerical features?


7. What is a sparse matrix?


8. What is the difference between supervised and unsupervised text learning?



3. Text Preprocessing


9. Why might text be converted to lowercase?


10. Why should punctuation not always be removed automatically?


11. What are stop words?


12. What is stemming?


13. What is lemmatization?


14. Why can URLs be useful features?


15. Why can numbers be important in text?


16. What problems can Unicode inconsistencies create?



4. Bag-of-Words


17. What is a document-term matrix?


18. What does CountVectorizer do?


19. What does a row represent?


20. What does a column represent?


21. What does min_df control?


22. What does max_df control?



5. TF-IDF


23. What does TF-IDF represent?


24. Why are common words often given lower importance?


25. What is the difference between term frequency and inverse document frequency?


26. Why is TF-IDF useful for text classification?


27. Why is TF-IDF useful for text similarity?



6. N-Grams


28. What is a unigram?


29. What is a bigram?


30. What is a trigram?


31. Why can bigrams help sentiment analysis?


32. What is one disadvantage of increasing n-gram size?



7. Naive Bayes


33. What is Bayes' theorem?


34. What is the Naive Bayes independence assumption?


35. Why is MultinomialNB commonly used with count-based text features?


36. What does smoothing accomplish?



8. Linear Text Classification


37. What is a linear classifier?


38. What does a model coefficient represent?


39. What is regularization?


40. What does C control in Logistic Regression and LinearSVC?



9. Sentiment Analysis


41. What is sentiment analysis?


42. What is binary sentiment classification?


43. Why can sarcasm be difficult for text classifiers?


44. Why can negation create problems?


45. How can n-grams help with phrases such as "not good"?



10. Topic Modeling


46. What is topic modeling?


47. What is NMF?


48. What does W represent in NMF?


49. What does H represent in NMF?


50. What is LDA?


51. How does LDA represent documents?


52. How does LDA differ from NMF?



11. Text Similarity


53. What is cosine similarity?


54. What does a similarity score close to 1 generally indicate?


55. What is lexical similarity?


56. What is semantic similarity?


57. Why might TF-IDF fail to recognize synonyms?



12. Document Clustering


58. What is document clustering?


59. What does k represent in K-Means?


60. What is inertia?


61. What is the elbow method?


62. What is silhouette score?


63. Why do cluster numbers have no inherent semantic meaning?



13. Real-World Text Data


64. Why are duplicates important?


65. What is class imbalance?


66. Why can accuracy be misleading?


67. What is data leakage?


68. Why should the vectorizer be fitted only on training data?


69. Why is label quality important?



14. Imbalanced Classification


70. What is precision?


71. What is recall?


72. What is F1-score?


73. What is macro averaging?


74. What is weighted averaging?


75. Why can threshold tuning change precision and recall?



15. Pipelines


76. What is a scikit-learn Pipeline?


77. Why should vectorization be part of the pipeline?


78. What is ColumnTransformer?


79. Why is serialization important?


80. Why should preprocessing and the classifier be saved together?



16. Model Interpretation


81. What is global interpretation?


82. What is local interpretation?


83. Why does a large coefficient not imply causation?


84. What is a spurious correlation?


85. Why is error analysis important?



17. Production


86. What is inference latency?


87. What is data drift?


88. What is concept drift?


89. Why should model versions be tracked?


90. Why is monitoring necessary after deployment?



18. Coding Exercise 1


Build a sentiment classifier using:


TfidfVectorizer.


LogisticRegression.


Evaluate using:


Accuracy.


Precision.


Recall.


F1.



19. Coding Exercise 2


Compare:


CountVectorizer.


TfidfVectorizer.



Use the same classifier and evaluation split.



20. Coding Exercise 3


Compare:


Naive Bayes.


Logistic Regression.


LinearSVC.



Use the same preprocessing and cross-validation strategy.



21. Coding Exercise 4


Build a text search engine using:


TF-IDF.


Cosine similarity.



Return the top three documents for a query.



22. Coding Exercise 5


Build a document clustering system using:


TF-IDF.


KMeans.



Display:


Cluster labels.


Top terms per cluster.



23. Coding Exercise 6


Create an imbalanced classification dataset.


Compare:


Default Logistic Regression.


Class-weighted Logistic Regression.



Evaluate the minority class.



24. Coding Exercise 7


Tune:


ngram_range.


min_df.


classifier C.



Use GridSearchCV.



25. Coding Exercise 8


Save a complete text ML pipeline using joblib.


Reload it.


Predict on new text.



26. Coding Exercise 9


Perform error analysis.


Display:


Text.


True label.


Predicted label.



Identify at least three recurring error patterns.



27. Mini Challenge


Create a text classifier for customer support messages.


The dataset should contain at least:


300 documents.


3 classes.



Build:


1. Baseline.


2. TF-IDF representation.


3. Multiple classifiers.


4. Cross-validation.


5. Hyperparameter tuning.


6. Error analysis.


7. Final evaluation.



28. Final Practice Checklist


Before considering the project complete, verify:


Problem defined.


Dataset inspected.


Duplicates checked.


Missing values checked.


Class distribution inspected.


Train-test split created.


Pipeline implemented.


Baseline established.


Models compared.


Cross-validation performed.


Hyperparameters tuned.


Test set kept untouched.


Errors analyzed.


Pipeline saved.


Production considerations documented.

`

};

export default practice;