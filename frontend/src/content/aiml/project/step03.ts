export const step03 = {
  number: 3,
  title: "Collect and Inspect the Data",
  tasks: [
    "Identify a suitable dataset.",
    "Load it using Pandas.",
    "Inspect rows, columns, data types, and statistics.",
    "Identify missing values and inconsistencies.",
    "Check whether the data contains the information required by the objective."
  ],
  starterCode: `import pandas as pd

data = pd.read_csv("data/dataset.csv")
print(data.head())
print(data.info())
print(data.describe(include="all"))
print(data.isnull().sum())`
};

