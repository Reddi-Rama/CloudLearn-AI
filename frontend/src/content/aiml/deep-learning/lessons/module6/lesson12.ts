export const lesson = {
  id: "lesson12",
  title: "Neural Style Transfer",
  subtitle:
    "Separating visual content and artistic style using pretrained CNN representations",
  duration: "145–175 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Neural style transfer generates a new image that attempts to preserve the content of one image while adopting the visual style of another. A pretrained convolutional neural network provides the feature representations used to define these objectives.",
    },

    {
      type: "heading",
      title: "2. Content and Style",
    },
    {
      type: "paragraph",
      text:
        "The content image provides the semantic structure that should remain recognizable. The style image contributes visual characteristics such as textures, colors, patterns, and correlations between feature channels.",
    },

    {
      type: "heading",
      title: "3. The Important Idea",
    },
    {
      type: "paragraph",
      text:
        "The CNN is not primarily being trained. Instead, its pretrained parameters are frozen and the synthesized image itself becomes the optimization variable.",
    },

    {
      type: "process",
      steps: [
        "Load content image",
        "Load style image",
        "Load pretrained CNN",
        "Freeze CNN parameters",
        "Initialize synthesized image",
        "Extract content features",
        "Extract style features",
        "Calculate losses",
        "Backpropagate into synthesized image",
        "Repeat optimization",
      ],
    },

    {
      type: "heading",
      title: "4. Optimization Variable",
    },
    {
      type: "paragraph",
      text:
        "In ordinary supervised learning, model parameters are updated. In style transfer, the pretrained CNN remains fixed while the pixels of the synthesized image are optimized.",
    },

    {
      type: "code",
      language: "python",
      code: `synthesized = content.clone()

synthesized.requires_grad_(True)`,
    },

    {
      type: "heading",
      title: "5. Pretrained CNN",
    },
    {
      type: "paragraph",
      text:
        "The source uses a pretrained VGG-19 network. Different layers provide different types of representations: earlier layers tend to preserve local details, while deeper layers capture more global and semantic information.",
    },

    {
      type: "code",
      language: "python",
      code: `vgg = torchvision.models.vgg19(
    weights="DEFAULT"
)

vgg.eval()

for parameter in vgg.parameters():
    parameter.requires_grad = False`,
    },

    {
      type: "heading",
      title: "6. Content Features",
    },
    {
      type: "paragraph",
      text:
        "A relatively deep feature layer can represent the structure and semantic content of an image without requiring exact pixel equality.",
    },

    {
      type: "heading",
      title: "7. Style Features",
    },
    {
      type: "paragraph",
      text:
        "Multiple CNN layers can be used to capture style at different spatial scales. Earlier layers capture local texture patterns while deeper layers can represent broader visual structure.",
    },

    {
      type: "heading",
      title: "8. Preprocessing",
    },
    {
      type: "paragraph",
      text:
        "The source standardizes the RGB channels using commonly used ImageNet statistics before passing images through the pretrained network.",
    },

    {
      type: "code",
      language: "python",
      code: `rgb_mean = torch.tensor(
    [0.485, 0.456, 0.406]
)

rgb_std = torch.tensor(
    [0.229, 0.224, 0.225]
)`,
    },

    {
      type: "heading",
      title: "9. Preprocess Function",
    },
    {
      type: "code",
      language: "python",
      code: `def preprocess(img, image_shape):
    transform = torchvision.transforms.Compose([
        torchvision.transforms.Resize(image_shape),
        torchvision.transforms.ToTensor(),
        torchvision.transforms.Normalize(
            mean=rgb_mean,
            std=rgb_std
        )
    ])

    return transform(img).unsqueeze(0)`,
    },

    {
      type: "heading",
      title: "10. Postprocessing",
    },
    {
      type: "paragraph",
      text:
        "After optimization, the synthesized tensor must be converted back from normalized CNN space to ordinary image values. Pixel values are clipped to a valid display range.",
    },

    {
      type: "code",
      language: "python",
      code: `def postprocess(img):
    img = img[0]

    img = img.permute(1, 2, 0)

    img = img * rgb_std + rgb_mean

    img = torch.clamp(img, 0, 1)

    return img`,
    },

    {
      type: "heading",
      title: "11. Feature Extraction",
    },
    {
      type: "paragraph",
      text:
        "Only selected layers of the CNN are needed. The feature-extraction function passes an image through the network and stores outputs from the chosen content and style layers.",
    },

    {
      type: "code",
      language: "python",
      code: `def extract_features(
    X,
    net,
    content_layers,
    style_layers
):
    content_features = []
    style_features = []

    for i, layer in enumerate(net):
        X = layer(X)

        if i in content_layers:
            content_features.append(X)

        if i in style_layers:
            style_features.append(X)

    return content_features, style_features`,
    },

    {
      type: "heading",
      title: "12. Content Loss",
    },
    {
      type: "paragraph",
      text:
        "Content loss encourages the synthesized image to produce feature representations similar to the content image.",
    },

    {
      type: "formula",
      formula: "L_content = mean((F_s − F_c)²)",
      explanation:
        "F_s is the synthesized-image content representation and F_c is the content-image representation.",
    },

    {
      type: "code",
      language: "python",
      code: `def content_loss(Y_hat, Y):
    return torch.square(
        Y_hat - Y.detach()
    ).mean()`,
    },

    {
      type: "heading",
      title: "13. Why Not Pixel Loss?",
    },
    {
      type: "paragraph",
      text:
        "A direct pixel-wise loss would force the synthesized image to resemble the content image too closely. Feature-space content loss allows the generated image to change appearance while preserving higher-level structure.",
    },

    {
      type: "heading",
      title: "14. Gram Matrix",
    },
    {
      type: "paragraph",
      text:
        "Style is represented using correlations between feature channels. These correlations can be summarized by a Gram matrix.",
    },

    {
      type: "formula",
      formula: "G = XXᵀ",
      explanation:
        "If X contains channel feature vectors, the Gram matrix contains pairwise channel correlations.",
    },

    {
      type: "code",
      language: "python",
      code: `def gram(X):
    channels = X.shape[1]
    n = X.numel() // channels

    X = X.reshape(channels, n)

    return torch.matmul(
        X,
        X.T
    ) / (channels * n)`,
    },

    {
      type: "heading",
      title: "15. Style Loss",
    },
    {
      type: "paragraph",
      text:
        "The style loss compares the Gram matrix of the synthesized image with the Gram matrix of the style image.",
    },

    {
      type: "code",
      language: "python",
      code: `def style_loss(
    Y_hat,
    gram_Y
):
    return torch.square(
        gram(Y_hat) - gram_Y.detach()
    ).mean()`,
    },

    {
      type: "heading",
      title: "16. Why Gram Matrices?",
    },
    {
      type: "paragraph",
      text:
        "The Gram matrix summarizes relationships between feature channels without preserving the exact spatial arrangement of those activations. This makes it useful for representing texture and style rather than exact object layout.",
    },

    {
      type: "heading",
      title: "17. Total Variation Loss",
    },
    {
      type: "paragraph",
      text:
        "Optimization can sometimes produce noisy high-frequency patterns. Total variation loss encourages neighboring pixels to vary more smoothly.",
    },

    {
      type: "formula",
      formula: "L_TV = Σ|x_{i+1,j} − x_{i,j}| + Σ|x_{i,j+1} − x_{i,j}|",
      explanation:
        "The loss penalizes excessive differences between neighboring pixels.",
    },

    {
      type: "heading",
      title: "18. Combined Loss",
    },
    {
      type: "formula",
      formula: "L = αL_content + βL_style + γL_TV",
      explanation:
        "The three components control content preservation, style matching, and image smoothness.",
    },

    {
      type: "heading",
      title: "19. Meaning of the Weights",
    },
    {
      type: "bullet",
      items: [
        "Higher content weight preserves more of the original structure.",
        "Higher style weight emphasizes the visual style image.",
        "Higher total-variation weight encourages smoother outputs.",
      ],
    },

    {
      type: "heading",
      title: "20. Synthesized Image Initialization",
    },
    {
      type: "paragraph",
      text:
        "The synthesized image can initially be set equal to the content image. This provides a recognizable structural starting point for optimization.",
    },

    {
      type: "code",
      language: "python",
      code: `synthesized = content_img.clone()
synthesized.requires_grad_(True)`,
    },

    {
      type: "heading",
      title: "21. Optimizer",
    },
    {
      type: "paragraph",
      text:
        "An optimizer updates the synthesized image directly. The pretrained CNN parameters remain frozen.",
    },

    {
      type: "code",
      language: "python",
      code: `optimizer = torch.optim.Adam(
    [synthesized],
    lr=0.01
)`,
    },

    {
      type: "heading",
      title: "22. Training Loop",
    },
    {
      type: "code",
      language: "python",
      code: `for step in range(num_steps):
    optimizer.zero_grad()

    content_hat, style_hat = extract_features(
        synthesized,
        net,
        content_layers,
        style_layers
    )

    content_loss_value = ...
    style_loss_value = ...
    tv_loss_value = ...

    total_loss = (
        alpha * content_loss_value
        + beta * style_loss_value
        + gamma * tv_loss_value
    )

    total_loss.backward()
    optimizer.step()`,
    },

    {
      type: "heading",
      title: "23. What Is Actually Learning?",
    },
    {
      type: "paragraph",
      text:
        "The pretrained CNN is acting as a fixed feature extractor. The optimized object is the synthesized image tensor. This is an important example of gradient-based optimization where the variable being optimized is not a conventional model parameter.",
    },

    {
      type: "heading",
      title: "24. Content Layer Selection",
    },
    {
      type: "paragraph",
      text:
        "Choosing a deeper layer for content representation can preserve broad structure while allowing lower-level appearance to change.",
    },

    {
      type: "heading",
      title: "25. Style Layer Selection",
    },
    {
      type: "paragraph",
      text:
        "Using multiple style layers captures visual characteristics at different scales. Shallow layers can capture local textures while deeper layers represent larger patterns.",
    },

    {
      type: "heading",
      title: "26. Common Problems",
    },
    {
      type: "bullet",
      items: [
        "The output looks almost identical to the content image.",
        "The output contains excessive texture and loses structure.",
        "The image contains strong noise.",
        "Optimization is extremely slow.",
        "The output contains invalid pixel values.",
      ],
    },

    {
      type: "heading",
      title: "27. Debugging",
    },
    {
      type: "code",
      language: "python",
      code: `print("content loss:", content_loss_value.item())
print("style loss:", style_loss_value.item())
print("tv loss:", tv_loss_value.item())
print("total:", total_loss.item())`,
    },

    {
      type: "heading",
      title: "28. Practical Experiment",
    },
    {
      type: "paragraph",
      text:
        "Run style transfer several times while changing the content/style loss ratio. Observe how the synthesized image changes when content preservation or style matching becomes more important.",
    },

    {
      type: "heading",
      title: "29. Interview Questions",
    },
    {
      type: "qa",
      question: "What is optimized in neural style transfer?",
      answer:
        "The synthesized image is optimized while the pretrained feature-extraction network remains fixed.",
    },
    {
      type: "qa",
      question: "Why is a Gram matrix used?",
      answer:
        "It summarizes correlations between feature channels and provides a representation of visual style and texture.",
    },
    {
      type: "qa",
      question: "What are the three major losses?",
      answer:
        "Content loss, style loss, and total variation loss.",
    },

    {
      type: "heading",
      title: "30. Coding Challenge",
    },
    {
      type: "paragraph",
      text:
        "Implement a miniature neural style-transfer system using a pretrained VGG network. Extract one content layer and several style layers, compute the three loss components, and optimize the synthesized image.",
    },

    {
      type: "heading",
      title: "31. Summary",
    },
    {
      type: "bullet",
      items: [
        "Style transfer separates content from visual appearance.",
        "A pretrained CNN provides hierarchical representations.",
        "Content loss compares deep feature representations.",
        "Style loss compares Gram matrices.",
        "Total variation loss reduces excessive pixel-level noise.",
        "The synthesized image is optimized directly.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Neural style transfer demonstrates that a pretrained CNN can serve as a perceptual feature space in which image content and visual style can be optimized separately.",
    },
  ],
};

export default lesson;