"use client";

import { useAuth } from "@/providers";

export default function useUser() {
  return useAuth();
}