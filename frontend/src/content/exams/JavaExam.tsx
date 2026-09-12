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

const getLetter = (index: number) => String.fromCharCode(65 + index);

const questions: Question[] = [
  {
    id: 1,
    question: "What is the output of this Java program?",
    code: `class Parent {
    Parent() {
        show();
    }
    void show() {
        System.out.println("Parent");
    }
}

class Child extends Parent {
    int x = 20;

    Child() {
        x = 30;
    }

    @Override
    void show() {
        System.out.println(x);
    }
}

public class Test {
    public static void main(String[] args) {
        new Child();
    }
}`,
    options: ["0", "20", "30", "Compilation error"],
    answer: 0,
    explanation: "The superclass constructor executes before Child's instance field initializers. The overridden show() is dynamically dispatched, but x still has its default int value 0 when show() executes."
  },
  {
    id: 2,
    question: "What is printed by the following program?",
    code: `class A {
    static int x = 10;

    A() {
        x += 5;
    }
}

class B extends A {
    B() {
        x += 10;
    }
}

public class Test {
    public static void main(String[] args) {
        new A();
        new B();
        System.out.println(A.x);
    }
}`,
    options: ["15", "25", "30", "35"],
    answer: 3,
    explanation: "The first A object changes x from 10 to 15. Creating B first invokes A's constructor, changing x to 20, then B's constructor changes it to 30. Therefore the output is 30."
  },
  {
    id: 3,
    question: "Which output is produced by this initialization sequence?",
    code: `class Demo {
    static {
        System.out.print("S ");
    }

    {
        System.out.print("I ");
    }

    Demo() {
        System.out.print("C ");
    }

    public static void main(String[] args) {
        System.out.print("M ");
        new Demo();
        new Demo();
    }
}`,
    options: [
      "M S I C I C",
      "S M I C I C",
      "M I C S I C",
      "S I C M I C"
    ],
    answer: 1,
    explanation: "The static block runs when the class is initialized, before main executes. Each object then runs its instance initializer followed by its constructor."
  },
  {
    id: 4,
    question: "What is the output of the following polymorphism example?",
    code: `class A {
    void print() {
        System.out.print("A ");
    }
}

class B extends A {
    @Override
    void print() {
        System.out.print("B ");
    }
}

class C extends B {
    @Override
    void print() {
        System.out.print("C ");
    }
}

public class Test {
    public static void main(String[] args) {
        A obj = new C();
        obj.print();

        B b = (B) obj;
        b.print();

        A a = new B();
        a.print();
    }
}`,
    options: ["A B B", "C C B", "C B A", "Compilation error"],
    answer: 1,
    explanation: "Method calls are dynamically dispatched based on the actual object. Both obj and b refer to the C object, so both calls print C. The third reference points to a B object and prints B."
  },
  {
    id: 5,
    question: "What is the output when static methods are hidden?",
    code: `class Parent {
    static void show() {
        System.out.print("P ");
    }
}

class Child extends Parent {
    static void show() {
        System.out.print("C ");
    }
}

public class Test {
    public static void main(String[] args) {
        Parent p = new Child();
        Child c = new Child();

        p.show();
        c.show();
    }
}`,
    options: ["P C", "C C", "P P", "Compilation error"],
    answer: 0,
    explanation: "Static methods are resolved using the reference type rather than dynamic dispatch. p is declared Parent, while c is declared Child."
  },
  {
    id: 6,
    question: "What is the output of this String comparison?",
    code: `public class Test {
    public static void main(String[] args) {
        String a = "Java";
        String b = "Ja" + "va";
        String c = new String("Java");

        System.out.println((a == b) + " " + (a == c) + " " + a.equals(c));
    }
}`,
    options: [
      "true true true",
      "true false true",
      "false false true",
      "true false false"
    ],
    answer: 1,
    explanation: "The compile-time constant expression Ja + va refers to the same pooled String object as a. new String creates a separate object, so == is false for a and c, while equals() compares contents."
  },
  {
    id: 7,
    question: "What does the following program print?",
    code: `public class Test {
    public static void main(String[] args) {
        String s = "A";
        String t = s;

        s += "B";
        t += "C";

        System.out.println(s + " " + t);
    }
}`,
    options: ["ABC ABC", "AB AC", "ABC AC", "AB ABC"],
    answer: 1,
    explanation: "Strings are immutable. s += B creates a new String while t still refers to the original A. Then t += C creates AC."
  },
  {
    id: 8,
    question: "What is the output of this try-finally construct?",
    code: `public class Test {
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
    options: ["10", "20", "Compilation error", "Runtime exception"],
    answer: 1,
    explanation: "The return statement in finally executes after the try return has been evaluated and overrides the earlier return value. Therefore test() returns 20."
  },
  {
    id: 9,
    question: "What is printed when the exception propagates?",
    code: `public class Test {
    static void first() {
        try {
            throw new IllegalArgumentException();
        } catch (RuntimeException e) {
            System.out.print("A ");
            throw e;
        } finally {
            System.out.print("F ");
        }
    }

    public static void main(String[] args) {
        try {
            first();
        } catch (IllegalArgumentException e) {
            System.out.print("B ");
        }
    }
}`,
    options: ["A B F", "A F B", "B A F", "A F"],
    answer: 1,
    explanation: "The catch block prints A and rethrows the exception. Before control leaves first(), finally prints F. The outer catch then prints B."
  },
  {
    id: 10,
    question: "What happens when this ArrayList is modified during enhanced for traversal?",
    code: `import java.util.*;

public class Test {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(Arrays.asList(1, 2, 3));

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
      "IndexOutOfBoundsException"
    ],
    answer: 2,
    explanation: "The enhanced for loop uses an Iterator internally. Structural modification of an ArrayList outside that iterator invalidates the iterator and normally causes ConcurrentModificationException."
  },
  {
    id: 11,
    question: "What is the size of the HashSet?",
    code: `import java.util.*;

public class Test {
    public static void main(String[] args) {
        Set<String> set = new HashSet<>();

        set.add(new String("Java"));
        set.add(new String("Java"));
        set.add("JAVA");

        System.out.println(set.size());
    }
}`,
    options: ["1", "2", "3", "Compilation error"],
    answer: 1,
    explanation: "The two String objects containing Java are equal according to String.equals() and have the same hash code, so HashSet stores only one of them. JAVA is different, giving a size of 2."
  },
  {
    id: 12,
    question: "Which result is possible when equals() is overridden but hashCode() is not?",
    code: `import java.util.*;

class Student {
    int id;

    Student(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        return o instanceof Student && ((Student)o).id == id;
    }
}

public class Test {
    public static void main(String[] args) {
        Set<Student> set = new HashSet<>();
        set.add(new Student(10));
        set.add(new Student(10));
        System.out.println(set.size());
    }
}`,
    options: [
      "Always 1",
      "Always 2",
      "Either 1 or 2, depending on hash distribution",
      "Compilation error"
    ],
    answer: 2,
    explanation: "Because hashCode() is not overridden consistently with equals(), equal objects can have different hash codes. HashSet is therefore not guaranteed to eliminate the duplicate. The result can be 1 or 2."
  },
  {
    id: 13,
    question: "What is printed by this HashMap program?",
    code: `import java.util.*;

public class Test {
    public static void main(String[] args) {
        Map<String, Integer> map = new HashMap<>();

        map.put("A", 10);
        map.put("B", 20);
        map.put("A", 30);

        System.out.println(map.size() + " " + map.get("A"));
    }
}`,
    options: ["3 30", "2 30", "2 10", "3 10"],
    answer: 1,
    explanation: "Putting an existing key replaces its value rather than creating another mapping. The map has two keys and A maps to 30."
  },
  {
    id: 14,
    question: "What is the output of this TreeSet?",
    code: `import java.util.*;

public class Test {
    public static void main(String[] args) {
        Set<Integer> set = new TreeSet<>(
            (a, b) -> Integer.compare(b, a)
        );

        set.add(10);
        set.add(5);
        set.add(20);
        set.add(10);

        System.out.println(set);
    }
}`,
    options: [
      "[5, 10, 20]",
      "[20, 10, 5]",
      "[20, 10, 10, 5]",
      "[10, 5, 20]"
    ],
    answer: 1,
    explanation: "The comparator orders integers in descending order. TreeSet also removes duplicates, so the result is [20, 10, 5]."
  },
  {
    id: 15,
    question: "What is the result of this Stream pipeline?",
    code: `import java.util.*;
import java.util.stream.*;

public class Test {
    public static void main(String[] args) {
        long result = Stream.of(1, 2, 3, 4, 5, 6)
            .filter(x -> x % 2 == 0)
            .map(x -> x * x)
            .filter(x -> x > 10)
            .count();

        System.out.println(result);
    }
}`,
    options: ["2", "3", "4", "6"],
    answer: 1,
    explanation: "Even values are 2, 4, and 6. Their squares are 4, 16, and 36. Two values are greater than 10, so count() returns 2."
  },
  {
    id: 16,
    question: "Which statement about this generic method is correct?",
    code: `static <T extends Number> double twice(T value) {
    return value.doubleValue() * 2;
}`,
    options: [
      "It accepts only Integer",
      "It accepts any subtype of Number",
      "It accepts only primitive numeric types",
      "It cannot compile because T cannot extend a class"
    ],
    answer: 1,
    explanation: "The upper bound T extends Number permits Number and its subclasses such as Integer, Double, Float, and Long."
  },
  {
    id: 17,
    question: "What happens with the following wildcard assignment?",
    code: `List<Integer> ints = new ArrayList<>();
List<? extends Number> nums = ints;

nums.add(10);`,
    options: [
      "10 is added successfully",
      "Compilation error",
      "Runtime exception",
      "10 is converted to Number automatically"
    ],
    answer: 1,
    explanation: "A ? extends Number list could represent List<Integer>, List<Double>, or another Number subtype. Java therefore prevents adding a Number because the exact subtype is unknown."
  },
  {
    id: 18,
    question: "What is the output of this List<Integer> operation?",
    code: `import java.util.*;

public class Test {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(
            Arrays.asList(10, 20, 30)
        );

        list.remove(1);

        System.out.println(list);
    }
}`,
    options: [
      "[10, 30]",
      "[20, 30]",
      "[10, 20]",
      "[10, 20, 30]"
    ],
    answer: 0,
    explanation: "List<Integer> has remove(int index) and remove(Object). The literal 1 is an int, so remove(int) is selected and removes the element at index 1, which is 20."
  },
  {
    id: 19,
    question: "What is printed after the remove operation?",
    code: `import java.util.*;

public class Test {
    public static void main(String[] args) {
        List<Integer> list = new ArrayList<>(
            Arrays.asList(10, 20)
        );

        Integer value = 10;
        list.remove(value);

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
    explanation: "Because value is an Integer object, remove(Object) is selected. The value 10 is removed, leaving [20]."
  },
  {
    id: 20,
    question: "Which methods are returned by getDeclaredMethods()?",
    code: `import java.lang.reflect.*;

class Parent {
    private void parentMethod() {}
}

class Child extends Parent {
    public void childMethod() {}
}

public class Test {
    public static void main(String[] args) {
        Method[] methods = Child.class.getDeclaredMethods();
        System.out.println(methods.length);
    }
}`,
    options: [
      "Only childMethod()",
      "childMethod() and parentMethod()",
      "All public methods from Object",
      "Compilation error"
    ],
    answer: 0,
    explanation: "getDeclaredMethods() returns methods declared directly in Child, regardless of access level. It does not include inherited methods from Parent or Object."
  },
  {
    id: 21,
    question: "What is the exact output of this constructor chain?",
    code: `class A {
    A() {
        System.out.print("A ");
    }
}

class B extends A {
    B() {
        System.out.print("B ");
    }
}

class C extends B {
    C() {
        System.out.print("C ");
    }
}

public class Test {
    public static void main(String[] args) {
        new C();
    }
}`,
    options: ["C B A", "A B C", "A C B", "B A C"],
    answer: 1,
    explanation: "Creating C implicitly invokes B's constructor, which first invokes A's constructor. Therefore constructors execute from superclass to subclass: A, B, C."
  },
  {
    id: 22,
    question: "What is printed by this static initialization code?",
    code: `class Counter {
    static int value = initialize();

    static int initialize() {
        System.out.print("I ");
        return 10;
    }
}

public class Test {
    public static void main(String[] args) {
        System.out.print(Counter.value + " ");
        System.out.print(Counter.value);
    }
}`,
    options: [
      "I 10 10",
      "10 I 10",
      "I I 10 10",
      "10 10"
    ],
    answer: 0,
    explanation: "The first active use of Counter initializes its static field, causing initialize() to print I. The initialization occurs only once, after which both accesses print 10."
  },
  {
    id: 23,
    question: "What is the final output?",
    code: `public class Test {
    public static void main(String[] args) {
        try {
            System.out.print("T ");
            throw new Exception();
        } catch (Exception e) {
            System.out.print("C ");
        } finally {
            System.out.print("F ");
        }

        System.out.print("E");
    }
}`,
    options: ["T C F E", "T F C E", "T C E F", "C T F E"],
    answer: 0,
    explanation: "The try block prints T and throws the exception. The catch block prints C, finally prints F, and execution then continues with E."
  },
  {
    id: 24,
    question: "What is printed when fields are hidden but methods are overridden?",
    code: `class Parent {
    int x = 10;

    void show() {
        System.out.print(x + " ");
    }
}

class Child extends Parent {
    int x = 20;

    @Override
    void show() {
        System.out.print(x + " ");
    }
}

public class Test {
    public static void main(String[] args) {
        Parent p = new Child();

        System.out.print(p.x + " ");
        p.show();
    }
}`,
    options: ["10 10", "10 20", "20 10", "20 20"],
    answer: 1,
    explanation: "Fields are resolved using the reference type, so p.x accesses Parent.x and prints 10. Methods use dynamic dispatch, so Child.show() executes and accesses Child.x, printing 20."
  },
  {
    id: 25,
    question: "What is the output when try-with-resources closes the resource?",
    code: `class Resource implements AutoCloseable {
    public void close() {
        System.out.print("C ");
    }
}

public class Test {
    public static void main(String[] args) {
        try (Resource r = new Resource()) {
            System.out.print("T ");
        } catch (Exception e) {
            System.out.print("E ");
        } finally {
            System.out.print("F");
        }
    }
}`,
    options: [
      "T C F",
      "C T F",
      "T F C",
      "T C E F"
    ],
    answer: 0,
    explanation: "The try body prints T. When the try block finishes, the resource is automatically closed, printing C. No exception occurs, so catch is skipped and finally prints F."
  }
];

export default function JavaExam() {
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
                Java Development
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
            Java Development
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

