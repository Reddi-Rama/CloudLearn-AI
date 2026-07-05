export default function LearningPathCard({
  title,
  level,
  duration,
}: {
  title: string;
  level: string;
  duration: string;
}) {
  return (
    <div className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-4 text-slate-600">
        Level : {level}
      </p>

      <p className="mt-2 text-slate-600">
        Duration : {duration}
      </p>

      <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-white">
        View Roadmap
      </button>

    </div>
  );
}