"use client";

interface Props {
  name: string;
  image?: string;
}

export default function Avatar({
  name,
  image,
}: Props) {
  return (
    <div className="flex items-center gap-4">

      <img
        src={image || "/images/avatar.png"}
        alt={name}
        className="h-12 w-12 rounded-full object-cover"
      />

      <span className="font-semibold">

        {name}

      </span>

    </div>
  );
}