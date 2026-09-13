export const module3Practice = {
  id: "aiml-module3-practice",
  moduleNumber: 3,
  moduleTitle: "Python & AI Computing",
  courseId: "aiml",
  moduleId: "module3",

  title: "Module 03 Practice — Python & AI Computing",

  description:
    "Practice activities designed to reinforce Python programming, reusable functions, collections, file handling, NumPy numerical computing, Pandas data analysis, and visualization preparation for AI workflows.",

  instructions: [
    "Complete the activities in sequence from Python fundamentals to an integrated AI data workflow.",
    "Use Python for all programming activities.",
    "Use NumPy when the activity involves numerical arrays or vectorized computation.",
    "Use Pandas when the activity involves structured datasets.",
    "Show mathematical calculations when a formula is involved.",
    "Inspect data before modifying or cleaning it.",
    "Do not use libraries as a replacement for understanding the underlying computation."
  ],

  practiceSections: [
    {
      id: "python-environment",
      title: "1. Python Environment & AI Computing",
      activities: [
        {
          id: "p1",
          title: "Verify Python Environment",
          task:
            "Create a Python program that displays the Python version and confirms that NumPy, Pandas, and Matplotlib can be imported successfully."
        },
        {
          id: "p2",
          title: "AI Calculation Program",
          task:
            "Write a Python program that accepts numerical values, calculates their total and average, and displays the results."
        },
        {
          id: "p3",
          title: "Experiment With Numeric Types",
          task:
            "Create examples using integers and floating-point values. Perform addition, subtraction, multiplication, division, exponentiation, and modulus operations."
        }
      ]
    },

    {
      id: "functions",
      title: "2. Functions & Reusable AI Code",
      activities: [
        {
          id: "p4",
          title: "Create a Mathematical Function",
          task:
            "Write a function that receives a number and returns its square, cube, and absolute value."
        },
        {
          id: "p5",
          title: "Average Function",
          task:
            "Create a reusable function that accepts a collection of numerical values and returns the average."
        },
        {
          id: "p6",
          title: "Normalization Function",
          task:
            "Implement the min-max normalization formula x' = (x - xmin) / (xmax - xmin) as a reusable Python function."
        },
        {
          id: "p7",
          title: "Distance Function",
          task:
            "Create a function that calculates the Euclidean distance between two points represented by numerical coordinates."
        }
      ]
    },

    {
      id: "collections",
      title: "3. Collections & Data Structures for AI",
      activities: [
        {
          id: "p8",
          title: "Feature List",
          task:
            "Create a Python list representing the features of one data record. Access, modify, add, and remove feature values."
        },
        {
          id: "p9",
          title: "Dataset Records",
          task:
            "Represent at least five student or customer records using dictionaries stored inside a list."
        },
        {
          id: "p10",
          title: "Filtering Records",
          task:
            "Filter a list of dictionary records according to a numerical condition such as score greater than 70."
        },
        {
          id: "p11",
          title: "Unique Categories",
          task:
            "Create a dataset containing repeated categorical values and use a Python set to identify the unique categories."
        },
        {
          id: "p12",
          title: "Feature Matrix",
          task:
            "Represent at least five records and three numerical features as a nested Python list. Explain how the structure corresponds to rows and columns of a dataset."
        }
      ]
    },

    {
      id: "file-handling",
      title: "4. File Handling & Structured Data",
      activities: [
        {
          id: "p13",
          title: "Write a Text File",
          task:
            "Create a text file containing several lines of numerical or AI-related information and read it back using Python."
        },
        {
          id: "p14",
          title: "Create a CSV Dataset",
          task:
            "Create a CSV file containing at least ten records with numerical features and a target value."
        },
        {
          id: "p15",
          title: "Read CSV Using Python",
          task:
            "Read the CSV file using Python's csv module and calculate a simple statistic from one numerical column."
        },
        {
          id: "p16",
          title: "Create JSON Data",
          task:
            "Create a JSON file containing structured records and load it using Python's json module."
        },
        {
          id: "p17",
          title: "Data Validation",
          task:
            "Write Python code that checks whether required fields exist and whether numerical values contain valid data."
        }
      ]
    },

    {
      id: "numpy-arrays",
      title: "5. NumPy Arrays & Dimensions",
      activities: [
        {
          id: "p18",
          title: "Create NumPy Arrays",
          task:
            "Create one-dimensional and two-dimensional NumPy arrays and inspect their ndim, shape, size, and dtype."
        },
        {
          id: "p19",
          title: "Reshape an Array",
          task:
            "Create an array containing 12 values and reshape it into a 3 × 4 matrix."
        },
        {
          id: "p20",
          title: "Feature Matrix",
          task:
            "Represent five records containing three numerical features using a NumPy matrix."
        },
        {
          id: "p21",
          title: "Array Generation",
          task:
            "Generate arrays using np.arange(), np.linspace(), np.zeros(), and np.ones(). Explain the difference between their purposes."
        }
      ]
    },

    {
      id: "numpy-indexing",
      title: "6. NumPy Indexing, Slicing & Vectorization",
      activities: [
        {
          id: "p22",
          title: "One-Dimensional Indexing",
          task:
            "Create a NumPy array and retrieve its first, last, and middle elements using indexing."
        },
        {
          id: "p23",
          title: "Array Slicing",
          task:
            "Create an array containing 20 values and extract the first five, last five, and every second value."
        },
        {
          id: "p24",
          title: "Matrix Row and Column Selection",
          task:
            "Create a 5 × 4 matrix and select individual rows, columns, and rectangular sections."
        },
        {
          id: "p25",
          title: "Boolean Filtering",
          task:
            "Create a numerical dataset and use Boolean indexing to select values above a chosen threshold."
        },
        {
          id: "p26",
          title: "Vectorized Transformation",
          task:
            "Apply a mathematical formula to an entire NumPy array without using an explicit Python loop."
        }
      ]
    },

    {
      id: "numpy-computation",
      title: "7. Numerical Computation With NumPy",
      activities: [
        {
          id: "p27",
          title: "Statistical Analysis",
          task:
            "Create a numerical dataset and calculate its sum, mean, minimum, maximum, median, variance, and standard deviation."
        },
        {
          id: "p28",
          title: "Axis-Based Computation",
          task:
            "Create a 4 × 3 matrix and calculate row-wise and column-wise sums and averages using the axis parameter."
        },
        {
          id: "p29",
          title: "Mathematical Functions",
          task:
            "Apply sqrt, abs, exp, and log to appropriate NumPy arrays and observe the results."
        },
        {
          id: "p30",
          title: "Cumulative Computation",
          task:
            "Create a sequence of daily sales values and calculate cumulative sales using np.cumsum()."
        },
        {
          id: "p31",
          title: "Random Data Experiment",
          task:
            "Generate a reproducible random dataset using NumPy and calculate its statistical properties."
        },
        {
          id: "p32",
          title: "Dot Product",
          task:
            "Create two numerical vectors, calculate their dot product manually using the mathematical formula, and verify the result using np.dot()."
        }
      ]
    },

    {
      id: "pandas-series",
      title: "8. Pandas Series & DataFrames",
      activities: [
        {
          id: "p33",
          title: "Create a Series",
          task:
            "Create a Pandas Series containing numerical values with meaningful custom indexes."
        },
        {
          id: "p34",
          title: "Create a DataFrame",
          task:
            "Create a DataFrame containing at least ten records and four columns representing a practical dataset."
        },
        {
          id: "p35",
          title: "Inspect the DataFrame",
          task:
            "Use head(), tail(), shape, columns, dtypes, and describe() to inspect the dataset."
        },
        {
          id: "p36",
          title: "Select Columns",
          task:
            "Select one column and multiple columns from the DataFrame and explain how they could represent AI features."
        },
        {
          id: "p37",
          title: "Create Derived Features",
          task:
            "Create at least one new DataFrame column using a mathematical operation on existing columns."
        }
      ]
    },

    {
      id: "pandas-manipulation",
      title: "9. Data Inspection & Manipulation",
      activities: [
        {
          id: "p38",
          title: "Detect Missing Values",
          task:
            "Create or load a dataset containing missing values and identify the missing values using Pandas."
        },
        {
          id: "p39",
          title: "Handle Missing Values",
          task:
            "Experiment with both fillna() and dropna(). Compare the resulting datasets and explain when each approach may be appropriate."
        },
        {
          id: "p40",
          title: "Filter Records",
          task:
            "Filter records using one condition and then using multiple conditions combined with AND and OR."
        },
        {
          id: "p41",
          title: "Sort Records",
          task:
            "Sort a dataset by a numerical column in both ascending and descending order."
        },
        {
          id: "p42",
          title: "Remove Duplicates",
          task:
            "Create a dataset containing duplicate records, identify them, and remove the duplicates."
        },
        {
          id: "p43",
          title: "Group and Analyze",
          task:
            "Group a dataset by a categorical column and calculate the mean of an appropriate numerical column."
        },
        {
          id: "p44",
          title: "Feature and Target Selection",
          task:
            "Separate a dataset into X containing input features and y containing the target variable."
        }
      ]
    }
  ],

  integratedPractice: {
    title: "Integrated Practice — AI Data Preparation Laboratory",

    objective:
      "Build a complete Python-based data workflow that starts with structured data and prepares it for a future machine-learning system.",

    requirements: [
      "Create or load a dataset containing at least 20 records.",
      "Use Pandas to inspect the dataset.",
      "Identify numerical and non-numerical columns.",
      "Check the shape and data types.",
      "Calculate descriptive statistics.",
      "Detect missing values.",
      "Handle appropriate missing values.",
      "Check for duplicate records.",
      "Investigate suspicious values.",
      "Filter records using meaningful conditions.",
      "Create at least one derived feature.",
      "Use NumPy for numerical computation.",
      "Calculate at least one statistical measurement using NumPy.",
      "Separate input features from the target.",
      "Convert numerical features to a NumPy array.",
      "Create at least one visualization-ready dataset.",
      "Document the decisions made during data preparation."
    ],

    expectedAnalysis: [
      "What does each row represent?",
      "What does each column represent?",
      "Which columns are useful as features?",
      "Which column is the target?",
      "Are there missing values?",
      "How were missing values handled and why?",
      "Are there duplicate records?",
      "Are there suspicious or unusual values?",
      "How did filtering change the dataset?",
      "Which numerical properties describe the dataset?",
      "How did NumPy and Pandas work together?",
      "Is the resulting dataset ready for a basic machine-learning workflow?"
    ]
  },

  quickCheck: [
    {
      question: "What is the main purpose of a Python function?",
      answer: "To package reusable logic that can be called when needed."
    },
    {
      question: "What is a list useful for in AI programming?",
      answer: "Storing ordered collections of values or records."
    },
    {
      question: "Why are dictionaries useful for representing data?",
      answer: "They associate meaningful keys with values."
    },
    {
      question: "What is NumPy's main role in this module?",
      answer: "Efficient numerical and array-based computation."
    },
    {
      question: "What does ndarray represent?",
      answer: "NumPy's multidimensional array data structure."
    },
    {
      question: "What does shape describe?",
      answer: "The size of an array along each dimension."
    },
    {
      question: "What does vectorization mean?",
      answer: "Applying numerical operations to arrays without explicitly writing element-by-element Python loops."
    },
    {
      question: "What does axis=0 generally calculate for a 2D array?",
      answer: "An operation across rows, producing one result for each column."
    },
    {
      question: "What is a Pandas Series?",
      answer: "A one-dimensional labeled data structure."
    },
    {
      question: "What is a Pandas DataFrame?",
      answer: "A two-dimensional labeled data structure used for structured data."
    },
    {
      question: "What does df.shape provide?",
      answer: "The number of rows and columns."
    },
    {
      question: "How can missing values be detected?",
      answer: "Using methods such as isnull() and isna()."
    },
    {
      question: "What does fillna() do?",
      answer: "It replaces missing values using a specified value or strategy."
    },
    {
      question: "What does dropna() do?",
      answer: "It removes rows or columns containing missing values according to the selected options."
    },
    {
      question: "What are X and y commonly used to represent?",
      answer: "X represents input features and y represents the target."
    }
  ],

  reflection: [
    "Which Python data structure was most useful for representing AI data?",
    "Why is NumPy more appropriate than ordinary Python lists for large numerical computation?",
    "Why is Pandas useful before machine learning?",
    "What did you learn by inspecting data before cleaning it?",
    "Which data-cleaning decision required the most reasoning?",
    "How does the workflow in this module prepare you for machine learning?"
  ],

  completion: {
    previous: "/lesson/aiml/module3/lesson10",
    next: "/lesson/aiml/module3/project",
    backToModule: "/lesson/aiml/module3/about"
  }
};