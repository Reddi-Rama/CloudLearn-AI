const lesson4 = {

  id: "lesson4",

  title: "Overfitting and Underfitting",

  content: `

Lesson 04

Overfitting and Underfitting


A machine learning model learns patterns from training data.

However, learning too little and learning too much can both create problems.

A model that is too simple may fail to capture important relationships.

A model that is too flexible may learn details that are specific to the training data.

These two situations are commonly described as:


Underfitting


and


Overfitting


Understanding these concepts is essential for building models that generalize well.



1. What Is Model Fit?


Model fit describes how well a machine learning model represents the relationship between the input features and the target.


Suppose we want to predict:


House Price


using:


House Area


We collect several observations.


| Area | Price |
|------|-------|
| 500 | 25 |
| 750 | 36 |
| 1000 | 48 |
| 1250 | 61 |
| 1500 | 73 |
| 1750 | 85 |


A model attempts to learn the relationship between:


Area


and


Price.


A good model should capture the important relationship without simply memorizing every individual observation.



2. Three Possible Situations


When training a model, three broad situations can occur:


Underfitting


Good Fit


Overfitting


Conceptually:


Too Simple


↓


Underfitting


↓


Appropriate Complexity


↓


Good Generalization


↓


Too Complex


↓


Overfitting



3. Underfitting


Underfitting occurs when a model is too simple to capture important patterns in the data.


For example, suppose the actual relationship between house area and price is nonlinear.


If we use an extremely simple model that cannot represent the relationship adequately, its predictions may be poor.


Underfitting can result in:


High training error


High test error


Poor predictive performance



4. Example of Underfitting


Suppose a dataset contains a curved relationship:


House Area


↓


Price


The actual pattern might increase slowly at first and then increase more rapidly.


A model that assumes an inappropriate simple relationship may fail to represent this structure.


The model may produce:


Training Error = High


Test Error = High


This indicates that the model has not learned enough useful structure.



5. Causes of Underfitting


Underfitting can occur because:


The model is too simple.


Important features are missing.


The training process is insufficient.


The model has excessive regularization.


The representation of the data is poor.


The chosen algorithm cannot capture the required relationship.


The data itself may contain insufficient useful information.



6. Symptoms of Underfitting


Typical symptoms include:


Low training performance.


Low validation performance.


Low test performance.


Training and validation performance may both be poor.


The model makes systematic errors.


Increasing model flexibility may improve performance.



7. Overfitting


Overfitting occurs when a model learns the training examples too closely and captures patterns that do not generalize to new data.


The model may learn:


Useful relationships


plus


Noise


plus


Training-specific details


As a result:


Training performance becomes very high.


Performance on unseen data becomes substantially worse.



8. Example of Overfitting


Suppose we have a dataset containing:


Study Hours


and:


Exam Score


The true relationship may be approximately:


More study → Higher score


A very flexible model could instead attempt to pass through almost every training observation.


It may reproduce the training examples extremely well.


But when a new student appears, its prediction may be poor.


This is overfitting.



9. Training and Test Performance


Consider the following models.


Model A:


Training Accuracy = 70%


Test Accuracy = 68%


Model B:


Training Accuracy = 94%


Test Accuracy = 91%


Model C:


Training Accuracy = 100%


Test Accuracy = 72%


Model C shows a very large difference between training and test performance.


This can be evidence of overfitting.



10. Generalization Gap


The difference between training performance and test performance can provide useful diagnostic information.


Suppose:


Training Accuracy = 98%


Test Accuracy = 82%


The difference is:


98 - 82 = 16 percentage points


This is a large generalization gap.


A large gap may indicate that the model is learning training-specific patterns.



11. Comparing Underfitting and Overfitting


Underfitting:


Training error → High


Test error → High


Model → Too simple


Learning → Insufficient


Overfitting:


Training error → Very low


Test error → High


Model → Too complex


Learning → Too specific


Good fit:


Training error → Low


Test error → Low


Model → Appropriate complexity


Learning → Useful general patterns



12. A Conceptual Error Curve


Imagine increasing model complexity.


At very low complexity:


Training Error = High


Test Error = High


As complexity increases:


Training Error decreases.


Test Error may also decrease.


Eventually, the test error reaches a useful region.


If complexity continues increasing:


Training Error continues decreasing.


But test error may begin increasing.


Conceptually:


Model Complexity


Low → Medium → High


Training Error:


High → Lower → Very Low


Test Error:


High → Low → Higher


The point where test performance is strongest can depend on the dataset and evaluation procedure.



13. Why Does Training Error Decrease?


As a model becomes more flexible, it gains more ability to represent the training examples.


A flexible model can therefore reduce training error.


For example, a decision tree with:


max_depth = 1


is less flexible than:


max_depth = 10


A deeper tree can represent more complicated relationships.


However, greater flexibility does not automatically mean better performance on unseen data.



14. Why Can Test Error Increase?


A highly flexible model may begin fitting:


Noise


Outliers


Random fluctuations


Dataset-specific patterns


These patterns may not exist in future data.


The model therefore performs very well on training data but poorly on new examples.



15. Noise in Data


Real-world data is rarely perfect.


Noise can come from:


Measurement errors


Incorrect labels


Human mistakes


Sensor errors


Random variation


Data collection problems


Suppose a model is predicting examination scores.


Some students may receive unusual scores because of factors that are not represented in the features.


A highly flexible model might attempt to explain every unusual observation.


This can reduce generalization.



16. Outliers


An outlier is an observation that differs substantially from the majority of observations.


For example:


Study Hours = 2


Score = 98


while most students who study for two hours score around:


50–70


This observation may be legitimate or may represent unusual circumstances or an error.


A model that reacts too strongly to individual outliers can become less reliable.



17. Underfitting and Feature Quality


Underfitting is not always caused by the algorithm itself.


The available features may simply not contain enough useful information.


Suppose we want to predict house prices.


If our only feature is:


House ID


the model has little meaningful information.


Adding useful features such as:


Area


Location


Bedrooms


Age


Bathrooms


may provide the model with information that better represents the target.



18. Overfitting and Irrelevant Features


Adding more features does not always improve a model.


Suppose a house-price dataset contains:


Area


Bedrooms


Location


Age


Bathroom Count


and:


Random Identifier


The random identifier is unlikely to contain useful predictive information.


A flexible model might still find accidental relationships involving such features.


Therefore, irrelevant information can contribute to overfitting.



19. Mathematical View of Overfitting


Suppose our training dataset is:


D = {(x₁, y₁), ..., (xₙ, yₙ)}


A model:


fθ(x)


produces predictions.


Training loss is:


R_train = (1/n) Σ L(yᵢ, fθ(xᵢ))


A highly flexible model may make:


R_train


very small.


However, what matters in practice is also the loss on unseen data:


R_test


or more generally:


Expected Future Loss.


A model is useful when it achieves low prediction error beyond the training examples.



20. Bias and Variance


Overfitting and underfitting can also be understood through:


Bias


and:


Variance.


Bias describes error associated with overly restrictive assumptions.


Variance describes sensitivity to the particular training sample.


High bias:


Model too simple.


High variance:


Model too sensitive to training data.


The goal is to find a useful balance.



21. High Bias


A high-bias model makes strong simplifying assumptions.


For example, suppose the true relationship is nonlinear but the model can represent only a straight line.


The model may consistently miss important structure.


This can produce:


High training error


and:


High test error.


This is commonly associated with underfitting.



22. High Variance


A high-variance model can change substantially when the training dataset changes.


For example, consider a very deep decision tree.


A small change in training observations can result in a substantially different tree structure.


This sensitivity can cause poor generalization.


High variance is commonly associated with overfitting.



23. Bias-Variance Trade-Off


There is often a trade-off between:


Bias


and:


Variance.


Conceptually:


Very Simple Model


→ High Bias


→ Low Variance


Very Complex Model


→ Low Bias


→ High Variance


An appropriate model attempts to balance these sources of error.



24. Regularization


Regularization is a technique used to discourage excessive model complexity.


The objective can be written conceptually as:


Total Objective


=


Prediction Loss


+


Complexity Penalty


The complexity penalty discourages the model from becoming unnecessarily flexible.



25. Ridge Regression Example


Ridge regression adds a penalty based on the squared coefficients.


The objective can be represented as:


Σ(yᵢ - ŷᵢ)² + αΣwⱼ²


where:


yᵢ = Actual target


ŷᵢ = Prediction


wⱼ = Model coefficient


α = Regularization strength


Increasing α generally places stronger pressure on large coefficients.



26. Lasso Regression


Lasso regression uses an absolute-value penalty.


The objective can be represented as:


Σ(yᵢ - ŷᵢ)² + αΣ|wⱼ|


The L1 penalty can encourage some coefficients to become exactly zero.


This can also perform a form of feature selection.



27. Decision Trees and Overfitting


Decision trees are useful for understanding model complexity.


A shallow tree:


max_depth = 1


has limited complexity.


A deeper tree:


max_depth = 10


can represent much more detailed relationships.


If a tree is allowed to grow excessively, it may fit the training data very closely.



28. Python Example: Decision Tree Complexity


Python


from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


data = load_iris()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42,
    stratify=y
)


for depth in [1, 2, 3, 5, None]:

    model = DecisionTreeClassifier(
        max_depth=depth,
        random_state=42
    )

    model.fit(X_train, y_train)

    train_score = model.score(X_train, y_train)
    test_score = model.score(X_test, y_test)

    print(
        "Depth:",
        depth,
        "Training:",
        train_score,
        "Test:",
        test_score
    )


Output


The exact scores depend on the data split and software version.


A typical observation is that increasing tree depth can improve training performance substantially.


At excessive complexity, test performance may stop improving or may decrease.



29. Understanding the Experiment


The loop tests several tree depths.


For each depth:


1. Create the model.


2. Train the model.


3. Calculate training accuracy.


4. Calculate test accuracy.


5. Compare the two values.


This makes it possible to observe how model complexity influences generalization.



30. Python Example: Regularization


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.linear_model import Ridge


data = load_diabetes()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)


for alpha in [0.01, 0.1, 1, 10, 100]:

    model = Ridge(alpha=alpha)

    model.fit(X_train, y_train)

    score = model.score(X_test, y_test)

    print(
        "Alpha:",
        alpha,
        "R²:",
        score
    )


Output


The exact R² values depend on the dataset split and software environment.



31. Interpreting Regularization Strength


The parameter:


alpha


controls the strength of regularization in Ridge regression.


Small alpha:


Less regularization.


Large alpha:


Stronger regularization.


The best value depends on the dataset and should normally be selected using validation or cross-validation rather than guessed from training performance alone.



32. More Training Data


Increasing the amount of useful training data can sometimes reduce overfitting.


Suppose a flexible model is trained using:


50 examples.


It may have limited information about the underlying population.


If we provide:


5,000 representative examples,


the model has much more evidence from which to learn.


However, more data is not a universal solution.


If the new data is noisy, biased, duplicated, or irrelevant, simply increasing dataset size may not solve the problem.



33. Learning Curves


Learning curves show model performance as the amount of training data changes.


For example:


Training Samples:


100


200


500


1000


2000


5000


At each point we can measure:


Training Score


Validation Score


A typical overfitting pattern may show:


Very high training performance


Lower validation performance


As more useful data is added, the validation performance may improve and the gap may decrease.



34. Diagnosing Underfitting


If both training and validation performance are poor, possible causes include:


Model too simple


Insufficient features


Too much regularization


Poor data representation


Insufficient training


Incorrect algorithm


Possible solutions include:


Increasing model flexibility


Adding informative features


Reducing excessive regularization


Improving data preparation



35. Diagnosing Overfitting


If training performance is extremely high while validation performance is substantially lower, possible causes include:


Model too complex


Too little training data


Irrelevant features


Noise


Data leakage in evaluation design


Possible approaches include:


Reducing model complexity


Adding more representative data


Using regularization


Removing irrelevant features


Using cross-validation



36. A Practical Diagnostic Table


| Observation | Possible Interpretation |
|-------------|-------------------------|
| Low training score | Underfitting or weak features |
| Low training and test scores | Model may be too simple |
| Very high training, low test | Possible overfitting |
| High training and high test | Good observed generalization |
| Large train-test gap | Possible high variance |
| Small train-test gap but both poor | Possible high bias |


These are diagnostic clues rather than absolute rules.



37. Cross-Validation and Model Selection


Instead of selecting a model based only on one train/test split, cross-validation can be used.


For example:


Model A:


Mean CV Accuracy = 0.91


Model B:


Mean CV Accuracy = 0.94


Model C:


Mean CV Accuracy = 0.88


The mean cross-validation score provides a more stable basis for comparing the approaches.


The final test set should still be reserved for final evaluation.



38. Model Complexity Is Not the Same as Model Quality


A more complex model is not automatically better.


A simpler model can sometimes generalize better.


A complex model can sometimes capture important nonlinear relationships.


The appropriate level of complexity depends on:


Dataset size


Noise


Feature quality


Problem difficulty


Algorithm


Regularization


Evaluation procedure



39. Real-World Example: Fraud Detection


Suppose a fraud detection model is trained using historical transactions.


A very flexible model may memorize unusual patterns in the training records.


However, fraudulent behaviour changes over time.


A model that has memorized historical details may fail on new fraud patterns.


Therefore, fraud detection systems need:


Representative data


Careful validation


Monitoring


Appropriate complexity


Periodic evaluation



40. Real-World Example: Image Classification


Suppose a model is trained to recognize cats and dogs.


If all training images contain:


Bright backgrounds


Central subjects


Similar camera angles


the model may accidentally learn background or camera-specific patterns.


When presented with images from a different environment, performance may decrease.


This demonstrates why diverse and representative training data matter.



41. Real-World Example: Student Prediction


Suppose a model predicts whether students will pass.


Training data contains:


Study Hours


Attendance


Assignment Scores


Previous Exam Scores


A model might learn useful relationships.


But if the model also receives:


Student ID


as a feature, it may discover accidental relationships with particular training students.


Such relationships may not generalize to new students.



42. Experiment


Train a DecisionTreeClassifier on the Iris dataset.


Test these values:


max_depth = 1


max_depth = 2


max_depth = 3


max_depth = 4


max_depth = 6


max_depth = None


Record:


Training Accuracy


Test Accuracy


Difference


Create:


| Depth | Training Accuracy | Test Accuracy | Difference |
|-------|-------------------|---------------|------------|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 6 | | | |
| None | | | |


Look for evidence of increasing model complexity.



43. Experiment: Regularization


Use Ridge regression.


Try:


alpha = 0.01


alpha = 0.1


alpha = 1


alpha = 10


alpha = 100


Record the test:


R²


MAE


Compare the results.



44. Experiment: Learning Curves


Use:


learning_curve


from:


sklearn.model_selection


Generate training and validation scores for increasing training-set sizes.


Observe:


Does training performance change?


Does validation performance improve?


Does the gap become smaller?


What might happen if more representative data is collected?



45. Common Mistakes


Mistake 1:


Assuming 100% training accuracy means the model is excellent.


Training accuracy alone cannot establish generalization.


Mistake 2:


Always choosing the most complex model.


Complexity can increase variance and overfitting.


Mistake 3:


Always choosing the simplest model.


An overly simple model can underfit.


Mistake 4:


Ignoring the quality of features.


Poor features can make a sophisticated algorithm ineffective.


Mistake 5:


Assuming more data always solves overfitting.


The new data must be useful and representative.


Mistake 6:


Changing the test set repeatedly.


This can compromise the independence of final evaluation.



46. Practice


1. Define underfitting.


2. Define overfitting.


3. What is a generalization gap?


4. Why can training accuracy be misleading?


5. What is model complexity?


6. What is the bias-variance trade-off?


7. How can regularization help?


8. How can more training data help?


9. Why can irrelevant features contribute to overfitting?


10. How can cross-validation help with model selection?



47. Quick Check


Question 1


What is underfitting?


Answer


Underfitting occurs when a model is too simple to capture important patterns in the data.


Question 2


What is overfitting?


Answer


Overfitting occurs when a model learns training-specific patterns too strongly and performs substantially worse on unseen data.


Question 3


Which situation commonly indicates overfitting?


Answer


Very high training performance combined with substantially lower validation or test performance.


Question 4


What does regularization do?


Answer


Regularization adds a penalty that discourages excessive model complexity.


Question 5


Can more training data reduce overfitting?


Answer


Additional representative and useful training data can sometimes reduce overfitting, although it is not guaranteed to solve every problem.



48. Summary


Underfitting means the model is too simple.


Overfitting means the model is too closely fitted to training-specific details.


A good model should learn useful patterns that generalize.


Training performance alone is not enough to evaluate a model.


Validation and test performance provide information about generalization.


Model complexity influences the bias-variance balance.


High bias is commonly associated with underfitting.


High variance is commonly associated with overfitting.


Regularization can control model complexity.


More representative training data can sometimes improve generalization.


Cross-validation can help compare models and hyperparameters.


Feature quality is important for both underfitting and overfitting.



49. Extended Study


A useful conceptual model for prediction error is:


Expected Error


≈


Bias²


+


Variance


+


Irreducible Noise


This decomposition is an intuition rather than a complete description of every practical machine learning problem.


Bias represents systematic error from restrictive assumptions.


Variance represents sensitivity to the particular training dataset.


Irreducible noise represents variation that cannot be completely removed using the available information.


A learning algorithm attempts to find a useful balance among these components.



50. The U-Shaped Test Error Curve


Consider model complexity on the horizontal axis.


Test Error


may behave approximately like:


High


↓


Decreasing


↓


Minimum


↓


Increasing


The minimum region represents a useful complexity range for the given data and evaluation procedure.


Training error often decreases as model flexibility increases.


The important difference is that lower training error does not guarantee lower future error.



51. Why the Best Model Can Change


Suppose the dataset becomes larger.


A model that overfits a small dataset may perform much better when trained using substantially more representative examples.


Similarly, a model that underfits one dataset may become appropriate when useful features are added.


Therefore, there is no universally correct model complexity.


The appropriate complexity depends on the relationship between:


Model


Data


Features


Noise


Dataset size


Evaluation method



52. Reflection


Think about a machine learning model you want to build.


Ask:


How complex should the model be?


What would underfitting look like?


What would overfitting look like?


How would you detect a large generalization gap?


Could more data help?


Could regularization help?


Are some features irrelevant?


Could noise be causing the model to learn unwanted patterns?


How would you evaluate the model on unseen data?


These questions help transform machine learning from simply fitting a model into a systematic process of building models that generalize.

`

};

export default lesson4;