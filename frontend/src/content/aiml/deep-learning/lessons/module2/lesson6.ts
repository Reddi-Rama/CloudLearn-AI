const lesson = {
  id: "lesson6",
  title: "Image Classification Basics",
  module: "Neural Networks and Learning",
  course: "Deep Learning & Computer Vision",

  sections: [
    {
      type: "heading",
      title: "1. Introduction to Image Classification",
    },

    {
      type: "paragraph",
      text:
        "Image classification is a computer vision task in which a machine learning model receives an image and predicts which category the image belongs to. The categories are usually called classes. Examples include classifying an image as a cat or dog, recognizing handwritten digits, identifying different types of vehicles, or determining whether an image belongs to one of several predefined categories.",
    },

    {
      type: "paragraph",
      text:
        "Although the final output may look simple, image classification requires the model to learn a relationship between a large collection of numerical pixel values and meaningful semantic categories.",
    },

    {
      type: "paragraph",
      text:
        "A neural network does not directly see an image in the way a human does. It receives a numerical tensor. Learning useful visual representations from those numbers is one of the central goals of deep learning.",
    },

    {
      type: "keyTakeaway",
      title: "Core Idea",
      text:
        "Image classification converts visual information into numerical representations and learns a mapping from those representations to class predictions.",
    },

    {
      type: "heading",
      title: "2. What Is an Image Mathematically?",
    },

    {
      type: "paragraph",
      text:
        "A digital image can be represented as an array of numerical values. Each numerical value describes information about one pixel or one component of a pixel.",
    },

    {
      type: "paragraph",
      text:
        "For a grayscale image, one value is usually associated with each pixel. For a color image, several channels are used. A common representation is RGB, where each pixel has a red, green, and blue component.",
    },

    {
      type: "formula",
      formula: "Grayscale image = Height × Width",
    },

    {
      type: "formula",
      formula: "RGB image = Height × Width × 3",
    },

    {
      type: "paragraph",
      text:
        "For example, an RGB image with height 28 and width 28 contains 28 × 28 × 3 = 2352 numerical values.",
    },

    {
      type: "heading",
      title: "3. Image Channels",
    },

    {
      type: "paragraph",
      text:
        "A channel represents one component of an image. In an RGB image, the three channels represent red, green, and blue information. Deep learning frameworks commonly represent an image using a tensor whose dimensions describe the channel and spatial information.",
    },

    {
      type: "paragraph",
      text:
        "The exact ordering of dimensions depends on the framework and the operation being performed. In PyTorch, image batches are commonly represented using the order batch, channel, height, width.",
    },

    {
      type: "formula",
      formula: "Image batch shape = (N, C, H, W)",
    },

    {
      type: "paragraph",
      text:
        "Here N is the number of images, C is the number of channels, H is the height, and W is the width.",
    },

    {
      type: "heading",
      title: "4. Example of Image Tensor Dimensions",
    },

    {
      type: "paragraph",
      text:
        "Suppose we have 64 RGB images, each with a resolution of 32 × 32 pixels. Their batch tensor can have the shape 64 × 3 × 32 × 32.",
    },

    {
      type: "formula",
      formula: "N = 64",
    },

    {
      type: "formula",
      formula: "C = 3",
    },

    {
      type: "formula",
      formula: "H = 32",
    },

    {
      type: "formula",
      formula: "W = 32",
    },

    {
      type: "paragraph",
      text:
        "The total number of numerical values in the complete batch is 64 × 3 × 32 × 32 = 196608.",
    },

    {
      type: "heading",
      title: "5. Pixel Values",
    },

    {
      type: "paragraph",
      text:
        "Images stored in common formats often contain integer pixel values. Before feeding them into a neural network, these values are frequently converted into floating-point tensors and normalized or scaled into a more convenient numerical range.",
    },

    {
      type: "paragraph",
      text:
        "The exact preprocessing strategy depends on the dataset and model. The important principle is that preprocessing should be consistent between training and inference.",
    },

    {
      type: "heading",
      title: "6. From Images to a Dataset",
    },

    {
      type: "paragraph",
      text:
        "A classification dataset contains input images and corresponding labels. Each example can be represented conceptually as a pair consisting of an image and its target class.",
    },

    {
      type: "formula",
      formula: "Dataset = {(x₁, y₁), (x₂, y₂), ..., (xₙ, yₙ)}",
    },

    {
      type: "paragraph",
      text:
        "Here x represents an image and y represents its correct class label.",
    },

    {
      type: "heading",
      title: "7. Classes and Labels",
    },

    {
      type: "paragraph",
      text:
        "A class is a category that the model can predict. A label identifies the correct class for a particular training example.",
    },

    {
      type: "paragraph",
      text:
        "Suppose a dataset contains ten classes. A particular image might have label 3. The model, however, usually produces a score for every class rather than directly producing only the number 3.",
    },

    {
      type: "formula",
      formula: "Model output = [score₀, score₁, ..., score₉]",
    },

    {
      type: "paragraph",
      text:
        "The predicted class can then be selected from the class with the highest score.",
    },

    {
      type: "formula",
      formula: "Predicted Class = argmax(scores)",
    },

    {
      type: "heading",
      title: "8. Training Dataset and Test Dataset",
    },

    {
      type: "paragraph",
      text:
        "The dataset is normally divided into different subsets. The training set is used to learn the model parameters. A separate evaluation set is used to estimate how the trained model performs on examples that were not used during parameter updates.",
    },

    {
      type: "keyTakeaway",
      title: "Why Separation Matters",
      text:
        "A model can perform extremely well on examples it has already seen while performing poorly on new examples. Separate evaluation data helps measure generalization.",
    },

    {
      type: "heading",
      title: "9. Why Memorization Is Not Enough",
    },

    {
      type: "paragraph",
      text:
        "Imagine a model simply memorized the label associated with every training image. It could achieve perfect training accuracy without learning a useful rule for recognizing new images.",
    },

    {
      type: "paragraph",
      text:
        "The purpose of machine learning is therefore not merely to memorize training examples. The model should learn patterns that remain useful when presented with unseen examples.",
    },

    {
      type: "heading",
      title: "10. Minibatches",
    },

    {
      type: "paragraph",
      text:
        "A dataset can contain thousands or millions of images. Processing the entire dataset in a single operation is often impractical. Deep learning systems therefore process examples in smaller groups called minibatches.",
    },

    {
      type: "formula",
      formula: "Minibatch = subset of training examples",
    },

    {
      type: "paragraph",
      text:
        "For example, a dataset may contain 60000 images while training uses a minibatch size of 128. The model processes 128 examples at a time and repeatedly updates its parameters.",
    },

    {
      type: "heading",
      title: "11. Why Minibatches Are Useful",
    },

    {
      type: "bullets",
      items: [
        "They reduce memory requirements.",
        "They allow efficient matrix operations.",
        "They work naturally with GPU computation.",
        "They allow frequent parameter updates.",
        "They make large datasets easier to process.",
      ],
    },

    {
      type: "heading",
      title: "12. Data Loader Concept",
    },

    {
      type: "paragraph",
      text:
        "A data loader provides a convenient mechanism for retrieving minibatches from a dataset. It can also handle operations such as shuffling training examples and assembling individual examples into batches.",
    },

    {
      type: "code",
      language: "python",
      title: "Basic PyTorch DataLoader",
      code: `import torch
from torch.utils.data import TensorDataset, DataLoader

X = torch.randn(1000, 1, 28, 28)
y = torch.randint(0, 10, (1000,))

dataset = TensorDataset(X, y)

loader = DataLoader(
    dataset,
    batch_size=32,
    shuffle=True
)

images, labels = next(iter(loader))

print(images.shape)
print(labels.shape)`,
    },

    {
      type: "output",
      title: "Expected Output",
      code: `torch.Size([32, 1, 28, 28])
torch.Size([32])`,
    },

    {
      type: "heading",
      title: "13. Understanding the Batch",
    },

    {
      type: "paragraph",
      text:
        "The first dimension represents the number of examples in the batch. The remaining dimensions describe each image.",
    },

    {
      type: "formula",
      formula: "(32, 1, 28, 28) = (batch, channels, height, width)",
    },

    {
      type: "heading",
      title: "14. Visualization",
    },

    {
      type: "paragraph",
      text:
        "Visualization is an important part of computer vision development. Before training a sophisticated model, developers should inspect the dataset itself.",
    },

    {
      type: "paragraph",
      text:
        "Visualization can reveal incorrect labels, unusual images, unexpected orientations, preprocessing errors, class imbalance, or images that do not belong in the dataset.",
    },

    {
      type: "process",
      title: "Dataset Inspection Workflow",
      steps: [
        "Load a small batch",
        "Inspect tensor shape",
        "Inspect label shape",
        "Display several images",
        "Check corresponding labels",
        "Inspect numerical ranges",
        "Look for abnormal examples",
        "Verify class distribution",
      ],
    },

    {
      type: "heading",
      title: "15. The Classification Model",
    },

    {
      type: "paragraph",
      text:
        "A classification model receives an image representation and produces a score for every possible class.",
    },

    {
      type: "formula",
      formula: "X → Model → Class Scores",
    },

    {
      type: "paragraph",
      text:
        "For a ten-class problem, the final layer may produce ten numerical values for each image.",
    },

    {
      type: "heading",
      title: "16. Logits",
    },

    {
      type: "paragraph",
      text:
        "The raw outputs of a classification model are often called logits. They are not necessarily probabilities. They are scores that can later be transformed into probabilities when required.",
    },

    {
      type: "formula",
      formula: "Logits = raw class scores",
    },

    {
      type: "paragraph",
      text:
        "For numerical stability, modern classification implementations often pass logits directly to a loss function such as PyTorch's CrossEntropyLoss rather than manually computing softmax first.",
    },

    {
      type: "heading",
      title: "17. Softmax Connection",
    },

    {
      type: "paragraph",
      text:
        "Softmax converts a vector of class scores into values that form a probability distribution. The class probabilities sum to one.",
    },

    {
      type: "formula",
      formula: "pᵢ = exp(zᵢ) / Σⱼ exp(zⱼ)",
    },

    {
      type: "paragraph",
      text:
        "The class with the largest logit also has the largest softmax probability.",
    },

    {
      type: "heading",
      title: "18. Accuracy",
    },

    {
      type: "paragraph",
      text:
        "Accuracy measures how many predictions match their correct labels.",
    },

    {
      type: "formula",
      formula: "Accuracy = Correct Predictions / Total Predictions",
    },

    {
      type: "paragraph",
      text:
        "If a model correctly predicts 920 out of 1000 images, its accuracy is 0.92 or 92 percent.",
    },

    {
      type: "heading",
      title: "19. Accuracy in PyTorch",
    },

    {
      type: "code",
      language: "python",
      title: "Calculating Classification Accuracy",
      code: `import torch

logits = torch.tensor([
    [2.1, 0.5, -1.0],
    [0.1, 3.2, 0.4],
    [4.0, 1.0, 0.2]
])

labels = torch.tensor([0, 1, 2])

predictions = logits.argmax(dim=1)

accuracy = (predictions == labels).float().mean()

print("Predictions:", predictions)
print("Accuracy:", accuracy.item())`,
    },

    {
      type: "output",
      title: "Expected Output",
      code: `Predictions: tensor([0, 1, 0])
Accuracy: 0.6666666865348816`,
    },

    {
      type: "paragraph",
      text:
        "The third example is incorrectly classified because the highest score belongs to class 0 while the correct label is class 2.",
    },

    {
      type: "heading",
      title: "20. Image Classification Training Pipeline",
    },

    {
      type: "process",
      title: "Complete Pipeline",
      steps: [
        "Collect labeled images",
        "Split the dataset",
        "Preprocess images",
        "Convert images to tensors",
        "Create data loaders",
        "Construct the classifier",
        "Choose a loss function",
        "Choose an optimizer",
        "Train using minibatches",
        "Evaluate on separate data",
        "Inspect errors",
        "Improve the model",
      ],
    },

    {
      type: "heading",
      title: "21. Why a Linear Classifier Is Limited",
    },

    {
      type: "paragraph",
      text:
        "A linear classifier can provide a useful baseline, but its transformation is limited to an affine mapping of the input. It does not automatically construct multiple levels of nonlinear visual representations.",
    },

    {
      type: "paragraph",
      text:
        "For image data, useful information is often hierarchical. Simple patterns can combine into shapes, and shapes can combine into larger visual structures. This motivates multilayer networks and, eventually, convolutional neural networks.",
    },

    {
      type: "heading",
      title: "22. Important Tensor Shape Debugging",
    },

    {
      type: "paragraph",
      text:
        "Tensor shape errors are among the most common problems encountered while implementing image classifiers. Always determine what every dimension represents before connecting tensors to a layer.",
    },

    {
      type: "bullets",
      items: [
        "Check batch size.",
        "Check channel count.",
        "Check height and width.",
        "Check the number of output classes.",
        "Check whether a flattening operation is required.",
        "Check whether the model expects channels-first or channels-last data.",
      ],
    },

    {
      type: "heading",
      title: "23. Common Image Classification Problems",
    },

    {
      type: "bullets",
      items: [
        "Images have inconsistent sizes.",
        "Image tensors have incorrect dimension ordering.",
        "Labels are outside the valid class range.",
        "Training and evaluation preprocessing are inconsistent.",
        "Classes are heavily imbalanced.",
        "The model memorizes the training data.",
        "The dataset contains incorrect labels.",
        "The model receives a different input format during deployment.",
      ],
    },

    {
      type: "heading",
      title: "24. Practical Example",
    },

    {
      type: "paragraph",
      text:
        "Consider a ten-class image dataset. Each image is 28 × 28 grayscale. A batch of 64 images therefore has shape 64 × 1 × 28 × 28. If the classifier is an MLP, the image may be flattened into 784 features. The model then produces ten output scores for each example.",
    },

    {
      type: "formula",
      formula: "64 × 1 × 28 × 28 → 64 × 784 → 64 × 10",
    },

    {
      type: "heading",
      title: "25. Source Connection",
    },

    {
      type: "paragraph",
      text:
        "The source develops image classification through the dataset, minibatch reading, visualization, a base classifier, accuracy, and then a complete softmax regression implementation. This progression is important because it separates data handling from model construction and evaluation.",
    },

    {
      type: "summary",
      title: "Lesson Summary",
      items: [
        "Images are numerical tensors.",
        "RGB images contain multiple channels.",
        "Image datasets contain inputs and class labels.",
        "Training and evaluation data serve different purposes.",
        "Minibatches make large-scale training practical.",
        "Data loaders provide batches during training.",
        "Visualization helps detect dataset problems.",
        "Classifiers produce scores for possible classes.",
        "Logits are raw class scores.",
        "Softmax can convert scores into probabilities.",
        "Accuracy measures correct predictions.",
        "Tensor shape management is essential in computer vision.",
        "Linear classifiers provide a useful baseline but have limited representational power.",
      ],
    },

    {
      type: "exercises",
      title: "Conceptual Exercises",
      items: [
        "Explain what image classification means.",
        "What does each dimension of an N × C × H × W image tensor represent?",
        "Why are images converted into tensors?",
        "Why should training and test data be separated?",
        "What is a minibatch?",
        "Why is visualization useful before training?",
        "What is a logit?",
        "What does argmax do during classification?",
        "How is accuracy calculated?",
        "Why can a linear classifier struggle with complex visual patterns?",
      ],
    },

    {
      type: "codingTask",
      title: "Coding Task 1 — Image Tensor",
      task:
        "Create a PyTorch tensor representing 128 RGB images with dimensions 32 × 32. Print the shape, number of elements, and number of channels.",
    },

    {
      type: "codingTask",
      title: "Coding Task 2 — DataLoader",
      task:
        "Create 500 random grayscale images of size 28 × 28 and random labels from ten classes. Build a TensorDataset and DataLoader with batch size 32. Print the first batch shape.",
    },

    {
      type: "codingTask",
      title: "Coding Task 3 — Accuracy",
      task:
        "Generate random logits for 100 examples across five classes, generate labels, calculate predictions with argmax, and calculate classification accuracy.",
    },

    {
      type: "debuggingTask",
      title: "Debugging Task",
      task:
        "Create an image tensor with shape (32, 28, 28, 3). Determine why it may not directly match the usual PyTorch CNN input convention and write code that rearranges it into (32, 3, 28, 28).",
    },

    {
      type: "keyTakeaway",
      title: "Final Takeaway",
      text:
        "Image classification begins long before the neural network. A strong computer vision developer understands the image tensor, dataset, labels, minibatches, preprocessing, model outputs, prediction rules, and evaluation process before building more advanced architectures.",
    },
  ],
};

export default lesson;