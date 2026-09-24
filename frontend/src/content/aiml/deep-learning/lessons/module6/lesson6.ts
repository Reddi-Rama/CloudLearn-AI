export const lesson = {
  id: "lesson6",
  title: "The Object Detection Dataset",
  subtitle:
    "Understanding detection labels, dataset structure, bounding boxes, and minibatch preparation",
  duration: "105–125 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Object detection datasets differ from ordinary image-classification datasets because every image may contain multiple objects. Each object needs both a semantic label and a location.",
    },

    {
      type: "heading",
      title: "2. Classification vs Object Detection",
    },
    {
      type: "paragraph",
      text:
        "In image classification, one image may receive one class label. In object detection, one image can contain several objects belonging to one or many classes, and each object is associated with a bounding box.",
    },

    {
      type: "heading",
      title: "3. Detection Label Representation",
    },
    {
      type: "paragraph",
      text:
        "A detection annotation can be represented as a class identifier followed by four coordinates describing a bounding box. A common normalized representation stores the center coordinates and width and height relative to the image dimensions.",
    },

    {
      type: "formula",
      formula: "label = (class, x_center, y_center, width, height)",
      explanation:
        "The coordinates may be normalized to the interval [0, 1].",
    },

    {
      type: "heading",
      title: "4. Pixel Coordinates",
    },
    {
      type: "paragraph",
      text:
        "Another representation uses the upper-left and lower-right corners in pixel coordinates.",
    },

    {
      type: "formula",
      formula: "box = (x_min, y_min, x_max, y_max)",
      explanation:
        "This representation is convenient when drawing boxes on an image.",
    },

    {
      type: "heading",
      title: "5. Normalized Coordinates",
    },
    {
      type: "code",
      language: "python",
      code: `x_min_norm = x_min / image_width
y_min_norm = y_min / image_height
x_max_norm = x_max / image_width
y_max_norm = y_max / image_height`,
    },

    {
      type: "heading",
      title: "6. Why Normalize?",
    },
    {
      type: "paragraph",
      text:
        "Normalized coordinates make labels less dependent on the absolute image resolution. A box can therefore be represented consistently even when the image is resized.",
    },

    {
      type: "heading",
      title: "7. Dataset Structure",
    },
    {
      type: "paragraph",
      text:
        "A practical detection dataset usually contains image files and corresponding annotation information. The annotation can be stored in text files, JSON, XML, or another structured representation.",
    },

    {
      type: "heading",
      title: "8. One Image, Many Objects",
    },
    {
      type: "code",
      language: "python",
      code: `annotations = [
    {
        "class_id": 0,
        "bbox": [0.10, 0.20, 0.30, 0.50]
    },
    {
        "class_id": 1,
        "bbox": [0.60, 0.25, 0.25, 0.40]
    }
]`,
    },

    {
      type: "heading",
      title: "9. Dataset Loading Pipeline",
    },
    {
      type: "process",
      steps: [
        "Locate image",
        "Read image",
        "Read annotations",
        "Decode labels",
        "Apply compatible transforms",
        "Convert image to tensor",
        "Convert labels to tensors",
        "Return training example",
      ],
    },

    {
      type: "heading",
      title: "10. Image Transformations",
    },
    {
      type: "paragraph",
      text:
        "Object detection requires special care when applying geometric transformations. If an image is flipped, cropped, or resized, its bounding boxes must be transformed in exactly the same way.",
    },

    {
      type: "heading",
      title: "11. Horizontal Flip",
    },
    {
      type: "paragraph",
      text:
        "When an image is horizontally flipped, the x-coordinate of every bounding box must also be reflected. The y-coordinates remain unchanged.",
    },

    {
      type: "formula",
      formula: "x'_min = 1 - x_max",
      explanation:
        "For normalized coordinates, a horizontal flip exchanges the left and right boundaries.",
    },

    {
      type: "heading",
      title: "12. Resize",
    },
    {
      type: "paragraph",
      text:
        "When the image is resized while preserving the full image content, bounding-box coordinates must be scaled consistently with the image.",
    },

    {
      type: "heading",
      title: "13. Cropping",
    },
    {
      type: "paragraph",
      text:
        "Cropping is more complicated because a bounding box can become partially visible or disappear entirely. A detection pipeline must decide how to handle boxes affected by cropping.",
    },

    {
      type: "heading",
      title: "14. Custom Dataset Class",
    },
    {
      type: "code",
      language: "python",
      code: `class DetectionDataset(torch.utils.data.Dataset):
    def __init__(self, images, labels, transform=None):
        self.images = images
        self.labels = labels
        self.transform = transform

    def __len__(self):
        return len(self.images)

    def __getitem__(self, index):
        image = self.images[index]
        label = self.labels[index]

        if self.transform:
            image, label = self.transform(image, label)

        return image, label`,
    },

    {
      type: "heading",
      title: "15. Variable Number of Objects",
    },
    {
      type: "paragraph",
      text:
        "Different images contain different numbers of objects. One image may have two objects while another may have ten. Therefore detection labels do not naturally form a simple rectangular tensor without additional padding or batching logic.",
    },

    {
      type: "heading",
      title: "16. Padding Labels",
    },
    {
      type: "paragraph",
      text:
        "A common batching strategy pads the number of objects to a fixed maximum. Padding entries must be marked so that the model does not treat them as real objects.",
    },

    {
      type: "heading",
      title: "17. Example Padded Batch",
    },
    {
      type: "code",
      language: "python",
      code: `# -1 represents padding
labels = torch.tensor([
    [
        [0, 0.2, 0.2, 0.3, 0.4],
        [1, 0.7, 0.3, 0.2, 0.3],
        [-1, -1, -1, -1, -1]
    ],
    [
        [0, 0.4, 0.4, 0.2, 0.2],
        [-1, -1, -1, -1, -1],
        [-1, -1, -1, -1, -1]
    ]
])`,
    },

    {
      type: "heading",
      title: "18. The Banana Detection Example",
    },
    {
      type: "paragraph",
      text:
        "The source uses a simple banana detection dataset as a compact environment for demonstrating object-detection mechanics. Its simplicity makes it useful for understanding anchors, labels, training, and prediction without requiring a huge dataset.",
    },

    {
      type: "heading",
      title: "19. Reading Detection Examples",
    },
    {
      type: "code",
      language: "python",
      code: `image, label = dataset[0]

print(image.shape)
print(label.shape)
print(label)`,
    },

    {
      type: "heading",
      title: "20. Visualizing Bounding Boxes",
    },
    {
      type: "code",
      language: "python",
      code: `import matplotlib.pyplot as plt

plt.imshow(image.permute(1, 2, 0))
plt.axis("off")
plt.show()`,
    },

    {
      type: "heading",
      title: "21. Why Visualization Matters",
    },
    {
      type: "paragraph",
      text:
        "Detection datasets are particularly vulnerable to annotation mistakes. Visualizing images together with their boxes can reveal coordinate-order errors, incorrect normalization, flipped boxes, missing labels, and badly transformed annotations.",
    },

    {
      type: "heading",
      title: "22. Dataset Statistics",
    },
    {
      type: "paragraph",
      text:
        "Before training, inspect the number of images, number of classes, object counts, image resolutions, bounding-box sizes, and class frequencies.",
    },

    {
      type: "heading",
      title: "23. DataLoader",
    },
    {
      type: "code",
      language: "python",
      code: `loader = torch.utils.data.DataLoader(
    dataset,
    batch_size=32,
    shuffle=True,
    collate_fn=collate_fn
)`,
    },

    {
      type: "heading",
      title: "24. Detection Collate Function",
    },
    {
      type: "paragraph",
      text:
        "A custom collate function can combine images into a batch while keeping variable-length detection annotations in a suitable structure.",
    },

    {
      type: "code",
      language: "python",
      code: `def collate_fn(batch):
    images, labels = zip(*batch)

    images = torch.stack(images)

    return images, labels`,
    },

    {
      type: "heading",
      title: "25. Training Input",
    },
    {
      type: "paragraph",
      text:
        "A detector typically receives a tensor shaped like [batch, channels, height, width]. The corresponding labels contain one or more boxes and classes for every image.",
    },

    {
      type: "heading",
      title: "26. Dataset Debugging",
    },
    {
      type: "bullet",
      items: [
        "Verify image dimensions.",
        "Verify channel order.",
        "Verify coordinate convention.",
        "Verify normalized versus pixel coordinates.",
        "Draw several labels on images.",
        "Check class identifiers.",
        "Check transformations.",
        "Check padding values.",
      ],
    },

    {
      type: "heading",
      title: "27. Common Dataset Errors",
    },
    {
      type: "bullet",
      items: [
        "Using x/y coordinates in the wrong order.",
        "Mixing x_min/y_min/x_max/y_max with center-width-height.",
        "Forgetting to transform boxes after augmentation.",
        "Treating padding as a real object.",
        "Using classification transforms without adapting bounding boxes.",
      ],
    },

    {
      type: "heading",
      title: "28. Practical Dataset Inspection",
    },
    {
      type: "code",
      language: "python",
      code: `print("images:", len(dataset))

image, targets = dataset[0]

print("image shape:", image.shape)
print("targets:", targets)`,
    },

    {
      type: "heading",
      title: "29. Exercises",
    },
    {
      type: "bullet",
      items: [
        "Implement a dataset that returns image tensors and bounding boxes.",
        "Implement horizontal flipping with box transformation.",
        "Visualize ten randomly selected annotations.",
        "Calculate the average number of objects per image.",
        "Find the smallest and largest bounding boxes.",
      ],
    },

    {
      type: "heading",
      title: "30. Summary",
    },
    {
      type: "bullet",
      items: [
        "Detection datasets contain both classes and locations.",
        "Bounding boxes can use multiple coordinate conventions.",
        "Geometric image transformations must also transform boxes.",
        "Images may contain different numbers of objects.",
        "Padding or custom batching can handle variable-length annotations.",
        "Visualization is one of the most important dataset-debugging tools.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "A strong object detector starts with a correctly constructed dataset. If images and bounding-box annotations are inconsistent, even a sophisticated model cannot learn reliable localization.",
    },
  ],
};

export default lesson;