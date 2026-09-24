export default {
  title: "File I/O for Models",
  duration: "45 min",
  level: "Intermediate",

  sections: [
    {
      type: "heading",
      title: "Introduction"
    },
    {
      type: "paragraph",
      text:
        "Training a neural network can take significant computation and time. Once a model has learned useful parameters, we need a reliable way to store those parameters and restore them later. File I/O makes it possible to save tensors, model parameters, checkpoints, and other information required to continue or reuse training."
    },

    {
      type: "paragraph",
      text:
        "In this lesson, we focus on the PyTorch approach to saving and loading tensors and model parameters. An important distinction is that saving a model's parameters is different from saving the complete Python architecture that created the model."
    },

    {
      type: "heading",
      title: "Why Model Persistence Matters"
    },
    {
      type: "paragraph",
      text:
        "Imagine training a neural network for several hours. If the learned parameters disappear when the program ends, the entire training process may have to be repeated. Saving parameters allows the learned state to survive beyond the current program execution."
    },

    {
      type: "list",
      items: [
        "Resume training after interruption.",
        "Reuse a trained model for inference.",
        "Transfer learned parameters between experiments.",
        "Compare different versions of a model.",
        "Create checkpoints during long training runs.",
        "Prepare trained parameters for deployment."
      ]
    },

    {
      type: "heading",
      title: "Saving Individual Tensors"
    },
    {
      type: "paragraph",
      text:
        "PyTorch provides torch.save for writing Python objects such as tensors to disk. A tensor can later be reconstructed using torch.load."
    },

    {
      type: "code",
      language: "python",
      code:
`import torch

x = torch.arange(4)

torch.save(x, "tensor.pt")

loaded_x = torch.load("tensor.pt")

print(loaded_x)`
    },

    {
      type: "output",
      title: "Expected Output",
      content:
`tensor([0, 1, 2, 3])`
    },

    {
      type: "heading",
      title: "Saving Multiple Tensors"
    },
    {
      type: "paragraph",
      text:
        "A collection of tensors can also be stored together. Lists and dictionaries are especially useful when several related tensors must be persisted."
    },

    {
      type: "code",
      language: "python",
      code:
`x = torch.arange(4)
y = torch.zeros(4)

torch.save([x, y], "tensors.pt")

x_loaded, y_loaded = torch.load("tensors.pt")

print(x_loaded)
print(y_loaded)`
    },

    {
      type: "heading",
      title: "Using a Dictionary"
    },
    {
      type: "paragraph",
      text:
        "A dictionary provides names for stored tensors. This becomes particularly useful when storing logically related values such as model parameters or experiment information."
    },

    {
      type: "code",
      language: "python",
      code:
`data = {
    "features": torch.arange(5),
    "weights": torch.ones(5),
}

torch.save(data, "data.pt")

loaded = torch.load("data.pt")

print(loaded["features"])
print(loaded["weights"])`
    },

    {
      type: "heading",
      title: "Model State"
    },
    {
      type: "paragraph",
      text:
        "For neural networks, the important information is generally contained in learnable parameters such as weights and biases. PyTorch exposes these through the model's state_dict."
    },

    {
      type: "code",
      language: "python",
      code:
`import torch
from torch import nn

model = nn.Sequential(
    nn.Linear(20, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)

for name, value in model.state_dict().items():
    print(name, value.shape)`
    },

    {
      type: "heading",
      title: "Saving Model Parameters"
    },
    {
      type: "paragraph",
      text:
        "The state_dict can be saved to a file. This stores the learned parameter values associated with the model."
    },

    {
      type: "code",
      language: "python",
      code:
`torch.save(model.state_dict(), "model.params")`
    },

    {
      type: "heading",
      title: "Loading Model Parameters"
    },
    {
      type: "paragraph",
      text:
        "To restore the parameters, recreate the model architecture and load the saved state dictionary."
    },

    {
      type: "code",
      language: "python",
      code:
`model = nn.Sequential(
    nn.Linear(20, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)

state = torch.load("model.params")

model.load_state_dict(state)

model.eval()`
    },

    {
      type: "keyTakeaway",
      title: "Architecture and Parameters Are Different",
      text:
        "A saved state dictionary contains parameter values, but the model architecture still needs to be recreated in code before those parameters can be loaded."
    },

    {
      type: "heading",
      title: "Verifying a Restored Model"
    },
    {
      type: "paragraph",
      text:
        "A useful test is to compare the output of the original and restored models on the same input. If the architecture and parameters were restored correctly, their predictions should agree."
    },

    {
      type: "code",
      language: "python",
      code:
`import torch

x = torch.randn(4, 20)

original_output = model(x)

torch.save(model.state_dict(), "model.params")

restored = nn.Sequential(
    nn.Linear(20, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)

restored.load_state_dict(
    torch.load("model.params")
)

restored.eval()

restored_output = restored(x)

print(torch.allclose(
    original_output,
    restored_output
))`
    },

    {
      type: "output",
      title: "Expected Output",
      content: "True"
    },

    {
      type: "heading",
      title: "Checkpointing"
    },
    {
      type: "paragraph",
      text:
        "During long training runs, it is useful to periodically save intermediate states. A checkpoint can contain model parameters, optimizer state, the current epoch, and other information needed to continue training."
    },

    {
      type: "code",
      language: "python",
      code:
`checkpoint = {
    "epoch": epoch,
    "model_state": model.state_dict(),
    "optimizer_state": optimizer.state_dict(),
}

torch.save(checkpoint, "checkpoint.pt")`
    },

    {
      type: "heading",
      title: "Restoring a Checkpoint"
    },

    {
      type: "code",
      language: "python",
      code:
`checkpoint = torch.load("checkpoint.pt")

model.load_state_dict(
    checkpoint["model_state"]
)

optimizer.load_state_dict(
    checkpoint["optimizer_state"]
)

start_epoch = checkpoint["epoch"] + 1`
    },

    {
      type: "heading",
      title: "Loading Across Devices"
    },
    {
      type: "paragraph",
      text:
        "A model may have been saved on one computing device and later loaded on another. When moving a model between CPU and GPU environments, the tensors must be mapped to the appropriate device."
    },

    {
      type: "code",
      language: "python",
      code:
`device = torch.device("cpu")

state = torch.load(
    "model.params",
    map_location=device
)

model.load_state_dict(state)

model.to(device)`
    },

    {
      type: "heading",
      title: "Common File I/O Mistakes"
    },

    {
      type: "list",
      items: [
        "Trying to load parameters into an incompatible architecture.",
        "Forgetting to recreate the model before loading its state dictionary.",
        "Saving only model parameters when optimizer state is needed to resume training.",
        "Loading GPU tensors into an environment that does not have the required device without appropriate mapping.",
        "Using a stale checkpoint without recording which experiment or configuration produced it.",
        "Forgetting to switch the restored model to evaluation mode when performing inference."
      ]
    },

    {
      type: "heading",
      title: "Practical Workflow"
    },

    {
      type: "process",
      steps: [
        "Build the model architecture.",
        "Train the model.",
        "Monitor validation performance.",
        "Save useful checkpoints.",
        "Choose the checkpoint to reuse.",
        "Recreate the model architecture.",
        "Load the saved parameters.",
        "Restore optimizer state when continuing training.",
        "Switch to evaluation mode for inference.",
        "Verify predictions before deployment."
      ]
    },

    {
      type: "heading",
      title: "Exercises"
    },

    {
      type: "list",
      items: [
        "Save a tensor and load it into a new variable.",
        "Save two tensors using a dictionary.",
        "Create an MLP and inspect its state_dict.",
        "Save the MLP parameters and restore them into an identical architecture.",
        "Compare the outputs of the original and restored models.",
        "Create a checkpoint containing model and optimizer state.",
        "Explain why the architecture must be recreated before loading a state_dict.",
        "Experiment with loading a CPU checkpoint into a different device."
      ]
    },

    {
      type: "heading",
      title: "Coding Task"
    },

    {
      type: "paragraph",
      text:
        "Build a small classifier, train it for several epochs, save a checkpoint, create a fresh model instance, restore the checkpoint, and continue training from the saved epoch."
    },

    {
      type: "heading",
      title: "Summary"
    },

    {
      type: "list",
      items: [
        "torch.save can persist tensors and other supported Python objects.",
        "torch.load reconstructs saved objects.",
        "state_dict stores model parameter state.",
        "The model architecture must be recreated before loading its parameters.",
        "Checkpoints can preserve enough training state to continue an interrupted experiment.",
        "Device-aware loading is important when moving models between CPU and GPU environments."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Model training does not have to end when a program stops. By saving tensors, parameters, and checkpoints, we can preserve learned state, restore experiments, and move trained models between environments."
    }
  ]
};