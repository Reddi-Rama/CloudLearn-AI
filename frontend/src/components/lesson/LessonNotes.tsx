export default function LessonNotes() {
  return (
    <div className="rounded-3xl border border-yellow-200 bg-yellow-50 p-8">
      <h2 className="text-2xl font-bold text-yellow-700">
        📒 Notes Section
      </h2>

      <textarea
        placeholder="Write your notes here..."
        className="mt-6 h-48 w-full rounded-2xl border border-yellow-300 bg-white p-4 outline-none focus:ring-2 focus:ring-yellow-400"
      />
    </div>
  );
}