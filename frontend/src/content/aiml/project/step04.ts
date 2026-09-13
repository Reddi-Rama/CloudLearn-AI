export const step04 = {
  number: 4,
  title: "Explore and Visualize the Data",
  tasks: [
    "Inspect feature distributions.",
    "Compare important features with the target where appropriate.",
    "Identify unusual observations.",
    "Look for relationships between variables.",
    "Create visualizations that support actual observations."
  ],
  starterCode: `import matplotlib.pyplot as plt

data["feature"].hist()
plt.xlabel("Feature")
plt.ylabel("Frequency")
plt.title("Feature Distribution")
plt.show()`
};

