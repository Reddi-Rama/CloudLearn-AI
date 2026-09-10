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
    question: "Which keyword is used to define a function in Python?",
    options: ["function", "def", "func", "define"],
    answer: 1,
    explanation:
      "The `def` keyword is used to define a function in Python."
  },
  {
    id: 2,
    question: "Which of the following is used to create a list in Python?",
    options: ["{}", "[]", "()", "<>"],
    answer: 1,
    explanation:
      "Square brackets `[]` are used to create a list in Python."
  },
  {
    id: 3,
    question: "Which data type is immutable in Python?",
    options: ["List", "Set", "Tuple", "Dictionary"],
    answer: 2,
    explanation:
      "A tuple is immutable, which means its elements cannot be changed after creation."
  },
  {
    id: 4,
    question: "Which function is used to get the length of an object in Python?",
    options: ["size()", "count()", "length()", "len()"],
    answer: 3,
    explanation:
      "Python provides the built-in `len()` function to determine the number of elements in an object."
  },
  {
    id: 5,
    question: "Which symbol is used for a single-line comment in Python?",
    options: ["//", "/*", "#", "--"],
    answer: 2,
    explanation:
      "The `#` symbol is used for single-line comments in Python."
  },
  {
    id: 6,
    question: "Which of the following is a valid Python variable name?",
    options: ["student_name", "2student", "student-name", "class"],
    answer: 0,
    explanation:
      "`student_name` is valid because it starts with a letter and uses an underscore."
  },
  {
    id: 7,
    question: "Which loop is commonly used to iterate over a sequence in Python?",
    options: ["repeat", "for", "loop", "iterate"],
    answer: 1,
    explanation:
      "The `for` loop is commonly used to iterate over sequences such as lists, strings, and tuples."
  },
  {
    id: 8,
    question: "Which keyword is used to handle exceptions in Python?",
    options: ["catch", "try", "error", "handle"],
    answer: 1,
    explanation:
      "Python uses `try` together with `except` to handle exceptions."
  },
  {
    id: 9,
    question: "Which collection stores key-value pairs?",
    options: ["List", "Dictionary", "Tuple", "Set"],
    answer: 1,
    explanation:
      "A dictionary stores data as key-value pairs."
  },
  {
    id: 10,
    question: "Which operator is used for exponentiation in Python?",
    options: ["^", "**", "//", "%%"],
    answer: 1,
    explanation:
      "The `**` operator is used for exponentiation in Python."
  },
  {
    id: 11,
    question: "Which function is used to display output in Python?",
    options: ["echo()", "display()", "print()", "show()"],
    answer: 2,
    explanation:
      "The built-in `print()` function displays output on the console."
  },
  {
    id: 12,
    question: "Which keyword is used to import a module?",
    options: ["include", "import", "require", "using"],
    answer: 1,
    explanation:
      "The `import` keyword is used to import modules in Python."
  },
  {
    id: 13,
    question: "Which of the following is a Boolean value in Python?",
    options: ["True", "true", "TRUE", "1"],
    answer: 0,
    explanation:
      "Python Boolean values are `True` and `False`, with the first letter capitalized."
  },
  {
    id: 14,
    question: "Which operator performs floor division in Python?",
    options: ["/", "%", "//", "div"],
    answer: 2,
    explanation:
      "The `//` operator performs floor division."
  },
  {
    id: 15,
    question: "Which of the following is used to define a class in Python?",
    options: ["class", "Class", "struct", "object"],
    answer: 0,
    explanation:
      "The `class` keyword is used to define a class in Python."
  },
  {
    id: 16,
    question: "Which method adds an element to the end of a list?",
    options: ["add()", "insert()", "append()", "push()"],
    answer: 2,
    explanation:
      "The `append()` method adds an element to the end of a list."
  },
  {
    id: 17,
    question: "Which statement is used to stop a loop immediately?",
    options: ["stop", "break", "exit", "return"],
    answer: 1,
    explanation:
      "The `break` statement immediately terminates the current loop."
  },
  {
    id: 18,
    question: "Which statement skips the current iteration of a loop?",
    options: ["skip", "continue", "pass", "next"],
    answer: 1,
    explanation:
      "The `continue` statement skips the remaining code in the current iteration and moves to the next iteration."
  },
  {
    id: 19,
    question: "Which Python type is used to store unique unordered values?",
    options: ["List", "Set", "Tuple", "Dictionary"],
    answer: 1,
    explanation:
      "A set stores unique values and does not maintain duplicates."
  },
  {
    id: 20,
    question: "Which function converts a string into an integer?",
    options: ["str()", "int()", "float()", "number()"],
    answer: 1,
    explanation:
      "The `int()` function converts a suitable value to an integer."
  },
  {
    id: 21,
    question: "Which library is widely used for numerical computing in Python?",
    options: ["Django", "Flask", "NumPy", "Tkinter"],
    answer: 2,
    explanation:
      "NumPy is widely used for numerical computing and array operations in Python."
  },
  {
    id: 22,
    question: "Which library is commonly used for data analysis in Python?",
    options: ["TensorFlow", "Pandas", "OpenCV", "Pygame"],
    answer: 1,
    explanation:
      "Pandas is commonly used for data manipulation and analysis."
  },
  {
    id: 23,
    question: "Which keyword is used when a function does not return a value explicitly?",
    options: ["null", "None", "void", "empty"],
    answer: 1,
    explanation:
      "A Python function that does not explicitly return a value returns `None`."
  },
  {
    id: 24,
    question: "Which block is used with `try` to catch an exception?",
    options: ["catch", "handle", "except", "error"],
    answer: 2,
    explanation:
      "The `except` block is used to catch exceptions raised inside a `try` block."
  },
  {
    id: 25,
    question: "Which file extension is normally used for Python source files?",
    options: [".java", ".py", ".cpp", ".js"],
    answer: 1,
    explanation:
      "Python source code files normally use the `.py` extension."
  }
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
    <div className="min-h-screen px-4 py-8">
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
