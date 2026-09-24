const lesson = {
  id: "module4-lesson6",
  moduleId: "module4",
  lessonNumber: 6,
  title: "Concise RNN Implementation",
  subtitle:
    "Building practical recurrent models with PyTorch's high-level sequence APIs",
  duration: "90–110 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand why high-level RNN APIs are useful.",
    "Implement an RNN using nn.RNN.",
    "Understand input and output tensor shapes.",
    "Understand hidden-state outputs.",
    "Configure multiple recurrent layers.",
    "Use dropout correctly in stacked RNNs.",
    "Build an RNN language model using embeddings.",
    "Train a practical recurrent model.",
    "Compare scratch and concise implementations.",
    "Debug common PyTorch RNN issues."
  ],

  introduction: `
The previous lessons implemented recurrent computation manually.

That was useful for understanding the mathematics.

In practical development, however, we normally use optimized deep-learning framework implementations.

PyTorch provides:

nn.RNN
nn.GRU
nn.LSTM

These modules encapsulate the recurrent computation and provide optimized implementations.

The source makes this same transition: after implementing an RNN from scratch for understanding, it moves to concise high-level APIs for practical model development. :chatgpt-content-reference{index="9"}
`,

  sections: [
    {
      title: "1. Scratch vs High-Level API",
      content: `
Scratch implementation gives:

• mathematical understanding
• explicit parameter control
• educational value

High-level implementation gives:

• less code
• optimized operators
• easier experimentation
• cleaner production code
• easier GPU acceleration
`
    },

    {
      title: "2. Import PyTorch",
      code: `
import torch
from torch import nn
`
    },

    {
      title: "3. Basic nn.RNN",
      code: `
rnn = nn.RNN(
    input_size=16,
    hidden_size=32,
    batch_first=True
)

print(rnn)
`
    },

    {
      title: "4. Meaning of input_size",
      content: `
input_size represents the number of features at each time step.

If every time step is represented by:

16 features

then:

input_size = 16
`
    },

    {
      title: "5. Meaning of hidden_size",
      content: `
hidden_size controls the size of the recurrent hidden representation.

If:

hidden_size = 32

then every time step produces a 32-dimensional hidden representation.
`
    },

    {
      title: "6. batch_first",
      content: `
With:

batch_first=True

PyTorch expects:

(batch, time, features)

Without batch_first, the common ordering is:

(time, batch, features)

Always check the API you are using.
`
    },

    {
      title: "7. Basic Forward Pass",
      code: `
batch_size = 8
time_steps = 12
features = 16

X = torch.randn(
    batch_size,
    time_steps,
    features
)

rnn = nn.RNN(
    input_size=features,
    hidden_size=32,
    batch_first=True
)

output, hidden = rnn(X)

print("X:", X.shape)
print("output:", output.shape)
print("hidden:", hidden.shape)
`
    },

    {
      title: "8. Expected Shapes",
      code: `
X:
[8, 12, 16]

output:
[8, 12, 32]

hidden:
[1, 8, 32]
`
    },

    {
      title: "9. Output vs Hidden",
      content: `
output contains the hidden representation at every time step.

Shape:

(batch, time, hidden)

hidden contains the final hidden state for each recurrent layer.

Shape:

(layers, batch, hidden)

These are not interchangeable.
`
    },

    {
      title: "10. Multiple Layers",
      code: `
rnn = nn.RNN(
    input_size=16,
    hidden_size=32,
    num_layers=3,
    batch_first=True
)
`
    },

    {
      title: "11. Understanding Stacked RNNs",
      content: `
For three layers:

Input
 ↓
RNN Layer 1
 ↓
RNN Layer 2
 ↓
RNN Layer 3
 ↓
Output

At each time step, the second layer receives the representation produced by the first layer.

The third layer receives the representation from the second.
`
    },

    {
      title: "12. Hidden-State Shape With Three Layers",
      code: `
X = torch.randn(8, 12, 16)

rnn = nn.RNN(
    input_size=16,
    hidden_size=32,
    num_layers=3,
    batch_first=True
)

output, hidden = rnn(X)

print(output.shape)
print(hidden.shape)
`
    },

    {
      title: "13. Expected Output",
      code: `
torch.Size([8, 12, 32])
torch.Size([3, 8, 32])
`
    },

    {
      title: "14. Dropout",
      content: `
Stacked RNNs can use dropout between recurrent layers.

Example:

dropout=0.2

Dropout is generally relevant when multiple recurrent layers are stacked.

It is disabled during evaluation mode.
`
    },

    {
      title: "15. Embeddings for Tokens",
      content: `
Instead of representing every token using a large one-hot vector, an embedding layer can map token IDs into dense vectors.

For example:

token ID
   ↓
Embedding
   ↓
128-dimensional vector

This is more compact than a vocabulary-sized one-hot representation.
`
    },

    {
      title: "16. Embedding Layer",
      code: `
vocab_size = 10000
embed_size = 128

embedding = nn.Embedding(
    vocab_size,
    embed_size
)

tokens = torch.tensor([
    [4, 18, 52, 9],
    [7, 21, 31, 6]
])

X = embedding(tokens)

print(X.shape)
`
    },

    {
      title: "17. Expected Shape",
      code: `
torch.Size([2, 4, 128])
`
    },

    {
      title: "18. RNN Language Model",
      code: `
class RNNLM(nn.Module):
    def __init__(
        self,
        vocab_size,
        embed_size,
        hidden_size
    ):
        super().__init__()

        self.embedding = nn.Embedding(
            vocab_size,
            embed_size
        )

        self.rnn = nn.RNN(
            embed_size,
            hidden_size,
            batch_first=True
        )

        self.output = nn.Linear(
            hidden_size,
            vocab_size
        )

    def forward(self, tokens):
        X = self.embedding(tokens)

        H, hidden = self.rnn(X)

        logits = self.output(H)

        return logits, hidden
`
    },

    {
      title: "19. Test the Language Model",
      code: `
model = RNNLM(
    vocab_size=5000,
    embed_size=128,
    hidden_size=256
)

tokens = torch.randint(
    0,
    5000,
    (16, 20)
)

logits, hidden = model(tokens)

print("tokens:", tokens.shape)
print("logits:", logits.shape)
print("hidden:", hidden.shape)
`
    },

    {
      title: "20. Expected Shapes",
      code: `
tokens:
[16, 20]

logits:
[16, 20, 5000]

hidden:
[1, 16, 256]
`
    },

    {
      title: "21. Training the Language Model",
      code: `
criterion = nn.CrossEntropyLoss()

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

for epoch in range(5):

    optimizer.zero_grad()

    logits, _ = model(tokens)

    targets = torch.randint(
        0,
        5000,
        (16, 20)
    )

    loss = criterion(
        logits.reshape(-1, 5000),
        targets.reshape(-1)
    )

    loss.backward()

    torch.nn.utils.clip_grad_norm_(
        model.parameters(),
        1.0
    )

    optimizer.step()

    print(
        f"Epoch {epoch + 1}: "
        f"{loss.item():.4f}"
    )
`
    },

    {
      title: "22. Passing an Initial Hidden State",
      code: `
batch_size = 8
hidden_size = 32

h0 = torch.zeros(
    1,
    batch_size,
    hidden_size
)

output, hidden = rnn(
    X,
    h0
)
`
    },

    {
      title: "23. Hidden State Dimensions",
      content: `
For:

num_layers = L

batch_size = N

hidden_size = H

the hidden state normally has shape:

(L, N, H)

This is important when manually passing hidden states.
`
    },

    {
      title: "24. Stateful Sequence Processing",
      content: `
When processing a long sequence in chunks, one chunk's final hidden state can be passed into the next chunk.

Conceptually:

chunk 1
 ↓
hidden₁
 ↓
chunk 2
 ↓
hidden₂
 ↓
chunk 3

This can be useful for streaming or truncated sequence training.
`
    },

    {
      title: "25. Detaching Hidden State",
      code: `
hidden = hidden.detach()
`
    },

    {
      title: "26. Training vs Evaluation",
      code: `
model.train()

# training

model.eval()

# evaluation
`
    },

    {
      title: "27. Device Placement",
      code: `
device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

model = model.to(device)
tokens = tokens.to(device)
`
    },

    {
      title: "28. Inspecting Parameters",
      code: `
for name, parameter in model.named_parameters():
    print(
        name,
        parameter.shape
    )
`
    },

    {
      title: "29. Comparing Implementations",
      content: `
Scratch RNN:

You explicitly write:

Hₜ = tanh(...)

High-level API:

PyTorch handles the recurrent operation internally.

The conceptual mathematics remains the same.

The difference is abstraction and implementation efficiency.
`
    },

    {
      title: "30. Common Error: Input Size",
      content: `
If:

embedding dimension = 128

then:

nn.RNN(
    input_size=128,
    ...
)

must be used.

A common mistake is accidentally setting input_size to vocabulary size when the model is actually receiving embedding vectors.
`
    },

    {
      title: "31. Common Error: Wrong Tensor Ordering",
      content: `
If:

batch_first=True

expected:

(batch, time, features)

If the tensor is:

(time, batch, features)

the dimensions may be interpreted incorrectly.

Always inspect:

X.shape
`
    },

    {
      title: "32. Common Error: Hidden State Shape",
      content: `
For:

num_layers = 2
batch = 16
hidden = 64

hidden should normally be:

[2, 16, 64]

not:

[16, 2, 64]
`
    },

    {
      title: "33. Practical Architecture",
      content: `
A practical RNN language model can be:

Token IDs
   ↓
Embedding
   ↓
RNN
   ↓
Dropout
   ↓
Linear
   ↓
Vocabulary logits
   ↓
Cross Entropy
`
    },

    {
      title: "34. Interview Questions",
      content: `
1. Why use nn.RNN?

2. What does input_size represent?

3. What does hidden_size represent?

4. What does batch_first=True mean?

5. What is the shape of the output?

6. What is the shape of hidden?

7. What happens when num_layers increases?

8. Why use embeddings?

9. Why use gradient clipping?

10. Why detach hidden states when processing chunks?

11. Why is the high-level implementation preferred in practical projects?
`
    },

    {
      title: "35. Coding Challenge",
      content: `
Build an RNN language model with:

vocabulary = 2,000

embedding = 128

hidden size = 256

layers = 2

dropout = 0.2

The program should:

• accept token IDs
• create embeddings
• process them using an RNN
• produce vocabulary logits
• calculate cross-entropy
• clip gradients
• print tensor shapes
`
    }
  ],

  keyTakeaways: [
    "PyTorch provides optimized recurrent layers such as nn.RNN.",
    "High-level APIs reduce implementation complexity.",
    "Input shape depends on batch_first.",
    "Output contains representations for all time steps.",
    "Hidden contains the final hidden state of each recurrent layer.",
    "Embedding layers provide dense token representations.",
    "Stacked RNNs can increase representational depth.",
    "Gradient clipping remains useful during practical RNN training.",
    "Understanding the scratch implementation makes the high-level API easier to use correctly."
  ],

  summary: `
The scratch implementation explains how an RNN works internally.

The concise implementation shows how the same ideas are used in practical PyTorch development.

A typical sequence model is:

token IDs
 ↓
embedding
 ↓
RNN
 ↓
linear projection
 ↓
vocabulary logits
 ↓
loss

This provides the practical foundation needed before moving to architectures specifically designed to improve long-term information flow.
`
};

export default lesson;