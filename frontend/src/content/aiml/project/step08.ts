export const step08 = {
  number: 8,
  title: "Evaluate the Models",
  tasks: [
    "Generate predictions on data not used for training.",
    "Calculate task-appropriate metrics.",
    "Compare baseline and candidate models.",
    "Do not rely only on training performance."
  ],
  starterCode: `from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score

predictions = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, predictions))
print("Precision:", precision_score(y_test, predictions, zero_division=0))
print("Recall:", recall_score(y_test, predictions, zero_division=0))
print("F1:", f1_score(y_test, predictions, zero_division=0))`
};

