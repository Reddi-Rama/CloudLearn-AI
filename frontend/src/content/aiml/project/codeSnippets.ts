export const projectCodeSnippets = {
  title: "Core Code Snippets",
  snippets: [
    { title: "Load CSV", code: `import pandas as pd\ndata = pd.read_csv("data/dataset.csv")` },
    { title: "Inspect Data", code: `print(data.head())\nprint(data.info())\nprint(data.isnull().sum())` },
    { title: "Split Data", code: `from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)` },
    { title: "Train", code: `model.fit(X_train, y_train)` },
    { title: "Predict", code: `predictions = model.predict(X_test)` }
  ]
};

