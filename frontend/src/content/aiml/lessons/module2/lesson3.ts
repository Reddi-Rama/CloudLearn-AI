const lesson3 = {
  id: "lesson3",
  title: "States, Actions and Goals",

  content: `
# Lesson 03 — States, Actions & Goals

## What You Will Learn

In this lesson, you will learn how an AI system represents a problem using states, actions, and goals. You will also understand how these concepts can be expressed mathematically and implemented in Python.

You will learn:

- State representation
- State variables
- Actions and state transitions
- Preconditions and effects
- Initial and goal states
- Goal testing
- State-space representation
- Successor states
- Path cost
- Practical state-transition implementation
- How this representation prepares a problem for search algorithms


# 1. States in AI

Before an AI system can solve a problem, it must know the current situation.

A state is a representation of the current situation of a problem at a particular point in time.

Consider a robot moving through a grid. If the robot is currently at row 2 and column 3, its state can be represented as:

s = (2, 3)

After the robot moves right, the new state becomes:

s' = (2, 4)

The state has changed because the robot's position has changed.

In more complex problems, a state may contain several variables. For a delivery robot, a state could include its location, whether it is carrying a package, and its remaining battery level.

The important principle is that a state should contain the information that is relevant to decision-making.


# 2. State Variables

A state is often described using state variables.

For example, a robot navigation problem may use:

State = (x, y)

where:

- x represents the horizontal position
- y represents the vertical position

A delivery problem could use:

State = (Location, PackageStatus, Battery)

The choice of state variables depends on the problem being solved.

If important information is missing, the AI may not be able to make the correct decision. If unnecessary information is included, the number of possible states may become unnecessarily large.

Therefore, state representation is an important AI engineering decision.


# 3. Actions

An action is an operation that an AI system can perform to change the current state.

For a grid-navigation problem, possible actions might be:

- Up
- Down
- Left
- Right

For a delivery robot, actions might include:

- Move
- Pick up package
- Deliver package
- Recharge

The fundamental relationship is:

Current State + Action → New State

For example:

(2, 3) + Right → (2, 4)

The action Right transforms the robot's current state into a new state.


# 4. State Transition Function

The transformation from one state to another can be represented mathematically using a transition function.

T(s, a) = s'

where:

- s = current state
- a = action
- s' = resulting state
- T = transition function

For example:

T((2, 3), Right) = (2, 4)

This means that applying the Right action to state (2, 3) produces state (2, 4).

The transition function is fundamental to search because search algorithms repeatedly apply actions to generate new states.


# 5. Valid Actions

An AI cannot necessarily perform every action from every state.

Suppose a robot is at the left edge of a grid. It cannot move further left.

Therefore, the available actions depend on the current state.

For example:

Current State: (0, 0)

Possible actions may be:

- Right
- Down

while:

- Left
- Up

may be invalid because they would move outside the grid.

A good AI problem representation must therefore define which actions are valid from each state.


# 6. Preconditions and Effects

An action can be described using two important concepts: preconditions and effects.

A precondition is a condition that must be true before an action can be performed.

An effect describes what changes after the action is performed.

For example:

Action: Pick Up Package

Precondition:
Package is at the robot's current location.

Effect:
Robot is now carrying the package.

Another example:

Action: Move Right

Precondition:
The cell to the right is accessible.

Effect:
Robot moves to the right cell.

This provides a structured way of describing how actions operate within an AI environment.


# 7. Initial State

The initial state represents the situation where the problem begins.

Suppose a robot starts at the upper-left corner of a grid:

s₀ = (0, 0)

This is the initial state.

From this state, the AI determines which actions are available and generates possible successor states.


# 8. Goal State

A goal describes the result that the AI wants to achieve.

Suppose the robot must reach:

(3, 3)

Then:

Goal = (3, 3)

A state that satisfies the required goal condition is called a goal state.

The AI's task is to find a sequence of actions that transforms the initial state into a goal state.


# 9. Goal Test

The AI needs a method for determining whether a state satisfies the goal.

This is called a goal test.

For a simple navigation problem:

GoalTest(s) =
True if s = (3, 3)
False otherwise

In other problems, the goal test may be more complex.

For example:

Goal: Deliver all packages.

The goal test must check whether every required package has been delivered.

Thus, the goal does not always have to be one specific state. It can also be a condition satisfied by multiple states.


# 10. Successor States

A successor state is a state that can be reached from the current state by performing a valid action.

Suppose the current state is:

(2, 2)

and the valid actions are:

- Up
- Down
- Left
- Right

The corresponding successor states could be:

(1, 2)
(3, 2)
(2, 1)
(2, 3)

The AI can then examine these states and continue exploring.

This process of generating successor states is the basic operation behind search algorithms.


# 11. State Space

The collection of all possible states that can be reached in a problem is called the state space.

Mathematically, we can represent the state space as:

S = {s₀, s₁, s₂, ..., sₙ}

where each sᵢ represents a possible state.

For a small grid, the state space may contain only a few positions.

For a complex game, planning problem, or real-world environment, the number of possible states can become extremely large.

This is one of the main challenges faced by AI search algorithms.


# 12. State Space as a Graph

A state space can naturally be represented as a graph.

In this representation:

- Nodes represent states
- Edges represent actions or transitions

For example:

A → B → D

and:

A → C → D

Here, A is the initial state and D is the goal state.

The AI must explore the graph to determine which path leads to the desired goal.

This connection between AI problems and graphs becomes particularly important when studying search algorithms.


# 13. Solution Path

A solution path is a sequence of states connected by valid actions that takes the AI from the initial state to a goal state.

For example:

s₀ → s₁ → s₂ → s₃

where:

- s₀ is the initial state
- s₃ is the goal state

The corresponding actions might be:

Right → Right → Down

A search algorithm attempts to discover such paths automatically.


# 14. Path Cost

Not every solution path is equally good.

An AI system may need to consider the cost of each action.

Let the cost of moving from one state to another be:

c(sᵢ, aᵢ, sᵢ₊₁)

Then the total cost of a path can be expressed as:

g(P) = Σ c(sᵢ, aᵢ, sᵢ₊₁)

For example, if a robot follows three movements with costs:

2 + 3 + 1

then:

g(P) = 6

Depending on the application, cost may represent:

- Distance
- Time
- Energy
- Money
- Number of actions

This concept will become important when studying Cost-Based Search and A*.


# 15. Practical Example — Robot Navigation

Consider a robot navigating a small grid.

The robot starts at:

(0, 0)

The destination is:

(3, 3)

The available actions are:

Up, Down, Left, Right

Each movement has a cost of 1.

Suppose the robot follows:

(0, 0)
→ (0, 1)
→ (1, 1)
→ (2, 1)
→ (2, 2)
→ (3, 2)
→ (3, 3)

The final state satisfies the goal.

The path contains six movements, so its total cost is:

6 × 1 = 6

The important point is that the AI is not simply moving randomly. It is operating within a formally defined problem consisting of:

State → Action → Transition → Goal


# 16. Practical Python Representation

A simple AI problem can be represented in Python using basic data structures.

A state can be represented as a tuple such as:

(2, 3)

Actions can be represented using names such as:

"up", "down", "left", "right"

The AI can then define a transition process that receives a current state and an action and produces the corresponding next state.

For a grid, the transition rules are based on coordinate changes:

Up: decrease row

Down: increase row

Left: decrease column

Right: increase column

This is a useful first implementation because it allows students to understand the mechanics of state transitions before introducing search algorithms.


# 17. Practical Experiment — Generate Successor States

A useful experiment is to select a state such as:

(2, 2)

and determine all valid successor states.

For a normal four-direction grid, the possible successors are:

(1, 2), (3, 2), (2, 1), (2, 3)

Now place an obstacle at one of these positions.

The corresponding action becomes invalid, and the successor state should no longer be generated.

This experiment demonstrates an important principle:

The environment determines which actions are available.


# 18. State-Space Growth

The number of possible states can increase rapidly as the problem becomes larger.

If a problem has an average branching factor b, then after approximately d levels, the number of possible paths can grow roughly according to:

bᵈ

For example, with a branching factor of 3:

3¹ = 3

3² = 9

3³ = 27

3⁴ = 81

This rapid growth is called combinatorial explosion.

It explains why an AI cannot simply explore every possible possibility in large problems.

Efficient search strategies are therefore necessary.


# 19. Real-World Example — Delivery Planning

Consider an autonomous delivery system.

A state might contain:

- Robot location
- Package location
- Delivery status
- Battery level

Actions could include:

- Move
- Pick up package
- Deliver package
- Recharge

The initial state describes the robot before delivery begins.

The goal is a state in which the package has been successfully delivered.

If several routes are possible, the AI may choose one based on distance, time, energy consumption, or another cost function.

This is the same state-action-goal framework used in the simpler grid example, but applied to a realistic AI problem.


# 20. Implementation Perspective

When designing a search problem, an AI engineer should define five things clearly.

## Initial State

Where does the problem start?

## Actions

What can the AI do?

## Transition Model

How does each action change the state?

## Goal Test

How does the AI recognize success?

## Path Cost

How is the quality or cost of a solution measured?

Once these are defined, the problem becomes suitable for systematic search.


# 21. Common Mistakes

## Poor State Representation

Including irrelevant information can unnecessarily increase the search space.

## Missing Important Information

If the state does not contain information required for decision-making, the AI may produce incorrect solutions.

## Invalid Actions

The system must prevent actions that violate the environment's rules.

## Unclear Goals

The AI needs a precise goal condition and goal test.

## Ignoring Costs

If different paths have different costs, simply finding the first solution may not produce the best solution.

## Confusing States and Actions

A state describes the current situation; an action changes that situation.


# Practice

## Practice 1 — Grid Navigation

Define a grid-navigation problem with:

- Initial state
- Goal state
- Four possible actions
- Valid-action conditions
- State transitions

Then manually generate the successor states for one selected position.

## Practice 2 — Delivery Robot

Define the:

State → Actions → Preconditions → Effects → Goal

for a delivery robot.

## Practice 3 — State Space

Create a small state graph containing at least six states and identify two different paths from the initial state to the goal.


# Challenge

Design a small AI problem of your choice and formally specify:

Initial State

Actions

Transition Model

Goal Test

Path Cost

Then determine whether the problem has multiple possible solutions and explain how you would decide which solution is better.


# Quick Check

## 1. What is a state?

A representation of the current situation of an AI problem.

## 2. What is an action?

An operation that can change the current state.

## 3. What is a transition function?

A function describing how an action transforms one state into another.

## 4. What is a successor state?

A state that can be reached from the current state through a valid action.

## 5. What is a goal test?

A procedure that determines whether the current state satisfies the goal.

## 6. What is a state space?

The collection of possible states in a problem.

## 7. Why is path cost important?

Because an AI may need to select the most efficient solution among several possible paths.


# Key Takeaways

A state describes the current situation of an AI problem, while an action represents a possible operation that changes that situation.

The transition function provides the mathematical relationship:

T(s, a) = s'

The initial state defines where the problem begins, and the goal test determines whether a desired state has been reached.

The collection of possible states forms the state space, which can be represented as a graph of states and transitions.

A solution is a path through this state space, and its quality can be measured using path cost.

Understanding states, actions, transitions, and goals is essential because the search algorithms studied next will operate directly on this representation.
`
};

export default lesson3;