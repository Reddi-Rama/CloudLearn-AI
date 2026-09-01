/*
 * CloudLearn AI — Data Science Learning Path
 */

export interface LearningPathTopicGroup {
  title: string;
  items: string[];
}

export interface LearningPathStage {
  id: number;
  title: string;
  topics: string[];
  topicDetails: LearningPathTopicGroup[];

  understanding?: string;
  practice?: string;

  project: string;
  achievement?: string;
}

export interface CertificationGuidance {
  description: string[];
  priority: string[];
  conclusion: string;
}

export interface FinalCapstone {
  title: string;
  description: string;
  components: LearningPathTopicGroup[];
  outcome: string;
}

export interface LearningPathContent {
  title: string;
  subtitle: string;
  description: string;

  totalStages: number;

  stages: LearningPathStage[];

  projectProgression: string[];

  achievementPath: string[];

  learningPhilosophy: string[];

  certificationGuidance: CertificationGuidance;

  finalCapstone: FinalCapstone;
}

const dataSciencePath: LearningPathContent = {
  title: "Data Science Learning Path",

  subtitle:
    "From Data Foundations to Modern Data Science and Applied AI",

  description:
    "A structured learning path that takes students from the fundamentals of data and programming to data analysis, statistics, visualization, SQL, machine learning, feature engineering, model evaluation, deep learning foundations, time series, NLP, responsible AI, deployment, and production-ready data science.",

  totalStages: 23,

  stages: [
    {
      id: 1,

      title: "Data Science Foundations",

      topics: [
        "What Is Data Science",
        "Data Science Lifecycle",
        "Types of Data",
        "Structured & Unstructured Data",
        "Data Science Roles",
      ],

      topicDetails: [
        {
          title: "Data Science Foundations",
          items: [
            "What Is Data Science",
            "Data Science Lifecycle",
            "Types of Data",
            "Structured & Unstructured Data",
            "Data Science Roles",
          ],
        },
      ],

      understanding:
        "Learn what data science is and how data is transformed into useful insights and decisions.",

      practice:
        "Understand the complete data science workflow from defining a problem to communicating results.",

      project: "Personal Data Analysis",

      achievement: "Data Science Foundations",
    },

    {
      id: 2,

      title: "Python Programming for Data Science",

      topics: [
        "Python Fundamentals",
        "Functions & Modules",
        "Data Structures",
        "File Handling",
        "Virtual Environments",
      ],

      topicDetails: [
        {
          title: "Python",
          items: [
            "Python Fundamentals",
            "Functions & Modules",
            "Data Structures",
            "File Handling",
            "Virtual Environments",
          ],
        },
      ],

      understanding:
        "Learn the programming foundation needed for practical data science.",

      practice:
        "Work with Python data structures, functions, modules, files, and reusable code.",

      project: "Python Data Processing Application",

      achievement: "Python for Data Science",
    },

    {
      id: 3,

      title: "Mathematics for Data Science",

      topics: [
        "Algebra",
        "Functions",
        "Vectors & Matrices",
        "Basic Calculus",
        "Mathematical Reasoning",
      ],

      topicDetails: [
        {
          title: "Mathematics",
          items: [
            "Algebra",
            "Functions",
            "Vectors & Matrices",
            "Basic Calculus",
            "Mathematical Reasoning",
          ],
        },
      ],

      understanding:
        "Learn the mathematical ideas needed to understand statistics and machine learning.",

      practice:
        "Work with mathematical representations used in data analysis and model development.",

      project: "Mathematical Data Analysis Lab",

      achievement: "Data Science Mathematics",
    },

    {
      id: 4,

      title: "Statistics Foundations",

      topics: [
        "Descriptive Statistics",
        "Probability",
        "Distributions",
        "Sampling",
        "Statistical Thinking",
      ],

      topicDetails: [
        {
          title: "Statistics",
          items: [
            "Descriptive Statistics",
            "Probability",
            "Distributions",
            "Sampling",
            "Statistical Thinking",
          ],
        },
      ],

      understanding:
        "Learn how to summarize data and reason about uncertainty.",

      practice:
        "Calculate statistical measures, understand probability, and interpret distributions and samples.",

      project: "Statistical Analysis Report",

      achievement: "Statistics for Data Science",
    },

    {
      id: 5,

      title: "Data Collection & Preparation",

      topics: [
        "Data Sources",
        "Data Collection",
        "Data Cleaning",
        "Missing Values",
        "Data Transformation",
      ],

      topicDetails: [
        {
          title: "Data Preparation",
          items: [
            "Data Sources",
            "Data Collection",
            "Data Cleaning",
            "Missing Values",
            "Data Transformation",
          ],
        },
      ],

      understanding:
        "Learn why real-world data is rarely ready for analysis immediately.",

      practice:
        "Clean inconsistent data, handle missing values, transform datasets, and prepare data for analysis.",

      project: "Real-World Data Cleaning Project",

      achievement: "Data Preparation",
    },

    {
      id: 6,

      title: "NumPy & Data Manipulation",

      topics: [
        "NumPy Arrays",
        "Vectorized Operations",
        "Indexing & Slicing",
        "Pandas",
        "DataFrames",
      ],

      topicDetails: [
        {
          title: "Data Manipulation",
          items: [
            "NumPy Arrays",
            "Vectorized Operations",
            "Indexing & Slicing",
            "Pandas",
            "DataFrames",
          ],
        },
      ],

      understanding:
        "Learn the core tools used to manipulate and analyze structured datasets in Python.",

      practice:
        "Load, filter, transform, aggregate, and combine datasets.",

      project: "Data Manipulation Application",

      achievement: "Data Manipulation",
    },

    {
      id: 7,

      title: "Exploratory Data Analysis",

      topics: [
        "Data Exploration",
        "Summary Statistics",
        "Relationships & Patterns",
        "Outlier Analysis",
        "EDA Workflow",
      ],

      topicDetails: [
        {
          title: "Exploratory Data Analysis",
          items: [
            "Data Exploration",
            "Summary Statistics",
            "Relationships & Patterns",
            "Outlier Analysis",
            "EDA Workflow",
          ],
        },
      ],

      understanding:
        "Learn how data scientists investigate datasets before building models.",

      practice:
        "Explore distributions, relationships, anomalies, patterns, and important variables.",

      project: "Exploratory Data Analysis",

      achievement: "Exploratory Data Analysis",
    },

    {
      id: 8,

      title: "Data Visualization",

      topics: [
        "Visualization Principles",
        "Matplotlib",
        "Seaborn",
        "Interactive Visualization",
        "Dashboard Concepts",
      ],

      topicDetails: [
        {
          title: "Data Visualization",
          items: [
            "Visualization Principles",
            "Matplotlib",
            "Seaborn",
            "Interactive Visualization",
            "Dashboard Concepts",
          ],
        },
      ],

      understanding:
        "Learn how to communicate data clearly through effective visualizations.",

      practice:
        "Choose appropriate charts, create visual analyses, and build interactive dashboards.",

      project: "Interactive Data Dashboard",

      achievement: "Data Visualization",
    },

    {
      id: 9,

      title: "SQL & Databases",

      topics: [
        "Relational Databases",
        "SQL Fundamentals",
        "Joins & Aggregations",
        "Subqueries",
        "Analytical Queries",
      ],

      topicDetails: [
        {
          title: "SQL & Databases",
          items: [
            "Relational Databases",
            "SQL Fundamentals",
            "Joins & Aggregations",
            "Subqueries",
            "Analytical Queries",
          ],
        },
      ],

      understanding:
        "Learn how professional data scientists retrieve and analyze data stored in databases.",

      practice:
        "Write analytical SQL queries, combine tables, aggregate data, and answer business questions.",

      project: "Data Analytics Database",

      achievement: "Data Analytics with SQL",
    },

    {
      id: 10,

      title: "Statistical Inference",

      topics: [
        "Sampling Distributions",
        "Confidence Intervals",
        "Hypothesis Testing",
        "Correlation",
        "Statistical Significance",
      ],

      topicDetails: [
        {
          title: "Statistical Inference",
          items: [
            "Sampling Distributions",
            "Confidence Intervals",
            "Hypothesis Testing",
            "Correlation",
            "Statistical Significance",
          ],
        },
      ],

      understanding:
        "Move from describing data to making evidence-based conclusions about populations and relationships.",

      practice:
        "Form hypotheses, conduct statistical tests, calculate confidence intervals, and interpret results carefully.",

      project: "Statistical Inference Study",

      achievement: "Statistical Inference",
    },

    {
      id: 11,

      title: "Machine Learning Foundations",

      topics: [
        "Machine Learning Concepts",
        "Supervised Learning",
        "Unsupervised Learning",
        "Training & Testing",
        "Machine Learning Workflow",
      ],

      topicDetails: [
        {
          title: "Machine Learning",
          items: [
            "Machine Learning Concepts",
            "Supervised Learning",
            "Unsupervised Learning",
            "Training & Testing",
            "Machine Learning Workflow",
          ],
        },
      ],

      understanding:
        "Learn how machine learning models learn patterns from data.",

      practice:
        "Prepare datasets, train basic models, evaluate results, and understand the complete machine learning workflow.",

      project: "First Machine Learning Model",

      achievement: "Machine Learning Foundations",
    },

    {
      id: 12,

      title: "Supervised Learning",

      topics: [
        "Linear Regression",
        "Logistic Regression",
        "Decision Trees",
        "Random Forests",
        "Ensemble Methods",
      ],

      topicDetails: [
        {
          title: "Supervised Learning",
          items: [
            "Linear Regression",
            "Logistic Regression",
            "Decision Trees",
            "Random Forests",
            "Ensemble Methods",
          ],
        },
      ],

      understanding:
        "Learn how models can predict continuous values and categories using labeled data.",

      practice:
        "Compare algorithms, train models, evaluate predictions, and select appropriate approaches.",

      project: "Predictive Analytics Application",

      achievement: "Supervised Machine Learning",
    },

    {
      id: 13,

      title: "Unsupervised Learning",

      topics: [
        "Clustering",
        "K-Means",
        "Hierarchical Clustering",
        "Dimensionality Reduction",
        "PCA",
      ],

      topicDetails: [
        {
          title: "Unsupervised Learning",
          items: [
            "Clustering",
            "K-Means",
            "Hierarchical Clustering",
            "Dimensionality Reduction",
            "PCA",
          ],
        },
      ],

      understanding:
        "Learn how to discover patterns and structures when labeled outcomes are unavailable.",

      practice:
        "Group similar observations and reduce complex datasets into useful representations.",

      project: "Customer Segmentation System",

      achievement: "Unsupervised Machine Learning",
    },

    {
      id: 14,

      title: "Feature Engineering & Model Improvement",

      topics: [
        "Feature Selection",
        "Feature Transformation",
        "Encoding",
        "Scaling",
        "Model Improvement",
      ],

      topicDetails: [
        {
          title: "Feature Engineering",
          items: [
            "Feature Selection",
            "Feature Transformation",
            "Encoding",
            "Scaling",
            "Model Improvement",
          ],
        },
      ],

      understanding:
        "Learn why the quality and representation of input data strongly affect machine learning results.",

      practice:
        "Create meaningful features, transform variables, encode categories, scale data, and improve model inputs.",

      project: "Feature Engineering Pipeline",

      achievement: "Feature Engineering",
    },

    {
      id: 15,

      title: "Model Evaluation & Interpretation",

      topics: [
        "Evaluation Metrics",
        "Cross-Validation",
        "Overfitting & Underfitting",
        "Hyperparameter Tuning",
        "Model Interpretation",
      ],

      topicDetails: [
        {
          title: "Model Evaluation",
          items: [
            "Evaluation Metrics",
            "Cross-Validation",
            "Overfitting & Underfitting",
            "Hyperparameter Tuning",
            "Model Interpretation",
          ],
        },
      ],

      understanding:
        "Learn how to determine whether a model performs well and whether its results can be trusted.",

      practice:
        "Compare models, tune parameters, detect overfitting, use appropriate evaluation metrics, and interpret model behavior.",

      project: "Model Evaluation Study",

      achievement: "Machine Learning Evaluation",
    },

    {
      id: 16,

      title: "Time Series & Forecasting",

      topics: [
        "Time Series Fundamentals",
        "Trends & Seasonality",
        "Forecasting",
        "Feature-Based Forecasting",
        "Time Series Evaluation",
      ],

      topicDetails: [
        {
          title: "Time Series",
          items: [
            "Time Series Fundamentals",
            "Trends & Seasonality",
            "Forecasting",
            "Feature-Based Forecasting",
            "Time Series Evaluation",
          ],
        },
      ],

      understanding:
        "Learn how data changes over time and how historical patterns can support forecasting.",

      practice:
        "Analyze trends and seasonality, create forecasting models, and evaluate predictions appropriately.",

      project: "Demand Forecasting System",

      achievement: "Time Series Analytics",
    },

    {
      id: 17,

      title: "Natural Language Data",

      topics: [
        "Text Data",
        "Text Preprocessing",
        "Feature Representation",
        "Text Classification",
        "Sentiment Analysis",
      ],

      topicDetails: [
        {
          title: "Text Analytics",
          items: [
            "Text Data",
            "Text Preprocessing",
            "Feature Representation",
            "Text Classification",
            "Sentiment Analysis",
          ],
        },
      ],

      understanding:
        "Learn how unstructured language data can be transformed into useful analytical representations.",

      practice:
        "Clean text, represent language data, classify documents, and analyze sentiment.",

      project: "Text Analytics Application",

      achievement: "Natural Language Data Science",
    },

    {
      id: 18,

      title: "Deep Learning Foundations",

      topics: [
        "Neural Networks",
        "Activation Functions",
        "Loss Functions",
        "Optimization",
        "Training Neural Networks",
      ],

      topicDetails: [
        {
          title: "Deep Learning",
          items: [
            "Neural Networks",
            "Activation Functions",
            "Loss Functions",
            "Optimization",
            "Training Neural Networks",
          ],
        },
      ],

      understanding:
        "Learn the foundations of neural networks and how they learn complex patterns.",

      practice:
        "Build and train basic neural network models and understand the training process.",

      project: "Neural Network Application",

      achievement: "Deep Learning Foundations",
    },

    {
      id: 19,

      title: "Advanced Data Science",

      topics: [
        "Recommendation Systems",
        "Anomaly Detection",
        "Experimentation",
        "A/B Testing",
        "Advanced Predictive Modeling",
      ],

      topicDetails: [
        {
          title: "Advanced Data Science",
          items: [
            "Recommendation Systems",
            "Anomaly Detection",
            "Experimentation",
            "A/B Testing",
            "Advanced Predictive Modeling",
          ],
        },
      ],

      understanding:
        "Learn how data science is applied to more complex product and business problems.",

      practice:
        "Build systems that recommend, detect unusual behavior, evaluate experiments, and support decisions.",

      project: "Recommendation or Anomaly Detection System",

      achievement: "Advanced Data Science",
    },

    {
      id: 20,

      title: "Responsible & Ethical Data Science",

      topics: [
        "Data Privacy",
        "Bias & Fairness",
        "Explainability",
        "Responsible AI",
        "Data Governance",
      ],

      topicDetails: [
        {
          title: "Responsible Data Science",
          items: [
            "Data Privacy",
            "Bias & Fairness",
            "Explainability",
            "Responsible AI",
            "Data Governance",
          ],
        },
      ],

      understanding:
        "Learn why technically accurate models can still create problems if data, privacy, fairness, and context are ignored.",

      practice:
        "Evaluate datasets and models for privacy, bias, explainability, and responsible use.",

      project: "Responsible Data Science Assessment",

      achievement: "Responsible Data Science",
    },

    {
      id: 21,

      title: "Data Science Engineering & MLOps",

      topics: [
        "Reproducible Workflows",
        "Model Versioning",
        "Experiment Tracking",
        "Model Deployment",
        "Monitoring",
      ],

      topicDetails: [
        {
          title: "Data Science Engineering",
          items: [
            "Reproducible Workflows",
            "Model Versioning",
            "Experiment Tracking",
            "Model Deployment",
            "Monitoring",
          ],
        },
      ],

      understanding:
        "Learn how data science projects move from experiments to reliable production systems.",

      practice:
        "Create reproducible workflows, track experiments, version models, deploy models, and monitor performance.",

      project: "Production Machine Learning Pipeline",

      achievement: "Data Science Engineering & MLOps",
    },

    {
      id: 22,

      title: "Advanced Data & AI Applications",

      topics: [
        "Large-Scale Data Processing",
        "Modern AI Workflows",
        "Embeddings & Vector Search",
        "AI-Assisted Analytics",
        "Data & AI Systems",
      ],

      topicDetails: [
        {
          title: "Data & AI Applications",
          items: [
            "Large-Scale Data Processing",
            "Modern AI Workflows",
            "Embeddings & Vector Search",
            "AI-Assisted Analytics",
            "Data & AI Systems",
          ],
        },
      ],

      understanding:
        "Explore modern data science workflows that connect analytics, machine learning, and AI applications.",

      practice:
        "Work with larger datasets, modern AI techniques, vector representations, and AI-assisted analytical workflows.",

      project: "AI-Powered Data Science Application",

      achievement: "Applied Data & AI Engineering",
    },

    {
      id: 23,

      title: "Data Science Engineering & Architecture",

      topics: [
        "End-to-End Data Science Systems",
        "Production Analytics",
        "Scalable Data Architecture",
        "Business & Technical Communication",
        "Industry Preparation",
      ],

      topicDetails: [
        {
          title: "Data Science Engineering",
          items: [
            "End-to-End Data Science Systems",
            "Production Analytics",
            "Scalable Data Architecture",
            "Business & Technical Communication",
            "Industry Preparation",
          ],
        },
      ],

      understanding:
        "Bring together programming, mathematics, statistics, data engineering concepts, analytics, machine learning, AI, deployment, and communication.",

      practice:
        "Design end-to-end data science solutions that balance accuracy, scalability, interpretability, reliability, cost, and business value.",

      project: "Enterprise Data Science Capstone",

      achievement:
        "CloudLearn AI Certified Data Scientist & Data Science Engineer",
    },
  ],

  /* ============================================================
     PROJECT PROGRESSION
     ============================================================ */

  projectProgression: [
    "Personal Data Analysis",
    "Python Data Processing Application",
    "Mathematical Data Analysis Lab",
    "Statistical Analysis Report",
    "Real-World Data Cleaning Project",
    "Data Manipulation Application",
    "Exploratory Data Analysis",
    "Interactive Data Dashboard",
    "Data Analytics Database",
    "Statistical Inference Study",
    "First Machine Learning Model",
    "Predictive Analytics Application",
    "Customer Segmentation System",
    "Feature Engineering Pipeline",
    "Model Evaluation Study",
    "Demand Forecasting System",
    "Text Analytics Application",
    "Neural Network Application",
    "Recommendation or Anomaly Detection System",
    "Responsible Data Science Assessment",
    "Production Machine Learning Pipeline",
    "AI-Powered Data Science Application",
    "Enterprise Data Science Capstone",
  ],

  /* ============================================================
     ACHIEVEMENT PATH
     ============================================================ */

  achievementPath: [
    "Data Science Foundations",
    "Python for Data Science",
    "Data Science Mathematics",
    "Statistics for Data Science",
    "Data Preparation",
    "Data Manipulation",
    "Exploratory Data Analysis",
    "Data Visualization",
    "Data Analytics with SQL",
    "Statistical Inference",
    "Machine Learning Foundations",
    "Supervised Machine Learning",
    "Unsupervised Machine Learning",
    "Feature Engineering",
    "Machine Learning Evaluation",
    "Time Series Analytics",
    "Natural Language Data Science",
    "Deep Learning Foundations",
    "Advanced Data Science",
    "Responsible Data Science",
    "Data Science Engineering & MLOps",
    "Applied Data & AI Engineering",
    "CloudLearn AI Certified Data Scientist & Data Science Engineer",
  ],

  /* ============================================================
     LEARNING PHILOSOPHY
     ============================================================ */

  learningPhilosophy: [
    "Understand",
    "Learn",
    "Collect",
    "Clean",
    "Explore",
    "Analyze",
    "Visualize",
    "Model",
    "Evaluate",
    "Interpret",
    "Deploy",
    "Monitor",
    "Communicate",
    "Improve",
  ],

  /* ============================================================
     CERTIFICATION GUIDANCE
     ============================================================ */

  certificationGuidance: {
    description: [
      "CloudLearn AI provides achievement credentials throughout the learning path so students can demonstrate their progress.",

      "External certifications can be recommended according to the learner's target role, technology stack, specialization, and career direction.",

      "Students do not need to collect every certification.",
    ],

    priority: [
      "Python",
      "Statistics",
      "SQL",
      "Data Analysis",
      "Data Visualization",
      "Machine Learning",
      "Model Evaluation",
      "Real Projects",
      "Communication",
    ],

    conclusion:
      "Certifications support the journey but do not replace practical data science ability.",
  },

  /* ============================================================
     FINAL CAPSTONE
     ============================================================ */

  finalCapstone: {
    title: "Enterprise Data Science Platform",

    description:
      "The final project combines the major concepts learned throughout the roadmap.",

    components: [
      {
        title: "Problem Definition",
        items: [
          "Business Problem",
          "Data Requirements",
          "Success Metrics",
          "Project Scope",
        ],
      },

      {
        title: "Data",
        items: [
          "Data Collection",
          "Data Cleaning",
          "Data Transformation",
          "Data Quality",
        ],
      },

      {
        title: "Analytics",
        items: [
          "SQL",
          "Exploratory Analysis",
          "Statistics",
          "Visualization",
        ],
      },

      {
        title: "Machine Learning",
        items: [
          "Feature Engineering",
          "Model Training",
          "Model Evaluation",
          "Model Selection",
        ],
      },

      {
        title: "Advanced AI",
        items: [
          "Neural Networks",
          "NLP",
          "Embeddings",
          "AI Workflows",
        ],
      },

      {
        title: "Responsible AI",
        items: [
          "Privacy",
          "Bias",
          "Fairness",
          "Explainability",
        ],
      },

      {
        title: "Engineering",
        items: [
          "Reproducibility",
          "Versioning",
          "Deployment",
          "Monitoring",
        ],
      },

      {
        title: "Communication",
        items: [
          "Data Storytelling",
          "Business Insights",
          "Technical Documentation",
          "Final Presentation",
        ],
      },
    ],

    outcome:
      "The learner finishes by demonstrating the ability to define data problems, collect and prepare data, analyze datasets, build and evaluate models, communicate insights, deploy data-driven solutions, and design production-ready data science systems.",
  },
};

export default dataSciencePath;