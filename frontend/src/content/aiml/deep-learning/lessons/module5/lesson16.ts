const lesson16 = {
  id: "lesson16",
  title: "GPU Computing",
  description:
    "Learn how GPU computation works in deep learning, how tensors are placed on devices, how GPU execution is synchronized, and how computation and communication can overlap.",
  duration: "115–135 min",
  difficulty: "Advanced",

  prerequisites: [
    "CUDA basics",
    "PyTorch tensors",
    "Automatic parallelism",
    "Deep-learning hardware",
    "Matrix multiplication"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to GPU Computing",
      content: `
GPUs are central to modern deep learning because neural networks contain large amounts of parallel numerical computation.

Typical GPU workloads include:

• Matrix multiplication
• Convolution
• Tensor reduction
• Attention
• Elementwise operations
• Gradient computation
`
    },

    {
      type: "concept",
      title: "1. CPU vs GPU",
      content: `
A CPU generally emphasizes:

• General-purpose computation
• Complex control flow
• Low-latency individual operations

A GPU emphasizes:

• Massive parallelism
• High-throughput numerical computation
• Large batches of similar operations
`
    },

    {
      type: "concept",
      title: "2. Device Placement",
      content: `
A tensor exists on a particular device.

Common devices are:

CPU

cuda:0

cuda:1

and so on.
`
    },

    {
      type: "code",
      language: "python",
      title: "Checking CUDA",
      content: `
import torch

print(
    torch.cuda.is_available()
)

if torch.cuda.is_available():
    print(
        torch.cuda.device_count()
    )
`
    },

    {
      type: "concept",
      title: "3. Moving a Tensor to a GPU",
      content: `
A tensor can be transferred to a CUDA device.

Example:

x = x.to("cuda")
`
    },

    {
      type: "code",
      language: "python",
      title: "Tensor Device Placement",
      content: `
x = torch.randn(
    1000,
    1000
)

x_gpu = x.to(
    "cuda"
)

print(
    x_gpu.device
)
`
    },

    {
      type: "concept",
      title: "4. Operations Require Compatible Devices",
      content: `
Tensor operations generally require operands to be on compatible devices.

For example:

CPU tensor
+
GPU tensor

is not normally a valid direct operation.

Move tensors to the appropriate device first.
`
    },

    {
      type: "code",
      language: "python",
      title: "Device-Compatible Addition",
      content: `
x = torch.randn(
    1000,
    1000,
    device="cuda"
)

y = torch.randn(
    1000,
    1000,
    device="cuda"
)

z = x + y
`
    },

    {
      type: "concept",
      title: "5. GPU Memory",
      content: `
When a tensor is moved to a GPU, its data is stored in GPU memory.

GPU memory is limited.

Large models may consume memory through:

• Parameters
• Activations
• Gradients
• Optimizer states
• Input batches
`
    },

    {
      type: "concept",
      title: "6. GPU Memory Monitoring",
      content: `
PyTorch provides CUDA memory utilities.

Example:

torch.cuda.memory_allocated()

and:

torch.cuda.memory_reserved()

These help diagnose memory behavior.
`
    },

    {
      type: "code",
      language: "python",
      title: "Inspect GPU Memory",
      content: `
print(
    "Allocated:",
    torch.cuda.memory_allocated()
)

print(
    "Reserved:",
    torch.cuda.memory_reserved()
)
`
    },

    {
      type: "concept",
      title: "7. GPU Kernel",
      content: `
A GPU kernel is a function executed by the GPU's parallel processing units.

High-level tensor operations are translated into low-level kernels.
`
    },

    {
      type: "concept",
      title: "8. Kernel Launch Overhead",
      content: `
Launching many tiny kernels can introduce overhead.

Therefore:

many tiny operations

may be less efficient than:

fewer larger operations.

This is one reason batching and operation fusion matter.
`
    },

    {
      type: "concept",
      title: "9. Matrix Multiplication",
      content: `
Matrix multiplication is one of the most important GPU workloads.

For:

C = AB

each output element can be computed using a dot product.

Many output elements can be computed independently.
`
    },

    {
      type: "code",
      language: "python",
      title: "GPU Matrix Multiplication",
      content: `
x = torch.randn(
    4000,
    4000,
    device="cuda"
)

y = x @ x
`
    },

    {
      type: "concept",
      title: "10. GPU Warmup",
      content: `
The first GPU operation may include initialization overhead.

Therefore benchmarks often perform warmup operations before measuring performance.
`
    },

    {
      type: "concept",
      title: "11. GPU Synchronization",
      content: `
GPU operations may be asynchronous from the host's perspective.

To wait for GPU work:

torch.cuda.synchronize()
`
    },

    {
      type: "code",
      language: "python",
      title: "Synchronizing GPU Work",
      content: `
y = x @ x

torch.cuda.synchronize()

print(
    "GPU operation completed"
)
`
    },

    {
      type: "concept",
      title: "12. Accurate GPU Timing",
      content: `
For accurate timing:

1. Warm up.
2. Synchronize.
3. Start timer.
4. Run operation.
5. Synchronize.
6. Stop timer.

Otherwise asynchronous execution can produce misleading measurements.
`
    },

    {
      type: "code",
      language: "python",
      title: "GPU Timing",
      content: `
import time

torch.cuda.synchronize()

start = time.perf_counter()

y = x @ x

torch.cuda.synchronize()

elapsed = (
    time.perf_counter()
    - start
)

print(
    elapsed
)
`
    },

    {
      type: "concept",
      title: "13. GPU Streams",
      content: `
A CUDA stream represents an ordered sequence of GPU work.

Operations in a stream respect ordering constraints.

Multiple streams can provide opportunities for overlap when the operations are independent.
`
    },

    {
      type: "concept",
      title: "14. CPU-GPU Communication",
      content: `
Moving data between CPU memory and GPU memory costs time.

Therefore excessive transfers can reduce performance.

A good training loop generally keeps frequently used tensors on the appropriate accelerator.
`
    },

    {
      type: "concept",
      title: "15. Data Transfer Bottleneck",
      content: `
Suppose:

GPU computation = 5 ms

CPU-GPU transfer = 20 ms

Then faster GPU computation alone does not solve the main bottleneck.

The transfer dominates.
`
    },

    {
      type: "concept",
      title: "16. Non-Blocking Transfers",
      content: `
When supported by the memory and execution setup, non-blocking transfers can allow communication to overlap with computation.

Example:

tensor.to(
    "cuda",
    non_blocking=True
)
`
    },

    {
      type: "concept",
      title: "17. Pinned Memory",
      content: `
Pinned or page-locked host memory can improve certain CPU-to-GPU transfer workflows.

It allows the system to perform transfers more efficiently and is often used with optimized data-loading pipelines.
`
    },

    {
      type: "code",
      language: "python",
      title: "Pinned Data Loader",
      content: `
loader = torch.utils.data.DataLoader(
    dataset,
    batch_size=64,
    pin_memory=True
)
`
    },

    {
      type: "concept",
      title: "18. GPU Utilization",
      content: `
A GPU utilization metric indicates whether the GPU is actively processing workloads.

Low utilization may indicate:

• Slow data loading
• CPU bottleneck
• Communication bottleneck
• Synchronization
• Small operations
`
    },

    {
      type: "concept",
      title: "19. Batch Size",
      content: `
Increasing batch size can improve GPU utilization by providing more parallel work.

However, larger batches also increase:

• GPU memory consumption
• Data-transfer requirements
• Possibly optimization behavior
`
    },

    {
      type: "concept",
      title: "20. Mixed Precision",
      content: `
Modern GPUs can accelerate lower-precision arithmetic.

Mixed precision often combines:

lower precision

for suitable operations

with:

higher precision

where numerical stability requires it.
`
    },

    {
      type: "code",
      language: "python",
      title: "Automatic Mixed Precision",
      content: `
scaler = torch.amp.GradScaler(
    "cuda"
)

for X, y in loader:

    optimizer.zero_grad()

    with torch.autocast(
        device_type="cuda"
    ):
        output = model(X)
        loss = criterion(
            output,
            y
        )

    scaler.scale(
        loss
    ).backward()

    scaler.step(
        optimizer
    )

    scaler.update()
`
    },

    {
      type: "concept",
      title: "21. GPU Memory Fragmentation",
      content: `
Many temporary allocations can make memory management complicated.

Memory-management behavior depends on the framework allocator.

Monitoring allocated and reserved memory helps diagnose unexpected memory usage.
`
    },

    {
      type: "concept",
      title: "22. Out-of-Memory Errors",
      content: `
Common causes:

• Batch too large
• Model too large
• Too many stored activations
• Optimizer states
• Unreleased tensors
• Excessive intermediate results
`
    },

    {
      type: "concept",
      title: "23. GPU Debugging Checklist",
      content: `
When GPU code fails:

1. Check CUDA availability.
2. Check tensor devices.
3. Check GPU memory.
4. Check tensor shapes.
5. Check dtype compatibility.
6. Check synchronization when benchmarking.
7. Check data-transfer frequency.
`
    },

    {
      type: "exercise",
      title: "CPU vs GPU Experiment",
      content: `
Benchmark the same matrix multiplication on:

CPU

and:

GPU.

Use sufficiently large matrices.

Explain why the difference changes with matrix size.
`
    },

    {
      type: "exercise",
      title: "GPU Memory Experiment",
      content: `
Create tensors of increasing size on a GPU.

Record:

• Tensor size
• Memory allocated
• Operation time

Determine approximately when memory becomes the limiting factor.
`
    },

    {
      type: "qa",
      question: "Why are GPUs useful for matrix multiplication?",
      answer:
        "Matrix multiplication contains many independent arithmetic operations that can be executed concurrently."
    },

    {
      type: "qa",
      question: "Why synchronize before GPU timing?",
      answer:
        "GPU operations can execute asynchronously, so synchronization ensures that previous work has completed before timing begins."
    },

    {
      type: "qa",
      question: "What causes GPU underutilization?",
      answer:
        "Slow data loading, transfers, synchronization, small workloads, CPU bottlenecks, and other pipeline limitations can prevent the GPU from staying busy."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
GPU computing requires understanding both computation and data movement.

Important topics:

• CUDA devices
• Device placement
• GPU memory
• Kernels
• Matrix multiplication
• Synchronization
• Streams
• CPU-GPU transfers
• Pinned memory
• Non-blocking transfers
• GPU utilization
• Batch size
• Mixed precision
• Memory debugging
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Efficient GPU computing requires keeping the accelerator supplied with sufficiently large workloads while minimizing unnecessary synchronization and data transfers."
    }
  ]
};

export default lesson16;