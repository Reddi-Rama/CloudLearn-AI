const lesson18 = {
  id: "lesson18",
  title: "Data Parallelism",
  description:
    "Master data-parallel training, gradient aggregation, parameter synchronization, distributed batches, ring synchronization, and the foundations of scalable distributed deep learning.",
  duration: "125–150 min",
  difficulty: "Advanced",

  prerequisites: [
    "Multiple GPU training",
    "Backpropagation",
    "Gradient descent",
    "Distributed computation",
    "GPU communication"
  ],

  sections: [
    {
      type: "intro",
      title: "Introduction to Data Parallelism",
      content: `
Data parallelism is one of the most widely used strategies for distributing neural-network training.

The same model is replicated across multiple devices.

Different devices process different portions of the input batch.

Their gradients are then synchronized so that all replicas remain consistent.
`
    },

    {
      type: "concept",
      title: "1. Single-GPU Training",
      content: `
The basic training loop is:

batch
↓
model
↓
loss
↓
gradient
↓
parameter update
`
    },

    {
      type: "concept",
      title: "2. Data-Parallel Training",
      content: `
With four GPUs:

global batch
↓
split
├── GPU 0
├── GPU 1
├── GPU 2
└── GPU 3

Each GPU computes its local result.
`
    },

    {
      type: "concept",
      title: "3. Replicated Parameters",
      content: `
Every worker starts with the same model parameters.

For example:

W_0
W_1
W_2
W_3

Initially:

W_0 = W_1 = W_2 = W_3
`
    },

    {
      type: "concept",
      title: "4. Local Gradients",
      content: `
Each GPU computes a local gradient:

g_0
g_1
g_2
g_3

These gradients correspond to different subsets of the training data.
`
    },

    {
      type: "formula",
      title: "5. Gradient Averaging",
      content: `
A simplified synchronized gradient is:

g
=
1/N
Σ g_i

where:

N = number of workers.
`
    },

    {
      type: "concept",
      title: "6. Parameter Update",
      content: `
Once the global gradient is available:

W
←
W
-
ηg

All replicas then need to use the resulting updated parameters.
`
    },

    {
      type: "concept",
      title: "7. Synchronization Cycle",
      content: `
The complete cycle is:

replicate parameters
↓
distribute data
↓
forward pass
↓
backward pass
↓
aggregate gradients
↓
update parameters
↓
synchronize replicas
↓
next batch
`
    },

    {
      type: "concept",
      title: "8. Why Data Parallelism Is Attractive",
      content: `
Data parallelism is conceptually simple.

The model architecture does not necessarily need to be redesigned.

Instead, the training data is divided across workers.
`
    },

    {
      type: "concept",
      title: "9. Global Batch Size",
      content: `
If:

workers = 4

and:

local batch = 32

then:

global batch = 4 × 32 = 128
`
    },

    {
      type: "concept",
      title: "10. Local Batch Size",
      content: `
Local batch size determines how much data each worker processes in one training iteration.

It is constrained by:

• Device memory
• Model size
• Activation memory
• Desired throughput
`
    },

    {
      type: "concept",
      title: "11. Dataset Partitioning",
      content: `
Each worker should receive a different portion of the dataset during an iteration.

Otherwise multiple workers may perform redundant computation on the same examples.
`
    },

    {
      type: "concept",
      title: "12. Distributed Samplers",
      content: `
A distributed sampler can partition dataset indices across workers.

Conceptually:

Dataset
↓
Sampler
├── worker 0 indices
├── worker 1 indices
├── worker 2 indices
└── worker 3 indices
`
    },

    {
      type: "code",
      language: "python",
      title: "Distributed Sampler",
      content: `
from torch.utils.data import DataLoader
from torch.utils.data.distributed import DistributedSampler

sampler = DistributedSampler(
    dataset,
    num_replicas=world_size,
    rank=rank,
    shuffle=True
)

loader = DataLoader(
    dataset,
    batch_size=32,
    sampler=sampler
)
`
    },

    {
      type: "concept",
      title: "13. Epoch and Shuffling",
      content: `
Distributed samplers should usually be informed of the current epoch so that shuffling changes appropriately between epochs.

Example:

sampler.set_epoch(epoch)
`
    },

    {
      type: "concept",
      title: "14. Gradient Reduction",
      content: `
The gradients from different workers need to be combined.

This operation is commonly called:

all-reduce

because the result becomes available to all workers.
`
    },

    {
      type: "concept",
      title: "15. All-Reduce",
      content: `
Conceptually:

GPU 0: g0
GPU 1: g1
GPU 2: g2
GPU 3: g3

↓ all-reduce

All GPUs receive:

g0 + g1 + g2 + g3

or the corresponding average.
`
    },

    {
      type: "concept",
      title: "16. Why All-Reduce?",
      content: `
Every worker needs the same gradient to keep model replicas synchronized.

All-reduce provides the combined result to all participating workers.
`
    },

    {
      type: "concept",
      title: "17. Parameter Server Approach",
      content: `
Another architecture is a parameter server.

Workers:

1. Compute gradients.
2. Send gradients to a server.
3. Server updates parameters.
4. Workers retrieve updated parameters.
`
    },

    {
      type: "concept",
      title: "18. Push and Pull",
      content: `
Parameter-server systems can be understood using:

push

and:

pull

semantics.

Push:

worker → server
gradient/update

Pull:

server → worker
updated parameters
`
    },

    {
      type: "concept",
      title: "19. Centralized Aggregation",
      content: `
A simple multi-GPU design can aggregate gradients on one device.

For example:

GPU 0
↑ ↑ ↑
GPU 1 GPU 2 GPU 3

GPU 0 performs the aggregation.

This is conceptually simple but may create a communication bottleneck.
`
    },

    {
      type: "concept",
      title: "20. Why Centralized Aggregation Can Become a Bottleneck",
      content: `
As the number of GPUs increases, the central device must handle more communication.

Therefore:

more workers
↓
more communication
↓
potential bottleneck
`
    },

    {
      type: "concept",
      title: "21. Ring Synchronization",
      content: `
A ring-based approach organizes workers in a logical ring.

Example:

GPU 0
↓
GPU 1
↓
GPU 2
↓
GPU 3
↓
GPU 0

Information is passed between neighbors rather than through one central node.
`
    },

    {
      type: "concept",
      title: "22. Ring All-Reduce",
      content: `
The gradient can be divided into chunks.

Different workers exchange different chunks around the ring.

After several communication rounds, every worker can obtain the complete aggregated result.
`
    },

    {
      type: "concept",
      title: "23. Why Split Gradients Into Chunks?",
      content: `
If one worker transmitted the entire gradient before another worker communicated, only a small part of the network would be active.

Splitting the gradient allows multiple transfers to occur concurrently.
`
    },

    {
      type: "concept",
      title: "24. Communication Complexity",
      content: `
Distributed training performance depends strongly on:

• Gradient size
• Number of workers
• Network bandwidth
• Network topology
• Communication latency
`
    },

    {
      type: "concept",
      title: "25. Multi-Machine Training",
      content: `
Data parallelism can extend beyond one physical server.

Example:

Server 1:
GPU 0
GPU 1
GPU 2
GPU 3

Server 2:
GPU 0
GPU 1
GPU 2
GPU 3

Now network communication becomes part of every synchronization step.
`
    },

    {
      type: "concept",
      title: "26. Interconnects",
      content: `
Different connections provide different communication characteristics.

Examples include:

• PCIe
• NVLink
• Ethernet
• InfiniBand
• Other accelerator interconnects
`
    },

    {
      type: "concept",
      title: "27. Why Topology Matters",
      content: `
Two systems with identical GPUs can have different training performance if their communication networks differ.

Therefore distributed deep learning is partly a networking problem.
`
    },

    {
      type: "concept",
      title: "28. Overlapping Gradient Synchronization",
      content: `
Backpropagation computes gradients layer by layer.

Some gradients become available before others.

Communication for earlier-ready gradients can potentially begin while the remaining gradients are still being computed.

This overlaps:

computation

with:

communication.
`
    },

    {
      type: "concept",
      title: "29. Parameter Servers and Large Systems",
      content: `
The source introduces parameter servers as systems for distributed training across multiple machines.

The basic concept is:

workers
↓
parameter synchronization infrastructure
↓
shared model state
`
    },

    {
      type: "concept",
      title: "30. Key-Value Stores",
      content: `
A distributed parameter system can represent model state as key-value pairs.

Conceptually:

key:
parameter identifier

value:
parameter tensor

This allows distributed components to store and retrieve model state.
`
    },

    {
      type: "concept",
      title: "31. Synchronous vs Asynchronous Training",
      content: `
Synchronous:

all workers participate in a coordinated update.

Asynchronous:

workers may update shared state without waiting for every worker.

Synchronous training provides simpler consistency semantics, while asynchronous systems introduce additional coordination considerations.
`
    },

    {
      type: "concept",
      title: "32. Scalability",
      content: `
Adding more workers can increase throughput.

But eventually communication and synchronization overhead become significant.

Therefore:

training speed

is not simply proportional to:

number of GPUs.
`
    },

    {
      type: "concept",
      title: "33. Multi-GPU Training Architecture",
      content: `
A scalable architecture can be viewed as:

Dataset
↓
Distributed sampler
↓
Worker processes
↓
Local forward/backward
↓
Gradient synchronization
↓
Optimizer
↓
Updated model
`
    },

    {
      type: "code",
      language: "python",
      title: "Distributed Training Skeleton",
      content: `
import torch
import torch.distributed as dist

dist.init_process_group(
    backend="nccl"
)

rank = dist.get_rank()

device = torch.device(
    f"cuda:{rank}"
)

model = model.to(device)

# Wrap with DistributedDataParallel
`
    },

    {
      type: "concept",
      title: "34. Debugging Distributed Training",
      content: `
Important checks:

• Correct world size
• Correct rank
• Correct local GPU
• Correct dataset partition
• Same model initialization
• Correct process-group setup
• Correct batch size
• Correct synchronization
`
    },

    {
      type: "concept",
      title: "35. Common Distributed Training Errors",
      content: `
Typical problems include:

• Deadlocks
• Incorrect device assignment
• Duplicate data
• Missing synchronization
• Communication timeouts
• Out-of-memory errors
• Different model states
`
    },

    {
      type: "exercise",
      title: "Data-Parallel Simulation",
      content: `
Without multiple GPUs, simulate data parallelism conceptually.

1. Split a batch into four pieces.
2. Compute four local gradients.
3. Average the gradients.
4. Apply one parameter update.

Verify that the resulting update matches the intended global gradient.
`
    },

    {
      type: "exercise",
      title: "Ring Synchronization Exercise",
      content: `
For four workers:

GPU 0
GPU 1
GPU 2
GPU 3

Divide a gradient into four chunks.

Design a sequence of neighbor-to-neighbor transfers that allows every GPU to obtain the aggregate gradient.
`
    },

    {
      type: "exercise",
      title: "Scaling Experiment",
      content: `
Measure:

1 GPU
2 GPUs
4 GPUs
8 GPUs

For each configuration record:

• Samples/second
• Epoch time
• Communication time
• GPU utilization

Calculate scaling efficiency.
`
    },

    {
      type: "qa",
      question: "What is data parallelism?",
      answer:
        "Data parallelism replicates the model across workers and divides training data among those workers."
    },

    {
      type: "qa",
      question: "What is all-reduce?",
      answer:
        "It is a collective communication operation that combines values from all workers and distributes the resulting value back to all workers."
    },

    {
      type: "qa",
      question: "Why is ring synchronization useful?",
      answer:
        "It distributes communication across workers instead of requiring one central device to perform all aggregation."
    },

    {
      type: "qa",
      question: "What is a parameter server?",
      answer:
        "A distributed system component that stores or manages shared model parameters and coordinates parameter updates between workers."
    },

    {
      type: "qa",
      question: "Why does distributed training eventually stop scaling linearly?",
      answer:
        "Communication, synchronization, network bandwidth, latency, and load imbalance become increasingly significant as more workers participate."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Data parallelism is a foundation of distributed deep learning.

The complete idea is:

replicated model
+
distributed data
+
local gradients
+
gradient aggregation
+
parameter synchronization.

The source then extends this idea to ring synchronization, multi-machine training, and parameter-server systems. 
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "Data parallelism scales neural-network training by distributing different data across replicated models, but the efficiency of the system ultimately depends on how quickly gradients and parameters can be synchronized."
    }
  ]
};

export default lesson18;