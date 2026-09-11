"use client";

import { useMemo, useState } from "react";

type Question = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  code?: string;
};

const questions: Question[] = [
  {
    id: 1,
    question: "What is the output of the following C++ program?",
    code: `int x = 10;
int *p = &x;
int **q = &p;

**p += 5;
**q += 10;

cout << x;`,
    options: ["15", "20", "25", "Compilation error"],
    answer: 2,
    explanation: "p points to x and q points to p. Both **p and **q ultimately access x. Therefore x becomes 10 + 5 + 10 = 25."
  },
  {
    id: 2,
    question: "Consider the following pointer arithmetic. What is printed?",
    code: `int a[] = {10, 20, 30, 40};
int *p = a;

cout << *(p + 1) + *(p + 3);`,
    options: ["40", "50", "60", "70"],
    answer: 2,
    explanation: "p + 1 points to a[1] = 20 and p + 3 points to a[3] = 40. Their sum is 60."
  },
  {
    id: 3,
    question: "Which statement correctly describes the following code?",
    code: `int *p = new int[5];
delete p;`,
    options: [
      "Correctly releases the entire array",
      "Compilation error",
      "The correct form is delete[] p",
      "The pointer automatically becomes nullptr"
    ],
    answer: 2,
    explanation: "Memory allocated using new[] must be released using delete[]. Using delete on an array results in undefined behavior."
  },
  {
    id: 4,
    question: "What is the most important problem in this code?",
    code: `int *p = new int(50);
delete p;
cout << *p;`,
    options: [
      "p is automatically converted to an integer",
      "p becomes a valid pointer again",
      "The program accesses memory after it has been released",
      "There is no problem"
    ],
    answer: 2,
    explanation: "After delete p, the pointer becomes dangling. Dereferencing it accesses released memory."
  },
  {
    id: 5,
    question: "What is printed by this program?",
    code: `int x = 5;
int y = 10;

int *p = &x;
p = &y;

*p = 20;

cout << x << " " << y;`,
    options: ["5 10", "20 10", "5 20", "20 20"],
    answer: 2,
    explanation: "p initially points to x, but is later changed to point to y. Therefore *p = 20 changes y, while x remains 5."
  },
  {
    id: 6,
    question: "Which statement about a pointer to a structure is correct?",
    code: `struct Student {
    int marks;
};

Student s{85};
Student *p = &s;

p->marks = 95;`,
    options: [
      "The structure cannot be modified through p",
      "p->marks is equivalent to (*p).marks",
      "p->marks accesses the address of marks",
      "The code causes a compilation error"
    ],
    answer: 1,
    explanation: "The arrow operator accesses a member through a pointer. p->marks is equivalent to (*p).marks."
  },
  {
    id: 7,
    question: "What is the output?",
    code: `int a[] = {2, 4, 6, 8};
int *p = a;

cout << *p++ << " ";
cout << *p;`,
    options: ["2 2", "2 4", "4 4", "4 6"],
    answer: 1,
    explanation: "Postfix ++ has higher precedence than *. *p++ means *(p++). The first value printed is 2, then p moves to a[1], so the second value is 4."
  },
  {
    id: 8,
    question: "What is the output?",
    code: `int x = 10;
int *p = &x;

int &r = x;
r = 30;

cout << *p;`,
    options: ["10", "20", "30", "Compilation error"],
    answer: 2,
    explanation: "r is a reference to x. Changing r changes x, and p points to x, so *p prints 30."
  },
  {
    id: 9,
    question: "What happens when this function is called?",
    code: `int* create() {
    int x = 100;
    return &x;
}`,
    options: [
      "It safely returns a pointer to x",
      "It returns a pointer to dynamically allocated memory",
      "It returns a pointer to a local variable whose lifetime has ended",
      "It always returns nullptr"
    ],
    answer: 2,
    explanation: "x is a local variable. Its lifetime ends when create() returns, so returning its address creates a dangling pointer."
  },
  {
    id: 10,
    question: "What is the output of the following program?",
    code: `class Base {
public:
    virtual void show() {
        cout << "Base";
    }
};

class Derived : public Base {
public:
    void show() override {
        cout << "Derived";
    }
};

Base *p = new Derived();
p->show();
delete p;`,
    options: ["Base", "Derived", "BaseDerived", "Compilation error"],
    answer: 1,
    explanation: "Because show() is virtual, the call is resolved at runtime according to the actual object type, which is Derived."
  },
  {
    id: 11,
    question: "Why is a virtual destructor important when deleting a derived object through a base pointer?",
    options: [
      "It prevents object creation",
      "It ensures the derived destructor can be invoked correctly",
      "It makes every function virtual",
      "It prevents inheritance"
    ],
    answer: 1,
    explanation: "When deleting through a base pointer, a virtual destructor allows proper destruction of the derived object."
  },
  {
    id: 12,
    question: "What is the output?",
    code: `class A {
public:
    A() {
        cout << "A ";
    }

    ~A() {
        cout << "~A ";
    }
};

int main() {
    A obj;
}`,
    options: [
      "A",
      "~A",
      "A ~A",
      "~A A"
    ],
    answer: 2,
    explanation: "The constructor executes when obj is created and the destructor executes when obj leaves scope."
  },
  {
    id: 13,
    question: "What is the constructor/destructor order in this inheritance example?",
    code: `class Base {
public:
    Base() { cout << "B "; }
    ~Base() { cout << "~B "; }
};

class Derived : public Base {
public:
    Derived() { cout << "D "; }
    ~Derived() { cout << "~D "; }
};

int main() {
    Derived obj;
}`,
    options: [
      "D B ~B ~D",
      "B D ~D ~B",
      "B D ~B ~D",
      "D B ~D ~B"
    ],
    answer: 1,
    explanation: "The base constructor executes before the derived constructor. During destruction, the derived destructor executes before the base destructor."
  },
  {
    id: 14,
    question: "What does this code demonstrate?",
    code: `class Base {
public:
    void show() {
        cout << "Base";
    }
};

class Derived : public Base {
public:
    void show() {
        cout << "Derived";
    }
};

Base *p = new Derived();
p->show();`,
    options: [
      "Runtime polymorphism",
      "Compile-time polymorphism",
      "Function hiding without runtime dispatch",
      "Multiple inheritance"
    ],
    answer: 2,
    explanation: "show() is not virtual. Therefore the call through Base* is resolved using the static type Base*, so this demonstrates function hiding rather than runtime polymorphism."
  },
  {
    id: 15,
    question: "Which statement about the following class is correct?",
    code: `class Test {
    int x;

public:
    Test(int v) : x(v) {}
};`,
    options: [
      "x is initialized after the constructor body executes",
      "x is initialized using the member initializer list",
      "x must be public",
      "The constructor cannot accept an argument"
    ],
    answer: 1,
    explanation: "x(v) is a member initializer. The data member is initialized before the constructor body begins."
  },
  {
    id: 16,
    question: "What happens when an exception is thrown from the function below and not caught there?",
    code: `void process() {
    throw runtime_error("error");
}

int main() {
    try {
        process();
    }
    catch (...) {
        cout << "Handled";
    }
}`,
    options: [
      "The exception is ignored",
      "The program must terminate immediately",
      "The exception propagates to main where it is caught",
      "The compiler removes the exception"
    ],
    answer: 2,
    explanation: "If an exception is not caught in process(), it propagates to the calling function. main() catches it with catch(...)."
  },
  {
    id: 17,
    question: "What is the output?",
    code: `void test() {
    try {
        throw 10;
    }
    catch (int x) {
        cout << "Caught ";
        throw;
    }
}

int main() {
    try {
        test();
    }
    catch (int x) {
        cout << "Again";
    }
}`,
    options: [
      "Caught",
      "Again",
      "Caught Again",
      "Compilation error"
    ],
    answer: 2,
    explanation: "The exception is caught inside test(), printed as Caught, then rethrown using throw. main() catches it and prints Again."
  },
  {
    id: 18,
    question: "What happens to local objects when an exception propagates out of a scope?",
    options: [
      "Their destructors are skipped",
      "They are automatically destroyed during stack unwinding",
      "They become global objects",
      "They are converted into pointers"
    ],
    answer: 1,
    explanation: "During stack unwinding, automatic local objects are destroyed as their stack frames are removed."
  },
  {
    id: 19,
    question: "Which principle is demonstrated by this class?",
    code: `class Resource {
    int *data;

public:
    Resource() {
        data = new int[100];
    }

    ~Resource() {
        delete[] data;
    }
};`,
    options: [
      "RAII",
      "Multiple inheritance",
      "Function overloading",
      "Pointer arithmetic"
    ],
    answer: 0,
    explanation: "The class acquires a resource in its constructor and releases it in its destructor. This is the Resource Acquisition Is Initialization (RAII) principle."
  },
  {
    id: 20,
    question: "What is the main danger if a class owning dynamic memory uses the default copy constructor?",
    options: [
      "The object cannot be constructed",
      "The pointer value may be shallow-copied, causing multiple objects to own the same memory",
      "The compiler always converts it to a reference",
      "The destructor cannot execute"
    ],
    answer: 1,
    explanation: "A default copy can copy the pointer itself rather than the allocated data, potentially causing shared ownership and double deletion."
  },
  {
    id: 21,
    question: "Which statement correctly opens a text file for reading?",
    options: [
      "ofstream file(\"data.txt\");",
      "ifstream file(\"data.txt\");",
      "fstream file.read(\"data.txt\");",
      "fileopen(\"data.txt\");"
    ],
    answer: 1,
    explanation: "ifstream is the standard input file stream used for reading from files."
  },
  {
    id: 22,
    question: "What is the key difference between getline() and formatted extraction using >> when reading text?",
    options: [
      "getline() cannot read files",
      "getline() can read an entire line including spaces",
      ">> always reads an entire file",
      "getline() is only for binary files"
    ],
    answer: 1,
    explanation: "getline() reads characters up to a delimiter, normally the newline, so spaces within the line are preserved."
  },
  {
    id: 23,
    question: "Which pair is appropriate for binary serialization of an object?",
    options: [
      "getline() and put()",
      "read() and write()",
      "cin and cout",
      "open() and close() only"
    ],
    answer: 1,
    explanation: "istream::read() and ostream::write() can transfer raw bytes, commonly used for binary file operations."
  },
  {
    id: 24,
    question: "What is the output?",
    code: `class Base {
public:
    virtual void print() {
        cout << "B";
    }
};

class D1 : public Base {
public:
    void print() override {
        cout << "D1";
    }
};

class D2 : public Base {
public:
    void print() override {
        cout << "D2";
    }
};

Base *arr[2];

arr[0] = new D1();
arr[1] = new D2();

arr[0]->print();
arr[1]->print();`,
    options: ["BB", "D1D1", "D1D2", "D2D1"],
    answer: 2,
    explanation: "Because print() is virtual, each call dispatches according to the actual derived object: D1 followed by D2."
  },
  {
    id: 25,
    question: "What is the output of this complete program?",
    code: `class Resource {
public:
    Resource() {
        cout << "Acquire ";
    }

    ~Resource() {
        cout << "Release ";
    }
};

void test() {
    Resource r;
    throw 1;
}

int main() {
    try {
        test();
    }
    catch (...) {
        cout << "Caught";
    }
}`,
    options: [
      "Acquire Caught",
      "Acquire Release Caught",
      "Release Acquire Caught",
      "Acquire Release"
    ],
    answer: 1,
    explanation: "Resource r is constructed first. When the exception leaves test(), stack unwinding destroys r, so Release is printed before the exception is caught in main()."
  },
];
const getLetter = (index: number) =>
  String.fromCharCode(65 + index);

export default function CppExam() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const score = useMemo(() => {
    return questions.reduce(
      (total, question) =>
        total + (selectedAnswers[question.id] === question.answer ? 1 : 0),
      0
    );
  }, [selectedAnswers]);

  const percentage = Math.round((score / questions.length) * 100);
  const passed = score >= 18;

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
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((previous) => previous + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const retakeExam = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 pt-28 pb-10 dark:bg-slate-950">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                C++ Development
              </p>

              <h1 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
                Final Exam Result
              </h1>

              <div className="mt-8 text-6xl font-black text-slate-900 dark:text-white">
                {score}/{questions.length}
              </div>

              <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">
                {percentage}%
              </p>

              <div
                className={`mx-auto mt-5 inline-flex rounded-full px-5 py-2 text-sm font-bold ${
                  passed
                    ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300"
                    : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400"
                }`}
              >
                {passed ? "PASS" : "NOT PASSED"}
              </div>

              <p className="mt-5 text-sm text-slate-600 dark:text-slate-400">
                Passing score: 18 out of 25 questions (70%).
              </p>
            </div>

            <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Question Review
              </h2>

              <div className="mt-6 space-y-5">
                {questions.map((question) => {
                  const userAnswer = selectedAnswers[question.id];
                  const correct = userAnswer === question.answer;

                  return (
                    <div
                      key={question.id}
                      className="rounded-2xl border border-slate-200 p-5 dark:border-slate-800"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-semibold text-slate-900 dark:text-white">
                          {question.id}. {question.question}
                        </h3>

                        <span
                          className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                            correct
                              ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300"
                              : "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400"
                          }`}
                        >
                          {correct ? "Correct" : "Incorrect"}
                        </span>
                      </div>

                      {question.code && (
                        <pre className="mt-4 overflow-x-auto rounded-xl bg-slate-950 p-4 text-sm text-slate-100">
                          <code>{question.code}</code>
                        </pre>
                      )}

                      <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-900 dark:text-white">
                          Your answer:
                        </strong>{" "}
                        {userAnswer !== undefined
                          ? `${getLetter(userAnswer)}. ${question.options[userAnswer]}`
                          : "Not answered"}
                      </p>

                      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-900 dark:text-white">
                          Correct answer:
                        </strong>{" "}
                        {getLetter(question.answer)}.{" "}
                        {question.options[question.answer]}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <strong className="text-slate-900 dark:text-white">
                          Explanation:
                        </strong>{" "}
                        {question.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={retakeExam}
                className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900"
              >
                Retake Exam
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-12 pt-28 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            C++ Development
          </p>

          <h1 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">
            Final Assessment
          </h1>

          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            25 questions - Passing score: 18/25 - No time limit
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
                    className={`h-9 rounded-lg text-xs font-bold transition ${
                      active
                        ? "border-blue-600 bg-blue-600 text-white"
                        : answered
                        ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800 dark:bg-blue-950/40 dark:text-blue-300"
                        : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                    }`}
                  >
                    {question.id}
                  </button>
                );
              })}
            </div>

            <div className="mt-5 space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <p>
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Answered
              </p>
              <p>
                <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
                Not answered
              </p>
            </div>
          </aside>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                Question {currentQuestionIndex + 1} of {questions.length}
              </span>

              <span className="text-sm text-slate-500 dark:text-slate-400">
                {Object.keys(selectedAnswers).length}/{questions.length} answered
              </span>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold leading-8 text-slate-900 dark:text-white">
                {currentQuestion.question}
              </h2>

              {currentQuestion.code && (
                <pre className="mt-6 overflow-x-auto rounded-xl bg-slate-950 p-5 text-sm leading-6 text-slate-100">
                  <code>{currentQuestion.code}</code>
                </pre>
              )}

              <div className="mt-6 space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const selected =
                    selectedAnswers[currentQuestion.id] === index;

                  return (
                    <button
                      key={option}
                      type="button"
                      onClick={() => selectAnswer(index)}
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
                            : "border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
                        }`}
                      >
                        {getLetter(index)}
                      </span>

                      <span className="pt-1 text-sm font-medium text-slate-700 dark:text-slate-200">
                        {option}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
              <button
                type="button"
                onClick={() =>
                  setCurrentQuestionIndex((previous) =>
                    Math.max(0, previous - 1)
                  )
                }
                disabled={currentQuestionIndex === 0}
                className="rounded-md border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={goNext}
                className="rounded-md bg-blue-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                {currentQuestionIndex === questions.length - 1
                  ? "Submit Assessment"
                  : "Save & Next"}
                <span className="ml-2">{"\u2192"}</span>
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

