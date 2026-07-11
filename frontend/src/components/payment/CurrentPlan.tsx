export default function CurrentPlan() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold">
        Current Plan
      </h2>

      <p className="mt-6 text-4xl font-bold text-sky-600">
        CloudLearn Pro
      </p>

      <p className="mt-2 text-slate-500">
        ₹999 / month
      </p>

      <button className="mt-6 rounded-xl bg-sky-600 px-6 py-3 text-white">
        Upgrade Plan
      </button>
    </div>
  );
}