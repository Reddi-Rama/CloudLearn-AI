const lesson1 = {
  id: "lesson1",
  title: "Image Augmentation",
  description:
    "Learn why image augmentation improves the robustness of computer-vision models and how common transformations change training images.",

  duration: "100–120 min",
  difficulty: "Intermediate–Advanced",

  prerequisites: [
    "CNN fundamentals",
    "Image tensors",
    "PyTorch basics",
    "Image classification"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to Image Augmentation",
      content: `
Deep neural networks often require large and diverse datasets.

In computer vision, obtaining additional labeled images can be expensive.

Image augmentation provides another approach.

Instead of collecting a completely new image for every training example, we can generate modified versions of existing images.

The modifications should preserve the semantic meaning of the original example while changing superficial visual characteristics.
`
    },

    {
      type: "concept",
      title: "1. The Basic Idea",
      content: `
Suppose we have:

Image → cat

We can generate:

cropped image → cat
flipped image → cat
slightly changed brightness → cat
slightly changed color → cat

The label remains:

cat

The model therefore sees multiple visual variations of the same underlying concept.
`
    },

    {
      type: "concept",
      title: "2. Why Augmentation Is Useful",
      content: `
A model can accidentally learn characteristics that are not essential to the task.

For example, suppose every training image places an object in the center.

A model might become overly dependent on object position.

Random cropping can expose the model to different positions.

Similarly, changing brightness or color can reduce sensitivity to those visual properties.
`
    },

    {
      type: "concept",
      title: "3. Generalization",
      content: `
The purpose of augmentation is not simply to make images look different.

The deeper objective is to encourage the model to learn features that remain useful under reasonable visual changes.

This can improve generalization to images that differ from the training examples.
`
    },

    {
      type: "concept",
      title: "4. Training-Time vs Test-Time Augmentation",
      content: `
Training-time augmentation is usually randomized.

Example:

random crop
random flip
random color modification

During evaluation, we generally use deterministic preprocessing.

Example:

resize
center crop
normalize
`
    },

    {
      type: "concept",
      title: "5. Random Cropping",
      content: `
Random cropping selects a region from the original image.

This changes:

• Object position
• Visible context
• Scale
• Composition

The crop should still contain enough information for the original label to remain meaningful.
`
    },

    {
      type: "code",
      language: "python",
      title: "Random Crop",
      content: `
from torchvision import transforms

train_transform = transforms.Compose([
    transforms.RandomResizedCrop(
        224
    ),
    transforms.ToTensor()
])
`
    },

    {
      type: "concept",
      title: "6. Horizontal Flipping",
      content: `
A horizontal flip mirrors an image from left to right.

For many object categories, the semantic label remains unchanged.

However, augmentation should only be used when the transformation is valid for the task.
`
    },

    {
      type: "code",
      language: "python",
      title: "Random Horizontal Flip",
      content: `
train_transform = transforms.Compose([
    transforms.RandomHorizontalFlip(
        p=0.5
    ),
    transforms.ToTensor()
])
`
    },

    {
      type: "concept",
      title: "7. Vertical Flipping",
      content: `
Vertical flipping is more task-dependent.

For some datasets it may be unrealistic.

For example, flipping a natural landscape vertically can produce an image distribution that does not represent realistic examples.

Therefore augmentation must respect the data domain.
`
    },

    {
      type: "concept",
      title: "8. Brightness Changes",
      content: `
Images can vary because of lighting.

Brightness augmentation changes the intensity of pixels.

The objective is to reduce excessive dependence on a particular lighting condition.
`
    },

    {
      type: "code",
      language: "python",
      title: "Brightness Augmentation",
      content: `
train_transform = transforms.Compose([
    transforms.ColorJitter(
        brightness=0.3
    ),
    transforms.ToTensor()
])
`
    },

    {
      type: "concept",
      title: "9. Contrast Changes",
      content: `
Contrast controls the difference between darker and brighter regions.

Random contrast changes can expose the model to different imaging conditions.
`
    },

    {
      type: "concept",
      title: "10. Color Changes",
      content: `
Color augmentation modifies image color properties.

It can reduce the tendency of a model to depend too heavily on a particular color distribution.
`
    },

    {
      type: "code",
      language: "python",
      title: "Color Augmentation",
      content: `
train_transform = transforms.Compose([
    transforms.ColorJitter(
        brightness=0.2,
        contrast=0.2,
        saturation=0.2,
        hue=0.05
    ),
    transforms.ToTensor()
])
`
    },

    {
      type: "concept",
      title: "11. Resizing",
      content: `
CNN architectures often require a fixed or controlled input size.

Resizing transforms images into a consistent spatial representation.

However, aggressive resizing can distort objects or remove important details.
`
    },

    {
      type: "concept",
      title: "12. Normalization",
      content: `
Normalization transforms pixel values into a numerical range appropriate for the model.

A common channel-wise normalization has the form:

x_normalized = (x - μ) / σ

where:

μ = channel mean

σ = channel standard deviation.
`
    },

    {
      type: "code",
      language: "python",
      title: "Image Normalization",
      content: `
normalize = transforms.Normalize(
    mean=[0.485, 0.456, 0.406],
    std=[0.229, 0.224, 0.225]
)
`
    },

    {
      type: "concept",
      title: "13. Combining Augmentations",
      content: `
Augmentations are often composed into a pipeline.

For example:

random crop
↓
random flip
↓
color variation
↓
tensor conversion
↓
normalization
`
    },

    {
      type: "code",
      language: "python",
      title: "Complete Training Transform",
      content: `
train_transform = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.ColorJitter(
        brightness=0.2,
        contrast=0.2,
        saturation=0.2
    ),
    transforms.ToTensor(),
    transforms.Normalize(
        [0.485, 0.456, 0.406],
        [0.229, 0.224, 0.225]
    )
])
`
    },

    {
      type: "concept",
      title: "14. Evaluation Transform",
      content: `
Evaluation should normally avoid random transformations.

A typical pipeline is:

resize
↓
center crop
↓
tensor conversion
↓
normalization
`
    },

    {
      type: "code",
      language: "python",
      title: "Evaluation Transform",
      content: `
test_transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(
        [0.485, 0.456, 0.406],
        [0.229, 0.224, 0.225]
    )
])
`
    },

    {
      type: "concept",
      title: "15. Augmentation and Label Preservation",
      content: `
An augmentation is useful only when it preserves the target meaning.

For classification:

image
→ transformation
→ same class

If a transformation changes the semantic class, the augmentation becomes harmful.
`
    },

    {
      type: "concept",
      title: "16. Over-Augmentation",
      content: `
Too much augmentation can make training examples unrealistic.

For example:

• Excessive rotation
• Extreme color changes
• Excessive cropping
• Strong distortion

can remove important information.

The objective is not maximum randomness.

The objective is useful variation.
`
    },

    {
      type: "concept",
      title: "17. Augmentation as an Inductive Bias",
      content: `
Augmentation expresses assumptions about the problem.

For example:

horizontal flip

implicitly assumes that the class does not depend on left-right orientation.
`
    },

    {
      type: "concept",
      title: "18. Augmentation and Dataset Size",
      content: `
Augmentation does not literally create unlimited independent information.

Instead, it creates varied training views of existing examples.

Its value comes from encouraging robustness to transformations that are relevant to the task.
`
    },

    {
      type: "concept",
      title: "19. Augmentation During Each Epoch",
      content: `
Random augmentation can produce a different transformed version of an image each time it is loaded.

Therefore the same original image may appear differently across epochs.
`
    },

    {
      type: "concept",
      title: "20. Augmentation Pipeline Debugging",
      content: `
Always visualize transformed images.

Check:

• Shape
• Color
• Orientation
• Crop
• Label
• Normalization
• Whether important objects remain visible
`
    },

    {
      type: "concept",
      title: "21. Dataset-Specific Augmentation",
      content: `
There is no universally correct augmentation pipeline.

Medical images, satellite images, traffic images, product images, and natural photographs have different invariances.

Augmentation must therefore reflect the actual application.
`
    },

    {
      type: "concept",
      title: "22. Augmentation and CNN Features",
      content: `
CNNs already provide some robustness through:

• Local receptive fields
• Shared filters
• Pooling
• Hierarchical representations

Augmentation adds additional variation at the data level.
`
    },

    {
      type: "concept",
      title: "23. Training Pipeline",
      content: `
The complete training pipeline becomes:

Raw image
↓
Augmentation
↓
Tensor conversion
↓
Normalization
↓
CNN
↓
Loss
↓
Backpropagation
↓
Parameter update
`
    },

    {
      type: "code",
      language: "python",
      title: "DataLoader Example",
      content: `
from torchvision.datasets import ImageFolder
from torch.utils.data import DataLoader

dataset = ImageFolder(
    "data/train",
    transform=train_transform
)

loader = DataLoader(
    dataset,
    batch_size=64,
    shuffle=True
)
`
    },

    {
      type: "concept",
      title: "24. Measuring Augmentation Effect",
      content: `
Do not assume augmentation always improves a model.

Compare:

Baseline
vs
Augmented training

Measure:

• Training accuracy
• Validation accuracy
• Validation loss
• Generalization gap
• Training time
`
    },

    {
      type: "exercise",
      title: "Experiment 1 — Flip Augmentation",
      content: `
Train a model:

A. Without flipping

B. With random horizontal flipping

Compare validation performance.

Explain why the difference occurs.
`
    },

    {
      type: "exercise",
      title: "Experiment 2 — Color Augmentation",
      content: `
Train with:

• No color augmentation
• Mild color augmentation
• Strong color augmentation

Compare the results and visualize examples.
`
    },

    {
      type: "exercise",
      title: "Experiment 3 — Build an Augmentation Pipeline",
      content: `
Create a pipeline containing:

1. Resize/crop
2. Horizontal flip
3. Color modification
4. Tensor conversion
5. Normalization

Display several transformed examples.
`
    },

    {
      type: "qa",
      question: "What is image augmentation?",
      answer:
        "It is the process of creating varied training examples by applying transformations to existing images."
    },

    {
      type: "qa",
      question: "Why is augmentation useful?",
      answer:
        "It can improve generalization by exposing the model to reasonable variations in the input data."
    },

    {
      type: "qa",
      question: "Should random augmentation normally be applied during testing?",
      answer:
        "No. Evaluation generally uses deterministic preprocessing so that results are reproducible."
    },

    {
      type: "qa",
      question: "Can excessive augmentation hurt performance?",
      answer:
        "Yes. If transformations become unrealistic or remove task-relevant information, the model can learn from distorted examples."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Image augmentation creates varied versions of training images.

Important techniques include:

• Random cropping
• Resizing
• Horizontal flipping
• Brightness changes
• Contrast changes
• Color changes
• Normalization
• Composed augmentation pipelines

The key idea is to make models less dependent on irrelevant visual attributes while preserving the semantic label. The source specifically motivates augmentation through dataset expansion and reduced dependence on properties such as object position, brightness, and color. :chatgpt-content-reference{index="4"}
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Good augmentation does not simply make images random; it introduces realistic variations that encourage the model to learn features that generalize."
    }
  ]
};

export default lesson1;