const lesson20 = {
  id: "lesson20",
  title: "The Transformer Architecture",
  description:
    "Understand the complete Transformer architecture, including multi-head self-attention, positional encoding, feed-forward networks, residual connections, layer normalization, encoder blocks, decoder blocks, masking, and training.",
  duration: "120–140 min",
  difficulty: "Advanced",
  prerequisites: [
    "Attention mechanisms",
    "Multi-head attention",
    "Self-attention",
    "Positional encoding",
    "Encoder-decoder models"
  ],

  sections: [
    {
      type: "intro",
      title: "From Attention to Transformers",
      content: `
Transformers combine several ideas developed throughout this module.

The central architecture contains:

• Input embeddings
• Positional information
• Multi-head self-attention
• Positionwise feed-forward networks
• Residual connections
• Layer normalization
• Encoder blocks
• Decoder blocks
• Encoder-decoder attention
• Autoregressive masking

The Transformer was originally designed for sequence-to-sequence learning, particularly machine translation.

Unlike recurrent networks, the core Transformer computation does not require processing tokens sequentially through time.
`
    },

    {
      type: "concept",
      title: "1. The Big Picture",
      content: `
A sequence-to-sequence Transformer can be viewed as:

Source tokens
↓
Embedding
↓
Positional encoding
↓
Transformer Encoder
↓
Encoded representations
↓
Transformer Decoder
↓
Vocabulary projection
↓
Target tokens

The encoder builds contextual representations of the source.

The decoder generates the target sequence.
`
    },

    {
      type: "concept",
      title: "2. Why Remove Recurrence?",
      content: `
RNNs process:

x1 → x2 → x3 → x4 → ...

This creates sequential dependencies during computation.

Self-attention instead allows many positions to interact directly.

For a sequence of n tokens, every token can attend to other relevant tokens.

This makes the architecture highly parallelizable during training.
`
    },

    {
      type: "concept",
      title: "3. Transformer Encoder Block",
      content: `
A typical encoder block contains:

Input
↓
Multi-head self-attention
↓
Residual connection + normalization
↓
Positionwise feed-forward network
↓
Residual connection + normalization
↓
Output

Multiple identical blocks can be stacked.
`
    },

    {
      type: "concept",
      title: "4. Transformer Decoder Block",
      content: `
A decoder block contains three major sublayers:

1. Masked multi-head self-attention
2. Encoder-decoder attention
3. Positionwise feed-forward network

Residual connections and normalization surround these transformations.

The masking in the first attention layer ensures that the decoder cannot access future target tokens.
`
    },

    {
      type: "formula",
      title: "5. Scaled Dot-Product Attention",
      content: `
Attention(Q, K, V)
=
softmax(QKᵀ / √d_k)V

where:

Q = queries
K = keys
V = values
d_k = key dimension

The scaling factor prevents dot products from becoming excessively large when the feature dimension increases.
`
    },

    {
      type: "concept",
      title: "6. Multi-Head Attention",
      content: `
Instead of calculating one attention representation, the Transformer uses multiple attention heads.

Each head can learn a different projection of the input.

Conceptually:

Input
↓
Head 1
Head 2
Head 3
...
Head h
↓
Concatenate
↓
Linear projection
↓
Output

Different heads can capture different relationships between sequence positions.
`
    },

    {
      type: "concept",
      title: "7. Why Multiple Heads?",
      content: `
A single attention mechanism produces one learned interaction pattern.

Multiple heads allow the model to represent different relationships simultaneously.

For example, different heads may learn relationships involving:

• Nearby tokens
• Long-distance dependencies
• Syntactic relationships
• Semantic relationships
• Repeated patterns

The model learns these patterns rather than receiving explicit linguistic rules.
`
    },

    {
      type: "concept",
      title: "8. Positional Encoding",
      content: `
Self-attention alone does not inherently encode the order of tokens.

For example:

"dog bites man"

and

"man bites dog"

contain the same tokens but have different meanings.

Therefore positional information is added to token representations.
`
    },

    {
      type: "formula",
      title: "9. Sinusoidal Positional Encoding",
      content: `
A common fixed positional encoding uses:

PE(pos, 2i)
=
sin(pos / 10000^(2i/d))

PE(pos, 2i+1)
=
cos(pos / 10000^(2i/d))

where:

pos = token position
i = feature index
d = embedding dimension

The resulting positional vector is added to the token embedding.
`
    },

    {
      type: "concept",
      title: "10. Adding Position to Embeddings",
      content: `
The Transformer input can be represented as:

X = TokenEmbedding + PositionalEncoding

The model therefore receives both:

• semantic token information
• position information

The two representations occupy the same vector space.
`
    },

    {
      type: "concept",
      title: "11. Positionwise Feed-Forward Network",
      content: `
After attention, each position is independently transformed by the same MLP.

A simplified form is:

FFN(X)
=
σ(XW1 + b1)W2 + b2

The same parameters are applied to every sequence position.

This adds nonlinear transformation capacity after attention.
`
    },

    {
      type: "concept",
      title: "12. Why the Feed-Forward Layer Matters",
      content: `
Attention primarily mixes information between positions.

The feed-forward network transforms the representation at each position.

Therefore the two components have complementary roles:

Attention:
information exchange

FFN:
feature transformation
`
    },

    {
      type: "concept",
      title: "13. Residual Connections",
      content: `
A residual connection adds the input of a sublayer back to its output.

Conceptually:

X
↓
Transformation
↓
F(X)

Output:

X + F(X)

Residual connections make deep networks easier to optimize and allow information to pass through multiple layers.
`
    },

    {
      type: "concept",
      title: "14. Layer Normalization",
      content: `
Layer normalization normalizes activations across features for each example.

It helps stabilize the numerical behavior of deep Transformer networks.

A Transformer block therefore commonly uses:

Transformation
+
Residual connection
+
Layer normalization
`
    },

    {
      type: "concept",
      title: "15. Pre-Normalization",
      content: `
There are multiple ways to place normalization.

A common modern design applies normalization before the main transformation:

X
↓
LayerNorm
↓
Attention
↓
Residual addition

The exact normalization arrangement is an architectural choice and can affect training stability.
`
    },

    {
      type: "concept",
      title: "16. Encoder Self-Attention",
      content: `
In encoder self-attention:

Q = XWQ
K = XWK
V = XWV

All three come from the same encoder representation.

Every source position can therefore attend to other source positions, subject to padding masks.
`
    },

    {
      type: "concept",
      title: "17. Decoder Masked Self-Attention",
      content: `
The decoder generates tokens from left to right.

When predicting position t, the model must not see:

y(t+1), y(t+2), ...

Therefore a causal mask is applied.

Example:

Position 1:
can attend to 1

Position 2:
can attend to 1, 2

Position 3:
can attend to 1, 2, 3

This preserves autoregressive generation.
`
    },

    {
      type: "concept",
      title: "18. Encoder-Decoder Attention",
      content: `
The second attention layer in the decoder connects the target side to the source side.

Queries come from the decoder.

Keys and values come from the encoder.

Therefore:

Q = decoder representation

K = encoder representation

V = encoder representation

This allows each generated token to selectively use source information.
`
    },

    {
      type: "concept",
      title: "19. Transformer Data Flow",
      content: `
Source:

tokens
↓
embedding
↓
position
↓
encoder block
↓
encoder block
↓
...
↓
encoded sequence

Target:

shifted target
↓
embedding
↓
position
↓
masked self-attention
↓
encoder-decoder attention
↓
FFN
↓
vocabulary logits
`
    },

    {
      type: "code",
      language: "python",
      title: "PyTorch Transformer Example",
      content: `
import torch
from torch import nn

model = nn.Transformer(
    d_model=128,
    nhead=8,
    num_encoder_layers=4,
    num_decoder_layers=4,
    dim_feedforward=512,
    dropout=0.1
)

src = torch.randn(20, 32, 128)
tgt = torch.randn(15, 32, 128)

output = model(src, tgt)

print(output.shape)
`
    },

    {
      type: "concept",
      title: "20. Important Tensor Dimensions",
      content: `
Suppose:

batch = 32
source length = 20
target length = 15
hidden size = 128

A sequence-first implementation may use:

Source:
(20, 32, 128)

Target:
(15, 32, 128)

Output:
(15, 32, 128)

Other APIs use batch-first representations:

(batch, sequence, hidden)
`
    },

    {
      type: "concept",
      title: "21. Transformer Training",
      content: `
During training, the entire target sequence is available.

Therefore decoder self-attention uses a causal mask to prevent information leakage.

The model can process many target positions in parallel while still respecting the autoregressive dependency structure.
`
    },

    {
      type: "concept",
      title: "22. Teacher Forcing in Transformers",
      content: `
Suppose the target is:

I love machine learning <eos>

Decoder input:

<bos> I love machine learning

Target:

I love machine learning <eos>

The causal mask ensures that the prediction for "love" cannot see the true future target tokens.
`
    },

    {
      type: "concept",
      title: "23. Transformer Complexity",
      content: `
Self-attention compares sequence positions with one another.

For sequence length n, the attention matrix has approximately:

n × n

entries.

Therefore the standard self-attention mechanism has quadratic scaling with sequence length in its attention interaction component.

This becomes important for very long sequences.
`
    },

    {
      type: "concept",
      title: "24. Transformer vs RNN",
      content: `
RNN:

• Sequential recurrence
• Natural temporal state
• Difficult long-range optimization
• Limited parallelism during training

Transformer:

• Self-attention
• Strong global interaction
• Highly parallelizable training
• Quadratic attention interaction with sequence length
• Requires explicit positional information
`
    },

    {
      type: "concept",
      title: "25. Transformer vs CNN",
      content: `
CNNs provide useful inductive biases:

• Locality
• Translation-related structure
• Hierarchical spatial processing

Transformers use attention to dynamically model relationships between positions.

Neither approach is universally identical in behavior.

The appropriate architecture depends on the data, scale, and task.
`
    },

    {
      type: "concept",
      title: "26. Complete Transformer Block",
      content: `
A simplified encoder block is:

X
↓
Multi-Head Self-Attention
↓
Residual + LayerNorm
↓
Positionwise FFN
↓
Residual + LayerNorm
↓
Output

A decoder block adds:

Masked Self-Attention
↓
Encoder-Decoder Attention
↓
FFN
`
    },

    {
      type: "concept",
      title: "27. Stacking Transformer Blocks",
      content: `
A Transformer does not have to contain one block.

Multiple blocks can be stacked:

Block 1
↓
Block 2
↓
Block 3
↓
...
↓
Block N

Increasing depth increases representational capacity but also increases computational requirements and optimization complexity.
`
    },

    {
      type: "concept",
      title: "28. Common Implementation Errors",
      content: `
Watch for:

• Incorrect attention masks
• Future-token leakage
• Wrong tensor dimensions
• Incorrect head dimension
• Missing positional information
• Incorrect residual connection
• Incorrect normalization placement
• Padding included in attention
• Decoder state confusion
• Wrong vocabulary projection
`
    },

    {
      type: "exercise",
      title: "Implementation Challenge",
      content: `
Build a small Transformer encoder-decoder.

Requirements:

• Token embeddings
• Positional encoding
• Multi-head attention
• Feed-forward layers
• Residual connections
• Layer normalization
• Causal decoder mask
• Vocabulary projection

Train it on a tiny synthetic sequence-to-sequence dataset before attempting translation.
`
    },

    {
      type: "qa",
      question: "Why does a Transformer need positional information?",
      answer:
        "Self-attention by itself does not provide an inherent representation of sequence order, so positional information is added to token representations."
    },

    {
      type: "qa",
      question: "Why does the decoder need a causal mask?",
      answer:
        "To prevent a prediction at position t from accessing future target tokens that would not be available during autoregressive generation."
    },

    {
      type: "qa",
      question: "What is the purpose of multi-head attention?",
      answer:
        "It allows the model to learn multiple attention projections and relationship patterns in parallel."
    },

    {
      type: "qa",
      question: "What is the purpose of residual connections?",
      answer:
        "They provide a direct information and gradient pathway around deep transformations, helping optimization and information flow."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
The Transformer combines:

• Multi-head attention
• Positional encoding
• Feed-forward networks
• Residual connections
• Layer normalization
• Encoder blocks
• Decoder blocks
• Causal masking
• Encoder-decoder attention

The architecture replaces recurrent computation with attention-based information exchange and highly parallelizable training.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "A Transformer is not simply an attention layer. It is a carefully structured stack of attention, normalization, residual pathways, positional information, and feed-forward transformations."
    }
  ]
};

export default lesson20;