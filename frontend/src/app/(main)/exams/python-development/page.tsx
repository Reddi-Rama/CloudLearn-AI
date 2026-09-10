"use client";

import { useState } from "react";
import type { ReactNode } from "react";

import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Trophy,
  XCircle,
} from "lucide-react";


type Question = {
  id: number;
  question: string;
  code?: string;
  options: string[];
  answer: number;
};


const questions: Question[] = [
  {
    id: 1,
    question: "What is the output?",
    code: `x = [1, 2, 3]
y = x
z = x.copy()

y.append(4)
z.append(5)

print(x)
print(y)
print(z)`,
    options: [
      "[1, 2, 3] / [1, 2, 3, 4] / [1, 2, 3, 5]",
      "[1, 2, 3, 4] / [1, 2, 3, 4] / [1, 2, 3, 5]",
      "[1, 2, 3, 4, 5] / [1, 2, 3, 4] / [1, 2, 3, 5]",
      "Error",
    ],
    answer: 1,
  },

  {
    id: 2,
    question:
      "Which keyword is used to create an anonymous function in Python?",
    options: [
      "func",
      "lambda",
      "anonymous",
      "def",
    ],
    answer: 1,
  },

  {
    id: 3,
    question: "What is the output?",
    code: `def outer(x):
    def inner(y):
        return x + y
    return inner

f = outer(10)

print(f(5))
print(f(20))`,
    options: [
      "5 and 20",
      "10 and 10",
      "15 and 30",
      "Error",
    ],
    answer: 2,
  },

  {
    id: 4,
    question: "Which of the following is immutable?",
    options: [
      "List",
      "Dictionary",
      "Set",
      "Tuple",
    ],
    answer: 3,
  },

  {
    id: 5,
    question: "What is the output?",
    code: `numbers = [1, 2, 3, 4]

result = list(
    map(
        lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, numbers)
    )
)

print(result)`,
    options: [
      "[1, 4, 9, 16]",
      "[2, 4]",
      "[4, 16]",
      "[1, 9]",
    ],
    answer: 2,
  },

  {
    id: 6,
    question:
      "Which statement is used to handle exceptions in Python?",
    options: [
      "try-except",
      "check-catch",
      "error-handle",
      "exception-handle",
    ],
    answer: 0,
  },

  {
    id: 7,
    question: "What is the output?",
    code: `def func(value, result=[]):
    result.append(value)
    return result

print(func(1))
print(func(2))
print(func(3))`,
    options: [
      "[1] / [2] / [3]",
      "[1] / [1, 2] / [1, 2, 3]",
      "[1, 2, 3] / [1, 2, 3] / [1, 2, 3]",
      "Error",
    ],
    answer: 1,
  },

  {
    id: 8,
    question:
      "What does len() return when applied to a dictionary?",
    options: [
      "Sum of its values",
      "Number of key-value pairs",
      "Number of characters in its values",
      "Memory occupied by the dictionary",
    ],
    answer: 1,
  },

  {
    id: 9,
    question: "What is the output?",
    code: `x = [1, 2, 3, 4, 5]

print(x[1:-1:2])`,
    options: [
      "[1, 3, 5]",
      "[2, 4]",
      "[2, 3, 4]",
      "[1, 3]",
    ],
    answer: 1,
  },

  {
    id: 10,
    question: "What is the output?",
    code: `def mystery(n):
    if n <= 1:
        return n

    return mystery(n - 1) + mystery(n - 2)

print(mystery(6))`,
    options: [
      "5",
      "8",
      "13",
      "21",
    ],
    answer: 1,
  },

  {
    id: 11,
    question: "A Python variable:",
    options: [
      "Must be declared with its data type before use",
      "Can refer to objects of different types during execution",
      "Permanently belongs to one data type",
      "Can store only primitive values",
    ],
    answer: 1,
  },

  {
    id: 12,
    question: "What is the output?",
    code: `data = {
    "a": 1,
    "b": 2,
    "c": 3
}

result = {
    k: v * 2
    for k, v in data.items()
    if v % 2 != 0
}

print(result)`,
    options: [
      "{'a': 2, 'b': 4, 'c': 6}",
      "{'a': 2, 'c': 6}",
      "{'b': 4}",
      "{'a': 1, 'c': 3}",
    ],
    answer: 1,
  },

  {
    id: 13,
    question: "What is the output?",
    code: `def func():
    for i in range(3):
        yield i

g = func()

print(next(g))
print(next(g))

for x in g:
    print(x)`,
    options: [
      "0 / 1 / 2",
      "0 / 1 / 0 / 1 / 2",
      "1 / 2",
      "Error",
    ],
    answer: 0,
  },

  {
    id: 14,
    question: "What is the output?",
    code: `x = 10

def change():
    global x
    x += 5

change()

print(x)`,
    options: [
      "10",
      "5",
      "15",
      "Error",
    ],
    answer: 2,
  },

  {
    id: 15,
    question: "What is the output?",
    code: `values = [1, 2, 3, 4]

result = [
    a + b
    for a in values
    for b in values
    if a < b
]

print(result)`,
    options: [
      "[3, 4, 5, 5, 6, 7]",
      "[3, 4, 5, 5, 6, 7, 7]",
      "[2, 3, 4, 5, 6, 7]",
      "[3, 5, 7]",
    ],
    answer: 0,
  },

  {
    id: 16,
    question:
      "Which approach is generally more memory-efficient when processing a very large sequence one item at a time?",
    options: [
      "List comprehension",
      "Tuple conversion",
      "Generator expression",
      "Dictionary comprehension",
    ],
    answer: 2,
  },

  {
    id: 17,
    question: "What is the output?",
    code: `def outer():
    x = 10

    def inner():
        nonlocal x
        x += 5

    inner()
    return x

print(outer())`,
    options: [
      "10",
      "15",
      "5",
      "Error",
    ],
    answer: 1,
  },

  {
    id: 18,
    question: "What is the output?",
    code: `a = [1, 2, [3, 4]]

b = a.copy()

b[2].append(5)

print(a)
print(b)`,
    options: [
      "[1, 2, [3, 4]] / [1, 2, [3, 4, 5]]",
      "[1, 2, [3, 4, 5]] / [1, 2, [3, 4, 5]]",
      "[1, 2, 5] / [1, 2, 5]",
      "Error",
    ],
    answer: 1,
  },

  {
    id: 19,
    question: "What is the output?",
    code: `x = [1, 2, 3]

result = [
    x[i] * x[i + 1]
    for i in range(len(x) - 1)
]

print(result)`,
    options: [
      "[1, 4, 9]",
      "[2, 6]",
      "[1, 2, 3]",
      "[2, 3]",
    ],
    answer: 1,
  },

  {
    id: 20,
    question: "What is the output?",
    code: `def f(x):
    try:
        return 10 // x
    except ZeroDivisionError:
        return -1
    finally:
        print("Finished")

print(f(2))`,
    options: [
      "5 / Finished",
      "Finished / 5",
      "5",
      "Error",
    ],
    answer: 1,
  },

  {
    id: 21,
    question: "What is the output?",
    code: `x = [1, 2, 3]

result = (
    lambda a: [
        i * 2
        for i in a
        if i % 2
    ]
)(x)

print(result)`,
    options: [
      "[2, 4, 6]",
      "[1, 3]",
      "[2, 6]",
      "[1, 2, 3]",
    ],
    answer: 2,
  },

  {
    id: 22,
    question: "What is the output?",
    code: `x = [1, 2, 3]

for i in x:
    x.append(i + 3)
    if len(x) > 6:
        break

print(x)`,
    options: [
      "[1, 2, 3, 4, 5, 6]",
      "[1, 2, 3, 4]",
      "[1, 2, 3, 4, 5, 6, 7]",
      "Infinite loop",
    ],
    answer: 2,
  },

  {
    id: 23,
    question: "What is the output?",
    code: `def create_functions():
    functions = []

    for i in range(5):
        functions.append(lambda: i)

    return functions

functions = create_functions()

print([f() for f in functions])`,
    options: [
      "[0, 1, 2, 3, 4]",
      "[4, 4, 4, 4, 4]",
      "[0, 0, 0, 0, 0]",
      "Error",
    ],
    answer: 1,
  },

  {
    id: 24,
    question: "What is the output?",
    code: `a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

print(a & b)`,
    options: [
      "{1, 2, 5, 6}",
      "{1, 2, 3, 4, 5, 6}",
      "{3, 4}",
      "{}",
    ],
    answer: 2,
  },

  {
    id: 25,
    question: "What is the output?",
    code: `def calculate(x, y=[]):
    y.append(x)
    return sum(y)

a = calculate(10)
b = calculate(20)
c = calculate(30)

print(a, b, c)`,
    options: [
      "10 20 30",
      "10 30 60",
      "10 30 50",
      "60 60 60",
    ],
    answer: 1,
  },
];


export default function PythonDevelopmentExamPage() {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const question = questions[currentQuestion];

  let score = 0;

  for (const item of questions) {
    if (answers[item.id] === item.answer) {
      score++;
    }
  }

  const percentage = Math.round(
    (score / questions.length) * 100
  );

  const passed = percentage >= 70;

  function selectAnswer(optionIndex: number) {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: optionIndex,
    }));
  }

  function previousQuestion() {
    setCurrentQuestion((previous) =>
      Math.max(previous - 1, 0)
    );
  }

  function nextQuestion() {
    setCurrentQuestion((previous) =>
      Math.min(previous + 1, questions.length - 1)
    );
  }

  function submitExam() {
    setSubmitted(true);
  }

  function restartExam() {
    setStarted(false);
    setCurrentQuestion(0);
    setAnswers({});
    setSubmitted(false);
  }


  /* ==========================================================
     START
  ========================================================== */

  if (!started) {
    return (
      <main className="min-h-screen px-5 pb-20 pt-32">
        <div className="mx-auto max-w-5xl">

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">

            <div className="bg-gradient-to-r from-sky-600 to-indigo-600 px-8 py-14 text-white md:px-12">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">
                <Trophy size={32} />
              </div>

              <p className="mt-6 text-sm font-bold uppercase tracking-wider text-sky-100">
                Course Completion Assessment
              </p>

              <h1 className="mt-3 text-3xl font-black md:text-5xl">
                Python Development
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-sky-50 md:text-lg">
                Test your understanding of the concepts covered throughout the Python Development course.
              </p>

            </div>


            <div className="p-8 md:p-12">

              <div className="grid gap-4 sm:grid-cols-3">

                <InfoCard
                  icon={<Trophy size={20} />}
                  title="Questions"
                  value="25"
                />

                <InfoCard
                  icon={<CheckCircle2 size={20} />}
                  title="Passing Score"
                  value="70%"
                />

                <InfoCard
                  icon={<CheckCircle2 size={20} />}
                  title="Question Type"
                  value="Multiple Choice"
                />

              </div>


              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Before you begin
                </h2>

                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  There are 25 multiple-choice questions.
                  You need at least 18 correct answers to
                  achieve the 70% passing score.
                </p>

              </div>


              <button
                type="button"
                onClick={() => setStarted(true)}
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5"
              >
                Start Assessment
                <ChevronRight size={20} />
              </button>

            </div>

          </div>

        </div>
      </main>
    );
  }


  /* ==========================================================
     RESULT
  ========================================================== */

  if (submitted) {
    return (
      <main className="min-h-screen px-5 pb-20 pt-32">
        <div className="mx-auto max-w-3xl">

          <div
            className={`rounded-[32px] border p-8 text-center shadow-xl md:p-12 ${
              passed
                ? "border-emerald-200 bg-emerald-50 dark:border-emerald-800 dark:bg-emerald-950/40"
                : "border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-950/40"
            }`}
          >

            <div
              className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${
                passed
                  ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-300"
                  : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300"
              }`}
            >
              {passed ? (
                <Trophy size={46} />
              ) : (
                <XCircle size={46} />
              )}
            </div>


            <p className="mt-7 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Assessment Result
            </p>


            <h1
              className={`mt-3 text-5xl font-black ${
                passed
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {passed ? "PASSED" : "NOT PASSED"}
            </h1>


            <div className="mx-auto mt-8 max-w-sm rounded-3xl bg-white p-8 shadow-lg dark:bg-slate-900">

              <div className="text-6xl font-black text-slate-900 dark:text-white">
                {percentage}%
              </div>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                {score} out of {questions.length} correct
              </p>

            </div>


            <p className="mx-auto mt-7 max-w-xl leading-7 text-slate-600 dark:text-slate-300">
              {passed
                ? "Congratulations! You have successfully passed the Python Development Course Completion Assessment."
                : "You did not reach the required passing score of 70%. Review the course material and try again."}
            </p>


            <button
              type="button"
              onClick={restartExam}
              className="mt-8 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5"
            >
              {passed ? "Take Assessment Again" : "Retry Assessment"}
            </button>

          </div>

        </div>
      </main>
    );
  }


  /* ==========================================================
     EXAM
  ========================================================== */

  return (
    <main className="min-h-screen px-4 pb-20 pt-28">
      <div className="mx-auto max-w-6xl">

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="text-sm font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              Python Development
            </p>

            <h1 className="mt-2 text-2xl font-black text-slate-900 dark:text-white md:text-3xl">
              Course Completion Assessment
            </h1>

          </div>


          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-900">

            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Question
            </span>

            <span className="ml-2 font-black text-slate-900 dark:text-white">
              {currentQuestion + 1} / {questions.length}
            </span>

          </div>

        </div>


        <div className="mb-8 h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">

          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 transition-all"
            style={{
              width: `${((currentQuestion + 1) / questions.length) * 100}%`,
            }}
          />

        </div>


        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900 md:p-10">

          <div className="flex items-center justify-between">

            <span className="rounded-full bg-sky-50 px-4 py-2 text-sm font-bold text-sky-600 dark:bg-sky-950 dark:text-sky-400">
              Question {question.id}
            </span>

            <span className="text-sm font-semibold text-slate-400">
              {Object.keys(answers).length} answered
            </span>

          </div>


          <h2 className="mt-8 text-2xl font-extrabold leading-tight text-slate-900 dark:text-white md:text-3xl">
            {question.question}
          </h2>


          {question.code && (
            <pre className="mt-7 overflow-x-auto rounded-2xl border border-slate-700 bg-slate-950 p-5 text-sm leading-7 text-slate-100 md:text-base">
              <code>{question.code}</code>
            </pre>
          )}


          <div className="mt-8 space-y-4">

            {question.options.map((option, index) => {
              const selected =
                answers[question.id] === index;

              return (
                <button
                  key={index}
                  type="button"
                  onClick={() => selectAnswer(index)}
                  className={`flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition ${
                    selected
                      ? "border-sky-500 bg-sky-50 dark:border-sky-500 dark:bg-sky-950/50"
                      : "border-slate-200 bg-white hover:border-sky-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-600 dark:hover:bg-slate-800"
                  }`}
                >

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-black ${
                      selected
                        ? "bg-sky-600 text-white"
                        : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>


                  <span
                    className={`pt-1 text-base leading-7 ${
                      selected
                        ? "font-semibold text-sky-900 dark:text-sky-100"
                        : "text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    {option}
                  </span>

                </button>
              );
            })}

          </div>


          <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-7 dark:border-slate-700 sm:flex-row sm:justify-between">

            <button
              type="button"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <ChevronLeft size={19} />
              Previous
            </button>


            {currentQuestion < questions.length - 1 ? (
              <button
                type="button"
                onClick={nextQuestion}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-600 to-indigo-600 px-6 py-3.5 font-bold text-white shadow-lg"
              >
                Next
                <ChevronRight size={19} />
              </button>
            ) : (
              <button
                type="button"
                onClick={submitExam}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-600 px-7 py-3.5 font-bold text-white shadow-lg"
              >
                Submit Assessment
                <CheckCircle2 size={19} />
              </button>
            )}

          </div>

        </div>


        <div className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-700 dark:bg-slate-900">

          <p className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Questions
          </p>


          <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-10">

            {questions.map((item, index) => {
              const answered =
                answers[item.id] !== undefined;

              const active =
                index === currentQuestion;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() =>
                    setCurrentQuestion(index)
                  }
                  className={`flex h-11 items-center justify-center rounded-xl border text-sm font-bold ${
                    active
                      ? "border-sky-500 bg-sky-600 text-white"
                      : answered
                        ? "border-emerald-300 bg-emerald-50 text-emerald-700 dark:border-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"
                        : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                  }`}
                >
                  {item.id}
                </button>
              );
            })}

          </div>

        </div>

      </div>
    </main>
  );
}


function InfoCard({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-800">

      <div className="flex items-center gap-3 text-sky-600 dark:text-sky-400">
        {icon}

        <span className="text-sm font-bold">
          {title}
        </span>
      </div>

      <p className="mt-3 text-xl font-black text-slate-900 dark:text-white">
        {value}
      </p>

    </div>
  );
}