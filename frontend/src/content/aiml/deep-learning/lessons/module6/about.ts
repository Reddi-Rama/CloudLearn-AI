const about = {
  id: "module6",
  title: "Computer Vision",
  subtitle: "Deep Learning for Images, Detection, Segmentation, and Visual Understanding",

  description:
    "Learn how deep learning models process visual information and how convolutional representations are extended from image classification to object detection, localization, segmentation, and other computer-vision applications.",

  difficulty: "Advanced",

  estimatedTime: "35–45 hours",

  prerequisites: [
    "Python programming",
    "PyTorch fundamentals",
    "Tensor operations",
    "Neural networks",
    "Convolutional neural networks",
    "Training and optimization",
    "Basic linear algebra",
    "Basic probability"
  ],

  learningObjectives: [
    "Understand why computer vision is a major deep-learning application area.",
    "Understand image augmentation and its role in generalization.",
    "Apply common image transformations.",
    "Understand transfer learning and fine-tuning.",
    "Use pretrained convolutional networks for new tasks.",
    "Understand the difference between image classification and object detection.",
    "Represent object locations using bounding boxes.",
    "Convert between common bounding-box representations.",
    "Understand anchor boxes.",
    "Understand Intersection over Union.",
    "Understand how anchor boxes are assigned training labels.",
    "Understand bounding-box regression.",
    "Understand non-maximum suppression.",
    "Understand multiscale object detection.",
    "Build intuition for modern object-detection architectures.",
    "Understand semantic and instance segmentation.",
    "Understand transposed convolution.",
    "Understand fully convolutional networks.",
    "Understand neural style transfer.",
    "Apply computer-vision concepts to realistic datasets."
  ],

  skillsGained: [
    "Image preprocessing",
    "Image augmentation",
    "Transfer learning",
    "Fine-tuning",
    "Bounding-box representation",
    "Object localization",
    "IoU calculation",
    "Anchor-box generation",
    "Non-maximum suppression",
    "Object detection",
    "Semantic segmentation",
    "Instance segmentation",
    "Image generation concepts",
    "Computer-vision experimentation",
    "Vision-model evaluation"
  ],

  moduleStructure: [
    {
      number: 1,
      title: "Image Augmentation",
      topics: [
        "Why augmentation is needed",
        "Random cropping",
        "Flipping",
        "Color changes",
        "Resizing",
        "Training with augmentation"
      ]
    },
    {
      number: 2,
      title: "Fine-Tuning",
      topics: [
        "Transfer learning",
        "Pretrained networks",
        "Replacing output layers",
        "Freezing parameters",
        "Learning-rate differences",
        "Fine-tuning experiments"
      ]
    },
    {
      number: 3,
      title: "Object Detection and Bounding Boxes",
      topics: [
        "Classification vs detection",
        "Object localization",
        "Bounding boxes",
        "Corner representation",
        "Center representation",
        "Coordinate systems"
      ]
    },
    {
      number: 4,
      title: "Anchor Boxes",
      topics: [
        "Anchor-box motivation",
        "Scales",
        "Aspect ratios",
        "IoU",
        "Training labels",
        "Bounding-box offsets",
        "Non-maximum suppression"
      ]
    }
  ],

  sourceAlignment: {
    source:
      "Dive into Deep Learning — Chapter 14: Computer Vision",
    coverage:
      "This module follows the source progression beginning with Image Augmentation, Fine-Tuning, Object Detection and Bounding Boxes, and Anchor Boxes.",
  },

  realWorldApplications: [
    "Autonomous driving",
    "Security monitoring",
    "Medical imaging",
    "Retail analytics",
    "Industrial inspection",
    "Robotics",
    "Image search",
    "Document analysis",
    "Smart cameras",
    "Visual quality inspection"
  ],

  tools: [
    "Python",
    "PyTorch",
    "Torchvision",
    "NumPy",
    "Matplotlib",
    "Pandas"
  ],

  finalOutcome:
    "By completing this module, learners should be able to reason about computer-vision pipelines beyond simple image classification and understand how deep-learning representations support localization and detection tasks."
};

export default about;