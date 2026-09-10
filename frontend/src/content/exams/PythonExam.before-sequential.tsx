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
    question: "What is the output of the following code?\n\nconst a = [1, 2, 3]\nconst b = a\nb.append(4)\nprint(a)\nprint(b)",
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
    question: "What is printed by this code?\n\nx = 10\n\ndef show():\n    x = 30\n    print(x)\n\nshow()",
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
    question: "What is the output?\n\nx = 10\n\ndef test():\n    x = 20\n    print(x)\n\ntest()\nprint(x)",
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

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
    setCurrentQuestionIndex(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentQuestion = questions[currentQuestionIndex];

  const goNext = () => {
    if (selectedAnswers[currentQuestion.id] === undefined) return;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((previous) => previous + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      submitExam();
    }
  };

  const goPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((previous) => previous - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const getOptionLetter = (index: number) => {
    return String.fromCharCode(65 + index);
  };

  return (
    <div className="min-h-screen px-4 pb-16 pt-32">
      <div className="mx-auto max-w-6xl">

        {!submitted ? (
          <>
            {/* ==================== EXAM HEADER ==================== */}
            <section className="relative mb-8 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-xl dark:border-gray-800 dark:bg-gray-900">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-violet-600/10" />

              <div className="relative p-7 sm:p-9">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div>
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-300">
                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                      Course Completion Assessment
                    </div>

                    <h1 className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                      Python Development
                    </h1>

                    <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400">
                      Test your Python knowledge with 25 progressively challenging
                      questions covering core concepts, functions, OOP, generators,
                      decorators, collections, and advanced Python behavior.
                    </p>
                  </div>

                  <div className="shrink-0 rounded-3xl border border-gray-200 bg-gray-50 p-6 text-center dark:border-gray-700 dark:bg-gray-800">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                      Passing Score
                    </p>
                    <p className="mt-1 text-4xl font-black text-blue-600 dark:text-blue-400">
                      70%
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {PASS_MARK} / {questions.length} correct
                    </p>
                  </div>

                </div>

                {/* Stats */}
                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">

                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Questions
                    </p>
                    <p className="mt-1 text-2xl font-black text-gray-900 dark:text-white">
                      {questions.length}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Answered
                    </p>
                    <p className="mt-1 text-2xl font-black text-blue-600 dark:text-blue-400">
                      {answeredCount}
                      <span className="ml-1 text-base font-semibold text-gray-400">
                        / {questions.length}
                      </span>
                    </p>
                  </div>

                  <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-800/70">
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Remaining
                    </p>
                    <p className="mt-1 text-2xl font-black text-gray-900 dark:text-white">
                      {questions.length - answeredCount}
                    </p>
                  </div>

                </div>

                {/* Progress */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-semibold text-gray-600 dark:text-gray-400">
                      Exam Progress
                    </span>
                    <span className="font-black text-blue-600 dark:text-blue-400">
                      {Math.round((answeredCount / questions.length) * 100)}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-500"
                      style={{
                        width: `${(answeredCount / questions.length) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ==================== QUESTIONS ==================== */}
            <div className="space-y-6">
              {questions.map((question, questionIndex) => (
                <section
                  key={question.id}
                  className="overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white shadow-lg transition-shadow hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="border-b border-gray-100 bg-gray-50/80 px-6 py-5 dark:border-gray-800 dark:bg-gray-800/50 sm:px-7">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-sm font-black text-white shadow-md">
                          {questionIndex + 1}
                        </span>

                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                            Question {questionIndex + 1}
                          </p>
                          <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                            of {questions.length}
                          </p>
                        </div>
                      </div>

                      {selectedAnswers[question.id] !== undefined && (
                        <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                          Answered
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <h2 className="text-lg font-bold leading-8 text-gray-900 dark:text-white sm:text-xl">
                      {question.question}
                    </h2>

                    <div className="mt-6 grid gap-3">
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
                            className={`group flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                              selected
                                ? "border-blue-500 bg-blue-50 shadow-md shadow-blue-500/10 dark:border-blue-400 dark:bg-blue-950/30"
                                : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-700 dark:hover:bg-blue-950/20"
                            }`}
                          >
                            <span
                              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border-2 text-sm font-black transition-all ${
                                selected
                                  ? "border-blue-500 bg-blue-500 text-white shadow-md"
                                  : "border-gray-200 bg-gray-50 text-gray-600 group-hover:border-blue-300 group-hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                              }`}
                            >
                              {getOptionLetter(optionIndex)}
                            </span>

                            <span
                              className={`flex-1 text-sm font-semibold leading-6 sm:text-base ${
                                selected
                                  ? "text-blue-900 dark:text-blue-100"
                                  : "text-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {option}
                            </span>

                            {selected && (
                              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-black text-white">
                                &#10003;
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </section>
              ))}
            </div>

            {/* ==================== SUBMIT ==================== */}
            <section className="sticky bottom-4 z-20 mt-8 overflow-hidden rounded-[1.75rem] border border-gray-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/95 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-black text-gray-900 dark:text-white">
                    Ready to submit?
                  </p>

                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {answeredCount === questions.length
                      ? "All questions have been answered."
                      : `${questions.length - answeredCount} question${
                          questions.length - answeredCount === 1 ? "" : "s"
                        } still unanswered.`}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={submitExam}
                  className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 text-base font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Submit Exam
                  <span className="ml-2">&#8594;</span>
                </button>
              </div>
            </section>
          </>
        ) : (
          <>
            {/* ==================== RESULT HERO ==================== */}
            <section
              className={`relative mb-8 overflow-hidden rounded-[2rem] border shadow-2xl ${
                passed
                  ? "border-green-200 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:border-green-900 dark:from-green-950/40 dark:via-gray-900 dark:to-emerald-950/30"
                  : "border-orange-200 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:border-orange-900 dark:from-orange-950/30 dark:via-gray-900 dark:to-red-950/20"
              }`}
            >
              <div className="relative px-6 py-10 text-center sm:px-10 sm:py-14">

                {/* Status icon */}
                <div
                  className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full shadow-xl ${
                    passed
                      ? "bg-gradient-to-br from-green-400 to-emerald-600 shadow-green-500/30"
                      : "bg-gradient-to-br from-orange-400 to-red-500 shadow-orange-500/30"
                  }`}
                >
                  <span className="text-5xl font-black text-white">
                    {passed ? "&#10003;" : "!"}
                  </span>
                </div>

                <p
                  className={`mt-7 text-sm font-black uppercase tracking-[0.25em] ${
                    passed
                      ? "text-green-600 dark:text-green-400"
                      : "text-orange-600 dark:text-orange-400"
                  }`}
                >
                  {passed ? "Assessment Passed" : "Assessment Not Passed"}
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  {passed
                    ? "Congratulations! You did it."
                    : "Keep going Ã¢â‚¬â€ you are getting closer."}
                </h1>

                <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-gray-400">
                  Python Development Course Completion Assessment
                </p>

                {/* Main score */}
                <div className="mx-auto mt-9 flex h-48 w-48 flex-col items-center justify-center rounded-full border-[10px] border-white bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">
                  <span
                    className={`text-5xl font-black ${
                      passed
                        ? "text-green-600 dark:text-green-400"
                        : "text-orange-600 dark:text-orange-400"
                    }`}
                  >
                    {percentage}%
                  </span>

                  <span className="mt-1 text-xs font-black uppercase tracking-widest text-gray-400">
                    Your Score
                  </span>
                </div>

                <p className="mt-5 text-lg font-bold text-gray-700 dark:text-gray-300">
                  {score} / {questions.length} correct answers
                </p>

                {/* Pass badge */}
                <div
                  className={`mx-auto mt-5 inline-flex rounded-full px-5 py-2 text-sm font-black ${
                    passed
                      ? "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300"
                      : "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300"
                  }`}
                >
                  {passed
                    ? "&#10003; PASS Ã¢â‚¬â€ 70% REQUIRED"
                    : "&#10005; NOT PASSED Ã¢â‚¬â€ 70% REQUIRED"}
                </div>

              </div>
            </section>

            {/* ==================== SCORE STATISTICS ==================== */}
            <section className="mb-8 grid gap-4 sm:grid-cols-3">

              <div className="rounded-3xl border border-green-200 bg-green-50 p-6 text-center shadow-lg dark:border-green-900 dark:bg-green-950/30">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500 text-xl font-black text-white">
                  &#10003;
                </div>
                <p className="mt-4 text-3xl font-black text-green-700 dark:text-green-300">
                  {score}
                </p>
                <p className="mt-1 text-sm font-bold text-green-600 dark:text-green-400">
                  Correct Answers
                </p>
              </div>

              <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-center shadow-lg dark:border-red-900 dark:bg-red-950/30">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500 text-xl font-black text-white">
                  &#10005;
                </div>
                <p className="mt-4 text-3xl font-black text-red-700 dark:text-red-300">
                  {questions.length - score}
                </p>
                <p className="mt-1 text-sm font-bold text-red-600 dark:text-red-400">
                  Incorrect Answers
                </p>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50 p-6 text-center shadow-lg dark:border-blue-900 dark:bg-blue-950/30">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-xl font-black text-white">
                  {PASS_MARK}
                </div>
                <p className="mt-4 text-3xl font-black text-blue-700 dark:text-blue-300">
                  {PASS_MARK}/{questions.length}
                </p>
                <p className="mt-1 text-sm font-bold text-blue-600 dark:text-blue-400">
                  Required to Pass
                </p>
              </div>

            </section>

            {/* ==================== PERFORMANCE ==================== */}
            <section className="mb-10 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                    Performance
                  </p>
                  <h2 className="mt-1 text-2xl font-black text-gray-900 dark:text-white">
                    Your overall result
                  </h2>
                </div>

                <p
                  className={`text-2xl font-black ${
                    passed
                      ? "text-green-600 dark:text-green-400"
                      : "text-orange-600 dark:text-orange-400"
                  }`}
                >
                  {percentage}%
                </p>
              </div>

              <div className="mt-6 h-5 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${
                    passed
                      ? "bg-gradient-to-r from-green-400 to-emerald-600"
                      : "bg-gradient-to-r from-orange-400 to-red-500"
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <div className="mt-3 flex justify-between text-xs font-bold text-gray-400">
                <span>0%</span>
                <span>Passing: 70%</span>
                <span>100%</span>
              </div>
            </section>

            {/* ==================== ACTIONS ==================== */}
            <section className="mb-10 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("answer-review")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                Review Your Answers
                <span className="ml-2">&#8595;</span>
              </button>

              <button
                type="button"
                onClick={retakeExam}
                className="rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 font-black text-gray-800 shadow-md transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:border-blue-700 dark:hover:bg-blue-950/20"
              >
                Retake Exam
              </button>
            </section>

            {/* ==================== ANSWER REVIEW ==================== */}
            <section id="answer-review">
              <div className="mb-6">
                <p className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Detailed Review
                </p>

                <h2 className="mt-1 text-3xl font-black text-gray-900 dark:text-white">
                  Answer Review
                </h2>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Review every question, compare your answer with the correct
                  answer, and understand why.
                </p>
              </div>

              <div className="space-y-5">
                {questions.map((question, questionIndex) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.answer;

                  return (
                    <article
                      key={question.id}
                      className={`overflow-hidden rounded-[1.75rem] border bg-white shadow-lg dark:bg-gray-900 ${
                        isCorrect
                          ? "border-green-200 dark:border-green-900"
                          : "border-red-200 dark:border-red-900"
                      }`}
                    >
                      {/* Review header */}
                      <div
                        className={`flex flex-col gap-4 border-b px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                          isCorrect
                            ? "border-green-100 bg-green-50/70 dark:border-green-900 dark:bg-green-950/20"
                            : "border-red-100 bg-red-50/70 dark:border-red-900 dark:bg-red-950/20"
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg font-black text-white ${
                              isCorrect ? "bg-green-500" : "bg-red-500"
                            }`}
                          >
                            {isCorrect ? "&#10003;" : "&#10005;"}
                          </span>

                          <div>
                            <p className="text-xs font-black uppercase tracking-wider text-gray-400">
                              Question {questionIndex + 1}
                            </p>

                            <p
                              className={`mt-1 text-sm font-black ${
                                isCorrect
                                  ? "text-green-700 dark:text-green-300"
                                  : "text-red-700 dark:text-red-300"
                              }`}
                            >
                              {isCorrect ? "Correct Answer" : "Incorrect Answer"}
                            </p>
                          </div>
                        </div>

                        <span
                          className={`rounded-full px-4 py-2 text-xs font-black ${
                            isCorrect
                              ? "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300"
                          }`}
                        >
                          {isCorrect ? "CORRECT" : "INCORRECT"}
                        </span>
                      </div>

                      <div className="p-6 sm:p-7">
                        <h3 className="text-lg font-bold leading-8 text-gray-900 dark:text-white">
                          {question.question}
                        </h3>

                        <div className="mt-6 grid gap-4 lg:grid-cols-2">

                          {/* Your answer */}
                          <div
                            className={`rounded-2xl border p-5 ${
                              isCorrect
                                ? "border-green-200 bg-green-50/70 dark:border-green-900 dark:bg-green-950/20"
                                : "border-red-200 bg-red-50/70 dark:border-red-900 dark:bg-red-950/20"
                            }`}
                          >
                            <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                              Your Answer
                            </p>

                            <p className="mt-3 text-sm font-bold leading-6 text-gray-900 dark:text-white">
                              {userAnswer !== undefined
                                ? `${getOptionLetter(userAnswer)}. ${question.options[userAnswer]}`
                                : "Not answered"}
                            </p>
                          </div>

                          {/* Correct answer */}
                          <div className="rounded-2xl border border-green-200 bg-green-50/70 p-5 dark:border-green-900 dark:bg-green-950/20">
                            <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                              Correct Answer
                            </p>

                            <p className="mt-3 text-sm font-bold leading-6 text-gray-900 dark:text-white">
                              {getOptionLetter(question.answer)}.{" "}
                              {question.options[question.answer]}
                            </p>
                          </div>

                        </div>

                        {/* Explanation */}
                        <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900 dark:bg-blue-950/20">
                          <div className="flex items-start gap-3">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-sm font-black text-white">
                              i
                            </span>

                            <div>
                              <p className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                                Explanation
                              </p>

                              <p className="mt-2 text-sm leading-7 text-gray-700 dark:text-gray-300">
                                {question.explanation}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            {/* ==================== BOTTOM RESULT ==================== */}
            <section className="mt-10 rounded-[2rem] border border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 p-7 text-center shadow-lg dark:border-gray-800 dark:from-gray-900 dark:to-blue-950/20">
              <p className="text-sm font-bold text-gray-500 dark:text-gray-400">
                Python Development Course Completion Assessment
              </p>

              <p className="mt-2 text-2xl font-black text-gray-900 dark:text-white">
                {passed
                  ? "Great work. Your assessment is complete."
                  : "Review your answers and try again."}
              </p>

              <button
                type="button"
                onClick={retakeExam}
                className="mt-5 rounded-2xl bg-gray-900 px-7 py-3 font-black text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
              >
                Retake Exam
              </button>
            </section>
          </>
        )}

      </div>
    </div>
  );
}
