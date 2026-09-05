"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Cloud } from "lucide-react";

export default function NavigationLoading() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Page finished changing
    setLoading(false);
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      const link = target.closest("a");

      if (!link) return;

      // Ignore special browser actions
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      // Ignore external links
      if (
        link.target === "_blank" ||
        link.origin !== window.location.origin
      ) {
        return;
      }

      // Ignore empty/hash links
      const href = link.getAttribute("href");

      if (!href || href.startsWith("#")) {
        return;
      }

      // Don't show loader if clicking current page
      if (href === window.location.pathname) {
        return;
      }

      setLoading(true);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#F8FAFC]/90 backdrop-blur-sm">
      <div className="flex flex-col items-center">

        {/* Cloud */}
        <div className="relative flex h-28 w-28 items-center justify-center">

          <div className="absolute h-28 w-28 animate-ping rounded-full bg-sky-200 opacity-30" />

          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 shadow-xl">
            <Cloud
              size={42}
              strokeWidth={2.5}
              className="animate-pulse text-white"
            />
          </div>

        </div>

        <h2 className="mt-5 text-2xl font-black text-slate-900">
          CloudLearn
        </h2>

        <p className="mt-2 text-sm font-medium text-slate-500">
          Loading your learning experience
          <span className="ml-1">
            ...
          </span>
        </p>

      </div>
    </div>
  );
}