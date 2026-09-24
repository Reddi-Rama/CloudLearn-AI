export default {
  title: "Module 2 Practice",
  description:
    "Practice tasks covering neural-network construction, parameter management, custom layers, model persistence, and GPU-aware computation.",

  sections: [
    {
      type: "heading",
      title: "Practice Overview"
    },

    {
      type: "paragraph",
      text:
        "This practice set combines the major implementation skills developed throughout Module 2. The goal is to move from understanding individual neural-network components to building, inspecting, saving, restoring, and executing complete models."
    },

    {
      type: "heading",
      title: "Part 1 — Neural Network Construction"
    },

    {
      type: "list",
      items: [
        "Create a three-layer MLP for ten-class classification.",
        "Print every parameter name and shape.",
        "Calculate the total number of trainable parameters.",
        "Replace ReLU with another activation function and compare the architecture.",
        "Create the same architecture using both Sequential and a custom nn.Module."
      ]
    },

    {
      type: "heading",
      title: "Part 2 — Parameter Initialization"
    },

    {
      type: "list",
      items: [
        "Initialize linear-layer weights using Xavier initialization.",
        "Initialize a ReLU-based network using an activation-appropriate initialization.",
        "Print parameter statistics before and after initialization.",
        "Compare the average and standard deviation of initialized weights.",
        "Explain why initializing every parameter to zero is problematic for a multilayer network."
      ]
    },

    {
      type: "heading",
      title: "Part 3 — Custom Layers"
    },

    {
      type: "list",
      items: [
        "Implement a parameter-free layer that centers each feature.",
        "Implement a custom scaling layer with a learnable parameter.",
        "Combine a custom layer with Linear and ReLU modules.",
        "Inspect the custom layer's registered parameters.",
        "Test the layer with several different batch sizes."
      ]
    },

    {
      type: "heading",
      title: "Part 4 — File I/O"
    },

    {
      type: "list",
      items: [
        "Save a tensor to disk and load it again.",
        "Save a dictionary containing multiple tensors.",
        "Save an MLP state_dict.",
        "Recreate the architecture and restore its parameters.",
        "Verify that the original and restored models produce matching outputs.",
        "Create a checkpoint containing model and optimizer state.",
        "Restore the checkpoint and continue training."
      ]
    },

    {
      type: "heading",
      title: "Part 5 — Device Management"
    },

    {
      type: "list",
      items: [
        "Detect CUDA availability.",
        "Create a device variable with CPU fallback.",
        "Move a model to the selected device.",
        "Move training data to the same device.",
        "Print the device of model parameters and input tensors.",
        "Measure the runtime of a tensor operation.",
        "Investigate the behavior when GPU memory becomes a limitation."
      ]
    },

    {
      type: "heading",
      title: "Debugging Challenge"
    },

    {
      type: "code",
      language: "python",
      code:
`device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

model = model.to(device)

x = torch.randn(32, 20)

output = model(x)`
    },

    {
      type: "question",
      question: "What problem can occur here?",
      answer:
        "The model may be on the selected device while x remains on the CPU. The input should be moved to the same device before the forward pass."
    },

    {
      type: "code",
      language: "python",
      code:
`x = x.to(device)

output = model(x)`
    },

    {
      type: "heading",
      title: "Integrated Practice"
    },

    {
      type: "paragraph",
      text:
        "Build an MLP classifier from scratch using nn.Module. Initialize its parameters, train it on a small classification dataset, save the best model parameters, restore them into a new instance, and run the restored model on the selected computing device."
    },

    {
      type: "heading",
      title: "Reflection Questions"
    },

    {
      type: "list",
      items: [
        "Why should model architecture and parameter values be treated as separate concepts?",
        "Why is parameter initialization part of successful neural-network design?",
        "What advantages do custom layers provide?",
        "When should a training checkpoint be created?",
        "Why must model parameters and input tensors use compatible devices?",
        "Why can moving data repeatedly between CPU and GPU reduce performance?",
        "Why should GPU performance be measured instead of assumed?"
      ]
    },

    {
      type: "keyTakeaway",
      title: "Practice Goal",
      text:
        "By the end of this practice set, you should be comfortable constructing neural networks, managing their parameters, creating custom components, persisting learned state, and running models in a device-aware manner."
    }
  ]
};