const lesson7 = {

  id: "lesson7",

  title: "N-Grams and Feature Engineering for Text",

  content: `

Lesson 07

N-Grams and Feature Engineering for Text


1. Introduction


A single word can provide useful information, but individual words do not always capture enough context.


Consider:


"not useful"



2. Unigram Representation


The sentence contains:


not.


useful.



3. Problem


A model using only individual words may need to learn the relationship between these two terms indirectly.



4. Bigram


A bigram represents two consecutive tokens:


not useful.



5. Benefit


The phrase preserves a small amount of local word-order information.



6. What Is an N-Gram?


An n-gram is a sequence of n consecutive tokens.



7. Unigram


n = 1.



8. Bigram


n = 2.



9. Trigram


n = 3.



10. Four-Gram


n = 4.



11. Example Sentence


"machine learning is useful"



12. Unigrams


machine.


learning.


is.


useful.



13. Bigrams


machine learning.


learning is.


is useful.



14. Trigrams


machine learning is.


learning is useful.



15. Why N-Grams?


N-grams capture local combinations of terms.



16. Example


"very good"



17. Unigrams


very.


good.



18. Bigram


very good.



19. Another Example


"not good"



20. Bigram


not good.



21. Sentiment


The phrase can provide information that individual words may not capture as directly.



22. CountVectorizer N-Grams


Python


from sklearn.feature_extraction.text import (

    CountVectorizer

)


vectorizer = CountVectorizer(

    ngram_range=(1, 2)

)



23. Meaning


ngram_range=(1, 2)


means:


Unigrams.


Bigrams.



24. TF-IDF N-Grams


Python


from sklearn.feature_extraction.text import (

    TfidfVectorizer

)


vectorizer = TfidfVectorizer(

    ngram_range=(1, 2)

)



25. Feature Example


For:


"machine learning is useful"



Features may include:


machine.


learning.


is.


useful.


machine learning.


learning is.


is useful.



26. Feature Explosion


N-grams increase the number of possible features.



27. Example


Suppose:


Vocabulary = 10,000 words.



28. Possible Bigrams


There can potentially be a very large number of word combinations.



29. Important Point


Not every possible combination actually occurs in the dataset.



30. Sparse Representation


Even with many possible features, individual documents usually contain only a small number of them.



31. Memory Consideration


Large n-gram ranges can increase:


Memory usage.


Training time.


Model complexity.



32. Common Range


A practical starting point is often:


(1, 2)



33. Trigrams


Use:


(1, 3)



34. Caution


Trigrams can increase the feature space substantially.



35. Feature Selection


When text produces many features, feature selection can help.



36. SelectKBest


Python


from sklearn.feature_selection import (

    SelectKBest,

    chi2

)



37. Example


Python


selector = SelectKBest(

    score_func=chi2,

    k=5000

)



38. Pipeline


Python


from sklearn.pipeline import Pipeline


pipeline = Pipeline([

    (

        "tfidf",

        TfidfVectorizer(

            ngram_range=(1, 2)

        )

    ),

    (

        "select",

        SelectKBest(

            score_func=chi2,

            k=5000

        )

    ),

    (

        "model",

        LogisticRegression(

            max_iter=1000

        )

    )

])



39. Why Pipeline?


Feature selection must be learned within the training process to avoid leakage.



40. Character N-Grams


N-grams can also operate on characters rather than words.



41. Example Word


"learning"



42. Character Bigrams


le.


ea.


ar.


rn.


ni.


in.


ng.



43. Character Trigrams


lea.


ear.


arn.


rni.


nin.


ing.



44. Character Features


Character n-grams can help capture:


Spelling patterns.


Prefixes.


Suffixes.


Morphological patterns.



45. Misspelling Example


"recieve"



46. Character Pattern


Character features can still capture similarities with related spellings.



47. Word N-Grams vs Character N-Grams


Word n-grams:


More interpretable.


Capture word-level phrases.



Character n-grams:


More robust to spelling variations.


Capture subword patterns.



48. scikit-learn Character N-Grams


Python


vectorizer = TfidfVectorizer(

    analyzer="char",

    ngram_range=(3, 5)

)



49. Character Analyzer


The analyzer determines what units are used to construct features.



50. Word Analyzer


Python


vectorizer = TfidfVectorizer(

    analyzer="word"

)



51. Character Analyzer


Python


vectorizer = TfidfVectorizer(

    analyzer="char"

)



52. Character Boundary Analyzer


scikit-learn also provides:


char_wb.



53. Example


Python


vectorizer = TfidfVectorizer(

    analyzer="char_wb",

    ngram_range=(3, 5)

)



54. Meaning


Character features are constructed with attention to word boundaries.



55. Domain-Specific Features


Text feature engineering can use domain knowledge.



56. Example


Support tickets may contain:


Error codes.


Product IDs.


Version numbers.



57. Feature Example


"ERROR_503"



58. Possible Feature


error_code_503 = 1.



59. Email Classification


Useful features might include:


Number of links.


Number of uppercase characters.


Presence of attachments.


Message length.



60. Sentiment


Useful features may include:


Positive word counts.


Negative word counts.


Exclamation marks.



61. Important Principle


Domain features should be evaluated empirically.



62. Text Length


Document length can be a useful numerical feature.



63. Example


Python


length = len(text)



64. Word Count


Python


word_count = len(

    text.split()

)



65. Character Count


Python


char_count = len(text)



66. Why Useful?


Some classes may systematically contain:


Shorter documents.


Longer documents.



67. Punctuation Count


Python


import string


punctuation_count = sum(

    1

    for char in text

    if char in string.punctuation

)



68. Uppercase Count


Python


uppercase_count = sum(

    1

    for char in text

    if char.isupper()

)



69. Numeric Count


Python


numeric_count = sum(

    1

    for char in text

    if char.isdigit()

)



70. Combining Text and Numeric Features


A real-world model may need:


Text features.


Metadata features.



71. Example


Support ticket:


Text.


Priority.


Customer type.


Product category.



72. Challenge


Text features are often high-dimensional sparse vectors.


Metadata may be dense numerical or categorical data.



73. ColumnTransformer


Different feature types can be processed separately.



74. Conceptual Structure


Text


→


TF-IDF



Metadata


→


Numerical/Categorical preprocessing



Both


↓


Combined model.



75. Example


Python


from sklearn.compose import ColumnTransformer


from sklearn.preprocessing import (

    OneHotEncoder,

    StandardScaler

)



76. Important Design


The exact ColumnTransformer structure depends on the dataset representation.



77. Feature Hashing


For extremely large vocabularies, hashing can provide a fixed-dimensional representation.



78. HashingVectorizer


Python


from sklearn.feature_extraction.text import (

    HashingVectorizer

)



79. Example


Python


vectorizer = HashingVectorizer(

    n_features=2**18

)



80. Advantage


The feature space has a fixed size and does not require storing a learned vocabulary in the same way as CountVectorizer.



81. Trade-Off


Hash collisions can occur.



82. Meaning


Different terms may map to the same feature position.



83. When Useful?


Hashing can be useful for:


Large-scale text streams.


Memory-sensitive systems.


Online learning workflows.



84. Text Feature Engineering Workflow


Raw text


↓


Normalization


↓


Tokenization


↓


N-grams


↓


TF-IDF


↓


Feature selection


↓


Model.



85. Experiment 1


Compare:


Unigrams.


Unigrams + bigrams.


Unigrams + bigrams + trigrams.



86. Measure


Accuracy.


F1.


Training time.



87. Experiment 2


Compare:


Word n-grams.


Character n-grams.



88. Dataset


Use noisy text containing spelling variations.



89. Experiment 3


Add document-level features:


Character count.


Word count.


Punctuation count.



90. Experiment 4


Use SelectKBest.



91. Compare


Before feature selection.


After feature selection.



92. Experiment 5


Compare:


TfidfVectorizer.


HashingVectorizer.



93. Important Evaluation


Do not select a feature engineering strategy based only on training performance.



94. Common Mistakes


Mistake 1:


Using excessively large n-gram ranges.


Mistake 2:


Ignoring computational cost.


Mistake 3:


Selecting features using the complete dataset before cross-validation.


Mistake 4:


Assuming more features always improve performance.


Mistake 5:


Ignoring domain-specific features.



95. Practice


1. What is an n-gram?


2. What is a unigram?


3. What is a bigram?


4. What is a trigram?


5. Why can bigrams help sentiment classification?


6. What are character n-grams?


7. What is SelectKBest?


8. Why can character n-grams help with spelling errors?


9. What is HashingVectorizer?


10. What are domain-specific text features?



96. Quick Check


Question 1


What does ngram_range=(1,2) produce?


Answer:


Unigrams and bigrams.



Question 2


Why can large n-gram ranges be expensive?


Answer:


They can produce very large feature spaces and increase memory and training costs.



Question 3


Why should feature selection be performed inside the pipeline?


Answer:


To prevent information from the validation data from influencing feature selection.



97. Summary


N-grams extend basic word features by representing sequences of tokens.


Important techniques include:


Word n-grams.


Character n-grams.


Feature selection.


Document-level features.


HashingVectorizer.



N-grams can improve context representation, but they also increase dimensionality and computational cost.



98. Extended Study


For a token sequence:


t₁, t₂, ..., tₙ,


an n-gram of size k can be represented as:


(tᵢ, tᵢ₊₁, ..., tᵢ₊ₖ₋₁).



The number of possible n-grams can grow rapidly with vocabulary size.


Therefore practical systems often use:


Frequency thresholds.


Maximum feature limits.


Feature selection.


Regularization.



99. Final Reflection


Text feature engineering is a balance between:


Information.


Dimensionality.


Interpretability.


Computation.


Generalization.



A good feature representation is not necessarily the largest one.


The objective is to retain useful information while allowing the model to generalize effectively.

`

};

export default lesson7;