const lesson19 = {
  id: "lesson19",
  title: "The Transformer Architecture",
  description:
    "Understand the complete Transformer encoder-decoder architecture, including multi-head attention, feed-forward networks, residual connections, layer normalization, masking, encoder blocks, decoder blocks, and training.",
  duration: "120–150 min",
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
      title: "The Transformer",
      content: `
The Transformer combines the ideas developed in the previous lessons into a complete sequence-to-sequence architecture.

Its core components are:

• Multi-head attention
• Positionwise feed-forward networks
• Residual connections
• Layer normalization
• Positional encoding
• Encoder layers
• Decoder layers
• Masked decoder self-attention
• Encoder-decoder attention

Unlike recurrent architectures, the Transformer does not require recurrent hidden-state updates to process a sequence.
`
    },

    {
      type: "concept",
      title: "1. High-Level Architecture",
      content: `
Source sequence
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
Target vocabulary logits
↓
Generated sequence
`
    },

    {
      type: "concept",
      title: "2. Encoder Stack",
      content: `
The Transformer encoder is composed of multiple identical blocks.

Each block contains:

1. Multi-head self-attention
2. Residual connection
3. Layer normalization
4. Positionwise feed-forward network
5. Residual connection
6. Layer normalization

The output of one block becomes the input to the next.
`
    },

    {
      type: "concept",
      title: "3. Decoder Stack",
      content: `
The Transformer decoder also consists of repeated blocks.

Each block contains:

1. Masked multi-head self-attention
2. Residual connection
3. Layer normalization
4. Encoder-decoder attention
5. Residual connection
6. Layer normalization
7. Positionwise feed-forward network
8. Residual connection
9. Layer normalization

The exact normalization placement can vary between implementations.
`
    },

    {
      type: "concept",
      title: "4. Embeddings",
      content: `
Token IDs are converted into vectors.

For vocabulary size V and model dimension D:

Embedding:

V × D

Each token receives a D-dimensional representation.

The sequence becomes:

(batch, sequence_length, D)
`
    },

    {
      type: "concept",
      title: "5. Positional Encoding",
      content: `
The token embeddings are combined with positional information.

Conceptually:

X =
Embedding(tokens)
+
PositionEncoding

The resulting representation contains both:

• token identity
• sequence position
`
    },

    {
      type: "concept",
      title: "6. Encoder Self-Attention",
      content: `
In the encoder:

Q = K = V = X

after learned projections.

Every source token can attend to every other source token, subject to padding masks.

This produces contextual source representations.
`
    },

    {
      type: "concept",
      title: "7. Residual Connections",
      content: `
A residual connection adds the original input to a transformed representation.

Instead of:

y = F(x)

we use:

y = x + F(x)

This provides a direct path through the network.
`
    },

    {
      type: "concept",
      title: "8. Why Residual Connections Help",
      content: `
Deep networks can become difficult to optimize.

Residual connections provide:

• easier gradient flow
• identity shortcuts
• stable deep architectures
• improved optimization

They are an important architectural component of Transformers.
`
    },

    {
      type: "concept",
      title: "9. Layer Normalization",
      content: `
Layer normalization normalizes activations across the feature dimension for each example.

It helps stabilize the internal representations of deep networks.

A simplified conceptual form is:

normalized =
(x - mean) / sqrt(variance + ε)

followed by learned scale and shift parameters.
`
    },

    {
      type: "concept",
      title: "10. Positionwise Feed-Forward Network",
      content: `
After attention, every token representation passes through the same MLP.

For example:

X
↓
Linear
↓
Activation
↓
Linear
↓
Output

The same network is applied independently at every sequence position.
`
    },

    {
      type: "formula",
      title: "Positionwise FFN",
      content: `
FFN(X)
=
σ(XW1 + b1)W2 + b2

where:

W1 expands the representation.

σ is a nonlinear activation.

W2 projects back to the model dimension.
`
    },

    {
      type: "code",
      language: "python",
      title: "Positionwise Feed-Forward Network",
      content: `
from torch import nn

class PositionWiseFFN(nn.Module):
    def __init__(
        self,
        num_hiddens,
        ffn_num_hiddens
    ):
        super().__init__()

        self.net = nn.Sequential(
            nn.Linear(
                num_hiddens,
                ffn_num_hiddens
            ),
            nn.ReLU(),
            nn.Linear(
                ffn_num_hiddens,
                num_hiddens
            )
        )

    def forward(self, X):
        return self.net(X)
`
    },

    {
      type: "concept",
      title: "11. Encoder Block",
      content: `
A simplified encoder block is:

X
↓
Multi-head self-attention
↓
Add residual
↓
Normalize
↓
Positionwise FFN
↓
Add residual
↓
Normalize
↓
Output
`
    },

    {
      type: "code",
      language: "python",
      title: "Simplified Transformer Encoder Block",
      content: `
class TransformerEncoderBlock(nn.Module):
    def __init__(
        self,
        hidden_size,
        ffn_size,
        num_heads,
        dropout=0.1
    ):
        super().__init__()

        self.attention = nn.MultiheadAttention(
            hidden_size,
            num_heads,
            dropout=dropout,
            batch_first=True
        )

        self.ffn = PositionWiseFFN(
            hidden_size,
            ffn_size
        )

        self.norm1 = nn.LayerNorm(hidden_size)
        self.norm2 = nn.LayerNorm(hidden_size)

        self.dropout = nn.Dropout(dropout)

    def forward(self, X, padding_mask=None):

        attention_output, _ = self.attention(
            X,
            X,
            X,
            key_padding_mask=padding_mask
        )

        X = self.norm1(
            X + self.dropout(attention_output)
        )

        output = self.ffn(X)

        X = self.norm2(
            X + self.dropout(output)
        )

        return X
`
    },

    {
      type: "concept",
      title: "12. Decoder Self-Attention",
      content: `
The decoder has a special requirement.

When predicting token t, the model must not see future target tokens.

Therefore decoder self-attention is masked.

For:

A B C D

position C can attend to:

A B C

but not D.
`
    },

    {
      type: "concept",
      title: "13. Encoder-Decoder Attention",
      content: `
The decoder also needs information from the encoder.

Here:

Queries:
decoder representation

Keys:
encoder output

Values:
encoder output

This allows each decoder position to select relevant source information.
`
    },

    {
      type: "concept",
      title: "14. Three Attention Operations in the Decoder",
      content: `
A decoder block therefore contains:

Attention 1:
masked decoder self-attention

Attention 2:
encoder-decoder cross-attention

Then:

Attention 3:
positionwise feed-forward network
`
    },

    {
      type: "concept",
      title: "15. Why Mask Decoder Self-Attention?",
      content: `
During training, the complete target sequence is available.

Without masking, the model could simply look at future target tokens.

That would make training inconsistent with autoregressive generation.

The causal mask ensures:

prediction at position t

depends only on:

positions ≤ t

and encoder information.
`
    },

    {
      type: "concept",
      title: "16. Decoder Block Flow",
      content: `
Target embeddings
↓
Masked self-attention
↓
Residual + normalization
↓
Encoder-decoder attention
↓
Residual + normalization
↓
Feed-forward network
↓
Residual + normalization
↓
Decoder output
`
    },

    {
      type: "concept",
      title: "17. Final Linear Layer",
      content: `
The decoder produces a hidden vector for every target position.

A final linear projection converts each vector into vocabulary logits.

If:

hidden size = D

target vocabulary = V

then:

Linear(D → V)

produces:

(batch, target_length, V)
`
    },

    {
      type: "concept",
      title: "18. Softmax",
      content: `
The logits are converted into probabilities when needed.

For vocabulary token i:

P(i) =
exp(z_i) /
Σ_j exp(z_j)

During training, implementations often pass logits directly into cross-entropy loss for numerical stability.
`
    },

    {
      type: "concept",
      title: "19. Transformer Training",
      content: `
A training iteration is:

Source tokens
↓
Encoder

Target input:
<bos> y1 y2 ... y(T-1)

↓
Decoder

Predictions:
y1 y2 ... yT

↓
Cross-entropy

↓
Backpropagation

↓
Optimizer update
`
    },

    {
      type: "code",
      language: "python",
      title: "Transformer Skeleton",
      content: `
class SimpleTransformer(nn.Module):
    def __init__(
        self,
        src_vocab,
        tgt_vocab,
        hidden_size=256,
        heads=8,
        layers=4,
        ff_size=512
    ):
        super().__init__()

        self.src_embedding = nn.Embedding(
            src_vocab,
            hidden_size
        )

        self.tgt_embedding = nn.Embedding(
            tgt_vocab,
            hidden_size
        )

        self.transformer = nn.Transformer(
            d_model=hidden_size,
            nhead=heads,
            num_encoder_layers=layers,
            num_decoder_layers=layers,
            dim_feedforward=ff_size,
            batch_first=True
        )

        self.output = nn.Linear(
            hidden_size,
            tgt_vocab
        )

    def forward(
        self,
        source,
        target,
        target_mask=None
    ):
        src = self.src_embedding(source)
        tgt = self.tgt_embedding(target)

        hidden = self.transformer(
            src,
            tgt,
            tgt_mask=target_mask
        )

        return self.output(hidden)
`
    },

    {
      type: "concept",
      title: "20. Causal Mask in PyTorch",
      content: `
PyTorch can construct a causal mask so decoder positions cannot attend to future positions.

For a target sequence of length T:

position t
→ can see positions ≤ t

This is essential for autoregressive training.
`
    },

    {
      type: "code",
      language: "python",
      title: "Creating a Causal Mask",
      content: `
target_length = 10

mask = nn.Transformer.generate_square_subsequent_mask(
    target_length
)

print(mask.shape)
`
    },

    {
      type: "concept",
      title: "21. Encoder Padding Mask",
      content: `
Source sequences may contain padding.

The encoder should ignore these artificial positions.

A Boolean padding mask can identify them.

Example:

tokens:

[12, 8, 14, 0, 0]

mask:

[False, False, False, True, True]
`
    },

    {
      type: "concept",
      title: "22. Transformer Data Flow",
      content: `
Complete system:

Source IDs
↓
Source embedding
↓
Positional encoding
↓
Encoder blocks
↓
Memory representation

Target IDs
↓
Target embedding
↓
Positional encoding
↓
Masked decoder blocks
↓
Cross-attention with encoder memory
↓
Decoder representation
↓
Linear projection
↓
Vocabulary logits
`
    },

    {
      type: "concept",
      title: "23. Why Transformers Replaced Many RNN Pipelines",
      content: `
Transformers provide:

• high parallelism
• direct long-range interactions
• flexible attention patterns
• scalable accelerator computation
• reusable encoder and decoder components

However, they also introduce:

• quadratic self-attention cost
• substantial memory usage
• dependence on large datasets and compute for large models
`
    },

    {
      type: "concept",
      title: "24. Transformer Hyperparameters",
      content: `
Important hyperparameters include:

• model dimension
• number of encoder layers
• number of decoder layers
• number of attention heads
• feed-forward dimension
• dropout
• vocabulary size
• maximum sequence length
• learning rate
• batch size
`
    },

    {
      type: "concept",
      title: "25. Shape Tracking Example",
      content: `
Suppose:

batch = 32
source length = 50
target length = 40
hidden size = 256
source vocabulary = 20,000
target vocabulary = 15,000

Source IDs:

(32, 50)

Source embeddings:

(32, 50, 256)

Encoder output:

(32, 50, 256)

Target IDs:

(32, 40)

Decoder output:

(32, 40, 256)

Final logits:

(32, 40, 15000)
`
    },

    {
      type: "concept",
      title: "26. Memory Considerations",
      content: `
Attention requires storing attention-related tensors.

For sequence length n, attention matrices scale approximately with:

n²

Increasing:

• batch size
• sequence length
• number of layers
• number of heads
• hidden dimension

can significantly increase memory requirements.
`
    },

    {
      type: "concept",
      title: "27. Training Stability",
      content: `
Deep Transformer models depend on careful optimization.

Important techniques include:

• residual connections
• layer normalization
• appropriate initialization
• learning-rate scheduling
• dropout
• gradient clipping when needed
• suitable batch sizes
`
    },

    {
      type: "concept",
      title: "28. Transformer Encoder and Decoder Can Be Separated",
      content: `
The original architecture is encoder-decoder.

But Transformer components can also be used independently.

Encoder-only models:
useful for representation and classification.

Decoder-only models:
useful for autoregressive generation.

Encoder-decoder models:
useful for sequence transformation and conditional generation.
`
    },

    {
      type: "concept",
      title: "29. Connection to Modern AI",
      content: `
The Transformer architecture became a foundation for many modern systems.

Its core ideas appear in:

• language models
• machine translation
• text classification
• summarization
• vision Transformers
• multimodal systems
• large-scale generative models
`
    },

    {
      type: "exercise",
      title: "Exercise — Build a Transformer",
      content: `
Build a small translation Transformer.

Suggested configuration:

hidden size = 128
heads = 4
encoder layers = 2
decoder layers = 2
feed-forward size = 256

Train it on a small dataset.

Track:

• training loss
• validation loss
• generated translations
• sequence length
`
    },

    {
      type: "exercise",
      title: "Exercise — Remove Components",
      content: `
Run controlled experiments:

1. Remove positional encoding.
2. Remove residual connections.
3. Reduce attention heads.
4. Reduce encoder layers.
5. Reduce decoder layers.

Observe the effect on:

• training
• convergence
• generated outputs
`
    },

    {
      type: "qa",
      question: "What are the two main sublayers of a Transformer encoder block?",
      answer:
        "Multi-head self-attention and a positionwise feed-forward network, with residual connections and normalization around them."
    },

    {
      type: "qa",
      question: "Why does the decoder use masked self-attention?",
      answer:
        "To prevent a target position from accessing future target tokens during autoregressive generation."
    },

    {
      type: "qa",
      question: "What is encoder-decoder attention?",
      answer:
        "It allows decoder representations to attend to encoder outputs, using decoder states as queries and encoder outputs as keys and values."
    },

    {
      type: "qa",
      question: "Why are residual connections important?",
      answer:
        "They provide shortcut paths that help information and gradients move through deep networks."
    },

    {
      type: "qa",
      question: "What is the purpose of the positionwise FFN?",
      answer:
        "It applies the same nonlinear transformation independently to each sequence position after attention."
    },

    {
      type: "qa",
      question: "What is the main computational limitation of standard self-attention?",
      answer:
        "Its attention matrix grows quadratically with sequence length."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
The Transformer combines several ideas into a unified architecture.

Encoder:

Embedding
+
Position
↓
Self-attention
↓
FFN
↓
Repeated blocks

Decoder:

Embedding
+
Position
↓
Masked self-attention
↓
Encoder-decoder attention
↓
FFN
↓
Repeated blocks
↓
Vocabulary projection

The architecture avoids recurrent sequential computation while providing direct token-to-token interaction.

Its major components are:

• Multi-head attention
• Positional encoding
• Feed-forward networks
• Residual connections
• Layer normalization
• Causal masking
• Encoder-decoder attention

The Transformer becomes the foundation for many later architectures in both language and vision.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "The Transformer is not a single new operation. It is a carefully organized combination of attention, positional information, nonlinear transformation, residual learning, and normalization."
    }
  ]
};

export default lesson19;