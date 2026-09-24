const lesson18 = {
  id: "lesson18",
  title: "Self-Attention and Positional Encoding",
  description:
    "Understand self-attention, its comparison with CNNs and RNNs, the loss of explicit sequence order, and sinusoidal positional encoding.",
  duration: "100–120 min",
  difficulty: "Advanced",

  prerequisites: [
    "Attention mechanisms",
    "Multi-head attention",
    "Sequence models",
    "Trigonometric functions",
    "Tensor operations"
  ],

  sections: [
    {
      type: "intro",
      title: "From Attention to Self-Attention",
      content: `
Attention becomes especially powerful when a sequence attends to itself.

Every token generates:

• a query
• a key
• a value

Each token can then compare itself with every other token and construct a new representation.

This is called self-attention.
`
    },

    {
      type: "concept",
      title: "1. Self-Attention",
      content: `
Given:

X = [x1, x2, ..., xn]

self-attention computes:

Q = XW^Q

K = XW^K

V = XW^V

Then:

Y =
softmax(
QKᵀ / √d_k
)V

The output contains one representation for each input position.
`
    },

    {
      type: "concept",
      title: "2. Every Token Can Interact",
      content: `
Suppose the sequence contains:

"The student solved the difficult problem."

The representation of "problem" can attend to:

the
student
solved
difficult
problem

and other tokens in the sequence.

The model can therefore construct contextual representations.
`
    },

    {
      type: "concept",
      title: "3. Contextual Representation",
      content: `
A token embedding before self-attention represents the token itself.

After self-attention, the representation can incorporate information from other tokens.

Therefore the same word can receive different contextual representations depending on the surrounding sequence.
`
    },

    {
      type: "concept",
      title: "4. Self-Attention Output Shape",
      content: `
Input:

(B, T, D)

Self-attention produces:

(B, T, D)

The sequence length is preserved.

Every token receives a new D-dimensional representation.
`
    },

    {
      type: "concept",
      title: "5. The Major Advantage",
      content: `
Self-attention allows direct interactions between distant tokens.

For a sequence:

x1, x2, ..., xn

token x1 can directly attend to xn in a single self-attention layer.

This creates a very short computational path between distant positions.
`
    },

    {
      type: "concept",
      title: "6. RNN Comparison",
      content: `
An RNN processes a sequence sequentially:

x1
↓
h1
↓
x2
↓
h2
↓
...
↓
hn

Information from x1 reaches xn through many recurrent steps.

Self-attention can directly connect x1 and xn through one attention operation.
`
    },

    {
      type: "concept",
      title: "7. CNN Comparison",
      content: `
A CNN normally uses local receptive fields.

A token can interact directly with nearby positions.

Long-range relationships require stacking multiple convolutional layers or using sufficiently large receptive fields.

Self-attention provides global pairwise interaction within a layer.
`
    },

    {
      type: "concept",
      title: "8. Parallelism",
      content: `
RNNs have strong sequential dependencies.

Self-attention computes interactions for all positions using matrix operations.

During training, this allows much more parallel computation on GPUs and other accelerators.
`
    },

    {
      type: "concept",
      title: "9. The Cost of Global Attention",
      content: `
The advantage comes with a major cost.

For sequence length n:

attention scores contain:

n × n

entries.

Therefore memory and computation can grow approximately quadratically with sequence length.

For very long sequences, this becomes an important limitation.
`
    },

    {
      type: "concept",
      title: "10. The Order Problem",
      content: `
Self-attention by itself does not inherently encode the sequential order of tokens.

Consider:

"dog bites man"

and:

"man bites dog"

The same set of token representations appears in both cases.

Order must therefore be provided separately.
`
    },

    {
      type: "concept",
      title: "11. Positional Encoding",
      content: `
Positional encoding injects information about token position.

The model receives:

token embedding
+
position information

This allows the Transformer to distinguish:

token at position 1

from:

the same token at position 5.
`
    },

    {
      type: "concept",
      title: "12. Sinusoidal Positional Encoding",
      content: `
A classic Transformer uses deterministic sinusoidal functions.

For position p and dimension i:

PE(p, 2i)
=
sin(
p / 10000^(2i/d)
)

PE(p, 2i+1)
=
cos(
p / 10000^(2i/d)
)

where d is the model dimension.
`
    },

    {
      type: "concept",
      title: "13. Why Sine and Cosine?",
      content: `
Sinusoidal functions provide:

• bounded values
• smooth position changes
• multiple frequencies
• deterministic encodings
• useful relative-position relationships

Different dimensions vary at different frequencies.
`
    },

    {
      type: "concept",
      title: "14. Different Frequencies",
      content: `
Some dimensions change rapidly with position.

Others change slowly.

Together these frequencies create a unique positional pattern.

You can imagine each dimension as a different clock:

fast clock
medium clock
slow clock

The combination identifies position.
`
    },

    {
      type: "code",
      language: "python",
      title: "Sinusoidal Positional Encoding",
      content: `
import math
import torch
from torch import nn

class PositionalEncoding(nn.Module):
    def __init__(
        self,
        num_hiddens,
        dropout=0.0,
        max_len=1000
    ):
        super().__init__()

        self.dropout = nn.Dropout(dropout)

        P = torch.zeros(
            (1, max_len, num_hiddens)
        )

        positions = torch.arange(
            max_len,
            dtype=torch.float32
        ).reshape(-1, 1)

        div_term = torch.pow(
            10000,
            torch.arange(
                0,
                num_hiddens,
                2,
                dtype=torch.float32
            ) / num_hiddens
        )

        P[:, :, 0::2] = torch.sin(
            positions / div_term
        )

        P[:, :, 1::2] = torch.cos(
            positions / div_term
        )

        self.register_buffer(
            "P",
            P
        )

    def forward(self, X):
        X = X + self.P[:, :X.shape[1]]
        return self.dropout(X)
`
    },

    {
      type: "concept",
      title: "15. Why register_buffer?",
      content: `
Positional encodings are not normally trainable parameters.

But they should move with the model between devices.

register_buffer allows the tensor to:

• move to GPU
• appear in model state
• avoid being optimized like a parameter
`
    },

    {
      type: "concept",
      title: "16. Scaling Embeddings",
      content: `
The sinusoidal positional values are bounded.

Token embeddings can have a different scale.

A common Transformer implementation rescales embeddings using:

√d_model

before adding positional encoding.

Conceptually:

X =
√d_model × Embedding(tokens)
+
PositionalEncoding
`
    },

    {
      type: "concept",
      title: "17. Learned Positional Embeddings",
      content: `
Instead of fixed sinusoidal values, positions can also have trainable embeddings.

Then:

position 0 → learned vector
position 1 → learned vector
position 2 → learned vector

The model learns useful positional representations during training.
`
    },

    {
      type: "concept",
      title: "18. Fixed vs Learned Position Information",
      content: `
Sinusoidal:

• deterministic
• no additional trainable parameters
• structured by mathematical functions

Learned:

• optimized from data
• flexible
• adds parameters

Both approaches encode position.
`
    },

    {
      type: "concept",
      title: "19. Self-Attention Pipeline",
      content: `
Tokens
↓
Embedding
↓
Add positional information
↓
Q/K/V projections
↓
Multi-head self-attention
↓
Contextual token representations
`
    },

    {
      type: "concept",
      title: "20. Causal Self-Attention",
      content: `
For autoregressive language modeling, future tokens must remain hidden.

Suppose:

A B C D

At position B:

B can attend to A and B.

It cannot attend to:

C or D.

This is implemented using a causal mask.
`
    },

    {
      type: "concept",
      title: "21. Attention Mask Matrix",
      content: `
For four tokens, a causal pattern can look conceptually like:

1 0 0 0
1 1 0 0
1 1 1 0
1 1 1 1

1 = allowed attention

0 = blocked attention
`
    },

    {
      type: "concept",
      title: "22. Self-Attention vs RNN",
      content: `
RNN:

• sequential computation
• hidden-state recurrence
• long dependency path
• difficult parallelization

Self-attention:

• highly parallel
• direct token-to-token interactions
• short dependency path
• quadratic attention matrix
`
    },

    {
      type: "concept",
      title: "23. Self-Attention vs CNN",
      content: `
CNN:

• local connectivity
• strong spatial inductive bias
• efficient local processing

Self-attention:

• global connectivity
• flexible pairwise relationships
• larger memory/computation for long sequences
`
    },

    {
      type: "concept",
      title: "24. Why Transformers Need Position Information",
      content: `
Without position information, self-attention sees tokens as a collection of vectors.

The model needs additional information to determine:

• first token
• second token
• last token
• relative ordering

Positional encoding supplies this missing structural information.
`
    },

    {
      type: "exercise",
      title: "Exercise — Generate Positional Encodings",
      content: `
Create a positional encoding matrix with:

sequence length = 50
hidden dimension = 32

Plot several dimensions.

Observe:

• fast-changing dimensions
• slow-changing dimensions
• repeating sinusoidal structure
`
    },

    {
      type: "exercise",
      title: "Exercise — Compare Architectures",
      content: `
For a sequence of length 1000, compare conceptually:

RNN
CNN
Self-attention

Discuss:

• parallelism
• long-range dependencies
• memory
• sequential operations
• maximum path length
`
    },

    {
      type: "qa",
      question: "Why does self-attention need positional information?",
      answer:
        "Because the attention mechanism itself does not inherently encode the order of tokens."
    },

    {
      type: "qa",
      question: "What is the major computational drawback of self-attention?",
      answer:
        "The attention score matrix grows quadratically with sequence length."
    },

    {
      type: "qa",
      question: "Why can self-attention model long-range dependencies effectively?",
      answer:
        "Any token can directly attend to another token within the attention operation."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Self-attention allows every token to build its representation using information from other tokens.

Its strengths include:

• global interaction
• parallel computation
• short dependency paths
• flexible contextual representations

Its major limitations include:

• quadratic attention complexity
• need for explicit positional information

Positional encoding provides the missing order information.

These ideas form the foundation of the Transformer.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Self-attention provides global token interaction, while positional encoding tells the model where each token belongs in the sequence."
    }
  ]
};

export default lesson18;