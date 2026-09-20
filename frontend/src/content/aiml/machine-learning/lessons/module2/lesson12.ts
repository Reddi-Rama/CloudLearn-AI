const lesson12 = {

  id: "lesson12",

  title: "Naive Bayes Classifiers",

  content: `

Lesson 12

Naive Bayes Classifiers


Naive Bayes is a family of probabilistic classification algorithms based on:


Bayes' Theorem.


The algorithm is called "naive" because it makes a simplifying assumption about the relationship between features.


Despite this assumption, Naive Bayes can work very well for several types of classification problems, especially when the input is represented using counts or frequencies.



1. Probability-Based Classification


Suppose we want to classify an email as:


Spam


or:


Not Spam.


The model can ask:


Given the observed words, which class is more probable?


Conceptually:


Email Features


↓


Probability Calculation


↓


Class Probabilities


↓


Most Probable Class



2. Bayes' Theorem


Bayes' theorem is:


P(A|B) = P(B|A)P(A) / P(B)


In machine learning, we can write:


P(Class | Features)


=


P(Features | Class) P(Class)


/


P(Features)



3. Meaning of the Terms


P(Class | Features)


means:


Probability of the class given the observed features.


P(Features | Class)


means:


Probability of observing the features given the class.


P(Class)


is the prior probability of the class.


P(Features)


is the probability of observing the features.



4. Example


Suppose:


P(Spam) = 0.4


P(Not Spam) = 0.6


A message contains certain words.


We calculate how likely those words are under each class.


The model combines:


Prior Probability


and:


Evidence from Features.


The class with the larger posterior probability becomes the prediction.



5. Why "Naive"?


Suppose an email contains:


"free"


and:


"offer".


These words may be related.


Naive Bayes makes a simplifying conditional-independence assumption.


It treats features as conditionally independent given the class.


This assumption is often unrealistic in natural language, but the algorithm can still perform well in practice.



6. Conditional Independence


For features:


x₁, x₂, ..., xₙ


the Naive Bayes assumption is approximately:


P(x₁, x₂, ..., xₙ | C)


≈


P(x₁|C)P(x₂|C)...P(xₙ|C)


This makes probability estimation much simpler.



7. Classification Rule


For a new observation x, Naive Bayes predicts:


ŷ = argmax_C P(C|x)


Using Bayes' theorem:


ŷ = argmax_C P(x|C)P(C)


because:


P(x)


is the same for every candidate class.



8. Text Classification


Naive Bayes is particularly popular as an introductory text-classification method.


Suppose we have messages:


"win free prize"


"meeting at 5"


"claim your reward"


The model can learn how frequently words occur within each class.



9. Bag-of-Words Representation


Text must first be converted into numerical features.


One simple representation is:


Bag of Words.


Suppose the vocabulary is:


free


meeting


prize


reward


Then a message may be represented using word counts.



10. Example


Message:


"free prize free"


The feature vector could be:


[2, 0, 1, 0]


if the vocabulary order is:


[free, meeting, prize, reward].



11. Multinomial Naive Bayes


Multinomial Naive Bayes is commonly used for count-based features such as word counts.


It is useful for:


Text Classification


Document Classification


Spam Detection


Topic Classification



12. Bernoulli Naive Bayes


Bernoulli Naive Bayes is designed for binary or boolean features.


For example:


Word Present = 1


Word Absent = 0


This differs from Multinomial Naive Bayes, which can use counts.



13. Gaussian Naive Bayes


Gaussian Naive Bayes assumes continuous features follow a Gaussian distribution within each class.


It is useful for numerical features in appropriate settings.



14. Categorical Naive Bayes


Categorical Naive Bayes can be used for categorical features.


The appropriate Naive Bayes variant therefore depends on the feature representation.



15. Gaussian Distribution


The Gaussian distribution is also called the normal distribution.


Its density function is:


p(x) = 1/(√(2πσ²)) exp(-(x-μ)²/(2σ²))


where:


μ = Mean


σ² = Variance.



16. Python Example: Gaussian Naive Bayes


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB


iris = load_iris()


X = iris.data
y = iris.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


model = GaussianNB()


model.fit(
    X_train,
    y_train
)


accuracy = model.score(
    X_test,
    y_test
)


print("Test accuracy:", accuracy)


Output


Test accuracy:


A value determined by the data split and fitted model.



17. Making Predictions


Python


predictions = model.predict(
    X_test
)


print(
    "Predictions:",
    predictions[:10]
)


Output


The output contains predicted class labels.



18. Probability Predictions


Python


probabilities = model.predict_proba(
    X_test
)


print(
    probabilities[:5]
)


Output


Each row contains estimated probabilities for the possible classes.



19. Multinomial Naive Bayes


For text classification, a common approach is:


Text


↓


Numerical Representation


↓


Multinomial Naive Bayes


↓


Class Prediction



20. CountVectorizer


scikit-learn provides:


CountVectorizer


to convert text into a matrix of token counts.


Python


from sklearn.feature_extraction.text import CountVectorizer


documents = [
    "free prize available",
    "meeting at five",
    "claim your free prize",
    "project meeting tomorrow"
]


vectorizer = CountVectorizer()


X = vectorizer.fit_transform(
    documents
)


print(
    vectorizer.get_feature_names_out()
)


Output


The output contains the vocabulary extracted from the documents.



21. Inspecting the Matrix


Python


print(
    X.toarray()
)


Output


Each row represents a document.


Each column represents a vocabulary term.


The values represent word counts.



22. Text Classification Example


Python


from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB


messages = [
    "free prize available",
    "claim your free reward",
    "meeting at five",
    "project meeting tomorrow",
    "free reward available",
    "team meeting today"
]


labels = [
    "spam",
    "spam",
    "normal",
    "normal",
    "spam",
    "normal"
]


vectorizer = CountVectorizer()


X = vectorizer.fit_transform(
    messages
)


model = MultinomialNB()


model.fit(
    X,
    labels
)


new_messages = [
    "free prize",
    "team meeting"
]


new_X = vectorizer.transform(
    new_messages
)


predictions = model.predict(
    new_X
)


print(predictions)


Output


The output contains predicted classes for the new messages.



23. Understanding the Example


The first step converts text into numerical counts.


The second step trains:


MultinomialNB.


The model learns which words are associated with the classes.


The new messages are transformed using:


vectorizer.transform()


The trained classifier then predicts their classes.



24. Important Difference: fit_transform vs transform


During training:


vectorizer.fit_transform(
    training_text
)


The vectorizer learns the vocabulary.


For new or test data:


vectorizer.transform(
    new_text
)


The vocabulary is not relearned.


This prevents information leakage from evaluation data.



25. Pipeline for Text Classification


A pipeline can combine:


CountVectorizer


and:


MultinomialNB.


Python


from sklearn.pipeline import make_pipeline
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB


model = make_pipeline(
    CountVectorizer(),
    MultinomialNB()
)


model.fit(
    messages,
    labels
)


prediction = model.predict(
    ["free reward"]
)


print(prediction)


Output


A predicted class for the new message.



26. Why Pipelines Help


A pipeline ensures that:


Text preprocessing


and:


Model prediction


are treated as one workflow.


This reduces the chance of accidentally fitting the vectorizer separately on evaluation data.



27. Laplace Smoothing


A problem can occur when a word never appears in a class during training.


Its estimated probability may become:


0.


Multiplying probabilities then makes the entire product:


0.


Smoothing prevents zero probabilities.



28. Additive Smoothing


A common approach is to add a small value to counts.


For example:


count + α


where:


α > 0.


This is often called additive or Laplace smoothing when:


α = 1.



29. Why Smoothing Matters


Suppose a word appears:


0 times


in the spam examples.


Without smoothing:


P(word | spam) = 0.


With smoothing:


the probability becomes small but nonzero.


This prevents one unseen word from automatically forcing the entire class probability to zero.



30. Advantages of Naive Bayes


Advantages include:


Simple.


Fast.


Works well with high-dimensional sparse data.


Useful for text classification.


Requires relatively little training data in many applications.


Provides probabilistic predictions.



31. Limitations


Limitations include:


The independence assumption is often unrealistic.


Probability estimates may not always be well calibrated.


Performance can be affected by the feature representation.


Some complex relationships between features are not captured.



32. Naive Bayes vs Logistic Regression


Naive Bayes:


Generative probabilistic approach.


Models class-conditional feature distributions.


Strong independence assumption.


Often effective with small datasets and text features.


Logistic Regression:


Discriminative approach.


Directly models class probabilities through a decision function.


Can capture feature relationships differently.



33. Text Classification Applications


Naive Bayes can be used for:


Spam filtering


Sentiment classification


Topic classification


News categorization


Document classification


Simple support-ticket routing



34. Sentiment Analysis Example


Suppose reviews are classified as:


Positive


Negative.


Examples:


"excellent product"


→ Positive


"very poor quality"


→ Negative.


The model learns associations between words and classes.



35. Topic Classification


Documents can be classified into:


Sports


Technology


Politics


Business


Entertainment


The model learns word distributions associated with each topic.



36. Experiment


Create a small dataset containing:


Spam messages


Normal messages.


Use:


CountVectorizer


and:


MultinomialNB.


Split the data into training and test sets.


Measure:


Accuracy


Precision


Recall


F1 Score.



37. Experiment: Compare Vectorization


Compare:


CountVectorizer


and:


TfidfVectorizer.


Train the same:


MultinomialNB


model.


Compare validation performance.



38. TF-IDF


TF-IDF stands for:


Term Frequency-Inverse Document Frequency.


It gives greater importance to terms that are frequent in a document but less common across the complete collection.



39. Why TF-IDF Can Help


Suppose a word such as:


"the"


appears in almost every document.


It provides little information for distinguishing topics.


A rare but meaningful word may provide more information.


TF-IDF reduces the relative importance of very common terms.



40. Python Example: TF-IDF with Naive Bayes


Python


from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import make_pipeline


model = make_pipeline(
    TfidfVectorizer(),
    MultinomialNB()
)


model.fit(
    messages,
    labels
)


prediction = model.predict(
    ["free prize"]
)


print(prediction)


Output


A predicted class based on the fitted text model.



41. MultinomialNB and Sparse Data


Text datasets can contain thousands or millions of possible vocabulary terms.


Most individual documents contain only a small subset of those words.


The resulting feature matrix is sparse.


Multinomial Naive Bayes can work efficiently with this type of representation.



42. Class Prior


Naive Bayes includes:


P(Class)


the prior probability.


If one class appears much more frequently than another, its prior probability will be larger unless class priors are otherwise specified.



43. Class-Conditional Probability


The model also estimates:


P(Features | Class)


For text, this may represent how likely a word is to appear within a particular class.



44. Posterior Probability


Bayes' theorem combines:


Prior


and:


Evidence.


Conceptually:


Posterior


∝


Likelihood × Prior.


The classifier selects the class with the largest posterior probability.



45. Numerical Example


Suppose two classes exist:


Spam


Normal.


Assume:


P(Spam) = 0.4


P(Normal) = 0.6.


Suppose an observed feature has probabilities:


P(feature | Spam) = 0.8


P(feature | Normal) = 0.2.


Then the unnormalized scores are:


Spam:


0.8 × 0.4 = 0.32


Normal:


0.2 × 0.6 = 0.12


Spam has the larger score.



46. Common Mistakes


Mistake 1:


Thinking Naive Bayes requires features to truly be independent.


The independence assumption is a simplifying model assumption.


Mistake 2:


Using the wrong Naive Bayes variant for the feature representation.


Mistake 3:


Fitting the vectorizer separately on test data.


Mistake 4:


Ignoring smoothing for sparse count data.


Mistake 5:


Assuming predicted probabilities are perfectly calibrated.



47. Practice


1. What is Bayes' theorem?


2. Why is Naive Bayes called naive?


3. What is conditional independence?


4. What is Multinomial Naive Bayes?


5. What is Gaussian Naive Bayes?


6. What is Bernoulli Naive Bayes?


7. What is Laplace smoothing?


8. What does CountVectorizer do?


9. What is TF-IDF?


10. Why are pipelines useful for text classification?



48. Quick Check


Question 1


What is Naive Bayes?


Answer


It is a family of probabilistic classification algorithms based on Bayes' theorem and a simplifying conditional-independence assumption.


Question 2


Why is it called naive?


Answer


Because it assumes features are conditionally independent given the class.


Question 3


Which Naive Bayes variant is commonly used for word-count features?


Answer


Multinomial Naive Bayes.


Question 4


What does CountVectorizer do?


Answer


It converts text documents into numerical token-count features.


Question 5


Why is smoothing used?


Answer


To avoid zero probability problems for unseen feature values.



49. Summary


Naive Bayes is a probabilistic classification family.


It is based on Bayes' theorem.


It uses a conditional-independence assumption.


GaussianNB is useful for suitable continuous features.


MultinomialNB is commonly used with count-based text features.


BernoulliNB is designed for binary feature representations.


Smoothing prevents zero-probability problems.


CountVectorizer converts text into numerical counts.


TF-IDF provides another text representation.


Pipelines help combine preprocessing and classification safely.



50. Extended Study


Bayes' theorem is:


P(C|X) = P(X|C)P(C) / P(X).


For Naive Bayes:


P(X|C)


is approximated as:


Πⱼ P(xⱼ|C).


Therefore:


P(C|X)


∝


P(C)ΠⱼP(xⱼ|C).


The denominator:


P(X)


can be ignored when comparing classes because it is the same for every candidate class.



51. Log Probabilities


Products of many small probabilities can become extremely small.


Implementations can therefore work with logarithms.


Using:


log(ab) = log(a) + log(b)


the product becomes a sum.


Conceptually:


log P(C|X)


∝


log P(C)


+


Σ log P(xⱼ|C).


This is numerically more convenient for many applications.



52. Reflection


Consider a text classification problem.


Ask:


What are the classes?


How will the text be represented?


Would word counts be useful?


Would TF-IDF be useful?


Which Naive Bayes variant is appropriate?


Could unseen words create zero probabilities?


Would smoothing help?


How would you evaluate the classifier?


These questions help transform Naive Bayes from a probability formula into a practical text-classification workflow.

`

};

export default lesson12;