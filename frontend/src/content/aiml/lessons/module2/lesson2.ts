export const lesson2 = {
  id: "aiml-module2-lesson2",
  lessonNumber: 2,
  title: "Problem Formulation",
  moduleTitle: "Problem Solving & Search",
  courseId: "aiml",
  moduleId: "module2",

  navigation: {
    courseId: "aiml",
    moduleId: "module2",
    currentLesson: 2,
    totalLessons: 12,

    previous: {
      label: "Lesson 01",
      href: "/lesson/aiml/module2/lesson1"
    },

    next: {
      label: "Lesson 03",
      href: "/lesson/aiml/module2/lesson3"
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
# Lesson 02 — Problem Formulation

## What You Will Learn

In the previous lesson, you learned what an AI problem is and why AI systems often need to search through possible solutions.

In this lesson, you will learn how to formally describe an AI problem so that a computer can actually solve it.

You will learn:

- What problem formulation means
- Why problem formulation is important
- How to identify the initial state
- How to define actions
- How actions create transitions
- How to define the goal state
- What a solution is
- What path cost means
- How constraints affect a problem
- How to represent a problem mathematically
- How to represent problems using Python
- How to formulate navigation problems
- How to formulate maze problems
- How to formulate puzzle problems
- How to formulate robot problems
- How to formulate planning problems
- How poor problem formulation can lead to poor solutions
- How to convert a real-world problem into a computational search problem

The central idea of this lesson is:

\`\`\`
Real-World Problem
        ↓
Identify Objective
        ↓
Define Initial State
        ↓
Define Actions
        ↓
Define Transitions
        ↓
Define Goal
        ↓
Define Constraints
        ↓
Define Cost
        ↓
Formal AI Problem
\`\`\`

---

# 1. What Is Problem Formulation?

Problem formulation is the process of converting a real-world problem into a precise representation that an AI system can solve.

A human may describe a problem like:

\`\`\`
"Find the best route from my home to college."
\`\`\`

This description is understandable to a human.

But a computer needs more precise information.

It needs to know:

- Where is the starting location?
- What locations can be reached?
- What actions are possible?
- Which roads connect locations?
- What is the destination?
- What does "best" mean?
- Is the goal shortest distance?
- Is the goal lowest travel time?
- Are some roads unavailable?
- Is there a cost associated with each road?

Therefore, we transform the natural-language problem into a formal problem.

---

# 2. Why Problem Formulation Matters

Search algorithms do not understand vague human goals directly.

For example:

\`\`\`
"Find a good route."
\`\`\`

is ambiguous.

What does "good" mean?

It could mean:

\`\`\`
Shortest distance
Fastest route
Lowest cost
Least traffic
Safest route
Fewest turns
\`\`\`

Different objectives produce different solutions.

Therefore:

> A search algorithm can only solve the problem that we formulate.

If the formulation is wrong, even a perfectly implemented algorithm can produce the wrong result.

---

# 3. The Five Core Components

A classical search problem can be described using:

\`\`\`
Initial State
Actions
Transition Model
Goal Test
Path Cost
\`\`\`

These components provide the basic structure required for many search problems.

A useful representation is:

\`\`\`
Problem = 
(
Initial State,
Actions,
Transition Model,
Goal Test,
Path Cost
)
\`\`\`

Each component has a specific purpose.

---

# 4. Initial State

The initial state describes where the system starts.

Examples:

### Navigation

\`\`\`
Start = "Mumbai"
\`\`\`

### Maze

\`\`\`
Start = (0, 0)
\`\`\`

### Puzzle

\`\`\`
Initial board configuration
\`\`\`

### Robot

\`\`\`
Robot position = (2, 3)
\`\`\`

### Game

\`\`\`
Current board configuration
\`\`\`

The initial state is the starting point of the search.

---

# 5. State

A state describes the relevant situation of the problem at a particular moment.

For example, in a grid:

\`\`\`
(2, 4)
\`\`\`

can represent the position of a robot.

A state may contain more than one value.

For example:

\`\`\`
(robot_position, battery_level)
\`\`\`

could be:

\`\`\`
((2, 4), 75)
\`\`\`

This means:

\`\`\`
Robot position = (2, 4)
Battery level = 75%
\`\`\`

The state representation must contain the information needed to make future decisions.

---

# 6. Choosing the Right State Representation

State representation is one of the most important parts of problem formulation.

Suppose a robot needs to move through a warehouse.

A poor representation might store only:

\`\`\`
robot_position
\`\`\`

But suppose the robot also has limited battery.

Then the battery level may affect whether it can reach the destination.

A better representation could be:

\`\`\`
state = (
    robot_position,
    battery_level
)
\`\`\`

For example:

\`\`\`
state = ((4, 2), 60)
\`\`\`

This means:

\`\`\`
Position = (4, 2)
Battery = 60%
\`\`\`

The important principle is:

> A state should contain enough information to determine what actions are possible and how the system can progress.

---

# 7. Actions

Actions describe what the system is allowed to do from a state.

For a robot moving on a grid:

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
Move Tile
\`\`\`

For a game:

\`\`\`
Move Piece
\`\`\`

Actions define the possible choices available to the search algorithm.

---

# 8. Action Availability

Not every action is always possible.

Suppose a robot is at:

\`\`\`
(0, 0)
\`\`\`

and the grid boundary does not allow movement upward or left.

Then:

\`\`\`
UP
LEFT
\`\`\`

may be invalid.

The available actions could be:

\`\`\`
DOWN
RIGHT
\`\`\`

Therefore, the action set depends on the current state.

Conceptually:

\`\`\`
State
  ↓
Available Actions
  ↓
Choose Action
\`\`\`

---

# 9. Transition Model

The transition model describes what happens when an action is performed.

Suppose the robot is at:

\`\`\`
(2, 3)
\`\`\`

and performs:

\`\`\`
RIGHT
\`\`\`

The next state could be:

\`\`\`
(2, 4)
\`\`\`

Therefore:

\`\`\`
Transition((2, 3), RIGHT) = (2, 4)
\`\`\`

The transition model answers:

> If I perform this action from this state, what state will I reach?

---

# 10. State Transition

A transition can be represented as:

\`\`\`
Current State
      +
    Action
      ↓
 Next State
\`\`\`

Example:

\`\`\`
Current State:
(2, 3)

Action:
RIGHT

Next State:
(2, 4)
\`\`\`

Another transition:

\`\`\`
Current State:
(2, 4)

Action:
DOWN

Next State:
(3, 4)
\`\`\`

Therefore, a sequence of actions produces a sequence of states.

---

# 11. State Transition Example in Python

A simple grid transition can be represented using Python.

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

This is a simple transition model.

---

# 12. Goal State

The goal state represents the desired final condition.

For example:

### Navigation

\`\`\`
Start = Mumbai
Goal = Pune
\`\`\`

### Maze

\`\`\`
Start = (0, 0)
Goal = (5, 5)
\`\`\`

### Puzzle

\`\`\`
Goal = solved configuration
\`\`\`

### Robot

\`\`\`
Goal = target location
\`\`\`

The goal defines what the search algorithm is trying to achieve.

---

# 13. Goal Test

The goal test checks whether the current state satisfies the goal.

For example:

\`\`\`
current_state == goal_state
\`\`\`

Python:

\`\`\`
goal = (5, 5)
current = (5, 5)

if current == goal:
    print("Goal reached")
\`\`\`

Output:

\`\`\`
Goal reached
\`\`\`

For more complex problems, the goal may be a condition rather than one exact state.

---

# 14. Goal Test as a Function

A reusable goal test can be written as:

\`\`\`
def is_goal(state, goal):
    return state == goal


state = (5, 5)
goal = (5, 5)

print(is_goal(state, goal))
\`\`\`

Output:

\`\`\`
True
\`\`\`

This function can later be used by search algorithms.

---

# 15. Solution

A solution is a sequence of actions that transforms the initial state into a goal state.

Suppose:

\`\`\`
Start = A
Goal = D
\`\`\`

and:

\`\`\`
A → B
B → C
C → D
\`\`\`

The solution is:

\`\`\`
A → B → C → D
\`\`\`

The corresponding action sequence could be:

\`\`\`
[RIGHT, RIGHT, DOWN]
\`\`\`

The search algorithm's job is often to discover such a sequence.

---

# 16. Path

A path is the sequence of states visited while moving from the initial state toward the goal.

Example:

\`\`\`
A → B → C → D
\`\`\`

The path contains:

\`\`\`
A
B
C
D
\`\`\`

The action sequence may be:

\`\`\`
Move1
Move2
Move3
\`\`\`

It is useful to distinguish:

\`\`\`
Path = sequence of states

Actions = sequence of operations
\`\`\`

---

# 17. Path Cost

Sometimes there are many possible solutions.

The system then needs a way to compare them.

Path cost provides a measure of how expensive a solution is.

For example:

\`\`\`
Route A:
10 km

Route B:
15 km
\`\`\`

If the objective is minimum distance:

\`\`\`
Route A
\`\`\`

has lower cost.

Cost does not always mean money.

It can represent:

- Distance
- Time
- Fuel
- Energy
- Risk
- Number of actions
- Computational cost

---

# 18. Step Cost

The cost of one action is called its step cost.

Suppose:

\`\`\`
A → B = 4
B → C = 3
C → D = 5
\`\`\`

Then:

\`\`\`
Total Cost
=
4 + 3 + 5
=
12
\`\`\`

The total path cost is:

\`\`\`
12
\`\`\`

Mathematically:

\`\`\`
g(path) = Σ step_cost
\`\`\`

where the sum contains the cost of every transition in the path.

---

# 19. Equal-Cost vs Weighted Problems

Consider this graph:

\`\`\`
A ---- B ---- D
 \     |
  \    |
   C --+
\`\`\`

If every edge has the same cost, the search may only need to count the number of steps.

But if edges have different costs:

\`\`\`
A → B = 10
A → C = 2
C → D = 2
B → D = 1
\`\`\`

then the number of steps alone is not enough.

Paths:

\`\`\`
A → B → D
Cost = 10 + 1 = 11
\`\`\`

and:

\`\`\`
A → C → D
Cost = 2 + 2 = 4
\`\`\`

The second path has fewer total cost even though both paths contain two actions.

This distinction becomes important in cost-based search.

---

# 20. Constraints

Real-world problems often contain restrictions.

A constraint is a condition that limits what the system can do.

Examples:

\`\`\`
Road is closed
Battery is low
Obstacle exists
Budget is limited
Time is limited
Resource is unavailable
\`\`\`

Suppose a robot cannot move through an obstacle.

Then the corresponding transition is invalid.

The search algorithm should not consider that transition as a valid solution path.

---

# 21. Example of a Grid Constraint

Consider:

\`\`\`
S . . .
. X . .
. . . G
\`\`\`

where:

\`\`\`
S = Start
G = Goal
X = Obstacle
. = Free cell
\`\`\`

If the robot reaches a cell next to X, it cannot move into X.

Therefore:

\`\`\`
Obstacle = Constraint
\`\`\`

The search space becomes smaller because invalid states are excluded.

---

# 22. Formal Problem Definition

A search problem can be represented as:

\`\`\`
P = (S, A, T, G, C)
\`\`\`

where:

\`\`\`
S = Set of possible states

A = Set of possible actions

T = Transition model

G = Goal condition

C = Cost function
\`\`\`

Another common formulation uses:

\`\`\`
Initial State
Actions
Transition Model
Goal Test
Path Cost
\`\`\`

Both descriptions express the same fundamental idea.

---

# 23. Example — Route Finding

Suppose a delivery vehicle must travel from:

\`\`\`
Warehouse A
\`\`\`

to:

\`\`\`
Customer D
\`\`\`

Possible locations:

\`\`\`
A
B
C
D
E
\`\`\`

Road connections:

\`\`\`
A → B
A → C
B → D
C → E
E → D
\`\`\`

Now formulate the problem.

### Initial State

\`\`\`
A
\`\`\`

### Goal

\`\`\`
D
\`\`\`

### Actions

\`\`\`
Travel along an available road
\`\`\`

### Transition

\`\`\`
Current location + selected road
→ next location
\`\`\`

### Solution

One possible solution:

\`\`\`
A → B → D
\`\`\`

Another:

\`\`\`
A → C → E → D
\`\`\`

The search algorithm can compare them.

---

# 24. Python Representation of a Route Problem

A graph can be represented using a dictionary.

\`\`\`
graph = {
    "A": ["B", "C"],
    "B": ["D"],
    "C": ["E"],
    "D": [],
    "E": ["D"]
}
\`\`\`

Initial state:

\`\`\`
start = "A"
\`\`\`

Goal:

\`\`\`
goal = "D"
\`\`\`

A search algorithm can use this representation to explore possible routes.

---

# 25. Adding Costs

Suppose the roads have different distances.

A weighted graph can be represented as:

\`\`\`
graph = {
    "A": [("B", 4), ("C", 2)],
    "B": [("D", 5)],
    "C": [("E", 3)],
    "E": [("D", 2)],
    "D": []
}
\`\`\`

For example:

\`\`\`
A → B = 4
A → C = 2
B → D = 5
C → E = 3
E → D = 2
\`\`\`

Now the problem contains path costs.

This representation will become important when you learn cost-based search.

---

# 26. Example — Maze Problem

Consider a maze:

\`\`\`
S . . #
# . # .
. . . .
# # . G
\`\`\`

Define:

### Initial State

\`\`\`
S
\`\`\`

### Goal State

\`\`\`
G
\`\`\`

### Actions

\`\`\`
UP
DOWN
LEFT
RIGHT
\`\`\`

### Constraints

\`\`\`
Do not move outside the grid.
Do not move into walls.
\`\`\`

### Cost

For a simple maze:

\`\`\`
Each move = 1
\`\`\`

The AI problem is now clearly defined.

A search algorithm can explore the possible paths.

---

# 27. Example — Robot Navigation

Suppose a robot operates inside a warehouse.

The robot needs to move from:

\`\`\`
(0, 0)
\`\`\`

to:

\`\`\`
(5, 5)
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
Each movement = 1
\`\`\`

Problem formulation:

\`\`\`
Initial State = (0, 0)

Actions = UP, DOWN, LEFT, RIGHT

Transition = Valid movement to adjacent cell

Goal = (5, 5)

Cost = Number of movements
\`\`\`

This is a classical search problem.

---

# 28. Example — 8-Puzzle

Consider the 8-puzzle.

The board contains:

\`\`\`
1 2 3
4 5 6
7 8 _
\`\`\`

where:

\`\`\`
_ = empty space
\`\`\`

The objective is to reach a target configuration.

For example:

\`\`\`
1 2 3
4 5 6
7 8 _
\`\`\`

### State

The complete board arrangement.

### Actions

Move a neighboring tile into the empty position.

### Transition

The board changes after a valid tile movement.

### Goal

Reach the target board configuration.

### Cost

Usually:

\`\`\`
Each tile movement = 1
\`\`\`

This converts a puzzle into a search problem.

---

# 29. Example — Robot with Battery

Now consider a more realistic problem.

A robot must reach a destination but has limited battery.

State:

\`\`\`
(position, battery)
\`\`\`

Example:

\`\`\`
((2, 3), 70)
\`\`\`

Possible actions:

\`\`\`
UP
DOWN
LEFT
RIGHT
CHARGE
\`\`\`

Suppose every movement consumes 10 units.

Then:

\`\`\`
((2, 3), 70)
      ↓ RIGHT
((2, 4), 60)
\`\`\`

The battery becomes part of the state.

This demonstrates why state representation matters.

---

# 30. State Representation Can Change the Problem

Suppose we ignore battery.

Then the state is:

\`\`\`
position
\`\`\`

The search algorithm might produce a route that is physically valid but impossible for the robot to complete.

If battery is included:

\`\`\`
(position, battery)
\`\`\`

the system can reason about battery constraints.

Therefore:

> A state representation determines what information the search algorithm can reason about.

---

# 31. Example — Course Planning

Consider a student who needs to complete several courses.

Suppose:

\`\`\`
Programming
Data Structures
Database Systems
Machine Learning
\`\`\`

Some courses have prerequisites.

For example:

\`\`\`
Programming
    ↓
Data Structures
    ↓
Machine Learning
\`\`\`

The problem is to find a valid order.

### State

Courses already completed.

### Action

Complete one available course.

### Transition

Add the selected course to completed courses.

### Goal

All required courses are completed.

### Constraint

A course cannot be completed before its prerequisites.

This is another search problem.

---

# 32. Example — Delivery Planning

A delivery vehicle must visit several locations.

The system needs to determine a suitable order.

Possible state:

\`\`\`
(current_location, visited_locations)
\`\`\`

Actions:

\`\`\`
Travel to an unvisited location
\`\`\`

Goal:

\`\`\`
All required locations visited
\`\`\`

Cost:

\`\`\`
Total travel distance
\`\`\`

Constraints:

\`\`\`
Vehicle capacity
Road restrictions
Delivery deadlines
\`\`\`

This example shows that real-world problems can contain multiple constraints and objectives.

---

# 33. Problem Formulation Is an Abstraction

A real-world environment can contain enormous amounts of information.

An AI system cannot always represent everything.

Therefore, we create an abstraction.

For example, a road network may contain:

\`\`\`
Traffic lights
Weather
Buildings
Road signs
Pedestrians
Vehicles
Road conditions
\`\`\`

But a simple route-finding problem might represent only:

\`\`\`
Locations
Roads
Travel costs
Start
Goal
\`\`\`

The irrelevant information is removed.

This makes the problem computationally manageable.

---

# 34. Choosing Relevant Information

A good problem formulation includes information that affects the solution.

Suppose you are finding the shortest route between cities.

Useful information:

\`\`\`
Cities
Road connections
Distances
Start
Goal
\`\`\`

Usually unnecessary for a basic shortest-path problem:

\`\`\`
Building colors
Street names
Weather
Population
\`\`\`

unless those factors affect the objective.

This leads to an important principle:

> Include information that affects decisions, and avoid unnecessary state information when it does not contribute to solving the problem.

---

# 35. Overly Small State Representation

If the state contains too little information, the AI system may make incorrect decisions.

Example:

\`\`\`
state = robot_position
\`\`\`

But if battery matters, this representation is incomplete.

The system may plan:

\`\`\`
Start → A → B → C → Goal
\`\`\`

without realizing the robot runs out of energy at B.

---

# 36. Overly Large State Representation

The opposite problem can also occur.

Suppose a state contains:

\`\`\`
position
battery
temperature
screen_brightness
speaker_volume
wall_color
time
weather
user_name
\`\`\`

If only position and battery affect movement, storing everything increases complexity unnecessarily.

The search space may become much larger.

Therefore, state representation should be:

\`\`\`
Complete enough
+
Not unnecessarily complex
\`\`\`

---

# 37. Problem Formulation and Search Space

Once a problem is formulated, it defines the search space.

For example:

\`\`\`
Initial State
      ↓
Possible Actions
      ↓
New States
      ↓
More Actions
      ↓
More States
      ↓
...
      ↓
Goal
\`\`\`

The collection of reachable states forms the search space.

Search algorithms operate over this space.

---

# 38. Search Tree Created from a Problem

Suppose:

\`\`\`
Start = A
\`\`\`

Actions can lead to:

\`\`\`
A → B
A → C
\`\`\`

From B:

\`\`\`
B → D
B → E
\`\`\`

From C:

\`\`\`
C → F
C → G
\`\`\`

The search tree becomes:

\`\`\`
             A
           /   \
          B     C
        /  \   /  \
       D    E F    G
\`\`\`

The search algorithm explores this structure.

---

# 39. Problem Formulation and Algorithm Choice

Problem formulation influences which algorithm is appropriate.

Suppose:

\`\`\`
Every action has equal cost
\`\`\`

BFS may be appropriate for finding the shortest number-of-step path.

If:

\`\`\`
Actions have different costs
\`\`\`

cost-based search becomes important.

If:

\`\`\`
A useful estimate of remaining distance is available
\`\`\`

heuristic search may be useful.

Therefore:

\`\`\`
Problem Formulation
        ↓
Problem Characteristics
        ↓
Search Strategy
\`\`\`

---

# 40. Python Problem Representation

We can represent a simple search problem using a Python class.

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

Now the problem itself is represented as an object.

---

# 41. Creating a Simple Problem

Example:

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

This is a simplified example.

Later, search algorithms can operate on the problem representation.

---

# 42. A More Practical Grid Representation

We can represent a grid problem using:

\`\`\`
grid = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 1, 0, 0]
]
\`\`\`

where:

\`\`\`
0 = free
1 = obstacle
\`\`\`

Start:

\`\`\`
start = (0, 0)
\`\`\`

Goal:

\`\`\`
goal = (3, 3)
\`\`\`

Actions:

\`\`\`
UP
DOWN
LEFT
RIGHT
\`\`\`

Now the problem is ready for a search algorithm.

---

# 43. Valid Action Checking

A transition should check whether an action is valid.

\`\`\`
def is_valid(grid, state):
    rows = len(grid)
    cols = len(grid[0])

    row, col = state

    if row < 0 or row >= rows:
        return False

    if col < 0 or col >= cols:
        return False

    if grid[row][col] == 1:
        return False

    return True
\`\`\`

This function enforces the constraints of the problem.

---

# 44. Generating Next States

We can define possible movements:

\`\`\`
MOVES = {
    "UP": (-1, 0),
    "DOWN": (1, 0),
    "LEFT": (0, -1),
    "RIGHT": (0, 1)
}
\`\`\`

Then:

\`\`\`
def get_neighbors(grid, state):
    neighbors = []

    row, col = state

    for action, (dr, dc) in MOVES.items():
        next_state = (row + dr, col + dc)

        if is_valid(grid, next_state):
            neighbors.append((action, next_state))

    return neighbors
\`\`\`

This function gives the search algorithm the possible next states.

---

# 45. Testing the Problem Formulation

Before implementing BFS, DFS, or A*, test the problem representation itself.

Example:

\`\`\`
grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

state = (0, 0)

print(get_neighbors(grid, state))
\`\`\`

Possible output:

\`\`\`
[
    ("DOWN", (1, 0)),
    ("RIGHT", (0, 1))
]
\`\`\`

The blocked and out-of-bound movements should not appear.

This is important.

If the problem representation is wrong, every search algorithm built on it will also behave incorrectly.

---

# 46. Problem Formulation Example — Network Routing

Suppose a computer needs to reach a server through a network.

Network:

\`\`\`
Computer
   ↓
Router A
   ↓
Router B
   ↓
Server
\`\`\`

### Initial State

\`\`\`
Computer
\`\`\`

### Goal

\`\`\`
Server
\`\`\`

### Actions

\`\`\`
Forward packet through a connected router
\`\`\`

### Transition

\`\`\`
Current network node
→ connected network node
\`\`\`

### Cost

Could represent:

\`\`\`
Latency
Bandwidth cost
Hop count
\`\`\`

### Constraints

Could include:

\`\`\`
Unavailable link
Network failure
Capacity limit
\`\`\`

The same search principles apply.

---

# 47. Problem Formulation Example — Game

Consider a simple board game.

### State

The current board configuration.

### Initial State

The starting board.

### Actions

Legal moves.

### Transition

Board after a move.

### Goal

Winning configuration.

### Cost

Could represent:

\`\`\`
Number of moves
\`\`\`

or another objective.

A search algorithm can explore possible game states.

This is why state-space search is fundamental in classical AI.

---

# 48. Problem Formulation Example — Robot Vacuum

Suppose a robot vacuum must clean all rooms.

### State

\`\`\`
(current_position, cleaned_rooms)
\`\`\`

Example:

\`\`\`
("Kitchen", {"Living Room", "Bedroom"})
\`\`\`

### Actions

\`\`\`
Move to connected room
Clean current room
\`\`\`

### Goal

\`\`\`
All required rooms are clean
\`\`\`

### Cost

Could be:

\`\`\`
Total movement distance
+
Cleaning cost
\`\`\`

### Constraints

\`\`\`
Cannot move through blocked areas
Battery is limited
\`\`\`

This is a more complex state representation.

---

# 49. Problem Formulation Example — Delivery Scheduling

Suppose a delivery system has:

\`\`\`
Warehouse
Customer A
Customer B
Customer C
\`\`\`

The system needs to determine an order for deliveries.

State could contain:

\`\`\`
(current_location, delivered_customers)
\`\`\`

Action:

\`\`\`
Travel to an undelivered customer
\`\`\`

Goal:

\`\`\`
All customers delivered
\`\`\`

Cost:

\`\`\`
Total travel distance
\`\`\`

Constraints:

\`\`\`
Delivery deadline
Vehicle capacity
Road restrictions
\`\`\`

This demonstrates how real-world problems become formal AI problems.

---

# 50. From Natural Language to Formal Problem

Suppose the original requirement is:

\`\`\`
"Find the shortest path for a robot to reach the charging station
without hitting obstacles."
\`\`\`

Convert it step by step.

### Step 1 — Objective

\`\`\`
Reach the charging station.
\`\`\`

### Step 2 — Initial State

\`\`\`
Robot's current position.
\`\`\`

### Step 3 — Actions

\`\`\`
UP
DOWN
LEFT
RIGHT
\`\`\`

### Step 4 — Transition

\`\`\`
Move to a valid adjacent cell.
\`\`\`

### Step 5 — Goal

\`\`\`
Robot position == charging station.
\`\`\`

### Step 6 — Constraints

\`\`\`
Do not leave the grid.
Do not enter obstacles.
\`\`\`

### Step 7 — Cost

\`\`\`
Each movement = 1.
\`\`\`

Now the natural-language requirement has become a formal search problem.

---

# 51. A General Problem-Formulation Template

Whenever you encounter a new AI search problem, write:

\`\`\`
Problem:
What needs to be solved?

Initial State:
Where does the system start?

State:
What information describes a situation?

Actions:
What can the system do?

Transition Model:
What happens after an action?

Goal:
What counts as success?

Constraints:
What actions or states are forbidden?

Path Cost:
How should solutions be compared?
\`\`\`

This template is extremely useful when designing AI systems.

---

# 52. Worked Example

## Problem

A robot must move from the top-left corner of a grid to the bottom-right corner while avoiding obstacles.

### Initial State

\`\`\`
(0, 0)
\`\`\`

### State

\`\`\`
(row, column)
\`\`\`

### Actions

\`\`\`
UP
DOWN
LEFT
RIGHT
\`\`\`

### Transition

Move to a valid neighboring cell.

### Goal

\`\`\`
(rows - 1, columns - 1)
\`\`\`

### Constraints

\`\`\`
Cannot leave the grid.
Cannot enter obstacles.
\`\`\`

### Cost

\`\`\`
Each movement = 1
\`\`\`

Now BFS can be used to find a shortest path in terms of number of moves.

Later, if movements have different costs, a different search strategy may be needed.

---

# 53. Why We Do Not Start with BFS Immediately

It may be tempting to write BFS as soon as you see a pathfinding problem.

But professional AI development follows:

\`\`\`
Understand Problem
      ↓
Formulate Problem
      ↓
Represent Problem
      ↓
Choose Algorithm
      ↓
Implement Algorithm
      ↓
Evaluate Result
\`\`\`

If you skip formulation, you may solve the wrong problem efficiently.

That is worse than solving the correct problem carefully.

---

# 54. Common Problem-Formulation Mistakes

## Mistake 1 — Undefined Goal

Bad:

\`\`\`
Find a good route.
\`\`\`

Better:

\`\`\`
Find the route with minimum travel distance.
\`\`\`

---

## Mistake 2 — Missing Constraints

Bad:

\`\`\`
Robot can move anywhere.
\`\`\`

Better:

\`\`\`
Robot cannot move outside the grid
or through obstacles.
\`\`\`

---

## Mistake 3 — Incomplete State

Bad:

\`\`\`
state = position
\`\`\`

when battery affects movement.

Better:

\`\`\`
state = (position, battery)
\`\`\`

---

## Mistake 4 — Incorrect Cost

If the objective is fastest travel time, using distance as the cost may produce the wrong route.

---

## Mistake 5 — Too Much State Information

Including irrelevant information can make the search space unnecessarily large.

---

## Mistake 6 — Invalid Actions

The system should not allow actions that violate the problem constraints.

---

# 55. Problem Formulation and Mathematical Thinking

Problem formulation transforms an informal problem into mathematical objects.

For example:

\`\`\`
States → S
Actions → A
Transitions → T
Goal → G
Cost → C
\`\`\`

Then the search algorithm operates on these objects.

This is one of the important transitions from:

\`\`\`
Human Problem
\`\`\`

to:

\`\`\`
Computational Problem
\`\`\`

---

# 56. Problem Formulation and Software Engineering

Problem formulation is not only an AI concept.

It is closely related to software engineering.

Before implementing a system, engineers define:

- Requirements
- Inputs
- Outputs
- Constraints
- Data structures
- Operations
- Success conditions

AI problem formulation adds an important search-oriented structure:

\`\`\`
State
Action
Transition
Goal
Cost
\`\`\`

This makes the problem suitable for search algorithms.

---

# 57. Practical Exercise — Formulate a Maze

Create a maze problem.

Use:

\`\`\`
S = Start
G = Goal
# = Wall
. = Free
\`\`\`

Example:

\`\`\`
S . . #
. # . #
. . . .
# . # G
\`\`\`

Define:

- Initial state
- State representation
- Actions
- Transition model
- Goal test
- Constraints
- Path cost

Do not implement BFS yet.

First make sure the problem itself is correctly formulated.

---

# 58. Practical Exercise — Formulate a Delivery Problem

A delivery vehicle starts at:

\`\`\`
Warehouse
\`\`\`

and must deliver packages to:

\`\`\`
A
B
C
\`\`\`

Define:

- State
- Initial state
- Actions
- Transition
- Goal
- Cost
- Constraints

Then answer:

What information must be stored in the state to know which deliveries remain?

---

# 59. Practical Exercise — Formulate a Robot Problem

A robot starts at:

\`\`\`
(0, 0)
\`\`\`

and must reach:

\`\`\`
(4, 4)
\`\`\`

The robot has:

\`\`\`
Battery = 50
\`\`\`

Each movement consumes:

\`\`\`
10 battery units
\`\`\`

Formulate:

\`\`\`
State
Actions
Transition
Goal
Constraints
Cost
\`\`\`

Then determine whether the robot can reach the goal if no charging station exists.

This introduces reasoning about state and constraints.

---

# 60. Practical Python Exercise

Create a reusable problem representation.

\`\`\`
class GridProblem:
    def __init__(self, grid, start, goal):
        self.grid = grid
        self.start = start
        self.goal = goal

    def is_goal(self, state):
        return state == self.goal

    def is_valid(self, state):
        row, col = state

        if row < 0 or row >= len(self.grid):
            return False

        if col < 0 or col >= len(self.grid[0]):
            return False

        return self.grid[row][col] == 0
\`\`\`

Test it with:

\`\`\`
grid = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0]
]

problem = GridProblem(
    grid,
    start=(0, 0),
    goal=(2, 2)
)

print(problem.is_valid((1, 1)))
print(problem.is_goal((2, 2)))
\`\`\`

Expected output:

\`\`\`
False
True
\`\`\`

The center cell is blocked, so it is not a valid state.

---

# 61. Mini Experiment — Compare Two Formulations

Consider a robot navigation problem.

### Formulation A

\`\`\`
state = position
\`\`\`

### Formulation B

\`\`\`
state = (position, battery)
\`\`\`

Ask:

1. Which formulation contains more information?
2. Which formulation allows the system to reason about battery?
3. Which formulation creates a larger state space?
4. Which formulation is appropriate when battery constraints matter?

This experiment demonstrates the trade-off involved in state representation.

---

# 62. Practical Design Exercise

Take one real-world problem.

Choose from:

- Route planning
- Maze solving
- Robot navigation
- Network routing
- Puzzle solving
- Course planning
- Delivery planning
- Game movement
- Warehouse navigation

Write:

\`\`\`
1. Problem
2. Objective
3. Initial State
4. State Representation
5. Actions
6. Transition Model
7. Goal Test
8. Constraints
9. Path Cost
\`\`\`

Then explain why each component is necessary.

---

# 63. From Formulation to Search

Once the problem has been formulated, the next question is:

\`\`\`
How should we search the solution space?
\`\`\`

Different problems may require different strategies.

For example:

\`\`\`
Unweighted shortest path
        ↓
BFS

Deep exploration
        ↓
DFS

Different action costs
        ↓
Cost-Based Search

Useful distance estimate
        ↓
Heuristic Search

Cost + heuristic
        ↓
A*
\`\`\`

These algorithms will be introduced in the upcoming lessons.

---

# 64. Industry Perspective

Professional AI systems rarely begin with:

\`\`\`
"Let's use algorithm X."
\`\`\`

They begin with:

\`\`\`
"What exactly are we trying to solve?"
\`\`\`

Then:

\`\`\`
What information describes the problem?
What actions are available?
What constraints exist?
What counts as success?
How should solutions be evaluated?
\`\`\`

Only after answering these questions should the algorithm be selected.

This is a fundamental AI engineering skill.

---

# 65. Key Takeaways

You should now understand that:

- Problem formulation converts a real-world problem into a computational problem.
- A search problem requires a clearly defined objective.
- The initial state defines where the system starts.
- A state represents the relevant situation at a point in time.
- Actions describe what the system can do.
- The transition model describes how actions change states.
- The goal defines what counts as success.
- A goal test determines whether a state satisfies the goal.
- A solution is a sequence of actions leading to a goal.
- A path is a sequence of states.
- Path cost allows different solutions to be compared.
- Constraints limit valid actions or states.
- State representation must contain enough relevant information.
- Too little state information can produce incorrect solutions.
- Too much state information can increase search complexity.
- Problem formulation influences algorithm selection.
- Good AI systems solve clearly defined problems rather than vague objectives.

The core mental model is:

\`\`\`
Initial State
     ↓
Actions
     ↓
Transitions
     ↓
New States
     ↓
Goal Test
     ↓
Solution
     ↓
Cost Evaluation
\`\`\`

---

# 66. Quick Self-Test

Before moving to Lesson 03, make sure you can answer:

1. What is problem formulation?

2. Why is problem formulation important?

3. What is an initial state?

4. What is a state?

5. What is an action?

6. What is a transition model?

7. What is a goal test?

8. What is a solution?

9. What is path cost?

10. What is a constraint?

11. Why is state representation important?

12. What happens if the state contains too little information?

13. What happens if the state contains unnecessary information?

14. How can a maze be formulated as a search problem?

15. How can a route-finding problem be formulated?

16. Why does problem formulation influence search algorithm selection?

---

# 67. Final Mental Model

When you encounter any new AI search problem, think in this order:

\`\`\`
WHAT?
What problem needs to be solved?

WHERE?
Where does the system start?

STATE?
What information describes the current situation?

ACTIONS?
What can the system do?

TRANSITION?
What happens after each action?

GOAL?
What counts as success?

CONSTRAINTS?
What is forbidden?

COST?
How do we compare solutions?

SEARCH?
Which algorithm should explore the possible solutions?
\`\`\`

Once these questions are answered, the problem is ready for systematic search.

The next lesson will focus on the fundamental building blocks in greater depth:

## States, Actions & Goals
`,

  practice: [
    {
      id: "aiml-module2-lesson2-practice-01",
      title: "Formulate a Route-Finding Problem",
      description: "Convert a route-finding requirement into initial state, actions, transitions, goal, constraints, and cost.",
      type: "problem_formulation"
    },
    {
      id: "aiml-module2-lesson2-practice-02",
      title: "Design a Grid Problem",
      description: "Represent a grid with obstacles and define valid movement actions.",
      type: "implementation"
    },
    {
      id: "aiml-module2-lesson2-practice-03",
      title: "State Representation Analysis",
      description: "Compare different state representations and identify whether they contain sufficient information.",
      type: "analysis"
    },
    {
      id: "aiml-module2-lesson2-practice-04",
      title: "Weighted Route Problem",
      description: "Represent a graph with different transition costs and calculate total path costs.",
      type: "mathematical"
    },
    {
      id: "aiml-module2-lesson2-practice-05",
      title: "Python Grid Problem",
      description: "Implement a reusable GridProblem class with state validation and goal testing.",
      type: "coding"
    },
    {
      id: "aiml-module2-lesson2-practice-06",
      title: "Real-World Problem Formulation",
      description: "Choose a practical problem and formally define all components required for search.",
      type: "design"
    }
  ],

  quickCheck: [
    {
      question: "What is the purpose of problem formulation?",
      options: [
        "To make the problem vague",
        "To convert a real-world problem into a precise computational representation",
        "To automatically train a neural network",
        "To remove the need for an objective"
      ],
      answer: 1
    },
    {
      question: "What does the initial state represent?",
      options: [
        "The final solution",
        "The starting situation of the problem",
        "The total path cost",
        "The search algorithm"
      ],
      answer: 1
    },
    {
      question: "What does an action describe?",
      options: [
        "What the system can do from a state",
        "The final output only",
        "The training dataset",
        "The visualization style"
      ],
      answer: 0
    },
    {
      question: "What does a transition model describe?",
      options: [
        "How an action changes the current state",
        "How a model is trained",
        "How data is visualized",
        "How a user logs in"
      ],
      answer: 0
    },
    {
      question: "What does a goal test determine?",
      options: [
        "Whether the current state satisfies the goal",
        "Whether Python is installed",
        "Whether a dataset is large enough",
        "Whether an algorithm is fast"
      ],
      answer: 0
    },
    {
      question: "What does path cost represent?",
      options: [
        "The amount used to compare the cost of solution paths",
        "The number of variables in a model",
        "The size of a Python program",
        "The number of users"
      ],
      answer: 0
    },
    {
      question: "Why can an incomplete state representation be dangerous?",
      options: [
        "The search algorithm may lack information required to make correct decisions",
        "It always makes Python slower",
        "It automatically creates more rules",
        "It prevents all search algorithms from running"
      ],
      answer: 0
    },
    {
      question: "Why should unnecessary information often be excluded from a state?",
      options: [
        "It can unnecessarily increase the size and complexity of the search space",
        "It prevents the goal from being defined",
        "It removes all constraints",
        "It makes the algorithm learn automatically"
      ],
      answer: 0
    },
    {
      question: "If every movement in a grid has equal cost, which information is especially useful for a basic shortest-path formulation?",
      options: [
        "Initial state, valid actions, transitions, and goal",
        "User account details",
        "Screen brightness",
        "Database password"
      ],
      answer: 0
    },
    {
      question: "What should generally happen before selecting a search algorithm?",
      options: [
        "The problem should be formulated clearly",
        "The final answer should be guessed",
        "The goal should be removed",
        "All constraints should be ignored"
      ],
      answer: 0
    }
  ],

  completion: {
    previous: "/lesson/aiml/module2/lesson1",
    next: "/lesson/aiml/module2/lesson3",
    backToModule: "/lesson/aiml/module2/about"
  }
};