export const lesson = {
  id: "lesson8",
  title: "Region-Based CNNs",
  subtitle:
    "Understanding R-CNN, Fast R-CNN, Faster R-CNN, and Mask R-CNN",
  duration: "145–170 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Region-based CNN methods approach object detection by first reasoning about candidate regions and then extracting visual features for those regions. The R-CNN family progressively improves this idea by sharing computation and learning region proposals more efficiently.",
    },

    {
      type: "heading",
      title: "2. Why Region-Based Detection?",
    },
    {
      type: "paragraph",
      text:
        "Object detection requires answering two questions simultaneously: what object is present and where it is located. Region-based methods explicitly construct candidate regions so that the model can reason about potential objects.",
    },

    {
      type: "heading",
      title: "3. R-CNN Pipeline",
    },
    {
      type: "process",
      steps: [
        "Generate region proposals",
        "Resize proposals",
        "Extract CNN features",
        "Classify proposals",
        "Predict bounding-box corrections",
        "Return detections",
      ],
    },

    {
      type: "heading",
      title: "4. Region Proposals",
    },
    {
      type: "paragraph",
      text:
        "The original R-CNN uses a region-proposal method to generate many candidate regions. The important conceptual point is that the detector does not initially evaluate every possible rectangular region of the image.",
    },

    {
      type: "heading",
      title: "5. Original R-CNN",
    },
    {
      type: "paragraph",
      text:
        "The original R-CNN applies a pretrained CNN independently to each region proposal. Features extracted from these regions are then used for classification and bounding-box regression.",
    },

    {
      type: "heading",
      title: "6. Why Original R-CNN Is Expensive",
    },
    {
      type: "paragraph",
      text:
        "If an image contains thousands of region proposals, running the CNN separately for every proposal causes massive repeated computation.",
    },

    {
      type: "heading",
      title: "7. R-CNN Conceptual Code",
    },
    {
      type: "code",
      language: "python",
      code: `proposals = generate_proposals(image)

features = []

for region in proposals:
    crop = resize_region(image, region)
    feature = cnn(crop)
    features.append(feature)`,
    },

    {
      type: "heading",
      title: "8. Fast R-CNN",
    },
    {
      type: "paragraph",
      text:
        "Fast R-CNN reduces repeated computation by running the CNN once on the entire image. Region proposals are then projected onto the resulting feature map.",
    },

    {
      type: "process",
      steps: [
        "Run CNN once",
        "Generate region proposals",
        "Map proposals onto feature map",
        "Extract fixed-size region features",
        "Classify each region",
        "Predict bounding-box offsets",
      ],
    },

    {
      type: "heading",
      title: "9. Region of Interest Pooling",
    },
    {
      type: "paragraph",
      text:
        "Different region proposals have different shapes. RoI pooling converts each selected region into a fixed-size representation so that subsequent fully connected layers can process them consistently.",
    },

    {
      type: "heading",
      title: "10. RoI Pooling Intuition",
    },
    {
      type: "paragraph",
      text:
        "A selected region is divided into a fixed grid of spatial bins. Each bin summarizes its corresponding portion of the feature map, producing a fixed spatial output regardless of the original region size.",
    },

    {
      type: "code",
      language: "python",
      code: `roi_features = torchvision.ops.roi_pool(
    feature_map,
    rois,
    output_size=(7, 7),
    spatial_scale=0.25
)`,
    },

    {
      type: "heading",
      title: "11. Fast R-CNN Heads",
    },
    {
      type: "code",
      language: "python",
      code: `class_head = nn.Linear(feature_dim, num_classes)
box_head = nn.Linear(feature_dim, num_classes * 4)`,
    },

    {
      type: "heading",
      title: "12. Classification and Localization",
    },
    {
      type: "paragraph",
      text:
        "Fast R-CNN predicts both a class distribution and bounding-box adjustments for each region of interest.",
    },

    {
      type: "formula",
      formula: "L = L_class + λL_box",
      explanation:
        "The training objective combines classification and bounding-box regression.",
    },

    {
      type: "heading",
      title: "13. Faster R-CNN",
    },
    {
      type: "paragraph",
      text:
        "Fast R-CNN still depends on an external region-proposal mechanism. Faster R-CNN addresses this by learning region proposals with a Region Proposal Network, or RPN.",
    },

    {
      type: "heading",
      title: "14. Region Proposal Network",
    },
    {
      type: "process",
      steps: [
        "CNN produces feature map",
        "Small convolution processes feature map",
        "Anchors are generated",
        "RPN predicts objectness",
        "RPN predicts anchor offsets",
        "Candidate proposals are filtered",
        "Remaining proposals enter RoI processing",
      ],
    },

    {
      type: "heading",
      title: "15. RPN Objectness",
    },
    {
      type: "paragraph",
      text:
        "The RPN predicts whether an anchor is likely to correspond to an object or background. It also predicts localization offsets for promising anchors.",
    },

    {
      type: "heading",
      title: "16. Faster R-CNN Architecture",
    },
    {
      type: "code",
      language: "text",
      code: `Image
  ↓
Backbone CNN
  ↓
Shared Feature Map
  ├──→ Region Proposal Network
  │        ↓
  │    Proposals
  │        ↓
  └────→ RoI Feature Extraction
             ↓
        Classification
             +
        Bounding Boxes`,
    },

    {
      type: "heading",
      title: "17. Why Sharing Matters",
    },
    {
      type: "paragraph",
      text:
        "The backbone feature map is shared between the proposal network and the final detection stage. This avoids repeatedly computing low-level and mid-level visual features.",
    },

    {
      type: "heading",
      title: "18. Anchor Boxes in Faster R-CNN",
    },
    {
      type: "paragraph",
      text:
        "The RPN places multiple anchors at feature-map locations. Different scales and aspect ratios provide candidate shapes for objects.",
    },

    {
      type: "heading",
      title: "19. RPN Loss",
    },
    {
      type: "formula",
      formula: "L_RPN = L_objectness + λL_localization",
      explanation:
        "The RPN learns both whether anchors contain objects and how their boxes should be adjusted.",
    },

    {
      type: "heading",
      title: "20. Non-Maximum Suppression in RPN",
    },
    {
      type: "paragraph",
      text:
        "The RPN may produce many overlapping proposals. NMS reduces these candidates before they reach the later detection stage.",
    },

    {
      type: "heading",
      title: "21. Mask R-CNN",
    },
    {
      type: "paragraph",
      text:
        "Mask R-CNN extends Faster R-CNN by adding pixel-level object masks. Instead of predicting only a class and bounding box, it predicts a segmentation mask for each detected object.",
    },

    {
      type: "heading",
      title: "22. RoI Alignment",
    },
    {
      type: "paragraph",
      text:
        "Mask R-CNN uses RoI alignment rather than RoI pooling for more accurate spatial correspondence. RoI alignment uses interpolation to preserve finer spatial information.",
    },

    {
      type: "heading",
      title: "23. Mask Prediction Branch",
    },
    {
      type: "code",
      language: "python",
      code: `class MaskHead(nn.Module):
    def __init__(self, channels, num_classes):
        super().__init__()

        self.net = nn.Sequential(
            nn.Conv2d(channels, 256, 3, padding=1),
            nn.ReLU(),
            nn.Conv2d(256, num_classes, 1)
        )

    def forward(self, x):
        return self.net(x)`,
    },

    {
      type: "heading",
      title: "24. Comparing the R-CNN Family",
    },
    {
      type: "bullet",
      items: [
        "R-CNN: CNN features are extracted independently for proposals.",
        "Fast R-CNN: CNN features are computed once for the complete image.",
        "Faster R-CNN: region proposals are learned with an RPN.",
        "Mask R-CNN: adds pixel-level masks and uses RoI alignment.",
      ],
    },

    {
      type: "heading",
      title: "25. Object Detection vs Instance Segmentation",
    },
    {
      type: "paragraph",
      text:
        "Object detection provides class labels and rectangular bounding boxes. Instance segmentation additionally identifies the pixels belonging to each individual object instance.",
    },

    {
      type: "heading",
      title: "26. End-to-End Faster R-CNN Concept",
    },
    {
      type: "paragraph",
      text:
        "A major advantage of Faster R-CNN is that the region proposal mechanism becomes part of the trainable network rather than relying entirely on a separate proposal algorithm.",
    },

    {
      type: "heading",
      title: "27. Common Implementation Errors",
    },
    {
      type: "bullet",
      items: [
        "Incorrect spatial scale for RoI coordinates.",
        "Mixing image coordinates and feature-map coordinates.",
        "Using the wrong RoI tensor format.",
        "Forgetting background handling.",
        "Incorrect bounding-box decoding.",
        "Incorrect class-specific box dimensions.",
      ],
    },

    {
      type: "heading",
      title: "28. Debugging RoIs",
    },
    {
      type: "code",
      language: "python",
      code: `print("feature map:", feature_map.shape)
print("rois:", rois.shape)

pooled = torchvision.ops.roi_pool(
    feature_map,
    rois,
    output_size=(7, 7),
    spatial_scale=0.25
)

print("pooled:", pooled.shape)`,
    },

    {
      type: "heading",
      title: "29. Interview Questions",
    },
    {
      type: "qa",
      question: "What is the main problem with original R-CNN?",
      answer:
        "It performs CNN feature extraction separately for a large number of region proposals, causing substantial repeated computation.",
    },
    {
      type: "qa",
      question: "How does Fast R-CNN reduce computation?",
      answer:
        "It runs the CNN once on the complete image and extracts region features from the shared feature map.",
    },
    {
      type: "qa",
      question: "What does Faster R-CNN add?",
      answer:
        "A trainable Region Proposal Network that generates proposals from shared CNN features.",
    },
    {
      type: "qa",
      question: "What additional output does Mask R-CNN produce?",
      answer:
        "A pixel-level mask for each detected object.",
    },

    {
      type: "heading",
      title: "30. Coding Challenge",
    },
    {
      type: "paragraph",
      text:
        "Build a miniature region-based detector using a CNN backbone, a simple proposal generator, RoI pooling, and separate classification and bounding-box heads.",
    },

    {
      type: "heading",
      title: "31. Summary",
    },
    {
      type: "bullet",
      items: [
        "R-CNN introduced region-based CNN detection.",
        "Fast R-CNN shares CNN computation across proposals.",
        "RoI pooling converts variable-sized regions into fixed-size features.",
        "Faster R-CNN learns proposals using an RPN.",
        "Mask R-CNN adds instance-level segmentation.",
        "RoI alignment improves spatial precision for mask prediction.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "The R-CNN family progressively moves object detection from expensive independent region processing toward shared feature extraction, learned proposals, and finally pixel-level instance understanding.",
    },
  ],
};

export default lesson;