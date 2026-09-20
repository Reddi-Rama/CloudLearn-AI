const lesson4 = {

  id: "lesson4",

  title: "Tokenization",

  content: `

Lesson 04

Tokenization


1. Introduction


Tokenization is one of the fundamental operations in natural language processing.


It converts text into smaller units called tokens.


These tokens become the building blocks for many text-processing and machine-learning techniques.



2. What Is a Token?


A token is a unit of text produced by a tokenization process.


Depending on the tokenizer, a token may represent:


A word.


A punctuation mark.


A character.


A subword.


A special symbol.



3. Example


Text:


"Machine learning is useful."



4. Word Tokens


Possible tokens:


Machine.


learning.


is.


useful.



5. Why Tokenization Matters


Machine learning algorithms cannot directly reason over an unstructured paragraph.


Tokenization provides a structured representation that later processing steps can use.



6. Basic Workflow


Raw Text


↓


Tokenization


↓


Tokens


↓


Feature Extraction


↓


Machine Learning Model.



7. Word Tokenization


Word tokenization divides text into word-level units.



8. Simple Python Example


Python


text = "Machine learning is useful"


tokens = text.split()


print(tokens)



9. Output


Possible output:


["Machine", "learning", "is", "useful"]



10. Advantage


This approach is simple and easy to understand.



11. Limitation


split() does not handle every language, punctuation pattern, or special case correctly.



12. Punctuation


Consider:


"Hello, world!"



13. Simple split()


Python


text = "Hello, world!"


print(text.split())



14. Result


The punctuation may remain attached to words:


["Hello,", "world!"]



15. Why This Matters


"Hello," and "Hello" can become different strings even though they represent the same word with punctuation attached.



16. Regular Expressions


Regular expressions can be used for simple tokenization tasks.



17. Example


Python


import re


text = "Hello, world!"


tokens = re.findall(

    r"\\b\\w+\\b",

    text

)


print(tokens)



18. Possible Output


["Hello", "world"]



19. Important Limitation


Regular expressions are useful for controlled tasks but do not fully model natural language.



20. Tokenization With scikit-learn


Many scikit-learn text vectorizers perform tokenization internally.



21. Example


Python


from sklearn.feature_extraction.text import (

    CountVectorizer

)


documents = [

    "machine learning",

    "machine intelligence"

]


vectorizer = CountVectorizer()


X = vectorizer.fit_transform(

    documents

)



22. Vocabulary


Python


print(

    vectorizer.get_feature_names_out()

)



23. Interpretation


The vectorizer identifies terms that become features.



24. Tokenization and Vocabulary


Tokenization affects the vocabulary.


Different tokenization rules can produce different features.



25. Example


Text:


"don't"



26. Possible Tokenization


One system may produce:


["don't"].



27. Another


A different system might produce:


["do", "n't"].



28. Consequence


The resulting feature representation can differ.



29. Case Handling


Tokenization may be combined with lowercasing.



30. Example


"Machine Learning"



31. Lowercase


"machine learning"



32. Tokens


["machine", "learning"]



33. Tokenization of Numbers


Numbers can also become tokens.



34. Example


"16 GB laptop"



35. Possible Tokens


16.


GB.


laptop.



36. Important Consideration


Whether numbers should be preserved depends on the task.



37. Tokenization of URLs


Consider:


"https://example.com"



38. Possible Approaches


Keep as one token.


Replace with [URL].


Remove it.



39. Best Choice


The appropriate approach depends on the task.



40. Email Tokenization


Example:


"user@example.com"



41. Possible Representation


[email]



42. Social Media Text


Social media may contain:


Hashtags.


Mentions.


Emojis.


URLs.



43. Example


"Great product! #shopping 😊"



44. Possible Tokens


Great.


product.


#shopping.


😊.



45. Information Loss


If emojis and hashtags are removed, potentially useful sentiment information may disappear.



46. Character Tokenization


Instead of words, each character can be treated as a token.



47. Example


"cat"



48. Character Tokens


c.


a.


t.



49. Character-Level Features


Character tokenization can be useful for:


Spelling variations.


Short text.


Morphological patterns.



50. Character N-Grams


Instead of individual characters, groups of characters can be used.



51. Example


Word:


"hello"



52. Three-Character N-Grams


hel.


ell.


llo.



53. Word N-Grams


Tokens can also be grouped into sequences of words.



54. Example


Text:


"machine learning is powerful"



55. Unigrams


machine.


learning.


is.


powerful.



56. Bigrams


machine learning.


learning is.


is powerful.



57. Trigrams


machine learning is.


learning is powerful.



58. Why N-Grams?


N-grams provide local context that individual words may miss.



59. Example


"not good"



60. Unigrams


not.


good.



61. Bigram


not good.



62. Benefit


The bigram preserves the phrase as a feature.



63. Tokenization and Stop Words


Stop-word removal can occur after tokenization.



64. Example


Text:


"the product is good"



65. Tokens


the.


product.


is.


good.



66. After Stop-Word Filtering


product.


good.



67. Warning


Removing stop words can remove meaningful information.



68. Tokenization and Stemming


Tokens can be transformed using stemming.



69. Example


Tokens:


connected.


connecting.


connection.



70. Stemming


A stemming algorithm may map related words toward a common stem.



71. Lemmatization


Lemmatization attempts to map words to linguistically meaningful base forms.



72. Tokenization and Machine Learning


Tokenization determines the units from which features are constructed.



73. Pipeline


Text


↓


Normalize


↓


Tokenize


↓


Build vocabulary


↓


Create vectors


↓


Train model.



74. Training and Test Data


Tokenization rules should remain consistent between training and test data.



75. Pipeline Example


Python


from sklearn.pipeline import Pipeline


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)


from sklearn.linear_model import (

    LogisticRegression

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



76. Fit


Python


pipeline.fit(

    X_train,

    y_train

)



77. Predict


Python


predictions = pipeline.predict(

    X_test

)



78. Why Pipeline?


The same feature extraction procedure is applied consistently during training and prediction.



79. Tokenization in Multilingual Text


Different languages may require different tokenization strategies.



80. Example


Languages with complex word formation may benefit from specialized tokenization.



81. Unicode


Tokenizers should correctly handle Unicode text when multilingual or international data is involved.



82. Experiment 1


Create a corpus containing:


Words.


Punctuation.


Numbers.



83. Apply


Simple split.



84. Compare


The result with a regular-expression tokenizer.



85. Experiment 2


Create text containing:


URLs.


Emails.


Hashtags.


Emojis.



86. Test


Different tokenization strategies.



87. Experiment 3


Compare:


Word-level features.


Character-level features.



88. Experiment 4


Compare unigram features with unigram + bigram features.



89. Evaluation


Use cross-validation to determine whether the additional representation improves performance.



90. Common Mistakes


Mistake 1:


Assuming split() is a complete NLP tokenizer.


Mistake 2:


Removing punctuation without checking its importance.


Mistake 3:


Removing numbers automatically.


Mistake 4:


Ignoring emojis and hashtags in social-media data.


Mistake 5:


Using inconsistent tokenization between training and inference.


Mistake 6:


Creating features from test data during preprocessing.



91. Practice


1. What is tokenization?


2. What is a token?


3. What is word tokenization?


4. What is character tokenization?


5. What are word n-grams?


6. What are character n-grams?


7. Why can bigrams be useful?


8. Why can split() be insufficient?


9. Why should tokenization be consistent during inference?


10. Why should punctuation handling depend on the task?



92. Quick Check


Question 1


What is the main purpose of tokenization?


Answer:


To divide text into structured units that can be processed and represented as features.



Question 2


What is a bigram?


Answer:


A sequence containing two consecutive tokens.



Question 3


Why can character features be useful?


Answer:


They can capture spelling variations and subword patterns.



93. Summary


Tokenization converts text into manageable units.


Common approaches include:


Word tokenization.


Character tokenization.


Subword tokenization.


N-gram construction.



The tokenization strategy affects:


Vocabulary.


Feature representation.


Model behavior.



94. Extended Study


If a document is represented as:


D = [t₁, t₂, ..., tₙ]


then tokenization can be viewed as a function:


T(D) = [t₁, t₂, ..., tₙ].


Feature extraction then transforms these tokens into numerical features.



95. Final Reflection


Tokenization is more than splitting text by spaces.


A good tokenizer considers:


Language.


Punctuation.


Numbers.


Symbols.


Domain.


Task requirements.


The right tokenization strategy can preserve information that would otherwise be lost.

`

};

export default lesson4;