export const module2About = {
  id: "module2",
  moduleNumber: 2,
  title: "Problem Solving & Search",
  courseId: "aiml",

  navigation: {
    courseId: "aiml",
    moduleId: "module2",

    previous: {
      label: "Module 01",
      href: "/lesson/aiml/module1/about"
    },

    next: {
      label: "Lesson 01",
      href: "/lesson/aiml/module2/lesson1"
    },

    backToCourse: {
      label: "Course Overview",
      href: "/courses/aiml"
    },

    courseRoadmap: {
      label: "Course Roadmap",
      href: "/courses/aiml/roadmap"
    }
  },

  content: String.raw`
# Module 02 — Problem Solving & Search

## Module Overview

Artificial Intelligence systems often need to solve problems where the correct answer is not directly given.

Instead, the system must:

- Understand the problem
- Represent the problem
- Identify possible states
- Define available actions
- Explore possible solutions
- Compare alternatives
- Select an appropriate solution

This module introduces the foundations of AI problem solving through state-space representation, search, heuristics, and optimization.

You will move from simple problem representation to implementing classical search algorithms in Python.

The central idea of this module is:

\`\`\`
Problem
   ↓
Problem Formulation
   ↓
State Representation
   ↓
Actions
   ↓
Search Space
   ↓
Search Strategy
   ↓
Solution
   ↓
Evaluation
\`\`\`

---

# What You Will Learn

By completing this module, you will learn:

- What an AI problem is
- How AI problems are formulated
- States, actions, goals, and transitions
- State-space representation
- Search trees
- Graph representation
- Breadth-First Search
- Depth-First Search
- Cost-based search
- Heuristics
- Informed search
- A* search
- Optimization and decision making
- How to compare search strategies
- How to implement search algorithms in Python
- How to visualize search behavior
- How to analyze time and space requirements
- How to choose a suitable search strategy for a problem

---

# Module Learning Progression

The module follows this progression:

\`\`\`
AI Problem
    ↓
Problem Formulation
    ↓
States and Actions
    ↓
State Space
    ↓
Search Trees and Graphs
    ↓
Uninformed Search
    ↓
Cost-Based Search
    ↓
Heuristics
    ↓
Informed Search
    ↓
A* Search
    ↓
Optimization
    ↓
Search Strategy Comparison
    ↓
AI Pathfinding & Search Solver
\`\`\`

---

# Module Lessons

## Lesson 01 — What Is an AI Problem?

You will learn how AI problems differ from simple computational problems.

Topics include:

- AI problem characteristics
- Inputs and outputs
- Initial state
- Goal state
- Possible actions
- Constraints
- Solution definition
- Search-based problem solving

---

## Lesson 02 — Problem Formulation

You will learn how to convert a real-world problem into a form that an AI system can solve.

Topics include:

- Defining the objective
- Identifying states
- Defining actions
- Defining transitions
- Defining goals
- Defining constraints
- Formal problem formulation

---

## Lesson 03 — States, Actions & Goals

You will learn the fundamental components used to describe search problems.

Topics include:

- State
- Action
- Transition
- Initial state
- Goal state
- Path
- Solution
- State transitions

You will implement simple state-transition systems in Python.

---

## Lesson 04 — State-Space Representation

You will learn how possible states of a problem form a state space.

Topics include:

- State-space graphs
- State representation
- Transitions
- Reachable states
- Solution paths
- Search space size
- State-space modeling

You will represent practical problems using Python data structures.

---

## Lesson 05 — Search Trees & Graphs

You will learn how AI search algorithms explore possible solutions.

Topics include:

- Trees
- Graphs
- Nodes
- Edges
- Root nodes
- Child nodes
- Paths
- Cycles
- Visited states
- Search trees vs search graphs

You will implement graph representations using Python.

---

## Lesson 06 — Breadth-First Search

You will learn how Breadth-First Search explores states level by level.

Topics include:

- BFS concept
- Queue
- Level-order exploration
- Shortest path in unweighted graphs
- Visited states
- Python implementation
- BFS complexity
- Practical applications

You will implement BFS and use it to solve a pathfinding problem.

---

## Lesson 07 — Depth-First Search

You will learn how Depth-First Search explores one path deeply before backtracking.

Topics include:

- DFS concept
- Stack
- Recursion
- Backtracking
- Visited states
- Python implementation
- DFS complexity
- Practical applications

You will compare DFS with BFS.

---

## Lesson 08 — Cost-Based Search

You will learn how search can consider the cost of actions rather than treating every transition equally.

Topics include:

- Path cost
- Edge cost
- Weighted graphs
- Priority queues
- Uniform-Cost Search
- Lowest-cost path
- Python implementation
- Search cost analysis

---

## Lesson 09 — Heuristics & Informed Search

You will learn how additional knowledge can guide search toward promising solutions.

Topics include:

- Heuristics
- Heuristic functions
- Estimated cost
- Informed search
- Greedy search
- Search guidance
- Heuristic quality
- Admissibility intuition

You will implement heuristic functions in Python.

---

## Lesson 10 — A* Search

You will learn one of the most important classical AI search algorithms.

The central evaluation function is:

\`\`\`
f(n) = g(n) + h(n)
\`\`\`

where:

\`\`\`
g(n) = cost from the start to node n

h(n) = estimated cost from node n to the goal

f(n) = estimated total solution cost
\`\`\`

You will implement A* and apply it to a practical pathfinding problem.

---

## Lesson 11 — Optimization & Decision Making

You will learn how AI systems can search for better solutions rather than simply finding any valid solution.

Topics include:

- Objective functions
- Cost functions
- Constraints
- Optimization
- Local improvement
- Decision making
- Search vs optimization
- Practical optimization examples

---

## Lesson 12 — Comparing Search Strategies

You will compare the major search approaches learned in the module.

You will analyze:

- Completeness
- Optimality
- Time requirements
- Space requirements
- Memory usage
- Path quality
- Search behavior
- Appropriate use cases

You will implement experiments to compare algorithms.

---

# Coding and Mathematical Approach

This module is coding-oriented.

You will not only memorize search algorithms.

For important algorithms, the learning process will be:

\`\`\`
Concept
   ↓
Problem Representation
   ↓
Mathematical Intuition
   ↓
Algorithm
   ↓
Python Implementation
   ↓
Experiment
   ↓
Visualization
   ↓
Analysis
\`\`\`

Python will be used throughout the module.

Core Python concepts will include:

- Lists
- Dictionaries
- Sets
- Tuples
- Functions
- Classes where useful
- Queues
- Stacks
- Priority queues
- Graph representations
- Recursion
- Algorithm analysis

---

# Mathematical Intuition

Search algorithms require mathematical reasoning.

You will work with concepts such as:

\`\`\`
Path Cost
Distance
Heuristic
Objective Function
Optimization
Complexity
\`\`\`

For A* search:

\`\`\`
f(n) = g(n) + h(n)
\`\`\`

You will understand what each term means rather than simply memorizing the formula.

---

# Practical Search Problems

Throughout the module, search algorithms will be applied to practical problems such as:

- Maze solving
- Grid navigation
- Route finding
- Robot movement
- Puzzle solving
- Network routing
- Game-state exploration
- Resource planning
- Decision problems

---

# Visualization

Search algorithms are easier to understand when their behavior can be observed.

You will use Python visualization techniques to study:

- Explored states
- Frontier states
- Search paths
- Visited nodes
- Goal discovery
- Path cost
- Differences between algorithms

Possible tools include:

\`\`\`
Python
NumPy
Matplotlib
\`\`\`

The focus is on understanding the algorithm through experiments.

---

# Search Strategy Progression

The algorithms build progressively.

\`\`\`
Breadth-First Search
        ↓
Depth-First Search
        ↓
Cost-Based Search
        ↓
Heuristic Search
        ↓
A* Search
\`\`\`

Each new algorithm addresses limitations or introduces additional information.

---

# Module Project

## AI Pathfinding & Search Solver

At the end of this module, you will build:

**AI Pathfinding & Search Solver**

The project will allow users to define a pathfinding problem and compare different search strategies.

The system should demonstrate:

- Problem formulation
- Grid or graph representation
- Initial state
- Goal state
- Actions
- Search algorithms
- Path discovery
- Path cost
- Heuristics
- Visualization
- Algorithm comparison

Possible algorithms include:

\`\`\`
BFS
DFS
Uniform-Cost Search
A*
\`\`\`

The project should not simply display a final path.

It should help visualize and compare how different search algorithms solve the same problem.

---

# Module Practice

After completing the lessons, you will complete module practice covering:

- Problem formulation
- State-space representation
- Graph modeling
- BFS implementation
- DFS implementation
- Cost-based search
- Heuristics
- A* search
- Complexity analysis
- Search strategy selection
- Practical coding problems

The practice prepares you for the module project.

---

# Module Completion Flow

The module follows:

\`\`\`
Lesson 01
    ↓
Lesson 02
    ↓
Lesson 03
    ↓
Lesson 04
    ↓
Lesson 05
    ↓
Lesson 06
    ↓
Lesson 07
    ↓
Lesson 08
    ↓
Lesson 09
    ↓
Lesson 10
    ↓
Lesson 11
    ↓
Lesson 12
    ↓
Module Practice
    ↓
AI Pathfinding & Search Solver
    ↓
Next Module
\`\`\`

There is no separate module assessment.

The formal course assessment will be conducted through the single final assessment for the entire AI & Machine Learning Foundations course.

---

# Learning Outcomes

After completing this module, you should be able to:

- Define an AI problem formally
- Identify initial and goal states
- Define actions and transitions
- Represent problems using state spaces
- Represent search problems using graphs
- Implement BFS in Python
- Implement DFS in Python
- Implement cost-based search
- Explain heuristic functions
- Implement informed search
- Implement A* search
- Explain the A* evaluation function
- Analyze search behavior
- Compare search strategies
- Select an appropriate search approach
- Visualize search processes
- Build a practical AI pathfinding system

---

# Industry Connection

Search is a foundational AI technique.

The concepts learned here appear in areas such as:

- Robotics
- Navigation
- Route planning
- Logistics
- Network routing
- Games
- Scheduling
- Automated planning
- Resource allocation
- Decision systems

Modern AI systems may combine search with:

\`\`\`
Machine Learning
Optimization
Planning
Rules
Generative AI
\`\`\`

Understanding classical search gives you the foundation required to understand more advanced AI planning and decision systems.

---

# What Comes Next

Module 01 introduced AI concepts and a simple rule-based intelligent system.

Module 02 now introduces a different way of solving AI problems:

\`\`\`
Instead of directly defining the answer,
the system searches through possible states
to find a solution.
\`\`\`

You will begin with the fundamental question:

\`\`\`
What exactly is an AI problem?
\`\`\`

Then you will learn how to represent it mathematically and computationally before implementing increasingly powerful search algorithms.

The module culminates in a complete:

## AI Pathfinding & Search Solver
`,

  lessons: [
    {
      id: "lesson1",
      number: 1,
      title: "What Is an AI Problem?",
      href: "/lesson/aiml/module2/lesson1"
    },
    {
      id: "lesson2",
      number: 2,
      title: "Problem Formulation",
      href: "/lesson/aiml/module2/lesson2"
    },
    {
      id: "lesson3",
      number: 3,
      title: "States, Actions & Goals",
      href: "/lesson/aiml/module2/lesson3"
    },
    {
      id: "lesson4",
      number: 4,
      title: "State-Space Representation",
      href: "/lesson/aiml/module2/lesson4"
    },
    {
      id: "lesson5",
      number: 5,
      title: "Search Trees & Graphs",
      href: "/lesson/aiml/module2/lesson5"
    },
    {
      id: "lesson6",
      number: 6,
      title: "Breadth-First Search",
      href: "/lesson/aiml/module2/lesson6"
    },
    {
      id: "lesson7",
      number: 7,
      title: "Depth-First Search",
      href: "/lesson/aiml/module2/lesson7"
    },
    {
      id: "lesson8",
      number: 8,
      title: "Cost-Based Search",
      href: "/lesson/aiml/module2/lesson8"
    },
    {
      id: "lesson9",
      number: 9,
      title: "Heuristics & Informed Search",
      href: "/lesson/aiml/module2/lesson9"
    },
    {
      id: "lesson10",
      number: 10,
      title: "A* Search",
      href: "/lesson/aiml/module2/lesson10"
    },
    {
      id: "lesson11",
      number: 11,
      title: "Optimization & Decision Making",
      href: "/lesson/aiml/module2/lesson11"
    },
    {
      id: "lesson12",
      number: 12,
      title: "Comparing Search Strategies",
      href: "/lesson/aiml/module2/lesson12"
    }
  ],

  practice: {
    title: "Module 02 Practice",
    href: "/lesson/aiml/module2/practice"
  },

  project: {
    title: "AI Pathfinding & Search Solver",
    href: "/lesson/aiml/module2/project"
  },

  completion: {
    nextModule: "/lesson/aiml/module3/about"
  }
};