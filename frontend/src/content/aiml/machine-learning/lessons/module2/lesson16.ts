const lesson16 = {

  id: "lesson16",

  title: "Support Vector Machines",

  content: `

Lesson 16

Support Vector Machines


Support Vector Machines, commonly called:


SVMs


are supervised learning algorithms used for classification and regression.


They are especially known for finding decision boundaries that separate classes while attempting to create a large margin between them.



1. The Basic Idea


Suppose we have two classes:


Class A


and:


Class B.


A classifier needs to find a boundary separating them.


For two-dimensional data, this boundary can be a line.


An SVM searches for a separating boundary with a useful margin around it.



2. Decision Boundary


Suppose the data contains:


Class A → points on one side.


Class B → points on the other side.


A possible decision boundary is:


wᵀx + b = 0


where:


w


controls the orientation of the boundary.


b


controls its position.



3. Hyperplane


In two dimensions, the decision boundary is a line.


In three dimensions, it is a plane.


In higher dimensions, it is called a:


Hyperplane.


The general equation is:


wᵀx + b = 0.



4. Classification Rule


For a binary SVM:


If:


wᵀx + b > 0


predict one class.


If:


wᵀx + b < 0


predict the other class.


The exact class encoding depends on the implementation.



5. What Is the Margin?


The margin is the distance between the decision boundary and the closest training observations from the classes.


SVM attempts to find a boundary with a large margin under the chosen formulation.



6. Support Vectors


The training observations closest to the decision boundary are called:


Support Vectors.


These observations play an important role in defining the decision boundary.



7. Why Are They Called Support Vectors?


The support vectors constrain the position of the separating boundary.


Observations far away from the boundary may have less direct influence on the final boundary in the basic hard-margin geometric interpretation.



8. Simple Visualization


Class A:


• • •


Class B:


× × ×


A possible boundary:


• • •


-----------


× × ×


The observations closest to the boundary help determine the margin.



9. Maximum Margin Intuition


Imagine several possible boundaries can separate the classes.


SVM chooses a boundary that attempts to maximize the separation between the classes.


A larger margin can improve generalization in appropriate settings.



10. Hard Margin


If the data is perfectly linearly separable, a hard-margin formulation can require all observations to be correctly separated with a margin constraint.


However, real-world datasets often contain noise or overlapping classes.



11. Soft Margin


Soft-margin SVM allows some violations of the margin constraints.


This introduces a trade-off between:


Large Margin


and:


Classification Errors or Margin Violations.



12. The C Parameter


In scikit-learn's SVC:


C


controls the trade-off associated with margin violations.


A larger C:


Places stronger emphasis on correctly classifying training examples.


A smaller C:


Allows more violations in exchange for a stronger regularizing effect.



13. Understanding C


Small C:


More tolerance for training errors.


Potentially wider margin.


More regularization.


Large C:


Less tolerance for training errors.


Potentially narrower margin.


Less regularization.



14. Linear SVM


A linear SVM uses a linear decision boundary.


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC


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


model = SVC(
    kernel="linear",
    C=1.0
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


A value determined by the dataset split and SVM configuration.



15. Feature Scaling


Feature scaling is particularly important for SVMs when features have substantially different scales.


Suppose:


Feature 1:


0 to 1


Feature 2:


0 to 100,000.


The scale can strongly influence the geometry of the optimization and distance calculations associated with some kernels.



16. StandardScaler with SVM


Python


from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC


model = make_pipeline(
    StandardScaler(),
    SVC(
        kernel="linear",
        C=1.0
    )
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


A value determined by the fitted model.



17. Nonlinear Decision Boundaries


Not all classification problems can be separated by a straight line.


SVMs can use:


Kernel Functions


to represent nonlinear decision boundaries.



18. What Is a Kernel?


A kernel provides a way to measure relationships between observations in a transformed feature space without necessarily explicitly constructing that high-dimensional representation.


This allows SVMs to model nonlinear relationships.



19. Common Kernels


Important SVM kernels include:


Linear


Polynomial


RBF


Sigmoid


The most commonly encountered nonlinear kernel in introductory machine learning is:


RBF.


RBF stands for:


Radial Basis Function.



20. RBF Kernel


The RBF kernel is commonly written as:


K(x,z) = exp(-γ||x-z||²)


where:


γ


controls how quickly similarity decreases as distance increases.



21. Understanding Gamma


In scikit-learn:


gamma


controls the influence of individual training examples for kernels such as RBF.


Small gamma:


Broader influence.


Large gamma:


More localized influence.



22. Gamma and Model Complexity


A very large gamma can create highly localized decision regions.


This can make the model flexible and potentially overfit.


A small gamma produces smoother, broader influence.


Therefore, gamma should be selected carefully.



23. RBF SVM Example


Python


model = make_pipeline(
    StandardScaler(),
    SVC(
        kernel="rbf",
        C=1.0,
        gamma="scale"
    )
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


A value determined by the fitted model and data.



24. Probability Estimates


By default, SVC does not necessarily provide probability estimates.


If probability estimates are needed, they can be enabled using:


probability=True


Example:


model = SVC(
    kernel="rbf",
    C=1.0,
    probability=True
)



25. Prediction


Python


model.fit(
    X_train,
    y_train
)


predictions = model.predict(
    X_test
)


print(
    predictions[:10]
)


Output


The output contains predicted class labels.



26. Support Vectors in scikit-learn


For fitted SVC models, support vectors can be inspected.


Python


model = SVC(
    kernel="linear",
    C=1.0
)


model.fit(
    X_train,
    y_train
)


print(
    model.support_vectors_
)


Output


The output contains the training observations identified as support vectors.



27. Number of Support Vectors


Python


print(
    model.n_support_
)


Output


The output contains the number of support vectors associated with the classes.



28. Polynomial Kernel


A polynomial kernel can represent polynomial relationships.


Conceptually:


K(x,z) = (γxᵀz + r)^d


where:


d


is the polynomial degree.


The exact implementation contains additional parameter conventions.



29. Python Polynomial SVM


Python


model = make_pipeline(
    StandardScaler(),
    SVC(
        kernel="poly",
        degree=3,
        C=1.0
    )
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


A value determined by the selected parameters.



30. Choosing C and Gamma


For an RBF SVM, important hyperparameters include:


C


and:


gamma.


They interact.


A practical approach is to use:


Cross-Validation


to evaluate combinations.



31. Grid Search Example


Python


from sklearn.model_selection import GridSearchCV


pipeline = make_pipeline(
    StandardScaler(),
    SVC(
        kernel="rbf"
    )
)


parameter_grid = {

    "svc__C": [0.1, 1, 10, 100],

    "svc__gamma": [
        "scale",
        0.01,
        0.1,
        1
    ]
}


search = GridSearchCV(
    pipeline,
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


A combination selected using cross-validation.



32. Why Scaling Before SVM?


SVM geometry depends on the relative positions of observations in feature space.


If one feature has a much larger numerical range, it can dominate the geometry.


Standardization makes feature scales more comparable.



33. SVM and High-Dimensional Data


SVMs can work effectively in high-dimensional spaces, particularly with suitable regularization and feature representations.


They have historically been useful for:


Text Classification


Image Classification


Bioinformatics


Pattern Recognition.



34. SVM for Text Classification


Text can be represented using:


TF-IDF


which produces high-dimensional feature vectors.


A linear SVM can then classify documents.


This is a common classical machine learning pipeline.



35. Linear SVM for Text


Conceptually:


Documents


↓


TF-IDF


↓


Linear SVM


↓


Document Class



36. Classification Metrics


SVM classification can be evaluated using:


Accuracy


Precision


Recall


F1 Score


Confusion Matrix.


The appropriate metric depends on the application.



37. Advantages of SVM


Advantages include:


Effective for many classification problems.


Can model linear and nonlinear boundaries.


Works well in high-dimensional spaces.


Margin-based formulation provides useful regularization.


Kernel methods allow nonlinear modelling.



38. Limitations


Limitations include:


Can be computationally expensive for very large datasets.


Requires careful feature scaling.


Hyperparameters can be sensitive.


Kernel choice matters.


Results can be less interpretable than a simple linear model or shallow tree.



39. SVM vs Logistic Regression


Logistic Regression:


Directly models class probabilities.


Provides a probabilistic interpretation.


Uses a linear decision function.


SVM:


Focuses on maximizing the margin.


Uses support vectors.


Can use nonlinear kernels.


Does not inherently produce probabilities unless probability estimation is enabled.



40. SVM vs Decision Trees


SVM:


Geometry and margin based.


Often requires scaling.


Can use kernels.


Decision Tree:


Rule and split based.


Usually does not require scaling.


Naturally captures hierarchical feature interactions.



41. SVM vs k-NN


SVM:


Learns a decision boundary.


k-NN:


Uses nearby training observations during prediction.


SVM:


Can provide a compact decision function.


k-NN:


Stores training examples.


SVM:


Often needs scaling.


k-NN:


Strongly depends on scaling for distance-based features.



42. Experiment: C


Try:


C = 0.01


0.1


1


10


100.


Record:


Training Accuracy


Validation Accuracy.


Observe the effect of regularization strength.



43. Experiment: Gamma


For an RBF SVM, try:


gamma = 0.001


0.01


0.1


1


Compare validation performance.



44. Experiment: Kernel Comparison


Compare:


linear


rbf


poly


Record:


Accuracy


Precision


Recall


F1 Score.



45. Experiment: Feature Scaling


Train an SVM:


Without scaling


With StandardScaler


Compare performance.


Explain why scaling affects SVM geometry.



46. Common Mistakes


Mistake 1:


Using SVM without considering feature scaling.


Mistake 2:


Choosing C and gamma using the test set.


Mistake 3:


Using an unnecessarily complex kernel.


Mistake 4:


Ignoring computational cost on very large datasets.


Mistake 5:


Interpreting support vectors as the only important observations in every sense.


Mistake 6:


Assuming a high training score guarantees good generalization.



47. Practice


1. What is an SVM?


2. What is a hyperplane?


3. What is a margin?


4. What are support vectors?


5. What does C control?


6. What is a kernel?


7. What is the RBF kernel?


8. What does gamma control?


9. Why is feature scaling important?


10. How does SVM differ from Logistic Regression?



48. Quick Check


Question 1


What is the main geometric idea behind SVM?


Answer


To find a decision boundary with a large margin between classes.


Question 2


What are support vectors?


Answer


Training observations that are especially influential in defining the margin and decision boundary.


Question 3


What does C control?


Answer


The trade-off between margin violations and model complexity.


Question 4


What does gamma control in an RBF kernel?


Answer


The rate at which the influence of individual observations decreases with distance.


Question 5


Why is scaling important?


Answer


Feature scale affects the geometry used by SVM optimization and kernels.



49. Summary


Support Vector Machines are supervised learning algorithms.


They can perform classification and regression.


The classifier searches for a useful separating hyperplane.


The margin measures separation around the decision boundary.


Support vectors are observations that help define the boundary.


C controls the trade-off between margin violations and fitting the training data.


Kernels allow nonlinear decision boundaries.


RBF is a commonly used nonlinear kernel.


Gamma controls the locality of the RBF kernel.


Feature scaling is usually important.


Cross-validation can be used to tune C, gamma, and other parameters.



50. Extended Study


For a linear classifier, the decision function can be written as:


f(x) = wᵀx + b.


The separating hyperplane is:


wᵀx + b = 0.


The geometric distance from a point x to the hyperplane is proportional to:


|wᵀx + b| / ||w||.


SVM optimization attempts to control this geometry while penalizing classification or margin violations in the soft-margin formulation.



51. Hinge Loss


A common loss associated with linear SVM classification is:


L = max(0, 1 - y f(x))


where:


y


is typically encoded as:


-1 or +1.


If:


y f(x) ≥ 1


the hinge loss is zero.


If:


y f(x) < 1


the observation contributes a positive loss.



52. Regularization Perspective


A simplified SVM objective can be represented conceptually as:


Regularization Term


+


Classification Loss.


The model balances:


A simple or controlled decision boundary


with:


Good classification of training observations.



53. Kernel Trick


Suppose the original feature space cannot linearly separate the classes.


A nonlinear transformation could map observations into another feature space.


Computing that transformation explicitly may be expensive.


The kernel trick allows algorithms to work with inner-product-like relationships in the transformed space through a kernel function.


This is one of the central ideas behind kernel SVMs.



54. RBF Intuition


The RBF kernel measures similarity based on distance.


Two observations that are close together can have a large kernel value.


Observations far apart can have a much smaller kernel value.


Gamma determines how quickly that similarity decreases.



55. Reflection


Consider a classification problem.


Ask:


Are the classes approximately linearly separable?


Would a nonlinear boundary be useful?


Do the features need scaling?


What should C be?


Would an RBF kernel be appropriate?


What should gamma be?


How large is the dataset?


Would SVM training be computationally practical?


How should the model be evaluated?


Answering these questions helps determine whether an SVM is appropriate.

`

};

export default lesson16;