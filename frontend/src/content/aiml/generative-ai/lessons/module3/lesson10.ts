const lesson = {
  id: "lesson10",
  moduleId: "module3",
  lessonNumber: 10,

  title: "Prompt Engineering for Multimodal & Structured Outputs",

  description:
    "Learn how prompt engineering extends beyond plain text into images, documents, tables, structured JSON, schema-constrained responses, multimodal reasoning, and machine-readable AI outputs.",

  learningObjectives: [
    "Understand multimodal prompting.",
    "Understand how text and visual information can be combined in prompts.",
    "Design prompts for image and document understanding.",
    "Prompt models to extract information from documents and tables.",
    "Understand structured output generation.",
    "Design JSON-oriented prompts.",
    "Understand schema constraints.",
    "Handle missing and uncertain fields.",
    "Design prompts for classification and extraction.",
    "Understand machine-readable AI responses.",
    "Reduce formatting errors.",
    "Validate structured model output programmatically.",
    "Understand multimodal limitations and evaluation."
  ],

  sections: [

    {
      title: "1. From Text-Only Prompting to Multimodal Prompting",
      content: `
Traditional prompting primarily uses text.

Example:

"Explain binary search."

Multimodal systems can receive:

- Text
- Images
- Documents
- Charts
- Screenshots
- Tables
- Audio
- Video

A multimodal interaction can therefore look like:

User
 ↓
Text + Image
 ↓
Multimodal Model
 ↓
Interpretation
 ↓
Response

The prompt must explain what the model should do with each input modality.
`
    },

    {
      title: "2. What Is Multimodal Prompting?",
      content: `
Multimodal prompting means providing multiple forms of information to a model and specifying how they should be interpreted.

Example:

TEXT:
"Identify the network problem."

IMAGE:
[Network topology screenshot]

TASK:
"Inspect the topology and explain the likely configuration problem."

The model must combine:

Textual instructions
+
Visual evidence

The quality of the answer depends on both the prompt and the quality of the supplied information.
`
    },

    {
      title: "3. Multimodal Prompt Architecture",
      content: `
A useful structure is:

INSTRUCTIONS
      ↓
TASK
      ↓
TEXT CONTEXT
      ↓
VISUAL INPUT
      ↓
RELEVANT OBSERVATIONS
      ↓
EXPECTED OUTPUT
      ↓
VALIDATION

Example:

TASK:
Analyze the attached architecture diagram.

FOCUS:
Identify missing connections.

OUTPUT:
1. Observed components
2. Missing connection
3. Evidence
4. Recommended correction
`
    },

    {
      title: "4. Prompting for Images",
      content: `
Image prompts should describe the desired inspection task.

Weak:

"What is this?"

Strong:

"Inspect the attached circuit diagram. Identify the components, describe their connections, and determine whether the circuit contains an obvious wiring problem. Separate observations from conclusions."

The second prompt gives the model a reasoning structure.

A useful pattern is:

Observe
 ↓
Describe
 ↓
Interpret
 ↓
Conclude
`
    },

    {
      title: "5. Observation vs Interpretation",
      content: `
Multimodal systems can benefit from separating observations from conclusions.

Example:

OBSERVATION:
"The router interface is connected to the switch."

INTERPRETATION:
"The physical topology appears connected."

CONCLUSION:
"The displayed topology alone does not prove that the interface is correctly configured."

This distinction reduces the risk of treating uncertain visual interpretations as facts.
`
    },

    {
      title: "6. Prompting for Screenshots",
      content: `
Screenshots often contain UI information.

A useful prompt can request:

- Visible error
- Relevant text
- UI state
- Possible cause
- Next diagnostic step

Example:

"Analyze this VS Code screenshot. Identify the visible error message first. Then explain what it means. Do not assume unseen project files. Finally provide the next diagnostic commands."

This prevents the model from pretending it can see information outside the screenshot.
`
    },

    {
      title: "7. Prompting for Documents",
      content: `
Documents may contain:

- Paragraphs
- Tables
- Headings
- Footnotes
- Images
- Forms

A document extraction prompt should define exactly what information is needed.

Example:

"Extract the following fields from the document:
student_name
course
semester
total_marks
grade

Return JSON only.

If a field is not present, return null."
`
    },

    {
      title: "8. Table Understanding",
      content: `
Tables require attention to:

- Rows
- Columns
- Headers
- Units
- Missing values
- Merged cells

Example:

"Analyze the attached table. Identify the highest value in each category. Preserve the category names exactly as shown. Return the result as JSON."

The prompt should specify whether the model should:

- Read
- Compare
- Calculate
- Summarize
- Transform
`
    },

    {
      title: "9. Chart and Graph Prompting",
      content: `
Charts contain visual relationships.

A strong chart prompt should specify:

1. What to inspect.
2. What values to extract.
3. Whether approximate values are acceptable.
4. What calculations are required.
5. Desired output.

Example:

"Inspect the chart and identify the three categories with the highest values. Return category names and approximate values. Clearly mark values that are estimated."
`
    },

    {
      title: "10. Multimodal Uncertainty",
      content: `
Images may be:

- Blurry
- Cropped
- Low resolution
- Partially visible
- Ambiguous
- Missing labels

A good prompt should encourage uncertainty reporting.

Example:

"If a label cannot be read confidently, report it as uncertain rather than inventing the text."

This creates a useful distinction:

Known
Uncertain
Unavailable
`
    },

    {
      title: "11. Structured Outputs",
      content: `
Normal language output is flexible.

Machine systems often require structured data.

Example:

{
  "name": "John",
  "age": 20
}

A structured output prompt tells the model exactly how the result should be represented.

This is useful for:

- APIs
- Databases
- Automation
- Search
- Classification
- Data extraction
- UI rendering
`
    },

    {
      title: "12. Why Structured Output Matters",
      content: `
Suppose an application expects:

{
  "sentiment": "positive",
  "confidence": 0.92
}

But the model returns:

"The sentiment appears positive with approximately 92% confidence."

A human can understand it.

A program expecting JSON may fail.

Therefore:

Natural Language
       ↓
Human Friendly

Structured Output
       ↓
Machine Friendly
`
    },

    {
      title: "13. JSON Prompting",
      content: `
A basic JSON prompt can specify:

"Return valid JSON only.

Schema:
{
  "topic": "string",
  "difficulty": "string",
  "summary": "string"
}"

Additional requirements can include:

- No Markdown
- No explanatory text
- Exact property names
- Allowed enum values
- Null behavior
`
    },

    {
      title: "14. Schema Constraints",
      content: `
A schema defines the expected structure.

Example:

{
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer"
    }
  },
  "required": [
    "name",
    "age"
  ]
}

Schema validation provides a stronger contract than natural-language instructions alone.
`
    },

    {
      title: "15. Extraction Prompts",
      content: `
Extraction means converting unstructured information into structured fields.

Input:

"John Smith joined CloudLearn in 2025 and works as a frontend developer."

Extraction:

{
  "name": "John Smith",
  "company": "CloudLearn",
  "year": 2025,
  "role": "frontend developer"
}

The prompt should specify what happens when information is missing.

For example:

"Return null for fields that cannot be supported by the input."
`
    },

    {
      title: "16. Classification Prompts",
      content: `
Classification assigns an input to a predefined category.

Example categories:

bug
feature_request
question
complaint

Prompt:

"Classify the user message into exactly one of the following categories..."

The model should not invent new categories.

This can be enforced through allowed values.
`
    },

    {
      title: "17. Confidence and Uncertainty",
      content: `
Some systems request confidence estimates.

Example:

{
  "category": "bug",
  "confidence": 0.91
}

However, confidence values generated by a language model should not automatically be interpreted as statistically calibrated probabilities.

They are better treated as model-reported confidence signals unless separately calibrated and validated.
`
    },

    {
      title: "18. Multi-Field Extraction",
      content: `
A production extraction prompt can specify:

FIELD
Meaning of the field.

TYPE
Expected data type.

SOURCE
Where the value should come from.

MISSING VALUE
What to return if unavailable.

VALIDATION
Rules for acceptable values.

Example:

age:
integer
must be between 0 and 120
return null if unavailable
`
    },

    {
      title: "19. Structured Output Validation",
      content: `
The safest architecture is:

Model
 ↓
Raw Output
 ↓
Parser
 ↓
Schema Validator
 ↓
Valid?
 ├── YES → Application
 └── NO → Recovery / Retry / Error

The model should not be the final authority on whether its output is valid.

The application should validate it.
`
    },

    {
      title: "20. Retry Strategies",
      content: `
If structured output fails validation, an application may retry.

Example:

Attempt 1
 ↓
Invalid JSON
 ↓
Validation Error
 ↓
Retry with correction instruction
 ↓
Attempt 2
 ↓
Valid JSON

Retries should be bounded.

Otherwise:

Invalid output
 ↓
Retry
 ↓
Retry
 ↓
Retry
 ↓
...
`
    },

    {
      title: "21. Structured Output Error Categories",
      content: `
Common errors include:

1. Invalid JSON
2. Missing field
3. Wrong data type
4. Extra field
5. Invalid enum
6. Incorrect nesting
7. Truncated output
8. Unsupported value
9. Semantic inconsistency

Validation should identify which category occurred.
`
    },

    {
      title: "22. Multimodal Extraction Pipeline",
      content: `
A document intelligence pipeline can be:

Document
 ↓
Text / Image Extraction
 ↓
Multimodal Model
 ↓
Structured Prompt
 ↓
JSON Output
 ↓
Schema Validation
 ↓
Database
 ↓
Application

This pattern is useful for forms, invoices, reports, certificates, and other documents.
`
    },

    {
      title: "23. Multimodal Reasoning Workflow",
      content: `
A robust workflow is:

INPUT
 ↓
Identify visible information
 ↓
Extract relevant evidence
 ↓
Analyze relationships
 ↓
Apply requested reasoning
 ↓
State uncertainty
 ↓
Generate structured response

This reduces the tendency to jump directly from visual input to unsupported conclusions.
`
    },

    {
      title: "24. Prompting for OCR-Like Tasks",
      content: `
When asking a model to read text from an image:

"Transcribe only the visible text. Preserve line breaks where possible. Do not reconstruct text that cannot be read. Mark unreadable portions as [unclear]."

This is better than simply asking:

"Read the image."

because it defines how uncertainty should be handled.
`
    },

    {
      title: "25. Prompting for Forms",
      content: `
Forms can be converted into structured records.

Example fields:

name
date
address
phone
course
signature_present

The prompt should define:

- Field names
- Data types
- Missing-value behavior
- Formatting rules
- Uncertain values
`
    },

    {
      title: "26. Prompting for Complex Documents",
      content: `
Large documents may require staged processing.

Document
 ↓
Section Detection
 ↓
Relevant Section Retrieval
 ↓
Extraction
 ↓
Normalization
 ↓
Validation
 ↓
Final Record

Trying to process everything in one giant prompt may be less reliable than a structured pipeline.
`
    },

    {
      title: "27. Structured Output for Applications",
      content: `
Suppose a frontend requires:

{
  "title": "...",
  "summary": "...",
  "difficulty": "...",
  "topics": []
}

The model output can directly feed the application after validation.

This enables:

Model
 ↓
Validated JSON
 ↓
Type-safe Application
 ↓
UI
`
    },

    {
      title: "28. Practical Exercise — Image Analysis",
      content: `
Take a screenshot containing an error.

Create three prompts:

Prompt A:
"Explain this image."

Prompt B:
"Identify the visible error."

Prompt C:
"Identify visible evidence, explain the likely issue, separate observations from conclusions, and provide the next diagnostic step."

Compare the outputs.
`
    },

    {
      title: "29. Practical Exercise — JSON Extraction",
      content: `
Create a paragraph containing:

Name
Age
Course
College
Year

Ask the model to extract the information into JSON.

Then intentionally remove one field.

Verify that the model returns null instead of inventing information.
`
    },

    {
      title: "30. Practical Exercise — Schema Validation",
      content: `
Create a JSON schema.

Generate model outputs.

Test:

- Missing field
- Wrong type
- Invalid enum
- Extra property
- Valid output

Record which outputs pass validation.
`
    },

    {
      title: "31. Production Principle",
      content: `
Multimodal prompting and structured outputs work best when:

Input is clearly defined
+
Task is explicit
+
Uncertainty is allowed
+
Output is constrained
+
Output is validated

The model generates the candidate.

The application validates the result.
`
    }
  ],

  codeExamples: [

    {
      title: "Example 1 — Structured JSON Prompt",
      language: "text",
      code: `Extract information from the supplied document.

Return JSON only.

Schema:
{
  "name": "string or null",
  "course": "string or null",
  "year": "integer or null"
}

Rules:
- Do not invent missing values.
- Use null when information is unavailable.
- Do not add explanatory text.`
    },

    {
      title: "Example 2 — JSON Schema",
      language: "json",
      code: `{
  "type": "object",
  "properties": {
    "name": {
      "type": ["string", "null"]
    },
    "age": {
      "type": ["integer", "null"]
    },
    "course": {
      "type": ["string", "null"]
    }
  },
  "required": [
    "name",
    "age",
    "course"
  ]
}`
    },

    {
      title: "Example 3 — Python Validation",
      language: "python",
      code: `import json

raw_output = '{"name": "Alex", "age": 20}'

data = json.loads(raw_output)

required_fields = [
    "name",
    "age"
]

for field in required_fields:
    if field not in data:
        raise ValueError(
            f"Missing field: {field}"
        )

if not isinstance(data["age"], int):
    raise ValueError(
        "Age must be an integer"
    )

print("Valid output")`
    },

    {
      title: "Example 4 — Multimodal Prompt",
      language: "text",
      code: `Analyze the attached architecture diagram.

TASK:
Identify the visible components and their connections.

OUTPUT:
1. Components
2. Connections
3. Observed issues
4. Uncertain observations
5. Recommended next diagnostic step

Do not assume components that are not visible.`
    }
  ],

  mathIntuition: [
    {
      title: "Schema Validity",
      formula: "Validity = Valid Outputs / Total Outputs",
      explanation:
        "Structured-output quality can be measured by the percentage of generated outputs that pass the required schema."
    },
    {
      title: "Extraction Accuracy",
      formula: "Extraction Accuracy = Correct Fields / Evaluated Fields",
      explanation:
        "This measures how accurately required information is extracted from documents or multimodal inputs."
    },
    {
      title: "Field Completeness",
      formula: "Completeness = Populated Required Fields / Total Required Fields",
      explanation:
        "Completeness measures whether required fields have been successfully populated, while still allowing legitimately unavailable fields to remain null."
    }
  ],

  comparisonTables: [
    {
      title: "Natural Language vs Structured Output",
      headers: [
        "Natural Language",
        "Structured Output"
      ],
      rows: [
        [
          "Flexible",
          "Constrained"
        ],
        [
          "Human-friendly",
          "Machine-friendly"
        ],
        [
          "Harder to parse",
          "Easier to validate"
        ],
        [
          "Loose format",
          "Defined schema"
        ],
        [
          "Useful for conversation",
          "Useful for application integration"
        ]
      ]
    },
    {
      title: "Weak vs Strong Multimodal Prompts",
      headers: [
        "Weak",
        "Strong"
      ],
      rows: [
        [
          "What is this image?",
          "Identify visible components and connections."
        ],
        [
          "Read this document.",
          "Extract specified fields and return JSON."
        ],
        [
          "Analyze the chart.",
          "Identify the three highest categories and approximate values."
        ],
        [
          "Fix this screenshot.",
          "Identify the visible error and provide the next diagnostic step."
        ]
      ]
    }
  ],

  practicalExercises: [
    {
      title: "Exercise 1 — Screenshot Analyzer",
      instructions: [
        "Choose a software error screenshot.",
        "Create a structured multimodal prompt.",
        "Separate observations from conclusions.",
        "Ask the model to report uncertainty.",
        "Compare the answer with the actual error."
      ]
    },
    {
      title: "Exercise 2 — Document Extraction",
      instructions: [
        "Create a sample document.",
        "Define five fields.",
        "Create a JSON extraction prompt.",
        "Remove one field from the document.",
        "Verify missing information is handled correctly."
      ]
    },
    {
      title: "Exercise 3 — Schema Validation",
      instructions: [
        "Create a JSON schema.",
        "Generate multiple outputs.",
        "Validate every output.",
        "Record failure types.",
        "Improve the prompt and repeat."
      ]
    }
  ],

  interviewQuestions: [
    {
      question: "What is multimodal prompting?",
      answer:
        "Multimodal prompting provides multiple information modalities, such as text and images, together with instructions describing how they should be interpreted."
    },
    {
      question: "Why separate observation from interpretation?",
      answer:
        "It helps distinguish directly visible evidence from conclusions that may contain uncertainty."
    },
    {
      question: "Why are structured outputs useful?",
      answer:
        "They allow AI responses to be consumed and validated by software systems."
    },
    {
      question: "What is schema validation?",
      answer:
        "It checks whether generated structured data satisfies predefined structural and type requirements."
    },
    {
      question: "What should happen when information is missing?",
      answer:
        "The prompt should explicitly define missing-value behavior, such as returning null rather than inventing information."
    },
    {
      question: "Can valid JSON still contain incorrect information?",
      answer:
        "Yes. Syntactic validity does not guarantee semantic correctness."
    },
    {
      question: "Why is application-level validation important?",
      answer:
        "The application must verify that model output satisfies structural and business requirements before using it."
    }
  ],

  keyTakeaways: [
    "Multimodal prompting combines multiple information modalities.",
    "Image prompts should define exactly what the model should inspect.",
    "Observation and interpretation should be separated when uncertainty matters.",
    "Documents and tables can be transformed into structured records.",
    "Structured outputs are useful for software integration.",
    "JSON syntax alone does not guarantee semantic correctness.",
    "Schemas provide stronger output constraints.",
    "Missing information should be handled explicitly.",
    "Generated output should be validated programmatically.",
    "Multimodal systems should communicate uncertainty rather than inventing unreadable information.",
    "Large document workflows may benefit from staged processing.",
    "Production systems should combine prompting with schema validation and application-level controls."
  ]
};

export default lesson;