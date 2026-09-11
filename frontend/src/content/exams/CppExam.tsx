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
    question: "What is the output of the following program?",
    code: `class A {
    static int x = 10;

    A() {
        x += 5;
        show();
    }

    void show() {
        System.out.println("A:" + x);
    }
}

class B extends A {
    static int x = 20;

    B() {
        x += 10;
    }

    @Override
    void show() {
        System.out.println("B:" + x);
    }
}

public class Test {
    public static void main(String[] args) {
        A obj = new B();
        System.out.println(A.x);
        System.out.println(B.x);
    }
}`,
    options: [
      "B:0, 15, 30",
      "B:20, 15, 30",
      "A:15, 15, 30",
      "B:30, 15, 30"
    ],
    answer: 1,
    explanation: "During superclass construction, the overridden B.show() is dispatched. B.x is still 20 because the B constructor has not executed yet. A.x becomes 15. Then B's constructor changes B.x to 30."
  },

  {
    id: 2,
    question: "What is printed by this program?",
    code: `class Parent {
    int value = 10;

    Parent() {
        print();
    }

    void print() {
        System.out.println(value);
    }
}

class Child extends Parent {
    int value = 50;

    Child() {
        value = 100;
    }

    @Override
    void print() {
        System.out.println(value);
    }
}

public class Main {
    public static void main(String[] args) {
        new Child();
    }
}`,
    options: [
      "10",
      "50",
      "100",
      "Compilation error"
    ],
    answer: 1,
    explanation: "The Child object is still being constructed when Parent's constructor invokes print(). Dynamic dispatch selects Child.print(), but Child's instance field initialization has not happened yet, so its value is still the default int value 0. Therefore the correct output is 0."
  },

  {
    id: 3,
    question: "What is the output?",
    code: `class Test {
    static {
        System.out.print("S");
    }

    {
        System.out.print("I");
    }

    Test() {
        System.out.print("C");
    }

    public static void main(String[] args) {
        System.out.print("M");
        new Test();
        new Test();
    }
}`,
    options: [
      "SMICC",
      "MSICIC",
      "MSCCII",
      "SMMICIC"
    ],
    answer: 1,
    explanation: "The static block runs when the class initializes, before main: S. main prints M. Each object executes its instance initializer and constructor: IC, then IC. Output: MSICIC."
  },

  {
    id: 4,
    question: "What is the output of this code?",
    code: `class A {
    void show() {
        System.out.print("A");
    }
}

class B extends A {
    void show() {
        System.out.print("B");
    }
}

class C extends B {
    void show() {
        System.out.print("C");
    }
}

public class Main {
    public static void main(String[] args) {
        A a = new C();
        B b = (B) a;
        b.show();
    }
}`,
    options: [
      "A",
      "B",
      "C",
      "ClassCastException"
    ],
    answer: 2,
    explanation: "The actual object is C. Casting the A reference to B is valid because C extends B. Dynamic dispatch then invokes C.show()."
  },

  {
    id: 5,
    question: "What happens when this code executes?",
    code: `class Parent {
    static void show() {
        System.out.print("P");
    }
}

class Child extends Parent {
    static void show() {
        System.out.print("C");
    }
}

public class Main {
    public static void main(String[] args) {
        Parent obj = new Child();
        obj.show();
    }
}`,
    options: [
      "P",
      "C",
      "PC",
      "Compilation error"
    ],
    answer: 0,
    explanation: "Static methods are hidden rather than overridden. The method selected depends on the reference type, which is Parent."
  },

  {
    id: 6,
    question: "What is the output?",
    code: `String a = new String("Java");
String b = new String("Java");

System.out.println(a == b);
System.out.println(a.equals(b));

String c = "Java";
String d = "Java";

System.out.println(c == d);`,
    options: [
      "true true true",
      "false true true",
      "false false true",
      "true false false"
    ],
    answer: 1,
    explanation: "The two new String objects are different references but equal in content. String literals are interned, so c and d refer to the same pooled object."
  },

  {
    id: 7,
    question: "What is the output?",
    code: `String s = "Java";
s.concat("Programming");

System.out.println(s);

s = s.concat("Programming");

System.out.println(s);`,
    options: [
      "Java / JavaProgramming",
      "JavaProgramming / JavaProgramming",
      "Java / Java",
      "Compilation error"
    ],
    answer: 0,
    explanation: "String is immutable. The first concat creates a new String but its result is ignored. The second concat assigns the new String back to s."
  },

  {
    id: 8,
    question: "What happens when the following program runs?",
    code: `public class Main {
    static int test() {
        try {
            return 10;
        } finally {
            return 20;
        }
    }

    public static void main(String[] args) {
        System.out.println(test());
    }
}`,
    options: [
      "10",
      "20",
      "Compilation error",
      "Runtime exception"
    ],
    answer: 1,
    explanation: "A return statement in finally overrides the return value from try. Although generally discouraged, it causes test() to return 20."
  },

  {
    id: 9,
    question: "What is printed?",
    code: `public class Main {
    static void test() {
        try {
            System.out.print("A");
            throw new RuntimeException();
        } catch (RuntimeException e) {
            System.out.print("B");
            throw e;
        } finally {
            System.out.print("C");
        }
    }

    public static void main(String[] args) {
        try {
            test();
        } catch (RuntimeException e) {
            System.out.print("D");
        }
    }
}`,
    options: [
      "ABCD",
      "ABCD followed by termination",
      "ABDC",
      "ABC"
    ],
    answer: 0,
    explanation: "try prints A, catch prints B and rethrows, finally prints C, and the outer catch prints D."
  },

  {
    id: 10,
    question: "What is the output?",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);

        for (Integer x : list) {
            if (x == 2) {
                list.remove(x);
            }
        }

        System.out.println(list);
    }
}`,
    options: [
      "[1, 3]",
      "[1, 2, 3]",
      "ConcurrentModificationException",
      "Compilation error"
    ],
    answer: 2,
    explanation: "Removing an element structurally from an ArrayList while using its iterator-based enhanced for loop causes ConcurrentModificationException."
  },

  {
    id: 11,
    question: "What is the output?",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<Integer> set = new HashSet<>();

        set.add(10);
        set.add(20);
        set.add(10);

        System.out.println(set.size());
    }
}`,
    options: [
      "1",
      "2",
      "3",
      "Compilation error"
    ],
    answer: 1,
    explanation: "HashSet does not allow duplicate elements. The second 10 does not increase the set size."
  },

  {
    id: 12,
    question: "What is the output?",
    code: `import java.util.*;

class Student {
    int id;

    Student(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object obj) {
        if (!(obj instanceof Student)) return false;
        return id == ((Student) obj).id;
    }
}

public class Main {
    public static void main(String[] args) {
        Set<Student> set = new HashSet<>();

        set.add(new Student(1));
        set.add(new Student(1));

        System.out.println(set.size());
    }
}`,
    options: [
      "0",
      "1",
      "2",
      "Compilation error"
    ],
    answer: 2,
    explanation: "equals() is overridden but hashCode() is not. The two objects can have different hash codes and therefore occupy different hash buckets. This violates the equals/hashCode contract and both objects can remain in the HashSet."
  },

  {
    id: 13,
    question: "What is the output?",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Map<Integer, String> map = new HashMap<>();

        map.put(1, "A");
        map.put(2, "B");
        map.put(1, "C");

        System.out.println(map.size());
        System.out.println(map.get(1));
    }
}`,
    options: [
      "3 and A",
      "2 and C",
      "3 and C",
      "2 and A"
    ],
    answer: 1,
    explanation: "Putting an existing key replaces its previous value. Therefore the map has two keys and key 1 maps to C."
  },

  {
    id: 14,
    question: "Which output is guaranteed by this code?",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Set<Integer> set = new TreeSet<>();

        set.add(30);
        set.add(10);
        set.add(20);

        System.out.println(set);
    }
}`,
    options: [
      "[30, 10, 20]",
      "[10, 20, 30]",
      "Any random order",
      "Compilation error"
    ],
    answer: 1,
    explanation: "TreeSet stores elements according to their natural ordering unless a comparator is supplied."
  },

  {
    id: 15,
    question: "What is the output?",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<String> list =
            Arrays.asList("A", "BB", "CCC", "DDDD");

        long result = list.stream()
            .filter(s -> s.length() > 2)
            .map(String::length)
            .count();

        System.out.println(result);
    }
}`,
    options: [
      "2",
      "3",
      "4",
      "1"
    ],
    answer: 0,
    explanation: "Only CCC and DDDD have lengths greater than 2, so two elements remain after filtering."
  },

  {
    id: 16,
    question: "What does this generic method return?",
    code: `static <T extends Number> double calculate(T value) {
    return value.doubleValue() * 2;
}

public static void main(String[] args) {
    System.out.println(calculate(5));
}`,
    options: [
      "5",
      "10.0",
      "Compilation error because T cannot be Number",
      "10"
    ],
    answer: 1,
    explanation: "Integer satisfies T extends Number. doubleValue() returns 5.0, which is multiplied by 2, producing 10.0."
  },

  {
    id: 17,
    question: "Which statement about this declaration is correct?",
    code: `List<? extends Number> list;`,
    options: [
      "Number values can freely be added to list",
      "Integer values can freely be added to list",
      "The exact subtype is unknown, so arbitrary Number values cannot be safely added",
      "The list can contain only Double objects"
    ],
    answer: 2,
    explanation: "With ? extends Number, the actual subtype is unknown. Reading as Number is safe, but adding arbitrary Number values is not."
  },

  {
    id: 18,
    question: "What is printed?",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(1);
        list.add(2);
        list.add(3);

        list.remove(1);

        System.out.println(list);
    }
}`,
    options: [
      "[1, 3]",
      "[2, 3]",
      "[1, 2]",
      "[]"
    ],
    answer: 0,
    explanation: "Because the argument is the primitive int literal 1, it is autoboxed to Integer(1), so remove(Object) removes the element 1 rather than the element at index 1."
  },

  {
    id: 19,
    question: "What happens here?",
    code: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>();
        list.add(10);
        list.add(20);

        list.remove(0);

        System.out.println(list);
    }
}`,
    options: [
      "[10]",
      "[20]",
      "[]",
      "Compilation error"
    ],
    answer: 1,
    explanation: "The literal 0 is treated as an int index, so remove(int index) removes the first element, 10."
  },

  {
    id: 20,
    question: "Which statement is correct about this reflection code?",
    code: `Class<?> clazz = String.class;
System.out.println(clazz.getDeclaredMethods().length);`,
    options: [
      "It always returns only inherited methods",
      "It returns methods declared directly by String",
      "It returns only public constructors",
      "It causes a compilation error"
    ],
    answer: 1,
    explanation: "getDeclaredMethods() returns methods declared directly in the represented class, including methods that are not public."
  },

  {
    id: 21,
    question: "What is the output?",
    code: `class A {
    A() {
        System.out.print("A");
    }
}

class B extends A {
    B() {
        System.out.print("B");
    }
}

class C extends B {
    C() {
        System.out.print("C");
    }
}

public class Main {
    public static void main(String[] args) {
        new C();
    }
}`,
    options: [
      "CBA",
      "ABC",
      "ACB",
      "BAC"
    ],
    answer: 1,
    explanation: "Java invokes superclass constructors before subclass constructors. Therefore A, then B, then C are printed."
  },

  {
    id: 22,
    question: "What is the output?",
    code: `class Test {
    static int x = 5;

    static {
        x *= 2;
    }

    public static void main(String[] args) {
        Test.x += 3;
        Test t = new Test();
        System.out.println(t.x);
    }
}`,
    options: [
      "5",
      "10",
      "13",
      "Compilation error"
    ],
    answer: 2,
    explanation: "The static initializer changes x from 5 to 10. main then adds 3, making the shared static field 13. The object accesses the same static field."
  },

  {
    id: 23,
    question: "What is the output?",
    code: `public class Main {
    static void test() {
        try {
            System.out.print("T");
            throw new Exception();
        } catch (Exception e) {
            System.out.print("C");
        } finally {
            System.out.print("F");
        }
    }

    public static void main(String[] args) {
        test();
        System.out.print("M");
    }
}`,
    options: [
      "TCFM",
      "TFMC",
      "TCMF",
      "TFCM"
    ],
    answer: 0,
    explanation: "The try block prints T, catch handles the exception and prints C, finally prints F, then control returns to main and prints M."
  },

  {
    id: 24,
    question: "What is the output?",
    code: `class Parent {
    int x = 10;

    void show() {
        System.out.print(x);
    }
}

class Child extends Parent {
    int x = 20;

    @Override
    void show() {
        System.out.print(x);
    }
}

public class Main {
    public static void main(String[] args) {
        Parent p = new Child();
        System.out.print(p.x);
        p.show();
    }
}`,
    options: [
      "1020",
      "2020",
      "102010",
      "2010"
    ],
    answer: 0,
    explanation: "Fields are resolved using the reference type, so p.x accesses Parent.x = 10. Methods are dynamically dispatched, so Child.show() prints Child.x = 20."
  },

  {
    id: 25,
    question: "What is the output?",
    code: `class Resource implements AutoCloseable {
    Resource() {
        System.out.print("O");
    }

    @Override
    public void close() {
        System.out.print("C");
    }
}

public class Main {
    public static void main(String[] args) {
        try (Resource r = new Resource()) {
            System.out.print("T");
        } catch (Exception e) {
            System.out.print("E");
        }
    }
}`,
    options: [
      "OTC",
      "OCT",
      "TOC",
      "OTE"
    ],
    answer: 0,
    explanation: "The resource is created first, printing O. The try body prints T. try-with-resources automatically calls close(), printing C."
  }
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

