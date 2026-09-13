const lesson8 = {
  title: "Probability & Uncertainty in AI",

  content: `
# Probability & Uncertainty in AI

## What You Will Learn

In this lesson, you will learn how probability provides a mathematical framework for representing uncertainty in Artificial Intelligence.

You will learn:

- What probability means
- Experiments and outcomes
- Sample spaces
- Events
- Probability values
- Basic probability rules
- Complementary probability
- Addition of probabilities
- Independent events
- Joint probability
- Probability distributions
- Expected value
- AI classification probabilities
- Probability and uncertainty
- Python implementation
- NumPy experiments
- AI applications

The central idea is:

Uncertain Event
      ↓
Probability
      ↓
Numerical Representation
      ↓
Decision
      ↓
AI System

---

# 1. Why AI Needs Probability

AI systems often make predictions when the correct answer is not known with certainty.

Suppose an AI image classifier receives an image.

It may produce:

Cat = 0.80

Dog = 0.15

Rabbit = 0.05

The system is expressing uncertainty.

Instead of saying:

"It is definitely a cat."

it says:

"The cat class has the highest probability."

Probability therefore gives AI systems a mathematical way to represent uncertainty.

---

# 2. What Is Probability?

Probability measures how likely an event is to occur.

Probability values lie between:

0

and:

1

where:

0

means:

Impossible

and:

1

means:

Certain

For example:

P(A) = 0.7

means event A has probability:

70%

---

# 3. Probability as a Percentage

A probability can be represented as:

Decimal

Fraction

Percentage

For example:

0.75

can be written as:

75%

or:

3/4

These represent the same probability.

---

# 4. Experiment and Outcome

An experiment is a process that produces an outcome.

Example:

Rolling a die.

Possible outcomes are:

1, 2, 3, 4, 5, 6

Each possible result is an outcome.

The set containing all possible outcomes is called the:

Sample Space.

For a die:

S = {1, 2, 3, 4, 5, 6}

---

# 5. Events

An event is a collection of one or more outcomes.

For example:

Getting an even number.

A = {2, 4, 6}

Another event:

Getting a number greater than 4.

B = {5, 6}

Events are subsets of the sample space.

---

# 6. Basic Probability Formula

For equally likely outcomes:

P(A) =
Number of favorable outcomes
/
Total number of possible outcomes

For a fair die:

Probability of getting 4:

P(4) = 1 / 6

Therefore:

P(4) ≈ 0.1667

or:

16.67%

---

# 7. Probability of an Even Number

For a fair die:

Even outcomes:

{2, 4, 6}

There are:

3

favorable outcomes.

Total outcomes:

6

Therefore:

P(Even) = 3 / 6

= 0.5

or:

50%

---

# 8. Complementary Events

The complement of an event A is:

not A

The probability rule is:

P(A^c) = 1 - P(A)

Suppose:

P(A) = 0.7

Then:

P(not A) = 1 - 0.7

= 0.3

The two probabilities add to:

1

---

# 9. AI Example — Prediction Confidence

Suppose:

P(Cat) = 0.9

Then:

P(Not Cat) = 1 - 0.9

= 0.1

The model is therefore assigning:

90%

probability to Cat.

The remaining:

10%

belongs to all other possibilities under the model's probability setup.

---

# 10. Probability Distribution

A probability distribution describes how probability is assigned to possible outcomes.

Suppose an AI classifier has:

Cat = 0.70

Dog = 0.20

Rabbit = 0.10

The total is:

0.70 + 0.20 + 0.10

= 1

This is a valid probability distribution.

For mutually exclusive classes:

sum of probabilities = 1

---

# 11. Valid Probability Conditions

For an event A:

0 <= P(A) <= 1

For a complete probability distribution:

Σ P(Ai) = 1

These conditions are fundamental.

A value such as:

P(A) = 1.5

cannot represent a valid probability.

---

# 12. Addition Rule

If A and B are mutually exclusive events:

P(A or B) = P(A) + P(B)

Example:

A = getting 1

B = getting 2

For a fair die:

P(A) = 1/6

P(B) = 1/6

Therefore:

P(A or B) = 2/6

= 1/3

---

# 13. General Addition Rule

For events that may overlap:

P(A or B)
=
P(A)
+
P(B)
-
P(A and B)

The intersection is subtracted to avoid counting overlapping outcomes twice.

This becomes useful when events are not mutually exclusive.

---

# 14. Joint Probability

Joint probability represents the probability that two events occur together.

It is written as:

P(A and B)

For independent events:

P(A and B)
=
P(A)P(B)

Example:

Probability of flipping Heads:

P(H) = 1/2

Probability of rolling a 6:

P(6) = 1/6

If the coin flip and die roll are independent:

P(H and 6)

=
(1/2)(1/6)

=
1/12

---

# 15. Independent Events

Two events are independent when the occurrence of one does not change the probability of the other.

For independent events:

P(A and B) = P(A)P(B)

Example:

A coin flip

and:

A separate die roll

are modeled as independent.

---

# 16. AI Example — Independent Measurements

Suppose two independently generated system events have probabilities:

P(A) = 0.8

P(B) = 0.5

Then:

P(A and B)

= 0.8 × 0.5

= 0.4

Therefore:

P(A and B) = 0.4

The independence assumption is important.

We cannot automatically assume independence for real-world variables.

---

# 17. Expected Value

Expected value represents the long-run average outcome of a random variable.

For discrete values:

E[X] = Σ xi P(xi)

Consider a fair die.

Outcomes:

1, 2, 3, 4, 5, 6

Each probability:

1/6

Expected value:

E[X]
=
(1)(1/6)
+
(2)(1/6)
+
(3)(1/6)
+
(4)(1/6)
+
(5)(1/6)
+
(6)(1/6)

Therefore:

E[X] = 3.5

The expected value does not need to be one of the actual possible outcomes.

---

# 18. Expected Value With Python

Example:

import numpy as np

values = np.array([
    1,
    2,
    3,
    4,
    5,
    6
])

probabilities = np.array([
    1/6,
    1/6,
    1/6,
    1/6,
    1/6,
    1/6
])

expected_value = np.sum(
    values * probabilities
)

print(expected_value)

Output:

3.5

This is a direct implementation of the mathematical formula.

---

# 19. Probability With NumPy

Suppose:

outcomes = np.array([
    0,
    1
])

probabilities = np.array([
    0.7,
    0.3
])

Check:

print(
    np.sum(probabilities)
)

Output:

1.0

A valid probability distribution should sum to:

1

---

# 20. Simulating Probability

We can simulate repeated random events.

Example:

import numpy as np

np.random.seed(42)

results = np.random.choice(
    [
        "Success",
        "Failure"
    ],
    size=1000,
    p=[
        0.7,
        0.3
    ]
)

success_count = np.sum(
    results == "Success"
)

estimated_probability = (
    success_count / 1000
)

print(
    "Estimated probability:",
    estimated_probability
)

The estimated probability should usually be near:

0.7

but will not necessarily be exactly:

0.7

because the experiment is random.

---

# 21. Law of Large Numbers Intuition

When a random experiment is repeated many times, the observed frequency often gets closer to the underlying probability.

Suppose:

P(Success) = 0.7

After:

10 trials

the observed fraction might be:

0.8

After:

1000 trials

it may be much closer to:

0.7

This provides intuition for why repeated observations can help estimate probabilities.

---

# 22. Probability in Classification

Suppose a classification model outputs:

Class A = 0.10

Class B = 0.65

Class C = 0.25

The predicted class is:

Class B

because it has the highest probability.

Notice:

The model's output contains more information than only:

Class B

It also communicates uncertainty.

The probability distribution is:

[0.10, 0.65, 0.25]

---

# 23. Probability and Decision Making

Suppose:

Prediction A = 0.55

Prediction B = 0.45

The system chooses A.

But the prediction is not highly certain.

Compare with:

Prediction A = 0.99

Prediction B = 0.01

The second case indicates much stronger confidence.

Therefore probabilities can provide information about uncertainty that a simple class label does not show.

---

# 24. Probability Does Not Guarantee Correctness

Suppose a model predicts:

Cat = 0.95

The model is highly confident according to its output.

It does not necessarily mean:

95 out of 100 such predictions are guaranteed to be correct.

Model probabilities may be poorly calibrated.

Therefore:

Probability output

and:

Actual frequency of correctness

are not automatically identical.

This distinction becomes important in responsible AI evaluation.

---

# 25. Probability and Data

Suppose a dataset contains:

1000 observations

and:

700 are positive cases.

The observed frequency is:

700 / 1000

= 0.7

This can be used as an empirical estimate of the probability of a positive case under the relevant sampling assumptions.

Observed Frequency

can therefore provide an estimate of:

Probability

---

# 26. AI Applications of Probability

Probability appears in:

- Classification
- Forecasting
- Recommendation
- Risk estimation
- Anomaly detection
- Natural language processing
- Computer vision
- Decision systems
- Generative AI

Probability is especially important when AI systems need to reason under uncertainty.

---

# 27. Complete Example

import numpy as np

classes = np.array([
    "Cat",
    "Dog",
    "Rabbit"
])

probabilities = np.array([
    0.80,
    0.15,
    0.05
])

print(
    "Probability sum:",
    probabilities.sum()
)

best_index = np.argmax(
    probabilities
)

print(
    "Predicted class:",
    classes[best_index]
)

print(
    "Confidence value:",
    probabilities[best_index]
)

Output:

Probability sum: 1.0

Predicted class: Cat

Confidence value: 0.8

This is a simple demonstration of probability-based classification.

---

# 28. Practical Experiment

Create a probability distribution for:

Rain

No Rain

Example:

Rain = 0.65

No Rain = 0.35

Then:

1. Verify that probabilities sum to 1.
2. Calculate the complement.
3. Simulate 1000 observations.
4. Calculate the observed frequency of Rain.
5. Compare observed frequency with 0.65.

---

# 29. Practice

## Practice 1

A fair die is rolled.

Calculate:

P(3)

P(Even)

P(Number > 4)

P(Not 6)

## Practice 2

Suppose:

P(A) = 0.6

Calculate:

P(Not A)

## Practice 3

Two independent events have:

P(A) = 0.7

P(B) = 0.4

Calculate:

P(A and B)

## Practice 4

Create a three-class probability distribution.

Make sure:

sum = 1

Then identify the most probable class.

---

# Challenge

Build a simple probabilistic prediction system.

Your program should:

1. Define several possible classes.
2. Assign probabilities.
3. Verify that the probabilities sum to 1.
4. Select the most probable class.
5. Display the probability of each class.
6. Explain which class has the highest probability.
7. Simulate repeated predictions.
8. Compare simulated frequencies with the original probabilities.

---

# Common Mistakes

## Mistake 1 — Probability Greater Than 1

Probabilities must satisfy:

0 <= P(A) <= 1

## Mistake 2 — Forgetting That a Distribution Must Sum to 1

For a complete distribution:

Σ P(Ai) = 1

## Mistake 3 — Assuming Independence

Two variables are not automatically independent.

Independence must be justified by the problem or assumptions.

## Mistake 4 — Treating Model Probability as Guaranteed Accuracy

A predicted probability represents the model's probabilistic output.

It does not automatically guarantee the actual frequency of correctness.

---

# Quick Check

1. What is probability?

A numerical measure of how likely an event is.

2. What values can probability take?

Between 0 and 1 inclusive.

3. What is a sample space?

The set of all possible outcomes.

4. What is an event?

A set of outcomes within a sample space.

5. What is the complement rule?

P(A^c) = 1 - P(A)

6. What is joint probability?

The probability that two events occur together.

7. When can probabilities be multiplied directly?

For independent events:

P(A and B) = P(A)P(B)

8. What is a probability distribution?

A specification of probabilities assigned to possible outcomes.

9. What does expected value represent?

The probability-weighted average outcome.

10. Why is probability useful in AI?

It provides a mathematical way to represent uncertainty and support probabilistic decision-making.

---

# Key Takeaways

- Probability provides a mathematical framework for uncertainty.
- Probabilities range from 0 to 1.
- Sample spaces contain possible outcomes.
- Events contain one or more outcomes.
- Complementary probabilities satisfy:

P(A^c) = 1 - P(A)

- Independent events satisfy:

P(A and B) = P(A)P(B)

- Probability distributions assign probabilities to possible outcomes.
- Expected value provides a probability-weighted average.
- AI classification systems can represent predictions using probability distributions.
- Probability allows AI systems to represent uncertainty rather than only producing hard decisions.
- Model probability should not automatically be interpreted as guaranteed accuracy.
- Python and NumPy make probability experiments easy to implement.

The central progression is:

Uncertain Event
      ↓
Probability
      ↓
Numerical Representation
      ↓
Uncertainty Measurement
      ↓
Decision
      ↓
AI System
`,
};

export default lesson8;