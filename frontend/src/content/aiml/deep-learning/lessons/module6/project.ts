const project = {
  id: "module6-lesson18-project",
  title: "Neural Style Transfer Studio",
  subtitle:
    "Build an end-to-end neural style transfer system using a pretrained CNN",

  difficulty: "Advanced",
  estimatedTime: "6–10 hours",

  overview: {
    description:
      "Build a complete neural style transfer application that accepts a content image and a style image, extracts pretrained CNN representations, optimizes a synthesized image, and presents the generated result.",
    objective:
      "Demonstrate practical understanding of pretrained feature extraction, content loss, style loss, Gram matrices, optimization, regularization, image preprocessing, and result analysis."
  },

  learningObjectives: [
    "Build a complete style-transfer pipeline.",
    "Load and freeze a pretrained CNN.",
    "Extract intermediate features.",
    "Construct content targets.",
    "Construct style targets.",
    "Calculate Gram matrices.",
    "Implement content loss.",
    "Implement style loss.",
    "Implement total variation regularization.",
    "Optimize the generated image.",
    "Track optimization progress.",
    "Visualize intermediate outputs.",
    "Compare different hyperparameter configurations.",
    "Prepare the model for application integration."
  ],

  requirements: [
    "Python",
    "PyTorch",
    "Torchvision",
    "PIL",
    "Matplotlib",
    "A content image",
    "A style image",
    "GPU recommended but not mandatory"
  ],

  sections: [
    {
      title: "1. Project Definition",
      type: "heading"
    },
    {
      title: "Project Goal",
      type: "paragraph",
      content:
        "Create an application that transfers the visual characteristics of one image onto the structural content of another image."
    },

    {
      title: "2. User Workflow",
      type: "process",
      steps: [
        "Upload content image",
        "Upload style image",
        "Select output resolution",
        "Select style strength",
        "Start optimization",
        "Monitor progress",
        "Generate final image",
        "Compare input and output",
        "Save generated image"
      ]
    },

    {
      title: "3. Recommended Folder Structure",
      type: "code",
      language: "text",
      content: `neural-style-transfer/
├── data/
│   ├── content/
│   └── style/
├── outputs/
├── checkpoints/
├── src/
│   ├── model.py
│   ├── losses.py
│   ├── preprocessing.py
│   ├── style_transfer.py
│   └── utils.py
├── notebooks/
│   └── experiments.ipynb
├── train.py
├── inference.py
├── requirements.txt
└── README.md`
    },

    {
      title: "4. Dependencies",
      type: "code",
      language: "text",
      content: `torch
torchvision
pillow
matplotlib
numpy`
    },

    {
      title: "5. Image Preprocessing",
      type: "code",
      language: "python",
      content: `from PIL import Image
import torchvision.transforms as transforms

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225]
    )
])

def load_image(path):
    image = Image.open(path).convert("RGB")
    return transform(image).unsqueeze(0)`
    },

    {
      title: "6. Pretrained Feature Extractor",
      type: "code",
      language: "python",
      content: `import torchvision

net = torchvision.models.vgg19(
    weights="DEFAULT"
)

net.eval()

for parameter in net.parameters():
    parameter.requires_grad = False`
    },

    {
      title: "7. Selecting Feature Layers",
      type: "paragraph",
      content:
        "Select a deeper feature representation for content and several intermediate representations for style. The exact layers should be treated as an experimental configuration rather than a universal constant."
    },

    {
      title: "8. Feature Extraction Function",
      type: "code",
      language: "python",
      content: `def extract_features(
    image,
    network,
    selected_layers
):
    features = []

    x = image

    for index, layer in enumerate(
        network.features
    ):
        x = layer(x)

        if index in selected_layers:
            features.append(x)

    return features`
    },

    {
      title: "9. Content Target",
      type: "code",
      language: "python",
      content: `content_features = extract_features(
    content_image,
    net,
    content_layers
)

content_targets = [
    feature.detach()
    for feature in content_features
]`
    },

    {
      title: "10. Style Targets",
      type: "code",
      language: "python",
      content: `def gram_matrix(feature):
    batch, channels, height, width = feature.shape

    feature = feature.reshape(
        channels,
        height * width
    )

    return (
        feature @ feature.T
    ) / feature.numel()

style_features = extract_features(
    style_image,
    net,
    style_layers
)

style_targets = [
    gram_matrix(feature).detach()
    for feature in style_features
]`
    },

    {
      title: "11. Content Loss",
      type: "code",
      language: "python",
      content: `def content_loss(
    predicted,
    target
):
    return torch.square(
        predicted - target
    ).mean()`
    },

    {
      title: "12. Style Loss",
      type: "code",
      language: "python",
      content: `def style_loss(
    predicted,
    target
):
    predicted_gram = gram_matrix(
        predicted
    )

    return torch.square(
        predicted_gram - target
    ).mean()`
    },

    {
      title: "13. Total Variation",
      type: "code",
      language: "python",
      content: `def tv_loss(image):
    vertical = torch.abs(
        image[:, :, 1:, :] -
        image[:, :, :-1, :]
    ).mean()

    horizontal = torch.abs(
        image[:, :, :, 1:] -
        image[:, :, :, :-1]
    ).mean()

    return vertical + horizontal`
    },

    {
      title: "14. Total Objective",
      type: "formula",
      content:
        "L = αL_content + βL_style + γL_TV"
    },

    {
      title: "15. Synthesized Image",
      type: "code",
      language: "python",
      content: `generated = content_image.clone()

generated.requires_grad_(True)`
    },

    {
      title: "16. Optimizer",
      type: "code",
      language: "python",
      content: `optimizer = torch.optim.Adam(
    [generated],
    lr=0.02
)`
    },

    {
      title: "17. Optimization Loop",
      type: "code",
      language: "python",
      content: `for step in range(500):
    optimizer.zero_grad()

    generated_features = extract_features(
        generated,
        net,
        all_layers
    )

    content_component = content_loss(
        generated_features[0],
        content_targets[0]
    )

    style_component = 0.0

    for feature, target in zip(
        generated_features[1:],
        style_targets
    ):
        style_component = (
            style_component +
            style_loss(feature, target)
        )

    smoothness = tv_loss(generated)

    loss = (
        content_weight * content_component
        + style_weight * style_component
        + tv_weight * smoothness
    )

    loss.backward()
    optimizer.step()

    with torch.no_grad():
        generated.clamp_(-3, 3)

    if step % 50 == 0:
        print(
            step,
            float(loss)
        )`
    },

    {
      title: "18. Saving the Output",
      type: "code",
      language: "python",
      content: `from torchvision.utils import save_image

save_image(
    generated,
    "outputs/generated.png"
)`
    },

    {
      title: "19. Experiment A — Style Weight",
      type: "experiment",
      configurations: [
        {
          name: "Low",
          styleWeight: "1"
        },
        {
          name: "Medium",
          styleWeight: "10"
        },
        {
          name: "High",
          styleWeight: "100"
        }
      ],
      task:
        "Compare the generated images and document the visual changes."
    },

    {
      title: "20. Experiment B — Content Weight",
      type: "experiment",
      task:
        "Keep style weight fixed and change the content weight. Determine how strongly the scene structure is preserved."
    },

    {
      title: "21. Experiment C — Total Variation",
      type: "experiment",
      task:
        "Compare results with and without total variation regularization. Inspect high-frequency noise and local smoothness."
    },

    {
      title: "22. Experiment D — Initialization",
      type: "experiment",
      configurations: [
        "Content image initialization",
        "Random-noise initialization"
      ],
      task:
        "Compare convergence behavior and generated-image structure."
    },

    {
      title: "23. Loss Tracking",
      type: "code",
      language: "python",
      content: `history = {
    "total": [],
    "content": [],
    "style": [],
    "tv": []
}

history["total"].append(
    float(loss)
)

history["content"].append(
    float(content_component)
)

history["style"].append(
    float(style_component)
)

history["tv"].append(
    float(smoothness)
)`
    },

    {
      title: "24. Evaluation",
      type: "paragraph",
      content:
        "Because style transfer does not have a single universal ground-truth target, evaluation should include qualitative inspection and numerical tracking of the individual optimization objectives."
    },

    {
      title: "25. Error Analysis",
      type: "bullet",
      items: [
        "Generated image is too noisy.",
        "Content structure is lost.",
        "Style influence is weak.",
        "Style influence is excessive.",
        "Colors become unstable.",
        "Optimization becomes extremely slow.",
        "Loss becomes NaN.",
        "Output contains unwanted artifacts."
      ]
    },

    {
      title: "26. Debugging Checklist",
      type: "checklist",
      items: [
        "Verify input image dimensions.",
        "Verify normalization.",
        "Verify pretrained weights.",
        "Verify CNN is frozen.",
        "Verify generated image requires gradients.",
        "Verify optimizer receives generated image.",
        "Verify Gram matrix dimensions.",
        "Verify loss values are finite.",
        "Verify output is correctly denormalized."
      ]
    },

    {
      title: "27. Performance Improvements",
      type: "bullet",
      items: [
        "Use GPU.",
        "Reduce image resolution during experiments.",
        "Use fewer feature layers.",
        "Reduce the number of optimization steps.",
        "Save outputs less frequently.",
        "Avoid unnecessary feature extraction."
      ]
    },

    {
      title: "28. Application Interface",
      type: "paragraph",
      content:
        "The project can be extended into a web interface where users upload two images, select style strength, start processing, and receive the generated result."
    },

    {
      title: "29. API Design",
      type: "code",
      language: "json",
      content: `{
  "content_image": "content.jpg",
  "style_image": "style.jpg",
  "style_weight": 10,
  "content_weight": 1,
  "steps": 500
}`
    },

    {
      title: "30. Expected API Response",
      type: "code",
      language: "json",
      content: `{
  "status": "completed",
  "output": "generated.png",
  "steps": 500
}`
    },

    {
      title: "31. Final Project Report",
      type: "paragraph",
      content:
        "Document the architecture, selected feature layers, preprocessing, mathematical objective, optimization configuration, experiments, visual results, failures, improvements, computational requirements, and limitations."
    },

    {
      title: "32. Project Deliverables",
      type: "bullet",
      items: [
        "Source code",
        "Content image",
        "Style image",
        "Generated outputs",
        "Loss curves",
        "Experiment results",
        "README",
        "Technical report",
        "Optional web interface"
      ]
    },

    {
      title: "33. Extension Ideas",
      type: "bullet",
      items: [
        "Multiple style images",
        "Style interpolation",
        "Video style transfer",
        "Region-specific style transfer",
        "Interactive style-strength controls",
        "GPU inference service",
        "Batch style transfer",
        "Cloud deployment"
      ]
    },

    {
      title: "34. Final Technical Questions",
      type: "questions",
      questions: [
        "Why is the generated image optimized instead of the CNN?",
        "Why are multiple CNN layers used for style?",
        "Why is a Gram matrix useful?",
        "What does the content-loss weight control?",
        "What does the style-loss weight control?",
        "Why is total variation useful?",
        "What happens if the learning rate is too large?",
        "How can the application be optimized for faster execution?"
      ]
    },

    {
      title: "35. Completion Criteria",
      type: "checklist",
      items: [
        "The system accepts a content image.",
        "The system accepts a style image.",
        "The pretrained CNN loads successfully.",
        "CNN parameters remain frozen.",
        "Content features are extracted.",
        "Style Gram matrices are calculated.",
        "The generated image is optimized.",
        "Loss components are tracked.",
        "Generated output is saved.",
        "Experiments are documented.",
        "The project can be explained technically."
      ]
    }
  ],

  finalOutcome:
    "After completing this project, the learner should be able to explain and implement the complete neural style transfer pipeline from image preprocessing and pretrained feature extraction through optimization, evaluation, visualization, and application integration."
};

export default project;