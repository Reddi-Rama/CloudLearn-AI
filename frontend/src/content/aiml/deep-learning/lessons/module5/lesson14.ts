const lesson14 = {
  id: "lesson14",
  title: "Automatic Parallelism",
  description:
    "Understand how deep-learning frameworks automatically identify independent computations and execute them in parallel across CPUs and GPUs.",
  duration: "110–130 min",
  difficulty: "Advanced",

  prerequisites: [
    "Computational graphs",
    "Asynchronous computation",
    "CPU and GPU basics",
    "Tensor operations",
    "Matrix multiplication"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to Automatic Parallelism",
      content: `
Modern deep-learning frameworks can automatically identify independent operations in a computational graph.

Instead of manually deciding which operation should run on which device, the framework can inspect dependencies and schedule compatible operations.

The central idea is:

computational graph
↓
identify dependencies
↓
find independent operations
↓
execute them concurrently
↓
synchronize only when required
`
    },

    {
      type: "concept",
      title: "1. Why Parallelism Matters",
      content: `
Deep-learning workloads are computationally expensive.

Training may involve:

• Matrix multiplication
• Convolution
• Attention
• Gradient computation
• Parameter updates
• Data movement

Executing every operation sequentially can leave available hardware underutilized.
`
    },

    {
      type: "concept",
      title: "2. Sequential Execution",
      content: `
Suppose we have:

A
↓
B
↓
C
↓
D

If every operation depends on the previous one, the operations must respect that dependency order.

There is little opportunity to execute them simultaneously.
`
    },

    {
      type: "concept",
      title: "3. Independent Operations",
      content: `
Now consider:

      A
     / \
    B   C
     \ /
      D

After A finishes, B and C are independent.

Therefore:

B and C

can potentially execute in parallel.

D must wait until both required results are available.
`
    },

    {
      type: "concept",
      title: "4. Computational Graphs",
      content: `
A computational graph represents:

• Operations
• Inputs
• Outputs
• Dependencies

This information allows a backend to determine which operations can safely overlap.
`
    },

    {
      type: "concept",
      title: "5. Framework Responsibility",
      content: `
The programmer describes the computation.

The framework can then determine:

• What depends on what
• Which operations are independent
• Which devices are available
• When synchronization is necessary
`
    },

    {
      type: "concept",
      title: "6. CPU Parallelism",
      content: `
Modern CPUs contain multiple cores and hardware mechanisms for parallel execution.

Large tensor operations can use multiple CPU cores.

However, when a single operation already uses most available CPU resources, splitting that same operation across multiple CPUs may provide limited additional benefit.
`
    },

    {
      type: "concept",
      title: "7. GPU Parallelism",
      content: `
GPUs are designed to perform large numbers of similar operations concurrently.

Matrix multiplication is a particularly important example.

Deep-learning frameworks use optimized GPU kernels for these operations.
`
    },

    {
      type: "concept",
      title: "8. Multiple GPUs",
      content: `
Automatic parallelism becomes especially important when multiple GPUs are available.

For example:

GPU 0
GPU 1
GPU 2
GPU 3

can potentially execute independent computations concurrently.
`
    },

    {
      type: "code",
      language: "python",
      title: "Detecting Available GPUs",
      content: `
import torch

device_count = torch.cuda.device_count()

print(
    "Available GPUs:",
    device_count
)
`
    },

    {
      type: "concept",
      title: "9. Parallel Matrix Operations",
      content: `
Consider two independent matrix multiplications:

A = X @ X

B = Y @ Y

If X and Y reside on different GPUs, the framework can potentially execute the two operations concurrently.
`
    },

    {
      type: "code",
      language: "python",
      title: "Two GPU Example",
      content: `
import torch

device0 = torch.device("cuda:0")
device1 = torch.device("cuda:1")

x0 = torch.randn(
    4000,
    4000,
    device=device0
)

x1 = torch.randn(
    4000,
    4000,
    device=device1
)

y0 = x0 @ x0
y1 = x1 @ x1

torch.cuda.synchronize(device0)
torch.cuda.synchronize(device1)
`
    },

    {
      type: "concept",
      title: "10. Warmup",
      content: `
Before benchmarking GPU workloads, warm up the devices.

The first execution may include:

• Kernel initialization
• Memory setup
• Runtime overhead
• Caching behavior

Therefore a warmup execution can make subsequent measurements more representative.
`
    },

    {
      type: "code",
      language: "python",
      title: "GPU Warmup",
      content: `
y0 = x0 @ x0
y1 = x1 @ x1

torch.cuda.synchronize(device0)
torch.cuda.synchronize(device1)
`
    },

    {
      type: "concept",
      title: "11. Synchronization During Benchmarking",
      content: `
GPU operations can execute asynchronously.

Therefore timing must account for device completion.

A synchronization call ensures that queued GPU work has completed before measuring the elapsed time.
`
    },

    {
      type: "code",
      language: "python",
      title: "Timing a GPU Operation",
      content: `
import time

torch.cuda.synchronize(device0)

start = time.perf_counter()

y = x0 @ x0

torch.cuda.synchronize(device0)

elapsed = (
    time.perf_counter()
    - start
)

print(
    "Elapsed:",
    elapsed
)
`
    },

    {
      type: "concept",
      title: "12. Parallel Computation and Communication",
      content: `
Parallelism is not limited to computation.

A system may simultaneously perform:

GPU computation

and:

data communication

when dependencies allow it.

This can improve overall utilization.
`
    },

    {
      type: "concept",
      title: "13. CPU-GPU Overlap",
      content: `
For example:

CPU:
prepare next batch

GPU:
train current batch

If the operations are independent, both resources can remain active instead of one waiting for the other.
`
    },

    {
      type: "concept",
      title: "14. Communication Resources",
      content: `
Deep-learning systems also contain communication resources:

• PCI Express
• GPU interconnects
• System memory buses
• Network links
• Storage interfaces

These resources can become bottlenecks.
`
    },

    {
      type: "concept",
      title: "15. Automatic Scheduling",
      content: `
A backend can inspect the dependency graph and schedule independent operations.

Conceptually:

Graph
↓
Dependency analysis
↓
Ready operations
↓
Device assignment
↓
Execution
↓
Synchronization
`
    },

    {
      type: "concept",
      title: "16. Why Manual Scheduling Is Difficult",
      content: `
Manually scheduling a complex deep-learning graph would require tracking:

• Dependencies
• Device availability
• Memory
• Communication
• Synchronization
• Execution time

As models become larger, this becomes impractical.
`
    },

    {
      type: "concept",
      title: "17. Automatic Parallelism in PyTorch",
      content: `
PyTorch uses backend execution mechanisms that can schedule GPU work asynchronously.

The programmer normally writes tensor operations rather than manually managing every kernel.
`
    },

    {
      type: "concept",
      title: "18. Streams",
      content: `
CUDA streams provide ordered sequences of GPU operations.

Operations within a stream follow ordering constraints.

Different streams can potentially overlap work when dependencies and hardware resources allow it.
`
    },

    {
      type: "code",
      language: "python",
      title: "CUDA Stream Concept",
      content: `
stream1 = torch.cuda.Stream()
stream2 = torch.cuda.Stream()

with torch.cuda.stream(stream1):
    y1 = x0 @ x0

with torch.cuda.stream(stream2):
    y2 = x1 @ x1

torch.cuda.synchronize()
`
    },

    {
      type: "concept",
      title: "19. Parallelism Is Not Always Faster",
      content: `
Parallel execution introduces overhead.

If operations are extremely small:

parallelization overhead

may be comparable to:

actual computation.

Therefore large workloads often benefit more clearly.
`
    },

    {
      type: "concept",
      title: "20. Resource Saturation",
      content: `
A single large GPU operation may already occupy most available GPU resources.

Launching another operation does not necessarily produce a proportional speedup.

This is why workload characteristics matter.
`
    },

    {
      type: "concept",
      title: "21. Automatic Parallelism and Data Dependencies",
      content: `
The framework must never violate dependencies.

For:

A → B

B cannot begin before A produces the required result.

For:

A
↓
B
and
C

B and C may execute independently after A.
`
    },

    {
      type: "concept",
      title: "22. Parallel Computation and Memory",
      content: `
Multiple operations can compete for:

• GPU memory
• Memory bandwidth
• Cache
• Compute units
• Interconnect bandwidth

Therefore scheduling must consider more than just mathematical independence.
`
    },

    {
      type: "concept",
      title: "23. Performance Bottlenecks",
      content: `
Common bottlenecks include:

• CPU preprocessing
• GPU computation
• GPU memory bandwidth
• Host-device transfer
• Network communication
• Synchronization
• Small operations
`
    },

    {
      type: "exercise",
      title: "Parallel GPU Experiment",
      content: `
If you have two GPUs:

1. Create a large matrix on GPU 0.
2. Create another large matrix on GPU 1.
3. Perform matrix multiplication on both.
4. Measure them individually.
5. Measure the combined workload.
6. Compare the timings.

Explain whether the workloads appear to overlap.
`
    },

    {
      type: "exercise",
      title: "Dependency Experiment",
      content: `
Construct:

A → B → C

and:

A → B
A → C

Measure whether the independent branches can overlap.
`
    },

    {
      type: "qa",
      question: "What does automatic parallelism mean?",
      answer:
        "It means the framework analyzes computational dependencies and executes independent operations concurrently when hardware resources allow."
    },

    {
      type: "qa",
      question: "Why are computational graphs important?",
      answer:
        "They expose dependencies between operations, allowing the backend to identify independent work."
    },

    {
      type: "qa",
      question: "Does independent work always execute simultaneously?",
      answer:
        "No. Hardware capacity, memory bandwidth, scheduling overhead, and other constraints can limit actual overlap."
    },

    {
      type: "qa",
      question: "Why synchronize when benchmarking GPUs?",
      answer:
        "Because GPU operations can be asynchronous, synchronization ensures the measured interval includes actual device completion."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Automatic parallelism uses computational graphs and backend scheduling to execute independent tasks concurrently.

Important ideas:

• Computational dependencies
• Independent operations
• CPU parallelism
• GPU parallelism
• Multiple GPUs
• CUDA streams
• Communication overlap
• Synchronization
• Benchmarking
• Resource contention

The source specifically explains that frameworks such as MXNet and PyTorch can construct computational graphs and automatically execute non-interdependent tasks in parallel. :chatgpt-content-reference{index="1"}
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Automatic parallelism allows deep-learning frameworks to use available hardware more efficiently by discovering independent computation and communication from the computational graph."
    }
  ]
};

export default lesson14;