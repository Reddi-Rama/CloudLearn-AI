export const lesson = {
  id: "lesson10",
  title: "Transposed Convolution",
  subtitle:
    "Recovering spatial resolution for dense prediction and semantic segmentation",
  duration: "120–145 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Convolutional and pooling layers frequently reduce spatial resolution. This is useful for learning increasingly abstract features, but dense prediction tasks such as semantic segmentation require predictions at high spatial resolution.",
    },

    {
      type: "paragraph",
      text:
        "Transposed convolution provides a learnable operation that can increase spatial dimensions and is therefore useful in decoder portions of segmentation architectures.",
    },

    {
      type: "heading",
      title: "2. Why Upsampling Is Needed",
    },
    {
      type: "paragraph",
      text:
        "Suppose an image begins at 320×480 pixels and a CNN reduces it to a much smaller feature map. A segmentation model eventually needs to produce predictions aligned with the original image resolution.",
    },

    {
      type: "process",
      steps: [
        "High-resolution image",
        "Convolutional encoder",
        "Downsampled feature maps",
        "Semantic representation",
        "Transposed convolution",
        "Higher-resolution feature maps",
        "Pixel-level predictions",
      ],
    },

    {
      type: "heading",
      title: "3. Transposed Convolution Is Not Simply Inverting Convolution",
    },
    {
      type: "paragraph",
      text:
        "The name can be misleading. A transposed convolution does not generally reconstruct the exact original input from a convolution output. Instead, it defines a learnable transformation whose spatial dimensions can be larger than its input.",
    },

    {
      type: "heading",
      title: "4. Basic Operation",
    },
    {
      type: "paragraph",
      text:
        "A useful way to understand transposed convolution is to view it as distributing each input value through a kernel-shaped region in the output and accumulating overlapping contributions.",
    },

    {
      type: "heading",
      title: "5. Conceptual Example",
    },
    {
      type: "code",
      language: "text",
      code: `Input feature map

[a b]
[c d]

       ↓
transposed convolution

Larger output feature map`,
    },

    {
      type: "heading",
      title: "6. Output Size",
    },
    {
      type: "formula",
      formula: "H_out = (H_in − 1)s − 2p + k + output_padding",
      explanation:
        "The spatial output size depends on input size, stride, padding, kernel size, and optional output padding.",
    },

    {
      type: "heading",
      title: "7. PyTorch Implementation",
    },
    {
      type: "code",
      language: "python",
      code: `layer = nn.ConvTranspose2d(
    in_channels=16,
    out_channels=8,
    kernel_size=4,
    stride=2,
    padding=1
)`,
    },

    {
      type: "heading",
      title: "8. Doubling Spatial Resolution",
    },
    {
      type: "code",
      language: "python",
      code: `x = torch.randn(1, 16, 32, 32)

layer = nn.ConvTranspose2d(
    16,
    8,
    kernel_size=4,
    stride=2,
    padding=1
)

y = layer(x)

print(x.shape)
print(y.shape)

# Typical output:
# [1, 16, 32, 32]
# [1, 8, 64, 64]`,
    },

    {
      type: "heading",
      title: "9. Stride",
    },
    {
      type: "paragraph",
      text:
        "A stride greater than one allows the transposed convolution to increase spatial resolution. A common design uses stride 2 to approximately double height and width.",
    },

    {
      type: "heading",
      title: "10. Padding",
    },
    {
      type: "paragraph",
      text:
        "Padding influences the final output dimensions. Choosing padding together with kernel size and stride allows an architecture to control the exact spatial resolution of decoder features.",
    },

    {
      type: "heading",
      title: "11. Multiple Channels",
    },
    {
      type: "paragraph",
      text:
        "Like ordinary convolution, transposed convolution operates across multiple input and output channels. Each output channel learns a different combination of input feature channels.",
    },

    {
      type: "code",
      language: "python",
      code: `decoder = nn.ConvTranspose2d(
    in_channels=64,
    out_channels=32,
    kernel_size=4,
    stride=2,
    padding=1
)`,
    },

    {
      type: "heading",
      title: "12. Encoder–Decoder Architecture",
    },
    {
      type: "paragraph",
      text:
        "Transposed convolution is commonly used in decoder networks. The encoder compresses the image into semantic features, while the decoder progressively reconstructs spatial resolution.",
    },

    {
      type: "process",
      steps: [
        "Input",
        "Conv",
        "Downsample",
        "Conv",
        "Downsample",
        "Deep feature representation",
        "Transposed Conv",
        "Upsample",
        "Transposed Conv",
        "Pixel prediction",
      ],
    },

    {
      type: "heading",
      title: "13. Relation to Ordinary Convolution",
    },
    {
      type: "paragraph",
      text:
        "Ordinary convolution can be represented as multiplication by a structured matrix. The transposed convolution corresponds to using the transpose of that linear operator, which explains its name.",
    },

    {
      type: "heading",
      title: "14. Matrix View",
    },
    {
      type: "formula",
      formula: "y = Wx",
      explanation:
        "A convolution can be represented conceptually as multiplication by a structured matrix W.",
    },

    {
      type: "formula",
      formula: "x' = Wᵀy",
      explanation:
        "The transpose operation uses the transpose of the associated linear transformation.",
    },

    {
      type: "heading",
      title: "15. Important Clarification",
    },
    {
      type: "paragraph",
      text:
        "The matrix-transpose interpretation does not mean that the operation reconstructs the original input exactly. The learned parameters and dimensions determine what information the transposed convolution produces.",
    },

    {
      type: "heading",
      title: "16. Overlapping Contributions",
    },
    {
      type: "paragraph",
      text:
        "Multiple input positions can contribute to the same output position. These contributions are accumulated according to the learned kernel weights.",
    },

    {
      type: "heading",
      title: "17. Learnable Upsampling",
    },
    {
      type: "paragraph",
      text:
        "Unlike fixed nearest-neighbor or bilinear interpolation, transposed convolution learns how features should be distributed during upsampling.",
    },

    {
      type: "heading",
      title: "18. Fixed vs Learnable Upsampling",
    },
    {
      type: "bullet",
      items: [
        "Nearest neighbor: simple and fixed.",
        "Bilinear interpolation: smooth and fixed.",
        "Transposed convolution: learnable.",
      ],
    },

    {
      type: "heading",
      title: "19. Decoder Block",
    },
    {
      type: "code",
      language: "python",
      code: `class DecoderBlock(nn.Module):
    def __init__(self, in_channels, out_channels):
        super().__init__()

        self.block = nn.Sequential(
            nn.ConvTranspose2d(
                in_channels,
                out_channels,
                kernel_size=4,
                stride=2,
                padding=1
            ),
            nn.BatchNorm2d(out_channels),
            nn.ReLU()
        )

    def forward(self, x):
        return self.block(x)`,
    },

    {
      type: "heading",
      title: "20. Building a Small Decoder",
    },
    {
      type: "code",
      language: "python",
      code: `class SmallDecoder(nn.Module):
    def __init__(self, num_classes):
        super().__init__()

        self.decoder = nn.Sequential(
            nn.ConvTranspose2d(128, 64, 4, 2, 1),
            nn.ReLU(),

            nn.ConvTranspose2d(64, 32, 4, 2, 1),
            nn.ReLU(),

            nn.Conv2d(32, num_classes, 1)
        )

    def forward(self, x):
        return self.decoder(x)`,
    },

    {
      type: "heading",
      title: "21. Shape Tracking",
    },
    {
      type: "code",
      language: "python",
      code: `x = torch.randn(2, 128, 20, 30)

model = SmallDecoder(num_classes=5)

y = model(x)

print("input :", x.shape)
print("output:", y.shape)`,
    },

    {
      type: "heading",
      title: "22. Checkerboard Artifacts",
    },
    {
      type: "paragraph",
      text:
        "Some transposed-convolution configurations can produce uneven overlapping contributions that appear as checkerboard-like patterns. Kernel size, stride, padding, and decoder design should therefore be chosen carefully.",
    },

    {
      type: "heading",
      title: "23. Avoiding Poor Upsampling Configurations",
    },
    {
      type: "paragraph",
      text:
        "One practical strategy is to choose kernel and stride combinations that distribute contributions more uniformly. Another strategy is to perform interpolation-based resizing followed by an ordinary convolution.",
    },

    {
      type: "heading",
      title: "24. Alternative Decoder Pattern",
    },
    {
      type: "code",
      language: "python",
      code: `class InterpolationDecoder(nn.Module):
    def __init__(self, channels, num_classes):
        super().__init__()

        self.conv = nn.Sequential(
            nn.Conv2d(channels, channels // 2, 3, padding=1),
            nn.ReLU(),
            nn.Conv2d(channels // 2, num_classes, 1)
        )

    def forward(self, x):
        x = F.interpolate(
            x,
            scale_factor=2,
            mode="bilinear",
            align_corners=False
        )

        return self.conv(x)`,
    },

    {
      type: "heading",
      title: "25. Transposed Convolution in Segmentation",
    },
    {
      type: "paragraph",
      text:
        "In semantic segmentation, the decoder must recover spatial detail while preserving the semantic information learned by the encoder. Transposed convolution is one mechanism for achieving this.",
    },

    {
      type: "heading",
      title: "26. Skip Connections",
    },
    {
      type: "paragraph",
      text:
        "Many encoder-decoder architectures combine deep semantic features with earlier high-resolution features. These skip connections help restore spatial details that may have been lost during downsampling.",
    },

    {
      type: "heading",
      title: "27. Complete Conceptual Segmentation Model",
    },
    {
      type: "code",
      language: "python",
      code: `class SimpleSegmentationModel(nn.Module):
    def __init__(self, num_classes):
        super().__init__()

        self.encoder = nn.Sequential(
            nn.Conv2d(3, 32, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2),

            nn.Conv2d(32, 64, 3, padding=1),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )

        self.decoder = nn.Sequential(
            nn.ConvTranspose2d(64, 32, 4, 2, 1),
            nn.ReLU(),

            nn.ConvTranspose2d(32, 16, 4, 2, 1),
            nn.ReLU(),

            nn.Conv2d(16, num_classes, 1)
        )

    def forward(self, x):
        x = self.encoder(x)
        x = self.decoder(x)
        return x`,
    },

    {
      type: "heading",
      title: "28. Loss Function",
    },
    {
      type: "code",
      language: "python",
      code: `criterion = nn.CrossEntropyLoss()

logits = model(images)

loss = criterion(
    logits,
    segmentation_masks
)`,
    },

    {
      type: "heading",
      title: "29. Debugging Checklist",
    },
    {
      type: "bullet",
      items: [
        "Check input spatial dimensions.",
        "Check every decoder output dimension.",
        "Verify the final output matches the mask size.",
        "Verify the number of output channels equals the number of classes.",
        "Use class-index masks rather than RGB masks directly.",
        "Inspect predictions visually.",
      ],
    },

    {
      type: "heading",
      title: "30. Common Errors",
    },
    {
      type: "bullet",
      items: [
        "Output resolution does not match target resolution.",
        "Incorrect padding causes one-pixel size differences.",
        "Output channels do not equal the number of classes.",
        "Mask tensor has an unnecessary channel dimension.",
        "Bilinear interpolation is accidentally applied to class labels.",
      ],
    },

    {
      type: "heading",
      title: "31. Interview Questions",
    },
    {
      type: "qa",
      question: "Why is transposed convolution useful?",
      answer:
        "It provides a learnable way to increase spatial resolution in neural networks.",
    },
    {
      type: "qa",
      question: "Does transposed convolution exactly reverse convolution?",
      answer:
        "No. It is a separate learned operation related to the transpose of the linear transformation represented by convolution.",
    },
    {
      type: "qa",
      question: "Why is spatial upsampling important for segmentation?",
      answer:
        "Segmentation requires predictions at pixel-level resolution, while encoders often reduce spatial dimensions.",
    },

    {
      type: "heading",
      title: "32. Coding Challenge",
    },
    {
      type: "paragraph",
      text:
        "Create an encoder that reduces an image to one-quarter of its original height and width, then build a transposed-convolution decoder that restores the original resolution. Print every intermediate tensor shape.",
    },

    {
      type: "heading",
      title: "33. Practical Experiment",
    },
    {
      type: "paragraph",
      text:
        "Compare nearest-neighbor upsampling followed by convolution with transposed convolution. Keep the rest of the decoder architecture similar and compare output smoothness, parameter count, and segmentation behavior.",
    },

    {
      type: "heading",
      title: "34. Summary",
    },
    {
      type: "bullet",
      items: [
        "CNN encoders commonly reduce spatial dimensions.",
        "Dense prediction requires recovering spatial resolution.",
        "Transposed convolution is a learnable upsampling operation.",
        "Stride, padding, and kernel size control output dimensions.",
        "The matrix-transpose view explains the terminology.",
        "Decoder design must consider spatial alignment and artifacts.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Transposed convolution provides a learnable mechanism for increasing spatial resolution, making it an important building block for encoder-decoder architectures and pixel-level computer vision tasks.",
    },
  ],
};

export default lesson;