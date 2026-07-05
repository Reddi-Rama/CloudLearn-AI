"use client";

import { Camera, User } from "lucide-react";

export default function ProfileAvatar() {
  return (
    <div className="relative mx-auto h-36 w-36">

      <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl">

        <User size={70} />

      </div>

      <button className="absolute bottom-2 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg">

        <Camera
          size={18}
          className="text-blue-600"
        />

      </button>

    </div>
  );
}