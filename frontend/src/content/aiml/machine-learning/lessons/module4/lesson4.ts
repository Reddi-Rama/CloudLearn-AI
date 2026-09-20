const lesson4 = {

  id: "lesson4",

  title: "Polynomial Features",

  content: `

Lesson 04

Polynomial Features


1. Introduction


Machine learning problems are not always linear.


Sometimes the relationship between an input feature and the target changes in a curved or nonlinear way.


For example:


y = x²


cannot be represented by a simple straight-line relationship:


y = β₀ + β₁x.


Polynomial features provide a way to represent such nonlinear relationships using additional features.



2. What Is a Polynomial Feature?


A polynomial feature is created by raising an existing numerical feature to a power.


For a feature:


x,


we can create:


x²


x³


x⁴.


These become additional input variables.



3. Simple Example


Suppose:


x = 2.


Then:


x² = 4.


x³ = 8.


Therefore, one original feature can produce several derived features.



4. Why Create Polynomial Features?


Polynomial features can help models represent:


Curved relationships.


Nonlinear trends.


Interactions between variables.



5. Linear Model with Polynomial Features


Consider:


y = β₀ + β₁x + β₂x².


The model is still linear in its parameters:


β₀, β₁, β₂.


However, the relationship between:


x


and:


y


can be nonlinear because of:


x².



6. Important Idea


A model can be linear in its coefficients while using nonlinear transformations of the input.


This is why polynomial regression can be implemented using linear regression.



7. Example


Suppose:


y = 2 + 3x + 0.5x².


For:


x = 4,


we calculate:


y = 2 + 3(4) + 0.5(16).


Therefore:


y = 2 + 12 + 8.


y = 22.



8. Degree


The highest exponent used is called the:


Polynomial degree.


Degree 1:


x.


Degree 2:


x, x².


Degree 3:


x, x², x³.



9. Degree 1


A degree-1 representation contains:


x.


A linear model can represent:


y = β₀ + β₁x.



10. Degree 2


A degree-2 representation contains:


x


x².


The model can represent:


y = β₀ + β₁x + β₂x².



11. Degree 3


A degree-3 representation contains:


x


x²


x³.


The model can represent:


y = β₀ + β₁x + β₂x² + β₃x³.



12. PolynomialFeatures in scikit-learn


scikit-learn provides:


PolynomialFeatures.


It automatically creates polynomial and interaction features.



13. Python


from sklearn.preprocessing import PolynomialFeatures


poly = PolynomialFeatures(
    degree=2,
    include_bias=False
)


X_poly = poly.fit_transform(
    X
)



14. Example Dataset


Python


import numpy as np


X = np.array([

    [1],

    [2],

    [3],

    [4]

])


poly = PolynomialFeatures(
    degree=2,
    include_bias=False
)


X_poly = poly.fit_transform(
    X
)


print(
    X_poly
)



15. Output


The transformed matrix contains columns corresponding to:


x


x².


For example:


x = 3


produces:


3


9.



16. Feature Names


Python


print(
    poly.get_feature_names_out(
        ["x"]
    )
)



17. Expected Feature Names


The generated names will represent:


x


x².


This is useful when inspecting transformed datasets.



18. Multiple Features


Suppose we have:


x₁


and:


x₂.


For degree 2, polynomial expansion can include:


x₁


x₂


x₁²


x₁x₂


x₂².



19. Interaction Term


The term:


x₁x₂


is called an:


Interaction feature.


It represents a relationship involving both variables.



20. Mathematical Expansion


For two variables:


(x₁ + x₂)²


=


x₁² + 2x₁x₂ + x₂².


Polynomial feature generation produces terms that allow models to represent these types of relationships.



21. Python with Two Features


Python


X = np.array([

    [1, 2],

    [2, 3],

    [3, 4]

])


poly = PolynomialFeatures(
    degree=2,
    include_bias=False
)


X_poly = poly.fit_transform(
    X
)


print(
    X_poly
)



22. Generated Representation


The transformed features include:


x₁


x₂


x₁²


x₁x₂


x₂².



23. Interaction Only


Sometimes we want interaction terms without powers.


scikit-learn supports:


interaction_only=True.


Python


poly = PolynomialFeatures(

    degree=2,

    interaction_only=True,

    include_bias=False

)



24. Why Interaction Features Matter


Suppose the effect of:


Advertising


depends on:


Season.


The effect may not be fully represented by the two variables separately.


An interaction:


Advertising × Season


can represent their combined effect.



25. Polynomial Regression


Polynomial regression can be constructed using:


PolynomialFeatures


followed by:


LinearRegression.



26. Python


from sklearn.linear_model import LinearRegression


from sklearn.pipeline import Pipeline


model = Pipeline([

    (
        "poly",
        PolynomialFeatures(
            degree=2,
            include_bias=False
        )
    ),

    (
        "regression",
        LinearRegression()
    )

])



27. Training


Python


model.fit(
    X,
    y
)



28. Prediction


Python


predictions = model.predict(
    X
)


print(
    predictions
)



29. Why Use a Pipeline?


The pipeline ensures that:


Polynomial transformation


and:


Model training


are treated as one workflow.



30. Train/Test Split


Polynomial features should be generated consistently for training and test data.


A pipeline helps ensure that the same transformation is applied.



31. Example


Python


from sklearn.model_selection import train_test_split


X_train, X_test, y_train, y_test = (
    train_test_split(
        X,
        y,
        test_size=0.2,
        random_state=42
    )
)


model.fit(
    X_train,
    y_train
)


predictions = model.predict(
    X_test
)



32. Degree and Complexity


Increasing the polynomial degree creates more features.


Degree 1:


Few features.


Degree 2:


More features.


Degree 3:


Even more features.


Higher degrees can create very large feature spaces.



33. Feature Growth


With:


p


original features,


the number of polynomial combinations can grow rapidly as degree increases.


This is one reason high-degree polynomial models can become computationally expensive.



34. Overfitting


A high-degree polynomial can fit training data extremely closely.


However, it may perform poorly on unseen data.


This is:


Overfitting.



35. Example


Suppose we have only a few observations.


A very high-degree polynomial may pass through almost every training point.


The resulting curve may become unnecessarily complicated.



36. Underfitting


A polynomial degree that is too low may fail to capture important curvature.


For example:


degree = 1


may be insufficient when the true relationship is strongly curved.



37. Model Complexity


Polynomial degree controls model flexibility.


Low degree:


Simpler representation.


High degree:


More flexible representation.



38. Bias and Variance


Increasing polynomial degree can:


Reduce bias.


Increase variance.


Therefore, the degree should be selected using validation rather than simply choosing the largest value.



39. Validation


Possible degrees:


1


2


3


4.


Train and evaluate each using appropriate validation.



40. Python


from sklearn.model_selection import cross_val_score


for degree in [1, 2, 3, 4]:

    model = Pipeline([

        (
            "poly",
            PolynomialFeatures(
                degree=degree,
                include_bias=False
            )
        ),

        (
            "regression",
            LinearRegression()
        )

    ])

    scores = cross_val_score(
        model,
        X,
        y,
        cv=5,
        scoring="neg_mean_squared_error"
    )

    print(
        degree,
        scores.mean()
    )



41. Why Cross-Validation?


Cross-validation provides a more reliable estimate of how a polynomial degree may generalize to unseen data.



42. Regularization


Polynomial features can create many correlated or high-magnitude variables.


Regularized models can help control model complexity.


Common choices include:


Ridge.


Lasso.



43. Polynomial Features with Ridge


Python


from sklearn.linear_model import Ridge


model = Pipeline([

    (
        "poly",
        PolynomialFeatures(
            degree=3,
            include_bias=False
        )
    ),

    (
        "ridge",
        Ridge(alpha=1.0)
    )

])



44. Why Ridge?


Ridge adds a penalty based on the squared coefficients.


Conceptually:


Loss


=


Prediction Error


+


α Σβ².



45. Polynomial Features with Lasso


Python


from sklearn.linear_model import Lasso


model = Pipeline([

    (
        "poly",
        PolynomialFeatures(
            degree=3,
            include_bias=False
        )
    ),

    (
        "lasso",
        Lasso(alpha=0.01)
    )

])



46. Why Lasso?


Lasso uses an absolute-value penalty:


Loss


=


Prediction Error


+


α Σ|β|.


This can encourage some coefficients toward zero.



47. Scaling Polynomial Features


Polynomial expansion can produce features with very different magnitudes.


For example:


x


x²


x³.


If x is large, higher powers can become much larger.


Scaling can therefore be important when using regularized models.



48. Polynomial Pipeline with Scaling


Python


from sklearn.preprocessing import StandardScaler


model = Pipeline([

    (
        "poly",
        PolynomialFeatures(
            degree=2,
            include_bias=False
        )
    ),

    (
        "scaler",
        StandardScaler()
    ),

    (
        "ridge",
        Ridge(alpha=1.0)
    )

])



49. Important Order


A common workflow is:


Polynomial Features


→


Scaling


→


Regularized Model.



50. Polynomial Features and Classification


Polynomial features are not limited to regression.


They can also be used before a classification model.


For example:


PolynomialFeatures


→


StandardScaler


→


LogisticRegression.



51. Python


from sklearn.linear_model import LogisticRegression


classifier = Pipeline([

    (
        "poly",
        PolynomialFeatures(
            degree=2,
            include_bias=False
        )
    ),

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        LogisticRegression(
            max_iter=2000
        )
    )

])



52. When Polynomial Features Help


They can help when:


The relationship is nonlinear.


The dataset is not extremely high-dimensional.


Domain knowledge suggests interactions or curvature.



53. When They Can Be Problematic


They can be problematic when:


There are many original features.


Degree is too high.


The dataset is small.


The resulting feature space becomes huge.



54. Feature Explosion


Suppose there are:


100 original features.


Generating polynomial features of degree 2 can create thousands of terms.


This can:


Increase memory usage.


Increase training time.


Increase overfitting risk.



55. Feature Explosion Example


The original dataset might have:


100 columns.


After polynomial expansion:


The number of generated columns can become much larger than 100.



56. Practical Strategy


Start with:


degree = 2.


Evaluate performance.


Use validation.


Only increase complexity when there is evidence that it helps.



57. Domain Knowledge


Polynomial features should not be created blindly.


For example:


Temperature


and:


Time.


A domain expert may know that their interaction has physical meaning.


That can justify creating:


Temperature × Time.



58. Polynomial Feature Interpretation


A coefficient associated with:


x²


describes the contribution of the squared feature while all other model terms are considered according to the fitted model.


Interpretation becomes more complicated as polynomial degree increases.



59. Experiment


Generate synthetic data with:


y = 3x² + 2x + noise.


Train:


Linear regression with degree 1.


Polynomial regression with degree 2.



60. Expected Observation


The degree-2 model should have the representation needed to capture the quadratic relationship more directly.



61. Experiment 2


Compare:


Degree 1.


Degree 2.


Degree 3.


Degree 5.


Degree 10.


Evaluate using cross-validation.



62. Experiment 3


Compare:


Polynomial + LinearRegression.


Polynomial + Ridge.


Polynomial + Lasso.


Observe how regularization changes the behavior of complex feature representations.



63. Common Mistakes


Mistake 1:


Using a very high polynomial degree without validation.


Mistake 2:


Ignoring feature explosion.


Mistake 3:


Forgetting scaling when regularization is used.


Mistake 4:


Creating polynomial features before splitting data manually in a way that leaks information.


Mistake 5:


Assuming more polynomial terms always improve performance.



64. Practice


1. What is a polynomial feature?


2. What is polynomial degree?


3. What does degree 2 generate for one feature?


4. What is an interaction term?


5. Why can high-degree polynomials overfit?


6. Why can scaling be useful after polynomial expansion?


7. Why can Ridge help with polynomial features?



65. Quick Check


Question 1


What is x²?


Answer


A second-degree polynomial feature derived from x.


Question 2


What does PolynomialFeatures do?


Answer


It generates polynomial and, depending on configuration, interaction features.


Question 3


Why can high-degree polynomial models overfit?


Answer


They can become highly flexible and fit noise in the training data.


Question 4


Why can regularization help?


Answer


It penalizes large or complex model coefficients and can control model complexity.



66. Summary


Polynomial features extend the representation of numerical data.


They can represent:


Powers


Interactions


Nonlinear relationships.


scikit-learn provides:


PolynomialFeatures.


Polynomial features can be combined with:


LinearRegression


Ridge


Lasso


LogisticRegression.


The polynomial degree should be selected carefully because higher degrees increase model complexity and can cause overfitting.



67. Extended Study


Polynomial expansion can be viewed as a feature mapping:


φ(x)


=


[x, x², x³, ...].


The model then operates in this transformed feature space.


This allows a linear model to represent nonlinear relationships in the original input space.



68. Reflection


Before using polynomial features, ask:


Is the relationship likely to be nonlinear?


How many original features are present?


What degree is reasonable?


Could the feature space become too large?


Should regularization be used?


Have I validated the chosen degree?


Will the transformation be identical during prediction?

`

};

export default lesson4;