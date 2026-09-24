const lesson = {
  id: "module4-lesson4",
  moduleId: "module4",
  lessonNumber: 4,
  title: "RNN Language Models",
  subtitle:
    "Using recurrent neural networks to predict the next token in a sequence",
  duration: "100–120 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand the purpose of a language model.",
    "Understand character-level language modeling.",
    "Understand next-token prediction.",
    "Understand input-target shifting.",
    "Understand how an RNN generates token probabilities.",
    "Understand vocabulary-sized output layers.",
    "Understand cross-entropy loss for language modeling.",
    "Understand teacher-forcing-style training data construction.",
    "Understand sequence generation from a trained RNN.",
    "Understand perplexity at an intuitive and mathematical level."
  ],

  introduction: `
A language model learns the probability of tokens occurring in a sequence.

For a sequence:

x₁, x₂, x₃, ..., xₜ

a next-token language model attempts to estimate:

P(xₜ₊₁ | x₁, x₂, ..., xₜ)

An RNN is naturally suited to this task because its hidden state can carry information from previous time steps.

At every position, the model receives the current token representation, updates its hidden state, and predicts the next token.

For example:

Input:
m a c h i n

Target:
a c h i n e

The source uses this shifted-input/target idea for a character-level language model. :chatgpt-content-reference{index="1"}
`,

  sections: [
    {
      title: "1. What Is a Language Model?",
      content: `
A language model assigns probabilities to sequences of tokens.

At the next-token level:

P(xₜ₊₁ | x₁, ..., xₜ)

means:

"What is the probability of the next token given everything observed so far?"

For text generation, this probability distribution can be sampled or used to choose a likely next token.
`
    },

    {
      title: "2. Character-Level Language Modeling",
      content: `
A character-level language model treats individual characters as tokens.

Example:

machine

becomes:

m → a → c → h → i → n → e

The model can learn:

given "m", predict "a"

given "ma", predict "c"

given "mac", predict "h"

and so on.

Character-level models are useful for understanding the mechanics of sequence modeling because the vocabulary is usually much smaller than a word-level vocabulary.
`
    },

    {
      title: "3. Input and Target Sequences",
      content: `
Suppose the original sequence is:

m a c h i n e

The training input can be:

m a c h i n

and the target sequence:

a c h i n e

Every input position is paired with the next token.

Therefore:

input  m → target a

input  a → target c

input  c → target h

input  h → target i

input  i → target n

input  n → target e
`
    },

    {
      title: "4. RNN Language Model Architecture",
      content: `
The basic architecture is:

Token
  ↓
Token representation
  ↓
RNN
  ↓
Hidden state
  ↓
Linear output layer
  ↓
Vocabulary logits
  ↓
Softmax
  ↓
Next-token probabilities

The output dimension must equal the vocabulary size.

If the vocabulary contains 50 characters, the output layer must produce 50 scores at every time step.
`
    },

    {
      title: "5. Why the Output Dimension Equals Vocabulary Size",
      content: `
At each time step, the model must assign a score to every possible next token.

If:

vocab_size = V

then:

Oₜ ∈ Rᵛ

Each component represents the score associated with one vocabulary item.

Softmax converts those scores into probabilities.
`
    },

    {
      title: "6. Softmax",
      content: `
Given logits:

z₁, z₂, ..., zᵥ

softmax computes:

P(i) = exp(zᵢ) / Σⱼ exp(zⱼ)

The resulting probabilities:

• are nonnegative
• sum to approximately 1

The highest probability corresponds to the model's most likely prediction.
`
    },

    {
      title: "7. Cross-Entropy Loss",
      content: `
Language models commonly use cross-entropy loss.

If the correct next token is y, the loss for one prediction is:

L = -log P(y)

If the model assigns high probability to the correct token, the loss is small.

If the model assigns low probability to the correct token, the loss is large.
`
    },

    {
      title: "8. Multiple Time Steps",
      content: `
For a sequence, the model produces one prediction at every time step.

Example:

m → predict a
a → predict c
c → predict h
h → predict i
i → predict n
n → predict e

The total training loss combines the losses from the sequence positions.
`
    },

    {
      title: "9. RNN Hidden State Carries Context",
      content: `
Consider:

m → a → c

When the model reaches "c", its hidden state has been influenced by:

m

and:

a

Therefore, the prediction after "c" can depend on the earlier sequence.

This is precisely why an RNN can model conditional sequence probabilities.
`
    },

    {
      title: "10. Batch Processing",
      content: `
Real training does not usually use one sequence at a time.

Instead, a minibatch contains several sequence examples.

A common tensor representation is:

(batch_size, time_steps, vocabulary_size)

when using one-hot representations.

For example:

32 × 20 × 50

means:

32 sequences
20 time steps
50 possible token values
`
    },

    {
      title: "11. One-Hot Input",
      code: `
import torch
import torch.nn.functional as F

token_ids = torch.tensor([
    [0, 1, 2],
    [1, 2, 3]
])

vocab_size = 5

X = F.one_hot(
    token_ids,
    num_classes=vocab_size
).float()

print(X.shape)
`
    },

    {
      title: "12. Expected Shape",
      code: `
torch.Size([2, 3, 5])
`
    },

    {
      title: "13. Building an RNN Language Model",
      code: `
import torch
from torch import nn

class RNNLanguageModel(nn.Module):
    def __init__(
        self,
        vocab_size,
        hidden_size
    ):
        super().__init__()

        self.rnn = nn.RNN(
            input_size=vocab_size,
            hidden_size=hidden_size,
            batch_first=True
        )

        self.output = nn.Linear(
            hidden_size,
            vocab_size
        )

    def forward(self, X):
        H, hidden = self.rnn(X)

        logits = self.output(H)

        return logits, hidden
`
    },

    {
      title: "14. Test the Model",
      code: `
vocab_size = 20
hidden_size = 32

model = RNNLanguageModel(
    vocab_size,
    hidden_size
)

X = torch.randn(8, 10, vocab_size)

logits, hidden = model(X)

print("Input:", X.shape)
print("Logits:", logits.shape)
print("Hidden:", hidden.shape)
`
    },

    {
      title: "15. Expected Output",
      code: `
Input:
torch.Size([8, 10, 20])

Logits:
torch.Size([8, 10, 20])

Hidden:
torch.Size([1, 8, 32])
`
    },

    {
      title: "16. Training Targets",
      content: `
Suppose:

X:

m a c h i n

Targets:

a c h i n e

The target tensor is shifted by one position.

This makes every time step a next-token prediction problem.
`
    },

    {
      title: "17. Loss Calculation",
      code: `
criterion = nn.CrossEntropyLoss()

logits = torch.randn(
    8,
    10,
    20
)

targets = torch.randint(
    0,
    20,
    (8, 10)
)

loss = criterion(
    logits.reshape(-1, 20),
    targets.reshape(-1)
)

print("Loss:", loss.item())
`
    },

    {
      title: "18. Training Loop",
      code: `
optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

for epoch in range(10):
    optimizer.zero_grad()

    logits, _ = model(X)

    loss = criterion(
        logits.reshape(-1, vocab_size),
        targets.reshape(-1)
    )

    loss.backward()

    optimizer.step()

    print(
        f"Epoch {epoch + 1}: "
        f"{loss.item():.4f}"
    )
`
    },

    {
      title: "19. Teacher-Style Training",
      content: `
During training, the model receives the actual previous token as part of the input sequence.

This makes training easier because the model does not have to rely on its own imperfect predictions at every step.

During generation, however, the model must use tokens that it has already generated.

This creates a difference between training and generation.
`
    },

    {
      title: "20. Generating Text",
      content: `
After training, generation can begin with a prefix.

Example:

Prefix:

"it has"

The model predicts the next token.

That token is appended to the sequence.

Then the expanded sequence is used to generate another token.

The process repeats.
`
    },

    {
      title: "21. Autoregressive Generation",
      content: `
Generation follows:

prefix
 ↓
predict next token
 ↓
append token
 ↓
predict next token
 ↓
append token
 ↓
repeat

This is called autoregressive generation because previous generated outputs become future inputs.
`
    },

    {
      title: "22. Greedy Generation",
      content: `
The simplest strategy chooses:

argmax P(next token | context)

That means the token with the highest probability is selected.

This is easy to implement but can produce repetitive or predictable text.
`
    },

    {
      title: "23. Sampling",
      content: `
Instead of always selecting the highest-probability token, we can sample from the probability distribution.

Suppose:

A = 0.60
B = 0.25
C = 0.15

A is more likely, but B and C can occasionally be selected.

Sampling can produce more varied outputs.
`
    },

    {
      title: "24. Perplexity",
      content: `
Perplexity is a commonly used evaluation measure for language models.

Conceptually, it measures how uncertain the model is about the observed sequence.

For average cross-entropy loss L:

Perplexity = exp(L)

Lower perplexity generally indicates that the model assigns higher probability to the observed sequence.
`
    },

    {
      title: "25. Why Perplexity Is Useful",
      content: `
Accuracy alone is not enough for language modeling.

A model may assign:

0.51 probability to the correct token

and another model may assign:

0.95 probability.

Both could produce the correct token under greedy decoding.

Perplexity captures probability quality more directly.
`
    },

    {
      title: "26. Limitations of a Simple RNN Language Model",
      content: `
Simple RNN language models have important limitations.

1. Long-range dependencies are difficult.

2. Gradients can vanish.

3. Gradients can explode.

4. Sequential computation can be slow.

5. Character-level models generate long sequences of tokens.

6. The hidden state must compress historical information into a finite representation.

These limitations motivate the next architectures.
`
    },

    {
      title: "27. Gradient Clipping Preview",
      content: `
The source uses gradient clipping to control exploding gradients.

Conceptually:

g ← min(1, θ / ||g||) g

where:

g = gradient vector

θ = maximum allowed norm

This preserves the gradient direction while preventing its norm from exceeding the chosen threshold. :chatgpt-content-reference{index="2"}
`
    },

    {
      title: "28. Practical PyTorch Gradient Clipping",
      code: `
loss.backward()

torch.nn.utils.clip_grad_norm_(
    model.parameters(),
    max_norm=1.0
)

optimizer.step()
`
    },

    {
      title: "29. Complete Mini Example",
      code: `
import torch
from torch import nn

vocab_size = 30
hidden_size = 64

model = RNNLanguageModel(
    vocab_size,
    hidden_size
)

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

criterion = nn.CrossEntropyLoss()

X = torch.randn(16, 12, vocab_size)
targets = torch.randint(
    0,
    vocab_size,
    (16, 12)
)

for epoch in range(5):
    optimizer.zero_grad()

    logits, _ = model(X)

    loss = criterion(
        logits.reshape(-1, vocab_size),
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
        f"loss={loss.item():.4f}"
    )
`
    },

    {
      title: "30. Debugging Checklist",
      content: `
If your language model does not train, check:

• input vocabulary size
• output vocabulary size
• target shift
• logits shape
• target shape
• CrossEntropyLoss dimensions
• learning rate
• hidden-state handling
• gradient magnitude
• sequence length
• device placement
`
    },

    {
      title: "31. Interview Questions",
      content: `
1. What is a language model?

2. What does next-token prediction mean?

3. Why are input and target sequences shifted?

4. Why must the output dimension equal vocabulary size?

5. Why is cross-entropy used?

6. What is perplexity?

7. What is autoregressive generation?

8. What is greedy decoding?

9. What is sampling?

10. Why do RNN language models suffer on long sequences?

11. Why is gradient clipping useful?
`
    },

    {
      title: "32. Coding Challenge",
      content: `
Build a character-level language model that:

1. Creates a small vocabulary.
2. Converts characters to token IDs.
3. Creates shifted input-target pairs.
4. Uses an RNN.
5. Uses a vocabulary-sized output layer.
6. Trains with cross-entropy.
7. Clips gradients.
8. Generates characters from a prefix.
9. Calculates approximate perplexity.
`
    }
  ],

  keyTakeaways: [
    "A language model predicts the probability of the next token.",
    "RNNs can model next-token probabilities using their hidden state.",
    "Character-level language models treat characters as tokens.",
    "Training targets are shifted by one position.",
    "The output layer produces one score per vocabulary item.",
    "Cross-entropy measures prediction quality.",
    "Perplexity is derived from average negative log-likelihood.",
    "Autoregressive generation feeds generated tokens back into the model.",
    "Gradient clipping helps control exploding gradients."
  ],

  summary: `
An RNN language model converts sequence modeling into repeated next-token prediction.

The basic process is:

token
 ↓
RNN
 ↓
hidden state
 ↓
vocabulary logits
 ↓
softmax
 ↓
next-token probability

Training uses shifted input-target sequences and cross-entropy loss.

At generation time, the model predicts one token at a time and feeds previous predictions back into the sequence.

Simple RNN language models provide an important foundation, but long-term dependencies and gradient problems motivate modern recurrent architectures.
`
};

export default lesson;