const lesson16 = {

  id: "lesson16",

  title: "Feature Selection",

  content: `

Lesson 16

Feature Selection


1. Introduction to Feature Selection


A machine learning dataset can contain many features.


Some features may be:


Useful


Redundant


Irrelevant


Noisy


Highly correlated.


Feature selection attempts to identify a useful subset of the original features.



2. Feature Selection vs Feature Extraction


Feature Selection:


Keeps original features.


Example:


100 features


→


20 original features.


Feature Extraction:


Creates new features.


Example:


100 features


→


20 principal components.


PCA is an example of feature extraction.



3. Why Select Features?


Feature selection can help:


Reduce dimensionality.


Reduce computation.


Reduce noise.


Improve interpretability.


Reduce overfitting in some situations.


Simplify models.



4. Example


Suppose a dataset contains:


Age


Income


Experience


Transaction Count


Customer ID


Random Number.


Customer ID may not contain useful predictive information.


Random Number may also be irrelevant.


Feature selection attempts to identify which features should remain.



5. Feature Selection Workflow


A common workflow is:


Original Features


↓

Evaluate Features


↓

Select Useful Features


↓

Train Model.



6. Three Main Families


Common feature-selection approaches include:


Filter Methods


Wrapper Methods


Embedded Methods.



7. Filter Methods


Filter methods evaluate features using statistical properties.


They are generally performed independently of a particular predictive model.


Examples:


Correlation


Mutual Information


ANOVA-style tests.



8. Wrapper Methods


Wrapper methods evaluate subsets of features by training a model.


Examples:


Recursive Feature Elimination.


They can be computationally expensive because many models may need to be trained.



9. Embedded Methods


Embedded methods perform feature selection during model training.


Examples:


Lasso


Tree-based feature importance.


The selection is integrated into the learning process.



10. Correlation


Correlation measures the strength of a linear relationship between two numerical variables.


A correlation close to:


+1


indicates strong positive linear association.


A correlation close to:


-1


indicates strong negative linear association.


A value near:


0


indicates weak linear association under Pearson correlation.



11. Correlation and Redundancy


Suppose:


Feature A


and:


Feature B


have:


correlation = 0.98.


They may contain highly redundant information.


Removing one may simplify the representation.



12. Important Warning


High correlation does not automatically mean:


One feature should be removed.


Two variables can be strongly correlated and both can still be useful.


Domain knowledge and model evaluation matter.



13. Correlation Matrix


Python


import pandas as pd


correlation_matrix = df.corr(
    numeric_only=True
)


print(
    correlation_matrix
)



14. Visualizing Correlation


Python


import matplotlib.pyplot as plt


plt.imshow(
    correlation_matrix
)


plt.colorbar()


plt.title(
    "Feature Correlation Matrix"
)


plt.show()



15. Mutual Information


Mutual information measures statistical dependence between variables.


It can capture certain nonlinear relationships that simple Pearson correlation may miss.



16. Mutual Information Intuition


If knowing:


Feature X


provides information about:


Target Y,


their mutual information can be greater than zero.


Higher mutual information indicates stronger statistical dependence under the chosen estimator.



17. Mutual Information for Classification


Python


from sklearn.feature_selection import mutual_info_classif


scores = mutual_info_classif(
    X,
    y,
    random_state=42
)


print(
    scores
)



18. Ranking Features


The scores can be associated with feature names.


Python


feature_scores = pd.Series(
    scores,
    index=feature_names
)


print(
    feature_scores.sort_values(
        ascending=False
    )
)



19. SelectKBest


scikit-learn provides:


SelectKBest.


It selects the k features with the highest scores according to a chosen statistical test.



20. Classification Example


Python


from sklearn.feature_selection import (
    SelectKBest,
    mutual_info_classif
)


selector = SelectKBest(
    score_func=mutual_info_classif,
    k=5
)


X_selected = selector.fit_transform(
    X,
    y
)



21. Selected Feature Count


Python


print(
    X_selected.shape
)


The number of columns is now:


5.


assuming the input contained at least five usable features.



22. Getting Selected Features


Python


selected_mask = selector.get_support()


selected_features = [
    feature_names[i]
    for i, selected
    in enumerate(selected_mask)
    if selected
]


print(
    selected_features
)



23. Univariate Statistical Tests


For classification, different statistical tests can be used depending on the feature type and assumptions.


One example is:


ANOVA F-test.



24. SelectKBest with F-Test


Python


from sklearn.feature_selection import (
    f_classif
)


selector = SelectKBest(
    score_func=f_classif,
    k=5
)


X_selected = selector.fit_transform(
    X,
    y
)



25. Regression Feature Selection


For regression, a suitable scoring function can be used.


Python


from sklearn.feature_selection import (
    f_regression
)


selector = SelectKBest(
    score_func=f_regression,
    k=5
)


X_selected = selector.fit_transform(
    X,
    y
)



26. Recursive Feature Elimination


Recursive Feature Elimination is commonly abbreviated:


RFE.


It repeatedly trains a model and removes less important features.



27. RFE Workflow


Start:


All Features.


↓

Train Model.


↓

Rank Features.


↓

Remove Weakest Features.


↓

Train Again.


↓

Continue until desired number remains.



28. RFE Example


Python


from sklearn.feature_selection import RFE


from sklearn.linear_model import LogisticRegression


estimator = LogisticRegression(
    max_iter=2000
)


selector = RFE(
    estimator=estimator,
    n_features_to_select=5
)


X_selected = selector.fit_transform(
    X,
    y
)



29. Inspect Selected Features


Python


print(
    selector.support_
)


print(
    selector.ranking_
)


A ranking of:


1


indicates selected features.



30. Embedded Selection with Lasso


Lasso regression uses:


L1 regularization.


Its objective can be represented as:


Loss


+


λ Σ|βⱼ|.


The L1 penalty can drive some coefficients exactly to zero.



31. Lasso for Feature Selection


Python


from sklearn.linear_model import Lasso


model = Lasso(
    alpha=0.01
)


model.fit(
    X,
    y
)


print(
    model.coef_
)



32. Zero Coefficients


If a coefficient becomes:


0,


the corresponding feature does not contribute to the fitted linear prediction under that model.


This can be used as a form of feature selection.



33. Tree-Based Feature Importance


Tree-based models can provide feature importance estimates.


Python


from sklearn.ensemble import RandomForestClassifier


model = RandomForestClassifier(
    n_estimators=200,
    random_state=42
)


model.fit(
    X,
    y
)


importance = model.feature_importances_


print(
    importance
)



34. Ranking Tree Features


Python


feature_importance = pd.Series(
    importance,
    index=feature_names
)


print(
    feature_importance.sort_values(
        ascending=False
    )
)



35. Important Warning About Feature Importance


Feature importance is not the same as causality.


A highly important feature does not prove that changing that feature will cause the target to change.



36. Permutation Importance


Permutation importance measures how model performance changes when a feature's values are shuffled.


If shuffling a feature significantly reduces performance, the model relied on information from that feature.



37. Python Permutation Importance


Python


from sklearn.inspection import permutation_importance


result = permutation_importance(
    model,
    X,
    y,
    random_state=42
)


print(
    result.importances_mean
)



38. Why Permutation Importance Is Useful


It evaluates importance in the context of a fitted model.


However, correlated features can make interpretation difficult.


If two features contain similar information, shuffling one may not hurt much because the model can still use the other.



39. Feature Selection and Correlated Features


Suppose:


Feature A


and:


Feature B


are highly correlated.


A model may use either one.


Removing one can simplify the model.


But removing the wrong one may reduce useful information.



40. Feature Selection and Data Leakage


Feature selection is itself a learned preprocessing step.


Therefore, in supervised learning, feature selection should be fitted only using training data within the evaluation workflow.



41. Correct Workflow


Train/Test Split


↓

Fit Feature Selector on Training Data


↓

Transform Training Data


↓

Transform Test Data


↓

Train Model.



42. Pipeline with SelectKBest


Python


from sklearn.pipeline import Pipeline


pipeline = Pipeline([

    (
        "selector",
        SelectKBest(
            score_func=f_classif,
            k=5
        )
    ),

    (
        "model",
        LogisticRegression(
            max_iter=2000
        )
    )

])


pipeline.fit(
    X_train,
    y_train
)



43. Why Put Feature Selection in a Pipeline?


During cross-validation, each fold should determine its selected features using only its training portion.


A pipeline ensures that the selector is refitted appropriately for each training fold.



44. Feature Selection and Scaling


Some selection methods do not require scaling.


For example:


Tree-based importance.


Others may depend on numerical representation.


The required preprocessing should therefore depend on the selection method.



45. Feature Selection and PCA


Feature selection:


Keeps original columns.


PCA:


Creates new components.


Example:


Selection:


Age


Income


Experience.


PCA:


PC1


PC2.



46. Feature Selection and Interpretability


Feature selection can improve interpretability because the resulting model still uses recognizable original variables.


For example:


Age


Income


Experience.


This may be easier to explain than:


PC1


PC2.


However, interpretability depends on the model and application.



47. Number of Features


Choosing too many features can lead to:


More computation


More noise


Potential overfitting.


Choosing too few features can lead to:


Information loss


Lower predictive performance.



48. Selecting k


The value of:


k


can be selected using:


Cross-validation


Domain knowledge


Model performance


Computational constraints.



49. Grid Search for k


Python


from sklearn.model_selection import GridSearchCV


pipeline = Pipeline([

    (
        "selector",
        SelectKBest(
            score_func=f_classif
        )
    ),

    (
        "model",
        LogisticRegression(
            max_iter=2000
        )
    )

])


param_grid = {

    "selector__k": [
        3,
        5,
        10,
        "all"
    ]

}


search = GridSearchCV(
    pipeline,
    param_grid,
    cv=5
)


search.fit(
    X_train,
    y_train
)



50. Best Number of Features


Python


print(
    search.best_params_
)


This identifies the selected value of:


k


according to the chosen cross-validation scoring procedure.



51. Feature Selection for High-Dimensional Data


Feature selection can be particularly useful when:


Number of features


is much larger than:


Number of observations.


Examples:


Text classification


Genomics


Sensor systems.



52. Text Data


Text representations can contain:


Thousands of features.


Feature selection can remove weak features and reduce computational cost.



53. Important Warning for Text


Sparse text data should be handled with methods designed for sparse matrices.


Do not blindly convert a huge sparse matrix into a dense array.



54. Experiment: Correlation


Create several numerical features.


Calculate the correlation matrix.


Identify highly correlated feature pairs.


Train a model:


Before removing redundant features.


After removing selected features.


Compare the results.



55. Experiment: SelectKBest


Try:


k = 3


k = 5


k = 10.


Record:


Validation score


Number of features.


Plot:


Number of features


against:


Model performance.



56. Experiment: RFE


Use:


LogisticRegression


with:


RFE.


Try different numbers of selected features.


Compare performance and selected variables.



57. Experiment: Lasso


Train Lasso using different:


alpha


values.


Observe how many coefficients become zero.



58. Experiment: Tree Importance


Train a Random Forest.


Rank features by importance.


Select the highest-ranked features.


Retrain another model using only those features.


Compare the performance.



59. Common Mistakes


Mistake 1:


Selecting features using the complete dataset before splitting.


Mistake 2:


Assuming high correlation automatically means a feature should be removed.


Mistake 3:


Confusing feature selection with PCA.


Mistake 4:


Treating feature importance as causality.


Mistake 5:


Selecting too few features.


Mistake 6:


Selecting features only because they look important without validation.


Mistake 7:


Ignoring correlated predictors when interpreting importance.



60. Practice


1. What is feature selection?


2. How is feature selection different from feature extraction?


3. What are filter methods?


4. What are wrapper methods?


5. What are embedded methods?


6. What is SelectKBest?


7. What is RFE?


8. How can Lasso perform feature selection?


9. What is permutation importance?


10. Why should feature selection be inside a pipeline?



61. Quick Check


Question 1


What does feature selection do?


Answer


It selects a subset of the original features.


Question 2


Does PCA perform feature selection?


Answer


No. PCA performs feature extraction.


Question 3


What does RFE stand for?


Answer


Recursive Feature Elimination.


Question 4


Why can Lasso remove features?


Answer


Its L1 penalty can drive some model coefficients to zero.


Question 5


Should feature selection use the test set during fitting?


Answer


No.



62. Summary


Feature selection chooses useful original features.


Three major approaches are:


Filter


Wrapper


Embedded.


Filter methods include:


Correlation


Mutual Information


Statistical tests.


Wrapper methods include:


RFE.


Embedded methods include:


Lasso


Tree-based importance.


Permutation importance evaluates model dependence on features.


Feature selection can reduce computation and improve interpretability.


Feature selection must be performed without leaking test information.



63. Extended Study


Suppose a model has:


p


features.


Feature selection creates a subset:


S ⊆ {1,2,...,p}.


The model is then trained using:


X_S.


The goal is not simply to minimize the number of features.


The goal is to find a useful balance between:


Predictive performance


Complexity


Interpretability


Generalization.



64. Reflection


Before selecting features, ask:


Are some features redundant?


Are some features irrelevant?


How many observations are available?


How many features are available?


Which selection method fits the model?


Could selection introduce leakage?


Should selection happen inside cross-validation?


Is interpretability important?


How will the selected subset be validated?

`

};

export default lesson16;