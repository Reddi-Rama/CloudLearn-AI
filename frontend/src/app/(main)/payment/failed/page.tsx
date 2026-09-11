export default function PaymentFailedPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-12 pt-28 dark:bg-slate-950">
      <div className="mx-auto max-w-2xl rounded-2xl border border-red-200 bg-white p-10 text-center shadow-sm dark:border-red-900 dark:bg-slate-900">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-3xl text-red-600">
          !
        </div>
        <h1 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
          Payment Failed
        </h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">
          We could not complete your payment. Please try again.
        </p>
      </div>
    </main>
  );
}