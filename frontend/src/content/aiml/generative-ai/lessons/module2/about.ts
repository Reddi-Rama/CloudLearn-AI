const about = {
  id: "about",
  moduleId: "module2",

  title: "About — Large Language Models",

  description:
    "This module develops a complete technical understanding of Large Language Models, from tokenization and Transformer architecture through training, scaling, inference, adaptation, and evaluation.",

  overview: [
    "Large Language Models are neural language systems capable of processing and generating sequences of tokens.",
    "The module begins with the foundations of LLMs and gradually develops the mathematical and architectural concepts behind modern Transformer-based models.",
    "It then moves into training objectives, optimization, context management, KV caching, fine-tuning, scaling, and production reliability.",
    "The final part focuses on limitations, failure modes, and systematic evaluation."
  ],

  moduleStructure: [
    {
      module: "Module 2",
      title: "Large Language Models",
      lessons: 15
    }
  ],

  topicsCovered: [
    "Large Language Model fundamentals",
    "Transformer architecture",
    "Tokens and vocabulary",
    "Token IDs",
    "Embeddings",
    "Positional information",
    "Hidden states",
    "Self-attention",
    "Multi-head attention",
    "Language-model training",
    "Next-token prediction",
    "Cross-entropy loss",
    "Backpropagation",
    "Optimization",
    "Context windows",
    "Long-context modeling",
    "KV cache",
    "Pretraining",
    "Fine-tuning",
    "Instruction tuning",
    "LoRA and parameter-efficient adaptation",
    "Model scaling",
    "Parameter memory",
    "Compute",
    "Inference efficiency",
    "Hallucination",
    "LLM limitations",
    "Evaluation",
    "Groundedness",
    "RAG evaluation",
    "Regression testing",
    "LLM reliability"
  ],

  lessonMap: [
    {
      lesson: 1,
      title: "What Are Large Language Models?"
    },
    {
      lesson: 2,
      title: "Transformer Architecture & Attention"
    },
    {
      lesson: 3,
      title: "Tokens, Vocabulary & Language Representation"
    },
    {
      lesson: 4,
      title: "Embeddings, Positional Information & Hidden States"
    },
    {
      lesson: 5,
      title: "Self-Attention in Depth"
    },
    {
      lesson: 6,
      title: "Multi-Head Attention"
    },
    {
      lesson: 7,
      title: "Transformer Blocks & Information Flow"
    },
    {
      lesson: 8,
      title: "Language Model Architecture & Generation Pipeline"
    },
    {
      lesson: 9,
      title: "Next-Token Prediction & Language Modeling"
    },
    {
      lesson: 10,
      title: "Loss, Backpropagation & Optimization"
    },
    {
      lesson: 11,
      title: "Language Model Training Pipeline & Objectives"
    },
    {
      lesson: 12,
      title: "Context Windows, Long-Context Modeling & KV Cache"
    },
    {
      lesson: 13,
      title: "Pretraining, Fine-Tuning & Instruction Tuning"
    },
    {
      lesson: 14,
      title: "Language Model Scaling, Parameters & Compute"
    },
    {
      lesson: 15,
      title: "LLM Limitations, Failure Modes & Evaluation"
    }
  ],

  skillsDeveloped: [
    "Explain Transformer architecture from first principles.",
    "Trace token information through an LLM.",
    "Calculate attention tensor dimensions.",
    "Implement simplified attention mechanisms.",
    "Understand the LLM training objective.",
    "Understand inference and context management.",
    "Estimate parameter and memory requirements.",
    "Explain fine-tuning and instruction tuning.",
    "Analyze LLM failure modes.",
    "Design evaluation pipelines.",
    "Build LLM-oriented applications."
  ],

  mathematicalConcepts: [
    "Vectors and matrices",
    "Dot products",
    "Matrix multiplication",
    "Softmax",
    "Probability distributions",
    "Cross-entropy",
    "Negative log-likelihood",
    "Gradient descent",
    "Parameter estimation",
    "Precision",
    "Recall",
    "F1 score",
    "Computational complexity",
    "Memory estimation"
  ],

  practicalSkills: [
    "Python implementation",
    "NumPy tensor manipulation",
    "LLM API integration",
    "Prompt construction",
    "Context budgeting",
    "Structured output validation",
    "RAG evaluation",
    "Model comparison",
    "Regression testing",
    "LLM application debugging"
  ],

  completionCriteria: [
    "Complete all 15 lessons.",
    "Complete the module practice.",
    "Solve the mathematical exercises.",
    "Complete the coding exercises.",
    "Complete the architecture exercises.",
    "Build the module project.",
    "Complete the final assessment."
  ],

  keyMessage:
    "The objective of this module is not only to understand what an LLM does, but to understand how it represents information, computes attention, learns during training, generates during inference, scales computationally, and fails in real applications."
};

export default about;
