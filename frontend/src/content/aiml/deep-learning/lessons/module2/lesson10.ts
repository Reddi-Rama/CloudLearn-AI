const lesson10 = {
  id: "lesson10",
  number: 10,
  title: "Generalization in Deep Learning",
  module: "Neural Networks and Learning",
  description:
    "Understand why a neural network must perform well on unseen data, how overfitting develops, how training and validation behavior should be interpreted, and how regularization and early stopping improve generalization.",

  content: [
    {
      type: "heading",
      level: 1,
      text: "Generalization in Deep Learning",
    },

    {
      type: "paragraph",
      text:
        "A neural network is not trained merely to memorize the examples it has already seen. The real objective is to learn patterns that remain useful when the model receives new examples.",
    },

    {
      type: "paragraph",
      text:
        "This ability is called generalization. A model that performs extremely well on its training data but poorly on unseen data has learned the training set too specifically.",
    },

    {
      type: "keyTakeaway",
      title: "The Real Goal",
      text:
        "Optimization reduces training error, but machine learning ultimately cares about performance on data that was not used to fit the model.",
    },

    {
      type: "heading",
      level: 2,
      text: "1. Training Error vs Generalization Error",
    },

    {
      type: "paragraph",
      text:
        "Training error measures how well a model performs on examples used during training. Generalization error refers to how well it performs on new examples from the target data-generating process.",
    },

    {
      type: "formula",
      label: "Generalization Gap",
      formula: "Generalization Gap ≈ Test Error - Training Error",
    },

    {
      type: "paragraph",
      text:
        "A large difference between training and validation or test performance is often a warning sign that the model is not generalizing well.",
    },

    {
      type: "heading",
      level: 2,
      text: "2. Underfitting",
    },

    {
      type: "paragraph",
      text:
        "Underfitting occurs when a model is too limited or insufficiently trained to capture important patterns in the data.",
    },

    {
      type: "table",
      headers: ["Training Performance", "Validation Performance", "Likely Situation"],
      rows: [
        ["Poor", "Poor", "Underfitting or unsuitable setup"],
        ["Good", "Good", "Potentially good generalization"],
        ["Very good", "Poor", "Likely overfitting"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "3. Overfitting",
    },

    {
      type: "paragraph",
      text:
        "Overfitting occurs when the model captures details of the training examples that do not transfer well to unseen examples.",
    },

    {
      type: "paragraph",
      text:
        "A sufficiently flexible network can often reduce training error dramatically. The important question is whether additional fitting continues to improve performance on validation data.",
    },

    {
      type: "heading",
      level: 2,
      text: "4. A Typical Learning Curve",
    },

    {
      type: "paragraph",
      text:
        "Imagine training a neural network for many epochs. Training loss may continue to decrease throughout training. Validation loss may initially decrease, reach a useful region, and later begin increasing.",
    },

    {
      type: "process",
      title: "Interpreting the Curve",
      steps: [
        "Training loss decreases.",
        "Validation loss decreases.",
        "The model learns useful general patterns.",
        "Validation loss reaches a minimum.",
        "Training continues.",
        "Training loss keeps decreasing.",
        "Validation loss begins increasing.",
        "The model may now be fitting training-specific details.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "5. Why a Test Set Is Needed",
    },

    {
      type: "paragraph",
      text:
        "If every design decision is repeatedly evaluated on the same test set, information about that test set gradually influences model selection. A separate validation set can therefore be used during development while the final test set is reserved for final evaluation.",
    },

    {
      type: "table",
      headers: ["Dataset", "Purpose"],
      rows: [
        ["Training set", "Fit model parameters"],
        ["Validation set", "Choose models and hyperparameters"],
        ["Test set", "Final unbiased evaluation"],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "6. Why Reusing the Test Set Is Dangerous",
    },

    {
      type: "paragraph",
      text:
        "Suppose a developer trains many different models and repeatedly chooses whichever has the best test result. Even if the model parameters were not directly trained on the test examples, repeated selection based on test performance can gradually adapt decisions to that test set.",
    },

    {
      type: "keyTakeaway",
      title: "Evaluation Discipline",
      text:
        "Keep the test set separate from routine model development. Use validation data for iterative choices whenever possible.",
    },

    {
      type: "heading",
      level: 2,
      text: "7. Model Capacity",
    },

    {
      type: "paragraph",
      text:
        "Model capacity describes how expressive a model is. Increasing the number of layers, neurons, or parameters can increase the set of functions the model can represent.",
    },

    {
      type: "paragraph",
      text:
        "More capacity can help when a model is underfitting, but additional capacity does not automatically guarantee better generalization.",
    },

    {
      type: "heading",
      level: 2,
      text: "8. Deep Networks and Overparameterization",
    },

    {
      type: "paragraph",
      text:
        "Modern neural networks are often highly overparameterized. They may contain enough parameters to fit training data extremely closely. This makes classical intuitions about model complexity more complicated than they appear in small classical models.",
    },

    {
      type: "paragraph",
      text:
        "Consequently, generalization in modern deep learning is an active research area. Training procedures, architectures, optimization methods, data properties, and inductive biases can all influence generalization.",
    },

    {
      type: "heading",
      level: 2,
      text: "9. Regularization",
    },

    {
      type: "paragraph",
      text:
        "Regularization refers broadly to methods that influence learning so that models do not rely excessively on patterns that fail to transfer to new data.",
    },

    {
      type: "heading",
      level: 2,
      text: "10. Weight Decay",
    },

    {
      type: "paragraph",
      text:
        "One classical approach is to add a penalty related to the squared magnitude of model weights.",
    },

    {
      type: "formula",
      label: "L2-Regularized Objective",
      formula: "L_reg = L_data + λ/2 ||W||²",
    },

    {
      type: "paragraph",
      text:
        "The coefficient λ controls the strength of the penalty. Larger values place more pressure on the optimization process to avoid large weight values.",
    },

    {
      type: "code",
      language: "python",
      title: "Weight Decay in PyTorch",
      code: `import torch

optimizer = torch.optim.SGD(
    model.parameters(),
    lr=0.01,
    weight_decay=1e-4
)`,
    },

    {
      type: "paragraph",
      text:
        "Weight decay should not be treated as a universal solution. Its effect depends on the architecture, optimizer, dataset, and regularization strength.",
    },

    {
      type: "heading",
      level: 2,
      text: "11. Early Stopping",
    },

    {
      type: "paragraph",
      text:
        "Early stopping terminates training when validation performance stops improving rather than continuing until training error is minimized as far as possible.",
    },

    {
      type: "process",
      title: "Early Stopping Workflow",
      steps: [
        "Train the model for one epoch.",
        "Evaluate validation performance.",
        "Record the best validation result.",
        "Continue training while validation performance improves.",
        "Stop after a chosen patience period without improvement.",
        "Restore the best checkpoint.",
      ],
    },

    {
      type: "code",
      language: "python",
      title: "Simple Early-Stopping Pattern",
      code: `best_loss = float("inf")
patience = 3
wait = 0

for epoch in range(50):
    train_one_epoch(model, train_loader)

    val_loss = evaluate(model, val_loader)

    if val_loss < best_loss:
        best_loss = val_loss
        wait = 0
        torch.save(model.state_dict(), "best_model.pt")
    else:
        wait += 1

    if wait >= patience:
        print("Stopping early")
        break

model.load_state_dict(
    torch.load("best_model.pt")
)`,
    },

    {
      type: "heading",
      level: 2,
      text: "12. Why Early Stopping Is a Form of Regularization",
    },

    {
      type: "paragraph",
      text:
        "Training duration itself affects what the model can fit. Stopping before continued optimization begins to harm validation performance restricts the amount of fitting performed on the training data.",
    },

    {
      type: "heading",
      level: 2,
      text: "13. Data Quality and Generalization",
    },

    {
      type: "paragraph",
      text:
        "Generalization is not only a model problem. Poor data quality, incorrect labels, duplicated examples, data leakage, distribution differences, and an unrepresentative training set can all produce poor results on new data.",
    },

    {
      type: "heading",
      level: 2,
      text: "14. Data Leakage",
    },

    {
      type: "paragraph",
      text:
        "Data leakage occurs when information that should be unavailable during training becomes indirectly available to the model.",
    },

    {
      type: "paragraph",
      text:
        "Examples include preprocessing the entire dataset before splitting, accidentally including future information in time-series features, or allowing near-duplicate examples to appear in both training and validation sets.",
    },

    {
      type: "heading",
      level: 2,
      text: "15. Distribution Shift",
    },

    {
      type: "paragraph",
      text:
        "A model can generalize well to data drawn from the same distribution as the training data and still perform poorly when the deployment environment changes.",
    },

    {
      type: "table",
      headers: ["Situation", "Example"],
      rows: [
        [
          "Training distribution",
          "Images captured using one camera",
        ],
        [
          "Deployment distribution",
          "Images captured using another camera",
        ],
        [
          "Potential issue",
          "Lighting, resolution, or appearance changes",
        ],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "16. Cross-Validation",
    },

    {
      type: "paragraph",
      text:
        "When datasets are limited, cross-validation can provide a more systematic way to estimate how a model behaves across different train-validation splits.",
    },

    {
      type: "formula",
      label: "K-Fold Idea",
      formula: "Dataset → K folds → train on K-1 folds → validate on remaining fold",
    },

    {
      type: "paragraph",
      text:
        "The process is repeated so each fold acts as validation data. The resulting validation measurements can then be aggregated.",
    },

    {
      type: "heading",
      level: 2,
      text: "17. Hyperparameters and Generalization",
    },

    {
      type: "paragraph",
      text:
        "Learning rate, batch size, architecture depth, hidden dimensions, weight decay, dropout probability, augmentation strength, and training duration are examples of choices that can affect generalization.",
    },

    {
      type: "heading",
      level: 2,
      text: "18. Training Diagnostics",
    },

    {
      type: "table",
      headers: ["Observation", "Possible Interpretation"],
      rows: [
        [
          "Train loss high, validation loss high",
          "Underfitting, insufficient training, or unsuitable features",
        ],
        [
          "Train loss low, validation loss high",
          "Potential overfitting",
        ],
        [
          "Both losses decrease",
          "Learning is progressing",
        ],
        [
          "Validation suddenly becomes much worse",
          "Possible overfitting, distribution issue, or instability",
        ],
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "19. Practical Generalization Workflow",
    },

    {
      type: "process",
      title: "Model Development Workflow",
      steps: [
        "Create a clean training and validation split.",
        "Keep the final test set isolated.",
        "Build a simple baseline.",
        "Track both training and validation metrics.",
        "Increase model capacity only when justified.",
        "Tune hyperparameters using validation performance.",
        "Use regularization when appropriate.",
        "Use early stopping when validation performance stops improving.",
        "Evaluate once on the final test set.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "20. Complete Example",
    },

    {
      type: "code",
      language: "python",
      title: "Training With Validation Monitoring",
      code: `import torch
from torch import nn

model = nn.Sequential(
    nn.Linear(784, 256),
    nn.ReLU(),
    nn.Dropout(0.2),
    nn.Linear(256, 10)
)

optimizer = torch.optim.Adam(
    model.parameters(),
    lr=1e-3,
    weight_decay=1e-4
)

loss_fn = nn.CrossEntropyLoss()

best_val_loss = float("inf")
patience = 3
wait = 0

for epoch in range(30):
    model.train()

    for X, y in train_loader:
        optimizer.zero_grad()

        logits = model(X)
        loss = loss_fn(logits, y)

        loss.backward()
        optimizer.step()

    model.eval()

    val_loss = 0.0

    with torch.no_grad():
        for X, y in val_loader:
            logits = model(X)
            val_loss += loss_fn(logits, y).item()

    val_loss /= len(val_loader)

    print(
        f"Epoch {epoch + 1}: "
        f"validation loss = {val_loss:.4f}"
    )

    if val_loss < best_val_loss:
        best_val_loss = val_loss
        wait = 0
        torch.save(
            model.state_dict(),
            "best_model.pt"
        )
    else:
        wait += 1

    if wait >= patience:
        break`,
    },

    {
      type: "heading",
      level: 2,
      text: "21. Common Mistakes",
    },

    {
      type: "bullets",
      items: [
        "Evaluating every model repeatedly on the final test set.",
        "Using validation data during preprocessing in a way that leaks information.",
        "Selecting a model based only on training accuracy.",
        "Assuming a larger model automatically generalizes better.",
        "Ignoring distribution differences between training and deployment.",
        "Using excessive regularization and causing underfitting.",
        "Stopping training without monitoring validation behavior.",
      ],
    },

    {
      type: "heading",
      level: 2,
      text: "22. Interview-Level Questions",
    },

    {
      type: "question",
      question: "What is generalization?",
      answer:
        "Generalization is the ability of a trained model to make useful predictions on previously unseen examples from the target data-generating process.",
    },

    {
      type: "question",
      question: "What is overfitting?",
      answer:
        "Overfitting occurs when training performance becomes substantially better than performance on unseen or validation data.",
    },

    {
      type: "question",
      question: "Why should the test set be protected?",
      answer:
        "Repeated decisions based on test performance can indirectly adapt the development process to the test set, weakening its role as an independent final evaluation.",
    },

    {
      type: "question",
      question: "What is early stopping?",
      answer:
        "It is a training strategy that stops optimization when validation performance stops improving, often restoring the best checkpoint.",
    },

    {
      type: "question",
      question: "What is weight decay?",
      answer:
        "Weight decay is a regularization mechanism that penalizes large model weights, commonly corresponding to an L2-style penalty.",
    },

    {
      type: "codingTask",
      title: "Generalization Experiment",
      task:
        "Train two MLPs on the same dataset: one with regularization and one without. Plot or record training and validation loss and compare their behavior.",
    },

    {
      type: "debuggingTask",
      title: "Find the Overfitting",
      task:
        "A model reaches 99% training accuracy but only 72% validation accuracy. Inspect the training process and identify at least three possible causes or interventions.",
    },

    {
      type: "summary",
      title: "Lesson Summary",
      points: [
        "Generalization is the central goal of machine learning.",
        "Training performance alone is insufficient.",
        "Validation data supports model and hyperparameter selection.",
        "The test set should remain isolated for final evaluation.",
        "Overfitting creates a gap between training and unseen-data performance.",
        "Weight decay is a classical regularization technique.",
        "Early stopping can limit excessive fitting.",
        "Data leakage can make validation results misleading.",
        "Distribution shift can cause deployment performance to differ from development performance.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "A neural network is successful when it learns patterns that transfer beyond the examples used during training. Generalization must therefore be monitored throughout the entire machine-learning workflow, not treated as an afterthought.",
    },
  ],
};

export default lesson10;