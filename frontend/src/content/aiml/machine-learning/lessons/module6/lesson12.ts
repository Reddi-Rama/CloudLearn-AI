const lesson12 = {

  id: "lesson12",

  title: "Topic Modeling with NMF",

  content: `

Lesson 12

Topic Modeling with NMF


1. Introduction


Text classification uses predefined labels.


Topic modeling solves a different problem.


Instead of starting with known categories, topic modeling attempts to discover groups of words that frequently occur together.



2. What Is a Topic?


A topic can be thought of as a recurring theme represented by a collection of related words.



3. Example


Suppose a collection contains articles about:


football.


players.


matches.


goals.



4. Possible Topic


Sports.



5. Another Collection


Words such as:


Python.


software.


programming.


database.



6. Possible Topic


Technology.



7. What Is Topic Modeling?


Topic modeling is an unsupervised learning approach that attempts to discover latent themes in a collection of documents.



8. Why Unsupervised?


The documents do not need predefined topic labels.



9. Input


A collection of documents.



10. Output


A set of discovered topics and their associated words.



11. Important Principle


The discovered topics are mathematical patterns.


A human interprets those patterns and gives them meaningful names.



12. Non-Negative Matrix Factorization


NMF stands for:


Non-Negative Matrix Factorization.



13. Basic Idea


NMF factorizes a non-negative matrix into two smaller non-negative matrices.



14. Text Matrix


Suppose:


X



is a document-term matrix.



15. Factorization


NMF attempts to approximate:


X ≈ W H



16. Matrix W


W represents the relationship between:


Documents.


and:


Topics.



17. Matrix H


H represents the relationship between:


Topics.


and:


Terms.



18. Interpretation


Each topic has a collection of terms with different weights.



19. Example


A discovered topic might have high weights for:


football.


goal.


team.


player.



20. Human Interpretation


A person may label this topic:


Sports.



21. Another Topic


High-weight terms:


database.


query.


SQL.


table.



22. Human Interpretation


Possible label:


Databases.



23. Important Point


The algorithm does not automatically know the topic name.


It only discovers numerical patterns.



24. Why Non-Negative?


Text representations such as:


Counts.


TF-IDF.


are non-negative.



25. NMF


NMF maintains non-negative components, which often makes the resulting topics easier to interpret.



26. Preparing Text


A common workflow is:


Documents


↓


TF-IDF


↓


NMF


↓


Topic representations.



27. Import


Python


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)


from sklearn.decomposition import NMF



28. Example Documents


Python


documents = [

    "python programming software development",

    "software engineering programming code",

    "football player team goal match",

    "football team player championship",

    "database sql query table",

    "database query sql data"

]



29. TF-IDF


Python


vectorizer = TfidfVectorizer(

    stop_words="english"

)


X = vectorizer.fit_transform(

    documents

)



30. Number of Topics


Python


nmf = NMF(

    n_components=3,

    random_state=42

)



31. Fit


Python


W = nmf.fit_transform(

    X

)



32. Topic-Term Matrix


Python


H = nmf.components_



33. Shape


Python


print(

    W.shape

)


print(

    H.shape

)



34. Interpretation


If:


W.shape = (6, 3)



then there are:


6 documents.


3 topics.



35. Topic-Term Matrix


If:


H.shape = (3, vocabulary_size)



then each row represents one topic.



36. Feature Names


Python


feature_names = (

    vectorizer.get_feature_names_out()

)



37. Display Topics


Python


for topic_index, topic in enumerate(

    nmf.components_

):

    top_indices = topic.argsort()[-5:][::-1]

    words = [

        feature_names[i]

        for i in top_indices

    ]

    print(

        topic_index,

        words

    )



38. Interpretation


The highest-weight words provide clues about the meaning of each topic.



39. Topic Assignment


The W matrix contains document-topic weights.



40. Example


A document might have:


[0.10, 0.80, 0.05].



41. Interpretation


The document has the strongest association with:


Topic 2.



42. Important Warning


Topic weights are not necessarily probabilities.



43. Topic Count


Choosing the number of topics is an important modeling decision.



44. Example


n_components=2.



45. Another


n_components=5.



46. Problem


Too few topics may combine unrelated themes.



47. Too Many Topics


Too many topics may split coherent themes into smaller fragments.



48. Selecting Topic Count


There is no universal number that is correct for every dataset.



49. Possible Approaches


Inspect topic coherence.


Inspect topic interpretability.


Compare reconstruction error.


Evaluate downstream usefulness.



50. Reconstruction Error


NMF attempts to approximate:


X ≈ W H.



51. Error


The difference between:


X.


and:


W H.


can be measured.



52. Important Limitation


A lower reconstruction error does not automatically mean that the topics are more meaningful to humans.



53. Topic Interpretability


A useful topic often contains terms that form a coherent theme.



54. Example


Topic:


football.


team.


goal.


player.



55. Coherence


These words have an intuitive relationship.



56. Poor Topic


Words:


football.


database.


banana.


airplane.



57. Interpretation


The topic may be difficult to interpret.



58. TF-IDF vs Count Matrix


NMF can work with non-negative matrices.


Both count-based and TF-IDF representations can be considered.



59. Example


Python


vectorizer = CountVectorizer(

    stop_words="english"

)



60. NMF


Python


X = vectorizer.fit_transform(

    documents

)


nmf = NMF(

    n_components=3,

    random_state=42

)


W = nmf.fit_transform(X)



61. Topic Visualization


Topic-term weights can be displayed using:


Tables.


Bar charts.


Word clouds.



62. Important Note


Visualization is useful for interpretation but does not replace quantitative evaluation.



63. New Document


A fitted NMF model can transform a new document after the same vectorizer is applied.



64. Example


Python


new_document = [

    "football match player goal"

]


new_X = vectorizer.transform(

    new_document

)



65. Transform


Python


topic_weights = nmf.transform(

    new_X

)



66. Interpretation


The resulting vector indicates how strongly the document relates to each discovered topic.



67. Topic Modeling vs Classification


Classification:


Labels are known.



Topic modeling:


Topics are discovered.



68. Topic Modeling vs Clustering


Topic modeling represents documents using latent topic components.


Clustering directly groups observations according to similarity.



69. Applications


Topic modeling can help with:


Document exploration.


News analysis.


Research literature.


Customer feedback.


Support tickets.


Large document collections.



70. Experiment 1


Create a corpus containing several themes.



71. Apply


TF-IDF.



72. Train


NMF with:


2 topics.



73. Repeat


Use:


3 topics.



74. Compare


Inspect the top words.



75. Experiment 2


Try:


CountVectorizer.



76. Compare


TF-IDF-based NMF.


Count-based NMF.



77. Experiment 3


Change:


n_components.



78. Record


Reconstruction error.



79. Also Record


Human interpretability.



80. Experiment 4


Assign each document to its strongest topic.



81. Inspect


Documents belonging to each topic.



82. Experiment 5


Transform new documents and inspect their topic weights.



83. Common Mistakes


Mistake 1:


Assuming topic names are automatically generated.


Mistake 2:


Choosing the number of topics without inspection.


Mistake 3:


Treating topic weights as probabilities without checking the model.


Mistake 4:


Using only reconstruction error to judge topic quality.


Mistake 5:


Ignoring stop words and common noisy terms.


Mistake 6:


Assuming discovered topics are guaranteed to match human categories.



84. Practice


1. What is topic modeling?


2. What is NMF?


3. What does W represent?


4. What does H represent?


5. Why must the input matrix be non-negative?


6. How are topics interpreted?


7. What does n_components control?


8. Why is topic count difficult to choose?


9. How is topic modeling different from classification?



85. Quick Check


Question 1


Does NMF automatically assign human-readable names to topics?


Answer:


No. It produces numerical components that humans interpret.



Question 2


What does a row of the topic-term matrix represent?


Answer:


The weights of terms associated with one topic.



Question 3


What does W represent?


Answer:


The relationship between documents and discovered topics.



86. Summary


NMF provides an interpretable approach to topic modeling.


The basic workflow is:


Text


↓


Vectorization


↓


Non-negative matrix


↓


NMF


↓


Topic-term patterns


↓


Human interpretation.



87. Extended Study


NMF approximates a non-negative matrix:


X ≈ W H.



If:


X ∈ Rⁿˣᵐ,



then:


W ∈ Rⁿˣᵏ



and:


H ∈ Rᵏˣᵐ,



where:


n = number of documents.


m = vocabulary size.


k = number of topics.



88. Final Reflection


NMF demonstrates an important machine learning idea:


A large collection of high-dimensional text data can be represented using a smaller number of latent components.


These components can help humans explore large document collections and discover recurring themes.

`

};

export default lesson12;