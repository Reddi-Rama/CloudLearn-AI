const lesson = {
  id: "module4-lesson3",
  moduleId: "module4",
  lessonNumber: 3,
  title: "RNNs from Scratch",
  subtitle:
    "Implementing recurrent computation manually to understand every operation",
  duration: "100–120 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand every operation inside a basic RNN.",
    "Implement recurrent computation without nn.RNN.",
    "Understand parameter shapes.",
    "Understand hidden-state initialization.",
    "Implement an RNN across multiple time steps.",
    "Understand one-hot sequence representations.",
    "Understand output projection and vocabulary prediction.",
    "Understand why parameter sharing works.",
    "Prepare for implementing language models from scratch."
  ],

  introduction: `
Using a framework such as PyTorch's nn.RNN is convenient, but it can hide important details.

To truly understand recurrent neural networks, we should first construct the core computation ourselves.

A basic RNN requires only a few ingredients:

• input-to-hidden weights
• hidden-to-hidden weights
• hidden bias
• hidden-state initialization
• activation function
• hidden-to-output weights
• output bias

The recurrent operation is:

Hₜ = φ(XₜWₓₕ + Hₜ₋₁Wₕₕ + bₕ)

The purpose of this lesson is not to replace framework implementations in production.

The purpose is to understand what those implementations are doing internally.
`,

  sections: [
    {
      title: "1. Components of a Scratch RNN",
      content: `
A minimal RNN needs:

1. Input dimension
2. Hidden dimension
3. Output dimension
4. Input-to-hidden parameters
5. Hidden-to-hidden parameters
6. Hidden bias
7. Hidden-state initialization
8. Hidden activation
9. Output projection
10. Output bias
`
    },

    {
      title: "2. Choose Dimensions",
      content: `
Suppose:

input_size = 3

hidden_size = 5

output_size = 4

Then:

Xₜ shape = (batch, 3)

Hₜ shape = (batch, 5)

Oₜ shape = (batch, 4)
`
    },

    {
      title: "3. Weight Dimensions",
      content: `
The input-to-hidden matrix is:

Wₓₕ ∈ R³ˣ⁵

The hidden-to-hidden matrix is:

Wₕₕ ∈ R⁵ˣ⁵

The hidden-to-output matrix is:

Wₕq ∈ R⁵ˣ⁴

Bias vectors:

bₕ ∈ R⁵

bq ∈ R⁴
`
    },

    {
      title: "4. Create Parameters",
      code: `
import torch

input_size = 3
hidden_size = 5
output_size = 4

W_xh = torch.randn(input_size, hidden_size)
W_hh = torch.randn(hidden_size, hidden_size)
b_h = torch.zeros(hidden_size)

W_hq = torch.randn(hidden_size, output_size)
b_q = torch.zeros(output_size)

print(W_xh.shape)
print(W_hh.shape)
print(W_hq.shape)
`
    },

    {
      title: "5. Parameter Shapes",
      code: `
torch.Size([3, 5])
torch.Size([5, 5])
torch.Size([5, 4])
`
    },

    {
      title: "6. Initialize the Hidden State",
      content: `
For a batch of examples:

H₀ = 0

If:

batch_size = 4

hidden_size = 5

then:

H₀ shape = (4, 5)
`
    },

    {
      title: "7. Hidden-State Initialization",
      code: `
batch_size = 4

H = torch.zeros(
    batch_size,
    hidden_size
)

print(H.shape)
`
    },

    {
      title: "8. One Recurrent Step",
      content: `
For one time step:

Hₜ = tanh(
    XₜWₓₕ +
    Hₜ₋₁Wₕₕ +
    bₕ
)

The three major components are:

current input contribution

+

historical-state contribution

+

bias

Then tanh introduces nonlinearity.
`
    },

    {
      title: "9. Implement One Step",
      code: `
X_t = torch.randn(batch_size, input_size)

H_new = torch.tanh(
    X_t @ W_xh +
    H @ W_hh +
    b_h
)

print(H_new.shape)
`
    },

    {
      title: "10. Output Computation",
      content: `
Once the hidden state is available:

Oₜ = HₜWₕq + bq

This maps the hidden representation into the output space.

For classification:

Oₜ can be interpreted as logits.

Softmax can then transform logits into probabilities.
`
    },

    {
      title: "11. Output Projection",
      code: `
O_t = H_new @ W_hq + b_q

print("Logits:", O_t.shape)

probabilities = torch.softmax(
    O_t,
    dim=-1
)

print("Probabilities:", probabilities.shape)
`
    },

    {
      title: "12. Why Logits Come Before Softmax",
      content: `
The output layer normally produces raw scores called logits.

For a vocabulary of size V:

Oₜ ∈ Rᴠ

Softmax converts them into a probability distribution:

P(y=i) = exp(Oᵢ) / Σⱼ exp(Oⱼ)

The probabilities sum to approximately 1.
`
    },

    {
      title: "13. Process a Sequence",
      content: `
Now suppose:

X has shape:

(batch, time_steps, input_size)

We process one time step at a time.

For:

t = 0

take X[:, 0, :]

For:

t = 1

take X[:, 1, :]

and continue.

The hidden state is carried from one iteration to the next.
`
    },

    {
      title: "14. Scratch RNN Loop",
      code: `
batch_size = 4
time_steps = 6

X = torch.randn(
    batch_size,
    time_steps,
    input_size
)

H = torch.zeros(
    batch_size,
    hidden_size
)

outputs = []

for t in range(time_steps):
    X_t = X[:, t, :]

    H = torch.tanh(
        X_t @ W_xh +
        H @ W_hh +
        b_h
    )

    O = H @ W_hq + b_q

    outputs.append(O)

outputs = torch.stack(outputs, dim=1)

print("Outputs:", outputs.shape)
`
    },

    {
      title: "15. Expected Output",
      code: `
Outputs: torch.Size([4, 6, 4])
`
    },

    {
      title: "16. Understanding the Output",
      content: `
The output shape:

(4, 6, 4)

means:

4 examples

6 time steps

4 output values per time step

The model therefore produces one output vector for every time step.
`
    },

    {
      title: "17. Concatenation View",
      content: `
The source also explains that:

XₜWₓₕ + Hₜ₋₁Wₕₕ

can be viewed through concatenation.

We can conceptually concatenate:

[Xₜ, Hₜ₋₁]

and concatenate the corresponding weight matrices.

This demonstrates that the two contributions can be represented as one larger matrix multiplication.
`
    },

    {
      title: "18. Demonstrating Concatenation",
      code: `
X_t = torch.randn(3, 1)
H_prev = torch.randn(3, 4)

W_xh_small = torch.randn(1, 4)
W_hh_small = torch.randn(4, 4)

separate = (
    X_t @ W_xh_small +
    H_prev @ W_hh_small
)

X_concat = torch.cat(
    (X_t, H_prev),
    dim=1
)

W_concat = torch.cat(
    (W_xh_small, W_hh_small),
    dim=0
)

combined = X_concat @ W_concat

print(torch.allclose(separate, combined))
`
    },

    {
      title: "19. Expected Result",
      code: `
True
`
    },

    {
      title: "20. Why This Matters",
      content: `
The equivalence demonstrates that the recurrent transformation can be implemented efficiently.

Mathematically:

XWₓₕ + HWₕₕ

is equivalent to:

[X H] [Wₓₕ
      Wₕₕ]

This perspective is useful for understanding optimized implementations.
`
    },

    {
      title: "21. Sequence Representation",
      content: `
For language modeling, inputs are commonly represented as token IDs.

For example:

"hello world"

could become:

[15, 42]

A one-hot representation converts each token into a vector where one position is 1 and the others are 0.
`
    },

    {
      title: "22. One-Hot Encoding",
      code: `
import torch

token_ids = torch.tensor([1, 3, 0])

vocab_size = 5

one_hot = torch.nn.functional.one_hot(
    token_ids,
    num_classes=vocab_size
)

print(one_hot)
`
    },

    {
      title: "23. One-Hot Tensor Shape",
      content: `
If there are:

T tokens

and vocabulary size V

then the one-hot representation has shape:

(T, V)

For batches, additional dimensions are required.

The main idea is that each token becomes a vector in vocabulary space.
`
    },

    {
      title: "24. Why One-Hot Encoding Can Be Expensive",
      content: `
If vocabulary size is large, one-hot vectors contain mostly zeros.

For example:

V = 100,000

Each token requires a vector with 100,000 positions.

This is inefficient.

Embedding layers provide a more compact learned representation.

Embeddings become especially important in modern sequence models.
`
    },

    {
      title: "25. Building a Scratch RNN Class",
      code: `
import torch
from torch import nn

class ScratchRNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super().__init__()

        self.hidden_size = hidden_size

        self.W_xh = nn.Parameter(
            torch.randn(input_size, hidden_size) * 0.01
        )

        self.W_hh = nn.Parameter(
            torch.randn(hidden_size, hidden_size) * 0.01
        )

        self.b_h = nn.Parameter(
            torch.zeros(hidden_size)
        )

        self.W_hq = nn.Parameter(
            torch.randn(hidden_size, output_size) * 0.01
        )

        self.b_q = nn.Parameter(
            torch.zeros(output_size)
        )

    def forward(self, X):
        batch_size = X.shape[0]
        time_steps = X.shape[1]

        H = torch.zeros(
            batch_size,
            self.hidden_size,
            device=X.device
        )

        outputs = []

        for t in range(time_steps):
            X_t = X[:, t, :]

            H = torch.tanh(
                X_t @ self.W_xh +
                H @ self.W_hh +
                self.b_h
            )

            O = H @ self.W_hq + self.b_q

            outputs.append(O)

        return torch.stack(outputs, dim=1)
`
    },

    {
      title: "26. Testing the Scratch RNN",
      code: `
model = ScratchRNN(
    input_size=3,
    hidden_size=8,
    output_size=5
)

X = torch.randn(4, 10, 3)

Y = model(X)

print(Y.shape)
`
    },

    {
      title: "27. Expected Output",
      code: `
torch.Size([4, 10, 5])
`
    },

    {
      title: "28. Why nn.Parameter Matters",
      content: `
Parameters that should be learned by gradient descent must be registered with the model.

Using:

nn.Parameter(...)

allows PyTorch to include those tensors in:

model.parameters()

and therefore in optimizer updates.

Without parameter registration, the optimizer may not update them.
`
    },

    {
      title: "29. Check Trainable Parameters",
      code: `
for name, parameter in model.named_parameters():
    print(name, parameter.shape)
`
    },

    {
      title: "30. Training the Scratch RNN",
      code: `
import torch

model = ScratchRNN(
    input_size=3,
    hidden_size=16,
    output_size=4
)

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

criterion = nn.CrossEntropyLoss()

X = torch.randn(32, 10, 3)
targets = torch.randint(
    0,
    4,
    (32, 10)
)

for epoch in range(5):
    optimizer.zero_grad()

    logits = model(X)

    loss = criterion(
        logits.reshape(-1, 4),
        targets.reshape(-1)
    )

    loss.backward()

    optimizer.step()

    print(
        f"Epoch {epoch + 1}: "
        f"loss={loss.item():.4f}"
    )
`
    },

    {
      title: "31. Why Reshape Is Needed",
      content: `
The model produces:

(batch, time, classes)

CrossEntropyLoss normally expects class scores with the class dimension in the appropriate position.

A common convenient approach is to flatten:

(batch, time, classes)

into:

(batch × time, classes)

and flatten targets:

(batch, time)

into:

(batch × time)

This treats every time step as a training prediction.
`
    },

    {
      title: "32. Backpropagation Through Time",
      content: `
The training process must propagate gradients through the sequence.

Conceptually:

Loss
 ↓
Oₜ
 ↓
Hₜ
 ↓
Hₜ₋₁
 ↓
Hₜ₋₂
 ↓
...
 ↓
H₁

This is called backpropagation through time.

It is one of the most important concepts for understanding RNN training.
`
    },

    {
      title: "33. Computational Cost",
      content: `
An RNN processes time steps sequentially.

This creates a dependency:

H₁ → H₂ → H₃ → H₄

The next hidden state depends on the previous one.

Therefore, unlike some highly parallel architectures, recurrent computation can limit parallelism across time steps.
`
    },

    {
      title: "34. Gradient Explosion",
      content: `
If repeated gradient multiplication produces very large values, gradients can explode.

Symptoms may include:

• extremely large loss
• NaN values
• unstable training
• parameters becoming enormous

Gradient clipping is one technique used to limit gradient magnitude.

This will be studied more directly in the next lessons.
`
    },

    {
      title: "35. Gradient Vanishing",
      content: `
If repeated multiplication produces very small gradients, earlier time steps may receive almost no useful learning signal.

Then the model struggles to learn long-range dependencies.

This is the vanishing-gradient problem.

It is one reason more advanced recurrent architectures were developed.
`
    },

    {
      title: "36. Scratch RNN vs Framework RNN",
      content: `
Scratch implementation:

Advantages:

• educational
• exposes mathematics
• makes tensor flow visible
• useful for debugging concepts

Framework implementation:

Advantages:

• optimized
• easier to maintain
• usually faster
• production-oriented
• integrates with hardware acceleration

You should understand both.
`
    },

    {
      title: "37. Debugging Checklist",
      content: `
When your scratch RNN fails, check:

1. input dimension
2. hidden dimension
3. output dimension
4. matrix multiplication shapes
5. hidden-state initialization
6. device placement
7. target shape
8. loss dimensions
9. parameter registration
10. learning rate

Print tensor shapes at every stage.
`
    },

    {
      title: "38. Practical Debugging Code",
      code: `
print("X:", X.shape)
print("H:", H.shape)
print("W_xh:", model.W_xh.shape)
print("W_hh:", model.W_hh.shape)
print("W_hq:", model.W_hq.shape)
print("Y:", Y.shape)
`
    },

    {
      title: "39. Interview Questions",
      content: `
1. How do you implement an RNN from scratch?

2. What is Wₓₕ?

3. What is Wₕₕ?

4. Why does Wₕₕ have hidden_size × hidden_size shape?

5. Why are the same weights reused across time?

6. What is backpropagation through time?

7. Why can gradients explode?

8. Why can gradients vanish?

9. Why use nn.Parameter?

10. Why might one-hot encoding be inefficient?

11. Why are embeddings useful?

12. Why can RNN computation be difficult to parallelize across time?
`
    },

    {
      title: "40. Final Coding Challenge",
      content: `
Build your own ScratchRNN with:

input_size = 8

hidden_size = 32

output_size = 10

Then create:

batch_size = 16

sequence_length = 20

Train it for a small synthetic classification task.

Your program must print:

• parameter shapes
• input shape
• output shape
• loss every epoch
• final prediction shape
`
    }
  ],

  keyTakeaways: [
    "A basic RNN can be implemented using matrix multiplication and a recurrent hidden state.",
    "The hidden state is updated at every time step.",
    "The same recurrent parameters are reused throughout the sequence.",
    "One-hot encoding can represent tokens but becomes inefficient for large vocabularies.",
    "nn.Parameter registers trainable tensors with PyTorch.",
    "Backpropagation through time propagates gradients through recurrent steps.",
    "Exploding and vanishing gradients are major challenges in RNN training.",
    "Understanding the scratch implementation makes framework-level RNNs much easier to understand."
  ],

  summary: `
A basic RNN is not a mysterious black box.

Its essential computation is:

Hₜ = φ(XₜWₓₕ + Hₜ₋₁Wₕₕ + bₕ)

followed by:

Oₜ = HₜWₕq + bq

By implementing these operations manually, we can see exactly how the current input and historical hidden state interact.

The same parameters are reused at every time step.

Once this foundation is understood, we can move to language modeling, where the RNN predicts tokens, and then to the training problems that motivate GRUs, LSTMs, and other modern sequence architectures.
`
};

export default lesson;