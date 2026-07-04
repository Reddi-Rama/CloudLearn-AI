=import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "glass-card rounded-3xl p-6",
        className
      )}
    >
      {children}
    </div>
  );
}