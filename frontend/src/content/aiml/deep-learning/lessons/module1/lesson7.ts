const lesson7 = {
  id: "lesson7",
  moduleId: "module1",
  lessonNumber: 7,

  title: "Probability and Statistics",

  subtitle:
    "Understanding uncertainty, random variables, distributions, expectations, and variance",

  description:
    "Learn the probability and statistics concepts needed to reason about uncertain data, model predictions, distributions, and machine learning objectives.",

  estimatedTime: "4–5 hours",

  difficulty: "Intermediate",

  learningObjectives: [
    "Understand why probability is important in machine learning.",
    "Understand sample spaces and events.",
    "Understand probability of events.",
    "Understand conditional probability.",
    "Understand independence.",
    "Understand random variables.",
    "Distinguish discrete and continuous random variables.",
    "Understand probability distributions.",
    "Understand multiple random variables.",
    "Understand joint probability.",
    "Understand expectations.",
    "Understand variance.",
    "Understand standard deviation.",
    "Understand covariance.",
    "Understand uncertainty in machine learning.",
    "Connect probability and statistics to deep learning."
  ],

  sections: [
    {
      id: "why-probability",
      title: "1. Why Probability Matters in Deep Learning",

      content: `
Machine learning deals with uncertainty.

Examples include:

• What class does this image belong to?
• What word is likely to come next?
• What value should a model predict?
• How likely is an observation?
• How uncertain is a prediction?

Data itself can be noisy.

Measurements can vary.

Labels can sometimes be uncertain.

Therefore, probability provides a mathematical language for reasoning about uncertain outcomes.
`
    },

    {
      id: "experiment",
      title: "2. Random Experiments",

      content: `
A random experiment is an operation whose outcome cannot be known with certainty beforehand.

Examples:

• tossing a coin
• rolling a die
• selecting a customer
• measuring a person's height
• selecting an image from a dataset

The set of possible outcomes is called the sample space.
`
    },

    {
      id: "sample-space",
      title: "3. Sample Space",

      content: `
The sample space contains all possible outcomes of an experiment.

For a single coin toss:

S = {Heads, Tails}

For a six-sided die:

S = {1, 2, 3, 4, 5, 6}

An event is a collection of outcomes from the sample space.
`
    },

    {
      id: "event",
      title: "4. Events",

      content: `
An event describes a condition or collection of possible outcomes.

For a die:

Event A = rolling an even number

A = {2, 4, 6}

Another event could be:

B = rolling a number greater than 4

B = {5, 6}

Probability assigns numerical values to events.
`
    },

    {
      id: "probability",
      title: "5. Probability",

      content: `
Probability represents how likely an event is.

For an event A:

0 ≤ P(A) ≤ 1

A probability of:

0

means the event is impossible under the specified model.

A probability of:

1

means the event is certain under the specified model.

Values between 0 and 1 represent varying degrees of likelihood.
`
    },

    {
      id: "coin",
      title: "6. Coin-Toss Example",

      content: `
Consider a fair coin.

The possible outcomes are:

Heads
Tails

If both outcomes are equally likely:

P(Heads) = 1/2

P(Tails) = 1/2

The probabilities of all mutually exclusive outcomes together sum to 1.
`
    },

    {
      id: "formal",
      title: "7. Formal Probability View",

      content: `
Probability can be viewed as a function that assigns a value to events.

The fundamental rules include:

Probability is nonnegative.

The probability of the entire sample space is 1.

For mutually exclusive events, probabilities add.

These rules allow larger probability calculations to be constructed from simpler events.
`
    },

    {
      id: "conditional",
      title: "8. Conditional Probability",

      content: `
Sometimes the probability of one event changes after we learn another event has occurred.

This is conditional probability.

It is written as:

P(A | B)

and means:

probability of A given B.

For suitable events:

P(A | B) = P(A ∩ B) / P(B)

when:

P(B) > 0

Conditional probability is fundamental when reasoning from observed information.
`
    },

    {
      id: "independence",
      title: "9. Independence",

      content: `
Two events can be independent when knowing one event occurred does not change the probability of the other.

For independent events:

P(A ∩ B) = P(A)P(B)

Independence is an assumption.

It should not be used automatically merely because two variables appear unrelated.
`
    },

    {
      id: "random-variable",
      title: "10. Random Variables",

      content: `
A random variable assigns numerical values to outcomes of a random experiment.

For example, if a coin is tossed:

X = 1 for Heads

X = 0 for Tails

The random variable therefore converts outcomes into numerical values that can be analyzed mathematically.
`
    },

    {
      id: "discrete",
      title: "11. Discrete Random Variables",

      content: `
A discrete random variable takes values from a countable collection.

Examples include:

• number shown on a die
• number of successful predictions
• number of defective products
• number of customers arriving in an interval

A probability mass function assigns probabilities to possible values.
`
    },

    {
      id: "continuous",
      title: "12. Continuous Random Variables",

      content: `
A continuous random variable can take values over a continuous range.

Examples include:

• height
• temperature
• weight
• time
• sensor measurements

For continuous variables, probability is generally assigned to intervals rather than individual exact values.

A probability density describes how probability is distributed across possible values.
`
    },

    {
      id: "distribution",
      title: "13. Probability Distribution",

      content: `
A probability distribution describes how probability is assigned across possible values of a random variable.

It allows us to reason about:

• likely values
• unlikely values
• average behavior
• variability
• uncertainty

Machine learning models often make assumptions or learn approximations about distributions.
`
    },

    {
      id: "multiple",
      title: "14. Multiple Random Variables",

      content: `
Machine learning rarely involves only one variable.

For example, a dataset may contain:

Age
Income
Education
Location
Purchase

Each can be represented as a variable.

Relationships between variables are important.

For example, knowing one variable may provide information about another.
`
    },

    {
      id: "joint",
      title: "15. Joint Probability",

      content: `
For two random variables X and Y, we may consider their joint behavior.

The joint probability:

P(X = x, Y = y)

represents the probability that both conditions occur together.

Joint distributions are important because real-world variables are often related.
`
    },

    {
      id: "marginal",
      title: "16. Marginal Probability",

      content: `
From a joint distribution, we can obtain the distribution of an individual variable by summing or integrating over the other variables.

Conceptually:

Joint Distribution
↓
Remove one variable by summing/integrating
↓
Marginal Distribution

This allows us to study individual variables while starting from their joint behavior.
`
    },

    {
      id: "conditional-distribution",
      title: "17. Conditional Distributions",

      content: `
We can also ask about one variable given another.

For example:

P(Y | X)

describes the distribution of Y when X is known.

This idea is fundamental to supervised learning.

A model can be viewed as learning a relationship between inputs and outputs, often represented probabilistically.
`
    },

    {
      id: "expectation",
      title: "18. Expectation",

      content: `
The expectation represents the average value of a random variable under its probability distribution.

For a discrete random variable:

E[X] = Σ x P(X = x)

The expectation does not necessarily have to be one of the values that X can actually take.

It describes the long-run average behavior implied by the distribution.
`
    },

    {
      id: "example-expectation",
      title: "19. Expectation Example",

      content: `
Suppose a random variable has:

X = 0 with probability 0.5

X = 2 with probability 0.3

X = 10 with probability 0.2

Then:

E[X]

= 0(0.5) + 2(0.3) + 10(0.2)

= 0 + 0.6 + 2

= 2.6

The expected value is therefore 2.6.
`
    },

    {
      id: "variance",
      title: "20. Variance",

      content: `
The expectation describes average behavior.

Variance describes how much a random variable varies around its mean.

The variance can be written as:

Var(X) = E[(X − E[X])²]

An equivalent form is:

Var(X) = E[X²] − E[X]²

A larger variance indicates greater spread under the distribution.
`
    },

    {
      id: "standard-deviation",
      title: "21. Standard Deviation",

      content: `
The standard deviation is the square root of the variance.

σ = √Var(X)

Variance is expressed in squared units.

Standard deviation has the same units as the original variable.

For this reason, standard deviation is often easier to interpret in the original measurement scale.
`
    },

    {
      id: "covariance",
      title: "22. Covariance",

      content: `
When multiple variables are present, we may want to understand how they vary together.

Covariance measures the joint variation between two variables.

A positive covariance indicates that the variables tend to move together.

A negative covariance indicates an opposing tendency.

A covariance near zero indicates little linear co-variation under the given distribution.
`
    },

    {
      id: "covariance-matrix",
      title: "23. Covariance Matrix",

      content: `
For a vector-valued random variable:

x

we can represent pairwise relationships using a covariance matrix.

The diagonal entries represent variances.

The off-diagonal entries represent covariances.

The covariance matrix therefore summarizes the variability and linear relationships among multiple variables.
`
    },

    {
      id: "statistics",
      title: "24. Statistics and Samples",

      content: `
Statistics often works with samples drawn from a larger population.

Population:

The complete collection of interest.

Sample:

A subset observed from the population.

We can calculate statistics from the sample to learn about the population.

Examples include:

• sample mean
• sample variance
• sample proportions

Machine learning similarly learns from finite datasets and attempts to perform well beyond those observed examples.
`
    },

    {
      id: "uncertainty",
      title: "25. Uncertainty in Machine Learning",

      content: `
Machine learning involves many forms of uncertainty.

There may be uncertainty in:

• measurements
• labels
• observations
• predictions
• parameters
• future data

Some uncertainty is intrinsic to the problem.

Other uncertainty can arise because the model or available data is insufficient.

Probability provides tools for representing and reasoning about these uncertainties.
`
    },

    {
      id: "probability-learning",
      title: "26. Probability and Model Predictions",

      content: `
Many machine learning models produce values that can be interpreted probabilistically.

For classification, a model may produce probabilities for different classes.

For example:

Cat: 0.70

Dog: 0.20

Bird: 0.10

These values allow the system to express uncertainty rather than simply returning a single hard decision.
`
    },

    {
      id: "loss",
      title: "27. Probability and Learning Objectives",

      content: `
Probability also appears in learning objectives.

A model may assign probabilities to observed outcomes.

Training can then encourage the model to assign higher probability to appropriate observations.

This connects probability with:

• likelihood
• loss functions
• statistical modeling
• parameter estimation

These ideas become increasingly important in later machine learning and deep learning modules.
`
    },

    {
      id: "complete-picture",
      title: "28. Complete Probability Picture",

      content: `
The conceptual progression is:

Random Experiment
↓
Sample Space
↓
Events
↓
Probability
↓
Random Variables
↓
Distributions
↓
Multiple Variables
↓
Joint and Conditional Distributions
↓
Expectation
↓
Variance
↓
Covariance
↓
Machine Learning Uncertainty

These ideas provide the probability foundation required for later deep learning topics.
`
    }
  ],

  codeExamples: [
    {
      title: "Simulate a Coin Toss",
      language: "python",

      code: `import random

heads = 0
tails = 0

for _ in range(1000):

    if random.random() < 0.5:
        heads += 1
    else:
        tails += 1

print("Heads:", heads)
print("Tails:", tails)`,

      explanation:
        "Simulates repeated coin tosses and counts the observed outcomes."
    },

    {
      title: "Estimate a Probability",
      language: "python",

      code: `import random

success = 0
trials = 10000

for _ in range(trials):

    if random.random() < 0.3:
        success += 1

probability = success / trials

print(probability)`,

      explanation:
        "Estimates an event probability from repeated random trials."
    },

    {
      title: "Calculate Mean",
      language: "python",

      code: `import torch

x = torch.tensor([
    2.0,
    4.0,
    6.0,
    8.0
])

mean = x.mean()

print(mean)`,

      output: `tensor(5.)`,

      explanation:
        "Calculates the sample average."
    },

    {
      title: "Calculate Variance",
      language: "python",

      code: `import torch

x = torch.tensor([
    2.0,
    4.0,
    6.0,
    8.0
])

variance = x.var(
    unbiased=False
)

print(variance)`,

      explanation:
        "Calculates the variance of the values."
    },

    {
      title: "Calculate Standard Deviation",
      language: "python",

      code: `import torch

x = torch.tensor([
    2.0,
    4.0,
    6.0,
    8.0
])

std = x.std(
    unbiased=False
)

print(std)`,

      explanation:
        "Calculates the standard deviation."
    },

    {
      title: "Covariance Matrix",
      language: "python",

      code: `import torch

X = torch.tensor([
    [1.0, 2.0],
    [2.0, 4.0],
    [3.0, 6.0],
    [4.0, 8.0]
])

X_centered = X - X.mean(
    dim=0,
    keepdim=True
)

covariance = (
    X_centered.T @ X_centered
    / X.shape[0]
)

print(covariance)`,

      explanation:
        "Demonstrates the basic idea of constructing a covariance matrix from centered observations."
    }
  ],

  mathematicalIntuition: [
    {
      title: "Probability",
      formula: "0 ≤ P(A) ≤ 1",
      explanation:
        "Probability measures the likelihood assigned to an event."
    },

    {
      title: "Conditional Probability",
      formula: "P(A|B) = P(A∩B) / P(B)",
      explanation:
        "Measures the probability of A when B is known."
    },

    {
      title: "Expectation",
      formula: "E[X] = Σ xP(X=x)",
      explanation:
        "Represents the probability-weighted average value."
    },

    {
      title: "Variance",
      formula: "Var(X) = E[(X−E[X])²]",
      explanation:
        "Measures spread around the expected value."
    },

    {
      title: "Standard Deviation",
      formula: "σ = √Var(X)",
      explanation:
        "Measures spread in the original units of the variable."
    },

    {
      title: "Covariance",
      formula: "Cov(X,Y) = E[(X−E[X])(Y−E[Y])]",
      explanation:
        "Measures how two variables vary together."
    }
  ],

  exercises: [
    {
      id: "ex1",
      difficulty: "Easy",
      question:
        "What is a sample space?"
    },

    {
      id: "ex2",
      difficulty: "Easy",
      question:
        "What is a random variable?"
    },

    {
      id: "ex3",
      difficulty: "Medium",
      question:
        "Explain the difference between discrete and continuous random variables."
    },

    {
      id: "ex4",
      difficulty: "Medium",
      question:
        "What is conditional probability?"
    },

    {
      id: "ex5",
      difficulty: "Medium",
      question:
        "Calculate the expectation of a random variable that takes values 0 and 10 with probabilities 0.7 and 0.3."
    },

    {
      id: "ex6",
      difficulty: "Hard",
      question:
        "Explain the difference between expectation and variance."
    },

    {
      id: "ex7",
      difficulty: "Hard",
      question:
        "Explain why multiple random variables and their relationships matter in machine learning."
    },

    {
      id: "ex8",
      difficulty: "Hard",
      question:
        "Explain the role of probability in representing uncertainty in model predictions."
    }
  ],

  codingExercises: [
    {
      id: "code1",
      title: "Coin Simulation",
      task:
        "Simulate 10,000 coin tosses and estimate the probability of heads."
    },

    {
      id: "code2",
      title: "Dice Simulation",
      task:
        "Simulate a six-sided die and estimate the probability of rolling an even number."
    },

    {
      id: "code3",
      title: "Statistics Calculator",
      task:
        "Create a PyTorch program that calculates mean, variance, and standard deviation."
    },

    {
      id: "code4",
      title: "Covariance Experiment",
      task:
        "Create two variables with a positive relationship and calculate their covariance."
    },

    {
      id: "code5",
      title: "Prediction Probability",
      task:
        "Create a simple classification example with probabilities for several classes and calculate the predicted class."
    }
  ],

  debuggingExercises: [
    {
      id: "debug1",
      problem:
        "A program estimates a probability greater than 1.",
      task:
        "Find the likely error in the probability calculation."
    },

    {
      id: "debug2",
      problem:
        "Variance is negative.",
      task:
        "Explain why a correctly calculated variance cannot be negative."
    },

    {
      id: "debug3",
      problem:
        "A continuous variable is assigned a nonzero probability to one exact measurement value.",
      task:
        "Explain the difference between probability and probability density."
    },

    {
      id: "debug4",
      problem:
        "Two variables have a strong nonlinear relationship but their covariance is close to zero.",
      task:
        "Explain why covariance alone may not capture every kind of relationship."
    }
  ],

  practicalTask: {
    title: "Build a Probability and Statistics Laboratory",

    objective:
      "Create a Python program that simulates random experiments and analyzes their statistical properties.",

    requirements: [
      "Simulate a coin toss.",
      "Estimate event probabilities.",
      "Simulate a die.",
      "Calculate sample mean.",
      "Calculate variance.",
      "Calculate standard deviation.",
      "Create two related variables.",
      "Calculate covariance.",
      "Compare theoretical and experimental results."
    ]
  },

  summary: [
    "Probability provides a language for reasoning about uncertainty.",
    "A sample space contains possible outcomes.",
    "Events are collections of outcomes.",
    "Random variables map outcomes to numerical values.",
    "Discrete and continuous random variables require different probability descriptions.",
    "Joint probability describes multiple variables together.",
    "Conditional probability describes uncertainty given additional information.",
    "Expectation represents an average under a probability distribution.",
    "Variance measures spread around the expectation.",
    "Standard deviation is the square root of variance.",
    "Covariance describes how variables vary together.",
    "Probability and statistics provide important foundations for machine learning."
  ],

  keyTakeaways: [
    "Machine learning operates under uncertainty.",
    "Probability describes possible outcomes and their likelihoods.",
    "Random variables provide numerical representations of uncertain quantities.",
    "Expectations describe average behavior.",
    "Variance and standard deviation describe spread.",
    "Covariance describes relationships between variables.",
    "These concepts become important for loss functions, probabilistic models, and prediction uncertainty."
  ],

  nextLesson: "Lesson 8 — Working with Documentation"
};

export default lesson7;