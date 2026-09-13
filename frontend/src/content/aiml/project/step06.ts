export const step06 = {
  number: 6,
  title: "Build a Baseline",
  purpose: "Create a simple reference solution before optimizing the project.",
  starterCode: `from sklearn.linear_model import LogisticRegression

baseline = LogisticRegression(max_iter=1000)
baseline.fit(X_train, y_train)

print("Baseline score:", baseline.score(X_test, y_test))`,
  principle: "A more complex approach should provide a meaningful improvement or practical advantage over the baseline."
};

