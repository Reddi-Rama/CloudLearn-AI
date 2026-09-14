const lesson6 = {
  id: "lesson6",

  title: "Understanding ML Problems",

  content: `
Lesson 06

Understanding ML Problems


Understanding the problem is one of the most important parts of developing a machine learning system.

Before selecting an algorithm, we need to understand what question we are trying to answer, what information is available, whether the available data can answer the question, what features can be extracted, and how success will be measured.

A machine learning algorithm should not be selected simply because it is popular.

The problem should be understood first.


1. Start With the Question

Every machine learning project begins with a question.

Examples:

Will this customer purchase a product?

What will the house price be?

Is this email spam?

Which species does this flower belong to?

Will this customer leave the service?

The question determines what kind of prediction or analysis is required.


2. Turn a Real Problem Into an ML Problem

A real-world problem is often described in business or application language.

For example:

A company wants to identify customers who are likely to cancel their subscription.

This can be converted into a machine learning problem:

Input:

Customer information and previous activity

Target:

Will cancel or will not cancel

Output:

A predicted class


3. The Main Questions to Ask

Before building a model, ask:

What question am I trying to answer?

Can the available data answer this question?

Do I have enough data?

Which features are available?

Will the selected features support the required prediction?

How will success be measured?

How will the machine learning system interact with the rest of the application?

These questions help prevent building a technically correct model for the wrong problem.


4. Knowing the Data

The data must be understood before model construction begins.

Suppose a dataset contains information about customers.

Possible properties include:

Age

Location

Purchase frequency

Average order value

Number of previous purchases

If the goal is to predict customer spending, these features may contain useful information.

If the dataset contains only a customer identification number, there may not be enough useful information to make the required prediction.


5. Information Must Exist in the Data

A machine learning algorithm cannot create information that is completely absent from its input data.

Consider a prediction problem where the only available feature is a person's surname.

That feature does not contain enough reliable information to answer many unrelated questions.

The solution is not simply to choose a more complex algorithm.

The solution may require collecting better features.


6. Examples of Problem Formulation

Example A

Problem:

Predict whether an email is spam.

Input:

Email information

Target:

Spam or Not Spam

Problem Type:

Binary Classification


Example B

Problem:

Predict the annual income of a person.

Input:

Relevant personal and professional information

Target:

Annual Income

Problem Type:

Regression


Example C

Problem:

Group customers according to similar purchasing behaviour.

Input:

Customer records

Target:

No predefined target

Problem Type:

Unsupervised Learning


7. The Difference Between the Problem and the Algorithm

A common beginner mistake is:

Dataset → Pick Algorithm → Train Model

A better process is:

Problem
↓
Available Data
↓
Problem Formulation
↓
Features and Target
↓
Learning Approach
↓
Model


The algorithm is chosen after understanding the problem.

Different algorithms are designed for different problem settings.


8. Define the Input

The input contains the information available when the prediction must be made.

For a house-price prediction system, possible inputs could include:

Area

Number of bedrooms

Property age

Location information

Number of bathrooms

These become candidate features.


9. Define the Output

The output should represent the actual goal of the system.

For example:

Input:

House characteristics

Output:

Predicted house price


Or:

Input:

Email information

Output:

Spam or Not Spam


The output determines the learning task.


10. Define the Success Criterion

A model needs a measurable definition of success.

For a classification problem, we may ask how often the model predicts the correct class.

For a regression problem, we may ask how close the predictions are to the actual numerical values.

The choice of success measure should match the actual application goal.


11. Understand the Data Collection Process

The method used to collect data affects the machine learning problem.

Consider three examples.

Handwritten digit recognition requires many examples of handwriting with known answers.

Medical image classification may require images labelled by qualified experts.

Fraud detection may depend on transaction records and confirmed fraud reports.

Therefore, collecting data can be a major part of the project.


12. Problem Formulation Example

Suppose a college wants to identify students who may need additional support.

A possible formulation is:

Input:

Previous marks

Attendance

Assignment completion

Study activity

Target:

Additional Support Required

The problem can then be treated as a classification problem if the target consists of predefined categories.


13. Another Formulation of the Same Domain

The same student information can support a different problem.

Problem:

Predict final examination marks.

Input:

Previous marks

Attendance

Assignment completion

Study activity

Target:

Final Examination Mark

This becomes a regression problem because the output is numerical.


14. Understanding Constraints

A machine learning system also operates under constraints.

Examples include:

Limited data

Limited processing time

Prediction latency requirements

Need for understandable decisions

Privacy requirements

Cost constraints

Risk of incorrect predictions

These constraints can influence the choice of approach.


15. ML System as Part of a Larger Application

Machine learning is only one part of a complete solution.

A practical system may look like:

User Interface
↓
Application Logic
↓
Data Processing
↓
Machine Learning Model
↓
Prediction
↓
Validation
↓
Result


The surrounding application may handle storage, authentication, APIs, monitoring, and business rules.


16. A Practical Checklist

Before training a model, verify:

The problem is clearly defined.

The target is clearly identified.

The required information is available.

The features are relevant.

Enough representative examples exist.

The evaluation method is known.

The consequences of incorrect predictions are understood.


17. Python Example

A problem can first be represented without using a machine learning library.

Python

problem = {
    "question": "Will the customer purchase the product?",
    "features": [
        "number_of_visits",
        "time_on_site",
        "previous_purchases"
    ],
    "target": "purchase"
}

print("Question:", problem["question"])
print("Features:", problem["features"])
print("Target:", problem["target"])


Output

Question: Will the customer purchase the product?

Features:

number_of_visits

time_on_site

previous_purchases

Target:

purchase


This simple program demonstrates problem formulation before model training.


18. Problem Formulation Experiment

Choose a real-world application.

Write down:

The question

The input

The target

The features

The type of machine learning problem

The success measure

Then check whether the available data actually contains the information required.


Common Mistakes

Choosing the algorithm first

Using a target that would not be available when making the prediction

Collecting data without defining the question

Using irrelevant features

Assuming a complex algorithm can compensate for missing information

Ignoring application constraints

Measuring success using a metric that does not reflect the real goal


Practice

Take one application such as:

Spam detection

House-price prediction

Student performance prediction

Customer churn prediction

Fraud detection

Write a complete problem formulation for the application.


Quick Check

Question

What should be done before selecting a machine learning algorithm?

Answer

The problem, available data, features, target, constraints, and success criteria should be understood first.


Summary

A machine learning project should begin with a clearly defined problem.

The available data must contain useful information for the intended task.

Features represent information used as input.

The target represents the desired output when a supervised problem is being formulated.

The learning approach and algorithm should be selected only after understanding the problem and data.


Extended Study

A useful abstraction for a machine learning problem is:

Question
↓
Input Data
↓
Representation
↓
Target or Structure
↓
Learning Approach
↓
Prediction or Discovery
↓
Evaluation

This framework separates the real-world problem from the machine learning implementation.

It also makes assumptions visible.

A successful model cannot compensate for an incorrectly defined objective or data that does not contain the information required by the task.


Reflection

Choose a prediction system you use in everyday life.

Ask:

What is the system trying to predict?

What information does it receive?

Which features might be used?

What is the target?

How would you measure whether the prediction is useful?

`
};

export default lesson6;