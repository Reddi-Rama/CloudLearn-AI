export const lesson = {
  id: "lesson17",
  title: "Advanced Image Segmentation Systems",
  subtitle:
    "Building encoder-decoder segmentation models with skip connections and multi-scale features",
  duration: "150–180 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Semantic segmentation requires dense spatial predictions. Unlike classification, where one output can describe an entire image, segmentation must maintain meaningful spatial correspondence between input pixels and predicted classes.",
    },

    {
      type: "heading",
      title: "2. Encoder–Decoder Architecture",
    },
    {
      type: "process",
      steps: [
        "Input image",
        "Encoder",
        "Feature extraction",
        "Downsampling",
        "Deep semantic representation",
        "Decoder",
        "Upsampling",
        "Spatial reconstruction",
        "Pixel classification",
      ],
    },

    {
      type: "heading",
      title: "3. Encoder",
    },
    {
      type: "paragraph",
      text:
        "The encoder extracts increasingly abstract visual features. Spatial dimensions generally decrease while the number of channels increases.",
    },

    {
      type: "heading",
      title: "4. Decoder",
    },
    {
      type: "paragraph",
      text:
        "The decoder progressively increases spatial resolution and transforms semantic features into dense predictions.",
    },

    {
      type: "heading",
      title: "5. The Information-Loss Problem",
    },
    {
      type: "paragraph",
      text:
        "Repeated downsampling can remove precise boundary information. A decoder working only with the deepest feature map may struggle to reconstruct fine object boundaries.",
    },

    {
      type: "heading",
      title: "6. Skip Connections",
    },
    {
      type: "paragraph",
      text:
        "Skip connections provide earlier high-resolution features directly to decoder stages. This combines detailed spatial information with deeper semantic representations.",
    },

    {
      type: "code",
      language: "python",
      code: `deep = encoder_deep(x)

decoded = decoder(deep)

decoded = decoded + encoder_shallow(x)`,
    },

    {
      type: "heading",
      title: "7. Concatenation vs Addition",
    },
    {
      type: "paragraph",
      text:
        "Feature maps can be combined by addition or concatenation. Addition requires compatible channel dimensions. Concatenation increases the number of channels and gives the next layer access to both representations.",
    },

    {
      type: "heading",
      title: "8. U-Net-Style Design",
    },
    {
      type: "paragraph",
      text:
        "A U-Net-style architecture has a contracting encoder path and expanding decoder path with lateral skip connections between corresponding resolutions.",
    },

    {
      type: "heading",
      title: "9. Double Convolution Block",
    },
    {
      type: "code",
      language: "python",
      code: `class ConvBlock(nn.Module):
    def __init__(self, in_channels, out_channels):
        super().__init__()

        self.block = nn.Sequential(
            nn.Conv2d(in_channels, out_channels, 3, padding=1),
            nn.BatchNorm2d(out_channels),
            nn.ReLU(),

            nn.Conv2d(out_channels, out_channels, 3, padding=1),
            nn.BatchNorm2d(out_channels),
            nn.ReLU()
        )

    def forward(self, x):
        return self.block(x)`,
    },

    {
      type: "heading",
      title: "10. Encoder Block",
    },
    {
      type: "code",
      language: "python",
      code: `class EncoderBlock(nn.Module):
    def __init__(self, in_channels, out_channels):
        super().__init__()

        self.conv = ConvBlock(
            in_channels,
            out_channels
        )

        self.pool = nn.MaxPool2d(2)

    def forward(self, x):
        features = self.conv(x)
        down = self.pool(features)

        return features, down`,
    },

    {
      type: "heading",
      title: "11. Decoder Block",
    },
    {
      type: "code",
      language: "python",
      code: `class DecoderBlock(nn.Module):
    def __init__(self, in_channels, skip_channels, out_channels):
        super().__init__()

        self.up = nn.ConvTranspose2d(
            in_channels,
            out_channels,
            kernel_size=2,
            stride=2
        )

        self.conv = ConvBlock(
            out_channels + skip_channels,
            out_channels
        )

    def forward(self, x, skip):
        x = self.up(x)

        x = torch.cat(
            [x, skip],
            dim=1
        )

        return self.conv(x)`,
    },

    {
      type: "heading",
      title: "12. Complete Segmentation Model",
    },
    {
      type: "code",
      language: "python",
      code: `class UNetSmall(nn.Module):
    def __init__(self, num_classes):
        super().__init__()

        self.enc1 = EncoderBlock(3, 32)
        self.enc2 = EncoderBlock(32, 64)

        self.middle = ConvBlock(64, 128)

        self.dec2 = DecoderBlock(
            128, 64, 64
        )

        self.dec1 = DecoderBlock(
            64, 32, 32
        )

        self.final = nn.Conv2d(
            32,
            num_classes,
            kernel_size=1
        )

    def forward(self, x):
        skip1, x = self.enc1(x)
        skip2, x = self.enc2(x)

        x = self.middle(x)

        x = self.dec2(x, skip2)
        x = self.dec1(x, skip1)

        return self.final(x)`,
    },

    {
      type: "heading",
      title: "13. Shape Debugging",
    },
    {
      type: "code",
      language: "python",
      code: `print("input:", x.shape)

skip1, x = model.enc1(x)
print("skip1:", skip1.shape)
print("down1:", x.shape)

skip2, x = model.enc2(x)
print("skip2:", skip2.shape)
print("down2:", x.shape)`,
    },

    {
      type: "heading",
      title: "14. Pixel-Wise Classification",
    },
    {
      type: "paragraph",
      text:
        "The final convolution produces one score for every class at every spatial location. The class with the highest score becomes the predicted semantic label.",
    },

    {
      type: "formula",
      formula: "ŷ(i,j) = argmax_k z_k(i,j)",
      explanation:
        "For pixel (i,j), choose the class k with the highest output logit.",
    },

    {
      type: "heading",
      title: "15. Cross-Entropy",
    },
    {
      type: "code",
      language: "python",
      code: `criterion = nn.CrossEntropyLoss()

logits = model(images)

loss = criterion(
    logits,
    masks
)`,
    },

    {
      type: "heading",
      title: "16. Dice Score",
    },
    {
      type: "formula",
      formula: "Dice = 2|A ∩ B| / (|A| + |B|)",
      explanation:
        "Dice measures overlap between predicted and ground-truth regions.",
    },

    {
      type: "heading",
      title: "17. Why IoU and Dice?",
    },
    {
      type: "paragraph",
      text:
        "Pixel accuracy can hide poor performance on small foreground objects when most pixels belong to background. Region-overlap metrics provide additional information about segmentation quality.",
    },

    {
      type: "heading",
      title: "18. Multi-Class Segmentation",
    },
    {
      type: "paragraph",
      text:
        "For K semantic classes, the final layer produces K channels. Each channel contains a score map for one class.",
    },

    {
      type: "heading",
      title: "19. Binary Segmentation",
    },
    {
      type: "paragraph",
      text:
        "Binary segmentation can use one output logit with a sigmoid-based objective or two-class logits with cross-entropy. The appropriate representation should remain consistent throughout training and inference.",
    },

    {
      type: "heading",
      title: "20. Class Imbalance",
    },
    {
      type: "paragraph",
      text:
        "Segmentation datasets may contain large background regions and relatively small objects. Weighted losses, Dice-style objectives, focal losses, or carefully designed sampling strategies can help address this imbalance.",
    },

    {
      type: "heading",
      title: "21. Data Augmentation",
    },
    {
      type: "paragraph",
      text:
        "Geometric augmentation must be applied identically to images and masks. Photometric changes such as brightness adjustment can generally be applied to images without modifying the semantic mask.",
    },

    {
      type: "heading",
      title: "22. Boundary Quality",
    },
    {
      type: "paragraph",
      text:
        "A model can achieve reasonable global metrics while still producing poor boundaries. Visual inspection of object edges is therefore an important part of segmentation evaluation.",
    },

    {
      type: "heading",
      title: "23. Training Loop",
    },
    {
      type: "code",
      language: "python",
      code: `for images, masks in train_loader:
    images = images.to(device)
    masks = masks.to(device)

    optimizer.zero_grad()

    logits = model(images)

    loss = criterion(logits, masks)

    loss.backward()
    optimizer.step()`,
    },

    {
      type: "heading",
      title: "24. Validation",
    },
    {
      type: "code",
      language: "python",
      code: `model.eval()

with torch.no_grad():
    logits = model(images)
    predictions = logits.argmax(dim=1)`,
    },

    {
      type: "heading",
      title: "25. Prediction Visualization",
    },
    {
      type: "process",
      steps: [
        "Display original image",
        "Display ground-truth mask",
        "Display predicted mask",
        "Overlay prediction",
        "Inspect boundaries",
        "Inspect missed objects",
        "Inspect false regions",
      ],
    },

    {
      type: "heading",
      title: "26. Common Errors",
    },
    {
      type: "bullet",
      items: [
        "Image and mask have different spatial transformations.",
        "Wrong interpolation is used for masks.",
        "Target tensor contains RGB values instead of class indices.",
        "Decoder output does not match target dimensions.",
        "Skip features have incompatible spatial dimensions.",
        "Background dominates the loss.",
      ],
    },

    {
      type: "heading",
      title: "27. Interview Questions",
    },
    {
      type: "qa",
      question: "Why are skip connections useful in segmentation?",
      answer:
        "They provide high-resolution spatial information that may have been lost during encoder downsampling.",
    },
    {
      type: "qa",
      question: "Why can pixel accuracy be misleading?",
      answer:
        "A model can predict a dominant background class correctly while performing poorly on smaller foreground regions.",
    },
    {
      type: "qa",
      question: "What does the final segmentation layer predict?",
      answer:
        "A class score for every class at every output pixel.",
    },

    {
      type: "heading",
      title: "28. Practical Project",
    },
    {
      type: "paragraph",
      text:
        "Build a U-Net-style model for a three-class segmentation problem. Track training loss, validation loss, IoU, and Dice score. Save qualitative predictions after every few epochs.",
    },

    {
      type: "heading",
      title: "29. Summary",
    },
    {
      type: "bullet",
      items: [
        "Segmentation requires dense spatial predictions.",
        "Encoders learn semantic features.",
        "Decoders recover spatial resolution.",
        "Skip connections restore fine spatial information.",
        "Pixel-wise classification produces the final segmentation.",
        "IoU and Dice provide useful region-level evaluation.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Effective segmentation architectures combine deep semantic understanding with high-resolution spatial information through encoder-decoder structures and skip connections.",
    },
  ],
};

export default lesson;