"use client";

const testCases = [
  {
    input: "5",
    output: "120",
  },
  {
    input: "3",
    output: "6",
  },
  {
    input: "1",
    output: "1",
  },
];

export default function TestCases() {
  return (
    <section className="rounded-3xl bg-white p-6 shadow-lg">

      <h2 className="text-xl font-bold">
        Sample Test Cases
      </h2>

      <div className="mt-6 space-y-5">

        {testCases.map((test, index) => (

          <div
            key={index}
            className="rounded-xl border p-4"
          >

            <p>

              <strong>Input:</strong> {test.input}

            </p>

            <p className="mt-2">

              <strong>Expected Output:</strong> {test.output}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}