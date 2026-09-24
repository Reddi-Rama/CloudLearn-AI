export const lesson = {
  id: "lesson16",
  title: "Advanced Object Detection Systems",
  subtitle:
    "Designing, training, evaluating, debugging, and improving complete object detection pipelines",
  duration: "150–180 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Object detection becomes significantly more challenging when moving from educational examples to real-world systems. A practical detector must handle different object sizes, multiple objects, imperfect annotations, class imbalance, varying lighting, occlusion, image resolution, and deployment constraints.",
    },
    {
      type: "paragraph",
      text:
        "This lesson brings together the concepts learned throughout the computer-vision module and focuses on designing a complete detection pipeline rather than studying one isolated architecture.",
    },

    {
      type: "heading",
      title: "2. Complete Detection Pipeline",
    },
    {
      type: "process",
      steps: [
        "Collect images",
        "Annotate objects",
        "Validate annotations",
        "Split dataset",
        "Preprocess images",
        "Augment training data",
        "Select model",
        "Generate predictions",
        "Calculate losses",
        "Train model",
        "Validate model",
        "Evaluate detections",
        "Analyze errors",
        "Tune model",
        "Export model",
        "Deploy inference service",
      ],
    },

    {
      type: "heading",
      title: "3. Detection Components",
    },
    {
      type: "paragraph",
      text:
        "A modern detector can be viewed as several cooperating components: a backbone extracts features, a neck combines features across scales, a detection head predicts classes and localization, and post-processing converts raw predictions into final detections.",
    },

    {
      type: "heading",
      title: "4. Backbone",
    },
    {
      type: "paragraph",
      text:
        "The backbone is the feature-extraction network. CNN architectures such as ResNet, DenseNet, and other modern feature extractors can be used to transform raw pixels into increasingly semantic representations.",
    },

    {
      type: "heading",
      title: "5. Detection Neck",
    },
    {
      type: "paragraph",
      text:
        "A neck combines feature maps from different depths. This is important because shallow layers preserve spatial information while deep layers contain stronger semantic information.",
    },

    {
      type: "heading",
      title: "6. Detection Head",
    },
    {
      type: "paragraph",
      text:
        "The detection head converts feature representations into predictions. Depending on the architecture, predictions can include objectness, class probabilities, bounding-box coordinates, and sometimes additional outputs.",
    },

    {
      type: "heading",
      title: "7. Anchor-Based and Anchor-Free Detection",
    },
    {
      type: "paragraph",
      text:
        "Anchor-based detectors predict adjustments relative to predefined boxes. Anchor-free detectors instead predict object centers, corners, or other geometric representations directly.",
    },

    {
      type: "heading",
      title: "8. Bounding-Box Parameterization",
    },
    {
      type: "formula",
      formula: "b = (x_c, y_c, w, h)",
      explanation:
        "A bounding box can be represented by its center coordinates and width and height.",
    },

    {
      type: "heading",
      title: "9. IoU",
    },
    {
      type: "formula",
      formula: "IoU = Area(B_pred ∩ B_true) / Area(B_pred ∪ B_true)",
      explanation:
        "Intersection over Union measures how strongly two bounding boxes overlap.",
    },

    {
      type: "heading",
      title: "10. Why IoU Alone Is Not Enough",
    },
    {
      type: "paragraph",
      text:
        "Two boxes can have the same IoU while having different center alignment or shape errors. Therefore modern localization losses can incorporate additional geometric information.",
    },

    {
      type: "heading",
      title: "11. Confidence Scores",
    },
    {
      type: "paragraph",
      text:
        "A detector may produce a confidence score representing how strongly it believes a prediction corresponds to an object and class. Threshold selection directly influences precision and recall.",
    },

    {
      type: "heading",
      title: "12. Precision and Recall",
    },
    {
      type: "formula",
      formula: "Precision = TP / (TP + FP)",
      explanation:
        "Precision measures the fraction of reported detections that are correct.",
    },
    {
      type: "formula",
      formula: "Recall = TP / (TP + FN)",
      explanation:
        "Recall measures the fraction of actual objects successfully detected.",
    },

    {
      type: "heading",
      title: "13. Precision–Recall Trade-Off",
    },
    {
      type: "paragraph",
      text:
        "Increasing the confidence threshold usually reduces the number of predictions. This can reduce false positives but may also remove valid detections. Lowering the threshold can increase recall while introducing additional false positives.",
    },

    {
      type: "heading",
      title: "14. Mean Average Precision",
    },
    {
      type: "paragraph",
      text:
        "Mean Average Precision summarizes detection performance across classes using precision-recall behavior. Different evaluation protocols may use different IoU thresholds, so the exact metric definition should always be checked.",
    },

    {
      type: "heading",
      title: "15. Non-Maximum Suppression",
    },
    {
      type: "code",
      language: "python",
      code: `keep = torchvision.ops.nms(
    boxes,
    scores,
    iou_threshold=0.5
)

final_boxes = boxes[keep]
final_scores = scores[keep]
final_classes = classes[keep]`,
    },

    {
      type: "heading",
      title: "16. Soft-NMS Concept",
    },
    {
      type: "paragraph",
      text:
        "Instead of immediately removing overlapping boxes, Soft-NMS reduces their scores according to overlap. This can sometimes preserve useful detections in crowded scenes.",
    },

    {
      type: "heading",
      title: "17. Class Imbalance",
    },
    {
      type: "paragraph",
      text:
        "Detection datasets often contain many background locations but relatively few positive objects. Class imbalance can dominate training unless the loss or sampling strategy is designed carefully.",
    },

    {
      type: "heading",
      title: "18. Hard Negative Examples",
    },
    {
      type: "paragraph",
      text:
        "Hard negatives are image regions that look similar to target objects but are actually background. These examples are useful because they teach the detector to distinguish visually confusing patterns.",
    },

    {
      type: "heading",
      title: "19. Occlusion",
    },
    {
      type: "paragraph",
      text:
        "Objects can be partially hidden by other objects. A robust detector needs features capable of recognizing partial evidence rather than relying only on complete object appearance.",
    },

    {
      type: "heading",
      title: "20. Small Objects",
    },
    {
      type: "paragraph",
      text:
        "Small objects contain limited visual information and can disappear after aggressive downsampling. High-resolution feature maps and appropriate augmentation can help.",
    },

    {
      type: "heading",
      title: "21. Detection Error Analysis",
    },
    {
      type: "process",
      steps: [
        "Collect false positives",
        "Collect false negatives",
        "Inspect localization errors",
        "Inspect class confusion",
        "Inspect small-object failures",
        "Inspect occlusion cases",
        "Inspect difficult lighting",
        "Change one factor",
        "Retrain",
        "Compare results",
      ],
    },

    {
      type: "heading",
      title: "22. Prediction Visualization",
    },
    {
      type: "code",
      language: "python",
      code: `def inspect_predictions(image, boxes, scores, labels):
    print("boxes:", boxes.shape)
    print("scores:", scores.shape)
    print("labels:", labels.shape)

    for box, score, label in zip(
        boxes, scores, labels
    ):
        print(
            "class =", int(label),
            "score =", float(score),
            "box =", box.tolist()
        )`,
    },

    {
      type: "heading",
      title: "23. Training Configuration",
    },
    {
      type: "code",
      language: "python",
      code: `optimizer = torch.optim.AdamW(
    model.parameters(),
    lr=1e-4,
    weight_decay=1e-4
)

scheduler = torch.optim.lr_scheduler.CosineAnnealingLR(
    optimizer,
    T_max=20
)`,
    },

    {
      type: "heading",
      title: "24. Reproducibility",
    },
    {
      type: "paragraph",
      text:
        "Detection experiments should record random seeds, dataset versions, augmentation configuration, model architecture, optimizer, learning rate, batch size, image resolution, and evaluation settings.",
    },

    {
      type: "heading",
      title: "25. Model Checkpointing",
    },
    {
      type: "code",
      language: "python",
      code: `torch.save(
    {
        "model": model.state_dict(),
        "optimizer": optimizer.state_dict(),
        "epoch": epoch
    },
    "detector_checkpoint.pt"
)`,
    },

    {
      type: "heading",
      title: "26. Loading a Checkpoint",
    },
    {
      type: "code",
      language: "python",
      code: `checkpoint = torch.load(
    "detector_checkpoint.pt",
    map_location="cpu"
)

model.load_state_dict(checkpoint["model"])
optimizer.load_state_dict(checkpoint["optimizer"])`,
    },

    {
      type: "heading",
      title: "27. Detection Inference Function",
    },
    {
      type: "code",
      language: "python",
      code: `@torch.no_grad()
def predict(model, image):
    model.eval()

    output = model(image)

    return output`,
    },

    {
      type: "heading",
      title: "28. Deployment Considerations",
    },
    {
      type: "bullet",
      items: [
        "Inference latency",
        "Memory usage",
        "Image resolution",
        "CPU versus GPU execution",
        "Batch size",
        "Model serialization",
        "Input preprocessing",
        "Output post-processing",
      ],
    },

    {
      type: "heading",
      title: "29. Common Errors",
    },
    {
      type: "bullet",
      items: [
        "Wrong box coordinate convention.",
        "Training and inference preprocessing mismatch.",
        "Incorrect class indexing.",
        "Applying NMS across unrelated classes.",
        "Evaluating with the wrong IoU threshold.",
        "Ignoring small-object performance.",
      ],
    },

    {
      type: "heading",
      title: "30. Interview Questions",
    },
    {
      type: "qa",
      question: "What are the major components of a detection system?",
      answer:
        "A feature-extraction backbone, feature aggregation or neck, prediction heads, and post-processing.",
    },
    {
      type: "qa",
      question: "Why is error analysis important?",
      answer:
        "Aggregate metrics cannot explain why a model fails. Examining false positives and false negatives reveals specific weaknesses that can guide improvements.",
    },
    {
      type: "qa",
      question: "Why can increasing image resolution help?",
      answer:
        "Small objects occupy more pixels, giving the network more spatial information.",
    },

    {
      type: "heading",
      title: "31. Practical Project",
    },
    {
      type: "paragraph",
      text:
        "Build an object detector for a small custom dataset. Record dataset statistics, train the model, visualize predictions, calculate evaluation metrics, analyze at least twenty incorrect predictions, and document the improvements made after error analysis.",
    },

    {
      type: "heading",
      title: "32. Summary",
    },
    {
      type: "bullet",
      items: [
        "A production detector is more than a neural network.",
        "Data quality and annotation quality strongly influence results.",
        "Multiscale features are important for object-size variation.",
        "Confidence thresholds affect precision and recall.",
        "NMS is essential for reducing duplicate predictions.",
        "Error analysis drives practical model improvement.",
        "Deployment requires considering latency and memory.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "A strong object-detection system is an engineering pipeline: data, architecture, losses, evaluation, error analysis, optimization, and deployment must work together.",
    },
  ],
};

export default lesson;