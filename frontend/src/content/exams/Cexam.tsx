"use client";
import { useMemo, useState } from "react";

interface Question {
  id: number;
  question: string;
  code?: string;
  options: string[];
  answer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "What is the output of the following C program?",
    code: `int a[] = {10, 20, 30, 40};
int *p = a;

printf("%d\\n", *p++);
printf("%d\\n", *++p);
printf("%d\\n", *(p - 1));`,
    options: ["10\n30\n20", "10\n20\n30", "20\n30\n20", "10\n30\n30"],
    answer: 0,
    explanation:
      "Postfix ++ dereferences the old pointer first, then advances it. After that, prefix ++ advances to the next element before dereferencing. Finally p - 1 points back to a[1].",
  },
  {
    id: 2,
    question: "What is printed by this program?",
    code: `void redirect(int **p) {
    static int x = 20;
    *p = &x;
}

int main(void) {
    int a = 5;
    int *p = &a;
    redirect(&p);
    printf("%d", *p);
}`,
    options: ["5", "20", "An address", "Compilation error"],
    answer: 1,
    explanation:
      "The function receives the address of p and changes p itself so that it points to the static variable x.",
  },
  {
    id: 3,
    question: "Which statement about these declarations is correct?",
    code: `int a[10];
int *p = a;`,
    options: [
      "a and p are both pointer variables",
      "a is an array object and p is a separate pointer object",
      "sizeof(a) is always equal to sizeof(p)",
      "p owns the storage used by a",
    ],
    answer: 1,
    explanation:
      "The array a contains ten int objects. p is a separate pointer initialized with the address of a[0].",
  },
  {
    id: 4,
    question: "What is printed?",
    code: `int x = 5;
const int *p = &x;

x = 10;

printf("%d", *p);`,
    options: ["5", "10", "Compilation error", "Undefined behavior"],
    answer: 1,
    explanation:
      "const int * prevents modification of x through p. It does not make x itself const, so x can still be changed directly.",
  },
  {
    id: 5,
    question: "What is printed by the third call?",
    code: `int counter(void) {
    static int x = 10;
    return ++x;
}

printf("%d\\n", counter());
printf("%d\\n", counter());
printf("%d\\n", counter());`,
    options: ["10", "11", "12", "13"],
    answer: 3,
    explanation:
      "The static local x retains its value between calls. The three calls return 11, 12, and 13.",
  },
  {
    id: 6,
    question: "Which declaration defines a pointer to a function that accepts two int arguments and returns int?",
    options: [
      "int *fp(int, int);",
      "int (*fp)(int, int);",
      "int (fp*)(int, int);",
      "int **fp(int, int);",
    ],
    answer: 1,
    explanation:
      "The parentheses around *fp are required to make fp a function pointer instead of a function returning int*.",
  },
  {
    id: 7,
    question: "What is printed?",
    code: `#define SQR(x) x * x

int a = 3;
printf("%d", SQR(a + 1));`,
    options: ["16", "7", "12", "4"],
    answer: 1,
    explanation:
      "The macro expands to a + 1 * a + 1, which is evaluated as 3 + 3 + 1 = 7. A safer macro would parenthesize its argument and whole expression.",
  },
  {
    id: 8,
    question: "What is the hexadecimal result?",
    code: `unsigned int x = 0x0F;
unsigned int y = 0x33;

printf("%X", x ^ y);`,
    options: ["3C", "22", "3F", "0C"],
    answer: 0,
    explanation:
      "0x0F XOR 0x33 is 0x3C because XOR produces 1 where the two corresponding bits differ.",
  },
  {
    id: 9,
    question: "Which statement about a union is correct?",
    options: [
      "Every member always has separate storage",
      "Its size is always the sum of all member sizes",
      "Its members occupy the same storage region",
      "Only its first member can be assigned",
    ],
    answer: 2,
    explanation:
      "Union members overlap in storage. The union must provide enough storage and alignment for its largest member.",
  },
  {
    id: 10,
    question: "Why does this not compare two strings by content?",
    code: `char a[] = "cloud";
char b[] = "cloud";

if (a == b)
    printf("same");
else
    printf("different");`,
    options: [
      "Arrays cannot store strings",
      "The compiler compares every character automatically",
      "The arrays decay to pointers and the pointer values are compared",
      "Pointers cannot be compared in C",
    ],
    answer: 2,
    explanation:
      "In the comparison, a and b decay to pointers to their first elements. Their addresses are compared, not their character sequences.",
  },
  {
    id: 11,
    question: "What is the main danger in assigning realloc directly to p?",
    code: `int *p = malloc(20 * sizeof *p);
p = realloc(p, 100 * sizeof *p);`,
    options: [
      "realloc cannot increase an allocation",
      "If realloc fails, the original pointer value can be lost",
      "realloc always frees p first",
      "realloc works only for char pointers",
    ],
    answer: 1,
    explanation:
      "A failed realloc returns NULL while the original allocation remains valid. Assigning directly to p can lose the only pointer to that allocation.",
  },
  {
    id: 12,
    question: "Which declaration means 'constant pointer to a modifiable int'?",
    options: [
      "const int *p",
      "int *const p",
      "const int *const p",
      "int const p*",
    ],
    answer: 1,
    explanation:
      "int *const p makes p itself non-reassignable, while the int pointed to by p may still be modified.",
  },
  {
    id: 13,
    question: "What is the output?",
    code: `int f(int n) {
    static int x = 0;

    if (n == 0)
        return x;

    x += n;
    return f(n - 1);
}

printf("%d", f(3));`,
    options: ["3", "5", "6", "0"],
    answer: 2,
    explanation:
      "The recursive calls add 3, 2, and 1 to the retained static value, so the base case returns 6.",
  },
  {
    id: 14,
    question: "Which statement about malloc is correct?",
    options: [
      "malloc initializes allocated bytes to zero",
      "malloc returns suitably aligned uninitialized storage",
      "malloc automatically frees memory at function return",
      "malloc can allocate only character arrays",
    ],
    answer: 1,
    explanation:
      "malloc allocates storage without initializing its contents. The returned storage is suitably aligned for ordinary object types.",
  },
  {
    id: 15,
    question: "Which condition is essential when passing a character to the ctype functions such as isalpha?",
    options: [
      "It must always be a signed char",
      "It must be EOF or representable as unsigned char",
      "It must always be an int literal",
      "It must always be a pointer",
    ],
    answer: 1,
    explanation:
      "The ctype functions require EOF or a value representable as unsigned char. Passing a negative signed-char value other than EOF can cause undefined behavior.",
  },
  {
    id: 16,
    question: "What does restrict primarily express?",
    options: [
      "The pointer cannot be reassigned",
      "The pointed object is read-only",
      "An aliasing promise that can enable optimization",
      "The pointer automatically owns allocated memory",
    ],
    answer: 2,
    explanation:
      "restrict is a contract about how an object is accessed through a pointer and can allow the compiler to make stronger optimization assumptions.",
  },
  {
    id: 17,
    question: "What is printed on a typical implementation where unsigned char promotes to int?",
    code: `unsigned char a = 250;
unsigned char b = 10;

printf("%d", a + b);`,
    options: ["4", "260", "250", "Compilation error"],
    answer: 1,
    explanation:
      "The unsigned char operands undergo integer promotion before addition. They are normally promoted to int, so 250 + 10 produces 260.",
  },
  {
    id: 18,
    question: "What does sizeof print?",
    code: `char s[] = "C";
printf("%zu", sizeof(s));`,
    options: ["1", "2", "sizeof(char *)", "0"],
    answer: 1,
    explanation:
      "The array contains the character C plus the terminating null character, so it has two char elements.",
  },
  {
    id: 19,
    question: "Which statement correctly distinguishes memcpy from memmove?",
    options: [
      "memcpy is defined for overlapping regions",
      "memmove is defined for overlapping regions",
      "Neither function can copy raw bytes",
      "memmove works only on strings",
    ],
    answer: 1,
    explanation:
      "memmove guarantees correct behavior when the source and destination overlap. memcpy requires that they do not overlap.",
  },
  {
    id: 20,
    question: "What is printed?",
    code: `int a[5] = {1, 2, 3, 4, 5};
int *p = &a[4];

printf("%d", p[-2]);`,
    options: ["2", "3", "4", "5"],
    answer: 1,
    explanation:
      "p points to a[4]. p[-2] is *(p - 2), which refers to a[2], containing 3.",
  },
  {
    id: 21,
    question: "Which statement about a flexible array member is correct?",
    options: [
      "It must be the first member",
      "It is always allocated separately",
      "It must be the last named member of the structure",
      "It can be followed by any number of named fields",
    ],
    answer: 2,
    explanation:
      "A flexible array member appears as the final named member of a structure. Extra storage may be allocated after the structure for its elements.",
  },
  {
    id: 22,
    question: "What does this declaration mean?",
    code: `const int * volatile p;`,
    options: [
      "p is a constant pointer to volatile int",
      "p is a volatile pointer to const int",
      "Both p and the pointed object are volatile",
      "p is an immutable pointer",
    ],
    answer: 1,
    explanation:
      "The volatile qualifier applies to p itself, while const applies to the int object pointed to by p.",
  },
  {
    id: 23,
    question: "What is printed?",
    code: `int x = 1;

if (x & 1 == 1)
    printf("A");
else
    printf("B");`,
    options: ["A", "B", "Compilation error", "Undefined behavior"],
    answer: 0,
    explanation:
      "Equality has higher precedence than bitwise AND, so the condition is x & (1 == 1), which becomes 1 & 1 and is nonzero.",
  },
  {
    id: 24,
    question: "Which statement is correct?",
    code: `int x = 10;

int * const p = &x;
const int *q = &x;`,
    options: [
      "Both p and q are constant pointers",
      "p cannot point elsewhere, while q cannot modify x through q",
      "q cannot point elsewhere, while p cannot modify x",
      "Neither declaration uses const meaningfully",
    ],
    answer: 1,
    explanation:
      "p is a constant pointer to a modifiable int. q is a pointer to const int and may be redirected to another int object.",
  },
  {
    id: 25,
    question: "What is printed?",
    code: `int a[] = {10, 20, 30, 40, 50};
int *p = a + 1;
int *q = a + 4;

printf("%td", q - p);`,
    options: ["3", "4", "12", "The addresses are printed"],
    answer: 0,
    explanation:
      "Pointer subtraction within the same array gives the number of elements separating the pointers. a[4] - a[1] is 3 elements.",
  },
];

const PASS_MARK = 18;

export default function CExam() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const score = useMemo(
    () =>
      questions.reduce(
        (total, question) =>
          total + (selectedAnswers[question.id] === question.answer ? 1 : 0),
        0
      ),
    [selectedAnswers]
  );

  const percentage = Math.round((score / questions.length) * 100);
  const passed = score >= PASS_MARK;
  const answeredCount = Object.keys(selectedAnswers).length;

  const selectAnswer = (optionIndex: number) => {
    if (submitted) return;

    setSelectedAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: optionIndex,
    }));
  };

  const goToQuestion = (index: number) => {
    if (submitted) return;

    setCurrentQuestionIndex(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goNext = () => {
    if (selectedAnswers[currentQuestion.id] === undefined) return;

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((previous) => previous + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goPrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((previous) => previous - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const retakeExam = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getOptionLetter = (index: number) =>
    String.fromCharCode(65 + index);

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 pb-10 pt-28 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl exam-result-page">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div
              className={`px-6 py-12 text-center ${
                passed
                  ? "bg-green-50 dark:bg-green-950/20"
                  : "bg-red-50 dark:bg-red-950/20"
              }`}
            >
              <div
                className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full text-4xl font-bold text-white ${
                  passed ? "bg-green-600" : "bg-red-600"
                }`}
              >
                {passed ? "âœ“" : "×"}
              </div>

              <p
                className={`mt-6 text-sm font-bold uppercase tracking-widest ${
                  passed
                    ? "text-green-700 dark:text-green-400"
                    : "text-red-700 dark:text-red-400"
                }`}
              >
                {passed ? "Assessment Passed" : "Assessment Not Passed"}
              </p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
                {passed ? "Congratulations!" : "Keep Learning and Try Again"}
              </h1>

              <p className="mt-2 text-slate-500 dark:text-slate-400">
                C Development Final Assessment
              </p>

              <div className="mx-auto mt-8 flex h-44 w-44 flex-col items-center justify-center rounded-full border-8 border-white bg-white shadow-lg dark:border-slate-800 dark:bg-slate-950">
                <span
                  className={`text-5xl font-black ${
                    passed ? "text-green-600" : "text-red-600"
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

            <div className="grid border-t border-slate-200 sm:grid-cols-3 dark:border-slate-800">
              <div className="border-b p-6 text-center sm:border-b-0 sm:border-r dark:border-slate-800">
                <p className="text-3xl font-black text-green-600">{score}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">Correct</p>
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
                <p className="text-3xl font-black text-blue-600">{PASS_MARK}</p>
                <p className="mt-1 text-sm font-semibold text-slate-500">
                  Required
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3 p-6 sm:flex-row">
              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("c-answer-review")
                    ?.scrollIntoView({ behavior: "smooth" })
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
          </div>

          <section id="c-answer-review" className="mt-10">
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
                const userAnswer = selectedAnswers[question.id];
                const isCorrect = userAnswer === question.answer;

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
                            isCorrect ? "bg-green-600" : "bg-red-600"
                          }`}
                        >
                          {isCorrect ? "âœ“" : "×"}
                        </span>

                        <span className="font-bold text-slate-900 dark:text-white">
                          Question {questionIndex + 1}
                        </span>
                      </div>

                      <span
                        className={`text-xs font-bold ${
                          isCorrect ? "text-green-700" : "text-red-700"
                        }`}
                      >
                        {isCorrect ? "CORRECT" : "INCORRECT"}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="whitespace-pre-line font-bold leading-7 text-slate-900 dark:text-white">
                        {question.question}
                      </h3>

                      {question.code && (
                        <pre className="mt-5 overflow-x-auto rounded-lg bg-slate-950 p-5 text-sm leading-7 text-slate-200">
                          <code>{question.code}</code>
                        </pre>
                      )}

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                            Your Answer
                          </p>
                          <p className="mt-2 whitespace-pre-line text-sm font-semibold text-slate-800 dark:text-slate-200">
                            {userAnswer !== undefined
                              ? `${getOptionLetter(userAnswer)}. ${question.options[userAnswer]}`
                              : "Not answered"}
                          </p>
                        </div>

                        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-900 dark:bg-green-950/20">
                          <p className="text-xs font-bold uppercase tracking-wider text-green-600">
                            Correct Answer
                          </p>
                          <p className="mt-2 whitespace-pre-line text-sm font-semibold text-slate-800 dark:text-slate-200">
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
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-12 pt-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            C Development
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
            Final Assessment
          </h1>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            25 questions | Passing score: 18/25 | No time limit
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-6">
            <h2 className="font-bold text-slate-900 dark:text-white">
              Questions
            </h2>

            <div className="mt-4 grid grid-cols-5 gap-2">
              {questions.map((question, index) => {
                const answered = selectedAnswers[question.id] !== undefined;
                const active = index === currentQuestionIndex;

                return (
                  <button
                    key={question.id}
                    type="button"
                    onClick={() => goToQuestion(index)}
                    className={`h-9 rounded-lg border text-xs font-bold transition ${
                      active
                        ? "border-blue-600 bg-blue-600 text-white"
                        : answered
                          ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300"
                          : "border-slate-200 bg-slate-50 text-slate-500 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:bg-slate-800"
                    }`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 space-y-2 border-t border-slate-200 pt-4 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400">
              <p>
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-blue-600" />
                Current
              </p>
              <p>
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-blue-100 dark:bg-blue-950/50" />
                Answered
              </p>
              <p>
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-sm bg-slate-100 dark:bg-slate-800" />
                Not answered
              </p>
            </div>
          </aside>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 dark:border-slate-800 dark:bg-slate-800/50">
              <div className="flex items-center justify-between gap-4">
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

                <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {answeredCount}/{questions.length} answered
                </span>
              </div>
            </div>

            <div className="px-6 py-7 sm:px-8 sm:py-9">
              <h2 className="whitespace-pre-line text-xl font-bold leading-8 text-slate-900 dark:text-white">
                {currentQuestion.question}
              </h2>

              {currentQuestion.code && (
                <div className="mt-6 overflow-hidden rounded-xl border border-slate-700 bg-slate-950">
                  <div className="border-b border-slate-700 bg-slate-900 px-4 py-2">
                    <span className="text-xs font-semibold text-slate-400">
                      C
                    </span>
                  </div>

                  <pre className="overflow-x-auto p-5 text-sm leading-7 text-slate-200">
                    <code>{currentQuestion.code}</code>
                  </pre>
                </div>
              )}

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
                      onClick={() => selectAnswer(optionIndex)}
                      className={`flex w-full items-center gap-4 rounded-lg border p-4 text-left transition ${
                        selected
                          ? "border-blue-600 bg-transparent dark:border-blue-500 dark:bg-transparent"
                          : "border-slate-200 bg-white hover:border-blue-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-blue-600 dark:hover:bg-slate-800"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-bold ${
                          selected
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-slate-300 bg-slate-50 text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300"
                        }`}
                      >
                        {getOptionLetter(optionIndex)}
                      </span>

                      <span className="whitespace-pre-line text-sm font-medium leading-6 text-slate-800 dark:text-slate-200">
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-9 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
                <button
                  type="button"
                  onClick={goPrevious}
                  disabled={currentQuestionIndex === 0}
                  className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  Previous
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={selectedAnswers[currentQuestion.id] === undefined}
                  className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  {currentQuestionIndex === questions.length - 1
                    ? "Submit Assessment"
                    : "Save & Next"}
                  <span className="ml-2">{"\u2192"}</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}



