export const lesson = {
  id: "lesson19",
  title: "Computer Vision Model Optimization and Deployment",
  subtitle:
    "Turning a trained vision model into an efficient inference system",
  duration: "140–170 min",
  difficulty: "Advanced",

  sections: [
    {
      type: "heading",
      title: "1. Introduction",
    },
    {
      type: "paragraph",
      text:
        "Training a model is only one part of a computer-vision project. A practical system must also load the model efficiently, preprocess inputs consistently, perform inference, post-process predictions, and expose the results to an application.",
    },

    {
      type: "heading",
      title: "2. Training vs Inference",
    },
    {
      type: "paragraph",
      text:
        "Training requires gradients, optimizer state, repeated dataset passes, and parameter updates. Inference only needs the trained model and the computation required to generate predictions.",
    },

    {
      type: "heading",
      title: "3. Evaluation Mode",
    },
    {
      type: "code",
      language: "python",
      code: `model.eval()

with torch.no_grad():
    output = model(image)`,
    },

    {
      type: "heading",
      title: "4. Why `eval()` Matters",
    },
    {
      type: "paragraph",
      text:
        "Layers such as dropout and batch normalization behave differently during training and evaluation. A deployment pipeline should explicitly put the model into evaluation mode.",
    },

    {
      type: "heading",
      title: "5. Why `no_grad()` Matters",
    },
    {
      type: "paragraph",
      text:
        "Inference does not require gradient graphs. Disabling gradient tracking reduces unnecessary memory consumption and computation.",
    },

    {
      type: "heading",
      title: "6. Complete Inference Pipeline",
    },
    {
      type: "process",
      steps: [
        "Receive image",
        "Decode image",
        "Resize",
        "Normalize",
        "Convert to tensor",
        "Move to device",
        "Run model",
        "Decode predictions",
        "Apply confidence threshold",
        "Apply NMS if required",
        "Format response",
      ],
    },

    {
      type: "heading",
      title: "7. Device Selection",
    },
    {
      type: "code",
      language: "python",
      code: `device = torch.device(
    "cuda"
    if torch.cuda.is_available()
    else "cpu"
)

model.to(device)`,
    },

    {
      type: "heading",
      title: "8. Input Device",
    },
    {
      type: "code",
      language: "python",
      code: `image = image.to(device)

with torch.no_grad():
    prediction = model(image)`,
    },

    {
      type: "heading",
      title: "9. Preprocessing Must Match Training",
    },
    {
      type: "paragraph",
      text:
        "A model trained with normalization, resizing, and a particular channel ordering expects compatible preprocessing during inference. Changing preprocessing can significantly affect predictions.",
    },

    {
      type: "heading",
      title: "10. Batch Inference",
    },
    {
      type: "paragraph",
      text:
        "Processing multiple images in one batch can improve throughput on suitable hardware. However, larger batches increase memory requirements and may not reduce latency for individual requests.",
    },

    {
      type: "heading",
      title: "11. Latency vs Throughput",
    },
    {
      type: "paragraph",
      text:
        "Latency describes how long one request takes. Throughput describes how many requests can be processed over a period. A deployment system may optimize for one or the other depending on its application.",
    },

    {
      type: "heading",
      title: "12. Model Size",
    },
    {
      type: "paragraph",
      text:
        "Large models may provide strong accuracy but consume more memory and require more computation. Deployment therefore requires balancing accuracy, latency, memory, and hardware availability.",
    },

    {
      type: "heading",
      title: "13. Parameter Count",
    },
    {
      type: "code",
      language: "python",
      code: `total = sum(
    p.numel()
    for p in model.parameters()
)

trainable = sum(
    p.numel()
    for p in model.parameters()
    if p.requires_grad
)

print("total:", total)
print("trainable:", trainable)`,
    },

    {
      type: "heading",
      title: "14. Model Serialization",
    },
    {
      type: "code",
      language: "python",
      code: `torch.save(
    model.state_dict(),
    "vision_model.pt"
)`,
    },

    {
      type: "heading",
      title: "15. Loading a Model",
    },
    {
      type: "code",
      language: "python",
      code: `model.load_state_dict(
    torch.load(
        "vision_model.pt",
        map_location=device
    )
)

model.eval()`,
    },

    {
      type: "heading",
      title: "16. Mixed Precision",
    },
    {
      type: "paragraph",
      text:
        "Lower-precision arithmetic can reduce memory usage and sometimes improve inference speed on compatible hardware. Numerical behavior should always be tested after changing precision.",
    },

    {
      type: "code",
      language: "python",
      code: `with torch.autocast(
    device_type="cuda",
    dtype=torch.float16
):
    output = model(image)`,
    },

    {
      type: "heading",
      title: "17. Quantization",
    },
    {
      type: "paragraph",
      text:
        "Quantization represents model values using lower numerical precision. It can reduce memory usage and may improve inference efficiency on supported hardware.",
    },

    {
      type: "heading",
      title: "18. Model Compilation",
    },
    {
      type: "code",
      language: "python",
      code: `model = torch.compile(model)`,
    },

    {
      type: "paragraph",
      text:
        "Compilation can optimize repeated model execution by transforming computation into a form better suited to the target runtime. Actual benefits depend on architecture and environment.",
    },

    {
      type: "heading",
      title: "19. Export Formats",
    },
    {
      type: "paragraph",
      text:
        "A production workflow may export models into runtime-specific formats. The important engineering principle is to verify that preprocessing, numerical behavior, and outputs remain compatible after export.",
    },

    {
      type: "heading",
      title: "20. API-Based Inference",
    },
    {
      type: "code",
      language: "python",
      code: `from fastapi import FastAPI, UploadFile

app = FastAPI()

@app.post("/predict")
async def predict(file: UploadFile):
    image_bytes = await file.read()

    image = preprocess_bytes(
        image_bytes
    )

    with torch.no_grad():
        output = model(image)

    return format_prediction(output)`,
    },

    {
      type: "heading",
      title: "21. Response Design",
    },
    {
      type: "code",
      language: "json",
      code: `{
  "predictions": [
    {
      "class": "vehicle",
      "confidence": 0.94,
      "box": [120, 80, 420, 350]
    }
  ]
}`,
    },

    {
      type: "heading",
      title: "22. Error Handling",
    },
    {
      type: "bullet",
      items: [
        "Invalid image format",
        "Corrupted upload",
        "Unexpected image dimensions",
        "Model loading failure",
        "GPU unavailable",
        "Out-of-memory condition",
        "Malformed prediction",
      ],
    },

    {
      type: "heading",
      title: "23. Logging",
    },
    {
      type: "paragraph",
      text:
        "A deployed vision service should record useful operational information such as inference duration, model version, request status, and error type without unnecessarily storing sensitive image data.",
    },

    {
      type: "heading",
      title: "24. Model Versioning",
    },
    {
      type: "paragraph",
      text:
        "A prediction should be traceable to the model version that produced it. Updating a model without version tracking makes debugging and comparison difficult.",
    },

    {
      type: "heading",
      title: "25. Performance Benchmark",
    },
    {
      type: "code",
      language: "python",
      code: `import time

start = time.perf_counter()

with torch.no_grad():
    output = model(image)

elapsed = time.perf_counter() - start

print(
    f"inference: {elapsed * 1000:.2f} ms"
)`,
    },

    {
      type: "heading",
      title: "26. Warm-Up",
    },
    {
      type: "paragraph",
      text:
        "The first inference may be slower because libraries, kernels, memory allocations, or compiled components may need initialization. Benchmarking should therefore include warm-up iterations.",
    },

    {
      type: "heading",
      title: "27. Production Checklist",
    },
    {
      type: "bullet",
      items: [
        "Model is in evaluation mode.",
        "Preprocessing exactly matches training.",
        "Input validation exists.",
        "Inference is performed without gradients.",
        "Post-processing is deterministic.",
        "Model version is recorded.",
        "Latency is measured.",
        "Failure cases are handled.",
        "Memory usage is monitored.",
      ],
    },

    {
      type: "heading",
      title: "28. Security Considerations",
    },
    {
      type: "paragraph",
      text:
        "An image-processing service should validate uploads, restrict file sizes, avoid unsafe file handling, control resource consumption, and avoid exposing internal model information unnecessarily.",
    },

    {
      type: "heading",
      title: "29. Interview Questions",
    },
    {
      type: "qa",
      question: "Why should inference use `model.eval()`?",
      answer:
        "Because some layers have different behavior during training and inference.",
    },
    {
      type: "qa",
      question: "Why use `torch.no_grad()`?",
      answer:
        "Inference does not need gradient computation, so disabling it reduces unnecessary memory and computation.",
    },
    {
      type: "qa",
      question: "What is latency?",
      answer:
        "The time required to process an individual inference request.",
    },

    {
      type: "heading",
      title: "30. Practical Project",
    },
    {
      type: "paragraph",
      text:
        "Take a trained image-classification or detection model and expose it through a simple inference API. Measure preprocessing time, model time, post-processing time, total latency, and memory usage.",
    },

    {
      type: "heading",
      title: "31. Summary",
    },
    {
      type: "bullet",
      items: [
        "Training and inference have different requirements.",
        "Evaluation mode is essential.",
        "Gradient tracking should normally be disabled during inference.",
        "Preprocessing must remain consistent.",
        "Model size affects deployment requirements.",
        "Latency and throughput should be measured rather than guessed.",
        "A production model requires monitoring and error handling.",
      ],
    },

    {
      type: "keyTakeaway",
      title: "Key Takeaway",
      text:
        "A computer-vision model becomes a usable AI system only when its inference pipeline, performance, reliability, validation, and deployment behavior are engineered alongside its accuracy.",
    },
  ],
};

export default lesson;