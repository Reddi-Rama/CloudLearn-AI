const about = {
  title: "Module 05: Machine Learning Foundations",

  content: `
# About the Module

Machine Learning is a core area of Artificial Intelligence in which systems learn useful patterns from data and use those patterns to make predictions or support decisions.

This module introduces the foundations required to understand and build a practical machine-learning system.

The focus is not on memorizing algorithms.

The focus is on understanding the complete machine-learning workflow and the reasoning behind each stage.

---

# What This Module Covers

The module introduces:

- Machine learning workflow
- Problem definition
- Data preparation
- Features and labels
- Training data
- Validation data
- Test data
- Supervised learning
- Unsupervised learning
- Classification
- Regression
- Baseline models
- Model training
- Model evaluation
- Error analysis
- Iteration
- End-to-end machine-learning development

---

# Learning Progression

Problem Definition
        ↓
Data Preparation
        ↓
Features & Labels
        ↓
Train / Validation / Test
        ↓
Learning Type
        ↓
Baseline Model
        ↓
Model Training
        ↓
Evaluation
        ↓
Error Analysis
        ↓
Iteration
        ↓
End-to-End ML System

---

# Module Learning Outcomes

After completing this module, you will be able to:

- Explain the core ideas behind machine learning.
- Describe a complete machine-learning workflow.
- Define a practical machine-learning problem.
- Distinguish between features and labels.
- Identify information available at prediction time.
- Explain the purpose of training, validation, and test datasets.
- Distinguish supervised and unsupervised learning.
- Identify classification and regression problems.
- Explain the purpose of baseline models.
- Train and compare basic candidate models.
- Evaluate model predictions using appropriate metrics.
- Perform basic error analysis.
- Explain why a model was selected rather than only reporting its score.
- Build a reproducible first machine-learning prediction system.
- Document results, limitations, and possible improvements.

---

# Module Workflow

A reliable machine-learning workflow is:

Problem
    ↓
Data
    ↓
Features
    ↓
Target
    ↓
Data Split
    ↓
Baseline
    ↓
Training
    ↓
Evaluation
    ↓
Error Analysis
    ↓
Iteration

Each stage answers a different question.

Problem definition:

What are we trying to predict or discover?

Data:

What information is available?

Features:

What inputs can the model use?

Target:

What outcome should the model predict?

Split strategy:

How will training and evaluation remain separate?

Baseline:

What simple result must the model beat?

Training:

How will model parameters be learned?

Evaluation:

How well does the model perform?

Error analysis:

Where does it fail?

Iteration:

What should be improved next?

---

# Module Project

## First Machine Learning Prediction System

The module project brings the learning workflow together into one practical system.

The project should:

- Define a clear prediction problem.
- Prepare the dataset.
- Identify features and target.
- Create an appropriate data split.
- Build a baseline.
- Train candidate models.
- Evaluate the models.
- Perform error analysis.
- Select a final model.
- Document the reasoning.
- Identify limitations.
- Suggest future improvements.

The important outcome is not simply achieving the highest score.

The important outcome is developing a reproducible reasoning process.

---

# Module Lessons

## Lesson 1 — Machine Learning Workflow

Understand:

- Problem definition
- Data preparation
- Baselines
- Split strategy
- Model training
- Evaluation
- Error analysis
- Iteration

## Lesson 2 — Features and Labels

Understand:

- Features
- Labels
- Targets
- Numerical features
- Categorical features
- Temporal features
- Text features
- Image features
- Prediction-time information

## Lesson 3 — Train Validation Test

Understand:

- Training data
- Validation data
- Test data
- Generalization
- Random splits
- Time-based splits
- Data leakage risks

## Lesson 4 — Supervised vs Unsupervised Learning

Understand:

- Supervised learning
- Unsupervised learning
- Classification
- Regression
- Clustering
- Dimensionality reduction

## Lesson 5 — Baseline Models

Understand:

- Constant predictors
- Majority-class baseline
- Simple heuristics
- Simple linear models
- Comparing stronger models against simple references

## Lesson 6 — First End-to-End ML Project

Bring the complete workflow together.

You will:

- Define a question
- Prepare data
- Build a baseline
- Train candidate models
- Evaluate them
- Perform error analysis
- Select a final model
- Document the reasoning

---

# Tools Used

Python can be used to implement the workflow.

Common machine-learning tools introduced later include:

- NumPy
- Pandas
- Matplotlib
- scikit-learn

The exact tools should be selected according to the problem.

The goal is to understand the machine-learning workflow rather than memorize library commands.

---

# AI Connection

Machine learning fits into the larger AI workflow:

Data
    ↓
Representation
    ↓
Machine Learning
    ↓
Prediction / Structure Discovery
    ↓
Evaluation
    ↓
Application

Machine learning therefore connects the mathematical and computational foundations learned earlier with practical intelligent systems.

---

# Module Completion Goal

By the end of Module 5, you should be able to look at a machine-learning problem and explain:

- What the problem is.
- What data is available.
- What the model should predict.
- Which features can be used.
- How the dataset should be divided.
- What baseline should be used.
- How candidate models should be evaluated.
- Where the model makes mistakes.
- Why one model is preferable to another.
- What limitations remain.

The final progression is:

Problem
    ↓
Data
    ↓
Model
    ↓
Prediction
    ↓
Evaluation
    ↓
Error Analysis
    ↓
Reasoned Model Selection
`,
};

export default about;