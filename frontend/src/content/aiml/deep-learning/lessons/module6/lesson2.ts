const lesson2 = {
  id: "lesson2",
  title: "Fine-Tuning",
  description:
    "Understand transfer learning, pretrained CNNs, replacing output layers, freezing parameters, and fine-tuning models for new computer-vision tasks.",

  duration: "105–125 min",
  difficulty: "Advanced",

  prerequisites: [
    "CNN architectures",
    "Image classification",
    "Optimization",
    "PyTorch models",
    "Image augmentation"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to Fine-Tuning",
      content: `
Training a deep neural network from random initialization can require a large dataset and significant computational resources.

A pretrained model provides another approach.

Instead of learning everything from the beginning, we start from parameters learned on a large source dataset and adapt them to a new target task.

This is called transfer learning.

Fine-tuning is one common form of transfer learning.
`
    },

    {
      type: "concept",
      title: "1. Source and Target Tasks",
      content: `
Transfer learning involves:

Source dataset
↓
Pretrained model
↓
Target dataset
↓
Adapted model
`
    },

    {
      type: "concept",
      title: "2. Why Transfer Learning Works",
      content: `
Early CNN layers often learn general visual patterns such as:

• Edges
• Textures
• Simple shapes

Deeper layers tend to represent increasingly task-specific patterns.

Therefore features learned from a large image dataset can often be useful for another visual task.
`
    },

    {
      type: "concept",
      title: "3. Pretrained Network",
      content: `
A pretrained model has already learned parameters.

Instead of:

random initialization
↓
training

we begin with:

pretrained parameters
↓
adaptation
↓
fine-tuning
`
    },

    {
      type: "concept",
      title: "4. Target Output Layer",
      content: `
Suppose a pretrained model predicts:

1000 classes

but the target problem contains:

2 classes.

The original output layer is therefore not directly suitable.

We replace it with a new output layer having two outputs.
`
    },

    {
      type: "code",
      language: "python",
      title: "Replacing the Output Layer",
      content: `
import torchvision
from torch import nn

model = torchvision.models.resnet18(
    weights="DEFAULT"
)

model.fc = nn.Linear(
    model.fc.in_features,
    2
)
`
    },

    {
      type: "concept",
      title: "5. Feature Layers vs Output Layer",
      content: `
A pretrained CNN can conceptually be divided into:

Feature extractor
+
Task-specific output layer

The feature extractor provides learned visual representations.

The new output layer maps those representations to target classes.
`
    },

    {
      type: "concept",
      title: "6. Training Only the New Layer",
      content: `
One strategy is:

freeze pretrained layers

and:

train only the new output layer.

This is useful when the target dataset is small or when we want to reduce computation.
`
    },

    {
      type: "code",
      language: "python",
      title: "Freezing Feature Parameters",
      content: `
for name, param in model.named_parameters():
    if not name.startswith("fc."):
        param.requires_grad = False
`
    },

    {
      type: "concept",
      title: "7. Full Fine-Tuning",
      content: `
Another strategy is to update the pretrained layers as well.

Then:

pretrained parameters
↓
small updates

while:

new output parameters
↓
learned from scratch
`
    },

    {
      type: "concept",
      title: "8. Different Learning Rates",
      content: `
Pretrained parameters already contain useful information.

Therefore they can often be updated using a smaller learning rate.

The newly initialized output layer may need a larger learning rate because it starts without task-specific knowledge.
`
    },

    {
      type: "formula",
      title: "9. Parameter-Specific Learning Rates",
      content: `
Suppose:

η = base learning rate

A new output layer can use:

η_output = kη

where k > 1

while pretrained layers use:

η_pretrained = η
`
    },

    {
      type: "code",
      language: "python",
      title: "Parameter Groups",
      content: `
base_lr = 1e-4

feature_params = []
output_params = []

for name, param in model.named_parameters():
    if name.startswith("fc."):
        output_params.append(param)
    else:
        feature_params.append(param)

optimizer = torch.optim.SGD([
    {
        "params": feature_params,
        "lr": base_lr
    },
    {
        "params": output_params,
        "lr": base_lr * 10
    }
])
`
    },

    {
      type: "concept",
      title: "10. Why Not Use the Same Learning Rate?",
      content: `
A very large learning rate can destroy useful pretrained representations.

A very small learning rate can make the new output layer learn too slowly.

Different parameter groups allow more controlled adaptation.
`
    },

    {
      type: "concept",
      title: "11. Target Dataset Size",
      content: `
Dataset size influences the fine-tuning strategy.

Small target dataset:

→ freeze more layers
→ stronger regularization
→ careful augmentation

Larger target dataset:

→ more layers can potentially be fine-tuned
→ more task-specific adaptation is possible
`
    },

    {
      type: "concept",
      title: "12. Source and Target Similarity",
      content: `
The similarity between source and target tasks matters.

If the target images are visually similar to the source dataset, pretrained representations may transfer effectively.

If the domains differ substantially, deeper fine-tuning may be necessary.
`
    },

    {
      type: "concept",
      title: "13. Fine-Tuning Pipeline",
      content: `
The workflow is:

Load pretrained model
↓
Replace output layer
↓
Initialize new output parameters
↓
Choose trainable layers
↓
Choose learning rates
↓
Train on target dataset
↓
Evaluate
`
    },

    {
      type: "code",
      language: "python",
      title: "Fine-Tuning Skeleton",
      content: `
import torch
from torch import nn
import torchvision

model = torchvision.models.resnet18(
    weights="DEFAULT"
)

model.fc = nn.Linear(
    model.fc.in_features,
    2
)

device = torch.device(
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

model = model.to(device)

criterion = nn.CrossEntropyLoss()

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=1e-4,
    weight_decay=1e-3
)
`
    },

    {
      type: "concept",
      title: "14. Data Preprocessing Compatibility",
      content: `
The preprocessing used for a pretrained model matters.

If the pretrained model expects a particular normalization scheme, the target dataset should generally use compatible preprocessing when appropriate.
`
    },

    {
      type: "concept",
      title: "15. Fine-Tuning vs Training From Scratch",
      content: `
Training from scratch:

random parameters
↓
learn low-level features
↓
learn high-level features
↓
learn target classifier

Fine-tuning:

pretrained representations
↓
adapt representations
↓
learn target classifier
`
    },

    {
      type: "concept",
      title: "16. Why Fine-Tuning Can Train Faster",
      content: `
The pretrained model begins with useful representations.

Therefore optimization does not necessarily need to discover all visual features from random initialization.
`
    },

    {
      type: "concept",
      title: "17. Freezing Parameters",
      content: `
A frozen parameter has:

requires_grad = False

It will not receive gradient updates during training.
`
    },

    {
      type: "concept",
      title: "18. Extracting Features Without Fine-Tuning",
      content: `
Another transfer-learning strategy is to use the pretrained network as a fixed feature extractor.

Then:

image
↓
pretrained network
↓
feature vector
↓
new classifier
`
    },

    {
      type: "code",
      language: "python",
      title: "Feature Extraction Concept",
      content: `
with torch.no_grad():
    features = backbone(images)

outputs = classifier(
    features
)
`
    },

    {
      type: "concept",
      title: "19. Fine-Tuning the Whole Network",
      content: `
If the target dataset is sufficiently large and sufficiently different, updating deeper feature layers may improve adaptation.

However, this also increases:

• Training cost
• Memory usage
• Risk of overfitting
`
    },

    {
      type: "concept",
      title: "20. Overfitting During Fine-Tuning",
      content: `
A pretrained network does not guarantee good generalization.

A small target dataset can still cause overfitting.

Useful techniques include:

• Data augmentation
• Weight decay
• Early stopping
• Smaller learning rates
• Freezing layers
`
    },

    {
      type: "concept",
      title: "21. Fine-Tuning Experiment Design",
      content: `
Compare at least:

Experiment A:
train from scratch

Experiment B:
pretrained + new output layer

Experiment C:
pretrained + partial fine-tuning

Experiment D:
pretrained + full fine-tuning
`
    },

    {
      type: "concept",
      title: "22. What to Measure",
      content: `
Measure:

• Training loss
• Validation loss
• Training accuracy
• Validation accuracy
• Training time
• Number of trainable parameters
• GPU memory usage
`
    },

    {
      type: "concept",
      title: "23. Trainable Parameter Count",
      content: `
Counting trainable parameters helps understand the computational difference between:

full fine-tuning

and:

frozen feature extraction.
`
    },

    {
      type: "code",
      language: "python",
      title: "Count Trainable Parameters",
      content: `
trainable = sum(
    p.numel()
    for p in model.parameters()
    if p.requires_grad
)

print(
    "Trainable parameters:",
    trainable
)
`
    },

    {
      type: "concept",
      title: "24. Practical Fine-Tuning Checklist",
      content: `
Before training:

1. Load correct pretrained model.
2. Replace output layer.
3. Verify output dimension.
4. Verify input preprocessing.
5. Decide which layers are trainable.
6. Select learning rates.
7. Verify dataset labels.
8. Start with a small experiment.
`
    },

    {
      type: "exercise",
      title: "Exercise 1 — Two-Class Fine-Tuning",
      content: `
Take a pretrained ResNet.

Replace the output layer with two outputs.

Train it on a two-class image dataset.

Record validation accuracy.
`
    },

    {
      type: "exercise",
      title: "Exercise 2 — Frozen vs Trainable",
      content: `
Compare:

A. Frozen feature extractor

B. Fine-tuned feature extractor

Measure training time and validation accuracy.
`
    },

    {
      type: "exercise",
      title: "Exercise 3 — Learning Rate Groups",
      content: `
Compare:

same learning rate for all parameters

against:

small learning rate for pretrained layers
+
larger learning rate for new output layer.
`
    },

    {
      type: "qa",
      question: "What is transfer learning?",
      answer:
        "It is the reuse of knowledge learned from a source task or dataset to help solve a target task."
    },

    {
      type: "qa",
      question: "What is fine-tuning?",
      answer:
        "Fine-tuning adapts a pretrained model to a new task by continuing training on the target dataset."
    },

    {
      type: "qa",
      question: "Why replace the output layer?",
      answer:
        "The pretrained output layer is designed for the source dataset's classes and may not match the target task."
    },

    {
      type: "qa",
      question: "Why can the new output layer use a larger learning rate?",
      answer:
        "Its parameters are newly initialized and need to learn the target task from scratch, while pretrained layers already contain useful representations."
    },

    {
      type: "qa",
      question: "What does freezing a layer mean?",
      answer:
        "Its parameters are excluded from gradient-based updates during training."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Fine-tuning transfers knowledge from a pretrained model to a target task.

The major workflow is:

pretrained network
↓
replace output layer
↓
initialize target output
↓
choose trainable layers
↓
choose learning rates
↓
train on target data

The source specifically describes replacing the pretrained output layer, transferring the pretrained feature parameters, and using a smaller learning rate for pretrained parameters while allowing the new output layer to learn more aggressively. 
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Fine-tuning lets a model start from useful visual representations instead of learning every feature from random initialization, often making transfer to a new vision task more efficient."
    }
  ]
};

export default lesson2;