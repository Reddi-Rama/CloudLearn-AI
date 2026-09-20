const lesson15 = {

  id: "lesson15",

  title: "Gradient Boosting",

  content: `

Lesson 15

Gradient Boosting


Gradient Boosting is an ensemble learning technique that builds a model by combining many weak or relatively simple predictive models.

A common implementation uses decision trees as the individual models.

The central idea is different from Random Forests.


Random Forests build many trees independently and combine them.


Gradient Boosting builds trees sequentially.


Each new tree attempts to improve the predictions made by the existing ensemble.



1. The Basic Idea


Suppose the first model makes several prediction errors.


Instead of building another completely independent model, Gradient Boosting asks:


Where is the current model making mistakes?


The next tree is trained to improve those errors.


This process continues:


Initial Model


↓


Calculate Errors


↓


Train Next Tree


↓


Update Model


↓


Calculate New Errors


↓


Train Another Tree


↓


Final Ensemble



2. Sequential Learning


The trees are added one after another.


Tree 1:


Learns an initial pattern.


Tree 2:


Improves Tree 1.


Tree 3:


Improves the combined result of Trees 1 and 2.


And so on.



3. Additive Model


A Gradient Boosting model can be represented as:


F(x) = F₀(x) + ηh₁(x) + ηh₂(x) + ... + ηhₘ(x)


where:


F₀(x) = Initial prediction


hₘ(x) = New weak learner


η = Learning rate


m = Number of boosting stages



4. Learning Rate


The parameter:


learning_rate


controls how strongly each new tree contributes to the final model.


Small learning rate:


Smaller updates.


Large learning rate:


Larger updates.


A smaller learning rate often requires more trees.



5. Number of Estimators


The parameter:


n_estimators


controls the number of boosting stages or trees.


For example:


n_estimators = 100


means the ensemble adds:


100 stages.


The interaction between:


learning_rate


and:


n_estimators


is important.



6. Weak Learners


Gradient Boosting often uses shallow decision trees as weak learners.


A shallow tree captures a relatively simple pattern.


Many such trees are combined to create a powerful model.



7. Residual Intuition


For regression, one intuitive way to understand boosting is through residuals.


Suppose actual values are:


[10, 20, 30]


and current predictions are:


[8, 18, 25].


Residuals are:


[2, 2, 5].


A new tree can learn patterns related to these residuals.



8. Updating Predictions


Suppose the new tree predicts:


[1, 1, 3].


With learning rate:


η = 0.1


the update is:


[0.1, 0.1, 0.3].


The updated predictions become:


[8.1, 18.1, 25.3].



9. Gradient Perspective


The name Gradient Boosting comes from optimization.


The algorithm uses information related to the gradient of the loss function to determine how the model should improve.


For squared-error regression, this connects closely to residuals.



10. Loss Function


Boosting can be understood as minimizing a loss function.


Examples include:


Squared Error


Absolute Error


Log Loss


Different implementations support different objectives.



11. Classification Boosting


For classification, the model can use a classification-oriented loss such as:


Log Loss.


The trees progressively improve the model's ability to separate classes.



12. Python Example: Gradient Boosting Classification


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingClassifier


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


model = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.1,
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


A value determined by the dataset split and boosting configuration.



13. Making Predictions


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



14. Probability Predictions


Python


probabilities = model.predict_proba(
    X_test
)


print(
    probabilities[:5]
)


Output


The output contains estimated probabilities for the possible classes.



15. Gradient Boosting Regression


Gradient Boosting can also perform regression.


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.ensemble import GradientBoostingRegressor
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


model = GradientBoostingRegressor(
    n_estimators=100,
    learning_rate=0.05,
    max_depth=2,
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


A numerical value determined by the fitted model and test data.



16. Why Shallow Trees?


Boosting often uses shallow trees because each tree is intended to make a relatively small correction.


If every tree were extremely complex, the ensemble could become unnecessarily flexible and overfit the training data.



17. max_depth


The parameter:


max_depth


controls the depth of the individual trees.


Smaller depth:


Simpler weak learners.


Larger depth:


More complex weak learners.



18. learning_rate and n_estimators


These parameters interact.


For example:


learning_rate = 0.1


n_estimators = 100


may provide a similar type of overall capacity to another configuration such as:


learning_rate = 0.05


n_estimators = 200.


The actual performance must be evaluated rather than assumed.



19. Overfitting


Gradient Boosting can overfit when:


Too many trees are used.


Trees are too deep.


Learning rate is too large.


The data is noisy.


Hyperparameters are not appropriately controlled.



20. Early Stopping


Some boosting implementations support:


Early Stopping.


The idea is to monitor validation performance and stop adding trees when additional stages stop improving the model.



21. Stochastic Gradient Boosting


Boosting can also use subsets of the training data during each stage.


This introduces additional randomness and can sometimes improve generalization.


In scikit-learn, parameters such as:


subsample


can control the fraction of samples used by each boosting stage.



22. Python Example: Subsampling


Python


model = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.05,
    max_depth=2,
    subsample=0.8,
    random_state=42
)


model.fit(
    X_train,
    y_train
)


print(
    "Test accuracy:",
    model.score(
        X_test,
        y_test
    )
)


Output


Test accuracy:


A value determined by the data and configuration.



23. Random Forest vs Gradient Boosting


Random Forest:


Trees are generally built independently.


Predictions are combined.


Bootstrap sampling is commonly used.


Randomness is central to tree diversity.


Gradient Boosting:


Trees are built sequentially.


Each stage attempts to improve the current model.


Learning rate controls update size.


The model focuses progressively on remaining errors.



24. Another Difference


Random Forest:


Often reduces variance by averaging many diverse trees.


Gradient Boosting:


Often reduces error by sequentially correcting weaknesses.


Both are ensemble methods, but their learning strategies are different.



25. Feature Scaling


Gradient Boosting with decision trees generally does not require feature scaling.


Tree splits are based on thresholds rather than Euclidean distances.


However, preprocessing may still be needed for missing values and categorical variables depending on the implementation.



26. Feature Importance


Gradient Boosting models can provide:


feature_importances_


Python


print(
    model.feature_importances_
)


Output


The values indicate feature importance according to the model's importance calculation.



27. Feature Importance Caution


Feature importance does not prove that a feature causes the target.


It describes how the fitted model uses features under a particular importance measure.


Correlated features can also complicate interpretation.



28. Hyperparameter Tuning


Important parameters include:


n_estimators


learning_rate


max_depth


min_samples_split


min_samples_leaf


subsample


These parameters interact, so they should be evaluated systematically.



29. Cross-Validation


Python


from sklearn.model_selection import cross_val_score


model = GradientBoostingClassifier(
    n_estimators=100,
    learning_rate=0.05,
    max_depth=2,
    random_state=42
)


scores = cross_val_score(
    model,
    X,
    y,
    cv=5
)


print(
    "Mean CV Accuracy:",
    scores.mean()
)


Output


Mean CV Accuracy:


A value determined by the data and cross-validation procedure.



30. Experiment: Learning Rate


Try:


learning_rate = 0.01


0.05


0.1


0.2


Compare validation performance.


Also vary:


n_estimators.


Observe the interaction between the two parameters.



31. Experiment: Tree Depth


Try:


max_depth = 1


2


3


4


Compare:


Training Accuracy


Validation Accuracy.


Observe whether deeper trees improve training performance while harming validation performance.



32. Experiment: Number of Trees


Try:


n_estimators = 25


50


100


200


500


Measure validation performance.



33. Real-World Example: Customer Churn


A boosting model could use:


Contract Type


Monthly Charges


Customer Tenure


Usage


Support Interactions


to predict:


Churn Probability.



34. Real-World Example: Risk Prediction


Features could include:


Historical Behaviour


Financial Variables


Account Activity


Transaction Patterns


The boosting model learns sequentially from errors made by earlier stages.



35. Real-World Example: Demand Forecasting


A regression boosting model can predict:


Product Demand


using:


Historical Sales


Price


Promotion


Season


Day


Inventory.


The model can capture nonlinear relationships and interactions.



36. Advantages of Gradient Boosting


Advantages include:


Strong predictive performance.


Can model nonlinear relationships.


Can capture interactions.


Works with classification and regression.


Often performs well on structured/tabular data.


Can be tuned for different levels of complexity.



37. Limitations


Limitations include:


Can overfit.


Training is sequential and can be slower than independently trained trees.


Many hyperparameters interact.


Interpretation is harder than a single tree.


Performance can depend strongly on tuning.



38. Common Mistakes


Mistake 1:


Using a very high learning rate without validation.


Mistake 2:


Using extremely deep trees.


Mistake 3:


Adding many trees without checking validation performance.


Mistake 4:


Choosing hyperparameters using the test set.


Mistake 5:


Assuming boosting automatically performs well on every dataset.



39. Practice


1. What is Gradient Boosting?


2. How is it different from Random Forest?


3. What is a weak learner?


4. What does learning_rate control?


5. What does n_estimators control?


6. Why are shallow trees commonly used?


7. What is the role of residuals in regression boosting?


8. What is early stopping?


9. What is stochastic boosting?


10. Why can Gradient Boosting overfit?



40. Quick Check


Question 1


How are trees built in Gradient Boosting?


Answer


They are built sequentially, with later trees improving the current ensemble.


Question 2


What does learning_rate control?


Answer


It controls the contribution of each boosting stage.


Question 3


What does n_estimators control?


Answer


The number of boosting stages or trees.


Question 4


Can Gradient Boosting perform regression?


Answer


Yes.


Question 5


How is Gradient Boosting different from Random Forest?


Answer


Random Forest trees are generally built independently, while Gradient Boosting builds trees sequentially to improve the current model.



41. Summary


Gradient Boosting is an ensemble learning technique.


It builds models sequentially.


Each new tree attempts to improve the existing ensemble.


Decision trees are commonly used as weak learners.


learning_rate controls update size.


n_estimators controls the number of boosting stages.


max_depth controls tree complexity.


Gradient Boosting can perform classification and regression.


It can model nonlinear relationships and interactions.


It can overfit if complexity is not controlled.


Cross-validation is useful for hyperparameter selection.



42. Extended Study


Let the current model be:


Fₘ₋₁(x).


Gradient Boosting adds a new learner:


hₘ(x).


The updated model can be written as:


Fₘ(x) = Fₘ₋₁(x) + ηhₘ(x).


The new learner is selected to reduce the loss function.


For squared-error regression, the negative gradient corresponds closely to the residual:


rᵢ = yᵢ - Fₘ₋₁(xᵢ).


The next learner attempts to approximate this correction.



43. Gradient Descent Intuition


Suppose the model is represented by parameters.


Gradient descent updates parameters in a direction that reduces the loss.


Gradient Boosting applies a related optimization idea in function space.


Instead of directly adjusting a fixed vector of parameters, it adds new functions to improve the current prediction function.



44. Boosting and Bias


Boosting can progressively reduce bias by adding models that correct previous errors.


However, if the ensemble becomes too complex, variance and overfitting can increase.


Therefore, learning rate, tree depth, number of estimators, and validation strategy are important.



45. Reflection


Consider a structured machine learning problem.


Ask:


Would nonlinear relationships exist?


Would interactions between features matter?


Could a single tree be too weak?


Would sequential correction help?


How many trees should be used?


What learning rate is appropriate?


How deep should the trees be?


Should early stopping be used?


Would Random Forest or Gradient Boosting be a useful baseline?

`

};

export default lesson15;