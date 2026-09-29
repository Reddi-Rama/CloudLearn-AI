"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import BackButton from "./BackButton";

export default function BackNavigation() {
  const pathname = usePathname();

  /*
   * ============================================================
   * FORCE HORIZONTAL SCROLL POSITION BACK TO ZERO
   * ============================================================
   *
   * This is important because the screenshots show that the
   * entire page can become horizontally shifted.
   */

  useEffect(() => {
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;

    window.scrollTo({
      left: 0,
      top: window.scrollY,
      behavior: "instant",
    });
  }, [pathname]);


  /*
   * ============================================================
   * HOME
   * ============================================================
   */

  if (pathname === "/") {
    return null;
  }


  /*
   * ============================================================
   * LOGIN
   * ============================================================
   */

  /*
   * ============================================================
   * AIML LESSONS
   *
   * AIML lesson pages provide their own course navigation.
   * The global back navigation must stay out of these pages.
   * ============================================================
   */

  if (pathname.startsWith("/lesson/aiml/")) {
    return null;
  }

  /*
   * ============================================================
   * AI & MACHINE LEARNING DOMAIN
   * ============================================================
   */

  if (pathname === "/domains/aiml") {
    return (
      <div className="cloudlearn-back-nav">
        <BackButton
          href="/domains"
          label="Back to Domains"
        />
      </div>
    );
  }


  /*
   * ============================================================
   * AI & MACHINE LEARNING COURSES
   * ============================================================
   */

  const aimlCourses = [
    "/courses/aiml/ai-foundations",
    "/courses/aiml/machine-learning",
    "/courses/aiml/deep-learning",
    "/courses/aiml/generative-ai",
  ];

  if (aimlCourses.includes(pathname)) {
    return (
      <div className="cloudlearn-back-nav">
        <BackButton
          href="/domains/aiml"
          label="Back to AI & Machine Learning"
        />
      </div>
    );
  }


  /*
   * ============================================================
   * OTHER COURSE DETAIL PAGES
   * ============================================================
   */

  if (
    pathname.startsWith("/courses/") &&
    pathname !== "/courses"
  ) {
    return (
      <div className="cloudlearn-back-nav">
        <BackButton
          href="/courses"
          label="Back to Courses"
        />
      </div>
    );
  }


  /*
   * ============================================================
   * MAIN PAGES
   * ============================================================
   */

  const mainPages = [
    "/domains",
    "/learning-paths",
    "/courses",
    "/my-certificates",
    "/certificates",
    "/certificate",
    "/about",
    "/contact",
    "/assessments",
    "/bookmarks",
  ];

  if (mainPages.includes(pathname)) {
    return (
      <div className="cloudlearn-back-nav">
        <BackButton
          href="/"
          label="Back to Home"
        />
      </div>
    );
  }


  /*
   * ============================================================
   * DEFAULT
   * ============================================================
   */

  return (
    <div className="cloudlearn-back-nav">
      <BackButton
        href="/"
        label="Back to Home"
      />
    </div>
  );
}