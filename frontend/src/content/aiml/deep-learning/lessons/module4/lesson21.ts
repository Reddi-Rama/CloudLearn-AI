const lesson21 = {
  id: "lesson21",
  title: "Transformers for Vision",
  description:
    "Learn how images can be converted into patch sequences and processed with Transformer encoders, including patch embedding, class tokens, positional embeddings, Transformer blocks, and Vision Transformer training.",
  duration: "110–130 min",
  difficulty: "Advanced",
  prerequisites: [
    "CNN fundamentals",
    "Self-attention",
    "Transformer architecture",
    "Image classification"
  ],

  sections: [
    {
      type: "intro",
      title: "Can Transformers Understand Images?",
      content: `
Transformers were originally developed for sequence processing.

Images are not naturally sequences of words.

However, an image can be divided into small patches.

Each patch can then be converted into a vector.

The image becomes:

image
↓
patches
↓
patch embeddings
↓
sequence
↓
Transformer encoder
↓
classification representation
↓
prediction

This approach is commonly called a Vision Transformer or ViT.
`
    },

    {
      type: "concept",
      title: "1. Why Convert Images into Patches?",
      content: `
Suppose an image has:

height = H
width = W
channels = C

Instead of treating every individual pixel as a separate token, the image is divided into patches.

If the patch size is:

P × P

then each patch contains:

C × P × P

values.

Each flattened patch becomes a vector.
`
    },

    {
      type: "formula",
      title: "2. Number of Image Patches",
      content: `
For an image with height H and width W and square patch size P:

number of patches
=
(H / P)(W / P)

For example:

H = 224
W = 224
P = 16

number of patches:

14 × 14 = 196
`
    },

    {
      type: "concept",
      title: "3. Patch Flattening",
      content: `
Suppose:

image channels = 3
patch size = 16 × 16

One patch contains:

3 × 16 × 16

values.

Flattening produces:

768 values.

A linear projection converts this vector into the Transformer hidden dimension.
`
    },

    {
      type: "code",
      language: "python",
      title: "Simple Patch Extraction",
      content: `
import torch

X = torch.randn(2, 3, 224, 224)

patch_size = 16

patches = X.unfold(
    2,
    patch_size,
    patch_size
).unfold(
    3,
    patch_size,
    patch_size
)

print(patches.shape)
`
    },

    {
      type: "concept",
      title: "4. Patch Embedding",
      content: `
Patch extraction and linear projection can be implemented efficiently using a convolution whose:

kernel size = patch size

stride = patch size

This produces non-overlapping image patches and projects them into the hidden dimension.
`
    },

    {
      type: "code",
      language: "python",
      title: "Patch Embedding Layer",
      content: `
from torch import nn

class PatchEmbedding(nn.Module):
    def __init__(
        self,
        img_size=224,
        patch_size=16,
        num_hiddens=768
    ):
        super().__init__()

        self.num_patches = (
            img_size // patch_size
        ) ** 2

        self.projection = nn.Conv2d(
            3,
            num_hiddens,
            kernel_size=patch_size,
            stride=patch_size
        )

    def forward(self, X):
        X = self.projection(X)

        return X.flatten(2).transpose(1, 2)
`
    },

    {
      type: "concept",
      title: "5. Patch Sequence Shape",
      content: `
For:

batch = 32
image = 224 × 224
patch = 16 × 16
hidden size = 768

there are:

196 patches.

Therefore:

input image:
(32, 3, 224, 224)

patch sequence:
(32, 196, 768)
`
    },

    {
      type: "concept",
      title: "6. The Class Token",
      content: `
Vision Transformers commonly prepend a learnable special token.

It is often represented as:

<cls>

The sequence becomes:

<cls>
patch1
patch2
...
patch196

Total sequence length:

197
`
    },

    {
      type: "concept",
      title: "7. Why Use a Class Token?",
      content: `
Through self-attention, the class token can interact with all image patches.

After the Transformer encoder, its representation acts as a global summary.

That representation can then be passed through a classification head.
`
    },

    {
      type: "concept",
      title: "8. Positional Embeddings for Images",
      content: `
The Transformer needs information about patch positions.

Without position information, the model could have difficulty distinguishing different spatial arrangements.

Therefore learnable or fixed positional representations are added to the patch sequence.
`
    },

    {
      type: "concept",
      title: "9. Vision Transformer Architecture",
      content: `
A simplified ViT is:

Image
↓
Patch Embedding
↓
Add <cls>
↓
Add Positional Embeddings
↓
Transformer Encoder Blocks
↓
Take <cls> representation
↓
Linear Classification Head
↓
Class prediction
`
    },

    {
      type: "concept",
      title: "10. Vision Transformer Encoder",
      content: `
The encoder is structurally similar to the Transformer encoder used for sequences.

Each block contains:

Multi-head self-attention
↓
Residual connection
↓
Normalization
↓
MLP
↓
Residual connection
↓
Normalization
`
    },

    {
      type: "concept",
      title: "11. GELU Activation",
      content: `
Vision Transformer MLPs commonly use GELU rather than ReLU.

GELU provides a smooth nonlinear activation.

Conceptually, it softly weights inputs based on their magnitude rather than applying a strict zero-or-positive threshold.
`
    },

    {
      type: "concept",
      title: "12. Dropout",
      content: `
Dropout can be applied within the Transformer MLP and attention-related components.

It randomly suppresses portions of the representation during training.

This can help regularize the model, particularly when the available dataset is limited.
`
    },

    {
      type: "concept",
      title: "13. Classification Head",
      content: `
After Transformer processing:

<cls> representation
↓
Linear layer
↓
Class logits

If the dataset has K classes, the output contains K logits.
`
    },

    {
      type: "code",
      language: "python",
      title: "Simple ViT Head",
      content: `
class ClassificationHead(nn.Module):
    def __init__(self, hidden_size, num_classes):
        super().__init__()

        self.output = nn.Linear(
            hidden_size,
            num_classes
        )

    def forward(self, X):
        cls_representation = X[:, 0]
        return self.output(cls_representation)
`
    },

    {
      type: "concept",
      title: "14. Complete ViT Skeleton",
      content: `
The complete architecture can be organized as:

PatchEmbedding
+
ClassToken
+
PositionalEmbedding
+
TransformerEncoder
+
ClassificationHead

This modular structure makes the model easier to test and extend.
`
    },

    {
      type: "code",
      language: "python",
      title: "Mini Vision Transformer",
      content: `
class MiniViT(nn.Module):
    def __init__(
        self,
        img_size,
        patch_size,
        hidden_size,
        num_heads,
        num_layers,
        num_classes
    ):
        super().__init__()

        self.patch = PatchEmbedding(
            img_size,
            patch_size,
            hidden_size
        )

        self.cls = nn.Parameter(
            torch.zeros(1, 1, hidden_size)
        )

        self.encoder_layer = (
            nn.TransformerEncoderLayer(
                d_model=hidden_size,
                nhead=num_heads,
                batch_first=True
            )
        )

        self.encoder = nn.TransformerEncoder(
            self.encoder_layer,
            num_layers=num_layers
        )

        self.head = nn.Linear(
            hidden_size,
            num_classes
        )

    def forward(self, X):
        X = self.patch(X)

        batch_size = X.size(0)

        cls = self.cls.expand(
            batch_size,
            -1,
            -1
        )

        X = torch.cat([cls, X], dim=1)

        X = self.encoder(X)

        return self.head(X[:, 0])
`
    },

    {
      type: "concept",
      title: "15. ViT vs CNN",
      content: `
CNNs naturally encode:

• Locality
• Shared filters
• Translation-related structure
• Hierarchical receptive fields

ViTs use:

• Patch tokens
• Global self-attention
• Learned relationships between patches

This means ViTs have weaker built-in image-specific inductive biases than conventional CNNs.
`
    },

    {
      type: "concept",
      title: "16. Why Dataset Size Matters",
      content: `
CNNs can perform well with comparatively smaller datasets because convolution provides useful assumptions about images.

Vision Transformers can benefit strongly from large-scale pretraining.

As model and dataset scale increase, attention-based image models can become highly competitive.
`
    },

    {
      type: "concept",
      title: "17. Global Relationships",
      content: `
A patch can potentially attend directly to distant patches.

For example:

patch containing an animal's head
↔
patch containing its body

The model can therefore represent long-range spatial relationships through attention.
`
    },

    {
      type: "concept",
      title: "18. Quadratic Attention Cost",
      content: `
If there are M patches, self-attention creates an M × M interaction structure.

Increasing image resolution increases the number of patches.

Therefore high-resolution images can create substantial attention computation and memory requirements.
`
    },

    {
      type: "concept",
      title: "19. Patch Size Trade-Off",
      content: `
Smaller patches:

• More tokens
• More detailed spatial information
• Higher attention cost

Larger patches:

• Fewer tokens
• Lower computation
• Less fine-grained spatial information

Patch size is therefore an important design parameter.
`
    },

    {
      type: "concept",
      title: "20. Training a Vision Transformer",
      content: `
A standard training loop includes:

1. Load image batch.
2. Normalize images.
3. Patchify images.
4. Run Transformer encoder.
5. Extract class representation.
6. Produce logits.
7. Compute cross-entropy.
8. Backpropagate.
9. Update parameters.
10. Evaluate on validation data.
`
    },

    {
      type: "concept",
      title: "21. Data Augmentation",
      content: `
Image augmentation can improve generalization.

Examples include:

• Random cropping
• Horizontal flipping
• Color transformations
• Resizing
• Random erasing

The exact augmentation strategy should match the dataset and task.
`
    },

    {
      type: "concept",
      title: "22. Evaluating ViT",
      content: `
Useful measurements include:

• Training loss
• Validation loss
• Classification accuracy
• Per-class accuracy
• Confusion matrix
• Inference time
• Parameter count
• Memory usage
`
    },

    {
      type: "concept",
      title: "23. ViT Attention Visualization",
      content: `
Attention matrices can be visualized to investigate which patches interact strongly.

Such visualizations can be useful for understanding model behavior.

However, attention maps should not automatically be interpreted as complete explanations of model decisions.
`
    },

    {
      type: "concept",
      title: "24. Higher-Resolution Images",
      content: `
Higher resolution means more patches.

For example:

224 × 224 with 16 × 16 patches:
196 patches

384 × 384 with 16 × 16 patches:
576 patches

The attention matrix therefore becomes much larger.
`
    },

    {
      type: "concept",
      title: "25. Beyond Basic ViT",
      content: `
Later vision Transformer designs introduce techniques for reducing computational cost and restoring useful spatial inductive biases.

Examples include hierarchical or window-based attention approaches.

The source discusses Swin Transformers as one approach to address the quadratic cost associated with image size.
`
    },

    {
      type: "concept",
      title: "26. CNN and ViT Hybrid Thinking",
      content: `
Modern computer vision does not have to choose between CNNs and Transformers absolutely.

Hybrid systems can combine:

CNN-style feature extraction
+
Transformer-style global interaction

This can provide useful local processing together with long-range relationships.
`
    },

    {
      type: "exercise",
      title: "Implementation Exercise",
      content: `
Build a Vision Transformer for a small image classification dataset.

Experiment with:

• Patch size
• Hidden dimension
• Number of attention heads
• Number of Transformer blocks
• Dropout
• Learning rate

Record validation accuracy and training time.
`
    },

    {
      type: "qa",
      question: "What is a patch in a Vision Transformer?",
      answer:
        "A small spatial region of an image that is flattened and projected into a vector representation treated similarly to a sequence token."
    },

    {
      type: "qa",
      question: "Why is a class token used?",
      answer:
        "It provides a learnable representation that can aggregate information from image patches through self-attention and then be used for classification."
    },

    {
      type: "qa",
      question: "Why does patch size matter?",
      answer:
        "It controls the number of tokens. Smaller patches provide more tokens and potentially finer spatial information but increase attention computation."
    },

    {
      type: "qa",
      question: "Why can CNNs have an advantage on smaller datasets?",
      answer:
        "Convolution introduces useful image-specific inductive biases such as locality and translation-related structure, reducing how much the model must learn from data."
    },

    {
      type: "summary",
      title: "Lesson Summary",
      content: `
Vision Transformers convert images into sequences of patch representations.

The pipeline is:

Image
↓
Patch embedding
↓
Class token
↓
Positional embeddings
↓
Transformer encoder
↓
Class representation
↓
Classification head

Important considerations include patch size, dataset scale, positional information, attention complexity, regularization, and training strategy.
`
    },

    {
      type: "takeaway",
      title: "Key Takeaway",
      content:
        "A Vision Transformer treats an image as a sequence of visual tokens. The Transformer can then learn relationships between distant image regions using the same attention principles used for sequence data."
    }
  ]
};

export default lesson21;