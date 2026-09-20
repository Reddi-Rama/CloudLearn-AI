const lesson16 = {

  id: "lesson16",

  title: "Working with Real-World Text Datasets",

  content: `

Lesson 16

Working with Real-World Text Datasets


1. Introduction


Real-world text data is rarely clean.


Unlike small classroom datasets, practical text datasets may contain:


Missing values.


Duplicate records.


HTML.


URLs.


Spelling variations.


Different encodings.


Very long documents.


Very short documents.


Multiple languages.


Class imbalance.


Noise.



2. Why Dataset Quality Matters


A machine learning model learns from the data provided to it.


If the training data contains systematic problems, the model can learn those problems as well.



3. Basic Principle


Better data preparation


does not guarantee


a better model.


However:


Poor data preparation can easily produce misleading results.



4. Examples of Real-World Text Sources


Customer reviews.


Support tickets.


News articles.


Product descriptions.


Social media posts.


Emails.


Chat messages.


Research papers.


Survey responses.



5. Typical Dataset Structure


A text classification dataset may contain:


text.


label.



6. Example


text:


"The delivery was very fast."



label:


positive.



7. Another Record


text:


"The package arrived damaged."



label:


negative.



8. Loading a Dataset


Python


import pandas as pd


df = pd.read_csv(

    "reviews.csv"

)



9. Inspect the Dataset


Python


print(df.head())



10. Dataset Shape


Python


print(df.shape)



11. Column Names


Python


print(df.columns)



12. Data Types


Python


print(df.dtypes)



13. Missing Values


Python


print(

    df.isna().sum()

)



14. Why Missing Values Matter


A missing text field cannot be directly processed by most text vectorizers.



15. Handling Missing Text


One simple strategy is to replace missing text with an empty string.



16. Example


Python


df["text"] = (

    df["text"]

    .fillna("")

)



17. Missing Labels


Missing target labels require more careful treatment.



18. Example


Python


df = df.dropna(

    subset=["label"]

)



19. Duplicate Records


Duplicate records can affect training and evaluation.



20. Example


Python


print(

    df.duplicated().sum()

)



21. Remove Exact Duplicates


Python


df = df.drop_duplicates()



22. Important Warning


Duplicate removal should be considered carefully.


Some repeated records may represent legitimate repeated events.



23. Near Duplicates


Two records may differ slightly while representing essentially the same content.



24. Example


"The product arrived quickly."


"The product arrived very quickly."



25. Problem


Near duplicates can create leakage between training and test sets if not handled carefully.



26. Text Length


Text length is an important exploratory feature.



27. Character Length


Python


df["text_length"] = (

    df["text"]

    .str.len()

)



28. Word Count


Python


df["word_count"] = (

    df["text"]

    .str.split()

    .str.len()

)



29. Inspect Lengths


Python


print(

    df[

        ["text_length", "word_count"]

    ].describe()

)



30. Very Short Text


Examples:


"Good."


"Bad."


"OK."



31. Very Long Text


Long documents may contain:


Multiple topics.


Repeated information.


Large amounts of irrelevant text.



32. Important Principle


Do not remove short or long documents automatically.


First understand the dataset and the task.



33. Class Distribution


For classification problems, inspect the target distribution.



34. Example


Python


print(

    df["label"].value_counts()

)



35. Class Imbalance


Suppose:


positive = 9000


negative = 1000.



36. Problem


A model that predicts positive for every example could achieve high accuracy while completely failing to identify negative examples.



37. Better Evaluation


Use metrics such as:


Precision.


Recall.


F1-score.


Confusion matrix.



38. Text Encoding


Text data may contain Unicode characters.



39. Example


Languages may include:


English.


Hindi.


Telugu.


Tamil.


Japanese.


Arabic.



40. Encoding Problems


Incorrect decoding can produce corrupted characters.



41. Important Principle


Preserve the original text whenever possible.


Perform normalization deliberately.



42. HTML


Web text may contain HTML tags.



43. Example


Python


from bs4 import BeautifulSoup



44. Parsing


Python


def remove_html(text):

    return BeautifulSoup(

        text,

        "html.parser"

    ).get_text(" ")



45. Important Note


HTML removal should depend on whether HTML structure contains useful information for the task.



46. URLs


URLs may appear frequently in web and social-media datasets.



47. Possible Strategies


Keep URLs.


Replace them with a special token.


Remove them.



48. Decision


The correct strategy depends on the problem.



49. Example


For spam detection, URLs may contain useful information.



50. Emails


Email addresses can similarly be:


Removed.


Normalized.


Replaced with a special token.



51. Punctuation


Punctuation can carry information.


Examples:


"great"


and:


"great!!!"



52. Sentiment


Repeated punctuation may provide useful sentiment information.



53. Numbers


Numbers can also be meaningful.


Examples:


"5 stars"


"2026"


"₹500"



54. Domain Information


Removing all numbers may destroy useful information.



55. Language Detection


A dataset may contain multiple languages.



56. Problem


An English-only preprocessing pipeline may not work well for multilingual text.



57. Possible Strategy


Detect language.


Use language-specific preprocessing.


Or use a multilingual model.



58. Label Quality


Labels may contain errors.



59. Example


A review marked:


positive.



but its text may clearly express dissatisfaction.



60. Label Noise


Incorrect labels can limit model performance.



61. Inspect Samples


Randomly inspect examples from every class.



62. Example


Python


print(

    df.sample(

        10,

        random_state=42

    )

)



63. Stratified Inspection


Inspect examples separately for each label.



64. Train-Test Split


Always separate evaluation data from training data before fitting preprocessing steps that learn from the data.



65. Example


Python


from sklearn.model_selection import (

    train_test_split

)



66. Split


Python


X_train, X_test, y_train, y_test = (

    train_test_split(

        df["text"],

        df["label"],

        test_size=0.2,

        random_state=42,

        stratify=df["label"]

    )

)



67. Why Stratify?


For classification, stratification helps preserve class proportions across the split.



68. Data Leakage


Data leakage occurs when information unavailable at prediction time influences model training or evaluation.



69. Text Leakage Example


Duplicate or near-duplicate documents can appear in both training and test sets.



70. Preprocessing Leakage


A vectorizer should generally be fitted only on training data.



71. Correct Workflow


Training text


↓


Fit vectorizer


↓


Transform training text



Test text


↓


Transform using fitted vectorizer.



72. Pipeline


A scikit-learn Pipeline can make this workflow safer.



73. Example


Python


from sklearn.pipeline import Pipeline


from sklearn.feature_extraction.text import TfidfVectorizer


from sklearn.linear_model import LogisticRegression



74. Pipeline


Python


model = Pipeline([

    (

        "tfidf",

        TfidfVectorizer(

            min_df=2

        )

    ),

    (

        "classifier",

        LogisticRegression(

            max_iter=1000

        )

    )

])



75. Fit


Python


model.fit(

    X_train,

    y_train

)



76. Evaluate


Python


predictions = model.predict(

    X_test

)



77. Important Benefit


The vectorizer is fitted only within the training process.



78. Dataset Documentation


A real project should document:


Data source.


Collection date.


Language.


Label definitions.


Cleaning steps.


Duplicates.


Missing values.


Known limitations.



79. Data Provenance


Knowing where data came from helps understand its limitations.



80. Privacy


Text datasets may contain sensitive personal information.



81. Important Principle


Only collect and process data that is appropriate for the intended task and permitted by applicable rules and policies.



82. PII


Personal information may include:


Names.


Email addresses.


Phone numbers.


Addresses.


Account identifiers.



83. Practical Consideration


Sensitive fields may need to be removed or protected before model training.



84. Dataset Versioning


Datasets may change over time.



85. Example


Version:


reviews_v1.csv.



86. Later


reviews_v2.csv.



87. Why Version?


Reproducibility requires knowing which data produced a model.



88. Sampling


Large datasets may require sampling for exploratory analysis.



89. Example


Python


sample = df.sample(

    10000,

    random_state=42

)



90. Important Warning


Sampling should preserve important characteristics of the original dataset when possible.



91. Real-World Workflow


Raw dataset


↓


Inspect


↓


Validate


↓


Clean


↓


Analyze


↓


Split


↓


Build pipeline


↓


Train


↓


Evaluate


↓


Document.



92. Experiment 1


Load a real or realistic text dataset.



93. Inspect


Missing values.


Duplicates.


Class distribution.


Text lengths.



94. Experiment 2


Compare model performance before and after duplicate removal.



95. Experiment 3


Inspect very short and very long documents.



96. Experiment 4


Compare different handling strategies for URLs.



97. Experiment 5


Build a complete Pipeline and compare it with manual preprocessing.



98. Experiment 6


Create intentionally duplicated examples and observe the effect on evaluation.



99. Common Mistakes


Mistake 1:


Cleaning text without understanding the task.


Mistake 2:


Removing all punctuation.


Mistake 3:


Removing all numbers.


Mistake 4:


Dropping every short document.


Mistake 5:


Ignoring duplicate records.


Mistake 6:


Fitting vectorizers on the complete dataset before splitting.


Mistake 7:


Ignoring class imbalance.


Mistake 8:


Ignoring label quality.



100. Practice


1. Why is real-world text difficult to process?


2. How should missing text values be handled?


3. Why are duplicate records important?


4. What is class imbalance?


5. What is data leakage?


6. Why should vectorizers be fitted only on training data?


7. Why is dataset documentation important?


8. What is label noise?



101. Quick Check


Question 1


Should every punctuation mark always be removed?


Answer:


No. Its usefulness depends on the task.



Question 2


Why can duplicates cause problems?


Answer:


They can distort training and evaluation and may create leakage between splits.



Question 3


Why should preprocessing be included in a Pipeline?


Answer:


It helps ensure that learned preprocessing steps are fitted correctly within the training process.



102. Summary


Real-world text datasets require careful inspection before modeling.


Important areas include:


Missing values.


Duplicates.


Text length.


Class imbalance.


Encoding.


Label quality.


Data leakage.


Privacy.


Dataset documentation.



103. Extended Study


A production-quality text dataset should be treated as a data asset rather than simply a CSV file.


The complete lifecycle includes:


Collection.


Validation.


Cleaning.


Versioning.


Documentation.


Model training.


Monitoring.


Updating.



104. Final Reflection


Machine learning performance depends not only on the algorithm.


A strong text ML system begins with understanding the data.


The goal is not to make text artificially perfect.


The goal is to create a reliable representation of the information needed for the task.

`

};

export default lesson16;