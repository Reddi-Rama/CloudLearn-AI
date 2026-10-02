"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import BackButton from "./BackButton";

export default function BackNavigation() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.scrollLeft = 0;
    document.body.scrollLeft = 0;

    window.scrollTo({
      left: 0,
      top: window.scrollY,
      behavior: "instant",
    });
  }, [pathname]);

  /* HOME */
  if (pathname === "/") {
    return null;
  }

  /* AUTH PAGES */
  if (pathname === "/login") {
    return (
      <div className="cloudlearn-back-nav">
        <BackButton href="/" label="Back to Home" />
      </div>
    );
  }

  if (
    pathname === "/register" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password"
  ) {
    return (
      <div className="cloudlearn-back-nav">
        <BackButton href="/login" label="Back to Login" />
      </div>
    );
  }

  /* AIML LESSONS HAVE THEIR OWN NAVIGATION */
  if (pathname.startsWith("/lesson/aiml/")) {
    return null;
  }

  /* PROGRAMMING LESSONS HAVE THEIR OWN COURSE NAVIGATION */
  if (pathname.startsWith("/lesson/")) {
    return null;
  }

  /* ALL LEARNING-PATH PAGES HAVE THEIR OWN NAVIGATION */
  if (pathname === "/learning-paths") {
    return null;
  }

  if (pathname.startsWith("/learning-paths/")) {
    return null;
  }

  /* MAIN DOMAIN PAGE HAS ITS OWN NAVIGATION */
  if (pathname === "/domains") {
    return null;
  }

  /* AI & MACHINE LEARNING DOMAIN */
  if (pathname === "/domains/aiml") {
    return null;
  }

  /* DOMAIN DETAIL PAGES HAVE THEIR OWN NAVIGATION */
  if (/^\/domains\/[^/]+$/.test(pathname)) {
    return null;
  }

  /* AIML COURSE PAGES */
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

  /* OTHER COURSE DETAIL PAGES */
  if (
    pathname.startsWith("/courses/") &&
    pathname !== "/courses"
  ) {
    return (
      <div className="cloudlearn-back-nav">
        <BackButton href="/courses" label="Back to Courses" />
      </div>
    );
  }

  /* MAIN COURSE PAGE */
  if (pathname === "/courses") {
    return (
      <div className="cloudlearn-back-nav">
        <BackButton href="/" label="Back to Home" />
      </div>
    );
  }

  /* PAGES THAT ALREADY CONTAIN THEIR OWN NAVIGATION */
  if (pathname === "/about" || pathname === "/contact") {
    return null;
  }

  /* MY CERTIFICATES HAS ITS OWN NAVIGATION */
  if (pathname === "/my-certificates") {
    return null;
  }

  /* DEFAULT */
  return (
    <div className="cloudlearn-back-nav">
      <BackButton href="/" label="Back to Home" />
    </div>
  );
}
