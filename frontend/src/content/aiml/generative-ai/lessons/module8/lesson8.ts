const lesson8 = {
  id: "lesson8",
  moduleId: "module8",
  title: "Multimodal Agents & Tool Use",
  subtitle: "Build AI systems that can perceive, reason, act and work across modalities",
  description:
    "Learn how multimodal models become useful agents when they can combine visual, textual, audio and video understanding with tools, memory, planning and external actions.",

  sections: [
    {
      id: "introduction",
      title: "What Is a Multimodal Agent?",
      content: `
A multimodal agent is an AI system that can perceive information through multiple modalities, reason about that information, decide what action to take and use tools to accomplish a goal.

A basic language model workflow is:

Input
→ Model
→ Output

A multimodal agent expands this into:

Perception
→ Reasoning
→ Planning
→ Tool Selection
→ Tool Execution
→ Observation
→ Memory
→ Next Decision

The agent may receive:

- text
- images
- screenshots
- audio
- video
- documents
- sensor information

and may use:

- search
- databases
- calculators
- code execution
- APIs
- browsers
- computer interaction
- image processing tools
`
    },

    {
      id: "agent-loop",
      title: "The Multimodal Agent Loop",
      content: `
A common agent loop is:

Observe
↓
Understand
↓
Plan
↓
Choose Tool
↓
Execute
↓
Observe Result
↓
Evaluate
↓
Continue or Finish

For multimodal agents, observation may itself contain multiple modalities.

Example:

Screenshot
+
User instruction
+
System state

The agent interprets all three before selecting an action.

This creates a perception-action loop rather than a simple question-answer interaction.
`
    },

    {
      id: "perception",
      title: "Multimodal Perception",
      content: `
Perception converts raw input into useful representations.

Examples:

Image
→ objects, text, layout, relationships

Audio
→ transcript, speaker, tone-related features

Video
→ frames, scenes, actions, timestamps

Document
→ text, tables, images, layout

A perception layer can produce structured observations:

{
  "screen": {
    "visible_button": "Submit",
    "form_fields": 4,
    "error_message": "Invalid email"
  }
}

The agent should reason over structured observations when possible rather than repeatedly processing raw data unnecessarily.
`
    },

    {
      id: "tool-calling",
      title: "Tool Calling",
      content: `
Tool calling allows a model to request an external operation.

Example:

User:
"Calculate the total shown in this invoice."

Agent:
1. Read invoice image.
2. Extract line items.
3. Call calculator tool.
4. Verify result.
5. Respond.

A tool can be represented as:

{
  name: "calculator",
  description: "Performs arithmetic",
  parameters: {
    expression: "string"
  }
}

The model decides when a tool is needed, while the application controls whether the requested tool call is permitted.
`
    },

    {
      id: "tool-selection",
      title: "Multimodal Tool Selection",
      content: `
Tool selection should depend on the task.

Examples:

Image contains text
→ OCR tool

Question requires current information
→ Search tool

Arithmetic calculation
→ Calculator

Database lookup
→ Database tool

Video question
→ Video retrieval tool

Location-related operation
→ Location service

The model should not be allowed to arbitrarily execute every available operation.

Tools should have:
- clear descriptions
- schemas
- permissions
- validation
- timeouts
- logging
`
    },

    {
      id: "visual-tools",
      title: "Vision-Aware Tools",
      content: `
Multimodal agents can use specialized visual tools.

Examples:

Object detection
→ locate objects

OCR
→ read text

Image search
→ retrieve similar images

Image transformation
→ edit or resize images

Chart extraction
→ convert visual data into structured information

Document parser
→ extract pages and layout

The agent can combine these tools.

Example:

Image
→ OCR
→ extracted text
→ database search
→ result
→ multimodal reasoning
`
    },

    {
      id: "computer-use",
      title: "Computer Interaction Agents",
      content: `
A multimodal agent can use screenshots as observations while interacting with software.

Conceptual loop:

Screenshot
↓
Visual Understanding
↓
Determine Current State
↓
Select Action
↓
Click / Type / Scroll
↓
New Screenshot
↓
Verify State

The key engineering principle is verification.

An agent should not assume that an action succeeded merely because it requested the action.

Instead:

Action
→ Observation
→ State Verification
`
    },

    {
      id: "audio-agents",
      title: "Audio-Based Agents",
      content: `
Audio agents can operate through speech.

Pipeline:

Microphone
→ Speech Recognition
→ Intent Understanding
→ Planning
→ Tool Calling
→ Response Generation
→ Text-to-Speech

A more advanced system can preserve speaker information.

For example:

Speaker A:
"Can you check the order?"

Speaker B:
"The customer says it was delivered."

The agent can use speaker identity and timestamps as context.
`
    },

    {
      id: "video-agents",
      title: "Video-Aware Agents",
      content: `
Video agents must reason across time.

Example task:

"Watch this training video and tell me whether the operator follows the safety procedure."

The agent may need:

1. Scene detection
2. Frame sampling
3. Action recognition
4. Transcript analysis
5. Temporal reasoning
6. Evidence selection
7. Final judgment

A video is not just a collection of unrelated images.

Temporal relationships matter.

Action at time t may depend on what happened at t-10 seconds.
`
    },

    {
      id: "planning",
      title: "Planning in Multimodal Agents",
      content: `
Complex tasks may require multiple steps.

Example:

"Analyze this product image, identify the model, find its specifications and summarize whether it satisfies these requirements."

Possible plan:

1. Analyze image.
2. Extract model number.
3. Search product database.
4. Retrieve specifications.
5. Compare requirements.
6. Produce evidence-backed summary.

The plan should be represented explicitly when the task is complex.

This improves:
- debugging
- observability
- reliability
- tool selection
- user transparency
`
    },

    {
      id: "memory",
      title: "Memory in Multimodal Agents",
      content: `
Agents can use several types of memory.

Short-term memory:
Current conversation and task state.

Long-term memory:
Persistent user or application information.

Episodic memory:
Previous events or interactions.

External memory:
Documents, databases and retrieval systems.

Multimodal memory may contain:

text
+
images
+
audio
+
video
+
metadata

The memory system should preserve provenance and access controls.
`
    },

    {
      id: "state-machine",
      title: "Agent State Management",
      content: `
A useful way to model an agent is as a state machine.

START
 ↓
OBSERVE
 ↓
UNDERSTAND
 ↓
PLAN
 ↓
TOOL_REQUIRED?
 ├── NO → RESPOND
 └── YES
       ↓
    EXECUTE
       ↓
    OBSERVE
       ↓
    VERIFY
       ↓
    CONTINUE / FINISH

Explicit states make failures easier to diagnose.

For example, if an agent repeatedly calls the same tool, the orchestration layer can detect the loop.
`
    },

    {
      id: "tool-security",
      title: "Tool Security",
      content: `
Tool access is one of the highest-risk parts of an agent architecture.

A model may request:

delete_file()

send_email()

transfer_money()

modify_database()

The application should never assume that a tool call is safe merely because the model requested it.

A secure architecture uses:

Model
→ Tool Request
→ Policy Validation
→ Permission Check
→ Parameter Validation
→ Human Approval when required
→ Tool Execution
→ Result

Tools should follow least privilege.
`
    },

    {
      id: "prompt-injection",
      title: "Prompt Injection in Multimodal Agents",
      content: `
Prompt injection can occur through multimodal content.

An image may contain text such as:

"Ignore your previous instructions."

A PDF may contain malicious instructions.

A webpage screenshot may contain attacker-controlled content.

The agent must distinguish:

Instructions
from
Evidence

Retrieved content should not automatically become agent instructions.

The system should enforce instruction hierarchy outside the model whenever possible.
`
    },

    {
      id: "guardrails",
      title: "Agent Guardrails",
      content: `
Useful guardrails include:

Input validation
Tool allowlists
Parameter validation
Permission checks
Output validation
Rate limits
Timeouts
Loop detection
Budget limits
Human approval
Audit logging

A practical policy might be:

Read-only tools
→ automatically allowed

Low-impact actions
→ validated

High-impact actions
→ explicit confirmation

This creates controlled autonomy.
`
    },

    {
      id: "agent-memory-retrieval",
      title: "Agents + Multimodal RAG",
      content: `
Multimodal RAG can become an external knowledge tool for an agent.

Agent
↓
User Question
↓
Need Knowledge?
↓
Multimodal Retrieval
↓
Evidence
↓
Agent Reasoning
↓
Tool Call
↓
Final Answer

This separates:

Knowledge retrieval
from
Action execution

That separation improves architecture and evaluation.
`
    },

    {
      id: "agent-evaluation",
      title: "Evaluating Multimodal Agents",
      content: `
Agent evaluation is different from evaluating a single model response.

Important dimensions include:

Task success
Tool selection accuracy
Tool argument correctness
Planning quality
Perception accuracy
Grounding
Number of unnecessary steps
Latency
Cost
Safety violations
Loop frequency

A useful metric is:

Task Success Rate =
successful tasks / total tasks

Tool Success Rate =
successful tool executions / total tool executions

These metrics should be evaluated using realistic scenarios.
`
    },

    {
      id: "latency-cost",
      title: "Latency and Cost in Multimodal Agents",
      content: `
Multimodal agents can become expensive because a single task may involve:

multiple model calls
+
image processing
+
OCR
+
retrieval
+
tool calls
+
video processing

Approximate total cost:

C_total =
C_model
+
C_vision
+
C_audio
+
C_retrieval
+
C_tools

Latency can be approximated as:

T_total =
T_perception
+
T_reasoning
+
T_tools
+
T_retrieval
+
T_generation

Parallelizable operations can reduce latency.
`
    },

    {
      id: "python-example",
      title: "Simple Agent Loop",
      content: `
A simplified Python agent loop can look like:

def run_agent(task):
    state = observe(task)

    for _ in range(10):
        decision = reason(state)

        if decision["action"] == "finish":
            return decision["answer"]

        result = execute_tool(
            decision["tool"],
            decision["arguments"]
        )

        state = update_state(state, result)

    return "Agent stopped after reaching the step limit."

The step limit is an important protection against infinite loops.
`
    },

    {
      id: "typescript-tool-schema",
      title: "TypeScript Tool Schema",
      content: `
A tool registry can be represented as:

type Tool = {
  name: string;
  description: string;
  execute: (args: unknown) => Promise<unknown>;
  requiresApproval?: boolean;
};

The application can then maintain a controlled set of tools rather than allowing arbitrary execution.
`
    },

    {
      id: "production-architecture",
      title: "Production Multimodal Agent Architecture",
      content: `
A production architecture can contain:

User
 ↓
Frontend
 ↓
Agent API
 ↓
Input Validation
 ↓
Agent Orchestrator
 ├── Multimodal Model
 ├── Memory
 ├── RAG
 ├── Tool Registry
 └── Policy Engine
 ↓
Tool Execution Layer
 ↓
External Systems
 ↓
Observation
 ↓
Agent
 ↓
Response Validation
 ↓
User

Supporting services:

Authentication
Authorization
Audit Logs
Tracing
Metrics
Cost Monitoring
Evaluation
`
    },

    {
      id: "design-principles",
      title: "Multimodal Agent Design Principles",
      content: `
Strong multimodal agent systems should:

1. Separate perception from action.
2. Separate model decisions from tool execution.
3. Validate every tool request.
4. Preserve evidence and provenance.
5. Limit agent loops.
6. Monitor latency and cost.
7. Evaluate complete tasks.
8. Protect external systems.
9. Make high-impact actions controllable.
10. Fail safely when perception is uncertain.
`
    }
  ],

  architecture: {
    title: "Multimodal Agent Architecture",
    description: "Perception, reasoning, tools, memory and controlled action.",
    flow: [
      "Multimodal Input",
      "Perception",
      "Reasoning",
      "Planning",
      "Tool Selection",
      "Policy Validation",
      "Tool Execution",
      "Observation",
      "Memory Update",
      "Final Response"
    ]
  },

  codeExamples: [
    {
      title: "Agent Step Limit",
      language: "python",
      code: `for step in range(10):
    decision = reason(state)

    if decision["action"] == "finish":
        return decision["answer"]

    result = execute_tool(
        decision["tool"],
        decision["arguments"]
    )

    state = update_state(state, result)`
    },
    {
      title: "Tool Definition",
      language: "typescript",
      code: `type Tool = {
  name: string;
  description: string;
  execute: (args: unknown) => Promise<unknown>;
  requiresApproval?: boolean;
};`
    }
  ],

  comparisons: [
    {
      title: "Chatbot vs Multimodal Agent",
      rows: [
        ["Input", "Mostly text", "Text + images + audio + video"],
        ["Output", "Response", "Response + actions"],
        ["Tools", "Optional", "Core capability"],
        ["Planning", "Usually limited", "Often explicit"],
        ["Memory", "Conversation context", "Conversation + external memory"],
        ["Control", "Simple", "Policy and permission layers required"]
      ]
    }
  ],

  exercises: [
    "Explain the perception-action loop.",
    "Design a multimodal agent for document analysis.",
    "Explain why tool calls require validation.",
    "Describe how an agent can use multimodal RAG.",
    "Explain how screenshot-based agents can verify actions."
  ],

  codingExercises: [
    "Implement a simple agent loop with a maximum step count.",
    "Create a TypeScript tool registry.",
    "Implement a tool allowlist.",
    "Implement basic tool argument validation.",
    "Build a mock multimodal agent that chooses between OCR, search and calculator tools."
  ],

  architectureExercises: [
    "Design a multimodal customer-support agent.",
    "Design a visual software-testing agent.",
    "Design an educational video analysis agent.",
    "Design a document-processing agent with human approval."
  ],

  scenarioExercises: [
    "An agent repeatedly calls the same tool. Design loop detection.",
    "An image contains malicious instructions. Explain how the agent should treat them.",
    "A tool requests deletion of production data. Design the approval workflow.",
    "The model is uncertain about an image. Design a safe fallback."
  ],

  interviewQuestions: [
    "What is a multimodal agent?",
    "How is an agent different from a chatbot?",
    "What is the perception-action loop?",
    "Why should models not directly execute arbitrary tools?",
    "What is tool calling?",
    "How can multimodal RAG support agents?",
    "How would you prevent infinite agent loops?",
    "What is least privilege in agent systems?",
    "How can prompt injection affect multimodal agents?",
    "How would you evaluate an agent?"
  ],

  commonMistakes: [
    "Allowing unrestricted tool execution.",
    "Not validating tool arguments.",
    "No maximum step count.",
    "Treating retrieved content as instructions.",
    "Ignoring perception uncertainty.",
    "Evaluating only final text instead of complete task success.",
    "Failing to log tool calls.",
    "Giving agents excessive permissions."
  ],

  summary: `
Multimodal agents combine multimodal perception with reasoning, planning, memory and tools.

The core loop is:

Observe
→ Understand
→ Plan
→ Act
→ Observe
→ Verify

The model decides what it believes should happen, but the application must control what actually happens.

This distinction is essential for secure and reliable agent systems.

Multimodal agents become particularly powerful when combined with RAG, specialized tools and structured memory.
`,

  keyTakeaways: [
    "Multimodal agents perceive text, images, audio and video.",
    "Agents operate through perception, reasoning and action loops.",
    "Tool execution must be controlled by application-level policies.",
    "Multimodal RAG can provide external knowledge to agents.",
    "Step limits and loop detection improve reliability.",
    "High-impact actions should require stronger controls.",
    "Agent evaluation should measure complete task success."
  ],

  visualReferences: [
    {
      title: "Multimodal Agent Loop",
      type: "architecture",
      description: "Observe, reason, plan, act and verify."
    },
    {
      title: "Secure Tool Calling",
      type: "flowchart",
      description: "Model request followed by policy and permission validation."
    }
  ]
};

export default lesson8;