export const projectCommonErrors = {
  title: "Common Errors",
  errors: [
    { error: "Choosing a model first", fix: "Define the problem and task before model selection." },
    { error: "Testing on training data", fix: "Use a proper evaluation set or validation strategy." },
    { error: "Data leakage", fix: "Keep evaluation information out of training and fit preprocessing only on training data." },
    { error: "Using only accuracy", fix: "Choose metrics that match the actual task." },
    { error: "Ignoring incorrect predictions", fix: "Perform error analysis." },
    { error: "Different inference preprocessing", fix: "Reuse the same preprocessing and feature order." },
    { error: "Untracked experiments", fix: "Record configurations, metrics, and decisions." }
  ]
};

