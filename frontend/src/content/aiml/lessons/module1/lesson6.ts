// lesson6.ts

export const lesson6 = {
  id: "aiml-module1-lesson6",
  lessonNumber: 6,
  title: "Generative AI & Modern AI Systems",
  moduleTitle: "Introduction to Artificial Intelligence",
  courseId: "aiml",
  moduleId: "module1",

  navigation: {
    courseId: "aiml",
    moduleId: "module1",
    currentLesson: 6,
    totalLessons: 10,

    previous: {
      label: "Lesson 05",
      href: "/lesson/aiml/module1/lesson5",
    },

    next: {
      label: "Lesson 07",
      href: "/lesson/aiml/module1/lesson7",
    },

    backToModule: {
      label: "Module 01",
      href: "/lesson/aiml/module1/about",
    },

    courseOverview: {
      label: "Course Overview",
      href: "/courses/aiml",
    },

    courseRoadmap: {
      label: "Course Roadmap",
      href: "/courses/aiml/roadmap",
    },
  },

  content: String.raw`
# Generative AI & Modern AI Systems

Generative Artificial Intelligence is one of the most important areas of
modern AI.

Traditional AI systems are often designed to classify, predict, detect,
recommend, or make decisions.

Generative AI systems can additionally create new content.

Examples include:

- text,
- source code,
- images,
- audio,
- video,
- structured data,
- summaries,
- explanations,
- transformations of existing content.

A simplified view is:

\`\`\`
Input / Prompt
      ↓
Generative Model
      ↓
Generated Output
\`\`\`

Modern AI applications are rarely just a model by itself.

A complete AI application can combine:

\`\`\`
User Interface
      ↓
Backend
      ↓
Application Logic
      ↓
Data
      ↓
AI Model
      ↓
Validation
      ↓
Response
\`\`\`

This lesson introduces Generative AI and the architecture of modern
AI-powered applications.

Advanced topics such as tokenization, embeddings, transformers,
retrieval-augmented generation, fine-tuning, model inference,
AI agents, and LLM evaluation are intentionally reserved for the
specialized courses later in this learning path.

---

# 1. What Is Generative AI?

Generative AI refers to AI systems that can create new content based on
learned patterns and the information supplied as input.

For example:

\`\`\`
Prompt
  ↓
Generative AI System
  ↓
Generated Explanation
\`\`\`

A user might provide:

\`\`\`
Explain binary search to a beginner.
\`\`\`

The system can generate an explanation based on the request.

The important difference is that the system is producing an output rather
than simply selecting one fixed response.

---

# 2. Generation vs Classification

Consider a classification system.

Input:

\`\`\`
"This product arrived damaged."
\`\`\`

Output:

\`\`\`
Complaint
\`\`\`

The system selects a category.

Now consider a generative system.

Input:

\`\`\`
Write a professional response to this complaint.
\`\`\`

Output:

\`\`\`
A newly generated response.
\`\`\`

Therefore:

\`\`\`
Classification
Input → Category
\`\`\`

while:

\`\`\`
Generation
Input → New Content
\`\`\`

Both are AI tasks, but their objectives are different.

---

# 3. Generation vs Prediction

Prediction usually means estimating a value, class, probability, or
other target.

For example:

\`\`\`
Customer Data
      ↓
ML Model
      ↓
Purchase Probability
\`\`\`

The output could be:

\`\`\`
0.82
\`\`\`

Generation instead produces content.

For example:

\`\`\`
Prompt
  ↓
Generative Model
  ↓
Product Description
\`\`\`

The output could be a paragraph of text.

A modern AI application may use both prediction and generation.

---

# 4. Examples of Generative AI

Generative AI can work with many types of content.

## Text Generation

Examples:

- explanations,
- summaries,
- reports,
- emails,
- documentation,
- question generation.

## Code Generation

Examples:

- functions,
- SQL queries,
- test cases,
- configuration,
- documentation.

## Image Generation

Examples:

- illustrations,
- concept designs,
- visual variations.

## Audio Generation

Examples:

- speech,
- sound,
- other audio content.

## Video Generation

Examples:

- generated scenes,
- animations,
- visual content.

## Structured Content Generation

For example:

\`\`\`json
{
  "topic": "Machine Learning",
  "level": "beginner",
  "duration": 30
}
\`\`\`

Structured output is especially useful when AI is connected to software.

---

# 5. What Is a Generative Model?

A generative model is a model designed to produce outputs based on its
learned patterns and provided inputs.

Conceptually:

\`\`\`
Input
  ↓
Model
  ↓
Generated Output
\`\`\`

The model may have been trained using a very large collection of examples.

During inference, the model receives new input and generates an output.

Therefore:

\`\`\`
Training
   ↓
Learned Model
   ↓
Inference
   ↓
Generated Output
\`\`\`

Training and inference are different stages.

---

# 6. Training vs Inference

During training:

\`\`\`
Large Dataset
      ↓
Learning Process
      ↓
Model Parameters
      ↓
Trained Model
\`\`\`

During inference:

\`\`\`
New Input
      ↓
Trained Model
      ↓
Output
\`\`\`

For example, a generative model may be trained before users ever interact
with it.

When a user enters a prompt, the deployed model performs inference.

---

# 7. What Is a Prompt?

A prompt is the input or instruction given to a generative AI system.

A simple prompt:

\`\`\`
Explain recursion.
\`\`\`

A more specific prompt:

\`\`\`
Explain recursion to a beginner.

Requirements:
- use simple language
- include one example
- explain the base case
\`\`\`

The second prompt provides more context and constraints.

Prompt design becomes especially important when building applications
around generative models.

Advanced prompt-engineering techniques are covered later in the
Generative AI & LLM Engineering course.

---

# 8. Input, Context and Output

A useful abstraction for a modern generative system is:

\`\`\`
Instruction
     +
Context
     +
Input
     ↓
Generative Model
     ↓
Output
\`\`\`

For example:

\`\`\`
Instruction:
Summarize the lesson.

Context:
Lesson content.

Input:
Student request.

        ↓

Generative Model

        ↓

Summary
\`\`\`

The quality and relevance of the output can depend strongly on the
information supplied to the model.

---

# 9. Why Context Matters

Consider:

\`\`\`
Explain it.
\`\`\`

The instruction is ambiguous.

Now consider:

\`\`\`
Explain machine learning to a beginner using
one practical example.
\`\`\`

This gives the system more information about:

- topic,
- audience,
- expected complexity,
- desired format.

This does not guarantee correctness.

It simply gives the model more useful information about the task.

---

# 10. Generative AI Is Not a Database

A database generally stores structured information that can be retrieved.

For example:

\`\`\`
Student ID
Course ID
Completion Status
\`\`\`

A generative model works differently.

It generates an output based on its learned patterns and provided input.

Therefore:

\`\`\`
Database
→ Retrieve Stored Information
\`\`\`

while:

\`\`\`
Generative Model
→ Generate Output
\`\`\`

Modern applications can combine both.

---

# 11. Retrieval and Generation

Suppose a student asks:

\`\`\`
What is the definition of overfitting
according to this course?
\`\`\`

A system could first retrieve relevant course content.

\`\`\`
Question
   ↓
Search / Retrieval
   ↓
Relevant Course Content
   ↓
Generative Model
   ↓
Answer
\`\`\`

This combination can be more useful than asking a model to answer without
providing the relevant source material.

Retrieval-Augmented Generation, or RAG, will be studied in detail later.

At this stage, understand the basic architecture:

\`\`\`
Retrieve
   ↓
Provide Context
   ↓
Generate
\`\`\`

---

# 12. What Is Hallucination?

A generative AI system can sometimes produce information that sounds
reasonable but is incorrect or unsupported.

This is commonly called a hallucination.

For example, a model might generate a realistic-looking reference to a
research paper that does not actually exist.

Therefore:

\`\`\`
Generated
      ≠
Guaranteed Correct
\`\`\`

This is one of the most important limitations of Generative AI.

---

# 13. Why Hallucinations Matter

Imagine a student asks:

\`\`\`
Who invented a particular algorithm?
\`\`\`

If the model gives an incorrect answer, the response may still sound
confident.

A user who does not verify the answer may believe it.

Therefore AI applications should consider:

- source verification,
- retrieval,
- validation,
- testing,
- human review where appropriate.

---

# 14. AI Output Should Be Treated as Untrusted Data

A useful engineering principle is:

\`\`\`
AI Output
    ↓
Validation
    ↓
Application
\`\`\`

Do not assume that generated output is automatically:

- correct,
- complete,
- safe,
- valid,
- compatible with the application's requirements.

For critical workflows, additional validation and review may be required.

---

# 15. Output Validation

Suppose an application expects:

\`\`\`json
{
  "course": "Python",
  "duration": 30,
  "priority": 1
}
\`\`\`

The application can validate:

- required fields,
- data types,
- allowed values,
- numerical ranges,
- formatting.

Conceptually:

\`\`\`
AI Output
    ↓
Schema Validation
    ↓
Business Rules
    ↓
Application
\`\`\`

---

# 16. Practical Python — Validate Structured Output

We can demonstrate the idea using ordinary Python.

\`\`\`python
response = {
    "course": "Python",
    "duration": 30,
    "priority": 1
}


required_fields = [
    "course",
    "duration",
    "priority"
]


valid = True


for field in required_fields:

    if field not in response:
        valid = False
        print("Missing field:", field)


if not isinstance(response.get("course"), str):
    valid = False

if not isinstance(response.get("duration"), int):
    valid = False

if not isinstance(response.get("priority"), int):
    valid = False


if valid:
    print("Valid response")
else:
    print("Invalid response")
\`\`\`

Output:

\`\`\`
Valid response
\`\`\`

This is not a generative model.

It demonstrates the application-side validation that can surround a model.

---

# 17. Detecting Invalid Output

Consider:

\`\`\`python
response = {
    "course": "Python",
    "duration": "thirty",
    "priority": 1
}


if not isinstance(response.get("duration"), int):
    print("Invalid duration")
\`\`\`

Output:

\`\`\`
Invalid duration
\`\`\`

The model output may be meaningful to a human but invalid for the
application.

Therefore machine-readable outputs must be validated.

---

# 18. Structured Output

Free-form text:

\`\`\`
Python would be a useful course because...
\`\`\`

Structured output:

\`\`\`json
{
  "course": "Python",
  "reason": "Useful for AI development",
  "priority": 1
}
\`\`\`

Structured output makes it easier for software to:

- parse the result,
- validate fields,
- store the information,
- trigger actions,
- display information.

---

# 19. Practical Python — Structured Recommendation

\`\`\`python
recommendation = {
    "course": "Python",
    "reason": "Useful for AI development",
    "priority": 1
}


print("Course:", recommendation["course"])
print("Reason:", recommendation["reason"])
print("Priority:", recommendation["priority"])
\`\`\`

Output:

\`\`\`
Course: Python
Reason: Useful for AI development
Priority: 1
\`\`\`

This demonstrates how structured AI output can become application data.

---

# 20. Validating Ranges

Suppose priority must be between 1 and 5.

\`\`\`python
priority = recommendation.get("priority")


if isinstance(priority, int) and 1 <= priority <= 5:
    print("Valid priority")
else:
    print("Invalid priority")
\`\`\`

This is a simple example of business-rule validation.

---

# 21. Modern AI Application Architecture

A practical AI application can look like:

\`\`\`
User
 ↓
Frontend
 ↓
Backend API
 ↓
Input Validation
 ↓
Application Logic
 ↓
AI Model
 ↓
Output Validation
 ↓
Business Rules
 ↓
Response
 ↓
Frontend
 ↓
User
\`\`\`

The AI model is only one part of the complete system.

---

# 22. Model vs AI Application

This distinction is fundamental.

A model performs inference.

An application provides the surrounding system.

For example:

\`\`\`
Model
 ↓
Generated Response
\`\`\`

is not a complete product.

A complete product may contain:

\`\`\`
User Interface
      ↓
Authentication
      ↓
Backend
      ↓
Database
      ↓
AI Model
      ↓
Validation
      ↓
Monitoring
      ↓
User Interface
\`\`\`

Therefore:

\`\`\`
AI Application
=
Model
+
Software
+
Data
+
Infrastructure
+
Validation
\`\`\`

---

# 23. Practical Python — Simulating an AI Pipeline

We can represent the architecture with Python functions.

\`\`\`python
def validate_input(user_input):
    return (
        isinstance(user_input, str)
        and bool(user_input.strip())
    )


def generate_response(user_input):
    return f"Generated response for: {user_input}"


def validate_output(response):
    return (
        isinstance(response, str)
        and bool(response.strip())
    )


def ai_application(user_input):

    if not validate_input(user_input):
        return "Invalid input"

    response = generate_response(user_input)

    if not validate_output(response):
        return "Invalid AI output"

    return response


print(
    ai_application(
        "Explain machine learning"
    )
)
\`\`\`

Output:

\`\`\`
Generated response for: Explain machine learning
\`\`\`

The generation function is only a placeholder.

In a real application, this stage could communicate with an AI model
through an appropriate interface.

The important concept is the complete pipeline around the model.

---

# 24. Input Validation

AI applications should validate user input before sending it to a model
when appropriate.

Example:

\`\`\`python
def validate_prompt(prompt):

    if not isinstance(prompt, str):
        return False

    if not prompt.strip():
        return False

    if len(prompt) > 5000:
        return False

    return True


prompt = "Explain neural networks"


if validate_prompt(prompt):
    print("Input accepted")
else:
    print("Invalid input")
\`\`\`

Output:

\`\`\`
Input accepted
\`\`\`

Input validation helps prevent malformed requests and supports predictable
application behavior.

---

# 25. Output Validation

Output validation can check whether the generated result satisfies the
application requirements.

For text:

\`\`\`python
def validate_answer(answer):

    if not isinstance(answer, str):
        return False

    if not answer.strip():
        return False

    return True
\`\`\`

For structured data, validation can check fields and data types.

Therefore:

\`\`\`
User Input
    ↓
Input Validation
    ↓
AI Model
    ↓
Output Validation
    ↓
Application
\`\`\`

---

# 26. Application Rules Still Matter

Suppose a generative model produces:

\`\`\`json
{
  "action": "delete_account"
}
\`\`\`

The application should not automatically execute the action.

It should apply business and security rules.

Conceptually:

\`\`\`
AI Output
    ↓
Validation
    ↓
Authorization
    ↓
Business Rules
    ↓
Allowed?
 /      \
Yes      No
 ↓        ↓
Action   Reject
\`\`\`

This is an important principle for AI-powered applications.

---

# 27. Practical Python — Allowed Actions

\`\`\`python
allowed_actions = {
    "show_lesson",
    "generate_summary",
    "recommend_course"
}


response = {
    "action": "recommend_course"
}


if response.get("action") in allowed_actions:
    print("Allowed action")
else:
    print("Blocked action")
\`\`\`

Output:

\`\`\`
Allowed action
\`\`\`

The application controls which actions are permitted.

---

# 28. Hybrid AI Systems

Modern AI applications can combine multiple techniques.

For example:

\`\`\`
Rules
 +
Search
 +
Machine Learning
 +
Deep Learning
 +
Generative AI
\`\`\`

Different components can solve different parts of the problem.

A system might use:

- rules for deterministic decisions,
- search for retrieving information,
- machine learning for prediction,
- deep learning for complex perception,
- generative AI for content generation.

---

# 29. Example — AI Learning Platform

Consider an AI-powered learning platform.

It could use:

### Traditional Programming

For:

- authentication,
- permissions,
- course navigation,
- completion rules.

### Search / Retrieval

For:

- finding relevant lessons,
- retrieving course content,
- locating documentation.

### Machine Learning

For:

- recommendation,
- prediction,
- learner analytics.

### Deep Learning

For:

- advanced language understanding,
- image or speech processing.

### Generative AI

For:

- explanations,
- summaries,
- practice questions,
- personalized learning content.

This demonstrates how multiple AI approaches can coexist in one
application.

---

# 30. Hybrid Architecture

A simplified architecture:

\`\`\`
                         User
                           ↓
                      Application
                           ↓
              ┌────────────┼────────────┐
              ↓            ↓            ↓
            Rules        Search         ML
              ↓            ↓            ↓
              └────────────┼────────────┘
                           ↓
                    Generative AI
                           ↓
                      Validation
                           ↓
                         Output
\`\`\`

Real architectures can be much more complex.

The important concept is that AI systems are often combinations of
different components.

---

# 31. Foundation Models

Modern Generative AI often uses large pretrained models capable of
supporting multiple tasks.

These are commonly called foundation models.

A simplified idea is:

\`\`\`
Large-Scale Training
        ↓
General-Purpose Model
        ↓
Multiple Applications
\`\`\`

A single underlying model can potentially support:

- summarization,
- question answering,
- text transformation,
- coding,
- classification,
- generation.

The internal training process and architectures of these models will be
covered later.

---

# 32. Large Language Models

Large Language Models, or LLMs, are models designed primarily for working
with language and text-related tasks.

A simplified workflow is:

\`\`\`
Text Input
    ↓
Language Model
    ↓
Generated Text
\`\`\`

LLMs can support applications such as:

- question answering,
- summarization,
- coding assistance,
- explanation,
- text transformation,
- conversational interfaces.

The detailed concepts behind LLMs are intentionally deferred to the
Generative AI & LLM Engineering course.

---

# 33. Multimodal AI

Modern AI systems can work with multiple types of information.

Examples:

\`\`\`
Text
Image
Audio
Video
Code
Structured Data
\`\`\`

A multimodal system might receive:

\`\`\`
Image + Question
       ↓
AI System
       ↓
Text Explanation
\`\`\`

For example:

\`\`\`
Input:
Image of a circuit

Question:
"Explain what this circuit does."

        ↓

Generated Explanation
\`\`\`

Multimodal AI is an important direction in modern AI systems.

---

# 34. AI as a Software Component

Modern applications increasingly treat AI as one component of a larger
software system.

A simplified architecture is:

\`\`\`
Frontend
   ↓
Backend API
   ↓
AI Service
   ↓
Model
   ↓
Result
\`\`\`

The AI service may also communicate with:

- databases,
- search systems,
- files,
- external APIs,
- application tools.

Therefore modern AI development requires both AI knowledge and software
engineering knowledge.

---

# 35. Reliability

A production AI system should consider:

\`\`\`
Accuracy
Reliability
Consistency
Latency
Cost
Security
Privacy
Safety
\`\`\`

A powerful model does not automatically create a reliable application.

The surrounding system must also be designed properly.

---

# 36. Human Oversight

Some AI systems should include human review.

For example:

\`\`\`
AI Output
    ↓
Risk Check
    ↓
 ┌──────────────┐
 ↓              ↓
Low Risk      High Risk
 ↓              ↓
Automatic      Human Review
Processing
\`\`\`

Human oversight is particularly important when AI outputs can affect
important decisions.

The exact level of oversight depends on the application and its risks.

---

# 37. Generative AI Does Not Replace Software Engineering

A common misconception is:

\`\`\`
Prompt
 ↓
AI
 ↓
Complete Application
\`\`\`

Real systems require much more.

A professional development process can look like:

\`\`\`
Requirements
      ↓
System Design
      ↓
Application Development
      ↓
AI Integration
      ↓
Validation
      ↓
Testing
      ↓
Deployment
      ↓
Monitoring
\`\`\`

Generative AI can assist developers, but engineering principles remain
essential.

---

# 38. AI Output and Security

AI-generated content can sometimes contain:

- incorrect code,
- unsafe commands,
- invalid configuration,
- unexpected data,
- malformed structured output.

Therefore applications should validate generated outputs before using
them in sensitive workflows.

For example:

\`\`\`
Generated Code
     ↓
Syntax Check
     ↓
Testing
     ↓
Security Review
     ↓
Use
\`\`\`

The generated result should not automatically be executed simply because
a model produced it.

---

# 39. Practical Experiment — Build a Generation Pipeline

Create a Python application containing these stages:

\`\`\`
Input
 ↓
Input Validation
 ↓
Generation
 ↓
Output Validation
 ↓
Final Response
\`\`\`

Use a simple Python function as the generation placeholder.

Test the system with:

- valid input,
- empty input,
- non-string input,
- invalid generated output.

Record what happens at every stage.

---

# 40. Practical Experiment — Structured AI Output

Create a Python dictionary representing an AI-generated recommendation.

\`\`\`python
recommendation = {
    "topic": "Machine Learning",
    "summary": "A short explanation of machine learning.",
    "confidence": 0.85
}
\`\`\`

Write validation code that checks:

- topic exists,
- summary exists,
- confidence exists,
- topic is a string,
- summary is a string,
- confidence is numeric,
- confidence is between 0 and 1.

---

# 41. Practical Experiment — Hybrid AI Design

Design a system containing:

\`\`\`
Rule-Based Component
Search Component
Machine Learning Component
Generative AI Component
\`\`\`

Choose a real-world application.

For each component, identify:

- input,
- processing,
- output,
- reason for using it.

Then draw the complete architecture.

---

# 42. Practical Task — Generation vs Prediction

Create two examples.

### Example A

A system predicts whether an email is spam.

### Example B

A system generates a response to an email.

For each example, explain:

- input,
- output,
- task type,
- possible validation requirements.

---

# 43. Practical Task — AI Application Pipeline

Design a pipeline for an:

**AI Study Assistant**

Include:

\`\`\`
Student Question
      ↓
Input Validation
      ↓
Context Retrieval
      ↓
Generative Model
      ↓
Output Validation
      ↓
Response
\`\`\`

Explain the purpose of each stage.

---

# 44. Practical Task — Structured Output Validator

Create a Python validator for:

\`\`\`json
{
  "topic": "Machine Learning",
  "summary": "A short explanation...",
  "confidence": 0.85
}
\`\`\`

Validate:

- topic,
- summary,
- confidence.

The confidence value must satisfy:

\`\`\`
0 <= confidence <= 1
\`\`\`

Test the validator with both valid and invalid values.

---

# 45. Challenge — AI Learning Assistant

Design a conceptual application called:

**AI Learning Assistant**

The system should:

1. receive a student question,
2. validate the input,
3. identify the relevant topic,
4. retrieve supporting information,
5. provide context to a generative model,
6. generate an explanation,
7. validate the output,
8. return the explanation.

Architecture:

\`\`\`
Student
   ↓
Question
   ↓
Input Validation
   ↓
Topic Identification
   ↓
Information Retrieval
   ↓
Generative Model
   ↓
Output Validation
   ↓
Explanation
   ↓
Student
\`\`\`

Implement a simplified Python version using separate functions.

The model itself can be represented by a placeholder function.

The goal is to understand the architecture of an AI application rather
than build a large language model from scratch.

---

# 46. Industry Perspective

Modern AI development is moving from isolated models toward complete
AI-powered applications.

A modern AI engineer may need to understand:

\`\`\`
Python
Data
Machine Learning
Deep Learning
Generative AI
APIs
Databases
Backend Systems
Cloud Infrastructure
Evaluation
Security
Responsible AI
\`\`\`

The model is only one part of the complete engineering system.

This is why the CloudLearn AI learning path separates these subjects
into specialized courses.

---

# Common Mistakes

## Mistake 1 — Generative AI Means Random Text

Incorrect.

Generative systems produce outputs based on learned patterns and the
provided input and context.

---

## Mistake 2 — Generated Information Is Always Correct

Incorrect.

Generative systems can produce inaccurate or unsupported information.

---

## Mistake 3 — A Model Is a Complete AI Application

Incorrect.

A production application requires surrounding software, data handling,
validation, security, and infrastructure.

---

## Mistake 4 — Better Prompts Guarantee Correct Answers

Incorrect.

Prompt quality can improve relevance and usefulness, but it cannot
guarantee factual correctness.

---

## Mistake 5 — AI Output Can Be Trusted Automatically

Incorrect.

AI output should be validated before being used in important workflows.

---

## Mistake 6 — Generative AI and Deep Learning Are Identical

Incorrect.

Many modern generative systems use Deep Learning, but Generative AI and
Deep Learning describe different concepts.

---

## Mistake 7 — Retrieval and Generation Are the Same

Incorrect.

Retrieval obtains existing information.

Generation creates new output.

Modern applications can combine both.

---

## Mistake 8 — AI Can Replace All Application Logic

Incorrect.

Rules, validation, authentication, authorization, databases, testing,
and other software components remain important.

---

# Quick Check

### Question 1

What is Generative AI?

Answer:

Generative AI refers to AI systems capable of generating new content such
as text, code, images, audio, video, or structured information.

---

### Question 2

How is generation different from classification?

Answer:

Classification predicts or selects a category, while generation produces
new content.

---

### Question 3

What is a prompt?

Answer:

A prompt is an input or instruction provided to a generative AI system.

---

### Question 4

Why does context matter?

Answer:

Context provides additional information and constraints that can help a
model produce a more relevant response.

---

### Question 5

Are generated outputs always correct?

Answer:

No. Generative AI systems can produce inaccurate or unsupported
information.

---

### Question 6

What is hallucination?

Answer:

A hallucination is an AI-generated output that appears plausible but is
incorrect, unsupported, or not grounded in reliable information.

---

### Question 7

Why is output validation important?

Answer:

Because generated output can be incorrect, malformed, unsafe, or
incompatible with application requirements.

---

### Question 8

What is structured output?

Answer:

Structured output is information generated in a defined format, such as
JSON, that can be processed more reliably by software.

---

### Question 9

What is the difference between retrieval and generation?

Answer:

Retrieval obtains existing information, while generation creates new
content.

---

### Question 10

What is a hybrid AI system?

Answer:

A hybrid AI system combines multiple approaches such as rules, search,
machine learning, deep learning, and Generative AI.

---

### Question 11

What is the difference between a model and an AI application?

Answer:

A model performs inference, while an AI application includes the model
and the surrounding software, data, validation, infrastructure, and
business logic.

---

### Question 12

Why can human oversight be necessary?

Answer:

Because AI outputs can be uncertain or incorrect, and some applications
require human judgment before important actions are taken.

---

# Key Takeaways

- Generative AI creates new content.
- Generation is different from classification and prediction.
- Prompts provide instructions or input to generative systems.
- Context can improve the relevance of generated outputs.
- Generative AI systems can work with text, code, images, audio, video,
  and structured information.
- Training creates or updates a model, while inference uses the trained
  model to produce outputs.
- Generative AI can produce incorrect or unsupported information.
- AI output should be treated as untrusted data until appropriately
  validated.
- Structured output makes AI results easier for software applications
  to process.
- Retrieval obtains existing information, while generation creates new
  content.
- Modern systems can combine retrieval and generation.
- Hybrid AI systems can combine rules, search, machine learning,
  deep learning, and Generative AI.
- Foundation models can support multiple applications and tasks.
- Large Language Models are an important part of modern Generative AI.
- Multimodal AI can work with multiple forms of information.
- An AI model is only one component of a complete AI application.
- Input validation, output validation, security, testing, and monitoring
  are important parts of AI engineering.
- Human oversight may be necessary for high-risk or important workflows.
- Generative AI is a powerful technology, but it does not replace
  software engineering.

The next lesson will examine how AI is applied to real-world problems
across industries and how to identify the AI technique being used.
`,

  practice: [
    "Build a Python program that distinguishes prediction tasks from generation tasks.",
    "Create a simple input-validation pipeline for an AI application.",
    "Build a structured-output validator using Python dictionaries.",
    "Create a simplified AI application pipeline containing input validation, generation, and output validation.",
    "Design a hybrid AI system combining rules, search, machine learning, and Generative AI.",
    "Analyze a real-world Generative AI application and identify its input, model, output, validation, and human-oversight components.",
    "Build a simplified AI Learning Assistant using Python functions.",
    "Experiment with valid and invalid structured outputs.",
    "Create a confidence-value validator that accepts values only between 0 and 1.",
    "Design an architecture that combines retrieval with generation.",
  ],

  quickCheck: [
    {
      question: "What is Generative AI?",
      answer:
        "Generative AI refers to AI systems capable of generating new content such as text, code, images, audio, video, or structured information.",
    },
    {
      question: "How is generation different from classification?",
      answer:
        "Classification predicts or selects a category, while generation produces new content.",
    },
    {
      question: "What is a prompt?",
      answer:
        "A prompt is an input or instruction provided to a generative AI system.",
    },
    {
      question: "Why does context matter?",
      answer:
        "Context provides additional information and constraints that can help a model produce a more relevant response.",
    },
    {
      question: "Are generated outputs always correct?",
      answer:
        "No. Generative AI systems can produce inaccurate or unsupported information.",
    },
    {
      question: "What is hallucination?",
      answer:
        "A hallucination is an AI-generated output that appears plausible but is incorrect, unsupported, or not grounded in reliable information.",
    },
    {
      question: "Why is output validation important?",
      answer:
        "Because generated output can be incorrect, malformed, unsafe, or incompatible with application requirements.",
    },
    {
      question: "What is structured output?",
      answer:
        "Structured output is information generated in a defined format, such as JSON, that can be processed more reliably by software.",
    },
    {
      question: "What is the difference between retrieval and generation?",
      answer:
        "Retrieval obtains existing information, while generation creates new content.",
    },
    {
      question: "What is a hybrid AI system?",
      answer:
        "A hybrid AI system combines multiple approaches such as rules, search, machine learning, deep learning, and Generative AI.",
    },
    {
      question: "What is the difference between a model and an AI application?",
      answer:
        "A model performs inference, while an AI application includes the model and the surrounding software, data, validation, infrastructure, and business logic.",
    },
    {
      question: "Why can human oversight be necessary?",
      answer:
        "Because AI outputs can be uncertain or incorrect, and some applications require human judgment before important actions are taken.",
    },
  ],

  completion: {
    previous: "/lesson/aiml/module1/lesson5",
    next: "/lesson/aiml/module1/lesson7",
    backToModule: "/lesson/aiml/module1/about",
  },
};