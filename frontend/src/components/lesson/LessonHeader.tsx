interface LessonHeaderProps {
  title: string;
  module: string;
  duration: string;
  difficulty: string;
}

export default function LessonHeader({
  title,
  module,
  duration,
  difficulty,
}: LessonHeaderProps) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-200">
      <p className="text-sky-600 font-medium">{module}</p>

      <h1 className="mt-2 text-4xl font-bold text-slate-900">
        {title}
      </h1>

      <div className="mt-5 flex gap-4 text-sm text-slate-600">
        <span>{duration}</span>
        <span>•</span>
        <span>{difficulty}</span>
      </div>
    </div>
  );
}