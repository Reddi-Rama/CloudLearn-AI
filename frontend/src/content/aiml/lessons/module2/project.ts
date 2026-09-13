export const module2Project = {
  id: "aiml-module2-project",
  projectNumber: 2,
  courseId: "aiml",
  moduleId: "module2",

  title: "AI Pathfinding & Search Solver",

  description:
    "Build an AI search system that models a navigation problem as a state space and applies multiple search strategies to find and compare solutions. The project combines problem formulation, state representation, graph search, heuristics, path reconstruction, optimization, and algorithm evaluation.",

  objective:
    "Develop a practical AI pathfinding system that can represent a search problem, solve it using different search strategies, measure their performance, and explain why different algorithms produce different results.",

  problem: `
Many AI systems must make decisions by exploring a set of possible states.

A navigation system, robot, game character, or automated planner may need to determine how to move from an initial state to a desired goal while avoiding obstacles and controlling cost.

In this project, students will build a configurable pathfinding environment and implement multiple classical AI search algorithms. The system will then compare their behavior on the same problem.

The goal is not simply to find a path. The system must demonstrate how search strategy affects path quality, exploration, and computational effort.
`,

  skillsUsed: [
    "AI problem formulation",
    "State-space representation",
    "Graph representation",
    "Breadth-First Search",
    "Depth-First Search",
    "Uniform-Cost Search",
    "Greedy Best-First Search",
    "A* Search",
    "Heuristic functions",
    "Path reconstruction",
    "Path-cost calculation",
    "Optimization concepts",
    "Python programming",
    "heapq priority queues",
    "collections.deque",
    "Matplotlib visualization",
    "Algorithm comparison",
    "Performance analysis"
  ],

  prerequisites: [
    "Basic Python programming",
    "Functions and data structures",
    "Basic graphs and trees",
    "Understanding of states, actions, and goals",
    "Understanding of BFS and DFS",
    "Basic understanding of path cost",
    "Basic understanding of heuristics and A*"
  ],

  projectRequirements: {
    environment: {
      title: "1. Search Environment",
      requirements: [
        "Create a configurable 2D grid or graph.",
        "Define a start state.",
        "Define a goal state.",
        "Represent obstacles or unavailable states.",
        "Allow valid movement between neighboring states.",
        "Support movement costs."
      ]
    },

    problemModel: {
      title: "2. AI Problem Model",
      requirements: [
        "Represent every location as a state.",
        "Define valid actions.",
        "Generate successor states.",
        "Define the transition between states.",
        "Implement a goal test.",
        "Represent the search space clearly."
      ]
    },

    algorithms: {
      title: "3. Search Algorithms",
      requirements: [
        "Implement Breadth-First Search.",
        "Implement Depth-First Search.",
        "Implement Uniform-Cost Search.",
        "Implement Greedy Best-First Search.",
        "Implement A* Search."
      ]
    },

    heuristics: {
      title: "4. Heuristic System",
      requirements: [
        "Implement a heuristic function.",
        "Use Manhattan distance for suitable grid environments.",
        "Calculate h(n) for candidate states.",
        "Use g(n) for accumulated path cost.",
        "Calculate f(n) = g(n) + h(n) for A*.",
        "Explain how the heuristic influences search."
      ]
    },

    pathfinding: {
      title: "5. Path Reconstruction",
      requirements: [
        "Track parent states.",
        "Reconstruct the path after reaching the goal.",
        "Display the path from start to goal in the correct order.",
        "Handle the case where no path exists."
      ]
    },

    evaluation: {
      title: "6. Search Evaluation",
      requirements: [
        "Calculate path length.",
        "Calculate total path cost.",
        "Count explored states.",
        "Measure execution time.",
        "Determine whether a solution was found.",
        "Compare the results of all algorithms."
      ]
    },

    visualization: {
      title: "7. Visualization",
      requirements: [
        "Display the search grid or graph.",
        "Show the start state.",
        "Show the goal state.",
        "Show obstacles.",
        "Show explored states.",
        "Show the final path.",
        "Allow results from different algorithms to be compared visually."
      ]
    }
  },

  recommendedStructure: {
    title: "Recommended Python Structure",
    files: [
      {
        file: "main.py",
        purpose: "Runs the application and coordinates the experiment."
      },
      {
        file: "environment.py",
        purpose: "Defines the grid, states, obstacles, transitions, and movement costs."
      },
      {
        file: "search_algorithms.py",
        purpose: "Contains BFS, DFS, UCS, Greedy, and A* implementations."
      },
      {
        file: "heuristics.py",
        purpose: "Contains heuristic functions such as Manhattan distance."
      },
      {
        file: "visualization.py",
        purpose: "Visualizes the search environment, exploration, and paths."
      },
      {
        file: "comparison.py",
        purpose: "Measures and compares algorithm performance."
      }
    ]
  },

  algorithmSpecification: [
    {
      algorithm: "Breadth-First Search",
      evaluation: "Explore states level by level.",
      expectedUse:
        "Suitable for unweighted or equal-cost movement when shortest number of steps is required."
    },
    {
      algorithm: "Depth-First Search",
      evaluation: "Explore a branch deeply before backtracking.",
      expectedUse:
        "Useful for demonstrating depth-first exploration and backtracking."
    },
    {
      algorithm: "Uniform-Cost Search",
      evaluation: "Prioritize the smallest accumulated cost g(n).",
      expectedUse:
        "Suitable for weighted search problems where minimum path cost matters."
    },
    {
      algorithm: "Greedy Best-First Search",
      evaluation: "Prioritize the smallest heuristic h(n).",
      expectedUse:
        "Useful when goal-directed exploration is desired."
    },
    {
      algorithm: "A* Search",
      evaluation: "Use f(n) = g(n) + h(n).",
      expectedUse:
        "Suitable when both actual path cost and an informative heuristic should guide the search."
    }
  ],

  mathematicalFoundation: {
    state: "s = (row, column)",

    transition:
      "T(s, a) = s'",

    pathCost:
      "g(n) = sum of the costs of actions taken from the start to n",

    heuristic:
      "h(n) = estimated cost from n to the goal",

    astar:
      "f(n) = g(n) + h(n)",

    manhattanDistance:
      "h(n) = |row - goalRow| + |column - goalColumn|",

    objective:
      "Find a valid path while minimizing the defined path cost, when the selected algorithm provides the appropriate optimality guarantee."
  },

  exampleEnvironment: {
    title: "Example Grid",

    grid: [
      "S . . . # .",
      ". # # . # .",
      ". . . . . .",
      "# # . # # .",
      ". . . . . G"
    ],

    explanation: [
      "S represents the start state.",
      "G represents the goal state.",
      "# represents an obstacle.",
      ". represents a traversable state.",
      "Each traversable cell is represented by its row and column coordinates."
    ]
  },

  implementationGuidance: {
    title: "Implementation Guidance",

    pythonLibraries: [
      {
        library: "collections.deque",
        purpose: "Efficient FIFO queue implementation for BFS."
      },
      {
        library: "heapq",
        purpose: "Priority queue implementation for UCS, Greedy Best-First Search, and A*."
      },
      {
        library: "time",
        purpose: "Measure algorithm execution time."
      },
      {
        library: "matplotlib",
        purpose: "Visualize grids, explored states, and final paths."
      }
    ],

    principles: [
      "Implement the core algorithms yourself before using specialized pathfinding libraries.",
      "Keep the environment independent from the search algorithms.",
      "Use the same environment when comparing algorithms.",
      "Track parent states separately from the frontier.",
      "Prevent unnecessary repeated exploration.",
      "Keep path reconstruction reusable across algorithms."
    ]
  },

  comparisonMetrics: [
    {
      metric: "Solution Found",
      meaning: "Whether the algorithm successfully reached the goal."
    },
    {
      metric: "Path Length",
      meaning: "Number of actions or transitions in the final path."
    },
    {
      metric: "Path Cost",
      meaning: "Sum of the costs of all actions in the final path."
    },
    {
      metric: "States Explored",
      meaning: "Number of states expanded during the search."
    },
    {
      metric: "Execution Time",
      meaning: "Time required to complete the search."
    }
  ],

  expectedComparison: `
Students should not simply declare one algorithm as the winner.

The results must be interpreted according to the environment and objective.

For example:

BFS may produce a short path when all movements have equal cost.

DFS may reach the goal while producing a longer path.

UCS may prefer a path with more steps if its total cost is lower.

Greedy Best-First Search may reach the goal quickly but can select a more expensive route.

A* can combine accumulated cost and heuristic information to guide the search efficiently.

The actual experimental results should be used to support the final conclusion.
`,

  majorFeatures: [
    "Interactive or configurable search environment",
    "Start and goal selection",
    "Obstacle representation",
    "Weighted movement",
    "Five search algorithms",
    "Heuristic calculation",
    "Path reconstruction",
    "Search visualization",
    "Performance measurement",
    "Algorithm comparison",
    "No-solution detection"
  ],

  expectedOutcome: `
At the end of the project, students should have a working AI Pathfinding & Search Solver that can accept a search environment, apply multiple classical search algorithms, visualize their behavior, and compare the quality and efficiency of their solutions.

The project should demonstrate that AI problem solving involves more than implementing an algorithm. Students should be able to formulate the problem, represent its state space, select an appropriate search strategy, evaluate the resulting solution, and justify their engineering decision.
`,

  deliverables: [
    "Complete Python source code",
    "Search environment implementation",
    "BFS implementation",
    "DFS implementation",
    "UCS implementation",
    "Greedy Best-First Search implementation",
    "A* implementation",
    "Heuristic implementation",
    "Path reconstruction",
    "Visualization",
    "Algorithm comparison results",
    "Short technical report",
    "Screenshots of the working system"
  ],

  technicalReport: {
    sections: [
      "1. Problem Statement",
      "2. Objective",
      "3. State-Space Representation",
      "4. Algorithm Design",
      "5. Heuristic Design",
      "6. Implementation",
      "7. Experimental Results",
      "8. Algorithm Comparison",
      "9. Observations",
      "10. Conclusion"
    ]
  },

  evaluationCriteria: [
    {
      criterion: "Problem Formulation",
      focus:
        "Correct definition of states, actions, transitions, goals, and costs."
    },
    {
      criterion: "Algorithm Implementation",
      focus:
        "Correct implementation of BFS, DFS, UCS, Greedy Best-First Search, and A*."
    },
    {
      criterion: "Heuristic",
      focus:
        "Correct calculation and appropriate use of the heuristic."
    },
    {
      criterion: "Pathfinding",
      focus:
        "Correct path reconstruction and handling of unreachable goals."
    },
    {
      criterion: "Visualization",
      focus:
        "Clear representation of the search environment and algorithm behavior."
    },
    {
      criterion: "Evaluation",
      focus:
        "Meaningful measurement of path quality and computational effort."
    },
    {
      criterion: "Technical Understanding",
      focus:
        "Ability to explain why different algorithms behave differently."
    }
  ],

  extensionChallenges: [
    "Allow users to draw obstacles interactively.",
    "Allow users to change movement costs.",
    "Add diagonal movement with an appropriate cost.",
    "Implement multiple heuristic functions.",
    "Compare Manhattan and Euclidean heuristics.",
    "Add weighted terrain such as roads, grass, water, or mountains.",
    "Animate the search process step by step.",
    "Allow the user to select the search algorithm.",
    "Generate random search environments.",
    "Run multiple experiments automatically and calculate average performance.",
    "Create a performance dashboard comparing all algorithms."
  ],

  learningOutcome: [
    "Formulate real-world problems as AI search problems.",
    "Represent states and transitions programmatically.",
    "Implement classical uninformed and informed search algorithms.",
    "Understand the mathematical role of g(n), h(n), and f(n).",
    "Use Python data structures appropriate for different search strategies.",
    "Visualize algorithm behavior.",
    "Evaluate algorithms using measurable performance criteria.",
    "Select search strategies based on problem requirements.",
    "Explain the relationship between classical AI search and optimization."
  ],

  completion: {
    previous: "/lesson/aiml/module2/practice",
    next: "/courses/aiml/module3",
    backToModule: "/lesson/aiml/module2/about",
    courseOverview: "/courses/aiml",
    courseRoadmap: "/courses/aiml/roadmap"
  }
};