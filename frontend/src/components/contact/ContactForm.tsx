"use client";

import { FormEvent, useState } from "react";
import { API, apiPost } from "@/lib/api";

export default function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSuccess("");
    setError("");

    if (!fullName.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);

      const result = await apiPost<{
        success: boolean;
        message: string;
      }>(
        `${API.BASE_URL}${API.ENDPOINTS.CONTACT}`,
        {
          fullName: fullName.trim(),
          email: email.trim(),
          subject: subject.trim(),
          message: message.trim(),
        }
      );

      if (!result?.success) {
        throw new Error(result?.message || "Unable to send your message.");
      }

      setSuccess("Your message has been sent successfully.");
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to send your message right now. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-[32px] bg-white p-10 shadow-lg">

      <h2 className="text-3xl font-bold text-slate-900">
        Send us a message
      </h2>

      <p className="mt-3 text-slate-500">
        Fill out the form below and our team will get back to you shortly.
      </p>

      <form
        className="mt-8 space-y-6"
        onSubmit={handleSubmit}
      >

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
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
              value={email}
              onChange={(event) => setEmail(event.target.value)}
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
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
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
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-sky-500"
          />
        </div>

        {success && (
          <p className="text-sm font-medium text-green-600">
            {success}
          </p>
        )}

        {error && (
          <p className="text-sm font-medium text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-sky-600 py-4 text-lg font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

      </form>

    </div>
  );
}
