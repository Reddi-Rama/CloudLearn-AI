const lesson5 = {

  id: "lesson5",

  title: "Bag-of-Words Representation",

  content: `

Lesson 05

Bag-of-Words Representation


1. Introduction


Machine learning algorithms require numerical input.


One of the simplest ways to convert text into numerical features is the Bag-of-Words representation.



2. What Is Bag-of-Words?


Bag-of-Words represents a document using the occurrence or frequency of words in a vocabulary.


The representation focuses primarily on which words occur and how often they occur.



3. Important Idea


Bag-of-Words does not preserve the original word order.



4. Example


Document:


"machine learning is useful"



5. Vocabulary


Suppose the vocabulary is:


machine.


learning.


useful.



6. Vector


The document could be represented as:


[1, 1, 1].



7. Another Document


"machine learning is useful and useful"



8. Counts


machine = 1.


learning = 1.


useful = 2.



9. Vector


[1, 1, 2].



10. Document-Term Matrix


When multiple documents are represented, their vectors can be combined into a matrix.



11. Example Corpus


Document 1:


"good product"



Document 2:


"good service"



Document 3:


"fast product"



12. Vocabulary


fast.


good.


product.


service.



13. Matrix


D1:


[0, 1, 1, 0]



D2:


[0, 1, 0, 1]



D3:


[1, 0, 1, 0]



14. Interpretation


Rows represent documents.


Columns represent vocabulary terms.



15. CountVectorizer


scikit-learn provides:


CountVectorizer.



16. Import


Python


from sklearn.feature_extraction.text import (

    CountVectorizer

)



17. Dataset


Python


documents = [

    "good product",

    "good service",

    "fast product"

]



18. Create Vectorizer


Python


vectorizer = CountVectorizer()



19. Transform


Python


X = vectorizer.fit_transform(

    documents

)



20. Vocabulary


Python


print(

    vectorizer.get_feature_names_out()

)



21. Dense Matrix


Python


print(

    X.toarray()

)



22. Shape


Python


print(

    X.shape

)



23. Interpretation


If the shape is:


(3, 4)



then:


3 documents.


4 vocabulary features.



24. Binary Bag-of-Words


Bag-of-Words can also represent whether a term occurs rather than how many times it occurs.



25. Count vs Binary


Count representation:


good = 3.



Binary representation:


good = 1.



26. CountVectorizer Parameter


Python


vectorizer = CountVectorizer(

    binary=True

)



27. Why Binary Features?


For some tasks, the presence or absence of a word may be more useful than its exact count.



28. Example


A document mentioning:


"excellent"


once or several times may still simply indicate that the word is present.



29. Vocabulary Construction


The vectorizer learns a vocabulary from training documents.



30. Example


Training documents:


"red car"


"blue car"



31. Vocabulary


blue.


car.


red.



32. New Document


"green car"



33. Transformation


The unseen word:


green


may not be represented if it was not included in the learned vocabulary.



34. Result


Only the known term:


car


contributes to the vector.



35. Out-of-Vocabulary Words


Terms not present in the learned vocabulary are ignored by the standard CountVectorizer representation.



36. Why This Matters


A model must be able to handle words that were not observed during training.



37. Training and Test Workflow


Fit:


vectorizer.fit(X_train)



38. Transform Training


vectorizer.transform(X_train)



39. Transform Test


vectorizer.transform(X_test)



40. Important Rule


Do not fit the vectorizer independently on the test set.



41. Pipeline


A pipeline can combine:


CountVectorizer.


Classifier.



42. Example


Python


from sklearn.pipeline import Pipeline


from sklearn.linear_model import LogisticRegression


pipeline = Pipeline([

    (

        "bow",

        CountVectorizer()

    ),

    (

        "model",

        LogisticRegression(

            max_iter=1000

        )

    )

])



43. Fit


Python


pipeline.fit(

    X_train,

    y_train

)



44. Predict


Python


predictions = pipeline.predict(

    X_test

)



45. Cross-Validation


Python


from sklearn.model_selection import (

    cross_val_score

)


scores = cross_val_score(

    pipeline,

    texts,

    labels,

    cv=5,

    scoring="f1"

)



46. Why Pipeline?


The vocabulary is learned separately within each training fold.



47. Stop Words


CountVectorizer can use a stop-word configuration.



48. Example


Python


vectorizer = CountVectorizer(

    stop_words="english"

)



49. Warning


Stop-word removal should be evaluated rather than assumed to be beneficial.



50. Minimum Document Frequency


CountVectorizer can remove extremely rare terms.



51. Parameter


min_df.



52. Example


Python


vectorizer = CountVectorizer(

    min_df=2

)



53. Meaning


A term must appear in at least two documents to be included.



54. Maximum Document Frequency


The max_df parameter can exclude terms appearing in an unusually large fraction of documents.



55. Example


Python


vectorizer = CountVectorizer(

    max_df=0.9

)



56. Interpretation


Terms appearing in more than 90% of documents can be excluded.



57. Maximum Features


The number of vocabulary features can be limited.



58. Example


Python


vectorizer = CountVectorizer(

    max_features=5000

)



59. Why Limit Features?


Potential benefits include:


Lower memory usage.


Faster training.


Reduced dimensionality.



60. N-Grams


CountVectorizer can also construct n-gram features.



61. Example


Python


vectorizer = CountVectorizer(

    ngram_range=(1, 2)

)



62. Meaning


Use:


Unigrams.


Bigrams.



63. Example


Text:


"machine learning is useful"



64. Unigrams


machine.


learning.


is.


useful.



65. Bigrams


machine learning.


learning is.


is useful.



66. Why N-Grams?


They preserve some local word-order information.



67. Bag-of-Words Limitation


Consider:


"The dog chased the cat."



68. Another Sentence


"The cat chased the dog."



69. Basic Bag-of-Words


The word counts can be very similar.



70. Problem


The representation may not clearly capture the difference in word order.



71. N-Gram Improvement


Bigrams provide additional local sequence information.



72. Still Limited


N-grams do not provide full language understanding.



73. Sparsity


Text matrices can have thousands or millions of possible features.


Most documents contain only a small fraction.



74. Sparse Matrix


scikit-learn therefore commonly stores document-term matrices using sparse matrix representations.



75. Example


Python


print(

    type(X)

)



76. Why Sparse?


Storing every zero explicitly would waste memory.



77. Feature Names


Python


features = vectorizer.get_feature_names_out()



78. Inspect


Python


print(features)



79. Frequency Analysis


The document-term matrix can be used to calculate term frequencies.



80. Example


Python


term_counts = X.sum(

    axis=0

)



81. Interpretation


This can help identify frequent terms in the corpus.



82. Classification Example


Suppose:


"excellent"


appears frequently in positive reviews.



83. Model


A classifier may learn that:


excellent


is associated with the positive class.



84. Important Limitation


Word frequency alone does not guarantee semantic understanding.



85. Example


"not excellent"



86. Bag-of-Words


The representation contains:


not.


excellent.



87. But


The model must learn how these features interact to capture the phrase's meaning.



88. Experiment 1


Create a small review dataset.



89. Build


CountVectorizer.



90. Inspect


Vocabulary.



91. Inspect


Document-term matrix.



92. Experiment 2


Compare:


Count representation.


Binary representation.



93. Experiment 3


Compare:


Unigrams.


Unigrams + bigrams.



94. Experiment 4


Vary:


min_df.



95. Experiment 5


Vary:


max_features.



96. Evaluation


Use cross-validation and compare:


Accuracy.


Precision.


Recall.


F1.



97. Common Mistakes


Mistake 1:


Fitting the vocabulary on the complete dataset before validation.


Mistake 2:


Creating unnecessarily huge vocabularies.


Mistake 3:


Assuming word counts understand context.


Mistake 4:


Removing important words.


Mistake 5:


Ignoring sparsity.



98. Practice


1. What is Bag-of-Words?


2. What is a document-term matrix?


3. What does each row represent?


4. What does each column represent?


5. What is CountVectorizer?


6. What is binary Bag-of-Words?


7. What does min_df do?


8. What does max_df do?


9. What does max_features do?


10. Why are text matrices often sparse?


11. Why can n-grams improve Bag-of-Words?



99. Quick Check


Question 1


What information does basic Bag-of-Words primarily capture?


Answer:


Word occurrence or frequency.



Question 2


What important information does basic Bag-of-Words ignore?


Answer:


The original order of words.



Question 3


Why should CountVectorizer be inside a pipeline during cross-validation?


Answer:


So vocabulary construction occurs using only the training portion of each fold.



100. Summary


Bag-of-Words transforms documents into numerical vectors based on vocabulary terms.


Important concepts include:


CountVectorizer.


Document-term matrices.


Binary features.


Sparse representations.


Vocabulary control.


N-grams.



101. Extended Study


For a vocabulary:


V = {w₁, w₂, ..., wₘ},


a document d can be represented as:


x(d) = [c₁, c₂, ..., cₘ]


where cᵢ is the number of occurrences of word wᵢ in the document.


A corpus of n documents forms a matrix:


X ∈ Rⁿˣᵐ.



102. Final Reflection


Bag-of-Words is simple, powerful and interpretable.


It provides a strong baseline for many text classification tasks.


However, it has limitations:


No full word-order understanding.


Large vocabularies.


Sparse representations.


Limited semantic information.


These limitations motivate more advanced representations such as TF-IDF and embeddings.

`

};

export default lesson5;