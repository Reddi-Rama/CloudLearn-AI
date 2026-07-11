"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  isAuthenticated,
} from "@/lib/auth";

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({
  children,
}: Props) {
  const router =
    useRouter();

  const [
    loading,
    setLoading,
  ] = useState(true);

  useEffect(() => {
    if (
      !isAuthenticated()
    ) {
      router.push(
        "/login",
      );

      return;
    }

    setLoading(
      false,
    );
  }, [router]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return <>{children}</>;
}