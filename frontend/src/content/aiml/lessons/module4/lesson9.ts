const lesson9 = {
  title: "Conditional Probability",

  content: `
# Conditional Probability

## What You Will Learn

In this lesson, you will learn how probability changes when additional information is known.

You will learn:

- What conditional probability means
- Why additional information changes probability
- Conditional probability notation
- The conditional probability formula
- Joint probability
- Marginal probability
- Independence
- Real-world AI examples
- Classification under conditions
- Diagnostic reasoning
- Bayes' theorem
- Python implementation
- NumPy experiments
- Practical probability problems

The central idea is:

Initial Probability
       ↓
Additional Information
       ↓
Updated Probability
       ↓
Better AI Reasoning

---

# 1. Why Conditional Probability Matters

Suppose an AI system predicts whether a person has a particular condition.

Before receiving any additional information, the probability may be:

P(A) = 0.10

Now suppose we learn that another event:

B

has occurred.

The probability of A may change.

The question becomes:

What is the probability of A given B?

This is conditional probability.

---

# 2. Conditional Probability

Conditional probability is written as:

P(A | B)

Read this as:

"Probability of A given B."

The vertical bar:

|

means:

"given that"

Therefore:

P(A | B)

means:

probability that A occurs when B is known to have occurred.

---

# 3. Conditional Probability Formula

The formula is:

P(A | B)
=
P(A and B)
/
P(B)

provided:

P(B) > 0

The numerator is the joint probability.

The denominator is the probability of the condition B.

---

# 4. Simple Example

Suppose a group contains:

60 students.

Among them:

30 are female.

Of those 30:

18 study more than 4 hours.

We want:

Probability that a student studies more than 4 hours given that the student is female.

Define:

A = studies more than 4 hours

B = female

Then:

P(A | B)

=

Number of students satisfying A and B
/
Number of students satisfying B

Therefore:

P(A | B)
=
18 / 30

= 0.6

or:

60%

The important point is that the denominator is:

30

not:

60

because we already know the student belongs to group B.

---

# 5. Why the Denominator Changes

Without additional information:

The reference group is the entire population.

With the condition:

B

the reference group becomes:

B

Conditional probability therefore changes the population being considered.

Conceptually:

Entire Dataset
      ↓
Condition B
      ↓
Relevant Subset
      ↓
Probability of A Within That Subset

This is why conditional probability is so useful.

---

# 6. Mathematical Formula

For:

P(A | B)

we use:

P(A | B)
=
P(A ∩ B)
/
P(B)

where:

A ∩ B

means:

A and B both occur.

---

# 7. Joint Probability

Joint probability is:

P(A ∩ B)

It represents the probability that:

A

and:

B

occur together.

For example:

A = studies more than 4 hours

B = female

A ∩ B

means:

female students who study more than 4 hours.

---

# 8. Marginal Probability

Marginal probability describes the probability of one event without conditioning on another event.

For example:

P(B)

may represent:

Probability that a randomly selected student is female.

Conditional probability:

P(A | B)

asks:

Probability that the student studies more than 4 hours given that the student is female.

These are different quantities.

---

# 9. Example Using Probabilities

Suppose:

P(A ∩ B) = 0.18

and:

P(B) = 0.30

Then:

P(A | B)

=

0.18 / 0.30

= 0.60

Therefore:

P(A | B) = 0.6

or:

60%

---

# 10. Conditional Probability With a Table

Suppose:

              Passed   Failed   Total

Group A          40       10      50

Group B          30       20      50

Total            70       30     100

We want:

P(Passed | Group A)

The relevant group is:

Group A

which contains:

50

students.

Among them:

40

passed.

Therefore:

P(Passed | Group A)

= 40 / 50

= 0.8

or:

80%

---

# 11. Probability Tree Intuition

A probability tree can represent sequential conditions.

For example:

Student
   ↓
Group A / Group B
   ↓
Passed / Failed

The probability of reaching a branch can be found by multiplying probabilities along the branch when the conditional probabilities are defined.

This provides a useful visual way to understand conditional probability.

---

# 12. Multiplication Rule

Starting from:

P(A | B)
=
P(A ∩ B)
/
P(B)

we can rearrange:

P(A ∩ B)
=
P(A | B)P(B)

Similarly:

P(A ∩ B)
=
P(B | A)P(A)

Therefore:

P(A | B)P(B)
=
P(B | A)P(A)

This relationship leads directly to Bayes' theorem.

---

# 13. Bayes' Theorem

Bayes' theorem is:

P(A | B)
=
P(B | A)P(A)
/
P(B)

It allows us to update our belief about A after observing B.

The components are:

P(A)

→ prior probability

P(B | A)

→ likelihood

P(B)

→ evidence

P(A | B)

→ posterior probability

These terms describe different parts of the probability calculation.

---

# 14. Why Bayes' Theorem Matters in AI

AI systems often need to update their beliefs after receiving new evidence.

The structure is:

Prior Belief
      ↓
New Evidence
      ↓
Likelihood
      ↓
Updated Probability
      ↓
Posterior Belief

This appears in many probabilistic reasoning systems.

---

# 15. Example of Bayesian Updating

Suppose an event A initially has:

P(A) = 0.2

Suppose evidence B has:

P(B | A) = 0.8

and:

P(B) = 0.4

Then:

P(A | B)

=
(0.8 × 0.2)
/
0.4

=

0.16 / 0.4

=

0.4

Therefore:

P(A | B) = 0.4

The new evidence increases the probability from:

0.2

to:

0.4

This demonstrates probability updating.

---

# 16. AI Diagnostic Example

Suppose:

A = condition is present

B = test is positive

We may know:

P(A)

and:

P(B | A)

But the question we often want is:

P(A | B)

That means:

Probability of the condition given a positive result.

Bayes' theorem provides:

P(A | B)
=
P(B | A)P(A)
/
P(B)

This distinction is extremely important.

The probability:

P(B | A)

is not generally equal to:

P(A | B)

Conditional probability requires careful attention to the direction of the condition.

---

# 17. The Most Important Direction Mistake

These two expressions are different:

P(A | B)

and:

P(B | A)

The first means:

Probability of A given B.

The second means:

Probability of B given A.

They are not automatically equal.

For example:

P(Disease | Positive Test)

is not the same mathematical quantity as:

P(Positive Test | Disease)

Confusing these is one of the most common probability mistakes.

---

# 18. Independence

Two events A and B are independent when:

P(A | B) = P(A)

and equivalently:

P(B | A) = P(B)

For independent events:

P(A ∩ B)
=
P(A)P(B)

Example:

Suppose:

P(A) = 0.6

P(B) = 0.5

and they are independent.

Then:

P(A ∩ B)

=
0.6 × 0.5

=
0.3

And:

P(A | B) = 0.6

because B does not change the probability of A.

---

# 19. Conditional Probability and Dependence

Suppose:

P(A) = 0.6

but:

P(A | B) = 0.9

Then knowing B changes the probability of A.

Therefore A and B are not independent.

This gives a useful interpretation:

Independent:

Condition does not change probability.

Dependent:

Condition changes probability.

---

# 20. AI Example — Spam Classification

Suppose:

A = message is spam

B = message contains a suspicious phrase

We may want:

P(Spam | Suspicious Phrase)

The phrase is evidence.

The probability of spam after seeing the phrase may differ from the prior probability of spam.

This is the basic probabilistic reasoning idea behind many classification systems.

Modern machine-learning systems may use much more sophisticated models, but the conditional-probability concept remains important.

---

# 21. Python Example

Suppose:

P(A and B) = 0.18

P(B) = 0.30

Calculate:

P(A | B)

Python:

joint = 0.18

probability_b = 0.30

conditional = (
    joint / probability_b
)

print(
    "P(A | B):",
    conditional
)

Output:

P(A | B): 0.6

---

# 22. Bayes' Theorem in Python

Example:

prior = 0.2

likelihood = 0.8

evidence = 0.4

posterior = (
    likelihood
    * prior
    /
    evidence
)

print(
    "Posterior:",
    posterior
)

Output:

Posterior: 0.4

The code directly represents:

P(A | B)
=
P(B | A)P(A) / P(B)

---

# 23. NumPy Implementation

We can store probabilities using NumPy.

Example:

import numpy as np

prior = np.array([
    0.2
])

likelihood = np.array([
    0.8
])

evidence = np.array([
    0.4
])

posterior = (
    likelihood
    * prior
    /
    evidence
)

print(posterior)

Output:

[0.4]

The important concept is not the use of NumPy itself.

The important concept is translating the probability formula into computation.

---

# 24. Conditional Probability From Data

Suppose we have:

import pandas as pd

df = pd.DataFrame({
    "Group": [
        "A",
        "A",
        "A",
        "B",
        "B",
        "B"
    ],
    "Passed": [
        True,
        True,
        False,
        True,
        False,
        False
    ]
})

To calculate:

P(Passed | Group A)

filter the condition:

group_a = df[
    df["Group"] == "A"
]

then:

probability = (
    group_a["Passed"].mean()
)

print(probability)

Output:

0.6666666666666666

Among Group A:

2 of 3

students passed.

Therefore:

P(Passed | Group A)

= 2 / 3

≈ 0.667

---

# 25. Conditional Probability as Filtering

This example shows a useful relationship:

Conditional Probability

can often be understood computationally as:

Condition
    ↓
Filter Relevant Data
    ↓
Measure Event Frequency

For:

P(A | B)

we:

1. Select observations satisfying B.
2. Among those observations, measure how often A occurs.

This gives intuitive understanding of the formula.

---

# 26. Real AI Reasoning Pattern

Many AI reasoning problems can be simplified conceptually as:

Prior Information
       ↓
Observe Evidence
       ↓
Condition on Evidence
       ↓
Calculate Updated Probability
       ↓
Make a Decision

This is one mathematical framework for reasoning under uncertainty.

---

# 27. Practical Experiment

Create a dataset with:

Department

and:

Passed

For example:

IT, True

IT, False

IT, True

CSE, True

CSE, True

CSE, False

Then calculate:

P(Passed | IT)

and:

P(Passed | CSE)

Compare the probabilities.

Explain why the two values can be different.

---

# 28. Practice

## Practice 1

Suppose:

P(A ∩ B) = 0.15

P(B) = 0.30

Calculate:

P(A | B)

## Practice 2

Suppose:

P(A) = 0.4

P(B | A) = 0.7

P(B) = 0.5

Calculate:

P(A | B)

using Bayes' theorem.

## Practice 3

Two independent events have:

P(A) = 0.6

P(B) = 0.5

Calculate:

P(A ∩ B)

## Practice 4

Create a dataset and calculate a conditional probability using Pandas.

---

# Challenge

Build a small Bayesian reasoning program.

The program should:

1. Define a prior probability.
2. Define a likelihood.
3. Define evidence probability.
4. Calculate the posterior probability.
5. Print all four values.
6. Explain how the new evidence changed the probability.

Then create a second example using a Pandas DataFrame.

Calculate a conditional probability directly from observed data.

---

# Common Mistakes

## Mistake 1 — Reversing the Condition

P(A | B)

is not the same as:

P(B | A)

## Mistake 2 — Using the Wrong Denominator

For:

P(A | B)

the denominator is:

P(B)

not:

P(A)

## Mistake 3 — Forgetting the Condition

Conditional probability always asks:

"What is the probability of A after knowing B?"

## Mistake 4 — Assuming Independence

Events are not independent simply because they are different events.

## Mistake 5 — Confusing Bayes' Theorem With a Simple Probability

Bayes' theorem provides a structured way to calculate an updated probability from prior information and evidence.

---

# Quick Check

1. What does P(A | B) mean?

The probability of A given B.

2. What is the formula?

P(A | B) = P(A ∩ B) / P(B)

3. What does P(A ∩ B) represent?

The probability that A and B occur together.

4. What is marginal probability?

The probability of an event without conditioning on another event.

5. When are two events independent?

When knowing one event does not change the probability of the other.

6. What is the multiplication rule?

P(A ∩ B) = P(A | B)P(B)

7. What is Bayes' theorem?

P(A | B) = P(B | A)P(A) / P(B)

8. What is a prior?

The probability assigned before incorporating the new evidence.

9. What is a posterior?

The updated probability after incorporating evidence.

10. Why is conditional probability useful in AI?

It provides a mathematical way to update and reason about probabilities when additional information is known.

11. Why is the direction of the condition important?

Because P(A | B) and P(B | A) describe different probabilities.

---

# Key Takeaways

- Conditional probability measures the probability of one event given that another event is known.
- The basic formula is:

P(A | B) = P(A ∩ B) / P(B)

- Joint probability represents events occurring together.
- Marginal probability describes an event without a condition.
- Independence means one event does not change the probability of another.
- Bayes' theorem provides a method for updating probability using evidence.
- Prior probability represents the initial belief.
- Likelihood represents how compatible evidence is with a condition.
- Posterior probability represents the updated belief.
- Conditional probability can be understood computationally by filtering data and measuring event frequency within the selected subset.
- Conditional probability is fundamental to probabilistic reasoning under uncertainty.

The central progression is:

Prior Probability
       ↓
New Evidence
       ↓
Conditional Probability
       ↓
Updated Belief
       ↓
Decision
       ↓
AI Reasoning
`,
};

export default lesson9;