export const module2Practice = {
  id: "aiml-module2-practice",
  moduleNumber: 2,
  moduleTitle: "Problem Solving & Search",
  courseId: "aiml",
  moduleId: "module2",

  title: "Module 02 Practice — Problem Solving & Search",

  description:
    "Practice activities designed to reinforce problem formulation, state-space representation, search algorithms, heuristics, A* search, and optimization through mathematical reasoning and Python implementation.",

  instructions: [
    "Complete the activities in order from foundational reasoning to integrated implementation.",
    "Use Python for programming activities.",
    "For mathematical questions, show the calculation before giving the final answer.",
    "For algorithm-comparison activities, use the same problem environment so that the results can be compared fairly.",
    "Do not rely only on library implementations; understand and implement the core search logic yourself."
  ],

  practiceSections: [
    {
      id: "problem-formulation",
      title: "1. Problem Formulation",
      activities: [
        {
          id: "p1",
          title: "Define an AI Problem",
          task:
            "Choose a real-world problem such as route planning, maze solving, robot navigation, or puzzle solving. Identify the initial state, possible actions, transition rules, goal state, and objective."
        },
        {
          id: "p2",
          title: "State and Action Design",
          task:
            "Design a state representation for a grid-navigation problem. Represent each position using row and column coordinates and define the valid actions from each state."
        },
        {
          id: "p3",
          title: "Goal Test",
          task:
            "Write a Python function that receives a current state and a goal state and determines whether the goal has been reached."
        }
      ]
    },

    {
      id: "state-space",
      title: "2. State-Space Representation",
      activities: [
        {
          id: "p4",
          title: "Build a State-Space Graph",
          task:
            "Create a graph containing at least eight states. Represent the connections using a Python dictionary and identify the initial state and goal state."
        },
        {
          id: "p5",
          title: "Successor Generation",
          task:
            "Write a Python function that receives a state and returns all valid successor states."
        },
        {
          id: "p6",
          title: "Grid State Space",
          task:
            "Create a 6×6 grid containing free cells and obstacles. Represent every valid position as a state and generate its valid neighboring states."
        }
      ]
    },

    {
      id: "bfs",
      title: "3. Breadth-First Search",
      activities: [
        {
          id: "p7",
          title: "Manual BFS",
          task:
            "Draw a search tree with at least three levels and manually perform BFS from the root. Record the order in which states are expanded."
        },
        {
          id: "p8",
          title: "Implement BFS",
          task:
            "Implement Breadth-First Search in Python using collections.deque. Search for a goal state in a graph and return the traversal order."
        },
        {
          id: "p9",
          title: "Shortest Path With BFS",
          task:
            "Modify your BFS implementation to store parent states and reconstruct the shortest path between a start state and a goal state in an unweighted graph."
        }
      ]
    },

    {
      id: "dfs",
      title: "4. Depth-First Search",
      activities: [
        {
          id: "p10",
          title: "Manual DFS",
          task:
            "Use a small search tree and manually perform DFS. Record the exact order in which states are visited."
        },
        {
          id: "p11",
          title: "Recursive DFS",
          task:
            "Implement recursive DFS in Python. Use a visited set to prevent repeated exploration."
        },
        {
          id: "p12",
          title: "Iterative DFS",
          task:
            "Implement DFS using an explicit Python list as a stack. Compare the traversal order with your recursive implementation."
        },
        {
          id: "p13",
          title: "DFS Backtracking",
          task:
            "Create a small maze and use DFS to find a path from a start cell to a goal cell. Show how the algorithm backtracks when it reaches a dead end."
        }
      ]
    },

    {
      id: "ucs",
      title: "5. Cost-Based Search",
      activities: [
        {
          id: "p14",
          title: "Calculate Path Costs",
          task:
            "Given several weighted routes, calculate the total cost of every route by summing the individual edge costs. Identify the minimum-cost route."
        },
        {
          id: "p15",
          title: "Implement Uniform-Cost Search",
          task:
            "Create a weighted graph and implement Uniform-Cost Search using Python's heapq priority queue."
        },
        {
          id: "p16",
          title: "BFS vs UCS",
          task:
            "Create a graph where the path with fewer edges is more expensive than a path containing more edges. Run BFS and UCS and explain why their selected paths differ."
        }
      ]
    },

    {
      id: "heuristics",
      title: "6. Heuristics & Informed Search",
      activities: [
        {
          id: "p17",
          title: "Calculate Manhattan Distance",
          task:
            "For several pairs of grid coordinates, calculate the Manhattan distance using h(n) = |r1-r2| + |c1-c2|."
        },
        {
          id: "p18",
          title: "Calculate Euclidean Distance",
          task:
            "Calculate Euclidean distance for several coordinate pairs and determine when Euclidean distance is more appropriate than Manhattan distance."
        },
        {
          id: "p19",
          title: "Heuristic Map",
          task:
            "Create a grid with a fixed goal and calculate the Manhattan heuristic for every cell. Display the heuristic values using Python."
        },
        {
          id: "p20",
          title: "Greedy Best-First Search",
          task:
            "Implement Greedy Best-First Search using heapq. Prioritize states according to h(n) and observe how the heuristic changes the search behavior."
        }
      ]
    },

    {
      id: "astar",
      title: "7. A* Search",
      activities: [
        {
          id: "p21",
          title: "Calculate f(n)",
          task:
            "For a set of states with given g(n) and h(n) values, calculate f(n) = g(n) + h(n) and identify which state A* should prioritize."
        },
        {
          id: "p22",
          title: "Implement A*",
          task:
            "Implement A* Search for a grid-navigation problem using heapq, a g-cost dictionary, a heuristic function, and parent tracking."
        },
        {
          id: "p23",
          title: "Path Reconstruction",
          task:
            "Implement a path-reconstruction function that follows parent states from the goal back to the start and then reverses the resulting sequence."
        },
        {
          id: "p24",
          title: "A* Visualization",
          task:
            "Use Matplotlib to visualize the grid, obstacles, explored states, start position, goal position, and final A* path."
        }
      ]
    },

    {
      id: "optimization",
      title: "8. Optimization & Decision Making",
      activities: [
        {
          id: "p25",
          title: "Objective Function",
          task:
            "Define an objective function for a practical problem such as route cost, delivery time, energy consumption, or profit."
        },
        {
          id: "p26",
          title: "Minimization",
          task:
            "For f(x) = (x - 5)^2, evaluate multiple values of x and identify the value that minimizes the function."
        },
        {
          id: "p27",
          title: "Gradient Descent",
          task:
            "For f(x) = x², derive the gradient and implement several gradient-descent updates in Python."
        },
        {
          id: "p28",
          title: "Constraint-Based Decision",
          task:
            "Define an optimization problem with at least two constraints. Identify feasible and infeasible solutions before selecting the best feasible solution."
        }
      ]
    },

    {
      id: "comparison",
      title: "9. Search Strategy Comparison",
      activities: [
        {
          id: "p29",
          title: "Compare Search Behavior",
          task:
            "Run BFS, DFS, UCS, Greedy Best-First Search, and A* on the same graph or grid. Record the order of exploration."
        },
        {
          id: "p30",
          title: "Compare Path Quality",
          task:
            "For each algorithm, record path length and total path cost. Explain why the shortest path and cheapest path may be different."
        },
        {
          id: "p31",
          title: "Compare Efficiency",
          task:
            "Record the number of states explored and execution time for each algorithm. Explain how the search strategy affects computational effort."
        }
      ]
    }
  ],

  integratedPractice: {
    title: "Integrated Practice — AI Search Laboratory",
    objective:
      "Build one environment in which multiple AI search strategies can be implemented and compared fairly.",

    requirements: [
      "Create a weighted grid or graph.",
      "Define a start state and goal state.",
      "Include obstacles or unavailable transitions.",
      "Implement BFS.",
      "Implement DFS.",
      "Implement Uniform-Cost Search.",
      "Implement Greedy Best-First Search.",
      "Implement A* Search.",
      "Use an appropriate heuristic for informed search.",
      "Track visited or explored states.",
      "Reconstruct the final path.",
      "Calculate path length.",
      "Calculate total path cost.",
      "Count expanded states.",
      "Measure execution time.",
      "Visualize the resulting paths using Matplotlib."
    ],

    expectedAnalysis: [
      "Which algorithms found a solution?",
      "Which algorithm produced the shortest path?",
      "Which algorithm produced the lowest-cost path?",
      "Which algorithm explored the fewest states?",
      "How did the heuristic affect A* and Greedy Best-First Search?",
      "Why can DFS return a poor path even when it finds a solution quickly?",
      "Why can UCS explore more states than A*?",
      "What happens when all movement costs are equal?",
      "What happens when the heuristic is weak?",
      "Which algorithm is most appropriate for the particular environment, and why?"
    ]
  },

  quickCheck: [
    {
      question: "Which data structure is normally used by BFS?",
      answer: "A queue."
    },
    {
      question: "Which data structure is normally used by DFS?",
      answer: "A stack, either explicitly or through recursion."
    },
    {
      question: "What does UCS prioritize?",
      answer: "The state with the lowest accumulated path cost g(n)."
    },
    {
      question: "What does Greedy Best-First Search prioritize?",
      answer: "The state with the lowest heuristic value h(n)."
    },
    {
      question: "What is the A* evaluation function?",
      answer: "f(n) = g(n) + h(n)."
    },
    {
      question: "What does g(n) represent?",
      answer: "The actual cost from the start state to the current state."
    },
    {
      question: "What does h(n) represent?",
      answer: "The estimated cost from the current state to the goal."
    },
    {
      question: "Does DFS guarantee the shortest path?",
      answer: "No."
    },
    {
      question: "Does Greedy Best-First Search generally guarantee the lowest-cost path?",
      answer: "No."
    },
    {
      question: "What is an admissible heuristic?",
      answer:
        "A heuristic that does not overestimate the true optimal remaining cost."
    },
    {
      question: "What happens to A* when h(n) = 0?",
      answer:
        "Its evaluation becomes f(n) = g(n), giving UCS-like behavior."
    },
    {
      question: "Why is search algorithm selection important?",
      answer:
        "Different problems have different cost structures, objectives, search spaces, and available information, so no single strategy is appropriate for every problem."
    }
  ],

  reflection: [
    "Which search algorithm do you understand most clearly after completing this practice?",
    "Which algorithm required the most careful implementation?",
    "How did changing edge costs affect the preferred solution?",
    "How did changing the heuristic affect informed search?",
    "What did the experiments teach you that the mathematical formulas alone did not show?"
  ],

  completion: {
    previous: "/lesson/aiml/module2/lesson12",
    next: "/lesson/aiml/module2/project",
    backToModule: "/lesson/aiml/module2/about"
  }
};