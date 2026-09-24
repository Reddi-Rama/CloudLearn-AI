export const lesson = {
  id: "lesson7",
  title: "Single Shot Multibox Detection",
  subtitle:
    "Building an end-to-end multiscale detector with anchor boxes and prediction heads",
  duration: "140–165 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Single Shot Multibox Detection, commonly abbreviated SSD, performs object detection in one forward pass. It combines multiscale feature maps, anchor boxes, class prediction, and bounding-box regression into one trainable network.",
    },

    {
      type: "heading",
      title: "2. Why Single Shot?",
    },
    {
      type: "paragraph",
      text:
        "Earlier detection pipelines often separated region proposal and object classification into multiple stages. A single-shot design predicts candidate boxes and their classes directly from feature maps, reducing the number of separate stages.",
    },

    {
      type: "heading",
      title: "3. SSD Architecture",
    },
    {
      type: "process",
      steps: [
        "Input image",
        "Base CNN",
        "Feature map 1",
        "Feature map 2",
        "Feature map 3",
        "Additional feature layers",
        "Generate anchors",
        "Class prediction",
        "Bounding-box prediction",
        "Decode boxes",
        "Non-maximum suppression",
      ],
    },

    {
      type: "heading",
      title: "4. Base Network",
    },
    {
      type: "paragraph",
      text:
        "The base network extracts visual features from the image. Additional convolutional blocks progressively reduce spatial resolution while increasing semantic abstraction.",
    },

    {
      type: "heading",
      title: "5. Multiscale Feature Blocks",
    },
    {
      type: "paragraph",
      text:
        "SSD uses multiple feature maps with different resolutions. Earlier maps contain more spatial detail, while later maps have larger receptive fields.",
    },

    {
      type: "heading",
      title: "6. Anchor Boxes per Location",
    },
    {
      type: "paragraph",
      text:
        "At each spatial position of a feature map, multiple anchor boxes are generated. Each anchor receives class predictions and four localization offsets.",
    },

    {
      type: "formula",
      formula: "N = H × W × A",
      explanation:
        "N is the number of anchors, H and W are feature-map dimensions, and A is the number of anchors per position.",
    },

    {
      type: "heading",
      title: "7. Class Prediction Layer",
    },
    {
      type: "paragraph",
      text:
        "For q object classes, SSD normally predicts q+1 categories per anchor because one category represents background.",
    },

    {
      type: "formula",
      formula: "channels = A(q + 1)",
      explanation:
        "The convolutional prediction head encodes all class scores into its output channels.",
    },

    {
      type: "heading",
      title: "8. Bounding-Box Prediction Layer",
    },
    {
      type: "formula",
      formula: "channels = 4A",
      explanation:
        "Each anchor needs four localization values.",
    },

    {
      type: "heading",
      title: "9. Class Prediction Code",
    },
    {
      type: "code",
      language: "python",
      code: `def cls_predictor(num_inputs, num_anchors, num_classes):
    return nn.Conv2d(
        num_inputs,
        num_anchors * (num_classes + 1),
        kernel_size=3,
        padding=1
    )`,
    },

    {
      type: "heading",
      title: "10. Bounding Box Prediction Code",
    },
    {
      type: "code",
      language: "python",
      code: `def bbox_predictor(num_inputs, num_anchors):
    return nn.Conv2d(
        num_inputs,
        num_anchors * 4,
        kernel_size=3,
        padding=1
    )`,
    },

    {
      type: "heading",
      title: "11. Flattening Predictions",
    },
    {
      type: "paragraph",
      text:
        "Predictions from different feature maps have different spatial dimensions. They are therefore flattened into a common representation before being concatenated.",
    },

    {
      type: "code",
      language: "python",
      code: `def flatten_pred(pred):
    return torch.flatten(
        pred.permute(0, 2, 3, 1),
        start_dim=1
    )`,
    },

    {
      type: "heading",
      title: "12. Concatenating Multiscale Outputs",
    },
    {
      type: "code",
      language: "python",
      code: `cls_outputs = torch.cat(
    [flatten_pred(x) for x in cls_preds],
    dim=1
)

bbox_outputs = torch.cat(
    [flatten_pred(x) for x in bbox_preds],
    dim=1
)`,
    },

    {
      type: "heading",
      title: "13. Detection Loss",
    },
    {
      type: "paragraph",
      text:
        "SSD has two major learning objectives: classify anchors and predict localization offsets for positive anchors.",
    },

    {
      type: "heading",
      title: "14. Classification Loss",
    },
    {
      type: "paragraph",
      text:
        "Classification loss measures how well each anchor's predicted class agrees with its assigned class label. Cross-entropy is a natural choice for this task.",
    },

    {
      type: "heading",
      title: "15. Bounding-Box Loss",
    },
    {
      type: "paragraph",
      text:
        "Bounding-box prediction is a regression task. The source implementation uses an L1-style loss for localization offsets.",
    },

    {
      type: "formula",
      formula: "L = L_class + L_box",
      explanation:
        "The overall training objective combines classification and localization losses.",
    },

    {
      type: "heading",
      title: "16. Ignoring Negative Localization Targets",
    },
    {
      type: "paragraph",
      text:
        "Background anchors do not correspond to a real object and therefore should not contribute ordinary localization loss. A mask can be used to include only valid positive localization targets.",
    },

    {
      type: "code",
      language: "python",
      code: `bbox_loss = nn.L1Loss(reduction="none")

loss = bbox_loss(
    bbox_preds * bbox_masks,
    bbox_labels * bbox_masks
)`,
    },

    {
      type: "heading",
      title: "17. Training Pipeline",
    },
    {
      type: "process",
      steps: [
        "Load image",
        "Generate multiscale anchors",
        "Match anchors to ground truth",
        "Predict classes",
        "Predict offsets",
        "Calculate classification loss",
        "Calculate localization loss",
        "Backpropagate",
        "Update model",
      ],
    },

    {
      type: "heading",
      title: "18. Tiny SSD Skeleton",
    },
    {
      type: "code",
      language: "python",
      code: `class TinySSD(nn.Module):
    def __init__(self, num_classes):
        super().__init__()

        self.backbone = nn.Sequential(
            nn.Conv2d(3, 16, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )

        self.cls_head = cls_predictor(
            16,
            num_anchors=4,
            num_classes=num_classes
        )

        self.box_head = bbox_predictor(
            16,
            num_anchors=4
        )

    def forward(self, x):
        features = self.backbone(x)

        cls = self.cls_head(features)
        box = self.box_head(features)

        return cls, box`,
    },

    {
      type: "heading",
      title: "19. Real SSD Feature Hierarchy",
    },
    {
      type: "paragraph",
      text:
        "A practical SSD model uses several prediction blocks rather than only one feature map. The early blocks are responsible for finer spatial detection while deeper blocks cover larger receptive fields.",
    },

    {
      type: "heading",
      title: "20. Anchor Assignment",
    },
    {
      type: "paragraph",
      text:
        "Before training, every anchor must receive a training target. Anchors are matched with ground-truth boxes using overlap measurements such as IoU.",
    },

    {
      type: "heading",
      title: "21. Prediction",
    },
    {
      type: "paragraph",
      text:
        "At inference time, the network predicts class probabilities and offsets for all generated anchors. Offsets are decoded to obtain final candidate bounding boxes.",
    },

    {
      type: "heading",
      title: "22. Non-Maximum Suppression",
    },
    {
      type: "paragraph",
      text:
        "Many anchors can produce boxes around the same object. NMS removes redundant overlapping predictions while retaining high-confidence detections.",
    },

    {
      type: "heading",
      title: "23. Confidence Filtering",
    },
    {
      type: "code",
      language: "python",
      code: `keep = scores > confidence_threshold

boxes = boxes[keep]
scores = scores[keep]
classes = classes[keep]`,
    },

    {
      type: "heading",
      title: "24. SSD Advantages",
    },
    {
      type: "bullet",
      items: [
        "Single-stage detection pipeline.",
        "Multiscale feature maps.",
        "Anchor-based localization.",
        "End-to-end trainability.",
        "Straightforward convolutional prediction heads.",
      ],
    },

    {
      type: "heading",
      title: "25. SSD Limitations",
    },
    {
      type: "bullet",
      items: [
        "Small objects can remain difficult.",
        "Many anchors create substantial computation.",
        "Anchor configuration affects performance.",
        "Localization and classification require careful loss balancing.",
      ],
    },

    {
      type: "heading",
      title: "26. Debugging Shapes",
    },
    {
      type: "code",
      language: "python",
      code: `for i, feature in enumerate(features):
    print("feature", i, feature.shape)

for i, pred in enumerate(cls_preds):
    print("class", i, pred.shape)

for i, pred in enumerate(bbox_preds):
    print("box", i, pred.shape)`,
    },

    {
      type: "heading",
      title: "27. Training Diagnostics",
    },
    {
      type: "bullet",
      items: [
        "Classification loss decreasing but box loss not decreasing may indicate localization problems.",
        "Very high background predictions may indicate class imbalance.",
        "Poor small-object detection may indicate insufficient high-resolution features.",
        "Too many duplicate detections may indicate inappropriate NMS settings.",
      ],
    },

    {
      type: "heading",
      title: "28. Interview Questions",
    },
    {
      type: "qa",
      question: "Why does SSD use multiple feature maps?",
      answer:
        "Different feature-map resolutions provide different spatial scales and receptive fields for detecting objects of different sizes.",
    },
    {
      type: "qa",
      question: "Why does every anchor need four regression values?",
      answer:
        "The detector must predict four values describing how the anchor should be transformed into the target bounding box.",
    },
    {
      type: "qa",
      question: "Why is background included as a class?",
      answer:
        "Many anchors do not correspond to objects, so the detector needs a category representing background.",
    },

    {
      type: "heading",
      title: "29. Coding Challenge",
    },
    {
      type: "paragraph",
      text:
        "Implement a miniature SSD-style detector with three feature levels. Print the number of anchors produced by every level and verify the shape of the classification and localization outputs.",
    },

    {
      type: "heading",
      title: "30. Summary",
    },
    {
      type: "bullet",
      items: [
        "SSD performs detection in a single network.",
        "It uses multiple feature-map resolutions.",
        "Anchor boxes provide candidate locations and shapes.",
        "Classification heads predict object categories.",
        "Bounding-box heads predict localization offsets.",
        "Training combines classification and localization losses.",
        "NMS converts many candidates into a smaller final set.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "SSD turns multiscale feature extraction, anchor generation, classification, and localization into one end-to-end detection pipeline.",
    },
  ],
};

export default lesson;