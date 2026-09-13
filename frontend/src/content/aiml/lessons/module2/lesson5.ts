const lesson5 = {
  id: "lesson5",
  title: "Search Trees and Graphs",
  content: `
# Search Trees and Graphs

## Learning Goals

By the end of this lesson, you will be able to:

- Understand how search problems are represented using trees and graphs.
- Distinguish between a search tree and a state-space graph.
- Understand nodes, edges, paths, depth, and branching factor.
- Understand how search algorithms expand nodes.
- Identify repeated states and cycles.
- Understand why graph-based search is more efficient than naive tree search.
- Represent simple search structures using Python.
- Analyze the practical behavior of search algorithms.

---

# 1. Introduction

In the previous lesson, we learned how an AI problem can be represented as a state space.

A state space tells us:

- where the system can be,
- what actions are possible,
- how actions change states,
- where the initial state is,
- and what the goal state is.

However, an AI system still needs a way to explore this state space.

This is where **search trees and graphs** become important.

A search algorithm does not normally inspect every possible state at once.

Instead, it gradually explores states.

For example, suppose a robot starts at position A and must reach position G.

The robot may have several possible movements:

A -> B
A -> C
A -> D

From B, it may move to:

B -> E
B -> F

From C, it may move to:

C -> F
C -> G

The AI must decide which states to explore and in what order.

This exploration can be represented using a tree or a graph.

---

# 2. What Is a Search Tree?

A **search tree** represents the possible sequences of actions starting from an initial state.

The root of the tree represents the initial state.

Each child represents a possible action from its parent.

For example:

        A
       /|\\
      B C D
     /|   |
    E F   G

Here:

- A is the root.
- B, C, and D are children of A.
- E and F are children of B.
- G is a child of D.

The tree represents possible action sequences.

For example:

A -> B -> E

means:

1. Start at A.
2. Take the action that produces B.
3. Take the action that produces E.

---

# 3. Root Node

The first node in a search tree is called the **root**.

The root represents the initial state.

If an AI problem starts at state S0:

    S0

then S0 is the root of the search tree.

For a route-finding problem:

    Mumbai

could be the root if Mumbai is the starting location.

---

# 4. Nodes

A **node** represents a state or a search situation.

A search node can contain more information than just the state.

Conceptually, a search node may contain:

    Node = {
        state,
        parent,
        action,
        path_cost,
        depth
    }

For example:

    state = B
    parent = A
    action = MoveRight
    path_cost = 5
    depth = 1

This information allows the AI to reconstruct the solution path.

---

# 5. Edges

An edge represents a connection between two nodes.

For example:

    A -> B

means that an action can transform state A into state B.

In an AI problem, an edge may represent:

- a movement,
- a decision,
- a transition,
- a transportation route,
- a game move,
- or an operation.

Edges can also have costs.

Example:

    A --5--> B

means moving from A to B has a cost of 5.

---

# 6. Paths

A **path** is a sequence of connected states.

Example:

    A -> B -> E -> G

This is a path from A to G.

The path may contain several actions.

If each action has a cost:

    A --2--> B
    B --3--> E
    E --4--> G

then the total path cost is:

    2 + 3 + 4 = 9

Path cost is important because some AI problems require the cheapest solution rather than simply any solution.

---

# 7. Depth

The **depth** of a node represents how many actions are required to reach that node from the root.

Example:

    A
   / \\
  B   C
 / \\
D   E

Depth:

    A = 0
    B = 1
    C = 1
    D = 2
    E = 2

The root always has depth 0.

---

# 8. Branching Factor

The **branching factor** represents the number of children generated from a node.

Suppose:

    A
   /|\\
  B C D

A has three children.

Therefore:

    branching factor = 3

If the average branching factor is b and the search reaches depth d, the number of nodes can grow approximately as:

    1 + b + b^2 + ... + b^d

This demonstrates why search spaces can become extremely large.

Even a small branching factor can produce many states at greater depths.

---

# 9. Search Tree vs State-Space Graph

A state-space graph represents actual states and transitions.

A search tree represents the different paths discovered while searching.

This difference is extremely important.

Consider:

    A -> B
    A -> C
    B -> D
    C -> D

State D can be reached through two different paths.

The graph contains only one state D.

But a search tree may contain two separate nodes representing D:

        A
       / \\
      B   C
       \\ /
        D

The search tree records different paths.

The graph records the underlying states and their connections.

---

# 10. Why Search Trees Can Become Large

Suppose every state produces three new states.

At depth 0:

    1 node

At depth 1:

    3 nodes

At depth 2:

    9 nodes

At depth 3:

    27 nodes

At depth 4:

    81 nodes

At depth 5:

    243 nodes

The number grows exponentially.

This is one of the fundamental challenges of AI search.

A search algorithm must therefore decide:

- which node to explore,
- which nodes to postpone,
- which repeated states to ignore,
- and when to stop.

---

# 11. Tree Search

In **tree search**, the algorithm treats each generated path as a separate search branch.

A simplified process is:

1. Start with the initial state.
2. Add the initial state to the search structure.
3. Select a node.
4. Check whether it is the goal.
5. Expand the node.
6. Generate its children.
7. Add the children to the search structure.
8. Continue until a goal is found.

The exact behavior depends on the search strategy.

Examples include:

- Breadth-First Search
- Depth-First Search
- Uniform-Cost Search

---

# 12. Graph Search

Graph search improves on basic tree search by remembering states that have already been explored.

A typical graph-search algorithm maintains a structure called the **explored set** or **closed set**.

Conceptually:

    frontier = states waiting to be explored
    explored = states already examined

When a new state is generated, the algorithm checks whether it has already been explored.

If it has, the algorithm can avoid expanding it again.

This prevents unnecessary repeated work.

---

# 13. Repeated States

Consider:

    A -> B
    A -> C
    B -> D
    C -> D

D can be reached from both B and C.

Without checking for repeated states, the search may process D multiple times.

With graph search:

    explored = {A, B, C, D}

Once D has been processed, the algorithm does not need to expand D again under the same conditions.

This can significantly reduce computation.

---

# 14. Cycles

A **cycle** occurs when a path eventually returns to a previously visited state.

Example:

    A -> B -> C -> A

The search could continue indefinitely:

    A -> B -> C -> A -> B -> C -> ...

This is called an infinite loop or infinite search path.

Graph search helps prevent this by keeping track of visited states.

For example:

    explored = {A, B, C}

When the algorithm encounters A again, it recognizes that A has already been explored.

---

# 15. Practical Example: Route Finding

Suppose an AI system must find a route between cities.

The graph is:

    A -> B
    A -> C
    B -> D
    C -> D
    D -> E

The initial state is:

    A

The goal is:

    E

Possible paths include:

    A -> B -> D -> E

and:

    A -> C -> D -> E

The search algorithm explores these possibilities.

If D has already been explored, graph search can avoid processing the same state unnecessarily.

---

# 16. Search Node and State Are Different

This distinction is very important.

A **state** describes the actual configuration of the problem.

A **search node** describes how the search reached that state.

For example:

State:

    D

Search node 1:

    A -> B -> D

Search node 2:

    A -> C -> D

Both search nodes contain the same state D.

But they have different parents and different paths.

Therefore:

    State != Search Node

This distinction becomes important when implementing search algorithms.

---

# 17. Frontier

The **frontier** is the collection of generated nodes that have not yet been expanded.

Another common name is:

    open list

Example:

    frontier = [B, C, D]

The search algorithm selects one node from the frontier according to its strategy.

Different algorithms select different nodes.

For example:

Breadth-First Search:

    select the oldest node

Depth-First Search:

    select the newest/deepest node

Cost-based search:

    select the lowest-cost node

This selection rule determines the behavior of the search algorithm.

---

# 18. Explored Set

The explored set stores states that have already been expanded.

Example:

    explored = {A, B, C}

When the algorithm generates a state D:

    D not in explored

so D can be considered for expansion.

If it generates B again:

    B in explored

then the algorithm can avoid expanding B again.

This is one of the main advantages of graph search.

---

# 19. Search Process

A general graph-search process can be represented as:

    Start
      |
      v
    Initial State
      |
      v
    Add to Frontier
      |
      v
    Select Node
      |
      v
    Goal?
     / \\
   Yes  No
    |    |
    v    v
  Return Expand
         |
         v
    Generate States
         |
         v
    Check Repeated States
         |
         v
    Add Valid States
         |
         v
      Continue

The search continues until:

- a goal is found,
- the frontier becomes empty,
- or another stopping condition is reached.

---

# 20. Python Representation

A simple graph can be represented using a Python dictionary.

Example:

    graph = {
        "A": ["B", "C"],
        "B": ["D"],
        "C": ["D"],
        "D": ["E"],
        "E": []
    }

Here:

    A -> B, C
    B -> D
    C -> D
    D -> E

The dictionary represents the graph structure.

To obtain the neighbors of A:

    graph["A"]

Output:

    ["B", "C"]

These neighboring states are the possible next states.

---

# 21. Building a Search Tree

Suppose the graph is:

    graph = {
        "A": ["B", "C"],
        "B": ["D"],
        "C": ["D"],
        "D": ["E"],
        "E": []
    }

Starting from A, the search can generate:

    A
   / \\
  B   C
  |   |
  D   D
   \\ /
    E

Notice that D appears twice in the search tree because there are two different paths to D.

The underlying graph contains only one state D.

---

# 22. Simple Python Search Structure

A simple queue-based exploration can be represented as:

    frontier = ["A"]
    explored = set()

The algorithm repeatedly:

1. removes a state from the frontier,
2. checks whether it is the goal,
3. adds it to explored,
4. generates its neighbors,
5. adds new states to the frontier.

The important idea is not the syntax.

The important idea is the separation between:

    Frontier
    Explored Set
    State Expansion

These three concepts appear throughout AI search.

---

# 23. Practical Experiment

Consider this graph:

    A -> B, C
    B -> D, E
    C -> F
    D -> G
    E -> G
    F -> G

Start:

    A

Goal:

    G

Possible paths include:

    A -> B -> D -> G

    A -> B -> E -> G

    A -> C -> F -> G

The AI must explore the graph to find a solution.

Different search strategies may discover different paths first.

This is why search strategy matters.

---

# 24. Graph Search in Games

Search trees and graphs are also used in games.

Consider a simple game where a player has three possible moves.

From the current position:

    State S

the player can choose:

    Move A
    Move B
    Move C

Each move creates a new game state.

The AI can generate a search tree:

            S
        /   |   \\
       A    B    C
      / \\       / \\
     ... ...   ... ...

The AI evaluates future states and chooses an action.

Game-playing AI therefore relies heavily on state representation and search.

---

# 25. Graph Search in Robotics

A robot operating in a building can represent locations as states.

Example:

    Room A
      |
    Corridor
      |
    Room B
     / \\
  Room C Room D

The robot can search for a route from its current location to a target location.

The same concepts apply:

- states,
- actions,
- nodes,
- edges,
- paths,
- costs,
- frontier,
- explored set.

---

# 26. Graph Search in Navigation

Navigation applications can represent roads as graphs.

For example:

    Location A
       |
    Location B
      / \\
     C   D
      \\ /
       E

Roads are edges.

Locations are nodes.

Distances or travel times can become edge costs.

The search algorithm can then find a route from the starting location to the destination.

Real navigation systems are much more complex, but the underlying graph idea is fundamental.

---

# 27. Why Graph Search Is Important

Graph search provides several important benefits.

### Avoids repeated exploration

Already explored states can be recognized.

### Handles cycles

The algorithm can prevent endless revisiting of states.

### Saves computation

Repeated work can be reduced.

### Supports large problems

Graph-based representations make complex problems easier to manage.

### Provides a foundation for advanced algorithms

Many AI search algorithms are built using frontier and explored-state concepts.

---

# 28. Mathematical View

Let the state-space graph be:

    G = (V, E)

where:

    V = set of states

    E = set of transitions

A path is a sequence:

    P = (s0, s1, s2, ..., sk)

where each consecutive pair is connected by an edge.

If each edge has a cost c:

    Cost(P) = sum of c(si, ai, si+1)

The objective may be to find a path from:

    s0

to a goal state:

    sg

while minimizing the total cost.

This mathematical representation connects graph theory with AI search.

---

# 29. Search Tree Complexity

If the branching factor is b and the goal is at depth d, a simple tree search may generate approximately:

    O(b^d)

nodes in the worst case.

This explains why AI search can become expensive very quickly.

For example, with:

    b = 3
    d = 8

the number of possible nodes grows rapidly.

This is why intelligent search strategies are necessary.

---

# 30. Tree Search vs Graph Search

Tree search:

- Does not necessarily remember previously explored states.
- Can generate duplicate states.
- Can repeatedly explore cycles.
- May perform unnecessary work.

Graph search:

- Maintains an explored set.
- Detects repeated states.
- Can prevent many cycles.
- Usually performs less redundant exploration.

Graph search therefore provides a more efficient framework for many problems.

---

# 31. Engineering Perspective

When building an AI system, search is not simply about finding any path.

The system may need to consider:

- correctness,
- speed,
- memory usage,
- path cost,
- solution quality,
- repeated states,
- and problem size.

For example, an autonomous robot may need a route that is:

- valid,
- short,
- inexpensive,
- and computationally practical.

Therefore, choosing the right search representation and algorithm is an engineering decision.

---

# 32. Common Mistakes

### Mistake 1: Confusing a state with a node

A state represents the problem configuration.

A search node contains information about how the search reached that state.

### Mistake 2: Ignoring repeated states

Repeated states can cause unnecessary computation.

### Mistake 3: Ignoring cycles

Graphs may contain cycles.

A search algorithm must handle them safely.

### Mistake 4: Assuming every path has the same cost

Different edges may have different costs.

### Mistake 5: Assuming the first path is always optimal

The first solution found depends on the search strategy.

It may not be the cheapest solution.

---

# 33. Practice Questions

1. What is a search tree?
2. What is a search graph?
3. What does the root represent?
4. What is an edge?
5. What is a path?
6. What is the depth of a node?
7. What is branching factor?
8. What is a frontier?
9. What is an explored set?
10. Why are repeated states a problem?
11. What is a cycle?
12. Why is graph search generally better than naive tree search?

---

# 34. Coding Practice

Create the following graph in Python:

    A -> B, C
    B -> D, E
    C -> F
    D -> G
    E -> G
    F -> G

Your tasks:

1. Represent the graph using a dictionary.
2. Print the neighbors of A.
3. Print the neighbors of B.
4. Create an empty frontier.
5. Create an explored set.
6. Add A to the frontier.
7. Simulate expanding A.
8. Add B and C to the frontier.
9. Mark A as explored.
10. Continue the process until G is discovered.

---

# 35. Challenge

Design a small graph representing locations in a college.

Use at least:

- 8 locations,
- 10 connections,
- one starting location,
- one goal location.

Then answer:

1. What is the state?
2. What is an action?
3. What are the nodes?
4. What are the edges?
5. What is the branching factor?
6. Are there any cycles?
7. Are there repeated states?
8. What possible paths lead to the goal?

---

# 36. Quick Check

### Question 1

What does the root node represent?

**Answer:** The initial state.

### Question 2

What does an edge represent?

**Answer:** A transition or action connecting states.

### Question 3

What is stored in the frontier?

**Answer:** Generated nodes that are waiting to be explored.

### Question 4

Why maintain an explored set?

**Answer:** To recognize states that have already been explored and reduce repeated work.

### Question 5

Can two search nodes represent the same state?

**Answer:** Yes. Different paths can reach the same state.

---

# 37. Key Takeaways

- A search tree represents possible sequences of actions.
- A state-space graph represents states and transitions.
- The root represents the initial state.
- Nodes represent search situations.
- Edges represent transitions.
- Paths represent sequences of actions.
- Depth represents the number of actions from the root.
- Branching factor represents the number of possible children.
- The frontier contains nodes waiting to be explored.
- The explored set contains states already examined.
- Repeated states can cause unnecessary computation.
- Cycles can cause infinite exploration if they are not handled.
- Graph search reduces repeated exploration.
- Search trees and graphs form the foundation of many AI algorithms.
- Breadth-First Search, Depth-First Search, cost-based search, and A* build on these concepts.
`
};

export default lesson5;
