const lesson = {
  id: "module4-lesson8",
  moduleId: "module4",
  lessonNumber: 8,
  title: "Long Short-Term Memory (LSTM)",
  subtitle:
    "Learning long-term dependencies with memory cells and gated information flow",
  duration: "120–140 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand why LSTMs were introduced.",
    "Understand the LSTM memory-cell concept.",
    "Understand the input gate.",
    "Understand the forget gate.",
    "Understand the output gate.",
    "Understand the candidate memory state.",
    "Derive the LSTM equations.",
    "Understand the cell state and hidden state.",
    "Implement an LSTM from scratch.",
    "Implement an LSTM using PyTorch.",
    "Understand how LSTMs address long-term dependency problems."
  ],

  introduction: `
Vanilla RNNs can struggle to preserve information across many time steps because their recurrent computation can lead to vanishing or exploding gradients.

LSTM introduces a more controlled memory mechanism.

Instead of relying on a single hidden state, an LSTM maintains:

• a hidden state Hₜ
• a memory-cell state Cₜ

It also introduces three learned gates:

• input gate
• forget gate
• output gate

The uploaded source describes the memory cell as the central component that allows information to persist across many time steps while learned gates control when information enters, remains in, or leaves the memory. 
`,

  sections: [
    {
      title: "1. Why LSTM?",
      content: `
A basic RNN repeatedly transforms:

Hₜ₋₁ → Hₜ

Across a long sequence, useful information may become difficult to preserve.

LSTM introduces a dedicated memory pathway:

Cₜ₋₁ → Cₜ

and learned gates determine how this memory changes.
`
    },

    {
      title: "2. LSTM Components",
      content: `
An LSTM contains:

1. Input gate
2. Forget gate
3. Output gate
4. Candidate memory
5. Cell state
6. Hidden state
`
    },

    {
      title: "3. Input and Previous Hidden State",
      content: `
At time t the cell receives:

Xₜ

and the previous hidden state:

Hₜ₋₁

The gates are computed from these two quantities. :chatgpt-content-reference{index="2"}
`
    },

    {
      title: "4. Input Gate",
      content: `
The input gate determines how much new candidate information should enter the memory.

Iₜ =
σ(
XₜWₓᵢ +
Hₜ₋₁Wₕᵢ +
bᵢ
)

Because sigmoid is used:

0 < Iₜ < 1
`
    },

    {
      title: "5. Forget Gate",
      content: `
The forget gate determines how much of the previous cell state should remain.

Fₜ =
σ(
XₜWₓf +
Hₜ₋₁Wₕf +
b_f
)

A value close to 1 means strong retention.

A value close to 0 means strong forgetting.
`
    },

    {
      title: "6. Output Gate",
      content: `
The output gate determines how much of the internal cell state should influence the hidden state.

Oₜ =
σ(
XₜWₓₒ +
Hₜ₋₁Wₕₒ +
bₒ
)

The source describes these three gates as sigmoid-controlled mechanisms for input, forgetting, and output. :chatgpt-content-reference{index="3"}
`
    },

    {
      title: "7. Candidate Memory",
      content: `
The candidate memory is computed using tanh:

C̃ₜ =
tanh(
XₜWₓc +
Hₜ₋₁Wₕc +
b_c
)

Its values lie approximately between:

-1 and 1.
`
    },

    {
      title: "8. Updating the Cell State",
      content: `
The new memory state is:

Cₜ =
Fₜ ⊙ Cₜ₋₁
+
Iₜ ⊙ C̃ₜ

This is the core memory update.

The forget gate controls the old memory.

The input gate controls the new candidate memory. :chatgpt-content-reference{index="4"}
`
    },

    {
      title: "9. Computing the Hidden State",
      content: `
The hidden state is:

Hₜ =
Oₜ ⊙ tanh(Cₜ)

The cell state can therefore store information while the output gate controls how much of that memory becomes visible to the next computation. :chatgpt-content-reference{index="5"}
`
    },

    {
      title: "10. Complete LSTM Flow",
      content: `
                Xₜ
                 │
        ┌────────┼────────┐
        ↓        ↓        ↓
      Input    Forget   Output
       Gate     Gate     Gate
        │        │        │
        └────┐   │   ┌────┘
             ↓   ↓   ↓
        Candidate Memory
               ↓
          Cell State
               ↓
          Hidden State
`
    },

    {
      title: "11. What If Forget Gate Is 1?",
      content: `
If:

Fₜ ≈ 1

then:

Cₜ ≈ Cₜ₋₁ + Iₜ ⊙ C̃ₜ

The old memory is largely preserved.
`
    },

    {
      title: "12. What If Forget Gate Is 0?",
      content: `
If:

Fₜ ≈ 0

then:

Cₜ ≈ Iₜ ⊙ C̃ₜ

The previous memory contributes very little.
`
    },

    {
      title: "13. What If Input Gate Is 0?",
      content: `
If:

Iₜ ≈ 0

then:

Cₜ ≈ Fₜ ⊙ Cₜ₋₁

The model largely ignores the new candidate.
`
    },

    {
      title: "14. What If Output Gate Is 0?",
      content: `
If:

Oₜ ≈ 0

then:

Hₜ ≈ 0

even though the cell state can continue to contain information.
`
    },

    {
      title: "15. Scratch LSTM",
      code: `
import torch
from torch import nn

class ScratchLSTM(nn.Module):
    def __init__(
        self,
        input_size,
        hidden_size
    ):
        super().__init__()

        self.hidden_size = hidden_size

        def weight(*shape):
            return nn.Parameter(
                torch.randn(*shape) * 0.01
            )

        self.W_xi = weight(input_size, hidden_size)
        self.W_hi = weight(hidden_size, hidden_size)
        self.b_i = nn.Parameter(
            torch.zeros(hidden_size)
        )

        self.W_xf = weight(input_size, hidden_size)
        self.W_hf = weight(hidden_size, hidden_size)
        self.b_f = nn.Parameter(
            torch.zeros(hidden_size)
        )

        self.W_xo = weight(input_size, hidden_size)
        self.W_ho = weight(hidden_size, hidden_size)
        self.b_o = nn.Parameter(
            torch.zeros(hidden_size)
        )

        self.W_xc = weight(input_size, hidden_size)
        self.W_hc = weight(hidden_size, hidden_size)
        self.b_c = nn.Parameter(
            torch.zeros(hidden_size)
        )

    def forward(self, X):
        batch_size = X.shape[0]

        H = torch.zeros(
            batch_size,
            self.hidden_size,
            device=X.device
        )

        C = torch.zeros(
            batch_size,
            self.hidden_size,
            device=X.device
        )

        outputs = []

        for t in range(X.shape[1]):
            X_t = X[:, t, :]

            I = torch.sigmoid(
                X_t @ self.W_xi +
                H @ self.W_hi +
                self.b_i
            )

            F = torch.sigmoid(
                X_t @ self.W_xf +
                H @ self.W_hf +
                self.b_f
            )

            O = torch.sigmoid(
                X_t @ self.W_xo +
                H @ self.W_ho +
                self.b_o
            )

            C_tilde = torch.tanh(
                X_t @ self.W_xc +
                H @ self.W_hc +
                self.b_c
            )

            C = F * C + I * C_tilde

            H = O * torch.tanh(C)

            outputs.append(H)

        return torch.stack(
            outputs,
            dim=1
        )
`
    },

    {
      title: "16. Testing the Scratch LSTM",
      code: `
model = ScratchLSTM(
    input_size=16,
    hidden_size=32
)

X = torch.randn(
    8,
    20,
    16
)

Y = model(X)

print(Y.shape)
`
    },

    {
      title: "17. Expected Shape",
      code: `
torch.Size([8, 20, 32])
`
    },

    {
      title: "18. PyTorch LSTM",
      code: `
lstm = nn.LSTM(
    input_size=16,
    hidden_size=32,
    batch_first=True
)

X = torch.randn(
    8,
    20,
    16
)

output, (hidden, cell) = lstm(X)

print(output.shape)
print(hidden.shape)
print(cell.shape)
`
    },

    {
      title: "19. Expected Shapes",
      code: `
output:
[8, 20, 32]

hidden:
[1, 8, 32]

cell:
[1, 8, 32]
`
    },

    {
      title: "20. LSTM Language Model",
      code: `
class LSTMLanguageModel(nn.Module):
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

        self.lstm = nn.LSTM(
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

        H, state = self.lstm(X)

        logits = self.output(H)

        return logits, state
`
    },

    {
      title: "21. Stacked LSTM",
      code: `
lstm = nn.LSTM(
    input_size=128,
    hidden_size=256,
    num_layers=3,
    dropout=0.2,
    batch_first=True
)
`
    },

    {
      title: "22. LSTM State",
      content: `
Unlike a vanilla RNN, an LSTM returns two state tensors:

hidden state H

and:

cell state C

Therefore:

output, (H, C) = lstm(X)
`
    },

    {
      title: "23. Why Two States?",
      content: `
The cell state acts as the internal memory pathway.

The hidden state is the exposed recurrent representation.

This separation gives the architecture additional control over information flow.
`
    },

    {
      title: "24. LSTM Training",
      code: `
criterion = nn.CrossEntropyLoss()

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
      title: "25. LSTM and Long-Term Dependencies",
      content: `
The memory-cell update provides a pathway through which information can persist.

The gates learn when to:

• write information
• retain information
• expose information

This is why LSTMs can handle long-range dependencies more effectively than basic RNNs.
`
    },

    {
      title: "26. LSTM vs GRU",
      content: `
LSTM:

• input gate
• forget gate
• output gate
• cell state
• hidden state

GRU:

• reset gate
• update gate
• hidden state

The source characterizes GRU as a streamlined alternative that can achieve similar performance with lighter computation in many settings. 
`
    },

    {
      title: "27. Common LSTM Mistakes",
      content: `
1. Forgetting the cell state.

2. Confusing H with C.

3. Using the wrong hidden-state shape.

4. Mixing up input and forget gates.

5. Forgetting the tanh operation on the cell state before producing H.

6. Incorrectly implementing elementwise multiplication.

7. Passing only H when the API expects (H, C).
`
    },

    {
      title: "28. Interview Questions",
      content: `
1. Why was LSTM introduced?

2. What is the cell state?

3. What is the hidden state?

4. What does the forget gate do?

5. What does the input gate do?

6. What does the output gate do?

7. Why use sigmoid for gates?

8. Why use tanh for the candidate memory?

9. What is the LSTM cell-state equation?

10. How does LSTM help long-term dependencies?

11. What is the difference between LSTM and GRU?
`
    },

    {
      title: "29. Practical Project",
      content: `
Build a character-level LSTM language model.

Requirements:

• vocabulary creation
• tokenization
• embedding
• LSTM
• linear vocabulary projection
• cross-entropy
• gradient clipping
• validation loss
• perplexity
• text generation

Then compare:

RNN vs GRU vs LSTM.
`
    }
  ],

  keyTakeaways: [
    "LSTM introduces a separate cell state for memory.",
    "The input gate controls new information entering memory.",
    "The forget gate controls retention of old memory.",
    "The output gate controls how memory influences the hidden state.",
    "The cell state is updated using an elementwise combination of old and candidate memory.",
    "LSTMs are designed to better handle long-term dependencies.",
    "PyTorch exposes LSTM through nn.LSTM.",
    "LSTM returns both hidden and cell states."
  ],

  summary: `
LSTM extends recurrent modeling with controlled memory.

The core equations are:

Iₜ = σ(XₜWₓᵢ + Hₜ₋₁Wₕᵢ + bᵢ)

Fₜ = σ(XₜWₓf + Hₜ₋₁Wₕf + b_f)

Oₜ = σ(XₜWₓₒ + Hₜ₋₁Wₕₒ + bₒ)

C̃ₜ = tanh(XₜWₓc + Hₜ₋₁Wₕc + b_c)

Cₜ = Fₜ ⊙ Cₜ₋₁ + Iₜ ⊙ C̃ₜ

Hₜ = Oₜ ⊙ tanh(Cₜ)

The architecture provides explicit mechanisms for retaining, updating, and exposing information over time. :chatgpt-content-reference{index="7"}
`
};

export default lesson;