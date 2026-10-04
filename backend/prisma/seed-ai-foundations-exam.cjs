const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const questions = [
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
  ];

async function main() {
  const course = await prisma.course.findUnique({
    where: {
      slug: "ai-foundations",
    },
  });

  if (!course) {
    throw new Error(
      'Course "ai-foundations" was not found in the database.'
    );
  }

  const exam = await prisma.exam.upsert({
    where: {
      courseId: course.id,
    },
    update: {
      title: "AI Foundations Final Assessment",
      passingPercentage: 70,
      isPublished: true,
    },
    create: {
      title: "AI Foundations Final Assessment",
      passingPercentage: 70,
      isPublished: true,
      courseId: course.id,
    },
  });

  await prisma.examQuestion.deleteMany({
    where: { examId: exam.id },
  });

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i];

    await prisma.examQuestion.create({
      data: {
        examId: exam.id,
        position: i + 1,
        question: q.question,
        options: q.options,
        correctAnswer: q.answer,
        explanation: q.explanation,
      },
    });
  }

  console.log(`Seeded AI Foundations exam with ${questions.length} questions.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
 