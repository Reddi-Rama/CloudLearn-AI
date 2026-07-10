"use client";

export default function ContactForm() {
  return (
    <div className="rounded-[32px] bg-white p-10 shadow-lg">

      <h2 className="text-3xl font-bold text-slate-900">
        Send us a message
      </h2>

      <p className="mt-3 text-slate-500">
        Fill out the form below and our team will get back to you shortly.
      </p>

      <form className="mt-8 space-y-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
            />
          </div>

        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Subject
          </label>

          <input
            type="text"
            placeholder="What is this regarding?"
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium text-slate-700">
            Message
          </label>

          <textarea
            rows={6}
            placeholder="Write your message..."
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-2xl bg-sky-600 py-4 text-lg font-semibold text-white transition hover:bg-sky-700"
        >
          Send Message
        </button>

      </form>

    </div>
  );
}