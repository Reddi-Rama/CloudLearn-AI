export const lesson = {
  id: "lesson20",
  title: "Computer Vision Capstone and End-to-End Project Workflow",
  subtitle:
    "Designing a complete real-world computer vision project from problem definition to deployment",
  duration: "180–240 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "This lesson combines the complete computer-vision workflow into one practical engineering process. The goal is not simply to train a model, but to demonstrate that you can take an open-ended vision problem and convert it into a reproducible AI system.",
    },

    {
      type: "heading",
      title: "2. The Complete Lifecycle",
    },
    {
      type: "process",
      steps: [
        "Problem definition",
        "Requirement analysis",
        "Dataset discovery",
        "Data collection",
        "Annotation",
        "Exploratory analysis",
        "Preprocessing",
        "Augmentation",
        "Baseline model",
        "Training",
        "Validation",
        "Evaluation",
        "Error analysis",
        "Improvement",
        "Testing",
        "Model export",
        "Deployment",
        "Monitoring",
        "Documentation",
      ],
    },

    {
      type: "heading",
      title: "3. Step 1 — Define the Problem",
    },
    {
      type: "paragraph",
      text:
        "Begin with the exact output required by the application. Determine whether the problem is image classification, object detection, semantic segmentation, instance segmentation, image generation, or another vision task.",
    },

    {
      type: "heading",
      title: "4. Step 2 — Define Success",
    },
    {
      type: "paragraph",
      text:
        "Define measurable success criteria before training. For classification this might include accuracy and per-class recall. For detection it may include precision, recall, and mAP. For segmentation, IoU and Dice can be useful.",
    },

    {
      type: "heading",
      title: "5. Step 3 — Dataset Analysis",
    },
    {
      type: "bullet",
      items: [
        "Number of images",
        "Number of classes",
        "Class distribution",
        "Image resolutions",
        "Image quality",
        "Label quality",
        "Duplicate images",
        "Missing labels",
        "Potential data leakage",
      ],
    },

    {
      type: "heading",
      title: "6. Data Leakage",
    },
    {
      type: "paragraph",
      text:
        "Data leakage occurs when information from evaluation data influences training. Near-duplicate images appearing across train and validation sets can produce misleadingly strong results.",
    },

    {
      type: "heading",
      title: "7. Train–Validation–Test Split",
    },
    {
      type: "paragraph",
      text:
        "Training data is used to optimize parameters. Validation data helps choose configurations and monitor generalization. The test set should remain isolated until final evaluation.",
    },

    {
      type: "heading",
      title: "8. Baseline First",
    },
    {
      type: "paragraph",
      text:
        "A simple baseline provides a reference point. Without a baseline, it becomes difficult to determine whether architectural complexity or additional engineering actually improves the system.",
    },

    {
      type: "heading",
      title: "9. Baseline Example",
    },
    {
      type: "code",
      language: "python",
      code: `baseline = nn.Sequential(
    nn.Conv2d(3, 32, 3, padding=1),
    nn.ReLU(),
    nn.MaxPool2d(2),

    nn.Conv2d(32, 64, 3, padding=1),
    nn.ReLU(),
    nn.AdaptiveAvgPool2d(1),

    nn.Flatten(),
    nn.Linear(64, num_classes)
)`,
    },

    {
      type: "heading",
      title: "10. Establish a Reproducible Environment",
    },
    {
      type: "bullet",
      items: [
        "Record Python version.",
        "Record PyTorch version.",
        "Record CUDA version when applicable.",
        "Freeze dependencies.",
        "Record dataset version.",
        "Set random seeds.",
        "Save configuration files.",
      ],
    },

    {
      type: "heading",
      title: "11. Experiment Configuration",
    },
    {
      type: "code",
      language: "python",
      code: `config = {
    "image_size": 224,
    "batch_size": 32,
    "epochs": 20,
    "learning_rate": 1e-3,
    "weight_decay": 1e-4,
    "model": "resnet18"
}

print(config)`,
    },

    {
      type: "heading",
      title: "12. Experiment Tracking",
    },
    {
      type: "paragraph",
      text:
        "Every meaningful experiment should record its configuration and results. Otherwise, improvements become difficult to reproduce.",
    },

    {
      type: "heading",
      title: "13. Training Metrics",
    },
    {
      type: "code",
      language: "python",
      code: `history = {
    "train_loss": [],
    "valid_loss": [],
    "train_metric": [],
    "valid_metric": []
}`,
    },

    {
      type: "heading",
      title: "14. Learning Curves",
    },
    {
      type: "paragraph",
      text:
        "Training and validation curves help identify underfitting, overfitting, unstable optimization, and insufficient training.",
    },

    {
      type: "heading",
      title: "15. Overfitting",
    },
    {
      type: "paragraph",
      text:
        "If training performance continues improving while validation performance deteriorates, the model may be memorizing training-specific patterns rather than learning features that generalize.",
    },

    {
      type: "heading",
      title: "16. Improving Generalization",
    },
    {
      type: "bullet",
      items: [
        "Data augmentation",
        "Weight decay",
        "Dropout where appropriate",
        "Transfer learning",
        "More representative data",
        "Better validation methodology",
        "Simpler models",
      ],
    },

    {
      type: "heading",
      title: "17. Transfer Learning",
    },
    {
      type: "paragraph",
      text:
        "Pretrained vision models can provide useful visual representations. Fine-tuning allows the model to adapt these representations to a target dataset.",
    },

    {
      type: "heading",
      title: "18. Error Analysis",
    },
    {
      type: "process",
      steps: [
        "Collect incorrect predictions",
        "Group by failure type",
        "Inspect images",
        "Identify recurring patterns",
        "Form a hypothesis",
        "Change one component",
        "Retrain",
        "Compare",
      ],
    },

    {
      type: "heading",
      title: "19. Confusion Matrix",
    },
    {
      type: "paragraph",
      text:
        "For classification tasks, a confusion matrix reveals which classes are being confused. It can expose problems that are hidden by aggregate accuracy.",
    },

    {
      type: "heading",
      title: "20. Detection Error Analysis",
    },
    {
      type: "bullet",
      items: [
        "False positive",
        "False negative",
        "Wrong class",
        "Poor localization",
        "Duplicate detection",
        "Small-object failure",
        "Occlusion failure",
      ],
    },

    {
      type: "heading",
      title: "21. Segmentation Error Analysis",
    },
    {
      type: "bullet",
      items: [
        "Boundary errors",
        "Missing regions",
        "Extra regions",
        "Class confusion",
        "Small-object segmentation failure",
        "Background leakage",
      ],
    },

    {
      type: "heading",
      title: "22. Model Comparison",
    },
    {
      type: "code",
      language: "python",
      code: `results = [
    {
        "model": "BaselineCNN",
        "metric": 0.78,
        "latency_ms": 12.4
    },
    {
        "model": "ResNet18",
        "metric": 0.86,
        "latency_ms": 18.1
    }
]

for result in results:
    print(result)`,
    },

    {
      type: "heading",
      title: "23. Accuracy Is Not the Only Metric",
    },
    {
      type: "paragraph",
      text:
        "A model can have strong accuracy but excessive latency, memory consumption, or deployment complexity. Practical model selection should consider the actual requirements of the application.",
    },

    {
      type: "heading",
      title: "24. Model Export",
    },
    {
      type: "code",
      language: "python",
      code: `torch.save(
    model.state_dict(),
    "final_model.pt"
)`,
    },

    {
      type: "heading",
      title: "25. Inference Interface",
    },
    {
      type: "code",
      language: "python",
      code: `def predict_image(model, image):
    model.eval()

    with torch.no_grad():
        logits = model(image)

    prediction = logits.argmax(dim=1)

    return prediction`,
    },

    {
      type: "heading",
      title: "26. Frontend Integration",
    },
    {
      type: "paragraph",
      text:
        "A computer-vision model can be connected to a frontend through an API. The frontend sends an image, the backend performs preprocessing and inference, and the response contains the prediction information required by the UI.",
    },

    {
      type: "heading",
      title: "27. Example API Contract",
    },
    {
      type: "code",
      language: "json",
      code: `{
  "model_version": "vision-v1",
  "prediction": {
    "class": "example",
    "confidence": 0.93
  },
  "inference_ms": 21.4
}`,
    },

    {
      type: "heading",
      title: "28. Monitoring",
    },
    {
      type: "paragraph",
      text:
        "After deployment, monitor inference latency, error rates, input distributions, prediction distributions, and model performance when ground-truth feedback becomes available.",
    },

    {
      type: "heading",
      title: "29. Data Drift",
    },
    {
      type: "paragraph",
      text:
        "A model can degrade when production images differ substantially from training data. Changes in camera position, lighting, object types, environments, or image quality can produce distribution shift.",
    },

    {
      type: "heading",
      title: "30. Model Drift",
    },
    {
      type: "paragraph",
      text:
        "Model performance can change as the real-world environment evolves. Periodic evaluation and retraining may therefore be necessary.",
    },

    {
      type: "heading",
      title: "31. Documentation",
    },
    {
      type: "bullet",
      items: [
        "Problem statement",
        "Dataset description",
        "Label format",
        "Preprocessing",
        "Augmentation",
        "Architecture",
        "Training configuration",
        "Evaluation metrics",
        "Results",
        "Known limitations",
        "Deployment instructions",
      ],
    },

    {
      type: "heading",
      title: "32. Project Folder Structure",
    },
    {
      type: "code",
      language: "text",
      code: `computer-vision-project/
├── data/
├── notebooks/
├── src/
│   ├── datasets/
│   ├── models/
│   ├── training/
│   ├── evaluation/
│   └── inference/
├── configs/
├── checkpoints/
├── reports/
├── requirements.txt
└── README.md`,
    },

    {
      type: "heading",
      title: "33. Final Project Workflow",
    },
    {
      type: "process",
      steps: [
        "Define problem",
        "Acquire dataset",
        "Inspect data",
        "Clean annotations",
        "Create split",
        "Build baseline",
        "Train",
        "Validate",
        "Analyze errors",
        "Improve",
        "Test",
        "Export",
        "Deploy",
        "Monitor",
        "Document",
      ],
    },

    {
      type: "heading",
      title: "34. Capstone Requirements",
    },
    {
      type: "paragraph",
      text:
        "For the final computer-vision project, select one problem such as image classification, object detection, or semantic segmentation. Build the complete pipeline and document every major engineering decision.",
    },

    {
      type: "heading",
      title: "35. Required Deliverables",
    },
    {
      type: "bullet",
      items: [
        "Dataset description",
        "Exploratory analysis",
        "Preprocessing pipeline",
        "Training code",
        "Validation code",
        "Evaluation report",
        "Saved model",
        "Inference script",
        "API or application integration",
        "Error analysis",
        "README",
      ],
    },

    {
      type: "heading",
      title: "36. Technical Report",
    },
    {
      type: "paragraph",
      text:
        "The report should explain the problem, dataset, preprocessing, architecture, mathematical reasoning, training configuration, experiments, results, failures, improvements, limitations, and deployment approach.",
    },

    {
      type: "heading",
      title: "37. Interview Preparation",
    },
    {
      type: "qa",
      question: "Why did you select your architecture?",
      answer:
        "The answer should connect the architecture to the task requirements, dataset characteristics, computational constraints, and required output.",
    },
    {
      type: "qa",
      question: "How did you detect overfitting?",
      answer:
        "By comparing training and validation behavior and examining whether validation performance stopped improving or deteriorated.",
    },
    {
      type: "qa",
      question: "How did you improve your model?",
      answer:
        "By analyzing specific failure patterns and testing targeted changes rather than randomly changing many hyperparameters at once.",
    },
    {
      type: "qa",
      question: "How would you deploy the model?",
      answer:
        "Package the trained model with its exact preprocessing and post-processing pipeline, expose inference through an appropriate interface, and monitor latency and failures.",
    },

    {
      type: "heading",
      title: "38. Final Practical Challenge",
    },
    {
      type: "paragraph",
      text:
        "Build a complete computer-vision application. The application must accept an image, preprocess it, run a trained model, return a prediction, display the result, record inference time, and provide a clear explanation of the model's limitations.",
    },

    {
      type: "heading",
      title: "39. What You Should Be Able to Explain",
    },
    {
      type: "bullet",
      items: [
        "Why CNNs work well for images.",
        "How convolution extracts local features.",
        "Why padding and stride matter.",
        "How pooling changes spatial resolution.",
        "How modern CNN architectures improve representation learning.",
        "How RNNs and Transformers process sequences.",
        "How object detection differs from classification.",
        "How anchor boxes and IoU work.",
        "How SSD and R-CNN families approach detection.",
        "How semantic segmentation works.",
        "Why transposed convolution is useful.",
        "How fully convolutional networks produce dense predictions.",
        "How neural style transfer optimizes image representations.",
        "How transfer learning helps small datasets.",
        "How to deploy and evaluate a vision model.",
      ],
    },

    {
      type: "heading",
      title: "40. Final Summary",
    },
    {
      type: "paragraph",
      text:
        "Computer vision engineering combines mathematical understanding, deep learning architectures, data engineering, experimentation, evaluation, software engineering, and deployment. The strongest projects demonstrate the complete lifecycle rather than only showing a trained model.",
    },

    {
      type: "keyTakeaway",
      title: "Final Module Takeaway",
      text:
        "A computer-vision developer should be able to move from pixels to predictions and from predictions to a reliable application: understand the data, select the right architecture, train it correctly, evaluate failures, improve it systematically, and deploy it responsibly.",
    },
  ],
};

export default lesson;