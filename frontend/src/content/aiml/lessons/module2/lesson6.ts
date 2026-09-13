const lesson6 = {
  id: "lesson6",
  title: "Breadth-First Search",
  content: `
# Breadth-First Search

## Learning Goals

By the end of this lesson, you will be able to:

- Understand the idea behind Breadth-First Search (BFS).
- Understand why BFS explores a search space level by level.
- Understand the role of a queue in BFS.
- Understand frontier and explored states.
- Trace BFS manually.
- Understand BFS completeness.
- Understand when BFS gives an optimal solution.
- Implement BFS in Python.
- Analyze BFS time and space complexity.
- Apply BFS to practical AI problems.

---

# 1. Introduction

Breadth-First Search, commonly called **BFS**, is one of the most fundamental search algorithms in Artificial Intelligence and computer science.

BFS explores states **level by level**.

It first explores the initial state.

Then it explores all states one action away.

Then all states two actions away.

Then all states three actions away.

The basic idea is:

    Explore nearby states before exploring deeper states.

This makes BFS particularly useful when we want to find a solution with the smallest number of actions.

---

# 2. Basic Idea

Consider this search tree:

          A
        / | \\
       B  C  D
      / \\ |  |
     E   F G  H

Starting from A, BFS explores:

    A

Then:

    B, C, D

Then:

    E, F, G, H

The order is therefore:

    A -> B -> C -> D -> E -> F -> G -> H

BFS does not immediately follow one branch deeply.

Instead, it completely processes one level before moving to the next level.

---

# 3. Levels in BFS

Consider:

          A
        /   \\
       B     C
      / \\   / \\
     D   E F   G

The levels are:

    Level 0: A

    Level 1: B, C

    Level 2: D, E, F, G

BFS processes the levels in this order.

This is the defining characteristic of Breadth-First Search.

---

# 4. Why BFS Uses a Queue

BFS normally uses a **queue**.

A queue follows the principle:

    First In, First Out

or:

    FIFO

The state that enters the queue first is processed first.

Example:

    Queue = [A]

Remove A and generate:

    B, C, D

Now:

    Queue = [B, C, D]

Remove B:

    Queue = [C, D]

If B generates E and F:

    Queue = [C, D, E, F]

C is processed next because it entered the queue earlier.

This naturally produces level-by-level exploration.

---

# 5. Queue Intuition

Imagine students waiting in a line.

The first student entering the line is the first student served.

BFS behaves in the same way.

If states are added in this order:

    B
    C
    D

they are processed in the same order:

    B
    C
    D

This simple data structure creates the characteristic BFS behavior.

---

# 6. BFS Algorithm

A basic BFS algorithm works as follows:

1. Create an empty queue.
2. Add the initial state to the queue.
3. Mark the initial state as explored.
4. Remove the first state from the queue.
5. Check whether it is the goal.
6. Generate its neighboring states.
7. Add unexplored states to the queue.
8. Repeat until the goal is found or the queue becomes empty.

Conceptually:

    frontier = queue

    while frontier is not empty:

        remove first node

        if node is goal:
            return solution

        expand node

        add new states to frontier

---

# 7. Example Graph

Consider:

    A -> B, C
    B -> D, E
    C -> F, G
    D -> H
    E -> H
    F -> I
    G -> I

Start:

    A

Goal:

    H

BFS begins with:

    Queue = [A]

Process A:

    Queue = [B, C]

Process B:

    Queue = [C, D, E]

Process C:

    Queue = [D, E, F, G]

Process D:

    Queue = [E, F, G, H]

H is now discovered.

The search can return a solution.

---

# 8. BFS Search Tree

The corresponding tree is:

            A
          /   \\
         B     C
        / \\   / \\
       D   E F   G
       |
       H

BFS explores:

    A
    B, C
    D, E, F, G
    H

It does not explore H before processing the earlier levels.

---

# 9. Step-by-Step Trace

Suppose:

    Start = A
    Goal = H

Initial:

    Frontier = [A]
    Explored = {}

### Step 1

Remove A.

    Frontier = []

Mark A explored:

    Explored = {A}

Generate:

    B, C

Add them:

    Frontier = [B, C]

### Step 2

Remove B.

    Frontier = [C]

Generate:

    D, E

Add them:

    Frontier = [C, D, E]

### Step 3

Remove C.

    Frontier = [D, E]

Generate:

    F, G

Add them:

    Frontier = [D, E, F, G]

### Step 4

Remove D.

    Frontier = [E, F, G]

Generate:

    H

Add H:

    Frontier = [E, F, G, H]

When H is selected or discovered according to the implementation, the goal is reached.

---

# 10. Why BFS Finds Short Solutions

Suppose every action has the same cost.

For example:

    Move left  = cost 1
    Move right = cost 1
    Move up    = cost 1
    Move down  = cost 1

Then:

    depth = number of actions

BFS explores depth 0 first.

Then depth 1.

Then depth 2.

Then depth 3.

Therefore, when BFS reaches a goal at depth d, there cannot be an undiscovered goal at a smaller depth.

This gives BFS an important property.

BFS is **optimal when all actions have the same cost**.

---

# 11. Completeness

An algorithm is called **complete** if it is guaranteed to find a solution whenever a solution exists, under the algorithm's assumptions.

BFS is complete when the branching factor is finite.

If a solution exists at a finite depth, BFS will eventually reach that level.

Therefore, BFS is a complete search strategy under the standard finite-branching assumptions.

---

# 12. BFS and Uniform Costs

BFS assumes that each action has the same cost when we use it to obtain shortest solutions.

Example:

    A -> B = 1
    B -> C = 1
    C -> D = 1

BFS can find the path with the fewest actions.

But consider:

    A -> B = 1
    A -> C = 10
    B -> D = 10
    C -> D = 1

BFS may prefer a path based on the number of actions rather than total cost.

Possible paths:

    A -> B -> D
    cost = 11

    A -> C -> D
    cost = 11

Now consider:

    A -> B = 1
    B -> D = 1
    A -> C = 1
    C -> E = 1
    E -> D = 1

BFS finds:

    A -> B -> D

because it has fewer actions.

For problems where action costs differ, cost-based search is more appropriate.

We will study this later.

---

# 13. BFS vs Depth-First Search

BFS and DFS use different exploration strategies.

BFS:

    Explore shallow states first.

DFS:

    Explore deep states first.

Example:

          A
        /   \\
       B     C
      / \\
     D   E

BFS:

    A -> B -> C -> D -> E

DFS may explore:

    A -> B -> D -> E -> C

The exact DFS order depends on the implementation and child ordering.

The key difference is:

    BFS = broad exploration

    DFS = deep exploration

---

# 14. Frontier in BFS

The frontier is the queue of nodes waiting to be processed.

For example:

    Frontier = [C, D, E, F]

The next node selected is:

    C

because C is at the front of the queue.

After processing C, new states are appended to the back.

This maintains FIFO behavior.

---

# 15. Explored Set

The explored set stores states that have already been processed.

Example:

    Explored = {A, B, C}

If the algorithm encounters B again, it does not need to expand B again.

This is particularly important in graphs containing cycles.

Example:

    A -> B
    B -> C
    C -> A

Without an explored set, the algorithm could repeatedly traverse:

    A -> B -> C -> A -> B -> C ...

The explored set prevents this repeated exploration.

---

# 16. BFS with Cycles

Consider:

    A -> B
    B -> C
    C -> A
    C -> D

Start:

    A

Goal:

    D

BFS can use:

    Explored = {A, B, C}

When C generates A again:

    A is already explored

so A is ignored.

The search continues toward D.

Graph search is therefore safer than naive tree search for cyclic graphs.

---

# 17. Practical Example: Maze Solving

BFS can be used to solve an unweighted maze.

Suppose:

    S = Start
    G = Goal

A simplified grid may look like:

    S . . #
    # . . #
    . . . G

Each movement has equal cost.

The possible actions are:

    Up
    Down
    Left
    Right

BFS explores cells by distance from S.

The first time it reaches G, the path contains the minimum number of movements.

This makes BFS useful for shortest-path problems on unweighted grids.

---

# 18. Mathematical Intuition

Suppose the initial state is at depth:

    0

Every action increases depth by one.

Therefore:

    depth(s) = number of actions from the start

BFS processes states in increasing depth:

    0, 1, 2, 3, ...

If the goal is first reached at depth d, then no solution with fewer than d actions has been skipped.

Therefore:

    BFS -> minimum number of actions

when every action has equal cost.

---

# 19. Branching Factor and Complexity

Let:

    b = branching factor

and:

    d = depth of the shallowest solution

The number of nodes generated can be approximately:

    1 + b + b^2 + ... + b^d

The dominant term is approximately:

    b^d

Therefore the time complexity is commonly expressed as:

    O(b^d)

The memory requirement is also approximately:

    O(b^d)

This is one of the major disadvantages of BFS.

BFS can require a large amount of memory because it stores many frontier nodes.

---

# 20. Why Memory Is a Problem

Consider:

    b = 10

At different depths:

    depth 0 -> 1 node
    depth 1 -> 10 nodes
    depth 2 -> 100 nodes
    depth 3 -> 1,000 nodes
    depth 4 -> 10,000 nodes
    depth 5 -> 100,000 nodes

The frontier can become very large.

Therefore, BFS is powerful but can become memory-intensive.

---

# 21. Python Representation

A simple graph can be represented using a dictionary:

    graph = {
        "A": ["B", "C"],
        "B": ["D", "E"],
        "C": ["F", "G"],
        "D": ["H"],
        "E": ["H"],
        "F": [],
        "G": [],
        "H": []
    }

The graph describes the possible transitions.

For example:

    graph["A"]

produces:

    ["B", "C"]

These are the states that can be reached from A.

---

# 22. Queue in Python

Python provides a simple list structure that can demonstrate a queue.

Example:

    queue = ["A"]

Remove the first element:

    current = queue.pop(0)

Add new states:

    queue.append("B")
    queue.append("C")

However, for efficient queue operations, Python's collections.deque is normally preferred.

Example:

    from collections import deque

    queue = deque(["A"])

Then:

    queue.popleft()

removes the first item efficiently.

And:

    queue.append("B")

adds an item to the back.

---

# 23. Basic BFS Implementation

A simple implementation can look like:

    from collections import deque

    def bfs(graph, start, goal):
        queue = deque([start])
        explored = set([start])

        while queue:
            current = queue.popleft()

            if current == goal:
                return True

            for neighbor in graph[current]:
                if neighbor not in explored:
                    explored.add(neighbor)
                    queue.append(neighbor)

        return False

The important components are:

    deque
    queue
    explored set
    popleft()
    append()

---

# 24. Understanding the Code

The line:

    queue = deque([start])

creates the initial frontier.

The line:

    explored = set([start])

records that the initial state has already been discovered.

The line:

    current = queue.popleft()

selects the oldest state.

The line:

    if current == goal:

checks whether the goal has been reached.

The loop:

    for neighbor in graph[current]:

generates successor states.

The condition:

    if neighbor not in explored:

prevents repeated exploration.

Finally:

    queue.append(neighbor)

adds the new state to the frontier.

---

# 25. Returning the Actual Path

Finding the goal is useful, but many AI systems need the actual sequence of actions.

We can store a parent relationship.

Example:

    parent[B] = A
    parent[D] = B
    parent[H] = D

When H is reached:

    H <- D <- B <- A

Reverse the sequence:

    A -> B -> D -> H

This reconstructs the solution path.

---

# 26. Why Parent Information Matters

Suppose BFS only tells us:

    Goal found!

That does not tell us how to reach the goal.

A practical AI system often needs:

    Start
      |
      v
    Action 1
      |
      v
    State 2
      |
      v
    Action 2
      |
      v
    Goal

Parent information allows the algorithm to reconstruct this route.

This idea is used in many pathfinding systems.

---

# 27. BFS for a Grid

Consider:

    grid = [
        ["S", ".", "."],
        [".", "#", "."],
        [".", ".", "G"]
    ]

Where:

    S = start
    G = goal
    # = obstacle
    . = open cell

Each cell can be treated as a state.

For a cell:

    (row, column)

possible actions may be:

    up
    down
    left
    right

BFS can explore these cells level by level.

---

# 28. Practical AI Applications

BFS can be used for:

- shortest paths in unweighted graphs,
- maze solving,
- grid navigation,
- social-network connection analysis,
- network exploration,
- state-space problems,
- puzzle solving,
- web crawling concepts,
- robotics in simple environments,
- game-state exploration.

The exact algorithm used in real systems may be more advanced, but BFS provides the fundamental idea.

---

# 29. BFS in Social Networks

Imagine a social network.

A user is connected to several people.

Each person is connected to other people.

The network can be represented as a graph.

BFS can explore:

    Level 0: You

    Level 1: Direct connections

    Level 2: Friends of friends

    Level 3: Connections three steps away

This is an intuitive example of level-order graph exploration.

---

# 30. BFS in Network Exploration

Suppose a computer network has:

    Router A
       |
    Router B
      / \\
     C   D
      \\ /
       E

Starting from A, BFS can explore nearby routers first.

This can be useful for understanding connectivity and reachability.

Real network systems may use specialized routing algorithms, but the graph-search concept remains important.

---

# 31. Practical Experiment

Use this graph:

    graph = {
        "A": ["B", "C"],
        "B": ["D", "E"],
        "C": ["F"],
        "D": ["G"],
        "E": ["G"],
        "F": ["G"],
        "G": []
    }

Start:

    A

Goal:

    G

Try to predict the order in which BFS explores the states.

Expected exploration order:

    A
    B
    C
    D
    E
    F
    G

Now change the graph and observe how the order changes.

This experiment helps you understand that BFS behavior depends on graph structure and neighbor ordering.

---

# 32. Common Mistakes

### Mistake 1: Using a stack instead of a queue

A stack produces depth-first behavior.

BFS requires queue behavior.

### Mistake 2: Forgetting the explored set

This can cause repeated exploration and cycles.

### Mistake 3: Assuming BFS always gives the cheapest path

BFS gives the shortest path in terms of number of actions when all actions have equal cost.

### Mistake 4: Ignoring memory usage

BFS can store a very large frontier.

### Mistake 5: Confusing discovery order and final path

The order in which nodes are explored is not necessarily the same as the final solution path.

---

# 33. Practice Questions

1. What does BFS stand for?
2. What principle does BFS follow?
3. Which data structure does BFS normally use?
4. What does FIFO mean?
5. Why does BFS explore level by level?
6. What is the role of the frontier?
7. What is the purpose of the explored set?
8. When is BFS optimal?
9. Is BFS complete?
10. What is the approximate time complexity of BFS?
11. What is the approximate space complexity of BFS?
12. Why can BFS consume a large amount of memory?
13. How can parent information be used?
14. How can BFS solve a maze?
15. How is BFS different from DFS?

---

# 34. Coding Practice

Implement BFS for this graph:

    graph = {
        "A": ["B", "C"],
        "B": ["D", "E"],
        "C": ["F"],
        "D": ["G"],
        "E": ["G"],
        "F": ["G"],
        "G": []
    }

Requirements:

1. Use a queue.
2. Use an explored set.
3. Start from A.
4. Search for G.
5. Print every state when it is explored.
6. Print whether the goal was found.

Then modify the program so that it returns the actual path.

---

# 35. Challenge

Create a 5 x 5 grid.

Include:

- one starting cell,
- one goal cell,
- several obstacles.

Implement BFS to find a path from the start to the goal.

Your program should:

1. Represent every cell as a state.
2. Generate valid neighboring cells.
3. Avoid obstacles.
4. Avoid already explored cells.
5. Use a queue.
6. Store parent information.
7. Reconstruct the final path.
8. Display the path.

---

# 36. Quick Check

### Question 1

What data structure does BFS use?

**Answer:** A queue.

### Question 2

What principle does a queue follow?

**Answer:** First In, First Out (FIFO).

### Question 3

How does BFS explore a search space?

**Answer:** Level by level.

### Question 4

When does BFS find an optimal solution?

**Answer:** When all actions have equal cost and the objective is the minimum number of actions.

### Question 5

Why does BFS need an explored set?

**Answer:** To prevent repeated exploration of already discovered states and help handle cycles.

---

# 37. Key Takeaways

- BFS means Breadth-First Search.
- BFS explores states level by level.
- BFS normally uses a FIFO queue.
- The frontier contains nodes waiting to be explored.
- The explored set prevents unnecessary repeated exploration.
- BFS is complete under standard finite-branching assumptions.
- BFS is optimal for equal-cost actions.
- BFS can solve shortest-path problems in unweighted graphs.
- BFS can be applied to grids, mazes, networks, games, and other state spaces.
- Parent information can reconstruct the final solution path.
- BFS can require significant memory.
- Its approximate time and space complexity are O(b^d).
- BFS is one of the foundations for understanding more advanced AI search algorithms.
`
};

export default lesson6;

