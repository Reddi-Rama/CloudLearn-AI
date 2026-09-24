const lesson15 = {
  id: "lesson15",
  title: "Beam Search",
  description:
    "Understand greedy decoding, exhaustive search, and beam search for autoregressive sequence generation, including scoring, beam width, length effects, and implementation.",
  duration: "90–110 min",
  difficulty: "Advanced",
  prerequisites: [
    "Autoregressive generation",
    "Sequence-to-sequence models",
    "Conditional probability",
    "Log probabilities"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Do We Need Beam Search?",
      content: `
A sequence-to-sequence decoder must choose one token at a time.

At every step, several tokens may have reasonable probabilities.

Greedy decoding chooses the best token immediately.

But the best immediate decision does not necessarily produce the best complete sequence.

Beam search keeps several promising partial sequences alive.

This gives the decoder a limited form of search over possible outputs.
`
    },

    {
      type: "concept",
      title: "1. Autoregressive Search",
      content: `
Suppose the decoder produces:

Step 1:

A: 0.6
B: 0.3
C: 0.1

A greedy decoder chooses A.

But suppose:

A → difficult continuation
B → excellent continuation

Then choosing A immediately may lead to a worse complete sequence.

The challenge is to balance local probability with future possibilities.
`
    },

    {
      type: "concept",
      title: "2. Sequence Probability",
      content: `
For a target sequence:

Y = y1, y2, ..., yT

the model assigns:

P(Y | X)
=
Π P(y_t | y_<t, X)

The probability of a complete sequence is therefore the product of token probabilities.
`
    },

    {
      type: "concept",
      title: "3. Why Log Probabilities Are Used",
      content: `
Multiplying many probabilities can create extremely small values.

For example:

0.8 × 0.7 × 0.6 × 0.5

is already much smaller than each individual probability.

Using logarithms converts multiplication into addition:

log P(Y | X)
=
Σ log P(y_t | y_<t, X)

This is numerically convenient and easier to accumulate.
`
    },

    {
      type: "concept",
      title: "4. Greedy Search",
      content: `
Greedy search maintains only one candidate.

At each step:

candidate
↓
predict probabilities
↓
select highest probability token
↓
continue

Beam width:

k = 1

This makes greedy search a special case of beam search.
`
    },

    {
      type: "concept",
      title: "5. Problem with Greedy Search",
      content: `
Consider:

First token:

A = 0.55
B = 0.45

Suppose:

P(best continuation | A) = 0.50

while:

P(best continuation | B) = 0.95

Then:

A path ≈ 0.55 × 0.50 = 0.275

B path ≈ 0.45 × 0.95 = 0.4275

Although A was initially more probable, B produced the stronger complete sequence.

Greedy search could therefore miss a better path.
`
    },

    {
      type: "concept",
      title: "6. Exhaustive Search",
      content: `
At the opposite extreme, exhaustive search considers every possible sequence.

This would find the highest-probability sequence if the search space were finite and completely explored.

But the number of possible sequences grows exponentially with sequence length.

If vocabulary size is V and sequence length is T:

number of possible sequences ≈ V^T

This quickly becomes computationally impossible.
`
    },

    {
      type: "concept",
      title: "7. Beam Search",
      content: `
Beam search provides a compromise.

Instead of keeping:

1 sequence

or:

all sequences

it keeps:

k best partial sequences

where k is the beam width.
`
    },

    {
      type: "concept",
      title: "8. Beam Width",
      content: `
Beam width controls the number of candidates retained.

k = 1
→ greedy search

k = 3
→ keep 3 candidates

k = 5
→ keep 5 candidates

Larger k generally explores more possibilities but increases computation and memory usage.
`
    },

    {
      type: "concept",
      title: "9. Beam Search Example",
      content: `
Suppose the first-step candidates are:

A: log probability = -0.5
B: -0.7
C: -1.1
D: -1.8

With beam width 2:

keep A and B

discard C and D.

At the next step, each surviving candidate is expanded.

A:
A1, A2, A3

B:
B1, B2, B3

Now there are six candidates.

Only the best two are retained.
`
    },

    {
      type: "concept",
      title: "10. Beam Search Algorithm",
      content: `
Initialize:

beam = [<bos>]

For every decoding step:

1. Expand every beam candidate.
2. Generate possible next tokens.
3. Add each token to its candidate.
4. Calculate cumulative score.
5. Rank all candidates.
6. Keep the best k.
7. Remove completed candidates from active expansion when appropriate.
8. Continue until stopping conditions are met.
`
    },

    {
      type: "code",
      language: "python",
      title: "Conceptual Beam Search",
      content: `
def beam_search(initial_state, beam_width, max_steps):
    beams = [
        {
            "tokens": [],
            "score": 0.0,
            "state": initial_state
        }
    ]

    for _ in range(max_steps):
        candidates = []

        for beam in beams:
            next_tokens = predict_next_tokens(
                beam["state"]
            )

            for token, log_prob, state in next_tokens:
                candidates.append({
                    "tokens": beam["tokens"] + [token],
                    "score": beam["score"] + log_prob,
                    "state": state
                })

        candidates.sort(
            key=lambda item: item["score"],
            reverse=True
        )

        beams = candidates[:beam_width]

    return beams[0]
`
    },

    {
      type: "concept",
      title: "11. Cumulative Score",
      content: `
Each candidate receives the sum of its token log probabilities.

For example:

Candidate A:

log P(y1) = -0.2
log P(y2) = -0.5
log P(y3) = -0.4

Total:

-0.2 - 0.5 - 0.4 = -1.1

Because log probabilities are usually non-positive, a larger score is better.
`
    },

    {
      type: "concept",
      title: "12. Completed Sequences",
      content: `
A candidate is complete when it generates:

<eos>

Completed sequences should not continue receiving new tokens.

However, they still need to be compared against other completed candidates.

The implementation therefore commonly maintains:

active beams

and

completed hypotheses.
`
    },

    {
      type: "concept",
      title: "13. Length Bias",
      content: `
Raw sequence probability tends to decrease as more tokens are multiplied together.

Therefore shorter sequences can sometimes receive an advantage.

This creates a length bias.

For example:

Sequence A:
"hello <eos>"

Sequence B:
"hello world this is useful <eos>"

The longer sequence has more probability terms contributing to its total score.
`
    },

    {
      type: "concept",
      title: "14. Length Normalization",
      content: `
One approach is to normalize the cumulative score by sequence length.

A simple form is:

normalized_score
=
total_log_probability / length

More sophisticated length-penalty functions can also be used.

The exact scoring strategy is an engineering choice.
`
    },

    {
      type: "concept",
      title: "15. Beam Search Trade-Off",
      content: `
Beam width creates a trade-off.

Small beam:

• Faster
• Lower memory
• Less search

Large beam:

• More candidates
• More computation
• More memory
• Broader search

Increasing beam width does not guarantee better final outputs.
`
    },

    {
      type: "concept",
      title: "16. Beam Search Is Not Exact Search",
      content: `
Beam search prunes candidates.

Once a candidate is removed from the beam, its descendants are no longer explored.

Therefore beam search is a heuristic search strategy.

It approximates the highest-probability sequence rather than guaranteeing the exact optimum.
`
    },

    {
      type: "concept",
      title: "17. Why Beam Search Helps Translation",
      content: `
Translation often contains several locally plausible choices.

A wider search can preserve alternative translations long enough for later context to distinguish between them.

This is particularly useful when:

• Several words have similar probabilities.
• Word order creates delayed evidence.
• A locally weaker choice leads to a stronger global sequence.
`
    },

    {
      type: "concept",
      title: "18. Greedy vs Beam Search",
      content: `
Greedy:

beam width = 1

Beam:

beam width > 1

Greedy commits immediately.

Beam search delays commitment by maintaining multiple alternatives.
`
    },

    {
      type: "concept",
      title: "19. Exhaustive vs Beam Search",
      content: `
Exhaustive search:

explores every possible sequence.

Beam search:

keeps only a limited number of promising sequences.

Therefore:

Exhaustive → potentially exact but computationally expensive

Beam → approximate but practical
`
    },

    {
      type: "concept",
      title: "20. Beam Search State Management",
      content: `
For recurrent decoders, every candidate may have its own decoder state.

Therefore a beam candidate can conceptually contain:

{
    tokens,
    score,
    hidden_state
}

When a candidate is expanded, its hidden state must be correctly associated with the new child candidates.

Incorrect state sharing can produce very difficult-to-debug generation errors.
`
    },

    {
      type: "concept",
      title: "21. Tensorized Beam Search",
      content: `
Real implementations avoid Python loops wherever possible.

Suppose:

batch = B
beam width = K
hidden size = H

The hidden state can be expanded or reshaped to include the beam dimension.

Conceptually:

(B, H)

becomes:

(B × K, H)

This lets multiple beams be processed together on the accelerator.
`
    },

    {
      type: "code",
      language: "python",
      title: "Expanding Hidden State",
      content: `
def expand_state(state, beam_width):
    # Example shape:
    # (layers, batch, hidden)

    layers, batch, hidden = state.shape

    state = state.unsqueeze(2)

    state = state.expand(
        layers,
        batch,
        beam_width,
        hidden
    )

    return state.reshape(
        layers,
        batch * beam_width,
        hidden
    )
`
    },

    {
      type: "concept",
      title: "22. Beam Search and <eos>",
      content: `
Stopping logic must be handled carefully.

A beam that produces <eos> becomes a completed hypothesis.

The system should not continue expanding it as if <eos> were an ordinary token.

The final answer is selected from completed hypotheses according to the scoring rule.
`
    },

    {
      type: "concept",
      title: "23. Common Beam Search Bugs",
      content: `
Typical implementation errors include:

• Incorrect cumulative scores
• Using probabilities instead of log probabilities inconsistently
• Forgetting length normalization
• Reusing hidden states incorrectly
• Continuing completed beams
• Mixing beams from different batch examples
• Incorrect top-k selection
• Incorrect vocabulary indexing
• Returning an unfinished sequence
`
    },

    {
      type: "concept",
      title: "24. Debugging Beam Search",
      content: `
Start with a tiny vocabulary.

Print:

step
beam tokens
beam score
next-token candidates

Example:

Step 1
[A] -0.2
[B] -0.4

Step 2
[A, C] -0.5
[B, A] -0.7

This makes pruning behavior visible.
`
    },

    {
      type: "code",
      language: "python",
      title: "Simple Beam Debugging",
      content: `
for step, beams in enumerate(all_beams):
    print(f"Step {step}")

    for beam in beams:
        print(
            beam["tokens"],
            beam["score"]
        )
`
    },

    {
      type: "concept",
      title: "25. Choosing Beam Width",
      content: `
Beam width should be treated as a hyperparameter.

Possible values:

1
3
5
10

Compare:

• Translation quality
• Inference latency
• Memory consumption
• Output length
• Repetition behavior

Do not assume that larger always means better.
`
    },

    {
      type: "concept",
      title: "26. Beam Search and Modern Generative Models",
      content: `
Beam search became particularly important in traditional sequence-to-sequence generation.

However, different modern generative systems use different decoding strategies, including:

• Greedy decoding
• Beam search
• Sampling
• Temperature scaling
• Top-k sampling
• Nucleus sampling

The appropriate method depends on the generation task.
`
    },

    {
      type: "concept",
      title: "27. Deterministic vs Stochastic Decoding",
      content: `
Greedy and beam search are generally deterministic when the model and inputs are fixed.

Sampling-based approaches intentionally introduce randomness.

This creates different goals:

Search:
find a high-scoring sequence.

Sampling:
produce varied plausible sequences.

Translation often emphasizes faithful high-probability outputs, while creative generation can benefit from controlled sampling.
`
    },

    {
      type: "exercise",
      title: "Exercise 1 — Manual Beam Search",
      content: `
Create a tiny vocabulary:

A, B, C, <eos>

Assign probabilities at each step.

Manually perform beam search with:

beam width = 2

Record:

• candidates
• cumulative scores
• candidates removed
• final sequence
`
    },

    {
      type: "exercise",
      title: "Exercise 2 — Compare Decoders",
      content: `
Use the same trained model and compare:

1. Greedy decoding.
2. Beam width 2.
3. Beam width 5.

Record:

• generated sequence
• generation time
• sequence score
• output length

Analyze whether increasing the beam width actually changed the result.
`
    },

    {
      type: "qa",
      question: "What is greedy search?",
      answer:
        "A decoding strategy that keeps only the highest-probability next token at every step."
    },

    {
      type: "qa",
      question: "What is beam width?",
      answer:
        "The number of partial candidate sequences maintained during beam search."
    },

    {
      type: "qa",
      question: "Why use log probabilities?",
      answer:
        "They turn products of probabilities into sums and are numerically more convenient for long sequences."
    },

    {
      type: "qa",
      question: "Is beam search guaranteed to find the optimal sequence?",
      answer:
        "No. Because it prunes candidates, beam search is an approximation rather than exhaustive search."
    },

    {
      type: "qa",
      question: "What happens when beam width is one?",
      answer:
        "Beam search reduces to greedy search."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Sequence generation requires a search strategy.

Greedy search is fast but commits to one path.

Exhaustive search explores everything but becomes computationally infeasible.

Beam search keeps a limited set of promising candidates.

Important ideas include:

• Cumulative log probability
• Beam width
• Candidate expansion
• Candidate pruning
• Completed hypotheses
• Length bias
• Length normalization
• Decoder state management
• Tensorized beam search

Beam search provides a practical compromise between greedy decoding and exhaustive search.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Beam search delays irreversible decisions by maintaining multiple promising hypotheses. It is a practical approximation to the enormous search space of autoregressive sequence generation."
    }
  ]
};

export default lesson15;