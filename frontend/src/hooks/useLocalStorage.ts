"use client";

import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue: T
) {
  const [value, setValue] = useState<T>(initialValue);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);

      if (!stored) {
        return;
      }

      const parsed = JSON.parse(stored) as T;
      setValue(parsed);
    } catch {
      localStorage.removeItem(key);
      setValue(initialValue);
    }
  }, [key, initialValue]);

  const updateValue = (newValue: T) => {
    setValue(newValue);

    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch {
      // Keep the in-memory state even if browser storage is unavailable.
    }
  };

  return [value, updateValue] as const;
}