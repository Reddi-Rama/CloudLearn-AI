const lesson12 = {
  title: "Iterative Deepening Depth-First Search (IDDFS)",

  content: `
# Iterative Deepening Depth-First Search

Iterative Deepening Depth-First Search, commonly called IDDFS or IDS, combines important characteristics of Depth-First Search and Breadth-First Search.

The basic idea is simple:

Run Depth-Limited Search repeatedly with increasing depth limits.

For example:

Depth limit 0

Then:

Depth limit 1

Then:

Depth limit 2

Then:

Depth limit 3

Continue until the goal is found.

This gives IDDFS the low memory behavior associated with depth-first exploration while still discovering shallow solutions systematically.

---

# 1. Motivation

DFS can use very little memory, but it may explore a very deep branch before discovering a shallow solution.

BFS can find the shallowest solution in an unweighted state space, but it can consume a very large amount of memory.

IDDFS attempts to get advantages from both.

DFS provides:

Low memory usage

BFS provides:

Complete level-by-level depth discovery

IDDFS combines these ideas by repeatedly increasing the depth limit.

---

# 2. Basic Example

Suppose the search tree is:

        A

      /   \\

     B     C

    / \\   / \\

   D   E F   G

Goal:

G

Iteration 1:

Depth limit = 0

Visited:

A

Goal not found.

Iteration 2:

Depth limit = 1

Visited:

A
B
C

Goal not found.

Iteration 3:

Depth limit = 2

Visited:

A
B
D
E
C
F
G

Goal found.

The important observation is that the algorithm does not commit permanently to one deep DFS path.

Instead, it repeats the search with progressively larger depth limits.

---

# 3. Depth-Limited Search

Before understanding IDDFS, we need Depth-Limited Search.

Depth-Limited Search is DFS with a maximum depth.

Suppose:

limit = 2

The algorithm cannot expand beyond depth 2.

Example:

Depth 0:

A

Depth 1:

B, C

Depth 2:

D, E, F, G

Nodes below depth 2 are not expanded.

This prevents DFS from going infinitely deep.

---

# 4. Why a Depth Limit Is Useful

Consider an infinite search tree.

DFS might continue:

A

B

D

H

P

...

without ever reaching the goal.

Depth-Limited Search prevents unlimited exploration.

If the limit is:

3

the search stops when depth 3 is reached.

This is useful when we do not know exactly how deep the solution is.

---

# 5. IDDFS Strategy

IDDFS starts with:

limit = 0

Then increments:

limit = 1

limit = 2

limit = 3

and so on.

At every iteration:

Run a depth-limited search from the start state.

If the goal is found:

Return the solution.

Otherwise:

Increase the depth limit.

---

# 6. Algorithm

Pseudocode:

for depth = 0, 1, 2, 3, ...:

    result = depth_limited_search(
        start,
        depth
    )

    if result is a solution:

        return result

The search continues until:

- The goal is found
- Or the search space is exhausted

---

# 7. Why IDDFS Can Be Complete

Assume:

- Branching factor is finite.
- A solution exists at finite depth.
- Each iteration explores the required depth correctly.

Then eventually:

depth limit = solution depth

The algorithm reaches the goal.

Therefore IDDFS is complete under standard finite-branching assumptions.

---

# 8. Relationship With BFS

BFS explores:

depth 0

then:

depth 1

then:

depth 2

then:

depth 3

IDDFS also discovers solutions in increasing depth.

The difference is how it stores and explores states.

BFS keeps the frontier from previous levels.

IDDFS performs a new depth-limited DFS for each depth.

Therefore:

BFS:

Level expansion with a queue

IDDFS:

Repeated depth-limited DFS

---

# 9. Relationship With DFS

DFS follows a branch as deeply as possible.

IDDFS also uses depth-first exploration.

But the depth limit changes after every failed iteration.

Therefore:

DFS:

One potentially deep search

IDDFS:

Many bounded DFS searches

This prevents the search from becoming permanently trapped in an excessively deep branch.

---

# 10. Main Insight

Imagine that the goal is at depth:

d = 5

IDDFS performs:

Search limit 0

Search limit 1

Search limit 2

Search limit 3

Search limit 4

Search limit 5

The goal is guaranteed to be reached once the limit becomes 5, assuming the problem satisfies the normal completeness conditions.

---

# 11. Tree Illustration

Consider:

                A

          /     |     \\

         B      C      D

       / | \\          / \\

      E  F  G        H   I

                     |
                     J

Suppose:

Goal = G

IDDFS:

Limit 0:

A

Limit 1:

A, B, C, D

Limit 2:

A, B, E, F, G

Goal found.

The algorithm does not need to search indefinitely into H, I, or J.

---

# 12. Python Recursive Implementation

A basic depth-limited DFS can be written as:

def depth_limited_search(
    graph,
    node,
    goal,
    depth
):

    if node == goal:

        return [node]

    if depth == 0:

        return None

    for neighbor in graph[node]:

        result = depth_limited_search(
            graph,
            neighbor,
            goal,
            depth - 1
        )

        if result is not None:

            return [node] + result

    return None

This function stops expanding once:

depth == 0

---

# 13. IDDFS Implementation

Now repeatedly call the depth-limited search.

Example:

def iddfs(
    graph,
    start,
    goal,
    max_depth
):

    for depth in range(max_depth + 1):

        result = depth_limited_search(
            graph,
            start,
            goal,
            depth
        )

        if result is not None:

            return result

    return None

The algorithm tries:

0

1

2

...

until:

max_depth

---

# 14. Complete Example

Example:

graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F", "G"],
    "D": [],
    "E": [],
    "F": [],
    "G": []
}

result = iddfs(
    graph,
    "A",
    "G",
    10
)

print("Path:", result)

Possible output:

Path: ['A', 'C', 'G']

The solution depth is:

2

So the goal is found during the depth-2 iteration.

---

# 15. What Happens During Each Iteration

Suppose:

start = A

goal = G

Iteration:

limit 0

Search:

A

No goal.

Iteration:

limit 1

Search:

A

B

C

No goal.

Iteration:

limit 2

Search:

A

B

D

E

C

F

G

Goal found.

The same upper levels may therefore be visited multiple times.

---

# 16. Repeated Work

IDDFS performs repeated work.

At depth 2, it revisits states encountered during depth 1.

At depth 3, it revisits the upper levels again.

This looks wasteful.

However, most nodes in a large tree are usually near the deepest level.

Therefore the repeated work near the top can be acceptable.

This is one reason IDDFS can provide a good memory-performance trade-off.

---

# 17. Complexity Intuition

Let:

b

be the branching factor.

Let:

d

be the shallowest solution depth.

BFS approximately stores or explores a number of states related to:

b^d

IDDFS also has exponential time behavior in the general case.

However, its memory usage is much closer to depth-first search.

Typical space requirement is approximately:

O(bd)

for a tree-search implementation, although exact usage depends on implementation details.

---

# 18. Why Repeated Work Is Not As Bad As It Looks

Suppose:

b = 10

and:

d = 5

IDDFS repeatedly explores upper levels.

The number of nodes near depth 5 is much larger than the number of nodes at depths 0, 1, 2, 3, and 4 combined in many tree-like search spaces.

Therefore most work still occurs near the solution depth.

This is why the repeated shallow searches can be worthwhile.

---

# 19. Memory Advantage

BFS may have to retain an enormous frontier.

For example:

Level 5

could contain:

b^5

states.

IDDFS does not store the entire level.

It uses a depth-first path and recursion stack.

Therefore the memory requirement is substantially lower.

This is the primary motivation for IDDFS.

---

# 20. IDDFS and Optimality

For an unweighted search problem where each action has equal cost, IDDFS can return a shallowest solution under the standard assumptions.

It explores depth limits in increasing order:

0

1

2

3

...

Therefore the first solution found occurs at the shallowest reachable depth, provided the depth-limited traversal and goal handling are implemented correctly.

---

# 21. When Costs Differ

Suppose actions have different costs.

Example:

Action A:

cost = 1

Action B:

cost = 20

A shallow solution is not necessarily the cheapest solution.

IDDFS is fundamentally depth-oriented.

Therefore it is not generally the correct algorithm for weighted shortest-cost problems.

Uniform Cost Search is more appropriate when total path cost matters.

---

# 22. IDDFS vs UCS

IDDFS prioritizes:

Depth

UCS prioritizes:

Path cost

IDDFS works naturally for:

Equal-cost actions

UCS works naturally for:

Nonnegative weighted actions

This distinction is important.

---

# 23. IDDFS vs A*

A* uses:

g(n) + h(n)

IDDFS uses:

Depth limit

A* uses heuristic information.

IDDFS does not require a heuristic.

Therefore IDDFS is useful when:

A solution is expected at relatively small depth.

Memory is limited.

No strong heuristic is available.

---

# 24. IDDFS vs Bidirectional Search

Bidirectional Search:

Searches from both start and goal.

IDDFS:

Searches from the start repeatedly with increasing depth limits.

Bidirectional Search requires:

Known start

Known goal

Reverse search capability

IDDFS mainly requires:

Known start

Maximum or expandable depth

The choice depends on problem structure.

---

# 25. Important Concept — Shallowest Goal

Suppose there are two goals:

Goal A at depth 3

Goal B at depth 7

IDDFS will encounter the depth-3 goal first.

This makes it appropriate for finding shallow solutions in uniform-cost state spaces.

---

# 26. State-Space Search

In AI, the search space may be represented as:

State

Action

Transition

Goal

For example:

State:

Current location

Action:

Move

Transition:

New location

Goal:

Destination reached

IDDFS explores these states with an increasing depth boundary.

---

# 27. Practical AI Example — Robot Actions

Suppose a robot can perform:

Move forward

Turn left

Turn right

Each action has equal cost.

Goal:

Reach a target location.

The robot's action sequence may require:

3 actions

But we do not know that in advance.

IDDFS searches:

0 actions

1 action

2 actions

3 actions

At depth 3, it finds the target.

---

# 28. Practical AI Example — Puzzle

Consider a puzzle where each move has equal cost.

The goal may be:

10 moves away.

Instead of immediately exploring enormous numbers of states with BFS, IDDFS can repeatedly perform depth-limited searches.

The depth gradually increases until:

10

Then the solution is found.

---

# 29. Practical AI Example — Game Search

Suppose an AI needs to find a move sequence.

Depth 1:

One move ahead

Depth 2:

Two moves ahead

Depth 3:

Three moves ahead

The AI can progressively increase depth.

This idea is related to iterative-deepening techniques used in game-tree search.

More advanced game engines combine iterative deepening with alpha-beta pruning and heuristic evaluation.

---

# 30. Iterative Deepening and Games

In game AI, iterative deepening can be useful because the system can search:

Depth 1

then:

Depth 2

then:

Depth 3

and continue.

If computation must stop because of a time limit, the system still has a result from the previous completed depth.

This is an important practical advantage.

---

# 31. Iterative Deepening With a Time Limit

A real-time system may have:

100 milliseconds

500 milliseconds

or:

1 second

available for computation.

The algorithm can complete:

Depth 1

Depth 2

Depth 3

and so on.

If time expires during depth 4, the system can retain the completed depth-3 result.

This makes iterative deepening valuable in time-sensitive search.

---

# 32. Depth Cutoff

The depth limit acts as a cutoff.

Suppose:

limit = 4

At depth 4, the algorithm does not expand further.

This prevents a search branch from continuing indefinitely.

---

# 33. Recursive Stack

Because depth-limited search is DFS-based, recursion depth is bounded by the current limit.

Example:

limit = 5

The recursion stack cannot grow beyond approximately that search depth, aside from implementation details.

This explains the low memory usage.

---

# 34. Iterative Deepening With Explicit Stack

IDDFS can also be implemented without recursion.

Use:

A stack

plus:

Current depth information

This can be useful when recursion depth limits are a concern.

However, recursive implementations are often easier to understand for teaching the algorithm.

---

# 35. Visited Sets and IDDFS

Visited-state handling requires care.

In DFS, a global visited set can sometimes cause valid states to be skipped in state-space search because reaching a state through different paths can matter when depth constraints differ.

A depth-aware implementation may therefore use:

- Current-path detection
- Depth-aware visited information
- Transposition tables in advanced applications

Do not blindly copy BFS's global visited strategy into every IDDFS implementation.

---

# 36. Avoiding Cycles

Consider:

A -> B

B -> A

Without cycle checking, a depth-limited recursive search can repeatedly alternate:

A

B

A

B

until reaching the depth limit.

A simple approach is to track the current path.

Example:

path = {A}

Before exploring B:

add B

When returning:

remove B

This detects cycles along the current path.

---

# 37. Path-Based Cycle Detection

Conceptually:

If neighbor is already in the current path:

do not follow it.

This prevents:

A -> B -> A

from recursively repeating unnecessarily.

It is different from permanently marking the state globally.

---

# 38. Why Global Visited Can Be Dangerous

Suppose a state can be reached:

at depth 2

and:

at depth 5

A global visited structure may mark it after the first encounter.

But the depth-limited behavior can make the context important.

Therefore state reuse in depth-limited search should be designed carefully.

This becomes more important in graphs than in pure trees.

---

# 39. Graph Search vs Tree Search

Tree search assumes:

Each generated node is treated as a separate search-tree node.

Graph search recognizes:

Different paths may lead to the same state.

Graph search therefore needs duplicate detection.

IDDFS is straightforward on trees.

On graphs, correctness and efficiency require more careful state management.

---

# 40. Formal Search Model

Let:

S

be the start state.

Let:

G

be the goal condition.

Let:

depth(s)

be the number of actions from the start.

IDDFS evaluates:

D = 0, 1, 2, ...

At each D:

Search all states satisfying:

depth(s) <= D

until a goal is reached.

The algorithm therefore performs a sequence:

DFS_0

DFS_1

DFS_2

...

---

# 41. Mathematical Interpretation

Let:

d

be the depth of the shallowest solution.

IDDFS guarantees that it eventually reaches:

D = d

Then:

goal ∈ search_space(D)

Therefore a solution is found.

For equal-cost actions, the first successful depth corresponds to the minimum number of actions.

---

# 42. Why IDDFS Is Considered Uninformed

IDDFS does not use:

Distance estimates

Domain-specific heuristics

Learned models

Instead it uses only:

Search depth

Transition rules

Goal test

Therefore IDDFS belongs to uninformed search.

---

# 43. Relationship With Heuristic Search

Compare:

IDDFS:

Depth

Greedy Best-First:

h(n)

UCS:

g(n)

A*:

g(n) + h(n)

This provides a unified view of classical AI search.

---

# 44. Practical Python Example With Cycle Detection

Example:

def depth_limited_search(
    graph,
    node,
    goal,
    depth,
    path
):

    if node == goal:

        return path + [node]

    if depth == 0:

        return None

    path.add(node)

    for neighbor in graph[node]:

        if neighbor not in path:

            result = depth_limited_search(
                graph,
                neighbor,
                goal,
                depth - 1,
                path
            )

            if result is not None:

                path.remove(node)

                return [node] + result

    path.remove(node)

    return None

This demonstrates current-path cycle prevention.

---

# 45. Safer Practical Implementation

A more convenient teaching implementation is:

def depth_limited_search(
    graph,
    node,
    goal,
    depth,
    path
):

    if node == goal:

        return [node]

    if depth == 0:

        return None

    for neighbor in graph[node]:

        if neighbor in path:

            continue

        result = depth_limited_search(
            graph,
            neighbor,
            goal,
            depth - 1,
            path + [node]
        )

        if result is not None:

            return [node] + result

    return None

This copies the path at each recursive step, which is easy to understand but may use additional memory.

---

# 46. Practical IDDFS Program

Example:

def iddfs(
    graph,
    start,
    goal,
    maximum_depth
):

    for limit in range(
        maximum_depth + 1
    ):

        result = depth_limited_search(
            graph,
            start,
            goal,
            limit,
            []
        )

        if result is not None:

            return result

    return None

The main loop controls the increasing depth limit.

---

# 47. Example Run

Graph:

graph = {
    "A": ["B", "C"],
    "B": ["D", "E"],
    "C": ["F", "G"],
    "D": [],
    "E": [],
    "F": [],
    "G": []
}

Call:

path = iddfs(
    graph,
    "A",
    "G",
    10
)

Output:

A -> C -> G

The first successful depth is:

2

---

# 48. Search Trace

For educational purposes, print the current depth.

Example:

def iddfs(
    graph,
    start,
    goal,
    maximum_depth
):

    for limit in range(
        maximum_depth + 1
    ):

        print(
            "Searching with limit:",
            limit
        )

        result = depth_limited_search(
            graph,
            start,
            goal,
            limit,
            []
        )

        if result is not None:

            return result

    return None

The output might be:

Searching with limit: 0

Searching with limit: 1

Searching with limit: 2

Goal found.

This makes iterative deepening easy to visualize.

---

# 49. Search Statistics

A practical implementation can count:

Nodes expanded

Depth limit

Execution time

Solution depth

Number of iterations

Example:

Iterations:

5

Solution depth:

4

Nodes expanded:

87

This allows meaningful comparisons with BFS and DFS.

---

# 50. IDDFS Experiment

Create a search tree and run:

DFS

BFS

IDDFS

Record:

Nodes explored

Memory usage

Solution depth

Execution time

Then compare.

Expected behavior:

DFS:

Low memory, potentially poor solution ordering

BFS:

High memory, shallowest solution

IDDFS:

Low memory with increasing depth search

---

# 51. Search Order Matters

Suppose the goal exists at depth 3.

If several nodes exist at depth 3, the exact path returned depends on successor ordering.

IDDFS guarantees shallow depth under the appropriate assumptions.

It does not necessarily guarantee a particular path when multiple optimal paths exist.

---

# 52. Multiple Solutions

Suppose:

A -> B -> G

and:

A -> C -> G

Both have depth:

2

IDDFS may return either.

Both are equally shallow.

This is normal.

---

# 53. No Solution

Suppose the search space is finite and:

no goal exists.

If maximum depth is bounded:

the algorithm eventually reports:

No solution within the specified depth.

If the problem is infinite and there is no goal, an unbounded IDDFS loop may continue indefinitely.

Therefore practical programs often define:

maximum depth

or:

resource limits.

---

# 54. Maximum Depth

A production implementation should often include:

maximum_depth

This prevents uncontrolled computation.

Example:

maximum_depth = 50

The search stops after:

depth 50

if no solution has been found.

---

# 55. Resource Limits

Real systems may also limit:

Execution time

Memory

Number of states

Maximum depth

CPU usage

These limits are important in practical AI search because the theoretical search space may be enormous.

---

# 56. IDDFS in Robotics

Suppose a robot can perform several actions.

The objective is:

Find a sequence of movements that reaches the target.

Each action has equal cost.

IDDFS can search:

One action

Two actions

Three actions

...

until a valid sequence is found.

This is useful when the solution is expected to be relatively shallow.

---

# 57. IDDFS in Automated Planning

A planning task can be represented as:

Initial state

Actions

Goal state

An action sequence has a depth equal to:

number of actions

IDDFS searches plans in increasing action length.

The first solution therefore uses the smallest number of actions under equal action costs.

---

# 58. IDDFS in Puzzle Solving

For puzzles where every move costs one:

The search objective can be:

minimum moves to solution.

IDDFS naturally searches:

0 moves

1 move

2 moves

...

This makes it suitable for many small state-space puzzles.

---

# 59. IDDFS and Game Trees

Game AI often needs:

Deep search

while:

memory is limited.

Iterative deepening allows:

depth 1 search

then depth 2

then depth 3

and so on.

At each iteration, information from previous iterations can sometimes help improve move ordering in more advanced algorithms.

This is one reason iterative deepening is important in game-search systems.

---

# 60. Practical Game-Search Connection

A simplified game-search system might do:

Depth 1

Choose best move.

Depth 2

Re-evaluate.

Depth 3

Search deeper.

As depth increases, the evaluation becomes more informed.

The process can stop when the time limit is reached.

The deepest completed iteration provides the current answer.

---

# 61. IDDFS and Alpha-Beta

Advanced game engines can combine:

Iterative deepening

with:

Alpha-beta pruning

The iterative deepening controls search depth.

Alpha-beta reduces unnecessary branches.

Heuristic evaluation ranks positions.

Together, these techniques can make game-tree search much more effective.

---

# 62. Important Difference From Machine Learning

IDDFS does not learn from data.

It does not:

Train parameters

Build weights

Optimize a neural network

Instead it systematically searches possible action sequences.

This makes it a classical AI technique.

---

# 63. Hybrid Systems

Modern AI systems can combine search with learned models.

A neural network might estimate:

Promising states

A search algorithm can then explore those states.

Similarly, a learned heuristic can guide search.

IDDFS itself remains a search mechanism rather than a learning algorithm.

---

# 64. Advantages

IDDFS provides:

- Low memory usage
- Completeness under standard finite-branching assumptions
- Shallow-solution discovery
- Simple conceptual structure
- No heuristic required
- Natural compatibility with equal-cost action problems
- Useful behavior under depth uncertainty

---

# 65. Disadvantages

IDDFS also has limitations:

- Repeats upper-level work
- Can be computationally expensive
- Not naturally suited to weighted costs
- Graph-search implementations require careful duplicate handling
- Large branching factors can still cause exponential growth
- A poor maximum depth can prevent finding a deeper solution

---

# 66. Common Mistakes

Mistake 1:

Implementing normal DFS instead of increasing the depth limit.

Mistake 2:

Forgetting to reset the depth-limited search each iteration.

Mistake 3:

Using an inappropriate global visited set.

Mistake 4:

Assuming IDDFS finds minimum-cost solutions with arbitrary edge weights.

Mistake 5:

Ignoring cycles.

Mistake 6:

Forgetting maximum-depth or resource limits.

Mistake 7:

Confusing iterative deepening with simply increasing recursion depth once.

---

# 67. Debugging IDDFS

Useful debugging information includes:

Current depth limit

Current node

Current path

Nodes expanded

Goal detection

Example:

Limit: 2

Current path:

A -> C

Next:

G

Goal found.

This makes errors in the depth cutoff easier to identify.

---

# 68. Complexity Summary

For a typical tree search:

Time:

O(b^d)

in the worst-case exponential sense.

Space:

approximately O(bd)

for the depth-first frontier/path behavior.

Here:

b = branching factor

d = shallowest solution depth

Exact performance depends on branching structure, duplicate states, and implementation.

---

# 69. Comparison Table

DFS:

Memory efficient

Not guaranteed to find shallowest solution

BFS:

Complete

Shallowest solution

High memory usage

UCS:

Minimum-cost solution

Handles weighted edges

Uses priority queue

A*:

Uses cost plus heuristic

Goal-directed

IDDFS:

Depth-limited DFS repeated with increasing limits

Low memory

Shallowest solution for suitable equal-cost problems

---

# 70. One Unified Perspective

BFS:

Search one level at a time.

DFS:

Search one branch deeply.

IDDFS:

Search deeply, but restart with a larger depth limit after each iteration.

UCS:

Search the cheapest accumulated path.

Greedy:

Search the state estimated closest to the goal.

A*:

Balance accumulated cost and estimated remaining cost.

These algorithms differ mainly in how they choose the next state to explore.

---

# 71. Practical Project — IDDFS Puzzle Solver

Build a puzzle solver using IDDFS.

Requirements:

1. Define a state representation.
2. Define valid actions.
3. Generate successor states.
4. Define the goal condition.
5. Implement depth-limited DFS.
6. Add increasing depth limits.
7. Prevent cycles on the current path.
8. Reconstruct the solution sequence.
9. Count explored states.
10. Display solution depth.
11. Support a maximum depth.
12. Report when no solution is found within the limit.

Example output:

Solution found

Depth: 6

Moves:

Up

Left

Down

Right

...

---

# 72. Advanced Project — Maze Solver

Build an IDDFS maze solver.

Requirements:

- Grid representation
- Start position
- Goal position
- Walls
- Four-direction movement
- Depth limit
- Cycle prevention
- Path reconstruction
- Search statistics

Run:

BFS

and:

IDDFS

on the same maze.

Compare:

Path length

Nodes explored

Memory usage

Execution time

---

# 73. Advanced Experiment

Construct increasingly difficult search trees.

For each tree, record:

Branching factor

Solution depth

DFS nodes

BFS nodes

IDDFS nodes

Then observe how performance changes.

This experiment gives intuition for:

O(b^d)

and:

O(bd)

behavior.

---

# 74. Engineering Challenge

Modify IDDFS so it stops when either:

1. The goal is found.
2. Maximum depth is reached.
3. Time limit expires.
4. Maximum state expansion count is reached.

Return:

status

path

depth

nodes_expanded

execution_time

This creates a more realistic search engine interface.

---

# 75. Deeper Insight

IDDFS demonstrates an important algorithmic principle:

Memory can be traded for repeated computation.

BFS stores a large frontier to avoid recomputing earlier levels.

IDDFS stores much less information but recomputes shallow levels.

Therefore:

BFS:

More memory, less repeated work.

IDDFS:

Less memory, more repeated work.

This trade-off appears throughout computer science.

---

# 76. Why This Matters in AI

AI search problems can contain enormous state spaces.

A method that requires storing every frontier state may become impossible.

A depth-first strategy may use manageable memory but risk incomplete or inefficient search.

IDDFS provides a middle ground.

It is therefore an important algorithm to understand before studying more sophisticated planning and search systems.

---

# 77. Final Mental Model

Imagine looking for a lost object in a building.

First search:

Only the rooms directly at the entrance.

Then:

Rooms one step farther.

Then:

Two steps farther.

Then:

Three steps farther.

You restart the exploration each time, but never allow the search to exceed the current depth.

Eventually:

the correct room is reached.

That is iterative deepening.

---

# 78. Key Formula

The controlling parameter is:

depth_limit

The algorithm repeatedly performs:

DLS(start, depth_limit)

while increasing:

depth_limit = 0, 1, 2, 3, ...

until the goal is found or the search is stopped.

---

# 79. Final Summary

Iterative Deepening Depth-First Search combines:

Depth-first exploration

with:

Increasing depth limits

Its process is:

1. Set depth limit to 0.
2. Run depth-limited DFS.
3. If the goal is found, return the solution.
4. Otherwise increase the limit.
5. Repeat.

IDDFS is useful when:

- The solution depth is unknown.
- Actions have equal cost.
- Memory is limited.
- A shallow solution is desirable.
- No useful heuristic is available.

Its major advantage is:

Low memory compared with BFS.

Its major disadvantage is:

Repeated exploration of upper levels.

For a typical tree search:

Time is exponential in solution depth.

Space is approximately proportional to the branching factor multiplied by depth.

The most important relationships to remember are:

DFS:

Depth-first

BFS:

Breadth-first

IDDFS:

Repeated depth-limited DFS

UCS:

Lowest accumulated cost

Greedy:

Lowest estimated remaining cost

A*:

Accumulated cost + estimated remaining cost

IDDFS is therefore an important bridge between basic uninformed search and more advanced AI planning and game-search techniques.
`,
};

export default lesson12;
