"use client";

import { Lock, Save } from "lucide-react";

export default function ResetPasswordForm() {
  return (
    <form className="space-y-6">

      <div>

        <label className="mb-2 block font-medium">

          New Password

        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

          <Lock size={18}/>

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full bg-transparent outline-none"
          />

        </div>

      </div>

      <div>

        <label className="mb-2 block font-medium">

          Confirm Password

        </label>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">

          <Lock size={18}/>

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full bg-transparent outline-none"
          />

        </div>

      </div>

      <button
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
      >

        <Save size={18}/>

        Save Password

      </button>

    </form>
  );
}