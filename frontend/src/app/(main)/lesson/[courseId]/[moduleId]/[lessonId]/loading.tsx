export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50">
      <div className="space-y-4 text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>

        <h2 className="text-xl font-semibold text-slate-700">
          Loading Lesson...
        </h2>

      </div>
    </div>
  );
}