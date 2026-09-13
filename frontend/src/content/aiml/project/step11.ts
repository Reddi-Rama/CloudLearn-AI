export const step11 = {
  number: 11,
  title: "Build the Prediction Workflow",
  tasks: [
    "Define the expected input format.",
    "Apply compatible preprocessing.",
    "Load the trained model.",
    "Generate a prediction.",
    "Validate the output."
  ],
  starterCode: `import joblib

model = joblib.load("models/model.joblib")

new_data = [[85, 90, 95, 100]]
prediction = model.predict(new_data)

print("Prediction:", prediction)`,
  warning: "Inference must use the same required preprocessing and feature order as training."
};

