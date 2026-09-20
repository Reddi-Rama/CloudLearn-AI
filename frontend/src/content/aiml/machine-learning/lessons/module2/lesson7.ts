const lesson7 = {

  id: "lesson7",

  title: "k-Nearest Neighbors Classification",

  content: `

Lesson 07

k-Nearest Neighbors Classification


k-Nearest Neighbors, commonly called:


k-NN


is one of the simplest supervised learning algorithms.


The main idea is intuitive:


To predict a new observation, look at nearby training observations and use their labels to make the prediction.


The algorithm does not attempt to learn a complicated mathematical equation in the traditional sense.


Instead, it relies strongly on the training examples and a definition of distance.



1. The Basic Idea


Suppose we have training observations belonging to two classes:


Class A


and:


Class B.


A new observation appears.


We can ask:


Which training observations are closest to this new observation?


If most nearby observations belong to Class A, we predict:


Class A.


If most belong to Class B, we predict:


Class B.



2. Why Is It Called k-Nearest Neighbors?


The name contains three important ideas.


k


means the number of neighbors considered.


Nearest


means the closest observations according to a distance measure.


Neighbors


means the training observations surrounding the new observation.



3. Simple Example


Suppose a dataset contains students classified as:


Pass


or:


Fail.


Features:


Study Hours


Attendance


A new student has:


Study Hours = 6


Attendance = 82


The algorithm searches for training students with similar feature values.


If the nearest students mostly passed:


Prediction = Pass.



4. Choosing k


The value:


k


determines how many neighbors are considered.


If:


k = 1


only the nearest training observation is considered.


If:


k = 5


the five nearest observations are considered.


If:


k = 20


the twenty nearest observations are considered.



5. Small k


A small value such as:


k = 1


allows the model to respond strongly to local observations.


This can make the model sensitive to:


Noise


Outliers


Individual training examples.


Very small k values can therefore increase variance.



6. Large k


A larger value of k considers more observations.


This can make predictions smoother and less sensitive to individual examples.


However, if k becomes too large, the algorithm may consider observations that are not very similar to the new observation.


This can reduce the model's ability to capture local structure.



7. Choosing an Appropriate k


There is no universally correct value of k.


The value should generally be selected using validation or cross-validation.


For example, we might test:


k = 1


k = 3


k = 5


k = 7


k = 9


and compare their validation performance.



8. Distance


k-NN requires a definition of:


Distance


The most common introductory distance measure is Euclidean distance.


For two points:


x = (x₁, x₂)


and:


z = (z₁, z₂)


Euclidean distance is:


d(x,z) = √((x₁-z₁)² + (x₂-z₂)²)



9. Example of Euclidean Distance


Suppose:


Point A = (2, 3)


Point B = (5, 7)


Then:


d(A,B)


= √((5-2)² + (7-3)²)


= √(3² + 4²)


= √(9 + 16)


= √25


= 5


Therefore, the Euclidean distance is:


5.



10. More Than Two Features


The same idea extends to many dimensions.


For:


x = (x₁, x₂, ..., xₚ)


and:


z = (z₁, z₂, ..., zₚ)


the Euclidean distance is:


d(x,z)


= √Σ(xⱼ-zⱼ)²


where the sum is taken across all features.



11. Why Feature Scaling Matters


Suppose one feature ranges from:


0 to 1


and another ranges from:


0 to 100,000.


The large-scale feature can dominate Euclidean distance.


For example:


Age:


18 to 60


Income:


20,000 to 500,000


A difference of 10,000 in income can overwhelm a small difference in age.


Therefore, feature scaling is often important for k-NN.



12. Standardization


A common approach is:


z = (x - μ) / σ


After standardization, features are placed on a comparable scale.


This allows distance calculations to reflect multiple features more fairly.



13. k-NN Prediction


Suppose:


k = 5.


The algorithm finds the five nearest training observations.


Their labels are:


Class A


Class A


Class B


Class A


Class B


The majority class is:


Class A.


Therefore:


Prediction = Class A.



14. Majority Voting


For classification, k-NN commonly uses majority voting.


If the neighbor labels are:


[A, A, B, A, B]


then:


A = 3


B = 2


Prediction:


A.



15. Tie Situations


Sometimes the neighbors may be evenly divided.


For example:


k = 4


Labels:


[A, A, B, B]


This creates a tie.


The implementation may use a specific tie-breaking behaviour.


Choosing an odd k can sometimes reduce simple two-class ties, although it does not eliminate every possible tie situation.



16. Decision Boundaries


k-NN can create nonlinear decision boundaries.


Imagine two classes occupying different regions of a two-dimensional feature space.


Each new point is classified based on nearby observations.


The resulting boundary can follow the shape of the training data.



17. Local Learning


k-NN is often described as a local method.


The prediction for a new observation depends heavily on nearby training observations.


This differs from a model that learns one global equation describing the entire dataset.



18. Lazy Learning


k-NN is sometimes described as a lazy learning algorithm.


Why?


Because relatively little model fitting occurs during:


model.fit()


Much of the computation occurs when predictions are requested.


The algorithm needs to search the training observations to find neighbors.



19. Training Phase


During training, k-NN primarily stores the training data.


Conceptually:


Training Data


↓


Store Examples


↓


Ready for Prediction



20. Prediction Phase


When a new observation arrives:


New Observation


↓


Calculate Distances


↓


Find k Nearest Neighbors


↓


Collect Their Labels


↓


Majority Vote


↓


Prediction



21. Python Example: Basic k-NN


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsClassifier


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


model = KNeighborsClassifier(
    n_neighbors=5
)


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


A value between 0 and 1 determined by the selected data split and model configuration.



22. Understanding the Code


The Iris dataset is loaded.


X contains:


Four flower measurements.


y contains:


Three flower classes.


The dataset is split into:


Training data


and:


Test data.


The model is created with:


n_neighbors=5


The model is trained.


Finally, test accuracy is calculated.



23. Making a Single Prediction


Suppose we have a new flower:


[5.1, 3.5, 1.4, 0.2]


We can predict its class.


Python


sample = [[5.1, 3.5, 1.4, 0.2]]


prediction = model.predict(sample)


print("Predicted class:", prediction)


Output


Predicted class:


The result is the numerical class label predicted by the model.



24. Getting the Class Name


The numerical prediction can be converted to a class name.


Python


prediction = model.predict(sample)


class_name = iris.target_names[prediction[0]]


print("Predicted species:", class_name)


Output


Predicted species:


The exact class depends on the supplied feature values and fitted model.



25. Prediction Probabilities


k-NN can also provide class probabilities.


Python


probabilities = model.predict_proba(sample)


print(probabilities)


Output


The output contains a probability-like value for each class based on the neighbor voting distribution.



26. Example of Probability Voting


Suppose:


k = 5


The nearest labels are:


Setosa


Setosa


Setosa


Versicolor


Virginica


Then the class proportions are:


Setosa = 3/5 = 0.60


Versicolor = 1/5 = 0.20


Virginica = 1/5 = 0.20


The prediction is:


Setosa.



27. Distance Weighting


Standard k-NN can give each neighbor equal voting influence.


Another approach is:


distance weighting.


Closer observations receive greater influence than farther observations.


In scikit-learn, this can be selected using:


weights="distance"



28. Python Example: Distance Weighting


Python


from sklearn.neighbors import KNeighborsClassifier


model = KNeighborsClassifier(
    n_neighbors=5,
    weights="distance"
)


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


The result depends on the dataset split and configuration.



29. Uniform vs Distance Weights


Uniform weighting:


Every selected neighbor has equal voting weight.


Distance weighting:


Closer neighbors receive greater influence.


The better choice depends on the structure of the data.



30. Feature Scaling with k-NN


Because k-NN depends on distance, scaling is particularly important when features use different units or ranges.


Python


from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier


scaler = StandardScaler()


X_train_scaled = scaler.fit_transform(
    X_train
)


X_test_scaled = scaler.transform(
    X_test
)


model = KNeighborsClassifier(
    n_neighbors=5
)


model.fit(
    X_train_scaled,
    y_train
)


accuracy = model.score(
    X_test_scaled,
    y_test
)


print("Scaled test accuracy:", accuracy)


Output


Scaled test accuracy:


The exact result depends on the data split and configuration.



31. Why Scaling Changes the Model


Without scaling:


One feature may dominate the distance.


With scaling:


Features contribute more comparably.


Therefore, scaling can change which observations are considered nearest neighbors.


Because the neighbors change, the predictions can also change.



32. Choosing k with Cross-Validation


Instead of guessing k, we can evaluate several values.


Python


from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsClassifier


for k in [1, 3, 5, 7, 9, 11]:

    model = KNeighborsClassifier(
        n_neighbors=k
    )

    scores = cross_val_score(
        model,
        X,
        y,
        cv=5
    )

    print(
        "k:",
        k,
        "Mean CV Accuracy:",
        scores.mean()
    )


Output


The exact scores depend on the dataset and cross-validation configuration.



33. Understanding the k Experiment


The experiment evaluates multiple values of k.


For every value:


Create model.


Perform cross-validation.


Calculate mean validation accuracy.


Compare results.


This helps identify a useful range of k values.



34. Small k and Variance


When k is very small:


Predictions depend heavily on individual observations.


This can increase sensitivity to noise.


For example:


k = 1


means the prediction is based entirely on the nearest training observation.



35. Large k and Bias


When k is very large:


The prediction uses many observations.


The local structure becomes less important.


The model may become too smooth.


This can increase bias and potentially cause underfitting.



36. k and the Bias-Variance Trade-Off


Small k:


Lower bias


Higher variance


Large k:


Higher bias


Lower variance


The practical goal is to choose a value that provides good validation performance.



37. Computational Cost


Although training k-NN is relatively simple, prediction can be computationally expensive.


For a new observation, the algorithm may need to calculate distances to many training observations.


If the dataset contains millions of samples, this can become expensive.



38. Memory Requirements


k-NN stores training examples.


Therefore, memory requirements can increase as the training dataset becomes larger.


This differs from some parametric models that summarize the training data using a relatively small set of parameters.



39. High-Dimensional Data


k-NN can struggle when the number of features becomes very large.


This is related to:


The Curse of Dimensionality.


In high-dimensional spaces, the concept of nearest points can become less informative.


Distances can become less discriminative.



40. Curse of Dimensionality


Suppose we have:


2 features.


Finding nearby observations may be relatively straightforward.


Now imagine:


1,000 features.


The space becomes extremely large.


Data points can become sparse.


The amount of data required to cover the space effectively can increase dramatically.



41. Irrelevant Features


Suppose we want to classify flowers.


Useful features:


Petal Length


Petal Width


Now add:


Random Number


Customer ID


Unrelated Identifier


These irrelevant features can distort distance calculations.


Therefore, feature selection can be important for k-NN.



42. Outliers


Because k-NN relies on nearby observations, unusual points can affect predictions.


An outlier may become the nearest neighbor to a new observation even though it does not represent the general pattern.


Using more neighbors or appropriate preprocessing can sometimes reduce sensitivity to individual observations.



43. k-NN for Imbalanced Data


Suppose:


95% of observations belong to Class A.


5% belong to Class B.


A majority-vote classifier may frequently predict Class A.


Accuracy can therefore appear high even when minority-class performance is poor.


For imbalanced problems, examine metrics such as:


Precision


Recall


F1


Confusion Matrix



44. Confusion Matrix with k-NN


Python


from sklearn.metrics import confusion_matrix


predictions = model.predict(
    X_test_scaled
)


cm = confusion_matrix(
    y_test,
    predictions
)


print(cm)


Output


The confusion matrix contains counts showing how actual classes were classified.



45. Classification Report


Python


from sklearn.metrics import classification_report


print(
    classification_report(
        y_test,
        predictions
    )
)


Output


The report includes metrics such as:


Precision


Recall


F1 Score


Support



46. Real-World Example: Recommendation


Suppose a recommendation system represents users using features such as:


Average spending


Purchase frequency


Preferred categories


Browsing behaviour


A new user can be compared with existing users.


Nearby users in feature space may have similar behaviour.


The system can then use their behaviour to make recommendations.


This is conceptually related to nearest-neighbor methods, although production recommendation systems often use more sophisticated techniques.



47. Real-World Example: Pattern Recognition


k-NN can be used for simple pattern recognition tasks.


Examples include:


Basic image classification


Document categorization


Similarity-based retrieval


Anomaly exploration


Medical pattern classification


Its usefulness depends strongly on the feature representation and distance metric.



48. Distance Metrics


Euclidean distance is not the only possibility.


Other distance measures include:


Manhattan distance


Minkowski distance


Cosine distance or similarity-based approaches in appropriate settings


The choice depends on the structure and meaning of the data.



49. Manhattan Distance


For two-dimensional points:


x = (x₁, x₂)


z = (z₁, z₂)


Manhattan distance is:


d(x,z)


= |x₁-z₁| + |x₂-z₂|


For:


A = (2,3)


B = (5,7)


the distance is:


|5-2| + |7-3|


= 3 + 4


= 7.



50. Euclidean vs Manhattan


Euclidean distance measures:


Straight-line distance.


Manhattan distance measures:


Distance along coordinate directions.


Different distance metrics can produce different nearest neighbors.


Therefore, the distance definition is part of the model design.



51. Experiment


Use the Iris dataset.


Train k-NN models using:


k = 1


k = 3


k = 5


k = 7


k = 11


For each model, record:


Training Accuracy


Test Accuracy


Cross-Validation Accuracy


Create:


| k | Training Accuracy | Test Accuracy | CV Accuracy |
|---|-------------------|---------------|-------------|
| 1 | | | |
| 3 | | | |
| 5 | | | |
| 7 | | | |
| 11 | | | |



52. Experiment: Scaling


Train two models:


Model A:


Raw features.


Model B:


Standardized features.


Compare:


Accuracy


Predictions


Cross-validation performance.


Ask:


Did scaling change the result?


Why?



53. Experiment: Uniform vs Distance Weighting


Compare:


weights="uniform"


and:


weights="distance"


Use the same k.


Record the validation scores.


Explain why the predictions may differ.



54. Experiment: Different Distance Metrics


Try appropriate distance metrics available in the implementation.


Compare the validation results.


Ask:


Did changing the distance measure change the nearest neighbors?


Did it change the final predictions?



55. Common Mistakes


Mistake 1:


Using k-NN without considering feature scaling.


Distance can become dominated by large-scale features.


Mistake 2:


Choosing k using the test set.


Use validation or cross-validation for model selection.


Mistake 3:


Using an extremely small k without considering noise.


k = 1 can be highly sensitive to individual observations.


Mistake 4:


Using a very large k without considering local structure.


The model may become overly smooth.


Mistake 5:


Ignoring irrelevant features.


Unhelpful features can distort distance calculations.


Mistake 6:


Ignoring high dimensionality.


Nearest-neighbor relationships can become less informative as dimensionality increases.



56. Practice


1. What is k-NN?


2. What does k represent?


3. What is a nearest neighbor?


4. How does majority voting work?


5. Why is scaling important for k-NN?


6. What happens when k is very small?


7. What happens when k is very large?


8. What is Euclidean distance?


9. What is the curse of dimensionality?


10. Why can irrelevant features hurt k-NN?



57. Quick Check


Question 1


What does k represent?


Answer


k represents the number of nearest training observations considered for prediction.


Question 2


What happens when k = 1?


Answer


The prediction is based on the single nearest training observation.


Question 3


Why is scaling important?


Answer


Because k-NN uses distances, features with larger numerical scales can dominate the distance calculation.


Question 4


What is majority voting?


Answer


The class occurring most frequently among the selected neighbors becomes the predicted class.


Question 5


Can k-NN overfit?


Answer


Yes.


Very small k values can make the model highly sensitive to individual training observations and noise.



58. Summary


k-Nearest Neighbors is a supervised learning algorithm.


It predicts a new observation using nearby training observations.


k determines how many neighbors are considered.


Classification commonly uses majority voting.


Euclidean distance is a common distance measure.


Feature scaling is important because k-NN depends on distance.


Small k values can produce high variance.


Large k values can produce high bias.


Cross-validation can help select k.


Distance weighting gives greater influence to closer observations.


Irrelevant features can distort distance calculations.


High-dimensional data can reduce the usefulness of nearest-neighbor relationships.


k-NN stores training observations and can therefore require substantial memory.


Prediction can become expensive for very large datasets.



59. Extended Study


For a new observation:


x


the algorithm computes distances to training observations:


d(x, x₁)


d(x, x₂)


...


d(x, xₙ)


The observations are ordered by distance.


The first k observations are selected.


For classification, the predicted class can be represented as:


ŷ = argmax_c Σ I(yᵢ = c)


where the sum considers the selected neighbors.


I(yᵢ = c)


is an indicator that equals 1 when the neighbor belongs to class c and 0 otherwise.



60. Distance-Weighted k-NN


With distance weighting, a neighbor can receive a weight based on its distance.


Conceptually:


wᵢ = 1 / d(x,xᵢ)


for a suitable nonzero distance.


The predicted class can then be based on the weighted votes.


Closer observations contribute more strongly.


Practical implementations may use their own exact numerical handling for zero distances and weighting.



61. Complexity of Prediction


Suppose:


n = Number of training samples


p = Number of features


For one new observation, calculating distances to all training observations requires work related to:


O(np)


before selecting the nearest neighbors.


For many queries and very large datasets, this can become expensive.


Efficient nearest-neighbor data structures and approximate methods can sometimes reduce practical search costs.



62. k-NN and Feature Representation


k-NN does not automatically understand the meaning of features.


It only uses the numerical representation supplied to it.


Therefore:


Good representation


→ Useful distances


Poor representation


→ Misleading distances


This is why feature engineering and preprocessing are particularly important for nearest-neighbor algorithms.



63. k-NN and New Data


One advantage of k-NN is that adding new training observations can directly affect future predictions.


Suppose a new training example is added close to an existing region.


That example may become one of the nearest neighbors for future observations.


Therefore, the model's behaviour can change as the stored training dataset changes.



64. Reflection


Consider a classification problem you would like to solve using k-NN.


Ask:


What are the features?


Are the features numerical?


Do the features need scaling?


What distance metric makes sense?


How many neighbors should be considered?


Could irrelevant features distort distance?


Is the dataset large enough?


Could the data be high-dimensional?


Would k-NN be computationally practical?


How would you select k?


How would you evaluate the model?


Understanding these questions is more important than simply knowing the syntax of KNeighborsClassifier.

`

};

export default lesson7;