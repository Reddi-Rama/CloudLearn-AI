const lesson4 = {

  id: "lesson4",

  title: "Stratified Cross-Validation",

  content: `

Lesson 04

Stratified Cross-Validation


1. Introduction


Ordinary k-fold cross-validation divides observations into folds.


For classification problems, however, another issue must be considered:


Class distribution.


If the dataset contains imbalanced classes, a randomly created fold may contain a very different proportion of classes from the original dataset.


Stratified cross-validation addresses this problem by attempting to preserve the class proportions across folds.



2. What Is Stratification?


Stratification means creating folds so that each fold contains approximately the same class proportions as the complete dataset.



3. Example


Suppose a classification dataset contains:


Class 0:


900 observations.


Class 1:


100 observations.


Therefore:


Class 0 = 90%.


Class 1 = 10%.



4. Five-Fold Stratification


With five folds, each fold will contain approximately:


90% Class 0.


10% Class 1.



5. Approximate Fold Composition


If each fold contains 200 observations:


Class 0:


approximately 180.


Class 1:


approximately 20.



6. Why Does This Matter?


Without stratification, one fold could accidentally contain:


195 Class 0.


5 Class 1.


Another fold could contain:


175 Class 0.


25 Class 1.


The resulting evaluation may become less consistent.



7. Stratified k-Fold


The standard scikit-learn class for stratified classification folds is:


StratifiedKFold.



8. Python


from sklearn.model_selection import (
    StratifiedKFold
)


cv = StratifiedKFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)



9. Important Parameters


n_splits:


Number of folds.


shuffle:


Whether observations are shuffled before splitting.


random_state:


Controls reproducibility when shuffling is enabled.



10. Using StratifiedKFold


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



11. Mean Score


Python


print(
    scores.mean()
)



12. Score Variation


Python


print(
    scores.std()
)



13. Why Accuracy Alone Can Be Misleading


Suppose:


99% of observations belong to Class 0.


1% belong to Class 1.


A model predicting Class 0 for everything could obtain approximately 99% accuracy.



14. Better Evaluation


For highly imbalanced classification problems, consider:


Precision.


Recall.


F1-score.


ROC-AUC.


Precision-recall based metrics where appropriate.



15. Stratification Does Not Solve Everything


Stratification preserves class proportions.


It does not automatically solve:


Class imbalance.


Data leakage.


Temporal dependencies.


Grouped observations.


Poor feature design.



16. Mathematical Intuition


Suppose the dataset contains:


N₀ observations of Class 0.


N₁ observations of Class 1.


The class proportions are:


p₀ = N₀ / N.


p₁ = N₁ / N.


Stratified folds attempt to maintain approximately:


p₀.


and:


p₁.


within each fold.



17. Example


Suppose:


N = 1,000.


Class 0 = 800.


Class 1 = 200.


Then:


p₀ = 0.80.


p₁ = 0.20.



18. Five Folds


Each fold should contain approximately:


80% Class 0.


20% Class 1.



19. When Is Stratification Useful?


It is particularly useful when:


The target is categorical.


Classes are imbalanced.


The minority class is important.



20. Binary Classification


Example:


Fraud.


Not Fraud.



21. Multiclass Classification


Stratification can also preserve multiple classes.


Example:


Class A.


Class B.


Class C.



22. Multiclass Example


Suppose:


Class A = 50%.


Class B = 30%.


Class C = 20%.


Each fold attempts to maintain approximately these proportions.



23. Inspecting Fold Distributions


Python


for train_idx, val_idx in cv.split(X, y):

    y_train = y[train_idx]

    y_val = y[val_idx]

    print(
        "Training:",
        y_train.mean()
    )

    print(
        "Validation:",
        y_val.mean()
    )



24. Why Is mean Useful Here?


For binary labels:


0 and 1.


The mean of the target approximates the proportion of Class 1.



25. Example


If:


y.mean() = 0.20.


Approximately 20% of observations belong to Class 1.



26. Stratified Train-Test Split


Stratification can also be used with a simple train-test split.



27. Python


from sklearn.model_selection import (
    train_test_split
)


X_train, X_test, y_train, y_test = (

    train_test_split(

        X,

        y,

        test_size=0.2,

        random_state=42,

        stratify=y

    )

)



28. Why Use stratify=y?


The target distribution is approximately preserved between the training and test subsets.



29. Cross-Validation Example


Python


from sklearn.datasets import (
    load_breast_cancer
)


data = load_breast_cancer()


X = data.data


y = data.target



30. Model


Python


from sklearn.linear_model import (
    LogisticRegression
)


model = LogisticRegression(
    max_iter=5000
)



31. Stratified Evaluation


Python


cv = StratifiedKFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)


scores = cross_val_score(

    model,

    X,

    y,

    cv=cv,

    scoring="accuracy"

)



32. Output


Python


print(
    scores
)


print(
    scores.mean()
)


print(
    scores.std()
)



33. Comparing KFold and StratifiedKFold


For classification:


KFold:


Does not explicitly preserve target class proportions.


StratifiedKFold:


Attempts to preserve target class proportions.



34. Example


If the target distribution is highly imbalanced, stratification generally provides more controlled fold composition.



35. Important Limitation


Stratification does not create new minority-class observations.


It only distributes existing observations more carefully.



36. Very Small Minority Classes


Suppose there are only:


3 positive observations.


and we request:


5 folds.


There are not enough positive observations to place at least one positive observation in every validation fold.



37. Practical Lesson


The number of folds must be compatible with the available class counts.



38. Cross-Validation and Pipelines


Suppose preprocessing includes:


StandardScaler.


Feature selection.


Imputation.



39. Correct Workflow


Stratified Fold


↓

Training Data


↓

Fit Preprocessing


↓

Transform Training Data


↓

Transform Validation Data


↓

Train Model


↓

Evaluate.



40. Pipeline Example


Python


from sklearn.pipeline import (
    Pipeline
)


from sklearn.preprocessing import (
    StandardScaler
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



41. Cross-Validation


Python


scores = cross_val_score(

    pipeline,

    X,

    y,

    cv=cv,

    scoring="accuracy"

)



42. Why Pipeline?


The scaler learns its statistics separately within each training fold.


This reduces leakage risk.



43. Multiple Metrics


Instead of evaluating only accuracy, calculate multiple metrics.



44. Python


from sklearn.model_selection import (
    cross_validate
)


results = cross_validate(

    pipeline,

    X,

    y,

    cv=cv,

    scoring=[

        "accuracy",

        "precision",

        "recall",

        "f1"

    ]

)



45. Inspect Results


Python


print(
    results["test_accuracy"].mean()
)


print(
    results["test_precision"].mean()
)


print(
    results["test_recall"].mean()
)


print(
    results["test_f1"].mean()
)



46. Why Multiple Metrics?


A model can have:


High accuracy.


Low recall.


For some applications, this may be unacceptable.



47. Experiment


Create an imbalanced binary classification dataset.


Use:


StratifiedKFold.


Compare:


Accuracy.


Precision.


Recall.


F1.



48. Python


from sklearn.datasets import (
    make_classification
)


X, y = make_classification(

    n_samples=1000,

    n_features=10,

    weights=[0.9, 0.1],

    random_state=42

)



49. Evaluate


Python


cv = StratifiedKFold(

    n_splits=5,

    shuffle=True,

    random_state=42

)


results = cross_validate(

    model,

    X,

    y,

    cv=cv,

    scoring=[

        "accuracy",

        "precision",

        "recall",

        "f1"

    ]

)



50. Analyze


Compare the mean values of:


Accuracy.


Precision.


Recall.


F1.



51. What Should You Ask?


Is the minority class important?


Is missing a positive observation costly?


Are false positives costly?


Which metric represents the real objective?



52. Common Mistakes


Mistake 1:


Using ordinary KFold without considering class imbalance.


Mistake 2:


Assuming stratification solves class imbalance itself.


Mistake 3:


Using too many folds for a very small minority class.


Mistake 4:


Evaluating only accuracy.


Mistake 5:


Performing preprocessing before cross-validation.


Mistake 6:


Ignoring the real-world cost of false positives and false negatives.



53. Practice


1. What is stratified cross-validation?


2. Why is stratification useful for classification?


3. What does StratifiedKFold do?


4. Why is stratification useful for imbalanced datasets?


5. What does stratify=y do in train_test_split?


6. Can stratification solve class imbalance?


7. Why can too many folds be problematic with very few minority observations?


8. Why should multiple metrics sometimes be used?



54. Quick Check


Question 1


A dataset contains 90% Class 0 and 10% Class 1.


Why can stratification help?


Answer


It attempts to preserve approximately the 90:10 class ratio across folds.



Question 2


Does stratification create additional minority observations?


Answer


No.



Question 3


What class should be considered carefully when choosing the number of folds?


Answer


The smallest class, because each fold needs enough observations to represent the classes appropriately.



55. Summary


Stratified cross-validation is designed for classification problems where preserving class proportions across folds is important.


Key concepts:


Class proportions.


StratifiedKFold.


Stratified train-test split.


Imbalanced classification.


Multiple evaluation metrics.


Pipeline-based preprocessing.



56. Extended Study


For each class c, let:


p_c = N_c / N.


Stratification attempts to construct each fold so that:


p_c(fold)


is close to:


p_c(dataset).


This makes the validation folds more representative of the overall class distribution when the data and number of folds allow it.



57. Final Reflection


When evaluating a classification model, do not ask only:


"What is the accuracy?"


Also ask:


Are the classes balanced?


Are the folds representative?


Which errors matter?


Is recall important?


Is precision important?


Is F1 appropriate?


Is the validation strategy consistent with the problem?

`

};

export default lesson4;