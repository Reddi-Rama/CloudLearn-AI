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
    <div className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32">

      {/* BEAUTIFUL TECHNICAL BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-3xl" />

        <div className="absolute -right-40 top-32 h-[500px] w-[500px] rounded-full bg-violet-500/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

      </div>

      <div className="mx-auto max-w-7xl">

        {!submitted ? (
          <>

            {/* ================================================= */}
            {/* EXAM HEADER                                      */}
            {/* ================================================= */}

            <section className="mb-6 overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/95">

              <div className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-700 px-6 py-7 text-white sm:px-9">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                  <div>

                    <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-widest backdrop-blur">
                      CloudLearn Assessment
                    </span>

                    <h1 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                      Python Development
                    </h1>

                    <p className="mt-2 text-blue-100">
                      Course Completion Assessment
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/20 bg-white/10 px-7 py-5 text-center backdrop-blur">

                    <p className="text-xs font-bold uppercase tracking-widest text-blue-100">
                      Passing Score
                    </p>

                    <p className="mt-1 text-4xl font-black">
                      70%
                    </p>

                    <p className="mt-1 text-xs text-blue-100">
                      {PASS_MARK} / {questions.length} required
                    </p>

                  </div>

                </div>

              </div>

              {/* PROGRESS BAR */}

              <div className="px-6 py-5 sm:px-9">

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                      Assessment Progress
                    </p>

                    <p className="mt-1 font-bold text-gray-900 dark:text-white">
                      Question {currentQuestionIndex + 1} of {questions.length}
                    </p>

                  </div>

                  <p className="text-xl font-black text-blue-600 dark:text-blue-400">
                    {Math.round(
                      ((currentQuestionIndex + 1) / questions.length) * 100
                    )}%
                  </p>

                </div>

                <div className="mt-4 h-3 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 transition-all duration-500"
                    style={{
                      width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                    }}
                  />

                </div>

              </div>

            </section>

            {/* ================================================= */}
            {/* CISCO STYLE TWO COLUMN LAYOUT                    */}
            {/* ================================================= */}

            <div className="grid gap-6 lg:grid-cols-[250px_minmax(0,1fr)]">

              {/* QUESTION NAVIGATION */}

              <aside className="h-fit rounded-[2rem] border border-white/70 bg-white/95 p-5 shadow-xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/95">

                <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                  Assessment
                </p>

                <h2 className="mt-1 text-lg font-black text-gray-900 dark:text-white">
                  Questions
                </h2>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {answeredCount} of {questions.length} answered
                </p>

                <div className="mt-5 grid grid-cols-5 gap-2">

                  {questions.map((question, index) => {

                    const answered =
                      selectedAnswers[question.id] !== undefined;

                    const active =
                      index === currentQuestionIndex;

                    const accessible =
                      index <= currentQuestionIndex || answered;

                    return (
                      <button
                        key={question.id}
                        type="button"
                        disabled={!accessible}
                        onClick={() => {

                          if (!accessible) return;

                          setCurrentQuestionIndex(index);

                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });

                        }}
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-xs font-black transition-all ${
                          active
                            ? "scale-105 bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/30"
                            : answered
                              ? "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
                              : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                        } ${
                          !accessible
                            ? "cursor-not-allowed opacity-60"
                            : "hover:-translate-y-0.5"
                        }`}
                      >
                        {index + 1}
                      </button>
                    );

                  })}

                </div>

                <div className="mt-6 border-t border-gray-100 pt-5 dark:border-gray-800">

                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <span className="h-3 w-3 rounded bg-gradient-to-br from-blue-600 to-violet-600" />
                    Current
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <span className="h-3 w-3 rounded bg-blue-100 dark:bg-blue-950/50" />
                    Answered
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-gray-500">
                    <span className="h-3 w-3 rounded bg-gray-100 dark:bg-gray-800" />
                    Locked
                  </div>

                </div>

              </aside>

              {/* ================================================= */}
              {/* CURRENT QUESTION                                 */}
              {/* ================================================= */}

              <main>

                <section className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-gray-700 dark:bg-gray-900/95">

                  {/* QUESTION HEADER */}

                  <div className="border-b border-gray-100 bg-gray-50/80 px-6 py-6 dark:border-gray-800 dark:bg-gray-800/50 sm:px-9">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-4">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl font-black text-white shadow-lg">
                          {currentQuestionIndex + 1}
                        </div>

                        <div>

                          <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                            Question
                          </p>

                          <p className="font-bold text-gray-900 dark:text-white">
                            {currentQuestionIndex + 1} / {questions.length}
                          </p>

                        </div>

                      </div>

                      {selectedAnswers[currentQuestion.id] !== undefined && (
                        <div className="rounded-full bg-green-50 px-4 py-2 text-xs font-black text-green-700 dark:bg-green-950/40 dark:text-green-300">
                          Saved
                        </div>
                      )}

                    </div>

                  </div>

                  {/* QUESTION BODY */}

                  <div className="p-6 sm:p-9">

                    <h2 className="whitespace-pre-line text-xl font-black leading-9 text-gray-900 dark:text-white sm:text-2xl">
                      {currentQuestion.question}
                    </h2>

                    {/* OPTIONS */}

                    <div className="mt-8 space-y-4">

                      {currentQuestion.options.map((option, optionIndex) => {

                        const selected =
                          selectedAnswers[currentQuestion.id] === optionIndex;

                        return (
                          <button
                            key={optionIndex}
                            type="button"
                            onClick={() =>
                              selectAnswer(
                                currentQuestion.id,
                                optionIndex
                              )
                            }
                            className={`group flex w-full items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-200 ${
                              selected
                                ? "border-blue-500 bg-blue-50 shadow-lg shadow-blue-500/10 dark:border-blue-400 dark:bg-blue-950/30"
                                : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-700"
                            }`}
                          >

                            <span
                              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 text-sm font-black ${
                                selected
                                  ? "border-blue-500 bg-blue-500 text-white"
                                  : "border-gray-200 bg-gray-50 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                              }`}
                            >
                              {getOptionLetter(optionIndex)}
                            </span>

                            <span
                              className={`flex-1 whitespace-pre-line text-sm font-semibold leading-7 sm:text-base ${
                                selected
                                  ? "text-blue-900 dark:text-blue-100"
                                  : "text-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {option}
                            </span>

                            {selected && (
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-sm font-black text-white">
                                {"\u2713"}
                              </span>
                            )}

                          </button>
                        );

                      })}

                    </div>

                    {/* NAVIGATION */}

                    <div className="mt-10 flex flex-col gap-3 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-gray-800">

                      <button
                        type="button"
                        onClick={goPrevious}
                        disabled={currentQuestionIndex === 0}
                        className="rounded-2xl border-2 border-gray-200 px-6 py-3 font-black text-gray-700 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
                      >
                        {"\u2190"} Previous
                      </button>

                      <p className="text-center text-xs font-bold text-gray-400">
                        Select an answer to continue
                      </p>

                      <button
                        type="button"
                        onClick={goNext}
                        disabled={
                          selectedAnswers[currentQuestion.id] === undefined
                        }
                        className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-black text-white shadow-lg shadow-blue-500/20 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-40"
                      >
                        {currentQuestionIndex === questions.length - 1
                          ? "Submit Assessment"
                          : "Save & Next"}

                        <span className="ml-2">
                          {"\u2192"}
                        </span>
                      </button>

                    </div>

                  </div>

                </section>

              </main>

            </div>

          </>
        ) : (

          /* ===================================================== */
          /*                    RESULT PAGE                       */
          /* ===================================================== */

          <>

            <section
              className={`relative overflow-hidden rounded-[2.5rem] border shadow-2xl ${
                passed
                  ? "border-green-200 bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:border-green-900 dark:from-green-950/40 dark:via-gray-900 dark:to-emerald-950/20"
                  : "border-orange-200 bg-gradient-to-br from-orange-50 via-white to-red-50 dark:border-orange-900 dark:from-orange-950/30 dark:via-gray-900 dark:to-red-950/20"
              }`}
            >

              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

              <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

              <div className="relative px-6 py-14 text-center sm:px-10 sm:py-16">

                {/* STATUS ICON */}

                <div
                  className={`mx-auto flex h-28 w-28 items-center justify-center rounded-full text-5xl font-black text-white shadow-2xl ${
                    passed
                      ? "bg-gradient-to-br from-green-400 to-emerald-600 shadow-green-500/30"
                      : "bg-gradient-to-br from-orange-400 to-red-500 shadow-orange-500/30"
                  }`}
                >
                  {passed ? "\u2713" : "!"}
                </div>

                <p
                  className={`mt-8 text-sm font-black uppercase tracking-[0.3em] ${
                    passed
                      ? "text-green-600 dark:text-green-400"
                      : "text-orange-600 dark:text-orange-400"
                  }`}
                >
                  {passed
                    ? "Assessment Passed"
                    : "Assessment Not Passed"}
                </p>

                <h1 className="mt-3 text-3xl font-black tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                  {passed
                    ? "Congratulations! You did it."
                    : "Keep learning and try again."}
                </h1>

                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  Python Development Course Completion Assessment
                </p>

                {/* SCORE CIRCLE */}

                <div className="mx-auto mt-10 flex h-56 w-56 flex-col items-center justify-center rounded-full border-[12px] border-white bg-white shadow-2xl dark:border-gray-800 dark:bg-gray-900">

                  <span
                    className={`text-6xl font-black ${
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

                <p className="mt-6 text-lg font-bold text-gray-700 dark:text-gray-300">
                  {score} / {questions.length} correct answers
                </p>

                <div
                  className={`mx-auto mt-5 inline-flex rounded-full px-6 py-3 text-sm font-black ${
                    passed
                      ? "bg-green-100 text-green-700 dark:bg-green-950/60 dark:text-green-300"
                      : "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300"
                  }`}
                >
                  {passed
                    ? "\u2713 PASS — 70% REQUIRED"
                    : "\u2715 NOT PASSED — 70% REQUIRED"}
                </div>

              </div>

            </section>

            {/* RESULT STATISTICS */}

            <div className="mt-6 grid gap-4 sm:grid-cols-3">

              <div className="rounded-3xl border border-green-200 bg-white p-7 text-center shadow-xl dark:border-green-900 dark:bg-gray-900">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500 text-xl font-black text-white">
                  {"\u2713"}
                </div>

                <p className="mt-4 text-4xl font-black text-green-600 dark:text-green-400">
                  {score}
                </p>

                <p className="mt-1 text-sm font-bold text-gray-500">
                  Correct Answers
                </p>

              </div>

              <div className="rounded-3xl border border-red-200 bg-white p-7 text-center shadow-xl dark:border-red-900 dark:bg-gray-900">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500 text-xl font-black text-white">
                  {"\u2715"}
                </div>

                <p className="mt-4 text-4xl font-black text-red-600 dark:text-red-400">
                  {questions.length - score}
                </p>

                <p className="mt-1 text-sm font-bold text-gray-500">
                  Incorrect Answers
                </p>

              </div>

              <div className="rounded-3xl border border-blue-200 bg-white p-7 text-center shadow-xl dark:border-blue-900 dark:bg-gray-900">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500 text-xl font-black text-white">
                  {PASS_MARK}
                </div>

                <p className="mt-4 text-4xl font-black text-blue-600 dark:text-blue-400">
                  {PASS_MARK}/{questions.length}
                </p>

                <p className="mt-1 text-sm font-bold text-gray-500">
                  Required to Pass
                </p>

              </div>

            </div>

            {/* PERFORMANCE */}

            <section className="mt-6 rounded-[2rem] border border-gray-200 bg-white p-7 shadow-xl dark:border-gray-800 dark:bg-gray-900 sm:p-8">

              <div className="flex items-end justify-between">

                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                    Performance
                  </p>

                  <h2 className="mt-1 text-2xl font-black text-gray-900 dark:text-white">
                    Overall Result
                  </h2>
                </div>

                <p className="text-3xl font-black text-blue-600 dark:text-blue-400">
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
                <span>70% Passing</span>
                <span>100%</span>
              </div>

            </section>

            {/* ACTIONS */}

            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("answer-review")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-8 py-4 font-black text-white shadow-xl shadow-blue-500/20 transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Review Your Answers
                <span className="ml-2">
                  {"\u2193"}
                </span>
              </button>

              <button
                type="button"
                onClick={retakeExam}
                className="rounded-2xl border-2 border-gray-200 bg-white px-8 py-4 font-black text-gray-800 shadow-lg transition hover:-translate-y-0.5 hover:border-blue-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
              >
                Retake Exam
              </button>

            </div>

            {/* ANSWER REVIEW */}

            <section id="answer-review" className="mt-12">

              <div className="mb-6">

                <p className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                  Detailed Review
                </p>

                <h2 className="mt-1 text-3xl font-black text-gray-900 dark:text-white">
                  Answer Review
                </h2>

                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Review your answers, compare them with the correct answers,
                  and understand the explanation for every question.
                </p>

              </div>

              <div className="space-y-5">

                {questions.map((question, questionIndex) => {

                  const userAnswer = selectedAnswers[question.id];

                  const isCorrect =
                    userAnswer === question.answer;

                  return (
                    <article
                      key={question.id}
                      className={`overflow-hidden rounded-[2rem] border bg-white shadow-xl dark:bg-gray-900 ${
                        isCorrect
                          ? "border-green-200 dark:border-green-900"
                          : "border-red-200 dark:border-red-900"
                      }`}
                    >

                      <div
                        className={`flex flex-col gap-4 border-b px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                          isCorrect
                            ? "border-green-100 bg-green-50/70 dark:border-green-900 dark:bg-green-950/20"
                            : "border-red-100 bg-red-50/70 dark:border-red-900 dark:bg-red-950/20"
                        }`}
                      >

                        <div className="flex items-center gap-4">

                          <span
                            className={`flex h-12 w-12 items-center justify-center rounded-xl text-lg font-black text-white ${
                              isCorrect
                                ? "bg-green-500"
                                : "bg-red-500"
                            }`}
                          >
                            {isCorrect ? "\u2713" : "\u2715"}
                          </span>

                          <div>

                            <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                              Question {questionIndex + 1}
                            </p>

                            <p className="mt-1 font-black text-gray-900 dark:text-white">
                              {isCorrect ? "Correct" : "Incorrect"}
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

                        <h3 className="whitespace-pre-line text-lg font-black leading-8 text-gray-900 dark:text-white">
                          {question.question}
                        </h3>

                        <div className="mt-6 grid gap-4 lg:grid-cols-2">

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

                            <p className="mt-3 font-bold leading-7 text-gray-900 dark:text-white">
                              {userAnswer !== undefined
                                ? `${getOptionLetter(userAnswer)}. ${question.options[userAnswer]}`
                                : "Not answered"}
                            </p>

                          </div>

                          <div className="rounded-2xl border border-green-200 bg-green-50/70 p-5 dark:border-green-900 dark:bg-green-950/20">

                            <p className="text-xs font-black uppercase tracking-widest text-gray-400">
                              Correct Answer
                            </p>

                            <p className="mt-3 font-bold leading-7 text-gray-900 dark:text-white">
                              {getOptionLetter(question.answer)}.{" "}
                              {question.options[question.answer]}
                            </p>

                          </div>

                        </div>

                        <div className="mt-4 rounded-2xl border border-blue-100 bg-blue-50/70 p-5 dark:border-blue-900 dark:bg-blue-950/20">

                          <p className="text-xs font-black uppercase tracking-widest text-blue-600 dark:text-blue-400">
                            Explanation
                          </p>

                          <p className="mt-2 leading-7 text-gray-700 dark:text-gray-300">
                            {question.explanation}
                          </p>

                        </div>

                      </div>

                    </article>
                  );

                })}

              </div>

            </section>

          </>
        )}

      </div>
    </div>
  );
}