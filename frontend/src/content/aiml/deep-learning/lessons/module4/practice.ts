const practice = {
  id: "module4-practice",
  title: "Module 4 Practice Lab",
  description:
    "A comprehensive practice and implementation laboratory covering RNNs, GRUs, LSTMs, sequence-to-sequence learning, attention, Transformers, Vision Transformers, and large-scale pretraining concepts.",
  duration: "8–12 hours",
  difficulty: "Advanced",

  sections: [
    {
      type: "intro",
      title: "Module 4 Practice Lab",
      content: `
This practice lab brings together the major concepts from Module 4.

You should be able to move from:

sequence representation

to:

RNNs

to:

GRUs and LSTMs

to:

encoder-decoder models

to:

attention

to:

Transformers

to:

Vision Transformers

to:

large-scale Transformer pretraining concepts.

The goal is not only to memorize architectures.

You should be able to implement, debug, compare, and explain them.
`
    },

    {
      type: "concept",
      title: "Practice Area 1 — Sequence Fundamentals",
      content: `
Task:

Create a small sequence dataset.

Requirements:

• Integer tokenization
• Vocabulary
• <pad>
• <bos>
• <eos>
• <unk>
• Variable sequence lengths
• Padding
• Valid lengths

Verify every tensor manually.

Questions:

1. Why is padding required?
2. Why should padding be masked?
3. Why are <bos> and <eos> useful?
4. What happens when a token is unknown?
`
    },

    {
      type: "code",
      language: "python",
      title: "Practice — Padding",
      content: `
def pad_sequence(sequence, max_length, pad_id=0):
    sequence = sequence[:max_length]

    while len(sequence) < max_length:
        sequence.append(pad_id)

    return sequence


samples = [
    [4, 8, 9],
    [3, 7],
    [5, 6, 2, 8]
]

for sample in samples:
    print(pad_sequence(sample, 5))
`
    },

    {
      type: "concept",
      title: "Practice Area 2 — RNN",
      content: `
Implement an RNN manually.

Your implementation should explicitly contain:

• Input-to-hidden weights
• Hidden-to-hidden weights
• Bias
• Hidden-state initialization
• Recurrent update
• Output projection

Verify the dimensions at every step.
`
    },

    {
      type: "code",
      language: "python",
      title: "RNN Practice Skeleton",
      content: `
class SimpleRNN(nn.Module):
    def __init__(self, input_size, hidden_size):
        super().__init__()

        self.x_to_h = nn.Linear(
            input_size,
            hidden_size
        )

        self.h_to_h = nn.Linear(
            hidden_size,
            hidden_size
        )

    def forward(self, X, h=None):
        if h is None:
            h = torch.zeros(
                X.size(1),
                self.h_to_h.out_features,
                device=X.device
            )

        outputs = []

        for t in range(X.size(0)):
            h = torch.tanh(
                self.x_to_h(X[t]) +
                self.h_to_h(h)
            )

            outputs.append(h)

        return torch.stack(outputs), h
`
    },

    {
      type: "concept",
      title: "Practice Area 3 — Gradient Problems",
      content: `
Experiment with an RNN on a long sequence.

Monitor:

• Loss
• Gradient norm
• Hidden-state magnitude
• Training stability

Then deliberately remove gradient clipping and compare the behavior.

Questions:

1. What is an exploding gradient?
2. What is a vanishing gradient?
3. Why are recurrent matrix products involved?
4. Why can gradient clipping help exploding gradients?
`
    },

    {
      type: "concept",
      title: "Practice Area 4 — GRU",
      content: `
Implement a GRU from scratch.

Required components:

Reset gate
Update gate
Candidate hidden state
Final hidden state

Study how changing the update gate affects memory retention.

Experiment with sequences where early information is needed much later.
`
    },

    {
      type: "formula",
      title: "GRU Practice Equations",
      content: `
R_t = σ(X_t W_xr + H_{t-1}W_hr + b_r)

Z_t = σ(X_t W_xz + H_{t-1}W_hz + b_z)

H~_t =
tanh(X_tW_xh + (R_t ⊙ H_{t-1})W_hh + b_h)

H_t =
Z_t ⊙ H_{t-1}
+
(1-Z_t) ⊙ H~_t
`
    },

    {
      type: "concept",
      title: "Practice Area 5 — LSTM",
      content: `
Implement an LSTM and explicitly track:

• Cell state
• Hidden state
• Input gate
• Forget gate
• Output gate
• Candidate memory

Compare the LSTM with the GRU.

Record:

• Parameter count
• Training time
• Validation loss
• Sequence prediction quality
`
    },

    {
      type: "concept",
      title: "Practice Area 6 — Language Model",
      content: `
Build a character-level language model.

Pipeline:

Text
↓
Character vocabulary
↓
Integer encoding
↓
Sequence batches
↓
RNN / GRU / LSTM
↓
Vocabulary logits
↓
Cross-entropy
↓
Text generation
`
    },

    {
      type: "code",
      language: "python",
      title: "Language Model Target Shifting",
      content: `
sequence = torch.tensor([
    [4, 7, 9, 2, 8]
])

X = sequence[:, :-1]
Y = sequence[:, 1:]

print("Input:", X)
print("Target:", Y)
`
    },

    {
      type: "concept",
      title: "Practice Area 7 — Encoder-Decoder",
      content: `
Create a miniature translation system.

Example:

Input:
hello

Target:
bonjour

Input:
good morning

Target:
bonjour

Input:
good night

Target:
bonne nuit

Implement:

• Separate vocabularies
• Encoder
• Decoder
• Teacher forcing
• Masked loss
• Greedy generation
`
    },

    {
      type: "concept",
      title: "Practice Area 8 — Attention",
      content: `
Given:

Q
K
V

implement scaled dot-product attention.

Verify that:

Attention(Q,K,V)
=
softmax(QKᵀ / √d_k)V

Then visualize the attention weights.

Experiment with different query and key dimensions.
`
    },

    {
      type: "code",
      language: "python",
      title: "Scaled Dot-Product Attention",
      content: `
import math
import torch

def scaled_dot_product_attention(Q, K, V):
    scores = torch.matmul(
        Q,
        K.transpose(-2, -1)
    )

    scores = scores / math.sqrt(Q.size(-1))

    weights = torch.softmax(
        scores,
        dim=-1
    )

    output = torch.matmul(
        weights,
        V
    )

    return output, weights
`
    },

    {
      type: "concept",
      title: "Practice Area 9 — Multi-Head Attention",
      content: `
Implement multi-head attention.

Steps:

1. Project Q.
2. Project K.
3. Project V.
4. Split hidden dimension into heads.
5. Compute attention independently.
6. Concatenate heads.
7. Apply final projection.

Verify:

hidden_size % num_heads == 0
`
    },

    {
      type: "concept",
      title: "Practice Area 10 — Positional Encoding",
      content: `
Implement sinusoidal positional encoding.

Verify that:

• Different positions receive different vectors.
• Even and odd dimensions use different sinusoidal functions.
• The encoding can be added directly to token embeddings.
`
    },

    {
      type: "code",
      language: "python",
      title: "Sinusoidal Positional Encoding",
      content: `
import math
import torch

def positional_encoding(length, d_model):
    P = torch.zeros(length, d_model)

    position = torch.arange(
        length
    ).reshape(-1, 1)

    div_term = torch.exp(
        torch.arange(0, d_model, 2)
        * -(math.log(10000.0) / d_model)
    )

    P[:, 0::2] = torch.sin(
        position * div_term
    )

    P[:, 1::2] = torch.cos(
        position * div_term
    )

    return P
`
    },

    {
      type: "concept",
      title: "Practice Area 11 — Transformer Encoder",
      content: `
Build a Transformer encoder containing:

• Embedding
• Positional encoding
• Multi-head self-attention
• Residual connection
• Layer normalization
• Positionwise FFN

Stack at least two blocks.

Inspect the output shape after every block.
`
    },

    {
      type: "concept",
      title: "Practice Area 12 — Transformer Decoder",
      content: `
Extend the system with:

• Masked self-attention
• Encoder-decoder attention
• Feed-forward network
• Residual connections
• Layer normalization
• Vocabulary projection

Verify that future target positions cannot be accessed.
`
    },

    {
      type: "concept",
      title: "Practice Area 13 — Causal Mask",
      content: `
Create a causal mask for sequence length 5.

Expected visibility:

1 → 1
2 → 1,2
3 → 1,2,3
4 → 1,2,3,4
5 → 1,2,3,4,5

Test the mask directly before integrating it into the model.
`
    },

    {
      type: "concept",
      title: "Practice Area 14 — Beam Search",
      content: `
Implement beam search.

Test:

beam width = 1
beam width = 2
beam width = 5

Compare:

• Generated sequence
• Score
• Runtime
• Number of candidates
`
    },

    {
      type: "concept",
      title: "Practice Area 15 — Vision Transformer",
      content: `
Build a miniature Vision Transformer.

Pipeline:

Image
↓
Patch embedding
↓
Class token
↓
Position embedding
↓
Transformer encoder
↓
Class token representation
↓
Classification head
`
    },

    {
      type: "concept",
      title: "Practice Area 16 — Patch Experiment",
      content: `
Train the same ViT with different patch sizes.

Experiment:

8 × 8
16 × 16
32 × 32

Record:

• Number of patches
• Parameter count
• Training time
• Validation accuracy
• Memory usage
`
    },

    {
      type: "concept",
      title: "Practice Area 17 — Compare RNN, CNN and Transformer",
      content: `
Create a comparison report.

Analyze:

RNN:
sequence recurrence

CNN:
local receptive fields

Transformer:
attention-based global interaction

Compare:

• Parallelism
• Long-range dependencies
• Computational complexity
• Inductive bias
• Memory requirements
• Typical applications
`
    },

    {
      type: "concept",
      title: "Practice Area 18 — Pretraining",
      content: `
Design three hypothetical pretraining systems.

System A:
Encoder-only masked-token prediction

System B:
Encoder-decoder text transformation

System C:
Decoder-only next-token prediction

For each specify:

• Input
• Objective
• Attention pattern
• Output
• Downstream applications
`
    },

    {
      type: "concept",
      title: "Practice Area 19 — Debugging Challenge",
      content: `
You receive a Transformer whose training loss never decreases.

Investigate in this order:

1. Input vocabulary IDs.
2. Target shifting.
3. Padding mask.
4. Causal mask.
5. Tensor shapes.
6. Learning rate.
7. Initialization.
8. Gradient norm.
9. Loss calculation.
10. Optimizer update.
`
    },

    {
      type: "concept",
      title: "Practice Area 20 — Final Module Project",
      content: `
Build one integrated project.

Option A:
Neural machine translation system.

Option B:
Character-level Transformer language model.

Option C:
Vision Transformer image classifier.

Required documentation:

• Problem statement
• Dataset
• Preprocessing
• Architecture
• Mathematical formulation
• Training configuration
• Evaluation metrics
• Experiments
• Error analysis
• Limitations
• Future improvements
`
    },

    {
      type: "exercise",
      title: "Interview Questions",
      content: `
Answer these without notes:

1. Why were Transformers introduced?
2. Why is positional encoding required?
3. What is scaled dot-product attention?
4. Why divide by √d_k?
5. What is multi-head attention?
6. What is self-attention?
7. Why does decoder self-attention require masking?
8. What does the encoder-decoder attention layer do?
9. Why are residual connections used?
10. What does layer normalization do?
11. Why can self-attention become expensive for long sequences?
12. How does a ViT represent an image?
13. Why is a class token used?
14. What is masked language modeling?
15. What is next-token prediction?
16. What is the difference between BERT, T5, and GPT-style architectures?
17. What is in-context learning?
18. What factors are important when scaling Transformers?
`
    },

    {
      type: "exercise",
      title: "Final Coding Challenge",
      content: `
Implement a small Transformer-based application from scratch using PyTorch.

Minimum requirements:

• Dataset
• Tokenization
• Embedding
• Positional encoding
• Attention
• Transformer blocks
• Loss
• Training loop
• Validation
• Inference
• Error analysis

Your implementation should contain shape checks and comments explaining the mathematical operations.
`
    },

    {
      type: "summary",
      title: "Module 4 Final Summary",
      content: `
Module 4 moved from recurrent sequence models to modern Transformer systems.

You studied:

Sequence data
RNNs
RNN training
Language modeling
GRUs
LSTMs
Deep RNNs
Bidirectional RNNs
Machine translation
Encoder-decoder models
Sequence-to-sequence learning
Beam search
Attention
Multi-head attention
Self-attention
Positional encoding
Transformers
Vision Transformers
Large-scale Transformer pretraining

You should now be able to explain not only what these architectures are, but why each component exists and how the components interact.
`
    },

    {
      type: "takeaway",
      title: "Module 4 Key Takeaway",
      content:
        "Modern sequence and multimodal systems can be understood as progressively improving ways of representing relationships between elements: recurrent state → gated memory → attention → self-attention → Transformer architectures → large-scale pretrained models."
    }
  ]
};

export default practice;