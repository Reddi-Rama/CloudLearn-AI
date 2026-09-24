export default {
  title: "GPUs and Accelerated Training",
  duration: "50 min",
  level: "Intermediate",

  sections: [
    {
      type: "heading",
      title: "Introduction"
    },

    {
      type: "paragraph",
      text:
        "Deep learning models perform large numbers of numerical operations. As models and datasets grow, computation can become expensive. Graphics Processing Units, or GPUs, provide highly parallel hardware that can accelerate many tensor operations used by neural networks."
    },

    {
      type: "paragraph",
      text:
        "The important idea is not simply that a GPU is faster. A deep learning program must place tensors and model parameters on the appropriate computing device so that the operations occur where the data resides."
    },

    {
      type: "heading",
      title: "Computing Devices"
    },

    {
      type: "paragraph",
      text:
        "A tensor has an associated device. In PyTorch, CPU tensors normally live on the CPU, while CUDA tensors can live on a supported NVIDIA GPU."
    },

    {
      type: "code",
      language: "python",
      code:
`import torch

x = torch.tensor([1, 2, 3])

print(x.device)`
    },

    {
      type: "output",
      title: "Typical Output",
      content: "cpu"
    },

    {
      type: "heading",
      title: "Checking CUDA Availability"
    },

    {
      type: "code",
      language: "python",
      code:
`import torch

print(torch.cuda.is_available())`
    },

    {
      type: "paragraph",
      text:
        "The result depends on the installed hardware, drivers, CUDA-compatible PyTorch installation, and runtime environment."
    },

    {
      type: "heading",
      title: "Selecting a Device"
    },

    {
      type: "code",
      language: "python",
      code:
`device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

print(device)`
    },

    {
      type: "heading",
      title: "Moving Tensors to a GPU"
    },

    {
      type: "code",
      language: "python",
      code:
`x = torch.randn(1000, 1000)

if torch.cuda.is_available():
    x = x.to("cuda")

print(x.device)`
    },

    {
      type: "paragraph",
      text:
        "The .to() operation creates or transfers a tensor representation on the requested device. The exact behavior and memory movement depend on the source and destination devices."
    },

    {
      type: "heading",
      title: "Why Device Consistency Matters"
    },

    {
      type: "paragraph",
      text:
        "Operations generally require compatible devices. A tensor on the CPU cannot simply be combined with another tensor stored on a GPU as if they occupied the same memory space."
    },

    {
      type: "code",
      language: "python",
      code:
`cpu_tensor = torch.randn(3, 3)

if torch.cuda.is_available():
    gpu_tensor = torch.randn(3, 3, device="cuda")

    # These tensors are on different devices.
    # Move them to a common device before combining them.`
    },

    {
      type: "heading",
      title: "Creating Tensors Directly on a Device"
    },

    {
      type: "code",
      language: "python",
      code:
`device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

x = torch.randn(
    1024,
    1024,
    device=device
)

print(x.device)`
    },

    {
      type: "heading",
      title: "Moving a Neural Network"
    },

    {
      type: "paragraph",
      text:
        "It is not enough to move only the input tensors. The model parameters must also be placed on the same device."
    },

    {
      type: "code",
      language: "python",
      code:
`from torch import nn

device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

model = nn.Sequential(
    nn.Linear(20, 128),
    nn.ReLU(),
    nn.Linear(128, 10)
)

model = model.to(device)`
    },

    {
      type: "heading",
      title: "Moving the Input"
    },

    {
      type: "code",
      language: "python",
      code:
`x = torch.randn(32, 20)

x = x.to(device)

output = model(x)

print(output.device)`
    },

    {
      type: "keyTakeaway",
      title: "Model and Data Must Agree",
      text:
        "For a normal neural-network computation, the model parameters and input tensors need to be placed on compatible devices."
    },

    {
      type: "heading",
      title: "A Complete Device-Aware Training Step"
    },

    {
      type: "code",
      language: "python",
      code:
`import torch
from torch import nn

device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

model = nn.Sequential(
    nn.Linear(20, 64),
    nn.ReLU(),
    nn.Linear(64, 10)
).to(device)

x = torch.randn(32, 20).to(device)
y = torch.randint(0, 10, (32,)).to(device)

criterion = nn.CrossEntropyLoss()

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01
)

optimizer.zero_grad()

predictions = model(x)

loss = criterion(predictions, y)

loss.backward()

optimizer.step()

print("Device:", x.device)
print("Loss:", loss.item())`
    },

    {
      type: "heading",
      title: "CPU and GPU Roles"
    },

    {
      type: "paragraph",
      text:
        "The CPU is a general-purpose processor suited to operating-system tasks, control flow, data loading, preprocessing, and many forms of computation. GPUs contain many parallel computational units designed to process large collections of numerical operations efficiently."
    },

    {
      type: "heading",
      title: "Parallelism in Deep Learning"
    },

    {
      type: "paragraph",
      text:
        "Neural networks frequently perform operations over batches of examples. Matrix multiplication, convolution, and other tensor operations contain substantial parallel structure, which makes them suitable for accelerator hardware."
    },

    {
      type: "heading",
      title: "GPU Memory"
    },

    {
      type: "paragraph",
      text:
        "GPU memory is separate from ordinary system memory. Large models and datasets therefore require careful memory management. A model may fit in system RAM but still fail to fit in available GPU memory."
    },

    {
      type: "list",
      items: [
        "Reduce batch size when GPU memory is insufficient.",
        "Avoid unnecessarily duplicating large tensors.",
        "Move only required data to the accelerator.",
        "Release references to tensors that are no longer needed.",
        "Use appropriate numerical precision when supported by the workload.",
        "Monitor GPU memory during large experiments."
      ]
    },

    {
      type: "heading",
      title: "Device-Aware Model Saving"
    },

    {
      type: "paragraph",
      text:
        "A model trained on an accelerator may later need to be restored on a CPU-only environment. Loading can therefore require explicit device mapping."
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
      title: "Benchmarking CPU and GPU"
    },

    {
      type: "paragraph",
      text:
        "Performance should be measured rather than assumed. The benefit of a GPU depends on the model, tensor sizes, batch sizes, memory transfers, and hardware."
    },

    {
      type: "code",
      language: "python",
      code:
`import time
import torch

device = torch.device(
    "cuda" if torch.cuda.is_available()
    else "cpu"
)

x = torch.randn(
    4000,
    4000,
    device=device
)

start = time.perf_counter()

for _ in range(20):
    y = x @ x

if device.type == "cuda":
    torch.cuda.synchronize()

elapsed = time.perf_counter() - start

print("Device:", device)
print("Time:", elapsed)`
    },

    {
      type: "paragraph",
      text:
        "GPU operations can execute asynchronously from the CPU's perspective. Synchronization is therefore important when timing GPU workloads so that the measured interval represents completed GPU computation."
    },

    {
      type: "heading",
      title: "Common GPU Errors"
    },

    {
      type: "list",
      items: [
        "Input tensor is on CPU while model parameters are on GPU.",
        "Model parameters are on CPU while input is on GPU.",
        "GPU memory is exhausted.",
        "CUDA is unavailable even though the code requests CUDA.",
        "A checkpoint was created on one device and restored without appropriate device mapping.",
        "Benchmarking GPU computation without considering asynchronous execution."
      ]
    },

    {
      type: "heading",
      title: "Practical GPU Workflow"
    },

    {
      type: "process",
      steps: [
        "Check whether the desired accelerator is available.",
        "Select a device.",
        "Create or move the model to the device.",
        "Move input batches to the same device.",
        "Run forward propagation.",
        "Compute the loss.",
        "Run backward propagation.",
        "Update parameters.",
        "Monitor memory and runtime.",
        "Save checkpoints when appropriate."
      ]
    },

    {
      type: "heading",
      title: "Exercises"
    },

    {
      type: "list",
      items: [
        "Check whether CUDA is available on your machine.",
        "Print the device of a tensor.",
        "Create a tensor directly on CUDA when available.",
        "Move an MLP to the selected device.",
        "Move a minibatch to the same device.",
        "Train a small model using a device-aware training loop.",
        "Measure the execution time of a large matrix multiplication.",
        "Explain why CPU and GPU tensors cannot normally be mixed in the same operation.",
        "Explain why GPU timing may require synchronization."
      ]
    },

    {
      type: "heading",
      title: "Coding Task"
    },

    {
      type: "paragraph",
      text:
        "Create a device-aware image classifier training script. The script should automatically choose an available GPU or fall back to the CPU, move the model and minibatches correctly, train the network, and report the selected device and training time."
    },

    {
      type: "heading",
      title: "Summary"
    },

    {
      type: "list",
      items: [
        "Tensors have an associated computing device.",
        "PyTorch can use CPU and supported CUDA GPUs.",
        "Models and input tensors must be placed on compatible devices.",
        "GPU acceleration is especially useful for highly parallel tensor computations.",
        "GPU memory is a separate resource that must be managed.",
        "Performance should be measured for the actual workload.",
        "Device-aware loading is important when restoring saved models."
      ]
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "Accelerated deep learning requires more than selecting a GPU. You must understand devices, move models and tensors correctly, manage memory, and measure performance carefully."
    }
  ]
};