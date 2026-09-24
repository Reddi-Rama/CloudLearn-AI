export default {
  title: "Module 2 Project — Train, Save, Restore, and Accelerate an MLP",
  duration: "3–5 hours",
  level: "Intermediate",

  sections: [
    {
      type: "heading",
      title: "Project Overview"
    },

    {
      type: "paragraph",
      text:
        "Build a complete neural-network training workflow that demonstrates the engineering skills learned throughout Module 2. You will construct an MLP, initialize its parameters, train it, evaluate it, save checkpoints, restore the best model, and execute the workflow on an available accelerator."
    },

    {
      type: "paragraph",
      text:
        "The project is intentionally focused on the practical transition from experimenting with neural-network components to managing an actual training workflow."
    },

    {
      type: "heading",
      title: "Project Goal"
    },

    {
      type: "paragraph",
      text:
        "Create a reusable classification system with the following lifecycle: data → model → initialization → training → validation → checkpoint → restoration → inference."
    },

    {
      type: "heading",
      title: "Required Features"
    },

    {
      type: "list",
      items: [
        "Use PyTorch.",
        "Create the model using nn.Module.",
        "Include at least two trainable layers.",
        "Use a nonlinear activation function.",
        "Initialize model parameters explicitly.",
        "Use a loss function and optimizer.",
        "Train using minibatches.",
        "Calculate training and validation metrics.",
        "Automatically select CPU or CUDA when available.",
        "Save model parameters.",
        "Save at least one training checkpoint.",
        "Restore the best checkpoint.",
        "Run inference using the restored model."
      ]
    },

    {
      type: "heading",
      title: "Recommended Architecture"
    },

    {
      type: "code",
      language: "python",
      code:
`class Classifier(nn.Module):
    def __init__(self, input_size, hidden_size, num_classes):
        super().__init__()

        self.network = nn.Sequential(
            nn.Linear(input_size, hidden_size),
            nn.ReLU(),
            nn.Linear(hidden_size, num_classes)
        )

    def forward(self, x):
        return self.network(x)`
    },

    {
      type: "heading",
      title: "Device Selection"
    },

    {
      type: "code",
      language: "python",
      code:
`device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

model = Classifier(
    input_size=20,
    hidden_size=128,
    num_classes=10
).to(device)

print("Training device:", device)`
    },

    {
      type: "heading",
      title: "Initialization Requirement"
    },

    {
      type: "paragraph",
      text:
        "Implement an explicit initialization function. Apply it to the model before training and inspect the resulting parameter statistics."
    },

    {
      type: "code",
      language: "python",
      code:
`def initialize_weights(module):
    if isinstance(module, nn.Linear):
        nn.init.xavier_uniform_(module.weight)

        if module.bias is not None:
            nn.init.zeros_(module.bias)

model.apply(initialize_weights)`
    },

    {
      type: "heading",
      title: "Training Requirements"
    },

    {
      type: "list",
      items: [
        "Use a DataLoader.",
        "Move every input batch to the selected device.",
        "Move labels to the selected device.",
        "Clear gradients before each optimization step.",
        "Perform forward propagation.",
        "Calculate the loss.",
        "Run backpropagation.",
        "Update parameters.",
        "Track loss and accuracy."
      ]
    },

    {
      type: "heading",
      title: "Checkpoint Design"
    },

    {
      type: "paragraph",
      text:
        "Whenever validation performance improves, save a checkpoint containing enough information to reproduce or continue the experiment."
    },

    {
      type: "code",
      language: "python",
      code:
`checkpoint = {
    "epoch": epoch,
    "model_state": model.state_dict(),
    "optimizer_state": optimizer.state_dict(),
    "validation_accuracy": validation_accuracy
}

torch.save(
    checkpoint,
    "best_checkpoint.pt"
)`
    },

    {
      type: "heading",
      title: "Restoring the Best Model"
    },

    {
      type: "code",
      language: "python",
      code:
`checkpoint = torch.load(
    "best_checkpoint.pt",
    map_location=device
)

model.load_state_dict(
    checkpoint["model_state"]
)

optimizer.load_state_dict(
    checkpoint["optimizer_state"]
)

model.eval()`
    },

    {
      type: "heading",
      title: "Inference"
    },

    {
      type: "code",
      language: "python",
      code:
`with torch.no_grad():
    predictions = model(test_inputs)

predicted_classes = predictions.argmax(
    dim=1
)

print(predicted_classes)`
    },

    {
      type: "heading",
      title: "Project Structure"
    },

    {
      type: "code",
      language: "text",
      code:
`module2-project/
│
├── data/
│
├── checkpoints/
│   └── best_checkpoint.pt
│
├── train.py
├── model.py
├── evaluate.py
├── inference.py
├── requirements.txt
└── README.md`
    },

    {
      type: "heading",
      title: "Required README Sections"
    },

    {
      type: "list",
      items: [
        "Project objective",
        "Dataset description",
        "Model architecture",
        "Parameter initialization strategy",
        "Training configuration",
        "Device used",
        "Checkpoint strategy",
        "Evaluation results",
        "How to restore the model",
        "How to run inference",
        "Problems encountered and solutions"
      ]
    },

    {
      type: "heading",
      title: "Engineering Requirements"
    },

    {
      type: "list",
      items: [
        "Do not hard-code CUDA as the only available device.",
        "Keep model definition separate from training code.",
        "Keep checkpoint files outside the source-code files.",
        "Validate tensor shapes during development.",
        "Record important hyperparameters.",
        "Use evaluation mode during inference.",
        "Use no_grad during inference when gradients are unnecessary.",
        "Make the training script reproducible where practical.",
        "Handle the case where no GPU is available."
      ]
    },

    {
      type: "heading",
      title: "Debugging Requirements"
    },

    {
      type: "paragraph",
      text:
        "Intentionally introduce and then diagnose at least two problems. Examples include a device mismatch, incorrect tensor shape, incompatible checkpoint architecture, or failure to restore optimizer state."
    },

    {
      type: "heading",
      title: "Final Demonstration"
    },

    {
      type: "list",
      items: [
        "Show the model architecture.",
        "Show parameter names and shapes.",
        "Show the selected device.",
        "Show training progress.",
        "Show validation performance.",
        "Show that a checkpoint was created.",
        "Create a new model instance.",
        "Restore the checkpoint.",
        "Run inference with the restored model.",
        "Demonstrate that the restored model produces valid predictions."
      ]
    },

    {
      type: "heading",
      title: "Extension Challenges"
    },

    {
      type: "list",
      items: [
        "Add learning-rate scheduling.",
        "Add early stopping.",
        "Track the best validation loss as well as accuracy.",
        "Save multiple checkpoints.",
        "Add a custom layer from Lesson 14.",
        "Compare CPU and GPU execution time when both are available.",
        "Add command-line arguments for batch size, learning rate, and number of epochs.",
        "Create a small experiment log recording model configuration and results."
      ]
    },

    {
      type: "heading",
      title: "Assessment Criteria"
    },

    {
      type: "table",
      headers: [
        "Area",
        "What is evaluated"
      ],
      rows: [
        [
          "Model Design",
          "Correct nn.Module architecture and forward pass"
        ],
        [
          "Initialization",
          "Appropriate explicit parameter initialization"
        ],
        [
          "Training",
          "Correct forward, loss, backward, and optimizer workflow"
        ],
        [
          "Evaluation",
          "Correct validation and inference behavior"
        ],
        [
          "File I/O",
          "Correct saving and restoration of parameters/checkpoints"
        ],
        [
          "Device Management",
          "Correct CPU/CUDA handling"
        ],
        [
          "Code Quality",
          "Separation of model, training, evaluation, and inference"
        ],
        [
          "Debugging",
          "Ability to diagnose implementation problems"
        ]
      ]
    },

    {
      type: "heading",
      title: "Final Challenge"
    },

    {
      type: "paragraph",
      text:
        "After completing the basic project, modify the architecture without changing the training pipeline. Your goal is to demonstrate that a well-designed training system can work with different compatible model architectures."
    },

    {
      type: "keyTakeaway",
      title: "Project Outcome",
      text:
        "This project brings together the core engineering ideas of Module 2: neural-network construction, parameter initialization, reusable modules, custom components, model persistence, checkpointing, device management, and accelerated computation."
    }
  ]
};