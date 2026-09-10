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
    <div className="min-h-screen bg-slate-50 px-4 pb-12 pt-28 dark:bg-slate-950">

      <div className="mx-auto max-w-7xl">

        {!submitted ? (
          <>

            {/* ================================================= */}
            {/* EXAM TOP BAR                                     */}
            {/* ================================================= */}

            <div className="mb-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

              <div className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                    CloudLearn Assessment
                  </p>

                  <h1 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                    Python Development
                  </h1>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Course Completion Assessment
                  </p>
                </div>

                <div className="flex items-center gap-3">

                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Questions
                    </p>
                    <p className="font-bold text-slate-900 dark:text-white">
                      {questions.length}
                    </p>
                  </div>

                  <div className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center dark:border-slate-700 dark:bg-slate-800">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Passing
                    </p>
                    <p className="font-bold text-blue-600 dark:text-blue-400">
                      70%
                    </p>
                  </div>

                </div>

              </div>

              {/* Progress */}

              <div className="border-t border-slate-100 px-6 py-3 dark:border-slate-800">

                <div className="flex items-center justify-between text-xs font-semibold">

                  <span className="text-slate-500 dark:text-slate-400">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </span>

                  <span className="text-blue-600 dark:text-blue-400">
                    {Math.round(
                      ((currentQuestionIndex + 1) / questions.length) * 100
                    )}%
                  </span>

                </div>

                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

                  <div
                    className="h-full rounded-full bg-blue-600 transition-all duration-300"
                    style={{
                      width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
                    }}
                  />

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* CISCO STYLE EXAM AREA                            */}
            {/* ================================================= */}

            <div className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)]">


              {/* ================================================= */}
              {/* LEFT QUESTION NAVIGATION                         */}
              {/* ================================================= */}

              <aside className="h-fit rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

                <div className="border-b border-slate-200 px-5 py-4 dark:border-slate-800">

                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Exam Questions
                  </p>

                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {answeredCount} answered
                  </p>

                </div>

                <div className="p-4">

                  <div className="grid grid-cols-5 gap-2">

                    {questions.map((question, index) => {

                      const answered =
                        selectedAnswers[question.id] !== undefined;

                      const active =
                        index === currentQuestionIndex;

                      return (
                        <button
                          key={question.id}
                          type="button"
                          onClick={() => {

                            if (
                              index <= currentQuestionIndex ||
                              answered
                            ) {

                              setCurrentQuestionIndex(index);

                              window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                              });

                            }

                          }}
                          className={`h-9 rounded-md border text-xs font-bold transition ${
                            active
                              ? "border-blue-600 bg-blue-600 text-white"
                              : answered
                                ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300"
                                : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                          }`}
                        >
                          {index + 1}
                        </button>
                      );

                    })}

                  </div>

                  <div className="mt-5 border-t border-slate-200 pt-4 dark:border-slate-800">

                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="h-3 w-3 rounded-sm bg-blue-600" />
                      Current
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                      <span className="h-3 w-3 rounded-sm bg-blue-100 dark:bg-blue-950/50" />
                      Answered
                    </div>

                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                      <span className="h-3 w-3 rounded-sm bg-slate-100 dark:bg-slate-800" />
                      Not answered
                    </div>

                  </div>

                </div>

              </aside>


              {/* ================================================= */}
              {/* QUESTION PANEL                                    */}
              {/* ================================================= */}

              <main>

                <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">

                  {/* Question heading */}

                  <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 dark:border-slate-800 dark:bg-slate-800/50">

                    <div className="flex items-center justify-between">

                      <div className="flex items-center gap-3">

                        <span className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
                          {currentQuestionIndex + 1}
                        </span>

                        <div>

                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Question
                          </p>

                          <p className="font-bold text-slate-900 dark:text-white">
                            {currentQuestionIndex + 1} of {questions.length}
                          </p>

                        </div>

                      </div>

                      {selectedAnswers[currentQuestion.id] !== undefined && (
                        <span className="rounded-md bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700 dark:bg-green-950/40 dark:text-green-300">
                          Answer Saved
                        </span>
                      )}

                    </div>

                  </div>


                  {/* Question content */}

                  <div className="px-6 py-7 sm:px-8 sm:py-9">

                    <h2 className="whitespace-pre-line text-xl font-bold leading-8 text-slate-900 dark:text-white">
                      {currentQuestion.question}
                    </h2>


                    {/* ================================================= */}
                    {/* PYTHON CODE PANEL FOR CODE QUESTIONS             */}
                    {/* ================================================= */}

                    {(
                      currentQuestion.question.includes("following code") ||
                      currentQuestion.question.includes("What is printed") ||
                      currentQuestion.question.includes("What is the output")
                    ) && (
                      <div className="mt-6 overflow-hidden rounded-lg border border-slate-700 bg-slate-900">

                        <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-2">

                          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />

                          <span className="ml-2 text-xs font-semibold text-slate-400">
                            Python
                          </span>

                        </div>

                        <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
                          <code>
{currentQuestion.id === 1
  ? `a = [1, 2, 3]
b = a
b.append(4)

print(a)
print(b)`
  : currentQuestion.id === 3
    ? `x = 10

def show():
    x = 30
    print(x)

show()`
    : currentQuestion.id === 6
      ? `x = 10

def test():
    x = 20
    print(x)

test()
print(x)`
      : currentQuestion.id === 24
        ? `x = [1, 2, 3]
y = (n for n in x)

x.append(4)

print(list(y))`
        : currentQuestion.id === 25
          ? `def outer():
    x = 10

    def inner():
        nonlocal x
        x += 5
        return x

    inner()
    return x

print(outer())`
          : "Python code for this question"}
                          </code>
                        </pre>

                      </div>
                    )}


                    {/* ANSWERS */}

                    <div className="mt-8 space-y-3">

                      <p className="mb-3 text-sm font-bold text-slate-700 dark:text-slate-300">
                        Select one answer:
                      </p>

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
                            className={`flex w-full items-center gap-4 rounded-lg border p-4 text-left transition ${
                              selected
                                ? "border-blue-600 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/30"
                                : "border-slate-200 bg-white hover:border-blue-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-600 dark:hover:bg-slate-800"
                            }`}
                          >

                            <span
                              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                                selected
                                  ? "border-blue-600 bg-blue-600 text-white"
                                  : "border-slate-300 bg-white text-slate-700 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
                              }`}
                            >
                              {getOptionLetter(optionIndex)}
                            </span>

                            <span className="whitespace-pre-line text-sm font-medium leading-6 text-slate-800 dark:text-slate-200">
                              {option}
                            </span>

                            {selected && (
                              <span className="ml-auto text-lg font-bold text-blue-600">
                                {"\u2713"}
                              </span>
                            )}

                          </button>
                        );

                      })}

                    </div>


                    {/* NAVIGATION */}

                    <div className="mt-9 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">

                      <button
                        type="button"
                        onClick={goPrevious}
                        disabled={currentQuestionIndex === 0}
                        className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                      >
                        {"\u2190"} Previous
                      </button>

                      <p className="hidden text-xs text-slate-400 sm:block">
                        Question {currentQuestionIndex + 1} of {questions.length}
                      </p>

                      <button
                        type="button"
                        onClick={goNext}
                        disabled={
                          selectedAnswers[currentQuestion.id] === undefined
                        }
                        className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
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
          /* RESULT PAGE                                          */
          /* ===================================================== */

          <>

            <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">

              <div
                className={`px-6 py-12 text-center ${
                  passed
                    ? "bg-green-50 dark:bg-green-950/20"
                    : "bg-red-50 dark:bg-red-950/20"
                }`}
              >

                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-4xl font-bold text-white ${
                    passed
                      ? "bg-green-600"
                      : "bg-red-600"
                  }`}
                >
                  {passed ? "\u2713" : "\u2715"}
                </div>

                <p
                  className={`mt-6 text-sm font-bold uppercase tracking-widest ${
                    passed
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}
                >
                  {passed
                    ? "Assessment Passed"
                    : "Assessment Not Passed"}
                </p>

                <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                  {passed
                    ? "Congratulations!"
                    : "Keep Learning and Try Again"}
                </h1>

                <p className="mt-2 text-slate-500 dark:text-slate-400">
                  Python Development Course Completion Assessment
                </p>

                {/* SCORE */}

                <div className="mx-auto mt-8 flex h-44 w-44 flex-col items-center justify-center rounded-full border-8 border-white bg-white shadow-lg dark:border-slate-800 dark:bg-slate-950">

                  <span
                    className={`text-5xl font-black ${
                      passed
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {percentage}%
                  </span>

                  <span className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    Score
                  </span>

                </div>

                <p className="mt-5 font-bold text-slate-700 dark:text-slate-300">
                  {score} / {questions.length} correct
                </p>

              </div>


              {/* RESULT STATS */}

              <div className="grid border-t border-slate-200 sm:grid-cols-3 dark:border-slate-800">

                <div className="border-b p-6 text-center sm:border-b-0 sm:border-r dark:border-slate-800">

                  <p className="text-3xl font-black text-green-600">
                    {score}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    Correct
                  </p>

                </div>

                <div className="border-b p-6 text-center sm:border-b-0 sm:border-r dark:border-slate-800">

                  <p className="text-3xl font-black text-red-600">
                    {questions.length - score}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    Incorrect
                  </p>

                </div>

                <div className="p-6 text-center">

                  <p className="text-3xl font-black text-blue-600">
                    {PASS_MARK}
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-500">
                    Required
                  </p>

                </div>

              </div>

            </section>


            {/* RESULT ACTIONS */}

            <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("answer-review")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
                className="rounded-md bg-blue-600 px-7 py-3 font-bold text-white hover:bg-blue-700"
              >
                Review Answers
              </button>

              <button
                type="button"
                onClick={retakeExam}
                className="rounded-md border border-slate-300 bg-white px-7 py-3 font-bold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
              >
                Retake Exam
              </button>

            </div>


            {/* ANSWER REVIEW */}

            <section id="answer-review" className="mt-10">

              <div className="mb-5">

                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  Detailed Review
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                  Answer Review
                </h2>

              </div>

              <div className="space-y-4">

                {questions.map((question, questionIndex) => {

                  const userAnswer =
                    selectedAnswers[question.id];

                  const isCorrect =
                    userAnswer === question.answer;

                  return (
                    <article
                      key={question.id}
                      className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
                    >

                      <div
                        className={`flex items-center justify-between border-b px-5 py-4 ${
                          isCorrect
                            ? "bg-green-50 dark:bg-green-950/20"
                            : "bg-red-50 dark:bg-red-950/20"
                        }`}
                      >

                        <div className="flex items-center gap-3">

                          <span
                            className={`flex h-9 w-9 items-center justify-center rounded-full font-bold text-white ${
                              isCorrect
                                ? "bg-green-600"
                                : "bg-red-600"
                            }`}
                          >
                            {isCorrect ? "\u2713" : "\u2715"}
                          </span>

                          <span className="font-bold text-slate-900 dark:text-white">
                            Question {questionIndex + 1}
                          </span>

                        </div>

                        <span
                          className={`text-xs font-bold ${
                            isCorrect
                              ? "text-green-700"
                              : "text-red-700"
                          }`}
                        >
                          {isCorrect ? "CORRECT" : "INCORRECT"}
                        </span>

                      </div>

                      <div className="p-6">

                        <h3 className="whitespace-pre-line font-bold leading-7 text-slate-900 dark:text-white">
                          {question.question}
                        </h3>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">

                          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">

                            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                              Your Answer
                            </p>

                            <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                              {userAnswer !== undefined
                                ? `${getOptionLetter(userAnswer)}. ${question.options[userAnswer]}`
                                : "Not answered"}
                            </p>

                          </div>

                          <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/20">

                            <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                              Correct Answer
                            </p>

                            <p className="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-200">
                              {getOptionLetter(question.answer)}.{" "}
                              {question.options[question.answer]}
                            </p>

                          </div>

                        </div>

                        <div className="mt-3 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-900 dark:bg-blue-950/20">

                          <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                            Explanation
                          </p>

                          <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
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