const lesson14 = {

  id: "lesson14",

  title: "Text Similarity and Search",

  content: `

Lesson 14

Text Similarity and Search


1. Introduction


Many applications need to determine how similar two pieces of text are.


Examples include:


Search engines.


Document retrieval.


Duplicate detection.


Recommendation systems.


Question matching.


FAQ systems.



2. Basic Question


Given two documents:


How similar are they?



3. Example


Document A:


"machine learning algorithms"



Document B:


"machine learning methods"



4. Intuition


The documents discuss related concepts.



5. Another Example


Document A:


"machine learning algorithms"



Document B:


"cooking recipes"



6. Intuition


The documents are less similar.



7. Text Similarity


Text similarity measures the degree of relatedness between text representations.



8. Vector Representation


A common approach is:


Text


↓


Vectorization


↓


Similarity calculation.



9. TF-IDF


TF-IDF is one common representation for classical text similarity.



10. Cosine Similarity


Cosine similarity compares the angle between two vectors.



11. Formula


cosine(x,y)


=


(x · y)


/


(||x||₂ ||y||₂)



12. Dot Product


The dot product is:


x · y


=


x₁y₁ + x₂y₂ + ... + xₙyₙ.



13. Norm


The L2 norm is:


||x||₂


=


sqrt(

x₁² + x₂² + ... + xₙ²

).



14. Interpretation


For normalized vectors:


A value close to 1 indicates strong directional similarity.


A value close to 0 indicates little similarity.



15. Important Note


Cosine similarity measures similarity in vector space.


It does not guarantee that two texts have the same meaning.



16. Example


"car"


and:


"automobile"



17. Problem


A basic word-based representation may consider them unrelated if they do not share vocabulary.



18. scikit-learn


Python


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)


from sklearn.metrics.pairwise import (

    cosine_similarity

)



19. Documents


Python


documents = [

    "machine learning algorithms",

    "machine learning methods",

    "cooking recipes and food"

]



20. Vectorization


Python


vectorizer = TfidfVectorizer()


X = vectorizer.fit_transform(

    documents

)



21. Similarity Matrix


Python


similarity = cosine_similarity(X)



22. Output


The result is a square matrix.



23. Interpretation


similarity[i][j]


represents the similarity between document i and document j.



24. Self-Similarity


A document compared with itself generally has cosine similarity:


1.



25. Similar Documents


Documents sharing important terms may receive higher similarity.



26. Query Search


Similarity can be used to build a simple search system.



27. Example Query


"machine learning"



28. Documents


Python


documents = [

    "machine learning algorithms",

    "deep learning models",

    "cooking recipes",

    "machine learning applications"

]



29. Fit Vectorizer


Python


vectorizer = TfidfVectorizer()


document_vectors = vectorizer.fit_transform(

    documents

)



30. Query Vector


Python


query = [

    "machine learning"

]


query_vector = vectorizer.transform(

    query

)



31. Similarity


Python


scores = cosine_similarity(

    query_vector,

    document_vectors

)[0]



32. Inspect Scores


Python


print(scores)



33. Ranking


Higher similarity scores can be used to rank documents.



34. Sort


Python


ranked_indices = scores.argsort()[::-1]



35. Display


Python


for index in ranked_indices:

    print(

        documents[index],

        scores[index]

    )



36. Search Pipeline


Query


↓


Vectorize query


↓


Calculate similarity


↓


Rank documents


↓


Return results.



37. Why TF-IDF?


It gives more weight to terms that are relatively informative within the corpus.



38. Query Terms


A query containing common words may receive less discriminative weight.



39. N-Grams


Search can use n-gram features.



40. Example


Python


TfidfVectorizer(

    ngram_range=(1, 2)

)



41. Benefit


Phrases can provide additional local context.



42. Example


Query:


"machine learning"



43. Feature


"machine learning"



44. Exact Phrase Information


N-grams can help distinguish documents containing relevant word sequences.



45. Search Limitations


TF-IDF-based search is primarily lexical.



46. Lexical Similarity


It works strongly when documents share words or n-grams.



47. Semantic Similarity


Semantic systems attempt to capture meaning even when different words are used.



48. Example


"car repair"


and:


"automobile maintenance"



49. Challenge


The words overlap only partially.



50. Embeddings


Dense vector embeddings can provide another approach to semantic similarity.



51. Important Distinction


TF-IDF similarity:


Based mainly on shared lexical features.



Embeddings:


Can represent broader semantic relationships.



52. Duplicate Detection


Similarity can help identify documents that are nearly identical.



53. Example


Document A:


"The product arrived quickly."



54. Document B:


"The product was delivered quickly."



55. Similarity


The documents share important terms and meaning-related structure.



56. Threshold


A similarity threshold can be selected.



57. Example


If:


similarity > threshold.



then:


flag as potentially similar.



58. Important Warning


The threshold must be validated on representative data.



59. Question Matching


Similarity can also compare:


User question.


FAQ question.



60. Example


User:


"How can I reset my password?"



61. FAQ


"What should I do if I forget my password?"



62. Challenge


The wording differs.



63. Classical TF-IDF


May detect shared terms such as:


password.



64. Semantic Embeddings


May capture stronger semantic similarity.



65. Search Evaluation


A search system should be evaluated using retrieval metrics when labeled relevance data is available.



66. Precision at K


Precision@K measures the proportion of the top K results that are relevant.



67. Formula


Precision@K


=


Relevant results in top K


/


K.



68. Example


Top 5 results.


3 are relevant.



69. Precision@5


=


3 / 5


=


0.60.



70. Recall


Recall measures how much of the relevant collection has been retrieved.



71. Ranking


Search systems should consider not only whether a relevant document appears, but where it appears.



72. Mean Reciprocal Rank


MRR can be useful when the position of the first relevant result matters.



73. Important Principle


Evaluation should reflect the actual search objective.



74. Search Index


For small datasets, computing similarity against every document can be practical.



75. Large Dataset


Searching millions of documents with direct pairwise comparisons becomes expensive.



76. Vector Databases


Large-scale semantic search often uses specialized vector indexes or vector databases.



77. Classical Search


Traditional information retrieval systems may use:


Inverted indexes.


Term weighting.


Ranking functions.



78. TF-IDF Search


Useful for:


Small datasets.


Educational systems.


Simple document retrieval.



79. Experiment 1


Create a document collection.



80. Build


TF-IDF vectors.



81. Calculate


Pairwise cosine similarity.



82. Experiment 2


Build a simple search engine.



83. Queries


Create multiple test queries.



84. Rank


Documents using cosine similarity.



85. Experiment 3


Compare:


Unigram TF-IDF.


Unigram + bigram TF-IDF.



86. Experiment 4


Create duplicate and near-duplicate documents.



87. Determine


Similarity scores.



88. Experiment 5


Compare lexical similarity with a semantic embedding approach if an embedding model is available.



89. Evaluation


Record:


Precision@K.


Recall.


MRR.


Response time.



90. Common Mistakes


Mistake 1:


Assuming high lexical overlap means identical meaning.


Mistake 2:


Using arbitrary similarity thresholds.


Mistake 3:


Ignoring ranking order.


Mistake 4:


Comparing similarity scores from incompatible vector spaces.


Mistake 5:


Testing only easy examples.



91. Practice


1. What is text similarity?


2. What is cosine similarity?


3. What does a cosine score measure?


4. Why is TF-IDF useful for similarity?


5. What is lexical similarity?


6. What is semantic similarity?


7. What is Precision@K?


8. What is MRR?


9. Why can similarity thresholds be difficult to choose?



92. Quick Check


Question 1


What does cosine similarity compare?


Answer:


The angle or directional relationship between two vectors.



Question 2


Why might "car" and "automobile" have low TF-IDF similarity?


Answer:


They may not share the same lexical features.



Question 3


What does Precision@5 measure?


Answer:


The proportion of the top five retrieved results that are relevant.



93. Summary


Text similarity transforms documents into vectors and compares those vectors.


A classical workflow is:


Text


↓


TF-IDF


↓


Vector representation


↓


Cosine similarity


↓


Ranking.



94. Extended Study


For vectors:


x and y,



cosine similarity is:


sim(x,y)


=


xᵀy


/


(||x||₂||y||₂).



If vectors are normalized:


||x||₂ = ||y||₂ = 1,



then:


sim(x,y)


=


xᵀy.



95. Final Reflection


Similarity is a foundation for many text systems.


The central idea is simple:


Represent text numerically.


Define a similarity function.


Compare representations.


Rank or retrieve relevant items.


The challenge is choosing a representation and similarity measure that match the meaning of "similar" for the application.

`

};

export default lesson14;