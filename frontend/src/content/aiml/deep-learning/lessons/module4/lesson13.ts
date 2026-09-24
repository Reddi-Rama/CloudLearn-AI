const lesson13 = {
  id: "lesson13",
  title: "The Encoder–Decoder Architecture",
  description:
    "Understand the encoder–decoder pattern for transforming one variable-length sequence into another, including encoder states, decoder states, context variables, and autoregressive generation.",
  duration: "100–120 min",
  difficulty: "Advanced",
  prerequisites: [
    "RNNs",
    "LSTMs or GRUs",
    "Machine translation datasets",
    "Embeddings"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Encoder–Decoder?",
      content: `
A normal classifier expects a fixed input structure and produces a fixed output.

Machine translation does not have this property.

We may have:

Input:
"I like programming"

Output:
"J'aime programmer"

The lengths can differ.

The encoder-decoder architecture provides a general framework for mapping one sequence to another.

The encoder reads the source sequence.

The decoder generates the target sequence.
`
    },

    {
      type: "concept",
      title: "1. Overall Architecture",
      content: `
The basic pipeline is:

Source sequence
↓
Encoder
↓
Context / hidden representation
↓
Decoder
↓
Target sequence

The encoder summarizes the source.

The decoder uses that representation while generating the output.
`
    },

    {
      type: "concept",
      title: "2. Encoder",
      content: `
An encoder consumes the source sequence one step at a time.

For an RNN encoder:

X1 → H1
X2 → H2
X3 → H3
...
XT → HT

The hidden states contain information about the source sequence.

In the simplest encoder-decoder design, the final hidden state becomes the context representation.
`
    },

    {
      type: "formula",
      title: "Encoder Recurrence",
      content: `
H_t = RNN(X_t, H_{t-1})

where:

X_t = input at time t
H_t = encoder hidden state
H_{t-1} = previous hidden state
`
    },

    {
      type: "concept",
      title: "3. Context Variable",
      content: `
In the original encoder-decoder design, the final encoder state acts as a context representation.

Context:

C = H_T

The decoder receives C as information about the source sequence.

This is elegant, but it creates an important limitation:

The entire source sequence must be compressed into one fixed-size representation.
`
    },

    {
      type: "concept",
      title: "4. Decoder",
      content: `
The decoder generates the target sequence step by step.

At each time step it receives:

• Previous decoder state
• Previous generated token
• Information from the encoder

Then it predicts the next token.

Conceptually:

previous token
+
decoder state
+
source representation
↓
next-token distribution
`
    },

    {
      type: "formula",
      title: "Decoder Recurrence",
      content: `
S_t = RNN(Y_{t-1}, S_{t-1}, C)

The exact implementation depends on the architecture.

The key idea is that the decoder state evolves as the target sequence is generated.
`
    },

    {
      type: "concept",
      title: "5. Why the Decoder Needs a Beginning Token",
      content: `
The decoder must know how generation starts.

A special:

<bos>

token is therefore supplied.

Example:

<bos> → I → like → learning → <eos>

The first decoder step receives <bos> and predicts the first meaningful target token.
`
    },

    {
      type: "concept",
      title: "6. Why the Decoder Needs an End Token",
      content: `
The decoder must know when to stop.

The special:

<eos>

token provides this signal.

Generation can therefore follow:

Generate token
↓
Check whether token == <eos>
↓
Stop if true
↓
Otherwise continue
`
    },

    {
      type: "concept",
      title: "7. Autoregressive Generation",
      content: `
The decoder is autoregressive.

This means the prediction at time t depends on previously generated outputs.

Conceptually:

P(y1, y2, ..., yT | X)

=

P(y1 | X)
×
P(y2 | y1, X)
×
P(y3 | y1, y2, X)
×
...
`
    },

    {
      type: "concept",
      title: "8. Training vs Inference",
      content: `
There is an important difference.

During training, the correct previous target token is often available.

During inference, the correct target sequence is unknown.

Therefore:

Training:
use known previous target

Inference:
use model-generated previous target

This difference creates an important training/inference mismatch.
`
    },

    {
      type: "concept",
      title: "9. Decoder Output Layer",
      content: `
The decoder normally produces a hidden representation.

A final linear layer converts that representation into vocabulary-sized logits.

If vocabulary size is V:

hidden state
↓
Linear layer
↓
V logits
↓
Softmax
↓
Probability of every possible token
`
    },

    {
      type: "code",
      language: "python",
      title: "Simple Encoder Skeleton",
      content: `
import torch
from torch import nn

class Encoder(nn.Module):
    def __init__(self, vocab_size, embed_size, hidden_size):
        super().__init__()

        self.embedding = nn.Embedding(
            vocab_size,
            embed_size
        )

        self.rnn = nn.GRU(
            embed_size,
            hidden_size
        )

    def forward(self, X):
        X = self.embedding(X)
        output, state = self.rnn(X)
        return output, state
`
    },

    {
      type: "concept",
      title: "10. Encoder Tensor Shapes",
      content: `
Suppose:

batch = 32
sequence length = 20
embedding dimension = 128
hidden size = 256

With sequence-first RNN conventions:

Input IDs:
(20, 32)

Embedded input:
(20, 32, 128)

Encoder output:
(20, 32, 256)

Final hidden state:
(number_of_layers, 32, 256)
`
    },

    {
      type: "concept",
      title: "11. Decoder Tensor Flow",
      content: `
The decoder usually receives target token IDs.

Target IDs
↓
Embedding
↓
Recurrent layer
↓
Hidden representation
↓
Linear projection
↓
Vocabulary logits
`
    },

    {
      type: "code",
      language: "python",
      title: "Simple Decoder Skeleton",
      content: `
class Decoder(nn.Module):
    def __init__(self, vocab_size, embed_size, hidden_size):
        super().__init__()

        self.embedding = nn.Embedding(
            vocab_size,
            embed_size
        )

        self.rnn = nn.GRU(
            embed_size,
            hidden_size
        )

        self.output = nn.Linear(
            hidden_size,
            vocab_size
        )

    def forward(self, X, state):
        X = self.embedding(X)
        output, state = self.rnn(X, state)
        logits = self.output(output)

        return logits, state
`
    },

    {
      type: "concept",
      title: "12. Connecting Encoder and Decoder",
      content: `
A basic design connects the encoder and decoder through hidden state information.

Encoder:

X → Encoder → H

Decoder initialization:

H → Decoder

The decoder then continues recurrent computation while producing target tokens.
`
    },

    {
      type: "concept",
      title: "13. The Information Bottleneck",
      content: `
The fixed-size context creates an information bottleneck.

Imagine translating a very long sentence.

The encoder must compress all relevant information into a fixed-size vector.

As the source becomes more complex, retaining every important detail becomes increasingly difficult.

This limitation motivates attention mechanisms.
`
    },

    {
      type: "concept",
      title: "14. Why Attention Was Needed",
      content: `
Instead of forcing the decoder to depend only on one final encoder state, attention allows the decoder to access different encoder representations.

Conceptually:

Decoder step 1 → relevant source positions
Decoder step 2 → different source positions
Decoder step 3 → different source positions

This gives the decoder dynamic access to source information.

Attention will be introduced in the next part of the course.
`
    },

    {
      type: "concept",
      title: "15. Encoder–Decoder as a General Pattern",
      content: `
Encoder-decoder architectures are not limited to translation.

They can be used for:

• Summarization
• Question answering
• Speech processing
• Sequence generation
• Structured prediction
• Image-to-text systems
• Code generation

The general pattern is:

encode information
→ transform representation
→ decode desired output
`
    },

    {
      type: "concept",
      title: "16. Teacher Forcing Preview",
      content: `
Suppose the target sequence is:

I love AI <eos>

The decoder training input can be:

<bos> I love AI

The desired output is:

I love AI <eos>

Therefore each prediction is trained against the next token.
`
    },

    {
      type: "concept",
      title: "17. Loss Function",
      content: `
For each decoder step, cross-entropy can compare the predicted vocabulary distribution with the correct target token.

The total sequence loss is commonly aggregated across valid target positions.

Padding positions should be excluded from the meaningful loss.
`
    },

    {
      type: "concept",
      title: "18. Inference Loop",
      content: `
A simplified generation loop is:

1. Start with <bos>.
2. Run the decoder.
3. Obtain vocabulary probabilities.
4. Select or sample the next token.
5. Feed that token back into the decoder.
6. Repeat.
7. Stop at <eos> or a maximum length.

This is autoregressive generation.
`
    },

    {
      type: "code",
      language: "python",
      title: "Greedy Decoder Skeleton",
      content: `
def generate(decoder, state, bos_id, eos_id, max_steps):
    token = bos_id
    generated = []

    for _ in range(max_steps):
        x = torch.tensor([[token]])

        logits, state = decoder(x, state)

        next_token = logits[-1, 0].argmax().item()

        if next_token == eos_id:
            break

        generated.append(next_token)
        token = next_token

    return generated
`
    },

    {
      type: "concept",
      title: "19. Greedy Decoding",
      content: `
Greedy decoding selects the highest-probability token at every step.

For example:

Step 1:
A = 0.70
B = 0.20
C = 0.10

Choose A.

Step 2:
A = 0.10
B = 0.65
C = 0.25

Choose B.

This is simple and fast, but it does not necessarily find the highest-probability complete sequence.
`
    },

    {
      type: "concept",
      title: "20. Sequence Probability",
      content: `
For an autoregressive decoder:

P(Y | X)
=
Π P(y_t | y_<t, X)

Because multiplying many probabilities can produce very small numbers, implementations often work with log probabilities.

log P(Y | X)
=
Σ log P(y_t | y_<t, X)
`
    },

    {
      type: "concept",
      title: "21. Teacher Forcing in Practice",
      content: `
Teacher forcing makes training efficient because the decoder does not need to wait for its own predictions before receiving the next training input.

However, during inference the decoder has only its own previous predictions.

If it makes an early mistake, that incorrect token can influence later predictions.

This phenomenon is one reason decoding strategy matters.
`
    },

    {
      type: "concept",
      title: "22. Common Implementation Errors",
      content: `
Typical errors include:

• Incorrect hidden-state dimensions
• Swapping batch and sequence dimensions
• Forgetting <bos>
• Forgetting <eos>
• Passing target labels as decoder inputs without shifting
• Including padding in the loss
• Forgetting to detach or manage recurrent states where appropriate
• Using teacher forcing during inference
• Incorrect vocabulary mapping
`
    },

    {
      type: "exercise",
      title: "Coding Exercise",
      content: `
Implement:

1. An Encoder class.
2. A Decoder class.
3. An EncoderDecoder wrapper.
4. Teacher-forced training input.
5. A greedy generation function.

Test the system on a tiny artificial vocabulary before using a real translation dataset.
`
    },

    {
      type: "qa",
      question: "What is the role of the encoder?",
      answer:
        "It transforms the source sequence into learned representations that provide information for generating the target sequence."
    },

    {
      type: "qa",
      question: "Why is <bos> required?",
      answer:
        "It provides an explicit starting signal for autoregressive decoding."
    },

    {
      type: "qa",
      question: "Why is <eos> required?",
      answer:
        "It tells the decoder that the generated sequence has reached its intended endpoint."
    },

    {
      type: "qa",
      question: "What is the major weakness of the basic encoder-decoder?",
      answer:
        "Compressing an entire source sequence into a single fixed-size representation can create an information bottleneck, especially for long sequences."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
The encoder-decoder architecture provides a general solution for variable-length sequence transformation.

The encoder processes the source.

The decoder generates the target.

Important ideas include:

• Context representation
• Variable-length sequences
• Autoregressive generation
• <bos> and <eos>
• Teacher forcing
• Vocabulary projection
• Cross-entropy loss
• Greedy decoding
• Information bottlenecks

The limitations of the fixed context representation motivate attention mechanisms.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Encoder-decoder models separate understanding the source sequence from generating the target sequence. Attention later removes much of the fixed-context bottleneck."
    }
  ]
};

export default lesson13;