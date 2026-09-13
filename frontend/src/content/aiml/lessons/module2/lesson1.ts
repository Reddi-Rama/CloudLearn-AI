export const lesson1 = {
  id: "aiml-module2-lesson1",
  lessonNumber: 1,
  title: "What Is an AI Problem?",
  moduleTitle: "Problem Solving & Search",
  courseId: "aiml",
  moduleId: "module2",

  navigation: {
    courseId: "aiml",
    moduleId: "module2",
    currentLesson: 1,
    totalLessons: 12,

    previous: {
      label: "Module 01",
      href: "/lesson/aiml/module1/about"
    },

    next: {
      label: "Lesson 02",
      href: "/lesson/aiml/module2/lesson2"
    },

    backToModule: {
      label: "Module 02",
      href: "/lesson/aiml/module2/about"
    },

    courseOverview: {
      label: "Course Overview",
      href: "/courses/aiml"
    },

    courseRoadmap: {
      label: "Course Roadmap",
      href: "/courses/aiml/roadmap"
    }
  },

  content: String.raw`
# Lesson 01 — What Is an AI Problem?

## What You Will Learn

In this lesson, you will learn what an AI problem is and why some problems require a system to search through possible solutions rather than directly calculate an answer.

You will learn:

- What a problem means in Artificial Intelligence
- What makes a problem suitable for AI problem solving
- The difference between direct computation and search-based problems
- Initial states
- States
- Actions
- State transitions
- Goal states
- Goal tests
- Solutions and paths
- Path costs
- Constraints
- Search spaces
- Problem representation
- AI problem-solving agents
- State-space reasoning
- Real-world AI problem examples
- How to represent a simple AI problem in Python
- How graphs and grids represent AI problems
- Why correct problem representation is critical
- When search is useful
- When another AI approach may be more appropriate

The central idea of this lesson is:

\`\`\`
Real-World Situation
        ↓
Problem
        ↓
Initial State
        ↓
Possible Actions
        ↓
State Transitions
        ↓
Possible Solutions
        ↓
Goal
        ↓
Best / Valid Solution
\`\`\`

---

# 1. What Is a Problem?

A problem is a situation in which we have a desired objective but do not immediately know the sequence of actions required to achieve it.

For example:

\`\`\`
You are at Location A.

You need to reach Location D.

There are several roads between the locations.
\`\`\`

The objective is clear:

\`\`\`
Reach D
\`\`\`

But the solution may not be immediately obvious.

There may be multiple possible routes:

\`\`\`
A → B → D

A → C → D

A → B → C → D
\`\`\`

The system must determine which route should be selected.

This is where AI problem solving becomes useful.

---

# 2. What Is an AI Problem?

An AI problem is a problem where an intelligent system must determine an appropriate solution using techniques such as:

- Search
- Reasoning
- Planning
- Optimization
- Machine Learning
- Probabilistic reasoning
- Knowledge representation
- Decision making

In this module, the main focus is on **search-based problem solving**.

A search-based AI problem can be described as:

\`\`\`
Start from an initial state
        ↓
Consider possible actions
        ↓
Generate new states
        ↓
Explore possible solutions
        ↓
Reach a goal
\`\`\`

The system does not necessarily know the complete solution beforehand.

It discovers the solution by exploring possibilities.

---

# 3. Why AI Needs Problem Solving

Consider the following calculation:

\`\`\`
25 + 17
\`\`\`

A normal program can directly calculate:

\`\`\`
42
\`\`\`

There is no meaningful search involved.

Now consider:

\`\`\`
Find a path through a maze.
\`\`\`

The system may have:

\`\`\`
One starting point
One destination
Many possible movements
Walls
Multiple possible paths
\`\`\`

The correct route must be discovered.

This is a problem-solving task.

---

# 4. Direct Computation vs Search

A direct computational problem usually has a known procedure.

Example:

\`\`\`
Input:
10

Operation:
Square the number

Output:
100
\`\`\`

The algorithm directly applies the operation.

A search problem is different.

Example:

\`\`\`
Input:
Map

Start:
A

Goal:
G

Question:
Which route should be taken?
\`\`\`

There may be many possible solutions.

The system needs to explore the alternatives.

Therefore:

\`\`\`
Direct Computation
→ Apply a known procedure

Search
→ Explore possible states to discover a solution
\`\`\`

---

# 5. Example — Finding a Route

Suppose a map contains:

\`\`\`
A ---- B ---- D
|      |
|      |
C ---- E ---- F
        |
        |
        G
\`\`\`

Suppose:

\`\`\`
Start = A
Goal = G
\`\`\`

Possible paths include:

\`\`\`
A → C → E → G
\`\`\`

or:

\`\`\`
A → B → E → G
\`\`\`

The AI system must determine which paths are possible.

If every road has the same cost, we may want the path with the fewest steps.

If roads have different costs, we may want the lowest-cost path.

---

# 6. Components of an AI Search Problem

A search problem generally contains:

\`\`\`
Initial State
State
Actions
Transition Model
Goal
Goal Test
Path
Path Cost
Constraints
\`\`\`

These components describe the problem in a form that an AI algorithm can process.

---

# 7. Initial State

The **initial state** describes where the problem begins.

Examples:

### Robot

\`\`\`
Initial position = (0, 0)
\`\`\`

### Navigation

\`\`\`
Current location = Hyderabad
\`\`\`

### Maze

\`\`\`
Start cell = (0, 0)
\`\`\`

### Puzzle

\`\`\`
Initial board configuration
\`\`\`

### Game

\`\`\`
Current game configuration
\`\`\`

The initial state is the starting point of the search.

---

# 8. What Is a State?

A state describes the current situation of the system.

For a robot moving on a grid:

\`\`\`
(2, 3)
\`\`\`

can represent:

\`\`\`
Row = 2
Column = 3
\`\`\`

For a navigation system:

\`\`\`
Current Location = A
\`\`\`

For a puzzle:

\`\`\`
Current Board Configuration
\`\`\`

For a delivery system:

\`\`\`
Current location
+
Remaining deliveries
\`\`\`

A state must contain information that is relevant to future decisions.

---

# 9. Example of a Simple State

Suppose a robot is moving inside a grid.

The state can be:

\`\`\`
(row, column)
\`\`\`

Example:

\`\`\`
(3, 4)
\`\`\`

means:

\`\`\`
Robot is at row 3, column 4.
\`\`\`

The system can use this state to determine possible next movements.

---

# 10. State Can Contain Multiple Values

Some problems require more information.

Suppose the robot has a battery.

Then position alone may not be enough.

We can represent:

\`\`\`
state = (position, battery)
\`\`\`

Example:

\`\`\`
((3, 4), 70)
\`\`\`

This means:

\`\`\`
Position = (3, 4)
Battery = 70%
\`\`\`

If battery affects whether the robot can move, it must be included in the state.

---

# 11. Why State Representation Matters

Suppose we represent the robot only as:

\`\`\`
position
\`\`\`

but ignore:

\`\`\`
battery
\`\`\`

The AI might find a route that requires more energy than the robot has.

Therefore:

\`\`\`
Incomplete State
        ↓
Missing Information
        ↓
Incorrect Decisions
\`\`\`

A good state representation must contain the information required to solve the problem correctly.

---

# 12. State Abstraction

A real-world environment contains enormous amounts of information.

For example, a robot may have:

\`\`\`
Position
Battery
Temperature
Speed
Camera image
Sound
Object locations
Time
Sensor readings
\`\`\`

A simple pathfinding problem may only need:

\`\`\`
Position
\`\`\`

and perhaps:

\`\`\`
Obstacles
\`\`\`

The irrelevant information can be ignored.

This is called **abstraction**.

Abstraction simplifies a real-world problem into a manageable computational representation.

---

# 13. Too Little vs Too Much Information

There are two common problems.

### Too Little Information

The system cannot make correct decisions.

Example:

\`\`\`
state = position
\`\`\`

when battery is important.

### Too Much Irrelevant Information

The search space can become unnecessarily large.

Example:

\`\`\`
state = (
    position,
    battery,
    wall_color,
    screen_brightness,
    music_volume,
    user_name
)
\`\`\`

if only position and battery affect the decision.

A good state representation contains:

\`\`\`
Relevant information
+
Enough information for correct decisions
\`\`\`

---

# 14. Actions

An action describes something the agent can do from a state.

For a grid robot:

\`\`\`
UP
DOWN
LEFT
RIGHT
\`\`\`

For navigation:

\`\`\`
Take Road A
Take Road B
Take Road C
\`\`\`

For a puzzle:

\`\`\`
Move tile
\`\`\`

For a game:

\`\`\`
Move
Jump
Attack
Defend
\`\`\`

Actions create possible transitions between states.

---

# 15. Actions Depend on the Current State

Not every action is valid everywhere.

Suppose a robot is at:

\`\`\`
(0, 0)
\`\`\`

If row 0 is the top edge of the grid, then:

\`\`\`
UP
\`\`\`

is invalid.

Similarly:

\`\`\`
LEFT
\`\`\`

may be invalid.

The valid actions might be:

\`\`\`
DOWN
RIGHT
\`\`\`

Therefore:

\`\`\`
State
  ↓
Determine Valid Actions
  ↓
Choose Possible Action
\`\`\`

---

# 16. State Transition

A state transition describes how an action changes the current state.

For example:

\`\`\`
Current State:
(2, 3)

Action:
RIGHT

New State:
(2, 4)
\`\`\`

We can represent this as:

\`\`\`
State + Action → New State
\`\`\`

Mathematically:

\`\`\`
T(s, a) = s'
\`\`\`

where:

\`\`\`
s  = current state
a  = action
s' = resulting state
\`\`\`

---

# 17. Python State Transition

A simple transition function can be implemented in Python:

\`\`\`
def move(state, action):
    row, col = state

    if action == "UP":
        return (row - 1, col)

    if action == "DOWN":
        return (row + 1, col)

    if action == "LEFT":
        return (row, col - 1)

    if action == "RIGHT":
        return (row, col + 1)

    return state


state = (2, 3)

new_state = move(state, "RIGHT")

print(new_state)
\`\`\`

Output:

\`\`\`
(2, 4)
\`\`\`

This is a basic transition model.

---

# 18. Goal State

The goal state describes what the system wants to achieve.

Examples:

\`\`\`
Robot reaches (5,5)
\`\`\`

\`\`\`
Vehicle reaches destination
\`\`\`

\`\`\`
Puzzle reaches solved configuration
\`\`\`

\`\`\`
Game reaches winning state
\`\`\`

The goal gives the search algorithm a stopping condition.

---

# 19. Goal Test

A **goal test** checks whether the current state satisfies the goal.

For a simple grid:

\`\`\`
current_state == goal_state
\`\`\`

Python:

\`\`\`
def is_goal(state, goal):
    return state == goal


current = (5, 5)
goal = (5, 5)

print(is_goal(current, goal))
\`\`\`

Output:

\`\`\`
True
\`\`\`

The search can stop when the goal test returns true.

---

# 20. Complex Goal Conditions

Not every goal is a single coordinate.

Suppose a robot must clean every room.

The goal might be:

\`\`\`
All rooms are clean
\`\`\`

A state could contain:

\`\`\`
{
    "position": "Kitchen",
    "cleaned_rooms": {
        "Living Room",
        "Bedroom",
        "Kitchen"
    }
}
\`\`\`

The goal test could check whether all required rooms have been cleaned.

This demonstrates that goals can be conditions rather than a single state value.

---

# 21. Solution

A solution is a sequence of valid actions that takes the system from the initial state to a goal state.

Example:

\`\`\`
Initial:
(0,0)

Actions:
RIGHT
DOWN
RIGHT
DOWN

Goal:
(2,2)
\`\`\`

The corresponding state sequence is:

\`\`\`
(0,0)
→ (0,1)
→ (1,1)
→ (1,2)
→ (2,2)
\`\`\`

The goal has been reached.

---

# 22. Multiple Solutions

An AI problem can have multiple valid solutions.

For example, to move from:

\`\`\`
(0,0)
\`\`\`

to:

\`\`\`
(2,2)
\`\`\`

one solution is:

\`\`\`
RIGHT
RIGHT
DOWN
DOWN
\`\`\`

Another solution is:

\`\`\`
DOWN
DOWN
RIGHT
RIGHT
\`\`\`

Both reach the same goal.

Therefore:

\`\`\`
Finding a solution
\`\`\`

is different from:

\`\`\`
Finding the best solution
\`\`\`

---

# 23. Path

A path is a sequence of states through the search space.

Example:

\`\`\`
A → B → C → D
\`\`\`

The states are:

\`\`\`
A
B
C
D
\`\`\`

The actions might be:

\`\`\`
Move A→B
Move B→C
Move C→D
\`\`\`

Therefore:

\`\`\`
Path = States visited

Action Sequence = Operations used
\`\`\`

---

# 24. Path Cost

When multiple solutions exist, we often need to compare them.

Path cost provides a measure for comparing solutions.

Suppose:

\`\`\`
Route A = 10 km
Route B = 20 km
\`\`\`

If the objective is shortest distance:

\`\`\`
Route A
\`\`\`

has lower cost.

Cost can represent:

- Distance
- Time
- Money
- Energy
- Fuel
- Risk
- Number of actions

The meaning of cost depends on the problem.

---

# 25. Step Cost

Each action can have an individual cost.

Suppose:

\`\`\`
A → B = 4
B → C = 3
C → D = 5
\`\`\`

The total path cost is:

\`\`\`
4 + 3 + 5 = 12
\`\`\`

Therefore:

\`\`\`
Total Path Cost = Sum of Step Costs
\`\`\`

Mathematically:

\`\`\`
g(path) = Σ cost(action)
\`\`\`

---

# 26. Equal-Cost Problems

Suppose every movement costs 1.

Then:

\`\`\`
Move 1 = 1
Move 2 = 1
Move 3 = 1
Move 4 = 1
\`\`\`

A path with four movements has cost:

\`\`\`
4
\`\`\`

In such problems, minimizing path cost is equivalent to minimizing the number of steps.

This type of problem is common in simple grid pathfinding.

---

# 27. Weighted Problems

Now suppose different roads have different costs.

\`\`\`
A → B = 10
A → C = 2
C → D = 2
B → D = 1
\`\`\`

Path 1:

\`\`\`
A → B → D
\`\`\`

Cost:

\`\`\`
10 + 1 = 11
\`\`\`

Path 2:

\`\`\`
A → C → D
\`\`\`

Cost:

\`\`\`
2 + 2 = 4
\`\`\`

Both paths contain two actions.

But:

\`\`\`
4 < 11
\`\`\`

Therefore, the second path is cheaper.

This is why cost information matters.

---

# 28. Constraints

A constraint limits what the system can do.

Examples:

\`\`\`
Obstacle
Closed road
Limited battery
Limited budget
Time deadline
Restricted area
Resource limitation
Vehicle capacity
\`\`\`

For a robot:

\`\`\`
Cannot move through obstacles.
\`\`\`

For a delivery system:

\`\`\`
Cannot exceed vehicle capacity.
\`\`\`

For a scheduling system:

\`\`\`
Tasks cannot overlap.
\`\`\`

Constraints define invalid states or actions.

---

# 29. Example — Maze

Consider:

\`\`\`
S . . #
. # . #
. . . .
# . # G
\`\`\`

where:

\`\`\`
S = Start
G = Goal
# = Wall
. = Open cell
\`\`\`

The problem can be formulated as:

\`\`\`
Initial State:
Position of S

State:
Current grid position

Actions:
UP
DOWN
LEFT
RIGHT

Transition:
Move to a valid neighboring cell

Constraints:
Cannot enter walls
Cannot leave the grid

Goal:
Reach G

Cost:
1 per movement
\`\`\`

Now the problem is ready for a search algorithm.

---

# 30. Example — Robot Navigation

Suppose a warehouse robot starts at:

\`\`\`
(0, 0)
\`\`\`

and must reach:

\`\`\`
(4, 4)
\`\`\`

Possible actions:

\`\`\`
UP
DOWN
LEFT
RIGHT
\`\`\`

Constraints:

\`\`\`
Cannot move outside the warehouse.
Cannot move through obstacles.
\`\`\`

Cost:

\`\`\`
1 for every movement.
\`\`\`

Problem formulation:

\`\`\`
Initial State = (0,0)

State = (row,column)

Actions = UP, DOWN, LEFT, RIGHT

Transition = Move to valid adjacent cell

Goal = (4,4)

Cost = Number of movements
\`\`\`

This is a classical search problem.

---

# 31. Example — Navigation System

Suppose a navigation application must find a route between two cities.

### Initial State

\`\`\`
Current city
\`\`\`

### State

\`\`\`
Current city
\`\`\`

### Actions

\`\`\`
Travel through an available road
\`\`\`

### Transition

\`\`\`
Current city → Connected city
\`\`\`

### Goal

\`\`\`
Destination city
\`\`\`

### Cost

Could be:

\`\`\`
Distance
Travel time
Fuel cost
\`\`\`

### Constraints

Could include:

\`\`\`
Closed roads
Vehicle restrictions
Restricted routes
\`\`\`

The same search principles apply.

---

# 32. Example — 8-Puzzle

An 8-puzzle contains numbered tiles and one empty position.

Example:

\`\`\`
1 2 3
4 5 6
7 _ 8
\`\`\`

The goal may be:

\`\`\`
1 2 3
4 5 6
7 8 _
\`\`\`

Problem formulation:

\`\`\`
Initial State:
Starting board

State:
Complete board configuration

Actions:
Move a valid tile into the empty position

Transition:
New board configuration

Goal:
Target board configuration

Cost:
Number of moves
\`\`\`

The AI can search through possible board configurations.

---

# 33. Example — Game AI

Suppose an AI controls a character.

The character can:

\`\`\`
Move Left
Move Right
Jump
Attack
Defend
\`\`\`

A state might contain:

\`\`\`
Player position
Enemy position
Health
Current game status
\`\`\`

The goal could be:

\`\`\`
Defeat the opponent
\`\`\`

The AI can explore possible actions and resulting states.

Search can therefore be used in games and planning systems.

---

# 34. Example — Network Routing

Consider:

\`\`\`
Computer
    |
Router A
   / \
  B   C
   \ /
   Router D
     |
   Server
\`\`\`

The problem is:

\`\`\`
Find a path from Computer to Server.
\`\`\`

Formulation:

\`\`\`
State:
Current network node

Actions:
Forward to a connected node

Transition:
Move to connected node

Goal:
Server

Cost:
Latency, hop count, or another routing metric

Constraints:
Unavailable links or capacity limits
\`\`\`

A graph search algorithm can solve the routing problem.

---

# 35. Example — Course Planning

AI search does not always involve physical movement.

Suppose a learning platform needs to find a valid order for courses.

Courses:

\`\`\`
Programming
Data Structures
Algorithms
Machine Learning
\`\`\`

Prerequisites:

\`\`\`
Programming
    ↓
Data Structures
    ↓
Algorithms
    ↓
Machine Learning
\`\`\`

A state can represent:

\`\`\`
Courses already completed
\`\`\`

An action can represent:

\`\`\`
Complete an available course
\`\`\`

Goal:

\`\`\`
All required courses completed
\`\`\`

Constraint:

\`\`\`
Prerequisites must be satisfied
\`\`\`

This is a state-space problem.

---

# 36. Example — Delivery Planning

Suppose a vehicle must deliver packages to:

\`\`\`
A
B
C
\`\`\`

The state might contain:

\`\`\`
Current Location
Delivered Customers
\`\`\`

For example:

\`\`\`
(
    "B",
    {"A"}
)
\`\`\`

means:

\`\`\`
Current location = B
A has already been delivered
\`\`\`

An action might be:

\`\`\`
Travel to C
\`\`\`

The goal is:

\`\`\`
All required deliveries completed
\`\`\`

The cost could be:

\`\`\`
Total travel distance
\`\`\`

This demonstrates how state representation can become more complex as the problem becomes more realistic.

---

# 37. Search Space

The **search space** is the collection of possible states that the AI system may explore.

Suppose:

\`\`\`
A → B
A → C
B → D
C → E
\`\`\`

The search space contains:

\`\`\`
A
B
C
D
E
\`\`\`

The system explores this space while looking for the goal.

---

# 38. Search Tree

A search tree can represent possible choices.

Example:

\`\`\`
          A
        /   \
       B     C
      / \   / \
     D   E F   G
\`\`\`

Starting from A, the system can explore:

\`\`\`
B
C
D
E
F
G
\`\`\`

Different search algorithms determine the order in which these states are explored.

---

# 39. Search Space Can Become Very Large

Suppose every state has four possible actions.

After one step:

\`\`\`
4
\`\`\`

possible action sequences.

After two steps:

\`\`\`
4 × 4 = 16
\`\`\`

After three:

\`\`\`
4 × 4 × 4 = 64
\`\`\`

After ten:

\`\`\`
4^10 = 1,048,576
\`\`\`

This is a simplified calculation and does not account for repeated states or invalid actions, but it demonstrates how quickly the number of possible paths can grow.

Therefore, blindly exploring every possibility can become expensive.

This is why intelligent search strategies are necessary.

---

# 40. Frontier

During search, an algorithm maintains states that have been discovered but are waiting to be explored.

This collection is commonly called the **frontier**.

Conceptually:

\`\`\`
Initial State
     ↓
Frontier
     ↓
Expand a State
     ↓
Generate New States
     ↓
Add New States to Frontier
\`\`\`

Different algorithms organize the frontier differently.

For example:

\`\`\`
BFS
→ Queue

DFS
→ Stack

Uniform-Cost Search
→ Priority Queue

A*
→ Priority Queue
\`\`\`

You will study these algorithms in later lessons.

---

# 41. Explored States

Search algorithms can encounter the same state more than once.

Consider:

\`\`\`
A → B
↑   |
|   ↓
D ← C
\`\`\`

There is a cycle.

If the algorithm does not remember visited states, it may continue exploring:

\`\`\`
A → B → C → D → A → B → C → D ...
\`\`\`

This can cause unnecessary computation.

A common solution is to maintain a set of visited states.

Python:

\`\`\`
visited = set()

visited.add("A")

if "A" in visited:
    print("State already explored")
\`\`\`

Output:

\`\`\`
State already explored
\`\`\`

---

# 42. Representing a Grid in Python

A grid can be represented using a list of lists.

\`\`\`
grid = [
    ["S", ".", "."],
    [".", "X", "."],
    [".", ".", "G"]
]

for row in grid:
    print(row)
\`\`\`

Output:

\`\`\`
['S', '.', '.']
['.', 'X', '.']
['.', '.', 'G']
\`\`\`

Here:

\`\`\`
S = Start
G = Goal
X = Obstacle
. = Free cell
\`\`\`

---

# 43. Representing Actions in Python

We can represent movement using coordinate changes.

\`\`\`
actions = {
    "UP": (-1, 0),
    "DOWN": (1, 0),
    "LEFT": (0, -1),
    "RIGHT": (0, 1)
}
\`\`\`

For example:

\`\`\`
"UP": (-1, 0)
\`\`\`

means:

\`\`\`
row decreases by 1
column remains unchanged
\`\`\`

---

# 44. Applying Actions in Python

\`\`\`
def apply_action(state, action):
    row, col = state
    row_change, col_change = action

    return (
        row + row_change,
        col + col_change
    )


state = (1, 1)

new_state = apply_action(
    state,
    actions["RIGHT"]
)

print(new_state)
\`\`\`

Output:

\`\`\`
(1, 2)
\`\`\`

This implements the transition idea directly.

---

# 45. Checking Grid Boundaries

An action should not move the agent outside the grid.

\`\`\`
def is_inside_grid(state, rows, cols):
    row, col = state

    return (
        0 <= row < rows
        and
        0 <= col < cols
    )


print(is_inside_grid((1, 2), 3, 3))
print(is_inside_grid((3, 2), 3, 3))
\`\`\`

Output:

\`\`\`
True
False
\`\`\`

---

# 46. Checking Obstacles

We also need to make sure the target cell is not blocked.

\`\`\`
def is_valid_position(grid, state):
    row, col = state

    if row < 0 or row >= len(grid):
        return False

    if col < 0 or col >= len(grid[0]):
        return False

    return grid[row][col] != "X"
\`\`\`

This combines:

\`\`\`
Boundary Constraint
+
Obstacle Constraint
\`\`\`

---

# 47. Generating Valid Next States

Now we can generate possible next states.

\`\`\`
def get_neighbors(grid, state):
    actions = {
        "UP": (-1, 0),
        "DOWN": (1, 0),
        "LEFT": (0, -1),
        "RIGHT": (0, 1)
    }

    neighbors = []

    for action_name, action in actions.items():
        next_state = apply_action(state, action)

        if is_valid_position(grid, next_state):
            neighbors.append(
                (action_name, next_state)
            )

    return neighbors
\`\`\`

This function answers:

\`\`\`
"What can the agent do from this state?"
\`\`\`

That question is fundamental to search.

---

# 48. Testing the State Representation

Use:

\`\`\`
grid = [
    ["S", ".", "."],
    [".", "X", "."],
    [".", ".", "G"]
]

print(get_neighbors(grid, (0, 0)))
\`\`\`

The invalid movements should not be returned.

At:

\`\`\`
(0, 0)
\`\`\`

the robot cannot move:

\`\`\`
UP
LEFT
\`\`\`

because they would leave the grid.

Valid movements include:

\`\`\`
DOWN
RIGHT
\`\`\`

---

# 49. Problem-Solving Loop

A search-based intelligent agent can be viewed as:

\`\`\`
Observe Current Situation
        ↓
Represent Current State
        ↓
Define / Check Goal
        ↓
Generate Possible Actions
        ↓
Generate New States
        ↓
Search
        ↓
Select Solution
        ↓
Execute Action
\`\`\`

This cycle forms the foundation of many classical AI systems.

---

# 50. AI Problem vs AI Model

It is important not to confuse the problem with the model.

A problem is:

\`\`\`
What needs to be solved?
\`\`\`

A model or algorithm is:

\`\`\`
How will we solve it?
\`\`\`

Example:

\`\`\`
Problem:
Find a route from A to G.
\`\`\`

Possible solution methods:

\`\`\`
BFS
DFS
Uniform-Cost Search
A*
\`\`\`

The problem should be defined before choosing the algorithm.

---

# 51. Why We Should Not Immediately Choose an Algorithm

Suppose someone says:

\`\`\`
"Use BFS for this problem."
\`\`\`

Before accepting that decision, ask:

\`\`\`
Are all actions equally costly?

Do we need the shortest number-of-step path?

Is the search space manageable?

Are there useful heuristics?

Are there weighted transitions?
\`\`\`

The characteristics of the problem influence the algorithm choice.

Therefore:

\`\`\`
Problem
   ↓
Problem Characteristics
   ↓
Algorithm Selection
\`\`\`

---

# 52. When Search Is Useful

Search is useful when:

- There are multiple possible states
- Actions change the state
- A goal can be clearly defined
- The system must explore alternatives
- A solution can be represented as a sequence of actions

Common examples:

- Maze solving
- Pathfinding
- Route planning
- Puzzle solving
- Game search
- Network routing
- Planning
- Scheduling

---

# 53. When Search May Not Be the Best Approach

Not every AI problem should be solved using classical search.

For example:

\`\`\`
Predict whether an email is spam.
\`\`\`

This is naturally a machine learning problem when learning from historical examples.

Another example:

\`\`\`
Generate a paragraph of text.
\`\`\`

This is more naturally handled by a generative model.

Another:

\`\`\`
Predict house prices from historical data.
\`\`\`

This is generally a machine learning problem.

Therefore:

\`\`\`
Choose the AI approach
based on the structure of the problem.
\`\`\`

---

# 54. Search and Machine Learning Can Work Together

Modern AI systems can combine multiple techniques.

For example:

\`\`\`
Machine Learning Model
        ↓
Predict promising actions
        ↓
Search
        ↓
Explore candidate solutions
        ↓
Select action
\`\`\`

A learned model can help guide a search process.

This combination appears in more advanced AI systems.

---

# 55. Real-World Example — Warehouse Robot

Imagine a warehouse robot.

The real-world requirement is:

\`\`\`
Move packages from storage areas
to delivery areas while avoiding obstacles.
\`\`\`

A computational representation might contain:

\`\`\`
State:
Robot position

Actions:
UP
DOWN
LEFT
RIGHT

Transition:
Move to adjacent valid position

Goal:
Reach package or delivery location

Constraints:
Obstacles
Warehouse boundaries

Cost:
Movement distance
\`\`\`

This converts a real-world requirement into an AI search problem.

---

# 56. Real-World Example — Navigation

Requirement:

\`\`\`
Find the best route between two locations.
\`\`\`

Possible formulation:

\`\`\`
State:
Current location

Actions:
Travel through connected roads

Transition:
Move to connected location

Goal:
Destination

Cost:
Travel time or distance

Constraints:
Closed roads or restrictions
\`\`\`

A search algorithm can now operate on this representation.

---

# 57. Real-World Example — Network Routing

Requirement:

\`\`\`
Send data from one network node
to another efficiently.
\`\`\`

Possible formulation:

\`\`\`
State:
Current router

Actions:
Forward packet to connected router

Transition:
Packet moves to another router

Goal:
Destination router

Cost:
Latency or another routing metric

Constraints:
Unavailable or restricted links
\`\`\`

Again, the same AI problem-solving structure appears.

---

# 58. Real-World Example — Puzzle Solver

Requirement:

\`\`\`
Solve a sliding puzzle.
\`\`\`

Formulation:

\`\`\`
State:
Current board configuration

Actions:
Valid tile movements

Transition:
New board configuration

Goal:
Target configuration

Cost:
Number of moves
\`\`\`

The search algorithm explores possible configurations.

---

# 59. Why Problem Representation Is Critical

Consider two developers.

Developer A defines:

\`\`\`
State = robot position
\`\`\`

Developer B defines:

\`\`\`
State = robot position + battery level
\`\`\`

If battery affects movement, Developer B has created a more appropriate representation.

Even if both use the same search algorithm, their systems may produce different results.

Therefore:

> The quality of an AI solution depends heavily on how the problem is represented.

---

# 60. Formal Representation

A classical search problem can be expressed as:

\`\`\`
P = (S, A, T, s₀, G, C)
\`\`\`

where:

\`\`\`
S  = State space
A  = Actions
T  = Transition model
s₀ = Initial state
G  = Goal condition
C  = Cost function
\`\`\`

This notation provides a compact mathematical description of the problem.

---

# 61. Understanding the Formal Representation

Suppose we have a robot grid problem.

Then:

\`\`\`
S = all valid grid positions

A = UP, DOWN, LEFT, RIGHT

T = movement rules

s₀ = starting coordinate

G = target coordinate

C = movement cost
\`\`\`

Now the entire problem can be described mathematically.

This is useful because search algorithms can work with this formal structure.

---

# 62. Practical Python Representation

A simple problem class can store these components.

\`\`\`
class SearchProblem:
    def __init__(
        self,
        initial_state,
        goal_state,
        actions,
        transition,
        cost
    ):
        self.initial_state = initial_state
        self.goal_state = goal_state
        self.actions = actions
        self.transition = transition
        self.cost = cost

    def is_goal(self, state):
        return state == self.goal_state
\`\`\`

This separates the problem definition from the search algorithm.

That is a useful software-engineering design.

---

# 63. Creating a Simple Problem

\`\`\`
def move_right(state):
    return state + 1


problem = SearchProblem(
    initial_state=0,
    goal_state=5,
    actions=["RIGHT"],
    transition=move_right,
    cost=1
)

print(problem.initial_state)
print(problem.goal_state)
\`\`\`

Output:

\`\`\`
0
5
\`\`\`

The search problem is now represented as a Python object.

---

# 64. Why Separate Problem and Algorithm?

A good design separates:

\`\`\`
Problem Definition
\`\`\`

from:

\`\`\`
Search Algorithm
\`\`\`

For example:

\`\`\`
Problem:
Grid + Start + Goal + Obstacles

Algorithm:
BFS
\`\`\`

Later, the same problem can be solved using:

\`\`\`
DFS
Uniform-Cost Search
A*
\`\`\`

without redesigning the entire problem representation.

This is an important software-engineering principle.

---

# 65. Practical Exercise 1 — Grid Problem

Create this grid:

\`\`\`
S . . .
. X X .
. . . .
. . . G
\`\`\`

Define:

\`\`\`
Initial State
Goal State
State Representation
Actions
Constraints
Transition Model
Path Cost
\`\`\`

Do not implement BFS yet.

The objective is to formulate the problem correctly.

---

# 66. Practical Exercise 2 — Route Problem

Create the graph:

\`\`\`
A → B
A → C
B → D
C → D
D → E
\`\`\`

Represent it using Python.

\`\`\`
graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["D"],
    "D": ["E"],
    "E": []
}
\`\`\`

Define:

\`\`\`
Start = A
Goal = E
\`\`\`

Then identify all possible paths manually.

---

# 67. Practical Exercise 3 — Add Costs

Modify the graph to include costs.

\`\`\`
graph = {
    "A": [("B", 4), ("C", 2)],
    "B": [("D", 5)],
    "C": [("D", 1)],
    "D": [("E", 3)],
    "E": []
}
\`\`\`

Calculate:

\`\`\`
A → B → D → E
\`\`\`

and:

\`\`\`
A → C → D → E
\`\`\`

Compare their total costs.

---

# 68. Practical Exercise 4 — Robot Battery

A robot starts at:

\`\`\`
(0,0)
\`\`\`

Battery:

\`\`\`
50
\`\`\`

Each movement costs:

\`\`\`
10 battery units
\`\`\`

The robot must reach:

\`\`\`
(4,0)
\`\`\`

Ask:

\`\`\`
What should the state contain?

How many movements are required?

Will the robot have enough battery?

What happens if the destination is farther away?
\`\`\`

This exercise demonstrates why state representation can include resources.

---

# 69. Practical Exercise 5 — Maze Formulation

Use:

\`\`\`
S . . .
# # . #
. . . .
. # # G
\`\`\`

Identify:

\`\`\`
Start
Goal
States
Actions
Constraints
Valid transitions
Cost
\`\`\`

Then manually identify one valid path.

---

# 70. Practical Coding Challenge

Build a small Python program that represents a grid problem.

Requirements:

1. Store a grid.
2. Store a start position.
3. Store a goal position.
4. Define movement actions.
5. Check valid positions.
6. Generate neighboring states.
7. Check whether a state is the goal.

Do not implement BFS or DFS yet.

The objective is to build a clean problem representation that future search algorithms can reuse.

---

# 71. Complete Mini Example

\`\`\`
grid = [
    ["S", ".", "."],
    [".", "X", "."],
    [".", ".", "G"]
]

start = (0, 0)
goal = (2, 2)

moves = {
    "UP": (-1, 0),
    "DOWN": (1, 0),
    "LEFT": (0, -1),
    "RIGHT": (0, 1)
}


def is_valid(grid, state):
    row, col = state

    if row < 0 or row >= len(grid):
        return False

    if col < 0 or col >= len(grid[0]):
        return False

    if grid[row][col] == "X":
        return False

    return True


def get_neighbors(grid, state):
    neighbors = []

    row, col = state

    for action, (dr, dc) in moves.items():
        next_state = (
            row + dr,
            col + dc
        )

        if is_valid(grid, next_state):
            neighbors.append(
                (action, next_state)
            )

    return neighbors


def is_goal(state):
    return state == goal


print("Start:", start)
print("Goal:", goal)
print("Neighbors:", get_neighbors(grid, start))
print("Goal reached:", is_goal(start))
\`\`\`

Possible output:

\`\`\`
Start: (0, 0)
Goal: (2, 2)
Neighbors: [('DOWN', (1, 0)), ('RIGHT', (0, 1))]
Goal reached: False
\`\`\`

This is not yet a complete search algorithm.

It is the **problem representation layer** that search algorithms will use.

---

# 72. What Happens Next?

Now that the problem has been represented, the AI system needs a strategy for exploring the search space.

For example:

\`\`\`
Should we explore the closest states first?

Should we go deep into one path?

Should we consider path cost?

Should we use an estimate of distance to the goal?
\`\`\`

These questions lead to different search strategies.

The next lessons will answer them.

---

# 73. Search Strategy Progression

You will progressively learn:

\`\`\`
Problem Representation
        ↓
Breadth-First Search
        ↓
Depth-First Search
        ↓
Cost-Based Search
        ↓
Heuristics
        ↓
A* Search
\`\`\`

The algorithms will not be treated as isolated formulas.

You will understand:

\`\`\`
Why the algorithm exists
        ↓
How it works
        ↓
How it represents the frontier
        ↓
How it chooses states
        ↓
How to implement it
        ↓
When to use it
        ↓
What its limitations are
\`\`\`

---

# 74. Common Mistakes

## Mistake 1 — Starting With the Algorithm

Do not immediately write BFS or DFS.

First define the problem.

\`\`\`
Problem
→ Representation
→ Algorithm
\`\`\`

---

## Mistake 2 — Undefined Goal

Bad:

\`\`\`
Find a good route.
\`\`\`

Better:

\`\`\`
Find a route from A to G
with minimum total distance.
\`\`\`

---

## Mistake 3 — Ignoring Constraints

If a robot cannot move through a wall, the wall must be represented.

---

## Mistake 4 — Confusing State and Action

Example:

\`\`\`
State:
(2,3)

Action:
RIGHT

New State:
(2,4)
\`\`\`

A state describes the situation.

An action describes what the agent does.

---

## Mistake 5 — Ignoring Cost

Two solutions can both reach the goal while having different costs.

---

## Mistake 6 — Poor State Representation

If relevant information is missing, the search algorithm cannot reason correctly.

---

## Mistake 7 — Including Irrelevant State Information

Unnecessary information can make the state space much larger.

---

# 75. Problem Formulation Checklist

Before implementing a search algorithm, ask:

\`\`\`
1. What exactly is the problem?

2. What is the objective?

3. What is the initial state?

4. What information describes a state?

5. What actions are possible?

6. What happens after each action?

7. What states are invalid?

8. What is the goal?

9. How is the goal tested?

10. What is the cost?

11. How large could the search space become?

12. Which search strategy is appropriate?
\`\`\`

This checklist should become a standard habit when designing AI search systems.

---

# 76. Industry Perspective

In professional AI engineering, the first question is usually not:

\`\`\`
"Which algorithm should we use?"
\`\`\`

The first question is:

\`\`\`
"What exactly are we trying to solve?"
\`\`\`

Then engineers determine:

\`\`\`
What information is available?

What represents the current situation?

What actions can be taken?

What constraints exist?

What counts as success?

How should solutions be evaluated?
\`\`\`

Only after these questions are answered should the algorithm be selected.

This is why problem formulation is one of the most important skills in AI.

---

# 77. Connection to the Module Project

The module project is:

## AI Pathfinding & Search Solver

The project will eventually require you to define:

\`\`\`
Grid / Graph
Start
Goal
Actions
Transitions
Constraints
Path Cost
Search Strategy
\`\`\`

The work you are doing in this lesson becomes the foundation of that project.

You are not just learning theory.

You are building the conceptual and computational structure that the later search algorithms will use.

---

# 78. Key Takeaways

You should now understand:

- An AI problem is a problem where a system needs to determine an appropriate solution.
- Search-based AI problems involve exploring possible states and actions.
- The initial state describes where the problem begins.
- A state describes the current situation.
- Actions describe what the agent can do.
- A transition describes how an action changes the current state.
- A goal defines what the system wants to achieve.
- A goal test determines whether the goal has been reached.
- A solution is a sequence of valid actions leading to a goal.
- A path is a sequence of states.
- Path cost allows solutions to be compared.
- Constraints define invalid actions or states.
- The search space contains possible states that may be explored.
- State representation is critical to correct AI reasoning.
- Abstraction removes irrelevant information from a real-world problem.
- Too little information can produce incorrect decisions.
- Too much irrelevant information can increase search complexity.
- Problem formulation should happen before algorithm selection.
- Different search algorithms explore the same problem in different ways.
- Search is useful for pathfinding, planning, routing, puzzles, games, and many other problems.

The complete mental model is:

\`\`\`
Real-World Problem
        ↓
Define Objective
        ↓
Initial State
        ↓
State Representation
        ↓
Actions
        ↓
Transition Model
        ↓
Constraints
        ↓
Goal Test
        ↓
Path Cost
        ↓
Search Space
        ↓
Search Algorithm
        ↓
Solution
\`\`\`

---

# 79. Quick Self-Check

Before moving to Lesson 02, make sure you can answer these questions:

1. What is an AI problem?

2. How is a search problem different from a direct computational problem?

3. What is an initial state?

4. What is a state?

5. What is an action?

6. What is a transition model?

7. What is a goal state?

8. What is a goal test?

9. What is a solution?

10. What is a path?

11. What is path cost?

12. What is a constraint?

13. What is a search space?

14. Why is state representation important?

15. Why can two different solutions have different costs?

16. How can a maze be represented as a search problem?

17. How can a route-finding problem be represented?

18. Why should problem formulation happen before algorithm selection?

19. Why can a poor state representation produce poor AI decisions?

20. When might search not be the best AI approach?

If you can answer these questions and implement the basic grid representation, you are ready for the next lesson.

---

# 80. Final Mental Model

Whenever you see a new AI problem, think:

\`\`\`
WHAT?
What needs to be solved?

START?
Where does the system begin?

STATE?
What information describes the current situation?

ACTIONS?
What can the system do?

TRANSITION?
What happens after each action?

CONSTRAINTS?
What is not allowed?

GOAL?
What counts as success?

COST?
How do we compare solutions?

SEARCH?
How should the possible solutions be explored?
\`\`\`

The next lesson will go deeper into:

## Problem Formulation

You will learn how to systematically convert real-world requirements into formal AI search problems before implementing search algorithms.
`,

  practice: [
    {
      id: "aiml-module2-lesson1-practice-01",
      title: "Identify AI Problem Components",
      description: "Given real-world scenarios, identify the initial state, state representation, actions, transitions, goal, constraints, and cost.",
      type: "conceptual"
    },
    {
      id: "aiml-module2-lesson1-practice-02",
      title: "Build a Grid Representation",
      description: "Represent a maze or robot environment using a Python grid and identify valid and invalid states.",
      type: "coding"
    },
    {
      id: "aiml-module2-lesson1-practice-03",
      title: "Implement State Transitions",
      description: "Write Python functions that apply actions to states and generate valid neighboring states.",
      type: "coding"
    },
    {
      id: "aiml-module2-lesson1-practice-04",
      title: "Model a Graph",
      description: "Represent locations and connections using a Python graph structure.",
      type: "coding"
    },
    {
      id: "aiml-module2-lesson1-practice-05",
      title: "Calculate Path Cost",
      description: "Calculate total cost for different paths in a weighted graph and determine which solution is cheaper.",
      type: "mathematical"
    },
    {
      id: "aiml-module2-lesson1-practice-06",
      title: "Analyze State Representation",
      description: "Compare alternative state representations and determine whether important information is missing or unnecessary.",
      type: "analysis"
    },
    {
      id: "aiml-module2-lesson1-practice-07",
      title: "Real-World AI Problem",
      description: "Choose a practical problem and convert it into a formal state-space problem.",
      type: "design"
    }
  ],

  quickCheck: [
    {
      question: "What does an initial state represent?",
      options: [
        "The desired final result",
        "The starting situation of the problem",
        "The total search cost",
        "The search algorithm"
      ],
      answer: 1
    },
    {
      question: "What does a state represent?",
      options: [
        "The current relevant situation of the system",
        "Only the final answer",
        "Only the available actions",
        "The programming language"
      ],
      answer: 0
    },
    {
      question: "What describes what an agent can do?",
      options: [
        "Goal",
        "Action",
        "Cost",
        "State space"
      ],
      answer: 1
    },
    {
      question: "What does a transition describe?",
      options: [
        "How an action changes one state into another",
        "How data is stored in a database",
        "How a model is trained",
        "How an application is deployed"
      ],
      answer: 0
    },
    {
      question: "What does a goal state represent?",
      options: [
        "The starting point",
        "A desired final condition",
        "An invalid action",
        "The search frontier"
      ],
      answer: 1
    },
    {
      question: "What does a goal test determine?",
      options: [
        "Whether the current state satisfies the goal",
        "Whether Python is installed",
        "Whether a graph has edges",
        "Whether every action has equal cost"
      ],
      answer: 0
    },
    {
      question: "What is a solution in a search problem?",
      options: [
        "A sequence of valid actions that reaches a goal",
        "Only the initial state",
        "A random state",
        "The search algorithm itself"
      ],
      answer: 0
    },
    {
      question: "What is path cost?",
      options: [
        "A measure used to evaluate the cost of a solution path",
        "The number of variables in Python",
        "The size of a graph",
        "The number of goals"
      ],
      answer: 0
    },
    {
      question: "What is a constraint?",
      options: [
        "A restriction on valid actions or states",
        "The starting state",
        "The final solution",
        "A search algorithm"
      ],
      answer: 0
    },
    {
      question: "What is the search space?",
      options: [
        "The collection of possible states that may be explored",
        "Only the initial state",
        "Only the goal state",
        "The source code"
      ],
      answer: 0
    },
    {
      question: "Why is state representation important?",
      options: [
        "It determines what information the AI can reason about",
        "It automatically selects the programming language",
        "It eliminates all constraints",
        "It guarantees the shortest solution"
      ],
      answer: 0
    },
    {
      question: "What can happen if a state contains too little relevant information?",
      options: [
        "The system may make incorrect decisions",
        "The search space always becomes smaller and correct",
        "The goal becomes automatic",
        "The algorithm no longer needs actions"
      ],
      answer: 0
    },
    {
      question: "Why can unnecessary state information be a problem?",
      options: [
        "It can unnecessarily increase the search space and complexity",
        "It always makes the goal unreachable",
        "It removes all actions",
        "It automatically changes BFS into DFS"
      ],
      answer: 0
    },
    {
      question: "If every movement in a grid costs 1, what does minimizing path cost mean?",
      options: [
        "Minimizing the number of movements",
        "Maximizing the number of states",
        "Ignoring the goal",
        "Removing constraints"
      ],
      answer: 0
    },
    {
      question: "What should generally happen before choosing BFS, DFS, or A*?",
      options: [
        "The problem should be clearly defined and represented",
        "The final answer should be guessed",
        "All constraints should be removed",
        "The goal should be ignored"
      ],
      answer: 0
    }
  ],

  completion: {
    previous: "/lesson/aiml/module1/about",
    next: "/lesson/aiml/module2/lesson2",
    backToModule: "/lesson/aiml/module2/about"
  }
};