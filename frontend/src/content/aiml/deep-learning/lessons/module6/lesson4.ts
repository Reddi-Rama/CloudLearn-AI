const lesson4 = {
  id: "lesson4",
  title: "Anchor Boxes",
  description:
    "Understand anchor boxes, scales, aspect ratios, Intersection over Union, anchor assignment, bounding-box offsets, and non-maximum suppression.",

  duration: "130–155 min",
  difficulty: "Advanced",

  prerequisites: [
    "Object detection",
    "Bounding boxes",
    "CNNs",
    "Coordinate systems",
    "Probability"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to Anchor Boxes",
      content: `
Object detection requires finding objects with different:

• Sizes
• Shapes
• Aspect ratios
• Positions

A single fixed-size candidate region is not sufficient for all objects.

Anchor boxes provide multiple reference boxes with different scales and aspect ratios.

The detector can then predict:

1. Which anchor corresponds to an object.
2. What class the object belongs to.
3. How the anchor should be adjusted to better fit the object.
`
    },

    {
      type: "concept",
      title: "1. Why Reference Boxes Are Needed",
      content: `
Consider:

small object
large object
wide object
tall object

A single reference box cannot match all of them well.

Therefore detection systems can generate multiple candidate boxes.
`
    },

    {
      type: "concept",
      title: "2. Anchor Box",
      content: `
An anchor box is a predefined reference bounding box.

Multiple anchor boxes can be centered around the same image location.

They can have different:

• Scales
• Widths
• Heights
• Aspect ratios
`
    },

    {
      type: "concept",
      title: "3. Scale",
      content: `
Scale determines the overall size of an anchor box.

A larger scale creates a larger candidate region.

A smaller scale creates a smaller candidate region.
`
    },

    {
      type: "concept",
      title: "4. Aspect Ratio",
      content: `
Aspect ratio describes width relative to height.

r = width / height

Examples:

r = 1
→ square

r > 1
→ wider than tall

r < 1
→ taller than wide
`
    },

    {
      type: "formula",
      title: "5. Anchor Dimensions",
      content: `
For normalized image width W and height H, a simplified anchor construction uses:

anchor width ∝ s√r

anchor height ∝ s/√r

where:

s = scale

r = aspect ratio.
`
    },

    {
      type: "concept",
      title: "6. Multiple Scales and Ratios",
      content: `
Suppose we have:

scales:
s₁, s₂, s₃

ratios:
r₁, r₂, r₃

Combining every scale with every ratio creates many anchors.

The source discusses a reduced combination strategy to avoid unnecessary explosion in the number of anchors. :chatgpt-content-reference{index="10"}
`
    },

    {
      type: "concept",
      title: "7. Anchors Per Pixel",
      content: `
If an image contains:

H × W

pixel locations

and each location receives:

K

anchor boxes,

then the total number of anchors is approximately:

H × W × K.
`
    },

    {
      type: "concept",
      title: "8. Why Anchor Count Can Become Huge",
      content: `
Even a moderate image can contain hundreds of thousands or millions of anchor candidates.

Therefore the detector needs efficient computation and post-processing.
`
    },

    {
      type: "concept",
      title: "9. Anchor Coordinates",
      content: `
Anchor boxes can be represented using normalized corner coordinates:

[x₁, y₁, x₂, y₂]

where coordinates are relative to image dimensions.
`
    },

    {
      type: "concept",
      title: "10. Anchor Box Generation",
      content: `
Conceptually:

feature/image grid
↓
choose center point
↓
generate several scales
↓
generate several aspect ratios
↓
create anchor boxes
`
    },

    {
      type: "concept",
      title: "11. Anchor Tensor Shape",
      content: `
A collection of anchors can be represented as:

[batch, number_of_anchors, 4]

The final dimension contains:

x₁, y₁, x₂, y₂.
`
    },

    {
      type: "concept",
      title: "12. Intersection over Union",
      content: `
Intersection over Union, or IoU, measures the overlap between two bounding boxes.

It is defined as:

IoU
=
intersection area
/
union area
`
    },

    {
      type: "formula",
      title: "13. IoU Formula",
      content: `
IoU(A, B)
=
Area(A ∩ B)
/
Area(A ∪ B)

0 ≤ IoU ≤ 1
`
    },

    {
      type: "concept",
      title: "14. Interpreting IoU",
      content: `
IoU = 0

means:

no overlap

IoU ≈ 0.5

means:

moderate overlap

IoU = 1

means:

the boxes are identical.
`
    },

    {
      type: "concept",
      title: "15. Intersection Area",
      content: `
For two boxes, the intersection rectangle is obtained using:

maximum of left/top coordinates

and:

minimum of right/bottom coordinates.

If the resulting width or height is negative, the intersection area is zero.
`
    },

    {
      type: "code",
      language: "python",
      title: "IoU Implementation",
      content: `
def box_iou(boxes1, boxes2):

    def area(boxes):
        return (
            (boxes[:, 2] - boxes[:, 0])
            *
            (boxes[:, 3] - boxes[:, 1])
        )

    areas1 = area(boxes1)
    areas2 = area(boxes2)

    upper_left = torch.maximum(
        boxes1[:, None, :2],
        boxes2[:, :2]
    )

    lower_right = torch.minimum(
        boxes1[:, None, 2:],
        boxes2[:, 2:]
    )

    intersection = (
        lower_right - upper_left
    ).clamp(min=0)

    intersection_area = (
        intersection[:, :, 0]
        *
        intersection[:, :, 1]
    )

    union_area = (
        areas1[:, None]
        + areas2
        - intersection_area
    )

    return (
        intersection_area
        / union_area
    )
`
    },

    {
      type: "concept",
      title: "16. Matching Anchors to Objects",
      content: `
During training, each anchor needs training information.

The detector needs to know:

• Is this anchor associated with an object?
• Which object class?
• How should the anchor move to fit the object?
`
    },

    {
      type: "concept",
      title: "17. Ground-Truth Assignment",
      content: `
For each anchor:

1. Compare it with ground-truth boxes.
2. Calculate IoU.
3. Determine its assigned object.
4. Produce classification information.
5. Produce bounding-box offset information.
`
    },

    {
      type: "concept",
      title: "18. IoU Matrix",
      content: `
Suppose there are:

N anchors

and:

M ground-truth boxes.

Then we can construct an:

N × M

IoU matrix.

Each element represents the overlap between one anchor and one ground-truth box.
`
    },

    {
      type: "concept",
      title: "19. Assigning Ground Truth",
      content: `
The assignment procedure seeks strong matches between anchors and ground-truth boxes.

A high IoU indicates that an anchor is spatially compatible with an object.
`
    },

    {
      type: "concept",
      title: "20. Positive and Negative Anchors",
      content: `
After matching:

positive anchors

are associated with objects.

Negative anchors

represent background.

The model learns both:

object classification

and:

background recognition.
`
    },

    {
      type: "concept",
      title: "21. Bounding-Box Offsets",
      content: `
Instead of directly predicting the final coordinates, the detector can predict how an anchor should change.

For example:

move center left
move center down
increase width
decrease height
`
    },

    {
      type: "concept",
      title: "22. Offset Representation",
      content: `
For an anchor:

(cx, cy, w, h)

the model can predict offsets describing changes to:

center position

and:

size.
`
    },

    {
      type: "formula",
      title: "23. Conceptual Box Transformation",
      content: `
Predicted center:

cx' = cx + Δx

cy' = cy + Δy

Predicted dimensions:

w' = w × scale_w

h' = h × scale_h

The exact parameterization used by an implementation may use normalized and logarithmic transformations.
`
    },

    {
      type: "concept",
      title: "24. Prediction",
      content: `
During inference:

Image
↓
Generate anchors
↓
Predict class probabilities
↓
Predict offsets
↓
Transform anchors
↓
Obtain predicted boxes
↓
Remove redundant predictions
↓
Final detections
`
    },

    {
      type: "concept",
      title: "25. Why Many Predictions Occur",
      content: `
Several anchors can overlap the same object.

For example:

Anchor A → dog, 0.95
Anchor B → dog, 0.91
Anchor C → dog, 0.87
Anchor D → dog, 0.70

They may all correspond to the same physical dog.
`
    },

    {
      type: "concept",
      title: "26. Non-Maximum Suppression",
      content: `
Non-Maximum Suppression, or NMS, removes highly overlapping predictions.

The basic idea is:

keep the strongest prediction

and suppress nearby predictions that are too similar.
`
    },

    {
      type: "concept",
      title: "27. NMS Procedure",
      content: `
1. Sort predictions by confidence.
2. Select the highest-confidence prediction.
3. Compare it with remaining boxes.
4. Remove boxes whose IoU exceeds a threshold.
5. Select the next remaining highest-confidence box.
6. Repeat.
`
    },

    {
      type: "concept",
      title: "28. NMS Example",
      content: `
Suppose:

A = confidence 0.95
B = confidence 0.90
C = confidence 0.70

If:

IoU(A,B) > threshold

then B can be suppressed.

If:

IoU(A,C) < threshold

then C can remain.
`
    },

    {
      type: "code",
      language: "python",
      title: "Conceptual NMS",
      content: `
def nms(boxes, scores, threshold):

    order = torch.argsort(
        scores,
        descending=True
    )

    keep = []

    while order.numel() > 0:

        current = order[0]
        keep.append(current)

        if order.numel() == 1:
            break

        remaining = order[1:]

        overlaps = box_iou(
            boxes[current].reshape(1, 4),
            boxes[remaining]
        ).reshape(-1)

        order = remaining[
            overlaps <= threshold
        ]

    return torch.tensor(keep)
`
    },

    {
      type: "concept",
      title: "29. Confidence Threshold",
      content: `
Before NMS, systems can discard predictions with very low confidence.

This reduces unnecessary computation and removes obviously weak predictions.
`
    },

    {
      type: "concept",
      title: "30. NMS Threshold",
      content: `
The NMS IoU threshold controls how aggressively overlapping predictions are removed.

Lower threshold:

more suppression

Higher threshold:

less suppression.
`
    },

    {
      type: "concept",
      title: "31. Detection Pipeline with NMS",
      content: `
Anchors
↓
Class predictions
↓
Confidence scores
↓
Bounding-box offsets
↓
Predicted boxes
↓
Confidence filtering
↓
NMS
↓
Final detections
`
    },

    {
      type: "concept",
      title: "32. Anchor Boxes and CNN Feature Maps",
      content: `
In practical detectors, anchors can be associated with spatial positions in feature maps rather than directly with every original image pixel.

This allows the detector to use learned CNN features to make classification and localization predictions.
`
    },

    {
      type: "concept",
      title: "33. Advantages of Anchor Boxes",
      content: `
Anchor boxes provide:

• Multiple candidate shapes
• Multiple candidate scales
• Structured localization
• A reference for bounding-box regression
• A systematic way to assign training targets
`
    },

    {
      type: "concept",
      title: "34. Limitations",
      content: `
Anchor-based systems can create many candidate boxes.

This increases:

• Computation
• Memory requirements
• Post-processing work
• Hyperparameter choices
`
    },

    {
      type: "concept",
      title: "35. Important Hyperparameters",
      content: `
Important choices include:

• Anchor scales
• Aspect ratios
• IoU thresholds
• Confidence thresholds
• Number of anchors
• NMS threshold
`
    },

    {
      type: "exercise",
      title: "Exercise 1 — Calculate IoU",
      content: `
Box A:

[0, 0, 4, 4]

Box B:

[2, 2, 6, 6]

Calculate:

1. Intersection area
2. Union area
3. IoU
`
    },

    {
      type: "exercise",
      title: "Exercise 2 — NMS",
      content: `
Consider:

Box A → confidence 0.95
Box B → confidence 0.90
Box C → confidence 0.70

Suppose:

IoU(A,B) = 0.8
IoU(A,C) = 0.2

Using an NMS threshold of 0.5:

Which boxes should remain after processing A?
`
    },

    {
      type: "exercise",
      title: "Exercise 3 — Anchor Design",
      content: `
Design anchor configurations for:

1. Small square objects
2. Large square objects
3. Wide objects
4. Tall objects

Explain which scale and aspect ratio combinations you would choose.
`
    },

    {
      type: "exercise",
      title: "Exercise 4 — Visualization",
      content: `
For one image:

1. Generate several anchor boxes.
2. Display them.
3. Mark a ground-truth box.
4. Calculate IoU with each anchor.
5. Identify the strongest match.
`
    },

    {
      type: "qa",
      question: "What is an anchor box?",
      answer:
        "An anchor box is a predefined reference bounding box used as a starting point for object localization."
    },

    {
      type: "qa",
      question: "Why do we use multiple anchor boxes?",
      answer:
        "Objects have different sizes and aspect ratios, so multiple reference boxes provide better starting points for localization."
    },

    {
      type: "qa",
      question: "What is IoU?",
      answer:
        "IoU is the ratio of the intersection area of two boxes to their union area and measures their spatial overlap."
    },

    {
      type: "qa",
      question: "What is NMS?",
      answer:
        "Non-Maximum Suppression removes redundant highly overlapping predictions while retaining stronger detections."
    },

    {
      type: "qa",
      question: "Why are bounding-box offsets predicted?",
      answer:
        "Offsets allow the model to adjust a reference anchor so that it better matches the actual object's location and size."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Anchor boxes provide structured candidate regions for object detection.

The complete process is:

generate anchors
↓
calculate IoU
↓
assign training targets
↓
predict classes
↓
predict offsets
↓
transform anchors
↓
filter predictions
↓
apply NMS
↓
final detections

The source explicitly develops anchor generation using scales and aspect ratios, IoU, anchor-label assignment, offset prediction, and non-maximum suppression. 
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Anchor boxes turn object localization into a structured prediction problem by providing reference boxes that the network can classify and refine."
    }
  ]
};

export default lesson4;