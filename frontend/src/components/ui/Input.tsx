import { InputHTMLAttributes } from "react";
import clsx from "clsx";

export default function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "w-full rounded-2xl border border-blue-100 bg-white px-4 py-3 outline-none transition focus:border-blue-500",
        className
      )}
      {...props}
    />
  );
}