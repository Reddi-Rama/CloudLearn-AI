export const lesson = {
  id: "lesson11",
  title: "Fully Convolutional Networks",
  subtitle:
    "Building pixel-level prediction systems with CNN encoders and learnable upsampling",
  duration: "135–160 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Fully Convolutional Networks, commonly called FCNs, adapt convolutional neural networks for dense prediction. Instead of producing one class for an entire image, an FCN produces a prediction for every spatial location. This makes the architecture particularly useful for semantic segmentation.",
    },
    {
      type: "paragraph",
      text:
        "The central idea is to use a CNN as a feature extractor, convert the feature channels into semantic-class predictions, and then restore the spatial resolution using transposed convolution.",
    },

    {
      type: "heading",
      title: "2. Classification vs Dense Prediction",
    },
    {
      type: "paragraph",
      text:
        "A traditional image classifier eventually compresses spatial information and produces a vector of class scores. A segmentation network must preserve spatial correspondence because every output pixel needs to correspond to a location in the input image.",
    },

    {
      type: "heading",
      title: "3. FCN Architecture",
    },
    {
      type: "process",
      steps: [
        "Input image",
        "Convolutional feature extractor",
        "Spatial downsampling",
        "Deep semantic feature map",
        "1×1 convolution",
        "Transposed convolution",
        "Pixel-level class scores",
      ],
    },

    {
      type: "heading",
      title: "4. The Encoder",
    },
    {
      type: "paragraph",
      text:
        "The encoder extracts increasingly abstract visual representations. Early layers capture local patterns such as edges and textures, while deeper layers capture larger structures and semantic information.",
    },

    {
      type: "heading",
      title: "5. Why Remove the Classification Head?",
    },
    {
      type: "paragraph",
      text:
        "A conventional classifier often ends with global pooling and fully connected layers. Those operations discard much of the spatial structure required for pixel-level prediction. An FCN therefore uses the convolutional feature extractor without the ordinary classification head.",
    },

    {
      type: "heading",
      title: "6. Using a Pretrained CNN",
    },
    {
      type: "paragraph",
      text:
        "A practical FCN can reuse a CNN pretrained on a large image dataset. The pretrained convolutional layers already contain useful visual representations, reducing the amount of segmentation-specific training required.",
    },

    {
      type: "heading",
      title: "7. ResNet as a Feature Extractor",
    },
    {
      type: "code",
      language: "python",
      code: `import torchvision
from torch import nn

backbone = torchvision.models.resnet18(
    weights="DEFAULT"
)

print(backbone)`,
    },

    {
      type: "heading",
      title: "8. Removing the Final Classification Layers",
    },
    {
      type: "paragraph",
      text:
        "The global average pooling and fully connected classification layers are not required when the network is being used as a dense feature extractor.",
    },

    {
      type: "code",
      language: "python",
      code: `children = list(backbone.children())

for layer in children[-3:]:
    print(layer)`,
    },

    {
      type: "heading",
      title: "9. Feature Extraction",
    },
    {
      type: "code",
      language: "python",
      code: `feature_extractor = nn.Sequential(
    *children[:-2]
)

features = feature_extractor(image)

print(features.shape)`,
    },

    {
      type: "heading",
      title: "10. Converting Channels into Classes",
    },
    {
      type: "paragraph",
      text:
        "Suppose the feature map contains C channels and the segmentation problem has K classes. A 1×1 convolution can transform the C channels into K class scores while preserving the spatial height and width.",
    },

    {
      type: "formula",
      formula: "C → K",
      explanation:
        "A 1×1 convolution changes the number of channels without directly changing spatial resolution.",
    },

    {
      type: "code",
      language: "python",
      code: `num_classes = 21

class_head = nn.Conv2d(
    512,
    num_classes,
    kernel_size=1
)`,
    },

    {
      type: "heading",
      title: "11. Why a 1×1 Convolution?",
    },
    {
      type: "paragraph",
      text:
        "A 1×1 convolution performs a learned transformation independently at each spatial position while combining information across channels. It is therefore useful for converting a feature representation into class logits.",
    },

    {
      type: "heading",
      title: "12. Spatial Upsampling",
    },
    {
      type: "paragraph",
      text:
        "The class feature map is usually much smaller than the input image. A transposed convolution can enlarge its spatial dimensions until they match the input resolution.",
    },

    {
      type: "code",
      language: "python",
      code: `upsample = nn.ConvTranspose2d(
    num_classes,
    num_classes,
    kernel_size=64,
    stride=32,
    padding=16
)`,
    },

    {
      type: "heading",
      title: "13. Complete FCN Skeleton",
    },
    {
      type: "code",
      language: "python",
      code: `class FCN(nn.Module):
    def __init__(self, num_classes):
        super().__init__()

        backbone = torchvision.models.resnet18(
            weights="DEFAULT"
        )

        self.features = nn.Sequential(
            *list(backbone.children())[:-2]
        )

        self.classifier = nn.Conv2d(
            512,
            num_classes,
            kernel_size=1
        )

        self.upsample = nn.ConvTranspose2d(
            num_classes,
            num_classes,
            kernel_size=64,
            stride=32,
            padding=16
        )

    def forward(self, x):
        x = self.features(x)
        x = self.classifier(x)
        x = self.upsample(x)
        return x`,
    },

    {
      type: "heading",
      title: "14. Output Interpretation",
    },
    {
      type: "paragraph",
      text:
        "The final tensor contains K channels. At each pixel, the K values represent the model's scores for the K semantic classes.",
    },

    {
      type: "code",
      language: "python",
      code: `logits = model(images)

prediction = logits.argmax(dim=1)

print(logits.shape)
print(prediction.shape)`,
    },

    {
      type: "heading",
      title: "15. Pixel-Level Correspondence",
    },
    {
      type: "paragraph",
      text:
        "If the final output has the same height and width as the input, every output location corresponds to the same spatial location in the original image.",
    },

    {
      type: "heading",
      title: "16. Bilinear Initialization",
    },
    {
      type: "paragraph",
      text:
        "The source demonstrates initializing transposed-convolution kernels so that they initially behave similarly to bilinear interpolation. This provides a useful starting point for learning spatial upsampling.",
    },

    {
      type: "code",
      language: "python",
      code: `def bilinear_kernel(
    in_channels,
    out_channels,
    kernel_size
):
    factor = (kernel_size + 1) // 2

    if kernel_size % 2 == 1:
        center = factor - 1
    else:
        center = factor - 0.5

    og = (
        torch.arange(kernel_size).reshape(-1, 1),
        torch.arange(kernel_size).reshape(1, -1)
    )

    filt = (
        1 - torch.abs(og[0] - center) / factor
    ) * (
        1 - torch.abs(og[1] - center) / factor
    )

    weight = torch.zeros(
        in_channels,
        out_channels,
        kernel_size,
        kernel_size
    )

    weight[
        range(in_channels),
        range(out_channels),
        :, :
    ] = filt

    return weight`,
    },

    {
      type: "heading",
      title: "17. Applying Bilinear Initialization",
    },
    {
      type: "code",
      language: "python",
      code: `layer = nn.ConvTranspose2d(
    3,
    3,
    kernel_size=4,
    stride=2,
    padding=1,
    bias=False
)

layer.weight.data.copy_(
    bilinear_kernel(3, 3, 4)
)`,
    },

    {
      type: "heading",
      title: "18. Segmentation Dataset",
    },
    {
      type: "paragraph",
      text:
        "The source demonstrates FCNs with a semantic-segmentation dataset in which each input image has a corresponding pixel-level label image.",
    },

    {
      type: "heading",
      title: "19. Training Target Shape",
    },
    {
      type: "paragraph",
      text:
        "For a batch of images with height H and width W, the target segmentation mask normally has shape [batch, H, W]. The model produces [batch, classes, H, W].",
    },

    {
      type: "heading",
      title: "20. Training Loss",
    },
    {
      type: "code",
      language: "python",
      code: `criterion = nn.CrossEntropyLoss()

loss = criterion(
    logits,
    masks
)`,
    },

    {
      type: "heading",
      title: "21. Why Cross Entropy Works",
    },
    {
      type: "paragraph",
      text:
        "At each pixel, the model produces a distribution over semantic classes. Cross-entropy penalizes the model when the probability assigned to the correct class is low.",
    },

    {
      type: "heading",
      title: "22. Training Loop",
    },
    {
      type: "code",
      language: "python",
      code: `for images, masks in train_loader:
    images = images.to(device)
    masks = masks.to(device)

    optimizer.zero_grad()

    logits = model(images)

    loss = criterion(
        logits,
        masks
    )

    loss.backward()
    optimizer.step()`,
    },

    {
      type: "heading",
      title: "23. Prediction",
    },
    {
      type: "code",
      language: "python",
      code: `model.eval()

with torch.no_grad():
    logits = model(image)
    prediction = logits.argmax(dim=1)`,
    },

    {
      type: "heading",
      title: "24. Visualizing Predictions",
    },
    {
      type: "paragraph",
      text:
        "A useful evaluation workflow displays the original image, the ground-truth segmentation, and the predicted segmentation. This makes boundary mistakes and class confusion much easier to identify.",
    },

    {
      type: "heading",
      title: "25. Common FCN Errors",
    },
    {
      type: "bullet",
      items: [
        "Output height and width do not match the target.",
        "The final number of channels does not equal the number of classes.",
        "The segmentation mask is incorrectly treated as an RGB image.",
        "Transposed-convolution dimensions are misconfigured.",
        "Input and target crops do not match.",
      ],
    },

    {
      type: "heading",
      title: "26. Shape Debugging",
    },
    {
      type: "code",
      language: "python",
      code: `print("input :", images.shape)
print("logits:", logits.shape)
print("mask  :", masks.shape)
print("pred  :", prediction.shape)`,
    },

    {
      type: "heading",
      title: "27. FCN Limitations",
    },
    {
      type: "bullet",
      items: [
        "Deep downsampling can lose fine spatial details.",
        "Simple FCNs may produce coarse boundaries.",
        "Upsampling alone cannot perfectly reconstruct information discarded by the encoder.",
        "Large segmentation images require significant memory.",
      ],
    },

    {
      type: "heading",
      title: "28. Improving FCNs",
    },
    {
      type: "paragraph",
      text:
        "More advanced segmentation systems can introduce skip connections, multi-scale features, stronger decoders, attention mechanisms, and improved upsampling strategies.",
    },

    {
      type: "heading",
      title: "29. Interview Questions",
    },
    {
      type: "qa",
      question: "What makes an FCN different from an ordinary image classifier?",
      answer:
        "An FCN preserves spatial structure and produces predictions at spatial locations instead of collapsing the image into a single classification vector.",
    },
    {
      type: "qa",
      question: "Why is a 1×1 convolution useful in an FCN?",
      answer:
        "It converts the learned feature channels into the required number of semantic classes while preserving spatial dimensions.",
    },
    {
      type: "qa",
      question: "Why is transposed convolution used?",
      answer:
        "It provides learnable spatial upsampling so the low-resolution semantic representation can be transformed back toward input resolution.",
    },

    {
      type: "heading",
      title: "30. Coding Challenge",
    },
    {
      type: "paragraph",
      text:
        "Implement an FCN using a pretrained convolutional backbone. Remove its classification head, add a 1×1 class predictor, add a transposed-convolution decoder, and verify that the final output matches the target mask dimensions.",
    },

    {
      type: "heading",
      title: "31. Summary",
    },
    {
      type: "bullet",
      items: [
        "FCNs perform dense pixel-level prediction.",
        "A CNN backbone extracts hierarchical features.",
        "A 1×1 convolution maps feature channels to semantic classes.",
        "Transposed convolution restores spatial resolution.",
        "Pretrained CNNs can provide useful visual features.",
        "Segmentation training uses pixel-level targets.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "An FCN converts a conventional convolutional feature extractor into a dense prediction system by preserving spatial structure, mapping features to classes, and learning to restore the required resolution.",
    },
  ],
};

export default lesson;