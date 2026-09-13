const lesson7 = {
  id: "lesson7",
  title: "Depth-First Search",
  content: `
# Depth-First Search

## Learning Goals

By the end of this lesson, you will be able to:

- Understand the idea behind Depth-First Search (DFS).
- Understand why DFS explores one branch deeply before backtracking.
- Understand the role of a stack in DFS.
- Trace DFS manually.
- Understand frontier and explored states.
- Understand DFS completeness and limitations.
- Understand when DFS can be useful.
- Implement DFS in Python.
- Analyze DFS time and space complexity.
- Apply DFS to practical AI search problems.

---

# 1. Introduction

Depth-First Search, commonly called **DFS**, is a fundamental search algorithm used in Artificial Intelligence and computer science.

Unlike Breadth-First Search, which explores a search space level by level, DFS follows one branch as deeply as possible before returning and exploring another branch.

The basic idea is:

    Go deep first.
    Backtrack when necessary.
    Continue with another branch.

Consider:

          A
        /   \\
       B     C
      / \\
     D   E

DFS may explore:

    A -> B -> D

before returning to explore E and then C.

The exact order depends on the ordering of the children.

---

# 2. Basic Idea

Consider the tree:

            A
          /   \\
         B     C
        / \\   / \\
       D   E F   G

A depth-first exploration can follow:

    A
    B
    D

Then D has no unexplored children, so the algorithm backtracks to B.

Next:

    E

Then it backtracks to A and explores:

    C
    F
    G

One possible DFS order is:

    A -> B -> D -> E -> C -> F -> G

The important concept is not the exact order.

The important concept is:

    DFS explores deeply before exploring siblings.

---

# 3. Why DFS Uses a Stack

DFS is naturally implemented using a **stack**.

A stack follows:

    Last In, First Out

or:

    LIFO

The most recently added state is processed first.

Example:

    Stack = [A]

Remove A and add:

    B, C

Depending on insertion order, the stack may become:

    [B, C]

If C is on top, C is explored first.

If we want B first, we can insert the children in reverse order.

The stack therefore allows DFS to continue down the newest branch.

---

# 4. Stack Intuition

Imagine a stack of books.

If you place:

    Book A
    Book B
    Book C

on top of each other, the last book placed is the first one removed.

DFS behaves similarly.

Newly generated nodes are placed on top of the frontier.

The newest node is selected first.

This produces depth-oriented exploration.

---

# 5. BFS vs DFS

Consider:

          A
        /   \\
       B     C
      / \\   / \\
     D   E F   G

BFS explores approximately:

    A -> B -> C -> D -> E -> F -> G

DFS may explore:

    A -> B -> D -> E -> C -> F -> G

The difference is:

    BFS = shallow first

    DFS = deep first

BFS uses a queue.

DFS uses a stack.

---

# 6. DFS Algorithm

A basic DFS process is:

1. Create a stack.
2. Add the initial state.
3. Remove the top state.
4. Check whether it is the goal.
5. Generate its successors.
6. Add unexplored successors to the stack.
7. Continue until the goal is found or the stack becomes empty.

Conceptually:

    frontier = stack

    while frontier is not empty:

        remove top node

        if node is goal:
            return solution

        expand node

        add successors to frontier

---

# 7. Example Graph

Consider:

    A -> B, C
    B -> D, E
    C -> F, G
    D -> H
    E -> I
    F -> J
    G -> K

Start:

    A

Goal:

    H

DFS can follow:

    A -> B -> D -> H

The goal is reached quickly because H lies deep inside the first branch.

This is one situation where DFS can be very effective.

---

# 8. Step-by-Step DFS Trace

Suppose:

    Start = A
    Goal = H

Initial:

    Stack = [A]

### Step 1

Remove A:

    Stack = []

Generate:

    B, C

If B is placed so that it is processed first:

    Stack = [C, B]

### Step 2

Remove B:

    Stack = [C]

Generate:

    D, E

Stack:

    [C, E, D]

### Step 3

Remove D:

    Stack:

    [C, E]

Generate:

    H

Stack:

    [C, E, H]

### Step 4

Remove H:

    H is the goal.

Search terminates.

The solution path is:

    A -> B -> D -> H

---

# 9. Backtracking

Backtracking is an important idea in DFS.

Suppose the search reaches:

    A -> B -> D

but D has no useful successors.

DFS goes back to the previous decision point.

This is called **backtracking**.

The search can then try another branch:

    A -> B -> E

If E also fails, DFS can return to A:

    A -> C

This process continues until:

- a goal is found,
- all branches are exhausted,
- or another stopping condition is reached.

---

# 10. DFS Search Tree

Consider:

            A
          /   \\
         B     C
        / \\   / \\
       D   E F   G

DFS may conceptually follow:

    A
    |
    B
    |
    D

After D is exhausted:

    A
    |
    B
    |
    E

Then:

    A
    |
    C
    |
    F

Then:

    G

This is why DFS is called depth-first.

---

# 11. Frontier in DFS

The frontier in DFS is usually implemented as a stack.

Example:

    Frontier = [C, E, D]

The top of the stack is the next node to process.

If D is at the top:

    D

is selected.

After expanding D, its successors are added to the stack.

This allows DFS to continue down that branch.

---

# 12. Explored Set

Graph-based DFS can maintain an explored set.

Example:

    Explored = {A, B, D}

If the algorithm encounters B again, it can avoid expanding B again.

This is especially important when the graph contains cycles.

Example:

    A -> B
    B -> C
    C -> A

Without repeated-state detection, DFS could follow:

    A -> B -> C -> A -> B -> C ...

and continue indefinitely.

---

# 13. DFS and Cycles

Consider:

    A -> B
    B -> C
    C -> A

Starting from A:

    A -> B -> C

C has an edge back to A.

A has already been explored.

Therefore, graph-based DFS can ignore the repeated state.

The explored set prevents unnecessary revisiting.

This is one reason graph search is important.

---

# 14. DFS and Infinite Paths

DFS has a major limitation.

Suppose a search space contains an infinite branch:

    A -> B -> C -> D -> E -> ...

If the algorithm keeps following this branch, it may never return to explore another branch.

For example:

          A
        /   \\
       B     G
       |
       C
       |
       D
       |
       ...

If DFS follows:

    A -> B -> C -> D -> ...

it may never reach G.

This demonstrates why DFS is not generally complete in arbitrary infinite search spaces.

---

# 15. Completeness

An algorithm is complete if it is guaranteed to find a solution whenever one exists under its assumptions.

DFS is not generally complete for arbitrary infinite-depth search spaces.

However, with a finite search space and proper repeated-state handling, DFS can eventually explore the available states.

Therefore, the structure of the problem matters greatly.

---

# 16. Optimality

DFS is **not generally optimal**.

It may find a solution quickly, but that solution may not be the shortest or cheapest solution.

Consider:

          A
        /   \\
       B     C
       |     |
       D     E
       |     |
       G     G

Suppose the left branch is much deeper than another available solution.

DFS may follow the first branch and find a solution after many actions even though a shorter solution exists elsewhere.

Therefore:

    DFS does not guarantee the shortest solution.

This is an important difference from BFS in unweighted problems.

---

# 17. When DFS Can Be Useful

DFS can be useful when:

- the search space is deep,
- solutions may exist far from the root,
- memory is limited,
- we do not necessarily need the shortest solution,
- the problem naturally involves backtracking.

Examples include:

- maze exploration,
- puzzle solving,
- game-state exploration,
- graph traversal,
- decision trees,
- dependency exploration,
- constraint-solving approaches,
- generating possible combinations.

---

# 18. DFS Memory Advantage

One important advantage of DFS is memory usage.

BFS may need to store many nodes at the same level.

DFS generally stores the current path and pending alternatives.

For a branching factor b and maximum depth m, DFS space complexity is commonly expressed as:

    O(bm)

for a typical tree-search formulation.

BFS can require approximately:

    O(b^d)

where d is the depth of the shallowest solution.

Therefore DFS can use substantially less memory when the search depth is manageable.

---

# 19. DFS Time Complexity

For a branching factor:

    b

and maximum depth:

    m

DFS can have a time complexity of approximately:

    O(b^m)

in a tree-search setting.

The exact behavior depends on:

- graph structure,
- repeated states,
- depth,
- branching factor,
- and implementation.

DFS can therefore still become computationally expensive.

---

# 20. Mathematical Intuition

Suppose each state produces b possible successors.

At depth 0:

    1 state

At depth 1:

    b states

At depth 2:

    b^2 states

At depth 3:

    b^3 states

DFS does not necessarily generate the entire level before moving deeper.

Instead, it may follow one sequence:

    s0 -> s1 -> s2 -> s3 -> ...

until:

- a goal is found,
- a dead end is reached,
- or a limit is reached.

This depth-oriented behavior is the mathematical intuition behind DFS.

---

# 21. Python Stack

A Python list can be used as a stack.

Example:

    stack = ["A"]

Add an element:

    stack.append("B")

Remove the top element:

    current = stack.pop()

Because pop() removes the last element, the list behaves as a LIFO stack.

Example:

    stack = ["A", "B", "C"]

After:

    stack.pop()

the result is:

    C

The stack becomes:

    ["A", "B"]

This is exactly the behavior required for DFS.

---

# 22. Basic DFS Implementation

A simple DFS implementation can be written as:

    def dfs(graph, start, goal):
        stack = [start]
        explored = set([start])

        while stack:
            current = stack.pop()

            if current == goal:
                return True

            for neighbor in graph[current]:
                if neighbor not in explored:
                    explored.add(neighbor)
                    stack.append(neighbor)

        return False

The important components are:

    stack
    explored set
    pop()
    append()

---

# 23. Understanding the Code

The line:

    stack = [start]

creates the initial frontier.

The line:

    explored = set([start])

records the starting state.

The line:

    current = stack.pop()

selects the newest state.

The condition:

    if current == goal:

checks whether the goal has been reached.

The loop:

    for neighbor in graph[current]:

generates successor states.

The condition:

    if neighbor not in explored:

prevents repeated states.

Finally:

    stack.append(neighbor)

adds the new state to the stack.

---

# 24. DFS Path Reconstruction

Like BFS, DFS can store parent information.

Example:

    parent[B] = A
    parent[D] = B
    parent[H] = D

When H is found:

    H <- D <- B <- A

Reverse the sequence:

    A -> B -> D -> H

This gives the actual solution path.

Parent tracking is useful when the AI must return the sequence of actions rather than only report success.

---

# 25. Practical Example: Maze Solving

Consider a maze.

    S . . #
    # . . #
    . . . G

where:

    S = start
    G = goal
    # = obstacle

DFS can choose one available direction and continue deeply.

For example:

    Right
    Right
    Down
    Down
    ...

If the path reaches a dead end, DFS backtracks and tries another direction.

This makes DFS naturally suitable for problems that require exploration and backtracking.

---

# 26. DFS in Puzzle Solving

Many puzzles can be represented as state spaces.

For example, each state may represent a configuration of a puzzle.

An action changes the configuration.

DFS can explore:

    Initial
       |
    Move 1
       |
    Move 2
       |
    Move 3
       |
    ...

If a branch cannot lead to a solution, the algorithm backtracks.

This pattern is common in constraint and puzzle problems.

---

# 27. DFS in Decision Problems

Suppose an AI needs to examine a sequence of decisions.

At each state:

    Choose A
    Choose B
    Choose C

DFS can explore one complete sequence before returning to try another.

Example:

    Start
      |
      A
      |
      A1
      |
      A2
      |
    Failure
      |
   Backtrack
      |
      B

This is useful when the problem naturally has a trial-and-backtrack structure.

---

# 28. Practical Experiment

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

Run DFS and record the order in which states are explored.

Depending on the neighbor insertion order, you may obtain an order such as:

    A -> B -> D -> G

Notice that DFS can reach G without exploring every state at the same level.

Now change the neighbor order and run the program again.

You may obtain a different exploration order.

This demonstrates that DFS is sensitive to successor ordering.

---

# 29. DFS vs BFS: Practical Comparison

Suppose a goal is very deep in the first branch.

DFS may find it quickly.

Suppose the goal is shallow but located in a later branch.

BFS may find it sooner.

Therefore, there is no single search strategy that is best for every problem.

The choice depends on:

- depth of solutions,
- branching factor,
- memory limitations,
- action costs,
- and whether optimality is required.

---

# 30. Engineering Perspective

When designing an AI search system, selecting DFS should be a deliberate decision.

Ask:

1. Is the search space deep?
2. Is memory limited?
3. Is the shortest solution required?
4. Could the search space contain infinite paths?
5. Are repeated states possible?
6. Can backtracking help?
7. Is the order of exploring alternatives important?

DFS is attractive when memory efficiency and deep exploration are more important than guaranteed optimality.

---

# 31. Common Mistakes

### Mistake 1: Using a queue

A queue produces BFS behavior.

DFS normally requires a stack.

### Mistake 2: Forgetting the explored set

This can cause repeated exploration and cycles.

### Mistake 3: Assuming DFS finds the shortest path

DFS does not generally guarantee an optimal solution.

### Mistake 4: Ignoring infinite branches

An infinite branch can prevent DFS from exploring other branches.

### Mistake 5: Assuming DFS always produces one fixed order

The order depends on how successors are inserted into the stack.

---

# 32. Practice Questions

1. What does DFS stand for?
2. What principle does DFS follow?
3. Which data structure is normally used by DFS?
4. What does LIFO mean?
5. How is DFS different from BFS?
6. What is backtracking?
7. Why is an explored set useful?
8. Is DFS complete in arbitrary infinite search spaces?
9. Is DFS optimal?
10. What is the approximate time complexity of DFS?
11. What is the approximate space complexity of DFS?
12. Why can DFS be useful when memory is limited?
13. Why does successor ordering affect DFS?
14. How can parent information reconstruct a path?
15. Give two practical applications of DFS.

---

# 33. Coding Practice

Implement DFS for:

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

1. Use a stack.
2. Use an explored set.
3. Start from A.
4. Search for G.
5. Print each explored state.
6. Print whether the goal was found.

Then modify the program to return the complete path.

---

# 34. Challenge

Create a small maze using a 6 x 6 grid.

Include:

- one starting position,
- one goal,
- multiple obstacles,
- multiple possible routes.

Implement DFS to:

1. Represent each cell as a state.
2. Generate valid neighboring cells.
3. Avoid obstacles.
4. Avoid repeated states.
5. Use a stack.
6. Store parent information.
7. Find the goal.
8. Reconstruct the path.
9. Display the final path.

Then compare your DFS result with BFS.

Ask:

- Which algorithm found a solution first?
- Which solution used fewer moves?
- Which algorithm explored more states?
- Which algorithm used more memory?

---

# 35. Quick Check

### Question 1

What data structure does DFS use?

**Answer:** A stack.

### Question 2

What principle does a stack follow?

**Answer:** Last In, First Out (LIFO).

### Question 3

How does DFS explore a search space?

**Answer:** It explores one branch deeply before backtracking.

### Question 4

Is DFS guaranteed to find the shortest solution?

**Answer:** No.

### Question 5

What is backtracking?

**Answer:** Returning to an earlier decision point after a branch cannot provide a useful solution.

---

# 36. Key Takeaways

- DFS means Depth-First Search.
- DFS explores deeply before exploring alternative branches.
- DFS normally uses a LIFO stack.
- Backtracking is a central concept in DFS.
- An explored set helps prevent repeated states and cycles.
- DFS is not generally optimal.
- DFS is not generally complete for arbitrary infinite-depth search spaces.
- DFS can use less memory than BFS.
- DFS can be useful for deep search spaces and backtracking problems.
- The order of successor insertion can affect the search order.
- Parent information can reconstruct the final solution path.
- DFS is useful for graph traversal, puzzles, maze exploration, decision problems, and many other AI tasks.
- Understanding DFS prepares us for more advanced search and optimization techniques.
`
};

export default lesson7;
