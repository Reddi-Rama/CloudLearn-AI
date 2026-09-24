const lesson15 = {
  id: "lesson15",
  title: "Deep Learning Hardware",
  description:
    "Understand the hardware hierarchy behind deep learning, including computers, memory, storage, CPUs, GPUs, accelerators, networks, buses, and latency.",
  duration: "120–140 min",
  difficulty: "Advanced",

  prerequisites: [
    "Basic computer architecture",
    "CPU fundamentals",
    "GPU fundamentals",
    "Tensor computation",
    "Deep-learning training"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Hardware Matters in Deep Learning",
      content: `
Deep-learning models perform enormous numbers of mathematical operations.

Therefore understanding hardware helps explain:

• Why some models train faster
• Why memory can become a bottleneck
• Why GPUs are useful
• Why communication matters
• Why batch size affects performance
• Why distributed training is difficult

The source emphasizes that algorithm design and hardware design are closely connected.
`
    },

    {
      type: "concept",
      title: "1. Computer System Overview",
      content: `
A modern deep-learning computer may contain:

• CPU
• Main memory
• Storage
• GPU
• GPU memory
• Network interface
• High-speed buses

All of these components participate in a complete training system.
`
    },

    {
      type: "concept",
      title: "2. Compute vs Memory",
      content: `
A model can be limited by:

computation

or:

memory movement.

A processor may have enormous computational capability while waiting for data to arrive from memory.
`
    },

    {
      type: "concept",
      title: "3. Memory Hierarchy",
      content: `
A simplified hierarchy is:

CPU registers
↓
CPU cache
↓
RAM
↓
SSD
↓
Network storage

Closer memory is generally faster but smaller and more expensive per unit of capacity.
`
    },

    {
      type: "concept",
      title: "4. Why Cache Matters",
      content: `
Caches store recently or frequently accessed data close to the processor.

If required data is found in cache, the CPU avoids a slower trip to main memory.
`
    },

    {
      type: "concept",
      title: "5. Main Memory",
      content: `
Main memory stores active program data.

Deep-learning workloads may require memory for:

• Model parameters
• Gradients
• Activations
• Optimizer states
• Minibatches
• Temporary tensors
`
    },

    {
      type: "concept",
      title: "6. Storage",
      content: `
Storage contains:

• Datasets
• Model checkpoints
• Logs
• Pretrained weights
• Configuration files

Storage is usually much slower than processor-local memory.
`
    },

    {
      type: "concept",
      title: "7. CPU",
      content: `
CPUs are designed for general-purpose computation.

They are particularly useful for:

• Control flow
• Operating-system tasks
• Data preprocessing
• Input pipelines
• General computation
• Coordinating accelerators
`
    },

    {
      type: "concept",
      title: "8. CPU Cores",
      content: `
Modern CPUs contain multiple cores.

Each core can execute instructions independently.

However, increasing core count does not automatically guarantee proportional speedup because cores share resources such as:

• Memory bandwidth
• Cache
• Interconnects
`
    },

    {
      type: "concept",
      title: "9. False Sharing",
      content: `
The source discusses false sharing as a performance problem.

Different processors may need to modify data located close together in memory.

Cache-coherence mechanisms can force processors to invalidate or synchronize cache lines.

This can reduce parallel performance.
`
    },

    {
      type: "concept",
      title: "10. GPUs",
      content: `
GPUs are highly parallel processors.

They contain many processing units designed to execute large numbers of similar operations.

This architecture matches many deep-learning workloads.
`
    },

    {
      type: "concept",
      title: "11. Why GPUs Work Well for Deep Learning",
      content: `
Deep learning frequently performs operations such as:

• Matrix multiplication
• Convolution
• Elementwise tensor operations
• Reduction
• Attention

Many of these operations contain substantial parallelism.
`
    },

    {
      type: "concept",
      title: "12. Accelerators",
      content: `
Besides GPUs, specialized accelerators can target machine-learning workloads.

Examples include:

• TPUs
• AI accelerators
• Specialized inference processors

The common goal is to execute neural-network workloads efficiently.
`
    },

    {
      type: "concept",
      title: "13. Training vs Inference Hardware",
      content: `
Training and inference have different requirements.

Training requires:

• Forward propagation
• Backpropagation
• Gradient storage
• Parameter updates
• Intermediate activations

Inference generally requires only forward computation.

Therefore inference hardware can often use lower precision and different memory configurations.
`
    },

    {
      type: "concept",
      title: "14. Numerical Precision",
      content: `
Deep-learning hardware supports multiple numerical formats.

Examples include:

FP32
FP16
BF16
INT8

Lower precision can reduce:

• Memory usage
• Memory bandwidth
• Computation cost

But numerical accuracy and stability must be considered.
`
    },

    {
      type: "concept",
      title: "15. Tensor Cores",
      content: `
Modern GPUs may contain specialized units for matrix operations.

Tensor cores accelerate particular low-precision or mixed-precision matrix operations important for neural networks.
`
    },

    {
      type: "concept",
      title: "16. GPU Memory",
      content: `
GPU memory stores data close to GPU computation.

During training it may contain:

• Parameters
• Gradients
• Activations
• Optimizer states
• Input batches
`
    },

    {
      type: "concept",
      title: "17. Memory Capacity",
      content: `
If a model does not fit into GPU memory, possible strategies include:

• Smaller batch size
• Gradient accumulation
• Activation checkpointing
• Model sharding
• CPU offloading
• Multiple GPUs
`
    },

    {
      type: "concept",
      title: "18. Memory Bandwidth",
      content: `
Memory bandwidth describes how quickly data can be transferred.

A workload can become bandwidth-bound when the processor spends significant time waiting for data movement rather than performing arithmetic.
`
    },

    {
      type: "concept",
      title: "19. Networks",
      content: `
Distributed training requires communication between machines.

Network performance depends on:

• Bandwidth
• Latency
• Protocol
• Topology
• Number of machines
`
    },

    {
      type: "concept",
      title: "20. Buses",
      content: `
A bus connects components and transports data.

Examples include:

• PCI Express
• Memory buses
• GPU interconnects
• Network links
`
    },

    {
      type: "concept",
      title: "21. Latency vs Bandwidth",
      content: `
Latency:

time before a transfer begins producing a result.

Bandwidth:

amount of data transferred per unit time.

A system can have high bandwidth but still suffer from latency for many small operations.
`
    },

    {
      type: "concept",
      title: "22. Large vs Small Transfers",
      content: `
Large transfers can amortize fixed communication overhead.

Small transfers may be dominated by latency.

Therefore communication patterns matter as much as raw bandwidth.
`
    },

    {
      type: "concept",
      title: "23. Hardware Bottleneck Example",
      content: `
Suppose a GPU can process data extremely quickly.

But the CPU prepares data slowly.

Then:

GPU
↓
wait
↓
GPU
↓
wait

The GPU is underutilized.

The bottleneck is therefore the input pipeline rather than GPU computation.
`
    },

    {
      type: "concept",
      title: "24. System-Level Optimization",
      content: `
Improving training speed can require optimization at multiple levels:

Algorithm
↓
Model
↓
Compiler
↓
GPU kernels
↓
Memory
↓
Communication
↓
Storage
`
    },

    {
      type: "concept",
      title: "25. Hardware and Algorithm Co-Design",
      content: `
Algorithms influence hardware requirements.

Hardware capabilities also influence algorithm design.

For example:

GPU memory size
→ batch size

GPU tensor operations
→ matrix-heavy architecture

Network bandwidth
→ distributed-training strategy
`
    },

    {
      type: "concept",
      title: "26. Performance Hierarchy",
      content: `
When diagnosing performance, ask:

1. Is computation the bottleneck?
2. Is memory bandwidth the bottleneck?
3. Is data loading slow?
4. Is communication slow?
5. Is synchronization excessive?
`
    },

    {
      type: "exercise",
      title: "Hardware Analysis Exercise",
      content: `
Take a deep-learning workload and identify:

• CPU work
• GPU work
• Main-memory work
• GPU-memory work
• Storage work
• Communication work

Then identify the most likely bottleneck.
`
    },

    {
      type: "exercise",
      title: "Precision Experiment",
      content: `
Compare a neural-network workload using:

FP32

and:

mixed precision.

Measure:

• Memory usage
• Training speed
• Accuracy
• Numerical stability
`
    },

    {
      type: "qa",
      question: "Why are GPUs useful for deep learning?",
      answer:
        "Many deep-learning operations contain large amounts of parallel numerical computation, which matches the architecture of GPUs."
    },

    {
      type: "qa",
      question: "What is memory bandwidth?",
      answer:
        "It describes how much data can be transferred between memory and a processor in a unit of time."
    },

    {
      type: "qa",
      question: "What is the difference between latency and bandwidth?",
      answer:
        "Latency measures the delay before data becomes available, while bandwidth measures the rate at which data can be transferred."
    },

    {
      type: "qa",
      question: "Why are training and inference hardware requirements different?",
      answer:
        "Training must store intermediate information and compute gradients, whereas inference generally performs only forward computation."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Deep-learning performance depends on the complete hardware system.

Important concepts:

• CPUs
• GPUs
• Accelerators
• Memory hierarchy
• Cache
• Storage
• GPU memory
• Memory bandwidth
• Numerical precision
• Tensor cores
• Networks
• Buses
• Latency
• Communication

The source emphasizes that understanding hardware helps explain why some algorithms and implementations are much more efficient than others. 
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Deep-learning performance is a system-level problem involving computation, memory, storage, communication, and hardware architecture rather than just the neural-network algorithm."
    }
  ]
};

export default lesson15;