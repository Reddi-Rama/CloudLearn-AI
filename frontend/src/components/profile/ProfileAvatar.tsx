"use client";

import { User } from "lucide-react";

interface ProfileAvatarProps {
  image?: string;
  name?: string;
}

export default function ProfileAvatar({
  image,
  name = "Rama",
}: ProfileAvatarProps) {
  return (
    <div className="relative">
      {image ? (
        <img
          src={image}
          alt={name}
          className="
            h-32 w-32
            rounded-full
            object-cover
            border-4 border-sky-100
            shadow-lg
          "
        />
      ) : (
        <div
          className="
            flex h-32 w-32
            items-center justify-center
            rounded-full
            bg-gradient-to-br
            from-sky-500
            to-indigo-600
            text-white
            shadow-lg
          "
        >
          <User size={52} />
        </div>
      )}

      <div
        className="
          absolute bottom-2 right-2
          h-5 w-5
          rounded-full
          border-2 border-white
          bg-green-500
        "
      />
    </div>
  );
}