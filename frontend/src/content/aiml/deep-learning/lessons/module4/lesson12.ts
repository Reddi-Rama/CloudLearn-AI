const lesson12 = {
  id: "lesson12",
  title: "Machine Translation and the Dataset",
  description:
    "Learn how machine translation problems are formulated, how bilingual text is cleaned and tokenized, how vocabulary is constructed, and how variable-length sequences are converted into training-ready tensors.",
  duration: "100–120 min",
  difficulty: "Advanced",
  prerequisites: [
    "Sequence data",
    "RNNs",
    "Language models",
    "Tokenization",
    "Tensor operations"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Machine Translation Is a Sequence Problem",
      content: `
Machine translation converts a sequence in one language into a sequence in another language.

For example:

Source:
"How are you?"

Target:
"Comment allez-vous ?"

This is fundamentally different from ordinary classification.

A classifier usually maps one input to one label:

x → y

Machine translation instead maps:

x1, x2, ..., xT → y1, y2, ..., yU

The input and output can have different lengths.

The source and target sequences are also not necessarily aligned token-by-token.

This makes machine translation a sequence-to-sequence problem.
`
    },

    {
      type: "concept",
      title: "1. Variable-Length Input and Output",
      content: `
A major difficulty in machine translation is that the source and target sequences may have different lengths.

For example:

English:
"I like machine learning"

French:
"J'aime l'apprentissage automatique"

The number of tokens does not need to be identical.

Therefore, a model cannot simply assume:

source position 1 → target position 1
source position 2 → target position 2

Instead, the model must learn relationships between sequences.

Important characteristics:

• Input length can vary.
• Output length can vary.
• Word order can change.
• One source word can correspond to multiple target words.
• Several source words can correspond to one target word.
`
    },

    {
      type: "concept",
      title: "2. What a Translation Dataset Contains",
      content: `
A parallel translation dataset normally contains pairs:

(source sentence, target sentence)

For example:

("go", "va")
("I am happy", "je suis heureux")
("where are you", "où êtes-vous")

Each pair gives the model an example of how a source sequence corresponds to a target sequence.

During supervised training:

Input:
source sequence

Label:
target sequence

The model learns parameters that maximize the probability of the target sequence conditioned on the source sequence.
`
    },

    {
      type: "concept",
      title: "3. Why Raw Text Cannot Be Used Directly",
      content: `
Raw text contains many complications:

• Uppercase and lowercase differences
• Punctuation
• Extra spaces
• Different Unicode representations
• Rare words
• Unknown words
• Variable sentence lengths
• Empty lines
• Formatting artifacts

Before training, the text must therefore be normalized.

A typical preprocessing pipeline is:

Raw text
↓
Clean text
↓
Normalize spacing
↓
Tokenize
↓
Build vocabulary
↓
Convert tokens to integer IDs
↓
Add special tokens
↓
Create fixed-length training examples
`
    },

    {
      type: "concept",
      title: "4. Text Normalization",
      content: `
Normalization makes the representation more consistent.

Typical operations include:

• Converting text to a consistent case
• Replacing unusual whitespace
• Normalizing punctuation spacing
• Removing unnecessary formatting
• Separating punctuation when appropriate

Example:

Raw:
"Hello,   WORLD!"

Possible normalized form:

"hello , world !"

The exact preprocessing strategy depends on the language and dataset.
`
    },

    {
      type: "concept",
      title: "5. Tokenization",
      content: `
Tokenization converts a sentence into smaller units called tokens.

Character tokenization:

"hello"

→

["h", "e", "l", "l", "o"]

Word tokenization:

"deep learning is useful"

→

["deep", "learning", "is", "useful"]

Subword tokenization provides another compromise between character-level and word-level representations.

For the translation pipeline used in this course, tokenization produces discrete symbols that can later be mapped to integer IDs.
`
    },

    {
      type: "concept",
      title: "6. Vocabulary",
      content: `
A vocabulary is a mapping between tokens and integer indices.

Example:

{
  "<pad>": 0,
  "<bos>": 1,
  "<eos>": 2,
  "<unk>": 3,
  "hello": 4,
  "world": 5
}

The model does not directly process strings.

Instead:

"hello world"

becomes something like:

[4, 5]

These integers are then converted into embeddings or one-hot representations depending on the model.
`
    },

    {
      type: "concept",
      title: "7. Special Tokens",
      content: `
Sequence-to-sequence systems commonly need special symbols.

Important examples:

<pad>
Used to make sequences in a minibatch have compatible lengths.

<bos>
Beginning-of-sequence marker.

<eos>
End-of-sequence marker.

<unk>
Unknown token.

These tokens are part of the vocabulary.

The decoder can use <eos> to determine when generation should stop.
`
    },

    {
      type: "code",
      language: "python",
      title: "Building a Small Vocabulary",
      content: `
from collections import Counter

sentences = [
    ["hello", "world"],
    ["hello", "deep", "learning"],
    ["deep", "learning"]
]

counter = Counter()

for sentence in sentences:
    counter.update(sentence)

vocab = {
    "<pad>": 0,
    "<bos>": 1,
    "<eos>": 2,
    "<unk>": 3
}

for token in counter:
    if token not in vocab:
        vocab[token] = len(vocab)

print(vocab)
`
    },

    {
      type: "concept",
      title: "8. Converting Tokens to IDs",
      content: `
Once a vocabulary exists, each token receives an integer.

Example:

Vocabulary:

hello → 4
world → 5

Sentence:

["hello", "world"]

becomes:

[4, 5]

This representation can be placed into a tensor.

The neural network then operates on numerical representations rather than raw strings.
`
    },

    {
      type: "concept",
      title: "9. Unknown Tokens",
      content: `
A model may encounter a token that was not present in the training vocabulary.

Instead of crashing, the token can be mapped to:

<unk>

Example:

Known:
hello → 4

Unknown:
supercalifragilistic → <unk>

This provides a controlled fallback.

Modern subword tokenization can reduce the frequency of unknown tokens by representing rare words using smaller pieces.
`
    },

    {
      type: "concept",
      title: "10. Fixed-Length Training Sequences",
      content: `
Neural networks process minibatches efficiently when tensors have compatible shapes.

Natural sentences have different lengths.

Example:

"I like AI"
→ 3 tokens

"I really like deep learning"
→ 5 tokens

Padding can be used to create a common sequence length.

Shorter sequences receive <pad> tokens.

Example:

[4, 7, 9]
[4, 8, 7, 10, 12]

might become:

[4, 7, 9, 0, 0]
[4, 8, 7, 10, 12]

where 0 represents <pad>.
`
    },

    {
      type: "concept",
      title: "11. Valid Lengths",
      content: `
Padding introduces artificial tokens.

The model therefore needs to know which positions contain real data.

A valid-length tensor can store the number of meaningful tokens.

Example:

Sequence:
[4, 7, 9, 0, 0]

Valid length:
3

This information is important when computing losses and attention.
`
    },

    {
      type: "concept",
      title: "12. Source and Target Sequences",
      content: `
A translation example contains two sequences:

Source:
X = [x1, x2, ..., xT]

Target:
Y = [y1, y2, ..., yU]

The source is supplied to the encoder.

The target is used to train the decoder.

Because T and U can differ, the model needs an architecture specifically designed for variable-length sequence transformation.
`
    },

    {
      type: "concept",
      title: "13. Beginning and Ending the Target Sequence",
      content: `
The target sequence is often represented with boundary markers.

Example:

Original:

"bonjour monde"

Training representation:

<bos> bonjour monde <eos>

The decoder receives the beginning marker and generates tokens until it reaches <eos>.

This provides the model with an explicit beginning and stopping mechanism.
`
    },

    {
      type: "concept",
      title: "14. Padding Masks",
      content: `
Padding should not contribute to the meaningful learning signal.

Suppose a batch contains:

[hello, world, <pad>, <pad>]

The loss should focus on:

hello
world

rather than treating <pad> as a normal target.

This requires masking or valid-length handling.
`
    },

    {
      type: "concept",
      title: "15. Reading a Translation Dataset",
      content: `
A practical data loader usually performs these operations:

1. Read the raw file.
2. Separate source and target sentences.
3. Normalize text.
4. Tokenize both languages.
5. Construct source and target vocabularies.
6. Add special tokens.
7. Convert tokens to IDs.
8. Truncate or pad sequences.
9. Store valid lengths.
10. Return minibatches.

This preprocessing is part of the machine learning system, not merely administrative work.
`
    },

    {
      type: "code",
      language: "python",
      title: "Simple Sequence Padding",
      content: `
def pad_sequence(sequence, max_length, pad_value=0):
    sequence = sequence[:max_length]

    if len(sequence) < max_length:
        sequence = sequence + [pad_value] * (
            max_length - len(sequence)
        )

    return sequence


sequence = [4, 8, 12]

print(pad_sequence(sequence, 5))
`
    },

    {
      type: "concept",
      title: "16. Truncation",
      content: `
Padding handles short sequences.

Truncation handles sequences that are too long.

If the maximum length is 5:

[1, 2, 3, 4, 5, 6, 7]

can become:

[1, 2, 3, 4, 5]

The maximum length is a design decision.

A value that is too small may remove useful information.

A value that is unnecessarily large wastes memory and computation.
`
    },

    {
      type: "concept",
      title: "17. Batch Shape",
      content: `
A sequence batch is commonly represented using a tensor such as:

(batch_size, num_steps)

For example:

(32, 20)

means:

32 examples
20 positions per sequence

The embedding layer may transform this into:

(32, 20, embedding_dimension)
`
    },

    {
      type: "concept",
      title: "18. Why Two Vocabularies Are Usually Needed",
      content: `
The source and target languages generally have different vocabularies.

Therefore:

source vocabulary

and

target vocabulary

are constructed separately.

For example:

English:
hello
world
machine

French:
bonjour
monde
machine

The integer IDs do not need to correspond between the two vocabularies.
`
    },

    {
      type: "concept",
      title: "19. Data Leakage",
      content: `
Vocabulary construction and preprocessing must respect the training split.

A common mistake is to build preprocessing statistics using information from the test set.

The principle is:

Training data → fit preprocessing

Validation/test data → apply the already-defined preprocessing

This helps maintain a clean evaluation process.
`
    },

    {
      type: "concept",
      title: "20. Translation as Conditional Generation",
      content: `
The goal is not simply to classify the source sentence.

The model estimates a conditional distribution:

P(Y | X)

where:

X = source sequence
Y = target sequence

The probability of a target sequence can be decomposed autoregressively:

P(Y | X)
=
Π P(yt | y1, ..., y(t-1), X)

This is the foundation of sequence-to-sequence generation.
`
    },

    {
      type: "concept",
      title: "21. Teacher Forcing Preview",
      content: `
During training, the decoder can receive the correct previous target token.

For example:

Decoder input:

<bos> I like

Target:

I like learning

The model therefore learns:

<bos> → I
I → like
like → learning

This training strategy is called teacher forcing.

It will be studied in detail in Lesson 14.
`
    },

    {
      type: "concept",
      title: "22. Common Data Problems",
      content: `
Watch for:

• Empty sentences
• Incorrect delimiter handling
• Extremely long sequences
• Incorrect Unicode processing
• Duplicate examples
• Bad vocabulary construction
• Missing special tokens
• Incorrect padding
• Wrong valid lengths
• Source-target misalignment

Many apparent model problems are actually data pipeline problems.
`
    },

    {
      type: "concept",
      title: "23. Debugging the Dataset",
      content: `
Before training, inspect a few examples.

For every example verify:

Source text
↓
Source tokens
↓
Source IDs

Target text
↓
Target tokens
↓
Target IDs

Then verify:

• tensor shape
• vocabulary size
• valid length
• special-token placement
• padding behavior

If this stage is wrong, model debugging becomes much harder.
`
    },

    {
      type: "code",
      language: "python",
      title: "Inspecting a Batch",
      content: `
def inspect_batch(source, target, source_valid_len, target_valid_len):
    print("Source shape:", source.shape)
    print("Target shape:", target.shape)
    print("Source valid lengths:", source_valid_len)
    print("Target valid lengths:", target_valid_len)


# Example:
# inspect_batch(X, Y, X_valid_len, Y_valid_len)
`
    },

    {
      type: "concept",
      title: "24. End-to-End Data Pipeline",
      content: `
A practical translation pipeline looks like:

Parallel text
↓
Cleaning
↓
Tokenization
↓
Vocabulary construction
↓
Integer encoding
↓
Special tokens
↓
Padding/truncation
↓
Valid lengths
↓
Tensor batches
↓
Encoder-decoder model

Every stage affects the final model.
`
    },

    {
      type: "qa",
      question: "Why can source and target sequences have different lengths?",
      answer:
        "Different languages express the same meaning using different numbers of tokens and different grammatical structures. Sequence-to-sequence models therefore do not require equal input and output lengths."
    },

    {
      type: "qa",
      question: "Why is <eos> important?",
      answer:
        "It provides an explicit stopping condition for autoregressive generation."
    },

    {
      type: "qa",
      question: "Why is padding required?",
      answer:
        "Padding lets variable-length sequences be grouped into compatible tensor shapes for efficient minibatch computation."
    },

    {
      type: "qa",
      question: "Why should padding not contribute normally to the loss?",
      answer:
        "Padding represents artificial positions rather than actual target tokens, so including it as ordinary training information can distort the learning signal."
    },

    {
      type: "exercise",
      title: "Coding Exercise",
      content: `
Build a small preprocessing pipeline that:

1. Accepts sentence pairs.
2. Tokenizes them.
3. Builds separate vocabularies.
4. Adds <bos> and <eos>.
5. Converts tokens to IDs.
6. Pads sequences.
7. Returns valid lengths.

Then print three processed examples.
`
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Machine translation is a variable-length sequence-to-sequence problem.

A complete dataset pipeline includes:

• Cleaning
• Tokenization
• Vocabulary construction
• Integer encoding
• Special tokens
• Padding
• Truncation
• Valid lengths
• Batching

The resulting tensors become the input to an encoder-decoder architecture.

Understanding this pipeline is essential because many sequence-modeling failures originate in data preparation rather than the neural network itself.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Before building a powerful sequence model, build a reliable sequence dataset. Clean tokens, correct vocabulary mappings, boundary markers, padding, and valid lengths are foundational."
    }
  ]
};

export default lesson12;