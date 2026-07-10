"use client";

import { ReactNode } from "react";

import StudentSidebar from "./StudentSidebar";
import StudentTopbar from "./StudentTopbar";

interface StudentLayoutProps {
  children: ReactNode;
}

export default function StudentLayout({
  children,
}: StudentLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">

      <StudentSidebar />

      <div className="ml-72">

        <StudentTopbar />

        <main className="min-h-[calc(100vh-80px)] p-8">

          {children}

        </main>

      </div>

    </div>
  );
}