const lesson = {
  id: "module4-lesson5",
  moduleId: "module4",
  lessonNumber: 5,
  title: "Training RNNs and Gradient Problems",
  subtitle:
    "Understanding backpropagation through time, vanishing gradients, exploding gradients, and gradient clipping",
  duration: "100–120 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand backpropagation through time.",
    "Understand why recurrent models create long computational chains.",
    "Understand vanishing gradients.",
    "Understand exploding gradients.",
    "Understand the mathematical intuition behind repeated Jacobian products.",
    "Understand gradient clipping.",
    "Implement gradient clipping in PyTorch.",
    "Understand truncated backpropagation through time.",
    "Diagnose unstable RNN training."
  ],

  introduction: `
Training an RNN is more difficult than simply running it forward.

The model must learn parameters that influence many time steps.

Because the same recurrent transformation is repeatedly applied, the gradient also has to propagate through the recurrent chain.

For a long sequence:

X₁ → H₁ → H₂ → H₃ → ... → Hₜ

the gradient may need to travel through many transformations.

Repeated multiplication can make gradients extremely small or extremely large.

These two problems are known as:

• vanishing gradients
• exploding gradients

The source describes these as fundamental challenges in recurrent neural networks and introduces gradient clipping as a practical response to exploding gradients. :chatgpt-content-reference{index="4"}
`,

  sections: [
    {
      title: "1. Forward Pass vs Backward Pass",
      content: `
During the forward pass:

inputs move from early time steps toward later time steps.

During the backward pass:

the loss sends gradient information backward through the computational graph.

For an RNN:

X₁ → H₁ → H₂ → H₃ → O₃
                 ↓
                Loss

Gradients move in the opposite direction.
`
    },

    {
      title: "2. Backpropagation Through Time",
      content: `
Because the RNN is recurrent, training through a sequence is commonly called:

Backpropagation Through Time

or:

BPTT.

The recurrent loop is conceptually unrolled before calculating gradients.
`
    },

    {
      title: "3. Unrolled Computation",
      content: `
A recurrent loop:

        ┌───────┐
Xₜ ───→ │  RNN  │
        └───┬───┘
            ↓
           Hₜ

can be viewed as:

X₁ → H₁ → H₂ → H₃ → H₄

Each hidden state depends on the previous state.
`
    },

    {
      title: "4. Why the Gradient Travels Through Time",
      content: `
Suppose the loss depends on H₄.

Then:

∂L/∂H₁

depends on the chain:

∂L/∂H₄
×
∂H₄/∂H₃
×
∂H₃/∂H₂
×
∂H₂/∂H₁

The number of terms grows with sequence length.
`
    },

    {
      title: "5. Repeated Matrix Products",
      content: `
In simplified recurrent systems, gradient propagation can involve powers of a recurrent weight matrix.

Conceptually:

Wᵀ
WᵀWᵀ
WᵀWᵀWᵀ
...

Therefore:

(Wᵀ)^k

can appear in the gradient.

The behavior of these repeated products is central to gradient stability.
`
    },

    {
      title: "6. Vanishing Gradients",
      content: `
If repeated multiplication produces values smaller than 1 in magnitude, the gradient can shrink rapidly.

Example:

0.5 × 0.5 × 0.5 × 0.5

= 0.0625

After many steps, the value can become extremely small.

When this happens, earlier time steps receive little learning signal.

The model struggles to learn long-range dependencies.
`
    },

    {
      title: "7. Exploding Gradients",
      content: `
If repeated multiplication produces values larger than 1:

2 × 2 × 2 × 2

= 16

and the value can grow very rapidly.

Large gradients can cause:

• unstable optimization
• huge parameter updates
• loss spikes
• NaN values
• training divergence

The source describes exploding gradients as a common instability in recurrent models. :chatgpt-content-reference{index="5"}
`
    },

    {
      title: "8. Why Gradient Magnitude Matters",
      content: `
A gradient tells the optimizer how strongly parameters should change.

A very small gradient:

→ tiny update

A very large gradient:

→ potentially enormous update

Therefore, gradient magnitude directly affects training stability.
`
    },

    {
      title: "9. Gradient Norm",
      content: `
For a collection of gradient values:

g₁, g₂, ..., gₙ

the Euclidean norm is:

||g||₂ = sqrt(
    g₁² + g₂² + ... + gₙ²
)

Gradient clipping commonly limits this norm.
`
    },

    {
      title: "10. Gradient Clipping",
      content: `
Suppose the allowed gradient norm is θ.

If:

||g|| ≤ θ

keep the gradient unchanged.

If:

||g|| > θ

scale it down.

A common expression is:

g ← min(1, θ / ||g||) g

This preserves the gradient direction while limiting its magnitude. :chatgpt-content-reference{index="6"}
`
    },

    {
      title: "11. Why Clipping Does Not Solve Vanishing Gradients",
      content: `
Gradient clipping addresses excessively large gradients.

It does not restore information lost when gradients become extremely small.

Therefore:

exploding gradients → clipping can help

vanishing gradients → requires architectural or optimization strategies

This distinction is very important.
`
    },

    {
      title: "12. PyTorch Gradient Clipping",
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
      title: "13. Inspecting Gradient Norms",
      code: `
total_norm = 0.0

for parameter in model.parameters():
    if parameter.grad is not None:
        total_norm += (
            parameter.grad.detach().norm(2).item() ** 2
        )

total_norm = total_norm ** 0.5

print("Gradient norm:", total_norm)
`
    },

    {
      title: "14. Detecting NaN Values",
      code: `
if not torch.isfinite(loss):
    print("Invalid loss detected")
`
    },

    {
      title: "15. Common Causes of Exploding Gradients",
      content: `
Possible causes include:

• very high learning rate
• unstable initialization
• long recurrent chains
• poorly scaled inputs
• unstable recurrent dynamics

Gradient clipping can make training more robust, but it should not be treated as a replacement for good model design.
`
    },

    {
      title: "16. Learning Rate and Gradient Explosion",
      content: `
Suppose:

parameter update = learning_rate × gradient

If the gradient is already huge and the learning rate is also large, the update can become enormous.

Reducing the learning rate can help, but the source points out an important drawback: using a tiny learning rate everywhere slows learning even when gradients are normally well behaved. :chatgpt-content-reference{index="7"}
`
    },

    {
      title: "17. Truncated Backpropagation Through Time",
      content: `
For extremely long sequences, computing gradients through every time step can be expensive.

One strategy is to limit how far the gradient is propagated.

This is called:

Truncated Backpropagation Through Time

The model still processes the sequence, but gradient history is intentionally cut after a chosen number of steps.
`
    },

    {
      title: "18. Detaching the Hidden State",
      code: `
hidden = hidden.detach()
`
    },

    {
      title: "19. Why Detach Matters",
      content: `
Calling detach creates a tensor that does not carry the previous computation graph into future gradient calculations.

This can prevent the graph from growing indefinitely.

It is especially useful when processing long streams in manageable chunks.
`
    },

    {
      title: "20. Full BPTT vs Truncated BPTT",
      content: `
Full BPTT:

• gradients can propagate across the entire sequence
• potentially expensive
• large computational graph
• more memory usage

Truncated BPTT:

• limits gradient history
• reduces computation
• reduces memory requirements
• may limit very long-range learning
`
    },

    {
      title: "21. Why RNNs Struggle With Long Dependencies",
      content: `
A simple RNN must repeatedly transform information:

H₁ → H₂ → H₃ → ... → Hₜ

Important information from H₁ may need to survive many transformations.

At each transformation, some information can be weakened.

The gradient can also become smaller.

This creates a fundamental long-term dependency problem.
`
    },

    {
      title: "22. Architectural Response",
      content: `
Researchers developed architectures that explicitly control information flow.

Examples include:

• LSTM
• GRU

These architectures introduce learned gates that determine how information should be retained, updated, or discarded.

This is the transition from basic RNNs to modern recurrent neural networks.
`
    },

    {
      title: "23. Training Diagnostic Workflow",
      content: `
When an RNN is unstable:

Step 1:
Check input scaling.

Step 2:
Check learning rate.

Step 3:
Inspect loss values.

Step 4:
Inspect gradient norms.

Step 5:
Check for NaNs.

Step 6:
Try gradient clipping.

Step 7:
Reduce sequence length.

Step 8:
Consider truncated BPTT.

Step 9:
Consider a gated architecture.
`
    },

    {
      title: "24. Stable Training Example",
      code: `
for epoch in range(10):

    optimizer.zero_grad()

    logits, hidden = model(X)

    loss = criterion(
        logits.reshape(-1, vocab_size),
        targets.reshape(-1)
    )

    loss.backward()

    grad_norm = torch.nn.utils.clip_grad_norm_(
        model.parameters(),
        max_norm=1.0
    )

    optimizer.step()

    print(
        f"epoch={epoch + 1}, "
        f"loss={loss.item():.4f}, "
        f"grad_norm={float(grad_norm):.4f}"
    )
`
    },

    {
      title: "25. Understanding the Returned Gradient Norm",
      content: `
clip_grad_norm_ returns the total norm before clipping.

Therefore, if it returns:

0.4

the gradients were already below the threshold.

If it returns:

8.0

with:

max_norm = 1.0

the gradients were clipped.
`
    },

    {
      title: "26. Numerical Experiment",
      code: `
values = torch.tensor([
    0.5,
    0.5,
    0.5
])

norm = values.norm(2)

print(norm)
`
    },

    {
      title: "27. Exploding vs Vanishing",
      content: `
Vanishing:

gradient magnitude
↓
↓
↓
very small

Effect:

early steps learn slowly.

Exploding:

gradient magnitude
↑
↑
↑
very large

Effect:

training becomes unstable.
`
    },

    {
      title: "28. Important Conceptual Distinction",
      content: `
Gradient magnitude and model performance are not the same thing.

A small gradient does not automatically mean the model is good.

A large gradient does not automatically mean the architecture is bad.

The gradient must be interpreted together with:

• loss
• learning rate
• training progress
• parameter scale
• sequence length
`
    },

    {
      title: "29. Interview Questions",
      content: `
1. What is BPTT?

2. Why does an RNN require backpropagation through time?

3. What causes vanishing gradients?

4. What causes exploding gradients?

5. What is gradient clipping?

6. Does gradient clipping solve vanishing gradients?

7. What is truncated BPTT?

8. Why would you detach hidden states?

9. How can you detect exploding gradients?

10. Why do LSTMs and GRUs help with long-term dependencies?
`
    },

    {
      title: "30. Coding Challenge",
      content: `
Train an RNN language model twice:

Experiment A:
without gradient clipping

Experiment B:
with gradient clipping

Track:

• loss
• gradient norm
• training stability

Explain what changes when the gradient threshold is introduced.
`
    }
  ],

  keyTakeaways: [
    "RNN training uses backpropagation through time.",
    "Gradients must pass through repeated recurrent transformations.",
    "Repeated products can cause gradients to vanish or explode.",
    "Vanishing gradients make long-term dependencies difficult to learn.",
    "Exploding gradients can destabilize optimization.",
    "Gradient clipping limits excessive gradient magnitude.",
    "Gradient clipping does not solve vanishing gradients.",
    "Truncated BPTT limits the length of the computational history.",
    "LSTM and GRU architectures introduce mechanisms for better information control."
  ],

  summary: `
RNNs are powerful sequence models, but their recurrent structure creates difficult gradient-flow behavior.

During BPTT, gradients pass through many recurrent transformations. Repeated multiplication can cause them to shrink or grow dramatically.

Gradient clipping is an important practical technique for controlling exploding gradients:

g ← min(1, θ / ||g||) g

However, clipping does not solve vanishing gradients.

This limitation motivates the gated architectures introduced next, particularly LSTMs and GRUs.
`
};

export default lesson;