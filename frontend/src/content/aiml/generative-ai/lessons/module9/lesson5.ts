const lesson5 = {
  id: "lesson5",
  moduleId: "module9",
  lessonNumber: 5,
  title: "Structured Outputs, Tool Calling & Function Execution",
  subtitle: "Connecting LLM reasoning with deterministic software operations",
  duration: "60 min",
  difficulty: "Advanced",

  overview: `
LLMs are powerful at interpreting language and producing decisions, but
production applications often need deterministic software to perform actions.

Structured outputs and tool calling provide the bridge between probabilistic
language generation and ordinary application code.

Instead of asking an LLM to directly perform an operation, an application can
ask the model to produce a structured tool request. The application validates
that request, executes the corresponding function, and returns the result to
the model or user.

This lesson explains structured output contracts, schemas, function calling,
tool definitions, validation, execution, tool results, error handling,
authorization and multi-tool workflows.
`,

  objectives: [
    "Understand why structured outputs are important",
    "Design schemas for LLM-generated data",
    "Understand tool calling and function execution",
    "Separate model decisions from deterministic execution",
    "Validate tool arguments before execution",
    "Design safe tool interfaces",
    "Handle tool failures and invalid arguments",
    "Build multi-tool workflows",
    "Understand tool results and model continuation",
    "Design production tool-calling architectures"
  ],

  sections: [
    {
      title: "1. Why Structured Outputs Matter",
      content: `
Natural language is flexible but difficult for software to consume reliably.

For example:

"The issue appears to be high priority and should be assigned to networking."

A human understands this easily.

A program benefits from:

{
  "priority": "high",
  "category": "networking"
}

The second representation has an explicit contract.

Structured output therefore provides a boundary between:

LLM
 |
 v
Structured Data
 |
 v
Application Logic
      `
    },

    {
      title: "2. Schema-Based Thinking",
      content: `
A schema describes what the application expects.

Example:

{
  "type": "object",
  "properties": {
    "priority": {
      "type": "string",
      "enum": ["low", "medium", "high"]
    },
    "category": {
      "type": "string"
    }
  },
  "required": ["priority", "category"]
}

The schema provides constraints.

The application should still validate the actual returned data before using it.
      `
    },

    {
      title: "3. What Is Tool Calling?",
      content: `
Tool calling allows a model to request execution of a predefined function.

Example:

User:
"What is the weather in Mumbai?"

The model may produce:

{
  "tool": "get_weather",
  "arguments": {
    "city": "Mumbai"
  }
}

The application then executes:

get_weather("Mumbai")

The tool result is returned to the model or presented to the user.

The important principle is:

The model proposes.
The application decides.
The tool executes.
      `
    },

    {
      title: "4. Tool Calling Architecture",
      content: `
User
 |
 v
LLM
 |
 +---- normal response
 |
 +---- tool request
          |
          v
     Validation
          |
          v
     Authorization
          |
          v
     Tool Execution
          |
          v
      Tool Result
          |
          v
         LLM
          |
          v
       Final Answer

This architecture keeps deterministic operations outside the model.
      `
    },

    {
      title: "5. Tool Definitions",
      content: `
A tool definition should describe:

- Name
- Purpose
- Input schema
- Required parameters
- Parameter types
- Constraints
- Permission requirements

Example:

const getOrder = {
  name: "get_order",
  description: "Retrieve an order by its identifier",
  parameters: {
    orderId: "string"
  }
};

The description helps the model select the appropriate tool.

The application should never assume that the model's choice is automatically safe.
      `
    },

    {
      title: "6. Tool Argument Validation",
      content: `
Every tool request should be validated.

Example:

Model output:

{
  "orderId": 12345
}

Expected:

orderId: string

Validation should reject the request or transform it safely according to
explicit application rules.

Validation is especially important for:

- Database queries
- Payments
- File operations
- External APIs
- Administrative actions
- Account changes
- Destructive operations
      `
    },

    {
      title: "7. Authorization Before Execution",
      content: `
Tool selection is not authorization.

The model may request:

deleteAccount(userId)

The application must independently determine whether the current user is
allowed to perform the operation.

Therefore:

LLM Decision
     |
     v
Argument Validation
     |
     v
Authorization
     |
     v
Execution

Security must remain outside the model.
      `
    },

    {
      title: "8. Tool Results",
      content: `
After a tool executes, the application produces a structured result.

Example:

{
  "tool": "get_weather",
  "status": "success",
  "data": {
    "temperature": 29,
    "condition": "cloudy"
  }
}

The model can then use this information to construct a final response.

A failed tool should also return a controlled result.

Example:

{
  "tool": "get_weather",
  "status": "error",
  "error": "Service temporarily unavailable"
}
      `
    },

    {
      title: "9. Multiple Tools",
      content: `
An application may expose many tools.

Example:

Tools
 |
 +--> search_documents
 |
 +--> get_customer
 |
 +--> create_ticket
 |
 +--> send_notification
 |
 +--> calculate_price

The model can select among them.

However, exposing too many tools can increase ambiguity and complexity.

Tool descriptions should therefore be specific and non-overlapping where possible.
      `
    },

    {
      title: "10. Sequential Tool Workflows",
      content: `
Some tasks require multiple operations.

Example:

User request
    |
    v
Search customer
    |
    v
Get order
    |
    v
Check delivery
    |
    v
Generate answer

This creates a tool workflow.

The application should track:

- Tool name
- Arguments
- Start time
- End time
- Result
- Error
- Request ID
      `
    },

    {
      title: "11. Tool Calling and Agents",
      content: `
Tool calling is a building block for agentic applications.

A simple tool call:

User -> LLM -> Tool -> Result -> LLM

An agent may perform repeated cycles:

Goal
 |
 v
Plan
 |
 v
Choose tool
 |
 v
Execute
 |
 v
Observe result
 |
 +---- complete
 |
 +---- continue
       |
       +--> choose another tool

Lesson 6 will extend this concept into agent workflows and orchestration.
      `
    },

    {
      title: "12. Tool Failure Handling",
      content: `
Tools can fail.

Possible failures:

- Invalid arguments
- Authentication failure
- Permission denied
- Timeout
- Rate limit
- External service outage
- Database failure

Production applications should classify failures and decide whether to:

- Retry
- Repair arguments
- Use a fallback
- Ask the user
- Stop the workflow
- Return a controlled error
      `
    }
  ],

  architecture: {
    title: "Safe Tool Execution Architecture",
    diagram: `
                    User
                     |
                     v
                    LLM
                     |
                Tool Request
                     |
                     v
              Schema Validation
                     |
                     v
               Authorization
                     |
             +-------+-------+
             |               |
           Deny            Allow
             |               |
             v               v
          Error          Tool Execute
                             |
                             v
                        Tool Result
                             |
                             v
                            LLM
                             |
                             v
                       Final Response
    `
  },

  codeExample: {
    title: "Simple Tool Registry",
    language: "typescript",
    code: `
type ToolContext = {
  userId: string;
};

type Tool = {
  name: string;
  description: string;
  execute: (
    args: Record<string, unknown>,
    context: ToolContext
  ) => Promise<unknown>;
};

const tools: Record<string, Tool> = {
  getUserProfile: {
    name: "getUserProfile",
    description: "Retrieve the current user's profile",
    async execute(args, context) {
      if (args.userId !== context.userId) {
        throw new Error("Unauthorized");
      }

      return {
        userId: context.userId,
        status: "active"
      };
    }
  }
};

async function executeTool(
  name: string,
  args: Record<string, unknown>,
  context: ToolContext
) {
  const tool = tools[name];

  if (!tool) {
    throw new Error("Unknown tool");
  }

  return tool.execute(args, context);
}
`
  },

  formulas: [
    {
      name: "Tool Execution Latency",
      formula: "T_total = T_model + T_validation + T_tool + T_model_final",
      explanation: "A tool-enabled request may require multiple model and application stages."
    },
    {
      name: "Workflow Cost",
      formula: "C_total = Σ(C_model_i + C_tool_i)",
      explanation: "The total cost accumulates across model calls and external tool operations."
    }
  ],

  comparisons: [
    {
      topic: "Natural Language vs Structured Output",
      naturalLanguage: "Flexible but difficult to validate",
      structured: "Explicit fields and machine-readable contracts"
    },
    {
      topic: "Model Action vs Application Action",
      modelAction: "A proposed decision",
      applicationAction: "Validated and authorized execution"
    },
    {
      topic: "Single Tool vs Multi-Tool Workflow",
      singleTool: "One deterministic operation",
      multiTool: "Several operations connected into a workflow"
    }
  ],

  exercises: [
    "Design a JSON schema for a support-ticket classification result.",
    "Design a weather lookup tool definition.",
    "Create a tool registry with three tools.",
    "Design a validation layer for tool arguments.",
    "Explain why tool selection is not authorization.",
    "Design a three-step tool workflow."
  ],

  codingTasks: [
    "Implement a TypeScript tool registry.",
    "Implement schema-style argument validation.",
    "Add authorization checks to a tool.",
    "Implement structured tool results.",
    "Implement tool failure classification."
  ],

  architectureTasks: [
    "Design an architecture for an AI customer-support assistant with five tools.",
    "Design a safe architecture for an assistant that can modify database records.",
    "Design a multi-step workflow that uses retrieval followed by a business tool."
  ],

  interviewQuestions: [
    "Why are structured outputs useful?",
    "What is tool calling?",
    "What is the difference between tool selection and authorization?",
    "Why should tool arguments be validated?",
    "How should tool failures be handled?",
    "What is a tool registry?",
    "How does tool calling lead toward agentic systems?",
    "Why should destructive tools have additional authorization?"
  ],

  commonMistakes: [
    "Executing model-generated actions without validation",
    "Treating model decisions as authorization",
    "Allowing unrestricted database access",
    "Creating ambiguous tool descriptions",
    "Ignoring tool failures",
    "Logging sensitive tool arguments",
    "Exposing unnecessary tools",
    "Using free-form output when structured output is required"
  ],

  summary: [
    "Structured outputs create reliable boundaries between models and software.",
    "Tool calling lets models request deterministic application operations.",
    "Every tool request should be validated.",
    "Authorization must happen outside the model.",
    "Tool results should be structured and observable.",
    "Multi-tool workflows are foundations for agentic systems."
  ],

  keyTakeaways: [
    "The model proposes actions; the application controls execution.",
    "Use schemas for machine-readable outputs.",
    "Validate every tool request.",
    "Authorize every sensitive operation.",
    "Keep deterministic logic outside the model.",
    "Track tool execution for observability.",
    "Tool calling is a foundation for agents and workflows."
  ]
};

export default lesson5;