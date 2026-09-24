export const lesson = {
  id: "lesson5",
  title: "Multiscale Object Detection",
  subtitle:
    "Detecting objects of different sizes using feature maps and multiscale anchor boxes",
  duration: "120–140 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Objects in an image can appear at very different scales. A nearby vehicle may occupy a large part of an image, while a distant vehicle may occupy only a small number of pixels. A practical object detector therefore needs to recognize objects across multiple spatial scales.",
    },
    {
      type: "paragraph",
      text:
        "Multiscale object detection addresses this problem by generating predictions from feature maps with different spatial resolutions. High-resolution feature maps preserve fine spatial information and are useful for smaller objects, while lower-resolution feature maps contain larger receptive fields and are useful for larger objects.",
    },

    {
      type: "heading",
      title: "2. Why Object Size Creates a Challenge",
    },
    {
      type: "paragraph",
      text:
        "Suppose an image contains a small pedestrian and a large bus. A feature map with very small spatial dimensions may contain enough semantic information to recognize the bus, but the pedestrian may disappear into the downsampling process. Conversely, a very high-resolution feature map preserves small details but can be computationally expensive.",
    },
    {
      type: "heading",
      title: "3. The Basic Idea",
    },
    {
      type: "paragraph",
      text:
        "Instead of making all predictions from one feature map, a detector can use several feature maps. Each feature map operates at a different spatial scale and generates anchor boxes appropriate to that scale.",
    },
    {
      type: "process",
      steps: [
        "Input image",
        "CNN feature extraction",
        "High-resolution feature map",
        "Medium-resolution feature map",
        "Low-resolution feature map",
        "Generate anchors at each scale",
        "Predict classes and bounding-box offsets",
        "Combine predictions",
        "Apply filtering and NMS",
      ],
    },

    {
      type: "heading",
      title: "4. Feature Map Resolution",
    },
    {
      type: "paragraph",
      text:
        "Consider feature maps with spatial sizes 56×56, 28×28, and 14×14. The 56×56 map contains many spatial positions and therefore provides detailed localization. The 14×14 map contains fewer positions but each position can represent a larger receptive field.",
    },
    {
      type: "formula",
      formula: "H × W → H' × W'",
      explanation:
        "Convolution and pooling operations transform the spatial resolution of feature maps.",
    },

    {
      type: "heading",
      title: "5. Small Objects",
    },
    {
      type: "paragraph",
      text:
        "Small objects require relatively fine spatial resolution. If an object occupies only a few pixels in a deeply downsampled feature map, the detector may have difficulty locating it precisely.",
    },

    {
      type: "heading",
      title: "6. Large Objects",
    },
    {
      type: "paragraph",
      text:
        "Large objects benefit from deeper feature maps because deeper layers have larger receptive fields and usually contain stronger semantic representations.",
    },

    {
      type: "heading",
      title: "7. Multiscale Anchor Boxes",
    },
    {
      type: "paragraph",
      text:
        "Anchor boxes can be generated independently at different feature-map resolutions. At high resolution, anchors can represent relatively small objects. At lower resolutions, anchors can represent larger objects.",
    },
    {
      type: "formula",
      formula: "A = H × W × k",
      explanation:
        "For a feature map of height H and width W with k anchors per spatial position, approximately H×W×k anchors are generated.",
    },

    {
      type: "heading",
      title: "8. Scale and Aspect Ratio",
    },
    {
      type: "paragraph",
      text:
        "Each spatial location can contain multiple anchor boxes. These anchors may differ in scale and aspect ratio so that objects with different shapes can be represented.",
    },

    {
      type: "heading",
      title: "9. Example Anchor Configuration",
    },
    {
      type: "code",
      language: "python",
      code: `scales = [0.15, 0.30, 0.60]
ratios = [0.5, 1.0, 2.0]

for scale in scales:
    for ratio in ratios:
        print(scale, ratio)`,
    },

    {
      type: "heading",
      title: "10. Why Several Feature Maps?",
    },
    {
      type: "paragraph",
      text:
        "Using several feature maps creates a hierarchy. Earlier maps contain more spatial detail, while deeper maps contain stronger semantic information and larger receptive fields.",
    },

    {
      type: "heading",
      title: "11. Multiscale Detection Pipeline",
    },
    {
      type: "process",
      steps: [
        "Extract hierarchical CNN features",
        "Select feature maps at several resolutions",
        "Generate anchors",
        "Predict class scores",
        "Predict bounding-box offsets",
        "Decode bounding boxes",
        "Merge predictions",
        "Apply confidence threshold",
        "Apply NMS",
      ],
    },

    {
      type: "heading",
      title: "12. Combining Predictions",
    },
    {
      type: "paragraph",
      text:
        "Predictions from different feature maps are flattened and combined into a single collection of candidate detections. Because different scales may produce overlapping predictions, post-processing is required.",
    },

    {
      type: "heading",
      title: "13. Receptive Field",
    },
    {
      type: "paragraph",
      text:
        "The receptive field of a feature-map unit describes the region of the original image that can influence that unit. Deeper layers normally have larger receptive fields because multiple convolutional operations accumulate spatial context.",
    },

    {
      type: "formula",
      formula: "r_l = r_{l-1} + (k_l - 1)j_{l-1}",
      explanation:
        "A simplified receptive-field recurrence where r is receptive-field size and j represents the effective jump between neighboring units.",
    },

    {
      type: "heading",
      title: "14. Stride and Spatial Scale",
    },
    {
      type: "paragraph",
      text:
        "The effective stride of a feature map determines how far apart neighboring feature-map positions correspond to locations in the original image. Larger stride generally means lower spatial resolution.",
    },

    {
      type: "heading",
      title: "15. Small Object Detection Failure",
    },
    {
      type: "paragraph",
      text:
        "If every prediction were made only from a deeply downsampled map, several nearby small objects could correspond to very few feature-map positions. This can cause localization errors or missed detections.",
    },

    {
      type: "heading",
      title: "16. Large Object Detection Failure",
    },
    {
      type: "paragraph",
      text:
        "Using only high-resolution maps can increase computation and may provide weaker high-level semantic context for large objects.",
    },

    {
      type: "heading",
      title: "17. Multiscale Feature Hierarchy",
    },
    {
      type: "code",
      language: "python",
      code: `features = backbone(image)

small_object_features = features["high_resolution"]
medium_object_features = features["middle_resolution"]
large_object_features = features["low_resolution"]`,
    },

    {
      type: "heading",
      title: "18. Prediction Heads",
    },
    {
      type: "paragraph",
      text:
        "Each feature map can have a prediction head that produces class scores and bounding-box offsets for its anchors.",
    },

    {
      type: "code",
      language: "python",
      code: `class_head = nn.Conv2d(
    channels,
    num_anchors * (num_classes + 1),
    kernel_size=3,
    padding=1
)

bbox_head = nn.Conv2d(
    channels,
    num_anchors * 4,
    kernel_size=3,
    padding=1
)`,
    },

    {
      type: "heading",
      title: "19. Output Shape Reasoning",
    },
    {
      type: "paragraph",
      text:
        "If a feature map has height H, width W, and k anchors at each position, the detector needs predictions for H×W×k anchors. Classification and localization heads therefore encode the anchor dimension into their output channels.",
    },

    {
      type: "formula",
      formula: "C_class = k(q + 1)",
      explanation:
        "For q object classes plus background, each anchor requires q+1 classification scores.",
    },

    {
      type: "formula",
      formula: "C_box = 4k",
      explanation:
        "Each anchor requires four bounding-box offset values.",
    },

    {
      type: "heading",
      title: "20. PyTorch Multiscale Prediction Skeleton",
    },
    {
      type: "code",
      language: "python",
      code: `class MultiScaleDetector(nn.Module):
    def __init__(self, channels, num_anchors, num_classes):
        super().__init__()

        self.cls_heads = nn.ModuleList([
            nn.Conv2d(
                c,
                num_anchors * (num_classes + 1),
                kernel_size=3,
                padding=1
            )
            for c in channels
        ])

        self.box_heads = nn.ModuleList([
            nn.Conv2d(
                c,
                num_anchors * 4,
                kernel_size=3,
                padding=1
            )
            for c in channels
        ])`,
    },

    {
      type: "heading",
      title: "21. Forward Pass",
    },
    {
      type: "code",
      language: "python",
      code: `def forward(self, features):
    class_outputs = []
    box_outputs = []

    for feature, cls_head, box_head in zip(
        features,
        self.cls_heads,
        self.box_heads
    ):
        class_outputs.append(cls_head(feature))
        box_outputs.append(box_head(feature))

    return class_outputs, box_outputs`,
    },

    {
      type: "heading",
      title: "22. Multiscale Detection and NMS",
    },
    {
      type: "paragraph",
      text:
        "The detector may produce several candidate boxes for the same object. Predictions from all feature levels can therefore be merged before non-maximum suppression.",
    },

    {
      type: "process",
      steps: [
        "Collect candidates from every feature level",
        "Decode anchor offsets",
        "Discard low-confidence candidates",
        "Group candidates by class",
        "Apply NMS",
        "Return final detections",
      ],
    },

    {
      type: "heading",
      title: "23. Confidence Threshold",
    },
    {
      type: "paragraph",
      text:
        "A confidence threshold removes predictions whose class probability is too low. The threshold is a practical control over how many candidate detections enter later post-processing.",
    },

    {
      type: "heading",
      title: "24. Computational Trade-Off",
    },
    {
      type: "paragraph",
      text:
        "Higher-resolution maps contain more spatial positions and therefore generate more predictions. Multiscale detection improves coverage of object sizes but increases computation and memory usage.",
    },

    {
      type: "heading",
      title: "25. Common Implementation Errors",
    },
    {
      type: "bullet",
      items: [
        "Using incompatible feature-map dimensions.",
        "Generating the wrong number of anchors.",
        "Forgetting the background class.",
        "Mixing normalized and pixel coordinates.",
        "Decoding offsets incorrectly.",
        "Applying NMS before converting offsets to boxes.",
        "Ignoring predictions from one of the feature levels.",
      ],
    },

    {
      type: "heading",
      title: "26. Debugging Checklist",
    },
    {
      type: "code",
      language: "python",
      code: `for feature in features:
    print("feature:", feature.shape)

for cls_pred in class_outputs:
    print("class:", cls_pred.shape)

for box_pred in box_outputs:
    print("bbox:", box_pred.shape)`,
    },

    {
      type: "heading",
      title: "27. Practical Experiment",
    },
    {
      type: "paragraph",
      text:
        "Train or evaluate a detector on images containing objects of different sizes. Record detections separately for small, medium, and large objects. Compare how changing the available feature-map resolutions affects localization.",
    },

    {
      type: "heading",
      title: "28. Interview Questions",
    },
    {
      type: "qa",
      question: "Why do object detectors use multiple feature-map scales?",
      answer:
        "Because objects appear at different sizes. High-resolution maps preserve small-object details, while lower-resolution maps provide larger receptive fields for larger objects.",
    },
    {
      type: "qa",
      question: "Why are deep feature maps useful for large objects?",
      answer:
        "They usually have larger receptive fields and stronger semantic representations.",
    },
    {
      type: "qa",
      question: "What is the main cost of adding high-resolution feature maps?",
      answer:
        "More spatial positions produce more anchors and therefore increase computation and memory usage.",
    },

    {
      type: "heading",
      title: "29. Coding Challenge",
    },
    {
      type: "paragraph",
      text:
        "Implement a three-level detection head. Print the number of anchors generated at every level and verify that the final number of class and bounding-box predictions matches the anchor count.",
    },

    {
      type: "heading",
      title: "30. Summary",
    },
    {
      type: "bullet",
      items: [
        "Objects occur at different scales.",
        "Feature maps at different resolutions capture different spatial information.",
        "High-resolution maps help detect small objects.",
        "Low-resolution maps provide larger receptive fields.",
        "Each feature level can generate anchors and predictions.",
        "Predictions from all levels are combined before final post-processing.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Multiscale detection combines spatially detailed feature maps with semantically rich deeper feature maps so that a detector can reason about objects across a wide range of sizes.",
    },
  ],
};

export default lesson;