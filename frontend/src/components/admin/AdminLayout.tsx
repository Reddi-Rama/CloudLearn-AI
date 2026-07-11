"use client";

import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">

      <AdminNavbar />

      <div className="flex">

        <AdminSidebar />

        <main className="flex-1 p-8">

          {children}

        </main>

      </div>

    </div>
  );
}