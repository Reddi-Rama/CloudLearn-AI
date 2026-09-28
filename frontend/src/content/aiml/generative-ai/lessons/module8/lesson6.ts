const lesson6 = {
  id: "lesson6",
  moduleId: "module8",
  title: "Speech, Audio & Video Generative AI",
  subtitle:
    "Understand how modern AI systems represent, understand, generate, transform, and reason over speech, audio, and video.",
  description:
    "This lesson expands multimodal Generative AI beyond text and images. It covers speech recognition, text-to-speech, audio representations, spectrograms, audio generation, temporal modeling, video representations, frame sampling, video understanding, video generation, synchronization, and production multimedia pipelines.",

  difficulty: "Advanced",
  estimatedTime: "4–5 hours",

  learningObjectives: [
    "Understand how audio is represented computationally.",
    "Understand waveforms and spectrograms.",
    "Understand speech recognition.",
    "Understand text-to-speech generation.",
    "Understand audio embeddings and representations.",
    "Understand temporal information in audio.",
    "Understand video as spatial-temporal data.",
    "Understand video frame sampling.",
    "Understand video understanding pipelines.",
    "Understand video generation at a conceptual level.",
    "Understand synchronization between audio and video.",
    "Design a multimedia AI application."
  ],

  sections: [
    {
      title: "Why Audio and Video Matter",
      content: [
        "Many real-world AI applications contain more than text and images.",
        "Meetings contain speech and video.",
        "Educational content contains narration, slides, diagrams, and demonstrations.",
        "Security and monitoring systems contain long video streams.",
        "Music and media applications require audio generation and understanding.",
        "Multimodal AI therefore needs representations for temporal signals in addition to static visual and textual information."
      ]
    },

    {
      title: "Audio as a Signal",
      content: [
        "Audio is a time-varying signal.",
        "A microphone converts changes in air pressure into an electrical or digital representation.",
        "A digital audio signal is sampled at discrete time intervals.",
        "The sampling rate determines how frequently the continuous signal is measured."
      ],
      formula:
        "x[n] = x(nT_s)"
    },

    {
      title: "Sampling Rate",
      content: [
        "The sampling rate describes the number of audio samples recorded per second.",
        "Higher sampling rates can represent higher-frequency information but increase data volume.",
        "Common applications use different sampling rates depending on the required quality and bandwidth."
      ],
      formula:
        "f_s = samples / second"
    },

    {
      title: "Waveform Representation",
      content: [
        "A waveform represents amplitude over time.",
        "The horizontal axis represents time.",
        "The vertical axis represents signal amplitude.",
        "Waveforms preserve temporal information directly but are not always the most convenient representation for neural networks."
      ],
      architecture: [
        "Sound",
        "↓",
        "Microphone",
        "↓",
        "Digital Sampling",
        "↓",
        "Waveform",
        "↓",
        "Feature Extraction / Encoder",
        "↓",
        "Audio Representation"
      ]
    },

    {
      title: "Frequency Representation",
      content: [
        "Audio contains multiple frequencies.",
        "Frequency-domain representations make it easier to analyze which frequencies are present.",
        "The Fourier transform provides a mathematical mechanism for representing a signal in terms of frequency components."
      ],
      formula:
        "X(f) = Σ x[n]e^(-j2πfn)"
    },

    {
      title: "Spectrograms",
      content: [
        "A spectrogram shows how frequency content changes over time.",
        "It is often represented as a two-dimensional visual structure where one axis represents time and another represents frequency.",
        "The intensity or color represents the magnitude of the signal at a particular time and frequency.",
        "Spectrograms provide a bridge between audio signals and image-like representations."
      ],
      architecture: [
        "Audio Waveform",
        "↓",
        "Short-Time Fourier Transform",
        "↓",
        "Frequency-Time Representation",
        "↓",
        "Spectrogram",
        "↓",
        "Neural Audio Encoder"
      ]
    },

    {
      title: "Short-Time Fourier Transform",
      content: [
        "The Short-Time Fourier Transform analyzes small overlapping windows of an audio signal.",
        "Each window is transformed into frequency information.",
        "Combining these transformations creates a time-frequency representation."
      ],
      formula:
        "STFT{x[n]}(m,ω) = Σ x[n]w[n-m]e^(-jωn)"
    },

    {
      title: "Audio Representations",
      classificationTree: [
        "Audio Representation",
        "├── Waveform",
        "├── Spectrogram",
        "├── Mel Spectrogram",
        "├── Acoustic Features",
        "├── Learned Audio Embeddings",
        "└── Discrete Audio Tokens"
      ]
    },

    {
      title: "Mel Spectrogram",
      content: [
        "The mel scale approximates aspects of human auditory perception.",
        "A mel spectrogram transforms frequency information into a perceptually motivated scale.",
        "Mel representations have historically been useful in speech and audio machine-learning pipelines."
      ]
    },

    {
      title: "Speech Recognition",
      content: [
        "Automatic Speech Recognition (ASR) converts spoken audio into text.",
        "The system processes an audio signal and predicts a sequence of language tokens or characters.",
        "Modern systems may use encoder-decoder architectures, transformer-based models, or other sequence modeling approaches."
      ],
      workflow: [
        "Speech",
        "↓",
        "Audio Capture",
        "↓",
        "Preprocessing",
        "↓",
        "Audio Encoder",
        "↓",
        "Speech Representation",
        "↓",
        "Language Decoder",
        "↓",
        "Text"
      ]
    },

    {
      title: "Speech Recognition Challenges",
      failureModes: [
        {
          failure: "Background noise",
          cause: "Environmental sounds interfere with speech.",
          mitigation: "Noise reduction or robust speech models."
        },
        {
          failure: "Accents",
          cause: "Pronunciation differs from training distributions.",
          mitigation: "Diverse training and evaluation data."
        },
        {
          failure: "Multiple speakers",
          cause: "Voices overlap or speaker identity is unclear.",
          mitigation: "Speaker diarization and separation."
        },
        {
          failure: "Low-quality audio",
          cause: "Compression, distance, or microphone limitations.",
          mitigation: "Preprocessing and robust models."
        },
        {
          failure: "Domain vocabulary",
          cause: "Specialized terminology is unfamiliar.",
          mitigation: "Domain adaptation and vocabulary-aware processing."
        }
      ]
    },

    {
      title: "Speaker Diarization",
      content: [
        "Speaker diarization determines who spoke when.",
        "It can be represented as a sequence of time intervals associated with speaker identities.",
        "Diarization is useful for meetings, interviews, lectures, and multi-person conversations."
      ],
      architecture: [
        "Audio",
        "↓",
        "Voice Activity Detection",
        "↓",
        "Speaker Representation",
        "↓",
        "Speaker Clustering / Identification",
        "↓",
        "Speaker Timeline",
        "↓",
        "Speech Recognition"
      ]
    },

    {
      title: "Text-to-Speech",
      content: [
        "Text-to-Speech (TTS) converts text into spoken audio.",
        "A modern TTS pipeline may generate an intermediate representation and then synthesize an audio waveform.",
        "Controllable attributes can include voice identity, speaking rate, pitch, emotion, or style depending on the system."
      ],
      workflow: [
        "Text",
        "↓",
        "Text / Linguistic Representation",
        "↓",
        "Speech Representation",
        "↓",
        "Audio Decoder / Vocoder",
        "↓",
        "Waveform",
        "↓",
        "Audio Output"
      ]
    },

    {
      title: "Speech Generation Controls",
      content: [
        "Speech generation may support controls for speaker characteristics, pace, pitch, style, and pronunciation.",
        "The available controls depend on the model.",
        "Controllable generation is especially useful for conversational assistants, accessibility applications, education, and media production."
      ]
    },

    {
      title: "Audio Generation",
      content: [
        "Audio generation can produce speech, music, environmental sounds, sound effects, or other acoustic content.",
        "Different tasks may require different model architectures and representations.",
        "The model must capture both local acoustic structure and longer temporal relationships."
      ]
    },

    {
      title: "Audio vs Text",
      comparison: [
        {
          aspect: "Structure",
          text: "Discrete symbolic sequence",
          audio: "Continuous temporal signal"
        },
        {
          aspect: "Representation",
          text: "Tokens",
          audio: "Waveforms, spectrograms, embeddings or audio tokens"
        },
        {
          aspect: "Primary dimension",
          text: "Sequence position",
          audio: "Time and frequency"
        },
        {
          aspect: "Generation",
          text: "Token-by-token",
          audio: "Signal / token / latent generation"
        }
      ]
    },

    {
      title: "Video as Multimodal Data",
      content: [
        "Video is not simply a large image.",
        "It contains spatial information within each frame and temporal information across frames.",
        "Video can also contain audio, subtitles, metadata, and other streams.",
        "A video model therefore needs to reason about both what appears and how it changes over time."
      ],
      formula:
        "Video = Spatial Information + Temporal Information + Optional Audio"
    },

    {
      title: "Video Representation",
      content: [
        "A video can be represented as a sequence of frames.",
        "If a video contains T frames, each frame contributes spatial information.",
        "Processing every frame at full resolution can be extremely expensive.",
        "Practical systems therefore often sample frames or use specialized temporal representations."
      ],
      formula:
        "V = {F_1, F_2, ..., F_T}"
    },

    {
      title: "Frame Sampling",
      content: [
        "Frame sampling selects representative frames from a video.",
        "Uniform sampling divides the video into intervals and selects frames at regular positions.",
        "Keyframe sampling attempts to select frames that contain meaningful changes.",
        "Task-aware sampling selects frames relevant to the question."
      ],
      comparison: [
        {
          strategy: "Uniform sampling",
          advantage: "Simple and predictable",
          limitation: "May miss short events"
        },
        {
          strategy: "Keyframe sampling",
          advantage: "Focuses on visual changes",
          limitation: "Requires change detection"
        },
        {
          strategy: "Task-aware sampling",
          advantage: "Targets relevant content",
          limitation: "Requires task understanding"
        }
      ]
    },

    {
      title: "Video Understanding",
      content: [
        "Video understanding tasks include action recognition, event detection, summarization, question answering, temporal localization, and activity analysis.",
        "A model must understand not only individual frames but relationships across time."
      ],
      workflow: [
        "Video",
        "↓",
        "Frame / Segment Sampling",
        "↓",
        "Visual Encoder",
        "↓",
        "Temporal Modeling",
        "↓",
        "Multimodal Reasoning",
        "↓",
        "Answer / Summary"
      ]
    },

    {
      title: "Temporal Reasoning",
      content: [
        "Temporal reasoning determines what happened before, after, during, or between events.",
        "Questions such as 'What happened after the person entered the room?' require temporal ordering.",
        "This is different from simply recognizing objects in individual frames."
      ]
    },

    {
      title: "Video Question Answering",
      content: [
        "Video question answering combines a video with a textual question.",
        "The model must identify relevant frames or segments, understand their content, and reason about temporal relationships.",
        "Efficient retrieval of relevant segments becomes important for long videos."
      ]
    },

    {
      title: "Video Summarization",
      content: [
        "Video summarization creates a shorter representation of a longer video.",
        "A summary can be textual, visual, or both.",
        "A useful pipeline identifies important segments before generating the summary."
      ],
      architecture: [
        "Long Video",
        "↓",
        "Segment Detection",
        "↓",
        "Importance / Relevance Scoring",
        "↓",
        "Selected Segments",
        "↓",
        "Multimodal Understanding",
        "↓",
        "Summary"
      ]
    },

    {
      title: "Video Generation",
      content: [
        "Video generation attempts to create a sequence of visually and temporally coherent frames.",
        "The system must maintain consistency across time.",
        "A generated object should not randomly change identity, shape, or position from frame to frame.",
        "This temporal consistency makes video generation more difficult than generating an independent image."
      ]
    },

    {
      title: "Video Generation Challenges",
      failureModes: [
        {
          failure: "Temporal inconsistency",
          cause: "Objects change unpredictably between frames.",
          mitigation: "Use temporal modeling and consistency objectives."
        },
        {
          failure: "Motion artifacts",
          cause: "Generated motion does not follow realistic dynamics.",
          mitigation: "Improve temporal conditioning and training."
        },
        {
          failure: "Identity drift",
          cause: "Subject appearance changes across frames.",
          mitigation: "Use identity or reference conditioning."
        },
        {
          failure: "Scene instability",
          cause: "Background or geometry changes unexpectedly.",
          mitigation: "Use stronger spatial-temporal constraints."
        },
        {
          failure: "High compute cost",
          cause: "Many frames must be generated.",
          mitigation: "Use efficient representations and sampling."
        }
      ]
    },

    {
      title: "Audio-Video Synchronization",
      content: [
        "Multimedia applications often need synchronization between audio and visual events.",
        "For example, spoken words should align with visible speech or an action should occur at the appropriate time.",
        "Synchronization can be evaluated using temporal alignment between streams."
      ]
    },

    {
      title: "Multimedia AI Architecture",
      architecture: [
        "User",
        "↓",
        "Multimedia Input",
        "├── Text",
        "├── Image",
        "├── Audio",
        "└── Video",
        "↓",
        "Input Validation",
        "↓",
        "Modality-Specific Processing",
        "↓",
        "Shared / Cross-Modal Representation",
        "↓",
        "Multimodal Reasoning",
        "↓",
        "Generation / Transformation",
        "↓",
        "Output Validation",
        "↓",
        "User"
      ]
    },

    {
      title: "Example: Meeting Intelligence",
      content: [
        "A meeting assistant can combine audio, speaker identity, transcripts, presentation slides, screenshots, and meeting metadata.",
        "Speech recognition converts audio to text.",
        "Speaker diarization identifies speakers.",
        "Visual processing analyzes slides or shared screens.",
        "A multimodal model can combine these sources to create summaries, action items, or searchable meeting records."
      ]
    },

    {
      title: "Example: Educational Video Assistant",
      content: [
        "An educational video assistant can process narration, slides, diagrams, and demonstrations.",
        "The system can retrieve relevant video segments when a student asks a question.",
        "It can combine transcript evidence with visual evidence and generate a grounded explanation."
      ]
    },

    {
      title: "Multimodal Audio-Video RAG",
      content: [
        "Long audio and video collections can be indexed for retrieval.",
        "Audio can be segmented and transcribed.",
        "Video can be divided into temporal segments.",
        "Images or representative frames can be embedded.",
        "The retrieval system can return relevant segments before generation."
      ],
      architecture: [
        "Video / Audio Collection",
        "↓",
        "Segmentation",
        "↓",
        "Transcript + Frame Extraction",
        "↓",
        "Embeddings",
        "↓",
        "Multimodal Index",
        "↓",
        "User Query",
        "↓",
        "Relevant Segments",
        "↓",
        "Multimodal Generation"
      ]
    },

    {
      title: "Multimedia Context Management",
      content: [
        "Audio and video can produce huge amounts of data.",
        "Sending an entire two-hour lecture to a model for every question is inefficient.",
        "A better architecture indexes transcripts, frames, and temporal segments.",
        "At query time, only relevant evidence is retrieved."
      ]
    },

    {
      title: "Production Multimedia Pipeline",
      content: [
        "A production system should validate file formats, duration, resolution, audio channels, sampling rate, and file size.",
        "Long media should be processed asynchronously.",
        "Intermediate artifacts such as transcripts, embeddings, thumbnails, and segment metadata should be stored for reuse.",
        "Caching can significantly reduce repeated processing."
      ]
    },

    {
      title: "Latency and Cost",
      content: [
        "Multimedia workloads can be computationally expensive.",
        "Audio processing depends on duration.",
        "Video processing depends on duration, frame rate, resolution, and model architecture.",
        "Applications should therefore use segmentation, sampling, caching, batching, and asynchronous processing."
      ]
    }
  ],

  mathematicalIntuition: [
    {
      title: "Audio Sampling",
      formula:
        "N = f_s × T",
      intuition:
        "The number of samples grows with sampling rate and duration.",
      explanation:
        "f_s is samples per second and T is duration in seconds."
    },
    {
      title: "Nyquist Intuition",
      formula:
        "f_s ≥ 2f_max",
      intuition:
        "A sampling rate must be sufficiently high to represent a signal's highest relevant frequency.",
      explanation:
        "This is the basic Nyquist sampling condition."
    },
    {
      title: "Video Frame Count",
      formula:
        "N_frames = FPS × T",
      intuition:
        "Longer videos and higher frame rates create more frames to process.",
      explanation:
        "FPS is frames per second and T is duration."
    },
    {
      title: "Multimedia Processing Cost",
      formula:
        "Cost ∝ Duration × Resolution × Processing Rate",
      intuition:
        "Longer and higher-resolution media generally requires more computation.",
      explanation:
        "Actual cost depends on the architecture and implementation."
    }
  ],

  codeExamples: [
    {
      title: "Audio Duration Estimation",
      language: "python",
      code: [
        "sample_rate = 16000",
        "samples = 160000",
        "",
        "duration = samples / sample_rate",
        "",
        "print('Duration:', duration, 'seconds')"
      ],
      explanation:
        "Audio duration can be estimated from the number of samples and sampling rate."
    },
    {
      title: "Video Frame Count",
      language: "python",
      code: [
        "fps = 30",
        "duration_seconds = 120",
        "",
        "frames = fps * duration_seconds",
        "",
        "print('Frames:', frames)"
      ],
      explanation:
        "This illustrates why long videos can create large processing workloads."
    },
    {
      title: "Media Processing Request",
      language: "typescript",
      code: [
        "interface MediaRequest {",
        "  type: 'audio' | 'video';",
        "  source: string;",
        "  startTime?: number;",
        "  endTime?: number;",
        "  sampleRate?: number;",
        "  frameRate?: number;",
        "}"
      ],
      explanation:
        "A typed media request allows the application to process specific temporal regions."
    }
  ],

  comparisons: [
    {
      title: "Speech Recognition vs Text-to-Speech",
      rows: [
        {
          aspect: "Input",
          asr: "Audio",
          tts: "Text"
        },
        {
          aspect: "Output",
          asr: "Text",
          tts: "Audio"
        },
        {
          aspect: "Primary task",
          asr: "Understand speech",
          tts: "Generate speech"
        }
      ]
    },
    {
      title: "Image vs Video Understanding",
      rows: [
        {
          aspect: "Spatial information",
          image: "Primary",
          video: "Primary"
        },
        {
          aspect: "Temporal information",
          image: "Usually absent",
          video: "Essential"
        },
        {
          aspect: "Input size",
          image: "Usually smaller",
          video: "Potentially very large"
        },
        {
          aspect: "Key challenge",
          image: "Visual reasoning",
          video: "Visual + temporal reasoning"
        }
      ]
    },
    {
      title: "Waveform vs Spectrogram",
      rows: [
        {
          aspect: "Representation",
          waveform: "Amplitude over time",
          spectrogram: "Frequency over time"
        },
        {
          aspect: "Frequency visibility",
          waveform: "Indirect",
          spectrogram: "Explicit"
        },
        {
          aspect: "Typical use",
          waveform: "Raw audio processing",
          spectrogram: "Audio feature analysis"
        }
      ]
    }
  ],

  exercises: [
    "Explain how digital audio is represented.",
    "What is a sampling rate?",
    "Explain a waveform.",
    "What is a spectrogram?",
    "Explain the purpose of the STFT.",
    "What is automatic speech recognition?",
    "What is speaker diarization?",
    "Explain text-to-speech.",
    "Why is video more difficult than image generation?",
    "What is temporal reasoning?",
    "Explain frame sampling.",
    "What is video question answering?",
    "Why is temporal consistency important in video generation?",
    "Explain audio-video synchronization."
  ],

  codingExercises: [
    "Calculate audio duration from samples and sampling rate.",
    "Calculate the number of video frames.",
    "Create a media-processing request interface.",
    "Implement a simple video frame sampling function.",
    "Create an audio segment metadata structure.",
    "Build a simple multimedia processing queue item."
  ],

  architectureExercises: [
    "Design a speech-to-text service.",
    "Design a text-to-speech application.",
    "Design a meeting transcription and summarization system.",
    "Design a video question-answering system.",
    "Design a multimedia RAG system.",
    "Design an educational video assistant."
  ],

  scenarioExercises: [
    {
      scenario:
        "A university wants to automatically summarize two-hour recorded lectures.",
      tasks: [
        "Design the ingestion pipeline.",
        "Explain audio and video segmentation.",
        "Explain transcript and frame generation.",
        "Design the retrieval layer.",
        "Design the final multimodal summary."
      ]
    },
    {
      scenario:
        "A user asks a question about an event that happened at a specific point in a long video.",
      tasks: [
        "Explain why sending the entire video may be inefficient.",
        "Design temporal retrieval.",
        "Identify relevant evidence.",
        "Design the final answer pipeline."
      ]
    }
  ],

  interviewQuestions: [
    "How is audio represented digitally?",
    "What is a sampling rate?",
    "What is a waveform?",
    "What is a spectrogram?",
    "What is the STFT?",
    "What is automatic speech recognition?",
    "What is speaker diarization?",
    "What is text-to-speech?",
    "What is video representation?",
    "Why does video require temporal modeling?",
    "What is frame sampling?",
    "What is temporal reasoning?",
    "What is video question answering?",
    "What causes temporal inconsistency in generated video?",
    "How would you design a multimedia RAG system?"
  ],

  commonMistakes: [
    "Treating audio as ordinary text.",
    "Ignoring sampling rate.",
    "Confusing waveform and spectrogram representations.",
    "Ignoring background noise.",
    "Ignoring speaker identity in multi-speaker audio.",
    "Processing every video frame unnecessarily.",
    "Ignoring temporal relationships.",
    "Treating video as independent images.",
    "Ignoring synchronization between audio and video.",
    "Sending entire long media files into expensive model calls.",
    "Failing to cache transcripts and extracted representations."
  ],

  summary: [
    "Audio is a temporal signal that can be represented as waveforms, spectrograms, or learned embeddings.",
    "Speech recognition converts audio into language.",
    "Text-to-speech converts language into generated speech.",
    "Speaker diarization identifies who spoke when.",
    "Video combines spatial and temporal information.",
    "Frame sampling reduces the computational burden of long videos.",
    "Video understanding requires temporal reasoning.",
    "Video generation must maintain temporal consistency.",
    "Audio-video applications require synchronization.",
    "Production multimedia systems benefit from segmentation, retrieval, caching, and asynchronous processing."
  ],

  keyTakeaways: [
    "Audio introduces time and frequency into multimodal AI.",
    "Video adds temporal structure on top of visual information.",
    "Efficient multimedia AI depends heavily on segmentation and retrieval.",
    "Speech systems require both acoustic and linguistic representations.",
    "Video systems must reason about events across time.",
    "Multimedia RAG can make long audio and video collections searchable and useful."
  ],

  visualReferences: [
    {
      title: "Audio Processing Pipeline",
      type: "flowchart",
      description:
        "Show audio capture, waveform, spectrogram, encoder, representation, and speech output."
    },
    {
      title: "Speech Recognition Architecture",
      type: "architecture",
      description:
        "Show speech entering an audio encoder and producing text."
    },
    {
      title: "Video Understanding Pipeline",
      type: "diagram",
      description:
        "Show video segmentation, frame sampling, visual encoding, temporal modeling, and reasoning."
    },
    {
      title: "Multimedia RAG",
      type: "architecture",
      description:
        "Show audio/video ingestion, segmentation, embeddings, multimodal indexing, retrieval, and generation."
    }
  ]
};

export default lesson6;