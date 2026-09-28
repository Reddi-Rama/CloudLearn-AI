const lesson2 = {
  id: "module8-lesson2",
  moduleId: "module8",
  title: "Multimodal Data & Representations",
  subtitle: "How text, images, audio and video become machine-readable representations",
  description:
    "Learn how multimodal systems represent different data types, align information across modalities, create shared representations, and preserve relationships between text, vision, audio and video.",

  sections: [
    {
      title: "1. What Is Multimodal Data?",
      content:
        "Multimodal data contains information expressed through more than one type of signal or representation. A modern AI application may combine text, images, audio, video, tables, documents and structured metadata.",
      bullets: [
        "Text represents language and symbolic information.",
        "Images represent spatial and visual information.",
        "Audio represents temporal acoustic information.",
        "Video combines spatial and temporal visual information.",
        "Documents may contain text, layout, tables and images simultaneously.",
        "Metadata can provide timestamps, labels, locations and other structured context."
      ]
    },

    {
      title: "2. Major Modalities",
      content:
        "Different modalities have different structures, sampling mechanisms and information densities.",
      table: {
        headers: ["Modality", "Typical Representation", "Important Properties"],
        rows: [
          ["Text", "Tokens / embeddings", "Sequential and semantic"],
          ["Image", "Pixels / visual embeddings", "Spatial"],
          ["Audio", "Waveform / spectrogram", "Temporal and frequency-based"],
          ["Video", "Frames / video embeddings", "Spatial + temporal"],
          ["Document", "Text + layout + regions", "Semantic + structural"],
          ["Table", "Rows / columns / cells", "Structured relationships"]
        ]
      }
    },

    {
      title: "3. From Raw Data to Representation",
      content:
        "Raw multimodal information is transformed into representations that neural networks can process.",
      architecture: [
        "Raw Input",
        "Preprocessing",
        "Modality Encoder",
        "Feature Representation",
        "Projection / Alignment",
        "Shared Multimodal Space",
        "Multimodal Model"
      ],
      bullets: [
        "Images may be resized, normalized and divided into patches.",
        "Text is tokenized and converted into embeddings.",
        "Audio may be sampled and transformed into spectrogram representations.",
        "Video may be represented as sampled frames or temporal features."
      ]
    },

    {
      title: "4. Text Representation",
      content:
        "Text is commonly represented using tokens and dense vectors. A token is mapped to an embedding, and contextual layers transform those embeddings into representations whose meaning depends on surrounding information.",
      formula: "x_i = E(token_i)",
      bullets: [
        "Token IDs provide discrete identifiers.",
        "Embeddings provide continuous representations.",
        "Hidden states encode contextual information.",
        "The same word can receive different contextual representations depending on its surrounding text."
      ]
    },

    {
      title: "5. Image Representation",
      content:
        "Vision models convert visual information into numerical representations. A common approach divides an image into patches and transforms each patch into a feature vector.",
      formula: "z_i = f(patch_i)",
      bullets: [
        "Pixels contain low-level visual information.",
        "Patches provide local spatial regions.",
        "Visual encoders extract increasingly meaningful features.",
        "High-level embeddings can represent objects, scenes and visual relationships."
      ]
    },

    {
      title: "6. Audio Representation",
      content:
        "Audio is a continuous signal that changes over time. AI systems may represent it directly as a waveform or transform it into frequency-domain representations such as spectrograms.",
      formula: "x(t) → STFT(x) → Spectrogram → Audio Features",
      bullets: [
        "Sampling converts a continuous signal into discrete measurements.",
        "Spectrograms expose frequency information over time.",
        "Mel representations emphasize perceptually relevant frequency ranges.",
        "Audio embeddings can capture speech, acoustic events and semantic information."
      ]
    },

    {
      title: "7. Video Representation",
      content:
        "Video contains both spatial and temporal information. A model must understand what appears in individual frames and how those visual elements change over time.",
      architecture: [
        "Video",
        "Frame Sampling",
        "Visual Encoding",
        "Temporal Modeling",
        "Video Representation"
      ],
      bullets: [
        "Frame sampling controls computational cost.",
        "Temporal modeling captures movement and sequence.",
        "Long videos may require hierarchical or segmented processing."
      ]
    },

    {
      title: "8. Shared Representation Spaces",
      content:
        "Multimodal systems often need representations from different modalities to become comparable. Projection layers or joint training objectives can align representations into a shared semantic space.",
      formula: "z_text = f_text(x),   z_image = f_image(v)",
      bullets: [
        "Semantically related inputs should produce related representations.",
        "Different encoders can specialize in different modalities.",
        "A shared space enables cross-modal retrieval and reasoning."
      ]
    },

    {
      title: "9. Cross-Modal Alignment",
      content:
        "Alignment means connecting information across modalities. For example, an image of a bicycle and the sentence describing that bicycle should be represented as semantically related information.",
      bullets: [
        "Text-to-image alignment",
        "Image-to-text alignment",
        "Audio-to-text alignment",
        "Video-to-text alignment",
        "Text-to-video retrieval",
        "Cross-modal grounding"
      ]
    },

    {
      title: "10. Embeddings and Similarity",
      content:
        "Once information has been converted into vectors, similarity functions can compare representations.",
      formula: "cos(x,y) = (x · y) / (||x|| ||y||)",
      bullets: [
        "Cosine similarity compares vector direction.",
        "Dot product measures vector interaction.",
        "Euclidean distance measures geometric separation.",
        "The correct similarity function depends on the embedding system."
      ]
    },

    {
      title: "11. Multimodal Fusion",
      content:
        "Fusion combines information from multiple modalities so that the model can reason over them together.",
      table: {
        headers: ["Fusion Type", "Idea", "Example"],
        rows: [
          ["Early Fusion", "Combine representations early", "Concatenate features"],
          ["Intermediate Fusion", "Combine learned features", "Cross-attention"],
          ["Late Fusion", "Combine model outputs", "Weighted predictions"],
          ["Cross-Attention", "One modality attends to another", "Text attending to image features"]
        ]
      }
    },

    {
      title: "12. Cross-Attention",
      content:
        "Cross-attention allows one representation to query information from another modality.",
      formula: "Attention(Q,K,V) = softmax(QKᵀ / √d_k)V",
      bullets: [
        "Queries may come from text.",
        "Keys and values may come from image features.",
        "The model learns which visual regions are relevant to the textual representation."
      ]
    },

    {
      title: "13. Multimodal Context",
      content:
        "A multimodal model does not simply receive independent inputs. The system must construct a useful context containing the right information in the right structure.",
      architecture: [
        "User Request",
        "Text Context",
        "Visual Context",
        "Audio / Video Context",
        "Metadata",
        "Context Assembly",
        "Multimodal Model"
      ]
    },

    {
      title: "14. Information Density",
      content:
        "Different modalities contain different amounts of information. A single image can contain many objects, relationships and visual details, while an audio segment can encode speech, tone and environmental sounds.",
      bullets: [
        "More information does not automatically mean better reasoning.",
        "Relevant information must be selected.",
        "Compression can reduce cost but may remove useful evidence.",
        "Context selection is therefore an important engineering problem."
      ]
    },

    {
      title: "15. Multimodal Representation Pipeline",
      content:
        "A production system generally converts raw inputs into normalized representations before reasoning or retrieval.",
      architecture: [
        "Input Collection",
        "Validation",
        "Preprocessing",
        "Modality-Specific Encoding",
        "Alignment",
        "Fusion",
        "Context Construction",
        "Reasoning / Generation",
        "Evaluation"
      ]
    },

    {
      title: "16. Mathematical Intuition",
      content:
        "The central mathematical idea is that heterogeneous information can be transformed into vectors that preserve useful semantic relationships.",
      formula:
        "raw modality → encoder → embedding z ∈ R^d → transformation → multimodal representation",
      bullets: [
        "The encoder maps raw input into a vector space.",
        "The dimension d determines the size of the representation.",
        "Training objectives encourage useful relationships in that space."
      ]
    },

    {
      title: "17. Practical Example",
      content:
        "Consider an educational assistant receiving a screenshot of a programming error together with a textual question. The image encoder extracts visual information from the screenshot while the language representation captures the user's question. The model then combines both sources to explain the error."
    },

    {
      title: "18. Python Representation Example",
      code: `import numpy as np

text_embedding = np.array([0.2, 0.4, 0.7])
image_embedding = np.array([0.3, 0.5, 0.6])

similarity = (
    np.dot(text_embedding, image_embedding)
    / (
        np.linalg.norm(text_embedding)
        * np.linalg.norm(image_embedding)
    )
)

print("Similarity:", similarity)`
    },

    {
      title: "19. Engineering Considerations",
      bullets: [
        "Normalize inputs before encoding when required.",
        "Keep modality metadata with the representation.",
        "Track timestamps for audio and video.",
        "Preserve document layout when layout is important.",
        "Avoid unnecessary conversion between representations.",
        "Monitor embedding dimensions and storage requirements.",
        "Evaluate cross-modal retrieval separately from generation."
      ]
    },

    {
      title: "20. Key Design Principle",
      content:
        "Multimodal AI is not simply about accepting many file types. The important engineering problem is preserving meaning while transforming heterogeneous information into representations that a model can jointly reason over."
    }
  ],

  comparisons: [
    {
      title: "Unimodal vs Multimodal AI",
      headers: ["Unimodal", "Multimodal"],
      rows: [
        ["Primarily one modality", "Combines multiple modalities"],
        ["Simpler preprocessing", "Requires modality-specific preprocessing"],
        ["Limited cross-modal reasoning", "Supports cross-modal reasoning"],
        ["Usually simpler evaluation", "Requires modality-aware evaluation"]
      ]
    }
  ],

  exercises: [
    "Explain why an image cannot simply be treated as ordinary text.",
    "Compare text, image, audio and video representations.",
    "Explain the purpose of a shared embedding space.",
    "Describe early, intermediate and late fusion.",
    "Explain why video is more computationally expensive than a single image."
  ],

  codingExercises: [
    "Implement cosine similarity between two vectors.",
    "Create a simple multimodal representation pipeline using NumPy arrays.",
    "Write a function that normalizes embedding vectors.",
    "Build a small similarity search over text and image feature vectors."
  ],

  architectureExercises: [
    "Design an architecture for a screenshot-based coding assistant.",
    "Design a document system that preserves text, tables and images.",
    "Design a video-question-answering pipeline with frame sampling."
  ],

  scenarioExercises: [
    "A document contains text and an important diagram. Explain how you would preserve both.",
    "A video is two hours long. Design a cost-aware representation strategy.",
    "Text and image embeddings appear unrelated even for matching examples. Identify possible causes."
  ],

  interviewQuestions: [
    "What is multimodal AI?",
    "What is a modality?",
    "Why are embeddings important in multimodal systems?",
    "What is multimodal fusion?",
    "What is cross-attention?",
    "What is a shared representation space?",
    "Why is video more difficult than image understanding?",
    "What is cross-modal retrieval?"
  ],

  commonMistakes: [
    "Treating every modality as if it has the same representation.",
    "Ignoring temporal information in audio and video.",
    "Removing document layout when layout carries meaning.",
    "Assuming embedding similarity automatically guarantees semantic correctness.",
    "Sending unnecessary multimodal data into the model."
  ],

  summary:
    "Multimodal AI depends on converting different forms of information into useful representations and aligning those representations so that a model can reason across modalities. Text, images, audio, video and documents require different preprocessing and encoding strategies. Fusion, cross-attention and shared representation spaces enable cross-modal understanding.",

  keyTakeaways: [
    "Every modality has its own representation pipeline.",
    "Embeddings convert complex inputs into useful vector representations.",
    "Alignment connects semantically related information across modalities.",
    "Fusion combines information from different modalities.",
    "Cross-attention enables one modality to use information from another.",
    "Good multimodal systems preserve relevant semantic and structural information."
  ]
};

export default lesson2;