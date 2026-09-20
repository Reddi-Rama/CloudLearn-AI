const lesson3 = {

  id: "lesson3",

  title: "k-Fold Cross-Validation",

  content: `

Lesson 03

k-Fold Cross-Validation


1. Introduction


k-fold cross-validation is one of the most widely used cross-validation strategies for machine learning.


The basic idea is simple:


Divide the development dataset into k approximately equal folds.


Train the model using k−1 folds.


Validate using the remaining fold.


Repeat until every fold has been used as the validation fold.



2. What Does k Mean?


The symbol:


k


represents the number of folds.



3. Example


If:


k = 5.


The dataset is divided into five folds.



4. Five-Fold Structure


Fold 1.


Fold 2.


Fold 3.


Fold 4.


Fold 5.



5. First Iteration


Training:


Folds 2, 3, 4, 5.


Validation:


Fold 1.



6. Second Iteration


Training:


Folds 1, 3, 4, 5.


Validation:


Fold 2.



7. Third Iteration


Training:


Folds 1, 2, 4, 5.


Validation:


Fold 3.



8. Fourth Iteration


Training:


Folds 1, 2, 3, 5.


Validation:


Fold 4.



9. Fifth Iteration


Training:


Folds 1, 2, 3, 4.


Validation:


Fold 5.



10. Every Observation


Each observation is:


Used for training in several iterations.


Used for validation once.


This allows the available development data to participate in both roles across the complete procedure.



11. Why k-Fold?


A single train-validation split can depend strongly on which observations were selected.


k-fold cross-validation reduces dependence on one particular split.



12. Mathematical View


Let:


D = complete development dataset.


Divide D into:


F₁, F₂, ..., Fₖ.


For each i:


Training data = D \ Fᵢ.


Validation data = Fᵢ.



13. Fold Score


After training on:


D \ Fᵢ.


we calculate a validation score:


sᵢ.



14. Overall Score


The mean score is:


CV_mean = 1/k Σsᵢ.



15. Example


Suppose five-fold validation produces:


Fold 1 = 0.90.


Fold 2 = 0.92.


Fold 3 = 0.88.


Fold 4 = 0.91.


Fold 5 = 0.89.



16. Mean


CV_mean:


=


(0.90 + 0.92 + 0.88 + 0.91 + 0.89) / 5.


CV_mean:


=


0.90.



17. Score Spread


The fold scores are not identical.


This variation provides information about how sensitive the model's measured performance is to the particular validation subset.



18. Standard Deviation


Calculate:


CV_std = standard deviation(s₁, s₂, ..., sₖ).



19. Interpretation


A relatively small standard deviation means the model performs similarly across folds.


A larger standard deviation means the measured performance varies more between folds.



20. Dataset Size


Suppose:


N = 1,000.


For five-fold cross-validation:


Each validation fold contains approximately:


200 observations.


Each training fold contains approximately:


800 observations.



21. Ten-Fold Example


For:


N = 1,000.


k = 10.


Each validation fold contains approximately:


100 observations.


Each training fold contains approximately:


900 observations.



22. Choosing k


Common values include:


k = 5.


k = 10.



23. Five-Fold Cross-Validation


Advantages:


Reasonable computational cost.


Large training portion.


Useful general-purpose choice.



24. Ten-Fold Cross-Validation


Advantages:


Uses a larger fraction of the development data for each training iteration.


Can provide a detailed evaluation across more folds.



25. Computational Cost


If model training takes:


10 seconds.


Five-fold cross-validation requires approximately:


5 model fits.


Therefore, the basic fitting cost is roughly:


50 seconds.


Actual runtime can differ because of preprocessing, parallelism, caching, and implementation details.



26. Larger k


Increasing k increases the number of model fits.


Therefore, computation increases.



27. Smaller k


Smaller k reduces computation but creates larger validation folds and smaller training folds.



28. Important Principle


There is no universally optimal value of k for every dataset and problem.



29. KFold in scikit-learn


Python


from sklearn.model_selection import (
    KFold
)


cv = KFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)



30. Explanation


n_splits:


Number of folds.


shuffle:


Whether observations should be shuffled before splitting.


random_state:


Controls reproducibility when shuffling is enabled.



31. Using cross_val_score


Python


from sklearn.model_selection import (
    cross_val_score
)


scores = cross_val_score(

    model,

    X,

    y,

    cv=cv,

    scoring="accuracy"

)



32. Inspect Scores


Python


print(
    scores
)



33. Mean


Python


print(
    scores.mean()
)



34. Standard Deviation


Python


print(
    scores.std()
)



35. Example Output


A possible output is:


[0.90, 0.92, 0.88, 0.91, 0.89]


Mean:


0.90.



36. KFold and Classification


Basic KFold does not explicitly preserve class proportions.


For classification tasks, stratified cross-validation is often more appropriate.



37. Why Class Proportions Matter


Suppose:


Class 0 = 95%.


Class 1 = 5%.


If folds are created without considering class proportions, some folds may contain unusually few minority-class observations.



38. Stratified k-Fold


Stratified k-fold maintains approximately similar class proportions across folds.


This is covered in the next lesson.



39. KFold and Regression


For ordinary regression data without special grouping or temporal structure, KFold can be appropriate.



40. KFold and Time Series


Random k-fold splitting is generally inappropriate for time-dependent prediction tasks because it can allow future observations to influence training for earlier validation observations.



41. Example


Suppose we predict:


January sales.


A random split might train using:


February.


March.


April.


while validating January.


This reverses the temporal direction of the prediction problem.



42. Time-Aware Evaluation


Time-dependent problems require evaluation strategies that respect chronological order.



43. Grouped Data


Another special case occurs when multiple observations belong to the same entity.


For example:


Several medical records from the same patient.


Several transactions from the same customer.


Several measurements from the same machine.



44. Leakage Risk


If observations from the same entity appear in both training and validation folds, the model may effectively see information about the entity during training.



45. Group-Aware Validation


Group-aware cross-validation can keep related observations together.


This ensures that groups are not unnecessarily split between training and validation.



46. Important Lesson


The correct value of k is only one part of cross-validation design.


The splitting strategy must also match the structure of the data.



47. Preprocessing with k-Fold


Suppose:


StandardScaler


is applied before cross-validation.


The scaler learns:


Mean.


Standard deviation.



48. Incorrect Workflow


Entire Dataset


↓

Fit Scaler


↓

Transform Entire Dataset


↓

k-Fold Cross-Validation.



49. Why Incorrect?


The scaler has used information from every observation, including observations that later become validation folds.



50. Correct Workflow


Each Fold


↓

Training Portion


↓

Fit Scaler


↓

Transform Training Portion


↓

Transform Validation Portion


↓

Train Model


↓

Evaluate.



51. Pipeline


A pipeline can automate this process.



52. Python


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



53. Cross-Validation


Python


scores = cross_val_score(

    pipeline,

    X,

    y,

    cv=5,

    scoring="accuracy"

)



54. Why This Is Safer


The pipeline fits the scaler as part of each training process.


The validation fold remains unseen during the fitting of the preprocessing step.



55. k-Fold and Model Comparison


Suppose we compare:


Logistic Regression.


Decision Tree.


Random Forest.



56. Fair Comparison


Use:


Same folds.


Same metric.


Same development data.



57. Example


Python


from sklearn.ensemble import (
    RandomForestClassifier
)


models = {

    "Logistic Regression":
        LogisticRegression(
            max_iter=1000
        ),

    "Random Forest":
        RandomForestClassifier(
            random_state=42
        )

}



58. Comparison


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
        name,
        scores.mean(),
        scores.std()
    )



59. Interpretation


Suppose:


Logistic Regression:


Mean = 0.90.


Std = 0.02.



Random Forest:


Mean = 0.93.


Std = 0.04.



The cross-validation results show both average performance and variability.


Additional considerations are still needed before selecting a model.



60. k-Fold and Hyperparameter Tuning


Suppose a model has:


C = 0.1.


C = 1.


C = 10.



Each configuration can be evaluated using the same k-fold strategy.



61. Example


Python


for c in [
    0.1,
    1,
    10
]:

    model = LogisticRegression(

        C=c,

        max_iter=1000

    )

    scores = cross_val_score(

        model,

        X,

        y,

        cv=5,

        scoring="accuracy"

    )

    print(

        c,

        scores.mean()

    )



62. Why Keep Folds Consistent?


Using the same folds reduces one source of variability when comparing configurations.


The comparison then focuses more directly on differences between the models or settings.



63. Cross-Validation and Randomness


Some models contain randomness.


For example:


Random forests.


Stochastic optimization methods.



64. Reproducibility


Set appropriate random states when reproducibility is important.



65. Experiment


Use the breast cancer dataset from scikit-learn.


Compare:


5-fold cross-validation.


10-fold cross-validation.



66. Python


from sklearn.datasets import (
    load_breast_cancer
)


data = load_breast_cancer()


X = data.data


y = data.target



67. Model


Python


model = LogisticRegression(

    max_iter=5000

)



68. Five-Fold


Python


cv5 = KFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)


scores5 = cross_val_score(

    model,

    X,

    y,

    cv=cv5,

    scoring="accuracy"

)



69. Ten-Fold


Python


cv10 = KFold(

    n_splits=10,

    shuffle=True,

    random_state=42

)


scores10 = cross_val_score(

    model,

    X,

    y,

    cv=cv10,

    scoring="accuracy"

)



70. Compare


Python


print(
    "5-fold mean:",
    scores5.mean()
)


print(
    "5-fold std:",
    scores5.std()
)


print(
    "10-fold mean:",
    scores10.mean()
)


print(
    "10-fold std:",
    scores10.std()
)



71. Interpretation


Do not interpret a small difference between two cross-validation configurations as proof that one strategy is universally superior.


Consider:


Dataset size.


Computational cost.


Variance.


Problem structure.



72. Common Mistakes


Mistake 1:


Using KFold for classification without considering class imbalance.


Mistake 2:


Randomly shuffling time-series data.


Mistake 3:


Allowing related groups to appear in both training and validation.


Mistake 4:


Fitting preprocessing before cross-validation.


Mistake 5:


Changing folds between model comparisons.


Mistake 6:


Assuming more folds always means better evaluation.



73. Practice


1. What does k represent in k-fold cross-validation?


2. Explain five-fold cross-validation.


3. How many times is the model trained in five-fold cross-validation?


4. What is the purpose of the validation fold?


5. Why calculate the mean cross-validation score?


6. What does standard deviation tell us?


7. What happens to computational cost when k increases?


8. Why can KFold be problematic for imbalanced classification?


9. Why can ordinary KFold be problematic for time-series data?


10. Why should preprocessing be inside the pipeline?



74. Quick Check


Question 1


For 5-fold cross-validation, how many validation rounds occur?


Answer


Five.



Question 2


If a dataset contains 1,000 observations and k = 10, approximately how many observations are in each validation fold?


Answer


Approximately 100.



Question 3


What is the primary reason for using multiple folds?


Answer


To evaluate the model across multiple train-validation partitions rather than relying on one split.



Question 4


Should preprocessing statistics be calculated using the complete dataset before k-fold cross-validation?


Answer


No. Learned preprocessing should be fitted within the training portion of each fold.



75. Summary


k-fold cross-validation divides the development dataset into k folds.


The model is trained k times.


Each fold serves as the validation fold once.


The validation scores are then summarized.


Important concepts include:


Choice of k.


Mean score.


Standard deviation.


Computational cost.


Consistent folds.


Preprocessing inside folds.


Classification considerations.


Time-series considerations.


Group-aware evaluation.



76. Extended Study


For k folds:


D = F₁ ∪ F₂ ∪ ... ∪ Fₖ.


For each fold:


Trainᵢ = D \ Fᵢ.


Validateᵢ = Fᵢ.


The resulting score is:


sᵢ = Metric(
    Model(Trainᵢ),
    Validateᵢ
).


The overall estimate is:


CV_mean = 1/k Σsᵢ.



77. Final Reflection


When using k-fold cross-validation, do not focus only on choosing:


k = 5


or:


k = 10.


The more important question is:


Does the cross-validation strategy correctly represent how the model will encounter unseen data?


Consider:


Class balance.


Time.


Groups.


Preprocessing.


Evaluation metric.


Data leakage.


Computational cost.


A well-designed cross-validation strategy produces much more meaningful evidence about model performance.

`

};

export default lesson3;