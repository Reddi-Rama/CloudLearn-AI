"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Home page doesn't need a Back button
  if (pathname === "/") {
    return null;
  }

  const getParentRoute = () => {
    const parts = pathname.split("/").filter(Boolean);

    /*
     * Learning Paths
     *
     * /learning-paths/frontend-development
     * → /learning-paths
     */
    if (parts[0] === "learning-paths") {
      return "/learning-paths";
    }

    /*
     * Domains
     *
     * /domains/programming
     * → /domains
     *
     * /domains/anything/...
     * → /domains
     */
    if (parts[0] === "domains") {
      return "/domains";
    }

    /*
     * Courses
     *
     * /courses
     * → /
     *
     * /courses/course-id
     * → /courses
     *
     * /courses/course-id/module-id
     * → /courses/course-id
     *
     * /courses/course-id/module-id/lesson-id
     * → /courses/course-id/module-id
     */
    if (parts[0] === "courses") {
      if (parts.length === 1) {
        return "/";
      }

      if (parts.length === 2) {
        return "/courses";
      }

      if (parts.length === 3) {
        return `/courses/${parts[1]}`;
      }

      return `/courses/${parts[1]}/${parts[2]}`;
    }

    /*
     * Other pages:
     * go to Home
     */
    return "/";
  };

  const handleBack = () => {
    router.push(getParentRoute());
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="
        fixed
        left-6
        top-24
        z-[200]
        inline-flex
        items-center
        gap-2
        rounded-xl
        border
        border-slate-300
        bg-white
        px-4
        py-2.5
        text-sm
        font-semibold
        text-slate-700
        shadow-lg
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-sky-400
        hover:bg-sky-50
        hover:text-sky-600
        hover:shadow-xl
      "
    >
      <ArrowLeft size={18} />
      Back
    </button>
  );
}