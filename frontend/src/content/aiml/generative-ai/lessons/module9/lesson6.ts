const lesson6 = {
  id: "lesson6",
  moduleId: "module9",
  lessonNumber: 6,
  title: "LLM Agents, Workflows & Orchestration",
  subtitle: "Designing systems that plan, use tools and complete multi-step tasks",
  duration: "65 min",
  difficulty: "Advanced",

  overview: `
An LLM application becomes more capable when it can perform multiple steps
toward a goal.

A workflow follows a predefined sequence.

An agentic system can dynamically decide which step to perform next based on
the current state and available tools.

This lesson introduces agent architecture, workflows, planning, tool selection,
state transitions, loops, termination conditions, orchestration patterns,
single-agent systems, multi-agent systems, human approval, reliability,
observability and production safety.

The central engineering principle is that an agent should operate inside a
controlled environment with explicit tools, state, permissions and stopping
conditions.
`,

  objectives: [
    "Understand the difference between workflows and agents",
    "Understand the architecture of an LLM agent",
    "Design planning and execution loops",
    "Use tools inside agent workflows",
    "Represent agent state",
    "Define termination conditions",
    "Understand orchestration patterns",
    "Design human-in-the-loop systems",
    "Understand single-agent and multi-agent architectures",
    "Build safer production agent systems"
  ],

  sections: [
    {
      title: "1. What Is an LLM Agent?",
      content: `
An LLM agent is an application architecture in which a model participates in
a loop that can:

1. Observe information
2. Reason about the next step
3. Select an action
4. Execute a tool
5. Observe the result
6. Continue or terminate

A simplified model is:

Goal
 |
 v
Observe
 |
 v
Decide
 |
 v
Act
 |
 v
Observe Result
 |
 +---- Complete
 |
 +---- Continue
      `
    },

    {
      title: "2. Workflow vs Agent",
      content: `
A workflow follows a known sequence.

Example:

Input
  |
  v
Retrieve
  |
  v
Generate
  |
  v
Validate
  |
  v
Return

An agent has more dynamic decision-making.

Example:

Goal
 |
 v
LLM
 |
 +--> Search
 |
 +--> Database
 |
 +--> Calculator
 |
 +--> API
 |
 +--> Ask User
 |
 v
Evaluate Result
 |
 +--> Continue
 |
 +--> Finish

Workflows are usually easier to control.

Agents are useful when the sequence cannot be completely predetermined.
      `
    },

    {
      title: "3. Agent Architecture",
      content: `
A production agent commonly contains:

Agent Controller
     |
     +---- Model
     |
     +---- Tools
     |
     +---- State
     |
     +---- Memory
     |
     +---- Policies
     |
     +---- Guardrails
     |
     +---- Observability
     |
     +---- Termination Rules

The controller coordinates these components.
      `
    },

    {
      title: "4. Agent State",
      content: `
Agents require state to remember what has happened during a workflow.

Example:

type AgentState = {
  goal: string;
  currentStep: string;
  messages: Message[];
  toolResults: ToolResult[];
  iteration: number;
  status: "running" | "completed" | "failed";
};

State should contain only information required for the workflow.

Large uncontrolled state can increase token usage and complexity.
      `
    },

    {
      title: "5. The Agent Loop",
      content: `
A conceptual agent loop is:

while (!finished) {
  observe();
  decide();
  validateAction();
  execute();
  updateState();
}

However, production systems should never create an unrestricted loop.

They should define:

- Maximum iterations
- Maximum execution time
- Maximum tool calls
- Cost limits
- Allowed tools
- Failure behavior
- Termination criteria
      `
    },

    {
      title: "6. Planning",
      content: `
Planning determines how the agent approaches a goal.

A simple plan may be:

Goal:
Prepare a report.

Plan:
1. Gather information
2. Analyze information
3. Generate draft
4. Validate
5. Return report

Planning can be:

- Fixed
- Dynamic
- Hierarchical
- Tool-driven
- Human-approved

The right strategy depends on application complexity.
      `
    },

    {
      title: "7. Tool Selection",
      content: `
The agent may choose among tools.

Example:

Available tools:

searchDocs
getUser
calculate
sendEmail

The model proposes a tool.

The controller then verifies:

1. Does the tool exist?
2. Are arguments valid?
3. Is the tool allowed?
4. Is the user authorized?
5. Is the operation safe?

Only then should execution occur.
      `
    },

    {
      title: "8. Orchestration Patterns",
      content: `
Common orchestration patterns include:

Sequential
A -> B -> C

Parallel
      +--> A --+
Start +--> B --+--> Merge
      +--> C --+

Router
       +--> A
Input -+--> B
       +--> C

Loop
A -> B -> C
    ^     |
    |_____|

Supervisor
Supervisor
   |
   +--> Worker A
   +--> Worker B
   +--> Worker C

Each pattern solves a different coordination problem.
      `
    },

    {
      title: "9. Human-in-the-Loop",
      content: `
Some actions should require human approval.

Example:

Agent
 |
 v
Prepare financial transaction
 |
 v
Approval Required
 |
 +---- Reject
 |
 +---- Approve
        |
        v
      Execute

Human approval is particularly useful for:

- Financial actions
- Account changes
- Destructive operations
- External communications
- Sensitive decisions
      `
    },

    {
      title: "10. Single-Agent Architecture",
      content: `
A single agent may coordinate many tools.

User
 |
 v
Agent
 |
 +--> Search
 +--> Database
 +--> Calculator
 +--> API
 +--> Memory

Advantages:

- Simpler architecture
- Easier state management
- Easier debugging

Challenges:

- Large tool set
- Complex prompts
- Increasing decision complexity
      `
    },

    {
      title: "11. Multi-Agent Architecture",
      content: `
Complex applications may divide responsibilities among multiple specialized
agents.

Example:

Supervisor
   |
   +--> Research Agent
   |
   +--> Analysis Agent
   |
   +--> Writing Agent
   |
   +--> Verification Agent

The supervisor coordinates the workers.

Multi-agent architectures can improve specialization but increase:

- Communication overhead
- Latency
- Cost
- Debugging complexity
- State-management complexity
      `
    },

    {
      title: "12. Agent Reliability",
      content: `
Agents are inherently less predictable than fixed workflows.

Reliability techniques include:

- Explicit state
- Tool validation
- Maximum iterations
- Timeout limits
- Cost limits
- Structured outputs
- Checkpoints
- Human approval
- Deterministic validators
- Fallback workflows

The application should always have a controlled failure path.
      `
    },

    {
      title: "13. Agent Observability",
      content: `
Agent execution should be traceable.

A useful trace contains:

Run ID
 |
 +--> Step 1
 |      |
 |      +--> Model call
 |
 +--> Step 2
 |      |
 |      +--> Tool call
 |
 +--> Step 3
        |
        +--> Validation

Useful metrics include:

- Total duration
- Number of iterations
- Number of tool calls
- Token usage
- Tool failures
- Final outcome
- Estimated cost
      `
    },

    {
      title: "14. Agent Termination",
      content: `
Every agent requires explicit termination rules.

Examples:

if goalCompleted:
    stop

if iteration >= MAX_ITERATIONS:
    stop

if cost >= MAX_COST:
    stop

if timeout:
    stop

if unrecoverableError:
    stop

Termination is not optional.

An agent without stopping conditions can waste resources or enter repetitive
behavior.
      `
    }
  ],

  architecture: {
    title: "Production Agent Architecture",
    diagram: `
                         User Goal
                            |
                            v
                    +----------------+
                    | Agent Controller|
                    +--------+-------+
                             |
               +-------------+-------------+
               |             |             |
               v             v             v
             Model         State         Policy
               |             |             |
               +-------------+-------------+
                             |
                             v
                      Action Proposal
                             |
                             v
                      Action Validation
                             |
                   +---------+---------+
                   |                   |
                 Reject              Allow
                   |                   |
                   v                   v
                 Error             Tool Call
                                       |
                                       v
                                  Tool Result
                                       |
                                       v
                                   Update State
                                       |
                                       v
                                  Continue?
                                  /       \\
                                Yes        No
                                 |          |
                                 +-----> Final
    `
  },

  codeExample: {
    title: "Simplified Agent Controller",
    language: "typescript",
    code: `
type AgentState = {
  goal: string;
  iteration: number;
  status: "running" | "completed" | "failed";
};

const MAX_ITERATIONS = 5;

async function runAgent(state: AgentState) {
  while (
    state.status === "running" &&
    state.iteration < MAX_ITERATIONS
  ) {
    state.iteration++;

    const action = await decideNextAction(state);

    if (action.type === "finish") {
      state.status = "completed";
      break;
    }

    const valid = validateAction(action);

    if (!valid) {
      state.status = "failed";
      break;
    }

    await executeAction(action);
  }

  if (
    state.status === "running" &&
    state.iteration >= MAX_ITERATIONS
  ) {
    state.status = "failed";
  }

  return state;
}

async function decideNextAction(state: AgentState) {
  return {
    type: "finish" as const
  };
}

function validateAction(action: unknown) {
  return action !== null;
}

async function executeAction(action: unknown) {
  return action;
}
`
  },

  formulas: [
    {
      name: "Agent Cost",
      formula: "C_agent = Σ C_model + Σ C_tools",
      explanation: "Agent cost accumulates across model calls and tool executions."
    },
    {
      name: "Agent Latency",
      formula: "T_agent ≈ Σ T_sequential_steps + max(T_parallel_steps)",
      explanation: "Sequential actions accumulate latency while parallel operations can overlap."
    },
    {
      name: "Iteration Bound",
      formula: "N_iterations ≤ N_max",
      explanation: "Production agents should enforce an explicit upper bound on iterations."
    },
    {
      name: "Expected Workflow Cost",
      formula: "E[C] = Σ P(step_i) × C(step_i)",
      explanation: "Dynamic workflows can have different costs depending on which steps are executed."
    }
  ],

  comparisons: [
    {
      topic: "Workflow vs Agent",
      workflow: "Predetermined execution path",
      agent: "Dynamic decision-making within controlled boundaries"
    },
    {
      topic: "Single Agent vs Multi-Agent",
      singleAgent: "Simpler coordination and state",
      multiAgent: "Specialized workers with additional coordination overhead"
    },
    {
      topic: "Automatic Execution vs Human Approval",
      automatic: "Fast and scalable for low-risk operations",
      humanApproval: "Adds control for sensitive or high-impact operations"
    }
  ],

  exercises: [
    "Design a five-step workflow for an AI research assistant.",
    "Convert a fixed workflow into an agentic architecture.",
    "Define the state required by a customer-support agent.",
    "Design termination rules for an agent.",
    "Design a human-approval checkpoint.",
    "Compare single-agent and multi-agent architectures for a research system."
  ],

  codingTasks: [
    "Implement an agent state object.",
    "Implement a bounded agent loop.",
    "Add maximum iteration handling.",
    "Add tool validation before execution.",
    "Implement a simple sequential workflow orchestrator."
  ],

  architectureTasks: [
    "Design an agent that can search documents and create support tickets.",
    "Design a supervisor-worker architecture.",
    "Design an agent with human approval before sensitive actions.",
    "Design an observable agent execution pipeline."
  ],

  interviewQuestions: [
    "What is an LLM agent?",
    "How is an agent different from a workflow?",
    "Why does an agent need state?",
    "What is an orchestration pattern?",
    "Why are termination conditions important?",
    "What is human-in-the-loop?",
    "What are the advantages and disadvantages of multi-agent systems?",
    "How should agent execution be observed?",
    "Why should tool execution be validated outside the model?"
  ],

  commonMistakes: [
    "Creating unrestricted agent loops",
    "Allowing agents unlimited tool access",
    "Using agents when a deterministic workflow is sufficient",
    "Ignoring execution cost",
    "Ignoring latency",
    "Not storing workflow state",
    "Allowing sensitive actions without approval",
    "Failing to trace agent steps",
    "Using multiple agents without clear responsibilities"
  ],

  summary: [
    "Agents combine models, tools, state and control logic.",
    "Workflows use predefined execution paths while agents can make dynamic decisions.",
    "Agent loops require explicit boundaries.",
    "Tool calls must be validated and authorized.",
    "Human approval can provide an important safety checkpoint.",
    "Multi-agent systems provide specialization at the cost of additional complexity.",
    "Production agents require observability, failure handling and termination rules."
  ],

  keyTakeaways: [
    "Use workflows when the process is predictable.",
    "Use agents when dynamic decision-making adds value.",
    "Keep the agent inside explicit boundaries.",
    "Limit iterations, time, cost and tool access.",
    "Represent agent state explicitly.",
    "Validate actions before execution.",
    "Design every agent with a controlled termination path."
  ]
};

export default lesson6;