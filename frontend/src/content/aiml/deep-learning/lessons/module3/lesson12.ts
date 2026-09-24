const lesson12 = {
  id: "lesson12",
  title: "Batch Normalization",
  moduleId: "module3",
  duration: "105 min",
  level: "Intermediate",
  description:
    "Understand why batch normalization is used in deep networks, how normalization is computed, how learnable scale and shift parameters work, and how BatchNorm is implemented in CNNs.",

  content: [
    {
      type: "heading",
      level: 2,
      text: "1. Why Batch Normalization?"
    },
    {
      type: "paragraph",
      text:
        "Training deep neural networks can become difficult as the network becomes deeper. Different layers receive representations whose numerical distributions can change during training. Batch normalization introduces a normalization operation that helps control these intermediate activations."
    },

    {
      type: "paragraph",
      text:
        "The goal is not simply to force every activation to have a particular distribution forever. Instead, the layer normalizes activations using statistics computed from the current mini-batch and then learns parameters that allow the network to adjust the normalized representation."
    },

    {
      type: "heading",
      level: 2,
      text: "2. Basic Batch Statistics"
    },
    {
      type: "paragraph",
      text:
        "For a mini-batch of activations, batch normalization computes a mean and variance and uses them to standardize the activations."
    },

    {
      type: "formula",
      text: "μB = (1/m) Σ xi"
    },

    {
      type: "formula",
      text: "σ²B = (1/m) Σ (xi − μB)²"
    },

    {
      type: "heading",
      level: 2,
      text: "3. Normalization"
    },
    {
      type: "formula",
      text: "x̂i = (xi − μB) / √(σ²B + ε)"
    },

    {
      type: "paragraph",
      text:
        "The small constant ε prevents division by zero and improves numerical stability."
    },

    {
      type: "heading",
      level: 2,
      text: "4. Learnable Scale and Shift"
    },
    {
      type: "paragraph",
      text:
        "After normalization, BatchNorm applies learnable scale and shift parameters. These parameters allow the network to recover useful representations when strict standardization would otherwise be too restrictive."
    },

    {
      type: "formula",
      text: "yi = γx̂i + β"
    },

    {
      type: "paragraph",
      text:
        "Here γ controls the scale and β controls the shift. Both are learned during training."
    },

    {
      type: "process",
      title: "BatchNorm Pipeline",
      steps: [
        "Receive mini-batch activations",
        "Calculate batch mean",
        "Calculate batch variance",
        "Normalize using mean and variance",
        "Apply learnable scale γ",
        "Apply learnable shift β",
        "Pass result to next layer"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "5. Why ε Is Necessary"
    },
    {
      type: "paragraph",
      text:
        "If the variance becomes extremely small, division by its square root can become numerically unstable. Adding ε keeps the denominator safely away from zero."
    },

    {
      type: "formula",
      text: "ε > 0"
    },

    {
      type: "heading",
      level: 2,
      text: "6. BatchNorm in a Fully Connected Network"
    },
    {
      type: "code",
      language: "python",
      title: "BatchNorm1d Example",
      code: `import torch
from torch import nn

model = nn.Sequential(
    nn.Linear(20, 64),
    nn.BatchNorm1d(64),
    nn.ReLU(),

    nn.Linear(64, 32),
    nn.BatchNorm1d(32),
    nn.ReLU(),

    nn.Linear(32, 10)
)

x = torch.randn(16, 20)

y = model(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Input: torch.Size([16, 20])
Output: torch.Size([16, 10])`
    },

    {
      type: "heading",
      level: 2,
      text: "7. BatchNorm in CNNs"
    },
    {
      type: "paragraph",
      text:
        "For convolutional feature maps, BatchNorm2d is commonly used. The feature map has dimensions corresponding to batch, channel, height, and width."
    },

    {
      type: "code",
      language: "python",
      title: "BatchNorm2d Example",
      code: `import torch
from torch import nn

layer = nn.BatchNorm2d(64)

x = torch.randn(
    8,
    64,
    32,
    32
)

y = layer(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "heading",
      level: 2,
      text: "8. Typical CNN Placement"
    },
    {
      type: "paragraph",
      text:
        "A common pattern is convolution followed by batch normalization and then a nonlinear activation."
    },

    {
      type: "process",
      title: "Common CNN Pattern",
      steps: [
        "Convolution",
        "Batch Normalization",
        "ReLU",
        "Pooling or next convolution"
      ]
    },

    {
      type: "code",
      language: "python",
      title: "Conv + BatchNorm + ReLU",
      code: `import torch
from torch import nn

block = nn.Sequential(
    nn.Conv2d(
        3,
        32,
        kernel_size=3,
        padding=1
    ),
    nn.BatchNorm2d(32),
    nn.ReLU()
)

x = torch.randn(
    4,
    3,
    32,
    32
)

y = block(x)

print("Input:", x.shape)
print("Output:", y.shape)`
    },

    {
      type: "heading",
      level: 2,
      text: "9. BatchNorm Parameters"
    },
    {
      type: "paragraph",
      text:
        "A BatchNorm layer contains learnable scale and shift parameters for each normalized feature or channel. These parameters are optimized together with the rest of the model."
    },

    {
      type: "code",
      language: "python",
      title: "Inspecting BatchNorm Parameters",
      code: `import torch
from torch import nn

layer = nn.BatchNorm2d(32)

print("Weight shape:", layer.weight.shape)
print("Bias shape:", layer.bias.shape)

print("Weight requires grad:",
      layer.weight.requires_grad)

print("Bias requires grad:",
      layer.bias.requires_grad)`
    },

    {
      type: "heading",
      level: 2,
      text: "10. Training Mode and Evaluation Mode"
    },
    {
      type: "paragraph",
      text:
        "Batch normalization behaves differently during training and evaluation. During training, mini-batch statistics are used. During evaluation, running statistics accumulated during training are used."
    },

    {
      type: "code",
      language: "python",
      title: "Train and Evaluation Modes",
      code: `model = nn.Sequential(
    nn.Linear(20, 32),
    nn.BatchNorm1d(32),
    nn.ReLU(),
    nn.Linear(32, 10)
)

model.train()

print("Training mode:", model.training)

model.eval()

print("Evaluation mode:", model.training)`
    },

    {
      type: "heading",
      level: 2,
      text: "11. Why eval() Matters"
    },
    {
      type: "paragraph",
      text:
        "Forgetting to switch a model to evaluation mode can cause layers such as BatchNorm and Dropout to behave as if training is still happening. This can produce inconsistent evaluation results."
    },

    {
      type: "heading",
      level: 2,
      text: "12. Running Statistics"
    },
    {
      type: "paragraph",
      text:
        "BatchNorm maintains running estimates of the mean and variance. These statistics provide a stable reference for inference when there is no training mini-batch whose statistics should be used."
    },

    {
      type: "heading",
      level: 2,
      text: "13. BatchNorm from Scratch"
    },
    {
      type: "code",
      language: "python",
      title: "Simple BatchNorm Function",
      code: `import torch

def simple_batch_norm(x, gamma, beta, eps=1e-5):
    mean = x.mean(dim=0)
    variance = x.var(
        dim=0,
        unbiased=False
    )

    normalized = (
        x - mean
    ) / torch.sqrt(
        variance + eps
    )

    return gamma * normalized + beta


x = torch.randn(8, 4)

gamma = torch.ones(4)
beta = torch.zeros(4)

y = simple_batch_norm(
    x,
    gamma,
    beta
)

print("Input shape:", x.shape)
print("Output shape:", y.shape)`
    },

    {
      type: "heading",
      level: 2,
      text: "14. Understanding the From-Scratch Version"
    },
    {
      type: "paragraph",
      text:
        "The simplified implementation shows the mathematical idea directly: compute statistics, normalize, then apply learnable scale and shift. Production frameworks additionally handle running statistics, different tensor layouts, numerical details, and efficient implementation."
    },

    {
      type: "heading",
      level: 2,
      text: "15. BatchNorm and CNN Channels"
    },
    {
      type: "paragraph",
      text:
        "For a convolutional layer producing C channels, BatchNorm2d(C) is used. The layer learns normalization parameters associated with those channels."
    },

    {
      type: "formula",
      text: "Conv2d output channels = BatchNorm2d feature count"
    },

    {
      type: "heading",
      level: 2,
      text: "16. BatchNorm with a CNN"
    },
    {
      type: "code",
      language: "python",
      title: "Small CNN with BatchNorm",
      code: `import torch
from torch import nn

class CNNWithBatchNorm(nn.Module):
    def __init__(self, num_classes=10):
        super().__init__()

        self.features = nn.Sequential(
            nn.Conv2d(
                3,
                32,
                kernel_size=3,
                padding=1
            ),
            nn.BatchNorm2d(32),
            nn.ReLU(),
            nn.MaxPool2d(2),

            nn.Conv2d(
                32,
                64,
                kernel_size=3,
                padding=1
            ),
            nn.BatchNorm2d(64),
            nn.ReLU(),
            nn.MaxPool2d(2)
        )

        self.classifier = nn.Sequential(
            nn.AdaptiveAvgPool2d((1, 1)),
            nn.Flatten(),
            nn.Linear(64, num_classes)
        )

    def forward(self, x):
        x = self.features(x)
        return self.classifier(x)


model = CNNWithBatchNorm()

x = torch.randn(
    4,
    3,
    32,
    32
)

y = model(x)

print("Output:", y.shape)`
    },

    {
      type: "output",
      title: "Expected Output",
      text: `Output: torch.Size([4, 10])`
    },

    {
      type: "heading",
      level: 2,
      text: "17. BatchNorm and Optimization"
    },
    {
      type: "paragraph",
      text:
        "Batch normalization can make optimization more manageable by controlling activation scales. This can interact with learning-rate choices and optimization behavior, although the exact effect depends on the architecture, dataset, batch size, and optimizer."
    },

    {
      type: "heading",
      level: 2,
      text: "18. Batch Size Matters"
    },
    {
      type: "paragraph",
      text:
        "Because training-time normalization relies on mini-batch statistics, the quality of those statistics depends on the mini-batch. Very small batches can produce noisy estimates."
    },

    {
      type: "heading",
      level: 2,
      text: "19. BatchNorm and Dropout"
    },
    {
      type: "paragraph",
      text:
        "BatchNorm and Dropout solve different problems. BatchNorm normalizes activations using batch statistics and learned parameters, while Dropout randomly removes activations during training as a regularization mechanism."
    },

    {
      type: "table",
      headers: ["Aspect", "BatchNorm", "Dropout"],
      rows: [
        ["Main purpose", "Activation normalization", "Regularization"],
        ["Training behavior", "Uses batch statistics", "Randomly masks activations"],
        ["Learnable parameters", "Scale and shift", "No scale/shift parameters"],
        ["Evaluation behavior", "Uses running statistics", "Disabled"]
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "20. BatchNorm Debugging Checklist"
    },
    {
      type: "list",
      items: [
        "Use BatchNorm1d for appropriate vector features.",
        "Use BatchNorm2d for CNN feature maps.",
        "Ensure the number of BatchNorm features matches the convolution output channels.",
        "Call model.train() during training.",
        "Call model.eval() during evaluation.",
        "Use torch.no_grad() during inference when gradients are unnecessary.",
        "Be careful with extremely small batch sizes."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "21. Complete Training Example"
    },
    {
      type: "code",
      language: "python",
      title: "Training a CNN with BatchNorm",
      code: `import torch
from torch import nn

model = CNNWithBatchNorm(
    num_classes=10
)

device = torch.device(
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

model = model.to(device)

loss_fn = nn.CrossEntropyLoss()

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=0.001
)

x = torch.randn(
    16,
    3,
    32,
    32,
    device=device
)

targets = torch.randint(
    0,
    10,
    (16,),
    device=device
)

model.train()

optimizer.zero_grad()

predictions = model(x)

loss = loss_fn(
    predictions,
    targets
)

loss.backward()

optimizer.step()

print("Training step completed")
print("Loss:", loss.item())`
    },

    {
      type: "heading",
      level: 2,
      text: "22. BatchNorm Mental Model"
    },
    {
      type: "process",
      title: "Think of BatchNorm Like This",
      steps: [
        "Observe activation values",
        "Estimate their batch statistics",
        "Center the values",
        "Scale them using variance",
        "Allow the network to relearn useful scale and offset",
        "Use running statistics during inference"
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "23. Important Limitation"
    },
    {
      type: "paragraph",
      text:
        "Batch normalization is not a universal solution to every training problem. Its behavior depends on batch size, architecture, data distribution, optimizer, and implementation details. It should therefore be understood as one component of neural-network design rather than a guaranteed fix."
    },

    {
      type: "heading",
      level: 2,
      text: "24. Interview Questions"
    },
    {
      type: "question",
      question: "What does BatchNorm do?",
      answer:
        "It normalizes intermediate activations using statistics derived from a mini-batch and then applies learned scale and shift parameters."
    },

    {
      type: "question",
      question: "What are γ and β?",
      answer:
        "γ is the learnable scale parameter and β is the learnable shift parameter."
    },

    {
      type: "question",
      question: "Why is epsilon added?",
      answer:
        "It improves numerical stability by preventing division by zero or an extremely small denominator."
    },

    {
      type: "question",
      question: "Why does BatchNorm behave differently during inference?",
      answer:
        "During inference there is no training mini-batch whose statistics should determine the output, so running statistics accumulated during training are used."
    },

    {
      type: "heading",
      level: 2,
      text: "25. Coding Exercises"
    },
    {
      type: "list",
      items: [
        "Implement BatchNorm mathematically using tensors.",
        "Compare the output before and after normalization.",
        "Build a CNN using BatchNorm2d.",
        "Train the same CNN with and without BatchNorm.",
        "Compare convergence behavior.",
        "Experiment with different batch sizes.",
        "Inspect BatchNorm weights and biases."
      ]
    },

    {
      type: "heading",
      level: 2,
      text: "26. Practical Challenge"
    },
    {
      type: "paragraph",
      text:
        "Create two identical CNNs. The first should contain convolution and ReLU layers only. The second should contain convolution, BatchNorm, and ReLU. Train both under the same experimental conditions and record training loss, validation loss, and validation accuracy."
    },

    {
      type: "heading",
      level: 2,
      text: "27. Lesson Summary"
    },
    {
      type: "list",
      items: [
        "BatchNorm normalizes intermediate activations.",
        "Mean and variance are computed from training mini-batches.",
        "A small epsilon improves numerical stability.",
        "Learnable scale and shift parameters restore useful flexibility.",
        "BatchNorm2d is commonly used with convolutional feature maps.",
        "Training and evaluation modes behave differently.",
        "Running statistics are used during inference.",
        "Batch size can influence BatchNorm behavior."
      ]
    },

    {
      type: "keyTakeaway",
      text:
        "Batch normalization is a learned normalization layer that combines batch statistics with trainable scale and shift parameters, making it an important tool for designing and training deep CNNs."
    }
  ]
};

export default lesson12;