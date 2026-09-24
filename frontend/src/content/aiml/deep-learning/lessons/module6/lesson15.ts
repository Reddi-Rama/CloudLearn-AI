export const lesson = {
  id: "lesson15",
  title: "Computer Vision Project Workflow",
  subtitle:
    "From raw images to a complete production-oriented deep learning vision system",
  duration: "180–220 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "This lesson brings together the computer-vision techniques studied throughout the module into one complete engineering workflow. The goal is not merely to train a CNN, but to understand how a computer-vision developer approaches a problem from requirements and data through experimentation, evaluation, debugging, deployment preparation, and documentation.",
    },

    {
      type: "heading",
      title: "2. Start With the Problem",
    },
    {
      type: "paragraph",
      text:
        "Before selecting a model, clearly define what the system must predict. Computer-vision problems can look visually similar while requiring completely different outputs.",
    },

    {
      type: "heading",
      title: "3. Choose the Task",
    },
    {
      type: "bullet",
      items: [
        "Image classification",
        "Object detection",
        "Semantic segmentation",
        "Instance segmentation",
        "Image generation or style transfer",
      ],
    },

    {
      type: "heading",
      title: "4. Task-to-Output Mapping",
    },
    {
      type: "code",
      language: "text",
      code: `Classification
Image → Class

Detection
Image → Class + Bounding Box

Semantic Segmentation
Image → Class for every pixel

Instance Segmentation
Image → Object instances + masks`,
    },

    {
      type: "heading",
      title: "5. Define the Data Contract",
    },
    {
      type: "paragraph",
      text:
        "Document exactly what one training example contains: image format, dimensions, channels, labels, coordinate system, class identifiers, missing-value conventions, and metadata.",
    },

    {
      type: "heading",
      title: "6. Dataset Audit",
    },
    {
      type: "process",
      steps: [
        "Count images",
        "Inspect image dimensions",
        "Inspect channels",
        "Check corrupted files",
        "Check labels",
        "Count classes",
        "Inspect class distribution",
        "Inspect annotation quality",
        "Visualize examples",
      ],
    },

    {
      type: "heading",
      title: "7. Check Class Imbalance",
    },
    {
      type: "paragraph",
      text:
        "If some classes contain substantially more examples than others, ordinary accuracy may hide poor performance on rare classes. Class frequencies should therefore be measured before training.",
    },

    {
      type: "code",
      language: "python",
      code: `from collections import Counter

counts = Counter(labels)

for class_id, count in counts.items():
    print(class_id, count)`,
    },

    {
      type: "heading",
      title: "8. Visualize the Dataset",
    },
    {
      type: "paragraph",
      text:
        "Always visualize representative examples. For detection, draw bounding boxes. For segmentation, overlay masks. For classification, inspect class labels and image quality.",
    },

    {
      type: "heading",
      title: "9. Data Leakage",
    },
    {
      type: "paragraph",
      text:
        "Training and validation data must be separated correctly. Near-duplicate images or images from the same source sequence can create misleading validation results if they are split incorrectly.",
    },

    {
      type: "heading",
      title: "10. Train/Validation/Test",
    },
    {
      type: "paragraph",
      text:
        "Training data are used for parameter updates. Validation data help choose configurations and detect overfitting. A test set should be reserved for final evaluation when its labels are available.",
    },

    {
      type: "heading",
      title: "11. Establish a Baseline",
    },
    {
      type: "paragraph",
      text:
        "Do not immediately build the largest possible network. Start with a simple baseline that runs correctly. A baseline provides a reference point for measuring later improvements.",
    },

    {
      type: "heading",
      title: "12. Baseline CNN",
    },
    {
      type: "code",
      language: "python",
      code: `class BaselineCNN(nn.Module):
    def __init__(self, num_classes):
        super().__init__()

        self.net = nn.Sequential(
            nn.Conv2d(3, 32, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),

            nn.Conv2d(32, 64, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),

            nn.AdaptiveAvgPool2d(1),
            nn.Flatten(),
            nn.Linear(64, num_classes)
        )

    def forward(self, x):
        return self.net(x)`,
    },

    {
      type: "heading",
      title: "13. Baseline Questions",
    },
    {
      type: "bullet",
      items: [
        "Does the pipeline run end-to-end?",
        "Does the model learn?",
        "Does validation performance improve?",
        "Are labels correct?",
        "Are predictions reasonable?",
        "Is the training speed acceptable?",
      ],
    },

    {
      type: "heading",
      title: "14. Choose the Architecture",
    },
    {
      type: "paragraph",
      text:
        "Architecture selection depends on the task. Classification may use CNNs or pretrained vision models. Detection may use single-stage or region-based detectors. Segmentation generally uses encoder-decoder architectures.",
    },

    {
      type: "heading",
      title: "15. Transfer Learning Decision",
    },
    {
      type: "paragraph",
      text:
        "For many practical projects, a pretrained model is an efficient starting point. Consider dataset size, similarity to the pretraining domain, available compute, and required accuracy.",
    },

    {
      type: "heading",
      title: "16. Data Augmentation",
    },
    {
      type: "paragraph",
      text:
        "Augmentation should represent transformations that preserve the task label. An augmentation that changes the semantic meaning of an image can hurt training instead of helping it.",
    },

    {
      type: "heading",
      title: "17. Classification Augmentation",
    },
    {
      type: "code",
      language: "python",
      code: `train_transform = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.ColorJitter(
        brightness=0.2,
        contrast=0.2
    ),
    transforms.ToTensor()
])`,
    },

    {
      type: "heading",
      title: "18. Detection Augmentation",
    },
    {
      type: "paragraph",
      text:
        "Detection augmentation is more complex because geometric transformations must modify bounding boxes consistently with the image.",
    },

    {
      type: "heading",
      title: "19. Segmentation Augmentation",
    },
    {
      type: "paragraph",
      text:
        "Segmentation transformations must modify both the image and mask in exactly corresponding spatial ways. Mask interpolation should preserve discrete class identifiers.",
    },

    {
      type: "heading",
      title: "20. Training Instrumentation",
    },
    {
      type: "paragraph",
      text:
        "A serious project records losses, metrics, learning rates, training time, validation results, model checkpoints, and experiment configuration.",
    },

    {
      type: "code",
      language: "python",
      code: `history = {
    "train_loss": [],
    "valid_loss": [],
    "train_acc": [],
    "valid_acc": [],
    "learning_rate": []
}`,
    },

    {
      type: "heading",
      title: "21. Checkpointing",
    },
    {
      type: "code",
      language: "python",
      code: `checkpoint = {
    "epoch": epoch,
    "model": model.state_dict(),
    "optimizer": optimizer.state_dict(),
    "validation_score": valid_score
}

torch.save(
    checkpoint,
    "checkpoint.pt"
)`,
    },

    {
      type: "heading",
      title: "22. Early Stopping",
    },
    {
      type: "paragraph",
      text:
        "If validation performance stops improving for several epochs, training can be stopped or the best checkpoint can be restored. This helps prevent unnecessary computation and excessive overfitting.",
    },

    {
      type: "heading",
      title: "23. Evaluation Must Match the Task",
    },
    {
      type: "bullet",
      items: [
        "Classification: accuracy and class-level metrics.",
        "Detection: localization and classification metrics such as IoU-based measures.",
        "Segmentation: pixel-level metrics such as IoU.",
        "Style transfer: perceptual and qualitative evaluation.",
      ],
    },

    {
      type: "heading",
      title: "24. Confusion Matrix",
    },
    {
      type: "paragraph",
      text:
        "For classification, a confusion matrix reveals which classes are being confused. This is often more informative than one overall accuracy number.",
    },

    {
      type: "heading",
      title: "25. Error Analysis",
    },
    {
      type: "paragraph",
      text:
        "After evaluation, inspect incorrect predictions. Categorize failures such as poor image quality, unusual viewpoint, occlusion, background confusion, small objects, class similarity, or annotation errors.",
    },

    {
      type: "heading",
      title: "26. Detection Error Analysis",
    },
    {
      type: "bullet",
      items: [
        "Missed object",
        "Wrong class",
        "Poor localization",
        "Duplicate detection",
        "False positive",
        "Small-object failure",
      ],
    },

    {
      type: "heading",
      title: "27. Segmentation Error Analysis",
    },
    {
      type: "bullet",
      items: [
        "Boundary mismatch",
        "Missing object region",
        "Wrong semantic class",
        "Small-region failure",
        "Confusion between visually similar classes",
      ],
    },

    {
      type: "heading",
      title: "28. Reproducibility",
    },
    {
      type: "paragraph",
      text:
        "Record the dataset version, preprocessing, random seed, model architecture, optimizer, learning rate, batch size, number of epochs, hardware, software versions, and checkpoint used for final evaluation.",
    },

    {
      type: "heading",
      title: "29. Experiment Configuration",
    },
    {
      type: "code",
      language: "python",
      code: `config = {
    "image_size": 224,
    "batch_size": 64,
    "epochs": 20,
    "learning_rate": 1e-3,
    "weight_decay": 1e-4,
    "model": "resnet18",
    "augmentation": True,
    "seed": 42
}`,
    },

    {
      type: "heading",
      title: "30. Model Export",
    },
    {
      type: "paragraph",
      text:
        "After training, save the model in a format appropriate for the intended application. Keep the preprocessing configuration together with the model so that inference receives inputs in the same format used during training.",
    },

    {
      type: "heading",
      title: "31. Inference Pipeline",
    },
    {
      type: "process",
      steps: [
        "Receive image",
        "Validate input",
        "Apply training-compatible preprocessing",
        "Load model",
        "Run inference",
        "Convert logits to prediction",
        "Apply post-processing",
        "Return result",
      ],
    },

    {
      type: "heading",
      title: "32. Classification Inference",
    },
    {
      type: "code",
      language: "python",
      code: `model.eval()

with torch.no_grad():
    logits = model(image)
    probabilities = torch.softmax(
        logits,
        dim=1
    )

prediction = probabilities.argmax(
    dim=1
)`,
    },

    {
      type: "heading",
      title: "33. Detection Inference",
    },
    {
      type: "process",
      steps: [
        "Run detector",
        "Decode bounding boxes",
        "Calculate confidence",
        "Remove low-confidence boxes",
        "Apply NMS",
        "Return final boxes and classes",
      ],
    },

    {
      type: "heading",
      title: "34. Segmentation Inference",
    },
    {
      type: "code",
      language: "python",
      code: `logits = segmentation_model(image)

mask = logits.argmax(
    dim=1
)`,
    },

    {
      type: "heading",
      title: "35. Performance Optimization",
    },
    {
      type: "bullet",
      items: [
        "Use GPU acceleration.",
        "Use appropriate batch sizes.",
        "Use multiple DataLoader workers where appropriate.",
        "Avoid unnecessary CPU-GPU transfers.",
        "Use mixed precision when appropriate.",
        "Profile slow operations.",
        "Cache expensive preprocessing where useful.",
      ],
    },

    {
      type: "heading",
      title: "36. Project Structure",
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
│   ├── inference/
│   └── utils/
├── configs/
├── checkpoints/
├── outputs/
├── tests/
├── requirements.txt
└── README.md`,
    },

    {
      type: "heading",
      title: "37. Testing",
    },
    {
      type: "paragraph",
      text:
        "Test the individual pieces of the pipeline before full training. Dataset tests should verify labels and shapes. Model tests should verify output dimensions. Training tests should confirm that loss can decrease on a tiny sample.",
    },

    {
      type: "heading",
      title: "38. The Tiny-Batch Test",
    },
    {
      type: "paragraph",
      text:
        "A powerful debugging technique is to train on a tiny subset. If the model cannot overfit a very small dataset, the problem may be in the data pipeline, labels, architecture, loss, or optimization setup.",
    },

    {
      type: "code",
      language: "python",
      code: `tiny_dataset = torch.utils.data.Subset(
    dataset,
    range(16)
)

tiny_loader = DataLoader(
    tiny_dataset,
    batch_size=4,
    shuffle=True
)`,
    },

    {
      type: "heading",
      title: "39. Deployment Questions",
    },
    {
      type: "bullet",
      items: [
        "What image formats are accepted?",
        "What preprocessing is required?",
        "How large is the model?",
        "How long does inference take?",
        "What hardware is required?",
        "What happens when confidence is low?",
        "How will model versions be tracked?",
      ],
    },

    {
      type: "heading",
      title: "40. Production Safety Checks",
    },
    {
      type: "paragraph",
      text:
        "A model should not automatically be considered reliable merely because its validation score is high. Input validation, confidence monitoring, representative evaluation data, error analysis, and human review can be important depending on the application.",
    },

    {
      type: "heading",
      title: "41. Documentation",
    },
    {
      type: "paragraph",
      text:
        "A professional project should explain the problem, dataset, preprocessing, model architecture, training configuration, evaluation methodology, limitations, and instructions for reproducing inference.",
    },

    {
      type: "heading",
      title: "42. Final Project Report",
    },
    {
      type: "code",
      language: "text",
      code: `1. Problem Definition
2. Dataset
3. Data Analysis
4. Preprocessing
5. Model Architecture
6. Training Configuration
7. Experiments
8. Evaluation
9. Error Analysis
10. Limitations
11. Inference
12. Future Improvements`,
    },

    {
      type: "heading",
      title: "43. Capstone Project",
    },
    {
      type: "paragraph",
      text:
        "Build one complete computer-vision application. Choose classification, detection, or segmentation. The project must contain a reproducible dataset pipeline, model, training system, validation, evaluation, error analysis, saved checkpoint, and inference script.",
    },

    {
      type: "heading",
      title: "44. Recommended Capstone Workflow",
    },
    {
      type: "process",
      steps: [
        "Define problem",
        "Collect or select dataset",
        "Audit data",
        "Visualize examples",
        "Create baseline",
        "Train baseline",
        "Analyze errors",
        "Add augmentation",
        "Try transfer learning",
        "Tune hyperparameters",
        "Compare experiments",
        "Select checkpoint",
        "Build inference pipeline",
        "Document limitations",
        "Prepare final demonstration",
      ],
    },

    {
      type: "heading",
      title: "45. Skills Demonstrated",
    },
    {
      type: "bullet",
      items: [
        "CNN understanding",
        "Data preprocessing",
        "Image augmentation",
        "Transfer learning",
        "Object detection concepts",
        "Segmentation concepts",
        "Model training",
        "Evaluation",
        "Debugging",
        "Experiment tracking",
        "Inference engineering",
        "Computer-vision project design",
      ],
    },

    {
      type: "heading",
      title: "46. Interview Questions",
    },
    {
      type: "qa",
      question: "What should you do before choosing a computer-vision model?",
      answer:
        "Define the task, inspect the data, understand the labels, identify constraints, and establish an appropriate baseline.",
    },
    {
      type: "qa",
      question: "Why is error analysis important?",
      answer:
        "It reveals the actual failure modes of the model and helps determine which changes are likely to address them.",
    },
    {
      type: "qa",
      question: "Why should preprocessing be saved with the model?",
      answer:
        "Inference must transform new inputs in a way compatible with the representation used during training.",
    },
    {
      type: "qa",
      question: "Why perform a tiny-batch overfitting test?",
      answer:
        "It helps determine whether the basic data, model, loss, and optimization pipeline is functioning before expensive full training.",
    },

    {
      type: "heading",
      title: "47. Final Assessment",
    },
    {
      type: "bullet",
      items: [
        "Explain the difference between classification, detection, semantic segmentation, and instance segmentation.",
        "Design an augmentation pipeline for a given vision task.",
        "Explain when transfer learning is useful.",
        "Build a CNN classifier.",
        "Explain anchor boxes and IoU.",
        "Explain SSD and Faster R-CNN.",
        "Build a basic segmentation model.",
        "Explain transposed convolution.",
        "Implement an FCN-style architecture.",
        "Explain neural style transfer.",
        "Perform error analysis on a trained model.",
        "Design an end-to-end computer-vision project.",
      ],
    },

    {
      type: "heading",
      title: "48. Final Summary",
    },
    {
      type: "bullet",
      items: [
        "Computer vision is a complete engineering pipeline, not only a neural network.",
        "Data quality strongly affects model quality.",
        "Different tasks require different output structures.",
        "CNNs provide powerful hierarchical image representations.",
        "Transfer learning can reuse representations learned from large datasets.",
        "Detection requires localization as well as classification.",
        "Segmentation requires pixel-level spatial correspondence.",
        "Evaluation and error analysis guide improvement.",
        "Reproducibility and documentation are part of professional machine-learning development.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Module 6 Key Takeaway",
      text:
        "A strong computer-vision developer can move from a raw visual problem to a reproducible AI system: understand the task, build and inspect the dataset, choose an architecture, train and evaluate it, analyze failures, improve the system, and produce a reliable inference workflow.",
    },
  ],
};

export default lesson;