"use client";

export default function QuestionEditor() {
  return (
    <section className="rounded-[30px] bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Question Editor
      </h2>

      <div className="mt-8 space-y-6">

        <input
          type="text"
          placeholder="Question Title"
          className="w-full rounded-xl border p-4 outline-none focus:border-sky-500"
        />

        <textarea
          rows={6}
          placeholder="Write your question here..."
          className="w-full rounded-xl border p-4 outline-none focus:border-sky-500"
        />

        <button className="rounded-xl bg-sky-600 px-8 py-3 font-semibold text-white transition hover:bg-sky-700">
          Save Question
        </button>

      </div>

    </section>
  );
}