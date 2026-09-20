const lesson5 = {

  id: "lesson5",

  title: "Model Complexity and Dataset Size",

  content: `

Lesson 05

Model Complexity and Dataset Size


Two factors have a major influence on how a machine learning model behaves:


Model Complexity


and:


Dataset Size


Model complexity describes how flexible a model is.


Dataset size describes how much training information is available.


A complex model trained on a very small dataset can easily memorize training examples.


A simple model trained on a large dataset may not be flexible enough to represent a complicated relationship.


Understanding the interaction between these two factors helps us make better modeling decisions.



1. What Is Model Complexity?


Model complexity refers to the flexibility or expressive ability of a model.


A simple model can represent a limited range of relationships.


A more complex model can represent more complicated relationships.


For example:


A linear regression model


can represent:


y = wx + b


This describes a straight-line relationship.


A polynomial model can represent:


y = w₀ + w₁x + w₂x² + ... + wₖxᵏ


Increasing the polynomial degree increases the model's flexibility.



2. Simple Models


A simple model makes relatively strong assumptions about the structure of the data.


Examples include:


Linear Regression


Simple Decision Trees


Low-degree Polynomial Regression


A simple model can be useful when the underlying relationship is relatively simple.



3. Complex Models


Complex models can represent more complicated relationships.


Examples include:


Deep Decision Trees


High-degree Polynomial Models


Large Neural Networks


Ensemble Models


Complex models can be powerful, but greater flexibility can also increase the risk of overfitting.



4. Complexity and Flexibility


Imagine fitting a curve to a set of observations.


A straight line has limited flexibility.


A quadratic curve is more flexible.


A high-degree polynomial can be extremely flexible.


Conceptually:


Degree 1


→ Simple


Degree 2


→ More Flexible


Degree 10


→ Highly Flexible


As flexibility increases, the model can fit more complicated patterns.



5. Underfitting at Low Complexity


Suppose the true relationship is curved.


A straight-line model may fail to represent the relationship adequately.


The model produces:


High training error


and:


High validation error.


This is a possible example of underfitting.



6. Overfitting at High Complexity


Now suppose we use an extremely flexible model.


It may pass very closely through the training observations.


Training error can become very small.


However, the model may also capture noise.


When new data is introduced, prediction error can increase.


This is a possible example of overfitting.



7. Finding an Appropriate Complexity


The goal is not:


Maximum Complexity


and not:


Minimum Complexity.


The goal is to find a complexity level that provides useful generalization.


Conceptually:


Too Simple


→ Underfitting


Appropriate Complexity


→ Good Generalization


Too Complex


→ Overfitting



8. Dataset Size


Dataset size refers to the number of training observations available to the model.


Suppose a dataset contains:


100 samples.


Another dataset contains:


100,000 samples.


The second dataset provides substantially more examples from which the model can learn.


However, useful dataset size depends not only on the number of rows.


Data quality and diversity also matter.



9. More Data Does Not Automatically Mean Better Data


Consider two datasets.


Dataset A:


100,000 duplicated observations.


Dataset B:


10,000 diverse and representative observations.


Dataset B may provide more useful information even though it contains fewer rows.


Therefore, dataset quality matters along with quantity.



10. Why Dataset Size Matters


A model learns from examples.


More useful examples can provide:


More information about the target relationship


More variation


More examples of rare cases


Better estimates of patterns


Reduced sensitivity to individual observations


This can improve generalization for many problems.



11. Small Dataset with Complex Model


Suppose:


Training Samples = 50


Model Complexity = Very High


The model has many opportunities to fit individual observations.


This can result in:


Training Error → Very Low


Test Error → High


This is a common overfitting scenario.



12. Large Dataset with the Same Model


Now suppose:


Training Samples = 50,000


The same type of model has access to much more information.


The model sees:


More examples


More variations


More combinations of feature values


The learned relationship may become more stable.


However, the exact effect depends on the model, data quality, noise, and problem.



13. Complexity Relative to Dataset Size


Model complexity should be considered relative to the amount of information available.


For example:


A moderately complex model may be appropriate for:


10,000 representative observations.


The same model may be too flexible for:


50 observations.


Therefore, complexity cannot be evaluated independently from dataset size.



14. Parameter Count


One way of thinking about model complexity is the number of parameters or degrees of freedom that the model can use.


For example, a linear model with:


10 features


may have:


10 weights + 1 intercept.


A more complicated neural network may contain:


Thousands


or:


Millions


of parameters.


Parameter count is useful for intuition, but it does not completely define effective model complexity.



15. Degrees of Freedom


Degrees of freedom provide another statistical way to describe flexibility.


A model with more degrees of freedom generally has more ability to adapt to the training data.


More flexibility can reduce training error.


But excessive flexibility can increase variance and overfitting.



16. Decision Tree Complexity


Decision trees provide a clear example of adjustable complexity.


Important parameters include:


max_depth


min_samples_split


min_samples_leaf


max_leaf_nodes


Increasing:


max_depth


generally allows the tree to represent more detailed relationships.



17. Example of Tree Depth


Consider:


max_depth = 1


The tree can make only a small number of decisions.


Now consider:


max_depth = 10


The tree can make many more sequential decisions.


A very deep tree can potentially create highly specific regions of the feature space.



18. Python Experiment: Tree Complexity


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


data = load_iris()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


depths = [1, 2, 3, 4, 6, 10, None]


for depth in depths:

    model = DecisionTreeClassifier(
        max_depth=depth,
        random_state=42
    )

    model.fit(X_train, y_train)

    train_accuracy = model.score(
        X_train,
        y_train
    )

    test_accuracy = model.score(
        X_test,
        y_test
    )

    print(
        "Depth:",
        depth,
        "Training:",
        train_accuracy,
        "Test:",
        test_accuracy
    )


Output


The exact values depend on the train/test split and software environment.


The important observation is how training and test performance change as tree depth increases.



19. Interpreting Tree Depth


Suppose the results show:


Depth 1:


Training = 70%


Test = 68%


Depth 3:


Training = 95%


Test = 92%


Depth 10:


Training = 100%


Test = 88%


The highly complex tree has perfect training performance in this example but lower test performance.


This demonstrates how increasing complexity can eventually hurt generalization.



20. Polynomial Complexity


Polynomial regression provides another clear example.


A degree-1 model:


y = w₀ + w₁x


A degree-2 model:


y = w₀ + w₁x + w₂x²


A degree-5 model:


y = w₀ + w₁x + w₂x² + w₃x³ + w₄x⁴ + w₅x⁵


As the degree increases, the model becomes more flexible.



21. Polynomial Overfitting


Suppose we have only:


20 observations.


A high-degree polynomial may be able to pass very closely through the observations.


Training error can become very small.


But the resulting curve may behave strangely between or outside the observed points.


This is an example of how excessive flexibility can harm generalization.



22. Python Example: Polynomial Features


Python


import numpy as np

from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import make_pipeline


X = np.array([
    [1],
    [2],
    [3],
    [4],
    [5],
    [6],
    [7],
    [8]
])


y = np.array([
    3,
    5,
    10,
    18,
    29,
    43,
    60,
    80
])


for degree in [1, 2, 3, 5]:

    model = make_pipeline(
        PolynomialFeatures(degree),
        LinearRegression()
    )

    model.fit(X, y)

    predictions = model.predict(X)

    print(
        "Degree:",
        degree
    )

    print(
        "Predictions:",
        predictions
    )


Output


The exact predictions depend on the fitted coefficients.


The experiment demonstrates that increasing polynomial degree changes the model's flexibility.



23. Regularization and Complexity


Regularization provides another way to control complexity.


Instead of only asking:


How closely can the model fit the training data?


we also ask:


How large or complex should the learned parameters be?


The objective becomes:


Prediction Loss


+


Complexity Penalty



24. Ridge Regularization


Ridge regression uses an L2 penalty.


The objective can be written as:


Σ(yᵢ - ŷᵢ)² + αΣwⱼ²


The second term penalizes large coefficient values.


The parameter:


α


controls the regularization strength.



25. Lasso Regularization


Lasso uses an L1 penalty:


Σ(yᵢ - ŷᵢ)² + αΣ|wⱼ|


The L1 penalty can cause some coefficients to become zero.


This can simplify the model and perform a form of feature selection.



26. Dataset Size and Variance


With a very small dataset, the learned model may be strongly influenced by individual observations.


Suppose:


Dataset A:


10 samples.


Adding or removing one sample can substantially change the learned model.


Now suppose:


Dataset B:


100,000 samples.


One additional observation is generally a much smaller fraction of the dataset.


The estimated relationship may therefore be more stable.



27. Sampling Variability


A training dataset is a sample from a larger population.


Different samples can produce different fitted models.


With small datasets:


Sampling variability can be large.


With larger representative datasets:


Estimates may become more stable.


This is one reason additional useful data can improve generalization.



28. Dataset Size and Rare Cases


Some problems contain rare events.


For example:


Fraud detection


Network failures


Rare diseases


Equipment failures


If the dataset contains very few examples of the rare class, the model may struggle to learn it.


Increasing the number of relevant rare examples can be particularly valuable.



29. Class Imbalance


Suppose a fraud dataset contains:


9,900 legitimate transactions


100 fraudulent transactions.


Fraud represents only:


1%


of the dataset.


A model that predicts:


Legitimate


for every transaction would achieve:


99% accuracy.


Yet it would detect:


0%


of the fraudulent cases.


This demonstrates why dataset composition matters.



30. More Data for the Minority Class


Suppose we obtain additional legitimate and fraudulent examples.


The model now has more information about the rare class.


This can improve learning.


However, collecting data must be done carefully.


Artificially duplicating the same observations is not equivalent to collecting genuinely diverse examples.



31. Data Augmentation


In some machine learning applications, additional training examples can be created through controlled transformations.


For images, examples might include:


Small rotations


Crops


Brightness changes


Flips


These techniques are called data augmentation.


The goal is to increase useful variation without changing the target incorrectly.



32. Dataset Diversity


Dataset size should also be considered together with diversity.


Suppose a facial-image model is trained on:


100,000 images


but all images come from the same environment.


The dataset is large but narrow.


A smaller dataset with broader variation may sometimes provide more useful information.


Important dimensions can include:


Lighting


Camera type


Background


Age groups


Geographical variation


Image quality


Application conditions



33. Dataset Size and Validation


When the dataset is small, dividing it into:


Training


Validation


Test


can leave relatively few examples for each purpose.


Cross-validation can help use limited data more efficiently.


For example:


5-fold cross-validation


uses each observation for validation in one fold while using it for training in the other folds.



34. Dataset Size and Computational Cost


More data can improve learning, but it also increases computational requirements.


Larger datasets can require:


More memory


More storage


Longer training time


More preprocessing


More computation


Therefore, practical machine learning involves balancing:


Data quality


Data quantity


Model complexity


Computation



35. Dataset Size and Neural Networks


Large neural networks often contain many parameters.


Training such models from scratch generally benefits from substantial amounts of data.


If the dataset is very small relative to model capacity, overfitting can become a concern.


Possible approaches include:


Regularization


Data augmentation


Transfer learning


Early stopping


Reducing model size



36. Transfer Learning


Transfer learning uses knowledge learned from one task or dataset as a starting point for another related task.


For example:


A model pretrained on a large image dataset


may be adapted to a smaller specialized image dataset.


This can reduce the amount of task-specific data required compared with training an equivalent model entirely from scratch.



37. Model Capacity


Model capacity refers to the range of functions a model can represent.


Low-capacity model:


Limited flexibility.


High-capacity model:


Greater flexibility.


High capacity can be useful when the underlying problem is complex.


However, high capacity also increases the need for:


Good data


Appropriate regularization


Careful validation



38. Effective Complexity


Two models with the same number of parameters can behave differently.


Effective complexity can depend on:


Regularization


Data distribution


Optimization


Architecture


Feature representation


Training procedure


Therefore, parameter count alone is not a complete measure of model complexity.



39. The Data-Model Relationship


A useful way to think about machine learning is:


Model Capacity


↕


Dataset Size


↕


Noise


↕


Feature Quality


All of these interact.


A highly complex model may require more data.


A noisy dataset may require stronger regularization.


A simple model may be sufficient when the relationship is simple.



40. Python Experiment: Different Training Sizes


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


data = load_iris()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


sizes = [20, 40, 60, 80]


for size in sizes:

    X_subset = X_train[:size]
    y_subset = y_train[:size]

    model = DecisionTreeClassifier(
        max_depth=5,
        random_state=42
    )

    model.fit(X_subset, y_subset)

    score = model.score(
        X_test,
        y_test
    )

    print(
        "Training samples:",
        size,
        "Test accuracy:",
        score
    )


Output


The exact values depend on the selected observations and model configuration.


The experiment demonstrates that training-set size can influence generalization.



41. Learning Curves in Practice


A learning curve can provide a more systematic view.


Instead of manually selecting several dataset sizes, we can use:


learning_curve


from:


sklearn.model_selection


The function can calculate training and validation scores for multiple training-set sizes.



42. Python Example: Learning Curve


Python


import numpy as np

from sklearn.datasets import load_iris
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import learning_curve


data = load_iris()


X = data.data
y = data.target


model = DecisionTreeClassifier(
    max_depth=5,
    random_state=42
)


train_sizes, train_scores, validation_scores = learning_curve(
    model,
    X,
    y,
    cv=5,
    train_sizes=np.linspace(0.1, 1.0, 5)
)


print("Training sizes:")
print(train_sizes)


print("Mean training scores:")
print(train_scores.mean(axis=1))


print("Mean validation scores:")
print(validation_scores.mean(axis=1))


Output


The exact scores depend on the dataset and cross-validation procedure.



43. Understanding Learning Curves


The learning curve provides information about how performance changes as training data increases.


If validation performance continues improving as more data is added, collecting additional data may be useful.


If both training and validation performance remain poor, the model may be underfitting.


If training performance is much higher than validation performance, the model may have high variance.



44. Practical Model Selection


When choosing a model, consider:


1. Dataset size


2. Number of features


3. Feature quality


4. Noise


5. Target complexity


6. Computational resources


7. Need for interpretability


8. Evaluation requirements


9. Regularization options


10. Deployment constraints



45. A Simple Decision Process


Start:


Understand the data.


↓


Estimate dataset size.


↓


Choose a reasonable baseline model.


↓


Measure training and validation performance.


↓


Check for underfitting.


↓


Check for overfitting.


↓


Adjust model complexity.


↓


Evaluate again.


↓


Use cross-validation when appropriate.


↓


Perform final evaluation on held-out data.



46. Common Mistakes


Mistake 1:


Choosing a complex model simply because it is more powerful.


Complexity is not automatically beneficial.


Mistake 2:


Assuming a large dataset is automatically high quality.


Duplicates, noise, and bias can remain.


Mistake 3:


Ignoring rare classes.


A large dataset can still contain very few examples of an important class.


Mistake 4:


Using too little data for a highly flexible model.


This can increase overfitting.


Mistake 5:


Using too simple a model for a highly nonlinear problem.


This can create underfitting.


Mistake 6:


Ignoring computational requirements.


More data and larger models increase resource requirements.



47. Practice


1. What is model complexity?


2. Why can excessive complexity cause overfitting?


3. Why can low complexity cause underfitting?


4. How can additional useful training data improve generalization?


5. Why does dataset diversity matter?


6. What is model capacity?


7. What is regularization?


8. What is class imbalance?


9. Why can a large dataset still be poor quality?


10. What information can a learning curve provide?



48. Quick Check


Question 1


What does model complexity describe?


Answer


It describes how flexible or expressive a model is and how complicated a relationship it can represent.


Question 2


Can a complex model overfit?


Answer


Yes.


A highly flexible model can fit training-specific patterns and noise.


Question 3


Can a simple model underfit?


Answer


Yes.


If the model is not flexible enough to represent important patterns, it may underfit.


Question 4


Does more data always solve overfitting?


Answer


No.


The additional data must be useful, representative, and sufficiently informative.


Question 5


Why is dataset diversity important?


Answer


A diverse dataset exposes the model to a wider range of conditions that may occur when the model is used.



49. Summary


Model complexity describes model flexibility.


Low complexity can cause underfitting.


High complexity can cause overfitting.


Dataset size describes the amount of training information available.


More useful and representative data can improve generalization.


Data quantity alone does not guarantee data quality.


Dataset diversity is important.


Class imbalance can make apparently strong accuracy misleading.


Decision-tree depth is one example of an adjustable complexity parameter.


Polynomial degree controls the flexibility of polynomial models.


Regularization controls model complexity by adding penalties.


Learning curves show how performance changes with training-set size.


Large models often require more data or additional techniques such as regularization and transfer learning.


The best model depends on the interaction between:


Model


Data


Features


Noise


Complexity


Evaluation



50. Extended Study


A useful conceptual relationship is:


Generalization


≈


Function of


Model Capacity


Dataset Size


Data Quality


Noise


Feature Representation


Regularization


Evaluation Procedure


There is no universal rule stating that a model should have a particular number of parameters for a particular dataset.


Instead, machine learning practitioners experimentally evaluate whether the model is:


Underfitting


Appropriately fitted


or:


Overfitting.



51. Complexity and Sample Size


Suppose a model has very high capacity but the dataset contains only a small number of observations.


The model may have many possible functions that fit the available observations.


This makes it easier for the model to fit accidental details.


As the number of representative observations increases, the data provides stronger constraints on the relationships the model can learn.


This is one reason dataset size and model complexity should be considered together.



52. The Role of Validation


The relationship between complexity and generalization should be evaluated using validation data or cross-validation.


For example:


Model Complexity:


Low


Medium


High


Very High


Measure:


Training Score


Validation Score


The model should not be selected simply because it has the highest training score.


The validation procedure provides information about how the model may behave on unseen observations.



53. Data Quality Before Data Quantity


Before collecting enormous amounts of data, ask:


Are the labels correct?


Are there duplicates?


Are important classes represented?


Are important conditions represented?


Are the features meaningful?


Is the data collected from the correct population?


Are there leakage features?


Is the target correctly defined?


Improving these properties can be more valuable than simply adding more rows.



54. Reflection


Consider a machine learning project you would like to build.


Estimate:


How many training examples would you have?


How many features?


How complex is the relationship?


Would a simple model be enough?


Could a complex model overfit?


What kinds of noise could exist?


Are rare cases important?


Would more data help?


How would you detect underfitting?


How would you detect overfitting?


How would you select model complexity?


Thinking about the relationship between data and model capacity is an important step toward designing reliable machine learning systems.

`

};

export default lesson5;