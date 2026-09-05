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

  if (pathname === "/login") {
    return (
      <div className="cloudlearn-back-nav cloudlearn-back-nav-auth">
        <BackButton
          href="/"
          label="Back to Home"
        />
      </div>
    );
  }


  /*
   * ============================================================
   * REGISTER
   * ============================================================
   */

  if (
    pathname === "/register" ||
    pathname === "/forgot-password" ||
    pathname === "/reset-password"
  ) {
    return (
      <div className="cloudlearn-back-nav cloudlearn-back-nav-auth">
        <BackButton
          href="/login"
          label="Back to Login"
        />
      </div>
    );
  }


  /*
   * ============================================================
   * COMING SOON
   *
   * It already has its own contextual button.
   * ============================================================
   */

  if (pathname === "/coming-soon") {
    return null;
  }


  /*
   * ============================================================
   * LEARNING PATH DETAIL PAGES
   *
   * These already have:
   * ← Back to Learning Paths
   * ============================================================
   */

  if (
    pathname.startsWith("/learning-paths/") &&
    pathname !== "/learning-paths"
  ) {
    return null;
  }


  /*
   * ============================================================
   * DOMAIN DETAIL PAGES
   *
   * [domain]/page.tsx already has its own button.
   * ============================================================
   */

  if (/^\/domains\/[^/]+$/.test(pathname)) {
    return null;
  }


  /*
   * ============================================================
   * COURSE DETAIL
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