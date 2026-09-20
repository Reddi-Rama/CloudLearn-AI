const lesson8 = {

  id: "lesson8",

  title: "k-Nearest Neighbors Regression",

  content: `

Lesson 08

k-Nearest Neighbors Regression


k-Nearest Neighbors can be used not only for classification but also for regression.

In classification, the nearest neighbors vote for a class.

In regression, the nearest neighbors contribute numerical target values.

The basic idea is:


Find nearby training observations.


Then:


Use their target values to estimate the target of the new observation.


This makes k-NN regression an intuitive way to understand how local patterns can be used for numerical prediction.



1. Classification vs Regression


For classification:


Input


↓


Nearest Neighbors


↓


Majority Vote


↓


Class Prediction


For regression:


Input


↓


Nearest Neighbors


↓


Numerical Target Values


↓


Average or Weighted Average


↓


Numerical Prediction



2. Simple Regression Example


Suppose we want to predict:


House Price


using:


House Area.


Training data:


| Area | Price |
|------|-------|
| 500 | 30 |
| 700 | 40 |
| 900 | 50 |
| 1100 | 62 |
| 1300 | 70 |
| 1500 | 82 |


Suppose a new house has:


Area = 1000


The algorithm finds the closest training observations.



3. Choosing the Neighbors


Suppose:


k = 3


The three nearest areas to:


1000


might be:


900


1100


700


Their prices are:


50


62


40


The basic prediction can be:


Prediction = (50 + 62 + 40) / 3


Prediction = 152 / 3


Prediction ≈ 50.67


The exact result depends on which observations are selected as nearest neighbors.



4. Why Is This Called Local Regression?


The prediction is based primarily on nearby observations.


The model does not need to learn one global equation such as:


y = wx + b


Instead, it uses local information around the new observation.



5. Mathematical View


Suppose the selected neighbors are:


N_k(x)


For a new observation:


x


the basic k-NN regression prediction is:


ŷ = (1/k) Σ yᵢ


where the sum is over the k selected nearest neighbors.


The prediction is therefore the mean target value of those neighbors.



6. Example


Suppose:


k = 5


Neighbor targets:


60


65


70


72


68


Then:


ŷ = (60 + 65 + 70 + 72 + 68) / 5


ŷ = 335 / 5


ŷ = 67


Therefore, the predicted value is:


67.



7. Distance Still Matters


The algorithm must first determine which observations are nearest.


Therefore, the same distance concepts used in k-NN classification also apply here.


For two-dimensional observations:


d(x,z) = √((x₁-z₁)² + (x₂-z₂)²)


The nearest observations are selected according to the chosen distance measure.



8. Feature Scaling


Feature scaling is important when features have different numerical ranges.


Suppose the features are:


Area


and:


Number of Rooms.


If area is measured in thousands while room count is small, the area feature can dominate the distance calculation.


Standardization can help make the feature contributions more comparable.



9. Standardization


The standardization formula is:


z = (x - μ) / σ


where:


x = Original value


μ = Mean


σ = Standard deviation


The transformation is normally fitted using training data.



10. Uniform Weighting


With uniform weighting, each neighbor contributes equally.


For:


k = 4


the prediction is:


ŷ = (y₁ + y₂ + y₃ + y₄) / 4


Distance does not change the contribution once the neighbors have been selected.



11. Distance Weighting


A different approach gives greater influence to closer neighbors.


Conceptually:


Closer Neighbor


→ Higher Weight


Farther Neighbor


→ Lower Weight


In scikit-learn, this can be selected using:


weights="distance"



12. Weighted Average


A weighted prediction can be represented as:


ŷ = Σwᵢyᵢ / Σwᵢ


where:


wᵢ


is the weight assigned to neighbor i.


The exact weighting scheme depends on the implementation.



13. Example of Distance Weighting


Suppose three neighbors have:


Target values:


50


60


80


and weights:


0.8


0.5


0.2


Then:


ŷ = (0.8×50 + 0.5×60 + 0.2×80) / (0.8 + 0.5 + 0.2)


Numerator:


40 + 30 + 16 = 86


Denominator:


1.5


Prediction:


86 / 1.5


≈ 57.33



14. Effect of k


The choice of k affects the prediction.


Small k:


Prediction depends strongly on nearby observations.


Large k:


Prediction uses a wider region of the dataset.



15. Small k in Regression


When:


k = 1


the prediction is simply the target value of the nearest training observation.


For example:


Nearest neighbor target = 75


Prediction = 75


This can be highly sensitive to noise.



16. Large k in Regression


When k becomes large, the prediction begins to reflect a broader portion of the dataset.


If k becomes extremely large, the prediction may approach a global average-like behaviour.


This can reduce sensitivity to local patterns.



17. Bias-Variance Trade-Off


Small k:


Lower bias


Higher variance


Large k:


Higher bias


Lower variance


The appropriate value depends on the data.



18. Python Example: k-NN Regression


Python


from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.neighbors import KNeighborsRegressor
from sklearn.metrics import mean_absolute_error


data = load_diabetes()


X = data.data
y = data.target


X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.25,
    random_state=42
)


model = KNeighborsRegressor(
    n_neighbors=5
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


print("Mean Absolute Error:", mae)


Output


Mean Absolute Error:


A numerical value determined by the selected data split and model configuration.



19. Understanding the Code


The Diabetes dataset contains numerical features and a numerical target.


Therefore, regression is appropriate.


The model is:


KNeighborsRegressor


The number of neighbors is:


5


The model receives the training data.


For every test observation, it finds the nearest training observations and estimates the numerical target.



20. Scaling for k-NN Regression


Python


from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsRegressor


scaler = StandardScaler()


X_train_scaled = scaler.fit_transform(
    X_train
)


X_test_scaled = scaler.transform(
    X_test
)


model = KNeighborsRegressor(
    n_neighbors=5
)


model.fit(
    X_train_scaled,
    y_train
)


predictions = model.predict(
    X_test_scaled
)


print(
    "Predictions:",
    predictions[:5]
)


Output


Predictions:


The output contains numerical predictions for the selected test observations.



21. Evaluating Regression


Common metrics include:


Mean Absolute Error


Mean Squared Error


Root Mean Squared Error


R²


Each metric provides a different perspective on prediction performance.



22. Mean Absolute Error


The formula is:


MAE = (1/n) Σ|yᵢ - ŷᵢ|


MAE measures the average absolute prediction error.


If:


MAE = 10


the average absolute difference between predictions and actual values is 10 target units.



23. Mean Squared Error


The formula is:


MSE = (1/n) Σ(yᵢ - ŷᵢ)²


Because errors are squared, larger errors receive greater influence.



24. Root Mean Squared Error


RMSE is:


RMSE = √MSE


RMSE is expressed in the same units as the target.


This can make it easier to interpret than MSE in some applications.



25. R² Score


R² describes model performance relative to a baseline based on the mean target value.


A common expression is:


R² = 1 - SS_res / SS_tot


where:


SS_res = Sum of squared residuals


SS_tot = Total sum of squares


The interpretation depends on the evaluation setting.



26. Comparing k Values


A practical experiment is to test:


k = 1


k = 3


k = 5


k = 7


k = 11


For each value, calculate:


MAE


MSE


R²


Then compare the validation or cross-validation results.



27. Python Example: Selecting k


Python


from sklearn.model_selection import cross_val_score
from sklearn.neighbors import KNeighborsRegressor


for k in [1, 3, 5, 7, 11]:

    model = KNeighborsRegressor(
        n_neighbors=k
    )

    scores = cross_val_score(
        model,
        X,
        y,
        cv=5,
        scoring="neg_mean_absolute_error"
    )

    mean_mae = -scores.mean()

    print(
        "k:",
        k,
        "Mean CV MAE:",
        mean_mae
    )


Output


The exact values depend on the dataset and cross-validation configuration.



28. Why Is the Score Negative?


scikit-learn's scoring interface follows a convention where higher scores are considered better.


Because lower MAE is better, the scoring value is represented as:


Negative MAE


Therefore, we convert it back using:


-scores.mean()



29. Cross-Validation


Cross-validation helps estimate how the model performs across multiple training and validation splits.


For example:


5-fold cross-validation


creates five evaluation rounds.


The mean validation score can provide a more stable estimate than a single split.



30. Feature Scaling Experiment


Compare:


Model A:


Unscaled features.


Model B:


Standardized features.


Calculate:


MAE


RMSE


R²


Observe whether scaling changes the performance.



31. Distance Metrics


k-NN regression can use different distance definitions.


Possible choices include:


Euclidean


Manhattan


Minkowski


The choice affects which observations are considered neighbors.



32. High-Dimensional Regression


k-NN regression can become less effective as the number of features increases.


In high-dimensional spaces:


Distances become less informative.


Data becomes sparse.


Finding truly similar observations becomes harder.


This is another manifestation of the curse of dimensionality.



33. Irrelevant Features


Suppose we want to predict house prices.


Useful features:


Area


Bedrooms


Location


Age


An irrelevant feature:


Random ID


can distort distances.


Therefore, feature selection can improve nearest-neighbor regression.



34. Outliers


An unusual training observation can strongly affect k-NN regression if it becomes one of the nearest neighbors.


For example:


Most nearby houses:


₹50 lakh


One unusual nearby house:


₹5 crore


The mean can be pulled upward.


Distance weighting or appropriate preprocessing may reduce some effects, but outliers still require investigation.



35. Real-World Example: House Price Prediction


Features:


Area


Bedrooms


Bathrooms


Age


Location Encoding


Target:


House Price


A new house can be compared with similar previously observed houses.


The nearby examples can provide a local estimate of the expected price.



36. Real-World Example: Temperature Prediction


Suppose historical observations contain:


Humidity


Pressure


Wind Speed


Previous Temperature


The target is:


Temperature


A new observation can be compared with nearby historical conditions.


k-NN regression can then estimate the numerical temperature.



37. Real-World Example: Demand Prediction


A retailer wants to estimate:


Daily Product Demand.


Features may include:


Price


Previous Sales


Day of Week


Promotion


Season


A nearest-neighbor model can estimate demand based on historically similar situations.



38. Advantages of k-NN Regression


Advantages include:


Simple concept.


Easy to understand.


Little mathematical training required.


Can model nonlinear relationships.


Can adapt to local patterns.


Useful as a baseline model.



39. Limitations of k-NN Regression


Limitations include:


Prediction can be computationally expensive.


Memory requirements can be large.


Sensitive to feature scaling.


Sensitive to irrelevant features.


Can struggle with high-dimensional data.


Performance depends strongly on the distance metric.


Choice of k is important.



40. Experiment


Use the Diabetes dataset.


Test:


k = 1


k = 3


k = 5


k = 7


k = 11


For each value record:


Training MAE


Validation MAE


R²


Create:


| k | Training MAE | Validation MAE | R² |
|---|--------------|----------------|----|
| 1 | | | |
| 3 | | | |
| 5 | | | |
| 7 | | | |
| 11 | | | |



41. Experiment: Uniform vs Distance


Compare:


weights="uniform"


and:


weights="distance"


Use the same k.


Compare MAE and R².



42. Common Mistakes


Mistake 1:


Forgetting feature scaling.


Mistake 2:


Choosing k using the test set.


Mistake 3:


Using too few neighbors in noisy data.


Mistake 4:


Using too many neighbors and losing local structure.


Mistake 5:


Ignoring irrelevant features.


Mistake 6:


Using k-NN on extremely high-dimensional data without considering its limitations.



43. Practice


1. How does k-NN regression differ from k-NN classification?


2. What does k represent?


3. How is a basic regression prediction calculated?


4. Why is scaling important?


5. What happens when k = 1?


6. What happens when k becomes very large?


7. What is distance weighting?


8. What is MAE?


9. What is RMSE?


10. Why can high dimensionality hurt k-NN?



44. Quick Check


Question 1


What does k-NN regression predict?


Answer


It predicts a numerical target value.


Question 2


How is the basic prediction calculated?


Answer


The target values of the selected nearest neighbors are averaged.


Question 3


What happens when k = 1?


Answer


The prediction equals the target value of the nearest training observation.


Question 4


Why is scaling important?


Answer


Because the algorithm uses distances to determine which observations are nearest.


Question 5


What is distance weighting?


Answer


It gives greater influence to closer neighbors.



45. Summary


k-NN can be used for regression.


Regression predicts numerical values.


The algorithm identifies nearby training observations.


The basic prediction is the mean target value of the k nearest neighbors.


Distance weighting can give greater influence to closer observations.


Feature scaling is important.


Small k can increase variance.


Large k can increase bias.


Cross-validation can help select k.


MAE, MSE, RMSE, and R² can evaluate regression performance.


High dimensionality and irrelevant features can reduce performance.


k-NN regression is especially useful for understanding local prediction.



46. Extended Study


For a new input:


x


the k nearest observations are:


N_k(x)


The basic regression estimator is:


f(x) = (1/k) Σ yᵢ


for:


i ∈ N_k(x).


With distance weights:


f(x) = Σwᵢyᵢ / Σwᵢ


The model therefore estimates the target based on the local neighbourhood of the input.



47. Reflection


Consider a numerical prediction problem.


Ask:


Are similar observations likely to have similar target values?


Are the features meaningful for calculating similarity?


Do the features need scaling?


How much training data is available?


Would k-NN be computationally practical?


What value of k should be selected?


Would uniform or distance weighting make more sense?


These questions help determine whether k-NN regression is appropriate for a problem.

`

};

export default lesson8;