const lesson = {
  id: "module4-lesson7",
  moduleId: "module4",
  lessonNumber: 7,
  title: "Gated Recurrent Units (GRU)",
  subtitle:
    "Using learned gates to control short-term and long-term information flow",
  duration: "110–130 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand why gated recurrent units were introduced.",
    "Understand the reset gate.",
    "Understand the update gate.",
    "Derive the GRU equations.",
    "Understand the candidate hidden state.",
    "Understand the final hidden-state update.",
    "Implement a GRU from scratch.",
    "Implement a GRU using PyTorch.",
    "Understand how GRUs address limitations of vanilla RNNs.",
    "Compare vanilla RNNs and GRUs."
  ],

  introduction: `
Vanilla RNNs maintain a hidden state, but controlling that state can be difficult.

The model does not explicitly decide:

• which information should be forgotten
• which information should be retained
• how strongly the new input should modify the existing state

Gated recurrent units introduce learned gates that control information flow.

The source describes GRU as a streamlined gated architecture with two gates:

1. reset gate
2. update gate

The reset gate helps control the influence of the previous state when constructing a candidate state.

The update gate controls how much of the old state versus the new candidate state is retained. 
`,

  sections: [
    {
      title: "1. Why Gated RNNs?",
      content: `
A vanilla RNN repeatedly performs:

Hₜ = φ(XₜWₓₕ + Hₜ₋₁Wₕₕ + b)

Every new state is strongly connected to the previous state.

This can make it difficult to control information persistence.

A gated model introduces learned values that determine how information should flow.
`
    },

    {
      title: "2. GRU Overview",
      content: `
A GRU contains:

• reset gate
• update gate
• candidate hidden state
• final hidden state

The gates use sigmoid activation, so their values lie between 0 and 1.
`
    },

    {
      title: "3. Reset Gate",
      content: `
The reset gate determines how much of the previous hidden state should influence the candidate state.

It is computed as:

Rₜ =
σ(
XₜWₓᵣ +
Hₜ₋₁Wₕᵣ +
bᵣ
)

The result lies in:

(0, 1)

for each hidden dimension. :chatgpt-content-reference{index="12"}
`
    },

    {
      title: "4. Reset Gate Intuition",
      content: `
If a reset-gate value is close to:

1

the previous hidden state strongly influences the candidate.

If it is close to:

0

the corresponding previous-state contribution is largely suppressed.

This provides a learned mechanism for resetting parts of the recurrent state.
`
    },

    {
      title: "5. Update Gate",
      content: `
The update gate is:

Zₜ =
σ(
XₜWₓ𝓏 +
Hₜ₋₁Wₕ𝓏 +
b𝓏
)

It determines how much of the previous state should be retained versus how much should be replaced by the new candidate state. :chatgpt-content-reference{index="13"}
`
    },

    {
      title: "6. Update Gate Intuition",
      content: `
If:

Zₜ ≈ 1

the model retains much of:

Hₜ₋₁

If:

Zₜ ≈ 0

the model moves toward the candidate hidden state.

Therefore, the update gate provides a mechanism for preserving information across time.
`
    },

    {
      title: "7. Candidate Hidden State",
      content: `
The candidate hidden state is:

H̃ₜ =
tanh(
XₜWₓₕ +
(Rₜ ⊙ Hₜ₋₁)Wₕₕ +
bₕ
)

where:

⊙

represents elementwise multiplication.

The reset gate controls the amount of previous-state information entering this computation. :chatgpt-content-reference{index="14"}
`
    },

    {
      title: "8. Final Hidden State",
      content: `
The final GRU state is:

Hₜ =
Zₜ ⊙ Hₜ₋₁
+
(1 − Zₜ) ⊙ H̃ₜ

This is an elementwise combination of:

old hidden state

and

candidate hidden state. :chatgpt-content-reference{index="15"}
`
    },

    {
      title: "9. Gate Interpretation",
      content: `
The two gates provide different controls.

Reset gate:

"How much of the previous state should influence the candidate?"

Update gate:

"How much of the old state should remain?"
`
    },

    {
      title: "10. GRU Computational Flow",
      content: `
                 Xₜ
                /  \
               ↓    ↓
        Reset Gate  Update Gate
             ↓        ↓
       Candidate     Zₜ
             ↓        ↓
             └──→ combine ← Hₜ₋₁
                    ↓
                   Hₜ
`
    },

    {
      title: "11. Parameter Dimensions",
      content: `
For input dimension d and hidden dimension h:

Wₓᵣ ∈ Rᵈˣʰ

Wₕᵣ ∈ Rʰˣʰ

Wₓ𝓏 ∈ Rᵈˣʰ

Wₕ𝓏 ∈ Rʰˣʰ

Wₓₕ ∈ Rᵈˣʰ

Wₕₕ ∈ Rʰˣʰ

There are corresponding bias vectors.
`
    },

    {
      title: "12. Implementing the Gates",
      code: `
def sigmoid(x):
    return torch.sigmoid(x)

R = sigmoid(
    X_t @ W_xr +
    H @ W_hr +
    b_r
)

Z = sigmoid(
    X_t @ W_xz +
    H @ W_hz +
    b_z
)
`
    },

    {
      title: "13. Candidate State",
      code: `
H_tilde = torch.tanh(
    X_t @ W_xh +
    (R * H) @ W_hh +
    b_h
)
`
    },

    {
      title: "14. Final State",
      code: `
H = (
    Z * H
    +
    (1 - Z) * H_tilde
)
`
    },

    {
      title: "15. Complete GRU Step",
      code: `
R = torch.sigmoid(
    X_t @ W_xr +
    H @ W_hr +
    b_r
)

Z = torch.sigmoid(
    X_t @ W_xz +
    H @ W_hz +
    b_z
)

H_tilde = torch.tanh(
    X_t @ W_xh +
    (R * H) @ W_hh +
    b_h
)

H = (
    Z * H +
    (1 - Z) * H_tilde
)
`
    },

    {
      title: "16. Scratch GRU Class",
      code: `
import torch
from torch import nn

class ScratchGRU(nn.Module):
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

        self.W_xr = weight(
            input_size,
            hidden_size
        )
        self.W_hr = weight(
            hidden_size,
            hidden_size
        )
        self.b_r = nn.Parameter(
            torch.zeros(hidden_size)
        )

        self.W_xz = weight(
            input_size,
            hidden_size
        )
        self.W_hz = weight(
            hidden_size,
            hidden_size
        )
        self.b_z = nn.Parameter(
            torch.zeros(hidden_size)
        )

        self.W_xh = weight(
            input_size,
            hidden_size
        )
        self.W_hh = weight(
            hidden_size,
            hidden_size
        )
        self.b_h = nn.Parameter(
            torch.zeros(hidden_size)
        )

    def forward(self, X):
        batch_size = X.shape[0]

        H = torch.zeros(
            batch_size,
            self.hidden_size,
            device=X.device
        )

        outputs = []

        for t in range(X.shape[1]):
            X_t = X[:, t, :]

            R = torch.sigmoid(
                X_t @ self.W_xr +
                H @ self.W_hr +
                self.b_r
            )

            Z = torch.sigmoid(
                X_t @ self.W_xz +
                H @ self.W_hz +
                self.b_z
            )

            H_tilde = torch.tanh(
                X_t @ self.W_xh +
                (R * H) @ self.W_hh +
                self.b_h
            )

            H = (
                Z * H +
                (1 - Z) * H_tilde
            )

            outputs.append(H)

        return torch.stack(
            outputs,
            dim=1
        )
`
    },

    {
      title: "17. Test the Scratch GRU",
      code: `
model = ScratchGRU(
    input_size=8,
    hidden_size=16
)

X = torch.randn(
    4,
    12,
    8
)

Y = model(X)

print(Y.shape)
`
    },

    {
      title: "18. Expected Output",
      code: `
torch.Size([4, 12, 16])
`
    },

    {
      title: "19. PyTorch GRU",
      code: `
gru = nn.GRU(
    input_size=8,
    hidden_size=16,
    batch_first=True
)

X = torch.randn(
    4,
    12,
    8
)

output, hidden = gru(X)

print(output.shape)
print(hidden.shape)
`
    },

    {
      title: "20. Expected Shapes",
      code: `
torch.Size([4, 12, 16])
torch.Size([1, 4, 16])
`
    },

    {
      title: "21. Stacked GRU",
      code: `
gru = nn.GRU(
    input_size=128,
    hidden_size=256,
    num_layers=3,
    dropout=0.2,
    batch_first=True
)
`
    },

    {
      title: "22. GRU Language Model",
      code: `
class GRULanguageModel(nn.Module):
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

        self.gru = nn.GRU(
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

        H, hidden = self.gru(X)

        logits = self.output(H)

        return logits, hidden
`
    },

    {
      title: "23. Why GRU Can Help Long-Term Dependencies",
      content: `
The update gate can allow information to persist across time steps.

If the gate strongly favors the old state, the recurrent representation can remain relatively stable.

This provides a more controlled path for information than a basic RNN.
`
    },

    {
      title: "24. Resetting Information",
      content: `
The reset gate can suppress previous-state information when constructing a candidate state.

This is useful when older context becomes less relevant to the current pattern.
`
    },

    {
      title: "25. GRU vs Vanilla RNN",
      content: `
Vanilla RNN:

• one recurrent transformation
• simpler
• fewer mechanisms for information control

GRU:

• reset gate
• update gate
• candidate state
• explicit information-control mechanism
• more parameters and computation than a basic RNN
`
    },

    {
      title: "26. GRU vs LSTM",
      content: `
The source describes GRU as a streamlined alternative to LSTM.

LSTM:

• input gate
• forget gate
• output gate
• separate memory-cell state
• hidden state

GRU:

• reset gate
• update gate
• one hidden-state representation

The architectures share the central idea of learned gating but organize state differently. 
`
    },

    {
      title: "27. Gate Visualization",
      code: `
print("Reset gate range:",
      R.min().item(),
      R.max().item())

print("Update gate range:",
      Z.min().item(),
      Z.max().item())
`
    },

    {
      title: "28. What Gate Values Mean",
      content: `
A sigmoid gate produces values between 0 and 1.

Values near 0:

strong suppression

Values near 1:

strong retention/passage

The exact interpretation depends on which gate is being examined.
`
    },

    {
      title: "29. Common Errors",
      content: `
Error 1:
Confusing reset gate with update gate.

Error 2:
Forgetting elementwise multiplication.

Error 3:
Using matrix multiplication instead of Hadamard multiplication for R * H.

Error 4:
Using the wrong hidden-state shape.

Error 5:
Forgetting that sigmoid gates produce values between 0 and 1.

Error 6:
Mixing batch-first and sequence-first formats.
`
    },

    {
      title: "30. Interview Questions",
      content: `
1. Why were GRUs introduced?

2. What is a reset gate?

3. What is an update gate?

4. Why is sigmoid used for gates?

5. What is the candidate hidden state?

6. What happens when the reset gate is close to zero?

7. What happens when the update gate is close to one?

8. How does a GRU differ from a vanilla RNN?

9. How does a GRU differ from an LSTM?

10. Why can GRUs help with long-term dependencies?
`
    },

    {
      title: "31. Coding Challenge",
      content: `
Implement a GRU language model using:

vocabulary = 5,000

embedding size = 128

hidden size = 256

layers = 2

Train it on a tokenized sequence dataset.

Track:

• training loss
• validation loss
• gradient norm
• perplexity

Then compare it with your vanilla RNN model.
`
    }
  ],

  keyTakeaways: [
    "GRUs introduce learned gates to control recurrent information flow.",
    "The reset gate controls the influence of the previous state when creating the candidate.",
    "The update gate controls the balance between the old state and candidate state.",
    "The candidate state uses a tanh transformation.",
    "The final hidden state is an elementwise combination of old and candidate states.",
    "GRUs provide a simpler gated alternative to LSTMs.",
    "PyTorch provides nn.GRU for practical implementations.",
    "Understanding the gates mathematically is essential before treating GRU as a black-box layer."
  ],

  summary: `
A GRU improves upon the basic recurrent architecture by introducing learned gates.

The main equations are:

Rₜ = σ(XₜWₓᵣ + Hₜ₋₁Wₕᵣ + bᵣ)

Zₜ = σ(XₜWₓ𝓏 + Hₜ₋₁Wₕ𝓏 + b𝓏)

H̃ₜ =
tanh(
XₜWₓₕ +
(Rₜ ⊙ Hₜ₋₁)Wₕₕ +
bₕ
)

Hₜ =
Zₜ ⊙ Hₜ₋₁ +
(1 − Zₜ) ⊙ H̃ₜ

These gates allow the model to learn when to reset information and when to preserve it.

The next lesson moves to LSTM, which uses a separate memory-cell state and three gates for more explicit information control.
`
};

export default lesson;