const practice = {
  id: "module6-lesson18-practice",
  title: "Lesson 18 Practice",
  subtitle: "Practice neural style transfer, feature extraction, Gram matrices, and image optimization",

  overview: {
    difficulty: "Advanced",
    estimatedTime: "90–120 minutes",
    description:
      "This practice set reinforces neural style transfer through conceptual questions, mathematical exercises, PyTorch implementation tasks, debugging problems, and small experiments."
  },

  learningGoals: [
    "Understand the difference between content and style representations.",
    "Work with pretrained CNN feature extractors.",
    "Calculate and interpret Gram matrices.",
    "Implement content loss.",
    "Implement style loss.",
    "Implement total variation regularization.",
    "Combine multiple losses into one optimization objective.",
    "Optimize an image instead of network parameters.",
    "Debug neural style transfer implementations.",
    "Analyze the effect of content and style weights."
  ],

  sections: [
    {
      title: "1. Concept Check",
      type: "questions",
      questions: [
        {
          question: "What is the content image?",
          answer:
            "The content image provides the semantic structure or scene that the generated image should preserve."
        },
        {
          question: "What is the style image?",
          answer:
            "The style image provides visual characteristics such as textures, patterns, colors, and feature correlations."
        },
        {
          question: "What is optimized during neural style transfer?",
          answer:
            "The synthesized image is optimized while the pretrained feature extractor remains fixed."
        },
        {
          question: "Why is a pretrained CNN useful?",
          answer:
            "Its learned feature representations provide a useful differentiable space for comparing content and style."
        }
      ]
    },

    {
      title: "2. Content vs Style",
      type: "activity",
      task:
        "Take two images and describe which visual information should be preserved from each image when performing style transfer.",
      expectedThinking: [
        "Content should preserve scene structure.",
        "Style should influence texture and visual appearance.",
        "The generated image should combine information from both."
      ]
    },

    {
      title: "3. Feature Extraction Exercise",
      type: "coding",
      task:
        "Load a pretrained convolutional network and extract intermediate activations from an image.",
      starterCode: `import torch
import torchvision

model = torchvision.models.vgg19(
    weights="DEFAULT"
)

model.eval()

image = torch.randn(1, 3, 224, 224)

with torch.no_grad():
    features = model.features(image)

print(features.shape)`,
      challenge:
        "Modify the program so that activations from multiple selected layers are returned."
    },

    {
      title: "4. Freezing Parameters",
      type: "coding",
      task:
        "Prevent the pretrained network from being modified during style transfer.",
      starterCode: `for parameter in model.parameters():
    # complete this line
    pass`,
      expectedAnswer: `for parameter in model.parameters():
    parameter.requires_grad = False`
    },

    {
      title: "5. Content Loss",
      type: "coding",
      task:
        "Implement mean squared content loss.",
      starterCode: `def content_loss(predicted, target):
    # implement the loss
    pass`,
      expectedConcept:
        "The loss should measure the difference between the feature representations of the synthesized and target content images."
    },

    {
      title: "6. Gram Matrix",
      type: "coding",
      task:
        "Implement a Gram matrix for convolutional feature maps.",
      starterCode: `def gram_matrix(features):
    batch, channels, height, width = features.shape

    # reshape the feature map
    # calculate channel correlations
    # return the Gram matrix

    pass`,
      expectedShape:
        "For one image, the resulting Gram matrix should have shape [channels, channels]."
    },

    {
      title: "7. Gram Matrix Mathematics",
      type: "formulaExercise",
      problem:
        "Suppose the flattened feature matrix X has shape 3 × 4. What is the shape of X Xᵀ?",
      answer:
        "The result has shape 3 × 3 because X has three feature channels."
    },

    {
      title: "8. Style Loss",
      type: "coding",
      task:
        "Implement style loss by comparing the Gram matrix of the generated image with the Gram matrix of the style image.",
      starterCode: `def style_loss(predicted_features, target_gram):
    predicted_gram = gram_matrix(
        predicted_features
    )

    # calculate the difference

    pass`
    },

    {
      title: "9. Total Variation Loss",
      type: "coding",
      task:
        "Implement a simple total variation regularizer.",
      starterCode: `def total_variation_loss(image):
    vertical = image[:, :, 1:, :] - image[:, :, :-1, :]
    horizontal = image[:, :, :, 1:] - image[:, :, :, :-1]

    # combine the two terms

    pass`,
      expectedConcept:
        "The loss should penalize excessive local pixel variation."
    },

    {
      title: "10. Combined Objective",
      type: "formulaExercise",
      problem:
        "Construct the total objective using content loss, style loss, and total variation loss.",
      expectedFormula:
        "L = αL_content + βL_style + γL_TV"
    },

    {
      title: "11. Weight Experiment",
      type: "experiment",
      task:
        "Run style transfer using three different style-loss weights.",
      experimentPlan: [
        "Keep the content-loss weight fixed.",
        "Use a small style weight.",
        "Use a medium style weight.",
        "Use a large style weight.",
        "Compare the resulting images."
      ],
      questions: [
        "Which output preserves the content structure most strongly?",
        "Which output shows the strongest style?",
        "When does the output begin to lose important content?"
      ]
    },

    {
      title: "12. Initialization Experiment",
      type: "experiment",
      task:
        "Compare two initialization strategies.",
      strategies: [
        "Initialize the synthesized image from the content image.",
        "Initialize the synthesized image using random noise."
      ],
      questions: [
        "How does optimization behave differently?",
        "Which initialization converges more quickly?",
        "Which produces more stable visual structure?"
      ]
    },

    {
      title: "13. Debugging Challenge",
      type: "debugging",
      code: `content = preprocess(content_image)
style = preprocess(style_image)

for parameter in net.parameters():
    parameter.requires_grad = True

generated = content.clone()

optimizer = torch.optim.Adam(
    net.parameters(),
    lr=0.01
)`,
      problems: [
        "The wrong parameters are being optimized.",
        "The pretrained network has not been frozen."
      ],
      task:
        "Identify and correct both problems."
    },

    {
      title: "14. Shape Debugging",
      type: "debugging",
      code: `print(content.shape)
print(style.shape)
print(generated.shape)
print(features.shape)
print(gram.shape)`,
      task:
        "Add assertions that verify the image and feature dimensions before computing the losses."
    },

    {
      title: "15. Layer Selection Experiment",
      type: "experiment",
      task:
        "Compare using early CNN layers versus deeper CNN layers for content representation.",
      questions: [
        "Which representation preserves local details?",
        "Which representation preserves broader structure?",
        "How does the generated image change?"
      ]
    },

    {
      title: "16. Style Layer Experiment",
      type: "experiment",
      task:
        "Compare using only one style layer with using several style layers.",
      expectedObservation:
        "Multiple layers can represent style information at different spatial and semantic scales."
    },

    {
      title: "17. Numerical Stability",
      type: "debugging",
      task:
        "The loss suddenly becomes NaN during optimization.",
      possibleCauses: [
        "Learning rate is too large.",
        "Image values become numerically unstable.",
        "Loss weights are excessively large.",
        "Incorrect normalization.",
        "Invalid tensor operations."
      ]
    },

    {
      title: "18. Implementation Challenge",
      type: "projectTask",
      task:
        "Implement a reusable StyleTransfer class.",
      requirements: [
        "Accept content image.",
        "Accept style image.",
        "Extract target content features.",
        "Extract target style Gram matrices.",
        "Optimize the synthesized image.",
        "Return the final image."
      ]
    },

    {
      title: "19. Interview Practice",
      type: "questions",
      questions: [
        {
          question: "Why are CNN features useful for style transfer?",
          answer:
            "They provide hierarchical representations containing useful structural and visual information."
        },
        {
          question: "Why does the Gram matrix represent style?",
          answer:
            "It captures correlations between feature channels, which can characterize texture-like visual statistics."
        },
        {
          question: "Why is the CNN frozen?",
          answer:
            "The pretrained representation is used as the fixed feature space while the synthesized image is optimized."
        },
        {
          question: "What happens if style weight is extremely high?",
          answer:
            "The generated image can become strongly dominated by the style objective and may lose important content structure."
        }
      ]
    },

    {
      title: "20. Final Practice Challenge",
      type: "challenge",
      task:
        "Build a complete neural style-transfer experiment and document the effect of changing content weight, style weight, initialization, selected feature layers, and optimization steps.",
      deliverables: [
        "Working Python implementation",
        "Three generated images",
        "Loss curves",
        "Parameter configuration",
        "Comparison of results",
        "Short technical explanation"
      ]
    }
  ],

  finalAssessment: {
    title: "Practice Completion Checklist",
    checklist: [
      "I can explain content and style representations.",
      "I can extract intermediate CNN features.",
      "I can calculate a Gram matrix.",
      "I can implement content loss.",
      "I can implement style loss.",
      "I can implement total variation loss.",
      "I can combine multiple losses.",
      "I can optimize the synthesized image.",
      "I can debug shape and numerical errors.",
      "I can explain the effect of loss weights."
    ]
  }
};

export default practice;