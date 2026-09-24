export const lesson = {
  id: "lesson14",
  title: "Dog Breed Identification with Transfer Learning",
  subtitle:
    "Applying pretrained CNNs to a larger real-world image classification problem",
  duration: "140–170 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Dog breed identification provides a realistic transfer-learning problem. Unlike compact datasets such as CIFAR-10, the images are larger and have varying dimensions, while the classification task contains many categories.",
    },

    {
      type: "heading",
      title: "2. Competition Dataset",
    },
    {
      type: "paragraph",
      text:
        "The source describes the Kaggle Dog Breed Identification competition as a classification task involving 120 dog breeds. The dataset is derived from ImageNet and contains substantially larger images than CIFAR-10.",
    },

    {
      type: "heading",
      title: "3. Dataset Scale",
    },
    {
      type: "paragraph",
      text:
        "The source describes 10,222 training JPEG images and 10,357 test images, with 120 breed categories. The varying image dimensions create additional preprocessing requirements.",
    },

    {
      type: "heading",
      title: "4. Dataset Organization",
    },
    {
      type: "code",
      language: "text",
      code: `dog-breed-identification/
├── labels.csv
├── sample_submission.csv
├── train/
└── test/`,
    },

    {
      type: "heading",
      title: "5. Labels",
    },
    {
      type: "paragraph",
      text:
        "The training metadata associates image identifiers with breed labels. These labels can be transformed into a class-index representation for neural-network training.",
    },

    {
      type: "heading",
      title: "6. Why Transfer Learning?",
    },
    {
      type: "paragraph",
      text:
        "Training a deep CNN from random initialization requires substantial data and computation. A pretrained ImageNet model already contains useful low-level and mid-level visual representations.",
    },

    {
      type: "heading",
      title: "7. Transfer Learning Pipeline",
    },
    {
      type: "process",
      steps: [
        "Load pretrained CNN",
        "Remove original classifier",
        "Add task-specific classifier",
        "Freeze or partially freeze pretrained layers",
        "Prepare dog dataset",
        "Resize and augment images",
        "Train new output layer",
        "Optionally fine-tune deeper layers",
        "Validate",
        "Train final model",
        "Predict test probabilities",
        "Create submission",
      ],
    },

    {
      type: "heading",
      title: "8. Pretrained Model",
    },
    {
      type: "code",
      language: "python",
      code: `net = torchvision.models.resnet18(
    weights="DEFAULT"
)`,
    },

    {
      type: "heading",
      title: "9. Replacing the Classifier",
    },
    {
      type: "code",
      language: "python",
      code: `num_classes = 120

net.fc = nn.Linear(
    net.fc.in_features,
    num_classes
)`,
    },

    {
      type: "heading",
      title: "10. Freezing the Backbone",
    },
    {
      type: "code",
      language: "python",
      code: `for parameter in net.parameters():
    parameter.requires_grad = False

for parameter in net.fc.parameters():
    parameter.requires_grad = True`,
    },

    {
      type: "heading",
      title: "11. Why Freeze Layers?",
    },
    {
      type: "paragraph",
      text:
        "Freezing the pretrained backbone reduces the number of parameters that need to be updated. This can reduce computation and reduce the risk of destroying useful pretrained representations when the target dataset is relatively small.",
    },

    {
      type: "heading",
      title: "12. Fine-Tuning the Entire Model",
    },
    {
      type: "paragraph",
      text:
        "After training the new classifier, selected pretrained layers can also be fine-tuned. This allows the representation to adapt to the target task.",
    },

    {
      type: "heading",
      title: "13. Different Learning Rates",
    },
    {
      type: "paragraph",
      text:
        "A newly initialized classification layer may require larger updates than pretrained parameters. Parameter groups can therefore assign different learning rates to different parts of the network.",
    },

    {
      type: "code",
      language: "python",
      code: `optimizer = torch.optim.Adam([
    {
        "params": net.fc.parameters(),
        "lr": 1e-3
    },
    {
        "params": [
            p for name, p in net.named_parameters()
            if not name.startswith("fc")
        ],
        "lr": 1e-4
    }
])`,
    },

    {
      type: "heading",
      title: "14. Image Size",
    },
    {
      type: "paragraph",
      text:
        "Images from ImageNet-style datasets can have varying dimensions. A CNN training pipeline normally converts them to a common size or crop size.",
    },

    {
      type: "code",
      language: "python",
      code: `train_transform = transforms.Compose([
    transforms.RandomResizedCrop(224),
    transforms.RandomHorizontalFlip(),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=(0.485, 0.456, 0.406),
        std=(0.229, 0.224, 0.225)
    )
])`,
    },

    {
      type: "heading",
      title: "15. Validation Transformation",
    },
    {
      type: "code",
      language: "python",
      code: `valid_transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=(0.485, 0.456, 0.406),
        std=(0.229, 0.224, 0.225)
    )
])`,
    },

    {
      type: "heading",
      title: "16. Dataset Class",
    },
    {
      type: "code",
      language: "python",
      code: `class DogDataset(torch.utils.data.Dataset):
    def __init__(
        self,
        dataframe,
        image_dir,
        transform=None
    ):
        self.dataframe = dataframe
        self.image_dir = image_dir
        self.transform = transform

    def __len__(self):
        return len(self.dataframe)

    def __getitem__(self, index):
        row = self.dataframe.iloc[index]

        path = os.path.join(
            self.image_dir,
            row["id"] + ".jpg"
        )

        image = Image.open(path).convert("RGB")

        label = row["label"]

        if self.transform:
            image = self.transform(image)

        return image, label`,
    },

    {
      type: "heading",
      title: "17. DataLoader",
    },
    {
      type: "code",
      language: "python",
      code: `train_loader = DataLoader(
    train_dataset,
    batch_size=64,
    shuffle=True,
    num_workers=4
)

valid_loader = DataLoader(
    valid_dataset,
    batch_size=64,
    shuffle=False,
    num_workers=4
)`,
    },

    {
      type: "heading",
      title: "18. Training Function",
    },
    {
      type: "code",
      language: "python",
      code: `def train_epoch(
    model,
    loader,
    criterion,
    optimizer,
    device
):
    model.train()

    total_loss = 0
    total_correct = 0
    total = 0

    for X, y in loader:
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

        total_loss += loss.item() * y.size(0)

        total_correct += (
            logits.argmax(dim=1) == y
        ).sum().item()

        total += y.size(0)

    return (
        total_loss / total,
        total_correct / total
    )`,
    },

    {
      type: "heading",
      title: "19. Validation",
    },
    {
      type: "code",
      language: "python",
      code: `def evaluate(
    model,
    loader,
    criterion,
    device
):
    model.eval()

    loss_sum = 0
    correct = 0
    total = 0

    with torch.no_grad():
        for X, y in loader:
            X = X.to(device)
            y = y.to(device)

            logits = model(X)

            loss_sum += (
                criterion(logits, y).item()
                * y.size(0)
            )

            correct += (
                logits.argmax(dim=1) == y
            ).sum().item()

            total += y.size(0)

    return loss_sum / total, correct / total`,
    },

    {
      type: "heading",
      title: "20. Learning-Rate Scheduling",
    },
    {
      type: "code",
      language: "python",
      code: `scheduler = torch.optim.lr_scheduler.StepLR(
    optimizer,
    step_size=2,
    gamma=0.9
)`,
    },

    {
      type: "heading",
      title: "21. Training Strategy",
    },
    {
      type: "paragraph",
      text:
        "A practical transfer-learning strategy is to begin with the pretrained backbone fixed and train the new classification head. Once the head is stable, selected backbone layers can be unfrozen and fine-tuned with a smaller learning rate.",
    },

    {
      type: "heading",
      title: "22. Why Image Augmentation Matters",
    },
    {
      type: "paragraph",
      text:
        "Dog photographs can vary in pose, scale, lighting, background, and viewpoint. Augmentation exposes the model to a wider range of valid appearances.",
    },

    {
      type: "heading",
      title: "23. Overfitting Risks",
    },
    {
      type: "bullet",
      items: [
        "Too many epochs.",
        "Learning rate too high.",
        "Insufficient augmentation.",
        "Fine-tuning too many layers too early.",
        "Validation set too small or unrepresentative.",
      ],
    },

    {
      type: "heading",
      title: "24. Checkpointing",
    },
    {
      type: "code",
      language: "python",
      code: `torch.save(
    model.state_dict(),
    "dog_breed_model.pt"
)`,
    },

    {
      type: "heading",
      title: "25. Loading a Checkpoint",
    },
    {
      type: "code",
      language: "python",
      code: `model.load_state_dict(
    torch.load(
        "dog_breed_model.pt",
        map_location=device
    )
)`,
    },

    {
      type: "heading",
      title: "26. Test Prediction",
    },
    {
      type: "code",
      language: "python",
      code: `model.eval()

predictions = []

with torch.no_grad():
    for images in test_loader:
        images = images.to(device)

        logits = model(images)

        probabilities = torch.softmax(
            logits,
            dim=1
        )

        predictions.append(
            probabilities.cpu()
        )`,
    },

    {
      type: "heading",
      title: "27. Submission Format",
    },
    {
      type: "paragraph",
      text:
        "For a multi-class competition where the submission requires probabilities, each test image receives a probability value for every breed class. The class names form the submission columns.",
    },

    {
      type: "code",
      language: "python",
      code: `with open(
    "submission.csv",
    "w"
) as f:
    f.write(
        "id,"
        + ",".join(class_names)
        + "\\n"
    )`,
    },

    {
      type: "heading",
      title: "28. Transfer Learning Comparison",
    },
    {
      type: "bullet",
      items: [
        "Random initialization: all features must be learned from the target dataset.",
        "Frozen pretrained backbone: only the new classifier is trained.",
        "Partial fine-tuning: selected feature layers are updated.",
        "Full fine-tuning: the complete pretrained network is adapted.",
      ],
    },

    {
      type: "heading",
      title: "29. Practical Experiments",
    },
    {
      type: "bullet",
      items: [
        "Compare frozen-backbone training with full fine-tuning.",
        "Try different image resolutions.",
        "Change augmentation strength.",
        "Compare learning rates for the classifier.",
        "Compare different pretrained backbones.",
        "Track training and validation loss.",
      ],
    },

    {
      type: "heading",
      title: "30. Debugging Checklist",
    },
    {
      type: "bullet",
      items: [
        "Verify every image can be opened.",
        "Verify every label maps to a valid class.",
        "Check class count.",
        "Visualize augmented images.",
        "Check model output dimensions.",
        "Verify the pretrained weights load correctly.",
        "Check whether frozen parameters actually have gradients disabled.",
      ],
    },

    {
      type: "heading",
      title: "31. Interview Questions",
    },
    {
      type: "qa",
      question: "Why is transfer learning useful?",
      answer:
        "A pretrained network already contains useful visual representations, reducing the amount of target-task data and computation required.",
    },
    {
      type: "qa",
      question: "Why use a smaller learning rate for pretrained layers?",
      answer:
        "Large updates can unnecessarily destroy useful pretrained representations.",
    },
    {
      type: "qa",
      question: "Why replace the final classifier?",
      answer:
        "The pretrained classifier is designed for its original class set, while the target task has a different number of classes.",
    },

    {
      type: "heading",
      title: "32. Coding Challenge",
    },
    {
      type: "paragraph",
      text:
        "Build a 120-class dog-breed classifier using a pretrained ResNet. First train only the new classifier, then unfreeze the final feature block and compare validation performance.",
    },

    {
      type: "heading",
      title: "33. Summary",
    },
    {
      type: "bullet",
      items: [
        "Large real-world image datasets require stronger preprocessing.",
        "Transfer learning reuses visual representations learned from large datasets.",
        "The final classifier must be adapted to the target classes.",
        "Freezing and fine-tuning provide different training strategies.",
        "Different learning rates can be assigned to pretrained and newly initialized layers.",
        "The complete workflow includes training, validation, checkpointing, and test submission.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Transfer learning turns a pretrained visual representation into a task-specific system by replacing the original classifier and carefully adapting the network to the target dataset.",
    },
  ],
};

export default lesson;