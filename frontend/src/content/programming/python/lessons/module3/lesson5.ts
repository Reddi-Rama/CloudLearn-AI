const lesson5 = {
  id: "lesson5",

  title: "Nested Loops",

  previousLesson: "/lesson/python-development/module3/lesson4",

  nextLesson: "/lesson/python-development/module3/lesson6",

  content: `# Nested Loops

A Nested Loop is a loop placed inside another loop. The outer loop controls how many times the inner loop executes, while the inner loop performs all of its iterations for every single iteration of the outer loop.

Nested loops are useful when working with data that has multiple levels, such as rows and columns, schedules, matrices, reports, and hierarchical information.

Python allows both for loops and while loops to be nested inside one another, making it possible to solve complex programming problems efficiently.

## Why Use Nested Loops?

Many real-world problems involve multiple levels of repetition.

For example, imagine generating a timetable for multiple days, checking servers across different regions, or processing rows and columns of a table.

Using a single loop is not sufficient because each outer task contains multiple inner tasks.

Nested loops solve this problem by allowing one loop to execute inside another.

IMPORTANT: The inner loop completes all of its iterations before the outer loop moves to its next iteration.

## Syntax of Nested Loops

The basic syntax of nested loops is:

for variable1 in sequence1:
    for variable2 in sequence2:
        statements

The outer loop starts first.

For every iteration of the outer loop, the inner loop executes completely.

Once the inner loop finishes, the outer loop continues with its next iteration.

## How Nested Loops Work

Suppose the outer loop executes 3 times and the inner loop executes 2 times.

Execution order:

Outer Loop → Iteration 1
    Inner Loop → 2 Iterations

Outer Loop → Iteration 2
    Inner Loop → 2 Iterations

Outer Loop → Iteration 3
    Inner Loop → 2 Iterations

Total executions of the inner statements:

3 × 2 = 6

As the number of nested loops increases, the total number of executions also increases.

## Real-World Applications

Nested loops are widely used in:

- Processing rows and columns of tables
- Generating reports
- Timetable generation
- Matrix operations
- Image processing
- Scientific computing
- Cloud infrastructure monitoring
- Data analysis
- Game development

For example, a cloud platform may check multiple servers in multiple regions using nested loops.

## Performance Considerations

Nested loops execute many times because the inner loop runs completely for every iteration of the outer loop.

When working with very large datasets, deeply nested loops can increase execution time significantly.

Developers should use nested loops only when necessary.

IMPORTANT: More levels of nesting generally result in more computations, so always consider performance when processing large amounts of data.

## Common Beginner Mistakes

Some common mistakes include:

- Incorrect indentation.
- Confusing the outer and inner loop variables.
- Using unnecessary levels of nesting.
- Writing complex logic inside deeply nested loops.

Keeping nested loops simple improves readability and makes debugging easier.

## Best Practices

- Use meaningful variable names.
- Keep nesting levels as small as possible.
- Write clear and readable code.
- Avoid unnecessary computations inside nested loops.
- Consider performance when processing large datasets.

## Key Points

- A Nested Loop is a loop inside another loop.
- The inner loop executes completely during every outer loop iteration.
- Nested loops are useful for multi-level data processing.
- They are commonly used in reports, matrices, scheduling, and cloud applications.
- Excessive nesting can reduce performance.

IMPORTANT: Nested loops are powerful for solving complex problems involving multiple dimensions of data, but they should be used thoughtfully to maintain code readability and efficiency.`,

  examples: [
    {
      title: "Example 1: Basic Nested Loop",

      code: `for day in range(1, 4):
    for session in range(1, 3):
        print(f"Day {day} - Session {session}")`,

      output: `Day 1 - Session 1
Day 1 - Session 2
Day 2 - Session 1
Day 2 - Session 2
Day 3 - Session 1
Day 3 - Session 2`,
    },

    {
      title: "Example 2: Checking Servers in Multiple Regions",

      code: `regions = ["Asia", "Europe"]

for region in regions:
    for server in range(1, 4):
        print(f"Checking Server {server} in {region}")`,

      output: `Checking Server 1 in Asia
Checking Server 2 in Asia
Checking Server 3 in Asia
Checking Server 1 in Europe
Checking Server 2 in Europe
Checking Server 3 in Europe`,
    },

    {
      title: "Example 3: Multiplication Table",

      code: `for i in range(1, 4):
    for j in range(1, 4):
        print(i * j, end=" ")
    print()`,

      output: `1 2 3
2 4 6
3 6 9`,
    },

    {
      title: "Example 4: Student Attendance",

      code: `classes = ["Class A", "Class B"]

for classroom in classes:
    print(classroom)
    for student in range(1, 4):
        print(f"Student {student}")`,

      output: `Class A
Student 1
Student 2
Student 3
Class B
Student 1
Student 2
Student 3`,
    },
  ],
};

export default lesson5;