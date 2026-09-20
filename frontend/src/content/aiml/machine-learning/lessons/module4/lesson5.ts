const lesson5 = {

  id: "lesson5",

  title: "Interaction Features",

  content: `

Lesson 05

Interaction Features


1. Introduction


Sometimes the effect of one feature depends on another feature.


In such situations, treating every feature independently may not adequately represent the relationship.


Interaction features allow us to explicitly represent combinations of variables.



2. What Is an Interaction Feature?


An interaction feature is created by combining two or more existing features.


For two features:


x₁


and:


x₂,


a simple interaction is:


x₁ × x₂.



3. Simple Example


Suppose:


Advertising Budget


and:


Season.


The effect of advertising may depend on the season.


Instead of only using:


Advertising


and:


Season,


we can create an interaction representing their combined effect.



4. Mathematical Representation


A model without interaction may be:


ŷ = β₀ + β₁x₁ + β₂x₂.


With an interaction:


ŷ = β₀ + β₁x₁ + β₂x₂ + β₃x₁x₂.



5. Meaning of β₃


The coefficient:


β₃


captures the additional contribution associated with the interaction between:


x₁


and:


x₂.



6. Why Interactions Matter


Real-world effects are often conditional.


Examples:


Advertising × Season.


Price × Demand.


Experience × Education.


Temperature × Humidity.


Age × Income.



7. Example


Suppose a company's sales depend on:


Advertising.


Holiday Season.


Advertising may have a stronger effect during holidays.


An interaction feature can represent:


Advertising × Holiday.



8. Numerical Example


Suppose:


Advertising = 10.


Holiday = 1.


Then:


Interaction = 10 × 1


= 10.


If:


Holiday = 0,


the interaction becomes:


10 × 0 = 0.



9. Binary Interaction


Interactions become particularly intuitive when one variable is binary.


For example:


premium_customer:


0 or 1.


Then:


income × premium_customer


can represent income specifically for premium customers.



10. Python


df["income_premium"] = (

    df["income"]

    *

    df["premium_customer"]

)



11. Interpretation


If:


premium_customer = 0,


the interaction becomes:


0.


If:


premium_customer = 1,


the interaction equals:


income.



12. Interaction vs Addition


Consider:


x₁ + x₂.


This assumes the variables contribute separately through their own coefficients.


An interaction:


x₁x₂


allows the effect of one variable to depend on the value of the other.



13. Example


Suppose:


Study Hours


and:


Attendance.


A student's performance may depend on both.


The effect of study time may differ depending on attendance.


An interaction can represent this relationship.



14. Interaction in Linear Regression


Without interaction:


y = β₀ + β₁x₁ + β₂x₂.


With interaction:


y = β₀ + β₁x₁ + β₂x₂ + β₃x₁x₂.



15. Interpretation of Marginal Effect


For:


y = β₀ + β₁x₁ + β₂x₂ + β₃x₁x₂,


the effect of x₁ depends on x₂.


Conceptually:


Effect of x₁


=


β₁ + β₃x₂.



16. Why This Is Important


The relationship is no longer fixed.


When x₂ changes, the effect associated with x₁ can change.



17. Example


Suppose:


β₁ = 2.


β₃ = 0.5.


If:


x₂ = 2,


then the effect associated with x₁ is:


2 + (0.5 × 2)


= 3.



18. Interaction Features in scikit-learn


PolynomialFeatures can generate interaction terms.



19. Python


from sklearn.preprocessing import PolynomialFeatures


poly = PolynomialFeatures(

    degree=2,

    interaction_only=True,

    include_bias=False

)


X_interactions = (
    poly.fit_transform(X)
)



20. What interaction_only Means


With:


interaction_only=True,


the transformer focuses on interaction terms rather than generating powers such as:


x₁².


This is useful when the goal is to model combinations without squared terms.



21. Example with Two Features


Suppose:


X contains:


age


income.


The interaction feature is:


age × income.



22. Feature Names


Python


print(
    poly.get_feature_names_out(
        ["age", "income"]
    )
)



23. Expected Concept


The generated representation includes the original variables and their interaction term depending on the transformer configuration.



24. Manual Interaction


Interaction features can also be created directly with pandas.


Python


df["age_income"] = (

    df["age"]

    *

    df["income"]

)



25. Multiple Interactions


Suppose we have:


x₁


x₂


x₃.


Possible pairwise interactions include:


x₁x₂


x₁x₃


x₂x₃.



26. Interaction Explosion


The number of possible interactions increases as the number of features increases.


With many original features, generating every possible interaction can create a very large feature set.



27. Why Interaction Explosion Matters


Too many interactions can:


Increase memory usage.


Increase training time.


Increase overfitting risk.


Make interpretation difficult.



28. Selective Interactions


Instead of generating every possible interaction, domain knowledge can identify combinations that are likely to matter.



29. Domain Example


For an online store:


Price × Discount.


This may be meaningful because the effect of discount depends on the product price.



30. Another Example


For networking:


Packet Rate × Packet Size.


This can represent an approximate relationship related to traffic volume.



31. Interaction with Categorical Variables


Interactions can also involve categorical variables after appropriate encoding.


For example:


Product Category


and:


Season.



32. One-Hot Representation


Suppose category:


Electronics


is represented as:


1


for an observation.


An interaction with:


Holiday


can create a feature specific to electronics during holidays.



33. Categorical Interaction Example


Possible conceptual features:


Electronics × Holiday.


Clothing × Holiday.


Food × Holiday.



34. Why This Can Help


Different categories may respond differently to another variable.


Interactions allow a model to represent these differences explicitly.



35. Interaction and One-Hot Encoding


A common workflow can be:


Categorical Encoding


→


Interaction Creation


→


Scaling if required


→


Model.



36. Interaction Features and Tree Models


Tree-based models can often learn interactions through successive splits.


For example:


First split:


Season.


Second split:


Advertising.


This can effectively represent conditional relationships.


Therefore, explicit interaction features may be less necessary for some tree models.



37. Interaction Features and Linear Models


Linear models cannot automatically multiply features together.


If the true relationship includes:


x₁x₂,


the interaction feature may need to be supplied explicitly.



38. Interaction Features and Neural Networks


Neural networks can learn complex nonlinear combinations internally.


Explicit interaction features may still be useful when:


The dataset is small.


Domain knowledge is strong.


A simpler model is desired.



39. Interaction and Scaling


If interaction terms contain large numerical values, scaling can become important for models sensitive to feature magnitude.



40. Example


Suppose:


Income = 500,000.


Age = 50.


Then:


Income × Age


= 25,000,000.


This feature has a much larger numerical scale than either original variable.



41. Scaling Workflow


For a linear model:


Create interactions


→


Scale features


→


Train model.



42. Ridge with Interactions


Python


from sklearn.pipeline import Pipeline


from sklearn.preprocessing import (
    PolynomialFeatures,
    StandardScaler
)


from sklearn.linear_model import Ridge


model = Pipeline([

    (
        "interaction",
        PolynomialFeatures(
            degree=2,
            interaction_only=True,
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



43. Why Ridge?


Interaction expansion can create many features.


Ridge regularization can help control their coefficients.



44. Interaction and Multicollinearity


Interaction features can be correlated with their original variables.


This can make coefficient interpretation more difficult.


Regularization can sometimes help stabilize the model.



45. Centering Before Interaction


In some statistical modeling situations, centering variables before creating interactions can make coefficient interpretation easier.


For example:


x₁_centered = x₁ - mean(x₁).


Then:


x₁_centered × x₂_centered.



46. Important Caution


Centering does not automatically make an interaction feature useful.


It is primarily a representation and interpretation choice.



47. Interaction Feature Example


Suppose a dataset contains:


experience


education_years.


Create:


experience × education_years.



48. Python


df["experience_education"] = (

    df["experience"]

    *

    df["education_years"]

)



49. Model Experiment


Train a linear model:


Without interaction.


With interaction.


Compare validation performance.



50. Expected Interpretation


If the interaction improves validation performance consistently, it may indicate that the combined effect contains useful information for the task.



51. Experiment: Marketing


Features:


advertising


holiday.


Create:


advertising × holiday.


Train:


Linear Regression.


Compare performance.



52. Experiment: Customer Data


Features:


income


premium_member.


Create:


income × premium_member.


Compare a classification model:


Without interaction.


With interaction.



53. Experiment: PolynomialFeatures


Use:


interaction_only=True.


Compare with:


interaction_only=False.


Observe the number of generated features.



54. Feature Count


Interaction generation can substantially increase the number of columns.


Always inspect:


X.shape.



55. Python


print(
    X.shape
)


print(
    X_interactions.shape
)



56. Feature Validation


After creating interactions, inspect:


Minimum.


Maximum.


Missing values.


Infinite values.


Distribution.



57. Checking Infinite Values


Python


import numpy as np


print(
    np.isinf(
        df.select_dtypes(
            include="number"
        )
    ).sum()
)



58. Why Check Infinity?


Multiplication itself normally does not create infinity for ordinary values, but earlier transformations or extremely large values can create numerical overflow.



59. Feature Leakage


Interaction features can also cause leakage.


For example:


If one component contains future information, the interaction inherits that leakage.



60. Example


Suppose:


current_balance


is multiplied by:


future_payment.


The resulting interaction still contains future information.



61. Interaction Workflow


A practical workflow is:


Understand Domain


↓

Identify Potential Relationships


↓

Create Selected Interactions


↓

Validate Values


↓

Split/Use Pipeline Correctly


↓

Train Model


↓

Evaluate.


The interaction should have a reason for existing.



62. Common Mistakes


Mistake 1:


Creating every possible interaction.


Mistake 2:


Ignoring feature explosion.


Mistake 3:


Creating interactions without domain reasoning.


Mistake 4:


Ignoring scaling for magnitude-sensitive models.


Mistake 5:


Using future information.


Mistake 6:


Assuming an interaction always improves performance.



63. Practice


1. What is an interaction feature?


2. Give three examples of meaningful interactions.


3. What does x₁x₂ represent?


4. How does an interaction change a linear model?


5. Why can interaction features cause feature explosion?


6. Why can Ridge be useful with many interactions?



64. Quick Check


Question 1


What is an interaction feature?


Answer


A feature representing a combined relationship between two or more variables.


Question 2


Can linear regression automatically create x₁x₂?


Answer


No. The interaction must be represented explicitly in the input features.


Question 3


What does interaction_only=True do?


Answer


It focuses polynomial expansion on interaction terms rather than powers such as x².



65. Summary


Interaction features allow models to represent relationships where the effect of one variable depends on another.


The simplest interaction is:


x₁x₂.


They are especially useful with models such as:


Linear Regression.


Logistic Regression.


Regularized linear models.


Tree-based models can often learn many interactions automatically.



66. Extended Study


Interaction features can be viewed as a feature mapping:


φ(x₁,x₂)


=


[x₁,x₂,x₁x₂].


The model then learns:


ŷ = β₀ + β₁x₁ + β₂x₂ + β₃x₁x₂.


This allows the relationship between the variables to change depending on their values.



67. Reflection


Before creating an interaction, ask:


Why should these variables interact?


Does the domain support the relationship?


Will the interaction be available during prediction?


Could it introduce leakage?


How many new features will it create?


Does validation show an improvement?



`

};

export default lesson5;