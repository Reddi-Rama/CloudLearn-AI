export const lesson = {
  id: "lesson13",
  title: "Image Classification with CIFAR-10",
  subtitle:
    "Building a complete image-classification competition workflow with CNNs and augmentation",
  duration: "130–155 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "This lesson turns the computer-vision concepts studied so far into a complete image-classification workflow. The CIFAR-10 task provides a compact environment for practicing dataset organization, image augmentation, CNN design, training, validation, testing, and prediction export.",
    },

    {
      type: "heading",
      title: "2. CIFAR-10 Dataset",
    },
    {
      type: "paragraph",
      text:
        "CIFAR-10 is a small-image classification dataset containing ten object categories. The images are compact RGB images, making the dataset practical for experimenting with CNN architectures and training pipelines.",
    },

    {
      type: "heading",
      title: "3. Classification Problem",
    },
    {
      type: "formula",
      formula: "f(X) → y",
      explanation:
        "The CNN receives an image X and predicts a class y.",
    },

    {
      type: "heading",
      title: "4. Complete Workflow",
    },
    {
      type: "process",
      steps: [
        "Obtain dataset",
        "Organize image files",
        "Split training and validation data",
        "Apply augmentation",
        "Create DataLoaders",
        "Define CNN",
        "Train model",
        "Validate model",
        "Tune hyperparameters",
        "Train final model",
        "Predict test images",
        "Create submission file",
      ],
    },

    {
      type: "heading",
      title: "5. Dataset Organization",
    },
    {
      type: "paragraph",
      text:
        "Competition-style datasets commonly contain image files together with metadata identifying their labels. A robust training pipeline first converts this raw organization into a form that can be consumed efficiently by a DataLoader.",
    },

    {
      type: "heading",
      title: "6. Training and Validation Split",
    },
    {
      type: "paragraph",
      text:
        "The training data can be divided into a training subset and a validation subset. The validation set provides an estimate of how the model behaves on examples that were not used for parameter updates.",
    },

    {
      type: "code",
      language: "python",
      code: `train_size = int(0.9 * len(dataset))
valid_size = len(dataset) - train_size

train_ds, valid_ds = torch.utils.data.random_split(
    dataset,
    [train_size, valid_size]
)`,
    },

    {
      type: "heading",
      title: "7. Why Validation Matters",
    },
    {
      type: "paragraph",
      text:
        "Training loss alone cannot tell you whether a model generalizes well. Validation performance helps identify overfitting and provides evidence for comparing training configurations.",
    },

    {
      type: "heading",
      title: "8. Image Augmentation",
    },
    {
      type: "paragraph",
      text:
        "The source uses image augmentation to create varied training examples. For small image classification tasks, random cropping, horizontal flipping, and normalization can provide useful regularization.",
    },

    {
      type: "code",
      language: "python",
      code: `train_transform = transforms.Compose([
    transforms.RandomCrop(32, padding=4),
    transforms.RandomHorizontalFlip(),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=(0.5, 0.5, 0.5),
        std=(0.5, 0.5, 0.5)
    )
])`,
    },

    {
      type: "heading",
      title: "9. Validation Transform",
    },
    {
      type: "paragraph",
      text:
        "Validation and test data should normally use deterministic preprocessing rather than random augmentation.",
    },

    {
      type: "code",
      language: "python",
      code: `valid_transform = transforms.Compose([
    transforms.ToTensor(),
    transforms.Normalize(
        mean=(0.5, 0.5, 0.5),
        std=(0.5, 0.5, 0.5)
    )
])`,
    },

    {
      type: "heading",
      title: "10. DataLoader",
    },
    {
      type: "code",
      language: "python",
      code: `train_loader = DataLoader(
    train_ds,
    batch_size=128,
    shuffle=True,
    num_workers=4
)

valid_loader = DataLoader(
    valid_ds,
    batch_size=128,
    shuffle=False,
    num_workers=4
)`,
    },

    {
      type: "heading",
      title: "11. CNN Architecture",
    },
    {
      type: "paragraph",
      text:
        "A compact CNN can combine convolution, activation, normalization, and pooling layers. The network gradually converts local visual patterns into higher-level representations.",
    },

    {
      type: "code",
      language: "python",
      code: `class CIFARNet(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        self.features = nn.Sequential(
            nn.Conv2d(3, 64, 3, padding=1),
            nn.BatchNorm2d(64),
            nn.ReLU(),

            nn.Conv2d(64, 64, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),

            nn.Conv2d(64, 128, 3, padding=1),
            nn.BatchNorm2d(128),
            nn.ReLU(),

            nn.MaxPool2d(2)
        )

        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(128 * 8 * 8, 256),
            nn.ReLU(),
            nn.Dropout(0.5),
            nn.Linear(256, num_classes)
        )

    def forward(self, x):
        return self.classifier(
            self.features(x)
        )`,
    },

    {
      type: "heading",
      title: "12. Loss Function",
    },
    {
      type: "code",
      language: "python",
      code: `criterion = nn.CrossEntropyLoss()`,
    },

    {
      type: "heading",
      title: "13. Optimizer",
    },
    {
      type: "code",
      language: "python",
      code: `optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.1,
    momentum=0.9,
    weight_decay=5e-4
)`,
    },

    {
      type: "heading",
      title: "14. Learning Rate Scheduling",
    },
    {
      type: "paragraph",
      text:
        "The source demonstrates reducing the learning rate at predefined intervals. Learning-rate schedules allow the optimizer to make larger updates during early training and smaller updates later.",
    },

    {
      type: "code",
      language: "python",
      code: `scheduler = torch.optim.lr_scheduler.StepLR(
    optimizer,
    step_size=50,
    gamma=0.1
)`,
    },

    {
      type: "heading",
      title: "15. Training Loop",
    },
    {
      type: "code",
      language: "python",
      code: `for epoch in range(num_epochs):
    model.train()

    for X, y in train_loader:
        X = X.to(device)
        y = y.to(device)

        optimizer.zero_grad()

        logits = model(X)

        loss = criterion(
            logits,
            y
        )

        loss.backward()
        optimizer.step()

    scheduler.step()`,
    },

    {
      type: "heading",
      title: "16. Accuracy",
    },
    {
      type: "code",
      language: "python",
      code: `predicted = logits.argmax(dim=1)

accuracy = (
    predicted == y
).float().mean()`,
    },

    {
      type: "heading",
      title: "17. Validation Loop",
    },
    {
      type: "code",
      language: "python",
      code: `model.eval()

correct = 0
total = 0

with torch.no_grad():
    for X, y in valid_loader:
        X = X.to(device)
        y = y.to(device)

        logits = model(X)
        pred = logits.argmax(dim=1)

        correct += (pred == y).sum().item()
        total += y.numel()

accuracy = correct / total`,
    },

    {
      type: "heading",
      title: "18. Training Curves",
    },
    {
      type: "paragraph",
      text:
        "Record training and validation loss together with training and validation accuracy. These curves can reveal underfitting, overfitting, unstable optimization, and insufficient training.",
    },

    {
      type: "heading",
      title: "19. Overfitting",
    },
    {
      type: "paragraph",
      text:
        "If training accuracy continues increasing while validation accuracy stops improving or begins declining, the model may be memorizing training examples instead of improving generalization.",
    },

    {
      type: "heading",
      title: "20. Data Augmentation as Regularization",
    },
    {
      type: "paragraph",
      text:
        "Augmentation exposes the model to different valid versions of training images. This can reduce dependence on superficial image-specific patterns.",
    },

    {
      type: "heading",
      title: "21. Hyperparameter Tuning",
    },
    {
      type: "bullet",
      items: [
        "Batch size",
        "Learning rate",
        "Number of epochs",
        "Weight decay",
        "Augmentation strength",
        "Network depth",
        "Number of channels",
        "Dropout probability",
      ],
    },

    {
      type: "heading",
      title: "22. Test Prediction",
    },
    {
      type: "code",
      language: "python",
      code: `predictions = []

model.eval()

with torch.no_grad():
    for X in test_loader:
        X = X.to(device)

        logits = model(X)

        predictions.extend(
            logits.argmax(dim=1)
            .cpu()
            .tolist()
        )`,
    },

    {
      type: "heading",
      title: "23. Creating a Submission File",
    },
    {
      type: "code",
      language: "python",
      code: `import pandas as pd

submission = pd.DataFrame({
    "id": test_ids,
    "label": predictions
})

submission.to_csv(
    "submission.csv",
    index=False
)`,
    },

    {
      type: "heading",
      title: "24. Reproducibility",
    },
    {
      type: "code",
      language: "python",
      code: `import random
import numpy as np
import torch

seed = 42

random.seed(seed)
np.random.seed(seed)
torch.manual_seed(seed)

if torch.cuda.is_available():
    torch.cuda.manual_seed_all(seed)`,
    },

    {
      type: "heading",
      title: "25. GPU Usage",
    },
    {
      type: "code",
      language: "python",
      code: `device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

model = model.to(device)`,
    },

    {
      type: "heading",
      title: "26. Debugging the Pipeline",
    },
    {
      type: "bullet",
      items: [
        "Print one batch shape.",
        "Visualize augmented images.",
        "Check class labels.",
        "Run one batch through the model.",
        "Verify the output has ten classes.",
        "Run one optimizer step before full training.",
        "Check validation independently.",
      ],
    },

    {
      type: "heading",
      title: "27. Useful Shape Test",
    },
    {
      type: "code",
      language: "python",
      code: `X, y = next(iter(train_loader))

print("input:", X.shape)
print("label:", y.shape)

output = model(
    X.to(device)
)

print("output:", output.shape)`,
    },

    {
      type: "heading",
      title: "28. Practical Experiments",
    },
    {
      type: "bullet",
      items: [
        "Train without augmentation.",
        "Train with augmentation.",
        "Change learning rate.",
        "Change batch size.",
        "Add or remove dropout.",
        "Increase network depth.",
        "Compare SGD and Adam.",
      ],
    },

    {
      type: "heading",
      title: "29. Interview Questions",
    },
    {
      type: "qa",
      question: "Why separate training and validation transformations?",
      answer:
        "Training may use random augmentation, while validation should provide a stable measurement of model performance.",
    },
    {
      type: "qa",
      question: "Why use a learning-rate scheduler?",
      answer:
        "It changes the learning rate during training so optimization can become more refined later in training.",
    },
    {
      type: "qa",
      question: "Why is augmentation useful?",
      answer:
        "It creates varied training examples that can improve generalization.",
    },

    {
      type: "heading",
      title: "30. Full Project Challenge",
    },
    {
      type: "paragraph",
      text:
        "Build a complete CIFAR-10 classifier. Include data loading, augmentation, CNN architecture, training, validation, learning-rate scheduling, checkpoint saving, evaluation, test prediction, and submission-file generation.",
    },

    {
      type: "heading",
      title: "31. Summary",
    },
    {
      type: "bullet",
      items: [
        "CIFAR-10 provides a compact CNN classification environment.",
        "A complete project requires more than defining a network.",
        "Dataset organization and preprocessing are critical.",
        "Augmentation can improve generalization.",
        "Validation is required for meaningful evaluation.",
        "Learning-rate schedules can improve optimization.",
        "A competition workflow ends with test prediction and submission generation.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "A real computer-vision developer must be able to build the complete pipeline—from raw image files and augmentation to training, validation, debugging, evaluation, and final prediction export.",
    },
  ],
};

export default lesson;