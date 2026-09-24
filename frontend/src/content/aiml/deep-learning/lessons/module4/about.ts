const about = {
  id: "module4",
  title: "Sequence Models and Transformers",
  description:
    "Learn how deep learning models process sequential information, from recurrent neural networks and language models to encoder-decoder architectures, attention mechanisms, and Transformers.",
  overview:
    "This module introduces the major ideas behind deep learning for sequential data. You will learn why ordinary feed-forward networks struggle with sequences, how recurrent neural networks maintain hidden states, how sequence information is represented and predicted, and how modern architectures progressively address the limitations of basic RNNs. The module eventually leads to attention and Transformer architectures.",
  level: "Advanced",
  duration: "30–40 hours",
  prerequisites: [
    "Python programming",
    "Basic PyTorch",
    "Tensor operations",
    "Neural networks",
    "Backpropagation",
    "Loss functions",
    "Gradient descent",
    "Basic probability",
    "Basic linear algebra"
  ],
  learningObjectives: [
    "Understand what makes sequential data different from independent examples.",
    "Understand temporal dependencies and why order matters.",
    "Understand recurrent neural networks and hidden states.",
    "Implement a basic RNN using PyTorch.",
    "Understand how sequence information flows through time.",
    "Understand recurrent parameter sharing.",
    "Understand language modeling and next-token prediction.",
    "Understand training challenges such as vanishing and exploding gradients.",
    "Understand modern recurrent architectures such as GRU and LSTM.",
    "Understand deep and bidirectional recurrent networks.",
    "Understand encoder-decoder architectures.",
    "Understand sequence-to-sequence learning.",
    "Understand attention as dynamic access to relevant information.",
    "Understand multi-head attention and self-attention.",
    "Understand positional information in Transformer models.",
    "Understand the complete Transformer architecture.",
    "Connect sequence models with modern NLP and computer vision systems."
  ],
  skillsGained: [
    "Sequence representation",
    "Temporal modeling",
    "RNN implementation",
    "Language modeling",
    "Gradient analysis",
    "GRU and LSTM reasoning",
    "Encoder-decoder design",
    "Sequence-to-sequence modeling",
    "Attention mechanisms",
    "Self-attention",
    "Multi-head attention",
    "Transformer architecture",
    "PyTorch sequence modeling"
  ],
  moduleStructure: [
    {
      part: "Part A",
      title: "Sequence Modeling Foundations",
      lessons: [
        "Sequence Data and Temporal Dependencies",
        "Recurrent Neural Networks",
        "RNNs from Scratch",
        "RNN Language Models",
        "Training RNNs and Gradient Problems"
      ]
    },
    {
      part: "Part B",
      title: "Modern Recurrent Neural Networks",
      lessons: [
        "Concise RNN Implementation",
        "Gated Recurrent Units",
        "Long Short-Term Memory",
        "Deep RNNs",
        "Bidirectional RNNs"
      ]
    },
    {
      part: "Part C",
      title: "Sequence-to-Sequence Learning",
      lessons: [
        "Sequence Modeling Applications",
        "Encoder-Decoder Architecture",
        "Sequence-to-Sequence Learning for Machine Translation",
        "Beam Search and Sequence Generation"
      ]
    },
    {
      part: "Part D",
      title: "Attention Mechanisms",
      lessons: [
        "Attention Mechanisms",
        "Attention Pooling",
        "Bahdanau Attention",
        "Multi-Head Attention"
      ]
    },
    {
      part: "Part E",
      title: "Transformers",
      lessons: [
        "Self-Attention",
        "Positional Encoding",
        "Transformer Architecture",
        "Transformers for Vision"
      ]
    }
  ],
  assessment:
    "The module concludes with a practical sequence-modeling project involving recurrent models, attention, and Transformer-based experimentation.",
  practicalFocus: [
    "Build sequence datasets",
    "Create recurrent models",
    "Inspect hidden states",
    "Train language models",
    "Compare recurrent architectures",
    "Build encoder-decoder models",
    "Visualize attention",
    "Implement self-attention",
    "Experiment with Transformer blocks"
  ],
  sourceAlignment:
    "The module follows the sequence-modeling progression of the uploaded Dive into Deep Learning material, including recurrent neural networks, modern recurrent architectures, encoder-decoder models, attention mechanisms, and Transformers."
};

export default about;