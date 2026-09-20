const lesson6 = {

  id: "lesson6",

  title: "TF-IDF Representation",

  content: `

Lesson 06

TF-IDF Representation


1. Introduction


Bag-of-Words represents documents using word occurrence counts.


However, very common words may appear in many documents and may provide limited information for distinguishing between documents.


TF-IDF provides a weighting scheme that can reduce the influence of terms that appear throughout the corpus.



2. What Does TF-IDF Mean?


TF-IDF stands for:


Term Frequency


—


Inverse Document Frequency.



3. Main Idea


A word receives a larger weight when:


It is important within a document.


but


It is relatively uncommon across the collection of documents.



4. Intuition


Suppose a corpus contains:


1,000 documents.



5. Common Term


The word:


"the"


appears in:


950 documents.



6. Interpretation


It may not be useful for distinguishing documents.



7. Rare Term


Suppose:


"quantum"


appears in:


20 documents.



8. Interpretation


The term may be more informative for identifying documents where it occurs.



9. TF-IDF Components


TF-IDF combines:


Term Frequency.


Inverse Document Frequency.



10. Term Frequency


Term frequency measures how strongly a term occurs in a document.



11. Basic Count


If:


"machine"


appears 3 times.


then its raw term frequency is:


3.



12. Normalized Term Frequency


Different documents may have different lengths.


Therefore term frequency can also be normalized.



13. Example


Document A:


100 words.



Document B:


1,000 words.



14. Word Count


A term appearing 10 times may have different significance in the two documents.



15. Inverse Document Frequency


IDF measures how uncommon a term is across the document collection.



16. Basic Formula


A common form is:


IDF(t) = log(N / df(t))



17. Symbols


N:


Number of documents.



18. df(t)


Number of documents containing term t.



19. Interpretation


If a word occurs in many documents:


df(t)


is large.


Therefore:


IDF(t)


becomes smaller.



20. If a word occurs in few documents:


df(t)


is small.


Therefore:


IDF(t)


becomes larger.



21. TF-IDF


A simplified formulation is:


TF-IDF(t,d) = TF(t,d) × IDF(t)



22. Interpretation


A term gets a high weight when:


It occurs strongly in the document.


and


It is relatively uncommon in the corpus.



23. Example


Suppose:


N = 1000.



24. Common Word


df = 900.



25. Rare Word


df = 10.



26. IDF


The rare word receives a much larger IDF contribution than the common word.



27. Why Logarithm?


The logarithm reduces the scale of the ratio and provides smoother weighting.



28. Important Note


Different implementations use slightly different smoothing and normalization formulas.



29. scikit-learn


scikit-learn provides:


TfidfVectorizer.



30. Import


Python


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)



31. Example Documents


Python


documents = [

    "machine learning is useful",

    "machine learning is powerful",

    "deep learning is powerful"

]



32. Create Vectorizer


Python


vectorizer = TfidfVectorizer()



33. Transform


Python


X = vectorizer.fit_transform(

    documents

)



34. Vocabulary


Python


print(

    vectorizer.get_feature_names_out()

)



35. Matrix


Python


print(

    X.toarray()

)



36. Shape


Python


print(

    X.shape

)



37. Interpretation


Rows:


Documents.



Columns:


Terms.



38. Values


The matrix values represent TF-IDF weights rather than simple word counts.



39. Normalization


TfidfVectorizer normally applies vector normalization to document vectors.



40. Why Normalize?


Longer documents can otherwise produce larger total feature values simply because they contain more terms.



41. Norm


A common normalization is L2 normalization.



42. Mathematical Form


For vector:


x = [x₁, x₂, ..., xₙ],



L2 norm is:


||x||₂ = sqrt(

x₁² + x₂² + ... + xₙ²

)



43. Normalized Vector


Each component becomes:


xᵢ / ||x||₂.



44. Interpretation


The vector is scaled without changing its direction.



45. TF-IDF vs Bag-of-Words


Bag-of-Words:


Uses counts.



TF-IDF:


Uses weighted term importance.



46. Example


A word occurring in every document receives less weight under TF-IDF than a word occurring in only a few documents.



47. Why Useful?


TF-IDF often provides a strong baseline for:


Document classification.


Search.


Similarity.


Information retrieval.



48. Text Classification


A TF-IDF vector can be used as input to a classifier.



49. Pipeline


Python


from sklearn.pipeline import Pipeline


from sklearn.linear_model import LogisticRegression


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



50. Fit


Python


pipeline.fit(

    X_train,

    y_train

)



51. Predict


Python


predictions = pipeline.predict(

    X_test

)



52. Evaluate


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



53. Cross-Validation


Python


scores = cross_val_score(

    pipeline,

    texts,

    labels,

    cv=5,

    scoring="f1"

)



54. Why Pipeline?


The TF-IDF vocabulary and document-frequency statistics are learned only from the training portion of each fold.



55. Important Leakage Warning


Do not calculate TF-IDF weights using the complete dataset before cross-validation.



56. N-Grams


TfidfVectorizer can construct n-grams.



57. Example


Python


vectorizer = TfidfVectorizer(

    ngram_range=(1, 2)

)



58. Meaning


Use:


Unigrams.


Bigrams.



59. Example


Text:


"machine learning is useful"



60. Features


machine.


learning.


machine learning.


learning is.


is useful.



61. Minimum Document Frequency


Python


vectorizer = TfidfVectorizer(

    min_df=2

)



62. Meaning


Ignore terms appearing in fewer than two documents.



63. Maximum Document Frequency


Python


vectorizer = TfidfVectorizer(

    max_df=0.9

)



64. Meaning


Ignore terms appearing in more than 90% of documents.



65. Maximum Features


Python


vectorizer = TfidfVectorizer(

    max_features=5000

)



66. Benefit


Control the number of features.



67. Stop Words


Python


vectorizer = TfidfVectorizer(

    stop_words="english"

)



68. Warning


Stop-word removal should be validated for the particular task.



69. Sublinear TF


TfidfVectorizer can use sublinear term frequency scaling.



70. Parameter


Python


sublinear_tf=True



71. Intuition


Instead of treating repeated occurrences linearly, the term frequency can be transformed using a logarithmic scale.



72. Why?


The difference between:


1 occurrence.


and:


10 occurrences.


may be more important than the difference between:


100.


and:


110.



73. TF-IDF and Similarity


TF-IDF vectors can be compared using similarity measures.



74. Cosine Similarity


A common similarity measure is cosine similarity.



75. Formula


cosine(x,y) =


(x · y)


/


(||x||₂ ||y||₂)



76. Interpretation


It measures the angle-based similarity between two vectors.



77. Example


Two documents discussing:


machine learning.


may have similar TF-IDF vectors.



78. Different Documents


A document about:


cooking.


may have a different vector direction.



79. Search


TF-IDF can therefore support simple document retrieval systems.



80. Example


Query:


"machine learning"



81. Process


Convert query to TF-IDF representation.



82. Compare


Compare it with document vectors.



83. Rank


Documents by similarity.



84. TF-IDF Limitations


TF-IDF does not fully capture:


Word meaning.


Deep semantic relationships.


Long-range context.



85. Example


"car"


and:


"automobile"



86. Problem


TF-IDF treats them as different terms unless their statistical relationship is captured indirectly through the model.



87. Another Limitation


Word order is still limited unless n-grams are included.



88. Experiment 1


Compare:


CountVectorizer.


TfidfVectorizer.



89. Dataset


Use a text classification dataset.



90. Evaluation


Compare:


Accuracy.


Precision.


Recall.


F1.



91. Experiment 2


Compare TF-IDF with:


Unigrams.


Unigrams + bigrams.



92. Experiment 3


Vary:


min_df.



93. Experiment 4


Vary:


max_features.



94. Experiment 5


Compare:


sublinear_tf=False.


sublinear_tf=True.



95. Experiment 6


Use TF-IDF vectors for document similarity.



96. Common Mistakes


Mistake 1:


Computing TF-IDF using the complete dataset before validation.


Mistake 2:


Using extremely large vocabularies without justification.


Mistake 3:


Assuming TF-IDF captures full semantic meaning.


Mistake 4:


Ignoring document length normalization.


Mistake 5:


Selecting hyperparameters using the test set.



97. Practice


1. What does TF-IDF stand for?


2. What is term frequency?


3. What is document frequency?


4. What does inverse document frequency measure?


5. Why do common words receive lower IDF values?


6. Why can rare terms receive higher weights?


7. What does TfidfVectorizer do?


8. Why is normalization useful?


9. What is cosine similarity?


10. How is TF-IDF different from Bag-of-Words?



98. Quick Check


Question 1


What happens to the IDF contribution when a term appears in many documents?


Answer:


It decreases.



Question 2


What happens when a term is rare across the corpus?


Answer:


Its IDF contribution increases.



Question 3


Why should TfidfVectorizer be inside a pipeline during cross-validation?


Answer:


Because vocabulary and document-frequency statistics must be learned only from the training portion of each fold.



99. Summary


TF-IDF improves upon raw word counts by weighting terms according to their importance within a document and rarity across the corpus.


Important concepts include:


TF.


IDF.


TF-IDF.


Normalization.


TfidfVectorizer.


N-grams.


Cosine similarity.



100. Extended Study


For term t and document d:


TF-IDF(t,d)


=


TF(t,d) × IDF(t).



A common IDF formulation is:


IDF(t)


=


log(N / df(t)).



Therefore:


TF-IDF(t,d)


=


TF(t,d) × log(N / df(t)).



The exact implementation may include smoothing and normalization.



101. Final Reflection


TF-IDF is one of the most important classical text representations.


It is:


Simple.


Fast.


Interpretable.


Sparse.


Often surprisingly effective.



However, it does not provide complete semantic understanding.


This limitation motivates more advanced representations such as word embeddings and transformer-based models.

`

};

export default lesson6;