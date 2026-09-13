// project.ts

export const project = {
  id: "module06-project",
  title: "AI Project Lifecycle — End-to-End AI Solution",
  description:
    "Build and document a complete AI project by applying the AI project lifecycle from problem definition through experimentation, evaluation, deployment planning, and monitoring.",

  type: "End-to-End AI Project",

  objective:
    "Apply the complete AI project lifecycle to a practical problem and demonstrate how an AI solution is transformed from an initial idea into a validated and maintainable system.",

  projectScenario: {
    title: "Student Support Prediction System",
    description:
      "Develop an AI-based system that uses student learning information to predict whether a student may require additional academic support."
  },

  requirements: {
    problemDefinition: [
      "Define the real-world problem.",
      "Explain why the problem matters.",
      "Define the objective of the AI system."
    ],

    problemFormulation: [
      "Identify the input variables.",
      "Define the target.",
      "Identify the unit of prediction.",
      "Determine the AI task.",
      "Define suitable evaluation metrics.",
      "Identify important constraints."
    ],

    data: [
      "Identify or create a suitable dataset.",
      "Document the data source.",
      "Describe the features and target.",
      "Inspect the dataset for missing or invalid values.",
      "Prepare the data for model development."
    ],

    modelDevelopment: [
      "Create a simple baseline.",
      "Select at least two candidate models.",
      "Train the models using an appropriate dataset split.",
      "Record the configurations used."
    ],

    evaluation: [
      "Evaluate the baseline.",
      "Evaluate candidate models.",
      "Compare the results using appropriate metrics.",
      "Analyze incorrect predictions.",
      "Identify possible sources of model error."
    ],

    experimentation: [
      "Design at least three controlled experiments.",
      "Experiment with features, preprocessing, models, or hyperparameters.",
      "Record experiment configurations and results.",
      "Select the most suitable approach based on evidence."
    ],

    systemDesign: [
      "Design the complete AI workflow.",
      "Define the inference process.",
      "Describe how the trained model would be integrated into an application.",
      "Define basic testing requirements.",
      "Describe deployment requirements.",
      "Define a monitoring and improvement strategy."
    ],

    documentation: [
      "Write a clear README.",
      "Document the dataset.",
      "Document preprocessing.",
      "Document model selection.",
      "Document experiments and evaluation.",
      "Document limitations.",
      "Describe future improvements."
    ]
  },

  suggestedStructure: {
    folders: [
      "data/",
      "notebooks/",
      "src/",
      "models/",
      "tests/",
      "docs/"
    ],

    files: [
      "data/dataset.csv",
      "notebooks/exploration.ipynb",
      "src/preprocessing.py",
      "src/training.py",
      "src/evaluation.py",
      "src/prediction.py",
      "tests/test_prediction.py",
      "README.md"
    ]
  },

  workflow: [
    "Problem Definition",
    "Problem Formulation",
    "Data Collection",
    "Data Preparation",
    "Exploratory Analysis",
    "Baseline Development",
    "Model Selection",
    "Model Training",
    "Evaluation",
    "Error Analysis",
    "Experimentation",
    "Model Improvement",
    "Inference Design",
    "Deployment Planning",
    "Monitoring Planning",
    "Documentation"
  ],

  deliverables: [
    {
      id: "deliverable-01",
      title: "Problem Definition",
      description:
        "A clearly written problem statement, objective, constraints, and success criteria."
    },
    {
      id: "deliverable-02",
      title: "Dataset Analysis",
      description:
        "Dataset description, feature definitions, target definition, and data-preparation process."
    },
    {
      id: "deliverable-03",
      title: "Baseline Model",
      description:
        "A simple baseline model with documented evaluation results."
    },
    {
      id: "deliverable-04",
      title: "Model Experiments",
      description:
        "At least three documented experiments comparing different approaches."
    },
    {
      id: "deliverable-05",
      title: "Error Analysis",
      description:
        "Analysis of incorrect predictions and proposed improvements."
    },
    {
      id: "deliverable-06",
      title: "AI System Design",
      description:
        "Architecture showing how data, model, inference, application, deployment, and monitoring interact."
    },
    {
      id: "deliverable-07",
      title: "Final Documentation",
      description:
        "A complete project report explaining the problem, approach, experiments, results, limitations, and future improvements."
    }
  ],

  technicalExpectations: [
    "Use Python for implementation.",
    "Use NumPy or Pandas where appropriate for data processing.",
    "Use Matplotlib where visualization supports analysis.",
    "Use scikit-learn for suitable machine learning experiments.",
    "Keep data processing and model development reproducible.",
    "Separate experimentation from reusable project code."
  ],

  finalOutcome:
    "A documented end-to-end AI project demonstrating the complete AI project lifecycle, from problem definition and data preparation to model experimentation, evaluation, deployment planning, and continuous improvement.",

  evaluationCriteria: {
    problemUnderstanding: 15,
    problemFormulation: 15,
    dataPreparation: 15,
    modelDevelopment: 15,
    evaluationAndErrorAnalysis: 15,
    experimentation: 10,
    systemDesign: 10,
    documentation: 5
  }
};