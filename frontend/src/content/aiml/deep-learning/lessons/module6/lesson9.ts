export const lesson = {
  id: "lesson9",
  title: "Semantic Segmentation and the Dataset",
  subtitle:
    "Understanding pixel-level prediction, semantic classes, and segmentation datasets",
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
        "Object detection predicts rectangular regions around objects. Semantic segmentation goes further by assigning a semantic class to every pixel in an image.",
    },

    {
      type: "heading",
      title: "2. What Is Semantic Segmentation?",
    },
    {
      type: "paragraph",
      text:
        "For every pixel, a semantic segmentation model predicts which category that pixel belongs to. For example, an image may contain pixels labeled as road, sky, vehicle, person, or background.",
    },

    {
      type: "heading",
      title: "3. Classification vs Detection vs Segmentation",
    },
    {
      type: "bullet",
      items: [
        "Classification: What is present in the image?",
        "Detection: What is present and approximately where?",
        "Semantic segmentation: What class does every pixel belong to?",
        "Instance segmentation: Which individual object does every foreground pixel belong to?",
      ],
    },

    {
      type: "heading",
      title: "4. Output Representation",
    },
    {
      type: "paragraph",
      text:
        "If an input image has height H and width W, a semantic segmentation model predicts a class for every one of those spatial locations.",
    },

    {
      type: "formula",
      formula: "Y ∈ {0,1,...,K−1}^{H×W}",
      explanation:
        "Each pixel receives one semantic class identifier.",
    },

    {
      type: "heading",
      title: "5. Model Output",
    },
    {
      type: "formula",
      formula: "logits ∈ R^{K×H×W}",
      explanation:
        "The model generally produces K class scores at each pixel before applying the final class selection.",
    },

    {
      type: "heading",
      title: "6. Semantic Segmentation Example",
    },
    {
      type: "code",
      language: "python",
      code: `num_classes = 5

logits = model(image)

print(logits.shape)
# [batch, num_classes, height, width]

prediction = logits.argmax(dim=1)

print(prediction.shape)
# [batch, height, width]`,
    },

    {
      type: "heading",
      title: "7. Image Segmentation",
    },
    {
      type: "paragraph",
      text:
        "Image segmentation can divide an image into regions based on visual similarity without necessarily assigning meaningful semantic labels to those regions.",
    },

    {
      type: "heading",
      title: "8. Instance Segmentation",
    },
    {
      type: "paragraph",
      text:
        "Instance segmentation distinguishes different object instances. If an image contains two objects belonging to the same class, their pixels must still be assigned to different instances.",
    },

    {
      type: "heading",
      title: "9. Semantic vs Instance Segmentation",
    },
    {
      type: "paragraph",
      text:
        "Semantic segmentation answers which class a pixel belongs to. Instance segmentation additionally answers which individual object instance the pixel belongs to.",
    },

    {
      type: "heading",
      title: "10. Pascal VOC2012",
    },
    {
      type: "paragraph",
      text:
        "The source introduces Pascal VOC2012 as an important semantic-segmentation dataset. Its segmentation labels associate pixels with semantic categories.",
    },

    {
      type: "heading",
      title: "11. Dataset Components",
    },
    {
      type: "paragraph",
      text:
        "A segmentation dataset typically contains input images and pixel-level label images. The label image has the same spatial dimensions as the corresponding input.",
    },

    {
      type: "process",
      steps: [
        "Load image",
        "Load pixel-level label",
        "Resize or crop consistently",
        "Convert image to tensor",
        "Convert label to class-index tensor",
        "Create minibatches",
        "Train segmentation model",
      ],
    },

    {
      type: "heading",
      title: "12. Label Image",
    },
    {
      type: "paragraph",
      text:
        "A segmentation label can be stored as an image in which different pixel values correspond to different semantic classes. The label must not be treated like a normal RGB photograph.",
    },

    {
      type: "heading",
      title: "13. Why Nearest-Neighbor Interpolation Matters",
    },
    {
      type: "paragraph",
      text:
        "Class labels are discrete values. When resizing segmentation masks, nearest-neighbor interpolation is commonly used so that interpolation does not create artificial class identifiers between existing labels.",
    },

    {
      type: "code",
      language: "python",
      code: `from torchvision.transforms import InterpolationMode

mask_transform = transforms.Resize(
    (320, 480),
    interpolation=InterpolationMode.NEAREST
)`,
    },

    {
      type: "heading",
      title: "14. Random Cropping",
    },
    {
      type: "paragraph",
      text:
        "The source uses random cropping to produce fixed-size training samples. The crop must be applied identically to both image and segmentation label.",
    },

    {
      type: "heading",
      title: "15. Dataset Class",
    },
    {
      type: "code",
      language: "python",
      code: `class SegmentationDataset(torch.utils.data.Dataset):
    def __init__(self, images, masks):
        self.images = images
        self.masks = masks

    def __len__(self):
        return len(self.images)

    def __getitem__(self, index):
        image = self.images[index]
        mask = self.masks[index]

        return image, mask`,
    },

    {
      type: "heading",
      title: "16. Tensor Shapes",
    },
    {
      type: "paragraph",
      text:
        "A common input shape is [batch, 3, height, width]. The corresponding segmentation target usually has shape [batch, height, width], where every element is a class index.",
    },

    {
      type: "heading",
      title: "17. Example Batch",
    },
    {
      type: "code",
      language: "python",
      code: `X, Y = next(iter(loader))

print(X.shape)
print(Y.shape)

# Example:
# X -> [64, 3, 320, 480]
# Y -> [64, 320, 480]`,
    },

    {
      type: "heading",
      title: "18. Pixel-Wise Loss",
    },
    {
      type: "paragraph",
      text:
        "Semantic segmentation can be trained using a classification loss independently at each pixel. Cross-entropy is a common choice.",
    },

    {
      type: "code",
      language: "python",
      code: `criterion = nn.CrossEntropyLoss()

loss = criterion(logits, target)`,
    },

    {
      type: "heading",
      title: "19. Why Spatial Alignment Matters",
    },
    {
      type: "paragraph",
      text:
        "Unlike image classification, segmentation requires spatial correspondence. A prediction at a particular output location must correspond to the correct image pixel or region.",
    },

    {
      type: "heading",
      title: "20. Downsampling Problem",
    },
    {
      type: "paragraph",
      text:
        "CNNs often reduce spatial dimensions. This is useful for learning semantic representations but creates a challenge for segmentation because the final prediction must recover fine spatial structure.",
    },

    {
      type: "heading",
      title: "21. Segmentation Pipeline",
    },
    {
      type: "process",
      steps: [
        "Image",
        "CNN feature extraction",
        "Spatial downsampling",
        "Semantic feature representation",
        "Spatial reconstruction",
        "Pixel-level class scores",
        "Per-pixel class prediction",
      ],
    },

    {
      type: "heading",
      title: "22. Visualization",
    },
    {
      type: "paragraph",
      text:
        "Visualizing segmentation predictions is essential. Display the original image, ground-truth mask, and predicted mask side by side to identify boundary errors and class confusion.",
    },

    {
      type: "heading",
      title: "23. Dataset Errors",
    },
    {
      type: "bullet",
      items: [
        "Image and mask dimensions do not match.",
        "Image and mask receive different crops.",
        "Masks are resized with bilinear interpolation.",
        "Class identifiers are incorrectly converted.",
        "Unknown pixels are treated as ordinary classes.",
      ],
    },

    {
      type: "heading",
      title: "24. Practical Debugging",
    },
    {
      type: "code",
      language: "python",
      code: `image, mask = dataset[0]

print("image:", image.shape)
print("mask:", mask.shape)

print("classes:",
      torch.unique(mask))`,
    },

    {
      type: "heading",
      title: "25. Segmentation Metrics",
    },
    {
      type: "paragraph",
      text:
        "Pixel accuracy can provide a basic measure of correct predictions, but class imbalance can make it misleading. Intersection-over-Union is widely useful for evaluating segmentation overlap.",
    },

    {
      type: "formula",
      formula: "IoU = Intersection / Union",
      explanation:
        "For a semantic class, IoU measures overlap between predicted and ground-truth regions.",
    },

    {
      type: "heading",
      title: "26. Applications",
    },
    {
      type: "bullet",
      items: [
        "Autonomous driving",
        "Medical image analysis",
        "Satellite image understanding",
        "Robotics",
        "Background understanding",
        "Industrial inspection",
      ],
    },

    {
      type: "heading",
      title: "27. Interview Questions",
    },
    {
      type: "qa",
      question: "How is semantic segmentation different from object detection?",
      answer:
        "Detection predicts rectangular bounding boxes, while semantic segmentation predicts a class at every pixel.",
    },
    {
      type: "qa",
      question: "Why must image and mask transformations be synchronized?",
      answer:
        "Because every mask pixel corresponds spatially to a location in the input image.",
    },
    {
      type: "qa",
      question: "Why should masks normally use nearest-neighbor resizing?",
      answer:
        "Because class labels are discrete and interpolation should not create artificial class values.",
    },

    {
      type: "heading",
      title: "28. Coding Challenge",
    },
    {
      type: "paragraph",
      text:
        "Create a small segmentation dataset with three classes. Build a CNN whose output has three channels and train it using pixel-wise cross-entropy.",
    },

    {
      type: "heading",
      title: "29. Summary",
    },
    {
      type: "bullet",
      items: [
        "Semantic segmentation predicts a class for every pixel.",
        "Segmentation labels preserve image spatial dimensions.",
        "Image and mask transformations must remain aligned.",
        "Pascal VOC2012 is a major example dataset.",
        "Segmentation models need mechanisms for recovering spatial resolution.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Semantic segmentation transforms computer vision from region-level understanding to pixel-level understanding, requiring the model and dataset to preserve precise spatial correspondence.",
    },
  ],
};

export default lesson;