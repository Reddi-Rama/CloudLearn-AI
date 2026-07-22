interface ExerciseCardProps {
  title: string;
  instruction: string;
}

export default function ExerciseCard({
  title,
  instruction,
}: ExerciseCardProps) {
  return (
    <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6">
      <h3 className="text-xl font-semibold text-orange-700">
        📝 {title}
      </h3>

      <p className="mt-4 text-slate-700 leading-8">
        {instruction}
      </p>

      <button className="mt-6 rounded-xl bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600">
        Start Exercise
      </button>
    </div>
  );
}