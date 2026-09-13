const lesson10 = {
  title: "Uniform Cost Search (UCS)",

  content: `
# Uniform Cost Search (UCS)

Uniform Cost Search, commonly called UCS, is an uninformed search algorithm that expands the least-cost path discovered so far.

It is one of the most important search algorithms in Artificial Intelligence because it works with weighted actions.

Unlike Breadth-First Search, which primarily minimizes the number of edges, Uniform Cost Search minimizes the total path cost.

This makes UCS particularly useful when different actions have different costs.

For example:

A road may require 2 minutes.

Another road may require 20 minutes.

Even if both roads represent one edge in a graph, they are not equally expensive.

Uniform Cost Search handles this difference.

---

# 1. Motivation

Consider a delivery robot.

It has three possible routes:

Route A:

5 km

Route B:

20 km

Route C:

8 km

If every movement is treated equally, BFS may only care about how many edges are used.

But a real navigation system cares about total travel cost.

UCS explicitly tracks:

Cost from start to current state

and always expands the state with the smallest accumulated cost.

---

# 2. Core Idea

The central rule of UCS is:

Expand the node with the lowest path cost.

The path cost is commonly represented as:

g(n)

where:

n = current node

g(n) = total cost from the starting node to n

Therefore UCS selects:

arg min g(n)

from the frontier.

---

# 3. Example

Suppose:

A -> B = 2

A -> C = 5

B -> D = 4

C -> D = 1

D -> G = 3

Starting from A:

g(A) = 0

After expanding A:

g(B) = 2

g(C) = 5

UCS chooses B because:

2 < 5

Then:

g(D) = 2 + 4

g(D) = 6

But through C:

g(D) = 5 + 1

g(D) = 6

Both routes produce the same cost.

---

# 4. Relationship With BFS

BFS is effectively a special case of Uniform Cost Search when every edge has the same cost.

Suppose every edge has cost:

1

Then:

g(n)

is exactly the depth of n.

Therefore UCS becomes equivalent to level-based exploration.

This gives an important relationship:

BFS = UCS with equal edge costs

---

# 5. Why BFS Can Fail With Weighted Edges

Consider:

A -> B = 1

B -> G = 100

A -> C = 5

C -> D = 5

D -> G = 5

There are two paths.

Path 1:

A -> B -> G

Number of edges:

2

Total cost:

101

Path 2:

A -> C -> D -> G

Number of edges:

3

Total cost:

15

BFS may prefer Path 1 because it has fewer edges.

UCS prefers Path 2 because:

15 < 101

This is the major reason UCS is useful.

---

# 6. Cost Function

For a path:

A -> B -> C

Suppose:

cost(A, B) = 3

cost(B, C) = 4

Then:

g(C) = 3 + 4

g(C) = 7

If another route reaches C with cost:

5

then UCS should replace the previous cost with:

g(C) = 5

The best known path matters.

---

# 7. Priority Queue

UCS requires a priority queue.

Why?

Because the algorithm must repeatedly select:

the state with the lowest path cost.

Python provides:

heapq

for efficient priority-queue operations.

Important operations include:

heappush()

heappop()

The smallest element is retrieved first.

---

# 8. Basic UCS Algorithm

Pseudocode:

Create a priority queue.

Insert the start node with cost 0.

While the priority queue is not empty:

    Remove the node with the smallest cost.

    If it is the goal:

        Return the path.

    For every neighbor:

        Calculate the new path cost.

        If the new cost is smaller:

            Update the best cost.

            Update the parent.

            Add the neighbor to the priority queue.

If the queue becomes empty:

    No solution exists.

---

# 9. Python Implementation

Example:

import heapq

graph = {
    "A": [("B", 2), ("C", 5)],
    "B": [("D", 4)],
    "C": [("D", 1)],
    "D": [("G", 3)],
    "G": []
}

queue = [(0, "A")]

best_cost = {
    "A": 0
}

while queue:

    cost, current = heapq.heappop(queue)

    if cost > best_cost[current]:
        continue

    print(current, cost)

    for neighbor, edge_cost in graph[current]:

        new_cost = cost + edge_cost

        if new_cost < best_cost.get(
            neighbor,
            float("inf")
        ):

            best_cost[neighbor] = new_cost

            heapq.heappush(
                queue,
                (new_cost, neighbor)
            )

---

# 10. Understanding the Priority Queue

Initially:

[(0, A)]

After expanding A:

B has cost 2

C has cost 5

Queue conceptually becomes:

[(2, B), (5, C)]

B is processed first.

Suppose B reaches D:

D cost = 2 + 4

D cost = 6

Queue becomes:

C = 5

D = 6

Now C is processed first because:

5 < 6

C can also reach D:

C -> D = 1

So:

5 + 1 = 6

This matches the existing value.

---

# 11. Parent Tracking

UCS often needs to return the actual path.

Therefore we store:

parent[child] = current

Suppose:

parent[B] = A

parent[D] = B

parent[G] = D

Then the path can be reconstructed backwards:

G

D

B

A

Reverse it:

A -> B -> D -> G

---

# 12. Complete UCS Example

Example:

import heapq

graph = {
    "A": [("B", 2), ("C", 5)],
    "B": [("D", 10)],
    "C": [("D", 1)],
    "D": [("G", 3)],
    "G": []
}

start = "A"
goal = "G"

queue = [(0, start)]

best_cost = {
    start: 0
}

parent = {
    start: None
}

while queue:

    cost, current = heapq.heappop(queue)

    if cost != best_cost.get(current):
        continue

    if current == goal:
        break

    for neighbor, edge_cost in graph[current]:

        new_cost = cost + edge_cost

        if new_cost < best_cost.get(
            neighbor,
            float("inf")
        ):

            best_cost[neighbor] = new_cost

            parent[neighbor] = current

            heapq.heappush(
                queue,
                (new_cost, neighbor)
            )

path = []

current = goal

while current is not None:

    path.append(current)

    current = parent.get(current)

path.reverse()

print("Path:", path)
print("Cost:", best_cost.get(goal))

Expected result:

Path: ['A', 'C', 'D', 'G']

Cost: 9

---

# 13. Why The Route Through B Is Not Selected

Consider:

A -> B = 2

B -> D = 10

D -> G = 3

Total:

2 + 10 + 3

= 15

Alternative:

A -> C = 5

C -> D = 1

D -> G = 3

Total:

5 + 1 + 3

= 9

Therefore UCS selects:

A -> C -> D -> G

because:

9 < 15

---

# 14. UCS Does Not Use a Heuristic

UCS only uses:

g(n)

It does not use:

h(n)

Therefore:

f(n) = g(n)

This is an important contrast with A*.

A* uses:

f(n) = g(n) + h(n)

UCS uses:

f(n) = g(n)

---

# 15. UCS vs Greedy Best-First Search

Greedy Best-First Search uses:

f(n) = h(n)

UCS uses:

f(n) = g(n)

Therefore:

Greedy Search asks:

How close does this node appear to the goal?

UCS asks:

How much have we already spent?

A* asks:

How much have we spent plus how much might remain?

This distinction is fundamental.

---

# 16. UCS vs A*

Uniform Cost Search:

f(n) = g(n)

A*:

f(n) = g(n) + h(n)

If:

h(n) = 0

then:

A* becomes UCS.

This means UCS can be viewed as a special case of A* with a zero heuristic.

This is one of the most important conceptual relationships in informed search.

---

# 17. UCS vs BFS

BFS:

Priority based on depth.

UCS:

Priority based on total path cost.

If all edge costs are identical:

BFS and UCS produce equivalent shortest-path ordering.

If edge costs differ:

UCS is the appropriate cost-sensitive method.

---

# 18. Search Frontier

The frontier contains states discovered but not permanently settled.

In UCS:

the frontier is a priority queue ordered by path cost.

Example:

B: 3

C: 7

D: 9

E: 15

UCS always selects:

B

because:

3 is the smallest cost.

---

# 19. Relaxation

A key operation in shortest-path algorithms is relaxation.

Suppose:

best_cost[D] = 10

A newly discovered route reaches D with cost:

7

Because:

7 < 10

the new path is better.

Update:

best_cost[D] = 7

and update its parent.

This is called relaxing the edge/path.

---

# 20. Why We Skip Stale Queue Entries

A priority queue can contain multiple entries for the same node.

For example:

D with cost 10

then later:

D with cost 7

The queue can temporarily contain both.

When cost 10 is eventually removed, we check:

Is this still the best known cost?

If not:

skip it.

Python implementation:

if cost != best_cost.get(current):
    continue

This avoids processing an outdated path.

---

# 21. Nonnegative Edge Costs

Standard UCS assumes path costs do not decrease when edges are traversed.

In practice, this means edge costs are normally:

zero or positive.

If negative edges exist, ordinary UCS is not the appropriate shortest-path solution.

Negative-cost graphs require different techniques.

---

# 22. Goal Testing

When should UCS stop?

For standard UCS with nonnegative costs, once the goal is removed from the priority queue as the minimum-cost frontier state, its path cost is optimal.

This is different from simply discovering the goal.

A goal could be discovered through an expensive path and later reached through a cheaper path.

Therefore the timing of goal testing matters.

---

# 23. Important Difference: Discovering vs Expanding

Suppose:

Goal is first discovered with cost:

20

But another frontier route may later reach Goal with:

10

If the algorithm stops immediately upon discovery, it may return a nonoptimal solution.

UCS should ordinarily terminate when the goal is selected as the minimum-cost node for expansion under the standard assumptions.

This is an important implementation detail.

---

# 24. Practical Example — Transportation

Imagine a traveler choosing among cities.

Travel costs:

A -> B = 100

A -> C = 20

C -> B = 30

The direct route costs:

100

The alternative route costs:

20 + 30

= 50

UCS discovers that reaching B through C is cheaper.

It therefore chooses:

A -> C -> B

rather than:

A -> B

---

# 25. Practical Example — Robot Movement

Suppose each terrain type has a different movement cost.

Road:

1

Grass:

3

Mud:

8

Mountain:

15

A robot should not simply minimize the number of movements.

It should minimize total travel cost.

UCS can model this directly.

Each grid move receives the corresponding terrain cost.

---

# 26. Weighted Grid Search

Suppose a grid contains:

Road = 1

Water = 5

Sand = 3

A route with 20 road cells could cost:

20

A shorter route crossing water could cost:

5 + several additional movement costs

The shortest geometric path is not necessarily the cheapest path.

UCS handles this distinction.

---

# 27. UCS for Route Planning

State:

Current location

Action:

Travel along an edge

Transition:

Next location

Cost:

Travel cost

Goal:

Destination

UCS searches for:

Minimum total route cost

This is closely related to real graph-based route planning.

---

# 28. UCS for AI Planning

Suppose an AI agent has actions:

Open door = cost 1

Walk = cost 2

Take elevator = cost 3

Use stairs = cost 5

The agent wants to reach a target.

UCS finds an action sequence minimizing the sum of action costs.

This makes UCS useful for cost-sensitive state-space problems.

---

# 29. Formal Definition

Let:

G = (V, E)

be a weighted graph.

Each edge e has cost:

c(e)

For a path:

P = (v0, v1, ..., vk)

the path cost is:

g(P) = sum of c(vi, vi+1)

UCS searches for:

P* = arg min over P of g(P)

where P is any valid path from start to goal.

Therefore the objective is:

Minimize total path cost.

---

# 30. Relationship With Shortest-Path Algorithms

Uniform Cost Search is closely related to Dijkstra's shortest-path algorithm when viewed from a single-source perspective.

Both prioritize the lowest known accumulated path cost.

The vocabulary often differs by context:

AI search:

Uniform Cost Search

Graph algorithms:

Dijkstra's algorithm

The underlying priority-based cost expansion is closely related.

---

# 31. UCS and Dijkstra's Algorithm

For nonnegative weighted graphs:

UCS and Dijkstra's algorithm follow essentially the same cost-ordering principle for reaching a target.

The distinction is often pedagogical:

UCS is presented as an AI search strategy.

Dijkstra's algorithm is presented as a shortest-path graph algorithm.

Understanding their relationship makes both easier to learn.

---

# 32. Complexity Intuition

The actual complexity depends on:

- Number of states
- Number of edges
- Edge costs
- Data structure used
- Search-space structure

With a binary heap and a graph representation, Dijkstra-style implementations are commonly analyzed in terms involving:

V

and:

E

For example, a typical heap-based graph implementation has complexity on the order of:

O((V + E) log V)

depending on implementation details.

For AI state spaces, however, branching-factor and cost-bound analyses are also useful.

---

# 33. Memory Usage

UCS can store many frontier states.

The priority queue may become large.

Therefore:

Time complexity matters.

But:

Memory complexity also matters.

This is one reason search algorithms must be selected based on problem structure rather than popularity.

---

# 34. UCS Can Explore Many Cheap States

Consider a graph containing hundreds of low-cost routes.

UCS may explore many states before reaching an expensive goal.

Even though a path exists, the algorithm may need to process many cheaper alternatives first.

This is necessary to guarantee the minimum-cost solution.

---

# 35. Why Greedy Search Can Be Misled

Suppose:

Start -> A

A appears very close to the goal.

But:

A -> Goal

cost = 100

Another state:

B

looks farther away.

But:

B -> C -> Goal

cost = 8

Greedy Search may prefer A because:

h(A) < h(B)

UCS may prefer B if:

g(B) < g(A)

A* considers both factors.

This demonstrates why the choice of evaluation function matters.

---

# 36. Cost-Aware Decision Making

UCS is useful when an AI system cares about:

Money

Time

Energy

Distance

Risk

Computational expense

Fuel

Resource consumption

Any quantity that can be expressed as an additive path cost can potentially be incorporated into the search objective.

---

# 37. Multi-Criteria Costs

A practical system may have multiple costs.

For example:

Travel time

Fuel consumption

Toll charges

These may be combined into one weighted cost:

Total Cost =
alpha × time
+
beta × fuel
+
gamma × toll

UCS can then minimize the resulting scalar cost.

The quality of the solution depends on how those weights are chosen.

---

# 38. Weighted Cost Example

Suppose:

alpha = 2

beta = 1

gamma = 5

Route A:

time = 5

fuel = 4

toll = 1

Total:

2(5) + 1(4) + 5(1)

= 10 + 4 + 5

= 19

Route B:

time = 7

fuel = 2

toll = 0

Total:

2(7) + 1(2)

= 16

UCS would prefer Route B under this cost model.

---

# 39. UCS and Decision Theory

The search algorithm is only as meaningful as the cost function.

If the cost function represents:

time

the algorithm minimizes time.

If it represents:

fuel

the algorithm minimizes fuel.

If it represents:

financial cost

the algorithm minimizes financial cost.

Therefore:

Defining the objective is as important as selecting the algorithm.

---

# 40. Common Mistakes

Mistake 1:

Using a normal FIFO queue instead of a priority queue.

Mistake 2:

Stopping as soon as the goal is first discovered.

Mistake 3:

Ignoring a newly discovered cheaper route.

Mistake 4:

Allowing stale priority-queue entries to corrupt the search.

Mistake 5:

Assuming UCS minimizes the number of edges.

Mistake 6:

Using UCS when negative edge costs invalidate the standard assumptions.

Mistake 7:

Confusing UCS with Greedy Best-First Search.

---

# 41. Debugging UCS

Useful debugging output includes:

Current state

Current cost

Parent

Priority queue

Best known cost

Example:

Current: C

Cost: 5

Parent: A

Then:

Current: D

Cost: 6

Parent: C

Then:

Current: G

Cost: 9

Parent: D

This makes the cost-driven behavior visible.

---

# 42. Advanced Example

Consider:

A -> B = 4

A -> C = 1

C -> B = 1

B -> G = 10

C -> D = 5

D -> G = 2

Possible path 1:

A -> B -> G

Cost:

4 + 10

= 14

Possible path 2:

A -> C -> B -> G

Cost:

1 + 1 + 10

= 12

Possible path 3:

A -> C -> D -> G

Cost:

1 + 5 + 2

= 8

UCS eventually selects:

A -> C -> D -> G

because:

8

is the minimum total cost.

---

# 43. Comparing Four Search Strategies

BFS:

f(n) = depth

Greedy Best-First:

f(n) = h(n)

UCS:

f(n) = g(n)

A*:

f(n) = g(n) + h(n)

This is one of the most useful summary relationships in classical AI search.

---

# 44. A Unified View

The algorithms can be viewed as different priorities.

BFS:

Ignore edge-cost differences.

Greedy:

Focus entirely on the goal estimate.

UCS:

Focus entirely on cost already spent.

A*:

Balance past cost and estimated future cost.

This unified view helps explain why A* is often considered a combination of cost-aware and goal-directed search.

---

# 45. Practical Project

Build a weighted city route planner.

Requirements:

1. Represent cities as graph nodes.
2. Represent roads as weighted edges.
3. Accept a start city.
4. Accept a destination.
5. Implement UCS.
6. Track the best known cost.
7. Track parent cities.
8. Reconstruct the final route.
9. Display total route cost.
10. Handle unreachable destinations.

Example:

Cities:

A
B
C
D
E

Roads have different travel costs.

The program should print:

Shortest-cost route

and:

Total travel cost

---

# 46. Advanced Project Extension

Add multiple cost modes.

Mode 1:

Shortest distance

Mode 2:

Lowest travel time

Mode 3:

Lowest fuel consumption

Mode 4:

Combined weighted cost

Then compare how the selected route changes.

This demonstrates that the search algorithm is responding to the objective function.

---

# 47. Practical Experiment

Run three algorithms on the same weighted graph:

BFS

UCS

A*

Measure:

Nodes explored

Final path

Total cost

Execution time

Then compare the results.

You should observe that:

BFS minimizes depth when edge weights are treated uniformly.

UCS minimizes actual cumulative cost.

A* uses both cumulative cost and heuristic guidance.

---

# 48. Important Engineering Insight

An algorithm cannot compensate for a badly defined objective.

Suppose a route planner defines:

Cost = distance only

Then it may choose a route that is short but extremely slow.

If:

Cost = travel time

the result may change.

Therefore AI system design requires:

Correct state representation

Correct transition model

Correct cost function

Correct search algorithm

Correct heuristic when applicable

---

# 49. When to Use UCS

UCS is a strong choice when:

- Edge costs differ.
- Costs are nonnegative.
- The minimum total path cost matters.
- No useful heuristic is available.
- The search space is explicitly represented.
- The goal is well defined.

Examples:

- Route optimization
- Robot navigation
- Resource planning
- Cost-sensitive planning
- Weighted state-space search
- Network path selection

---

# 50. When Not to Use UCS

UCS may be unsuitable when:

- All edges have the same cost and BFS is sufficient.
- A strong heuristic exists and A* can reduce exploration.
- The graph contains negative edge costs.
- The state space is too large for exhaustive cost-based exploration.
- An approximate solution is acceptable and exact search is unnecessarily expensive.

Algorithm choice should follow the structure of the problem.

---

# 51. Summary

Uniform Cost Search expands the least-cost frontier state.

Its evaluation function is:

f(n) = g(n)

where:

g(n) = actual cost from the start to n.

UCS uses a priority queue.

In Python, heapq is useful for implementing that priority queue.

UCS finds minimum-cost paths under the standard nonnegative-cost assumptions.

BFS is essentially a special case of UCS when every edge has equal cost.

A* becomes UCS when:

h(n) = 0

Greedy Best-First Search differs because it uses only:

h(n)

The most important idea is:

UCS asks:

What is the cheapest path we have accumulated so far?

A* asks:

What is the cheapest estimated complete path?

This distinction is central to understanding classical AI search.

---

# Key Takeaways

Uniform Cost Search is cost-driven.

It uses a priority queue.

The priority is:

g(n)

It is useful for weighted graphs.

It guarantees an optimal minimum-cost solution under the standard nonnegative-cost assumptions.

It is closely related to Dijkstra's algorithm.

BFS can be viewed as the equal-cost special case.

A* extends the idea by adding a heuristic:

f(n) = g(n) + h(n)

UCS is therefore an essential bridge between uninformed graph search and informed AI search.
`,
};

export default lesson10;
