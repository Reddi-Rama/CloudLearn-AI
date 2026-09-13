export const step07 = {
  number: 7,
  title: "Train Candidate Models",
  tasks: [
    "Select suitable candidate algorithms.",
    "Train them using the same evaluation protocol.",
    "Keep the comparison fair.",
    "Record configuration and results."
  ],
  starterCode: `from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier

models = {
    "logistic_regression": LogisticRegression(max_iter=1000),
    "decision_tree": DecisionTreeClassifier(max_depth=5, random_state=42)
}

for name, model in models.items():
    model.fit(X_train, y_train)
    print(name, model.score(X_test, y_test))`
};

