const lesson20 = {

  id: "lesson20",

  title: "Advanced Hyperparameter Tuning and Efficient Search",

  content: `

Lesson 20

Advanced Hyperparameter Tuning and Efficient Search


1. Introduction


Hyperparameter tuning becomes more challenging as machine learning models become more complex.


A small model may have only one or two important hyperparameters.


A production model may have many interacting hyperparameters.


The goal is to search efficiently while maintaining reliable evaluation.



2. Why Efficient Search Matters


Suppose a model has:


5 hyperparameters.


Each hyperparameter has 10 possible values.


A complete grid would contain:


10⁵ = 100,000 configurations.



3. Cross-Validation Cost


With five-fold cross-validation:


100,000 × 5


= 500,000 model fits.



4. The Problem


An exhaustive grid can become:


Slow.


Expensive.


Memory-intensive.


Difficult to maintain.



5. Search Strategies


Common strategies include:


Grid Search.


Random Search.


Successive Halving.


Bayesian optimization.


Manual narrowing of the search space.



6. Grid Search


Grid search evaluates every specified combination.



7. Advantage


It is systematic and easy to understand.



8. Limitation


It can waste computation on unimportant regions of the search space.



9. Random Search


Random search evaluates a selected number of configurations.



10. Advantage


It can explore a large search space with a fixed computational budget.



11. Random Search Example


Python


from sklearn.model_selection import (
    RandomizedSearchCV
)


search = RandomizedSearchCV(

    estimator=model,

    param_distributions=param_distributions,

    n_iter=30,

    cv=5,

    scoring="accuracy",

    random_state=42,

    n_jobs=-1

)



12. n_iter


n_iter specifies how many configurations are sampled.



13. Computational Budget


Instead of asking:


"How many configurations exist?"


ask:


"How many configurations can we afford to evaluate?"



14. n_jobs


n_jobs controls the number of parallel jobs used by many scikit-learn search procedures.



15. n_jobs=-1


This requests use of all available CPU cores supported by the estimator and environment.



16. Caution


Parallel processing can increase memory consumption.



17. Parameter Distributions


Randomized search becomes especially useful when continuous or wide parameter distributions are available.



18. Example


Python


from scipy.stats import (
    loguniform
)


param_distributions = {

    "C": loguniform(
        1e-4,
        1e2
    )

}



19. Why Logarithmic Sampling?


Some hyperparameters are meaningful across several orders of magnitude.



20. Example


Values might range from:


0.0001.


0.001.


0.01.


0.1.


1.


10.


100.



21. Logarithmic Distribution


A logarithmic distribution gives the search procedure opportunities to explore these scales more naturally.



22. Successive Halving


Successive halving is an approach that allocates more resources to promising configurations while eliminating weaker configurations early.



23. Basic Idea


Start with many configurations.


Evaluate them using a smaller resource budget.


Keep stronger candidates.


Give those candidates more resources.


Repeat.



24. Why Useful?


Weak configurations do not consume the full computational budget.



25. HalvingGridSearchCV


scikit-learn provides:


HalvingGridSearchCV.



26. Import


Python


from sklearn.experimental import (
    enable_halving_search_cv
)


from sklearn.model_selection import (
    HalvingGridSearchCV
)



27. Example


Python


search = HalvingGridSearchCV(

    estimator=model,

    param_grid=param_grid,

    cv=5,

    scoring="accuracy"

)



28. Fit


Python


search.fit(

    X_train,

    y_train

)



29. Best Configuration


Python


print(
    search.best_params_
)



30. Resource Allocation


The resource depends on the estimator and search configuration.



31. Search Efficiency


The central idea is:


Spend more computation on promising configurations.



32. Model-Specific Search


Different algorithms have different important hyperparameters.



33. KNN


Important parameters include:


n_neighbors.


weights.


metric.



34. Decision Tree


Important parameters include:


max_depth.


min_samples_split.


min_samples_leaf.



35. Random Forest


Important parameters include:


n_estimators.


max_depth.


min_samples_split.


max_features.



36. Support Vector Machine


Important parameters include:


C.


kernel.


gamma.



37. Logistic Regression


Important parameters include:


C.


penalty.


solver.



38. Gradient Boosting


Important parameters include:


n_estimators.


learning_rate.


max_depth.



39. Search Space Design


A good search space should:


Include plausible values.


Cover meaningful scales.


Avoid obviously impossible configurations.



40. Example


Instead of:


max_depth = [1, 2, 3, ..., 1000]


use a smaller domain informed by the dataset and model behavior.



41. Coarse-to-Fine Search


A useful strategy is:


First search broadly.


Then narrow the region.


Then search more precisely.



42. Example


Initial:


C = [0.001, 0.01, 0.1, 1, 10, 100].



43. Result


Suppose the strongest region is:


0.01 to 1.



44. Refined Search


Search:


0.01.


0.03.


0.1.


0.3.


1.



45. Why?


The second search spends computation near the promising region.



46. Validation


The search procedure must still use an appropriate cross-validation strategy.



47. Stratified Search


For classification, use stratified folds when preserving class proportions is appropriate.



48. Grouped Search


For grouped observations, provide an appropriate group-aware validation strategy.



49. Time-Based Search


For temporal data, use time-aware validation rather than random shuffling.



50. Pipeline Search


Search should include preprocessing when preprocessing is part of the model workflow.



51. Example


Python


from sklearn.pipeline import (
    Pipeline
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



52. Search Parameters


Python


param_grid = {

    "model__C": [

        0.01,

        0.1,

        1,

        10

    ]

}



53. Search


Python


search = GridSearchCV(

    pipeline,

    param_grid,

    cv=5,

    scoring="f1"

)



54. Why?


Each fold learns scaling from its training data rather than from the entire dataset.



55. Multiple Metrics


Search can evaluate multiple metrics when useful.



56. Example


Python


scoring = {

    "accuracy": "accuracy",

    "f1": "f1",

    "roc_auc": "roc_auc"

}



57. Choosing the Refit Metric


The final selected model should be chosen using a metric aligned with the actual objective.



58. Example


For a highly imbalanced classification problem, accuracy may not represent the primary objective.



59. Search Results


Important attributes include:


best_params_.


best_score_.


best_estimator_.


cv_results_.



60. Inspecting Results


Python


import pandas as pd


results = pd.DataFrame(

    search.cv_results_

)



61. Useful Columns


Examples:


params.


mean_test_score.


std_test_score.


rank_test_score.



62. Search Stability


If several configurations have nearly identical validation performance, the simplest or most practical configuration may deserve further consideration.



63. Do Not Overinterpret Tiny Differences


A difference such as:


0.841


versus:


0.842


may not represent a practically important improvement.



64. Computational Efficiency


Track:


Training time.


Number of configurations.


Number of folds.


Memory usage.



65. Experiment


Create a Random Forest classifier.



66. Initial Search


Tune:


n_estimators.


max_depth.



67. Search


Use:


RandomizedSearchCV.



68. Record


Record:


Best parameters.


Best CV score.


Search runtime.



69. Experiment 2


Repeat using a grid search with a smaller parameter space.



70. Compare


Compare:


Configurations evaluated.


Runtime.


Best validation score.



71. Experiment 3


Perform a coarse-to-fine search.



72. First Stage


Search a broad parameter space.



73. Second Stage


Narrow the search around the strongest region.



74. Compare


Determine whether the refined search improves validation performance.



75. Common Mistakes


Mistake 1:


Creating an unnecessarily huge grid.


Mistake 2:


Ignoring computational cost.


Mistake 3:


Using the test set during search.


Mistake 4:


Using random validation for time-dependent data.


Mistake 5:


Ignoring preprocessing leakage.


Mistake 6:


Optimizing an inappropriate metric.



76. Practice


1. Why can exhaustive grid search become expensive?


2. What does n_iter control in RandomizedSearchCV?


3. Why are logarithmic distributions useful for some hyperparameters?


4. What is successive halving?


5. What is coarse-to-fine search?


6. Why should search spaces be realistic?


7. Why should preprocessing be included in a pipeline?



77. Quick Check


Question 1


A search has 1,000 configurations and five-fold cross-validation.


Approximately how many model fits are required?


Answer:


5,000.



Question 2


Why might random search be preferred?


Answer:


It can explore a large search space using a controlled number of configurations.



78. Summary


Efficient hyperparameter tuning requires careful search-space design.


Useful approaches include:


Randomized search.


Successive halving.


Coarse-to-fine search.


Model-specific parameter selection.



The objective is not to evaluate every imaginable configuration.


The objective is to efficiently find configurations that generalize well under an appropriate validation strategy.



79. Extended Study


Hyperparameter optimization can be viewed as searching for:


θ* = argmax CV(θ)


where θ represents a hyperparameter configuration and CV(θ) represents an estimated validation score.


When the search space is large, computational efficiency becomes part of the modeling problem itself.



80. Final Reflection


A strong tuning process balances:


Performance.


Reliability.


Computational cost.


Reproducibility.


Interpretability.


Practical deployment requirements.

`

};

export default lesson20;