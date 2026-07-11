"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="grid grid-cols-2 gap-4">

      <button
  type="button"
  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-300 py-3 transition hover:bg-slate-100"
>
  <FcGoogle size={22} />
  Google
</button>

<button
  type="button"
  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-300 py-3 transition hover:bg-slate-100"
>
  <FaGithub size={22} />
  GitHub
</button>

    </div>
  );
}