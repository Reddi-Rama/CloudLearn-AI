const lesson12 = {
  id: "lesson12",
  moduleId: "module2",
  lessonNumber: 12,

  title: "Context Windows, Long-Context Modeling & KV Cache",

  subtitle:
    "Understand context length, attention memory growth, long-context challenges, positional information, and key-value caching for efficient autoregressive inference.",

  description:
    "The context window determines how much token information a language model can use at a time. This lesson explains context length, attention complexity, long-context challenges, positional representations, truncation, sliding windows, chunking, and KV caching.",

  estimatedTime: "4–5 hours",

  difficulty: "Advanced",

  learningObjectives: [
    "Understand what a context window is.",
    "Understand the difference between sequence length and context length.",
    "Understand why context length affects memory and computation.",
    "Understand quadratic attention interaction growth.",
    "Understand the difference between training context and inference context.",
    "Understand long-context challenges.",
    "Understand truncation and sliding-window strategies.",
    "Understand context management in applications.",
    "Understand positional information for long sequences.",
    "Understand key-value caching.",
    "Understand how KV cache changes autoregressive inference.",
    "Understand the memory cost of KV caching.",
    "Understand grouped-query and multi-query attention conceptually.",
    "Understand practical long-context engineering tradeoffs."
  ],

  sections: [
    {
      heading: "1. What Is a Context Window?",

      content: [
        "A context window is the amount of token information that a model can consider within a particular input-and-generation computation.",
        "The context includes tokens supplied by the application and, during generation, previously generated tokens that remain available to the model.",
        "The exact context limit depends on the model and its configuration."
      ],

      classificationTree: [
        "Context Window",
        "├── System instructions",
        "├── User input",
        "├── Previous conversation",
        "├── Retrieved information",
        "├── Tool information",
        "└── Generated tokens still inside context"
      ]
    },

    {
      heading: "2. Sequence Length vs Context Length",

      content: [
        "Sequence length refers to the number of tokens in a particular sequence being processed.",
        "Context length describes the maximum or configured amount of token context the model can handle.",
        "These terms are related but should not be treated as identical in every implementation."
      ],

      table: {
        headers: ["Term", "Meaning"],
        rows: [
          ["Sequence length", "Number of tokens in a specific sequence"],
          ["Context window", "Available token context supported by a model configuration"],
          ["Prompt length", "Tokens supplied before generation"],
          ["Generated length", "Tokens produced during generation"]
        ]
      }
    },

    {
      heading: "3. Context During Chat",

      content: [
        "A conversational application may construct a context containing system instructions, previous messages, the current user message, retrieved documents, and tool results.",
        "The model does not automatically have unlimited access to the entire conversation history.",
        "The application must manage which information is included in the model's current context."
      ],

      process: [
        "System instructions",
        "↓",
        "Conversation history",
        "↓",
        "Retrieved context",
        "↓",
        "Current user message",
        "↓",
        "Final model context"
      ]
    },

    {
      heading: "4. Why Context Length Matters",

      content: [
        "More context can provide more information to the model, but it also increases computational and memory requirements.",
        "Standard self-attention creates interactions between positions, causing the attention-score matrix to grow quadratically with sequence length."
      ],

      formulas: [
        "Attention score matrix ∈ R^(T × T)",
        "Pairwise interactions ≈ O(T²)"
      ],

      table: {
        headers: ["Tokens", "Attention score entries"],
        rows: [
          ["1,000", "1,000,000"],
          ["2,000", "4,000,000"],
          ["4,000", "16,000,000"],
          ["8,000", "64,000,000"],
          ["16,000", "256,000,000"]
        ]
      }
    },

    {
      heading: "5. Quadratic Growth Intuition",

      content: [
        "If the sequence length doubles, the number of pairwise attention positions grows by approximately four times.",
        "This is why simply increasing context length can significantly increase resource requirements."
      ],

      formulas: [
        "If T → 2T, then T² → 4T²",
        "If T → 4T, then T² → 16T²"
      ]
    },

    {
      heading: "6. Prompt Length and Generation Length",

      content: [
        "The total context during generation can include both the original prompt and the tokens generated so far.",
        "Therefore, a long prompt leaves less available room for generation when a fixed total context limit applies."
      ],

      formulas: [
        "Total context ≈ prompt tokens + generated tokens"
      ],

      process: [
        "Prompt",
        "↓",
        "Generate token 1",
        "↓",
        "Generate token 2",
        "↓",
        "⋮",
        "↓",
        "Generated tokens become part of context"
      ]
    },

    {
      heading: "7. Context Budgeting",

      content: [
        "Applications often need to divide the available context among different information sources.",
        "For example, a RAG application may need space for system instructions, user input, retrieved documents, conversation history, and the expected answer.",
        "Context budgeting is therefore an important application-engineering skill."
      ],

      table: {
        headers: ["Context component", "Example role"],
        rows: [
          ["System instructions", "Application behavior"],
          ["User message", "Current request"],
          ["History", "Conversation continuity"],
          ["Retrieved documents", "External knowledge"],
          ["Tool results", "External computation/data"],
          ["Generation budget", "Room for model response"]
        ]
      }
    },

    {
      heading: "8. What Happens When Context Is Too Long?",

      content: [
        "If the constructed input exceeds the model's supported context, the application must reduce or restructure the information.",
        "Possible strategies include truncation, summarization, retrieval, chunking, sliding windows, or selective history retention."
      ],

      classificationTree: [
        "Context Too Large",
        "├── Truncate",
        "├── Summarize",
        "├── Retrieve selectively",
        "├── Chunk information",
        "├── Sliding window",
        "└── Compress / restructure context"
      ]
    },

    {
      heading: "9. Truncation",

      content: [
        "Truncation removes some tokens from the context to fit within the available limit.",
        "A simple strategy may remove the oldest conversation messages first.",
        "However, blindly removing tokens can discard information that is important for the current task."
      ],

      comparisonTables: [
        {
          title: "Simple Context Management Strategies",
          headers: ["Strategy", "Advantage", "Tradeoff"],
          rows: [
            ["Truncation", "Simple", "May lose important information"],
            ["Summarization", "Preserves compressed information", "Summary can omit details"],
            ["Retrieval", "Selects relevant information", "Requires retrieval system"],
            ["Sliding window", "Keeps recent context", "Older information disappears"],
            ["Chunking", "Handles large documents", "Requires selection/aggregation"]
          ]
        }
      ]
    },

    {
      heading: "10. Sliding-Window Context",

      content: [
        "A sliding-window strategy keeps a moving portion of recent tokens while older tokens fall outside the active window.",
        "This can be useful for streaming or long sequences when only recent context is required."
      ],

      process: [
        "Long sequence",
        "↓",
        "Select active window",
        "↓",
        "Process window",
        "↓",
        "Move window forward",
        "↓",
        "Process next window"
      ]
    },

    {
      heading: "11. Long-Context Challenges",

      content: [
        "Supporting a larger context window is not simply a matter of increasing one number.",
        "The model must learn to use positional information over longer ranges.",
        "Training and inference costs increase.",
        "Memory requirements increase.",
        "The application must determine which information is actually useful."
      ],

      classificationTree: [
        "Long Context",
        "├── Compute cost",
        "├── Memory cost",
        "├── Positional representation",
        "├── Training requirements",
        "├── Retrieval quality",
        "└── Information selection"
      ]
    },

    {
      heading: "12. Positional Information and Long Context",

      content: [
        "Self-attention by itself does not inherently encode the order of tokens.",
        "Positional information allows the model to distinguish different positions in a sequence.",
        "Different Transformer architectures use different positional strategies, including absolute, relative, and rotary approaches."
      ],

      comparisonTables: [
        {
          title: "Positional Representation Families",
          headers: ["Approach", "General idea"],
          rows: [
            ["Absolute position", "Represent a token's position directly"],
            ["Relative position", "Represent relationships between positions"],
            ["Rotary approaches", "Encode positional information through rotations applied to representations"]
          ]
        }
      ]
    },

    {
      heading: "13. Why Position Matters",

      content: [
        "The sequences 'dog bites man' and 'man bites dog' contain the same tokens but have different orders and meanings.",
        "A Transformer therefore requires some mechanism that allows position and relative order to influence computation."
      ],

      formulas: [
        "Representation = token information + positional information"
      ]
    },

    {
      heading: "14. Long Context Does Not Mean Perfect Memory",

      content: [
        "A model being able to accept a large number of tokens does not guarantee that every token will be used equally effectively.",
        "Relevant information can be separated by large distances.",
        "The model may need to identify, combine, and reason over information distributed throughout the context.",
        "Application design therefore remains important even when the model supports a large context."
      ]
    },

    {
      heading: "15. The KV Cache Problem",

      content: [
        "Autoregressive generation repeatedly processes a growing sequence.",
        "At every generation step, previous keys and values do not need to be recomputed from scratch if they are stored.",
        "A key-value cache stores previously computed attention keys and values so they can be reused."
      ],

      process: [
        "Prompt tokens",
        "↓",
        "Compute K/V",
        "↓",
        "Store K/V cache",
        "↓",
        "Generate new token",
        "↓",
        "Compute new K/V",
        "↓",
        "Append to cache",
        "↓",
        "Reuse cache for next step"
      ]
    },

    {
      heading: "16. Why Is It Called KV Cache?",

      content: [
        "Self-attention uses queries, keys, and values.",
        "During autoregressive decoding, previous keys and values can be reused.",
        "The current token still requires a query to determine what information it should attend to."
      ],

      table: {
        headers: ["Attention component", "During autoregressive decoding"],
        rows: [
          ["Query", "Computed for the current token"],
          ["Key", "Current key computed and previous keys reused"],
          ["Value", "Current value computed and previous values reused"]
        ]
      }
    },

    {
      heading: "17. Without KV Cache",

      content: [
        "Without caching, a naive implementation may repeatedly recompute attention-related representations for tokens that have already been processed.",
        "As the generated sequence becomes longer, this repeated work becomes increasingly inefficient."
      ],

      process: [
        "Step 1",
        "↓",
        "Process token 1",
        "Step 2",
        "↓",
        "Reprocess previous context + token 2",
        "Step 3",
        "↓",
        "Reprocess previous context + token 3",
        "↓",
        "Repeated computation"
      ]
    },

    {
      heading: "18. With KV Cache",

      content: [
        "With a KV cache, previously computed keys and values are retained.",
        "The new token contributes new key and value entries while previous entries are reused."
      ],

      process: [
        "Step 1",
        "↓",
        "Compute K/V for token 1",
        "↓",
        "Cache K/V",
        "Step 2",
        "↓",
        "Compute new K/V",
        "↓",
        "Reuse cached K/V",
        "Step 3",
        "↓",
        "Compute new K/V",
        "↓",
        "Reuse existing cache"
      ]
    },

    {
      heading: "19. KV Cache Tensor Shape",

      content: [
        "For a multi-head attention implementation, cached keys and values can conceptually have dimensions involving batch size, number of heads, sequence length, and head dimension.",
        "The exact layout depends on the implementation."
      ],

      formulas: [
        "K_cache ≈ [B, H, T, d_head]",
        "V_cache ≈ [B, H, T, d_head]"
      ],

      table: {
        headers: ["Symbol", "Meaning"],
        rows: [
          ["B", "Batch size"],
          ["H", "Number of attention heads"],
          ["T", "Cached sequence length"],
          ["d_head", "Dimension per attention head"]
        ]
      }
    },

    {
      heading: "20. KV Cache Memory Growth",

      content: [
        "The KV cache itself consumes memory.",
        "As the generated context grows, the cache grows with sequence length.",
        "The cache must therefore be considered when designing high-throughput inference systems."
      ],

      formulas: [
        "Approximate KV elements ∝ B × H × T × d_head × 2"
      ],

      contentAfterFormula: [
        "The factor 2 represents storing both keys and values."
      ]
    },

    {
      heading: "21. Multi-Head Attention and KV Memory",

      content: [
        "Standard multi-head attention stores keys and values for every attention head.",
        "This can become a substantial memory requirement for long contexts and large batches."
      ],

      comparisonTables: [
        {
          title: "Attention Variants and KV Sharing",
          headers: ["Variant", "KV organization"],
          rows: [
            ["MHA", "Separate K/V for each query head"],
            ["MQA", "Multiple query heads share K/V"],
            ["GQA", "Groups of query heads share K/V"]
          ]
        }
      ]
    },

    {
      heading: "22. Multi-Query Attention",

      content: [
        "Multi-Query Attention uses multiple query heads but a smaller number of shared key and value heads.",
        "This can reduce KV-cache memory requirements during inference.",
        "The tradeoff is that the model has fewer independent key/value representations."
      ]
    },

    {
      heading: "23. Grouped-Query Attention",

      content: [
        "Grouped-Query Attention places the design between standard multi-head attention and multi-query attention.",
        "Multiple query heads are grouped so that each group shares key and value representations.",
        "This provides a compromise between attention flexibility and KV-cache efficiency."
      ],

      classificationTree: [
        "Attention",
        "├── MHA",
        "│   └── Many Q + Many K/V",
        "├── GQA",
        "│   └── Many Q + Grouped K/V",
        "└── MQA",
        "    └── Many Q + Shared K/V"
      ]
    },

    {
      heading: "24. Context Window and KV Cache Are Different",

      content: [
        "The context window defines how much token context the model can use.",
        "The KV cache is an inference optimization that stores attention key/value representations for already processed tokens.",
        "Increasing the context window does not mean that the cache disappears; in fact, longer contexts can increase cache memory requirements."
      ],

      comparisonTables: [
        {
          title: "Context Window vs KV Cache",
          headers: ["Concept", "Meaning"],
          rows: [
            ["Context window", "Maximum or configured token context"],
            ["KV cache", "Stored K/V representations used to speed autoregressive inference"],
            ["Primary concern", "Context capacity vs inference memory/compute efficiency"]
          ]
        }
      ]
    },

    {
      heading: "25. Long-Context Application Architecture",

      content: [
        "Applications with large information sources should not always place the entire source into the model context.",
        "Retrieval, chunking, summarization, compression, and selective history can reduce unnecessary context.",
        "The goal is not simply maximum context size but useful context."
      ],

      process: [
        "Large information source",
        "↓",
        "Chunk",
        "↓",
        "Index / retrieve",
        "↓",
        "Select relevant information",
        "↓",
        "Construct context",
        "↓",
        "LLM",
        "↓",
        "Answer"
      ]
    },

    {
      heading: "26. Context Management in RAG",

      content: [
        "Retrieval-Augmented Generation systems use retrieval to select potentially relevant information before sending it to the language model.",
        "This reduces the need to place an entire knowledge base inside the model's context.",
        "The retrieved content still consumes context tokens, so retrieval quality and context budgeting remain important."
      ]
    },

    {
      heading: "27. Context Compression",

      content: [
        "Context compression attempts to preserve useful information while reducing the number of tokens supplied to the model.",
        "Possible approaches include summarization, extraction of relevant passages, structured representations, and other application-specific transformations."
      ],

      table: {
        headers: ["Approach", "Main idea"],
        rows: [
          ["Summarization", "Rewrite information more compactly"],
          ["Extraction", "Keep only relevant passages"],
          ["Structured representation", "Convert information into compact fields"],
          ["Retrieval", "Select only relevant documents/chunks"]
        ]
      }
    },

    {
      heading: "28. Long Context and Attention Cost",

      formulas: [
        "Attention computation grows approximately with T²",
        "KV cache memory grows approximately with T"
      ],

      contentAfterFormula: [
        "These are different scaling behaviors: standard attention has quadratic pairwise interactions, while the cached K/V storage grows approximately linearly with the number of cached tokens for fixed model dimensions."
      ]
    },

    {
      heading: "29. Prompt Construction as an Engineering Problem",

      content: [
        "A model may have a large context window, but every token still contributes to computation and potentially to cost and latency.",
        "Good application design therefore treats context as a limited computational resource.",
        "Relevant information should be prioritized and unnecessary information should be minimized."
      ],

      classificationTree: [
        "Context Engineering",
        "├── Select",
        "├── Order",
        "├── Compress",
        "├── Retrieve",
        "├── Format",
        "└── Budget"
      ]
    },

    {
      heading: "30. Context Position and Information Retrieval",

      content: [
        "In long contexts, the location of information can matter to practical model behavior.",
        "Applications should therefore evaluate whether important information is reliably used when it appears at different positions within the context.",
        "Long-context evaluation should test realistic information-placement scenarios rather than relying only on maximum token capacity."
      ]
    },

    {
      heading: "31. Long-Context Evaluation",

      content: [
        "A model's advertised context length does not by itself establish how effectively it uses every position.",
        "Evaluation can test retrieval of information at different locations, reasoning across distant pieces of text, and performance as context length increases."
      ],

      table: {
        headers: ["Evaluation dimension", "Question"],
        rows: [
          ["Context capacity", "Can the model accept the sequence?"],
          ["Information retrieval", "Can it locate relevant information?"],
          ["Long-range reasoning", "Can it combine distant information?"],
          ["Position sensitivity", "Does information location affect performance?"],
          ["Latency", "How does performance change with context size?"],
          ["Memory", "How does resource use scale?"]
        ]
      }
    },

    {
      heading: "32. Context Window Mental Model",

      content: [
        "Think of the context window as the model's active working area.",
        "Information outside that area is not directly available to the current computation.",
        "The application therefore decides what enters the working area."
      ],

      classificationTree: [
        "Information",
        "├── Outside active context",
        "│   └── Not directly visible",
        "└── Inside active context",
        "    └── Available to model computation"
      ]
    },

    {
      heading: "33. KV Cache Mental Model",

      content: [
        "Think of the KV cache as a notebook containing attention keys and values that have already been computed.",
        "When a new token arrives, the model does not need to recompute those stored representations from scratch.",
        "It adds the new token's key and value to the cache and uses the accumulated cache during attention."
      ]
    },

    {
      heading: "34. Complete Long-Context Generation Flow",

      process: [
        "Prompt",
        "↓",
        "Tokenization",
        "↓",
        "Context validation",
        "↓",
        "Context budgeting",
        "↓",
        "Transformer",
        "↓",
        "KV cache created",
        "↓",
        "Generate token",
        "↓",
        "Append new K/V",
        "↓",
        "Generate next token",
        "↓",
        "Repeat until stopping condition"
      ]
    },

    {
      heading: "35. Practical Engineering Tradeoffs",

      comparisonTables: [
        {
          title: "Long-Context Tradeoffs",
          headers: ["Choice", "Potential benefit", "Potential cost"],
          rows: [
            ["More context", "More available information", "More computation and memory"],
            ["Truncation", "Lower resource use", "Information loss"],
            ["Summarization", "Compact context", "Possible detail loss"],
            ["Retrieval", "Relevant context selection", "Retrieval complexity"],
            ["KV caching", "Faster autoregressive decoding", "Additional memory"],
            ["GQA/MQA", "Lower KV memory", "Different attention representation capacity"]
          ]
        }
      ]
    },

    {
      heading: "36. Common Misconceptions",

      content: [
        "A large context window does not mean the model has perfect memory.",
        "Context length and KV cache are not the same thing.",
        "KV caching does not increase the model's maximum context length.",
        "A longer context can increase computational and memory requirements.",
        "The entire knowledge base does not need to be placed inside the prompt when retrieval can select relevant information.",
        "A context window is measured in tokens rather than ordinary words.",
        "Long-context evaluation should test actual information use, not just whether the model accepts the input."
      ]
    },

    {
      heading: "37. Interview Questions",

      content: [
        "What is a context window?",
        "What is the difference between context length and sequence length?",
        "Why does standard self-attention scale quadratically with sequence length?",
        "What happens when a prompt exceeds the context limit?",
        "What is context budgeting?",
        "What is a KV cache?",
        "Why does KV caching improve autoregressive inference?",
        "Why are keys and values cached rather than queries?",
        "How does KV-cache memory grow with sequence length?",
        "What is MQA?",
        "What is GQA?",
        "How are MHA, MQA, and GQA different?",
        "Why does long context create both compute and memory challenges?",
        "Why can retrieval be useful even when a model supports a large context window?"
      ]
    }
  ],

  codeExamples: [
    {
      title: "Calculate Attention Matrix Size",
      language: "python",
      code: `sequence_length = 4096

attention_entries = sequence_length ** 2

print("Attention score entries:", attention_entries)`
    },

    {
      title: "Calculate KV Cache Elements",
      language: "python",
      code: `batch_size = 1
num_heads = 32
sequence_length = 4096
head_dim = 128

kv_elements = (
    batch_size
    * num_heads
    * sequence_length
    * head_dim
    * 2
)

print("Approximate K/V elements:", kv_elements)`
    },

    {
      title: "Simple Context Budget",
      language: "python",
      code: `context_limit = 8192

system_tokens = 500
history_tokens = 2500
retrieved_tokens = 3000
user_tokens = 400
generation_budget = 1200

used = (
    system_tokens
    + history_tokens
    + retrieved_tokens
    + user_tokens
    + generation_budget
)

remaining = context_limit - used

print("Used:", used)
print("Remaining:", remaining)`
    },

    {
      title: "Simple Sliding Window",
      language: "python",
      code: `tokens = list(range(20))

window_size = 8

for start in range(0, len(tokens), 4):
    window = tokens[start:start + window_size]

    print("Window:", window)`
    }
  ],

  mathIntuition: [
    {
      concept: "Attention scaling",
      intuition:
        "Every query can interact with every key, producing a matrix whose dimensions depend on sequence length.",
      equation:
        "Attention scores ∈ R^(T × T)"
    },
    {
      concept: "KV cache",
      intuition:
        "Previously computed keys and values are stored so autoregressive decoding does not need to recreate them.",
      equation:
        "K_cache, V_cache grow with cached sequence length"
    },
    {
      concept: "Context budget",
      intuition:
        "Prompt information and generation space must fit inside the available context.",
      equation:
        "Total context ≈ input tokens + generated tokens"
    },
    {
      concept: "Long-context scaling",
      intuition:
        "Standard attention has quadratic pairwise interactions while the KV cache grows approximately linearly with sequence length.",
      equation:
        "Attention ≈ O(T²), KV memory ≈ O(T)"
    }
  ],

  exercises: [
    {
      question:
        "If sequence length doubles, approximately how does the attention-score matrix size change?",
      answer:
        "It becomes approximately four times larger."
    },
    {
      question:
        "What happens when a prompt exceeds the supported context window?",
      answer:
        "The application must reduce, restructure, summarize, retrieve, truncate, or otherwise manage the context."
    },
    {
      question:
        "What does a KV cache store?",
      answer:
        "Previously computed attention keys and values for tokens already processed during autoregressive decoding."
    },
    {
      question:
        "Why are queries not stored in the KV cache in the same way?",
      answer:
        "During autoregressive decoding, the query is primarily needed for the current token's attention operation, while previous keys and values can be reused."
    },
    {
      question:
        "Why can a large context still be inefficient?",
      answer:
        "More context can increase compute, memory, latency, and the difficulty of selecting relevant information."
    }
  ],

  codingExercises: [
    {
      title: "Calculate Attention Growth",
      difficulty: "Easy",
      task:
        "Write a program that calculates T² for several context lengths and prints the growth."
    },
    {
      title: "Context Budget Manager",
      difficulty: "Medium",
      task:
        "Create a function that receives a context limit and token counts for system instructions, history, retrieval, user input, and generation budget."
    },
    {
      title: "Sliding Window",
      difficulty: "Medium",
      task:
        "Implement a sliding-window function that returns the most recent N tokens."
    },
    {
      title: "KV Cache Shape Calculator",
      difficulty: "Medium",
      task:
        "Create a program that calculates the number of K/V cache elements from batch size, heads, sequence length, and head dimension."
    },
    {
      title: "Long-Context Simulation",
      difficulty: "Advanced",
      task:
        "Simulate a conversation whose token count grows over time and automatically remove or summarize older content when a configured context budget is exceeded."
    }
  ],

  architectureExercises: [
    {
      title: "Draw KV Cache",
      task:
        "Draw an autoregressive Transformer showing the current query and cached keys and values."
    },
    {
      title: "Design Context Budget",
      task:
        "Design a context allocation for a RAG chatbot with system instructions, conversation history, retrieved documents, user input, and output space."
    },
    {
      title: "Compare Context Strategies",
      task:
        "Draw truncation, sliding-window, summarization, and retrieval-based context management."
    },
    {
      title: "Long-Context Architecture",
      task:
        "Design an application architecture that receives a large document, chunks it, retrieves relevant content, builds a context, and sends it to an LLM."
    }
  ],

  comparisonTables: [
    {
      title: "Context Management",
      headers: ["Strategy", "Core idea"],
      rows: [
        ["Truncation", "Remove content"],
        ["Sliding window", "Keep a moving recent region"],
        ["Summarization", "Compress older information"],
        ["Retrieval", "Select relevant information"],
        ["Chunking", "Divide large sources into manageable units"]
      ]
    },
    {
      title: "Attention Variants",
      headers: ["Variant", "Query heads", "Key/value organization"],
      rows: [
        ["MHA", "Many", "Separate K/V per head"],
        ["GQA", "Many", "Grouped K/V"],
        ["MQA", "Many", "Shared K/V"]
      ]
    }
  ],

  commonMistakes: [
    "Confusing context window with KV cache.",
    "Assuming longer context automatically means better answers.",
    "Forgetting that attention interaction growth is approximately quadratic.",
    "Ignoring KV-cache memory during inference planning.",
    "Treating all context tokens as equally useful.",
    "Assuming truncation is always the best context-management strategy.",
    "Forgetting to reserve space for generated output.",
    "Confusing tokens with words.",
    "Assuming a model's maximum context size guarantees equally strong use of every position."
  ],

  summary: [
    "A context window defines the token information available to a model computation.",
    "Context includes application-provided information and, during generation, previously generated tokens.",
    "Standard self-attention creates approximately quadratic pairwise interactions.",
    "Longer contexts increase computational and memory requirements.",
    "Applications need context-budgeting strategies.",
    "Truncation, summarization, retrieval, chunking, and sliding windows are common management approaches.",
    "Positional information allows Transformers to reason about token order.",
    "KV caching stores previously computed keys and values during autoregressive inference.",
    "KV-cache memory grows with the number of cached tokens.",
    "MHA, GQA, and MQA make different tradeoffs between attention representation and KV-cache efficiency.",
    "Long-context capability should be evaluated by actual information use, not just maximum token capacity."
  ],

  keyTakeaways: [
    "Context window = active token capacity.",
    "Longer context increases resource requirements.",
    "Standard attention has approximately O(T²) pairwise interaction growth.",
    "KV cache stores reusable keys and values during generation.",
    "KV cache improves decoding efficiency but consumes memory.",
    "Context engineering is about selecting useful information, not simply maximizing token count.",
    "Retrieval and summarization remain useful even with large-context models.",
    "MHA, GQA, and MQA provide different KV-cache tradeoffs."
  ],

  visualReferences: [
    {
      title: "Attention Is All You Need",
      url: "https://arxiv.org/abs/1706.03762",
      description:
        "Original Transformer architecture and attention mechanism."
    },
    {
      title: "The Illustrated Transformer",
      url: "https://jalammar.github.io/illustrated-transformer/",
      description:
        "Visual explanation of Transformer attention and architecture."
    },
    {
      title: "Hugging Face Transformers Documentation",
      url: "https://huggingface.co/docs/transformers/",
      description:
        "Practical Transformer implementation documentation."
    },
    {
      title: "Hugging Face KV Cache Documentation",
      url: "https://huggingface.co/docs/transformers/main/en/kv_cache",
      description:
        "Documentation explaining KV-cache usage during generation."
    }
  ]
};

export default lesson12;
