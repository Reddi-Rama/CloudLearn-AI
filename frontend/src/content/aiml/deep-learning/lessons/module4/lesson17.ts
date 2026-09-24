const lesson17 = {
  id: "lesson17",
  title: "Multi-Head Attention",
  description:
    "Learn how multi-head attention projects queries, keys, and values into multiple representation subspaces, computes attention heads in parallel, and combines them into a richer representation.",
  duration: "100–120 min",
  difficulty: "Advanced",

  prerequisites: [
    "Scaled dot-product attention",
    "Queries, keys, values",
    "Matrix multiplication",
    "Tensor reshaping and permutation"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Multiple Attention Heads?",
      content: `
A single attention operation produces one weighted representation.

But a sequence can contain many different relationships simultaneously.

For example, a sentence may contain:

• grammatical relationships
• semantic relationships
• positional relationships
• long-distance dependencies
• local relationships

One attention mechanism may not represent all these relationships equally well.

Multi-head attention addresses this by performing several attention operations in parallel.
`
    },

    {
      type: "concept",
      title: "1. Core Idea",
      content: `
Instead of:

Q, K, V
↓
one attention operation

we use:

Q → Head 1
Q → Head 2
Q → Head 3
...
Q → Head h

Each head has its own learned projections.

The outputs are concatenated and transformed.
`
    },

    {
      type: "concept",
      title: "2. Projection Layers",
      content: `
The original query, key, and value vectors are projected into different subspaces.

For head i:

Q_i = QW_i^Q

K_i = KW_i^K

V_i = VW_i^V

Each head therefore learns its own representation.
`
    },

    {
      type: "formula",
      title: "Multi-Head Attention",
      content: `
head_i
=
Attention(
QW_i^Q,
KW_i^K,
VW_i^V
)

MultiHead(Q,K,V)
=
Concat(head_1, ..., head_h) W^O
`
    },

    {
      type: "concept",
      title: "3. Why Different Subspaces?",
      content: `
Suppose a model has:

d_model = 512

and:

8 heads

A common design allocates:

512 / 8 = 64

dimensions to each head.

Each head can learn a different projection of the original representation.
`
    },

    {
      type: "concept",
      title: "4. Head Dimension",
      content: `
If:

d_model = 512

num_heads = 8

then:

d_head = 64

The total concatenated dimension returns to:

8 × 64 = 512
`
    },

    {
      type: "concept",
      title: "5. Parallel Computation",
      content: `
Although we conceptually describe heads separately, implementations normally compute them together.

Tensor manipulation changes:

(batch, sequence, hidden)

into a representation containing:

(batch, heads, sequence, head_dimension)

This allows accelerator hardware to process multiple heads efficiently.
`
    },

    {
      type: "concept",
      title: "6. Tensor Shape Transformation",
      content: `
Suppose:

X:

(B, T, D)

where:

B = batch size
T = sequence length
D = hidden dimension

After splitting into H heads:

(B, H, T, D/H)
`
    },

    {
      type: "concept",
      title: "7. Why Permute?",
      content: `
Tensor dimensions are rearranged so that the head dimension is handled explicitly.

Typical transformation:

(B, T, D)

→

(B, T, H, D/H)

then:

(B, H, T, D/H)

This arrangement makes batch matrix multiplication convenient.
`
    },

    {
      type: "code",
      language: "python",
      title: "Splitting Attention Heads",
      content: `
def split_heads(X, num_heads):
    batch, steps, hidden = X.shape

    head_dim = hidden // num_heads

    X = X.reshape(
        batch,
        steps,
        num_heads,
        head_dim
    )

    X = X.permute(
        0,
        2,
        1,
        3
    )

    return X
`
    },

    {
      type: "concept",
      title: "8. Attention Inside Each Head",
      content: `
Each head computes scaled dot-product attention:

Attention_i
=
softmax(
Q_i K_iᵀ / √d_head
)V_i

The result has shape:

(B, H, T_query, d_head)
`
    },

    {
      type: "concept",
      title: "9. Concatenation",
      content: `
After all heads produce outputs, the head dimension is combined.

For:

H = 8

and:

d_head = 64

the concatenated representation has:

8 × 64 = 512

features.
`
    },

    {
      type: "concept",
      title: "10. Output Projection",
      content: `
After concatenation, an output projection is applied:

Concat(heads) W^O

This allows the model to mix information from different heads.

The output returns to the model dimension.
`
    },

    {
      type: "code",
      language: "python",
      title: "Multi-Head Attention Module",
      content: `
import math
import torch
from torch import nn

class MultiHeadAttention(nn.Module):
    def __init__(
        self,
        num_hiddens,
        num_heads,
        dropout=0.0
    ):
        super().__init__()

        assert num_hiddens % num_heads == 0

        self.num_heads = num_heads
        self.head_dim = num_hiddens // num_heads

        self.W_q = nn.Linear(
            num_hiddens,
            num_hiddens,
            bias=False
        )

        self.W_k = nn.Linear(
            num_hiddens,
            num_hiddens,
            bias=False
        )

        self.W_v = nn.Linear(
            num_hiddens,
            num_hiddens,
            bias=False
        )

        self.W_o = nn.Linear(
            num_hiddens,
            num_hiddens,
            bias=False
        )

        self.dropout = nn.Dropout(dropout)

    def forward(self, queries, keys, values):
        Q = self.split_heads(
            self.W_q(queries)
        )

        K = self.split_heads(
            self.W_k(keys)
        )

        V = self.split_heads(
            self.W_v(values)
        )

        scores = torch.matmul(
            Q,
            K.transpose(-2, -1)
        )

        scores = scores / math.sqrt(
            self.head_dim
        )

        weights = torch.softmax(
            scores,
            dim=-1
        )

        output = torch.matmul(
            self.dropout(weights),
            V
        )

        output = self.combine_heads(output)

        return self.W_o(output)

    def split_heads(self, X):
        batch, steps, hidden = X.shape

        X = X.reshape(
            batch,
            steps,
            self.num_heads,
            self.head_dim
        )

        return X.permute(
            0,
            2,
            1,
            3
        )

    def combine_heads(self, X):
        X = X.permute(
            0,
            2,
            1,
            3
        )

        batch, steps, heads, head_dim = X.shape

        return X.reshape(
            batch,
            steps,
            heads * head_dim
        )
`
    },

    {
      type: "concept",
      title: "11. Self-Attention vs Cross-Attention",
      content: `
Multi-head attention can be used in different ways.

Self-attention:

Q, K, V come from the same sequence.

Cross-attention:

Q comes from one sequence while K and V come from another.

Example in an encoder-decoder Transformer:

Decoder representation
→ Query

Encoder representation
→ Keys and Values
`
    },

    {
      type: "concept",
      title: "12. Multi-Head Self-Attention",
      content: `
For self-attention:

Q = XW^Q

K = XW^K

V = XW^V

Every token can potentially attend to every other token, subject to masking rules.
`
    },

    {
      type: "concept",
      title: "13. Why Multi-Head Attention Is Powerful",
      content: `
Different heads can specialize in different patterns.

One head may learn strong local relationships.

Another may capture long-distance dependencies.

Another may focus on syntactic structure.

Another may capture semantic similarity.

These interpretations are useful intuitions, although individual heads do not necessarily have clean human-interpretable roles.
`
    },

    {
      type: "concept",
      title: "14. Attention Weight Visualization",
      content: `
For H heads, attention weights can be represented as:

(B, H, Q, K)

This allows us to visualize the attention pattern of each head separately.

Heatmaps can reveal whether a head focuses locally, globally, diagonally, or on particular token relationships.
`
    },

    {
      type: "concept",
      title: "15. Valid-Length Masking",
      content: `
Padding tokens should not receive meaningful attention.

Masks can be applied independently for every query.

The invalid positions are assigned a very negative score before softmax.

After softmax, their weights become approximately zero.
`
    },

    {
      type: "concept",
      title: "16. Causal Masking",
      content: `
In autoregressive decoder self-attention, a token cannot attend to future tokens.

For sequence:

A B C D

At position C, the model can attend to:

A
B
C

but not:

D

This creates a triangular attention mask.
`
    },

    {
      type: "concept",
      title: "17. Multi-Head Attention and Computation",
      content: `
The main attention operation produces a score matrix for every head.

For sequence length n:

attention score storage is proportional to:

H × n²

where H is the number of heads.

This is one reason long-context Transformer models can require substantial memory.
`
    },

    {
      type: "concept",
      title: "18. Choosing Number of Heads",
      content: `
The number of heads is a hyperparameter.

Too few heads:

the model has fewer parallel representation subspaces.

Too many heads:

each head may receive very few dimensions.

A practical design must balance:

• model dimension
• head count
• head dimension
• computation
• memory
`
    },

    {
      type: "concept",
      title: "19. Common Shape Error",
      content: `
A frequent implementation mistake is using:

hidden_size % num_heads != 0

For example:

hidden = 100
heads = 6

100 cannot be divided evenly into six equal head dimensions.

Therefore many implementations enforce:

hidden_size % num_heads == 0
`
    },

    {
      type: "concept",
      title: "20. Common Permutation Error",
      content: `
Another common problem is forgetting to reverse the tensor permutation after attention.

Correct:

(B, H, T, d)

→

(B, T, H, d)

→

(B, T, D)

The final output must restore the expected model shape.
`
    },

    {
      type: "exercise",
      title: "Exercise — Shape Tracking",
      content: `
Given:

batch = 4
sequence = 16
hidden = 128
heads = 8

Calculate:

1. Head dimension.
2. Q shape.
3. K shape.
4. Attention score shape.
5. Per-head output shape.
6. Combined output shape.
`
    },

    {
      type: "exercise",
      title: "Implementation Challenge",
      content: `
Implement MultiHeadAttention without using nn.MultiheadAttention.

Requirements:

• Query projection
• Key projection
• Value projection
• Head splitting
• Scaled dot-product attention
• Head combination
• Output projection

Then compare your output shape with PyTorch's built-in implementation.
`
    },

    {
      type: "qa",
      question: "Why does multi-head attention use multiple projections?",
      answer:
        "Different projections allow the model to represent relationships in different learned subspaces."
    },

    {
      type: "qa",
      question: "Why must hidden size often be divisible by head count?",
      answer:
        "The hidden representation is commonly divided evenly among the attention heads."
    },

    {
      type: "qa",
      question: "What is cross-attention?",
      answer:
        "Attention where queries come from one representation while keys and values come from another representation."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Multi-head attention performs several attention operations in parallel.

The process is:

Input
↓
Q/K/V projections
↓
Split into heads
↓
Scaled dot-product attention
↓
Combine heads
↓
Output projection

Important concepts:

• Head dimension
• Parallel attention
• Tensor reshaping
• Tensor permutation
• Self-attention
• Cross-attention
• Padding masks
• Causal masks

Multi-head attention is one of the central building blocks of the Transformer architecture.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Multi-head attention allows a Transformer to examine relationships from multiple learned representation subspaces at the same time."
    }
  ]
};

export default lesson17;