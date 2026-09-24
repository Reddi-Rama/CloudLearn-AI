const lesson14 = {
  id: "lesson14",
  title: "Sequence-to-Sequence Learning for Machine Translation",
  description:
    "Build the complete sequence-to-sequence training pipeline, including teacher forcing, encoder and decoder design, masking, training, prediction, and evaluation.",
  duration: "110–130 min",
  difficulty: "Advanced",
  prerequisites: [
    "Encoder-decoder architecture",
    "RNNs",
    "Machine translation preprocessing",
    "Cross-entropy loss"
  ],

  sections: [
    {
      type: "intro",
      title: "From Architecture to a Working Translation System",
      content: `
An encoder-decoder architecture gives us the model structure.

Now we need to connect all pieces into a complete training system.

The pipeline is:

Translation dataset
↓
Token IDs
↓
Encoder
↓
Decoder
↓
Vocabulary logits
↓
Masked loss
↓
Backpropagation
↓
Parameter updates
↓
Autoregressive prediction
↓
Evaluation
`
    },

    {
      type: "concept",
      title: "1. Sequence-to-Sequence Objective",
      content: `
Given a source sequence:

X = (x1, x2, ..., xT)

the model should generate:

Y = (y1, y2, ..., yU)

The learning objective is to assign high probability to the correct target sequence.

The conditional probability is factorized as:

P(Y | X)
=
Π P(y_t | y_1, ..., y_{t-1}, X)
`
    },

    {
      type: "concept",
      title: "2. Teacher Forcing",
      content: `
Teacher forcing means feeding the decoder the known target prefix during training.

Suppose the target is:

"I like AI <eos>"

Decoder input:

<bos> I like AI

Training target:

I like AI <eos>

The input and target are shifted by one position.
`
    },

    {
      type: "concept",
      title: "3. Why Shift the Target?",
      content: `
The decoder should learn next-token prediction.

If the decoder receives:

<bos>

it should predict:

I

If it receives:

<bos> I

it should predict:

like

Therefore:

Decoder input:
<bos> I like AI

Target:
I like AI <eos>

Each position predicts the next token.
`
    },

    {
      type: "concept",
      title: "4. Encoder Input",
      content: `
The encoder receives the source sequence.

Example:

source:
"I love programming"

tokens:

[I, love, programming]

IDs:

[12, 31, 84]

These IDs are converted into embeddings before entering the recurrent encoder.
`
    },

    {
      type: "concept",
      title: "5. Decoder Input",
      content: `
The decoder receives shifted target tokens.

Example:

Target:

I love programming <eos>

Decoder input:

<bos> I love programming

The decoder learns the mapping:

<bos> → I
I → love
love → programming
programming → <eos>
`
    },

    {
      type: "code",
      language: "python",
      title: "Preparing Decoder Inputs",
      content: `
target = torch.tensor([
    [1, 7, 12, 18, 2]
])

bos_id = 1

decoder_input = target[:, :-1]
decoder_target = target[:, 1:]

print("Decoder input:", decoder_input)
print("Expected output:", decoder_target)
`
    },

    {
      type: "concept",
      title: "6. Encoder Processing",
      content: `
The encoder converts the source sequence into hidden representations.

A recurrent encoder repeatedly applies:

H_t = RNN(X_t, H_{t-1})

At the end, the encoder state becomes information available to the decoder.

With attention-based models, the complete sequence of encoder outputs can later be accessed rather than only the final state.
`
    },

    {
      type: "concept",
      title: "7. Decoder Processing During Training",
      content: `
During training, the decoder can process the entire shifted target sequence as a tensor.

This makes training more efficient than generating one token at a time.

Conceptually:

Encoder source
+
Decoder target prefix
↓
Decoder
↓
Logits for every target position
`
    },

    {
      type: "concept",
      title: "8. Vocabulary Logits",
      content: `
Suppose:

batch size = 32
target length = 20
target vocabulary = 10,000

The decoder may produce:

(32, 20, 10000)

Every position has one logit for every target vocabulary token.
`
    },

    {
      type: "concept",
      title: "9. Cross-Entropy Loss",
      content: `
At each target position, cross-entropy compares:

predicted vocabulary distribution

against:

correct target token.

For one token:

L_t = -log P(y_t)

The sequence loss aggregates valid positions.
`
    },

    {
      type: "concept",
      title: "10. Why Masking Is Required",
      content: `
Batches contain padded sequences.

Example:

[7, 12, 18, 2, 0, 0]

The last two positions are padding.

The loss should not treat those positions as real target tokens.

Therefore a mask identifies valid positions.
`
    },

    {
      type: "formula",
      title: "Masked Sequence Loss",
      content: `
L = Σ_t m_t L_t / Σ_t m_t

where:

m_t = 1 for a valid token
m_t = 0 for padding

This ensures padding does not dominate the training signal.
`
    },

    {
      type: "concept",
      title: "11. Training Loop",
      content: `
A typical training iteration is:

1. Load source and target batch.
2. Move tensors to device.
3. Prepare decoder inputs and labels.
4. Run encoder.
5. Run decoder.
6. Compute masked loss.
7. Clear gradients.
8. Backpropagate.
9. Clip gradients if necessary.
10. Update parameters.
11. Record metrics.
`
    },

    {
      type: "code",
      language: "python",
      title: "Simplified Training Step",
      content: `
optimizer.zero_grad()

encoder_output, encoder_state = encoder(source)

decoder_input = target[:, :-1]
decoder_target = target[:, 1:]

logits, _ = decoder(
    decoder_input,
    encoder_state
)

loss = loss_function(
    logits,
    decoder_target
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
      type: "concept",
      title: "12. Gradient Clipping",
      content: `
Recurrent networks can produce very large gradients.

Gradient clipping limits the gradient norm.

A common rule is:

g ← min(1, θ / ||g||) g

where θ is the maximum allowed norm.

This does not solve every optimization problem, but it helps prevent unstable parameter updates.
`
    },

    {
      type: "concept",
      title: "13. Training Metrics",
      content: `
Useful metrics include:

• Training loss
• Validation loss
• Perplexity
• Translation quality metrics
• Sequence length statistics
• Gradient norms

Training loss alone does not guarantee good translations.
`
    },

    {
      type: "concept",
      title: "14. Teacher Forcing and Exposure Bias",
      content: `
During training:

previous token = correct token

During inference:

previous token = model prediction

This difference means the decoder may encounter inputs during inference that it never saw during training.

An early prediction error can therefore influence subsequent predictions.

This is commonly discussed as exposure bias.
`
    },

    {
      type: "concept",
      title: "15. Inference Without Teacher Forcing",
      content: `
At inference time, the true target sequence is unavailable.

The process becomes:

<bos>
↓
predict token
↓
feed prediction back
↓
predict next token
↓
repeat
↓
<eos>
`
    },

    {
      type: "code",
      language: "python",
      title: "Autoregressive Prediction Skeleton",
      content: `
token = bos_id
generated = []

for step in range(max_length):
    x = torch.tensor([[token]])

    logits, state = decoder(x, state)

    token = logits[-1, 0].argmax().item()

    if token == eos_id:
        break

    generated.append(token)
`
    },

    {
      type: "concept",
      title: "16. Greedy Prediction",
      content: `
Greedy prediction chooses:

argmax P(y_t | previous_tokens, X)

at every step.

Advantages:

• Simple
• Fast
• Low memory overhead

Limitation:

The locally best token may lead to a poorer complete sequence.
`
    },

    {
      type: "concept",
      title: "17. Maximum Sequence Length",
      content: `
Inference should normally include a maximum generation length.

Otherwise, a model that fails to generate <eos> could continue indefinitely.

Typical stopping conditions are:

• Generated <eos>
• Reached maximum length
• Other application-specific termination rule
`
    },

    {
      type: "concept",
      title: "18. Evaluation of Translation",
      content: `
A translation system should be evaluated on unseen examples.

Useful approaches include:

• Exact reference comparison
• Token-level accuracy
• Sequence-level metrics
• BLEU-style evaluation
• Human evaluation

Automated metrics provide useful signals but do not perfectly capture translation quality.
`
    },

    {
      type: "concept",
      title: "19. BLEU Intuition",
      content: `
BLEU evaluates overlap between generated translations and reference translations using n-grams.

For example:

Reference:
the cat is sleeping

Prediction:
the cat sleeps

There is substantial word overlap, although the sentences differ.

BLEU also includes a brevity-related component to discourage excessively short outputs.
`
    },

    {
      type: "concept",
      title: "20. Why Exact Matching Is Difficult",
      content: `
Two translations can both be correct while using different wording.

Reference:

"The student solved the problem."

Alternative:

"The problem was solved by the student."

Exact string matching would treat these as different.

Therefore translation evaluation needs metrics that account for partial linguistic overlap, and human evaluation remains useful.
`
    },

    {
      type: "concept",
      title: "21. Debugging Translation Models",
      content: `
If outputs are nonsense, inspect:

1. Vocabulary mapping.
2. <bos>/<eos> handling.
3. Target shifting.
4. Padding masks.
5. Hidden-state dimensions.
6. Loss values.
7. Learning rate.
8. Gradient norms.
9. Training examples.
10. Decoder generation loop.
`
    },

    {
      type: "concept",
      title: "22. Overfitting a Tiny Dataset",
      content: `
A powerful debugging experiment is to train on a tiny dataset.

If the model cannot memorize a very small collection of examples, something may be wrong with:

• Model implementation
• Loss
• Labels
• Data preprocessing
• Optimization
• Tensor shapes

Tiny-dataset overfitting is a valuable engineering test.
`
    },

    {
      type: "code",
      language: "python",
      title: "Translation Debugging Check",
      content: `
model.eval()

with torch.no_grad():
    prediction = translate(
        model,
        sample_source,
        bos_id,
        eos_id
    )

print("Source:", sample_source)
print("Prediction:", prediction)
print("Reference:", sample_target)
`
    },

    {
      type: "concept",
      title: "23. Why Attention Comes Next",
      content: `
The basic encoder-decoder architecture forces the source information through a limited representation.

Attention changes the design.

Instead of:

entire source
↓
one context vector

attention provides:

decoder state
↓
relevance scores over source states
↓
weighted source representation

This allows different decoder steps to focus on different source positions.
`
    },

    {
      type: "exercise",
      title: "Practical Exercise",
      content: `
Build a miniature sequence-to-sequence model for synthetic pairs.

Example:

"hello" → "bonjour"
"good morning" → "bonjour matin"
"good night" → "bonne nuit"

Implement:

• vocabulary
• encoder
• decoder
• teacher forcing
• masked loss
• training
• greedy inference

Then deliberately introduce a padding bug and observe its effect.
`
    },

    {
      type: "qa",
      question: "Why are decoder inputs shifted?",
      answer:
        "Because the decoder must learn to predict the next token from the preceding target tokens."
    },

    {
      type: "qa",
      question: "Why is teacher forcing useful?",
      answer:
        "It gives the decoder the correct previous target tokens during training, making learning more direct and efficient."
    },

    {
      type: "qa",
      question: "Why do we mask padding?",
      answer:
        "Padding is artificial and should not contribute to the meaningful sequence loss."
    },

    {
      type: "qa",
      question: "What changes during inference?",
      answer:
        "The decoder no longer receives the correct target sequence and must feed its own predictions back into the generation process."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
A complete sequence-to-sequence translation system requires more than an encoder and decoder.

You must correctly handle:

• Target shifting
• Teacher forcing
• Vocabulary logits
• Cross-entropy
• Padding masks
• Gradient clipping
• Autoregressive decoding
• Generation limits
• Translation evaluation

The next major improvement is attention, which lets the decoder selectively use information from different source positions.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Training and inference are fundamentally different in sequence generation. Build both pipelines explicitly and debug them independently."
    }
  ]
};

export default lesson14;