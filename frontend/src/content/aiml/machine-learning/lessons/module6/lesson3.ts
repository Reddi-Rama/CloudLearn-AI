const lesson3 = {

  id: "lesson3",

  title: "Text Preprocessing and Normalization",

  content: `

Lesson 03

Text Preprocessing and Normalization


1. Introduction


Raw text often contains inconsistencies that can make machine learning more difficult.


Examples include:


Different capitalization.


Extra whitespace.


HTML markup.


URLs.


Punctuation.


Repeated characters.


Encoding differences.



2. What Is Text Preprocessing?


Text preprocessing transforms raw text into a cleaner and more consistent representation before feature extraction or modeling.



3. Important Principle


There is no single preprocessing pipeline that is correct for every text problem.



4. Preprocessing Goals


A preprocessing process may attempt to:


Reduce irrelevant variation.


Normalize formatting.


Remove obvious noise.


Preserve useful information.



5. Example


Raw text:


"  GREAT Product!!!  "



6. Possible Normalized Text


"great product"



7. Operations


The transformation may involve:


Whitespace normalization.


Lowercasing.


Punctuation handling.



8. Step 1 — Inspect Raw Text


Before cleaning, inspect representative examples.



9. Example


Python


texts = [

    "Great product!",

    "great PRODUCT",

    "Great   product",

    "GREAT product!!!"

]



10. Why Inspect?


The examples may reveal:


Repeated patterns.


Noise.


Important punctuation.


Formatting differences.



11. Step 2 — Whitespace Normalization


Multiple spaces can be replaced with a single space.



12. Python


import re


def normalize_whitespace(text):

    return re.sub(

        r"\\s+",

        " ",

        text

    ).strip()



13. Example


Python


text = "Great    product"


print(

    normalize_whitespace(text)

)



14. Output


Possible output:


Great product.



15. Step 3 — Lowercasing


Python


text = text.lower()



16. Example


"Machine Learning"


becomes:


"machine learning".



17. Benefit


Words with different capitalization can be treated as the same term.



18. Limitation


Case may sometimes carry useful information.



19. Example


"US"


and:


"us"



20. Interpretation


These can represent different meanings.



21. Step 4 — Punctuation


Punctuation can be handled in several ways.



22. Option 1


Keep punctuation.



23. Option 2


Remove selected punctuation.



24. Option 3


Replace punctuation with spaces.



25. Example


"excellent!!!"



26. Possible transformation


"excellent"



27. Important Principle


The choice should depend on the task.



28. Sentiment Analysis


Repeated exclamation marks may sometimes contain useful information.



29. Step 5 — HTML Removal


Web text may contain HTML markup.



30. Example


"<div>Excellent product</div>"



31. Simple Pattern


Python


clean = re.sub(

    r"<[^>]+>",

    " ",

    text

)



32. Important Warning


Regular expressions can be insufficient for complex HTML.



33. Production Consideration


For complex HTML documents, an HTML parser may be more appropriate.



34. Step 6 — URL Handling


URLs can be:


Removed.


Replaced by a special token.


Kept as text.



35. Example


"Visit https://example.com"



36. Replacement


"[URL]"



37. Why Replace?


The presence of a URL may be useful even if the exact URL is not.



38. Step 7 — Email Addresses


An email address can similarly be replaced with:


[EMAIL]



39. Example


"Contact user@example.com"



40. Normalized


"Contact [EMAIL]"



41. Step 8 — Numbers


Numbers should be handled according to the task.



42. Example


Product:


"16 GB"



43. Possible Representation


Keep:


16.



44. Another Example


Financial text:


"₹50,000"



45. Important Principle


Numbers may contain highly predictive information.



46. Step 9 — Special Characters


Some special characters are noise.


Others may contain useful meaning.



47. Example


Programming text may contain:


+.


-.


#.


_.



48. Important Principle


Never remove special characters without considering the domain.



49. Step 10 — Repeated Characters


User-generated text may contain:


"sooooo good"



50. Normalization


A system might reduce repeated characters.



51. Example


"sooooo"


→


"soo"



52. Caution


Repeated characters can sometimes communicate emphasis.



53. Step 11 — Unicode Normalization


Unicode allows multiple representations of visually similar characters.



54. Why?


Normalization can make text representations more consistent.



55. Python


import unicodedata


normalized = unicodedata.normalize(

    "NFKC",

    text

)



56. Important Note


Unicode normalization should be selected carefully for multilingual data.



57. Step 12 — Stop Words


Stop words are frequent words that may contribute limited information for some tasks.



58. Example


"the"


"is"


"and"



59. Removal


A stop-word list can be applied.



60. Important Warning


Do not automatically remove stop words.



61. Example


"not useful"



62. If "not" is removed:


"useful"



63. Meaning


The meaning can change.



64. Step 13 — Tokenization


After normalization, text can be tokenized.



65. Simple Tokenization


Python


tokens = text.split()



66. Example


Python


text = "machine learning is useful"


tokens = text.split()



67. Result


["machine", "learning", "is", "useful"]



68. Limitation


split() is simple and does not handle every language or punctuation case correctly.



69. scikit-learn


Many scikit-learn vectorizers perform tokenization as part of feature extraction.



70. Example


Python


from sklearn.feature_extraction.text import (
    CountVectorizer
)


vectorizer = CountVectorizer()



71. Fit


Python


X = vectorizer.fit_transform(

    texts

)



72. Inspect Vocabulary


Python


print(

    vectorizer.get_feature_names_out()

)



73. Custom Preprocessing


A preprocessing function can be applied before vectorization.



74. Example


Python


def clean_text(text):

    text = text.lower()

    text = normalize_whitespace(text)

    return text



75. Apply


Python


cleaned_texts = [

    clean_text(text)

    for text in texts

]



76. Then Vectorize


Python


vectorizer = CountVectorizer()


X = vectorizer.fit_transform(

    cleaned_texts

)



77. Preprocessing Pipeline


A text workflow can be viewed as:


Raw text


↓


Normalization


↓


Tokenization


↓


Vectorization


↓


Model.



78. Why Keep Steps Organized?


It improves:


Reproducibility.


Debugging.


Consistency.



79. Training vs Test Data


Preprocessing must be handled carefully when it learns information from data.



80. Vocabulary Learning


For CountVectorizer:


The vocabulary is learned during fit.



81. Correct Workflow


Fit vectorizer on training data.



82. Then:


Transform validation/test data using the learned vocabulary.



83. Python


vectorizer.fit(

    X_train

)


X_train_vectorized = vectorizer.transform(

    X_train

)


X_test_vectorized = vectorizer.transform(

    X_test

)



84. Incorrect Workflow


Do not fit the vocabulary independently on the test set when evaluating a trained model.



85. Why?


The feature representation should be determined using the training procedure.



86. Pipeline


A safer approach is to place vectorization and the classifier inside a pipeline.



87. Example


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



88. Fit


Python


pipeline.fit(

    X_train,

    y_train

)



89. Predict


Python


predictions = pipeline.predict(

    X_test

)



90. Why Pipeline?


The vectorizer learns vocabulary and statistics within the training process.



91. Cross-Validation


Pipelines are especially important when text vectorization is evaluated with cross-validation.



92. Example


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



93. Why?


Each fold learns its text representation from the corresponding training portion.



94. Text Normalization Choices


Possible transformations include:


Lowercase.


Whitespace normalization.


HTML handling.


URL handling.


Email handling.


Number handling.


Unicode normalization.


Stop-word handling.



95. Not Every Transformation


A strong pipeline does not necessarily perform every available preprocessing operation.



96. Example


A sentiment classifier may benefit from keeping:


Negation.


Punctuation.


Emphasis.



97. Domain-Specific Text


Different domains require different decisions.



98. Medical Text


Numbers and abbreviations may be important.



99. Financial Text


Currency values and percentages may be important.



100. Legal Text


Specific terms and references may be important.



101. Social Media


Emojis.


Hashtags.


Repeated characters.


Mentions.


may contain useful information.



102. Support Tickets


Error codes may be highly predictive.



103. Example


"ERROR_503"



104. Important Principle


Domain knowledge should influence preprocessing.



105. Experiment 1


Create a dataset containing text with:


Extra spaces.


Mixed capitalization.


Punctuation.



106. Apply


Whitespace normalization.



107. Apply


Lowercasing.



108. Compare


Vocabulary before and after normalization.



109. Experiment 2


Create text containing:


URLs.


Email addresses.


Numbers.



110. Test


Different replacement strategies.



111. Experiment 3


Build two sentiment classifiers.


Version A:


Keep punctuation.



112. Version B


Remove punctuation.



113. Compare


Evaluate both using cross-validation.



114. Experiment 4


Compare:


Manual preprocessing.


Minimal preprocessing with TfidfVectorizer.



115. Question


Does more preprocessing always improve performance?



116. Answer


No.


Performance depends on the dataset and task.



117. Common Mistakes


Mistake 1:


Applying every preprocessing technique automatically.


Mistake 2:


Removing negation words.


Mistake 3:


Removing useful numbers.


Mistake 4:


Fitting the vectorizer on test data.


Mistake 5:


Performing text preprocessing outside cross-validation when it learns from the data.


Mistake 6:


Ignoring domain-specific information.



118. Practice


1. What is text preprocessing?


2. Why normalize whitespace?


3. What is lowercasing?


4. Why should punctuation removal be task-dependent?


5. What is Unicode normalization?


6. Why should stop-word removal be used carefully?


7. Why should vectorization be inside a pipeline during cross-validation?


8. What is the difference between fit and transform?


9. Why should test data not be used to learn the vocabulary?



119. Quick Check


Question 1


Should the vectorizer be fitted separately on the test set?


Answer:


No.



Question 2


Why use a Pipeline with TfidfVectorizer and a classifier?


Answer:


It keeps text representation and model training together so the vectorizer is fitted appropriately within the training process.



Question 3


Should every text dataset use the same preprocessing steps?


Answer:


No. Preprocessing should depend on the task and domain.



120. Summary


Text preprocessing creates a consistent representation of raw text.


Important techniques include:


Whitespace normalization.


Lowercasing.


Punctuation handling.


HTML handling.


URL handling.


Unicode normalization.


Stop-word decisions.


Tokenization.



The most important principle is:


Preserve useful information and avoid unnecessary transformations.



121. Extended Study


Suppose preprocessing is represented by:


g(D) = D'.



The vectorizer then maps:


D' → x.



The model learns:


f(x) → y.



A complete text ML system therefore consists of multiple transformations:


D


→


g(D)


→


φ(g(D))


→


f(φ(g(D))).



122. Final Reflection


Good text preprocessing is not about aggressively cleaning text.


It is about making deliberate decisions.


Before applying a transformation, ask:


What information does this remove?


What information does it preserve?


Does the model need this information?


Could this transformation introduce leakage?


Does the transformation work for the language and domain?


These questions lead to safer and more effective text machine learning pipelines.

`

};

export default lesson3;