interface ModuleTimelineProps {
  courseId?: string;
  moduleId?: string;
  lessonId?: string;
}

export default function ModuleTimeline({
  moduleId,
}: ModuleTimelineProps) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200">
      <h3 className="font-semibold text-slate-800 mb-5">
        Current Module
      </h3>

      <div className="flex items-center gap-3">
        <div className="h-4 w-4 rounded-full bg-green-500" />

        <p className="text-slate-700 capitalize">
          {moduleId}
        </p>
      </div>
    </div>
  );
}