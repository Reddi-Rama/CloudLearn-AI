const lesson = {
  id: "lesson18",
  title: "Neural Style Transfer",
  subtitle:
    "Understanding content features, style features, Gram matrices, and image optimization",
  duration: "140–170 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction to Neural Style Transfer",
    },
    {
      type: "paragraph",
      text:
        "Neural Style Transfer is a computer vision technique that generates a new image by combining the content of one image with the visual style of another image. Instead of directly comparing pixels, the method compares representations produced by a pretrained convolutional neural network.",
    },
    {
      type: "paragraph",
      text:
        "The central idea is to keep important structural information from a content image while reproducing visual characteristics from a separate style image.",
    },

    {
      type: "heading",
      title: "2. The Three Images",
    },
    {
      type: "bullet",
      items: [
        "Content image: provides the scene, objects, and overall structure.",
        "Style image: provides colors, textures, patterns, and visual statistics.",
        "Generated image: the image optimized to satisfy both content and style objectives.",
      ],
    },

    {
      type: "heading",
      title: "3. Content Image",
    },
    {
      type: "paragraph",
      text:
        "The content image contains the scene that we want to preserve. For example, it may contain a landscape, building, object, or another recognizable scene.",
    },

    {
      type: "heading",
      title: "4. Style Image",
    },
    {
      type: "paragraph",
      text:
        "The style image provides the visual characteristics that should influence the generated image. These characteristics can include textures, color relationships, brush-like patterns, and correlations between visual features.",
    },

    {
      type: "heading",
      title: "5. Generated Image",
    },
    {
      type: "paragraph",
      text:
        "The generated image is the variable that is optimized. The pretrained convolutional neural network is used as a fixed feature extractor rather than being trained from scratch.",
    },

    {
      type: "heading",
      title: "6. Main Idea",
    },
    {
      type: "process",
      steps: [
        "Load a content image.",
        "Load a style image.",
        "Preprocess both images.",
        "Load a pretrained VGG-19 network.",
        "Select content and style layers.",
        "Extract content features.",
        "Extract style features.",
        "Calculate style Gram matrices.",
        "Initialize the generated image.",
        "Calculate content loss.",
        "Calculate style loss.",
        "Calculate total variation loss.",
        "Combine the losses.",
        "Optimize the generated image.",
        "Convert the optimized tensor back into an image.",
      ],
    },

    {
      type: "heading",
      title: "7. Why Use a Pretrained CNN?",
    },
    {
      type: "paragraph",
      text:
        "A pretrained CNN contains hierarchical visual representations. Earlier layers generally capture local visual patterns, while deeper layers capture increasingly complex and global information.",
    },

    {
      type: "heading",
      title: "8. Hierarchical Feature Representation",
    },
    {
      type: "paragraph",
      text:
        "A convolutional network transforms an image through many layers. At different depths, the representation contains different kinds of information. Neural style transfer uses this property to describe content and style separately.",
    },

    {
      type: "heading",
      title: "9. VGG-19 as the Feature Extractor",
    },
    {
      type: "paragraph",
      text:
        "The method uses a VGG-19 network pretrained on ImageNet. The network is not optimized during style transfer. Instead, selected intermediate activations are used as representations of the images.",
    },

    {
      type: "heading",
      title: "10. Selecting Content and Style Layers",
    },
    {
      type: "paragraph",
      text:
        "A practical implementation selects a deeper convolutional layer for content representation and several convolutional layers distributed through the network for style representation.",
    },

    {
      type: "code",
      language: "python",
      code: `style_layers = [0, 5, 10, 19, 28]
content_layers = [25]`,
    },

    {
      type: "paragraph",
      text:
        "These layer indices correspond to the VGG-19 feature sequence used in the reference implementation.",
    },

    {
      type: "heading",
      title: "11. Loading VGG-19",
    },

    {
      type: "code",
      language: "python",
      code: `import torch
import torchvision
from torch import nn

weights = torchvision.models.VGG19_Weights.DEFAULT

pretrained_net = torchvision.models.vgg19(
    weights=weights
)

pretrained_net.eval()`,
    },

    {
      type: "heading",
      title: "12. Freezing the Network",
    },

    {
      type: "paragraph",
      text:
        "The VGG network acts as a fixed feature extractor. Its parameters do not need to be updated during style transfer.",
    },

    {
      type: "code",
      language: "python",
      code: `for parameter in pretrained_net.parameters():
    parameter.requires_grad = False`,
    },

    {
      type: "heading",
      title: "13. Building the Feature Network",
    },

    {
      type: "paragraph",
      text:
        "Only the layers required to reach the selected content and style layers need to be evaluated.",
    },

    {
      type: "code",
      language: "python",
      code: `max_layer = max(
    content_layers + style_layers
)

net = nn.Sequential(
    *[
        pretrained_net.features[i]
        for i in range(max_layer + 1)
    ]
)

net.eval()`,
    },

    {
      type: "heading",
      title: "14. Extracting Intermediate Features",
    },

    {
      type: "paragraph",
      text:
        "A normal forward pass usually returns the final output. Style transfer needs intermediate outputs, so the network is evaluated layer by layer.",
    },

    {
      type: "code",
      language: "python",
      code: `def extract_features(
    X,
    content_layers,
    style_layers,
    net
):
    contents = []
    styles = []

    for i in range(len(net)):
        X = net[i](X)

        if i in style_layers:
            styles.append(X)

        if i in content_layers:
            contents.append(X)

    return contents, styles`,
    },

    {
      type: "heading",
      title: "15. Image Preprocessing",
    },

    {
      type: "paragraph",
      text:
        "The input images must be transformed into tensors and normalized using the preprocessing convention expected by the pretrained network.",
    },

    {
      type: "code",
      language: "python",
      code: `rgb_mean = torch.tensor(
    [0.485, 0.456, 0.406]
)

rgb_std = torch.tensor(
    [0.229, 0.224, 0.225]
)

def preprocess(image, image_shape):
    transform = torchvision.transforms.Compose([
        torchvision.transforms.Resize(image_shape),
        torchvision.transforms.ToTensor(),
        torchvision.transforms.Normalize(
            mean=rgb_mean,
            std=rgb_std
        ),
    ])

    return transform(image).unsqueeze(0)`,
    },

    {
      type: "heading",
      title: "16. Image Postprocessing",
    },

    {
      type: "paragraph",
      text:
        "After optimization, the normalized tensor must be converted back into the normal image representation.",
    },

    {
      type: "code",
      language: "python",
      code: `def postprocess(image):
    image = image[0]

    image = (
        image.permute(1, 2, 0)
        * rgb_std
        + rgb_mean
    )

    image = torch.clamp(
        image,
        0,
        1
    )

    image = image.permute(2, 0, 1)

    return torchvision.transforms.ToPILImage()(
        image
    )`,
    },

    {
      type: "heading",
      title: "17. Content Feature Extraction",
    },

    {
      type: "paragraph",
      text:
        "The content image is passed through the feature network and the activation from the selected content layer is stored as the target content representation.",
    },

    {
      type: "code",
      language: "python",
      code: `content_X = preprocess(
    content_img,
    image_shape
)

contents_Y, _ = extract_features(
    content_X,
    content_layers,
    style_layers,
    net
)`,
    },

    {
      type: "heading",
      title: "18. Style Feature Extraction",
    },

    {
      type: "code",
      language: "python",
      code: `style_X = preprocess(
    style_img,
    image_shape
)

_, styles_Y = extract_features(
    style_X,
    content_layers,
    style_layers,
    net
)`,
    },

    {
      type: "heading",
      title: "19. Content Loss",
    },

    {
      type: "paragraph",
      text:
        "Content loss measures the difference between the content representation of the generated image and the content representation of the original content image.",
    },

    {
      type: "formula",
      formula: "L_content = mean((Y_hat - Y)^2)",
      explanation:
        "Y_hat represents the generated image feature and Y represents the target content feature.",
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
      title: "20. Why Content Loss Uses Features",
    },

    {
      type: "paragraph",
      text:
        "Direct pixel comparison would require the generated image to match the exact pixel arrangement of the content image. Feature-space comparison instead allows the generated image to preserve important visual structure while changing its appearance.",
    },

    {
      type: "heading",
      title: "21. Style Representation",
    },

    {
      type: "paragraph",
      text:
        "Style is represented differently from content. Instead of directly comparing feature maps, neural style transfer uses correlations between feature channels.",
    },

    {
      type: "heading",
      title: "22. Feature Tensor Shape",
    },

    {
      type: "paragraph",
      text:
        "Suppose a feature tensor has shape (batch, channels, height, width). For a single image, the channels can be flattened across the spatial dimensions.",
    },

    {
      type: "code",
      language: "python",
      code: `batch, channels, height, width = X.shape

X_flat = X.reshape(
    channels,
    height * width
)

print(X_flat.shape)`,
    },

    {
      type: "heading",
      title: "23. Gram Matrix",
    },

    {
      type: "paragraph",
      text:
        "The Gram matrix measures correlations between feature channels. These correlations provide a useful representation of style.",
    },

    {
      type: "formula",
      formula: "G = X X^T",
      explanation:
        "X contains flattened feature channels and G contains pairwise correlations between those channels.",
    },

    {
      type: "heading",
      title: "24. Gram Matrix Implementation",
    },

    {
      type: "code",
      language: "python",
      code: `def gram(X):
    channels = X.shape[1]

    spatial_size = (
        X.numel() // channels
    )

    X = X.reshape(
        channels,
        spatial_size
    )

    return torch.matmul(
        X,
        X.T
    ) / (channels * spatial_size)`,
    },

    {
      type: "heading",
      title: "25. Why Normalize the Gram Matrix?",
    },

    {
      type: "paragraph",
      text:
        "The magnitude of the Gram matrix depends on the number of channels and spatial elements. Dividing by the number of elements reduces this dependence and gives a normalized style representation.",
    },

    {
      type: "heading",
      title: "26. Style Loss",
    },

    {
      type: "paragraph",
      text:
        "Style loss compares the Gram matrix of the generated image with the Gram matrix computed from the style image.",
    },

    {
      type: "formula",
      formula: "L_style = mean((G(Y_hat) - G_style)^2)",
      explanation:
        "The objective encourages the generated image to reproduce the feature correlations of the style image.",
    },

    {
      type: "code",
      language: "python",
      code: `def style_loss(Y_hat, gram_Y):
    return torch.square(
        gram(Y_hat) -
        gram_Y.detach()
    ).mean()`,
    },

    {
      type: "heading",
      title: "27. Precomputing Style Targets",
    },

    {
      type: "paragraph",
      text:
        "The style image does not change during optimization. Therefore, its Gram matrices can be calculated once before the optimization loop.",
    },

    {
      type: "code",
      language: "python",
      code: `styles_Y_gram = [
    gram(Y)
    for Y in styles_Y
]`,
    },

    {
      type: "heading",
      title: "28. Total Variation Loss",
    },

    {
      type: "paragraph",
      text:
        "The generated image can contain unwanted high-frequency noise. Total variation loss penalizes large differences between neighboring pixels.",
    },

    {
      type: "formula",
      formula:
        "L_TV = 0.5 × (mean(|X(i,j) - X(i+1,j)|) + mean(|X(i,j) - X(i,j+1)|))",
      explanation:
        "The loss measures neighboring pixel differences in both spatial directions.",
    },

    {
      type: "code",
      language: "python",
      code: `def tv_loss(X):
    vertical = torch.abs(
        X[:, :, 1:, :] -
        X[:, :, :-1, :]
    ).mean()

    horizontal = torch.abs(
        X[:, :, :, 1:] -
        X[:, :, :, :-1]
    ).mean()

    return 0.5 * (
        vertical + horizontal
    )`,
    },

    {
      type: "heading",
      title: "29. Complete Objective Function",
    },

    {
      type: "paragraph",
      text:
        "The final objective combines content loss, style loss, and total variation loss using adjustable weights.",
    },

    {
      type: "formula",
      formula:
        "L_total = α L_content + β L_style + γ L_TV",
      explanation:
        "α controls content preservation, β controls style matching, and γ controls smoothness.",
    },

    {
      type: "heading",
      title: "30. Loss Weights",
    },

    {
      type: "code",
      language: "python",
      code: `content_weight = 1
style_weight = 1e4
tv_weight = 10`,
    },

    {
      type: "paragraph",
      text:
        "The exact weights are hyperparameters. Different values produce different balances between structure, style, and smoothness.",
    },

    {
      type: "heading",
      title: "31. Computing the Complete Loss",
    },

    {
      type: "code",
      language: "python",
      code: `def compute_loss(
    X,
    contents_Y_hat,
    styles_Y_hat,
    contents_Y,
    styles_Y_gram
):
    content_losses = [
        content_loss(
            Y_hat,
            Y
        ) * content_weight
        for Y_hat, Y in zip(
            contents_Y_hat,
            contents_Y
        )
    ]

    style_losses = [
        style_loss(
            Y_hat,
            Y
        ) * style_weight
        for Y_hat, Y in zip(
            styles_Y_hat,
            styles_Y_gram
        )
    ]

    tv = tv_loss(X) * tv_weight

    total = sum(
        content_losses +
        style_losses +
        [tv]
    )

    return (
        content_losses,
        style_losses,
        tv,
        total
    )`,
    },

    {
      type: "heading",
      title: "32. Initializing the Generated Image",
    },

    {
      type: "paragraph",
      text:
        "A practical initialization is to start the generated image from the content image. This gives optimization a reasonable starting point.",
    },

    {
      type: "code",
      language: "python",
      code: `generated = (
    content_X
    .clone()
    .detach()
    .requires_grad_(True)
)`,
    },

    {
      type: "heading",
      title: "33. Optimizing the Image",
    },

    {
      type: "paragraph",
      text:
        "The generated image is treated like an optimization variable. The optimizer changes its pixel values so that the total loss decreases.",
    },

    {
      type: "code",
      language: "python",
      code: `optimizer = torch.optim.Adam(
    [generated],
    lr=0.3
)`,
    },

    {
      type: "heading",
      title: "34. One Optimization Iteration",
    },

    {
      type: "code",
      language: "python",
      code: `optimizer.zero_grad()

contents_hat, styles_hat = extract_features(
    generated,
    content_layers,
    style_layers,
    net
)

contents_l, styles_l, tv_l, total_l = (
    compute_loss(
        generated,
        contents_hat,
        styles_hat,
        contents_Y,
        styles_Y_gram
    )
)

total_l.backward()

optimizer.step()`,
    },

    {
      type: "heading",
      title: "35. Complete Optimization Loop",
    },

    {
      type: "code",
      language: "python",
      code: `num_steps = 500

for step in range(num_steps):
    optimizer.zero_grad()

    contents_hat, styles_hat = extract_features(
        generated,
        content_layers,
        style_layers,
        net
    )

    contents_l, styles_l, tv_l, total_l = (
        compute_loss(
            generated,
            contents_hat,
            styles_hat,
            contents_Y,
            styles_Y_gram
        )
    )

    total_l.backward()

    optimizer.step()

    if step % 50 == 0:
        print(
            f"Step {step}: "
            f"loss={total_l.item():.4f}"
        )`,
    },

    {
      type: "heading",
      title: "36. Understanding Backpropagation",
    },

    {
      type: "paragraph",
      text:
        "The generated image passes through the fixed VGG network. The losses are calculated from its intermediate representations. Backpropagation then computes how changing the generated image would change the total loss.",
    },

    {
      type: "heading",
      title: "37. What Is Actually Learning?",
    },

    {
      type: "paragraph",
      text:
        "The VGG network is not learning new parameters during the basic style-transfer procedure. The optimization changes the generated image itself.",
    },

    {
      type: "heading",
      title: "38. Monitoring the Individual Losses",
    },

    {
      type: "code",
      language: "python",
      code: `content_value = sum(
    value.item()
    for value in contents_l
)

style_value = sum(
    value.item()
    for value in styles_l
)

tv_value = tv_l.item()

print("Content:", content_value)
print("Style:", style_value)
print("TV:", tv_value)
print("Total:", total_l.item())`,
    },

    {
      type: "heading",
      title: "39. Saving Intermediate Images",
    },

    {
      type: "code",
      language: "python",
      code: `if step % 100 == 0:
    result = postprocess(
        generated.detach()
    )

    result.save(
        f"style_transfer_{step}.png"
    )`,
    },

    {
      type: "heading",
      title: "40. Content Weight Experiment",
    },

    {
      type: "paragraph",
      text:
        "Increase the content weight and observe how strongly the generated image preserves the original scene structure.",
    },

    {
      type: "heading",
      title: "41. Style Weight Experiment",
    },

    {
      type: "paragraph",
      text:
        "Increase the style weight and observe how strongly the visual characteristics of the style image influence the generated result.",
    },

    {
      type: "heading",
      title: "42. Total Variation Experiment",
    },

    {
      type: "paragraph",
      text:
        "Change the total variation weight and compare the amount of high-frequency noise in the generated images.",
    },

    {
      type: "heading",
      title: "43. Multiple Style Layers",
    },

    {
      type: "paragraph",
      text:
        "Using multiple style layers allows the system to capture style information at different levels of abstraction. Earlier layers can capture local patterns while deeper layers capture broader visual characteristics.",
    },

    {
      type: "heading",
      title: "44. GPU Execution",
    },

    {
      type: "code",
      language: "python",
      code: `device = torch.device(
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

net = net.to(device)

content_X = content_X.to(device)
style_X = style_X.to(device)
generated = generated.to(device)`,
    },

    {
      type: "heading",
      title: "45. Device Debugging",
    },

    {
      type: "code",
      language: "python",
      code: `print("Generated:", generated.device)
print("Content:", content_X.device)
print("Style:", style_X.device)

print(
    "Network:",
    next(net.parameters()).device
)`,
    },

    {
      type: "heading",
      title: "46. Common Error: Optimizing VGG",
    },

    {
      type: "paragraph",
      text:
        "Do not accidentally pass the VGG parameters to the optimizer when the goal is to optimize only the generated image.",
    },

    {
      type: "code",
      language: "python",
      code: `optimizer = torch.optim.Adam(
    [generated],
    lr=0.3
)`,
    },

    {
      type: "heading",
      title: "47. Common Error: Missing Gradients",
    },

    {
      type: "paragraph",
      text:
        "The generated image must have gradient tracking enabled because its values are the optimization variables.",
    },

    {
      type: "code",
      language: "python",
      code: `generated = (
    content_X
    .clone()
    .detach()
    .requires_grad_(True)
)`,
    },

    {
      type: "heading",
      title: "48. Common Error: Incorrect Gram Matrix",
    },

    {
      type: "paragraph",
      text:
        "The feature tensor must be reshaped so that each row represents one channel and each column represents one spatial position.",
    },

    {
      type: "code",
      language: "python",
      code: `channels = X.shape[1]

X = X.reshape(
    channels,
    X.numel() // channels
)

G = X @ X.T

print(G.shape)`,
    },

    {
      type: "heading",
      title: "49. Common Error: Wrong Normalization",
    },

    {
      type: "paragraph",
      text:
        "The input must use the normalization expected by the pretrained network. Incorrect normalization can produce feature representations that are inconsistent with the pretrained model.",
    },

    {
      type: "heading",
      title: "50. Common Error: NaN Values",
    },

    {
      type: "paragraph",
      text:
        "If the loss becomes NaN, inspect the learning rate, generated tensor values, normalization, loss weights, and device calculations.",
    },

    {
      type: "code",
      language: "python",
      code: `print(
    "Has NaN:",
    torch.isnan(generated).any().item()
)

print(
    "Min:",
    generated.min().item()
)

print(
    "Max:",
    generated.max().item()
)`,
    },

    {
      type: "heading",
      title: "51. Content and Style Trade-Off",
    },

    {
      type: "paragraph",
      text:
        "The generated image must satisfy competing objectives. Increasing the relative importance of content encourages stronger structural preservation, while increasing the relative importance of style encourages stronger stylistic transformation.",
    },

    {
      type: "heading",
      title: "52. Why Pixel-Level Style Matching Is Not Enough",
    },

    {
      type: "paragraph",
      text:
        "Pixel-level matching would make the generated image unnecessarily dependent on the exact spatial arrangement of the style image. Feature correlations provide a more flexible description of visual style.",
    },

    {
      type: "heading",
      title: "53. Practical Debugging Order",
    },

    {
      type: "process",
      steps: [
        "Verify that both images load correctly.",
        "Verify image dimensions.",
        "Verify normalization.",
        "Verify VGG loads correctly.",
        "Verify selected layer indices.",
        "Test feature extraction.",
        "Test content loss.",
        "Test Gram matrix calculation.",
        "Test style loss.",
        "Test total variation loss.",
        "Run only a few optimization iterations.",
        "Inspect the generated tensor.",
        "Run the complete optimization.",
      ],
    },

    {
      type: "heading",
      title: "54. Mini Project",
    },

    {
      type: "paragraph",
      text:
        "Build a complete neural style transfer application. The application should accept one content image and one style image, perform preprocessing, extract VGG features, optimize the generated image, and save the final result.",
    },

    {
      type: "heading",
      title: "55. Required Project Components",
    },

    {
      type: "bullet",
      items: [
        "Content image loader",
        "Style image loader",
        "Image preprocessing",
        "VGG-19 feature extractor",
        "Content feature extraction",
        "Style feature extraction",
        "Gram matrix implementation",
        "Content loss",
        "Style loss",
        "Total variation loss",
        "Combined loss",
        "Image optimizer",
        "Progress logging",
        "Image postprocessing",
        "Final image saving",
      ],
    },

    {
      type: "heading",
      title: "56. Interview Question: What Is Neural Style Transfer?",
    },

    {
      type: "qa",
      question:
        "What is the main idea behind neural style transfer?",
      answer:
        "It optimizes a generated image so that its content representation resembles a content image while its style representation resembles a style image.",
    },

    {
      type: "heading",
      title: "57. Interview Question: Why VGG-19?",
    },

    {
      type: "qa",
      question:
        "Why is a pretrained VGG network useful for neural style transfer?",
      answer:
        "Its intermediate convolutional representations provide a hierarchical visual feature space that can be used to measure content and style similarity.",
    },

    {
      type: "heading",
      title: "58. Interview Question: What Does the Gram Matrix Represent?",
    },

    {
      type: "qa",
      question:
        "What does the Gram matrix capture?",
      answer:
        "It captures correlations between feature channels and is used as a representation of image style.",
    },

    {
      type: "heading",
      title: "59. Interview Question: What Is Total Variation Loss?",
    },

    {
      type: "qa",
      question:
        "Why is total variation loss used?",
      answer:
        "It penalizes large differences between neighboring pixels and helps reduce unwanted high-frequency noise.",
    },

    {
      type: "heading",
      title: "60. Interview Question: What Is Optimized?",
    },

    {
      type: "qa",
      question:
        "Are the VGG parameters updated during basic neural style transfer?",
      answer:
        "No. The pretrained VGG network acts as a fixed feature extractor. The generated image is optimized.",
    },

    {
      type: "heading",
      title: "61. Final Experiment",
    },

    {
      type: "paragraph",
      text:
        "Create three generated images using different style weights. Keep the content image, style image, learning rate, number of iterations, and total variation weight fixed. Compare how the style strength changes.",
    },

    {
      type: "heading",
      title: "62. Experiment Record",
    },

    {
      type: "bullet",
      items: [
        "Content weight",
        "Style weight",
        "Total variation weight",
        "Learning rate",
        "Number of iterations",
        "Final content loss",
        "Final style loss",
        "Final total variation loss",
        "Final total loss",
        "Visual observation",
      ],
    },

    {
      type: "heading",
      title: "63. Complete Conceptual Pipeline",
    },

    {
      type: "process",
      steps: [
        "Content image",
        "Style image",
        "Preprocessing",
        "Pretrained VGG-19",
        "Content features",
        "Style features",
        "Gram matrices",
        "Content loss",
        "Style loss",
        "Total variation loss",
        "Weighted total loss",
        "Backpropagation",
        "Generated-image update",
        "Postprocessing",
        "Final stylized image",
      ],
    },

    {
      type: "heading",
      title: "64. Lesson Summary",
    },

    {
      type: "bullet",
      items: [
        "Neural style transfer combines image content and visual style.",
        "A pretrained CNN can provide useful visual representations.",
        "VGG-19 can be used as a fixed feature extractor.",
        "Content loss compares content representations.",
        "Style loss compares Gram matrices.",
        "Gram matrices represent correlations between feature channels.",
        "Total variation loss reduces high-frequency noise.",
        "The generated image is the optimization variable.",
        "The pretrained CNN parameters remain fixed.",
        "Loss weights control the balance between content, style, and smoothness.",
        "Correct preprocessing and postprocessing are essential.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Neural style transfer demonstrates how deep visual representations can be used to generate a new image through optimization. A pretrained VGG-19 network provides content and style representations, while content loss, style loss, and total variation loss define the objective used to optimize the generated image.",
    },
  ],
};

export default lesson;
