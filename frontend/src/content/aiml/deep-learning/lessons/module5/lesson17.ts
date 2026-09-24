const lesson17 = {
  id: "lesson17",
  title: "Multiple GPU Training",
  description:
    "Understand how neural networks are trained across multiple GPUs, including problem splitting, data distribution, gradient aggregation, parameter synchronization, and scalability.",
  duration: "125–150 min",
  difficulty: "Advanced",

  prerequisites: [
    "GPU computing",
    "Automatic parallelism",
    "Backpropagation",
    "Gradient descent",
    "Batch training",
    "PyTorch"
  ],

  sections: [
    {
      type: "intro",
      title: "Why Use Multiple GPUs?",
      content: `
A single GPU has limited:

• Compute capacity
• Memory capacity
• Memory bandwidth

For larger models or datasets, multiple GPUs can provide additional resources.

The central challenge is:

How do we divide computation while keeping model parameters consistent?
`
    },

    {
      type: "concept",
      title: "1. Splitting the Problem",
      content: `
A training workload can be split in different ways.

Two broad ideas are:

• Split the data
• Split the model

The source focuses primarily on data-parallel training in this section.
`
    },

    {
      type: "concept",
      title: "2. Data Parallelism",
      content: `
Each GPU receives a different portion of the minibatch.

Example:

Batch
↓
GPU 0 → batch portion 0
GPU 1 → batch portion 1
GPU 2 → batch portion 2
GPU 3 → batch portion 3
`
    },

    {
      type: "concept",
      title: "3. Replicated Model",
      content: `
In data parallelism, each GPU typically contains a copy of the model.

Therefore:

GPU 0 → model copy
GPU 1 → model copy
GPU 2 → model copy
GPU 3 → model copy
`
    },

    {
      type: "concept",
      title: "4. Independent Forward Passes",
      content: `
Each GPU processes its own input data.

The forward computations can occur independently.

This creates substantial parallelism.
`
    },

    {
      type: "concept",
      title: "5. Independent Backward Passes",
      content: `
Each GPU also computes gradients using its local minibatch.

Therefore:

GPU 0 → gradients 0
GPU 1 → gradients 1
GPU 2 → gradients 2
GPU 3 → gradients 3
`
    },

    {
      type: "concept",
      title: "6. Gradient Aggregation",
      content: `
The local gradients must be combined.

Conceptually:

g
=
g0 + g1 + g2 + g3

or an appropriately scaled average depending on the training formulation.
`
    },

    {
      type: "concept",
      title: "7. Parameter Synchronization",
      content: `
After gradients are aggregated:

updated parameters

must become available to all model replicas.

Therefore:

aggregate gradients
↓
update parameters
↓
synchronize parameters
↓
next minibatch
`
    },

    {
      type: "concept",
      title: "8. Data Distribution",
      content: `
Suppose global batch size is:

B

and there are:

N

GPUs.

A simple balanced distribution gives approximately:

B/N

samples per GPU.
`
    },

    {
      type: "concept",
      title: "9. Effective Batch Size",
      content: `
If each of four GPUs processes 64 examples:

global batch size

=
4 × 64

=
256
`
    },

    {
      type: "concept",
      title: "10. Why Batch Size Matters",
      content: `
Increasing the global batch size changes:

• Gradient statistics
• Memory usage
• Throughput
• Number of optimizer updates
• Potential learning-rate requirements
`
    },

    {
      type: "concept",
      title: "11. Synchronization Cost",
      content: `
Multiple GPUs do not provide free speedup.

The system must communicate:

• Gradients
• Parameters
• Possibly activations or other state

Communication creates overhead.
`
    },

    {
      type: "concept",
      title: "12. Computation vs Synchronization",
      content: `
Suppose:

computation = 100 ms

synchronization = 5 ms

Parallelization may provide substantial benefit.

But if:

computation = 10 ms

synchronization = 20 ms

communication can dominate the workload.
`
    },

    {
      type: "concept",
      title: "13. Toy Network",
      content: `
A small network can be used to demonstrate multi-GPU training.

Example:

Input
↓
Linear
↓
ReLU
↓
Linear
↓
Output
`
    },

    {
      type: "code",
      language: "python",
      title: "Simple Network",
      content: `
import torch
from torch import nn

net = nn.Sequential(
    nn.Linear(784, 256),
    nn.ReLU(),
    nn.Linear(256, 10)
)
`
    },

    {
      type: "concept",
      title: "14. Model Replication",
      content: `
Each device requires access to the network parameters.

Conceptually:

net_0
net_1
net_2
net_3

all begin with equivalent parameters.
`
    },

    {
      type: "concept",
      title: "15. Local Training",
      content: `
Each GPU executes:

forward
↓
loss
↓
backward
↓
local gradient
`
    },

    {
      type: "concept",
      title: "16. Gradient Reduction",
      content: `
Local gradients are reduced into a global gradient.

A simplified operation is:

g_global
=
(g0 + g1 + ... + gN-1) / N

when computing an average.
`
    },

    {
      type: "concept",
      title: "17. Broadcast",
      content: `
After the update, the resulting parameters need to be available to all GPUs.

This is a broadcast or synchronization step.

Conceptually:

GPU 0
↓
updated parameters
↙ ↓ ↘
GPU 1 GPU 2 GPU 3
`
    },

    {
      type: "concept",
      title: "18. Synchronous Data Parallelism",
      content: `
In synchronous training, all participating GPUs contribute to the same optimization step.

The next update waits until the required gradients have been aggregated.

This keeps replicas synchronized.
`
    },

    {
      type: "concept",
      title: "19. Stragglers",
      content: `
If one GPU is significantly slower than the others:

GPU 0 → done
GPU 1 → done
GPU 2 → done
GPU 3 → still computing

the others may have to wait before synchronization.

This is a straggler problem.
`
    },

    {
      type: "concept",
      title: "20. GPU Memory Considerations",
      content: `
Data parallelism replicates model parameters.

Therefore each GPU must have enough memory for:

• Model
• Gradients
• Activations
• Optimizer state
• Local batch
`
    },

    {
      type: "concept",
      title: "21. Scaling",
      content: `
Ideally:

2 GPUs → approximately 2× throughput

4 GPUs → approximately 4× throughput

But real systems achieve less because of:

• Communication
• Synchronization
• Load imbalance
• Memory limitations
• Input pipeline bottlenecks
`
    },

    {
      type: "concept",
      title: "22. Strong vs Weak Scaling",
      content: `
Strong scaling:

same total workload
+
more GPUs

Weak scaling:

workload increases
+
number of GPUs increases.

These measurements answer different performance questions.
`
    },

    {
      type: "concept",
      title: "23. Communication Topology",
      content: `
GPU communication depends on the physical interconnect.

Possible paths include:

GPU
↓
PCI Express
↓
CPU

or:

GPU
↔
high-speed GPU interconnect
↔
GPU
`
    },

    {
      type: "concept",
      title: "24. Why Interconnect Matters",
      content: `
If gradients are large, synchronization requires moving substantial amounts of data.

Higher-bandwidth links can reduce communication time.

Therefore hardware topology directly affects distributed-training performance.
`
    },

    {
      type: "concept",
      title: "25. Multi-GPU Training Workflow",
      content: `
Complete workflow:

1. Initialize model.
2. Create GPU replicas.
3. Split minibatch.
4. Forward pass on each GPU.
5. Compute local loss.
6. Backpropagate.
7. Aggregate gradients.
8. Update parameters.
9. Synchronize replicas.
10. Continue training.
`
    },

    {
      type: "concept",
      title: "26. Concise Multi-GPU Training",
      content: `
Modern frameworks provide abstractions that hide much of the synchronization logic.

For example, PyTorch DistributedDataParallel is commonly used for scalable data-parallel training.

The important conceptual structure remains:

local computation
+
gradient synchronization
+
parameter consistency
`
    },

    {
      type: "code",
      language: "python",
      title: "DistributedDataParallel Concept",
      content: `
import torch
from torch.nn.parallel import DistributedDataParallel

model = model.to(device)

model = DistributedDataParallel(
    model,
    device_ids=[local_rank]
)
`
    },

    {
      type: "concept",
      title: "27. Distributed Sampler",
      content: `
When multiple processes train on different data portions, the dataset must be partitioned correctly.

A distributed sampler helps prevent every process from training on the exact same samples.
`
    },

    {
      type: "concept",
      title: "28. Multi-GPU Debugging",
      content: `
Check:

• GPU assignment
• Local batch size
• Global batch size
• Parameter initialization
• Gradient synchronization
• Dataset partitioning
• Communication errors
• GPU memory
`
    },

    {
      type: "exercise",
      title: "Scaling Experiment",
      content: `
Train the same model with:

1 GPU
2 GPUs
4 GPUs

Measure:

• Epoch time
• Samples/second
• GPU utilization
• Communication overhead

Calculate scaling efficiency.
`
    },

    {
      type: "exercise",
      title: "Batch Scaling Experiment",
      content: `
Compare:

1 GPU × batch 64

2 GPUs × batch 128

4 GPUs × batch 256

Observe how throughput and optimization behavior change.
`
    },

    {
      type: "qa",
      question: "What is data parallelism?",
      answer:
        "Data parallelism replicates the model across devices and gives each device a different portion of the training data."
    },

    {
      type: "qa",
      question: "Why synchronize gradients?",
      answer:
        "Because each GPU computes gradients from different data, and the model update must incorporate the contributions from all participating GPUs."
    },

    {
      type: "qa",
      question: "Why is multi-GPU scaling not perfectly linear?",
      answer:
        "Communication, synchronization, load imbalance, and other overheads prevent perfect linear scaling."
    },

    {
      type: "qa",
      question: "What is a straggler?",
      answer:
        "A slower worker that delays synchronization with the other workers."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Multiple-GPU training divides work across accelerators.

Core process:

data distribution
↓
replicated models
↓
local forward/backward computation
↓
gradient aggregation
↓
parameter synchronization
↓
next iteration

The source specifically covers problem splitting, data parallelism, a toy network, data synchronization, distributing data, and training. 
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Multiple GPUs can accelerate deep-learning training by distributing data and computation, but scalable performance depends critically on efficient gradient synchronization and communication."
    }
  ]
};

export default lesson17;