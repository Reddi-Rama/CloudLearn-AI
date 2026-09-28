import lesson1 from "./lesson1";
import lesson2 from "./lesson2";
import lesson3 from "./lesson3";
import lesson4 from "./lesson4";
import lesson5 from "./lesson5";
import lesson6 from "./lesson6";
import lesson7 from "./lesson7";
import lesson8 from "./lesson8";
import lesson9 from "./lesson9";
import lesson10 from "./lesson10";

import about from "./about";
import practice from "./practice";
import project from "./project";

export const module8Lessons = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10
];

const module8 = {
  id: "module8",
  title: "Multimodal Generative AI",
  subtitle: "Text, Vision, Audio, Video & Multimodal AI Systems",
  description:
    "Learn how modern generative AI systems understand and generate across text, images, audio and video, then apply those capabilities to RAG, agents, evaluation and production systems.",

  moduleNumber: 8,
  lessonCount: 10,

  lessons: module8Lessons,

  specialContent: {
    about,
    practice,
    project
  },

  learningPath: [
    {
      id: "lesson1",
      title: "Multimodal AI Foundations",
      focus: "Understanding AI systems that work across multiple modalities"
    },
    {
      id: "lesson2",
      title: "Multimodal Representations & Vision-Language Models",
      focus: "Representations, alignment and multimodal model architecture"
    },
    {
      id: "lesson3",
      title: "Multimodal Model Architecture & Context",
      focus: "How multimodal systems combine and reason over different inputs"
    },
    {
      id: "lesson4",
      title: "Multimodal Prompting & Instruction Following",
      focus: "Designing reliable prompts for text, images and structured multimodal tasks"
    },
    {
      id: "lesson5",
      title: "Image Generation, Editing & Diffusion",
      focus: "Diffusion models, image generation and controlled editing"
    },
    {
      id: "lesson6",
      title: "Speech, Audio & Video Generative AI",
      focus: "Audio representations, speech systems and video intelligence"
    },
    {
      id: "lesson7",
      title: "Multimodal RAG & Grounded Multimodal Reasoning",
      focus: "Retrieving and reasoning over text, images, audio and video evidence"
    },
    {
      id: "lesson8",
      title: "Multimodal Agents & Tool Use",
      focus: "Building agents that perceive, reason, plan and act"
    },
    {
      id: "lesson9",
      title: "Multimodal Evaluation, Safety & Production Systems",
      focus: "Evaluating, securing and monitoring multimodal applications"
    },
    {
      id: "lesson10",
      title: "Multimodal AI Capstone & Production Architecture",
      focus: "Engineering a complete production-oriented multimodal AI system"
    }
  ],

  conceptMap: {
    title: "Multimodal Generative AI",
    branches: [
      {
        title: "Foundations",
        topics: [
          "Multimodal AI",
          "Representations",
          "Vision-Language Models",
          "Multimodal Context"
        ]
      },
      {
        title: "Prompting",
        topics: [
          "Multimodal Prompts",
          "Visual Grounding",
          "Structured Outputs",
          "Prompt Security"
        ]
      },
      {
        title: "Image Generation",
        topics: [
          "Diffusion",
          "Text-to-Image",
          "Image-to-Image",
          "Inpainting",
          "Outpainting"
        ]
      },
      {
        title: "Audio & Video",
        topics: [
          "Speech Recognition",
          "Text-to-Speech",
          "Audio Generation",
          "Video Understanding",
          "Video Generation"
        ]
      },
      {
        title: "Multimodal RAG",
        topics: [
          "Cross-Modal Retrieval",
          "Multimodal Embeddings",
          "Evidence",
          "Grounding",
          "Citations"
        ]
      },
      {
        title: "Agents",
        topics: [
          "Perception",
          "Planning",
          "Tool Calling",
          "Memory",
          "Action"
        ]
      },
      {
        title: "Production",
        topics: [
          "Evaluation",
          "Safety",
          "Privacy",
          "Observability",
          "Latency",
          "Cost",
          "Reliability"
        ]
      }
    ]
  },

  mathematicalTopics: [
    "Vector similarity",
    "Cosine similarity",
    "Diffusion noise processes",
    "Sampling",
    "Spectral representation",
    "STFT",
    "Mel spectrograms",
    "WER",
    "Retrieval scoring",
    "Latency",
    "Cost",
    "Cache hit rate"
  ],

  programmingTopics: [
    "Multimodal API integration",
    "Image processing",
    "OCR",
    "Audio processing",
    "Video processing",
    "Embedding pipelines",
    "Vector search",
    "Structured outputs",
    "Tool calling",
    "Agent loops",
    "Evaluation pipelines"
  ],

  retrievalTopics: [
    "Multimodal embeddings",
    "Cross-modal retrieval",
    "Vector databases",
    "Hybrid retrieval",
    "Reranking",
    "Evidence construction",
    "Grounded generation"
  ],

  agentTopics: [
    "Multimodal perception",
    "Planning",
    "Tool selection",
    "Tool execution",
    "Memory",
    "Loop detection",
    "Permission systems",
    "Agent evaluation"
  ],

  productionTopics: [
    "System architecture",
    "Input validation",
    "Output validation",
    "Security",
    "Privacy",
    "Prompt injection",
    "Observability",
    "Monitoring",
    "Cost optimization",
    "Latency optimization",
    "Reliability",
    "Graceful degradation",
    "Asynchronous processing"
  ],

  assessmentAreas: [
    "Multimodal foundations",
    "Multimodal prompting",
    "Image generation",
    "Audio and speech",
    "Video AI",
    "Multimodal RAG",
    "Multimodal agents",
    "Evaluation",
    "Safety",
    "Production architecture"
  ],

  navigation: {
    previousModule: {
      id: "module7",
      title: "Retrieval-Augmented Generation"
    },
    nextModule: {
      id: "module9",
      title: "LLM Application Engineering"
    }
  },

  specialPages: [
    {
      id: "about",
      title: "About Module 8",
      type: "about"
    },
    {
      id: "practice",
      title: "Module Practice",
      type: "practice"
    },
    {
      id: "project",
      title: "Module Project",
      type: "project"
    }
  ],

  completionCriteria: [
    "Complete all 10 lessons.",
    "Complete module practice.",
    "Complete the multimodal architecture exercises.",
    "Complete the final capstone project.",
    "Demonstrate understanding of multimodal RAG.",
    "Demonstrate understanding of multimodal agents.",
    "Demonstrate understanding of evaluation and safety.",
    "Explain the production architecture of the capstone."
  ]
};

export {
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  about,
  practice,
  project
};

export default module8;