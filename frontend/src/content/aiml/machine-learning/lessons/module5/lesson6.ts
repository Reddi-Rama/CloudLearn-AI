const lesson6 = {

  id: "lesson6",

  title: "Grouped Cross-Validation",

  content: `

Lesson 06

Grouped Cross-Validation


1. Introduction


Not every dataset contains completely independent observations.


Sometimes multiple observations belong to the same:


Customer.


Patient.


Student.


Machine.


Device.


Company.


Household.



2. Why Groups Matter


Suppose a dataset contains several transactions from the same customer.


If some transactions from a customer appear in training and other transactions from the same customer appear in validation, the model may learn customer-specific patterns during training.



3. Example


Customer A:


Transaction 1.


Transaction 2.


Transaction 3.



Customer B:


Transaction 4.


Transaction 5.



4. Problem


A random split could produce:


Training:


Customer A Transaction 1.


Customer A Transaction 2.


Customer B Transaction 4.



Validation:


Customer A Transaction 3.


Customer B Transaction 5.



5. Leakage Risk


The model has already encountered information from Customer A during training.


The validation observation is therefore not completely independent at the customer level.



6. Grouped Cross-Validation


Grouped cross-validation keeps observations belonging to the same group together.


A group should generally appear in either:


Training.


or:


Validation.


not both within the same fold.



7. Example Groups


Group:


Customer ID.


Each customer may have multiple observations.



8. Goal


The model should be evaluated on:


Previously unseen customers.



9. Mathematical View


Let:


gᵢ


represent the group associated with observation i.


A group-aware split attempts to satisfy:


g_train ∩ g_validation = ∅.



10. Why This Is Important


This creates a more realistic evaluation when the production task requires predictions for new groups.



11. GroupKFold


scikit-learn provides:


GroupKFold.



12. Python


from sklearn.model_selection import (
    GroupKFold
)



13. Example Data


Suppose:


10 observations.


5 customers.


Each customer has 2 observations.



14. Groups


Python


groups = [

    "A", "A",

    "B", "B",

    "C", "C",

    "D", "D",

    "E", "E"

]



15. Create Cross-Validator


Python


cv = GroupKFold(
    n_splits=5
)



16. Splitting


Python


for train_idx, test_idx in cv.split(

    X,

    y,

    groups=groups

):

    print(
        train_idx
    )

    print(
        test_idx
    )



17. Important Parameter


groups identifies which observations belong to the same group.



18. Cross-Validation Score


Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=cv,

    groups=groups,

    scoring="accuracy"

)



19. Interpretation


Each validation fold is associated with groups that were not used for training in that fold.



20. Customer Example


Suppose:


Training customers:


A, B, C, D.


Validation customer:


E.



21. Next Fold


Training customers:


A, B, C, E.


Validation customer:


D.



22. Why This Is Better


The model is evaluated on customers it did not encounter during training.



23. Patient Example


Suppose each patient has:


Multiple medical measurements.


If the same patient appears in both training and validation, the model may exploit patient-specific patterns.



24. Correct Evaluation


Use patient ID as the group variable.



25. Machine Example


Suppose a manufacturing dataset contains:


Multiple sensor readings per machine.



26. Group


machine_id.



27. Evaluation Goal


If the deployed model will be used on new machines, validation should test performance on machines that were not present during training.



28. Student Example


Suppose each student has multiple:


Exam records.


Assignment records.


Attendance records.



29. Group


student_id.



30. Important Question


What does "unseen data" mean in the real application?


It may mean:


New rows.


New customers.


New patients.


New machines.


New locations.



31. Evaluation Must Match Deployment


The splitting strategy should represent the type of unseen data expected after deployment.



32. GroupKFold vs KFold


KFold:


Splits observations.


GroupKFold:


Splits groups.



33. Example


With ordinary KFold:


Customer A could appear in training and validation.



With GroupKFold:


Customer A is kept within one side of the split for each fold.



34. GroupShuffleSplit


Another useful strategy is:


GroupShuffleSplit.



35. Purpose


It creates randomized train-test or train-validation splits while keeping groups together.



36. Python


from sklearn.model_selection import (
    GroupShuffleSplit
)


gss = GroupShuffleSplit(

    n_splits=5,

    test_size=0.2,

    random_state=42

)



37. Split


Python


for train_idx, test_idx in gss.split(

    X,

    y,

    groups=groups

):

    print(
        len(train_idx),
        len(test_idx)
    )



38. Difference


GroupKFold is designed around folds.


GroupShuffleSplit repeatedly creates randomized group-based splits.



39. Group Counts


Groups can have different numbers of observations.



40. Example


Customer A:


100 transactions.


Customer B:


5 transactions.



41. Important Consideration


A group-aware split must consider how groups are distributed across folds.


Large differences in group sizes can affect the number of observations in each validation fold.



42. Group Leakage


Leakage can occur when a group identifier or information derived from the group is accidentally used in a way that reveals the validation group.



43. Example


Suppose:


customer_id


is encoded directly as a numerical feature.


This may allow the model to learn arbitrary identity-specific patterns.



44. Better Approach


Use meaningful customer-level features that are available at prediction time and appropriate for the deployment scenario.



45. Group Aggregations


Suppose a customer has:


Previous purchase count.


Average order value.


Total historical spending.



46. Important Timing Question


Were these aggregates calculated only using information available before the prediction?


If not, leakage may occur.



47. Grouped Feature Engineering


For each validation group, group-derived features should be computed in a way that does not use information from the validation observations that would be unavailable at prediction time.



48. Example


Suppose we predict a customer's next purchase.


Using the customer's historical purchases can be valid if those purchases happened before the prediction time.


Using future purchases is leakage.



49. Pipeline Consideration


A pipeline can handle many preprocessing operations.


However, group-based feature construction may require additional care because the grouping information and prediction timing must be respected.



50. Experiment


Create a synthetic dataset containing:


Customer ID.


Transaction amount.


Transaction count.


Target.



51. Example


Python


import numpy as np


rng = np.random.default_rng(
    42
)


groups = np.repeat(
    np.arange(50),
    4
)


X = rng.normal(
    size=(len(groups), 5)
)


y = rng.integers(
    0,
    2,
    size=len(groups)
)



52. GroupKFold


Python


cv = GroupKFold(
    n_splits=5
)



53. Evaluate


Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=cv,

    groups=groups,

    scoring="accuracy"

)



54. Mean


Python


print(
    scores.mean()
)



55. Standard Deviation


Python


print(
    scores.std()
)



56. Verify Group Separation


Python


for train_idx, val_idx in cv.split(

    X,

    y,

    groups

):

    train_groups = set(
        groups[train_idx]
    )

    val_groups = set(
        groups[val_idx]
    )

    print(
        train_groups.isdisjoint(
            val_groups
        )
    )



57. Expected Result


Each fold should print:


True.



58. Why?


Because the training and validation group sets should not overlap.



59. Classification Groups


If the problem is classification and class balance is important, group-aware splitting may need to be combined with strategies that consider both groups and class distribution.


The appropriate method depends on the data structure.



60. Stratified Grouping


Some datasets require:


Group separation.


and:


Class-balance preservation.


These situations require specialized group-aware strategies.



61. Time and Groups


Some datasets have both:


Groups.


and:


Time.



62. Example


Multiple transactions per customer over time.



63. Correct Question


Should validation represent:


New customers?


Future transactions?


Or both?



64. Evaluation Strategy


The split must reflect the actual prediction scenario.



65. Common Applications


Grouped cross-validation is useful for:


Medical datasets.


Customer analytics.


Industrial sensor data.


Education.


Biometrics.


Repeated measurements.


User behavior.



66. Common Mistakes


Mistake 1:


Using ordinary KFold when observations are strongly grouped.


Mistake 2:


Allowing the same patient in training and validation.


Mistake 3:


Using customer-level information that contains future data.


Mistake 4:


Ignoring large differences in group sizes.


Mistake 5:


Assuming group splitting automatically prevents all leakage.



67. Practice


1. What is a group?


2. Why can ordinary KFold be problematic for grouped observations?


3. What does GroupKFold do?


4. Give three examples of groups.


5. Why is patient-level grouping important?


6. What is GroupShuffleSplit?


7. Why can customer aggregates cause leakage?


8. How should evaluation reflect deployment?



68. Quick Check


Question 1


A dataset contains ten measurements per patient.


Should measurements from the same patient freely appear in both training and validation?


Answer:


Not if the goal is to evaluate performance on unseen patients.



Question 2


What identifies the group?


Answer:


A variable such as patient_id, customer_id, or machine_id.



Question 3


What is the main purpose of GroupKFold?


Answer:


To keep observations from the same group together during cross-validation.



69. Summary


Grouped cross-validation is designed for datasets where observations are related through shared groups.


Important ideas include:


Group independence.


GroupKFold.


GroupShuffleSplit.


Customer-level evaluation.


Patient-level evaluation.


Machine-level evaluation.


Group leakage.



70. Extended Study


If observations belong to groups:


G₁, G₂, ..., Gₘ.


A group-aware validation strategy aims to create:


G_train ∩ G_validation = ∅.


This means no group is shared between training and validation within the same split.



71. Final Reflection


The meaning of "unseen data" depends on the problem.


If the deployed system predicts for:


New customers.


New patients.


New machines.


New students.


then evaluation should test the model on groups that were not used for training.


Always ask:


What is the independent unit of prediction?

`

};

export default lesson6;