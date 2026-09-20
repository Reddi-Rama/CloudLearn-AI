const lesson13 = {

  id: "lesson13",

  title: "Feature Engineering with Domain Knowledge",

  content: `

Lesson 13

Feature Engineering with Domain Knowledge


1. Introduction


Feature engineering is not only a programming task.


Understanding the domain in which the data was collected can help identify meaningful relationships.


This knowledge is called:


Domain knowledge.



2. What Is Domain Knowledge?


Domain knowledge is understanding of the real-world system represented by the data.


Examples:


Finance.


Healthcare.


Retail.


Education.


Networking.


Manufacturing.


Transportation.



3. Why Domain Knowledge Matters


A dataset may contain dozens or hundreds of columns.


A domain expert may recognize relationships that are not obvious from column names alone.



4. Example: E-Commerce


Suppose an online store contains:


Price.


Quantity.


Discount.


Customer ID.


Order Date.



5. Possible Features


Total order value:


Price × Quantity.


Discount amount.


Discount percentage.


Customer purchase frequency.


Days since last purchase.



6. Total Order Value


Formula:


Order Value


=


Price × Quantity.



7. Python


df["order_value"] = (

    df["price"]

    *

    df["quantity"]

)



8. Discount Percentage


If:


Original Price


and:


Discounted Price


are available:


Discount Percentage


=


(Original Price - Discounted Price)


/


Original Price.



9. Why This Is Domain Knowledge


The feature represents a business concept:


How much discount was actually given relative to the original price.



10. Finance Example


A financial dataset may contain:


Income.


Debt.


Assets.


Loan amount.



11. Debt-to-Income Ratio


A meaningful feature may be:


Debt / Income.



12. Loan-to-Income Ratio


Another possible representation:


Loan Amount / Income.



13. Why Ratios Matter


Absolute values may not tell the complete story.


A debt of:


100,000


means something different for someone earning:


100,000


than for someone earning:


2,000,000.



14. Networking Example


A network monitoring dataset may contain:


Packets.


Bytes.


Duration.



15. Packets per Second


A derived feature can be:


Packets / Duration.



16. Bytes per Second


Another feature:


Bytes / Duration.



17. Average Packet Size


A useful representation can be:


Bytes / Packets.



18. Python


df["packets_per_second"] = (

    df["packets"]

    /

    df["duration"]

)


df["bytes_per_second"] = (

    df["bytes"]

    /

    df["duration"]

)


df["avg_packet_size"] = (

    df["bytes"]

    /

    df["packets"]

)



19. Important Validation


Ratios require valid denominators.


If duration or packet count is zero, the calculation must be handled safely.



20. Manufacturing Example


Suppose a factory dataset contains:


Units Produced.


Defective Units.


Production Time.



21. Defect Rate


A meaningful feature:


Defect Rate


=


Defective Units / Units Produced.



22. Production Rate


Another feature:


Units Produced / Production Time.



23. Why Domain Knowledge Helps


These features directly represent manufacturing concepts.


A model receives information that may be more meaningful than raw measurements alone.



24. Transportation Example


A delivery dataset may contain:


Distance.


Fuel Used.


Time.



25. Fuel Efficiency


Feature:


Distance / Fuel Used.



26. Average Speed


Feature:


Distance / Time.



27. Delivery Delay


Feature:


Actual Delivery Time


−


Expected Delivery Time.



28. Education Example


A student dataset may contain:


Study Hours.


Attendance.


Assignment Completion.



29. Possible Features


Study hours per week.


Attendance percentage.


Assignment completion rate.


Study hours × attendance.



30. Example


If:


Completed Assignments = 8.


Total Assignments = 10.


Completion Rate:


8 / 10


=


0.8.



31. Healthcare Example


Healthcare data may contain:


Age.


Weight.


Height.



32. BMI


A commonly used derived measurement is:


BMI


=


Weight / Height².


Units must be interpreted correctly.



33. Important Domain Caution


Domain-specific formulas should be implemented only when their meaning and units are understood correctly.



34. Time-Based Domain Features


Business knowledge can suggest:


Business hours.


Weekend behavior.


Seasonality.


Holiday effects.



35. Example


A retail store may experience different sales patterns:


Weekdays.


Weekends.


Festivals.


Holiday periods.



36. Holiday Indicator


A useful feature can be:


is_holiday.


It may be:


0.


or:


1.



37. Customer Behavior


E-commerce systems often benefit from:


Recency.


Frequency.


Monetary value.



38. Recency


Days since last purchase.



39. Frequency


Number of purchases during a defined period.



40. Monetary Value


Total or average spending.



41. RFM Representation


These three features can form a compact customer representation:


R


F


M.



42. Product Domain


A product system may use:


Average rating.


Number of reviews.


Return rate.


Discount rate.


Inventory level.



43. Return Rate


Return Rate:


Returned Orders / Total Orders.



44. Inventory Domain


A store may track:


Current stock.


Average daily sales.


Lead time.



45. Stock Coverage


A useful derived concept:


Stock Coverage


=


Current Stock / Average Daily Demand.



46. Why This Helps


The same stock level can mean very different things depending on demand.


100 units may be sufficient for a slow-selling product but insufficient for a fast-selling product.



47. Machine Learning and Domain Rules


Domain rules can also create:


Flags.


Thresholds.


Ratios.


Interactions.



48. Example


A support ticket may be flagged:


High Priority.


if:


Severity is high.


and:


Customer is enterprise.



49. Interaction


Python:


df["enterprise_high_priority"] = (

    (

        df["customer_type"]
        == "Enterprise"

    )

    &

    (

        df["severity"]
        == "High"

    )

).astype(int)



50. Domain Knowledge and Text


Domain-specific keywords can become features.


For example, in technical support:


"timeout"


"DNS"


"authentication"


"packet loss"



51. Keyword Indicator


Python:


df["contains_timeout"] = (

    df["text"]
    .fillna("")
    .str.lower()
    .str.contains(
        "timeout"
    )
    .astype(int)

)



52. Why This Can Help


The feature directly represents a domain concept that may be relevant to the prediction task.



53. Domain Knowledge and Feature Validation


A domain-derived feature should be checked for:


Correct units.


Correct formula.


Correct time period.


Availability at prediction time.


Missing values.



54. Feature Leakage


Domain features can still cause leakage.


For example:


Using a customer's final account status to predict an earlier event.



55. Temporal Domain Leakage


Suppose a feature uses:


Total purchases during the entire year.


to predict:


Whether the customer will purchase in March.


The feature contains future information from April–December.



56. Correct Alternative


Use:


Purchases before the prediction date.



57. Feature Documentation


Production feature engineering should document:


Feature name.


Definition.


Formula.


Units.


Data sources.


Allowed time window.


Missing-value behavior.



58. Example Feature Specification


Feature:


Average Order Value.


Formula:


Total Order Value / Number of Orders.


Unit:


Currency per order.


Availability:


Information known at prediction time.



59. Why Documentation Matters


Without documentation, different systems may calculate the same feature differently.



60. Domain Expert Collaboration


Feature engineering can involve:


Data scientists.


Domain experts.


Software engineers.


Data engineers.



61. Example Collaboration


A domain expert explains:


Which transactions are considered valid.


A data scientist converts that understanding into:


A reproducible feature.



62. Feature Engineering and Business Meaning


A strong feature should answer:


What does this number mean in the real world?



63. Example


Feature:


0.25.


Without context:


It is just a number.


With definition:


Debt-to-income ratio = 0.25.


Now its meaning is clear.



64. Experiment


Choose a domain such as:


Retail.


Finance.


Networking.


Education.


Create five domain-specific features from a small dataset.



65. Experiment 2


Train a baseline model.


Then add:


One domain feature at a time.


Measure the change in validation performance.



66. Experiment 3


Create a feature dictionary containing:


Feature name.


Formula.


Meaning.


Unit.


Availability.



67. Experiment 4


Ask:


Which features would a domain expert expect to see?


Compare those with:


Automatically generated features.



68. Common Mistakes


Mistake 1:


Creating features without understanding their meaning.


Mistake 2:


Using incorrect units.


Mistake 3:


Using future information.


Mistake 4:


Ignoring denominator problems.


Mistake 5:


Creating domain features that duplicate existing information.


Mistake 6:


Failing to document formulas.



69. Practice


1. What is domain knowledge?


2. Why is domain knowledge useful in feature engineering?


3. Give three examples of domain-specific features.


4. What is a feature definition?


5. Why are units important?


6. How can domain features introduce leakage?



70. Quick Check


Question 1


Why is domain knowledge useful?


Answer


It helps identify meaningful relationships and representations that may not be obvious from raw columns.


Question 2


What should a feature specification contain?


Answer


At minimum, its meaning, calculation, units, data source, and availability requirements.


Question 3


Can domain-specific features cause leakage?


Answer


Yes. A domain feature can still use information unavailable at prediction time.



71. Summary


Domain knowledge helps transform raw data into meaningful representations.


Examples include:


Financial ratios.


Business metrics.


Network rates.


Production rates.


Customer behavior measures.


Time-based indicators.


Domain-specific text indicators.


Good domain features should:


Have clear meaning.


Use correct units.


Be reproducible.


Be available at prediction time.


Be validated.



72. Extended Study


Feature engineering can be viewed as translating domain understanding into mathematical representations.


For example:


Business concept


→


Mathematical definition


→


Feature


→


Machine learning input.


This translation is one of the most valuable parts of practical machine learning.



73. Reflection


When working with a new dataset, ask:


What does each column represent?


What relationships are known in this domain?


What ratios are meaningful?


What rates are meaningful?


What time windows matter?


Which events happen before prediction?


Which information would only become available later?


Which features would a domain expert trust?

`

};

export default lesson13;