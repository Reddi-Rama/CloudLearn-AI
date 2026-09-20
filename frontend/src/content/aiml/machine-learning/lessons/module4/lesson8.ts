const lesson8 = {

  id: "lesson8",

  title: "Date and Time Features",

  content: `

Lesson 08

Date and Time Features


1. Introduction


Many real-world datasets contain dates and timestamps.


Examples:


Purchase date.


Login time.


Transaction timestamp.


Delivery date.


Sensor reading time.


Appointment date.


Raw dates often contain useful information that should be extracted into machine-learning features.



2. Why Date Features Matter


A date can contain several different types of information:


Year.


Month.


Day.


Weekday.


Hour.


Minute.


Quarter.


Weekend status.


Elapsed time.


Season.


Holiday status.



3. Example


Suppose:


Purchase Date = 2026-09-20.


Possible features include:


Year = 2026.


Month = 9.


Day = 20.


Weekday.


Quarter = 3.


Weekend indicator.



4. Raw Date vs Derived Features


Raw:


2026-09-20.


Derived:


year = 2026.


month = 9.


day = 20.


quarter = 3.


weekday = Sunday.


is_weekend = 1.



5. Converting Strings to Dates


Dates often arrive as strings.


Python:


import pandas as pd


df["date"] = pd.to_datetime(
    df["date"]
)


After conversion, pandas provides convenient date operations.



6. Extracting Year


Python:


df["year"] = (
    df["date"].dt.year
)



7. Extracting Month


Python:


df["month"] = (
    df["date"].dt.month
)



8. Extracting Day


Python:


df["day"] = (
    df["date"].dt.day
)



9. Extracting Day of Week


Python:


df["weekday"] = (
    df["date"].dt.dayofweek
)



10. Day of Week Representation


pandas represents:


Monday = 0.


Tuesday = 1.


Wednesday = 2.


Thursday = 3.


Friday = 4.


Saturday = 5.


Sunday = 6.



11. Weekend Feature


Python:


df["is_weekend"] = (
    df["weekday"] >= 5
).astype(int)



12. Interpretation


is_weekend = 0:


Weekday.


is_weekend = 1:


Saturday or Sunday.



13. Extracting Quarter


Python:


df["quarter"] = (
    df["date"].dt.quarter
)



14. Why Quarter Matters


Business activity may change between:


Q1.


Q2.


Q3.


Q4.


Quarter can therefore represent seasonal business patterns.



15. Extracting Week


A week-based representation can be useful for:


Weekly sales.


Weekly activity.


Operational demand.



16. Hour Features


For timestamps:


Python:


df["hour"] = (
    df["timestamp"].dt.hour
)



17. Minute Features


Python:


df["minute"] = (
    df["timestamp"].dt.minute
)



18. Second Features


Python:


df["second"] = (
    df["timestamp"].dt.second
)



19. Time of Day


Hour can be transformed into meaningful categories.


For example:


Morning.


Afternoon.


Evening.


Night.



20. Example


Python:


def time_of_day(hour):

    if hour < 6:
        return "Night"

    elif hour < 12:
        return "Morning"

    elif hour < 18:
        return "Afternoon"

    else:
        return "Evening"


df["time_of_day"] = (
    df["hour"].apply(
        time_of_day
    )
)



21. Business Example


An online store may experience different demand patterns:


Morning.


Afternoon.


Evening.


Night.


Time-of-day features can help represent those patterns.



22. Elapsed Time


Instead of extracting individual components, we can calculate how much time has passed since an event.



23. Example


Suppose:


Current Date.


Last Purchase Date.


We can calculate:


Days Since Last Purchase.


Formula:


Days Since Last Purchase


=


Current Date


−


Last Purchase Date.



24. Python


df["days_since_purchase"] = (

    current_date
    -
    df["last_purchase"]

).dt.days



25. Recency


Recency describes how recently something happened.


Examples:


Days since last login.


Days since last purchase.


Days since last support request.



26. Frequency


Frequency measures how often events occur.


Examples:


Purchases per month.


Logins per week.


Transactions per day.



27. Duration


Duration measures the time between two events.


Examples:


Delivery duration.


Session duration.


Call duration.


Processing time.



28. Python


df["delivery_days"] = (

    df["delivery_date"]
    -
    df["order_date"]

).dt.days



29. Time Difference in Hours


For timestamps:


Python:


df["duration_hours"] = (

    df["end_time"]
    -
    df["start_time"]

).dt.total_seconds() / 3600



30. Rolling Time Features


Time-series datasets often benefit from rolling statistics.


Examples:


7-day average.


14-day average.


30-day total.



31. Example


Python:


df["sales_7day_mean"] = (

    df["sales"]
    .rolling(7)
    .mean()

)



32. Important Ordering Rule


Rolling features require observations to be ordered correctly by time.


Python:


df = df.sort_values(
    "date"
)



33. Temporal Leakage


When predicting future values, a feature must not use information from the future.



34. Example


Suppose we predict:


Tomorrow's sales.


A valid feature:


Previous 7-day average sales.


An invalid feature:


Average sales including tomorrow.



35. Lag Features


A lag feature uses a previous observation.


For example:


Yesterday's sales.


Python:


df["sales_lag_1"] = (
    df["sales"].shift(1)
)



36. Multiple Lags


Python:


df["sales_lag_7"] = (
    df["sales"].shift(7)
)



37. Why Lag Features Help


Past observations can contain useful information about future observations.


Examples:


Yesterday's demand.


Previous week's demand.


Previous month's revenue.



38. Difference Features


A difference can represent change:


Current value


−


Previous value.



39. Python


df["sales_change"] = (

    df["sales"]
    -
    df["sales"].shift(1)

)



40. Percentage Change


Python:


df["sales_growth"] = (
    df["sales"]
    .pct_change()
)



41. Important Caution


The first observation has no previous value.


Therefore:


lag


and:


difference


features naturally create missing values.



42. Cyclical Features


Time features such as:


Hour.


Month.


Weekday.


are cyclical.


For example:


23:00


and:


00:00


are close in time even though their numerical values are far apart.



43. The Problem with Raw Hour


If hour is represented as:


0 to 23,


a model may interpret:


23


and:


0


as very far apart.



44. Sine-Cosine Representation


A cyclical feature can be represented using:


sin(2πx/P)


and:


cos(2πx/P).


Where:


x = current position.


P = cycle length.



45. Hour Example


For hourly data:


P = 24.


Therefore:


sin(2π × hour / 24)


and:


cos(2π × hour / 24).



46. Python


import numpy as np


df["hour_sin"] = np.sin(

    2
    *
    np.pi
    *
    df["hour"]
    /
    24

)


df["hour_cos"] = np.cos(

    2
    *
    np.pi
    *
    df["hour"]
    /
    24

)



47. Why Use Both?


The sine and cosine values together preserve the position around the cycle.


This allows:


23:00


and:


00:00


to be represented as nearby points in the transformed space.



48. Monthly Cycles


For month:


P = 12.


Python:


df["month_sin"] = np.sin(

    2
    *
    np.pi
    *
    df["month"]
    /
    12

)


df["month_cos"] = np.cos(

    2
    *
    np.pi
    *
    df["month"]
    /
    12

)



49. Weekly Cycles


For weekday:


P = 7.


Python:


df["weekday_sin"] = np.sin(

    2
    *
    np.pi
    *
    df["weekday"]
    /
    7

)


df["weekday_cos"] = np.cos(

    2
    *
    np.pi
    *
    df["weekday"]
    /
    7

)



50. Seasonality


Seasonality refers to repeated patterns over a known time cycle.


Examples:


Higher shopping activity during holidays.


Higher electricity usage during certain seasons.


Weekly changes in website traffic.



51. Holiday Features


A date can be converted into:


Holiday indicator.


For example:


is_holiday = 1


if the date is a holiday.



52. Domain Knowledge


Holiday definitions depend on the application and location.


A feature should use the correct calendar relevant to the problem.



53. Business Days


Some applications distinguish:


Business days.


Weekends.


Public holidays.



54. Date Differences


Useful features include:


Days since signup.


Days since last purchase.


Days until subscription expiry.


Account age.



55. Account Age


Python:


df["account_age_days"] = (

    current_date
    -
    df["signup_date"]

).dt.days



56. Customer Lifetime Features


Examples:


Days since first purchase.


Number of purchases.


Average purchase interval.


Days since latest purchase.



57. Time-Based Aggregation


For a customer:


Purchases during previous 30 days.


Total spending during previous 90 days.


Average order value during previous 60 days.



58. Important Prediction-Time Rule


For each prediction timestamp:


Only information available before or at the allowed cutoff should be used.


This is essential for avoiding temporal leakage.



59. Date Parsing Problems


Real-world dates may have:


Different formats.


Missing values.


Invalid values.


Different time zones.



60. Example


Possible formats:


2026-09-20.


20/09/2026.


09/20/2026.


20-Sep-2026.


Correct parsing depends on the data source.



61. Handling Invalid Dates


Python:


df["date"] = pd.to_datetime(

    df["date"],

    errors="coerce"

)



62. Meaning of coerce


Invalid date values become:


NaT.


NaT means:


Not-a-Time.



63. Missing Date Handling


After conversion, check:


Python:


print(
    df["date"].isna().sum()
)



64. Time Zones


Timestamp data may contain time-zone information.


Mixing time zones incorrectly can cause errors in temporal features.



65. Feature Engineering Workflow


Date and time workflow:


Parse Date


↓

Validate Dates


↓

Sort Chronologically


↓

Extract Components


↓

Create Durations


↓

Create Lag Features


↓

Create Rolling Features


↓

Check Leakage


↓

Validate Features.



66. Experiment


Create a sales dataset containing:


Date.


Sales.


Create:


Year.


Month.


Weekday.


Weekend.


Quarter.



67. Experiment 2


Create:


Lag 1.


Lag 7.


7-day rolling average.



68. Experiment 3


Compare:


Raw hour.


Hour sine/cosine.


Evaluate a model that predicts hourly demand.



69. Experiment 4


Create:


Days since last purchase.


Purchase count.


Average purchase value.


Use them to represent customer behavior.



70. Common Mistakes


Mistake 1:


Treating dates as ordinary strings.


Mistake 2:


Ignoring time ordering.


Mistake 3:


Using future information.


Mistake 4:


Forgetting cyclical behavior.


Mistake 5:


Ignoring missing timestamps.


Mistake 6:


Mixing incompatible time zones.



71. Practice


1. Why are dates useful sources of features?


2. What is a lag feature?


3. What is a rolling feature?


4. What is temporal leakage?


5. Why can hour be represented using sine and cosine?


6. What is recency?


7. What is a duration feature?



72. Quick Check


Question 1


What is a lag feature?


Answer


A feature based on a previous observation in a time-ordered dataset.


Question 2


Why are rolling features useful?


Answer


They summarize recent observations over a moving time window.


Question 3


Why is temporal leakage dangerous?


Answer


It allows information from the future to influence a prediction that should only use information available at prediction time.


Question 4


Why use sine and cosine for cyclical variables?


Answer


They preserve the cyclic relationship between the beginning and end of a cycle.



73. Summary


Dates and timestamps contain many potentially useful signals.


Common date features include:


Year.


Month.


Weekday.


Quarter.


Hour.


Weekend.


Duration.


Recency.


Lag.


Rolling statistics.


Cyclical transformations.


Temporal feature engineering must always respect the time at which a prediction is made.



74. Extended Study


A timestamp can be viewed as a structured representation rather than a single variable.


For a timestamp:


t,


we can derive:


φ(t)


=


[year, month, weekday, hour, duration, lag, rolling statistics, ...].


The objective is to transform temporal information into representations that help the model learn meaningful patterns without introducing future information.



75. Reflection


Before creating time features, ask:


What time is the prediction made?


What information is available then?


Is the data correctly ordered?


Is the feature cyclical?


Should I create lag features?


Should I create rolling statistics?


Could this feature accidentally include future information?

`

};

export default lesson8;