const lesson = {
  id: "module4-lesson11",
  moduleId: "module4",
  lessonNumber: 11,
  title: "Machine Translation and Sequence Dataset Preparation",
  subtitle:
    "Preparing variable-length language pairs for neural sequence-to-sequence models",
  duration: "110–130 minutes",
  difficulty: "Advanced",

  objectives: [
    "Understand machine translation as a sequence-to-sequence problem.",
    "Understand parallel datasets.",
    "Understand source and target sequences.",
    "Understand tokenization.",
    "Understand vocabulary construction.",
    "Understand special sequence tokens.",
    "Understand padding.",
    "Understand fixed-length sequence loading.",
    "Understand valid-length information.",
    "Prepare batches for encoder-decoder models."
  ],

  introduction: `
Machine translation is different from ordinary next-token language modeling.

In language modeling:

input and output belong to the same sequence.

In machine translation:

one sequence must be transformed into another sequence.

Example:

Source:
"I love machine learning."

Target:
"J'aime l'apprentissage automatique."

The source and target can have different lengths.

The source chapter introduces this as a sequence-to-sequence problem and prepares the dataset before introducing encoder-decoder models. 
`,

  sections: [
    {
      title: "1. What Is Machine Translation?",
      content: `
Machine translation maps:

source language sequence

to:

target language sequence.

Formally:

X = (x₁, x₂, ..., xₙ)

becomes:

Y = (y₁, y₂, ..., yₘ)

Importantly:

n ≠ m

in general.
`
    },

    {
      title: "2. Why This Is a Sequence-to-Sequence Problem",
      content: `
The input and output are both sequences.

But:

• they can have different lengths
• tokens are not aligned one-to-one
• output tokens depend on previous output decisions
• the target sequence must be generated
`
    },

    {
      title: "3. Parallel Dataset",
      content: `
A machine-translation dataset contains paired examples.

Example:

English:
I like books.

French:
J'aime les livres.

Each source sentence is associated with its corresponding target sentence.
`
    },

    {
      title: "4. Source and Target",
      content: `
For every example:

source = input sequence

target = expected output sequence

During training:

source → model → predicted target

The loss compares the predicted target with the actual target.
`
    },

    {
      title: "5. Why Raw Text Cannot Directly Enter the Model",
      content: `
Neural networks operate on numerical tensors.

Therefore:

raw text
 ↓
tokenization
 ↓
token IDs
 ↓
tensor
 ↓
model
`
    },

    {
      title: "6. Tokenization",
      content: `
Tokenization divides text into manageable units.

Depending on the system, tokens can be:

• words
• subwords
• characters

For a simple word tokenizer:

"I like books"

becomes:

["I", "like", "books"]
`
    },

    {
      title: "7. Basic Tokenizer",
      code: `
sentence = "I like machine learning"

tokens = sentence.lower().split()

print(tokens)
`
    },

    {
      title: "8. Building a Vocabulary",
      content: `
A vocabulary maps tokens to integer IDs.

Example:

<pad> → 0
<bos> → 1
<eos> → 2
<unk> → 3
i → 4
like → 5
books → 6

The exact IDs are arbitrary.
`
    },

    {
      title: "9. Special Tokens",
      content: `
Important special tokens include:

<pad>

Used to fill unused positions.

<bos>

Beginning of sequence.

<eos>

End of sequence.

<unk>

Unknown token.
`
    },

    {
      title: "10. Why <bos> Is Needed",
      content: `
The decoder needs a signal indicating:

"Start generating now."

Therefore a special beginning-of-sequence token can be supplied at the beginning of the target-side input.
`
    },

    {
      title: "11. Why <eos> Is Needed",
      content: `
The decoder needs to know when generation should stop.

Therefore:

<eos>

marks the end of the target sequence.

During inference, generation can stop once <eos> is produced. :chatgpt-content-reference{index="20"}
`
    },

    {
      title: "12. Unknown Tokens",
      content: `
If a token is not present in the vocabulary, it can be mapped to:

<unk>

This prevents an unseen token from causing an invalid vocabulary lookup.
`
    },

    {
      title: "13. Converting Tokens to IDs",
      code: `
vocab = {
    "<pad>": 0,
    "<bos>": 1,
    "<eos>": 2,
    "<unk>": 3,
    "i": 4,
    "like": 5,
    "books": 6
}

tokens = [
    "i",
    "like",
    "books"
]

ids = [
    vocab.get(token, vocab["<unk>"])
    for token in tokens
]

print(ids)
`
    },

    {
      title: "14. Variable-Length Sequences",
      content: `
Consider:

Sequence A:
I like books

Sequence B:
I like machine learning

They contain different numbers of tokens.

Neural networks usually process batches using tensors of consistent dimensions.

Therefore padding is required.
`
    },

    {
      title: "15. Padding",
      content: `
Suppose the longest sequence contains 5 tokens.

Shorter sequences can be padded:

[4, 5, 6]

becomes:

[4, 5, 6, 0, 0]

where 0 represents <pad>.
`
    },

    {
      title: "16. Fixed-Length Sequence Loading",
      content: `
A dataset loader can choose:

num_steps

as the maximum sequence length.

Each sequence is converted into a fixed-size representation.

Sequences shorter than the maximum receive padding.
`
    },

    {
      title: "17. Valid Length",
      content: `
Padding should not be treated as real linguistic information.

Therefore we can record:

valid_length

which tells us how many positions contain actual tokens.

Example:

tokens:

[4, 5, 6, 0, 0]

valid_length:

3
`
    },

    {
      title: "18. Why Valid Length Matters",
      content: `
Suppose:

prediction length = 5

but actual target length = 3.

The last two positions are padding.

Loss calculations should avoid treating those padding positions as real targets.

This motivates masked loss functions.
`
    },

    {
      title: "19. Padding Example",
      code: `
sequences = [
    [4, 5, 6],
    [7, 8]
]

max_len = 3

padded = [
    [4, 5, 6],
    [7, 8, 0]
]

valid_lengths = [
    3,
    2
]
`
    },

    {
      title: "20. Source and Target Padding",
      content: `
Machine translation has two sides.

Source:

source tokens
+
source padding

Target:

target tokens
+
target padding

The source and target maximum lengths do not need to be identical.
`
    },

    {
      title: "21. Preparing Decoder Input",
      content: `
Suppose the target is:

Ils regardent .

Training decoder input can be:

<bos> Ils regardent .

while the prediction target is:

Ils regardent . <eos>

This one-position shift is the foundation of teacher forcing. :chatgpt-content-reference{index="21"}
`
    },

    {
      title: "22. Teacher Forcing",
      content: `
During training, the decoder can receive the true previous target token.

Example:

decoder input:

<bos> Ils regardent .

expected output:

Ils regardent . <eos>

This gives the decoder the correct history during training.
`
    },

    {
      title: "23. Training vs Inference",
      content: `
Training:

use ground-truth previous tokens.

Inference:

use previously generated tokens.

Therefore:

training and inference are not identical.
`
    },

    {
      title: "24. Simple Dataset Structure",
      code: `
const examples = [
  {
    source: ["i", "like", "books"],
    target: ["j'aime", "les", "livres"]
  },
  {
    source: ["hello"],
    target: ["bonjour"]
  }
];
`
    },

    {
      title: "25. Dataset Class Concept",
      code: `
class TranslationDataset {
  constructor(
    public examples: {
      source: number[];
      target: number[];
    }[]
  ) {}

  get length() {
    return this.examples.length;
  }

  getItem(index: number) {
    return this.examples[index];
  }
}
`
    },

    {
      title: "26. Batch Preparation",
      content: `
A training batch should contain:

source tensor

target input tensor

target output tensor

source valid lengths

target valid lengths

This gives the encoder-decoder training process the information it needs.
`
    },

    {
      title: "27. Example Batch",
      code: `
source =
[
  [4, 5, 6, 2, 0],
  [7, 8, 2, 0, 0]
]

source_valid_lengths =
[4, 3]

target_input =
[
  [1, 9, 10, 11, 0],
  [1, 12, 2, 0, 0]
]

target_output =
[
  [9, 10, 11, 2, 0],
  [12, 2, 0, 0, 0]
]
`
    },

    {
      title: "28. Masking Concept",
      content: `
A mask identifies valid positions.

For:

[9, 10, 11, 2, 0]

valid length = 4

mask:

[1, 1, 1, 1, 0]

The padded position should not contribute to the loss.
`
    },

    {
      title: "29. Why Sequence Lengths Matter",
      content: `
Ignoring sequence lengths can cause the model to learn from padding.

That can produce:

• incorrect loss
• distorted gradients
• misleading metrics
• inefficient training
`
    },

    {
      title: "30. Dataset Pipeline",
      content: `
Raw parallel text
 ↓
cleaning
 ↓
tokenization
 ↓
vocabulary
 ↓
token IDs
 ↓
special tokens
 ↓
padding
 ↓
valid lengths
 ↓
batches
 ↓
encoder-decoder
`
    },

    {
      title: "31. Data Cleaning",
      content: `
Typical preprocessing may include:

• removing unwanted whitespace
• normalizing text
• consistent casing where appropriate
• removing malformed examples
• filtering extremely long sequences
• ensuring source-target pairs remain aligned
`
    },

    {
      title: "32. Alignment Is Critical",
      content: `
If source example 10 is accidentally paired with target example 11, the model receives incorrect supervision.

Therefore every preprocessing transformation must preserve:

source ↔ target

alignment.
`
    },

    {
      title: "33. Dataset Inspection",
      code: `
for example in examples[:5]:
    print("SOURCE:", example["source"])
    print("TARGET:", example["target"])
    print()
`
    },

    {
      title: "34. Practical Debugging Checklist",
      content: `
Before training, inspect:

• vocabulary size
• special-token IDs
• source lengths
• target lengths
• padding IDs
• valid lengths
• source-target alignment
• BOS placement
• EOS placement
• tensor shapes
`
    },

    {
      title: "35. Common Mistakes",
      content: `
Mistake 1:
Forgetting <bos>.

Mistake 2:
Forgetting <eos>.

Mistake 3:
Counting padding as valid tokens.

Mistake 4:
Shifting target sequences incorrectly.

Mistake 5:
Breaking source-target alignment.

Mistake 6:
Using the source vocabulary for target tokens without justification.

Mistake 7:
Ignoring unknown tokens.
`
    },

    {
      title: "36. Interview Questions",
      content: `
1. What is machine translation?

2. Why is translation a sequence-to-sequence problem?

3. Why can source and target lengths differ?

4. What is tokenization?

5. What is a vocabulary?

6. Why do we need <pad>?

7. What are <bos> and <eos>?

8. What is <unk>?

9. Why is padding required?

10. What is valid length?

11. Why should padding be masked during loss calculation?

12. What is teacher forcing?

13. How does training differ from inference?
`
    },

    {
      title: "37. Coding Challenge",
      content: `
Build a miniature translation dataset pipeline.

Requirements:

1. Store 20 source-target sentence pairs.
2. Tokenize both languages.
3. Build separate vocabularies.
4. Add <pad>, <bos>, <eos>, <unk>.
5. Convert tokens to IDs.
6. Pad sequences.
7. Calculate valid lengths.
8. Create decoder inputs.
9. Create decoder targets.
10. Print a complete training batch.
`
    }
  ],

  keyTakeaways: [
    "Machine translation maps one sequence to another sequence.",
    "Source and target sequences can have different lengths.",
    "Raw text must be tokenized and converted to IDs.",
    "Special tokens such as BOS, EOS, PAD, and UNK are important.",
    "Variable-length sequences require padding for batching.",
    "Valid lengths identify real tokens.",
    "Padding should normally be masked during loss calculation.",
    "Teacher forcing feeds ground-truth previous target tokens during training.",
    "Correct source-target alignment is essential."
  ],

  summary: `
Machine translation requires more than a normal language model because the input and output are separate variable-length sequences.

The data pipeline is:

parallel text
 ↓
tokenization
 ↓
vocabulary
 ↓
token IDs
 ↓
BOS/EOS/UNK/PAD
 ↓
padding
 ↓
valid lengths
 ↓
training batches

The prepared data can then be passed to an encoder-decoder architecture.

The source's next section introduces the encoder-decoder architecture, which will be the focus of the next lesson. :chatgpt-content-reference{index="22"}
`
};

export default lesson;