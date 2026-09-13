export const step05 = {
  number: 5,
  title: "Prepare the Data",
  tasks: [
    "Select relevant features.",
    "Separate features and target when using supervised learning.",
    "Handle missing values.",
    "Encode categorical variables when required.",
    "Scale numerical features when appropriate.",
    "Create a reproducible train/test split."
  ],
  starterCode: `from sklearn.model_selection import train_test_split

X = data[feature_columns]
y = data[target_column]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)` 
};

