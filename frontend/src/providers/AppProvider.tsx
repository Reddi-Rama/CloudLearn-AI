"use client";

import { ReactNode } from "react";

import AuthProvider from "./AuthProvider";
import ThemeProvider from "./ThemeProvider";
import ToastProvider from "./ToastProvider";
import QueryProvider from "./QueryProvider";

export default function AppProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeProvider>
      <QueryProvider>
        <AuthProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AuthProvider>
      </QueryProvider>
    </ThemeProvider>
  );
}