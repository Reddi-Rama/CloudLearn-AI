const lesson = {
  id: "module4-lesson2",
  moduleId: "module4",
  lessonNumber: 2,
  title: "Recurrent Neural Networks",
  subtitle:
    "Understanding hidden states, recurrent computation, parameter sharing, and sequence processing",
  duration: "95–115 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand the architecture of a recurrent neural network.",
    "Understand the purpose of a hidden state.",
    "Derive the basic RNN equations.",
    "Understand input, hidden, and output dimensions.",
    "Understand recurrent parameter sharing.",
    "Understand how an RNN is unrolled through time.",
    "Implement a basic recurrent computation in PyTorch.",
    "Understand sequence outputs and final-state outputs.",
    "Understand the relationship between RNNs and ordinary neural networks."
  ],

  introduction: `
A recurrent neural network is a neural network designed to process sequential information.

Unlike an ordinary feed-forward network, an RNN does not process every time step independently.

Instead, information from the previous time step is carried forward through a hidden state.

At each time step, the model receives:

• the current input
• the previous hidden state

and produces:

• a new hidden state
• an output

This creates a recurrent computational process:

Inputₜ + Hiddenₜ₋₁
        ↓
      RNN
        ↓
Hiddenₜ
        ↓
Outputₜ

The uploaded source introduces exactly this hidden-state formulation and explains that the hidden state captures sequence history as the recurrence proceeds. 
`,

  sections: [
    {
      title: "1. RNN Core Idea",
      content: `
The central equation is:

Hₜ = φ(XₜWₓₕ + Hₜ₋₁Wₕₕ + bₕ)

where:

Xₜ = current input

Hₜ₋₁ = previous hidden state

Wₓₕ = input-to-hidden weights

Wₕₕ = hidden-to-hidden weights

bₕ = hidden bias

φ = activation function

Hₜ = current hidden state

The previous hidden state is what makes the network recurrent.
`
    },

    {
      title: "2. Hidden State",
      content: `
The hidden state acts as a learned representation of information accumulated from earlier time steps.

At time t:

Hₜ depends on Xₜ and Hₜ₋₁.

Because Hₜ₋₁ already contains information influenced by earlier inputs, Hₜ can indirectly depend on the entire preceding sequence.

Conceptually:

X₁ → H₁

X₂ + H₁ → H₂

X₃ + H₂ → H₃

X₄ + H₃ → H₄
`
    },

    {
      title: "3. Why It Is Called Recurrent",
      content: `
The computation repeats the same transformation at every time step.

For example:

H₁ = f(X₁, H₀)

H₂ = f(X₂, H₁)

H₃ = f(X₃, H₂)

H₄ = f(X₄, H₃)

The output from one step becomes part of the input to the next step.

That repeated dependency is recurrence.
`
    },

    {
      title: "4. Initial Hidden State",
      content: `
Before processing the first input, the network needs an initial hidden state.

A common choice is:

H₀ = 0

This means the model starts without sequence-specific historical information.

The network then gradually constructs its hidden representation:

H₀ → H₁ → H₂ → H₃ → ...
`
    },

    {
      title: "5. Output Layer",
      content: `
The hidden state can be transformed into an output.

The source gives the output computation as:

Oₜ = HₜWₕq + bq

where:

Wₕq = hidden-to-output weights

bq = output bias

Oₜ = output at time t.

The output layer can then be followed by an activation appropriate to the task, such as softmax for classification.
`
    },

    {
      title: "6. Complete RNN Computation",
      content: `
At every time step:

Step 1:
Receive Xₜ.

Step 2:
Retrieve Hₜ₋₁.

Step 3:
Combine current input and previous hidden state.

Step 4:
Apply the recurrent transformation.

Step 5:
Produce Hₜ.

Step 6:
Use Hₜ to produce Oₜ.

Step 7:
Pass Hₜ to the next time step.
`
    },

    {
      title: "7. Matrix Dimensions",
      content: `
Suppose:

Xₜ ∈ Rⁿˣᵈ

Hₜ ∈ Rⁿˣʰ

where:

n = batch size

d = input feature dimension

h = number of hidden units

Then:

Wₓₕ ∈ Rᵈˣʰ

Wₕₕ ∈ Rʰˣʰ

bₕ ∈ R¹ˣʰ

Therefore:

XₜWₓₕ

has shape:

(n, h)

and:

Hₜ₋₁Wₕₕ

also has shape:

(n, h)

so the terms can be added.
`
    },

    {
      title: "8. Output Dimensions",
      content: `
If the output dimension is q:

Wₕq ∈ Rʰˣq

Therefore:

HₜWₕq

has shape:

(n, q)

This produces q outputs for every example in the minibatch.
`
    },

    {
      title: "9. Parameter Sharing",
      content: `
One of the most important RNN properties is parameter sharing.

The same:

Wₓₕ

Wₕₕ

bₕ

Wₕq

bq

are used at different time steps.

Therefore, increasing sequence length does not require creating a new copy of the model parameters for every time step.

This is a major difference from simply assigning separate parameters to every position.
`
    },

    {
      title: "10. Unrolling the RNN",
      content: `
An RNN can be represented as a compact recurrent loop:

        ┌─────────────┐
Xₜ ───→ │     RNN     │ ───→ Oₜ
        └──────┬──────┘
               ↓
              Hₜ
               ↓
            next step

For analysis and training, we can conceptually "unroll" the loop:

X₁ → H₁ → O₁
       ↓
X₂ → H₂ → O₂
       ↓
X₃ → H₃ → O₃
       ↓
X₄ → H₄ → O₄

The parameters are shared across all these steps.
`
    },

    {
      title: "11. RNN as a Deep Computational Graph",
      content: `
Although the RNN contains only one recurrent layer in its basic form, unrolling it over time creates a deep computational chain.

For a sequence of length T, information can pass through many recurrent transformations.

This explains both the power and difficulty of RNNs.

Power:

They can model temporal dependencies.

Difficulty:

Gradients must propagate through many recurrent steps.
`
    },

    {
      title: "12. Sequence-to-Sequence Outputs",
      content: `
An RNN can generate an output at every time step.

Example:

X₁ → H₁ → O₁

X₂ → H₂ → O₂

X₃ → H₃ → O₃

This is useful when every sequence position requires a prediction.

Examples include:

• token labeling
• speech processing
• temporal classification
• sequence forecasting
`
    },

    {
      title: "13. Final Hidden State",
      content: `
Another strategy is to use the final hidden state as a summary of the sequence.

For:

X₁, X₂, X₃, X₄

the model computes:

H₁
H₂
H₃
H₄

and then uses:

H₄

for a final prediction.

This is useful for sequence classification.
`
    },

    {
      title: "14. RNN and Language Modeling",
      content: `
For language modeling, the model can predict the next token.

For example:

Input:
"The student is"

Output:
likely next token distribution

The output layer can produce a score for every token in the vocabulary.

Softmax converts these scores into a probability distribution.
`
    },

    {
      title: "15. Why Hidden State Is Not Simple Memory",
      content: `
It is tempting to think of the hidden state as a complete copy of the previous sequence.

That is incorrect.

The hidden state is a learned vector representation.

It attempts to preserve information useful for future predictions.

Information can be compressed, transformed, or lost.

This limitation becomes important when dealing with very long dependencies.
`
    },

    {
      title: "16. RNN Activation",
      content: `
The hidden-state equation normally contains a nonlinear activation:

Hₜ = φ(...)

A common conceptual choice is tanh.

The nonlinearity prevents the entire recurrent system from becoming merely a sequence of linear transformations.

The activation also influences gradient behavior during training.
`
    },

    {
      title: "17. Basic PyTorch RNN",
      code: `
import torch
from torch import nn

batch_size = 4
time_steps = 6
input_size = 3
hidden_size = 8

X = torch.randn(batch_size, time_steps, input_size)

rnn = nn.RNN(
    input_size=input_size,
    hidden_size=hidden_size,
    batch_first=True
)

output, hidden = rnn(X)

print("Input:", X.shape)
print("Output:", output.shape)
print("Hidden:", hidden.shape)
`
    },

    {
      title: "18. Expected Shapes",
      code: `
Input:
torch.Size([4, 6, 3])

Output:
torch.Size([4, 6, 8])

Hidden:
torch.Size([1, 4, 8])
`
    },

    {
      title: "19. Understanding the Shapes",
      content: `
Output:

(batch_size, sequence_length, hidden_size)

means:

4 examples
6 time steps
8 hidden features

Hidden:

(number_of_layers, batch_size, hidden_size)

means:

1 RNN layer
4 examples
8 hidden features

Always verify these dimensions when debugging sequence models.
`
    },

    {
      title: "20. Multiple RNN Layers",
      content: `
RNNs can be stacked.

For example:

Input
 ↓
RNN Layer 1
 ↓
RNN Layer 2
 ↓
RNN Layer 3
 ↓
Output

The first recurrent layer learns one representation.

The next layer processes the sequence of representations produced by the previous layer.

This creates a deep recurrent architecture.
`
    },

    {
      title: "21. Dropout in RNNs",
      content: `
Stacked recurrent networks can use dropout to reduce overfitting.

In PyTorch:

rnn = nn.RNN(
    input_size=32,
    hidden_size=64,
    num_layers=3,
    dropout=0.2,
    batch_first=True
)

Dropout behavior depends on training versus evaluation mode.
`
    },

    {
      title: "22. Training Mode vs Evaluation Mode",
      code: `
model.train()

# training

model.eval()

# evaluation
`
    },

    {
      title: "23. RNN Computational Flow",
      content: `
The complete conceptual flow is:

Xₜ
 ↓
Input transformation
 ↓
Combine with Hₜ₋₁
 ↓
Nonlinear transformation
 ↓
Hₜ
 ↓
Output transformation
 ↓
Oₜ

Then:

Hₜ → next time step
`
    },

    {
      title: "24. Gradient Flow Through Time",
      content: `
During training, the loss is differentiated with respect to the recurrent parameters.

Because the same parameters are used repeatedly, the gradient accumulates contributions from multiple time steps.

For long sequences, repeated multiplication of derivatives can cause:

very small gradients

or

very large gradients.

This produces vanishing and exploding gradient problems.
`
    },

    {
      title: "25. Parameter Count Insight",
      content: `
A useful property of an RNN is that the number of recurrent parameters does not increase merely because the sequence becomes longer.

The same recurrent weights are reused.

For example, if the sequence has:

10 time steps

or:

1,000 time steps

the model does not create 10 or 1,000 independent sets of recurrent weights.
`
    },

    {
      title: "26. Manual RNN Implementation",
      code: `
import torch

X = torch.randn(4, 3)
H = torch.zeros(4, 5)

W_xh = torch.randn(3, 5)
W_hh = torch.randn(5, 5)
b_h = torch.zeros(5)

H_new = torch.tanh(
    X @ W_xh +
    H @ W_hh +
    b_h
)

print(H_new.shape)
`
    },

    {
      title: "27. What the Manual Implementation Demonstrates",
      content: `
The code directly implements:

Hₜ = tanh(
    XₜWₓₕ +
    Hₜ₋₁Wₕₕ +
    bₕ
)

The important point is that the previous hidden state participates directly in calculating the new hidden state.

This is the core recurrent operation.
`
    },

    {
      title: "28. Mini RNN Loop",
      code: `
import torch

batch_size = 2
time_steps = 5
input_size = 3
hidden_size = 4

X = torch.randn(batch_size, time_steps, input_size)

W_xh = torch.randn(input_size, hidden_size)
W_hh = torch.randn(hidden_size, hidden_size)
b_h = torch.zeros(hidden_size)

H = torch.zeros(batch_size, hidden_size)

for t in range(time_steps):
    X_t = X[:, t, :]
    H = torch.tanh(X_t @ W_xh + H @ W_hh + b_h)

print("Final hidden state:")
print(H)
print("Shape:", H.shape)
`
    },

    {
      title: "29. Important Difference: Time vs Layer",
      content: `
Do not confuse:

time steps

with:

RNN layers.

Example:

sequence length = 20

num_layers = 3

means:

20 recurrent positions

and

3 stacked RNN layers.

They represent different dimensions of the architecture.
`
    },

    {
      title: "30. Common Implementation Errors",
      content: `
Error 1:
Wrong input_size.

input_size must match the number of features per time step.

Error 2:
Wrong tensor ordering.

Always verify batch_first configuration.

Error 3:
Incorrect hidden-state dimensions.

Error 4:
Forgetting model.train() and model.eval().

Error 5:
Mixing sequence length with feature size.

Error 6:
Assuming output and hidden have identical shapes.

They generally do not.
`
    },

    {
      title: "31. Interview Questions",
      content: `
1. What is an RNN?

2. What is a hidden state?

3. Why is an RNN called recurrent?

4. What is parameter sharing in an RNN?

5. What is the purpose of Wₕₕ?

6. Why does an RNN need an initial hidden state?

7. What does unrolling an RNN mean?

8. Why can RNNs suffer from vanishing gradients?

9. Why can RNNs suffer from exploding gradients?

10. What is the difference between sequence output and final hidden state output?

11. What does batch_first=True do in PyTorch?

12. What is the difference between sequence length and number of RNN layers?
`
    },

    {
      title: "32. Coding Challenge",
      content: `
Build an RNN that receives:

batch = 8
sequence length = 12
features = 6

Use:

hidden size = 16

Print:

• input shape
• output shape
• hidden-state shape

Then explain what each dimension represents.
`
    },

    {
      title: "33. Debugging Challenge",
      content: `
You create:

rnn = nn.RNN(
    input_size=10,
    hidden_size=32,
    batch_first=True
)

but your input has shape:

[16, 20, 8]

The program fails.

Identify the problem.

Hint:

The final dimension must match input_size.
`
    }
  ],

  keyTakeaways: [
    "RNNs process sequential data through recurrent computation.",
    "The hidden state carries learned information between time steps.",
    "The current hidden state depends on the current input and previous hidden state.",
    "The same parameters are reused across time steps.",
    "RNNs can produce outputs at every time step or use a final hidden representation.",
    "Unrolling reveals the deep computational structure through time.",
    "Long sequences can create difficult gradient-flow problems.",
    "Tensor shapes are critical when implementing RNNs."
  ],

  summary: `
A recurrent neural network introduces a hidden state that connects consecutive time steps.

The core computation is:

Hₜ = φ(XₜWₓₕ + Hₜ₋₁Wₕₕ + bₕ)

and the output can be computed as:

Oₜ = HₜWₕq + bq

The same parameters are reused at every time step.

This gives RNNs the ability to process sequences of different lengths while maintaining a learned representation of historical information.

However, the repeated computation through time creates gradient-flow challenges, which motivates the next lessons on RNN training and modern recurrent architectures.
`
};

export default lesson;