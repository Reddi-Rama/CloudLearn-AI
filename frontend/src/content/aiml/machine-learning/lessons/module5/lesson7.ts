const lesson7 = {

  id: "lesson7",

  title: "Time Series Cross-Validation",

  content: `

Lesson 07

Time Series Cross-Validation


1. Introduction


Many machine learning datasets contain a time dimension.


Examples include:


Daily sales.


Stock prices.


Weather measurements.


Website traffic.


Sensor readings.


Energy consumption.


Network activity.



2. Why Time Matters


In ordinary machine learning, observations are often assumed to be independent.


Time-dependent observations are different.


Past observations can influence future observations.



3. Prediction Direction


A typical time-series prediction problem has the direction:


Past


→


Future.



4. Example


Suppose we want to predict:


Tomorrow's sales.


We can use:


Yesterday's sales.


Last week's sales.


Previous customer activity.



5. What Should We Not Use?


We should not use information from:


Tomorrow.


Next week.


The future period being predicted.



6. Temporal Leakage


Temporal leakage occurs when information from the future becomes available to the model during training or feature construction even though that information would not be available at prediction time.



7. Why Random Splitting Is Dangerous


Suppose data covers:


January.


February.


March.


April.



8. Random Split


A random split might place:


April observations in training.


January observations in validation.



9. Problem


The model has effectively learned from future observations while being evaluated on earlier observations.



10. Real Deployment


In production, we normally predict:


Future.


using:


Past.



11. Correct Evaluation


The evaluation procedure should preserve the chronological direction of the prediction problem.



12. TimeSeriesSplit


scikit-learn provides:


TimeSeriesSplit.



13. Python


from sklearn.model_selection import (
    TimeSeriesSplit
)



14. Create Splitter


Python


tscv = TimeSeriesSplit(
    n_splits=5
)



15. Basic Idea


Instead of randomly mixing observations, TimeSeriesSplit creates progressively later validation periods.



16. Conceptual Example


Fold 1:


Train:


Early observations.


Validation:


Next time period.



17. Fold 2


Train:


Earlier observations + Fold 1 validation period.


Validation:


Next time period.



18. Fold 3


Train:


All earlier available observations.


Validation:


Next time period.



19. Expanding Training Window


This creates an expanding training window.


The training set grows as time progresses.



20. Example


Suppose observations are:


1 2 3 4 5 6 7 8 9 10.



21. Conceptual Splits


Fold 1:


Train:


1 2 3 4 5.


Validate:


6.



22. Fold 2


Train:


1 2 3 4 5 6.


Validate:


7.



23. Fold 3


Train:


1 2 3 4 5 6 7.


Validate:


8.



24. Fold 4


Train:


1 2 3 4 5 6 7 8.


Validate:


9.



25. Fold 5


Train:


1 2 3 4 5 6 7 8 9.


Validate:


10.



26. Actual Split Sizes


The exact sizes depend on:


Number of observations.


Number of splits.


Parameters such as test_size.



27. Python


tscv = TimeSeriesSplit(

    n_splits=5

)



28. Inspect Splits


Python


for train_idx, test_idx in tscv.split(X):

    print(
        "Train:",
        train_idx
    )

    print(
        "Validation:",
        test_idx
    )



29. Important Property


The validation observations occur later in time than the corresponding training observations.



30. Why Is This Realistic?


Because the model is intended to learn from historical data and predict future data.



31. Forecasting Example


Suppose:


January–June:


Training history.


July:


Validation period.



32. Next Fold


January–July:


Training history.


August:


Validation period.



33. Expanding Window


This is sometimes called:


Expanding-window validation.



34. Rolling Window


Another strategy uses a fixed-size historical window.


Example:


Train:


January–March.


Validate:


April.



35. Next Round


Train:


February–April.


Validate:


May.



36. Difference


Expanding window:


Training history grows.


Rolling window:


Training window moves forward while maintaining approximately fixed size.



37. When Rolling Windows Can Help


A fixed window may be useful when older observations become less relevant because the underlying process changes over time.



38. TimeSeriesSplit Parameters


TimeSeriesSplit supports parameters such as:


n_splits.


test_size.


gap.



39. Gap


A gap creates a separation between the end of the training data and the beginning of the validation data.



40. Why Use a Gap?


A gap can be useful when there is a period during which information should not be considered immediately available.



41. Example


Suppose a feature depends on information that becomes available with delay.


A gap can help represent that operational delay in validation.



42. Python


tscv = TimeSeriesSplit(

    n_splits=5,

    gap=2

)



43. Test Size


A fixed validation size can also be specified.



44. Python


tscv = TimeSeriesSplit(

    n_splits=5,

    test_size=10

)



45. Test Size Meaning


Each validation split can contain:


10 observations.


subject to the available data and splitter configuration.



46. Feature Engineering for Time Series


Common features include:


Lag values.


Rolling averages.


Rolling sums.


Expanding statistics.


Day of week.


Month.


Season.


Trend indicators.



47. Lag Feature


A lag feature uses a previous observation.



48. Example


Today's sales:


sales_t.


Yesterday's sales:


sales_(t−1).



49. Lag Formula


Lag 1:


X_t−1.



50. Python


df["sales_lag_1"] = (

    df["sales"]

    .shift(1)

)



51. Lag 7


For daily data:


Lag 7:


Sales from approximately one week earlier.



52. Python


df["sales_lag_7"] = (

    df["sales"]

    .shift(7)

)



53. Rolling Average


A rolling average summarizes recent historical observations.



54. Example


Three-day rolling average:


mean of the previous three relevant observations.



55. Leakage Warning


A rolling feature must be constructed so that it does not include the target period or future observations.



56. Incorrect Concept


Using:


sales_t.


to predict:


sales_t.


This directly exposes the target.



57. Safer Concept


Use:


sales_(t−1).


sales_(t−2).


sales_(t−3).


to predict:


sales_t.



58. Shift Before Rolling


A common pattern is:


shift first.


then:


rolling.



59. Python


df["rolling_mean_3"] = (

    df["sales"]

    .shift(1)

    .rolling(3)

    .mean()

)



60. Why shift(1)?


It ensures the current target observation is not included in the rolling window.



61. Time-Based Train-Test Split


For a final holdout evaluation, preserve chronological order.



62. Example


Training:


January through September.


Test:


October through December.



63. Python


split_point = int(

    len(df) * 0.8

)


train = df.iloc[
    :split_point
]


test = df.iloc[
    split_point:
]



64. Important Warning


Do not randomly shuffle a time series simply because random train-test splitting is convenient.



65. Pipeline


Time-aware preprocessing can also be placed inside a pipeline where appropriate.



66. Example


Python


from sklearn.pipeline import (
    Pipeline
)


from sklearn.preprocessing import (
    StandardScaler
)


from sklearn.linear_model import (
    Ridge
)


pipeline = Pipeline([

    (
        "scaler",
        StandardScaler()
    ),

    (
        "model",
        Ridge()
    )

])



67. Cross-Validation


Python


scores = cross_val_score(

    pipeline,

    X,

    y,

    cv=tscv,

    scoring="neg_mean_absolute_error"

)



68. Convert MAE


Python


mae = -scores.mean()


print(
    mae
)



69. Time Series Metrics


Common metrics include:


MAE.


MSE.


RMSE.


MAPE.


sMAPE.


R² in appropriate settings.



70. Metric Selection


Choose the metric based on:


Business objective.


Scale of target.


Cost of errors.


Presence of zeros.


Interpretability.



71. MAPE Warning


MAPE can behave poorly when actual values are zero or very close to zero.



72. Forecast Horizon


The validation design should also reflect the real forecast horizon.



73. Example


If the production system predicts:


7 days ahead.


The validation setup should represent approximately:


7-day-ahead prediction.



74. Multi-Step Forecasting


Some systems predict:


Multiple future periods.


For example:


Tomorrow.


Day 2.


Day 3.


Day 4.



75. Evaluation


The validation design should reflect how the model will actually be used.



76. Concept Drift


Time-series data may change over time.


Examples:


Customer behavior changes.


Seasonality changes.


Economic conditions change.


Technology changes.



77. Why This Matters


A model trained on old data may not perform equally well on newer data.



78. Time-Based Evaluation


Chronological validation provides evidence about how performance changes across time.



79. Experiment


Create a synthetic time series.


Python


import numpy as np


import pandas as pd


rng = np.random.default_rng(
    42
)


n = 200


dates = pd.date_range(

    "2025-01-01",

    periods=n,

    freq="D"

)


trend = np.arange(n) * 0.1


noise = rng.normal(
    0,
    1,
    n
)


sales = (

    50

    + trend

    + noise

)


df = pd.DataFrame({

    "date": dates,

    "sales": sales

})



80. Create Lag


Python


df["lag_1"] = (

    df["sales"]

    .shift(1)

)



81. Remove Missing Rows


Python


df = df.dropna()



82. Define X and y


Python


X = df[
    ["lag_1"]
]


y = df[
    "sales"
]



83. TimeSeriesSplit


Python


tscv = TimeSeriesSplit(

    n_splits=5

)



84. Model


Python


from sklearn.linear_model import (
    LinearRegression
)


model = LinearRegression()



85. Evaluate


Python


scores = cross_val_score(

    model,

    X,

    y,

    cv=tscv,

    scoring="neg_mean_absolute_error"

)



86. Output


Python


print(
    -scores
)


print(
    -scores.mean()
)



87. Interpretation


The result estimates performance across multiple chronological validation periods.



88. Common Mistakes


Mistake 1:


Randomly shuffling time-series observations.


Mistake 2:


Using future values as features.


Mistake 3:


Including the target period in a rolling feature.


Mistake 4:


Ignoring publication or availability delays.


Mistake 5:


Using a metric without considering zeros and scale.


Mistake 6:


Ignoring concept drift.



89. Practice


1. Why is random KFold often inappropriate for time-series data?


2. What is temporal leakage?


3. What does TimeSeriesSplit do?


4. What is an expanding window?


5. What is a rolling window?


6. What is a lag feature?


7. Why should shift often be used before rolling?


8. What is the purpose of the gap parameter?


9. Why should the forecast horizon influence validation design?


10. What is concept drift?



90. Quick Check


Question 1


You are predicting next month's sales.


Should next month's sales be used as a training feature?


Answer:


No.



Question 2


Why can random train-test splitting be dangerous for time-series data?


Answer:


It can allow future observations to influence training while earlier observations are used for validation.



Question 3


What does a lag-1 feature represent?


Answer:


The previous time-step value.



Question 4


Why might a gap be useful?


Answer:


To represent a delay between the end of training information and the beginning of the validation period.



91. Summary


Time-series cross-validation respects chronological order.


Important concepts include:


Temporal leakage.


TimeSeriesSplit.


Expanding windows.


Rolling windows.


Lag features.


Rolling features.


Gaps.


Forecast horizons.


Concept drift.



92. Extended Study


For a time-indexed prediction:


X_t


represents information available before or at the prediction time.


The model produces:


ŷ_t = f(X_t).


A valid feature should satisfy the availability condition:


Feature information time ≤ Prediction time.



93. Final Reflection


For time-dependent machine learning, the most important question is:


"Would this information actually be available at the moment the prediction is made?"


If the answer is no, the feature or validation design may contain temporal leakage.


A realistic time-series evaluation should reproduce the direction:


Past


→


Future.


That principle is more important than simply choosing a particular number of folds.

`

};

export default lesson7;