// Generated AIML final-assessment question banks.
// 45 questions per course. The exam UI randomizes both question and option order.

export type AIMLQuestion = {
  id: string;
  topic: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export type AIMLCourseSlug =
  | "ai-foundations"
  | "machine-learning"
  | "deep-learning"
  | "generative-ai";

export const AIML_EXAM_BANKS: Record<AIMLCourseSlug, AIMLQuestion[]> = {
  "ai-foundations": [
    {
      "id": "q01",
      "topic": "AI fundamentals",
      "question": "A system maps a patient's symptoms to a diagnosis using rules written by experts. Which property most clearly makes it a rule-based intelligent system?",
      "options": [
        "It learns all rules from labeled examples",
        "Its decision logic is explicitly encoded as conditions and actions",
        "It must use a neural network",
        "It can only process numerical data"
      ],
      "answer": 1,
      "explanation": "The defining feature is explicit symbolic rules such as IF symptom THEN diagnosis."
    },
    {
      "id": "q02",
      "topic": "AI vs programming",
      "question": "A calculator always applies the same formula to the same input. A spam classifier changes its behavior after training on examples. What is the key distinction?",
      "options": [
        "The classifier uses a learned mapping rather than only hand-written execution rules",
        "The classifier never uses algorithms",
        "The calculator cannot accept text",
        "The classifier does not require input data"
      ],
      "answer": 0,
      "explanation": "Traditional programs can be explicitly specified; a learned model infers useful parameters or patterns from data."
    },
    {
      "id": "q03",
      "topic": "AI history",
      "question": "Why did modern AI systems become substantially more capable when large datasets, GPUs, and deep learning became available together?",
      "options": [
        "They removed the need for mathematical optimization",
        "They supplied data, scalable computation, and models able to learn many parameters",
        "They made every AI problem deterministic",
        "They eliminated the need for evaluation"
      ],
      "answer": 1,
      "explanation": "Modern learning systems benefit from data, compute, and parameterized models that can be optimized at scale."
    },
    {
      "id": "q04",
      "topic": "AI capabilities",
      "question": "A system detects objects in images but cannot autonomously transfer that skill to unrelated tasks. Which capability description fits it best?",
      "options": [
        "Artificial general intelligence",
        "Narrow or task-specific AI",
        "Superintelligence",
        "A purely symbolic operating system"
      ],
      "answer": 1,
      "explanation": "Task-specific AI is designed around a limited capability or problem domain."
    },
    {
      "id": "q05",
      "topic": "AI/ML/DL",
      "question": "Which relationship is most accurate?",
      "options": [
        "Deep learning is unrelated to machine learning",
        "Machine learning is a subset of AI, and deep learning is a family of machine-learning methods",
        "AI is a subset of deep learning",
        "Generative AI replaced machine learning"
      ],
      "answer": 1,
      "explanation": "AI is the broad field; ML is a data-driven approach within AI; deep learning is a major ML family."
    },
    {
      "id": "q06",
      "topic": "Generative AI",
      "question": "A model produces a new paragraph rather than assigning one of three predefined labels. What makes the task generative?",
      "options": [
        "The output is newly synthesized rather than merely selecting a fixed class",
        "The input must be numerical",
        "The model cannot be evaluated",
        "The model must be rule-based"
      ],
      "answer": 0,
      "explanation": "Generation constructs new output conditioned on the input or context."
    },
    {
      "id": "q07",
      "topic": "AI applications",
      "question": "A bank wants to flag suspicious transactions for analysts, not automatically close accounts. Which design goal is most appropriate?",
      "options": [
        "Use AI as decision support with human review for consequential cases",
        "Remove all human oversight",
        "Optimize only for the number of alerts",
        "Ignore false positives"
      ],
      "answer": 0,
      "explanation": "For consequential decisions, AI can assist while humans review ambiguous or high-impact cases."
    },
    {
      "id": "q08",
      "topic": "AI limitations",
      "question": "A classifier has 99% accuracy because only 1% of records are positive, yet it catches almost none of the positive cases. What does this illustrate?",
      "options": [
        "Class imbalance can make accuracy misleading",
        "Accuracy is always the best metric",
        "The model has no test set",
        "The dataset must be perfectly balanced"
      ],
      "answer": 0,
      "explanation": "With rare positives, a model can achieve high accuracy while failing the minority class."
    },
    {
      "id": "q09",
      "topic": "problem solving",
      "question": "An AI agent must choose actions while considering possible future states. Which approach is directly relevant?",
      "options": [
        "Search over a state space",
        "Only string formatting",
        "Randomly changing the output",
        "Deleting the state representation"
      ],
      "answer": 0,
      "explanation": "State-space search evaluates possible sequences of actions and resulting states."
    },
    {
      "id": "q10",
      "topic": "rules",
      "question": "A rule system contains A→B, B→C, and a fact A. What can forward chaining derive?",
      "options": [
        "C",
        "Only A",
        "A→B",
        "Nothing because C was not initially stored"
      ],
      "answer": 0,
      "explanation": "Forward chaining repeatedly applies rules to known facts: A yields B, then B yields C."
    },
    {
      "id": "q11",
      "topic": "reasoning",
      "question": "Why can a rule-based system become difficult to maintain as the number of interacting rules grows?",
      "options": [
        "Interactions and exceptions can make the rule base complex and hard to reason about",
        "Rules automatically disappear",
        "Rules cannot represent conditions",
        "Rules require GPUs"
      ],
      "answer": 0,
      "explanation": "Large rule sets can create conflicts, dependencies, and maintenance overhead."
    },
    {
      "id": "q12",
      "topic": "intelligent systems",
      "question": "A recommendation system receives new user interactions every day. Which property is most useful for keeping predictions relevant?",
      "options": [
        "Ability to update or retrain using new data",
        "A fixed prediction table that never changes",
        "Removing user history",
        "Disabling evaluation"
      ],
      "answer": 0,
      "explanation": "Changing behavior and data distributions can require periodic updating or retraining."
    },
    {
      "id": "q13",
      "topic": "AI project lifecycle",
      "question": "A team begins training models before defining what business decision the predictions will support. What lifecycle step was skipped?",
      "options": [
        "Problem definition and success criteria",
        "Deployment monitoring",
        "Model serialization",
        "UI styling"
      ],
      "answer": 0,
      "explanation": "A useful AI project starts by defining the problem, constraints, decision context, and measurable success criteria."
    },
    {
      "id": "q14",
      "topic": "data",
      "question": "A feature contains apartment size in square meters while another is monthly income in rupees. Why might preprocessing be needed before some models?",
      "options": [
        "Features may have very different scales and distributions",
        "Models cannot accept two features",
        "Scaling creates labels automatically",
        "Preprocessing removes the need for validation"
      ],
      "answer": 0,
      "explanation": "Some algorithms are sensitive to feature scale, so normalization or standardization can improve optimization."
    },
    {
      "id": "q15",
      "topic": "generalization",
      "question": "A model performs extremely well on training examples but poorly on unseen test examples. What is the strongest interpretation?",
      "options": [
        "The model may have overfit the training data",
        "The model is necessarily underfit",
        "The test set must be wrong",
        "The model has learned nothing"
      ],
      "answer": 0,
      "explanation": "A large train-test gap is a common sign that the model has captured training-specific patterns."
    },
    {
      "id": "q16",
      "topic": "mathematics",
      "question": "For vectors x=[1,2] and w=[3,4], what is x·w?",
      "options": [
        "11",
        "10",
        "14",
        "24"
      ],
      "answer": 0,
      "explanation": "The dot product is 1×3 + 2×4 = 11."
    },
    {
      "id": "q17",
      "topic": "mathematics",
      "question": "If a feature vector is [2,4] and is multiplied by a scalar 0.5, what happens?",
      "options": [
        "It becomes [1,2]",
        "It becomes [2.5,4.5]",
        "It becomes [4,8]",
        "Its dimensionality doubles"
      ],
      "answer": 0,
      "explanation": "Scalar multiplication multiplies each component by the scalar."
    },
    {
      "id": "q18",
      "topic": "probability",
      "question": "A model estimates P(fraud | transaction). Why is the conditioning important?",
      "options": [
        "It describes the probability of fraud given the observed transaction information",
        "It means fraud is guaranteed",
        "It removes uncertainty",
        "It is identical to P(transaction | fraud)"
      ],
      "answer": 0,
      "explanation": "Conditional probability explicitly states what information is being conditioned on."
    },
    {
      "id": "q19",
      "topic": "statistics",
      "question": "Two models have similar means of prediction errors, but one has much larger variance. What does the larger variance indicate?",
      "options": [
        "Its errors are more spread out around their average",
        "Its mean error is necessarily larger",
        "It has no prediction errors",
        "Its accuracy must be higher"
      ],
      "answer": 0,
      "explanation": "Variance measures dispersion, so larger variance means errors fluctuate more widely."
    },
    {
      "id": "q20",
      "topic": "loss",
      "question": "Why is a differentiable loss useful in gradient-based learning?",
      "options": [
        "Its gradient provides a direction for changing parameters to reduce error",
        "It guarantees zero training error",
        "It eliminates the dataset",
        "It makes every model linear"
      ],
      "answer": 0,
      "explanation": "Gradients quantify how the loss changes with parameters, enabling iterative optimization."
    },
    {
      "id": "q21",
      "topic": "evaluation",
      "question": "A model's validation performance improves until epoch 12 and then deteriorates while training loss continues falling. What should the team investigate first?",
      "options": [
        "Overfitting and an appropriate stopping or regularization strategy",
        "Removing the validation set",
        "Increasing test-set leakage",
        "Assuming more epochs are always better"
      ],
      "answer": 0,
      "explanation": "The divergence between training and validation behavior suggests overfitting."
    },
    {
      "id": "q22",
      "topic": "data splits",
      "question": "Why should a test set generally remain untouched during model selection?",
      "options": [
        "Repeatedly optimizing against it can turn it into an indirect validation set",
        "It contains no useful information",
        "It cannot contain labels",
        "It is always smaller than training data"
      ],
      "answer": 0,
      "explanation": "The final test set is meant to provide an unbiased estimate after choices have been made."
    },
    {
      "id": "q23",
      "topic": "AI workflow",
      "question": "A team cleans the entire dataset using statistics computed from all records before splitting into train and test. What risk exists?",
      "options": [
        "Information from the test set can leak into training preprocessing",
        "The model will always underfit",
        "Labels are automatically removed",
        "The split becomes larger"
      ],
      "answer": 0,
      "explanation": "Preprocessing statistics should generally be learned from training data only and then applied to held-out data."
    },
    {
      "id": "q24",
      "topic": "baseline",
      "question": "Why establish a simple baseline before deploying a sophisticated AI model?",
      "options": [
        "It provides a reference point for whether added complexity creates meaningful improvement",
        "It guarantees the final model is best",
        "It prevents evaluation",
        "It replaces requirements gathering"
      ],
      "answer": 0,
      "explanation": "Without a baseline, improvements from complexity are difficult to interpret."
    },
    {
      "id": "q25",
      "topic": "error analysis",
      "question": "A model repeatedly fails on low-light images but works well in daylight. What is the most actionable next step?",
      "options": [
        "Analyze the failure cases and determine whether training data or preprocessing lacks representative low-light examples",
        "Increase the UI font size",
        "Delete all daylight examples",
        "Report only overall accuracy"
      ],
      "answer": 0,
      "explanation": "Failure clusters reveal data or modeling weaknesses that aggregate metrics can hide."
    },
    {
      "id": "q26",
      "topic": "deployment",
      "question": "After deployment, input data begins to differ systematically from training data. What phenomenon should the team monitor?",
      "options": [
        "Data or distribution drift",
        "Syntax highlighting",
        "Compilation drift",
        "Static typing"
      ],
      "answer": 0,
      "explanation": "A change in the input distribution can degrade model behavior even when the code is unchanged."
    },
    {
      "id": "q27",
      "topic": "monitoring",
      "question": "Why monitor model performance after deployment rather than assuming validation performance will remain constant?",
      "options": [
        "Real-world data, users, and conditions can change over time",
        "Validation scores automatically expire after one day",
        "Deployment makes models deterministic",
        "Monitoring changes the labels"
      ],
      "answer": 0,
      "explanation": "Production environments can evolve, creating new failure modes or distribution shifts."
    },
    {
      "id": "q28",
      "topic": "AI objectives",
      "question": "A team wants a model that is highly accurate but also must respond within 100 ms. What does the latency requirement represent?",
      "options": [
        "A system constraint or non-functional success criterion",
        "A training label",
        "A confusion-matrix cell",
        "A feature encoding"
      ],
      "answer": 0,
      "explanation": "Latency is a system constraint that can influence architecture, model size, and deployment choices."
    },
    {
      "id": "q29",
      "topic": "model selection",
      "question": "Two models have nearly identical validation performance, but one is much simpler and cheaper to operate. What should a project team explicitly consider?",
      "options": [
        "Whether the added complexity provides enough practical value to justify its cost",
        "Only parameter count",
        "Only training accuracy",
        "Whether the model has the longest name"
      ],
      "answer": 0,
      "explanation": "Model selection includes operational cost, latency, maintainability, and business value—not only a metric."
    },
    {
      "id": "q30",
      "topic": "reproducibility",
      "question": "Which practice most directly improves the ability to reproduce an AI experiment?",
      "options": [
        "Version the dataset definition, code, configuration, and environment",
        "Change several variables without recording them",
        "Use only screenshots",
        "Delete failed experiments"
      ],
      "answer": 0,
      "explanation": "Reproducibility requires enough artifacts and configuration information to recreate the experiment."
    },
    {
      "id": "q31",
      "topic": "supervised learning",
      "question": "A dataset contains historical customer features and a known churn outcome for every row. Which learning setup is this?",
      "options": [
        "Supervised learning",
        "Unsupervised learning",
        "Purely symbolic search",
        "Unlabeled generation"
      ],
      "answer": 0,
      "explanation": "Known target labels make this a supervised learning problem."
    },
    {
      "id": "q32",
      "topic": "unsupervised learning",
      "question": "A company has customer behavior vectors but no predefined customer categories and wants to discover groups. Which formulation fits?",
      "options": [
        "Unsupervised learning through clustering or related methods",
        "Supervised classification with known labels",
        "A compiler optimization",
        "A deterministic lookup table"
      ],
      "answer": 0,
      "explanation": "Clustering discovers structure without requiring predefined target labels."
    },
    {
      "id": "q33",
      "topic": "features",
      "question": "Why can a feature that is strongly correlated with a target still be dangerous to use?",
      "options": [
        "The relationship may be caused by leakage or may not exist at prediction time",
        "Correlation always proves causation",
        "Strong correlation makes validation unnecessary",
        "Correlated features cannot be numeric"
      ],
      "answer": 0,
      "explanation": "A feature can encode future information or a proxy unavailable when predictions are actually made."
    },
    {
      "id": "q34",
      "topic": "project iteration",
      "question": "A baseline fails because the training data does not contain examples of an important user segment. What is a sensible iteration?",
      "options": [
        "Improve data coverage before assuming a more complex model will solve the problem",
        "Immediately deploy the baseline",
        "Remove the affected users from evaluation",
        "Increase model depth without changing data"
      ],
      "answer": 0,
      "explanation": "Missing representative data is often a data problem, not a model-capacity problem."
    },
    {
      "id": "q35",
      "topic": "AI architecture",
      "question": "A system needs deterministic business rules plus a learned classifier. Which architecture is reasonable?",
      "options": [
        "Combine rule-based components with learned components at clearly defined interfaces",
        "Replace every rule with random sampling",
        "Prevent components from exchanging outputs",
        "Use only a database"
      ],
      "answer": 0,
      "explanation": "Hybrid systems can combine deterministic constraints with statistical predictions."
    },
    {
      "id": "q36",
      "topic": "ethics",
      "question": "A model's overall metric is strong, but its error rate is substantially worse for one subgroup. What should the team do?",
      "options": [
        "Investigate subgroup performance and the causes of the disparity before deployment",
        "Ignore subgroup metrics because aggregate accuracy is higher",
        "Remove subgroup labels from the report",
        "Automatically assume the model is fair"
      ],
      "answer": 0,
      "explanation": "Aggregate performance can hide systematic disparities; subgroup evaluation is essential in consequential applications."
    },
    {
      "id": "q37",
      "topic": "uncertainty",
      "question": "Why can a probability-like model output be useful even when a hard class label is also available?",
      "options": [
        "It can express relative confidence and support thresholding or human review",
        "It guarantees correctness",
        "It removes the need for labels",
        "It always equals a calibrated probability"
      ],
      "answer": 0,
      "explanation": "Scores or probabilities can support decisions at different operating thresholds, though calibration must be checked."
    },
    {
      "id": "q38",
      "topic": "optimization",
      "question": "If changing a parameter causes the loss to increase, what does the gradient-based update mechanism use to decide the next direction?",
      "options": [
        "The gradient of the loss with respect to that parameter",
        "The filename of the dataset",
        "The UI layout",
        "The number of classes alone"
      ],
      "answer": 0,
      "explanation": "The gradient describes the local direction of increasing loss; optimization typically moves against it."
    },
    {
      "id": "q39",
      "topic": "AI systems",
      "question": "A model predicts well offline but fails because its production input format differs from the training pipeline. What is the lesson?",
      "options": [
        "The complete data-to-prediction pipeline must be validated, not just the model",
        "Offline metrics are always useless",
        "The model must be retrained every hour",
        "Input contracts do not matter"
      ],
      "answer": 0,
      "explanation": "Production failures often occur at interfaces and preprocessing boundaries rather than in the learned model itself."
    },
    {
      "id": "q40",
      "topic": "deployment",
      "question": "A team can either deploy a large model locally or use a remote service. Which trade-off is most directly relevant?",
      "options": [
        "Latency, cost, privacy, reliability, and operational control",
        "Only the model's title",
        "Only the number of UI buttons",
        "Whether training used Python"
      ],
      "answer": 0,
      "explanation": "Deployment architecture balances technical and organizational constraints."
    },
    {
      "id": "q41",
      "topic": "AI lifecycle",
      "question": "Which sequence is the most defensible high-level AI workflow?",
      "options": [
        "Define problem → prepare data → establish baseline → train/evaluate → deploy → monitor/iterate",
        "Deploy → define problem → collect evidence → ignore monitoring",
        "Train → delete data → define success → deploy",
        "Evaluate → invent labels → deploy → define objective"
      ],
      "answer": 0,
      "explanation": "A disciplined lifecycle begins with the problem and continues through evaluation and production feedback."
    },
    {
      "id": "q42",
      "topic": "reasoning",
      "question": "A system is given a goal, observes the current state, evaluates alternatives, and selects an action. What makes this more agent-like than a static classifier?",
      "options": [
        "It uses observations and a decision process to choose actions toward a goal",
        "It always produces a class ID",
        "It cannot interact with an environment",
        "It must be a neural network"
      ],
      "answer": 0,
      "explanation": "Agent-like systems connect perception or observations to goal-directed action selection."
    },
    {
      "id": "q43",
      "topic": "limitations",
      "question": "Why should a high-performing benchmark score not automatically be treated as proof of real-world reliability?",
      "options": [
        "Benchmark data may not represent deployment conditions and may omit important failure modes",
        "Benchmarks never contain numbers",
        "Real-world systems cannot be evaluated",
        "High scores always imply fairness"
      ],
      "answer": 0,
      "explanation": "Evaluation is only meaningful relative to the target population, task, distribution, and deployment conditions."
    },
    {
      "id": "q44",
      "topic": "capstone reasoning",
      "question": "A team reports only training accuracy for a new AI system. Which missing evidence is most important before claiming generalization?",
      "options": [
        "Performance on held-out data plus error analysis and relevant operational constraints",
        "A longer project title",
        "More training screenshots",
        "The number of source files"
      ],
      "answer": 0,
      "explanation": "Held-out evaluation and failure analysis are needed to assess generalization and practical suitability."
    },
    {
      "id": "q45",
      "topic": "integrated reasoning",
      "question": "A hospital AI system has good test performance but occasionally produces high-impact incorrect recommendations. Which design most directly reduces risk?",
      "options": [
        "Use calibrated evaluation, confidence/abstention policies, monitoring, and human review for high-impact cases",
        "Hide uncertainty from clinicians",
        "Optimize only average accuracy",
        "Allow every prediction to trigger an automatic intervention"
      ],
      "answer": 0,
      "explanation": "High-impact systems need safeguards around uncertainty, monitoring, and human oversight rather than relying on one aggregate metric."
    }
  ],
  "machine-learning": [
    {
      "id": "q01",
      "topic": "supervised learning",
      "question": "A model must predict whether a loan applicant will default using historical labeled applications. What is the target variable?",
      "options": [
        "The default outcome",
        "The applicant ID",
        "The model's learning rate",
        "The feature scaling method"
      ],
      "answer": 0,
      "explanation": "The target is the labeled outcome the model is trained to predict."
    },
    {
      "id": "q02",
      "topic": "regression vs classification",
      "question": "A company predicts next month's electricity consumption in kWh. Which task is most appropriate?",
      "options": [
        "Regression",
        "Binary classification",
        "Clustering",
        "Association-rule mining"
      ],
      "answer": 0,
      "explanation": "Consumption is a continuous numerical target, making regression appropriate."
    },
    {
      "id": "q03",
      "topic": "classification",
      "question": "A classifier returns probabilities for classes A, B, and C that sum to 1. What decision rule is commonly used for a basic multiclass prediction?",
      "options": [
        "Choose the class with the highest predicted probability",
        "Choose the class with the smallest probability",
        "Average the class names",
        "Randomly select a class every time"
      ],
      "answer": 0,
      "explanation": "Argmax over class scores or probabilities is a common baseline decision rule."
    },
    {
      "id": "q04",
      "topic": "linear model",
      "question": "For y = w·x + b, increasing b while holding x and w fixed changes what?",
      "options": [
        "The prediction by the same additive amount",
        "Only the input dimensionality",
        "The number of classes",
        "The feature order"
      ],
      "answer": 0,
      "explanation": "The bias term shifts the model output without changing the input features."
    },
    {
      "id": "q05",
      "topic": "loss",
      "question": "Why can mean squared error strongly penalize a few very large regression errors?",
      "options": [
        "The errors are squared before averaging",
        "It ignores all errors",
        "It converts regression into clustering",
        "It always produces a percentage"
      ],
      "answer": 0,
      "explanation": "Squaring makes large residuals contribute disproportionately to the total loss."
    },
    {
      "id": "q06",
      "topic": "gradient descent",
      "question": "If a learning rate is excessively large, what can happen during optimization?",
      "options": [
        "Updates can overshoot useful regions and cause unstable or divergent training",
        "The model automatically becomes unbiased",
        "The dataset becomes larger",
        "Validation leakage disappears"
      ],
      "answer": 0,
      "explanation": "Large steps can jump across minima or cause the optimization to diverge."
    },
    {
      "id": "q07",
      "topic": "regularization",
      "question": "A model has very low training error but poor validation error. Which change can directly reduce effective model complexity?",
      "options": [
        "Add regularization or otherwise constrain the model",
        "Increase leakage",
        "Remove the validation set",
        "Train only on the test set"
      ],
      "answer": 0,
      "explanation": "Regularization discourages overly complex parameter configurations and can improve generalization."
    },
    {
      "id": "q08",
      "topic": "bias variance",
      "question": "A very simple model consistently misses nonlinear patterns in both training and validation data. This is most consistent with:",
      "options": [
        "High bias or underfitting",
        "Severe test leakage",
        "High variance only",
        "Perfect generalization"
      ],
      "answer": 0,
      "explanation": "A model that cannot fit important structure even on training data is underfitting."
    },
    {
      "id": "q09",
      "topic": "train validation test",
      "question": "What is the primary role of the validation set during development?",
      "options": [
        "Compare configurations and make model-selection decisions without using the final test estimate",
        "Replace all training data",
        "Provide the final production labels",
        "Guarantee fairness"
      ],
      "answer": 0,
      "explanation": "Validation data supports development choices; the test set is reserved for final assessment."
    },
    {
      "id": "q10",
      "topic": "cross validation",
      "question": "Why can k-fold cross-validation be useful when the dataset is relatively small?",
      "options": [
        "It reuses observations across multiple train/validation splits to obtain a more stable estimate",
        "It eliminates the need for labels",
        "It guarantees the best model",
        "It prevents all forms of leakage automatically"
      ],
      "answer": 0,
      "explanation": "Cross-validation provides several validation estimates from limited data, though preprocessing must still be handled correctly."
    },
    {
      "id": "q11",
      "topic": "preprocessing",
      "question": "A numeric feature ranges from 0 to 1 while another ranges from 0 to 100000. Which preprocessing may help scale-sensitive algorithms?",
      "options": [
        "Standardization or normalization",
        "Duplicating the larger feature",
        "Randomly deleting values",
        "Converting every value to a class label"
      ],
      "answer": 0,
      "explanation": "Scaling puts features on comparable numerical ranges for algorithms sensitive to magnitude."
    },
    {
      "id": "q12",
      "topic": "categorical encoding",
      "question": "A model receives a nominal feature with categories red, green, and blue. Why can one-hot encoding be preferable to assigning 1, 2, 3?",
      "options": [
        "It avoids falsely imposing an ordinal relationship among categories",
        "It always reduces dimensionality to one value",
        "It converts categories into continuous measurements with real order",
        "It guarantees higher accuracy"
      ],
      "answer": 0,
      "explanation": "One-hot encoding represents categories without asserting that one category is numerically greater than another."
    },
    {
      "id": "q13",
      "topic": "missing data",
      "question": "Why should the rule used to impute missing training values be learned from training data only?",
      "options": [
        "Using validation or test statistics can leak information into the training process",
        "Test values are always incorrect",
        "Imputation cannot be applied to validation data",
        "Training data cannot contain missing values"
      ],
      "answer": 0,
      "explanation": "The transformation must not use information from held-out sets."
    },
    {
      "id": "q14",
      "topic": "data leakage",
      "question": "A feature records whether a customer eventually cancelled a service, but the model is supposed to predict cancellation before it happens. What is the issue?",
      "options": [
        "Target leakage because the feature contains future information",
        "Underfitting",
        "Class balancing",
        "Dimensionality reduction"
      ],
      "answer": 0,
      "explanation": "The feature would not be available at prediction time and directly encodes the outcome."
    },
    {
      "id": "q15",
      "topic": "metrics",
      "question": "For a medical screening system, missing a true positive is especially costly. Which metric should be closely monitored?",
      "options": [
        "Recall/sensitivity",
        "Only accuracy",
        "Only training loss",
        "Number of model parameters"
      ],
      "answer": 0,
      "explanation": "Recall measures the fraction of actual positives that the system detects."
    },
    {
      "id": "q16",
      "topic": "precision",
      "question": "A fraud detector flags very few transactions, and most flagged transactions are actually fraudulent. Which metric is likely high?",
      "options": [
        "Precision",
        "Recall necessarily",
        "Mean squared error",
        "R-squared necessarily"
      ],
      "answer": 0,
      "explanation": "Precision is the fraction of predicted positives that are actually positive."
    },
    {
      "id": "q17",
      "topic": "confusion matrix",
      "question": "A classifier has TP=80, FP=20, FN=10, TN=890. What is precision?",
      "options": [
        "80%",
        "88.9%",
        "90%",
        "97.8%"
      ],
      "answer": 0,
      "explanation": "Precision = TP/(TP+FP) = 80/(80+20) = 80%."
    },
    {
      "id": "q18",
      "topic": "metrics",
      "question": "Using TP=80, FP=20, FN=10, what is recall?",
      "options": [
        "88.9%",
        "80%",
        "90%",
        "97.8%"
      ],
      "answer": 0,
      "explanation": "Recall = TP/(TP+FN) = 80/90 ≈ 88.9%."
    },
    {
      "id": "q19",
      "topic": "F1",
      "question": "When precision and recall both matter and a single harmonic-mean summary is useful, which metric fits?",
      "options": [
        "F1 score",
        "Accuracy only",
        "MSE",
        "R-squared"
      ],
      "answer": 0,
      "explanation": "F1 is the harmonic mean of precision and recall."
    },
    {
      "id": "q20",
      "topic": "ROC threshold",
      "question": "Lowering a binary classifier's decision threshold will often have what effect?",
      "options": [
        "More examples are predicted positive, usually increasing recall while potentially lowering precision",
        "It guarantees both precision and recall increase",
        "It changes the training labels",
        "It removes class imbalance"
      ],
      "answer": 0,
      "explanation": "A lower threshold makes positive predictions easier, affecting the precision-recall trade-off."
    },
    {
      "id": "q21",
      "topic": "class imbalance",
      "question": "A dataset contains 990 negatives and 10 positives. Why can 99% accuracy be meaningless?",
      "options": [
        "A model predicting every example as negative can achieve 99% accuracy while detecting no positives",
        "Accuracy becomes greater than 100%",
        "The dataset has no features",
        "Precision cannot be computed"
      ],
      "answer": 0,
      "explanation": "The trivial all-negative classifier already reaches 99% accuracy."
    },
    {
      "id": "q22",
      "topic": "clustering",
      "question": "A retailer wants to discover customer groups without labels. What is a natural starting approach?",
      "options": [
        "Clustering",
        "Supervised regression",
        "Binary classification with invented labels",
        "Sequence generation"
      ],
      "answer": 0,
      "explanation": "Clustering is an unsupervised method for discovering groups or structure."
    },
    {
      "id": "q23",
      "topic": "kmeans",
      "question": "In k-means, what does the algorithm repeatedly optimize in its standard formulation?",
      "options": [
        "Within-cluster squared distances to assigned centroids",
        "The number of labels in the dataset",
        "Classification accuracy",
        "The depth of a decision tree"
      ],
      "answer": 0,
      "explanation": "K-means minimizes the sum of squared distances between points and their assigned cluster centroids."
    },
    {
      "id": "q24",
      "topic": "clustering",
      "question": "Why can k-means produce poor clusters when groups are highly non-spherical?",
      "options": [
        "Its centroid-based distance objective favors compact roughly spherical regions",
        "K-means requires labels",
        "K-means cannot use numerical data",
        "It always creates one cluster"
      ],
      "answer": 0,
      "explanation": "The standard k-means objective is not well matched to arbitrary cluster shapes."
    },
    {
      "id": "q25",
      "topic": "PCA",
      "question": "What is the primary idea of PCA?",
      "options": [
        "Find directions capturing large variance and represent data in a lower-dimensional subspace",
        "Create labels for every observation",
        "Guarantee causal features",
        "Convert all categorical data to text"
      ],
      "answer": 0,
      "explanation": "PCA constructs orthogonal components ordered by explained variance."
    },
    {
      "id": "q26",
      "topic": "feature engineering",
      "question": "A timestamp is available for every transaction. Which transformation could expose useful cyclic information for a model?",
      "options": [
        "Encode hour/day using sine and cosine features when periodicity matters",
        "Delete the timestamp automatically",
        "Use the raw timestamp as a random integer only",
        "Replace it with the target"
      ],
      "answer": 0,
      "explanation": "Sine/cosine encodings can represent cyclical continuity such as hour-of-day."
    },
    {
      "id": "q27",
      "topic": "feature selection",
      "question": "Why can removing redundant or irrelevant features help a model?",
      "options": [
        "It can reduce noise, complexity, and opportunities for overfitting",
        "It guarantees zero bias",
        "It makes the training set larger",
        "It eliminates the need for evaluation"
      ],
      "answer": 0,
      "explanation": "Useful feature selection can improve generalization and efficiency, although it must be validated."
    },
    {
      "id": "q28",
      "topic": "decision trees",
      "question": "A decision tree repeatedly chooses splits that improve node purity according to an objective. What is the purpose of a split?",
      "options": [
        "Partition the data into subsets that are more useful for predicting the target",
        "Increase the number of labels",
        "Randomize the target",
        "Scale every feature to unit variance"
      ],
      "answer": 0,
      "explanation": "Splits create regions where target outcomes become more homogeneous or predictable."
    },
    {
      "id": "q29",
      "topic": "random forests",
      "question": "Why does a random forest often generalize better than one highly flexible tree?",
      "options": [
        "It aggregates many varied trees, reducing variance through ensemble averaging",
        "It always uses a single tree",
        "It removes all training examples",
        "It guarantees no bias"
      ],
      "answer": 0,
      "explanation": "Bagging and feature randomness make individual trees less correlated, so aggregation can reduce variance."
    },
    {
      "id": "q30",
      "topic": "boosting",
      "question": "What distinguishes boosting conceptually from simple bagging?",
      "options": [
        "Boosting builds models sequentially so later models focus on correcting previous errors",
        "Boosting always trains exactly one model",
        "Boosting never uses residual information",
        "Boosting requires no training data"
      ],
      "answer": 0,
      "explanation": "Boosting creates a sequence of learners whose combined predictions address errors made by earlier learners."
    },
    {
      "id": "q31",
      "topic": "SVM",
      "question": "The margin is central to a linear support vector machine. What does a larger margin generally encourage?",
      "options": [
        "A decision boundary with greater separation from the closest training points",
        "More training labels",
        "A larger test set",
        "A deeper neural network"
      ],
      "answer": 0,
      "explanation": "SVM optimization seeks a separating hyperplane with a large margin under its formulation."
    },
    {
      "id": "q32",
      "topic": "nearest neighbors",
      "question": "Why can k-nearest neighbors be strongly affected by feature scaling?",
      "options": [
        "Distance calculations can be dominated by features with larger numerical scales",
        "KNN never uses distances",
        "Scaling changes the labels",
        "KNN is a tree algorithm"
      ],
      "answer": 0,
      "explanation": "KNN relies directly on distances, so feature magnitudes influence neighbor selection."
    },
    {
      "id": "q33",
      "topic": "pipelines",
      "question": "What is a major benefit of an ML preprocessing pipeline?",
      "options": [
        "It applies transformations consistently and helps prevent train/test preprocessing mistakes",
        "It guarantees the model will pass every test",
        "It removes the need for data validation",
        "It automatically chooses the business objective"
      ],
      "answer": 0,
      "explanation": "Pipelines make transformation order and fitting behavior explicit and repeatable."
    },
    {
      "id": "q34",
      "topic": "hyperparameters",
      "question": "Which is a hyperparameter rather than a learned parameter in many common ML models?",
      "options": [
        "Tree maximum depth",
        "Linear regression coefficient learned from training",
        "A fitted centroid",
        "A neural network weight after training"
      ],
      "answer": 0,
      "explanation": "Hyperparameters are chosen outside the fitting process; learned parameters are estimated from data."
    },
    {
      "id": "q35",
      "topic": "grid search",
      "question": "What is the main purpose of hyperparameter search?",
      "options": [
        "Compare candidate configurations using an appropriate validation procedure",
        "Change the labels after testing",
        "Increase the test score by direct optimization",
        "Remove the need for a baseline"
      ],
      "answer": 0,
      "explanation": "Search procedures compare configurations while keeping the final test evaluation separate."
    },
    {
      "id": "q36",
      "topic": "text ML",
      "question": "A text classifier uses a bag-of-words representation. What information is largely lost compared with a sequence-aware representation?",
      "options": [
        "Word order and richer contextual relationships",
        "The existence of words entirely",
        "The document count",
        "All numerical information"
      ],
      "answer": 0,
      "explanation": "Basic bag-of-words represents token occurrence/frequency but not normal word order."
    },
    {
      "id": "q37",
      "topic": "TF-IDF",
      "question": "Why can TF-IDF assign a lower weight to a term appearing in almost every document?",
      "options": [
        "A term common across documents carries less discriminative information",
        "Common terms are always misspelled",
        "TF-IDF removes all nouns",
        "Rare words cannot be represented"
      ],
      "answer": 0,
      "explanation": "The inverse-document-frequency component downweights terms that occur in many documents."
    },
    {
      "id": "q38",
      "topic": "text preprocessing",
      "question": "Why might aggressive stemming or stop-word removal hurt a text classifier?",
      "options": [
        "It can remove distinctions that are predictive for the task",
        "It always increases vocabulary size",
        "It guarantees semantic understanding",
        "It prevents tokenization"
      ],
      "answer": 0,
      "explanation": "Preprocessing is task-dependent; removing words or morphological information can discard useful signals."
    },
    {
      "id": "q39",
      "topic": "evaluation",
      "question": "A model is tuned repeatedly against one validation split and eventually performs much worse on a fresh evaluation set. What happened?",
      "options": [
        "The development process may have overfit to the validation set",
        "The model became unsupervised",
        "The test set caused training",
        "Feature scaling guarantees this outcome"
      ],
      "answer": 0,
      "explanation": "Repeated decisions based on the same validation set can adapt the model to that split."
    },
    {
      "id": "q40",
      "topic": "calibration",
      "question": "A classifier outputs 0.9 probability for many cases, but only about 0.6 of those cases are actually positive. What issue should be investigated?",
      "options": [
        "Poor probability calibration",
        "Perfect calibration",
        "Class labels being unnecessary",
        "Underflow in the UI"
      ],
      "answer": 0,
      "explanation": "Calibration compares predicted probabilities with observed frequencies."
    },
    {
      "id": "q41",
      "topic": "model drift",
      "question": "A deployed fraud model's recall drops months after launch while the code is unchanged. What should the team examine?",
      "options": [
        "Changes in data distribution, fraud behavior, labels, and the production pipeline",
        "Only the font used in the dashboard",
        "Whether Python syntax changed",
        "Only the original training accuracy"
      ],
      "answer": 0,
      "explanation": "Model performance can degrade because the environment and data-generating process change."
    },
    {
      "id": "q42",
      "topic": "error analysis",
      "question": "A classifier's false positives are concentrated in one document type. What is the most useful first step?",
      "options": [
        "Inspect representative errors and compare that segment's data/features with successful cases",
        "Immediately double model depth",
        "Delete all false positives from evaluation",
        "Report only aggregate accuracy"
      ],
      "answer": 0,
      "explanation": "Segmented error analysis can identify systematic representation or preprocessing problems."
    },
    {
      "id": "q43",
      "topic": "model selection",
      "question": "Model A has 0.91 validation F1 and 80 ms latency. Model B has 0.915 F1 and 900 ms latency, while the product limit is 100 ms. Which interpretation is correct?",
      "options": [
        "Model A satisfies the stated latency constraint; Model B does not",
        "Model B must be selected because its F1 is higher",
        "Latency is irrelevant once F1 is measured",
        "Both models satisfy the constraint"
      ],
      "answer": 0,
      "explanation": "A tiny metric improvement cannot override an explicit system constraint."
    },
    {
      "id": "q44",
      "topic": "end-to-end pipeline",
      "question": "A preprocessing transformer was fit separately on training and production data. Why is that dangerous?",
      "options": [
        "The representations may be inconsistent because the learned transformation differs between environments",
        "It guarantees better accuracy",
        "It converts supervised learning to clustering",
        "It removes feature drift"
      ],
      "answer": 0,
      "explanation": "Production should apply the same learned transformation logic used during training."
    },
    {
      "id": "q45",
      "topic": "integrated ML",
      "question": "A model has excellent cross-validation results but fails on a new geographic region. What should be investigated first?",
      "options": [
        "Whether the validation distribution represented the target deployment region and whether regional features or drift matter",
        "Whether the model name is too short",
        "Whether cross-validation is always invalid",
        "Whether the test set should be deleted"
      ],
      "answer": 0,
      "explanation": "Strong validation is conditional on how representative the validation process is of deployment conditions."
    }
  ],
  "deep-learning": [
    {
      "id": "q01",
      "topic": "neural networks",
      "question": "A neuron computes z = w·x + b and then applies an activation. What is the role of the activation function?",
      "options": [
        "Introduce a nonlinear transformation so stacked layers can represent nonlinear relationships",
        "Store the dataset",
        "Guarantee zero loss",
        "Perform database indexing"
      ],
      "answer": 0,
      "explanation": "Without nonlinear activations, a stack of linear layers collapses to a single linear transformation."
    },
    {
      "id": "q02",
      "topic": "forward pass",
      "question": "In a feed-forward network, what happens during the forward pass?",
      "options": [
        "Inputs are transformed layer by layer into an output prediction",
        "Weights are permanently deleted",
        "Only the loss is calculated without a prediction",
        "The test set is used to update weights"
      ],
      "answer": 0,
      "explanation": "The forward pass computes activations and ultimately the model output."
    },
    {
      "id": "q03",
      "topic": "backpropagation",
      "question": "What does backpropagation compute that an optimizer needs?",
      "options": [
        "Gradients of the loss with respect to model parameters",
        "The final test accuracy only",
        "The class names",
        "The training dataset size"
      ],
      "answer": 0,
      "explanation": "Backpropagation efficiently applies the chain rule to compute parameter gradients."
    },
    {
      "id": "q04",
      "topic": "chain rule",
      "question": "Why is the chain rule central to neural-network training?",
      "options": [
        "A network composes many functions, so derivatives must be propagated through the composition",
        "Neural networks never use derivatives",
        "It replaces the loss function",
        "It converts images to labels"
      ],
      "answer": 0,
      "explanation": "The chain rule connects the derivative of the final loss to intermediate operations and parameters."
    },
    {
      "id": "q05",
      "topic": "activation",
      "question": "A deep network uses only linear activations in every layer. What is the key limitation?",
      "options": [
        "The whole network remains equivalent to one linear transformation",
        "It becomes automatically probabilistic",
        "It cannot accept numbers",
        "It necessarily overfits every dataset"
      ],
      "answer": 0,
      "explanation": "Composing linear functions remains linear regardless of depth."
    },
    {
      "id": "q06",
      "topic": "ReLU",
      "question": "Why is ReLU widely used in hidden layers?",
      "options": [
        "It provides a simple nonlinear transformation and has a useful gradient for positive inputs",
        "It guarantees perfect calibration",
        "It is a loss function",
        "It requires no parameters"
      ],
      "answer": 0,
      "explanation": "ReLU(x)=max(0,x) introduces nonlinearity and is computationally simple."
    },
    {
      "id": "q07",
      "topic": "dying ReLU",
      "question": "A large fraction of ReLU neurons output zero for almost every training example. What issue might this indicate?",
      "options": [
        "Dead or inactive ReLU units",
        "Perfect convergence",
        "Data normalization success",
        "Automatic regularization"
      ],
      "answer": 0,
      "explanation": "If units remain on the zero side and receive no useful gradient, they may become effectively inactive."
    },
    {
      "id": "q08",
      "topic": "sigmoid",
      "question": "Why is sigmoid commonly used for a binary probability output?",
      "options": [
        "It maps a scalar logit into a value between 0 and 1",
        "It creates arbitrary integer classes",
        "It removes all nonlinearities",
        "It guarantees calibrated probabilities"
      ],
      "answer": 0,
      "explanation": "Sigmoid maps real-valued logits to (0,1), though calibration is a separate property."
    },
    {
      "id": "q09",
      "topic": "softmax",
      "question": "What does softmax do to a vector of class logits in a standard multiclass classifier?",
      "options": [
        "Converts logits into normalized positive values that sum to 1",
        "Makes every class equally likely",
        "Removes all class information",
        "Computes convolution filters"
      ],
      "answer": 0,
      "explanation": "Softmax exponentiates and normalizes logits into a categorical probability-like distribution."
    },
    {
      "id": "q10",
      "topic": "loss",
      "question": "For multiclass classification with one correct class, why is cross-entropy useful?",
      "options": [
        "It penalizes assigning low probability to the correct class and provides a differentiable training objective",
        "It measures image resolution",
        "It removes the need for labels",
        "It always equals accuracy"
      ],
      "answer": 0,
      "explanation": "Cross-entropy encourages high probability on the observed target class."
    },
    {
      "id": "q11",
      "topic": "learning rate",
      "question": "Training loss oscillates wildly and sometimes increases after parameter updates. What should be investigated first?",
      "options": [
        "Whether the learning rate or optimization configuration is too aggressive",
        "Whether the model needs more output classes",
        "Whether the test set should be added to training",
        "Whether all activations should be removed"
      ],
      "answer": 0,
      "explanation": "An excessively large step size can destabilize optimization."
    },
    {
      "id": "q12",
      "topic": "vanishing gradients",
      "question": "Why can sigmoid/tanh activations contribute to vanishing gradients in very deep networks?",
      "options": [
        "Their derivatives can become small in saturated regions, causing repeated gradient shrinkage",
        "They always have gradients greater than 1",
        "They contain convolution kernels",
        "They cannot represent probabilities"
      ],
      "answer": 0,
      "explanation": "Repeated multiplication by small derivatives can make gradients extremely small in early layers."
    },
    {
      "id": "q13",
      "topic": "batch normalization",
      "question": "What is one practical effect of batch normalization during training?",
      "options": [
        "It normalizes intermediate activations using batch statistics and can improve optimization behavior",
        "It guarantees no overfitting",
        "It replaces the optimizer",
        "It turns every layer into a convolution"
      ],
      "answer": 0,
      "explanation": "Batch normalization changes activation distributions during training and often helps optimization."
    },
    {
      "id": "q14",
      "topic": "dropout",
      "question": "During training, dropout randomly disables some units. Why can this help generalization?",
      "options": [
        "It discourages reliance on a fixed subset of co-adapted features",
        "It increases test-set leakage",
        "It makes every neuron permanent",
        "It removes the need for validation"
      ],
      "answer": 0,
      "explanation": "Randomly dropping units can act as a regularizer by reducing co-adaptation."
    },
    {
      "id": "q15",
      "topic": "CNNs",
      "question": "Why are convolutional layers effective for images?",
      "options": [
        "They exploit local spatial structure and reuse filters across positions",
        "They ignore spatial relationships completely",
        "They require one parameter for every possible image",
        "They can only process text"
      ],
      "answer": 0,
      "explanation": "Convolutions use local receptive fields and shared weights to detect patterns across spatial locations."
    },
    {
      "id": "q16",
      "topic": "convolution",
      "question": "A 3×3 convolution filter slides across an image. What does each output value represent conceptually?",
      "options": [
        "A weighted combination of a local 3×3 receptive field and the filter parameters",
        "The average of the entire image",
        "A random class label",
        "A database row"
      ],
      "answer": 0,
      "explanation": "Each convolution output is computed from a local patch and shared kernel weights."
    },
    {
      "id": "q17",
      "topic": "stride",
      "question": "Increasing convolution stride generally does what?",
      "options": [
        "Moves the filter farther between positions and can reduce spatial output dimensions",
        "Always increases spatial resolution",
        "Adds more input channels",
        "Removes learned parameters"
      ],
      "answer": 0,
      "explanation": "Larger stride samples fewer positions and commonly downsamples the feature map."
    },
    {
      "id": "q18",
      "topic": "padding",
      "question": "Why is padding used in CNNs?",
      "options": [
        "It can preserve border information and control the spatial dimensions after convolution",
        "It removes channels",
        "It guarantees zero loss",
        "It converts images to text"
      ],
      "answer": 0,
      "explanation": "Padding adds values around the input so border information and output dimensions can be controlled."
    },
    {
      "id": "q19",
      "topic": "pooling",
      "question": "What is a common purpose of max pooling?",
      "options": [
        "Downsample a feature map while retaining strong local activations",
        "Increase the number of pixels",
        "Learn a new class label",
        "Perform gradient descent"
      ],
      "answer": 0,
      "explanation": "Max pooling summarizes local regions using the maximum activation and reduces spatial resolution."
    },
    {
      "id": "q20",
      "topic": "receptive field",
      "question": "In a CNN, what does a neuron's receptive field describe?",
      "options": [
        "The region of the input that can influence that neuron's activation",
        "The number of classes",
        "The optimizer's learning rate",
        "The number of training epochs"
      ],
      "answer": 0,
      "explanation": "The receptive field grows as layers combine information from increasingly larger input regions."
    },
    {
      "id": "q21",
      "topic": "CNN architecture",
      "question": "Why can stacking several small 3×3 convolutions be attractive compared with one very large convolution?",
      "options": [
        "It can increase effective receptive field while inserting nonlinearities and often using parameters efficiently",
        "It removes all nonlinearities",
        "It guarantees no overfitting",
        "It requires no training"
      ],
      "answer": 0,
      "explanation": "Multiple small convolutions can build hierarchical features with nonlinear transformations between them."
    },
    {
      "id": "q22",
      "topic": "transfer learning",
      "question": "A new image dataset is small but resembles a domain represented in a pretrained model. What strategy is often useful?",
      "options": [
        "Start from pretrained weights and fine-tune selected layers",
        "Initialize every layer randomly and discard learned representations",
        "Use only the test images for training",
        "Remove all convolution layers"
      ],
      "answer": 0,
      "explanation": "Transfer learning reuses learned representations when the source and target domains are sufficiently related."
    },
    {
      "id": "q23",
      "topic": "fine tuning",
      "question": "Why might early layers of an image model be frozen initially during transfer learning?",
      "options": [
        "Early layers often contain general low-level features, while later layers are more task-specific",
        "Frozen layers cannot contain useful information",
        "It guarantees perfect accuracy",
        "Only the first layer can learn"
      ],
      "answer": 0,
      "explanation": "Lower-level visual features can transfer, reducing the number of parameters that need immediate adaptation."
    },
    {
      "id": "q24",
      "topic": "augmentation",
      "question": "Why can random crops, flips, or color changes help image classification?",
      "options": [
        "They expose the model to varied training examples that can encourage robustness to benign transformations",
        "They add correct labels automatically",
        "They replace the test set",
        "They guarantee invariance to every transformation"
      ],
      "answer": 0,
      "explanation": "Augmentation expands the effective training distribution with plausible variations."
    },
    {
      "id": "q25",
      "topic": "overfitting",
      "question": "A CNN has nearly perfect training accuracy but much lower validation accuracy. Which intervention is reasonable?",
      "options": [
        "Use stronger augmentation, regularization, or transfer learning and inspect the dataset",
        "Train only longer without monitoring",
        "Delete validation images",
        "Increase leakage"
      ],
      "answer": 0,
      "explanation": "These interventions can reduce overfitting or improve representation quality."
    },
    {
      "id": "q26",
      "topic": "object detection",
      "question": "How does object detection differ from image classification?",
      "options": [
        "Detection identifies objects and their locations, while classification usually assigns labels to the image or predefined regions",
        "Detection cannot use neural networks",
        "Classification always outputs bounding boxes",
        "They are exactly the same task"
      ],
      "answer": 0,
      "explanation": "Detection combines recognition with localization."
    },
    {
      "id": "q27",
      "topic": "segmentation",
      "question": "What is semantic segmentation trying to predict?",
      "options": [
        "A class label for each pixel or spatial location",
        "Only one label for the entire dataset",
        "A single scalar learning rate",
        "The training batch size"
      ],
      "answer": 0,
      "explanation": "Semantic segmentation assigns semantic categories across image pixels."
    },
    {
      "id": "q28",
      "topic": "multiclass metrics",
      "question": "A segmentation model looks good globally but performs poorly on a small object class. Why can per-class metrics matter?",
      "options": [
        "Aggregate metrics can hide poor performance on rare or small classes",
        "Per-class metrics always equal accuracy",
        "Small classes cannot be evaluated",
        "Segmentation has no labels"
      ],
      "answer": 0,
      "explanation": "Class-level evaluation reveals failures hidden by dominant classes."
    },
    {
      "id": "q29",
      "topic": "data imbalance",
      "question": "A medical image dataset has far fewer positive scans than negative scans. What is a key risk?",
      "options": [
        "The model can favor the majority class and appear strong on aggregate accuracy",
        "The model cannot compute gradients",
        "Images become grayscale automatically",
        "The validation set becomes larger"
      ],
      "answer": 0,
      "explanation": "Class imbalance can cause poor minority-class detection despite high overall accuracy."
    },
    {
      "id": "q30",
      "topic": "optimization",
      "question": "What does Adam combine conceptually?",
      "options": [
        "Adaptive parameter updates using estimates of gradient moments",
        "Only a fixed random search",
        "A convolution and a pooling layer",
        "A data-labeling algorithm"
      ],
      "answer": 0,
      "explanation": "Adam maintains moving estimates related to first and second moments of gradients to adapt updates."
    },
    {
      "id": "q31",
      "topic": "batch size",
      "question": "Increasing batch size changes what aspect of training?",
      "options": [
        "How many examples contribute to each gradient estimate and the computational/memory pattern",
        "The number of output classes automatically",
        "The ground-truth labels",
        "The image resolution necessarily"
      ],
      "answer": 0,
      "explanation": "Batch size affects gradient estimation, memory use, and optimization dynamics."
    },
    {
      "id": "q32",
      "topic": "epoch",
      "question": "One epoch normally means:",
      "options": [
        "One complete pass through the training dataset",
        "One gradient calculation total",
        "One test example",
        "One neuron activation"
      ],
      "answer": 0,
      "explanation": "An epoch is a complete traversal of the training dataset."
    },
    {
      "id": "q33",
      "topic": "early stopping",
      "question": "Validation loss starts increasing while training loss keeps decreasing. Why can early stopping help?",
      "options": [
        "It can stop training before further fitting to training-specific noise harms validation performance",
        "It increases the test set",
        "It removes the loss function",
        "It makes the network linear"
      ],
      "answer": 0,
      "explanation": "Early stopping is a regularization strategy based on held-out performance."
    },
    {
      "id": "q34",
      "topic": "architecture evolution",
      "question": "Why did deeper CNN architectures become practical with techniques such as residual connections?",
      "options": [
        "Residual paths can make optimization of deeper networks easier by providing alternative gradient pathways",
        "Residual connections remove all parameters",
        "They prevent every form of overfitting",
        "They turn CNNs into decision trees"
      ],
      "answer": 0,
      "explanation": "Skip connections help information and gradients propagate through deep networks."
    },
    {
      "id": "q35",
      "topic": "residual learning",
      "question": "In a residual block, the network learns F(x) and adds x. What is the output?",
      "options": [
        "F(x) + x",
        "F(x) × x only",
        "x − label",
        "Softmax(F(x)) necessarily"
      ],
      "answer": 0,
      "explanation": "Residual learning adds the block transformation to the shortcut input."
    },
    {
      "id": "q36",
      "topic": "representation",
      "question": "Why are early CNN feature maps often useful for edges and textures?",
      "options": [
        "Local filters can learn low-level visual patterns that combine into higher-level structures in later layers",
        "Early layers always know object names",
        "Edges are stored in the labels",
        "CNNs do not learn representations"
      ],
      "answer": 0,
      "explanation": "Hierarchical convolutional representations often progress from local patterns to more semantic structures."
    },
    {
      "id": "q37",
      "topic": "computer vision",
      "question": "A camera system works on one lighting condition but fails under another. Which improvement is most directly relevant?",
      "options": [
        "Increase representative training variation and evaluate under the deployment lighting distribution",
        "Remove all augmentation",
        "Evaluate only on the original lighting",
        "Increase the class count"
      ],
      "answer": 0,
      "explanation": "Robustness requires training/evaluation conditions that reflect expected deployment variation."
    },
    {
      "id": "q38",
      "topic": "model evaluation",
      "question": "Why should image augmentation be applied carefully to validation data?",
      "options": [
        "Validation transformations should represent evaluation conditions rather than artificially changing the target task",
        "Validation data must always be augmented more heavily than training",
        "Augmentation automatically improves every metric",
        "Labels are unnecessary after augmentation"
      ],
      "answer": 0,
      "explanation": "Evaluation preprocessing should preserve a realistic estimate of deployment performance."
    },
    {
      "id": "q39",
      "topic": "gradient debugging",
      "question": "A network's gradients become NaN during training. Which investigation is appropriate?",
      "options": [
        "Check numerical instability, learning rate, data values, loss computation, and activation behavior",
        "Only change the UI theme",
        "Add more output classes",
        "Delete the validation set"
      ],
      "answer": 0,
      "explanation": "NaNs can originate from unstable updates, invalid data, overflow, or problematic numerical operations."
    },
    {
      "id": "q40",
      "topic": "model capacity",
      "question": "A tiny CNN cannot fit even the training set, while a larger model can fit it but overfits. What does this comparison suggest?",
      "options": [
        "The smaller model may have insufficient capacity, while the larger model needs stronger generalization controls",
        "Both models have identical capacity",
        "The training data is necessarily wrong",
        "Overfitting means the smaller model is better"
      ],
      "answer": 0,
      "explanation": "Training fit helps distinguish insufficient capacity from excessive capacity."
    },
    {
      "id": "q41",
      "topic": "deployment",
      "question": "A vision model must run on an edge device with strict latency and memory limits. Which concern becomes especially important?",
      "options": [
        "Model size, inference latency, memory footprint, and hardware compatibility",
        "Only training accuracy",
        "Only the number of dataset rows",
        "The color of the dashboard"
      ],
      "answer": 0,
      "explanation": "Edge deployment imposes resource constraints that influence architecture and optimization."
    },
    {
      "id": "q42",
      "topic": "compression",
      "question": "Why might quantization be considered for an edge vision model?",
      "options": [
        "It can reduce numerical precision to lower memory or computation costs, subject to accuracy impact",
        "It always improves accuracy",
        "It increases the number of parameters",
        "It replaces labels"
      ],
      "answer": 0,
      "explanation": "Quantization can reduce model footprint and accelerate inference on compatible hardware, with possible accuracy trade-offs."
    },
    {
      "id": "q43",
      "topic": "vision pipeline",
      "question": "A model performs well in a notebook but poorly in production because image resizing differs between environments. What failed?",
      "options": [
        "The preprocessing contract between training and inference",
        "The number of classes",
        "The optimizer name",
        "The loss function necessarily"
      ],
      "answer": 0,
      "explanation": "Training and inference must use compatible preprocessing so the model receives data in the expected representation."
    },
    {
      "id": "q44",
      "topic": "integrated DL",
      "question": "A team compares two CNNs: one has slightly better validation accuracy but 5× latency. The application requires real-time inference. What should guide the decision?",
      "options": [
        "The explicit latency requirement together with accuracy and operational trade-offs",
        "Validation accuracy alone",
        "Parameter count alone",
        "Training time alone"
      ],
      "answer": 0,
      "explanation": "Model selection is constrained by the actual deployment requirements."
    },
    {
      "id": "q45",
      "topic": "capstone reasoning",
      "question": "A medical imaging model performs strongly overall but misses a clinically important rare condition. What should happen before deployment?",
      "options": [
        "Perform targeted subgroup/error analysis, improve data or decision thresholds, and validate the high-risk failure mode",
        "Deploy because overall accuracy is high",
        "Remove rare cases from evaluation",
        "Report only the average accuracy"
      ],
      "answer": 0,
      "explanation": "Rare high-impact errors require targeted evaluation and risk controls rather than relying on aggregate performance."
    }
  ],
  "generative-ai": [
    {
      "id": "q01",
      "topic": "GenAI foundations",
      "question": "A generative model produces a new image from a text prompt. What distinguishes this task from ordinary classification?",
      "options": [
        "The model synthesizes an output conditioned on input rather than selecting only a predefined label",
        "It cannot be evaluated",
        "It must use rules only",
        "It never uses training data"
      ],
      "answer": 0,
      "explanation": "Generation constructs new content while classification normally selects among predefined categories."
    },
    {
      "id": "q02",
      "topic": "model families",
      "question": "Why can different generative model families produce different trade-offs in quality, controllability, and sampling behavior?",
      "options": [
        "Their objectives and generation mechanisms differ",
        "All generative models optimize exactly the same function",
        "Architecture never affects generation",
        "Training data is irrelevant"
      ],
      "answer": 0,
      "explanation": "Model family and objective shape how generation and conditioning work."
    },
    {
      "id": "q03",
      "topic": "latent spaces",
      "question": "Why are latent representations useful in generative modeling?",
      "options": [
        "They can provide a compact learned representation from which meaningful transformations or generation can be performed",
        "They are only database indexes",
        "They eliminate training",
        "They always contain human-readable labels"
      ],
      "answer": 0,
      "explanation": "Latent spaces encode learned structure in a representation used by the generative model."
    },
    {
      "id": "q04",
      "topic": "inference",
      "question": "A temperature-like decoding control is increased for a language model. What is the intended effect in common sampling schemes?",
      "options": [
        "Make the token distribution flatter, generally increasing randomness and diversity",
        "Force the highest-probability token every time",
        "Disable tokenization",
        "Change the training dataset"
      ],
      "answer": 0,
      "explanation": "Higher temperature generally makes lower-probability tokens relatively more likely during sampling."
    },
    {
      "id": "q05",
      "topic": "decoding",
      "question": "What is a practical effect of greedy decoding?",
      "options": [
        "At each step it selects the currently highest-scoring token, which is simple but can reduce diversity",
        "It samples every possible sequence",
        "It always produces factual answers",
        "It requires no model probabilities"
      ],
      "answer": 0,
      "explanation": "Greedy decoding is deterministic locally and may miss better or more diverse sequences."
    },
    {
      "id": "q06",
      "topic": "LLMs",
      "question": "A language model predicts the next token based on preceding context. What does the training objective teach it to model?",
      "options": [
        "Statistical relationships in token sequences that support next-token prediction",
        "Only image pixels",
        "A fixed list of business rules",
        "Database indexes"
      ],
      "answer": 0,
      "explanation": "Next-token prediction trains the model to estimate token distributions conditioned on context."
    },
    {
      "id": "q07",
      "topic": "tokenization",
      "question": "Why can token count differ substantially from character count?",
      "options": [
        "Tokenizers may represent words as multiple subword or other units rather than one token per character or word",
        "Every character is always exactly one token",
        "Tokenization happens only after generation",
        "Tokens are database rows"
      ],
      "answer": 0,
      "explanation": "Tokenization maps text into model-specific units such as subwords, so token and character counts differ."
    },
    {
      "id": "q08",
      "topic": "context window",
      "question": "A prompt plus retrieved documents exceeds a model's context limit. What is the immediate problem?",
      "options": [
        "The full input cannot be processed within that model's available context window",
        "The model automatically learns the missing text",
        "Embeddings become labels",
        "The vector database stops existing"
      ],
      "answer": 0,
      "explanation": "Context windows impose an input/output token budget that cannot be exceeded without changing the strategy."
    },
    {
      "id": "q09",
      "topic": "prompt engineering",
      "question": "A prompt asks for a structured JSON response but the model sometimes adds prose around it. Which approach can improve reliability?",
      "options": [
        "Explicit output schema instructions plus validation and, where supported, structured-output constraints",
        "Making the prompt longer without specifying structure",
        "Removing the requested schema",
        "Increasing randomness"
      ],
      "answer": 0,
      "explanation": "Clear schemas and machine-side validation reduce ambiguity and make outputs easier to consume."
    },
    {
      "id": "q10",
      "topic": "few shot",
      "question": "What is the purpose of few-shot examples in a prompt?",
      "options": [
        "Demonstrate the desired task pattern and output format through examples",
        "Retrain the base model weights permanently",
        "Increase the context window automatically",
        "Replace evaluation"
      ],
      "answer": 0,
      "explanation": "Examples provide in-context demonstrations without changing model parameters."
    },
    {
      "id": "q11",
      "topic": "prompt injection",
      "question": "A RAG system retrieves a document containing instructions telling the model to ignore the application's system rules. What is this?",
      "options": [
        "A prompt-injection risk originating from retrieved content",
        "A database normalization issue",
        "A harmless formatting change",
        "A training epoch"
      ],
      "answer": 0,
      "explanation": "Untrusted retrieved text can contain adversarial instructions that attempt to manipulate model behavior."
    },
    {
      "id": "q12",
      "topic": "grounding",
      "question": "Why is retrieval useful for a question-answering assistant over private company documents?",
      "options": [
        "It supplies relevant external context that the model can use to ground its response",
        "It guarantees every generated statement is true",
        "It changes the model weights automatically",
        "It eliminates the need for chunking"
      ],
      "answer": 0,
      "explanation": "Retrieval provides task-specific evidence; it does not by itself guarantee correctness."
    },
    {
      "id": "q13",
      "topic": "embeddings",
      "question": "What does an embedding model typically produce for a text chunk?",
      "options": [
        "A numerical vector representing learned semantic or linguistic information",
        "A human-readable paragraph",
        "A database password",
        "A class label necessarily"
      ],
      "answer": 0,
      "explanation": "Embeddings map inputs into vector representations useful for similarity and retrieval."
    },
    {
      "id": "q14",
      "topic": "similarity",
      "question": "Two normalized embedding vectors have a cosine similarity close to 1. What does that generally indicate?",
      "options": [
        "They point in very similar directions in embedding space",
        "They are guaranteed to be identical strings",
        "They have zero semantic relation",
        "They have equal token counts"
      ],
      "answer": 0,
      "explanation": "Cosine similarity near 1 indicates close directional alignment."
    },
    {
      "id": "q15",
      "topic": "vector search",
      "question": "Why is approximate nearest-neighbor search used in many vector databases?",
      "options": [
        "It trades a small amount of exactness for much faster retrieval at large scale",
        "It guarantees the exact nearest vector every time",
        "It removes embeddings",
        "It requires no index"
      ],
      "answer": 0,
      "explanation": "ANN methods accelerate similarity search by avoiding exhaustive comparison with every vector."
    },
    {
      "id": "q16",
      "topic": "HNSW",
      "question": "What is HNSW primarily used for?",
      "options": [
        "Efficient approximate nearest-neighbor search over vector representations",
        "Tokenizing PDFs",
        "Training language-model weights",
        "Generating SQL schemas"
      ],
      "answer": 0,
      "explanation": "Hierarchical Navigable Small World graphs are an ANN indexing approach."
    },
    {
      "id": "q17",
      "topic": "chunking",
      "question": "Why can excessively large RAG chunks hurt retrieval quality?",
      "options": [
        "Relevant information can become less precise and retrieved context can contain too much unrelated material",
        "Large chunks always improve recall and precision",
        "Large chunks cannot be embedded",
        "Chunk size never affects retrieval"
      ],
      "answer": 0,
      "explanation": "Chunk granularity affects semantic specificity, context density, and downstream context usage."
    },
    {
      "id": "q18",
      "topic": "chunk overlap",
      "question": "Why might chunk overlap be used when splitting documents?",
      "options": [
        "It reduces the chance that important context crossing a boundary is lost",
        "It guarantees no duplicates",
        "It removes all token limits",
        "It prevents embeddings from being computed"
      ],
      "answer": 0,
      "explanation": "Overlap preserves some neighboring context across chunk boundaries, at the cost of redundancy."
    },
    {
      "id": "q19",
      "topic": "RAG pipeline",
      "question": "Which sequence best represents a basic RAG workflow?",
      "options": [
        "Ingest → chunk → embed/index → retrieve → construct context → generate",
        "Generate → delete documents → tokenize → deploy",
        "Train labels → compile UI → retrieve → ignore context",
        "Embed only the final answer"
      ],
      "answer": 0,
      "explanation": "RAG separates document preparation and retrieval from generation."
    },
    {
      "id": "q20",
      "topic": "reranking",
      "question": "Why can a reranker improve a retrieval pipeline?",
      "options": [
        "It can rescore a smaller candidate set using a more expressive relevance model after fast initial retrieval",
        "It eliminates the need for embeddings",
        "It changes the base model's weights",
        "It guarantees factuality"
      ],
      "answer": 0,
      "explanation": "A two-stage retriever can use fast ANN retrieval followed by more precise reranking."
    },
    {
      "id": "q21",
      "topic": "hybrid retrieval",
      "question": "Why combine lexical and vector retrieval in some systems?",
      "options": [
        "They capture complementary signals such as exact terms and semantic similarity",
        "They are identical algorithms",
        "Hybrid retrieval removes metadata",
        "It guarantees no hallucinations"
      ],
      "answer": 0,
      "explanation": "Keyword search can catch exact identifiers while vector search captures semantic similarity."
    },
    {
      "id": "q22",
      "topic": "metadata filtering",
      "question": "A company stores documents for many customers in one vector index. What control can help ensure a query retrieves only the current customer's documents?",
      "options": [
        "Metadata filtering or tenant-aware namespaces",
        "Higher temperature",
        "Longer prompts only",
        "Greedy decoding"
      ],
      "answer": 0,
      "explanation": "Tenant metadata or namespaces can constrain retrieval to authorized data."
    },
    {
      "id": "q23",
      "topic": "RAG citations",
      "question": "Why should a RAG system expose source references when the application requires traceability?",
      "options": [
        "They allow users or downstream systems to inspect which retrieved evidence supported an answer",
        "Citations guarantee the model cannot hallucinate",
        "Citations replace retrieval",
        "They increase token probability"
      ],
      "answer": 0,
      "explanation": "Source references improve auditability and enable evidence inspection."
    },
    {
      "id": "q24",
      "topic": "RAG evaluation",
      "question": "Which evaluation separates retrieval quality from answer-generation quality?",
      "options": [
        "Measure retrieval relevance/recall separately from grounded answer correctness and usefulness",
        "Measure only final token count",
        "Measure only model size",
        "Ignore retrieved documents"
      ],
      "answer": 0,
      "explanation": "A RAG pipeline has multiple stages, so stage-specific evaluation helps locate failures."
    },
    {
      "id": "q25",
      "topic": "hallucination",
      "question": "A model gives a confident answer unsupported by the supplied documents. What is the best description?",
      "options": [
        "An unsupported or hallucinated response relative to the available evidence",
        "Successful grounding",
        "A vector-index collision necessarily",
        "A tokenizer failure"
      ],
      "answer": 0,
      "explanation": "A response that is not supported by the available evidence can be considered hallucinated or ungrounded."
    },
    {
      "id": "q26",
      "topic": "API engineering",
      "question": "Why should an application keep an API key on the server rather than expose it in browser code?",
      "options": [
        "Client-side code can be inspected by users, so secrets should be protected server-side",
        "Browser code is always encrypted",
        "API keys are not sensitive",
        "It improves tokenization"
      ],
      "answer": 0,
      "explanation": "Server-side secret handling prevents straightforward exposure through shipped client code."
    },
    {
      "id": "q27",
      "topic": "structured outputs",
      "question": "A backend expects fields `name`, `amount`, and `currency`. Why is schema validation important?",
      "options": [
        "It catches malformed or unexpected model output before it reaches business logic",
        "It makes the model deterministic",
        "It removes the need for error handling",
        "It increases context automatically"
      ],
      "answer": 0,
      "explanation": "Validation creates a contract between probabilistic model output and deterministic application code."
    },
    {
      "id": "q28",
      "topic": "tool calling",
      "question": "An LLM emits a structured request to call a weather function, then uses the returned data to answer. What pattern is this?",
      "options": [
        "Tool/function calling with an external action or data source",
        "Pure next-token generation without tools",
        "Model pretraining",
        "Vector quantization"
      ],
      "answer": 0,
      "explanation": "The model selects or constructs a structured tool invocation that the application executes."
    },
    {
      "id": "q29",
      "topic": "agents",
      "question": "What makes an agentic workflow different from a single prompt-response call?",
      "options": [
        "It can iteratively reason or plan through steps and invoke tools or actions toward a goal",
        "It must always use a larger model",
        "It never uses external state",
        "It is simply a static HTML page"
      ],
      "answer": 0,
      "explanation": "Agentic systems orchestrate multiple reasoning/action steps rather than one isolated generation."
    },
    {
      "id": "q30",
      "topic": "memory",
      "question": "Why distinguish conversation history from durable user memory in an LLM application?",
      "options": [
        "They have different retention, privacy, relevance, and retrieval requirements",
        "They are always identical",
        "History can never be stored",
        "Durable memory requires no policy"
      ],
      "answer": 0,
      "explanation": "Application state and durable memory have different lifecycle and privacy considerations."
    },
    {
      "id": "q31",
      "topic": "multimodal",
      "question": "A model accepts text plus an image and answers questions about the image. What makes the interaction multimodal?",
      "options": [
        "It jointly processes or reasons over more than one modality",
        "It uses only text tokens",
        "It requires a vector database",
        "It cannot generate text"
      ],
      "answer": 0,
      "explanation": "Text and image are distinct modalities combined in one task."
    },
    {
      "id": "q32",
      "topic": "diffusion",
      "question": "At a high level, diffusion-based image generation commonly learns to reverse a gradual corruption/noising process.",
      "options": [
        "True: generation can be formulated as iterative denoising toward a sample",
        "False: diffusion models never use noise",
        "True: but only for classification",
        "False: because images cannot be represented numerically"
      ],
      "answer": 0,
      "explanation": "Diffusion approaches commonly learn a reverse process that transforms noise toward structured samples."
    },
    {
      "id": "q33",
      "topic": "multimodal RAG",
      "question": "A support system must answer questions using product manuals containing text and diagrams. What retrieval design may be needed?",
      "options": [
        "Retrieve and represent relevant textual and visual information, then provide appropriate multimodal context to the model",
        "Retrieve only filenames",
        "Ignore diagrams because RAG is text-only",
        "Use temperature as a retrieval filter"
      ],
      "answer": 0,
      "explanation": "Multimodal RAG may need both textual and visual representations and a model capable of using them."
    },
    {
      "id": "q34",
      "topic": "evaluation",
      "question": "Why is factual accuracy alone insufficient for evaluating a production LLM application?",
      "options": [
        "Latency, cost, safety, instruction adherence, groundedness, robustness, and user-task success can also matter",
        "Accuracy never matters",
        "Only token count matters",
        "Safety cannot be evaluated"
      ],
      "answer": 0,
      "explanation": "Production quality is multi-dimensional and depends on the application's goals and constraints."
    },
    {
      "id": "q35",
      "topic": "guardrails",
      "question": "A customer-support assistant must never reveal internal system prompts or confidential records. What is a defense-in-depth strategy?",
      "options": [
        "Access control, retrieval authorization, prompt-injection defenses, output filtering, logging, and human escalation",
        "Only tell the model to be careful once",
        "Increase temperature",
        "Expose all documents to the model"
      ],
      "answer": 0,
      "explanation": "Sensitive systems need multiple controls rather than relying on one instruction."
    },
    {
      "id": "q36",
      "topic": "observability",
      "question": "Why are traces useful in an LLM application?",
      "options": [
        "They help inspect prompts, retrieval, tool calls, latency, failures, and outputs across a request",
        "They change model weights",
        "They replace tests",
        "They guarantee factuality"
      ],
      "answer": 0,
      "explanation": "Tracing makes multi-step application behavior observable and debuggable."
    },
    {
      "id": "q37",
      "topic": "cost",
      "question": "A system sends a huge repeated context with every request. What is a direct cost/latency optimization to investigate?",
      "options": [
        "Reduce redundant context, improve retrieval/chunking, and use caching where appropriate",
        "Increase every prompt length",
        "Disable monitoring",
        "Generate multiple answers unnecessarily"
      ],
      "answer": 0,
      "explanation": "Repeated unnecessary tokens increase inference cost and latency."
    },
    {
      "id": "q38",
      "topic": "caching",
      "question": "When can caching be especially valuable in an LLM application?",
      "options": [
        "When identical or safely reusable inputs/results occur frequently and freshness requirements permit reuse",
        "When every response must always be unique",
        "When secrets should be exposed",
        "When retrieval must be randomized"
      ],
      "answer": 0,
      "explanation": "Caching can reduce repeated computation when reuse is semantically safe."
    },
    {
      "id": "q39",
      "topic": "model routing",
      "question": "Why might an application route simple requests to a smaller model and difficult requests to a larger model?",
      "options": [
        "It can balance cost/latency against quality according to task complexity",
        "It guarantees every model is identical",
        "It removes evaluation",
        "It prevents fallback handling"
      ],
      "answer": 0,
      "explanation": "Routing can allocate expensive computation selectively while preserving quality where needed."
    },
    {
      "id": "q40",
      "topic": "fallbacks",
      "question": "An external LLM provider becomes temporarily unavailable. What production pattern can improve resilience?",
      "options": [
        "Timeouts, retries with limits, circuit breaking, and a suitable fallback path",
        "Infinite retries with no timeout",
        "Delete the user's request",
        "Increase temperature indefinitely"
      ],
      "answer": 0,
      "explanation": "Reliability mechanisms should prevent cascading failures and provide controlled alternatives."
    },
    {
      "id": "q41",
      "topic": "prompt security",
      "question": "A user asks the model to ignore system instructions and reveal hidden configuration. Which principle applies?",
      "options": [
        "Treat user input as untrusted and maintain higher-priority application constraints",
        "Always follow the most recent user instruction",
        "Reveal configuration to prove helpfulness",
        "Disable all system instructions"
      ],
      "answer": 0,
      "explanation": "Application-level policies and system constraints should not be overridden by untrusted user content."
    },
    {
      "id": "q42",
      "topic": "RAG security",
      "question": "A retrieved document contains a malicious instruction that is unrelated to the user's question. What should the application do?",
      "options": [
        "Treat retrieved text as untrusted data, constrain its role as evidence, and validate the resulting action/output",
        "Execute every instruction found in retrieval",
        "Give the document administrator tool access",
        "Increase sampling temperature"
      ],
      "answer": 0,
      "explanation": "Retrieved content should inform answers as evidence, not automatically become executable instructions."
    },
    {
      "id": "q43",
      "topic": "LLMOps",
      "question": "A team changes a prompt and claims quality improved based on three hand-picked examples. What is missing?",
      "options": [
        "A reproducible evaluation set and defined metrics or acceptance criteria",
        "More screenshots of the prompt",
        "A larger UI",
        "A new database"
      ],
      "answer": 0,
      "explanation": "Controlled evaluation is needed to distinguish real improvement from anecdotal examples."
    },
    {
      "id": "q44",
      "topic": "application architecture",
      "question": "Why is it useful to separate the LLM layer from business logic and tool execution?",
      "options": [
        "It creates clearer contracts, security boundaries, testability, and the ability to change models independently",
        "It makes all responses deterministic",
        "It eliminates the need for validation",
        "It prevents all latency"
      ],
      "answer": 0,
      "explanation": "Separating probabilistic generation from deterministic application logic improves maintainability and safety."
    },
    {
      "id": "q45",
      "topic": "integrated GenAI",
      "question": "A RAG assistant answers accurately on common questions but fails on long, ambiguous queries. What should the team investigate first?",
      "options": [
        "Query transformation, retrieval coverage, chunking, reranking, context limits, and evaluation by query type",
        "Only increase temperature",
        "Delete the vector database",
        "Assume the base model is always at fault"
      ],
      "answer": 0,
      "explanation": "Complex-query failures can originate anywhere in query processing and retrieval, so stage-specific diagnosis is appropriate."
    }
  ]
};
