const lesson14 = {

  id: "lesson14",

  title: "Random Forests",

  content: `

Lesson 14

Random Forests


A Decision Tree is a powerful and interpretable machine learning model.

However, a single decision tree can be sensitive to the training data.

A small change in the dataset can sometimes produce a substantially different tree.

Random Forests address this problem by combining many decision trees.

The central idea is:


Build many different decision trees and combine their predictions.



1. What Is a Random Forest?


A Random Forest is an ensemble learning algorithm based on multiple decision trees.


For classification:


Many Trees


↓


Individual Predictions


↓


Majority Voting


↓


Final Class


For regression:


Many Trees


↓


Individual Numerical Predictions


↓


Average


↓


Final Prediction



2. What Is Ensemble Learning?


Ensemble learning combines multiple models to produce a final prediction.


Instead of relying on one model:


Model 1


we use:


Model 1
Model 2
Model 3
...
Model N


The individual models are combined.



3. Why Multiple Trees?


A single decision tree can have high variance.


It may learn patterns that are specific to the training data.


If many different trees are trained and their predictions are combined, individual errors can partially cancel each other.



4. Randomness in Random Forests


Random Forests introduce randomness in two important ways.


First:


Different training samples are used for different trees.


Second:


A random subset of features can be considered when splitting nodes.


This creates diversity among the trees.



5. Bootstrap Sampling


A Random Forest commonly creates bootstrap samples from the training dataset.


Suppose the original training set contains:


1,000 observations.


A tree receives a sample created by sampling observations with replacement.


Some observations may appear multiple times.


Some observations may not appear in that tree's bootstrap sample.



6. Sampling With Replacement


Suppose the original observations are:


A


B


C


D


E


A bootstrap sample might be:


B


E


B


A


D


Here:


B


appears twice.


C


does not appear.


This creates a different training dataset for the tree.



7. Feature Randomness


Random Forests also introduce randomness when selecting features for splits.


Suppose a dataset has:


20 features.


A tree node might consider only a subset of those features when searching for a split.


Another tree may consider a different subset.



8. Why Feature Randomness Helps


If every tree used exactly the same observations and features, the trees could become very similar.


Highly similar trees make an ensemble less useful.


Feature randomness encourages diversity.


Diverse models can make an ensemble more robust.



9. Random Forest Classification


Suppose five trees produce:


Tree 1 → Class A


Tree 2 → Class B


Tree 3 → Class A


Tree 4 → Class A


Tree 5 → Class B


Votes:


Class A = 3


Class B = 2


Final prediction:


Class A.



10. Random Forest Regression


Suppose five regression trees produce:


50


55


52


61


57


The forest can average these predictions:


(50 + 55 + 52 + 61 + 57) / 5


= 275 / 5


= 55


Final prediction:


55.



11. Number of Trees


The parameter:


n_estimators


controls the number of trees in the forest.


For example:


n_estimators = 100


means the forest contains:


100 trees.


Increasing the number of trees can improve stability, although computation and memory requirements increase.



12. Random Forest and Overfitting


Random Forests are generally more resistant to overfitting than a single unrestricted decision tree.


However, they are not immune to overfitting.


The quality of the data, feature representation, and hyperparameters still matter.



13. Python Example: Random Forest Classification


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier


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


model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
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


A value determined by the dataset split and forest configuration.



14. Making Predictions


Python


predictions = model.predict(
    X_test
)


print(
    "First 10 predictions:",
    predictions[:10]
)


Output


The output contains the predicted class labels from the forest.



15. Prediction Probabilities


Random Forest classifiers can estimate class probabilities.


Python


probabilities = model.predict_proba(
    X_test
)


print(
    probabilities[:5]
)


Output


Each row contains the estimated probability for the possible classes based on the ensemble's tree predictions.



16. Random Forest Regression


Random Forests can also perform regression.


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error


data = load_diabetes()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)


model = RandomForestRegressor(
    n_estimators=100,
    random_state=42
)


model.fit(
    X_train,
    y_train
)


predictions = model.predict(
    X_test
)


mae = mean_absolute_error(
    y_test,
    predictions
)


print("MAE:", mae)


Output


MAE:


A numerical value determined by the fitted forest and data split.



17. Important Random Forest Parameters


Common parameters include:


n_estimators


max_depth


min_samples_split


min_samples_leaf


max_features


bootstrap


criterion


random_state



18. max_depth


The parameter:


max_depth


controls the maximum depth of individual trees.


Smaller values:


Simpler trees.


Larger values:


More complex trees.



19. min_samples_split


This controls the minimum number of samples required to split an internal node.


Increasing this value can prevent trees from creating very small branches.



20. min_samples_leaf


This controls the minimum number of samples that must be present in a leaf.


Larger values can produce smoother and less complex individual trees.



21. max_features


This controls how many features are considered when searching for a split.


Feature randomness is one of the key ideas behind Random Forests.



22. random_state


Setting:


random_state


makes the randomized procedure reproducible under the same software configuration.



23. Feature Importance


Random Forests can provide:


feature_importances_


Python


print(
    model.feature_importances_
)


Output


The output contains importance values associated with the features.



24. Understanding Feature Importance


Suppose:


[0.05, 0.10, 0.65, 0.20]


The third feature has the largest importance according to this measure.


Feature importance should not automatically be interpreted as causal influence.


It indicates contribution to the model's splitting behaviour under the selected importance calculation.



25. Random Forest vs Decision Tree


Decision Tree:


One tree.


Can have high variance.


Easy to visualize.


Can overfit if unrestricted.


Random Forest:


Many trees.


Combines predictions.


Usually more stable.


Harder to visualize as one complete model.



26. Why Random Forests Work


Suppose each tree has somewhat different errors.


If the trees are not perfectly correlated, combining them can reduce the impact of individual errors.


This is one reason ensemble methods can improve generalization.



27. Correlation Between Trees


If every tree makes exactly the same mistakes, averaging them provides little benefit.


Random Forests therefore attempt to create diverse trees.


Bootstrap sampling and random feature selection contribute to this diversity.



28. Out-of-Bag Samples


Because bootstrap sampling does not necessarily include every training observation, some observations are left out of each tree's bootstrap sample.


These are called:


Out-of-Bag


or:


OOB


observations for that tree.



29. Out-of-Bag Evaluation


The out-of-bag observations can be used to estimate model performance.


In scikit-learn, this can be enabled for Random Forests using:


oob_score=True


when supported by the selected configuration.



30. Python Example: OOB Score


Python


model = RandomForestClassifier(
    n_estimators=100,
    oob_score=True,
    random_state=42
)


model.fit(
    X_train,
    y_train
)


print(
    "OOB score:",
    model.oob_score_
)


Output


OOB score:


A value determined by the training data and forest configuration.



31. Random Forest and Feature Scaling


Random Forests generally do not require feature scaling.


Tree splits are based on feature thresholds rather than distances.


Therefore, transforming:


Age


from one scale to another does not create the same distance-related issue found in k-NN.



32. Missing Data


Handling missing data depends on the implementation and preprocessing strategy.


A common approach is to use an imputation step before training.


For example:


Missing numerical values


→ Median Imputation


Then:


Random Forest.



33. Categorical Features


Categorical variables need appropriate representation depending on the implementation.


Possible approaches include:


One-Hot Encoding


Ordinal Encoding


Other suitable representations.


The encoding should preserve meaningful information without introducing unintended relationships.



34. Hyperparameter Tuning


Important hyperparameters can be tuned using:


Grid Search


Randomized Search


Cross-Validation


For example:


n_estimators


max_depth


min_samples_leaf


max_features



35. Grid Search Example


Python


from sklearn.model_selection import GridSearchCV


parameter_grid = {

    "n_estimators": [50, 100, 200],

    "max_depth": [None, 5, 10],

    "min_samples_leaf": [1, 2, 5]

}


search = GridSearchCV(
    RandomForestClassifier(
        random_state=42
    ),
    parameter_grid,
    cv=5
)


search.fit(
    X_train,
    y_train
)


print(
    "Best parameters:",
    search.best_params_
)


Output


Best parameters:


A parameter combination selected using cross-validation.



36. Why Use Cross-Validation?


If we select hyperparameters using the test set repeatedly, the test set is no longer a clean final evaluation.


Cross-validation provides a validation mechanism for model selection.


The final test set can then remain untouched until the final evaluation.



37. Advantages of Random Forests


Advantages include:


Strong baseline performance.


Can model nonlinear relationships.


Can capture feature interactions.


Less sensitive to feature scaling.


Usually more stable than a single decision tree.


Can provide feature importance.


Can perform classification and regression.



38. Limitations


Limitations include:


Less interpretable than a single tree.


Can require more memory.


Prediction can be slower than a single tree.


Feature importance can be misleading in some settings.


Large forests can increase computational requirements.



39. Real-World Example: Fraud Detection


Features might include:


Transaction Amount


Transaction Frequency


Location


Time


Merchant Information


A Random Forest can combine many decision trees to classify transactions into categories such as:


Normal


Potentially Fraudulent



40. Real-World Example: Customer Churn


Features:


Contract Type


Monthly Charges


Usage


Support Interactions


Customer Tenure


The forest combines many trees to estimate:


Churn


or:


No Churn.



41. Real-World Example: Demand Prediction


A Random Forest Regressor could estimate:


Product Demand


using:


Price


Previous Sales


Promotion


Day


Season


Inventory


The individual trees produce predictions that are combined into the final estimate.



42. Experiment


Train Random Forest models with:


n_estimators = 10


50


100


200


Compare:


Training Accuracy


Test Accuracy


Cross-Validation Accuracy.


Observe whether increasing the number of trees changes stability.



43. Experiment: Tree Depth


Try:


max_depth = 2


5


10


20


None


Compare the results.



44. Experiment: Feature Importance


Train a Random Forest.


Print:


feature_importances_.


Sort the features by importance.


Identify which features contribute most to the forest's split-based importance.



45. Common Mistakes


Mistake 1:


Assuming more trees always guarantees better performance.


Mistake 2:


Selecting hyperparameters using the test set.


Mistake 3:


Treating feature importance as proof of causation.


Mistake 4:


Ignoring class imbalance.


Mistake 5:


Assuming Random Forests cannot overfit.


Mistake 6:


Ignoring computational cost for extremely large forests.



46. Practice


1. What is an ensemble?


2. What is a Random Forest?


3. Why are multiple trees used?


4. What is bootstrap sampling?


5. What does n_estimators control?


6. What is feature randomness?


7. What is an out-of-bag sample?


8. Why can Random Forests be more stable than a single tree?


9. What does max_depth control?


10. Why should hyperparameters be selected using validation?



47. Quick Check


Question 1


What is a Random Forest?


Answer


An ensemble of decision trees whose predictions are combined.


Question 2


What does n_estimators control?


Answer


The number of trees in the forest.


Question 3


Why use bootstrap samples?


Answer


They create different training samples for individual trees and increase ensemble diversity.


Question 4


Does Random Forest require feature scaling?


Answer


Generally no, because tree-based splitting does not depend on feature distance.


Question 5


Can Random Forest perform regression?


Answer


Yes.



48. Summary


Random Forest is an ensemble of decision trees.


It introduces randomness through bootstrap sampling and feature selection.


Classification uses voting.


Regression commonly uses averaging.


n_estimators controls the number of trees.


max_depth and related parameters control tree complexity.


Random Forests usually do not require feature scaling.


They can model nonlinear relationships.


They can provide feature importance.


Cross-validation can be used for hyperparameter selection.



49. Extended Study


Suppose a Random Forest contains:


T


trees.


For classification, each tree produces a class prediction:


h₁(x), h₂(x), ..., hₜ(x).


The final prediction can be represented as:


ŷ = mode{h₁(x), h₂(x), ..., hₜ(x)}.


For regression:


ŷ = (1/T) Σhₜ(x).


The ensemble benefits when individual trees are sufficiently accurate while their errors are not perfectly correlated.



50. Reflection


Consider a machine learning problem.


Ask:


Would a single tree be unstable?


Could an ensemble reduce variance?


How many trees should be used?


How deep should each tree be?


Are the features meaningful?


Would feature importance be useful?


Could OOB evaluation help?


How will hyperparameters be selected?


Would a Random Forest provide a useful baseline before trying more complex models?

`

};

export default lesson14;