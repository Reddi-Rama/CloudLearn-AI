const lesson9 = {

  id: "lesson9",

  title: "Text Feature Engineering",

  content: `

Lesson 09

Text Feature Engineering


1. Introduction


Text data appears in many machine learning applications.


Examples:


Product reviews.


Support tickets.


News articles.


Search queries.


Emails.


Social media posts.


Customer feedback.


Machine learning algorithms require numerical representations, so text must be transformed into useful features.



2. Text to Features


A basic workflow is:


Raw Text


→


Cleaning


→


Tokenization


→


Feature Representation


→


Machine Learning Model.



3. Example


Raw text:


"The product is excellent."


Possible numerical features include:


Word count.


Character count.


Word frequency.


TF-IDF values.


Embeddings.



4. Basic Text Features


Simple features can include:


Character count.


Word count.


Sentence count.


Digit count.


Uppercase count.


Punctuation count.



5. Character Count


Python:


df["char_count"] = (

    df["text"]
    .fillna("")
    .str.len()

)



6. Word Count


Python:


df["word_count"] = (

    df["text"]
    .fillna("")
    .str.split()
    .str.len()

)



7. Why Simple Features Help


Even simple counts can provide useful information.


For example:


Long support messages may differ from short messages.


However, simple counts do not understand the actual meaning of words.



8. Lowercasing


Text may contain:


"Machine"


and:


"machine".


Lowercasing can make them equivalent for some tasks.



9. Python


df["clean_text"] = (

    df["text"]
    .fillna("")
    .str.lower()

)



10. Punctuation


Punctuation can be:


Removed.


Preserved.


Converted into features.


The appropriate choice depends on the task.



11. Tokenization


Tokenization splits text into smaller units called:


Tokens.


A simple tokenization may split:


"The product is excellent."


into:


The.


product.


is.


excellent.



12. Word Tokens


Python:


tokens = (
    text.lower()
    .split()
)


print(
    tokens
)



13. Limitations of Simple Split


Simple splitting does not properly handle every language or punctuation pattern.


For example:


"excellent!"


may remain:


"excellent!".


More sophisticated tokenizers can handle such cases.



14. Bag of Words


Bag of Words represents a document using word occurrence information.


The basic idea is:


Vocabulary


→


Count words in each document.



15. Example Vocabulary


Suppose the vocabulary is:


cat


dog


milk.



16. Document


"The cat drinks milk."


A count representation could be:


cat = 1.


dog = 0.


milk = 1.



17. Loss of Word Order


Bag of Words does not preserve normal word order.


For example:


"dog bites man"


and:


"man bites dog"


can share the same individual word counts.



18. Why Bag of Words Is Useful


Despite this limitation, word counts can work well for:


Simple classification.


Document categorization.


Spam detection.


Baseline NLP systems.



19. CountVectorizer


scikit-learn provides:


CountVectorizer.



20. Python


from sklearn.feature_extraction.text import (
    CountVectorizer
)


documents = [

    "machine learning is useful",

    "machine learning uses data",

    "data helps learning"

]


vectorizer = CountVectorizer()


X = vectorizer.fit_transform(
    documents
)


print(
    vectorizer.get_feature_names_out()
)



21. Output Concept


The vectorizer creates a vocabulary from the training documents.


Each document becomes a numerical vector.



22. Sparse Matrix


Text feature matrices are often sparse.


Most documents contain only a small fraction of the entire vocabulary.



23. Why Sparse?


Suppose the vocabulary contains:


10,000 words.


A short document may contain only:


50 words.


Therefore, most entries in the vector are zero.



24. Binary Representation


Instead of counts, we can represent whether a word occurs:


0 = absent.


1 = present.



25. CountVectorizer Binary Mode


Python:


vectorizer = CountVectorizer(
    binary=True
)



26. N-Grams


An n-gram is a sequence of n tokens.



27. Unigram


A unigram contains one word.


Example:


machine.



28. Bigram


A bigram contains two consecutive words.


Example:


machine learning.



29. Trigram


A trigram contains three consecutive words.


Example:


machine learning model.



30. Why N-Grams?


N-grams capture some local word relationships that individual word counts cannot represent.



31. Example


Text:


"machine learning model."


Unigrams:


machine


learning


model.


Bigrams:


machine learning.


learning model.



32. CountVectorizer with Bigrams


Python:


vectorizer = CountVectorizer(
    ngram_range=(1, 2)
)


X = vectorizer.fit_transform(
    documents
)



33. N-Gram Trade-Off


Larger n-gram ranges create more features.


This can increase:


Memory usage.


Computation.


Overfitting risk.



34. Stop Words


Some very common words may contribute little information for a particular task.


Examples:


the.


is.


and.


However, whether to remove them depends on the problem.



35. Stop Word Handling


scikit-learn can use a stop-word list.


Python:


vectorizer = CountVectorizer(
    stop_words="english"
)



36. Important Caution


Removing stop words is not always beneficial.


Words that seem common can sometimes carry important information.



37. TF-IDF


TF-IDF stands for:


Term Frequency–Inverse Document Frequency.



38. Basic Idea


A word receives a higher weight when:


It is important in a document.


but


not extremely common across all documents.



39. Term Frequency


A simplified term-frequency measure describes how often a term occurs in a document.



40. Inverse Document Frequency


A simplified form is:


IDF(t)


=


log(
N / df(t)
)


where:


N = number of documents.


df(t) = number of documents containing term t.



41. TF-IDF


Conceptually:


TF-IDF


=


TF × IDF.



42. Interpretation


A word appearing in many documents receives lower inverse-document weighting.


A word that is more specific to certain documents can receive higher weight.



43. TfidfVectorizer


Python:


from sklearn.feature_extraction.text import (
    TfidfVectorizer
)


vectorizer = TfidfVectorizer()


X = vectorizer.fit_transform(
    documents
)



44. Inspecting Vocabulary


Python:


print(
    vectorizer.get_feature_names_out()
)



45. TF-IDF Matrix


Each document is represented by a numerical vector.


Each vocabulary term corresponds to a feature.



46. Why TF-IDF Is Popular


TF-IDF is useful for:


Text classification.


Document similarity.


Search.


Information retrieval.


Simple NLP baselines.



47. Text Length


Text length can itself be a feature.


Python:


df["text_length"] = (

    df["text"]
    .fillna("")
    .str.len()

)



48. Word Count


Python:


df["word_count"] = (

    df["text"]
    .fillna("")
    .str.split()
    .str.len()

)



49. Average Word Length


Python:


df["avg_word_length"] = (

    df["text_length"]
    /
    df["word_count"].replace(
        0,
        np.nan
    )

)



50. Sentiment-Related Features


For some applications, simple domain-specific features can be created.


Examples:


Positive keyword count.


Negative keyword count.


Exclamation count.


Question count.



51. Example


Python:


df["exclamation_count"] = (

    df["text"]
    .fillna("")
    .str.count("!")

)



52. Digit Count


Python:


df["digit_count"] = (

    df["text"]
    .fillna("")
    .str.count(r"\\d")

)



53. URL Count


For support or web text, the number of URLs can sometimes be useful.


Such features should be designed according to the application.



54. Text Cleaning


Possible preprocessing operations include:


Lowercasing.


Whitespace normalization.


Removing unwanted symbols.


Handling missing text.


Normalizing repeated characters.



55. Do Not Over-Clean


Some information may be useful.


For example:


Punctuation.


Capitalization.


Emojis.


Special tokens.


Whether to remove them depends on the task.



56. Missing Text


Python:


df["text"] = (
    df["text"]
    .fillna("")
)



57. Text and Train/Test Splitting


Text vectorizers should generally be fitted using the training documents and then used to transform validation or test documents.



58. Correct Workflow


Train/Test Split


→


Fit Vectorizer on Training Text


→


Transform Training Text


→


Transform Test Text.



59. Why?


The vocabulary and weighting statistics should not be learned from the evaluation set.



60. Text Classification Pipeline


Python:


from sklearn.pipeline import Pipeline


from sklearn.feature_extraction.text import (
    TfidfVectorizer
)


from sklearn.linear_model import LogisticRegression


model = Pipeline([

    (
        "tfidf",
        TfidfVectorizer()
    ),

    (
        "classifier",
        LogisticRegression(
            max_iter=2000
        )
    )

])



61. Training


Python:


model.fit(
    X_train_text,
    y_train
)



62. Prediction


Python:


predictions = model.predict(
    X_test_text
)



63. Why Pipeline?


The pipeline keeps:


Text vectorization.


Model training.


together.


This helps ensure consistent preprocessing.



64. Text Feature Dimensionality


A vocabulary of:


20,000 terms


can create:


20,000 features.


Adding bigrams can increase the feature count substantially.



65. Feature Limitation


Large vocabularies can increase memory and computation requirements.



66. Vocabulary Limiting


TfidfVectorizer supports:


max_features.



67. Python


vectorizer = TfidfVectorizer(

    max_features=5000

)



68. Minimum Document Frequency


A term can be required to appear in a minimum number of documents.


Python:


vectorizer = TfidfVectorizer(

    min_df=2

)



69. Maximum Document Frequency


Very common terms can be excluded using:


max_df.



70. Python


vectorizer = TfidfVectorizer(

    max_df=0.95

)



71. Text Feature Engineering Beyond TF-IDF


Modern systems may use:


Word embeddings.


Sentence embeddings.


Transformer representations.


These create dense numerical representations that can capture richer semantic information.



72. Important Distinction


TF-IDF:


Sparse statistical representation.


Embeddings:


Dense learned representations.



73. Domain-Specific Text Features


A customer support system may create:


Ticket length.


Number of error codes.


Number of URLs.


Number of product names.


Presence of urgent keywords.



74. Example


A network troubleshooting dataset could extract:


"timeout"


"packet loss"


"DNS"


"connection refused"


as domain-specific indicators.



75. Combining Text Features


A model can combine:


TF-IDF features.


Numerical features.


Categorical features.


For example:


Text representation


+


Ticket priority


+


Customer type.



76. ColumnTransformer


Different feature types can be processed separately.


Conceptually:


Text


→


TF-IDF.


Numerical


→


Scaling.


Categorical


→


One-Hot Encoding.



77. Experiment


Build a small text classification dataset.


Compare:


Word counts.


TF-IDF.



78. Experiment 2


Compare:


Unigrams.


Unigrams + bigrams.



79. Experiment 3


Compare:


TF-IDF only.


TF-IDF + text length.


TF-IDF + word count.



80. Experiment 4


Change:


max_features.


min_df.


max_df.


Observe how vocabulary size and model performance change.



81. Common Mistakes


Mistake 1:


Fitting the vectorizer on all data before splitting.


Mistake 2:


Removing useful words without testing.


Mistake 3:


Creating an enormous vocabulary without considering resources.


Mistake 4:


Ignoring sparse representations.


Mistake 5:


Assuming TF-IDF understands semantic meaning like a modern language model.



82. Practice


1. What is text feature engineering?


2. What is Bag of Words?


3. What is TF-IDF?


4. What is an n-gram?


5. What is a bigram?


6. Why are text matrices often sparse?


7. Why should a vectorizer be fitted only on training data?



83. Quick Check


Question 1


What does CountVectorizer produce?


Answer


A numerical representation based on token counts.


Question 2


What does TF-IDF attempt to emphasize?


Answer


Terms that are relatively informative for particular documents compared with their frequency across the document collection.


Question 3


What is a bigram?


Answer


A sequence of two consecutive tokens.



84. Summary


Text must be transformed into numerical representations before traditional machine learning algorithms can use it.


Common text features include:


Word counts.


Character counts.


Bag of Words.


N-grams.


TF-IDF.


Domain-specific indicators.


More advanced systems can use embeddings and transformer-based representations.



85. Extended Study


Text feature engineering can be viewed as a mapping:


Text


→


φ(Text).


For Bag of Words:


φ(Text)


=


word-count vector.


For TF-IDF:


φ(Text)


=


weighted term vector.


For modern language representations:


φ(Text)


may be a dense embedding.


The representation determines what information is available to the model.



86. Reflection


Before building text features, ask:


What is the prediction task?


How much text is available?


Does word order matter?


Should n-grams be included?


Would TF-IDF be a suitable baseline?


Could domain-specific features help?


How large will the vocabulary become?


Could a modern embedding representation be more appropriate?

`

};

export default lesson9;