const lesson3 = {
  id: "lesson3",
  title: "Object Detection and Bounding Boxes",
  description:
    "Understand the difference between image classification and object detection, and learn how object locations are represented using bounding boxes.",

  duration: "100–120 min",
  difficulty: "Advanced",

  prerequisites: [
    "CNNs",
    "Image classification",
    "Tensor operations",
    "Coordinate systems"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to Object Detection",
      content: `
Image classification answers a question such as:

"What category does this image belong to?"

Object detection asks a richer question:

"What objects are present, what are their categories, and where are they located?"

An image can contain multiple objects.

Therefore a detection model must predict both semantic information and spatial information.
`
    },

    {
      type: "concept",
      title: "1. Classification vs Detection",
      content: `
Classification:

Image
↓
one or more class predictions

Detection:

Image
↓
object 1 → class + location
object 2 → class + location
object 3 → class + location
`
    },

    {
      type: "concept",
      title: "2. Example",
      content: `
Imagine an image containing:

dog
cat

A classifier might output:

dog / cat

An object detector should output something like:

dog → bounding box
cat → bounding box
`
    },

    {
      type: "concept",
      title: "3. Why Localization Matters",
      content: `
Knowing that an object exists is not enough for many applications.

A robot may need to know where an object is.

A vehicle may need to know where another vehicle is.

A security system may need to identify where an object appears in a frame.
`
    },

    {
      type: "concept",
      title: "4. Bounding Box",
      content: `
A bounding box is a rectangle surrounding an object.

A common representation is:

(x₁, y₁, x₂, y₂)

where:

(x₁, y₁)
= upper-left corner

(x₂, y₂)
= lower-right corner
`
    },

    {
      type: "concept",
      title: "5. Coordinate System",
      content: `
For image coordinates, a common convention is:

origin
→ upper-left

x
→ right

y
→ downward
`
    },

    {
      type: "concept",
      title: "6. Corner Representation",
      content: `
Corner representation stores:

left
top
right
bottom

as:

[x₁, y₁, x₂, y₂]
`
    },

    {
      type: "code",
      language: "python",
      title: "Corner Representation",
      content: `
bbox = torch.tensor([
    60.0,
    45.0,
    378.0,
    516.0
])
`
    },

    {
      type: "concept",
      title: "7. Center Representation",
      content: `
Another representation is:

(cx, cy, w, h)

where:

cx = center x-coordinate
cy = center y-coordinate
w = width
h = height
`
    },

    {
      type: "concept",
      title: "8. Converting Center to Corner",
      content: `
Given:

cx
cy
w
h

the corners are:

x₁ = cx - w/2

y₁ = cy - h/2

x₂ = cx + w/2

y₂ = cy + h/2
`
    },

    {
      type: "formula",
      title: "9. Center-to-Corner Formula",
      content: `
x₁ = cx - w/2
y₁ = cy - h/2

x₂ = cx + w/2
y₂ = cy + h/2
`
    },

    {
      type: "code",
      language: "python",
      title: "Center to Corner",
      content: `
def center_to_corner(box):
    cx, cy, w, h = box

    x1 = cx - w / 2
    y1 = cy - h / 2

    x2 = cx + w / 2
    y2 = cy + h / 2

    return torch.tensor([
        x1, y1, x2, y2
    ])
`
    },

    {
      type: "concept",
      title: "10. Converting Corner to Center",
      content: `
Given:

x₁, y₁, x₂, y₂

we calculate:

cx = (x₁ + x₂) / 2

cy = (y₁ + y₂) / 2

w = x₂ - x₁

h = y₂ - y₁
`
    },

    {
      type: "formula",
      title: "11. Corner-to-Center Formula",
      content: `
cx = (x₁ + x₂) / 2

cy = (y₁ + y₂) / 2

w = x₂ - x₁

h = y₂ - y₁
`
    },

    {
      type: "code",
      language: "python",
      title: "Corner to Center",
      content: `
def corner_to_center(box):
    x1, y1, x2, y2 = box

    cx = (x1 + x2) / 2
    cy = (y1 + y2) / 2

    w = x2 - x1
    h = y2 - y1

    return torch.tensor([
        cx, cy, w, h
    ])
`
    },

    {
      type: "concept",
      title: "12. Why Multiple Representations?",
      content: `
Different algorithms use different coordinate representations because each representation is convenient for different operations.

Corner coordinates are intuitive for drawing boxes.

Center-width-height coordinates are useful for describing offsets and dimensions.
`
    },

    {
      type: "concept",
      title: "13. Normalized Coordinates",
      content: `
Coordinates can also be normalized.

Instead of using pixel coordinates:

x = 300

we can represent:

x / image_width

This produces values approximately between 0 and 1.
`
    },

    {
      type: "concept",
      title: "14. Why Normalize?",
      content: `
Normalized coordinates make bounding-box representations less dependent on the absolute image resolution.

For example, a normalized coordinate can represent a similar relative position across different image sizes.
`
    },

    {
      type: "concept",
      title: "15. Bounding Box Tensor Shape",
      content: `
A bounding box requires four coordinates.

Therefore a collection of N boxes can be represented as:

[N, 4]

The last dimension contains:

x₁, y₁, x₂, y₂

or:

cx, cy, w, h
`
    },

    {
      type: "concept",
      title: "16. Multiple Objects",
      content: `
An image may contain:

N objects

Therefore the detector may output:

N bounding boxes

along with:

N class predictions

and:

N confidence scores.
`
    },

    {
      type: "concept",
      title: "17. Detection Output",
      content: `
A conceptual detection result is:

object 1:
class = dog
confidence = 0.91
box = (...)

object 2:
class = cat
confidence = 0.88
box = (...)
`
    },

    {
      type: "concept",
      title: "18. Ground-Truth Boxes",
      content: `
During training, the dataset contains manually annotated bounding boxes.

These are ground-truth boxes.

The model learns to produce predictions that are close to these annotations.
`
    },

    {
      type: "concept",
      title: "19. Bounding Box Regression",
      content: `
A detector often predicts adjustments to a reference region rather than directly predicting absolute coordinates.

This idea becomes important when we study anchor boxes.
`
    },

    {
      type: "concept",
      title: "20. Bounding Box Visualization",
      content: `
Visualization is extremely important.

Always inspect:

• Image
• Ground-truth box
• Predicted box
• Class label
• Confidence
`
    },

    {
      type: "code",
      language: "python",
      title: "Simple Bounding Box Plot",
      content: `
import matplotlib.pyplot as plt
import matplotlib.patches as patches

fig, ax = plt.subplots()

ax.imshow(image)

x1, y1, x2, y2 = bbox

rect = patches.Rectangle(
    (x1, y1),
    x2 - x1,
    y2 - y1,
    fill=False
)

ax.add_patch(rect)

plt.show()
`
    },

    {
      type: "concept",
      title: "21. Bounding Box Errors",
      content: `
Possible errors include:

• Box too large
• Box too small
• Wrong position
• Wrong aspect ratio
• Box around the wrong object
• Missing object
`
    },

    {
      type: "concept",
      title: "22. Classification Error vs Localization Error",
      content: `
A detector can make different types of mistakes.

Classification error:

correct location
+
wrong class

Localization error:

correct object
+
incorrect box
`
    },

    {
      type: "concept",
      title: "23. Object Detection Pipeline",
      content: `
A simplified pipeline is:

Image
↓
CNN feature extraction
↓
candidate regions / reference boxes
↓
class prediction
↓
location prediction
↓
post-processing
↓
final detections
`
    },

    {
      type: "concept",
      title: "24. Why Detection Is Harder Than Classification",
      content: `
Classification usually requires predicting a class.

Detection must additionally determine:

• How many objects exist
• Where each object is
• Which prediction corresponds to which object
• Which overlapping predictions should be retained
`
    },

    {
      type: "exercise",
      title: "Exercise 1 — Draw Bounding Boxes",
      content: `
Take any image containing multiple objects.

For each object:

1. Draw a bounding box.
2. Record corner coordinates.
3. Convert them to center coordinates.
4. Convert them back.
5. Verify the original coordinates are recovered.
`
    },

    {
      type: "exercise",
      title: "Exercise 2 — Coordinate Conversion",
      content: `
Given:

[x₁, y₁, x₂, y₂]
=
[50, 40, 250, 340]

Calculate:

cx
cy
w
h
`
    },

    {
      type: "exercise",
      title: "Exercise 3 — Normalized Coordinates",
      content: `
For an image of width 1000 and height 800:

x₁ = 100
y₁ = 200
x₂ = 500
y₂ = 600

Convert the box to normalized coordinates.
`
    },

    {
      type: "qa",
      question: "What is object detection?",
      answer:
        "Object detection identifies objects in an image and estimates their locations."
    },

    {
      type: "qa",
      question: "What is a bounding box?",
      answer:
        "A rectangular region used to represent the location of an object."
    },

    {
      type: "qa",
      question: "Why are there four bounding-box coordinates?",
      answer:
        "A rectangle can be represented using two corner points, each containing an x and y coordinate."
    },

    {
      type: "qa",
      question: "What is the difference between corner and center representations?",
      answer:
        "Corner representation stores two corners, while center representation stores the center position plus width and height."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Object detection extends classification by adding spatial localization.

Important concepts:

• Object detection
• Bounding boxes
• Coordinate systems
• Corner representation
• Center representation
• Coordinate conversion
• Normalized coordinates
• Ground-truth boxes
• Bounding-box regression
• Localization errors

The source emphasizes that object detection identifies both object categories and their positions, with rectangular bounding boxes used to represent locations. 
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Object detection must answer two questions simultaneously: what objects are present and where those objects are located."
    }
  ]
};

export default lesson3;