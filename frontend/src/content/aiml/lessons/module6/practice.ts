export const practice = {
  id: "module06-practice",
  title: "AI Project Lifecycle Practice",
  description:
    "Practice activities covering problem formulation, data preparation, model development, evaluation, experimentation, deployment, and the complete AI project lifecycle.",

  objectives: [
    "Formulate real-world problems as AI problems.",
    "Identify suitable inputs, outputs, targets, and AI tasks.",
    "Design a basic AI project workflow.",
    "Analyze model evaluation results and errors.",
    "Plan controlled AI experiments.",
    "Understand the transition from an AI prototype to a complete AI project."
  ],

  activities: [
    {
      id: "practice-01",
      title: "AI Problem Formulation",
      task:
        "Choose a real-world problem and define its objective, inputs, output, unit of prediction, AI task, constraints, and evaluation metric.",
      expectedOutput:
        "A complete AI problem formulation."
    },

    {
      id: "practice-02",
      title: "Design the AI Workflow",
      task:
        "Create an end-to-end workflow for your selected AI problem, beginning with problem definition and ending with deployment and monitoring.",
      expectedOutput:
        "A flow diagram showing the complete AI project lifecycle."
    },

    {
      id: "practice-03",
      title: "Baseline and Model Comparison",
      task:
        "Select a suitable dataset and compare a simple baseline with at least two candidate machine learning models.",
      expectedOutput:
        "A comparison of model results using appropriate evaluation metrics."
    },

    {
      id: "practice-04",
      title: "AI Experiment Design",
      task:
        "Design three controlled experiments by changing features, preprocessing, models, or hyperparameters. Record the configuration and results of each experiment.",
      expectedOutput:
        "An experiment log containing observations and conclusions."
    },

    {
      id: "practice-05",
      title: "Error Analysis",
      task:
        "Examine incorrect predictions from a trained model and identify possible reasons for the errors.",
      expectedOutput:
        "An error-analysis report containing observed patterns and proposed improvements."
    },

    {
      id: "practice-06",
      title: "Prototype to AI System",
      task:
        "Convert a simple model-training notebook into a project plan containing data processing, model training, evaluation, inference, testing, documentation, deployment, and monitoring components.",
      expectedOutput:
        "A complete AI project structure and implementation plan."
    }
  ],

  challenge: {
    title: "End-to-End AI Project Planning Challenge",
    description:
      "Design a complete AI solution for a real-world problem. Define the problem, formulate the AI task, identify the data requirements, select a baseline and candidate models, define evaluation metrics, plan experiments, and describe how the final system would be deployed and monitored.",
    deliverables: [
      "Problem statement",
      "AI problem formulation",
      "Input and output specification",
      "Dataset requirements",
      "Model strategy",
      "Evaluation strategy",
      "Experiment plan",
      "System workflow",
      "Deployment plan",
      "Monitoring plan"
    ]
  },

  completionCriteria: [
    "Problem is clearly defined.",
    "AI task is correctly formulated.",
    "Inputs and outputs are appropriate.",
    "Evaluation metrics match the problem.",
    "Experiments are logically designed.",
    "Results are analyzed rather than only recorded.",
    "The complete AI lifecycle is addressed."
  ]
};