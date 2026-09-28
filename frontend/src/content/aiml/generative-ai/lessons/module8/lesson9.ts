const lesson9 = {
  id: "module8-lesson9",
  moduleId: "module8",
  title: "Multimodal Evaluation, Safety & Production Systems",
  subtitle: "Evaluating reliability, grounding, security and production readiness",
  description:
    "Learn how to evaluate multimodal AI systems across accuracy, grounding, safety, robustness, latency, cost and reliability while designing production safeguards.",

  sections: [
    {
      title: "1. Why Multimodal Evaluation Is Difficult",
      content:
        "Multimodal systems must be evaluated across multiple information channels. A response may be fluent but visually incorrect, visually accurate but poorly grounded, or correct but unsafe.",
      bullets: [
        "Text quality",
        "Visual understanding",
        "Audio understanding",
        "Temporal reasoning",
        "Cross-modal grounding",
        "Instruction following",
        "Safety",
        "Latency",
        "Cost",
        "Reliability"
      ]
    },

    {
      title: "2. Evaluation Layers",
      architecture: [
        "Input Validation",
        "Modality Understanding",
        "Cross-Modal Grounding",
        "Reasoning",
        "Generation",
        "Safety",
        "System Reliability",
        "Production Monitoring"
      ]
    },

    {
      title: "3. Modality-Level Evaluation",
      table: {
        headers: ["Modality", "Evaluation Focus"],
        rows: [
          ["Text", "Factuality, relevance, structure"],
          ["Image", "Object recognition, spatial understanding, OCR"],
          ["Audio", "Speech recognition, speaker and acoustic understanding"],
          ["Video", "Temporal understanding and event recognition"],
          ["Documents", "Text, layout, tables and visual grounding"]
        ]
      }
    },

    {
      title: "4. Grounding",
      content:
        "Grounding measures whether an answer is supported by the supplied evidence. In multimodal systems, evidence can come from text, images, audio segments, video frames or document regions.",
      bullets: [
        "Identify the evidence used.",
        "Check whether the answer is supported.",
        "Detect unsupported claims.",
        "Preserve references to relevant regions or timestamps."
      ]
    },

    {
      title: "5. Multimodal Hallucination",
      content:
        "A multimodal hallucination occurs when a system generates information that is not supported by the available multimodal evidence.",
      examples: [
        "Describing an object that is not present.",
        "Inventing text that cannot be read from an image.",
        "Claiming that an event occurred in a video when it did not.",
        "Attributing speech to the wrong speaker.",
        "Inventing information not present in a document."
      ]
    },

    {
      title: "6. Visual Grounding Evaluation",
      content:
        "Visual grounding can be evaluated by checking whether generated claims correspond to actual image regions or visual evidence.",
      metrics: [
        "Region accuracy",
        "Object recognition accuracy",
        "Spatial relationship accuracy",
        "OCR accuracy",
        "Grounded claim rate"
      ]
    },

    {
      title: "7. Audio Evaluation",
      content:
        "Audio systems require evaluation of both transcription and semantic understanding.",
      metrics: [
        "Word Error Rate",
        "Character Error Rate",
        "Speaker attribution accuracy",
        "Audio event detection accuracy",
        "Semantic response accuracy"
      ],
      formula: "WER = (S + D + I) / N"
    },

    {
      title: "8. Video Evaluation",
      content:
        "Video evaluation must test both spatial and temporal understanding.",
      bullets: [
        "Frame-level recognition",
        "Temporal ordering",
        "Event detection",
        "Action understanding",
        "Long-video retrieval",
        "Video question answering"
      ]
    },

    {
      title: "9. Cross-Modal Consistency",
      content:
        "A strong multimodal system should produce consistent interpretations across modalities.",
      examples: [
        "Audio transcript should agree with video evidence.",
        "Image description should agree with the image.",
        "Document text should agree with extracted table information.",
        "Generated answers should respect both user instructions and visual evidence."
      ]
    },

    {
      title: "10. Safety Evaluation",
      content:
        "Safety testing should cover the model, input pipeline, tools and application layer.",
      bullets: [
        "Unsafe input handling",
        "Sensitive information exposure",
        "Prompt injection",
        "Malicious documents",
        "Adversarial images",
        "Untrusted audio",
        "Unsafe generated outputs",
        "Tool misuse"
      ]
    },

    {
      title: "11. Multimodal Prompt Injection",
      content:
        "Prompt injection can appear inside images, documents, screenshots, web pages or other modalities. A system should distinguish user instructions from untrusted content.",
      architecture: [
        "User Instruction",
        "Untrusted Multimodal Content",
        "Content Isolation",
        "Instruction Boundary",
        "Model",
        "Output Validation"
      ]
    },

    {
      title: "12. Privacy",
      content:
        "Images, recordings, documents and videos can contain sensitive information. Production systems must define how inputs are stored, processed, logged and deleted.",
      bullets: [
        "Minimize unnecessary data retention.",
        "Restrict access to uploaded content.",
        "Avoid sensitive data in ordinary logs.",
        "Define retention policies.",
        "Protect stored media and derived representations."
      ]
    },

    {
      title: "13. Adversarial Testing",
      content:
        "Evaluation should intentionally test unusual, ambiguous and adversarial inputs.",
      examples: [
        "Low-resolution images",
        "Rotated documents",
        "Noisy audio",
        "Long videos",
        "Conflicting modalities",
        "Misleading visual context",
        "Prompt injection inside images",
        "Malformed files"
      ]
    },

    {
      title: "14. Golden Evaluation Sets",
      content:
        "A golden dataset contains carefully selected examples with expected behavior or trusted reference answers.",
      architecture: [
        "Golden Inputs",
        "Model",
        "Generated Outputs",
        "Evaluation",
        "Regression Comparison"
      ],
      bullets: [
        "Keep representative examples.",
        "Include difficult cases.",
        "Include known failure cases.",
        "Run the set after model or prompt changes."
      ]
    },

    {
      title: "15. Human Evaluation",
      content:
        "Human evaluation remains important when correctness requires judgment, especially for complex visual reasoning, multimodal explanation quality and ambiguous tasks.",
      criteria: [
        "Correctness",
        "Relevance",
        "Grounding",
        "Completeness",
        "Clarity",
        "Safety"
      ]
    },

    {
      title: "16. Automated Evaluation",
      content:
        "Automated evaluation can measure repeatable properties such as exact matches, retrieval metrics, transcription quality, structural validity and similarity.",
      bullets: [
        "Automated tests are fast.",
        "They are useful for regression testing.",
        "They should not be treated as the only source of truth."
      ]
    },

    {
      title: "17. Evaluation Matrix",
      table: {
        headers: ["Dimension", "Example Measurement"],
        rows: [
          ["Accuracy", "Task success rate"],
          ["Grounding", "Evidence-supported claim rate"],
          ["Safety", "Unsafe-output detection"],
          ["Robustness", "Performance under perturbations"],
          ["Latency", "p50 / p95 response time"],
          ["Cost", "Cost per request"],
          ["Reliability", "Failure rate"],
          ["User Experience", "Human preference / task completion"]
        ]
      }
    },

    {
      title: "18. Latency",
      content:
        "Multimodal applications may spend time uploading files, preprocessing inputs, running encoders, generating responses and executing tools.",
      formula: "T_total = T_upload + T_preprocess + T_encode + T_inference + T_postprocess",
      bullets: [
        "Measure each stage independently.",
        "Use asynchronous processing for long-running tasks.",
        "Cache reusable representations where appropriate."
      ]
    },

    {
      title: "19. Cost",
      content:
        "Multimodal cost depends on input size, representation length, model choice, output length and processing time.",
      formula: "Cost_total = Cost_input + Cost_inference + Cost_output + Cost_storage + Cost_tools",
      bullets: [
        "Resize unnecessary images.",
        "Sample long videos intelligently.",
        "Cache embeddings.",
        "Route simple tasks to smaller models.",
        "Avoid repeatedly processing identical media."
      ]
    },

    {
      title: "20. Observability",
      content:
        "Production multimodal systems need visibility into what happened during every request.",
      architecture: [
        "Request ID",
        "Input Metadata",
        "Model Route",
        "Latency",
        "Token / Media Usage",
        "Tool Calls",
        "Validation Results",
        "Final Response"
      ]
    },

    {
      title: "21. Failure Handling",
      content:
        "A production system should degrade gracefully when a modality fails.",
      examples: [
        "Image processing fails → continue with text if possible.",
        "Audio transcription fails → request a transcript or retry.",
        "Video is too long → process selected segments.",
        "Primary model unavailable → use an approved fallback.",
        "Output validation fails → reject or regenerate safely."
      ]
    },

    {
      title: "22. Production Architecture",
      architecture: [
        "Client",
        "API Gateway",
        "Authentication",
        "Input Validation",
        "Media Processing",
        "Model Router",
        "Multimodal Model",
        "RAG / Tools",
        "Output Validation",
        "Safety Layer",
        "Observability",
        "Response"
      ]
    },

    {
      title: "23. Evaluation Score",
      content:
        "A simple conceptual evaluation score can combine multiple normalized dimensions.",
      formula:
        "Score = w_a A + w_g G + w_s S + w_r R",
      bullets: [
        "A = accuracy",
        "G = grounding",
        "S = safety",
        "R = reliability",
        "Weights should reflect the actual application requirements."
      ]
    },

    {
      title: "24. Python Evaluation Skeleton",
      code: `def evaluate_response(expected, actual, grounded, safe):
    return {
        "exact_match": expected == actual,
        "grounded": grounded,
        "safe": safe
    }

result = evaluate_response(
    expected="expected answer",
    actual="model answer",
    grounded=True,
    safe=True
)

print(result)`
    },

    {
      title: "25. Production Principles",
      bullets: [
        "Evaluate the complete system, not only the model.",
        "Test every modality independently.",
        "Test cross-modal consistency.",
        "Measure grounding separately from fluency.",
        "Treat uploaded content as untrusted input.",
        "Protect sensitive media.",
        "Monitor latency and cost.",
        "Keep regression datasets.",
        "Design explicit fallbacks.",
        "Validate generated outputs before downstream actions."
      ]
    }
  ],

  comparisons: [
    {
      title: "Automated vs Human Evaluation",
      headers: ["Automated", "Human"],
      rows: [
        ["Fast", "Slower"],
        ["Repeatable", "Context-sensitive"],
        ["Good for regression", "Good for nuanced quality"],
        ["Limited by metric design", "Requires evaluator consistency"]
      ]
    }
  ],

  exercises: [
    "Explain why multimodal evaluation requires more than text-quality metrics.",
    "Define multimodal hallucination.",
    "Explain grounding.",
    "Describe how prompt injection can appear inside an image.",
    "Explain why golden datasets are useful."
  ],

  codingExercises: [
    "Create a Python evaluator that checks grounded and safe flags.",
    "Calculate WER for a simple transcription example.",
    "Create a latency measurement wrapper.",
    "Build a multimodal request logging structure that excludes sensitive content."
  ],

  architectureExercises: [
    "Design a secure multimodal evaluation pipeline.",
    "Design production monitoring for an image-question-answering system.",
    "Design fallback behavior for a multimodal assistant.",
    "Design a privacy-preserving media-processing architecture."
  ],

  scenarioExercises: [
    "The model confidently describes an object that does not exist. Design an evaluation test.",
    "A document contains malicious instructions hidden in an image. Design defenses.",
    "A video assistant becomes too expensive for long videos. Design an optimization strategy.",
    "The image model fails but the text model remains available. Design graceful degradation."
  ],

  interviewQuestions: [
    "Why is multimodal evaluation difficult?",
    "What is multimodal grounding?",
    "What is multimodal hallucination?",
    "How can images contain prompt injection?",
    "What is a golden evaluation dataset?",
    "Why is human evaluation still important?",
    "How would you evaluate a video assistant?",
    "How would you reduce multimodal inference cost?",
    "What should be monitored in production?"
  ],

  commonMistakes: [
    "Evaluating only generated text.",
    "Ignoring grounding.",
    "Logging sensitive media.",
    "Trusting instructions contained inside untrusted documents or images.",
    "Ignoring long-video cost.",
    "Using only one benchmark.",
    "Deploying without regression testing."
  ],

  summary:
    "Multimodal production systems require evaluation across modality understanding, grounding, safety, robustness, latency, cost and reliability. Strong systems use golden datasets, automated tests, human evaluation, adversarial testing, privacy controls, observability and graceful failure handling.",

  keyTakeaways: [
    "Multimodal evaluation must cover every relevant modality.",
    "Grounding checks whether claims are supported by evidence.",
    "Multimodal inputs can contain security threats such as prompt injection.",
    "Privacy is especially important for images, audio, video and documents.",
    "Golden datasets support regression testing.",
    "Production systems need monitoring, fallbacks and output validation."
  ]
};

export default lesson9;