"use client";

import Image from "next/image";
import { User } from "lucide-react";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
}

export default function Avatar({
  src,
  alt = "Avatar",
  size = 64,
}: AvatarProps) {
  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-full border-4 border-white bg-sky-100 shadow-lg"
      style={{
        width: size,
        height: size,
      }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      ) : (
        <User
          size={size * 0.5}
          className="text-sky-600"
        />
      )}
    </div>
  );
}