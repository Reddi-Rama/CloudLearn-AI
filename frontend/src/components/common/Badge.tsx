import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
  color?: "blue" | "green" | "red" | "yellow" | "slate";
}

export default function Badge({
  children,
  className,
  color = "blue",
}: Props) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-700",
    slate: "bg-slate-100 text-slate-600",
  };

  return (
    <span
      className={clsx(
        "inline-flex rounded-full px-4 py-1 text-sm font-medium",
        colorClasses[color],
        className
      )}
    >
      {children}
    </span>
  );
}
