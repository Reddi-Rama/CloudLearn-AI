export default function QuizSection() {
  return (
    <div className="rounded-3xl border border-purple-200 bg-purple-50 p-8">
      <h2 className="text-2xl font-bold text-purple-700">
        Quick Check
      </h2>

      <div className="mt-6 rounded-2xl bg-white p-6">
        <p className="font-medium text-slate-800">
          Did you understand the concepts covered in this lesson?
        </p>

        <div className="mt-5 flex gap-4">
          <button className="rounded-xl bg-green-500 px-5 py-3 text-white">
            Yes
          </button>

          <button className="rounded-xl bg-red-500 px-5 py-3 text-white">
            Need Revision
          </button>
        </div>
      </div>
    </div>
  );
}