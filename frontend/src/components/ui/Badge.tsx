import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Badge({
  children,
  className,
}: Props) {
  return (
    <span
      className={clsx(
        "inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600",
        className
      )}
    >
      {children}
    </span>
  );
}