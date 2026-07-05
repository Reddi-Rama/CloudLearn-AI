"use client";

import { Globe, Mail, User } from "lucide-react";

export default function SocialLinks() {
  return (
    <div className="glass-card rounded-3xl p-6">
      <h2 className="text-2xl font-bold">
        Social Links
      </h2>

      <div className="mt-8 flex gap-4">

        <button className="rounded-2xl bg-blue-100 p-4 text-blue-600 transition hover:bg-blue-600 hover:text-white">
          <Globe size={22} />
        </button>

        <button className="rounded-2xl bg-blue-100 p-4 text-blue-600 transition hover:bg-blue-600 hover:text-white">
          <Mail size={22} />
        </button>

        <button className="rounded-2xl bg-blue-100 p-4 text-blue-600 transition hover:bg-blue-600 hover:text-white">
          <User size={22} />
        </button>

      </div>
    </div>
  );
}