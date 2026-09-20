const lesson10 = {

  id: "lesson10",

  title: "Ridge and Lasso Regression",

  content: `

Lesson 10

Ridge and Lasso Regression


Linear regression provides a simple and powerful baseline for numerical prediction.

However, ordinary linear regression can encounter problems when:


There are many features.


Features are strongly correlated.


The model is flexible relative to the available data.


Coefficients become unnecessarily large.


Regularization provides a way to control model complexity.


Two important regularized linear regression methods are:


Ridge Regression


and:


Lasso Regression



1. Why Regularization?


Suppose a linear regression model contains many features.


The model attempts to minimize prediction error.


If the training data is limited or noisy, the model may learn large coefficients that fit training-specific patterns.


This can hurt generalization.


Regularization modifies the objective so that the model is also encouraged to keep its coefficients controlled.



2. Basic Idea


Ordinary Linear Regression:


Prediction Loss


Ridge:


Prediction Loss + L2 Penalty


Lasso:


Prediction Loss + L1 Penalty



3. Ordinary Least Squares


The ordinary least-squares objective is:


Σ(yᵢ - ŷᵢ)²


The model attempts to minimize this quantity.


There is no explicit penalty on coefficient magnitude.



4. Ridge Regression


Ridge regression adds an L2 penalty.


The objective can be written as:


Σ(yᵢ - ŷᵢ)² + αΣwⱼ²


where:


yᵢ = Actual target


ŷᵢ = Prediction


wⱼ = Model coefficient


α = Regularization strength



5. Understanding the Ridge Penalty


The term:


Σwⱼ²


penalizes large coefficient values.


If coefficients become very large, the penalty increases.


The model therefore balances:


Fit the training data


and:


Keep coefficients controlled.



6. Effect of Alpha


The parameter:


α


controls regularization strength.


Small α:


Weak regularization.


Large α:


Strong regularization.


Increasing α generally pushes coefficients toward zero.



7. Important Point About Ridge


Ridge regression generally does not force coefficients exactly to zero.


Instead, it shrinks them toward zero.


Therefore, most features can remain in the model while their influence is reduced.



8. Lasso Regression


Lasso regression uses an L1 penalty.


The objective can be written as:


Σ(yᵢ - ŷᵢ)² + αΣ|wⱼ|


The penalty is based on the absolute values of the coefficients.



9. Effect of Lasso


One important property of Lasso is that some coefficients can become exactly:


0


This means Lasso can perform a form of feature selection.



10. Ridge vs Lasso


Ridge:


Uses L2 penalty.


Shrinks coefficients.


Usually retains all features.


Useful when many features contribute small amounts.


Lasso:


Uses L1 penalty.


Can make coefficients exactly zero.


Can perform feature selection.


Useful when only some features may be strongly informative.



11. Mathematical Comparison


Ridge:


Loss + αΣwⱼ²


Lasso:


Loss + αΣ|wⱼ|


The difference between:


wⱼ²


and:


|wⱼ|


produces different regularization behaviour.



12. Why Large Coefficients Can Be a Problem


Suppose a model learns:


w₁ = 5000


w₂ = -4500


w₃ = 20


A small change in some features can produce a large change in prediction.


Large coefficients can also indicate that the model is using strong parameter values to fit the available data.


Regularization can discourage unnecessarily large coefficients.



13. Multicollinearity


Multicollinearity occurs when features contain strongly related information.


For example:


House Area


and:


Number of Rooms


may be correlated.


Ordinary linear regression can produce unstable coefficient estimates when predictors are highly correlated.



14. Ridge and Correlated Features


Ridge regression can help stabilize coefficients in the presence of correlated predictors.


Instead of relying on one feature with a very large coefficient, Ridge can distribute influence across correlated features.



15. Lasso and Correlated Features


Lasso can select one feature while reducing another correlated feature's coefficient toward zero.


The exact selection can depend on the data and optimization.


Therefore, a zero coefficient should not automatically be interpreted as proof that a feature has no relationship with the target.



16. Feature Scaling


Regularization depends on coefficient magnitude.


Therefore, feature scaling is important when features use different units or ranges.


For example:


Age:


0 to 100


Income:


10,000 to 1,000,000


Without scaling, coefficient magnitudes are not directly comparable in the same way.



17. Standardization


A common preprocessing step is:


z = (x - μ) / σ


This gives features comparable scales.


When using Ridge or Lasso, the scaler should be fitted only on the training data.



18. Python Example: Ridge Regression


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Ridge
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import make_pipeline


data = load_diabetes()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)


model = make_pipeline(
    StandardScaler(),
    Ridge(alpha=1.0)
)


model.fit(
    X_train,
    y_train
)


score = model.score(
    X_test,
    y_test
)


print("Test R²:", score)


Output


Test R²:


A numerical value determined by the fitted model and test split.



19. Why Use a Pipeline?


The pipeline combines:


StandardScaler


and:


Ridge


into one workflow.


The scaler is fitted using the training data during model fitting.


The same fitted transformation is then applied during prediction.


This helps reduce preprocessing mistakes and makes the workflow easier to reproduce.



20. Ridge with Different Alpha Values


Python


from sklearn.linear_model import Ridge


for alpha in [0.01, 0.1, 1, 10, 100]:

    model = make_pipeline(
        StandardScaler(),
        Ridge(alpha=alpha)
    )

    model.fit(
        X_train,
        y_train
    )

    score = model.score(
        X_test,
        y_test
    )

    print(
        "Alpha:",
        alpha,
        "R²:",
        score
    )


Output


The exact R² values depend on the dataset split and software environment.



21. Interpreting Alpha


Suppose:


alpha = 0.01


The regularization is relatively weak.


Suppose:


alpha = 100


The regularization is much stronger.


The best value should normally be selected using validation or cross-validation.



22. Python Example: Lasso


Python


from sklearn.linear_model import Lasso


model = make_pipeline(
    StandardScaler(),
    Lasso(alpha=0.01)
)


model.fit(
    X_train,
    y_train
)


score = model.score(
    X_test,
    y_test
)


print("Test R²:", score)


Output


Test R²:


A numerical value determined by the fitted model and data.



23. Inspecting Lasso Coefficients


To inspect coefficients when using a pipeline, we can access the fitted estimator.


Python


scaler = StandardScaler()


X_train_scaled = scaler.fit_transform(
    X_train
)


X_test_scaled = scaler.transform(
    X_test
)


model = Lasso(alpha=0.01)


model.fit(
    X_train_scaled,
    y_train
)


print("Coefficients:")
print(model.coef_)


Output


The output contains one coefficient for each feature.



24. Identifying Zero Coefficients


Suppose the coefficients are:


[12.5, 0.0, -4.2, 0.0, 8.1]


The second and fourth coefficients are:


0


Lasso has therefore excluded those features from the linear prediction in this fitted model.



25. Ridge Coefficients


Ridge generally shrinks coefficients but does not usually make them exactly zero.


For example:


[11.4, 1.8, -3.7, 0.9, 7.2]


All features remain present, but their coefficients are controlled.



26. Regularization and Overfitting


Regularization can reduce overfitting by limiting the effective flexibility of a linear model.


Without regularization:


The model focuses primarily on fitting training data.


With regularization:


The model balances fitting and coefficient magnitude.



27. Bias Introduced by Regularization


Regularization is not free.


Strong regularization can increase bias.


If α becomes too large, the model may become too constrained and underfit.


Therefore, regularization strength must be selected carefully.



28. Bias-Variance Perspective


Weak regularization:


Lower bias


Potentially higher variance


Strong regularization:


Higher bias


Potentially lower variance


The objective is to find a useful balance.



29. Choosing Alpha with Cross-Validation


Python


from sklearn.linear_model import Ridge
from sklearn.model_selection import cross_val_score


alphas = [0.001, 0.01, 0.1, 1, 10, 100]


for alpha in alphas:

    model = make_pipeline(
        StandardScaler(),
        Ridge(alpha=alpha)
    )

    scores = cross_val_score(
        model,
        X,
        y,
        cv=5,
        scoring="r2"
    )

    print(
        "Alpha:",
        alpha,
        "Mean CV R²:",
        scores.mean()
    )


Output


The exact values depend on the dataset and cross-validation configuration.



30. Choosing Lasso Alpha


The same idea can be used for Lasso.


Python


from sklearn.linear_model import Lasso


for alpha in [0.0001, 0.001, 0.01, 0.1, 1]:

    model = make_pipeline(
        StandardScaler(),
        Lasso(alpha=alpha)
    )

    scores = cross_val_score(
        model,
        X,
        y,
        cv=5,
        scoring="r2"
    )

    print(
        "Alpha:",
        alpha,
        "Mean CV R²:",
        scores.mean()
    )


Output


The exact values depend on the data and environment.



31. Why Cross-Validation?


The test set should ideally be reserved for final evaluation.


Cross-validation can be used to select:


Regularization strength


Model type


Feature-processing choices


Other hyperparameters


After selecting the approach, the final model can be evaluated on the held-out test set.



32. Ridge vs Lasso in Practice


Use Ridge when:


Many features may contribute.


Features are correlated.


You want to shrink coefficients without aggressively removing features.


Use Lasso when:


Feature selection is useful.


You expect some features to be less useful.


A sparse model is desirable.



33. Elastic Net


There is another method:


Elastic Net.


It combines:


L1 regularization


and:


L2 regularization.


Conceptually:


Loss + α₁Σ|wⱼ| + α₂Σwⱼ²


This can provide a compromise between Ridge and Lasso behaviour.



34. Python Example: Elastic Net


Python


from sklearn.linear_model import ElasticNet


model = make_pipeline(
    StandardScaler(),
    ElasticNet(
        alpha=0.01,
        l1_ratio=0.5
    )
)


model.fit(
    X_train,
    y_train
)


score = model.score(
    X_test,
    y_test
)


print("Test R²:", score)


Output


Test R²:


A numerical value determined by the fitted model and data.



35. Understanding l1_ratio


In Elastic Net:


l1_ratio = 1


corresponds to Lasso-like L1 behaviour.


l1_ratio = 0


corresponds to Ridge-like L2 behaviour.


Intermediate values combine both penalties.



36. Regularization and High-Dimensional Data


Suppose:


Number of samples = 500


Number of features = 5,000


Ordinary linear regression may have difficulty because there are many possible coefficients relative to the amount of data.


Regularization can constrain the solution.


Lasso can also produce sparse models by setting some coefficients to zero.



37. Regularization and Feature Selection


Lasso can be useful when the dataset contains many features and only some are expected to be informative.


For example:


Feature 1 → useful


Feature 2 → useful


Feature 3 → weak


Feature 4 → irrelevant


Feature 5 → useful


Lasso may reduce some coefficients to zero.



38. Regularization and Interpretability


A model with fewer nonzero coefficients can sometimes be easier to inspect.


For example:


Instead of:


100 active features


a Lasso model might use:


15 nonzero coefficients.


This can make the resulting model more compact.


However, feature selection should still be interpreted carefully, especially when features are correlated.



39. Regularization and Feature Scaling


Suppose one feature is measured in:


meters


and another in:


millimeters.


The coefficient magnitudes can differ simply because the units differ.


Scaling makes regularization behave more consistently across features.



40. Python Example: Complete Ridge Workflow


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import Ridge
from sklearn.metrics import mean_absolute_error
from sklearn.metrics import r2_score


data = load_diabetes()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)


model = make_pipeline(
    StandardScaler(),
    Ridge(alpha=1.0)
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


r2 = r2_score(
    y_test,
    predictions
)


print("MAE:", mae)


print("R²:", r2)


Output


MAE:


A numerical value determined by the model and test split.


R²:


A numerical value determined by the model and test split.



41. Comparing Linear, Ridge, and Lasso


A useful experiment is to compare:


LinearRegression


Ridge


Lasso


Use the same train/test split.


Measure:


MAE


RMSE


R²


Compare the results.



42. Python Comparison


Python


from sklearn.linear_model import LinearRegression
from sklearn.linear_model import Ridge
from sklearn.linear_model import Lasso
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler


models = {

    "Linear Regression":
        LinearRegression(),

    "Ridge":
        make_pipeline(
            StandardScaler(),
            Ridge(alpha=1.0)
        ),

    "Lasso":
        make_pipeline(
            StandardScaler(),
            Lasso(alpha=0.01)
        )
}


for name, model in models.items():

    model.fit(
        X_train,
        y_train
    )

    score = model.score(
        X_test,
        y_test
    )

    print(
        name,
        "R²:",
        score
    )


Output


The exact results depend on the data split and chosen hyperparameters.



43. Why the Best Method Can Change


There is no universal winner among:


Linear Regression


Ridge


Lasso.


The appropriate method depends on:


Number of features


Dataset size


Feature correlation


Noise


Regularization strength


Evaluation metric


Application requirements.



44. Experiment


Use the Diabetes dataset.


Train:


Linear Regression


Ridge with:


alpha = 0.01


alpha = 0.1


alpha = 1


alpha = 10


alpha = 100


Lasso with several alpha values.


Record:


MAE


RMSE


R²


Compare the results.



45. Experiment: Coefficient Comparison


Train:


Linear Regression


Ridge


Lasso


Print their coefficients.


Observe:


Which coefficients shrink?


Which coefficients become zero?


How does increasing alpha change the coefficients?



46. Experiment: Feature Scaling


Train Ridge and Lasso:


Without scaling


With StandardScaler


Compare the results.


Explain why scaling is important for regularization.



47. Common Mistakes


Mistake 1:


Using Ridge or Lasso without considering feature scaling.


Mistake 2:


Choosing alpha based on the test set.


Mistake 3:


Assuming stronger regularization is always better.


Mistake 4:


Assuming Lasso zeroing a coefficient proves the feature is completely irrelevant.


Mistake 5:


Ignoring correlations between features.


Mistake 6:


Comparing coefficient magnitudes without considering feature scales.



48. Practice


1. What is regularization?


2. What penalty does Ridge use?


3. What penalty does Lasso use?


4. What does alpha control?


5. Does Ridge normally make coefficients exactly zero?


6. Can Lasso make coefficients zero?


7. Why is scaling important?


8. What is multicollinearity?


9. How can regularization reduce overfitting?


10. What is Elastic Net?



49. Quick Check


Question 1


What is Ridge regression?


Answer


Ridge regression is linear regression with an L2 regularization penalty.


Question 2


What is Lasso regression?


Answer


Lasso regression is linear regression with an L1 regularization penalty.


Question 3


What does alpha control?


Answer


Alpha controls the strength of regularization.


Question 4


Can Lasso produce zero coefficients?


Answer


Yes.


Lasso can shrink some coefficients exactly to zero.


Question 5


Why should features often be scaled?


Answer


Because regularization depends on coefficient magnitude, and feature scales influence those magnitudes.



50. Summary


Ridge and Lasso are regularized linear regression methods.


Ridge uses an L2 penalty.


Lasso uses an L1 penalty.


Alpha controls regularization strength.


Ridge generally shrinks coefficients toward zero.


Lasso can make some coefficients exactly zero.


Lasso can therefore perform feature selection.


Regularization can reduce overfitting.


Strong regularization can also cause underfitting.


Feature scaling is important for regularized models.


Cross-validation can help select alpha.


Elastic Net combines L1 and L2 regularization.



51. Extended Study


Ordinary least squares minimizes:


RSS = Σ(yᵢ - xᵢᵀw)²


Ridge modifies the objective to:


RSS + α||w||₂²


Lasso modifies the objective to:


RSS + α||w||₁


where:


||w||₂² = Σwⱼ²


and:


||w||₁ = Σ|wⱼ|


The different geometric properties of these penalties lead to different coefficient behaviour.



52. Geometric Intuition


Ridge constrains coefficients according to an L2 norm.


Lasso constrains coefficients according to an L1 norm.


The L1 constraint has corners along coordinate axes.


These corners make solutions with some coefficients equal to zero more likely.


The L2 constraint is smoother, so Ridge generally shrinks coefficients without forcing many exact zeros.



53. Regularization Path


As alpha changes, the learned coefficients can change.


For Lasso:


Increasing alpha


can cause more coefficients to become zero.


For Ridge:


Increasing alpha


generally shrinks coefficients more strongly toward zero.


Plotting coefficients against alpha can provide useful insight into model behaviour.



54. Regularization and Generalization


Regularization does not guarantee better test performance.


It introduces a bias in exchange for potentially reducing variance.


If the original model is already appropriately regularized, adding too much regularization can reduce performance.


Therefore:


Regularization Strength


should be treated as a hyperparameter.



55. Reflection


Consider a regression problem with many features.


Ask:


Are the features correlated?


Could the model overfit?


Would coefficient shrinkage help?


Would feature selection be useful?


Should Ridge or Lasso be tested?


What alpha values should be evaluated?


Should Elastic Net also be considered?


How will cross-validation be used?


Which metric will be used for final evaluation?


Understanding these questions helps turn regularization from a mathematical concept into a practical machine learning technique.

`

};

export default lesson10;