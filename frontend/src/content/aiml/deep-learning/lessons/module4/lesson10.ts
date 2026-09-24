const lesson = {
  id: "module4-lesson10",
  moduleId: "module4",
  lessonNumber: 10,
  title: "Bidirectional Recurrent Neural Networks",
  subtitle:
    "Using both past and future context for sequence understanding",
  duration: "100–120 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand why bidirectional RNNs are needed.",
    "Understand forward and backward recurrent processing.",
    "Understand how bidirectional hidden states are combined.",
    "Understand when bidirectional models are appropriate.",
    "Implement a bidirectional RNN.",
    "Implement bidirectional GRU and LSTM models.",
    "Understand output and hidden-state dimensions.",
    "Distinguish bidirectional encoding from autoregressive generation."
  ],

  introduction: `
A standard RNN processes a sequence in one direction:

x₁ → x₂ → x₃ → ... → xₜ

At time t, the model has access to the left-side context.

But some tasks benefit from both sides.

For example, when classifying or labeling a word in a completed sentence, information appearing after the word may be useful.

A bidirectional RNN solves this by using:

• a forward RNN
• a backward RNN

The source describes exactly this architecture and combines the corresponding forward and backward outputs. :chatgpt-content-reference{index="15"}
`,

  sections: [
    {
      title: "1. Unidirectional RNN",
      content: `
A normal RNN processes:

x₁ → x₂ → x₃ → x₄

The hidden state at x₃ can depend on:

x₁, x₂, x₃

but not x₄.
`
    },

    {
      title: "2. Why Future Context Can Matter",
      content: `
Consider:

"I am ___ hungry."

The words after the blank provide useful information about what belongs in the blank.

For sequence labeling, the complete sequence is often available before the prediction is made.

Therefore both directions can provide useful context. :chatgpt-content-reference{index="16"}
`
    },

    {
      title: "3. Forward RNN",
      content: `
The forward RNN processes:

x₁ → x₂ → ... → xₜ

Its hidden state is:

→Hₜ
`
    },

    {
      title: "4. Backward RNN",
      content: `
The backward RNN processes:

xₜ ← xₜ₋₁ ← ... ← x₁

Its hidden state is:

←Hₜ
`
    },

    {
      title: "5. Combining Both Directions",
      content: `
At each time step:

Hₜ =
[→Hₜ ; ←Hₜ]

The two representations are concatenated.

Therefore, if each direction has hidden size h, the combined representation has size:

2h.
`
    },

    {
      title: "6. Architecture",
      content: `
                x₁ x₂ x₃ x₄
                 │  │  │  │
Forward RNN  → → → → → → →
Backward RNN ← ← ← ← ← ← ←
                 │
                 ↓
          concatenate
                 ↓
              output
`
    },

    {
      title: "7. Why Not Use Bidirectional RNN for Next-Token Generation?",
      content: `
For next-token generation, future tokens are not known.

A bidirectional model requires access to the sequence in both directions.

Therefore standard autoregressive language generation naturally uses a causal, forward-only structure.

Bidirectional RNNs are more suitable when the full sequence is available.
`
    },

    {
      title: "8. Applications",
      content: `
Bidirectional sequence models can be useful for:

• sequence labeling
• part-of-speech tagging
• named entity recognition
• token classification
• speech-related sequence processing
• text classification
• masked-token prediction
`
    },

    {
      title: "9. PyTorch Bidirectional RNN",
      code: `
rnn = nn.RNN(
    input_size=128,
    hidden_size=64,
    num_layers=1,
    bidirectional=True,
    batch_first=True
)

X = torch.randn(
    8,
    20,
    128
)

output, hidden = rnn(X)

print("Output:", output.shape)
print("Hidden:", hidden.shape)
`
    },

    {
      title: "10. Expected Shapes",
      code: `
Output:

[8, 20, 128]

because:

hidden_size × directions
=
64 × 2
=
128

Hidden:

[2, 8, 64]
`
    },

    {
      title: "11. Understanding the Direction Dimension",
      content: `
For:

bidirectional=True

PyTorch creates two directions.

Therefore the hidden-state first dimension becomes:

num_layers × 2

For:

3 layers

the first hidden dimension is:

6.
`
    },

    {
      title: "12. Bidirectional GRU",
      code: `
gru = nn.GRU(
    input_size=128,
    hidden_size=64,
    num_layers=2,
    bidirectional=True,
    batch_first=True
)
`
    },

    {
      title: "13. Bidirectional LSTM",
      code: `
lstm = nn.LSTM(
    input_size=128,
    hidden_size=64,
    num_layers=2,
    bidirectional=True,
    batch_first=True
)

output, (hidden, cell) = lstm(X)
`
    },

    {
      title: "14. Output Dimension",
      content: `
If:

hidden_size = 64

and:

bidirectional = true

then output feature size is:

64 × 2 = 128
`
    },

    {
      title: "15. Bidirectional Sequence Classifier",
      code: `
class BiLSTMClassifier(nn.Module):
    def __init__(
        self,
        input_size,
        hidden_size,
        num_classes
    ):
        super().__init__()

        self.lstm = nn.LSTM(
            input_size,
            hidden_size,
            bidirectional=True,
            batch_first=True
        )

        self.classifier = nn.Linear(
            hidden_size * 2,
            num_classes
        )

    def forward(self, X):
        output, (hidden, cell) = self.lstm(X)

        last_output = output[:, -1, :]

        return self.classifier(last_output)
`
    },

    {
      title: "16. Why Multiply by Two?",
      content: `
Each direction produces:

hidden_size

The final representation concatenates:

forward representation

+

backward representation

Therefore:

classifier input = 2 × hidden_size.
`
    },

    {
      title: "17. Bidirectional RNN From Scratch",
      code: `
class SimpleBiRNN(nn.Module):
    def __init__(
        self,
        input_size,
        hidden_size
    ):
        super().__init__()

        self.forward_rnn = nn.RNN(
            input_size,
            hidden_size,
            batch_first=True
        )

        self.backward_rnn = nn.RNN(
            input_size,
            hidden_size,
            batch_first=True
        )

    def forward(self, X):
        forward_output, _ = (
            self.forward_rnn(X)
        )

        reversed_X = torch.flip(
            X,
            dims=[1]
        )

        backward_output, _ = (
            self.backward_rnn(reversed_X)
        )

        backward_output = torch.flip(
            backward_output,
            dims=[1]
        )

        return torch.cat(
            [
                forward_output,
                backward_output
            ],
            dim=-1
        )
`
    },

    {
      title: "18. Important Detail: Reversing Back",
      content: `
The backward RNN processes the sequence in reverse.

After it finishes, its output sequence must be reversed back so that:

output[t]

corresponds to the same original time step as the forward output.
`
    },

    {
      title: "19. Bidirectional vs Deep",
      content: `
These concepts are different.

Deep:

multiple layers.

Bidirectional:

two temporal directions.

They can be combined.

For example:

2-layer bidirectional LSTM.
`
    },

    {
      title: "20. Bidirectional + Multiple Layers",
      code: `
model = nn.LSTM(
    input_size=128,
    hidden_size=64,
    num_layers=3,
    bidirectional=True,
    dropout=0.2,
    batch_first=True
)
`
    },

    {
      title: "21. Parameter and Computation Cost",
      content: `
A bidirectional recurrent layer contains two recurrent models.

Therefore, compared with a corresponding one-direction layer, it generally requires more parameters and computation.

The output representation also doubles in feature width.
`
    },

    {
      title: "22. When Bidirectionality Is Appropriate",
      content: `
Use bidirectional processing when:

• the complete sequence is available
• future context is useful
• the task is classification or labeling
• causality is not required
`
    },

    {
      title: "23. When It Is Not Appropriate",
      content: `
Avoid standard bidirectional processing when:

• generating future tokens
• forecasting future observations
• real-time causal prediction
• future information would constitute data leakage
`
    },

    {
      title: "24. Data Leakage Warning",
      content: `
Suppose you are predicting a patient's future measurement.

If the backward direction receives future observations that would not be available at prediction time, the evaluation becomes unrealistic.

The model has effectively seen information from the future.
`
    },

    {
      title: "25. Training",
      code: `
optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

for epoch in range(10):

    optimizer.zero_grad()

    logits = model(X)

    loss = criterion(
        logits,
        labels
    )

    loss.backward()

    torch.nn.utils.clip_grad_norm_(
        model.parameters(),
        1.0
    )

    optimizer.step()
`
    },

    {
      title: "26. Common Errors",
      content: `
1. Forgetting that output size doubles.

2. Forgetting that hidden-state direction count doubles.

3. Using bidirectional models for causal forecasting.

4. Mishandling reversed sequences in scratch implementations.

5. Using the wrong classifier input dimension.

6. Confusing bidirectionality with depth.
`
    },

    {
      title: "27. Interview Questions",
      content: `
1. What is a bidirectional RNN?

2. Why use future context?

3. How are forward and backward outputs combined?

4. Why does the output dimension double?

5. What is the hidden-state shape of a bidirectional RNN?

6. Why is bidirectional processing unsuitable for standard autoregressive generation?

7. Can GRUs and LSTMs be bidirectional?

8. Can bidirectional and multilayer architectures be combined?

9. What is data leakage in a bidirectional model?
`
    },

    {
      title: "28. Coding Challenge",
      content: `
Build a bidirectional LSTM classifier.

Requirements:

• embedding layer
• bidirectional LSTM
• two recurrent layers
• dropout
• classifier
• validation accuracy
• confusion matrix

Then compare it against a forward-only LSTM.
`
    }
  ],

  keyTakeaways: [
    "Bidirectional RNNs process sequences in both directions.",
    "The forward direction captures left context.",
    "The backward direction captures right context.",
    "The two representations are concatenated.",
    "Output feature size becomes twice the hidden size.",
    "Bidirectional models are useful when the complete sequence is available.",
    "They are generally inappropriate for causal future prediction.",
    "Bidirectional processing can be combined with multiple recurrent layers."
  ],

  summary: `
A bidirectional RNN consists of two recurrent chains:

forward:

x₁ → x₂ → ... → xₜ

backward:

xₜ → xₜ₋₁ → ... → x₁

Their corresponding hidden representations are combined:

Hₜ = [→Hₜ ; ←Hₜ]

If each direction uses h hidden units, the combined representation contains 2h features.

This makes bidirectional RNNs particularly useful for sequence understanding tasks where both past and future context are available. :chatgpt-content-reference{index="17"}
`
};

export default lesson;