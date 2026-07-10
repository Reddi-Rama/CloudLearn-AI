"use client";

export default function AvatarUploader() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Profile Picture
      </h2>

      <div className="mt-5 flex items-center gap-6">
        <div className="h-24 w-24 rounded-full bg-slate-200"></div>

        <button className="rounded-xl bg-sky-600 px-5 py-3 text-white">
          Upload Avatar
        </button>
      </div>
    </div>
  );
}