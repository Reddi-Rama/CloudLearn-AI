const lesson16 = {
  id: "lesson16",
  title: "Attention Mechanisms",
  description:
    "Understand queries, keys, values, attention pooling, attention scoring functions, scaled dot-product attention, additive attention, and the motivation for Bahdanau attention.",
  duration: "110–130 min",
  difficulty: "Advanced",

  prerequisites: [
    "RNNs and sequence models",
    "Encoder-decoder architecture",
    "Tensor operations",
    "Softmax",
    "Matrix multiplication"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Attention?",
      content: `
The basic encoder-decoder architecture creates an information bottleneck.

The encoder processes the complete source sequence and traditionally compresses the important information into a fixed-size representation.

This becomes difficult when the source sequence is long.

Attention provides another strategy.

Instead of forcing the decoder to rely on one fixed representation, the decoder can selectively access different source representations.

The central question becomes:

"Which parts of the available information are most relevant right now?"

Attention provides a differentiable answer to that question.
`
    },

    {
      type: "concept",
      title: "1. The Core Idea",
      content: `
Suppose an encoder produces:

H1, H2, ..., HT

When the decoder generates a particular target token, it does not necessarily need all encoder states equally.

For example:

Decoder step 1
→ focus strongly on H2

Decoder step 2
→ focus strongly on H5

Decoder step 3
→ focus strongly on H3 and H4

Attention computes these relevance weights automatically.
`
    },

    {
      type: "concept",
      title: "2. Queries, Keys, and Values",
      content: `
Attention uses three concepts:

Query
Key
Value

A query represents what the current computation is looking for.

A key represents what each available item contains or is associated with.

A value contains the information that will actually be aggregated.

The general process is:

Query
↓
compare with Keys
↓
calculate scores
↓
normalize scores
↓
weighted combination of Values
`
    },

    {
      type: "concept",
      title: "3. Query Intuition",
      content: `
A query can be interpreted as a request.

For example, while generating a target word, the decoder state may effectively ask:

"Which source representations are useful for predicting the next token?"

That request becomes the query vector.
`
    },

    {
      type: "concept",
      title: "4. Key Intuition",
      content: `
Each source representation has a key.

The key determines how well that representation matches the current query.

Conceptually:

query ↔ key

A stronger match produces a larger attention score.
`
    },

    {
      type: "concept",
      title: "5. Value Intuition",
      content: `
After deciding how relevant each key is, attention uses the corresponding values.

If attention weights are:

0.1, 0.7, 0.2

then the output is approximately:

0.1 V1 + 0.7 V2 + 0.2 V3

Therefore:

Keys determine relevance.

Values provide information.
`
    },

    {
      type: "formula",
      title: "Basic Attention Formula",
      content: `
Attention(Q, K, V)
=
Σ α_i V_i

where:

α_i = normalized score between Q and K_i

The weights satisfy:

α_i ≥ 0

and:

Σ α_i = 1

when softmax normalization is used.
`
    },

    {
      type: "concept",
      title: "6. Attention as Weighted Pooling",
      content: `
Attention can be understood as a learned weighted average.

Ordinary average:

(V1 + V2 + V3) / 3

Attention:

α1V1 + α2V2 + α3V3

The important difference is that the weights are data-dependent.

The model decides which values deserve more influence.
`
    },

    {
      type: "concept",
      title: "7. Attention Pooling",
      content: `
Attention pooling converts multiple values into a single representation.

The weights depend on similarity between the query and available keys.

Therefore:

Input:
many key-value pairs

Query:
one request

Output:
one weighted representation
`
    },

    {
      type: "concept",
      title: "8. Attention Scores",
      content: `
Before softmax, attention needs a scoring function.

A score answers:

"How compatible is this query with this key?"

Two important scoring functions are:

• Dot-product attention
• Additive attention

Modern Transformer architectures primarily use scaled dot-product attention.
`
    },

    {
      type: "concept",
      title: "9. Dot-Product Attention",
      content: `
For query q and key k:

score(q, k) = qᵀk

A larger dot product means the vectors are more aligned.

For matrices:

scores = QKᵀ

This produces a matrix containing query-key compatibility scores.
`
    },

    {
      type: "formula",
      title: "Dot-Product Attention",
      content: `
Attention(Q, K, V)
=
softmax(QKᵀ)V
`
    },

    {
      type: "concept",
      title: "10. Why Softmax?",
      content: `
Raw attention scores can be positive or negative and do not form a probability distribution.

Softmax converts them into normalized weights.

For scores:

s1, s2, ..., sn

softmax gives:

exp(si) / Σ exp(sj)

The resulting weights:

• are non-negative
• sum to 1
• emphasize larger scores
`
    },

    {
      type: "concept",
      title: "11. The Scaling Problem",
      content: `
If query and key vectors have large dimensionality, their dot products can have large magnitude.

Large scores can cause softmax to become extremely concentrated.

This can produce very small gradients.

The Transformer therefore uses scaled dot-product attention.
`
    },

    {
      type: "formula",
      title: "Scaled Dot-Product Attention",
      content: `
Attention(Q, K, V)
=
softmax(
QKᵀ / √d_k
)V

where:

d_k = dimensionality of the keys.
`
    },

    {
      type: "concept",
      title: "12. Why Divide by √d_k?",
      content: `
If the components of Q and K have roughly zero mean and unit variance, the variance of their dot product grows with dimensionality.

Dividing by:

√d_k

keeps the score scale more controlled.

This makes softmax less likely to enter an extremely saturated regime.
`
    },

    {
      type: "concept",
      title: "13. Tensor Shapes",
      content: `
Suppose:

batch size = B
number of queries = Q
number of keys = K
hidden dimension = d

Then:

Queries:
(B, Q, d)

Keys:
(B, K, d)

Values:
(B, K, dv)

QKᵀ:

(B, Q, K)

Attention output:

(B, Q, dv)
`
    },

    {
      type: "code",
      language: "python",
      title: "Scaled Dot-Product Attention",
      content: `
import math
import torch
from torch import nn

def scaled_dot_product_attention(
    queries,
    keys,
    values
):
    d = queries.shape[-1]

    scores = torch.bmm(
        queries,
        keys.transpose(1, 2)
    )

    scores = scores / math.sqrt(d)

    weights = torch.softmax(
        scores,
        dim=-1
    )

    return torch.bmm(
        weights,
        values
    )
`
    },

    {
      type: "concept",
      title: "14. Attention Masks",
      content: `
Not every key position should always be visible.

Examples:

• Padding positions should often be ignored.
• Decoder self-attention must prevent access to future tokens.

A mask modifies attention scores before softmax.

Invalid positions are assigned very negative values so their softmax weights become approximately zero.
`
    },

    {
      type: "concept",
      title: "15. Valid Lengths",
      content: `
Suppose a sequence contains:

real tokens:
5

padding:
3

The valid length is 5.

Attention should distribute weight only across the first five positions.

This prevents padding from contributing to the representation.
`
    },

    {
      type: "concept",
      title: "16. Additive Attention",
      content: `
Dot-product attention assumes compatible query and key dimensions.

Additive attention first transforms the query and key into a common hidden representation.

Conceptually:

q → Wq q

k → Wk k

Then combine them:

tanh(Wq q + Wk k)

A learned vector converts this representation into an attention score.
`
    },

    {
      type: "formula",
      title: "Additive Attention",
      content: `
a(q, k)
=
wᵀ tanh(W_q q + W_k k)
`
    },

    {
      type: "concept",
      title: "17. Dot Product vs Additive Attention",
      content: `
Dot-product:

• Simple
• Efficient
• Matrix multiplication friendly
• Central to Transformers

Additive:

• Uses learned transformations
• Handles different query/key dimensions naturally
• Historically important in neural machine translation
`
    },

    {
      type: "code",
      language: "python",
      title: "Additive Attention",
      content: `
class AdditiveAttention(nn.Module):
    def __init__(
        self,
        key_size,
        query_size,
        hidden_size,
        dropout=0.0
    ):
        super().__init__()

        self.W_k = nn.Linear(
            key_size,
            hidden_size,
            bias=False
        )

        self.W_q = nn.Linear(
            query_size,
            hidden_size,
            bias=False
        )

        self.w_v = nn.Linear(
            hidden_size,
            1,
            bias=False
        )

        self.dropout = nn.Dropout(dropout)

    def forward(
        self,
        queries,
        keys,
        values
    ):
        q = self.W_q(queries).unsqueeze(2)
        k = self.W_k(keys).unsqueeze(1)

        features = torch.tanh(q + k)

        scores = self.w_v(features).squeeze(-1)

        weights = torch.softmax(
            scores,
            dim=-1
        )

        return torch.bmm(
            self.dropout(weights),
            values
        )
`
    },

    {
      type: "concept",
      title: "18. Attention Visualization",
      content: `
Attention weights can be visualized as a heatmap.

Rows:

queries

Columns:

keys

A bright region indicates stronger attention.

This visualization can help inspect which source positions influence each decoder step.
`
    },

    {
      type: "concept",
      title: "19. Bahdanau Attention",
      content: `
Bahdanau attention was introduced to improve sequence-to-sequence translation.

Instead of relying on a single fixed context vector, the decoder dynamically computes a context representation at each step.

The decoder query depends on its current state.

The encoder states provide keys and values.
`
    },

    {
      type: "concept",
      title: "20. Bahdanau Attention Flow",
      content: `
At decoder time t:

Decoder state
↓
Query

Encoder states
↓
Keys and Values

Query + Keys
↓
Attention scores
↓
Softmax
↓
Attention weights
↓
Weighted encoder states
↓
Context vector
↓
Decoder
`
    },

    {
      type: "concept",
      title: "21. Why Attention Helps Long Sequences",
      content: `
Without attention:

source sequence
↓
one compressed representation
↓
decoder

With attention:

source sequence
↓
many encoder representations
↓
decoder selects relevant representations dynamically

This reduces the burden of storing all source information in a single vector.
`
    },

    {
      type: "concept",
      title: "22. Attention Is Differentiable",
      content: `
Attention weights are produced by differentiable operations:

• Linear transformations
• Dot products
• Addition
• Softmax
• Weighted sums

Therefore gradients can flow through the attention mechanism during training.

The model learns which information should receive greater weight.
`
    },

    {
      type: "concept",
      title: "23. Attention Does Not Mean Hard Selection",
      content: `
Attention normally produces a soft distribution.

For example:

word A → 0.05
word B → 0.80
word C → 0.15

The model does not necessarily select only B.

Instead, it computes:

0.05V_A + 0.80V_B + 0.15V_C

This makes the operation smooth and differentiable.
`
    },

    {
      type: "concept",
      title: "24. Complexity Intuition",
      content: `
If there are:

Q queries

and:

K key-value pairs

the attention score matrix contains:

Q × K

compatibility values.

For self-attention, Q and K both correspond to sequence length n.

Therefore the score matrix has approximately:

n²

entries.

This quadratic scaling becomes important for long sequences.
`
    },

    {
      type: "concept",
      title: "25. Common Implementation Errors",
      content: `
Watch for:

• Forgetting key transposition
• Dividing by the wrong dimension
• Applying softmax along the wrong axis
• Incorrect masking
• Mixing batch and sequence dimensions
• Using probabilities where logits are expected
• Incorrect broadcasting
• Returning attention weights with the wrong shape
`
    },

    {
      type: "exercise",
      title: "Exercise — Implement Attention",
      content: `
Implement scaled dot-product attention from scratch.

Requirements:

1. Accept queries.
2. Accept keys.
3. Accept values.
4. Compute QKᵀ.
5. Scale by √d.
6. Apply softmax.
7. Multiply by V.
8. Return both output and attention weights.

Test the shape with:

queries = (2, 3, 8)
keys = (2, 5, 8)
values = (2, 5, 16)

Expected output:

(2, 3, 16)
`
    },

    {
      type: "qa",
      question: "What are queries, keys, and values?",
      answer:
        "Queries represent what is being looked for, keys represent what is available for matching, and values contain the information that is aggregated."
    },

    {
      type: "qa",
      question: "Why is scaled dot-product attention divided by √d?",
      answer:
        "To control the magnitude of dot-product scores as the key dimension grows and reduce excessive softmax saturation."
    },

    {
      type: "qa",
      question: "Why is attention useful for sequence-to-sequence learning?",
      answer:
        "It allows the decoder to dynamically access different source representations instead of relying entirely on one fixed context vector."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Attention is a learned weighted aggregation mechanism.

Its main pipeline is:

Query
↓
Query-key scores
↓
Normalization
↓
Attention weights
↓
Weighted values
↓
Output

Important mechanisms include:

• Query-key-value representation
• Dot-product attention
• Scaled dot-product attention
• Additive attention
• Attention masks
• Valid lengths
• Bahdanau attention

Attention solves a major limitation of basic encoder-decoder models by providing dynamic access to source information.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Attention transforms sequence modeling from compressing everything into one fixed representation into dynamically selecting relevant information at every computation step."
    }
  ]
};

export default lesson16;