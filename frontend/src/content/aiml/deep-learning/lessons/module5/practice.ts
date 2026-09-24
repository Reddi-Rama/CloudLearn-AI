const practice = {
  title: "Module 5 Practice",
  description:
    "Practice activities for optimization, computational performance, parallel training, hardware, and distributed deep learning.",

  sections: [
    {
      title: "Practice 1 — Optimization Fundamentals",
      tasks: [
        "Explain why gradient descent requires both a loss function and gradients.",
        "Compare batch gradient descent, stochastic gradient descent, and minibatch SGD.",
        "Explain the purpose of momentum.",
        "Explain why adaptive optimizers modify the effective learning rate.",
        "Describe the main idea behind AdaGrad, RMSProp, AdaDelta, and Adam.",
      ],
    },

    {
      title: "Practice 2 — Learning Rate Experiments",
      tasks: [
        "Train the same neural network using three different learning rates.",
        "Record training loss after every epoch.",
        "Identify signs of under-training and unstable optimization.",
        "Compare constant learning rates with scheduled learning rates.",
        "Explain why reducing the learning rate can help optimization near a solution.",
      ],
    },

    {
      title: "Practice 3 — Computational Graph Thinking",
      tasks: [
        "Draw a computational graph for a two-layer neural network.",
        "Identify operations that can execute independently.",
        "Identify operations that depend on previous results.",
        "Explain why dependency information is useful for parallel execution.",
        "Describe the difference between computation and communication.",
      ],
    },

    {
      title: "Practice 4 — Asynchronous Computation",
      tasks: [
        "Explain why a Python frontend does not necessarily execute every operation immediately.",
        "Describe the role of an execution backend.",
        "Explain what a synchronization barrier does.",
        "Describe one situation where excessive synchronization hurts performance.",
        "Explain why asynchronous execution can improve throughput.",
      ],
    },

    {
      title: "Practice 5 — Automatic Parallelism",
      tasks: [
        "Explain how independent operations can be executed in parallel.",
        "Compare single-device and multi-device execution.",
        "Explain why GPU workloads are often highly parallel.",
        "Describe how computation and communication can overlap.",
        "Design an experiment comparing sequential and parallel matrix multiplication.",
      ],
    },

    {
      title: "Practice 6 — Hardware Awareness",
      tasks: [
        "Explain the roles of CPU, GPU, memory, storage, and network.",
        "Compare CPU and GPU execution for highly parallel workloads.",
        "Explain why memory bandwidth matters for deep learning.",
        "Explain why moving data between devices has a cost.",
        "Describe why accelerator hardware is important for deep learning.",
      ],
    },

    {
      title: "Practice 7 — Multi-GPU Training",
      tasks: [
        "Explain data parallelism.",
        "Split a minibatch across two hypothetical GPUs.",
        "Explain why each GPU computes its own local gradients.",
        "Explain why gradients must be synchronized.",
        "Describe the sequence: distribute data → compute → aggregate gradients → update → synchronize parameters.",
      ],
    },

    {
      title: "Practice 8 — Gradient Aggregation",
      tasks: [
        "Assume GPU 0 produces gradient g0 and GPU 1 produces gradient g1.",
        "Compute the average gradient.",
        "Explain what happens if gradients are summed rather than averaged.",
        "Explain why all replicas need consistent parameters after an update.",
        "Discuss how synchronization overhead can limit scaling.",
      ],
    },

    {
      title: "Practice 9 — Ring Synchronization",
      tasks: [
        "Draw four GPUs connected in a ring.",
        "Divide a gradient tensor into four chunks.",
        "Show how each GPU can exchange chunks with neighboring GPUs.",
        "Explain why communication can happen concurrently.",
        "Compare centralized aggregation with ring-based synchronization.",
      ],
    },

    {
      title: "Practice 10 — Parameter Server Concepts",
      tasks: [
        "Explain the role of a parameter server.",
        "Explain the push operation.",
        "Explain the pull operation.",
        "Explain how gradients from multiple workers can be aggregated.",
        "Describe why key–value stores are a useful abstraction for distributed parameters.",
      ],
    },

    {
      title: "Practice 11 — Distributed Training Scenario",
      tasks: [
        "Assume four workers train the same neural network.",
        "Each worker receives a different portion of the training data.",
        "Describe the complete training iteration.",
        "Identify where communication occurs.",
        "Identify potential bottlenecks.",
        "Suggest ways to reduce synchronization overhead.",
      ],
    },

    {
      title: "Practice 12 — Debugging",
      tasks: [
        "A model is slower with four GPUs than with one GPU. List possible reasons.",
        "A worker has different model parameters from the others. Identify the likely synchronization problem.",
        "Training stalls during gradient aggregation. Identify communication-related causes.",
        "GPU utilization is low while CPU utilization is high. Suggest investigation steps.",
        "A multi-machine job spends most of its time transferring data. Explain the likely bottleneck.",
      ],
    },

    {
      title: "Practice 13 — Coding Exercise",
      tasks: [
        "Create a small PyTorch model.",
        "Detect all available CUDA devices.",
        "Create a synthetic dataset.",
        "Run a baseline training loop on one GPU if available.",
        "Extend the experiment to multiple GPUs when hardware permits.",
        "Record training time and validation accuracy.",
        "Compare the results.",
      ],
    },

    {
      title: "Practice 14 — Performance Investigation",
      tasks: [
        "Measure data-loading time.",
        "Measure forward-pass time.",
        "Measure backward-pass time.",
        "Measure synchronization time where possible.",
        "Identify which stage dominates execution.",
        "Explain what optimization you would investigate first.",
      ],
    },

    {
      title: "Practice 15 — Interview Questions",
      questions: [
        "What is data parallelism?",
        "Why do distributed workers need gradient synchronization?",
        "What is ring synchronization?",
        "What is a parameter server?",
        "What are push and pull operations?",
        "Why can communication become a bottleneck?",
        "What is automatic parallelism?",
        "Why are GPUs useful for deep learning?",
        "What is the difference between computation and communication?",
        "Why does increasing the number of GPUs not always produce proportional speedup?",
      ],
    },

    {
      title: "Mini Challenge",
      description:
        "Design a distributed training architecture for a neural network that must be trained using multiple GPUs.",
      requirements: [
        "Draw the worker architecture.",
        "Show where training data is stored.",
        "Show where model parameters exist.",
        "Show gradient flow.",
        "Show synchronization.",
        "Explain whether centralized or ring-based synchronization is used.",
        "Identify at least three possible performance bottlenecks.",
        "Explain how you would measure performance.",
      ],
    },
  ],

  assessment: {
    title: "Module 5 Practice Assessment",
    instructions:
      "Answer the following without looking at the lesson material.",
    questions: [
      {
        question: "Why is gradient synchronization required in data-parallel training?",
        expected:
          "Because different workers compute gradients from different data and the replicas need a consistent update.",
      },
      {
        question: "What is the basic idea of ring synchronization?",
        expected:
          "Workers exchange portions of data or gradients around a communication ring so aggregation can be performed without relying entirely on a single central device.",
      },
      {
        question: "What are push and pull operations in a parameter-server architecture?",
        expected:
          "Push sends gradients or updates to shared parameter storage; pull retrieves aggregated information or updated parameters.",
      },
      {
        question: "Why can more GPUs fail to provide proportional speedup?",
        expected:
          "Communication, synchronization, data loading, memory limitations, and workload imbalance can become bottlenecks.",
      },
    ],
  },

  completionChecklist: [
    "I understand gradient-based optimization.",
    "I understand learning-rate scheduling.",
    "I understand asynchronous execution.",
    "I understand automatic parallelism.",
    "I understand CPU/GPU hardware differences.",
    "I understand data parallelism.",
    "I understand gradient synchronization.",
    "I understand ring synchronization.",
    "I understand parameter servers.",
    "I can reason about distributed-training bottlenecks.",
  ],
};

export default practice;