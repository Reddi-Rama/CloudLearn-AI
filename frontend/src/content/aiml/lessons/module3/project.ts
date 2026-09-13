export const module3Project = {
  id: "aiml-module3-project",
  projectNumber: 3,
  courseId: "aiml",
  moduleId: "module3",

  title: "AI Dataset Explorer",

  description:
    "Build a Python-based data exploration system that loads a real or structured dataset, inspects its contents, performs numerical analysis with NumPy, cleans and manipulates the data with Pandas, and produces meaningful visualizations for understanding the dataset.",

  objective:
    "Develop a practical AI data-analysis workflow that transforms raw structured data into an organized, analyzed, and visualization-ready dataset while demonstrating the roles of Python, NumPy, Pandas, and Matplotlib.",

  problem: `
AI systems depend on data, but raw data is rarely ready to be used directly.

A dataset may contain missing values, duplicate records, inconsistent values, different data types, unnecessary columns, and numerical patterns that are difficult to understand without analysis.

In this project, students will build an AI Dataset Explorer that accepts a structured dataset and guides the user through the complete early-stage data workflow.

The system should not simply display the dataset. It should inspect, analyze, clean, transform, summarize, and visualize the data so that meaningful patterns can be discovered before machine learning is applied.
`,

  skillsUsed: [
    "Python programming",
    "Functions and reusable code",
    "Lists and dictionaries",
    "File handling",
    "CSV and structured data",
    "NumPy arrays",
    "NumPy vectorized computation",
    "Statistical computation",
    "Pandas Series",
    "Pandas DataFrames",
    "Data inspection",
    "Missing-value handling",
    "Duplicate detection",
    "Data filtering",
    "Data transformation",
    "Feature selection",
    "Matplotlib visualization",
    "Data interpretation",
    "AI data workflow"
  ],

  prerequisites: [
    "Basic Python programming",
    "Python functions",
    "Python collections",
    "Basic file handling",
    "NumPy arrays and numerical operations",
    "Pandas Series and DataFrames",
    "Basic data inspection and manipulation",
    "Basic Matplotlib usage"
  ],

  projectRequirements: {
    dataset: {
      title: "1. Dataset Selection",
      requirements: [
        "Use a meaningful structured dataset.",
        "The dataset should contain at least 50 records where practical.",
        "Include multiple numerical columns.",
        "Include at least one categorical or descriptive column where appropriate.",
        "Use a CSV file or another structured format that can be loaded programmatically.",
        "Document the meaning of each important column."
      ]
    },

    loading: {
      title: "2. Data Loading",
      requirements: [
        "Load the dataset programmatically.",
        "Do not manually copy every record into the Python program.",
        "Display confirmation that the dataset was loaded successfully.",
        "Handle the case where the input file cannot be found."
      ]
    },

    inspection: {
      title: "3. Dataset Inspection",
      requirements: [
        "Display the first records.",
        "Display the last records.",
        "Display dataset dimensions.",
        "Display column names.",
        "Display data types.",
        "Display descriptive statistics.",
        "Identify numerical and non-numerical columns."
      ]
    },

    cleaning: {
      title: "4. Data Cleaning",
      requirements: [
        "Detect missing values.",
        "Report the number of missing values by column.",
        "Handle missing values using an appropriate strategy.",
        "Detect duplicate records.",
        "Remove or appropriately handle duplicates.",
        "Investigate suspicious numerical values.",
        "Document important cleaning decisions."
      ]
    },

    manipulation: {
      title: "5. Data Manipulation",
      requirements: [
        "Filter records using meaningful conditions.",
        "Sort records using at least one numerical column.",
        "Create at least one derived feature.",
        "Perform at least one grouping operation where applicable.",
        "Select relevant columns for analysis.",
        "Separate useful numerical features from unrelated columns."
      ]
    },

    numpyAnalysis: {
      title: "6. Numerical Analysis With NumPy",
      requirements: [
        "Convert selected numerical data to NumPy arrays.",
        "Calculate appropriate numerical statistics.",
        "Use vectorized computation.",
        "Perform at least one mathematical transformation.",
        "Calculate mean, minimum, maximum, or standard deviation where appropriate.",
        "Use at least one operation involving array dimensions or axis."
      ]
    },

    visualization: {
      title: "7. Data Visualization",
      requirements: [
        "Use Matplotlib for visualization.",
        "Create at least three meaningful visualizations.",
        "Use appropriate chart types for the selected data.",
        "Include meaningful titles.",
        "Label relevant axes.",
        "Make the visualizations readable.",
        "Use visualizations to support observations about the dataset."
      ]
    },

    featureAnalysis: {
      title: "8. AI-Oriented Feature Analysis",
      requirements: [
        "Identify potential input features.",
        "Identify a possible target variable where appropriate.",
        "Explain why selected features may be useful.",
        "Calculate basic statistics for important numerical features.",
        "Investigate relationships between relevant variables.",
        "Prepare a feature dataset that could be passed to a future machine-learning workflow."
      ]
    }
  },

  recommendedStructure: {
    title: "Recommended Python Structure",

    files: [
      {
        file: "main.py",
        purpose: "Runs the Dataset Explorer workflow."
      },
      {
        file: "loader.py",
        purpose: "Loads the dataset and handles file-related operations."
      },
      {
        file: "inspection.py",
        purpose: "Contains functions for dataset inspection and summary."
      },
      {
        file: "cleaning.py",
        purpose: "Contains missing-value, duplicate, and data-quality operations."
      },
      {
        file: "analysis.py",
        purpose: "Performs NumPy and Pandas numerical analysis."
      },
      {
        file: "visualization.py",
        purpose: "Creates Matplotlib visualizations."
      }
    ]
  },

  pythonLibraries: [
    {
      library: "Python",
      purpose:
        "Provides the programming logic, functions, file handling, and application structure."
    },
    {
      library: "NumPy",
      purpose:
        "Provides efficient numerical arrays, vectorized operations, and statistical computation."
    },
    {
      library: "Pandas",
      purpose:
        "Provides structured data loading, inspection, cleaning, filtering, transformation, and analysis."
    },
    {
      library: "Matplotlib",
      purpose:
        "Provides data visualization for discovering and communicating patterns."
    }
  ],

  mathematicalFoundation: {
    mean: "μ = (1/n) Σ xi",
    variance: "σ² = (1/n) Σ (xi - μ)²",
    standardDeviation: "σ = √σ²",
    normalization:
      "x' = (x - xmin) / (xmax - xmin)",
    dotProduct:
      "x · w = Σ xi wi",
    interpretation:
      "The mathematical operations provide numerical summaries and transformations that help us understand the structure and scale of the dataset before machine learning."
  },

  workflow: [
    "Select dataset",
    "Load dataset",
    "Inspect structure",
    "Understand columns",
    "Check data types",
    "Calculate descriptive statistics",
    "Detect missing values",
    "Detect duplicates",
    "Investigate suspicious values",
    "Clean data",
    "Filter and transform data",
    "Create derived features",
    "Perform NumPy numerical analysis",
    "Select important features",
    "Create visualizations",
    "Interpret patterns",
    "Prepare machine-learning-ready data"
  ],

  coreFeatures: [
    "Dataset loading",
    "Dataset preview",
    "Dataset dimensions",
    "Column and data-type inspection",
    "Statistical summary",
    "Missing-value detection",
    "Duplicate detection",
    "Data cleaning",
    "Filtering",
    "Sorting",
    "Derived features",
    "Grouping",
    "NumPy numerical analysis",
    "Feature selection",
    "Multiple visualizations",
    "Data interpretation"
  ],

  exampleDataset: {
    title: "Example Dataset — Student Performance",
    columns: [
      {
        name: "StudentID",
        meaning: "Unique identifier for each student."
      },
      {
        name: "StudyHours",
        meaning: "Number of hours spent studying."
      },
      {
        name: "Attendance",
        meaning: "Attendance percentage."
      },
      {
        name: "PreviousScore",
        meaning: "Previous academic score."
      },
      {
        name: "FinalScore",
        meaning: "Final academic score."
      },
      {
        name: "Department",
        meaning: "Student department or academic category."
      }
    ]
  },

  exampleAnalysis: [
    "Calculate the average study hours.",
    "Calculate the average attendance.",
    "Find the highest and lowest final scores.",
    "Calculate the standard deviation of final scores.",
    "Identify records containing missing values.",
    "Investigate unusually high or low values.",
    "Compare average final scores between departments.",
    "Investigate the relationship between study hours and final score.",
    "Create a visualization showing the distribution of final scores.",
    "Create a visualization comparing study hours and final scores."
  ],

  visualizationRequirements: [
    {
      visualization: "Histogram",
      purpose:
        "Understand the distribution of an important numerical variable."
    },
    {
      visualization: "Scatter Plot",
      purpose:
        "Investigate the relationship between two numerical variables."
    },
    {
      visualization: "Bar Chart",
      purpose:
        "Compare values across categories."
    }
  ],

  implementationPrinciples: [
    "Separate data loading, cleaning, analysis, and visualization into reusable functions or modules.",
    "Inspect data before making cleaning decisions.",
    "Do not automatically delete unusual values without investigating them.",
    "Use Pandas for structured data operations.",
    "Use NumPy for numerical computation.",
    "Use Matplotlib for visualization.",
    "Avoid unnecessary loops when vectorized NumPy or Pandas operations are more appropriate.",
    "Keep the original dataset unchanged and create a cleaned working version.",
    "Make the workflow reproducible.",
    "Document important assumptions and data-cleaning decisions."
  ],

  expectedAnalysis: `
The final project should not only report numerical results.

Students should interpret what those results mean.

For example, an average gives a measure of central tendency, while standard deviation gives information about the spread of values. A scatter plot can reveal whether two variables appear to have a relationship. Grouped statistics can reveal differences between categories.

The purpose of the project is therefore to move from:

Raw Data → Numerical Computation → Data Understanding → Data Preparation → AI-Ready Information.
`,

  technicalReport: {
    sections: [
      "1. Problem Statement",
      "2. Dataset Description",
      "3. Objective",
      "4. Tools and Libraries",
      "5. Data Loading",
      "6. Dataset Inspection",
      "7. Data Cleaning",
      "8. Numerical Analysis",
      "9. Data Manipulation",
      "10. Visualization",
      "11. Feature Analysis",
      "12. Observations",
      "13. Limitations",
      "14. Conclusion"
    ]
  },

  deliverables: [
    "Complete Python source code",
    "Original dataset",
    "Cleaned dataset where applicable",
    "NumPy numerical analysis",
    "Pandas data-analysis workflow",
    "At least three Matplotlib visualizations",
    "Feature and target analysis where applicable",
    "Technical report",
    "Screenshots of the working application",
    "Final observations and conclusions"
  ],

  evaluationCriteria: [
    {
      criterion: "Python Implementation",
      focus:
        "Correct use of Python programming constructs, functions, and reusable code."
    },
    {
      criterion: "Data Loading",
      focus:
        "Correct and reliable loading of structured data."
    },
    {
      criterion: "Data Inspection",
      focus:
        "Ability to understand dataset structure, types, dimensions, and statistics."
    },
    {
      criterion: "Data Cleaning",
      focus:
        "Appropriate handling of missing values, duplicates, and suspicious records."
    },
    {
      criterion: "NumPy Usage",
      focus:
        "Correct numerical computation, array operations, and vectorized processing."
    },
    {
      criterion: "Pandas Usage",
      focus:
        "Effective inspection, filtering, transformation, grouping, and feature selection."
    },
    {
      criterion: "Visualization",
      focus:
        "Meaningful and readable Matplotlib visualizations."
    },
    {
      criterion: "Data Interpretation",
      focus:
        "Ability to explain what numerical results and visual patterns mean."
    },
    {
      criterion: "AI Readiness",
      focus:
        "Ability to transform raw data into information suitable for a future machine-learning workflow."
    }
  ],

  extensionChallenges: [
    "Allow the user to select the dataset from a file path.",
    "Create an interactive command-line menu for different analysis operations.",
    "Allow users to select columns dynamically.",
    "Add additional statistical calculations.",
    "Compare multiple numerical features automatically.",
    "Create correlation analysis using NumPy or Pandas.",
    "Generate a complete automated dataset report.",
    "Add additional Matplotlib visualizations.",
    "Allow the user to export the cleaned dataset.",
    "Prepare X and y for a future scikit-learn model.",
    "Create a reusable DatasetExplorer class."
  ],

  expectedOutcome: `
At the end of the project, students should have a working AI Dataset Explorer that can load a structured dataset, inspect its contents, identify data-quality issues, perform numerical analysis, manipulate data, generate visualizations, and prepare meaningful features for a future machine-learning workflow.

The project should demonstrate an important AI engineering principle: before building a model, understand the data.

Students should be able to explain not only how their code works, but also what the numerical results and visualizations reveal about the dataset.
`,

  learningOutcome: [
    "Use Python to build reusable data-processing workflows.",
    "Represent and manipulate structured information programmatically.",
    "Use NumPy for numerical and vectorized computation.",
    "Use Pandas to inspect, clean, transform, and analyze datasets.",
    "Detect and reason about common data-quality problems.",
    "Calculate meaningful numerical statistics.",
    "Prepare features and targets for future machine-learning workflows.",
    "Use Matplotlib to visualize data.",
    "Interpret numerical and visual patterns.",
    "Understand the role of data preparation in AI development."
  ],

  completion: {
    previous: "/lesson/aiml/module3/practice",
    next: "/courses/aiml/module4",
    backToModule: "/lesson/aiml/module3/about",
    courseOverview: "/courses/aiml",
    courseRoadmap: "/courses/aiml/roadmap"
  }
};