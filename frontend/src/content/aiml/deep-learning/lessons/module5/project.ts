const project = {
  title: "Module 5 Project — Distributed Deep Learning Performance Lab",

  subtitle:
    "Design, benchmark, and analyze a scalable deep-learning training pipeline.",

  difficulty: "Advanced",

  duration: "10–15 hours",

  description:
    "Build a performance laboratory that trains the same neural network under different optimization and hardware configurations. The project focuses on measuring computation, communication, synchronization, and scaling rather than only model accuracy.",

  learningGoals: [
    "Build a reproducible neural-network training pipeline.",
    "Compare optimization algorithms.",
    "Experiment with learning-rate schedules.",
    "Measure training performance.",
    "Understand CPU and GPU execution.",
    "Understand data parallelism.",
    "Analyze gradient synchronization.",
    "Understand distributed-training bottlenecks.",
    "Design experiments using multiple GPUs when hardware is available.",
    "Interpret performance measurements rather than relying only on accuracy.",
  ],

  problemStatement: {
    title: "Problem",
    content:
      "A deep-learning model may achieve good accuracy but still be inefficient to train. As models and datasets grow, computation, memory movement, communication, and synchronization become important. Your task is to build a small performance laboratory that investigates how training behavior changes when optimization and hardware configurations change.",
  },

  scenario: {
    title: "Scenario",
    organization: "CloudLearn Research Lab",
    role: "Machine Learning Performance Engineer",
    challenge:
      "The research team has a neural-network training pipeline and wants to understand how efficiently it uses available computing resources.",
    expectedOutcome:
      "Produce a reproducible benchmark and engineering report explaining training time, optimization behavior, hardware utilization, and multi-device scaling.",
  },

  projectArchitecture: {
    components: [
      "Dataset loader",
      "Neural network",
      "Loss function",
      "Optimizer",
      "Learning-rate scheduler",
      "Training loop",
      "Validation loop",
      "Performance timer",
      "Device manager",
      "Multi-GPU training layer",
      "Metrics logger",
      "Experiment configuration",
      "Results analyzer",
    ],

    flow: [
      "Load dataset",
      "Prepare minibatches",
      "Select device",
      "Initialize model",
      "Select optimizer",
      "Train model",
      "Measure computation",
      "Synchronize devices when required",
      "Evaluate validation data",
      "Store metrics",
      "Compare experiments",
      "Generate report",
    ],
  },

  technologyStack: {
    language: "Python",
    framework: "PyTorch",
    numericalComputing: "NumPy",
    visualization: "Matplotlib",
    dataHandling: "Pandas",
    optionalTools: [
      "CUDA",
      "torch.profiler",
      "DistributedDataParallel",
      "TensorBoard",
    ],
  },

  folderStructure: `
distributed-performance-lab/
│
├── data/
│   └── README.md
│
├── src/
│   ├── model.py
│   ├── dataset.py
│   ├── train.py
│   ├── evaluate.py
│   ├── distributed_train.py
│   ├── benchmark.py
│   ├── metrics.py
│   └── utils.py
│
├── experiments/
│   ├── baseline.yaml
│   ├── optimizer.yaml
│   └── distributed.yaml
│
├── results/
│   ├── metrics.csv
│   ├── timing.csv
│   └── plots/
│
├── reports/
│   └── performance-report.md
│
├── requirements.txt
└── README.md
`,

  phase1: {
    title: "Phase 1 — Baseline Model",
    tasks: [
      "Create a small image-classification or tabular-classification model.",
      "Create training and validation loops.",
      "Use minibatch training.",
      "Record loss and accuracy.",
      "Measure total training time.",
      "Save the trained model.",
    ],
  },

  phase2: {
    title: "Phase 2 — Optimizer Comparison",
    experiments: [
      "SGD",
      "Momentum SGD",
      "AdaGrad",
      "RMSProp",
      "AdaDelta",
      "Adam",
    ],
    measurements: [
      "Training loss",
      "Validation loss",
      "Validation accuracy",
      "Epoch time",
      "Total training time",
      "Final learning rate",
    ],
  },

  phase3: {
    title: "Phase 3 — Learning Rate Scheduling",
    tasks: [
      "Train using a constant learning rate.",
      "Train using step-based decay.",
      "Train using another suitable scheduler.",
      "Plot learning rate against training progress.",
      "Plot training loss.",
      "Compare convergence behavior.",
    ],
  },

  phase4: {
    title: "Phase 4 — Hardware Benchmark",
    configurations: [
      "CPU",
      "Single GPU",
      "Multiple GPUs if available",
    ],
    metrics: [
      "Epoch time",
      "Samples per second",
      "Training throughput",
      "Memory usage",
      "Validation accuracy",
    ],

    formulae: [
      {
        name: "Throughput",
        formula: "throughput = processed_samples / elapsed_time",
      },
      {
        name: "Speedup",
        formula: "speedup = single_device_time / multi_device_time",
      },
      {
        name: "Parallel efficiency",
        formula: "efficiency = speedup / number_of_devices",
      },
    ],
  },

  phase5: {
    title: "Phase 5 — Data Parallelism",
    workflow: [
      "Start one model replica per device.",
      "Split each minibatch across workers.",
      "Perform forward propagation locally.",
      "Compute local loss.",
      "Perform backward propagation.",
      "Obtain local gradients.",
      "Synchronize gradients.",
      "Update parameters consistently.",
      "Continue with the next minibatch.",
    ],

    analysisQuestions: [
      "What happens to the effective batch size?",
      "How does communication time change?",
      "Does throughput increase linearly?",
      "Does validation accuracy remain comparable?",
      "What happens when the model is very small?",
      "What happens when the model becomes computationally expensive?",
    ],
  },

  phase6: {
    title: "Phase 6 — Communication Analysis",
    investigate: [
      "Gradient synchronization",
      "Parameter broadcasting",
      "Inter-device transfer",
      "Data loading",
      "CPU-GPU transfers",
      "Network communication in multi-machine settings",
    ],

    bottlenecks: [
      "Slow data loading",
      "Small computational workload",
      "Excessive synchronization",
      "Network bandwidth",
      "Device imbalance",
      "Memory pressure",
      "Poor batch-size selection",
    ],
  },

  phase7: {
    title: "Phase 7 — Parameter Server Simulation",
    description:
      "Create a simplified software simulation of workers communicating with a central parameter server.",

    workers: [
      "Worker 1",
      "Worker 2",
      "Worker 3",
      "Worker 4",
    ],

    operations: [
      "Worker computes gradient.",
      "Worker pushes gradient.",
      "Server aggregates gradients.",
      "Server updates parameters.",
      "Worker pulls updated parameters.",
      "Workers continue training.",
    ],

    conceptualAPI: [
      "push(workerId, parameterKey, gradient)",
      "aggregate(parameterKey)",
      "update(parameterKey)",
      "pull(workerId, parameterKey)",
    ],
  },

  phase8: {
    title: "Phase 8 — Ring Synchronization Simulation",
    tasks: [
      "Create four simulated workers.",
      "Divide a synthetic gradient vector into chunks.",
      "Assign one chunk to each worker.",
      "Exchange chunks between neighboring workers.",
      "Aggregate corresponding chunks.",
      "Reconstruct the complete synchronized gradient.",
      "Compare communication steps with centralized aggregation.",
    ],
  },

  codeExample: {
    title: "Basic Performance Measurement",
    language: "python",
    code: `
import time
import torch

device = torch.device(
    "cuda" if torch.cuda.is_available() else "cpu"
)

model = model.to(device)

start = time.perf_counter()

for X, y in train_loader:
    X = X.to(device)
    y = y.to(device)

    optimizer.zero_grad()

    predictions = model(X)
    loss = criterion(predictions, y)

    loss.backward()
    optimizer.step()

if device.type == "cuda":
    torch.cuda.synchronize()

elapsed = time.perf_counter() - start

print(f"Training time: {elapsed:.3f} seconds")
`,
  },

  experimentTable: {
    columns: [
      "Experiment",
      "Device",
      "Optimizer",
      "Batch Size",
      "Epochs",
      "Time",
      "Accuracy",
      "Throughput",
    ],
    rows: [
      "Baseline",
      "SGD",
      "Adam",
      "Learning-rate schedule",
      "Single GPU",
      "Multi GPU",
    ],
  },

  requiredGraphs: [
    "Training loss vs epoch",
    "Validation loss vs epoch",
    "Validation accuracy vs epoch",
    "Learning rate vs epoch",
    "Training time by configuration",
    "Throughput by configuration",
    "Speedup by number of devices",
    "Parallel efficiency by number of devices",
  ],

  engineeringQuestions: [
    "Why does adding GPUs not necessarily produce linear speedup?",
    "When does communication dominate computation?",
    "Why can a larger batch improve hardware utilization?",
    "When can a larger batch hurt optimization?",
    "Why does model size affect the usefulness of parallel hardware?",
    "Why does data loading matter?",
    "How does GPU memory affect batch size?",
    "Why is synchronization required?",
    "How could ring synchronization reduce centralized communication pressure?",
    "When would a parameter-server architecture be useful?",
  ],

  advancedExtension: {
    title: "Advanced Extension",
    tasks: [
      "Use PyTorch DistributedDataParallel.",
      "Run the same model on multiple GPUs.",
      "Measure scaling from one GPU to multiple GPUs.",
      "Compare centralized conceptual aggregation with distributed synchronization.",
      "Use torch.profiler to inspect execution.",
      "Identify the most expensive operations.",
      "Investigate communication and computation overlap.",
    ],
  },

  deliverables: [
    "Complete source code",
    "README.md",
    "Experiment configuration",
    "Raw benchmark data",
    "Training logs",
    "Performance graphs",
    "Distributed-training experiment",
    "Parameter-server simulation",
    "Ring-synchronization simulation",
    "Final engineering report",
  ],

  finalReport: {
    sections: [
      "1. Problem Definition",
      "2. System Architecture",
      "3. Dataset",
      "4. Model Architecture",
      "5. Optimization Experiments",
      "6. Learning Rate Experiments",
      "7. Hardware Experiments",
      "8. Multi-GPU Experiments",
      "9. Communication Analysis",
      "10. Parameter Server Design",
      "11. Ring Synchronization",
      "12. Bottleneck Analysis",
      "13. Results",
      "14. Limitations",
      "15. Future Improvements",
      "16. Conclusion",
    ],
  },

  evaluation: {
    criteria: [
      "Correct implementation",
      "Experiment reproducibility",
      "Quality of measurements",
      "Understanding of optimization",
      "Understanding of hardware",
      "Understanding of parallelism",
      "Understanding of distributed training",
      "Quality of performance analysis",
      "Quality of engineering report",
    ],
  },

  keyTakeaway:
    "High-performance deep learning is not only about choosing a powerful model. Efficient training also depends on optimization, hardware utilization, computation scheduling, communication, synchronization, and scalable distributed systems.",
};

export default project;