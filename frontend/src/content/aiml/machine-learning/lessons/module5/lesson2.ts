const lesson2 = {

  id: "lesson2",

  title: "Cross-Validation",

  content: `

Lesson 02

Cross-Validation


1. Introduction


A single train-test split can provide a useful first evaluation.


However, the measured performance can depend on exactly which observations happen to appear in the training and validation sets.


Cross-validation provides a more systematic evaluation strategy.


Instead of relying on only one validation split, cross-validation repeatedly trains and evaluates the model using different subsets of the available data.



2. What Is Cross-Validation?


Cross-validation is a model evaluation technique in which the available development data is divided into multiple subsets and the model is trained and evaluated repeatedly using different subsets.



3. Basic Idea


Suppose we have:


100 observations.


Instead of creating only one validation set, we can create several train-validation combinations.



4. Why Multiple Splits?


Consider two possible validation scores:


Split A:


88%.


Split B:


94%.


A single split may therefore give a performance estimate that depends strongly on the selected observations.



5. Cross-Validation Objective


Cross-validation estimates how consistently a model performs across different partitions of the available data.



6. General Process


Dataset


↓

Create multiple folds


↓

Train on some folds


↓

Validate on remaining fold


↓

Repeat


↓

Collect scores


↓

Calculate summary statistics.



7. Fold


A fold is one subset of the dataset used as part of the cross-validation procedure.



8. Example


Suppose:


100 observations.


5 folds.


Each fold contains approximately:


20 observations.



9. Five-Fold Process


Round 1:


Train:


Folds 2, 3, 4, 5.


Validate:


Fold 1.



10. Round 2


Train:


Folds 1, 3, 4, 5.


Validate:


Fold 2.



11. Round 3


Train:


Folds 1, 2, 4, 5.


Validate:


Fold 3.



12. Round 4


Train:


Folds 1, 2, 3, 5.


Validate:


Fold 4.



13. Round 5


Train:


Folds 1, 2, 3, 4.


Validate:


Fold 5.



14. Final Result


We obtain five validation scores.


For example:


0.88.


0.91.


0.90.


0.87.


0.92.



15. Mean Cross-Validation Score


The mean score can be calculated as:


CV Mean


=


1/k Σ Scoreᵢ.



16. Example


Scores:


0.88.


0.91.


0.90.


0.87.


0.92.


Mean:


(0.88 + 0.91 + 0.90 + 0.87 + 0.92) / 5


=


0.896.



17. Standard Deviation


The standard deviation describes how much the scores vary across folds.


A low standard deviation indicates relatively stable performance across the folds.



18. Mathematical Intuition


Let the validation scores be:


s₁, s₂, ..., sₖ.


Then:


mean = 1/k Σsᵢ.


The sample standard deviation can be calculated from the deviations of each score from the mean.



19. Why Variability Matters


Suppose Model A produces:


0.90.


0.91.


0.90.


0.89.


0.90.



Model B produces:


0.99.


0.80.


0.97.


0.82.


0.95.



Both may have similar average performance.


However, Model B shows much larger variation.



20. Cross-Validation and Generalization


Cross-validation does not guarantee perfect knowledge of future performance.


Instead, it provides a more informative estimate than relying on one arbitrary split in many common settings.



21. Training and Validation


During each fold:


The model learns from the training folds.


It is evaluated on the held-out fold.



22. Important Principle


The validation fold must not be used for fitting the model during that fold.



23. Why?


If the model is trained using the validation observations and then evaluated on those same observations, the evaluation is no longer an honest estimate of unseen-data performance.



24. Cross-Validation and Preprocessing


Preprocessing operations that learn statistics should be performed within each training fold.


Examples:


Scaling.


Imputation.


Feature selection.



25. Leakage Example


Suppose we calculate the mean of the entire dataset before cross-validation and use that mean to impute every fold.


Information from validation folds has now influenced the preprocessing.



26. Correct Approach


The imputer should learn its statistics from the training portion of each fold.


A pipeline is a reliable way to achieve this.



27. Cross-Validation With scikit-learn


Python


from sklearn.model_selection import (
    cross_val_score
)



28. Example Dataset


Python


from sklearn.datasets import (
    load_iris
)


data = load_iris()


X = data.data


y = data.target



29. Model


Python


from sklearn.linear_model import (
    LogisticRegression
)


model = LogisticRegression(
    max_iter=1000
)



30. Cross-Validation


Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=5,

    scoring="accuracy"

)



31. Inspect Scores


Python


print(
    scores
)



32. Mean Score


Python


print(
    scores.mean()
)



33. Standard Deviation


Python


print(
    scores.std()
)



34. Example Output


The exact values depend on the dataset and library version.


A typical output may look like:


[0.9667, 1.0000, 0.9333, 0.9667, 1.0000]


Mean:


approximately 0.973.



35. Why Use cv=5?


cv=5 asks scikit-learn to perform five-fold cross-validation using the default cross-validation strategy appropriate to the estimator and target type.



36. Explicit KFold


For regression or other settings where ordinary K-fold splitting is appropriate, we can explicitly construct a KFold object.



37. Python


from sklearn.model_selection import (
    KFold
)


cv = KFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)



38. Cross-Validation


Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=cv,

    scoring="accuracy"

)



39. Shuffle


Shuffling can help randomize the allocation of observations into folds when the ordering of the dataset should not be preserved.



40. Random State


A fixed random_state makes the fold assignment reproducible when shuffling is enabled.



41. Cross-Validation Without Shuffling


If:


cv = KFold(
    n_splits=5
)


the data is divided according to its existing order.


This can be inappropriate if the original order contains structure that should not determine the folds.



42. When Not to Shuffle


For time-dependent data, ordinary random shuffling can break the temporal structure.


Time-series problems generally require specialized evaluation strategies.



43. Cross-Validation for Classification


Classification problems often require folds that preserve class proportions.


This leads to stratified cross-validation.



44. Stratified Cross-Validation


Stratified cross-validation is covered in more detail in a later lesson.



45. Cross-Validation for Regression


For ordinary regression, standard K-fold cross-validation is commonly used.


However, the correct strategy depends on the data-generating process.



46. Cross-Validation and Dataset Size


For small datasets, cross-validation can make more efficient use of the available development data because each observation can participate in validation across different folds.



47. Important Limitation


Cross-validation requires training the model multiple times.


Therefore, it can be computationally more expensive than one train-validation split.



48. Computational Cost


If:


k = 5.


The model is trained approximately five times for one cross-validation evaluation.



49. More Folds


Using:


10-fold cross-validation


requires approximately ten model fits for one evaluation procedure.



50. Fewer Folds


Using:


3-fold cross-validation


requires approximately three model fits.



51. Trade-Off


More folds can provide training sets that contain a larger proportion of the available data.


However:


More folds increase computational cost.


The validation sets become smaller.


The estimates can have different variance characteristics.



52. Cross-Validation and Hyperparameter Tuning


Cross-validation can be used to compare different hyperparameter configurations.


For example:


C = 0.1.


C = 1.


C = 10.



53. Important Warning


If many configurations are compared using the same cross-validation results, the chosen configuration can become increasingly adapted to the evaluation procedure.


This is one reason an independent test set is useful for final evaluation.



54. Nested Cross-Validation


Nested cross-validation can be used when a more rigorous estimate is required while hyperparameter selection is itself part of the evaluation process.


It contains:


An inner loop for model selection.


An outer loop for performance estimation.



55. Conceptual Structure


Outer Fold


↓

Training Portion


↓

Inner Cross-Validation


↓

Select Model


↓

Evaluate on Outer Validation Fold.



56. Cross-Validation vs Test Set


Cross-validation is commonly used during model development.


The final test set can remain untouched until the development process is complete.



57. Example Workflow


Dataset


↓

Hold out Test Set


↓

Remaining Development Data


↓

Cross-Validation


↓

Feature/Model/Hyperparameter Selection


↓

Final Model


↓

Test Set Evaluation.



58. Experiment


Use the Iris dataset.


Compare:


Logistic Regression.


Decision Tree.


K-Nearest Neighbors.



59. Python


from sklearn.tree import (
    DecisionTreeClassifier
)


from sklearn.neighbors import (
    KNeighborsClassifier
)


models = {

    "Logistic Regression":
        LogisticRegression(
            max_iter=1000
        ),

    "Decision Tree":
        DecisionTreeClassifier(
            random_state=42
        ),

    "KNN":
        KNeighborsClassifier(
            n_neighbors=5
        )

}



60. Evaluate


Python


for name, model in models.items():

    scores = cross_val_score(

        model,

        X,

        y,

        cv=5,

        scoring="accuracy"

    )

    print(
        name
    )

    print(
        "Mean:",
        scores.mean()
    )

    print(
        "Std:",
        scores.std()
    )



61. Interpretation


The model with the highest mean score is not automatically the best model for every application.


Consider:


Metric relevance.


Score variability.


Computational cost.


Model complexity.


Problem requirements.



62. Common Mistakes


Mistake 1:


Using the validation fold to fit preprocessing.


Mistake 2:


Preprocessing the entire dataset before cross-validation.


Mistake 3:


Using random cross-validation for time-dependent data.


Mistake 4:


Ignoring class imbalance.


Mistake 5:


Comparing models using different folds.


Mistake 6:


Assuming cross-validation completely eliminates uncertainty.


Mistake 7:


Using the test set repeatedly during development.



63. Practice


1. What is cross-validation?


2. What is a fold?


3. Explain five-fold cross-validation.


4. Why are multiple validation splits useful?


5. What does the mean cross-validation score represent?


6. What does the standard deviation tell us?


7. Why should preprocessing occur inside the cross-validation process?


8. Why can cross-validation be computationally expensive?


9. When might shuffling be inappropriate?


10. Why is a final test set still useful?



64. Quick Check


Question 1


A five-fold cross-validation produces:


0.80, 0.82, 0.81, 0.79, 0.83.


What does the mean summarize?


Answer


The average validation performance across the five folds.



Question 2


Why should preprocessing be fitted separately within each training fold?


Answer


To prevent information from the validation fold influencing the learned preprocessing parameters.



Question 3


Why can cross-validation require more computation?


Answer


The model is trained multiple times.



Question 4


Why is an untouched test set useful?


Answer


It provides a final evaluation after development and model selection decisions have been made.



65. Summary


Cross-validation evaluates a model across multiple train-validation splits.


Important concepts include:


Folds.


Training folds.


Validation folds.


Mean score.


Score variability.


K-fold cross-validation.


Shuffling.


Preprocessing within folds.


Computational cost.


Final test evaluation.



66. Extended Study


Suppose the development dataset is:


D.


Cross-validation partitions D into:


F₁, F₂, ..., Fₖ.


For fold i:


Training data:


D \ Fᵢ.


Validation data:


Fᵢ.


The model is trained using:


D \ Fᵢ.


The validation score is:


sᵢ.


The overall cross-validation estimate is:


CV = 1/k Σsᵢ.



67. Final Reflection


Cross-validation is not simply a way to obtain one number.


It allows us to examine how a model behaves across multiple partitions of the development data.


When using cross-validation, always ask:


Are the folds appropriate?


Is preprocessing performed correctly?


Is the metric appropriate?


Is the data independent?


Is there temporal structure?


Is the final test set protected?


These questions make cross-validation much more meaningful.

`

};

export default lesson2;