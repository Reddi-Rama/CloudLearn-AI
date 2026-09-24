const lesson = {
  id: "module4-lesson9",
  moduleId: "module4",
  lessonNumber: 9,
  title: "Deep Recurrent Neural Networks",
  subtitle:
    "Stacking recurrent layers to learn richer temporal representations",
  duration: "100–120 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand what makes an RNN deep.",
    "Understand stacked recurrent layers.",
    "Understand vertical and temporal depth.",
    "Derive the deep-RNN equations.",
    "Understand hidden-state flow between layers.",
    "Implement a stacked RNN from scratch.",
    "Implement multilayer GRUs and LSTMs.",
    "Understand recurrent dropout.",
    "Analyze depth, hidden size, and training stability."
  ],

  introduction: `
A recurrent network can be deep in two different directions.

First:

time depth

A sequence of length T requires repeated recurrent transformations.

Second:

layer depth

Multiple recurrent layers can be stacked at each time step.

The source explains that a standard approach to deep RNNs is simply to stack recurrent networks: the first layer produces a sequence, that sequence becomes the input to the next layer, and so on. :chatgpt-content-reference{index="9"}
`,

  sections: [
    {
      title: "1. Single-Layer RNN",
      content: `
A normal RNN has:

Input
 ↓
RNN
 ↓
Output

At each time step the hidden state depends on the previous hidden state.
`
    },

    {
      title: "2. Deep RNN",
      content: `
A deep RNN has:

Input
 ↓
RNN Layer 1
 ↓
RNN Layer 2
 ↓
RNN Layer 3
 ↓
Output

Each layer processes the sequence representation produced by the previous layer.
`
    },

    {
      title: "3. Two Directions of Depth",
      content: `
Temporal depth:

H₁ → H₂ → H₃ → ... → Hₜ

Layer depth:

Layer 1
 ↓
Layer 2
 ↓
Layer 3

A deep RNN combines both.
`
    },

    {
      title: "4. Hidden-State Notation",
      content: `
Let:

Hₜ⁽ˡ⁾

represent the hidden state at:

time t

and:

layer l.
`
    },

    {
      title: "5. First Layer",
      content: `
The source defines:

Hₜ⁽¹⁾ =
φ(
XₜWₓₕ⁽¹⁾
+
Hₜ₋₁⁽¹⁾Wₕₕ⁽¹⁾
+
bₕ⁽¹⁾
)

The first layer receives the original input Xₜ. :chatgpt-content-reference{index="10"}
`
    },

    {
      title: "6. Higher Layers",
      content: `
For layer l:

Hₜ⁽ˡ⁾ =
φ(
Hₜ⁽ˡ⁻¹⁾Wₓₕ⁽ˡ⁾
+
Hₜ₋₁⁽ˡ⁾Wₕₕ⁽ˡ⁾
+
bₕ⁽ˡ⁾
)

So each layer receives:

• previous layer's current-time representation
• its own previous-time hidden state
`
    },

    {
      title: "7. Output Layer",
      content: `
Only the final recurrent layer feeds the output:

Oₜ =
Hₜ⁽ᴸ⁾Wₕq + bq

where L is the number of hidden recurrent layers. :chatgpt-content-reference{index="11"}
`
    },

    {
      title: "8. Deep RNN Data Flow",
      content: `
Time t:

Xₜ
 ↓
Layer 1 → Hₜ⁽¹⁾
 ↓
Layer 2 → Hₜ⁽²⁾
 ↓
Layer 3 → Hₜ⁽³⁾
 ↓
Output
`
    },

    {
      title: "9. Scratch Stacked RNN",
      code: `
class StackedRNN(nn.Module):
    def __init__(
        self,
        input_size,
        hidden_size,
        num_layers
    ):
        super().__init__()

        self.layers = nn.ModuleList()

        for layer in range(num_layers):
            current_input = (
                input_size
                if layer == 0
                else hidden_size
            )

            self.layers.append(
                nn.RNN(
                    current_input,
                    hidden_size,
                    batch_first=True
                )
            )

    def forward(self, X):
        hidden_states = []

        for rnn in self.layers:
            X, hidden = rnn(X)
            hidden_states.append(hidden)

        return X, hidden_states
`
    },

    {
      title: "10. Testing the Stacked RNN",
      code: `
model = StackedRNN(
    input_size=32,
    hidden_size=64,
    num_layers=3
)

X = torch.randn(
    8,
    20,
    32
)

Y, states = model(X)

print("Output:", Y.shape)

for state in states:
    print(state.shape)
`
    },

    {
      title: "11. Expected Shapes",
      code: `
Output:

[8, 20, 64]

Each layer's hidden state:

[1, 8, 64]
`
    },

    {
      title: "12. PyTorch Multilayer RNN",
      code: `
rnn = nn.RNN(
    input_size=128,
    hidden_size=256,
    num_layers=3,
    batch_first=True
)
`
    },

    {
      title: "13. Multilayer GRU",
      code: `
gru = nn.GRU(
    input_size=128,
    hidden_size=256,
    num_layers=3,
    batch_first=True
)
`
    },

    {
      title: "14. Multilayer LSTM",
      code: `
lstm = nn.LSTM(
    input_size=128,
    hidden_size=256,
    num_layers=3,
    batch_first=True
)
`
    },

    {
      title: "15. Recurrent Dropout",
      content: `
PyTorch recurrent layers can apply dropout between stacked recurrent layers.

Example:

dropout=0.2

This is particularly relevant when:

num_layers > 1
`
    },

    {
      title: "16. Deep GRU Language Model",
      code: `
class DeepGRULM(nn.Module):
    def __init__(
        self,
        vocab_size,
        embed_size,
        hidden_size,
        layers
    ):
        super().__init__()

        self.embedding = nn.Embedding(
            vocab_size,
            embed_size
        )

        self.gru = nn.GRU(
            embed_size,
            hidden_size,
            num_layers=layers,
            dropout=0.2 if layers > 1 else 0,
            batch_first=True
        )

        self.output = nn.Linear(
            hidden_size,
            vocab_size
        )

    def forward(self, tokens):
        X = self.embedding(tokens)

        H, hidden = self.gru(X)

        logits = self.output(H)

        return logits, hidden
`
    },

    {
      title: "17. Why Add Depth?",
      content: `
The first recurrent layer can learn relatively simple temporal representations.

Higher layers can transform those representations into increasingly abstract sequence features.

This is analogous to depth in MLPs and CNNs.
`
    },

    {
      title: "18. Depth Is Not Always Better",
      content: `
Increasing the number of recurrent layers can increase:

• parameters
• memory usage
• computation
• optimization difficulty

Therefore, depth is a hyperparameter rather than an automatic improvement.
`
    },

    {
      title: "19. Hidden Size vs Number of Layers",
      content: `
Two common ways to increase model capacity:

increase hidden size

or:

increase number of recurrent layers.

Hidden size increases representation width.

Layer count increases representation depth.
`
    },

    {
      title: "20. Training Deep RNNs",
      code: `
optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

for epoch in range(10):

    optimizer.zero_grad()

    logits, _ = model(tokens)

    loss = criterion(
        logits.reshape(-1, vocab_size),
        targets.reshape(-1)
    )

    loss.backward()

    torch.nn.utils.clip_grad_norm_(
        model.parameters(),
        max_norm=1.0
    )

    optimizer.step()
`
    },

    {
      title: "21. Why Gradient Clipping Still Matters",
      content: `
Adding recurrent layers does not eliminate gradient-flow problems.

Deep recurrent networks can still require careful:

• learning rate selection
• initialization
• gradient clipping
• sequence-length management

The source specifically notes that convergence of deep RNNs requires care with choices such as learning rate and clipping. :chatgpt-content-reference{index="12"}
`
    },

    {
      title: "22. Deep LSTM",
      code: `
model = nn.LSTM(
    input_size=128,
    hidden_size=256,
    num_layers=4,
    dropout=0.2,
    batch_first=True
)
`
    },

    {
      title: "23. Deep GRU",
      code: `
model = nn.GRU(
    input_size=128,
    hidden_size=256,
    num_layers=4,
    dropout=0.2,
    batch_first=True
)
`
    },

    {
      title: "24. Deep RNN Architecture Choices",
      content: `
You can create:

Deep vanilla RNN

Deep GRU

Deep LSTM

The architecture can therefore be viewed as:

recurrent cell type
+
number of layers
+
hidden size
+
regularization
`
    },

    {
      title: "25. Practical Experiment",
      content: `
Train three models:

Model A:
1-layer GRU

Model B:
2-layer GRU

Model C:
3-layer GRU

Compare:

• training loss
• validation loss
• perplexity
• training time
• parameter count
`
    },

    {
      title: "26. Parameter Count",
      code: `
parameters = sum(
    p.numel()
    for p in model.parameters()
)

print(
    "Parameters:",
    parameters
)
`
    },

    {
      title: "27. Common Errors",
      content: `
1. Forgetting that the first layer receives input_size features.

2. Assuming every layer receives the original input.

3. Confusing layer depth with sequence length.

4. Incorrect hidden-state dimensions.

5. Using dropout with only one recurrent layer and expecting inter-layer dropout behavior.

6. Increasing layers without adjusting training settings.
`
    },

    {
      title: "28. Interview Questions",
      content: `
1. What is a deep RNN?

2. How does information move through a stacked RNN?

3. What is temporal depth?

4. What is layer depth?

5. What does Hₜ⁽ˡ⁾ represent?

6. Why does only the final recurrent layer normally feed the output?

7. How does num_layers affect a PyTorch RNN?

8. Why can deep RNNs be harder to train?

9. Can LSTM and GRU also be stacked?

10. What is the difference between hidden size and layer count?
`
    }
  ],

  keyTakeaways: [
    "Deep RNNs stack recurrent layers vertically.",
    "Each layer receives the previous layer's sequence representation.",
    "Each recurrent layer also maintains temporal recurrence.",
    "Deep RNNs therefore have both temporal and architectural depth.",
    "Vanilla RNNs, GRUs, and LSTMs can all be stacked.",
    "Increasing depth increases model capacity and computational cost.",
    "Gradient clipping and careful optimization remain important."
  ],

  summary: `
A deep RNN combines recurrence through time with multiple recurrent layers.

For each layer:

Hₜ⁽ˡ⁾ =
φ(
Hₜ⁽ˡ⁻¹⁾Wₓₕ⁽ˡ⁾
+
Hₜ₋₁⁽ˡ⁾Wₕₕ⁽ˡ⁾
+
bₕ⁽ˡ⁾
)

The final layer produces:

Oₜ =
Hₜ⁽ᴸ⁾Wₕq + bq

This architecture can be implemented using stacked RNN, GRU, or LSTM layers. :chatgpt-content-reference{index="13"}
`
};

export default lesson;