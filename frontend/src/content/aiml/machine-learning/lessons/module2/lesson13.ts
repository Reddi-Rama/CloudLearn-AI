const lesson13 = {

  id: "lesson13",

  title: "Decision Trees",

  content: `

Lesson 13

Decision Trees


A Decision Tree is a supervised learning algorithm that makes predictions by applying a sequence of decisions.


The model looks similar to a flowchart.


At each decision point, the data is divided according to a feature condition.


The process continues until a prediction is reached.



1. The Basic Idea


Suppose we want to predict whether a student will pass.


We could ask:


Is attendance greater than 75%?


If yes:


Ask whether study hours are greater than 4.


If no:


Predict Fail.


This creates a sequence of decisions.



2. Tree Structure


A decision tree contains:


Root


Internal Nodes


Branches


Leaves


The root is the first decision.


Internal nodes represent additional decisions.


Branches represent outcomes of decisions.


Leaves contain predictions.



3. Simple Example


Suppose:


Attendance > 75?


Yes → Study Hours > 4?


No → Fail


If Study Hours > 4:


Pass


Otherwise:


Fail


This can be represented as:


                Attendance > 75?


                 /          \


               Yes           No


                |             |


        Study Hours > 4     Fail


           /      \


         Yes       No


          |         |


        Pass      Fail



4. Classification Trees


For classification, a leaf contains a class prediction.


For example:


Leaf:


Spam


Another leaf:


Not Spam.


The tree routes a new observation through the decision rules until it reaches a leaf.



5. Regression Trees


Decision Trees can also perform regression.


Instead of a class, a leaf contains a numerical prediction.


For example:


Predicted House Price:


₹62 lakh.



6. Root Node


The root is the first node in the tree.


The algorithm chooses a feature and split that provides a useful division of the training data.


For example:


Petal Length < 2.5?


This can become the root decision in a classification tree.



7. Internal Nodes


After the first split, the tree can create additional decisions.


For example:


Petal Length < 2.5?


If false:


Petal Width < 1.8?


The process continues recursively.



8. Leaf Nodes


A leaf represents the final prediction.


In classification:


Leaf → Class.


In regression:


Leaf → Numerical Value.



9. How Does the Tree Choose a Split?


The tree searches for a feature and threshold that improves the separation of the target values.


Different splitting criteria can be used.


For classification, common criteria include:


Gini Impurity


Entropy


For regression, criteria based on squared error can be used.



10. Gini Impurity


Gini impurity measures how mixed the classes are within a node.


For classes:


1, 2, ..., C


Gini impurity can be written as:


G = 1 - Σpₖ²


where:


pₖ


is the proportion of observations belonging to class k.



11. Example of Gini Impurity


Suppose a node contains:


100% Class A.


Then:


p_A = 1.


G = 1 - 1²


G = 0.


The node is completely pure.



12. Mixed Node


Suppose a binary node contains:


50% Class A


50% Class B.


Then:


G = 1 - (0.5² + 0.5²)


G = 1 - (0.25 + 0.25)


G = 0.5.


The node is more impure.



13. Entropy


Another splitting criterion is entropy.


Entropy can be written as:


H = -Σpₖ log₂(pₖ)


For a pure node:


Entropy = 0.


For a binary node with equal class proportions:


Entropy = 1 bit.



14. Information Gain


A split can be evaluated by how much it reduces impurity.


Conceptually:


Information Gain


=


Parent Impurity


-


Weighted Child Impurity.


The tree chooses splits that provide useful reductions in impurity according to the selected criterion.



15. Recursive Splitting


After choosing the best split:


The dataset is divided.


Each child node can then be split again.


This continues until a stopping condition is reached.



16. Stopping Conditions


A tree can stop growing when:


Maximum depth is reached.


A node contains too few samples.


A split provides insufficient improvement.


The node becomes sufficiently pure.


Other model constraints are reached.



17. max_depth


The parameter:


max_depth


controls the maximum depth of a decision tree.


Small depth:


Simpler tree.


Large depth:


More complex tree.



18. Overfitting in Decision Trees


If a tree grows too deeply, it can memorize training-specific patterns.


For example:


Training Accuracy = 100%


Test Accuracy = 75%


This can indicate overfitting.



19. Underfitting in Decision Trees


If the tree is too shallow, it may not capture important patterns.


For example:


Training Accuracy = 72%


Test Accuracy = 70%


The tree may be too simple.



20. Python Example: Decision Tree


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


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


model = DecisionTreeClassifier(
    max_depth=3,
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


A value determined by the dataset split and model configuration.



21. Making Predictions


Python


predictions = model.predict(
    X_test
)


print(
    "First 10 predictions:",
    predictions[:10]
)


Output


The output contains predicted class labels.



22. Prediction Probabilities


Decision Trees can also produce class probabilities.


Python


probabilities = model.predict_proba(
    X_test
)


print(
    probabilities[:5]
)


Output


Each row contains estimated class probabilities based on the leaf reached by the observation.



23. Visualizing the Tree


A decision tree can be visualized.


Python


from sklearn.tree import plot_tree
import matplotlib.pyplot as plt


plt.figure(
    figsize=(14, 8)
)


plot_tree(
    model,
    feature_names=iris.feature_names,
    class_names=iris.target_names,
    filled=True
)


plt.show()


Output


A graphical representation of the decision tree is displayed.



24. Understanding the Visualization


The visualization shows:


Feature used for splitting


Threshold


Impurity


Number of samples


Class distribution


Predicted class


Each branch represents one outcome of a decision.



25. Feature Importance


Decision Trees can provide:


feature_importances_


This gives a measure related to how much each feature contributes to reducing impurity across the tree.


Python


print(
    model.feature_importances_
)


Output


The output contains one importance value for each feature.



26. Interpreting Feature Importance


Suppose the result is:


[0.05, 0.10, 0.70, 0.15]


The third feature has the largest importance according to this tree.


However, feature importance should be interpreted carefully, especially when features are correlated.



27. Classification Tree vs Regression Tree


Classification Tree:


Predicts categories.


Uses classification impurity criteria.


Leaf prediction is a class or class probabilities.


Regression Tree:


Predicts numerical values.


Uses regression-oriented split criteria.


Leaf prediction is numerical.



28. Python Example: Regression Tree


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeRegressor
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


model = DecisionTreeRegressor(
    max_depth=4,
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


A numerical value determined by the dataset split and model configuration.



29. Regression Tree Prediction


For a regression tree, a leaf generally predicts a representative numerical value based on the training targets reaching that leaf.


A common approach is to use the mean target value in the leaf.



30. Advantages of Decision Trees


Advantages include:


Easy to understand.


Easy to visualize.


Can model nonlinear relationships.


Can capture feature interactions.


Do not require feature scaling in the usual tree-splitting process.


Can handle classification and regression.



31. Limitations


Limitations include:


Can overfit easily.


Small changes in data can change the tree.


Deep trees can become difficult to interpret.


Single trees can have high variance.


Predictions outside observed structures can be limited compared with some other regression models.



32. Feature Scaling


Decision Trees generally do not require feature scaling in the same way distance-based algorithms do.


For example:


Age = 20


Income = 50,000


The tree can split based on each feature's threshold independently.


The numerical scale does not directly distort a Euclidean distance because trees do not use distance to find neighbors.



33. Missing Values


Handling of missing values depends on the algorithm and implementation.


A common practical approach is to preprocess missing values before training.


For example:


Simple imputation


or:


A preprocessing pipeline.



34. Categorical Features


Categorical variables can require appropriate encoding depending on the implementation.


For example:


City:


Mumbai


Delhi


Chennai


could be transformed using an appropriate encoding method.



35. Hyperparameters


Important Decision Tree parameters include:


max_depth


min_samples_split


min_samples_leaf


max_features


criterion


max_leaf_nodes


These parameters control tree complexity and splitting behaviour.



36. min_samples_split


This parameter specifies the minimum number of samples required to split an internal node.


Increasing it can prevent very small groups from being repeatedly split.



37. min_samples_leaf


This parameter specifies the minimum number of samples required in a leaf.


Increasing it can create smoother and less complex trees.



38. max_leaf_nodes


This limits the maximum number of leaf nodes.


It provides another way to control tree complexity.



39. Experiment: Tree Depth


Train trees with:


max_depth = 1


max_depth = 2


max_depth = 3


max_depth = 5


max_depth = 10


max_depth = None


Record:


Training Accuracy


Test Accuracy


Compare the results.



40. Python Experiment


Python


for depth in [1, 2, 3, 5, 10, None]:

    model = DecisionTreeClassifier(
        max_depth=depth,
        random_state=42
    )

    model.fit(
        X_train,
        y_train
    )

    train_score = model.score(
        X_train,
        y_train
    )

    test_score = model.score(
        X_test,
        y_test
    )

    print(
        "Depth:",
        depth,
        "Training:",
        train_score,
        "Test:",
        test_score
    )


Output


The exact values depend on the dataset split and environment.



41. Experiment: Minimum Leaf Size


Try:


min_samples_leaf = 1


min_samples_leaf = 2


min_samples_leaf = 5


min_samples_leaf = 10


Compare training and validation performance.



42. Cross-Validation


Decision Tree hyperparameters should ideally be selected using validation or cross-validation.


For example:


max_depth


can be evaluated using:


cross_val_score.


This helps avoid choosing complexity based only on training performance.



43. Decision Tree and Feature Interactions


One advantage of trees is their ability to represent interactions.


For example:


If:


Age < 30


and:


Income > 50,000


then:


Class A.


Otherwise:


Class B.


The tree naturally represents this sequence of conditions.



44. Nonlinear Decision Boundaries


Decision Trees can represent nonlinear decision boundaries.


A sequence of axis-aligned splits can divide the feature space into rectangular regions.


Each region can correspond to a different prediction.



45. Example


Suppose features are:


Study Hours


and:


Attendance.


A tree might first split:


Attendance > 75?


Then:


Study Hours > 4?


This produces regions of the feature space with different predictions.



46. Real-World Example: Loan Risk


A tree might ask:


Income > threshold?


↓


Yes / No


Then:


Credit Score > threshold?


↓


Yes / No


Then:


Debt Ratio < threshold?


↓


Prediction


The sequence of decisions can be interpreted as a set of rules.



47. Real-World Example: Medical Classification


A decision tree might use:


Age


Blood Pressure


Laboratory Measurements


Symptoms


to divide observations into different predicted classes.


In real healthcare applications, model validation, clinical oversight, and appropriate data practices are essential.



48. Real-World Example: Customer Churn


A tree could use:


Contract Type


Monthly Charges


Usage


Support Calls


to predict:


Churn


or:


No Churn.


The resulting rules can sometimes be easier to communicate than those from more complex models.



49. Common Mistakes


Mistake 1:


Allowing an unrestricted tree to grow without checking generalization.


Mistake 2:


Selecting depth using the test set.


Mistake 3:


Assuming feature importance proves causation.


Mistake 4:


Ignoring class imbalance.


Mistake 5:


Assuming a tree always gives the best performance because it is easy to interpret.


Mistake 6:


Ignoring small sample sizes in leaves.



50. Practice


1. What is a Decision Tree?


2. What is the root node?


3. What is a leaf?


4. What is Gini impurity?


5. What is entropy?


6. What is information gain?


7. What does max_depth control?


8. Why can deep trees overfit?


9. What is feature importance?


10. Why do Decision Trees usually not require feature scaling?



51. Quick Check


Question 1


What is a Decision Tree?


Answer


A supervised learning model that makes predictions using a sequence of feature-based decisions.


Question 2


What is a leaf?


Answer


A terminal node containing the model's final prediction.


Question 3


What does max_depth control?


Answer


The maximum depth of the tree.


Question 4


Can Decision Trees model nonlinear relationships?


Answer


Yes.


Question 5


Can a deep Decision Tree overfit?


Answer


Yes.



52. Summary


Decision Trees make predictions through sequential decisions.


The root is the first decision node.


Internal nodes contain additional decisions.


Branches represent outcomes.


Leaves contain predictions.


Classification trees predict classes.


Regression trees predict numerical values.


Gini impurity and entropy are common classification splitting criteria.


max_depth and other hyperparameters control complexity.


Deep trees can overfit.


Decision Trees can represent nonlinear relationships and interactions.


They usually do not require feature scaling.



53. Extended Study


For a classification node with class probabilities:


p₁, p₂, ..., pₖ,


Gini impurity is:


G = 1 - Σpₖ².


Entropy is:


H = -Σpₖlog₂(pₖ).


For a candidate split, the impurity of the child nodes is combined using their sample proportions.


The split is preferred when it produces a useful reduction in impurity.



54. Recursive Partitioning


Decision Trees can be viewed as recursively partitioning the feature space.


Initially:


Entire Feature Space


↓


Split


Then:


Region A


Region B


Each region can be split again.


Eventually:


Leaf Regions


are created.


Each leaf contains the prediction associated with that region.



55. Tree Complexity


A tree can become more complex through:


Greater depth


More leaves


Smaller minimum leaf sizes


More detailed splits.


Complexity increases the ability to fit training data.


But excessive complexity can increase variance and overfitting.



56. Pruning


Pruning refers to reducing unnecessary tree complexity.


It can be performed by:


Pre-pruning


or:


Post-pruning.


Pre-pruning limits tree growth using parameters such as:


max_depth


min_samples_leaf


min_samples_split.


Post-pruning removes branches after a larger tree has been created using an appropriate pruning strategy.



57. Reflection


Consider a classification problem.


Ask:


Would a sequence of decisions make sense?


Which feature should be used first?


Could a shallow tree capture the relationship?


Could a deep tree overfit?


Which splitting criterion should be used?


How will tree depth be selected?


Would the resulting rules be understandable?


Would an ensemble of trees be more appropriate?


These questions help determine whether a Decision Tree is suitable for the problem.

`

};

export default lesson13;