"use client";

import React, { useMemo, useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "What is the output of the following code?",
    options: [
      "[1, 2, 3] / [1, 2, 3, 4]",
      "[1, 2, 3, 4] / [1, 2, 3, 4]",
      "[1, 2, 3] / [1, 2, 3]",
      "TypeError"
    ],
    answer: 1,
    explanation:
      "Both variables reference the same list object, so appending through b also changes a."
  },
  {
    id: 2,
    question: "What is the main problem with using a mutable list as a default argument in a Python function?",
    options: [
      "Python does not allow lists as arguments",
      "The same list can be reused across multiple function calls",
      "The function cannot return the list",
      "Lists automatically become tuples"
    ],
    answer: 1,
    explanation:
      "Default arguments are evaluated once when the function is defined, so a mutable default can retain changes between calls."
  },
  {
    id: 3,
    question: "What is printed by this code?",
    options: [
      "10",
      "20",
      "30",
      "NameError"
    ],
    answer: 2,
    explanation:
      "Python resolves the variable through the enclosing scope, where x has the value 30."
  },
  {
    id: 4,
    question: "Which statement about Python dictionaries is correct?",
    options: [
      "Dictionary keys must always be strings",
      "Dictionary values must be immutable",
      "Dictionary keys must be hashable",
      "Dictionaries cannot contain nested dictionaries"
    ],
    answer: 2,
    explanation:
      "Dictionary keys must be hashable, which generally means they must have a stable hash value."
  },
  {
    id: 5,
    question: "What does list comprehension [x * x for x in range(5) if x % 2 == 0] produce?",
    options: [
      "[0, 1, 4, 9, 16]",
      "[1, 9]",
      "[0, 4, 16]",
      "[2, 4]"
    ],
    answer: 2,
    explanation:
      "Only even values 0, 2, and 4 are selected, producing their squares: 0, 4, and 16."
  },
  {
    id: 6,
    question: "What is the output?",
    options: [
      "20",
      "10",
      "30",
      "0"
    ],
    answer: 0,
    explanation:
      "The local assignment creates a local variable inside the function, so the global value remains unchanged."
  },
  {
    id: 7,
    question: "Which statement best describes a closure in Python?",
    options: [
      "A class that automatically closes a file",
      "A function that remembers variables from its enclosing scope",
      "A method that prevents inheritance",
      "A function that can only accept one argument"
    ],
    answer: 1,
    explanation:
      "A closure retains access to variables from the enclosing lexical scope even after that scope has finished executing."
  },
  {
    id: 8,
    question: "What happens when an exception is raised inside a try block and no matching except clause handles it?",
    options: [
      "Python silently ignores it",
      "The program automatically retries the block",
      "The exception propagates to an outer handler or terminates the program",
      "The exception becomes None"
    ],
    answer: 1,
    explanation:
      "An unhandled exception propagates upward through the call stack and may terminate the program."
  },
  {
    id: 9,
    question: "What is the primary difference between == and is in Python?",
    options: [
      "Both always compare object identity",
      "== compares values while is compares object identity",
      "is compares values while == compares memory addresses",
      "There is no difference"
    ],
    answer: 1,
    explanation:
      "== checks equality of values, while is checks whether two references point to the same object."
  },
  {
    id: 10,
    question: "What does the finally block in exception handling guarantee?",
    options: [
      "It executes only when an exception occurs",
      "It executes only when no exception occurs",
      "It normally executes whether an exception occurs or not",
      "It prevents all exceptions"
    ],
    answer: 1,
    explanation:
      "The finally block is intended for cleanup code and normally executes regardless of whether an exception occurred."
  },
  {
    id: 11,
    question: "Which method is automatically called when a new instance of a normal Python class is initialized?",
    options: [
      "__start__()",
      "__create__()",
      "__init__()",
      "__newobject__()"
    ],
    answer: 2,
    explanation:
      "__init__() initializes an already-created instance. __new__() is responsible for creating the instance."
  },
  {
    id: 12,
    question: "What is the purpose of super() in Python classes?",
    options: [
      "It creates a completely unrelated object",
      "It provides access to methods and attributes of a parent class",
      "It prevents method overriding",
      "It converts a class into an abstract class"
    ],
    answer: 1,
    explanation:
      "super() provides a convenient way to access functionality from a superclass, especially in inheritance hierarchies."
  },
  {
    id: 13,
    question: "Which statement about generators is correct?",
    options: [
      "They produce values lazily using yield",
      "They always store all generated values in memory",
      "They can only generate integers",
      "They cannot be iterated"
    ],
    answer: 0,
    explanation:
      "Generators use yield to produce values lazily, allowing iteration without storing the entire sequence in memory."
  },
  {
    id: 14,
    question: "What does the *args parameter allow a Python function to receive?",
    options: [
      "Only keyword arguments",
      "Only one positional argument",
      "A variable number of positional arguments",
      "A variable number of modules"
    ],
    answer: 2,
    explanation:
      "*args collects a variable number of positional arguments into a tuple."
  },
  {
    id: 15,
    question: "What does **kwargs collect when used in a function definition?",
    options: [
      "A list of positional arguments",
      "A tuple of positional arguments",
      "A dictionary of keyword arguments",
      "A set of imported modules"
    ],
    answer: 0,
    explanation:
      "**kwargs collects a variable number of keyword arguments into a dictionary."
  },
  {
    id: 16,
    question: "What is the output of this expression: sorted({3, 1, 2})?",
    options: [
      "{1, 2, 3}",
      "(1, 2, 3)",
      "[1, 2, 3]",
      "None"
    ],
    answer: 2,
    explanation:
      "sorted() returns a new list containing the sorted elements of the iterable."
  },
  {
    id: 17,
    question: "Which statement about Python decorators is correct?",
    options: [
      "They can modify or extend the behavior of a function without changing its core code",
      "They can only be applied to classes",
      "They permanently convert functions into variables",
      "They disable function calls"
    ],
    answer: 0,
    explanation:
      "A decorator wraps a function or class to extend or modify its behavior."
  },
  {
    id: 18,
    question: "What is the main advantage of using a set instead of a list for membership testing?",
    options: [
      "Sets preserve duplicate values",
      "Sets generally provide faster average-time membership testing",
      "Sets support indexing more efficiently",
      "Sets always maintain insertion order for sorting"
    ],
    answer: 1,
    explanation:
      "Hash-based sets generally provide average O(1) membership testing, while list membership is O(n)."
  },
  {
    id: 19,
    question: "What is the time complexity of dictionary lookup by key on average?",
    options: [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    answer: 2,
    explanation:
      "Python dictionaries are hash tables, giving average O(1) lookup by key."
  },
  {
    id: 20,
    question: "What happens when a generator function containing yield is called?",
    options: [
      "Its entire body executes immediately",
      "It immediately returns a list",
      "It returns a generator object without executing the whole function body",
      "It always raises StopIteration"
    ],
    answer: 1,
    explanation:
      "Calling a generator function returns a generator object. Execution proceeds when values are requested."
  },
  {
    id: 21,
    question: "Consider: a = [[1, 2], [3, 4]]; b = a.copy(); b[0].append(99). What happens?",
    options: [
      "Only b changes",
      "Both a and b show [1, 2, 99] in their first nested list",
      "A TypeError occurs",
      "The nested list is automatically deep-copied"
    ],
    answer: 1,
    explanation:
      "copy() creates a shallow copy. The nested lists remain shared between a and b."
  },
  {
    id: 22,
    question: "Which approach creates an independent deep copy of a nested Python object?",
    options: [
      "object.copy()",
      "list(object)",
      "copy.deepcopy(object)",
      "object[:] "
    ],
    answer: 2,
    explanation:
      "copy.deepcopy() recursively copies nested objects, creating an independent structure."
  },
  {
    id: 23,
    question: "What is the purpose of the __name__ == '__main__' pattern?",
    options: [
      "It forces a module to be imported",
      "It runs a block when the file is executed directly rather than imported",
      "It prevents all functions from executing",
      "It converts the file into a package"
    ],
    answer: 1,
    explanation:
      "When a Python file is executed directly, __name__ is '__main__'. When imported, it usually contains the module name."
  },
  {
    id: 24,
    question: "What is the output of this code?\n\nx = [1, 2, 3]\ny = (n for n in x)\nx.append(4)\nprint(list(y))",
    options: [
      "[1, 2, 3]",
      "[4]",
      "[1, 2, 3, 4]",
      "TypeError"
    ],
    answer: 2,
    explanation:
      "The generator reads from the list lazily. The appended value exists in the list when the generator is consumed."
  },
  {
    id: 25,
    question: "What is the output?\n\ndef outer():\n    x = 10\n    def inner():\n        nonlocal x\n        x += 5\n        return x\n    inner()\n    return x\n\nprint(outer())",
    options: [
      "10",
      "15",
      "5",
      "UnboundLocalError"
    ],
    answer: 1,
    explanation:
      "nonlocal allows inner() to modify x from the enclosing outer() scope, changing it from 10 to 15."
  },
];

const PASS_MARK = 18;

export default function PythonExam() {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => {
    return questions.reduce((total, question) => {
      return total + (selectedAnswers[question.id] === question.answer ? 1 : 0);
    }, 0);
  }, [selectedAnswers]);

  const percentage = Math.round((score / questions.length) * 100);
  const passed = score >= PASS_MARK;

  const answeredCount = Object.keys(selectedAnswers).length;

  const selectAnswer = (questionId: number, optionIndex: number) => {
    if (submitted) return;

    setSelectedAnswers((previous) => ({
      ...previous,
      [questionId]: optionIndex
    }));
  };

  const submitExam = () => {
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const retakeExam = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getOptionLetter = (index: number) => {
    return String.fromCharCode(65 + index);
  };

  return (
    <div className="min-h-screen px-4 pb-8 pt-32">
      <div className="mx-auto max-w-5xl">
        {!submitted ? (
          <>
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    Python Development
                  </h1>
                  <p className="mt-1 text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Course Completion Assessment
                  </p>
                </div>

                <div className="rounded-xl bg-gray-100 px-4 py-3 text-center dark:bg-gray-800">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Passing Score
                  </p>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    70%
                  </p>
                </div>
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Answer all 25 questions and submit the exam to see your score,
                correct answers, and explanations.
              </p>

              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="rounded-full bg-gray-100 px-4 py-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  25 Questions
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  Multiple Choice
                </span>
                <span className="rounded-full bg-gray-100 px-4 py-2 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                  {answeredCount}/25 Answered
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {questions.map((question, questionIndex) => (
                <div
                  key={question.id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                      Question {questionIndex + 1} of {questions.length}
                    </p>

                    <h2 className="mt-2 text-lg font-semibold leading-7 text-gray-900 dark:text-white">
                      {question.question}
                    </h2>
                  </div>

                  <div className="grid gap-3">
                    {question.options.map((option, optionIndex) => {
                      const selected =
                        selectedAnswers[question.id] === optionIndex;

                      return (
                        <button
                          key={optionIndex}
                          type="button"
                          onClick={() =>
                            selectAnswer(question.id, optionIndex)
                          }
                          className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition ${
                            selected
                              ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950/40"
                              : "border-gray-200 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-800"
                          }`}
                        >
                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                              selected
                                ? "border-blue-500 bg-blue-500 text-white"
                                : "border-gray-300 text-gray-600 dark:border-gray-600 dark:text-gray-300"
                            }`}
                          >
                            {getOptionLetter(optionIndex)}
                          </span>

                          <span className="text-gray-800 dark:text-gray-200">
                            {option}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Ready to submit?
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    You have answered {answeredCount} of {questions.length}{" "}
                    questions.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={submitExam}
                  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                  Submit Exam
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="mb-8 rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                Exam Result
              </p>

              <h1 className="mt-3 text-4xl font-bold text-gray-900 dark:text-white">
                {score}/{questions.length}
              </h1>

              <p className="mt-2 text-2xl font-semibold text-gray-700 dark:text-gray-300">
                {percentage}%
              </p>

              <div
                className={`mx-auto mt-5 inline-flex rounded-full px-5 py-2 font-bold ${
                  passed
                    ? "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300"
                    : "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300"
                }`}
              >
                {passed ? "PASSED" : "NOT PASSED"}
              </div>

              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Passing requirement: {PASS_MARK}/{questions.length} correct
                answers (70%).
              </p>

              <button
                type="button"
                onClick={retakeExam}
                className="mt-6 rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-800 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                Retake Exam
              </button>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
                Answer Review
              </h2>

              <div className="space-y-5">
                {questions.map((question, questionIndex) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.answer;

                  return (
                    <div
                      key={question.id}
                      className={`rounded-2xl border bg-white p-6 shadow-sm dark:bg-gray-900 ${
                        isCorrect
                          ? "border-green-300 dark:border-green-800"
                          : "border-red-300 dark:border-red-800"
                      }`}
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Question {questionIndex + 1}
                          </p>

                          <h3 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white">
                            {question.question}
                          </h3>
                        </div>

                        <span
                          className={`shrink-0 rounded-full px-3 py-1 text-sm font-bold ${
                            isCorrect
                              ? "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300"
                          }`}
                        >
                          {isCorrect ? "Correct" : "Incorrect"}
                        </span>
                      </div>

                      <div className="mt-5 space-y-3">
                        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Your Answer
                          </p>

                          <p className="mt-1 font-medium text-gray-900 dark:text-white">
                            {userAnswer !== undefined
                              ? `${getOptionLetter(userAnswer)}. ${
                                  question.options[userAnswer]
                                }`
                              : "Not answered"}
                          </p>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Correct Answer
                          </p>

                          <p className="mt-1 font-medium text-gray-900 dark:text-white">
                            {getOptionLetter(question.answer)}.{" "}
                            {question.options[question.answer]}
                          </p>
                        </div>

                        <div className="rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
                          <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                            Explanation
                          </p>

                          <p className="mt-1 leading-6 text-gray-700 dark:text-gray-300">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
