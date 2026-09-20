const lesson19 = {

  id: "lesson19",

  title: "Hyperparameter Tuning: Introduction",

  content: `

Lesson 19

Hyperparameter Tuning: Introduction


1. Introduction


Machine learning models contain values that control how the learning algorithm behaves.


Some values are learned automatically from training data.


Others must be specified before or around training.


These externally selected values are called hyperparameters.



2. Parameters vs Hyperparameters


Parameters:


Learned from data.



Hyperparameters:


Set by the practitioner or selected through a search procedure.



3. Example


In linear regression, model coefficients are learned from training data.



4. Decision Tree


A decision tree can have a hyperparameter:


max_depth.



5. max_depth


max_depth controls the maximum depth of the tree.



6. Why Tune Hyperparameters?


Different hyperparameter values can produce models with different:


Complexity.


Training behavior.


Generalization performance.



7. Example


Decision tree:


max_depth = 2.


Another tree:


max_depth = 20.



8. Difference


The shallow tree is more restricted.


The deeper tree can represent more complex relationships.



9. Hyperparameter Tuning


Hyperparameter tuning means systematically evaluating different hyperparameter configurations and selecting a configuration according to a validation procedure.



10. Important Principle


Hyperparameters should be selected using training data and validation procedures rather than repeatedly optimizing against the final test set.



11. Common Hyperparameters


Examples:


Number of neighbors.


Tree depth.


Number of trees.


Learning rate.


Regularization strength.


Minimum samples per leaf.



12. K-Nearest Neighbors


KNN has:


n_neighbors.



13. Example


Python


from sklearn.neighbors import (
    KNeighborsClassifier
)


model = KNeighborsClassifier(

    n_neighbors=5

)



14. Try Different Values


Python


for k in [3, 5, 7, 9]:

    model = KNeighborsClassifier(

        n_neighbors=k

    )



15. Why Not Guess?


Different datasets may require different model complexity.



16. Cross-Validation


Use cross-validation to evaluate hyperparameter configurations.



17. Example


Python


from sklearn.model_selection import (
    cross_val_score
)


scores = cross_val_score(

    model,

    X,

    y,

    cv=5,

    scoring="accuracy"

)



18. Manual Search


A simple approach is to evaluate several configurations manually.



19. Example


Python


results = {}


for k in [1, 3, 5, 7, 9]:

    model = KNeighborsClassifier(

        n_neighbors=k

    )

    scores = cross_val_score(

        model,

        X,

        y,

        cv=5,

        scoring="accuracy"

    )

    results[k] = scores.mean()



20. Inspect Results


Python


for k, score in results.items():

    print(
        k,
        score
    )



21. Limitation


Manual search becomes inconvenient when many hyperparameters are involved.



22. Grid Search


Grid search evaluates combinations from a predefined parameter grid.



23. GridSearchCV


scikit-learn provides:


GridSearchCV.



24. Python


from sklearn.model_selection import (
    GridSearchCV
)



25. Parameter Grid


Python


param_grid = {

    "n_neighbors": [

        3,

        5,

        7,

        9

    ]

}



26. Create Search


Python


search = GridSearchCV(

    KNeighborsClassifier(),

    param_grid,

    cv=5,

    scoring="accuracy"

)



27. Fit


Python


search.fit(

    X_train,

    y_train

)



28. Best Parameters


Python


print(
    search.best_params_
)



29. Best Cross-Validation Score


Python


print(
    search.best_score_
)



30. Best Model


Python


best_model = search.best_estimator_



31. Test Evaluation


Python


test_score = best_model.score(

    X_test,

    y_test

)


print(
    test_score
)



32. Important Principle


The final test set should remain untouched during the hyperparameter search.



33. Multiple Hyperparameters


Suppose a model has:


Parameter A:


[1, 2].



Parameter B:


[10, 20, 30].



34. Number of Combinations


Total combinations:


2 × 3.


=


6.



35. Grid Search Cost


If cross-validation uses:


5 folds.


then approximately:


6 × 5.


=


30.


model fits are required.



36. Larger Grid


Suppose:


4 hyperparameters.


Each has:


5 possible values.



37. Combinations


5⁴:


=


625.



38. Five-Fold CV


625 × 5:


=


3,125.


model fits.



39. Lesson


Grid search can become computationally expensive.



40. Randomized Search


Randomized search evaluates a selected number of configurations sampled from specified parameter distributions or candidate lists.



41. RandomizedSearchCV


Python


from sklearn.model_selection import (
    RandomizedSearchCV
)



42. Example


Python


param_distributions = {

    "n_neighbors": [

        1,

        3,

        5,

        7,

        9,

        11

    ]

}



43. Search


Python


search = RandomizedSearchCV(

    KNeighborsClassifier(),

    param_distributions,

    n_iter=4,

    cv=5,

    scoring="accuracy",

    random_state=42

)



44. Fit


Python


search.fit(

    X_train,

    y_train

)



45. Best Parameters


Python


print(
    search.best_params_
)



46. Why Random Search?


When the search space is large, random search can explore more configurations with a fixed computational budget than an exhaustive grid.



47. Hyperparameter vs Model Selection


Hyperparameter tuning selects settings within a model family.


Model comparison evaluates different model families.



48. Example


Model family:


Random Forest.



Hyperparameters:


n_estimators.


max_depth.


min_samples_leaf.



49. Pipeline Tuning


If preprocessing is required, tune the pipeline rather than preprocessing outside the validation procedure.



50. Example


Python


from sklearn.pipeline import (
    Pipeline
)


from sklearn.preprocessing import (
    StandardScaler
)


from sklearn.linear_model import (
    LogisticRegression
)


pipeline = Pipeline([

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        LogisticRegression(
            max_iter=1000
        )
    )

])



51. Parameter Names


Pipeline parameters are referenced using:


step_name__parameter.



52. Example


Python


param_grid = {

    "model__C": [

        0.01,

        0.1,

        1,

        10

    ]

}



53. Grid Search


Python


search = GridSearchCV(

    pipeline,

    param_grid,

    cv=5,

    scoring="accuracy"

)



54. Why Tune the Pipeline?


Each cross-validation split learns preprocessing only from its training portion.



55. Regularization Example


Logistic Regression has a hyperparameter:


C.



56. Interpretation


C controls the inverse strength of regularization in scikit-learn's LogisticRegression.



57. Search


Python


param_grid = {

    "C": [

        0.01,

        0.1,

        1,

        10

    ]

}



58. Search With Pipeline


Python


param_grid = {

    "model__C": [

        0.01,

        0.1,

        1,

        10

    ]

}



59. Tree Example


Python


from sklearn.tree import (
    DecisionTreeClassifier
)


param_grid = {

    "max_depth": [

        2,

        4,

        6,

        8,

        None

    ]

}



60. Multiple Parameters


Python


param_grid = {

    "max_depth": [

        2,

        4,

        6,

        None

    ],

    "min_samples_split": [

        2,

        5,

        10

    ]

}



61. Grid Size


There are:


4 × 3.


=


12.


configurations.



62. With Five-Fold CV


Approximately:


12 × 5.


=


60.


model fits.



63. Scoring


The scoring metric must match the problem.



64. Classification


Examples:


accuracy.


f1.


roc_auc.


average_precision.



65. Regression


Examples:


neg_mean_absolute_error.


neg_root_mean_squared_error.


r2.



66. Negative Error Scores


scikit-learn uses a "greater is better" scoring convention.


Therefore error metrics may appear with a negative sign.



67. Example


Python


scoring="neg_mean_absolute_error"



68. Interpretation


A value closer to zero is better for negative MAE scores because:


−2


is better than:


−5.



69. Multiple Metrics


GridSearchCV can evaluate multiple metrics.



70. Example


Python


scoring = {

    "accuracy": "accuracy",

    "f1": "f1"

}



71. Refit Metric


When multiple metrics are used, a refit strategy determines which metric is used to select the final estimator.



72. Important Principle


Do not choose the refit metric arbitrarily.


It should reflect the main objective of the application.



73. Best Parameters


Python


print(
    search.best_params_
)



74. Best Score


Python


print(
    search.best_score_
)



75. CV Results


GridSearchCV provides detailed results through:


cv_results_.



76. Python


results = search.cv_results_



77. Convert to DataFrame


Python


import pandas as pd


results_df = pd.DataFrame(

    results

)



78. Inspect


Python


print(

    results_df[

        [

            "params",

            "mean_test_score",

            "std_test_score",

            "rank_test_score"

        ]

    ]

)



79. Why Inspect Results?


The best configuration is not the only useful information.


The results can reveal:


Stable configurations.


Highly variable configurations.


Sensitivity to hyperparameters.



80. Hyperparameter Curves


A useful experiment is to plot:


Hyperparameter value.


against:


Cross-validation score.



81. Example


Try:


max_depth = 1.


2.


3.


5.


10.



82. Plot


Observe how validation performance changes with complexity.



83. Underfitting


A model that is too simple may have:


Low training performance.


Low validation performance.



84. Overfitting


A model that is too complex may have:


Very high training performance.


Lower validation performance.



85. Tuning Objective


Hyperparameter tuning attempts to find a configuration that generalizes well rather than simply maximizing training performance.



86. Search Space


A poor search space can produce poor tuning results.



87. Example


If the true useful value is:


C = 0.001.


but the search only evaluates:


1.


10.


100.


the search cannot discover the useful region.



88. Logarithmic Search


Some hyperparameters span several orders of magnitude.



89. Example


Regularization values:


0.0001.


0.001.


0.01.


0.1.


1.



90. Random Search Distributions


For continuous hyperparameters, random distributions can be more efficient than manually listing many values.



91. Experiment


Choose a classifier.



92. Step 1


Create a baseline configuration.



93. Step 2


Define a small grid.



94. Step 3


Run GridSearchCV.



95. Step 4


Inspect:


best_params_.


best_score_.



96. Step 5


Evaluate the selected estimator on the untouched test set.



97. Experiment 2


Repeat using RandomizedSearchCV.



98. Experiment 3


Compare:


Number of configurations evaluated.


Runtime.


Best cross-validation score.



99. Common Mistakes


Mistake 1:


Tuning on the test set.


Mistake 2:


Using preprocessing outside the pipeline.


Mistake 3:


Searching an unnecessarily huge grid.


Mistake 4:


Using an inappropriate scoring metric.


Mistake 5:


Choosing hyperparameters based only on training score.


Mistake 6:


Ignoring computational cost.



100. Practice


1. What is a hyperparameter?


2. How is a hyperparameter different from a parameter?


3. What is grid search?


4. What is randomized search?


5. Why can grid search become expensive?


6. What does best_params_ contain?


7. What does best_score_ represent?


8. Why should preprocessing be part of the pipeline during tuning?


9. What is the purpose of the scoring parameter?


10. Why should the final test set remain untouched?



101. Quick Check


Question 1


A model has:


3 values for A.


4 values for B.


How many grid combinations exist?


Answer:


3 × 4 = 12.



Question 2


If each configuration is evaluated using five-fold cross-validation, approximately how many model fits are required?


Answer:


12 × 5 = 60.



Question 3


Should the final test set be used to select hyperparameters?


Answer:


No.



102. Summary


Hyperparameter tuning searches for model configurations that provide strong validation performance.


Important tools include:


GridSearchCV.


RandomizedSearchCV.


Cross-validation.


Pipeline-based tuning.



The process should:


Use an appropriate metric.


Protect the test set.


Avoid leakage.


Control computational cost.



103. Extended Study


Suppose a hyperparameter vector is:


θ = (θ₁, θ₂, ..., θₚ).


Hyperparameter tuning searches over a candidate space:


Θ.


For each configuration θ, cross-validation estimates:


CV(θ).


The selected configuration can be represented as:


θ* = argmax θ∈Θ CV(θ)


when larger scores are better.


For error metrics represented using negative scoring, the optimization follows scikit-learn's greater-is-better convention.



104. Final Reflection


Hyperparameter tuning is not about finding the most complicated model.


It is about finding a configuration that provides strong generalization under a valid evaluation procedure.


Always ask:


What hyperparameters matter?


What search space is reasonable?


Which metric should be optimized?


How expensive is the search?


Is preprocessing inside the validation process?


Has the final test set remained untouched?

`

};

export default lesson19;