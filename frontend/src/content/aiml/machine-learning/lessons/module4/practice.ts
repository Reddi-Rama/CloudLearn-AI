const practice = {

  id: "practice",

  title: "Module 4 Practice — Feature Engineering",

  content: `

Module 4

Feature Engineering

Practice


1. Basic Concepts


1. What is a feature?


2. What is feature engineering?


3. Why are features important for machine learning?


4. What is the difference between feature engineering and feature selection?


5. What is a derived feature?


6. Give five examples of engineered features.



2. Feature Creation


7. Create a profit feature from:


revenue


cost.


8. Create a profit-margin feature.


9. Create a revenue-per-customer feature.


10. Create a distance-per-hour feature.


11. Create a transaction-count feature for each customer.


12. Create an average transaction value feature.



3. Ratio Features


13. Explain why ratios can be useful.


14. Create a debt-to-income ratio.


15. What problem occurs when the denominator is zero?


16. Write Python code that safely creates a ratio.


17. Give three examples of meaningful ratio features.



4. Difference and Change Features


18. Create a temperature-change feature.


19. Create a balance-change feature.


20. Write the formula for percentage change.


21. Explain why percentage change can fail when the previous value is zero.



5. Polynomial Features


22. What is a polynomial feature?


23. What does degree 2 mean?


24. What features are generated from x using degree 3?


25. Why can polynomial features model nonlinear relationships?


26. Write Python code using PolynomialFeatures.


27. Why can high polynomial degrees cause overfitting?


28. Why can scaling be useful after polynomial expansion?



6. Interaction Features


29. What is an interaction feature?


30. Create an interaction between:


income


age.


31. Explain the difference between:


x₁ + x₂


and:


x₁x₂.


32. Why can interaction features cause feature explosion?


33. When are interaction features especially useful?


34. Write Python code using interaction_only=True.



7. Binning


35. What is binning?


36. What is discretization?


37. Explain equal-width binning.


38. Explain quantile binning.


39. What is the difference between pandas.cut and pandas.qcut?


40. Create five age groups using pandas.cut.


41. Why can binning lose information?


42. Why can too many bins be problematic?



8. Date and Time Features


43. Convert a date column into pandas datetime format.


44. Extract year.


45. Extract month.


46. Extract weekday.


47. Create an is_weekend feature.


48. Create a quarter feature.


49. Create days_since_purchase.


50. What is a lag feature?


51. What is a rolling feature?


52. Why can temporal leakage occur?



9. Cyclical Features


53. Why is hour a cyclical variable?


54. Why can raw hour values cause a representation problem?


55. Write the sine transformation for hour.


56. Write the cosine transformation for hour.


57. Why are both sine and cosine used?



10. Text Features


58. What is text feature engineering?


59. Create a character-count feature.


60. Create a word-count feature.


61. What is Bag of Words?


62. What is TF-IDF?


63. What is a unigram?


64. What is a bigram?


65. What is a trigram?


66. Why are text feature matrices often sparse?



11. Categorical Features


67. What is a categorical feature?


68. What is the difference between nominal and ordinal categories?


69. What is one-hot encoding?


70. Why should arbitrary integer encoding usually not be used for nominal categories?


71. What is ordinal encoding?


72. When is ordinal encoding appropriate?


73. What is frequency encoding?


74. What is target encoding?


75. Why can target encoding cause leakage?



12. Numerical Features


76. What is standardization?


77. Write the standardization formula.


78. What is Min-Max scaling?


79. Write the Min-Max formula.


80. What is RobustScaler?


81. What is IQR?


82. Why can log transformation help with skewed data?



13. Outliers


83. What is an outlier?


84. Does every outlier represent an error?


85. Explain the IQR outlier rule.


86. What is capping?


87. What is winsorization?


88. Why can outliers affect StandardScaler?


89. Why can outliers affect MinMaxScaler?


90. Why can RobustScaler help?



14. Domain Knowledge


91. What is domain knowledge?


92. Give three domain-specific features for e-commerce.


93. Give three domain-specific features for networking.


94. Give three domain-specific features for finance.


95. Why are units important when creating features?



15. Automated Feature Engineering


96. What is automated feature engineering?


97. Why can automated feature engineering be useful?


98. What is feature explosion?


99. Why must automatically generated features be validated?


100. Why is leakage still possible with automated feature engineering?



16. Pipelines


101. What is a machine learning pipeline?


102. Why should preprocessing be included in a pipeline?


103. What is ColumnTransformer?


104. What is a custom transformer?


105. Why are pipelines useful with cross-validation?


106. Why should the complete pipeline be saved for deployment?



17. Scenario-Based Questions


107. A dataset contains:


income


debt.


What feature would you create and why?


108. A sales dataset contains:


date


sales.


What temporal features could be created?


109. A customer dataset contains:


city.


What encoding strategy could be used?


110. A dataset contains:


income


with strong right skew.


What transformation might you investigate?


111. A dataset contains many extreme income values.


Which scaling method might be more resistant to those values?


112. A linear model performs poorly on a clearly curved relationship.


What feature-engineering technique could you try?



18. Debugging Questions


113. A ratio feature contains infinity.


What could have caused it?


114. A model performs extremely well during validation but poorly in production.


What feature-engineering problem might you investigate?


115. A new city appears during prediction and the encoder fails.


How can this be handled?


116. A rolling average accidentally includes future observations.


What type of problem is this?


117. A categorical city variable is encoded as:


Mumbai = 0.


Delhi = 1.


Chennai = 2.


Why can this be problematic?



19. Practical Coding Tasks


118. Create a feature:


profit = revenue - cost.


119. Create:


profit_margin.


120. Create:


age_squared.


121. Create:


income_age.


122. Create:


is_weekend.


123. Create:


days_since_purchase.


124. Create:


word_count.


125. Create:


log_income.


126. Create:


income_capped.



20. Mini Projects


127. Build an e-commerce feature-engineering workflow.


Use:


price.


quantity.


discount.


customer_id.


date.



128. Build a customer feature table containing:


total spending.


average spending.


purchase count.


recency.



129. Build a sales dataset and create:


month.


weekday.


quarter.


weekend.


lag sales.



130. Build a text classification baseline using:


TF-IDF.


Logistic Regression.



131. Build a mixed-data pipeline containing:


numerical features.


categorical features.


missing-value handling.


scaling.


one-hot encoding.



21. Challenge Questions


132. Why should feature engineering decisions be made with the prediction time in mind?


133. Why can feature engineering improve a simple model?


134. Why can feature engineering sometimes make a model worse?


135. Why is feature quantity not the same as feature quality?


136. Why can polynomial features increase computational cost?


137. Why can categorical variables produce thousands of columns?


138. Why should generated features be documented?



22. Final Practice Challenge


Build a complete feature-engineering pipeline for a fictional customer-purchase prediction dataset.


The dataset should contain:


Age.


Income.


City.


Membership.


Purchase Date.


Previous Purchases.


Total Spending.



Create at least:


One ratio feature.


One date feature.


One categorical representation.


One numerical transformation.


One behavioral feature.


One interaction feature.


One validation step.


One complete pipeline.



23. Expected Workflow


Raw Dataset


↓

Data Analysis


↓

Train/Test Split


↓

Feature Creation


↓

Preprocessing


↓

Feature Validation


↓

Model


↓

Cross-Validation


↓

Final Test Evaluation.



24. Final Reflection


Feature engineering is not about creating as many columns as possible.


The objective is to create meaningful, reliable, and reproducible representations that help a model learn useful patterns.

`

};

export default practice;